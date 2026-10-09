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
const ns = /*@__PURE__*/ T.XmlNamespace("http://cognito-idp.amazonaws.com/doc/2016-04-18/");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Cognito Identity Provider",
  serviceShapeName: "AWSCognitoIdentityProviderService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "cognito-idp" });
const ver = /*@__PURE__*/ T.ServiceVersion("2016-04-18");
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
            if (Region === "us-east-1") {
              return e("https://cognito-idp-fips.us-east-1.amazonaws.com");
            }
            if (Region === "us-east-2") {
              return e("https://cognito-idp-fips.us-east-2.amazonaws.com");
            }
            if (Region === "us-west-1") {
              return e("https://cognito-idp-fips.us-west-1.amazonaws.com");
            }
            if (Region === "us-west-2") {
              return e("https://cognito-idp-fips.us-west-2.amazonaws.com");
            }
            return e(
              `https://cognito-idp-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://cognito-idp-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            if ("aws" === _.getAttr(PartitionResult, "name")) {
              return e(`https://cognito-idp.${Region}.amazonaws.com`);
            }
            return e(
              `https://cognito-idp.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://cognito-idp.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
export class AliasExistsException
  extends /*@__PURE__*/ S.TaggedError<AliasExistsException>()(
    "AliasExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class CodeDeliveryFailureException
  extends /*@__PURE__*/ S.TaggedError<CodeDeliveryFailureException>()(
    "CodeDeliveryFailureException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class CodeMismatchException
  extends /*@__PURE__*/ S.TaggedError<CodeMismatchException>()(
    "CodeMismatchException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ConcurrentModificationException
  extends /*@__PURE__*/ S.TaggedError<ConcurrentModificationException>()(
    "ConcurrentModificationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class DeviceKeyExistsException
  extends /*@__PURE__*/ S.TaggedError<DeviceKeyExistsException>()(
    "DeviceKeyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class DuplicateProviderException
  extends /*@__PURE__*/ S.TaggedError<DuplicateProviderException>()(
    "DuplicateProviderException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class EnableSoftwareTokenMFAException
  extends /*@__PURE__*/ S.TaggedError<EnableSoftwareTokenMFAException>()(
    "EnableSoftwareTokenMFAException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ExpiredCodeException
  extends /*@__PURE__*/ S.TaggedError<ExpiredCodeException>()(
    "ExpiredCodeException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class FeatureUnavailableInTierException
  extends /*@__PURE__*/ S.TaggedError<FeatureUnavailableInTierException>()(
    "FeatureUnavailableInTierException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ForbiddenException
  extends /*@__PURE__*/ S.TaggedError<ForbiddenException>()(
    "ForbiddenException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class GroupExistsException
  extends /*@__PURE__*/ S.TaggedError<GroupExistsException>()(
    "GroupExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InternalErrorException
  extends /*@__PURE__*/ S.TaggedError<InternalErrorException>()("InternalErrorException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withServerError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()("InternalServerException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidEmailRoleAccessPolicyException
  extends /*@__PURE__*/ S.TaggedError<InvalidEmailRoleAccessPolicyException>()(
    "InvalidEmailRoleAccessPolicyException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidLambdaResponseException
  extends /*@__PURE__*/ S.TaggedError<InvalidLambdaResponseException>()(
    "InvalidLambdaResponseException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidOAuthFlowException
  extends /*@__PURE__*/ S.TaggedError<InvalidOAuthFlowException>()(
    "InvalidOAuthFlowException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidParameterException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterException>()(
    "InvalidParameterException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      reasonCode: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidPasswordException
  extends /*@__PURE__*/ S.TaggedError<InvalidPasswordException>()(
    "InvalidPasswordException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidSmsRoleAccessPolicyException
  extends /*@__PURE__*/ S.TaggedError<InvalidSmsRoleAccessPolicyException>()(
    "InvalidSmsRoleAccessPolicyException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidSmsRoleTrustRelationshipException
  extends /*@__PURE__*/ S.TaggedError<InvalidSmsRoleTrustRelationshipException>()(
    "InvalidSmsRoleTrustRelationshipException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidUserPoolConfigurationException
  extends /*@__PURE__*/ S.TaggedError<InvalidUserPoolConfigurationException>()(
    "InvalidUserPoolConfigurationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ManagedLoginBrandingExistsException
  extends /*@__PURE__*/ S.TaggedError<ManagedLoginBrandingExistsException>()(
    "ManagedLoginBrandingExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class MFAMethodNotFoundException
  extends /*@__PURE__*/ S.TaggedError<MFAMethodNotFoundException>()(
    "MFAMethodNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class NotAuthorizedException
  extends /*@__PURE__*/ S.TaggedError<NotAuthorizedException>()(
    "NotAuthorizedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class OperationNotEnabledException
  extends /*@__PURE__*/ S.TaggedError<OperationNotEnabledException>()(
    "OperationNotEnabledException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class PasswordHistoryPolicyViolationException
  extends /*@__PURE__*/ S.TaggedError<PasswordHistoryPolicyViolationException>()(
    "PasswordHistoryPolicyViolationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class PasswordResetRequiredException
  extends /*@__PURE__*/ S.TaggedError<PasswordResetRequiredException>()(
    "PasswordResetRequiredException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class PreconditionNotMetException
  extends /*@__PURE__*/ S.TaggedError<PreconditionNotMetException>()(
    "PreconditionNotMetException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class RefreshTokenReuseException
  extends /*@__PURE__*/ S.TaggedError<RefreshTokenReuseException>()(
    "RefreshTokenReuseException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ScopeDoesNotExistException
  extends /*@__PURE__*/ S.TaggedError<ScopeDoesNotExistException>()(
    "ScopeDoesNotExistException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class SoftwareTokenMFANotFoundException
  extends /*@__PURE__*/ S.TaggedError<SoftwareTokenMFANotFoundException>()(
    "SoftwareTokenMFANotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class TermsExistsException
  extends /*@__PURE__*/ S.TaggedError<TermsExistsException>()(
    "TermsExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class TierChangeNotAllowedException
  extends /*@__PURE__*/ S.TaggedError<TierChangeNotAllowedException>()(
    "TierChangeNotAllowedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class TooManyFailedAttemptsException
  extends /*@__PURE__*/ S.TaggedError<TooManyFailedAttemptsException>()(
    "TooManyFailedAttemptsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class TooManyRequestsException
  extends /*@__PURE__*/ S.TaggedError<TooManyRequestsException>()(
    "TooManyRequestsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class UnauthorizedException
  extends /*@__PURE__*/ S.TaggedError<UnauthorizedException>()(
    "UnauthorizedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(401),
  ).pipe(C.withAuthError) {}
export class UnexpectedLambdaException
  extends /*@__PURE__*/ S.TaggedError<UnexpectedLambdaException>()(
    "UnexpectedLambdaException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class UnsupportedIdentityProviderException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedIdentityProviderException>()(
    "UnsupportedIdentityProviderException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class UnsupportedOperationException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedOperationException>()(
    "UnsupportedOperationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class UnsupportedTokenTypeException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedTokenTypeException>()(
    "UnsupportedTokenTypeException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class UnsupportedUserStateException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedUserStateException>()(
    "UnsupportedUserStateException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class UserImportInProgressException
  extends /*@__PURE__*/ S.TaggedError<UserImportInProgressException>()(
    "UserImportInProgressException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class UserLambdaValidationException
  extends /*@__PURE__*/ S.TaggedError<UserLambdaValidationException>()(
    "UserLambdaValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class UsernameExistsException
  extends /*@__PURE__*/ S.TaggedError<UsernameExistsException>()(
    "UsernameExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class UserNotConfirmedException
  extends /*@__PURE__*/ S.TaggedError<UserNotConfirmedException>()(
    "UserNotConfirmedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class UserNotFoundException
  extends /*@__PURE__*/ S.TaggedError<UserNotFoundException>()(
    "UserNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class UserPoolAddOnNotEnabledException
  extends /*@__PURE__*/ S.TaggedError<UserPoolAddOnNotEnabledException>()(
    "UserPoolAddOnNotEnabledException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class UserPoolTaggingException
  extends /*@__PURE__*/ S.TaggedError<UserPoolTaggingException>()(
    "UserPoolTaggingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class WebAuthnChallengeNotFoundException
  extends /*@__PURE__*/ S.TaggedError<WebAuthnChallengeNotFoundException>()(
    "WebAuthnChallengeNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class WebAuthnClientMismatchException
  extends /*@__PURE__*/ S.TaggedError<WebAuthnClientMismatchException>()(
    "WebAuthnClientMismatchException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class WebAuthnConfigurationMissingException
  extends /*@__PURE__*/ S.TaggedError<WebAuthnConfigurationMissingException>()(
    "WebAuthnConfigurationMissingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class WebAuthnCredentialNotSupportedException
  extends /*@__PURE__*/ S.TaggedError<WebAuthnCredentialNotSupportedException>()(
    "WebAuthnCredentialNotSupportedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class WebAuthnNotEnabledException
  extends /*@__PURE__*/ S.TaggedError<WebAuthnNotEnabledException>()(
    "WebAuthnNotEnabledException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class WebAuthnOriginNotAllowedException
  extends /*@__PURE__*/ S.TaggedError<WebAuthnOriginNotAllowedException>()(
    "WebAuthnOriginNotAllowedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class WebAuthnRelyingPartyMismatchException
  extends /*@__PURE__*/ S.TaggedError<WebAuthnRelyingPartyMismatchException>()(
    "WebAuthnRelyingPartyMismatchException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type UserPoolIdType = string;
export type CustomAttributeNameType = string;
export type AttributeDataType = "String" | "Number" | "DateTime" | "Boolean" | (string & {});
const AttributeDataType = S.String;

export type StringType = string;
export interface NumberAttributeConstraintsType {
  MinValue?: string;
  MaxValue?: string;
}
const NumberAttributeConstraintsType = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<NumberAttributeConstraintsType>;
export interface StringAttributeConstraintsType {
  MinLength?: string;
  MaxLength?: string;
}
const StringAttributeConstraintsType = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<StringAttributeConstraintsType>;
export interface SchemaAttributeType {
  Name?: string;
  AttributeDataType?: AttributeDataType;
  DeveloperOnlyAttribute?: boolean;
  Mutable?: boolean;
  Required?: boolean;
  NumberAttributeConstraints?: NumberAttributeConstraintsType;
  StringAttributeConstraints?: StringAttributeConstraintsType;
}
const SchemaAttributeType = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<SchemaAttributeType>;
export type CustomAttributesListType = SchemaAttributeType[];
const CustomAttributesListType = /*@__PURE__*/ __L.at(__c0, 3);
export interface AddCustomAttributesRequest {
  UserPoolId: string;
  CustomAttributes: SchemaAttributeType[];
}
const AddCustomAttributesRequest = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<AddCustomAttributesRequest>;
export interface AddCustomAttributesResponse {}
const AddCustomAttributesResponse = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<AddCustomAttributesResponse>;
export type ClientIdType = string | redacted.Redacted<string>;
export type ClientSecretType = string | redacted.Redacted<string>;
export interface AddUserPoolClientSecretRequest {
  UserPoolId: string;
  ClientId: string | redacted.Redacted<string>;
  ClientSecret?: string | redacted.Redacted<string>;
}
const AddUserPoolClientSecretRequest = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<AddUserPoolClientSecretRequest>;
export type ClientSecretIdType = string;
export interface ClientSecretDescriptorType {
  ClientSecretId?: string;
  ClientSecretValue?: string | redacted.Redacted<string>;
  ClientSecretCreateDate?: Date;
}
const ClientSecretDescriptorType = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<ClientSecretDescriptorType>;
export interface AddUserPoolClientSecretResponse {
  ClientSecretDescriptor?: ClientSecretDescriptorType;
}
const AddUserPoolClientSecretResponse = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<AddUserPoolClientSecretResponse>;
export type UsernameType = string | redacted.Redacted<string>;
export type GroupNameType = string;
export interface AdminAddUserToGroupRequest {
  UserPoolId: string;
  Username: string | redacted.Redacted<string>;
  GroupName: string;
}
const AdminAddUserToGroupRequest = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<AdminAddUserToGroupRequest>;
export interface AdminAddUserToGroupResponse {}
const AdminAddUserToGroupResponse =
  AddCustomAttributesResponse as any as S.Schema<AdminAddUserToGroupResponse>;
export type ClientMetadataType = { [key: string]: string | undefined };
const ClientMetadataType = /*@__PURE__*/ __L.at(__c1, 2);
export interface AdminConfirmSignUpRequest {
  UserPoolId: string;
  Username: string | redacted.Redacted<string>;
  ClientMetadata?: { [key: string]: string | undefined };
}
const AdminConfirmSignUpRequest = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<AdminConfirmSignUpRequest>;
export interface AdminConfirmSignUpResponse {}
const AdminConfirmSignUpResponse =
  AddCustomAttributesResponse as any as S.Schema<AdminConfirmSignUpResponse>;
export type AttributeNameType = string;
export type AttributeValueType = string | redacted.Redacted<string>;
export interface AttributeType {
  Name: string;
  Value?: string | redacted.Redacted<string>;
}
const AttributeType = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<AttributeType>;
export type AttributeListType = AttributeType[];
const AttributeListType = /*@__PURE__*/ __L.at(__c1, 5);
export type PasswordType = string | redacted.Redacted<string>;
export type ForceAliasCreation = boolean;
export type MessageActionType = "RESEND" | "SUPPRESS" | (string & {});
const MessageActionType = S.String;

export type DeliveryMediumType = "SMS" | "EMAIL" | (string & {});
const DeliveryMediumType = S.String;

export type DeliveryMediumListType = DeliveryMediumType[];
const DeliveryMediumListType = /*@__PURE__*/ __L.at(__c1, 6);
export interface AdminCreateUserRequest {
  UserPoolId: string;
  Username: string | redacted.Redacted<string>;
  UserAttributes?: AttributeType[];
  ValidationData?: AttributeType[];
  TemporaryPassword?: string | redacted.Redacted<string>;
  ForceAliasCreation?: boolean;
  MessageAction?: MessageActionType;
  DesiredDeliveryMediums?: DeliveryMediumType[];
  ClientMetadata?: { [key: string]: string | undefined };
}
const AdminCreateUserRequest = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<AdminCreateUserRequest>;
export type UserStatusType =
  | "UNCONFIRMED"
  | "CONFIRMED"
  | "ARCHIVED"
  | "COMPROMISED"
  | "UNKNOWN"
  | "RESET_REQUIRED"
  | "FORCE_CHANGE_PASSWORD"
  | "EXTERNAL_PROVIDER"
  | (string & {});
const UserStatusType = S.String;

export interface MFAOptionType {
  DeliveryMedium?: DeliveryMediumType;
  AttributeName?: string;
}
const MFAOptionType = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<MFAOptionType>;
export type MFAOptionListType = MFAOptionType[];
const MFAOptionListType = /*@__PURE__*/ __L.at(__c2, 1);
export interface UserType {
  Username?: string | redacted.Redacted<string>;
  Attributes?: AttributeType[];
  UserCreateDate?: Date;
  UserLastModifiedDate?: Date;
  Enabled?: boolean;
  UserStatus?: UserStatusType;
  MFAOptions?: MFAOptionType[];
}
const UserType = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<UserType>;
export interface AdminCreateUserResponse {
  User?: UserType;
}
const AdminCreateUserResponse = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<AdminCreateUserResponse>;
export interface AdminDeleteSoftwareTokenRequest {
  UserPoolId: string;
  Username: string | redacted.Redacted<string>;
}
const AdminDeleteSoftwareTokenRequest = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<AdminDeleteSoftwareTokenRequest>;
export interface AdminDeleteSoftwareTokenResponse {}
const AdminDeleteSoftwareTokenResponse =
  AddCustomAttributesResponse as any as S.Schema<AdminDeleteSoftwareTokenResponse>;
export interface AdminDeleteUserRequest {
  UserPoolId: string;
  Username: string | redacted.Redacted<string>;
}
const AdminDeleteUserRequest = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<AdminDeleteUserRequest>;
export interface AdminDeleteUserResponse {}
const AdminDeleteUserResponse = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<AdminDeleteUserResponse>;
export type AttributeNameListType = string[];
const AttributeNameListType = /*@__PURE__*/ __L.at(__c2, 7);
export interface AdminDeleteUserAttributesRequest {
  UserPoolId: string;
  Username: string | redacted.Redacted<string>;
  UserAttributeNames: string[];
}
const AdminDeleteUserAttributesRequest = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<AdminDeleteUserAttributesRequest>;
export interface AdminDeleteUserAttributesResponse {}
const AdminDeleteUserAttributesResponse =
  AddCustomAttributesResponse as any as S.Schema<AdminDeleteUserAttributesResponse>;
export type ProviderNameType = string;
export interface ProviderUserIdentifierType {
  ProviderName?: string;
  ProviderAttributeName?: string;
  ProviderAttributeValue?: string;
}
const ProviderUserIdentifierType = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<ProviderUserIdentifierType>;
export interface AdminDisableProviderForUserRequest {
  UserPoolId: string;
  User: ProviderUserIdentifierType;
}
const AdminDisableProviderForUserRequest = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<AdminDisableProviderForUserRequest>;
export interface AdminDisableProviderForUserResponse {}
const AdminDisableProviderForUserResponse =
  AddCustomAttributesResponse as any as S.Schema<AdminDisableProviderForUserResponse>;
export interface AdminDisableUserRequest {
  UserPoolId: string;
  Username: string | redacted.Redacted<string>;
}
const AdminDisableUserRequest = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<AdminDisableUserRequest>;
export interface AdminDisableUserResponse {}
const AdminDisableUserResponse =
  AdminDeleteUserResponse as any as S.Schema<AdminDisableUserResponse>;
export interface AdminEnableUserRequest {
  UserPoolId: string;
  Username: string | redacted.Redacted<string>;
}
const AdminEnableUserRequest = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<AdminEnableUserRequest>;
export interface AdminEnableUserResponse {}
const AdminEnableUserResponse = AdminDeleteUserResponse as any as S.Schema<AdminEnableUserResponse>;
export type DeviceKeyType = string;
export interface AdminForgetDeviceRequest {
  UserPoolId: string;
  Username: string | redacted.Redacted<string>;
  DeviceKey: string;
}
const AdminForgetDeviceRequest = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<AdminForgetDeviceRequest>;
export interface AdminForgetDeviceResponse {}
const AdminForgetDeviceResponse =
  AddCustomAttributesResponse as any as S.Schema<AdminForgetDeviceResponse>;
export interface AdminGetDeviceRequest {
  DeviceKey: string;
  UserPoolId: string;
  Username: string | redacted.Redacted<string>;
}
const AdminGetDeviceRequest = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<AdminGetDeviceRequest>;
export interface DeviceType {
  DeviceKey?: string;
  DeviceAttributes?: AttributeType[];
  DeviceCreateDate?: Date;
  DeviceLastModifiedDate?: Date;
  DeviceLastAuthenticatedDate?: Date;
}
const DeviceType = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<DeviceType>;
export interface AdminGetDeviceResponse {
  Device: DeviceType;
}
const AdminGetDeviceResponse = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<AdminGetDeviceResponse>;
export interface AdminGetUserRequest {
  UserPoolId: string;
  Username: string | redacted.Redacted<string>;
}
const AdminGetUserRequest = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<AdminGetUserRequest>;
export type UserMFASettingListType = string[];
const UserMFASettingListType = AttributeNameListType as any as S.Schema<UserMFASettingListType>;
export interface AdminGetUserResponse {
  Username: string | redacted.Redacted<string>;
  UserAttributes?: AttributeType[];
  UserCreateDate?: Date;
  UserLastModifiedDate?: Date;
  Enabled?: boolean;
  UserStatus?: UserStatusType;
  MFAOptions?: MFAOptionType[];
  PreferredMfaSetting?: string;
  UserMFASettingList?: string[];
}
const AdminGetUserResponse = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<AdminGetUserResponse>;
export interface AdminGetUserAuthFactorsRequest {
  UserPoolId: string;
  Username: string | redacted.Redacted<string>;
}
const AdminGetUserAuthFactorsRequest = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<AdminGetUserAuthFactorsRequest>;
export type AuthFactorType =
  | "PASSWORD"
  | "EMAIL_OTP"
  | "SMS_OTP"
  | "WEB_AUTHN"
  | "SOFTWARE_TOKEN"
  | (string & {});
export type ConfiguredUserAuthFactorsListType = AuthFactorType[];
const ConfiguredUserAuthFactorsListType =
  DeliveryMediumListType as any as S.Schema<ConfiguredUserAuthFactorsListType>;
export interface AdminGetUserAuthFactorsResponse {
  Username: string | redacted.Redacted<string>;
  PreferredMfaSetting?: string;
  UserMFASettingList?: string[];
  ConfiguredUserAuthFactors?: AuthFactorType[];
}
const AdminGetUserAuthFactorsResponse = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<AdminGetUserAuthFactorsResponse>;
export type AuthFlowType =
  | "USER_SRP_AUTH"
  | "REFRESH_TOKEN_AUTH"
  | "REFRESH_TOKEN"
  | "CUSTOM_AUTH"
  | "ADMIN_NO_SRP_AUTH"
  | "USER_PASSWORD_AUTH"
  | "ADMIN_USER_PASSWORD_AUTH"
  | "USER_AUTH"
  | (string & {});
const AuthFlowType = S.String;

export type AuthParametersType = { [key: string]: string | undefined };
const AuthParametersType = ClientMetadataType as any as S.Schema<AuthParametersType>;
export interface AnalyticsMetadataType {
  AnalyticsEndpointId?: string;
}
const AnalyticsMetadataType = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<AnalyticsMetadataType>;
export interface HttpHeader {
  headerName?: string;
  headerValue?: string;
}
const HttpHeader = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<HttpHeader>;
export type HttpHeaderList = HttpHeader[];
const HttpHeaderList = /*@__PURE__*/ __L.at(__c4, 7);
export interface ContextDataType {
  IpAddress: string;
  ServerName: string;
  ServerPath: string;
  HttpHeaders: HttpHeader[];
  EncodedData?: string;
}
const ContextDataType = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<ContextDataType>;
export type SessionType = string | redacted.Redacted<string>;
export interface AdminInitiateAuthRequest {
  UserPoolId: string;
  ClientId: string | redacted.Redacted<string>;
  AuthFlow: AuthFlowType;
  AuthParameters?: { [key: string]: string | undefined };
  ClientMetadata?: { [key: string]: string | undefined };
  AnalyticsMetadata?: AnalyticsMetadataType;
  ContextData?: ContextDataType;
  Session?: string | redacted.Redacted<string>;
}
const AdminInitiateAuthRequest = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<AdminInitiateAuthRequest>;
export type ChallengeNameType =
  | "SMS_MFA"
  | "EMAIL_OTP"
  | "SOFTWARE_TOKEN_MFA"
  | "SELECT_MFA_TYPE"
  | "MFA_SETUP"
  | "PASSWORD_VERIFIER"
  | "CUSTOM_CHALLENGE"
  | "SELECT_CHALLENGE"
  | "DEVICE_SRP_AUTH"
  | "DEVICE_PASSWORD_VERIFIER"
  | "ADMIN_NO_SRP_AUTH"
  | "NEW_PASSWORD_REQUIRED"
  | "SMS_OTP"
  | "PASSWORD"
  | "WEB_AUTHN"
  | "PASSWORD_SRP"
  | (string & {});
const ChallengeNameType = S.String;

export type ChallengeParametersType = { [key: string]: string | undefined };
const ChallengeParametersType = ClientMetadataType as any as S.Schema<ChallengeParametersType>;
export type TokenModelType = string | redacted.Redacted<string>;
export type IntegerType = number;
export interface NewDeviceMetadataType {
  DeviceKey?: string;
  DeviceGroupKey?: string;
}
const NewDeviceMetadataType = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<NewDeviceMetadataType>;
export interface AuthenticationResultType {
  AccessToken?: string | redacted.Redacted<string>;
  ExpiresIn?: number;
  TokenType?: string;
  RefreshToken?: string | redacted.Redacted<string>;
  IdToken?: string | redacted.Redacted<string>;
  NewDeviceMetadata?: NewDeviceMetadataType;
}
const AuthenticationResultType = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<AuthenticationResultType>;
export type AvailableChallengeListType = ChallengeNameType[];
const AvailableChallengeListType =
  DeliveryMediumListType as any as S.Schema<AvailableChallengeListType>;
export interface AdminInitiateAuthResponse {
  ChallengeName?: ChallengeNameType;
  Session?: string | redacted.Redacted<string>;
  ChallengeParameters?: { [key: string]: string | undefined };
  AuthenticationResult?: AuthenticationResultType;
  AvailableChallenges?: ChallengeNameType[];
}
const AdminInitiateAuthResponse = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<AdminInitiateAuthResponse>;
export interface AdminLinkProviderForUserRequest {
  UserPoolId: string;
  DestinationUser: ProviderUserIdentifierType;
  SourceUser: ProviderUserIdentifierType;
}
const AdminLinkProviderForUserRequest = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<AdminLinkProviderForUserRequest>;
export interface AdminLinkProviderForUserResponse {}
const AdminLinkProviderForUserResponse =
  AddCustomAttributesResponse as any as S.Schema<AdminLinkProviderForUserResponse>;
export type QueryLimitType = number;
export type SearchPaginationTokenType = string;
export interface AdminListDevicesRequest {
  UserPoolId: string;
  Username: string | redacted.Redacted<string>;
  Limit?: number;
  PaginationToken?: string;
}
const AdminListDevicesRequest = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<AdminListDevicesRequest>;
export type DeviceListType = DeviceType[];
const DeviceListType = /*@__PURE__*/ __L.at(__c5, 7);
export interface AdminListDevicesResponse {
  Devices?: DeviceType[];
  PaginationToken?: string;
}
const AdminListDevicesResponse = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<AdminListDevicesResponse>;
export type PaginationKey = string;
export interface AdminListGroupsForUserRequest {
  Username: string | redacted.Redacted<string>;
  UserPoolId: string;
  Limit?: number;
  NextToken?: string;
}
const AdminListGroupsForUserRequest = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<AdminListGroupsForUserRequest>;
export type DescriptionType = string;
export type ArnType = string;
export type PrecedenceType = number;
export interface GroupType {
  GroupName?: string;
  UserPoolId?: string;
  Description?: string;
  RoleArn?: string;
  Precedence?: number;
  LastModifiedDate?: Date;
  CreationDate?: Date;
}
const GroupType = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<GroupType>;
export type GroupListType = GroupType[];
const GroupListType = /*@__PURE__*/ __L.at(__c6, 3);
export interface AdminListGroupsForUserResponse {
  Groups?: GroupType[];
  NextToken?: string;
}
const AdminListGroupsForUserResponse = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<AdminListGroupsForUserResponse>;
export interface AdminListUserAuthEventsRequest {
  UserPoolId: string;
  Username: string | redacted.Redacted<string>;
  MaxResults?: number;
  NextToken?: string;
}
const AdminListUserAuthEventsRequest = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<AdminListUserAuthEventsRequest>;
export type EventType =
  | "SignIn"
  | "SignUp"
  | "ForgotPassword"
  | "PasswordChange"
  | "ResendCode"
  | (string & {});
const EventType = S.String;

export type EventResponseType = "Pass" | "Fail" | "InProgress" | (string & {});
const EventResponseType = S.String;

export type RiskDecisionType = "NoRisk" | "AccountTakeover" | "Block" | (string & {});
const RiskDecisionType = S.String;

export type RiskLevelType = "Low" | "Medium" | "High" | (string & {});
const RiskLevelType = S.String;

export type WrappedBooleanType = boolean;
export interface EventRiskType {
  RiskDecision?: RiskDecisionType;
  RiskLevel?: RiskLevelType;
  CompromisedCredentialsDetected?: boolean;
}
const EventRiskType = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<EventRiskType>;
export type ChallengeName = "Password" | "Mfa" | (string & {});
const ChallengeName = S.String;

export type ChallengeResponse = "Success" | "Failure" | (string & {});
const ChallengeResponse = S.String;

export interface ChallengeResponseType {
  ChallengeName?: ChallengeName;
  ChallengeResponse?: ChallengeResponse;
}
const ChallengeResponseType = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<ChallengeResponseType>;
export type ChallengeResponseListType = ChallengeResponseType[];
const ChallengeResponseListType = /*@__PURE__*/ __L.at(__c7, 0);
export interface EventContextDataType {
  IpAddress?: string;
  DeviceName?: string;
  Timezone?: string;
  City?: string;
  Country?: string;
}
const EventContextDataType = /*@__PURE__*/ __L.at(__c7, 1) as any as S.Schema<EventContextDataType>;
export type FeedbackValueType = "Valid" | "Invalid" | (string & {});
const FeedbackValueType = S.String;

export interface EventFeedbackType {
  FeedbackValue: FeedbackValueType;
  Provider: string;
  FeedbackDate?: Date;
}
const EventFeedbackType = /*@__PURE__*/ __L.at(__c7, 2) as any as S.Schema<EventFeedbackType>;
export interface AuthEventType {
  EventId?: string;
  EventType?: EventType;
  CreationDate?: Date;
  EventResponse?: EventResponseType;
  EventRisk?: EventRiskType;
  ChallengeResponses?: ChallengeResponseType[];
  EventContextData?: EventContextDataType;
  EventFeedback?: EventFeedbackType;
}
const AuthEventType = /*@__PURE__*/ __L.at(__c7, 3) as any as S.Schema<AuthEventType>;
export type AuthEventsType = AuthEventType[];
const AuthEventsType = /*@__PURE__*/ __L.at(__c7, 4);
export interface AdminListUserAuthEventsResponse {
  AuthEvents?: AuthEventType[];
  NextToken?: string;
}
const AdminListUserAuthEventsResponse = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<AdminListUserAuthEventsResponse>;
export interface AdminRemoveUserFromGroupRequest {
  UserPoolId: string;
  Username: string | redacted.Redacted<string>;
  GroupName: string;
}
const AdminRemoveUserFromGroupRequest = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<AdminRemoveUserFromGroupRequest>;
export interface AdminRemoveUserFromGroupResponse {}
const AdminRemoveUserFromGroupResponse =
  AddCustomAttributesResponse as any as S.Schema<AdminRemoveUserFromGroupResponse>;
export interface AdminResetUserPasswordRequest {
  UserPoolId: string;
  Username: string | redacted.Redacted<string>;
  ClientMetadata?: { [key: string]: string | undefined };
}
const AdminResetUserPasswordRequest = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<AdminResetUserPasswordRequest>;
export interface AdminResetUserPasswordResponse {}
const AdminResetUserPasswordResponse =
  AddCustomAttributesResponse as any as S.Schema<AdminResetUserPasswordResponse>;
export type ChallengeResponsesType = { [key: string]: string | undefined };
const ChallengeResponsesType = ClientMetadataType as any as S.Schema<ChallengeResponsesType>;
export interface AdminRespondToAuthChallengeRequest {
  UserPoolId: string;
  ClientId: string | redacted.Redacted<string>;
  ChallengeName: ChallengeNameType;
  ChallengeResponses?: { [key: string]: string | undefined };
  Session?: string | redacted.Redacted<string>;
  AnalyticsMetadata?: AnalyticsMetadataType;
  ContextData?: ContextDataType;
  ClientMetadata?: { [key: string]: string | undefined };
}
const AdminRespondToAuthChallengeRequest = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<AdminRespondToAuthChallengeRequest>;
export interface AdminRespondToAuthChallengeResponse {
  ChallengeName?: ChallengeNameType;
  Session?: string | redacted.Redacted<string>;
  ChallengeParameters?: { [key: string]: string | undefined };
  AuthenticationResult?: AuthenticationResultType;
  AvailableChallenges?: ChallengeNameType[];
}
const AdminRespondToAuthChallengeResponse =
  AdminInitiateAuthResponse as any as S.Schema<AdminRespondToAuthChallengeResponse>;
export interface SMSMfaSettingsType {
  Enabled?: boolean;
  PreferredMfa?: boolean;
}
const SMSMfaSettingsType = /*@__PURE__*/ __L.at(__c8, 1) as any as S.Schema<SMSMfaSettingsType>;
export interface SoftwareTokenMfaSettingsType {
  Enabled?: boolean;
  PreferredMfa?: boolean;
}
const SoftwareTokenMfaSettingsType = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<SoftwareTokenMfaSettingsType>;
export interface EmailMfaSettingsType {
  Enabled?: boolean;
  PreferredMfa?: boolean;
}
const EmailMfaSettingsType = SMSMfaSettingsType as any as S.Schema<EmailMfaSettingsType>;
export interface WebAuthnMfaSettingsType {
  Enabled?: boolean;
}
const WebAuthnMfaSettingsType = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<WebAuthnMfaSettingsType>;
export interface AdminSetUserMFAPreferenceRequest {
  SMSMfaSettings?: SMSMfaSettingsType;
  SoftwareTokenMfaSettings?: SoftwareTokenMfaSettingsType;
  EmailMfaSettings?: EmailMfaSettingsType;
  WebAuthnMfaSettings?: WebAuthnMfaSettingsType;
  Username: string | redacted.Redacted<string>;
  UserPoolId: string;
}
const AdminSetUserMFAPreferenceRequest = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<AdminSetUserMFAPreferenceRequest>;
export interface AdminSetUserMFAPreferenceResponse {}
const AdminSetUserMFAPreferenceResponse =
  AddCustomAttributesResponse as any as S.Schema<AdminSetUserMFAPreferenceResponse>;
export interface AdminSetUserPasswordRequest {
  UserPoolId: string;
  Username: string | redacted.Redacted<string>;
  Password: string | redacted.Redacted<string>;
  Permanent?: boolean;
}
const AdminSetUserPasswordRequest = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<AdminSetUserPasswordRequest>;
export interface AdminSetUserPasswordResponse {}
const AdminSetUserPasswordResponse =
  AddCustomAttributesResponse as any as S.Schema<AdminSetUserPasswordResponse>;
export interface AdminSetUserSettingsRequest {
  UserPoolId: string;
  Username: string | redacted.Redacted<string>;
  MFAOptions: MFAOptionType[];
}
const AdminSetUserSettingsRequest = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<AdminSetUserSettingsRequest>;
export interface AdminSetUserSettingsResponse {}
const AdminSetUserSettingsResponse =
  AddCustomAttributesResponse as any as S.Schema<AdminSetUserSettingsResponse>;
export type EventIdType = string;
export interface AdminUpdateAuthEventFeedbackRequest {
  UserPoolId: string;
  Username: string | redacted.Redacted<string>;
  EventId: string;
  FeedbackValue: FeedbackValueType;
}
const AdminUpdateAuthEventFeedbackRequest = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<AdminUpdateAuthEventFeedbackRequest>;
export interface AdminUpdateAuthEventFeedbackResponse {}
const AdminUpdateAuthEventFeedbackResponse =
  AddCustomAttributesResponse as any as S.Schema<AdminUpdateAuthEventFeedbackResponse>;
export type DeviceRememberedStatusType = "remembered" | "not_remembered" | (string & {});
const DeviceRememberedStatusType = S.String;

export interface AdminUpdateDeviceStatusRequest {
  UserPoolId: string;
  Username: string | redacted.Redacted<string>;
  DeviceKey: string;
  DeviceRememberedStatus?: DeviceRememberedStatusType;
}
const AdminUpdateDeviceStatusRequest = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<AdminUpdateDeviceStatusRequest>;
export interface AdminUpdateDeviceStatusResponse {}
const AdminUpdateDeviceStatusResponse =
  AddCustomAttributesResponse as any as S.Schema<AdminUpdateDeviceStatusResponse>;
export interface AdminUpdateUserAttributesRequest {
  UserPoolId: string;
  Username: string | redacted.Redacted<string>;
  UserAttributes: AttributeType[];
  ClientMetadata?: { [key: string]: string | undefined };
}
const AdminUpdateUserAttributesRequest = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<AdminUpdateUserAttributesRequest>;
export interface AdminUpdateUserAttributesResponse {}
const AdminUpdateUserAttributesResponse =
  AddCustomAttributesResponse as any as S.Schema<AdminUpdateUserAttributesResponse>;
export interface AdminUserGlobalSignOutRequest {
  UserPoolId: string;
  Username: string | redacted.Redacted<string>;
}
const AdminUserGlobalSignOutRequest = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<AdminUserGlobalSignOutRequest>;
export interface AdminUserGlobalSignOutResponse {}
const AdminUserGlobalSignOutResponse =
  AddCustomAttributesResponse as any as S.Schema<AdminUserGlobalSignOutResponse>;
export interface AssociateSoftwareTokenRequest {
  AccessToken?: string | redacted.Redacted<string>;
  Session?: string | redacted.Redacted<string>;
}
const AssociateSoftwareTokenRequest = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<AssociateSoftwareTokenRequest>;
export type SecretCodeType = string | redacted.Redacted<string>;
export interface AssociateSoftwareTokenResponse {
  SecretCode?: string | redacted.Redacted<string>;
  Session?: string | redacted.Redacted<string>;
}
const AssociateSoftwareTokenResponse = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<AssociateSoftwareTokenResponse>;
export interface ChangePasswordRequest {
  PreviousPassword?: string | redacted.Redacted<string>;
  ProposedPassword: string | redacted.Redacted<string>;
  AccessToken: string | redacted.Redacted<string>;
}
const ChangePasswordRequest = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<ChangePasswordRequest>;
export interface ChangePasswordResponse {}
const ChangePasswordResponse = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<ChangePasswordResponse>;
export type Document = unknown;
export interface CompleteWebAuthnRegistrationRequest {
  AccessToken: string | redacted.Redacted<string>;
  Credential: any;
}
const CompleteWebAuthnRegistrationRequest = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<CompleteWebAuthnRegistrationRequest>;
export interface CompleteWebAuthnRegistrationResponse {}
const CompleteWebAuthnRegistrationResponse =
  AddCustomAttributesResponse as any as S.Schema<CompleteWebAuthnRegistrationResponse>;
export interface DeviceSecretVerifierConfigType {
  PasswordVerifier?: string;
  Salt?: string;
}
const DeviceSecretVerifierConfigType = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<DeviceSecretVerifierConfigType>;
export type DeviceNameType = string;
export interface ConfirmDeviceRequest {
  AccessToken: string | redacted.Redacted<string>;
  DeviceKey: string;
  DeviceSecretVerifierConfig?: DeviceSecretVerifierConfigType;
  DeviceName?: string;
}
const ConfirmDeviceRequest = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<ConfirmDeviceRequest>;
export interface ConfirmDeviceResponse {
  UserConfirmationNecessary?: boolean;
}
const ConfirmDeviceResponse = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<ConfirmDeviceResponse>;
export type SecretHashType = string | redacted.Redacted<string>;
export type ConfirmationCodeType = string;
export interface UserContextDataType {
  IpAddress?: string;
  EncodedData?: string;
}
const UserContextDataType = /*@__PURE__*/ __L.at(__c10, 3) as any as S.Schema<UserContextDataType>;
export interface ConfirmForgotPasswordRequest {
  ClientId: string | redacted.Redacted<string>;
  SecretHash?: string | redacted.Redacted<string>;
  Username: string | redacted.Redacted<string>;
  ConfirmationCode: string;
  Password: string | redacted.Redacted<string>;
  AnalyticsMetadata?: AnalyticsMetadataType;
  UserContextData?: UserContextDataType;
  ClientMetadata?: { [key: string]: string | undefined };
}
const ConfirmForgotPasswordRequest = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<ConfirmForgotPasswordRequest>;
export interface ConfirmForgotPasswordResponse {}
const ConfirmForgotPasswordResponse =
  AddCustomAttributesResponse as any as S.Schema<ConfirmForgotPasswordResponse>;
export interface ConfirmSignUpRequest {
  ClientId: string | redacted.Redacted<string>;
  SecretHash?: string | redacted.Redacted<string>;
  Username: string | redacted.Redacted<string>;
  ConfirmationCode: string;
  ForceAliasCreation?: boolean;
  AnalyticsMetadata?: AnalyticsMetadataType;
  UserContextData?: UserContextDataType;
  ClientMetadata?: { [key: string]: string | undefined };
  Session?: string | redacted.Redacted<string>;
}
const ConfirmSignUpRequest = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<ConfirmSignUpRequest>;
export interface ConfirmSignUpResponse {
  Session?: string | redacted.Redacted<string>;
}
const ConfirmSignUpResponse = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<ConfirmSignUpResponse>;
export interface CreateGroupRequest {
  GroupName: string;
  UserPoolId: string;
  Description?: string;
  RoleArn?: string;
  Precedence?: number;
}
const CreateGroupRequest = /*@__PURE__*/ __L.at(__c10, 7) as any as S.Schema<CreateGroupRequest>;
export interface CreateGroupResponse {
  Group?: GroupType;
}
const CreateGroupResponse = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<CreateGroupResponse>;
export type ProviderNameTypeV2 = string;
export type IdentityProviderTypeType =
  | "SAML"
  | "Facebook"
  | "Google"
  | "LoginWithAmazon"
  | "SignInWithApple"
  | "OIDC"
  | (string & {});
const IdentityProviderTypeType = S.String;

export type ProviderDetailsType = { [key: string]: string | undefined };
const ProviderDetailsType = ClientMetadataType as any as S.Schema<ProviderDetailsType>;
export type AttributeMappingKeyType = string;
export type AttributeMappingType = { [key: string]: string | undefined };
const AttributeMappingType = ClientMetadataType as any as S.Schema<AttributeMappingType>;
export type IdpIdentifierType = string;
export type IdpIdentifiersListType = string[];
const IdpIdentifiersListType = AttributeNameListType as any as S.Schema<IdpIdentifiersListType>;
export type AcrMappingKeyType = string;
export type AcrValueType = string;
export type AcrMappingType = { [key: string]: string | undefined };
const AcrMappingType = ClientMetadataType as any as S.Schema<AcrMappingType>;
export interface CreateIdentityProviderRequest {
  UserPoolId: string;
  ProviderName: string;
  ProviderType: IdentityProviderTypeType;
  ProviderDetails: { [key: string]: string | undefined };
  AttributeMapping?: { [key: string]: string | undefined };
  IdpIdentifiers?: string[];
  AcrMapping?: { [key: string]: string | undefined };
}
const CreateIdentityProviderRequest = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<CreateIdentityProviderRequest>;
export interface IdentityProviderType {
  UserPoolId?: string;
  ProviderName?: string;
  ProviderType?: IdentityProviderTypeType;
  ProviderDetails?: { [key: string]: string | undefined };
  AttributeMapping?: { [key: string]: string | undefined };
  IdpIdentifiers?: string[];
  AcrMapping?: { [key: string]: string | undefined };
  LastModifiedDate?: Date;
  CreationDate?: Date;
}
const IdentityProviderType = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<IdentityProviderType>;
export interface CreateIdentityProviderResponse {
  IdentityProvider: IdentityProviderType;
}
const CreateIdentityProviderResponse = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<CreateIdentityProviderResponse>;
export type AssetCategoryType =
  | "FAVICON_ICO"
  | "FAVICON_SVG"
  | "EMAIL_GRAPHIC"
  | "SMS_GRAPHIC"
  | "AUTH_APP_GRAPHIC"
  | "PASSWORD_GRAPHIC"
  | "PASSKEY_GRAPHIC"
  | "PAGE_HEADER_LOGO"
  | "PAGE_HEADER_BACKGROUND"
  | "PAGE_FOOTER_LOGO"
  | "PAGE_FOOTER_BACKGROUND"
  | "PAGE_BACKGROUND"
  | "FORM_BACKGROUND"
  | "FORM_LOGO"
  | "IDP_BUTTON_ICON"
  | (string & {});
const AssetCategoryType = S.String;

export type ColorSchemeModeType = "LIGHT" | "DARK" | "DYNAMIC" | (string & {});
const ColorSchemeModeType = S.String;

export type AssetExtensionType = "ICO" | "JPEG" | "PNG" | "SVG" | "WEBP" | (string & {});
const AssetExtensionType = S.String;

export type AssetBytesType = Uint8Array;
export type ResourceIdType = string;
export interface AssetType {
  Category: AssetCategoryType;
  ColorMode: ColorSchemeModeType;
  Extension: AssetExtensionType;
  Bytes?: Uint8Array;
  ResourceId?: string;
}
const AssetType = /*@__PURE__*/ __L.at(__c11, 4) as any as S.Schema<AssetType>;
export type AssetListType = AssetType[];
const AssetListType = /*@__PURE__*/ __L.at(__c11, 5);
export interface CreateManagedLoginBrandingRequest {
  UserPoolId: string;
  ClientId: string | redacted.Redacted<string>;
  UseCognitoProvidedValues?: boolean;
  Settings?: any;
  Assets?: AssetType[];
}
const CreateManagedLoginBrandingRequest = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<CreateManagedLoginBrandingRequest>;
export type ManagedLoginBrandingIdType = string;
export interface ManagedLoginBrandingType {
  ManagedLoginBrandingId?: string;
  UserPoolId?: string;
  UseCognitoProvidedValues?: boolean;
  Settings?: any;
  Assets?: AssetType[];
  CreationDate?: Date;
  LastModifiedDate?: Date;
}
const ManagedLoginBrandingType = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<ManagedLoginBrandingType>;
export interface CreateManagedLoginBrandingResponse {
  ManagedLoginBranding?: ManagedLoginBrandingType;
}
const CreateManagedLoginBrandingResponse = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<CreateManagedLoginBrandingResponse>;
export type ResourceServerIdentifierType = string;
export type ResourceServerNameType = string;
export type ResourceServerScopeNameType = string;
export type ResourceServerScopeDescriptionType = string;
export interface ResourceServerScopeType {
  ScopeName: string;
  ScopeDescription: string;
}
const ResourceServerScopeType = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<ResourceServerScopeType>;
export type ResourceServerScopeListType = ResourceServerScopeType[];
const ResourceServerScopeListType = /*@__PURE__*/ __L.at(__c12, 2);
export interface CreateResourceServerRequest {
  UserPoolId: string;
  Identifier: string;
  Name: string;
  Scopes?: ResourceServerScopeType[];
}
const CreateResourceServerRequest = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<CreateResourceServerRequest>;
export interface ResourceServerType {
  UserPoolId?: string;
  Identifier?: string;
  Name?: string;
  Scopes?: ResourceServerScopeType[];
}
const ResourceServerType = /*@__PURE__*/ __L.at(__c12, 4) as any as S.Schema<ResourceServerType>;
export interface CreateResourceServerResponse {
  ResourceServer: ResourceServerType;
}
const CreateResourceServerResponse = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<CreateResourceServerResponse>;
export type TermsNameType = string;
export type TermsSourceType = "LINK" | (string & {});
const TermsSourceType = S.String;

export type TermsEnforcementType = "NONE" | (string & {});
const TermsEnforcementType = S.String;

export type LanguageIdType = string;
export type LinkUrlType = string;
export type LinksType = { [key: string]: string | undefined };
const LinksType = /*@__PURE__*/ __L.at(__c12, 6);
export interface CreateTermsRequest {
  UserPoolId: string;
  ClientId: string | redacted.Redacted<string>;
  TermsName: string;
  TermsSource: TermsSourceType;
  Enforcement: TermsEnforcementType;
  Links?: { [key: string]: string | undefined };
}
const CreateTermsRequest = /*@__PURE__*/ __L.at(__c12, 7) as any as S.Schema<CreateTermsRequest>;
export type TermsIdType = string;
export interface TermsType {
  TermsId: string;
  UserPoolId: string;
  ClientId: string | redacted.Redacted<string>;
  TermsName: string;
  TermsSource: TermsSourceType;
  Enforcement: TermsEnforcementType;
  Links: { [key: string]: string | undefined };
  CreationDate: Date;
  LastModifiedDate: Date;
}
const TermsType = /*@__PURE__*/ __L.at(__c13, 0) as any as S.Schema<TermsType>;
export interface CreateTermsResponse {
  Terms?: TermsType;
}
const CreateTermsResponse = /*@__PURE__*/ __L.at(__c13, 1) as any as S.Schema<CreateTermsResponse>;
export type UserImportJobNameType = string;
export type PasswordHashingAlgorithmType =
  | "BCRYPT"
  | "SCRYPT"
  | "ARGON2ID"
  | "PBKDF2_SHA256"
  | (string & {});
const PasswordHashingAlgorithmType = S.String;

export interface CreateUserImportJobRequest {
  JobName: string;
  UserPoolId: string;
  CloudWatchLogsRoleArn: string;
  PasswordHashingAlgorithm?: PasswordHashingAlgorithmType;
}
const CreateUserImportJobRequest = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<CreateUserImportJobRequest>;
export type UserImportJobIdType = string;
export type PreSignedUrlType = string;
export type UserImportJobStatusType =
  | "Created"
  | "Pending"
  | "InProgress"
  | "Stopping"
  | "Expired"
  | "Stopped"
  | "Failed"
  | "Succeeded"
  | (string & {});
const UserImportJobStatusType = S.String;

export type LongType = number;
export type CompletionMessageType = string;
export interface UserImportJobType {
  JobName?: string;
  JobId?: string;
  UserPoolId?: string;
  PreSignedUrl?: string;
  CreationDate?: Date;
  StartDate?: Date;
  CompletionDate?: Date;
  Status?: UserImportJobStatusType;
  CloudWatchLogsRoleArn?: string;
  ImportedUsers?: number;
  SkippedUsers?: number;
  FailedUsers?: number;
  CompletionMessage?: string;
  PasswordHashingAlgorithm?: PasswordHashingAlgorithmType;
}
const UserImportJobType = /*@__PURE__*/ __L.at(__c13, 3) as any as S.Schema<UserImportJobType>;
export interface CreateUserImportJobResponse {
  UserImportJob?: UserImportJobType;
}
const CreateUserImportJobResponse = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<CreateUserImportJobResponse>;
export type UserPoolNameType = string;
export type PasswordPolicyMinLengthType = number;
export type PasswordHistorySizeType = number;
export type TemporaryPasswordValidityDaysType = number;
export interface PasswordPolicyType {
  MinimumLength?: number;
  RequireUppercase?: boolean;
  RequireLowercase?: boolean;
  RequireNumbers?: boolean;
  RequireSymbols?: boolean;
  PasswordHistorySize?: number;
  TemporaryPasswordValidityDays?: number;
}
const PasswordPolicyType = /*@__PURE__*/ __L.at(__c13, 5) as any as S.Schema<PasswordPolicyType>;
export type AllowedFirstAuthFactorsListType = AuthFactorType[];
const AllowedFirstAuthFactorsListType =
  ConfiguredUserAuthFactorsListType as any as S.Schema<AllowedFirstAuthFactorsListType>;
export interface SignInPolicyType {
  AllowedFirstAuthFactors?: AuthFactorType[];
}
const SignInPolicyType = /*@__PURE__*/ __L.at(__c13, 6) as any as S.Schema<SignInPolicyType>;
export interface UserPoolPolicyType {
  PasswordPolicy?: PasswordPolicyType;
  SignInPolicy?: SignInPolicyType;
}
const UserPoolPolicyType = /*@__PURE__*/ __L.at(__c13, 7) as any as S.Schema<UserPoolPolicyType>;
export type DeletionProtectionType = "ACTIVE" | "INACTIVE" | (string & {});
const DeletionProtectionType = S.String;

export type PreTokenGenerationLambdaVersionType = "V1_0" | "V2_0" | "V3_0" | (string & {});
const PreTokenGenerationLambdaVersionType = S.String;

export interface PreTokenGenerationVersionConfigType {
  LambdaVersion: PreTokenGenerationLambdaVersionType;
  LambdaArn: string;
}
const PreTokenGenerationVersionConfigType = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<PreTokenGenerationVersionConfigType>;
export type CustomSMSSenderLambdaVersionType = "V1_0" | (string & {});
export interface CustomSMSLambdaVersionConfigType {
  LambdaVersion: CustomSMSSenderLambdaVersionType;
  LambdaArn: string;
}
const CustomSMSLambdaVersionConfigType =
  PreTokenGenerationVersionConfigType as any as S.Schema<CustomSMSLambdaVersionConfigType>;
export type CustomEmailSenderLambdaVersionType = "V1_0" | (string & {});
export interface CustomEmailLambdaVersionConfigType {
  LambdaVersion: CustomEmailSenderLambdaVersionType;
  LambdaArn: string;
}
const CustomEmailLambdaVersionConfigType =
  PreTokenGenerationVersionConfigType as any as S.Schema<CustomEmailLambdaVersionConfigType>;
export type InboundFederationLambdaVersionType = "V1_0" | (string & {});
export interface InboundFederationLambdaType {
  LambdaVersion: InboundFederationLambdaVersionType;
  LambdaArn: string;
}
const InboundFederationLambdaType =
  PreTokenGenerationVersionConfigType as any as S.Schema<InboundFederationLambdaType>;
export interface LambdaConfigType {
  PreSignUp?: string;
  CustomMessage?: string;
  PostConfirmation?: string;
  PreAuthentication?: string;
  PostAuthentication?: string;
  DefineAuthChallenge?: string;
  CreateAuthChallenge?: string;
  VerifyAuthChallengeResponse?: string;
  PreTokenGeneration?: string;
  UserMigration?: string;
  PreTokenGenerationConfig?: PreTokenGenerationVersionConfigType;
  CustomSMSSender?: CustomSMSLambdaVersionConfigType;
  CustomEmailSender?: CustomEmailLambdaVersionConfigType;
  KMSKeyID?: string;
  InboundFederation?: InboundFederationLambdaType;
}
const LambdaConfigType = /*@__PURE__*/ __L.at(__c14, 1) as any as S.Schema<LambdaConfigType>;
export type VerifiedAttributeType = "phone_number" | "email" | (string & {});
export type VerifiedAttributesListType = VerifiedAttributeType[];
const VerifiedAttributesListType =
  DeliveryMediumListType as any as S.Schema<VerifiedAttributesListType>;
export type AliasAttributeType = "phone_number" | "email" | "preferred_username" | (string & {});
export type AliasAttributesListType = AliasAttributeType[];
const AliasAttributesListType = DeliveryMediumListType as any as S.Schema<AliasAttributesListType>;
export type UsernameAttributeType = "phone_number" | "email" | (string & {});
export type UsernameAttributesListType = UsernameAttributeType[];
const UsernameAttributesListType =
  DeliveryMediumListType as any as S.Schema<UsernameAttributesListType>;
export type SmsVerificationMessageType = string;
export type EmailVerificationMessageType = string;
export type EmailVerificationSubjectType = string;
export type EmailVerificationMessageByLinkType = string;
export type EmailVerificationSubjectByLinkType = string;
export type DefaultEmailOptionType = "CONFIRM_WITH_LINK" | "CONFIRM_WITH_CODE" | (string & {});
const DefaultEmailOptionType = S.String;

export interface VerificationMessageTemplateType {
  SmsMessage?: string;
  EmailMessage?: string;
  EmailSubject?: string;
  EmailMessageByLink?: string;
  EmailSubjectByLink?: string;
  DefaultEmailOption?: DefaultEmailOptionType;
}
const VerificationMessageTemplateType = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<VerificationMessageTemplateType>;
export type UserPoolMfaType = "OFF" | "ON" | "OPTIONAL" | (string & {});
const UserPoolMfaType = S.String;

export type AttributesRequireVerificationBeforeUpdateType = VerifiedAttributeType[];
const AttributesRequireVerificationBeforeUpdateType =
  VerifiedAttributesListType as any as S.Schema<AttributesRequireVerificationBeforeUpdateType>;
export interface UserAttributeUpdateSettingsType {
  AttributesRequireVerificationBeforeUpdate?: VerifiedAttributeType[];
}
const UserAttributeUpdateSettingsType = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<UserAttributeUpdateSettingsType>;
export interface DeviceConfigurationType {
  ChallengeRequiredOnNewDevice?: boolean;
  DeviceOnlyRememberedOnUserPrompt?: boolean;
}
const DeviceConfigurationType = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<DeviceConfigurationType>;
export type EmailAddressType = string;
export type EmailSendingAccountType = "COGNITO_DEFAULT" | "DEVELOPER" | (string & {});
const EmailSendingAccountType = S.String;

export type SESConfigurationSet = string;
export interface EmailConfigurationType {
  SourceArn?: string;
  ReplyToEmailAddress?: string;
  EmailSendingAccount?: EmailSendingAccountType;
  From?: string;
  ConfigurationSet?: string;
}
const EmailConfigurationType = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<EmailConfigurationType>;
export type OptionalArnType = string;
export type RegionCodeType = string;
export interface EumsSmsConfigurationType {
  CallerArn: string;
  ExternalId?: string;
  OriginationIdentity?: string;
  ConfigurationSetName?: string;
  InEntityId?: string;
  InTemplateId?: string;
  Region?: string;
}
const EumsSmsConfigurationType = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<EumsSmsConfigurationType>;
export interface SmsConfigurationType {
  SnsCallerArn?: string;
  ExternalId?: string;
  SnsRegion?: string;
  EumsSms?: EumsSmsConfigurationType;
}
const SmsConfigurationType = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<SmsConfigurationType>;
export type TagKeysType = string;
export type TagValueType = string;
export type UserPoolTagsType = { [key: string]: string | undefined };
const UserPoolTagsType = ClientMetadataType as any as S.Schema<UserPoolTagsType>;
export type AdminCreateUserUnusedAccountValidityDaysType = number;
export type SmsInviteMessageType = string;
export type EmailInviteMessageType = string;
export interface MessageTemplateType {
  SMSMessage?: string;
  EmailMessage?: string;
  EmailSubject?: string;
}
const MessageTemplateType = /*@__PURE__*/ __L.at(__c15, 0) as any as S.Schema<MessageTemplateType>;
export interface AdminCreateUserConfigType {
  AllowAdminCreateUserOnly?: boolean;
  UnusedAccountValidityDays?: number;
  InviteMessageTemplate?: MessageTemplateType;
}
const AdminCreateUserConfigType = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<AdminCreateUserConfigType>;
export type SchemaAttributesListType = SchemaAttributeType[];
const SchemaAttributesListType =
  CustomAttributesListType as any as S.Schema<SchemaAttributesListType>;
export type AdvancedSecurityModeType = "OFF" | "AUDIT" | "ENFORCED" | (string & {});
const AdvancedSecurityModeType = S.String;

export type AdvancedSecurityEnabledModeType = "AUDIT" | "ENFORCED" | (string & {});
const AdvancedSecurityEnabledModeType = S.String;

export interface AdvancedSecurityAdditionalFlowsType {
  CustomAuthMode?: AdvancedSecurityEnabledModeType;
}
const AdvancedSecurityAdditionalFlowsType = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<AdvancedSecurityAdditionalFlowsType>;
export interface UserPoolAddOnsType {
  AdvancedSecurityMode: AdvancedSecurityModeType;
  AdvancedSecurityAdditionalFlows?: AdvancedSecurityAdditionalFlowsType;
}
const UserPoolAddOnsType = /*@__PURE__*/ __L.at(__c15, 3) as any as S.Schema<UserPoolAddOnsType>;
export interface UsernameConfigurationType {
  CaseSensitive: boolean;
}
const UsernameConfigurationType = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<UsernameConfigurationType>;
export type PriorityType = number;
export type RecoveryOptionNameType =
  | "verified_email"
  | "verified_phone_number"
  | "admin_only"
  | (string & {});
const RecoveryOptionNameType = S.String;

export interface RecoveryOptionType {
  Priority: number;
  Name: RecoveryOptionNameType;
}
const RecoveryOptionType = /*@__PURE__*/ __L.at(__c15, 5) as any as S.Schema<RecoveryOptionType>;
export type RecoveryMechanismsType = RecoveryOptionType[];
const RecoveryMechanismsType = /*@__PURE__*/ __L.at(__c15, 6);
export interface AccountRecoverySettingType {
  RecoveryMechanisms?: RecoveryOptionType[];
}
const AccountRecoverySettingType = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<AccountRecoverySettingType>;
export type UserPoolTierType = "LITE" | "ESSENTIALS" | "PLUS" | (string & {});
const UserPoolTierType = S.String;

export type EncryptionKeyType = "AWS_OWNED_KEY" | "CUSTOMER_MANAGED_KEY" | (string & {});
const EncryptionKeyType = S.String;

export type EncryptionKeyArnType = string;
export interface KeyConfigurationType {
  KeyType?: EncryptionKeyType;
  KmsKeyArn?: string;
}
const KeyConfigurationType = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<KeyConfigurationType>;
export type IssuerType = "ORIGINAL" | "UPDATED" | (string & {});
const IssuerType = S.String;

export interface IssuerConfigurationType {
  Type?: IssuerType;
}
const IssuerConfigurationType = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<IssuerConfigurationType>;
export type AcrLevelKeyType = string;
export interface AcrLevelConfigType {
  AcrValue: string;
}
const AcrLevelConfigType = /*@__PURE__*/ __L.at(__c16, 2) as any as S.Schema<AcrLevelConfigType>;
export type AcrConfigurationType = { [key: string]: AcrLevelConfigType | undefined };
const AcrConfigurationType = /*@__PURE__*/ __L.at(__c16, 3);
export interface CreateUserPoolRequest {
  PoolName: string;
  Policies?: UserPoolPolicyType;
  DeletionProtection?: DeletionProtectionType;
  LambdaConfig?: LambdaConfigType;
  AutoVerifiedAttributes?: VerifiedAttributeType[];
  AliasAttributes?: AliasAttributeType[];
  UsernameAttributes?: UsernameAttributeType[];
  SmsVerificationMessage?: string;
  EmailVerificationMessage?: string;
  EmailVerificationSubject?: string;
  VerificationMessageTemplate?: VerificationMessageTemplateType;
  SmsAuthenticationMessage?: string;
  MfaConfiguration?: UserPoolMfaType;
  UserAttributeUpdateSettings?: UserAttributeUpdateSettingsType;
  DeviceConfiguration?: DeviceConfigurationType;
  EmailConfiguration?: EmailConfigurationType;
  SmsConfiguration?: SmsConfigurationType;
  UserPoolTags?: { [key: string]: string | undefined };
  AdminCreateUserConfig?: AdminCreateUserConfigType;
  Schema?: SchemaAttributeType[];
  UserPoolAddOns?: UserPoolAddOnsType;
  UsernameConfiguration?: UsernameConfigurationType;
  AccountRecoverySetting?: AccountRecoverySettingType;
  UserPoolTier?: UserPoolTierType;
  KeyConfiguration?: KeyConfigurationType;
  IssuerConfiguration?: IssuerConfigurationType;
  AcrConfiguration?: { [key: string]: AcrLevelConfigType | undefined };
}
const CreateUserPoolRequest = /*@__PURE__*/ __L.at(
  __c16,
  4,
) as any as S.Schema<CreateUserPoolRequest>;
export type StatusType = "Enabled" | "Disabled" | (string & {});
const StatusType = S.String;

export type DomainType = string;
export interface UserPoolType {
  Id?: string;
  Name?: string;
  Policies?: UserPoolPolicyType;
  DeletionProtection?: DeletionProtectionType;
  LambdaConfig?: LambdaConfigType;
  Status?: StatusType;
  LastModifiedDate?: Date;
  CreationDate?: Date;
  SchemaAttributes?: SchemaAttributeType[];
  AutoVerifiedAttributes?: VerifiedAttributeType[];
  AliasAttributes?: AliasAttributeType[];
  UsernameAttributes?: UsernameAttributeType[];
  SmsVerificationMessage?: string;
  EmailVerificationMessage?: string;
  EmailVerificationSubject?: string;
  VerificationMessageTemplate?: VerificationMessageTemplateType;
  SmsAuthenticationMessage?: string;
  UserAttributeUpdateSettings?: UserAttributeUpdateSettingsType;
  MfaConfiguration?: UserPoolMfaType;
  DeviceConfiguration?: DeviceConfigurationType;
  EstimatedNumberOfUsers?: number;
  EmailConfiguration?: EmailConfigurationType;
  SmsConfiguration?: SmsConfigurationType;
  UserPoolTags?: { [key: string]: string | undefined };
  SmsConfigurationFailure?: string;
  EmailConfigurationFailure?: string;
  Domain?: string;
  CustomDomain?: string;
  AdminCreateUserConfig?: AdminCreateUserConfigType;
  UserPoolAddOns?: UserPoolAddOnsType;
  UsernameConfiguration?: UsernameConfigurationType;
  Arn?: string;
  AccountRecoverySetting?: AccountRecoverySettingType;
  UserPoolTier?: UserPoolTierType;
  KeyConfiguration?: KeyConfigurationType;
  IssuerConfiguration?: IssuerConfigurationType;
  AcrConfiguration?: { [key: string]: AcrLevelConfigType | undefined };
}
const UserPoolType = /*@__PURE__*/ __L.at(__c16, 5) as any as S.Schema<UserPoolType>;
export interface CreateUserPoolResponse {
  UserPool?: UserPoolType;
}
const CreateUserPoolResponse = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<CreateUserPoolResponse>;
export type ClientNameType = string;
export type GenerateSecret = boolean;
export type RefreshTokenValidityType = number;
export type AccessTokenValidityType = number;
export type IdTokenValidityType = number;
export type TimeUnitsType = "seconds" | "minutes" | "hours" | "days" | (string & {});
const TimeUnitsType = S.String;

export interface TokenValidityUnitsType {
  AccessToken?: TimeUnitsType;
  IdToken?: TimeUnitsType;
  RefreshToken?: TimeUnitsType;
}
const TokenValidityUnitsType = /*@__PURE__*/ __L.at(
  __c16,
  7,
) as any as S.Schema<TokenValidityUnitsType>;
export type ClientPermissionType = string;
export type ClientPermissionListType = string[];
const ClientPermissionListType = AttributeNameListType as any as S.Schema<ClientPermissionListType>;
export type ExplicitAuthFlowsType =
  | "ADMIN_NO_SRP_AUTH"
  | "CUSTOM_AUTH_FLOW_ONLY"
  | "USER_PASSWORD_AUTH"
  | "ALLOW_ADMIN_USER_PASSWORD_AUTH"
  | "ALLOW_CUSTOM_AUTH"
  | "ALLOW_USER_PASSWORD_AUTH"
  | "ALLOW_USER_SRP_AUTH"
  | "ALLOW_REFRESH_TOKEN_AUTH"
  | "ALLOW_USER_AUTH"
  | (string & {});
export type ExplicitAuthFlowsListType = ExplicitAuthFlowsType[];
const ExplicitAuthFlowsListType =
  DeliveryMediumListType as any as S.Schema<ExplicitAuthFlowsListType>;
export type SupportedIdentityProvidersListType = string[];
const SupportedIdentityProvidersListType =
  AttributeNameListType as any as S.Schema<SupportedIdentityProvidersListType>;
export type RedirectUrlType = string;
export type CallbackURLsListType = string[];
const CallbackURLsListType = AttributeNameListType as any as S.Schema<CallbackURLsListType>;
export type LogoutURLsListType = string[];
const LogoutURLsListType = AttributeNameListType as any as S.Schema<LogoutURLsListType>;
export type OAuthFlowType = "code" | "implicit" | "client_credentials" | (string & {});
export type OAuthFlowsType = OAuthFlowType[];
const OAuthFlowsType = DeliveryMediumListType as any as S.Schema<OAuthFlowsType>;
export type ScopeType = string;
export type ScopeListType = string[];
const ScopeListType = AttributeNameListType as any as S.Schema<ScopeListType>;
export type HexStringType = string;
export interface AnalyticsConfigurationType {
  ApplicationId?: string;
  ApplicationArn?: string;
  RoleArn?: string;
  ExternalId?: string;
  UserDataShared?: boolean;
}
const AnalyticsConfigurationType = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<AnalyticsConfigurationType>;
export type PreventUserExistenceErrorTypes = "LEGACY" | "ENABLED" | (string & {});
const PreventUserExistenceErrorTypes = S.String;

export type AuthSessionValidityType = number;
export type FeatureType = "ENABLED" | "DISABLED" | (string & {});
const FeatureType = S.String;

export type RetryGracePeriodSecondsType = number;
export interface RefreshTokenRotationType {
  Feature: FeatureType;
  RetryGracePeriodSeconds?: number;
}
const RefreshTokenRotationType = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<RefreshTokenRotationType>;
export interface CreateUserPoolClientRequest {
  UserPoolId: string;
  ClientName: string;
  GenerateSecret?: boolean;
  ClientSecret?: string | redacted.Redacted<string>;
  RefreshTokenValidity?: number;
  AccessTokenValidity?: number;
  IdTokenValidity?: number;
  TokenValidityUnits?: TokenValidityUnitsType;
  ReadAttributes?: string[];
  WriteAttributes?: string[];
  ExplicitAuthFlows?: ExplicitAuthFlowsType[];
  SupportedIdentityProviders?: string[];
  CallbackURLs?: string[];
  LogoutURLs?: string[];
  DefaultRedirectURI?: string;
  AllowedOAuthFlows?: OAuthFlowType[];
  AllowedOAuthScopes?: string[];
  AllowedOAuthFlowsUserPoolClient?: boolean;
  AnalyticsConfiguration?: AnalyticsConfigurationType;
  PreventUserExistenceErrors?: PreventUserExistenceErrorTypes;
  EnableTokenRevocation?: boolean;
  EnablePropagateAdditionalUserContextData?: boolean;
  AuthSessionValidity?: number;
  RefreshTokenRotation?: RefreshTokenRotationType;
}
const CreateUserPoolClientRequest = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<CreateUserPoolClientRequest>;
export interface UserPoolClientType {
  UserPoolId?: string;
  ClientName?: string;
  ClientId?: string | redacted.Redacted<string>;
  ClientSecret?: string | redacted.Redacted<string>;
  LastModifiedDate?: Date;
  CreationDate?: Date;
  RefreshTokenValidity?: number;
  AccessTokenValidity?: number;
  IdTokenValidity?: number;
  TokenValidityUnits?: TokenValidityUnitsType;
  ReadAttributes?: string[];
  WriteAttributes?: string[];
  ExplicitAuthFlows?: ExplicitAuthFlowsType[];
  SupportedIdentityProviders?: string[];
  CallbackURLs?: string[];
  LogoutURLs?: string[];
  DefaultRedirectURI?: string;
  AllowedOAuthFlows?: OAuthFlowType[];
  AllowedOAuthScopes?: string[];
  AllowedOAuthFlowsUserPoolClient?: boolean;
  AnalyticsConfiguration?: AnalyticsConfigurationType;
  PreventUserExistenceErrors?: PreventUserExistenceErrorTypes;
  EnableTokenRevocation?: boolean;
  EnablePropagateAdditionalUserContextData?: boolean;
  AuthSessionValidity?: number;
  RefreshTokenRotation?: RefreshTokenRotationType;
}
const UserPoolClientType = /*@__PURE__*/ __L.at(__c17, 3) as any as S.Schema<UserPoolClientType>;
export interface CreateUserPoolClientResponse {
  UserPoolClient?: UserPoolClientType;
}
const CreateUserPoolClientResponse = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<CreateUserPoolClientResponse>;
export type WrappedIntegerType = number;
export type SecurityPolicyType = "TLS_V1" | "TLS_V1_2_2021" | "TLS_V1_3_2025" | (string & {});
const SecurityPolicyType = S.String;

export interface CustomDomainConfigType {
  CertificateArn: string;
  SecurityPolicy?: SecurityPolicyType;
}
const CustomDomainConfigType = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<CustomDomainConfigType>;
export type RegionNameType = string;
export type HealthCheckIdType = string;
export interface FailoverType {
  SecondaryRegion: string;
  PrimaryRoute53HealthCheckId: string;
}
const FailoverType = /*@__PURE__*/ __L.at(__c17, 6) as any as S.Schema<FailoverType>;
export interface RoutingType {
  Failover?: FailoverType;
}
const RoutingType = /*@__PURE__*/ __L.at(__c17, 7) as any as S.Schema<RoutingType>;
export interface CreateUserPoolDomainRequest {
  Domain: string;
  UserPoolId: string;
  ManagedLoginVersion?: number;
  CustomDomainConfig?: CustomDomainConfigType;
  Routing?: RoutingType;
}
const CreateUserPoolDomainRequest = /*@__PURE__*/ __L.at(
  __c18,
  0,
) as any as S.Schema<CreateUserPoolDomainRequest>;
export interface CreateUserPoolDomainResponse {
  ManagedLoginVersion?: number;
  CloudFrontDomain?: string;
  Routing?: RoutingType;
}
const CreateUserPoolDomainResponse = /*@__PURE__*/ __L.at(
  __c18,
  1,
) as any as S.Schema<CreateUserPoolDomainResponse>;
export interface CreateUserPoolReplicaRequest {
  UserPoolId: string;
  RegionName: string;
  UserPoolTags?: { [key: string]: string | undefined };
}
const CreateUserPoolReplicaRequest = /*@__PURE__*/ __L.at(
  __c18,
  2,
) as any as S.Schema<CreateUserPoolReplicaRequest>;
export type ReplicaStatusType = "CREATING" | "ACTIVE" | "INACTIVE" | "DELETING" | (string & {});
const ReplicaStatusType = S.String;

export type ReplicaRoleType = "PRIMARY" | "SECONDARY" | (string & {});
const ReplicaRoleType = S.String;

export interface UserPoolReplicaType {
  RegionName?: string;
  Status?: ReplicaStatusType;
  Role?: ReplicaRoleType;
  UserPoolArn?: string;
}
const UserPoolReplicaType = /*@__PURE__*/ __L.at(__c18, 3) as any as S.Schema<UserPoolReplicaType>;
export interface CreateUserPoolReplicaResponse {
  UserPoolReplica?: UserPoolReplicaType;
}
const CreateUserPoolReplicaResponse = /*@__PURE__*/ __L.at(
  __c18,
  4,
) as any as S.Schema<CreateUserPoolReplicaResponse>;
export interface DeleteGroupRequest {
  GroupName: string;
  UserPoolId: string;
}
const DeleteGroupRequest = /*@__PURE__*/ __L.at(__c18, 5) as any as S.Schema<DeleteGroupRequest>;
export interface DeleteGroupResponse {}
const DeleteGroupResponse = /*@__PURE__*/ __L.at(__c18, 6) as any as S.Schema<DeleteGroupResponse>;
export interface DeleteIdentityProviderRequest {
  UserPoolId: string;
  ProviderName: string;
}
const DeleteIdentityProviderRequest = /*@__PURE__*/ __L.at(
  __c18,
  7,
) as any as S.Schema<DeleteIdentityProviderRequest>;
export interface DeleteIdentityProviderResponse {}
const DeleteIdentityProviderResponse =
  AddCustomAttributesResponse as any as S.Schema<DeleteIdentityProviderResponse>;
export interface DeleteManagedLoginBrandingRequest {
  ManagedLoginBrandingId: string;
  UserPoolId: string;
}
const DeleteManagedLoginBrandingRequest = /*@__PURE__*/ __L.at(
  __c19,
  0,
) as any as S.Schema<DeleteManagedLoginBrandingRequest>;
export interface DeleteManagedLoginBrandingResponse {}
const DeleteManagedLoginBrandingResponse =
  AddCustomAttributesResponse as any as S.Schema<DeleteManagedLoginBrandingResponse>;
export interface DeleteResourceServerRequest {
  UserPoolId: string;
  Identifier: string;
}
const DeleteResourceServerRequest = /*@__PURE__*/ __L.at(
  __c19,
  1,
) as any as S.Schema<DeleteResourceServerRequest>;
export interface DeleteResourceServerResponse {}
const DeleteResourceServerResponse =
  AddCustomAttributesResponse as any as S.Schema<DeleteResourceServerResponse>;
export interface DeleteTermsRequest {
  TermsId: string;
  UserPoolId: string;
}
const DeleteTermsRequest = /*@__PURE__*/ __L.at(__c19, 2) as any as S.Schema<DeleteTermsRequest>;
export interface DeleteTermsResponse {}
const DeleteTermsResponse = DeleteGroupResponse as any as S.Schema<DeleteTermsResponse>;
export interface DeleteUserRequest {
  AccessToken: string | redacted.Redacted<string>;
}
const DeleteUserRequest = /*@__PURE__*/ __L.at(__c19, 3) as any as S.Schema<DeleteUserRequest>;
export interface DeleteUserResponse {}
const DeleteUserResponse = DeleteGroupResponse as any as S.Schema<DeleteUserResponse>;
export interface DeleteUserAttributesRequest {
  UserAttributeNames: string[];
  AccessToken: string | redacted.Redacted<string>;
}
const DeleteUserAttributesRequest = /*@__PURE__*/ __L.at(
  __c19,
  4,
) as any as S.Schema<DeleteUserAttributesRequest>;
export interface DeleteUserAttributesResponse {}
const DeleteUserAttributesResponse =
  AddCustomAttributesResponse as any as S.Schema<DeleteUserAttributesResponse>;
export interface DeleteUserPoolRequest {
  UserPoolId: string;
}
const DeleteUserPoolRequest = /*@__PURE__*/ __L.at(
  __c19,
  5,
) as any as S.Schema<DeleteUserPoolRequest>;
export interface DeleteUserPoolResponse {}
const DeleteUserPoolResponse = ChangePasswordResponse as any as S.Schema<DeleteUserPoolResponse>;
export interface DeleteUserPoolClientRequest {
  UserPoolId: string;
  ClientId: string | redacted.Redacted<string>;
}
const DeleteUserPoolClientRequest = /*@__PURE__*/ __L.at(
  __c19,
  6,
) as any as S.Schema<DeleteUserPoolClientRequest>;
export interface DeleteUserPoolClientResponse {}
const DeleteUserPoolClientResponse =
  AddCustomAttributesResponse as any as S.Schema<DeleteUserPoolClientResponse>;
export interface DeleteUserPoolClientSecretRequest {
  UserPoolId: string;
  ClientId: string | redacted.Redacted<string>;
  ClientSecretId: string;
}
const DeleteUserPoolClientSecretRequest = /*@__PURE__*/ __L.at(
  __c19,
  7,
) as any as S.Schema<DeleteUserPoolClientSecretRequest>;
export interface DeleteUserPoolClientSecretResponse {}
const DeleteUserPoolClientSecretResponse =
  AddCustomAttributesResponse as any as S.Schema<DeleteUserPoolClientSecretResponse>;
export interface DeleteUserPoolDomainRequest {
  Domain: string;
  UserPoolId: string;
}
const DeleteUserPoolDomainRequest = /*@__PURE__*/ __L.at(
  __c20,
  0,
) as any as S.Schema<DeleteUserPoolDomainRequest>;
export interface DeleteUserPoolDomainResponse {}
const DeleteUserPoolDomainResponse =
  AddCustomAttributesResponse as any as S.Schema<DeleteUserPoolDomainResponse>;
export interface DeleteUserPoolReplicaRequest {
  UserPoolId: string;
  RegionName: string;
}
const DeleteUserPoolReplicaRequest = /*@__PURE__*/ __L.at(
  __c20,
  1,
) as any as S.Schema<DeleteUserPoolReplicaRequest>;
export interface DeleteUserPoolReplicaResponse {
  UserPoolReplica?: UserPoolReplicaType;
}
const DeleteUserPoolReplicaResponse =
  CreateUserPoolReplicaResponse as any as S.Schema<DeleteUserPoolReplicaResponse>;
export interface DeleteWebAuthnCredentialRequest {
  AccessToken: string | redacted.Redacted<string>;
  CredentialId: string;
}
const DeleteWebAuthnCredentialRequest = /*@__PURE__*/ __L.at(
  __c20,
  2,
) as any as S.Schema<DeleteWebAuthnCredentialRequest>;
export interface DeleteWebAuthnCredentialResponse {}
const DeleteWebAuthnCredentialResponse =
  AddCustomAttributesResponse as any as S.Schema<DeleteWebAuthnCredentialResponse>;
export interface DescribeIdentityProviderRequest {
  UserPoolId: string;
  ProviderName: string;
}
const DescribeIdentityProviderRequest = /*@__PURE__*/ __L.at(
  __c20,
  3,
) as any as S.Schema<DescribeIdentityProviderRequest>;
export interface DescribeIdentityProviderResponse {
  IdentityProvider: IdentityProviderType;
}
const DescribeIdentityProviderResponse =
  CreateIdentityProviderResponse as any as S.Schema<DescribeIdentityProviderResponse>;
export interface DescribeManagedLoginBrandingRequest {
  UserPoolId: string;
  ManagedLoginBrandingId: string;
  ReturnMergedResources?: boolean;
}
const DescribeManagedLoginBrandingRequest = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<DescribeManagedLoginBrandingRequest>;
export interface DescribeManagedLoginBrandingResponse {
  ManagedLoginBranding?: ManagedLoginBrandingType;
}
const DescribeManagedLoginBrandingResponse =
  CreateManagedLoginBrandingResponse as any as S.Schema<DescribeManagedLoginBrandingResponse>;
export interface DescribeManagedLoginBrandingByClientRequest {
  UserPoolId: string;
  ClientId: string | redacted.Redacted<string>;
  ReturnMergedResources?: boolean;
}
const DescribeManagedLoginBrandingByClientRequest = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<DescribeManagedLoginBrandingByClientRequest>;
export interface DescribeManagedLoginBrandingByClientResponse {
  ManagedLoginBranding?: ManagedLoginBrandingType;
}
const DescribeManagedLoginBrandingByClientResponse =
  CreateManagedLoginBrandingResponse as any as S.Schema<DescribeManagedLoginBrandingByClientResponse>;
export interface DescribeResourceServerRequest {
  UserPoolId: string;
  Identifier: string;
}
const DescribeResourceServerRequest = /*@__PURE__*/ __L.at(
  __c20,
  6,
) as any as S.Schema<DescribeResourceServerRequest>;
export interface DescribeResourceServerResponse {
  ResourceServer: ResourceServerType;
}
const DescribeResourceServerResponse =
  CreateResourceServerResponse as any as S.Schema<DescribeResourceServerResponse>;
export interface DescribeRiskConfigurationRequest {
  UserPoolId: string;
  ClientId?: string | redacted.Redacted<string>;
}
const DescribeRiskConfigurationRequest = /*@__PURE__*/ __L.at(
  __c20,
  7,
) as any as S.Schema<DescribeRiskConfigurationRequest>;
export type EventFilterType = "SIGN_IN" | "PASSWORD_CHANGE" | "SIGN_UP" | (string & {});
export type EventFiltersType = EventFilterType[];
const EventFiltersType = DeliveryMediumListType as any as S.Schema<EventFiltersType>;
export type CompromisedCredentialsEventActionType = "BLOCK" | "NO_ACTION" | (string & {});
const CompromisedCredentialsEventActionType = S.String;

export interface CompromisedCredentialsActionsType {
  EventAction: CompromisedCredentialsEventActionType;
}
const CompromisedCredentialsActionsType = /*@__PURE__*/ __L.at(
  __c21,
  0,
) as any as S.Schema<CompromisedCredentialsActionsType>;
export interface CompromisedCredentialsRiskConfigurationType {
  EventFilter?: EventFilterType[];
  Actions: CompromisedCredentialsActionsType;
}
const CompromisedCredentialsRiskConfigurationType = /*@__PURE__*/ __L.at(
  __c21,
  1,
) as any as S.Schema<CompromisedCredentialsRiskConfigurationType>;
export type EmailNotificationSubjectType = string;
export type EmailNotificationBodyType = string;
export interface NotifyEmailType {
  Subject: string;
  HtmlBody?: string;
  TextBody?: string;
}
const NotifyEmailType = /*@__PURE__*/ __L.at(__c21, 2) as any as S.Schema<NotifyEmailType>;
export interface NotifyConfigurationType {
  From?: string;
  ReplyTo?: string;
  SourceArn: string;
  BlockEmail?: NotifyEmailType;
  NoActionEmail?: NotifyEmailType;
  MfaEmail?: NotifyEmailType;
}
const NotifyConfigurationType = /*@__PURE__*/ __L.at(
  __c21,
  3,
) as any as S.Schema<NotifyConfigurationType>;
export type AccountTakeoverActionNotifyType = boolean;
export type AccountTakeoverEventActionType =
  | "BLOCK"
  | "MFA_IF_CONFIGURED"
  | "MFA_REQUIRED"
  | "NO_ACTION"
  | (string & {});
const AccountTakeoverEventActionType = S.String;

export interface AccountTakeoverActionType {
  Notify: boolean;
  EventAction: AccountTakeoverEventActionType;
}
const AccountTakeoverActionType = /*@__PURE__*/ __L.at(
  __c21,
  4,
) as any as S.Schema<AccountTakeoverActionType>;
export interface AccountTakeoverActionsType {
  LowAction?: AccountTakeoverActionType;
  MediumAction?: AccountTakeoverActionType;
  HighAction?: AccountTakeoverActionType;
}
const AccountTakeoverActionsType = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<AccountTakeoverActionsType>;
export interface AccountTakeoverRiskConfigurationType {
  NotifyConfiguration?: NotifyConfigurationType;
  Actions: AccountTakeoverActionsType;
}
const AccountTakeoverRiskConfigurationType = /*@__PURE__*/ __L.at(
  __c21,
  6,
) as any as S.Schema<AccountTakeoverRiskConfigurationType>;
export type BlockedIPRangeListType = string[];
const BlockedIPRangeListType = AttributeNameListType as any as S.Schema<BlockedIPRangeListType>;
export type SkippedIPRangeListType = string[];
const SkippedIPRangeListType = AttributeNameListType as any as S.Schema<SkippedIPRangeListType>;
export interface RiskExceptionConfigurationType {
  BlockedIPRangeList?: string[];
  SkippedIPRangeList?: string[];
}
const RiskExceptionConfigurationType = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<RiskExceptionConfigurationType>;
export interface RiskConfigurationType {
  UserPoolId?: string;
  ClientId?: string | redacted.Redacted<string>;
  CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType;
  AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType;
  RiskExceptionConfiguration?: RiskExceptionConfigurationType;
  LastModifiedDate?: Date;
}
const RiskConfigurationType = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<RiskConfigurationType>;
export interface DescribeRiskConfigurationResponse {
  RiskConfiguration: RiskConfigurationType;
}
const DescribeRiskConfigurationResponse = /*@__PURE__*/ __L.at(
  __c22,
  1,
) as any as S.Schema<DescribeRiskConfigurationResponse>;
export interface DescribeTermsRequest {
  TermsId: string;
  UserPoolId: string;
}
const DescribeTermsRequest = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<DescribeTermsRequest>;
export interface DescribeTermsResponse {
  Terms?: TermsType;
}
const DescribeTermsResponse = CreateTermsResponse as any as S.Schema<DescribeTermsResponse>;
export interface DescribeTermsByClientRequest {
  ClientId: string | redacted.Redacted<string>;
  UserPoolId: string;
  TermsName: string;
}
const DescribeTermsByClientRequest = /*@__PURE__*/ __L.at(
  __c22,
  3,
) as any as S.Schema<DescribeTermsByClientRequest>;
export interface DescribeTermsByClientResponse {
  Terms?: TermsType;
}
const DescribeTermsByClientResponse = /*@__PURE__*/ __L.at(
  __c22,
  4,
) as any as S.Schema<DescribeTermsByClientResponse>;
export interface DescribeUserImportJobRequest {
  UserPoolId: string;
  JobId: string;
}
const DescribeUserImportJobRequest = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<DescribeUserImportJobRequest>;
export interface DescribeUserImportJobResponse {
  UserImportJob?: UserImportJobType;
}
const DescribeUserImportJobResponse =
  CreateUserImportJobResponse as any as S.Schema<DescribeUserImportJobResponse>;
export interface DescribeUserPoolRequest {
  UserPoolId: string;
}
const DescribeUserPoolRequest = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<DescribeUserPoolRequest>;
export interface DescribeUserPoolResponse {
  UserPool?: UserPoolType;
}
const DescribeUserPoolResponse =
  CreateUserPoolResponse as any as S.Schema<DescribeUserPoolResponse>;
export interface DescribeUserPoolClientRequest {
  UserPoolId: string;
  ClientId: string | redacted.Redacted<string>;
}
const DescribeUserPoolClientRequest = /*@__PURE__*/ __L.at(
  __c22,
  7,
) as any as S.Schema<DescribeUserPoolClientRequest>;
export interface DescribeUserPoolClientResponse {
  UserPoolClient?: UserPoolClientType;
}
const DescribeUserPoolClientResponse =
  CreateUserPoolClientResponse as any as S.Schema<DescribeUserPoolClientResponse>;
export interface DescribeUserPoolDomainRequest {
  Domain: string;
}
const DescribeUserPoolDomainRequest = /*@__PURE__*/ __L.at(
  __c23,
  0,
) as any as S.Schema<DescribeUserPoolDomainRequest>;
export type AWSAccountIdType = string;
export type S3BucketType = string;
export type DomainVersionType = string;
export type DomainStatusType =
  | "CREATING"
  | "DELETING"
  | "UPDATING"
  | "ACTIVE"
  | "FAILED"
  | (string & {});
const DomainStatusType = S.String;

export interface DomainDescriptionType {
  UserPoolId?: string;
  AWSAccountId?: string;
  Domain?: string;
  S3Bucket?: string;
  CloudFrontDistribution?: string;
  Version?: string;
  Status?: DomainStatusType;
  CustomDomainConfig?: CustomDomainConfigType;
  ManagedLoginVersion?: number;
  Routing?: RoutingType;
}
const DomainDescriptionType = /*@__PURE__*/ __L.at(
  __c23,
  1,
) as any as S.Schema<DomainDescriptionType>;
export interface DescribeUserPoolDomainResponse {
  DomainDescription?: DomainDescriptionType;
}
const DescribeUserPoolDomainResponse = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<DescribeUserPoolDomainResponse>;
export interface ForgetDeviceRequest {
  AccessToken?: string | redacted.Redacted<string>;
  DeviceKey: string;
}
const ForgetDeviceRequest = /*@__PURE__*/ __L.at(__c23, 3) as any as S.Schema<ForgetDeviceRequest>;
export interface ForgetDeviceResponse {}
const ForgetDeviceResponse = DeleteGroupResponse as any as S.Schema<ForgetDeviceResponse>;
export interface ForgotPasswordRequest {
  ClientId: string | redacted.Redacted<string>;
  SecretHash?: string | redacted.Redacted<string>;
  UserContextData?: UserContextDataType;
  Username: string | redacted.Redacted<string>;
  AnalyticsMetadata?: AnalyticsMetadataType;
  ClientMetadata?: { [key: string]: string | undefined };
}
const ForgotPasswordRequest = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<ForgotPasswordRequest>;
export interface CodeDeliveryDetailsType {
  Destination?: string;
  DeliveryMedium?: DeliveryMediumType;
  AttributeName?: string;
}
const CodeDeliveryDetailsType = /*@__PURE__*/ __L.at(
  __c23,
  5,
) as any as S.Schema<CodeDeliveryDetailsType>;
export interface ForgotPasswordResponse {
  CodeDeliveryDetails?: CodeDeliveryDetailsType;
}
const ForgotPasswordResponse = /*@__PURE__*/ __L.at(
  __c23,
  6,
) as any as S.Schema<ForgotPasswordResponse>;
export interface GetClientTokenRequest {
  ClientId: string | redacted.Redacted<string>;
  Secret: string | redacted.Redacted<string>;
  Scopes?: string[];
  ClientMetadata?: { [key: string]: string | undefined };
}
const GetClientTokenRequest = /*@__PURE__*/ __L.at(
  __c23,
  7,
) as any as S.Schema<GetClientTokenRequest>;
export interface ClientAuthenticationResultType {
  AccessToken?: string | redacted.Redacted<string>;
  ExpiresIn?: number;
  TokenType?: string;
}
const ClientAuthenticationResultType = /*@__PURE__*/ __L.at(
  __c24,
  0,
) as any as S.Schema<ClientAuthenticationResultType>;
export interface GetClientTokenResponse {
  ClientAuthenticationResult?: ClientAuthenticationResultType;
}
const GetClientTokenResponse = /*@__PURE__*/ __L.at(
  __c24,
  1,
) as any as S.Schema<GetClientTokenResponse>;
export interface GetCSVHeaderRequest {
  UserPoolId: string;
}
const GetCSVHeaderRequest = /*@__PURE__*/ __L.at(__c24, 2) as any as S.Schema<GetCSVHeaderRequest>;
export type ListOfStringTypes = string[];
const ListOfStringTypes = AttributeNameListType as any as S.Schema<ListOfStringTypes>;
export interface GetCSVHeaderResponse {
  UserPoolId?: string;
  CSVHeader?: string[];
}
const GetCSVHeaderResponse = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<GetCSVHeaderResponse>;
export interface GetDeviceRequest {
  DeviceKey: string;
  AccessToken?: string | redacted.Redacted<string>;
}
const GetDeviceRequest = /*@__PURE__*/ __L.at(__c24, 4) as any as S.Schema<GetDeviceRequest>;
export interface GetDeviceResponse {
  Device: DeviceType;
}
const GetDeviceResponse = AdminGetDeviceResponse as any as S.Schema<GetDeviceResponse>;
export interface GetGroupRequest {
  GroupName: string;
  UserPoolId: string;
}
const GetGroupRequest = /*@__PURE__*/ __L.at(__c24, 5) as any as S.Schema<GetGroupRequest>;
export interface GetGroupResponse {
  Group?: GroupType;
}
const GetGroupResponse = CreateGroupResponse as any as S.Schema<GetGroupResponse>;
export interface GetIdentityProviderByIdentifierRequest {
  UserPoolId: string;
  IdpIdentifier: string;
}
const GetIdentityProviderByIdentifierRequest = /*@__PURE__*/ __L.at(
  __c24,
  6,
) as any as S.Schema<GetIdentityProviderByIdentifierRequest>;
export interface GetIdentityProviderByIdentifierResponse {
  IdentityProvider: IdentityProviderType;
}
const GetIdentityProviderByIdentifierResponse =
  CreateIdentityProviderResponse as any as S.Schema<GetIdentityProviderByIdentifierResponse>;
export interface GetLogDeliveryConfigurationRequest {
  UserPoolId: string;
}
const GetLogDeliveryConfigurationRequest = /*@__PURE__*/ __L.at(
  __c24,
  7,
) as any as S.Schema<GetLogDeliveryConfigurationRequest>;
export type LogLevel = "ERROR" | "INFO" | (string & {});
const LogLevel = S.String;

export type EventSourceName = "userNotification" | "userAuthEvents" | (string & {});
const EventSourceName = S.String;

export interface CloudWatchLogsConfigurationType {
  LogGroupArn?: string;
}
const CloudWatchLogsConfigurationType = /*@__PURE__*/ __L.at(
  __c25,
  0,
) as any as S.Schema<CloudWatchLogsConfigurationType>;
export type S3ArnType = string;
export interface S3ConfigurationType {
  BucketArn?: string;
}
const S3ConfigurationType = /*@__PURE__*/ __L.at(__c25, 1) as any as S.Schema<S3ConfigurationType>;
export interface FirehoseConfigurationType {
  StreamArn?: string;
}
const FirehoseConfigurationType = /*@__PURE__*/ __L.at(
  __c25,
  2,
) as any as S.Schema<FirehoseConfigurationType>;
export interface LogConfigurationType {
  LogLevel: LogLevel;
  EventSource: EventSourceName;
  CloudWatchLogsConfiguration?: CloudWatchLogsConfigurationType;
  S3Configuration?: S3ConfigurationType;
  FirehoseConfiguration?: FirehoseConfigurationType;
}
const LogConfigurationType = /*@__PURE__*/ __L.at(
  __c25,
  3,
) as any as S.Schema<LogConfigurationType>;
export type LogConfigurationListType = LogConfigurationType[];
const LogConfigurationListType = /*@__PURE__*/ __L.at(__c25, 4);
export interface LogDeliveryConfigurationType {
  UserPoolId: string;
  LogConfigurations: LogConfigurationType[];
}
const LogDeliveryConfigurationType = /*@__PURE__*/ __L.at(
  __c25,
  5,
) as any as S.Schema<LogDeliveryConfigurationType>;
export interface GetLogDeliveryConfigurationResponse {
  LogDeliveryConfiguration?: LogDeliveryConfigurationType;
}
const GetLogDeliveryConfigurationResponse = /*@__PURE__*/ __L.at(
  __c25,
  6,
) as any as S.Schema<GetLogDeliveryConfigurationResponse>;
export type LimitClass = "API_CATEGORY" | (string & {});
const LimitClass = S.String;

export type StringToStringMapType = { [key: string]: string | undefined };
const StringToStringMapType = ClientMetadataType as any as S.Schema<StringToStringMapType>;
export interface LimitDefinitionType {
  LimitClass: LimitClass;
  Attributes: { [key: string]: string | undefined };
}
const LimitDefinitionType = /*@__PURE__*/ __L.at(__c25, 7) as any as S.Schema<LimitDefinitionType>;
export interface GetProvisionedLimitRequest {
  LimitDefinition: LimitDefinitionType;
}
const GetProvisionedLimitRequest = /*@__PURE__*/ __L.at(
  __c26,
  0,
) as any as S.Schema<GetProvisionedLimitRequest>;
export interface LimitType {
  LimitDefinition: LimitDefinitionType;
  ProvisionedLimitValue: number;
  FreeLimitValue: number;
}
const LimitType = /*@__PURE__*/ __L.at(__c26, 1) as any as S.Schema<LimitType>;
export interface GetProvisionedLimitResponse {
  Limit: LimitType;
}
const GetProvisionedLimitResponse = /*@__PURE__*/ __L.at(
  __c26,
  2,
) as any as S.Schema<GetProvisionedLimitResponse>;
export interface GetSigningCertificateRequest {
  UserPoolId: string;
}
const GetSigningCertificateRequest = /*@__PURE__*/ __L.at(
  __c26,
  3,
) as any as S.Schema<GetSigningCertificateRequest>;
export interface GetSigningCertificateResponse {
  Certificate?: string;
}
const GetSigningCertificateResponse = /*@__PURE__*/ __L.at(
  __c26,
  4,
) as any as S.Schema<GetSigningCertificateResponse>;
export interface GetTokensFromRefreshTokenRequest {
  RefreshToken: string | redacted.Redacted<string>;
  ClientId: string | redacted.Redacted<string>;
  ClientSecret?: string | redacted.Redacted<string>;
  DeviceKey?: string;
  ClientMetadata?: { [key: string]: string | undefined };
}
const GetTokensFromRefreshTokenRequest = /*@__PURE__*/ __L.at(
  __c26,
  5,
) as any as S.Schema<GetTokensFromRefreshTokenRequest>;
export interface GetTokensFromRefreshTokenResponse {
  AuthenticationResult?: AuthenticationResultType;
}
const GetTokensFromRefreshTokenResponse = /*@__PURE__*/ __L.at(
  __c26,
  6,
) as any as S.Schema<GetTokensFromRefreshTokenResponse>;
export interface GetUICustomizationRequest {
  UserPoolId: string;
  ClientId?: string | redacted.Redacted<string>;
}
const GetUICustomizationRequest = /*@__PURE__*/ __L.at(
  __c26,
  7,
) as any as S.Schema<GetUICustomizationRequest>;
export type ImageUrlType = string;
export type CSSType = string;
export type CSSVersionType = string;
export interface UICustomizationType {
  UserPoolId?: string;
  ClientId?: string | redacted.Redacted<string>;
  ImageUrl?: string;
  CSS?: string;
  CSSVersion?: string;
  LastModifiedDate?: Date;
  CreationDate?: Date;
}
const UICustomizationType = /*@__PURE__*/ __L.at(__c27, 0) as any as S.Schema<UICustomizationType>;
export interface GetUICustomizationResponse {
  UICustomization: UICustomizationType;
}
const GetUICustomizationResponse = /*@__PURE__*/ __L.at(
  __c27,
  1,
) as any as S.Schema<GetUICustomizationResponse>;
export interface GetUserRequest {
  AccessToken: string | redacted.Redacted<string>;
}
const GetUserRequest = /*@__PURE__*/ __L.at(__c27, 2) as any as S.Schema<GetUserRequest>;
export interface GetUserResponse {
  Username: string | redacted.Redacted<string>;
  UserAttributes: AttributeType[];
  MFAOptions?: MFAOptionType[];
  PreferredMfaSetting?: string;
  UserMFASettingList?: string[];
}
const GetUserResponse = /*@__PURE__*/ __L.at(__c27, 3) as any as S.Schema<GetUserResponse>;
export interface GetUserAttributeVerificationCodeRequest {
  AccessToken: string | redacted.Redacted<string>;
  AttributeName: string;
  ClientMetadata?: { [key: string]: string | undefined };
}
const GetUserAttributeVerificationCodeRequest = /*@__PURE__*/ __L.at(
  __c27,
  4,
) as any as S.Schema<GetUserAttributeVerificationCodeRequest>;
export interface GetUserAttributeVerificationCodeResponse {
  CodeDeliveryDetails?: CodeDeliveryDetailsType;
}
const GetUserAttributeVerificationCodeResponse = /*@__PURE__*/ __L.at(
  __c27,
  5,
) as any as S.Schema<GetUserAttributeVerificationCodeResponse>;
export interface GetUserAuthFactorsRequest {
  AccessToken: string | redacted.Redacted<string>;
}
const GetUserAuthFactorsRequest = /*@__PURE__*/ __L.at(
  __c27,
  6,
) as any as S.Schema<GetUserAuthFactorsRequest>;
export interface GetUserAuthFactorsResponse {
  Username: string | redacted.Redacted<string>;
  PreferredMfaSetting?: string;
  UserMFASettingList?: string[];
  ConfiguredUserAuthFactors?: AuthFactorType[];
}
const GetUserAuthFactorsResponse =
  AdminGetUserAuthFactorsResponse as any as S.Schema<GetUserAuthFactorsResponse>;
export interface GetUserPoolMfaConfigRequest {
  UserPoolId: string;
}
const GetUserPoolMfaConfigRequest = /*@__PURE__*/ __L.at(
  __c27,
  7,
) as any as S.Schema<GetUserPoolMfaConfigRequest>;
export interface SmsMfaConfigType {
  SmsAuthenticationMessage?: string;
  SmsConfiguration?: SmsConfigurationType;
}
const SmsMfaConfigType = /*@__PURE__*/ __L.at(__c28, 0) as any as S.Schema<SmsMfaConfigType>;
export interface SoftwareTokenMfaConfigType {
  Enabled?: boolean;
}
const SoftwareTokenMfaConfigType = /*@__PURE__*/ __L.at(
  __c28,
  1,
) as any as S.Schema<SoftwareTokenMfaConfigType>;
export type EmailMfaMessageType = string;
export type EmailMfaSubjectType = string;
export interface EmailMfaConfigType {
  Message?: string;
  Subject?: string;
}
const EmailMfaConfigType = /*@__PURE__*/ __L.at(__c28, 2) as any as S.Schema<EmailMfaConfigType>;
export type RelyingPartyIdType = string;
export type UserVerificationType = "required" | "preferred" | (string & {});
const UserVerificationType = S.String;

export type WebAuthnFactorConfigurationType =
  | "SINGLE_FACTOR"
  | "MULTI_FACTOR_WITH_USER_VERIFICATION"
  | (string & {});
const WebAuthnFactorConfigurationType = S.String;

export interface WebAuthnConfigurationType {
  RelyingPartyId?: string;
  UserVerification?: UserVerificationType;
  FactorConfiguration?: WebAuthnFactorConfigurationType;
}
const WebAuthnConfigurationType = /*@__PURE__*/ __L.at(
  __c28,
  3,
) as any as S.Schema<WebAuthnConfigurationType>;
export interface GetUserPoolMfaConfigResponse {
  SmsMfaConfiguration?: SmsMfaConfigType;
  SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;
  EmailMfaConfiguration?: EmailMfaConfigType;
  MfaConfiguration?: UserPoolMfaType;
  WebAuthnConfiguration?: WebAuthnConfigurationType;
}
const GetUserPoolMfaConfigResponse = /*@__PURE__*/ __L.at(
  __c28,
  4,
) as any as S.Schema<GetUserPoolMfaConfigResponse>;
export interface GlobalSignOutRequest {
  AccessToken: string | redacted.Redacted<string>;
}
const GlobalSignOutRequest = /*@__PURE__*/ __L.at(
  __c28,
  5,
) as any as S.Schema<GlobalSignOutRequest>;
export interface GlobalSignOutResponse {}
const GlobalSignOutResponse = DeleteGroupResponse as any as S.Schema<GlobalSignOutResponse>;
export interface InitiateAuthRequest {
  AuthFlow: AuthFlowType;
  AuthParameters?: { [key: string]: string | undefined };
  ClientMetadata?: { [key: string]: string | undefined };
  ClientId: string | redacted.Redacted<string>;
  AnalyticsMetadata?: AnalyticsMetadataType;
  UserContextData?: UserContextDataType;
  Session?: string | redacted.Redacted<string>;
}
const InitiateAuthRequest = /*@__PURE__*/ __L.at(__c28, 6) as any as S.Schema<InitiateAuthRequest>;
export interface InitiateAuthResponse {
  ChallengeName?: ChallengeNameType;
  Session?: string | redacted.Redacted<string>;
  ChallengeParameters?: { [key: string]: string | undefined };
  AuthenticationResult?: AuthenticationResultType;
  AvailableChallenges?: ChallengeNameType[];
}
const InitiateAuthResponse = /*@__PURE__*/ __L.at(
  __c28,
  7,
) as any as S.Schema<InitiateAuthResponse>;
export interface ListDevicesRequest {
  AccessToken: string | redacted.Redacted<string>;
  Limit?: number;
  PaginationToken?: string;
}
const ListDevicesRequest = /*@__PURE__*/ __L.at(__c29, 0) as any as S.Schema<ListDevicesRequest>;
export interface ListDevicesResponse {
  Devices?: DeviceType[];
  PaginationToken?: string;
}
const ListDevicesResponse = AdminListDevicesResponse as any as S.Schema<ListDevicesResponse>;
export interface ListGroupsRequest {
  UserPoolId: string;
  Limit?: number;
  NextToken?: string;
}
const ListGroupsRequest = /*@__PURE__*/ __L.at(__c29, 1) as any as S.Schema<ListGroupsRequest>;
export interface ListGroupsResponse {
  Groups?: GroupType[];
  NextToken?: string;
}
const ListGroupsResponse = /*@__PURE__*/ __L.at(__c29, 2) as any as S.Schema<ListGroupsResponse>;
export type ListProvidersLimitType = number;
export type PaginationKeyType = string;
export interface ListIdentityProvidersRequest {
  UserPoolId: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListIdentityProvidersRequest = /*@__PURE__*/ __L.at(
  __c29,
  3,
) as any as S.Schema<ListIdentityProvidersRequest>;
export interface ProviderDescription {
  ProviderName?: string;
  ProviderType?: IdentityProviderTypeType;
  LastModifiedDate?: Date;
  CreationDate?: Date;
}
const ProviderDescription = /*@__PURE__*/ __L.at(__c29, 4) as any as S.Schema<ProviderDescription>;
export type ProvidersListType = ProviderDescription[];
const ProvidersListType = /*@__PURE__*/ __L.at(__c29, 5);
export interface ListIdentityProvidersResponse {
  Providers: ProviderDescription[];
  NextToken?: string;
}
const ListIdentityProvidersResponse = /*@__PURE__*/ __L.at(
  __c29,
  6,
) as any as S.Schema<ListIdentityProvidersResponse>;
export type ListResourceServersLimitType = number;
export interface ListResourceServersRequest {
  UserPoolId: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListResourceServersRequest = /*@__PURE__*/ __L.at(
  __c29,
  7,
) as any as S.Schema<ListResourceServersRequest>;
export type ResourceServersListType = ResourceServerType[];
const ResourceServersListType = /*@__PURE__*/ __L.at(__c30, 0);
export interface ListResourceServersResponse {
  ResourceServers: ResourceServerType[];
  NextToken?: string;
}
const ListResourceServersResponse = /*@__PURE__*/ __L.at(
  __c30,
  1,
) as any as S.Schema<ListResourceServersResponse>;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c30,
  2,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c30,
  3,
) as any as S.Schema<ListTagsForResourceResponse>;
export type ListTermsRequestMaxResultsInteger = number;
export interface ListTermsRequest {
  UserPoolId: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListTermsRequest = /*@__PURE__*/ __L.at(__c30, 4) as any as S.Schema<ListTermsRequest>;
export interface TermsDescriptionType {
  TermsId: string;
  TermsName: string;
  Enforcement: TermsEnforcementType;
  CreationDate: Date;
  LastModifiedDate: Date;
}
const TermsDescriptionType = /*@__PURE__*/ __L.at(
  __c30,
  5,
) as any as S.Schema<TermsDescriptionType>;
export type TermsDescriptionListType = TermsDescriptionType[];
const TermsDescriptionListType = /*@__PURE__*/ __L.at(__c30, 6);
export interface ListTermsResponse {
  Terms: TermsDescriptionType[];
  NextToken?: string;
}
const ListTermsResponse = /*@__PURE__*/ __L.at(__c30, 7) as any as S.Schema<ListTermsResponse>;
export type PoolQueryLimitType = number;
export interface ListUserImportJobsRequest {
  UserPoolId: string;
  MaxResults: number;
  PaginationToken?: string;
}
const ListUserImportJobsRequest = /*@__PURE__*/ __L.at(
  __c31,
  0,
) as any as S.Schema<ListUserImportJobsRequest>;
export type UserImportJobsListType = UserImportJobType[];
const UserImportJobsListType = /*@__PURE__*/ __L.at(__c31, 1);
export interface ListUserImportJobsResponse {
  UserImportJobs?: UserImportJobType[];
  PaginationToken?: string;
}
const ListUserImportJobsResponse = /*@__PURE__*/ __L.at(
  __c31,
  2,
) as any as S.Schema<ListUserImportJobsResponse>;
export type QueryLimit = number;
export interface ListUserPoolClientsRequest {
  UserPoolId: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListUserPoolClientsRequest = /*@__PURE__*/ __L.at(
  __c31,
  3,
) as any as S.Schema<ListUserPoolClientsRequest>;
export interface UserPoolClientDescription {
  ClientId?: string | redacted.Redacted<string>;
  UserPoolId?: string;
  ClientName?: string;
}
const UserPoolClientDescription = /*@__PURE__*/ __L.at(
  __c31,
  4,
) as any as S.Schema<UserPoolClientDescription>;
export type UserPoolClientListType = UserPoolClientDescription[];
const UserPoolClientListType = /*@__PURE__*/ __L.at(__c31, 5);
export interface ListUserPoolClientsResponse {
  UserPoolClients?: UserPoolClientDescription[];
  NextToken?: string;
}
const ListUserPoolClientsResponse = /*@__PURE__*/ __L.at(
  __c31,
  6,
) as any as S.Schema<ListUserPoolClientsResponse>;
export interface ListUserPoolClientSecretsRequest {
  UserPoolId: string;
  ClientId: string | redacted.Redacted<string>;
  NextToken?: string;
}
const ListUserPoolClientSecretsRequest = /*@__PURE__*/ __L.at(
  __c31,
  7,
) as any as S.Schema<ListUserPoolClientSecretsRequest>;
export type ClientSecretDescriptorListType = ClientSecretDescriptorType[];
const ClientSecretDescriptorListType = /*@__PURE__*/ __L.at(__c32, 0);
export interface ListUserPoolClientSecretsResponse {
  ClientSecrets?: ClientSecretDescriptorType[];
  NextToken?: string;
}
const ListUserPoolClientSecretsResponse = /*@__PURE__*/ __L.at(
  __c32,
  1,
) as any as S.Schema<ListUserPoolClientSecretsResponse>;
export interface ListUserPoolReplicasRequest {
  UserPoolId: string;
  NextToken?: string;
}
const ListUserPoolReplicasRequest = /*@__PURE__*/ __L.at(
  __c32,
  2,
) as any as S.Schema<ListUserPoolReplicasRequest>;
export type UserPoolReplicaListType = UserPoolReplicaType[];
const UserPoolReplicaListType = /*@__PURE__*/ __L.at(__c32, 3);
export interface ListUserPoolReplicasResponse {
  UserPoolReplicas?: UserPoolReplicaType[];
  NextToken?: string;
}
const ListUserPoolReplicasResponse = /*@__PURE__*/ __L.at(
  __c32,
  4,
) as any as S.Schema<ListUserPoolReplicasResponse>;
export interface ListUserPoolsRequest {
  NextToken?: string;
  MaxResults: number;
}
const ListUserPoolsRequest = /*@__PURE__*/ __L.at(
  __c32,
  5,
) as any as S.Schema<ListUserPoolsRequest>;
export type ReplicaRegionsType = string[];
const ReplicaRegionsType = AttributeNameListType as any as S.Schema<ReplicaRegionsType>;
export interface UserPoolDescriptionType {
  Id?: string;
  Name?: string;
  LambdaConfig?: LambdaConfigType;
  Status?: StatusType;
  LastModifiedDate?: Date;
  CreationDate?: Date;
  ReplicaRegions?: string[];
}
const UserPoolDescriptionType = /*@__PURE__*/ __L.at(
  __c32,
  6,
) as any as S.Schema<UserPoolDescriptionType>;
export type UserPoolListType = UserPoolDescriptionType[];
const UserPoolListType = /*@__PURE__*/ __L.at(__c32, 7);
export interface ListUserPoolsResponse {
  UserPools?: UserPoolDescriptionType[];
  NextToken?: string;
}
const ListUserPoolsResponse = /*@__PURE__*/ __L.at(
  __c33,
  0,
) as any as S.Schema<ListUserPoolsResponse>;
export type SearchedAttributeNamesListType = string[];
const SearchedAttributeNamesListType =
  AttributeNameListType as any as S.Schema<SearchedAttributeNamesListType>;
export type UserFilterType = string;
export interface ListUsersRequest {
  UserPoolId: string;
  AttributesToGet?: string[];
  Limit?: number;
  PaginationToken?: string;
  Filter?: string;
}
const ListUsersRequest = /*@__PURE__*/ __L.at(__c33, 1) as any as S.Schema<ListUsersRequest>;
export type UsersListType = UserType[];
const UsersListType = /*@__PURE__*/ __L.at(__c33, 2);
export interface ListUsersResponse {
  Users?: UserType[];
  PaginationToken?: string;
}
const ListUsersResponse = /*@__PURE__*/ __L.at(__c33, 3) as any as S.Schema<ListUsersResponse>;
export interface ListUsersInGroupRequest {
  UserPoolId: string;
  GroupName: string;
  Limit?: number;
  NextToken?: string;
}
const ListUsersInGroupRequest = /*@__PURE__*/ __L.at(
  __c33,
  4,
) as any as S.Schema<ListUsersInGroupRequest>;
export interface ListUsersInGroupResponse {
  Users?: UserType[];
  NextToken?: string;
}
const ListUsersInGroupResponse = /*@__PURE__*/ __L.at(
  __c33,
  5,
) as any as S.Schema<ListUsersInGroupResponse>;
export type WebAuthnCredentialsQueryLimitType = number;
export interface ListWebAuthnCredentialsRequest {
  AccessToken: string | redacted.Redacted<string>;
  NextToken?: string;
  MaxResults?: number;
}
const ListWebAuthnCredentialsRequest = /*@__PURE__*/ __L.at(
  __c33,
  6,
) as any as S.Schema<ListWebAuthnCredentialsRequest>;
export type WebAuthnAuthenticatorAttachmentType = string;
export type WebAuthnAuthenticatorTransportType = string;
export type WebAuthnAuthenticatorTransportsList = string[];
const WebAuthnAuthenticatorTransportsList =
  AttributeNameListType as any as S.Schema<WebAuthnAuthenticatorTransportsList>;
export interface WebAuthnCredentialDescription {
  CredentialId: string;
  FriendlyCredentialName: string;
  RelyingPartyId: string;
  AuthenticatorAttachment?: string;
  AuthenticatorTransports: string[];
  CreatedAt: Date;
}
const WebAuthnCredentialDescription = /*@__PURE__*/ __L.at(
  __c33,
  7,
) as any as S.Schema<WebAuthnCredentialDescription>;
export type WebAuthnCredentialDescriptionListType = WebAuthnCredentialDescription[];
const WebAuthnCredentialDescriptionListType = /*@__PURE__*/ __L.at(__c34, 0);
export interface ListWebAuthnCredentialsResponse {
  Credentials: WebAuthnCredentialDescription[];
  NextToken?: string;
}
const ListWebAuthnCredentialsResponse = /*@__PURE__*/ __L.at(
  __c34,
  1,
) as any as S.Schema<ListWebAuthnCredentialsResponse>;
export interface ResendConfirmationCodeRequest {
  ClientId: string | redacted.Redacted<string>;
  SecretHash?: string | redacted.Redacted<string>;
  UserContextData?: UserContextDataType;
  Username: string | redacted.Redacted<string>;
  AnalyticsMetadata?: AnalyticsMetadataType;
  ClientMetadata?: { [key: string]: string | undefined };
}
const ResendConfirmationCodeRequest = /*@__PURE__*/ __L.at(
  __c34,
  2,
) as any as S.Schema<ResendConfirmationCodeRequest>;
export interface ResendConfirmationCodeResponse {
  CodeDeliveryDetails?: CodeDeliveryDetailsType;
}
const ResendConfirmationCodeResponse =
  GetUserAttributeVerificationCodeResponse as any as S.Schema<ResendConfirmationCodeResponse>;
export interface RespondToAuthChallengeRequest {
  ClientId: string | redacted.Redacted<string>;
  ChallengeName: ChallengeNameType;
  Session?: string | redacted.Redacted<string>;
  ChallengeResponses?: { [key: string]: string | undefined };
  AnalyticsMetadata?: AnalyticsMetadataType;
  UserContextData?: UserContextDataType;
  ClientMetadata?: { [key: string]: string | undefined };
}
const RespondToAuthChallengeRequest = /*@__PURE__*/ __L.at(
  __c34,
  3,
) as any as S.Schema<RespondToAuthChallengeRequest>;
export interface RespondToAuthChallengeResponse {
  ChallengeName?: ChallengeNameType;
  Session?: string | redacted.Redacted<string>;
  ChallengeParameters?: { [key: string]: string | undefined };
  AuthenticationResult?: AuthenticationResultType;
  AvailableChallenges?: ChallengeNameType[];
}
const RespondToAuthChallengeResponse =
  AdminInitiateAuthResponse as any as S.Schema<RespondToAuthChallengeResponse>;
export interface RevokeTokenRequest {
  Token: string | redacted.Redacted<string>;
  ClientId: string | redacted.Redacted<string>;
  ClientSecret?: string | redacted.Redacted<string>;
}
const RevokeTokenRequest = /*@__PURE__*/ __L.at(__c34, 4) as any as S.Schema<RevokeTokenRequest>;
export interface RevokeTokenResponse {}
const RevokeTokenResponse = DeleteGroupResponse as any as S.Schema<RevokeTokenResponse>;
export interface SetLogDeliveryConfigurationRequest {
  UserPoolId: string;
  LogConfigurations: LogConfigurationType[];
}
const SetLogDeliveryConfigurationRequest = /*@__PURE__*/ __L.at(
  __c34,
  5,
) as any as S.Schema<SetLogDeliveryConfigurationRequest>;
export interface SetLogDeliveryConfigurationResponse {
  LogDeliveryConfiguration?: LogDeliveryConfigurationType;
}
const SetLogDeliveryConfigurationResponse =
  GetLogDeliveryConfigurationResponse as any as S.Schema<SetLogDeliveryConfigurationResponse>;
export interface SetRiskConfigurationRequest {
  UserPoolId: string;
  ClientId?: string | redacted.Redacted<string>;
  CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType;
  AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType;
  RiskExceptionConfiguration?: RiskExceptionConfigurationType;
}
const SetRiskConfigurationRequest = /*@__PURE__*/ __L.at(
  __c34,
  6,
) as any as S.Schema<SetRiskConfigurationRequest>;
export interface SetRiskConfigurationResponse {
  RiskConfiguration: RiskConfigurationType;
}
const SetRiskConfigurationResponse =
  DescribeRiskConfigurationResponse as any as S.Schema<SetRiskConfigurationResponse>;
export type ImageFileType = Uint8Array;
export interface SetUICustomizationRequest {
  UserPoolId: string;
  ClientId?: string | redacted.Redacted<string>;
  CSS?: string;
  ImageFile?: Uint8Array;
}
const SetUICustomizationRequest = /*@__PURE__*/ __L.at(
  __c34,
  7,
) as any as S.Schema<SetUICustomizationRequest>;
export interface SetUICustomizationResponse {
  UICustomization: UICustomizationType;
}
const SetUICustomizationResponse =
  GetUICustomizationResponse as any as S.Schema<SetUICustomizationResponse>;
export interface SetUserMFAPreferenceRequest {
  SMSMfaSettings?: SMSMfaSettingsType;
  SoftwareTokenMfaSettings?: SoftwareTokenMfaSettingsType;
  EmailMfaSettings?: EmailMfaSettingsType;
  WebAuthnMfaSettings?: WebAuthnMfaSettingsType;
  AccessToken: string | redacted.Redacted<string>;
}
const SetUserMFAPreferenceRequest = /*@__PURE__*/ __L.at(
  __c35,
  0,
) as any as S.Schema<SetUserMFAPreferenceRequest>;
export interface SetUserMFAPreferenceResponse {}
const SetUserMFAPreferenceResponse =
  AddCustomAttributesResponse as any as S.Schema<SetUserMFAPreferenceResponse>;
export interface SetUserPoolMfaConfigRequest {
  UserPoolId: string;
  SmsMfaConfiguration?: SmsMfaConfigType;
  SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;
  EmailMfaConfiguration?: EmailMfaConfigType;
  MfaConfiguration?: UserPoolMfaType;
  WebAuthnConfiguration?: WebAuthnConfigurationType;
}
const SetUserPoolMfaConfigRequest = /*@__PURE__*/ __L.at(
  __c35,
  1,
) as any as S.Schema<SetUserPoolMfaConfigRequest>;
export interface SetUserPoolMfaConfigResponse {
  SmsMfaConfiguration?: SmsMfaConfigType;
  SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;
  EmailMfaConfiguration?: EmailMfaConfigType;
  MfaConfiguration?: UserPoolMfaType;
  WebAuthnConfiguration?: WebAuthnConfigurationType;
}
const SetUserPoolMfaConfigResponse =
  GetUserPoolMfaConfigResponse as any as S.Schema<SetUserPoolMfaConfigResponse>;
export interface SetUserSettingsRequest {
  AccessToken: string | redacted.Redacted<string>;
  MFAOptions: MFAOptionType[];
}
const SetUserSettingsRequest = /*@__PURE__*/ __L.at(
  __c35,
  2,
) as any as S.Schema<SetUserSettingsRequest>;
export interface SetUserSettingsResponse {}
const SetUserSettingsResponse = AdminDeleteUserResponse as any as S.Schema<SetUserSettingsResponse>;
export interface SignUpRequest {
  ClientId: string | redacted.Redacted<string>;
  SecretHash?: string | redacted.Redacted<string>;
  Username: string | redacted.Redacted<string>;
  Password?: string | redacted.Redacted<string>;
  UserAttributes?: AttributeType[];
  ValidationData?: AttributeType[];
  AnalyticsMetadata?: AnalyticsMetadataType;
  UserContextData?: UserContextDataType;
  ClientMetadata?: { [key: string]: string | undefined };
}
const SignUpRequest = /*@__PURE__*/ __L.at(__c35, 3) as any as S.Schema<SignUpRequest>;
export interface SignUpResponse {
  UserConfirmed: boolean;
  CodeDeliveryDetails?: CodeDeliveryDetailsType;
  UserSub: string;
  Session?: string | redacted.Redacted<string>;
}
const SignUpResponse = /*@__PURE__*/ __L.at(__c35, 4) as any as S.Schema<SignUpResponse>;
export interface StartUserImportJobRequest {
  UserPoolId: string;
  JobId: string;
}
const StartUserImportJobRequest = /*@__PURE__*/ __L.at(
  __c35,
  5,
) as any as S.Schema<StartUserImportJobRequest>;
export interface StartUserImportJobResponse {
  UserImportJob?: UserImportJobType;
}
const StartUserImportJobResponse =
  CreateUserImportJobResponse as any as S.Schema<StartUserImportJobResponse>;
export interface StartWebAuthnRegistrationRequest {
  AccessToken: string | redacted.Redacted<string>;
}
const StartWebAuthnRegistrationRequest = /*@__PURE__*/ __L.at(
  __c35,
  6,
) as any as S.Schema<StartWebAuthnRegistrationRequest>;
export interface StartWebAuthnRegistrationResponse {
  CredentialCreationOptions: any;
}
const StartWebAuthnRegistrationResponse = /*@__PURE__*/ __L.at(
  __c35,
  7,
) as any as S.Schema<StartWebAuthnRegistrationResponse>;
export interface StopUserImportJobRequest {
  UserPoolId: string;
  JobId: string;
}
const StopUserImportJobRequest = /*@__PURE__*/ __L.at(
  __c36,
  0,
) as any as S.Schema<StopUserImportJobRequest>;
export interface StopUserImportJobResponse {
  UserImportJob?: UserImportJobType;
}
const StopUserImportJobResponse =
  CreateUserImportJobResponse as any as S.Schema<StopUserImportJobResponse>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c36, 1) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteGroupResponse as any as S.Schema<TagResourceResponse>;
export type UserPoolTagsListType = string[];
const UserPoolTagsListType = AttributeNameListType as any as S.Schema<UserPoolTagsListType>;
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c36,
  2,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = DeleteGroupResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateAuthEventFeedbackRequest {
  UserPoolId: string;
  Username: string | redacted.Redacted<string>;
  EventId: string;
  FeedbackToken: string | redacted.Redacted<string>;
  FeedbackValue: FeedbackValueType;
}
const UpdateAuthEventFeedbackRequest = /*@__PURE__*/ __L.at(
  __c36,
  3,
) as any as S.Schema<UpdateAuthEventFeedbackRequest>;
export interface UpdateAuthEventFeedbackResponse {}
const UpdateAuthEventFeedbackResponse =
  AddCustomAttributesResponse as any as S.Schema<UpdateAuthEventFeedbackResponse>;
export interface UpdateDeviceStatusRequest {
  AccessToken: string | redacted.Redacted<string>;
  DeviceKey: string;
  DeviceRememberedStatus?: DeviceRememberedStatusType;
}
const UpdateDeviceStatusRequest = /*@__PURE__*/ __L.at(
  __c36,
  4,
) as any as S.Schema<UpdateDeviceStatusRequest>;
export interface UpdateDeviceStatusResponse {}
const UpdateDeviceStatusResponse =
  AddCustomAttributesResponse as any as S.Schema<UpdateDeviceStatusResponse>;
export interface UpdateGroupRequest {
  GroupName: string;
  UserPoolId: string;
  Description?: string;
  RoleArn?: string;
  Precedence?: number;
}
const UpdateGroupRequest = /*@__PURE__*/ __L.at(__c36, 5) as any as S.Schema<UpdateGroupRequest>;
export interface UpdateGroupResponse {
  Group?: GroupType;
}
const UpdateGroupResponse = CreateGroupResponse as any as S.Schema<UpdateGroupResponse>;
export interface UpdateIdentityProviderRequest {
  UserPoolId: string;
  ProviderName: string;
  ProviderDetails?: { [key: string]: string | undefined };
  AttributeMapping?: { [key: string]: string | undefined };
  IdpIdentifiers?: string[];
  AcrMapping?: { [key: string]: string | undefined };
}
const UpdateIdentityProviderRequest = /*@__PURE__*/ __L.at(
  __c36,
  6,
) as any as S.Schema<UpdateIdentityProviderRequest>;
export interface UpdateIdentityProviderResponse {
  IdentityProvider: IdentityProviderType;
}
const UpdateIdentityProviderResponse =
  CreateIdentityProviderResponse as any as S.Schema<UpdateIdentityProviderResponse>;
export interface UpdateManagedLoginBrandingRequest {
  UserPoolId?: string;
  ManagedLoginBrandingId?: string;
  UseCognitoProvidedValues?: boolean;
  Settings?: any;
  Assets?: AssetType[];
}
const UpdateManagedLoginBrandingRequest = /*@__PURE__*/ __L.at(
  __c36,
  7,
) as any as S.Schema<UpdateManagedLoginBrandingRequest>;
export interface UpdateManagedLoginBrandingResponse {
  ManagedLoginBranding?: ManagedLoginBrandingType;
}
const UpdateManagedLoginBrandingResponse =
  CreateManagedLoginBrandingResponse as any as S.Schema<UpdateManagedLoginBrandingResponse>;
export interface UpdateProvisionedLimitRequest {
  LimitDefinition: LimitDefinitionType;
  RequestedLimitValue: number;
}
const UpdateProvisionedLimitRequest = /*@__PURE__*/ __L.at(
  __c37,
  0,
) as any as S.Schema<UpdateProvisionedLimitRequest>;
export interface UpdateProvisionedLimitResponse {
  Limit: LimitType;
}
const UpdateProvisionedLimitResponse =
  GetProvisionedLimitResponse as any as S.Schema<UpdateProvisionedLimitResponse>;
export interface UpdateResourceServerRequest {
  UserPoolId: string;
  Identifier: string;
  Name: string;
  Scopes?: ResourceServerScopeType[];
}
const UpdateResourceServerRequest = /*@__PURE__*/ __L.at(
  __c37,
  1,
) as any as S.Schema<UpdateResourceServerRequest>;
export interface UpdateResourceServerResponse {
  ResourceServer: ResourceServerType;
}
const UpdateResourceServerResponse =
  CreateResourceServerResponse as any as S.Schema<UpdateResourceServerResponse>;
export interface UpdateTermsRequest {
  TermsId: string;
  UserPoolId: string;
  TermsName?: string;
  TermsSource?: TermsSourceType;
  Enforcement?: TermsEnforcementType;
  Links?: { [key: string]: string | undefined };
}
const UpdateTermsRequest = /*@__PURE__*/ __L.at(__c37, 2) as any as S.Schema<UpdateTermsRequest>;
export interface UpdateTermsResponse {
  Terms?: TermsType;
}
const UpdateTermsResponse = CreateTermsResponse as any as S.Schema<UpdateTermsResponse>;
export interface UpdateUserAttributesRequest {
  UserAttributes: AttributeType[];
  AccessToken: string | redacted.Redacted<string>;
  ClientMetadata?: { [key: string]: string | undefined };
}
const UpdateUserAttributesRequest = /*@__PURE__*/ __L.at(
  __c37,
  3,
) as any as S.Schema<UpdateUserAttributesRequest>;
export type CodeDeliveryDetailsListType = CodeDeliveryDetailsType[];
const CodeDeliveryDetailsListType = /*@__PURE__*/ __L.at(__c37, 4);
export interface UpdateUserAttributesResponse {
  CodeDeliveryDetailsList?: CodeDeliveryDetailsType[];
}
const UpdateUserAttributesResponse = /*@__PURE__*/ __L.at(
  __c37,
  5,
) as any as S.Schema<UpdateUserAttributesResponse>;
export interface UpdateUserPoolRequest {
  UserPoolId: string;
  Policies?: UserPoolPolicyType;
  DeletionProtection?: DeletionProtectionType;
  LambdaConfig?: LambdaConfigType;
  AutoVerifiedAttributes?: VerifiedAttributeType[];
  SmsVerificationMessage?: string;
  EmailVerificationMessage?: string;
  EmailVerificationSubject?: string;
  VerificationMessageTemplate?: VerificationMessageTemplateType;
  SmsAuthenticationMessage?: string;
  UserAttributeUpdateSettings?: UserAttributeUpdateSettingsType;
  MfaConfiguration?: UserPoolMfaType;
  DeviceConfiguration?: DeviceConfigurationType;
  EmailConfiguration?: EmailConfigurationType;
  SmsConfiguration?: SmsConfigurationType;
  UserPoolTags?: { [key: string]: string | undefined };
  AdminCreateUserConfig?: AdminCreateUserConfigType;
  UserPoolAddOns?: UserPoolAddOnsType;
  AccountRecoverySetting?: AccountRecoverySettingType;
  PoolName?: string;
  UserPoolTier?: UserPoolTierType;
  KeyConfiguration?: KeyConfigurationType;
  IssuerConfiguration?: IssuerConfigurationType;
  AcrConfiguration?: { [key: string]: AcrLevelConfigType | undefined };
}
const UpdateUserPoolRequest = /*@__PURE__*/ __L.at(
  __c37,
  6,
) as any as S.Schema<UpdateUserPoolRequest>;
export interface UpdateUserPoolResponse {}
const UpdateUserPoolResponse = ChangePasswordResponse as any as S.Schema<UpdateUserPoolResponse>;
export interface UpdateUserPoolClientRequest {
  UserPoolId: string;
  ClientId: string | redacted.Redacted<string>;
  ClientName?: string;
  RefreshTokenValidity?: number;
  AccessTokenValidity?: number;
  IdTokenValidity?: number;
  TokenValidityUnits?: TokenValidityUnitsType;
  ReadAttributes?: string[];
  WriteAttributes?: string[];
  ExplicitAuthFlows?: ExplicitAuthFlowsType[];
  SupportedIdentityProviders?: string[];
  CallbackURLs?: string[];
  LogoutURLs?: string[];
  DefaultRedirectURI?: string;
  AllowedOAuthFlows?: OAuthFlowType[];
  AllowedOAuthScopes?: string[];
  AllowedOAuthFlowsUserPoolClient?: boolean;
  AnalyticsConfiguration?: AnalyticsConfigurationType;
  PreventUserExistenceErrors?: PreventUserExistenceErrorTypes;
  EnableTokenRevocation?: boolean;
  EnablePropagateAdditionalUserContextData?: boolean;
  AuthSessionValidity?: number;
  RefreshTokenRotation?: RefreshTokenRotationType;
}
const UpdateUserPoolClientRequest = /*@__PURE__*/ __L.at(
  __c37,
  7,
) as any as S.Schema<UpdateUserPoolClientRequest>;
export interface UpdateUserPoolClientResponse {
  UserPoolClient?: UserPoolClientType;
}
const UpdateUserPoolClientResponse =
  CreateUserPoolClientResponse as any as S.Schema<UpdateUserPoolClientResponse>;
export interface UpdateUserPoolDomainRequest {
  Domain: string;
  UserPoolId: string;
  ManagedLoginVersion?: number;
  CustomDomainConfig?: CustomDomainConfigType;
  Routing?: RoutingType;
}
const UpdateUserPoolDomainRequest = /*@__PURE__*/ __L.at(
  __c38,
  0,
) as any as S.Schema<UpdateUserPoolDomainRequest>;
export interface UpdateUserPoolDomainResponse {
  ManagedLoginVersion?: number;
  CloudFrontDomain?: string;
  Routing?: RoutingType;
}
const UpdateUserPoolDomainResponse =
  CreateUserPoolDomainResponse as any as S.Schema<UpdateUserPoolDomainResponse>;
export type UpdateReplicaStatusType = "ACTIVE" | "INACTIVE" | (string & {});
const UpdateReplicaStatusType = S.String;

export interface UpdateUserPoolReplicaRequest {
  UserPoolId: string;
  RegionName: string;
  Status: UpdateReplicaStatusType;
}
const UpdateUserPoolReplicaRequest = /*@__PURE__*/ __L.at(
  __c38,
  1,
) as any as S.Schema<UpdateUserPoolReplicaRequest>;
export interface UpdateUserPoolReplicaResponse {
  UserPoolReplica?: UserPoolReplicaType;
}
const UpdateUserPoolReplicaResponse =
  CreateUserPoolReplicaResponse as any as S.Schema<UpdateUserPoolReplicaResponse>;
export type SoftwareTokenMFAUserCodeType = string | redacted.Redacted<string>;
export interface VerifySoftwareTokenRequest {
  AccessToken?: string | redacted.Redacted<string>;
  Session?: string | redacted.Redacted<string>;
  UserCode: string | redacted.Redacted<string>;
  FriendlyDeviceName?: string;
}
const VerifySoftwareTokenRequest = /*@__PURE__*/ __L.at(
  __c38,
  2,
) as any as S.Schema<VerifySoftwareTokenRequest>;
export type VerifySoftwareTokenResponseType = "SUCCESS" | "ERROR" | (string & {});
const VerifySoftwareTokenResponseType = S.String;

export interface VerifySoftwareTokenResponse {
  Status?: VerifySoftwareTokenResponseType;
  Session?: string | redacted.Redacted<string>;
}
const VerifySoftwareTokenResponse = /*@__PURE__*/ __L.at(
  __c38,
  3,
) as any as S.Schema<VerifySoftwareTokenResponse>;
export interface VerifyUserAttributeRequest {
  AccessToken: string | redacted.Redacted<string>;
  AttributeName: string;
  Code: string;
}
const VerifyUserAttributeRequest = /*@__PURE__*/ __L.at(
  __c38,
  4,
) as any as S.Schema<VerifyUserAttributeRequest>;
export interface VerifyUserAttributeResponse {}
const VerifyUserAttributeResponse =
  AddCustomAttributesResponse as any as S.Schema<VerifyUserAttributeResponse>;
export type MessageType = string;
export type InvalidParameterExceptionReasonCodeType = string;
export type AddCustomAttributesError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserImportInProgressException
  | CommonErrors;
/**
 * Adds additional user attributes to the user pool schema. Custom attributes can be
 * mutable or immutable and have a `custom:` or `dev:` prefix. For
 * more information, see Custom attributes.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const addCustomAttributes: API.OperationMethod<
  AddCustomAttributesRequest,
  AddCustomAttributesResponse,
  AddCustomAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddCustomAttributesRequest,
  output: AddCustomAttributesResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserImportInProgressException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddCustomAttributes",
}));

export type AddUserPoolClientSecretError =
  | AccessDeniedException
  | InternalServerException
  | InvalidParameterException
  | LimitExceededException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a new client secret for an existing confidential user pool app client. Supports up to 2 active secrets per app client for zero-downtime credential rotation workflows.
 */
export const addUserPoolClientSecret: API.OperationMethod<
  AddUserPoolClientSecretRequest,
  AddUserPoolClientSecretResponse,
  AddUserPoolClientSecretError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddUserPoolClientSecretRequest,
  output: AddUserPoolClientSecretResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    InvalidParameterException,
    LimitExceededException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddUserPoolClientSecret",
}));

export type AdminAddUserToGroupError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotFoundException
  | CommonErrors;
/**
 * Adds a user to a group. A user who is in a group can present a preferred-role claim to
 * an identity pool, and populates a `cognito:groups` claim to their access and
 * identity tokens.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminAddUserToGroup: API.OperationMethod<
  AdminAddUserToGroupRequest,
  AdminAddUserToGroupResponse,
  AdminAddUserToGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminAddUserToGroupRequest,
  output: AdminAddUserToGroupResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminAddUserToGroup",
}));

export type AdminConfirmSignUpError =
  | InternalErrorException
  | InvalidLambdaResponseException
  | InvalidParameterException
  | LimitExceededException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyFailedAttemptsException
  | TooManyRequestsException
  | UnexpectedLambdaException
  | UserLambdaValidationException
  | UserNotFoundException
  | CommonErrors;
/**
 * Confirms user sign-up as an administrator.
 *
 * This request sets a user account active in a user pool that requires confirmation of new user accounts before they can sign in. You can
 * configure your user pool to not send confirmation codes to new users and instead confirm
 * them with this API operation on the back end.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 *
 * To configure your user pool to require administrative confirmation of users, set
 * `AllowAdminCreateUserOnly` to `true` in a
 * `CreateUserPool` or `UpdateUserPool` request.
 */
export const adminConfirmSignUp: API.OperationMethod<
  AdminConfirmSignUpRequest,
  AdminConfirmSignUpResponse,
  AdminConfirmSignUpError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminConfirmSignUpRequest,
  output: AdminConfirmSignUpResponse,
  errors: [
    InternalErrorException,
    InvalidLambdaResponseException,
    InvalidParameterException,
    LimitExceededException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyFailedAttemptsException,
    TooManyRequestsException,
    UnexpectedLambdaException,
    UserLambdaValidationException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminConfirmSignUp",
}));

export type AdminCreateUserError =
  | CodeDeliveryFailureException
  | InternalErrorException
  | InvalidLambdaResponseException
  | InvalidParameterException
  | InvalidPasswordException
  | InvalidSmsRoleAccessPolicyException
  | InvalidSmsRoleTrustRelationshipException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PreconditionNotMetException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UnexpectedLambdaException
  | UnsupportedUserStateException
  | UserLambdaValidationException
  | UsernameExistsException
  | UserNotFoundException
  | CommonErrors;
/**
 * Creates a new user in the specified user pool.
 *
 * If `MessageAction` isn't set, the default is to send a welcome message via
 * email or phone (SMS).
 *
 * This message is based on a template that you configured in your call to create or
 * update a user pool. This template includes your custom sign-up instructions and
 * placeholders for user name and temporary password.
 *
 * Alternatively, you can call `AdminCreateUser` with `SUPPRESS`
 * for the `MessageAction` parameter, and Amazon Cognito won't send any email.
 *
 * In either case, if the user has a password, they will be in the
 * `FORCE_CHANGE_PASSWORD` state until they sign in and set their password.
 * Your invitation message template must have the `{####}` password placeholder
 * if your users have passwords. If your template doesn't have this placeholder, Amazon Cognito
 * doesn't deliver the invitation message. In this case, you must update your message
 * template and resend the password with a new `AdminCreateUser` request with a
 * `MessageAction` value of `RESEND`.
 *
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 *
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminCreateUser: API.OperationMethod<
  AdminCreateUserRequest,
  AdminCreateUserResponse,
  AdminCreateUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminCreateUserRequest,
  output: AdminCreateUserResponse,
  errors: [
    CodeDeliveryFailureException,
    InternalErrorException,
    InvalidLambdaResponseException,
    InvalidParameterException,
    InvalidPasswordException,
    InvalidSmsRoleAccessPolicyException,
    InvalidSmsRoleTrustRelationshipException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PreconditionNotMetException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UnexpectedLambdaException,
    UnsupportedUserStateException,
    UserLambdaValidationException,
    UsernameExistsException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminCreateUser",
}));

