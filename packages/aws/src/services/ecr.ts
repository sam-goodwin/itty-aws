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
const ns = /*@__PURE__*/ T.XmlNamespace("http://ecr.amazonaws.com/doc/2015-09-21/");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "ECR",
  serviceShapeName: "AmazonEC2ContainerRegistry_V20150921",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "ecr" });
const ver = /*@__PURE__*/ T.ServiceVersion("2015-09-21");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_1();
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
          return e(`https://api.ecr.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e(`https://ecr.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === true &&
          UseDualStack === false
        ) {
          return e(`https://api.ecr-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws" &&
          UseFIPS === true &&
          UseDualStack === true
        ) {
          return e(
            `https://ecr-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e(`https://api.ecr.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e(`https://ecr.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
          UseFIPS === true &&
          UseDualStack === false
        ) {
          return e(`https://api.ecr-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
          UseFIPS === true &&
          UseDualStack === true
        ) {
          return e(
            `https://ecr-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-cn" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e(`https://api.ecr.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-cn" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e(`https://ecr.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-cn" &&
          UseFIPS === true &&
          UseDualStack === false
        ) {
          return e(`https://api.ecr-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-cn" &&
          UseFIPS === true &&
          UseDualStack === true
        ) {
          return e(
            `https://ecr-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e(`https://api.ecr.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e(`https://ecr.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso" &&
          UseFIPS === true &&
          UseDualStack === false
        ) {
          return e(`https://api.ecr-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso" &&
          UseFIPS === true &&
          UseDualStack === true
        ) {
          return e(
            `https://ecr-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-b" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e(`https://api.ecr.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-b" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e(`https://ecr.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-b" &&
          UseFIPS === true &&
          UseDualStack === false
        ) {
          return e(`https://api.ecr-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-b" &&
          UseFIPS === true &&
          UseDualStack === true
        ) {
          return e(
            `https://ecr-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-e" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e(`https://api.ecr.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-e" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e(`https://ecr.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-e" &&
          UseFIPS === true &&
          UseDualStack === false
        ) {
          return e(`https://api.ecr-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-e" &&
          UseFIPS === true &&
          UseDualStack === true
        ) {
          return e(
            `https://ecr-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-f" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e(`https://api.ecr.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-f" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e(`https://ecr.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-f" &&
          UseFIPS === true &&
          UseDualStack === false
        ) {
          return e(`https://api.ecr-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-iso-f" &&
          UseFIPS === true &&
          UseDualStack === true
        ) {
          return e(
            `https://ecr-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-eusc" &&
          UseFIPS === false &&
          UseDualStack === false
        ) {
          return e(`https://api.ecr.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-eusc" &&
          UseFIPS === false &&
          UseDualStack === true
        ) {
          return e(`https://ecr.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-eusc" &&
          UseFIPS === true &&
          UseDualStack === false
        ) {
          return e(`https://api.ecr-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-eusc" &&
          UseFIPS === true &&
          UseDualStack === true
        ) {
          return e(
            `https://ecr-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://api.ecr-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true && UseDualStack === false) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://api.ecr-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseFIPS === false && UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://api.ecr.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://api.ecr.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class BlockedByOrganizationPolicyException
  extends /*@__PURE__*/ S.TaggedError<BlockedByOrganizationPolicyException>()(
    "BlockedByOrganizationPolicyException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class EmptyUploadException
  extends /*@__PURE__*/ S.TaggedError<EmptyUploadException>()("EmptyUploadException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ExclusionAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<ExclusionAlreadyExistsException>()(
    "ExclusionAlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withAlreadyExistsError) {}
export class ExclusionNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ExclusionNotFoundException>()("ExclusionNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ImageAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<ImageAlreadyExistsException>()(
    "ImageAlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withAlreadyExistsError) {}
export class ImageArchivedException
  extends /*@__PURE__*/ S.TaggedError<ImageArchivedException>()("ImageArchivedException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ImageDigestDoesNotMatchException
  extends /*@__PURE__*/ S.TaggedError<ImageDigestDoesNotMatchException>()(
    "ImageDigestDoesNotMatchException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class ImageNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ImageNotFoundException>()("ImageNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ImageStorageClassUpdateNotSupportedException
  extends /*@__PURE__*/ S.TaggedError<ImageStorageClassUpdateNotSupportedException>()(
    "ImageStorageClassUpdateNotSupportedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class ImageTagAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<ImageTagAlreadyExistsException>()(
    "ImageTagAlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withAlreadyExistsError) {}
export class InvalidLayerException
  extends /*@__PURE__*/ S.TaggedError<InvalidLayerException>()("InvalidLayerException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidLayerPartException
  extends /*@__PURE__*/ S.TaggedError<InvalidLayerPartException>()("InvalidLayerPartException", {
    registryId: /*@__PURE__*/ S.optional(S.String),
    repositoryName: /*@__PURE__*/ S.optional(S.String),
    uploadId: /*@__PURE__*/ S.optional(S.String),
    lastValidByteReceived: /*@__PURE__*/ S.optional(S.Number),
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidParameterException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterException>()("InvalidParameterException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withBadRequestError) {}
export class InvalidTagParameterException
  extends /*@__PURE__*/ S.TaggedError<InvalidTagParameterException>()(
    "InvalidTagParameterException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class KmsException
  extends /*@__PURE__*/ S.TaggedError<KmsException>()("KmsException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    kmsError: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class LayerAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<LayerAlreadyExistsException>()(
    "LayerAlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withAlreadyExistsError) {}
export class LayerInaccessibleException
  extends /*@__PURE__*/ S.TaggedError<LayerInaccessibleException>()("LayerInaccessibleException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class LayerPartTooSmallException
  extends /*@__PURE__*/ S.TaggedError<LayerPartTooSmallException>()("LayerPartTooSmallException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class LayersNotFoundException
  extends /*@__PURE__*/ S.TaggedError<LayersNotFoundException>()("LayersNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class LifecyclePolicyNotFoundException
  extends /*@__PURE__*/ S.TaggedError<LifecyclePolicyNotFoundException>()(
    "LifecyclePolicyNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withNotFoundError) {}
export class LifecyclePolicyPreviewInProgressException
  extends /*@__PURE__*/ S.TaggedError<LifecyclePolicyPreviewInProgressException>()(
    "LifecyclePolicyPreviewInProgressException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class LifecyclePolicyPreviewNotFoundException
  extends /*@__PURE__*/ S.TaggedError<LifecyclePolicyPreviewNotFoundException>()(
    "LifecyclePolicyPreviewNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()("LimitExceededException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withQuotaError) {}
export class PullThroughCacheRuleAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<PullThroughCacheRuleAlreadyExistsException>()(
    "PullThroughCacheRuleAlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withAlreadyExistsError) {}
export class PullThroughCacheRuleNotFoundException
  extends /*@__PURE__*/ S.TaggedError<PullThroughCacheRuleNotFoundException>()(
    "PullThroughCacheRuleNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class ReferencedImagesNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ReferencedImagesNotFoundException>()(
    "ReferencedImagesNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class RegistryPolicyNotFoundException
  extends /*@__PURE__*/ S.TaggedError<RegistryPolicyNotFoundException>()(
    "RegistryPolicyNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class RepositoryAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<RepositoryAlreadyExistsException>()(
    "RepositoryAlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withConflictError, C.withAlreadyExistsError) {}
export class RepositoryNotEmptyException
  extends /*@__PURE__*/ S.TaggedError<RepositoryNotEmptyException>()(
    "RepositoryNotEmptyException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withConflictError, C.withDependencyViolationError) {}
export class RepositoryNotFoundException
  extends /*@__PURE__*/ S.TaggedError<RepositoryNotFoundException>()(
    "RepositoryNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withNotFoundError) {}
export class RepositoryPolicyNotFoundException
  extends /*@__PURE__*/ S.TaggedError<RepositoryPolicyNotFoundException>()(
    "RepositoryPolicyNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withNotFoundError) {}
export class ScanNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ScanNotFoundException>()("ScanNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class SecretNotFoundException
  extends /*@__PURE__*/ S.TaggedError<SecretNotFoundException>()("SecretNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ServerException
  extends /*@__PURE__*/ S.TaggedError<ServerException>()("ServerException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withServerError, C.withRetryableError) {}
export class SigningConfigurationNotFoundException
  extends /*@__PURE__*/ S.TaggedError<SigningConfigurationNotFoundException>()(
    "SigningConfigurationNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class TemplateAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<TemplateAlreadyExistsException>()(
    "TemplateAlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withAlreadyExistsError) {}
export class TemplateNotFoundException
  extends /*@__PURE__*/ S.TaggedError<TemplateNotFoundException>()("TemplateNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class TooManyTagsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTagsException>()("TooManyTagsException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withQuotaError, C.withBadRequestError) {}
export class UnableToAccessSecretException
  extends /*@__PURE__*/ S.TaggedError<UnableToAccessSecretException>()(
    "UnableToAccessSecretException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class UnableToDecryptSecretValueException
  extends /*@__PURE__*/ S.TaggedError<UnableToDecryptSecretValueException>()(
    "UnableToDecryptSecretValueException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class UnableToGetUpstreamImageException
  extends /*@__PURE__*/ S.TaggedError<UnableToGetUpstreamImageException>()(
    "UnableToGetUpstreamImageException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class UnableToGetUpstreamLayerException
  extends /*@__PURE__*/ S.TaggedError<UnableToGetUpstreamLayerException>()(
    "UnableToGetUpstreamLayerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class UnableToListUpstreamImageReferrersException
  extends /*@__PURE__*/ S.TaggedError<UnableToListUpstreamImageReferrersException>()(
    "UnableToListUpstreamImageReferrersException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class UnsupportedImageTypeException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedImageTypeException>()(
    "UnsupportedImageTypeException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class UnsupportedUpstreamRegistryException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedUpstreamRegistryException>()(
    "UnsupportedUpstreamRegistryException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class UploadNotFoundException
  extends /*@__PURE__*/ S.TaggedError<UploadNotFoundException>()("UploadNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type RegistryId = string;
export type RepositoryName = string;
export type BatchedOperationLayerDigest = string;
export type BatchedOperationLayerDigestList = string[];
export interface BatchCheckLayerAvailabilityRequest {
  registryId?: string;
  repositoryName: string;
  layerDigests: string[];
}
export type LayerDigest = string;
export type LayerAvailability = "AVAILABLE" | "UNAVAILABLE" | "ARCHIVED" | (string & {});
export type LayerSizeInBytes = number;
export type MediaType = string;
export interface Layer {
  layerDigest?: string;
  layerAvailability?: LayerAvailability;
  layerSize?: number;
  mediaType?: string;
}
export type LayerList = Layer[];
export type LayerFailureCode = "InvalidLayerDigest" | "MissingLayerDigest" | (string & {});
export type LayerFailureReason = string;
export interface LayerFailure {
  layerDigest?: string;
  failureCode?: LayerFailureCode;
  failureReason?: string;
}
export type LayerFailureList = LayerFailure[];
export interface BatchCheckLayerAvailabilityResponse {
  layers?: Layer[];
  failures?: LayerFailure[];
}
export type ImageDigest = string;
export type ImageTag = string;
export interface ImageIdentifier {
  imageDigest?: string;
  imageTag?: string;
}
export type ImageIdentifierList = ImageIdentifier[];
export interface BatchDeleteImageRequest {
  registryId?: string;
  repositoryName: string;
  imageIds: ImageIdentifier[];
}
export type ImageFailureCode =
  | "InvalidImageDigest"
  | "InvalidImageTag"
  | "ImageTagDoesNotMatchDigest"
  | "ImageNotFound"
  | "MissingDigestAndTag"
  | "ImageReferencedByManifestList"
  | "KmsError"
  | "UpstreamAccessDenied"
  | "UpstreamTooManyRequests"
  | "UpstreamUnavailable"
  | "ImageInaccessible"
  | (string & {});
export type ImageFailureReason = string;
export interface ImageFailure {
  imageId?: ImageIdentifier;
  failureCode?: ImageFailureCode;
  failureReason?: string;
}
export type ImageFailureList = ImageFailure[];
export interface BatchDeleteImageResponse {
  imageIds?: ImageIdentifier[];
  failures?: ImageFailure[];
}
export type MediaTypeList = string[];
export interface BatchGetImageRequest {
  registryId?: string;
  repositoryName: string;
  imageIds: ImageIdentifier[];
  acceptedMediaTypes?: string[];
}
export type ImageManifest = string;
export interface Image {
  registryId?: string;
  repositoryName?: string;
  imageId?: ImageIdentifier;
  imageManifest?: string;
  imageManifestMediaType?: string;
}
export type ImageList = Image[];
export interface BatchGetImageResponse {
  images?: Image[];
  failures?: ImageFailure[];
}
export type ScanningConfigurationRepositoryNameList = string[];
export interface BatchGetRepositoryScanningConfigurationRequest {
  repositoryNames: string[];
}
export type Arn = string;
export type ScanOnPushFlag = boolean;
export type ScanFrequency = "SCAN_ON_PUSH" | "CONTINUOUS_SCAN" | "MANUAL" | (string & {});
export type ScanningRepositoryFilterValue = string;
export type ScanningRepositoryFilterType = "WILDCARD" | (string & {});
export interface ScanningRepositoryFilter {
  filter: string;
  filterType: ScanningRepositoryFilterType;
}
export type ScanningRepositoryFilterList = ScanningRepositoryFilter[];
export interface RepositoryScanningConfiguration {
  repositoryArn?: string;
  repositoryName?: string;
  scanOnPush?: boolean;
  scanFrequency?: ScanFrequency;
  appliedScanFilters?: ScanningRepositoryFilter[];
}
export type RepositoryScanningConfigurationList = RepositoryScanningConfiguration[];
export type ScanningConfigurationFailureCode = "REPOSITORY_NOT_FOUND" | (string & {});
export type ScanningConfigurationFailureReason = string;
export interface RepositoryScanningConfigurationFailure {
  repositoryName?: string;
  failureCode?: ScanningConfigurationFailureCode;
  failureReason?: string;
}
export type RepositoryScanningConfigurationFailureList = RepositoryScanningConfigurationFailure[];
export interface BatchGetRepositoryScanningConfigurationResponse {
  scanningConfigurations?: RepositoryScanningConfiguration[];
  failures?: RepositoryScanningConfigurationFailure[];
}
export type UploadId = string;
export type LayerDigestList = string[];
export interface CompleteLayerUploadRequest {
  registryId?: string;
  repositoryName: string;
  uploadId: string;
  layerDigests: string[];
}
export interface CompleteLayerUploadResponse {
  registryId?: string;
  repositoryName?: string;
  uploadId?: string;
  layerDigest?: string;
}
export type PullThroughCacheRuleRepositoryPrefix = string;
export type Url = string;
export type UpstreamRegistry =
  | "ecr"
  | "ecr-public"
  | "quay"
  | "k8s"
  | "docker-hub"
  | "github-container-registry"
  | "azure-container-registry"
  | "gitlab-container-registry"
  | "chainguard"
  | (string & {});
export type CredentialArn = string;
export type CustomRoleArn = string;
export interface CreatePullThroughCacheRuleRequest {
  ecrRepositoryPrefix: string;
  upstreamRegistryUrl: string;
  registryId?: string;
  upstreamRegistry?: UpstreamRegistry;
  credentialArn?: string;
  customRoleArn?: string;
  upstreamRepositoryPrefix?: string;
}
export type CreationTimestamp = Date;
export interface CreatePullThroughCacheRuleResponse {
  ecrRepositoryPrefix?: string;
  upstreamRegistryUrl?: string;
  createdAt?: Date;
  registryId?: string;
  upstreamRegistry?: UpstreamRegistry;
  credentialArn?: string;
  customRoleArn?: string;
  upstreamRepositoryPrefix?: string;
}
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagList = Tag[];
export type ImageTagMutability =
  | "MUTABLE"
  | "IMMUTABLE"
  | "IMMUTABLE_WITH_EXCLUSION"
  | "MUTABLE_WITH_EXCLUSION"
  | (string & {});
export type ImageTagMutabilityExclusionFilterType = "WILDCARD" | (string & {});
export type ImageTagMutabilityExclusionFilterValue = string;
export interface ImageTagMutabilityExclusionFilter {
  filterType: ImageTagMutabilityExclusionFilterType;
  filter: string;
}
export type ImageTagMutabilityExclusionFilters = ImageTagMutabilityExclusionFilter[];
export interface ImageScanningConfiguration {
  scanOnPush?: boolean;
}
export type EncryptionType = "AES256" | "KMS" | "KMS_DSSE" | (string & {});
export type KmsKey = string;
export interface EncryptionConfiguration {
  encryptionType: EncryptionType;
  kmsKey?: string;
}
export interface CreateRepositoryRequest {
  registryId?: string;
  repositoryName: string;
  tags?: Tag[];
  imageTagMutability?: ImageTagMutability;
  imageTagMutabilityExclusionFilters?: ImageTagMutabilityExclusionFilter[];
  imageScanningConfiguration?: ImageScanningConfiguration;
  encryptionConfiguration?: EncryptionConfiguration;
}
export interface Repository {
  repositoryArn?: string;
  registryId?: string;
  repositoryName?: string;
  repositoryUri?: string;
  createdAt?: Date;
  imageTagMutability?: ImageTagMutability;
  imageTagMutabilityExclusionFilters?: ImageTagMutabilityExclusionFilter[];
  imageScanningConfiguration?: ImageScanningConfiguration;
  encryptionConfiguration?: EncryptionConfiguration;
}
export interface CreateRepositoryResponse {
  repository?: Repository;
}
export type Prefix = string;
export type RepositoryTemplateDescription = string;
export type KmsKeyForRepositoryCreationTemplate = string;
export interface EncryptionConfigurationForRepositoryCreationTemplate {
  encryptionType: EncryptionType;
  kmsKey?: string;
}
export type RepositoryPolicyText = string;
export type LifecyclePolicyTextForRepositoryCreationTemplate = string;
export type RCTAppliedFor = "REPLICATION" | "PULL_THROUGH_CACHE" | "CREATE_ON_PUSH" | (string & {});
export type RCTAppliedForList = RCTAppliedFor[];
export interface CreateRepositoryCreationTemplateRequest {
  prefix: string;
  description?: string;
  encryptionConfiguration?: EncryptionConfigurationForRepositoryCreationTemplate;
  resourceTags?: Tag[];
  imageTagMutability?: ImageTagMutability;
  imageTagMutabilityExclusionFilters?: ImageTagMutabilityExclusionFilter[];
  repositoryPolicy?: string;
  lifecyclePolicy?: string;
  appliedFor: RCTAppliedFor[];
  customRoleArn?: string;
}
export interface RepositoryCreationTemplate {
  prefix?: string;
  description?: string;
  encryptionConfiguration?: EncryptionConfigurationForRepositoryCreationTemplate;
  resourceTags?: Tag[];
  imageTagMutability?: ImageTagMutability;
  imageTagMutabilityExclusionFilters?: ImageTagMutabilityExclusionFilter[];
  repositoryPolicy?: string;
  lifecyclePolicy?: string;
  appliedFor?: RCTAppliedFor[];
  customRoleArn?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface CreateRepositoryCreationTemplateResponse {
  registryId?: string;
  repositoryCreationTemplate?: RepositoryCreationTemplate;
}
export interface DeleteLifecyclePolicyRequest {
  registryId?: string;
  repositoryName: string;
}
export type LifecyclePolicyText = string;
export type EvaluationTimestamp = Date;
export interface DeleteLifecyclePolicyResponse {
  registryId?: string;
  repositoryName?: string;
  lifecyclePolicyText?: string;
  lastEvaluatedAt?: Date;
}
export interface DeletePullThroughCacheRuleRequest {
  ecrRepositoryPrefix: string;
  registryId?: string;
}
export interface DeletePullThroughCacheRuleResponse {
  ecrRepositoryPrefix?: string;
  upstreamRegistryUrl?: string;
  createdAt?: Date;
  registryId?: string;
  credentialArn?: string;
  customRoleArn?: string;
  upstreamRepositoryPrefix?: string;
}
export interface DeleteRegistryPolicyRequest {}
export type RegistryPolicyText = string;
export interface DeleteRegistryPolicyResponse {
  registryId?: string;
  policyText?: string;
}
export type ForceFlag = boolean;
export interface DeleteRepositoryRequest {
  registryId?: string;
  repositoryName: string;
  force?: boolean;
}
export interface DeleteRepositoryResponse {
  repository?: Repository;
}
export interface DeleteRepositoryCreationTemplateRequest {
  prefix: string;
}
export interface DeleteRepositoryCreationTemplateResponse {
  registryId?: string;
  repositoryCreationTemplate?: RepositoryCreationTemplate;
}
export interface DeleteRepositoryPolicyRequest {
  registryId?: string;
  repositoryName: string;
}
export interface DeleteRepositoryPolicyResponse {
  registryId?: string;
  repositoryName?: string;
  policyText?: string;
}
export interface DeleteSigningConfigurationRequest {}
export type SigningProfileArn = string;
export type SigningRepositoryFilterValue = string;
export type SigningRepositoryFilterType = "WILDCARD_MATCH" | (string & {});
export interface SigningRepositoryFilter {
  filter: string;
  filterType: SigningRepositoryFilterType;
}
export type SigningRepositoryFilterList = SigningRepositoryFilter[];
export interface SigningRule {
  signingProfileArn: string;
  repositoryFilters?: SigningRepositoryFilter[];
}
export type SigningRuleList = SigningRule[];
export interface SigningConfiguration {
  rules: SigningRule[];
}
export interface DeleteSigningConfigurationResponse {
  registryId?: string;
  signingConfiguration?: SigningConfiguration;
}
export type PrincipalArn = string;
export interface DeregisterPullTimeUpdateExclusionRequest {
  principalArn: string;
}
export interface DeregisterPullTimeUpdateExclusionResponse {
  principalArn?: string;
}
export interface DescribeImageReplicationStatusRequest {
  repositoryName: string;
  imageId: ImageIdentifier;
  registryId?: string;
}
export type Region = string;
export type ReplicationStatus = "IN_PROGRESS" | "COMPLETE" | "FAILED" | (string & {});
export type ReplicationError = string;
export interface ImageReplicationStatus {
  region?: string;
  registryId?: string;
  status?: ReplicationStatus;
  failureCode?: string;
}
export type ImageReplicationStatusList = ImageReplicationStatus[];
export interface DescribeImageReplicationStatusResponse {
  repositoryName?: string;
  imageId?: ImageIdentifier;
  replicationStatuses?: ImageReplicationStatus[];
}
export type NextToken = string;
export type MaxResults = number;
export type TagStatus = "TAGGED" | "UNTAGGED" | "ANY" | (string & {});
export type ImageStatusFilter = "ACTIVE" | "ARCHIVED" | "ACTIVATING" | "ANY" | (string & {});
export interface DescribeImagesFilter {
  tagStatus?: TagStatus;
  imageStatus?: ImageStatusFilter;
}
export interface DescribeImagesRequest {
  registryId?: string;
  repositoryName: string;
  imageIds?: ImageIdentifier[];
  nextToken?: string;
  maxResults?: number;
  filter?: DescribeImagesFilter;
}
export type ImageTagList = string[];
export type ImageSizeInBytes = number;
export type PushTimestamp = Date;
export type ScanStatus =
  | "IN_PROGRESS"
  | "COMPLETE"
  | "FAILED"
  | "UNSUPPORTED_IMAGE"
  | "ACTIVE"
  | "PENDING"
  | "SCAN_ELIGIBILITY_EXPIRED"
  | "FINDINGS_UNAVAILABLE"
  | "LIMIT_EXCEEDED"
  | "IMAGE_ARCHIVED"
  | (string & {});
export type ScanStatusDescription = string;
export interface ImageScanStatus {
  status?: ScanStatus;
  description?: string;
}
export type ScanTimestamp = Date;
export type VulnerabilitySourceUpdateTimestamp = Date;
export type FindingSeverity =
  | "INFORMATIONAL"
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "CRITICAL"
  | "UNDEFINED"
  | (string & {});
export type SeverityCount = number;
export type FindingSeverityCounts = { [key in FindingSeverity]?: number };
export interface ImageScanFindingsSummary {
  imageScanCompletedAt?: Date;
  vulnerabilitySourceUpdatedAt?: Date;
  findingSeverityCounts?: { [key: string]: number | undefined };
}
export type RecordedPullTimestamp = Date;
export type ImageStatus = "ACTIVE" | "ARCHIVED" | "ACTIVATING" | (string & {});
export type LastArchivedAtTimestamp = Date;
export type LastActivatedAtTimestamp = Date;
export interface ImageDetail {
  registryId?: string;
  repositoryName?: string;
  imageDigest?: string;
  imageTags?: string[];
  imageSizeInBytes?: number;
  imagePushedAt?: Date;
  imageScanStatus?: ImageScanStatus;
  imageScanFindingsSummary?: ImageScanFindingsSummary;
  imageManifestMediaType?: string;
  artifactMediaType?: string;
  lastRecordedPullTime?: Date;
  subjectManifestDigest?: string;
  imageStatus?: ImageStatus;
  lastArchivedAt?: Date;
  lastActivatedAt?: Date;
}
export type ImageDetailList = ImageDetail[];
export interface DescribeImagesResponse {
  imageDetails?: ImageDetail[];
  nextToken?: string;
}
export interface DescribeImageScanFindingsRequest {
  registryId?: string;
  repositoryName: string;
  imageId: ImageIdentifier;
  nextToken?: string;
  maxResults?: number;
}
export type FindingName = string;
export type FindingDescription = string;
export type AttributeKey = string;
export type AttributeValue = string;
export interface Attribute {
  key: string;
  value?: string;
}
export type AttributeList = Attribute[];
export interface ImageScanFinding {
  name?: string;
  description?: string;
  uri?: string;
  severity?: FindingSeverity;
  attributes?: Attribute[];
}
export type ImageScanFindingList = ImageScanFinding[];
export type FindingArn = string;
export type BaseScore = number;
export type ScoringVector = string;
export type Source = string;
export type Version = string;
export interface CvssScore {
  baseScore?: number;
  scoringVector?: string;
  source?: string;
  version?: string;
}
export type CvssScoreList = CvssScore[];
export type ReferenceUrlsList = string[];
export type RelatedVulnerability = string;
export type RelatedVulnerabilitiesList = string[];
export type Severity = string;
export type VulnerabilityId = string;
export type Arch = string;
export type Epoch = number;
export type FilePath = string;
export type VulnerablePackageName = string;
export type PackageManager = string;
export type Release = string;
export type SourceLayerHash = string;
export type FixedInVersion = string;
export interface VulnerablePackage {
  arch?: string;
  epoch?: number;
  filePath?: string;
  name?: string;
  packageManager?: string;
  release?: string;
  sourceLayerHash?: string;
  version?: string;
  fixedInVersion?: string;
}
export type VulnerablePackagesList = VulnerablePackage[];
export interface PackageVulnerabilityDetails {
  cvss?: CvssScore[];
  referenceUrls?: string[];
  relatedVulnerabilities?: string[];
  source?: string;
  sourceUrl?: string;
  vendorCreatedAt?: Date;
  vendorSeverity?: string;
  vendorUpdatedAt?: Date;
  vulnerabilityId?: string;
  vulnerablePackages?: VulnerablePackage[];
}
export type RecommendationText = string;
export interface Recommendation {
  url?: string;
  text?: string;
}
export interface Remediation {
  recommendation?: Recommendation;
}
export type Author = string;
export type ImageTagsList = string[];
export type Platform = string;
export type InUseCount = number;
export interface AwsEcrContainerImageDetails {
  architecture?: string;
  author?: string;
  imageHash?: string;
  imageTags?: string[];
  platform?: string;
  pushedAt?: Date;
  lastInUseAt?: Date;
  inUseCount?: number;
  registry?: string;
  repositoryName?: string;
}
export interface ResourceDetails {
  awsEcrContainerImage?: AwsEcrContainerImageDetails;
}
export type ResourceId = string;
export type Tags = { [key: string]: string | undefined };
export type Type = string;
export interface Resource {
  details?: ResourceDetails;
  id?: string;
  tags?: { [key: string]: string | undefined };
  type?: string;
}
export type ResourceList = Resource[];
export type Score = number;
export type Metric = string;
export type Reason = string;
export interface CvssScoreAdjustment {
  metric?: string;
  reason?: string;
}
export type CvssScoreAdjustmentList = CvssScoreAdjustment[];
export interface CvssScoreDetails {
  adjustments?: CvssScoreAdjustment[];
  score?: number;
  scoreSource?: string;
  scoringVector?: string;
  version?: string;
}
export interface ScoreDetails {
  cvss?: CvssScoreDetails;
}
export type Status = string;
export type Title = string;
export type FixAvailable = string;
export type ExploitAvailable = string;
export interface EnhancedImageScanFinding {
  awsAccountId?: string;
  description?: string;
  findingArn?: string;
  firstObservedAt?: Date;
  lastObservedAt?: Date;
  packageVulnerabilityDetails?: PackageVulnerabilityDetails;
  remediation?: Remediation;
  resources?: Resource[];
  score?: number;
  scoreDetails?: ScoreDetails;
  severity?: string;
  status?: string;
  title?: string;
  type?: string;
  updatedAt?: Date;
  fixAvailable?: string;
  exploitAvailable?: string;
}
export type EnhancedImageScanFindingList = EnhancedImageScanFinding[];
export interface ImageScanFindings {
  imageScanCompletedAt?: Date;
  vulnerabilitySourceUpdatedAt?: Date;
  findingSeverityCounts?: { [key: string]: number | undefined };
  findings?: ImageScanFinding[];
  enhancedFindings?: EnhancedImageScanFinding[];
}
export interface DescribeImageScanFindingsResponse {
  registryId?: string;
  repositoryName?: string;
  imageId?: ImageIdentifier;
  imageScanStatus?: ImageScanStatus;
  imageScanFindings?: ImageScanFindings;
  nextToken?: string;
}
export interface DescribeImageSigningStatusRequest {
  repositoryName: string;
  imageId: ImageIdentifier;
  registryId?: string;
}
export type SigningStatusFailureCode = string;
export type SigningStatusFailureReason = string;
export type SigningStatus = "IN_PROGRESS" | "COMPLETE" | "FAILED" | (string & {});
export interface ImageSigningStatus {
  signingProfileArn?: string;
  failureCode?: string;
  failureReason?: string;
  status?: SigningStatus;
}
export type ImageSigningStatusList = ImageSigningStatus[];
export interface DescribeImageSigningStatusResponse {
  repositoryName?: string;
  imageId?: ImageIdentifier;
  registryId?: string;
  signingStatuses?: ImageSigningStatus[];
}
export type PullThroughCacheRuleRepositoryPrefixList = string[];
export interface DescribePullThroughCacheRulesRequest {
  registryId?: string;
  ecrRepositoryPrefixes?: string[];
  nextToken?: string;
  maxResults?: number;
}
export type UpdatedTimestamp = Date;
export interface PullThroughCacheRule {
  ecrRepositoryPrefix?: string;
  upstreamRegistryUrl?: string;
  createdAt?: Date;
  registryId?: string;
  credentialArn?: string;
  customRoleArn?: string;
  upstreamRepositoryPrefix?: string;
  upstreamRegistry?: UpstreamRegistry;
  updatedAt?: Date;
}
export type PullThroughCacheRuleList = PullThroughCacheRule[];
export interface DescribePullThroughCacheRulesResponse {
  pullThroughCacheRules?: PullThroughCacheRule[];
  nextToken?: string;
}
export interface DescribeRegistryRequest {}
export interface ReplicationDestination {
  region: string;
  registryId: string;
}
export type ReplicationDestinationList = ReplicationDestination[];
export type RepositoryFilterValue = string;
export type RepositoryFilterType = "PREFIX_MATCH" | (string & {});
export interface RepositoryFilter {
  filter: string;
  filterType: RepositoryFilterType;
}
export type RepositoryFilterList = RepositoryFilter[];
export interface ReplicationRule {
  destinations: ReplicationDestination[];
  repositoryFilters?: RepositoryFilter[];
}
export type ReplicationRuleList = ReplicationRule[];
export interface ReplicationConfiguration {
  rules: ReplicationRule[];
}
export interface DescribeRegistryResponse {
  registryId?: string;
  replicationConfiguration?: ReplicationConfiguration;
}
export type RepositoryNameList = string[];
export interface DescribeRepositoriesRequest {
  registryId?: string;
  repositoryNames?: string[];
  nextToken?: string;
  maxResults?: number;
}
export type RepositoryList = Repository[];
export interface DescribeRepositoriesResponse {
  repositories?: Repository[];
  nextToken?: string;
}
export type PrefixList = string[];
export interface DescribeRepositoryCreationTemplatesRequest {
  prefixes?: string[];
  nextToken?: string;
  maxResults?: number;
}
export type RepositoryCreationTemplateList = RepositoryCreationTemplate[];
export interface DescribeRepositoryCreationTemplatesResponse {
  registryId?: string;
  repositoryCreationTemplates?: RepositoryCreationTemplate[];
  nextToken?: string;
}
export type AccountSettingName = string;
export interface GetAccountSettingRequest {
  name: string;
}
export interface GetAccountSettingResponse {
  name?: string;
  value?: string;
}
export type GetAuthorizationTokenRegistryIdList = string[];
export interface GetAuthorizationTokenRequest {
  registryIds?: string[];
}
export type Base64 = string;
export type ExpirationTimestamp = Date;
export type ProxyEndpoint = string;
export interface AuthorizationData {
  authorizationToken?: string | redacted.Redacted<string>;
  expiresAt?: Date;
  proxyEndpoint?: string;
}
export type AuthorizationDataList = AuthorizationData[];
export interface GetAuthorizationTokenResponse {
  authorizationData?: AuthorizationData[];
}
export interface GetDownloadUrlForLayerRequest {
  registryId?: string;
  repositoryName: string;
  layerDigest: string;
}
export interface GetDownloadUrlForLayerResponse {
  downloadUrl?: string;
  layerDigest?: string;
}
export interface GetLifecyclePolicyRequest {
  registryId?: string;
  repositoryName: string;
}
export interface GetLifecyclePolicyResponse {
  registryId?: string;
  repositoryName?: string;
  lifecyclePolicyText?: string;
  lastEvaluatedAt?: Date;
}
export type LifecyclePreviewMaxResults = number;
export interface LifecyclePolicyPreviewFilter {
  tagStatus?: TagStatus;
}
export interface GetLifecyclePolicyPreviewRequest {
  registryId?: string;
  repositoryName: string;
  imageIds?: ImageIdentifier[];
  nextToken?: string;
  maxResults?: number;
  filter?: LifecyclePolicyPreviewFilter;
}
export type LifecyclePolicyPreviewStatus =
  | "IN_PROGRESS"
  | "COMPLETE"
  | "EXPIRED"
  | "FAILED"
  | (string & {});
export type ImageActionType = "EXPIRE" | "TRANSITION" | (string & {});
export type LifecyclePolicyTargetStorageClass = "ARCHIVE" | (string & {});
export interface LifecyclePolicyRuleAction {
  type?: ImageActionType;
  targetStorageClass?: LifecyclePolicyTargetStorageClass;
}
export type LifecyclePolicyRulePriority = number;
export type LifecyclePolicyStorageClass = "ARCHIVE" | "STANDARD" | (string & {});
export interface LifecyclePolicyPreviewResult {
  imageTags?: string[];
  imageDigest?: string;
  imagePushedAt?: Date;
  action?: LifecyclePolicyRuleAction;
  appliedRulePriority?: number;
  storageClass?: LifecyclePolicyStorageClass;
}
export type LifecyclePolicyPreviewResultList = LifecyclePolicyPreviewResult[];
export type ImageCount = number;
export interface TransitioningImageTotalCount {
  targetStorageClass?: LifecyclePolicyTargetStorageClass;
  imageTotalCount?: number;
}
export type TransitioningImageTotalCounts = TransitioningImageTotalCount[];
export interface LifecyclePolicyPreviewSummary {
  expiringImageTotalCount?: number;
  transitioningImageTotalCounts?: TransitioningImageTotalCount[];
}
export interface GetLifecyclePolicyPreviewResponse {
  registryId?: string;
  repositoryName?: string;
  lifecyclePolicyText?: string;
  status?: LifecyclePolicyPreviewStatus;
  nextToken?: string;
  previewResults?: LifecyclePolicyPreviewResult[];
  summary?: LifecyclePolicyPreviewSummary;
}
export interface GetRegistryPolicyRequest {}
export interface GetRegistryPolicyResponse {
  registryId?: string;
  policyText?: string;
}
export interface GetRegistryScanningConfigurationRequest {}
export type ScanType = "BASIC" | "ENHANCED" | (string & {});
export interface RegistryScanningRule {
  scanFrequency: ScanFrequency;
  repositoryFilters: ScanningRepositoryFilter[];
}
export type RegistryScanningRuleList = RegistryScanningRule[];
export interface RegistryScanningConfiguration {
  scanType?: ScanType;
  rules?: RegistryScanningRule[];
}
export interface GetRegistryScanningConfigurationResponse {
  registryId?: string;
  scanningConfiguration?: RegistryScanningConfiguration;
}
export interface GetRepositoryPolicyRequest {
  registryId?: string;
  repositoryName: string;
}
export interface GetRepositoryPolicyResponse {
  registryId?: string;
  repositoryName?: string;
  policyText?: string;
}
export interface GetSigningConfigurationRequest {}
export interface GetSigningConfigurationResponse {
  registryId?: string;
  signingConfiguration?: SigningConfiguration;
}
export interface InitiateLayerUploadRequest {
  registryId?: string;
  repositoryName: string;
}
export type PartSize = number;
export interface InitiateLayerUploadResponse {
  uploadId?: string;
  partSize?: number;
}
export interface SubjectIdentifier {
  imageDigest: string;
}
export type ArtifactType = string;
export type ArtifactTypeList = string[];
export type ArtifactStatusFilter = "ACTIVE" | "ARCHIVED" | "ACTIVATING" | "ANY" | (string & {});
export interface ListImageReferrersFilter {
  artifactTypes?: string[];
  artifactStatus?: ArtifactStatusFilter;
}
export type FiftyMaxResults = number;
export interface ListImageReferrersRequest {
  registryId?: string;
  repositoryName: string;
  subjectId: SubjectIdentifier;
  filter?: ListImageReferrersFilter;
  nextToken?: string;
  maxResults?: number;
}
export type Annotations = { [key: string]: string | undefined };
export type ArtifactStatus = "ACTIVE" | "ARCHIVED" | "ACTIVATING" | (string & {});
export interface ImageReferrer {
  digest: string;
  mediaType: string;
  artifactType?: string;
  size: number;
  annotations?: { [key: string]: string | undefined };
  artifactStatus?: ArtifactStatus;
}
export type ImageReferrerList = ImageReferrer[];
export interface ListImageReferrersResponse {
  referrers?: ImageReferrer[];
  nextToken?: string;
}
export interface ListImagesFilter {
  tagStatus?: TagStatus;
  imageStatus?: ImageStatusFilter;
}
export interface ListImagesRequest {
  registryId?: string;
  repositoryName: string;
  nextToken?: string;
  maxResults?: number;
  filter?: ListImagesFilter;
}
export interface ListImagesResponse {
  imageIds?: ImageIdentifier[];
  nextToken?: string;
}
export interface ListPullTimeUpdateExclusionsRequest {
  maxResults?: number;
  nextToken?: string;
}
export type PullTimeUpdateExclusionList = string[];
export interface ListPullTimeUpdateExclusionsResponse {
  pullTimeUpdateExclusions?: string[];
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Tag[];
}
export type AccountSettingValue = string;
export interface PutAccountSettingRequest {
  name: string;
  value: string;
}
export interface PutAccountSettingResponse {
  name?: string;
  value?: string;
}
export interface PutImageRequest {
  registryId?: string;
  repositoryName: string;
  imageManifest: string;
  imageManifestMediaType?: string;
  imageTag?: string;
  imageDigest?: string;
}
export interface PutImageResponse {
  image?: Image;
}
export interface PutImageScanningConfigurationRequest {
  registryId?: string;
  repositoryName: string;
  imageScanningConfiguration: ImageScanningConfiguration;
}
export interface PutImageScanningConfigurationResponse {
  registryId?: string;
  repositoryName?: string;
  imageScanningConfiguration?: ImageScanningConfiguration;
}
export interface PutImageTagMutabilityRequest {
  registryId?: string;
  repositoryName: string;
  imageTagMutability: ImageTagMutability;
  imageTagMutabilityExclusionFilters?: ImageTagMutabilityExclusionFilter[];
}
export interface PutImageTagMutabilityResponse {
  registryId?: string;
  repositoryName?: string;
  imageTagMutability?: ImageTagMutability;
  imageTagMutabilityExclusionFilters?: ImageTagMutabilityExclusionFilter[];
}
export interface PutLifecyclePolicyRequest {
  registryId?: string;
  repositoryName: string;
  lifecyclePolicyText: string;
}
export interface PutLifecyclePolicyResponse {
  registryId?: string;
  repositoryName?: string;
  lifecyclePolicyText?: string;
}
export interface PutRegistryPolicyRequest {
  policyText: string;
}
export interface PutRegistryPolicyResponse {
  registryId?: string;
  policyText?: string;
}
export interface PutRegistryScanningConfigurationRequest {
  scanType?: ScanType;
  rules?: RegistryScanningRule[];
}
export interface PutRegistryScanningConfigurationResponse {
  registryScanningConfiguration?: RegistryScanningConfiguration;
}
export interface PutReplicationConfigurationRequest {
  replicationConfiguration: ReplicationConfiguration;
}
export interface PutReplicationConfigurationResponse {
  replicationConfiguration?: ReplicationConfiguration;
}
export interface PutSigningConfigurationRequest {
  signingConfiguration: SigningConfiguration;
}
export interface PutSigningConfigurationResponse {
  signingConfiguration?: SigningConfiguration;
}
export interface RegisterPullTimeUpdateExclusionRequest {
  principalArn: string;
}
export interface RegisterPullTimeUpdateExclusionResponse {
  principalArn?: string;
  createdAt?: Date;
}
export interface SetRepositoryPolicyRequest {
  registryId?: string;
  repositoryName: string;
  policyText: string;
  force?: boolean;
}
export interface SetRepositoryPolicyResponse {
  registryId?: string;
  repositoryName?: string;
  policyText?: string;
}
export interface StartImageScanRequest {
  registryId?: string;
  repositoryName: string;
  imageId: ImageIdentifier;
}
export interface StartImageScanResponse {
  registryId?: string;
  repositoryName?: string;
  imageId?: ImageIdentifier;
  imageScanStatus?: ImageScanStatus;
}
export interface StartLifecyclePolicyPreviewRequest {
  registryId?: string;
  repositoryName: string;
  lifecyclePolicyText?: string;
}
export interface StartLifecyclePolicyPreviewResponse {
  registryId?: string;
  repositoryName?: string;
  lifecyclePolicyText?: string;
  status?: LifecyclePolicyPreviewStatus;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export type TargetStorageClass = "STANDARD" | "ARCHIVE" | (string & {});
export interface UpdateImageStorageClassRequest {
  registryId?: string;
  repositoryName: string;
  imageId: ImageIdentifier;
  targetStorageClass: TargetStorageClass;
}
export interface UpdateImageStorageClassResponse {
  registryId?: string;
  repositoryName?: string;
  imageId?: ImageIdentifier;
  imageStatus?: ImageStatus;
}
export interface UpdatePullThroughCacheRuleRequest {
  registryId?: string;
  ecrRepositoryPrefix: string;
  credentialArn?: string;
  customRoleArn?: string;
}
export interface UpdatePullThroughCacheRuleResponse {
  ecrRepositoryPrefix?: string;
  registryId?: string;
  updatedAt?: Date;
  credentialArn?: string;
  customRoleArn?: string;
  upstreamRepositoryPrefix?: string;
}
export interface UpdateRepositoryCreationTemplateRequest {
  prefix: string;
  description?: string;
  encryptionConfiguration?: EncryptionConfigurationForRepositoryCreationTemplate;
  resourceTags?: Tag[];
  imageTagMutability?: ImageTagMutability;
  imageTagMutabilityExclusionFilters?: ImageTagMutabilityExclusionFilter[];
  repositoryPolicy?: string;
  lifecyclePolicy?: string;
  appliedFor?: RCTAppliedFor[];
  customRoleArn?: string;
}
export interface UpdateRepositoryCreationTemplateResponse {
  registryId?: string;
  repositoryCreationTemplate?: RepositoryCreationTemplate;
}
export type LayerPartBlob = Uint8Array;
export interface UploadLayerPartRequest {
  registryId?: string;
  repositoryName: string;
  uploadId: string;
  partFirstByte: number;
  partLastByte: number;
  layerPartBlob: Uint8Array;
}
export interface UploadLayerPartResponse {
  registryId?: string;
  repositoryName?: string;
  uploadId?: string;
  lastByteReceived?: number;
}
export interface ValidatePullThroughCacheRuleRequest {
  ecrRepositoryPrefix: string;
  registryId?: string;
}
export type IsPTCRuleValid = boolean;
export type PTCValidateFailure = string;
export interface ValidatePullThroughCacheRuleResponse {
  ecrRepositoryPrefix?: string;
  registryId?: string;
  upstreamRegistryUrl?: string;
  credentialArn?: string;
  customRoleArn?: string;
  upstreamRepositoryPrefix?: string;
  isValid?: boolean;
  failure?: string;
}
export type ExceptionMessage = string;
export type KmsError = string;
export type BatchCheckLayerAvailabilityError =
  | InvalidParameterException
  | RepositoryNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Checks the availability of one or more image layers in a repository.
 *
 * When an image is pushed to a repository, each image layer is checked to verify if it
 * has been uploaded before. If it has been uploaded, then the image layer is
 * skipped.
 *
 * This operation is used by the Amazon ECR proxy and is not generally used by
 * customers for pulling and pushing images. In most cases, you should use the `docker` CLI to pull, tag, and push images.
 */
export const batchCheckLayerAvailability: API.OperationMethod<
  BatchCheckLayerAvailabilityRequest,
  BatchCheckLayerAvailabilityResponse,
  BatchCheckLayerAvailabilityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1) as any as S.Schema<BatchCheckLayerAvailabilityRequest>,
  output: __S(6) as any as S.Schema<BatchCheckLayerAvailabilityResponse>,
  errors: [InvalidParameterException, RepositoryNotFoundException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchCheckLayerAvailability",
}));

export type BatchDeleteImageError =
  | InvalidParameterException
  | RepositoryNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Deletes a list of specified images within a repository. Images are specified with
 * either an `imageTag` or `imageDigest`.
 *
 * You can remove a tag from an image by specifying the image's tag in your request. When
 * you remove the last tag from an image, the image is deleted from your repository.
 *
 * You can completely delete an image (and all of its tags) by specifying the image's
 * digest in your request.
 */
export const batchDeleteImage: API.OperationMethod<
  BatchDeleteImageRequest,
  BatchDeleteImageResponse,
  BatchDeleteImageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9) as any as S.Schema<BatchDeleteImageRequest>,
  output: __S(12) as any as S.Schema<BatchDeleteImageResponse>,
  errors: [InvalidParameterException, RepositoryNotFoundException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeleteImage",
}));

export type BatchGetImageError =
  | InvalidParameterException
  | LimitExceededException
  | RepositoryNotFoundException
  | ServerException
  | UnableToGetUpstreamImageException
  | CommonErrors;
/**
 * Gets detailed information for an image. Images are specified with either an
 * `imageTag` or `imageDigest`.
 *
 * When an image is pulled, the BatchGetImage API is called once to retrieve the image
 * manifest.
 */
export const batchGetImage: API.OperationMethod<
  BatchGetImageRequest,
  BatchGetImageResponse,
  BatchGetImageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(13) as any as S.Schema<BatchGetImageRequest>,
  output: __S(16) as any as S.Schema<BatchGetImageResponse>,
  errors: [
    InvalidParameterException,
    LimitExceededException,
    RepositoryNotFoundException,
    ServerException,
    UnableToGetUpstreamImageException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetImage",
}));

export type BatchGetRepositoryScanningConfigurationError =
  | InvalidParameterException
  | RepositoryNotFoundException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Gets the scanning configuration for one or more repositories.
 */
export const batchGetRepositoryScanningConfiguration: API.OperationMethod<
  BatchGetRepositoryScanningConfigurationRequest,
  BatchGetRepositoryScanningConfigurationResponse,
  BatchGetRepositoryScanningConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(17) as any as S.Schema<BatchGetRepositoryScanningConfigurationRequest>,
  output: __S(24) as any as S.Schema<BatchGetRepositoryScanningConfigurationResponse>,
  errors: [
    InvalidParameterException,
    RepositoryNotFoundException,
    ServerException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetRepositoryScanningConfiguration",
}));

export type CompleteLayerUploadError =
  | EmptyUploadException
  | InvalidLayerException
  | InvalidParameterException
  | KmsException
  | LayerAlreadyExistsException
  | LayerPartTooSmallException
  | RepositoryNotFoundException
  | ServerException
  | UploadNotFoundException
  | CommonErrors;
/**
 * Informs Amazon ECR that the image layer upload has completed for a specified registry,
 * repository name, and upload ID. You can optionally provide a `sha256` digest
 * of the image layer for data validation purposes.
 *
 * When an image is pushed, the CompleteLayerUpload API is called once per each new image
 * layer to verify that the upload has completed.
 *
 * This operation is used by the Amazon ECR proxy and is not generally used by
 * customers for pulling and pushing images. In most cases, you should use the `docker` CLI to pull, tag, and push images.
 */
export const completeLayerUpload: API.OperationMethod<
  CompleteLayerUploadRequest,
  CompleteLayerUploadResponse,
  CompleteLayerUploadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(25) as any as S.Schema<CompleteLayerUploadRequest>,
  output: __S(26) as any as S.Schema<CompleteLayerUploadResponse>,
  errors: [
    EmptyUploadException,
    InvalidLayerException,
    InvalidParameterException,
    KmsException,
    LayerAlreadyExistsException,
    LayerPartTooSmallException,
    RepositoryNotFoundException,
    ServerException,
    UploadNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CompleteLayerUpload",
}));

export type CreatePullThroughCacheRuleError =
  | InvalidParameterException
  | LimitExceededException
  | PullThroughCacheRuleAlreadyExistsException
  | SecretNotFoundException
  | ServerException
  | UnableToAccessSecretException
  | UnableToDecryptSecretValueException
  | UnsupportedUpstreamRegistryException
  | ValidationException
  | CommonErrors;
/**
 * Creates a pull through cache rule. A pull through cache rule provides a way to cache
 * images from an upstream registry source in your Amazon ECR private registry. For more
 * information, see Using pull through cache
 * rules in the *Amazon Elastic Container Registry User Guide*.
 */
export const createPullThroughCacheRule: API.OperationMethod<
  CreatePullThroughCacheRuleRequest,
  CreatePullThroughCacheRuleResponse,
  CreatePullThroughCacheRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(27) as any as S.Schema<CreatePullThroughCacheRuleRequest>,
  output: __S(28) as any as S.Schema<CreatePullThroughCacheRuleResponse>,
  errors: [
    InvalidParameterException,
    LimitExceededException,
    PullThroughCacheRuleAlreadyExistsException,
    SecretNotFoundException,
    ServerException,
    UnableToAccessSecretException,
    UnableToDecryptSecretValueException,
    UnsupportedUpstreamRegistryException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePullThroughCacheRule",
}));

export type CreateRepositoryError =
  | InvalidParameterException
  | InvalidTagParameterException
  | KmsException
  | LimitExceededException
  | RepositoryAlreadyExistsException
  | ServerException
  | TooManyTagsException
  | CommonErrors;
/**
 * Creates a repository. For more information, see Amazon ECR repositories in the
 * *Amazon Elastic Container Registry User Guide*.
 */
export const createRepository: API.OperationMethod<
  CreateRepositoryRequest,
  CreateRepositoryResponse,
  CreateRepositoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(35) as any as S.Schema<CreateRepositoryRequest>,
  output: __S(37) as any as S.Schema<CreateRepositoryResponse>,
  errors: [
    InvalidParameterException,
    InvalidTagParameterException,
    KmsException,
    LimitExceededException,
    RepositoryAlreadyExistsException,
    ServerException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRepository",
}));

export type CreateRepositoryCreationTemplateError =
  | InvalidParameterException
  | LimitExceededException
  | ServerException
  | TemplateAlreadyExistsException
  | ValidationException
  | CommonErrors;
/**
 * Creates a repository creation template. This template is used to define the settings
 * for repositories created by Amazon ECR on your behalf. For example, repositories created
 * through pull through cache actions. For more information, see Private
 * repository creation templates in the
 * *Amazon Elastic Container Registry User Guide*.
 */
export const createRepositoryCreationTemplate: API.OperationMethod<
  CreateRepositoryCreationTemplateRequest,
  CreateRepositoryCreationTemplateResponse,
  CreateRepositoryCreationTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(40) as any as S.Schema<CreateRepositoryCreationTemplateRequest>,
  output: __S(42) as any as S.Schema<CreateRepositoryCreationTemplateResponse>,
  errors: [
    InvalidParameterException,
    LimitExceededException,
    ServerException,
    TemplateAlreadyExistsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRepositoryCreationTemplate",
}));

export type DeleteLifecyclePolicyError =
  | InvalidParameterException
  | LifecyclePolicyNotFoundException
  | RepositoryNotFoundException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the lifecycle policy associated with the specified repository.
 */
export const deleteLifecyclePolicy: API.OperationMethod<
  DeleteLifecyclePolicyRequest,
  DeleteLifecyclePolicyResponse,
  DeleteLifecyclePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(43) as any as S.Schema<DeleteLifecyclePolicyRequest>,
  output: __S(44) as any as S.Schema<DeleteLifecyclePolicyResponse>,
  errors: [
    InvalidParameterException,
    LifecyclePolicyNotFoundException,
    RepositoryNotFoundException,
    ServerException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLifecyclePolicy",
}));

export type DeletePullThroughCacheRuleError =
  | InvalidParameterException
  | PullThroughCacheRuleNotFoundException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a pull through cache rule.
 */
export const deletePullThroughCacheRule: API.OperationMethod<
  DeletePullThroughCacheRuleRequest,
  DeletePullThroughCacheRuleResponse,
  DeletePullThroughCacheRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(45) as any as S.Schema<DeletePullThroughCacheRuleRequest>,
  output: __S(46) as any as S.Schema<DeletePullThroughCacheRuleResponse>,
  errors: [
    InvalidParameterException,
    PullThroughCacheRuleNotFoundException,
    ServerException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePullThroughCacheRule",
}));

export type DeleteRegistryPolicyError =
  | InvalidParameterException
  | RegistryPolicyNotFoundException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the registry permissions policy.
 */
export const deleteRegistryPolicy: API.OperationMethod<
  DeleteRegistryPolicyRequest,
  DeleteRegistryPolicyResponse,
  DeleteRegistryPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(47) as any as S.Schema<DeleteRegistryPolicyRequest>,
  output: __S(48) as any as S.Schema<DeleteRegistryPolicyResponse>,
  errors: [
    InvalidParameterException,
    RegistryPolicyNotFoundException,
    ServerException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRegistryPolicy",
}));

export type DeleteRepositoryError =
  | InvalidParameterException
  | KmsException
  | RepositoryNotEmptyException
  | RepositoryNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Deletes a repository. If the repository isn't empty, you must either delete the
 * contents of the repository or use the `force` option to delete the repository
 * and have Amazon ECR delete all of its contents on your behalf.
 */
export const deleteRepository: API.OperationMethod<
  DeleteRepositoryRequest,
  DeleteRepositoryResponse,
  DeleteRepositoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49) as any as S.Schema<DeleteRepositoryRequest>,
  output: __S(37) as any as S.Schema<DeleteRepositoryResponse>,
  errors: [
    InvalidParameterException,
    KmsException,
    RepositoryNotEmptyException,
    RepositoryNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRepository",
}));

export type DeleteRepositoryCreationTemplateError =
  | InvalidParameterException
  | ServerException
  | TemplateNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a repository creation template.
 */
export const deleteRepositoryCreationTemplate: API.OperationMethod<
  DeleteRepositoryCreationTemplateRequest,
  DeleteRepositoryCreationTemplateResponse,
  DeleteRepositoryCreationTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50) as any as S.Schema<DeleteRepositoryCreationTemplateRequest>,
  output: __S(42) as any as S.Schema<DeleteRepositoryCreationTemplateResponse>,
  errors: [
    InvalidParameterException,
    ServerException,
    TemplateNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRepositoryCreationTemplate",
}));

export type DeleteRepositoryPolicyError =
  | InvalidParameterException
  | RepositoryNotFoundException
  | RepositoryPolicyNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Deletes the repository policy associated with the specified repository.
 */
export const deleteRepositoryPolicy: API.OperationMethod<
  DeleteRepositoryPolicyRequest,
  DeleteRepositoryPolicyResponse,
  DeleteRepositoryPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(51) as any as S.Schema<DeleteRepositoryPolicyRequest>,
  output: __S(52) as any as S.Schema<DeleteRepositoryPolicyResponse>,
  errors: [
    InvalidParameterException,
    RepositoryNotFoundException,
    RepositoryPolicyNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRepositoryPolicy",
}));

export type DeleteSigningConfigurationError =
  | ServerException
  | SigningConfigurationNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the registry's signing configuration. Images pushed after deletion of the signing
 * configuration will no longer be automatically signed.
 *
 * For more information, see Managed signing in the
 * *Amazon Elastic Container Registry User Guide*.
 *
 * Deleting the signing configuration does not affect existing image signatures.
 */
export const deleteSigningConfiguration: API.OperationMethod<
  DeleteSigningConfigurationRequest,
  DeleteSigningConfigurationResponse,
  DeleteSigningConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53) as any as S.Schema<DeleteSigningConfigurationRequest>,
  output: __S(57) as any as S.Schema<DeleteSigningConfigurationResponse>,
  errors: [ServerException, SigningConfigurationNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSigningConfiguration",
}));

export type DeregisterPullTimeUpdateExclusionError =
  | ExclusionNotFoundException
  | InvalidParameterException
  | LimitExceededException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Removes a principal from the pull time update exclusion list for a registry. Once removed, Amazon ECR will resume updating the pull time if the specified principal pulls an image.
 */
export const deregisterPullTimeUpdateExclusion: API.OperationMethod<
  DeregisterPullTimeUpdateExclusionRequest,
  DeregisterPullTimeUpdateExclusionResponse,
  DeregisterPullTimeUpdateExclusionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58) as any as S.Schema<DeregisterPullTimeUpdateExclusionRequest>,
  output: __S(59) as any as S.Schema<DeregisterPullTimeUpdateExclusionResponse>,
  errors: [
    ExclusionNotFoundException,
    InvalidParameterException,
    LimitExceededException,
    ServerException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeregisterPullTimeUpdateExclusion",
}));

export type DescribeImageReplicationStatusError =
  | ImageNotFoundException
  | InvalidParameterException
  | RepositoryNotFoundException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns the replication status for a specified image.
 */
export const describeImageReplicationStatus: API.OperationMethod<
  DescribeImageReplicationStatusRequest,
  DescribeImageReplicationStatusResponse,
  DescribeImageReplicationStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(60) as any as S.Schema<DescribeImageReplicationStatusRequest>,
  output: __S(63) as any as S.Schema<DescribeImageReplicationStatusResponse>,
  errors: [
    ImageNotFoundException,
    InvalidParameterException,
    RepositoryNotFoundException,
    ServerException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeImageReplicationStatus",
}));

export type DescribeImagesError =
  | ImageNotFoundException
  | InvalidParameterException
  | RepositoryNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Returns metadata about the images in a repository.
 *
 * Starting with Docker version 1.9, the Docker client compresses image layers before
 * pushing them to a V2 Docker registry. The output of the `docker images`
 * command shows the uncompressed image size. Therefore, Docker might return a larger
 * image than the image shown in the Amazon Web Services Management Console.
 *
 * The new version of Amazon ECR
 * *Basic Scanning* doesn't use the ImageDetail$imageScanFindingsSummary and ImageDetail$imageScanStatus attributes from the API response to
 * return scan results. Use the DescribeImageScanFindings API
 * instead. For more information about Amazon Web Services native basic scanning, see Scan
 * images for software vulnerabilities in Amazon ECR.
 */
export const describeImages: API.PaginatedOperationMethod<
  DescribeImagesRequest,
  DescribeImagesResponse,
  DescribeImagesError,
  Credentials | HttpClient.HttpClient,
  ImageDetail
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(65) as any as S.Schema<DescribeImagesRequest>,
  output: __S(71) as any as S.Schema<DescribeImagesResponse>,
  errors: [
    ImageNotFoundException,
    InvalidParameterException,
    RepositoryNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeImages",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "imageDetails",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeImageScanFindingsError =
  | ImageNotFoundException
  | InvalidParameterException
  | RepositoryNotFoundException
  | ScanNotFoundException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns the scan findings for the specified image.
 */
export const describeImageScanFindings: API.PaginatedOperationMethod<
  DescribeImageScanFindingsRequest,
  DescribeImageScanFindingsResponse,
  DescribeImageScanFindingsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(72) as any as S.Schema<DescribeImageScanFindingsRequest>,
  output: __S(96) as any as S.Schema<DescribeImageScanFindingsResponse>,
  errors: [
    ImageNotFoundException,
    InvalidParameterException,
    RepositoryNotFoundException,
    ScanNotFoundException,
    ServerException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeImageScanFindings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeImageSigningStatusError =
  | ImageNotFoundException
  | InvalidParameterException
  | RepositoryNotFoundException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns the signing status for a specified image. If the image matched
 * signing rules that reference different signing profiles, a status is returned
 * for each profile.
 *
 * For more information, see Managed signing in the
 * *Amazon Elastic Container Registry User Guide*.
 */
export const describeImageSigningStatus: API.OperationMethod<
  DescribeImageSigningStatusRequest,
  DescribeImageSigningStatusResponse,
  DescribeImageSigningStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(97) as any as S.Schema<DescribeImageSigningStatusRequest>,
  output: __S(100) as any as S.Schema<DescribeImageSigningStatusResponse>,
  errors: [
    ImageNotFoundException,
    InvalidParameterException,
    RepositoryNotFoundException,
    ServerException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeImageSigningStatus",
}));

export type DescribePullThroughCacheRulesError =
  | InvalidParameterException
  | PullThroughCacheRuleNotFoundException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns the pull through cache rules for a registry.
 */
export const describePullThroughCacheRules: API.PaginatedOperationMethod<
  DescribePullThroughCacheRulesRequest,
  DescribePullThroughCacheRulesResponse,
  DescribePullThroughCacheRulesError,
  Credentials | HttpClient.HttpClient,
  PullThroughCacheRule
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(101) as any as S.Schema<DescribePullThroughCacheRulesRequest>,
  output: __S(104) as any as S.Schema<DescribePullThroughCacheRulesResponse>,
  errors: [
    InvalidParameterException,
    PullThroughCacheRuleNotFoundException,
    ServerException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePullThroughCacheRules",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "pullThroughCacheRules",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeRegistryError =
  | InvalidParameterException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Describes the settings for a registry. The replication configuration for a repository
 * can be created or updated with the PutReplicationConfiguration API
 * action.
 */
export const describeRegistry: API.OperationMethod<
  DescribeRegistryRequest,
  DescribeRegistryResponse,
  DescribeRegistryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(105) as any as S.Schema<DescribeRegistryRequest>,
  output: __S(111) as any as S.Schema<DescribeRegistryResponse>,
  errors: [InvalidParameterException, ServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRegistry",
}));

export type DescribeRepositoriesError =
  | InvalidParameterException
  | RepositoryNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Describes image repositories in a registry.
 */
export const describeRepositories: API.PaginatedOperationMethod<
  DescribeRepositoriesRequest,
  DescribeRepositoriesResponse,
  DescribeRepositoriesError,
  Credentials | HttpClient.HttpClient,
  Repository
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(112) as any as S.Schema<DescribeRepositoriesRequest>,
  output: __S(114) as any as S.Schema<DescribeRepositoriesResponse>,
  errors: [InvalidParameterException, RepositoryNotFoundException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRepositories",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "repositories",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeRepositoryCreationTemplatesError =
  | InvalidParameterException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns details about the repository creation templates in a registry. The
 * `prefixes` request parameter can be used to return the details for a
 * specific repository creation template.
 */
export const describeRepositoryCreationTemplates: API.PaginatedOperationMethod<
  DescribeRepositoryCreationTemplatesRequest,
  DescribeRepositoryCreationTemplatesResponse,
  DescribeRepositoryCreationTemplatesError,
  Credentials | HttpClient.HttpClient,
  RepositoryCreationTemplate
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(115) as any as S.Schema<DescribeRepositoryCreationTemplatesRequest>,
  output: __S(117) as any as S.Schema<DescribeRepositoryCreationTemplatesResponse>,
  errors: [InvalidParameterException, ServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRepositoryCreationTemplates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "repositoryCreationTemplates",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetAccountSettingError =
  | InvalidParameterException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the account setting value for the specified setting name.
 */
export const getAccountSetting: API.OperationMethod<
  GetAccountSettingRequest,
  GetAccountSettingResponse,
  GetAccountSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(118) as any as S.Schema<GetAccountSettingRequest>,
  output: __S(119) as any as S.Schema<GetAccountSettingResponse>,
  errors: [InvalidParameterException, ServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccountSetting",
}));

export type GetAuthorizationTokenError = InvalidParameterException | ServerException | CommonErrors;
/**
 * Retrieves an authorization token. An authorization token represents your IAM
 * authentication credentials and can be used to access any Amazon ECR registry that your IAM
 * principal has access to. The authorization token is valid for 12 hours.
 *
 * The `authorizationToken` returned is a base64 encoded string that can be
 * decoded and used in a `docker login` command to authenticate to a registry.
 * The CLI offers an `get-login-password` command that simplifies the login
 * process. For more information, see Registry
 * authentication in the *Amazon Elastic Container Registry User Guide*.
 */
export const getAuthorizationToken: API.OperationMethod<
  GetAuthorizationTokenRequest,
  GetAuthorizationTokenResponse,
  GetAuthorizationTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(120) as any as S.Schema<GetAuthorizationTokenRequest>,
  output: __S(123) as any as S.Schema<GetAuthorizationTokenResponse>,
  errors: [InvalidParameterException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAuthorizationToken",
}));

export type GetDownloadUrlForLayerError =
  | InvalidParameterException
  | LayerInaccessibleException
  | LayersNotFoundException
  | RepositoryNotFoundException
  | ServerException
  | UnableToGetUpstreamLayerException
  | CommonErrors;
/**
 * Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You can
 * only get URLs for image layers that are referenced in an image.
 *
 * When an image is pulled, the GetDownloadUrlForLayer API is called once per image layer
 * that is not already cached.
 *
 * This operation is used by the Amazon ECR proxy and is not generally used by
 * customers for pulling and pushing images. In most cases, you should use the `docker` CLI to pull, tag, and push images.
 */
export const getDownloadUrlForLayer: API.OperationMethod<
  GetDownloadUrlForLayerRequest,
  GetDownloadUrlForLayerResponse,
  GetDownloadUrlForLayerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(124) as any as S.Schema<GetDownloadUrlForLayerRequest>,
  output: __S(125) as any as S.Schema<GetDownloadUrlForLayerResponse>,
  errors: [
    InvalidParameterException,
    LayerInaccessibleException,
    LayersNotFoundException,
    RepositoryNotFoundException,
    ServerException,
    UnableToGetUpstreamLayerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDownloadUrlForLayer",
}));

