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
const ns = /*@__PURE__*/ T.XmlNamespace(
  "http://elasticloadbalancing.amazonaws.com/doc/2015-12-01/",
);
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Elastic Load Balancing v2",
  serviceShapeName: "ElasticLoadBalancing_v10",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "elasticloadbalancing" });
const ver = /*@__PURE__*/ T.ServiceVersion("2015-12-01");
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
              `https://elasticloadbalancing-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            if (_.getAttr(PartitionResult, "name") === "aws-us-gov") {
              return e(`https://elasticloadbalancing.${Region}.amazonaws.com`);
            }
            return e(
              `https://elasticloadbalancing-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://elasticloadbalancing.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://elasticloadbalancing.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AllocationIdNotFoundException
  extends /*@__PURE__*/ S.TaggedError<AllocationIdNotFoundException>()(
    "AllocationIdNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "AllocationIdNotFound", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ALPNPolicyNotSupportedException
  extends /*@__PURE__*/ S.TaggedError<ALPNPolicyNotSupportedException>()(
    "ALPNPolicyNotSupportedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ALPNPolicyNotFound", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class AvailabilityZoneNotSupportedException
  extends /*@__PURE__*/ S.TaggedError<AvailabilityZoneNotSupportedException>()(
    "AvailabilityZoneNotSupportedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "AvailabilityZoneNotSupported",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class CaCertificatesBundleNotFoundException
  extends /*@__PURE__*/ S.TaggedError<CaCertificatesBundleNotFoundException>()(
    "CaCertificatesBundleNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "CaCertificatesBundleNotFound",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class CapacityDecreaseRequestsLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<CapacityDecreaseRequestsLimitExceededException>()(
    "CapacityDecreaseRequestsLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "CapacityDecreaseRequestLimitExceeded",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class CapacityReservationPendingException
  extends /*@__PURE__*/ S.TaggedError<CapacityReservationPendingException>()(
    "CapacityReservationPendingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "CapacityReservationPending", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class CapacityUnitsLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<CapacityUnitsLimitExceededException>()(
    "CapacityUnitsLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "CapacityUnitsLimitExceeded", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class CertificateNotFoundException
  extends /*@__PURE__*/ S.TaggedError<CertificateNotFoundException>()(
    "CertificateNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "CertificateNotFound", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class DeleteAssociationSameAccountException
  extends /*@__PURE__*/ S.TaggedError<DeleteAssociationSameAccountException>()(
    "DeleteAssociationSameAccountException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "DeleteAssociationSameAccount",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class DuplicateListenerException
  extends /*@__PURE__*/ S.TaggedError<DuplicateListenerException>()(
    "DuplicateListenerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DuplicateListener", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class DuplicateLoadBalancerNameException
  extends /*@__PURE__*/ S.TaggedError<DuplicateLoadBalancerNameException>()(
    "DuplicateLoadBalancerNameException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DuplicateLoadBalancerName", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class DuplicateTagKeysException
  extends /*@__PURE__*/ S.TaggedError<DuplicateTagKeysException>()(
    "DuplicateTagKeysException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DuplicateTagKeys", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class DuplicateTargetGroupNameException
  extends /*@__PURE__*/ S.TaggedError<DuplicateTargetGroupNameException>()(
    "DuplicateTargetGroupNameException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DuplicateTargetGroupName", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class DuplicateTrustStoreNameException
  extends /*@__PURE__*/ S.TaggedError<DuplicateTrustStoreNameException>()(
    "DuplicateTrustStoreNameException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DuplicateTrustStoreName", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class HealthUnavailableException
  extends /*@__PURE__*/ S.TaggedError<HealthUnavailableException>()(
    "HealthUnavailableException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "HealthUnavailable", httpResponseCode: 500 }),
      /*@__PURE__*/ T.HttpError(500),
    ),
  ).pipe(C.withServerError) {}
export class IncompatibleProtocolsException
  extends /*@__PURE__*/ S.TaggedError<IncompatibleProtocolsException>()(
    "IncompatibleProtocolsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "IncompatibleProtocols", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InsufficientCapacityException
  extends /*@__PURE__*/ S.TaggedError<InsufficientCapacityException>()(
    "InsufficientCapacityException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InsufficientCapacity", httpResponseCode: 500 }),
      /*@__PURE__*/ T.HttpError(500),
    ),
  ).pipe(C.withServerError) {}
export class InvalidCaCertificatesBundleException
  extends /*@__PURE__*/ S.TaggedError<InvalidCaCertificatesBundleException>()(
    "InvalidCaCertificatesBundleException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidCaCertificatesBundle", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidConfigurationRequestException
  extends /*@__PURE__*/ S.TaggedError<InvalidConfigurationRequestException>()(
    "InvalidConfigurationRequestException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidConfigurationRequest", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidLoadBalancerActionException
  extends /*@__PURE__*/ S.TaggedError<InvalidLoadBalancerActionException>()(
    "InvalidLoadBalancerActionException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidLoadBalancerAction", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidRevocationContentException
  extends /*@__PURE__*/ S.TaggedError<InvalidRevocationContentException>()(
    "InvalidRevocationContentException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidRevocationContent", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidSchemeException
  extends /*@__PURE__*/ S.TaggedError<InvalidSchemeException>()(
    "InvalidSchemeException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidScheme", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidSecurityGroupException
  extends /*@__PURE__*/ S.TaggedError<InvalidSecurityGroupException>()(
    "InvalidSecurityGroupException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidSecurityGroup", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidSubnetException
  extends /*@__PURE__*/ S.TaggedError<InvalidSubnetException>()(
    "InvalidSubnetException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidSubnet", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidTargetException
  extends /*@__PURE__*/ S.TaggedError<InvalidTargetException>()(
    "InvalidTargetException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidTarget", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ListenerNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ListenerNotFoundException>()(
    "ListenerNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ListenerNotFound", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class LoadBalancerNotFoundException
  extends /*@__PURE__*/ S.TaggedError<LoadBalancerNotFoundException>()(
    "LoadBalancerNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "LoadBalancerNotFound", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class OperationNotPermittedException
  extends /*@__PURE__*/ S.TaggedError<OperationNotPermittedException>()(
    "OperationNotPermittedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "OperationNotPermitted", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class PriorityInUseException
  extends /*@__PURE__*/ S.TaggedError<PriorityInUseException>()(
    "PriorityInUseException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "PriorityInUse", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class PriorRequestNotCompleteException
  extends /*@__PURE__*/ S.TaggedError<PriorRequestNotCompleteException>()(
    "PriorRequestNotCompleteException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "PriorRequestNotComplete", httpResponseCode: 429 }),
      /*@__PURE__*/ T.HttpError(429),
    ),
  ).pipe(C.withThrottlingError) {}
export class ResourceInUseException
  extends /*@__PURE__*/ S.TaggedError<ResourceInUseException>()(
    "ResourceInUseException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ResourceInUse", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ResourceNotFound", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class RevocationContentNotFoundException
  extends /*@__PURE__*/ S.TaggedError<RevocationContentNotFoundException>()(
    "RevocationContentNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "RevocationContentNotFound", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class RevocationIdNotFoundException
  extends /*@__PURE__*/ S.TaggedError<RevocationIdNotFoundException>()(
    "RevocationIdNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "RevocationIdNotFound", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class RuleNotFoundException
  extends /*@__PURE__*/ S.TaggedError<RuleNotFoundException>()(
    "RuleNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "RuleNotFound", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class SSLPolicyNotFoundException
  extends /*@__PURE__*/ S.TaggedError<SSLPolicyNotFoundException>()(
    "SSLPolicyNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SSLPolicyNotFound", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class SubnetNotFoundException
  extends /*@__PURE__*/ S.TaggedError<SubnetNotFoundException>()(
    "SubnetNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SubnetNotFound", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TargetGroupAssociationLimitException
  extends /*@__PURE__*/ S.TaggedError<TargetGroupAssociationLimitException>()(
    "TargetGroupAssociationLimitException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TargetGroupAssociationLimit", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TargetGroupNotFoundException
  extends /*@__PURE__*/ S.TaggedError<TargetGroupNotFoundException>()(
    "TargetGroupNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TargetGroupNotFound", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TooManyActionsException
  extends /*@__PURE__*/ S.TaggedError<TooManyActionsException>()(
    "TooManyActionsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TooManyActions", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TooManyCertificatesException
  extends /*@__PURE__*/ S.TaggedError<TooManyCertificatesException>()(
    "TooManyCertificatesException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TooManyCertificates", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TooManyListenersException
  extends /*@__PURE__*/ S.TaggedError<TooManyListenersException>()(
    "TooManyListenersException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TooManyListeners", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TooManyLoadBalancersException
  extends /*@__PURE__*/ S.TaggedError<TooManyLoadBalancersException>()(
    "TooManyLoadBalancersException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TooManyLoadBalancers", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TooManyRegistrationsForTargetIdException
  extends /*@__PURE__*/ S.TaggedError<TooManyRegistrationsForTargetIdException>()(
    "TooManyRegistrationsForTargetIdException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "TooManyRegistrationsForTargetId",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TooManyRulesException
  extends /*@__PURE__*/ S.TaggedError<TooManyRulesException>()(
    "TooManyRulesException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TooManyRules", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TooManyTagsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTagsException>()(
    "TooManyTagsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TooManyTags", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TooManyTargetGroupsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTargetGroupsException>()(
    "TooManyTargetGroupsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TooManyTargetGroups", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TooManyTargetsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTargetsException>()(
    "TooManyTargetsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TooManyTargets", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TooManyTrustStoreRevocationEntriesException
  extends /*@__PURE__*/ S.TaggedError<TooManyTrustStoreRevocationEntriesException>()(
    "TooManyTrustStoreRevocationEntriesException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "TooManyTrustStoreRevocationEntries",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TooManyTrustStoresException
  extends /*@__PURE__*/ S.TaggedError<TooManyTrustStoresException>()(
    "TooManyTrustStoresException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TooManyTrustStores", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TooManyUniqueTargetGroupsPerLoadBalancerException
  extends /*@__PURE__*/ S.TaggedError<TooManyUniqueTargetGroupsPerLoadBalancerException>()(
    "TooManyUniqueTargetGroupsPerLoadBalancerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "TooManyUniqueTargetGroupsPerLoadBalancer",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TrustStoreAssociationNotFoundException
  extends /*@__PURE__*/ S.TaggedError<TrustStoreAssociationNotFoundException>()(
    "TrustStoreAssociationNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "AssociationNotFound", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TrustStoreInUseException
  extends /*@__PURE__*/ S.TaggedError<TrustStoreInUseException>()(
    "TrustStoreInUseException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TrustStoreInUse", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TrustStoreNotFoundException
  extends /*@__PURE__*/ S.TaggedError<TrustStoreNotFoundException>()(
    "TrustStoreNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TrustStoreNotFound", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TrustStoreNotReadyException
  extends /*@__PURE__*/ S.TaggedError<TrustStoreNotReadyException>()(
    "TrustStoreNotReadyException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TrustStoreNotReady", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class UnsupportedProtocolException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedProtocolException>()(
    "UnsupportedProtocolException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "UnsupportedProtocol", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export type ListenerArn = string;
export type CertificateArn = string;
export type Default = boolean;
export interface Certificate {
  CertificateArn?: string;
  IsDefault?: boolean;
}
export type CertificateList = Certificate[];
export interface AddListenerCertificatesInput {
  ListenerArn?: string;
  Certificates?: Certificate[];
}
export interface AddListenerCertificatesOutput {
  Certificates?: Certificate[];
}
export type ResourceArn = string;
export type ResourceArns = string[];
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagList = Tag[];
export interface AddTagsInput {
  ResourceArns?: string[];
  Tags?: Tag[];
}
export interface AddTagsOutput {}
export type TrustStoreArn = string;
export type S3Bucket = string;
export type S3Key = string;
export type S3ObjectVersion = string;
export type RevocationType = "CRL" | (string & {});
export interface RevocationContent {
  S3Bucket?: string;
  S3Key?: string;
  S3ObjectVersion?: string;
  RevocationType?: RevocationType;
}
export type RevocationContents = RevocationContent[];
export interface AddTrustStoreRevocationsInput {
  TrustStoreArn?: string;
  RevocationContents?: RevocationContent[];
}
export type RevocationId = number;
export type NumberOfRevokedEntries = number;
export interface TrustStoreRevocation {
  TrustStoreArn?: string;
  RevocationId?: number;
  RevocationType?: RevocationType;
  NumberOfRevokedEntries?: number;
}
export type TrustStoreRevocations = TrustStoreRevocation[];
export interface AddTrustStoreRevocationsOutput {
  TrustStoreRevocations?: TrustStoreRevocation[];
}
export type LoadBalancerArn = string;
export type ProtocolEnum =
  | "HTTP"
  | "HTTPS"
  | "TCP"
  | "TLS"
  | "UDP"
  | "TCP_UDP"
  | "GENEVE"
  | "QUIC"
  | "TCP_QUIC"
  | (string & {});
export type Port = number;
export type SslPolicyName = string;
export type ActionTypeEnum =
  | "forward"
  | "authenticate-oidc"
  | "authenticate-cognito"
  | "redirect"
  | "fixed-response"
  | "jwt-validation"
  | (string & {});
export type TargetGroupArn = string;
export type AuthenticateOidcActionIssuer = string;
export type AuthenticateOidcActionAuthorizationEndpoint = string;
export type AuthenticateOidcActionTokenEndpoint = string;
export type AuthenticateOidcActionUserInfoEndpoint = string;
export type AuthenticateOidcActionClientId = string;
export type AuthenticateOidcActionClientSecret = string;
export type AuthenticateOidcActionSessionCookieName = string;
export type AuthenticateOidcActionScope = string;
export type AuthenticateOidcActionSessionTimeout = number;
export type AuthenticateOidcActionAuthenticationRequestParamName = string;
export type AuthenticateOidcActionAuthenticationRequestParamValue = string;
export type AuthenticateOidcActionAuthenticationRequestExtraParams = {
  [key: string]: string | undefined;
};
export type AuthenticateOidcActionConditionalBehaviorEnum =
  | "deny"
  | "allow"
  | "authenticate"
  | (string & {});
export type AuthenticateOidcActionUseExistingClientSecret = boolean;
export interface AuthenticateOidcActionConfig {
  Issuer?: string;
  AuthorizationEndpoint?: string;
  TokenEndpoint?: string;
  UserInfoEndpoint?: string;
  ClientId?: string;
  ClientSecret?: string | redacted.Redacted<string>;
  SessionCookieName?: string;
  Scope?: string;
  SessionTimeout?: number;
  AuthenticationRequestExtraParams?: { [key: string]: string | undefined };
  OnUnauthenticatedRequest?: AuthenticateOidcActionConditionalBehaviorEnum;
  UseExistingClientSecret?: boolean;
}
export type AuthenticateCognitoActionUserPoolArn = string;
export type AuthenticateCognitoActionUserPoolClientId = string;
export type AuthenticateCognitoActionUserPoolDomain = string;
export type AuthenticateCognitoActionSessionCookieName = string;
export type AuthenticateCognitoActionScope = string;
export type AuthenticateCognitoActionSessionTimeout = number;
export type AuthenticateCognitoActionAuthenticationRequestParamName = string;
export type AuthenticateCognitoActionAuthenticationRequestParamValue = string;
export type AuthenticateCognitoActionAuthenticationRequestExtraParams = {
  [key: string]: string | undefined;
};
export type AuthenticateCognitoActionConditionalBehaviorEnum =
  | "deny"
  | "allow"
  | "authenticate"
  | (string & {});
export interface AuthenticateCognitoActionConfig {
  UserPoolArn?: string;
  UserPoolClientId?: string;
  UserPoolDomain?: string;
  SessionCookieName?: string;
  Scope?: string;
  SessionTimeout?: number;
  AuthenticationRequestExtraParams?: { [key: string]: string | undefined };
  OnUnauthenticatedRequest?: AuthenticateCognitoActionConditionalBehaviorEnum;
}
export type ActionOrder = number;
export type RedirectActionProtocol = string;
export type RedirectActionPort = string;
export type RedirectActionHost = string;
export type RedirectActionPath = string;
export type RedirectActionQuery = string;
export type RedirectActionStatusCodeEnum = "HTTP_301" | "HTTP_302" | (string & {});
export interface RedirectActionConfig {
  Protocol?: string;
  Port?: string;
  Host?: string;
  Path?: string;
  Query?: string;
  StatusCode?: RedirectActionStatusCodeEnum;
}
export type FixedResponseActionMessage = string;
export type FixedResponseActionStatusCode = string;
export type FixedResponseActionContentType = string;
export interface FixedResponseActionConfig {
  MessageBody?: string;
  StatusCode?: string;
  ContentType?: string;
}
export type TargetGroupWeight = number;
export interface TargetGroupTuple {
  TargetGroupArn?: string;
  Weight?: number;
}
export type TargetGroupList = TargetGroupTuple[];
export type TargetGroupStickinessEnabled = boolean;
export type TargetGroupStickinessDurationSeconds = number;
export interface TargetGroupStickinessConfig {
  Enabled?: boolean;
  DurationSeconds?: number;
}
export interface ForwardActionConfig {
  TargetGroups?: TargetGroupTuple[];
  TargetGroupStickinessConfig?: TargetGroupStickinessConfig;
}
export type JwtValidationActionJwksEndpoint = string;
export type JwtValidationActionIssuer = string;
export type JwtValidationActionAdditionalClaimFormatEnum =
  | "single-string"
  | "string-array"
  | "space-separated-values"
  | (string & {});
export type JwtValidationActionAdditionalClaimName = string;
export type JwtValidationActionAdditionalClaimValue = string;
export type JwtValidationActionAdditionalClaimValues = string[];
export interface JwtValidationActionAdditionalClaim {
  Format?: JwtValidationActionAdditionalClaimFormatEnum;
  Name?: string;
  Values?: string[];
}
export type JwtValidationActionAdditionalClaims = JwtValidationActionAdditionalClaim[];
export interface JwtValidationActionConfig {
  JwksEndpoint?: string;
  Issuer?: string;
  AdditionalClaims?: JwtValidationActionAdditionalClaim[];
}
export interface Action {
  Type?: ActionTypeEnum;
  TargetGroupArn?: string;
  AuthenticateOidcConfig?: AuthenticateOidcActionConfig;
  AuthenticateCognitoConfig?: AuthenticateCognitoActionConfig;
  Order?: number;
  RedirectConfig?: RedirectActionConfig;
  FixedResponseConfig?: FixedResponseActionConfig;
  ForwardConfig?: ForwardActionConfig;
  JwtValidationConfig?: JwtValidationActionConfig;
}
export type Actions = Action[];
export type AlpnPolicyValue = string;
export type AlpnPolicyName = string[];
export type Mode = string;
export type IgnoreClientCertificateExpiry = boolean;
export type TrustStoreAssociationStatusEnum = "active" | "removed" | (string & {});
export type AdvertiseTrustStoreCaNamesEnum = "on" | "off" | (string & {});
export interface MutualAuthenticationAttributes {
  Mode?: string;
  TrustStoreArn?: string;
  IgnoreClientCertificateExpiry?: boolean;
  TrustStoreAssociationStatus?: TrustStoreAssociationStatusEnum;
  AdvertiseTrustStoreCaNames?: AdvertiseTrustStoreCaNamesEnum;
}
export interface CreateListenerInput {
  LoadBalancerArn?: string;
  Protocol?: ProtocolEnum;
  Port?: number;
  SslPolicy?: string;
  Certificates?: Certificate[];
  DefaultActions?: Action[];
  AlpnPolicy?: string[];
  Tags?: Tag[];
  MutualAuthentication?: MutualAuthenticationAttributes;
}
export interface Listener {
  ListenerArn?: string;
  LoadBalancerArn?: string;
  Port?: number;
  Protocol?: ProtocolEnum;
  Certificates?: Certificate[];
  SslPolicy?: string;
  DefaultActions?: Action[];
  AlpnPolicy?: string[];
  MutualAuthentication?: MutualAuthenticationAttributes;
}
export type Listeners = Listener[];
export interface CreateListenerOutput {
  Listeners?: (Listener & {
    DefaultActions: (Action & {
      Type: ActionTypeEnum;
      AuthenticateOidcConfig: AuthenticateOidcActionConfig & {
        Issuer: AuthenticateOidcActionIssuer;
        AuthorizationEndpoint: AuthenticateOidcActionAuthorizationEndpoint;
        TokenEndpoint: AuthenticateOidcActionTokenEndpoint;
        UserInfoEndpoint: AuthenticateOidcActionUserInfoEndpoint;
        ClientId: AuthenticateOidcActionClientId;
      };
      AuthenticateCognitoConfig: AuthenticateCognitoActionConfig & {
        UserPoolArn: AuthenticateCognitoActionUserPoolArn;
        UserPoolClientId: AuthenticateCognitoActionUserPoolClientId;
        UserPoolDomain: AuthenticateCognitoActionUserPoolDomain;
      };
      RedirectConfig: RedirectActionConfig & { StatusCode: RedirectActionStatusCodeEnum };
      FixedResponseConfig: FixedResponseActionConfig & {
        StatusCode: FixedResponseActionStatusCode;
      };
      JwtValidationConfig: JwtValidationActionConfig & {
        JwksEndpoint: JwtValidationActionJwksEndpoint;
        Issuer: JwtValidationActionIssuer;
        AdditionalClaims: (JwtValidationActionAdditionalClaim & {
          Format: JwtValidationActionAdditionalClaimFormatEnum;
          Name: JwtValidationActionAdditionalClaimName;
          Values: JwtValidationActionAdditionalClaimValues;
        })[];
      };
    })[];
  })[];
}
export type LoadBalancerName = string;
export type SubnetId = string;
export type Subnets = string[];
export type AllocationId = string;
export type PrivateIPv4Address = string;
export type IPv6Address = string;
export type SourceNatIpv6Prefix = string;
export interface SubnetMapping {
  SubnetId?: string;
  AllocationId?: string;
  PrivateIPv4Address?: string;
  IPv6Address?: string;
  SourceNatIpv6Prefix?: string;
}
export type SubnetMappings = SubnetMapping[];
export type SecurityGroupId = string;
export type SecurityGroups = string[];
export type LoadBalancerSchemeEnum = "internet-facing" | "internal" | (string & {});
export type LoadBalancerTypeEnum = "application" | "network" | "gateway" | (string & {});
export type IpAddressType = "ipv4" | "dualstack" | "dualstack-without-public-ipv4" | (string & {});
export type CustomerOwnedIpv4Pool = string;
export type EnablePrefixForIpv6SourceNatEnum = "on" | "off" | (string & {});
export type IpamPoolId = string;
export interface IpamPools {
  Ipv4IpamPoolId?: string;
}
export interface CreateLoadBalancerInput {
  Name?: string;
  Subnets?: string[];
  SubnetMappings?: SubnetMapping[];
  SecurityGroups?: string[];
  Scheme?: LoadBalancerSchemeEnum;
  Tags?: Tag[];
  Type?: LoadBalancerTypeEnum;
  IpAddressType?: IpAddressType;
  CustomerOwnedIpv4Pool?: string;
  EnablePrefixForIpv6SourceNat?: EnablePrefixForIpv6SourceNatEnum;
  IpamPools?: IpamPools;
}
export type DNSName = string;
export type CanonicalHostedZoneId = string;
export type CreatedTime = Date;
export type VpcId = string;
export type LoadBalancerStateEnum =
  | "active"
  | "provisioning"
  | "active_impaired"
  | "failed"
  | (string & {});
export type StateReason = string;
export interface LoadBalancerState {
  Code?: LoadBalancerStateEnum;
  Reason?: string;
}
export type ZoneName = string;
export type OutpostId = string;
export type IpAddress = string;
export interface LoadBalancerAddress {
  IpAddress?: string;
  AllocationId?: string;
  PrivateIPv4Address?: string;
  IPv6Address?: string;
}
export type LoadBalancerAddresses = LoadBalancerAddress[];
export type SourceNatIpv6Prefixes = string[];
export interface AvailabilityZone {
  ZoneName?: string;
  SubnetId?: string;
  OutpostId?: string;
  LoadBalancerAddresses?: LoadBalancerAddress[];
  SourceNatIpv6Prefixes?: string[];
}
export type AvailabilityZones = AvailabilityZone[];
export type EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic = string;
export interface LoadBalancer {
  LoadBalancerArn?: string;
  DNSName?: string;
  CanonicalHostedZoneId?: string;
  CreatedTime?: Date;
  LoadBalancerName?: string;
  Scheme?: LoadBalancerSchemeEnum;
  VpcId?: string;
  State?: LoadBalancerState;
  Type?: LoadBalancerTypeEnum;
  AvailabilityZones?: AvailabilityZone[];
  SecurityGroups?: string[];
  IpAddressType?: IpAddressType;
  CustomerOwnedIpv4Pool?: string;
  EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic?: string;
  EnablePrefixForIpv6SourceNat?: EnablePrefixForIpv6SourceNatEnum;
  IpamPools?: IpamPools;
}
export type LoadBalancers = LoadBalancer[];
export interface CreateLoadBalancerOutput {
  LoadBalancers?: LoadBalancer[];
}
export type ConditionFieldName = string;
export type StringValue = string;
export type ListOfString = string[];
export interface HostHeaderConditionConfig {
  Values?: string[];
  RegexValues?: string[];
}
export interface PathPatternConditionConfig {
  Values?: string[];
  RegexValues?: string[];
}
export type HttpHeaderConditionName = string;
export interface HttpHeaderConditionConfig {
  HttpHeaderName?: string;
  Values?: string[];
  RegexValues?: string[];
}
export interface QueryStringKeyValuePair {
  Key?: string;
  Value?: string;
}
export type QueryStringKeyValuePairList = QueryStringKeyValuePair[];
export interface QueryStringConditionConfig {
  Values?: QueryStringKeyValuePair[];
}
export interface HttpRequestMethodConditionConfig {
  Values?: string[];
}
export type SourceIpAddressTypeEnum = "ipv4" | "ipv6" | (string & {});
export interface SourceIpConditionConfig {
  Values?: string[];
  IpAddressType?: SourceIpAddressTypeEnum;
}
export interface RuleCondition {
  Field?: string;
  Values?: string[];
  HostHeaderConfig?: HostHeaderConditionConfig;
  PathPatternConfig?: PathPatternConditionConfig;
  HttpHeaderConfig?: HttpHeaderConditionConfig;
  QueryStringConfig?: QueryStringConditionConfig;
  HttpRequestMethodConfig?: HttpRequestMethodConditionConfig;
  SourceIpConfig?: SourceIpConditionConfig;
  RegexValues?: string[];
}
export type RuleConditionList = RuleCondition[];
export type RulePriority = number;
export type TransformTypeEnum = "host-header-rewrite" | "url-rewrite" | (string & {});
export interface RewriteConfig {
  Regex?: string;
  Replace?: string;
}
export type RewriteConfigList = RewriteConfig[];
export interface HostHeaderRewriteConfig {
  Rewrites?: RewriteConfig[];
}
export interface UrlRewriteConfig {
  Rewrites?: RewriteConfig[];
}
export interface RuleTransform {
  Type?: TransformTypeEnum;
  HostHeaderRewriteConfig?: HostHeaderRewriteConfig;
  UrlRewriteConfig?: UrlRewriteConfig;
}
export type RuleTransformList = RuleTransform[];
export interface CreateRuleInput {
  ListenerArn?: string;
  Conditions?: RuleCondition[];
  Priority?: number;
  Actions?: Action[];
  Tags?: Tag[];
  Transforms?: RuleTransform[];
}
export type RuleArn = string;
export type IsDefault = boolean;
export interface Rule {
  RuleArn?: string;
  Priority?: string;
  Conditions?: RuleCondition[];
  Actions?: Action[];
  IsDefault?: boolean;
  Transforms?: RuleTransform[];
}
export type Rules = Rule[];
export interface CreateRuleOutput {
  Rules?: (Rule & {
    Actions: (Action & {
      Type: ActionTypeEnum;
      AuthenticateOidcConfig: AuthenticateOidcActionConfig & {
        Issuer: AuthenticateOidcActionIssuer;
        AuthorizationEndpoint: AuthenticateOidcActionAuthorizationEndpoint;
        TokenEndpoint: AuthenticateOidcActionTokenEndpoint;
        UserInfoEndpoint: AuthenticateOidcActionUserInfoEndpoint;
        ClientId: AuthenticateOidcActionClientId;
      };
      AuthenticateCognitoConfig: AuthenticateCognitoActionConfig & {
        UserPoolArn: AuthenticateCognitoActionUserPoolArn;
        UserPoolClientId: AuthenticateCognitoActionUserPoolClientId;
        UserPoolDomain: AuthenticateCognitoActionUserPoolDomain;
      };
      RedirectConfig: RedirectActionConfig & { StatusCode: RedirectActionStatusCodeEnum };
      FixedResponseConfig: FixedResponseActionConfig & {
        StatusCode: FixedResponseActionStatusCode;
      };
      JwtValidationConfig: JwtValidationActionConfig & {
        JwksEndpoint: JwtValidationActionJwksEndpoint;
        Issuer: JwtValidationActionIssuer;
        AdditionalClaims: (JwtValidationActionAdditionalClaim & {
          Format: JwtValidationActionAdditionalClaimFormatEnum;
          Name: JwtValidationActionAdditionalClaimName;
          Values: JwtValidationActionAdditionalClaimValues;
        })[];
      };
    })[];
    Transforms: (RuleTransform & {
      Type: TransformTypeEnum;
      HostHeaderRewriteConfig: HostHeaderRewriteConfig & {
        Rewrites: (RewriteConfig & { Regex: StringValue; Replace: StringValue })[];
      };
      UrlRewriteConfig: UrlRewriteConfig & {
        Rewrites: (RewriteConfig & { Regex: StringValue; Replace: StringValue })[];
      };
    })[];
  })[];
}
export type TargetGroupName = string;
export type ProtocolVersion = string;
export type HealthCheckPort = string;
export type HealthCheckEnabled = boolean;
export type Path = string;
export type HealthCheckIntervalSeconds = number;
export type HealthCheckTimeoutSeconds = number;
export type HealthCheckThresholdCount = number;
export type HttpCode = string;
export type GrpcCode = string;
export interface Matcher {
  HttpCode?: string;
  GrpcCode?: string;
}
export type TargetTypeEnum = "instance" | "ip" | "lambda" | "alb" | (string & {});
export type TargetGroupIpAddressTypeEnum = "ipv4" | "ipv6" | (string & {});
export type TargetControlPort = number;
export interface CreateTargetGroupInput {
  Name?: string;
  Protocol?: ProtocolEnum;
  ProtocolVersion?: string;
  Port?: number;
  VpcId?: string;
  HealthCheckProtocol?: ProtocolEnum;
  HealthCheckPort?: string;
  HealthCheckEnabled?: boolean;
  HealthCheckPath?: string;
  HealthCheckIntervalSeconds?: number;
  HealthCheckTimeoutSeconds?: number;
  HealthyThresholdCount?: number;
  UnhealthyThresholdCount?: number;
  Matcher?: Matcher;
  TargetType?: TargetTypeEnum;
  Tags?: Tag[];
  IpAddressType?: TargetGroupIpAddressTypeEnum;
  TargetControlPort?: number;
}
export type LoadBalancerArns = string[];
export interface TargetGroup {
  TargetGroupArn?: string;
  TargetGroupName?: string;
  Protocol?: ProtocolEnum;
  Port?: number;
  VpcId?: string;
  HealthCheckProtocol?: ProtocolEnum;
  HealthCheckPort?: string;
  HealthCheckEnabled?: boolean;
  HealthCheckIntervalSeconds?: number;
  HealthCheckTimeoutSeconds?: number;
  HealthyThresholdCount?: number;
  UnhealthyThresholdCount?: number;
  HealthCheckPath?: string;
  Matcher?: Matcher;
  LoadBalancerArns?: string[];
  TargetType?: TargetTypeEnum;
  ProtocolVersion?: string;
  IpAddressType?: TargetGroupIpAddressTypeEnum;
  TargetControlPort?: number;
}
export type TargetGroups = TargetGroup[];
export interface CreateTargetGroupOutput {
  TargetGroups?: TargetGroup[];
}
export type TrustStoreName = string;
export interface CreateTrustStoreInput {
  Name?: string;
  CaCertificatesBundleS3Bucket?: string;
  CaCertificatesBundleS3Key?: string;
  CaCertificatesBundleS3ObjectVersion?: string;
  Tags?: Tag[];
}
export type TrustStoreStatus = "ACTIVE" | "CREATING" | (string & {});
export type NumberOfCaCertificates = number;
export type TotalRevokedEntries = number;
export interface TrustStore {
  Name?: string;
  TrustStoreArn?: string;
  Status?: TrustStoreStatus;
  NumberOfCaCertificates?: number;
  TotalRevokedEntries?: number;
}
export type TrustStores = TrustStore[];
export interface CreateTrustStoreOutput {
  TrustStores?: TrustStore[];
}
export interface DeleteListenerInput {
  ListenerArn?: string;
}
export interface DeleteListenerOutput {}
export interface DeleteLoadBalancerInput {
  LoadBalancerArn?: string;
}
export interface DeleteLoadBalancerOutput {}
export interface DeleteRuleInput {
  RuleArn?: string;
}
export interface DeleteRuleOutput {}
export interface DeleteSharedTrustStoreAssociationInput {
  TrustStoreArn?: string;
  ResourceArn?: string;
}
export interface DeleteSharedTrustStoreAssociationOutput {}
export interface DeleteTargetGroupInput {
  TargetGroupArn?: string;
}
export interface DeleteTargetGroupOutput {}
export interface DeleteTrustStoreInput {
  TrustStoreArn?: string;
}
export interface DeleteTrustStoreOutput {}
export type TargetId = string;
export type QuicServerId = string;
export interface TargetDescription {
  Id?: string;
  Port?: number;
  AvailabilityZone?: string;
  QuicServerId?: string;
}
export type TargetDescriptions = TargetDescription[];
export interface DeregisterTargetsInput {
  TargetGroupArn?: string;
  Targets?: TargetDescription[];
}
export interface DeregisterTargetsOutput {}
export type Marker = string;
export type PageSize = number;
export interface DescribeAccountLimitsInput {
  Marker?: string;
  PageSize?: number;
}
export type Name = string;
export type Max = string;
export interface Limit {
  Name?: string;
  Max?: string;
}
export type Limits = Limit[];
export interface DescribeAccountLimitsOutput {
  Limits?: Limit[];
  NextMarker?: string;
}
export interface DescribeCapacityReservationInput {
  LoadBalancerArn?: string;
}
export type LastModifiedTime = Date;
export type DecreaseRequestsRemaining = number;
export type CapacityUnits = number;
export interface MinimumLoadBalancerCapacity {
  CapacityUnits?: number;
}
export type CapacityReservationStateEnum =
  | "provisioned"
  | "pending"
  | "rebalancing"
  | "failed"
  | (string & {});
export interface CapacityReservationStatus {
  Code?: CapacityReservationStateEnum;
  Reason?: string;
}
export type CapacityUnitsDouble = number;
export interface ZonalCapacityReservationState {
  State?: CapacityReservationStatus;
  AvailabilityZone?: string;
  EffectiveCapacityUnits?: number;
}
export type ZonalCapacityReservationStates = ZonalCapacityReservationState[];
export interface DescribeCapacityReservationOutput {
  LastModifiedTime?: Date;
  DecreaseRequestsRemaining?: number;
  MinimumLoadBalancerCapacity?: MinimumLoadBalancerCapacity;
  CapacityReservationState?: ZonalCapacityReservationState[];
}
export interface DescribeListenerAttributesInput {
  ListenerArn?: string;
}
export type ListenerAttributeKey = string;
export type ListenerAttributeValue = string;
export interface ListenerAttribute {
  Key?: string;
  Value?: string;
}
export type ListenerAttributes = ListenerAttribute[];
export interface DescribeListenerAttributesOutput {
  Attributes?: ListenerAttribute[];
}
export interface DescribeListenerCertificatesInput {
  ListenerArn?: string;
  Marker?: string;
  PageSize?: number;
}
export interface DescribeListenerCertificatesOutput {
  Certificates?: Certificate[];
  NextMarker?: string;
}
export type ListenerArns = string[];
export interface DescribeListenersInput {
  LoadBalancerArn?: string;
  ListenerArns?: string[];
  Marker?: string;
  PageSize?: number;
}
export interface DescribeListenersOutput {
  Listeners?: (Listener & {
    DefaultActions: (Action & {
      Type: ActionTypeEnum;
      AuthenticateOidcConfig: AuthenticateOidcActionConfig & {
        Issuer: AuthenticateOidcActionIssuer;
        AuthorizationEndpoint: AuthenticateOidcActionAuthorizationEndpoint;
        TokenEndpoint: AuthenticateOidcActionTokenEndpoint;
        UserInfoEndpoint: AuthenticateOidcActionUserInfoEndpoint;
        ClientId: AuthenticateOidcActionClientId;
      };
      AuthenticateCognitoConfig: AuthenticateCognitoActionConfig & {
        UserPoolArn: AuthenticateCognitoActionUserPoolArn;
        UserPoolClientId: AuthenticateCognitoActionUserPoolClientId;
        UserPoolDomain: AuthenticateCognitoActionUserPoolDomain;
      };
      RedirectConfig: RedirectActionConfig & { StatusCode: RedirectActionStatusCodeEnum };
      FixedResponseConfig: FixedResponseActionConfig & {
        StatusCode: FixedResponseActionStatusCode;
      };
      JwtValidationConfig: JwtValidationActionConfig & {
        JwksEndpoint: JwtValidationActionJwksEndpoint;
        Issuer: JwtValidationActionIssuer;
        AdditionalClaims: (JwtValidationActionAdditionalClaim & {
          Format: JwtValidationActionAdditionalClaimFormatEnum;
          Name: JwtValidationActionAdditionalClaimName;
          Values: JwtValidationActionAdditionalClaimValues;
        })[];
      };
    })[];
  })[];
  NextMarker?: string;
}
export interface DescribeLoadBalancerAttributesInput {
  LoadBalancerArn?: string;
}
export type LoadBalancerAttributeKey = string;
export type LoadBalancerAttributeValue = string;
export interface LoadBalancerAttribute {
  Key?: string;
  Value?: string;
}
export type LoadBalancerAttributes = LoadBalancerAttribute[];
export interface DescribeLoadBalancerAttributesOutput {
  Attributes?: LoadBalancerAttribute[];
}
export type LoadBalancerNames = string[];
export interface DescribeLoadBalancersInput {
  LoadBalancerArns?: string[];
  Names?: string[];
  Marker?: string;
  PageSize?: number;
}
export interface DescribeLoadBalancersOutput {
  LoadBalancers?: LoadBalancer[];
  NextMarker?: string;
}
export type RuleArns = string[];
export interface DescribeRulesInput {
  ListenerArn?: string;
  RuleArns?: string[];
  Marker?: string;
  PageSize?: number;
}
export interface DescribeRulesOutput {
  Rules?: (Rule & {
    Actions: (Action & {
      Type: ActionTypeEnum;
      AuthenticateOidcConfig: AuthenticateOidcActionConfig & {
        Issuer: AuthenticateOidcActionIssuer;
        AuthorizationEndpoint: AuthenticateOidcActionAuthorizationEndpoint;
        TokenEndpoint: AuthenticateOidcActionTokenEndpoint;
        UserInfoEndpoint: AuthenticateOidcActionUserInfoEndpoint;
        ClientId: AuthenticateOidcActionClientId;
      };
      AuthenticateCognitoConfig: AuthenticateCognitoActionConfig & {
        UserPoolArn: AuthenticateCognitoActionUserPoolArn;
        UserPoolClientId: AuthenticateCognitoActionUserPoolClientId;
        UserPoolDomain: AuthenticateCognitoActionUserPoolDomain;
      };
      RedirectConfig: RedirectActionConfig & { StatusCode: RedirectActionStatusCodeEnum };
      FixedResponseConfig: FixedResponseActionConfig & {
        StatusCode: FixedResponseActionStatusCode;
      };
      JwtValidationConfig: JwtValidationActionConfig & {
        JwksEndpoint: JwtValidationActionJwksEndpoint;
        Issuer: JwtValidationActionIssuer;
        AdditionalClaims: (JwtValidationActionAdditionalClaim & {
          Format: JwtValidationActionAdditionalClaimFormatEnum;
          Name: JwtValidationActionAdditionalClaimName;
          Values: JwtValidationActionAdditionalClaimValues;
        })[];
      };
    })[];
    Transforms: (RuleTransform & {
      Type: TransformTypeEnum;
      HostHeaderRewriteConfig: HostHeaderRewriteConfig & {
        Rewrites: (RewriteConfig & { Regex: StringValue; Replace: StringValue })[];
      };
      UrlRewriteConfig: UrlRewriteConfig & {
        Rewrites: (RewriteConfig & { Regex: StringValue; Replace: StringValue })[];
      };
    })[];
  })[];
  NextMarker?: string;
}
export type SslPolicyNames = string[];
export interface DescribeSSLPoliciesInput {
  Names?: string[];
  Marker?: string;
  PageSize?: number;
  LoadBalancerType?: LoadBalancerTypeEnum;
}
export type SslProtocol = string;
export type SslProtocols = string[];
export type CipherName = string;
export type CipherPriority = number;
export interface Cipher {
  Name?: string;
  Priority?: number;
}
export type Ciphers = Cipher[];
export interface SslPolicy {
  SslProtocols?: string[];
  Ciphers?: Cipher[];
  Name?: string;
  SupportedLoadBalancerTypes?: string[];
}
export type SslPolicies = SslPolicy[];
export interface DescribeSSLPoliciesOutput {
  SslPolicies?: SslPolicy[];
  NextMarker?: string;
}
export interface DescribeTagsInput {
  ResourceArns?: string[];
}
export interface TagDescription {
  ResourceArn?: string;
  Tags?: Tag[];
}
export type TagDescriptions = TagDescription[];
export interface DescribeTagsOutput {
  TagDescriptions?: (TagDescription & { Tags: (Tag & { Key: TagKey })[] })[];
}
export interface DescribeTargetGroupAttributesInput {
  TargetGroupArn?: string;
}
export type TargetGroupAttributeKey = string;
export type TargetGroupAttributeValue = string;
export interface TargetGroupAttribute {
  Key?: string;
  Value?: string;
}
export type TargetGroupAttributes = TargetGroupAttribute[];
export interface DescribeTargetGroupAttributesOutput {
  Attributes?: TargetGroupAttribute[];
}
export type TargetGroupArns = string[];
export type TargetGroupNames = string[];
export interface DescribeTargetGroupsInput {
  LoadBalancerArn?: string;
  TargetGroupArns?: string[];
  Names?: string[];
  Marker?: string;
  PageSize?: number;
}
export interface DescribeTargetGroupsOutput {
  TargetGroups?: TargetGroup[];
  NextMarker?: string;
}
export type DescribeTargetHealthInputIncludeEnum = "AnomalyDetection" | "All" | (string & {});
export type ListOfDescribeTargetHealthIncludeOptions = DescribeTargetHealthInputIncludeEnum[];
export interface DescribeTargetHealthInput {
  TargetGroupArn?: string;
  Targets?: TargetDescription[];
  Include?: DescribeTargetHealthInputIncludeEnum[];
}
export type TargetHealthStateEnum =
  | "initial"
  | "healthy"
  | "unhealthy"
  | "unhealthy.draining"
  | "unused"
  | "draining"
  | "unavailable"
  | (string & {});
export type TargetHealthReasonEnum =
  | "Elb.RegistrationInProgress"
  | "Elb.InitialHealthChecking"
  | "Target.ResponseCodeMismatch"
  | "Target.Timeout"
  | "Target.FailedHealthChecks"
  | "Target.NotRegistered"
  | "Target.NotInUse"
  | "Target.DeregistrationInProgress"
  | "Target.InvalidState"
  | "Target.IpUnusable"
  | "Target.HealthCheckDisabled"
  | "Elb.InternalError"
  | (string & {});
export type Description = string;
export interface TargetHealth {
  State?: TargetHealthStateEnum;
  Reason?: TargetHealthReasonEnum;
  Description?: string;
}
export type AnomalyResultEnum = "anomalous" | "normal" | (string & {});
export type MitigationInEffectEnum = "yes" | "no" | (string & {});
export interface AnomalyDetection {
  Result?: AnomalyResultEnum;
  MitigationInEffect?: MitigationInEffectEnum;
}
export type TargetAdministrativeOverrideStateEnum =
  | "unknown"
  | "no_override"
  | "zonal_shift_active"
  | "zonal_shift_delegated_to_dns"
  | (string & {});
export type TargetAdministrativeOverrideReasonEnum =
  | "AdministrativeOverride.Unknown"
  | "AdministrativeOverride.NoOverride"
  | "AdministrativeOverride.ZonalShiftActive"
  | "AdministrativeOverride.ZonalShiftDelegatedToDns"
  | (string & {});
export interface AdministrativeOverride {
  State?: TargetAdministrativeOverrideStateEnum;
  Reason?: TargetAdministrativeOverrideReasonEnum;
  Description?: string;
}
export interface TargetHealthDescription {
  Target?: TargetDescription;
  HealthCheckPort?: string;
  TargetHealth?: TargetHealth;
  AnomalyDetection?: AnomalyDetection;
  AdministrativeOverride?: AdministrativeOverride;
}
export type TargetHealthDescriptions = TargetHealthDescription[];
export interface DescribeTargetHealthOutput {
  TargetHealthDescriptions?: (TargetHealthDescription & {
    Target: TargetDescription & { Id: TargetId };
  })[];
}
export interface DescribeTrustStoreAssociationsInput {
  TrustStoreArn?: string;
  Marker?: string;
  PageSize?: number;
}
export type TrustStoreAssociationResourceArn = string;
export interface TrustStoreAssociation {
  ResourceArn?: string;
}
export type TrustStoreAssociations = TrustStoreAssociation[];
export interface DescribeTrustStoreAssociationsOutput {
  TrustStoreAssociations?: TrustStoreAssociation[];
  NextMarker?: string;
}
export type RevocationIds = number[];
export interface DescribeTrustStoreRevocationsInput {
  TrustStoreArn?: string;
  RevocationIds?: number[];
  Marker?: string;
  PageSize?: number;
}
export interface DescribeTrustStoreRevocation {
  TrustStoreArn?: string;
  RevocationId?: number;
  RevocationType?: RevocationType;
  NumberOfRevokedEntries?: number;
}
export type DescribeTrustStoreRevocationResponse = DescribeTrustStoreRevocation[];
export interface DescribeTrustStoreRevocationsOutput {
  TrustStoreRevocations?: DescribeTrustStoreRevocation[];
  NextMarker?: string;
}
export type TrustStoreArns = string[];
export type TrustStoreNames = string[];
export interface DescribeTrustStoresInput {
  TrustStoreArns?: string[];
  Names?: string[];
  Marker?: string;
  PageSize?: number;
}
export interface DescribeTrustStoresOutput {
  TrustStores?: TrustStore[];
  NextMarker?: string;
}
export interface GetResourcePolicyInput {
  ResourceArn?: string;
}
export type Policy = string;
export interface GetResourcePolicyOutput {
  Policy?: string;
}
export interface GetTrustStoreCaCertificatesBundleInput {
  TrustStoreArn?: string;
}
export type Location = string;
export interface GetTrustStoreCaCertificatesBundleOutput {
  Location?: string;
}
export interface GetTrustStoreRevocationContentInput {
  TrustStoreArn?: string;
  RevocationId?: number;
}
export interface GetTrustStoreRevocationContentOutput {
  Location?: string;
}
export type ResetCapacityReservation = boolean;
export interface ModifyCapacityReservationInput {
  LoadBalancerArn?: string;
  MinimumLoadBalancerCapacity?: MinimumLoadBalancerCapacity;
  ResetCapacityReservation?: boolean;
}
export interface ModifyCapacityReservationOutput {
  LastModifiedTime?: Date;
  DecreaseRequestsRemaining?: number;
  MinimumLoadBalancerCapacity?: MinimumLoadBalancerCapacity;
  CapacityReservationState?: ZonalCapacityReservationState[];
}
export type RemoveIpamPoolEnum = "ipv4" | (string & {});
export type RemoveIpamPools = RemoveIpamPoolEnum[];
export interface ModifyIpPoolsInput {
  LoadBalancerArn?: string;
  IpamPools?: IpamPools;
  RemoveIpamPools?: RemoveIpamPoolEnum[];
}
export interface ModifyIpPoolsOutput {
  IpamPools?: IpamPools;
}
export interface ModifyListenerInput {
  ListenerArn?: string;
  Port?: number;
  Protocol?: ProtocolEnum;
  SslPolicy?: string;
  Certificates?: Certificate[];
  DefaultActions?: Action[];
  AlpnPolicy?: string[];
  MutualAuthentication?: MutualAuthenticationAttributes;
}
export interface ModifyListenerOutput {
  Listeners?: (Listener & {
    DefaultActions: (Action & {
      Type: ActionTypeEnum;
      AuthenticateOidcConfig: AuthenticateOidcActionConfig & {
        Issuer: AuthenticateOidcActionIssuer;
        AuthorizationEndpoint: AuthenticateOidcActionAuthorizationEndpoint;
        TokenEndpoint: AuthenticateOidcActionTokenEndpoint;
        UserInfoEndpoint: AuthenticateOidcActionUserInfoEndpoint;
        ClientId: AuthenticateOidcActionClientId;
      };
      AuthenticateCognitoConfig: AuthenticateCognitoActionConfig & {
        UserPoolArn: AuthenticateCognitoActionUserPoolArn;
        UserPoolClientId: AuthenticateCognitoActionUserPoolClientId;
        UserPoolDomain: AuthenticateCognitoActionUserPoolDomain;
      };
      RedirectConfig: RedirectActionConfig & { StatusCode: RedirectActionStatusCodeEnum };
      FixedResponseConfig: FixedResponseActionConfig & {
        StatusCode: FixedResponseActionStatusCode;
      };
      JwtValidationConfig: JwtValidationActionConfig & {
        JwksEndpoint: JwtValidationActionJwksEndpoint;
        Issuer: JwtValidationActionIssuer;
        AdditionalClaims: (JwtValidationActionAdditionalClaim & {
          Format: JwtValidationActionAdditionalClaimFormatEnum;
          Name: JwtValidationActionAdditionalClaimName;
          Values: JwtValidationActionAdditionalClaimValues;
        })[];
      };
    })[];
  })[];
}
export interface ModifyListenerAttributesInput {
  ListenerArn?: string;
  Attributes?: ListenerAttribute[];
}
export interface ModifyListenerAttributesOutput {
  Attributes?: ListenerAttribute[];
}
export interface ModifyLoadBalancerAttributesInput {
  LoadBalancerArn?: string;
  Attributes?: LoadBalancerAttribute[];
}
export interface ModifyLoadBalancerAttributesOutput {
  Attributes?: LoadBalancerAttribute[];
}
export type ResetTransforms = boolean;
export interface ModifyRuleInput {
  RuleArn?: string;
  Conditions?: RuleCondition[];
  Actions?: Action[];
  Transforms?: RuleTransform[];
  ResetTransforms?: boolean;
}
export interface ModifyRuleOutput {
  Rules?: (Rule & {
    Actions: (Action & {
      Type: ActionTypeEnum;
      AuthenticateOidcConfig: AuthenticateOidcActionConfig & {
        Issuer: AuthenticateOidcActionIssuer;
        AuthorizationEndpoint: AuthenticateOidcActionAuthorizationEndpoint;
        TokenEndpoint: AuthenticateOidcActionTokenEndpoint;
        UserInfoEndpoint: AuthenticateOidcActionUserInfoEndpoint;
        ClientId: AuthenticateOidcActionClientId;
      };
      AuthenticateCognitoConfig: AuthenticateCognitoActionConfig & {
        UserPoolArn: AuthenticateCognitoActionUserPoolArn;
        UserPoolClientId: AuthenticateCognitoActionUserPoolClientId;
        UserPoolDomain: AuthenticateCognitoActionUserPoolDomain;
      };
      RedirectConfig: RedirectActionConfig & { StatusCode: RedirectActionStatusCodeEnum };
      FixedResponseConfig: FixedResponseActionConfig & {
        StatusCode: FixedResponseActionStatusCode;
      };
      JwtValidationConfig: JwtValidationActionConfig & {
        JwksEndpoint: JwtValidationActionJwksEndpoint;
        Issuer: JwtValidationActionIssuer;
        AdditionalClaims: (JwtValidationActionAdditionalClaim & {
          Format: JwtValidationActionAdditionalClaimFormatEnum;
          Name: JwtValidationActionAdditionalClaimName;
          Values: JwtValidationActionAdditionalClaimValues;
        })[];
      };
    })[];
    Transforms: (RuleTransform & {
      Type: TransformTypeEnum;
      HostHeaderRewriteConfig: HostHeaderRewriteConfig & {
        Rewrites: (RewriteConfig & { Regex: StringValue; Replace: StringValue })[];
      };
      UrlRewriteConfig: UrlRewriteConfig & {
        Rewrites: (RewriteConfig & { Regex: StringValue; Replace: StringValue })[];
      };
    })[];
  })[];
}
export interface ModifyTargetGroupInput {
  TargetGroupArn?: string;
  HealthCheckProtocol?: ProtocolEnum;
  HealthCheckPort?: string;
  HealthCheckPath?: string;
  HealthCheckEnabled?: boolean;
  HealthCheckIntervalSeconds?: number;
  HealthCheckTimeoutSeconds?: number;
  HealthyThresholdCount?: number;
  UnhealthyThresholdCount?: number;
  Matcher?: Matcher;
}
export interface ModifyTargetGroupOutput {
  TargetGroups?: TargetGroup[];
}
export interface ModifyTargetGroupAttributesInput {
  TargetGroupArn?: string;
  Attributes?: TargetGroupAttribute[];
}
export interface ModifyTargetGroupAttributesOutput {
  Attributes?: TargetGroupAttribute[];
}
export interface ModifyTrustStoreInput {
  TrustStoreArn?: string;
  CaCertificatesBundleS3Bucket?: string;
  CaCertificatesBundleS3Key?: string;
  CaCertificatesBundleS3ObjectVersion?: string;
}
export interface ModifyTrustStoreOutput {
  TrustStores?: TrustStore[];
}
export interface RegisterTargetsInput {
  TargetGroupArn?: string;
  Targets?: TargetDescription[];
}
export interface RegisterTargetsOutput {}
export interface RemoveListenerCertificatesInput {
  ListenerArn?: string;
  Certificates?: Certificate[];
}
export interface RemoveListenerCertificatesOutput {}
export type TagKeys = string[];
export interface RemoveTagsInput {
  ResourceArns?: string[];
  TagKeys?: string[];
}
export interface RemoveTagsOutput {}
export interface RemoveTrustStoreRevocationsInput {
  TrustStoreArn?: string;
  RevocationIds?: number[];
}
export interface RemoveTrustStoreRevocationsOutput {}
export interface SetIpAddressTypeInput {
  LoadBalancerArn?: string;
  IpAddressType?: IpAddressType;
}
export interface SetIpAddressTypeOutput {
  IpAddressType?: IpAddressType;
}
export interface RulePriorityPair {
  RuleArn?: string;
  Priority?: number;
}
export type RulePriorityList = RulePriorityPair[];
export interface SetRulePrioritiesInput {
  RulePriorities?: RulePriorityPair[];
}
export interface SetRulePrioritiesOutput {
  Rules?: (Rule & {
    Actions: (Action & {
      Type: ActionTypeEnum;
      AuthenticateOidcConfig: AuthenticateOidcActionConfig & {
        Issuer: AuthenticateOidcActionIssuer;
        AuthorizationEndpoint: AuthenticateOidcActionAuthorizationEndpoint;
        TokenEndpoint: AuthenticateOidcActionTokenEndpoint;
        UserInfoEndpoint: AuthenticateOidcActionUserInfoEndpoint;
        ClientId: AuthenticateOidcActionClientId;
      };
      AuthenticateCognitoConfig: AuthenticateCognitoActionConfig & {
        UserPoolArn: AuthenticateCognitoActionUserPoolArn;
        UserPoolClientId: AuthenticateCognitoActionUserPoolClientId;
        UserPoolDomain: AuthenticateCognitoActionUserPoolDomain;
      };
      RedirectConfig: RedirectActionConfig & { StatusCode: RedirectActionStatusCodeEnum };
      FixedResponseConfig: FixedResponseActionConfig & {
        StatusCode: FixedResponseActionStatusCode;
      };
      JwtValidationConfig: JwtValidationActionConfig & {
        JwksEndpoint: JwtValidationActionJwksEndpoint;
        Issuer: JwtValidationActionIssuer;
        AdditionalClaims: (JwtValidationActionAdditionalClaim & {
          Format: JwtValidationActionAdditionalClaimFormatEnum;
          Name: JwtValidationActionAdditionalClaimName;
          Values: JwtValidationActionAdditionalClaimValues;
        })[];
      };
    })[];
    Transforms: (RuleTransform & {
      Type: TransformTypeEnum;
      HostHeaderRewriteConfig: HostHeaderRewriteConfig & {
        Rewrites: (RewriteConfig & { Regex: StringValue; Replace: StringValue })[];
      };
      UrlRewriteConfig: UrlRewriteConfig & {
        Rewrites: (RewriteConfig & { Regex: StringValue; Replace: StringValue })[];
      };
    })[];
  })[];
}
export type EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficEnum = "on" | "off" | (string & {});
export interface SetSecurityGroupsInput {
  LoadBalancerArn?: string;
  SecurityGroups?: string[];
  EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic?: EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficEnum;
}
export interface SetSecurityGroupsOutput {
  SecurityGroupIds?: string[];
  EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic?: EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficEnum;
}
export interface SetSubnetsInput {
  LoadBalancerArn?: string;
  Subnets?: string[];
  SubnetMappings?: SubnetMapping[];
  IpAddressType?: IpAddressType;
  EnablePrefixForIpv6SourceNat?: EnablePrefixForIpv6SourceNatEnum;
}
export interface SetSubnetsOutput {
  AvailabilityZones?: AvailabilityZone[];
  IpAddressType?: IpAddressType;
  EnablePrefixForIpv6SourceNat?: EnablePrefixForIpv6SourceNatEnum;
}
export type ErrorDescription = string;
export type AddListenerCertificatesError =
  | CertificateNotFoundException
  | ListenerNotFoundException
  | TooManyCertificatesException
  | CommonErrors;
/**
 * Adds the specified SSL server certificate to the certificate list for the specified HTTPS
 * or TLS listener.
 *
 * If the certificate in already in the certificate list, the call is successful but the
 * certificate is not added again.
 *
 * For more information, see SSL
 * certificates in the *Application Load Balancers Guide* or Server
 * certificates in the *Network Load Balancers Guide*.
 */
export const addListenerCertificates: API.OperationMethod<
  AddListenerCertificatesInput,
  AddListenerCertificatesOutput,
  AddListenerCertificatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2) as any as S.Schema<AddListenerCertificatesInput>,
  output: __S(3) as any as S.Schema<AddListenerCertificatesOutput>,
  errors: [CertificateNotFoundException, ListenerNotFoundException, TooManyCertificatesException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddListenerCertificates",
}));

export type AddTagsError =
  | DuplicateTagKeysException
  | ListenerNotFoundException
  | LoadBalancerNotFoundException
  | RuleNotFoundException
  | TargetGroupNotFoundException
  | TooManyTagsException
  | TrustStoreNotFoundException
  | CommonErrors;
/**
 * Adds the specified tags to the specified Elastic Load Balancing resource. You can tag your
 * Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups,
 * trust stores, listeners, and rules.
 *
 * Each tag consists of a key and an optional value. If a resource already has a tag with the
 * same key, `AddTags` updates its value.
 */
export const addTags: API.OperationMethod<
  AddTagsInput,
  AddTagsOutput,
  AddTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(7) as any as S.Schema<AddTagsInput>,
  output: __S(8) as any as S.Schema<AddTagsOutput>,
  errors: [
    DuplicateTagKeysException,
    ListenerNotFoundException,
    LoadBalancerNotFoundException,
    RuleNotFoundException,
    TargetGroupNotFoundException,
    TooManyTagsException,
    TrustStoreNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddTags",
}));

export type AddTrustStoreRevocationsError =
  | InvalidRevocationContentException
  | RevocationContentNotFoundException
  | TooManyTrustStoreRevocationEntriesException
  | TrustStoreNotFoundException
  | CommonErrors;
/**
 * Adds the specified revocation file to the specified trust store.
 */
export const addTrustStoreRevocations: API.OperationMethod<
  AddTrustStoreRevocationsInput,
  AddTrustStoreRevocationsOutput,
  AddTrustStoreRevocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(11) as any as S.Schema<AddTrustStoreRevocationsInput>,
  output: __S(14) as any as S.Schema<AddTrustStoreRevocationsOutput>,
  errors: [
    InvalidRevocationContentException,
    RevocationContentNotFoundException,
    TooManyTrustStoreRevocationEntriesException,
    TrustStoreNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddTrustStoreRevocations",
}));

export type CreateListenerError =
  | ALPNPolicyNotSupportedException
  | CertificateNotFoundException
  | DuplicateListenerException
  | IncompatibleProtocolsException
  | InvalidConfigurationRequestException
  | InvalidLoadBalancerActionException
  | LoadBalancerNotFoundException
  | SSLPolicyNotFoundException
  | TargetGroupAssociationLimitException
  | TargetGroupNotFoundException
  | TooManyActionsException
  | TooManyCertificatesException
  | TooManyListenersException
  | TooManyRegistrationsForTargetIdException
  | TooManyTagsException
  | TooManyTargetsException
  | TooManyUniqueTargetGroupsPerLoadBalancerException
  | TrustStoreNotFoundException
  | TrustStoreNotReadyException
  | UnsupportedProtocolException
  | CommonErrors;
/**
 * Creates a listener for the specified Application Load Balancer, Network Load Balancer, or
 * Gateway Load Balancer.
 *
 * For more information, see the following:
 *
 * - Listeners for
 * your Application Load Balancers
 *
 * - Listeners for
 * your Network Load Balancers
 *
 * - Listeners for your
 * Gateway Load Balancers
 *
 * This operation is idempotent, which means that it completes at most one time. If you
 * attempt to create multiple listeners with the same settings, each call succeeds.
 */
export const createListener: API.OperationMethod<
  CreateListenerInput,
  CreateListenerOutput,
  CreateListenerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(33) as any as S.Schema<CreateListenerInput>,
  output: __S(36) as any as S.Schema<CreateListenerOutput>,
  errors: [
    ALPNPolicyNotSupportedException,
    CertificateNotFoundException,
    DuplicateListenerException,
    IncompatibleProtocolsException,
    InvalidConfigurationRequestException,
    InvalidLoadBalancerActionException,
    LoadBalancerNotFoundException,
    SSLPolicyNotFoundException,
    TargetGroupAssociationLimitException,
    TargetGroupNotFoundException,
    TooManyActionsException,
    TooManyCertificatesException,
    TooManyListenersException,
    TooManyRegistrationsForTargetIdException,
    TooManyTagsException,
    TooManyTargetsException,
    TooManyUniqueTargetGroupsPerLoadBalancerException,
    TrustStoreNotFoundException,
    TrustStoreNotReadyException,
    UnsupportedProtocolException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateListener",
}));

export type CreateLoadBalancerError =
  | AllocationIdNotFoundException
  | AvailabilityZoneNotSupportedException
  | DuplicateLoadBalancerNameException
  | DuplicateTagKeysException
  | InvalidConfigurationRequestException
  | InvalidSchemeException
  | InvalidSecurityGroupException
  | InvalidSubnetException
  | OperationNotPermittedException
  | ResourceInUseException
  | SubnetNotFoundException
  | TooManyLoadBalancersException
  | TooManyTagsException
  | CommonErrors;
/**
 * Creates an Application Load Balancer, Network Load Balancer, or Gateway Load
 * Balancer.
 *
 * For more information, see the following:
 *
 * - Application Load Balancers
 *
 * - Network Load
 * Balancers
 *
 * - Gateway Load
 * Balancers
 *
 * This operation is idempotent, which means that it completes at most one time. If you
 * attempt to create multiple load balancers with the same settings, each call succeeds.
 */
export const createLoadBalancer: API.OperationMethod<
  CreateLoadBalancerInput,
  CreateLoadBalancerOutput,
  CreateLoadBalancerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(42) as any as S.Schema<CreateLoadBalancerInput>,
  output: __S(51) as any as S.Schema<CreateLoadBalancerOutput>,
  errors: [
    AllocationIdNotFoundException,
    AvailabilityZoneNotSupportedException,
    DuplicateLoadBalancerNameException,
    DuplicateTagKeysException,
    InvalidConfigurationRequestException,
    InvalidSchemeException,
    InvalidSecurityGroupException,
    InvalidSubnetException,
    OperationNotPermittedException,
    ResourceInUseException,
    SubnetNotFoundException,
    TooManyLoadBalancersException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLoadBalancer",
}));

export type CreateRuleError =
  | IncompatibleProtocolsException
  | InvalidConfigurationRequestException
  | InvalidLoadBalancerActionException
  | ListenerNotFoundException
  | PriorityInUseException
  | TargetGroupAssociationLimitException
  | TargetGroupNotFoundException
  | TooManyActionsException
  | TooManyRegistrationsForTargetIdException
  | TooManyRulesException
  | TooManyTagsException
  | TooManyTargetGroupsException
  | TooManyTargetsException
  | TooManyUniqueTargetGroupsPerLoadBalancerException
  | UnsupportedProtocolException
  | CommonErrors;
/**
 * Creates a rule for the specified listener. The listener must be associated with an
 * Application Load Balancer or a dual-stack Network Load Balancer.
 *
 * Each rule consists of a priority, one or more actions, and one or more conditions. Rules
 * are evaluated in priority order, from the lowest value to the highest value. When the
 * conditions for a rule are met, its actions are performed. If the conditions for no rules are
 * met, the actions for the default rule are performed. For more information, see Listener rules in the *Application Load Balancers Guide* or
 * Listener rules in the *Network Load Balancers Guide*.
 */
export const createRule: API.OperationMethod<
  CreateRuleInput,
  CreateRuleOutput,
  CreateRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(69) as any as S.Schema<CreateRuleInput>,
  output: __S(72) as any as S.Schema<CreateRuleOutput>,
  errors: [
    IncompatibleProtocolsException,
    InvalidConfigurationRequestException,
    InvalidLoadBalancerActionException,
    ListenerNotFoundException,
    PriorityInUseException,
    TargetGroupAssociationLimitException,
    TargetGroupNotFoundException,
    TooManyActionsException,
    TooManyRegistrationsForTargetIdException,
    TooManyRulesException,
    TooManyTagsException,
    TooManyTargetGroupsException,
    TooManyTargetsException,
    TooManyUniqueTargetGroupsPerLoadBalancerException,
    UnsupportedProtocolException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRule",
}));

export type CreateTargetGroupError =
  | DuplicateTargetGroupNameException
  | InvalidConfigurationRequestException
  | TooManyTagsException
  | TooManyTargetGroupsException
  | CommonErrors;
/**
 * Creates a target group.
 *
 * For more information, see the following:
 *
 * - Target
 * groups for your Application Load Balancers
 *
 * - Target groups
 * for your Network Load Balancers
 *
 * - Target groups for your
 * Gateway Load Balancers
 *
 * This operation is idempotent, which means that it completes at most one time. If you
 * attempt to create multiple target groups with the same settings, each call succeeds.
 */
export const createTargetGroup: API.OperationMethod<
  CreateTargetGroupInput,
  CreateTargetGroupOutput,
  CreateTargetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74) as any as S.Schema<CreateTargetGroupInput>,
  output: __S(78) as any as S.Schema<CreateTargetGroupOutput>,
  errors: [
    DuplicateTargetGroupNameException,
    InvalidConfigurationRequestException,
    TooManyTagsException,
    TooManyTargetGroupsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTargetGroup",
}));

export type CreateTrustStoreError =
  | CaCertificatesBundleNotFoundException
  | DuplicateTagKeysException
  | DuplicateTrustStoreNameException
  | InvalidCaCertificatesBundleException
  | TooManyTagsException
  | TooManyTrustStoresException
  | CommonErrors;
/**
 * Creates a trust store.
 *
 * For more information, see Mutual TLS for Application Load Balancers.
 */
export const createTrustStore: API.OperationMethod<
  CreateTrustStoreInput,
  CreateTrustStoreOutput,
  CreateTrustStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(79) as any as S.Schema<CreateTrustStoreInput>,
  output: __S(82) as any as S.Schema<CreateTrustStoreOutput>,
  errors: [
    CaCertificatesBundleNotFoundException,
    DuplicateTagKeysException,
    DuplicateTrustStoreNameException,
    InvalidCaCertificatesBundleException,
    TooManyTagsException,
    TooManyTrustStoresException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTrustStore",
}));

export type DeleteListenerError = ListenerNotFoundException | ResourceInUseException | CommonErrors;
/**
 * Deletes the specified listener.
 *
 * Alternatively, your listener is deleted when you delete the load balancer to which it is
 * attached.
 */
export const deleteListener: API.OperationMethod<
  DeleteListenerInput,
  DeleteListenerOutput,
  DeleteListenerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(83) as any as S.Schema<DeleteListenerInput>,
  output: __S(84) as any as S.Schema<DeleteListenerOutput>,
  errors: [ListenerNotFoundException, ResourceInUseException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteListener",
}));

export type DeleteLoadBalancerError =
  | LoadBalancerNotFoundException
  | OperationNotPermittedException
  | ResourceInUseException
  | CommonErrors;
/**
 * Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load
 * Balancer. Deleting a load balancer also deletes its listeners.
 *
 * You can't delete a load balancer if deletion protection is enabled. If the load balancer
 * does not exist or has already been deleted, the call succeeds.
 *
 * Deleting a load balancer does not affect its registered targets. For example, your EC2
 * instances continue to run and are still registered to their target groups. If you no longer
 * need these EC2 instances, you can stop or terminate them.
 */
export const deleteLoadBalancer: API.OperationMethod<
  DeleteLoadBalancerInput,
  DeleteLoadBalancerOutput,
  DeleteLoadBalancerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(85) as any as S.Schema<DeleteLoadBalancerInput>,
  output: __S(86) as any as S.Schema<DeleteLoadBalancerOutput>,
  errors: [LoadBalancerNotFoundException, OperationNotPermittedException, ResourceInUseException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLoadBalancer",
}));

export type DeleteRuleError = OperationNotPermittedException | RuleNotFoundException | CommonErrors;
/**
 * Deletes the specified rule.
 *
 * You can't delete the default rule.
 */
export const deleteRule: API.OperationMethod<
  DeleteRuleInput,
  DeleteRuleOutput,
  DeleteRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(87) as any as S.Schema<DeleteRuleInput>,
  output: __S(88) as any as S.Schema<DeleteRuleOutput>,
  errors: [OperationNotPermittedException, RuleNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRule",
}));

export type DeleteSharedTrustStoreAssociationError =
  | DeleteAssociationSameAccountException
  | TrustStoreAssociationNotFoundException
  | TrustStoreNotFoundException
  | CommonErrors;
/**
 * Deletes a shared trust store association.
 */
export const deleteSharedTrustStoreAssociation: API.OperationMethod<
  DeleteSharedTrustStoreAssociationInput,
  DeleteSharedTrustStoreAssociationOutput,
  DeleteSharedTrustStoreAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(89) as any as S.Schema<DeleteSharedTrustStoreAssociationInput>,
  output: __S(90) as any as S.Schema<DeleteSharedTrustStoreAssociationOutput>,
  errors: [
    DeleteAssociationSameAccountException,
    TrustStoreAssociationNotFoundException,
    TrustStoreNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSharedTrustStoreAssociation",
}));

export type DeleteTargetGroupError = ResourceInUseException | CommonErrors;
/**
 * Deletes the specified target group.
 *
 * You can delete a target group if it is not referenced by any actions. Deleting a target
 * group also deletes any associated health checks. Deleting a target group does not affect its
 * registered targets. For example, any EC2 instances continue to run until you stop or terminate
 * them.
 */
export const deleteTargetGroup: API.OperationMethod<
  DeleteTargetGroupInput,
  DeleteTargetGroupOutput,
  DeleteTargetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(91) as any as S.Schema<DeleteTargetGroupInput>,
  output: __S(92) as any as S.Schema<DeleteTargetGroupOutput>,
  errors: [ResourceInUseException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTargetGroup",
}));

export type DeleteTrustStoreError =
  | TrustStoreInUseException
  | TrustStoreNotFoundException
  | CommonErrors;
/**
 * Deletes a trust store.
 */
export const deleteTrustStore: API.OperationMethod<
  DeleteTrustStoreInput,
  DeleteTrustStoreOutput,
  DeleteTrustStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(93) as any as S.Schema<DeleteTrustStoreInput>,
  output: __S(94) as any as S.Schema<DeleteTrustStoreOutput>,
  errors: [TrustStoreInUseException, TrustStoreNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTrustStore",
}));

export type DeregisterTargetsError =
  | InvalidTargetException
  | TargetGroupNotFoundException
  | CommonErrors;
/**
 * Deregisters the specified targets from the specified target group. After the targets are
 * deregistered, they no longer receive traffic from the load balancer.
 *
 * The load balancer stops sending requests to targets that are deregistering, but uses
 * connection draining to ensure that in-flight traffic completes on the existing connections.
 * This deregistration delay is configured by default but can be updated for each target group.
 *
 * For more information, see the following:
 *
 * -
 * Deregistration delay in the *Application Load Balancers User Guide*
 *
 * -
 * Deregistration delay in the *Network Load Balancers User Guide*
 *
 * -
 * Deregistration delay in the *Gateway Load Balancers User Guide*
 *
 * Note: If the specified target does not exist, the action returns successfully.
 */
export const deregisterTargets: API.OperationMethod<
  DeregisterTargetsInput,
  DeregisterTargetsOutput,
  DeregisterTargetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(97) as any as S.Schema<DeregisterTargetsInput>,
  output: __S(98) as any as S.Schema<DeregisterTargetsOutput>,
  errors: [InvalidTargetException, TargetGroupNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeregisterTargets",
}));

export type DescribeAccountLimitsError = CommonErrors;
/**
 * Describes the current Elastic Load Balancing resource limits for your Amazon Web Services
 * account.
 *
 * For more information, see the following:
 *
 * - Quotas for your
 * Application Load Balancers
 *
 * - Quotas for your
 * Network Load Balancers
 *
 * - Quotas for your Gateway
 * Load Balancers
 */
export const describeAccountLimits: API.PaginatedOperationMethod<
  DescribeAccountLimitsInput,
  DescribeAccountLimitsOutput,
  DescribeAccountLimitsError,
  Credentials | HttpClient.HttpClient,
  Limit
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(99) as any as S.Schema<DescribeAccountLimitsInput>,
  output: __S(102) as any as S.Schema<DescribeAccountLimitsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAccountLimits",
  pagination: { inputToken: "Marker", outputToken: "NextMarker", items: "Limits" } as const,
})) as any;

export type DescribeCapacityReservationError = LoadBalancerNotFoundException | CommonErrors;
/**
 * Describes the capacity reservation status for the specified load balancer.
 */
export const describeCapacityReservation: API.OperationMethod<
  DescribeCapacityReservationInput,
  DescribeCapacityReservationOutput,
  DescribeCapacityReservationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(103) as any as S.Schema<DescribeCapacityReservationInput>,
  output: __S(108) as any as S.Schema<DescribeCapacityReservationOutput>,
  errors: [LoadBalancerNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCapacityReservation",
}));

export type DescribeListenerAttributesError = ListenerNotFoundException | CommonErrors;
/**
 * Describes the attributes for the specified listener.
 */
export const describeListenerAttributes: API.OperationMethod<
  DescribeListenerAttributesInput,
  DescribeListenerAttributesOutput,
  DescribeListenerAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(109) as any as S.Schema<DescribeListenerAttributesInput>,
  output: __S(112) as any as S.Schema<DescribeListenerAttributesOutput>,
  errors: [ListenerNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeListenerAttributes",
}));

export type DescribeListenerCertificatesError = ListenerNotFoundException | CommonErrors;
/**
 * Describes the default certificate and the certificate list for the specified HTTPS or TLS
 * listener.
 *
 * If the default certificate is also in the certificate list, it appears twice in the
 * results (once with `IsDefault` set to true and once with `IsDefault` set
 * to false).
 *
 * For more information, see SSL certificates in the *Application Load Balancers Guide* or
 * Server certificates in the Network Load Balancers
 * Guide.
 */
export const describeListenerCertificates: API.PaginatedOperationMethod<
  DescribeListenerCertificatesInput,
  DescribeListenerCertificatesOutput,
  DescribeListenerCertificatesError,
  Credentials | HttpClient.HttpClient,
  Certificate
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(113) as any as S.Schema<DescribeListenerCertificatesInput>,
  output: __S(114) as any as S.Schema<DescribeListenerCertificatesOutput>,
  errors: [ListenerNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeListenerCertificates",
  pagination: { inputToken: "Marker", outputToken: "NextMarker", items: "Certificates" } as const,
})) as any;

export type DescribeListenersError =
  | ListenerNotFoundException
  | LoadBalancerNotFoundException
  | UnsupportedProtocolException
  | CommonErrors;
/**
 * Describes the specified listeners or the listeners for the specified Application Load
 * Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load
 * balancer or one or more listeners.
 */
export const describeListeners: API.PaginatedOperationMethod<
  DescribeListenersInput,
  DescribeListenersOutput,
  DescribeListenersError,
  Credentials | HttpClient.HttpClient,
  Listener
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(116) as any as S.Schema<DescribeListenersInput>,
  output: __S(117) as any as S.Schema<DescribeListenersOutput>,
  errors: [ListenerNotFoundException, LoadBalancerNotFoundException, UnsupportedProtocolException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeListeners",
  pagination: { inputToken: "Marker", outputToken: "NextMarker", items: "Listeners" } as const,
})) as any;

export type DescribeLoadBalancerAttributesError = LoadBalancerNotFoundException | CommonErrors;
/**
 * Describes the attributes for the specified Application Load Balancer, Network Load
 * Balancer, or Gateway Load Balancer.
 *
 * For more information, see the following:
 *
 * - Load balancer attributes in the Application Load Balancers
 * Guide
 *
 * - Load balancer attributes in the Network Load Balancers
 * Guide
 *
 * - Load balancer attributes in the Gateway Load Balancers
 * Guide
 */
export const describeLoadBalancerAttributes: API.OperationMethod<
  DescribeLoadBalancerAttributesInput,
  DescribeLoadBalancerAttributesOutput,
  DescribeLoadBalancerAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(118) as any as S.Schema<DescribeLoadBalancerAttributesInput>,
  output: __S(121) as any as S.Schema<DescribeLoadBalancerAttributesOutput>,
  errors: [LoadBalancerNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLoadBalancerAttributes",
}));

export type DescribeLoadBalancersError = LoadBalancerNotFoundException | CommonErrors;
/**
 * Describes the specified load balancers or all of your load balancers.
 */
export const describeLoadBalancers: API.PaginatedOperationMethod<
  DescribeLoadBalancersInput,
  DescribeLoadBalancersOutput,
  DescribeLoadBalancersError,
  Credentials | HttpClient.HttpClient,
  LoadBalancer
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(123) as any as S.Schema<DescribeLoadBalancersInput>,
  output: __S(124) as any as S.Schema<DescribeLoadBalancersOutput>,
  errors: [LoadBalancerNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLoadBalancers",
  pagination: { inputToken: "Marker", outputToken: "NextMarker", items: "LoadBalancers" } as const,
})) as any;

export type DescribeRulesError =
  | ListenerNotFoundException
  | RuleNotFoundException
  | UnsupportedProtocolException
  | CommonErrors;
/**
 * Describes the specified rules or the rules for the specified listener. You must specify
 * either a listener or rules.
 */
export const describeRules: API.PaginatedOperationMethod<
  DescribeRulesInput,
  DescribeRulesOutput,
  DescribeRulesError,
  Credentials | HttpClient.HttpClient,
  Rule
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(126) as any as S.Schema<DescribeRulesInput>,
  output: __S(127) as any as S.Schema<DescribeRulesOutput>,
  errors: [ListenerNotFoundException, RuleNotFoundException, UnsupportedProtocolException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRules",
  pagination: { inputToken: "Marker", outputToken: "NextMarker", items: "Rules" } as const,
})) as any;

export type DescribeSSLPoliciesError = SSLPolicyNotFoundException | CommonErrors;
/**
 * Describes the specified policies or all policies used for SSL negotiation.
 *
 * For more information, see Security policies in the *Application Load Balancers Guide* and
 * Security policies in the *Network Load Balancers Guide*.
 */
export const describeSSLPolicies: API.OperationMethod<
  DescribeSSLPoliciesInput,
  DescribeSSLPoliciesOutput,
  DescribeSSLPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(129) as any as S.Schema<DescribeSSLPoliciesInput>,
  output: __S(135) as any as S.Schema<DescribeSSLPoliciesOutput>,
  errors: [SSLPolicyNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSSLPolicies",
}));

export type DescribeTagsError =
  | ListenerNotFoundException
  | LoadBalancerNotFoundException
  | RuleNotFoundException
  | TargetGroupNotFoundException
  | TrustStoreNotFoundException
  | CommonErrors;
/**
 * Describes the tags for the specified Elastic Load Balancing resources. You can describe
 * the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load
 * Balancers, target groups, listeners, or rules.
 */
export const describeTags: API.OperationMethod<
  DescribeTagsInput,
  DescribeTagsOutput,
  DescribeTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(136) as any as S.Schema<DescribeTagsInput>,
  output: __S(139) as any as S.Schema<DescribeTagsOutput>,
  errors: [
    ListenerNotFoundException,
    LoadBalancerNotFoundException,
    RuleNotFoundException,
    TargetGroupNotFoundException,
    TrustStoreNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTags",
}));

export type DescribeTargetGroupAttributesError = TargetGroupNotFoundException | CommonErrors;
/**
 * Describes the attributes for the specified target group.
 *
 * For more information, see the following:
 *
 * - Target group attributes in the Application Load Balancers
 * Guide
 *
 * - Target group attributes in the Network Load Balancers
 * Guide
 *
 * - Target group attributes in the Gateway Load Balancers
 * Guide
 */
export const describeTargetGroupAttributes: API.OperationMethod<
  DescribeTargetGroupAttributesInput,
  DescribeTargetGroupAttributesOutput,
  DescribeTargetGroupAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(140) as any as S.Schema<DescribeTargetGroupAttributesInput>,
  output: __S(143) as any as S.Schema<DescribeTargetGroupAttributesOutput>,
  errors: [TargetGroupNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTargetGroupAttributes",
}));

export type DescribeTargetGroupsError =
  | LoadBalancerNotFoundException
  | TargetGroupNotFoundException
  | CommonErrors;
/**
 * Describes the specified target groups or all of your target groups. By default, all target
 * groups are described. Alternatively, you can specify one of the following to filter the
 * results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of
 * one or more target groups.
 */
export const describeTargetGroups: API.PaginatedOperationMethod<
  DescribeTargetGroupsInput,
  DescribeTargetGroupsOutput,
  DescribeTargetGroupsError,
  Credentials | HttpClient.HttpClient,
  TargetGroup
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(146) as any as S.Schema<DescribeTargetGroupsInput>,
  output: __S(147) as any as S.Schema<DescribeTargetGroupsOutput>,
  errors: [LoadBalancerNotFoundException, TargetGroupNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTargetGroups",
  pagination: { inputToken: "Marker", outputToken: "NextMarker", items: "TargetGroups" } as const,
})) as any;

export type DescribeTargetHealthError =
  | HealthUnavailableException
  | InvalidTargetException
  | TargetGroupNotFoundException
  | CommonErrors;
/**
 * Describes the health of the specified targets or all of your targets.
 */
export const describeTargetHealth: API.OperationMethod<
  DescribeTargetHealthInput,
  DescribeTargetHealthOutput,
  DescribeTargetHealthError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(149) as any as S.Schema<DescribeTargetHealthInput>,
  output: __S(155) as any as S.Schema<DescribeTargetHealthOutput>,
  errors: [HealthUnavailableException, InvalidTargetException, TargetGroupNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTargetHealth",
}));

export type DescribeTrustStoreAssociationsError = TrustStoreNotFoundException | CommonErrors;
/**
 * Describes all resources associated with the specified trust store.
 */
export const describeTrustStoreAssociations: API.PaginatedOperationMethod<
  DescribeTrustStoreAssociationsInput,
  DescribeTrustStoreAssociationsOutput,
  DescribeTrustStoreAssociationsError,
  Credentials | HttpClient.HttpClient,
  TrustStoreAssociation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(156) as any as S.Schema<DescribeTrustStoreAssociationsInput>,
  output: __S(159) as any as S.Schema<DescribeTrustStoreAssociationsOutput>,
  errors: [TrustStoreNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTrustStoreAssociations",
  pagination: {
    inputToken: "Marker",
    outputToken: "NextMarker",
    items: "TrustStoreAssociations",
    pageSize: "PageSize",
  } as const,
})) as any;

export type DescribeTrustStoreRevocationsError =
  | RevocationIdNotFoundException
  | TrustStoreNotFoundException
  | CommonErrors;
/**
 * Describes the revocation files in use by the specified trust store or revocation
 * files.
 */
export const describeTrustStoreRevocations: API.PaginatedOperationMethod<
  DescribeTrustStoreRevocationsInput,
  DescribeTrustStoreRevocationsOutput,
  DescribeTrustStoreRevocationsError,
  Credentials | HttpClient.HttpClient,
  DescribeTrustStoreRevocation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(161) as any as S.Schema<DescribeTrustStoreRevocationsInput>,
  output: __S(164) as any as S.Schema<DescribeTrustStoreRevocationsOutput>,
  errors: [RevocationIdNotFoundException, TrustStoreNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTrustStoreRevocations",
  pagination: {
    inputToken: "Marker",
    outputToken: "NextMarker",
    items: "TrustStoreRevocations",
    pageSize: "PageSize",
  } as const,
})) as any;

export type DescribeTrustStoresError = TrustStoreNotFoundException | CommonErrors;
/**
 * Describes all trust stores for the specified account.
 */
export const describeTrustStores: API.PaginatedOperationMethod<
  DescribeTrustStoresInput,
  DescribeTrustStoresOutput,
  DescribeTrustStoresError,
  Credentials | HttpClient.HttpClient,
  TrustStore
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(167) as any as S.Schema<DescribeTrustStoresInput>,
  output: __S(168) as any as S.Schema<DescribeTrustStoresOutput>,
  errors: [TrustStoreNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTrustStores",
  pagination: {
    inputToken: "Marker",
    outputToken: "NextMarker",
    items: "TrustStores",
    pageSize: "PageSize",
  } as const,
})) as any;

export type GetResourcePolicyError = ResourceNotFoundException | CommonErrors;
/**
 * Retrieves the resource policy for a specified resource.
 */
export const getResourcePolicy: API.OperationMethod<
  GetResourcePolicyInput,
  GetResourcePolicyOutput,
  GetResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(169) as any as S.Schema<GetResourcePolicyInput>,
  output: __S(170) as any as S.Schema<GetResourcePolicyOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourcePolicy",
}));

export type GetTrustStoreCaCertificatesBundleError = TrustStoreNotFoundException | CommonErrors;
/**
 * Retrieves the ca certificate bundle.
 *
 * This action returns a pre-signed S3 URI which is
 * active for ten minutes.
 */
export const getTrustStoreCaCertificatesBundle: API.OperationMethod<
  GetTrustStoreCaCertificatesBundleInput,
  GetTrustStoreCaCertificatesBundleOutput,
  GetTrustStoreCaCertificatesBundleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(171) as any as S.Schema<GetTrustStoreCaCertificatesBundleInput>,
  output: __S(172) as any as S.Schema<GetTrustStoreCaCertificatesBundleOutput>,
  errors: [TrustStoreNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTrustStoreCaCertificatesBundle",
}));

export type GetTrustStoreRevocationContentError =
  | RevocationIdNotFoundException
  | TrustStoreNotFoundException
  | CommonErrors;
/**
 * Retrieves the specified revocation file.
 *
 * This action returns a pre-signed S3 URI which is
 * active for ten minutes.
 */
export const getTrustStoreRevocationContent: API.OperationMethod<
  GetTrustStoreRevocationContentInput,
  GetTrustStoreRevocationContentOutput,
  GetTrustStoreRevocationContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(173) as any as S.Schema<GetTrustStoreRevocationContentInput>,
  output: __S(174) as any as S.Schema<GetTrustStoreRevocationContentOutput>,
  errors: [RevocationIdNotFoundException, TrustStoreNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTrustStoreRevocationContent",
}));

export type ModifyCapacityReservationError =
  | CapacityDecreaseRequestsLimitExceededException
  | CapacityReservationPendingException
  | CapacityUnitsLimitExceededException
  | InsufficientCapacityException
  | InvalidConfigurationRequestException
  | LoadBalancerNotFoundException
  | OperationNotPermittedException
  | PriorRequestNotCompleteException
  | CommonErrors;
/**
 * Modifies the capacity reservation of the specified load balancer.
 *
 * When modifying capacity reservation, you must include at least one `MinimumLoadBalancerCapacity`
 * or `ResetCapacityReservation`.
 */
export const modifyCapacityReservation: API.OperationMethod<
  ModifyCapacityReservationInput,
  ModifyCapacityReservationOutput,
  ModifyCapacityReservationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(175) as any as S.Schema<ModifyCapacityReservationInput>,
  output: __S(176) as any as S.Schema<ModifyCapacityReservationOutput>,
  errors: [
    CapacityDecreaseRequestsLimitExceededException,
    CapacityReservationPendingException,
    CapacityUnitsLimitExceededException,
    InsufficientCapacityException,
    InvalidConfigurationRequestException,
    LoadBalancerNotFoundException,
    OperationNotPermittedException,
    PriorRequestNotCompleteException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyCapacityReservation",
}));

export type ModifyIpPoolsError = LoadBalancerNotFoundException | CommonErrors;
/**
 * [Application Load Balancers] Modify the IP pool associated to a load balancer.
 */
export const modifyIpPools: API.OperationMethod<
  ModifyIpPoolsInput,
  ModifyIpPoolsOutput,
  ModifyIpPoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(178) as any as S.Schema<ModifyIpPoolsInput>,
  output: __S(179) as any as S.Schema<ModifyIpPoolsOutput>,
  errors: [LoadBalancerNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyIpPools",
}));

export type ModifyListenerError =
  | ALPNPolicyNotSupportedException
  | CertificateNotFoundException
  | DuplicateListenerException
  | IncompatibleProtocolsException
  | InvalidConfigurationRequestException
  | InvalidLoadBalancerActionException
  | ListenerNotFoundException
  | SSLPolicyNotFoundException
  | TargetGroupAssociationLimitException
  | TargetGroupNotFoundException
  | TooManyActionsException
  | TooManyCertificatesException
  | TooManyListenersException
  | TooManyRegistrationsForTargetIdException
  | TooManyTargetsException
  | TooManyUniqueTargetGroupsPerLoadBalancerException
  | TrustStoreNotFoundException
  | TrustStoreNotReadyException
  | UnsupportedProtocolException
  | CommonErrors;
/**
 * Replaces the specified properties of the specified listener. Any properties that you do
 * not specify remain unchanged.
 *
 * Changing the protocol from HTTPS to HTTP, or from TLS to TCP, removes the security policy
 * and default certificate properties. If you change the protocol from HTTP to HTTPS, or from TCP
 * to TLS, you must add the security policy and default certificate properties.
 *
 * To add an item to a list, remove an item from a list, or update an item in a list, you
 * must provide the entire list. For example, to add an action, specify a list with the current
 * actions plus the new action.
 */
export const modifyListener: API.OperationMethod<
  ModifyListenerInput,
  ModifyListenerOutput,
  ModifyListenerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(180) as any as S.Schema<ModifyListenerInput>,
  output: __S(181) as any as S.Schema<ModifyListenerOutput>,
  errors: [
    ALPNPolicyNotSupportedException,
    CertificateNotFoundException,
    DuplicateListenerException,
    IncompatibleProtocolsException,
    InvalidConfigurationRequestException,
    InvalidLoadBalancerActionException,
    ListenerNotFoundException,
    SSLPolicyNotFoundException,
    TargetGroupAssociationLimitException,
    TargetGroupNotFoundException,
    TooManyActionsException,
    TooManyCertificatesException,
    TooManyListenersException,
    TooManyRegistrationsForTargetIdException,
    TooManyTargetsException,
    TooManyUniqueTargetGroupsPerLoadBalancerException,
    TrustStoreNotFoundException,
    TrustStoreNotReadyException,
    UnsupportedProtocolException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyListener",
}));

export type ModifyListenerAttributesError =
  | InvalidConfigurationRequestException
  | ListenerNotFoundException
  | CommonErrors;
/**
 * Modifies the specified attributes of the specified listener.
 */
export const modifyListenerAttributes: API.OperationMethod<
  ModifyListenerAttributesInput,
  ModifyListenerAttributesOutput,
  ModifyListenerAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(182) as any as S.Schema<ModifyListenerAttributesInput>,
  output: __S(183) as any as S.Schema<ModifyListenerAttributesOutput>,
  errors: [InvalidConfigurationRequestException, ListenerNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyListenerAttributes",
}));

export type ModifyLoadBalancerAttributesError =
  | InvalidConfigurationRequestException
  | LoadBalancerNotFoundException
  | CommonErrors;
/**
 * Modifies the specified attributes of the specified Application Load Balancer, Network Load
 * Balancer, or Gateway Load Balancer.
 *
 * If any of the specified attributes can't be modified as requested, the call fails. Any
 * existing attributes that you do not modify retain their current values.
 */
export const modifyLoadBalancerAttributes: API.OperationMethod<
  ModifyLoadBalancerAttributesInput,
  ModifyLoadBalancerAttributesOutput,
  ModifyLoadBalancerAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(184) as any as S.Schema<ModifyLoadBalancerAttributesInput>,
  output: __S(185) as any as S.Schema<ModifyLoadBalancerAttributesOutput>,
  errors: [InvalidConfigurationRequestException, LoadBalancerNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyLoadBalancerAttributes",
}));

export type ModifyRuleError =
  | IncompatibleProtocolsException
  | InvalidLoadBalancerActionException
  | OperationNotPermittedException
  | RuleNotFoundException
  | TargetGroupAssociationLimitException
  | TargetGroupNotFoundException
  | TooManyActionsException
  | TooManyRegistrationsForTargetIdException
  | TooManyTargetsException
  | TooManyUniqueTargetGroupsPerLoadBalancerException
  | UnsupportedProtocolException
  | CommonErrors;
/**
 * Replaces the specified properties of the specified rule. Any properties that you do not
 * specify are unchanged.
 *
 * To add an item to a list, remove an item from a list, or update an item in a list, you
 * must provide the entire list. For example, to add an action, specify a list with the current
 * actions plus the new action.
 */
export const modifyRule: API.OperationMethod<
  ModifyRuleInput,
  ModifyRuleOutput,
  ModifyRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(186) as any as S.Schema<ModifyRuleInput>,
  output: __S(187) as any as S.Schema<ModifyRuleOutput>,
  errors: [
    IncompatibleProtocolsException,
    InvalidLoadBalancerActionException,
    OperationNotPermittedException,
    RuleNotFoundException,
    TargetGroupAssociationLimitException,
    TargetGroupNotFoundException,
    TooManyActionsException,
    TooManyRegistrationsForTargetIdException,
    TooManyTargetsException,
    TooManyUniqueTargetGroupsPerLoadBalancerException,
    UnsupportedProtocolException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyRule",
}));

export type ModifyTargetGroupError =
  | InvalidConfigurationRequestException
  | TargetGroupNotFoundException
  | CommonErrors;
/**
 * Modifies the health checks used when evaluating the health state of the targets in the
 * specified target group.
 */
export const modifyTargetGroup: API.OperationMethod<
  ModifyTargetGroupInput,
  ModifyTargetGroupOutput,
  ModifyTargetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(188) as any as S.Schema<ModifyTargetGroupInput>,
  output: __S(189) as any as S.Schema<ModifyTargetGroupOutput>,
  errors: [InvalidConfigurationRequestException, TargetGroupNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyTargetGroup",
}));

export type ModifyTargetGroupAttributesError =
  | InvalidConfigurationRequestException
  | TargetGroupNotFoundException
  | CommonErrors;
/**
 * Modifies the specified attributes of the specified target group.
 */
export const modifyTargetGroupAttributes: API.OperationMethod<
  ModifyTargetGroupAttributesInput,
  ModifyTargetGroupAttributesOutput,
  ModifyTargetGroupAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(190) as any as S.Schema<ModifyTargetGroupAttributesInput>,
  output: __S(191) as any as S.Schema<ModifyTargetGroupAttributesOutput>,
  errors: [InvalidConfigurationRequestException, TargetGroupNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyTargetGroupAttributes",
}));

export type ModifyTrustStoreError =
  | CaCertificatesBundleNotFoundException
  | InvalidCaCertificatesBundleException
  | TrustStoreNotFoundException
  | CommonErrors;
/**
 * Update the ca certificate bundle for the specified trust store.
 */
export const modifyTrustStore: API.OperationMethod<
  ModifyTrustStoreInput,
  ModifyTrustStoreOutput,
  ModifyTrustStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(192) as any as S.Schema<ModifyTrustStoreInput>,
  output: __S(193) as any as S.Schema<ModifyTrustStoreOutput>,
  errors: [
    CaCertificatesBundleNotFoundException,
    InvalidCaCertificatesBundleException,
    TrustStoreNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyTrustStore",
}));

export type RegisterTargetsError =
  | InvalidTargetException
  | TargetGroupNotFoundException
  | TooManyRegistrationsForTargetIdException
  | TooManyTargetsException
  | CommonErrors;
/**
 * Registers the specified targets with the specified target group.
 *
 * If the target is an EC2 instance, it must be in the `running` state when you
 * register it.
 *
 * By default, the load balancer routes requests to registered targets using the protocol and
 * port for the target group. Alternatively, you can override the port for a target when you
 * register it. You can register each EC2 instance or IP address with the same target group
 * multiple times using different ports.
 *
 * For more information, see the following:
 *
 * - Register
 * targets for your Application Load Balancer
 *
 * - Register targets
 * for your Network Load Balancer
 *
 * - Register targets for your
 * Gateway Load Balancer
 */
export const registerTargets: API.OperationMethod<
  RegisterTargetsInput,
  RegisterTargetsOutput,
  RegisterTargetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(194) as any as S.Schema<RegisterTargetsInput>,
  output: __S(195) as any as S.Schema<RegisterTargetsOutput>,
  errors: [
    InvalidTargetException,
    TargetGroupNotFoundException,
    TooManyRegistrationsForTargetIdException,
    TooManyTargetsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterTargets",
}));

export type RemoveListenerCertificatesError =
  | ListenerNotFoundException
  | OperationNotPermittedException
  | CommonErrors;
/**
 * Removes the specified certificate from the certificate list for the specified HTTPS or TLS
 * listener.
 */
export const removeListenerCertificates: API.OperationMethod<
  RemoveListenerCertificatesInput,
  RemoveListenerCertificatesOutput,
  RemoveListenerCertificatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(196) as any as S.Schema<RemoveListenerCertificatesInput>,
  output: __S(197) as any as S.Schema<RemoveListenerCertificatesOutput>,
  errors: [ListenerNotFoundException, OperationNotPermittedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveListenerCertificates",
}));

export type RemoveTagsError =
  | ListenerNotFoundException
  | LoadBalancerNotFoundException
  | RuleNotFoundException
  | TargetGroupNotFoundException
  | TooManyTagsException
  | TrustStoreNotFoundException
  | CommonErrors;
/**
 * Removes the specified tags from the specified Elastic Load Balancing resources. You can
 * remove the tags for one or more Application Load Balancers, Network Load Balancers, Gateway
 * Load Balancers, target groups, listeners, or rules.
 */
export const removeTags: API.OperationMethod<
  RemoveTagsInput,
  RemoveTagsOutput,
  RemoveTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(199) as any as S.Schema<RemoveTagsInput>,
  output: __S(200) as any as S.Schema<RemoveTagsOutput>,
  errors: [
    ListenerNotFoundException,
    LoadBalancerNotFoundException,
    RuleNotFoundException,
    TargetGroupNotFoundException,
    TooManyTagsException,
    TrustStoreNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveTags",
}));

export type RemoveTrustStoreRevocationsError =
  | RevocationIdNotFoundException
  | TrustStoreNotFoundException
  | CommonErrors;
/**
 * Removes the specified revocation file from the specified trust store.
 */
export const removeTrustStoreRevocations: API.OperationMethod<
  RemoveTrustStoreRevocationsInput,
  RemoveTrustStoreRevocationsOutput,
  RemoveTrustStoreRevocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(201) as any as S.Schema<RemoveTrustStoreRevocationsInput>,
  output: __S(202) as any as S.Schema<RemoveTrustStoreRevocationsOutput>,
  errors: [RevocationIdNotFoundException, TrustStoreNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveTrustStoreRevocations",
}));

export type SetIpAddressTypeError =
  | InvalidConfigurationRequestException
  | InvalidSubnetException
  | LoadBalancerNotFoundException
  | CommonErrors;
/**
 * Sets the type of IP addresses used by the subnets of the specified load balancer.
 */
export const setIpAddressType: API.OperationMethod<
  SetIpAddressTypeInput,
  SetIpAddressTypeOutput,
  SetIpAddressTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(203) as any as S.Schema<SetIpAddressTypeInput>,
  output: __S(204) as any as S.Schema<SetIpAddressTypeOutput>,
  errors: [
    InvalidConfigurationRequestException,
    InvalidSubnetException,
    LoadBalancerNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetIpAddressType",
}));

export type SetRulePrioritiesError =
  | OperationNotPermittedException
  | PriorityInUseException
  | RuleNotFoundException
  | CommonErrors;
/**
 * Sets the priorities of the specified rules.
 *
 * You can reorder the rules as long as there are no priority conflicts in the new order. Any
 * existing rules that you do not specify retain their current priority.
 */
export const setRulePriorities: API.OperationMethod<
  SetRulePrioritiesInput,
  SetRulePrioritiesOutput,
  SetRulePrioritiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(207) as any as S.Schema<SetRulePrioritiesInput>,
  output: __S(208) as any as S.Schema<SetRulePrioritiesOutput>,
  errors: [OperationNotPermittedException, PriorityInUseException, RuleNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetRulePriorities",
}));

export type SetSecurityGroupsError =
  | InvalidConfigurationRequestException
  | InvalidSecurityGroupException
  | LoadBalancerNotFoundException
  | CommonErrors;
/**
 * Associates the specified security groups with the specified Application Load Balancer or
 * Network Load Balancer. The specified security groups override the previously associated
 * security groups.
 *
 * You can't perform this operation on a Network Load Balancer unless you specified a
 * security group for the load balancer when you created it.
 *
 * You can't associate a security group with a Gateway Load Balancer.
 */
export const setSecurityGroups: API.OperationMethod<
  SetSecurityGroupsInput,
  SetSecurityGroupsOutput,
  SetSecurityGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(209) as any as S.Schema<SetSecurityGroupsInput>,
  output: __S(210) as any as S.Schema<SetSecurityGroupsOutput>,
  errors: [
    InvalidConfigurationRequestException,
    InvalidSecurityGroupException,
    LoadBalancerNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetSecurityGroups",
}));

export type SetSubnetsError =
  | AllocationIdNotFoundException
  | AvailabilityZoneNotSupportedException
  | CapacityReservationPendingException
  | InvalidConfigurationRequestException
  | InvalidSubnetException
  | LoadBalancerNotFoundException
  | SubnetNotFoundException
  | CommonErrors;
/**
 * Enables the Availability Zones for the specified public subnets for the specified
 * Application Load Balancer, Network Load Balancer or Gateway Load Balancer. The specified subnets
 * replace the previously enabled subnets.
 */
export const setSubnets: API.OperationMethod<
  SetSubnetsInput,
  SetSubnetsOutput,
  SetSubnetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(211) as any as S.Schema<SetSubnetsInput>,
  output: __S(212) as any as S.Schema<SetSubnetsOutput>,
  errors: [
    AllocationIdNotFoundException,
    AvailabilityZoneNotSupportedException,
    CapacityReservationPendingException,
    InvalidConfigurationRequestException,
    InvalidSubnetException,
    LoadBalancerNotFoundException,
    SubnetNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetSubnets",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ CertificateArn: S.optional(S.String), IsDefault: S.optional(S.Boolean) }),
      ).annotate({ identifier: "Certificate" });
    case 1:
      return S.Array(__S(0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ListenerArn: S.optional(S.String),
          Certificates: S.optional(__S(1)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AddListenerCertificatesInput",
      });
    case 3:
      return S.suspend(() => S.Struct({ Certificates: S.optional(__S(1)) }).pipe(ns)).annotate({
        identifier: "AddListenerCertificatesOutput",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({ Key: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "Tag" });
    case 6:
      return S.Array(__S(5));
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceArns: S.optional(__S(4)), Tags: S.optional(__S(6)) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AddTagsInput" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AddTagsOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          S3Bucket: S.optional(S.String),
          S3Key: S.optional(S.String),
          S3ObjectVersion: S.optional(S.String),
          RevocationType: S.optional(S.String),
        }),
      ).annotate({ identifier: "RevocationContent" });
    case 2:
      return S.Array(__S(9));
    case 3:
      return S.suspend(() =>
        S.Struct({
          TrustStoreArn: S.optional(S.String),
          RevocationContents: S.optional(__S(10)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AddTrustStoreRevocationsInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TrustStoreArn: S.optional(S.String),
          RevocationId: S.optional(S.Number),
          RevocationType: S.optional(S.String),
          NumberOfRevokedEntries: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TrustStoreRevocation" });
    case 5:
      return S.Array(__S(12));
    case 6:
      return S.suspend(() =>
        S.Struct({ TrustStoreRevocations: S.optional(__S(13)) }).pipe(ns),
      ).annotate({
        identifier: "AddTrustStoreRevocationsOutput",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Issuer: S.optional(S.String),
          AuthorizationEndpoint: S.optional(S.String),
          TokenEndpoint: S.optional(S.String),
          UserInfoEndpoint: S.optional(S.String),
          ClientId: S.optional(S.String),
          ClientSecret: S.optional(SensitiveString),
          SessionCookieName: S.optional(S.String),
          Scope: S.optional(S.String),
          SessionTimeout: S.optional(S.Number),
          AuthenticationRequestExtraParams: S.optional(__S(15)),
          OnUnauthenticatedRequest: S.optional(S.String),
          UseExistingClientSecret: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AuthenticateOidcActionConfig",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          UserPoolArn: S.optional(S.String),
          UserPoolClientId: S.optional(S.String),
          UserPoolDomain: S.optional(S.String),
          SessionCookieName: S.optional(S.String),
          Scope: S.optional(S.String),
          SessionTimeout: S.optional(S.Number),
          AuthenticationRequestExtraParams: S.optional(__S(17)),
          OnUnauthenticatedRequest: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AuthenticateCognitoActionConfig",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Protocol: S.optional(S.String),
          Port: S.optional(S.String),
          Host: S.optional(S.String),
          Path: S.optional(S.String),
          Query: S.optional(S.String),
          StatusCode: S.optional(S.String),
        }),
      ).annotate({ identifier: "RedirectActionConfig" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          MessageBody: S.optional(S.String),
          StatusCode: S.optional(S.String),
          ContentType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "FixedResponseActionConfig",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ TargetGroupArn: S.optional(S.String), Weight: S.optional(S.Number) }),
      ).annotate({ identifier: "TargetGroupTuple" });
    case 6:
      return S.Array(__S(21));
    case 7:
      return S.suspend(() =>
        S.Struct({ Enabled: S.optional(S.Boolean), DurationSeconds: S.optional(S.Number) }),
      ).annotate({
        identifier: "TargetGroupStickinessConfig",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TargetGroups: S.optional(__S(22)),
          TargetGroupStickinessConfig: S.optional(__S(23)),
        }),
      ).annotate({ identifier: "ForwardActionConfig" });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Format: S.optional(S.String),
          Name: S.optional(S.String),
          Values: S.optional(__S(25)),
        }),
      ).annotate({
        identifier: "JwtValidationActionAdditionalClaim",
      });
    case 3:
      return S.Array(__S(26));
    case 4:
      return S.suspend(() =>
        S.Struct({
          JwksEndpoint: S.optional(S.String),
          Issuer: S.optional(S.String),
          AdditionalClaims: S.optional(__S(27)),
        }),
      ).annotate({
        identifier: "JwtValidationActionConfig",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          TargetGroupArn: S.optional(S.String),
          AuthenticateOidcConfig: S.optional(__S(16)),
          AuthenticateCognitoConfig: S.optional(__S(18)),
          Order: S.optional(S.Number),
          RedirectConfig: S.optional(__S(19)),
          FixedResponseConfig: S.optional(__S(20)),
          ForwardConfig: S.optional(__S(24)),
          JwtValidationConfig: S.optional(__S(28)),
        }),
      ).annotate({ identifier: "Action" });
    case 6:
      return S.Array(__S(29));
    case 7:
      return S.Array(S.String);
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Mode: S.optional(S.String),
          TrustStoreArn: S.optional(S.String),
          IgnoreClientCertificateExpiry: S.optional(S.Boolean),
          TrustStoreAssociationStatus: S.optional(S.String),
          AdvertiseTrustStoreCaNames: S.optional(S.String),
        }),
      ).annotate({
        identifier: "MutualAuthenticationAttributes",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerArn: S.optional(S.String),
          Protocol: S.optional(S.String),
          Port: S.optional(S.Number),
          SslPolicy: S.optional(S.String),
          Certificates: S.optional(__S(1)),
          DefaultActions: S.optional(__S(30)),
          AlpnPolicy: S.optional(__S(31)),
          Tags: S.optional(__S(6)),
          MutualAuthentication: S.optional(__S(32)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateListenerInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ListenerArn: S.optional(S.String),
          LoadBalancerArn: S.optional(S.String),
          Port: S.optional(S.Number),
          Protocol: S.optional(S.String),
          Certificates: S.optional(__S(1)),
          SslPolicy: S.optional(S.String),
          DefaultActions: S.optional(__S(30)),
          AlpnPolicy: S.optional(__S(31)),
          MutualAuthentication: S.optional(__S(32)),
        }),
      ).annotate({ identifier: "Listener" });
    case 3:
      return S.Array(__S(34));
    case 4:
      return S.suspend(() => S.Struct({ Listeners: S.optional(__S(35)) }).pipe(ns)).annotate({
        identifier: "CreateListenerOutput",
      });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          SubnetId: S.optional(S.String),
          AllocationId: S.optional(S.String),
          PrivateIPv4Address: S.optional(S.String),
          IPv6Address: S.optional(S.String),
          SourceNatIpv6Prefix: S.optional(S.String),
        }),
      ).annotate({ identifier: "SubnetMapping" });
    case 7:
      return S.Array(__S(38));
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() => S.Struct({ Ipv4IpamPoolId: S.optional(S.String) })).annotate({
        identifier: "IpamPools",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Subnets: S.optional(__S(37)),
          SubnetMappings: S.optional(__S(39)),
          SecurityGroups: S.optional(__S(40)),
          Scheme: S.optional(S.String),
          Tags: S.optional(__S(6)),
          Type: S.optional(S.String),
          IpAddressType: S.optional(S.String),
          CustomerOwnedIpv4Pool: S.optional(S.String),
          EnablePrefixForIpv6SourceNat: S.optional(S.String),
          IpamPools: S.optional(__S(41)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateLoadBalancerInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Code: S.optional(S.String), Reason: S.optional(S.String) }),
      ).annotate({ identifier: "LoadBalancerState" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          IpAddress: S.optional(S.String),
          AllocationId: S.optional(S.String),
          PrivateIPv4Address: S.optional(S.String),
          IPv6Address: S.optional(S.String),
        }),
      ).annotate({ identifier: "LoadBalancerAddress" });
    case 5:
      return S.Array(__S(44));
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({
          ZoneName: S.optional(S.String),
          SubnetId: S.optional(S.String),
          OutpostId: S.optional(S.String),
          LoadBalancerAddresses: S.optional(__S(45)),
          SourceNatIpv6Prefixes: S.optional(__S(46)),
        }),
      ).annotate({ identifier: "AvailabilityZone" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(47));
    case 1:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerArn: S.optional(S.String),
          DNSName: S.optional(S.String),
          CanonicalHostedZoneId: S.optional(S.String),
          CreatedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          LoadBalancerName: S.optional(S.String),
          Scheme: S.optional(S.String),
          VpcId: S.optional(S.String),
          State: S.optional(__S(43)),
          Type: S.optional(S.String),
          AvailabilityZones: S.optional(__S(48)),
          SecurityGroups: S.optional(__S(40)),
          IpAddressType: S.optional(S.String),
          CustomerOwnedIpv4Pool: S.optional(S.String),
          EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic: S.optional(S.String),
          EnablePrefixForIpv6SourceNat: S.optional(S.String),
          IpamPools: S.optional(__S(41)),
        }),
      ).annotate({ identifier: "LoadBalancer" });
    case 2:
      return S.Array(__S(49));
    case 3:
      return S.suspend(() => S.Struct({ LoadBalancers: S.optional(__S(50)) }).pipe(ns)).annotate({
        identifier: "CreateLoadBalancerOutput",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({ Values: S.optional(__S(52)), RegexValues: S.optional(__S(52)) }),
      ).annotate({
        identifier: "HostHeaderConditionConfig",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Values: S.optional(__S(52)), RegexValues: S.optional(__S(52)) }),
      ).annotate({
        identifier: "PathPatternConditionConfig",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          HttpHeaderName: S.optional(S.String),
          Values: S.optional(__S(52)),
          RegexValues: S.optional(__S(52)),
        }),
      ).annotate({
        identifier: "HttpHeaderConditionConfig",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Key: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "QueryStringKeyValuePair" });
    case 1:
      return S.Array(__S(56));
    case 2:
      return S.suspend(() => S.Struct({ Values: S.optional(__S(57)) })).annotate({
        identifier: "QueryStringConditionConfig",
      });
    case 3:
      return S.suspend(() => S.Struct({ Values: S.optional(__S(52)) })).annotate({
        identifier: "HttpRequestMethodConditionConfig",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Values: S.optional(__S(52)),
          IpAddressType: S.optional(S.String),
        }),
      ).annotate({ identifier: "SourceIpConditionConfig" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Field: S.optional(S.String),
          Values: S.optional(__S(52)),
          HostHeaderConfig: S.optional(__S(53)),
          PathPatternConfig: S.optional(__S(54)),
          HttpHeaderConfig: S.optional(__S(55)),
          QueryStringConfig: S.optional(__S(58)),
          HttpRequestMethodConfig: S.optional(__S(59)),
          SourceIpConfig: S.optional(__S(60)),
          RegexValues: S.optional(__S(52)),
        }),
      ).annotate({ identifier: "RuleCondition" });
    case 6:
      return S.Array(__S(61));
    case 7:
      return S.suspend(() =>
        S.Struct({ Regex: S.optional(S.String), Replace: S.optional(S.String) }),
      ).annotate({ identifier: "RewriteConfig" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(63));
    case 1:
      return S.suspend(() => S.Struct({ Rewrites: S.optional(__S(64)) })).annotate({
        identifier: "HostHeaderRewriteConfig",
      });
    case 2:
      return S.suspend(() => S.Struct({ Rewrites: S.optional(__S(64)) })).annotate({
        identifier: "UrlRewriteConfig",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          HostHeaderRewriteConfig: S.optional(__S(65)),
          UrlRewriteConfig: S.optional(__S(66)),
        }),
      ).annotate({ identifier: "RuleTransform" });
    case 4:
      return S.Array(__S(67));
    case 5:
      return S.suspend(() =>
        S.Struct({
          ListenerArn: S.optional(S.String),
          Conditions: S.optional(__S(62)),
          Priority: S.optional(S.Number),
          Actions: S.optional(__S(30)),
          Tags: S.optional(__S(6)),
          Transforms: S.optional(__S(68)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateRuleInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RuleArn: S.optional(S.String),
          Priority: S.optional(S.String),
          Conditions: S.optional(__S(62)),
          Actions: S.optional(__S(30)),
          IsDefault: S.optional(S.Boolean),
          Transforms: S.optional(__S(68)),
        }),
      ).annotate({ identifier: "Rule" });
    case 7:
      return S.Array(__S(70));
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Rules: S.optional(__S(71)) }).pipe(ns)).annotate({
        identifier: "CreateRuleOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ HttpCode: S.optional(S.String), GrpcCode: S.optional(S.String) }),
      ).annotate({ identifier: "Matcher" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Protocol: S.optional(S.String),
          ProtocolVersion: S.optional(S.String),
          Port: S.optional(S.Number),
          VpcId: S.optional(S.String),
          HealthCheckProtocol: S.optional(S.String),
          HealthCheckPort: S.optional(S.String),
          HealthCheckEnabled: S.optional(S.Boolean),
          HealthCheckPath: S.optional(S.String),
          HealthCheckIntervalSeconds: S.optional(S.Number),
          HealthCheckTimeoutSeconds: S.optional(S.Number),
          HealthyThresholdCount: S.optional(S.Number),
          UnhealthyThresholdCount: S.optional(S.Number),
          Matcher: S.optional(__S(73)),
          TargetType: S.optional(S.String),
          Tags: S.optional(__S(6)),
          IpAddressType: S.optional(S.String),
          TargetControlPort: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateTargetGroupInput" });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          TargetGroupArn: S.optional(S.String),
          TargetGroupName: S.optional(S.String),
          Protocol: S.optional(S.String),
          Port: S.optional(S.Number),
          VpcId: S.optional(S.String),
          HealthCheckProtocol: S.optional(S.String),
          HealthCheckPort: S.optional(S.String),
          HealthCheckEnabled: S.optional(S.Boolean),
          HealthCheckIntervalSeconds: S.optional(S.Number),
          HealthCheckTimeoutSeconds: S.optional(S.Number),
          HealthyThresholdCount: S.optional(S.Number),
          UnhealthyThresholdCount: S.optional(S.Number),
          HealthCheckPath: S.optional(S.String),
          Matcher: S.optional(__S(73)),
          LoadBalancerArns: S.optional(__S(75)),
          TargetType: S.optional(S.String),
          ProtocolVersion: S.optional(S.String),
          IpAddressType: S.optional(S.String),
          TargetControlPort: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TargetGroup" });
    case 5:
      return S.Array(__S(76));
    case 6:
      return S.suspend(() => S.Struct({ TargetGroups: S.optional(__S(77)) }).pipe(ns)).annotate({
        identifier: "CreateTargetGroupOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          CaCertificatesBundleS3Bucket: S.optional(S.String),
          CaCertificatesBundleS3Key: S.optional(S.String),
          CaCertificatesBundleS3ObjectVersion: S.optional(S.String),
          Tags: S.optional(__S(6)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateTrustStoreInput" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          TrustStoreArn: S.optional(S.String),
          Status: S.optional(S.String),
          NumberOfCaCertificates: S.optional(S.Number),
          TotalRevokedEntries: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TrustStore" });
    case 1:
      return S.Array(__S(80));
    case 2:
      return S.suspend(() => S.Struct({ TrustStores: S.optional(__S(81)) }).pipe(ns)).annotate({
        identifier: "CreateTrustStoreOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ListenerArn: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteListenerInput" });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteListenerOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ LoadBalancerArn: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteLoadBalancerInput" });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteLoadBalancerOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ RuleArn: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteRuleInput" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteRuleOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ TrustStoreArn: S.optional(S.String), ResourceArn: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteSharedTrustStoreAssociationInput",
      });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteSharedTrustStoreAssociationOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ TargetGroupArn: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteTargetGroupInput" });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteTargetGroupOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ TrustStoreArn: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteTrustStoreInput" });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteTrustStoreOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Port: S.optional(S.Number),
          AvailabilityZone: S.optional(S.String),
          QuicServerId: S.optional(S.String),
        }),
      ).annotate({ identifier: "TargetDescription" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(95));
    case 1:
      return S.suspend(() =>
        S.Struct({
          TargetGroupArn: S.optional(S.String),
          Targets: S.optional(__S(96)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeregisterTargetsInput" });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeregisterTargetsOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Marker: S.optional(S.String), PageSize: S.optional(S.Number) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeAccountLimitsInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Max: S.optional(S.String) }),
      ).annotate({ identifier: "Limit" });
    case 5:
      return S.Array(__S(100));
    case 6:
      return S.suspend(() =>
        S.Struct({ Limits: S.optional(__S(101)), NextMarker: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DescribeAccountLimitsOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ LoadBalancerArn: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeCapacityReservationInput",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ CapacityUnits: S.optional(S.Number) })).annotate({
        identifier: "MinimumLoadBalancerCapacity",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Code: S.optional(S.String), Reason: S.optional(S.String) }),
      ).annotate({
        identifier: "CapacityReservationStatus",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          State: S.optional(__S(105)),
          AvailabilityZone: S.optional(S.String),
          EffectiveCapacityUnits: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ZonalCapacityReservationState",
      });
    case 3:
      return S.Array(__S(106));
    case 4:
      return S.suspend(() =>
        S.Struct({
          LastModifiedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          DecreaseRequestsRemaining: S.optional(S.Number),
          MinimumLoadBalancerCapacity: S.optional(__S(104)),
          CapacityReservationState: S.optional(__S(107)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeCapacityReservationOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ListenerArn: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeListenerAttributesInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Key: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "ListenerAttribute" });
    case 7:
      return S.Array(__S(110));
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Attributes: S.optional(__S(111)) }).pipe(ns)).annotate({
        identifier: "DescribeListenerAttributesOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ListenerArn: S.optional(S.String),
          Marker: S.optional(S.String),
          PageSize: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeListenerCertificatesInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Certificates: S.optional(__S(1)),
          NextMarker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeListenerCertificatesOutput",
      });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerArn: S.optional(S.String),
          ListenerArns: S.optional(__S(115)),
          Marker: S.optional(S.String),
          PageSize: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeListenersInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Listeners: S.optional(__S(35)), NextMarker: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "DescribeListenersOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ LoadBalancerArn: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeLoadBalancerAttributesInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Key: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "LoadBalancerAttribute" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(119));
    case 1:
      return S.suspend(() => S.Struct({ Attributes: S.optional(__S(120)) }).pipe(ns)).annotate({
        identifier: "DescribeLoadBalancerAttributesOutput",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerArns: S.optional(__S(75)),
          Names: S.optional(__S(122)),
          Marker: S.optional(S.String),
          PageSize: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeLoadBalancersInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          LoadBalancers: S.optional(__S(50)),
          NextMarker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeLoadBalancersOutput",
      });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          ListenerArn: S.optional(S.String),
          RuleArns: S.optional(__S(125)),
          Marker: S.optional(S.String),
          PageSize: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeRulesInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Rules: S.optional(__S(71)), NextMarker: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "DescribeRulesOutput" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Names: S.optional(__S(128)),
          Marker: S.optional(S.String),
          PageSize: S.optional(S.Number),
          LoadBalancerType: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeSSLPoliciesInput" });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Priority: S.optional(S.Number) }),
      ).annotate({ identifier: "Cipher" });
    case 4:
      return S.Array(__S(131));
    case 5:
      return S.suspend(() =>
        S.Struct({
          SslProtocols: S.optional(__S(130)),
          Ciphers: S.optional(__S(132)),
          Name: S.optional(S.String),
          SupportedLoadBalancerTypes: S.optional(__S(52)),
        }),
      ).annotate({ identifier: "SslPolicy" });
    case 6:
      return S.Array(__S(133));
    case 7:
      return S.suspend(() =>
        S.Struct({ SslPolicies: S.optional(__S(134)), NextMarker: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DescribeSSLPoliciesOutput",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceArns: S.optional(__S(4)) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeTagsInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.optional(S.String), Tags: S.optional(__S(6)) }),
      ).annotate({ identifier: "TagDescription" });
    case 2:
      return S.Array(__S(137));
    case 3:
      return S.suspend(() => S.Struct({ TagDescriptions: S.optional(__S(138)) }).pipe(ns)).annotate(
        { identifier: "DescribeTagsOutput" },
      );
    case 4:
      return S.suspend(() =>
        S.Struct({ TargetGroupArn: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeTargetGroupAttributesInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Key: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "TargetGroupAttribute" });
    case 6:
      return S.Array(__S(141));
    case 7:
      return S.suspend(() => S.Struct({ Attributes: S.optional(__S(142)) }).pipe(ns)).annotate({
        identifier: "DescribeTargetGroupAttributesOutput",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerArn: S.optional(S.String),
          TargetGroupArns: S.optional(__S(144)),
          Names: S.optional(__S(145)),
          Marker: S.optional(S.String),
          PageSize: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeTargetGroupsInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ TargetGroups: S.optional(__S(77)), NextMarker: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DescribeTargetGroupsOutput",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          TargetGroupArn: S.optional(S.String),
          Targets: S.optional(__S(96)),
          Include: S.optional(__S(148)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeTargetHealthInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          State: S.optional(S.String),
          Reason: S.optional(S.String),
          Description: S.optional(S.String),
        }),
      ).annotate({ identifier: "TargetHealth" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Result: S.optional(S.String),
          MitigationInEffect: S.optional(S.String),
        }),
      ).annotate({ identifier: "AnomalyDetection" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          State: S.optional(S.String),
          Reason: S.optional(S.String),
          Description: S.optional(S.String),
        }),
      ).annotate({ identifier: "AdministrativeOverride" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Target: S.optional(__S(95)),
          HealthCheckPort: S.optional(S.String),
          TargetHealth: S.optional(__S(150)),
          AnomalyDetection: S.optional(__S(151)),
          AdministrativeOverride: S.optional(__S(152)),
        }),
      ).annotate({ identifier: "TargetHealthDescription" });
    case 2:
      return S.Array(__S(153));
    case 3:
      return S.suspend(() =>
        S.Struct({ TargetHealthDescriptions: S.optional(__S(154)) }).pipe(ns),
      ).annotate({
        identifier: "DescribeTargetHealthOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TrustStoreArn: S.optional(S.String),
          Marker: S.optional(S.String),
          PageSize: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeTrustStoreAssociationsInput",
      });
    case 5:
      return S.suspend(() => S.Struct({ ResourceArn: S.optional(S.String) })).annotate({
        identifier: "TrustStoreAssociation",
      });
    case 6:
      return S.Array(__S(157));
    case 7:
      return S.suspend(() =>
        S.Struct({
          TrustStoreAssociations: S.optional(__S(158)),
          NextMarker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeTrustStoreAssociationsOutput",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.Number);
    case 1:
      return S.suspend(() =>
        S.Struct({
          TrustStoreArn: S.optional(S.String),
          RevocationIds: S.optional(__S(160)),
          Marker: S.optional(S.String),
          PageSize: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeTrustStoreRevocationsInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TrustStoreArn: S.optional(S.String),
          RevocationId: S.optional(S.Number),
          RevocationType: S.optional(S.String),
          NumberOfRevokedEntries: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "DescribeTrustStoreRevocation",
      });
    case 3:
      return S.Array(__S(162));
    case 4:
      return S.suspend(() =>
        S.Struct({
          TrustStoreRevocations: S.optional(__S(163)),
          NextMarker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeTrustStoreRevocationsOutput",
      });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({
          TrustStoreArns: S.optional(__S(165)),
          Names: S.optional(__S(166)),
          Marker: S.optional(S.String),
          PageSize: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeTrustStoresInput" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ TrustStores: S.optional(__S(81)), NextMarker: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DescribeTrustStoresOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetResourcePolicyInput" });
    case 2:
      return S.suspend(() => S.Struct({ Policy: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "GetResourcePolicyOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ TrustStoreArn: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetTrustStoreCaCertificatesBundleInput",
      });
    case 4:
      return S.suspend(() => S.Struct({ Location: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "GetTrustStoreCaCertificatesBundleOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ TrustStoreArn: S.optional(S.String), RevocationId: S.optional(S.Number) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetTrustStoreRevocationContentInput",
      });
    case 6:
      return S.suspend(() => S.Struct({ Location: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "GetTrustStoreRevocationContentOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerArn: S.optional(S.String),
          MinimumLoadBalancerCapacity: S.optional(__S(104)),
          ResetCapacityReservation: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyCapacityReservationInput",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LastModifiedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          DecreaseRequestsRemaining: S.optional(S.Number),
          MinimumLoadBalancerCapacity: S.optional(__S(104)),
          CapacityReservationState: S.optional(__S(107)),
        }).pipe(ns),
      ).annotate({
        identifier: "ModifyCapacityReservationOutput",
      });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerArn: S.optional(S.String),
          IpamPools: S.optional(__S(41)),
          RemoveIpamPools: S.optional(__S(177)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ModifyIpPoolsInput" });
    case 3:
      return S.suspend(() => S.Struct({ IpamPools: S.optional(__S(41)) }).pipe(ns)).annotate({
        identifier: "ModifyIpPoolsOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ListenerArn: S.optional(S.String),
          Port: S.optional(S.Number),
          Protocol: S.optional(S.String),
          SslPolicy: S.optional(S.String),
          Certificates: S.optional(__S(1)),
          DefaultActions: S.optional(__S(30)),
          AlpnPolicy: S.optional(__S(31)),
          MutualAuthentication: S.optional(__S(32)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ModifyListenerInput" });
    case 5:
      return S.suspend(() => S.Struct({ Listeners: S.optional(__S(35)) }).pipe(ns)).annotate({
        identifier: "ModifyListenerOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ListenerArn: S.optional(S.String),
          Attributes: S.optional(__S(111)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyListenerAttributesInput",
      });
    case 7:
      return S.suspend(() => S.Struct({ Attributes: S.optional(__S(111)) }).pipe(ns)).annotate({
        identifier: "ModifyListenerAttributesOutput",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerArn: S.optional(S.String),
          Attributes: S.optional(__S(120)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyLoadBalancerAttributesInput",
      });
    case 1:
      return S.suspend(() => S.Struct({ Attributes: S.optional(__S(120)) }).pipe(ns)).annotate({
        identifier: "ModifyLoadBalancerAttributesOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RuleArn: S.optional(S.String),
          Conditions: S.optional(__S(62)),
          Actions: S.optional(__S(30)),
          Transforms: S.optional(__S(68)),
          ResetTransforms: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ModifyRuleInput" });
    case 3:
      return S.suspend(() => S.Struct({ Rules: S.optional(__S(71)) }).pipe(ns)).annotate({
        identifier: "ModifyRuleOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TargetGroupArn: S.optional(S.String),
          HealthCheckProtocol: S.optional(S.String),
          HealthCheckPort: S.optional(S.String),
          HealthCheckPath: S.optional(S.String),
          HealthCheckEnabled: S.optional(S.Boolean),
          HealthCheckIntervalSeconds: S.optional(S.Number),
          HealthCheckTimeoutSeconds: S.optional(S.Number),
          HealthyThresholdCount: S.optional(S.Number),
          UnhealthyThresholdCount: S.optional(S.Number),
          Matcher: S.optional(__S(73)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ModifyTargetGroupInput" });
    case 5:
      return S.suspend(() => S.Struct({ TargetGroups: S.optional(__S(77)) }).pipe(ns)).annotate({
        identifier: "ModifyTargetGroupOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TargetGroupArn: S.optional(S.String),
          Attributes: S.optional(__S(142)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyTargetGroupAttributesInput",
      });
    case 7:
      return S.suspend(() => S.Struct({ Attributes: S.optional(__S(142)) }).pipe(ns)).annotate({
        identifier: "ModifyTargetGroupAttributesOutput",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TrustStoreArn: S.optional(S.String),
          CaCertificatesBundleS3Bucket: S.optional(S.String),
          CaCertificatesBundleS3Key: S.optional(S.String),
          CaCertificatesBundleS3ObjectVersion: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ModifyTrustStoreInput" });
    case 1:
      return S.suspend(() => S.Struct({ TrustStores: S.optional(__S(81)) }).pipe(ns)).annotate({
        identifier: "ModifyTrustStoreOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TargetGroupArn: S.optional(S.String),
          Targets: S.optional(__S(96)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "RegisterTargetsInput" });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "RegisterTargetsOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ListenerArn: S.optional(S.String),
          Certificates: S.optional(__S(1)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RemoveListenerCertificatesInput",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "RemoveListenerCertificatesOutput",
      });
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceArns: S.optional(__S(4)), TagKeys: S.optional(__S(198)) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "RemoveTagsInput" });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "RemoveTagsOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TrustStoreArn: S.optional(S.String),
          RevocationIds: S.optional(__S(160)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RemoveTrustStoreRevocationsInput",
      });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "RemoveTrustStoreRevocationsOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerArn: S.optional(S.String),
          IpAddressType: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SetIpAddressTypeInput" });
    case 4:
      return S.suspend(() => S.Struct({ IpAddressType: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "SetIpAddressTypeOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ RuleArn: S.optional(S.String), Priority: S.optional(S.Number) }),
      ).annotate({ identifier: "RulePriorityPair" });
    case 6:
      return S.Array(__S(205));
    case 7:
      return S.suspend(() =>
        S.Struct({ RulePriorities: S.optional(__S(206)) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "SetRulePrioritiesInput" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Rules: S.optional(__S(71)) }).pipe(ns)).annotate({
        identifier: "SetRulePrioritiesOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerArn: S.optional(S.String),
          SecurityGroups: S.optional(__S(40)),
          EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SetSecurityGroupsInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SecurityGroupIds: S.optional(__S(40)),
          EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "SetSecurityGroupsOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerArn: S.optional(S.String),
          Subnets: S.optional(__S(37)),
          SubnetMappings: S.optional(__S(39)),
          IpAddressType: S.optional(S.String),
          EnablePrefixForIpv6SourceNat: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SetSubnetsInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZones: S.optional(__S(48)),
          IpAddressType: S.optional(S.String),
          EnablePrefixForIpv6SourceNat: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "SetSubnetsOutput" });
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
  }
}