export type AdminDeleteSoftwareTokenError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotConfirmedException
  | UserNotFoundException
  | CommonErrors;
/**
 * Deletes a user's registered time-based one-time password (TOTP) multi-factor
 * authentication (MFA) factor, also known as a software token. After this operation, the
 * user can no longer sign in with TOTP MFA, and can register a new TOTP factor with
 * `AssociateSoftwareToken`. Use this operation when a user loses access to
 * their TOTP-generating device, for example, a lost or reset phone, and needs to register
 * a new one.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminDeleteSoftwareToken: API.OperationMethod<
  AdminDeleteSoftwareTokenRequest,
  AdminDeleteSoftwareTokenResponse,
  AdminDeleteSoftwareTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminDeleteSoftwareTokenRequest,
  output: AdminDeleteSoftwareTokenResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotConfirmedException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminDeleteSoftwareToken",
}));

export type AdminDeleteUserError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotFoundException
  | CommonErrors;
/**
 * Deletes a user profile in your user pool.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminDeleteUser: API.OperationMethod<
  AdminDeleteUserRequest,
  AdminDeleteUserResponse,
  AdminDeleteUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminDeleteUserRequest,
  output: AdminDeleteUserResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminDeleteUser",
}));

export type AdminDeleteUserAttributesError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotFoundException
  | CommonErrors;
/**
 * Deletes attribute values from a user. This operation doesn't affect tokens for
 * existing user sessions. The next ID token that the user receives will no longer have the
 * deleted attributes.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminDeleteUserAttributes: API.OperationMethod<
  AdminDeleteUserAttributesRequest,
  AdminDeleteUserAttributesResponse,
  AdminDeleteUserAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminDeleteUserAttributesRequest,
  output: AdminDeleteUserAttributesResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminDeleteUserAttributes",
}));

export type AdminDisableProviderForUserError =
  | AliasExistsException
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotFoundException
  | CommonErrors;
/**
 * Prevents the user from signing in with the specified external (SAML or social)
 * identity provider (IdP). If the user that you want to deactivate is a Amazon Cognito user pools
 * native username + password user, they can't use their password to sign in. If the user
 * to deactivate is a linked external IdP user, any link between that user and an existing
 * user is removed. When the external user signs in again, and the user is no longer
 * attached to the previously linked `DestinationUser`, the user must create a
 * new user account.
 *
 * The value of `ProviderName` must match the name of a user pool IdP.
 *
 * To deactivate a local user, set `ProviderName` to `Cognito` and
 * the `ProviderAttributeName` to `Cognito_Subject`. The
 * `ProviderAttributeValue` must be user's local username.
 *
 * The `ProviderAttributeName` must always be `Cognito_Subject` for
 * social IdPs. The `ProviderAttributeValue` must always be the exact subject
 * that was used when the user was originally linked as a source user.
 *
 * For de-linking a SAML identity, there are two scenarios. If the linked identity has
 * not yet been used to sign in, the `ProviderAttributeName` and
 * `ProviderAttributeValue` must be the same values that were used for the
 * `SourceUser` when the identities were originally linked using
 * AdminLinkProviderForUser call. This is also true if the linking was done with
 * `ProviderAttributeName` set to `Cognito_Subject`. If the user
 * has already signed in, the `ProviderAttributeName` must be
 * `Cognito_Subject` and `ProviderAttributeValue` must be the
 * `NameID` from their SAML assertion.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminDisableProviderForUser: API.OperationMethod<
  AdminDisableProviderForUserRequest,
  AdminDisableProviderForUserResponse,
  AdminDisableProviderForUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminDisableProviderForUserRequest,
  output: AdminDisableProviderForUserResponse,
  errors: [
    AliasExistsException,
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminDisableProviderForUser",
}));

export type AdminDisableUserError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotFoundException
  | CommonErrors;
/**
 * Deactivates a user profile and revokes all access tokens for the user. A deactivated
 * user can't sign in, but still appears in the responses to `ListUsers`
 * API requests.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminDisableUser: API.OperationMethod<
  AdminDisableUserRequest,
  AdminDisableUserResponse,
  AdminDisableUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminDisableUserRequest,
  output: AdminDisableUserResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminDisableUser",
}));

export type AdminEnableUserError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotFoundException
  | CommonErrors;
/**
 * Activates sign-in for a user profile that previously had sign-in access
 * disabled.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminEnableUser: API.OperationMethod<
  AdminEnableUserRequest,
  AdminEnableUserResponse,
  AdminEnableUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminEnableUserRequest,
  output: AdminEnableUserResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminEnableUser",
}));

export type AdminForgetDeviceError =
  | InternalErrorException
  | InvalidParameterException
  | InvalidUserPoolConfigurationException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotFoundException
  | CommonErrors;
/**
 * Forgets, or deletes, a remembered device from a user's profile. After you forget
 * the device, the user can no longer complete device authentication with that device and
 * when applicable, must submit MFA codes again. For more information, see Working with devices.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminForgetDevice: API.OperationMethod<
  AdminForgetDeviceRequest,
  AdminForgetDeviceResponse,
  AdminForgetDeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminForgetDeviceRequest,
  output: AdminForgetDeviceResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    InvalidUserPoolConfigurationException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminForgetDevice",
}));

export type AdminGetDeviceError =
  | InternalErrorException
  | InvalidParameterException
  | InvalidUserPoolConfigurationException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Given the device key, returns details for a user's device. For more information,
 * see Working with devices.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminGetDevice: API.OperationMethod<
  AdminGetDeviceRequest,
  AdminGetDeviceResponse,
  AdminGetDeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminGetDeviceRequest,
  output: AdminGetDeviceResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    InvalidUserPoolConfigurationException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminGetDevice",
}));

export type AdminGetUserError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotFoundException
  | CommonErrors;
/**
 * Given a username, returns details about a user profile in a user pool. You can specify
 * alias attributes in the `Username` request parameter.
 *
 * This operation contributes to your monthly active user (MAU) count for the purpose of
 * billing.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminGetUser: API.OperationMethod<
  AdminGetUserRequest,
  AdminGetUserResponse,
  AdminGetUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminGetUserRequest,
  output: AdminGetUserResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminGetUser",
}));

export type AdminGetUserAuthFactorsError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotFoundException
  | CommonErrors;
/**
 * Lists the authentication options for a user in a user pool. Returns the
 * following:
 *
 * - The user's multi-factor authentication (MFA) preferences.
 *
 * - The user's options for choice-based authentication with the
 * `USER_AUTH` flow.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminGetUserAuthFactors: API.OperationMethod<
  AdminGetUserAuthFactorsRequest,
  AdminGetUserAuthFactorsResponse,
  AdminGetUserAuthFactorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminGetUserAuthFactorsRequest,
  output: AdminGetUserAuthFactorsResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminGetUserAuthFactors",
}));

export type AdminInitiateAuthError =
  | FeatureUnavailableInTierException
  | InternalErrorException
  | InvalidEmailRoleAccessPolicyException
  | InvalidLambdaResponseException
  | InvalidParameterException
  | InvalidSmsRoleAccessPolicyException
  | InvalidSmsRoleTrustRelationshipException
  | InvalidUserPoolConfigurationException
  | MFAMethodNotFoundException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordResetRequiredException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UnexpectedLambdaException
  | UnsupportedOperationException
  | UserLambdaValidationException
  | UserNotConfirmedException
  | UserNotFoundException
  | CommonErrors;
/**
 * Starts sign-in for applications with a server-side component, for example a
 * traditional web application. This operation specifies the authentication flow that
 * you'd like to begin. The authentication flow that you specify must be supported in
 * your app client configuration. For more information about authentication flows, see
 * Authentication flows.
 *
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 *
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminInitiateAuth: API.OperationMethod<
  AdminInitiateAuthRequest,
  AdminInitiateAuthResponse,
  AdminInitiateAuthError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminInitiateAuthRequest,
  output: AdminInitiateAuthResponse,
  errors: [
    FeatureUnavailableInTierException,
    InternalErrorException,
    InvalidEmailRoleAccessPolicyException,
    InvalidLambdaResponseException,
    InvalidParameterException,
    InvalidSmsRoleAccessPolicyException,
    InvalidSmsRoleTrustRelationshipException,
    InvalidUserPoolConfigurationException,
    MFAMethodNotFoundException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordResetRequiredException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UnexpectedLambdaException,
    UnsupportedOperationException,
    UserLambdaValidationException,
    UserNotConfirmedException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminInitiateAuth",
}));

export type AdminLinkProviderForUserError =
  | AliasExistsException
  | InternalErrorException
  | InvalidParameterException
  | LimitExceededException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotFoundException
  | CommonErrors;
/**
 * Links an existing user account in a user pool, or `DestinationUser`, to an
 * identity from an external IdP, or `SourceUser`, based on a specified
 * attribute name and value from the external IdP.
 *
 * This operation connects a local user profile with a user identity who hasn't yet
 * signed in from their third-party IdP. When the user signs in with their IdP, they get
 * access-control configuration from the local user profile. Linked local users can also
 * sign in with SDK-based API operations like `InitiateAuth` after they sign in
 * at least once through their IdP. For more information, see Linking federated users.
 *
 * The maximum number of federated identities linked to a user is five.
 *
 * Because this API allows a user with an external federated identity to sign in as a
 * local user, it is critical that it only be used with external IdPs and linked
 * attributes that you trust.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminLinkProviderForUser: API.OperationMethod<
  AdminLinkProviderForUserRequest,
  AdminLinkProviderForUserResponse,
  AdminLinkProviderForUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminLinkProviderForUserRequest,
  output: AdminLinkProviderForUserResponse,
  errors: [
    AliasExistsException,
    InternalErrorException,
    InvalidParameterException,
    LimitExceededException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminLinkProviderForUser",
}));

export type AdminListDevicesError =
  | InternalErrorException
  | InvalidParameterException
  | InvalidUserPoolConfigurationException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Lists a user's registered devices. Remembered devices are used in authentication
 * services where you offer a "Remember me" option for users who you want to permit to sign
 * in without MFA from a trusted device. Users can bypass MFA while your application
 * performs device SRP authentication on the back end. For more information, see Working with devices.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminListDevices: API.OperationMethod<
  AdminListDevicesRequest,
  AdminListDevicesResponse,
  AdminListDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminListDevicesRequest,
  output: AdminListDevicesResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    InvalidUserPoolConfigurationException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminListDevices",
}));

export type AdminListGroupsForUserError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotFoundException
  | CommonErrors;
/**
 * Lists the groups that a user belongs to. User pool groups are identifiers that you can
 * reference from the contents of ID and access tokens, and set preferred IAM roles for
 * identity-pool authentication. For more information, see Adding groups to a user pool.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminListGroupsForUser: API.PaginatedOperationMethod<
  AdminListGroupsForUserRequest,
  AdminListGroupsForUserResponse,
  AdminListGroupsForUserError,
  Credentials | HttpClient.HttpClient,
  GroupType
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: AdminListGroupsForUserRequest,
  output: AdminListGroupsForUserResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminListGroupsForUser",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Groups",
    pageSize: "Limit",
  } as const,
})) as any;

export type AdminListUserAuthEventsError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotFoundException
  | UserPoolAddOnNotEnabledException
  | CommonErrors;
/**
 * Requests a history of user activity and any risks detected as part of Amazon Cognito threat
 * protection. For more information, see Viewing user event history.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminListUserAuthEvents: API.PaginatedOperationMethod<
  AdminListUserAuthEventsRequest,
  AdminListUserAuthEventsResponse,
  AdminListUserAuthEventsError,
  Credentials | HttpClient.HttpClient,
  AuthEventType
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: AdminListUserAuthEventsRequest,
  output: AdminListUserAuthEventsResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotFoundException,
    UserPoolAddOnNotEnabledException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminListUserAuthEvents",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AuthEvents",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type AdminRemoveUserFromGroupError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotFoundException
  | CommonErrors;
/**
 * Given a username and a group name, removes them from the group. User pool groups are
 * identifiers that you can reference from the contents of ID and access tokens, and set
 * preferred IAM roles for identity-pool authentication. For more information, see Adding groups to a user pool.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminRemoveUserFromGroup: API.OperationMethod<
  AdminRemoveUserFromGroupRequest,
  AdminRemoveUserFromGroupResponse,
  AdminRemoveUserFromGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminRemoveUserFromGroupRequest,
  output: AdminRemoveUserFromGroupResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminRemoveUserFromGroup",
}));

export type AdminResetUserPasswordError =
  | InternalErrorException
  | InvalidEmailRoleAccessPolicyException
  | InvalidLambdaResponseException
  | InvalidParameterException
  | InvalidSmsRoleAccessPolicyException
  | InvalidSmsRoleTrustRelationshipException
  | LimitExceededException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UnexpectedLambdaException
  | UserLambdaValidationException
  | UserNotFoundException
  | CommonErrors;
/**
 * Begins the password reset process. Sets the requested user's account into a
 * `RESET_REQUIRED` status, and sends them a password-reset code. Your user
 * pool also sends the user a notification with a reset code and the information that their
 * password has been reset. At sign-in, your application or the managed login session
 * receives a challenge to complete the reset by confirming the code and setting a new
 * password.
 *
 * To use this API operation, your user pool must have self-service account recovery
 * configured.
 *
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 *
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminResetUserPassword: API.OperationMethod<
  AdminResetUserPasswordRequest,
  AdminResetUserPasswordResponse,
  AdminResetUserPasswordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminResetUserPasswordRequest,
  output: AdminResetUserPasswordResponse,
  errors: [
    InternalErrorException,
    InvalidEmailRoleAccessPolicyException,
    InvalidLambdaResponseException,
    InvalidParameterException,
    InvalidSmsRoleAccessPolicyException,
    InvalidSmsRoleTrustRelationshipException,
    LimitExceededException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UnexpectedLambdaException,
    UserLambdaValidationException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminResetUserPassword",
}));

export type AdminRespondToAuthChallengeError =
  | AliasExistsException
  | CodeMismatchException
  | ExpiredCodeException
  | InternalErrorException
  | InvalidEmailRoleAccessPolicyException
  | InvalidLambdaResponseException
  | InvalidParameterException
  | InvalidPasswordException
  | InvalidSmsRoleAccessPolicyException
  | InvalidSmsRoleTrustRelationshipException
  | InvalidUserPoolConfigurationException
  | MFAMethodNotFoundException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordHistoryPolicyViolationException
  | PasswordResetRequiredException
  | ResourceNotFoundException
  | SoftwareTokenMFANotFoundException
  | TooManyRequestsException
  | UnexpectedLambdaException
  | UserLambdaValidationException
  | UserNotConfirmedException
  | UserNotFoundException
  | CommonErrors;
/**
 * Some API operations in a user pool generate a challenge, like a prompt for an MFA
 * code, for device authentication that bypasses MFA, or for a custom authentication
 * challenge. An `AdminRespondToAuthChallenge` API request provides the answer
 * to that challenge, like a code or a secure remote password (SRP). The parameters of a
 * response to an authentication challenge vary with the type of challenge.
 *
 * For more information about custom authentication challenges, see Custom
 * authentication challenge Lambda triggers.
 *
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 *
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminRespondToAuthChallenge: API.OperationMethod<
  AdminRespondToAuthChallengeRequest,
  AdminRespondToAuthChallengeResponse,
  AdminRespondToAuthChallengeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminRespondToAuthChallengeRequest,
  output: AdminRespondToAuthChallengeResponse,
  errors: [
    AliasExistsException,
    CodeMismatchException,
    ExpiredCodeException,
    InternalErrorException,
    InvalidEmailRoleAccessPolicyException,
    InvalidLambdaResponseException,
    InvalidParameterException,
    InvalidPasswordException,
    InvalidSmsRoleAccessPolicyException,
    InvalidSmsRoleTrustRelationshipException,
    InvalidUserPoolConfigurationException,
    MFAMethodNotFoundException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordHistoryPolicyViolationException,
    PasswordResetRequiredException,
    ResourceNotFoundException,
    SoftwareTokenMFANotFoundException,
    TooManyRequestsException,
    UnexpectedLambdaException,
    UserLambdaValidationException,
    UserNotConfirmedException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminRespondToAuthChallenge",
}));

export type AdminSetUserMFAPreferenceError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordResetRequiredException
  | ResourceNotFoundException
  | UserNotConfirmedException
  | UserNotFoundException
  | CommonErrors;
/**
 * Sets the user's multi-factor authentication (MFA) preference, including which MFA
 * options are activated, and if any are preferred. Only one factor can be set as
 * preferred. The preferred MFA factor will be used to authenticate a user if multiple
 * factors are activated. If multiple options are activated and no preference is set, a
 * challenge to choose an MFA option will be returned during sign-in.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminSetUserMFAPreference: API.OperationMethod<
  AdminSetUserMFAPreferenceRequest,
  AdminSetUserMFAPreferenceResponse,
  AdminSetUserMFAPreferenceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminSetUserMFAPreferenceRequest,
  output: AdminSetUserMFAPreferenceResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordResetRequiredException,
    ResourceNotFoundException,
    UserNotConfirmedException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminSetUserMFAPreference",
}));

export type AdminSetUserPasswordError =
  | InternalErrorException
  | InvalidParameterException
  | InvalidPasswordException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordHistoryPolicyViolationException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotFoundException
  | CommonErrors;
/**
 * Sets the specified user's password in a user pool. This operation administratively
 * sets a temporary or permanent password for a user. With this operation, you can bypass
 * self-service password changes and permit immediate sign-in with the password that you
 * set. To do this, set `Permanent` to `true`.
 *
 * You can also set a new temporary password in this request, send it to a user, and
 * require them to choose a new password on their next sign-in. To do this, set
 * `Permanent` to `false`.
 *
 * If the password is temporary, the user's `Status` becomes
 * `FORCE_CHANGE_PASSWORD`. When the user next tries to sign in, the
 * `InitiateAuth` or `AdminInitiateAuth` response includes the
 * `NEW_PASSWORD_REQUIRED` challenge. If the user doesn't sign in
 * before the temporary password expires, they can no longer sign in and you must repeat
 * this operation to set a temporary or permanent password for them.
 *
 * After the user sets a new password, or if you set a permanent password, their status
 * becomes `Confirmed`.
 *
 * `AdminSetUserPassword` can set a password for the user profile that Amazon Cognito
 * creates for third-party federated users. When you set a password, the federated user's
 * status changes from `EXTERNAL_PROVIDER` to `CONFIRMED`. A user in
 * this state can sign in as a federated user, and initiate authentication flows in the API
 * like a linked native user. They can also modify their password and attributes in
 * token-authenticated API requests like `ChangePassword` and
 * `UpdateUserAttributes`. As a best security practice and to keep users in
 * sync with your external IdP, don't set passwords on federated user profiles. To set up a
 * federated user for native sign-in with a linked native user, refer to Linking federated users to an existing user
 * profile.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminSetUserPassword: API.OperationMethod<
  AdminSetUserPasswordRequest,
  AdminSetUserPasswordResponse,
  AdminSetUserPasswordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminSetUserPasswordRequest,
  output: AdminSetUserPasswordResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    InvalidPasswordException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordHistoryPolicyViolationException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminSetUserPassword",
}));

export type AdminSetUserSettingsError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | UserNotFoundException
  | CommonErrors;
/**
 * *This action is no longer supported.* You can use it to configure
 * only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software
 * token MFA.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminSetUserSettings: API.OperationMethod<
  AdminSetUserSettingsRequest,
  AdminSetUserSettingsResponse,
  AdminSetUserSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminSetUserSettingsRequest,
  output: AdminSetUserSettingsResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminSetUserSettings",
}));

export type AdminUpdateAuthEventFeedbackError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotFoundException
  | UserPoolAddOnNotEnabledException
  | CommonErrors;
/**
 * Provides the feedback for an authentication event generated by threat protection
 * features. Your response indicates that you think that the event either was from a valid
 * user or was an unwanted authentication attempt. This feedback improves the risk
 * evaluation decision for the user pool as part of Amazon Cognito threat protection.
 * To activate this setting, your user pool must be on the
 * Plus tier.
 *
 * To train the threat-protection model to recognize trusted and untrusted sign-in
 * characteristics, configure threat protection in audit-only mode and provide a mechanism
 * for users or administrators to submit feedback. Your feedback can tell Amazon Cognito that a risk
 * rating was assigned at a level you don't agree with.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminUpdateAuthEventFeedback: API.OperationMethod<
  AdminUpdateAuthEventFeedbackRequest,
  AdminUpdateAuthEventFeedbackResponse,
  AdminUpdateAuthEventFeedbackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminUpdateAuthEventFeedbackRequest,
  output: AdminUpdateAuthEventFeedbackResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotFoundException,
    UserPoolAddOnNotEnabledException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminUpdateAuthEventFeedback",
}));

export type AdminUpdateDeviceStatusError =
  | InternalErrorException
  | InvalidParameterException
  | InvalidUserPoolConfigurationException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotFoundException
  | CommonErrors;
/**
 * Updates the status of a user's device so that it is marked as remembered or not
 * remembered for the purpose of device authentication. Device authentication is a
 * "remember me" mechanism that silently completes sign-in from trusted devices with a
 * device key instead of a user-provided MFA code. This operation changes the status of a
 * device without deleting it, so you can enable it again later. For more information about
 * device authentication, see Working with devices.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminUpdateDeviceStatus: API.OperationMethod<
  AdminUpdateDeviceStatusRequest,
  AdminUpdateDeviceStatusResponse,
  AdminUpdateDeviceStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminUpdateDeviceStatusRequest,
  output: AdminUpdateDeviceStatusResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    InvalidUserPoolConfigurationException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminUpdateDeviceStatus",
}));

export type AdminUpdateUserAttributesError =
  | AliasExistsException
  | InternalErrorException
  | InvalidEmailRoleAccessPolicyException
  | InvalidLambdaResponseException
  | InvalidParameterException
  | InvalidSmsRoleAccessPolicyException
  | InvalidSmsRoleTrustRelationshipException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UnexpectedLambdaException
  | UserLambdaValidationException
  | UserNotFoundException
  | CommonErrors;
/**
 * Updates the specified user's attributes. To delete an attribute from your user,
 * submit the attribute in your API request with a blank value.
 *
 * For custom attributes, you must add a `custom:` prefix to the attribute
 * name, for example `custom:department`.
 *
 * This operation can set a user's email address or phone number as verified and
 * permit immediate sign-in in user pools that require verification of these attributes. To
 * do this, set the `email_verified` or `phone_number_verified`
 * attribute to `true`.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 *
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 *
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 */
export const adminUpdateUserAttributes: API.OperationMethod<
  AdminUpdateUserAttributesRequest,
  AdminUpdateUserAttributesResponse,
  AdminUpdateUserAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminUpdateUserAttributesRequest,
  output: AdminUpdateUserAttributesResponse,
  errors: [
    AliasExistsException,
    InternalErrorException,
    InvalidEmailRoleAccessPolicyException,
    InvalidLambdaResponseException,
    InvalidParameterException,
    InvalidSmsRoleAccessPolicyException,
    InvalidSmsRoleTrustRelationshipException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UnexpectedLambdaException,
    UserLambdaValidationException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminUpdateUserAttributes",
}));

