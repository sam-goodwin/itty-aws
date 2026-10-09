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
const Certificate = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<Certificate>;
export type CertificateList = Certificate[];
const CertificateList = /*@__PURE__*/ __L.at(__c0, 1);
export interface AddListenerCertificatesInput {
  ListenerArn?: string;
  Certificates?: Certificate[];
}
const AddListenerCertificatesInput = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<AddListenerCertificatesInput>;
export interface AddListenerCertificatesOutput {
  Certificates?: Certificate[];
}
const AddListenerCertificatesOutput = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<AddListenerCertificatesOutput>;
export type ResourceArn = string;
export type ResourceArns = string[];
const ResourceArns = /*@__PURE__*/ __L.at(__c0, 4);
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key?: string;
  Value?: string;
}
const Tag = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c0, 6);
export interface AddTagsInput {
  ResourceArns?: string[];
  Tags?: Tag[];
}
const AddTagsInput = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<AddTagsInput>;
export interface AddTagsOutput {}
const AddTagsOutput = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<AddTagsOutput>;
export type TrustStoreArn = string;
export type S3Bucket = string;
export type S3Key = string;
export type S3ObjectVersion = string;
export type RevocationType = "CRL" | (string & {});
const RevocationType = S.String;

export interface RevocationContent {
  S3Bucket?: string;
  S3Key?: string;
  S3ObjectVersion?: string;
  RevocationType?: RevocationType;
}
const RevocationContent = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<RevocationContent>;
export type RevocationContents = RevocationContent[];
const RevocationContents = /*@__PURE__*/ __L.at(__c1, 2);
export interface AddTrustStoreRevocationsInput {
  TrustStoreArn?: string;
  RevocationContents?: RevocationContent[];
}
const AddTrustStoreRevocationsInput = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<AddTrustStoreRevocationsInput>;
export type RevocationId = number;
export type NumberOfRevokedEntries = number;
export interface TrustStoreRevocation {
  TrustStoreArn?: string;
  RevocationId?: number;
  RevocationType?: RevocationType;
  NumberOfRevokedEntries?: number;
}
const TrustStoreRevocation = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<TrustStoreRevocation>;
export type TrustStoreRevocations = TrustStoreRevocation[];
const TrustStoreRevocations = /*@__PURE__*/ __L.at(__c1, 5);
export interface AddTrustStoreRevocationsOutput {
  TrustStoreRevocations?: TrustStoreRevocation[];
}
const AddTrustStoreRevocationsOutput = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<AddTrustStoreRevocationsOutput>;
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
const ProtocolEnum = S.String;

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
const ActionTypeEnum = S.String;

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
const AuthenticateOidcActionAuthenticationRequestExtraParams = /*@__PURE__*/ __L.at(__c1, 7);
export type AuthenticateOidcActionConditionalBehaviorEnum =
  | "deny"
  | "allow"
  | "authenticate"
  | (string & {});
const AuthenticateOidcActionConditionalBehaviorEnum = S.String;

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
const AuthenticateOidcActionConfig = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<AuthenticateOidcActionConfig>;
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
const AuthenticateCognitoActionAuthenticationRequestExtraParams = /*@__PURE__*/ __L.at(__c2, 1);
export type AuthenticateCognitoActionConditionalBehaviorEnum =
  | "deny"
  | "allow"
  | "authenticate"
  | (string & {});
const AuthenticateCognitoActionConditionalBehaviorEnum = S.String;

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
const AuthenticateCognitoActionConfig = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<AuthenticateCognitoActionConfig>;
export type ActionOrder = number;
export type RedirectActionProtocol = string;
export type RedirectActionPort = string;
export type RedirectActionHost = string;
export type RedirectActionPath = string;
export type RedirectActionQuery = string;
export type RedirectActionStatusCodeEnum = "HTTP_301" | "HTTP_302" | (string & {});
const RedirectActionStatusCodeEnum = S.String;

export interface RedirectActionConfig {
  Protocol?: string;
  Port?: string;
  Host?: string;
  Path?: string;
  Query?: string;
  StatusCode?: RedirectActionStatusCodeEnum;
}
const RedirectActionConfig = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<RedirectActionConfig>;
export type FixedResponseActionMessage = string;
export type FixedResponseActionStatusCode = string;
export type FixedResponseActionContentType = string;
export interface FixedResponseActionConfig {
  MessageBody?: string;
  StatusCode?: string;
  ContentType?: string;
}
const FixedResponseActionConfig = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<FixedResponseActionConfig>;
export type TargetGroupWeight = number;
export interface TargetGroupTuple {
  TargetGroupArn?: string;
  Weight?: number;
}
const TargetGroupTuple = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<TargetGroupTuple>;
export type TargetGroupList = TargetGroupTuple[];
const TargetGroupList = /*@__PURE__*/ __L.at(__c2, 6);
export type TargetGroupStickinessEnabled = boolean;
export type TargetGroupStickinessDurationSeconds = number;
export interface TargetGroupStickinessConfig {
  Enabled?: boolean;
  DurationSeconds?: number;
}
const TargetGroupStickinessConfig = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<TargetGroupStickinessConfig>;
export interface ForwardActionConfig {
  TargetGroups?: TargetGroupTuple[];
  TargetGroupStickinessConfig?: TargetGroupStickinessConfig;
}
const ForwardActionConfig = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<ForwardActionConfig>;
export type JwtValidationActionJwksEndpoint = string;
export type JwtValidationActionIssuer = string;
export type JwtValidationActionAdditionalClaimFormatEnum =
  | "single-string"
  | "string-array"
  | "space-separated-values"
  | (string & {});
const JwtValidationActionAdditionalClaimFormatEnum = S.String;

export type JwtValidationActionAdditionalClaimName = string;
export type JwtValidationActionAdditionalClaimValue = string;
export type JwtValidationActionAdditionalClaimValues = string[];
const JwtValidationActionAdditionalClaimValues = /*@__PURE__*/ __L.at(__c3, 1);
export interface JwtValidationActionAdditionalClaim {
  Format?: JwtValidationActionAdditionalClaimFormatEnum;
  Name?: string;
  Values?: string[];
}
const JwtValidationActionAdditionalClaim = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<JwtValidationActionAdditionalClaim>;
export type JwtValidationActionAdditionalClaims = JwtValidationActionAdditionalClaim[];
const JwtValidationActionAdditionalClaims = /*@__PURE__*/ __L.at(__c3, 3);
export interface JwtValidationActionConfig {
  JwksEndpoint?: string;
  Issuer?: string;
  AdditionalClaims?: JwtValidationActionAdditionalClaim[];
}
const JwtValidationActionConfig = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<JwtValidationActionConfig>;
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
const Action = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<Action>;
export type Actions = Action[];
const Actions = /*@__PURE__*/ __L.at(__c3, 6);
export type AlpnPolicyValue = string;
export type AlpnPolicyName = string[];
const AlpnPolicyName = /*@__PURE__*/ __L.at(__c3, 7);
export type Mode = string;
export type IgnoreClientCertificateExpiry = boolean;
export type TrustStoreAssociationStatusEnum = "active" | "removed" | (string & {});
const TrustStoreAssociationStatusEnum = S.String;

export type AdvertiseTrustStoreCaNamesEnum = "on" | "off" | (string & {});
const AdvertiseTrustStoreCaNamesEnum = S.String;

export interface MutualAuthenticationAttributes {
  Mode?: string;
  TrustStoreArn?: string;
  IgnoreClientCertificateExpiry?: boolean;
  TrustStoreAssociationStatus?: TrustStoreAssociationStatusEnum;
  AdvertiseTrustStoreCaNames?: AdvertiseTrustStoreCaNamesEnum;
}
const MutualAuthenticationAttributes = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<MutualAuthenticationAttributes>;
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
const CreateListenerInput = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<CreateListenerInput>;
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
const Listener = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<Listener>;
export type Listeners = Listener[];
const Listeners = /*@__PURE__*/ __L.at(__c4, 3);
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
const CreateListenerOutput = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<CreateListenerOutput>;
export type LoadBalancerName = string;
export type SubnetId = string;
export type Subnets = string[];
const Subnets = /*@__PURE__*/ __L.at(__c4, 5);
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
const SubnetMapping = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<SubnetMapping>;
export type SubnetMappings = SubnetMapping[];
const SubnetMappings = /*@__PURE__*/ __L.at(__c4, 7);
export type SecurityGroupId = string;
export type SecurityGroups = string[];
const SecurityGroups = /*@__PURE__*/ __L.at(__c5, 0);
export type LoadBalancerSchemeEnum = "internet-facing" | "internal" | (string & {});
const LoadBalancerSchemeEnum = S.String;

export type LoadBalancerTypeEnum = "application" | "network" | "gateway" | (string & {});
const LoadBalancerTypeEnum = S.String;

export type IpAddressType = "ipv4" | "dualstack" | "dualstack-without-public-ipv4" | (string & {});
const IpAddressType = S.String;

export type CustomerOwnedIpv4Pool = string;
export type EnablePrefixForIpv6SourceNatEnum = "on" | "off" | (string & {});
const EnablePrefixForIpv6SourceNatEnum = S.String;

export type IpamPoolId = string;
export interface IpamPools {
  Ipv4IpamPoolId?: string;
}
const IpamPools = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<IpamPools>;
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
const CreateLoadBalancerInput = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<CreateLoadBalancerInput>;
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
const LoadBalancerStateEnum = S.String;