export type GetLifecyclePolicyError =
  | InvalidParameterException
  | LifecyclePolicyNotFoundException
  | RepositoryNotFoundException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the lifecycle policy for the specified repository.
 */
export const getLifecyclePolicy: API.OperationMethod<
  GetLifecyclePolicyRequest,
  GetLifecyclePolicyResponse,
  GetLifecyclePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(126) as any as S.Schema<GetLifecyclePolicyRequest>,
  output: __S(44) as any as S.Schema<GetLifecyclePolicyResponse>,
  errors: [
    InvalidParameterException,
    LifecyclePolicyNotFoundException,
    RepositoryNotFoundException,
    ServerException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLifecyclePolicy",
}));

export type GetLifecyclePolicyPreviewError =
  | InvalidParameterException
  | LifecyclePolicyPreviewNotFoundException
  | RepositoryNotFoundException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the results of the lifecycle policy preview request for the specified
 * repository.
 */
export const getLifecyclePolicyPreview: API.PaginatedOperationMethod<
  GetLifecyclePolicyPreviewRequest,
  GetLifecyclePolicyPreviewResponse,
  GetLifecyclePolicyPreviewError,
  Credentials | HttpClient.HttpClient,
  LifecyclePolicyPreviewResult
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(128) as any as S.Schema<GetLifecyclePolicyPreviewRequest>,
  output: __S(135) as any as S.Schema<GetLifecyclePolicyPreviewResponse>,
  errors: [
    InvalidParameterException,
    LifecyclePolicyPreviewNotFoundException,
    RepositoryNotFoundException,
    ServerException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLifecyclePolicyPreview",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "previewResults",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetRegistryPolicyError =
  | InvalidParameterException
  | RegistryPolicyNotFoundException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the permissions policy for a registry.
 */
export const getRegistryPolicy: API.OperationMethod<
  GetRegistryPolicyRequest,
  GetRegistryPolicyResponse,
  GetRegistryPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(136) as any as S.Schema<GetRegistryPolicyRequest>,
  output: __S(48) as any as S.Schema<GetRegistryPolicyResponse>,
  errors: [
    InvalidParameterException,
    RegistryPolicyNotFoundException,
    ServerException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRegistryPolicy",
}));