export type AdminUserGlobalSignOutError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotFoundException
  | CommonErrors;
/**
 * Invalidates the identity, access, and refresh tokens that Amazon Cognito issued to a user. Call
 * this operation with your administrative credentials when your user signs out of your
 * app. This results in the following behavior.
 *
 * - Amazon Cognito no longer accepts *token-authorized* user operations
 * that you authorize with a signed-out user's access tokens. For more information,
 * see Using the Amazon Cognito user pools API and user pool
 * endpoints.
 *
 * Amazon Cognito returns an `Access Token has been revoked` error when your
 * app attempts to authorize a user pools API request with a revoked access token
 * that contains the scope `aws.cognito.signin.user.admin`.
 *
 * - Amazon Cognito no longer accepts a signed-out user's ID token in a GetId request to an identity pool with
 * `ServerSideTokenCheck` enabled for its user pool IdP
 * configuration in CognitoIdentityProvider.
 *
 * - Amazon Cognito no longer accepts a signed-out user's refresh tokens in refresh
 * requests.
 *
 * Other requests might be valid until your user's token expires. This operation
 * doesn't clear the managed login session cookie. To clear the session for
 * a user who signed in with managed login or the classic hosted UI, direct their browser
 * session to the logout endpoint.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const adminUserGlobalSignOut: API.OperationMethod<
  AdminUserGlobalSignOutRequest,
  AdminUserGlobalSignOutResponse,
  AdminUserGlobalSignOutError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AdminUserGlobalSignOutRequest,
  output: AdminUserGlobalSignOutResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AdminUserGlobalSignOut",
}));

export type AssociateSoftwareTokenError =
  | ConcurrentModificationException
  | ForbiddenException
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | SoftwareTokenMFANotFoundException
  | CommonErrors;
/**
 * Begins setup of time-based one-time password (TOTP) multi-factor authentication (MFA)
 * for a user, with a unique private key that Amazon Cognito generates and returns in the API
 * response. You can authorize an `AssociateSoftwareToken` request with either
 * the user's access token, or a session string from a challenge response that you received
 * from Amazon Cognito.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 */
