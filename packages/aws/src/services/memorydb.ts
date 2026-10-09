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
const ns = /*@__PURE__*/ T.XmlNamespace("http://memorydb.amazonaws.com/doc/2021-01-01/");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "MemoryDB",
  serviceShapeName: "AmazonMemoryDB",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "memorydb" });
const ver = /*@__PURE__*/ T.ServiceVersion("2021-01-01");
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
            return e(
              `https://memory-db-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://memory-db-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://memory-db.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        if (Region === "fips") {
          return e(
            "https://memory-db-fips.us-west-1.amazonaws.com",
            {
              authSchemes: [{ name: "sigv4", signingName: "memorydb", signingRegion: "us-west-1" }],
            },
            {},
          );
        }
        return e(`https://memory-db.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class ACLAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<ACLAlreadyExistsFault>()(
    "ACLAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ACLAlreadyExists", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class ACLNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<ACLNotFoundFault>()(
    "ACLNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ACLNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class ACLQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<ACLQuotaExceededFault>()(
    "ACLQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ACLQuotaExceeded", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class APICallRateForCustomerExceededFault
  extends /*@__PURE__*/ S.TaggedError<APICallRateForCustomerExceededFault>()(
    "APICallRateForCustomerExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "APICallRateForCustomerExceeded",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ClusterAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<ClusterAlreadyExistsFault>()(
    "ClusterAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ClusterAlreadyExists", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class ClusterNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<ClusterNotFoundFault>()(
    "ClusterNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ClusterNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class ClusterQuotaForCustomerExceededFault
  extends /*@__PURE__*/ S.TaggedError<ClusterQuotaForCustomerExceededFault>()(
    "ClusterQuotaForCustomerExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ClusterQuotaForCustomerExceeded",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class DefaultUserRequired
  extends /*@__PURE__*/ S.TaggedError<DefaultUserRequired>()(
    "DefaultUserRequired",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DefaultUserRequired", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class DuplicateUserNameFault
  extends /*@__PURE__*/ S.TaggedError<DuplicateUserNameFault>()(
    "DuplicateUserNameFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DuplicateUserName", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InsufficientClusterCapacityFault
  extends /*@__PURE__*/ S.TaggedError<InsufficientClusterCapacityFault>()(
    "InsufficientClusterCapacityFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InsufficientClusterCapacity", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidACLStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidACLStateFault>()(
    "InvalidACLStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidACLState", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidARNFault
  extends /*@__PURE__*/ S.TaggedError<InvalidARNFault>()(
    "InvalidARNFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidARN", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidClusterStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidClusterStateFault>()(
    "InvalidClusterStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidClusterState", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidCredentialsException
  extends /*@__PURE__*/ S.TaggedError<InvalidCredentialsException>()(
    "InvalidCredentialsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidCredentialsException", httpResponseCode: 408 }),
      /*@__PURE__*/ T.HttpError(408),
    ),
  ).pipe(C.withTimeoutError) {}
export class InvalidKMSKeyFault
  extends /*@__PURE__*/ S.TaggedError<InvalidKMSKeyFault>()(
    "InvalidKMSKeyFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidKMSKeyFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidMultiRegionClusterStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidMultiRegionClusterStateFault>()(
    "InvalidMultiRegionClusterStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InvalidMultiRegionClusterState",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidNodeStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidNodeStateFault>()(
    "InvalidNodeStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidNodeState", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidParameterCombinationException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterCombinationException>()(
    "InvalidParameterCombinationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidParameterCombination", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidParameterGroupStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterGroupStateFault>()(
    "InvalidParameterGroupStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidParameterGroupState", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidParameterValueException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterValueException>()(
    "InvalidParameterValueException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidParameterValue", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidSnapshotStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidSnapshotStateFault>()(
    "InvalidSnapshotStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidSnapshotState", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidSubnet
  extends /*@__PURE__*/ S.TaggedError<InvalidSubnet>()(
    "InvalidSubnet",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidSubnet", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidUserStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidUserStateFault>()(
    "InvalidUserStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidUserState", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidVPCNetworkStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidVPCNetworkStateFault>()(
    "InvalidVPCNetworkStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidVPCNetworkStateFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class MultiRegionClusterAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<MultiRegionClusterAlreadyExistsFault>()(
    "MultiRegionClusterAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "MultiRegionClusterAlreadyExistsFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class MultiRegionClusterNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<MultiRegionClusterNotFoundFault>()(
    "MultiRegionClusterNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "MultiRegionClusterNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class MultiRegionParameterGroupNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<MultiRegionParameterGroupNotFoundFault>()(
    "MultiRegionParameterGroupNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "MultiRegionParameterGroupNotFoundFault",
        httpResponseCode: 404,
      }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class NodeQuotaForClusterExceededFault
  extends /*@__PURE__*/ S.TaggedError<NodeQuotaForClusterExceededFault>()(
    "NodeQuotaForClusterExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "NodeQuotaForClusterExceeded", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class NodeQuotaForCustomerExceededFault
  extends /*@__PURE__*/ S.TaggedError<NodeQuotaForCustomerExceededFault>()(
    "NodeQuotaForCustomerExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "NodeQuotaForCustomerExceeded",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class NoOperationFault
  extends /*@__PURE__*/ S.TaggedError<NoOperationFault>()(
    "NoOperationFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "NoOperationFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ParameterGroupAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<ParameterGroupAlreadyExistsFault>()(
    "ParameterGroupAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ParameterGroupAlreadyExists", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class ParameterGroupNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<ParameterGroupNotFoundFault>()(
    "ParameterGroupNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ParameterGroupNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class ParameterGroupQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<ParameterGroupQuotaExceededFault>()(
    "ParameterGroupQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ParameterGroupQuotaExceeded", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ReservedNodeAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<ReservedNodeAlreadyExistsFault>()(
    "ReservedNodeAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ReservedNodeAlreadyExists", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class ReservedNodeNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<ReservedNodeNotFoundFault>()(
    "ReservedNodeNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ReservedNodeNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class ReservedNodeQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<ReservedNodeQuotaExceededFault>()(
    "ReservedNodeQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ReservedNodeQuotaExceeded", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ReservedNodesOfferingNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<ReservedNodesOfferingNotFoundFault>()(
    "ReservedNodesOfferingNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ReservedNodesOfferingNotFound",
        httpResponseCode: 404,
      }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class ServiceLinkedRoleNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<ServiceLinkedRoleNotFoundFault>()(
    "ServiceLinkedRoleNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ServiceLinkedRoleNotFoundFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ServiceUpdateNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<ServiceUpdateNotFoundFault>()(
    "ServiceUpdateNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ServiceUpdateNotFoundFault", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class ShardNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<ShardNotFoundFault>()(
    "ShardNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ShardNotFoundFault", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class ShardsPerClusterQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<ShardsPerClusterQuotaExceededFault>()(
    "ShardsPerClusterQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ShardsPerClusterQuotaExceeded",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class SnapshotAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<SnapshotAlreadyExistsFault>()(
    "SnapshotAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SnapshotAlreadyExistsFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class SnapshotNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<SnapshotNotFoundFault>()(
    "SnapshotNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SnapshotNotFoundFault", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class SnapshotQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<SnapshotQuotaExceededFault>()(
    "SnapshotQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SnapshotQuotaExceededFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class SubnetGroupAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<SubnetGroupAlreadyExistsFault>()(
    "SubnetGroupAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SubnetGroupAlreadyExists", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class SubnetGroupInUseFault
  extends /*@__PURE__*/ S.TaggedError<SubnetGroupInUseFault>()(
    "SubnetGroupInUseFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SubnetGroupInUse", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class SubnetGroupNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<SubnetGroupNotFoundFault>()(
    "SubnetGroupNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SubnetGroupNotFoundFault", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class SubnetGroupQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<SubnetGroupQuotaExceededFault>()(
    "SubnetGroupQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SubnetGroupQuotaExceeded", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class SubnetInUse
  extends /*@__PURE__*/ S.TaggedError<SubnetInUse>()(
    "SubnetInUse",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SubnetInUse", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withDependencyViolationError) {}
export class SubnetNotAllowedFault
  extends /*@__PURE__*/ S.TaggedError<SubnetNotAllowedFault>()(
    "SubnetNotAllowedFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SubnetNotAllowedFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class SubnetQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<SubnetQuotaExceededFault>()(
    "SubnetQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SubnetQuotaExceededFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TagNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<TagNotFoundFault>()(
    "TagNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TagNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class TagQuotaPerResourceExceeded
  extends /*@__PURE__*/ S.TaggedError<TagQuotaPerResourceExceeded>()(
    "TagQuotaPerResourceExceeded",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TagQuotaPerResourceExceeded", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TestFailoverNotAvailableFault
  extends /*@__PURE__*/ S.TaggedError<TestFailoverNotAvailableFault>()(
    "TestFailoverNotAvailableFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "TestFailoverNotAvailableFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class UserAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<UserAlreadyExistsFault>()(
    "UserAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "UserAlreadyExists", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class UserNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<UserNotFoundFault>()(
    "UserNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "UserNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class UserQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<UserQuotaExceededFault>()(
    "UserQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "UserQuotaExceeded", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export type ClusterNameList = string[];
const ClusterNameList = /*@__PURE__*/ __L.at(__c0, 0);
export interface ServiceUpdateRequest {
  ServiceUpdateNameToApply?: string;
}
const ServiceUpdateRequest = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<ServiceUpdateRequest>;
export interface BatchUpdateClusterRequest {
  ClusterNames: string[];
  ServiceUpdate?: ServiceUpdateRequest;
}
const BatchUpdateClusterRequest = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<BatchUpdateClusterRequest>;
export interface SlotMigration {
  ProgressPercentage?: number;
}
const SlotMigration = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<SlotMigration>;
export interface ReshardingStatus {
  SlotMigration?: SlotMigration;
}
const ReshardingStatus = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<ReshardingStatus>;
export type ACLName = string;
export interface ACLsUpdateStatus {
  ACLToApply?: string;
}
const ACLsUpdateStatus = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<ACLsUpdateStatus>;
export type ServiceUpdateStatus =
  | "available"
  | "in-progress"
  | "complete"
  | "scheduled"
  | (string & {});
const ServiceUpdateStatus = S.String;

export interface PendingModifiedServiceUpdate {
  ServiceUpdateName?: string;
  Status?: ServiceUpdateStatus;
}
const PendingModifiedServiceUpdate = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<PendingModifiedServiceUpdate>;
export type PendingModifiedServiceUpdateList = PendingModifiedServiceUpdate[];
const PendingModifiedServiceUpdateList = /*@__PURE__*/ __L.at(__c0, 7);
export interface ClusterPendingUpdates {
  Resharding?: ReshardingStatus;
  ACLs?: ACLsUpdateStatus;
  ServiceUpdates?: PendingModifiedServiceUpdate[];
}
const ClusterPendingUpdates = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<ClusterPendingUpdates>;
export interface Endpoint {
  Address?: string;
  Port?: number;
}
const Endpoint = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<Endpoint>;
export interface Node {
  Name?: string;
  Status?: string;
  AvailabilityZone?: string;
  CreateTime?: Date;
  Endpoint?: Endpoint;
}
const Node = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<Node>;
export type NodeList = Node[];
const NodeList = /*@__PURE__*/ __L.at(__c1, 3);
export interface Shard {
  Name?: string;
  Status?: string;
  Slots?: string;
  Nodes?: Node[];
  NumberOfNodes?: number;
}
const Shard = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<Shard>;
export type ShardList = Shard[];
const ShardList = /*@__PURE__*/ __L.at(__c1, 5);
export type AZStatus = "singleaz" | "multiaz" | (string & {});
const AZStatus = S.String;

export interface SecurityGroupMembership {
  SecurityGroupId?: string;
  Status?: string;
}
const SecurityGroupMembership = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<SecurityGroupMembership>;
export type SecurityGroupMembershipList = SecurityGroupMembership[];
const SecurityGroupMembershipList = /*@__PURE__*/ __L.at(__c1, 7);
export type DataTieringStatus = "true" | "false" | (string & {});
const DataTieringStatus = S.String;

export type NetworkType = "ipv4" | "ipv6" | "dual_stack" | (string & {});
const NetworkType = S.String;

export type IpDiscovery = "ipv4" | "ipv6" | (string & {});
const IpDiscovery = S.String;

export interface Cluster {
  Name?: string;
  Description?: string;
  Status?: string;
  PendingUpdates?: ClusterPendingUpdates;
  MultiRegionClusterName?: string;
  NumberOfShards?: number;
  Shards?: Shard[];
  AvailabilityMode?: AZStatus;
  ClusterEndpoint?: Endpoint;
  NodeType?: string;
  Engine?: string;
  EngineVersion?: string;
  EnginePatchVersion?: string;
  ParameterGroupName?: string;
  ParameterGroupStatus?: string;
  SecurityGroups?: SecurityGroupMembership[];
  SubnetGroupName?: string;
  TLSEnabled?: boolean;
  KmsKeyId?: string;
  ARN?: string;
  SnsTopicArn?: string;
  SnsTopicStatus?: string;
  SnapshotRetentionLimit?: number;
  MaintenanceWindow?: string;
  SnapshotWindow?: string;
  ACLName?: string;
  AutoMinorVersionUpgrade?: boolean;
  DataTiering?: DataTieringStatus;
  NetworkType?: NetworkType;
  IpDiscovery?: IpDiscovery;
}
const Cluster = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<Cluster>;
export type ClusterList = Cluster[];
const ClusterList = /*@__PURE__*/ __L.at(__c2, 1);
export interface UnprocessedCluster {
  ClusterName?: string;
  ErrorType?: string;
  ErrorMessage?: string;
}
const UnprocessedCluster = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<UnprocessedCluster>;
export type UnprocessedClusterList = UnprocessedCluster[];
const UnprocessedClusterList = /*@__PURE__*/ __L.at(__c2, 3);
export interface BatchUpdateClusterResponse {
  ProcessedClusters?: Cluster[];
  UnprocessedClusters?: UnprocessedCluster[];
}
const BatchUpdateClusterResponse = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<BatchUpdateClusterResponse>;
export type TargetBucket = string;
export type KmsKeyId = string;
export interface Tag {
  Key?: string;
  Value?: string;
}
const Tag = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c2, 6);
export interface CopySnapshotRequest {
  SourceSnapshotName: string;
  TargetSnapshotName: string;
  TargetBucket?: string;
  KmsKeyId?: string;
  Tags?: Tag[];
}
const CopySnapshotRequest = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<CopySnapshotRequest>;
export interface ShardConfiguration {
  Slots?: string;
  ReplicaCount?: number;
}
const ShardConfiguration = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<ShardConfiguration>;
export interface ShardDetail {
  Name?: string;
  Configuration?: ShardConfiguration;
  Size?: string;
  SnapshotCreationTime?: Date;
}
const ShardDetail = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<ShardDetail>;
export type ShardDetails = ShardDetail[];
const ShardDetails = /*@__PURE__*/ __L.at(__c3, 2);
export interface ClusterConfiguration {
  Name?: string;
  Description?: string;
  NodeType?: string;
  Engine?: string;
  EngineVersion?: string;
  MaintenanceWindow?: string;
  TopicArn?: string;
  Port?: number;
  ParameterGroupName?: string;
  SubnetGroupName?: string;
  VpcId?: string;
  SnapshotRetentionLimit?: number;
  SnapshotWindow?: string;
  NumShards?: number;
  Shards?: ShardDetail[];
  MultiRegionParameterGroupName?: string;
  MultiRegionClusterName?: string;
}
const ClusterConfiguration = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<ClusterConfiguration>;
export interface Snapshot {
  Name?: string;
  Status?: string;
  Source?: string;
  KmsKeyId?: string;
  ARN?: string;
  ClusterConfiguration?: ClusterConfiguration;
  DataTiering?: DataTieringStatus;
}
const Snapshot = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<Snapshot>;
export interface CopySnapshotResponse {
  Snapshot?: Snapshot;
}
const CopySnapshotResponse = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<CopySnapshotResponse>;
export type UserName = string;
export type UserNameListInput = string[];
const UserNameListInput = ClusterNameList as any as S.Schema<UserNameListInput>;
export interface CreateACLRequest {
  ACLName: string;
  UserNames?: string[];
  Tags?: Tag[];
}
const CreateACLRequest = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<CreateACLRequest>;
export type UserNameList = string[];
const UserNameList = ClusterNameList as any as S.Schema<UserNameList>;
export interface ACLPendingChanges {
  UserNamesToRemove?: string[];
  UserNamesToAdd?: string[];
}
const ACLPendingChanges = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<ACLPendingChanges>;
export type ACLClusterNameList = string[];
const ACLClusterNameList = ClusterNameList as any as S.Schema<ACLClusterNameList>;
export interface ACL {
  Name?: string;
  Status?: string;
  UserNames?: string[];
  MinimumEngineVersion?: string;
  PendingChanges?: ACLPendingChanges;
  Clusters?: string[];
  ARN?: string;
}
const ACL = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<ACL>;
export interface CreateACLResponse {
  ACL?: ACL;
}
const CreateACLResponse = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<CreateACLResponse>;
export type SecurityGroupIdsList = string[];
const SecurityGroupIdsList = /*@__PURE__*/ __L.at(__c4, 2);
export type SnapshotArnsList = string[];
const SnapshotArnsList = /*@__PURE__*/ __L.at(__c4, 3);
export interface CreateClusterRequest {
  ClusterName: string;
  NodeType: string;
  MultiRegionClusterName?: string;
  ParameterGroupName?: string;
  Description?: string;
  NumShards?: number;
  NumReplicasPerShard?: number;
  SubnetGroupName?: string;
  SecurityGroupIds?: string[];
  MaintenanceWindow?: string;
  Port?: number;
  SnsTopicArn?: string;
  TLSEnabled?: boolean;
  KmsKeyId?: string;
  SnapshotArns?: string[];
  SnapshotName?: string;
  SnapshotRetentionLimit?: number;
  Tags?: Tag[];
  SnapshotWindow?: string;
  ACLName: string;
  Engine?: string;
  EngineVersion?: string;
  AutoMinorVersionUpgrade?: boolean;
  DataTiering?: boolean;
  NetworkType?: NetworkType;
  IpDiscovery?: IpDiscovery;
}
const CreateClusterRequest = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<CreateClusterRequest>;
export interface CreateClusterResponse {
  Cluster?: Cluster;
}
const CreateClusterResponse = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<CreateClusterResponse>;
export interface CreateMultiRegionClusterRequest {
  MultiRegionClusterNameSuffix: string;
  Description?: string;
  Engine?: string;
  EngineVersion?: string;
  NodeType: string;
  MultiRegionParameterGroupName?: string;
  NumShards?: number;
  TLSEnabled?: boolean;
  Tags?: Tag[];
}
const CreateMultiRegionClusterRequest = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<CreateMultiRegionClusterRequest>;
export interface RegionalCluster {
  ClusterName?: string;
  Region?: string;
  Status?: string;
  ARN?: string;
}
const RegionalCluster = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<RegionalCluster>;
export type RegionalClusterList = RegionalCluster[];
const RegionalClusterList = /*@__PURE__*/ __L.at(__c5, 0);
export interface MultiRegionCluster {
  MultiRegionClusterName?: string;
  Description?: string;
  Status?: string;
  NodeType?: string;
  Engine?: string;
  EngineVersion?: string;
  NumberOfShards?: number;
  Clusters?: RegionalCluster[];
  MultiRegionParameterGroupName?: string;
  TLSEnabled?: boolean;
  ARN?: string;
}
const MultiRegionCluster = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<MultiRegionCluster>;
export interface CreateMultiRegionClusterResponse {
  MultiRegionCluster?: MultiRegionCluster;
}
const CreateMultiRegionClusterResponse = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<CreateMultiRegionClusterResponse>;
export interface CreateParameterGroupRequest {
  ParameterGroupName: string;
  Family: string;
  Description?: string;
  Tags?: Tag[];
}
const CreateParameterGroupRequest = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<CreateParameterGroupRequest>;
export interface ParameterGroup {
  Name?: string;
  Family?: string;
  Description?: string;
  ARN?: string;
}
const ParameterGroup = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<ParameterGroup>;
export interface CreateParameterGroupResponse {
  ParameterGroup?: ParameterGroup;
}
const CreateParameterGroupResponse = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<CreateParameterGroupResponse>;
export interface CreateSnapshotRequest {
  ClusterName: string;
  SnapshotName: string;
  KmsKeyId?: string;
  Tags?: Tag[];
}
const CreateSnapshotRequest = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<CreateSnapshotRequest>;
export interface CreateSnapshotResponse {
  Snapshot?: Snapshot;
}
const CreateSnapshotResponse = CopySnapshotResponse as any as S.Schema<CreateSnapshotResponse>;
export type SubnetIdentifierList = string[];
const SubnetIdentifierList = /*@__PURE__*/ __L.at(__c5, 7);
export interface CreateSubnetGroupRequest {
  SubnetGroupName: string;
  Description?: string;
  SubnetIds: string[];
  Tags?: Tag[];
}
const CreateSubnetGroupRequest = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<CreateSubnetGroupRequest>;
export interface AvailabilityZone {
  Name?: string;
}
const AvailabilityZone = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<AvailabilityZone>;
export type NetworkTypeList = NetworkType[];
const NetworkTypeList = /*@__PURE__*/ __L.at(__c6, 2);
export interface Subnet {
  Identifier?: string;
  AvailabilityZone?: AvailabilityZone;
  SupportedNetworkTypes?: NetworkType[];
}
const Subnet = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<Subnet>;
export type SubnetList = Subnet[];
const SubnetList = /*@__PURE__*/ __L.at(__c6, 4);
export interface SubnetGroup {
  Name?: string;
  Description?: string;
  VpcId?: string;
  Subnets?: Subnet[];
  ARN?: string;
  SupportedNetworkTypes?: NetworkType[];
}
const SubnetGroup = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<SubnetGroup>;
export interface CreateSubnetGroupResponse {
  SubnetGroup?: SubnetGroup;
}
const CreateSubnetGroupResponse = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<CreateSubnetGroupResponse>;
export type InputAuthenticationType = "password" | "iam" | (string & {});
const InputAuthenticationType = S.String;

export type PasswordListInput = string[];
export interface AuthenticationMode {
  Type?: InputAuthenticationType;
  Passwords?: Array<string | redacted.Redacted<string>>;
}
const AuthenticationMode = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<AuthenticationMode>;
export type AccessString = string;
export interface CreateUserRequest {
  UserName: string;
  AuthenticationMode: AuthenticationMode;
  AccessString: string;
  Tags?: Tag[];
}
const CreateUserRequest = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<CreateUserRequest>;
export type ACLNameList = string[];
const ACLNameList = ClusterNameList as any as S.Schema<ACLNameList>;
export type AuthenticationType = "password" | "no-password" | "iam" | (string & {});
const AuthenticationType = S.String;

export interface Authentication {
  Type?: AuthenticationType;
  PasswordCount?: number;
}
const Authentication = /*@__PURE__*/ __L.at(__c7, 1) as any as S.Schema<Authentication>;
export interface User {
  Name?: string;
  Status?: string;
  AccessString?: string;
  ACLNames?: string[];
  MinimumEngineVersion?: string;
  Authentication?: Authentication;
  ARN?: string;
}
const User = /*@__PURE__*/ __L.at(__c7, 2) as any as S.Schema<User>;
export interface CreateUserResponse {
  User?: User;
}
const CreateUserResponse = /*@__PURE__*/ __L.at(__c7, 3) as any as S.Schema<CreateUserResponse>;
export interface DeleteACLRequest {
  ACLName: string;
}
const DeleteACLRequest = /*@__PURE__*/ __L.at(__c7, 4) as any as S.Schema<DeleteACLRequest>;
export interface DeleteACLResponse {
  ACL?: ACL;
}
const DeleteACLResponse = CreateACLResponse as any as S.Schema<DeleteACLResponse>;
export interface DeleteClusterRequest {
  ClusterName: string;
  MultiRegionClusterName?: string;
  FinalSnapshotName?: string;
}
const DeleteClusterRequest = /*@__PURE__*/ __L.at(__c7, 5) as any as S.Schema<DeleteClusterRequest>;
export interface DeleteClusterResponse {
  Cluster?: Cluster;
}
const DeleteClusterResponse = CreateClusterResponse as any as S.Schema<DeleteClusterResponse>;
export interface DeleteMultiRegionClusterRequest {
  MultiRegionClusterName: string;
}
const DeleteMultiRegionClusterRequest = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<DeleteMultiRegionClusterRequest>;
export interface DeleteMultiRegionClusterResponse {
  MultiRegionCluster?: MultiRegionCluster;
}
const DeleteMultiRegionClusterResponse =
  CreateMultiRegionClusterResponse as any as S.Schema<DeleteMultiRegionClusterResponse>;
export interface DeleteParameterGroupRequest {
  ParameterGroupName: string;
}
const DeleteParameterGroupRequest = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<DeleteParameterGroupRequest>;
export interface DeleteParameterGroupResponse {
  ParameterGroup?: ParameterGroup;
}
const DeleteParameterGroupResponse =
  CreateParameterGroupResponse as any as S.Schema<DeleteParameterGroupResponse>;
export interface DeleteSnapshotRequest {
  SnapshotName: string;
}
const DeleteSnapshotRequest = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<DeleteSnapshotRequest>;
export interface DeleteSnapshotResponse {
  Snapshot?: Snapshot;
}
const DeleteSnapshotResponse = CopySnapshotResponse as any as S.Schema<DeleteSnapshotResponse>;
export interface DeleteSubnetGroupRequest {
  SubnetGroupName: string;
}
const DeleteSubnetGroupRequest = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<DeleteSubnetGroupRequest>;
export interface DeleteSubnetGroupResponse {
  SubnetGroup?: SubnetGroup;
}
const DeleteSubnetGroupResponse =
  CreateSubnetGroupResponse as any as S.Schema<DeleteSubnetGroupResponse>;
export interface DeleteUserRequest {
  UserName: string;
}
const DeleteUserRequest = /*@__PURE__*/ __L.at(__c8, 2) as any as S.Schema<DeleteUserRequest>;
export interface DeleteUserResponse {
  User?: User;
}
const DeleteUserResponse = CreateUserResponse as any as S.Schema<DeleteUserResponse>;
export interface DescribeACLsRequest {
  ACLName?: string;
  MaxResults?: number;
  NextToken?: string;
}
const DescribeACLsRequest = /*@__PURE__*/ __L.at(__c8, 3) as any as S.Schema<DescribeACLsRequest>;
export type ACLList = ACL[];
const ACLList = /*@__PURE__*/ __L.at(__c8, 4);
export interface DescribeACLsResponse {
  ACLs?: ACL[];
  NextToken?: string;
}
const DescribeACLsResponse = /*@__PURE__*/ __L.at(__c8, 5) as any as S.Schema<DescribeACLsResponse>;
export interface DescribeClustersRequest {
  ClusterName?: string;
  MaxResults?: number;
  NextToken?: string;
  ShowShardDetails?: boolean;
}
const DescribeClustersRequest = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<DescribeClustersRequest>;
export interface DescribeClustersResponse {
  NextToken?: string;
  Clusters?: Cluster[];
}
const DescribeClustersResponse = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<DescribeClustersResponse>;
export interface DescribeEngineVersionsRequest {
  Engine?: string;
  EngineVersion?: string;
  ParameterGroupFamily?: string;
  MaxResults?: number;
  NextToken?: string;
  DefaultOnly?: boolean;
}
const DescribeEngineVersionsRequest = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<DescribeEngineVersionsRequest>;
export interface EngineVersionInfo {
  Engine?: string;
  EngineVersion?: string;
  EnginePatchVersion?: string;
  ParameterGroupFamily?: string;
}
const EngineVersionInfo = /*@__PURE__*/ __L.at(__c9, 1) as any as S.Schema<EngineVersionInfo>;
export type EngineVersionInfoList = EngineVersionInfo[];
const EngineVersionInfoList = /*@__PURE__*/ __L.at(__c9, 2);
export interface DescribeEngineVersionsResponse {
  NextToken?: string;
  EngineVersions?: EngineVersionInfo[];
}
const DescribeEngineVersionsResponse = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<DescribeEngineVersionsResponse>;
export type SourceType =
  | "node"
  | "parameter-group"
  | "subnet-group"
  | "cluster"
  | "user"
  | "acl"
  | (string & {});
const SourceType = S.String;

export interface DescribeEventsRequest {
  SourceName?: string;
  SourceType?: SourceType;
  StartTime?: Date;
  EndTime?: Date;
  Duration?: number;
  MaxResults?: number;
  NextToken?: string;
}
const DescribeEventsRequest = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<DescribeEventsRequest>;
export interface Event {
  SourceName?: string;
  SourceType?: SourceType;
  Message?: string;
  Date?: Date;
}
const Event = /*@__PURE__*/ __L.at(__c9, 5) as any as S.Schema<Event>;
export type EventList = Event[];
const EventList = /*@__PURE__*/ __L.at(__c9, 6);
export interface DescribeEventsResponse {
  NextToken?: string;
  Events?: Event[];
}
const DescribeEventsResponse = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<DescribeEventsResponse>;
export interface DescribeMultiRegionClustersRequest {
  MultiRegionClusterName?: string;
  MaxResults?: number;
  NextToken?: string;
  ShowClusterDetails?: boolean;
}
const DescribeMultiRegionClustersRequest = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<DescribeMultiRegionClustersRequest>;
export type MultiRegionClusterList = MultiRegionCluster[];
const MultiRegionClusterList = /*@__PURE__*/ __L.at(__c10, 1);
export interface DescribeMultiRegionClustersResponse {
  NextToken?: string;
  MultiRegionClusters?: MultiRegionCluster[];
}
const DescribeMultiRegionClustersResponse = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<DescribeMultiRegionClustersResponse>;
export interface DescribeMultiRegionParameterGroupsRequest {
  MultiRegionParameterGroupName?: string;
  MaxResults?: number;
  NextToken?: string;
}
const DescribeMultiRegionParameterGroupsRequest = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<DescribeMultiRegionParameterGroupsRequest>;
export interface MultiRegionParameterGroup {
  Name?: string;
  Family?: string;
  Description?: string;
  ARN?: string;
}
const MultiRegionParameterGroup = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<MultiRegionParameterGroup>;
export type MultiRegionParameterGroupList = MultiRegionParameterGroup[];
const MultiRegionParameterGroupList = /*@__PURE__*/ __L.at(__c10, 5);
export interface DescribeMultiRegionParameterGroupsResponse {
  NextToken?: string;
  MultiRegionParameterGroups?: MultiRegionParameterGroup[];
}
const DescribeMultiRegionParameterGroupsResponse = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<DescribeMultiRegionParameterGroupsResponse>;
export interface DescribeMultiRegionParametersRequest {
  MultiRegionParameterGroupName: string;
  Source?: string;
  MaxResults?: number;
  NextToken?: string;
}
const DescribeMultiRegionParametersRequest = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<DescribeMultiRegionParametersRequest>;
export interface MultiRegionParameter {
  Name?: string;
  Value?: string;
  Description?: string;
  Source?: string;
  DataType?: string;
  AllowedValues?: string;
  MinimumEngineVersion?: string;
}
const MultiRegionParameter = /*@__PURE__*/ __L.at(
  __c11,
  0,
) as any as S.Schema<MultiRegionParameter>;
export type MultiRegionParametersList = MultiRegionParameter[];
const MultiRegionParametersList = /*@__PURE__*/ __L.at(__c11, 1);
export interface DescribeMultiRegionParametersResponse {
  NextToken?: string;
  MultiRegionParameters?: MultiRegionParameter[];
}
const DescribeMultiRegionParametersResponse = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<DescribeMultiRegionParametersResponse>;
export interface DescribeParameterGroupsRequest {
  ParameterGroupName?: string;
  MaxResults?: number;
  NextToken?: string;
}
const DescribeParameterGroupsRequest = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<DescribeParameterGroupsRequest>;
export type ParameterGroupList = ParameterGroup[];
const ParameterGroupList = /*@__PURE__*/ __L.at(__c11, 4);
export interface DescribeParameterGroupsResponse {
  NextToken?: string;
  ParameterGroups?: ParameterGroup[];
}
const DescribeParameterGroupsResponse = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<DescribeParameterGroupsResponse>;
export interface DescribeParametersRequest {
  ParameterGroupName: string;
  MaxResults?: number;
  NextToken?: string;
}
const DescribeParametersRequest = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<DescribeParametersRequest>;
export interface Parameter {
  Name?: string;
  Value?: string;
  Description?: string;
  DataType?: string;
  AllowedValues?: string;
  MinimumEngineVersion?: string;
}
const Parameter = /*@__PURE__*/ __L.at(__c11, 7) as any as S.Schema<Parameter>;
export type ParametersList = Parameter[];
const ParametersList = /*@__PURE__*/ __L.at(__c12, 0);
export interface DescribeParametersResponse {
  NextToken?: string;
  Parameters?: Parameter[];
}
const DescribeParametersResponse = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<DescribeParametersResponse>;
export interface DescribeReservedNodesRequest {
  ReservationId?: string;
  ReservedNodesOfferingId?: string;
  NodeType?: string;
  Duration?: string;
  OfferingType?: string;
  MaxResults?: number;
  NextToken?: string;
}
const DescribeReservedNodesRequest = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<DescribeReservedNodesRequest>;
export interface RecurringCharge {
  RecurringChargeAmount?: number;
  RecurringChargeFrequency?: string;
}
const RecurringCharge = /*@__PURE__*/ __L.at(__c12, 3) as any as S.Schema<RecurringCharge>;
export type RecurringChargeList = RecurringCharge[];
const RecurringChargeList = /*@__PURE__*/ __L.at(__c12, 4);
export interface ReservedNode {
  ReservationId?: string;
  ReservedNodesOfferingId?: string;
  NodeType?: string;
  StartTime?: Date;
  Duration?: number;
  FixedPrice?: number;
  NodeCount?: number;
  OfferingType?: string;
  State?: string;
  RecurringCharges?: RecurringCharge[];
  ARN?: string;
}
const ReservedNode = /*@__PURE__*/ __L.at(__c12, 5) as any as S.Schema<ReservedNode>;
export type ReservedNodeList = ReservedNode[];
const ReservedNodeList = /*@__PURE__*/ __L.at(__c12, 6);
export interface DescribeReservedNodesResponse {
  NextToken?: string;
  ReservedNodes?: ReservedNode[];
}
const DescribeReservedNodesResponse = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<DescribeReservedNodesResponse>;
export interface DescribeReservedNodesOfferingsRequest {
  ReservedNodesOfferingId?: string;
  NodeType?: string;
  Duration?: string;
  OfferingType?: string;
  MaxResults?: number;
  NextToken?: string;
}
const DescribeReservedNodesOfferingsRequest = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<DescribeReservedNodesOfferingsRequest>;
export interface ReservedNodesOffering {
  ReservedNodesOfferingId?: string;
  NodeType?: string;
  Duration?: number;
  FixedPrice?: number;
  OfferingType?: string;
  RecurringCharges?: RecurringCharge[];
}
const ReservedNodesOffering = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<ReservedNodesOffering>;
export type ReservedNodesOfferingList = ReservedNodesOffering[];
const ReservedNodesOfferingList = /*@__PURE__*/ __L.at(__c13, 2);
export interface DescribeReservedNodesOfferingsResponse {
  NextToken?: string;
  ReservedNodesOfferings?: ReservedNodesOffering[];
}
const DescribeReservedNodesOfferingsResponse = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<DescribeReservedNodesOfferingsResponse>;
export type ServiceUpdateStatusList = ServiceUpdateStatus[];
const ServiceUpdateStatusList = NetworkTypeList as any as S.Schema<ServiceUpdateStatusList>;
export interface DescribeServiceUpdatesRequest {
  ServiceUpdateName?: string;
  ClusterNames?: string[];
  Status?: ServiceUpdateStatus[];
  MaxResults?: number;
  NextToken?: string;
}
const DescribeServiceUpdatesRequest = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<DescribeServiceUpdatesRequest>;
export type ServiceUpdateType = "security-update" | (string & {});
const ServiceUpdateType = S.String;

export interface ServiceUpdate {
  ClusterName?: string;
  ServiceUpdateName?: string;
  ReleaseDate?: Date;
  Description?: string;
  Status?: ServiceUpdateStatus;
  Type?: ServiceUpdateType;
  Engine?: string;
  NodesUpdated?: string;
  AutoUpdateStartDate?: Date;
}
const ServiceUpdate = /*@__PURE__*/ __L.at(__c13, 5) as any as S.Schema<ServiceUpdate>;
export type ServiceUpdateList = ServiceUpdate[];
const ServiceUpdateList = /*@__PURE__*/ __L.at(__c13, 6);
export interface DescribeServiceUpdatesResponse {
  NextToken?: string;
  ServiceUpdates?: ServiceUpdate[];
}
const DescribeServiceUpdatesResponse = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<DescribeServiceUpdatesResponse>;
export interface DescribeSnapshotsRequest {
  ClusterName?: string;
  SnapshotName?: string;
  Source?: string;
  NextToken?: string;
  MaxResults?: number;
  ShowDetail?: boolean;
}
const DescribeSnapshotsRequest = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<DescribeSnapshotsRequest>;
export type SnapshotList = Snapshot[];
const SnapshotList = /*@__PURE__*/ __L.at(__c14, 1);
export interface DescribeSnapshotsResponse {
  NextToken?: string;
  Snapshots?: Snapshot[];
}
const DescribeSnapshotsResponse = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<DescribeSnapshotsResponse>;
export interface DescribeSubnetGroupsRequest {
  SubnetGroupName?: string;
  MaxResults?: number;
  NextToken?: string;
}
const DescribeSubnetGroupsRequest = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<DescribeSubnetGroupsRequest>;
export type SubnetGroupList = SubnetGroup[];
const SubnetGroupList = /*@__PURE__*/ __L.at(__c14, 4);
export interface DescribeSubnetGroupsResponse {
  NextToken?: string;
  SubnetGroups?: SubnetGroup[];
}
const DescribeSubnetGroupsResponse = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<DescribeSubnetGroupsResponse>;
export type FilterName = string;
export type FilterValue = string;
export type FilterValueList = string[];
const FilterValueList = ClusterNameList as any as S.Schema<FilterValueList>;
export interface Filter {
  Name: string;
  Values: string[];
}
const Filter = /*@__PURE__*/ __L.at(__c14, 6) as any as S.Schema<Filter>;
export type FilterList = Filter[];
const FilterList = /*@__PURE__*/ __L.at(__c14, 7);
export interface DescribeUsersRequest {
  UserName?: string;
  Filters?: Filter[];
  MaxResults?: number;
  NextToken?: string;
}
const DescribeUsersRequest = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<DescribeUsersRequest>;
export type UserList = User[];
const UserList = /*@__PURE__*/ __L.at(__c15, 1);
export interface DescribeUsersResponse {
  Users?: User[];
  NextToken?: string;
}
const DescribeUsersResponse = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<DescribeUsersResponse>;
export interface FailoverShardRequest {
  ClusterName: string;
  ShardName: string;
}
const FailoverShardRequest = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<FailoverShardRequest>;
export interface FailoverShardResponse {
  Cluster?: Cluster;
}
const FailoverShardResponse = CreateClusterResponse as any as S.Schema<FailoverShardResponse>;
export interface ListAllowedMultiRegionClusterUpdatesRequest {
  MultiRegionClusterName: string;
}
const ListAllowedMultiRegionClusterUpdatesRequest = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<ListAllowedMultiRegionClusterUpdatesRequest>;
export type NodeTypeList = string[];
const NodeTypeList = ClusterNameList as any as S.Schema<NodeTypeList>;
export interface ListAllowedMultiRegionClusterUpdatesResponse {
  ScaleUpNodeTypes?: string[];
  ScaleDownNodeTypes?: string[];
}
const ListAllowedMultiRegionClusterUpdatesResponse = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<ListAllowedMultiRegionClusterUpdatesResponse>;
export interface ListAllowedNodeTypeUpdatesRequest {
  ClusterName: string;
}
const ListAllowedNodeTypeUpdatesRequest = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<ListAllowedNodeTypeUpdatesRequest>;
export interface ListAllowedNodeTypeUpdatesResponse {
  ScaleUpNodeTypes?: string[];
  ScaleDownNodeTypes?: string[];
}
const ListAllowedNodeTypeUpdatesResponse =
  ListAllowedMultiRegionClusterUpdatesResponse as any as S.Schema<ListAllowedNodeTypeUpdatesResponse>;
export interface ListTagsRequest {
  ResourceArn: string;
}
const ListTagsRequest = /*@__PURE__*/ __L.at(__c15, 7) as any as S.Schema<ListTagsRequest>;
export interface ListTagsResponse {
  TagList?: Tag[];
}
const ListTagsResponse = /*@__PURE__*/ __L.at(__c16, 0) as any as S.Schema<ListTagsResponse>;
export interface PurchaseReservedNodesOfferingRequest {
  ReservedNodesOfferingId: string;
  ReservationId?: string;
  NodeCount?: number;
  Tags?: Tag[];
}
const PurchaseReservedNodesOfferingRequest = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<PurchaseReservedNodesOfferingRequest>;
export interface PurchaseReservedNodesOfferingResponse {
  ReservedNode?: ReservedNode;
}
const PurchaseReservedNodesOfferingResponse = /*@__PURE__*/ __L.at(
  __c16,
  2,
) as any as S.Schema<PurchaseReservedNodesOfferingResponse>;
export type ParameterNameList = string[];
const ParameterNameList = ClusterNameList as any as S.Schema<ParameterNameList>;
export interface ResetParameterGroupRequest {
  ParameterGroupName: string;
  AllParameters?: boolean;
  ParameterNames?: string[];
}
const ResetParameterGroupRequest = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<ResetParameterGroupRequest>;
export interface ResetParameterGroupResponse {
  ParameterGroup?: ParameterGroup;
}
const ResetParameterGroupResponse =
  CreateParameterGroupResponse as any as S.Schema<ResetParameterGroupResponse>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Tag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c16, 4) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {
  TagList?: Tag[];
}
const TagResourceResponse = ListTagsResponse as any as S.Schema<TagResourceResponse>;
export type KeyList = string[];
const KeyList = ClusterNameList as any as S.Schema<KeyList>;
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {
  TagList?: Tag[];
}
const UntagResourceResponse = ListTagsResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateACLRequest {
  ACLName: string;
  UserNamesToAdd?: string[];
  UserNamesToRemove?: string[];
}
const UpdateACLRequest = /*@__PURE__*/ __L.at(__c16, 6) as any as S.Schema<UpdateACLRequest>;
export interface UpdateACLResponse {
  ACL?: ACL;
}
const UpdateACLResponse = CreateACLResponse as any as S.Schema<UpdateACLResponse>;
export interface ReplicaConfigurationRequest {
  ReplicaCount?: number;
}
const ReplicaConfigurationRequest = /*@__PURE__*/ __L.at(
  __c16,
  7,
) as any as S.Schema<ReplicaConfigurationRequest>;
export interface ShardConfigurationRequest {
  ShardCount?: number;
}
const ShardConfigurationRequest = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<ShardConfigurationRequest>;
export interface UpdateClusterRequest {
  ClusterName: string;
  Description?: string;
  SecurityGroupIds?: string[];
  MaintenanceWindow?: string;
  SnsTopicArn?: string;
  SnsTopicStatus?: string;
  ParameterGroupName?: string;
  SnapshotWindow?: string;
  SnapshotRetentionLimit?: number;
  NodeType?: string;
  Engine?: string;
  EngineVersion?: string;
  ReplicaConfiguration?: ReplicaConfigurationRequest;
  ShardConfiguration?: ShardConfigurationRequest;
  ACLName?: string;
  IpDiscovery?: IpDiscovery;
}
const UpdateClusterRequest = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<UpdateClusterRequest>;
export interface UpdateClusterResponse {
  Cluster?: Cluster;
}
const UpdateClusterResponse = CreateClusterResponse as any as S.Schema<UpdateClusterResponse>;
export type UpdateStrategy = "coordinated" | "uncoordinated" | (string & {});
const UpdateStrategy = S.String;

export interface UpdateMultiRegionClusterRequest {
  MultiRegionClusterName: string;
  NodeType?: string;
  Description?: string;
  EngineVersion?: string;
  ShardConfiguration?: ShardConfigurationRequest;
  MultiRegionParameterGroupName?: string;
  UpdateStrategy?: UpdateStrategy;
}
const UpdateMultiRegionClusterRequest = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<UpdateMultiRegionClusterRequest>;
export interface UpdateMultiRegionClusterResponse {
  MultiRegionCluster?: MultiRegionCluster;
}
const UpdateMultiRegionClusterResponse =
  CreateMultiRegionClusterResponse as any as S.Schema<UpdateMultiRegionClusterResponse>;
export interface ParameterNameValue {
  ParameterName?: string;
  ParameterValue?: string;
}
const ParameterNameValue = /*@__PURE__*/ __L.at(__c17, 3) as any as S.Schema<ParameterNameValue>;
export type ParameterNameValueList = ParameterNameValue[];
const ParameterNameValueList = /*@__PURE__*/ __L.at(__c17, 4);
export interface UpdateParameterGroupRequest {
  ParameterGroupName: string;
  ParameterNameValues: ParameterNameValue[];
}
const UpdateParameterGroupRequest = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<UpdateParameterGroupRequest>;
export interface UpdateParameterGroupResponse {
  ParameterGroup?: ParameterGroup;
}
const UpdateParameterGroupResponse =
  CreateParameterGroupResponse as any as S.Schema<UpdateParameterGroupResponse>;
export interface UpdateSubnetGroupRequest {
  SubnetGroupName: string;
  Description?: string;
  SubnetIds?: string[];
}
const UpdateSubnetGroupRequest = /*@__PURE__*/ __L.at(
  __c17,
  6,
) as any as S.Schema<UpdateSubnetGroupRequest>;
export interface UpdateSubnetGroupResponse {
  SubnetGroup?: SubnetGroup;
}
const UpdateSubnetGroupResponse =
  CreateSubnetGroupResponse as any as S.Schema<UpdateSubnetGroupResponse>;
export interface UpdateUserRequest {
  UserName: string;
  AuthenticationMode?: AuthenticationMode;
  AccessString?: string;
}
const UpdateUserRequest = /*@__PURE__*/ __L.at(__c17, 7) as any as S.Schema<UpdateUserRequest>;
export interface UpdateUserResponse {
  User?: User;
}
const UpdateUserResponse = CreateUserResponse as any as S.Schema<UpdateUserResponse>;
export type AwsQueryErrorMessage = string;
export type ExceptionMessage = string;
export type BatchUpdateClusterError =
  | InvalidParameterValueException
  | ServiceUpdateNotFoundFault
  | InvalidParameterCombinationException
  | CommonErrors;
/**
 * Apply the service update to a list of clusters supplied. For more information on service updates and applying them, see Applying the service updates.
 */
export const batchUpdateCluster: API.OperationMethod<
  BatchUpdateClusterRequest,
  BatchUpdateClusterResponse,
  BatchUpdateClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateClusterRequest,
  output: BatchUpdateClusterResponse,
  errors: [
    InvalidParameterValueException,
    ServiceUpdateNotFoundFault,
    InvalidParameterCombinationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateCluster",
}));

export type CopySnapshotError =
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | InvalidSnapshotStateFault
  | ServiceLinkedRoleNotFoundFault
  | SnapshotAlreadyExistsFault
  | SnapshotNotFoundFault
  | SnapshotQuotaExceededFault
  | TagQuotaPerResourceExceeded
  | CommonErrors;
/**
 * Makes a copy of an existing snapshot.
 */
export const copySnapshot: API.OperationMethod<
  CopySnapshotRequest,
  CopySnapshotResponse,
  CopySnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CopySnapshotRequest,
  output: CopySnapshotResponse,
  errors: [
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    InvalidSnapshotStateFault,
    ServiceLinkedRoleNotFoundFault,
    SnapshotAlreadyExistsFault,
    SnapshotNotFoundFault,
    SnapshotQuotaExceededFault,
    TagQuotaPerResourceExceeded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CopySnapshot",
}));

export type CreateACLError =
  | ACLAlreadyExistsFault
  | ACLQuotaExceededFault
  | DefaultUserRequired
  | DuplicateUserNameFault
  | InvalidParameterValueException
  | TagQuotaPerResourceExceeded
  | UserNotFoundFault
  | CommonErrors;
/**
 * Creates an Access Control List. For more information, see Authenticating users with Access Contol Lists (ACLs).
 */
export const createACL: API.OperationMethod<
  CreateACLRequest,
  CreateACLResponse,
  CreateACLError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateACLRequest,
  output: CreateACLResponse,
  errors: [
    ACLAlreadyExistsFault,
    ACLQuotaExceededFault,
    DefaultUserRequired,
    DuplicateUserNameFault,
    InvalidParameterValueException,
    TagQuotaPerResourceExceeded,
    UserNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateACL",
}));

export type CreateClusterError =
  | ACLNotFoundFault
  | ClusterAlreadyExistsFault
  | ClusterQuotaForCustomerExceededFault
  | InsufficientClusterCapacityFault
  | InvalidACLStateFault
  | InvalidCredentialsException
  | InvalidMultiRegionClusterStateFault
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | InvalidVPCNetworkStateFault
  | MultiRegionClusterNotFoundFault
  | NodeQuotaForClusterExceededFault
  | NodeQuotaForCustomerExceededFault
  | ParameterGroupNotFoundFault
  | ServiceLinkedRoleNotFoundFault
  | ShardsPerClusterQuotaExceededFault
  | SubnetGroupNotFoundFault
  | TagQuotaPerResourceExceeded
  | CommonErrors;
/**
 * Creates a cluster. All nodes in the cluster run the same protocol-compliant engine software.
 */
export const createCluster: API.OperationMethod<
  CreateClusterRequest,
  CreateClusterResponse,
  CreateClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateClusterRequest,
  output: CreateClusterResponse,
  errors: [
    ACLNotFoundFault,
    ClusterAlreadyExistsFault,
    ClusterQuotaForCustomerExceededFault,
    InsufficientClusterCapacityFault,
    InvalidACLStateFault,
    InvalidCredentialsException,
    InvalidMultiRegionClusterStateFault,
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    InvalidVPCNetworkStateFault,
    MultiRegionClusterNotFoundFault,
    NodeQuotaForClusterExceededFault,
    NodeQuotaForCustomerExceededFault,
    ParameterGroupNotFoundFault,
    ServiceLinkedRoleNotFoundFault,
    ShardsPerClusterQuotaExceededFault,
    SubnetGroupNotFoundFault,
    TagQuotaPerResourceExceeded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCluster",
}));

export type CreateMultiRegionClusterError =
  | ClusterQuotaForCustomerExceededFault
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | MultiRegionClusterAlreadyExistsFault
  | MultiRegionParameterGroupNotFoundFault
  | TagQuotaPerResourceExceeded
  | CommonErrors;
/**
 * Creates a new multi-Region cluster.
 */
export const createMultiRegionCluster: API.OperationMethod<
  CreateMultiRegionClusterRequest,
  CreateMultiRegionClusterResponse,
  CreateMultiRegionClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateMultiRegionClusterRequest,
  output: CreateMultiRegionClusterResponse,
  errors: [
    ClusterQuotaForCustomerExceededFault,
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    MultiRegionClusterAlreadyExistsFault,
    MultiRegionParameterGroupNotFoundFault,
    TagQuotaPerResourceExceeded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMultiRegionCluster",
}));

export type CreateParameterGroupError =
  | InvalidParameterCombinationException
  | InvalidParameterGroupStateFault
  | InvalidParameterValueException
  | ParameterGroupAlreadyExistsFault
  | ParameterGroupQuotaExceededFault
  | ServiceLinkedRoleNotFoundFault
  | TagQuotaPerResourceExceeded
  | CommonErrors;
/**
 * Creates a new MemoryDB parameter group. A parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster. For
 * more information, see Configuring engine parameters using parameter groups.
 */
export const createParameterGroup: API.OperationMethod<
  CreateParameterGroupRequest,
  CreateParameterGroupResponse,
  CreateParameterGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateParameterGroupRequest,
  output: CreateParameterGroupResponse,
  errors: [
    InvalidParameterCombinationException,
    InvalidParameterGroupStateFault,
    InvalidParameterValueException,
    ParameterGroupAlreadyExistsFault,
    ParameterGroupQuotaExceededFault,
    ServiceLinkedRoleNotFoundFault,
    TagQuotaPerResourceExceeded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateParameterGroup",
}));

export type CreateSnapshotError =
  | ClusterNotFoundFault
  | InvalidClusterStateFault
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | ServiceLinkedRoleNotFoundFault
  | SnapshotAlreadyExistsFault
  | SnapshotQuotaExceededFault
  | TagQuotaPerResourceExceeded
  | CommonErrors;
/**
 * Creates a copy of an entire cluster at a specific moment in time.
 */
export const createSnapshot: API.OperationMethod<
  CreateSnapshotRequest,
  CreateSnapshotResponse,
  CreateSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSnapshotRequest,
  output: CreateSnapshotResponse,
  errors: [
    ClusterNotFoundFault,
    InvalidClusterStateFault,
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    ServiceLinkedRoleNotFoundFault,
    SnapshotAlreadyExistsFault,
    SnapshotQuotaExceededFault,
    TagQuotaPerResourceExceeded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSnapshot",
}));

export type CreateSubnetGroupError =
  | InvalidSubnet
  | ServiceLinkedRoleNotFoundFault
  | SubnetGroupAlreadyExistsFault
  | SubnetGroupQuotaExceededFault
  | SubnetNotAllowedFault
  | SubnetQuotaExceededFault
  | TagQuotaPerResourceExceeded
  | CommonErrors;
/**
 * Creates a subnet group. A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment.
 *
 * When you create a cluster in an Amazon VPC, you must specify a subnet group. MemoryDB uses that subnet group to choose a subnet and IP addresses within that subnet to associate with your nodes.
 * For more information, see Subnets and subnet groups.
 */
export const createSubnetGroup: API.OperationMethod<
  CreateSubnetGroupRequest,
  CreateSubnetGroupResponse,
  CreateSubnetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSubnetGroupRequest,
  output: CreateSubnetGroupResponse,
  errors: [
    InvalidSubnet,
    ServiceLinkedRoleNotFoundFault,
    SubnetGroupAlreadyExistsFault,
    SubnetGroupQuotaExceededFault,
    SubnetNotAllowedFault,
    SubnetQuotaExceededFault,
    TagQuotaPerResourceExceeded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSubnetGroup",
}));

export type CreateUserError =
  | DuplicateUserNameFault
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | TagQuotaPerResourceExceeded
  | UserAlreadyExistsFault
  | UserQuotaExceededFault
  | CommonErrors;
/**
 * Creates a MemoryDB user. For more information, see Authenticating users with Access Contol Lists (ACLs).
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
    DuplicateUserNameFault,
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    TagQuotaPerResourceExceeded,
    UserAlreadyExistsFault,
    UserQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateUser",
}));

export type DeleteACLError =
  | ACLNotFoundFault
  | InvalidACLStateFault
  | InvalidParameterValueException
  | CommonErrors;
/**
 * Deletes an Access Control List. The ACL must first be disassociated from the cluster before it can be deleted. For more information, see Authenticating users with Access Contol Lists (ACLs).
 */
export const deleteACL: API.OperationMethod<
  DeleteACLRequest,
  DeleteACLResponse,
  DeleteACLError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteACLRequest,
  output: DeleteACLResponse,
  errors: [ACLNotFoundFault, InvalidACLStateFault, InvalidParameterValueException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteACL",
}));

export type DeleteClusterError =
  | ClusterNotFoundFault
  | InvalidClusterStateFault
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | ServiceLinkedRoleNotFoundFault
  | SnapshotAlreadyExistsFault
  | CommonErrors;
/**
 * Deletes a cluster. It also deletes all associated nodes and node endpoints.
 *
 * `CreateSnapshot` permission is required to create a final snapshot.
 * Without this permission, the API call will fail with an `Access Denied` exception.
 */
export const deleteCluster: API.OperationMethod<
  DeleteClusterRequest,
  DeleteClusterResponse,
  DeleteClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteClusterRequest,
  output: DeleteClusterResponse,
  errors: [
    ClusterNotFoundFault,
    InvalidClusterStateFault,
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    ServiceLinkedRoleNotFoundFault,
    SnapshotAlreadyExistsFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCluster",
}));

export type DeleteMultiRegionClusterError =
  | InvalidMultiRegionClusterStateFault
  | InvalidParameterValueException
  | MultiRegionClusterNotFoundFault
  | CommonErrors;
/**
 * Deletes an existing multi-Region cluster.
 */
export const deleteMultiRegionCluster: API.OperationMethod<
  DeleteMultiRegionClusterRequest,
  DeleteMultiRegionClusterResponse,
  DeleteMultiRegionClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteMultiRegionClusterRequest,
  output: DeleteMultiRegionClusterResponse,
  errors: [
    InvalidMultiRegionClusterStateFault,
    InvalidParameterValueException,
    MultiRegionClusterNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMultiRegionCluster",
}));

export type DeleteParameterGroupError =
  | InvalidParameterCombinationException
  | InvalidParameterGroupStateFault
  | InvalidParameterValueException
  | ParameterGroupNotFoundFault
  | ServiceLinkedRoleNotFoundFault
  | CommonErrors;
/**
 * Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any clusters.
 * You cannot delete the default parameter groups in your account.
 */
export const deleteParameterGroup: API.OperationMethod<
  DeleteParameterGroupRequest,
  DeleteParameterGroupResponse,
  DeleteParameterGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteParameterGroupRequest,
  output: DeleteParameterGroupResponse,
  errors: [
    InvalidParameterCombinationException,
    InvalidParameterGroupStateFault,
    InvalidParameterValueException,
    ParameterGroupNotFoundFault,
    ServiceLinkedRoleNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteParameterGroup",
}));

export type DeleteSnapshotError =
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | InvalidSnapshotStateFault
  | ServiceLinkedRoleNotFoundFault
  | SnapshotNotFoundFault
  | CommonErrors;
/**
 * Deletes an existing snapshot. When you receive a successful response from this operation, MemoryDB immediately begins deleting the snapshot; you cannot cancel or revert this operation.
 */
export const deleteSnapshot: API.OperationMethod<
  DeleteSnapshotRequest,
  DeleteSnapshotResponse,
  DeleteSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSnapshotRequest,
  output: DeleteSnapshotResponse,
  errors: [
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    InvalidSnapshotStateFault,
    ServiceLinkedRoleNotFoundFault,
    SnapshotNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSnapshot",
}));

export type DeleteSubnetGroupError =
  | ServiceLinkedRoleNotFoundFault
  | SubnetGroupInUseFault
  | SubnetGroupNotFoundFault
  | CommonErrors;
/**
 * Deletes a subnet group. You cannot delete a default subnet group or one that is associated with any clusters.
 */
export const deleteSubnetGroup: API.OperationMethod<
  DeleteSubnetGroupRequest,
  DeleteSubnetGroupResponse,
  DeleteSubnetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSubnetGroupRequest,
  output: DeleteSubnetGroupResponse,
  errors: [ServiceLinkedRoleNotFoundFault, SubnetGroupInUseFault, SubnetGroupNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSubnetGroup",
}));

export type DeleteUserError =
  | InvalidParameterValueException
  | InvalidUserStateFault
  | UserNotFoundFault
  | CommonErrors;
/**
 * Deletes a user. The user will be removed from all ACLs and in turn removed from all clusters.
 */
export const deleteUser: API.OperationMethod<
  DeleteUserRequest,
  DeleteUserResponse,
  DeleteUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteUserRequest,
  output: DeleteUserResponse,
  errors: [InvalidParameterValueException, InvalidUserStateFault, UserNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteUser",
}));

export type DescribeACLsError =
  | ACLNotFoundFault
  | InvalidParameterCombinationException
  | CommonErrors;
/**
 * Returns a list of ACLs.
 */
export const describeACLs: API.PaginatedOperationMethod<
  DescribeACLsRequest,
  DescribeACLsResponse,
  DescribeACLsError,
  Credentials | HttpClient.HttpClient,
  ACL
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeACLsRequest,
  output: DescribeACLsResponse,
  errors: [ACLNotFoundFault, InvalidParameterCombinationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeACLs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ACLs",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeClustersError =
  | ClusterNotFoundFault
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | ServiceLinkedRoleNotFoundFault
  | CommonErrors;
/**
 * Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cluster if a cluster name is supplied.
 */
export const describeClusters: API.PaginatedOperationMethod<
  DescribeClustersRequest,
  DescribeClustersResponse,
  DescribeClustersError,
  Credentials | HttpClient.HttpClient,
  Cluster
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeClustersRequest,
  output: DescribeClustersResponse,
  errors: [
    ClusterNotFoundFault,
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    ServiceLinkedRoleNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeClusters",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Clusters",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeEngineVersionsError =
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | ServiceLinkedRoleNotFoundFault
  | CommonErrors;
/**
 * Returns a list of the available Redis OSS engine versions.
 */
export const describeEngineVersions: API.PaginatedOperationMethod<
  DescribeEngineVersionsRequest,
  DescribeEngineVersionsResponse,
  DescribeEngineVersionsError,
  Credentials | HttpClient.HttpClient,
  EngineVersionInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeEngineVersionsRequest,
  output: DescribeEngineVersionsResponse,
  errors: [
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    ServiceLinkedRoleNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEngineVersions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "EngineVersions",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeEventsError =
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | ServiceLinkedRoleNotFoundFault
  | CommonErrors;
/**
 * Returns events related to clusters, security groups, and parameter groups. You can obtain events specific to a particular cluster, security group, or parameter group by providing the name as a parameter.
 *
 * By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.
 */
export const describeEvents: API.PaginatedOperationMethod<
  DescribeEventsRequest,
  DescribeEventsResponse,
  DescribeEventsError,
  Credentials | HttpClient.HttpClient,
  Event
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeEventsRequest,
  output: DescribeEventsResponse,
  errors: [
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    ServiceLinkedRoleNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEvents",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Events",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeMultiRegionClustersError =
  | ClusterNotFoundFault
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | MultiRegionClusterNotFoundFault
  | CommonErrors;
/**
 * Returns details about one or more multi-Region clusters.
 */
export const describeMultiRegionClusters: API.PaginatedOperationMethod<
  DescribeMultiRegionClustersRequest,
  DescribeMultiRegionClustersResponse,
  DescribeMultiRegionClustersError,
  Credentials | HttpClient.HttpClient,
  MultiRegionCluster
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeMultiRegionClustersRequest,
  output: DescribeMultiRegionClustersResponse,
  errors: [
    ClusterNotFoundFault,
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    MultiRegionClusterNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeMultiRegionClusters",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "MultiRegionClusters",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeMultiRegionParameterGroupsError =
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | MultiRegionParameterGroupNotFoundFault
  | ServiceLinkedRoleNotFoundFault
  | CommonErrors;
/**
 * Returns a list of multi-region parameter groups.
 */
export const describeMultiRegionParameterGroups: API.OperationMethod<
  DescribeMultiRegionParameterGroupsRequest,
  DescribeMultiRegionParameterGroupsResponse,
  DescribeMultiRegionParameterGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeMultiRegionParameterGroupsRequest,
  output: DescribeMultiRegionParameterGroupsResponse,
  errors: [
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    MultiRegionParameterGroupNotFoundFault,
    ServiceLinkedRoleNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeMultiRegionParameterGroups",
}));

export type DescribeMultiRegionParametersError =
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | MultiRegionParameterGroupNotFoundFault
  | ServiceLinkedRoleNotFoundFault
  | CommonErrors;
/**
 * Returns the detailed parameter list for a particular multi-region parameter group.
 */
export const describeMultiRegionParameters: API.OperationMethod<
  DescribeMultiRegionParametersRequest,
  DescribeMultiRegionParametersResponse,
  DescribeMultiRegionParametersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeMultiRegionParametersRequest,
  output: DescribeMultiRegionParametersResponse,
  errors: [
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    MultiRegionParameterGroupNotFoundFault,
    ServiceLinkedRoleNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeMultiRegionParameters",
}));

export type DescribeParameterGroupsError =
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | ParameterGroupNotFoundFault
  | ServiceLinkedRoleNotFoundFault
  | CommonErrors;
/**
 * Returns a list of parameter group descriptions. If a parameter group name is specified, the list contains only the descriptions for that group.
 */
export const describeParameterGroups: API.PaginatedOperationMethod<
  DescribeParameterGroupsRequest,
  DescribeParameterGroupsResponse,
  DescribeParameterGroupsError,
  Credentials | HttpClient.HttpClient,
  ParameterGroup
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeParameterGroupsRequest,
  output: DescribeParameterGroupsResponse,
  errors: [
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    ParameterGroupNotFoundFault,
    ServiceLinkedRoleNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeParameterGroups",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ParameterGroups",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeParametersError =
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | ParameterGroupNotFoundFault
  | ServiceLinkedRoleNotFoundFault
  | CommonErrors;
/**
 * Returns the detailed parameter list for a particular parameter group.
 */
export const describeParameters: API.PaginatedOperationMethod<
  DescribeParametersRequest,
  DescribeParametersResponse,
  DescribeParametersError,
  Credentials | HttpClient.HttpClient,
  Parameter
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeParametersRequest,
  output: DescribeParametersResponse,
  errors: [
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    ParameterGroupNotFoundFault,
    ServiceLinkedRoleNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeParameters",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Parameters",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeReservedNodesError =
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | ReservedNodeNotFoundFault
  | ServiceLinkedRoleNotFoundFault
  | CommonErrors;
/**
 * Returns information about reserved nodes for this account, or about a specified reserved node.
 */
export const describeReservedNodes: API.PaginatedOperationMethod<
  DescribeReservedNodesRequest,
  DescribeReservedNodesResponse,
  DescribeReservedNodesError,
  Credentials | HttpClient.HttpClient,
  ReservedNode
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeReservedNodesRequest,
  output: DescribeReservedNodesResponse,
  errors: [
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    ReservedNodeNotFoundFault,
    ServiceLinkedRoleNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeReservedNodes",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ReservedNodes",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeReservedNodesOfferingsError =
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | ReservedNodesOfferingNotFoundFault
  | ServiceLinkedRoleNotFoundFault
  | CommonErrors;
/**
 * Lists available reserved node offerings.
 */
export const describeReservedNodesOfferings: API.PaginatedOperationMethod<
  DescribeReservedNodesOfferingsRequest,
  DescribeReservedNodesOfferingsResponse,
  DescribeReservedNodesOfferingsError,
  Credentials | HttpClient.HttpClient,
  ReservedNodesOffering
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeReservedNodesOfferingsRequest,
  output: DescribeReservedNodesOfferingsResponse,
  errors: [
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    ReservedNodesOfferingNotFoundFault,
    ServiceLinkedRoleNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeReservedNodesOfferings",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ReservedNodesOfferings",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeServiceUpdatesError =
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | CommonErrors;
/**
 * Returns details of the service updates.
 */
export const describeServiceUpdates: API.PaginatedOperationMethod<
  DescribeServiceUpdatesRequest,
  DescribeServiceUpdatesResponse,
  DescribeServiceUpdatesError,
  Credentials | HttpClient.HttpClient,
  ServiceUpdate
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeServiceUpdatesRequest,
  output: DescribeServiceUpdatesResponse,
  errors: [InvalidParameterCombinationException, InvalidParameterValueException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeServiceUpdates",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ServiceUpdates",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeSnapshotsError =
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | ServiceLinkedRoleNotFoundFault
  | SnapshotNotFoundFault
  | CommonErrors;
/**
 * Returns information about cluster snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot,
 * or just the snapshots associated with a particular cluster.
 */
export const describeSnapshots: API.PaginatedOperationMethod<
  DescribeSnapshotsRequest,
  DescribeSnapshotsResponse,
  DescribeSnapshotsError,
  Credentials | HttpClient.HttpClient,
  Snapshot
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeSnapshotsRequest,
  output: DescribeSnapshotsResponse,
  errors: [
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    ServiceLinkedRoleNotFoundFault,
    SnapshotNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSnapshots",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Snapshots",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeSubnetGroupsError =
  | ServiceLinkedRoleNotFoundFault
  | SubnetGroupNotFoundFault
  | CommonErrors;
/**
 * Returns a list of subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group.
 */
export const describeSubnetGroups: API.PaginatedOperationMethod<
  DescribeSubnetGroupsRequest,
  DescribeSubnetGroupsResponse,
  DescribeSubnetGroupsError,
  Credentials | HttpClient.HttpClient,
  SubnetGroup
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeSubnetGroupsRequest,
  output: DescribeSubnetGroupsResponse,
  errors: [ServiceLinkedRoleNotFoundFault, SubnetGroupNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSubnetGroups",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "SubnetGroups",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeUsersError =
  | InvalidParameterCombinationException
  | UserNotFoundFault
  | CommonErrors;
/**
 * Returns a list of users.
 */
export const describeUsers: API.PaginatedOperationMethod<
  DescribeUsersRequest,
  DescribeUsersResponse,
  DescribeUsersError,
  Credentials | HttpClient.HttpClient,
  User
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeUsersRequest,
  output: DescribeUsersResponse,
  errors: [InvalidParameterCombinationException, UserNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeUsers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Users",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type FailoverShardError =
  | APICallRateForCustomerExceededFault
  | ClusterNotFoundFault
  | InvalidClusterStateFault
  | InvalidKMSKeyFault
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | ShardNotFoundFault
  | TestFailoverNotAvailableFault
  | CommonErrors;
/**
 * Used to failover a shard. This API is designed for testing the behavior of your application in case of MemoryDB failover. It is not designed to be used as a production-level tool for initiating
 * a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large scale operational events, Amazon may block this API.
 */
export const failoverShard: API.OperationMethod<
  FailoverShardRequest,
  FailoverShardResponse,
  FailoverShardError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: FailoverShardRequest,
  output: FailoverShardResponse,
  errors: [
    APICallRateForCustomerExceededFault,
    ClusterNotFoundFault,
    InvalidClusterStateFault,
    InvalidKMSKeyFault,
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    ShardNotFoundFault,
    TestFailoverNotAvailableFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "FailoverShard",
}));

export type ListAllowedMultiRegionClusterUpdatesError =
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | MultiRegionClusterNotFoundFault
  | CommonErrors;
/**
 * Lists the allowed updates for a multi-Region cluster.
 */
export const listAllowedMultiRegionClusterUpdates: API.OperationMethod<
  ListAllowedMultiRegionClusterUpdatesRequest,
  ListAllowedMultiRegionClusterUpdatesResponse,
  ListAllowedMultiRegionClusterUpdatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListAllowedMultiRegionClusterUpdatesRequest,
  output: ListAllowedMultiRegionClusterUpdatesResponse,
  errors: [
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    MultiRegionClusterNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAllowedMultiRegionClusterUpdates",
}));

export type ListAllowedNodeTypeUpdatesError =
  | ClusterNotFoundFault
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | ServiceLinkedRoleNotFoundFault
  | CommonErrors;
/**
 * Lists all available node types that you can scale to from your cluster's current node type.
 *
 * When you use the UpdateCluster operation to scale your cluster, the value of the NodeType parameter must be one of the node types returned by this operation.
 */
export const listAllowedNodeTypeUpdates: API.OperationMethod<
  ListAllowedNodeTypeUpdatesRequest,
  ListAllowedNodeTypeUpdatesResponse,
  ListAllowedNodeTypeUpdatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListAllowedNodeTypeUpdatesRequest,
  output: ListAllowedNodeTypeUpdatesResponse,
  errors: [
    ClusterNotFoundFault,
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    ServiceLinkedRoleNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAllowedNodeTypeUpdates",
}));

export type ListTagsError =
  | ACLNotFoundFault
  | ClusterNotFoundFault
  | InvalidARNFault
  | InvalidClusterStateFault
  | MultiRegionClusterNotFoundFault
  | MultiRegionParameterGroupNotFoundFault
  | ParameterGroupNotFoundFault
  | ServiceLinkedRoleNotFoundFault
  | SnapshotNotFoundFault
  | SubnetGroupNotFoundFault
  | UserNotFoundFault
  | CommonErrors;
/**
 * Lists all tags currently on a named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track your MemoryDB resources. For more information, see Tagging your MemoryDB resources.
 *
 * When you add or remove tags from multi region clusters, you might not immediately see the latest effective tags in the ListTags API response due to it being eventually consistent specifically for multi region clusters. For more information, see Tagging your MemoryDB resources.
 */
export const listTags: API.OperationMethod<
  ListTagsRequest,
  ListTagsResponse,
  ListTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsRequest,
  output: ListTagsResponse,
  errors: [
    ACLNotFoundFault,
    ClusterNotFoundFault,
    InvalidARNFault,
    InvalidClusterStateFault,
    MultiRegionClusterNotFoundFault,
    MultiRegionParameterGroupNotFoundFault,
    ParameterGroupNotFoundFault,
    ServiceLinkedRoleNotFoundFault,
    SnapshotNotFoundFault,
    SubnetGroupNotFoundFault,
    UserNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTags",
}));

export type PurchaseReservedNodesOfferingError =
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | ReservedNodeAlreadyExistsFault
  | ReservedNodeQuotaExceededFault
  | ReservedNodesOfferingNotFoundFault
  | ServiceLinkedRoleNotFoundFault
  | TagQuotaPerResourceExceeded
  | CommonErrors;
/**
 * Allows you to purchase a reserved node offering. Reserved nodes are not eligible for cancellation and are non-refundable.
 */
export const purchaseReservedNodesOffering: API.OperationMethod<
  PurchaseReservedNodesOfferingRequest,
  PurchaseReservedNodesOfferingResponse,
  PurchaseReservedNodesOfferingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PurchaseReservedNodesOfferingRequest,
  output: PurchaseReservedNodesOfferingResponse,
  errors: [
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    ReservedNodeAlreadyExistsFault,
    ReservedNodeQuotaExceededFault,
    ReservedNodesOfferingNotFoundFault,
    ServiceLinkedRoleNotFoundFault,
    TagQuotaPerResourceExceeded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PurchaseReservedNodesOffering",
}));

export type ResetParameterGroupError =
  | InvalidParameterCombinationException
  | InvalidParameterGroupStateFault
  | InvalidParameterValueException
  | ParameterGroupNotFoundFault
  | ServiceLinkedRoleNotFoundFault
  | CommonErrors;
/**
 * Modifies the parameters of a parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire parameter group, specify the AllParameters and ParameterGroupName parameters.
 */
export const resetParameterGroup: API.OperationMethod<
  ResetParameterGroupRequest,
  ResetParameterGroupResponse,
  ResetParameterGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ResetParameterGroupRequest,
  output: ResetParameterGroupResponse,
  errors: [
    InvalidParameterCombinationException,
    InvalidParameterGroupStateFault,
    InvalidParameterValueException,
    ParameterGroupNotFoundFault,
    ServiceLinkedRoleNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ResetParameterGroup",
}));

export type TagResourceError =
  | ACLNotFoundFault
  | ClusterNotFoundFault
  | InvalidARNFault
  | InvalidClusterStateFault
  | InvalidParameterValueException
  | MultiRegionClusterNotFoundFault
  | MultiRegionParameterGroupNotFoundFault
  | ParameterGroupNotFoundFault
  | ServiceLinkedRoleNotFoundFault
  | SnapshotNotFoundFault
  | SubnetGroupNotFoundFault
  | TagQuotaPerResourceExceeded
  | UserNotFoundFault
  | CommonErrors;
/**
 * Use this operation to add tags to a resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your MemoryDB resources. For more information, see Tagging your MemoryDB resources.
 *
 * When you add tags to multi region clusters, you might not immediately see the latest effective tags in the ListTags API response due to it being eventually consistent specifically for multi region clusters. For more information, see Tagging your MemoryDB resources.
 *
 * You can specify cost-allocation tags for your MemoryDB resources, Amazon generates a cost allocation report as a comma-separated value
 * (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories
 * (such as cost centers, application names, or owners) to organize your costs across multiple services.
 *
 * For more information, see Using Cost Allocation Tags.
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
    ACLNotFoundFault,
    ClusterNotFoundFault,
    InvalidARNFault,
    InvalidClusterStateFault,
    InvalidParameterValueException,
    MultiRegionClusterNotFoundFault,
    MultiRegionParameterGroupNotFoundFault,
    ParameterGroupNotFoundFault,
    ServiceLinkedRoleNotFoundFault,
    SnapshotNotFoundFault,
    SubnetGroupNotFoundFault,
    TagQuotaPerResourceExceeded,
    UserNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | ACLNotFoundFault
  | ClusterNotFoundFault
  | InvalidARNFault
  | InvalidClusterStateFault
  | InvalidParameterValueException
  | MultiRegionClusterNotFoundFault
  | MultiRegionParameterGroupNotFoundFault
  | ParameterGroupNotFoundFault
  | ServiceLinkedRoleNotFoundFault
  | SnapshotNotFoundFault
  | SubnetGroupNotFoundFault
  | TagNotFoundFault
  | UserNotFoundFault
  | CommonErrors;
/**
 * Use this operation to remove tags on a resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your MemoryDB resources. For more information, see Tagging your MemoryDB resources.
 *
 * When you remove tags from multi region clusters, you might not immediately see the latest effective tags in the ListTags API response due to it being eventually consistent specifically for multi region clusters. For more information, see Tagging your MemoryDB resources.
 *
 * You can specify cost-allocation tags for your MemoryDB resources, Amazon generates a cost allocation report as a comma-separated value
 * (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories
 * (such as cost centers, application names, or owners) to organize your costs across multiple services.
 *
 * For more information, see Using Cost Allocation Tags.
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
    ACLNotFoundFault,
    ClusterNotFoundFault,
    InvalidARNFault,
    InvalidClusterStateFault,
    InvalidParameterValueException,
    MultiRegionClusterNotFoundFault,
    MultiRegionParameterGroupNotFoundFault,
    ParameterGroupNotFoundFault,
    ServiceLinkedRoleNotFoundFault,
    SnapshotNotFoundFault,
    SubnetGroupNotFoundFault,
    TagNotFoundFault,
    UserNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateACLError =
  | ACLNotFoundFault
  | DefaultUserRequired
  | DuplicateUserNameFault
  | InvalidACLStateFault
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | UserNotFoundFault
  | CommonErrors;
/**
 * Changes the list of users that belong to the Access Control List.
 */
export const updateACL: API.OperationMethod<
  UpdateACLRequest,
  UpdateACLResponse,
  UpdateACLError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateACLRequest,
  output: UpdateACLResponse,
  errors: [
    ACLNotFoundFault,
    DefaultUserRequired,
    DuplicateUserNameFault,
    InvalidACLStateFault,
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    UserNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateACL",
}));

export type UpdateClusterError =
  | ACLNotFoundFault
  | ClusterNotFoundFault
  | ClusterQuotaForCustomerExceededFault
  | InvalidACLStateFault
  | InvalidClusterStateFault
  | InvalidKMSKeyFault
  | InvalidNodeStateFault
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | InvalidVPCNetworkStateFault
  | NodeQuotaForClusterExceededFault
  | NodeQuotaForCustomerExceededFault
  | NoOperationFault
  | ParameterGroupNotFoundFault
  | ServiceLinkedRoleNotFoundFault
  | ShardsPerClusterQuotaExceededFault
  | CommonErrors;
/**
 * Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration settings by specifying the settings and the new values.
 */
export const updateCluster: API.OperationMethod<
  UpdateClusterRequest,
  UpdateClusterResponse,
  UpdateClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateClusterRequest,
  output: UpdateClusterResponse,
  errors: [
    ACLNotFoundFault,
    ClusterNotFoundFault,
    ClusterQuotaForCustomerExceededFault,
    InvalidACLStateFault,
    InvalidClusterStateFault,
    InvalidKMSKeyFault,
    InvalidNodeStateFault,
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    InvalidVPCNetworkStateFault,
    NodeQuotaForClusterExceededFault,
    NodeQuotaForCustomerExceededFault,
    NoOperationFault,
    ParameterGroupNotFoundFault,
    ServiceLinkedRoleNotFoundFault,
    ShardsPerClusterQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCluster",
}));