export type GetRegistryScanningConfigurationError =
  | InvalidParameterException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the scanning configuration for a registry.
 */
export const getRegistryScanningConfiguration: API.OperationMethod<
  GetRegistryScanningConfigurationRequest,
  GetRegistryScanningConfigurationResponse,
  GetRegistryScanningConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(137) as any as S.Schema<GetRegistryScanningConfigurationRequest>,
  output: __S(141) as any as S.Schema<GetRegistryScanningConfigurationResponse>,
  errors: [InvalidParameterException, ServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRegistryScanningConfiguration",
}));

export type GetRepositoryPolicyError =
  | InvalidParameterException
  | RepositoryNotFoundException
  | RepositoryPolicyNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Retrieves the repository policy for the specified repository.
 */
export const getRepositoryPolicy: API.OperationMethod<
  GetRepositoryPolicyRequest,
  GetRepositoryPolicyResponse,
  GetRepositoryPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(142) as any as S.Schema<GetRepositoryPolicyRequest>,
  output: __S(52) as any as S.Schema<GetRepositoryPolicyResponse>,
  errors: [
    InvalidParameterException,
    RepositoryNotFoundException,
    RepositoryPolicyNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRepositoryPolicy",
}));

export type GetSigningConfigurationError =
  | InvalidParameterException
  | ServerException
  | SigningConfigurationNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the registry's signing configuration, which defines
 * rules for automatically signing images using Amazon Web Services Signer.
 *
 * For more information, see Managed signing in the
 * *Amazon Elastic Container Registry User Guide*.
 */
