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
import { SensitiveString, SensitiveBlob } from "../sensitive.ts";
import * as T from "../traits.ts";
const ns = /*@__PURE__*/ T.XmlNamespace("https://iam.amazonaws.com/doc/2010-05-08/");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "IAM",
  serviceShapeName: "AWSIdentityManagementV20100508",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "iam" });
const ver = /*@__PURE__*/ T.ServiceVersion("2010-05-08");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsQuery();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseDualStack = false, UseFIPS = false, Endpoint, Region } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  const _p0 = () => ({ authSchemes: [{ name: "sigv4", signingRegion: "us-east-1" }] });
  const _p1 = () => ({ authSchemes: [{ name: "sigv4", signingRegion: "cn-north-1" }] });
  const _p2 = () => ({ authSchemes: [{ name: "sigv4", signingRegion: "us-gov-west-1" }] });
  const _p3 = () => ({ authSchemes: [{ name: "sigv4", signingRegion: "us-iso-east-1" }] });
  const _p4 = () => ({ authSchemes: [{ name: "sigv4", signingRegion: "us-isob-east-1" }] });
  const _p5 = () => ({ authSchemes: [{ name: "sigv4", signingRegion: "eu-isoe-west-1" }] });
  const _p6 = () => ({ authSchemes: [{ name: "sigv4", signingRegion: "us-isof-south-1" }] });
  const _p7 = () => ({ authSchemes: [{ name: "sigv4", signingRegion: "eusc-de-east-1" }] });
  const _p8 = (_0: unknown) => ({
    authSchemes: [{ name: "sigv4", signingRegion: `${_.getAttr(_0, "implicitGlobalRegion")}` }],
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
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e("https://iam.amazonaws.com", _p0(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === true &&
          UseDualStack === false
        ) {
          return e("https://iam-fips.amazonaws.com", _p0(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e("https://iam.global.api.aws", _p0(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === true &&
          UseDualStack === true
        ) {
          return e("https://iam-fips.global.api.aws", _p0(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-cn" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e("https://iam.global.api.amazonwebservices.com.cn", _p1(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-cn" &&
          UseFIPS === true &&
          UseDualStack === true
        ) {
          return e("https://iam-fips.api.amazonwebservices.com.cn", _p1(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-cn" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e("https://iam.cn-north-1.amazonaws.com.cn", _p1(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-cn" &&
          UseFIPS === true &&
          UseDualStack === false
        ) {
          return e("https://iam-fips.amazonaws.com.cn", _p1(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e("https://iam.us-gov.api.aws", _p2(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
          UseFIPS === true &&
          UseDualStack === true
        ) {
          return e("https://iam.us-gov.api.aws", _p2(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e("https://iam.us-gov.amazonaws.com", _p2(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
          UseFIPS === true &&
          UseDualStack === false
        ) {
          return e("https://iam.us-gov.amazonaws.com", _p2(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e("https://iam.us-iso-east-1.c2s.ic.gov", _p3(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso" &&
          UseFIPS === true &&
          UseDualStack === false
        ) {
          return e("https://iam-fips.us-iso-east-1.c2s.ic.gov", _p3(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e("https://iam.api.aws.ic.gov", _p3(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso" &&
          UseFIPS === true &&
          UseDualStack === true
        ) {
          return e("https://iam-fips.api.aws.ic.gov", _p3(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-b" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e("https://iam.us-isob-east-1.sc2s.sgov.gov", _p4(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-b" &&
          UseFIPS === true &&
          UseDualStack === false
        ) {
          return e("https://iam-fips.us-isob-east-1.sc2s.sgov.gov", _p4(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-b" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e("https://iam.api.aws.scloud", _p4(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-b" &&
          UseFIPS === true &&
          UseDualStack === true
        ) {
          return e("https://iam-fips.api.aws.scloud", _p4(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-e" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e("https://iam.eu-isoe-west-1.cloud.adc-e.uk", _p5(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-e" &&
          UseFIPS === true &&
          UseDualStack === false
        ) {
          return e("https://iam-fips.cloud.adc-e.uk", _p5(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-e" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e("https://iam.api.cloud-aws.adc-e.uk", _p5(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-e" &&
          UseFIPS === true &&
          UseDualStack === true
        ) {
          return e("https://iam-fips.api.cloud-aws.adc-e.uk", _p5(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-f" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e("https://iam.us-isof-south-1.csp.hci.ic.gov", _p6(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-f" &&
          UseFIPS === true &&
          UseDualStack === false
        ) {
          return e("https://iam-fips.csp.hci.ic.gov", _p6(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-f" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e("https://iam.api.aws.hci.ic.gov", _p6(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-f" &&
          UseFIPS === true &&
          UseDualStack === true
        ) {
          return e("https://iam-fips.api.aws.hci.ic.gov", _p6(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-eusc" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e("https://iam.eusc-de-east-1.amazonaws.eu", _p7(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-eusc" &&
          UseFIPS === true &&
          UseDualStack === false
        ) {
          return e("https://iam-fips.amazonaws.eu", _p7(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-eusc" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e("https://iam.global.api.amazonwebservices.eu", _p7(), {});
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-eusc" &&
          UseFIPS === true &&
          UseDualStack === true
        ) {
          return e("https://iam-fips.api.amazonwebservices.eu", _p7(), {});
        }
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://iam-fips.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
              _p8(PartitionResult),
              {},
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true && UseDualStack === false) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://iam-fips.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
              _p8(PartitionResult),
              {},
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseFIPS === false && UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://iam.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
              _p8(PartitionResult),
              {},
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://iam.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
          _p8(PartitionResult),
          {},
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccountNotManagementOrDelegatedAdministratorException
  extends /*@__PURE__*/ S.TaggedError<AccountNotManagementOrDelegatedAdministratorException>()(
    "AccountNotManagementOrDelegatedAdministratorException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class CallerIsNotManagementAccountException
  extends /*@__PURE__*/ S.TaggedError<CallerIsNotManagementAccountException>()(
    "CallerIsNotManagementAccountException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ConcurrentModificationException
  extends /*@__PURE__*/ S.TaggedError<ConcurrentModificationException>()(
    "ConcurrentModificationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ConcurrentModification", httpResponseCode: 409 }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError, C.withRetryableError) {}
export class CredentialReportExpiredException
  extends /*@__PURE__*/ S.TaggedError<CredentialReportExpiredException>()(
    "CredentialReportExpiredException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ReportExpired", httpResponseCode: 410 }),
      /*@__PURE__*/ T.HttpError(410),
    ),
  ).pipe(C.withBadRequestError) {}
export class CredentialReportNotPresentException
  extends /*@__PURE__*/ S.TaggedError<CredentialReportNotPresentException>()(
    "CredentialReportNotPresentException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ReportNotPresent", httpResponseCode: 410 }),
      /*@__PURE__*/ T.HttpError(410),
    ),
  ).pipe(C.withBadRequestError) {}
export class CredentialReportNotReadyException
  extends /*@__PURE__*/ S.TaggedError<CredentialReportNotReadyException>()(
    "CredentialReportNotReadyException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ReportInProgress", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class DeleteConflictException
  extends /*@__PURE__*/ S.TaggedError<DeleteConflictException>()(
    "DeleteConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DeleteConflict", httpResponseCode: 409 }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError) {}
export class DuplicateCertificateException
  extends /*@__PURE__*/ S.TaggedError<DuplicateCertificateException>()(
    "DuplicateCertificateException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DuplicateCertificate", httpResponseCode: 409 }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError) {}
export class DuplicateSSHPublicKeyException
  extends /*@__PURE__*/ S.TaggedError<DuplicateSSHPublicKeyException>()(
    "DuplicateSSHPublicKeyException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DuplicateSSHPublicKey", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class EntityAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<EntityAlreadyExistsException>()(
    "EntityAlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "EntityAlreadyExists", httpResponseCode: 409 }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError, C.withAlreadyExistsError) {}
export class EntityTemporarilyUnmodifiableException
  extends /*@__PURE__*/ S.TaggedError<EntityTemporarilyUnmodifiableException>()(
    "EntityTemporarilyUnmodifiableException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "EntityTemporarilyUnmodifiable",
        httpResponseCode: 409,
      }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError, C.withRetryableError) {}
export class FeatureDisabledException
  extends /*@__PURE__*/ S.TaggedError<FeatureDisabledException>()(
    "FeatureDisabledException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "FeatureDisabled", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class FeatureEnabledException
  extends /*@__PURE__*/ S.TaggedError<FeatureEnabledException>()(
    "FeatureEnabledException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "FeatureEnabled", httpResponseCode: 409 }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError) {}
export class InvalidAuthenticationCodeException
  extends /*@__PURE__*/ S.TaggedError<InvalidAuthenticationCodeException>()(
    "InvalidAuthenticationCodeException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidAuthenticationCode", httpResponseCode: 403 }),
      /*@__PURE__*/ T.HttpError(403),
    ),
  ).pipe(C.withAuthError) {}
export class InvalidCertificateException
  extends /*@__PURE__*/ S.TaggedError<InvalidCertificateException>()(
    "InvalidCertificateException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidCertificate", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidInput
  extends /*@__PURE__*/ S.TaggedError<InvalidInput>()("InvalidInput", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidInputException
  extends /*@__PURE__*/ S.TaggedError<InvalidInputException>()(
    "InvalidInputException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidInput", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidPublicKeyException
  extends /*@__PURE__*/ S.TaggedError<InvalidPublicKeyException>()(
    "InvalidPublicKeyException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidPublicKey", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidUserTypeException
  extends /*@__PURE__*/ S.TaggedError<InvalidUserTypeException>()(
    "InvalidUserTypeException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidUserType", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class KeyPairMismatchException
  extends /*@__PURE__*/ S.TaggedError<KeyPairMismatchException>()(
    "KeyPairMismatchException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "KeyPairMismatch", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "LimitExceeded", httpResponseCode: 409 }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError, C.withQuotaError) {}
export class MalformedCertificateException
  extends /*@__PURE__*/ S.TaggedError<MalformedCertificateException>()(
    "MalformedCertificateException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "MalformedCertificate", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class MalformedPolicyDocumentException
  extends /*@__PURE__*/ S.TaggedError<MalformedPolicyDocumentException>()(
    "MalformedPolicyDocumentException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "MalformedPolicyDocument", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class NameConflictException
  extends /*@__PURE__*/ S.TaggedError<NameConflictException>()(
    "NameConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "NameConflict", httpResponseCode: 409 }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError) {}
export class NoSuchEntityException
  extends /*@__PURE__*/ S.TaggedError<NoSuchEntityException>()(
    "NoSuchEntityException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "NoSuchEntity", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError, C.withNotFoundError) {}
export class OpenIdIdpCommunicationErrorException
  extends /*@__PURE__*/ S.TaggedError<OpenIdIdpCommunicationErrorException>()(
    "OpenIdIdpCommunicationErrorException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "OpenIdIdpCommunicationError", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class OrganizationNotFoundException
  extends /*@__PURE__*/ S.TaggedError<OrganizationNotFoundException>()(
    "OrganizationNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class OrganizationNotInAllFeaturesModeException
  extends /*@__PURE__*/ S.TaggedError<OrganizationNotInAllFeaturesModeException>()(
    "OrganizationNotInAllFeaturesModeException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class PasswordPolicyViolationException
  extends /*@__PURE__*/ S.TaggedError<PasswordPolicyViolationException>()(
    "PasswordPolicyViolationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "PasswordPolicyViolation", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class PolicyEvaluationException
  extends /*@__PURE__*/ S.TaggedError<PolicyEvaluationException>()(
    "PolicyEvaluationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "PolicyEvaluation", httpResponseCode: 500 }),
      /*@__PURE__*/ T.HttpError(500),
    ),
  ).pipe(C.withServerError) {}
export class PolicyNotAttachableException
  extends /*@__PURE__*/ S.TaggedError<PolicyNotAttachableException>()(
    "PolicyNotAttachableException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "PolicyNotAttachable", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ReportGenerationLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<ReportGenerationLimitExceededException>()(
    "ReportGenerationLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ReportGenerationLimitExceeded",
        httpResponseCode: 409,
      }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError) {}
export class RequestLimitExceeded
  extends /*@__PURE__*/ S.TaggedError<RequestLimitExceeded>()("RequestLimitExceeded", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withThrottlingError, C.withRetryableError) {}
export class RoleModifiedException
  extends /*@__PURE__*/ S.TaggedError<RoleModifiedException>()(
    "RoleModifiedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "RoleModified", httpResponseCode: 409 }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError) {}
export class RoleTemplateDisabledException
  extends /*@__PURE__*/ S.TaggedError<RoleTemplateDisabledException>()(
    "RoleTemplateDisabledException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "RoleTemplateDisabled", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ServiceAccessNotEnabledException
  extends /*@__PURE__*/ S.TaggedError<ServiceAccessNotEnabledException>()(
    "ServiceAccessNotEnabledException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ServiceFailureException
  extends /*@__PURE__*/ S.TaggedError<ServiceFailureException>()(
    "ServiceFailureException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ServiceFailure", httpResponseCode: 500 }),
      /*@__PURE__*/ T.HttpError(500),
    ),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class ServiceNotSupportedException
  extends /*@__PURE__*/ S.TaggedError<ServiceNotSupportedException>()(
    "ServiceNotSupportedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "NotSupportedService", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class UnmodifiableEntityException
  extends /*@__PURE__*/ S.TaggedError<UnmodifiableEntityException>()(
    "UnmodifiableEntityException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "UnmodifiableEntity", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class UnrecognizedPublicKeyEncodingException
  extends /*@__PURE__*/ S.TaggedError<UnrecognizedPublicKeyEncodingException>()(
    "UnrecognizedPublicKeyEncodingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "UnrecognizedPublicKeyEncoding",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export type DelegationRequestIdType = string;
export interface AcceptDelegationRequestRequest {
  DelegationRequestId: string;
}
const AcceptDelegationRequestRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<AcceptDelegationRequestRequest>;
export interface AcceptDelegationRequestResponse {}
const AcceptDelegationRequestResponse = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<AcceptDelegationRequestResponse>;
export type ArnType = string;
export type IntegerType = number;
export type StringType = string;
export type ReplacementValueListType = string[];
const ReplacementValueListType = /*@__PURE__*/ __L.at(__c0, 2);
export interface ReplacementValueEntry {
  Values: string[];
}
const ReplacementValueEntry = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<ReplacementValueEntry>;
export type MapStringReplacementValueEntry = { [key: string]: ReplacementValueEntry | undefined };
const MapStringReplacementValueEntry = /*@__PURE__*/ __L.at(__c0, 4);
export interface AcquireRoleRequest {
  TemplateArn: string;
  TemplateMinorVersion?: number;
  ReplacementValues?: { [key: string]: ReplacementValueEntry | undefined };
}
const AcquireRoleRequest = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<AcquireRoleRequest>;
export type PathType = string;
export type RoleNameType = string;
export type IdType = string;
export type PolicyDocumentType = string;
export type RoleDescriptionType = string;
export type RoleMaxSessionDurationType = number;
export type PermissionsBoundaryAttachmentType = "PermissionsBoundaryPolicy" | (string & {});
const PermissionsBoundaryAttachmentType = S.String;

export interface AttachedPermissionsBoundary {
  PermissionsBoundaryType?: PermissionsBoundaryAttachmentType;
  PermissionsBoundaryArn?: string;
}
const AttachedPermissionsBoundary = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<AttachedPermissionsBoundary>;
export type TagKeyType = string;
export type TagValueType = string;
export interface Tag {
  Key: string;
  Value: string;
}
const Tag = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<Tag>;
export type TagListType = Tag[];
const TagListType = /*@__PURE__*/ __L.at(__c1, 0);
export interface RoleLastUsed {
  LastUsedDate?: Date;
  Region?: string;
}
const RoleLastUsed = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<RoleLastUsed>;
export interface SourceRoleTemplate {
  TemplateArn: string;
  TemplateMinorVersion: number;
}
const SourceRoleTemplate = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<SourceRoleTemplate>;
export interface Role {
  Path: string;
  RoleName: string;
  RoleId: string;
  Arn: string;
  CreateDate: Date;
  AssumeRolePolicyDocument?: string;
  Description?: string;
  MaxSessionDuration?: number;
  PermissionsBoundary?: AttachedPermissionsBoundary;
  Tags?: Tag[];
  RoleLastUsed?: RoleLastUsed;
  SourceRoleTemplate?: SourceRoleTemplate;
}
const Role = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<Role>;
export interface AcquireRoleResponse {
  Role: Role;
}
const AcquireRoleResponse = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<AcquireRoleResponse>;
export type ClientIDType = string;
export interface AddClientIDToOpenIDConnectProviderRequest {
  OpenIDConnectProviderArn: string;
  ClientID: string;
}
const AddClientIDToOpenIDConnectProviderRequest = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<AddClientIDToOpenIDConnectProviderRequest>;
export interface AddClientIDToOpenIDConnectProviderResponse {}
const AddClientIDToOpenIDConnectProviderResponse = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<AddClientIDToOpenIDConnectProviderResponse>;
export type InstanceProfileNameType = string;
export interface AddRoleToInstanceProfileRequest {
  InstanceProfileName: string;
  RoleName: string;
}
const AddRoleToInstanceProfileRequest = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<AddRoleToInstanceProfileRequest>;
export interface AddRoleToInstanceProfileResponse {}
const AddRoleToInstanceProfileResponse = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<AddRoleToInstanceProfileResponse>;
export type GroupNameType = string;
export type ExistingUserNameType = string;
export interface AddUserToGroupRequest {
  GroupName: string;
  UserName: string;
}
const AddUserToGroupRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<AddUserToGroupRequest>;
export interface AddUserToGroupResponse {}
const AddUserToGroupResponse = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<AddUserToGroupResponse>;
export interface AssociateDelegationRequestRequest {
  DelegationRequestId: string;
}
const AssociateDelegationRequestRequest = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<AssociateDelegationRequestRequest>;
export interface AssociateDelegationRequestResponse {}
const AssociateDelegationRequestResponse = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<AssociateDelegationRequestResponse>;
export interface AttachGroupPolicyRequest {
  GroupName: string;
  PolicyArn: string;
}
const AttachGroupPolicyRequest = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<AttachGroupPolicyRequest>;
export interface AttachGroupPolicyResponse {}
const AttachGroupPolicyResponse = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<AttachGroupPolicyResponse>;
export interface AttachRolePolicyRequest {
  RoleName: string;
  PolicyArn: string;
}
const AttachRolePolicyRequest = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<AttachRolePolicyRequest>;
export interface AttachRolePolicyResponse {}
const AttachRolePolicyResponse = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<AttachRolePolicyResponse>;
export type UserNameType = string;
export interface AttachUserPolicyRequest {
  UserName: string;
  PolicyArn: string;
}
const AttachUserPolicyRequest = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<AttachUserPolicyRequest>;
export interface AttachUserPolicyResponse {}
const AttachUserPolicyResponse = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<AttachUserPolicyResponse>;
export type PasswordType = string | redacted.Redacted<string>;
export interface ChangePasswordRequest {
  OldPassword: string | redacted.Redacted<string>;
  NewPassword: string | redacted.Redacted<string>;
}
const ChangePasswordRequest = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<ChangePasswordRequest>;
export interface ChangePasswordResponse {}
const ChangePasswordResponse = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<ChangePasswordResponse>;
export interface CreateAccessKeyRequest {
  UserName?: string;
}
const CreateAccessKeyRequest = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<CreateAccessKeyRequest>;
export type AccessKeyIdType = string;
export type StatusType = "Active" | "Inactive" | "Expired" | (string & {});
const StatusType = S.String;

export type AccessKeySecretType = string | redacted.Redacted<string>;
export interface AccessKey {
  UserName: string;
  AccessKeyId: string;
  Status: StatusType;
  SecretAccessKey: string | redacted.Redacted<string>;
  CreateDate?: Date;
}
const AccessKey = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<AccessKey>;
export interface CreateAccessKeyResponse {
  AccessKey: AccessKey;
}
const CreateAccessKeyResponse = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<CreateAccessKeyResponse>;
export type AccountAliasType = string;
export interface CreateAccountAliasRequest {
  AccountAlias: string;
}
const CreateAccountAliasRequest = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<CreateAccountAliasRequest>;
export interface CreateAccountAliasResponse {}
const CreateAccountAliasResponse = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<CreateAccountAliasResponse>;
export type AccountIdType = string;
export type DelegationRequestDescriptionType = string;
export type PolicyParameterNameType = string;
export type PolicyParameterValueType = string;
export type PolicyParameterValuesListType = string[];
const PolicyParameterValuesListType = /*@__PURE__*/ __L.at(__c4, 2);
export type PolicyParameterTypeEnum = "string" | "stringList" | (string & {});
const PolicyParameterTypeEnum = S.String;

export interface PolicyParameter {
  Name?: string;
  Values?: string[];
  Type?: PolicyParameterTypeEnum;
}
const PolicyParameter = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<PolicyParameter>;
export type PolicyParameterListType = PolicyParameter[];
const PolicyParameterListType = /*@__PURE__*/ __L.at(__c4, 4);
export interface DelegationPermission {
  PolicyTemplateArn?: string;
  Parameters?: PolicyParameter[];
}
const DelegationPermission = /*@__PURE__*/ __L.at(__c4, 5) as any as S.Schema<DelegationPermission>;
export type RequestMessageType = string;
export type RequestorWorkflowIdType = string;
export type RedirectUrlType = string;
export type NotificationChannelType = string;
export type SessionDurationType = number;
export interface CreateDelegationRequestRequest {
  OwnerAccountId?: string;
  Description: string;
  Permissions: DelegationPermission;
  RequestMessage?: string;
  RequestorWorkflowId: string;
  RedirectUrl?: string;
  NotificationChannel: string;
  SessionDuration: number;
  OnlySendByOwner?: boolean;
}
const CreateDelegationRequestRequest = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<CreateDelegationRequestRequest>;
export type ConsoleDeepLinkType = string;
export interface CreateDelegationRequestResponse {
  ConsoleDeepLink?: string;
  DelegationRequestId?: string;
}
const CreateDelegationRequestResponse = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<CreateDelegationRequestResponse>;
export interface CreateGroupRequest {
  Path?: string;
  GroupName: string;
}
const CreateGroupRequest = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<CreateGroupRequest>;
export interface Group {
  Path: string;
  GroupName: string;
  GroupId: string;
  Arn: string;
  CreateDate: Date;
}
const Group = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<Group>;
export interface CreateGroupResponse {
  Group: Group;
}
const CreateGroupResponse = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<CreateGroupResponse>;
export interface CreateInstanceProfileRequest {
  InstanceProfileName: string;
  Path?: string;
  Tags?: Tag[];
}
const CreateInstanceProfileRequest = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<CreateInstanceProfileRequest>;
export type RoleListType = Role[];
const RoleListType = /*@__PURE__*/ __L.at(__c5, 4);
export interface InstanceProfile {
  Path: string;
  InstanceProfileName: string;
  InstanceProfileId: string;
  Arn: string;
  CreateDate: Date;
  Roles: Role[];
  Tags?: Tag[];
}
const InstanceProfile = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<InstanceProfile>;
export interface CreateInstanceProfileResponse {
  InstanceProfile: InstanceProfile;
}
const CreateInstanceProfileResponse = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<CreateInstanceProfileResponse>;
export interface CreateLoginProfileRequest {
  UserName?: string;
  Password?: string | redacted.Redacted<string>;
  PasswordResetRequired?: boolean;
}
const CreateLoginProfileRequest = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<CreateLoginProfileRequest>;
export interface LoginProfile {
  UserName: string;
  CreateDate: Date;
  PasswordResetRequired?: boolean;
}
const LoginProfile = /*@__PURE__*/ __L.at(__c6, 0) as any as S.Schema<LoginProfile>;
export interface CreateLoginProfileResponse {
  LoginProfile: LoginProfile;
}
const CreateLoginProfileResponse = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<CreateLoginProfileResponse>;
export type OpenIDConnectProviderUrlType = string;
export type ClientIDListType = string[];
const ClientIDListType = /*@__PURE__*/ __L.at(__c6, 2);
export type ThumbprintType = string;
export type ThumbprintListType = string[];
const ThumbprintListType = /*@__PURE__*/ __L.at(__c6, 3);
export interface CreateOpenIDConnectProviderRequest {
  Url: string;
  ClientIDList?: string[];
  ThumbprintList?: string[];
  Tags?: Tag[];
}
const CreateOpenIDConnectProviderRequest = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<CreateOpenIDConnectProviderRequest>;
export interface CreateOpenIDConnectProviderResponse {
  OpenIDConnectProviderArn?: string;
  Tags?: Tag[];
}
const CreateOpenIDConnectProviderResponse = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<CreateOpenIDConnectProviderResponse>;
export type PolicyNameType = string;
export type PolicyPathType = string;
export type PolicyDescriptionType = string;
export interface CreatePolicyRequest {
  PolicyName: string;
  Path?: string;
  PolicyDocument: string;
  Description?: string;
  Tags?: Tag[];
}
const CreatePolicyRequest = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<CreatePolicyRequest>;
export type PolicyVersionIdType = string;
export type AttachmentCountType = number;
export interface Policy {
  PolicyName?: string;
  PolicyId?: string;
  Arn?: string;
  Path?: string;
  DefaultVersionId?: string;
  AttachmentCount?: number;
  PermissionsBoundaryUsageCount?: number;
  IsAttachable?: boolean;
  Description?: string;
  CreateDate?: Date;
  UpdateDate?: Date;
  Tags?: Tag[];
}
const Policy = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<Policy>;
export interface CreatePolicyResponse {
  Policy?: Policy;
}
const CreatePolicyResponse = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<CreatePolicyResponse>;
export interface CreatePolicyVersionRequest {
  PolicyArn: string;
  PolicyDocument: string;
  SetAsDefault?: boolean;
}
const CreatePolicyVersionRequest = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<CreatePolicyVersionRequest>;
export interface PolicyVersion {
  Document?: string;
  VersionId?: string;
  IsDefaultVersion?: boolean;
  CreateDate?: Date;
}
const PolicyVersion = /*@__PURE__*/ __L.at(__c7, 2) as any as S.Schema<PolicyVersion>;
export interface CreatePolicyVersionResponse {
  PolicyVersion?: PolicyVersion;
}
const CreatePolicyVersionResponse = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<CreatePolicyVersionResponse>;
export interface CreateRoleRequest {
  Path?: string;
  RoleName: string;
  AssumeRolePolicyDocument: string;
  Description?: string;
  MaxSessionDuration?: number;
  PermissionsBoundary?: string;
  Tags?: Tag[];
}
const CreateRoleRequest = /*@__PURE__*/ __L.at(__c7, 4) as any as S.Schema<CreateRoleRequest>;
export interface CreateRoleResponse {
  Role: Role;
}
const CreateRoleResponse = /*@__PURE__*/ __L.at(__c7, 5) as any as S.Schema<CreateRoleResponse>;
export type SAMLMetadataDocumentType = string;
export type SAMLProviderNameType = string;
export type AssertionEncryptionModeType = "Required" | "Allowed" | (string & {});
const AssertionEncryptionModeType = S.String;

export type PrivateKeyType = string | redacted.Redacted<string>;
export interface CreateSAMLProviderRequest {
  SAMLMetadataDocument: string;
  Name: string;
  Tags?: Tag[];
  AssertionEncryptionMode?: AssertionEncryptionModeType;
  AddPrivateKey?: string | redacted.Redacted<string>;
}
const CreateSAMLProviderRequest = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<CreateSAMLProviderRequest>;
export interface CreateSAMLProviderResponse {
  SAMLProviderArn?: string;
  Tags?: Tag[];
}
const CreateSAMLProviderResponse = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<CreateSAMLProviderResponse>;
export type CustomSuffixType = string;
export interface CreateServiceLinkedRoleRequest {
  AWSServiceName: string;
  Description?: string;
  CustomSuffix?: string;
}
const CreateServiceLinkedRoleRequest = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<CreateServiceLinkedRoleRequest>;
export interface CreateServiceLinkedRoleResponse {
  Role?: Role;
}
const CreateServiceLinkedRoleResponse = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<CreateServiceLinkedRoleResponse>;
export type ServiceName = string;
export type CredentialAgeDays = number;
export interface CreateServiceSpecificCredentialRequest {
  UserName: string;
  ServiceName: string;
  CredentialAgeDays?: number;
}
const CreateServiceSpecificCredentialRequest = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<CreateServiceSpecificCredentialRequest>;
export type ServiceUserName = string;
export type ServicePassword = string | redacted.Redacted<string>;
export type ServiceCredentialAlias = string;
export type ServiceCredentialSecret = string | redacted.Redacted<string>;
export type ServiceSpecificCredentialId = string;
export interface ServiceSpecificCredential {
  CreateDate: Date;
  ExpirationDate?: Date;
  ServiceName: string;
  ServiceUserName?: string;
  ServicePassword?: string | redacted.Redacted<string>;
  ServiceCredentialAlias?: string;
  ServiceCredentialSecret?: string | redacted.Redacted<string>;
  ServiceSpecificCredentialId: string;
  UserName: string;
  Status: StatusType;
}
const ServiceSpecificCredential = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<ServiceSpecificCredential>;
export interface CreateServiceSpecificCredentialResponse {
  ServiceSpecificCredential?: ServiceSpecificCredential;
}
const CreateServiceSpecificCredentialResponse = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<CreateServiceSpecificCredentialResponse>;
export interface CreateUserRequest {
  Path?: string;
  UserName: string;
  PermissionsBoundary?: string;
  Tags?: Tag[];
}
const CreateUserRequest = /*@__PURE__*/ __L.at(__c8, 5) as any as S.Schema<CreateUserRequest>;
export interface User {
  Path: string;
  UserName: string;
  UserId: string;
  Arn: string;
  CreateDate: Date;
  PasswordLastUsed?: Date;
  PermissionsBoundary?: AttachedPermissionsBoundary;
  Tags?: Tag[];
}
const User = /*@__PURE__*/ __L.at(__c8, 6) as any as S.Schema<User>;
export interface CreateUserResponse {
  User?: User;
}
const CreateUserResponse = /*@__PURE__*/ __L.at(__c8, 7) as any as S.Schema<CreateUserResponse>;
export type VirtualMFADeviceName = string;
export interface CreateVirtualMFADeviceRequest {
  Path?: string;
  VirtualMFADeviceName: string;
  Tags?: Tag[];
}
const CreateVirtualMFADeviceRequest = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<CreateVirtualMFADeviceRequest>;
export type SerialNumberType = string;
export type BootstrapDatum = Uint8Array | redacted.Redacted<Uint8Array>;
export interface VirtualMFADevice {
  SerialNumber: string;
  Base32StringSeed?: Uint8Array | redacted.Redacted<Uint8Array>;
  QRCodePNG?: Uint8Array | redacted.Redacted<Uint8Array>;
  User?: User;
  EnableDate?: Date;
  Tags?: Tag[];
}
const VirtualMFADevice = /*@__PURE__*/ __L.at(__c9, 1) as any as S.Schema<VirtualMFADevice>;
export interface CreateVirtualMFADeviceResponse {
  VirtualMFADevice: VirtualMFADevice;
}
const CreateVirtualMFADeviceResponse = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<CreateVirtualMFADeviceResponse>;
export interface DeactivateMFADeviceRequest {
  UserName?: string;
  SerialNumber: string;
}
const DeactivateMFADeviceRequest = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<DeactivateMFADeviceRequest>;
export interface DeactivateMFADeviceResponse {}
const DeactivateMFADeviceResponse = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<DeactivateMFADeviceResponse>;
export interface DeleteAccessKeyRequest {
  UserName?: string;
  AccessKeyId: string;
}
const DeleteAccessKeyRequest = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<DeleteAccessKeyRequest>;
export interface DeleteAccessKeyResponse {}
const DeleteAccessKeyResponse = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<DeleteAccessKeyResponse>;
export interface DeleteAccountAliasRequest {
  AccountAlias: string;
}
const DeleteAccountAliasRequest = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<DeleteAccountAliasRequest>;
export interface DeleteAccountAliasResponse {}
const DeleteAccountAliasResponse = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<DeleteAccountAliasResponse>;
export interface DeleteAccountPasswordPolicyRequest {}
const DeleteAccountPasswordPolicyRequest = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<DeleteAccountPasswordPolicyRequest>;
export interface DeleteAccountPasswordPolicyResponse {}
const DeleteAccountPasswordPolicyResponse = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<DeleteAccountPasswordPolicyResponse>;
export interface DeleteGroupRequest {
  GroupName: string;
}
const DeleteGroupRequest = /*@__PURE__*/ __L.at(__c10, 3) as any as S.Schema<DeleteGroupRequest>;
export interface DeleteGroupResponse {}
const DeleteGroupResponse = /*@__PURE__*/ __L.at(__c10, 4) as any as S.Schema<DeleteGroupResponse>;
export interface DeleteGroupPolicyRequest {
  GroupName: string;
  PolicyName: string;
}
const DeleteGroupPolicyRequest = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<DeleteGroupPolicyRequest>;
export interface DeleteGroupPolicyResponse {}
const DeleteGroupPolicyResponse = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<DeleteGroupPolicyResponse>;
export interface DeleteInstanceProfileRequest {
  InstanceProfileName: string;
}
const DeleteInstanceProfileRequest = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<DeleteInstanceProfileRequest>;
export interface DeleteInstanceProfileResponse {}
const DeleteInstanceProfileResponse = /*@__PURE__*/ __L.at(
  __c11,
  0,
) as any as S.Schema<DeleteInstanceProfileResponse>;
export interface DeleteLoginProfileRequest {
  UserName?: string;
}
const DeleteLoginProfileRequest = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<DeleteLoginProfileRequest>;
export interface DeleteLoginProfileResponse {}
const DeleteLoginProfileResponse = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<DeleteLoginProfileResponse>;
export interface DeleteOpenIDConnectProviderRequest {
  OpenIDConnectProviderArn: string;
}
const DeleteOpenIDConnectProviderRequest = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<DeleteOpenIDConnectProviderRequest>;
export interface DeleteOpenIDConnectProviderResponse {}
const DeleteOpenIDConnectProviderResponse = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<DeleteOpenIDConnectProviderResponse>;
export interface DeletePolicyRequest {
  PolicyArn: string;
}
const DeletePolicyRequest = /*@__PURE__*/ __L.at(__c11, 5) as any as S.Schema<DeletePolicyRequest>;
export interface DeletePolicyResponse {}
const DeletePolicyResponse = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<DeletePolicyResponse>;
export interface DeletePolicyVersionRequest {
  PolicyArn: string;
  VersionId: string;
}
const DeletePolicyVersionRequest = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<DeletePolicyVersionRequest>;
export interface DeletePolicyVersionResponse {}
const DeletePolicyVersionResponse = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<DeletePolicyVersionResponse>;
export interface DeleteRoleRequest {
  RoleName: string;
}
const DeleteRoleRequest = /*@__PURE__*/ __L.at(__c12, 1) as any as S.Schema<DeleteRoleRequest>;
export interface DeleteRoleResponse {}
const DeleteRoleResponse = /*@__PURE__*/ __L.at(__c12, 2) as any as S.Schema<DeleteRoleResponse>;
export interface DeleteRolePermissionsBoundaryRequest {
  RoleName: string;
}
const DeleteRolePermissionsBoundaryRequest = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<DeleteRolePermissionsBoundaryRequest>;
export interface DeleteRolePermissionsBoundaryResponse {}
const DeleteRolePermissionsBoundaryResponse = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<DeleteRolePermissionsBoundaryResponse>;
export interface DeleteRolePolicyRequest {
  RoleName: string;
  PolicyName: string;
}
const DeleteRolePolicyRequest = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<DeleteRolePolicyRequest>;
export interface DeleteRolePolicyResponse {}
const DeleteRolePolicyResponse = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<DeleteRolePolicyResponse>;
export interface DeleteSAMLProviderRequest {
  SAMLProviderArn: string;
}
const DeleteSAMLProviderRequest = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<DeleteSAMLProviderRequest>;
export interface DeleteSAMLProviderResponse {}
const DeleteSAMLProviderResponse = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<DeleteSAMLProviderResponse>;
export type ServerCertificateNameType = string;
export interface DeleteServerCertificateRequest {
  ServerCertificateName: string;
}
const DeleteServerCertificateRequest = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<DeleteServerCertificateRequest>;
export interface DeleteServerCertificateResponse {}
const DeleteServerCertificateResponse = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<DeleteServerCertificateResponse>;
export interface DeleteServiceLinkedRoleRequest {
  RoleName: string;
}
const DeleteServiceLinkedRoleRequest = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<DeleteServiceLinkedRoleRequest>;
export type DeletionTaskIdType = string;
export interface DeleteServiceLinkedRoleResponse {
  DeletionTaskId: string;
}
const DeleteServiceLinkedRoleResponse = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<DeleteServiceLinkedRoleResponse>;
export interface DeleteServiceSpecificCredentialRequest {
  UserName?: string;
  ServiceSpecificCredentialId: string;
}
const DeleteServiceSpecificCredentialRequest = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<DeleteServiceSpecificCredentialRequest>;
export interface DeleteServiceSpecificCredentialResponse {}
const DeleteServiceSpecificCredentialResponse = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<DeleteServiceSpecificCredentialResponse>;
export type CertificateIdType = string;
export interface DeleteSigningCertificateRequest {
  UserName?: string;
  CertificateId: string;
}
const DeleteSigningCertificateRequest = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<DeleteSigningCertificateRequest>;
export interface DeleteSigningCertificateResponse {}
const DeleteSigningCertificateResponse = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<DeleteSigningCertificateResponse>;
export type PublicKeyIdType = string;
export interface DeleteSSHPublicKeyRequest {
  UserName: string;
  SSHPublicKeyId: string;
}
const DeleteSSHPublicKeyRequest = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<DeleteSSHPublicKeyRequest>;
export interface DeleteSSHPublicKeyResponse {}
const DeleteSSHPublicKeyResponse = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<DeleteSSHPublicKeyResponse>;
export interface DeleteUserRequest {
  UserName: string;
}
const DeleteUserRequest = /*@__PURE__*/ __L.at(__c14, 3) as any as S.Schema<DeleteUserRequest>;
export interface DeleteUserResponse {}
const DeleteUserResponse = /*@__PURE__*/ __L.at(__c14, 4) as any as S.Schema<DeleteUserResponse>;
export interface DeleteUserPermissionsBoundaryRequest {
  UserName: string;
}
const DeleteUserPermissionsBoundaryRequest = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<DeleteUserPermissionsBoundaryRequest>;
export interface DeleteUserPermissionsBoundaryResponse {}
const DeleteUserPermissionsBoundaryResponse = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<DeleteUserPermissionsBoundaryResponse>;
export interface DeleteUserPolicyRequest {
  UserName: string;
  PolicyName: string;
}
const DeleteUserPolicyRequest = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<DeleteUserPolicyRequest>;
export interface DeleteUserPolicyResponse {}
const DeleteUserPolicyResponse = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<DeleteUserPolicyResponse>;
export interface DeleteVirtualMFADeviceRequest {
  SerialNumber: string;
}
const DeleteVirtualMFADeviceRequest = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<DeleteVirtualMFADeviceRequest>;
export interface DeleteVirtualMFADeviceResponse {}
const DeleteVirtualMFADeviceResponse = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<DeleteVirtualMFADeviceResponse>;
export interface DetachGroupPolicyRequest {
  GroupName: string;
  PolicyArn: string;
}
const DetachGroupPolicyRequest = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<DetachGroupPolicyRequest>;
export interface DetachGroupPolicyResponse {}
const DetachGroupPolicyResponse = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<DetachGroupPolicyResponse>;
export interface DetachRolePolicyRequest {
  RoleName: string;
  PolicyArn: string;
}
const DetachRolePolicyRequest = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<DetachRolePolicyRequest>;
export interface DetachRolePolicyResponse {}
const DetachRolePolicyResponse = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<DetachRolePolicyResponse>;
export interface DetachUserPolicyRequest {
  UserName: string;
  PolicyArn: string;
}
const DetachUserPolicyRequest = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<DetachUserPolicyRequest>;
export interface DetachUserPolicyResponse {}
const DetachUserPolicyResponse = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<DetachUserPolicyResponse>;
export interface DisableOrganizationsRootCredentialsManagementRequest {}
const DisableOrganizationsRootCredentialsManagementRequest = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<DisableOrganizationsRootCredentialsManagementRequest>;
export type OrganizationIdType = string;
export type FeatureType = "RootCredentialsManagement" | "RootSessions" | (string & {});
const FeatureType = S.String;

export type FeaturesListType = FeatureType[];
const FeaturesListType = /*@__PURE__*/ __L.at(__c16, 2);
export interface DisableOrganizationsRootCredentialsManagementResponse {
  OrganizationId?: string;
  EnabledFeatures?: FeatureType[];
}
const DisableOrganizationsRootCredentialsManagementResponse = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<DisableOrganizationsRootCredentialsManagementResponse>;
export interface DisableOrganizationsRootSessionsRequest {}
const DisableOrganizationsRootSessionsRequest = /*@__PURE__*/ __L.at(
  __c16,
  4,
) as any as S.Schema<DisableOrganizationsRootSessionsRequest>;
export interface DisableOrganizationsRootSessionsResponse {
  OrganizationId?: string;
  EnabledFeatures?: FeatureType[];
}
const DisableOrganizationsRootSessionsResponse = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<DisableOrganizationsRootSessionsResponse>;
export interface DisableOutboundWebIdentityFederationRequest {}
const DisableOutboundWebIdentityFederationRequest = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<DisableOutboundWebIdentityFederationRequest>;
export interface DisableOutboundWebIdentityFederationResponse {}
const DisableOutboundWebIdentityFederationResponse = /*@__PURE__*/ __L.at(
  __c16,
  7,
) as any as S.Schema<DisableOutboundWebIdentityFederationResponse>;
export type AuthenticationCodeType = string;
export interface EnableMFADeviceRequest {
  UserName: string;
  SerialNumber: string;
  AuthenticationCode1: string;
  AuthenticationCode2: string;
}
const EnableMFADeviceRequest = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<EnableMFADeviceRequest>;
export interface EnableMFADeviceResponse {}
const EnableMFADeviceResponse = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<EnableMFADeviceResponse>;
export interface EnableOrganizationsRootCredentialsManagementRequest {}
const EnableOrganizationsRootCredentialsManagementRequest = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<EnableOrganizationsRootCredentialsManagementRequest>;
export interface EnableOrganizationsRootCredentialsManagementResponse {
  OrganizationId?: string;
  EnabledFeatures?: FeatureType[];
}
const EnableOrganizationsRootCredentialsManagementResponse = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<EnableOrganizationsRootCredentialsManagementResponse>;
export interface EnableOrganizationsRootSessionsRequest {}
const EnableOrganizationsRootSessionsRequest = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<EnableOrganizationsRootSessionsRequest>;
export interface EnableOrganizationsRootSessionsResponse {
  OrganizationId?: string;
  EnabledFeatures?: FeatureType[];
}
const EnableOrganizationsRootSessionsResponse = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<EnableOrganizationsRootSessionsResponse>;
export interface EnableOutboundWebIdentityFederationRequest {}
const EnableOutboundWebIdentityFederationRequest = /*@__PURE__*/ __L.at(
  __c17,
  6,
) as any as S.Schema<EnableOutboundWebIdentityFederationRequest>;
export interface EnableOutboundWebIdentityFederationResponse {
  IssuerIdentifier?: string;
}
const EnableOutboundWebIdentityFederationResponse = /*@__PURE__*/ __L.at(
  __c17,
  7,
) as any as S.Schema<EnableOutboundWebIdentityFederationResponse>;
export interface GenerateCredentialReportRequest {}
const GenerateCredentialReportRequest = /*@__PURE__*/ __L.at(
  __c18,
  0,
) as any as S.Schema<GenerateCredentialReportRequest>;
export type ReportStateType = "STARTED" | "INPROGRESS" | "COMPLETE" | (string & {});
const ReportStateType = S.String;

export type ReportStateDescriptionType = string;
export interface GenerateCredentialReportResponse {
  State?: ReportStateType;
  Description?: string;
}
const GenerateCredentialReportResponse = /*@__PURE__*/ __L.at(
  __c18,
  1,
) as any as S.Schema<GenerateCredentialReportResponse>;
export type OrganizationsEntityPathType = string;
export type OrganizationsPolicyIdType = string;
export interface GenerateOrganizationsAccessReportRequest {
  EntityPath: string;
  OrganizationsPolicyId?: string;
}
const GenerateOrganizationsAccessReportRequest = /*@__PURE__*/ __L.at(
  __c18,
  2,
) as any as S.Schema<GenerateOrganizationsAccessReportRequest>;
export type JobIDType = string;
export interface GenerateOrganizationsAccessReportResponse {
  JobId?: string;
}
const GenerateOrganizationsAccessReportResponse = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<GenerateOrganizationsAccessReportResponse>;
export type AccessAdvisorUsageGranularityType = "SERVICE_LEVEL" | "ACTION_LEVEL" | (string & {});
const AccessAdvisorUsageGranularityType = S.String;

export interface GenerateServiceLastAccessedDetailsRequest {
  Arn: string;
  Granularity?: AccessAdvisorUsageGranularityType;
}
const GenerateServiceLastAccessedDetailsRequest = /*@__PURE__*/ __L.at(
  __c18,
  4,
) as any as S.Schema<GenerateServiceLastAccessedDetailsRequest>;
export interface GenerateServiceLastAccessedDetailsResponse {
  JobId?: string;
}
const GenerateServiceLastAccessedDetailsResponse = /*@__PURE__*/ __L.at(
  __c18,
  5,
) as any as S.Schema<GenerateServiceLastAccessedDetailsResponse>;
export interface GetAccessKeyLastUsedRequest {
  AccessKeyId: string;
}
const GetAccessKeyLastUsedRequest = /*@__PURE__*/ __L.at(
  __c18,
  6,
) as any as S.Schema<GetAccessKeyLastUsedRequest>;
export interface AccessKeyLastUsed {
  LastUsedDate?: Date;
  ServiceName: string;
  Region: string;
}
const AccessKeyLastUsed = /*@__PURE__*/ __L.at(__c18, 7) as any as S.Schema<AccessKeyLastUsed>;
export interface GetAccessKeyLastUsedResponse {
  UserName?: string;
  AccessKeyLastUsed?: AccessKeyLastUsed;
}
const GetAccessKeyLastUsedResponse = /*@__PURE__*/ __L.at(
  __c19,
  0,
) as any as S.Schema<GetAccessKeyLastUsedResponse>;
export type EntityType =
  | "User"
  | "Role"
  | "Group"
  | "LocalManagedPolicy"
  | "AWSManagedPolicy"
  | (string & {});
const EntityType = S.String;

export type EntityListType = EntityType[];
const EntityListType = /*@__PURE__*/ __L.at(__c19, 1);
export type MaxItemsType = number;
export type MarkerType = string;
export interface GetAccountAuthorizationDetailsRequest {
  Filter?: EntityType[];
  MaxItems?: number;
  Marker?: string;
}
const GetAccountAuthorizationDetailsRequest = /*@__PURE__*/ __L.at(
  __c19,
  2,
) as any as S.Schema<GetAccountAuthorizationDetailsRequest>;
export interface PolicyDetail {
  PolicyName?: string;
  PolicyDocument?: string;
}
const PolicyDetail = /*@__PURE__*/ __L.at(__c19, 3) as any as S.Schema<PolicyDetail>;
export type PolicyDetailListType = PolicyDetail[];
const PolicyDetailListType = /*@__PURE__*/ __L.at(__c19, 4);
export type GroupNameListType = string[];
const GroupNameListType = /*@__PURE__*/ __L.at(__c19, 5);
export interface AttachedPolicy {
  PolicyName?: string;
  PolicyArn?: string;
}
const AttachedPolicy = /*@__PURE__*/ __L.at(__c19, 6) as any as S.Schema<AttachedPolicy>;
export type AttachedPoliciesListType = AttachedPolicy[];
const AttachedPoliciesListType = /*@__PURE__*/ __L.at(__c19, 7);
export interface UserDetail {
  Path?: string;
  UserName?: string;
  UserId?: string;
  Arn?: string;
  CreateDate?: Date;
  UserPolicyList?: PolicyDetail[];
  GroupList?: string[];
  AttachedManagedPolicies?: AttachedPolicy[];
  PermissionsBoundary?: AttachedPermissionsBoundary;
  Tags?: Tag[];
}
const UserDetail = /*@__PURE__*/ __L.at(__c20, 0) as any as S.Schema<UserDetail>;
export type UserDetailListType = UserDetail[];
const UserDetailListType = /*@__PURE__*/ __L.at(__c20, 1);
export interface GroupDetail {
  Path?: string;
  GroupName?: string;
  GroupId?: string;
  Arn?: string;
  CreateDate?: Date;
  GroupPolicyList?: PolicyDetail[];
  AttachedManagedPolicies?: AttachedPolicy[];
}
const GroupDetail = /*@__PURE__*/ __L.at(__c20, 2) as any as S.Schema<GroupDetail>;
export type GroupDetailListType = GroupDetail[];
const GroupDetailListType = /*@__PURE__*/ __L.at(__c20, 3);
export type InstanceProfileListType = InstanceProfile[];
const InstanceProfileListType = /*@__PURE__*/ __L.at(__c20, 4);
export interface RoleDetail {
  Path?: string;
  RoleName?: string;
  RoleId?: string;
  Arn?: string;
  CreateDate?: Date;
  AssumeRolePolicyDocument?: string;
  InstanceProfileList?: InstanceProfile[];
  RolePolicyList?: PolicyDetail[];
  AttachedManagedPolicies?: AttachedPolicy[];
  PermissionsBoundary?: AttachedPermissionsBoundary;
  Tags?: Tag[];
  RoleLastUsed?: RoleLastUsed;
}
const RoleDetail = /*@__PURE__*/ __L.at(__c20, 5) as any as S.Schema<RoleDetail>;
export type RoleDetailListType = RoleDetail[];
const RoleDetailListType = /*@__PURE__*/ __L.at(__c20, 6);
export type PolicyDocumentVersionListType = PolicyVersion[];
const PolicyDocumentVersionListType = /*@__PURE__*/ __L.at(__c20, 7);
export interface ManagedPolicyDetail {
  PolicyName?: string;
  PolicyId?: string;
  Arn?: string;
  Path?: string;
  DefaultVersionId?: string;
  AttachmentCount?: number;
  PermissionsBoundaryUsageCount?: number;
  IsAttachable?: boolean;
  Description?: string;
  CreateDate?: Date;
  UpdateDate?: Date;
  PolicyVersionList?: PolicyVersion[];
}
const ManagedPolicyDetail = /*@__PURE__*/ __L.at(__c21, 0) as any as S.Schema<ManagedPolicyDetail>;
export type ManagedPolicyDetailListType = ManagedPolicyDetail[];
const ManagedPolicyDetailListType = /*@__PURE__*/ __L.at(__c21, 1);
export type ResponseMarkerType = string;
export interface GetAccountAuthorizationDetailsResponse {
  UserDetailList?: UserDetail[];
  GroupDetailList?: GroupDetail[];
  RoleDetailList?: RoleDetail[];
  Policies?: ManagedPolicyDetail[];
  IsTruncated?: boolean;
  Marker?: string;
}
const GetAccountAuthorizationDetailsResponse = /*@__PURE__*/ __L.at(
  __c21,
  2,
) as any as S.Schema<GetAccountAuthorizationDetailsResponse>;
export interface GetAccountPasswordPolicyRequest {}
const GetAccountPasswordPolicyRequest = /*@__PURE__*/ __L.at(
  __c21,
  3,
) as any as S.Schema<GetAccountPasswordPolicyRequest>;
export type MinimumPasswordLengthType = number;
export type MaxPasswordAgeType = number;
export type PasswordReusePreventionType = number;
export type BooleanObjectType = boolean;
export interface PasswordPolicy {
  MinimumPasswordLength?: number;
  RequireSymbols?: boolean;
  RequireNumbers?: boolean;
  RequireUppercaseCharacters?: boolean;
  RequireLowercaseCharacters?: boolean;
  AllowUsersToChangePassword?: boolean;
  ExpirePasswords?: boolean;
  MaxPasswordAge?: number;
  PasswordReusePrevention?: number;
  HardExpiry?: boolean;
}
const PasswordPolicy = /*@__PURE__*/ __L.at(__c21, 4) as any as S.Schema<PasswordPolicy>;
export interface GetAccountPasswordPolicyResponse {
  PasswordPolicy: PasswordPolicy;
}
const GetAccountPasswordPolicyResponse = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<GetAccountPasswordPolicyResponse>;
export interface GetAccountPropertiesRequest {}
const GetAccountPropertiesRequest = /*@__PURE__*/ __L.at(
  __c21,
  6,
) as any as S.Schema<GetAccountPropertiesRequest>;
export type AccountPropertyKeyType = string;
export type AccountPropertyValueType = string;
export type AccountPropertiesMapType = { [key: string]: string | undefined };
const AccountPropertiesMapType = /*@__PURE__*/ __L.at(__c21, 7);
export interface GetAccountPropertiesResponse {
  Properties?: { [key: string]: string | undefined };
}
const GetAccountPropertiesResponse = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<GetAccountPropertiesResponse>;
export interface GetAccountSummaryRequest {}
const GetAccountSummaryRequest = /*@__PURE__*/ __L.at(
  __c22,
  1,
) as any as S.Schema<GetAccountSummaryRequest>;
export type SummaryKeyType =
  | "Users"
  | "UsersQuota"
  | "Groups"
  | "GroupsQuota"
  | "ServerCertificates"
  | "ServerCertificatesQuota"
  | "UserPolicySizeQuota"
  | "GroupPolicySizeQuota"
  | "GroupsPerUserQuota"
  | "SigningCertificatesPerUserQuota"
  | "AccessKeysPerUserQuota"
  | "MFADevices"
  | "MFADevicesInUse"
  | "AccountMFAEnabled"
  | "AccountAccessKeysPresent"
  | "AccountPasswordPresent"
  | "AccountSigningCertificatesPresent"
  | "AttachedPoliciesPerGroupQuota"
  | "AttachedPoliciesPerRoleQuota"
  | "AttachedPoliciesPerUserQuota"
  | "Policies"
  | "PoliciesQuota"
  | "PolicySizeQuota"
  | "PolicyVersionsInUse"
  | "PolicyVersionsInUseQuota"
  | "VersionsPerPolicyQuota"
  | "GlobalEndpointTokenVersion"
  | "AssumeRolePolicySizeQuota"
  | "InstanceProfiles"
  | "InstanceProfilesQuota"
  | "Providers"
  | "RolePolicySizeQuota"
  | "Roles"
  | "RolesQuota"
  | (string & {});
const SummaryKeyType = S.String;

export type SummaryValueType = number;
export type SummaryMapType = { [key in SummaryKeyType]?: number };
const SummaryMapType = /*@__PURE__*/ __L.at(__c22, 2);
export interface GetAccountSummaryResponse {
  SummaryMap?: { [key: string]: number | undefined };
}
const GetAccountSummaryResponse = /*@__PURE__*/ __L.at(
  __c22,
  3,
) as any as S.Schema<GetAccountSummaryResponse>;
export type SimulationPolicyListType = string[];
const SimulationPolicyListType = /*@__PURE__*/ __L.at(__c22, 4);
export interface GetContextKeysForCustomPolicyRequest {
  PolicyInputList: string[];
}
const GetContextKeysForCustomPolicyRequest = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<GetContextKeysForCustomPolicyRequest>;
export type ContextKeyNameType = string;
export type ContextKeyNamesResultListType = string[];
const ContextKeyNamesResultListType = /*@__PURE__*/ __L.at(__c22, 6);
export interface GetContextKeysForPolicyResponse {
  ContextKeyNames?: string[];
}
const GetContextKeysForPolicyResponse = /*@__PURE__*/ __L.at(
  __c22,
  7,
) as any as S.Schema<GetContextKeysForPolicyResponse>;
export interface GetContextKeysForPrincipalPolicyRequest {
  PolicySourceArn: string;
  PolicyInputList?: string[];
}
const GetContextKeysForPrincipalPolicyRequest = /*@__PURE__*/ __L.at(
  __c23,
  0,
) as any as S.Schema<GetContextKeysForPrincipalPolicyRequest>;
export interface GetCredentialReportRequest {}
const GetCredentialReportRequest = /*@__PURE__*/ __L.at(
  __c23,
  1,
) as any as S.Schema<GetCredentialReportRequest>;
export type ReportContentType = Uint8Array;
export type ReportFormatType = "text/csv" | (string & {});
const ReportFormatType = S.String;

export interface GetCredentialReportResponse {
  Content?: Uint8Array;
  ReportFormat?: ReportFormatType;
  GeneratedTime?: Date;
}
const GetCredentialReportResponse = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<GetCredentialReportResponse>;
export interface GetDelegationRequestRequest {
  DelegationRequestId: string;
  DelegationPermissionCheck?: boolean;
}
const GetDelegationRequestRequest = /*@__PURE__*/ __L.at(
  __c23,
  3,
) as any as S.Schema<GetDelegationRequestRequest>;
export type PermissionType = string;
export type RolePermissionRestrictionArnListType = string[];
const RolePermissionRestrictionArnListType = /*@__PURE__*/ __L.at(__c23, 4);
export type OwnerIdType = string;
export type StateType =
  | "UNASSIGNED"
  | "ASSIGNED"
  | "PENDING_APPROVAL"
  | "FINALIZED"
  | "ACCEPTED"
  | "REJECTED"
  | "EXPIRED"
  | (string & {});
const StateType = S.String;

export type RequestorNameType = string;
export type NotesType = string;
export interface DelegationRequest {
  DelegationRequestId?: string;
  OwnerAccountId?: string;
  Description?: string;
  RequestMessage?: string;
  Permissions?: DelegationPermission;
  PermissionPolicy?: string;
  RolePermissionRestrictionArns?: string[];
  OwnerId?: string;
  ApproverId?: string;
  State?: StateType;
  ExpirationTime?: Date;
  RequestorId?: string;
  RequestorName?: string;
  CreateDate?: Date;
  SessionDuration?: number;
  RedirectUrl?: string;
  Notes?: string;
  RejectionReason?: string;
  OnlySendByOwner?: boolean;
  UpdatedTime?: Date;
}
const DelegationRequest = /*@__PURE__*/ __L.at(__c23, 5) as any as S.Schema<DelegationRequest>;
export type PermissionCheckStatusType = "COMPLETE" | "IN_PROGRESS" | "FAILED" | (string & {});
const PermissionCheckStatusType = S.String;

export type PermissionCheckResultType = "ALLOWED" | "DENIED" | "UNSURE" | (string & {});
const PermissionCheckResultType = S.String;

export interface GetDelegationRequestResponse {
  DelegationRequest?: DelegationRequest;
  PermissionCheckStatus?: PermissionCheckStatusType;
  PermissionCheckResult?: PermissionCheckResultType;
}
const GetDelegationRequestResponse = /*@__PURE__*/ __L.at(
  __c23,
  6,
) as any as S.Schema<GetDelegationRequestResponse>;
export interface GetGroupRequest {
  GroupName: string;
  Marker?: string;
  MaxItems?: number;
}
const GetGroupRequest = /*@__PURE__*/ __L.at(__c23, 7) as any as S.Schema<GetGroupRequest>;
export type UserListType = User[];
const UserListType = /*@__PURE__*/ __L.at(__c24, 0);
export interface GetGroupResponse {
  Group: Group;
  Users: User[];
  IsTruncated?: boolean;
  Marker?: string;
}
const GetGroupResponse = /*@__PURE__*/ __L.at(__c24, 1) as any as S.Schema<GetGroupResponse>;
export interface GetGroupPolicyRequest {
  GroupName: string;
  PolicyName: string;
}
const GetGroupPolicyRequest = /*@__PURE__*/ __L.at(
  __c24,
  2,
) as any as S.Schema<GetGroupPolicyRequest>;
export interface GetGroupPolicyResponse {
  GroupName: string;
  PolicyName: string;
  PolicyDocument: string;
}
const GetGroupPolicyResponse = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<GetGroupPolicyResponse>;
export type LocaleType = string;
export interface GetHumanReadableSummaryRequest {
  EntityArn: string;
  Locale?: string;
}
const GetHumanReadableSummaryRequest = /*@__PURE__*/ __L.at(
  __c24,
  4,
) as any as S.Schema<GetHumanReadableSummaryRequest>;
export type SummaryContentType = string;
export type SummaryStateType =
  | "AVAILABLE"
  | "NOT_AVAILABLE"
  | "NOT_SUPPORTED"
  | "FAILED"
  | (string & {});
const SummaryStateType = S.String;

export interface GetHumanReadableSummaryResponse {
  SummaryContent?: string;
  Locale?: string;
  SummaryState?: SummaryStateType;
}
const GetHumanReadableSummaryResponse = /*@__PURE__*/ __L.at(
  __c24,
  5,
) as any as S.Schema<GetHumanReadableSummaryResponse>;
export interface GetInstanceProfileRequest {
  InstanceProfileName: string;
}
const GetInstanceProfileRequest = /*@__PURE__*/ __L.at(
  __c24,
  6,
) as any as S.Schema<GetInstanceProfileRequest>;
export interface GetInstanceProfileResponse {
  InstanceProfile: InstanceProfile;
}
const GetInstanceProfileResponse = /*@__PURE__*/ __L.at(
  __c24,
  7,
) as any as S.Schema<GetInstanceProfileResponse>;
export interface GetLoginProfileRequest {
  UserName?: string;
}
const GetLoginProfileRequest = /*@__PURE__*/ __L.at(
  __c25,
  0,
) as any as S.Schema<GetLoginProfileRequest>;
export interface GetLoginProfileResponse {
  LoginProfile: LoginProfile;
}
const GetLoginProfileResponse = /*@__PURE__*/ __L.at(
  __c25,
  1,
) as any as S.Schema<GetLoginProfileResponse>;
export interface GetMFADeviceRequest {
  SerialNumber: string;
  UserName?: string;
}
const GetMFADeviceRequest = /*@__PURE__*/ __L.at(__c25, 2) as any as S.Schema<GetMFADeviceRequest>;
export type CertificationKeyType = string;
export type CertificationValueType = string;
export type CertificationMapType = { [key: string]: string | undefined };
const CertificationMapType = /*@__PURE__*/ __L.at(__c25, 3);
export interface GetMFADeviceResponse {
  UserName?: string;
  SerialNumber: string;
  EnableDate?: Date;
  Certifications?: { [key: string]: string | undefined };
}
const GetMFADeviceResponse = /*@__PURE__*/ __L.at(
  __c25,
  4,
) as any as S.Schema<GetMFADeviceResponse>;
export interface GetOpenIDConnectProviderRequest {
  OpenIDConnectProviderArn: string;
}
const GetOpenIDConnectProviderRequest = /*@__PURE__*/ __L.at(
  __c25,
  5,
) as any as S.Schema<GetOpenIDConnectProviderRequest>;
export interface GetOpenIDConnectProviderResponse {
  Url?: string;
  ClientIDList?: string[];
  ThumbprintList?: string[];
  CreateDate?: Date;
  Tags?: Tag[];
}
const GetOpenIDConnectProviderResponse = /*@__PURE__*/ __L.at(
  __c25,
  6,
) as any as S.Schema<GetOpenIDConnectProviderResponse>;
export type SortKeyType =
  | "SERVICE_NAMESPACE_ASCENDING"
  | "SERVICE_NAMESPACE_DESCENDING"
  | "LAST_AUTHENTICATED_TIME_ASCENDING"
  | "LAST_AUTHENTICATED_TIME_DESCENDING"
  | (string & {});
const SortKeyType = S.String;

export interface GetOrganizationsAccessReportRequest {
  JobId: string;
  MaxItems?: number;
  Marker?: string;
  SortKey?: SortKeyType;
}
const GetOrganizationsAccessReportRequest = /*@__PURE__*/ __L.at(
  __c25,
  7,
) as any as S.Schema<GetOrganizationsAccessReportRequest>;
export type JobStatusType = "IN_PROGRESS" | "COMPLETED" | "FAILED" | (string & {});
const JobStatusType = S.String;

export type ServiceNameType = string;
export type ServiceNamespaceType = string;
export interface AccessDetail {
  ServiceName: string;
  ServiceNamespace: string;
  Region?: string;
  EntityPath?: string;
  LastAuthenticatedTime?: Date;
  TotalAuthenticatedEntities?: number;
}
const AccessDetail = /*@__PURE__*/ __L.at(__c26, 0) as any as S.Schema<AccessDetail>;
export type AccessDetails = AccessDetail[];
const AccessDetails = /*@__PURE__*/ __L.at(__c26, 1);
export interface ErrorDetails {
  Message: string;
  Code: string;
}
const ErrorDetails = /*@__PURE__*/ __L.at(__c26, 2) as any as S.Schema<ErrorDetails>;
export interface GetOrganizationsAccessReportResponse {
  JobStatus: JobStatusType;
  JobCreationDate: Date;
  JobCompletionDate?: Date;
  NumberOfServicesAccessible?: number;
  NumberOfServicesNotAccessed?: number;
  AccessDetails?: AccessDetail[];
  IsTruncated?: boolean;
  Marker?: string;
  ErrorDetails?: ErrorDetails;
}
const GetOrganizationsAccessReportResponse = /*@__PURE__*/ __L.at(
  __c26,
  3,
) as any as S.Schema<GetOrganizationsAccessReportResponse>;
export interface GetOutboundWebIdentityFederationInfoRequest {}
const GetOutboundWebIdentityFederationInfoRequest = /*@__PURE__*/ __L.at(
  __c26,
  4,
) as any as S.Schema<GetOutboundWebIdentityFederationInfoRequest>;
export interface GetOutboundWebIdentityFederationInfoResponse {
  IssuerIdentifier?: string;
  JwtVendingEnabled?: boolean;
}
const GetOutboundWebIdentityFederationInfoResponse = /*@__PURE__*/ __L.at(
  __c26,
  5,
) as any as S.Schema<GetOutboundWebIdentityFederationInfoResponse>;
export interface GetPolicyRequest {
  PolicyArn: string;
}
const GetPolicyRequest = /*@__PURE__*/ __L.at(__c26, 6) as any as S.Schema<GetPolicyRequest>;
export interface GetPolicyResponse {
  Policy?: Policy;
}
const GetPolicyResponse = /*@__PURE__*/ __L.at(__c26, 7) as any as S.Schema<GetPolicyResponse>;
export interface GetPolicyVersionRequest {
  PolicyArn: string;
  VersionId: string;
}
const GetPolicyVersionRequest = /*@__PURE__*/ __L.at(
  __c27,
  0,
) as any as S.Schema<GetPolicyVersionRequest>;
export interface GetPolicyVersionResponse {
  PolicyVersion?: PolicyVersion;
}
const GetPolicyVersionResponse = /*@__PURE__*/ __L.at(
  __c27,
  1,
) as any as S.Schema<GetPolicyVersionResponse>;
export interface GetRoleRequest {
  RoleName: string;
}
const GetRoleRequest = /*@__PURE__*/ __L.at(__c27, 2) as any as S.Schema<GetRoleRequest>;
export interface GetRoleResponse {
  Role: Role;
}
const GetRoleResponse = /*@__PURE__*/ __L.at(__c27, 3) as any as S.Schema<GetRoleResponse>;
export interface GetRolePolicyRequest {
  RoleName: string;
  PolicyName: string;
}
const GetRolePolicyRequest = /*@__PURE__*/ __L.at(
  __c27,
  4,
) as any as S.Schema<GetRolePolicyRequest>;
export interface GetRolePolicyResponse {
  RoleName: string;
  PolicyName: string;
  PolicyDocument: string;
}
const GetRolePolicyResponse = /*@__PURE__*/ __L.at(
  __c27,
  5,
) as any as S.Schema<GetRolePolicyResponse>;
export type MinorVersionType = number;
export interface GetRoleTemplateVersionRequest {
  TemplateArn: string;
  MinorVersion?: number;
}
const GetRoleTemplateVersionRequest = /*@__PURE__*/ __L.at(
  __c27,
  6,
) as any as S.Schema<GetRoleTemplateVersionRequest>;
export type RoleTemplateNameType = string;
export type RoleTemplateDescriptionType = string;
export type ManagedByTypeType = "Service" | (string & {});
const ManagedByTypeType = S.String;

export type ManagedByValueType = string;
export type RoleNamePatternType = string;
export type RolePathPatternType = string;
export type RoleDescriptionPatternType = string;
export interface InlinePolicy {
  PolicyName: string;
  PolicyDocument: string;
}
const InlinePolicy = /*@__PURE__*/ __L.at(__c27, 7) as any as S.Schema<InlinePolicy>;
export type InlinePolicyTemplateListType = InlinePolicy[];
const InlinePolicyTemplateListType = /*@__PURE__*/ __L.at(__c28, 0);
export type ManagedPolicyArnListType = string[];
const ManagedPolicyArnListType = /*@__PURE__*/ __L.at(__c28, 1);
export type ParameterNameType = string;
export type ParameterTypeType =
  | "String"
  | "StringList"
  | "Number"
  | "NumberList"
  | "Arn"
  | "ArnList"
  | (string & {});
const ParameterTypeType = S.String;

export type ParameterSubTypeType = string;
export type ParameterDescriptionType = string;
export type ParameterDefaultValueType = string;
export interface ParameterDefinition {
  Name: string;
  Type: ParameterTypeType;
  SubType?: string;
  Description?: string;
  IsRequired?: boolean;
  DefaultValue?: string;
  Immutable?: boolean;
}
const ParameterDefinition = /*@__PURE__*/ __L.at(__c28, 2) as any as S.Schema<ParameterDefinition>;
export type ParametersDefinitionListType = ParameterDefinition[];
const ParametersDefinitionListType = /*@__PURE__*/ __L.at(__c28, 3);
export type TagTemplateKeyType = string;
export type TagTemplateValueType = string;
export interface TagTemplate {
  Key: string;
  Value: string;
}
const TagTemplate = /*@__PURE__*/ __L.at(__c28, 4) as any as S.Schema<TagTemplate>;
export type TagTemplateListType = TagTemplate[];
const TagTemplateListType = /*@__PURE__*/ __L.at(__c28, 5);
export interface RoleTemplateVersion {
  TemplateArn?: string;
  TemplateName?: string;
  TemplateVersionId?: string;
  Description?: string;
  MajorVersion?: number;
  DefaultMinorVersion?: number;
  ManagedByType?: ManagedByTypeType;
  ManagedByValue?: string;
  Enabled?: boolean;
  MinorVersion?: number;
  RoleNamePattern?: string;
  RolePathPattern?: string;
  RoleDescriptionPattern?: string;
  AssumeRolePolicyDocumentTemplate?: string;
  InlinePolicyTemplates?: InlinePolicy[];
  ManagedPolicyArns?: string[];
  PermissionBoundaryArn?: string;
  ParametersDefinition?: ParameterDefinition[];
  RoleTagsTemplate?: TagTemplate[];
  MaxSessionDuration?: number;
  VersionEnabled?: boolean;
  CreateTimestamp?: Date;
  UpdateTimestamp?: Date;
}
const RoleTemplateVersion = /*@__PURE__*/ __L.at(__c28, 6) as any as S.Schema<RoleTemplateVersion>;
export interface GetRoleTemplateVersionResponse {
  RoleTemplateVersion: RoleTemplateVersion;
}
const GetRoleTemplateVersionResponse = /*@__PURE__*/ __L.at(
  __c28,
  7,
) as any as S.Schema<GetRoleTemplateVersionResponse>;
export interface GetSAMLProviderRequest {
  SAMLProviderArn: string;
}
const GetSAMLProviderRequest = /*@__PURE__*/ __L.at(
  __c29,
  0,
) as any as S.Schema<GetSAMLProviderRequest>;
export type PrivateKeyIdType = string;
export interface SAMLPrivateKey {
  KeyId?: string;
  Timestamp?: Date;
}
const SAMLPrivateKey = /*@__PURE__*/ __L.at(__c29, 1) as any as S.Schema<SAMLPrivateKey>;
export type PrivateKeyList = SAMLPrivateKey[];
const PrivateKeyList = /*@__PURE__*/ __L.at(__c29, 2);
export interface GetSAMLProviderResponse {
  SAMLProviderUUID?: string;
  SAMLMetadataDocument?: string;
  CreateDate?: Date;
  ValidUntil?: Date;
  Tags?: Tag[];
  AssertionEncryptionMode?: AssertionEncryptionModeType;
  PrivateKeyList?: SAMLPrivateKey[];
}
const GetSAMLProviderResponse = /*@__PURE__*/ __L.at(
  __c29,
  3,
) as any as S.Schema<GetSAMLProviderResponse>;
export interface GetServerCertificateRequest {
  ServerCertificateName: string;
}
const GetServerCertificateRequest = /*@__PURE__*/ __L.at(
  __c29,
  4,
) as any as S.Schema<GetServerCertificateRequest>;
export interface ServerCertificateMetadata {
  Path: string;
  ServerCertificateName: string;
  ServerCertificateId: string;
  Arn: string;
  UploadDate?: Date;
  Expiration?: Date;
}
const ServerCertificateMetadata = /*@__PURE__*/ __L.at(
  __c29,
  5,
) as any as S.Schema<ServerCertificateMetadata>;
export type CertificateBodyType = string;
export type CertificateChainType = string;
export interface ServerCertificate {
  ServerCertificateMetadata: ServerCertificateMetadata;
  CertificateBody: string;
  CertificateChain?: string;
  Tags?: Tag[];
}
const ServerCertificate = /*@__PURE__*/ __L.at(__c29, 6) as any as S.Schema<ServerCertificate>;
export interface GetServerCertificateResponse {
  ServerCertificate: ServerCertificate;
}
const GetServerCertificateResponse = /*@__PURE__*/ __L.at(
  __c29,
  7,
) as any as S.Schema<GetServerCertificateResponse>;
export interface GetServiceLastAccessedDetailsRequest {
  JobId: string;
  MaxItems?: number;
  Marker?: string;
}
const GetServiceLastAccessedDetailsRequest = /*@__PURE__*/ __L.at(
  __c30,
  0,
) as any as S.Schema<GetServiceLastAccessedDetailsRequest>;
export interface TrackedActionLastAccessed {
  ActionName?: string;
  LastAccessedEntity?: string;
  LastAccessedTime?: Date;
  LastAccessedRegion?: string;
}
const TrackedActionLastAccessed = /*@__PURE__*/ __L.at(
  __c30,
  1,
) as any as S.Schema<TrackedActionLastAccessed>;
export type TrackedActionsLastAccessed = TrackedActionLastAccessed[];
const TrackedActionsLastAccessed = /*@__PURE__*/ __L.at(__c30, 2);
export interface ServiceLastAccessed {
  ServiceName: string;
  LastAuthenticated?: Date;
  ServiceNamespace: string;
  LastAuthenticatedEntity?: string;
  LastAuthenticatedRegion?: string;
  TotalAuthenticatedEntities?: number;
  TrackedActionsLastAccessed?: TrackedActionLastAccessed[];
}
const ServiceLastAccessed = /*@__PURE__*/ __L.at(__c30, 3) as any as S.Schema<ServiceLastAccessed>;
export type ServicesLastAccessed = ServiceLastAccessed[];
const ServicesLastAccessed = /*@__PURE__*/ __L.at(__c30, 4);
export interface GetServiceLastAccessedDetailsResponse {
  JobStatus: JobStatusType;
  JobType?: AccessAdvisorUsageGranularityType;
  JobCreationDate: Date;
  ServicesLastAccessed: ServiceLastAccessed[];
  JobCompletionDate: Date;
  IsTruncated?: boolean;
  Marker?: string;
  Error?: ErrorDetails;
}
const GetServiceLastAccessedDetailsResponse = /*@__PURE__*/ __L.at(
  __c30,
  5,
) as any as S.Schema<GetServiceLastAccessedDetailsResponse>;
export interface GetServiceLastAccessedDetailsWithEntitiesRequest {
  JobId: string;
  ServiceNamespace: string;
  MaxItems?: number;
  Marker?: string;
}
const GetServiceLastAccessedDetailsWithEntitiesRequest = /*@__PURE__*/ __L.at(
  __c30,
  6,
) as any as S.Schema<GetServiceLastAccessedDetailsWithEntitiesRequest>;
export type PolicyOwnerEntityType = "USER" | "ROLE" | "GROUP" | (string & {});
const PolicyOwnerEntityType = S.String;

export interface EntityInfo {
  Arn: string;
  Name: string;
  Type: PolicyOwnerEntityType;
  Id: string;
  Path?: string;
}
const EntityInfo = /*@__PURE__*/ __L.at(__c30, 7) as any as S.Schema<EntityInfo>;
export interface EntityDetails {
  EntityInfo: EntityInfo;
  LastAuthenticated?: Date;
}
const EntityDetails = /*@__PURE__*/ __L.at(__c31, 0) as any as S.Schema<EntityDetails>;
export type EntityDetailsListType = EntityDetails[];
const EntityDetailsListType = /*@__PURE__*/ __L.at(__c31, 1);
export interface GetServiceLastAccessedDetailsWithEntitiesResponse {
  JobStatus: JobStatusType;
  JobCreationDate: Date;
  JobCompletionDate: Date;
  EntityDetailsList: EntityDetails[];
  IsTruncated?: boolean;
  Marker?: string;
  Error?: ErrorDetails;
}
const GetServiceLastAccessedDetailsWithEntitiesResponse = /*@__PURE__*/ __L.at(
  __c31,
  2,
) as any as S.Schema<GetServiceLastAccessedDetailsWithEntitiesResponse>;
export interface GetServiceLinkedRoleDeletionStatusRequest {
  DeletionTaskId: string;
}
const GetServiceLinkedRoleDeletionStatusRequest = /*@__PURE__*/ __L.at(
  __c31,
  3,
) as any as S.Schema<GetServiceLinkedRoleDeletionStatusRequest>;
export type DeletionTaskStatusType =
  | "SUCCEEDED"
  | "IN_PROGRESS"
  | "FAILED"
  | "NOT_STARTED"
  | (string & {});
const DeletionTaskStatusType = S.String;

export type ReasonType = string;
export type RegionNameType = string;
export type ArnListType = string[];
const ArnListType = /*@__PURE__*/ __L.at(__c31, 4);
export interface RoleUsageType {
  Region?: string;
  Resources?: string[];
}
const RoleUsageType = /*@__PURE__*/ __L.at(__c31, 5) as any as S.Schema<RoleUsageType>;
export type RoleUsageListType = RoleUsageType[];
const RoleUsageListType = /*@__PURE__*/ __L.at(__c31, 6);
export interface DeletionTaskFailureReasonType {
  Reason?: string;
  RoleUsageList?: RoleUsageType[];
}
const DeletionTaskFailureReasonType = /*@__PURE__*/ __L.at(
  __c31,
  7,
) as any as S.Schema<DeletionTaskFailureReasonType>;
export interface GetServiceLinkedRoleDeletionStatusResponse {
  Status: DeletionTaskStatusType;
  Reason?: DeletionTaskFailureReasonType;
}
const GetServiceLinkedRoleDeletionStatusResponse = /*@__PURE__*/ __L.at(
  __c32,
  0,
) as any as S.Schema<GetServiceLinkedRoleDeletionStatusResponse>;
export type EncodingType = "SSH" | "PEM" | (string & {});
const EncodingType = S.String;

export interface GetSSHPublicKeyRequest {
  UserName: string;
  SSHPublicKeyId: string;
  Encoding: EncodingType;
}
const GetSSHPublicKeyRequest = /*@__PURE__*/ __L.at(
  __c32,
  1,
) as any as S.Schema<GetSSHPublicKeyRequest>;
export type PublicKeyFingerprintType = string;
export type PublicKeyMaterialType = string;
export interface SSHPublicKey {
  UserName: string;
  SSHPublicKeyId: string;
  Fingerprint: string;
  SSHPublicKeyBody: string;
  Status: StatusType;
  UploadDate?: Date;
}
const SSHPublicKey = /*@__PURE__*/ __L.at(__c32, 2) as any as S.Schema<SSHPublicKey>;
export interface GetSSHPublicKeyResponse {
  SSHPublicKey?: SSHPublicKey;
}
const GetSSHPublicKeyResponse = /*@__PURE__*/ __L.at(
  __c32,
  3,
) as any as S.Schema<GetSSHPublicKeyResponse>;
export interface GetUserRequest {
  UserName?: string;
}
const GetUserRequest = /*@__PURE__*/ __L.at(__c32, 4) as any as S.Schema<GetUserRequest>;
export interface GetUserResponse {
  User: User;
}
const GetUserResponse = /*@__PURE__*/ __L.at(__c32, 5) as any as S.Schema<GetUserResponse>;
export interface GetUserPolicyRequest {
  UserName: string;
  PolicyName: string;
}
const GetUserPolicyRequest = /*@__PURE__*/ __L.at(
  __c32,
  6,
) as any as S.Schema<GetUserPolicyRequest>;
export interface GetUserPolicyResponse {
  UserName: string;
  PolicyName: string;
  PolicyDocument: string;
}
const GetUserPolicyResponse = /*@__PURE__*/ __L.at(
  __c32,
  7,
) as any as S.Schema<GetUserPolicyResponse>;
export interface ListAccessKeysRequest {
  UserName?: string;
  Marker?: string;
  MaxItems?: number;
}
const ListAccessKeysRequest = /*@__PURE__*/ __L.at(
  __c33,
  0,
) as any as S.Schema<ListAccessKeysRequest>;
export interface AccessKeyMetadata {
  UserName?: string;
  AccessKeyId?: string;
  Status?: StatusType;
  CreateDate?: Date;
}
const AccessKeyMetadata = /*@__PURE__*/ __L.at(__c33, 1) as any as S.Schema<AccessKeyMetadata>;
export type AccessKeyMetadataListType = AccessKeyMetadata[];
const AccessKeyMetadataListType = /*@__PURE__*/ __L.at(__c33, 2);
export interface ListAccessKeysResponse {
  AccessKeyMetadata: AccessKeyMetadata[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListAccessKeysResponse = /*@__PURE__*/ __L.at(
  __c33,
  3,
) as any as S.Schema<ListAccessKeysResponse>;
export interface ListAccountAliasesRequest {
  Marker?: string;
  MaxItems?: number;
}
const ListAccountAliasesRequest = /*@__PURE__*/ __L.at(
  __c33,
  4,
) as any as S.Schema<ListAccountAliasesRequest>;
export type AccountAliasListType = string[];
const AccountAliasListType = /*@__PURE__*/ __L.at(__c33, 5);
export interface ListAccountAliasesResponse {
  AccountAliases: string[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListAccountAliasesResponse = /*@__PURE__*/ __L.at(
  __c33,
  6,
) as any as S.Schema<ListAccountAliasesResponse>;
export interface ListAttachedGroupPoliciesRequest {
  GroupName: string;
  PathPrefix?: string;
  Marker?: string;
  MaxItems?: number;
}
const ListAttachedGroupPoliciesRequest = /*@__PURE__*/ __L.at(
  __c33,
  7,
) as any as S.Schema<ListAttachedGroupPoliciesRequest>;
export interface ListAttachedGroupPoliciesResponse {
  AttachedPolicies?: AttachedPolicy[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListAttachedGroupPoliciesResponse = /*@__PURE__*/ __L.at(
  __c34,
  0,
) as any as S.Schema<ListAttachedGroupPoliciesResponse>;
export interface ListAttachedRolePoliciesRequest {
  RoleName: string;
  PathPrefix?: string;
  Marker?: string;
  MaxItems?: number;
}
const ListAttachedRolePoliciesRequest = /*@__PURE__*/ __L.at(
  __c34,
  1,
) as any as S.Schema<ListAttachedRolePoliciesRequest>;
export interface ListAttachedRolePoliciesResponse {
  AttachedPolicies?: AttachedPolicy[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListAttachedRolePoliciesResponse = /*@__PURE__*/ __L.at(
  __c34,
  2,
) as any as S.Schema<ListAttachedRolePoliciesResponse>;
export interface ListAttachedUserPoliciesRequest {
  UserName: string;
  PathPrefix?: string;
  Marker?: string;
  MaxItems?: number;
}
const ListAttachedUserPoliciesRequest = /*@__PURE__*/ __L.at(
  __c34,
  3,
) as any as S.Schema<ListAttachedUserPoliciesRequest>;
export interface ListAttachedUserPoliciesResponse {
  AttachedPolicies?: AttachedPolicy[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListAttachedUserPoliciesResponse = /*@__PURE__*/ __L.at(
  __c34,
  4,
) as any as S.Schema<ListAttachedUserPoliciesResponse>;
export interface ListDelegationRequestsRequest {
  OwnerId?: string;
  Marker?: string;
  MaxItems?: number;
}
const ListDelegationRequestsRequest = /*@__PURE__*/ __L.at(
  __c34,
  5,
) as any as S.Schema<ListDelegationRequestsRequest>;
export type DelegationRequestsListType = DelegationRequest[];
const DelegationRequestsListType = /*@__PURE__*/ __L.at(__c34, 6);
export interface ListDelegationRequestsResponse {
  DelegationRequests?: DelegationRequest[];
  Marker?: string;
  isTruncated?: boolean;
}
const ListDelegationRequestsResponse = /*@__PURE__*/ __L.at(
  __c34,
  7,
) as any as S.Schema<ListDelegationRequestsResponse>;
export type PolicyUsageType = "PermissionsPolicy" | "PermissionsBoundary" | (string & {});
const PolicyUsageType = S.String;

export interface ListEntitiesForPolicyRequest {
  PolicyArn: string;
  EntityFilter?: EntityType;
  PathPrefix?: string;
  PolicyUsageFilter?: PolicyUsageType;
  Marker?: string;
  MaxItems?: number;
}
const ListEntitiesForPolicyRequest = /*@__PURE__*/ __L.at(
  __c35,
  0,
) as any as S.Schema<ListEntitiesForPolicyRequest>;
export interface PolicyGroup {
  GroupName?: string;
  GroupId?: string;
}
const PolicyGroup = /*@__PURE__*/ __L.at(__c35, 1) as any as S.Schema<PolicyGroup>;
export type PolicyGroupListType = PolicyGroup[];
const PolicyGroupListType = /*@__PURE__*/ __L.at(__c35, 2);
export interface PolicyUser {
  UserName?: string;
  UserId?: string;
}
const PolicyUser = /*@__PURE__*/ __L.at(__c35, 3) as any as S.Schema<PolicyUser>;
export type PolicyUserListType = PolicyUser[];
const PolicyUserListType = /*@__PURE__*/ __L.at(__c35, 4);
export interface PolicyRole {
  RoleName?: string;
  RoleId?: string;
}
const PolicyRole = /*@__PURE__*/ __L.at(__c35, 5) as any as S.Schema<PolicyRole>;
export type PolicyRoleListType = PolicyRole[];
const PolicyRoleListType = /*@__PURE__*/ __L.at(__c35, 6);
export interface ListEntitiesForPolicyResponse {
  PolicyGroups?: PolicyGroup[];
  PolicyUsers?: PolicyUser[];
  PolicyRoles?: PolicyRole[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListEntitiesForPolicyResponse = /*@__PURE__*/ __L.at(
  __c35,
  7,
) as any as S.Schema<ListEntitiesForPolicyResponse>;
export interface ListGroupPoliciesRequest {
  GroupName: string;
  Marker?: string;
  MaxItems?: number;
}
const ListGroupPoliciesRequest = /*@__PURE__*/ __L.at(
  __c36,
  0,
) as any as S.Schema<ListGroupPoliciesRequest>;
export type PolicyNameListType = string[];
const PolicyNameListType = /*@__PURE__*/ __L.at(__c36, 1);
export interface ListGroupPoliciesResponse {
  PolicyNames: string[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListGroupPoliciesResponse = /*@__PURE__*/ __L.at(
  __c36,
  2,
) as any as S.Schema<ListGroupPoliciesResponse>;
export type PathPrefixType = string;
export interface ListGroupsRequest {
  PathPrefix?: string;
  Marker?: string;
  MaxItems?: number;
}
const ListGroupsRequest = /*@__PURE__*/ __L.at(__c36, 3) as any as S.Schema<ListGroupsRequest>;
export type GroupListType = Group[];
const GroupListType = /*@__PURE__*/ __L.at(__c36, 4);
export interface ListGroupsResponse {
  Groups: Group[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListGroupsResponse = /*@__PURE__*/ __L.at(__c36, 5) as any as S.Schema<ListGroupsResponse>;
export interface ListGroupsForUserRequest {
  UserName: string;
  Marker?: string;
  MaxItems?: number;
}
const ListGroupsForUserRequest = /*@__PURE__*/ __L.at(
  __c36,
  6,
) as any as S.Schema<ListGroupsForUserRequest>;
export interface ListGroupsForUserResponse {
  Groups: Group[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListGroupsForUserResponse = /*@__PURE__*/ __L.at(
  __c36,
  7,
) as any as S.Schema<ListGroupsForUserResponse>;
export interface ListInstanceProfilesRequest {
  PathPrefix?: string;
  Marker?: string;
  MaxItems?: number;
}
const ListInstanceProfilesRequest = /*@__PURE__*/ __L.at(
  __c37,
  0,
) as any as S.Schema<ListInstanceProfilesRequest>;
export interface ListInstanceProfilesResponse {
  InstanceProfiles: InstanceProfile[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListInstanceProfilesResponse = /*@__PURE__*/ __L.at(
  __c37,
  1,
) as any as S.Schema<ListInstanceProfilesResponse>;
export interface ListInstanceProfilesForRoleRequest {
  RoleName: string;
  Marker?: string;
  MaxItems?: number;
}
const ListInstanceProfilesForRoleRequest = /*@__PURE__*/ __L.at(
  __c37,
  2,
) as any as S.Schema<ListInstanceProfilesForRoleRequest>;
export interface ListInstanceProfilesForRoleResponse {
  InstanceProfiles: InstanceProfile[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListInstanceProfilesForRoleResponse = /*@__PURE__*/ __L.at(
  __c37,
  3,
) as any as S.Schema<ListInstanceProfilesForRoleResponse>;
export interface ListInstanceProfileTagsRequest {
  InstanceProfileName: string;
  Marker?: string;
  MaxItems?: number;
}
const ListInstanceProfileTagsRequest = /*@__PURE__*/ __L.at(
  __c37,
  4,
) as any as S.Schema<ListInstanceProfileTagsRequest>;
export interface ListInstanceProfileTagsResponse {
  Tags: Tag[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListInstanceProfileTagsResponse = /*@__PURE__*/ __L.at(
  __c37,
  5,
) as any as S.Schema<ListInstanceProfileTagsResponse>;
export interface ListMFADevicesRequest {
  UserName?: string;
  Marker?: string;
  MaxItems?: number;
}
const ListMFADevicesRequest = /*@__PURE__*/ __L.at(
  __c37,
  6,
) as any as S.Schema<ListMFADevicesRequest>;
export interface MFADevice {
  UserName: string;
  SerialNumber: string;
  EnableDate: Date;
}
const MFADevice = /*@__PURE__*/ __L.at(__c37, 7) as any as S.Schema<MFADevice>;
export type MfaDeviceListType = MFADevice[];
const MfaDeviceListType = /*@__PURE__*/ __L.at(__c38, 0);
export interface ListMFADevicesResponse {
  MFADevices: MFADevice[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListMFADevicesResponse = /*@__PURE__*/ __L.at(
  __c38,
  1,
) as any as S.Schema<ListMFADevicesResponse>;
export interface ListMFADeviceTagsRequest {
  SerialNumber: string;
  Marker?: string;
  MaxItems?: number;
}
const ListMFADeviceTagsRequest = /*@__PURE__*/ __L.at(
  __c38,
  2,
) as any as S.Schema<ListMFADeviceTagsRequest>;
export interface ListMFADeviceTagsResponse {
  Tags: Tag[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListMFADeviceTagsResponse = /*@__PURE__*/ __L.at(
  __c38,
  3,
) as any as S.Schema<ListMFADeviceTagsResponse>;
export interface ListOpenIDConnectProvidersRequest {}
const ListOpenIDConnectProvidersRequest = /*@__PURE__*/ __L.at(
  __c38,
  4,
) as any as S.Schema<ListOpenIDConnectProvidersRequest>;
export interface OpenIDConnectProviderListEntry {
  Arn?: string;
}
const OpenIDConnectProviderListEntry = /*@__PURE__*/ __L.at(
  __c38,
  5,
) as any as S.Schema<OpenIDConnectProviderListEntry>;
export type OpenIDConnectProviderListType = OpenIDConnectProviderListEntry[];
const OpenIDConnectProviderListType = /*@__PURE__*/ __L.at(__c38, 6);
export interface ListOpenIDConnectProvidersResponse {
  OpenIDConnectProviderList?: OpenIDConnectProviderListEntry[];
}
const ListOpenIDConnectProvidersResponse = /*@__PURE__*/ __L.at(
  __c38,
  7,
) as any as S.Schema<ListOpenIDConnectProvidersResponse>;
export interface ListOpenIDConnectProviderTagsRequest {
  OpenIDConnectProviderArn: string;
  Marker?: string;
  MaxItems?: number;
}
const ListOpenIDConnectProviderTagsRequest = /*@__PURE__*/ __L.at(
  __c39,
  0,
) as any as S.Schema<ListOpenIDConnectProviderTagsRequest>;
export interface ListOpenIDConnectProviderTagsResponse {
  Tags: Tag[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListOpenIDConnectProviderTagsResponse = /*@__PURE__*/ __L.at(
  __c39,
  1,
) as any as S.Schema<ListOpenIDConnectProviderTagsResponse>;
export interface ListOrganizationsFeaturesRequest {}
const ListOrganizationsFeaturesRequest = /*@__PURE__*/ __L.at(
  __c39,
  2,
) as any as S.Schema<ListOrganizationsFeaturesRequest>;
export interface ListOrganizationsFeaturesResponse {
  OrganizationId?: string;
  EnabledFeatures?: FeatureType[];
}
const ListOrganizationsFeaturesResponse = /*@__PURE__*/ __L.at(
  __c39,
  3,
) as any as S.Schema<ListOrganizationsFeaturesResponse>;
export type PolicyScopeType = "All" | "AWS" | "Local" | (string & {});
const PolicyScopeType = S.String;

export interface ListPoliciesRequest {
  Scope?: PolicyScopeType;
  OnlyAttached?: boolean;
  PathPrefix?: string;
  PolicyUsageFilter?: PolicyUsageType;
  Marker?: string;
  MaxItems?: number;
}
const ListPoliciesRequest = /*@__PURE__*/ __L.at(__c39, 4) as any as S.Schema<ListPoliciesRequest>;
export type PolicyListType = Policy[];
const PolicyListType = /*@__PURE__*/ __L.at(__c39, 5);
export interface ListPoliciesResponse {
  Policies?: Policy[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListPoliciesResponse = /*@__PURE__*/ __L.at(
  __c39,
  6,
) as any as S.Schema<ListPoliciesResponse>;
export type ServiceNamespaceListType = string[];
const ServiceNamespaceListType = /*@__PURE__*/ __L.at(__c39, 7);
export interface ListPoliciesGrantingServiceAccessRequest {
  Marker?: string;
  Arn: string;
  ServiceNamespaces: string[];
}
const ListPoliciesGrantingServiceAccessRequest = /*@__PURE__*/ __L.at(
  __c40,
  0,
) as any as S.Schema<ListPoliciesGrantingServiceAccessRequest>;
export type PolicyType = "INLINE" | "MANAGED" | (string & {});
const PolicyType = S.String;

export type EntityNameType = string;
export interface PolicyGrantingServiceAccess {
  PolicyName: string;
  PolicyType: PolicyType;
  PolicyArn?: string;
  EntityType?: PolicyOwnerEntityType;
  EntityName?: string;
}
const PolicyGrantingServiceAccess = /*@__PURE__*/ __L.at(
  __c40,
  1,
) as any as S.Schema<PolicyGrantingServiceAccess>;
export type PolicyGrantingServiceAccessListType = PolicyGrantingServiceAccess[];
const PolicyGrantingServiceAccessListType = /*@__PURE__*/ __L.at(__c40, 2);
export interface ListPoliciesGrantingServiceAccessEntry {
  ServiceNamespace?: string;
  Policies?: PolicyGrantingServiceAccess[];
}
const ListPoliciesGrantingServiceAccessEntry = /*@__PURE__*/ __L.at(
  __c40,
  3,
) as any as S.Schema<ListPoliciesGrantingServiceAccessEntry>;
export type ListPolicyGrantingServiceAccessResponseListType =
  ListPoliciesGrantingServiceAccessEntry[];
const ListPolicyGrantingServiceAccessResponseListType = /*@__PURE__*/ __L.at(__c40, 4);
export interface ListPoliciesGrantingServiceAccessResponse {
  PoliciesGrantingServiceAccess: ListPoliciesGrantingServiceAccessEntry[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListPoliciesGrantingServiceAccessResponse = /*@__PURE__*/ __L.at(
  __c40,
  5,
) as any as S.Schema<ListPoliciesGrantingServiceAccessResponse>;
export interface ListPolicyTagsRequest {
  PolicyArn: string;
  Marker?: string;
  MaxItems?: number;
}
const ListPolicyTagsRequest = /*@__PURE__*/ __L.at(
  __c40,
  6,
) as any as S.Schema<ListPolicyTagsRequest>;
export interface ListPolicyTagsResponse {
  Tags: Tag[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListPolicyTagsResponse = /*@__PURE__*/ __L.at(
  __c40,
  7,
) as any as S.Schema<ListPolicyTagsResponse>;
export interface ListPolicyVersionsRequest {
  PolicyArn: string;
  Marker?: string;
  MaxItems?: number;
}
const ListPolicyVersionsRequest = /*@__PURE__*/ __L.at(
  __c41,
  0,
) as any as S.Schema<ListPolicyVersionsRequest>;
export interface ListPolicyVersionsResponse {
  Versions?: PolicyVersion[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListPolicyVersionsResponse = /*@__PURE__*/ __L.at(
  __c41,
  1,
) as any as S.Schema<ListPolicyVersionsResponse>;
export interface ListRolePoliciesRequest {
  RoleName: string;
  Marker?: string;
  MaxItems?: number;
}
const ListRolePoliciesRequest = /*@__PURE__*/ __L.at(
  __c41,
  2,
) as any as S.Schema<ListRolePoliciesRequest>;
export interface ListRolePoliciesResponse {
  PolicyNames: string[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListRolePoliciesResponse = /*@__PURE__*/ __L.at(
  __c41,
  3,
) as any as S.Schema<ListRolePoliciesResponse>;
export interface ListRolesRequest {
  PathPrefix?: string;
  Marker?: string;
  MaxItems?: number;
}
const ListRolesRequest = /*@__PURE__*/ __L.at(__c41, 4) as any as S.Schema<ListRolesRequest>;
export interface ListRolesResponse {
  Roles: Role[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListRolesResponse = /*@__PURE__*/ __L.at(__c41, 5) as any as S.Schema<ListRolesResponse>;
export interface ListRoleTagsRequest {
  RoleName: string;
  Marker?: string;
  MaxItems?: number;
}
const ListRoleTagsRequest = /*@__PURE__*/ __L.at(__c41, 6) as any as S.Schema<ListRoleTagsRequest>;
export interface ListRoleTagsResponse {
  Tags: Tag[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListRoleTagsResponse = /*@__PURE__*/ __L.at(
  __c41,
  7,
) as any as S.Schema<ListRoleTagsResponse>;
export interface ListSAMLProvidersRequest {}
const ListSAMLProvidersRequest = /*@__PURE__*/ __L.at(
  __c42,
  0,
) as any as S.Schema<ListSAMLProvidersRequest>;
export interface SAMLProviderListEntry {
  Arn?: string;
  ValidUntil?: Date;
  CreateDate?: Date;
}
const SAMLProviderListEntry = /*@__PURE__*/ __L.at(
  __c42,
  1,
) as any as S.Schema<SAMLProviderListEntry>;
export type SAMLProviderListType = SAMLProviderListEntry[];
const SAMLProviderListType = /*@__PURE__*/ __L.at(__c42, 2);
export interface ListSAMLProvidersResponse {
  SAMLProviderList?: SAMLProviderListEntry[];
}
const ListSAMLProvidersResponse = /*@__PURE__*/ __L.at(
  __c42,
  3,
) as any as S.Schema<ListSAMLProvidersResponse>;
export interface ListSAMLProviderTagsRequest {
  SAMLProviderArn: string;
  Marker?: string;
  MaxItems?: number;
}
const ListSAMLProviderTagsRequest = /*@__PURE__*/ __L.at(
  __c42,
  4,
) as any as S.Schema<ListSAMLProviderTagsRequest>;
export interface ListSAMLProviderTagsResponse {
  Tags: Tag[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListSAMLProviderTagsResponse = /*@__PURE__*/ __L.at(
  __c42,
  5,
) as any as S.Schema<ListSAMLProviderTagsResponse>;
export interface ListServerCertificatesRequest {
  PathPrefix?: string;
  Marker?: string;
  MaxItems?: number;
}
const ListServerCertificatesRequest = /*@__PURE__*/ __L.at(
  __c42,
  6,
) as any as S.Schema<ListServerCertificatesRequest>;
export type ServerCertificateMetadataListType = ServerCertificateMetadata[];
const ServerCertificateMetadataListType = /*@__PURE__*/ __L.at(__c42, 7);
export interface ListServerCertificatesResponse {
  ServerCertificateMetadataList: ServerCertificateMetadata[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListServerCertificatesResponse = /*@__PURE__*/ __L.at(
  __c43,
  0,
) as any as S.Schema<ListServerCertificatesResponse>;
export interface ListServerCertificateTagsRequest {
  ServerCertificateName: string;
  Marker?: string;
  MaxItems?: number;
}
const ListServerCertificateTagsRequest = /*@__PURE__*/ __L.at(
  __c43,
  1,
) as any as S.Schema<ListServerCertificateTagsRequest>;
export interface ListServerCertificateTagsResponse {
  Tags: Tag[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListServerCertificateTagsResponse = /*@__PURE__*/ __L.at(
  __c43,
  2,
) as any as S.Schema<ListServerCertificateTagsResponse>;
export type AllUsers = boolean;
export interface ListServiceSpecificCredentialsRequest {
  UserName?: string;
  ServiceName?: string;
  AllUsers?: boolean;
  Marker?: string;
  MaxItems?: number;
}
const ListServiceSpecificCredentialsRequest = /*@__PURE__*/ __L.at(
  __c43,
  3,
) as any as S.Schema<ListServiceSpecificCredentialsRequest>;
export interface ServiceSpecificCredentialMetadata {
  UserName: string;
  Status: StatusType;
  ServiceUserName?: string;
  ServiceCredentialAlias?: string;
  CreateDate: Date;
  ExpirationDate?: Date;
  ServiceSpecificCredentialId: string;
  ServiceName: string;
}
const ServiceSpecificCredentialMetadata = /*@__PURE__*/ __L.at(
  __c43,
  4,
) as any as S.Schema<ServiceSpecificCredentialMetadata>;
export type ServiceSpecificCredentialsListType = ServiceSpecificCredentialMetadata[];
const ServiceSpecificCredentialsListType = /*@__PURE__*/ __L.at(__c43, 5);
export interface ListServiceSpecificCredentialsResponse {
  ServiceSpecificCredentials?: ServiceSpecificCredentialMetadata[];
  Marker?: string;
  IsTruncated?: boolean;
}
const ListServiceSpecificCredentialsResponse = /*@__PURE__*/ __L.at(
  __c43,
  6,
) as any as S.Schema<ListServiceSpecificCredentialsResponse>;
export interface ListSigningCertificatesRequest {
  UserName?: string;
  Marker?: string;
  MaxItems?: number;
}
const ListSigningCertificatesRequest = /*@__PURE__*/ __L.at(
  __c43,
  7,
) as any as S.Schema<ListSigningCertificatesRequest>;
export interface SigningCertificate {
  UserName: string;
  CertificateId: string;
  CertificateBody: string;
  Status: StatusType;
  UploadDate?: Date;
}
const SigningCertificate = /*@__PURE__*/ __L.at(__c44, 0) as any as S.Schema<SigningCertificate>;
export type CertificateListType = SigningCertificate[];
const CertificateListType = /*@__PURE__*/ __L.at(__c44, 1);
export interface ListSigningCertificatesResponse {
  Certificates: SigningCertificate[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListSigningCertificatesResponse = /*@__PURE__*/ __L.at(
  __c44,
  2,
) as any as S.Schema<ListSigningCertificatesResponse>;
export interface ListSSHPublicKeysRequest {
  UserName?: string;
  Marker?: string;
  MaxItems?: number;
}
const ListSSHPublicKeysRequest = /*@__PURE__*/ __L.at(
  __c44,
  3,
) as any as S.Schema<ListSSHPublicKeysRequest>;
export interface SSHPublicKeyMetadata {
  UserName: string;
  SSHPublicKeyId: string;
  Status: StatusType;
  UploadDate: Date;
}
const SSHPublicKeyMetadata = /*@__PURE__*/ __L.at(
  __c44,
  4,
) as any as S.Schema<SSHPublicKeyMetadata>;
export type SSHPublicKeyListType = SSHPublicKeyMetadata[];
const SSHPublicKeyListType = /*@__PURE__*/ __L.at(__c44, 5);
export interface ListSSHPublicKeysResponse {
  SSHPublicKeys?: SSHPublicKeyMetadata[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListSSHPublicKeysResponse = /*@__PURE__*/ __L.at(
  __c44,
  6,
) as any as S.Schema<ListSSHPublicKeysResponse>;
export interface ListUserPoliciesRequest {
  UserName: string;
  Marker?: string;
  MaxItems?: number;
}
const ListUserPoliciesRequest = /*@__PURE__*/ __L.at(
  __c44,
  7,
) as any as S.Schema<ListUserPoliciesRequest>;
export interface ListUserPoliciesResponse {
  PolicyNames: string[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListUserPoliciesResponse = /*@__PURE__*/ __L.at(
  __c45,
  0,
) as any as S.Schema<ListUserPoliciesResponse>;
export interface ListUsersRequest {
  PathPrefix?: string;
  Marker?: string;
  MaxItems?: number;
}
const ListUsersRequest = /*@__PURE__*/ __L.at(__c45, 1) as any as S.Schema<ListUsersRequest>;
export interface ListUsersResponse {
  Users: User[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListUsersResponse = /*@__PURE__*/ __L.at(__c45, 2) as any as S.Schema<ListUsersResponse>;
export interface ListUserTagsRequest {
  UserName: string;
  Marker?: string;
  MaxItems?: number;
}
const ListUserTagsRequest = /*@__PURE__*/ __L.at(__c45, 3) as any as S.Schema<ListUserTagsRequest>;
export interface ListUserTagsResponse {
  Tags: Tag[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListUserTagsResponse = /*@__PURE__*/ __L.at(
  __c45,
  4,
) as any as S.Schema<ListUserTagsResponse>;
export type AssignmentStatusType = "Assigned" | "Unassigned" | "Any" | (string & {});
const AssignmentStatusType = S.String;

export interface ListVirtualMFADevicesRequest {
  AssignmentStatus?: AssignmentStatusType;
  Marker?: string;
  MaxItems?: number;
}
const ListVirtualMFADevicesRequest = /*@__PURE__*/ __L.at(
  __c45,
  5,
) as any as S.Schema<ListVirtualMFADevicesRequest>;
export type VirtualMFADeviceListType = VirtualMFADevice[];
const VirtualMFADeviceListType = /*@__PURE__*/ __L.at(__c45, 6);
export interface ListVirtualMFADevicesResponse {
  VirtualMFADevices: VirtualMFADevice[];
  IsTruncated?: boolean;
  Marker?: string;
}
const ListVirtualMFADevicesResponse = /*@__PURE__*/ __L.at(
  __c45,
  7,
) as any as S.Schema<ListVirtualMFADevicesResponse>;
export interface PutAccountPropertiesRequest {
  Properties: { [key: string]: string | undefined };
}
const PutAccountPropertiesRequest = /*@__PURE__*/ __L.at(
  __c46,
  0,
) as any as S.Schema<PutAccountPropertiesRequest>;
export interface PutAccountPropertiesResponse {}
const PutAccountPropertiesResponse = /*@__PURE__*/ __L.at(
  __c46,
  1,
) as any as S.Schema<PutAccountPropertiesResponse>;
export interface PutGroupPolicyRequest {
  GroupName: string;
  PolicyName: string;
  PolicyDocument: string;
}
const PutGroupPolicyRequest = /*@__PURE__*/ __L.at(
  __c46,
  2,
) as any as S.Schema<PutGroupPolicyRequest>;
export interface PutGroupPolicyResponse {}
const PutGroupPolicyResponse = /*@__PURE__*/ __L.at(
  __c46,
  3,
) as any as S.Schema<PutGroupPolicyResponse>;
export interface PutRolePermissionsBoundaryRequest {
  RoleName: string;
  PermissionsBoundary: string;
}
const PutRolePermissionsBoundaryRequest = /*@__PURE__*/ __L.at(
  __c46,
  4,
) as any as S.Schema<PutRolePermissionsBoundaryRequest>;
export interface PutRolePermissionsBoundaryResponse {}
const PutRolePermissionsBoundaryResponse = /*@__PURE__*/ __L.at(
  __c46,
  5,
) as any as S.Schema<PutRolePermissionsBoundaryResponse>;
export interface PutRolePolicyRequest {
  RoleName: string;
  PolicyName: string;
  PolicyDocument: string;
}
const PutRolePolicyRequest = /*@__PURE__*/ __L.at(
  __c46,
  6,
) as any as S.Schema<PutRolePolicyRequest>;
export interface PutRolePolicyResponse {}
const PutRolePolicyResponse = /*@__PURE__*/ __L.at(
  __c46,
  7,
) as any as S.Schema<PutRolePolicyResponse>;
export interface PutUserPermissionsBoundaryRequest {
  UserName: string;
  PermissionsBoundary: string;
}
const PutUserPermissionsBoundaryRequest = /*@__PURE__*/ __L.at(
  __c47,
  0,
) as any as S.Schema<PutUserPermissionsBoundaryRequest>;
export interface PutUserPermissionsBoundaryResponse {}
const PutUserPermissionsBoundaryResponse = /*@__PURE__*/ __L.at(
  __c47,
  1,
) as any as S.Schema<PutUserPermissionsBoundaryResponse>;
export interface PutUserPolicyRequest {
  UserName: string;
  PolicyName: string;
  PolicyDocument: string;
}
const PutUserPolicyRequest = /*@__PURE__*/ __L.at(
  __c47,
  2,
) as any as S.Schema<PutUserPolicyRequest>;
export interface PutUserPolicyResponse {}
const PutUserPolicyResponse = /*@__PURE__*/ __L.at(
  __c47,
  3,
) as any as S.Schema<PutUserPolicyResponse>;
export interface RejectDelegationRequestRequest {
  DelegationRequestId: string;
  Notes?: string;
}
const RejectDelegationRequestRequest = /*@__PURE__*/ __L.at(
  __c47,
  4,
) as any as S.Schema<RejectDelegationRequestRequest>;
export interface RejectDelegationRequestResponse {}
const RejectDelegationRequestResponse = /*@__PURE__*/ __L.at(
  __c47,
  5,
) as any as S.Schema<RejectDelegationRequestResponse>;
export interface RemoveClientIDFromOpenIDConnectProviderRequest {
  OpenIDConnectProviderArn: string;
  ClientID: string;
}
const RemoveClientIDFromOpenIDConnectProviderRequest = /*@__PURE__*/ __L.at(
  __c47,
  6,
) as any as S.Schema<RemoveClientIDFromOpenIDConnectProviderRequest>;
export interface RemoveClientIDFromOpenIDConnectProviderResponse {}
const RemoveClientIDFromOpenIDConnectProviderResponse = /*@__PURE__*/ __L.at(
  __c47,
  7,
) as any as S.Schema<RemoveClientIDFromOpenIDConnectProviderResponse>;
export interface RemoveRoleFromInstanceProfileRequest {
  InstanceProfileName: string;
  RoleName: string;
}
const RemoveRoleFromInstanceProfileRequest = /*@__PURE__*/ __L.at(
  __c48,
  0,
) as any as S.Schema<RemoveRoleFromInstanceProfileRequest>;
export interface RemoveRoleFromInstanceProfileResponse {}
const RemoveRoleFromInstanceProfileResponse = /*@__PURE__*/ __L.at(
  __c48,
  1,
) as any as S.Schema<RemoveRoleFromInstanceProfileResponse>;
export interface RemoveUserFromGroupRequest {
  GroupName: string;
  UserName: string;
}
const RemoveUserFromGroupRequest = /*@__PURE__*/ __L.at(
  __c48,
  2,
) as any as S.Schema<RemoveUserFromGroupRequest>;
export interface RemoveUserFromGroupResponse {}
const RemoveUserFromGroupResponse = /*@__PURE__*/ __L.at(
  __c48,
  3,
) as any as S.Schema<RemoveUserFromGroupResponse>;
export interface ResetServiceSpecificCredentialRequest {
  UserName?: string;
  ServiceSpecificCredentialId: string;
}
const ResetServiceSpecificCredentialRequest = /*@__PURE__*/ __L.at(
  __c48,
  4,
) as any as S.Schema<ResetServiceSpecificCredentialRequest>;
export interface ResetServiceSpecificCredentialResponse {
  ServiceSpecificCredential?: ServiceSpecificCredential;
}
const ResetServiceSpecificCredentialResponse = /*@__PURE__*/ __L.at(
  __c48,
  5,
) as any as S.Schema<ResetServiceSpecificCredentialResponse>;
export interface ResyncMFADeviceRequest {
  UserName: string;
  SerialNumber: string;
  AuthenticationCode1: string;
  AuthenticationCode2: string;
}
const ResyncMFADeviceRequest = /*@__PURE__*/ __L.at(
  __c48,
  6,
) as any as S.Schema<ResyncMFADeviceRequest>;
export interface ResyncMFADeviceResponse {}
const ResyncMFADeviceResponse = /*@__PURE__*/ __L.at(
  __c48,
  7,
) as any as S.Schema<ResyncMFADeviceResponse>;
export interface SendDelegationTokenRequest {
  DelegationRequestId: string;
}
const SendDelegationTokenRequest = /*@__PURE__*/ __L.at(
  __c49,
  0,
) as any as S.Schema<SendDelegationTokenRequest>;
export interface SendDelegationTokenResponse {}
const SendDelegationTokenResponse = /*@__PURE__*/ __L.at(
  __c49,
  1,
) as any as S.Schema<SendDelegationTokenResponse>;
export interface SetDefaultPolicyVersionRequest {
  PolicyArn: string;
  VersionId: string;
}
const SetDefaultPolicyVersionRequest = /*@__PURE__*/ __L.at(
  __c49,
  2,
) as any as S.Schema<SetDefaultPolicyVersionRequest>;
export interface SetDefaultPolicyVersionResponse {}
const SetDefaultPolicyVersionResponse = /*@__PURE__*/ __L.at(
  __c49,
  3,
) as any as S.Schema<SetDefaultPolicyVersionResponse>;
export type GlobalEndpointTokenVersion = "v1Token" | "v2Token" | (string & {});
const GlobalEndpointTokenVersion = S.String;

export interface SetSecurityTokenServicePreferencesRequest {
  GlobalEndpointTokenVersion: GlobalEndpointTokenVersion;
}
const SetSecurityTokenServicePreferencesRequest = /*@__PURE__*/ __L.at(
  __c49,
  4,
) as any as S.Schema<SetSecurityTokenServicePreferencesRequest>;
export interface SetSecurityTokenServicePreferencesResponse {}
const SetSecurityTokenServicePreferencesResponse = /*@__PURE__*/ __L.at(
  __c49,
  5,
) as any as S.Schema<SetSecurityTokenServicePreferencesResponse>;
export interface OrderedOrganizationPolicyType {
  ServiceControlPolicyInputList?: string[];
}
const OrderedOrganizationPolicyType = /*@__PURE__*/ __L.at(
  __c49,
  6,
) as any as S.Schema<OrderedOrganizationPolicyType>;
export type OrganizationPolicyListType = OrderedOrganizationPolicyType[];
const OrganizationPolicyListType = /*@__PURE__*/ __L.at(__c49, 7);
export type ActionNameType = string;
export type ActionNameListType = string[];
const ActionNameListType = /*@__PURE__*/ __L.at(__c50, 0);
export type ResourceNameType = string;
export type ResourceNameListType = string[];
const ResourceNameListType = /*@__PURE__*/ __L.at(__c50, 1);
export type ContextKeyValueType = string;
export type ContextKeyValueListType = string[];
const ContextKeyValueListType = /*@__PURE__*/ __L.at(__c50, 2);
export type ContextKeyTypeEnum =
  | "string"
  | "stringList"
  | "numeric"
  | "numericList"
  | "boolean"
  | "booleanList"
  | "ip"
  | "ipList"
  | "binary"
  | "binaryList"
  | "date"
  | "dateList"
  | (string & {});
const ContextKeyTypeEnum = S.String;

export interface ContextEntry {
  ContextKeyName?: string;
  ContextKeyValues?: string[];
  ContextKeyType?: ContextKeyTypeEnum;
}
const ContextEntry = /*@__PURE__*/ __L.at(__c50, 3) as any as S.Schema<ContextEntry>;
export type ContextEntryListType = ContextEntry[];
const ContextEntryListType = /*@__PURE__*/ __L.at(__c50, 4);
export type ResourceHandlingOptionType = string;
export interface SimulateCustomPolicyRequest {
  PolicyInputList: string[];
  PermissionsBoundaryPolicyInputList?: string[];
  OrderedOrganizationPolicyInputList?: OrderedOrganizationPolicyType[];
  ActionNames: string[];
  ResourceArns?: string[];
  ResourcePolicy?: string;
  ResourceOwner?: string;
  CallerArn?: string;
  ContextEntries?: ContextEntry[];
  ResourceHandlingOption?: string;
  MaxItems?: number;
  Marker?: string;
}
const SimulateCustomPolicyRequest = /*@__PURE__*/ __L.at(
  __c50,
  5,
) as any as S.Schema<SimulateCustomPolicyRequest>;
export type PolicyEvaluationDecisionType =
  | "allowed"
  | "explicitDeny"
  | "implicitDeny"
  | (string & {});
const PolicyEvaluationDecisionType = S.String;

export type PolicyIdentifierType = string;
export type PolicySourceType =
  | "user"
  | "group"
  | "role"
  | "aws-managed"
  | "user-managed"
  | "resource"
  | "none"
  | (string & {});
const PolicySourceType = S.String;

export type LineNumber = number;
export type ColumnNumber = number;
export interface Position {
  Line?: number;
  Column?: number;
}
const Position = /*@__PURE__*/ __L.at(__c50, 6) as any as S.Schema<Position>;
export interface Statement {
  SourcePolicyId?: string;
  SourcePolicyType?: PolicySourceType;
  StartPosition?: Position;
  EndPosition?: Position;
}
const Statement = /*@__PURE__*/ __L.at(__c50, 7) as any as S.Schema<Statement>;
export type StatementListType = Statement[];
const StatementListType = /*@__PURE__*/ __L.at(__c51, 0);
export interface OrganizationsDecisionDetail {
  AllowedByOrganizations?: boolean;
}
const OrganizationsDecisionDetail = /*@__PURE__*/ __L.at(
  __c51,
  1,
) as any as S.Schema<OrganizationsDecisionDetail>;
export interface PermissionsBoundaryDecisionDetail {
  AllowedByPermissionsBoundary?: boolean;
}
const PermissionsBoundaryDecisionDetail = /*@__PURE__*/ __L.at(
  __c51,
  2,
) as any as S.Schema<PermissionsBoundaryDecisionDetail>;
export type EvalDecisionSourceType = string;
export type EvalDecisionDetailsType = { [key: string]: PolicyEvaluationDecisionType | undefined };
const EvalDecisionDetailsType = /*@__PURE__*/ __L.at(__c51, 3);
export interface ResourceSpecificResult {
  EvalResourceName: string;
  EvalResourceDecision: PolicyEvaluationDecisionType;
  MatchedStatements?: Statement[];
  MissingContextValues?: string[];
  EvalDecisionDetails?: { [key: string]: PolicyEvaluationDecisionType | undefined };
  PermissionsBoundaryDecisionDetail?: PermissionsBoundaryDecisionDetail;
}
const ResourceSpecificResult = /*@__PURE__*/ __L.at(
  __c51,
  4,
) as any as S.Schema<ResourceSpecificResult>;
export type ResourceSpecificResultListType = ResourceSpecificResult[];
const ResourceSpecificResultListType = /*@__PURE__*/ __L.at(__c51, 5);
export interface EvaluationResult {
  EvalActionName: string;
  EvalResourceName?: string;
  EvalDecision: PolicyEvaluationDecisionType;
  MatchedStatements?: Statement[];
  MissingContextValues?: string[];
  OrganizationsDecisionDetail?: OrganizationsDecisionDetail;
  PermissionsBoundaryDecisionDetail?: PermissionsBoundaryDecisionDetail;
  EvalDecisionDetails?: { [key: string]: PolicyEvaluationDecisionType | undefined };
  ResourceSpecificResults?: ResourceSpecificResult[];
}
const EvaluationResult = /*@__PURE__*/ __L.at(__c51, 6) as any as S.Schema<EvaluationResult>;
export type EvaluationResultsListType = EvaluationResult[];
const EvaluationResultsListType = /*@__PURE__*/ __L.at(__c51, 7);
export interface SimulatePolicyResponse {
  EvaluationResults?: EvaluationResult[];
  IsTruncated?: boolean;
  Marker?: string;
}
const SimulatePolicyResponse = /*@__PURE__*/ __L.at(
  __c52,
  0,
) as any as S.Schema<SimulatePolicyResponse>;
export type PolicyIdentifierPolicyType =
  | "inline"
  | "aws-managed"
  | "user-managed"
  | "permission-boundary"
  | "scp"
  | "rcp"
  | (string & {});
const PolicyIdentifierPolicyType = S.String;

export type AttachmentType = "user" | "group" | "role" | (string & {});
const AttachmentType = S.String;

export type AttachmentName = string;
export interface InlinePolicyIdentifierType {
  PolicyName: string;
  AttachmentType: AttachmentType;
  AttachmentName: string;
}
const InlinePolicyIdentifierType = /*@__PURE__*/ __L.at(
  __c52,
  1,
) as any as S.Schema<InlinePolicyIdentifierType>;
export type PolicyIdentifier =
  | { PolicyType: PolicyIdentifierPolicyType; PolicyArn?: never; InlinePolicyIdentifier?: never }
  | { PolicyType?: never; PolicyArn: string; InlinePolicyIdentifier?: never }
  | { PolicyType?: never; PolicyArn?: never; InlinePolicyIdentifier: InlinePolicyIdentifierType };
const PolicyIdentifier = /*@__PURE__*/ __L.at(__c52, 2);
export type PolicyExclusionsListType = PolicyIdentifier[];
const PolicyExclusionsListType = /*@__PURE__*/ __L.at(__c52, 3);
export interface SimulatePrincipalPolicyRequest {
  PolicySourceArn: string;
  PolicyInputList?: string[];
  PermissionsBoundaryPolicyInputList?: string[];
  PolicyExclusionList?: PolicyIdentifier[];
  ActionNames: string[];
  ResourceArns?: string[];
  ResourcePolicy?: string;
  ResourceOwner?: string;
  CallerArn?: string;
  ContextEntries?: ContextEntry[];
  ResourceHandlingOption?: string;
  MaxItems?: number;
  Marker?: string;
}
const SimulatePrincipalPolicyRequest = /*@__PURE__*/ __L.at(
  __c52,
  4,
) as any as S.Schema<SimulatePrincipalPolicyRequest>;
export interface TagInstanceProfileRequest {
  InstanceProfileName: string;
  Tags: Tag[];
}
const TagInstanceProfileRequest = /*@__PURE__*/ __L.at(
  __c52,
  5,
) as any as S.Schema<TagInstanceProfileRequest>;
export interface TagInstanceProfileResponse {}
const TagInstanceProfileResponse = /*@__PURE__*/ __L.at(
  __c52,
  6,
) as any as S.Schema<TagInstanceProfileResponse>;
export interface TagMFADeviceRequest {
  SerialNumber: string;
  Tags: Tag[];
}
const TagMFADeviceRequest = /*@__PURE__*/ __L.at(__c52, 7) as any as S.Schema<TagMFADeviceRequest>;
export interface TagMFADeviceResponse {}
const TagMFADeviceResponse = /*@__PURE__*/ __L.at(
  __c53,
  0,
) as any as S.Schema<TagMFADeviceResponse>;
export interface TagOpenIDConnectProviderRequest {
  OpenIDConnectProviderArn: string;
  Tags: Tag[];
}
const TagOpenIDConnectProviderRequest = /*@__PURE__*/ __L.at(
  __c53,
  1,
) as any as S.Schema<TagOpenIDConnectProviderRequest>;
export interface TagOpenIDConnectProviderResponse {}
const TagOpenIDConnectProviderResponse = /*@__PURE__*/ __L.at(
  __c53,
  2,
) as any as S.Schema<TagOpenIDConnectProviderResponse>;
export interface TagPolicyRequest {
  PolicyArn: string;
  Tags: Tag[];
}
const TagPolicyRequest = /*@__PURE__*/ __L.at(__c53, 3) as any as S.Schema<TagPolicyRequest>;
export interface TagPolicyResponse {}
const TagPolicyResponse = /*@__PURE__*/ __L.at(__c53, 4) as any as S.Schema<TagPolicyResponse>;
export interface TagRoleRequest {
  RoleName: string;
  Tags: Tag[];
}
const TagRoleRequest = /*@__PURE__*/ __L.at(__c53, 5) as any as S.Schema<TagRoleRequest>;
export interface TagRoleResponse {}
const TagRoleResponse = /*@__PURE__*/ __L.at(__c53, 6) as any as S.Schema<TagRoleResponse>;
export interface TagSAMLProviderRequest {
  SAMLProviderArn: string;
  Tags: Tag[];
}
const TagSAMLProviderRequest = /*@__PURE__*/ __L.at(
  __c53,
  7,
) as any as S.Schema<TagSAMLProviderRequest>;
export interface TagSAMLProviderResponse {}
const TagSAMLProviderResponse = /*@__PURE__*/ __L.at(
  __c54,
  0,
) as any as S.Schema<TagSAMLProviderResponse>;
export interface TagServerCertificateRequest {
  ServerCertificateName: string;
  Tags: Tag[];
}
const TagServerCertificateRequest = /*@__PURE__*/ __L.at(
  __c54,
  1,
) as any as S.Schema<TagServerCertificateRequest>;
export interface TagServerCertificateResponse {}
const TagServerCertificateResponse = /*@__PURE__*/ __L.at(
  __c54,
  2,
) as any as S.Schema<TagServerCertificateResponse>;
export interface TagUserRequest {
  UserName: string;
  Tags: Tag[];
}
const TagUserRequest = /*@__PURE__*/ __L.at(__c54, 3) as any as S.Schema<TagUserRequest>;
export interface TagUserResponse {}
const TagUserResponse = /*@__PURE__*/ __L.at(__c54, 4) as any as S.Schema<TagUserResponse>;
export type TagKeyListType = string[];
const TagKeyListType = /*@__PURE__*/ __L.at(__c54, 5);
export interface UntagInstanceProfileRequest {
  InstanceProfileName: string;
  TagKeys: string[];
}
const UntagInstanceProfileRequest = /*@__PURE__*/ __L.at(
  __c54,
  6,
) as any as S.Schema<UntagInstanceProfileRequest>;
export interface UntagInstanceProfileResponse {}
const UntagInstanceProfileResponse = /*@__PURE__*/ __L.at(
  __c54,
  7,
) as any as S.Schema<UntagInstanceProfileResponse>;
export interface UntagMFADeviceRequest {
  SerialNumber: string;
  TagKeys: string[];
}
const UntagMFADeviceRequest = /*@__PURE__*/ __L.at(
  __c55,
  0,
) as any as S.Schema<UntagMFADeviceRequest>;
export interface UntagMFADeviceResponse {}
const UntagMFADeviceResponse = /*@__PURE__*/ __L.at(
  __c55,
  1,
) as any as S.Schema<UntagMFADeviceResponse>;
export interface UntagOpenIDConnectProviderRequest {
  OpenIDConnectProviderArn: string;
  TagKeys: string[];
}
const UntagOpenIDConnectProviderRequest = /*@__PURE__*/ __L.at(
  __c55,
  2,
) as any as S.Schema<UntagOpenIDConnectProviderRequest>;
export interface UntagOpenIDConnectProviderResponse {}
const UntagOpenIDConnectProviderResponse = /*@__PURE__*/ __L.at(
  __c55,
  3,
) as any as S.Schema<UntagOpenIDConnectProviderResponse>;
export interface UntagPolicyRequest {
  PolicyArn: string;
  TagKeys: string[];
}
const UntagPolicyRequest = /*@__PURE__*/ __L.at(__c55, 4) as any as S.Schema<UntagPolicyRequest>;
export interface UntagPolicyResponse {}
const UntagPolicyResponse = /*@__PURE__*/ __L.at(__c55, 5) as any as S.Schema<UntagPolicyResponse>;
export interface UntagRoleRequest {
  RoleName: string;
  TagKeys: string[];
}
const UntagRoleRequest = /*@__PURE__*/ __L.at(__c55, 6) as any as S.Schema<UntagRoleRequest>;
export interface UntagRoleResponse {}
const UntagRoleResponse = /*@__PURE__*/ __L.at(__c55, 7) as any as S.Schema<UntagRoleResponse>;
export interface UntagSAMLProviderRequest {
  SAMLProviderArn: string;
  TagKeys: string[];
}
const UntagSAMLProviderRequest = /*@__PURE__*/ __L.at(
  __c56,
  0,
) as any as S.Schema<UntagSAMLProviderRequest>;
export interface UntagSAMLProviderResponse {}
const UntagSAMLProviderResponse = /*@__PURE__*/ __L.at(
  __c56,
  1,
) as any as S.Schema<UntagSAMLProviderResponse>;
export interface UntagServerCertificateRequest {
  ServerCertificateName: string;
  TagKeys: string[];
}
const UntagServerCertificateRequest = /*@__PURE__*/ __L.at(
  __c56,
  2,
) as any as S.Schema<UntagServerCertificateRequest>;
export interface UntagServerCertificateResponse {}
const UntagServerCertificateResponse = /*@__PURE__*/ __L.at(
  __c56,
  3,
) as any as S.Schema<UntagServerCertificateResponse>;
export interface UntagUserRequest {
  UserName: string;
  TagKeys: string[];
}
const UntagUserRequest = /*@__PURE__*/ __L.at(__c56, 4) as any as S.Schema<UntagUserRequest>;
export interface UntagUserResponse {}
const UntagUserResponse = /*@__PURE__*/ __L.at(__c56, 5) as any as S.Schema<UntagUserResponse>;
export interface UpdateAccessKeyRequest {
  UserName?: string;
  AccessKeyId: string;
  Status: StatusType;
}
const UpdateAccessKeyRequest = /*@__PURE__*/ __L.at(
  __c56,
  6,
) as any as S.Schema<UpdateAccessKeyRequest>;
export interface UpdateAccessKeyResponse {}
const UpdateAccessKeyResponse = /*@__PURE__*/ __L.at(
  __c56,
  7,
) as any as S.Schema<UpdateAccessKeyResponse>;
export interface UpdateAccountPasswordPolicyRequest {
  MinimumPasswordLength?: number;
  RequireSymbols?: boolean;
  RequireNumbers?: boolean;
  RequireUppercaseCharacters?: boolean;
  RequireLowercaseCharacters?: boolean;
  AllowUsersToChangePassword?: boolean;
  MaxPasswordAge?: number;
  PasswordReusePrevention?: number;
  HardExpiry?: boolean;
}
const UpdateAccountPasswordPolicyRequest = /*@__PURE__*/ __L.at(
  __c57,
  0,
) as any as S.Schema<UpdateAccountPasswordPolicyRequest>;
export interface UpdateAccountPasswordPolicyResponse {}
const UpdateAccountPasswordPolicyResponse = /*@__PURE__*/ __L.at(
  __c57,
  1,
) as any as S.Schema<UpdateAccountPasswordPolicyResponse>;
export interface UpdateAssumeRolePolicyRequest {
  RoleName: string;
  PolicyDocument: string;
}
const UpdateAssumeRolePolicyRequest = /*@__PURE__*/ __L.at(
  __c57,
  2,
) as any as S.Schema<UpdateAssumeRolePolicyRequest>;
export interface UpdateAssumeRolePolicyResponse {}
const UpdateAssumeRolePolicyResponse = /*@__PURE__*/ __L.at(
  __c57,
  3,
) as any as S.Schema<UpdateAssumeRolePolicyResponse>;
export interface UpdateDelegationRequestRequest {
  DelegationRequestId: string;
  Notes?: string;
}
const UpdateDelegationRequestRequest = /*@__PURE__*/ __L.at(
  __c57,
  4,
) as any as S.Schema<UpdateDelegationRequestRequest>;
export interface UpdateDelegationRequestResponse {}
const UpdateDelegationRequestResponse = /*@__PURE__*/ __L.at(
  __c57,
  5,
) as any as S.Schema<UpdateDelegationRequestResponse>;
export interface UpdateGroupRequest {
  GroupName: string;
  NewPath?: string;
  NewGroupName?: string;
}
const UpdateGroupRequest = /*@__PURE__*/ __L.at(__c57, 6) as any as S.Schema<UpdateGroupRequest>;
export interface UpdateGroupResponse {}
const UpdateGroupResponse = /*@__PURE__*/ __L.at(__c57, 7) as any as S.Schema<UpdateGroupResponse>;
export interface UpdateLoginProfileRequest {
  UserName: string;
  Password?: string | redacted.Redacted<string>;
  PasswordResetRequired?: boolean;
}
const UpdateLoginProfileRequest = /*@__PURE__*/ __L.at(
  __c58,
  0,
) as any as S.Schema<UpdateLoginProfileRequest>;
export interface UpdateLoginProfileResponse {}
const UpdateLoginProfileResponse = /*@__PURE__*/ __L.at(
  __c58,
  1,
) as any as S.Schema<UpdateLoginProfileResponse>;
export interface UpdateOpenIDConnectProviderThumbprintRequest {
  OpenIDConnectProviderArn: string;
  ThumbprintList: string[];
}
const UpdateOpenIDConnectProviderThumbprintRequest = /*@__PURE__*/ __L.at(
  __c58,
  2,
) as any as S.Schema<UpdateOpenIDConnectProviderThumbprintRequest>;
export interface UpdateOpenIDConnectProviderThumbprintResponse {}
const UpdateOpenIDConnectProviderThumbprintResponse = /*@__PURE__*/ __L.at(
  __c58,
  3,
) as any as S.Schema<UpdateOpenIDConnectProviderThumbprintResponse>;
export interface UpdateRoleRequest {
  RoleName: string;
  Description?: string;
  MaxSessionDuration?: number;
}
const UpdateRoleRequest = /*@__PURE__*/ __L.at(__c58, 4) as any as S.Schema<UpdateRoleRequest>;
export interface UpdateRoleResponse {}
const UpdateRoleResponse = /*@__PURE__*/ __L.at(__c58, 5) as any as S.Schema<UpdateRoleResponse>;
export interface UpdateRoleDescriptionRequest {
  RoleName: string;
  Description: string;
}
const UpdateRoleDescriptionRequest = /*@__PURE__*/ __L.at(
  __c58,
  6,
) as any as S.Schema<UpdateRoleDescriptionRequest>;
export interface UpdateRoleDescriptionResponse {
  Role?: Role;
}
const UpdateRoleDescriptionResponse = /*@__PURE__*/ __L.at(
  __c58,
  7,
) as any as S.Schema<UpdateRoleDescriptionResponse>;
export interface UpdateSAMLProviderRequest {
  SAMLMetadataDocument?: string;
  SAMLProviderArn: string;
  AssertionEncryptionMode?: AssertionEncryptionModeType;
  AddPrivateKey?: string | redacted.Redacted<string>;
  RemovePrivateKey?: string;
}
const UpdateSAMLProviderRequest = /*@__PURE__*/ __L.at(
  __c59,
  0,
) as any as S.Schema<UpdateSAMLProviderRequest>;
export interface UpdateSAMLProviderResponse {
  SAMLProviderArn?: string;
}
const UpdateSAMLProviderResponse = /*@__PURE__*/ __L.at(
  __c59,
  1,
) as any as S.Schema<UpdateSAMLProviderResponse>;
export interface UpdateServerCertificateRequest {
  ServerCertificateName: string;
  NewPath?: string;
  NewServerCertificateName?: string;
}
const UpdateServerCertificateRequest = /*@__PURE__*/ __L.at(
  __c59,
  2,
) as any as S.Schema<UpdateServerCertificateRequest>;
export interface UpdateServerCertificateResponse {}
const UpdateServerCertificateResponse = /*@__PURE__*/ __L.at(
  __c59,
  3,
) as any as S.Schema<UpdateServerCertificateResponse>;
export interface UpdateServiceSpecificCredentialRequest {
  UserName?: string;
  ServiceSpecificCredentialId: string;
  Status: StatusType;
}
const UpdateServiceSpecificCredentialRequest = /*@__PURE__*/ __L.at(
  __c59,
  4,
) as any as S.Schema<UpdateServiceSpecificCredentialRequest>;
export interface UpdateServiceSpecificCredentialResponse {}
const UpdateServiceSpecificCredentialResponse = /*@__PURE__*/ __L.at(
  __c59,
  5,
) as any as S.Schema<UpdateServiceSpecificCredentialResponse>;
export interface UpdateSigningCertificateRequest {
  UserName?: string;
  CertificateId: string;
  Status: StatusType;
}
const UpdateSigningCertificateRequest = /*@__PURE__*/ __L.at(
  __c59,
  6,
) as any as S.Schema<UpdateSigningCertificateRequest>;
export interface UpdateSigningCertificateResponse {}
const UpdateSigningCertificateResponse = /*@__PURE__*/ __L.at(
  __c59,
  7,
) as any as S.Schema<UpdateSigningCertificateResponse>;
export interface UpdateSSHPublicKeyRequest {
  UserName: string;
  SSHPublicKeyId: string;
  Status: StatusType;
}
const UpdateSSHPublicKeyRequest = /*@__PURE__*/ __L.at(
  __c60,
  0,
) as any as S.Schema<UpdateSSHPublicKeyRequest>;
export interface UpdateSSHPublicKeyResponse {}
const UpdateSSHPublicKeyResponse = /*@__PURE__*/ __L.at(
  __c60,
  1,
) as any as S.Schema<UpdateSSHPublicKeyResponse>;
export interface UpdateUserRequest {
  UserName: string;
  NewPath?: string;
  NewUserName?: string;
}
const UpdateUserRequest = /*@__PURE__*/ __L.at(__c60, 2) as any as S.Schema<UpdateUserRequest>;
export interface UpdateUserResponse {}
const UpdateUserResponse = /*@__PURE__*/ __L.at(__c60, 3) as any as S.Schema<UpdateUserResponse>;
export interface UploadServerCertificateRequest {
  Path?: string;
  ServerCertificateName: string;
  CertificateBody: string;
  PrivateKey: string | redacted.Redacted<string>;
  CertificateChain?: string;
  Tags?: Tag[];
}
const UploadServerCertificateRequest = /*@__PURE__*/ __L.at(
  __c60,
  4,
) as any as S.Schema<UploadServerCertificateRequest>;
export interface UploadServerCertificateResponse {
  ServerCertificateMetadata?: ServerCertificateMetadata;
  Tags?: Tag[];
}
const UploadServerCertificateResponse = /*@__PURE__*/ __L.at(
  __c60,
  5,
) as any as S.Schema<UploadServerCertificateResponse>;
export interface UploadSigningCertificateRequest {
  UserName?: string;
  CertificateBody: string;
}
const UploadSigningCertificateRequest = /*@__PURE__*/ __L.at(
  __c60,
  6,
) as any as S.Schema<UploadSigningCertificateRequest>;
export interface UploadSigningCertificateResponse {
  Certificate: SigningCertificate;
}
const UploadSigningCertificateResponse = /*@__PURE__*/ __L.at(
  __c60,
  7,
) as any as S.Schema<UploadSigningCertificateResponse>;
export interface UploadSSHPublicKeyRequest {
  UserName: string;
  SSHPublicKeyBody: string;
}
const UploadSSHPublicKeyRequest = /*@__PURE__*/ __L.at(
  __c61,
  0,
) as any as S.Schema<UploadSSHPublicKeyRequest>;
export interface UploadSSHPublicKeyResponse {
  SSHPublicKey?: SSHPublicKey;
}
const UploadSSHPublicKeyResponse = /*@__PURE__*/ __L.at(
  __c61,
  1,
) as any as S.Schema<UploadSSHPublicKeyResponse>;
export type ConcurrentModificationMessage = string;
export type NoSuchEntityMessage = string;
export type ServiceFailureExceptionMessage = string;
export type EntityAlreadyExistsMessage = string;
export type InvalidInputMessage = string;
export type LimitExceededMessage = string;
export type MalformedPolicyDocumentMessage = string;
export type NameConflictMessage = string;
export type RoleModifiedMessage = string;
export type RoleTemplateDisabledMessage = string;
export type UnmodifiableEntityMessage = string;
export type PolicyNotAttachableMessage = string;
export type EntityTemporarilyUnmodifiableMessage = string;
export type InvalidUserTypeMessage = string;
export type PasswordPolicyViolationMessage = string;
export type OpenIdIdpCommunicationErrorExceptionMessage = string;
export type ServiceNotSupportedMessage = string;
export type DeleteConflictMessage = string;
export type ExceptionMessage = string;
export type FeatureDisabledMessage = string;
export type InvalidAuthenticationCodeMessage = string;
export type FeatureEnabledMessage = string;
export type ReportGenerationLimitExceededMessage = string;
export type CredentialReportExpiredExceptionMessage = string;
export type CredentialReportNotPresentExceptionMessage = string;
export type CredentialReportNotReadyExceptionMessage = string;
export type UnrecognizedPublicKeyEncodingMessage = string;
export type PolicyEvaluationErrorMessage = string;
export type KeyPairMismatchMessage = string;
export type MalformedCertificateMessage = string;
export type DuplicateCertificateMessage = string;
export type InvalidCertificateMessage = string;
export type DuplicateSSHPublicKeyMessage = string;
export type InvalidPublicKeyMessage = string;
export type AcceptDelegationRequestError =
  | ConcurrentModificationException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Accepts a delegation request, granting the requested temporary access.
 *
 * Once the delegation request is accepted, it is eligible to send the exchange token to the partner.
 * The SendDelegationToken
 * API has to be explicitly called to send the delegation token.
 *
 * At the time of acceptance, IAM records the details and the state of the identity that called this API.
 * This is the identity that gets mapped to the delegated credential.
 *
 * An accepted request may be rejected before the exchange token is sent to the partner.
 */
export const acceptDelegationRequest: API.OperationMethod<
  AcceptDelegationRequestRequest,
  AcceptDelegationRequestResponse,
  AcceptDelegationRequestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AcceptDelegationRequestRequest,
  output: AcceptDelegationRequestResponse,
  errors: [ConcurrentModificationException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcceptDelegationRequest",
}));

export type AcquireRoleError =
  | ConcurrentModificationException
  | EntityAlreadyExistsException
  | InvalidInputException
  | LimitExceededException
  | MalformedPolicyDocumentException
  | NameConflictException
  | NoSuchEntityException
  | RoleModifiedException
  | RoleTemplateDisabledException
  | ServiceFailureException
  | CommonErrors;
/**
 * Creates an IAM role from the specified role template. The new role takes its
 * configuration--including its name, path, trust policy, inline and managed policies,
 * permissions boundary, tags, and maximum session duration--from the role
 * template version that you specify. For more information about roles, see IAM roles in the
 * *IAM User Guide*.
 *
 * If the template version defines parameters, use the `ReplacementValues`
 * parameter to supply the values that the service substitutes into the role during
 * creation.
 */
export const acquireRole: API.OperationMethod<
  AcquireRoleRequest,
  AcquireRoleResponse,
  AcquireRoleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AcquireRoleRequest,
  output: AcquireRoleResponse,
  errors: [
    ConcurrentModificationException,
    EntityAlreadyExistsException,
    InvalidInputException,
    LimitExceededException,
    MalformedPolicyDocumentException,
    NameConflictException,
    NoSuchEntityException,
    RoleModifiedException,
    RoleTemplateDisabledException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcquireRole",
}));

export type AddClientIDToOpenIDConnectProviderError =
  | ConcurrentModificationException
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Adds a new client ID (also known as audience) to the list of client IDs already
 * registered for the specified IAM OpenID Connect (OIDC) provider resource.
 *
 * This operation is idempotent; it does not fail or return an error if you add an
 * existing client ID to the provider.
 */
export const addClientIDToOpenIDConnectProvider: API.OperationMethod<
  AddClientIDToOpenIDConnectProviderRequest,
  AddClientIDToOpenIDConnectProviderResponse,
  AddClientIDToOpenIDConnectProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddClientIDToOpenIDConnectProviderRequest,
  output: AddClientIDToOpenIDConnectProviderResponse,
  errors: [
    ConcurrentModificationException,
    InvalidInputException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddClientIDToOpenIDConnectProvider",
}));

export type AddRoleToInstanceProfileError =
  | EntityAlreadyExistsException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | UnmodifiableEntityException
  | CommonErrors;
/**
 * Adds the specified IAM role to the specified instance profile. An instance profile
 * can contain only one role, and this quota cannot be increased. You can remove the
 * existing role and then add a different role to an instance profile. You must then wait
 * for the change to appear across all of Amazon Web Services because of eventual
 * consistency. To force the change, you must disassociate the instance profile and then associate the
 * instance profile, or you can stop your instance and then restart it.
 *
 * The caller of this operation must be granted the `PassRole` permission
 * on the IAM role by a permissions policy.
 *
 * When using the iam:AssociatedResourceArn condition in a policy to restrict the PassRole IAM action, special considerations apply if the policy is
 * intended to define access for the `AddRoleToInstanceProfile` action. In
 * this case, you cannot specify a Region or instance ID in the EC2 instance ARN. The
 * ARN value must be `arn:aws:ec2:*:CallerAccountId:instance/*`. Using any
 * other ARN value may lead to unexpected evaluation results.
 *
 * For more information about roles, see IAM roles in the
 * *IAM User Guide*. For more information about instance profiles,
 * see Using
 * instance profiles in the *IAM User Guide*.
 */
export const addRoleToInstanceProfile: API.OperationMethod<
  AddRoleToInstanceProfileRequest,
  AddRoleToInstanceProfileResponse,
  AddRoleToInstanceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddRoleToInstanceProfileRequest,
  output: AddRoleToInstanceProfileResponse,
  errors: [
    EntityAlreadyExistsException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
    UnmodifiableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddRoleToInstanceProfile",
}));

export type AddUserToGroupError =
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Adds the specified user to the specified group.
 */
export const addUserToGroup: API.OperationMethod<
  AddUserToGroupRequest,
  AddUserToGroupResponse,
  AddUserToGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddUserToGroupRequest,
  output: AddUserToGroupResponse,
  errors: [LimitExceededException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddUserToGroup",
}));

export type AssociateDelegationRequestError =
  | ConcurrentModificationException
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Associates a delegation request with the current identity.
 *
 * If the partner that created the delegation request has specified the owner account during creation,
 * only an identity from that owner account can call the `AssociateDelegationRequest` API for
 * the specified delegation request. Once the `AssociateDelegationRequest` API call is successful,
 * the ARN of the current calling identity will be stored as the
 * `ownerId`
 * of the request.
 *
 * If the partner that created the delegation request has not specified the owner account during creation,
 * any caller from any account can call the `AssociateDelegationRequest` API for
 * the delegation request. Once this API call is successful, the ARN of the current calling identity will be stored as the
 * `ownerId`
 * and the Amazon Web Services account ID of the current calling identity will be stored as the
 * `ownerAccount`
 * of the request.
 *
 * For more details, see
 *
 * Managing Permissions for Delegation Requests.
 */
export const associateDelegationRequest: API.OperationMethod<
  AssociateDelegationRequestRequest,
  AssociateDelegationRequestResponse,
  AssociateDelegationRequestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateDelegationRequestRequest,
  output: AssociateDelegationRequestResponse,
  errors: [
    ConcurrentModificationException,
    InvalidInputException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateDelegationRequest",
}));

export type AttachGroupPolicyError =
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | PolicyNotAttachableException
  | ServiceFailureException
  | CommonErrors;
/**
 * Attaches the specified managed policy to the specified IAM group.
 *
 * You use this operation to attach a managed policy to a group. To embed an inline
 * policy in a group, use
 * `PutGroupPolicy`
 * .
 *
 * As a best practice, you can validate your IAM policies.
 * To learn more, see Validating IAM policies
 * in the *IAM User Guide*.
 *
 * For more information about policies, see Managed policies and inline
 * policies in the *IAM User Guide*.
 */
export const attachGroupPolicy: API.OperationMethod<
  AttachGroupPolicyRequest,
  AttachGroupPolicyResponse,
  AttachGroupPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AttachGroupPolicyRequest,
  output: AttachGroupPolicyResponse,
  errors: [
    InvalidInputException,
    LimitExceededException,
    NoSuchEntityException,
    PolicyNotAttachableException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AttachGroupPolicy",
}));

export type AttachRolePolicyError =
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | PolicyNotAttachableException
  | ServiceFailureException
  | UnmodifiableEntityException
  | CommonErrors;
/**
 * Attaches the specified managed policy to the specified IAM role. When you attach a
 * managed policy to a role, the managed policy becomes part of the role's permission
 * (access) policy.
 *
 * You cannot use a managed policy as the role's trust policy. The role's trust
 * policy is created at the same time as the role, using
 * `CreateRole`
 * . You can update a role's trust policy using
 *
 * `UpdateAssumerolePolicy`
 * .
 *
 * Use this operation to attach a *managed* policy to a role. To embed
 * an inline policy in a role, use
 * `PutRolePolicy`
 * . For more information about policies, see Managed
 * policies and inline policies in the
 * *IAM User Guide*.
 *
 * As a best practice, you can validate your IAM policies.
 * To learn more, see Validating IAM policies
 * in the *IAM User Guide*.
 */
export const attachRolePolicy: API.OperationMethod<
  AttachRolePolicyRequest,
  AttachRolePolicyResponse,
  AttachRolePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AttachRolePolicyRequest,
  output: AttachRolePolicyResponse,
  errors: [
    InvalidInputException,
    LimitExceededException,
    NoSuchEntityException,
    PolicyNotAttachableException,
    ServiceFailureException,
    UnmodifiableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AttachRolePolicy",
}));

export type AttachUserPolicyError =
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | PolicyNotAttachableException
  | ServiceFailureException
  | CommonErrors;
/**
 * Attaches the specified managed policy to the specified user.
 *
 * You use this operation to attach a *managed* policy to a user. To
 * embed an inline policy in a user, use
 * `PutUserPolicy`
 * .
 *
 * As a best practice, you can validate your IAM policies.
 * To learn more, see Validating IAM policies
 * in the *IAM User Guide*.
 *
 * For more information about policies, see Managed policies and inline
 * policies in the *IAM User Guide*.
 */
export const attachUserPolicy: API.OperationMethod<
  AttachUserPolicyRequest,
  AttachUserPolicyResponse,
  AttachUserPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AttachUserPolicyRequest,
  output: AttachUserPolicyResponse,
  errors: [
    InvalidInputException,
    LimitExceededException,
    NoSuchEntityException,
    PolicyNotAttachableException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AttachUserPolicy",
}));

export type ChangePasswordError =
  | EntityTemporarilyUnmodifiableException
  | InvalidUserTypeException
  | LimitExceededException
  | NoSuchEntityException
  | PasswordPolicyViolationException
  | ServiceFailureException
  | CommonErrors;
/**
 * Changes the password of the IAM user who is calling this operation. This operation
 * can be performed using the CLI, the Amazon Web Services API, or the My
 * Security Credentials page in the Amazon Web Services Management Console. The Amazon Web Services account root user password is
 * not affected by this operation.
 *
 * Use UpdateLoginProfile
 * to use the CLI, the Amazon Web Services API, or the **Users** page in
 * the IAM console to change the password for any IAM user. For more information about
 * modifying passwords, see Managing passwords in the
 * *IAM User Guide*.
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
    EntityTemporarilyUnmodifiableException,
    InvalidUserTypeException,
    LimitExceededException,
    NoSuchEntityException,
    PasswordPolicyViolationException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ChangePassword",
}));

export type CreateAccessKeyError =
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Creates a new Amazon Web Services secret access key and corresponding Amazon Web Services access key ID for the
 * specified user. The default status for new keys is `Active`.
 *
 * If you do not specify a user name, IAM determines the user name implicitly based on
 * the Amazon Web Services access key ID signing the request. This operation works for access keys under
 * the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root
 * user credentials. This is true even if the Amazon Web Services account has no associated users.
 *
 * For information about quotas on the number of keys you can create, see IAM and STS
 * quotas in the *IAM User Guide*.
 *
 * To ensure the security of your Amazon Web Services account, the secret access key is accessible
 * only during key and user creation. You must save the key (for example, in a text
 * file) if you want to be able to access it again. If a secret key is lost, you can
 * delete the access keys for the associated user and then create new keys.
 */
export const createAccessKey: API.OperationMethod<
  CreateAccessKeyRequest,
  CreateAccessKeyResponse,
  CreateAccessKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAccessKeyRequest,
  output: CreateAccessKeyResponse,
  errors: [LimitExceededException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAccessKey",
}));

export type CreateAccountAliasError =
  | ConcurrentModificationException
  | EntityAlreadyExistsException
  | LimitExceededException
  | ServiceFailureException
  | CommonErrors;
/**
 * Creates an alias for your Amazon Web Services account. For information about using an Amazon Web Services account
 * alias, see Creating, deleting, and
 * listing an Amazon Web Services account alias in the Amazon Web Services Sign-In User
 * Guide.
 */
export const createAccountAlias: API.OperationMethod<
  CreateAccountAliasRequest,
  CreateAccountAliasResponse,
  CreateAccountAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAccountAliasRequest,
  output: CreateAccountAliasResponse,
  errors: [
    ConcurrentModificationException,
    EntityAlreadyExistsException,
    LimitExceededException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAccountAlias",
}));

export type CreateDelegationRequestError =
  | ConcurrentModificationException
  | EntityAlreadyExistsException
  | InvalidInputException
  | LimitExceededException
  | ServiceFailureException
  | CommonErrors;
/**
 * Creates an IAM delegation request for temporary access delegation.
 *
 * This API is not available for general use. In order to use this API, a caller first need to
 * go through an onboarding process described in the
 * partner onboarding documentation.
 */
export const createDelegationRequest: API.OperationMethod<
  CreateDelegationRequestRequest,
  CreateDelegationRequestResponse,
  CreateDelegationRequestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDelegationRequestRequest,
  output: CreateDelegationRequestResponse,
  errors: [
    ConcurrentModificationException,
    EntityAlreadyExistsException,
    InvalidInputException,
    LimitExceededException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDelegationRequest",
}));

export type CreateGroupError =
  | EntityAlreadyExistsException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Creates a new group.
 *
 * For information about the number of groups you can create, see IAM and STS
 * quotas in the *IAM User Guide*.
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
    EntityAlreadyExistsException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateGroup",
}));

export type CreateInstanceProfileError =
  | ConcurrentModificationException
  | EntityAlreadyExistsException
  | InvalidInputException
  | LimitExceededException
  | ServiceFailureException
  | CommonErrors;
/**
 * Creates a new instance profile. For information about instance profiles, see Using
 * roles for applications on Amazon EC2 in the
 * *IAM User Guide*, and Instance profiles in the *Amazon EC2 User Guide*.
 *
 * For information about the number of instance profiles you can create, see IAM object
 * quotas in the *IAM User Guide*.
 */
export const createInstanceProfile: API.OperationMethod<
  CreateInstanceProfileRequest,
  CreateInstanceProfileResponse,
  CreateInstanceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateInstanceProfileRequest,
  output: CreateInstanceProfileResponse,
  errors: [
    ConcurrentModificationException,
    EntityAlreadyExistsException,
    InvalidInputException,
    LimitExceededException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateInstanceProfile",
}));

export type CreateLoginProfileError =
  | EntityAlreadyExistsException
  | LimitExceededException
  | NoSuchEntityException
  | PasswordPolicyViolationException
  | ServiceFailureException
  | CommonErrors;
/**
 * Creates a password for the specified IAM user. A password allows an IAM user to
 * access Amazon Web Services services through the Amazon Web Services Management Console.
 *
 * You can use the CLI, the Amazon Web Services API, or the **Users**
 * page in the IAM console to create a password for any IAM user. Use ChangePassword to update your own existing password in the **My Security Credentials** page in the Amazon Web Services Management Console.
 *
 * For more information about managing passwords, see Managing passwords in the
 * *IAM User Guide*.
 */
export const createLoginProfile: API.OperationMethod<
  CreateLoginProfileRequest,
  CreateLoginProfileResponse,
  CreateLoginProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLoginProfileRequest,
  output: CreateLoginProfileResponse,
  errors: [
    EntityAlreadyExistsException,
    LimitExceededException,
    NoSuchEntityException,
    PasswordPolicyViolationException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLoginProfile",
}));

export type CreateOpenIDConnectProviderError =
  | ConcurrentModificationException
  | EntityAlreadyExistsException
  | InvalidInputException
  | LimitExceededException
  | OpenIdIdpCommunicationErrorException
  | ServiceFailureException
  | CommonErrors;
/**
 * Creates an IAM entity to describe an identity provider (IdP) that supports OpenID Connect (OIDC).
 *
 * The OIDC provider that you create with this operation can be used as a principal in a
 * role's trust policy. Such a policy establishes a trust relationship between Amazon Web Services and
 * the OIDC provider.
 *
 * If you are using an OIDC identity provider from Google, Facebook, or Amazon Cognito, you don't
 * need to create a separate IAM identity provider. These OIDC identity providers are
 * already built-in to Amazon Web Services and are available for your use. Instead, you can move directly
 * to creating new roles using your identity provider. To learn more, see Creating
 * a role for web identity or OpenID connect federation in the IAM
 * User Guide.
 *
 * When you create the IAM OIDC provider, you specify the following:
 *
 * - The URL of the OIDC identity provider (IdP) to trust
 *
 * - A list of client IDs (also known as audiences) that identify the application
 * or applications allowed to authenticate using the OIDC provider
 *
 * - A list of tags that are attached to the specified IAM OIDC provider
 *
 * - A list of thumbprints of one or more server certificates that the IdP
 * uses
 *
 * You get all of this information from the OIDC IdP you want to use to access
 * Amazon Web Services.
 *
 * Amazon Web Services secures communication with OIDC identity providers (IdPs) using our library of
 * trusted root certificate authorities (CAs) to verify the JSON Web Key Set (JWKS)
 * endpoint's TLS certificate. If your OIDC IdP relies on a certificate that is not signed
 * by one of these trusted CAs, only then we secure communication using the thumbprints set
 * in the IdP's configuration.
 *
 * The trust for the OIDC provider is derived from the IAM provider that this
 * operation creates. Therefore, it is best to limit access to the CreateOpenIDConnectProvider operation to highly privileged
 * users.
 */
export const createOpenIDConnectProvider: API.OperationMethod<
  CreateOpenIDConnectProviderRequest,
  CreateOpenIDConnectProviderResponse,
  CreateOpenIDConnectProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateOpenIDConnectProviderRequest,
  output: CreateOpenIDConnectProviderResponse,
  errors: [
    ConcurrentModificationException,
    EntityAlreadyExistsException,
    InvalidInputException,
    LimitExceededException,
    OpenIdIdpCommunicationErrorException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateOpenIDConnectProvider",
}));

export type CreatePolicyError =
  | ConcurrentModificationException
  | EntityAlreadyExistsException
  | InvalidInputException
  | LimitExceededException
  | MalformedPolicyDocumentException
  | ServiceFailureException
  | CommonErrors;
/**
 * Creates a new managed policy for your Amazon Web Services account.
 *
 * This operation creates a policy version with a version identifier of `v1`
 * and sets v1 as the policy's default version. For more information about policy versions,
 * see Versioning for managed policies in the
 * *IAM User Guide*.
 *
 * As a best practice, you can validate your IAM policies.
 * To learn more, see Validating IAM policies
 * in the *IAM User Guide*.
 *
 * For more information about managed policies in general, see Managed
 * policies and inline policies in the
 * *IAM User Guide*.
 */
export const createPolicy: API.OperationMethod<
  CreatePolicyRequest,
  CreatePolicyResponse,
  CreatePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreatePolicyRequest,
  output: CreatePolicyResponse,
  errors: [
    ConcurrentModificationException,
    EntityAlreadyExistsException,
    InvalidInputException,
    LimitExceededException,
    MalformedPolicyDocumentException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePolicy",
}));

export type CreatePolicyVersionError =
  | InvalidInputException
  | LimitExceededException
  | MalformedPolicyDocumentException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Creates a new version of the specified managed policy. To update a managed policy, you
 * create a new policy version. A managed policy can have up to five versions. If the
 * policy has five versions, you must delete an existing version using DeletePolicyVersion before you create a new version.
 *
 * Optionally, you can set the new version as the policy's default version. The default
 * version is the version that is in effect for the IAM users, groups, and roles to which
 * the policy is attached.
 *
 * For more information about managed policy versions, see Versioning for managed
 * policies in the *IAM User Guide*.
 */
export const createPolicyVersion: API.OperationMethod<
  CreatePolicyVersionRequest,
  CreatePolicyVersionResponse,
  CreatePolicyVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreatePolicyVersionRequest,
  output: CreatePolicyVersionResponse,
  errors: [
    InvalidInputException,
    LimitExceededException,
    MalformedPolicyDocumentException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePolicyVersion",
}));

export type CreateRoleError =
  | ConcurrentModificationException
  | EntityAlreadyExistsException
  | InvalidInputException
  | LimitExceededException
  | MalformedPolicyDocumentException
  | ServiceFailureException
  | CommonErrors;
/**
 * Creates a new role for your Amazon Web Services account.
 *
 * For more information about roles, see IAM roles in the
 * *IAM User Guide*. For information about quotas for role names
 * and the number of roles you can create, see IAM and STS quotas in the
 * *IAM User Guide*.
 */
export const createRole: API.OperationMethod<
  CreateRoleRequest,
  CreateRoleResponse,
  CreateRoleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateRoleRequest,
  output: CreateRoleResponse,
  errors: [
    ConcurrentModificationException,
    EntityAlreadyExistsException,
    InvalidInputException,
    LimitExceededException,
    MalformedPolicyDocumentException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRole",
}));

export type CreateSAMLProviderError =
  | ConcurrentModificationException
  | EntityAlreadyExistsException
  | InvalidInputException
  | LimitExceededException
  | ServiceFailureException
  | CommonErrors;
/**
 * Creates an IAM resource that describes an identity provider (IdP) that supports SAML
 * 2.0.
 *
 * The SAML provider resource that you create with this operation can be used as a
 * principal in an IAM role's trust policy. Such a policy can enable federated users who
 * sign in using the SAML IdP to assume the role. You can create an IAM role that
 * supports Web-based single sign-on (SSO) to the Amazon Web Services Management Console or one that supports API access
 * to Amazon Web Services.
 *
 * When you create the SAML provider resource, you upload a SAML metadata document that
 * you get from your IdP. That document includes the issuer's name, expiration information,
 * and keys that can be used to validate the SAML authentication response (assertions) that
 * the IdP sends. You must generate the metadata document using the identity management
 * software that is used as your organization's IdP.
 *
 * This operation requires Signature Version 4.
 *
 * For more information, see Enabling SAML 2.0
 * federated users to access the Amazon Web Services Management Console and About SAML 2.0-based
 * federation in the *IAM User Guide*.
 */
export const createSAMLProvider: API.OperationMethod<
  CreateSAMLProviderRequest,
  CreateSAMLProviderResponse,
  CreateSAMLProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSAMLProviderRequest,
  output: CreateSAMLProviderResponse,
  errors: [
    ConcurrentModificationException,
    EntityAlreadyExistsException,
    InvalidInputException,
    LimitExceededException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSAMLProvider",
}));

export type CreateServiceLinkedRoleError =
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Creates an IAM role that is linked to a specific Amazon Web Services service. The service controls
 * the attached policies and when the role can be deleted. This helps ensure that the
 * service is not broken by an unexpectedly changed or deleted role, which could put your
 * Amazon Web Services resources into an unknown state. Allowing the service to control the role helps
 * improve service stability and proper cleanup when a service and its role are no longer
 * needed. For more information, see Using service-linked
 * roles in the *IAM User Guide*.
 *
 * To attach a policy to this service-linked role, you must make the request using the
 * Amazon Web Services service that depends on this role.
 */
export const createServiceLinkedRole: API.OperationMethod<
  CreateServiceLinkedRoleRequest,
  CreateServiceLinkedRoleResponse,
  CreateServiceLinkedRoleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateServiceLinkedRoleRequest,
  output: CreateServiceLinkedRoleResponse,
  errors: [
    InvalidInputException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateServiceLinkedRole",
}));

export type CreateServiceSpecificCredentialError =
  | LimitExceededException
  | NoSuchEntityException
  | ServiceNotSupportedException
  | CommonErrors;
/**
 * Generates a set of credentials consisting of a user name and password that can be used
 * to access the service specified in the request. These credentials are generated by
 * IAM, and can be used only for the specified service.
 *
 * You can have a maximum of two sets of service-specific credentials for each supported
 * service per user.
 *
 * You can reset the password to a new service-generated value by calling ResetServiceSpecificCredential.
 *
 * For more information about using service-specific credentials to authenticate to an
 * Amazon Web Services service, refer to the following docs:
 *
 * - For service-specific credentials with CodeCommit, refer to IAM credentials for CodeCommit: Git credentials, SSH keys, and Amazon Web Services access
 * keys in the *IAM User Guide*.
 *
 * - For service-specific credentials with Amazon Keyspaces (for Apache Cassandra), refer to Use IAM with
 * Amazon Keyspaces (for Apache Cassandra) in the
 * *IAM User Guide*.
 *
 * - For services that support long-term API keys, refer to API
 * keys for Amazon Web Services services in the
 * *IAM User Guide*.
 */
export const createServiceSpecificCredential: API.OperationMethod<
  CreateServiceSpecificCredentialRequest,
  CreateServiceSpecificCredentialResponse,
  CreateServiceSpecificCredentialError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateServiceSpecificCredentialRequest,
  output: CreateServiceSpecificCredentialResponse,
  errors: [LimitExceededException, NoSuchEntityException, ServiceNotSupportedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateServiceSpecificCredential",
}));

export type CreateUserError =
  | ConcurrentModificationException
  | EntityAlreadyExistsException
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Creates a new IAM user for your Amazon Web Services account.
 *
 * For information about quotas for the number of IAM users you can create, see IAM and STS
 * quotas in the *IAM User Guide*.
 */
export const createUser: API.OperationMethod<
  CreateUserRequest,
  CreateUserResponse,
  CreateUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateUserRequest,
  output: CreateUserResponse,
  errors: [
    ConcurrentModificationException,
    EntityAlreadyExistsException,
    InvalidInputException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateUser",
}));

export type CreateVirtualMFADeviceError =
  | ConcurrentModificationException
  | EntityAlreadyExistsException
  | InvalidInputException
  | LimitExceededException
  | ServiceFailureException
  | CommonErrors;
/**
 * Creates a new virtual MFA device for the Amazon Web Services account. After creating the virtual
 * MFA, use EnableMFADevice to
 * attach the MFA device to an IAM user. For more information about creating and working
 * with virtual MFA devices, see Using a virtual MFA device in the
 * *IAM User Guide*.
 *
 * For information about the maximum number of MFA devices you can create, see IAM and STS
 * quotas in the *IAM User Guide*.
 *
 * The seed information contained in the QR code and the Base32 string should be
 * treated like any other secret access information. In other words, protect the seed
 * information as you would your Amazon Web Services access keys or your passwords. After you
 * provision your virtual device, you should ensure that the information is destroyed
 * following secure procedures.
 */
export const createVirtualMFADevice: API.OperationMethod<
  CreateVirtualMFADeviceRequest,
  CreateVirtualMFADeviceResponse,
  CreateVirtualMFADeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateVirtualMFADeviceRequest,
  output: CreateVirtualMFADeviceResponse,
  errors: [
    ConcurrentModificationException,
    EntityAlreadyExistsException,
    InvalidInputException,
    LimitExceededException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateVirtualMFADevice",
}));

export type DeactivateMFADeviceError =
  | ConcurrentModificationException
  | EntityTemporarilyUnmodifiableException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Deactivates the specified MFA device and removes it from association with the user
 * name for which it was originally enabled.
 *
 * For more information about creating and working with virtual MFA devices, see Enabling a virtual
 * multi-factor authentication (MFA) device in the
 * *IAM User Guide*.
 */
export const deactivateMFADevice: API.OperationMethod<
  DeactivateMFADeviceRequest,
  DeactivateMFADeviceResponse,
  DeactivateMFADeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeactivateMFADeviceRequest,
  output: DeactivateMFADeviceResponse,
  errors: [
    ConcurrentModificationException,
    EntityTemporarilyUnmodifiableException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeactivateMFADevice",
}));

export type DeleteAccessKeyError =
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Deletes the access key pair associated with the specified IAM user.
 *
 * If you do not specify a user name, IAM determines the user name implicitly based on
 * the Amazon Web Services access key ID signing the request. This operation works for access keys under
 * the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root
 * user credentials even if the Amazon Web Services account has no associated users.
 */
export const deleteAccessKey: API.OperationMethod<
  DeleteAccessKeyRequest,
  DeleteAccessKeyResponse,
  DeleteAccessKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccessKeyRequest,
  output: DeleteAccessKeyResponse,
  errors: [LimitExceededException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAccessKey",
}));

export type DeleteAccountAliasError =
  | ConcurrentModificationException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Deletes the specified Amazon Web Services account alias. For information about using an Amazon Web Services
 * account alias, see Creating, deleting, and
 * listing an Amazon Web Services account alias in the Amazon Web Services Sign-In User
 * Guide.
 */
export const deleteAccountAlias: API.OperationMethod<
  DeleteAccountAliasRequest,
  DeleteAccountAliasResponse,
  DeleteAccountAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccountAliasRequest,
  output: DeleteAccountAliasResponse,
  errors: [
    ConcurrentModificationException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAccountAlias",
}));

export type DeleteAccountPasswordPolicyError =
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Deletes the password policy for the Amazon Web Services account. There are no parameters.
 */
export const deleteAccountPasswordPolicy: API.OperationMethod<
  DeleteAccountPasswordPolicyRequest,
  DeleteAccountPasswordPolicyResponse,
  DeleteAccountPasswordPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccountPasswordPolicyRequest,
  output: DeleteAccountPasswordPolicyResponse,
  errors: [LimitExceededException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAccountPasswordPolicy",
}));

export type DeleteGroupError =
  | DeleteConflictException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Deletes the specified IAM group. The group must not contain any users or have any
 * attached policies.
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
    DeleteConflictException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteGroup",
}));

export type DeleteGroupPolicyError =
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Deletes the specified inline policy that is embedded in the specified IAM
 * group.
 *
 * A group can also have managed policies attached to it. To detach a managed policy from
 * a group, use DetachGroupPolicy.
 * For more information about policies, refer to Managed policies and inline
 * policies in the *IAM User Guide*.
 */
export const deleteGroupPolicy: API.OperationMethod<
  DeleteGroupPolicyRequest,
  DeleteGroupPolicyResponse,
  DeleteGroupPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteGroupPolicyRequest,
  output: DeleteGroupPolicyResponse,
  errors: [LimitExceededException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteGroupPolicy",
}));

export type DeleteInstanceProfileError =
  | DeleteConflictException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Deletes the specified instance profile. The instance profile must not have an
 * associated role.
 *
 * Make sure that you do not have any Amazon EC2 instances running with the instance
 * profile you are about to delete. Deleting a role or instance profile that is
 * associated with a running instance will break any applications running on the
 * instance.
 *
 * For more information about instance profiles, see Using
 * instance profiles in the *IAM User Guide*.
 */
export const deleteInstanceProfile: API.OperationMethod<
  DeleteInstanceProfileRequest,
  DeleteInstanceProfileResponse,
  DeleteInstanceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteInstanceProfileRequest,
  output: DeleteInstanceProfileResponse,
  errors: [
    DeleteConflictException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteInstanceProfile",
}));

export type DeleteLoginProfileError =
  | EntityTemporarilyUnmodifiableException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Deletes the password for the specified IAM user or root user, For more information, see
 * Managing
 * passwords for IAM users.
 *
 * You can use the CLI, the Amazon Web Services API, or the **Users**
 * page in the IAM console to delete a password for any IAM user. You can use ChangePassword to update, but not delete, your own password in the
 * **My Security Credentials** page in the
 * Amazon Web Services Management Console.
 *
 * Deleting a user's password does not prevent a user from accessing Amazon Web Services through
 * the command line interface or the API. To prevent all user access, you must also
 * either make any access keys inactive or delete them. For more information about
 * making keys inactive or deleting them, see UpdateAccessKey
 * and DeleteAccessKey.
 */
export const deleteLoginProfile: API.OperationMethod<
  DeleteLoginProfileRequest,
  DeleteLoginProfileResponse,
  DeleteLoginProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteLoginProfileRequest,
  output: DeleteLoginProfileResponse,
  errors: [
    EntityTemporarilyUnmodifiableException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLoginProfile",
}));

export type DeleteOpenIDConnectProviderError =
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Deletes an OpenID Connect identity provider (IdP) resource object in IAM.
 *
 * Deleting an IAM OIDC provider resource does not update any roles that reference the
 * provider as a principal in their trust policies. Any attempt to assume a role that
 * references a deleted provider fails.
 *
 * This operation is idempotent; it does not fail or return an error if you call the
 * operation for a provider that does not exist.
 */
export const deleteOpenIDConnectProvider: API.OperationMethod<
  DeleteOpenIDConnectProviderRequest,
  DeleteOpenIDConnectProviderResponse,
  DeleteOpenIDConnectProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteOpenIDConnectProviderRequest,
  output: DeleteOpenIDConnectProviderResponse,
  errors: [InvalidInputException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteOpenIDConnectProvider",
}));

export type DeletePolicyError =
  | DeleteConflictException
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Deletes the specified managed policy.
 *
 * Before you can delete a managed policy, you must first detach the policy from all
 * users, groups, and roles that it is attached to. In addition, you must delete all the
 * policy's versions. The following steps describe the process for deleting a managed
 * policy:
 *
 * - Detach the policy from all users, groups, and roles that the policy is
 * attached to, using DetachUserPolicy, DetachGroupPolicy, or DetachRolePolicy. To list all the users, groups, and roles that a
 * policy is attached to, use ListEntitiesForPolicy.
 *
 * - Delete all versions of the policy using DeletePolicyVersion. To list the policy's versions, use ListPolicyVersions. You cannot use DeletePolicyVersion to delete the version that is marked as the
 * default version. You delete the policy's default version in the next step of the
 * process.
 *
 * - Delete the policy (this automatically deletes the policy's default version)
 * using this operation.
 *
 * For information about managed policies, see Managed policies and inline
 * policies in the *IAM User Guide*.
 */
export const deletePolicy: API.OperationMethod<
  DeletePolicyRequest,
  DeletePolicyResponse,
  DeletePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeletePolicyRequest,
  output: DeletePolicyResponse,
  errors: [
    DeleteConflictException,
    InvalidInputException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePolicy",
}));

export type DeletePolicyVersionError =
  | DeleteConflictException
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Deletes the specified version from the specified managed policy.
 *
 * You cannot delete the default version from a policy using this operation. To delete
 * the default version from a policy, use DeletePolicy. To find
 * out which version of a policy is marked as the default version, use ListPolicyVersions.
 *
 * For information about versions for managed policies, see Versioning for managed
 * policies in the *IAM User Guide*.
 */
export const deletePolicyVersion: API.OperationMethod<
  DeletePolicyVersionRequest,
  DeletePolicyVersionResponse,
  DeletePolicyVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeletePolicyVersionRequest,
  output: DeletePolicyVersionResponse,
  errors: [
    DeleteConflictException,
    InvalidInputException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePolicyVersion",
}));

export type DeleteRoleError =
  | ConcurrentModificationException
  | DeleteConflictException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | UnmodifiableEntityException
  | CommonErrors;
/**
 * Deletes the specified role. Unlike the Amazon Web Services Management Console, when you delete a role
 * programmatically, you must delete the items attached to the role manually, or the
 * deletion fails. For more information, see Deleting an IAM role. Before attempting to delete a role, remove the
 * following attached items:
 *
 * - Inline policies (DeleteRolePolicy)
 *
 * - Attached managed policies (DetachRolePolicy)
 *
 * - Instance profile (RemoveRoleFromInstanceProfile)
 *
 * - Optional - Delete instance profile after detaching from role for
 * resource clean up (DeleteInstanceProfile)
 *
 * Make sure that you do not have any Amazon EC2 instances running with the role you are
 * about to delete. Deleting a role or instance profile that is associated with a
 * running instance will break any applications running on the instance.
 */
export const deleteRole: API.OperationMethod<
  DeleteRoleRequest,
  DeleteRoleResponse,
  DeleteRoleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteRoleRequest,
  output: DeleteRoleResponse,
  errors: [
    ConcurrentModificationException,
    DeleteConflictException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
    UnmodifiableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRole",
}));

export type DeleteRolePermissionsBoundaryError =
  | NoSuchEntityException
  | ServiceFailureException
  | UnmodifiableEntityException
  | CommonErrors;
/**
 * Deletes the permissions boundary for the specified IAM role.
 *
 * You cannot set the boundary for a service-linked role.
 *
 * Deleting the permissions boundary for a role might increase its permissions. For
 * example, it might allow anyone who assumes the role to perform all the actions
 * granted in its permissions policies.
 */
export const deleteRolePermissionsBoundary: API.OperationMethod<
  DeleteRolePermissionsBoundaryRequest,
  DeleteRolePermissionsBoundaryResponse,
  DeleteRolePermissionsBoundaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteRolePermissionsBoundaryRequest,
  output: DeleteRolePermissionsBoundaryResponse,
  errors: [NoSuchEntityException, ServiceFailureException, UnmodifiableEntityException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRolePermissionsBoundary",
}));

export type DeleteRolePolicyError =
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | UnmodifiableEntityException
  | CommonErrors;
/**
 * Deletes the specified inline policy that is embedded in the specified IAM
 * role.
 *
 * A role can also have managed policies attached to it. To detach a managed policy from
 * a role, use DetachRolePolicy.
 * For more information about policies, refer to Managed policies and inline
 * policies in the *IAM User Guide*.
 */
export const deleteRolePolicy: API.OperationMethod<
  DeleteRolePolicyRequest,
  DeleteRolePolicyResponse,
  DeleteRolePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteRolePolicyRequest,
  output: DeleteRolePolicyResponse,
  errors: [
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
    UnmodifiableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRolePolicy",
}));

export type DeleteSAMLProviderError =
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Deletes a SAML provider resource in IAM.
 *
 * Deleting the provider resource from IAM does not update any roles that reference the
 * SAML provider resource's ARN as a principal in their trust policies. Any attempt to
 * assume a role that references a non-existent provider resource ARN fails.
 *
 * This operation requires Signature Version 4.
 */
export const deleteSAMLProvider: API.OperationMethod<
  DeleteSAMLProviderRequest,
  DeleteSAMLProviderResponse,
  DeleteSAMLProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSAMLProviderRequest,
  output: DeleteSAMLProviderResponse,
  errors: [
    InvalidInputException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSAMLProvider",
}));

export type DeleteServerCertificateError =
  | DeleteConflictException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Deletes the specified server certificate.
 *
 * For more information about working with server certificates, see Working
 * with server certificates in the *IAM User Guide*. This
 * topic also includes a list of Amazon Web Services services that can use the server certificates that
 * you manage with IAM.
 *
 * If you are using a server certificate with Elastic Load Balancing, deleting the
 * certificate could have implications for your application. If Elastic Load Balancing
 * doesn't detect the deletion of bound certificates, it may continue to use the
 * certificates. This could cause Elastic Load Balancing to stop accepting traffic. We
 * recommend that you remove the reference to the certificate from Elastic Load
 * Balancing before using this command to delete the certificate. For more information,
 * see DeleteLoadBalancerListeners in the Elastic Load Balancing API
 * Reference.
 */
export const deleteServerCertificate: API.OperationMethod<
  DeleteServerCertificateRequest,
  DeleteServerCertificateResponse,
  DeleteServerCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteServerCertificateRequest,
  output: DeleteServerCertificateResponse,
  errors: [
    DeleteConflictException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteServerCertificate",
}));

export type DeleteServiceLinkedRoleError =
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Submits a service-linked role deletion request and returns a
 * `DeletionTaskId`, which you can use to check the status of the deletion.
 * Before you call this operation, confirm that the role has no active sessions and that
 * any resources used by the role in the linked service are deleted. If you call this
 * operation more than once for the same service-linked role and an earlier deletion task
 * is not complete, then the `DeletionTaskId` of the earlier request is
 * returned.
 *
 * If you submit a deletion request for a service-linked role whose linked service is
 * still accessing a resource, then the deletion task fails. If it fails, the GetServiceLinkedRoleDeletionStatus operation returns the reason for the
 * failure, usually including the resources that must be deleted. To delete the
 * service-linked role, you must first remove those resources from the linked service and
 * then submit the deletion request again. Resources are specific to the service that is
 * linked to the role. For more information about removing resources from a service, see
 * the Amazon Web Services documentation for your
 * service.
 *
 * For more information about service-linked roles, see Roles terms and concepts: Amazon Web Services service-linked role in the
 * *IAM User Guide*.
 */
export const deleteServiceLinkedRole: API.OperationMethod<
  DeleteServiceLinkedRoleRequest,
  DeleteServiceLinkedRoleResponse,
  DeleteServiceLinkedRoleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteServiceLinkedRoleRequest,
  output: DeleteServiceLinkedRoleResponse,
  errors: [LimitExceededException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteServiceLinkedRole",
}));

export type DeleteServiceSpecificCredentialError = NoSuchEntityException | CommonErrors;
/**
 * Deletes the specified service-specific credential.
 */
export const deleteServiceSpecificCredential: API.OperationMethod<
  DeleteServiceSpecificCredentialRequest,
  DeleteServiceSpecificCredentialResponse,
  DeleteServiceSpecificCredentialError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteServiceSpecificCredentialRequest,
  output: DeleteServiceSpecificCredentialResponse,
  errors: [NoSuchEntityException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteServiceSpecificCredential",
}));

export type DeleteSigningCertificateError =
  | ConcurrentModificationException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Deletes a signing certificate associated with the specified IAM user.
 *
 * If you do not specify a user name, IAM determines the user name implicitly based on
 * the Amazon Web Services access key ID signing the request. This operation works for access keys under
 * the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root
 * user credentials even if the Amazon Web Services account has no associated IAM users.
 */
export const deleteSigningCertificate: API.OperationMethod<
  DeleteSigningCertificateRequest,
  DeleteSigningCertificateResponse,
  DeleteSigningCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSigningCertificateRequest,
  output: DeleteSigningCertificateResponse,
  errors: [
    ConcurrentModificationException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSigningCertificate",
}));

export type DeleteSSHPublicKeyError = NoSuchEntityException | CommonErrors;
/**
 * Deletes the specified SSH public key.
 *
 * The SSH public key deleted by this operation is used only for authenticating the
 * associated IAM user to an CodeCommit repository. For more information about using SSH keys
 * to authenticate to an CodeCommit repository, see Set up CodeCommit for
 * SSH connections in the *CodeCommit User Guide*.
 */
export const deleteSSHPublicKey: API.OperationMethod<
  DeleteSSHPublicKeyRequest,
  DeleteSSHPublicKeyResponse,
  DeleteSSHPublicKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSSHPublicKeyRequest,
  output: DeleteSSHPublicKeyResponse,
  errors: [NoSuchEntityException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSSHPublicKey",
}));

export type DeleteUserError =
  | ConcurrentModificationException
  | DeleteConflictException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Deletes the specified IAM user. Unlike the Amazon Web Services Management Console, when you delete a user
 * programmatically, you must delete the items attached to the user manually, or the
 * deletion fails. For more information, see Deleting an IAM
 * user. Before attempting to delete a user, remove the following items:
 *
 * - Password (DeleteLoginProfile)
 *
 * - Access keys (DeleteAccessKey)
 *
 * - Signing certificate (DeleteSigningCertificate)
 *
 * - SSH public key (DeleteSSHPublicKey)
 *
 * - Git credentials (DeleteServiceSpecificCredential)
 *
 * - Multi-factor authentication (MFA) device (DeactivateMFADevice, DeleteVirtualMFADevice)
 *
 * - Inline policies (DeleteUserPolicy)
 *
 * - Attached managed policies (DetachUserPolicy)
 *
 * - Group memberships (RemoveUserFromGroup)
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
    ConcurrentModificationException,
    DeleteConflictException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteUser",
}));

export type DeleteUserPermissionsBoundaryError =
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Deletes the permissions boundary for the specified IAM user.
 *
 * Deleting the permissions boundary for a user might increase its permissions by
 * allowing the user to perform all the actions granted in its permissions policies.
 */
export const deleteUserPermissionsBoundary: API.OperationMethod<
  DeleteUserPermissionsBoundaryRequest,
  DeleteUserPermissionsBoundaryResponse,
  DeleteUserPermissionsBoundaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteUserPermissionsBoundaryRequest,
  output: DeleteUserPermissionsBoundaryResponse,
  errors: [NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteUserPermissionsBoundary",
}));

export type DeleteUserPolicyError =
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Deletes the specified inline policy that is embedded in the specified IAM
 * user.
 *
 * A user can also have managed policies attached to it. To detach a managed policy from
 * a user, use DetachUserPolicy.
 * For more information about policies, refer to Managed policies and inline
 * policies in the *IAM User Guide*.
 */
export const deleteUserPolicy: API.OperationMethod<
  DeleteUserPolicyRequest,
  DeleteUserPolicyResponse,
  DeleteUserPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteUserPolicyRequest,
  output: DeleteUserPolicyResponse,
  errors: [LimitExceededException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteUserPolicy",
}));

export type DeleteVirtualMFADeviceError =
  | ConcurrentModificationException
  | DeleteConflictException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Deletes a virtual MFA device.
 *
 * You must deactivate a user's virtual MFA device before you can delete it. For
 * information about deactivating MFA devices, see DeactivateMFADevice.
 */
export const deleteVirtualMFADevice: API.OperationMethod<
  DeleteVirtualMFADeviceRequest,
  DeleteVirtualMFADeviceResponse,
  DeleteVirtualMFADeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteVirtualMFADeviceRequest,
  output: DeleteVirtualMFADeviceResponse,
  errors: [
    ConcurrentModificationException,
    DeleteConflictException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVirtualMFADevice",
}));

export type DetachGroupPolicyError =
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Removes the specified managed policy from the specified IAM group.
 *
 * A group can also have inline policies embedded with it. To delete an inline policy,
 * use DeleteGroupPolicy. For information about policies, see Managed
 * policies and inline policies in the
 * *IAM User Guide*.
 */
export const detachGroupPolicy: API.OperationMethod<
  DetachGroupPolicyRequest,
  DetachGroupPolicyResponse,
  DetachGroupPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DetachGroupPolicyRequest,
  output: DetachGroupPolicyResponse,
  errors: [
    InvalidInputException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetachGroupPolicy",
}));

export type DetachRolePolicyError =
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | UnmodifiableEntityException
  | CommonErrors;
/**
 * Removes the specified managed policy from the specified role.
 *
 * A role can also have inline policies embedded with it. To delete an inline policy, use
 * DeleteRolePolicy. For information about policies, see Managed
 * policies and inline policies in the
 * *IAM User Guide*.
 */
export const detachRolePolicy: API.OperationMethod<
  DetachRolePolicyRequest,
  DetachRolePolicyResponse,
  DetachRolePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DetachRolePolicyRequest,
  output: DetachRolePolicyResponse,
  errors: [
    InvalidInputException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
    UnmodifiableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetachRolePolicy",
}));

export type DetachUserPolicyError =
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Removes the specified managed policy from the specified user.
 *
 * A user can also have inline policies embedded with it. To delete an inline policy, use
 * DeleteUserPolicy. For information about policies, see Managed
 * policies and inline policies in the
 * *IAM User Guide*.
 */
export const detachUserPolicy: API.OperationMethod<
  DetachUserPolicyRequest,
  DetachUserPolicyResponse,
  DetachUserPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DetachUserPolicyRequest,
  output: DetachUserPolicyResponse,
  errors: [
    InvalidInputException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetachUserPolicy",
}));

export type DisableOrganizationsRootCredentialsManagementError =
  | AccountNotManagementOrDelegatedAdministratorException
  | OrganizationNotFoundException
  | OrganizationNotInAllFeaturesModeException
  | ServiceAccessNotEnabledException
  | CommonErrors;
/**
 * Disables the management of privileged root user credentials across member accounts in
 * your organization. When you disable this feature, the management account and the
 * delegated administrator for IAM can no longer manage root user credentials for member
 * accounts in your organization.
 */
export const disableOrganizationsRootCredentialsManagement: API.OperationMethod<
  DisableOrganizationsRootCredentialsManagementRequest,
  DisableOrganizationsRootCredentialsManagementResponse,
  DisableOrganizationsRootCredentialsManagementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableOrganizationsRootCredentialsManagementRequest,
  output: DisableOrganizationsRootCredentialsManagementResponse,
  errors: [
    AccountNotManagementOrDelegatedAdministratorException,
    OrganizationNotFoundException,
    OrganizationNotInAllFeaturesModeException,
    ServiceAccessNotEnabledException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableOrganizationsRootCredentialsManagement",
}));

export type DisableOrganizationsRootSessionsError =
  | AccountNotManagementOrDelegatedAdministratorException
  | OrganizationNotFoundException
  | OrganizationNotInAllFeaturesModeException
  | ServiceAccessNotEnabledException
  | CommonErrors;
/**
 * Disables root user sessions for privileged tasks across member accounts in your
 * organization. When you disable this feature, the management account and the delegated
 * administrator for IAM can no longer perform privileged tasks on member accounts in
 * your organization.
 */
export const disableOrganizationsRootSessions: API.OperationMethod<
  DisableOrganizationsRootSessionsRequest,
  DisableOrganizationsRootSessionsResponse,
  DisableOrganizationsRootSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableOrganizationsRootSessionsRequest,
  output: DisableOrganizationsRootSessionsResponse,
  errors: [
    AccountNotManagementOrDelegatedAdministratorException,
    OrganizationNotFoundException,
    OrganizationNotInAllFeaturesModeException,
    ServiceAccessNotEnabledException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableOrganizationsRootSessions",
}));

export type DisableOutboundWebIdentityFederationError = FeatureDisabledException | CommonErrors;
/**
 * Disables the outbound identity federation feature for your Amazon Web Services account. When disabled, IAM principals in the account cannot
 * use the `GetWebIdentityToken` API to obtain JSON Web Tokens (JWTs) for authentication with external services. This operation
 * does not affect tokens that were issued before the feature was disabled.
 */
export const disableOutboundWebIdentityFederation: API.OperationMethod<
  DisableOutboundWebIdentityFederationRequest,
  DisableOutboundWebIdentityFederationResponse,
  DisableOutboundWebIdentityFederationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableOutboundWebIdentityFederationRequest,
  output: DisableOutboundWebIdentityFederationResponse,
  errors: [FeatureDisabledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableOutboundWebIdentityFederation",
}));

export type EnableMFADeviceError =
  | ConcurrentModificationException
  | EntityAlreadyExistsException
  | EntityTemporarilyUnmodifiableException
  | InvalidAuthenticationCodeException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Enables the specified MFA device and associates it with the specified IAM user. When
 * enabled, the MFA device is required for every subsequent login by the IAM user
 * associated with the device.
 */
export const enableMFADevice: API.OperationMethod<
  EnableMFADeviceRequest,
  EnableMFADeviceResponse,
  EnableMFADeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableMFADeviceRequest,
  output: EnableMFADeviceResponse,
  errors: [
    ConcurrentModificationException,
    EntityAlreadyExistsException,
    EntityTemporarilyUnmodifiableException,
    InvalidAuthenticationCodeException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableMFADevice",
}));

export type EnableOrganizationsRootCredentialsManagementError =
  | AccountNotManagementOrDelegatedAdministratorException
  | CallerIsNotManagementAccountException
  | OrganizationNotFoundException
  | OrganizationNotInAllFeaturesModeException
  | ServiceAccessNotEnabledException
  | CommonErrors;
/**
 * Enables the management of privileged root user credentials across member accounts in your
 * organization. When you enable root credentials management for centralized root access, the management account and the delegated
 * administrator for IAM can manage root user credentials for member accounts in your
 * organization.
 *
 * Before you enable centralized root access, you must have an account configured with
 * the following settings:
 *
 * - You must manage your Amazon Web Services accounts in Organizations.
 *
 * - Enable trusted access for Identity and Access Management in Organizations. For details, see
 * IAM and Organizations in the Organizations User
 * Guide.
 */
export const enableOrganizationsRootCredentialsManagement: API.OperationMethod<
  EnableOrganizationsRootCredentialsManagementRequest,
  EnableOrganizationsRootCredentialsManagementResponse,
  EnableOrganizationsRootCredentialsManagementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableOrganizationsRootCredentialsManagementRequest,
  output: EnableOrganizationsRootCredentialsManagementResponse,
  errors: [
    AccountNotManagementOrDelegatedAdministratorException,
    CallerIsNotManagementAccountException,
    OrganizationNotFoundException,
    OrganizationNotInAllFeaturesModeException,
    ServiceAccessNotEnabledException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableOrganizationsRootCredentialsManagement",
}));

export type EnableOrganizationsRootSessionsError =
  | AccountNotManagementOrDelegatedAdministratorException
  | CallerIsNotManagementAccountException
  | OrganizationNotFoundException
  | OrganizationNotInAllFeaturesModeException
  | ServiceAccessNotEnabledException
  | CommonErrors;
/**
 * Allows the management account or delegated administrator to perform privileged tasks
 * on member accounts in your organization. For more information, see Centrally manage root access for member accounts in the Identity and Access Management
 * User Guide.
 *
 * Before you enable this feature, you must have an account configured with the following
 * settings:
 *
 * - You must manage your Amazon Web Services accounts in Organizations.
 *
 * - Enable trusted access for Identity and Access Management in Organizations. For details, see
 * IAM and Organizations in the Organizations User
 * Guide.
 */
export const enableOrganizationsRootSessions: API.OperationMethod<
  EnableOrganizationsRootSessionsRequest,
  EnableOrganizationsRootSessionsResponse,
  EnableOrganizationsRootSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableOrganizationsRootSessionsRequest,
  output: EnableOrganizationsRootSessionsResponse,
  errors: [
    AccountNotManagementOrDelegatedAdministratorException,
    CallerIsNotManagementAccountException,
    OrganizationNotFoundException,
    OrganizationNotInAllFeaturesModeException,
    ServiceAccessNotEnabledException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableOrganizationsRootSessions",
}));

export type EnableOutboundWebIdentityFederationError = FeatureEnabledException | CommonErrors;
/**
 * Enables the outbound identity federation feature for your Amazon Web Services account. When enabled, IAM principals in your account
 * can use the `GetWebIdentityToken` API to obtain JSON Web Tokens (JWTs) for secure authentication with external services.
 * This operation also generates a unique issuer URL for your Amazon Web Services account.
 */
export const enableOutboundWebIdentityFederation: API.OperationMethod<
  EnableOutboundWebIdentityFederationRequest,
  EnableOutboundWebIdentityFederationResponse,
  EnableOutboundWebIdentityFederationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableOutboundWebIdentityFederationRequest,
  output: EnableOutboundWebIdentityFederationResponse,
  errors: [FeatureEnabledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableOutboundWebIdentityFederation",
}));

export type GenerateCredentialReportError =
  | LimitExceededException
  | ServiceFailureException
  | CommonErrors;
/**
 * Generates a credential report for the Amazon Web Services account. For more information about the
 * credential report, see Getting credential reports in
 * the *IAM User Guide*.
 */
export const generateCredentialReport: API.OperationMethod<
  GenerateCredentialReportRequest,
  GenerateCredentialReportResponse,
  GenerateCredentialReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GenerateCredentialReportRequest,
  output: GenerateCredentialReportResponse,
  errors: [LimitExceededException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GenerateCredentialReport",
}));

export type GenerateOrganizationsAccessReportError =
  | ReportGenerationLimitExceededException
  | CommonErrors;
/**
 * Generates a report for service last accessed data for Organizations. You can generate a
 * report for any entities (organization root, organizational unit, or account) or policies
 * in your organization.
 *
 * To call this operation, you must be signed in using your Organizations management account
 * credentials. You can use your long-term IAM user or root user credentials, or temporary
 * credentials from assuming an IAM role. SCPs must be enabled for your organization
 * root. You must have the required IAM and Organizations permissions. For more information, see
 * Refining permissions using service last accessed data in the
 * *IAM User Guide*.
 *
 * You can generate a service last accessed data report for entities by specifying only
 * the entity's path. This data includes a list of services that are allowed by any service
 * control policies (SCPs) that apply to the entity.
 *
 * You can generate a service last accessed data report for a policy by specifying an
 * entity's path and an optional Organizations policy ID. This data includes a list of services that
 * are allowed by the specified SCP.
 *
 * For each service in both report types, the data includes the most recent account
 * activity that the policy allows to account principals in the entity or the entity's
 * children. For important information about the data, reporting period, permissions
 * required, troubleshooting, and supported Regions see Reducing permissions using
 * service last accessed data in the
 * *IAM User Guide*.
 *
 * The data includes all attempts to access Amazon Web Services, not just the successful ones. This
 * includes all attempts that were made using the Amazon Web Services Management Console, the Amazon Web Services API through any
 * of the SDKs, or any of the command line tools. An unexpected entry in the service
 * last accessed data does not mean that an account has been compromised, because the
 * request might have been denied. Refer to your CloudTrail logs as the authoritative
 * source for information about all API calls and whether they were successful or
 * denied access. For more information, see Logging IAM events with
 * CloudTrail in the *IAM User Guide*.
 *
 * This operation returns a `JobId`. Use this parameter in the
 * GetOrganizationsAccessReport
 * operation to check the status of
 * the report generation. To check the status of this request, use the `JobId`
 * parameter in the
 * GetOrganizationsAccessReport
 * operation and test the
 * `JobStatus` response parameter. When the job is complete, you can
 * retrieve the report.
 *
 * To generate a service last accessed data report for entities, specify an entity path
 * without specifying the optional Organizations policy ID. The type of entity that you specify
 * determines the data returned in the report.
 *
 * - **Root** - When you specify the
 * organizations root as the entity, the resulting report lists all of the services
 * allowed by SCPs that are attached to your root. For each service, the report
 * includes data for all accounts in your organization except the
 * management account, because the management account is not limited by SCPs.
 *
 * - **OU** - When you specify an
 * organizational unit (OU) as the entity, the resulting report lists all of the
 * services allowed by SCPs that are attached to the OU and its parents. For each
 * service, the report includes data for all accounts in the OU or its children.
 * This data excludes the management account, because the management account is not
 * limited by SCPs.
 *
 * - **management account** - When you specify the
 * management account, the resulting report lists all Amazon Web Services services, because the
 * management account is not limited by SCPs. For each service, the report includes
 * data for only the management account.
 *
 * - **Account** - When you specify another
 * account as the entity, the resulting report lists all of the services allowed by
 * SCPs that are attached to the account and its parents. For each service, the
 * report includes data for only the specified account.
 *
 * To generate a service last accessed data report for policies, specify an entity path
 * and the optional Organizations policy ID. The type of entity that you specify determines the data
 * returned for each service.
 *
 * - **Root** - When you specify the root
 * entity and a policy ID, the resulting report lists all of the services that are
 * allowed by the specified SCP. For each service, the report includes data for all
 * accounts in your organization to which the SCP applies. This data excludes the
 * management account, because the management account is not limited by SCPs. If the
 * SCP is not attached to any entities in the organization, then the report will
 * return a list of services with no data.
 *
 * - **OU** - When you specify an OU entity and
 * a policy ID, the resulting report lists all of the services that are allowed by
 * the specified SCP. For each service, the report includes data for all accounts
 * in the OU or its children to which the SCP applies. This means that other
 * accounts outside the OU that are affected by the SCP might not be included in
 * the data. This data excludes the management account, because the
 * management account is not limited by SCPs. If the SCP is not attached to the OU
 * or one of its children, the report will return a list of services with no
 * data.
 *
 * - **management account** - When you specify the
 * management account, the resulting report lists all Amazon Web Services services, because the
 * management account is not limited by SCPs. If you specify a policy ID in the CLI
 * or API, the policy is ignored. For each service, the report includes data for
 * only the management account.
 *
 * - **Account** - When you specify another
 * account entity and a policy ID, the resulting report lists all of the services
 * that are allowed by the specified SCP. For each service, the report includes
 * data for only the specified account. This means that other accounts in the
 * organization that are affected by the SCP might not be included in the data. If
 * the SCP is not attached to the account, the report will return a list of
 * services with no data.
 *
 * Service last accessed data does not use other policy types when determining
 * whether a principal could access a service. These other policy types include
 * identity-based policies, resource-based policies, access control lists, IAM
 * permissions boundaries, and STS assume role policies. It only applies SCP logic.
 * For more about the evaluation of policy types, see Evaluating policies in the
 * *IAM User Guide*.
 *
 * For more information about service last accessed data, see Reducing policy scope by
 * viewing user activity in the *IAM User Guide*.
 */
export const generateOrganizationsAccessReport: API.OperationMethod<
  GenerateOrganizationsAccessReportRequest,
  GenerateOrganizationsAccessReportResponse,
  GenerateOrganizationsAccessReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GenerateOrganizationsAccessReportRequest,
  output: GenerateOrganizationsAccessReportResponse,
  errors: [ReportGenerationLimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GenerateOrganizationsAccessReport",
}));

export type GenerateServiceLastAccessedDetailsError =
  | InvalidInputException
  | NoSuchEntityException
  | CommonErrors;
/**
 * Generates a report that includes details about when an IAM resource (user, group,
 * role, or policy) was last used in an attempt to access Amazon Web Services services. Recent activity
 * usually appears within four hours. IAM reports activity for at least the last 400
 * days, or less if your Region began supporting this feature within the last year. For
 * more information, see Regions where data is tracked. For more information about services and
 * actions for which action last accessed information is displayed, see IAM
 * action last accessed information services and actions.
 *
 * The service last accessed data includes all attempts to access an Amazon Web Services API, not
 * just the successful ones. This includes all attempts that were made using the
 * Amazon Web Services Management Console, the Amazon Web Services API through any of the SDKs, or any of the command line tools.
 * An unexpected entry in the service last accessed data does not mean that your
 * account has been compromised, because the request might have been denied. Refer to
 * your CloudTrail logs as the authoritative source for information about all API calls
 * and whether they were successful or denied access. For more information, see Logging
 * IAM events with CloudTrail in the
 * *IAM User Guide*.
 *
 * The `GenerateServiceLastAccessedDetails` operation returns a
 * `JobId`. Use this parameter in the following operations to retrieve the
 * following details from your report:
 *
 * - GetServiceLastAccessedDetails - Use this operation for
 * users, groups, roles, or policies to list every Amazon Web Services service that the resource
 * could access using permissions policies. For each service, the response includes
 * information about the most recent access attempt.
 *
 * The `JobId` returned by
 * `GenerateServiceLastAccessedDetail` must be used by the same role
 * within a session, or by the same user when used to call
 * `GetServiceLastAccessedDetail`.
 *
 * - GetServiceLastAccessedDetailsWithEntities - Use this
 * operation for groups and policies to list information about the associated
 * entities (users or roles) that attempted to access a specific Amazon Web Services service.
 *
 * To check the status of the `GenerateServiceLastAccessedDetails` request,
 * use the `JobId` parameter in the same operations and test the
 * `JobStatus` response parameter.
 *
 * For additional information about the permissions policies that allow an identity
 * (user, group, or role) to access specific services, use the ListPoliciesGrantingServiceAccess operation.
 *
 * Service last accessed data does not use other policy types when determining
 * whether a resource could access a service. These other policy types include
 * resource-based policies, access control lists, Organizations policies, IAM permissions
 * boundaries, and STS assume role policies. It only applies permissions policy
 * logic. For more about the evaluation of policy types, see Evaluating policies in the
 * *IAM User Guide*.
 *
 * For more information about service and action last accessed data, see Reducing permissions using service last accessed data in the
 * *IAM User Guide*.
 */
export const generateServiceLastAccessedDetails: API.OperationMethod<
  GenerateServiceLastAccessedDetailsRequest,
  GenerateServiceLastAccessedDetailsResponse,
  GenerateServiceLastAccessedDetailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GenerateServiceLastAccessedDetailsRequest,
  output: GenerateServiceLastAccessedDetailsResponse,
  errors: [InvalidInputException, NoSuchEntityException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GenerateServiceLastAccessedDetails",
}));

export type GetAccessKeyLastUsedError = CommonErrors;
/**
 * Retrieves information about when the specified access key was last used. The
 * information includes the date and time of last use, along with the Amazon Web Services service and
 * Region that were specified in the last request made with that key.
 */
export const getAccessKeyLastUsed: API.OperationMethod<
  GetAccessKeyLastUsedRequest,
  GetAccessKeyLastUsedResponse,
  GetAccessKeyLastUsedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccessKeyLastUsedRequest,
  output: GetAccessKeyLastUsedResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccessKeyLastUsed",
}));

export type GetAccountAuthorizationDetailsError = ServiceFailureException | CommonErrors;
/**
 * Retrieves information about all IAM users, groups, roles, and policies in your Amazon Web Services
 * account, including their relationships to one another. Use this operation to obtain a
 * snapshot of the configuration of IAM permissions (users, groups, roles, and policies)
 * in your account.
 *
 * Policies returned by this operation are URL-encoded compliant
 * with RFC 3986. You can use a URL
 * decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
 * can use the `decode` method of the `java.net.URLDecoder` utility class in
 * the Java SDK. Other languages and SDKs provide similar functionality, and some SDKs do this decoding
 * automatically.
 *
 * You can optionally filter the results using the `Filter` parameter. You can
 * paginate the results using the `MaxItems` and `Marker`
 * parameters.
 */
export const getAccountAuthorizationDetails: API.PaginatedOperationMethod<
  GetAccountAuthorizationDetailsRequest,
  GetAccountAuthorizationDetailsResponse,
  GetAccountAuthorizationDetailsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetAccountAuthorizationDetailsRequest,
  output: GetAccountAuthorizationDetailsResponse,
  errors: [ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccountAuthorizationDetails",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxItems" } as const,
})) as any;

export type GetAccountPasswordPolicyError =
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Retrieves the password policy for the Amazon Web Services account. This tells you the complexity
 * requirements and mandatory rotation periods for the IAM user passwords in your account.
 * For more information about using a password policy, see Managing an IAM password
 * policy.
 */
export const getAccountPasswordPolicy: API.OperationMethod<
  GetAccountPasswordPolicyRequest,
  GetAccountPasswordPolicyResponse,
  GetAccountPasswordPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccountPasswordPolicyRequest,
  output: GetAccountPasswordPolicyResponse,
  errors: [NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccountPasswordPolicy",
}));

export type GetAccountPropertiesError =
  | InvalidInputException
  | ServiceFailureException
  | CommonErrors;
/**
 * Retrieves the account-level properties for the caller's Amazon Web Services account. Account
 * properties are configuration settings that control account-wide IAM features such as
 * Role Manager.
 *
 * The service returns properties as key-value pairs in
 * `Namespace/PropertyName` format. Each namespace groups related
 * configuration settings. Use PutAccountProperties to modify these properties.
 */
export const getAccountProperties: API.OperationMethod<
  GetAccountPropertiesRequest,
  GetAccountPropertiesResponse,
  GetAccountPropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccountPropertiesRequest,
  output: GetAccountPropertiesResponse,
  errors: [InvalidInputException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccountProperties",
}));

export type GetAccountSummaryError = ServiceFailureException | CommonErrors;
/**
 * Retrieves information about IAM entity usage and IAM quotas in the Amazon Web Services
 * account.
 *
 * For information about IAM quotas, see IAM and STS quotas in the
 * *IAM User Guide*.
 */
export const getAccountSummary: API.OperationMethod<
  GetAccountSummaryRequest,
  GetAccountSummaryResponse,
  GetAccountSummaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccountSummaryRequest,
  output: GetAccountSummaryResponse,
  errors: [ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccountSummary",
}));

export type GetContextKeysForCustomPolicyError = InvalidInputException | CommonErrors;
/**
 * Gets a list of all of the context keys referenced in the input policies. The policies
 * are supplied as a list of one or more strings. To get the context keys from policies
 * associated with an IAM user, group, or role, use GetContextKeysForPrincipalPolicy.
 *
 * Context keys are variables maintained by Amazon Web Services and its services that provide details
 * about the context of an API query request. Context keys can be evaluated by testing
 * against a value specified in an IAM policy. Use
 * `GetContextKeysForCustomPolicy` to understand what key names and values
 * you must supply when you call SimulateCustomPolicy. Note that all parameters are shown in unencoded form
 * here for clarity but must be URL encoded to be included as a part of a real HTML
 * request.
 */
export const getContextKeysForCustomPolicy: API.OperationMethod<
  GetContextKeysForCustomPolicyRequest,
  GetContextKeysForPolicyResponse,
  GetContextKeysForCustomPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetContextKeysForCustomPolicyRequest,
  output: GetContextKeysForPolicyResponse,
  errors: [InvalidInputException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetContextKeysForCustomPolicy",
}));

export type GetContextKeysForPrincipalPolicyError =
  | InvalidInputException
  | NoSuchEntityException
  | CommonErrors;
/**
 * Gets a list of all of the context keys referenced in all the IAM policies that are
 * attached to the specified IAM entity. The entity can be an IAM user, group, or role.
 * If you specify a user, then the request also includes all of the policies attached to
 * groups that the user is a member of.
 *
 * You can optionally include a list of one or more additional policies, specified as
 * strings. If you want to include *only* a list of policies by string,
 * use GetContextKeysForCustomPolicy instead.
 *
 * **Note:** This operation discloses information about the
 * permissions granted to other users. If you do not want users to see other user's
 * permissions, then consider allowing them to use GetContextKeysForCustomPolicy instead.
 *
 * Context keys are variables maintained by Amazon Web Services and its services that provide details
 * about the context of an API query request. Context keys can be evaluated by testing
 * against a value in an IAM policy. Use GetContextKeysForPrincipalPolicy to understand what key names and values
 * you must supply when you call SimulatePrincipalPolicy. This operation doesn't return context keys
 * referenced by service control policies (SCPs). Only context keys referenced by the
 * identity-based policies attached to the specified entity, and any additional policies
 * that you provide, are included.
 */
export const getContextKeysForPrincipalPolicy: API.OperationMethod<
  GetContextKeysForPrincipalPolicyRequest,
  GetContextKeysForPolicyResponse,
  GetContextKeysForPrincipalPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetContextKeysForPrincipalPolicyRequest,
  output: GetContextKeysForPolicyResponse,
  errors: [InvalidInputException, NoSuchEntityException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetContextKeysForPrincipalPolicy",
}));

export type GetCredentialReportError =
  | CredentialReportExpiredException
  | CredentialReportNotPresentException
  | CredentialReportNotReadyException
  | ServiceFailureException
  | CommonErrors;
/**
 * Retrieves a credential report for the Amazon Web Services account. For more information about the
 * credential report, see Getting credential reports in
 * the *IAM User Guide*.
 */
export const getCredentialReport: API.OperationMethod<
  GetCredentialReportRequest,
  GetCredentialReportResponse,
  GetCredentialReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCredentialReportRequest,
  output: GetCredentialReportResponse,
  errors: [
    CredentialReportExpiredException,
    CredentialReportNotPresentException,
    CredentialReportNotReadyException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCredentialReport",
}));

export type GetDelegationRequestError =
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Retrieves information about a specific delegation request.
 *
 * If a delegation request has no owner or owner account, `GetDelegationRequest` for that delegation request can be called by any account.
 * If the owner account is assigned but there is
 * no owner id, only identities within that owner account can call `GetDelegationRequest`
 * for the delegation request. Once the delegation request is fully owned, the owner of the request gets
 * a default permission to get that delegation request. For more details, see
 *
 * Managing Permissions for Delegation Requests.
 */
export const getDelegationRequest: API.OperationMethod<
  GetDelegationRequestRequest,
  GetDelegationRequestResponse,
  GetDelegationRequestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDelegationRequestRequest,
  output: GetDelegationRequestResponse,
  errors: [NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDelegationRequest",
}));

export type GetGroupError = NoSuchEntityException | ServiceFailureException | CommonErrors;
/**
 * Returns a list of IAM users that are in the specified IAM group. You can paginate
 * the results using the `MaxItems` and `Marker` parameters.
 */
export const getGroup: API.PaginatedOperationMethod<
  GetGroupRequest,
  GetGroupResponse,
  GetGroupError,
  Credentials | HttpClient.HttpClient,
  User
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetGroupRequest,
  output: GetGroupResponse,
  errors: [NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGroup",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Users",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type GetGroupPolicyError = NoSuchEntityException | ServiceFailureException | CommonErrors;
/**
 * Retrieves the specified inline policy document that is embedded in the specified IAM
 * group.
 *
 * Policies returned by this operation are URL-encoded compliant
 * with RFC 3986. You can use a URL
 * decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
 * can use the `decode` method of the `java.net.URLDecoder` utility class in
 * the Java SDK. Other languages and SDKs provide similar functionality, and some SDKs do this decoding
 * automatically.
 *
 * An IAM group can also have managed policies attached to it. To retrieve a managed
 * policy document that is attached to a group, use GetPolicy to determine the
 * policy's default version, then use GetPolicyVersion to
 * retrieve the policy document.
 *
 * For more information about policies, see Managed policies and inline
 * policies in the *IAM User Guide*.
 */
export const getGroupPolicy: API.OperationMethod<
  GetGroupPolicyRequest,
  GetGroupPolicyResponse,
  GetGroupPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetGroupPolicyRequest,
  output: GetGroupPolicyResponse,
  errors: [NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGroupPolicy",
}));

export type GetHumanReadableSummaryError =
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Retrieves a human readable summary for a given entity. At this time, the only supported
 * entity type is `delegation-request`
 *
 * This method uses a Large Language Model (LLM) to generate the summary.
 *
 * If a delegation request has no owner or owner account, `GetHumanReadableSummary` for that delegation request can be called by any account.
 * If the owner account is assigned but there is
 * no owner id, only identities within that owner account can call `GetHumanReadableSummary`
 * for the delegation request to retrieve a summary of that request.
 * Once the delegation request is fully owned, the owner of the request gets
 * a default permission to get that delegation request. For more details, read
 * default permissions granted to delegation requests. These rules are identical to
 * GetDelegationRequest
 * API behavior, such that a party who has permissions to call
 * GetDelegationRequest
 * for a given delegation request will always be able to retrieve the human readable summary for that request.
 */
export const getHumanReadableSummary: API.OperationMethod<
  GetHumanReadableSummaryRequest,
  GetHumanReadableSummaryResponse,
  GetHumanReadableSummaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetHumanReadableSummaryRequest,
  output: GetHumanReadableSummaryResponse,
  errors: [InvalidInputException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetHumanReadableSummary",
}));

export type GetInstanceProfileError =
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Retrieves information about the specified instance profile, including the instance
 * profile's path, GUID, ARN, and role. For more information about instance profiles, see
 * Using
 * instance profiles in the *IAM User Guide*.
 */
export const getInstanceProfile: API.OperationMethod<
  GetInstanceProfileRequest,
  GetInstanceProfileResponse,
  GetInstanceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetInstanceProfileRequest,
  output: GetInstanceProfileResponse,
  errors: [NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInstanceProfile",
}));

export type GetLoginProfileError = NoSuchEntityException | ServiceFailureException | CommonErrors;
/**
 * Retrieves the user name for the specified IAM user. A login profile is created when
 * you create a password for the user to access the Amazon Web Services Management Console. If the user does not exist
 * or does not have a password, the operation returns a 404 (`NoSuchEntity`)
 * error.
 *
 * If you create an IAM user with access to the console, the `CreateDate`
 * reflects the date you created the initial password for the user.
 *
 * If you create an IAM user with programmatic access, and then later add a password
 * for the user to access the Amazon Web Services Management Console, the `CreateDate` reflects the initial
 * password creation date. A user with programmatic access does not have a login profile
 * unless you create a password for the user to access the Amazon Web Services Management Console.
 */
export const getLoginProfile: API.OperationMethod<
  GetLoginProfileRequest,
  GetLoginProfileResponse,
  GetLoginProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLoginProfileRequest,
  output: GetLoginProfileResponse,
  errors: [NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLoginProfile",
}));

export type GetMFADeviceError = NoSuchEntityException | ServiceFailureException | CommonErrors;
/**
 * Retrieves information about an MFA device for a specified user.
 */
export const getMFADevice: API.OperationMethod<
  GetMFADeviceRequest,
  GetMFADeviceResponse,
  GetMFADeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMFADeviceRequest,
  output: GetMFADeviceResponse,
  errors: [NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMFADevice",
}));

export type GetOpenIDConnectProviderError =
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Returns information about the specified OpenID Connect (OIDC) provider resource object
 * in IAM.
 */
export const getOpenIDConnectProvider: API.OperationMethod<
  GetOpenIDConnectProviderRequest,
  GetOpenIDConnectProviderResponse,
  GetOpenIDConnectProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOpenIDConnectProviderRequest,
  output: GetOpenIDConnectProviderResponse,
  errors: [InvalidInputException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOpenIDConnectProvider",
}));

export type GetOrganizationsAccessReportError = NoSuchEntityException | CommonErrors;
/**
 * Retrieves the service last accessed data report for Organizations that was previously
 * generated using the
 * GenerateOrganizationsAccessReport
 * operation. This operation
 * retrieves the status of your report job and the report contents.
 *
 * Depending on the parameters that you passed when you generated the report, the data
 * returned could include different information. For details, see GenerateOrganizationsAccessReport.
 *
 * To call this operation, you must be signed in to the management account in your
 * organization. SCPs must be enabled for your organization root. You must have permissions
 * to perform this operation. For more information, see Refining permissions using
 * service last accessed data in the
 * *IAM User Guide*.
 *
 * For each service that principals in an account (root user, IAM users, or IAM roles)
 * could access using SCPs, the operation returns details about the most recent access
 * attempt. If there was no attempt, the service is listed without details about the most
 * recent attempt to access the service. If the operation fails, it returns the reason that
 * it failed.
 *
 * By default, the list is sorted by service namespace.
 */
export const getOrganizationsAccessReport: API.OperationMethod<
  GetOrganizationsAccessReportRequest,
  GetOrganizationsAccessReportResponse,
  GetOrganizationsAccessReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOrganizationsAccessReportRequest,
  output: GetOrganizationsAccessReportResponse,
  errors: [NoSuchEntityException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOrganizationsAccessReport",
}));

export type GetOutboundWebIdentityFederationInfoError = FeatureDisabledException | CommonErrors;
/**
 * Retrieves the configuration information for the outbound identity federation feature in your Amazon Web Services account. The response includes the unique issuer URL for your
 * Amazon Web Services account and the current enabled/disabled status of the feature. Use this operation to obtain the issuer URL that you need to configure trust relationships with external services.
 */
export const getOutboundWebIdentityFederationInfo: API.OperationMethod<
  GetOutboundWebIdentityFederationInfoRequest,
  GetOutboundWebIdentityFederationInfoResponse,
  GetOutboundWebIdentityFederationInfoError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOutboundWebIdentityFederationInfoRequest,
  output: GetOutboundWebIdentityFederationInfoResponse,
  errors: [FeatureDisabledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOutboundWebIdentityFederationInfo",
}));

export type GetPolicyError =
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Retrieves information about the specified managed policy, including the policy's
 * default version and the total number of IAM users, groups, and roles to which the
 * policy is attached. To retrieve the list of the specific users, groups, and roles that
 * the policy is attached to, use ListEntitiesForPolicy. This operation returns metadata about the policy. To
 * retrieve the actual policy document for a specific version of the policy, use GetPolicyVersion.
 *
 * This operation retrieves information about managed policies. To retrieve information
 * about an inline policy that is embedded with an IAM user, group, or role, use GetUserPolicy, GetGroupPolicy, or
 * GetRolePolicy.
 *
 * For more information about policies, see Managed policies and inline
 * policies in the *IAM User Guide*.
 */
export const getPolicy: API.OperationMethod<
  GetPolicyRequest,
  GetPolicyResponse,
  GetPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPolicyRequest,
  output: GetPolicyResponse,
  errors: [InvalidInputException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPolicy",
}));

export type GetPolicyVersionError =
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Retrieves information about the specified version of the specified managed policy,
 * including the policy document.
 *
 * Policies returned by this operation are URL-encoded compliant
 * with RFC 3986. You can use a URL
 * decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
 * can use the `decode` method of the `java.net.URLDecoder` utility class in
 * the Java SDK. Other languages and SDKs provide similar functionality, and some SDKs do this decoding
 * automatically.
 *
 * To list the available versions for a policy, use ListPolicyVersions.
 *
 * This operation retrieves information about managed policies. To retrieve information
 * about an inline policy that is embedded in a user, group, or role, use GetUserPolicy, GetGroupPolicy, or
 * GetRolePolicy.
 *
 * For more information about the types of policies, see Managed policies and inline
 * policies in the *IAM User Guide*.
 *
 * For more information about managed policy versions, see Versioning for managed
 * policies in the *IAM User Guide*.
 */
export const getPolicyVersion: API.OperationMethod<
  GetPolicyVersionRequest,
  GetPolicyVersionResponse,
  GetPolicyVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPolicyVersionRequest,
  output: GetPolicyVersionResponse,
  errors: [InvalidInputException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPolicyVersion",
}));

export type GetRoleError = NoSuchEntityException | ServiceFailureException | CommonErrors;
/**
 * Retrieves information about the specified role, including the role's path, GUID, ARN,
 * and the role's trust policy that grants permission to assume the role. For more
 * information about roles, see IAM roles in the
 * *IAM User Guide*.
 *
 * Policies returned by this operation are URL-encoded compliant
 * with RFC 3986. You can use a URL
 * decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
 * can use the `decode` method of the `java.net.URLDecoder` utility class in
 * the Java SDK. Other languages and SDKs provide similar functionality, and some SDKs do this decoding
 * automatically.
 */
export const getRole: API.OperationMethod<
  GetRoleRequest,
  GetRoleResponse,
  GetRoleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRoleRequest,
  output: GetRoleResponse,
  errors: [NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRole",
}));

export type GetRolePolicyError = NoSuchEntityException | ServiceFailureException | CommonErrors;
/**
 * Retrieves the specified inline policy document that is embedded with the specified
 * IAM role.
 *
 * Policies returned by this operation are URL-encoded compliant
 * with RFC 3986. You can use a URL
 * decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
 * can use the `decode` method of the `java.net.URLDecoder` utility class in
 * the Java SDK. Other languages and SDKs provide similar functionality, and some SDKs do this decoding
 * automatically.
 *
 * An IAM role can also have managed policies attached to it. To retrieve a managed
 * policy document that is attached to a role, use GetPolicy to determine the
 * policy's default version, then use GetPolicyVersion to
 * retrieve the policy document.
 *
 * For more information about policies, see Managed policies and inline
 * policies in the *IAM User Guide*.
 *
 * For more information about roles, see IAM roles in the
 * *IAM User Guide*.
 */
export const getRolePolicy: API.OperationMethod<
  GetRolePolicyRequest,
  GetRolePolicyResponse,
  GetRolePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRolePolicyRequest,
  output: GetRolePolicyResponse,
  errors: [NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRolePolicy",
}));

export type GetRoleTemplateVersionError =
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Retrieves information about a version of the specified role template. Role templates
 * define a reusable configuration--including role name and path patterns, trust
 * policy, inline and managed policies, permissions boundary, tags, and maximum session
 * duration--that you use to create IAM roles with AcquireRole.
 *
 * If you do not specify a minor version, the service returns the template's default
 * minor version.
 */
export const getRoleTemplateVersion: API.OperationMethod<
  GetRoleTemplateVersionRequest,
  GetRoleTemplateVersionResponse,
  GetRoleTemplateVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRoleTemplateVersionRequest,
  output: GetRoleTemplateVersionResponse,
  errors: [InvalidInputException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRoleTemplateVersion",
}));

export type GetSAMLProviderError =
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Returns the SAML provider metadocument that was uploaded when the IAM SAML provider
 * resource object was created or updated.
 *
 * This operation requires Signature Version 4.
 */
export const getSAMLProvider: API.OperationMethod<
  GetSAMLProviderRequest,
  GetSAMLProviderResponse,
  GetSAMLProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSAMLProviderRequest,
  output: GetSAMLProviderResponse,
  errors: [InvalidInputException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSAMLProvider",
}));

export type GetServerCertificateError =
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Retrieves information about the specified server certificate stored in IAM.
 *
 * For more information about working with server certificates, see Working
 * with server certificates in the *IAM User Guide*. This
 * topic includes a list of Amazon Web Services services that can use the server certificates that you
 * manage with IAM.
 */
export const getServerCertificate: API.OperationMethod<
  GetServerCertificateRequest,
  GetServerCertificateResponse,
  GetServerCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetServerCertificateRequest,
  output: GetServerCertificateResponse,
  errors: [NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetServerCertificate",
}));

export type GetServiceLastAccessedDetailsError =
  | InvalidInputException
  | NoSuchEntityException
  | CommonErrors;
/**
 * Retrieves a service last accessed report that was created using the
 * `GenerateServiceLastAccessedDetails` operation. You can use the
 * `JobId` parameter in `GetServiceLastAccessedDetails` to
 * retrieve the status of your report job. When the report is complete, you can retrieve
 * the generated report. The report includes a list of Amazon Web Services services that the resource
 * (user, group, role, or managed policy) can access.
 *
 * Service last accessed data does not use other policy types when determining
 * whether a resource could access a service. These other policy types include
 * resource-based policies, access control lists, Organizations policies, IAM permissions
 * boundaries, and STS assume role policies. It only applies permissions policy
 * logic. For more about the evaluation of policy types, see Evaluating policies in the
 * *IAM User Guide*.
 *
 * For each service that the resource could access using permissions policies, the
 * operation returns details about the most recent access attempt. If there was no attempt,
 * the service is listed without details about the most recent attempt to access the
 * service. If the operation fails, the `GetServiceLastAccessedDetails`
 * operation returns the reason that it failed.
 *
 * The `GetServiceLastAccessedDetails` operation returns a list of services.
 * This list includes the number of entities that have attempted to access the service and
 * the date and time of the last attempt. It also returns the ARN of the following entity,
 * depending on the resource ARN that you used to generate the report:
 *
 * - **User** - Returns the user ARN that you
 * used to generate the report
 *
 * - **Group** - Returns the ARN of the group
 * member (user) that last attempted to access the service
 *
 * - **Role** - Returns the role ARN that you
 * used to generate the report
 *
 * - **Policy** - Returns the ARN of the user
 * or role that last used the policy to attempt to access the service
 *
 * By default, the list is sorted by service namespace.
 *
 * If you specified `ACTION_LEVEL` granularity when you generated the report,
 * this operation returns service and action last accessed data. This includes the most
 * recent access attempt for each tracked action within a service. Otherwise, this
 * operation returns only service data.
 *
 * For more information about service and action last accessed data, see Reducing permissions using service last accessed data in the
 * *IAM User Guide*.
 */
export const getServiceLastAccessedDetails: API.OperationMethod<
  GetServiceLastAccessedDetailsRequest,
  GetServiceLastAccessedDetailsResponse,
  GetServiceLastAccessedDetailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetServiceLastAccessedDetailsRequest,
  output: GetServiceLastAccessedDetailsResponse,
  errors: [InvalidInputException, NoSuchEntityException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetServiceLastAccessedDetails",
}));

export type GetServiceLastAccessedDetailsWithEntitiesError =
  | InvalidInputException
  | NoSuchEntityException
  | CommonErrors;
/**
 * After you generate a group or policy report using the
 * `GenerateServiceLastAccessedDetails` operation, you can use the
 * `JobId` parameter in
 * `GetServiceLastAccessedDetailsWithEntities`. This operation retrieves the
 * status of your report job and a list of entities that could have used group or policy
 * permissions to access the specified service.
 *
 * - **Group** - For a group report, this
 * operation returns a list of users in the group that could have used the group's
 * policies in an attempt to access the service.
 *
 * - **Policy** - For a policy report, this
 * operation returns a list of entities (users or roles) that could have used the
 * policy in an attempt to access the service.
 *
 * You can also use this operation for user or role reports to retrieve details about
 * those entities.
 *
 * If the operation fails, the `GetServiceLastAccessedDetailsWithEntities`
 * operation returns the reason that it failed.
 *
 * By default, the list of associated entities is sorted by date, with the most recent
 * access listed first.
 */
export const getServiceLastAccessedDetailsWithEntities: API.OperationMethod<
  GetServiceLastAccessedDetailsWithEntitiesRequest,
  GetServiceLastAccessedDetailsWithEntitiesResponse,
  GetServiceLastAccessedDetailsWithEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetServiceLastAccessedDetailsWithEntitiesRequest,
  output: GetServiceLastAccessedDetailsWithEntitiesResponse,
  errors: [InvalidInputException, NoSuchEntityException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetServiceLastAccessedDetailsWithEntities",
}));

export type GetServiceLinkedRoleDeletionStatusError =
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Retrieves the status of your service-linked role deletion. After you use DeleteServiceLinkedRole to submit a service-linked role for deletion, you
 * can use the `DeletionTaskId` parameter in
 * `GetServiceLinkedRoleDeletionStatus` to check the status of the deletion.
 * If the deletion fails, this operation returns the reason that it failed, if that
 * information is returned by the service.
 */
export const getServiceLinkedRoleDeletionStatus: API.OperationMethod<
  GetServiceLinkedRoleDeletionStatusRequest,
  GetServiceLinkedRoleDeletionStatusResponse,
  GetServiceLinkedRoleDeletionStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetServiceLinkedRoleDeletionStatusRequest,
  output: GetServiceLinkedRoleDeletionStatusResponse,
  errors: [InvalidInputException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetServiceLinkedRoleDeletionStatus",
}));

export type GetSSHPublicKeyError =
  | NoSuchEntityException
  | UnrecognizedPublicKeyEncodingException
  | CommonErrors;
/**
 * Retrieves the specified SSH public key, including metadata about the key.
 *
 * The SSH public key retrieved by this operation is used only for authenticating the
 * associated IAM user to an CodeCommit repository. For more information about using SSH keys
 * to authenticate to an CodeCommit repository, see Set up CodeCommit for SSH
 * connections in the *CodeCommit User Guide*.
 */
export const getSSHPublicKey: API.OperationMethod<
  GetSSHPublicKeyRequest,
  GetSSHPublicKeyResponse,
  GetSSHPublicKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSSHPublicKeyRequest,
  output: GetSSHPublicKeyResponse,
  errors: [NoSuchEntityException, UnrecognizedPublicKeyEncodingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSSHPublicKey",
}));

export type GetUserError = NoSuchEntityException | ServiceFailureException | CommonErrors;
/**
 * Retrieves information about the specified IAM user, including the user's creation
 * date, path, unique ID, and ARN.
 *
 * If you do not specify a user name, IAM determines the user name implicitly based on
 * the Amazon Web Services access key ID used to sign the request to this operation.
 */
export const getUser: API.OperationMethod<
  GetUserRequest,
  GetUserResponse,
  GetUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetUserRequest,
  output: GetUserResponse,
  errors: [NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetUser",
}));

export type GetUserPolicyError = NoSuchEntityException | ServiceFailureException | CommonErrors;
/**
 * Retrieves the specified inline policy document that is embedded in the specified IAM
 * user.
 *
 * Policies returned by this operation are URL-encoded compliant
 * with RFC 3986. You can use a URL
 * decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
 * can use the `decode` method of the `java.net.URLDecoder` utility class in
 * the Java SDK. Other languages and SDKs provide similar functionality, and some SDKs do this decoding
 * automatically.
 *
 * An IAM user can also have managed policies attached to it. To retrieve a managed
 * policy document that is attached to a user, use GetPolicy to determine the
 * policy's default version. Then use GetPolicyVersion to
 * retrieve the policy document.
 *
 * For more information about policies, see Managed policies and inline
 * policies in the *IAM User Guide*.
 */
export const getUserPolicy: API.OperationMethod<
  GetUserPolicyRequest,
  GetUserPolicyResponse,
  GetUserPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetUserPolicyRequest,
  output: GetUserPolicyResponse,
  errors: [NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetUserPolicy",
}));

export type ListAccessKeysError = NoSuchEntityException | ServiceFailureException | CommonErrors;
/**
 * Returns information about the access key IDs associated with the specified IAM user.
 * If there is none, the operation returns an empty list.
 *
 * Although each user is limited to a small number of keys, you can still paginate the
 * results using the `MaxItems` and `Marker` parameters.
 *
 * If the `UserName` is not specified, the user name is determined implicitly
 * based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is
 * used, then `UserName` is required. If a long-term key is assigned to the
 * user, then `UserName` is not required.
 *
 * This operation works for access keys under the Amazon Web Services account. If the Amazon Web Services account has
 * no associated users, the root user returns it's own access key IDs by running this
 * command.
 *
 * To ensure the security of your Amazon Web Services account, the secret access key is accessible
 * only during key and user creation.
 */
export const listAccessKeys: API.PaginatedOperationMethod<
  ListAccessKeysRequest,
  ListAccessKeysResponse,
  ListAccessKeysError,
  Credentials | HttpClient.HttpClient,
  AccessKeyMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccessKeysRequest,
  output: ListAccessKeysResponse,
  errors: [NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccessKeys",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "AccessKeyMetadata",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListAccountAliasesError = ServiceFailureException | CommonErrors;
/**
 * Lists the account alias associated with the Amazon Web Services account (Note: you can have only
 * one). For information about using an Amazon Web Services account alias, see Creating,
 * deleting, and listing an Amazon Web Services account alias in the
 * *IAM User Guide*.
 */
export const listAccountAliases: API.PaginatedOperationMethod<
  ListAccountAliasesRequest,
  ListAccountAliasesResponse,
  ListAccountAliasesError,
  Credentials | HttpClient.HttpClient,
  AccountAliasType
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccountAliasesRequest,
  output: ListAccountAliasesResponse,
  errors: [ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccountAliases",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "AccountAliases",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListAttachedGroupPoliciesError =
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Lists all managed policies that are attached to the specified IAM group.
 *
 * An IAM group can also have inline policies embedded with it. To list the inline
 * policies for a group, use ListGroupPolicies.
 * For information about policies, see Managed policies and inline
 * policies in the *IAM User Guide*.
 *
 * You can paginate the results using the `MaxItems` and `Marker`
 * parameters. You can use the `PathPrefix` parameter to limit the list of
 * policies to only those matching the specified path prefix. If there are no policies
 * attached to the specified group (or none that match the specified path prefix), the
 * operation returns an empty list.
 */
export const listAttachedGroupPolicies: API.PaginatedOperationMethod<
  ListAttachedGroupPoliciesRequest,
  ListAttachedGroupPoliciesResponse,
  ListAttachedGroupPoliciesError,
  Credentials | HttpClient.HttpClient,
  AttachedPolicy
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAttachedGroupPoliciesRequest,
  output: ListAttachedGroupPoliciesResponse,
  errors: [InvalidInputException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAttachedGroupPolicies",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "AttachedPolicies",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListAttachedRolePoliciesError =
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Lists all managed policies that are attached to the specified IAM role.
 *
 * An IAM role can also have inline policies embedded with it. To list the inline
 * policies for a role, use ListRolePolicies.
 * For information about policies, see Managed policies and inline
 * policies in the *IAM User Guide*.
 *
 * You can paginate the results using the `MaxItems` and `Marker`
 * parameters. You can use the `PathPrefix` parameter to limit the list of
 * policies to only those matching the specified path prefix. If there are no policies
 * attached to the specified role (or none that match the specified path prefix), the
 * operation returns an empty list.
 */
export const listAttachedRolePolicies: API.PaginatedOperationMethod<
  ListAttachedRolePoliciesRequest,
  ListAttachedRolePoliciesResponse,
  ListAttachedRolePoliciesError,
  Credentials | HttpClient.HttpClient,
  AttachedPolicy
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAttachedRolePoliciesRequest,
  output: ListAttachedRolePoliciesResponse,
  errors: [InvalidInputException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAttachedRolePolicies",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "AttachedPolicies",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListAttachedUserPoliciesError =
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Lists all managed policies that are attached to the specified IAM user.
 *
 * An IAM user can also have inline policies embedded with it. To list the inline
 * policies for a user, use ListUserPolicies.
 * For information about policies, see Managed policies and inline
 * policies in the *IAM User Guide*.
 *
 * You can paginate the results using the `MaxItems` and `Marker`
 * parameters. You can use the `PathPrefix` parameter to limit the list of
 * policies to only those matching the specified path prefix. If there are no policies
 * attached to the specified group (or none that match the specified path prefix), the
 * operation returns an empty list.
 */
export const listAttachedUserPolicies: API.PaginatedOperationMethod<
  ListAttachedUserPoliciesRequest,
  ListAttachedUserPoliciesResponse,
  ListAttachedUserPoliciesError,
  Credentials | HttpClient.HttpClient,
  AttachedPolicy
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAttachedUserPoliciesRequest,
  output: ListAttachedUserPoliciesResponse,
  errors: [InvalidInputException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAttachedUserPolicies",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "AttachedPolicies",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListDelegationRequestsError =
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Lists delegation requests based on the specified criteria.
 *
 * If a delegation request has no owner, even if it is assigned to a specific account, it will not be part of the
 * `ListDelegationRequests` output for that account.
 *
 * For more details, see
 *
 * Managing Permissions for Delegation Requests.
 */
export const listDelegationRequests: API.OperationMethod<
  ListDelegationRequestsRequest,
  ListDelegationRequestsResponse,
  ListDelegationRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListDelegationRequestsRequest,
  output: ListDelegationRequestsResponse,
  errors: [InvalidInputException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDelegationRequests",
}));

export type ListEntitiesForPolicyError =
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Lists all IAM users, groups, and roles that the specified managed policy is attached
 * to.
 *
 * You can use the optional `EntityFilter` parameter to limit the results to a
 * particular type of entity (users, groups, or roles). For example, to list only the roles
 * that are attached to the specified policy, set `EntityFilter` to
 * `Role`.
 *
 * You can paginate the results using the `MaxItems` and `Marker`
 * parameters.
 */
export const listEntitiesForPolicy: API.PaginatedOperationMethod<
  ListEntitiesForPolicyRequest,
  ListEntitiesForPolicyResponse,
  ListEntitiesForPolicyError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListEntitiesForPolicyRequest,
  output: ListEntitiesForPolicyResponse,
  errors: [InvalidInputException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEntitiesForPolicy",
  pagination: { inputToken: "Marker", outputToken: "Marker", pageSize: "MaxItems" } as const,
})) as any;

export type ListGroupPoliciesError = NoSuchEntityException | ServiceFailureException | CommonErrors;
/**
 * Lists the names of the inline policies that are embedded in the specified IAM
 * group.
 *
 * An IAM group can also have managed policies attached to it. To list the managed
 * policies that are attached to a group, use ListAttachedGroupPolicies. For more information about policies, see Managed
 * policies and inline policies in the
 * *IAM User Guide*.
 *
 * You can paginate the results using the `MaxItems` and `Marker`
 * parameters. If there are no inline policies embedded with the specified group, the
 * operation returns an empty list.
 */
export const listGroupPolicies: API.PaginatedOperationMethod<
  ListGroupPoliciesRequest,
  ListGroupPoliciesResponse,
  ListGroupPoliciesError,
  Credentials | HttpClient.HttpClient,
  PolicyNameType
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListGroupPoliciesRequest,
  output: ListGroupPoliciesResponse,
  errors: [NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGroupPolicies",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "PolicyNames",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListGroupsError = ServiceFailureException | CommonErrors;
/**
 * Lists the IAM groups that have the specified path prefix.
 *
 * You can paginate the results using the `MaxItems` and `Marker`
 * parameters.
 */
export const listGroups: API.PaginatedOperationMethod<
  ListGroupsRequest,
  ListGroupsResponse,
  ListGroupsError,
  Credentials | HttpClient.HttpClient,
  Group
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListGroupsRequest,
  output: ListGroupsResponse,
  errors: [ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGroups",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Groups",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListGroupsForUserError = NoSuchEntityException | ServiceFailureException | CommonErrors;
/**
 * Lists the IAM groups that the specified IAM user belongs to.
 *
 * You can paginate the results using the `MaxItems` and `Marker`
 * parameters.
 */
export const listGroupsForUser: API.PaginatedOperationMethod<
  ListGroupsForUserRequest,
  ListGroupsForUserResponse,
  ListGroupsForUserError,
  Credentials | HttpClient.HttpClient,
  Group
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListGroupsForUserRequest,
  output: ListGroupsForUserResponse,
  errors: [NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGroupsForUser",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Groups",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListInstanceProfilesError = ServiceFailureException | CommonErrors;
/**
 * Lists the instance profiles that have the specified path prefix. If there are none,
 * the operation returns an empty list. For more information about instance profiles, see
 * Using
 * instance profiles in the *IAM User Guide*.
 *
 * IAM resource-listing operations return a subset of the available
 * attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an instance profile, see
 * GetInstanceProfile.
 *
 * You can paginate the results using the `MaxItems` and `Marker`
 * parameters.
 */
export const listInstanceProfiles: API.PaginatedOperationMethod<
  ListInstanceProfilesRequest,
  ListInstanceProfilesResponse,
  ListInstanceProfilesError,
  Credentials | HttpClient.HttpClient,
  InstanceProfile
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListInstanceProfilesRequest,
  output: ListInstanceProfilesResponse,
  errors: [ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInstanceProfiles",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "InstanceProfiles",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListInstanceProfilesForRoleError =
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Lists the instance profiles that have the specified associated IAM role. If there
 * are none, the operation returns an empty list. For more information about instance
 * profiles, go to Using
 * instance profiles in the *IAM User Guide*.
 *
 * You can paginate the results using the `MaxItems` and `Marker`
 * parameters.
 */
export const listInstanceProfilesForRole: API.PaginatedOperationMethod<
  ListInstanceProfilesForRoleRequest,
  ListInstanceProfilesForRoleResponse,
  ListInstanceProfilesForRoleError,
  Credentials | HttpClient.HttpClient,
  InstanceProfile
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListInstanceProfilesForRoleRequest,
  output: ListInstanceProfilesForRoleResponse,
  errors: [NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInstanceProfilesForRole",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "InstanceProfiles",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListInstanceProfileTagsError =
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Lists the tags that are attached to the specified IAM instance profile. The returned list of tags is sorted by tag key.
 * For more information about tagging, see Tagging IAM resources in the
 * *IAM User Guide*.
 */
export const listInstanceProfileTags: API.PaginatedOperationMethod<
  ListInstanceProfileTagsRequest,
  ListInstanceProfileTagsResponse,
  ListInstanceProfileTagsError,
  Credentials | HttpClient.HttpClient,
  Tag
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListInstanceProfileTagsRequest,
  output: ListInstanceProfileTagsResponse,
  errors: [NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInstanceProfileTags",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Tags",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListMFADevicesError = NoSuchEntityException | ServiceFailureException | CommonErrors;
/**
 * Lists the MFA devices for an IAM user. If the request includes a IAM user name,
 * then this operation lists all the MFA devices associated with the specified user. If you
 * do not specify a user name, IAM determines the user name implicitly based on the Amazon Web Services
 * access key ID signing the request for this operation.
 *
 * You can paginate the results using the `MaxItems` and `Marker`
 * parameters.
 */
export const listMFADevices: API.PaginatedOperationMethod<
  ListMFADevicesRequest,
  ListMFADevicesResponse,
  ListMFADevicesError,
  Credentials | HttpClient.HttpClient,
  MFADevice
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMFADevicesRequest,
  output: ListMFADevicesResponse,
  errors: [NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMFADevices",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "MFADevices",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListMFADeviceTagsError =
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Lists the tags that are attached to the specified IAM virtual multi-factor authentication (MFA) device. The returned list of tags is
 * sorted by tag key. For more information about tagging, see Tagging IAM resources in the
 * *IAM User Guide*.
 */
export const listMFADeviceTags: API.PaginatedOperationMethod<
  ListMFADeviceTagsRequest,
  ListMFADeviceTagsResponse,
  ListMFADeviceTagsError,
  Credentials | HttpClient.HttpClient,
  Tag
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMFADeviceTagsRequest,
  output: ListMFADeviceTagsResponse,
  errors: [InvalidInputException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMFADeviceTags",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Tags",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListOpenIDConnectProvidersError = ServiceFailureException | CommonErrors;
/**
 * Lists information about the IAM OpenID Connect (OIDC) provider resource objects
 * defined in the Amazon Web Services account.
 *
 * IAM resource-listing operations return a subset of the available
 * attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an OIDC provider, see GetOpenIDConnectProvider.
 */
export const listOpenIDConnectProviders: API.OperationMethod<
  ListOpenIDConnectProvidersRequest,
  ListOpenIDConnectProvidersResponse,
  ListOpenIDConnectProvidersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListOpenIDConnectProvidersRequest,
  output: ListOpenIDConnectProvidersResponse,
  errors: [ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOpenIDConnectProviders",
}));

export type ListOpenIDConnectProviderTagsError =
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Lists the tags that are attached to the specified OpenID Connect (OIDC)-compatible
 * identity provider. The returned list of tags is sorted by tag key. For more information, see About web identity
 * federation.
 *
 * For more information about tagging, see Tagging IAM resources in the
 * *IAM User Guide*.
 */
export const listOpenIDConnectProviderTags: API.PaginatedOperationMethod<
  ListOpenIDConnectProviderTagsRequest,
  ListOpenIDConnectProviderTagsResponse,
  ListOpenIDConnectProviderTagsError,
  Credentials | HttpClient.HttpClient,
  Tag
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOpenIDConnectProviderTagsRequest,
  output: ListOpenIDConnectProviderTagsResponse,
  errors: [InvalidInputException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOpenIDConnectProviderTags",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Tags",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListOrganizationsFeaturesError =
  | AccountNotManagementOrDelegatedAdministratorException
  | OrganizationNotFoundException
  | OrganizationNotInAllFeaturesModeException
  | ServiceAccessNotEnabledException
  | CommonErrors;
/**
 * Lists the centralized root access features enabled for your organization. For more
 * information, see Centrally manage root access for member accounts.
 */
export const listOrganizationsFeatures: API.OperationMethod<
  ListOrganizationsFeaturesRequest,
  ListOrganizationsFeaturesResponse,
  ListOrganizationsFeaturesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListOrganizationsFeaturesRequest,
  output: ListOrganizationsFeaturesResponse,
  errors: [
    AccountNotManagementOrDelegatedAdministratorException,
    OrganizationNotFoundException,
    OrganizationNotInAllFeaturesModeException,
    ServiceAccessNotEnabledException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOrganizationsFeatures",
}));

export type ListPoliciesError = ServiceFailureException | CommonErrors;
/**
 * Lists all the managed policies that are available in your Amazon Web Services account, including
 * your own customer-defined managed policies and all Amazon Web Services managed policies.
 *
 * You can filter the list of policies that is returned using the optional
 * `OnlyAttached`, `Scope`, and `PathPrefix`
 * parameters. For example, to list only the customer managed policies in your Amazon Web Services
 * account, set `Scope` to `Local`. To list only Amazon Web Services managed
 * policies, set `Scope` to `AWS`.
 *
 * You can paginate the results using the `MaxItems` and `Marker`
 * parameters.
 *
 * For more information about managed policies, see Managed policies and inline
 * policies in the *IAM User Guide*.
 *
 * IAM resource-listing operations return a subset of the available
 * attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a customer manged policy, see
 * GetPolicy.
 */
export const listPolicies: API.PaginatedOperationMethod<
  ListPoliciesRequest,
  ListPoliciesResponse,
  ListPoliciesError,
  Credentials | HttpClient.HttpClient,
  Policy
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPoliciesRequest,
  output: ListPoliciesResponse,
  errors: [ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPolicies",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Policies",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListPoliciesGrantingServiceAccessError =
  | InvalidInputException
  | NoSuchEntityException
  | CommonErrors;
/**
 * Retrieves a list of policies that the IAM identity (user, group, or role) can use to
 * access each specified service.
 *
 * This operation does not use other policy types when determining whether a resource
 * could access a service. These other policy types include resource-based policies,
 * access control lists, Organizations policies, IAM permissions boundaries, and STS
 * assume role policies. It only applies permissions policy logic. For more about the
 * evaluation of policy types, see Evaluating policies in the
 * *IAM User Guide*.
 *
 * The list of policies returned by the operation depends on the ARN of the identity that
 * you provide.
 *
 * - **User** - The list of policies includes
 * the managed and inline policies that are attached to the user directly. The list
 * also includes any additional managed and inline policies that are attached to
 * the group to which the user belongs.
 *
 * - **Group** - The list of policies includes
 * only the managed and inline policies that are attached to the group directly.
 * Policies that are attached to the group's user are not included.
 *
 * - **Role** - The list of policies includes
 * only the managed and inline policies that are attached to the role.
 *
 * For each managed policy, this operation returns the ARN and policy name. For each
 * inline policy, it returns the policy name and the entity to which it is attached. Inline
 * policies do not have an ARN. For more information about these policy types, see Managed policies and inline policies in the
 * *IAM User Guide*.
 *
 * Policies that are attached to users and roles as permissions boundaries are not
 * returned. To view which managed policy is currently used to set the permissions boundary
 * for a user or role, use the GetUser or GetRole
 * operations.
 */
export const listPoliciesGrantingServiceAccess: API.OperationMethod<
  ListPoliciesGrantingServiceAccessRequest,
  ListPoliciesGrantingServiceAccessResponse,
  ListPoliciesGrantingServiceAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListPoliciesGrantingServiceAccessRequest,
  output: ListPoliciesGrantingServiceAccessResponse,
  errors: [InvalidInputException, NoSuchEntityException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPoliciesGrantingServiceAccess",
}));

export type ListPolicyTagsError =
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Lists the tags that are attached to the specified IAM customer managed policy.
 * The returned list of tags is sorted by tag key. For more information about tagging, see Tagging IAM resources in the
 * *IAM User Guide*.
 */
export const listPolicyTags: API.PaginatedOperationMethod<
  ListPolicyTagsRequest,
  ListPolicyTagsResponse,
  ListPolicyTagsError,
  Credentials | HttpClient.HttpClient,
  Tag
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPolicyTagsRequest,
  output: ListPolicyTagsResponse,
  errors: [InvalidInputException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPolicyTags",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Tags",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListPolicyVersionsError =
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Lists information about the versions of the specified managed policy, including the
 * version that is currently set as the policy's default version.
 *
 * For more information about managed policies, see Managed policies and inline
 * policies in the *IAM User Guide*.
 */
export const listPolicyVersions: API.PaginatedOperationMethod<
  ListPolicyVersionsRequest,
  ListPolicyVersionsResponse,
  ListPolicyVersionsError,
  Credentials | HttpClient.HttpClient,
  PolicyVersion
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPolicyVersionsRequest,
  output: ListPolicyVersionsResponse,
  errors: [InvalidInputException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPolicyVersions",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Versions",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListRolePoliciesError = NoSuchEntityException | ServiceFailureException | CommonErrors;
/**
 * Lists the names of the inline policies that are embedded in the specified IAM
 * role.
 *
 * An IAM role can also have managed policies attached to it. To list the managed
 * policies that are attached to a role, use ListAttachedRolePolicies. For more information about policies, see Managed
 * policies and inline policies in the
 * *IAM User Guide*.
 *
 * You can paginate the results using the `MaxItems` and `Marker`
 * parameters. If there are no inline policies embedded with the specified role, the
 * operation returns an empty list.
 */
export const listRolePolicies: API.PaginatedOperationMethod<
  ListRolePoliciesRequest,
  ListRolePoliciesResponse,
  ListRolePoliciesError,
  Credentials | HttpClient.HttpClient,
  PolicyNameType
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRolePoliciesRequest,
  output: ListRolePoliciesResponse,
  errors: [NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRolePolicies",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "PolicyNames",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListRolesError = ServiceFailureException | CommonErrors;
/**
 * Lists the IAM roles that have the specified path prefix. If there are none, the
 * operation returns an empty list. For more information about roles, see IAM roles in the
 * *IAM User Guide*.
 *
 * IAM resource-listing operations return a subset of the available
 * attributes for the resource. This operation does not return the following attributes, even though they are an attribute of the returned object:
 *
 * - PermissionsBoundary
 *
 * - RoleLastUsed
 *
 * - Tags
 *
 * To view all of the information for a role, see GetRole.
 *
 * You can paginate the results using the `MaxItems` and `Marker`
 * parameters.
 */
export const listRoles: API.PaginatedOperationMethod<
  ListRolesRequest,
  ListRolesResponse,
  ListRolesError,
  Credentials | HttpClient.HttpClient,
  Role
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRolesRequest,
  output: ListRolesResponse,
  errors: [ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRoles",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Roles",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListRoleTagsError = NoSuchEntityException | ServiceFailureException | CommonErrors;
/**
 * Lists the tags that are attached to the specified role. The returned list of tags is
 * sorted by tag key. For more information about tagging, see Tagging IAM resources in the
 * *IAM User Guide*.
 */
export const listRoleTags: API.PaginatedOperationMethod<
  ListRoleTagsRequest,
  ListRoleTagsResponse,
  ListRoleTagsError,
  Credentials | HttpClient.HttpClient,
  Tag
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRoleTagsRequest,
  output: ListRoleTagsResponse,
  errors: [NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRoleTags",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Tags",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListSAMLProvidersError = ServiceFailureException | CommonErrors;
/**
 * Lists the SAML provider resource objects defined in IAM in the account.
 * IAM resource-listing operations return a subset of the available
 * attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a SAML provider, see GetSAMLProvider.
 *
 * This operation requires Signature Version 4.
 */
export const listSAMLProviders: API.OperationMethod<
  ListSAMLProvidersRequest,
  ListSAMLProvidersResponse,
  ListSAMLProvidersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListSAMLProvidersRequest,
  output: ListSAMLProvidersResponse,
  errors: [ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSAMLProviders",
}));

export type ListSAMLProviderTagsError =
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Lists the tags that are attached to the specified Security Assertion Markup Language
 * (SAML) identity provider. The returned list of tags is sorted by tag key. For more information, see About SAML 2.0-based
 * federation.
 *
 * For more information about tagging, see Tagging IAM resources in the
 * *IAM User Guide*.
 */
export const listSAMLProviderTags: API.PaginatedOperationMethod<
  ListSAMLProviderTagsRequest,
  ListSAMLProviderTagsResponse,
  ListSAMLProviderTagsError,
  Credentials | HttpClient.HttpClient,
  Tag
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSAMLProviderTagsRequest,
  output: ListSAMLProviderTagsResponse,
  errors: [InvalidInputException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSAMLProviderTags",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Tags",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListServerCertificatesError = ServiceFailureException | CommonErrors;
/**
 * Lists the server certificates stored in IAM that have the specified path prefix. If
 * none exist, the operation returns an empty list.
 *
 * You can paginate the results using the `MaxItems` and `Marker`
 * parameters.
 *
 * For more information about working with server certificates, see Working
 * with server certificates in the *IAM User Guide*. This
 * topic also includes a list of Amazon Web Services services that can use the server certificates that
 * you manage with IAM.
 *
 * IAM resource-listing operations return a subset of the available
 * attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a servercertificate, see
 * GetServerCertificate.
 */
export const listServerCertificates: API.PaginatedOperationMethod<
  ListServerCertificatesRequest,
  ListServerCertificatesResponse,
  ListServerCertificatesError,
  Credentials | HttpClient.HttpClient,
  ServerCertificateMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListServerCertificatesRequest,
  output: ListServerCertificatesResponse,
  errors: [ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServerCertificates",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "ServerCertificateMetadataList",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListServerCertificateTagsError =
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Lists the tags that are attached to the specified IAM server certificate. The
 * returned list of tags is sorted by tag key. For more information about tagging, see Tagging IAM resources in the
 * *IAM User Guide*.
 *
 * For certificates in a Region supported by Certificate Manager (ACM), we
 * recommend that you don't use IAM server certificates. Instead, use ACM to provision,
 * manage, and deploy your server certificates. For more information about IAM server
 * certificates, Working with server
 * certificates in the *IAM User Guide*.
 */
export const listServerCertificateTags: API.PaginatedOperationMethod<
  ListServerCertificateTagsRequest,
  ListServerCertificateTagsResponse,
  ListServerCertificateTagsError,
  Credentials | HttpClient.HttpClient,
  Tag
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListServerCertificateTagsRequest,
  output: ListServerCertificateTagsResponse,
  errors: [NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServerCertificateTags",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Tags",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListServiceSpecificCredentialsError =
  | NoSuchEntityException
  | ServiceNotSupportedException
  | RequestLimitExceeded
  | InvalidInput
  | CommonErrors;
/**
 * Returns information about the service-specific credentials associated with the
 * specified IAM user. If none exists, the operation returns an empty list. The
 * service-specific credentials returned by this operation are used only for authenticating
 * the IAM user to a specific service. For more information about using service-specific
 * credentials to authenticate to an Amazon Web Services service, refer to the following docs:
 *
 * - For service-specific credentials with CodeCommit, refer to IAM credentials for CodeCommit: Git credentials, SSH keys, and Amazon Web Services access
 * keys in the *IAM User Guide*.
 *
 * - For service-specific credentials with Amazon Keyspaces (for Apache Cassandra), refer to Use IAM with
 * Amazon Keyspaces (for Apache Cassandra) in the
 * *IAM User Guide*.
 *
 * - For services that support long-term API keys, refer to API
 * keys for Amazon Web Services services in the
 * *IAM User Guide*.
 */
export const listServiceSpecificCredentials: API.OperationMethod<
  ListServiceSpecificCredentialsRequest,
  ListServiceSpecificCredentialsResponse,
  ListServiceSpecificCredentialsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListServiceSpecificCredentialsRequest,
  output: ListServiceSpecificCredentialsResponse,
  errors: [NoSuchEntityException, ServiceNotSupportedException, RequestLimitExceeded, InvalidInput],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServiceSpecificCredentials",
}));

export type ListSigningCertificatesError =
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Returns information about the signing certificates associated with the specified IAM
 * user. If none exists, the operation returns an empty list.
 *
 * Although each user is limited to a small number of signing certificates, you can still
 * paginate the results using the `MaxItems` and `Marker`
 * parameters.
 *
 * If the `UserName` field is not specified, the user name is determined
 * implicitly based on the Amazon Web Services access key ID used to sign the request for this operation.
 * This operation works for access keys under the Amazon Web Services account. Consequently, you can use
 * this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no
 * associated users.
 */
export const listSigningCertificates: API.PaginatedOperationMethod<
  ListSigningCertificatesRequest,
  ListSigningCertificatesResponse,
  ListSigningCertificatesError,
  Credentials | HttpClient.HttpClient,
  SigningCertificate
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSigningCertificatesRequest,
  output: ListSigningCertificatesResponse,
  errors: [NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSigningCertificates",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Certificates",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListSSHPublicKeysError = NoSuchEntityException | CommonErrors;
/**
 * Returns information about the SSH public keys associated with the specified IAM
 * user. If none exists, the operation returns an empty list.
 *
 * The SSH public keys returned by this operation are used only for authenticating the
 * IAM user to an CodeCommit repository. For more information about using SSH keys to
 * authenticate to an CodeCommit repository, see Set up CodeCommit for
 * SSH connections in the *CodeCommit User Guide*.
 *
 * Although each user is limited to a small number of keys, you can still paginate the
 * results using the `MaxItems` and `Marker` parameters.
 */
export const listSSHPublicKeys: API.PaginatedOperationMethod<
  ListSSHPublicKeysRequest,
  ListSSHPublicKeysResponse,
  ListSSHPublicKeysError,
  Credentials | HttpClient.HttpClient,
  SSHPublicKeyMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSSHPublicKeysRequest,
  output: ListSSHPublicKeysResponse,
  errors: [NoSuchEntityException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSSHPublicKeys",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "SSHPublicKeys",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListUserPoliciesError = NoSuchEntityException | ServiceFailureException | CommonErrors;
/**
 * Lists the names of the inline policies embedded in the specified IAM user.
 *
 * An IAM user can also have managed policies attached to it. To list the managed
 * policies that are attached to a user, use ListAttachedUserPolicies. For more information about policies, see Managed
 * policies and inline policies in the
 * *IAM User Guide*.
 *
 * You can paginate the results using the `MaxItems` and `Marker`
 * parameters. If there are no inline policies embedded with the specified user, the
 * operation returns an empty list.
 */
export const listUserPolicies: API.PaginatedOperationMethod<
  ListUserPoliciesRequest,
  ListUserPoliciesResponse,
  ListUserPoliciesError,
  Credentials | HttpClient.HttpClient,
  PolicyNameType
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListUserPoliciesRequest,
  output: ListUserPoliciesResponse,
  errors: [NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUserPolicies",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "PolicyNames",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListUsersError = ServiceFailureException | CommonErrors;
/**
 * Lists the IAM users that have the specified path prefix. If no path prefix is
 * specified, the operation returns all users in the Amazon Web Services account. If there are none, the
 * operation returns an empty list.
 *
 * IAM resource-listing operations return a subset of the available
 * attributes for the resource. This operation does not return the following attributes, even though they are an attribute of the returned object:
 *
 * - PermissionsBoundary
 *
 * - Tags
 *
 * To view all of the information for a user, see GetUser.
 *
 * You can paginate the results using the `MaxItems` and `Marker`
 * parameters.
 */
export const listUsers: API.PaginatedOperationMethod<
  ListUsersRequest,
  ListUsersResponse,
  ListUsersError,
  Credentials | HttpClient.HttpClient,
  User
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListUsersRequest,
  output: ListUsersResponse,
  errors: [ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUsers",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Users",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListUserTagsError = NoSuchEntityException | ServiceFailureException | CommonErrors;
/**
 * Lists the tags that are attached to the specified IAM user. The returned list of tags is sorted by tag key. For more information about tagging, see Tagging IAM resources in the
 * *IAM User Guide*.
 */
export const listUserTags: API.PaginatedOperationMethod<
  ListUserTagsRequest,
  ListUserTagsResponse,
  ListUserTagsError,
  Credentials | HttpClient.HttpClient,
  Tag
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListUserTagsRequest,
  output: ListUserTagsResponse,
  errors: [NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUserTags",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Tags",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListVirtualMFADevicesError = CommonErrors;
/**
 * Lists the virtual MFA devices defined in the Amazon Web Services account by assignment status. If
 * you do not specify an assignment status, the operation returns a list of all virtual MFA
 * devices. Assignment status can be `Assigned`, `Unassigned`, or
 * `Any`.
 *
 * IAM resource-listing operations return a subset of the available
 * attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view tag information for a virtual MFA device, see ListMFADeviceTags.
 *
 * You can paginate the results using the `MaxItems` and `Marker`
 * parameters.
 */
export const listVirtualMFADevices: API.PaginatedOperationMethod<
  ListVirtualMFADevicesRequest,
  ListVirtualMFADevicesResponse,
  ListVirtualMFADevicesError,
  Credentials | HttpClient.HttpClient,
  VirtualMFADevice
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListVirtualMFADevicesRequest,
  output: ListVirtualMFADevicesResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVirtualMFADevices",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "VirtualMFADevices",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type PutAccountPropertiesError =
  | ConcurrentModificationException
  | InvalidInputException
  | ServiceFailureException
  | CommonErrors;
/**
 * Sets account-level properties for the caller's Amazon Web Services account. Account properties are
 * configuration settings that control account-wide IAM features such as Role
 * Manager.
 *
 * Specify properties as key-value pairs in
 * `Namespace/PropertyName` format. All properties in a single request must
 * belong to the same namespace. Use GetAccountProperties to view the current properties.
 */
export const putAccountProperties: API.OperationMethod<
  PutAccountPropertiesRequest,
  PutAccountPropertiesResponse,
  PutAccountPropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutAccountPropertiesRequest,
  output: PutAccountPropertiesResponse,
  errors: [ConcurrentModificationException, InvalidInputException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutAccountProperties",
}));

export type PutGroupPolicyError =
  | LimitExceededException
  | MalformedPolicyDocumentException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Adds or updates an inline policy document that is embedded in the specified IAM
 * group.
 *
 * A user can also have managed policies attached to it. To attach a managed policy to a
 * group, use
 * `AttachGroupPolicy`
 * . To create a new managed policy, use
 *
 * `CreatePolicy`
 * . For information about policies, see Managed
 * policies and inline policies in the
 * *IAM User Guide*.
 *
 * For information about the maximum number of inline policies that you can embed in a
 * group, see IAM and STS quotas in the *IAM User Guide*.
 *
 * Because policy documents can be large, you should use POST rather than GET when
 * calling `PutGroupPolicy`. For general information about using the Query
 * API with IAM, see Making query requests in the
 * *IAM User Guide*.
 */
export const putGroupPolicy: API.OperationMethod<
  PutGroupPolicyRequest,
  PutGroupPolicyResponse,
  PutGroupPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutGroupPolicyRequest,
  output: PutGroupPolicyResponse,
  errors: [
    LimitExceededException,
    MalformedPolicyDocumentException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutGroupPolicy",
}));

export type PutRolePermissionsBoundaryError =
  | InvalidInputException
  | NoSuchEntityException
  | PolicyNotAttachableException
  | ServiceFailureException
  | UnmodifiableEntityException
  | CommonErrors;
/**
 * Adds or updates the policy that is specified as the IAM role's permissions boundary.
 * You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for
 * a role. Use the boundary to control the maximum permissions that the role can have.
 * Setting a permissions boundary is an advanced feature that can affect the permissions
 * for the role.
 *
 * You cannot set the boundary for a service-linked role.
 *
 * Policies used as permissions boundaries do not provide permissions. You must also
 * attach a permissions policy to the role. To learn how the effective permissions for
 * a role are evaluated, see IAM JSON policy
 * evaluation logic in the IAM User Guide.
 */
export const putRolePermissionsBoundary: API.OperationMethod<
  PutRolePermissionsBoundaryRequest,
  PutRolePermissionsBoundaryResponse,
  PutRolePermissionsBoundaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutRolePermissionsBoundaryRequest,
  output: PutRolePermissionsBoundaryResponse,
  errors: [
    InvalidInputException,
    NoSuchEntityException,
    PolicyNotAttachableException,
    ServiceFailureException,
    UnmodifiableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutRolePermissionsBoundary",
}));

export type PutRolePolicyError =
  | LimitExceededException
  | MalformedPolicyDocumentException
  | NoSuchEntityException
  | ServiceFailureException
  | UnmodifiableEntityException
  | CommonErrors;
/**
 * Adds or updates an inline policy document that is embedded in the specified IAM
 * role.
 *
 * When you embed an inline policy in a role, the inline policy is used as part of the
 * role's access (permissions) policy. The role's trust policy is created at the same time
 * as the role, using
 * `CreateRole`
 * .
 * You can update a role's trust policy using
 * `UpdateAssumeRolePolicy`
 * . For more information about roles,
 * see IAM
 * roles in the *IAM User Guide*.
 *
 * A role can also have a managed policy attached to it. To attach a managed policy to a
 * role, use
 * `AttachRolePolicy`
 * . To create a new managed policy, use
 *
 * `CreatePolicy`
 * . For information about policies, see Managed
 * policies and inline policies in the
 * *IAM User Guide*.
 *
 * For information about the maximum number of inline policies that you can embed with a
 * role, see IAM and STS quotas in the *IAM User Guide*.
 *
 * Because policy documents can be large, you should use POST rather than GET when
 * calling `PutRolePolicy`. For general information about using the Query
 * API with IAM, see Making query requests in the
 * *IAM User Guide*.
 */
export const putRolePolicy: API.OperationMethod<
  PutRolePolicyRequest,
  PutRolePolicyResponse,
  PutRolePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutRolePolicyRequest,
  output: PutRolePolicyResponse,
  errors: [
    LimitExceededException,
    MalformedPolicyDocumentException,
    NoSuchEntityException,
    ServiceFailureException,
    UnmodifiableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutRolePolicy",
}));

export type PutUserPermissionsBoundaryError =
  | InvalidInputException
  | NoSuchEntityException
  | PolicyNotAttachableException
  | ServiceFailureException
  | CommonErrors;
/**
 * Adds or updates the policy that is specified as the IAM user's permissions
 * boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the
 * boundary for a user. Use the boundary to control the maximum permissions that the user
 * can have. Setting a permissions boundary is an advanced feature that can affect the
 * permissions for the user.
 *
 * Policies that are used as permissions boundaries do not provide permissions. You
 * must also attach a permissions policy to the user. To learn how the effective
 * permissions for a user are evaluated, see IAM JSON policy
 * evaluation logic in the IAM User Guide.
 */
export const putUserPermissionsBoundary: API.OperationMethod<
  PutUserPermissionsBoundaryRequest,
  PutUserPermissionsBoundaryResponse,
  PutUserPermissionsBoundaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutUserPermissionsBoundaryRequest,
  output: PutUserPermissionsBoundaryResponse,
  errors: [
    InvalidInputException,
    NoSuchEntityException,
    PolicyNotAttachableException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutUserPermissionsBoundary",
}));

export type PutUserPolicyError =
  | LimitExceededException
  | MalformedPolicyDocumentException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Adds or updates an inline policy document that is embedded in the specified IAM
 * user.
 *
 * An IAM user can also have a managed policy attached to it. To attach a managed
 * policy to a user, use
 * `AttachUserPolicy`
 * . To create a new managed policy, use
 *
 * `CreatePolicy`
 * . For information about policies, see Managed
 * policies and inline policies in the
 * *IAM User Guide*.
 *
 * For information about the maximum number of inline policies that you can embed in a
 * user, see IAM and STS quotas in the *IAM User Guide*.
 *
 * Because policy documents can be large, you should use POST rather than GET when
 * calling `PutUserPolicy`. For general information about using the Query
 * API with IAM, see Making query requests in the
 * *IAM User Guide*.
 */
export const putUserPolicy: API.OperationMethod<
  PutUserPolicyRequest,
  PutUserPolicyResponse,
  PutUserPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutUserPolicyRequest,
  output: PutUserPolicyResponse,
  errors: [
    LimitExceededException,
    MalformedPolicyDocumentException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutUserPolicy",
}));

export type RejectDelegationRequestError =
  | ConcurrentModificationException
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Rejects a delegation request, denying the requested temporary access.
 *
 * Once a request is rejected, it cannot be accepted or updated later. Rejected requests expire after 7 days.
 *
 * When rejecting a request, an optional explanation can be added using the `Notes` request parameter.
 *
 * For more details, see
 *
 * Managing Permissions for Delegation Requests.
 */
export const rejectDelegationRequest: API.OperationMethod<
  RejectDelegationRequestRequest,
  RejectDelegationRequestResponse,
  RejectDelegationRequestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RejectDelegationRequestRequest,
  output: RejectDelegationRequestResponse,
  errors: [
    ConcurrentModificationException,
    InvalidInputException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RejectDelegationRequest",
}));

export type RemoveClientIDFromOpenIDConnectProviderError =
  | ConcurrentModificationException
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Removes the specified client ID (also known as audience) from the list of client IDs
 * registered for the specified IAM OpenID Connect (OIDC) provider resource
 * object.
 *
 * This operation is idempotent; it does not fail or return an error if you try to remove
 * a client ID that does not exist.
 */
export const removeClientIDFromOpenIDConnectProvider: API.OperationMethod<
  RemoveClientIDFromOpenIDConnectProviderRequest,
  RemoveClientIDFromOpenIDConnectProviderResponse,
  RemoveClientIDFromOpenIDConnectProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveClientIDFromOpenIDConnectProviderRequest,
  output: RemoveClientIDFromOpenIDConnectProviderResponse,
  errors: [
    ConcurrentModificationException,
    InvalidInputException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveClientIDFromOpenIDConnectProvider",
}));

export type RemoveRoleFromInstanceProfileError =
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | UnmodifiableEntityException
  | CommonErrors;
/**
 * Removes the specified IAM role from the specified Amazon EC2 instance profile.
 *
 * Make sure that you do not have any Amazon EC2 instances running with the role you are
 * about to remove from the instance profile. Removing a role from an instance profile
 * that is associated with a running instance might break any applications running on
 * the instance.
 *
 * For more information about roles, see IAM roles in the
 * *IAM User Guide*. For more information about instance profiles,
 * see Using
 * instance profiles in the *IAM User Guide*.
 */
export const removeRoleFromInstanceProfile: API.OperationMethod<
  RemoveRoleFromInstanceProfileRequest,
  RemoveRoleFromInstanceProfileResponse,
  RemoveRoleFromInstanceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveRoleFromInstanceProfileRequest,
  output: RemoveRoleFromInstanceProfileResponse,
  errors: [
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
    UnmodifiableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveRoleFromInstanceProfile",
}));

export type RemoveUserFromGroupError =
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Removes the specified user from the specified group.
 */
export const removeUserFromGroup: API.OperationMethod<
  RemoveUserFromGroupRequest,
  RemoveUserFromGroupResponse,
  RemoveUserFromGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveUserFromGroupRequest,
  output: RemoveUserFromGroupResponse,
  errors: [LimitExceededException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveUserFromGroup",
}));

export type ResetServiceSpecificCredentialError = NoSuchEntityException | CommonErrors;
/**
 * Resets the password for a service-specific credential. The new password is Amazon Web Services
 * generated and cryptographically strong. It cannot be configured by the user. Resetting
 * the password immediately invalidates the previous password associated with this
 * user.
 */
export const resetServiceSpecificCredential: API.OperationMethod<
  ResetServiceSpecificCredentialRequest,
  ResetServiceSpecificCredentialResponse,
  ResetServiceSpecificCredentialError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ResetServiceSpecificCredentialRequest,
  output: ResetServiceSpecificCredentialResponse,
  errors: [NoSuchEntityException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ResetServiceSpecificCredential",
}));

export type ResyncMFADeviceError =
  | ConcurrentModificationException
  | InvalidAuthenticationCodeException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Synchronizes the specified MFA device with its IAM resource object on the Amazon Web Services
 * servers.
 *
 * For more information about creating and working with virtual MFA devices, see Using a virtual MFA
 * device in the *IAM User Guide*.
 */
export const resyncMFADevice: API.OperationMethod<
  ResyncMFADeviceRequest,
  ResyncMFADeviceResponse,
  ResyncMFADeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ResyncMFADeviceRequest,
  output: ResyncMFADeviceResponse,
  errors: [
    ConcurrentModificationException,
    InvalidAuthenticationCodeException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ResyncMFADevice",
}));

export type SendDelegationTokenError =
  | ConcurrentModificationException
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Sends the exchange token for an accepted delegation request.
 *
 * The exchange token is sent to the partner via an asynchronous notification channel, established by the partner.
 *
 * The delegation request must be in the `ACCEPTED` state when calling this API. After the
 * `SendDelegationToken` API
 * call is successful, the request transitions to a `FINALIZED` state and cannot be rolled back. However, a user may reject
 * an accepted request before the `SendDelegationToken` API is called.
 *
 * For more details, see
 *
 * Managing Permissions for Delegation Requests.
 */
export const sendDelegationToken: API.OperationMethod<
  SendDelegationTokenRequest,
  SendDelegationTokenResponse,
  SendDelegationTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SendDelegationTokenRequest,
  output: SendDelegationTokenResponse,
  errors: [
    ConcurrentModificationException,
    InvalidInputException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendDelegationToken",
}));

export type SetDefaultPolicyVersionError =
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Sets the specified version of the specified policy as the policy's default (operative)
 * version.
 *
 * This operation affects all users, groups, and roles that the policy is attached to. To
 * list the users, groups, and roles that the policy is attached to, use ListEntitiesForPolicy.
 *
 * For information about managed policies, see Managed policies and inline
 * policies in the *IAM User Guide*.
 */
export const setDefaultPolicyVersion: API.OperationMethod<
  SetDefaultPolicyVersionRequest,
  SetDefaultPolicyVersionResponse,
  SetDefaultPolicyVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetDefaultPolicyVersionRequest,
  output: SetDefaultPolicyVersionResponse,
  errors: [
    InvalidInputException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetDefaultPolicyVersion",
}));

export type SetSecurityTokenServicePreferencesError = ServiceFailureException | CommonErrors;
/**
 * Sets the specified version of the global endpoint token as the token version used for
 * the Amazon Web Services account.
 *
 * By default, Security Token Service (STS) is available as a global service, and all STS requests
 * go to a single endpoint at `https://sts.amazonaws.com`. Amazon Web Services recommends
 * using Regional STS endpoints to reduce latency, build in redundancy, and increase
 * session token availability. For information about Regional endpoints for STS, see
 * Security Token Service
 * endpoints and quotas in the *Amazon Web Services General Reference*.
 *
 * If you make an STS call to the global endpoint, the resulting session tokens might
 * be valid in some Regions but not others. It depends on the version that is set in this
 * operation. Version 1 tokens are valid only in Amazon Web Services Regions that are
 * available by default. These tokens do not work in manually enabled Regions, such as Asia
 * Pacific (Hong Kong). Version 2 tokens are valid in all Regions. However, version 2
 * tokens are longer and might affect systems where you temporarily store tokens. For
 * information, see Activating and
 * deactivating STS in an Amazon Web Services Region in the
 * *IAM User Guide*.
 *
 * To view the current session token version, see the
 * `GlobalEndpointTokenVersion` entry in the response of the GetAccountSummary operation.
 */
export const setSecurityTokenServicePreferences: API.OperationMethod<
  SetSecurityTokenServicePreferencesRequest,
  SetSecurityTokenServicePreferencesResponse,
  SetSecurityTokenServicePreferencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetSecurityTokenServicePreferencesRequest,
  output: SetSecurityTokenServicePreferencesResponse,
  errors: [ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetSecurityTokenServicePreferences",
}));

export type SimulateCustomPolicyError =
  | InvalidInputException
  | PolicyEvaluationException
  | CommonErrors;
/**
 * Simulate how a set of IAM policies and optionally a resource-based policy works with
 * a list of API operations and Amazon Web Services resources to determine the policies' effective
 * permissions. The policies are provided as strings.
 *
 * The simulation does not perform the API operations; it only checks the authorization
 * to determine if the simulated policies allow or deny the operations. You can simulate
 * resources that don't exist in your account.
 *
 * If you want to simulate existing policies that are attached to an IAM user, group,
 * or role, use SimulatePrincipalPolicy instead.
 *
 * Context keys are variables that are maintained by Amazon Web Services and its services and which
 * provide details about the context of an API query request. You can use the
 * `Condition` element of an IAM policy to evaluate context keys. To get
 * the list of context keys that the policies require for correct simulation, use GetContextKeysForCustomPolicy.
 *
 * If the output is long, you can use `MaxItems` and `Marker`
 * parameters to paginate the results.
 *
 * The IAM policy simulator evaluates statements in identity-based policies,
 * service control policies (SCPs) including their condition keys and resource
 * scoping, and the inputs that you provide during simulation. The policy
 * simulator results can differ from your live Amazon Web Services environment. We recommend that you check your policies
 * against your live Amazon Web Services environment after testing using the policy simulator to
 * confirm that you have the desired results. For more information about using the
 * policy simulator, see Testing IAM
 * policies with the IAM policy simulator in the
 * *IAM User Guide*.
 */
export const simulateCustomPolicy: API.PaginatedOperationMethod<
  SimulateCustomPolicyRequest,
  SimulatePolicyResponse,
  SimulateCustomPolicyError,
  Credentials | HttpClient.HttpClient,
  EvaluationResult
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SimulateCustomPolicyRequest,
  output: SimulatePolicyResponse,
  errors: [InvalidInputException, PolicyEvaluationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SimulateCustomPolicy",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "EvaluationResults",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type SimulatePrincipalPolicyError =
  | InvalidInputException
  | NoSuchEntityException
  | PolicyEvaluationException
  | CommonErrors;
/**
 * Simulate how a set of IAM policies attached to an IAM entity works with a list of
 * API operations and Amazon Web Services resources to determine the policies' effective permissions. The
 * entity can be an IAM user, group, or role. If you specify a user, then the simulation
 * also includes all of the policies that are attached to groups that the user belongs to.
 * You can simulate resources that don't exist in your account.
 *
 * You can optionally include a list of one or more additional policies specified as
 * strings to include in the simulation. If you want to simulate only policies specified as
 * strings, use SimulateCustomPolicy instead.
 *
 * You can also optionally include one resource-based policy to be evaluated with each of
 * the resources included in the simulation for IAM users only.
 *
 * The simulation does not perform the API operations; it only checks the authorization
 * to determine if the simulated policies allow or deny the operations.
 *
 * For cross-account simulations, `EvalDecisionDetails` returns the decision
 * for each policy type (identity-based policy, resource-based policy, and permissions
 * boundary). This helps you identify which policy type is responsible for an allow or
 * deny decision when policies span multiple accounts.
 *
 * **Note:** This operation discloses information about the
 * permissions granted to other users. If you do not want users to see other user's
 * permissions, then consider allowing them to use SimulateCustomPolicy instead.
 *
 * Context keys are variables maintained by Amazon Web Services and its services that provide details
 * about the context of an API query request. You can use the `Condition`
 * element of an IAM policy to evaluate context keys. To get the list of context keys
 * that the policies require for correct simulation, use GetContextKeysForPrincipalPolicy.
 *
 * If the output is long, you can use the `MaxItems` and `Marker`
 * parameters to paginate the results.
 *
 * The IAM policy simulator evaluates statements in identity-based policies,
 * service control policies (SCPs) including their condition keys and resource
 * scoping, and the inputs that you provide during simulation. The policy
 * simulator results can differ from your live Amazon Web Services environment. We recommend that you check your policies
 * against your live Amazon Web Services environment after testing using the policy simulator to
 * confirm that you have the desired results. For more information about using the
 * policy simulator, see Testing IAM
 * policies with the IAM policy simulator in the
 * *IAM User Guide*.
 */
export const simulatePrincipalPolicy: API.PaginatedOperationMethod<
  SimulatePrincipalPolicyRequest,
  SimulatePolicyResponse,
  SimulatePrincipalPolicyError,
  Credentials | HttpClient.HttpClient,
  EvaluationResult
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SimulatePrincipalPolicyRequest,
  output: SimulatePolicyResponse,
  errors: [InvalidInputException, NoSuchEntityException, PolicyEvaluationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SimulatePrincipalPolicy",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "EvaluationResults",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type TagInstanceProfileError =
  | ConcurrentModificationException
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Adds one or more tags to an IAM instance profile. If a tag with the same key name
 * already exists, then that tag is overwritten with the new value.
 *
 * Each tag consists of a key name and an associated value. By assigning tags to your resources, you can do the
 * following:
 *
 * - **Administrative grouping and discovery** - Attach
 * tags to resources to aid in organization and search. For example, you could search for all
 * resources with the key name *Project* and the value
 * *MyImportantProject*. Or search for all resources with the key name
 * *Cost Center* and the value *41200*.
 *
 * - **Access control** - Include tags in IAM user-based
 * and resource-based policies. You can use tags to restrict access to only an IAM instance
 * profile that has a specified tag attached. For examples of policies that show how to use
 * tags to control access, see Control access using IAM tags in the
 * *IAM User Guide*.
 *
 * - If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
 * fails and the resource is not created. For more information about tagging, see Tagging IAM resources in the
 * *IAM User Guide*.
 *
 * - Amazon Web Services always interprets the tag `Value` as a single string. If you
 * need to store an array, you can store comma-separated values in the string. However, you
 * must interpret the value in your code.
 */
export const tagInstanceProfile: API.OperationMethod<
  TagInstanceProfileRequest,
  TagInstanceProfileResponse,
  TagInstanceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagInstanceProfileRequest,
  output: TagInstanceProfileResponse,
  errors: [
    ConcurrentModificationException,
    InvalidInputException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagInstanceProfile",
}));

export type TagMFADeviceError =
  | ConcurrentModificationException
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Adds one or more tags to an IAM virtual multi-factor authentication (MFA) device. If
 * a tag with the same key name already exists, then that tag is overwritten with the new
 * value.
 *
 * A tag consists of a key name and an associated value. By assigning tags to your
 * resources, you can do the following:
 *
 * - **Administrative grouping and discovery** - Attach
 * tags to resources to aid in organization and search. For example, you could search for all
 * resources with the key name *Project* and the value
 * *MyImportantProject*. Or search for all resources with the key name
 * *Cost Center* and the value *41200*.
 *
 * - **Access control** - Include tags in IAM user-based
 * and resource-based policies. You can use tags to restrict access to only an IAM virtual
 * MFA device that has a specified tag attached. For examples of policies that show how to
 * use tags to control access, see Control access using IAM tags in the
 * *IAM User Guide*.
 *
 * - If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
 * fails and the resource is not created. For more information about tagging, see Tagging IAM resources in the
 * *IAM User Guide*.
 *
 * - Amazon Web Services always interprets the tag `Value` as a single string. If you
 * need to store an array, you can store comma-separated values in the string. However, you
 * must interpret the value in your code.
 */
export const tagMFADevice: API.OperationMethod<
  TagMFADeviceRequest,
  TagMFADeviceResponse,
  TagMFADeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagMFADeviceRequest,
  output: TagMFADeviceResponse,
  errors: [
    ConcurrentModificationException,
    InvalidInputException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagMFADevice",
}));

export type TagOpenIDConnectProviderError =
  | ConcurrentModificationException
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Adds one or more tags to an OpenID Connect (OIDC)-compatible identity provider. For
 * more information about these providers, see About web identity federation. If
 * a tag with the same key name already exists, then that tag is overwritten with the new
 * value.
 *
 * A tag consists of a key name and an associated value. By assigning tags to your
 * resources, you can do the following:
 *
 * - **Administrative grouping and discovery** - Attach
 * tags to resources to aid in organization and search. For example, you could search for all
 * resources with the key name *Project* and the value
 * *MyImportantProject*. Or search for all resources with the key name
 * *Cost Center* and the value *41200*.
 *
 * - **Access control** - Include tags in IAM identity-based
 * and resource-based policies. You can use tags to restrict access to only an OIDC provider
 * that has a specified tag attached. For examples of policies that show how to use tags to
 * control access, see Control access using IAM tags in the
 * *IAM User Guide*.
 *
 * - If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
 * fails and the resource is not created. For more information about tagging, see Tagging IAM resources in the
 * *IAM User Guide*.
 *
 * - Amazon Web Services always interprets the tag `Value` as a single string. If you
 * need to store an array, you can store comma-separated values in the string. However, you
 * must interpret the value in your code.
 */
export const tagOpenIDConnectProvider: API.OperationMethod<
  TagOpenIDConnectProviderRequest,
  TagOpenIDConnectProviderResponse,
  TagOpenIDConnectProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagOpenIDConnectProviderRequest,
  output: TagOpenIDConnectProviderResponse,
  errors: [
    ConcurrentModificationException,
    InvalidInputException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagOpenIDConnectProvider",
}));

export type TagPolicyError =
  | ConcurrentModificationException
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Adds one or more tags to an IAM customer managed policy. If a tag with the same key
 * name already exists, then that tag is overwritten with the new value.
 *
 * A tag consists of a key name and an associated value. By assigning tags to your
 * resources, you can do the following:
 *
 * - **Administrative grouping and discovery** - Attach
 * tags to resources to aid in organization and search. For example, you could search for all
 * resources with the key name *Project* and the value
 * *MyImportantProject*. Or search for all resources with the key name
 * *Cost Center* and the value *41200*.
 *
 * - **Access control** - Include tags in IAM user-based
 * and resource-based policies. You can use tags to restrict access to only an IAM customer
 * managed policy that has a specified tag attached. For examples of policies that show how
 * to use tags to control access, see Control access using IAM tags in the
 * *IAM User Guide*.
 *
 * - If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
 * fails and the resource is not created. For more information about tagging, see Tagging IAM resources in the
 * *IAM User Guide*.
 *
 * - Amazon Web Services always interprets the tag `Value` as a single string. If you
 * need to store an array, you can store comma-separated values in the string. However, you
 * must interpret the value in your code.
 */
export const tagPolicy: API.OperationMethod<
  TagPolicyRequest,
  TagPolicyResponse,
  TagPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagPolicyRequest,
  output: TagPolicyResponse,
  errors: [
    ConcurrentModificationException,
    InvalidInputException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagPolicy",
}));

export type TagRoleError =
  | ConcurrentModificationException
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Adds one or more tags to an IAM role. The role can be a regular role or a
 * service-linked role. If a tag with the same key name already exists, then that tag is
 * overwritten with the new value.
 *
 * A tag consists of a key name and an associated value. By assigning tags to your
 * resources, you can do the following:
 *
 * - **Administrative grouping and discovery** - Attach
 * tags to resources to aid in organization and search. For example, you could search for all
 * resources with the key name *Project* and the value
 * *MyImportantProject*. Or search for all resources with the key name
 * *Cost Center* and the value *41200*.
 *
 * - **Access control** - Include tags in IAM user-based
 * and resource-based policies. You can use tags to restrict access to only an IAM role
 * that has a specified tag attached. You can also restrict access to only those resources
 * that have a certain tag attached. For examples of policies that show how to use tags to
 * control access, see Control access using IAM tags in the
 * *IAM User Guide*.
 *
 * - **Cost allocation** - Use tags to help track which
 * individuals and teams are using which Amazon Web Services resources.
 *
 * - If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
 * fails and the resource is not created. For more information about tagging, see Tagging IAM resources in the
 * *IAM User Guide*.
 *
 * - Amazon Web Services always interprets the tag `Value` as a single string. If you
 * need to store an array, you can store comma-separated values in the string. However, you
 * must interpret the value in your code.
 *
 * For more information about tagging, see Tagging IAM identities in the
 * *IAM User Guide*.
 */
export const tagRole: API.OperationMethod<
  TagRoleRequest,
  TagRoleResponse,
  TagRoleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagRoleRequest,
  output: TagRoleResponse,
  errors: [
    ConcurrentModificationException,
    InvalidInputException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagRole",
}));

export type TagSAMLProviderError =
  | ConcurrentModificationException
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Adds one or more tags to a Security Assertion Markup Language (SAML) identity provider.
 * For more information about these providers, see About SAML 2.0-based federation .
 * If a tag with the same key name already exists, then that tag is overwritten with the new
 * value.
 *
 * A tag consists of a key name and an associated value. By assigning tags to your
 * resources, you can do the following:
 *
 * - **Administrative grouping and discovery** - Attach
 * tags to resources to aid in organization and search. For example, you could search for all
 * resources with the key name *Project* and the value
 * *MyImportantProject*. Or search for all resources with the key name
 * *Cost Center* and the value *41200*.
 *
 * - **Access control** - Include tags in IAM user-based
 * and resource-based policies. You can use tags to restrict access to only a SAML identity
 * provider that has a specified tag attached. For examples of policies that show how to use
 * tags to control access, see Control access using IAM tags in the
 * *IAM User Guide*.
 *
 * - If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
 * fails and the resource is not created. For more information about tagging, see Tagging IAM resources in the
 * *IAM User Guide*.
 *
 * - Amazon Web Services always interprets the tag `Value` as a single string. If you
 * need to store an array, you can store comma-separated values in the string. However, you
 * must interpret the value in your code.
 */
export const tagSAMLProvider: API.OperationMethod<
  TagSAMLProviderRequest,
  TagSAMLProviderResponse,
  TagSAMLProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagSAMLProviderRequest,
  output: TagSAMLProviderResponse,
  errors: [
    ConcurrentModificationException,
    InvalidInputException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagSAMLProvider",
}));

export type TagServerCertificateError =
  | ConcurrentModificationException
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Adds one or more tags to an IAM server certificate. If a tag with the same key name
 * already exists, then that tag is overwritten with the new value.
 *
 * For certificates in a Region supported by Certificate Manager (ACM), we
 * recommend that you don't use IAM server certificates. Instead, use ACM to provision,
 * manage, and deploy your server certificates. For more information about IAM server
 * certificates, Working with server
 * certificates in the *IAM User Guide*.
 *
 * A tag consists of a key name and an associated value. By assigning tags to your
 * resources, you can do the following:
 *
 * - **Administrative grouping and discovery** - Attach
 * tags to resources to aid in organization and search. For example, you could search for all
 * resources with the key name *Project* and the value
 * *MyImportantProject*. Or search for all resources with the key name
 * *Cost Center* and the value *41200*.
 *
 * - **Access control** - Include tags in IAM user-based
 * and resource-based policies. You can use tags to restrict access to only a server
 * certificate that has a specified tag attached. For examples of policies that show how to
 * use tags to control access, see Control access using IAM tags in the
 * *IAM User Guide*.
 *
 * - **Cost allocation** - Use tags to help track which
 * individuals and teams are using which Amazon Web Services resources.
 *
 * - If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
 * fails and the resource is not created. For more information about tagging, see Tagging IAM resources in the
 * *IAM User Guide*.
 *
 * - Amazon Web Services always interprets the tag `Value` as a single string. If you
 * need to store an array, you can store comma-separated values in the string. However, you
 * must interpret the value in your code.
 */
export const tagServerCertificate: API.OperationMethod<
  TagServerCertificateRequest,
  TagServerCertificateResponse,
  TagServerCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagServerCertificateRequest,
  output: TagServerCertificateResponse,
  errors: [
    ConcurrentModificationException,
    InvalidInputException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagServerCertificate",
}));

export type TagUserError =
  | ConcurrentModificationException
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Adds one or more tags to an IAM user. If a tag with the same key name already exists,
 * then that tag is overwritten with the new value.
 *
 * A tag consists of a key name and an associated value. By assigning tags to your
 * resources, you can do the following:
 *
 * - **Administrative grouping and discovery** - Attach
 * tags to resources to aid in organization and search. For example, you could search for all
 * resources with the key name *Project* and the value
 * *MyImportantProject*. Or search for all resources with the key name
 * *Cost Center* and the value *41200*.
 *
 * - **Access control** - Include tags in IAM identity-based
 * and resource-based policies. You can use tags to restrict access to only an IAM
 * requesting user that has a specified tag attached. You can also restrict access to only
 * those resources that have a certain tag attached. For examples of policies that show how
 * to use tags to control access, see Control access using IAM tags in the
 * *IAM User Guide*.
 *
 * - **Cost allocation** - Use tags to help track which
 * individuals and teams are using which Amazon Web Services resources.
 *
 * - If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
 * fails and the resource is not created. For more information about tagging, see Tagging IAM resources in the
 * *IAM User Guide*.
 *
 * - Amazon Web Services always interprets the tag `Value` as a single string. If you
 * need to store an array, you can store comma-separated values in the string. However, you
 * must interpret the value in your code.
 *
 * For more information about tagging, see Tagging IAM identities in the
 * *IAM User Guide*.
 */
export const tagUser: API.OperationMethod<
  TagUserRequest,
  TagUserResponse,
  TagUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagUserRequest,
  output: TagUserResponse,
  errors: [
    ConcurrentModificationException,
    InvalidInputException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagUser",
}));

export type UntagInstanceProfileError =
  | ConcurrentModificationException
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Removes the specified tags from the IAM instance profile. For more information about tagging, see Tagging IAM resources in the
 * *IAM User Guide*.
 */
export const untagInstanceProfile: API.OperationMethod<
  UntagInstanceProfileRequest,
  UntagInstanceProfileResponse,
  UntagInstanceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagInstanceProfileRequest,
  output: UntagInstanceProfileResponse,
  errors: [
    ConcurrentModificationException,
    InvalidInputException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagInstanceProfile",
}));

export type UntagMFADeviceError =
  | ConcurrentModificationException
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Removes the specified tags from the IAM virtual multi-factor authentication (MFA)
 * device. For more information about tagging, see Tagging IAM resources in the
 * *IAM User Guide*.
 */
export const untagMFADevice: API.OperationMethod<
  UntagMFADeviceRequest,
  UntagMFADeviceResponse,
  UntagMFADeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagMFADeviceRequest,
  output: UntagMFADeviceResponse,
  errors: [
    ConcurrentModificationException,
    InvalidInputException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagMFADevice",
}));

export type UntagOpenIDConnectProviderError =
  | ConcurrentModificationException
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Removes the specified tags from the specified OpenID Connect (OIDC)-compatible identity
 * provider in IAM. For more information about OIDC providers, see About web identity federation.
 * For more information about tagging, see Tagging IAM resources in the
 * *IAM User Guide*.
 */
export const untagOpenIDConnectProvider: API.OperationMethod<
  UntagOpenIDConnectProviderRequest,
  UntagOpenIDConnectProviderResponse,
  UntagOpenIDConnectProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagOpenIDConnectProviderRequest,
  output: UntagOpenIDConnectProviderResponse,
  errors: [
    ConcurrentModificationException,
    InvalidInputException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagOpenIDConnectProvider",
}));

export type UntagPolicyError =
  | ConcurrentModificationException
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Removes the specified tags from the customer managed policy. For more information about tagging, see Tagging IAM resources in the
 * *IAM User Guide*.
 */
export const untagPolicy: API.OperationMethod<
  UntagPolicyRequest,
  UntagPolicyResponse,
  UntagPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagPolicyRequest,
  output: UntagPolicyResponse,
  errors: [
    ConcurrentModificationException,
    InvalidInputException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagPolicy",
}));

export type UntagRoleError =
  | ConcurrentModificationException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Removes the specified tags from the role. For more information about tagging, see Tagging IAM resources in the
 * *IAM User Guide*.
 */
export const untagRole: API.OperationMethod<
  UntagRoleRequest,
  UntagRoleResponse,
  UntagRoleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagRoleRequest,
  output: UntagRoleResponse,
  errors: [ConcurrentModificationException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagRole",
}));

export type UntagSAMLProviderError =
  | ConcurrentModificationException
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Removes the specified tags from the specified Security Assertion Markup Language (SAML)
 * identity provider in IAM. For more information about these providers, see About web identity
 * federation. For more information about tagging, see Tagging IAM resources in the
 * *IAM User Guide*.
 */
export const untagSAMLProvider: API.OperationMethod<
  UntagSAMLProviderRequest,
  UntagSAMLProviderResponse,
  UntagSAMLProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagSAMLProviderRequest,
  output: UntagSAMLProviderResponse,
  errors: [
    ConcurrentModificationException,
    InvalidInputException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagSAMLProvider",
}));

export type UntagServerCertificateError =
  | ConcurrentModificationException
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Removes the specified tags from the IAM server certificate.
 * For more information about tagging, see Tagging IAM resources in the
 * *IAM User Guide*.
 *
 * For certificates in a Region supported by Certificate Manager (ACM), we
 * recommend that you don't use IAM server certificates. Instead, use ACM to provision,
 * manage, and deploy your server certificates. For more information about IAM server
 * certificates, Working with server
 * certificates in the *IAM User Guide*.
 */
export const untagServerCertificate: API.OperationMethod<
  UntagServerCertificateRequest,
  UntagServerCertificateResponse,
  UntagServerCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagServerCertificateRequest,
  output: UntagServerCertificateResponse,
  errors: [
    ConcurrentModificationException,
    InvalidInputException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagServerCertificate",
}));

export type UntagUserError =
  | ConcurrentModificationException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Removes the specified tags from the user. For more information about tagging, see Tagging IAM resources in the
 * *IAM User Guide*.
 */
export const untagUser: API.OperationMethod<
  UntagUserRequest,
  UntagUserResponse,
  UntagUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagUserRequest,
  output: UntagUserResponse,
  errors: [ConcurrentModificationException, NoSuchEntityException, ServiceFailureException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagUser",
}));

export type UpdateAccessKeyError =
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Changes the status of the specified access key from Active to Inactive, or vice versa.
 * This operation can be used to disable a user's key as part of a key rotation
 * workflow.
 *
 * If the `UserName` is not specified, the user name is determined implicitly
 * based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is
 * used, then `UserName` is required. If a long-term key is assigned to the
 * user, then `UserName` is not required. This operation works for access keys
 * under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user
 * credentials even if the Amazon Web Services account has no associated users.
 *
 * For information about rotating keys, see Managing keys and certificates
 * in the *IAM User Guide*.
 */
export const updateAccessKey: API.OperationMethod<
  UpdateAccessKeyRequest,
  UpdateAccessKeyResponse,
  UpdateAccessKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAccessKeyRequest,
  output: UpdateAccessKeyResponse,
  errors: [
    InvalidInputException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAccessKey",
}));

export type UpdateAccountPasswordPolicyError =
  | LimitExceededException
  | MalformedPolicyDocumentException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Updates the password policy settings for the Amazon Web Services account.
 *
 * This operation does not support partial updates. No parameters are required, but
 * if you do not specify a parameter, that parameter's value reverts to its default
 * value. See the **Request Parameters** section for each
 * parameter's default value. Also note that some parameters do not allow the default
 * parameter to be explicitly set. Instead, to invoke the default value, do not include
 * that parameter when you invoke the operation.
 *
 * For more information about using a password policy, see Managing an IAM password
 * policy in the *IAM User Guide*.
 */
export const updateAccountPasswordPolicy: API.OperationMethod<
  UpdateAccountPasswordPolicyRequest,
  UpdateAccountPasswordPolicyResponse,
  UpdateAccountPasswordPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAccountPasswordPolicyRequest,
  output: UpdateAccountPasswordPolicyResponse,
  errors: [
    LimitExceededException,
    MalformedPolicyDocumentException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAccountPasswordPolicy",
}));

export type UpdateAssumeRolePolicyError =
  | LimitExceededException
  | MalformedPolicyDocumentException
  | NoSuchEntityException
  | ServiceFailureException
  | UnmodifiableEntityException
  | CommonErrors;
/**
 * Updates the policy that grants an IAM entity permission to assume a role. This is
 * typically referred to as the "role trust policy". For more information about roles, see
 * Using roles to
 * delegate permissions and federate identities.
 */
export const updateAssumeRolePolicy: API.OperationMethod<
  UpdateAssumeRolePolicyRequest,
  UpdateAssumeRolePolicyResponse,
  UpdateAssumeRolePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAssumeRolePolicyRequest,
  output: UpdateAssumeRolePolicyResponse,
  errors: [
    LimitExceededException,
    MalformedPolicyDocumentException,
    NoSuchEntityException,
    ServiceFailureException,
    UnmodifiableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAssumeRolePolicy",
}));

export type UpdateDelegationRequestError =
  | ConcurrentModificationException
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Updates an existing delegation request with additional information. When the delegation
 * request is updated, it reaches the `PENDING_APPROVAL` state.
 *
 * Once a delegation request has an owner, that owner gets a default permission to update the
 * delegation request. For more details, see
 *
 * Managing Permissions for Delegation Requests.
 */
export const updateDelegationRequest: API.OperationMethod<
  UpdateDelegationRequestRequest,
  UpdateDelegationRequestResponse,
  UpdateDelegationRequestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDelegationRequestRequest,
  output: UpdateDelegationRequestResponse,
  errors: [
    ConcurrentModificationException,
    InvalidInputException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDelegationRequest",
}));

export type UpdateGroupError =
  | EntityAlreadyExistsException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Updates the name and/or the path of the specified IAM group.
 *
 * You should understand the implications of changing a group's path or name. For
 * more information, see Renaming users and
 * groups in the *IAM User Guide*.
 *
 * The person making the request (the principal), must have permission to change the
 * role group with the old name and the new name. For example, to change the group
 * named `Managers` to `MGRs`, the principal must have a policy
 * that allows them to update both groups. If the principal has permission to update
 * the `Managers` group, but not the `MGRs` group, then the
 * update fails. For more information about permissions, see Access management.
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
    EntityAlreadyExistsException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateGroup",
}));

export type UpdateLoginProfileError =
  | EntityTemporarilyUnmodifiableException
  | LimitExceededException
  | NoSuchEntityException
  | PasswordPolicyViolationException
  | ServiceFailureException
  | CommonErrors;
/**
 * Changes the password for the specified IAM user. You can use the CLI, the Amazon Web Services
 * API, or the **Users** page in the IAM console to change
 * the password for any IAM user. Use ChangePassword to
 * change your own password in the **My Security Credentials**
 * page in the Amazon Web Services Management Console.
 *
 * For more information about modifying passwords, see Managing passwords in the
 * *IAM User Guide*.
 */
export const updateLoginProfile: API.OperationMethod<
  UpdateLoginProfileRequest,
  UpdateLoginProfileResponse,
  UpdateLoginProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLoginProfileRequest,
  output: UpdateLoginProfileResponse,
  errors: [
    EntityTemporarilyUnmodifiableException,
    LimitExceededException,
    NoSuchEntityException,
    PasswordPolicyViolationException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLoginProfile",
}));

export type UpdateOpenIDConnectProviderThumbprintError =
  | ConcurrentModificationException
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Replaces the existing list of server certificate thumbprints associated with an OpenID
 * Connect (OIDC) provider resource object with a new list of thumbprints.
 *
 * The list that you pass with this operation completely replaces the existing list of
 * thumbprints. (The lists are not merged.)
 *
 * Typically, you need to update a thumbprint only when the identity provider certificate
 * changes, which occurs rarely. However, if the provider's certificate
 * *does* change, any attempt to assume an IAM role that specifies
 * the OIDC provider as a principal fails until the certificate thumbprint is
 * updated.
 *
 * Amazon Web Services secures communication with OIDC identity providers (IdPs) using our library of
 * trusted root certificate authorities (CAs) to verify the JSON Web Key Set (JWKS)
 * endpoint's TLS certificate. If your OIDC IdP relies on a certificate that is not signed
 * by one of these trusted CAs, only then we secure communication using the thumbprints set
 * in the IdP's configuration.
 *
 * Trust for the OIDC provider is derived from the provider certificate and is
 * validated by the thumbprint. Therefore, it is best to limit access to the
 * `UpdateOpenIDConnectProviderThumbprint` operation to highly
 * privileged users.
 */
export const updateOpenIDConnectProviderThumbprint: API.OperationMethod<
  UpdateOpenIDConnectProviderThumbprintRequest,
  UpdateOpenIDConnectProviderThumbprintResponse,
  UpdateOpenIDConnectProviderThumbprintError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateOpenIDConnectProviderThumbprintRequest,
  output: UpdateOpenIDConnectProviderThumbprintResponse,
  errors: [
    ConcurrentModificationException,
    InvalidInputException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateOpenIDConnectProviderThumbprint",
}));

export type UpdateRoleError =
  | NoSuchEntityException
  | ServiceFailureException
  | UnmodifiableEntityException
  | CommonErrors;
/**
 * Updates the description or maximum session duration setting of a role.
 */
export const updateRole: API.OperationMethod<
  UpdateRoleRequest,
  UpdateRoleResponse,
  UpdateRoleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateRoleRequest,
  output: UpdateRoleResponse,
  errors: [NoSuchEntityException, ServiceFailureException, UnmodifiableEntityException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRole",
}));

export type UpdateRoleDescriptionError =
  | NoSuchEntityException
  | ServiceFailureException
  | UnmodifiableEntityException
  | CommonErrors;
/**
 * Use UpdateRole instead.
 *
 * Modifies only the description of a role. This operation performs the same function as
 * the `Description` parameter in the `UpdateRole` operation.
 */
export const updateRoleDescription: API.OperationMethod<
  UpdateRoleDescriptionRequest,
  UpdateRoleDescriptionResponse,
  UpdateRoleDescriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateRoleDescriptionRequest,
  output: UpdateRoleDescriptionResponse,
  errors: [NoSuchEntityException, ServiceFailureException, UnmodifiableEntityException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRoleDescription",
}));

export type UpdateSAMLProviderError =
  | ConcurrentModificationException
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Updates the metadata document, SAML encryption settings, and private keys for an
 * existing SAML provider. To rotate private keys, add your new private key and then remove
 * the old key in a separate request.
 */
export const updateSAMLProvider: API.OperationMethod<
  UpdateSAMLProviderRequest,
  UpdateSAMLProviderResponse,
  UpdateSAMLProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSAMLProviderRequest,
  output: UpdateSAMLProviderResponse,
  errors: [
    ConcurrentModificationException,
    InvalidInputException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSAMLProvider",
}));

export type UpdateServerCertificateError =
  | EntityAlreadyExistsException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Updates the name and/or the path of the specified server certificate stored in
 * IAM.
 *
 * For more information about working with server certificates, see Working
 * with server certificates in the *IAM User Guide*. This
 * topic also includes a list of Amazon Web Services services that can use the server certificates that
 * you manage with IAM.
 *
 * You should understand the implications of changing a server certificate's path or
 * name. For more information, see Renaming a server certificate in the
 * *IAM User Guide*.
 *
 * The person making the request (the principal), must have permission to change the
 * server certificate with the old name and the new name. For example, to change the
 * certificate named `ProductionCert` to `ProdCert`, the
 * principal must have a policy that allows them to update both certificates. If the
 * principal has permission to update the `ProductionCert` group, but not
 * the `ProdCert` certificate, then the update fails. For more information
 * about permissions, see Access management in the *IAM User Guide*.
 */
export const updateServerCertificate: API.OperationMethod<
  UpdateServerCertificateRequest,
  UpdateServerCertificateResponse,
  UpdateServerCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateServerCertificateRequest,
  output: UpdateServerCertificateResponse,
  errors: [
    EntityAlreadyExistsException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateServerCertificate",
}));

export type UpdateServiceSpecificCredentialError = NoSuchEntityException | CommonErrors;
/**
 * Sets the status of a service-specific credential to `Active` or
 * `Inactive`. Service-specific credentials that are inactive cannot be used
 * for authentication to the service. This operation can be used to disable a user's
 * service-specific credential as part of a credential rotation work flow.
 */
export const updateServiceSpecificCredential: API.OperationMethod<
  UpdateServiceSpecificCredentialRequest,
  UpdateServiceSpecificCredentialResponse,
  UpdateServiceSpecificCredentialError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateServiceSpecificCredentialRequest,
  output: UpdateServiceSpecificCredentialResponse,
  errors: [NoSuchEntityException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateServiceSpecificCredential",
}));

export type UpdateSigningCertificateError =
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Changes the status of the specified user signing certificate from active to disabled,
 * or vice versa. This operation can be used to disable an IAM user's signing
 * certificate as part of a certificate rotation work flow.
 *
 * If the `UserName` field is not specified, the user name is determined
 * implicitly based on the Amazon Web Services access key ID used to sign the request. This operation
 * works for access keys under the Amazon Web Services account. Consequently, you can use this operation
 * to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated
 * users.
 */
export const updateSigningCertificate: API.OperationMethod<
  UpdateSigningCertificateRequest,
  UpdateSigningCertificateResponse,
  UpdateSigningCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSigningCertificateRequest,
  output: UpdateSigningCertificateResponse,
  errors: [
    InvalidInputException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSigningCertificate",
}));

export type UpdateSSHPublicKeyError = InvalidInputException | NoSuchEntityException | CommonErrors;
/**
 * Sets the status of an IAM user's SSH public key to active or inactive. SSH public
 * keys that are inactive cannot be used for authentication. This operation can be used to
 * disable a user's SSH public key as part of a key rotation work flow.
 *
 * The SSH public key affected by this operation is used only for authenticating the
 * associated IAM user to an CodeCommit repository. For more information about using SSH keys
 * to authenticate to an CodeCommit repository, see Set up CodeCommit for
 * SSH connections in the *CodeCommit User Guide*.
 */
export const updateSSHPublicKey: API.OperationMethod<
  UpdateSSHPublicKeyRequest,
  UpdateSSHPublicKeyResponse,
  UpdateSSHPublicKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSSHPublicKeyRequest,
  output: UpdateSSHPublicKeyResponse,
  errors: [InvalidInputException, NoSuchEntityException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSSHPublicKey",
}));

export type UpdateUserError =
  | ConcurrentModificationException
  | EntityAlreadyExistsException
  | EntityTemporarilyUnmodifiableException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Updates the name and/or the path of the specified IAM user.
 *
 * You should understand the implications of changing an IAM user's path or
 * name. For more information, see Renaming an IAM
 * user and Renaming an IAM
 * group in the *IAM User Guide*.
 *
 * To change a user name, the requester must have appropriate permissions on both
 * the source object and the target object. For example, to change Bob to Robert, the
 * entity making the request must have permission on Bob and Robert, or must have
 * permission on all (*). For more information about permissions, see Permissions and policies.
 */
export const updateUser: API.OperationMethod<
  UpdateUserRequest,
  UpdateUserResponse,
  UpdateUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateUserRequest,
  output: UpdateUserResponse,
  errors: [
    ConcurrentModificationException,
    EntityAlreadyExistsException,
    EntityTemporarilyUnmodifiableException,
    LimitExceededException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateUser",
}));

export type UploadServerCertificateError =
  | ConcurrentModificationException
  | EntityAlreadyExistsException
  | InvalidInputException
  | KeyPairMismatchException
  | LimitExceededException
  | MalformedCertificateException
  | ServiceFailureException
  | CommonErrors;
/**
 * Uploads a server certificate entity for the Amazon Web Services account. The server certificate
 * entity includes a public key certificate, a private key, and an optional certificate
 * chain, which should all be PEM-encoded.
 *
 * We recommend that you use Certificate Manager to
 * provision, manage, and deploy your server certificates. With ACM you can request a
 * certificate, deploy it to Amazon Web Services resources, and let ACM handle certificate renewals for
 * you. Certificates provided by ACM are free. For more information about using ACM,
 * see the Certificate Manager User
 * Guide.
 *
 * For more information about working with server certificates, see Working
 * with server certificates in the *IAM User Guide*. This
 * topic includes a list of Amazon Web Services services that can use the server certificates that you
 * manage with IAM.
 *
 * For information about the number of server certificates you can upload, see IAM and STS
 * quotas in the *IAM User Guide*.
 *
 * Because the body of the public key certificate, private key, and the certificate
 * chain can be large, you should use POST rather than GET when calling
 * `UploadServerCertificate`. For information about setting up
 * signatures and authorization through the API, see Signing Amazon Web Services API
 * requests in the *Amazon Web Services General Reference*. For general
 * information about using the Query API with IAM, see Calling the API by making HTTP query
 * requests in the *IAM User Guide*.
 */
export const uploadServerCertificate: API.OperationMethod<
  UploadServerCertificateRequest,
  UploadServerCertificateResponse,
  UploadServerCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UploadServerCertificateRequest,
  output: UploadServerCertificateResponse,
  errors: [
    ConcurrentModificationException,
    EntityAlreadyExistsException,
    InvalidInputException,
    KeyPairMismatchException,
    LimitExceededException,
    MalformedCertificateException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UploadServerCertificate",
}));

export type UploadSigningCertificateError =
  | ConcurrentModificationException
  | DuplicateCertificateException
  | EntityAlreadyExistsException
  | InvalidCertificateException
  | LimitExceededException
  | MalformedCertificateException
  | NoSuchEntityException
  | ServiceFailureException
  | CommonErrors;
/**
 * Uploads an X.509 signing certificate and associates it with the specified IAM user.
 * Some Amazon Web Services services require you to use certificates to validate requests that are signed
 * with a corresponding private key. When you upload the certificate, its default status is
 * `Active`.
 *
 * For information about when you would use an X.509 signing certificate, see Managing
 * server certificates in IAM in the
 * *IAM User Guide*.
 *
 * If the `UserName` is not specified, the IAM user name is determined
 * implicitly based on the Amazon Web Services access key ID used to sign the request. This operation
 * works for access keys under the Amazon Web Services account. Consequently, you can use this operation
 * to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated
 * users.
 *
 * Because the body of an X.509 certificate can be large, you should use POST rather
 * than GET when calling `UploadSigningCertificate`. For information about
 * setting up signatures and authorization through the API, see Signing
 * Amazon Web Services API requests in the *Amazon Web Services General Reference*. For
 * general information about using the Query API with IAM, see Making query
 * requests in the *IAM User Guide*.
 */
export const uploadSigningCertificate: API.OperationMethod<
  UploadSigningCertificateRequest,
  UploadSigningCertificateResponse,
  UploadSigningCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UploadSigningCertificateRequest,
  output: UploadSigningCertificateResponse,
  errors: [
    ConcurrentModificationException,
    DuplicateCertificateException,
    EntityAlreadyExistsException,
    InvalidCertificateException,
    LimitExceededException,
    MalformedCertificateException,
    NoSuchEntityException,
    ServiceFailureException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UploadSigningCertificate",
}));

export type UploadSSHPublicKeyError =
  | DuplicateSSHPublicKeyException
  | InvalidPublicKeyException
  | LimitExceededException
  | NoSuchEntityException
  | UnrecognizedPublicKeyEncodingException
  | CommonErrors;
/**
 * Uploads an SSH public key and associates it with the specified IAM user.
 *
 * The SSH public key uploaded by this operation can be used only for authenticating the
 * associated IAM user to an CodeCommit repository. For more information about using SSH keys
 * to authenticate to an CodeCommit repository, see Set up CodeCommit for
 * SSH connections in the *CodeCommit User Guide*.
 */
export const uploadSSHPublicKey: API.OperationMethod<
  UploadSSHPublicKeyRequest,
  UploadSSHPublicKeyResponse,
  UploadSSHPublicKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UploadSSHPublicKeyRequest,
  output: UploadSSHPublicKeyResponse,
  errors: [
    DuplicateSSHPublicKeyException,
    InvalidPublicKeyException,
    LimitExceededException,
    NoSuchEntityException,
    UnrecognizedPublicKeyEncodingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UploadSSHPublicKey",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DelegationRequestId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AcceptDelegationRequestRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AcceptDelegationRequestResponse",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() => S.Struct({ Values: ReplacementValueListType })).annotate({
        identifier: "ReplacementValueEntry",
      });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ ReplacementValueEntry.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          TemplateArn: S.String,
          TemplateMinorVersion: S.optional(S.Number),
          ReplacementValues: S.optional(MapStringReplacementValueEntry),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "AcquireRoleRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PermissionsBoundaryType: S.optional(PermissionsBoundaryAttachmentType),
          PermissionsBoundaryArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AttachedPermissionsBoundary",
      });
    case 7:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(Tag);
    case 1:
      return S.suspend(() =>
        S.Struct({
          LastUsedDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Region: S.optional(S.String),
        }),
      ).annotate({ identifier: "RoleLastUsed" });
    case 2:
      return S.suspend(() =>
        S.Struct({ TemplateArn: S.String, TemplateMinorVersion: S.Number }),
      ).annotate({ identifier: "SourceRoleTemplate" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Path: S.String,
          RoleName: S.String,
          RoleId: S.String,
          Arn: S.String,
          CreateDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          AssumeRolePolicyDocument: S.optional(S.String),
          Description: S.optional(S.String),
          MaxSessionDuration: S.optional(S.Number),
          PermissionsBoundary: S.optional(AttachedPermissionsBoundary),
          Tags: S.optional(TagListType),
          RoleLastUsed: S.optional(RoleLastUsed),
          SourceRoleTemplate: S.optional(SourceRoleTemplate),
        }),
      ).annotate({ identifier: "Role" });
    case 4:
      return S.suspend(() => S.Struct({ Role: Role }).pipe(ns)).annotate({
        identifier: "AcquireRoleResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ OpenIDConnectProviderArn: S.String, ClientID: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AddClientIDToOpenIDConnectProviderRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AddClientIDToOpenIDConnectProviderResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ InstanceProfileName: S.String, RoleName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AddRoleToInstanceProfileRequest",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AddRoleToInstanceProfileResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ GroupName: S.String, UserName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AddUserToGroupRequest" });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AddUserToGroupResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DelegationRequestId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AssociateDelegationRequestRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AssociateDelegationRequestResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ GroupName: S.String, PolicyArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AttachGroupPolicyRequest" });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AttachGroupPolicyResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ RoleName: S.String, PolicyArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AttachRolePolicyRequest" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AttachRolePolicyResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ UserName: S.String, PolicyArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AttachUserPolicyRequest" });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AttachUserPolicyResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ OldPassword: SensitiveString, NewPassword: SensitiveString }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ChangePasswordRequest" });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "ChangePasswordResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ UserName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateAccessKeyRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          UserName: S.String,
          AccessKeyId: S.String,
          Status: StatusType,
          SecretAccessKey: SensitiveString,
          CreateDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "AccessKey" });
    case 7:
      return S.suspend(() => S.Struct({ AccessKey: AccessKey }).pipe(ns)).annotate({
        identifier: "CreateAccessKeyResponse",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ AccountAlias: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateAccountAliasRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CreateAccountAliasResponse",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Values: S.optional(PolicyParameterValuesListType),
          Type: S.optional(PolicyParameterTypeEnum),
        }),
      ).annotate({ identifier: "PolicyParameter" });
    case 4:
      return S.Array(PolicyParameter);
    case 5:
      return S.suspend(() =>
        S.Struct({
          PolicyTemplateArn: S.optional(S.String),
          Parameters: S.optional(PolicyParameterListType),
        }),
      ).annotate({ identifier: "DelegationPermission" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          OwnerAccountId: S.optional(S.String),
          Description: S.String,
          Permissions: DelegationPermission,
          RequestMessage: S.optional(S.String),
          RequestorWorkflowId: S.String,
          RedirectUrl: S.optional(S.String),
          NotificationChannel: S.String,
          SessionDuration: S.Number,
          OnlySendByOwner: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateDelegationRequestRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConsoleDeepLink: S.optional(S.String),
          DelegationRequestId: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "CreateDelegationRequestResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Path: S.optional(S.String), GroupName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateGroupRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Path: S.String,
          GroupName: S.String,
          GroupId: S.String,
          Arn: S.String,
          CreateDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "Group" });
    case 2:
      return S.suspend(() => S.Struct({ Group: Group }).pipe(ns)).annotate({
        identifier: "CreateGroupResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          InstanceProfileName: S.String,
          Path: S.optional(S.String),
          Tags: S.optional(TagListType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateInstanceProfileRequest",
      });
    case 4:
      return S.Array(Role);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Path: S.String,
          InstanceProfileName: S.String,
          InstanceProfileId: S.String,
          Arn: S.String,
          CreateDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          Roles: RoleListType,
          Tags: S.optional(TagListType),
        }),
      ).annotate({ identifier: "InstanceProfile" });
    case 6:
      return S.suspend(() => S.Struct({ InstanceProfile: InstanceProfile }).pipe(ns)).annotate({
        identifier: "CreateInstanceProfileResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          UserName: S.optional(S.String),
          Password: S.optional(SensitiveString),
          PasswordResetRequired: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateLoginProfileRequest",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          UserName: S.String,
          CreateDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          PasswordResetRequired: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "LoginProfile" });
    case 1:
      return S.suspend(() => S.Struct({ LoginProfile: LoginProfile }).pipe(ns)).annotate({
        identifier: "CreateLoginProfileResponse",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          Url: S.String,
          ClientIDList: S.optional(ClientIDListType),
          ThumbprintList: S.optional(ThumbprintListType),
          Tags: S.optional(TagListType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateOpenIDConnectProviderRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          OpenIDConnectProviderArn: S.optional(S.String),
          Tags: S.optional(TagListType),
        }).pipe(ns),
      ).annotate({
        identifier: "CreateOpenIDConnectProviderResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PolicyName: S.String,
          Path: S.optional(S.String),
          PolicyDocument: S.String,
          Description: S.optional(S.String),
          Tags: S.optional(TagListType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreatePolicyRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          PolicyName: S.optional(S.String),
          PolicyId: S.optional(S.String),
          Arn: S.optional(S.String),
          Path: S.optional(S.String),
          DefaultVersionId: S.optional(S.String),
          AttachmentCount: S.optional(S.Number),
          PermissionsBoundaryUsageCount: S.optional(S.Number),
          IsAttachable: S.optional(S.Boolean),
          Description: S.optional(S.String),
          CreateDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdateDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Tags: S.optional(TagListType),
        }),
      ).annotate({ identifier: "Policy" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Policy: S.optional(Policy) }).pipe(ns)).annotate({
        identifier: "CreatePolicyResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          PolicyArn: S.String,
          PolicyDocument: S.String,
          SetAsDefault: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreatePolicyVersionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Document: S.optional(S.String),
          VersionId: S.optional(S.String),
          IsDefaultVersion: S.optional(S.Boolean),
          CreateDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "PolicyVersion" });
    case 3:
      return S.suspend(() =>
        S.Struct({ PolicyVersion: S.optional(PolicyVersion) }).pipe(ns),
      ).annotate({
        identifier: "CreatePolicyVersionResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Path: S.optional(S.String),
          RoleName: S.String,
          AssumeRolePolicyDocument: S.String,
          Description: S.optional(S.String),
          MaxSessionDuration: S.optional(S.Number),
          PermissionsBoundary: S.optional(S.String),
          Tags: S.optional(TagListType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateRoleRequest" });
    case 5:
      return S.suspend(() => S.Struct({ Role: Role }).pipe(ns)).annotate({
        identifier: "CreateRoleResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SAMLMetadataDocument: S.String,
          Name: S.String,
          Tags: S.optional(TagListType),
          AssertionEncryptionMode: S.optional(AssertionEncryptionModeType),
          AddPrivateKey: S.optional(SensitiveString),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateSAMLProviderRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ SAMLProviderArn: S.optional(S.String), Tags: S.optional(TagListType) }).pipe(ns),
      ).annotate({
        identifier: "CreateSAMLProviderResponse",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AWSServiceName: S.String,
          Description: S.optional(S.String),
          CustomSuffix: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateServiceLinkedRoleRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ Role: S.optional(Role) }).pipe(ns)).annotate({
        identifier: "CreateServiceLinkedRoleResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          UserName: S.String,
          ServiceName: S.String,
          CredentialAgeDays: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateServiceSpecificCredentialRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CreateDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ExpirationDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ServiceName: S.String,
          ServiceUserName: S.optional(S.String),
          ServicePassword: S.optional(SensitiveString),
          ServiceCredentialAlias: S.optional(S.String),
          ServiceCredentialSecret: S.optional(SensitiveString),
          ServiceSpecificCredentialId: S.String,
          UserName: S.String,
          Status: StatusType,
        }),
      ).annotate({
        identifier: "ServiceSpecificCredential",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ServiceSpecificCredential: S.optional(ServiceSpecificCredential) }).pipe(ns),
      ).annotate({
        identifier: "CreateServiceSpecificCredentialResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Path: S.optional(S.String),
          UserName: S.String,
          PermissionsBoundary: S.optional(S.String),
          Tags: S.optional(TagListType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateUserRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Path: S.String,
          UserName: S.String,
          UserId: S.String,
          Arn: S.String,
          CreateDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          PasswordLastUsed: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          PermissionsBoundary: S.optional(AttachedPermissionsBoundary),
          Tags: S.optional(TagListType),
        }),
      ).annotate({ identifier: "User" });
    case 7:
      return S.suspend(() => S.Struct({ User: S.optional(User) }).pipe(ns)).annotate({
        identifier: "CreateUserResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Path: S.optional(S.String),
          VirtualMFADeviceName: S.String,
          Tags: S.optional(TagListType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateVirtualMFADeviceRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SerialNumber: S.String,
          Base32StringSeed: S.optional(SensitiveBlob),
          QRCodePNG: S.optional(SensitiveBlob),
          User: S.optional(User),
          EnableDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Tags: S.optional(TagListType),
        }),
      ).annotate({ identifier: "VirtualMFADevice" });
    case 2:
      return S.suspend(() => S.Struct({ VirtualMFADevice: VirtualMFADevice }).pipe(ns)).annotate({
        identifier: "CreateVirtualMFADeviceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ UserName: S.optional(S.String), SerialNumber: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeactivateMFADeviceRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeactivateMFADeviceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ UserName: S.optional(S.String), AccessKeyId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteAccessKeyRequest" });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteAccessKeyResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ AccountAlias: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteAccountAliasRequest",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteAccountAliasResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteAccountPasswordPolicyRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteAccountPasswordPolicyResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ GroupName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteGroupRequest" });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteGroupResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ GroupName: S.String, PolicyName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteGroupPolicyRequest" });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteGroupPolicyResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ InstanceProfileName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteInstanceProfileRequest",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteInstanceProfileResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ UserName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteLoginProfileRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteLoginProfileResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ OpenIDConnectProviderArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteOpenIDConnectProviderRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteOpenIDConnectProviderResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ PolicyArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeletePolicyRequest" });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeletePolicyResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ PolicyArn: S.String, VersionId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeletePolicyVersionRequest",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeletePolicyVersionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ RoleName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteRoleRequest" });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteRoleResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ RoleName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteRolePermissionsBoundaryRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteRolePermissionsBoundaryResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ RoleName: S.String, PolicyName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteRolePolicyRequest" });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteRolePolicyResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ SAMLProviderArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteSAMLProviderRequest",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteSAMLProviderResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ServerCertificateName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteServerCertificateRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteServerCertificateResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ RoleName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteServiceLinkedRoleRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ DeletionTaskId: S.String }).pipe(ns)).annotate({
        identifier: "DeleteServiceLinkedRoleResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ UserName: S.optional(S.String), ServiceSpecificCredentialId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteServiceSpecificCredentialRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteServiceSpecificCredentialResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ UserName: S.optional(S.String), CertificateId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteSigningCertificateRequest",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteSigningCertificateResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ UserName: S.String, SSHPublicKeyId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteSSHPublicKeyRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteSSHPublicKeyResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ UserName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteUserRequest" });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteUserResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ UserName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteUserPermissionsBoundaryRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteUserPermissionsBoundaryResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ UserName: S.String, PolicyName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteUserPolicyRequest" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteUserPolicyResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ SerialNumber: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteVirtualMFADeviceRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteVirtualMFADeviceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ GroupName: S.String, PolicyArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DetachGroupPolicyRequest" });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DetachGroupPolicyResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ RoleName: S.String, PolicyArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DetachRolePolicyRequest" });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DetachRolePolicyResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ UserName: S.String, PolicyArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DetachUserPolicyRequest" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DetachUserPolicyResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisableOrganizationsRootCredentialsManagementRequest",
      });
    case 2:
      return S.Array(FeatureType);
    case 3:
      return S.suspend(() =>
        S.Struct({
          OrganizationId: S.optional(S.String),
          EnabledFeatures: S.optional(FeaturesListType),
        }).pipe(ns),
      ).annotate({
        identifier: "DisableOrganizationsRootCredentialsManagementResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisableOrganizationsRootSessionsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          OrganizationId: S.optional(S.String),
          EnabledFeatures: S.optional(FeaturesListType),
        }).pipe(ns),
      ).annotate({
        identifier: "DisableOrganizationsRootSessionsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisableOutboundWebIdentityFederationRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DisableOutboundWebIdentityFederationResponse",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          UserName: S.String,
          SerialNumber: S.String,
          AuthenticationCode1: S.String,
          AuthenticationCode2: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "EnableMFADeviceRequest" });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "EnableMFADeviceResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "EnableOrganizationsRootCredentialsManagementRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          OrganizationId: S.optional(S.String),
          EnabledFeatures: S.optional(FeaturesListType),
        }).pipe(ns),
      ).annotate({
        identifier: "EnableOrganizationsRootCredentialsManagementResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "EnableOrganizationsRootSessionsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          OrganizationId: S.optional(S.String),
          EnabledFeatures: S.optional(FeaturesListType),
        }).pipe(ns),
      ).annotate({
        identifier: "EnableOrganizationsRootSessionsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "EnableOutboundWebIdentityFederationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ IssuerIdentifier: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "EnableOutboundWebIdentityFederationResponse",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GenerateCredentialReportRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ State: S.optional(ReportStateType), Description: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({
        identifier: "GenerateCredentialReportResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ EntityPath: S.String, OrganizationsPolicyId: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GenerateOrganizationsAccessReportRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ JobId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "GenerateOrganizationsAccessReportResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          Granularity: S.optional(AccessAdvisorUsageGranularityType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GenerateServiceLastAccessedDetailsRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ JobId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "GenerateServiceLastAccessedDetailsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ AccessKeyId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetAccessKeyLastUsedRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          LastUsedDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ServiceName: S.String,
          Region: S.String,
        }),
      ).annotate({ identifier: "AccessKeyLastUsed" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          UserName: S.optional(S.String),
          AccessKeyLastUsed: S.optional(AccessKeyLastUsed),
        }).pipe(ns),
      ).annotate({
        identifier: "GetAccessKeyLastUsedResponse",
      });
    case 1:
      return S.Array(EntityType);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Filter: S.optional(EntityListType),
          MaxItems: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetAccountAuthorizationDetailsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ PolicyName: S.optional(S.String), PolicyDocument: S.optional(S.String) }),
      ).annotate({ identifier: "PolicyDetail" });
    case 4:
      return S.Array(PolicyDetail);
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({ PolicyName: S.optional(S.String), PolicyArn: S.optional(S.String) }),
      ).annotate({ identifier: "AttachedPolicy" });
    case 7:
      return S.Array(AttachedPolicy);
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Path: S.optional(S.String),
          UserName: S.optional(S.String),
          UserId: S.optional(S.String),
          Arn: S.optional(S.String),
          CreateDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UserPolicyList: S.optional(PolicyDetailListType),
          GroupList: S.optional(GroupNameListType),
          AttachedManagedPolicies: S.optional(AttachedPoliciesListType),
          PermissionsBoundary: S.optional(AttachedPermissionsBoundary),
          Tags: S.optional(TagListType),
        }),
      ).annotate({ identifier: "UserDetail" });
    case 1:
      return S.Array(UserDetail);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Path: S.optional(S.String),
          GroupName: S.optional(S.String),
          GroupId: S.optional(S.String),
          Arn: S.optional(S.String),
          CreateDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          GroupPolicyList: S.optional(PolicyDetailListType),
          AttachedManagedPolicies: S.optional(AttachedPoliciesListType),
        }),
      ).annotate({ identifier: "GroupDetail" });
    case 3:
      return S.Array(GroupDetail);
    case 4:
      return S.Array(InstanceProfile);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Path: S.optional(S.String),
          RoleName: S.optional(S.String),
          RoleId: S.optional(S.String),
          Arn: S.optional(S.String),
          CreateDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          AssumeRolePolicyDocument: S.optional(S.String),
          InstanceProfileList: S.optional(InstanceProfileListType),
          RolePolicyList: S.optional(PolicyDetailListType),
          AttachedManagedPolicies: S.optional(AttachedPoliciesListType),
          PermissionsBoundary: S.optional(AttachedPermissionsBoundary),
          Tags: S.optional(TagListType),
          RoleLastUsed: S.optional(RoleLastUsed),
        }),
      ).annotate({ identifier: "RoleDetail" });
    case 6:
      return S.Array(RoleDetail);
    case 7:
      return S.Array(PolicyVersion);
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PolicyName: S.optional(S.String),
          PolicyId: S.optional(S.String),
          Arn: S.optional(S.String),
          Path: S.optional(S.String),
          DefaultVersionId: S.optional(S.String),
          AttachmentCount: S.optional(S.Number),
          PermissionsBoundaryUsageCount: S.optional(S.Number),
          IsAttachable: S.optional(S.Boolean),
          Description: S.optional(S.String),
          CreateDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdateDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          PolicyVersionList: S.optional(PolicyDocumentVersionListType),
        }),
      ).annotate({ identifier: "ManagedPolicyDetail" });
    case 1:
      return S.Array(ManagedPolicyDetail);
    case 2:
      return S.suspend(() =>
        S.Struct({
          UserDetailList: S.optional(UserDetailListType),
          GroupDetailList: S.optional(GroupDetailListType),
          RoleDetailList: S.optional(RoleDetailListType),
          Policies: S.optional(ManagedPolicyDetailListType),
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "GetAccountAuthorizationDetailsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetAccountPasswordPolicyRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          MinimumPasswordLength: S.optional(S.Number),
          RequireSymbols: S.optional(S.Boolean),
          RequireNumbers: S.optional(S.Boolean),
          RequireUppercaseCharacters: S.optional(S.Boolean),
          RequireLowercaseCharacters: S.optional(S.Boolean),
          AllowUsersToChangePassword: S.optional(S.Boolean),
          ExpirePasswords: S.optional(S.Boolean),
          MaxPasswordAge: S.optional(S.Number),
          PasswordReusePrevention: S.optional(S.Number),
          HardExpiry: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "PasswordPolicy" });
    case 5:
      return S.suspend(() => S.Struct({ PasswordPolicy: PasswordPolicy }).pipe(ns)).annotate({
        identifier: "GetAccountPasswordPolicyResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetAccountPropertiesRequest",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Properties: S.optional(AccountPropertiesMapType) }).pipe(ns),
      ).annotate({
        identifier: "GetAccountPropertiesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetAccountSummaryRequest" });
    case 2:
      return S.Record(SummaryKeyType, /*@__PURE__*/ S.Number.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({ SummaryMap: S.optional(SummaryMapType) }).pipe(ns),
      ).annotate({
        identifier: "GetAccountSummaryResponse",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({ PolicyInputList: SimulationPolicyListType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetContextKeysForCustomPolicyRequest",
      });
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({ ContextKeyNames: S.optional(ContextKeyNamesResultListType) }).pipe(ns),
      ).annotate({
        identifier: "GetContextKeysForPolicyResponse",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PolicySourceArn: S.String,
          PolicyInputList: S.optional(SimulationPolicyListType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetContextKeysForPrincipalPolicyRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetCredentialReportRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Content: S.optional(T.Blob),
          ReportFormat: S.optional(ReportFormatType),
          GeneratedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }).pipe(ns),
      ).annotate({
        identifier: "GetCredentialReportResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DelegationRequestId: S.String,
          DelegationPermissionCheck: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetDelegationRequestRequest",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          DelegationRequestId: S.optional(S.String),
          OwnerAccountId: S.optional(S.String),
          Description: S.optional(S.String),
          RequestMessage: S.optional(S.String),
          Permissions: S.optional(DelegationPermission),
          PermissionPolicy: S.optional(S.String),
          RolePermissionRestrictionArns: S.optional(RolePermissionRestrictionArnListType),
          OwnerId: S.optional(S.String),
          ApproverId: S.optional(S.String),
          State: S.optional(StateType),
          ExpirationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          RequestorId: S.optional(S.String),
          RequestorName: S.optional(S.String),
          CreateDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          SessionDuration: S.optional(S.Number),
          RedirectUrl: S.optional(S.String),
          Notes: S.optional(S.String),
          RejectionReason: S.optional(S.String),
          OnlySendByOwner: S.optional(S.Boolean),
          UpdatedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "DelegationRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DelegationRequest: S.optional(DelegationRequest),
          PermissionCheckStatus: S.optional(PermissionCheckStatusType),
          PermissionCheckResult: S.optional(PermissionCheckResultType),
        }).pipe(ns),
      ).annotate({
        identifier: "GetDelegationRequestResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          GroupName: S.String,
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetGroupRequest" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.Array(User);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Group: Group,
          Users: UserListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "GetGroupResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ GroupName: S.String, PolicyName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetGroupPolicyRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ GroupName: S.String, PolicyName: S.String, PolicyDocument: S.String }).pipe(ns),
      ).annotate({ identifier: "GetGroupPolicyResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ EntityArn: S.String, Locale: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetHumanReadableSummaryRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SummaryContent: S.optional(S.String),
          Locale: S.optional(S.String),
          SummaryState: S.optional(SummaryStateType),
        }).pipe(ns),
      ).annotate({
        identifier: "GetHumanReadableSummaryResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ InstanceProfileName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetInstanceProfileRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ InstanceProfile: InstanceProfile }).pipe(ns)).annotate({
        identifier: "GetInstanceProfileResponse",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ UserName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetLoginProfileRequest" });
    case 1:
      return S.suspend(() => S.Struct({ LoginProfile: LoginProfile }).pipe(ns)).annotate({
        identifier: "GetLoginProfileResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ SerialNumber: S.String, UserName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetMFADeviceRequest" });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          UserName: S.optional(S.String),
          SerialNumber: S.String,
          EnableDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Certifications: S.optional(CertificationMapType),
        }).pipe(ns),
      ).annotate({ identifier: "GetMFADeviceResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ OpenIDConnectProviderArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetOpenIDConnectProviderRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Url: S.optional(S.String),
          ClientIDList: S.optional(ClientIDListType),
          ThumbprintList: S.optional(ThumbprintListType),
          CreateDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Tags: S.optional(TagListType),
        }).pipe(ns),
      ).annotate({
        identifier: "GetOpenIDConnectProviderResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          JobId: S.String,
          MaxItems: S.optional(S.Number),
          Marker: S.optional(S.String),
          SortKey: S.optional(SortKeyType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetOrganizationsAccessReportRequest",
      });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ServiceName: S.String,
          ServiceNamespace: S.String,
          Region: S.optional(S.String),
          EntityPath: S.optional(S.String),
          LastAuthenticatedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          TotalAuthenticatedEntities: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AccessDetail" });
    case 1:
      return S.Array(AccessDetail);
    case 2:
      return S.suspend(() => S.Struct({ Message: S.String, Code: S.String })).annotate({
        identifier: "ErrorDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          JobStatus: JobStatusType,
          JobCreationDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          JobCompletionDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          NumberOfServicesAccessible: S.optional(S.Number),
          NumberOfServicesNotAccessed: S.optional(S.Number),
          AccessDetails: S.optional(AccessDetails),
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
          ErrorDetails: S.optional(ErrorDetails),
        }).pipe(ns),
      ).annotate({
        identifier: "GetOrganizationsAccessReportResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetOutboundWebIdentityFederationInfoRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          IssuerIdentifier: S.optional(S.String),
          JwtVendingEnabled: S.optional(S.Boolean),
        }).pipe(ns),
      ).annotate({
        identifier: "GetOutboundWebIdentityFederationInfoResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ PolicyArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetPolicyRequest" });
    case 7:
      return S.suspend(() => S.Struct({ Policy: S.optional(Policy) }).pipe(ns)).annotate({
        identifier: "GetPolicyResponse",
      });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ PolicyArn: S.String, VersionId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetPolicyVersionRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ PolicyVersion: S.optional(PolicyVersion) }).pipe(ns),
      ).annotate({ identifier: "GetPolicyVersionResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ RoleName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetRoleRequest" });
    case 3:
      return S.suspend(() => S.Struct({ Role: Role }).pipe(ns)).annotate({
        identifier: "GetRoleResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ RoleName: S.String, PolicyName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetRolePolicyRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ RoleName: S.String, PolicyName: S.String, PolicyDocument: S.String }).pipe(ns),
      ).annotate({ identifier: "GetRolePolicyResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ TemplateArn: S.String, MinorVersion: S.optional(S.Number) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetRoleTemplateVersionRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ PolicyName: S.String, PolicyDocument: S.String })).annotate(
        { identifier: "InlinePolicy" },
      );
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.Array(InlinePolicy);
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Type: ParameterTypeType,
          SubType: S.optional(S.String),
          Description: S.optional(S.String),
          IsRequired: S.optional(S.Boolean),
          DefaultValue: S.optional(S.String),
          Immutable: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ParameterDefinition" });
    case 3:
      return S.Array(ParameterDefinition);
    case 4:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "TagTemplate",
      });
    case 5:
      return S.Array(TagTemplate);
    case 6:
      return S.suspend(() =>
        S.Struct({
          TemplateArn: S.optional(S.String),
          TemplateName: S.optional(S.String),
          TemplateVersionId: S.optional(S.String),
          Description: S.optional(S.String),
          MajorVersion: S.optional(S.Number),
          DefaultMinorVersion: S.optional(S.Number),
          ManagedByType: S.optional(ManagedByTypeType),
          ManagedByValue: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
          MinorVersion: S.optional(S.Number),
          RoleNamePattern: S.optional(S.String),
          RolePathPattern: S.optional(S.String),
          RoleDescriptionPattern: S.optional(S.String),
          AssumeRolePolicyDocumentTemplate: S.optional(S.String),
          InlinePolicyTemplates: S.optional(InlinePolicyTemplateListType),
          ManagedPolicyArns: S.optional(ManagedPolicyArnListType),
          PermissionBoundaryArn: S.optional(S.String),
          ParametersDefinition: S.optional(ParametersDefinitionListType),
          RoleTagsTemplate: S.optional(TagTemplateListType),
          MaxSessionDuration: S.optional(S.Number),
          VersionEnabled: S.optional(S.Boolean),
          CreateTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdateTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "RoleTemplateVersion" });
    case 7:
      return S.suspend(() =>
        S.Struct({ RoleTemplateVersion: RoleTemplateVersion }).pipe(ns),
      ).annotate({
        identifier: "GetRoleTemplateVersionResponse",
      });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ SAMLProviderArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetSAMLProviderRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          KeyId: S.optional(S.String),
          Timestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "SAMLPrivateKey" });
    case 2:
      return S.Array(SAMLPrivateKey);
    case 3:
      return S.suspend(() =>
        S.Struct({
          SAMLProviderUUID: S.optional(S.String),
          SAMLMetadataDocument: S.optional(S.String),
          CreateDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ValidUntil: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Tags: S.optional(TagListType),
          AssertionEncryptionMode: S.optional(AssertionEncryptionModeType),
          PrivateKeyList: S.optional(PrivateKeyList),
        }).pipe(ns),
      ).annotate({ identifier: "GetSAMLProviderResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ServerCertificateName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetServerCertificateRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Path: S.String,
          ServerCertificateName: S.String,
          ServerCertificateId: S.String,
          Arn: S.String,
          UploadDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Expiration: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "ServerCertificateMetadata",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ServerCertificateMetadata: ServerCertificateMetadata,
          CertificateBody: S.String,
          CertificateChain: S.optional(S.String),
          Tags: S.optional(TagListType),
        }),
      ).annotate({ identifier: "ServerCertificate" });
    case 7:
      return S.suspend(() => S.Struct({ ServerCertificate: ServerCertificate }).pipe(ns)).annotate({
        identifier: "GetServerCertificateResponse",
      });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          JobId: S.String,
          MaxItems: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetServiceLastAccessedDetailsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ActionName: S.optional(S.String),
          LastAccessedEntity: S.optional(S.String),
          LastAccessedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          LastAccessedRegion: S.optional(S.String),
        }),
      ).annotate({
        identifier: "TrackedActionLastAccessed",
      });
    case 2:
      return S.Array(TrackedActionLastAccessed);
    case 3:
      return S.suspend(() =>
        S.Struct({
          ServiceName: S.String,
          LastAuthenticated: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ServiceNamespace: S.String,
          LastAuthenticatedEntity: S.optional(S.String),
          LastAuthenticatedRegion: S.optional(S.String),
          TotalAuthenticatedEntities: S.optional(S.Number),
          TrackedActionsLastAccessed: S.optional(TrackedActionsLastAccessed),
        }),
      ).annotate({ identifier: "ServiceLastAccessed" });
    case 4:
      return S.Array(ServiceLastAccessed);
    case 5:
      return S.suspend(() =>
        S.Struct({
          JobStatus: JobStatusType,
          JobType: S.optional(AccessAdvisorUsageGranularityType),
          JobCreationDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ServicesLastAccessed: ServicesLastAccessed,
          JobCompletionDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
          Error: S.optional(ErrorDetails),
        }).pipe(ns),
      ).annotate({
        identifier: "GetServiceLastAccessedDetailsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          JobId: S.String,
          ServiceNamespace: S.String,
          MaxItems: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetServiceLastAccessedDetailsWithEntitiesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Arn: S.String,
          Name: S.String,
          Type: PolicyOwnerEntityType,
          Id: S.String,
          Path: S.optional(S.String),
        }),
      ).annotate({ identifier: "EntityInfo" });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          EntityInfo: EntityInfo,
          LastAuthenticated: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "EntityDetails" });
    case 1:
      return S.Array(EntityDetails);
    case 2:
      return S.suspend(() =>
        S.Struct({
          JobStatus: JobStatusType,
          JobCreationDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          JobCompletionDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          EntityDetailsList: EntityDetailsListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
          Error: S.optional(ErrorDetails),
        }).pipe(ns),
      ).annotate({
        identifier: "GetServiceLastAccessedDetailsWithEntitiesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DeletionTaskId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetServiceLinkedRoleDeletionStatusRequest",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({ Region: S.optional(S.String), Resources: S.optional(ArnListType) }),
      ).annotate({ identifier: "RoleUsageType" });
    case 6:
      return S.Array(RoleUsageType);
    case 7:
      return S.suspend(() =>
        S.Struct({ Reason: S.optional(S.String), RoleUsageList: S.optional(RoleUsageListType) }),
      ).annotate({
        identifier: "DeletionTaskFailureReasonType",
      });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Status: DeletionTaskStatusType,
          Reason: S.optional(DeletionTaskFailureReasonType),
        }).pipe(ns),
      ).annotate({
        identifier: "GetServiceLinkedRoleDeletionStatusResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ UserName: S.String, SSHPublicKeyId: S.String, Encoding: EncodingType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetSSHPublicKeyRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          UserName: S.String,
          SSHPublicKeyId: S.String,
          Fingerprint: S.String,
          SSHPublicKeyBody: S.String,
          Status: StatusType,
          UploadDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "SSHPublicKey" });
    case 3:
      return S.suspend(() =>
        S.Struct({ SSHPublicKey: S.optional(SSHPublicKey) }).pipe(ns),
      ).annotate({ identifier: "GetSSHPublicKeyResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ UserName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetUserRequest" });
    case 5:
      return S.suspend(() => S.Struct({ User: User }).pipe(ns)).annotate({
        identifier: "GetUserResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ UserName: S.String, PolicyName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetUserPolicyRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ UserName: S.String, PolicyName: S.String, PolicyDocument: S.String }).pipe(ns),
      ).annotate({ identifier: "GetUserPolicyResponse" });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          UserName: S.optional(S.String),
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListAccessKeysRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          UserName: S.optional(S.String),
          AccessKeyId: S.optional(S.String),
          Status: S.optional(StatusType),
          CreateDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "AccessKeyMetadata" });
    case 2:
      return S.Array(AccessKeyMetadata);
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccessKeyMetadata: AccessKeyMetadataListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListAccessKeysResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Marker: S.optional(S.String), MaxItems: S.optional(S.Number) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListAccountAliasesRequest",
      });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccountAliases: AccountAliasListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListAccountAliasesResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          GroupName: S.String,
          PathPrefix: S.optional(S.String),
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAttachedGroupPoliciesRequest",
      });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AttachedPolicies: S.optional(AttachedPoliciesListType),
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListAttachedGroupPoliciesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          RoleName: S.String,
          PathPrefix: S.optional(S.String),
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAttachedRolePoliciesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AttachedPolicies: S.optional(AttachedPoliciesListType),
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListAttachedRolePoliciesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          UserName: S.String,
          PathPrefix: S.optional(S.String),
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAttachedUserPoliciesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AttachedPolicies: S.optional(AttachedPoliciesListType),
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListAttachedUserPoliciesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          OwnerId: S.optional(S.String),
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListDelegationRequestsRequest",
      });
    case 6:
      return S.Array(DelegationRequest);
    case 7:
      return S.suspend(() =>
        S.Struct({
          DelegationRequests: S.optional(DelegationRequestsListType),
          Marker: S.optional(S.String),
          isTruncated: S.optional(S.Boolean),
        }).pipe(ns),
      ).annotate({
        identifier: "ListDelegationRequestsResponse",
      });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PolicyArn: S.String,
          EntityFilter: S.optional(EntityType),
          PathPrefix: S.optional(S.String),
          PolicyUsageFilter: S.optional(PolicyUsageType),
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListEntitiesForPolicyRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ GroupName: S.optional(S.String), GroupId: S.optional(S.String) }),
      ).annotate({ identifier: "PolicyGroup" });
    case 2:
      return S.Array(PolicyGroup);
    case 3:
      return S.suspend(() =>
        S.Struct({ UserName: S.optional(S.String), UserId: S.optional(S.String) }),
      ).annotate({ identifier: "PolicyUser" });
    case 4:
      return S.Array(PolicyUser);
    case 5:
      return S.suspend(() =>
        S.Struct({ RoleName: S.optional(S.String), RoleId: S.optional(S.String) }),
      ).annotate({ identifier: "PolicyRole" });
    case 6:
      return S.Array(PolicyRole);
    case 7:
      return S.suspend(() =>
        S.Struct({
          PolicyGroups: S.optional(PolicyGroupListType),
          PolicyUsers: S.optional(PolicyUserListType),
          PolicyRoles: S.optional(PolicyRoleListType),
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListEntitiesForPolicyResponse",
      });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          GroupName: S.String,
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListGroupPoliciesRequest" });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          PolicyNames: PolicyNameListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListGroupPoliciesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          PathPrefix: S.optional(S.String),
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListGroupsRequest" });
    case 4:
      return S.Array(Group);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Groups: GroupListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListGroupsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          UserName: S.String,
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListGroupsForUserRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Groups: GroupListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListGroupsForUserResponse",
      });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PathPrefix: S.optional(S.String),
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListInstanceProfilesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          InstanceProfiles: InstanceProfileListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListInstanceProfilesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RoleName: S.String,
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListInstanceProfilesForRoleRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          InstanceProfiles: InstanceProfileListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListInstanceProfilesForRoleResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          InstanceProfileName: S.String,
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListInstanceProfileTagsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Tags: TagListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListInstanceProfileTagsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          UserName: S.optional(S.String),
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListMFADevicesRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          UserName: S.String,
          SerialNumber: S.String,
          EnableDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "MFADevice" });
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.Array(MFADevice);
    case 1:
      return S.suspend(() =>
        S.Struct({
          MFADevices: MfaDeviceListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListMFADevicesResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SerialNumber: S.String,
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListMFADeviceTagsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Tags: TagListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListMFADeviceTagsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListOpenIDConnectProvidersRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ Arn: S.optional(S.String) })).annotate({
        identifier: "OpenIDConnectProviderListEntry",
      });
    case 6:
      return S.Array(OpenIDConnectProviderListEntry);
    case 7:
      return S.suspend(() =>
        S.Struct({ OpenIDConnectProviderList: S.optional(OpenIDConnectProviderListType) }).pipe(ns),
      ).annotate({
        identifier: "ListOpenIDConnectProvidersResponse",
      });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          OpenIDConnectProviderArn: S.String,
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListOpenIDConnectProviderTagsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Tags: TagListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListOpenIDConnectProviderTagsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListOrganizationsFeaturesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          OrganizationId: S.optional(S.String),
          EnabledFeatures: S.optional(FeaturesListType),
        }).pipe(ns),
      ).annotate({
        identifier: "ListOrganizationsFeaturesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Scope: S.optional(PolicyScopeType),
          OnlyAttached: S.optional(S.Boolean),
          PathPrefix: S.optional(S.String),
          PolicyUsageFilter: S.optional(PolicyUsageType),
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListPoliciesRequest" });
    case 5:
      return S.Array(Policy);
    case 6:
      return S.suspend(() =>
        S.Struct({
          Policies: S.optional(PolicyListType),
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListPoliciesResponse" });
    case 7:
      return S.Array(S.String);
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          Arn: S.String,
          ServiceNamespaces: ServiceNamespaceListType,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListPoliciesGrantingServiceAccessRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          PolicyName: S.String,
          PolicyType: PolicyType,
          PolicyArn: S.optional(S.String),
          EntityType: S.optional(PolicyOwnerEntityType),
          EntityName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PolicyGrantingServiceAccess",
      });
    case 2:
      return S.Array(PolicyGrantingServiceAccess);
    case 3:
      return S.suspend(() =>
        S.Struct({
          ServiceNamespace: S.optional(S.String),
          Policies: S.optional(PolicyGrantingServiceAccessListType),
        }),
      ).annotate({
        identifier: "ListPoliciesGrantingServiceAccessEntry",
      });
    case 4:
      return S.Array(ListPoliciesGrantingServiceAccessEntry);
    case 5:
      return S.suspend(() =>
        S.Struct({
          PoliciesGrantingServiceAccess: ListPolicyGrantingServiceAccessResponseListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListPoliciesGrantingServiceAccessResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PolicyArn: S.String,
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListPolicyTagsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Tags: TagListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListPolicyTagsResponse" });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PolicyArn: S.String,
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListPolicyVersionsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Versions: S.optional(PolicyDocumentVersionListType),
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListPolicyVersionsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RoleName: S.String,
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListRolePoliciesRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          PolicyNames: PolicyNameListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListRolePoliciesResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          PathPrefix: S.optional(S.String),
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListRolesRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Roles: RoleListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListRolesResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RoleName: S.String,
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListRoleTagsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Tags: TagListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListRoleTagsResponse" });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListSAMLProvidersRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          ValidUntil: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          CreateDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "SAMLProviderListEntry" });
    case 2:
      return S.Array(SAMLProviderListEntry);
    case 3:
      return S.suspend(() =>
        S.Struct({ SAMLProviderList: S.optional(SAMLProviderListType) }).pipe(ns),
      ).annotate({
        identifier: "ListSAMLProvidersResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SAMLProviderArn: S.String,
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListSAMLProviderTagsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Tags: TagListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListSAMLProviderTagsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PathPrefix: S.optional(S.String),
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListServerCertificatesRequest",
      });
    case 7:
      return S.Array(ServerCertificateMetadata);
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ServerCertificateMetadataList: ServerCertificateMetadataListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListServerCertificatesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ServerCertificateName: S.String,
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListServerCertificateTagsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Tags: TagListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListServerCertificateTagsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          UserName: S.optional(S.String),
          ServiceName: S.optional(S.String),
          AllUsers: S.optional(S.Boolean),
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListServiceSpecificCredentialsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          UserName: S.String,
          Status: StatusType,
          ServiceUserName: S.optional(S.String),
          ServiceCredentialAlias: S.optional(S.String),
          CreateDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ExpirationDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ServiceSpecificCredentialId: S.String,
          ServiceName: S.String,
        }),
      ).annotate({
        identifier: "ServiceSpecificCredentialMetadata",
      });
    case 5:
      return S.Array(ServiceSpecificCredentialMetadata);
    case 6:
      return S.suspend(() =>
        S.Struct({
          ServiceSpecificCredentials: S.optional(ServiceSpecificCredentialsListType),
          Marker: S.optional(S.String),
          IsTruncated: S.optional(S.Boolean),
        }).pipe(ns),
      ).annotate({
        identifier: "ListServiceSpecificCredentialsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          UserName: S.optional(S.String),
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListSigningCertificatesRequest",
      });
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          UserName: S.String,
          CertificateId: S.String,
          CertificateBody: S.String,
          Status: StatusType,
          UploadDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "SigningCertificate" });
    case 1:
      return S.Array(SigningCertificate);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Certificates: CertificateListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListSigningCertificatesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          UserName: S.optional(S.String),
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListSSHPublicKeysRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          UserName: S.String,
          SSHPublicKeyId: S.String,
          Status: StatusType,
          UploadDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "SSHPublicKeyMetadata" });
    case 5:
      return S.Array(SSHPublicKeyMetadata);
    case 6:
      return S.suspend(() =>
        S.Struct({
          SSHPublicKeys: S.optional(SSHPublicKeyListType),
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListSSHPublicKeysResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          UserName: S.String,
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListUserPoliciesRequest" });
  }
}
function __c45(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PolicyNames: PolicyNameListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListUserPoliciesResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          PathPrefix: S.optional(S.String),
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListUsersRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Users: UserListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListUsersResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          UserName: S.String,
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListUserTagsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Tags: TagListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListUserTagsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AssignmentStatus: S.optional(AssignmentStatusType),
          Marker: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListVirtualMFADevicesRequest",
      });
    case 6:
      return S.Array(VirtualMFADevice);
    case 7:
      return S.suspend(() =>
        S.Struct({
          VirtualMFADevices: VirtualMFADeviceListType,
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListVirtualMFADevicesResponse",
      });
  }
}
function __c46(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Properties: AccountPropertiesMapType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PutAccountPropertiesRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "PutAccountPropertiesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ GroupName: S.String, PolicyName: S.String, PolicyDocument: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutGroupPolicyRequest" });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "PutGroupPolicyResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ RoleName: S.String, PermissionsBoundary: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PutRolePermissionsBoundaryRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "PutRolePermissionsBoundaryResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ RoleName: S.String, PolicyName: S.String, PolicyDocument: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutRolePolicyRequest" });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "PutRolePolicyResponse",
      });
  }
}
function __c47(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ UserName: S.String, PermissionsBoundary: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PutUserPermissionsBoundaryRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "PutUserPermissionsBoundaryResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ UserName: S.String, PolicyName: S.String, PolicyDocument: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutUserPolicyRequest" });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "PutUserPolicyResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ DelegationRequestId: S.String, Notes: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RejectDelegationRequestRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "RejectDelegationRequestResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ OpenIDConnectProviderArn: S.String, ClientID: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RemoveClientIDFromOpenIDConnectProviderRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "RemoveClientIDFromOpenIDConnectProviderResponse",
      });
  }
}
function __c48(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ InstanceProfileName: S.String, RoleName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RemoveRoleFromInstanceProfileRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "RemoveRoleFromInstanceProfileResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ GroupName: S.String, UserName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RemoveUserFromGroupRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "RemoveUserFromGroupResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ UserName: S.optional(S.String), ServiceSpecificCredentialId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ResetServiceSpecificCredentialRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ServiceSpecificCredential: S.optional(ServiceSpecificCredential) }).pipe(ns),
      ).annotate({
        identifier: "ResetServiceSpecificCredentialResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          UserName: S.String,
          SerialNumber: S.String,
          AuthenticationCode1: S.String,
          AuthenticationCode2: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ResyncMFADeviceRequest" });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "ResyncMFADeviceResponse",
      });
  }
}
function __c49(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DelegationRequestId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SendDelegationTokenRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "SendDelegationTokenResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ PolicyArn: S.String, VersionId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SetDefaultPolicyVersionRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "SetDefaultPolicyVersionResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ GlobalEndpointTokenVersion: GlobalEndpointTokenVersion }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SetSecurityTokenServicePreferencesRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "SetSecurityTokenServicePreferencesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ServiceControlPolicyInputList: S.optional(SimulationPolicyListType) }),
      ).annotate({
        identifier: "OrderedOrganizationPolicyType",
      });
    case 7:
      return S.Array(OrderedOrganizationPolicyType);
  }
}
function __c50(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.Array(S.String);
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({
          ContextKeyName: S.optional(S.String),
          ContextKeyValues: S.optional(ContextKeyValueListType),
          ContextKeyType: S.optional(ContextKeyTypeEnum),
        }),
      ).annotate({ identifier: "ContextEntry" });
    case 4:
      return S.Array(ContextEntry);
    case 5:
      return S.suspend(() =>
        S.Struct({
          PolicyInputList: SimulationPolicyListType,
          PermissionsBoundaryPolicyInputList: S.optional(SimulationPolicyListType),
          OrderedOrganizationPolicyInputList: S.optional(OrganizationPolicyListType),
          ActionNames: ActionNameListType,
          ResourceArns: S.optional(ResourceNameListType),
          ResourcePolicy: S.optional(S.String),
          ResourceOwner: S.optional(S.String),
          CallerArn: S.optional(S.String),
          ContextEntries: S.optional(ContextEntryListType),
          ResourceHandlingOption: S.optional(S.String),
          MaxItems: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SimulateCustomPolicyRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Line: S.optional(S.Number), Column: S.optional(S.Number) }),
      ).annotate({ identifier: "Position" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          SourcePolicyId: S.optional(S.String),
          SourcePolicyType: S.optional(PolicySourceType),
          StartPosition: S.optional(Position),
          EndPosition: S.optional(Position),
        }),
      ).annotate({ identifier: "Statement" });
  }
}
function __c51(j: number): any {
  switch (j) {
    case 0:
      return S.Array(Statement);
    case 1:
      return S.suspend(() => S.Struct({ AllowedByOrganizations: S.optional(S.Boolean) })).annotate({
        identifier: "OrganizationsDecisionDetail",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ AllowedByPermissionsBoundary: S.optional(S.Boolean) }),
      ).annotate({
        identifier: "PermissionsBoundaryDecisionDetail",
      });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ PolicyEvaluationDecisionType.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          EvalResourceName: S.String,
          EvalResourceDecision: PolicyEvaluationDecisionType,
          MatchedStatements: S.optional(StatementListType),
          MissingContextValues: S.optional(ContextKeyNamesResultListType),
          EvalDecisionDetails: S.optional(EvalDecisionDetailsType),
          PermissionsBoundaryDecisionDetail: S.optional(PermissionsBoundaryDecisionDetail),
        }),
      ).annotate({ identifier: "ResourceSpecificResult" });
    case 5:
      return S.Array(ResourceSpecificResult);
    case 6:
      return S.suspend(() =>
        S.Struct({
          EvalActionName: S.String,
          EvalResourceName: S.optional(S.String),
          EvalDecision: PolicyEvaluationDecisionType,
          MatchedStatements: S.optional(StatementListType),
          MissingContextValues: S.optional(ContextKeyNamesResultListType),
          OrganizationsDecisionDetail: S.optional(OrganizationsDecisionDetail),
          PermissionsBoundaryDecisionDetail: S.optional(PermissionsBoundaryDecisionDetail),
          EvalDecisionDetails: S.optional(EvalDecisionDetailsType),
          ResourceSpecificResults: S.optional(ResourceSpecificResultListType),
        }),
      ).annotate({ identifier: "EvaluationResult" });
    case 7:
      return S.Array(EvaluationResult);
  }
}
function __c52(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          EvaluationResults: S.optional(EvaluationResultsListType),
          IsTruncated: S.optional(S.Boolean),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "SimulatePolicyResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          PolicyName: S.String,
          AttachmentType: AttachmentType,
          AttachmentName: S.String,
        }),
      ).annotate({
        identifier: "InlinePolicyIdentifierType",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ PolicyType: PolicyIdentifierPolicyType }),
        /*@__PURE__*/ S.Struct({ PolicyArn: S.String }),
        /*@__PURE__*/ S.Struct({ InlinePolicyIdentifier: InlinePolicyIdentifierType }),
      ]);
    case 3:
      return S.Array(PolicyIdentifier);
    case 4:
      return S.suspend(() =>
        S.Struct({
          PolicySourceArn: S.String,
          PolicyInputList: S.optional(SimulationPolicyListType),
          PermissionsBoundaryPolicyInputList: S.optional(SimulationPolicyListType),
          PolicyExclusionList: S.optional(PolicyExclusionsListType),
          ActionNames: ActionNameListType,
          ResourceArns: S.optional(ResourceNameListType),
          ResourcePolicy: S.optional(S.String),
          ResourceOwner: S.optional(S.String),
          CallerArn: S.optional(S.String),
          ContextEntries: S.optional(ContextEntryListType),
          ResourceHandlingOption: S.optional(S.String),
          MaxItems: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SimulatePrincipalPolicyRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ InstanceProfileName: S.String, Tags: TagListType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "TagInstanceProfileRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "TagInstanceProfileResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ SerialNumber: S.String, Tags: TagListType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagMFADeviceRequest" });
  }
}
function __c53(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "TagMFADeviceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ OpenIDConnectProviderArn: S.String, Tags: TagListType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "TagOpenIDConnectProviderRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "TagOpenIDConnectProviderResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ PolicyArn: S.String, Tags: TagListType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagPolicyRequest" });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "TagPolicyResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ RoleName: S.String, Tags: TagListType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagRoleRequest" });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "TagRoleResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ SAMLProviderArn: S.String, Tags: TagListType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagSAMLProviderRequest" });
  }
}
function __c54(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "TagSAMLProviderResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ServerCertificateName: S.String, Tags: TagListType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "TagServerCertificateRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "TagServerCertificateResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ UserName: S.String, Tags: TagListType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagUserRequest" });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "TagUserResponse",
      });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({ InstanceProfileName: S.String, TagKeys: TagKeyListType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UntagInstanceProfileRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UntagInstanceProfileResponse",
      });
  }
}
function __c55(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ SerialNumber: S.String, TagKeys: TagKeyListType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagMFADeviceRequest" });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UntagMFADeviceResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ OpenIDConnectProviderArn: S.String, TagKeys: TagKeyListType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UntagOpenIDConnectProviderRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UntagOpenIDConnectProviderResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ PolicyArn: S.String, TagKeys: TagKeyListType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagPolicyRequest" });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UntagPolicyResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ RoleName: S.String, TagKeys: TagKeyListType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagRoleRequest" });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UntagRoleResponse",
      });
  }
}
function __c56(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ SAMLProviderArn: S.String, TagKeys: TagKeyListType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagSAMLProviderRequest" });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UntagSAMLProviderResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ServerCertificateName: S.String, TagKeys: TagKeyListType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UntagServerCertificateRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UntagServerCertificateResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ UserName: S.String, TagKeys: TagKeyListType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagUserRequest" });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UntagUserResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          UserName: S.optional(S.String),
          AccessKeyId: S.String,
          Status: StatusType,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateAccessKeyRequest" });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UpdateAccessKeyResponse",
      });
  }
}
function __c57(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          MinimumPasswordLength: S.optional(S.Number),
          RequireSymbols: S.optional(S.Boolean),
          RequireNumbers: S.optional(S.Boolean),
          RequireUppercaseCharacters: S.optional(S.Boolean),
          RequireLowercaseCharacters: S.optional(S.Boolean),
          AllowUsersToChangePassword: S.optional(S.Boolean),
          MaxPasswordAge: S.optional(S.Number),
          PasswordReusePrevention: S.optional(S.Number),
          HardExpiry: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateAccountPasswordPolicyRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UpdateAccountPasswordPolicyResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ RoleName: S.String, PolicyDocument: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateAssumeRolePolicyRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UpdateAssumeRolePolicyResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ DelegationRequestId: S.String, Notes: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateDelegationRequestRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UpdateDelegationRequestResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          GroupName: S.String,
          NewPath: S.optional(S.String),
          NewGroupName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateGroupRequest" });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UpdateGroupResponse",
      });
  }
}
function __c58(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          UserName: S.String,
          Password: S.optional(SensitiveString),
          PasswordResetRequired: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateLoginProfileRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UpdateLoginProfileResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ OpenIDConnectProviderArn: S.String, ThumbprintList: ThumbprintListType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateOpenIDConnectProviderThumbprintRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UpdateOpenIDConnectProviderThumbprintResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          RoleName: S.String,
          Description: S.optional(S.String),
          MaxSessionDuration: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateRoleRequest" });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UpdateRoleResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ RoleName: S.String, Description: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateRoleDescriptionRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ Role: S.optional(Role) }).pipe(ns)).annotate({
        identifier: "UpdateRoleDescriptionResponse",
      });
  }
}
function __c59(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SAMLMetadataDocument: S.optional(S.String),
          SAMLProviderArn: S.String,
          AssertionEncryptionMode: S.optional(AssertionEncryptionModeType),
          AddPrivateKey: S.optional(SensitiveString),
          RemovePrivateKey: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateSAMLProviderRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ SAMLProviderArn: S.optional(S.String) }).pipe(ns)).annotate(
        {
          identifier: "UpdateSAMLProviderResponse",
        },
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          ServerCertificateName: S.String,
          NewPath: S.optional(S.String),
          NewServerCertificateName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateServerCertificateRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UpdateServerCertificateResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          UserName: S.optional(S.String),
          ServiceSpecificCredentialId: S.String,
          Status: StatusType,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateServiceSpecificCredentialRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UpdateServiceSpecificCredentialResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          UserName: S.optional(S.String),
          CertificateId: S.String,
          Status: StatusType,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateSigningCertificateRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UpdateSigningCertificateResponse",
      });
  }
}
function __c60(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ UserName: S.String, SSHPublicKeyId: S.String, Status: StatusType }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateSSHPublicKeyRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UpdateSSHPublicKeyResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          UserName: S.String,
          NewPath: S.optional(S.String),
          NewUserName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateUserRequest" });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UpdateUserResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Path: S.optional(S.String),
          ServerCertificateName: S.String,
          CertificateBody: S.String,
          PrivateKey: SensitiveString,
          CertificateChain: S.optional(S.String),
          Tags: S.optional(TagListType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UploadServerCertificateRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ServerCertificateMetadata: S.optional(ServerCertificateMetadata),
          Tags: S.optional(TagListType),
        }).pipe(ns),
      ).annotate({
        identifier: "UploadServerCertificateResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ UserName: S.optional(S.String), CertificateBody: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UploadSigningCertificateRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ Certificate: SigningCertificate }).pipe(ns)).annotate({
        identifier: "UploadSigningCertificateResponse",
      });
  }
}
function __c61(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ UserName: S.String, SSHPublicKeyBody: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UploadSSHPublicKeyRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ SSHPublicKey: S.optional(SSHPublicKey) }).pipe(ns),
      ).annotate({
        identifier: "UploadSSHPublicKeyResponse",
      });
  }
}