export type StateReason = string;
export interface LoadBalancerState {
  Code?: LoadBalancerStateEnum;
  Reason?: string;
}
const LoadBalancerState = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<LoadBalancerState>;
export type ZoneName = string;
export type OutpostId = string;
export type IpAddress = string;
export interface LoadBalancerAddress {
  IpAddress?: string;
  AllocationId?: string;
  PrivateIPv4Address?: string;
  IPv6Address?: string;
}
const LoadBalancerAddress = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<LoadBalancerAddress>;
export type LoadBalancerAddresses = LoadBalancerAddress[];
const LoadBalancerAddresses = /*@__PURE__*/ __L.at(__c5, 5);
export type SourceNatIpv6Prefixes = string[];
const SourceNatIpv6Prefixes = /*@__PURE__*/ __L.at(__c5, 6);
export interface AvailabilityZone {
  ZoneName?: string;
  SubnetId?: string;
  OutpostId?: string;
  LoadBalancerAddresses?: LoadBalancerAddress[];
  SourceNatIpv6Prefixes?: string[];
}
const AvailabilityZone = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<AvailabilityZone>;
export type AvailabilityZones = AvailabilityZone[];
const AvailabilityZones = /*@__PURE__*/ __L.at(__c6, 0);
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
const LoadBalancer = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<LoadBalancer>;
export type LoadBalancers = LoadBalancer[];
const LoadBalancers = /*@__PURE__*/ __L.at(__c6, 2);
export interface CreateLoadBalancerOutput {
  LoadBalancers?: LoadBalancer[];
}
const CreateLoadBalancerOutput = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<CreateLoadBalancerOutput>;
export type ConditionFieldName = string;
export type StringValue = string;
export type ListOfString = string[];
const ListOfString = /*@__PURE__*/ __L.at(__c6, 4);
export interface HostHeaderConditionConfig {
  Values?: string[];
  RegexValues?: string[];
}
const HostHeaderConditionConfig = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<HostHeaderConditionConfig>;
export interface PathPatternConditionConfig {
  Values?: string[];
  RegexValues?: string[];
}
const PathPatternConditionConfig = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<PathPatternConditionConfig>;
export type HttpHeaderConditionName = string;
export interface HttpHeaderConditionConfig {
  HttpHeaderName?: string;
  Values?: string[];
  RegexValues?: string[];
}
const HttpHeaderConditionConfig = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<HttpHeaderConditionConfig>;
export interface QueryStringKeyValuePair {
  Key?: string;
  Value?: string;
}
const QueryStringKeyValuePair = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<QueryStringKeyValuePair>;
export type QueryStringKeyValuePairList = QueryStringKeyValuePair[];
const QueryStringKeyValuePairList = /*@__PURE__*/ __L.at(__c7, 1);
export interface QueryStringConditionConfig {
  Values?: QueryStringKeyValuePair[];
}
const QueryStringConditionConfig = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<QueryStringConditionConfig>;
export interface HttpRequestMethodConditionConfig {
  Values?: string[];
}
const HttpRequestMethodConditionConfig = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<HttpRequestMethodConditionConfig>;
export type SourceIpAddressTypeEnum = "ipv4" | "ipv6" | (string & {});
const SourceIpAddressTypeEnum = S.String;

export interface SourceIpConditionConfig {
  Values?: string[];
  IpAddressType?: SourceIpAddressTypeEnum;
}
const SourceIpConditionConfig = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<SourceIpConditionConfig>;
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
const RuleCondition = /*@__PURE__*/ __L.at(__c7, 5) as any as S.Schema<RuleCondition>;
export type RuleConditionList = RuleCondition[];
const RuleConditionList = /*@__PURE__*/ __L.at(__c7, 6);
export type RulePriority = number;
export type TransformTypeEnum = "host-header-rewrite" | "url-rewrite" | (string & {});
const TransformTypeEnum = S.String;

export interface RewriteConfig {
  Regex?: string;
  Replace?: string;
}
const RewriteConfig = /*@__PURE__*/ __L.at(__c7, 7) as any as S.Schema<RewriteConfig>;
export type RewriteConfigList = RewriteConfig[];
const RewriteConfigList = /*@__PURE__*/ __L.at(__c8, 0);
export interface HostHeaderRewriteConfig {
  Rewrites?: RewriteConfig[];
}
const HostHeaderRewriteConfig = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<HostHeaderRewriteConfig>;
export interface UrlRewriteConfig {
  Rewrites?: RewriteConfig[];
}
const UrlRewriteConfig = /*@__PURE__*/ __L.at(__c8, 2) as any as S.Schema<UrlRewriteConfig>;
export interface RuleTransform {
  Type?: TransformTypeEnum;
  HostHeaderRewriteConfig?: HostHeaderRewriteConfig;
  UrlRewriteConfig?: UrlRewriteConfig;
}
const RuleTransform = /*@__PURE__*/ __L.at(__c8, 3) as any as S.Schema<RuleTransform>;
export type RuleTransformList = RuleTransform[];
const RuleTransformList = /*@__PURE__*/ __L.at(__c8, 4);
export interface CreateRuleInput {
  ListenerArn?: string;
  Conditions?: RuleCondition[];
  Priority?: number;
  Actions?: Action[];
  Tags?: Tag[];
  Transforms?: RuleTransform[];
}
const CreateRuleInput = /*@__PURE__*/ __L.at(__c8, 5) as any as S.Schema<CreateRuleInput>;
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
const Rule = /*@__PURE__*/ __L.at(__c8, 6) as any as S.Schema<Rule>;
export type Rules = Rule[];
const Rules = /*@__PURE__*/ __L.at(__c8, 7);
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
const CreateRuleOutput = /*@__PURE__*/ __L.at(__c9, 0) as any as S.Schema<CreateRuleOutput>;
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
const Matcher = /*@__PURE__*/ __L.at(__c9, 1) as any as S.Schema<Matcher>;
export type TargetTypeEnum = "instance" | "ip" | "lambda" | "alb" | (string & {});
const TargetTypeEnum = S.String;

export type TargetGroupIpAddressTypeEnum = "ipv4" | "ipv6" | (string & {});
const TargetGroupIpAddressTypeEnum = S.String;

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
const CreateTargetGroupInput = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<CreateTargetGroupInput>;
export type LoadBalancerArns = string[];
const LoadBalancerArns = /*@__PURE__*/ __L.at(__c9, 3);
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
const TargetGroup = /*@__PURE__*/ __L.at(__c9, 4) as any as S.Schema<TargetGroup>;
export type TargetGroups = TargetGroup[];
const TargetGroups = /*@__PURE__*/ __L.at(__c9, 5);
export interface CreateTargetGroupOutput {
  TargetGroups?: TargetGroup[];
}
const CreateTargetGroupOutput = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<CreateTargetGroupOutput>;
export type TrustStoreName = string;
export interface CreateTrustStoreInput {
  Name?: string;
  CaCertificatesBundleS3Bucket?: string;
  CaCertificatesBundleS3Key?: string;
  CaCertificatesBundleS3ObjectVersion?: string;
  Tags?: Tag[];
}
const CreateTrustStoreInput = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<CreateTrustStoreInput>;
export type TrustStoreStatus = "ACTIVE" | "CREATING" | (string & {});
const TrustStoreStatus = S.String;

export type NumberOfCaCertificates = number;
export type TotalRevokedEntries = number;
export interface TrustStore {
  Name?: string;
  TrustStoreArn?: string;
  Status?: TrustStoreStatus;
  NumberOfCaCertificates?: number;
  TotalRevokedEntries?: number;
}
const TrustStore = /*@__PURE__*/ __L.at(__c10, 0) as any as S.Schema<TrustStore>;
export type TrustStores = TrustStore[];
const TrustStores = /*@__PURE__*/ __L.at(__c10, 1);
export interface CreateTrustStoreOutput {
  TrustStores?: TrustStore[];
}
const CreateTrustStoreOutput = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<CreateTrustStoreOutput>;
export interface DeleteListenerInput {
  ListenerArn?: string;
}
const DeleteListenerInput = /*@__PURE__*/ __L.at(__c10, 3) as any as S.Schema<DeleteListenerInput>;
export interface DeleteListenerOutput {}
const DeleteListenerOutput = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<DeleteListenerOutput>;
export interface DeleteLoadBalancerInput {
  LoadBalancerArn?: string;
}
const DeleteLoadBalancerInput = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<DeleteLoadBalancerInput>;
export interface DeleteLoadBalancerOutput {}
const DeleteLoadBalancerOutput = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<DeleteLoadBalancerOutput>;
export interface DeleteRuleInput {
  RuleArn?: string;
}
const DeleteRuleInput = /*@__PURE__*/ __L.at(__c10, 7) as any as S.Schema<DeleteRuleInput>;
export interface DeleteRuleOutput {}
const DeleteRuleOutput = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<DeleteRuleOutput>;
export interface DeleteSharedTrustStoreAssociationInput {
  TrustStoreArn?: string;
  ResourceArn?: string;
}
const DeleteSharedTrustStoreAssociationInput = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<DeleteSharedTrustStoreAssociationInput>;
export interface DeleteSharedTrustStoreAssociationOutput {}
const DeleteSharedTrustStoreAssociationOutput = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<DeleteSharedTrustStoreAssociationOutput>;
export interface DeleteTargetGroupInput {
  TargetGroupArn?: string;
}
const DeleteTargetGroupInput = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<DeleteTargetGroupInput>;
export interface DeleteTargetGroupOutput {}
const DeleteTargetGroupOutput = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<DeleteTargetGroupOutput>;
export interface DeleteTrustStoreInput {
  TrustStoreArn?: string;
}
const DeleteTrustStoreInput = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<DeleteTrustStoreInput>;
export interface DeleteTrustStoreOutput {}
const DeleteTrustStoreOutput = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<DeleteTrustStoreOutput>;
export type TargetId = string;
export type QuicServerId = string;
export interface TargetDescription {
  Id?: string;
  Port?: number;
  AvailabilityZone?: string;
  QuicServerId?: string;
}
const TargetDescription = /*@__PURE__*/ __L.at(__c11, 7) as any as S.Schema<TargetDescription>;
export type TargetDescriptions = TargetDescription[];
const TargetDescriptions = /*@__PURE__*/ __L.at(__c12, 0);
export interface DeregisterTargetsInput {
  TargetGroupArn?: string;
  Targets?: TargetDescription[];
}
const DeregisterTargetsInput = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<DeregisterTargetsInput>;
export interface DeregisterTargetsOutput {}
const DeregisterTargetsOutput = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<DeregisterTargetsOutput>;
export type Marker = string;
export type PageSize = number;
export interface DescribeAccountLimitsInput {
  Marker?: string;
  PageSize?: number;
}
const DescribeAccountLimitsInput = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<DescribeAccountLimitsInput>;
export type Name = string;
export type Max = string;
export interface Limit {
  Name?: string;
  Max?: string;
}
const Limit = /*@__PURE__*/ __L.at(__c12, 4) as any as S.Schema<Limit>;
export type Limits = Limit[];
const Limits = /*@__PURE__*/ __L.at(__c12, 5);
export interface DescribeAccountLimitsOutput {
  Limits?: Limit[];
  NextMarker?: string;
}
const DescribeAccountLimitsOutput = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<DescribeAccountLimitsOutput>;
export interface DescribeCapacityReservationInput {
  LoadBalancerArn?: string;
}
const DescribeCapacityReservationInput = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<DescribeCapacityReservationInput>;
export type LastModifiedTime = Date;
export type DecreaseRequestsRemaining = number;
export type CapacityUnits = number;
export interface MinimumLoadBalancerCapacity {
  CapacityUnits?: number;
}
const MinimumLoadBalancerCapacity = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<MinimumLoadBalancerCapacity>;
export type CapacityReservationStateEnum =
  | "provisioned"
  | "pending"
  | "rebalancing"
  | "failed"
  | (string & {});