export const getSigningConfiguration: API.OperationMethod<
  GetSigningConfigurationRequest,
  GetSigningConfigurationResponse,
  GetSigningConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(143) as any as S.Schema<GetSigningConfigurationRequest>,
  output: __S(57) as any as S.Schema<GetSigningConfigurationResponse>,
  errors: [
    InvalidParameterException,
    ServerException,
    SigningConfigurationNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSigningConfiguration",
}));

export type InitiateLayerUploadError =
  | InvalidParameterException
  | KmsException
  | RepositoryNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Notifies Amazon ECR that you intend to upload an image layer.
 *
 * When an image is pushed, the InitiateLayerUpload API is called once per image layer
 * that has not already been uploaded. Whether or not an image layer has been uploaded is
 * determined by the BatchCheckLayerAvailability API action.
 *
 * This operation is used by the Amazon ECR proxy and is not generally used by
 * customers for pulling and pushing images. In most cases, you should use the `docker` CLI to pull, tag, and push images.
 */
export const initiateLayerUpload: API.OperationMethod<
  InitiateLayerUploadRequest,
  InitiateLayerUploadResponse,
  InitiateLayerUploadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(144) as any as S.Schema<InitiateLayerUploadRequest>,
  output: __S(145) as any as S.Schema<InitiateLayerUploadResponse>,
  errors: [InvalidParameterException, KmsException, RepositoryNotFoundException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InitiateLayerUpload",
}));