export const associateSoftwareToken: API.OperationMethod<
  AssociateSoftwareTokenRequest,
  AssociateSoftwareTokenResponse,
  AssociateSoftwareTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateSoftwareTokenRequest,
  output: AssociateSoftwareTokenResponse,
  errors: [
    ConcurrentModificationException,
    ForbiddenException,
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    SoftwareTokenMFANotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateSoftwareToken",
}));

export type ChangePasswordError =
  | ForbiddenException
  | InternalErrorException
  | InvalidParameterException
  | InvalidPasswordException
  | LimitExceededException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordHistoryPolicyViolationException
  | PasswordResetRequiredException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotConfirmedException
  | UserNotFoundException
  | CommonErrors;
/**
 * Changes the password for the currently signed-in user.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */
export const changePassword: API.OperationMethod<
  ChangePasswordRequest,
  ChangePasswordResponse,
  ChangePasswordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ChangePasswordRequest,
  output: ChangePasswordResponse,
  errors: [
    ForbiddenException,
    InternalErrorException,
    InvalidParameterException,
    InvalidPasswordException,
    LimitExceededException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordHistoryPolicyViolationException,
    PasswordResetRequiredException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotConfirmedException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ChangePassword",
}));

export type CompleteWebAuthnRegistrationError =
  | ForbiddenException
  | InternalErrorException
  | InvalidParameterException
  | LimitExceededException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordResetRequiredException
  | TooManyRequestsException
  | WebAuthnChallengeNotFoundException
  | WebAuthnClientMismatchException
  | WebAuthnCredentialNotSupportedException
  | WebAuthnNotEnabledException
  | WebAuthnOriginNotAllowedException
  | WebAuthnRelyingPartyMismatchException
  | CommonErrors;