export type UpdateMultiRegionClusterError =
  | InvalidMultiRegionClusterStateFault
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | MultiRegionClusterNotFoundFault
  | MultiRegionParameterGroupNotFoundFault
  | CommonErrors;
/**
 * Updates the configuration of an existing multi-Region cluster.
 */
export const updateMultiRegionCluster: API.OperationMethod<
  UpdateMultiRegionClusterRequest,
  UpdateMultiRegionClusterResponse,
  UpdateMultiRegionClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateMultiRegionClusterRequest,
  output: UpdateMultiRegionClusterResponse,
  errors: [
    InvalidMultiRegionClusterStateFault,
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    MultiRegionClusterNotFoundFault,
    MultiRegionParameterGroupNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateMultiRegionCluster",
}));

export type UpdateParameterGroupError =
  | InvalidParameterCombinationException
  | InvalidParameterGroupStateFault
  | InvalidParameterValueException
  | ParameterGroupNotFoundFault
  | ServiceLinkedRoleNotFoundFault
  | CommonErrors;
/**
 * Updates the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
 */
export const updateParameterGroup: API.OperationMethod<
  UpdateParameterGroupRequest,
  UpdateParameterGroupResponse,
  UpdateParameterGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateParameterGroupRequest,
  output: UpdateParameterGroupResponse,
  errors: [
    InvalidParameterCombinationException,
    InvalidParameterGroupStateFault,
    InvalidParameterValueException,
    ParameterGroupNotFoundFault,
    ServiceLinkedRoleNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateParameterGroup",
}));