export type ListImageReferrersError =
  | InvalidParameterException
  | RepositoryNotFoundException
  | ServerException
  | UnableToListUpstreamImageReferrersException
  | ValidationException
  | CommonErrors;
/**
 * Lists the artifacts associated with a specified subject image.
 *
 * The IAM principal invoking this operation must have the `ecr:BatchGetImage` permission.
 */
export const listImageReferrers: API.OperationMethod<
  ListImageReferrersRequest,
  ListImageReferrersResponse,
  ListImageReferrersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(148) as any as S.Schema<ListImageReferrersRequest>,
  output: __S(152) as any as S.Schema<ListImageReferrersResponse>,
  errors: [
    InvalidParameterException,
    RepositoryNotFoundException,
    ServerException,
    UnableToListUpstreamImageReferrersException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListImageReferrers",
}));

export type ListImagesError =
  | InvalidParameterException
  | RepositoryNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Lists all the image IDs for the specified repository.
 *
 * You can filter images based on whether or not they are tagged by using the
 * `tagStatus` filter and specifying either `TAGGED`,
 * `UNTAGGED` or `ANY`. For example, you can filter your results
 * to return only `UNTAGGED` images and then pipe that result to a BatchDeleteImage operation to delete them. Or, you can filter your
 * results to return only `TAGGED` images to list all of the tags in your
 * repository.
 */