/**
 * Completes registration of a passkey authenticator for the currently signed-in
 * user.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 */
export const completeWebAuthnRegistration: API.OperationMethod<
  CompleteWebAuthnRegistrationRequest,
  CompleteWebAuthnRegistrationResponse,
  CompleteWebAuthnRegistrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CompleteWebAuthnRegistrationRequest,
  output: CompleteWebAuthnRegistrationResponse,
  errors: [
    ForbiddenException,
    InternalErrorException,
    InvalidParameterException,
    LimitExceededException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordResetRequiredException,
    TooManyRequestsException,
    WebAuthnChallengeNotFoundException,
    WebAuthnClientMismatchException,
    WebAuthnCredentialNotSupportedException,
    WebAuthnNotEnabledException,
    WebAuthnOriginNotAllowedException,
    WebAuthnRelyingPartyMismatchException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CompleteWebAuthnRegistration",
}));

export type ConfirmDeviceError =
  | DeviceKeyExistsException
  | ForbiddenException
  | InternalErrorException
  | InvalidLambdaResponseException
  | InvalidParameterException
  | InvalidPasswordException
  | InvalidUserPoolConfigurationException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordResetRequiredException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UsernameExistsException
  | UserNotConfirmedException
  | UserNotFoundException
  | CommonErrors;
/**
 * Confirms a device that a user wants to remember. A remembered device is a "Remember me
 * on this device" option for user pools that perform authentication with the device key of
 * a trusted device in the back end, instead of a user-provided MFA code. For more
 * information about device authentication, see Working with user devices in your user pool.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */
export const confirmDevice: API.OperationMethod<
  ConfirmDeviceRequest,
  ConfirmDeviceResponse,
  ConfirmDeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ConfirmDeviceRequest,
  output: ConfirmDeviceResponse,
  errors: [
    DeviceKeyExistsException,
    ForbiddenException,
    InternalErrorException,
    InvalidLambdaResponseException,
    InvalidParameterException,
    InvalidPasswordException,
    InvalidUserPoolConfigurationException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordResetRequiredException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UsernameExistsException,
    UserNotConfirmedException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ConfirmDevice",
}));

export type ConfirmForgotPasswordError =
  | CodeMismatchException
  | ExpiredCodeException
  | ForbiddenException
  | InternalErrorException
  | InvalidLambdaResponseException
  | InvalidParameterException
  | InvalidPasswordException
  | LimitExceededException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordHistoryPolicyViolationException
  | ResourceNotFoundException
  | TooManyFailedAttemptsException
  | TooManyRequestsException
  | UnexpectedLambdaException
  | UserLambdaValidationException
  | UserNotConfirmedException
  | UserNotFoundException
  | CommonErrors;
/**
 * This public API operation accepts a confirmation code that Amazon Cognito sent to a user and
 * accepts a new password for that user.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */
export const confirmForgotPassword: API.OperationMethod<
  ConfirmForgotPasswordRequest,
  ConfirmForgotPasswordResponse,
  ConfirmForgotPasswordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ConfirmForgotPasswordRequest,
  output: ConfirmForgotPasswordResponse,
  errors: [
    CodeMismatchException,
    ExpiredCodeException,
    ForbiddenException,
    InternalErrorException,
    InvalidLambdaResponseException,
    InvalidParameterException,
    InvalidPasswordException,
    LimitExceededException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordHistoryPolicyViolationException,
    ResourceNotFoundException,
    TooManyFailedAttemptsException,
    TooManyRequestsException,
    UnexpectedLambdaException,
    UserLambdaValidationException,
    UserNotConfirmedException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ConfirmForgotPassword",
}));

export type ConfirmSignUpError =
  | AliasExistsException
  | CodeMismatchException
  | ExpiredCodeException
  | ForbiddenException
  | InternalErrorException
  | InvalidLambdaResponseException
  | InvalidParameterException
  | LimitExceededException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyFailedAttemptsException
  | TooManyRequestsException
  | UnexpectedLambdaException
  | UserLambdaValidationException
  | UserNotFoundException
  | CommonErrors;
/**
 * Confirms the account of a new user. This public API operation submits a code that
 * Amazon Cognito sent to your user when they signed up in your user pool. After your user enters
 * their code, they confirm ownership of the email address or phone number that they
 * provided, and their user account becomes active. Depending on your user pool
 * configuration, your users will receive their confirmation code in an email or SMS
 * message.
 *
 * Local users who signed up in your user pool are the only type of user who can confirm
 * sign-up with a code. Users who federate through an external identity provider (IdP) have
 * already been confirmed by their IdP.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */
export const confirmSignUp: API.OperationMethod<
  ConfirmSignUpRequest,
  ConfirmSignUpResponse,
  ConfirmSignUpError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ConfirmSignUpRequest,
  output: ConfirmSignUpResponse,
  errors: [
    AliasExistsException,
    CodeMismatchException,
    ExpiredCodeException,
    ForbiddenException,
    InternalErrorException,
    InvalidLambdaResponseException,
    InvalidParameterException,
    LimitExceededException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyFailedAttemptsException,
    TooManyRequestsException,
    UnexpectedLambdaException,
    UserLambdaValidationException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ConfirmSignUp",
}));

export type CreateGroupError =
  | GroupExistsException
  | InternalErrorException
  | InvalidParameterException
  | LimitExceededException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a new group in the specified user pool. For more information about user pool
 * groups, see Adding groups to a user pool.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const createGroup: API.OperationMethod<
  CreateGroupRequest,
  CreateGroupResponse,
  CreateGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateGroupRequest,
  output: CreateGroupResponse,
  errors: [
    GroupExistsException,
    InternalErrorException,
    InvalidParameterException,
    LimitExceededException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateGroup",
}));

export type CreateIdentityProviderError =
  | DuplicateProviderException
  | InternalErrorException
  | InvalidParameterException
  | LimitExceededException
  | NotAuthorizedException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Adds a configuration and trust relationship between a third-party identity provider
 * (IdP) and a user pool. Amazon Cognito accepts sign-in with third-party identity providers through
 * managed login and OIDC relying-party libraries. For more information, see Third-party IdP sign-in.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const createIdentityProvider: API.OperationMethod<
  CreateIdentityProviderRequest,
  CreateIdentityProviderResponse,
  CreateIdentityProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateIdentityProviderRequest,
  output: CreateIdentityProviderResponse,
  errors: [
    DuplicateProviderException,
    InternalErrorException,
    InvalidParameterException,
    LimitExceededException,
    NotAuthorizedException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateIdentityProvider",
}));

export type CreateManagedLoginBrandingError =
  | ConcurrentModificationException
  | InternalErrorException
  | InvalidParameterException
  | LimitExceededException
  | ManagedLoginBrandingExistsException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a new set of branding settings for a user pool style and associates it with an
 * app client. This operation is the programmatic option for the creation of a new style in
 * the branding editor.
 *
 * Provides values for UI customization in a `Settings` JSON object and image
 * files in an `Assets` array. To send the JSON object `Document`
 * type parameter in `Settings`, you might need to update to the most recent
 * version of your Amazon Web Services SDK. To create a new style with default settings, set
 * `UseCognitoProvidedValues` to `true` and don't provide
 * values for any other options.
 *
 * This operation has a 2-megabyte request-size limit and include the CSS settings and
 * image assets for your app client. Your branding settings might exceed 2MB in size. Amazon Cognito
 * doesn't require that you pass all parameters in one request and preserves existing
 * style settings that you don't specify. If your request is larger than 2MB, separate it
 * into multiple requests, each with a size smaller than the limit.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const createManagedLoginBranding: API.OperationMethod<
  CreateManagedLoginBrandingRequest,
  CreateManagedLoginBrandingResponse,
  CreateManagedLoginBrandingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateManagedLoginBrandingRequest,
  output: CreateManagedLoginBrandingResponse,
  errors: [
    ConcurrentModificationException,
    InternalErrorException,
    InvalidParameterException,
    LimitExceededException,
    ManagedLoginBrandingExistsException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateManagedLoginBranding",
}));

export type CreateResourceServerError =
  | InternalErrorException
  | InvalidParameterException
  | LimitExceededException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a new OAuth2.0 resource server and defines custom scopes within it. Resource
 * servers are associated with custom scopes and machine-to-machine (M2M) authorization.
 * For more information, see Access control with resource servers.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const createResourceServer: API.OperationMethod<
  CreateResourceServerRequest,
  CreateResourceServerResponse,
  CreateResourceServerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateResourceServerRequest,
  output: CreateResourceServerResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    LimitExceededException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateResourceServer",
}));

export type CreateTermsError =
  | ConcurrentModificationException
  | InternalErrorException
  | InvalidParameterException
  | LimitExceededException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TermsExistsException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates terms documents for the requested app client. When Terms and conditions and
 * Privacy policy documents are configured, the app client displays links to them in the
 * sign-up page of managed login for the app client.
 *
 * You can provide URLs for terms documents in the languages that are supported by managed login localization. Amazon Cognito directs users to the terms documents for
 * their current language, with fallback to `default` if no document exists for
 * the language.
 *
 * Each request accepts one type of terms document and a map of language-to-link for that
 * document type. You must provide both types of terms documents in at least one language
 * before Amazon Cognito displays your terms documents. Supply each type in separate
 * requests.
 *
 * For more information, see Terms documents.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const createTerms: API.OperationMethod<
  CreateTermsRequest,
  CreateTermsResponse,
  CreateTermsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTermsRequest,
  output: CreateTermsResponse,
  errors: [
    ConcurrentModificationException,
    InternalErrorException,
    InvalidParameterException,
    LimitExceededException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TermsExistsException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTerms",
}));

export type CreateUserImportJobError =
  | InternalErrorException
  | InvalidParameterException
  | LimitExceededException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PreconditionNotMetException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a user import job. You can import users into user pools from a comma-separated
 * values (CSV) file without adding Amazon Cognito MAU costs to your Amazon Web Services bill.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const createUserImportJob: API.OperationMethod<
  CreateUserImportJobRequest,
  CreateUserImportJobResponse,
  CreateUserImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateUserImportJobRequest,
  output: CreateUserImportJobResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    LimitExceededException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PreconditionNotMetException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateUserImportJob",
}));

export type CreateUserPoolError =
  | FeatureUnavailableInTierException
  | InternalErrorException
  | InvalidEmailRoleAccessPolicyException
  | InvalidParameterException
  | InvalidSmsRoleAccessPolicyException
  | InvalidSmsRoleTrustRelationshipException
  | LimitExceededException
  | NotAuthorizedException
  | TierChangeNotAllowedException
  | TooManyRequestsException
  | UserPoolTaggingException
  | CommonErrors;
/**
 * Creates a new Amazon Cognito user pool. This operation sets basic and advanced configuration
 * options.
 *
 * If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.
 *
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 *
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const createUserPool: API.OperationMethod<
  CreateUserPoolRequest,
  CreateUserPoolResponse,
  CreateUserPoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateUserPoolRequest,
  output: CreateUserPoolResponse,
  errors: [
    FeatureUnavailableInTierException,
    InternalErrorException,
    InvalidEmailRoleAccessPolicyException,
    InvalidParameterException,
    InvalidSmsRoleAccessPolicyException,
    InvalidSmsRoleTrustRelationshipException,
    LimitExceededException,
    NotAuthorizedException,
    TierChangeNotAllowedException,
    TooManyRequestsException,
    UserPoolTaggingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateUserPool",
}));

export type CreateUserPoolClientError =
  | FeatureUnavailableInTierException
  | InternalErrorException
  | InvalidOAuthFlowException
  | InvalidParameterException
  | LimitExceededException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | ScopeDoesNotExistException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates an app client in a user pool. This operation sets basic and advanced
 * configuration options.
 *
 * Unlike app clients created in the console, Amazon Cognito doesn't automatically assign a
 * branding style to app clients that you configure with this API operation. Managed login and classic hosted UI pages aren't
 * available for your client until after you apply a branding style.
 *
 * If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const createUserPoolClient: API.OperationMethod<
  CreateUserPoolClientRequest,
  CreateUserPoolClientResponse,
  CreateUserPoolClientError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateUserPoolClientRequest,
  output: CreateUserPoolClientResponse,
  errors: [
    FeatureUnavailableInTierException,
    InternalErrorException,
    InvalidOAuthFlowException,
    InvalidParameterException,
    LimitExceededException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    ScopeDoesNotExistException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateUserPoolClient",
}));

export type CreateUserPoolDomainError =
  | ConcurrentModificationException
  | FeatureUnavailableInTierException
  | InternalErrorException
  | InvalidParameterException
  | LimitExceededException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * A user pool domain hosts managed login, an authorization server and web server for
 * authentication in your application. This operation creates a new user pool prefix domain
 * or custom domain and sets the managed login branding version. Set the branding version
 * to `1` for hosted UI (classic) or `2` for managed login. When you
 * choose a custom domain, you must provide an SSL certificate in the US East (N. Virginia)
 * Amazon Web Services Region in your request.
 *
 * Your prefix domain might take up to one minute to take effect. Your custom domain is
 * online within five minutes, but it can take up to one hour to distribute your SSL
 * certificate.
 *
 * For more information about adding a custom domain to your user pool, see Configuring a user pool domain.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const createUserPoolDomain: API.OperationMethod<
  CreateUserPoolDomainRequest,
  CreateUserPoolDomainResponse,
  CreateUserPoolDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateUserPoolDomainRequest,
  output: CreateUserPoolDomainResponse,
  errors: [
    ConcurrentModificationException,
    FeatureUnavailableInTierException,
    InternalErrorException,
    InvalidParameterException,
    LimitExceededException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateUserPoolDomain",
}));

export type CreateUserPoolReplicaError =
  | FeatureUnavailableInTierException
  | InternalErrorException
  | InvalidParameterException
  | LimitExceededException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserPoolTaggingException
  | CommonErrors;
/**
 * Creates a replica of an existing user pool in a specified Amazon Web Services Region. The replica
 * enables multi-region replication for high availability and disaster recovery. To create
 * a replica, you must have permissions to create user pools in the target Region.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const createUserPoolReplica: API.OperationMethod<
  CreateUserPoolReplicaRequest,
  CreateUserPoolReplicaResponse,
  CreateUserPoolReplicaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateUserPoolReplicaRequest,
  output: CreateUserPoolReplicaResponse,
  errors: [
    FeatureUnavailableInTierException,
    InternalErrorException,
    InvalidParameterException,
    LimitExceededException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserPoolTaggingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateUserPoolReplica",
}));

export type DeleteGroupError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a group from the specified user pool. When you delete a group, that group no
 * longer contributes to users' `cognito:preferred_group` or
 * `cognito:groups` claims, and no longer influence access-control decision
 * that are based on group membership. For more information about user pool groups, see
 * Adding groups to a user pool.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const deleteGroup: API.OperationMethod<
  DeleteGroupRequest,
  DeleteGroupResponse,
  DeleteGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteGroupRequest,
  output: DeleteGroupResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteGroup",
}));

export type DeleteIdentityProviderError =
  | ConcurrentModificationException
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UnsupportedIdentityProviderException
  | CommonErrors;
/**
 * Deletes a user pool identity provider (IdP). After you delete an IdP, users can no
 * longer sign in to your user pool through that IdP. For more information about user pool
 * IdPs, see Third-party IdP sign-in.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const deleteIdentityProvider: API.OperationMethod<
  DeleteIdentityProviderRequest,
  DeleteIdentityProviderResponse,
  DeleteIdentityProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteIdentityProviderRequest,
  output: DeleteIdentityProviderResponse,
  errors: [
    ConcurrentModificationException,
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UnsupportedIdentityProviderException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIdentityProvider",
}));

export type DeleteManagedLoginBrandingError =
  | ConcurrentModificationException
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a managed login branding style. When you delete a style, you delete the
 * branding association for an app client. When an app client doesn't have a style
 * assigned, your managed login pages for that app client are nonfunctional until you
 * create a new style or switch the domain branding version.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const deleteManagedLoginBranding: API.OperationMethod<
  DeleteManagedLoginBrandingRequest,
  DeleteManagedLoginBrandingResponse,
  DeleteManagedLoginBrandingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteManagedLoginBrandingRequest,
  output: DeleteManagedLoginBrandingResponse,
  errors: [
    ConcurrentModificationException,
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteManagedLoginBranding",
}));

export type DeleteResourceServerError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a resource server. After you delete a resource server, users can no longer
 * generate access tokens with scopes that are associate with that resource server.
 *
 * Resource servers are associated with custom scopes and machine-to-machine (M2M)
 * authorization. For more information, see Access control with resource servers.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const deleteResourceServer: API.OperationMethod<
  DeleteResourceServerRequest,
  DeleteResourceServerResponse,
  DeleteResourceServerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteResourceServerRequest,
  output: DeleteResourceServerResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteResourceServer",
}));

export type DeleteTermsError =
  | ConcurrentModificationException
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes the terms documents with the requested ID from your app client.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const deleteTerms: API.OperationMethod<
  DeleteTermsRequest,
  DeleteTermsResponse,
  DeleteTermsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTermsRequest,
  output: DeleteTermsResponse,
  errors: [
    ConcurrentModificationException,
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTerms",
}));

export type DeleteUserError =
  | ForbiddenException
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordResetRequiredException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotConfirmedException
  | UserNotFoundException
  | CommonErrors;
/**
 * Deletes the profile of the currently signed-in user. A deleted user profile can no
 * longer be used to sign in and can't be restored.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */
export const deleteUser: API.OperationMethod<
  DeleteUserRequest,
  DeleteUserResponse,
  DeleteUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteUserRequest,
  output: DeleteUserResponse,
  errors: [
    ForbiddenException,
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordResetRequiredException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotConfirmedException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteUser",
}));

export type DeleteUserAttributesError =
  | ForbiddenException
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordResetRequiredException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotConfirmedException
  | UserNotFoundException
  | CommonErrors;
/**
 * Deletes attributes from the currently signed-in user. For example, your application
 * can submit a request to this operation when a user wants to remove their
 * `birthdate` attribute value.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */
export const deleteUserAttributes: API.OperationMethod<
  DeleteUserAttributesRequest,
  DeleteUserAttributesResponse,
  DeleteUserAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteUserAttributesRequest,
  output: DeleteUserAttributesResponse,
  errors: [
    ForbiddenException,
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordResetRequiredException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotConfirmedException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteUserAttributes",
}));

export type DeleteUserPoolError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserImportInProgressException
  | CommonErrors;
/**
 * Deletes a user pool. After you delete a user pool, users can no longer sign in to any
 * associated applications.
 *
 * When you delete a user pool, it's no longer visible or operational in your Amazon Web Services account. Amazon Cognito retains deleted user pools in an inactive state for 14
 * days, then begins a cleanup process that fully removes them from Amazon Web Services systems. In case
 * of accidental deletion, contact Amazon Web Services Support within 14 days for restoration
 * assistance.
 *
 * Amazon Cognito begins full deletion of all resources from deleted user pools after 14 days. In
 * the case of large user pools, the cleanup process might take significant additional time
 * before all user data is permanently deleted.
 */
export const deleteUserPool: API.OperationMethod<
  DeleteUserPoolRequest,
  DeleteUserPoolResponse,
  DeleteUserPoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteUserPoolRequest,
  output: DeleteUserPoolResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserImportInProgressException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteUserPool",
}));

export type DeleteUserPoolClientError =
  | ConcurrentModificationException
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a user pool app client. After you delete an app client, users can no longer
 * sign in to the associated application.
 */
export const deleteUserPoolClient: API.OperationMethod<
  DeleteUserPoolClientRequest,
  DeleteUserPoolClientResponse,
  DeleteUserPoolClientError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteUserPoolClientRequest,
  output: DeleteUserPoolClientResponse,
  errors: [
    ConcurrentModificationException,
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteUserPoolClient",
}));

export type DeleteUserPoolClientSecretError =
  | InternalServerException
  | InvalidParameterException
  | LimitExceededException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a specific client secret from a user pool app client. You cannot delete the last remaining secret for an app client.
 */
export const deleteUserPoolClientSecret: API.OperationMethod<
  DeleteUserPoolClientSecretRequest,
  DeleteUserPoolClientSecretResponse,
  DeleteUserPoolClientSecretError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteUserPoolClientSecretRequest,
  output: DeleteUserPoolClientSecretResponse,
  errors: [
    InternalServerException,
    InvalidParameterException,
    LimitExceededException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteUserPoolClientSecret",
}));

export type DeleteUserPoolDomainError =
  | ConcurrentModificationException
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Given a user pool ID and domain identifier, deletes a user pool domain. After you
 * delete a user pool domain, your managed login pages and authorization server are no
 * longer available.
 */
export const deleteUserPoolDomain: API.OperationMethod<
  DeleteUserPoolDomainRequest,
  DeleteUserPoolDomainResponse,
  DeleteUserPoolDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteUserPoolDomainRequest,
  output: DeleteUserPoolDomainResponse,
  errors: [
    ConcurrentModificationException,
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteUserPoolDomain",
}));

export type DeleteUserPoolReplicaError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a secondary replica user pool. You can only delete replicas that are in the
 * INACTIVE status. This operation must be called from the primary Region.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const deleteUserPoolReplica: API.OperationMethod<
  DeleteUserPoolReplicaRequest,
  DeleteUserPoolReplicaResponse,
  DeleteUserPoolReplicaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteUserPoolReplicaRequest,
  output: DeleteUserPoolReplicaResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteUserPoolReplica",
}));

export type DeleteWebAuthnCredentialError =
  | ForbiddenException
  | InternalErrorException
  | InvalidParameterException
  | LimitExceededException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordResetRequiredException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a registered passkey, or WebAuthn, authenticator for the currently signed-in
 * user.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */
export const deleteWebAuthnCredential: API.OperationMethod<
  DeleteWebAuthnCredentialRequest,
  DeleteWebAuthnCredentialResponse,
  DeleteWebAuthnCredentialError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteWebAuthnCredentialRequest,
  output: DeleteWebAuthnCredentialResponse,
  errors: [
    ForbiddenException,
    InternalErrorException,
    InvalidParameterException,
    LimitExceededException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordResetRequiredException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWebAuthnCredential",
}));

export type DescribeIdentityProviderError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Given a user pool ID and identity provider (IdP) name, returns details about the
 * IdP.
 */
export const describeIdentityProvider: API.OperationMethod<
  DescribeIdentityProviderRequest,
  DescribeIdentityProviderResponse,
  DescribeIdentityProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeIdentityProviderRequest,
  output: DescribeIdentityProviderResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeIdentityProvider",
}));

export type DescribeManagedLoginBrandingError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Given the ID of a managed login branding style, returns detailed information about the
 * style.
 */
export const describeManagedLoginBranding: API.OperationMethod<
  DescribeManagedLoginBrandingRequest,
  DescribeManagedLoginBrandingResponse,
  DescribeManagedLoginBrandingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeManagedLoginBrandingRequest,
  output: DescribeManagedLoginBrandingResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeManagedLoginBranding",
}));

export type DescribeManagedLoginBrandingByClientError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Given the ID of a user pool app client, returns detailed information about the style
 * assigned to the app client.
 */
export const describeManagedLoginBrandingByClient: API.OperationMethod<
  DescribeManagedLoginBrandingByClientRequest,
  DescribeManagedLoginBrandingByClientResponse,
  DescribeManagedLoginBrandingByClientError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeManagedLoginBrandingByClientRequest,
  output: DescribeManagedLoginBrandingByClientResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeManagedLoginBrandingByClient",
}));

export type DescribeResourceServerError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Describes a resource server. For more information about resource servers, see Access control with resource servers.
 */
export const describeResourceServer: API.OperationMethod<
  DescribeResourceServerRequest,
  DescribeResourceServerResponse,
  DescribeResourceServerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeResourceServerRequest,
  output: DescribeResourceServerResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeResourceServer",
}));

export type DescribeRiskConfigurationError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserPoolAddOnNotEnabledException
  | CommonErrors;
/**
 * Given an app client or user pool ID where threat protection is configured, describes
 * the risk configuration. This operation returns details about adaptive authentication,
 * compromised credentials, and IP-address allow- and denylists. For more information about
 * threat protection, see Threat protection.
 */