export type UpdateSubnetGroupError =
  | InvalidSubnet
  | ServiceLinkedRoleNotFoundFault
  | SubnetGroupNotFoundFault
  | SubnetInUse
  | SubnetNotAllowedFault
  | SubnetQuotaExceededFault
  | CommonErrors;
/**
 * Updates a subnet group. For more information, see Updating a subnet group
 */
export const updateSubnetGroup: API.OperationMethod<
  UpdateSubnetGroupRequest,
  UpdateSubnetGroupResponse,
  UpdateSubnetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSubnetGroupRequest,
  output: UpdateSubnetGroupResponse,
  errors: [
    InvalidSubnet,
    ServiceLinkedRoleNotFoundFault,
    SubnetGroupNotFoundFault,
    SubnetInUse,
    SubnetNotAllowedFault,
    SubnetQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSubnetGroup",
}));

export type UpdateUserError =
  | InvalidParameterCombinationException
  | InvalidParameterValueException
  | InvalidUserStateFault
  | UserNotFoundFault
  | CommonErrors;
/**
 * Changes user password(s) and/or access string.
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
    InvalidParameterCombinationException,
    InvalidParameterValueException,
    InvalidUserStateFault,
    UserNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateUser",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() => S.Struct({ ServiceUpdateNameToApply: S.optional(S.String) })).annotate(
        { identifier: "ServiceUpdateRequest" },
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          ClusterNames: ClusterNameList,
          ServiceUpdate: S.optional(ServiceUpdateRequest),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "BatchUpdateClusterRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ ProgressPercentage: S.optional(S.Number) })).annotate({
        identifier: "SlotMigration",
      });
    case 4:
      return S.suspend(() => S.Struct({ SlotMigration: S.optional(SlotMigration) })).annotate({
        identifier: "ReshardingStatus",
      });
    case 5:
      return S.suspend(() => S.Struct({ ACLToApply: S.optional(S.String) })).annotate({
        identifier: "ACLsUpdateStatus",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ServiceUpdateName: S.optional(S.String),
          Status: S.optional(ServiceUpdateStatus),
        }),
      ).annotate({
        identifier: "PendingModifiedServiceUpdate",
      });
    case 7:
      return S.Array(
        /*@__PURE__*/ PendingModifiedServiceUpdate.pipe(
          /*@__PURE__*/ T.XmlName("PendingModifiedServiceUpdate"),
        ).annotate({
          identifier: "PendingModifiedServiceUpdate",
        }),
      );
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Resharding: S.optional(ReshardingStatus),
          ACLs: S.optional(ACLsUpdateStatus),
          ServiceUpdates: S.optional(PendingModifiedServiceUpdateList),
        }),
      ).annotate({ identifier: "ClusterPendingUpdates" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Address: S.optional(S.String), Port: S.optional(S.Number) }),
      ).annotate({ identifier: "Endpoint" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Status: S.optional(S.String),
          AvailabilityZone: S.optional(S.String),
          CreateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Endpoint: S.optional(Endpoint),
        }),
      ).annotate({ identifier: "Node" });
    case 3:
      return S.Array(
        /*@__PURE__*/ Node.pipe(/*@__PURE__*/ T.XmlName("Node")).annotate({ identifier: "Node" }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Status: S.optional(S.String),
          Slots: S.optional(S.String),
          Nodes: S.optional(NodeList),
          NumberOfNodes: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Shard" });
    case 5:
      return S.Array(
        /*@__PURE__*/ Shard.pipe(/*@__PURE__*/ T.XmlName("Shard")).annotate({
          identifier: "Shard",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({ SecurityGroupId: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({ identifier: "SecurityGroupMembership" });
    case 7:
      return S.Array(SecurityGroupMembership);
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Status: S.optional(S.String),
          PendingUpdates: S.optional(ClusterPendingUpdates),
          MultiRegionClusterName: S.optional(S.String),
          NumberOfShards: S.optional(S.Number),
          Shards: S.optional(ShardList),
          AvailabilityMode: S.optional(AZStatus),
          ClusterEndpoint: S.optional(Endpoint),
          NodeType: S.optional(S.String),
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          EnginePatchVersion: S.optional(S.String),
          ParameterGroupName: S.optional(S.String),
          ParameterGroupStatus: S.optional(S.String),
          SecurityGroups: S.optional(SecurityGroupMembershipList),
          SubnetGroupName: S.optional(S.String),
          TLSEnabled: S.optional(S.Boolean),
          KmsKeyId: S.optional(S.String),
          ARN: S.optional(S.String),
          SnsTopicArn: S.optional(S.String),
          SnsTopicStatus: S.optional(S.String),
          SnapshotRetentionLimit: S.optional(S.Number),
          MaintenanceWindow: S.optional(S.String),
          SnapshotWindow: S.optional(S.String),
          ACLName: S.optional(S.String),
          AutoMinorVersionUpgrade: S.optional(S.Boolean),
          DataTiering: S.optional(DataTieringStatus),
          NetworkType: S.optional(NetworkType),
          IpDiscovery: S.optional(IpDiscovery),
        }),
      ).annotate({ identifier: "Cluster" });
    case 1:
      return S.Array(
        /*@__PURE__*/ Cluster.pipe(/*@__PURE__*/ T.XmlName("Cluster")).annotate({
          identifier: "Cluster",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          ClusterName: S.optional(S.String),
          ErrorType: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "UnprocessedCluster" });
    case 3:
      return S.Array(
        /*@__PURE__*/ UnprocessedCluster.pipe(
          /*@__PURE__*/ T.XmlName("UnprocessedCluster"),
        ).annotate({
          identifier: "UnprocessedCluster",
        }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          ProcessedClusters: S.optional(ClusterList),
          UnprocessedClusters: S.optional(UnprocessedClusterList),
        }).pipe(ns),
      ).annotate({
        identifier: "BatchUpdateClusterResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Key: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "Tag" });
    case 6:
      return S.Array(
        /*@__PURE__*/ Tag.pipe(/*@__PURE__*/ T.XmlName("Tag")).annotate({ identifier: "Tag" }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          SourceSnapshotName: S.String,
          TargetSnapshotName: S.String,
          TargetBucket: S.optional(S.String),
          KmsKeyId: S.optional(S.String),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CopySnapshotRequest" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Slots: S.optional(S.String), ReplicaCount: S.optional(S.Number) }),
      ).annotate({ identifier: "ShardConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Configuration: S.optional(ShardConfiguration),
          Size: S.optional(S.String),
          SnapshotCreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ShardDetail" });
    case 2:
      return S.Array(ShardDetail);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          NodeType: S.optional(S.String),
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          MaintenanceWindow: S.optional(S.String),
          TopicArn: S.optional(S.String),
          Port: S.optional(S.Number),
          ParameterGroupName: S.optional(S.String),
          SubnetGroupName: S.optional(S.String),
          VpcId: S.optional(S.String),
          SnapshotRetentionLimit: S.optional(S.Number),
          SnapshotWindow: S.optional(S.String),
          NumShards: S.optional(S.Number),
          Shards: S.optional(ShardDetails),
          MultiRegionParameterGroupName: S.optional(S.String),
          MultiRegionClusterName: S.optional(S.String),
        }),
      ).annotate({ identifier: "ClusterConfiguration" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Status: S.optional(S.String),
          Source: S.optional(S.String),
          KmsKeyId: S.optional(S.String),
          ARN: S.optional(S.String),
          ClusterConfiguration: S.optional(ClusterConfiguration),
          DataTiering: S.optional(DataTieringStatus),
        }),
      ).annotate({ identifier: "Snapshot" });
    case 5:
      return S.suspend(() => S.Struct({ Snapshot: S.optional(Snapshot) }).pipe(ns)).annotate({
        identifier: "CopySnapshotResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ACLName: S.String,
          UserNames: S.optional(UserNameListInput),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateACLRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          UserNamesToRemove: S.optional(UserNameList),
          UserNamesToAdd: S.optional(UserNameList),
        }),
      ).annotate({ identifier: "ACLPendingChanges" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Status: S.optional(S.String),
          UserNames: S.optional(UserNameList),
          MinimumEngineVersion: S.optional(S.String),
          PendingChanges: S.optional(ACLPendingChanges),
          Clusters: S.optional(ACLClusterNameList),
          ARN: S.optional(S.String),
        }),
      ).annotate({ identifier: "ACL" });
    case 1:
      return S.suspend(() => S.Struct({ ACL: S.optional(ACL) }).pipe(ns)).annotate({
        identifier: "CreateACLResponse",
      });
    case 2:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("SecurityGroupId")));
    case 3:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("SnapshotArn")));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ClusterName: S.String,
          NodeType: S.String,
          MultiRegionClusterName: S.optional(S.String),
          ParameterGroupName: S.optional(S.String),
          Description: S.optional(S.String),
          NumShards: S.optional(S.Number),
          NumReplicasPerShard: S.optional(S.Number),
          SubnetGroupName: S.optional(S.String),
          SecurityGroupIds: S.optional(SecurityGroupIdsList),
          MaintenanceWindow: S.optional(S.String),
          Port: S.optional(S.Number),
          SnsTopicArn: S.optional(S.String),
          TLSEnabled: S.optional(S.Boolean),
          KmsKeyId: S.optional(S.String),
          SnapshotArns: S.optional(SnapshotArnsList),
          SnapshotName: S.optional(S.String),
          SnapshotRetentionLimit: S.optional(S.Number),
          Tags: S.optional(TagList),
          SnapshotWindow: S.optional(S.String),
          ACLName: S.String,
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          AutoMinorVersionUpgrade: S.optional(S.Boolean),
          DataTiering: S.optional(S.Boolean),
          NetworkType: S.optional(NetworkType),
          IpDiscovery: S.optional(IpDiscovery),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateClusterRequest" });
    case 5:
      return S.suspend(() => S.Struct({ Cluster: S.optional(Cluster) }).pipe(ns)).annotate({
        identifier: "CreateClusterResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          MultiRegionClusterNameSuffix: S.String,
          Description: S.optional(S.String),
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          NodeType: S.String,
          MultiRegionParameterGroupName: S.optional(S.String),
          NumShards: S.optional(S.Number),
          TLSEnabled: S.optional(S.Boolean),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateMultiRegionClusterRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ClusterName: S.optional(S.String),
          Region: S.optional(S.String),
          Status: S.optional(S.String),
          ARN: S.optional(S.String),
        }),
      ).annotate({ identifier: "RegionalCluster" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ RegionalCluster.pipe(/*@__PURE__*/ T.XmlName("RegionalCluster")).annotate({
          identifier: "RegionalCluster",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          MultiRegionClusterName: S.optional(S.String),
          Description: S.optional(S.String),
          Status: S.optional(S.String),
          NodeType: S.optional(S.String),
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          NumberOfShards: S.optional(S.Number),
          Clusters: S.optional(RegionalClusterList),
          MultiRegionParameterGroupName: S.optional(S.String),
          TLSEnabled: S.optional(S.Boolean),
          ARN: S.optional(S.String),
        }),
      ).annotate({ identifier: "MultiRegionCluster" });
    case 2:
      return S.suspend(() =>
        S.Struct({ MultiRegionCluster: S.optional(MultiRegionCluster) }).pipe(ns),
      ).annotate({
        identifier: "CreateMultiRegionClusterResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ParameterGroupName: S.String,
          Family: S.String,
          Description: S.optional(S.String),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateParameterGroupRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Family: S.optional(S.String),
          Description: S.optional(S.String),
          ARN: S.optional(S.String),
        }),
      ).annotate({ identifier: "ParameterGroup" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ParameterGroup: S.optional(ParameterGroup) }).pipe(ns),
      ).annotate({
        identifier: "CreateParameterGroupResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ClusterName: S.String,
          SnapshotName: S.String,
          KmsKeyId: S.optional(S.String),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateSnapshotRequest" });
    case 7:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("SubnetIdentifier")));
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SubnetGroupName: S.String,
          Description: S.optional(S.String),
          SubnetIds: SubnetIdentifierList,
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateSubnetGroupRequest" });
    case 1:
      return S.suspend(() => S.Struct({ Name: S.optional(S.String) })).annotate({
        identifier: "AvailabilityZone",
      });
    case 2:
      return S.Array(NetworkType);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.optional(S.String),
          AvailabilityZone: S.optional(AvailabilityZone),
          SupportedNetworkTypes: S.optional(NetworkTypeList),
        }),
      ).annotate({ identifier: "Subnet" });
    case 4:
      return S.Array(
        /*@__PURE__*/ Subnet.pipe(/*@__PURE__*/ T.XmlName("Subnet")).annotate({
          identifier: "Subnet",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          VpcId: S.optional(S.String),
          Subnets: S.optional(SubnetList),
          ARN: S.optional(S.String),
          SupportedNetworkTypes: S.optional(NetworkTypeList),
        }),
      ).annotate({ identifier: "SubnetGroup" });
    case 6:
      return S.suspend(() => S.Struct({ SubnetGroup: S.optional(SubnetGroup) }).pipe(ns)).annotate({
        identifier: "CreateSubnetGroupResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(InputAuthenticationType),
          Passwords: S.optional(S.Array(SensitiveString)),
        }),
      ).annotate({ identifier: "AuthenticationMode" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          UserName: S.String,
          AuthenticationMode: AuthenticationMode,
          AccessString: S.String,
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateUserRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Type: S.optional(AuthenticationType), PasswordCount: S.optional(S.Number) }),
      ).annotate({ identifier: "Authentication" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Status: S.optional(S.String),
          AccessString: S.optional(S.String),
          ACLNames: S.optional(ACLNameList),
          MinimumEngineVersion: S.optional(S.String),
          Authentication: S.optional(Authentication),
          ARN: S.optional(S.String),
        }),
      ).annotate({ identifier: "User" });
    case 3:
      return S.suspend(() => S.Struct({ User: S.optional(User) }).pipe(ns)).annotate({
        identifier: "CreateUserResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ACLName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteACLRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ClusterName: S.String,
          MultiRegionClusterName: S.optional(S.String),
          FinalSnapshotName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteClusterRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ MultiRegionClusterName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteMultiRegionClusterRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ParameterGroupName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteParameterGroupRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ SnapshotName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteSnapshotRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ SubnetGroupName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteSubnetGroupRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ UserName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteUserRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ACLName: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeACLsRequest" });
    case 4:
      return S.Array(ACL);
    case 5:
      return S.suspend(() =>
        S.Struct({ ACLs: S.optional(ACLList), NextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "DescribeACLsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ClusterName: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          ShowShardDetails: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeClustersRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Clusters: S.optional(ClusterList) }).pipe(ns),
      ).annotate({ identifier: "DescribeClustersResponse" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          ParameterGroupFamily: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          DefaultOnly: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeEngineVersionsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          EnginePatchVersion: S.optional(S.String),
          ParameterGroupFamily: S.optional(S.String),
        }),
      ).annotate({ identifier: "EngineVersionInfo" });
    case 2:
      return S.Array(EngineVersionInfo);
    case 3:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          EngineVersions: S.optional(EngineVersionInfoList),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeEngineVersionsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SourceName: S.optional(S.String),
          SourceType: S.optional(SourceType),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Duration: S.optional(S.Number),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeEventsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SourceName: S.optional(S.String),
          SourceType: S.optional(SourceType),
          Message: S.optional(S.String),
          Date: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Event" });
    case 6:
      return S.Array(
        /*@__PURE__*/ Event.pipe(/*@__PURE__*/ T.XmlName("Event")).annotate({
          identifier: "Event",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Events: S.optional(EventList) }).pipe(ns),
      ).annotate({ identifier: "DescribeEventsResponse" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          MultiRegionClusterName: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          ShowClusterDetails: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeMultiRegionClustersRequest",
      });
    case 1:
      return S.Array(MultiRegionCluster);
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MultiRegionClusters: S.optional(MultiRegionClusterList),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeMultiRegionClustersResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          MultiRegionParameterGroupName: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeMultiRegionParameterGroupsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Family: S.optional(S.String),
          Description: S.optional(S.String),
          ARN: S.optional(S.String),
        }),
      ).annotate({
        identifier: "MultiRegionParameterGroup",
      });
    case 5:
      return S.Array(
        /*@__PURE__*/ MultiRegionParameterGroup.pipe(
          /*@__PURE__*/ T.XmlName("MultiRegionParameterGroup"),
        ).annotate({
          identifier: "MultiRegionParameterGroup",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MultiRegionParameterGroups: S.optional(MultiRegionParameterGroupList),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeMultiRegionParameterGroupsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MultiRegionParameterGroupName: S.String,
          Source: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeMultiRegionParametersRequest",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Value: S.optional(S.String),
          Description: S.optional(S.String),
          Source: S.optional(S.String),
          DataType: S.optional(S.String),
          AllowedValues: S.optional(S.String),
          MinimumEngineVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "MultiRegionParameter" });
    case 1:
      return S.Array(
        /*@__PURE__*/ MultiRegionParameter.pipe(
          /*@__PURE__*/ T.XmlName("MultiRegionParameter"),
        ).annotate({
          identifier: "MultiRegionParameter",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MultiRegionParameters: S.optional(MultiRegionParametersList),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeMultiRegionParametersResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ParameterGroupName: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeParameterGroupsRequest",
      });
    case 4:
      return S.Array(
        /*@__PURE__*/ ParameterGroup.pipe(/*@__PURE__*/ T.XmlName("ParameterGroup")).annotate({
          identifier: "ParameterGroup",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          ParameterGroups: S.optional(ParameterGroupList),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeParameterGroupsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ParameterGroupName: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeParametersRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Value: S.optional(S.String),
          Description: S.optional(S.String),
          DataType: S.optional(S.String),
          AllowedValues: S.optional(S.String),
          MinimumEngineVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "Parameter" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ Parameter.pipe(/*@__PURE__*/ T.XmlName("Parameter")).annotate({
          identifier: "Parameter",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Parameters: S.optional(ParametersList) }).pipe(
          ns,
        ),
      ).annotate({
        identifier: "DescribeParametersResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ReservationId: S.optional(S.String),
          ReservedNodesOfferingId: S.optional(S.String),
          NodeType: S.optional(S.String),
          Duration: S.optional(S.String),
          OfferingType: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeReservedNodesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RecurringChargeAmount: S.optional(S.Number),
          RecurringChargeFrequency: S.optional(S.String),
        }),
      ).annotate({ identifier: "RecurringCharge" });
    case 4:
      return S.Array(
        /*@__PURE__*/ RecurringCharge.pipe(/*@__PURE__*/ T.XmlName("RecurringCharge")).annotate({
          identifier: "RecurringCharge",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          ReservationId: S.optional(S.String),
          ReservedNodesOfferingId: S.optional(S.String),
          NodeType: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Duration: S.optional(S.Number),
          FixedPrice: S.optional(S.Number),
          NodeCount: S.optional(S.Number),
          OfferingType: S.optional(S.String),
          State: S.optional(S.String),
          RecurringCharges: S.optional(RecurringChargeList),
          ARN: S.optional(S.String),
        }),
      ).annotate({ identifier: "ReservedNode" });
    case 6:
      return S.Array(
        /*@__PURE__*/ ReservedNode.pipe(/*@__PURE__*/ T.XmlName("ReservedNode")).annotate({
          identifier: "ReservedNode",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          ReservedNodes: S.optional(ReservedNodeList),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeReservedNodesResponse",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ReservedNodesOfferingId: S.optional(S.String),
          NodeType: S.optional(S.String),
          Duration: S.optional(S.String),
          OfferingType: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeReservedNodesOfferingsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ReservedNodesOfferingId: S.optional(S.String),
          NodeType: S.optional(S.String),
          Duration: S.optional(S.Number),
          FixedPrice: S.optional(S.Number),
          OfferingType: S.optional(S.String),
          RecurringCharges: S.optional(RecurringChargeList),
        }),
      ).annotate({ identifier: "ReservedNodesOffering" });
    case 2:
      return S.Array(
        /*@__PURE__*/ ReservedNodesOffering.pipe(
          /*@__PURE__*/ T.XmlName("ReservedNodesOffering"),
        ).annotate({
          identifier: "ReservedNodesOffering",
        }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          ReservedNodesOfferings: S.optional(ReservedNodesOfferingList),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeReservedNodesOfferingsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ServiceUpdateName: S.optional(S.String),
          ClusterNames: S.optional(ClusterNameList),
          Status: S.optional(ServiceUpdateStatusList),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeServiceUpdatesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ClusterName: S.optional(S.String),
          ServiceUpdateName: S.optional(S.String),
          ReleaseDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Description: S.optional(S.String),
          Status: S.optional(ServiceUpdateStatus),
          Type: S.optional(ServiceUpdateType),
          Engine: S.optional(S.String),
          NodesUpdated: S.optional(S.String),
          AutoUpdateStartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ServiceUpdate" });
    case 6:
      return S.Array(
        /*@__PURE__*/ ServiceUpdate.pipe(/*@__PURE__*/ T.XmlName("ServiceUpdate")).annotate({
          identifier: "ServiceUpdate",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          ServiceUpdates: S.optional(ServiceUpdateList),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeServiceUpdatesResponse",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ClusterName: S.optional(S.String),
          SnapshotName: S.optional(S.String),
          Source: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          ShowDetail: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeSnapshotsRequest" });
    case 1:
      return S.Array(Snapshot);
    case 2:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Snapshots: S.optional(SnapshotList) }).pipe(ns),
      ).annotate({
        identifier: "DescribeSnapshotsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          SubnetGroupName: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeSubnetGroupsRequest",
      });
    case 4:
      return S.Array(SubnetGroup);
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          SubnetGroups: S.optional(SubnetGroupList),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeSubnetGroupsResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ Name: S.String, Values: FilterValueList })).annotate({
        identifier: "Filter",
      });
    case 7:
      return S.Array(Filter);
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          UserName: S.optional(S.String),
          Filters: S.optional(FilterList),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeUsersRequest" });
    case 1:
      return S.Array(User);
    case 2:
      return S.suspend(() =>
        S.Struct({ Users: S.optional(UserList), NextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "DescribeUsersResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ClusterName: S.String, ShardName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "FailoverShardRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ MultiRegionClusterName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListAllowedMultiRegionClusterUpdatesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ScaleUpNodeTypes: S.optional(NodeTypeList),
          ScaleDownNodeTypes: S.optional(NodeTypeList),
        }).pipe(ns),
      ).annotate({
        identifier: "ListAllowedMultiRegionClusterUpdatesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ClusterName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListAllowedNodeTypeUpdatesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListTagsRequest" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ TagList: S.optional(TagList) }).pipe(ns)).annotate({
        identifier: "ListTagsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ReservedNodesOfferingId: S.String,
          ReservationId: S.optional(S.String),
          NodeCount: S.optional(S.Number),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PurchaseReservedNodesOfferingRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ReservedNode: S.optional(ReservedNode) }).pipe(ns),
      ).annotate({
        identifier: "PurchaseReservedNodesOfferingResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ParameterGroupName: S.String,
          AllParameters: S.optional(S.Boolean),
          ParameterNames: S.optional(ParameterNameList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ResetParameterGroupRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Tags: TagList }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, TagKeys: KeyList }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ACLName: S.String,
          UserNamesToAdd: S.optional(UserNameListInput),
          UserNamesToRemove: S.optional(UserNameListInput),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateACLRequest" });
    case 7:
      return S.suspend(() => S.Struct({ ReplicaCount: S.optional(S.Number) })).annotate({
        identifier: "ReplicaConfigurationRequest",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ ShardCount: S.optional(S.Number) })).annotate({
        identifier: "ShardConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ClusterName: S.String,
          Description: S.optional(S.String),
          SecurityGroupIds: S.optional(SecurityGroupIdsList),
          MaintenanceWindow: S.optional(S.String),
          SnsTopicArn: S.optional(S.String),
          SnsTopicStatus: S.optional(S.String),
          ParameterGroupName: S.optional(S.String),
          SnapshotWindow: S.optional(S.String),
          SnapshotRetentionLimit: S.optional(S.Number),
          NodeType: S.optional(S.String),
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          ReplicaConfiguration: S.optional(ReplicaConfigurationRequest),
          ShardConfiguration: S.optional(ShardConfigurationRequest),
          ACLName: S.optional(S.String),
          IpDiscovery: S.optional(IpDiscovery),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateClusterRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MultiRegionClusterName: S.String,
          NodeType: S.optional(S.String),
          Description: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          ShardConfiguration: S.optional(ShardConfigurationRequest),
          MultiRegionParameterGroupName: S.optional(S.String),
          UpdateStrategy: S.optional(UpdateStrategy),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateMultiRegionClusterRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ParameterName: S.optional(S.String), ParameterValue: S.optional(S.String) }),
      ).annotate({ identifier: "ParameterNameValue" });
    case 4:
      return S.Array(
        /*@__PURE__*/ ParameterNameValue.pipe(
          /*@__PURE__*/ T.XmlName("ParameterNameValue"),
        ).annotate({
          identifier: "ParameterNameValue",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          ParameterGroupName: S.String,
          ParameterNameValues: ParameterNameValueList,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateParameterGroupRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SubnetGroupName: S.String,
          Description: S.optional(S.String),
          SubnetIds: S.optional(SubnetIdentifierList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateSubnetGroupRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          UserName: S.String,
          AuthenticationMode: S.optional(AuthenticationMode),
          AccessString: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateUserRequest" });
  }
}