export const listImages: API.PaginatedOperationMethod<
  ListImagesRequest,
  ListImagesResponse,
  ListImagesError,
  Credentials | HttpClient.HttpClient,
  ImageIdentifier
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(153) as any as S.Schema<ListImagesRequest>,
  output: __S(154) as any as S.Schema<ListImagesResponse>,
  errors: [InvalidParameterException, RepositoryNotFoundException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListImages",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "imageIds",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPullTimeUpdateExclusionsError =
  | InvalidParameterException
  | LimitExceededException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Lists the IAM principals that are excluded from having their image pull times recorded.
 */
export const listPullTimeUpdateExclusions: API.OperationMethod<
  ListPullTimeUpdateExclusionsRequest,
  ListPullTimeUpdateExclusionsResponse,
  ListPullTimeUpdateExclusionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(155) as any as S.Schema<ListPullTimeUpdateExclusionsRequest>,
  output: __S(156) as any as S.Schema<ListPullTimeUpdateExclusionsResponse>,
  errors: [InvalidParameterException, LimitExceededException, ServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPullTimeUpdateExclusions",
}));

export type ListTagsForResourceError =
  | InvalidParameterException
  | RepositoryNotFoundException
  | ServerException
  | CommonErrors;
/**
 * List the tags for an Amazon ECR resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(157) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(158) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [InvalidParameterException, RepositoryNotFoundException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type PutAccountSettingError =
  | InvalidParameterException
  | LimitExceededException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Allows you to change the basic scan type version or registry policy scope.
 */
export const putAccountSetting: API.OperationMethod<
  PutAccountSettingRequest,
  PutAccountSettingResponse,
  PutAccountSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(159) as any as S.Schema<PutAccountSettingRequest>,
  output: __S(119) as any as S.Schema<PutAccountSettingResponse>,
  errors: [InvalidParameterException, LimitExceededException, ServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutAccountSetting",
}));

export type PutImageError =
  | ImageAlreadyExistsException
  | ImageDigestDoesNotMatchException
  | ImageTagAlreadyExistsException
  | InvalidParameterException
  | KmsException
  | LayersNotFoundException
  | LimitExceededException
  | ReferencedImagesNotFoundException
  | RepositoryNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Creates or updates the image manifest and tags associated with an image.
 *
 * When an image is pushed and all new image layers have been uploaded, the PutImage API
 * is called once to create or update the image manifest and the tags associated with the
 * image.
 *
 * This operation is used by the Amazon ECR proxy and is not generally used by
 * customers for pulling and pushing images. In most cases, you should use the `docker` CLI to pull, tag, and push images.
 */
export const putImage: API.OperationMethod<
  PutImageRequest,
  PutImageResponse,
  PutImageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(160) as any as S.Schema<PutImageRequest>,
  output: __S(161) as any as S.Schema<PutImageResponse>,
  errors: [
    ImageAlreadyExistsException,
    ImageDigestDoesNotMatchException,
    ImageTagAlreadyExistsException,
    InvalidParameterException,
    KmsException,
    LayersNotFoundException,
    LimitExceededException,
    ReferencedImagesNotFoundException,
    RepositoryNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutImage",
}));

export type PutImageScanningConfigurationError =
  | InvalidParameterException
  | RepositoryNotFoundException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * The `PutImageScanningConfiguration` API is being deprecated, in favor
 * of specifying the image scanning configuration at the registry level. For more
 * information, see PutRegistryScanningConfiguration.
 *
 * Updates the image scanning configuration for the specified repository.
 */
export const putImageScanningConfiguration: API.OperationMethod<
  PutImageScanningConfigurationRequest,
  PutImageScanningConfigurationResponse,
  PutImageScanningConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(162) as any as S.Schema<PutImageScanningConfigurationRequest>,
  output: __S(163) as any as S.Schema<PutImageScanningConfigurationResponse>,
  errors: [
    InvalidParameterException,
    RepositoryNotFoundException,
    ServerException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutImageScanningConfiguration",
}));

export type PutImageTagMutabilityError =
  | InvalidParameterException
  | RepositoryNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Updates the image tag mutability settings for the specified repository. For more
 * information, see Image tag
 * mutability in the *Amazon Elastic Container Registry User Guide*.
 */
export const putImageTagMutability: API.OperationMethod<
  PutImageTagMutabilityRequest,
  PutImageTagMutabilityResponse,
  PutImageTagMutabilityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(164) as any as S.Schema<PutImageTagMutabilityRequest>,
  output: __S(165) as any as S.Schema<PutImageTagMutabilityResponse>,
  errors: [InvalidParameterException, RepositoryNotFoundException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutImageTagMutability",
}));

export type PutLifecyclePolicyError =
  | InvalidParameterException
  | RepositoryNotFoundException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Creates or updates the lifecycle policy for the specified repository. For more
 * information, see Lifecycle policy
 * template.
 */
export const putLifecyclePolicy: API.OperationMethod<
  PutLifecyclePolicyRequest,
  PutLifecyclePolicyResponse,
  PutLifecyclePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(166) as any as S.Schema<PutLifecyclePolicyRequest>,
  output: __S(167) as any as S.Schema<PutLifecyclePolicyResponse>,
  errors: [
    InvalidParameterException,
    RepositoryNotFoundException,
    ServerException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutLifecyclePolicy",
}));

export type PutRegistryPolicyError =
  | InvalidParameterException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Creates or updates the permissions policy for your registry.
 *
 * A registry policy is used to specify permissions for another Amazon Web Services account and is used
 * when configuring cross-account replication. For more information, see Registry permissions in the *Amazon Elastic Container Registry User Guide*.
 */
export const putRegistryPolicy: API.OperationMethod<
  PutRegistryPolicyRequest,
  PutRegistryPolicyResponse,
  PutRegistryPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(168) as any as S.Schema<PutRegistryPolicyRequest>,
  output: __S(48) as any as S.Schema<PutRegistryPolicyResponse>,
  errors: [InvalidParameterException, ServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutRegistryPolicy",
}));

export type PutRegistryScanningConfigurationError =
  | BlockedByOrganizationPolicyException
  | InvalidParameterException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Creates or updates the scanning configuration for your private registry.
 */
export const putRegistryScanningConfiguration: API.OperationMethod<
  PutRegistryScanningConfigurationRequest,
  PutRegistryScanningConfigurationResponse,
  PutRegistryScanningConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(169) as any as S.Schema<PutRegistryScanningConfigurationRequest>,
  output: __S(170) as any as S.Schema<PutRegistryScanningConfigurationResponse>,
  errors: [
    BlockedByOrganizationPolicyException,
    InvalidParameterException,
    ServerException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutRegistryScanningConfiguration",
}));

export type PutReplicationConfigurationError =
  | InvalidParameterException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Creates or updates the replication configuration for a registry. The existing
 * replication configuration for a repository can be retrieved with the DescribeRegistry API action. The first time the
 * PutReplicationConfiguration API is called, a service-linked IAM role is created in
 * your account for the replication process. For more information, see Using
 * service-linked roles for Amazon ECR in the *Amazon Elastic Container Registry User Guide*.
 * For more information on the custom role for replication, see Creating an IAM role for replication.
 *
 * When configuring cross-account replication, the destination account must grant the
 * source account permission to replicate. This permission is controlled using a
 * registry permissions policy. For more information, see PutRegistryPolicy.
 */
export const putReplicationConfiguration: API.OperationMethod<
  PutReplicationConfigurationRequest,
  PutReplicationConfigurationResponse,
  PutReplicationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(171) as any as S.Schema<PutReplicationConfigurationRequest>,
  output: __S(172) as any as S.Schema<PutReplicationConfigurationResponse>,
  errors: [InvalidParameterException, ServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutReplicationConfiguration",
}));

export type PutSigningConfigurationError =
  | InvalidParameterException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Creates or updates the registry's signing configuration, which defines
 * rules for automatically signing images with Amazon Web Services Signer.
 *
 * For more information, see Managed signing in the
 * *Amazon Elastic Container Registry User Guide*.
 *
 * To successfully generate a signature, the IAM principal pushing images must have
 * permission to sign payloads with the Amazon Web Services Signer signing profile referenced in the signing
 * configuration.
 */
export const putSigningConfiguration: API.OperationMethod<
  PutSigningConfigurationRequest,
  PutSigningConfigurationResponse,
  PutSigningConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(173) as any as S.Schema<PutSigningConfigurationRequest>,
  output: __S(174) as any as S.Schema<PutSigningConfigurationResponse>,
  errors: [InvalidParameterException, ServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutSigningConfiguration",
}));

export type RegisterPullTimeUpdateExclusionError =
  | ExclusionAlreadyExistsException
  | InvalidParameterException
  | LimitExceededException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Adds an IAM principal to the pull time update exclusion list for a registry. Amazon ECR will not record the pull time if an excluded principal pulls an image.
 */
export const registerPullTimeUpdateExclusion: API.OperationMethod<
  RegisterPullTimeUpdateExclusionRequest,
  RegisterPullTimeUpdateExclusionResponse,
  RegisterPullTimeUpdateExclusionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(175) as any as S.Schema<RegisterPullTimeUpdateExclusionRequest>,
  output: __S(176) as any as S.Schema<RegisterPullTimeUpdateExclusionResponse>,
  errors: [
    ExclusionAlreadyExistsException,
    InvalidParameterException,
    LimitExceededException,
    ServerException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterPullTimeUpdateExclusion",
}));

export type SetRepositoryPolicyError =
  | InvalidParameterException
  | RepositoryNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Applies a repository policy to the specified repository to control access permissions.
 * For more information, see Amazon ECR Repository
 * policies in the *Amazon Elastic Container Registry User Guide*.
 */
export const setRepositoryPolicy: API.OperationMethod<
  SetRepositoryPolicyRequest,
  SetRepositoryPolicyResponse,
  SetRepositoryPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(177) as any as S.Schema<SetRepositoryPolicyRequest>,
  output: __S(52) as any as S.Schema<SetRepositoryPolicyResponse>,
  errors: [InvalidParameterException, RepositoryNotFoundException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetRepositoryPolicy",
}));

export type StartImageScanError =
  | ImageArchivedException
  | ImageNotFoundException
  | InvalidParameterException
  | LimitExceededException
  | RepositoryNotFoundException
  | ServerException
  | UnsupportedImageTypeException
  | ValidationException
  | CommonErrors;
/**
 * Starts a basic image vulnerability scan.
 *
 * A basic image scan can only be started once per 24 hours on an individual image. This
 * limit includes if an image was scanned on initial push. You can start up to 100,000
 * basic scans per 24 hours. This limit includes both scans on initial push and scans
 * initiated by the StartImageScan API. For more information, see Basic scanning in the *Amazon Elastic Container Registry User Guide*.
 */
export const startImageScan: API.OperationMethod<
  StartImageScanRequest,
  StartImageScanResponse,
  StartImageScanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(178) as any as S.Schema<StartImageScanRequest>,
  output: __S(179) as any as S.Schema<StartImageScanResponse>,
  errors: [
    ImageArchivedException,
    ImageNotFoundException,
    InvalidParameterException,
    LimitExceededException,
    RepositoryNotFoundException,
    ServerException,
    UnsupportedImageTypeException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartImageScan",
}));

export type StartLifecyclePolicyPreviewError =
  | InvalidParameterException
  | LifecyclePolicyNotFoundException
  | LifecyclePolicyPreviewInProgressException
  | RepositoryNotFoundException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Starts a preview of a lifecycle policy for the specified repository. This allows you
 * to see the results before associating the lifecycle policy with the repository.
 */
export const startLifecyclePolicyPreview: API.OperationMethod<
  StartLifecyclePolicyPreviewRequest,
  StartLifecyclePolicyPreviewResponse,
  StartLifecyclePolicyPreviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(180) as any as S.Schema<StartLifecyclePolicyPreviewRequest>,
  output: __S(181) as any as S.Schema<StartLifecyclePolicyPreviewResponse>,
  errors: [
    InvalidParameterException,
    LifecyclePolicyNotFoundException,
    LifecyclePolicyPreviewInProgressException,
    RepositoryNotFoundException,
    ServerException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartLifecyclePolicyPreview",
}));

export type TagResourceError =
  | InvalidParameterException
  | InvalidTagParameterException
  | RepositoryNotFoundException
  | ServerException
  | TooManyTagsException
  | CommonErrors;
/**
 * Adds specified tags to a resource with the specified ARN. Existing tags on a resource
 * are not changed if they are not specified in the request parameters.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(182) as any as S.Schema<TagResourceRequest>,
  output: __S(183) as any as S.Schema<TagResourceResponse>,
  errors: [
    InvalidParameterException,
    InvalidTagParameterException,
    RepositoryNotFoundException,
    ServerException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InvalidParameterException
  | InvalidTagParameterException
  | RepositoryNotFoundException
  | ServerException
  | TooManyTagsException
  | CommonErrors;
/**
 * Deletes specified tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(184) as any as S.Schema<UntagResourceRequest>,
  output: __S(183) as any as S.Schema<UntagResourceResponse>,
  errors: [
    InvalidParameterException,
    InvalidTagParameterException,
    RepositoryNotFoundException,
    ServerException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateImageStorageClassError =
  | ImageNotFoundException
  | ImageStorageClassUpdateNotSupportedException
  | InvalidParameterException
  | RepositoryNotFoundException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Transitions an image between storage classes. You can transition images from Amazon ECR standard storage class to Amazon ECR archival storage class for long-term storage, or restore archived images back to Amazon ECR standard.
 */
export const updateImageStorageClass: API.OperationMethod<
  UpdateImageStorageClassRequest,
  UpdateImageStorageClassResponse,
  UpdateImageStorageClassError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(185) as any as S.Schema<UpdateImageStorageClassRequest>,
  output: __S(186) as any as S.Schema<UpdateImageStorageClassResponse>,
  errors: [
    ImageNotFoundException,
    ImageStorageClassUpdateNotSupportedException,
    InvalidParameterException,
    RepositoryNotFoundException,
    ServerException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateImageStorageClass",
}));

export type UpdatePullThroughCacheRuleError =
  | InvalidParameterException
  | PullThroughCacheRuleNotFoundException
  | SecretNotFoundException
  | ServerException
  | UnableToAccessSecretException
  | UnableToDecryptSecretValueException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing pull through cache rule.
 */