export const describeRiskConfiguration: API.OperationMethod<
  DescribeRiskConfigurationRequest,
  DescribeRiskConfigurationResponse,
  DescribeRiskConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeRiskConfigurationRequest,
  output: DescribeRiskConfigurationResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserPoolAddOnNotEnabledException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRiskConfiguration",
}));

export type DescribeTermsError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns details for the requested terms documents ID. For more information, see Terms documents.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const describeTerms: API.OperationMethod<
  DescribeTermsRequest,
  DescribeTermsResponse,
  DescribeTermsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeTermsRequest,
  output: DescribeTermsResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTerms",
}));

export type DescribeTermsByClientError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns details for the terms documents that are associated with an app client,
 * identified by the app client ID, user pool ID, and terms name. For
 * more information, see Terms documents.
 *
 * To call `DescribeTermsByClient`, you must have the
 * `cognito-idp:DescribeTermsByClient` Identity and Access Management (IAM) permission. An IAM
 * policy that denies `cognito-idp:DescribeTerms` also denies requests to
 * `DescribeTermsByClient`.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const describeTermsByClient: API.OperationMethod<
  DescribeTermsByClientRequest,
  DescribeTermsByClientResponse,
  DescribeTermsByClientError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeTermsByClientRequest,
  output: DescribeTermsByClientResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTermsByClient",
}));

export type DescribeUserImportJobError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Describes a user import job. For more information about user CSV import, see Importing users from a CSV file.
 */
export const describeUserImportJob: API.OperationMethod<
  DescribeUserImportJobRequest,
  DescribeUserImportJobResponse,
  DescribeUserImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeUserImportJobRequest,
  output: DescribeUserImportJobResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeUserImportJob",
}));

export type DescribeUserPoolError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserPoolTaggingException
  | CommonErrors;
/**
 * Given a user pool ID, returns configuration information. This operation is useful when
 * you want to inspect an existing user pool and programmatically replicate the
 * configuration to another user pool.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const describeUserPool: API.OperationMethod<
  DescribeUserPoolRequest,
  DescribeUserPoolResponse,
  DescribeUserPoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeUserPoolRequest,
  output: DescribeUserPoolResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserPoolTaggingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeUserPool",
}));

export type DescribeUserPoolClientError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Given an app client ID, returns configuration information. This operation is useful
 * when you want to inspect an existing app client and programmatically replicate the
 * configuration to another app client. For more information about app clients, see App clients.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const describeUserPoolClient: API.OperationMethod<
  DescribeUserPoolClientRequest,
  DescribeUserPoolClientResponse,
  DescribeUserPoolClientError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeUserPoolClientRequest,
  output: DescribeUserPoolClientResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeUserPoolClient",
}));

export type DescribeUserPoolDomainError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Given a user pool domain name, returns information about the domain
 * configuration.
 *
 * This operation doesn't return results when you query a prefix domain in a
 * secondary Region. Prefix domains are Region-specific and can only be described in
 * the Region where they were created. To describe a prefix domain for a replica user
 * pool, make the request to the primary Region's endpoint.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const describeUserPoolDomain: API.OperationMethod<
  DescribeUserPoolDomainRequest,
  DescribeUserPoolDomainResponse,
  DescribeUserPoolDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeUserPoolDomainRequest,
  output: DescribeUserPoolDomainResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeUserPoolDomain",
}));

export type ForgetDeviceError =
  | ForbiddenException
  | InternalErrorException
  | InvalidParameterException
  | InvalidUserPoolConfigurationException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordResetRequiredException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotConfirmedException
  | UserNotFoundException
  | CommonErrors;
/**
 * Given a device key, deletes a remembered device as the currently signed-in user. For
 * more information about device authentication, see Working with user devices in your user pool.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */
export const forgetDevice: API.OperationMethod<
  ForgetDeviceRequest,
  ForgetDeviceResponse,
  ForgetDeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ForgetDeviceRequest,
  output: ForgetDeviceResponse,
  errors: [
    ForbiddenException,
    InternalErrorException,
    InvalidParameterException,
    InvalidUserPoolConfigurationException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordResetRequiredException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotConfirmedException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ForgetDevice",
}));

export type ForgotPasswordError =
  | CodeDeliveryFailureException
  | ForbiddenException
  | InternalErrorException
  | InvalidEmailRoleAccessPolicyException
  | InvalidLambdaResponseException
  | InvalidParameterException
  | InvalidSmsRoleAccessPolicyException
  | InvalidSmsRoleTrustRelationshipException
  | LimitExceededException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UnexpectedLambdaException
  | UserLambdaValidationException
  | UserNotFoundException
  | CommonErrors;
/**
 * Sends a password-reset confirmation code to the email address or phone number of the
 * requested username. The message delivery method is determined by the user's
 * available attributes and the `AccountRecoverySetting` configuration of the
 * user pool.
 *
 * For the `Username` parameter, you can use the username or an email, phone,
 * or preferred username alias.
 *
 * If neither a verified phone number nor a verified email exists, Amazon Cognito responds with an
 * `InvalidParameterException` error . If your app client has a client
 * secret and you don't provide a `SECRET_HASH` parameter, this API returns
 * `NotAuthorizedException`.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 *
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 *
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 */
export const forgotPassword: API.OperationMethod<
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  ForgotPasswordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ForgotPasswordRequest,
  output: ForgotPasswordResponse,
  errors: [
    CodeDeliveryFailureException,
    ForbiddenException,
    InternalErrorException,
    InvalidEmailRoleAccessPolicyException,
    InvalidLambdaResponseException,
    InvalidParameterException,
    InvalidSmsRoleAccessPolicyException,
    InvalidSmsRoleTrustRelationshipException,
    LimitExceededException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UnexpectedLambdaException,
    UserLambdaValidationException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ForgotPassword",
}));

export type GetClientTokenError =
  | ForbiddenException
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Issues an access token for machine-to-machine (M2M) authorization. Your app client
 * provides its client ID and secret, and receives an access token that authorizes requests
 * to your resource servers.
 *
 * To use this operation, you must configure the app client with a client secret and
 * enable the `ALLOW_CLIENT_TOKEN_AUTH` authentication flow. The
 * `ALLOW_CLIENT_TOKEN_AUTH` flow is mutually exclusive with user authentication
 * flows. It must be the only authentication flow that you configure for the app client. For
 * more information, see Scopes, M2M, and resource servers.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */
export const getClientToken: API.OperationMethod<
  GetClientTokenRequest,
  GetClientTokenResponse,
  GetClientTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetClientTokenRequest,
  output: GetClientTokenResponse,
  errors: [
    ForbiddenException,
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetClientToken",
}));

export type GetCSVHeaderError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Given a user pool ID, generates a comma-separated value (CSV) list populated with
 * available user attributes in the user pool. This list is the header for the CSV file
 * that determines the users in a user import job. Save the content of
 * `CSVHeader` in the response as a `.csv` file and populate it
 * with the usernames and attributes of users that you want to import. For more information
 * about CSV user import, see Importing users from a CSV file.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const getCSVHeader: API.OperationMethod<
  GetCSVHeaderRequest,
  GetCSVHeaderResponse,
  GetCSVHeaderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCSVHeaderRequest,
  output: GetCSVHeaderResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCSVHeader",
}));

export type GetDeviceError =
  | ForbiddenException
  | InternalErrorException
  | InvalidParameterException
  | InvalidUserPoolConfigurationException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordResetRequiredException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotConfirmedException
  | UserNotFoundException
  | CommonErrors;
/**
 * Given a device key, returns information about a remembered device for the current
 * user. For more information about device authentication, see Working with user devices in your user pool.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */
export const getDevice: API.OperationMethod<
  GetDeviceRequest,
  GetDeviceResponse,
  GetDeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDeviceRequest,
  output: GetDeviceResponse,
  errors: [
    ForbiddenException,
    InternalErrorException,
    InvalidParameterException,
    InvalidUserPoolConfigurationException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordResetRequiredException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotConfirmedException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDevice",
}));

export type GetGroupError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Given a user pool ID and a group name, returns information about the user
 * group.
 *
 * For more information about user pool groups, see Adding groups to a user pool.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const getGroup: API.OperationMethod<
  GetGroupRequest,
  GetGroupResponse,
  GetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetGroupRequest,
  output: GetGroupResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGroup",
}));

export type GetIdentityProviderByIdentifierError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Given the identifier of an identity provider (IdP), for example
 * `examplecorp`, returns information about the user pool configuration for
 * that IdP. For more information about IdPs, see Third-party IdP sign-in.
 */
export const getIdentityProviderByIdentifier: API.OperationMethod<
  GetIdentityProviderByIdentifierRequest,
  GetIdentityProviderByIdentifierResponse,
  GetIdentityProviderByIdentifierError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIdentityProviderByIdentifierRequest,
  output: GetIdentityProviderByIdentifierResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIdentityProviderByIdentifier",
}));

export type GetLogDeliveryConfigurationError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Given a user pool ID, returns the logging configuration. User pools can export
 * message-delivery error and threat-protection activity logs to external Amazon Web Services services. For more information, see Exporting user pool logs.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const getLogDeliveryConfiguration: API.OperationMethod<
  GetLogDeliveryConfigurationRequest,
  GetLogDeliveryConfigurationResponse,
  GetLogDeliveryConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLogDeliveryConfigurationRequest,
  output: GetLogDeliveryConfigurationResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLogDeliveryConfiguration",
}));

export type GetProvisionedLimitError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns the current provisioned limit for a specific API category.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const getProvisionedLimit: API.OperationMethod<
  GetProvisionedLimitRequest,
  GetProvisionedLimitResponse,
  GetProvisionedLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProvisionedLimitRequest,
  output: GetProvisionedLimitResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProvisionedLimit",
}));

export type GetSigningCertificateError =
  | InternalErrorException
  | InvalidParameterException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Given a user pool ID, returns the signing certificate for SAML 2.0 federation.
 *
 * Issued certificates are valid for 10 years from the date of issue. Amazon Cognito issues and
 * assigns a new signing certificate annually. This renewal process returns a new value in
 * the response to `GetSigningCertificate`, but doesn't invalidate the original
 * certificate.
 *
 * For more information, see Signing SAML requests.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const getSigningCertificate: API.OperationMethod<
  GetSigningCertificateRequest,
  GetSigningCertificateResponse,
  GetSigningCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSigningCertificateRequest,
  output: GetSigningCertificateResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    OperationNotEnabledException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSigningCertificate",
}));

export type GetTokensFromRefreshTokenError =
  | ForbiddenException
  | InternalErrorException
  | InvalidLambdaResponseException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | RefreshTokenReuseException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UnexpectedLambdaException
  | UserLambdaValidationException
  | UserNotFoundException
  | CommonErrors;
/**
 * Given a refresh token, issues new ID, access, and optionally refresh tokens for the
 * user who owns the submitted token. This operation issues a new refresh token and
 * invalidates the original refresh token after an optional grace period when refresh token
 * rotation is enabled. If refresh token rotation is disabled, issues new ID and access
 * tokens only.
 */
export const getTokensFromRefreshToken: API.OperationMethod<
  GetTokensFromRefreshTokenRequest,
  GetTokensFromRefreshTokenResponse,
  GetTokensFromRefreshTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTokensFromRefreshTokenRequest,
  output: GetTokensFromRefreshTokenResponse,
  errors: [
    ForbiddenException,
    InternalErrorException,
    InvalidLambdaResponseException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    RefreshTokenReuseException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UnexpectedLambdaException,
    UserLambdaValidationException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTokensFromRefreshToken",
}));

export type GetUICustomizationError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Given a user pool ID or app client, returns information about classic hosted UI
 * branding that you applied, if any. Returns user-pool level branding information if no
 * app client branding is applied, or if you don't specify an app client ID. Returns
 * an empty object if you haven't applied hosted UI branding to either the client or
 * the user pool. For more information, see Hosted UI (classic) branding.
 */
export const getUICustomization: API.OperationMethod<
  GetUICustomizationRequest,
  GetUICustomizationResponse,
  GetUICustomizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetUICustomizationRequest,
  output: GetUICustomizationResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetUICustomization",
}));

export type GetUserError =
  | ForbiddenException
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordResetRequiredException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotConfirmedException
  | UserNotFoundException
  | CommonErrors;
/**
 * Gets user attributes and and MFA settings for the currently signed-in user.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */
export const getUser: API.OperationMethod<
  GetUserRequest,
  GetUserResponse,
  GetUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetUserRequest,
  output: GetUserResponse,
  errors: [
    ForbiddenException,
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordResetRequiredException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotConfirmedException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetUser",
}));

export type GetUserAttributeVerificationCodeError =
  | CodeDeliveryFailureException
  | ForbiddenException
  | InternalErrorException
  | InvalidEmailRoleAccessPolicyException
  | InvalidLambdaResponseException
  | InvalidParameterException
  | InvalidSmsRoleAccessPolicyException
  | InvalidSmsRoleTrustRelationshipException
  | LimitExceededException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordResetRequiredException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UnexpectedLambdaException
  | UserLambdaValidationException
  | UserNotConfirmedException
  | UserNotFoundException
  | CommonErrors;
/**
 * Given an attribute name, sends a user attribute verification code for the specified
 * attribute name to the currently signed-in user.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 *
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 *
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 */
export const getUserAttributeVerificationCode: API.OperationMethod<
  GetUserAttributeVerificationCodeRequest,
  GetUserAttributeVerificationCodeResponse,
  GetUserAttributeVerificationCodeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetUserAttributeVerificationCodeRequest,
  output: GetUserAttributeVerificationCodeResponse,
  errors: [
    CodeDeliveryFailureException,
    ForbiddenException,
    InternalErrorException,
    InvalidEmailRoleAccessPolicyException,
    InvalidLambdaResponseException,
    InvalidParameterException,
    InvalidSmsRoleAccessPolicyException,
    InvalidSmsRoleTrustRelationshipException,
    LimitExceededException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordResetRequiredException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UnexpectedLambdaException,
    UserLambdaValidationException,
    UserNotConfirmedException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetUserAttributeVerificationCode",
}));

export type GetUserAuthFactorsError =
  | ForbiddenException
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordResetRequiredException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotConfirmedException
  | UserNotFoundException
  | CommonErrors;
/**
 * Lists the authentication options for the currently signed-in user. Returns the
 * following:
 *
 * - The user's multi-factor authentication (MFA) preferences.
 *
 * - The user's options for choice-based authentication with the
 * `USER_AUTH` flow.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */
export const getUserAuthFactors: API.OperationMethod<
  GetUserAuthFactorsRequest,
  GetUserAuthFactorsResponse,
  GetUserAuthFactorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetUserAuthFactorsRequest,
  output: GetUserAuthFactorsResponse,
  errors: [
    ForbiddenException,
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordResetRequiredException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotConfirmedException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetUserAuthFactors",
}));

export type GetUserPoolMfaConfigError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Given a user pool ID, returns configuration for sign-in with WebAuthn authenticators
 * and for multi-factor authentication (MFA). This operation describes the
 * following:
 *
 * - The WebAuthn relying party (RP) ID and user-verification settings.
 *
 * - The required, optional, or disabled state of MFA for all user pool
 * users.
 *
 * - The message templates for email and SMS MFA.
 *
 * - The enabled or disabled state of time-based one-time password (TOTP)
 * MFA.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const getUserPoolMfaConfig: API.OperationMethod<
  GetUserPoolMfaConfigRequest,
  GetUserPoolMfaConfigResponse,
  GetUserPoolMfaConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetUserPoolMfaConfigRequest,
  output: GetUserPoolMfaConfigResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetUserPoolMfaConfig",
}));

export type GlobalSignOutError =
  | ForbiddenException
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordResetRequiredException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotConfirmedException
  | CommonErrors;
/**
 * Invalidates the identity, access, and refresh tokens that Amazon Cognito issued to a user. Call
 * this operation when your user signs out of your app. This results in the following
 * behavior.
 *
 * - Amazon Cognito no longer accepts *token-authorized* user operations
 * that you authorize with a signed-out user's access tokens. For more information,
 * see Using the Amazon Cognito user pools API and user pool
 * endpoints.
 *
 * Amazon Cognito returns an `Access Token has been revoked` error when your
 * app attempts to authorize a user pools API request with a revoked access token
 * that contains the scope `aws.cognito.signin.user.admin`.
 *
 * - Amazon Cognito no longer accepts a signed-out user's ID token in a GetId request to an identity pool with
 * `ServerSideTokenCheck` enabled for its user pool IdP
 * configuration in CognitoIdentityProvider.
 *
 * - Amazon Cognito no longer accepts a signed-out user's refresh tokens in refresh
 * requests.
 *
 * Other requests might be valid until your user's token expires. This operation
 * doesn't clear the managed login session cookie. To clear the session for
 * a user who signed in with managed login or the classic hosted UI, direct their browser
 * session to the logout endpoint.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */
export const globalSignOut: API.OperationMethod<
  GlobalSignOutRequest,
  GlobalSignOutResponse,
  GlobalSignOutError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GlobalSignOutRequest,
  output: GlobalSignOutResponse,
  errors: [
    ForbiddenException,
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordResetRequiredException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotConfirmedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GlobalSignOut",
}));

export type InitiateAuthError =
  | FeatureUnavailableInTierException
  | ForbiddenException
  | InternalErrorException
  | InvalidEmailRoleAccessPolicyException
  | InvalidLambdaResponseException
  | InvalidParameterException
  | InvalidSmsRoleAccessPolicyException
  | InvalidSmsRoleTrustRelationshipException
  | InvalidUserPoolConfigurationException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordResetRequiredException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UnexpectedLambdaException
  | UnsupportedOperationException
  | UserLambdaValidationException
  | UserNotConfirmedException
  | UserNotFoundException
  | CommonErrors;
/**
 * Declares an authentication flow and initiates sign-in for a user in the Amazon Cognito user
 * directory. Amazon Cognito might respond with an additional challenge or an
 * `AuthenticationResult` that contains the outcome of a successful
 * authentication. You can't sign in a user with a federated IdP with
 * `InitiateAuth`. For more information, see Authentication.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 *
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 *
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 */
export const initiateAuth: API.OperationMethod<
  InitiateAuthRequest,
  InitiateAuthResponse,
  InitiateAuthError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: InitiateAuthRequest,
  output: InitiateAuthResponse,
  errors: [
    FeatureUnavailableInTierException,
    ForbiddenException,
    InternalErrorException,
    InvalidEmailRoleAccessPolicyException,
    InvalidLambdaResponseException,
    InvalidParameterException,
    InvalidSmsRoleAccessPolicyException,
    InvalidSmsRoleTrustRelationshipException,
    InvalidUserPoolConfigurationException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordResetRequiredException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UnexpectedLambdaException,
    UnsupportedOperationException,
    UserLambdaValidationException,
    UserNotConfirmedException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InitiateAuth",
}));

export type ListDevicesError =
  | ForbiddenException
  | InternalErrorException
  | InvalidParameterException
  | InvalidUserPoolConfigurationException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordResetRequiredException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotConfirmedException
  | UserNotFoundException
  | CommonErrors;
/**
 * Lists the devices that Amazon Cognito has registered to the currently signed-in user. For more
 * information about device authentication, see Working with user devices in your user pool.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */
export const listDevices: API.OperationMethod<
  ListDevicesRequest,
  ListDevicesResponse,
  ListDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListDevicesRequest,
  output: ListDevicesResponse,
  errors: [
    ForbiddenException,
    InternalErrorException,
    InvalidParameterException,
    InvalidUserPoolConfigurationException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordResetRequiredException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotConfirmedException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDevices",
}));

export type ListGroupsError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Given a user pool ID, returns user pool groups and their details.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const listGroups: API.PaginatedOperationMethod<
  ListGroupsRequest,
  ListGroupsResponse,
  ListGroupsError,
  Credentials | HttpClient.HttpClient,
  GroupType
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListGroupsRequest,
  output: ListGroupsResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGroups",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Groups",
    pageSize: "Limit",
  } as const,
})) as any;

export type ListIdentityProvidersError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Given a user pool ID, returns information about configured identity providers (IdPs).
 * For more information about IdPs, see Third-party IdP sign-in.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const listIdentityProviders: API.PaginatedOperationMethod<
  ListIdentityProvidersRequest,
  ListIdentityProvidersResponse,
  ListIdentityProvidersError,
  Credentials | HttpClient.HttpClient,
  ProviderDescription
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListIdentityProvidersRequest,
  output: ListIdentityProvidersResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIdentityProviders",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Providers",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListResourceServersError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Given a user pool ID, returns all resource servers and their details. For more
 * information about resource servers, see Access control with resource servers.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const listResourceServers: API.PaginatedOperationMethod<
  ListResourceServersRequest,
  ListResourceServersResponse,
  ListResourceServersError,
  Credentials | HttpClient.HttpClient,
  ResourceServerType
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListResourceServersRequest,
  output: ListResourceServersResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResourceServers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ResourceServers",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Lists the tags that are assigned to an Amazon Cognito user pool. For more information, see
 * Tagging
 * resources.
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
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTermsError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns details about all terms documents for the requested user pool.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const listTerms: API.OperationMethod<
  ListTermsRequest,
  ListTermsResponse,
  ListTermsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTermsRequest,
  output: ListTermsResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTerms",
}));

export type ListUserImportJobsError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Given a user pool ID, returns user import jobs and their details. Import jobs are
 * retained in user pool configuration so that you can stage, stop, start, review, and
 * delete them. For more information about user import, see Importing users from a CSV file.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const listUserImportJobs: API.OperationMethod<
  ListUserImportJobsRequest,
  ListUserImportJobsResponse,
  ListUserImportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListUserImportJobsRequest,
  output: ListUserImportJobsResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUserImportJobs",
}));

export type ListUserPoolClientsError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Given a user pool ID, lists app clients. App clients are sets of rules for the access
 * that you want a user pool to grant to one application. For more information, see App clients.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const listUserPoolClients: API.PaginatedOperationMethod<
  ListUserPoolClientsRequest,
  ListUserPoolClientsResponse,
  ListUserPoolClientsError,
  Credentials | HttpClient.HttpClient,
  UserPoolClientDescription
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListUserPoolClientsRequest,
  output: ListUserPoolClientsResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUserPoolClients",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "UserPoolClients",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListUserPoolClientSecretsError =
  | InternalServerException
  | InvalidParameterException
  | LimitExceededException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Lists all client secrets associated with a user pool app client. Returns metadata about the secrets. The response does not include pagination tokens as there are only 2 secrets at any given time and we return both with every ListUserPoolClientSecrets call. For security reasons, the response never reveals the actual secret value in ClientSecretValue.
 */
export const listUserPoolClientSecrets: API.OperationMethod<
  ListUserPoolClientSecretsRequest,
  ListUserPoolClientSecretsResponse,
  ListUserPoolClientSecretsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListUserPoolClientSecretsRequest,
  output: ListUserPoolClientSecretsResponse,
  errors: [
    InternalServerException,
    InvalidParameterException,
    LimitExceededException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUserPoolClientSecrets",
}));

export type ListUserPoolReplicasError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Lists all replicas for a user pool, including both primary and secondary replicas. We
 * recommend using pagination to ensure that the operation returns quickly and
 * successfully.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const listUserPoolReplicas: API.OperationMethod<
  ListUserPoolReplicasRequest,
  ListUserPoolReplicasResponse,
  ListUserPoolReplicasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListUserPoolReplicasRequest,
  output: ListUserPoolReplicasResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUserPoolReplicas",
}));

export type ListUserPoolsError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Lists user pools and their details in the current Amazon Web Services account.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const listUserPools: API.PaginatedOperationMethod<
  ListUserPoolsRequest,
  ListUserPoolsResponse,
  ListUserPoolsError,
  Credentials | HttpClient.HttpClient,
  UserPoolDescriptionType
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListUserPoolsRequest,
  output: ListUserPoolsResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUserPools",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "UserPools",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListUsersError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Given a user pool ID, returns a list of users and their basic details in a user
 * pool.
 *
 * This operation is eventually consistent. You might experience a delay before results
 * are up-to-date. To validate the existence or configuration of an individual user, use
 * `AdminGetUser`.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const listUsers: API.PaginatedOperationMethod<
  ListUsersRequest,
  ListUsersResponse,
  ListUsersError,
  Credentials | HttpClient.HttpClient,
  UserType
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListUsersRequest,
  output: ListUsersResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUsers",
  pagination: {
    inputToken: "PaginationToken",
    outputToken: "PaginationToken",
    items: "Users",
    pageSize: "Limit",
  } as const,
})) as any;

export type ListUsersInGroupError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Given a user pool ID and a group name, returns a list of users in the group. For more
 * information about user pool groups, see Adding groups to a user pool.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const listUsersInGroup: API.PaginatedOperationMethod<
  ListUsersInGroupRequest,
  ListUsersInGroupResponse,
  ListUsersInGroupError,
  Credentials | HttpClient.HttpClient,
  UserType
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListUsersInGroupRequest,
  output: ListUsersInGroupResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUsersInGroup",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Users",
    pageSize: "Limit",
  } as const,
})) as any;

export type ListWebAuthnCredentialsError =
  | ForbiddenException
  | InternalErrorException
  | InvalidParameterException
  | LimitExceededException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordResetRequiredException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Generates a list of the currently signed-in user's registered passkey, or
 * WebAuthn, credentials.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */
export const listWebAuthnCredentials: API.OperationMethod<
  ListWebAuthnCredentialsRequest,
  ListWebAuthnCredentialsResponse,
  ListWebAuthnCredentialsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListWebAuthnCredentialsRequest,
  output: ListWebAuthnCredentialsResponse,
  errors: [
    ForbiddenException,
    InternalErrorException,
    InvalidParameterException,
    LimitExceededException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordResetRequiredException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWebAuthnCredentials",
}));

export type ResendConfirmationCodeError =
  | CodeDeliveryFailureException
  | ForbiddenException
  | InternalErrorException
  | InvalidEmailRoleAccessPolicyException
  | InvalidLambdaResponseException
  | InvalidParameterException
  | InvalidSmsRoleAccessPolicyException
  | InvalidSmsRoleTrustRelationshipException
  | LimitExceededException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UnexpectedLambdaException
  | UserLambdaValidationException
  | UserNotFoundException
  | CommonErrors;
/**
 * Resends the code that confirms a new account for a user who has signed up in your user
 * pool. Amazon Cognito sends confirmation codes to the user attribute in the
 * `AutoVerifiedAttributes` property of your user pool. When you prompt new
 * users for the confirmation code, include a "Resend code" option that generates a call to
 * this API operation.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 *
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 *
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 */
export const resendConfirmationCode: API.OperationMethod<
  ResendConfirmationCodeRequest,
  ResendConfirmationCodeResponse,
  ResendConfirmationCodeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ResendConfirmationCodeRequest,
  output: ResendConfirmationCodeResponse,
  errors: [
    CodeDeliveryFailureException,
    ForbiddenException,
    InternalErrorException,
    InvalidEmailRoleAccessPolicyException,
    InvalidLambdaResponseException,
    InvalidParameterException,
    InvalidSmsRoleAccessPolicyException,
    InvalidSmsRoleTrustRelationshipException,
    LimitExceededException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UnexpectedLambdaException,
    UserLambdaValidationException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ResendConfirmationCode",
}));

export type RespondToAuthChallengeError =
  | AliasExistsException
  | CodeMismatchException
  | ExpiredCodeException
  | ForbiddenException
  | InternalErrorException
  | InvalidEmailRoleAccessPolicyException
  | InvalidLambdaResponseException
  | InvalidParameterException
  | InvalidPasswordException
  | InvalidSmsRoleAccessPolicyException
  | InvalidSmsRoleTrustRelationshipException
  | InvalidUserPoolConfigurationException
  | MFAMethodNotFoundException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordHistoryPolicyViolationException
  | PasswordResetRequiredException
  | ResourceNotFoundException
  | SoftwareTokenMFANotFoundException
  | TooManyRequestsException
  | UnexpectedLambdaException
  | UserLambdaValidationException
  | UserNotConfirmedException
  | UserNotFoundException
  | CommonErrors;
/**
 * Some API operations in a user pool generate a challenge, like a prompt for an MFA
 * code, for device authentication that bypasses MFA, or for a custom authentication
 * challenge. A `RespondToAuthChallenge` API request provides the answer to that
 * challenge, like a code or a secure remote password (SRP). The parameters of a response
 * to an authentication challenge vary with the type of challenge.
 *
 * For more information about custom authentication challenges, see Custom
 * authentication challenge Lambda triggers.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 *
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 *
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 */
export const respondToAuthChallenge: API.OperationMethod<
  RespondToAuthChallengeRequest,
  RespondToAuthChallengeResponse,
  RespondToAuthChallengeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RespondToAuthChallengeRequest,
  output: RespondToAuthChallengeResponse,
  errors: [
    AliasExistsException,
    CodeMismatchException,
    ExpiredCodeException,
    ForbiddenException,
    InternalErrorException,
    InvalidEmailRoleAccessPolicyException,
    InvalidLambdaResponseException,
    InvalidParameterException,
    InvalidPasswordException,
    InvalidSmsRoleAccessPolicyException,
    InvalidSmsRoleTrustRelationshipException,
    InvalidUserPoolConfigurationException,
    MFAMethodNotFoundException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordHistoryPolicyViolationException,
    PasswordResetRequiredException,
    ResourceNotFoundException,
    SoftwareTokenMFANotFoundException,
    TooManyRequestsException,
    UnexpectedLambdaException,
    UserLambdaValidationException,
    UserNotConfirmedException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RespondToAuthChallenge",
}));

export type RevokeTokenError =
  | ForbiddenException
  | InternalErrorException
  | InvalidParameterException
  | OperationNotEnabledException
  | TooManyRequestsException
  | UnauthorizedException
  | UnsupportedOperationException
  | UnsupportedTokenTypeException
  | CommonErrors;
/**
 * Revokes all of the access tokens generated by, and at the same time as, the specified
 * refresh token. After a token is revoked, you can't use the revoked token to access Amazon Cognito
 * user APIs, or to authorize access to your resource server.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */
export const revokeToken: API.OperationMethod<
  RevokeTokenRequest,
  RevokeTokenResponse,
  RevokeTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RevokeTokenRequest,
  output: RevokeTokenResponse,
  errors: [
    ForbiddenException,
    InternalErrorException,
    InvalidParameterException,
    OperationNotEnabledException,
    TooManyRequestsException,
    UnauthorizedException,
    UnsupportedOperationException,
    UnsupportedTokenTypeException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RevokeToken",
}));

export type SetLogDeliveryConfigurationError =
  | FeatureUnavailableInTierException
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Sets up or modifies the logging configuration of a user pool. User pools can export
 * user notification logs and, when threat protection is active, user-activity logs. For
 * more information, see Exporting user
 * pool logs.
 */
export const setLogDeliveryConfiguration: API.OperationMethod<
  SetLogDeliveryConfigurationRequest,
  SetLogDeliveryConfigurationResponse,
  SetLogDeliveryConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetLogDeliveryConfigurationRequest,
  output: SetLogDeliveryConfigurationResponse,
  errors: [
    FeatureUnavailableInTierException,
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetLogDeliveryConfiguration",
}));

export type SetRiskConfigurationError =
  | CodeDeliveryFailureException
  | InternalErrorException
  | InvalidEmailRoleAccessPolicyException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserPoolAddOnNotEnabledException
  | CommonErrors;
/**
 * Configures threat protection for a user pool or app client. Sets configuration for the
 * following.
 *
 * - Responses to risks with adaptive authentication
 *
 * - Responses to vulnerable passwords with compromised-credentials
 * detection
 *
 * - Notifications to users who have had risky activity detected
 *
 * - IP-address denylist and allowlist
 *
 * To set the risk configuration for the user pool to defaults, send this request with
 * only the `UserPoolId` parameter. To reset the threat protection settings of
 * an app client to be inherited from the user pool, send `UserPoolId` and
 * `ClientId` parameters only. To change threat protection to audit-only or
 * off, update the value of `UserPoolAddOns` in an `UpdateUserPool`
 * request. To activate this setting, your user pool must be on the
 * Plus tier.
 *
 * In secondary regions for user pools with multi-region replication, only the
 * `SourceARN` and `From` attributes of
 * `NotifyConfiguration` can be modified to configure region-specific SES
 * integration. All other risk configuration settings must match the existing values to
 * maintain consistency across replicas.
 */
export const setRiskConfiguration: API.OperationMethod<
  SetRiskConfigurationRequest,
  SetRiskConfigurationResponse,
  SetRiskConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetRiskConfigurationRequest,
  output: SetRiskConfigurationResponse,
  errors: [
    CodeDeliveryFailureException,
    InternalErrorException,
    InvalidEmailRoleAccessPolicyException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserPoolAddOnNotEnabledException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetRiskConfiguration",
}));

export type SetUICustomizationError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Configures UI branding settings for domains with the hosted UI (classic) branding
 * version. Your user pool must have a domain. Configure a domain with .
 *
 * Set the default configuration for all clients with a `ClientId` of
 * `ALL`. When the `ClientId` value is an app client ID, the
 * settings you pass in this request apply to that app client and override the default
 * `ALL` configuration.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const setUICustomization: API.OperationMethod<
  SetUICustomizationRequest,
  SetUICustomizationResponse,
  SetUICustomizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetUICustomizationRequest,
  output: SetUICustomizationResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetUICustomization",
}));

export type SetUserMFAPreferenceError =
  | ForbiddenException
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordResetRequiredException
  | ResourceNotFoundException
  | UserNotConfirmedException
  | UserNotFoundException
  | CommonErrors;
/**
 * Set the user's multi-factor authentication (MFA) method preference, including which
 * MFA factors are activated and if any are preferred. Only one factor can be set as
 * preferred. The preferred MFA factor will be used to authenticate a user if multiple
 * factors are activated. If multiple options are activated and no preference is set, a
 * challenge to choose an MFA option will be returned during sign-in. If an MFA type is
 * activated for a user, the user will be prompted for MFA during all sign-in attempts
 * unless device tracking is turned on and the device has been trusted. If you want MFA to
 * be applied selectively based on the assessed risk level of sign-in attempts, deactivate
 * MFA for users and turn on Adaptive Authentication for the user pool.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */
export const setUserMFAPreference: API.OperationMethod<
  SetUserMFAPreferenceRequest,
  SetUserMFAPreferenceResponse,
  SetUserMFAPreferenceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetUserMFAPreferenceRequest,
  output: SetUserMFAPreferenceResponse,
  errors: [
    ForbiddenException,
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordResetRequiredException,
    ResourceNotFoundException,
    UserNotConfirmedException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetUserMFAPreference",
}));

export type SetUserPoolMfaConfigError =
  | ConcurrentModificationException
  | FeatureUnavailableInTierException
  | InternalErrorException
  | InvalidParameterException
  | InvalidSmsRoleAccessPolicyException
  | InvalidSmsRoleTrustRelationshipException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Sets user pool multi-factor authentication (MFA) and passkey configuration. For more
 * information about user pool MFA, see Adding MFA. For more information about WebAuthn passkeys see Authentication flows.
 *
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 *
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 */
export const setUserPoolMfaConfig: API.OperationMethod<
  SetUserPoolMfaConfigRequest,
  SetUserPoolMfaConfigResponse,
  SetUserPoolMfaConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetUserPoolMfaConfigRequest,
  output: SetUserPoolMfaConfigResponse,
  errors: [
    ConcurrentModificationException,
    FeatureUnavailableInTierException,
    InternalErrorException,
    InvalidParameterException,
    InvalidSmsRoleAccessPolicyException,
    InvalidSmsRoleTrustRelationshipException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetUserPoolMfaConfig",
}));

export type SetUserSettingsError =
  | ForbiddenException
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordResetRequiredException
  | ResourceNotFoundException
  | UserNotConfirmedException
  | UserNotFoundException
  | CommonErrors;
/**
 * *This action is no longer supported.* You can use it to configure
 * only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software
 * token or email MFA.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */
export const setUserSettings: API.OperationMethod<
  SetUserSettingsRequest,
  SetUserSettingsResponse,
  SetUserSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetUserSettingsRequest,
  output: SetUserSettingsResponse,
  errors: [
    ForbiddenException,
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordResetRequiredException,
    ResourceNotFoundException,
    UserNotConfirmedException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetUserSettings",
}));

export type SignUpError =
  | CodeDeliveryFailureException
  | ForbiddenException
  | InternalErrorException
  | InvalidEmailRoleAccessPolicyException
  | InvalidLambdaResponseException
  | InvalidParameterException
  | InvalidPasswordException
  | InvalidSmsRoleAccessPolicyException
  | InvalidSmsRoleTrustRelationshipException
  | LimitExceededException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UnexpectedLambdaException
  | UserLambdaValidationException
  | UsernameExistsException
  | CommonErrors;
/**
 * Registers a user with an app client and requests a user name, password, and user
 * attributes in the user pool.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 *
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 *
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 *
 * You might receive a `LimitExceeded` exception in response to this request
 * if you have exceeded a rate quota for email or SMS messages, and if your user pool
 * automatically verifies email addresses or phone numbers. When you get this exception in
 * the response, the user is successfully created and is in an `UNCONFIRMED`
 * state.
 */
export const signUp: API.OperationMethod<
  SignUpRequest,
  SignUpResponse,
  SignUpError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SignUpRequest,
  output: SignUpResponse,
  errors: [
    CodeDeliveryFailureException,
    ForbiddenException,
    InternalErrorException,
    InvalidEmailRoleAccessPolicyException,
    InvalidLambdaResponseException,
    InvalidParameterException,
    InvalidPasswordException,
    InvalidSmsRoleAccessPolicyException,
    InvalidSmsRoleTrustRelationshipException,
    LimitExceededException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UnexpectedLambdaException,
    UserLambdaValidationException,
    UsernameExistsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SignUp",
}));

export type StartUserImportJobError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PreconditionNotMetException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Instructs your user pool to start importing users from a CSV file that contains their
 * usernames and attributes. For more information about importing users from a CSV file,
 * see Importing users from a CSV file.
 */
export const startUserImportJob: API.OperationMethod<
  StartUserImportJobRequest,
  StartUserImportJobResponse,
  StartUserImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartUserImportJobRequest,
  output: StartUserImportJobResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PreconditionNotMetException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartUserImportJob",
}));

export type StartWebAuthnRegistrationError =
  | ForbiddenException
  | InternalErrorException
  | InvalidParameterException
  | LimitExceededException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordResetRequiredException
  | TooManyRequestsException
  | WebAuthnConfigurationMissingException
  | WebAuthnNotEnabledException
  | CommonErrors;