const CapacityReservationStateEnum = S.String;

export interface CapacityReservationStatus {
  Code?: CapacityReservationStateEnum;
  Reason?: string;
}
const CapacityReservationStatus = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<CapacityReservationStatus>;
export type CapacityUnitsDouble = number;
export interface ZonalCapacityReservationState {
  State?: CapacityReservationStatus;
  AvailabilityZone?: string;
  EffectiveCapacityUnits?: number;
}
const ZonalCapacityReservationState = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<ZonalCapacityReservationState>;
export type ZonalCapacityReservationStates = ZonalCapacityReservationState[];
const ZonalCapacityReservationStates = /*@__PURE__*/ __L.at(__c13, 3);
export interface DescribeCapacityReservationOutput {
  LastModifiedTime?: Date;
  DecreaseRequestsRemaining?: number;
  MinimumLoadBalancerCapacity?: MinimumLoadBalancerCapacity;
  CapacityReservationState?: ZonalCapacityReservationState[];
}
const DescribeCapacityReservationOutput = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<DescribeCapacityReservationOutput>;
export interface DescribeListenerAttributesInput {
  ListenerArn?: string;
}
const DescribeListenerAttributesInput = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<DescribeListenerAttributesInput>;
export type ListenerAttributeKey = string;
export type ListenerAttributeValue = string;
export interface ListenerAttribute {
  Key?: string;
  Value?: string;
}
const ListenerAttribute = /*@__PURE__*/ __L.at(__c13, 6) as any as S.Schema<ListenerAttribute>;
export type ListenerAttributes = ListenerAttribute[];
const ListenerAttributes = /*@__PURE__*/ __L.at(__c13, 7);
export interface DescribeListenerAttributesOutput {
  Attributes?: ListenerAttribute[];
}
const DescribeListenerAttributesOutput = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<DescribeListenerAttributesOutput>;
export interface DescribeListenerCertificatesInput {
  ListenerArn?: string;
  Marker?: string;
  PageSize?: number;
}
const DescribeListenerCertificatesInput = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<DescribeListenerCertificatesInput>;
export interface DescribeListenerCertificatesOutput {
  Certificates?: Certificate[];
  NextMarker?: string;
}
const DescribeListenerCertificatesOutput = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<DescribeListenerCertificatesOutput>;
export type ListenerArns = string[];
const ListenerArns = /*@__PURE__*/ __L.at(__c14, 3);
export interface DescribeListenersInput {
  LoadBalancerArn?: string;
  ListenerArns?: string[];
  Marker?: string;
  PageSize?: number;
}
const DescribeListenersInput = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<DescribeListenersInput>;
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
const DescribeListenersOutput = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<DescribeListenersOutput>;
export interface DescribeLoadBalancerAttributesInput {
  LoadBalancerArn?: string;
}
const DescribeLoadBalancerAttributesInput = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<DescribeLoadBalancerAttributesInput>;
export type LoadBalancerAttributeKey = string;
export type LoadBalancerAttributeValue = string;
export interface LoadBalancerAttribute {
  Key?: string;
  Value?: string;
}
const LoadBalancerAttribute = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<LoadBalancerAttribute>;
export type LoadBalancerAttributes = LoadBalancerAttribute[];
const LoadBalancerAttributes = /*@__PURE__*/ __L.at(__c15, 0);
export interface DescribeLoadBalancerAttributesOutput {
  Attributes?: LoadBalancerAttribute[];
}
const DescribeLoadBalancerAttributesOutput = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<DescribeLoadBalancerAttributesOutput>;
export type LoadBalancerNames = string[];
const LoadBalancerNames = /*@__PURE__*/ __L.at(__c15, 2);
export interface DescribeLoadBalancersInput {
  LoadBalancerArns?: string[];
  Names?: string[];
  Marker?: string;
  PageSize?: number;
}
const DescribeLoadBalancersInput = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<DescribeLoadBalancersInput>;
export interface DescribeLoadBalancersOutput {
  LoadBalancers?: LoadBalancer[];
  NextMarker?: string;
}
const DescribeLoadBalancersOutput = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<DescribeLoadBalancersOutput>;
export type RuleArns = string[];
const RuleArns = /*@__PURE__*/ __L.at(__c15, 5);
export interface DescribeRulesInput {
  ListenerArn?: string;
  RuleArns?: string[];
  Marker?: string;
  PageSize?: number;
}
const DescribeRulesInput = /*@__PURE__*/ __L.at(__c15, 6) as any as S.Schema<DescribeRulesInput>;
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
const DescribeRulesOutput = /*@__PURE__*/ __L.at(__c15, 7) as any as S.Schema<DescribeRulesOutput>;
export type SslPolicyNames = string[];
const SslPolicyNames = /*@__PURE__*/ __L.at(__c16, 0);
export interface DescribeSSLPoliciesInput {
  Names?: string[];
  Marker?: string;
  PageSize?: number;
  LoadBalancerType?: LoadBalancerTypeEnum;
}
const DescribeSSLPoliciesInput = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<DescribeSSLPoliciesInput>;
export type SslProtocol = string;
export type SslProtocols = string[];
const SslProtocols = /*@__PURE__*/ __L.at(__c16, 2);
export type CipherName = string;
export type CipherPriority = number;
export interface Cipher {
  Name?: string;
  Priority?: number;
}
const Cipher = /*@__PURE__*/ __L.at(__c16, 3) as any as S.Schema<Cipher>;
export type Ciphers = Cipher[];
const Ciphers = /*@__PURE__*/ __L.at(__c16, 4);
export interface SslPolicy {
  SslProtocols?: string[];
  Ciphers?: Cipher[];
  Name?: string;
  SupportedLoadBalancerTypes?: string[];
}
const SslPolicy = /*@__PURE__*/ __L.at(__c16, 5) as any as S.Schema<SslPolicy>;
export type SslPolicies = SslPolicy[];
const SslPolicies = /*@__PURE__*/ __L.at(__c16, 6);
export interface DescribeSSLPoliciesOutput {
  SslPolicies?: SslPolicy[];
  NextMarker?: string;
}
const DescribeSSLPoliciesOutput = /*@__PURE__*/ __L.at(
  __c16,
  7,
) as any as S.Schema<DescribeSSLPoliciesOutput>;
export interface DescribeTagsInput {
  ResourceArns?: string[];
}
const DescribeTagsInput = /*@__PURE__*/ __L.at(__c17, 0) as any as S.Schema<DescribeTagsInput>;
export interface TagDescription {
  ResourceArn?: string;
  Tags?: Tag[];
}
const TagDescription = /*@__PURE__*/ __L.at(__c17, 1) as any as S.Schema<TagDescription>;
export type TagDescriptions = TagDescription[];
const TagDescriptions = /*@__PURE__*/ __L.at(__c17, 2);
export interface DescribeTagsOutput {
  TagDescriptions?: (TagDescription & { Tags: (Tag & { Key: TagKey })[] })[];
}
const DescribeTagsOutput = /*@__PURE__*/ __L.at(__c17, 3) as any as S.Schema<DescribeTagsOutput>;
export interface DescribeTargetGroupAttributesInput {
  TargetGroupArn?: string;
}
const DescribeTargetGroupAttributesInput = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<DescribeTargetGroupAttributesInput>;
export type TargetGroupAttributeKey = string;
export type TargetGroupAttributeValue = string;
export interface TargetGroupAttribute {
  Key?: string;
  Value?: string;
}
const TargetGroupAttribute = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<TargetGroupAttribute>;
export type TargetGroupAttributes = TargetGroupAttribute[];
const TargetGroupAttributes = /*@__PURE__*/ __L.at(__c17, 6);
export interface DescribeTargetGroupAttributesOutput {
  Attributes?: TargetGroupAttribute[];
}
const DescribeTargetGroupAttributesOutput = /*@__PURE__*/ __L.at(
  __c17,
  7,
) as any as S.Schema<DescribeTargetGroupAttributesOutput>;
export type TargetGroupArns = string[];
const TargetGroupArns = /*@__PURE__*/ __L.at(__c18, 0);
export type TargetGroupNames = string[];
const TargetGroupNames = /*@__PURE__*/ __L.at(__c18, 1);
export interface DescribeTargetGroupsInput {
  LoadBalancerArn?: string;
  TargetGroupArns?: string[];
  Names?: string[];
  Marker?: string;
  PageSize?: number;
}
const DescribeTargetGroupsInput = /*@__PURE__*/ __L.at(
  __c18,
  2,
) as any as S.Schema<DescribeTargetGroupsInput>;
export interface DescribeTargetGroupsOutput {
  TargetGroups?: TargetGroup[];
  NextMarker?: string;
}
const DescribeTargetGroupsOutput = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<DescribeTargetGroupsOutput>;
export type DescribeTargetHealthInputIncludeEnum = "AnomalyDetection" | "All" | (string & {});
const DescribeTargetHealthInputIncludeEnum = S.String;