export const updatePullThroughCacheRule: API.OperationMethod<
  UpdatePullThroughCacheRuleRequest,
  UpdatePullThroughCacheRuleResponse,
  UpdatePullThroughCacheRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(187) as any as S.Schema<UpdatePullThroughCacheRuleRequest>,
  output: __S(188) as any as S.Schema<UpdatePullThroughCacheRuleResponse>,
  errors: [
    InvalidParameterException,
    PullThroughCacheRuleNotFoundException,
    SecretNotFoundException,
    ServerException,
    UnableToAccessSecretException,
    UnableToDecryptSecretValueException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePullThroughCacheRule",
}));

export type UpdateRepositoryCreationTemplateError =
  | InvalidParameterException
  | ServerException
  | TemplateNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing repository creation template.
 */
export const updateRepositoryCreationTemplate: API.OperationMethod<
  UpdateRepositoryCreationTemplateRequest,
  UpdateRepositoryCreationTemplateResponse,
  UpdateRepositoryCreationTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(189) as any as S.Schema<UpdateRepositoryCreationTemplateRequest>,
  output: __S(42) as any as S.Schema<UpdateRepositoryCreationTemplateResponse>,
  errors: [
    InvalidParameterException,
    ServerException,
    TemplateNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRepositoryCreationTemplate",
}));

export type UploadLayerPartError =
  | InvalidLayerPartException
  | InvalidParameterException
  | KmsException
  | LimitExceededException
  | RepositoryNotFoundException
  | ServerException
  | UploadNotFoundException
  | CommonErrors;
/**
 * Uploads an image layer part to Amazon ECR.
 *
 * When an image is pushed, each new image layer is uploaded in parts. The maximum size
 * of each image layer part can be 20971520 bytes (or about 20MB). The UploadLayerPart API
 * is called once per each new image layer part.
 *
 * This operation is used by the Amazon ECR proxy and is not generally used by
 * customers for pulling and pushing images. In most cases, you should use the `docker` CLI to pull, tag, and push images.
 */
export const uploadLayerPart: API.OperationMethod<
  UploadLayerPartRequest,
  UploadLayerPartResponse,
  UploadLayerPartError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(190) as any as S.Schema<UploadLayerPartRequest>,
  output: __S(191) as any as S.Schema<UploadLayerPartResponse>,
  errors: [
    InvalidLayerPartException,
    InvalidParameterException,
    KmsException,
    LimitExceededException,
    RepositoryNotFoundException,
    ServerException,
    UploadNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UploadLayerPart",
}));

export type ValidatePullThroughCacheRuleError =
  | InvalidParameterException
  | PullThroughCacheRuleNotFoundException
  | ServerException
  | ValidationException
  | CommonErrors;
/**
 * Validates an existing pull through cache rule for an upstream registry that requires
 * authentication. This will retrieve the contents of the Amazon Web Services Secrets Manager secret, verify the
 * syntax, and then validate that authentication to the upstream registry is
 * successful.
 */