/**
 * Requests credential creation options from your user pool for the currently signed-in
 * user. Returns information about the user pool, the user profile, and authentication
 * requirements. Users must provide this information in their request to enroll your
 * application with their passkey provider.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 */
export const startWebAuthnRegistration: API.OperationMethod<
  StartWebAuthnRegistrationRequest,
  StartWebAuthnRegistrationResponse,
  StartWebAuthnRegistrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartWebAuthnRegistrationRequest,
  output: StartWebAuthnRegistrationResponse,
  errors: [
    ForbiddenException,
    InternalErrorException,
    InvalidParameterException,
    LimitExceededException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordResetRequiredException,
    TooManyRequestsException,
    WebAuthnConfigurationMissingException,
    WebAuthnNotEnabledException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartWebAuthnRegistration",
}));

export type StopUserImportJobError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PreconditionNotMetException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Instructs your user pool to stop a running job that's importing users from a CSV
 * file that contains their usernames and attributes. For more information about importing
 * users from a CSV file, see Importing users from a CSV file.
 */
export const stopUserImportJob: API.OperationMethod<
  StopUserImportJobRequest,
  StopUserImportJobResponse,
  StopUserImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopUserImportJobRequest,
  output: StopUserImportJobResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PreconditionNotMetException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopUserImportJob",
}));

export type TagResourceError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Assigns a set of tags to an Amazon Cognito user pool. A tag is a label that you can use to
 * categorize and manage user pools in different ways, such as by purpose, owner,
 * environment, or other criteria.
 *
 * Each tag consists of a key and value, both of which you define. A key is a general
 * category for more specific values. For example, if you have two versions of a user pool,
 * one for testing and another for production, you might assign an `Environment`
 * tag key to both user pools. The value of this key might be `Test` for one
 * user pool, and `Production` for the other.
 *
 * Tags are useful for cost tracking and access control. You can activate your tags so
 * that they appear on the Billing and Cost Management console, where you can track the
 * costs associated with your user pools. In an Identity and Access Management policy, you can constrain
 * permissions for user pools based on specific tags or tag values.
 *
 * You can use this action up to 5 times per second, per account. A user pool can have as
 * many as 50 tags.
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
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Given tag IDs that you previously assigned to a user pool, removes them.
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
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAuthEventFeedbackError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotFoundException
  | UserPoolAddOnNotEnabledException
  | CommonErrors;
/**
 * Provides the feedback for an authentication event generated by threat protection
 * features. The user's response indicates that you think that the event either was from a
 * valid user or was an unwanted authentication attempt. This feedback improves the risk
 * evaluation decision for the user pool as part of Amazon Cognito threat protection.
 * To activate this setting, your user pool must be on the
 * Plus tier.
 *
 * This operation requires a `FeedbackToken` that Amazon Cognito generates and adds to
 * notification emails when users have potentially suspicious authentication events. Users
 * invoke this operation when they select the link that corresponds to
 * `{one-click-link-valid}` or `{one-click-link-invalid}` in your
 * notification template. Because `FeedbackToken` is a required parameter, you
 * can't make requests to `UpdateAuthEventFeedback` without the contents of
 * the notification email message.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */
export const updateAuthEventFeedback: API.OperationMethod<
  UpdateAuthEventFeedbackRequest,
  UpdateAuthEventFeedbackResponse,
  UpdateAuthEventFeedbackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAuthEventFeedbackRequest,
  output: UpdateAuthEventFeedbackResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotFoundException,
    UserPoolAddOnNotEnabledException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAuthEventFeedback",
}));

export type UpdateDeviceStatusError =
  | ForbiddenException
  | InternalErrorException
  | InvalidParameterException
  | InvalidUserPoolConfigurationException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordResetRequiredException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotConfirmedException
  | UserNotFoundException
  | CommonErrors;
/**
 * Updates the status of a the currently signed-in user's device so that it is
 * marked as remembered or not remembered for the purpose of device authentication. Device
 * authentication is a "remember me" mechanism that silently completes sign-in from trusted
 * devices with a device key instead of a user-provided MFA code. This operation changes
 * the status of a device without deleting it, so you can enable it again later. For more
 * information about device authentication, see Working with devices.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */
export const updateDeviceStatus: API.OperationMethod<
  UpdateDeviceStatusRequest,
  UpdateDeviceStatusResponse,
  UpdateDeviceStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDeviceStatusRequest,
  output: UpdateDeviceStatusResponse,
  errors: [
    ForbiddenException,
    InternalErrorException,
    InvalidParameterException,
    InvalidUserPoolConfigurationException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordResetRequiredException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotConfirmedException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDeviceStatus",
}));

export type UpdateGroupError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Given the name of a user pool group, updates any of the properties for precedence,
 * IAM role, or description. For more information about user pool groups, see Adding groups to a user pool.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const updateGroup: API.OperationMethod<
  UpdateGroupRequest,
  UpdateGroupResponse,
  UpdateGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateGroupRequest,
  output: UpdateGroupResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateGroup",
}));

export type UpdateIdentityProviderError =
  | ConcurrentModificationException
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UnsupportedIdentityProviderException
  | CommonErrors;
/**
 * Modifies the configuration and trust relationship between a third-party identity
 * provider (IdP) and a user pool. Amazon Cognito accepts sign-in with third-party identity
 * providers through managed login and OIDC relying-party libraries. For more information,
 * see Third-party IdP sign-in.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const updateIdentityProvider: API.OperationMethod<
  UpdateIdentityProviderRequest,
  UpdateIdentityProviderResponse,
  UpdateIdentityProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateIdentityProviderRequest,
  output: UpdateIdentityProviderResponse,
  errors: [
    ConcurrentModificationException,
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UnsupportedIdentityProviderException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateIdentityProvider",
}));

export type UpdateManagedLoginBrandingError =
  | ConcurrentModificationException
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Configures the branding settings for a user pool style. This operation is the
 * programmatic option for the configuration of a style in the branding editor.
 *
 * Provides values for UI customization in a `Settings` JSON object and image
 * files in an `Assets` array.
 *
 * This operation has a 2-megabyte request-size limit and include the CSS settings and
 * image assets for your app client. Your branding settings might exceed 2MB in size. Amazon Cognito
 * doesn't require that you pass all parameters in one request and preserves existing
 * style settings that you don't specify. If your request is larger than 2MB, separate it
 * into multiple requests, each with a size smaller than the limit.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const updateManagedLoginBranding: API.OperationMethod<
  UpdateManagedLoginBrandingRequest,
  UpdateManagedLoginBrandingResponse,
  UpdateManagedLoginBrandingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateManagedLoginBrandingRequest,
  output: UpdateManagedLoginBrandingResponse,
  errors: [
    ConcurrentModificationException,
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateManagedLoginBranding",
}));

export type UpdateProvisionedLimitError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Sets the provisioned limit for a specific API category. The value must be between the
 * default limit and your account-level maximum limit in Service Quotas.
 *
 * Managed login user pools don't support adjustments to the
 * `UserAuthentication` or `UserFederation` categories. To
 * increase these limits, submit a Service Quotas increase request.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const updateProvisionedLimit: API.OperationMethod<
  UpdateProvisionedLimitRequest,
  UpdateProvisionedLimitResponse,
  UpdateProvisionedLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateProvisionedLimitRequest,
  output: UpdateProvisionedLimitResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateProvisionedLimit",
}));

export type UpdateResourceServerError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates the name and scopes of a resource server. All other fields are read-only. For
 * more information about resource servers, see Access control with resource servers.
 *
 * If you don't provide a value for an attribute, it is set to the default
 * value.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const updateResourceServer: API.OperationMethod<
  UpdateResourceServerRequest,
  UpdateResourceServerResponse,
  UpdateResourceServerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateResourceServerRequest,
  output: UpdateResourceServerResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateResourceServer",
}));

export type UpdateTermsError =
  | ConcurrentModificationException
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TermsExistsException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Modifies existing terms documents for the requested app client. When Terms and
 * conditions and Privacy policy documents are configured, the app client displays links to
 * them in the sign-up page of managed login for the app client.
 *
 * You can provide URLs for terms documents in the languages that are supported by managed login localization. Amazon Cognito directs users to the terms documents for
 * their current language, with fallback to `default` if no document exists for
 * the language.
 *
 * Each request accepts one type of terms document and a map of language-to-link for that
 * document type. You must provide both types of terms documents in at least one language
 * before Amazon Cognito displays your terms documents. Supply each type in separate
 * requests.
 *
 * For more information, see Terms documents.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const updateTerms: API.OperationMethod<
  UpdateTermsRequest,
  UpdateTermsResponse,
  UpdateTermsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateTermsRequest,
  output: UpdateTermsResponse,
  errors: [
    ConcurrentModificationException,
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TermsExistsException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTerms",
}));

export type UpdateUserAttributesError =
  | AliasExistsException
  | CodeDeliveryFailureException
  | CodeMismatchException
  | ExpiredCodeException
  | ForbiddenException
  | InternalErrorException
  | InvalidEmailRoleAccessPolicyException
  | InvalidLambdaResponseException
  | InvalidParameterException
  | InvalidSmsRoleAccessPolicyException
  | InvalidSmsRoleTrustRelationshipException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordResetRequiredException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UnexpectedLambdaException
  | UserLambdaValidationException
  | UserNotConfirmedException
  | UserNotFoundException
  | CommonErrors;
/**
 * Updates the currently signed-in user's attributes. To delete an attribute from
 * the user, submit the attribute in your API request with a blank value.
 *
 * For custom attributes, you must add a `custom:` prefix to the attribute
 * name, for example `custom:department`.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 *
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 *
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 */
export const updateUserAttributes: API.OperationMethod<
  UpdateUserAttributesRequest,
  UpdateUserAttributesResponse,
  UpdateUserAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateUserAttributesRequest,
  output: UpdateUserAttributesResponse,
  errors: [
    AliasExistsException,
    CodeDeliveryFailureException,
    CodeMismatchException,
    ExpiredCodeException,
    ForbiddenException,
    InternalErrorException,
    InvalidEmailRoleAccessPolicyException,
    InvalidLambdaResponseException,
    InvalidParameterException,
    InvalidSmsRoleAccessPolicyException,
    InvalidSmsRoleTrustRelationshipException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordResetRequiredException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UnexpectedLambdaException,
    UserLambdaValidationException,
    UserNotConfirmedException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateUserAttributes",
}));

export type UpdateUserPoolError =
  | ConcurrentModificationException
  | FeatureUnavailableInTierException
  | InternalErrorException
  | InvalidEmailRoleAccessPolicyException
  | InvalidParameterException
  | InvalidSmsRoleAccessPolicyException
  | InvalidSmsRoleTrustRelationshipException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TierChangeNotAllowedException
  | TooManyRequestsException
  | UserImportInProgressException
  | UserPoolTaggingException
  | CommonErrors;
/**
 * Updates the configuration of a user pool. To avoid setting parameters to Amazon Cognito
 * defaults, construct this API request to pass the existing configuration of your user
 * pool, modified to include the changes that you want to make.
 *
 * If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.
 *
 * In secondary regions for user pools with multi-region replication, regional
 * configurations for email, SMS, Lambda functions, and tags can be updated. Both global
 * and regional settings must be provided as inputs, with global settings required to match
 * existing values to maintain consistency across replicas.
 *
 * This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 * require you to register an origination phone number before you can send SMS messages
 * to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 * phone number with Amazon Pinpoint.
 * Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 * receive SMS messages might not be able to sign up, activate their accounts, or sign
 * in.
 *
 * If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service,
 * Amazon Simple Notification Service might place your account in the SMS sandbox. In
 * sandbox
 * mode
 * , you can send messages only to verified phone
 * numbers. After you test your app while in the sandbox environment, you can move out
 * of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito
 * Developer Guide.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const updateUserPool: API.OperationMethod<
  UpdateUserPoolRequest,
  UpdateUserPoolResponse,
  UpdateUserPoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateUserPoolRequest,
  output: UpdateUserPoolResponse,
  errors: [
    ConcurrentModificationException,
    FeatureUnavailableInTierException,
    InternalErrorException,
    InvalidEmailRoleAccessPolicyException,
    InvalidParameterException,
    InvalidSmsRoleAccessPolicyException,
    InvalidSmsRoleTrustRelationshipException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TierChangeNotAllowedException,
    TooManyRequestsException,
    UserImportInProgressException,
    UserPoolTaggingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateUserPool",
}));

export type UpdateUserPoolClientError =
  | ConcurrentModificationException
  | FeatureUnavailableInTierException
  | InternalErrorException
  | InvalidOAuthFlowException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | ScopeDoesNotExistException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Given a user pool app client ID, updates the configuration. To avoid setting
 * parameters to Amazon Cognito defaults, construct this API request to pass the existing
 * configuration of your app client, modified to include the changes that you want to
 * make.
 *
 * If you don't provide a value for an attribute, Amazon Cognito sets it to its default value.
 *
 * Unlike app clients created in the console, Amazon Cognito doesn't automatically assign a
 * branding style to app clients that you configure with this API operation. Managed login and classic hosted UI pages aren't
 * available for your client until after you apply a branding style.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const updateUserPoolClient: API.OperationMethod<
  UpdateUserPoolClientRequest,
  UpdateUserPoolClientResponse,
  UpdateUserPoolClientError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateUserPoolClientRequest,
  output: UpdateUserPoolClientResponse,
  errors: [
    ConcurrentModificationException,
    FeatureUnavailableInTierException,
    InternalErrorException,
    InvalidOAuthFlowException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    ScopeDoesNotExistException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateUserPoolClient",
}));

export type UpdateUserPoolDomainError =
  | ConcurrentModificationException
  | FeatureUnavailableInTierException
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * A user pool domain hosts managed login, an authorization server and web server for
 * authentication in your application. This operation updates the branding version for user
 * pool domains between `1` for hosted UI (classic) and `2` for
 * managed login. It also updates the SSL certificate for user pool custom domains.
 *
 * Changes to the domain branding version take up to one minute to take effect for a
 * prefix domain and up to five minutes for a custom domain.
 *
 * This operation doesn't change the name of your user pool domain. To change your
 * domain, delete it with `DeleteUserPoolDomain` and create a new domain with
 * `CreateUserPoolDomain`.
 *
 * You can pass the ARN of a new Certificate Manager certificate in this request. Typically, ACM
 * certificates automatically renew and you user pool can continue to use the same ARN. But
 * if you generate a new certificate for your custom domain name, replace the original
 * configuration with the new ARN in this request.
 *
 * ACM certificates for custom domains must be in the US East (N. Virginia)
 * Amazon Web Services Region. After you submit your request, Amazon Cognito requires up to 1 hour to distribute
 * your new certificate to your custom domain.
 *
 * For more information about adding a custom domain to your user pool, see Configuring a user pool domain.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const updateUserPoolDomain: API.OperationMethod<
  UpdateUserPoolDomainRequest,
  UpdateUserPoolDomainResponse,
  UpdateUserPoolDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateUserPoolDomainRequest,
  output: UpdateUserPoolDomainResponse,
  errors: [
    ConcurrentModificationException,
    FeatureUnavailableInTierException,
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateUserPoolDomain",
}));

export type UpdateUserPoolReplicaError =
  | InternalErrorException
  | InvalidParameterException
  | NotAuthorizedException
  | OperationNotEnabledException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Updates replica-specific settings for a user pool replica. You can modify the status
 * to activate or deactivate the replica. This request can be made in both primary and secondary
 * regions of the user pool.
 *
 * Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you must use IAM credentials to authorize requests, and you must
 * grant yourself the corresponding IAM permission in a policy.
 *
 * **Learn more**
 *
 * - Signing Amazon Web Services API Requests
 *
 * - Using the Amazon Cognito user pools API and user pool endpoints
 */
export const updateUserPoolReplica: API.OperationMethod<
  UpdateUserPoolReplicaRequest,
  UpdateUserPoolReplicaResponse,
  UpdateUserPoolReplicaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateUserPoolReplicaRequest,
  output: UpdateUserPoolReplicaResponse,
  errors: [
    InternalErrorException,
    InvalidParameterException,
    NotAuthorizedException,
    OperationNotEnabledException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateUserPoolReplica",
}));

export type VerifySoftwareTokenError =
  | CodeMismatchException
  | EnableSoftwareTokenMFAException
  | ForbiddenException
  | InternalErrorException
  | InvalidParameterException
  | InvalidUserPoolConfigurationException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordResetRequiredException
  | ResourceNotFoundException
  | SoftwareTokenMFANotFoundException
  | TooManyRequestsException
  | UserNotConfirmedException
  | UserNotFoundException
  | CommonErrors;
/**
 * Registers the current user's time-based one-time password (TOTP) authenticator
 * with a code generated in their authenticator app from a private key that's supplied
 * by your user pool. Marks the user's software token MFA status as "verified" if
 * successful. The request takes an access token or a session string, but not both.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */
export const verifySoftwareToken: API.OperationMethod<
  VerifySoftwareTokenRequest,
  VerifySoftwareTokenResponse,
  VerifySoftwareTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: VerifySoftwareTokenRequest,
  output: VerifySoftwareTokenResponse,
  errors: [
    CodeMismatchException,
    EnableSoftwareTokenMFAException,
    ForbiddenException,
    InternalErrorException,
    InvalidParameterException,
    InvalidUserPoolConfigurationException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordResetRequiredException,
    ResourceNotFoundException,
    SoftwareTokenMFANotFoundException,
    TooManyRequestsException,
    UserNotConfirmedException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "VerifySoftwareToken",
}));

export type VerifyUserAttributeError =
  | AliasExistsException
  | CodeMismatchException
  | ExpiredCodeException
  | ForbiddenException
  | InternalErrorException
  | InvalidParameterException
  | LimitExceededException
  | NotAuthorizedException
  | OperationNotEnabledException
  | PasswordResetRequiredException
  | ResourceNotFoundException
  | TooManyRequestsException
  | UserNotConfirmedException
  | UserNotFoundException
  | CommonErrors;
/**
 * Submits a verification code for a signed-in user who has added or changed a value of
 * an auto-verified attribute. When successful, the user's attribute becomes verified
 * and the attribute `email_verified` or `phone_number_verified`
 * becomes `true`.
 *
 * If your user pool requires verification before Amazon Cognito updates the attribute value,
 * this operation updates the affected attribute to its pending value.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 *
 * Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 * this operation, you can't use IAM credentials to authorize requests, and you can't
 * grant IAM permissions in policies. For more information about authorization models in
 * Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.
 */