export type ListOfDescribeTargetHealthIncludeOptions = DescribeTargetHealthInputIncludeEnum[];
const ListOfDescribeTargetHealthIncludeOptions = /*@__PURE__*/ __L.at(__c18, 4);
export interface DescribeTargetHealthInput {
  TargetGroupArn?: string;
  Targets?: TargetDescription[];
  Include?: DescribeTargetHealthInputIncludeEnum[];
}
const DescribeTargetHealthInput = /*@__PURE__*/ __L.at(
  __c18,
  5,
) as any as S.Schema<DescribeTargetHealthInput>;
export type TargetHealthStateEnum =
  | "initial"
  | "healthy"
  | "unhealthy"
  | "unhealthy.draining"
  | "unused"
  | "draining"
  | "unavailable"
  | (string & {});
const TargetHealthStateEnum = S.String;

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
const TargetHealthReasonEnum = S.String;

export type Description = string;
export interface TargetHealth {
  State?: TargetHealthStateEnum;
  Reason?: TargetHealthReasonEnum;
  Description?: string;
}
const TargetHealth = /*@__PURE__*/ __L.at(__c18, 6) as any as S.Schema<TargetHealth>;
export type AnomalyResultEnum = "anomalous" | "normal" | (string & {});
const AnomalyResultEnum = S.String;

export type MitigationInEffectEnum = "yes" | "no" | (string & {});
const MitigationInEffectEnum = S.String;

export interface AnomalyDetection {
  Result?: AnomalyResultEnum;
  MitigationInEffect?: MitigationInEffectEnum;
}
const AnomalyDetection = /*@__PURE__*/ __L.at(__c18, 7) as any as S.Schema<AnomalyDetection>;
export type TargetAdministrativeOverrideStateEnum =
  | "unknown"
  | "no_override"
  | "zonal_shift_active"
  | "zonal_shift_delegated_to_dns"
  | (string & {});
const TargetAdministrativeOverrideStateEnum = S.String;

export type TargetAdministrativeOverrideReasonEnum =
  | "AdministrativeOverride.Unknown"
  | "AdministrativeOverride.NoOverride"
  | "AdministrativeOverride.ZonalShiftActive"
  | "AdministrativeOverride.ZonalShiftDelegatedToDns"
  | (string & {});
const TargetAdministrativeOverrideReasonEnum = S.String;

export interface AdministrativeOverride {
  State?: TargetAdministrativeOverrideStateEnum;
  Reason?: TargetAdministrativeOverrideReasonEnum;
  Description?: string;
}
const AdministrativeOverride = /*@__PURE__*/ __L.at(
  __c19,
  0,
) as any as S.Schema<AdministrativeOverride>;
export interface TargetHealthDescription {
  Target?: TargetDescription;
  HealthCheckPort?: string;
  TargetHealth?: TargetHealth;
  AnomalyDetection?: AnomalyDetection;
  AdministrativeOverride?: AdministrativeOverride;
}
const TargetHealthDescription = /*@__PURE__*/ __L.at(
  __c19,
  1,
) as any as S.Schema<TargetHealthDescription>;
export type TargetHealthDescriptions = TargetHealthDescription[];
const TargetHealthDescriptions = /*@__PURE__*/ __L.at(__c19, 2);
export interface DescribeTargetHealthOutput {
  TargetHealthDescriptions?: (TargetHealthDescription & {
    Target: TargetDescription & { Id: TargetId };
  })[];
}
const DescribeTargetHealthOutput = /*@__PURE__*/ __L.at(
  __c19,
  3,
) as any as S.Schema<DescribeTargetHealthOutput>;
export interface DescribeTrustStoreAssociationsInput {
  TrustStoreArn?: string;
  Marker?: string;
  PageSize?: number;
}
const DescribeTrustStoreAssociationsInput = /*@__PURE__*/ __L.at(
  __c19,
  4,
) as any as S.Schema<DescribeTrustStoreAssociationsInput>;
export type TrustStoreAssociationResourceArn = string;
export interface TrustStoreAssociation {
  ResourceArn?: string;
}
const TrustStoreAssociation = /*@__PURE__*/ __L.at(
  __c19,
  5,
) as any as S.Schema<TrustStoreAssociation>;
export type TrustStoreAssociations = TrustStoreAssociation[];
const TrustStoreAssociations = /*@__PURE__*/ __L.at(__c19, 6);
export interface DescribeTrustStoreAssociationsOutput {
  TrustStoreAssociations?: TrustStoreAssociation[];
  NextMarker?: string;
}
const DescribeTrustStoreAssociationsOutput = /*@__PURE__*/ __L.at(
  __c19,
  7,
) as any as S.Schema<DescribeTrustStoreAssociationsOutput>;
export type RevocationIds = number[];
const RevocationIds = /*@__PURE__*/ __L.at(__c20, 0);
export interface DescribeTrustStoreRevocationsInput {
  TrustStoreArn?: string;
  RevocationIds?: number[];
  Marker?: string;
  PageSize?: number;
}
const DescribeTrustStoreRevocationsInput = /*@__PURE__*/ __L.at(
  __c20,
  1,
) as any as S.Schema<DescribeTrustStoreRevocationsInput>;
export interface DescribeTrustStoreRevocation {
  TrustStoreArn?: string;
  RevocationId?: number;
  RevocationType?: RevocationType;
  NumberOfRevokedEntries?: number;
}
const DescribeTrustStoreRevocation = /*@__PURE__*/ __L.at(
  __c20,
  2,
) as any as S.Schema<DescribeTrustStoreRevocation>;
export type DescribeTrustStoreRevocationResponse = DescribeTrustStoreRevocation[];
const DescribeTrustStoreRevocationResponse = /*@__PURE__*/ __L.at(__c20, 3);
export interface DescribeTrustStoreRevocationsOutput {
  TrustStoreRevocations?: DescribeTrustStoreRevocation[];
  NextMarker?: string;
}
const DescribeTrustStoreRevocationsOutput = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<DescribeTrustStoreRevocationsOutput>;
export type TrustStoreArns = string[];
const TrustStoreArns = /*@__PURE__*/ __L.at(__c20, 5);
export type TrustStoreNames = string[];
const TrustStoreNames = /*@__PURE__*/ __L.at(__c20, 6);
export interface DescribeTrustStoresInput {
  TrustStoreArns?: string[];
  Names?: string[];
  Marker?: string;
  PageSize?: number;
}
const DescribeTrustStoresInput = /*@__PURE__*/ __L.at(
  __c20,
  7,
) as any as S.Schema<DescribeTrustStoresInput>;
export interface DescribeTrustStoresOutput {
  TrustStores?: TrustStore[];
  NextMarker?: string;
}
const DescribeTrustStoresOutput = /*@__PURE__*/ __L.at(
  __c21,
  0,
) as any as S.Schema<DescribeTrustStoresOutput>;
export interface GetResourcePolicyInput {
  ResourceArn?: string;
}
const GetResourcePolicyInput = /*@__PURE__*/ __L.at(
  __c21,
  1,
) as any as S.Schema<GetResourcePolicyInput>;
export type Policy = string;
export interface GetResourcePolicyOutput {
  Policy?: string;
}
const GetResourcePolicyOutput = /*@__PURE__*/ __L.at(
  __c21,
  2,
) as any as S.Schema<GetResourcePolicyOutput>;
export interface GetTrustStoreCaCertificatesBundleInput {
  TrustStoreArn?: string;
}
const GetTrustStoreCaCertificatesBundleInput = /*@__PURE__*/ __L.at(
  __c21,
  3,
) as any as S.Schema<GetTrustStoreCaCertificatesBundleInput>;
export type Location = string;
export interface GetTrustStoreCaCertificatesBundleOutput {
  Location?: string;
}
const GetTrustStoreCaCertificatesBundleOutput = /*@__PURE__*/ __L.at(
  __c21,
  4,
) as any as S.Schema<GetTrustStoreCaCertificatesBundleOutput>;
export interface GetTrustStoreRevocationContentInput {
  TrustStoreArn?: string;
  RevocationId?: number;
}
const GetTrustStoreRevocationContentInput = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<GetTrustStoreRevocationContentInput>;
export interface GetTrustStoreRevocationContentOutput {
  Location?: string;
}
const GetTrustStoreRevocationContentOutput = /*@__PURE__*/ __L.at(
  __c21,
  6,
) as any as S.Schema<GetTrustStoreRevocationContentOutput>;
export type ResetCapacityReservation = boolean;
export interface ModifyCapacityReservationInput {
  LoadBalancerArn?: string;
  MinimumLoadBalancerCapacity?: MinimumLoadBalancerCapacity;
  ResetCapacityReservation?: boolean;
}
const ModifyCapacityReservationInput = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<ModifyCapacityReservationInput>;
export interface ModifyCapacityReservationOutput {
  LastModifiedTime?: Date;
  DecreaseRequestsRemaining?: number;
  MinimumLoadBalancerCapacity?: MinimumLoadBalancerCapacity;
  CapacityReservationState?: ZonalCapacityReservationState[];
}
const ModifyCapacityReservationOutput = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<ModifyCapacityReservationOutput>;
export type RemoveIpamPoolEnum = "ipv4" | (string & {});
const RemoveIpamPoolEnum = S.String;