export const validatePullThroughCacheRule: API.OperationMethod<
  ValidatePullThroughCacheRuleRequest,
  ValidatePullThroughCacheRuleResponse,
  ValidatePullThroughCacheRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(192) as any as S.Schema<ValidatePullThroughCacheRuleRequest>,
  output: __S(193) as any as S.Schema<ValidatePullThroughCacheRuleResponse>,
  errors: [
    InvalidParameterException,
    PullThroughCacheRuleNotFoundException,
    ServerException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ValidatePullThroughCacheRule",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.String,
          layerDigests: __S(0),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "BatchCheckLayerAvailabilityRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          layerDigest: S.optional(S.String),
          layerAvailability: S.optional(S.String),
          layerSize: S.optional(S.Number),
          mediaType: S.optional(S.String),
        }),
      ).annotate({ identifier: "Layer" });
    case 3:
      return S.Array(__S(2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          layerDigest: S.optional(S.String),
          failureCode: S.optional(S.String),
          failureReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "LayerFailure" });
    case 5:
      return S.Array(__S(4));
    case 6:
      return S.suspend(() =>
        S.Struct({ layers: S.optional(__S(3)), failures: S.optional(__S(5)) }).pipe(ns),
      ).annotate({
        identifier: "BatchCheckLayerAvailabilityResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ imageDigest: S.optional(S.String), imageTag: S.optional(S.String) }),
      ).annotate({ identifier: "ImageIdentifier" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.String,
          imageIds: __S(8),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "BatchDeleteImageRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          imageId: S.optional(__S(7)),
          failureCode: S.optional(S.String),
          failureReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "ImageFailure" });
    case 3:
      return S.Array(__S(10));
    case 4:
      return S.suspend(() =>
        S.Struct({
          imageIds: S.optional(__S(8)),
          failures: S.optional(__S(11)),
        }).pipe(ns),
      ).annotate({ identifier: "BatchDeleteImageResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.String,
          imageIds: __S(8),
          acceptedMediaTypes: S.optional(__S(0)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "BatchGetImageRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.optional(S.String),
          imageId: S.optional(__S(7)),
          imageManifest: S.optional(S.String),
          imageManifestMediaType: S.optional(S.String),
        }),
      ).annotate({ identifier: "Image" });
    case 7:
      return S.Array(__S(14));
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ images: S.optional(__S(15)), failures: S.optional(__S(11)) }).pipe(ns),
      ).annotate({ identifier: "BatchGetImageResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ repositoryNames: __S(0) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchGetRepositoryScanningConfigurationRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ filter: S.String, filterType: S.String })).annotate({
        identifier: "ScanningRepositoryFilter",
      });
    case 3:
      return S.Array(__S(18));
    case 4:
      return S.suspend(() =>
        S.Struct({
          repositoryArn: S.optional(S.String),
          repositoryName: S.optional(S.String),
          scanOnPush: S.optional(S.Boolean),
          scanFrequency: S.optional(S.String),
          appliedScanFilters: S.optional(__S(19)),
        }),
      ).annotate({
        identifier: "RepositoryScanningConfiguration",
      });
    case 5:
      return S.Array(__S(20));
    case 6:
      return S.suspend(() =>
        S.Struct({
          repositoryName: S.optional(S.String),
          failureCode: S.optional(S.String),
          failureReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RepositoryScanningConfigurationFailure",
      });
    case 7:
      return S.Array(__S(22));
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          scanningConfigurations: S.optional(__S(21)),
          failures: S.optional(__S(23)),
        }).pipe(ns),
      ).annotate({
        identifier: "BatchGetRepositoryScanningConfigurationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.String,
          uploadId: S.String,
          layerDigests: __S(0),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CompleteLayerUploadRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.optional(S.String),
          uploadId: S.optional(S.String),
          layerDigest: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "CompleteLayerUploadResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ecrRepositoryPrefix: S.String,
          upstreamRegistryUrl: S.String,
          registryId: S.optional(S.String),
          upstreamRegistry: S.optional(S.String),
          credentialArn: S.optional(S.String),
          customRoleArn: S.optional(S.String),
          upstreamRepositoryPrefix: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreatePullThroughCacheRuleRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ecrRepositoryPrefix: S.optional(S.String),
          upstreamRegistryUrl: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          registryId: S.optional(S.String),
          upstreamRegistry: S.optional(S.String),
          credentialArn: S.optional(S.String),
          customRoleArn: S.optional(S.String),
          upstreamRepositoryPrefix: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "CreatePullThroughCacheRuleResponse",
      });
    case 5:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 6:
      return S.Array(__S(29));
    case 7:
      return S.suspend(() => S.Struct({ filterType: S.String, filter: S.String })).annotate({
        identifier: "ImageTagMutabilityExclusionFilter",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(31));
    case 1:
      return S.suspend(() => S.Struct({ scanOnPush: S.optional(S.Boolean) })).annotate({
        identifier: "ImageScanningConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ encryptionType: S.String, kmsKey: S.optional(S.String) }),
      ).annotate({ identifier: "EncryptionConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.String,
          tags: S.optional(__S(30)),
          imageTagMutability: S.optional(S.String),
          imageTagMutabilityExclusionFilters: S.optional(__S(32)),
          imageScanningConfiguration: S.optional(__S(33)),
          encryptionConfiguration: S.optional(__S(34)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateRepositoryRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          repositoryArn: S.optional(S.String),
          registryId: S.optional(S.String),
          repositoryName: S.optional(S.String),
          repositoryUri: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          imageTagMutability: S.optional(S.String),
          imageTagMutabilityExclusionFilters: S.optional(__S(32)),
          imageScanningConfiguration: S.optional(__S(33)),
          encryptionConfiguration: S.optional(__S(34)),
        }),
      ).annotate({ identifier: "Repository" });
    case 5:
      return S.suspend(() => S.Struct({ repository: S.optional(__S(36)) }).pipe(ns)).annotate({
        identifier: "CreateRepositoryResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ encryptionType: S.String, kmsKey: S.optional(S.String) }),
      ).annotate({
        identifier: "EncryptionConfigurationForRepositoryCreationTemplate",
      });
    case 7:
      return S.Array(S.String);
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          prefix: S.String,
          description: S.optional(S.String),
          encryptionConfiguration: S.optional(__S(38)),
          resourceTags: S.optional(__S(30)),
          imageTagMutability: S.optional(S.String),
          imageTagMutabilityExclusionFilters: S.optional(__S(32)),
          repositoryPolicy: S.optional(S.String),
          lifecyclePolicy: S.optional(S.String),
          appliedFor: __S(39),
          customRoleArn: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateRepositoryCreationTemplateRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          prefix: S.optional(S.String),
          description: S.optional(S.String),
          encryptionConfiguration: S.optional(__S(38)),
          resourceTags: S.optional(__S(30)),
          imageTagMutability: S.optional(S.String),
          imageTagMutabilityExclusionFilters: S.optional(__S(32)),
          repositoryPolicy: S.optional(S.String),
          lifecyclePolicy: S.optional(S.String),
          appliedFor: S.optional(__S(39)),
          customRoleArn: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "RepositoryCreationTemplate",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryCreationTemplate: S.optional(__S(41)),
        }).pipe(ns),
      ).annotate({
        identifier: "CreateRepositoryCreationTemplateResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ registryId: S.optional(S.String), repositoryName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteLifecyclePolicyRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.optional(S.String),
          lifecyclePolicyText: S.optional(S.String),
          lastEvaluatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(ns),
      ).annotate({
        identifier: "DeleteLifecyclePolicyResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ecrRepositoryPrefix: S.String, registryId: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeletePullThroughCacheRuleRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ecrRepositoryPrefix: S.optional(S.String),
          upstreamRegistryUrl: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          registryId: S.optional(S.String),
          credentialArn: S.optional(S.String),
          customRoleArn: S.optional(S.String),
          upstreamRepositoryPrefix: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DeletePullThroughCacheRuleResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteRegistryPolicyRequest",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ registryId: S.optional(S.String), policyText: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DeleteRegistryPolicyResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.String,
          force: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteRepositoryRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ prefix: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteRepositoryCreationTemplateRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ registryId: S.optional(S.String), repositoryName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteRepositoryPolicyRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.optional(S.String),
          policyText: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DeleteRepositoryPolicyResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteSigningConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          signingProfileArn: S.String,
          repositoryFilters: S.optional(__S(19)),
        }),
      ).annotate({ identifier: "SigningRule" });
    case 7:
      return S.Array(__S(54));
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ rules: __S(55) })).annotate({
        identifier: "SigningConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          signingConfiguration: S.optional(__S(56)),
        }).pipe(ns),
      ).annotate({
        identifier: "DeleteSigningConfigurationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ principalArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeregisterPullTimeUpdateExclusionRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ principalArn: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "DeregisterPullTimeUpdateExclusionResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          repositoryName: S.String,
          imageId: __S(7),
          registryId: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeImageReplicationStatusRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          region: S.optional(S.String),
          registryId: S.optional(S.String),
          status: S.optional(S.String),
          failureCode: S.optional(S.String),
        }),
      ).annotate({ identifier: "ImageReplicationStatus" });
    case 6:
      return S.Array(__S(61));
    case 7:
      return S.suspend(() =>
        S.Struct({
          repositoryName: S.optional(S.String),
          imageId: S.optional(__S(7)),
          replicationStatuses: S.optional(__S(62)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeImageReplicationStatusResponse",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ tagStatus: S.optional(S.String), imageStatus: S.optional(S.String) }),
      ).annotate({ identifier: "DescribeImagesFilter" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.String,
          imageIds: S.optional(__S(8)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          filter: S.optional(__S(64)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeImagesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ status: S.optional(S.String), description: S.optional(S.String) }),
      ).annotate({ identifier: "ImageScanStatus" });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.Number.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          imageScanCompletedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          vulnerabilitySourceUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          findingSeverityCounts: S.optional(__S(67)),
        }),
      ).annotate({ identifier: "ImageScanFindingsSummary" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.optional(S.String),
          imageDigest: S.optional(S.String),
          imageTags: S.optional(__S(0)),
          imageSizeInBytes: S.optional(S.Number),
          imagePushedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          imageScanStatus: S.optional(__S(66)),
          imageScanFindingsSummary: S.optional(__S(68)),
          imageManifestMediaType: S.optional(S.String),
          artifactMediaType: S.optional(S.String),
          lastRecordedPullTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          subjectManifestDigest: S.optional(S.String),
          imageStatus: S.optional(S.String),
          lastArchivedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastActivatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ImageDetail" });
    case 6:
      return S.Array(__S(69));
    case 7:
      return S.suspend(() =>
        S.Struct({
          imageDetails: S.optional(__S(70)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "DescribeImagesResponse" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.String,
          imageId: __S(7),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeImageScanFindingsRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ key: S.String, value: S.optional(S.String) })).annotate({
        identifier: "Attribute",
      });
    case 2:
      return S.Array(__S(73));
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          description: S.optional(S.String),
          uri: S.optional(S.String),
          severity: S.optional(S.String),
          attributes: S.optional(__S(74)),
        }),
      ).annotate({ identifier: "ImageScanFinding" });
    case 4:
      return S.Array(__S(75));
    case 5:
      return S.suspend(() =>
        S.Struct({
          baseScore: S.optional(S.Number),
          scoringVector: S.optional(S.String),
          source: S.optional(S.String),
          version: S.optional(S.String),
        }),
      ).annotate({ identifier: "CvssScore" });
    case 6:
      return S.Array(__S(77));
    case 7:
      return S.suspend(() =>
        S.Struct({
          arch: S.optional(S.String),
          epoch: S.optional(S.Number),
          filePath: S.optional(S.String),
          name: S.optional(S.String),
          packageManager: S.optional(S.String),
          release: S.optional(S.String),
          sourceLayerHash: S.optional(S.String),
          version: S.optional(S.String),
          fixedInVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "VulnerablePackage" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(79));
    case 1:
      return S.suspend(() =>
        S.Struct({
          cvss: S.optional(__S(78)),
          referenceUrls: S.optional(__S(0)),
          relatedVulnerabilities: S.optional(__S(0)),
          source: S.optional(S.String),
          sourceUrl: S.optional(S.String),
          vendorCreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          vendorSeverity: S.optional(S.String),
          vendorUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          vulnerabilityId: S.optional(S.String),
          vulnerablePackages: S.optional(__S(80)),
        }),
      ).annotate({
        identifier: "PackageVulnerabilityDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ url: S.optional(S.String), text: S.optional(S.String) }),
      ).annotate({ identifier: "Recommendation" });
    case 3:
      return S.suspend(() => S.Struct({ recommendation: S.optional(__S(82)) })).annotate({
        identifier: "Remediation",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          architecture: S.optional(S.String),
          author: S.optional(S.String),
          imageHash: S.optional(S.String),
          imageTags: S.optional(__S(0)),
          platform: S.optional(S.String),
          pushedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastInUseAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          inUseCount: S.optional(S.Number),
          registry: S.optional(S.String),
          repositoryName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEcrContainerImageDetails",
      });
    case 5:
      return S.suspend(() => S.Struct({ awsEcrContainerImage: S.optional(__S(84)) })).annotate({
        identifier: "ResourceDetails",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          details: S.optional(__S(85)),
          id: S.optional(S.String),
          tags: S.optional(__S(86)),
          type: S.optional(S.String),
        }),
      ).annotate({ identifier: "Resource" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(87));
    case 1:
      return S.suspend(() =>
        S.Struct({ metric: S.optional(S.String), reason: S.optional(S.String) }),
      ).annotate({ identifier: "CvssScoreAdjustment" });
    case 2:
      return S.Array(__S(89));
    case 3:
      return S.suspend(() =>
        S.Struct({
          adjustments: S.optional(__S(90)),
          score: S.optional(S.Number),
          scoreSource: S.optional(S.String),
          scoringVector: S.optional(S.String),
          version: S.optional(S.String),
        }),
      ).annotate({ identifier: "CvssScoreDetails" });
    case 4:
      return S.suspend(() => S.Struct({ cvss: S.optional(__S(91)) })).annotate({
        identifier: "ScoreDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          awsAccountId: S.optional(S.String),
          description: S.optional(S.String),
          findingArn: S.optional(S.String),
          firstObservedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastObservedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          packageVulnerabilityDetails: S.optional(__S(81)),
          remediation: S.optional(__S(83)),
          resources: S.optional(__S(88)),
          score: S.optional(S.Number),
          scoreDetails: S.optional(__S(92)),
          severity: S.optional(S.String),
          status: S.optional(S.String),
          title: S.optional(S.String),
          type: S.optional(S.String),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          fixAvailable: S.optional(S.String),
          exploitAvailable: S.optional(S.String),
        }),
      ).annotate({ identifier: "EnhancedImageScanFinding" });
    case 6:
      return S.Array(__S(93));
    case 7:
      return S.suspend(() =>
        S.Struct({
          imageScanCompletedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          vulnerabilitySourceUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          findingSeverityCounts: S.optional(__S(67)),
          findings: S.optional(__S(76)),
          enhancedFindings: S.optional(__S(94)),
        }),
      ).annotate({ identifier: "ImageScanFindings" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.optional(S.String),
          imageId: S.optional(__S(7)),
          imageScanStatus: S.optional(__S(66)),
          imageScanFindings: S.optional(__S(95)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeImageScanFindingsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          repositoryName: S.String,
          imageId: __S(7),
          registryId: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeImageSigningStatusRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          signingProfileArn: S.optional(S.String),
          failureCode: S.optional(S.String),
          failureReason: S.optional(S.String),
          status: S.optional(S.String),
        }),
      ).annotate({ identifier: "ImageSigningStatus" });
    case 3:
      return S.Array(__S(98));
    case 4:
      return S.suspend(() =>
        S.Struct({
          repositoryName: S.optional(S.String),
          imageId: S.optional(__S(7)),
          registryId: S.optional(S.String),
          signingStatuses: S.optional(__S(99)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeImageSigningStatusResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          ecrRepositoryPrefixes: S.optional(__S(0)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribePullThroughCacheRulesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ecrRepositoryPrefix: S.optional(S.String),
          upstreamRegistryUrl: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          registryId: S.optional(S.String),
          credentialArn: S.optional(S.String),
          customRoleArn: S.optional(S.String),
          upstreamRepositoryPrefix: S.optional(S.String),
          upstreamRegistry: S.optional(S.String),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "PullThroughCacheRule" });
    case 7:
      return S.Array(__S(102));
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          pullThroughCacheRules: S.optional(__S(103)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribePullThroughCacheRulesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeRegistryRequest" });
    case 2:
      return S.suspend(() => S.Struct({ region: S.String, registryId: S.String })).annotate({
        identifier: "ReplicationDestination",
      });
    case 3:
      return S.Array(__S(106));
    case 4:
      return S.suspend(() =>
        S.Struct({
          destinations: __S(107),
          repositoryFilters: S.optional(__S(19)),
        }),
      ).annotate({ identifier: "ReplicationRule" });
    case 5:
      return S.Array(__S(108));
    case 6:
      return S.suspend(() => S.Struct({ rules: __S(109) })).annotate({
        identifier: "ReplicationConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          replicationConfiguration: S.optional(__S(110)),
        }).pipe(ns),
      ).annotate({ identifier: "DescribeRegistryResponse" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryNames: S.optional(__S(0)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeRepositoriesRequest",
      });
    case 1:
      return S.Array(__S(36));
    case 2:
      return S.suspend(() =>
        S.Struct({
          repositories: S.optional(__S(113)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeRepositoriesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          prefixes: S.optional(__S(0)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeRepositoryCreationTemplatesRequest",
      });
    case 4:
      return S.Array(__S(41));
    case 5:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryCreationTemplates: S.optional(__S(116)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeRepositoryCreationTemplatesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetAccountSettingRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), value: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "GetAccountSettingResponse",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ registryIds: S.optional(__S(0)) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetAuthorizationTokenRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          authorizationToken: S.optional(SensitiveString),
          expiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          proxyEndpoint: S.optional(S.String),
        }),
      ).annotate({ identifier: "AuthorizationData" });
    case 2:
      return S.Array(__S(121));
    case 3:
      return S.suspend(() =>
        S.Struct({ authorizationData: S.optional(__S(122)) }).pipe(ns),
      ).annotate({
        identifier: "GetAuthorizationTokenResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.String,
          layerDigest: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetDownloadUrlForLayerRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ downloadUrl: S.optional(S.String), layerDigest: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "GetDownloadUrlForLayerResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ registryId: S.optional(S.String), repositoryName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetLifecyclePolicyRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ tagStatus: S.optional(S.String) })).annotate({
        identifier: "LifecyclePolicyPreviewFilter",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.String,
          imageIds: S.optional(__S(8)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          filter: S.optional(__S(127)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetLifecyclePolicyPreviewRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          targetStorageClass: S.optional(S.String),
        }),
      ).annotate({
        identifier: "LifecyclePolicyRuleAction",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          imageTags: S.optional(__S(0)),
          imageDigest: S.optional(S.String),
          imagePushedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          action: S.optional(__S(129)),
          appliedRulePriority: S.optional(S.Number),
          storageClass: S.optional(S.String),
        }),
      ).annotate({
        identifier: "LifecyclePolicyPreviewResult",
      });
    case 3:
      return S.Array(__S(130));
    case 4:
      return S.suspend(() =>
        S.Struct({
          targetStorageClass: S.optional(S.String),
          imageTotalCount: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "TransitioningImageTotalCount",
      });
    case 5:
      return S.Array(__S(132));
    case 6:
      return S.suspend(() =>
        S.Struct({
          expiringImageTotalCount: S.optional(S.Number),
          transitioningImageTotalCounts: S.optional(__S(133)),
        }),
      ).annotate({
        identifier: "LifecyclePolicyPreviewSummary",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.optional(S.String),
          lifecyclePolicyText: S.optional(S.String),
          status: S.optional(S.String),
          nextToken: S.optional(S.String),
          previewResults: S.optional(__S(131)),
          summary: S.optional(__S(134)),
        }).pipe(ns),
      ).annotate({
        identifier: "GetLifecyclePolicyPreviewResponse",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetRegistryPolicyRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetRegistryScanningConfigurationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ scanFrequency: S.String, repositoryFilters: __S(19) }),
      ).annotate({ identifier: "RegistryScanningRule" });
    case 3:
      return S.Array(__S(138));
    case 4:
      return S.suspend(() =>
        S.Struct({ scanType: S.optional(S.String), rules: S.optional(__S(139)) }),
      ).annotate({
        identifier: "RegistryScanningConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          scanningConfiguration: S.optional(__S(140)),
        }).pipe(ns),
      ).annotate({
        identifier: "GetRegistryScanningConfigurationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ registryId: S.optional(S.String), repositoryName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetRepositoryPolicyRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetSigningConfigurationRequest",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ registryId: S.optional(S.String), repositoryName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "InitiateLayerUploadRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ uploadId: S.optional(S.String), partSize: S.optional(S.Number) }).pipe(ns),
      ).annotate({
        identifier: "InitiateLayerUploadResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ imageDigest: S.String })).annotate({
        identifier: "SubjectIdentifier",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          artifactTypes: S.optional(__S(0)),
          artifactStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListImageReferrersFilter" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.String,
          subjectId: __S(146),
          filter: S.optional(__S(147)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListImageReferrersRequest",
      });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          digest: S.String,
          mediaType: S.String,
          artifactType: S.optional(S.String),
          size: S.Number,
          annotations: S.optional(__S(149)),
          artifactStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "ImageReferrer" });
    case 7:
      return S.Array(__S(150));
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          referrers: S.optional(__S(151)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListImageReferrersResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          filter: S.optional(__S(64)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListImagesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          imageIds: S.optional(__S(8)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListImagesResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListPullTimeUpdateExclusionsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          pullTimeUpdateExclusions: S.optional(__S(0)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListPullTimeUpdateExclusionsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(30)) }).pipe(ns)).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ name: S.String, value: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutAccountSettingRequest" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.String,
          imageManifest: S.String,
          imageManifestMediaType: S.optional(S.String),
          imageTag: S.optional(S.String),
          imageDigest: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutImageRequest" });
    case 1:
      return S.suspend(() => S.Struct({ image: S.optional(__S(14)) }).pipe(ns)).annotate({
        identifier: "PutImageResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.String,
          imageScanningConfiguration: __S(33),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PutImageScanningConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.optional(S.String),
          imageScanningConfiguration: S.optional(__S(33)),
        }).pipe(ns),
      ).annotate({
        identifier: "PutImageScanningConfigurationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.String,
          imageTagMutability: S.String,
          imageTagMutabilityExclusionFilters: S.optional(__S(32)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PutImageTagMutabilityRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.optional(S.String),
          imageTagMutability: S.optional(S.String),
          imageTagMutabilityExclusionFilters: S.optional(__S(32)),
        }).pipe(ns),
      ).annotate({
        identifier: "PutImageTagMutabilityResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.String,
          lifecyclePolicyText: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PutLifecyclePolicyRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.optional(S.String),
          lifecyclePolicyText: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "PutLifecyclePolicyResponse",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ policyText: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutRegistryPolicyRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          scanType: S.optional(S.String),
          rules: S.optional(__S(139)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PutRegistryScanningConfigurationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ registryScanningConfiguration: S.optional(__S(140)) }).pipe(ns),
      ).annotate({
        identifier: "PutRegistryScanningConfigurationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ replicationConfiguration: __S(110) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PutReplicationConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ replicationConfiguration: S.optional(__S(110)) }).pipe(ns),
      ).annotate({
        identifier: "PutReplicationConfigurationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ signingConfiguration: __S(56) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PutSigningConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ signingConfiguration: S.optional(__S(56)) }).pipe(ns),
      ).annotate({
        identifier: "PutSigningConfigurationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ principalArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RegisterPullTimeUpdateExclusionRequest",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          principalArn: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(ns),
      ).annotate({
        identifier: "RegisterPullTimeUpdateExclusionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.String,
          policyText: S.String,
          force: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SetRepositoryPolicyRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.String,
          imageId: __S(7),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "StartImageScanRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.optional(S.String),
          imageId: S.optional(__S(7)),
          imageScanStatus: S.optional(__S(66)),
        }).pipe(ns),
      ).annotate({ identifier: "StartImageScanResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.String,
          lifecyclePolicyText: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartLifecyclePolicyPreviewRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.optional(S.String),
          lifecyclePolicyText: S.optional(S.String),
          status: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "StartLifecyclePolicyPreviewResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tags: __S(30) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "TagResourceResponse",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tagKeys: __S(0) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.String,
          imageId: __S(7),
          targetStorageClass: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateImageStorageClassRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.optional(S.String),
          imageId: S.optional(__S(7)),
          imageStatus: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "UpdateImageStorageClassResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          ecrRepositoryPrefix: S.String,
          credentialArn: S.optional(S.String),
          customRoleArn: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdatePullThroughCacheRuleRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ecrRepositoryPrefix: S.optional(S.String),
          registryId: S.optional(S.String),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          credentialArn: S.optional(S.String),
          customRoleArn: S.optional(S.String),
          upstreamRepositoryPrefix: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "UpdatePullThroughCacheRuleResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          prefix: S.String,
          description: S.optional(S.String),
          encryptionConfiguration: S.optional(__S(38)),
          resourceTags: S.optional(__S(30)),
          imageTagMutability: S.optional(S.String),
          imageTagMutabilityExclusionFilters: S.optional(__S(32)),
          repositoryPolicy: S.optional(S.String),
          lifecyclePolicy: S.optional(S.String),
          appliedFor: S.optional(__S(39)),
          customRoleArn: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateRepositoryCreationTemplateRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.String,
          uploadId: S.String,
          partFirstByte: S.Number,
          partLastByte: S.Number,
          layerPartBlob: T.Blob,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UploadLayerPartRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          registryId: S.optional(S.String),
          repositoryName: S.optional(S.String),
          uploadId: S.optional(S.String),
          lastByteReceived: S.optional(S.Number),
        }).pipe(ns),
      ).annotate({ identifier: "UploadLayerPartResponse" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ecrRepositoryPrefix: S.String, registryId: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ValidatePullThroughCacheRuleRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ecrRepositoryPrefix: S.optional(S.String),
          registryId: S.optional(S.String),
          upstreamRegistryUrl: S.optional(S.String),
          credentialArn: S.optional(S.String),
          customRoleArn: S.optional(S.String),
          upstreamRepositoryPrefix: S.optional(S.String),
          isValid: S.optional(S.Boolean),
          failure: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ValidatePullThroughCacheRuleResponse",
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
  }
}