export const verifyUserAttribute: API.OperationMethod<
  VerifyUserAttributeRequest,
  VerifyUserAttributeResponse,
  VerifyUserAttributeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: VerifyUserAttributeRequest,
  output: VerifyUserAttributeResponse,
  errors: [
    AliasExistsException,
    CodeMismatchException,
    ExpiredCodeException,
    ForbiddenException,
    InternalErrorException,
    InvalidParameterException,
    LimitExceededException,
    NotAuthorizedException,
    OperationNotEnabledException,
    PasswordResetRequiredException,
    ResourceNotFoundException,
    TooManyRequestsException,
    UserNotConfirmedException,
    UserNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "VerifyUserAttribute",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ MinValue: S.optional(S.String), MaxValue: S.optional(S.String) }),
      ).annotate({
        identifier: "NumberAttributeConstraintsType",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ MinLength: S.optional(S.String), MaxLength: S.optional(S.String) }),
      ).annotate({
        identifier: "StringAttributeConstraintsType",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          AttributeDataType: S.optional(AttributeDataType),
          DeveloperOnlyAttribute: S.optional(S.Boolean),
          Mutable: S.optional(S.Boolean),
          Required: S.optional(S.Boolean),
          NumberAttributeConstraints: S.optional(NumberAttributeConstraintsType),
          StringAttributeConstraints: S.optional(StringAttributeConstraintsType),
        }),
      ).annotate({ identifier: "SchemaAttributeType" });
    case 3:
      return S.Array(SchemaAttributeType);
    case 4:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, CustomAttributes: CustomAttributesListType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AddCustomAttributesRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AddCustomAttributesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          ClientId: SensitiveString,
          ClientSecret: S.optional(SensitiveString),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AddUserPoolClientSecretRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ClientSecretId: S.optional(S.String),
          ClientSecretValue: S.optional(SensitiveString),
          ClientSecretCreateDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "ClientSecretDescriptorType",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ClientSecretDescriptor: S.optional(ClientSecretDescriptorType) }).pipe(ns),
      ).annotate({
        identifier: "AddUserPoolClientSecretResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, Username: SensitiveString, GroupName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AdminAddUserToGroupRequest",
      });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          Username: SensitiveString,
          ClientMetadata: S.optional(ClientMetadataType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AdminConfirmSignUpRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Value: S.optional(SensitiveString) }),
      ).annotate({ identifier: "AttributeType" });
    case 5:
      return S.Array(AttributeType);
    case 6:
      return S.Array(DeliveryMediumType);
    case 7:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          Username: SensitiveString,
          UserAttributes: S.optional(AttributeListType),
          ValidationData: S.optional(AttributeListType),
          TemporaryPassword: S.optional(SensitiveString),
          ForceAliasCreation: S.optional(S.Boolean),
          MessageAction: S.optional(MessageActionType),
          DesiredDeliveryMediums: S.optional(DeliveryMediumListType),
          ClientMetadata: S.optional(ClientMetadataType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "AdminCreateUserRequest" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DeliveryMedium: S.optional(DeliveryMediumType),
          AttributeName: S.optional(S.String),
        }),
      ).annotate({ identifier: "MFAOptionType" });
    case 1:
      return S.Array(MFAOptionType);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Username: S.optional(SensitiveString),
          Attributes: S.optional(AttributeListType),
          UserCreateDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UserLastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Enabled: S.optional(S.Boolean),
          UserStatus: S.optional(UserStatusType),
          MFAOptions: S.optional(MFAOptionListType),
        }),
      ).annotate({ identifier: "UserType" });
    case 3:
      return S.suspend(() => S.Struct({ User: S.optional(UserType) }).pipe(ns)).annotate({
        identifier: "AdminCreateUserResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, Username: SensitiveString }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AdminDeleteSoftwareTokenRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, Username: SensitiveString }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AdminDeleteUserRequest" });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AdminDeleteUserResponse",
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
          UserPoolId: S.String,
          Username: SensitiveString,
          UserAttributeNames: AttributeNameListType,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AdminDeleteUserAttributesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ProviderName: S.optional(S.String),
          ProviderAttributeName: S.optional(S.String),
          ProviderAttributeValue: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ProviderUserIdentifierType",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, User: ProviderUserIdentifierType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AdminDisableProviderForUserRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, Username: SensitiveString }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AdminDisableUserRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, Username: SensitiveString }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AdminEnableUserRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, Username: SensitiveString, DeviceKey: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AdminForgetDeviceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ DeviceKey: S.String, UserPoolId: S.String, Username: SensitiveString }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AdminGetDeviceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DeviceKey: S.optional(S.String),
          DeviceAttributes: S.optional(AttributeListType),
          DeviceCreateDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DeviceLastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DeviceLastAuthenticatedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DeviceType" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Device: DeviceType }).pipe(ns)).annotate({
        identifier: "AdminGetDeviceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, Username: SensitiveString }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AdminGetUserRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Username: SensitiveString,
          UserAttributes: S.optional(AttributeListType),
          UserCreateDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UserLastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Enabled: S.optional(S.Boolean),
          UserStatus: S.optional(UserStatusType),
          MFAOptions: S.optional(MFAOptionListType),
          PreferredMfaSetting: S.optional(S.String),
          UserMFASettingList: S.optional(UserMFASettingListType),
        }).pipe(ns),
      ).annotate({ identifier: "AdminGetUserResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, Username: SensitiveString }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AdminGetUserAuthFactorsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Username: SensitiveString,
          PreferredMfaSetting: S.optional(S.String),
          UserMFASettingList: S.optional(UserMFASettingListType),
          ConfiguredUserAuthFactors: S.optional(ConfiguredUserAuthFactorsListType),
        }).pipe(ns),
      ).annotate({
        identifier: "AdminGetUserAuthFactorsResponse",
      });
    case 5:
      return S.suspend(() => S.Struct({ AnalyticsEndpointId: S.optional(S.String) })).annotate({
        identifier: "AnalyticsMetadataType",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ headerName: S.optional(S.String), headerValue: S.optional(S.String) }),
      ).annotate({ identifier: "HttpHeader" });
    case 7:
      return S.Array(HttpHeader);
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          IpAddress: S.String,
          ServerName: S.String,
          ServerPath: S.String,
          HttpHeaders: HttpHeaderList,
          EncodedData: S.optional(S.String),
        }),
      ).annotate({ identifier: "ContextDataType" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          ClientId: SensitiveString,
          AuthFlow: AuthFlowType,
          AuthParameters: S.optional(AuthParametersType),
          ClientMetadata: S.optional(ClientMetadataType),
          AnalyticsMetadata: S.optional(AnalyticsMetadataType),
          ContextData: S.optional(ContextDataType),
          Session: S.optional(SensitiveString),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "AdminInitiateAuthRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ DeviceKey: S.optional(S.String), DeviceGroupKey: S.optional(S.String) }),
      ).annotate({ identifier: "NewDeviceMetadataType" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccessToken: S.optional(SensitiveString),
          ExpiresIn: S.optional(S.Number),
          TokenType: S.optional(S.String),
          RefreshToken: S.optional(SensitiveString),
          IdToken: S.optional(SensitiveString),
          NewDeviceMetadata: S.optional(NewDeviceMetadataType),
        }),
      ).annotate({ identifier: "AuthenticationResultType" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ChallengeName: S.optional(ChallengeNameType),
          Session: S.optional(SensitiveString),
          ChallengeParameters: S.optional(ChallengeParametersType),
          AuthenticationResult: S.optional(AuthenticationResultType),
          AvailableChallenges: S.optional(AvailableChallengeListType),
        }).pipe(ns),
      ).annotate({
        identifier: "AdminInitiateAuthResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          DestinationUser: ProviderUserIdentifierType,
          SourceUser: ProviderUserIdentifierType,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AdminLinkProviderForUserRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          Username: SensitiveString,
          Limit: S.optional(S.Number),
          PaginationToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "AdminListDevicesRequest" });
    case 7:
      return S.Array(DeviceType);
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Devices: S.optional(DeviceListType),
          PaginationToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "AdminListDevicesResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Username: SensitiveString,
          UserPoolId: S.String,
          Limit: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AdminListGroupsForUserRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          GroupName: S.optional(S.String),
          UserPoolId: S.optional(S.String),
          Description: S.optional(S.String),
          RoleArn: S.optional(S.String),
          Precedence: S.optional(S.Number),
          LastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CreationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "GroupType" });
    case 3:
      return S.Array(GroupType);
    case 4:
      return S.suspend(() =>
        S.Struct({ Groups: S.optional(GroupListType), NextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "AdminListGroupsForUserResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          Username: SensitiveString,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AdminListUserAuthEventsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RiskDecision: S.optional(RiskDecisionType),
          RiskLevel: S.optional(RiskLevelType),
          CompromisedCredentialsDetected: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "EventRiskType" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ChallengeName: S.optional(ChallengeName),
          ChallengeResponse: S.optional(ChallengeResponse),
        }),
      ).annotate({ identifier: "ChallengeResponseType" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ChallengeResponseType);
    case 1:
      return S.suspend(() =>
        S.Struct({
          IpAddress: S.optional(S.String),
          DeviceName: S.optional(S.String),
          Timezone: S.optional(S.String),
          City: S.optional(S.String),
          Country: S.optional(S.String),
        }),
      ).annotate({ identifier: "EventContextDataType" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          FeedbackValue: FeedbackValueType,
          Provider: S.String,
          FeedbackDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "EventFeedbackType" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          EventId: S.optional(S.String),
          EventType: S.optional(EventType),
          CreationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EventResponse: S.optional(EventResponseType),
          EventRisk: S.optional(EventRiskType),
          ChallengeResponses: S.optional(ChallengeResponseListType),
          EventContextData: S.optional(EventContextDataType),
          EventFeedback: S.optional(EventFeedbackType),
        }),
      ).annotate({ identifier: "AuthEventType" });
    case 4:
      return S.Array(AuthEventType);
    case 5:
      return S.suspend(() =>
        S.Struct({ AuthEvents: S.optional(AuthEventsType), NextToken: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({
        identifier: "AdminListUserAuthEventsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, Username: SensitiveString, GroupName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AdminRemoveUserFromGroupRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          Username: SensitiveString,
          ClientMetadata: S.optional(ClientMetadataType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AdminResetUserPasswordRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          ClientId: SensitiveString,
          ChallengeName: ChallengeNameType,
          ChallengeResponses: S.optional(ChallengeResponsesType),
          Session: S.optional(SensitiveString),
          AnalyticsMetadata: S.optional(AnalyticsMetadataType),
          ContextData: S.optional(ContextDataType),
          ClientMetadata: S.optional(ClientMetadataType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AdminRespondToAuthChallengeRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Enabled: S.optional(S.Boolean), PreferredMfa: S.optional(S.Boolean) }),
      ).annotate({ identifier: "SMSMfaSettingsType" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Enabled: S.optional(S.Boolean), PreferredMfa: S.optional(S.Boolean) }),
      ).annotate({
        identifier: "SoftwareTokenMfaSettingsType",
      });
    case 3:
      return S.suspend(() => S.Struct({ Enabled: S.optional(S.Boolean) })).annotate({
        identifier: "WebAuthnMfaSettingsType",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SMSMfaSettings: S.optional(SMSMfaSettingsType),
          SoftwareTokenMfaSettings: S.optional(SoftwareTokenMfaSettingsType),
          EmailMfaSettings: S.optional(EmailMfaSettingsType),
          WebAuthnMfaSettings: S.optional(WebAuthnMfaSettingsType),
          Username: SensitiveString,
          UserPoolId: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AdminSetUserMFAPreferenceRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          Username: SensitiveString,
          Password: SensitiveString,
          Permanent: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AdminSetUserPasswordRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          Username: SensitiveString,
          MFAOptions: MFAOptionListType,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AdminSetUserSettingsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          Username: SensitiveString,
          EventId: S.String,
          FeedbackValue: FeedbackValueType,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AdminUpdateAuthEventFeedbackRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          Username: SensitiveString,
          DeviceKey: S.String,
          DeviceRememberedStatus: S.optional(DeviceRememberedStatusType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AdminUpdateDeviceStatusRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          Username: SensitiveString,
          UserAttributes: AttributeListType,
          ClientMetadata: S.optional(ClientMetadataType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AdminUpdateUserAttributesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, Username: SensitiveString }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AdminUserGlobalSignOutRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccessToken: S.optional(SensitiveString),
          Session: S.optional(SensitiveString),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AssociateSoftwareTokenRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SecretCode: S.optional(SensitiveString),
          Session: S.optional(SensitiveString),
        }).pipe(ns),
      ).annotate({
        identifier: "AssociateSoftwareTokenResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PreviousPassword: S.optional(SensitiveString),
          ProposedPassword: SensitiveString,
          AccessToken: SensitiveString,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ChangePasswordRequest" });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "ChangePasswordResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ AccessToken: SensitiveString, Credential: S.Any }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CompleteWebAuthnRegistrationRequest",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ PasswordVerifier: S.optional(S.String), Salt: S.optional(S.String) }),
      ).annotate({
        identifier: "DeviceSecretVerifierConfigType",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccessToken: SensitiveString,
          DeviceKey: S.String,
          DeviceSecretVerifierConfig: S.optional(DeviceSecretVerifierConfigType),
          DeviceName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ConfirmDeviceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ UserConfirmationNecessary: S.optional(S.Boolean) }).pipe(ns),
      ).annotate({ identifier: "ConfirmDeviceResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ IpAddress: S.optional(S.String), EncodedData: S.optional(S.String) }),
      ).annotate({ identifier: "UserContextDataType" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ClientId: SensitiveString,
          SecretHash: S.optional(SensitiveString),
          Username: SensitiveString,
          ConfirmationCode: S.String,
          Password: SensitiveString,
          AnalyticsMetadata: S.optional(AnalyticsMetadataType),
          UserContextData: S.optional(UserContextDataType),
          ClientMetadata: S.optional(ClientMetadataType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ConfirmForgotPasswordRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ClientId: SensitiveString,
          SecretHash: S.optional(SensitiveString),
          Username: SensitiveString,
          ConfirmationCode: S.String,
          ForceAliasCreation: S.optional(S.Boolean),
          AnalyticsMetadata: S.optional(AnalyticsMetadataType),
          UserContextData: S.optional(UserContextDataType),
          ClientMetadata: S.optional(ClientMetadataType),
          Session: S.optional(SensitiveString),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ConfirmSignUpRequest" });
    case 6:
      return S.suspend(() => S.Struct({ Session: S.optional(SensitiveString) }).pipe(ns)).annotate({
        identifier: "ConfirmSignUpResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          GroupName: S.String,
          UserPoolId: S.String,
          Description: S.optional(S.String),
          RoleArn: S.optional(S.String),
          Precedence: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateGroupRequest" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Group: S.optional(GroupType) }).pipe(ns)).annotate({
        identifier: "CreateGroupResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          ProviderName: S.String,
          ProviderType: IdentityProviderTypeType,
          ProviderDetails: ProviderDetailsType,
          AttributeMapping: S.optional(AttributeMappingType),
          IdpIdentifiers: S.optional(IdpIdentifiersListType),
          AcrMapping: S.optional(AcrMappingType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateIdentityProviderRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.optional(S.String),
          ProviderName: S.optional(S.String),
          ProviderType: S.optional(IdentityProviderTypeType),
          ProviderDetails: S.optional(ProviderDetailsType),
          AttributeMapping: S.optional(AttributeMappingType),
          IdpIdentifiers: S.optional(IdpIdentifiersListType),
          AcrMapping: S.optional(AcrMappingType),
          LastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CreationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "IdentityProviderType" });
    case 3:
      return S.suspend(() =>
        S.Struct({ IdentityProvider: IdentityProviderType }).pipe(ns),
      ).annotate({
        identifier: "CreateIdentityProviderResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Category: AssetCategoryType,
          ColorMode: ColorSchemeModeType,
          Extension: AssetExtensionType,
          Bytes: S.optional(T.Blob),
          ResourceId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AssetType" });
    case 5:
      return S.Array(AssetType);
    case 6:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          ClientId: SensitiveString,
          UseCognitoProvidedValues: S.optional(S.Boolean),
          Settings: S.optional(S.Any),
          Assets: S.optional(AssetListType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateManagedLoginBrandingRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ManagedLoginBrandingId: S.optional(S.String),
          UserPoolId: S.optional(S.String),
          UseCognitoProvidedValues: S.optional(S.Boolean),
          Settings: S.optional(S.Any),
          Assets: S.optional(AssetListType),
          CreationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ManagedLoginBrandingType" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ManagedLoginBranding: S.optional(ManagedLoginBrandingType) }).pipe(ns),
      ).annotate({
        identifier: "CreateManagedLoginBrandingResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ScopeName: S.String, ScopeDescription: S.String }),
      ).annotate({ identifier: "ResourceServerScopeType" });
    case 2:
      return S.Array(ResourceServerScopeType);
    case 3:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          Identifier: S.String,
          Name: S.String,
          Scopes: S.optional(ResourceServerScopeListType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateResourceServerRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.optional(S.String),
          Identifier: S.optional(S.String),
          Name: S.optional(S.String),
          Scopes: S.optional(ResourceServerScopeListType),
        }),
      ).annotate({ identifier: "ResourceServerType" });
    case 5:
      return S.suspend(() => S.Struct({ ResourceServer: ResourceServerType }).pipe(ns)).annotate({
        identifier: "CreateResourceServerResponse",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          ClientId: SensitiveString,
          TermsName: S.String,
          TermsSource: TermsSourceType,
          Enforcement: TermsEnforcementType,
          Links: S.optional(LinksType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateTermsRequest" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TermsId: S.String,
          UserPoolId: S.String,
          ClientId: SensitiveString,
          TermsName: S.String,
          TermsSource: TermsSourceType,
          Enforcement: TermsEnforcementType,
          Links: LinksType,
          CreationDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          LastModifiedDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "TermsType" });
    case 1:
      return S.suspend(() => S.Struct({ Terms: S.optional(TermsType) }).pipe(ns)).annotate({
        identifier: "CreateTermsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          JobName: S.String,
          UserPoolId: S.String,
          CloudWatchLogsRoleArn: S.String,
          PasswordHashingAlgorithm: S.optional(PasswordHashingAlgorithmType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateUserImportJobRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          JobName: S.optional(S.String),
          JobId: S.optional(S.String),
          UserPoolId: S.optional(S.String),
          PreSignedUrl: S.optional(S.String),
          CreationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          StartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CompletionDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Status: S.optional(UserImportJobStatusType),
          CloudWatchLogsRoleArn: S.optional(S.String),
          ImportedUsers: S.optional(S.Number),
          SkippedUsers: S.optional(S.Number),
          FailedUsers: S.optional(S.Number),
          CompletionMessage: S.optional(S.String),
          PasswordHashingAlgorithm: S.optional(PasswordHashingAlgorithmType),
        }),
      ).annotate({ identifier: "UserImportJobType" });
    case 4:
      return S.suspend(() =>
        S.Struct({ UserImportJob: S.optional(UserImportJobType) }).pipe(ns),
      ).annotate({
        identifier: "CreateUserImportJobResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          MinimumLength: S.optional(S.Number),
          RequireUppercase: S.optional(S.Boolean),
          RequireLowercase: S.optional(S.Boolean),
          RequireNumbers: S.optional(S.Boolean),
          RequireSymbols: S.optional(S.Boolean),
          PasswordHistorySize: S.optional(S.Number),
          TemporaryPasswordValidityDays: S.optional(S.Number),
        }),
      ).annotate({ identifier: "PasswordPolicyType" });
    case 6:
      return S.suspend(() =>
        S.Struct({ AllowedFirstAuthFactors: S.optional(AllowedFirstAuthFactorsListType) }),
      ).annotate({ identifier: "SignInPolicyType" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          PasswordPolicy: S.optional(PasswordPolicyType),
          SignInPolicy: S.optional(SignInPolicyType),
        }),
      ).annotate({ identifier: "UserPoolPolicyType" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ LambdaVersion: PreTokenGenerationLambdaVersionType, LambdaArn: S.String }),
      ).annotate({
        identifier: "PreTokenGenerationVersionConfigType",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          PreSignUp: S.optional(S.String),
          CustomMessage: S.optional(S.String),
          PostConfirmation: S.optional(S.String),
          PreAuthentication: S.optional(S.String),
          PostAuthentication: S.optional(S.String),
          DefineAuthChallenge: S.optional(S.String),
          CreateAuthChallenge: S.optional(S.String),
          VerifyAuthChallengeResponse: S.optional(S.String),
          PreTokenGeneration: S.optional(S.String),
          UserMigration: S.optional(S.String),
          PreTokenGenerationConfig: S.optional(PreTokenGenerationVersionConfigType),
          CustomSMSSender: S.optional(CustomSMSLambdaVersionConfigType),
          CustomEmailSender: S.optional(CustomEmailLambdaVersionConfigType),
          KMSKeyID: S.optional(S.String),
          InboundFederation: S.optional(InboundFederationLambdaType),
        }),
      ).annotate({ identifier: "LambdaConfigType" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SmsMessage: S.optional(S.String),
          EmailMessage: S.optional(S.String),
          EmailSubject: S.optional(S.String),
          EmailMessageByLink: S.optional(S.String),
          EmailSubjectByLink: S.optional(S.String),
          DefaultEmailOption: S.optional(DefaultEmailOptionType),
        }),
      ).annotate({
        identifier: "VerificationMessageTemplateType",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AttributesRequireVerificationBeforeUpdate: S.optional(
            AttributesRequireVerificationBeforeUpdateType,
          ),
        }),
      ).annotate({
        identifier: "UserAttributeUpdateSettingsType",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ChallengeRequiredOnNewDevice: S.optional(S.Boolean),
          DeviceOnlyRememberedOnUserPrompt: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "DeviceConfigurationType" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SourceArn: S.optional(S.String),
          ReplyToEmailAddress: S.optional(S.String),
          EmailSendingAccount: S.optional(EmailSendingAccountType),
          From: S.optional(S.String),
          ConfigurationSet: S.optional(S.String),
        }),
      ).annotate({ identifier: "EmailConfigurationType" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          CallerArn: S.String,
          ExternalId: S.optional(S.String),
          OriginationIdentity: S.optional(S.String),
          ConfigurationSetName: S.optional(S.String),
          InEntityId: S.optional(S.String),
          InTemplateId: S.optional(S.String),
          Region: S.optional(S.String),
        }),
      ).annotate({ identifier: "EumsSmsConfigurationType" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          SnsCallerArn: S.optional(S.String),
          ExternalId: S.optional(S.String),
          SnsRegion: S.optional(S.String),
          EumsSms: S.optional(EumsSmsConfigurationType),
        }),
      ).annotate({ identifier: "SmsConfigurationType" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SMSMessage: S.optional(S.String),
          EmailMessage: S.optional(S.String),
          EmailSubject: S.optional(S.String),
        }),
      ).annotate({ identifier: "MessageTemplateType" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AllowAdminCreateUserOnly: S.optional(S.Boolean),
          UnusedAccountValidityDays: S.optional(S.Number),
          InviteMessageTemplate: S.optional(MessageTemplateType),
        }),
      ).annotate({
        identifier: "AdminCreateUserConfigType",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ CustomAuthMode: S.optional(AdvancedSecurityEnabledModeType) }),
      ).annotate({
        identifier: "AdvancedSecurityAdditionalFlowsType",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AdvancedSecurityMode: AdvancedSecurityModeType,
          AdvancedSecurityAdditionalFlows: S.optional(AdvancedSecurityAdditionalFlowsType),
        }),
      ).annotate({ identifier: "UserPoolAddOnsType" });
    case 4:
      return S.suspend(() => S.Struct({ CaseSensitive: S.Boolean })).annotate({
        identifier: "UsernameConfigurationType",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Priority: S.Number, Name: RecoveryOptionNameType }),
      ).annotate({ identifier: "RecoveryOptionType" });
    case 6:
      return S.Array(RecoveryOptionType);
    case 7:
      return S.suspend(() =>
        S.Struct({ RecoveryMechanisms: S.optional(RecoveryMechanismsType) }),
      ).annotate({
        identifier: "AccountRecoverySettingType",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ KeyType: S.optional(EncryptionKeyType), KmsKeyArn: S.optional(S.String) }),
      ).annotate({ identifier: "KeyConfigurationType" });
    case 1:
      return S.suspend(() => S.Struct({ Type: S.optional(IssuerType) })).annotate({
        identifier: "IssuerConfigurationType",
      });
    case 2:
      return S.suspend(() => S.Struct({ AcrValue: S.String })).annotate({
        identifier: "AcrLevelConfigType",
      });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ AcrLevelConfigType.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          PoolName: S.String,
          Policies: S.optional(UserPoolPolicyType),
          DeletionProtection: S.optional(DeletionProtectionType),
          LambdaConfig: S.optional(LambdaConfigType),
          AutoVerifiedAttributes: S.optional(VerifiedAttributesListType),
          AliasAttributes: S.optional(AliasAttributesListType),
          UsernameAttributes: S.optional(UsernameAttributesListType),
          SmsVerificationMessage: S.optional(S.String),
          EmailVerificationMessage: S.optional(S.String),
          EmailVerificationSubject: S.optional(S.String),
          VerificationMessageTemplate: S.optional(VerificationMessageTemplateType),
          SmsAuthenticationMessage: S.optional(S.String),
          MfaConfiguration: S.optional(UserPoolMfaType),
          UserAttributeUpdateSettings: S.optional(UserAttributeUpdateSettingsType),
          DeviceConfiguration: S.optional(DeviceConfigurationType),
          EmailConfiguration: S.optional(EmailConfigurationType),
          SmsConfiguration: S.optional(SmsConfigurationType),
          UserPoolTags: S.optional(UserPoolTagsType),
          AdminCreateUserConfig: S.optional(AdminCreateUserConfigType),
          Schema: S.optional(SchemaAttributesListType),
          UserPoolAddOns: S.optional(UserPoolAddOnsType),
          UsernameConfiguration: S.optional(UsernameConfigurationType),
          AccountRecoverySetting: S.optional(AccountRecoverySettingType),
          UserPoolTier: S.optional(UserPoolTierType),
          KeyConfiguration: S.optional(KeyConfigurationType),
          IssuerConfiguration: S.optional(IssuerConfigurationType),
          AcrConfiguration: S.optional(AcrConfigurationType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateUserPoolRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Policies: S.optional(UserPoolPolicyType),
          DeletionProtection: S.optional(DeletionProtectionType),
          LambdaConfig: S.optional(LambdaConfigType),
          Status: S.optional(StatusType),
          LastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CreationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          SchemaAttributes: S.optional(SchemaAttributesListType),
          AutoVerifiedAttributes: S.optional(VerifiedAttributesListType),
          AliasAttributes: S.optional(AliasAttributesListType),
          UsernameAttributes: S.optional(UsernameAttributesListType),
          SmsVerificationMessage: S.optional(S.String),
          EmailVerificationMessage: S.optional(S.String),
          EmailVerificationSubject: S.optional(S.String),
          VerificationMessageTemplate: S.optional(VerificationMessageTemplateType),
          SmsAuthenticationMessage: S.optional(S.String),
          UserAttributeUpdateSettings: S.optional(UserAttributeUpdateSettingsType),
          MfaConfiguration: S.optional(UserPoolMfaType),
          DeviceConfiguration: S.optional(DeviceConfigurationType),
          EstimatedNumberOfUsers: S.optional(S.Number),
          EmailConfiguration: S.optional(EmailConfigurationType),
          SmsConfiguration: S.optional(SmsConfigurationType),
          UserPoolTags: S.optional(UserPoolTagsType),
          SmsConfigurationFailure: S.optional(S.String),
          EmailConfigurationFailure: S.optional(S.String),
          Domain: S.optional(S.String),
          CustomDomain: S.optional(S.String),
          AdminCreateUserConfig: S.optional(AdminCreateUserConfigType),
          UserPoolAddOns: S.optional(UserPoolAddOnsType),
          UsernameConfiguration: S.optional(UsernameConfigurationType),
          Arn: S.optional(S.String),
          AccountRecoverySetting: S.optional(AccountRecoverySettingType),
          UserPoolTier: S.optional(UserPoolTierType),
          KeyConfiguration: S.optional(KeyConfigurationType),
          IssuerConfiguration: S.optional(IssuerConfigurationType),
          AcrConfiguration: S.optional(AcrConfigurationType),
        }),
      ).annotate({ identifier: "UserPoolType" });
    case 6:
      return S.suspend(() => S.Struct({ UserPool: S.optional(UserPoolType) }).pipe(ns)).annotate({
        identifier: "CreateUserPoolResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccessToken: S.optional(TimeUnitsType),
          IdToken: S.optional(TimeUnitsType),
          RefreshToken: S.optional(TimeUnitsType),
        }),
      ).annotate({ identifier: "TokenValidityUnitsType" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          ApplicationArn: S.optional(S.String),
          RoleArn: S.optional(S.String),
          ExternalId: S.optional(S.String),
          UserDataShared: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AnalyticsConfigurationType",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Feature: FeatureType, RetryGracePeriodSeconds: S.optional(S.Number) }),
      ).annotate({ identifier: "RefreshTokenRotationType" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          ClientName: S.String,
          GenerateSecret: S.optional(S.Boolean),
          ClientSecret: S.optional(SensitiveString),
          RefreshTokenValidity: S.optional(S.Number),
          AccessTokenValidity: S.optional(S.Number),
          IdTokenValidity: S.optional(S.Number),
          TokenValidityUnits: S.optional(TokenValidityUnitsType),
          ReadAttributes: S.optional(ClientPermissionListType),
          WriteAttributes: S.optional(ClientPermissionListType),
          ExplicitAuthFlows: S.optional(ExplicitAuthFlowsListType),
          SupportedIdentityProviders: S.optional(SupportedIdentityProvidersListType),
          CallbackURLs: S.optional(CallbackURLsListType),
          LogoutURLs: S.optional(LogoutURLsListType),
          DefaultRedirectURI: S.optional(S.String),
          AllowedOAuthFlows: S.optional(OAuthFlowsType),
          AllowedOAuthScopes: S.optional(ScopeListType),
          AllowedOAuthFlowsUserPoolClient: S.optional(S.Boolean),
          AnalyticsConfiguration: S.optional(AnalyticsConfigurationType),
          PreventUserExistenceErrors: S.optional(PreventUserExistenceErrorTypes),
          EnableTokenRevocation: S.optional(S.Boolean),
          EnablePropagateAdditionalUserContextData: S.optional(S.Boolean),
          AuthSessionValidity: S.optional(S.Number),
          RefreshTokenRotation: S.optional(RefreshTokenRotationType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateUserPoolClientRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.optional(S.String),
          ClientName: S.optional(S.String),
          ClientId: S.optional(SensitiveString),
          ClientSecret: S.optional(SensitiveString),
          LastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CreationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          RefreshTokenValidity: S.optional(S.Number),
          AccessTokenValidity: S.optional(S.Number),
          IdTokenValidity: S.optional(S.Number),
          TokenValidityUnits: S.optional(TokenValidityUnitsType),
          ReadAttributes: S.optional(ClientPermissionListType),
          WriteAttributes: S.optional(ClientPermissionListType),
          ExplicitAuthFlows: S.optional(ExplicitAuthFlowsListType),
          SupportedIdentityProviders: S.optional(SupportedIdentityProvidersListType),
          CallbackURLs: S.optional(CallbackURLsListType),
          LogoutURLs: S.optional(LogoutURLsListType),
          DefaultRedirectURI: S.optional(S.String),
          AllowedOAuthFlows: S.optional(OAuthFlowsType),
          AllowedOAuthScopes: S.optional(ScopeListType),
          AllowedOAuthFlowsUserPoolClient: S.optional(S.Boolean),
          AnalyticsConfiguration: S.optional(AnalyticsConfigurationType),
          PreventUserExistenceErrors: S.optional(PreventUserExistenceErrorTypes),
          EnableTokenRevocation: S.optional(S.Boolean),
          EnablePropagateAdditionalUserContextData: S.optional(S.Boolean),
          AuthSessionValidity: S.optional(S.Number),
          RefreshTokenRotation: S.optional(RefreshTokenRotationType),
        }),
      ).annotate({ identifier: "UserPoolClientType" });
    case 4:
      return S.suspend(() =>
        S.Struct({ UserPoolClient: S.optional(UserPoolClientType) }).pipe(ns),
      ).annotate({
        identifier: "CreateUserPoolClientResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ CertificateArn: S.String, SecurityPolicy: S.optional(SecurityPolicyType) }),
      ).annotate({ identifier: "CustomDomainConfigType" });
    case 6:
      return S.suspend(() =>
        S.Struct({ SecondaryRegion: S.String, PrimaryRoute53HealthCheckId: S.String }),
      ).annotate({ identifier: "FailoverType" });
    case 7:
      return S.suspend(() => S.Struct({ Failover: S.optional(FailoverType) })).annotate({
        identifier: "RoutingType",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Domain: S.String,
          UserPoolId: S.String,
          ManagedLoginVersion: S.optional(S.Number),
          CustomDomainConfig: S.optional(CustomDomainConfigType),
          Routing: S.optional(RoutingType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateUserPoolDomainRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ManagedLoginVersion: S.optional(S.Number),
          CloudFrontDomain: S.optional(S.String),
          Routing: S.optional(RoutingType),
        }).pipe(ns),
      ).annotate({
        identifier: "CreateUserPoolDomainResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          RegionName: S.String,
          UserPoolTags: S.optional(UserPoolTagsType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateUserPoolReplicaRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RegionName: S.optional(S.String),
          Status: S.optional(ReplicaStatusType),
          Role: S.optional(ReplicaRoleType),
          UserPoolArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "UserPoolReplicaType" });
    case 4:
      return S.suspend(() =>
        S.Struct({ UserPoolReplica: S.optional(UserPoolReplicaType) }).pipe(ns),
      ).annotate({
        identifier: "CreateUserPoolReplicaResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ GroupName: S.String, UserPoolId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteGroupRequest" });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteGroupResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, ProviderName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteIdentityProviderRequest",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ManagedLoginBrandingId: S.String, UserPoolId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteManagedLoginBrandingRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, Identifier: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteResourceServerRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ TermsId: S.String, UserPoolId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteTermsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ AccessToken: SensitiveString }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteUserRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ UserAttributeNames: AttributeNameListType, AccessToken: SensitiveString }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteUserAttributesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteUserPoolRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, ClientId: SensitiveString }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteUserPoolClientRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          ClientId: SensitiveString,
          ClientSecretId: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteUserPoolClientSecretRequest",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Domain: S.String, UserPoolId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteUserPoolDomainRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, RegionName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteUserPoolReplicaRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ AccessToken: SensitiveString, CredentialId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteWebAuthnCredentialRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, ProviderName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeIdentityProviderRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          ManagedLoginBrandingId: S.String,
          ReturnMergedResources: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeManagedLoginBrandingRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          ClientId: SensitiveString,
          ReturnMergedResources: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeManagedLoginBrandingByClientRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, Identifier: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeResourceServerRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, ClientId: S.optional(SensitiveString) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeRiskConfigurationRequest",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ EventAction: CompromisedCredentialsEventActionType }),
      ).annotate({
        identifier: "CompromisedCredentialsActionsType",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          EventFilter: S.optional(EventFiltersType),
          Actions: CompromisedCredentialsActionsType,
        }),
      ).annotate({
        identifier: "CompromisedCredentialsRiskConfigurationType",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Subject: S.String,
          HtmlBody: S.optional(S.String),
          TextBody: S.optional(S.String),
        }),
      ).annotate({ identifier: "NotifyEmailType" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          From: S.optional(S.String),
          ReplyTo: S.optional(S.String),
          SourceArn: S.String,
          BlockEmail: S.optional(NotifyEmailType),
          NoActionEmail: S.optional(NotifyEmailType),
          MfaEmail: S.optional(NotifyEmailType),
        }),
      ).annotate({ identifier: "NotifyConfigurationType" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Notify: S.Boolean, EventAction: AccountTakeoverEventActionType }),
      ).annotate({
        identifier: "AccountTakeoverActionType",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          LowAction: S.optional(AccountTakeoverActionType),
          MediumAction: S.optional(AccountTakeoverActionType),
          HighAction: S.optional(AccountTakeoverActionType),
        }),
      ).annotate({
        identifier: "AccountTakeoverActionsType",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NotifyConfiguration: S.optional(NotifyConfigurationType),
          Actions: AccountTakeoverActionsType,
        }),
      ).annotate({
        identifier: "AccountTakeoverRiskConfigurationType",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          BlockedIPRangeList: S.optional(BlockedIPRangeListType),
          SkippedIPRangeList: S.optional(SkippedIPRangeListType),
        }),
      ).annotate({
        identifier: "RiskExceptionConfigurationType",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.optional(S.String),
          ClientId: S.optional(SensitiveString),
          CompromisedCredentialsRiskConfiguration: S.optional(
            CompromisedCredentialsRiskConfigurationType,
          ),
          AccountTakeoverRiskConfiguration: S.optional(AccountTakeoverRiskConfigurationType),
          RiskExceptionConfiguration: S.optional(RiskExceptionConfigurationType),
          LastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "RiskConfigurationType" });
    case 1:
      return S.suspend(() =>
        S.Struct({ RiskConfiguration: RiskConfigurationType }).pipe(ns),
      ).annotate({
        identifier: "DescribeRiskConfigurationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ TermsId: S.String, UserPoolId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeTermsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ClientId: SensitiveString, UserPoolId: S.String, TermsName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeTermsByClientRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ Terms: S.optional(TermsType) }).pipe(ns)).annotate({
        identifier: "DescribeTermsByClientResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, JobId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeUserImportJobRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeUserPoolRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, ClientId: SensitiveString }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeUserPoolClientRequest",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Domain: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeUserPoolDomainRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.optional(S.String),
          AWSAccountId: S.optional(S.String),
          Domain: S.optional(S.String),
          S3Bucket: S.optional(S.String),
          CloudFrontDistribution: S.optional(S.String),
          Version: S.optional(S.String),
          Status: S.optional(DomainStatusType),
          CustomDomainConfig: S.optional(CustomDomainConfigType),
          ManagedLoginVersion: S.optional(S.Number),
          Routing: S.optional(RoutingType),
        }),
      ).annotate({ identifier: "DomainDescriptionType" });
    case 2:
      return S.suspend(() =>
        S.Struct({ DomainDescription: S.optional(DomainDescriptionType) }).pipe(ns),
      ).annotate({
        identifier: "DescribeUserPoolDomainResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ AccessToken: S.optional(SensitiveString), DeviceKey: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ForgetDeviceRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ClientId: SensitiveString,
          SecretHash: S.optional(SensitiveString),
          UserContextData: S.optional(UserContextDataType),
          Username: SensitiveString,
          AnalyticsMetadata: S.optional(AnalyticsMetadataType),
          ClientMetadata: S.optional(ClientMetadataType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ForgotPasswordRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Destination: S.optional(S.String),
          DeliveryMedium: S.optional(DeliveryMediumType),
          AttributeName: S.optional(S.String),
        }),
      ).annotate({ identifier: "CodeDeliveryDetailsType" });
    case 6:
      return S.suspend(() =>
        S.Struct({ CodeDeliveryDetails: S.optional(CodeDeliveryDetailsType) }).pipe(ns),
      ).annotate({ identifier: "ForgotPasswordResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ClientId: SensitiveString,
          Secret: SensitiveString,
          Scopes: S.optional(ScopeListType),
          ClientMetadata: S.optional(ClientMetadataType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetClientTokenRequest" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccessToken: S.optional(SensitiveString),
          ExpiresIn: S.optional(S.Number),
          TokenType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ClientAuthenticationResultType",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ClientAuthenticationResult: S.optional(ClientAuthenticationResultType) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "GetClientTokenResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetCSVHeaderRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.optional(S.String),
          CSVHeader: S.optional(ListOfStringTypes),
        }).pipe(ns),
      ).annotate({ identifier: "GetCSVHeaderResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ DeviceKey: S.String, AccessToken: S.optional(SensitiveString) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetDeviceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ GroupName: S.String, UserPoolId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetGroupRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, IdpIdentifier: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetIdentityProviderByIdentifierRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetLogDeliveryConfigurationRequest",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ LogGroupArn: S.optional(S.String) })).annotate({
        identifier: "CloudWatchLogsConfigurationType",
      });
    case 1:
      return S.suspend(() => S.Struct({ BucketArn: S.optional(S.String) })).annotate({
        identifier: "S3ConfigurationType",
      });
    case 2:
      return S.suspend(() => S.Struct({ StreamArn: S.optional(S.String) })).annotate({
        identifier: "FirehoseConfigurationType",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          LogLevel: LogLevel,
          EventSource: EventSourceName,
          CloudWatchLogsConfiguration: S.optional(CloudWatchLogsConfigurationType),
          S3Configuration: S.optional(S3ConfigurationType),
          FirehoseConfiguration: S.optional(FirehoseConfigurationType),
        }),
      ).annotate({ identifier: "LogConfigurationType" });
    case 4:
      return S.Array(LogConfigurationType);
    case 5:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, LogConfigurations: LogConfigurationListType }),
      ).annotate({
        identifier: "LogDeliveryConfigurationType",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ LogDeliveryConfiguration: S.optional(LogDeliveryConfigurationType) }).pipe(ns),
      ).annotate({
        identifier: "GetLogDeliveryConfigurationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ LimitClass: LimitClass, Attributes: StringToStringMapType }),
      ).annotate({ identifier: "LimitDefinitionType" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ LimitDefinition: LimitDefinitionType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetProvisionedLimitRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          LimitDefinition: LimitDefinitionType,
          ProvisionedLimitValue: S.Number,
          FreeLimitValue: S.Number,
        }),
      ).annotate({ identifier: "LimitType" });
    case 2:
      return S.suspend(() => S.Struct({ Limit: LimitType }).pipe(ns)).annotate({
        identifier: "GetProvisionedLimitResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetSigningCertificateRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ Certificate: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "GetSigningCertificateResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          RefreshToken: SensitiveString,
          ClientId: SensitiveString,
          ClientSecret: S.optional(SensitiveString),
          DeviceKey: S.optional(S.String),
          ClientMetadata: S.optional(ClientMetadataType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetTokensFromRefreshTokenRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ AuthenticationResult: S.optional(AuthenticationResultType) }).pipe(ns),
      ).annotate({
        identifier: "GetTokensFromRefreshTokenResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, ClientId: S.optional(SensitiveString) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetUICustomizationRequest",
      });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.optional(S.String),
          ClientId: S.optional(SensitiveString),
          ImageUrl: S.optional(S.String),
          CSS: S.optional(S.String),
          CSSVersion: S.optional(S.String),
          LastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CreationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "UICustomizationType" });
    case 1:
      return S.suspend(() => S.Struct({ UICustomization: UICustomizationType }).pipe(ns)).annotate({
        identifier: "GetUICustomizationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ AccessToken: SensitiveString }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetUserRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Username: SensitiveString,
          UserAttributes: AttributeListType,
          MFAOptions: S.optional(MFAOptionListType),
          PreferredMfaSetting: S.optional(S.String),
          UserMFASettingList: S.optional(UserMFASettingListType),
        }).pipe(ns),
      ).annotate({ identifier: "GetUserResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccessToken: SensitiveString,
          AttributeName: S.String,
          ClientMetadata: S.optional(ClientMetadataType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetUserAttributeVerificationCodeRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ CodeDeliveryDetails: S.optional(CodeDeliveryDetailsType) }).pipe(ns),
      ).annotate({
        identifier: "GetUserAttributeVerificationCodeResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ AccessToken: SensitiveString }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetUserAuthFactorsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetUserPoolMfaConfigRequest",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SmsAuthenticationMessage: S.optional(S.String),
          SmsConfiguration: S.optional(SmsConfigurationType),
        }),
      ).annotate({ identifier: "SmsMfaConfigType" });
    case 1:
      return S.suspend(() => S.Struct({ Enabled: S.optional(S.Boolean) })).annotate({
        identifier: "SoftwareTokenMfaConfigType",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Message: S.optional(S.String), Subject: S.optional(S.String) }),
      ).annotate({ identifier: "EmailMfaConfigType" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RelyingPartyId: S.optional(S.String),
          UserVerification: S.optional(UserVerificationType),
          FactorConfiguration: S.optional(WebAuthnFactorConfigurationType),
        }),
      ).annotate({
        identifier: "WebAuthnConfigurationType",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SmsMfaConfiguration: S.optional(SmsMfaConfigType),
          SoftwareTokenMfaConfiguration: S.optional(SoftwareTokenMfaConfigType),
          EmailMfaConfiguration: S.optional(EmailMfaConfigType),
          MfaConfiguration: S.optional(UserPoolMfaType),
          WebAuthnConfiguration: S.optional(WebAuthnConfigurationType),
        }).pipe(ns),
      ).annotate({
        identifier: "GetUserPoolMfaConfigResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ AccessToken: SensitiveString }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GlobalSignOutRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AuthFlow: AuthFlowType,
          AuthParameters: S.optional(AuthParametersType),
          ClientMetadata: S.optional(ClientMetadataType),
          ClientId: SensitiveString,
          AnalyticsMetadata: S.optional(AnalyticsMetadataType),
          UserContextData: S.optional(UserContextDataType),
          Session: S.optional(SensitiveString),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "InitiateAuthRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ChallengeName: S.optional(ChallengeNameType),
          Session: S.optional(SensitiveString),
          ChallengeParameters: S.optional(ChallengeParametersType),
          AuthenticationResult: S.optional(AuthenticationResultType),
          AvailableChallenges: S.optional(AvailableChallengeListType),
        }).pipe(ns),
      ).annotate({ identifier: "InitiateAuthResponse" });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccessToken: SensitiveString,
          Limit: S.optional(S.Number),
          PaginationToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListDevicesRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          Limit: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListGroupsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Groups: S.optional(GroupListType), NextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListGroupsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListIdentityProvidersRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ProviderName: S.optional(S.String),
          ProviderType: S.optional(IdentityProviderTypeType),
          LastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CreationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ProviderDescription" });
    case 5:
      return S.Array(ProviderDescription);
    case 6:
      return S.suspend(() =>
        S.Struct({ Providers: ProvidersListType, NextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "ListIdentityProvidersResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListResourceServersRequest",
      });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ResourceServerType);
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceServers: ResourceServersListType,
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListResourceServersResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ Tags: S.optional(UserPoolTagsType) }).pipe(ns)).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListTermsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          TermsId: S.String,
          TermsName: S.String,
          Enforcement: TermsEnforcementType,
          CreationDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          LastModifiedDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "TermsDescriptionType" });
    case 6:
      return S.Array(TermsDescriptionType);
    case 7:
      return S.suspend(() =>
        S.Struct({ Terms: TermsDescriptionListType, NextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListTermsResponse" });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          MaxResults: S.Number,
          PaginationToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListUserImportJobsRequest",
      });
    case 1:
      return S.Array(UserImportJobType);
    case 2:
      return S.suspend(() =>
        S.Struct({
          UserImportJobs: S.optional(UserImportJobsListType),
          PaginationToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListUserImportJobsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListUserPoolClientsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ClientId: S.optional(SensitiveString),
          UserPoolId: S.optional(S.String),
          ClientName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UserPoolClientDescription",
      });
    case 5:
      return S.Array(UserPoolClientDescription);
    case 6:
      return S.suspend(() =>
        S.Struct({
          UserPoolClients: S.optional(UserPoolClientListType),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListUserPoolClientsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          ClientId: SensitiveString,
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListUserPoolClientSecretsRequest",
      });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ClientSecretDescriptorType);
    case 1:
      return S.suspend(() =>
        S.Struct({
          ClientSecrets: S.optional(ClientSecretDescriptorListType),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListUserPoolClientSecretsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, NextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListUserPoolReplicasRequest",
      });
    case 3:
      return S.Array(UserPoolReplicaType);
    case 4:
      return S.suspend(() =>
        S.Struct({
          UserPoolReplicas: S.optional(UserPoolReplicaListType),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListUserPoolReplicasResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.Number }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListUserPoolsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          LambdaConfig: S.optional(LambdaConfigType),
          Status: S.optional(StatusType),
          LastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CreationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ReplicaRegions: S.optional(ReplicaRegionsType),
        }),
      ).annotate({ identifier: "UserPoolDescriptionType" });
    case 7:
      return S.Array(UserPoolDescriptionType);
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ UserPools: S.optional(UserPoolListType), NextToken: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "ListUserPoolsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          AttributesToGet: S.optional(SearchedAttributeNamesListType),
          Limit: S.optional(S.Number),
          PaginationToken: S.optional(S.String),
          Filter: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListUsersRequest" });
    case 2:
      return S.Array(UserType);
    case 3:
      return S.suspend(() =>
        S.Struct({ Users: S.optional(UsersListType), PaginationToken: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "ListUsersResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          GroupName: S.String,
          Limit: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListUsersInGroupRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Users: S.optional(UsersListType), NextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListUsersInGroupResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccessToken: SensitiveString,
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListWebAuthnCredentialsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CredentialId: S.String,
          FriendlyCredentialName: S.String,
          RelyingPartyId: S.String,
          AuthenticatorAttachment: S.optional(S.String),
          AuthenticatorTransports: WebAuthnAuthenticatorTransportsList,
          CreatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "WebAuthnCredentialDescription",
      });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.Array(WebAuthnCredentialDescription);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Credentials: WebAuthnCredentialDescriptionListType,
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListWebAuthnCredentialsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ClientId: SensitiveString,
          SecretHash: S.optional(SensitiveString),
          UserContextData: S.optional(UserContextDataType),
          Username: SensitiveString,
          AnalyticsMetadata: S.optional(AnalyticsMetadataType),
          ClientMetadata: S.optional(ClientMetadataType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ResendConfirmationCodeRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ClientId: SensitiveString,
          ChallengeName: ChallengeNameType,
          Session: S.optional(SensitiveString),
          ChallengeResponses: S.optional(ChallengeResponsesType),
          AnalyticsMetadata: S.optional(AnalyticsMetadataType),
          UserContextData: S.optional(UserContextDataType),
          ClientMetadata: S.optional(ClientMetadataType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RespondToAuthChallengeRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Token: SensitiveString,
          ClientId: SensitiveString,
          ClientSecret: S.optional(SensitiveString),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "RevokeTokenRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, LogConfigurations: LogConfigurationListType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SetLogDeliveryConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          ClientId: S.optional(SensitiveString),
          CompromisedCredentialsRiskConfiguration: S.optional(
            CompromisedCredentialsRiskConfigurationType,
          ),
          AccountTakeoverRiskConfiguration: S.optional(AccountTakeoverRiskConfigurationType),
          RiskExceptionConfiguration: S.optional(RiskExceptionConfigurationType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SetRiskConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          ClientId: S.optional(SensitiveString),
          CSS: S.optional(S.String),
          ImageFile: S.optional(T.Blob),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SetUICustomizationRequest",
      });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SMSMfaSettings: S.optional(SMSMfaSettingsType),
          SoftwareTokenMfaSettings: S.optional(SoftwareTokenMfaSettingsType),
          EmailMfaSettings: S.optional(EmailMfaSettingsType),
          WebAuthnMfaSettings: S.optional(WebAuthnMfaSettingsType),
          AccessToken: SensitiveString,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SetUserMFAPreferenceRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          SmsMfaConfiguration: S.optional(SmsMfaConfigType),
          SoftwareTokenMfaConfiguration: S.optional(SoftwareTokenMfaConfigType),
          EmailMfaConfiguration: S.optional(EmailMfaConfigType),
          MfaConfiguration: S.optional(UserPoolMfaType),
          WebAuthnConfiguration: S.optional(WebAuthnConfigurationType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SetUserPoolMfaConfigRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ AccessToken: SensitiveString, MFAOptions: MFAOptionListType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "SetUserSettingsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ClientId: SensitiveString,
          SecretHash: S.optional(SensitiveString),
          Username: SensitiveString,
          Password: S.optional(SensitiveString),
          UserAttributes: S.optional(AttributeListType),
          ValidationData: S.optional(AttributeListType),
          AnalyticsMetadata: S.optional(AnalyticsMetadataType),
          UserContextData: S.optional(UserContextDataType),
          ClientMetadata: S.optional(ClientMetadataType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SignUpRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          UserConfirmed: S.Boolean,
          CodeDeliveryDetails: S.optional(CodeDeliveryDetailsType),
          UserSub: S.String,
          Session: S.optional(SensitiveString),
        }).pipe(ns),
      ).annotate({ identifier: "SignUpResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, JobId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StartUserImportJobRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ AccessToken: SensitiveString }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StartWebAuthnRegistrationRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ CredentialCreationOptions: S.Any }).pipe(ns)).annotate({
        identifier: "StartWebAuthnRegistrationResponse",
      });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ UserPoolId: S.String, JobId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopUserImportJobRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Tags: UserPoolTagsType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, TagKeys: UserPoolTagsListType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          Username: SensitiveString,
          EventId: S.String,
          FeedbackToken: SensitiveString,
          FeedbackValue: FeedbackValueType,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateAuthEventFeedbackRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccessToken: SensitiveString,
          DeviceKey: S.String,
          DeviceRememberedStatus: S.optional(DeviceRememberedStatusType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateDeviceStatusRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          GroupName: S.String,
          UserPoolId: S.String,
          Description: S.optional(S.String),
          RoleArn: S.optional(S.String),
          Precedence: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateGroupRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          ProviderName: S.String,
          ProviderDetails: S.optional(ProviderDetailsType),
          AttributeMapping: S.optional(AttributeMappingType),
          IdpIdentifiers: S.optional(IdpIdentifiersListType),
          AcrMapping: S.optional(AcrMappingType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateIdentityProviderRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.optional(S.String),
          ManagedLoginBrandingId: S.optional(S.String),
          UseCognitoProvidedValues: S.optional(S.Boolean),
          Settings: S.optional(S.Any),
          Assets: S.optional(AssetListType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateManagedLoginBrandingRequest",
      });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ LimitDefinition: LimitDefinitionType, RequestedLimitValue: S.Number }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateProvisionedLimitRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          Identifier: S.String,
          Name: S.String,
          Scopes: S.optional(ResourceServerScopeListType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateResourceServerRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TermsId: S.String,
          UserPoolId: S.String,
          TermsName: S.optional(S.String),
          TermsSource: S.optional(TermsSourceType),
          Enforcement: S.optional(TermsEnforcementType),
          Links: S.optional(LinksType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateTermsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          UserAttributes: AttributeListType,
          AccessToken: SensitiveString,
          ClientMetadata: S.optional(ClientMetadataType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateUserAttributesRequest",
      });
    case 4:
      return S.Array(CodeDeliveryDetailsType);
    case 5:
      return S.suspend(() =>
        S.Struct({ CodeDeliveryDetailsList: S.optional(CodeDeliveryDetailsListType) }).pipe(ns),
      ).annotate({
        identifier: "UpdateUserAttributesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          Policies: S.optional(UserPoolPolicyType),
          DeletionProtection: S.optional(DeletionProtectionType),
          LambdaConfig: S.optional(LambdaConfigType),
          AutoVerifiedAttributes: S.optional(VerifiedAttributesListType),
          SmsVerificationMessage: S.optional(S.String),
          EmailVerificationMessage: S.optional(S.String),
          EmailVerificationSubject: S.optional(S.String),
          VerificationMessageTemplate: S.optional(VerificationMessageTemplateType),
          SmsAuthenticationMessage: S.optional(S.String),
          UserAttributeUpdateSettings: S.optional(UserAttributeUpdateSettingsType),
          MfaConfiguration: S.optional(UserPoolMfaType),
          DeviceConfiguration: S.optional(DeviceConfigurationType),
          EmailConfiguration: S.optional(EmailConfigurationType),
          SmsConfiguration: S.optional(SmsConfigurationType),
          UserPoolTags: S.optional(UserPoolTagsType),
          AdminCreateUserConfig: S.optional(AdminCreateUserConfigType),
          UserPoolAddOns: S.optional(UserPoolAddOnsType),
          AccountRecoverySetting: S.optional(AccountRecoverySettingType),
          PoolName: S.optional(S.String),
          UserPoolTier: S.optional(UserPoolTierType),
          KeyConfiguration: S.optional(KeyConfigurationType),
          IssuerConfiguration: S.optional(IssuerConfigurationType),
          AcrConfiguration: S.optional(AcrConfigurationType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateUserPoolRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          ClientId: SensitiveString,
          ClientName: S.optional(S.String),
          RefreshTokenValidity: S.optional(S.Number),
          AccessTokenValidity: S.optional(S.Number),
          IdTokenValidity: S.optional(S.Number),
          TokenValidityUnits: S.optional(TokenValidityUnitsType),
          ReadAttributes: S.optional(ClientPermissionListType),
          WriteAttributes: S.optional(ClientPermissionListType),
          ExplicitAuthFlows: S.optional(ExplicitAuthFlowsListType),
          SupportedIdentityProviders: S.optional(SupportedIdentityProvidersListType),
          CallbackURLs: S.optional(CallbackURLsListType),
          LogoutURLs: S.optional(LogoutURLsListType),
          DefaultRedirectURI: S.optional(S.String),
          AllowedOAuthFlows: S.optional(OAuthFlowsType),
          AllowedOAuthScopes: S.optional(ScopeListType),
          AllowedOAuthFlowsUserPoolClient: S.optional(S.Boolean),
          AnalyticsConfiguration: S.optional(AnalyticsConfigurationType),
          PreventUserExistenceErrors: S.optional(PreventUserExistenceErrorTypes),
          EnableTokenRevocation: S.optional(S.Boolean),
          EnablePropagateAdditionalUserContextData: S.optional(S.Boolean),
          AuthSessionValidity: S.optional(S.Number),
          RefreshTokenRotation: S.optional(RefreshTokenRotationType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateUserPoolClientRequest",
      });
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Domain: S.String,
          UserPoolId: S.String,
          ManagedLoginVersion: S.optional(S.Number),
          CustomDomainConfig: S.optional(CustomDomainConfigType),
          Routing: S.optional(RoutingType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateUserPoolDomainRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          UserPoolId: S.String,
          RegionName: S.String,
          Status: UpdateReplicaStatusType,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateUserPoolReplicaRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccessToken: S.optional(SensitiveString),
          Session: S.optional(SensitiveString),
          UserCode: SensitiveString,
          FriendlyDeviceName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "VerifySoftwareTokenRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(VerifySoftwareTokenResponseType),
          Session: S.optional(SensitiveString),
        }).pipe(ns),
      ).annotate({
        identifier: "VerifySoftwareTokenResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ AccessToken: SensitiveString, AttributeName: S.String, Code: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "VerifyUserAttributeRequest",
      });
  }
}