export type RemoveIpamPools = RemoveIpamPoolEnum[];
const RemoveIpamPools = /*@__PURE__*/ __L.at(__c22, 1);
export interface ModifyIpPoolsInput {
  LoadBalancerArn?: string;
  IpamPools?: IpamPools;
  RemoveIpamPools?: RemoveIpamPoolEnum[];
}
const ModifyIpPoolsInput = /*@__PURE__*/ __L.at(__c22, 2) as any as S.Schema<ModifyIpPoolsInput>;
export interface ModifyIpPoolsOutput {
  IpamPools?: IpamPools;
}
const ModifyIpPoolsOutput = /*@__PURE__*/ __L.at(__c22, 3) as any as S.Schema<ModifyIpPoolsOutput>;
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
const ModifyListenerInput = /*@__PURE__*/ __L.at(__c22, 4) as any as S.Schema<ModifyListenerInput>;
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
const ModifyListenerOutput = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<ModifyListenerOutput>;
export interface ModifyListenerAttributesInput {
  ListenerArn?: string;
  Attributes?: ListenerAttribute[];
}
const ModifyListenerAttributesInput = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<ModifyListenerAttributesInput>;
export interface ModifyListenerAttributesOutput {
  Attributes?: ListenerAttribute[];
}
const ModifyListenerAttributesOutput = /*@__PURE__*/ __L.at(
  __c22,
  7,
) as any as S.Schema<ModifyListenerAttributesOutput>;
export interface ModifyLoadBalancerAttributesInput {
  LoadBalancerArn?: string;
  Attributes?: LoadBalancerAttribute[];
}
const ModifyLoadBalancerAttributesInput = /*@__PURE__*/ __L.at(
  __c23,
  0,
) as any as S.Schema<ModifyLoadBalancerAttributesInput>;
export interface ModifyLoadBalancerAttributesOutput {
  Attributes?: LoadBalancerAttribute[];
}
const ModifyLoadBalancerAttributesOutput = /*@__PURE__*/ __L.at(
  __c23,
  1,
) as any as S.Schema<ModifyLoadBalancerAttributesOutput>;
export type ResetTransforms = boolean;
export interface ModifyRuleInput {
  RuleArn?: string;
  Conditions?: RuleCondition[];
  Actions?: Action[];
  Transforms?: RuleTransform[];
  ResetTransforms?: boolean;
}
const ModifyRuleInput = /*@__PURE__*/ __L.at(__c23, 2) as any as S.Schema<ModifyRuleInput>;
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
const ModifyRuleOutput = /*@__PURE__*/ __L.at(__c23, 3) as any as S.Schema<ModifyRuleOutput>;
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
const ModifyTargetGroupInput = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<ModifyTargetGroupInput>;
export interface ModifyTargetGroupOutput {
  TargetGroups?: TargetGroup[];
}
const ModifyTargetGroupOutput = /*@__PURE__*/ __L.at(
  __c23,
  5,
) as any as S.Schema<ModifyTargetGroupOutput>;
export interface ModifyTargetGroupAttributesInput {
  TargetGroupArn?: string;
  Attributes?: TargetGroupAttribute[];
}
const ModifyTargetGroupAttributesInput = /*@__PURE__*/ __L.at(
  __c23,
  6,
) as any as S.Schema<ModifyTargetGroupAttributesInput>;
export interface ModifyTargetGroupAttributesOutput {
  Attributes?: TargetGroupAttribute[];
}
const ModifyTargetGroupAttributesOutput = /*@__PURE__*/ __L.at(
  __c23,
  7,
) as any as S.Schema<ModifyTargetGroupAttributesOutput>;
export interface ModifyTrustStoreInput {
  TrustStoreArn?: string;
  CaCertificatesBundleS3Bucket?: string;
  CaCertificatesBundleS3Key?: string;
  CaCertificatesBundleS3ObjectVersion?: string;
}
const ModifyTrustStoreInput = /*@__PURE__*/ __L.at(
  __c24,
  0,
) as any as S.Schema<ModifyTrustStoreInput>;
export interface ModifyTrustStoreOutput {
  TrustStores?: TrustStore[];
}
const ModifyTrustStoreOutput = /*@__PURE__*/ __L.at(
  __c24,
  1,
) as any as S.Schema<ModifyTrustStoreOutput>;
export interface RegisterTargetsInput {
  TargetGroupArn?: string;
  Targets?: TargetDescription[];
}
const RegisterTargetsInput = /*@__PURE__*/ __L.at(
  __c24,
  2,
) as any as S.Schema<RegisterTargetsInput>;
export interface RegisterTargetsOutput {}
const RegisterTargetsOutput = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<RegisterTargetsOutput>;
export interface RemoveListenerCertificatesInput {
  ListenerArn?: string;
  Certificates?: Certificate[];
}
const RemoveListenerCertificatesInput = /*@__PURE__*/ __L.at(
  __c24,
  4,
) as any as S.Schema<RemoveListenerCertificatesInput>;
export interface RemoveListenerCertificatesOutput {}
const RemoveListenerCertificatesOutput = /*@__PURE__*/ __L.at(
  __c24,
  5,
) as any as S.Schema<RemoveListenerCertificatesOutput>;
export type TagKeys = string[];
const TagKeys = /*@__PURE__*/ __L.at(__c24, 6);
export interface RemoveTagsInput {
  ResourceArns?: string[];
  TagKeys?: string[];
}
const RemoveTagsInput = /*@__PURE__*/ __L.at(__c24, 7) as any as S.Schema<RemoveTagsInput>;
export interface RemoveTagsOutput {}
const RemoveTagsOutput = /*@__PURE__*/ __L.at(__c25, 0) as any as S.Schema<RemoveTagsOutput>;
export interface RemoveTrustStoreRevocationsInput {
  TrustStoreArn?: string;
  RevocationIds?: number[];
}
const RemoveTrustStoreRevocationsInput = /*@__PURE__*/ __L.at(
  __c25,
  1,
) as any as S.Schema<RemoveTrustStoreRevocationsInput>;
export interface RemoveTrustStoreRevocationsOutput {}
const RemoveTrustStoreRevocationsOutput = /*@__PURE__*/ __L.at(
  __c25,
  2,
) as any as S.Schema<RemoveTrustStoreRevocationsOutput>;
export interface SetIpAddressTypeInput {
  LoadBalancerArn?: string;
  IpAddressType?: IpAddressType;
}
const SetIpAddressTypeInput = /*@__PURE__*/ __L.at(
  __c25,
  3,
) as any as S.Schema<SetIpAddressTypeInput>;
export interface SetIpAddressTypeOutput {
  IpAddressType?: IpAddressType;
}
const SetIpAddressTypeOutput = /*@__PURE__*/ __L.at(
  __c25,
  4,
) as any as S.Schema<SetIpAddressTypeOutput>;
export interface RulePriorityPair {
  RuleArn?: string;
  Priority?: number;
}
const RulePriorityPair = /*@__PURE__*/ __L.at(__c25, 5) as any as S.Schema<RulePriorityPair>;
export type RulePriorityList = RulePriorityPair[];
const RulePriorityList = /*@__PURE__*/ __L.at(__c25, 6);
export interface SetRulePrioritiesInput {
  RulePriorities?: RulePriorityPair[];
}
const SetRulePrioritiesInput = /*@__PURE__*/ __L.at(
  __c25,
  7,
) as any as S.Schema<SetRulePrioritiesInput>;
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
const SetRulePrioritiesOutput = /*@__PURE__*/ __L.at(
  __c26,
  0,
) as any as S.Schema<SetRulePrioritiesOutput>;
export type EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficEnum = "on" | "off" | (string & {});
const EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficEnum = S.String;

export interface SetSecurityGroupsInput {
  LoadBalancerArn?: string;
  SecurityGroups?: string[];
  EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic?: EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficEnum;
}
const SetSecurityGroupsInput = /*@__PURE__*/ __L.at(
  __c26,
  1,
) as any as S.Schema<SetSecurityGroupsInput>;
export interface SetSecurityGroupsOutput {
  SecurityGroupIds?: string[];
  EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic?: EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficEnum;
}
const SetSecurityGroupsOutput = /*@__PURE__*/ __L.at(
  __c26,
  2,
) as any as S.Schema<SetSecurityGroupsOutput>;
export interface SetSubnetsInput {
  LoadBalancerArn?: string;
  Subnets?: string[];
  SubnetMappings?: SubnetMapping[];
  IpAddressType?: IpAddressType;
  EnablePrefixForIpv6SourceNat?: EnablePrefixForIpv6SourceNatEnum;
}
const SetSubnetsInput = /*@__PURE__*/ __L.at(__c26, 3) as any as S.Schema<SetSubnetsInput>;
export interface SetSubnetsOutput {
  AvailabilityZones?: AvailabilityZone[];
  IpAddressType?: IpAddressType;
  EnablePrefixForIpv6SourceNat?: EnablePrefixForIpv6SourceNatEnum;
}
const SetSubnetsOutput = /*@__PURE__*/ __L.at(__c26, 4) as any as S.Schema<SetSubnetsOutput>;
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
  input: AddListenerCertificatesInput,
  output: AddListenerCertificatesOutput,
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
  input: AddTagsInput,
  output: AddTagsOutput,
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
  input: AddTrustStoreRevocationsInput,
  output: AddTrustStoreRevocationsOutput,
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
  input: CreateListenerInput,
  output: CreateListenerOutput,
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
  input: CreateLoadBalancerInput,
  output: CreateLoadBalancerOutput,
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
  input: CreateRuleInput,
  output: CreateRuleOutput,
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
  input: CreateTargetGroupInput,
  output: CreateTargetGroupOutput,
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
  input: CreateTrustStoreInput,
  output: CreateTrustStoreOutput,
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
  input: DeleteListenerInput,
  output: DeleteListenerOutput,
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
  input: DeleteLoadBalancerInput,
  output: DeleteLoadBalancerOutput,
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
  input: DeleteRuleInput,
  output: DeleteRuleOutput,
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
  input: DeleteSharedTrustStoreAssociationInput,
  output: DeleteSharedTrustStoreAssociationOutput,
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
  input: DeleteTargetGroupInput,
  output: DeleteTargetGroupOutput,
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
  input: DeleteTrustStoreInput,
  output: DeleteTrustStoreOutput,
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
  input: DeregisterTargetsInput,
  output: DeregisterTargetsOutput,
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
  input: DescribeAccountLimitsInput,
  output: DescribeAccountLimitsOutput,
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
  input: DescribeCapacityReservationInput,
  output: DescribeCapacityReservationOutput,
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
  input: DescribeListenerAttributesInput,
  output: DescribeListenerAttributesOutput,
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
  input: DescribeListenerCertificatesInput,
  output: DescribeListenerCertificatesOutput,
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
  input: DescribeListenersInput,
  output: DescribeListenersOutput,
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
  input: DescribeLoadBalancerAttributesInput,
  output: DescribeLoadBalancerAttributesOutput,
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
  input: DescribeLoadBalancersInput,
  output: DescribeLoadBalancersOutput,
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
  input: DescribeRulesInput,
  output: DescribeRulesOutput,
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
  input: DescribeSSLPoliciesInput,
  output: DescribeSSLPoliciesOutput,
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
  input: DescribeTagsInput,
  output: DescribeTagsOutput,
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
  input: DescribeTargetGroupAttributesInput,
  output: DescribeTargetGroupAttributesOutput,
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
  input: DescribeTargetGroupsInput,
  output: DescribeTargetGroupsOutput,
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
  input: DescribeTargetHealthInput,
  output: DescribeTargetHealthOutput,
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
  input: DescribeTrustStoreAssociationsInput,
  output: DescribeTrustStoreAssociationsOutput,
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
  input: DescribeTrustStoreRevocationsInput,
  output: DescribeTrustStoreRevocationsOutput,
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
  input: DescribeTrustStoresInput,
  output: DescribeTrustStoresOutput,
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
  input: GetResourcePolicyInput,
  output: GetResourcePolicyOutput,
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
  input: GetTrustStoreCaCertificatesBundleInput,
  output: GetTrustStoreCaCertificatesBundleOutput,
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
  input: GetTrustStoreRevocationContentInput,
  output: GetTrustStoreRevocationContentOutput,
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
  input: ModifyCapacityReservationInput,
  output: ModifyCapacityReservationOutput,
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
  input: ModifyIpPoolsInput,
  output: ModifyIpPoolsOutput,
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
  input: ModifyListenerInput,
  output: ModifyListenerOutput,
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
  input: ModifyListenerAttributesInput,
  output: ModifyListenerAttributesOutput,
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
  input: ModifyLoadBalancerAttributesInput,
  output: ModifyLoadBalancerAttributesOutput,
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
  input: ModifyRuleInput,
  output: ModifyRuleOutput,
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
  input: ModifyTargetGroupInput,
  output: ModifyTargetGroupOutput,
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
  input: ModifyTargetGroupAttributesInput,
  output: ModifyTargetGroupAttributesOutput,
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
  input: ModifyTrustStoreInput,
  output: ModifyTrustStoreOutput,
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
  input: RegisterTargetsInput,
  output: RegisterTargetsOutput,
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
  input: RemoveListenerCertificatesInput,
  output: RemoveListenerCertificatesOutput,
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
  input: RemoveTagsInput,
  output: RemoveTagsOutput,
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
  input: RemoveTrustStoreRevocationsInput,
  output: RemoveTrustStoreRevocationsOutput,
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
  input: SetIpAddressTypeInput,
  output: SetIpAddressTypeOutput,
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
  input: SetRulePrioritiesInput,
  output: SetRulePrioritiesOutput,
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
  input: SetSecurityGroupsInput,
  output: SetSecurityGroupsOutput,
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
  input: SetSubnetsInput,
  output: SetSubnetsOutput,
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
      return S.Array(Certificate);
    case 2:
      return S.suspend(() =>
        S.Struct({
          ListenerArn: S.optional(S.String),
          Certificates: S.optional(CertificateList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AddListenerCertificatesInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Certificates: S.optional(CertificateList) }).pipe(ns),
      ).annotate({
        identifier: "AddListenerCertificatesOutput",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({ Key: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "Tag" });
    case 6:
      return S.Array(Tag);
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceArns: S.optional(ResourceArns), Tags: S.optional(TagList) }).pipe(
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
          RevocationType: S.optional(RevocationType),
        }),
      ).annotate({ identifier: "RevocationContent" });
    case 2:
      return S.Array(RevocationContent);
    case 3:
      return S.suspend(() =>
        S.Struct({
          TrustStoreArn: S.optional(S.String),
          RevocationContents: S.optional(RevocationContents),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AddTrustStoreRevocationsInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TrustStoreArn: S.optional(S.String),
          RevocationId: S.optional(S.Number),
          RevocationType: S.optional(RevocationType),
          NumberOfRevokedEntries: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TrustStoreRevocation" });
    case 5:
      return S.Array(TrustStoreRevocation);
    case 6:
      return S.suspend(() =>
        S.Struct({ TrustStoreRevocations: S.optional(TrustStoreRevocations) }).pipe(ns),
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
          AuthenticationRequestExtraParams: S.optional(
            AuthenticateOidcActionAuthenticationRequestExtraParams,
          ),
          OnUnauthenticatedRequest: S.optional(AuthenticateOidcActionConditionalBehaviorEnum),
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
          AuthenticationRequestExtraParams: S.optional(
            AuthenticateCognitoActionAuthenticationRequestExtraParams,
          ),
          OnUnauthenticatedRequest: S.optional(AuthenticateCognitoActionConditionalBehaviorEnum),
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
          StatusCode: S.optional(RedirectActionStatusCodeEnum),
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
      return S.Array(TargetGroupTuple);
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
          TargetGroups: S.optional(TargetGroupList),
          TargetGroupStickinessConfig: S.optional(TargetGroupStickinessConfig),
        }),
      ).annotate({ identifier: "ForwardActionConfig" });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Format: S.optional(JwtValidationActionAdditionalClaimFormatEnum),
          Name: S.optional(S.String),
          Values: S.optional(JwtValidationActionAdditionalClaimValues),
        }),
      ).annotate({
        identifier: "JwtValidationActionAdditionalClaim",
      });
    case 3:
      return S.Array(JwtValidationActionAdditionalClaim);
    case 4:
      return S.suspend(() =>
        S.Struct({
          JwksEndpoint: S.optional(S.String),
          Issuer: S.optional(S.String),
          AdditionalClaims: S.optional(JwtValidationActionAdditionalClaims),
        }),
      ).annotate({
        identifier: "JwtValidationActionConfig",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(ActionTypeEnum),
          TargetGroupArn: S.optional(S.String),
          AuthenticateOidcConfig: S.optional(AuthenticateOidcActionConfig),
          AuthenticateCognitoConfig: S.optional(AuthenticateCognitoActionConfig),
          Order: S.optional(S.Number),
          RedirectConfig: S.optional(RedirectActionConfig),
          FixedResponseConfig: S.optional(FixedResponseActionConfig),
          ForwardConfig: S.optional(ForwardActionConfig),
          JwtValidationConfig: S.optional(JwtValidationActionConfig),
        }),
      ).annotate({ identifier: "Action" });
    case 6:
      return S.Array(Action);
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
          TrustStoreAssociationStatus: S.optional(TrustStoreAssociationStatusEnum),
          AdvertiseTrustStoreCaNames: S.optional(AdvertiseTrustStoreCaNamesEnum),
        }),
      ).annotate({
        identifier: "MutualAuthenticationAttributes",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerArn: S.optional(S.String),
          Protocol: S.optional(ProtocolEnum),
          Port: S.optional(S.Number),
          SslPolicy: S.optional(S.String),
          Certificates: S.optional(CertificateList),
          DefaultActions: S.optional(Actions),
          AlpnPolicy: S.optional(AlpnPolicyName),
          Tags: S.optional(TagList),
          MutualAuthentication: S.optional(MutualAuthenticationAttributes),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateListenerInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ListenerArn: S.optional(S.String),
          LoadBalancerArn: S.optional(S.String),
          Port: S.optional(S.Number),
          Protocol: S.optional(ProtocolEnum),
          Certificates: S.optional(CertificateList),
          SslPolicy: S.optional(S.String),
          DefaultActions: S.optional(Actions),
          AlpnPolicy: S.optional(AlpnPolicyName),
          MutualAuthentication: S.optional(MutualAuthenticationAttributes),
        }),
      ).annotate({ identifier: "Listener" });
    case 3:
      return S.Array(Listener);
    case 4:
      return S.suspend(() => S.Struct({ Listeners: S.optional(Listeners) }).pipe(ns)).annotate({
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
      return S.Array(SubnetMapping);
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
          Subnets: S.optional(Subnets),
          SubnetMappings: S.optional(SubnetMappings),
          SecurityGroups: S.optional(SecurityGroups),
          Scheme: S.optional(LoadBalancerSchemeEnum),
          Tags: S.optional(TagList),
          Type: S.optional(LoadBalancerTypeEnum),
          IpAddressType: S.optional(IpAddressType),
          CustomerOwnedIpv4Pool: S.optional(S.String),
          EnablePrefixForIpv6SourceNat: S.optional(EnablePrefixForIpv6SourceNatEnum),
          IpamPools: S.optional(IpamPools),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateLoadBalancerInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Code: S.optional(LoadBalancerStateEnum), Reason: S.optional(S.String) }),
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
      return S.Array(LoadBalancerAddress);
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({
          ZoneName: S.optional(S.String),
          SubnetId: S.optional(S.String),
          OutpostId: S.optional(S.String),
          LoadBalancerAddresses: S.optional(LoadBalancerAddresses),
          SourceNatIpv6Prefixes: S.optional(SourceNatIpv6Prefixes),
        }),
      ).annotate({ identifier: "AvailabilityZone" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AvailabilityZone);
    case 1:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerArn: S.optional(S.String),
          DNSName: S.optional(S.String),
          CanonicalHostedZoneId: S.optional(S.String),
          CreatedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          LoadBalancerName: S.optional(S.String),
          Scheme: S.optional(LoadBalancerSchemeEnum),
          VpcId: S.optional(S.String),
          State: S.optional(LoadBalancerState),
          Type: S.optional(LoadBalancerTypeEnum),
          AvailabilityZones: S.optional(AvailabilityZones),
          SecurityGroups: S.optional(SecurityGroups),
          IpAddressType: S.optional(IpAddressType),
          CustomerOwnedIpv4Pool: S.optional(S.String),
          EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic: S.optional(S.String),
          EnablePrefixForIpv6SourceNat: S.optional(EnablePrefixForIpv6SourceNatEnum),
          IpamPools: S.optional(IpamPools),
        }),
      ).annotate({ identifier: "LoadBalancer" });
    case 2:
      return S.Array(LoadBalancer);
    case 3:
      return S.suspend(() =>
        S.Struct({ LoadBalancers: S.optional(LoadBalancers) }).pipe(ns),
      ).annotate({ identifier: "CreateLoadBalancerOutput" });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({ Values: S.optional(ListOfString), RegexValues: S.optional(ListOfString) }),
      ).annotate({
        identifier: "HostHeaderConditionConfig",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Values: S.optional(ListOfString), RegexValues: S.optional(ListOfString) }),
      ).annotate({
        identifier: "PathPatternConditionConfig",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          HttpHeaderName: S.optional(S.String),
          Values: S.optional(ListOfString),
          RegexValues: S.optional(ListOfString),
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
      return S.Array(QueryStringKeyValuePair);
    case 2:
      return S.suspend(() =>
        S.Struct({ Values: S.optional(QueryStringKeyValuePairList) }),
      ).annotate({
        identifier: "QueryStringConditionConfig",
      });
    case 3:
      return S.suspend(() => S.Struct({ Values: S.optional(ListOfString) })).annotate({
        identifier: "HttpRequestMethodConditionConfig",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Values: S.optional(ListOfString),
          IpAddressType: S.optional(SourceIpAddressTypeEnum),
        }),
      ).annotate({ identifier: "SourceIpConditionConfig" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Field: S.optional(S.String),
          Values: S.optional(ListOfString),
          HostHeaderConfig: S.optional(HostHeaderConditionConfig),
          PathPatternConfig: S.optional(PathPatternConditionConfig),
          HttpHeaderConfig: S.optional(HttpHeaderConditionConfig),
          QueryStringConfig: S.optional(QueryStringConditionConfig),
          HttpRequestMethodConfig: S.optional(HttpRequestMethodConditionConfig),
          SourceIpConfig: S.optional(SourceIpConditionConfig),
          RegexValues: S.optional(ListOfString),
        }),
      ).annotate({ identifier: "RuleCondition" });
    case 6:
      return S.Array(RuleCondition);
    case 7:
      return S.suspend(() =>
        S.Struct({ Regex: S.optional(S.String), Replace: S.optional(S.String) }),
      ).annotate({ identifier: "RewriteConfig" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(RewriteConfig);
    case 1:
      return S.suspend(() => S.Struct({ Rewrites: S.optional(RewriteConfigList) })).annotate({
        identifier: "HostHeaderRewriteConfig",
      });
    case 2:
      return S.suspend(() => S.Struct({ Rewrites: S.optional(RewriteConfigList) })).annotate({
        identifier: "UrlRewriteConfig",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(TransformTypeEnum),
          HostHeaderRewriteConfig: S.optional(HostHeaderRewriteConfig),
          UrlRewriteConfig: S.optional(UrlRewriteConfig),
        }),
      ).annotate({ identifier: "RuleTransform" });
    case 4:
      return S.Array(RuleTransform);
    case 5:
      return S.suspend(() =>
        S.Struct({
          ListenerArn: S.optional(S.String),
          Conditions: S.optional(RuleConditionList),
          Priority: S.optional(S.Number),
          Actions: S.optional(Actions),
          Tags: S.optional(TagList),
          Transforms: S.optional(RuleTransformList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateRuleInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RuleArn: S.optional(S.String),
          Priority: S.optional(S.String),
          Conditions: S.optional(RuleConditionList),
          Actions: S.optional(Actions),
          IsDefault: S.optional(S.Boolean),
          Transforms: S.optional(RuleTransformList),
        }),
      ).annotate({ identifier: "Rule" });
    case 7:
      return S.Array(Rule);
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Rules: S.optional(Rules) }).pipe(ns)).annotate({
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
          Protocol: S.optional(ProtocolEnum),
          ProtocolVersion: S.optional(S.String),
          Port: S.optional(S.Number),
          VpcId: S.optional(S.String),
          HealthCheckProtocol: S.optional(ProtocolEnum),
          HealthCheckPort: S.optional(S.String),
          HealthCheckEnabled: S.optional(S.Boolean),
          HealthCheckPath: S.optional(S.String),
          HealthCheckIntervalSeconds: S.optional(S.Number),
          HealthCheckTimeoutSeconds: S.optional(S.Number),
          HealthyThresholdCount: S.optional(S.Number),
          UnhealthyThresholdCount: S.optional(S.Number),
          Matcher: S.optional(Matcher),
          TargetType: S.optional(TargetTypeEnum),
          Tags: S.optional(TagList),
          IpAddressType: S.optional(TargetGroupIpAddressTypeEnum),
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
          Protocol: S.optional(ProtocolEnum),
          Port: S.optional(S.Number),
          VpcId: S.optional(S.String),
          HealthCheckProtocol: S.optional(ProtocolEnum),
          HealthCheckPort: S.optional(S.String),
          HealthCheckEnabled: S.optional(S.Boolean),
          HealthCheckIntervalSeconds: S.optional(S.Number),
          HealthCheckTimeoutSeconds: S.optional(S.Number),
          HealthyThresholdCount: S.optional(S.Number),
          UnhealthyThresholdCount: S.optional(S.Number),
          HealthCheckPath: S.optional(S.String),
          Matcher: S.optional(Matcher),
          LoadBalancerArns: S.optional(LoadBalancerArns),
          TargetType: S.optional(TargetTypeEnum),
          ProtocolVersion: S.optional(S.String),
          IpAddressType: S.optional(TargetGroupIpAddressTypeEnum),
          TargetControlPort: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TargetGroup" });
    case 5:
      return S.Array(TargetGroup);
    case 6:
      return S.suspend(() =>
        S.Struct({ TargetGroups: S.optional(TargetGroups) }).pipe(ns),
      ).annotate({ identifier: "CreateTargetGroupOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          CaCertificatesBundleS3Bucket: S.optional(S.String),
          CaCertificatesBundleS3Key: S.optional(S.String),
          CaCertificatesBundleS3ObjectVersion: S.optional(S.String),
          Tags: S.optional(TagList),
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
          Status: S.optional(TrustStoreStatus),
          NumberOfCaCertificates: S.optional(S.Number),
          TotalRevokedEntries: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TrustStore" });
    case 1:
      return S.Array(TrustStore);
    case 2:
      return S.suspend(() => S.Struct({ TrustStores: S.optional(TrustStores) }).pipe(ns)).annotate({
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
      return S.Array(TargetDescription);
    case 1:
      return S.suspend(() =>
        S.Struct({
          TargetGroupArn: S.optional(S.String),
          Targets: S.optional(TargetDescriptions),
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
      return S.Array(Limit);
    case 6:
      return S.suspend(() =>
        S.Struct({ Limits: S.optional(Limits), NextMarker: S.optional(S.String) }).pipe(ns),
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
        S.Struct({ Code: S.optional(CapacityReservationStateEnum), Reason: S.optional(S.String) }),
      ).annotate({
        identifier: "CapacityReservationStatus",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          State: S.optional(CapacityReservationStatus),
          AvailabilityZone: S.optional(S.String),
          EffectiveCapacityUnits: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ZonalCapacityReservationState",
      });
    case 3:
      return S.Array(ZonalCapacityReservationState);
    case 4:
      return S.suspend(() =>
        S.Struct({
          LastModifiedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          DecreaseRequestsRemaining: S.optional(S.Number),
          MinimumLoadBalancerCapacity: S.optional(MinimumLoadBalancerCapacity),
          CapacityReservationState: S.optional(ZonalCapacityReservationStates),
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
      return S.Array(ListenerAttribute);
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Attributes: S.optional(ListenerAttributes) }).pipe(ns),
      ).annotate({
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
          Certificates: S.optional(CertificateList),
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
          ListenerArns: S.optional(ListenerArns),
          Marker: S.optional(S.String),
          PageSize: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeListenersInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Listeners: S.optional(Listeners), NextMarker: S.optional(S.String) }).pipe(ns),
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
      return S.Array(LoadBalancerAttribute);
    case 1:
      return S.suspend(() =>
        S.Struct({ Attributes: S.optional(LoadBalancerAttributes) }).pipe(ns),
      ).annotate({
        identifier: "DescribeLoadBalancerAttributesOutput",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerArns: S.optional(LoadBalancerArns),
          Names: S.optional(LoadBalancerNames),
          Marker: S.optional(S.String),
          PageSize: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeLoadBalancersInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          LoadBalancers: S.optional(LoadBalancers),
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
          RuleArns: S.optional(RuleArns),
          Marker: S.optional(S.String),
          PageSize: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeRulesInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Rules: S.optional(Rules), NextMarker: S.optional(S.String) }).pipe(ns),
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
          Names: S.optional(SslPolicyNames),
          Marker: S.optional(S.String),
          PageSize: S.optional(S.Number),
          LoadBalancerType: S.optional(LoadBalancerTypeEnum),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeSSLPoliciesInput" });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Priority: S.optional(S.Number) }),
      ).annotate({ identifier: "Cipher" });
    case 4:
      return S.Array(Cipher);
    case 5:
      return S.suspend(() =>
        S.Struct({
          SslProtocols: S.optional(SslProtocols),
          Ciphers: S.optional(Ciphers),
          Name: S.optional(S.String),
          SupportedLoadBalancerTypes: S.optional(ListOfString),
        }),
      ).annotate({ identifier: "SslPolicy" });
    case 6:
      return S.Array(SslPolicy);
    case 7:
      return S.suspend(() =>
        S.Struct({ SslPolicies: S.optional(SslPolicies), NextMarker: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({
        identifier: "DescribeSSLPoliciesOutput",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceArns: S.optional(ResourceArns) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeTagsInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.optional(S.String), Tags: S.optional(TagList) }),
      ).annotate({ identifier: "TagDescription" });
    case 2:
      return S.Array(TagDescription);
    case 3:
      return S.suspend(() =>
        S.Struct({ TagDescriptions: S.optional(TagDescriptions) }).pipe(ns),
      ).annotate({ identifier: "DescribeTagsOutput" });
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
      return S.Array(TargetGroupAttribute);
    case 7:
      return S.suspend(() =>
        S.Struct({ Attributes: S.optional(TargetGroupAttributes) }).pipe(ns),
      ).annotate({
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
          TargetGroupArns: S.optional(TargetGroupArns),
          Names: S.optional(TargetGroupNames),
          Marker: S.optional(S.String),
          PageSize: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeTargetGroupsInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ TargetGroups: S.optional(TargetGroups), NextMarker: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({
        identifier: "DescribeTargetGroupsOutput",
      });
    case 4:
      return S.Array(DescribeTargetHealthInputIncludeEnum);
    case 5:
      return S.suspend(() =>
        S.Struct({
          TargetGroupArn: S.optional(S.String),
          Targets: S.optional(TargetDescriptions),
          Include: S.optional(ListOfDescribeTargetHealthIncludeOptions),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeTargetHealthInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          State: S.optional(TargetHealthStateEnum),
          Reason: S.optional(TargetHealthReasonEnum),
          Description: S.optional(S.String),
        }),
      ).annotate({ identifier: "TargetHealth" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Result: S.optional(AnomalyResultEnum),
          MitigationInEffect: S.optional(MitigationInEffectEnum),
        }),
      ).annotate({ identifier: "AnomalyDetection" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          State: S.optional(TargetAdministrativeOverrideStateEnum),
          Reason: S.optional(TargetAdministrativeOverrideReasonEnum),
          Description: S.optional(S.String),
        }),
      ).annotate({ identifier: "AdministrativeOverride" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Target: S.optional(TargetDescription),
          HealthCheckPort: S.optional(S.String),
          TargetHealth: S.optional(TargetHealth),
          AnomalyDetection: S.optional(AnomalyDetection),
          AdministrativeOverride: S.optional(AdministrativeOverride),
        }),
      ).annotate({ identifier: "TargetHealthDescription" });
    case 2:
      return S.Array(TargetHealthDescription);
    case 3:
      return S.suspend(() =>
        S.Struct({ TargetHealthDescriptions: S.optional(TargetHealthDescriptions) }).pipe(ns),
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
      return S.Array(TrustStoreAssociation);
    case 7:
      return S.suspend(() =>
        S.Struct({
          TrustStoreAssociations: S.optional(TrustStoreAssociations),
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
          RevocationIds: S.optional(RevocationIds),
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
          RevocationType: S.optional(RevocationType),
          NumberOfRevokedEntries: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "DescribeTrustStoreRevocation",
      });
    case 3:
      return S.Array(DescribeTrustStoreRevocation);
    case 4:
      return S.suspend(() =>
        S.Struct({
          TrustStoreRevocations: S.optional(DescribeTrustStoreRevocationResponse),
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
          TrustStoreArns: S.optional(TrustStoreArns),
          Names: S.optional(TrustStoreNames),
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
        S.Struct({ TrustStores: S.optional(TrustStores), NextMarker: S.optional(S.String) }).pipe(
          ns,
        ),
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
          MinimumLoadBalancerCapacity: S.optional(MinimumLoadBalancerCapacity),
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
          MinimumLoadBalancerCapacity: S.optional(MinimumLoadBalancerCapacity),
          CapacityReservationState: S.optional(ZonalCapacityReservationStates),
        }).pipe(ns),
      ).annotate({
        identifier: "ModifyCapacityReservationOutput",
      });
    case 1:
      return S.Array(RemoveIpamPoolEnum);
    case 2:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerArn: S.optional(S.String),
          IpamPools: S.optional(IpamPools),
          RemoveIpamPools: S.optional(RemoveIpamPools),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ModifyIpPoolsInput" });
    case 3:
      return S.suspend(() => S.Struct({ IpamPools: S.optional(IpamPools) }).pipe(ns)).annotate({
        identifier: "ModifyIpPoolsOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ListenerArn: S.optional(S.String),
          Port: S.optional(S.Number),
          Protocol: S.optional(ProtocolEnum),
          SslPolicy: S.optional(S.String),
          Certificates: S.optional(CertificateList),
          DefaultActions: S.optional(Actions),
          AlpnPolicy: S.optional(AlpnPolicyName),
          MutualAuthentication: S.optional(MutualAuthenticationAttributes),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ModifyListenerInput" });
    case 5:
      return S.suspend(() => S.Struct({ Listeners: S.optional(Listeners) }).pipe(ns)).annotate({
        identifier: "ModifyListenerOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ListenerArn: S.optional(S.String),
          Attributes: S.optional(ListenerAttributes),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyListenerAttributesInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Attributes: S.optional(ListenerAttributes) }).pipe(ns),
      ).annotate({
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
          Attributes: S.optional(LoadBalancerAttributes),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyLoadBalancerAttributesInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Attributes: S.optional(LoadBalancerAttributes) }).pipe(ns),
      ).annotate({
        identifier: "ModifyLoadBalancerAttributesOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RuleArn: S.optional(S.String),
          Conditions: S.optional(RuleConditionList),
          Actions: S.optional(Actions),
          Transforms: S.optional(RuleTransformList),
          ResetTransforms: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ModifyRuleInput" });
    case 3:
      return S.suspend(() => S.Struct({ Rules: S.optional(Rules) }).pipe(ns)).annotate({
        identifier: "ModifyRuleOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TargetGroupArn: S.optional(S.String),
          HealthCheckProtocol: S.optional(ProtocolEnum),
          HealthCheckPort: S.optional(S.String),
          HealthCheckPath: S.optional(S.String),
          HealthCheckEnabled: S.optional(S.Boolean),
          HealthCheckIntervalSeconds: S.optional(S.Number),
          HealthCheckTimeoutSeconds: S.optional(S.Number),
          HealthyThresholdCount: S.optional(S.Number),
          UnhealthyThresholdCount: S.optional(S.Number),
          Matcher: S.optional(Matcher),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ModifyTargetGroupInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ TargetGroups: S.optional(TargetGroups) }).pipe(ns),
      ).annotate({ identifier: "ModifyTargetGroupOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TargetGroupArn: S.optional(S.String),
          Attributes: S.optional(TargetGroupAttributes),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyTargetGroupAttributesInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Attributes: S.optional(TargetGroupAttributes) }).pipe(ns),
      ).annotate({
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
      return S.suspend(() => S.Struct({ TrustStores: S.optional(TrustStores) }).pipe(ns)).annotate({
        identifier: "ModifyTrustStoreOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TargetGroupArn: S.optional(S.String),
          Targets: S.optional(TargetDescriptions),
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
          Certificates: S.optional(CertificateList),
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
        S.Struct({ ResourceArns: S.optional(ResourceArns), TagKeys: S.optional(TagKeys) }).pipe(
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
          RevocationIds: S.optional(RevocationIds),
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
          IpAddressType: S.optional(IpAddressType),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SetIpAddressTypeInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ IpAddressType: S.optional(IpAddressType) }).pipe(ns),
      ).annotate({ identifier: "SetIpAddressTypeOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ RuleArn: S.optional(S.String), Priority: S.optional(S.Number) }),
      ).annotate({ identifier: "RulePriorityPair" });
    case 6:
      return S.Array(RulePriorityPair);
    case 7:
      return S.suspend(() =>
        S.Struct({ RulePriorities: S.optional(RulePriorityList) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "SetRulePrioritiesInput" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Rules: S.optional(Rules) }).pipe(ns)).annotate({
        identifier: "SetRulePrioritiesOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerArn: S.optional(S.String),
          SecurityGroups: S.optional(SecurityGroups),
          EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic: S.optional(
            EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficEnum,
          ),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SetSecurityGroupsInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SecurityGroupIds: S.optional(SecurityGroups),
          EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic: S.optional(
            EnforceSecurityGroupInboundRulesOnPrivateLinkTrafficEnum,
          ),
        }).pipe(ns),
      ).annotate({ identifier: "SetSecurityGroupsOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerArn: S.optional(S.String),
          Subnets: S.optional(Subnets),
          SubnetMappings: S.optional(SubnetMappings),
          IpAddressType: S.optional(IpAddressType),
          EnablePrefixForIpv6SourceNat: S.optional(EnablePrefixForIpv6SourceNatEnum),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SetSubnetsInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZones: S.optional(AvailabilityZones),
          IpAddressType: S.optional(IpAddressType),
          EnablePrefixForIpv6SourceNat: S.optional(EnablePrefixForIpv6SourceNatEnum),
        }).pipe(ns),
      ).annotate({ identifier: "SetSubnetsOutput" });
  }
}
