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
const ns = /*@__PURE__*/ T.XmlNamespace("http://redshift.amazonaws.com/doc/2012-12-01/");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Redshift",
  serviceShapeName: "RedshiftServiceVersion20121201",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "redshift" });
const ver = /*@__PURE__*/ T.ServiceVersion("2012-12-01");
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
              `https://redshift-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            if (_.getAttr(PartitionResult, "name") === "aws-us-gov") {
              return e(`https://redshift.${Region}.amazonaws.com`);
            }
            return e(`https://redshift-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://redshift.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://redshift.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessToClusterDeniedFault
  extends /*@__PURE__*/ S.TaggedError<AccessToClusterDeniedFault>()(
    "AccessToClusterDeniedFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "AccessToClusterDenied", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class AccessToSnapshotDeniedFault
  extends /*@__PURE__*/ S.TaggedError<AccessToSnapshotDeniedFault>()(
    "AccessToSnapshotDeniedFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "AccessToSnapshotDenied", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class AuthenticationProfileAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<AuthenticationProfileAlreadyExistsFault>()(
    "AuthenticationProfileAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "AuthenticationProfileAlreadyExistsFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class AuthenticationProfileNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<AuthenticationProfileNotFoundFault>()(
    "AuthenticationProfileNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "AuthenticationProfileNotFoundFault",
        httpResponseCode: 404,
      }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class AuthenticationProfileQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<AuthenticationProfileQuotaExceededFault>()(
    "AuthenticationProfileQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "AuthenticationProfileQuotaExceededFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class AuthorizationAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<AuthorizationAlreadyExistsFault>()(
    "AuthorizationAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "AuthorizationAlreadyExists", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class AuthorizationNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<AuthorizationNotFoundFault>()(
    "AuthorizationNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "AuthorizationNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class AuthorizationQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<AuthorizationQuotaExceededFault>()(
    "AuthorizationQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "AuthorizationQuotaExceeded", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class BatchDeleteRequestSizeExceededFault
  extends /*@__PURE__*/ S.TaggedError<BatchDeleteRequestSizeExceededFault>()(
    "BatchDeleteRequestSizeExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "BatchDeleteRequestSizeExceeded",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class BatchModifyClusterSnapshotsLimitExceededFault
  extends /*@__PURE__*/ S.TaggedError<BatchModifyClusterSnapshotsLimitExceededFault>()(
    "BatchModifyClusterSnapshotsLimitExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "BatchModifyClusterSnapshotsLimitExceededFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class BucketNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<BucketNotFoundFault>()(
    "BucketNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "BucketNotFoundFault", httpResponseCode: 400 }),
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
export class ClusterOnLatestRevisionFault
  extends /*@__PURE__*/ S.TaggedError<ClusterOnLatestRevisionFault>()(
    "ClusterOnLatestRevisionFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ClusterOnLatestRevision", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ClusterParameterGroupAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<ClusterParameterGroupAlreadyExistsFault>()(
    "ClusterParameterGroupAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ClusterParameterGroupAlreadyExists",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class ClusterParameterGroupNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<ClusterParameterGroupNotFoundFault>()(
    "ClusterParameterGroupNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ClusterParameterGroupNotFound",
        httpResponseCode: 404,
      }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class ClusterParameterGroupQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<ClusterParameterGroupQuotaExceededFault>()(
    "ClusterParameterGroupQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ClusterParameterGroupQuotaExceeded",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ClusterQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<ClusterQuotaExceededFault>()(
    "ClusterQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ClusterQuotaExceeded", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ClusterSecurityGroupAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<ClusterSecurityGroupAlreadyExistsFault>()(
    "ClusterSecurityGroupAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ClusterSecurityGroupAlreadyExists",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class ClusterSecurityGroupNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<ClusterSecurityGroupNotFoundFault>()(
    "ClusterSecurityGroupNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ClusterSecurityGroupNotFound",
        httpResponseCode: 404,
      }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class ClusterSecurityGroupQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<ClusterSecurityGroupQuotaExceededFault>()(
    "ClusterSecurityGroupQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "QuotaExceeded.ClusterSecurityGroup",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ClusterSnapshotAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<ClusterSnapshotAlreadyExistsFault>()(
    "ClusterSnapshotAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ClusterSnapshotAlreadyExists",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class ClusterSnapshotNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<ClusterSnapshotNotFoundFault>()(
    "ClusterSnapshotNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ClusterSnapshotNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class ClusterSnapshotQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<ClusterSnapshotQuotaExceededFault>()(
    "ClusterSnapshotQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ClusterSnapshotQuotaExceeded",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ClusterSubnetGroupAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<ClusterSubnetGroupAlreadyExistsFault>()(
    "ClusterSubnetGroupAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ClusterSubnetGroupAlreadyExists",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class ClusterSubnetGroupNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<ClusterSubnetGroupNotFoundFault>()(
    "ClusterSubnetGroupNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ClusterSubnetGroupNotFoundFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ClusterSubnetGroupQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<ClusterSubnetGroupQuotaExceededFault>()(
    "ClusterSubnetGroupQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ClusterSubnetGroupQuotaExceeded",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ClusterSubnetQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<ClusterSubnetQuotaExceededFault>()(
    "ClusterSubnetQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ClusterSubnetQuotaExceededFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ConflictPolicyUpdateFault
  extends /*@__PURE__*/ S.TaggedError<ConflictPolicyUpdateFault>()(
    "ConflictPolicyUpdateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ConflictPolicyUpdateFault", httpResponseCode: 409 }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError) {}
export class CopyToRegionDisabledFault
  extends /*@__PURE__*/ S.TaggedError<CopyToRegionDisabledFault>()(
    "CopyToRegionDisabledFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "CopyToRegionDisabledFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class CustomCnameAssociationFault
  extends /*@__PURE__*/ S.TaggedError<CustomCnameAssociationFault>()(
    "CustomCnameAssociationFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "CustomCnameAssociationFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class CustomDomainAssociationNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<CustomDomainAssociationNotFoundFault>()(
    "CustomDomainAssociationNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "CustomDomainAssociationNotFoundFault",
        httpResponseCode: 404,
      }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class DependentServiceAccessDeniedFault
  extends /*@__PURE__*/ S.TaggedError<DependentServiceAccessDeniedFault>()(
    "DependentServiceAccessDeniedFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "DependentServiceAccessDenied",
        httpResponseCode: 403,
      }),
      /*@__PURE__*/ T.HttpError(403),
    ),
  ).pipe(C.withAuthError) {}
export class DependentServiceRequestThrottlingFault
  extends /*@__PURE__*/ S.TaggedError<DependentServiceRequestThrottlingFault>()(
    "DependentServiceRequestThrottlingFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "DependentServiceRequestThrottlingFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class DependentServiceUnavailableFault
  extends /*@__PURE__*/ S.TaggedError<DependentServiceUnavailableFault>()(
    "DependentServiceUnavailableFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "DependentServiceUnavailableFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withServerError) {}
export class EndpointAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<EndpointAlreadyExistsFault>()(
    "EndpointAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "EndpointAlreadyExists", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class EndpointAuthorizationAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<EndpointAuthorizationAlreadyExistsFault>()(
    "EndpointAuthorizationAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "EndpointAuthorizationAlreadyExists",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class EndpointAuthorizationNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<EndpointAuthorizationNotFoundFault>()(
    "EndpointAuthorizationNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "EndpointAuthorizationNotFound",
        httpResponseCode: 404,
      }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class EndpointAuthorizationsPerClusterLimitExceededFault
  extends /*@__PURE__*/ S.TaggedError<EndpointAuthorizationsPerClusterLimitExceededFault>()(
    "EndpointAuthorizationsPerClusterLimitExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "EndpointAuthorizationsPerClusterLimitExceeded",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class EndpointNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<EndpointNotFoundFault>()(
    "EndpointNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "EndpointNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class EndpointsPerAuthorizationLimitExceededFault
  extends /*@__PURE__*/ S.TaggedError<EndpointsPerAuthorizationLimitExceededFault>()(
    "EndpointsPerAuthorizationLimitExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "EndpointsPerAuthorizationLimitExceeded",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class EndpointsPerClusterLimitExceededFault
  extends /*@__PURE__*/ S.TaggedError<EndpointsPerClusterLimitExceededFault>()(
    "EndpointsPerClusterLimitExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "EndpointsPerClusterLimitExceeded",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class EventSubscriptionQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<EventSubscriptionQuotaExceededFault>()(
    "EventSubscriptionQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "EventSubscriptionQuotaExceeded",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class HsmClientCertificateAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<HsmClientCertificateAlreadyExistsFault>()(
    "HsmClientCertificateAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "HsmClientCertificateAlreadyExistsFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class HsmClientCertificateNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<HsmClientCertificateNotFoundFault>()(
    "HsmClientCertificateNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "HsmClientCertificateNotFoundFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class HsmClientCertificateQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<HsmClientCertificateQuotaExceededFault>()(
    "HsmClientCertificateQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "HsmClientCertificateQuotaExceededFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class HsmConfigurationAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<HsmConfigurationAlreadyExistsFault>()(
    "HsmConfigurationAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "HsmConfigurationAlreadyExistsFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class HsmConfigurationNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<HsmConfigurationNotFoundFault>()(
    "HsmConfigurationNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "HsmConfigurationNotFoundFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class HsmConfigurationQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<HsmConfigurationQuotaExceededFault>()(
    "HsmConfigurationQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "HsmConfigurationQuotaExceededFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class IncompatibleOrderableOptions
  extends /*@__PURE__*/ S.TaggedError<IncompatibleOrderableOptions>()(
    "IncompatibleOrderableOptions",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "IncompatibleOrderableOptions",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InProgressTableRestoreQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<InProgressTableRestoreQuotaExceededFault>()(
    "InProgressTableRestoreQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InProgressTableRestoreQuotaExceededFault",
        httpResponseCode: 400,
      }),
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
export class InsufficientS3BucketPolicyFault
  extends /*@__PURE__*/ S.TaggedError<InsufficientS3BucketPolicyFault>()(
    "InsufficientS3BucketPolicyFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InsufficientS3BucketPolicyFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class IntegrationAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<IntegrationAlreadyExistsFault>()(
    "IntegrationAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "IntegrationAlreadyExistsFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class IntegrationConflictOperationFault
  extends /*@__PURE__*/ S.TaggedError<IntegrationConflictOperationFault>()(
    "IntegrationConflictOperationFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "IntegrationConflictOperationFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class IntegrationConflictStateFault
  extends /*@__PURE__*/ S.TaggedError<IntegrationConflictStateFault>()(
    "IntegrationConflictStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "IntegrationConflictStateFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class IntegrationNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<IntegrationNotFoundFault>()(
    "IntegrationNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "IntegrationNotFoundFault", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class IntegrationQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<IntegrationQuotaExceededFault>()(
    "IntegrationQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "IntegrationQuotaExceededFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class IntegrationSourceNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<IntegrationSourceNotFoundFault>()(
    "IntegrationSourceNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "IntegrationSourceNotFoundFault",
        httpResponseCode: 404,
      }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class IntegrationTargetNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<IntegrationTargetNotFoundFault>()(
    "IntegrationTargetNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "IntegrationTargetNotFoundFault",
        httpResponseCode: 404,
      }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidAuthenticationProfileRequestFault
  extends /*@__PURE__*/ S.TaggedError<InvalidAuthenticationProfileRequestFault>()(
    "InvalidAuthenticationProfileRequestFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InvalidAuthenticationProfileRequestFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidAuthorizationStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidAuthorizationStateFault>()(
    "InvalidAuthorizationStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidAuthorizationState", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidClusterParameterGroupStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidClusterParameterGroupStateFault>()(
    "InvalidClusterParameterGroupStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InvalidClusterParameterGroupState",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidClusterSecurityGroupStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidClusterSecurityGroupStateFault>()(
    "InvalidClusterSecurityGroupStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InvalidClusterSecurityGroupState",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidClusterSnapshotScheduleStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidClusterSnapshotScheduleStateFault>()(
    "InvalidClusterSnapshotScheduleStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InvalidClusterSnapshotScheduleState",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidClusterSnapshotStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidClusterSnapshotStateFault>()(
    "InvalidClusterSnapshotStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidClusterSnapshotState", httpResponseCode: 400 }),
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
export class InvalidClusterSubnetGroupStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidClusterSubnetGroupStateFault>()(
    "InvalidClusterSubnetGroupStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InvalidClusterSubnetGroupStateFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidClusterSubnetStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidClusterSubnetStateFault>()(
    "InvalidClusterSubnetStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InvalidClusterSubnetStateFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidClusterTrackFault
  extends /*@__PURE__*/ S.TaggedError<InvalidClusterTrackFault>()(
    "InvalidClusterTrackFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidClusterTrack", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidDataShareFault
  extends /*@__PURE__*/ S.TaggedError<InvalidDataShareFault>()(
    "InvalidDataShareFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidDataShareFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidElasticIpFault
  extends /*@__PURE__*/ S.TaggedError<InvalidElasticIpFault>()(
    "InvalidElasticIpFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidElasticIpFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidEndpointStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidEndpointStateFault>()(
    "InvalidEndpointStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidEndpointState", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidHsmClientCertificateStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidHsmClientCertificateStateFault>()(
    "InvalidHsmClientCertificateStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InvalidHsmClientCertificateStateFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidHsmConfigurationStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidHsmConfigurationStateFault>()(
    "InvalidHsmConfigurationStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InvalidHsmConfigurationStateFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidNamespaceFault
  extends /*@__PURE__*/ S.TaggedError<InvalidNamespaceFault>()(
    "InvalidNamespaceFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidNamespaceFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidPolicyFault
  extends /*@__PURE__*/ S.TaggedError<InvalidPolicyFault>()(
    "InvalidPolicyFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidPolicyFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidReservedNodeStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidReservedNodeStateFault>()(
    "InvalidReservedNodeStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidReservedNodeState", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidRestoreFault
  extends /*@__PURE__*/ S.TaggedError<InvalidRestoreFault>()(
    "InvalidRestoreFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidRestore", httpResponseCode: 406 }),
      /*@__PURE__*/ T.HttpError(406),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidRetentionPeriodFault
  extends /*@__PURE__*/ S.TaggedError<InvalidRetentionPeriodFault>()(
    "InvalidRetentionPeriodFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidRetentionPeriodFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidS3BucketNameFault
  extends /*@__PURE__*/ S.TaggedError<InvalidS3BucketNameFault>()(
    "InvalidS3BucketNameFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidS3BucketNameFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidS3KeyPrefixFault
  extends /*@__PURE__*/ S.TaggedError<InvalidS3KeyPrefixFault>()(
    "InvalidS3KeyPrefixFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidS3KeyPrefixFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidScheduledActionFault
  extends /*@__PURE__*/ S.TaggedError<InvalidScheduledActionFault>()(
    "InvalidScheduledActionFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidScheduledAction", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidScheduleFault
  extends /*@__PURE__*/ S.TaggedError<InvalidScheduleFault>()(
    "InvalidScheduleFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidSchedule", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidSnapshotCopyGrantStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidSnapshotCopyGrantStateFault>()(
    "InvalidSnapshotCopyGrantStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InvalidSnapshotCopyGrantStateFault",
        httpResponseCode: 400,
      }),
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
export class InvalidSubscriptionStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidSubscriptionStateFault>()(
    "InvalidSubscriptionStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InvalidSubscriptionStateFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidTableRestoreArgumentFault
  extends /*@__PURE__*/ S.TaggedError<InvalidTableRestoreArgumentFault>()(
    "InvalidTableRestoreArgumentFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidTableRestoreArgument", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidTagFault
  extends /*@__PURE__*/ S.TaggedError<InvalidTagFault>()(
    "InvalidTagFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidTagFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidUsageLimitFault
  extends /*@__PURE__*/ S.TaggedError<InvalidUsageLimitFault>()(
    "InvalidUsageLimitFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidUsageLimit", httpResponseCode: 400 }),
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
export class Ipv6CidrBlockNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<Ipv6CidrBlockNotFoundFault>()(
    "Ipv6CidrBlockNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "Ipv6CidrBlockNotFoundFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class LimitExceededFault
  extends /*@__PURE__*/ S.TaggedError<LimitExceededFault>()(
    "LimitExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "LimitExceededFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class NumberOfNodesPerClusterLimitExceededFault
  extends /*@__PURE__*/ S.TaggedError<NumberOfNodesPerClusterLimitExceededFault>()(
    "NumberOfNodesPerClusterLimitExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "NumberOfNodesPerClusterLimitExceeded",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class NumberOfNodesQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<NumberOfNodesQuotaExceededFault>()(
    "NumberOfNodesQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "NumberOfNodesQuotaExceeded", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class PartnerNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<PartnerNotFoundFault>()(
    "PartnerNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "PartnerNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class Qev2IdcApplicationAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<Qev2IdcApplicationAlreadyExistsFault>()(
    "Qev2IdcApplicationAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "Qev2IdcApplicationAlreadyExists",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class Qev2IdcApplicationNotExistsFault
  extends /*@__PURE__*/ S.TaggedError<Qev2IdcApplicationNotExistsFault>()(
    "Qev2IdcApplicationNotExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "Qev2IdcApplicationNotExists", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class RedshiftIdcApplicationAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<RedshiftIdcApplicationAlreadyExistsFault>()(
    "RedshiftIdcApplicationAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "RedshiftIdcApplicationAlreadyExists",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class RedshiftIdcApplicationNotExistsFault
  extends /*@__PURE__*/ S.TaggedError<RedshiftIdcApplicationNotExistsFault>()(
    "RedshiftIdcApplicationNotExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "RedshiftIdcApplicationNotExists",
        httpResponseCode: 404,
      }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class RedshiftIdcApplicationQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<RedshiftIdcApplicationQuotaExceededFault>()(
    "RedshiftIdcApplicationQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "RedshiftIdcApplicationQuotaExceeded",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class RedshiftInvalidParameterFault
  extends /*@__PURE__*/ S.TaggedError<RedshiftInvalidParameterFault>()(
    "RedshiftInvalidParameterFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "RedshiftInvalidParameter", httpResponseCode: 400 }),
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
export class ReservedNodeAlreadyMigratedFault
  extends /*@__PURE__*/ S.TaggedError<ReservedNodeAlreadyMigratedFault>()(
    "ReservedNodeAlreadyMigratedFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ReservedNodeAlreadyMigrated", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ReservedNodeExchangeNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<ReservedNodeExchangeNotFoundFault>()(
    "ReservedNodeExchangeNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ReservedNodeExchangeNotFond", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class ReservedNodeNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<ReservedNodeNotFoundFault>()(
    "ReservedNodeNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ReservedNodeNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class ReservedNodeOfferingNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<ReservedNodeOfferingNotFoundFault>()(
    "ReservedNodeOfferingNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ReservedNodeOfferingNotFound",
        httpResponseCode: 404,
      }),
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
export class ResizeNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<ResizeNotFoundFault>()(
    "ResizeNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ResizeNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundFault>()(
    "ResourceNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ResourceNotFoundFault", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class ScheduledActionAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<ScheduledActionAlreadyExistsFault>()(
    "ScheduledActionAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ScheduledActionAlreadyExists",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class ScheduledActionNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<ScheduledActionNotFoundFault>()(
    "ScheduledActionNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ScheduledActionNotFound", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ScheduledActionQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<ScheduledActionQuotaExceededFault>()(
    "ScheduledActionQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ScheduledActionQuotaExceeded",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ScheduledActionTypeUnsupportedFault
  extends /*@__PURE__*/ S.TaggedError<ScheduledActionTypeUnsupportedFault>()(
    "ScheduledActionTypeUnsupportedFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ScheduledActionTypeUnsupported",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ScheduleDefinitionTypeUnsupportedFault
  extends /*@__PURE__*/ S.TaggedError<ScheduleDefinitionTypeUnsupportedFault>()(
    "ScheduleDefinitionTypeUnsupportedFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ScheduleDefinitionTypeUnsupported",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class SnapshotCopyAlreadyDisabledFault
  extends /*@__PURE__*/ S.TaggedError<SnapshotCopyAlreadyDisabledFault>()(
    "SnapshotCopyAlreadyDisabledFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "SnapshotCopyAlreadyDisabledFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class SnapshotCopyAlreadyEnabledFault
  extends /*@__PURE__*/ S.TaggedError<SnapshotCopyAlreadyEnabledFault>()(
    "SnapshotCopyAlreadyEnabledFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "SnapshotCopyAlreadyEnabledFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class SnapshotCopyDisabledFault
  extends /*@__PURE__*/ S.TaggedError<SnapshotCopyDisabledFault>()(
    "SnapshotCopyDisabledFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SnapshotCopyDisabledFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class SnapshotCopyGrantAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<SnapshotCopyGrantAlreadyExistsFault>()(
    "SnapshotCopyGrantAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "SnapshotCopyGrantAlreadyExistsFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class SnapshotCopyGrantNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<SnapshotCopyGrantNotFoundFault>()(
    "SnapshotCopyGrantNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "SnapshotCopyGrantNotFoundFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class SnapshotCopyGrantQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<SnapshotCopyGrantQuotaExceededFault>()(
    "SnapshotCopyGrantQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "SnapshotCopyGrantQuotaExceededFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class SnapshotScheduleAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<SnapshotScheduleAlreadyExistsFault>()(
    "SnapshotScheduleAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "SnapshotScheduleAlreadyExists",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class SnapshotScheduleNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<SnapshotScheduleNotFoundFault>()(
    "SnapshotScheduleNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SnapshotScheduleNotFound", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class SnapshotScheduleQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<SnapshotScheduleQuotaExceededFault>()(
    "SnapshotScheduleQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "SnapshotScheduleQuotaExceeded",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class SnapshotScheduleUpdateInProgressFault
  extends /*@__PURE__*/ S.TaggedError<SnapshotScheduleUpdateInProgressFault>()(
    "SnapshotScheduleUpdateInProgressFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "SnapshotScheduleUpdateInProgress",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class SNSInvalidTopicFault
  extends /*@__PURE__*/ S.TaggedError<SNSInvalidTopicFault>()(
    "SNSInvalidTopicFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SNSInvalidTopic", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class SNSNoAuthorizationFault
  extends /*@__PURE__*/ S.TaggedError<SNSNoAuthorizationFault>()(
    "SNSNoAuthorizationFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SNSNoAuthorization", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class SNSTopicArnNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<SNSTopicArnNotFoundFault>()(
    "SNSTopicArnNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SNSTopicArnNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class SourceNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<SourceNotFoundFault>()(
    "SourceNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SourceNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class SubnetAlreadyInUse
  extends /*@__PURE__*/ S.TaggedError<SubnetAlreadyInUse>()(
    "SubnetAlreadyInUse",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SubnetAlreadyInUse", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withDependencyViolationError) {}
export class SubscriptionAlreadyExistFault
  extends /*@__PURE__*/ S.TaggedError<SubscriptionAlreadyExistFault>()(
    "SubscriptionAlreadyExistFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SubscriptionAlreadyExist", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class SubscriptionCategoryNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<SubscriptionCategoryNotFoundFault>()(
    "SubscriptionCategoryNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "SubscriptionCategoryNotFound",
        httpResponseCode: 404,
      }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class SubscriptionEventIdNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<SubscriptionEventIdNotFoundFault>()(
    "SubscriptionEventIdNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SubscriptionEventIdNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class SubscriptionNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<SubscriptionNotFoundFault>()(
    "SubscriptionNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SubscriptionNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class SubscriptionSeverityNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<SubscriptionSeverityNotFoundFault>()(
    "SubscriptionSeverityNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "SubscriptionSeverityNotFound",
        httpResponseCode: 404,
      }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class TableLimitExceededFault
  extends /*@__PURE__*/ S.TaggedError<TableLimitExceededFault>()(
    "TableLimitExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TableLimitExceeded", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TableRestoreNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<TableRestoreNotFoundFault>()(
    "TableRestoreNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TableRestoreNotFoundFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TagLimitExceededFault
  extends /*@__PURE__*/ S.TaggedError<TagLimitExceededFault>()(
    "TagLimitExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TagLimitExceededFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class UnauthorizedOperation
  extends /*@__PURE__*/ S.TaggedError<UnauthorizedOperation>()(
    "UnauthorizedOperation",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "UnauthorizedOperation", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAuthError) {}
export class UnauthorizedPartnerIntegrationFault
  extends /*@__PURE__*/ S.TaggedError<UnauthorizedPartnerIntegrationFault>()(
    "UnauthorizedPartnerIntegrationFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "UnauthorizedPartnerIntegration",
        httpResponseCode: 401,
      }),
      /*@__PURE__*/ T.HttpError(401),
    ),
  ).pipe(C.withAuthError) {}
export class UnknownSnapshotCopyRegionFault
  extends /*@__PURE__*/ S.TaggedError<UnknownSnapshotCopyRegionFault>()(
    "UnknownSnapshotCopyRegionFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "UnknownSnapshotCopyRegionFault",
        httpResponseCode: 404,
      }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class UnsupportedOperationFault
  extends /*@__PURE__*/ S.TaggedError<UnsupportedOperationFault>()(
    "UnsupportedOperationFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "UnsupportedOperation", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class UnsupportedOptionFault
  extends /*@__PURE__*/ S.TaggedError<UnsupportedOptionFault>()(
    "UnsupportedOptionFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "UnsupportedOptionFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class UsageLimitAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<UsageLimitAlreadyExistsFault>()(
    "UsageLimitAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "UsageLimitAlreadyExists", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class UsageLimitNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<UsageLimitNotFoundFault>()(
    "UsageLimitNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "UsageLimitNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export interface AcceptReservedNodeExchangeInputMessage {
  ReservedNodeId?: string;
  TargetReservedNodeOfferingId?: string;
}
const AcceptReservedNodeExchangeInputMessage = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<AcceptReservedNodeExchangeInputMessage>;
export interface RecurringCharge {
  RecurringChargeAmount?: number;
  RecurringChargeFrequency?: string;
}
const RecurringCharge = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<RecurringCharge>;
export type RecurringChargeList = RecurringCharge[];
const RecurringChargeList = /*@__PURE__*/ __L.at(__c0, 2);
export type ReservedNodeOfferingType = "Regular" | "Upgradable" | (string & {});
const ReservedNodeOfferingType = S.String;

export interface ReservedNode {
  ReservedNodeId?: string;
  ReservedNodeOfferingId?: string;
  NodeType?: string;
  StartTime?: Date;
  Duration?: number;
  FixedPrice?: number;
  UsagePrice?: number;
  CurrencyCode?: string;
  NodeCount?: number;
  State?: string;
  OfferingType?: string;
  RecurringCharges?: RecurringCharge[];
  ReservedNodeOfferingType?: ReservedNodeOfferingType;
}
const ReservedNode = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<ReservedNode>;
export interface AcceptReservedNodeExchangeOutputMessage {
  ExchangedReservedNode?: ReservedNode;
}
const AcceptReservedNodeExchangeOutputMessage = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<AcceptReservedNodeExchangeOutputMessage>;
export type PartnerIntegrationAccountId = string;
export type PartnerIntegrationClusterIdentifier = string;
export type PartnerIntegrationDatabaseName = string;
export type PartnerIntegrationPartnerName = string;
export interface PartnerIntegrationInputMessage {
  AccountId?: string;
  ClusterIdentifier?: string;
  DatabaseName?: string;
  PartnerName?: string;
}
const PartnerIntegrationInputMessage = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<PartnerIntegrationInputMessage>;
export interface PartnerIntegrationOutputMessage {
  DatabaseName?: string;
  PartnerName?: string;
}
const PartnerIntegrationOutputMessage = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<PartnerIntegrationOutputMessage>;
export interface AssociateDataShareConsumerMessage {
  DataShareArn?: string;
  AssociateEntireAccount?: boolean;
  ConsumerArn?: string;
  ConsumerRegion?: string;
  AllowWrites?: boolean;
}
const AssociateDataShareConsumerMessage = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<AssociateDataShareConsumerMessage>;
export type DataShareStatus =
  | "ACTIVE"
  | "PENDING_AUTHORIZATION"
  | "AUTHORIZED"
  | "DEAUTHORIZED"
  | "REJECTED"
  | "AVAILABLE"
  | (string & {});
const DataShareStatus = S.String;

export interface DataShareAssociation {
  ConsumerIdentifier?: string;
  Status?: DataShareStatus;
  ConsumerRegion?: string;
  CreatedDate?: Date;
  StatusChangeDate?: Date;
  ProducerAllowedWrites?: boolean;
  ConsumerAcceptedWrites?: boolean;
}
const DataShareAssociation = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<DataShareAssociation>;
export type DataShareAssociationList = DataShareAssociation[];
const DataShareAssociationList = /*@__PURE__*/ __L.at(__c1, 1);
export type DataShareType = "INTERNAL" | (string & {});
const DataShareType = S.String;

export interface DataShare {
  DataShareArn?: string;
  ProducerArn?: string;
  AllowPubliclyAccessibleConsumers?: boolean;
  DataShareAssociations?: DataShareAssociation[];
  ManagedBy?: string;
  DataShareType?: DataShareType;
}
const DataShare = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<DataShare>;
export interface AuthorizeClusterSecurityGroupIngressMessage {
  ClusterSecurityGroupName?: string;
  CIDRIP?: string;
  EC2SecurityGroupName?: string;
  EC2SecurityGroupOwnerId?: string;
}
const AuthorizeClusterSecurityGroupIngressMessage = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<AuthorizeClusterSecurityGroupIngressMessage>;
export interface Tag {
  Key?: string;
  Value?: string;
}
const Tag = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c1, 5);
export interface EC2SecurityGroup {
  Status?: string;
  EC2SecurityGroupName?: string;
  EC2SecurityGroupOwnerId?: string;
  Tags?: Tag[];
}
const EC2SecurityGroup = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<EC2SecurityGroup>;
export type EC2SecurityGroupList = EC2SecurityGroup[];
const EC2SecurityGroupList = /*@__PURE__*/ __L.at(__c1, 7);
export interface IPRange {
  Status?: string;
  CIDRIP?: string;
  Tags?: Tag[];
}
const IPRange = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<IPRange>;
export type IPRangeList = IPRange[];
const IPRangeList = /*@__PURE__*/ __L.at(__c2, 1);
export interface ClusterSecurityGroup {
  ClusterSecurityGroupName?: string;
  Description?: string;
  EC2SecurityGroups?: EC2SecurityGroup[];
  IPRanges?: IPRange[];
  Tags?: Tag[];
}
const ClusterSecurityGroup = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<ClusterSecurityGroup>;
export interface AuthorizeClusterSecurityGroupIngressResult {
  ClusterSecurityGroup?: ClusterSecurityGroup;
}
const AuthorizeClusterSecurityGroupIngressResult = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<AuthorizeClusterSecurityGroupIngressResult>;
export interface AuthorizeDataShareMessage {
  DataShareArn?: string;
  ConsumerIdentifier?: string;
  AllowWrites?: boolean;
}
const AuthorizeDataShareMessage = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<AuthorizeDataShareMessage>;
export type VpcIdentifierList = string[];
const VpcIdentifierList = /*@__PURE__*/ __L.at(__c2, 5);
export interface AuthorizeEndpointAccessMessage {
  ClusterIdentifier?: string;
  Account?: string;
  VpcIds?: string[];
}
const AuthorizeEndpointAccessMessage = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<AuthorizeEndpointAccessMessage>;
export type AuthorizationStatus = "Authorized" | "Revoking" | (string & {});
const AuthorizationStatus = S.String;

export interface EndpointAuthorization {
  Grantor?: string;
  Grantee?: string;
  ClusterIdentifier?: string;
  AuthorizeTime?: Date;
  ClusterStatus?: string;
  Status?: AuthorizationStatus;
  AllowedAllVPCs?: boolean;
  AllowedVPCs?: string[];
  EndpointCount?: number;
}
const EndpointAuthorization = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<EndpointAuthorization>;
export interface AuthorizeSnapshotAccessMessage {
  SnapshotIdentifier?: string;
  SnapshotArn?: string;
  SnapshotClusterIdentifier?: string;
  AccountWithRestoreAccess?: string;
}
const AuthorizeSnapshotAccessMessage = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<AuthorizeSnapshotAccessMessage>;
export interface AccountWithRestoreAccess {
  AccountId?: string;
  AccountAlias?: string;
}
const AccountWithRestoreAccess = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<AccountWithRestoreAccess>;
export type AccountsWithRestoreAccessList = AccountWithRestoreAccess[];
const AccountsWithRestoreAccessList = /*@__PURE__*/ __L.at(__c3, 2);
export type RestorableNodeTypeList = string[];
const RestorableNodeTypeList = /*@__PURE__*/ __L.at(__c3, 3);
export interface Snapshot {
  SnapshotIdentifier?: string;
  ClusterIdentifier?: string;
  SnapshotCreateTime?: Date;
  Status?: string;
  Port?: number;
  AvailabilityZone?: string;
  ClusterCreateTime?: Date;
  MasterUsername?: string;
  ClusterVersion?: string;
  EngineFullVersion?: string;
  SnapshotType?: string;
  NodeType?: string;
  NumberOfNodes?: number;
  DBName?: string;
  VpcId?: string;
  Encrypted?: boolean;
  KmsKeyId?: string;
  EncryptedWithHSM?: boolean;
  AccountsWithRestoreAccess?: AccountWithRestoreAccess[];
  OwnerAccount?: string;
  TotalBackupSizeInMegaBytes?: number;
  ActualIncrementalBackupSizeInMegaBytes?: number;
  BackupProgressInMegaBytes?: number;
  CurrentBackupRateInMegaBytesPerSecond?: number;
  EstimatedSecondsToCompletion?: number;
  ElapsedTimeInSeconds?: number;
  SourceRegion?: string;
  Tags?: Tag[];
  RestorableNodeTypes?: string[];
  EnhancedVpcRouting?: boolean;
  MaintenanceTrackName?: string;
  ManualSnapshotRetentionPeriod?: number;
  ManualSnapshotRemainingDays?: number;
  SnapshotRetentionStartTime?: Date;
  MasterPasswordSecretArn?: string;
  MasterPasswordSecretKmsKeyId?: string;
  SnapshotArn?: string;
}
const Snapshot = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<Snapshot>;
export interface AuthorizeSnapshotAccessResult {
  Snapshot?: Snapshot;
}
const AuthorizeSnapshotAccessResult = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<AuthorizeSnapshotAccessResult>;
export interface DeleteClusterSnapshotMessage {
  SnapshotIdentifier?: string;
  SnapshotClusterIdentifier?: string;
}
const DeleteClusterSnapshotMessage = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<DeleteClusterSnapshotMessage>;
export type DeleteClusterSnapshotMessageList = DeleteClusterSnapshotMessage[];
const DeleteClusterSnapshotMessageList = /*@__PURE__*/ __L.at(__c3, 7);
export interface BatchDeleteClusterSnapshotsRequest {
  Identifiers?: DeleteClusterSnapshotMessage[];
}
const BatchDeleteClusterSnapshotsRequest = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<BatchDeleteClusterSnapshotsRequest>;
export type SnapshotIdentifierList = string[];
const SnapshotIdentifierList = /*@__PURE__*/ __L.at(__c4, 1);
export interface SnapshotErrorMessage {
  SnapshotIdentifier?: string;
  SnapshotClusterIdentifier?: string;
  FailureCode?: string;
  FailureReason?: string;
}
const SnapshotErrorMessage = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<SnapshotErrorMessage>;
export type BatchSnapshotOperationErrorList = SnapshotErrorMessage[];
const BatchSnapshotOperationErrorList = /*@__PURE__*/ __L.at(__c4, 3);
export interface BatchDeleteClusterSnapshotsResult {
  Resources?: string[];
  Errors?: SnapshotErrorMessage[];
}
const BatchDeleteClusterSnapshotsResult = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<BatchDeleteClusterSnapshotsResult>;
export interface BatchModifyClusterSnapshotsMessage {
  SnapshotIdentifierList?: string[];
  ManualSnapshotRetentionPeriod?: number;
  Force?: boolean;
}
const BatchModifyClusterSnapshotsMessage = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<BatchModifyClusterSnapshotsMessage>;
export type BatchSnapshotOperationErrors = SnapshotErrorMessage[];
const BatchSnapshotOperationErrors = /*@__PURE__*/ __L.at(__c4, 6);
export interface BatchModifyClusterSnapshotsOutputMessage {
  Resources?: string[];
  Errors?: SnapshotErrorMessage[];
}
const BatchModifyClusterSnapshotsOutputMessage = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<BatchModifyClusterSnapshotsOutputMessage>;
export interface CancelResizeMessage {
  ClusterIdentifier?: string;
}
const CancelResizeMessage = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<CancelResizeMessage>;
export type ImportTablesCompleted = string[];
const ImportTablesCompleted = /*@__PURE__*/ __L.at(__c5, 1);
export type ImportTablesInProgress = string[];
const ImportTablesInProgress = /*@__PURE__*/ __L.at(__c5, 2);
export type ImportTablesNotStarted = string[];
const ImportTablesNotStarted = /*@__PURE__*/ __L.at(__c5, 3);
export interface ResizeProgressMessage {
  TargetNodeType?: string;
  TargetNumberOfNodes?: number;
  TargetClusterType?: string;
  Status?: string;
  ImportTablesCompleted?: string[];
  ImportTablesInProgress?: string[];
  ImportTablesNotStarted?: string[];
  AvgResizeRateInMegaBytesPerSecond?: number;
  TotalResizeDataInMegaBytes?: number;
  ProgressInMegaBytes?: number;
  ElapsedTimeInSeconds?: number;
  EstimatedTimeToCompletionInSeconds?: number;
  ResizeType?: string;
  Message?: string;
  TargetEncryptionType?: string;
  DataTransferProgressPercent?: number;
}
const ResizeProgressMessage = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<ResizeProgressMessage>;
export interface CopyClusterSnapshotMessage {
  SourceSnapshotIdentifier?: string;
  SourceSnapshotClusterIdentifier?: string;
  TargetSnapshotIdentifier?: string;
  ManualSnapshotRetentionPeriod?: number;
}
const CopyClusterSnapshotMessage = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<CopyClusterSnapshotMessage>;
export interface CopyClusterSnapshotResult {
  Snapshot?: Snapshot;
}
const CopyClusterSnapshotResult = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<CopyClusterSnapshotResult>;
export type AuthenticationProfileNameString = string;
export interface CreateAuthenticationProfileMessage {
  AuthenticationProfileName?: string;
  AuthenticationProfileContent?: string;
}
const CreateAuthenticationProfileMessage = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<CreateAuthenticationProfileMessage>;
export interface CreateAuthenticationProfileResult {
  AuthenticationProfileName?: string;
  AuthenticationProfileContent?: string;
}
const CreateAuthenticationProfileResult = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<CreateAuthenticationProfileResult>;
export type SensitiveString = string | redacted.Redacted<string>;
export type ClusterSecurityGroupNameList = string[];
const ClusterSecurityGroupNameList = /*@__PURE__*/ __L.at(__c6, 1);
export type VpcSecurityGroupIdList = string[];
const VpcSecurityGroupIdList = /*@__PURE__*/ __L.at(__c6, 2);
export type IamRoleArnList = string[];
const IamRoleArnList = /*@__PURE__*/ __L.at(__c6, 3);
export type AquaConfigurationStatus = "enabled" | "disabled" | "auto" | (string & {});
const AquaConfigurationStatus = S.String;

export type CatalogNameString = string;
export interface CreateClusterMessage {
  DBName?: string;
  ClusterIdentifier?: string;
  ClusterType?: string;
  NodeType?: string;
  MasterUsername?: string;
  MasterUserPassword?: string | redacted.Redacted<string>;
  ClusterSecurityGroups?: string[];
  VpcSecurityGroupIds?: string[];
  ClusterSubnetGroupName?: string;
  AvailabilityZone?: string;
  PreferredMaintenanceWindow?: string;
  ClusterParameterGroupName?: string;
  AutomatedSnapshotRetentionPeriod?: number;
  ManualSnapshotRetentionPeriod?: number;
  Port?: number;
  ClusterVersion?: string;
  AllowVersionUpgrade?: boolean;
  NumberOfNodes?: number;
  PubliclyAccessible?: boolean;
  Encrypted?: boolean;
  HsmClientCertificateIdentifier?: string;
  HsmConfigurationIdentifier?: string;
  ElasticIp?: string;
  Tags?: Tag[];
  KmsKeyId?: string;
  EnhancedVpcRouting?: boolean;
  AdditionalInfo?: string;
  IamRoles?: string[];
  MaintenanceTrackName?: string;
  SnapshotScheduleIdentifier?: string;
  AvailabilityZoneRelocation?: boolean;
  AquaConfigurationStatus?: AquaConfigurationStatus;
  DefaultIamRoleArn?: string;
  LoadSampleData?: string;
  ManageMasterPassword?: boolean;
  MasterPasswordSecretKmsKeyId?: string;
  IpAddressType?: string;
  MultiAZ?: boolean;
  RedshiftIdcApplicationArn?: string;
  CatalogName?: string;
  ExtraComputeForAutomaticOptimization?: boolean;
}
const CreateClusterMessage = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<CreateClusterMessage>;
export interface NetworkInterface {
  NetworkInterfaceId?: string;
  SubnetId?: string;
  PrivateIpAddress?: string;
  AvailabilityZone?: string;
  Ipv6Address?: string;
}
const NetworkInterface = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<NetworkInterface>;
export type NetworkInterfaceList = NetworkInterface[];
const NetworkInterfaceList = /*@__PURE__*/ __L.at(__c6, 6);
export interface VpcEndpoint {
  VpcEndpointId?: string;
  VpcId?: string;
  NetworkInterfaces?: NetworkInterface[];
}
const VpcEndpoint = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<VpcEndpoint>;
export type VpcEndpointsList = VpcEndpoint[];
const VpcEndpointsList = /*@__PURE__*/ __L.at(__c7, 0);
export interface Endpoint {
  Address?: string;
  Port?: number;
  VpcEndpoints?: VpcEndpoint[];
}
const Endpoint = /*@__PURE__*/ __L.at(__c7, 1) as any as S.Schema<Endpoint>;
export interface ClusterSecurityGroupMembership {
  ClusterSecurityGroupName?: string;
  Status?: string;
}
const ClusterSecurityGroupMembership = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<ClusterSecurityGroupMembership>;
export type ClusterSecurityGroupMembershipList = ClusterSecurityGroupMembership[];
const ClusterSecurityGroupMembershipList = /*@__PURE__*/ __L.at(__c7, 3);
export interface VpcSecurityGroupMembership {
  VpcSecurityGroupId?: string;
  Status?: string;
}
const VpcSecurityGroupMembership = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<VpcSecurityGroupMembership>;
export type VpcSecurityGroupMembershipList = VpcSecurityGroupMembership[];
const VpcSecurityGroupMembershipList = /*@__PURE__*/ __L.at(__c7, 5);
export interface ClusterParameterStatus {
  ParameterName?: string;
  ParameterApplyStatus?: string;
  ParameterApplyErrorDescription?: string;
}
const ClusterParameterStatus = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<ClusterParameterStatus>;
export type ClusterParameterStatusList = ClusterParameterStatus[];
const ClusterParameterStatusList = /*@__PURE__*/ __L.at(__c7, 7);
export interface ClusterParameterGroupStatus {
  ParameterGroupName?: string;
  ParameterApplyStatus?: string;
  ClusterParameterStatusList?: ClusterParameterStatus[];
}
const ClusterParameterGroupStatus = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<ClusterParameterGroupStatus>;
export type ClusterParameterGroupStatusList = ClusterParameterGroupStatus[];
const ClusterParameterGroupStatusList = /*@__PURE__*/ __L.at(__c8, 1);
export interface PendingModifiedValues {
  MasterUserPassword?: string | redacted.Redacted<string>;
  NodeType?: string;
  NumberOfNodes?: number;
  ClusterType?: string;
  ClusterVersion?: string;
  AutomatedSnapshotRetentionPeriod?: number;
  ClusterIdentifier?: string;
  PubliclyAccessible?: boolean;
  EnhancedVpcRouting?: boolean;
  MaintenanceTrackName?: string;
  EncryptionType?: string;
}
const PendingModifiedValues = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<PendingModifiedValues>;
export interface RestoreStatus {
  Status?: string;
  CurrentRestoreRateInMegaBytesPerSecond?: number;
  SnapshotSizeInMegaBytes?: number;
  ProgressInMegaBytes?: number;
  ElapsedTimeInSeconds?: number;
  EstimatedTimeToCompletionInSeconds?: number;
}
const RestoreStatus = /*@__PURE__*/ __L.at(__c8, 3) as any as S.Schema<RestoreStatus>;
export interface DataTransferProgress {
  Status?: string;
  CurrentRateInMegaBytesPerSecond?: number;
  TotalDataInMegaBytes?: number;
  DataTransferredInMegaBytes?: number;
  EstimatedTimeToCompletionInSeconds?: number;
  ElapsedTimeInSeconds?: number;
}
const DataTransferProgress = /*@__PURE__*/ __L.at(__c8, 4) as any as S.Schema<DataTransferProgress>;
export interface HsmStatus {
  HsmClientCertificateIdentifier?: string;
  HsmConfigurationIdentifier?: string;
  Status?: string;
}
const HsmStatus = /*@__PURE__*/ __L.at(__c8, 5) as any as S.Schema<HsmStatus>;
export interface ClusterSnapshotCopyStatus {
  DestinationRegion?: string;
  RetentionPeriod?: number;
  ManualSnapshotRetentionPeriod?: number;
  SnapshotCopyGrantName?: string;
}
const ClusterSnapshotCopyStatus = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<ClusterSnapshotCopyStatus>;
export interface ClusterNode {
  NodeRole?: string;
  PrivateIPAddress?: string;
  PublicIPAddress?: string;
}
const ClusterNode = /*@__PURE__*/ __L.at(__c8, 7) as any as S.Schema<ClusterNode>;
export type ClusterNodesList = ClusterNode[];
const ClusterNodesList = /*@__PURE__*/ __L.at(__c9, 0);
export interface ElasticIpStatus {
  ElasticIp?: string;
  Status?: string;
}
const ElasticIpStatus = /*@__PURE__*/ __L.at(__c9, 1) as any as S.Schema<ElasticIpStatus>;
export interface ClusterIamRole {
  IamRoleArn?: string;
  ApplyStatus?: string;
}
const ClusterIamRole = /*@__PURE__*/ __L.at(__c9, 2) as any as S.Schema<ClusterIamRole>;
export type ClusterIamRoleList = ClusterIamRole[];
const ClusterIamRoleList = /*@__PURE__*/ __L.at(__c9, 3);
export type PendingActionsList = string[];
const PendingActionsList = /*@__PURE__*/ __L.at(__c9, 4);
export interface DeferredMaintenanceWindow {
  DeferMaintenanceIdentifier?: string;
  DeferMaintenanceStartTime?: Date;
  DeferMaintenanceEndTime?: Date;
}
const DeferredMaintenanceWindow = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<DeferredMaintenanceWindow>;
export type DeferredMaintenanceWindowsList = DeferredMaintenanceWindow[];
const DeferredMaintenanceWindowsList = /*@__PURE__*/ __L.at(__c9, 6);
export type ScheduleState = "MODIFYING" | "ACTIVE" | "FAILED" | (string & {});
const ScheduleState = S.String;

export interface ResizeInfo {
  ResizeType?: string;
  AllowCancelResize?: boolean;
}
const ResizeInfo = /*@__PURE__*/ __L.at(__c9, 7) as any as S.Schema<ResizeInfo>;
export type AquaStatus = "enabled" | "disabled" | "applying" | (string & {});
const AquaStatus = S.String;

export interface AquaConfiguration {
  AquaStatus?: AquaStatus;
  AquaConfigurationStatus?: AquaConfigurationStatus;
}
const AquaConfiguration = /*@__PURE__*/ __L.at(__c10, 0) as any as S.Schema<AquaConfiguration>;
export type ReservedNodeExchangeStatusType =
  | "REQUESTED"
  | "PENDING"
  | "IN_PROGRESS"
  | "RETRYING"
  | "SUCCEEDED"
  | "FAILED"
  | (string & {});
const ReservedNodeExchangeStatusType = S.String;

export interface ReservedNodeExchangeStatus {
  ReservedNodeExchangeRequestId?: string;
  Status?: ReservedNodeExchangeStatusType;
  RequestTime?: Date;
  SourceReservedNodeId?: string;
  SourceReservedNodeType?: string;
  SourceReservedNodeCount?: number;
  TargetReservedNodeOfferingId?: string;
  TargetReservedNodeType?: string;
  TargetReservedNodeCount?: number;
}
const ReservedNodeExchangeStatus = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<ReservedNodeExchangeStatus>;
export interface SecondaryClusterInfo {
  AvailabilityZone?: string;
  ClusterNodes?: ClusterNode[];
}
const SecondaryClusterInfo = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<SecondaryClusterInfo>;
export type LogTypeList = string[];
const LogTypeList = /*@__PURE__*/ __L.at(__c10, 3);
export type S3TableLastIngestionTimeMap = { [key: string]: string | undefined };
const S3TableLastIngestionTimeMap = /*@__PURE__*/ __L.at(__c10, 4);
export interface S3TablePublishStatus {
  S3Tables?: string[];
  S3TableNamespace?: string;
  S3TableGranularity?: string;
  EnabledAll?: boolean;
  LastIngestionTimes?: { [key: string]: string | undefined };
}
const S3TablePublishStatus = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<S3TablePublishStatus>;
export interface LoggingPublishStatus {
  S3Tables?: S3TablePublishStatus;
}
const LoggingPublishStatus = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<LoggingPublishStatus>;
export interface Cluster {
  ClusterIdentifier?: string;
  NodeType?: string;
  ClusterStatus?: string;
  ClusterAvailabilityStatus?: string;
  ModifyStatus?: string;
  MasterUsername?: string;
  DBName?: string;
  Endpoint?: Endpoint;
  ClusterCreateTime?: Date;
  AutomatedSnapshotRetentionPeriod?: number;
  ManualSnapshotRetentionPeriod?: number;
  ClusterSecurityGroups?: ClusterSecurityGroupMembership[];
  VpcSecurityGroups?: VpcSecurityGroupMembership[];
  ClusterParameterGroups?: ClusterParameterGroupStatus[];
  ClusterSubnetGroupName?: string;
  VpcId?: string;
  AvailabilityZone?: string;
  PreferredMaintenanceWindow?: string;
  PendingModifiedValues?: PendingModifiedValues;
  ClusterVersion?: string;
  AllowVersionUpgrade?: boolean;
  NumberOfNodes?: number;
  PubliclyAccessible?: boolean;
  Encrypted?: boolean;
  RestoreStatus?: RestoreStatus;
  DataTransferProgress?: DataTransferProgress;
  HsmStatus?: HsmStatus;
  ClusterSnapshotCopyStatus?: ClusterSnapshotCopyStatus;
  ClusterPublicKey?: string;
  ClusterNodes?: ClusterNode[];
  ElasticIpStatus?: ElasticIpStatus;
  ClusterRevisionNumber?: string;
  Tags?: Tag[];
  KmsKeyId?: string;
  EnhancedVpcRouting?: boolean;
  IamRoles?: ClusterIamRole[];
  PendingActions?: string[];
  MaintenanceTrackName?: string;
  ElasticResizeNumberOfNodeOptions?: string;
  DeferredMaintenanceWindows?: DeferredMaintenanceWindow[];
  SnapshotScheduleIdentifier?: string;
  SnapshotScheduleState?: ScheduleState;
  ExpectedNextSnapshotScheduleTime?: Date;
  ExpectedNextSnapshotScheduleTimeStatus?: string;
  NextMaintenanceWindowStartTime?: Date;
  ResizeInfo?: ResizeInfo;
  AvailabilityZoneRelocationStatus?: string;
  ClusterNamespaceArn?: string;
  TotalStorageCapacityInMegaBytes?: number;
  AquaConfiguration?: AquaConfiguration;
  DefaultIamRoleArn?: string;
  ReservedNodeExchangeStatus?: ReservedNodeExchangeStatus;
  CustomDomainName?: string;
  CustomDomainCertificateArn?: string;
  CustomDomainCertificateExpiryDate?: Date;
  MasterPasswordSecretArn?: string;
  MasterPasswordSecretKmsKeyId?: string;
  IpAddressType?: string;
  MultiAZ?: string;
  MultiAZSecondary?: SecondaryClusterInfo;
  LakehouseRegistrationStatus?: string;
  CatalogArn?: string;
  ExtraComputeForAutomaticOptimization?: string;
  LoggingPublishStatus?: LoggingPublishStatus;
}
const Cluster = /*@__PURE__*/ __L.at(__c10, 7) as any as S.Schema<Cluster>;
export interface CreateClusterResult {
  Cluster?: Cluster;
}
const CreateClusterResult = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<CreateClusterResult>;
export interface CreateClusterParameterGroupMessage {
  ParameterGroupName?: string;
  ParameterGroupFamily?: string;
  Description?: string;
  Tags?: Tag[];
}
const CreateClusterParameterGroupMessage = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<CreateClusterParameterGroupMessage>;
export interface ClusterParameterGroup {
  ParameterGroupName?: string;
  ParameterGroupFamily?: string;
  Description?: string;
  Tags?: Tag[];
}
const ClusterParameterGroup = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<ClusterParameterGroup>;
export interface CreateClusterParameterGroupResult {
  ClusterParameterGroup?: ClusterParameterGroup;
}
const CreateClusterParameterGroupResult = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<CreateClusterParameterGroupResult>;
export interface CreateClusterSecurityGroupMessage {
  ClusterSecurityGroupName?: string;
  Description?: string;
  Tags?: Tag[];
}
const CreateClusterSecurityGroupMessage = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<CreateClusterSecurityGroupMessage>;
export interface CreateClusterSecurityGroupResult {
  ClusterSecurityGroup?: ClusterSecurityGroup;
}
const CreateClusterSecurityGroupResult = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<CreateClusterSecurityGroupResult>;
export interface CreateClusterSnapshotMessage {
  SnapshotIdentifier?: string;
  ClusterIdentifier?: string;
  ManualSnapshotRetentionPeriod?: number;
  Tags?: Tag[];
}
const CreateClusterSnapshotMessage = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<CreateClusterSnapshotMessage>;
export interface CreateClusterSnapshotResult {
  Snapshot?: Snapshot;
}
const CreateClusterSnapshotResult = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<CreateClusterSnapshotResult>;
export type SubnetIdentifierList = string[];
const SubnetIdentifierList = /*@__PURE__*/ __L.at(__c12, 0);
export interface CreateClusterSubnetGroupMessage {
  ClusterSubnetGroupName?: string;
  Description?: string;
  SubnetIds?: string[];
  Tags?: Tag[];
}
const CreateClusterSubnetGroupMessage = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<CreateClusterSubnetGroupMessage>;
export interface SupportedPlatform {
  Name?: string;
}
const SupportedPlatform = /*@__PURE__*/ __L.at(__c12, 2) as any as S.Schema<SupportedPlatform>;
export type SupportedPlatformsList = SupportedPlatform[];
const SupportedPlatformsList = /*@__PURE__*/ __L.at(__c12, 3);
export interface AvailabilityZone {
  Name?: string;
  SupportedPlatforms?: SupportedPlatform[];
}
const AvailabilityZone = /*@__PURE__*/ __L.at(__c12, 4) as any as S.Schema<AvailabilityZone>;
export interface Subnet {
  SubnetIdentifier?: string;
  SubnetAvailabilityZone?: AvailabilityZone;
  SubnetStatus?: string;
}
const Subnet = /*@__PURE__*/ __L.at(__c12, 5) as any as S.Schema<Subnet>;
export type SubnetList = Subnet[];
const SubnetList = /*@__PURE__*/ __L.at(__c12, 6);
export type ValueStringList = string[];
const ValueStringList = /*@__PURE__*/ __L.at(__c12, 7);
export interface ClusterSubnetGroup {
  ClusterSubnetGroupName?: string;
  Description?: string;
  VpcId?: string;
  SubnetGroupStatus?: string;
  Subnets?: Subnet[];
  Tags?: Tag[];
  SupportedClusterIpAddressTypes?: string[];
}
const ClusterSubnetGroup = /*@__PURE__*/ __L.at(__c13, 0) as any as S.Schema<ClusterSubnetGroup>;
export interface CreateClusterSubnetGroupResult {
  ClusterSubnetGroup?: ClusterSubnetGroup;
}
const CreateClusterSubnetGroupResult = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<CreateClusterSubnetGroupResult>;
export type CustomDomainNameString = string;
export type CustomDomainCertificateArnString = string;
export interface CreateCustomDomainAssociationMessage {
  CustomDomainName?: string;
  CustomDomainCertificateArn?: string;
  ClusterIdentifier?: string;
}
const CreateCustomDomainAssociationMessage = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<CreateCustomDomainAssociationMessage>;
export interface CreateCustomDomainAssociationResult {
  CustomDomainName?: string;
  CustomDomainCertificateArn?: string;
  ClusterIdentifier?: string;
  CustomDomainCertExpiryTime?: string;
}
const CreateCustomDomainAssociationResult = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<CreateCustomDomainAssociationResult>;
export interface CreateEndpointAccessMessage {
  ClusterIdentifier?: string;
  ResourceOwner?: string;
  EndpointName?: string;
  SubnetGroupName?: string;
  VpcSecurityGroupIds?: string[];
}
const CreateEndpointAccessMessage = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<CreateEndpointAccessMessage>;
export interface EndpointAccess {
  ClusterIdentifier?: string;
  ResourceOwner?: string;
  SubnetGroupName?: string;
  EndpointStatus?: string;
  EndpointName?: string;
  EndpointCreateTime?: Date;
  Port?: number;
  Address?: string;
  VpcSecurityGroups?: VpcSecurityGroupMembership[];
  VpcEndpoint?: VpcEndpoint;
}
const EndpointAccess = /*@__PURE__*/ __L.at(__c13, 5) as any as S.Schema<EndpointAccess>;
export type SourceIdsList = string[];
const SourceIdsList = /*@__PURE__*/ __L.at(__c13, 6);
export type EventCategoriesList = string[];
const EventCategoriesList = /*@__PURE__*/ __L.at(__c13, 7);
export interface CreateEventSubscriptionMessage {
  SubscriptionName?: string;
  SnsTopicArn?: string;
  SourceType?: string;
  SourceIds?: string[];
  EventCategories?: string[];
  Severity?: string;
  Enabled?: boolean;
  Tags?: Tag[];
}
const CreateEventSubscriptionMessage = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<CreateEventSubscriptionMessage>;
export interface EventSubscription {
  CustomerAwsId?: string;
  CustSubscriptionId?: string;
  SnsTopicArn?: string;
  Status?: string;
  SubscriptionCreationTime?: Date;
  SourceType?: string;
  SourceIdsList?: string[];
  EventCategoriesList?: string[];
  Severity?: string;
  Enabled?: boolean;
  Tags?: Tag[];
}
const EventSubscription = /*@__PURE__*/ __L.at(__c14, 1) as any as S.Schema<EventSubscription>;
export interface CreateEventSubscriptionResult {
  EventSubscription?: EventSubscription;
}
const CreateEventSubscriptionResult = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<CreateEventSubscriptionResult>;
export interface CreateHsmClientCertificateMessage {
  HsmClientCertificateIdentifier?: string;
  Tags?: Tag[];
}
const CreateHsmClientCertificateMessage = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<CreateHsmClientCertificateMessage>;
export interface HsmClientCertificate {
  HsmClientCertificateIdentifier?: string;
  HsmClientCertificatePublicKey?: string;
  Tags?: Tag[];
}
const HsmClientCertificate = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<HsmClientCertificate>;
export interface CreateHsmClientCertificateResult {
  HsmClientCertificate?: HsmClientCertificate;
}
const CreateHsmClientCertificateResult = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<CreateHsmClientCertificateResult>;
export interface CreateHsmConfigurationMessage {
  HsmConfigurationIdentifier?: string;
  Description?: string;
  HsmIpAddress?: string;
  HsmPartitionName?: string;
  HsmPartitionPassword?: string;
  HsmServerPublicCertificate?: string;
  Tags?: Tag[];
}
const CreateHsmConfigurationMessage = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<CreateHsmConfigurationMessage>;
export interface HsmConfiguration {
  HsmConfigurationIdentifier?: string;
  Description?: string;
  HsmIpAddress?: string;
  HsmPartitionName?: string;
  Tags?: Tag[];
}
const HsmConfiguration = /*@__PURE__*/ __L.at(__c14, 7) as any as S.Schema<HsmConfiguration>;
export interface CreateHsmConfigurationResult {
  HsmConfiguration?: HsmConfiguration;
}
const CreateHsmConfigurationResult = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<CreateHsmConfigurationResult>;
export type SourceArn = string;
export type TargetArn = string;
export type IntegrationName = string;
export type EncryptionContextMap = { [key: string]: string | undefined };
const EncryptionContextMap = /*@__PURE__*/ __L.at(__c15, 1);
export type IntegrationDescription = string;
export interface CreateIntegrationMessage {
  SourceArn?: string;
  TargetArn?: string;
  IntegrationName?: string;
  KMSKeyId?: string;
  TagList?: Tag[];
  AdditionalEncryptionContext?: { [key: string]: string | undefined };
  Description?: string;
}
const CreateIntegrationMessage = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<CreateIntegrationMessage>;
export type IntegrationArn = string;
export type ZeroETLIntegrationStatus =
  | "creating"
  | "active"
  | "modifying"
  | "failed"
  | "deleting"
  | "syncing"
  | "needs_attention"
  | (string & {});
const ZeroETLIntegrationStatus = S.String;

export interface IntegrationError {
  ErrorCode?: string;
  ErrorMessage?: string;
}
const IntegrationError = /*@__PURE__*/ __L.at(__c15, 3) as any as S.Schema<IntegrationError>;
export type IntegrationErrorList = IntegrationError[];
const IntegrationErrorList = /*@__PURE__*/ __L.at(__c15, 4);
export type Description = string;
export interface Integration {
  IntegrationArn?: string;
  IntegrationName?: string;
  SourceArn?: string;
  TargetArn?: string;
  Status?: ZeroETLIntegrationStatus;
  Errors?: (IntegrationError & { ErrorCode: string })[];
  CreateTime?: Date;
  Description?: string;
  KMSKeyId?: string;
  AdditionalEncryptionContext?: { [key: string]: string | undefined };
  Tags?: Tag[];
}
const Integration = /*@__PURE__*/ __L.at(__c15, 5) as any as S.Schema<Integration>;
export type Qev2IdcApplicationName = string;
export type IdcDisplayNameString = string;
export interface CreateQev2IdcApplicationMessage {
  IdcInstanceArn?: string;
  Qev2IdcApplicationName?: string;
  IdcDisplayName?: string;
  Tags?: Tag[];
}
const CreateQev2IdcApplicationMessage = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<CreateQev2IdcApplicationMessage>;
export interface Qev2IdcApplication {
  IdcInstanceArn?: string;
  Qev2IdcApplicationName?: string;
  Qev2IdcApplicationArn?: string;
  IdcManagedApplicationArn?: string;
  IdcOnboardStatus?: string;
  IdcDisplayName?: string;
  Tags?: Tag[];
}
const Qev2IdcApplication = /*@__PURE__*/ __L.at(__c15, 7) as any as S.Schema<Qev2IdcApplication>;
export interface CreateQev2IdcApplicationResult {
  Qev2IdcApplication?: Qev2IdcApplication;
}
const CreateQev2IdcApplicationResult = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<CreateQev2IdcApplicationResult>;
export type RedshiftIdcApplicationName = string;
export type IdentityNamespaceString = string;
export type AuthorizedAudienceList = string[];
const AuthorizedAudienceList = /*@__PURE__*/ __L.at(__c16, 1);
export interface AuthorizedTokenIssuer {
  TrustedTokenIssuerArn?: string;
  AuthorizedAudiencesList?: string[];
}
const AuthorizedTokenIssuer = /*@__PURE__*/ __L.at(
  __c16,
  2,
) as any as S.Schema<AuthorizedTokenIssuer>;
export type AuthorizedTokenIssuerList = AuthorizedTokenIssuer[];
const AuthorizedTokenIssuerList = /*@__PURE__*/ __L.at(__c16, 3);
export type ServiceAuthorization = "Enabled" | "Disabled" | (string & {});
const ServiceAuthorization = S.String;

export interface LakeFormationQuery {
  Authorization?: ServiceAuthorization;
}
const LakeFormationQuery = /*@__PURE__*/ __L.at(__c16, 4) as any as S.Schema<LakeFormationQuery>;
export type LakeFormationScopeUnion = { LakeFormationQuery: LakeFormationQuery };
const LakeFormationScopeUnion = /*@__PURE__*/ __L.at(__c16, 5);
export type LakeFormationServiceIntegrations = LakeFormationScopeUnion[];
const LakeFormationServiceIntegrations = /*@__PURE__*/ __L.at(__c16, 6);
export interface ReadWriteAccess {
  Authorization?: ServiceAuthorization;
}
const ReadWriteAccess = /*@__PURE__*/ __L.at(__c16, 7) as any as S.Schema<ReadWriteAccess>;
export type S3AccessGrantsScopeUnion = { ReadWriteAccess: ReadWriteAccess };
const S3AccessGrantsScopeUnion = /*@__PURE__*/ __L.at(__c17, 0);
export type S3AccessGrantsServiceIntegrations = S3AccessGrantsScopeUnion[];
const S3AccessGrantsServiceIntegrations = /*@__PURE__*/ __L.at(__c17, 1);
export interface Connect {
  Authorization?: ServiceAuthorization;
}
const Connect = /*@__PURE__*/ __L.at(__c17, 2) as any as S.Schema<Connect>;
export type RedshiftScopeUnion = { Connect: Connect };
const RedshiftScopeUnion = /*@__PURE__*/ __L.at(__c17, 3);
export type RedshiftServiceIntegrations = RedshiftScopeUnion[];
const RedshiftServiceIntegrations = /*@__PURE__*/ __L.at(__c17, 4);
export type ServiceIntegrationsUnion =
  | { LakeFormation: LakeFormationScopeUnion[]; S3AccessGrants?: never; Redshift?: never }
  | { LakeFormation?: never; S3AccessGrants: S3AccessGrantsScopeUnion[]; Redshift?: never }
  | { LakeFormation?: never; S3AccessGrants?: never; Redshift: RedshiftScopeUnion[] };
const ServiceIntegrationsUnion = /*@__PURE__*/ __L.at(__c17, 5);
export type ServiceIntegrationList = ServiceIntegrationsUnion[];
const ServiceIntegrationList = /*@__PURE__*/ __L.at(__c17, 6);
export type ApplicationType = "None" | "Lakehouse" | (string & {});
const ApplicationType = S.String;

export type TagKeyList = string[];
const TagKeyList = /*@__PURE__*/ __L.at(__c17, 7);
export interface CreateRedshiftIdcApplicationMessage {
  IdcInstanceArn?: string;
  RedshiftIdcApplicationName?: string;
  IdentityNamespace?: string;
  IdcDisplayName?: string;
  IamRoleArn?: string;
  AuthorizedTokenIssuerList?: AuthorizedTokenIssuer[];
  ServiceIntegrations?: ServiceIntegrationsUnion[];
  ApplicationType?: ApplicationType;
  Tags?: Tag[];
  SsoTagKeys?: string[];
}
const CreateRedshiftIdcApplicationMessage = /*@__PURE__*/ __L.at(
  __c18,
  0,
) as any as S.Schema<CreateRedshiftIdcApplicationMessage>;
export interface RedshiftIdcApplication {
  IdcInstanceArn?: string;
  RedshiftIdcApplicationName?: string;
  RedshiftIdcApplicationArn?: string;
  IdentityNamespace?: string;
  IdcDisplayName?: string;
  IamRoleArn?: string;
  IdcManagedApplicationArn?: string;
  IdcOnboardStatus?: string;
  AuthorizedTokenIssuerList?: AuthorizedTokenIssuer[];
  ServiceIntegrations?: ServiceIntegrationsUnion[];
  ApplicationType?: ApplicationType;
  Tags?: Tag[];
  SsoTagKeys?: string[];
}
const RedshiftIdcApplication = /*@__PURE__*/ __L.at(
  __c18,
  1,
) as any as S.Schema<RedshiftIdcApplication>;
export interface CreateRedshiftIdcApplicationResult {
  RedshiftIdcApplication?: RedshiftIdcApplication;
}
const CreateRedshiftIdcApplicationResult = /*@__PURE__*/ __L.at(
  __c18,
  2,
) as any as S.Schema<CreateRedshiftIdcApplicationResult>;
export interface ResizeClusterMessage {
  ClusterIdentifier?: string;
  ClusterType?: string;
  NodeType?: string;
  NumberOfNodes?: number;
  Classic?: boolean;
  ReservedNodeId?: string;
  TargetReservedNodeOfferingId?: string;
}
const ResizeClusterMessage = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<ResizeClusterMessage>;
export interface PauseClusterMessage {
  ClusterIdentifier?: string;
}
const PauseClusterMessage = /*@__PURE__*/ __L.at(__c18, 4) as any as S.Schema<PauseClusterMessage>;
export interface ResumeClusterMessage {
  ClusterIdentifier?: string;
}
const ResumeClusterMessage = /*@__PURE__*/ __L.at(
  __c18,
  5,
) as any as S.Schema<ResumeClusterMessage>;
export interface ScheduledActionType {
  ResizeCluster?: ResizeClusterMessage;
  PauseCluster?: PauseClusterMessage;
  ResumeCluster?: ResumeClusterMessage;
}
const ScheduledActionType = /*@__PURE__*/ __L.at(__c18, 6) as any as S.Schema<ScheduledActionType>;
export interface CreateScheduledActionMessage {
  ScheduledActionName?: string;
  TargetAction?: ScheduledActionType;
  Schedule?: string;
  IamRole?: string;
  ScheduledActionDescription?: string;
  StartTime?: Date;
  EndTime?: Date;
  Enable?: boolean;
}
const CreateScheduledActionMessage = /*@__PURE__*/ __L.at(
  __c18,
  7,
) as any as S.Schema<CreateScheduledActionMessage>;
export type ScheduledActionState = "ACTIVE" | "DISABLED" | (string & {});
const ScheduledActionState = S.String;

export type ScheduledActionTimeList = Date[];
const ScheduledActionTimeList = /*@__PURE__*/ __L.at(__c19, 0);
export interface ScheduledAction {
  ScheduledActionName?: string;
  TargetAction?: ScheduledActionType & {
    ResizeCluster: ResizeClusterMessage & { ClusterIdentifier: string };
    PauseCluster: PauseClusterMessage & { ClusterIdentifier: string };
    ResumeCluster: ResumeClusterMessage & { ClusterIdentifier: string };
  };
  Schedule?: string;
  IamRole?: string;
  ScheduledActionDescription?: string;
  State?: ScheduledActionState;
  NextInvocations?: Date[];
  StartTime?: Date;
  EndTime?: Date;
}
const ScheduledAction = /*@__PURE__*/ __L.at(__c19, 1) as any as S.Schema<ScheduledAction>;
export interface CreateSnapshotCopyGrantMessage {
  SnapshotCopyGrantName?: string;
  KmsKeyId?: string;
  Tags?: Tag[];
}
const CreateSnapshotCopyGrantMessage = /*@__PURE__*/ __L.at(
  __c19,
  2,
) as any as S.Schema<CreateSnapshotCopyGrantMessage>;
export interface SnapshotCopyGrant {
  SnapshotCopyGrantName?: string;
  KmsKeyId?: string;
  Tags?: Tag[];
}
const SnapshotCopyGrant = /*@__PURE__*/ __L.at(__c19, 3) as any as S.Schema<SnapshotCopyGrant>;
export interface CreateSnapshotCopyGrantResult {
  SnapshotCopyGrant?: SnapshotCopyGrant;
}
const CreateSnapshotCopyGrantResult = /*@__PURE__*/ __L.at(
  __c19,
  4,
) as any as S.Schema<CreateSnapshotCopyGrantResult>;
export type ScheduleDefinitionList = string[];
const ScheduleDefinitionList = /*@__PURE__*/ __L.at(__c19, 5);
export interface CreateSnapshotScheduleMessage {
  ScheduleDefinitions?: string[];
  ScheduleIdentifier?: string;
  ScheduleDescription?: string;
  Tags?: Tag[];
  DryRun?: boolean;
  NextInvocations?: number;
}
const CreateSnapshotScheduleMessage = /*@__PURE__*/ __L.at(
  __c19,
  6,
) as any as S.Schema<CreateSnapshotScheduleMessage>;
export type ScheduledSnapshotTimeList = Date[];
const ScheduledSnapshotTimeList = /*@__PURE__*/ __L.at(__c19, 7);
export interface ClusterAssociatedToSchedule {
  ClusterIdentifier?: string;
  ScheduleAssociationState?: ScheduleState;
}
const ClusterAssociatedToSchedule = /*@__PURE__*/ __L.at(
  __c20,
  0,
) as any as S.Schema<ClusterAssociatedToSchedule>;
export type AssociatedClusterList = ClusterAssociatedToSchedule[];
const AssociatedClusterList = /*@__PURE__*/ __L.at(__c20, 1);
export interface SnapshotSchedule {
  ScheduleDefinitions?: string[];
  ScheduleIdentifier?: string;
  ScheduleDescription?: string;
  Tags?: Tag[];
  NextInvocations?: Date[];
  AssociatedClusterCount?: number;
  AssociatedClusters?: ClusterAssociatedToSchedule[];
}
const SnapshotSchedule = /*@__PURE__*/ __L.at(__c20, 2) as any as S.Schema<SnapshotSchedule>;
export interface CreateTagsMessage {
  ResourceName?: string;
  Tags?: Tag[];
}
const CreateTagsMessage = /*@__PURE__*/ __L.at(__c20, 3) as any as S.Schema<CreateTagsMessage>;
export interface CreateTagsResponse {}
const CreateTagsResponse = /*@__PURE__*/ __L.at(__c20, 4) as any as S.Schema<CreateTagsResponse>;
export type UsageLimitFeatureType =
  | "spectrum"
  | "concurrency-scaling"
  | "cross-region-datasharing"
  | "extra-compute-for-automatic-optimization"
  | (string & {});
const UsageLimitFeatureType = S.String;

export type UsageLimitLimitType = "time" | "data-scanned" | (string & {});
const UsageLimitLimitType = S.String;

export type UsageLimitPeriod = "daily" | "weekly" | "monthly" | (string & {});
const UsageLimitPeriod = S.String;

export type UsageLimitBreachAction = "log" | "emit-metric" | "disable" | (string & {});
const UsageLimitBreachAction = S.String;

export interface CreateUsageLimitMessage {
  ClusterIdentifier?: string;
  FeatureType?: UsageLimitFeatureType;
  LimitType?: UsageLimitLimitType;
  Amount?: number;
  Period?: UsageLimitPeriod;
  BreachAction?: UsageLimitBreachAction;
  Tags?: Tag[];
}
const CreateUsageLimitMessage = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<CreateUsageLimitMessage>;
export interface UsageLimit {
  UsageLimitId?: string;
  ClusterIdentifier?: string;
  FeatureType?: UsageLimitFeatureType;
  LimitType?: UsageLimitLimitType;
  Amount?: number;
  Period?: UsageLimitPeriod;
  BreachAction?: UsageLimitBreachAction;
  Tags?: Tag[];
}
const UsageLimit = /*@__PURE__*/ __L.at(__c20, 6) as any as S.Schema<UsageLimit>;
export interface DeauthorizeDataShareMessage {
  DataShareArn?: string;
  ConsumerIdentifier?: string;
}
const DeauthorizeDataShareMessage = /*@__PURE__*/ __L.at(
  __c20,
  7,
) as any as S.Schema<DeauthorizeDataShareMessage>;
export interface DeleteAuthenticationProfileMessage {
  AuthenticationProfileName?: string;
}
const DeleteAuthenticationProfileMessage = /*@__PURE__*/ __L.at(
  __c21,
  0,
) as any as S.Schema<DeleteAuthenticationProfileMessage>;
export interface DeleteAuthenticationProfileResult {
  AuthenticationProfileName?: string;
}
const DeleteAuthenticationProfileResult = /*@__PURE__*/ __L.at(
  __c21,
  1,
) as any as S.Schema<DeleteAuthenticationProfileResult>;
export interface DeleteClusterMessage {
  ClusterIdentifier?: string;
  SkipFinalClusterSnapshot?: boolean;
  FinalClusterSnapshotIdentifier?: string;
  FinalClusterSnapshotRetentionPeriod?: number;
}
const DeleteClusterMessage = /*@__PURE__*/ __L.at(
  __c21,
  2,
) as any as S.Schema<DeleteClusterMessage>;
export interface DeleteClusterResult {
  Cluster?: Cluster;
}
const DeleteClusterResult = /*@__PURE__*/ __L.at(__c21, 3) as any as S.Schema<DeleteClusterResult>;
export interface DeleteClusterParameterGroupMessage {
  ParameterGroupName?: string;
}
const DeleteClusterParameterGroupMessage = /*@__PURE__*/ __L.at(
  __c21,
  4,
) as any as S.Schema<DeleteClusterParameterGroupMessage>;
export interface DeleteClusterParameterGroupResponse {}
const DeleteClusterParameterGroupResponse = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<DeleteClusterParameterGroupResponse>;
export interface DeleteClusterSecurityGroupMessage {
  ClusterSecurityGroupName?: string;
}
const DeleteClusterSecurityGroupMessage = /*@__PURE__*/ __L.at(
  __c21,
  6,
) as any as S.Schema<DeleteClusterSecurityGroupMessage>;
export interface DeleteClusterSecurityGroupResponse {}
const DeleteClusterSecurityGroupResponse = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<DeleteClusterSecurityGroupResponse>;
export interface DeleteClusterSnapshotResult {
  Snapshot?: Snapshot;
}
const DeleteClusterSnapshotResult = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<DeleteClusterSnapshotResult>;
export interface DeleteClusterSubnetGroupMessage {
  ClusterSubnetGroupName?: string;
}
const DeleteClusterSubnetGroupMessage = /*@__PURE__*/ __L.at(
  __c22,
  1,
) as any as S.Schema<DeleteClusterSubnetGroupMessage>;
export interface DeleteClusterSubnetGroupResponse {}
const DeleteClusterSubnetGroupResponse = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<DeleteClusterSubnetGroupResponse>;
export interface DeleteCustomDomainAssociationMessage {
  ClusterIdentifier?: string;
  CustomDomainName?: string;
}
const DeleteCustomDomainAssociationMessage = /*@__PURE__*/ __L.at(
  __c22,
  3,
) as any as S.Schema<DeleteCustomDomainAssociationMessage>;
export interface DeleteCustomDomainAssociationResponse {}
const DeleteCustomDomainAssociationResponse = /*@__PURE__*/ __L.at(
  __c22,
  4,
) as any as S.Schema<DeleteCustomDomainAssociationResponse>;
export interface DeleteEndpointAccessMessage {
  EndpointName?: string;
}
const DeleteEndpointAccessMessage = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<DeleteEndpointAccessMessage>;
export interface DeleteEventSubscriptionMessage {
  SubscriptionName?: string;
}
const DeleteEventSubscriptionMessage = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<DeleteEventSubscriptionMessage>;
export interface DeleteEventSubscriptionResponse {}
const DeleteEventSubscriptionResponse = /*@__PURE__*/ __L.at(
  __c22,
  7,
) as any as S.Schema<DeleteEventSubscriptionResponse>;
export interface DeleteHsmClientCertificateMessage {
  HsmClientCertificateIdentifier?: string;
}
const DeleteHsmClientCertificateMessage = /*@__PURE__*/ __L.at(
  __c23,
  0,
) as any as S.Schema<DeleteHsmClientCertificateMessage>;
export interface DeleteHsmClientCertificateResponse {}
const DeleteHsmClientCertificateResponse = /*@__PURE__*/ __L.at(
  __c23,
  1,
) as any as S.Schema<DeleteHsmClientCertificateResponse>;
export interface DeleteHsmConfigurationMessage {
  HsmConfigurationIdentifier?: string;
}
const DeleteHsmConfigurationMessage = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<DeleteHsmConfigurationMessage>;
export interface DeleteHsmConfigurationResponse {}
const DeleteHsmConfigurationResponse = /*@__PURE__*/ __L.at(
  __c23,
  3,
) as any as S.Schema<DeleteHsmConfigurationResponse>;
export interface DeleteIntegrationMessage {
  IntegrationArn?: string;
}
const DeleteIntegrationMessage = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<DeleteIntegrationMessage>;
export interface DeleteQev2IdcApplicationMessage {
  Qev2IdcApplicationArn?: string;
}
const DeleteQev2IdcApplicationMessage = /*@__PURE__*/ __L.at(
  __c23,
  5,
) as any as S.Schema<DeleteQev2IdcApplicationMessage>;
export interface DeleteQev2IdcApplicationResponse {}
const DeleteQev2IdcApplicationResponse = /*@__PURE__*/ __L.at(
  __c23,
  6,
) as any as S.Schema<DeleteQev2IdcApplicationResponse>;
export interface DeleteRedshiftIdcApplicationMessage {
  RedshiftIdcApplicationArn?: string;
}
const DeleteRedshiftIdcApplicationMessage = /*@__PURE__*/ __L.at(
  __c23,
  7,
) as any as S.Schema<DeleteRedshiftIdcApplicationMessage>;
export interface DeleteRedshiftIdcApplicationResponse {}
const DeleteRedshiftIdcApplicationResponse = /*@__PURE__*/ __L.at(
  __c24,
  0,
) as any as S.Schema<DeleteRedshiftIdcApplicationResponse>;
export interface DeleteResourcePolicyMessage {
  ResourceArn?: string;
}
const DeleteResourcePolicyMessage = /*@__PURE__*/ __L.at(
  __c24,
  1,
) as any as S.Schema<DeleteResourcePolicyMessage>;
export interface DeleteResourcePolicyResponse {}
const DeleteResourcePolicyResponse = /*@__PURE__*/ __L.at(
  __c24,
  2,
) as any as S.Schema<DeleteResourcePolicyResponse>;
export interface DeleteScheduledActionMessage {
  ScheduledActionName?: string;
}
const DeleteScheduledActionMessage = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<DeleteScheduledActionMessage>;
export interface DeleteScheduledActionResponse {}
const DeleteScheduledActionResponse = /*@__PURE__*/ __L.at(
  __c24,
  4,
) as any as S.Schema<DeleteScheduledActionResponse>;
export interface DeleteSnapshotCopyGrantMessage {
  SnapshotCopyGrantName?: string;
}
const DeleteSnapshotCopyGrantMessage = /*@__PURE__*/ __L.at(
  __c24,
  5,
) as any as S.Schema<DeleteSnapshotCopyGrantMessage>;
export interface DeleteSnapshotCopyGrantResponse {}
const DeleteSnapshotCopyGrantResponse = /*@__PURE__*/ __L.at(
  __c24,
  6,
) as any as S.Schema<DeleteSnapshotCopyGrantResponse>;
export interface DeleteSnapshotScheduleMessage {
  ScheduleIdentifier?: string;
}
const DeleteSnapshotScheduleMessage = /*@__PURE__*/ __L.at(
  __c24,
  7,
) as any as S.Schema<DeleteSnapshotScheduleMessage>;
export interface DeleteSnapshotScheduleResponse {}
const DeleteSnapshotScheduleResponse = /*@__PURE__*/ __L.at(
  __c25,
  0,
) as any as S.Schema<DeleteSnapshotScheduleResponse>;
export interface DeleteTagsMessage {
  ResourceName?: string;
  TagKeys?: string[];
}
const DeleteTagsMessage = /*@__PURE__*/ __L.at(__c25, 1) as any as S.Schema<DeleteTagsMessage>;
export interface DeleteTagsResponse {}
const DeleteTagsResponse = /*@__PURE__*/ __L.at(__c25, 2) as any as S.Schema<DeleteTagsResponse>;
export interface DeleteUsageLimitMessage {
  UsageLimitId?: string;
}
const DeleteUsageLimitMessage = /*@__PURE__*/ __L.at(
  __c25,
  3,
) as any as S.Schema<DeleteUsageLimitMessage>;
export interface DeleteUsageLimitResponse {}
const DeleteUsageLimitResponse = /*@__PURE__*/ __L.at(
  __c25,
  4,
) as any as S.Schema<DeleteUsageLimitResponse>;
export interface ServerlessIdentifier {
  NamespaceIdentifier?: string;
  WorkgroupIdentifier?: string;
}
const ServerlessIdentifier = /*@__PURE__*/ __L.at(
  __c25,
  5,
) as any as S.Schema<ServerlessIdentifier>;
export interface ProvisionedIdentifier {
  ClusterIdentifier?: string;
}
const ProvisionedIdentifier = /*@__PURE__*/ __L.at(
  __c25,
  6,
) as any as S.Schema<ProvisionedIdentifier>;
export type NamespaceIdentifierUnion =
  | { ServerlessIdentifier: ServerlessIdentifier; ProvisionedIdentifier?: never }
  | { ServerlessIdentifier?: never; ProvisionedIdentifier: ProvisionedIdentifier };
const NamespaceIdentifierUnion = /*@__PURE__*/ __L.at(__c25, 7);
export type ConsumerIdentifierList = string[];
const ConsumerIdentifierList = /*@__PURE__*/ __L.at(__c26, 0);
export interface DeregisterNamespaceInputMessage {
  NamespaceIdentifier?: NamespaceIdentifierUnion;
  ConsumerIdentifiers?: string[];
}
const DeregisterNamespaceInputMessage = /*@__PURE__*/ __L.at(
  __c26,
  1,
) as any as S.Schema<DeregisterNamespaceInputMessage>;
export type NamespaceRegistrationStatus = "Registering" | "Deregistering" | (string & {});
const NamespaceRegistrationStatus = S.String;

export interface DeregisterNamespaceOutputMessage {
  Status?: NamespaceRegistrationStatus;
}
const DeregisterNamespaceOutputMessage = /*@__PURE__*/ __L.at(
  __c26,
  2,
) as any as S.Schema<DeregisterNamespaceOutputMessage>;
export type AttributeNameList = string[];
const AttributeNameList = /*@__PURE__*/ __L.at(__c26, 3);
export interface DescribeAccountAttributesMessage {
  AttributeNames?: string[];
}
const DescribeAccountAttributesMessage = /*@__PURE__*/ __L.at(
  __c26,
  4,
) as any as S.Schema<DescribeAccountAttributesMessage>;
export interface AttributeValueTarget {
  AttributeValue?: string;
}
const AttributeValueTarget = /*@__PURE__*/ __L.at(
  __c26,
  5,
) as any as S.Schema<AttributeValueTarget>;
export type AttributeValueList = AttributeValueTarget[];
const AttributeValueList = /*@__PURE__*/ __L.at(__c26, 6);
export interface AccountAttribute {
  AttributeName?: string;
  AttributeValues?: AttributeValueTarget[];
}
const AccountAttribute = /*@__PURE__*/ __L.at(__c26, 7) as any as S.Schema<AccountAttribute>;
export type AttributeList = AccountAttribute[];
const AttributeList = /*@__PURE__*/ __L.at(__c27, 0);
export interface AccountAttributeList {
  AccountAttributes?: AccountAttribute[];
}
const AccountAttributeList = /*@__PURE__*/ __L.at(
  __c27,
  1,
) as any as S.Schema<AccountAttributeList>;
export interface DescribeAuthenticationProfilesMessage {
  AuthenticationProfileName?: string;
}
const DescribeAuthenticationProfilesMessage = /*@__PURE__*/ __L.at(
  __c27,
  2,
) as any as S.Schema<DescribeAuthenticationProfilesMessage>;
export interface AuthenticationProfile {
  AuthenticationProfileName?: string;
  AuthenticationProfileContent?: string;
}
const AuthenticationProfile = /*@__PURE__*/ __L.at(
  __c27,
  3,
) as any as S.Schema<AuthenticationProfile>;
export type AuthenticationProfileList = AuthenticationProfile[];
const AuthenticationProfileList = /*@__PURE__*/ __L.at(__c27, 4);
export interface DescribeAuthenticationProfilesResult {
  AuthenticationProfiles?: AuthenticationProfile[];
}
const DescribeAuthenticationProfilesResult = /*@__PURE__*/ __L.at(
  __c27,
  5,
) as any as S.Schema<DescribeAuthenticationProfilesResult>;
export interface DescribeClusterDbRevisionsMessage {
  ClusterIdentifier?: string;
  MaxRecords?: number;
  Marker?: string;
}
const DescribeClusterDbRevisionsMessage = /*@__PURE__*/ __L.at(
  __c27,
  6,
) as any as S.Schema<DescribeClusterDbRevisionsMessage>;
export interface RevisionTarget {
  DatabaseRevision?: string;
  Description?: string;
  DatabaseRevisionReleaseDate?: Date;
}
const RevisionTarget = /*@__PURE__*/ __L.at(__c27, 7) as any as S.Schema<RevisionTarget>;
export type RevisionTargetsList = RevisionTarget[];
const RevisionTargetsList = /*@__PURE__*/ __L.at(__c28, 0);
export interface ClusterDbRevision {
  ClusterIdentifier?: string;
  CurrentDatabaseRevision?: string;
  DatabaseRevisionReleaseDate?: Date;
  RevisionTargets?: RevisionTarget[];
}
const ClusterDbRevision = /*@__PURE__*/ __L.at(__c28, 1) as any as S.Schema<ClusterDbRevision>;
export type ClusterDbRevisionsList = ClusterDbRevision[];
const ClusterDbRevisionsList = /*@__PURE__*/ __L.at(__c28, 2);
export interface ClusterDbRevisionsMessage {
  Marker?: string;
  ClusterDbRevisions?: ClusterDbRevision[];
}
const ClusterDbRevisionsMessage = /*@__PURE__*/ __L.at(
  __c28,
  3,
) as any as S.Schema<ClusterDbRevisionsMessage>;
export type TagValueList = string[];
const TagValueList = /*@__PURE__*/ __L.at(__c28, 4);
export interface DescribeClusterParameterGroupsMessage {
  ParameterGroupName?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: string[];
  TagValues?: string[];
}
const DescribeClusterParameterGroupsMessage = /*@__PURE__*/ __L.at(
  __c28,
  5,
) as any as S.Schema<DescribeClusterParameterGroupsMessage>;
export type ParameterGroupList = ClusterParameterGroup[];
const ParameterGroupList = /*@__PURE__*/ __L.at(__c28, 6);
export interface ClusterParameterGroupsMessage {
  Marker?: string;
  ParameterGroups?: ClusterParameterGroup[];
}
const ClusterParameterGroupsMessage = /*@__PURE__*/ __L.at(
  __c28,
  7,
) as any as S.Schema<ClusterParameterGroupsMessage>;
export interface DescribeClusterParametersMessage {
  ParameterGroupName?: string;
  Source?: string;
  MaxRecords?: number;
  Marker?: string;
}
const DescribeClusterParametersMessage = /*@__PURE__*/ __L.at(
  __c29,
  0,
) as any as S.Schema<DescribeClusterParametersMessage>;
export type ParameterApplyType = "static" | "dynamic" | (string & {});
const ParameterApplyType = S.String;

export interface Parameter {
  ParameterName?: string;
  ParameterValue?: string;
  Description?: string;
  Source?: string;
  DataType?: string;
  AllowedValues?: string;
  ApplyType?: ParameterApplyType;
  IsModifiable?: boolean;
  MinimumEngineVersion?: string;
}
const Parameter = /*@__PURE__*/ __L.at(__c29, 1) as any as S.Schema<Parameter>;
export type ParametersList = Parameter[];
const ParametersList = /*@__PURE__*/ __L.at(__c29, 2);
export interface ClusterParameterGroupDetails {
  Parameters?: Parameter[];
  Marker?: string;
}
const ClusterParameterGroupDetails = /*@__PURE__*/ __L.at(
  __c29,
  3,
) as any as S.Schema<ClusterParameterGroupDetails>;
export interface DescribeClustersMessage {
  ClusterIdentifier?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: string[];
  TagValues?: string[];
}
const DescribeClustersMessage = /*@__PURE__*/ __L.at(
  __c29,
  4,
) as any as S.Schema<DescribeClustersMessage>;
export type ClusterList = Cluster[];
const ClusterList = /*@__PURE__*/ __L.at(__c29, 5);
export interface ClustersMessage {
  Marker?: string;
  Clusters?: Cluster[];
}
const ClustersMessage = /*@__PURE__*/ __L.at(__c29, 6) as any as S.Schema<ClustersMessage>;
export interface DescribeClusterSecurityGroupsMessage {
  ClusterSecurityGroupName?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: string[];
  TagValues?: string[];
}
const DescribeClusterSecurityGroupsMessage = /*@__PURE__*/ __L.at(
  __c29,
  7,
) as any as S.Schema<DescribeClusterSecurityGroupsMessage>;
export type ClusterSecurityGroups = ClusterSecurityGroup[];
const ClusterSecurityGroups = /*@__PURE__*/ __L.at(__c30, 0);
export interface ClusterSecurityGroupMessage {
  Marker?: string;
  ClusterSecurityGroups?: ClusterSecurityGroup[];
}
const ClusterSecurityGroupMessage = /*@__PURE__*/ __L.at(
  __c30,
  1,
) as any as S.Schema<ClusterSecurityGroupMessage>;
export type SnapshotAttributeToSortBy =
  | "SOURCE_TYPE"
  | "TOTAL_SIZE"
  | "CREATE_TIME"
  | (string & {});
const SnapshotAttributeToSortBy = S.String;

export type SortByOrder = "ASC" | "DESC" | (string & {});
const SortByOrder = S.String;

export interface SnapshotSortingEntity {
  Attribute?: SnapshotAttributeToSortBy;
  SortOrder?: SortByOrder;
}
const SnapshotSortingEntity = /*@__PURE__*/ __L.at(
  __c30,
  2,
) as any as S.Schema<SnapshotSortingEntity>;
export type SnapshotSortingEntityList = SnapshotSortingEntity[];
const SnapshotSortingEntityList = /*@__PURE__*/ __L.at(__c30, 3);
export interface DescribeClusterSnapshotsMessage {
  ClusterIdentifier?: string;
  SnapshotIdentifier?: string;
  SnapshotArn?: string;
  SnapshotType?: string;
  StartTime?: Date;
  EndTime?: Date;
  MaxRecords?: number;
  Marker?: string;
  OwnerAccount?: string;
  TagKeys?: string[];
  TagValues?: string[];
  ClusterExists?: boolean;
  SortingEntities?: SnapshotSortingEntity[];
}
const DescribeClusterSnapshotsMessage = /*@__PURE__*/ __L.at(
  __c30,
  4,
) as any as S.Schema<DescribeClusterSnapshotsMessage>;
export type SnapshotList = Snapshot[];
const SnapshotList = /*@__PURE__*/ __L.at(__c30, 5);
export interface SnapshotMessage {
  Marker?: string;
  Snapshots?: Snapshot[];
}
const SnapshotMessage = /*@__PURE__*/ __L.at(__c30, 6) as any as S.Schema<SnapshotMessage>;
export interface DescribeClusterSubnetGroupsMessage {
  ClusterSubnetGroupName?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: string[];
  TagValues?: string[];
}
const DescribeClusterSubnetGroupsMessage = /*@__PURE__*/ __L.at(
  __c30,
  7,
) as any as S.Schema<DescribeClusterSubnetGroupsMessage>;
export type ClusterSubnetGroups = ClusterSubnetGroup[];
const ClusterSubnetGroups = /*@__PURE__*/ __L.at(__c31, 0);
export interface ClusterSubnetGroupMessage {
  Marker?: string;
  ClusterSubnetGroups?: ClusterSubnetGroup[];
}
const ClusterSubnetGroupMessage = /*@__PURE__*/ __L.at(
  __c31,
  1,
) as any as S.Schema<ClusterSubnetGroupMessage>;
export interface DescribeClusterTracksMessage {
  MaintenanceTrackName?: string;
  MaxRecords?: number;
  Marker?: string;
}
const DescribeClusterTracksMessage = /*@__PURE__*/ __L.at(
  __c31,
  2,
) as any as S.Schema<DescribeClusterTracksMessage>;
export interface SupportedOperation {
  OperationName?: string;
}
const SupportedOperation = /*@__PURE__*/ __L.at(__c31, 3) as any as S.Schema<SupportedOperation>;
export type SupportedOperationList = SupportedOperation[];
const SupportedOperationList = /*@__PURE__*/ __L.at(__c31, 4);
export interface UpdateTarget {
  MaintenanceTrackName?: string;
  DatabaseVersion?: string;
  SupportedOperations?: SupportedOperation[];
}
const UpdateTarget = /*@__PURE__*/ __L.at(__c31, 5) as any as S.Schema<UpdateTarget>;
export type EligibleTracksToUpdateList = UpdateTarget[];
const EligibleTracksToUpdateList = /*@__PURE__*/ __L.at(__c31, 6);
export interface MaintenanceTrack {
  MaintenanceTrackName?: string;
  DatabaseVersion?: string;
  UpdateTargets?: UpdateTarget[];
}
const MaintenanceTrack = /*@__PURE__*/ __L.at(__c31, 7) as any as S.Schema<MaintenanceTrack>;
export type TrackList = MaintenanceTrack[];
const TrackList = /*@__PURE__*/ __L.at(__c32, 0);
export interface TrackListMessage {
  MaintenanceTracks?: MaintenanceTrack[];
  Marker?: string;
}
const TrackListMessage = /*@__PURE__*/ __L.at(__c32, 1) as any as S.Schema<TrackListMessage>;
export interface DescribeClusterVersionsMessage {
  ClusterVersion?: string;
  ClusterParameterGroupFamily?: string;
  MaxRecords?: number;
  Marker?: string;
}
const DescribeClusterVersionsMessage = /*@__PURE__*/ __L.at(
  __c32,
  2,
) as any as S.Schema<DescribeClusterVersionsMessage>;
export interface ClusterVersion {
  ClusterVersion?: string;
  ClusterParameterGroupFamily?: string;
  Description?: string;
}
const ClusterVersion = /*@__PURE__*/ __L.at(__c32, 3) as any as S.Schema<ClusterVersion>;
export type ClusterVersionList = ClusterVersion[];
const ClusterVersionList = /*@__PURE__*/ __L.at(__c32, 4);
export interface ClusterVersionsMessage {
  Marker?: string;
  ClusterVersions?: ClusterVersion[];
}
const ClusterVersionsMessage = /*@__PURE__*/ __L.at(
  __c32,
  5,
) as any as S.Schema<ClusterVersionsMessage>;
export interface DescribeCustomDomainAssociationsMessage {
  CustomDomainName?: string;
  CustomDomainCertificateArn?: string;
  MaxRecords?: number;
  Marker?: string;
}
const DescribeCustomDomainAssociationsMessage = /*@__PURE__*/ __L.at(
  __c32,
  6,
) as any as S.Schema<DescribeCustomDomainAssociationsMessage>;
export interface CertificateAssociation {
  CustomDomainName?: string;
  ClusterIdentifier?: string;
}
const CertificateAssociation = /*@__PURE__*/ __L.at(
  __c32,
  7,
) as any as S.Schema<CertificateAssociation>;
export type CertificateAssociationList = CertificateAssociation[];
const CertificateAssociationList = /*@__PURE__*/ __L.at(__c33, 0);
export interface Association {
  CustomDomainCertificateArn?: string;
  CustomDomainCertificateExpiryDate?: Date;
  CertificateAssociations?: CertificateAssociation[];
}
const Association = /*@__PURE__*/ __L.at(__c33, 1) as any as S.Schema<Association>;
export type AssociationList = Association[];
const AssociationList = /*@__PURE__*/ __L.at(__c33, 2);
export interface CustomDomainAssociationsMessage {
  Marker?: string;
  Associations?: Association[];
}
const CustomDomainAssociationsMessage = /*@__PURE__*/ __L.at(
  __c33,
  3,
) as any as S.Schema<CustomDomainAssociationsMessage>;
export interface DescribeDataSharesMessage {
  DataShareArn?: string;
  MaxRecords?: number;
  Marker?: string;
}
const DescribeDataSharesMessage = /*@__PURE__*/ __L.at(
  __c33,
  4,
) as any as S.Schema<DescribeDataSharesMessage>;
export type DataShareList = DataShare[];
const DataShareList = /*@__PURE__*/ __L.at(__c33, 5);
export interface DescribeDataSharesResult {
  DataShares?: DataShare[];
  Marker?: string;
}
const DescribeDataSharesResult = /*@__PURE__*/ __L.at(
  __c33,
  6,
) as any as S.Schema<DescribeDataSharesResult>;
export type DataShareStatusForConsumer = "ACTIVE" | "AVAILABLE" | (string & {});
const DataShareStatusForConsumer = S.String;

export interface DescribeDataSharesForConsumerMessage {
  ConsumerArn?: string;
  Status?: DataShareStatusForConsumer;
  MaxRecords?: number;
  Marker?: string;
}
const DescribeDataSharesForConsumerMessage = /*@__PURE__*/ __L.at(
  __c33,
  7,
) as any as S.Schema<DescribeDataSharesForConsumerMessage>;
export interface DescribeDataSharesForConsumerResult {
  DataShares?: DataShare[];
  Marker?: string;
}
const DescribeDataSharesForConsumerResult = /*@__PURE__*/ __L.at(
  __c34,
  0,
) as any as S.Schema<DescribeDataSharesForConsumerResult>;
export type DataShareStatusForProducer =
  | "ACTIVE"
  | "AUTHORIZED"
  | "PENDING_AUTHORIZATION"
  | "DEAUTHORIZED"
  | "REJECTED"
  | (string & {});
const DataShareStatusForProducer = S.String;

export interface DescribeDataSharesForProducerMessage {
  ProducerArn?: string;
  Status?: DataShareStatusForProducer;
  MaxRecords?: number;
  Marker?: string;
}
const DescribeDataSharesForProducerMessage = /*@__PURE__*/ __L.at(
  __c34,
  1,
) as any as S.Schema<DescribeDataSharesForProducerMessage>;
export interface DescribeDataSharesForProducerResult {
  DataShares?: DataShare[];
  Marker?: string;
}
const DescribeDataSharesForProducerResult = /*@__PURE__*/ __L.at(
  __c34,
  2,
) as any as S.Schema<DescribeDataSharesForProducerResult>;
export interface DescribeDefaultClusterParametersMessage {
  ParameterGroupFamily?: string;
  MaxRecords?: number;
  Marker?: string;
}
const DescribeDefaultClusterParametersMessage = /*@__PURE__*/ __L.at(
  __c34,
  3,
) as any as S.Schema<DescribeDefaultClusterParametersMessage>;
export interface DefaultClusterParameters {
  ParameterGroupFamily?: string;
  Marker?: string;
  Parameters?: Parameter[];
}
const DefaultClusterParameters = /*@__PURE__*/ __L.at(
  __c34,
  4,
) as any as S.Schema<DefaultClusterParameters>;
export interface DescribeDefaultClusterParametersResult {
  DefaultClusterParameters?: DefaultClusterParameters;
}
const DescribeDefaultClusterParametersResult = /*@__PURE__*/ __L.at(
  __c34,
  5,
) as any as S.Schema<DescribeDefaultClusterParametersResult>;
export interface DescribeEndpointAccessMessage {
  ClusterIdentifier?: string;
  ResourceOwner?: string;
  EndpointName?: string;
  VpcId?: string;
  MaxRecords?: number;
  Marker?: string;
}
const DescribeEndpointAccessMessage = /*@__PURE__*/ __L.at(
  __c34,
  6,
) as any as S.Schema<DescribeEndpointAccessMessage>;
export type EndpointAccesses = EndpointAccess[];
const EndpointAccesses = /*@__PURE__*/ __L.at(__c34, 7);
export interface EndpointAccessList {
  EndpointAccessList?: EndpointAccess[];
  Marker?: string;
}
const EndpointAccessList = /*@__PURE__*/ __L.at(__c35, 0) as any as S.Schema<EndpointAccessList>;
export interface DescribeEndpointAuthorizationMessage {
  ClusterIdentifier?: string;
  Account?: string;
  Grantee?: boolean;
  MaxRecords?: number;
  Marker?: string;
}
const DescribeEndpointAuthorizationMessage = /*@__PURE__*/ __L.at(
  __c35,
  1,
) as any as S.Schema<DescribeEndpointAuthorizationMessage>;
export type EndpointAuthorizations = EndpointAuthorization[];
const EndpointAuthorizations = /*@__PURE__*/ __L.at(__c35, 2);
export interface EndpointAuthorizationList {
  EndpointAuthorizationList?: EndpointAuthorization[];
  Marker?: string;
}
const EndpointAuthorizationList = /*@__PURE__*/ __L.at(
  __c35,
  3,
) as any as S.Schema<EndpointAuthorizationList>;
export interface DescribeEventCategoriesMessage {
  SourceType?: string;
}
const DescribeEventCategoriesMessage = /*@__PURE__*/ __L.at(
  __c35,
  4,
) as any as S.Schema<DescribeEventCategoriesMessage>;
export interface EventInfoMap {
  EventId?: string;
  EventCategories?: string[];
  EventDescription?: string;
  Severity?: string;
}
const EventInfoMap = /*@__PURE__*/ __L.at(__c35, 5) as any as S.Schema<EventInfoMap>;
export type EventInfoMapList = EventInfoMap[];
const EventInfoMapList = /*@__PURE__*/ __L.at(__c35, 6);
export interface EventCategoriesMap {
  SourceType?: string;
  Events?: EventInfoMap[];
}
const EventCategoriesMap = /*@__PURE__*/ __L.at(__c35, 7) as any as S.Schema<EventCategoriesMap>;
export type EventCategoriesMapList = EventCategoriesMap[];
const EventCategoriesMapList = /*@__PURE__*/ __L.at(__c36, 0);
export interface EventCategoriesMessage {
  EventCategoriesMapList?: EventCategoriesMap[];
}
const EventCategoriesMessage = /*@__PURE__*/ __L.at(
  __c36,
  1,
) as any as S.Schema<EventCategoriesMessage>;
export type SourceType =
  | "cluster"
  | "cluster-parameter-group"
  | "cluster-security-group"
  | "cluster-snapshot"
  | "scheduled-action"
  | (string & {});
const SourceType = S.String;

export interface DescribeEventsMessage {
  SourceIdentifier?: string;
  SourceType?: SourceType;
  StartTime?: Date;
  EndTime?: Date;
  Duration?: number;
  MaxRecords?: number;
  Marker?: string;
}
const DescribeEventsMessage = /*@__PURE__*/ __L.at(
  __c36,
  2,
) as any as S.Schema<DescribeEventsMessage>;
export interface Event {
  SourceIdentifier?: string;
  SourceType?: SourceType;
  Message?: string;
  EventCategories?: string[];
  Severity?: string;
  Date?: Date;
  EventId?: string;
}
const Event = /*@__PURE__*/ __L.at(__c36, 3) as any as S.Schema<Event>;
export type EventList = Event[];
const EventList = /*@__PURE__*/ __L.at(__c36, 4);
export interface EventsMessage {
  Marker?: string;
  Events?: Event[];
}
const EventsMessage = /*@__PURE__*/ __L.at(__c36, 5) as any as S.Schema<EventsMessage>;
export interface DescribeEventSubscriptionsMessage {
  SubscriptionName?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: string[];
  TagValues?: string[];
}
const DescribeEventSubscriptionsMessage = /*@__PURE__*/ __L.at(
  __c36,
  6,
) as any as S.Schema<DescribeEventSubscriptionsMessage>;
export type EventSubscriptionsList = EventSubscription[];
const EventSubscriptionsList = /*@__PURE__*/ __L.at(__c36, 7);
export interface EventSubscriptionsMessage {
  Marker?: string;
  EventSubscriptionsList?: EventSubscription[];
}
const EventSubscriptionsMessage = /*@__PURE__*/ __L.at(
  __c37,
  0,
) as any as S.Schema<EventSubscriptionsMessage>;
export interface DescribeHsmClientCertificatesMessage {
  HsmClientCertificateIdentifier?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: string[];
  TagValues?: string[];
}
const DescribeHsmClientCertificatesMessage = /*@__PURE__*/ __L.at(
  __c37,
  1,
) as any as S.Schema<DescribeHsmClientCertificatesMessage>;
export type HsmClientCertificateList = HsmClientCertificate[];
const HsmClientCertificateList = /*@__PURE__*/ __L.at(__c37, 2);
export interface HsmClientCertificateMessage {
  Marker?: string;
  HsmClientCertificates?: HsmClientCertificate[];
}
const HsmClientCertificateMessage = /*@__PURE__*/ __L.at(
  __c37,
  3,
) as any as S.Schema<HsmClientCertificateMessage>;
export interface DescribeHsmConfigurationsMessage {
  HsmConfigurationIdentifier?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: string[];
  TagValues?: string[];
}
const DescribeHsmConfigurationsMessage = /*@__PURE__*/ __L.at(
  __c37,
  4,
) as any as S.Schema<DescribeHsmConfigurationsMessage>;
export type HsmConfigurationList = HsmConfiguration[];
const HsmConfigurationList = /*@__PURE__*/ __L.at(__c37, 5);
export interface HsmConfigurationMessage {
  Marker?: string;
  HsmConfigurations?: HsmConfiguration[];
}
const HsmConfigurationMessage = /*@__PURE__*/ __L.at(
  __c37,
  6,
) as any as S.Schema<HsmConfigurationMessage>;
export type InboundIntegrationArn = string;
export interface DescribeInboundIntegrationsMessage {
  IntegrationArn?: string;
  TargetArn?: string;
  MaxRecords?: number;
  Marker?: string;
}
const DescribeInboundIntegrationsMessage = /*@__PURE__*/ __L.at(
  __c37,
  7,
) as any as S.Schema<DescribeInboundIntegrationsMessage>;
export interface InboundIntegration {
  IntegrationArn?: string;
  SourceArn?: string;
  TargetArn?: string;
  Status?: ZeroETLIntegrationStatus;
  Errors?: IntegrationError[];
  CreateTime?: Date;
}
const InboundIntegration = /*@__PURE__*/ __L.at(__c38, 0) as any as S.Schema<InboundIntegration>;
export type InboundIntegrationList = InboundIntegration[];
const InboundIntegrationList = /*@__PURE__*/ __L.at(__c38, 1);
export interface InboundIntegrationsMessage {
  Marker?: string;
  InboundIntegrations?: (InboundIntegration & {
    Errors: (IntegrationError & { ErrorCode: string })[];
  })[];
}
const InboundIntegrationsMessage = /*@__PURE__*/ __L.at(
  __c38,
  2,
) as any as S.Schema<InboundIntegrationsMessage>;
export type DescribeIntegrationsFilterName =
  | "integration-arn"
  | "source-arn"
  | "source-types"
  | "status"
  | (string & {});
const DescribeIntegrationsFilterName = S.String;

export type DescribeIntegrationsFilterValueList = string[];
const DescribeIntegrationsFilterValueList = /*@__PURE__*/ __L.at(__c38, 3);
export interface DescribeIntegrationsFilter {
  Name?: DescribeIntegrationsFilterName;
  Values?: string[];
}
const DescribeIntegrationsFilter = /*@__PURE__*/ __L.at(
  __c38,
  4,
) as any as S.Schema<DescribeIntegrationsFilter>;
export type DescribeIntegrationsFilterList = DescribeIntegrationsFilter[];
const DescribeIntegrationsFilterList = /*@__PURE__*/ __L.at(__c38, 5);
export interface DescribeIntegrationsMessage {
  IntegrationArn?: string;
  MaxRecords?: number;
  Marker?: string;
  Filters?: DescribeIntegrationsFilter[];
}
const DescribeIntegrationsMessage = /*@__PURE__*/ __L.at(
  __c38,
  6,
) as any as S.Schema<DescribeIntegrationsMessage>;
export type IntegrationList = Integration[];
const IntegrationList = /*@__PURE__*/ __L.at(__c38, 7);
export interface IntegrationsMessage {
  Marker?: string;
  Integrations?: (Integration & { Errors: (IntegrationError & { ErrorCode: string })[] })[];
}
const IntegrationsMessage = /*@__PURE__*/ __L.at(__c39, 0) as any as S.Schema<IntegrationsMessage>;
export interface DescribeLoggingStatusMessage {
  ClusterIdentifier?: string;
}
const DescribeLoggingStatusMessage = /*@__PURE__*/ __L.at(
  __c39,
  1,
) as any as S.Schema<DescribeLoggingStatusMessage>;
export type S3KeyPrefixValue = string;
export type LogDestinationType = "s3" | "cloudwatch" | "s3table" | (string & {});
const LogDestinationType = S.String;

export interface LoggingStatus {
  LoggingEnabled?: boolean;
  BucketName?: string;
  S3KeyPrefix?: string;
  LastSuccessfulDeliveryTime?: Date;
  LastFailureTime?: Date;
  LastFailureMessage?: string;
  LogDestinationType?: LogDestinationType;
  LogExports?: string[];
  S3Tables?: S3TablePublishStatus;
}
const LoggingStatus = /*@__PURE__*/ __L.at(__c39, 2) as any as S.Schema<LoggingStatus>;
export type ActionType =
  | "restore-cluster"
  | "recommend-node-config"
  | "resize-cluster"
  | (string & {});
const ActionType = S.String;

export type NodeConfigurationOptionsFilterName =
  | "NodeType"
  | "NumberOfNodes"
  | "EstimatedDiskUtilizationPercent"
  | "Mode"
  | (string & {});
const NodeConfigurationOptionsFilterName = S.String;

export type OperatorType = "eq" | "lt" | "gt" | "le" | "ge" | "in" | "between" | (string & {});
const OperatorType = S.String;

export interface NodeConfigurationOptionsFilter {
  Name?: NodeConfigurationOptionsFilterName;
  Operator?: OperatorType;
  Values?: string[];
}
const NodeConfigurationOptionsFilter = /*@__PURE__*/ __L.at(
  __c39,
  3,
) as any as S.Schema<NodeConfigurationOptionsFilter>;
export type NodeConfigurationOptionsFilterList = NodeConfigurationOptionsFilter[];
const NodeConfigurationOptionsFilterList = /*@__PURE__*/ __L.at(__c39, 4);
export interface DescribeNodeConfigurationOptionsMessage {
  ActionType?: ActionType;
  ClusterIdentifier?: string;
  SnapshotIdentifier?: string;
  SnapshotArn?: string;
  OwnerAccount?: string;
  Filters?: NodeConfigurationOptionsFilter[];
  Marker?: string;
  MaxRecords?: number;
}
const DescribeNodeConfigurationOptionsMessage = /*@__PURE__*/ __L.at(
  __c39,
  5,
) as any as S.Schema<DescribeNodeConfigurationOptionsMessage>;
export type Mode = "standard" | "high-performance" | (string & {});
const Mode = S.String;

export interface NodeConfigurationOption {
  NodeType?: string;
  NumberOfNodes?: number;
  EstimatedDiskUtilizationPercent?: number;
  Mode?: Mode;
}
const NodeConfigurationOption = /*@__PURE__*/ __L.at(
  __c39,
  6,
) as any as S.Schema<NodeConfigurationOption>;
export type NodeConfigurationOptionList = NodeConfigurationOption[];
const NodeConfigurationOptionList = /*@__PURE__*/ __L.at(__c39, 7);
export interface NodeConfigurationOptionsMessage {
  NodeConfigurationOptionList?: NodeConfigurationOption[];
  Marker?: string;
}
const NodeConfigurationOptionsMessage = /*@__PURE__*/ __L.at(
  __c40,
  0,
) as any as S.Schema<NodeConfigurationOptionsMessage>;
export interface DescribeOrderableClusterOptionsMessage {
  ClusterVersion?: string;
  NodeType?: string;
  MaxRecords?: number;
  Marker?: string;
}
const DescribeOrderableClusterOptionsMessage = /*@__PURE__*/ __L.at(
  __c40,
  1,
) as any as S.Schema<DescribeOrderableClusterOptionsMessage>;
export type AvailabilityZoneList = AvailabilityZone[];
const AvailabilityZoneList = /*@__PURE__*/ __L.at(__c40, 2);
export interface OrderableClusterOption {
  ClusterVersion?: string;
  ClusterType?: string;
  NodeType?: string;
  AvailabilityZones?: AvailabilityZone[];
}
const OrderableClusterOption = /*@__PURE__*/ __L.at(
  __c40,
  3,
) as any as S.Schema<OrderableClusterOption>;
export type OrderableClusterOptionsList = OrderableClusterOption[];
const OrderableClusterOptionsList = /*@__PURE__*/ __L.at(__c40, 4);
export interface OrderableClusterOptionsMessage {
  OrderableClusterOptions?: OrderableClusterOption[];
  Marker?: string;
}
const OrderableClusterOptionsMessage = /*@__PURE__*/ __L.at(
  __c40,
  5,
) as any as S.Schema<OrderableClusterOptionsMessage>;
export interface DescribePartnersInputMessage {
  AccountId?: string;
  ClusterIdentifier?: string;
  DatabaseName?: string;
  PartnerName?: string;
}
const DescribePartnersInputMessage = /*@__PURE__*/ __L.at(
  __c40,
  6,
) as any as S.Schema<DescribePartnersInputMessage>;
export type PartnerIntegrationStatus =
  | "Active"
  | "Inactive"
  | "RuntimeFailure"
  | "ConnectionFailure"
  | (string & {});
const PartnerIntegrationStatus = S.String;

export type PartnerIntegrationStatusMessage = string;
export interface PartnerIntegrationInfo {
  DatabaseName?: string;
  PartnerName?: string;
  Status?: PartnerIntegrationStatus;
  StatusMessage?: string;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
const PartnerIntegrationInfo = /*@__PURE__*/ __L.at(
  __c40,
  7,
) as any as S.Schema<PartnerIntegrationInfo>;
export type PartnerIntegrationInfoList = PartnerIntegrationInfo[];
const PartnerIntegrationInfoList = /*@__PURE__*/ __L.at(__c41, 0);
export interface DescribePartnersOutputMessage {
  PartnerIntegrationInfoList?: PartnerIntegrationInfo[];
}
const DescribePartnersOutputMessage = /*@__PURE__*/ __L.at(
  __c41,
  1,
) as any as S.Schema<DescribePartnersOutputMessage>;
export interface DescribeQev2IdcApplicationsMessage {
  Qev2IdcApplicationArn?: string;
  MaxRecords?: number;
  Marker?: string;
}
const DescribeQev2IdcApplicationsMessage = /*@__PURE__*/ __L.at(
  __c41,
  2,
) as any as S.Schema<DescribeQev2IdcApplicationsMessage>;
export type Qev2IdcApplicationList = Qev2IdcApplication[];
const Qev2IdcApplicationList = /*@__PURE__*/ __L.at(__c41, 3);
export interface DescribeQev2IdcApplicationsResult {
  Qev2IdcApplications?: Qev2IdcApplication[];
  Marker?: string;
}
const DescribeQev2IdcApplicationsResult = /*@__PURE__*/ __L.at(
  __c41,
  4,
) as any as S.Schema<DescribeQev2IdcApplicationsResult>;
export interface DescribeRedshiftIdcApplicationsMessage {
  RedshiftIdcApplicationArn?: string;
  MaxRecords?: number;
  Marker?: string;
}
const DescribeRedshiftIdcApplicationsMessage = /*@__PURE__*/ __L.at(
  __c41,
  5,
) as any as S.Schema<DescribeRedshiftIdcApplicationsMessage>;
export type RedshiftIdcApplicationList = RedshiftIdcApplication[];
const RedshiftIdcApplicationList = /*@__PURE__*/ __L.at(__c41, 6);
export interface DescribeRedshiftIdcApplicationsResult {
  RedshiftIdcApplications?: RedshiftIdcApplication[];
  Marker?: string;
}
const DescribeRedshiftIdcApplicationsResult = /*@__PURE__*/ __L.at(
  __c41,
  7,
) as any as S.Schema<DescribeRedshiftIdcApplicationsResult>;
export interface DescribeReservedNodeExchangeStatusInputMessage {
  ReservedNodeId?: string;
  ReservedNodeExchangeRequestId?: string;
  MaxRecords?: number;
  Marker?: string;
}
const DescribeReservedNodeExchangeStatusInputMessage = /*@__PURE__*/ __L.at(
  __c42,
  0,
) as any as S.Schema<DescribeReservedNodeExchangeStatusInputMessage>;
export type ReservedNodeExchangeStatusList = ReservedNodeExchangeStatus[];
const ReservedNodeExchangeStatusList = /*@__PURE__*/ __L.at(__c42, 1);
export interface DescribeReservedNodeExchangeStatusOutputMessage {
  ReservedNodeExchangeStatusDetails?: ReservedNodeExchangeStatus[];
  Marker?: string;
}
const DescribeReservedNodeExchangeStatusOutputMessage = /*@__PURE__*/ __L.at(
  __c42,
  2,
) as any as S.Schema<DescribeReservedNodeExchangeStatusOutputMessage>;
export interface DescribeReservedNodeOfferingsMessage {
  ReservedNodeOfferingId?: string;
  MaxRecords?: number;
  Marker?: string;
}
const DescribeReservedNodeOfferingsMessage = /*@__PURE__*/ __L.at(
  __c42,
  3,
) as any as S.Schema<DescribeReservedNodeOfferingsMessage>;
export interface ReservedNodeOffering {
  ReservedNodeOfferingId?: string;
  NodeType?: string;
  Duration?: number;
  FixedPrice?: number;
  UsagePrice?: number;
  CurrencyCode?: string;
  OfferingType?: string;
  RecurringCharges?: RecurringCharge[];
  ReservedNodeOfferingType?: ReservedNodeOfferingType;
}
const ReservedNodeOffering = /*@__PURE__*/ __L.at(
  __c42,
  4,
) as any as S.Schema<ReservedNodeOffering>;
export type ReservedNodeOfferingList = ReservedNodeOffering[];
const ReservedNodeOfferingList = /*@__PURE__*/ __L.at(__c42, 5);
export interface ReservedNodeOfferingsMessage {
  Marker?: string;
  ReservedNodeOfferings?: ReservedNodeOffering[];
}
const ReservedNodeOfferingsMessage = /*@__PURE__*/ __L.at(
  __c42,
  6,
) as any as S.Schema<ReservedNodeOfferingsMessage>;
export interface DescribeReservedNodesMessage {
  ReservedNodeId?: string;
  MaxRecords?: number;
  Marker?: string;
}
const DescribeReservedNodesMessage = /*@__PURE__*/ __L.at(
  __c42,
  7,
) as any as S.Schema<DescribeReservedNodesMessage>;
export type ReservedNodeList = ReservedNode[];
const ReservedNodeList = /*@__PURE__*/ __L.at(__c43, 0);
export interface ReservedNodesMessage {
  Marker?: string;
  ReservedNodes?: ReservedNode[];
}
const ReservedNodesMessage = /*@__PURE__*/ __L.at(
  __c43,
  1,
) as any as S.Schema<ReservedNodesMessage>;
export interface DescribeResizeMessage {
  ClusterIdentifier?: string;
}
const DescribeResizeMessage = /*@__PURE__*/ __L.at(
  __c43,
  2,
) as any as S.Schema<DescribeResizeMessage>;
export type ScheduledActionTypeValues =
  | "ResizeCluster"
  | "PauseCluster"
  | "ResumeCluster"
  | (string & {});
const ScheduledActionTypeValues = S.String;

export type ScheduledActionFilterName = "cluster-identifier" | "iam-role" | (string & {});
const ScheduledActionFilterName = S.String;

export interface ScheduledActionFilter {
  Name?: ScheduledActionFilterName;
  Values?: string[];
}
const ScheduledActionFilter = /*@__PURE__*/ __L.at(
  __c43,
  3,
) as any as S.Schema<ScheduledActionFilter>;
export type ScheduledActionFilterList = ScheduledActionFilter[];
const ScheduledActionFilterList = /*@__PURE__*/ __L.at(__c43, 4);
export interface DescribeScheduledActionsMessage {
  ScheduledActionName?: string;
  TargetActionType?: ScheduledActionTypeValues;
  StartTime?: Date;
  EndTime?: Date;
  Active?: boolean;
  Filters?: ScheduledActionFilter[];
  Marker?: string;
  MaxRecords?: number;
}
const DescribeScheduledActionsMessage = /*@__PURE__*/ __L.at(
  __c43,
  5,
) as any as S.Schema<DescribeScheduledActionsMessage>;
export type ScheduledActionList = ScheduledAction[];
const ScheduledActionList = /*@__PURE__*/ __L.at(__c43, 6);
export interface ScheduledActionsMessage {
  Marker?: string;
  ScheduledActions?: (ScheduledAction & {
    TargetAction: ScheduledActionType & {
      ResizeCluster: ResizeClusterMessage & { ClusterIdentifier: string };
      PauseCluster: PauseClusterMessage & { ClusterIdentifier: string };
      ResumeCluster: ResumeClusterMessage & { ClusterIdentifier: string };
    };
  })[];
}
const ScheduledActionsMessage = /*@__PURE__*/ __L.at(
  __c43,
  7,
) as any as S.Schema<ScheduledActionsMessage>;
export interface DescribeSnapshotCopyGrantsMessage {
  SnapshotCopyGrantName?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: string[];
  TagValues?: string[];
}
const DescribeSnapshotCopyGrantsMessage = /*@__PURE__*/ __L.at(
  __c44,
  0,
) as any as S.Schema<DescribeSnapshotCopyGrantsMessage>;
export type SnapshotCopyGrantList = SnapshotCopyGrant[];
const SnapshotCopyGrantList = /*@__PURE__*/ __L.at(__c44, 1);
export interface SnapshotCopyGrantMessage {
  Marker?: string;
  SnapshotCopyGrants?: SnapshotCopyGrant[];
}
const SnapshotCopyGrantMessage = /*@__PURE__*/ __L.at(
  __c44,
  2,
) as any as S.Schema<SnapshotCopyGrantMessage>;
export interface DescribeSnapshotSchedulesMessage {
  ClusterIdentifier?: string;
  ScheduleIdentifier?: string;
  TagKeys?: string[];
  TagValues?: string[];
  Marker?: string;
  MaxRecords?: number;
}
const DescribeSnapshotSchedulesMessage = /*@__PURE__*/ __L.at(
  __c44,
  3,
) as any as S.Schema<DescribeSnapshotSchedulesMessage>;
export type SnapshotScheduleList = SnapshotSchedule[];
const SnapshotScheduleList = /*@__PURE__*/ __L.at(__c44, 4);
export interface DescribeSnapshotSchedulesOutputMessage {
  SnapshotSchedules?: SnapshotSchedule[];
  Marker?: string;
}
const DescribeSnapshotSchedulesOutputMessage = /*@__PURE__*/ __L.at(
  __c44,
  5,
) as any as S.Schema<DescribeSnapshotSchedulesOutputMessage>;
export interface DescribeStorageRequest {}
const DescribeStorageRequest = /*@__PURE__*/ __L.at(
  __c44,
  6,
) as any as S.Schema<DescribeStorageRequest>;
export interface CustomerStorageMessage {
  TotalBackupSizeInMegaBytes?: number;
  TotalProvisionedStorageInMegaBytes?: number;
}
const CustomerStorageMessage = /*@__PURE__*/ __L.at(
  __c44,
  7,
) as any as S.Schema<CustomerStorageMessage>;
export interface DescribeTableRestoreStatusMessage {
  ClusterIdentifier?: string;
  TableRestoreRequestId?: string;
  MaxRecords?: number;
  Marker?: string;
}
const DescribeTableRestoreStatusMessage = /*@__PURE__*/ __L.at(
  __c45,
  0,
) as any as S.Schema<DescribeTableRestoreStatusMessage>;
export type TableRestoreStatusType =
  | "PENDING"
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "FAILED"
  | "CANCELED"
  | (string & {});
const TableRestoreStatusType = S.String;

export interface TableRestoreStatus {
  TableRestoreRequestId?: string;
  Status?: TableRestoreStatusType;
  Message?: string;
  RequestTime?: Date;
  ProgressInMegaBytes?: number;
  TotalDataInMegaBytes?: number;
  ClusterIdentifier?: string;
  SnapshotIdentifier?: string;
  SourceDatabaseName?: string;
  SourceSchemaName?: string;
  SourceTableName?: string;
  TargetDatabaseName?: string;
  TargetSchemaName?: string;
  NewTableName?: string;
}
const TableRestoreStatus = /*@__PURE__*/ __L.at(__c45, 1) as any as S.Schema<TableRestoreStatus>;
export type TableRestoreStatusList = TableRestoreStatus[];
const TableRestoreStatusList = /*@__PURE__*/ __L.at(__c45, 2);
export interface TableRestoreStatusMessage {
  TableRestoreStatusDetails?: TableRestoreStatus[];
  Marker?: string;
}
const TableRestoreStatusMessage = /*@__PURE__*/ __L.at(
  __c45,
  3,
) as any as S.Schema<TableRestoreStatusMessage>;
export interface DescribeTagsMessage {
  ResourceName?: string;
  ResourceType?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: string[];
  TagValues?: string[];
}
const DescribeTagsMessage = /*@__PURE__*/ __L.at(__c45, 4) as any as S.Schema<DescribeTagsMessage>;
export interface TaggedResource {
  Tag?: Tag;
  ResourceName?: string;
  ResourceType?: string;
}
const TaggedResource = /*@__PURE__*/ __L.at(__c45, 5) as any as S.Schema<TaggedResource>;
export type TaggedResourceList = TaggedResource[];
const TaggedResourceList = /*@__PURE__*/ __L.at(__c45, 6);
export interface TaggedResourceListMessage {
  TaggedResources?: TaggedResource[];
  Marker?: string;
}
const TaggedResourceListMessage = /*@__PURE__*/ __L.at(
  __c45,
  7,
) as any as S.Schema<TaggedResourceListMessage>;
export interface DescribeUsageLimitsMessage {
  UsageLimitId?: string;
  ClusterIdentifier?: string;
  FeatureType?: UsageLimitFeatureType;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: string[];
  TagValues?: string[];
}
const DescribeUsageLimitsMessage = /*@__PURE__*/ __L.at(
  __c46,
  0,
) as any as S.Schema<DescribeUsageLimitsMessage>;
export type UsageLimits = UsageLimit[];
const UsageLimits = /*@__PURE__*/ __L.at(__c46, 1);
export interface UsageLimitList {
  UsageLimits?: UsageLimit[];
  Marker?: string;
}
const UsageLimitList = /*@__PURE__*/ __L.at(__c46, 2) as any as S.Schema<UsageLimitList>;
export interface DisableLoggingMessage {
  ClusterIdentifier?: string;
  LogDestinationType?: LogDestinationType;
  LogExports?: string[];
}
const DisableLoggingMessage = /*@__PURE__*/ __L.at(
  __c46,
  3,
) as any as S.Schema<DisableLoggingMessage>;
export interface DisableSnapshotCopyMessage {
  ClusterIdentifier?: string;
}
const DisableSnapshotCopyMessage = /*@__PURE__*/ __L.at(
  __c46,
  4,
) as any as S.Schema<DisableSnapshotCopyMessage>;
export interface DisableSnapshotCopyResult {
  Cluster?: Cluster;
}
const DisableSnapshotCopyResult = /*@__PURE__*/ __L.at(
  __c46,
  5,
) as any as S.Schema<DisableSnapshotCopyResult>;
export interface DisassociateDataShareConsumerMessage {
  DataShareArn?: string;
  DisassociateEntireAccount?: boolean;
  ConsumerArn?: string;
  ConsumerRegion?: string;
}
const DisassociateDataShareConsumerMessage = /*@__PURE__*/ __L.at(
  __c46,
  6,
) as any as S.Schema<DisassociateDataShareConsumerMessage>;
export interface EnableLoggingMessage {
  ClusterIdentifier?: string;
  BucketName?: string;
  S3KeyPrefix?: string;
  LogDestinationType?: LogDestinationType;
  LogExports?: string[];
  S3TableKmsKeyId?: string;
  S3TableGranularity?: string;
}
const EnableLoggingMessage = /*@__PURE__*/ __L.at(
  __c46,
  7,
) as any as S.Schema<EnableLoggingMessage>;
export interface EnableSnapshotCopyMessage {
  ClusterIdentifier?: string;
  DestinationRegion?: string;
  RetentionPeriod?: number;
  SnapshotCopyGrantName?: string;
  ManualSnapshotRetentionPeriod?: number;
}
const EnableSnapshotCopyMessage = /*@__PURE__*/ __L.at(
  __c47,
  0,
) as any as S.Schema<EnableSnapshotCopyMessage>;
export interface EnableSnapshotCopyResult {
  Cluster?: Cluster;
}
const EnableSnapshotCopyResult = /*@__PURE__*/ __L.at(
  __c47,
  1,
) as any as S.Schema<EnableSnapshotCopyResult>;
export interface FailoverPrimaryComputeInputMessage {
  ClusterIdentifier?: string;
}
const FailoverPrimaryComputeInputMessage = /*@__PURE__*/ __L.at(
  __c47,
  2,
) as any as S.Schema<FailoverPrimaryComputeInputMessage>;
export interface FailoverPrimaryComputeResult {
  Cluster?: Cluster;
}
const FailoverPrimaryComputeResult = /*@__PURE__*/ __L.at(
  __c47,
  3,
) as any as S.Schema<FailoverPrimaryComputeResult>;
export type DbGroupList = string[];
const DbGroupList = /*@__PURE__*/ __L.at(__c47, 4);
export interface GetClusterCredentialsMessage {
  DbUser?: string;
  DbName?: string;
  ClusterIdentifier?: string;
  DurationSeconds?: number;
  AutoCreate?: boolean;
  DbGroups?: string[];
  CustomDomainName?: string;
}
const GetClusterCredentialsMessage = /*@__PURE__*/ __L.at(
  __c47,
  5,
) as any as S.Schema<GetClusterCredentialsMessage>;
export interface ClusterCredentials {
  DbUser?: string;
  DbPassword?: string | redacted.Redacted<string>;
  Expiration?: Date;
}
const ClusterCredentials = /*@__PURE__*/ __L.at(__c47, 6) as any as S.Schema<ClusterCredentials>;
export interface GetClusterCredentialsWithIAMMessage {
  DbName?: string;
  ClusterIdentifier?: string;
  DurationSeconds?: number;
  CustomDomainName?: string;
}
const GetClusterCredentialsWithIAMMessage = /*@__PURE__*/ __L.at(
  __c47,
  7,
) as any as S.Schema<GetClusterCredentialsWithIAMMessage>;
export interface ClusterExtendedCredentials {
  DbUser?: string;
  DbPassword?: string | redacted.Redacted<string>;
  Expiration?: Date;
  NextRefreshTime?: Date;
}
const ClusterExtendedCredentials = /*@__PURE__*/ __L.at(
  __c48,
  0,
) as any as S.Schema<ClusterExtendedCredentials>;
export type ClusterIdentifierList = string[];
const ClusterIdentifierList = /*@__PURE__*/ __L.at(__c48, 1);
export interface GetIdentityCenterAuthTokenRequest {
  ClusterIds?: string[];
}
const GetIdentityCenterAuthTokenRequest = /*@__PURE__*/ __L.at(
  __c48,
  2,
) as any as S.Schema<GetIdentityCenterAuthTokenRequest>;
export interface GetIdentityCenterAuthTokenResponse {
  Token?: string | redacted.Redacted<string>;
  ExpirationTime?: Date;
}
const GetIdentityCenterAuthTokenResponse = /*@__PURE__*/ __L.at(
  __c48,
  3,
) as any as S.Schema<GetIdentityCenterAuthTokenResponse>;
export type ReservedNodeExchangeActionType = "restore-cluster" | "resize-cluster" | (string & {});
const ReservedNodeExchangeActionType = S.String;

export interface GetReservedNodeExchangeConfigurationOptionsInputMessage {
  ActionType?: ReservedNodeExchangeActionType;
  ClusterIdentifier?: string;
  SnapshotIdentifier?: string;
  MaxRecords?: number;
  Marker?: string;
}
const GetReservedNodeExchangeConfigurationOptionsInputMessage = /*@__PURE__*/ __L.at(
  __c48,
  4,
) as any as S.Schema<GetReservedNodeExchangeConfigurationOptionsInputMessage>;
export interface ReservedNodeConfigurationOption {
  SourceReservedNode?: ReservedNode;
  TargetReservedNodeCount?: number;
  TargetReservedNodeOffering?: ReservedNodeOffering;
}
const ReservedNodeConfigurationOption = /*@__PURE__*/ __L.at(
  __c48,
  5,
) as any as S.Schema<ReservedNodeConfigurationOption>;
export type ReservedNodeConfigurationOptionList = ReservedNodeConfigurationOption[];
const ReservedNodeConfigurationOptionList = /*@__PURE__*/ __L.at(__c48, 6);
export interface GetReservedNodeExchangeConfigurationOptionsOutputMessage {
  Marker?: string;
  ReservedNodeConfigurationOptionList?: ReservedNodeConfigurationOption[];
}
const GetReservedNodeExchangeConfigurationOptionsOutputMessage = /*@__PURE__*/ __L.at(
  __c48,
  7,
) as any as S.Schema<GetReservedNodeExchangeConfigurationOptionsOutputMessage>;
export interface GetReservedNodeExchangeOfferingsInputMessage {
  ReservedNodeId?: string;
  MaxRecords?: number;
  Marker?: string;
}
const GetReservedNodeExchangeOfferingsInputMessage = /*@__PURE__*/ __L.at(
  __c49,
  0,
) as any as S.Schema<GetReservedNodeExchangeOfferingsInputMessage>;
export interface GetReservedNodeExchangeOfferingsOutputMessage {
  Marker?: string;
  ReservedNodeOfferings?: ReservedNodeOffering[];
}
const GetReservedNodeExchangeOfferingsOutputMessage = /*@__PURE__*/ __L.at(
  __c49,
  1,
) as any as S.Schema<GetReservedNodeExchangeOfferingsOutputMessage>;
export interface GetResourcePolicyMessage {
  ResourceArn?: string;
}
const GetResourcePolicyMessage = /*@__PURE__*/ __L.at(
  __c49,
  2,
) as any as S.Schema<GetResourcePolicyMessage>;
export interface ResourcePolicy {
  ResourceArn?: string;
  Policy?: string;
}
const ResourcePolicy = /*@__PURE__*/ __L.at(__c49, 3) as any as S.Schema<ResourcePolicy>;
export interface GetResourcePolicyResult {
  ResourcePolicy?: ResourcePolicy;
}
const GetResourcePolicyResult = /*@__PURE__*/ __L.at(
  __c49,
  4,
) as any as S.Schema<GetResourcePolicyResult>;
export interface ListRecommendationsMessage {
  ClusterIdentifier?: string;
  NamespaceArn?: string;
  MaxRecords?: number;
  Marker?: string;
}
const ListRecommendationsMessage = /*@__PURE__*/ __L.at(
  __c49,
  5,
) as any as S.Schema<ListRecommendationsMessage>;
export type ImpactRankingType = "HIGH" | "MEDIUM" | "LOW" | (string & {});
const ImpactRankingType = S.String;

export type RecommendedActionType = "SQL" | "CLI" | (string & {});
const RecommendedActionType = S.String;

export interface RecommendedAction {
  Text?: string;
  Database?: string;
  Command?: string;
  Type?: RecommendedActionType;
}
const RecommendedAction = /*@__PURE__*/ __L.at(__c49, 6) as any as S.Schema<RecommendedAction>;
export type RecommendedActionList = RecommendedAction[];
const RecommendedActionList = /*@__PURE__*/ __L.at(__c49, 7);
export interface ReferenceLink {
  Text?: string;
  Link?: string;
}
const ReferenceLink = /*@__PURE__*/ __L.at(__c50, 0) as any as S.Schema<ReferenceLink>;
export type ReferenceLinkList = ReferenceLink[];
const ReferenceLinkList = /*@__PURE__*/ __L.at(__c50, 1);
export interface Recommendation {
  Id?: string;
  ClusterIdentifier?: string;
  NamespaceArn?: string;
  CreatedAt?: Date;
  RecommendationType?: string;
  Title?: string;
  Description?: string;
  Observation?: string;
  ImpactRanking?: ImpactRankingType;
  RecommendationText?: string;
  RecommendedActions?: RecommendedAction[];
  ReferenceLinks?: ReferenceLink[];
}
const Recommendation = /*@__PURE__*/ __L.at(__c50, 2) as any as S.Schema<Recommendation>;
export type RecommendationList = Recommendation[];
const RecommendationList = /*@__PURE__*/ __L.at(__c50, 3);
export interface ListRecommendationsResult {
  Recommendations?: Recommendation[];
  Marker?: string;
}
const ListRecommendationsResult = /*@__PURE__*/ __L.at(
  __c50,
  4,
) as any as S.Schema<ListRecommendationsResult>;
export interface ModifyAquaInputMessage {
  ClusterIdentifier?: string;
  AquaConfigurationStatus?: AquaConfigurationStatus;
}
const ModifyAquaInputMessage = /*@__PURE__*/ __L.at(
  __c50,
  5,
) as any as S.Schema<ModifyAquaInputMessage>;
export interface ModifyAquaOutputMessage {
  AquaConfiguration?: AquaConfiguration;
}
const ModifyAquaOutputMessage = /*@__PURE__*/ __L.at(
  __c50,
  6,
) as any as S.Schema<ModifyAquaOutputMessage>;
export interface ModifyAuthenticationProfileMessage {
  AuthenticationProfileName?: string;
  AuthenticationProfileContent?: string;
}
const ModifyAuthenticationProfileMessage = /*@__PURE__*/ __L.at(
  __c50,
  7,
) as any as S.Schema<ModifyAuthenticationProfileMessage>;
export interface ModifyAuthenticationProfileResult {
  AuthenticationProfileName?: string;
  AuthenticationProfileContent?: string;
}
const ModifyAuthenticationProfileResult = /*@__PURE__*/ __L.at(
  __c51,
  0,
) as any as S.Schema<ModifyAuthenticationProfileResult>;
export interface ModifyClusterMessage {
  ClusterIdentifier?: string;
  ClusterType?: string;
  NodeType?: string;
  NumberOfNodes?: number;
  ClusterSecurityGroups?: string[];
  VpcSecurityGroupIds?: string[];
  MasterUserPassword?: string | redacted.Redacted<string>;
  ClusterParameterGroupName?: string;
  AutomatedSnapshotRetentionPeriod?: number;
  ManualSnapshotRetentionPeriod?: number;
  PreferredMaintenanceWindow?: string;
  ClusterVersion?: string;
  AllowVersionUpgrade?: boolean;
  HsmClientCertificateIdentifier?: string;
  HsmConfigurationIdentifier?: string;
  NewClusterIdentifier?: string;
  PubliclyAccessible?: boolean;
  ElasticIp?: string;
  EnhancedVpcRouting?: boolean;
  MaintenanceTrackName?: string;
  Encrypted?: boolean;
  KmsKeyId?: string;
  AvailabilityZoneRelocation?: boolean;
  AvailabilityZone?: string;
  Port?: number;
  ManageMasterPassword?: boolean;
  MasterPasswordSecretKmsKeyId?: string;
  IpAddressType?: string;
  MultiAZ?: boolean;
  ExtraComputeForAutomaticOptimization?: boolean;
}
const ModifyClusterMessage = /*@__PURE__*/ __L.at(
  __c51,
  1,
) as any as S.Schema<ModifyClusterMessage>;
export interface ModifyClusterResult {
  Cluster?: Cluster;
}
const ModifyClusterResult = /*@__PURE__*/ __L.at(__c51, 2) as any as S.Schema<ModifyClusterResult>;
export interface ModifyClusterDbRevisionMessage {
  ClusterIdentifier?: string;
  RevisionTarget?: string;
}
const ModifyClusterDbRevisionMessage = /*@__PURE__*/ __L.at(
  __c51,
  3,
) as any as S.Schema<ModifyClusterDbRevisionMessage>;
export interface ModifyClusterDbRevisionResult {
  Cluster?: Cluster;
}
const ModifyClusterDbRevisionResult = /*@__PURE__*/ __L.at(
  __c51,
  4,
) as any as S.Schema<ModifyClusterDbRevisionResult>;
export interface ModifyClusterIamRolesMessage {
  ClusterIdentifier?: string;
  AddIamRoles?: string[];
  RemoveIamRoles?: string[];
  DefaultIamRoleArn?: string;
}
const ModifyClusterIamRolesMessage = /*@__PURE__*/ __L.at(
  __c51,
  5,
) as any as S.Schema<ModifyClusterIamRolesMessage>;
export interface ModifyClusterIamRolesResult {
  Cluster?: Cluster;
}
const ModifyClusterIamRolesResult = /*@__PURE__*/ __L.at(
  __c51,
  6,
) as any as S.Schema<ModifyClusterIamRolesResult>;
export interface ModifyClusterMaintenanceMessage {
  ClusterIdentifier?: string;
  DeferMaintenance?: boolean;
  DeferMaintenanceIdentifier?: string;
  DeferMaintenanceStartTime?: Date;
  DeferMaintenanceEndTime?: Date;
  DeferMaintenanceDuration?: number;
}
const ModifyClusterMaintenanceMessage = /*@__PURE__*/ __L.at(
  __c51,
  7,
) as any as S.Schema<ModifyClusterMaintenanceMessage>;
export interface ModifyClusterMaintenanceResult {
  Cluster?: Cluster;
}
const ModifyClusterMaintenanceResult = /*@__PURE__*/ __L.at(
  __c52,
  0,
) as any as S.Schema<ModifyClusterMaintenanceResult>;
export interface ModifyClusterParameterGroupMessage {
  ParameterGroupName?: string;
  Parameters?: Parameter[];
}
const ModifyClusterParameterGroupMessage = /*@__PURE__*/ __L.at(
  __c52,
  1,
) as any as S.Schema<ModifyClusterParameterGroupMessage>;
export interface ClusterParameterGroupNameMessage {
  ParameterGroupName?: string;
  ParameterGroupStatus?: string;
}
const ClusterParameterGroupNameMessage = /*@__PURE__*/ __L.at(
  __c52,
  2,
) as any as S.Schema<ClusterParameterGroupNameMessage>;
export interface ModifyClusterSnapshotMessage {
  SnapshotIdentifier?: string;
  ManualSnapshotRetentionPeriod?: number;
  Force?: boolean;
}
const ModifyClusterSnapshotMessage = /*@__PURE__*/ __L.at(
  __c52,
  3,
) as any as S.Schema<ModifyClusterSnapshotMessage>;
export interface ModifyClusterSnapshotResult {
  Snapshot?: Snapshot;
}
const ModifyClusterSnapshotResult = /*@__PURE__*/ __L.at(
  __c52,
  4,
) as any as S.Schema<ModifyClusterSnapshotResult>;
export interface ModifyClusterSnapshotScheduleMessage {
  ClusterIdentifier?: string;
  ScheduleIdentifier?: string;
  DisassociateSchedule?: boolean;
}
const ModifyClusterSnapshotScheduleMessage = /*@__PURE__*/ __L.at(
  __c52,
  5,
) as any as S.Schema<ModifyClusterSnapshotScheduleMessage>;
export interface ModifyClusterSnapshotScheduleResponse {}
const ModifyClusterSnapshotScheduleResponse = /*@__PURE__*/ __L.at(
  __c52,
  6,
) as any as S.Schema<ModifyClusterSnapshotScheduleResponse>;
export interface ModifyClusterSubnetGroupMessage {
  ClusterSubnetGroupName?: string;
  Description?: string;
  SubnetIds?: string[];
}
const ModifyClusterSubnetGroupMessage = /*@__PURE__*/ __L.at(
  __c52,
  7,
) as any as S.Schema<ModifyClusterSubnetGroupMessage>;
export interface ModifyClusterSubnetGroupResult {
  ClusterSubnetGroup?: ClusterSubnetGroup;
}
const ModifyClusterSubnetGroupResult = /*@__PURE__*/ __L.at(
  __c53,
  0,
) as any as S.Schema<ModifyClusterSubnetGroupResult>;
export interface ModifyCustomDomainAssociationMessage {
  CustomDomainName?: string;
  CustomDomainCertificateArn?: string;
  ClusterIdentifier?: string;
}
const ModifyCustomDomainAssociationMessage = /*@__PURE__*/ __L.at(
  __c53,
  1,
) as any as S.Schema<ModifyCustomDomainAssociationMessage>;
export interface ModifyCustomDomainAssociationResult {
  CustomDomainName?: string;
  CustomDomainCertificateArn?: string;
  ClusterIdentifier?: string;
  CustomDomainCertExpiryTime?: string;
}
const ModifyCustomDomainAssociationResult = /*@__PURE__*/ __L.at(
  __c53,
  2,
) as any as S.Schema<ModifyCustomDomainAssociationResult>;
export interface ModifyEndpointAccessMessage {
  EndpointName?: string;
  VpcSecurityGroupIds?: string[];
}
const ModifyEndpointAccessMessage = /*@__PURE__*/ __L.at(
  __c53,
  3,
) as any as S.Schema<ModifyEndpointAccessMessage>;
export interface ModifyEventSubscriptionMessage {
  SubscriptionName?: string;
  SnsTopicArn?: string;
  SourceType?: string;
  SourceIds?: string[];
  EventCategories?: string[];
  Severity?: string;
  Enabled?: boolean;
}
const ModifyEventSubscriptionMessage = /*@__PURE__*/ __L.at(
  __c53,
  4,
) as any as S.Schema<ModifyEventSubscriptionMessage>;
export interface ModifyEventSubscriptionResult {
  EventSubscription?: EventSubscription;
}
const ModifyEventSubscriptionResult = /*@__PURE__*/ __L.at(
  __c53,
  5,
) as any as S.Schema<ModifyEventSubscriptionResult>;
export interface ModifyIntegrationMessage {
  IntegrationArn?: string;
  Description?: string;
  IntegrationName?: string;
}
const ModifyIntegrationMessage = /*@__PURE__*/ __L.at(
  __c53,
  6,
) as any as S.Schema<ModifyIntegrationMessage>;
export type LakehouseRegistration = "Register" | "Deregister" | (string & {});
const LakehouseRegistration = S.String;

export type LakehouseIdcRegistration = "Associate" | "Disassociate" | (string & {});
const LakehouseIdcRegistration = S.String;

export interface ModifyLakehouseConfigurationMessage {
  ClusterIdentifier?: string;
  LakehouseRegistration?: LakehouseRegistration;
  CatalogName?: string;
  LakehouseIdcRegistration?: LakehouseIdcRegistration;
  LakehouseIdcApplicationArn?: string;
  DryRun?: boolean;
}
const ModifyLakehouseConfigurationMessage = /*@__PURE__*/ __L.at(
  __c53,
  7,
) as any as S.Schema<ModifyLakehouseConfigurationMessage>;
export interface LakehouseConfiguration {
  ClusterIdentifier?: string;
  LakehouseIdcApplicationArn?: string;
  LakehouseRegistrationStatus?: string;
  CatalogArn?: string;
}
const LakehouseConfiguration = /*@__PURE__*/ __L.at(
  __c54,
  0,
) as any as S.Schema<LakehouseConfiguration>;
export interface ModifyQev2IdcApplicationMessage {
  Qev2IdcApplicationArn?: string;
  IdcDisplayName?: string;
}
const ModifyQev2IdcApplicationMessage = /*@__PURE__*/ __L.at(
  __c54,
  1,
) as any as S.Schema<ModifyQev2IdcApplicationMessage>;
export interface ModifyQev2IdcApplicationResult {
  Qev2IdcApplication?: Qev2IdcApplication;
}
const ModifyQev2IdcApplicationResult = /*@__PURE__*/ __L.at(
  __c54,
  2,
) as any as S.Schema<ModifyQev2IdcApplicationResult>;
export interface ModifyRedshiftIdcApplicationMessage {
  RedshiftIdcApplicationArn?: string;
  IdentityNamespace?: string;
  IamRoleArn?: string;
  IdcDisplayName?: string;
  AuthorizedTokenIssuerList?: AuthorizedTokenIssuer[];
  ServiceIntegrations?: ServiceIntegrationsUnion[];
}
const ModifyRedshiftIdcApplicationMessage = /*@__PURE__*/ __L.at(
  __c54,
  3,
) as any as S.Schema<ModifyRedshiftIdcApplicationMessage>;
export interface ModifyRedshiftIdcApplicationResult {
  RedshiftIdcApplication?: RedshiftIdcApplication;
}
const ModifyRedshiftIdcApplicationResult = /*@__PURE__*/ __L.at(
  __c54,
  4,
) as any as S.Schema<ModifyRedshiftIdcApplicationResult>;
export interface ModifyScheduledActionMessage {
  ScheduledActionName?: string;
  TargetAction?: ScheduledActionType;
  Schedule?: string;
  IamRole?: string;
  ScheduledActionDescription?: string;
  StartTime?: Date;
  EndTime?: Date;
  Enable?: boolean;
}
const ModifyScheduledActionMessage = /*@__PURE__*/ __L.at(
  __c54,
  5,
) as any as S.Schema<ModifyScheduledActionMessage>;
export interface ModifySnapshotCopyRetentionPeriodMessage {
  ClusterIdentifier?: string;
  RetentionPeriod?: number;
  Manual?: boolean;
}
const ModifySnapshotCopyRetentionPeriodMessage = /*@__PURE__*/ __L.at(
  __c54,
  6,
) as any as S.Schema<ModifySnapshotCopyRetentionPeriodMessage>;
export interface ModifySnapshotCopyRetentionPeriodResult {
  Cluster?: Cluster;
}
const ModifySnapshotCopyRetentionPeriodResult = /*@__PURE__*/ __L.at(
  __c54,
  7,
) as any as S.Schema<ModifySnapshotCopyRetentionPeriodResult>;
export interface ModifySnapshotScheduleMessage {
  ScheduleIdentifier?: string;
  ScheduleDefinitions?: string[];
}
const ModifySnapshotScheduleMessage = /*@__PURE__*/ __L.at(
  __c55,
  0,
) as any as S.Schema<ModifySnapshotScheduleMessage>;
export interface ModifyUsageLimitMessage {
  UsageLimitId?: string;
  Amount?: number;
  BreachAction?: UsageLimitBreachAction;
}
const ModifyUsageLimitMessage = /*@__PURE__*/ __L.at(
  __c55,
  1,
) as any as S.Schema<ModifyUsageLimitMessage>;
export interface PauseClusterResult {
  Cluster?: Cluster;
}
const PauseClusterResult = /*@__PURE__*/ __L.at(__c55, 2) as any as S.Schema<PauseClusterResult>;
export interface PurchaseReservedNodeOfferingMessage {
  ReservedNodeOfferingId?: string;
  NodeCount?: number;
}
const PurchaseReservedNodeOfferingMessage = /*@__PURE__*/ __L.at(
  __c55,
  3,
) as any as S.Schema<PurchaseReservedNodeOfferingMessage>;
export interface PurchaseReservedNodeOfferingResult {
  ReservedNode?: ReservedNode;
}
const PurchaseReservedNodeOfferingResult = /*@__PURE__*/ __L.at(
  __c55,
  4,
) as any as S.Schema<PurchaseReservedNodeOfferingResult>;
export interface PutResourcePolicyMessage {
  ResourceArn?: string;
  Policy?: string;
}
const PutResourcePolicyMessage = /*@__PURE__*/ __L.at(
  __c55,
  5,
) as any as S.Schema<PutResourcePolicyMessage>;
export interface PutResourcePolicyResult {
  ResourcePolicy?: ResourcePolicy;
}
const PutResourcePolicyResult = /*@__PURE__*/ __L.at(
  __c55,
  6,
) as any as S.Schema<PutResourcePolicyResult>;
export interface RebootClusterMessage {
  ClusterIdentifier?: string;
}
const RebootClusterMessage = /*@__PURE__*/ __L.at(
  __c55,
  7,
) as any as S.Schema<RebootClusterMessage>;
export interface RebootClusterResult {
  Cluster?: Cluster;
}
const RebootClusterResult = /*@__PURE__*/ __L.at(__c56, 0) as any as S.Schema<RebootClusterResult>;
export interface RegisterNamespaceInputMessage {
  NamespaceIdentifier?: NamespaceIdentifierUnion;
  ConsumerIdentifiers?: string[];
}
const RegisterNamespaceInputMessage = /*@__PURE__*/ __L.at(
  __c56,
  1,
) as any as S.Schema<RegisterNamespaceInputMessage>;
export interface RegisterNamespaceOutputMessage {
  Status?: NamespaceRegistrationStatus;
}
const RegisterNamespaceOutputMessage = /*@__PURE__*/ __L.at(
  __c56,
  2,
) as any as S.Schema<RegisterNamespaceOutputMessage>;
export interface RejectDataShareMessage {
  DataShareArn?: string;
}
const RejectDataShareMessage = /*@__PURE__*/ __L.at(
  __c56,
  3,
) as any as S.Schema<RejectDataShareMessage>;
export interface ResetClusterParameterGroupMessage {
  ParameterGroupName?: string;
  ResetAllParameters?: boolean;
  Parameters?: Parameter[];
}
const ResetClusterParameterGroupMessage = /*@__PURE__*/ __L.at(
  __c56,
  4,
) as any as S.Schema<ResetClusterParameterGroupMessage>;
export interface ResizeClusterResult {
  Cluster?: Cluster;
}
const ResizeClusterResult = /*@__PURE__*/ __L.at(__c56, 5) as any as S.Schema<ResizeClusterResult>;
export interface RestoreFromClusterSnapshotMessage {
  ClusterIdentifier?: string;
  SnapshotIdentifier?: string;
  SnapshotArn?: string;
  SnapshotClusterIdentifier?: string;
  Port?: number;
  AvailabilityZone?: string;
  AllowVersionUpgrade?: boolean;
  ClusterSubnetGroupName?: string;
  PubliclyAccessible?: boolean;
  OwnerAccount?: string;
  HsmClientCertificateIdentifier?: string;
  HsmConfigurationIdentifier?: string;
  ElasticIp?: string;
  ClusterParameterGroupName?: string;
  ClusterSecurityGroups?: string[];
  VpcSecurityGroupIds?: string[];
  PreferredMaintenanceWindow?: string;
  AutomatedSnapshotRetentionPeriod?: number;
  ManualSnapshotRetentionPeriod?: number;
  KmsKeyId?: string;
  NodeType?: string;
  EnhancedVpcRouting?: boolean;
  AdditionalInfo?: string;
  IamRoles?: string[];
  MaintenanceTrackName?: string;
  SnapshotScheduleIdentifier?: string;
  NumberOfNodes?: number;
  AvailabilityZoneRelocation?: boolean;
  AquaConfigurationStatus?: AquaConfigurationStatus;
  DefaultIamRoleArn?: string;
  ReservedNodeId?: string;
  TargetReservedNodeOfferingId?: string;
  Encrypted?: boolean;
  ManageMasterPassword?: boolean;
  MasterPasswordSecretKmsKeyId?: string;
  IpAddressType?: string;
  MultiAZ?: boolean;
  CatalogName?: string;
  RedshiftIdcApplicationArn?: string;
}
const RestoreFromClusterSnapshotMessage = /*@__PURE__*/ __L.at(
  __c56,
  6,
) as any as S.Schema<RestoreFromClusterSnapshotMessage>;
export interface RestoreFromClusterSnapshotResult {
  Cluster?: Cluster;
}
const RestoreFromClusterSnapshotResult = /*@__PURE__*/ __L.at(
  __c56,
  7,
) as any as S.Schema<RestoreFromClusterSnapshotResult>;
export interface RestoreTableFromClusterSnapshotMessage {
  ClusterIdentifier?: string;
  SnapshotIdentifier?: string;
  SourceDatabaseName?: string;
  SourceSchemaName?: string;
  SourceTableName?: string;
  TargetDatabaseName?: string;
  TargetSchemaName?: string;
  NewTableName?: string;
  EnableCaseSensitiveIdentifier?: boolean;
}
const RestoreTableFromClusterSnapshotMessage = /*@__PURE__*/ __L.at(
  __c57,
  0,
) as any as S.Schema<RestoreTableFromClusterSnapshotMessage>;
export interface RestoreTableFromClusterSnapshotResult {
  TableRestoreStatus?: TableRestoreStatus;
}
const RestoreTableFromClusterSnapshotResult = /*@__PURE__*/ __L.at(
  __c57,
  1,
) as any as S.Schema<RestoreTableFromClusterSnapshotResult>;
export interface ResumeClusterResult {
  Cluster?: Cluster;
}
const ResumeClusterResult = /*@__PURE__*/ __L.at(__c57, 2) as any as S.Schema<ResumeClusterResult>;
export interface RevokeClusterSecurityGroupIngressMessage {
  ClusterSecurityGroupName?: string;
  CIDRIP?: string;
  EC2SecurityGroupName?: string;
  EC2SecurityGroupOwnerId?: string;
}
const RevokeClusterSecurityGroupIngressMessage = /*@__PURE__*/ __L.at(
  __c57,
  3,
) as any as S.Schema<RevokeClusterSecurityGroupIngressMessage>;
export interface RevokeClusterSecurityGroupIngressResult {
  ClusterSecurityGroup?: ClusterSecurityGroup;
}
const RevokeClusterSecurityGroupIngressResult = /*@__PURE__*/ __L.at(
  __c57,
  4,
) as any as S.Schema<RevokeClusterSecurityGroupIngressResult>;
export interface RevokeEndpointAccessMessage {
  ClusterIdentifier?: string;
  Account?: string;
  VpcIds?: string[];
  Force?: boolean;
}
const RevokeEndpointAccessMessage = /*@__PURE__*/ __L.at(
  __c57,
  5,
) as any as S.Schema<RevokeEndpointAccessMessage>;
export interface RevokeSnapshotAccessMessage {
  SnapshotIdentifier?: string;
  SnapshotArn?: string;
  SnapshotClusterIdentifier?: string;
  AccountWithRestoreAccess?: string;
}
const RevokeSnapshotAccessMessage = /*@__PURE__*/ __L.at(
  __c57,
  6,
) as any as S.Schema<RevokeSnapshotAccessMessage>;
export interface RevokeSnapshotAccessResult {
  Snapshot?: Snapshot;
}
const RevokeSnapshotAccessResult = /*@__PURE__*/ __L.at(
  __c57,
  7,
) as any as S.Schema<RevokeSnapshotAccessResult>;
export interface RotateEncryptionKeyMessage {
  ClusterIdentifier?: string;
}
const RotateEncryptionKeyMessage = /*@__PURE__*/ __L.at(
  __c58,
  0,
) as any as S.Schema<RotateEncryptionKeyMessage>;
export interface RotateEncryptionKeyResult {
  Cluster?: Cluster;
}
const RotateEncryptionKeyResult = /*@__PURE__*/ __L.at(
  __c58,
  1,
) as any as S.Schema<RotateEncryptionKeyResult>;
export interface UpdatePartnerStatusInputMessage {
  AccountId?: string;
  ClusterIdentifier?: string;
  DatabaseName?: string;
  PartnerName?: string;
  Status?: PartnerIntegrationStatus;
  StatusMessage?: string;
}
const UpdatePartnerStatusInputMessage = /*@__PURE__*/ __L.at(
  __c58,
  2,
) as any as S.Schema<UpdatePartnerStatusInputMessage>;
export type ExceptionMessage = string;
export type AcceptReservedNodeExchangeError =
  | DependentServiceUnavailableFault
  | InvalidReservedNodeStateFault
  | ReservedNodeAlreadyExistsFault
  | ReservedNodeAlreadyMigratedFault
  | ReservedNodeNotFoundFault
  | ReservedNodeOfferingNotFoundFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the
 * configuration (term, payment type, or number of nodes) and no additional costs.
 */
export const acceptReservedNodeExchange: API.OperationMethod<
  AcceptReservedNodeExchangeInputMessage,
  AcceptReservedNodeExchangeOutputMessage,
  AcceptReservedNodeExchangeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AcceptReservedNodeExchangeInputMessage,
  output: AcceptReservedNodeExchangeOutputMessage,
  errors: [
    DependentServiceUnavailableFault,
    InvalidReservedNodeStateFault,
    ReservedNodeAlreadyExistsFault,
    ReservedNodeAlreadyMigratedFault,
    ReservedNodeNotFoundFault,
    ReservedNodeOfferingNotFoundFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcceptReservedNodeExchange",
}));

export type AddPartnerError =
  | ClusterNotFoundFault
  | PartnerNotFoundFault
  | UnauthorizedPartnerIntegrationFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Adds a partner integration to a cluster.
 * This operation authorizes a partner to push status updates for the specified database.
 * To complete the integration, you also set up the integration on the partner website.
 */
export const addPartner: API.OperationMethod<
  PartnerIntegrationInputMessage,
  PartnerIntegrationOutputMessage,
  AddPartnerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PartnerIntegrationInputMessage,
  output: PartnerIntegrationOutputMessage,
  errors: [
    ClusterNotFoundFault,
    PartnerNotFoundFault,
    UnauthorizedPartnerIntegrationFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddPartner",
}));

export type AssociateDataShareConsumerError =
  | InvalidDataShareFault
  | InvalidNamespaceFault
  | CommonErrors;
/**
 * From a datashare consumer account, associates a datashare with the
 * account (AssociateEntireAccount) or the specified namespace (ConsumerArn). If you make this association, the consumer
 * can consume the datashare.
 */
export const associateDataShareConsumer: API.OperationMethod<
  AssociateDataShareConsumerMessage,
  DataShare,
  AssociateDataShareConsumerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateDataShareConsumerMessage,
  output: DataShare,
  errors: [InvalidDataShareFault, InvalidNamespaceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateDataShareConsumer",
}));

export type AuthorizeClusterSecurityGroupIngressError =
  | AuthorizationAlreadyExistsFault
  | AuthorizationQuotaExceededFault
  | ClusterSecurityGroupNotFoundFault
  | InvalidClusterSecurityGroupStateFault
  | CommonErrors;
/**
 * Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether
 * the application accessing your cluster is running on the Internet or an Amazon EC2
 * instance, you can authorize inbound access to either a Classless Interdomain Routing
 * (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as
 * many as 20 ingress rules to an Amazon Redshift security group.
 *
 * If you authorize access to an Amazon EC2 security group, specify
 * *EC2SecurityGroupName* and
 * *EC2SecurityGroupOwnerId*. The Amazon EC2 security group and
 * Amazon Redshift cluster must be in the same Amazon Web Services Region.
 *
 * If you authorize access to a CIDR/IP address range, specify
 * *CIDRIP*. For an overview of CIDR blocks, see the Wikipedia
 * article on Classless Inter-Domain Routing.
 *
 * You must also associate the security group with a cluster so that clients running
 * on these IP addresses or the EC2 instance are authorized to connect to the cluster. For
 * information about managing security groups, go to Working with Security
 * Groups in the *Amazon Redshift Cluster Management Guide*.
 */
export const authorizeClusterSecurityGroupIngress: API.OperationMethod<
  AuthorizeClusterSecurityGroupIngressMessage,
  AuthorizeClusterSecurityGroupIngressResult,
  AuthorizeClusterSecurityGroupIngressError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AuthorizeClusterSecurityGroupIngressMessage,
  output: AuthorizeClusterSecurityGroupIngressResult,
  errors: [
    AuthorizationAlreadyExistsFault,
    AuthorizationQuotaExceededFault,
    ClusterSecurityGroupNotFoundFault,
    InvalidClusterSecurityGroupStateFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AuthorizeClusterSecurityGroupIngress",
}));

export type AuthorizeDataShareError = InvalidDataShareFault | CommonErrors;
/**
 * From a data producer account, authorizes the sharing of a datashare with one or more
 * consumer accounts or managing entities. To authorize a datashare for a data consumer,
 * the producer account must have the correct access permissions.
 */
export const authorizeDataShare: API.OperationMethod<
  AuthorizeDataShareMessage,
  DataShare,
  AuthorizeDataShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AuthorizeDataShareMessage,
  output: DataShare,
  errors: [InvalidDataShareFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AuthorizeDataShare",
}));

export type AuthorizeEndpointAccessError =
  | ClusterNotFoundFault
  | EndpointAuthorizationAlreadyExistsFault
  | EndpointAuthorizationsPerClusterLimitExceededFault
  | InvalidAuthorizationStateFault
  | InvalidClusterStateFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Grants access to a cluster.
 */
export const authorizeEndpointAccess: API.OperationMethod<
  AuthorizeEndpointAccessMessage,
  EndpointAuthorization,
  AuthorizeEndpointAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AuthorizeEndpointAccessMessage,
  output: EndpointAuthorization,
  errors: [
    ClusterNotFoundFault,
    EndpointAuthorizationAlreadyExistsFault,
    EndpointAuthorizationsPerClusterLimitExceededFault,
    InvalidAuthorizationStateFault,
    InvalidClusterStateFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AuthorizeEndpointAccess",
}));

export type AuthorizeSnapshotAccessError =
  | AuthorizationAlreadyExistsFault
  | AuthorizationQuotaExceededFault
  | ClusterSnapshotNotFoundFault
  | DependentServiceRequestThrottlingFault
  | InvalidClusterSnapshotStateFault
  | LimitExceededFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Authorizes the specified Amazon Web Services account to restore the specified
 * snapshot.
 *
 * For more information about working with snapshots, go to
 * Amazon Redshift Snapshots
 * in the *Amazon Redshift Cluster Management Guide*.
 */
export const authorizeSnapshotAccess: API.OperationMethod<
  AuthorizeSnapshotAccessMessage,
  AuthorizeSnapshotAccessResult,
  AuthorizeSnapshotAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AuthorizeSnapshotAccessMessage,
  output: AuthorizeSnapshotAccessResult,
  errors: [
    AuthorizationAlreadyExistsFault,
    AuthorizationQuotaExceededFault,
    ClusterSnapshotNotFoundFault,
    DependentServiceRequestThrottlingFault,
    InvalidClusterSnapshotStateFault,
    LimitExceededFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AuthorizeSnapshotAccess",
}));

export type BatchDeleteClusterSnapshotsError = BatchDeleteRequestSizeExceededFault | CommonErrors;
/**
 * Deletes a set of cluster snapshots.
 */
export const batchDeleteClusterSnapshots: API.OperationMethod<
  BatchDeleteClusterSnapshotsRequest,
  BatchDeleteClusterSnapshotsResult,
  BatchDeleteClusterSnapshotsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchDeleteClusterSnapshotsRequest,
  output: BatchDeleteClusterSnapshotsResult,
  errors: [BatchDeleteRequestSizeExceededFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeleteClusterSnapshots",
}));

export type BatchModifyClusterSnapshotsError =
  | BatchModifyClusterSnapshotsLimitExceededFault
  | InvalidRetentionPeriodFault
  | CommonErrors;
/**
 * Modifies the settings for a set of cluster snapshots.
 */
export const batchModifyClusterSnapshots: API.OperationMethod<
  BatchModifyClusterSnapshotsMessage,
  BatchModifyClusterSnapshotsOutputMessage,
  BatchModifyClusterSnapshotsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchModifyClusterSnapshotsMessage,
  output: BatchModifyClusterSnapshotsOutputMessage,
  errors: [BatchModifyClusterSnapshotsLimitExceededFault, InvalidRetentionPeriodFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchModifyClusterSnapshots",
}));

export type CancelResizeError =
  | ClusterNotFoundFault
  | InvalidClusterStateFault
  | ResizeNotFoundFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Cancels a resize operation for a cluster.
 */
export const cancelResize: API.OperationMethod<
  CancelResizeMessage,
  ResizeProgressMessage,
  CancelResizeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelResizeMessage,
  output: ResizeProgressMessage,
  errors: [
    ClusterNotFoundFault,
    InvalidClusterStateFault,
    ResizeNotFoundFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelResize",
}));

export type CopyClusterSnapshotError =
  | ClusterNotFoundFault
  | ClusterSnapshotAlreadyExistsFault
  | ClusterSnapshotNotFoundFault
  | ClusterSnapshotQuotaExceededFault
  | InvalidClusterSnapshotStateFault
  | InvalidRetentionPeriodFault
  | CommonErrors;
/**
 * Copies the specified automated cluster snapshot to a new manual cluster snapshot.
 * The source must be an automated snapshot and it must be in the available
 * state.
 *
 * When you delete a cluster, Amazon Redshift deletes any automated snapshots of the
 * cluster. Also, when the retention period of the snapshot expires, Amazon Redshift
 * automatically deletes it. If you want to keep an automated snapshot for a longer period,
 * you can make a manual copy of the snapshot. Manual snapshots are retained until you
 * delete them.
 *
 * For more information about working with snapshots, go to
 * Amazon Redshift Snapshots
 * in the *Amazon Redshift Cluster Management Guide*.
 */
export const copyClusterSnapshot: API.OperationMethod<
  CopyClusterSnapshotMessage,
  CopyClusterSnapshotResult,
  CopyClusterSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CopyClusterSnapshotMessage,
  output: CopyClusterSnapshotResult,
  errors: [
    ClusterNotFoundFault,
    ClusterSnapshotAlreadyExistsFault,
    ClusterSnapshotNotFoundFault,
    ClusterSnapshotQuotaExceededFault,
    InvalidClusterSnapshotStateFault,
    InvalidRetentionPeriodFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CopyClusterSnapshot",
}));

export type CreateAuthenticationProfileError =
  | AuthenticationProfileAlreadyExistsFault
  | AuthenticationProfileQuotaExceededFault
  | InvalidAuthenticationProfileRequestFault
  | CommonErrors;
/**
 * Creates an authentication profile with the specified parameters.
 */
export const createAuthenticationProfile: API.OperationMethod<
  CreateAuthenticationProfileMessage,
  CreateAuthenticationProfileResult,
  CreateAuthenticationProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAuthenticationProfileMessage,
  output: CreateAuthenticationProfileResult,
  errors: [
    AuthenticationProfileAlreadyExistsFault,
    AuthenticationProfileQuotaExceededFault,
    InvalidAuthenticationProfileRequestFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAuthenticationProfile",
}));

export type CreateClusterError =
  | ClusterAlreadyExistsFault
  | ClusterParameterGroupNotFoundFault
  | ClusterQuotaExceededFault
  | ClusterSecurityGroupNotFoundFault
  | ClusterSubnetGroupNotFoundFault
  | DependentServiceAccessDeniedFault
  | DependentServiceRequestThrottlingFault
  | DependentServiceUnavailableFault
  | HsmClientCertificateNotFoundFault
  | HsmConfigurationNotFoundFault
  | InsufficientClusterCapacityFault
  | InvalidClusterSubnetGroupStateFault
  | InvalidClusterTrackFault
  | InvalidElasticIpFault
  | InvalidRetentionPeriodFault
  | InvalidSubnet
  | InvalidTagFault
  | InvalidVPCNetworkStateFault
  | Ipv6CidrBlockNotFoundFault
  | LimitExceededFault
  | NumberOfNodesPerClusterLimitExceededFault
  | NumberOfNodesQuotaExceededFault
  | RedshiftIdcApplicationNotExistsFault
  | SnapshotScheduleNotFoundFault
  | TagLimitExceededFault
  | UnauthorizedOperation
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Creates a new cluster with the specified parameters.
 *
 * To create a cluster in Virtual Private Cloud (VPC), you must provide a cluster
 * subnet group name. The cluster subnet group identifies the subnets of your VPC that
 * Amazon Redshift uses when creating the cluster.
 * For more information about managing clusters, go to
 * Amazon Redshift Clusters
 * in the *Amazon Redshift Cluster Management Guide*.
 *
 * VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that
 * you own in a Region from reaching or being reached from the internet through internet
 * gateways and egress-only internet gateways. If a subnet group for a
 * provisioned cluster is in an account with VPC BPA turned on, the following capabilities
 * are blocked:
 *
 * - Creating a public cluster
 *
 * - Restoring a public cluster
 *
 * - Modifying a private cluster to be public
 *
 * - Adding a subnet with VPC BPA turned on to the subnet group when there's at
 * least one public cluster within the group
 *
 * For more information about VPC BPA, see Block public access to VPCs and
 * subnets in the *Amazon VPC User Guide*.
 */
export const createCluster: API.OperationMethod<
  CreateClusterMessage,
  CreateClusterResult,
  CreateClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateClusterMessage,
  output: CreateClusterResult,
  errors: [
    ClusterAlreadyExistsFault,
    ClusterParameterGroupNotFoundFault,
    ClusterQuotaExceededFault,
    ClusterSecurityGroupNotFoundFault,
    ClusterSubnetGroupNotFoundFault,
    DependentServiceAccessDeniedFault,
    DependentServiceRequestThrottlingFault,
    DependentServiceUnavailableFault,
    HsmClientCertificateNotFoundFault,
    HsmConfigurationNotFoundFault,
    InsufficientClusterCapacityFault,
    InvalidClusterSubnetGroupStateFault,
    InvalidClusterTrackFault,
    InvalidElasticIpFault,
    InvalidRetentionPeriodFault,
    InvalidSubnet,
    InvalidTagFault,
    InvalidVPCNetworkStateFault,
    Ipv6CidrBlockNotFoundFault,
    LimitExceededFault,
    NumberOfNodesPerClusterLimitExceededFault,
    NumberOfNodesQuotaExceededFault,
    RedshiftIdcApplicationNotExistsFault,
    SnapshotScheduleNotFoundFault,
    TagLimitExceededFault,
    UnauthorizedOperation,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCluster",
}));

export type CreateClusterParameterGroupError =
  | ClusterParameterGroupAlreadyExistsFault
  | ClusterParameterGroupQuotaExceededFault
  | InvalidTagFault
  | TagLimitExceededFault
  | CommonErrors;
/**
 * Creates an Amazon Redshift parameter group.
 *
 * Creating parameter groups is independent of creating clusters. You can associate a
 * cluster with a parameter group when you create the cluster. You can also associate an
 * existing cluster with a parameter group after the cluster is created by using ModifyCluster.
 *
 * Parameters in the parameter group define specific behavior that applies to the
 * databases you create on the cluster.
 * For more information about parameters and parameter groups, go to
 * Amazon Redshift Parameter Groups
 * in the *Amazon Redshift Cluster Management Guide*.
 */
export const createClusterParameterGroup: API.OperationMethod<
  CreateClusterParameterGroupMessage,
  CreateClusterParameterGroupResult,
  CreateClusterParameterGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateClusterParameterGroupMessage,
  output: CreateClusterParameterGroupResult,
  errors: [
    ClusterParameterGroupAlreadyExistsFault,
    ClusterParameterGroupQuotaExceededFault,
    InvalidTagFault,
    TagLimitExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateClusterParameterGroup",
}));

export type CreateClusterSecurityGroupError =
  | ClusterSecurityGroupAlreadyExistsFault
  | ClusterSecurityGroupQuotaExceededFault
  | InvalidTagFault
  | TagLimitExceededFault
  | CommonErrors;
/**
 * Creates a new Amazon Redshift security group. You use security groups to control access
 * to non-VPC clusters.
 *
 * For information about managing security groups, go to
 * Amazon Redshift Cluster Security Groups in the
 * *Amazon Redshift Cluster Management Guide*.
 */
export const createClusterSecurityGroup: API.OperationMethod<
  CreateClusterSecurityGroupMessage,
  CreateClusterSecurityGroupResult,
  CreateClusterSecurityGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateClusterSecurityGroupMessage,
  output: CreateClusterSecurityGroupResult,
  errors: [
    ClusterSecurityGroupAlreadyExistsFault,
    ClusterSecurityGroupQuotaExceededFault,
    InvalidTagFault,
    TagLimitExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateClusterSecurityGroup",
}));

export type CreateClusterSnapshotError =
  | ClusterNotFoundFault
  | ClusterSnapshotAlreadyExistsFault
  | ClusterSnapshotQuotaExceededFault
  | InvalidClusterStateFault
  | InvalidRetentionPeriodFault
  | InvalidTagFault
  | TagLimitExceededFault
  | CommonErrors;
/**
 * Creates a manual snapshot of the specified cluster. The cluster must be in the
 * `available` state.
 *
 * For more information about working with snapshots, go to
 * Amazon Redshift Snapshots
 * in the *Amazon Redshift Cluster Management Guide*.
 */
export const createClusterSnapshot: API.OperationMethod<
  CreateClusterSnapshotMessage,
  CreateClusterSnapshotResult,
  CreateClusterSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateClusterSnapshotMessage,
  output: CreateClusterSnapshotResult,
  errors: [
    ClusterNotFoundFault,
    ClusterSnapshotAlreadyExistsFault,
    ClusterSnapshotQuotaExceededFault,
    InvalidClusterStateFault,
    InvalidRetentionPeriodFault,
    InvalidTagFault,
    TagLimitExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateClusterSnapshot",
}));

export type CreateClusterSubnetGroupError =
  | ClusterSubnetGroupAlreadyExistsFault
  | ClusterSubnetGroupQuotaExceededFault
  | ClusterSubnetQuotaExceededFault
  | DependentServiceRequestThrottlingFault
  | InvalidSubnet
  | InvalidTagFault
  | TagLimitExceededFault
  | UnauthorizedOperation
  | CommonErrors;
/**
 * Creates a new Amazon Redshift subnet group. You must provide a list of one or more
 * subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when creating
 * Amazon Redshift subnet group.
 *
 * For information about subnet groups, go to
 * Amazon Redshift Cluster Subnet Groups in the
 * *Amazon Redshift Cluster Management Guide*.
 */
export const createClusterSubnetGroup: API.OperationMethod<
  CreateClusterSubnetGroupMessage,
  CreateClusterSubnetGroupResult,
  CreateClusterSubnetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateClusterSubnetGroupMessage,
  output: CreateClusterSubnetGroupResult,
  errors: [
    ClusterSubnetGroupAlreadyExistsFault,
    ClusterSubnetGroupQuotaExceededFault,
    ClusterSubnetQuotaExceededFault,
    DependentServiceRequestThrottlingFault,
    InvalidSubnet,
    InvalidTagFault,
    TagLimitExceededFault,
    UnauthorizedOperation,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateClusterSubnetGroup",
}));

export type CreateCustomDomainAssociationError =
  | ClusterNotFoundFault
  | CustomCnameAssociationFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Used to create a custom domain name for a cluster. Properties include the custom domain name, the
 * cluster the custom domain is associated with, and the certificate Amazon Resource Name (ARN).
 */
export const createCustomDomainAssociation: API.OperationMethod<
  CreateCustomDomainAssociationMessage,
  CreateCustomDomainAssociationResult,
  CreateCustomDomainAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCustomDomainAssociationMessage,
  output: CreateCustomDomainAssociationResult,
  errors: [ClusterNotFoundFault, CustomCnameAssociationFault, UnsupportedOperationFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCustomDomainAssociation",
}));

export type CreateEndpointAccessError =
  | AccessToClusterDeniedFault
  | ClusterNotFoundFault
  | ClusterSubnetGroupNotFoundFault
  | EndpointAlreadyExistsFault
  | EndpointsPerAuthorizationLimitExceededFault
  | EndpointsPerClusterLimitExceededFault
  | InvalidClusterSecurityGroupStateFault
  | InvalidClusterStateFault
  | UnauthorizedOperation
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Creates a Redshift-managed VPC endpoint.
 */
export const createEndpointAccess: API.OperationMethod<
  CreateEndpointAccessMessage,
  EndpointAccess,
  CreateEndpointAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateEndpointAccessMessage,
  output: EndpointAccess,
  errors: [
    AccessToClusterDeniedFault,
    ClusterNotFoundFault,
    ClusterSubnetGroupNotFoundFault,
    EndpointAlreadyExistsFault,
    EndpointsPerAuthorizationLimitExceededFault,
    EndpointsPerClusterLimitExceededFault,
    InvalidClusterSecurityGroupStateFault,
    InvalidClusterStateFault,
    UnauthorizedOperation,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEndpointAccess",
}));

export type CreateEventSubscriptionError =
  | EventSubscriptionQuotaExceededFault
  | InvalidTagFault
  | SNSInvalidTopicFault
  | SNSNoAuthorizationFault
  | SNSTopicArnNotFoundFault
  | SourceNotFoundFault
  | SubscriptionAlreadyExistFault
  | SubscriptionCategoryNotFoundFault
  | SubscriptionEventIdNotFoundFault
  | SubscriptionSeverityNotFoundFault
  | TagLimitExceededFault
  | CommonErrors;
/**
 * Creates an Amazon Redshift event notification subscription. This action requires an ARN
 * (Amazon Resource Name) of an Amazon SNS topic created by either the Amazon Redshift console,
 * the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you
 * must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in
 * the SNS console.
 *
 * You can specify the source type, and lists of Amazon Redshift source IDs, event
 * categories, and event severities. Notifications will be sent for all events you want
 * that match those criteria. For example, you can specify source type = cluster, source ID
 * = my-cluster-1 and mycluster2, event categories = Availability, Backup, and severity =
 * ERROR. The subscription will only send notifications for those ERROR events in the
 * Availability and Backup categories for the specified clusters.
 *
 * If you specify both the source type and source IDs, such as source type = cluster
 * and source identifier = my-cluster-1, notifications will be sent for all the cluster
 * events for my-cluster-1. If you specify a source type but do not specify a source
 * identifier, you will receive notice of the events for the objects of that type in your
 * Amazon Web Services account. If you do not specify either the SourceType nor the SourceIdentifier, you
 * will be notified of events generated from all Amazon Redshift sources belonging to your Amazon Web Services account. You must specify a source type if you specify a source ID.
 */
export const createEventSubscription: API.OperationMethod<
  CreateEventSubscriptionMessage,
  CreateEventSubscriptionResult,
  CreateEventSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateEventSubscriptionMessage,
  output: CreateEventSubscriptionResult,
  errors: [
    EventSubscriptionQuotaExceededFault,
    InvalidTagFault,
    SNSInvalidTopicFault,
    SNSNoAuthorizationFault,
    SNSTopicArnNotFoundFault,
    SourceNotFoundFault,
    SubscriptionAlreadyExistFault,
    SubscriptionCategoryNotFoundFault,
    SubscriptionEventIdNotFoundFault,
    SubscriptionSeverityNotFoundFault,
    TagLimitExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEventSubscription",
}));

export type CreateHsmClientCertificateError =
  | HsmClientCertificateAlreadyExistsFault
  | HsmClientCertificateQuotaExceededFault
  | InvalidTagFault
  | TagLimitExceededFault
  | CommonErrors;
/**
 * Creates an HSM client certificate that an Amazon Redshift cluster will use to connect to
 * the client's HSM in order to store and retrieve the keys used to encrypt the cluster
 * databases.
 *
 * The command returns a public key, which you must store in the HSM. In addition to
 * creating the HSM certificate, you must create an Amazon Redshift HSM configuration that
 * provides a cluster the information needed to store and use encryption keys in the HSM.
 * For more information, go to Hardware Security Modules
 * in the *Amazon Redshift Cluster Management Guide*.
 */
export const createHsmClientCertificate: API.OperationMethod<
  CreateHsmClientCertificateMessage,
  CreateHsmClientCertificateResult,
  CreateHsmClientCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateHsmClientCertificateMessage,
  output: CreateHsmClientCertificateResult,
  errors: [
    HsmClientCertificateAlreadyExistsFault,
    HsmClientCertificateQuotaExceededFault,
    InvalidTagFault,
    TagLimitExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateHsmClientCertificate",
}));

export type CreateHsmConfigurationError =
  | HsmConfigurationAlreadyExistsFault
  | HsmConfigurationQuotaExceededFault
  | InvalidTagFault
  | TagLimitExceededFault
  | CommonErrors;
/**
 * Creates an HSM configuration that contains the information required by an Amazon Redshift
 * cluster to store and use database encryption keys in a Hardware Security Module (HSM).
 * After creating the HSM configuration, you can specify it as a parameter when creating a
 * cluster. The cluster will then store its encryption keys in the HSM.
 *
 * In addition to creating an HSM configuration, you must also create an HSM client
 * certificate. For more information, go to Hardware Security Modules
 * in the Amazon Redshift Cluster Management Guide.
 */
export const createHsmConfiguration: API.OperationMethod<
  CreateHsmConfigurationMessage,
  CreateHsmConfigurationResult,
  CreateHsmConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateHsmConfigurationMessage,
  output: CreateHsmConfigurationResult,
  errors: [
    HsmConfigurationAlreadyExistsFault,
    HsmConfigurationQuotaExceededFault,
    InvalidTagFault,
    TagLimitExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateHsmConfiguration",
}));

export type CreateIntegrationError =
  | IntegrationAlreadyExistsFault
  | IntegrationConflictOperationFault
  | IntegrationQuotaExceededFault
  | IntegrationSourceNotFoundFault
  | IntegrationTargetNotFoundFault
  | InvalidClusterStateFault
  | InvalidTagFault
  | TagLimitExceededFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Creates a zero-ETL integration or S3 event integration with Amazon Redshift.
 */
export const createIntegration: API.OperationMethod<
  CreateIntegrationMessage,
  Integration,
  CreateIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateIntegrationMessage,
  output: Integration,
  errors: [
    IntegrationAlreadyExistsFault,
    IntegrationConflictOperationFault,
    IntegrationQuotaExceededFault,
    IntegrationSourceNotFoundFault,
    IntegrationTargetNotFoundFault,
    InvalidClusterStateFault,
    InvalidTagFault,
    TagLimitExceededFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateIntegration",
}));

export type CreateQev2IdcApplicationError =
  | DependentServiceAccessDeniedFault
  | DependentServiceUnavailableFault
  | Qev2IdcApplicationAlreadyExistsFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Creates an Amazon Redshift Query Editor (QEV2) IAM Identity Center application.
 */
export const createQev2IdcApplication: API.OperationMethod<
  CreateQev2IdcApplicationMessage,
  CreateQev2IdcApplicationResult,
  CreateQev2IdcApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateQev2IdcApplicationMessage,
  output: CreateQev2IdcApplicationResult,
  errors: [
    DependentServiceAccessDeniedFault,
    DependentServiceUnavailableFault,
    Qev2IdcApplicationAlreadyExistsFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateQev2IdcApplication",
}));

export type CreateRedshiftIdcApplicationError =
  | DependentServiceAccessDeniedFault
  | DependentServiceUnavailableFault
  | InvalidTagFault
  | RedshiftIdcApplicationAlreadyExistsFault
  | RedshiftIdcApplicationQuotaExceededFault
  | TagLimitExceededFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Creates an Amazon Redshift application for use with IAM Identity Center.
 */
export const createRedshiftIdcApplication: API.OperationMethod<
  CreateRedshiftIdcApplicationMessage,
  CreateRedshiftIdcApplicationResult,
  CreateRedshiftIdcApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateRedshiftIdcApplicationMessage,
  output: CreateRedshiftIdcApplicationResult,
  errors: [
    DependentServiceAccessDeniedFault,
    DependentServiceUnavailableFault,
    InvalidTagFault,
    RedshiftIdcApplicationAlreadyExistsFault,
    RedshiftIdcApplicationQuotaExceededFault,
    TagLimitExceededFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRedshiftIdcApplication",
}));

export type CreateScheduledActionError =
  | ClusterNotFoundFault
  | InvalidScheduledActionFault
  | InvalidScheduleFault
  | ScheduledActionAlreadyExistsFault
  | ScheduledActionQuotaExceededFault
  | ScheduledActionTypeUnsupportedFault
  | UnauthorizedOperation
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Creates a scheduled action. A scheduled action contains a schedule and an Amazon Redshift API action.
 * For example, you can create a schedule of when to run the `ResizeCluster` API operation.
 */
export const createScheduledAction: API.OperationMethod<
  CreateScheduledActionMessage,
  ScheduledAction,
  CreateScheduledActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateScheduledActionMessage,
  output: ScheduledAction,
  errors: [
    ClusterNotFoundFault,
    InvalidScheduledActionFault,
    InvalidScheduleFault,
    ScheduledActionAlreadyExistsFault,
    ScheduledActionQuotaExceededFault,
    ScheduledActionTypeUnsupportedFault,
    UnauthorizedOperation,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateScheduledAction",
}));

export type CreateSnapshotCopyGrantError =
  | DependentServiceRequestThrottlingFault
  | InvalidTagFault
  | LimitExceededFault
  | SnapshotCopyGrantAlreadyExistsFault
  | SnapshotCopyGrantQuotaExceededFault
  | TagLimitExceededFault
  | CommonErrors;
/**
 * Creates a snapshot copy grant that permits Amazon Redshift to use an encrypted symmetric key
 * from Key Management Service (KMS) to encrypt copied snapshots in a
 * destination region.
 *
 * For more information about managing snapshot copy grants, go to
 * Amazon Redshift Database Encryption
 * in the *Amazon Redshift Cluster Management Guide*.
 */
export const createSnapshotCopyGrant: API.OperationMethod<
  CreateSnapshotCopyGrantMessage,
  CreateSnapshotCopyGrantResult,
  CreateSnapshotCopyGrantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSnapshotCopyGrantMessage,
  output: CreateSnapshotCopyGrantResult,
  errors: [
    DependentServiceRequestThrottlingFault,
    InvalidTagFault,
    LimitExceededFault,
    SnapshotCopyGrantAlreadyExistsFault,
    SnapshotCopyGrantQuotaExceededFault,
    TagLimitExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSnapshotCopyGrant",
}));

export type CreateSnapshotScheduleError =
  | InvalidScheduleFault
  | InvalidTagFault
  | ScheduleDefinitionTypeUnsupportedFault
  | SnapshotScheduleAlreadyExistsFault
  | SnapshotScheduleQuotaExceededFault
  | TagLimitExceededFault
  | CommonErrors;
/**
 * Create a snapshot schedule that can be associated to a cluster and which overrides the default system backup schedule.
 */
export const createSnapshotSchedule: API.OperationMethod<
  CreateSnapshotScheduleMessage,
  SnapshotSchedule,
  CreateSnapshotScheduleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSnapshotScheduleMessage,
  output: SnapshotSchedule,
  errors: [
    InvalidScheduleFault,
    InvalidTagFault,
    ScheduleDefinitionTypeUnsupportedFault,
    SnapshotScheduleAlreadyExistsFault,
    SnapshotScheduleQuotaExceededFault,
    TagLimitExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSnapshotSchedule",
}));

export type CreateTagsError =
  | InvalidClusterStateFault
  | InvalidTagFault
  | ResourceNotFoundFault
  | TagLimitExceededFault
  | CommonErrors;
/**
 * Adds tags to a cluster.
 *
 * A resource can have up to 50 tags. If you try to create more than 50 tags for a
 * resource, you will receive an error and the attempt will fail.
 *
 * If you specify a key that already exists for the resource, the value for that key
 * will be updated with the new value.
 */
export const createTags: API.OperationMethod<
  CreateTagsMessage,
  CreateTagsResponse,
  CreateTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTagsMessage,
  output: CreateTagsResponse,
  errors: [InvalidClusterStateFault, InvalidTagFault, ResourceNotFoundFault, TagLimitExceededFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTags",
}));

export type CreateUsageLimitError =
  | ClusterNotFoundFault
  | InvalidClusterStateFault
  | InvalidUsageLimitFault
  | LimitExceededFault
  | TagLimitExceededFault
  | UnsupportedOperationFault
  | UsageLimitAlreadyExistsFault
  | CommonErrors;
/**
 * Creates a usage limit for a specified Amazon Redshift feature on a cluster.
 * The usage limit is identified by the returned usage limit identifier.
 */
export const createUsageLimit: API.OperationMethod<
  CreateUsageLimitMessage,
  UsageLimit,
  CreateUsageLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateUsageLimitMessage,
  output: UsageLimit,
  errors: [
    ClusterNotFoundFault,
    InvalidClusterStateFault,
    InvalidUsageLimitFault,
    LimitExceededFault,
    TagLimitExceededFault,
    UnsupportedOperationFault,
    UsageLimitAlreadyExistsFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateUsageLimit",
}));

export type DeauthorizeDataShareError = InvalidDataShareFault | CommonErrors;
/**
 * From a datashare producer account, removes authorization from the specified datashare.
 */
export const deauthorizeDataShare: API.OperationMethod<
  DeauthorizeDataShareMessage,
  DataShare,
  DeauthorizeDataShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeauthorizeDataShareMessage,
  output: DataShare,
  errors: [InvalidDataShareFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeauthorizeDataShare",
}));

export type DeleteAuthenticationProfileError =
  | AuthenticationProfileNotFoundFault
  | InvalidAuthenticationProfileRequestFault
  | CommonErrors;
/**
 * Deletes an authentication profile.
 */
export const deleteAuthenticationProfile: API.OperationMethod<
  DeleteAuthenticationProfileMessage,
  DeleteAuthenticationProfileResult,
  DeleteAuthenticationProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAuthenticationProfileMessage,
  output: DeleteAuthenticationProfileResult,
  errors: [AuthenticationProfileNotFoundFault, InvalidAuthenticationProfileRequestFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAuthenticationProfile",
}));

export type DeleteClusterError =
  | ClusterNotFoundFault
  | ClusterSnapshotAlreadyExistsFault
  | ClusterSnapshotQuotaExceededFault
  | InvalidClusterStateFault
  | InvalidRetentionPeriodFault
  | CommonErrors;
/**
 * Deletes a previously provisioned cluster without its final snapshot being created. A successful response from the web
 * service indicates that the request was received correctly. Use DescribeClusters to monitor the status of the deletion. The delete
 * operation cannot be canceled or reverted once submitted.
 * For more information about managing clusters, go to
 * Amazon Redshift Clusters
 * in the *Amazon Redshift Cluster Management Guide*.
 *
 * If you want to shut down the cluster and retain it for future use, set
 * *SkipFinalClusterSnapshot* to `false` and specify a
 * name for *FinalClusterSnapshotIdentifier*. You can later restore this
 * snapshot to resume using the cluster. If a final cluster snapshot is requested, the
 * status of the cluster will be "final-snapshot" while the snapshot is being taken, then
 * it's "deleting" once Amazon Redshift begins deleting the cluster.
 *
 * For more information about managing clusters, go to
 * Amazon Redshift Clusters
 * in the *Amazon Redshift Cluster Management Guide*.
 */
export const deleteCluster: API.OperationMethod<
  DeleteClusterMessage,
  DeleteClusterResult,
  DeleteClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteClusterMessage,
  output: DeleteClusterResult,
  errors: [
    ClusterNotFoundFault,
    ClusterSnapshotAlreadyExistsFault,
    ClusterSnapshotQuotaExceededFault,
    InvalidClusterStateFault,
    InvalidRetentionPeriodFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCluster",
}));

export type DeleteClusterParameterGroupError =
  | ClusterParameterGroupNotFoundFault
  | InvalidClusterParameterGroupStateFault
  | CommonErrors;
/**
 * Deletes a specified Amazon Redshift parameter group.
 *
 * You cannot delete a parameter group if it is associated with a
 * cluster.
 */
export const deleteClusterParameterGroup: API.OperationMethod<
  DeleteClusterParameterGroupMessage,
  DeleteClusterParameterGroupResponse,
  DeleteClusterParameterGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteClusterParameterGroupMessage,
  output: DeleteClusterParameterGroupResponse,
  errors: [ClusterParameterGroupNotFoundFault, InvalidClusterParameterGroupStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteClusterParameterGroup",
}));

export type DeleteClusterSecurityGroupError =
  | ClusterSecurityGroupNotFoundFault
  | InvalidClusterSecurityGroupStateFault
  | CommonErrors;
/**
 * Deletes an Amazon Redshift security group.
 *
 * You cannot delete a security group that is associated with any clusters. You
 * cannot delete the default security group.
 *
 * For information about managing security groups, go to
 * Amazon Redshift Cluster Security Groups in the
 * *Amazon Redshift Cluster Management Guide*.
 */
export const deleteClusterSecurityGroup: API.OperationMethod<
  DeleteClusterSecurityGroupMessage,
  DeleteClusterSecurityGroupResponse,
  DeleteClusterSecurityGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteClusterSecurityGroupMessage,
  output: DeleteClusterSecurityGroupResponse,
  errors: [ClusterSecurityGroupNotFoundFault, InvalidClusterSecurityGroupStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteClusterSecurityGroup",
}));

export type DeleteClusterSnapshotError =
  | ClusterSnapshotNotFoundFault
  | InvalidClusterSnapshotStateFault
  | CommonErrors;
/**
 * Deletes the specified manual snapshot. The snapshot must be in the
 * `available` state, with no other users authorized to access the snapshot.
 *
 * Unlike automated snapshots, manual snapshots are retained even after you delete
 * your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual
 * snapshot explicitly to avoid getting charged. If other accounts are authorized to access
 * the snapshot, you must revoke all of the authorizations before you can delete the
 * snapshot.
 */
export const deleteClusterSnapshot: API.OperationMethod<
  DeleteClusterSnapshotMessage,
  DeleteClusterSnapshotResult,
  DeleteClusterSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteClusterSnapshotMessage,
  output: DeleteClusterSnapshotResult,
  errors: [ClusterSnapshotNotFoundFault, InvalidClusterSnapshotStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteClusterSnapshot",
}));

export type DeleteClusterSubnetGroupError =
  | ClusterSubnetGroupNotFoundFault
  | InvalidClusterSubnetGroupStateFault
  | InvalidClusterSubnetStateFault
  | CommonErrors;
/**
 * Deletes the specified cluster subnet group.
 */
export const deleteClusterSubnetGroup: API.OperationMethod<
  DeleteClusterSubnetGroupMessage,
  DeleteClusterSubnetGroupResponse,
  DeleteClusterSubnetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteClusterSubnetGroupMessage,
  output: DeleteClusterSubnetGroupResponse,
  errors: [
    ClusterSubnetGroupNotFoundFault,
    InvalidClusterSubnetGroupStateFault,
    InvalidClusterSubnetStateFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteClusterSubnetGroup",
}));

export type DeleteCustomDomainAssociationError =
  | ClusterNotFoundFault
  | CustomCnameAssociationFault
  | CustomDomainAssociationNotFoundFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Contains information about deleting a custom domain association for a cluster.
 */
export const deleteCustomDomainAssociation: API.OperationMethod<
  DeleteCustomDomainAssociationMessage,
  DeleteCustomDomainAssociationResponse,
  DeleteCustomDomainAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCustomDomainAssociationMessage,
  output: DeleteCustomDomainAssociationResponse,
  errors: [
    ClusterNotFoundFault,
    CustomCnameAssociationFault,
    CustomDomainAssociationNotFoundFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCustomDomainAssociation",
}));

export type DeleteEndpointAccessError =
  | ClusterNotFoundFault
  | EndpointNotFoundFault
  | InvalidClusterSecurityGroupStateFault
  | InvalidClusterStateFault
  | InvalidEndpointStateFault
  | CommonErrors;
/**
 * Deletes a Redshift-managed VPC endpoint.
 */
export const deleteEndpointAccess: API.OperationMethod<
  DeleteEndpointAccessMessage,
  EndpointAccess,
  DeleteEndpointAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteEndpointAccessMessage,
  output: EndpointAccess,
  errors: [
    ClusterNotFoundFault,
    EndpointNotFoundFault,
    InvalidClusterSecurityGroupStateFault,
    InvalidClusterStateFault,
    InvalidEndpointStateFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEndpointAccess",
}));

export type DeleteEventSubscriptionError =
  | InvalidSubscriptionStateFault
  | SubscriptionNotFoundFault
  | CommonErrors;
/**
 * Deletes an Amazon Redshift event notification subscription.
 */
export const deleteEventSubscription: API.OperationMethod<
  DeleteEventSubscriptionMessage,
  DeleteEventSubscriptionResponse,
  DeleteEventSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteEventSubscriptionMessage,
  output: DeleteEventSubscriptionResponse,
  errors: [InvalidSubscriptionStateFault, SubscriptionNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEventSubscription",
}));

export type DeleteHsmClientCertificateError =
  | HsmClientCertificateNotFoundFault
  | InvalidHsmClientCertificateStateFault
  | CommonErrors;
/**
 * Deletes the specified HSM client certificate.
 */
export const deleteHsmClientCertificate: API.OperationMethod<
  DeleteHsmClientCertificateMessage,
  DeleteHsmClientCertificateResponse,
  DeleteHsmClientCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteHsmClientCertificateMessage,
  output: DeleteHsmClientCertificateResponse,
  errors: [HsmClientCertificateNotFoundFault, InvalidHsmClientCertificateStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteHsmClientCertificate",
}));

export type DeleteHsmConfigurationError =
  | HsmConfigurationNotFoundFault
  | InvalidHsmConfigurationStateFault
  | CommonErrors;
/**
 * Deletes the specified Amazon Redshift HSM configuration.
 */
export const deleteHsmConfiguration: API.OperationMethod<
  DeleteHsmConfigurationMessage,
  DeleteHsmConfigurationResponse,
  DeleteHsmConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteHsmConfigurationMessage,
  output: DeleteHsmConfigurationResponse,
  errors: [HsmConfigurationNotFoundFault, InvalidHsmConfigurationStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteHsmConfiguration",
}));

export type DeleteIntegrationError =
  | IntegrationConflictOperationFault
  | IntegrationConflictStateFault
  | IntegrationNotFoundFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Deletes a zero-ETL integration or S3 event integration with Amazon Redshift.
 */
export const deleteIntegration: API.OperationMethod<
  DeleteIntegrationMessage,
  Integration,
  DeleteIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteIntegrationMessage,
  output: Integration,
  errors: [
    IntegrationConflictOperationFault,
    IntegrationConflictStateFault,
    IntegrationNotFoundFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIntegration",
}));

export type DeletePartnerError =
  | ClusterNotFoundFault
  | PartnerNotFoundFault
  | UnauthorizedPartnerIntegrationFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Deletes a partner integration from a cluster. Data can still flow to the cluster until the integration is deleted at the partner's website.
 */
export const deletePartner: API.OperationMethod<
  PartnerIntegrationInputMessage,
  PartnerIntegrationOutputMessage,
  DeletePartnerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PartnerIntegrationInputMessage,
  output: PartnerIntegrationOutputMessage,
  errors: [
    ClusterNotFoundFault,
    PartnerNotFoundFault,
    UnauthorizedPartnerIntegrationFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePartner",
}));

export type DeleteQev2IdcApplicationError =
  | DependentServiceAccessDeniedFault
  | DependentServiceUnavailableFault
  | Qev2IdcApplicationNotExistsFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Deletes an Amazon Redshift Query Editor (QEV2) IAM Identity Center application.
 */
export const deleteQev2IdcApplication: API.OperationMethod<
  DeleteQev2IdcApplicationMessage,
  DeleteQev2IdcApplicationResponse,
  DeleteQev2IdcApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteQev2IdcApplicationMessage,
  output: DeleteQev2IdcApplicationResponse,
  errors: [
    DependentServiceAccessDeniedFault,
    DependentServiceUnavailableFault,
    Qev2IdcApplicationNotExistsFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteQev2IdcApplication",
}));

export type DeleteRedshiftIdcApplicationError =
  | DependentServiceAccessDeniedFault
  | DependentServiceUnavailableFault
  | RedshiftIdcApplicationNotExistsFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Deletes an Amazon Redshift IAM Identity Center application.
 */
export const deleteRedshiftIdcApplication: API.OperationMethod<
  DeleteRedshiftIdcApplicationMessage,
  DeleteRedshiftIdcApplicationResponse,
  DeleteRedshiftIdcApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteRedshiftIdcApplicationMessage,
  output: DeleteRedshiftIdcApplicationResponse,
  errors: [
    DependentServiceAccessDeniedFault,
    DependentServiceUnavailableFault,
    RedshiftIdcApplicationNotExistsFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRedshiftIdcApplication",
}));

export type DeleteResourcePolicyError =
  | ResourceNotFoundFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Deletes the resource policy for a specified resource.
 */
export const deleteResourcePolicy: API.OperationMethod<
  DeleteResourcePolicyMessage,
  DeleteResourcePolicyResponse,
  DeleteResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteResourcePolicyMessage,
  output: DeleteResourcePolicyResponse,
  errors: [ResourceNotFoundFault, UnsupportedOperationFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteResourcePolicy",
}));

export type DeleteScheduledActionError =
  | ScheduledActionNotFoundFault
  | UnauthorizedOperation
  | CommonErrors;
/**
 * Deletes a scheduled action.
 */
export const deleteScheduledAction: API.OperationMethod<
  DeleteScheduledActionMessage,
  DeleteScheduledActionResponse,
  DeleteScheduledActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteScheduledActionMessage,
  output: DeleteScheduledActionResponse,
  errors: [ScheduledActionNotFoundFault, UnauthorizedOperation],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteScheduledAction",
}));

export type DeleteSnapshotCopyGrantError =
  | InvalidSnapshotCopyGrantStateFault
  | SnapshotCopyGrantNotFoundFault
  | CommonErrors;
/**
 * Deletes the specified snapshot copy grant.
 */
export const deleteSnapshotCopyGrant: API.OperationMethod<
  DeleteSnapshotCopyGrantMessage,
  DeleteSnapshotCopyGrantResponse,
  DeleteSnapshotCopyGrantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSnapshotCopyGrantMessage,
  output: DeleteSnapshotCopyGrantResponse,
  errors: [InvalidSnapshotCopyGrantStateFault, SnapshotCopyGrantNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSnapshotCopyGrant",
}));

export type DeleteSnapshotScheduleError =
  | InvalidClusterSnapshotScheduleStateFault
  | SnapshotScheduleNotFoundFault
  | CommonErrors;
/**
 * Deletes a snapshot schedule.
 */
export const deleteSnapshotSchedule: API.OperationMethod<
  DeleteSnapshotScheduleMessage,
  DeleteSnapshotScheduleResponse,
  DeleteSnapshotScheduleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSnapshotScheduleMessage,
  output: DeleteSnapshotScheduleResponse,
  errors: [InvalidClusterSnapshotScheduleStateFault, SnapshotScheduleNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSnapshotSchedule",
}));

export type DeleteTagsError = InvalidTagFault | ResourceNotFoundFault | CommonErrors;
/**
 * Deletes tags from a resource. You must provide the ARN of the resource
 * from which you want to delete the tag or tags.
 */
export const deleteTags: API.OperationMethod<
  DeleteTagsMessage,
  DeleteTagsResponse,
  DeleteTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTagsMessage,
  output: DeleteTagsResponse,
  errors: [InvalidTagFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTags",
}));

export type DeleteUsageLimitError =
  | UnsupportedOperationFault
  | UsageLimitNotFoundFault
  | CommonErrors;
/**
 * Deletes a usage limit from a cluster.
 */
export const deleteUsageLimit: API.OperationMethod<
  DeleteUsageLimitMessage,
  DeleteUsageLimitResponse,
  DeleteUsageLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteUsageLimitMessage,
  output: DeleteUsageLimitResponse,
  errors: [UnsupportedOperationFault, UsageLimitNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteUsageLimit",
}));

export type DeregisterNamespaceError =
  | ClusterNotFoundFault
  | InvalidClusterStateFault
  | InvalidNamespaceFault
  | CommonErrors;
/**
 * Deregisters a cluster or serverless namespace from the Amazon Web Services Glue Data Catalog.
 */
export const deregisterNamespace: API.OperationMethod<
  DeregisterNamespaceInputMessage,
  DeregisterNamespaceOutputMessage,
  DeregisterNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeregisterNamespaceInputMessage,
  output: DeregisterNamespaceOutputMessage,
  errors: [ClusterNotFoundFault, InvalidClusterStateFault, InvalidNamespaceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeregisterNamespace",
}));

export type DescribeAccountAttributesError = CommonErrors;
/**
 * Returns a list of attributes attached to an account
 */
export const describeAccountAttributes: API.OperationMethod<
  DescribeAccountAttributesMessage,
  AccountAttributeList,
  DescribeAccountAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAccountAttributesMessage,
  output: AccountAttributeList,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAccountAttributes",
}));

export type DescribeAuthenticationProfilesError =
  | AuthenticationProfileNotFoundFault
  | InvalidAuthenticationProfileRequestFault
  | CommonErrors;
/**
 * Describes an authentication profile.
 */
export const describeAuthenticationProfiles: API.OperationMethod<
  DescribeAuthenticationProfilesMessage,
  DescribeAuthenticationProfilesResult,
  DescribeAuthenticationProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAuthenticationProfilesMessage,
  output: DescribeAuthenticationProfilesResult,
  errors: [AuthenticationProfileNotFoundFault, InvalidAuthenticationProfileRequestFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAuthenticationProfiles",
}));

export type DescribeClusterDbRevisionsError =
  | ClusterNotFoundFault
  | InvalidClusterStateFault
  | CommonErrors;
/**
 * Returns an array of `ClusterDbRevision` objects.
 */
export const describeClusterDbRevisions: API.PaginatedOperationMethod<
  DescribeClusterDbRevisionsMessage,
  ClusterDbRevisionsMessage,
  DescribeClusterDbRevisionsError,
  Credentials | HttpClient.HttpClient,
  ClusterDbRevision
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeClusterDbRevisionsMessage,
  output: ClusterDbRevisionsMessage,
  errors: [ClusterNotFoundFault, InvalidClusterStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeClusterDbRevisions",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "ClusterDbRevisions",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeClusterParameterGroupsError =
  | ClusterParameterGroupNotFoundFault
  | InvalidTagFault
  | CommonErrors;
/**
 * Returns a list of Amazon Redshift parameter groups, including parameter groups you
 * created and the default parameter group. For each parameter group, the response includes
 * the parameter group name, description, and parameter group family name. You can
 * optionally specify a name to retrieve the description of a specific parameter
 * group.
 *
 * For more information about parameters and parameter groups, go to
 * Amazon Redshift Parameter Groups
 * in the *Amazon Redshift Cluster Management Guide*.
 *
 * If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 * all parameter groups that match any combination of the specified keys and values. For
 * example, if you have `owner` and `environment` for tag keys, and
 * `admin` and `test` for tag values, all parameter groups that
 * have any combination of those values are returned.
 *
 * If both tag keys and values are omitted from the request, parameter groups are
 * returned regardless of whether they have tag keys or values associated with
 * them.
 */
export const describeClusterParameterGroups: API.PaginatedOperationMethod<
  DescribeClusterParameterGroupsMessage,
  ClusterParameterGroupsMessage,
  DescribeClusterParameterGroupsError,
  Credentials | HttpClient.HttpClient,
  ClusterParameterGroup
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeClusterParameterGroupsMessage,
  output: ClusterParameterGroupsMessage,
  errors: [ClusterParameterGroupNotFoundFault, InvalidTagFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeClusterParameterGroups",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "ParameterGroups",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeClusterParametersError = ClusterParameterGroupNotFoundFault | CommonErrors;
/**
 * Returns a detailed list of parameters contained within the specified Amazon Redshift
 * parameter group. For each parameter the response includes information such as parameter
 * name, description, data type, value, whether the parameter value is modifiable, and so
 * on.
 *
 * You can specify *source* filter to retrieve parameters of only
 * specific type. For example, to retrieve parameters that were modified by a user action
 * such as from ModifyClusterParameterGroup, you can specify
 * *source* equal to *user*.
 *
 * For more information about parameters and parameter groups, go to
 * Amazon Redshift Parameter Groups
 * in the *Amazon Redshift Cluster Management Guide*.
 */
export const describeClusterParameters: API.PaginatedOperationMethod<
  DescribeClusterParametersMessage,
  ClusterParameterGroupDetails,
  DescribeClusterParametersError,
  Credentials | HttpClient.HttpClient,
  Parameter
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeClusterParametersMessage,
  output: ClusterParameterGroupDetails,
  errors: [ClusterParameterGroupNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeClusterParameters",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Parameters",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeClustersError = ClusterNotFoundFault | InvalidTagFault | CommonErrors;
/**
 * Returns properties of provisioned clusters including general cluster properties,
 * cluster database properties, maintenance and backup properties, and security and access
 * properties. This operation supports pagination.
 * For more information about managing clusters, go to
 * Amazon Redshift Clusters
 * in the *Amazon Redshift Cluster Management Guide*.
 *
 * If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 * all clusters that match any combination of the specified keys and values. For example,
 * if you have `owner` and `environment` for tag keys, and
 * `admin` and `test` for tag values, all clusters that have any
 * combination of those values are returned.
 *
 * If both tag keys and values are omitted from the request, clusters are returned
 * regardless of whether they have tag keys or values associated with them.
 */
export const describeClusters: API.PaginatedOperationMethod<
  DescribeClustersMessage,
  ClustersMessage,
  DescribeClustersError,
  Credentials | HttpClient.HttpClient,
  Cluster
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeClustersMessage,
  output: ClustersMessage,
  errors: [ClusterNotFoundFault, InvalidTagFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeClusters",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Clusters",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeClusterSecurityGroupsError =
  | ClusterSecurityGroupNotFoundFault
  | InvalidTagFault
  | CommonErrors;
/**
 * Returns information about Amazon Redshift security groups. If the name of a security
 * group is specified, the response will contain only information about only that security
 * group.
 *
 * For information about managing security groups, go to
 * Amazon Redshift Cluster Security Groups in the
 * *Amazon Redshift Cluster Management Guide*.
 *
 * If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 * all security groups that match any combination of the specified keys and values. For
 * example, if you have `owner` and `environment` for tag keys, and
 * `admin` and `test` for tag values, all security groups that
 * have any combination of those values are returned.
 *
 * If both tag keys and values are omitted from the request, security groups are
 * returned regardless of whether they have tag keys or values associated with
 * them.
 */
export const describeClusterSecurityGroups: API.PaginatedOperationMethod<
  DescribeClusterSecurityGroupsMessage,
  ClusterSecurityGroupMessage,
  DescribeClusterSecurityGroupsError,
  Credentials | HttpClient.HttpClient,
  ClusterSecurityGroup
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeClusterSecurityGroupsMessage,
  output: ClusterSecurityGroupMessage,
  errors: [ClusterSecurityGroupNotFoundFault, InvalidTagFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeClusterSecurityGroups",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "ClusterSecurityGroups",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeClusterSnapshotsError =
  | ClusterNotFoundFault
  | ClusterSnapshotNotFoundFault
  | InvalidTagFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Returns one or more snapshot objects, which contain metadata about your cluster
 * snapshots. By default, this operation returns information about all snapshots of all
 * clusters that are owned by your Amazon Web Services account. No information is returned for
 * snapshots owned by inactive Amazon Web Services accounts.
 *
 * If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 * all snapshots that match any combination of the specified keys and values. For example,
 * if you have `owner` and `environment` for tag keys, and
 * `admin` and `test` for tag values, all snapshots that have any
 * combination of those values are returned. Only snapshots that you own are returned in
 * the response; shared snapshots are not returned with the tag key and tag value request
 * parameters.
 *
 * If both tag keys and values are omitted from the request, snapshots are returned
 * regardless of whether they have tag keys or values associated with them.
 */
export const describeClusterSnapshots: API.PaginatedOperationMethod<
  DescribeClusterSnapshotsMessage,
  SnapshotMessage,
  DescribeClusterSnapshotsError,
  Credentials | HttpClient.HttpClient,
  Snapshot
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeClusterSnapshotsMessage,
  output: SnapshotMessage,
  errors: [
    ClusterNotFoundFault,
    ClusterSnapshotNotFoundFault,
    InvalidTagFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeClusterSnapshots",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Snapshots",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeClusterSubnetGroupsError =
  | ClusterSubnetGroupNotFoundFault
  | InvalidTagFault
  | CommonErrors;
/**
 * Returns one or more cluster subnet group objects, which contain metadata about your
 * cluster subnet groups. By default, this operation returns information about all cluster
 * subnet groups that are defined in your Amazon Web Services account.
 *
 * If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 * all subnet groups that match any combination of the specified keys and values. For
 * example, if you have `owner` and `environment` for tag keys, and
 * `admin` and `test` for tag values, all subnet groups that have
 * any combination of those values are returned.
 *
 * If both tag keys and values are omitted from the request, subnet groups are
 * returned regardless of whether they have tag keys or values associated with
 * them.
 */
export const describeClusterSubnetGroups: API.PaginatedOperationMethod<
  DescribeClusterSubnetGroupsMessage,
  ClusterSubnetGroupMessage,
  DescribeClusterSubnetGroupsError,
  Credentials | HttpClient.HttpClient,
  ClusterSubnetGroup
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeClusterSubnetGroupsMessage,
  output: ClusterSubnetGroupMessage,
  errors: [ClusterSubnetGroupNotFoundFault, InvalidTagFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeClusterSubnetGroups",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "ClusterSubnetGroups",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeClusterTracksError =
  | InvalidClusterTrackFault
  | UnauthorizedOperation
  | CommonErrors;
/**
 * Returns a list of all the available maintenance tracks.
 */
export const describeClusterTracks: API.PaginatedOperationMethod<
  DescribeClusterTracksMessage,
  TrackListMessage,
  DescribeClusterTracksError,
  Credentials | HttpClient.HttpClient,
  MaintenanceTrack
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeClusterTracksMessage,
  output: TrackListMessage,
  errors: [InvalidClusterTrackFault, UnauthorizedOperation],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeClusterTracks",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "MaintenanceTracks",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeClusterVersionsError = CommonErrors;
/**
 * Returns descriptions of the available Amazon Redshift cluster versions. You can call this
 * operation even before creating any clusters to learn more about the Amazon Redshift versions.
 *
 * For more information about managing clusters, go to
 * Amazon Redshift Clusters
 * in the *Amazon Redshift Cluster Management Guide*.
 */
export const describeClusterVersions: API.PaginatedOperationMethod<
  DescribeClusterVersionsMessage,
  ClusterVersionsMessage,
  DescribeClusterVersionsError,
  Credentials | HttpClient.HttpClient,
  ClusterVersion
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeClusterVersionsMessage,
  output: ClusterVersionsMessage,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeClusterVersions",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "ClusterVersions",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeCustomDomainAssociationsError =
  | CustomDomainAssociationNotFoundFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Contains information about custom domain associations for a cluster.
 */
export const describeCustomDomainAssociations: API.PaginatedOperationMethod<
  DescribeCustomDomainAssociationsMessage,
  CustomDomainAssociationsMessage,
  DescribeCustomDomainAssociationsError,
  Credentials | HttpClient.HttpClient,
  Association
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeCustomDomainAssociationsMessage,
  output: CustomDomainAssociationsMessage,
  errors: [CustomDomainAssociationNotFoundFault, UnsupportedOperationFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCustomDomainAssociations",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Associations",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeDataSharesError = InvalidDataShareFault | CommonErrors;
/**
 * Shows the status of any inbound or outbound datashares available in the specified
 * account.
 */
export const describeDataShares: API.PaginatedOperationMethod<
  DescribeDataSharesMessage,
  DescribeDataSharesResult,
  DescribeDataSharesError,
  Credentials | HttpClient.HttpClient,
  DataShare
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeDataSharesMessage,
  output: DescribeDataSharesResult,
  errors: [InvalidDataShareFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDataShares",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "DataShares",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeDataSharesForConsumerError = InvalidNamespaceFault | CommonErrors;
/**
 * Returns a list of datashares where the account identifier being called is a consumer account identifier.
 */
export const describeDataSharesForConsumer: API.PaginatedOperationMethod<
  DescribeDataSharesForConsumerMessage,
  DescribeDataSharesForConsumerResult,
  DescribeDataSharesForConsumerError,
  Credentials | HttpClient.HttpClient,
  DataShare
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeDataSharesForConsumerMessage,
  output: DescribeDataSharesForConsumerResult,
  errors: [InvalidNamespaceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDataSharesForConsumer",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "DataShares",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeDataSharesForProducerError = InvalidNamespaceFault | CommonErrors;
/**
 * Returns a list of datashares when the account identifier being called is a producer account identifier.
 */
export const describeDataSharesForProducer: API.PaginatedOperationMethod<
  DescribeDataSharesForProducerMessage,
  DescribeDataSharesForProducerResult,
  DescribeDataSharesForProducerError,
  Credentials | HttpClient.HttpClient,
  DataShare
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeDataSharesForProducerMessage,
  output: DescribeDataSharesForProducerResult,
  errors: [InvalidNamespaceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDataSharesForProducer",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "DataShares",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeDefaultClusterParametersError = CommonErrors;
/**
 * Returns a list of parameter settings for the specified parameter group
 * family.
 *
 * For more information about parameters and parameter groups, go to
 * Amazon Redshift Parameter Groups
 * in the *Amazon Redshift Cluster Management Guide*.
 */
export const describeDefaultClusterParameters: API.PaginatedOperationMethod<
  DescribeDefaultClusterParametersMessage,
  DescribeDefaultClusterParametersResult,
  DescribeDefaultClusterParametersError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeDefaultClusterParametersMessage,
  output: DescribeDefaultClusterParametersResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDefaultClusterParameters",
  pagination: {
    inputToken: "Marker",
    outputToken: "DefaultClusterParameters.Marker",
    items: "DefaultClusterParameters.Parameters",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeEndpointAccessError =
  | ClusterNotFoundFault
  | EndpointNotFoundFault
  | InvalidClusterStateFault
  | CommonErrors;
/**
 * Describes a Redshift-managed VPC endpoint.
 */
export const describeEndpointAccess: API.PaginatedOperationMethod<
  DescribeEndpointAccessMessage,
  EndpointAccessList,
  DescribeEndpointAccessError,
  Credentials | HttpClient.HttpClient,
  EndpointAccess
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeEndpointAccessMessage,
  output: EndpointAccessList,
  errors: [ClusterNotFoundFault, EndpointNotFoundFault, InvalidClusterStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEndpointAccess",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "EndpointAccessList",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeEndpointAuthorizationError =
  | ClusterNotFoundFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Describes an endpoint authorization.
 */
export const describeEndpointAuthorization: API.PaginatedOperationMethod<
  DescribeEndpointAuthorizationMessage,
  EndpointAuthorizationList,
  DescribeEndpointAuthorizationError,
  Credentials | HttpClient.HttpClient,
  EndpointAuthorization
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeEndpointAuthorizationMessage,
  output: EndpointAuthorizationList,
  errors: [ClusterNotFoundFault, UnsupportedOperationFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEndpointAuthorization",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "EndpointAuthorizationList",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeEventCategoriesError = CommonErrors;
/**
 * Displays a list of event categories for all event source types, or for a specified
 * source type. For a list of the event categories and source types, go to Amazon Redshift Event
 * Notifications.
 */
export const describeEventCategories: API.OperationMethod<
  DescribeEventCategoriesMessage,
  EventCategoriesMessage,
  DescribeEventCategoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeEventCategoriesMessage,
  output: EventCategoriesMessage,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEventCategories",
}));

export type DescribeEventsError = CommonErrors;
/**
 * Returns events related to clusters, security groups, snapshots, and parameter
 * groups for the past 14 days. Events specific to a particular cluster, security group,
 * snapshot or parameter group can be obtained by providing the name as a parameter. By
 * default, the past hour of events are returned.
 */
export const describeEvents: API.PaginatedOperationMethod<
  DescribeEventsMessage,
  EventsMessage,
  DescribeEventsError,
  Credentials | HttpClient.HttpClient,
  Event
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeEventsMessage,
  output: EventsMessage,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEvents",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Events",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeEventSubscriptionsError =
  | InvalidTagFault
  | SubscriptionNotFoundFault
  | CommonErrors;
/**
 * Lists descriptions of all the Amazon Redshift event notification subscriptions for a
 * customer account. If you specify a subscription name, lists the description for that
 * subscription.
 *
 * If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 * all event notification subscriptions that match any combination of the specified keys
 * and values. For example, if you have `owner` and `environment` for
 * tag keys, and `admin` and `test` for tag values, all subscriptions
 * that have any combination of those values are returned.
 *
 * If both tag keys and values are omitted from the request, subscriptions are
 * returned regardless of whether they have tag keys or values associated with
 * them.
 */
export const describeEventSubscriptions: API.PaginatedOperationMethod<
  DescribeEventSubscriptionsMessage,
  EventSubscriptionsMessage,
  DescribeEventSubscriptionsError,
  Credentials | HttpClient.HttpClient,
  EventSubscription
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeEventSubscriptionsMessage,
  output: EventSubscriptionsMessage,
  errors: [InvalidTagFault, SubscriptionNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEventSubscriptions",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "EventSubscriptionsList",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeHsmClientCertificatesError =
  | HsmClientCertificateNotFoundFault
  | InvalidTagFault
  | CommonErrors;
/**
 * Returns information about the specified HSM client certificate. If no certificate
 * ID is specified, returns information about all the HSM certificates owned by your Amazon Web Services account.
 *
 * If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 * all HSM client certificates that match any combination of the specified keys and values.
 * For example, if you have `owner` and `environment` for tag keys,
 * and `admin` and `test` for tag values, all HSM client certificates
 * that have any combination of those values are returned.
 *
 * If both tag keys and values are omitted from the request, HSM client certificates
 * are returned regardless of whether they have tag keys or values associated with
 * them.
 */
export const describeHsmClientCertificates: API.PaginatedOperationMethod<
  DescribeHsmClientCertificatesMessage,
  HsmClientCertificateMessage,
  DescribeHsmClientCertificatesError,
  Credentials | HttpClient.HttpClient,
  HsmClientCertificate
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeHsmClientCertificatesMessage,
  output: HsmClientCertificateMessage,
  errors: [HsmClientCertificateNotFoundFault, InvalidTagFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeHsmClientCertificates",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "HsmClientCertificates",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeHsmConfigurationsError =
  | HsmConfigurationNotFoundFault
  | InvalidTagFault
  | CommonErrors;
/**
 * Returns information about the specified Amazon Redshift HSM configuration. If no
 * configuration ID is specified, returns information about all the HSM configurations
 * owned by your Amazon Web Services account.
 *
 * If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 * all HSM connections that match any combination of the specified keys and values. For
 * example, if you have `owner` and `environment` for tag keys, and
 * `admin` and `test` for tag values, all HSM connections that
 * have any combination of those values are returned.
 *
 * If both tag keys and values are omitted from the request, HSM connections are
 * returned regardless of whether they have tag keys or values associated with
 * them.
 */
export const describeHsmConfigurations: API.PaginatedOperationMethod<
  DescribeHsmConfigurationsMessage,
  HsmConfigurationMessage,
  DescribeHsmConfigurationsError,
  Credentials | HttpClient.HttpClient,
  HsmConfiguration
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeHsmConfigurationsMessage,
  output: HsmConfigurationMessage,
  errors: [HsmConfigurationNotFoundFault, InvalidTagFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeHsmConfigurations",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "HsmConfigurations",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeInboundIntegrationsError =
  | IntegrationNotFoundFault
  | InvalidNamespaceFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Returns a list of inbound integrations.
 */
export const describeInboundIntegrations: API.PaginatedOperationMethod<
  DescribeInboundIntegrationsMessage,
  InboundIntegrationsMessage,
  DescribeInboundIntegrationsError,
  Credentials | HttpClient.HttpClient,
  InboundIntegration
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeInboundIntegrationsMessage,
  output: InboundIntegrationsMessage,
  errors: [IntegrationNotFoundFault, InvalidNamespaceFault, UnsupportedOperationFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeInboundIntegrations",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "InboundIntegrations",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeIntegrationsError =
  | IntegrationNotFoundFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Describes one or more zero-ETL or S3 event integrations with Amazon Redshift.
 */
export const describeIntegrations: API.PaginatedOperationMethod<
  DescribeIntegrationsMessage,
  IntegrationsMessage,
  DescribeIntegrationsError,
  Credentials | HttpClient.HttpClient,
  Integration
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeIntegrationsMessage,
  output: IntegrationsMessage,
  errors: [IntegrationNotFoundFault, UnsupportedOperationFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeIntegrations",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Integrations",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeLoggingStatusError =
  | ClusterNotFoundFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Describes whether information, such as queries and connection attempts, is being
 * logged for the specified Amazon Redshift cluster.
 */
export const describeLoggingStatus: API.OperationMethod<
  DescribeLoggingStatusMessage,
  LoggingStatus,
  DescribeLoggingStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeLoggingStatusMessage,
  output: LoggingStatus,
  errors: [ClusterNotFoundFault, UnsupportedOperationFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLoggingStatus",
}));

export type DescribeNodeConfigurationOptionsError =
  | AccessToSnapshotDeniedFault
  | ClusterNotFoundFault
  | ClusterSnapshotNotFoundFault
  | InvalidClusterSnapshotStateFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Returns properties of possible node configurations such as node type, number of nodes, and
 * disk usage for the specified action type.
 */
export const describeNodeConfigurationOptions: API.PaginatedOperationMethod<
  DescribeNodeConfigurationOptionsMessage,
  NodeConfigurationOptionsMessage,
  DescribeNodeConfigurationOptionsError,
  Credentials | HttpClient.HttpClient,
  NodeConfigurationOption
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeNodeConfigurationOptionsMessage,
  output: NodeConfigurationOptionsMessage,
  errors: [
    AccessToSnapshotDeniedFault,
    ClusterNotFoundFault,
    ClusterSnapshotNotFoundFault,
    InvalidClusterSnapshotStateFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeNodeConfigurationOptions",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "NodeConfigurationOptionList",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeOrderableClusterOptionsError = CommonErrors;
/**
 * Returns a list of orderable cluster options. Before you create a new cluster you
 * can use this operation to find what options are available, such as the EC2 Availability
 * Zones (AZ) in the specific Amazon Web Services Region that you can specify, and the node types you can
 * request. The node types differ by available storage, memory, CPU and price. With the
 * cost involved you might want to obtain a list of cluster options in the specific region
 * and specify values when creating a cluster.
 * For more information about managing clusters, go to
 * Amazon Redshift Clusters
 * in the *Amazon Redshift Cluster Management Guide*.
 */
export const describeOrderableClusterOptions: API.PaginatedOperationMethod<
  DescribeOrderableClusterOptionsMessage,
  OrderableClusterOptionsMessage,
  DescribeOrderableClusterOptionsError,
  Credentials | HttpClient.HttpClient,
  OrderableClusterOption
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeOrderableClusterOptionsMessage,
  output: OrderableClusterOptionsMessage,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeOrderableClusterOptions",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "OrderableClusterOptions",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribePartnersError =
  | ClusterNotFoundFault
  | UnauthorizedPartnerIntegrationFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Returns information about the partner integrations defined for a cluster.
 */
export const describePartners: API.OperationMethod<
  DescribePartnersInputMessage,
  DescribePartnersOutputMessage,
  DescribePartnersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribePartnersInputMessage,
  output: DescribePartnersOutputMessage,
  errors: [ClusterNotFoundFault, UnauthorizedPartnerIntegrationFault, UnsupportedOperationFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePartners",
}));

export type DescribeQev2IdcApplicationsError =
  | DependentServiceAccessDeniedFault
  | DependentServiceUnavailableFault
  | Qev2IdcApplicationNotExistsFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Lists the Amazon Redshift Query Editor (QEV2) IAM Identity Center applications. To retrieve additional results, use the MaxRecords and Marker parameters.
 */
export const describeQev2IdcApplications: API.PaginatedOperationMethod<
  DescribeQev2IdcApplicationsMessage,
  DescribeQev2IdcApplicationsResult,
  DescribeQev2IdcApplicationsError,
  Credentials | HttpClient.HttpClient,
  Qev2IdcApplication
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeQev2IdcApplicationsMessage,
  output: DescribeQev2IdcApplicationsResult,
  errors: [
    DependentServiceAccessDeniedFault,
    DependentServiceUnavailableFault,
    Qev2IdcApplicationNotExistsFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeQev2IdcApplications",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Qev2IdcApplications",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeRedshiftIdcApplicationsError =
  | DependentServiceAccessDeniedFault
  | DependentServiceUnavailableFault
  | RedshiftIdcApplicationNotExistsFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Lists the Amazon Redshift IAM Identity Center applications.
 */
export const describeRedshiftIdcApplications: API.PaginatedOperationMethod<
  DescribeRedshiftIdcApplicationsMessage,
  DescribeRedshiftIdcApplicationsResult,
  DescribeRedshiftIdcApplicationsError,
  Credentials | HttpClient.HttpClient,
  RedshiftIdcApplication
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeRedshiftIdcApplicationsMessage,
  output: DescribeRedshiftIdcApplicationsResult,
  errors: [
    DependentServiceAccessDeniedFault,
    DependentServiceUnavailableFault,
    RedshiftIdcApplicationNotExistsFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRedshiftIdcApplications",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "RedshiftIdcApplications",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeReservedNodeExchangeStatusError =
  | ReservedNodeExchangeNotFoundFault
  | ReservedNodeNotFoundFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Returns exchange status details and associated metadata for a reserved-node
 * exchange. Statuses include such values as in progress and requested.
 */
export const describeReservedNodeExchangeStatus: API.PaginatedOperationMethod<
  DescribeReservedNodeExchangeStatusInputMessage,
  DescribeReservedNodeExchangeStatusOutputMessage,
  DescribeReservedNodeExchangeStatusError,
  Credentials | HttpClient.HttpClient,
  ReservedNodeExchangeStatus
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeReservedNodeExchangeStatusInputMessage,
  output: DescribeReservedNodeExchangeStatusOutputMessage,
  errors: [ReservedNodeExchangeNotFoundFault, ReservedNodeNotFoundFault, UnsupportedOperationFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeReservedNodeExchangeStatus",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "ReservedNodeExchangeStatusDetails",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeReservedNodeOfferingsError =
  | DependentServiceUnavailableFault
  | ReservedNodeOfferingNotFoundFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Returns a list of the available reserved node offerings by Amazon Redshift with their
 * descriptions including the node type, the fixed and recurring costs of reserving the
 * node and duration the node will be reserved for you. These descriptions help you
 * determine which reserve node offering you want to purchase. You then use the unique
 * offering ID in you call to PurchaseReservedNodeOffering to reserve one
 * or more nodes for your Amazon Redshift cluster.
 *
 * For more information about reserved node offerings, go to
 * Purchasing Reserved Nodes
 * in the *Amazon Redshift Cluster Management Guide*.
 */
export const describeReservedNodeOfferings: API.PaginatedOperationMethod<
  DescribeReservedNodeOfferingsMessage,
  ReservedNodeOfferingsMessage,
  DescribeReservedNodeOfferingsError,
  Credentials | HttpClient.HttpClient,
  ReservedNodeOffering
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeReservedNodeOfferingsMessage,
  output: ReservedNodeOfferingsMessage,
  errors: [
    DependentServiceUnavailableFault,
    ReservedNodeOfferingNotFoundFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeReservedNodeOfferings",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "ReservedNodeOfferings",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeReservedNodesError =
  | DependentServiceUnavailableFault
  | ReservedNodeNotFoundFault
  | CommonErrors;
/**
 * Returns the descriptions of the reserved nodes.
 */
export const describeReservedNodes: API.PaginatedOperationMethod<
  DescribeReservedNodesMessage,
  ReservedNodesMessage,
  DescribeReservedNodesError,
  Credentials | HttpClient.HttpClient,
  ReservedNode
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeReservedNodesMessage,
  output: ReservedNodesMessage,
  errors: [DependentServiceUnavailableFault, ReservedNodeNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeReservedNodes",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "ReservedNodes",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeResizeError =
  | ClusterNotFoundFault
  | ResizeNotFoundFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Returns information about the last resize operation for the specified cluster. If
 * no resize operation has ever been initiated for the specified cluster, a HTTP
 * 404 error is returned. If a resize operation was initiated and completed, the
 * status of the resize remains as `SUCCEEDED` until the next resize.
 *
 * A resize operation can be requested using ModifyCluster and
 * specifying a different number or type of nodes for the cluster.
 */
export const describeResize: API.OperationMethod<
  DescribeResizeMessage,
  ResizeProgressMessage,
  DescribeResizeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeResizeMessage,
  output: ResizeProgressMessage,
  errors: [ClusterNotFoundFault, ResizeNotFoundFault, UnsupportedOperationFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeResize",
}));

export type DescribeScheduledActionsError =
  | ScheduledActionNotFoundFault
  | UnauthorizedOperation
  | CommonErrors;
/**
 * Describes properties of scheduled actions.
 */
export const describeScheduledActions: API.PaginatedOperationMethod<
  DescribeScheduledActionsMessage,
  ScheduledActionsMessage,
  DescribeScheduledActionsError,
  Credentials | HttpClient.HttpClient,
  ScheduledAction
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeScheduledActionsMessage,
  output: ScheduledActionsMessage,
  errors: [ScheduledActionNotFoundFault, UnauthorizedOperation],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeScheduledActions",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "ScheduledActions",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeSnapshotCopyGrantsError =
  | InvalidTagFault
  | SnapshotCopyGrantNotFoundFault
  | CommonErrors;
/**
 * Returns a list of snapshot copy grants owned by the Amazon Web Services account in the destination
 * region.
 *
 * For more information about managing snapshot copy grants, go to
 * Amazon Redshift Database Encryption
 * in the *Amazon Redshift Cluster Management Guide*.
 */
export const describeSnapshotCopyGrants: API.PaginatedOperationMethod<
  DescribeSnapshotCopyGrantsMessage,
  SnapshotCopyGrantMessage,
  DescribeSnapshotCopyGrantsError,
  Credentials | HttpClient.HttpClient,
  SnapshotCopyGrant
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeSnapshotCopyGrantsMessage,
  output: SnapshotCopyGrantMessage,
  errors: [InvalidTagFault, SnapshotCopyGrantNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSnapshotCopyGrants",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "SnapshotCopyGrants",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeSnapshotSchedulesError = CommonErrors;
/**
 * Returns a list of snapshot schedules.
 */
export const describeSnapshotSchedules: API.PaginatedOperationMethod<
  DescribeSnapshotSchedulesMessage,
  DescribeSnapshotSchedulesOutputMessage,
  DescribeSnapshotSchedulesError,
  Credentials | HttpClient.HttpClient,
  SnapshotSchedule
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeSnapshotSchedulesMessage,
  output: DescribeSnapshotSchedulesOutputMessage,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSnapshotSchedules",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "SnapshotSchedules",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeStorageError = CommonErrors;
/**
 * Returns account level backups storage size and provisional storage.
 */
export const describeStorage: API.OperationMethod<
  DescribeStorageRequest,
  CustomerStorageMessage,
  DescribeStorageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeStorageRequest,
  output: CustomerStorageMessage,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeStorage",
}));

export type DescribeTableRestoreStatusError =
  | ClusterNotFoundFault
  | TableRestoreNotFoundFault
  | CommonErrors;
/**
 * Lists the status of one or more table restore requests made using the RestoreTableFromClusterSnapshot API action. If you don't specify a value
 * for the `TableRestoreRequestId` parameter, then
 * `DescribeTableRestoreStatus` returns the status of all table restore
 * requests ordered by the date and time of the request in ascending order. Otherwise
 * `DescribeTableRestoreStatus` returns the status of the table specified by
 * `TableRestoreRequestId`.
 */
export const describeTableRestoreStatus: API.PaginatedOperationMethod<
  DescribeTableRestoreStatusMessage,
  TableRestoreStatusMessage,
  DescribeTableRestoreStatusError,
  Credentials | HttpClient.HttpClient,
  TableRestoreStatus
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeTableRestoreStatusMessage,
  output: TableRestoreStatusMessage,
  errors: [ClusterNotFoundFault, TableRestoreNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTableRestoreStatus",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "TableRestoreStatusDetails",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeTagsError = InvalidTagFault | ResourceNotFoundFault | CommonErrors;
/**
 * Returns a list of tags. You can return tags from a specific resource by specifying
 * an ARN, or you can return all tags for a given type of resource, such as clusters,
 * snapshots, and so on.
 *
 * The following are limitations for `DescribeTags`:
 *
 * - You cannot specify an ARN and a resource-type value together in the same
 * request.
 *
 * - You cannot use the `MaxRecords` and `Marker`
 * parameters together with the ARN parameter.
 *
 * - The `MaxRecords` parameter can be a range from 10 to 50 results
 * to return in a request.
 *
 * If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 * all resources that match any combination of the specified keys and values. For example,
 * if you have `owner` and `environment` for tag keys, and
 * `admin` and `test` for tag values, all resources that have any
 * combination of those values are returned.
 *
 * If both tag keys and values are omitted from the request, resources are returned
 * regardless of whether they have tag keys or values associated with them.
 */
export const describeTags: API.PaginatedOperationMethod<
  DescribeTagsMessage,
  TaggedResourceListMessage,
  DescribeTagsError,
  Credentials | HttpClient.HttpClient,
  TaggedResource
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeTagsMessage,
  output: TaggedResourceListMessage,
  errors: [InvalidTagFault, ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTags",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "TaggedResources",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeUsageLimitsError =
  | ClusterNotFoundFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Shows usage limits on a cluster.
 * Results are filtered based on the combination of input usage limit identifier, cluster identifier, and feature type parameters:
 *
 * - If usage limit identifier, cluster identifier, and feature type are not provided,
 * then all usage limit objects for the current account in the current region are returned.
 *
 * - If usage limit identifier is provided,
 * then the corresponding usage limit object is returned.
 *
 * - If cluster identifier is provided,
 * then all usage limit objects for the specified cluster are returned.
 *
 * - If cluster identifier and feature type are provided,
 * then all usage limit objects for the combination of cluster and feature are returned.
 */
export const describeUsageLimits: API.PaginatedOperationMethod<
  DescribeUsageLimitsMessage,
  UsageLimitList,
  DescribeUsageLimitsError,
  Credentials | HttpClient.HttpClient,
  UsageLimit
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeUsageLimitsMessage,
  output: UsageLimitList,
  errors: [ClusterNotFoundFault, UnsupportedOperationFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeUsageLimits",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "UsageLimits",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DisableLoggingError =
  | ClusterNotFoundFault
  | InvalidClusterStateFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Stops logging information, such as queries and connection attempts, for the
 * specified Amazon Redshift cluster.
 */
export const disableLogging: API.OperationMethod<
  DisableLoggingMessage,
  LoggingStatus,
  DisableLoggingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableLoggingMessage,
  output: LoggingStatus,
  errors: [ClusterNotFoundFault, InvalidClusterStateFault, UnsupportedOperationFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableLogging",
}));

export type DisableSnapshotCopyError =
  | ClusterNotFoundFault
  | InvalidClusterStateFault
  | SnapshotCopyAlreadyDisabledFault
  | UnauthorizedOperation
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Disables the automatic copying of snapshots from one region to another region for a
 * specified cluster.
 *
 * If your cluster and its snapshots are encrypted using an encrypted symmetric key
 * from Key Management Service, use DeleteSnapshotCopyGrant to delete the grant that
 * grants Amazon Redshift permission to the key in the destination region.
 */
export const disableSnapshotCopy: API.OperationMethod<
  DisableSnapshotCopyMessage,
  DisableSnapshotCopyResult,
  DisableSnapshotCopyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableSnapshotCopyMessage,
  output: DisableSnapshotCopyResult,
  errors: [
    ClusterNotFoundFault,
    InvalidClusterStateFault,
    SnapshotCopyAlreadyDisabledFault,
    UnauthorizedOperation,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableSnapshotCopy",
}));

export type DisassociateDataShareConsumerError =
  | InvalidDataShareFault
  | InvalidNamespaceFault
  | CommonErrors;
/**
 * From a datashare consumer account, remove association for the specified datashare.
 */
export const disassociateDataShareConsumer: API.OperationMethod<
  DisassociateDataShareConsumerMessage,
  DataShare,
  DisassociateDataShareConsumerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateDataShareConsumerMessage,
  output: DataShare,
  errors: [InvalidDataShareFault, InvalidNamespaceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateDataShareConsumer",
}));

export type EnableLoggingError =
  | BucketNotFoundFault
  | ClusterNotFoundFault
  | InsufficientS3BucketPolicyFault
  | InvalidClusterStateFault
  | InvalidS3BucketNameFault
  | InvalidS3KeyPrefixFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Starts logging information, such as queries and connection attempts, for the
 * specified Amazon Redshift cluster.
 */
export const enableLogging: API.OperationMethod<
  EnableLoggingMessage,
  LoggingStatus,
  EnableLoggingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableLoggingMessage,
  output: LoggingStatus,
  errors: [
    BucketNotFoundFault,
    ClusterNotFoundFault,
    InsufficientS3BucketPolicyFault,
    InvalidClusterStateFault,
    InvalidS3BucketNameFault,
    InvalidS3KeyPrefixFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableLogging",
}));

export type EnableSnapshotCopyError =
  | ClusterNotFoundFault
  | CopyToRegionDisabledFault
  | DependentServiceRequestThrottlingFault
  | IncompatibleOrderableOptions
  | InvalidClusterStateFault
  | InvalidRetentionPeriodFault
  | LimitExceededFault
  | SnapshotCopyAlreadyEnabledFault
  | SnapshotCopyGrantNotFoundFault
  | UnauthorizedOperation
  | UnknownSnapshotCopyRegionFault
  | CommonErrors;
/**
 * Enables the automatic copy of snapshots from one region to another region for a
 * specified cluster.
 */
export const enableSnapshotCopy: API.OperationMethod<
  EnableSnapshotCopyMessage,
  EnableSnapshotCopyResult,
  EnableSnapshotCopyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableSnapshotCopyMessage,
  output: EnableSnapshotCopyResult,
  errors: [
    ClusterNotFoundFault,
    CopyToRegionDisabledFault,
    DependentServiceRequestThrottlingFault,
    IncompatibleOrderableOptions,
    InvalidClusterStateFault,
    InvalidRetentionPeriodFault,
    LimitExceededFault,
    SnapshotCopyAlreadyEnabledFault,
    SnapshotCopyGrantNotFoundFault,
    UnauthorizedOperation,
    UnknownSnapshotCopyRegionFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableSnapshotCopy",
}));

export type FailoverPrimaryComputeError =
  | ClusterNotFoundFault
  | InvalidClusterStateFault
  | UnauthorizedOperation
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Fails over the primary compute unit of the specified Multi-AZ cluster to another Availability Zone.
 */
export const failoverPrimaryCompute: API.OperationMethod<
  FailoverPrimaryComputeInputMessage,
  FailoverPrimaryComputeResult,
  FailoverPrimaryComputeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: FailoverPrimaryComputeInputMessage,
  output: FailoverPrimaryComputeResult,
  errors: [
    ClusterNotFoundFault,
    InvalidClusterStateFault,
    UnauthorizedOperation,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "FailoverPrimaryCompute",
}));

export type GetClusterCredentialsError =
  | ClusterNotFoundFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Returns a database user name and temporary password with temporary authorization to
 * log on to an Amazon Redshift database. The action returns the database user name
 * prefixed with `IAM:` if `AutoCreate` is `False` or
 * `IAMA:` if `AutoCreate` is `True`. You can
 * optionally specify one or more database user groups that the user will join at log on.
 * By default, the temporary credentials expire in 900 seconds. You can optionally specify
 * a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more
 * information, see Using IAM Authentication
 * to Generate Database User Credentials in the Amazon Redshift Cluster Management Guide.
 *
 * The Identity and Access Management (IAM) user or role that runs
 * GetClusterCredentials must have an IAM policy attached that allows access to all
 * necessary actions and resources. For more information about permissions, see Resource Policies for GetClusterCredentials in the
 * Amazon Redshift Cluster Management Guide.
 *
 * If the `DbGroups` parameter is specified, the IAM policy must allow the
 * `redshift:JoinGroup` action with access to the listed
 * `dbgroups`.
 *
 * In addition, if the `AutoCreate` parameter is set to `True`,
 * then the policy must include the `redshift:CreateClusterUser`
 * permission.
 *
 * If the `DbName` parameter is specified, the IAM policy must allow access
 * to the resource `dbname` for the specified database name.
 */
export const getClusterCredentials: API.OperationMethod<
  GetClusterCredentialsMessage,
  ClusterCredentials,
  GetClusterCredentialsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetClusterCredentialsMessage,
  output: ClusterCredentials,
  errors: [ClusterNotFoundFault, UnsupportedOperationFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetClusterCredentials",
}));

export type GetClusterCredentialsWithIAMError =
  | ClusterNotFoundFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Returns a database user name and temporary password with temporary authorization to
 * log in to an Amazon Redshift database.
 * The database user is mapped 1:1 to the source Identity and Access Management (IAM) identity.
 * For more information about IAM identities, see IAM Identities (users, user groups, and roles) in the
 * Amazon Web Services Identity and Access Management User Guide.
 *
 * The Identity and Access Management (IAM) identity that runs
 * this operation must have an IAM policy attached that allows access to all
 * necessary actions and resources.
 * For more information about permissions, see Using identity-based policies (IAM policies) in the
 * Amazon Redshift Cluster Management Guide.
 */
export const getClusterCredentialsWithIAM: API.OperationMethod<
  GetClusterCredentialsWithIAMMessage,
  ClusterExtendedCredentials,
  GetClusterCredentialsWithIAMError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetClusterCredentialsWithIAMMessage,
  output: ClusterExtendedCredentials,
  errors: [ClusterNotFoundFault, UnsupportedOperationFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetClusterCredentialsWithIAM",
}));

export type GetIdentityCenterAuthTokenError =
  | ClusterNotFoundFault
  | InvalidClusterStateFault
  | RedshiftInvalidParameterFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Generates an encrypted authentication token that propagates the caller's
 * Amazon Web Services IAM Identity Center identity to Amazon Redshift clusters. This API extracts the
 * Amazon Web Services IAM Identity Center identity from enhanced credentials and creates a secure token
 * that Amazon Redshift drivers can use for authentication.
 *
 * The token is encrypted using Key Management Service (KMS) and can only be
 * decrypted by the specified Amazon Redshift clusters. The token contains the caller's
 * Amazon Web Services IAM Identity Center identity information and is valid for a limited time period.
 *
 * This API is exclusively for use with Amazon Web Services IAM Identity Center enhanced credentials. If the
 * caller is not using enhanced credentials with embedded Amazon Web Services IAM Identity Center identity, the API will
 * return an error.
 */
export const getIdentityCenterAuthToken: API.OperationMethod<
  GetIdentityCenterAuthTokenRequest,
  GetIdentityCenterAuthTokenResponse,
  GetIdentityCenterAuthTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIdentityCenterAuthTokenRequest,
  output: GetIdentityCenterAuthTokenResponse,
  errors: [
    ClusterNotFoundFault,
    InvalidClusterStateFault,
    RedshiftInvalidParameterFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIdentityCenterAuthToken",
}));

export type GetReservedNodeExchangeConfigurationOptionsError =
  | ClusterNotFoundFault
  | ClusterSnapshotNotFoundFault
  | DependentServiceUnavailableFault
  | InvalidReservedNodeStateFault
  | ReservedNodeAlreadyMigratedFault
  | ReservedNodeNotFoundFault
  | ReservedNodeOfferingNotFoundFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Gets the configuration options for the reserved-node exchange. These options
 * include information about the source reserved node and target reserved node offering.
 * Details include the node type, the price, the node count, and the offering type.
 */
export const getReservedNodeExchangeConfigurationOptions: API.PaginatedOperationMethod<
  GetReservedNodeExchangeConfigurationOptionsInputMessage,
  GetReservedNodeExchangeConfigurationOptionsOutputMessage,
  GetReservedNodeExchangeConfigurationOptionsError,
  Credentials | HttpClient.HttpClient,
  ReservedNodeConfigurationOption
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetReservedNodeExchangeConfigurationOptionsInputMessage,
  output: GetReservedNodeExchangeConfigurationOptionsOutputMessage,
  errors: [
    ClusterNotFoundFault,
    ClusterSnapshotNotFoundFault,
    DependentServiceUnavailableFault,
    InvalidReservedNodeStateFault,
    ReservedNodeAlreadyMigratedFault,
    ReservedNodeNotFoundFault,
    ReservedNodeOfferingNotFoundFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetReservedNodeExchangeConfigurationOptions",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "ReservedNodeConfigurationOptionList",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type GetReservedNodeExchangeOfferingsError =
  | DependentServiceUnavailableFault
  | InvalidReservedNodeStateFault
  | ReservedNodeAlreadyMigratedFault
  | ReservedNodeNotFoundFault
  | ReservedNodeOfferingNotFoundFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term,
 * and usage price of the given DC1 reserved node.
 */
export const getReservedNodeExchangeOfferings: API.PaginatedOperationMethod<
  GetReservedNodeExchangeOfferingsInputMessage,
  GetReservedNodeExchangeOfferingsOutputMessage,
  GetReservedNodeExchangeOfferingsError,
  Credentials | HttpClient.HttpClient,
  ReservedNodeOffering
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetReservedNodeExchangeOfferingsInputMessage,
  output: GetReservedNodeExchangeOfferingsOutputMessage,
  errors: [
    DependentServiceUnavailableFault,
    InvalidReservedNodeStateFault,
    ReservedNodeAlreadyMigratedFault,
    ReservedNodeNotFoundFault,
    ReservedNodeOfferingNotFoundFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetReservedNodeExchangeOfferings",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "ReservedNodeOfferings",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type GetResourcePolicyError =
  | InvalidPolicyFault
  | ResourceNotFoundFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Get the resource policy for a specified resource.
 */
export const getResourcePolicy: API.OperationMethod<
  GetResourcePolicyMessage,
  GetResourcePolicyResult,
  GetResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetResourcePolicyMessage,
  output: GetResourcePolicyResult,
  errors: [InvalidPolicyFault, ResourceNotFoundFault, UnsupportedOperationFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourcePolicy",
}));

export type ListRecommendationsError =
  | ClusterNotFoundFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * List the Amazon Redshift Advisor recommendations for one or multiple Amazon Redshift clusters in an Amazon Web Services account.
 */
export const listRecommendations: API.PaginatedOperationMethod<
  ListRecommendationsMessage,
  ListRecommendationsResult,
  ListRecommendationsError,
  Credentials | HttpClient.HttpClient,
  Recommendation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRecommendationsMessage,
  output: ListRecommendationsResult,
  errors: [ClusterNotFoundFault, UnsupportedOperationFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRecommendations",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Recommendations",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type ModifyAquaConfigurationError =
  | ClusterNotFoundFault
  | InvalidClusterStateFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * This operation is retired. Calling this operation does not change AQUA configuration. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).
 */
export const modifyAquaConfiguration: API.OperationMethod<
  ModifyAquaInputMessage,
  ModifyAquaOutputMessage,
  ModifyAquaConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyAquaInputMessage,
  output: ModifyAquaOutputMessage,
  errors: [ClusterNotFoundFault, InvalidClusterStateFault, UnsupportedOperationFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyAquaConfiguration",
}));

export type ModifyAuthenticationProfileError =
  | AuthenticationProfileNotFoundFault
  | AuthenticationProfileQuotaExceededFault
  | InvalidAuthenticationProfileRequestFault
  | CommonErrors;
/**
 * Modifies an authentication profile.
 */
export const modifyAuthenticationProfile: API.OperationMethod<
  ModifyAuthenticationProfileMessage,
  ModifyAuthenticationProfileResult,
  ModifyAuthenticationProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyAuthenticationProfileMessage,
  output: ModifyAuthenticationProfileResult,
  errors: [
    AuthenticationProfileNotFoundFault,
    AuthenticationProfileQuotaExceededFault,
    InvalidAuthenticationProfileRequestFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyAuthenticationProfile",
}));

export type ModifyClusterError =
  | ClusterAlreadyExistsFault
  | ClusterNotFoundFault
  | ClusterParameterGroupNotFoundFault
  | ClusterSecurityGroupNotFoundFault
  | CustomCnameAssociationFault
  | DependentServiceRequestThrottlingFault
  | HsmClientCertificateNotFoundFault
  | HsmConfigurationNotFoundFault
  | InsufficientClusterCapacityFault
  | InvalidClusterSecurityGroupStateFault
  | InvalidClusterStateFault
  | InvalidClusterTrackFault
  | InvalidElasticIpFault
  | InvalidRetentionPeriodFault
  | Ipv6CidrBlockNotFoundFault
  | LimitExceededFault
  | NumberOfNodesPerClusterLimitExceededFault
  | NumberOfNodesQuotaExceededFault
  | TableLimitExceededFault
  | UnauthorizedOperation
  | UnsupportedOperationFault
  | UnsupportedOptionFault
  | CommonErrors;
/**
 * Modifies the settings for a cluster.
 *
 * You can also change node type and the number of nodes to scale up or down the
 * cluster. When resizing a cluster, you must specify both the number of nodes and the node
 * type even if one of the parameters does not change.
 *
 * You can add another security or
 * parameter group, or change the admin user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect.
 * For more information about managing clusters, go to
 * Amazon Redshift Clusters
 * in the *Amazon Redshift Cluster Management Guide*.
 *
 * VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that
 * you own in a Region from reaching or being reached from the internet through internet
 * gateways and egress-only internet gateways. If a subnet group for a
 * provisioned cluster is in an account with VPC BPA turned on, the following capabilities
 * are blocked:
 *
 * - Creating a public cluster
 *
 * - Restoring a public cluster
 *
 * - Modifying a private cluster to be public
 *
 * - Adding a subnet with VPC BPA turned on to the subnet group when there's at
 * least one public cluster within the group
 *
 * For more information about VPC BPA, see Block public access to VPCs and
 * subnets in the *Amazon VPC User Guide*.
 */
export const modifyCluster: API.OperationMethod<
  ModifyClusterMessage,
  ModifyClusterResult,
  ModifyClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyClusterMessage,
  output: ModifyClusterResult,
  errors: [
    ClusterAlreadyExistsFault,
    ClusterNotFoundFault,
    ClusterParameterGroupNotFoundFault,
    ClusterSecurityGroupNotFoundFault,
    CustomCnameAssociationFault,
    DependentServiceRequestThrottlingFault,
    HsmClientCertificateNotFoundFault,
    HsmConfigurationNotFoundFault,
    InsufficientClusterCapacityFault,
    InvalidClusterSecurityGroupStateFault,
    InvalidClusterStateFault,
    InvalidClusterTrackFault,
    InvalidElasticIpFault,
    InvalidRetentionPeriodFault,
    Ipv6CidrBlockNotFoundFault,
    LimitExceededFault,
    NumberOfNodesPerClusterLimitExceededFault,
    NumberOfNodesQuotaExceededFault,
    TableLimitExceededFault,
    UnauthorizedOperation,
    UnsupportedOperationFault,
    UnsupportedOptionFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyCluster",
}));

export type ModifyClusterDbRevisionError =
  | ClusterNotFoundFault
  | ClusterOnLatestRevisionFault
  | InvalidClusterStateFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Modifies the database revision of a cluster. The database revision is a unique
 * revision of the database running in a cluster.
 */
export const modifyClusterDbRevision: API.OperationMethod<
  ModifyClusterDbRevisionMessage,
  ModifyClusterDbRevisionResult,
  ModifyClusterDbRevisionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyClusterDbRevisionMessage,
  output: ModifyClusterDbRevisionResult,
  errors: [
    ClusterNotFoundFault,
    ClusterOnLatestRevisionFault,
    InvalidClusterStateFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyClusterDbRevision",
}));

export type ModifyClusterIamRolesError =
  | ClusterNotFoundFault
  | InvalidClusterStateFault
  | CommonErrors;
/**
 * Modifies the list of Identity and Access Management (IAM) roles that can be
 * used by the cluster to access other Amazon Web Services services.
 *
 * The maximum number of IAM roles that you can associate is subject to a quota.
 * For more information, go to Quotas and limits
 * in the *Amazon Redshift Cluster Management Guide*.
 */
export const modifyClusterIamRoles: API.OperationMethod<
  ModifyClusterIamRolesMessage,
  ModifyClusterIamRolesResult,
  ModifyClusterIamRolesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyClusterIamRolesMessage,
  output: ModifyClusterIamRolesResult,
  errors: [ClusterNotFoundFault, InvalidClusterStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyClusterIamRoles",
}));

export type ModifyClusterMaintenanceError =
  | ClusterNotFoundFault
  | InvalidClusterStateFault
  | CommonErrors;
/**
 * Modifies the maintenance settings of a cluster.
 */
export const modifyClusterMaintenance: API.OperationMethod<
  ModifyClusterMaintenanceMessage,
  ModifyClusterMaintenanceResult,
  ModifyClusterMaintenanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyClusterMaintenanceMessage,
  output: ModifyClusterMaintenanceResult,
  errors: [ClusterNotFoundFault, InvalidClusterStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyClusterMaintenance",
}));

export type ModifyClusterParameterGroupError =
  | ClusterParameterGroupNotFoundFault
  | InvalidClusterParameterGroupStateFault
  | CommonErrors;
/**
 * Modifies the parameters of a parameter group. For the parameters parameter, it can't contain ASCII characters.
 *
 * For more information about parameters and parameter groups, go to
 * Amazon Redshift Parameter Groups
 * in the *Amazon Redshift Cluster Management Guide*.
 */
export const modifyClusterParameterGroup: API.OperationMethod<
  ModifyClusterParameterGroupMessage,
  ClusterParameterGroupNameMessage,
  ModifyClusterParameterGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyClusterParameterGroupMessage,
  output: ClusterParameterGroupNameMessage,
  errors: [ClusterParameterGroupNotFoundFault, InvalidClusterParameterGroupStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyClusterParameterGroup",
}));

export type ModifyClusterSnapshotError =
  | ClusterSnapshotNotFoundFault
  | InvalidClusterSnapshotStateFault
  | InvalidRetentionPeriodFault
  | CommonErrors;
/**
 * Modifies the settings for a snapshot.
 *
 * This exanmple modifies the manual retention period setting for a cluster snapshot.
 */
export const modifyClusterSnapshot: API.OperationMethod<
  ModifyClusterSnapshotMessage,
  ModifyClusterSnapshotResult,
  ModifyClusterSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyClusterSnapshotMessage,
  output: ModifyClusterSnapshotResult,
  errors: [
    ClusterSnapshotNotFoundFault,
    InvalidClusterSnapshotStateFault,
    InvalidRetentionPeriodFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyClusterSnapshot",
}));

export type ModifyClusterSnapshotScheduleError =
  | ClusterNotFoundFault
  | InvalidClusterSnapshotScheduleStateFault
  | SnapshotScheduleNotFoundFault
  | CommonErrors;
/**
 * Modifies a snapshot schedule for a cluster.
 */
export const modifyClusterSnapshotSchedule: API.OperationMethod<
  ModifyClusterSnapshotScheduleMessage,
  ModifyClusterSnapshotScheduleResponse,
  ModifyClusterSnapshotScheduleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyClusterSnapshotScheduleMessage,
  output: ModifyClusterSnapshotScheduleResponse,
  errors: [
    ClusterNotFoundFault,
    InvalidClusterSnapshotScheduleStateFault,
    SnapshotScheduleNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyClusterSnapshotSchedule",
}));

export type ModifyClusterSubnetGroupError =
  | ClusterSubnetGroupNotFoundFault
  | ClusterSubnetQuotaExceededFault
  | DependentServiceRequestThrottlingFault
  | InvalidSubnet
  | SubnetAlreadyInUse
  | UnauthorizedOperation
  | CommonErrors;
/**
 * Modifies a cluster subnet group to include the specified list of VPC subnets. The
 * operation replaces the existing list of subnets with the new list of subnets.
 *
 * VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that
 * you own in a Region from reaching or being reached from the internet through internet
 * gateways and egress-only internet gateways. If a subnet group for a
 * provisioned cluster is in an account with VPC BPA turned on, the following capabilities
 * are blocked:
 *
 * - Creating a public cluster
 *
 * - Restoring a public cluster
 *
 * - Modifying a private cluster to be public
 *
 * - Adding a subnet with VPC BPA turned on to the subnet group when there's at
 * least one public cluster within the group
 *
 * For more information about VPC BPA, see Block public access to VPCs and
 * subnets in the *Amazon VPC User Guide*.
 */
export const modifyClusterSubnetGroup: API.OperationMethod<
  ModifyClusterSubnetGroupMessage,
  ModifyClusterSubnetGroupResult,
  ModifyClusterSubnetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyClusterSubnetGroupMessage,
  output: ModifyClusterSubnetGroupResult,
  errors: [
    ClusterSubnetGroupNotFoundFault,
    ClusterSubnetQuotaExceededFault,
    DependentServiceRequestThrottlingFault,
    InvalidSubnet,
    SubnetAlreadyInUse,
    UnauthorizedOperation,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyClusterSubnetGroup",
}));

export type ModifyCustomDomainAssociationError =
  | ClusterNotFoundFault
  | CustomCnameAssociationFault
  | CustomDomainAssociationNotFoundFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Contains information for changing a custom domain association.
 */
export const modifyCustomDomainAssociation: API.OperationMethod<
  ModifyCustomDomainAssociationMessage,
  ModifyCustomDomainAssociationResult,
  ModifyCustomDomainAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyCustomDomainAssociationMessage,
  output: ModifyCustomDomainAssociationResult,
  errors: [
    ClusterNotFoundFault,
    CustomCnameAssociationFault,
    CustomDomainAssociationNotFoundFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyCustomDomainAssociation",
}));

export type ModifyEndpointAccessError =
  | ClusterNotFoundFault
  | EndpointNotFoundFault
  | InvalidClusterSecurityGroupStateFault
  | InvalidClusterStateFault
  | InvalidEndpointStateFault
  | UnauthorizedOperation
  | CommonErrors;
/**
 * Modifies a Redshift-managed VPC endpoint.
 */
export const modifyEndpointAccess: API.OperationMethod<
  ModifyEndpointAccessMessage,
  EndpointAccess,
  ModifyEndpointAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyEndpointAccessMessage,
  output: EndpointAccess,
  errors: [
    ClusterNotFoundFault,
    EndpointNotFoundFault,
    InvalidClusterSecurityGroupStateFault,
    InvalidClusterStateFault,
    InvalidEndpointStateFault,
    UnauthorizedOperation,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyEndpointAccess",
}));

export type ModifyEventSubscriptionError =
  | InvalidSubscriptionStateFault
  | SNSInvalidTopicFault
  | SNSNoAuthorizationFault
  | SNSTopicArnNotFoundFault
  | SourceNotFoundFault
  | SubscriptionCategoryNotFoundFault
  | SubscriptionEventIdNotFoundFault
  | SubscriptionNotFoundFault
  | SubscriptionSeverityNotFoundFault
  | CommonErrors;
/**
 * Modifies an existing Amazon Redshift event notification subscription.
 */
export const modifyEventSubscription: API.OperationMethod<
  ModifyEventSubscriptionMessage,
  ModifyEventSubscriptionResult,
  ModifyEventSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyEventSubscriptionMessage,
  output: ModifyEventSubscriptionResult,
  errors: [
    InvalidSubscriptionStateFault,
    SNSInvalidTopicFault,
    SNSNoAuthorizationFault,
    SNSTopicArnNotFoundFault,
    SourceNotFoundFault,
    SubscriptionCategoryNotFoundFault,
    SubscriptionEventIdNotFoundFault,
    SubscriptionNotFoundFault,
    SubscriptionSeverityNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyEventSubscription",
}));

export type ModifyIntegrationError =
  | IntegrationAlreadyExistsFault
  | IntegrationConflictOperationFault
  | IntegrationConflictStateFault
  | IntegrationNotFoundFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Modifies a zero-ETL integration or S3 event integration with Amazon Redshift.
 */
export const modifyIntegration: API.OperationMethod<
  ModifyIntegrationMessage,
  Integration,
  ModifyIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyIntegrationMessage,
  output: Integration,
  errors: [
    IntegrationAlreadyExistsFault,
    IntegrationConflictOperationFault,
    IntegrationConflictStateFault,
    IntegrationNotFoundFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyIntegration",
}));

export type ModifyLakehouseConfigurationError =
  | ClusterNotFoundFault
  | DependentServiceAccessDeniedFault
  | DependentServiceUnavailableFault
  | InvalidClusterStateFault
  | RedshiftIdcApplicationNotExistsFault
  | UnauthorizedOperation
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Modifies the lakehouse configuration for a cluster. This operation allows you to manage Amazon Redshift federated permissions and Amazon Web Services IAM Identity Center trusted identity propagation.
 */
export const modifyLakehouseConfiguration: API.OperationMethod<
  ModifyLakehouseConfigurationMessage,
  LakehouseConfiguration,
  ModifyLakehouseConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyLakehouseConfigurationMessage,
  output: LakehouseConfiguration,
  errors: [
    ClusterNotFoundFault,
    DependentServiceAccessDeniedFault,
    DependentServiceUnavailableFault,
    InvalidClusterStateFault,
    RedshiftIdcApplicationNotExistsFault,
    UnauthorizedOperation,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyLakehouseConfiguration",
}));

export type ModifyQev2IdcApplicationError =
  | DependentServiceAccessDeniedFault
  | DependentServiceUnavailableFault
  | Qev2IdcApplicationNotExistsFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Modifies an Amazon Redshift Query Editor (QEV2) IAM Identity Center application.
 */
export const modifyQev2IdcApplication: API.OperationMethod<
  ModifyQev2IdcApplicationMessage,
  ModifyQev2IdcApplicationResult,
  ModifyQev2IdcApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyQev2IdcApplicationMessage,
  output: ModifyQev2IdcApplicationResult,
  errors: [
    DependentServiceAccessDeniedFault,
    DependentServiceUnavailableFault,
    Qev2IdcApplicationNotExistsFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyQev2IdcApplication",
}));

export type ModifyRedshiftIdcApplicationError =
  | DependentServiceAccessDeniedFault
  | DependentServiceUnavailableFault
  | RedshiftIdcApplicationNotExistsFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Changes an existing Amazon Redshift IAM Identity Center application.
 */
export const modifyRedshiftIdcApplication: API.OperationMethod<
  ModifyRedshiftIdcApplicationMessage,
  ModifyRedshiftIdcApplicationResult,
  ModifyRedshiftIdcApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyRedshiftIdcApplicationMessage,
  output: ModifyRedshiftIdcApplicationResult,
  errors: [
    DependentServiceAccessDeniedFault,
    DependentServiceUnavailableFault,
    RedshiftIdcApplicationNotExistsFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyRedshiftIdcApplication",
}));

export type ModifyScheduledActionError =
  | ClusterNotFoundFault
  | InvalidScheduledActionFault
  | InvalidScheduleFault
  | ScheduledActionNotFoundFault
  | ScheduledActionTypeUnsupportedFault
  | UnauthorizedOperation
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Modifies a scheduled action.
 */
export const modifyScheduledAction: API.OperationMethod<
  ModifyScheduledActionMessage,
  ScheduledAction,
  ModifyScheduledActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyScheduledActionMessage,
  output: ScheduledAction,
  errors: [
    ClusterNotFoundFault,
    InvalidScheduledActionFault,
    InvalidScheduleFault,
    ScheduledActionNotFoundFault,
    ScheduledActionTypeUnsupportedFault,
    UnauthorizedOperation,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyScheduledAction",
}));

export type ModifySnapshotCopyRetentionPeriodError =
  | ClusterNotFoundFault
  | InvalidClusterStateFault
  | InvalidRetentionPeriodFault
  | SnapshotCopyDisabledFault
  | UnauthorizedOperation
  | CommonErrors;
/**
 * Modifies the number of days to retain snapshots in the destination Amazon Web Services Region after
 * they are copied from the source Amazon Web Services Region. By default, this operation only changes the
 * retention period of copied automated snapshots. The retention periods for both new and
 * existing copied automated snapshots are updated with the new retention period. You can
 * set the manual option to change only the retention periods of copied manual snapshots.
 * If you set this option, only newly copied manual snapshots have the new retention
 * period.
 */
export const modifySnapshotCopyRetentionPeriod: API.OperationMethod<
  ModifySnapshotCopyRetentionPeriodMessage,
  ModifySnapshotCopyRetentionPeriodResult,
  ModifySnapshotCopyRetentionPeriodError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifySnapshotCopyRetentionPeriodMessage,
  output: ModifySnapshotCopyRetentionPeriodResult,
  errors: [
    ClusterNotFoundFault,
    InvalidClusterStateFault,
    InvalidRetentionPeriodFault,
    SnapshotCopyDisabledFault,
    UnauthorizedOperation,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifySnapshotCopyRetentionPeriod",
}));

export type ModifySnapshotScheduleError =
  | InvalidScheduleFault
  | SnapshotScheduleNotFoundFault
  | SnapshotScheduleUpdateInProgressFault
  | CommonErrors;
/**
 * Modifies a snapshot schedule. Any schedule associated with a cluster is modified
 * asynchronously.
 */
export const modifySnapshotSchedule: API.OperationMethod<
  ModifySnapshotScheduleMessage,
  SnapshotSchedule,
  ModifySnapshotScheduleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifySnapshotScheduleMessage,
  output: SnapshotSchedule,
  errors: [
    InvalidScheduleFault,
    SnapshotScheduleNotFoundFault,
    SnapshotScheduleUpdateInProgressFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifySnapshotSchedule",
}));

export type ModifyUsageLimitError =
  | InvalidUsageLimitFault
  | UnsupportedOperationFault
  | UsageLimitNotFoundFault
  | CommonErrors;
/**
 * Modifies a usage limit in a cluster.
 * You can't modify the feature type or period of a usage limit.
 */
export const modifyUsageLimit: API.OperationMethod<
  ModifyUsageLimitMessage,
  UsageLimit,
  ModifyUsageLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyUsageLimitMessage,
  output: UsageLimit,
  errors: [InvalidUsageLimitFault, UnsupportedOperationFault, UsageLimitNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyUsageLimit",
}));

export type PauseClusterError =
  | ClusterNotFoundFault
  | InvalidClusterStateFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Pauses a cluster.
 */
export const pauseCluster: API.OperationMethod<
  PauseClusterMessage,
  PauseClusterResult,
  PauseClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PauseClusterMessage,
  output: PauseClusterResult,
  errors: [ClusterNotFoundFault, InvalidClusterStateFault, UnsupportedOperationFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PauseCluster",
}));

export type PurchaseReservedNodeOfferingError =
  | ReservedNodeAlreadyExistsFault
  | ReservedNodeOfferingNotFoundFault
  | ReservedNodeQuotaExceededFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of
 * reserved node offerings. You can purchase one or more of the offerings. You can call the
 * DescribeReservedNodeOfferings API to obtain the available reserved
 * node offerings. You can call this API by providing a specific reserved node offering and
 * the number of nodes you want to reserve.
 *
 * For more information about reserved node offerings, go to
 * Purchasing Reserved Nodes
 * in the *Amazon Redshift Cluster Management Guide*.
 */
export const purchaseReservedNodeOffering: API.OperationMethod<
  PurchaseReservedNodeOfferingMessage,
  PurchaseReservedNodeOfferingResult,
  PurchaseReservedNodeOfferingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PurchaseReservedNodeOfferingMessage,
  output: PurchaseReservedNodeOfferingResult,
  errors: [
    ReservedNodeAlreadyExistsFault,
    ReservedNodeOfferingNotFoundFault,
    ReservedNodeQuotaExceededFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PurchaseReservedNodeOffering",
}));

export type PutResourcePolicyError =
  | ConflictPolicyUpdateFault
  | InvalidPolicyFault
  | ResourceNotFoundFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Updates the resource policy for a specified resource.
 */
export const putResourcePolicy: API.OperationMethod<
  PutResourcePolicyMessage,
  PutResourcePolicyResult,
  PutResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutResourcePolicyMessage,
  output: PutResourcePolicyResult,
  errors: [
    ConflictPolicyUpdateFault,
    InvalidPolicyFault,
    ResourceNotFoundFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutResourcePolicy",
}));

export type RebootClusterError = ClusterNotFoundFault | InvalidClusterStateFault | CommonErrors;
/**
 * Reboots a cluster. This action is taken as soon as possible. It results in a
 * momentary outage to the cluster, during which the cluster status is set to
 * `rebooting`. A cluster event is created when the reboot is completed. Any
 * pending cluster modifications (see ModifyCluster) are applied at this
 * reboot.
 * For more information about managing clusters, go to
 * Amazon Redshift Clusters
 * in the *Amazon Redshift Cluster Management Guide*.
 */
export const rebootCluster: API.OperationMethod<
  RebootClusterMessage,
  RebootClusterResult,
  RebootClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RebootClusterMessage,
  output: RebootClusterResult,
  errors: [ClusterNotFoundFault, InvalidClusterStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RebootCluster",
}));

export type RegisterNamespaceError =
  | ClusterNotFoundFault
  | InvalidClusterStateFault
  | InvalidNamespaceFault
  | CommonErrors;
/**
 * Registers a cluster or serverless namespace to the Amazon Web Services Glue Data Catalog.
 */
export const registerNamespace: API.OperationMethod<
  RegisterNamespaceInputMessage,
  RegisterNamespaceOutputMessage,
  RegisterNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RegisterNamespaceInputMessage,
  output: RegisterNamespaceOutputMessage,
  errors: [ClusterNotFoundFault, InvalidClusterStateFault, InvalidNamespaceFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterNamespace",
}));

export type RejectDataShareError = InvalidDataShareFault | CommonErrors;
/**
 * From a datashare consumer account, rejects the specified datashare.
 */
export const rejectDataShare: API.OperationMethod<
  RejectDataShareMessage,
  DataShare,
  RejectDataShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RejectDataShareMessage,
  output: DataShare,
  errors: [InvalidDataShareFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RejectDataShare",
}));

export type ResetClusterParameterGroupError =
  | ClusterParameterGroupNotFoundFault
  | InvalidClusterParameterGroupStateFault
  | CommonErrors;
/**
 * Sets one or more parameters of the specified parameter group to their default
 * values and sets the source values of the parameters to "engine-default". To reset the
 * entire parameter group specify the *ResetAllParameters* parameter.
 * For parameter changes to take effect you must reboot any associated clusters.
 */
export const resetClusterParameterGroup: API.OperationMethod<
  ResetClusterParameterGroupMessage,
  ClusterParameterGroupNameMessage,
  ResetClusterParameterGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ResetClusterParameterGroupMessage,
  output: ClusterParameterGroupNameMessage,
  errors: [ClusterParameterGroupNotFoundFault, InvalidClusterParameterGroupStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ResetClusterParameterGroup",
}));

export type ResizeClusterError =
  | ClusterNotFoundFault
  | DependentServiceUnavailableFault
  | InsufficientClusterCapacityFault
  | InvalidClusterStateFault
  | InvalidReservedNodeStateFault
  | LimitExceededFault
  | NumberOfNodesPerClusterLimitExceededFault
  | NumberOfNodesQuotaExceededFault
  | ReservedNodeAlreadyExistsFault
  | ReservedNodeAlreadyMigratedFault
  | ReservedNodeNotFoundFault
  | ReservedNodeOfferingNotFoundFault
  | UnauthorizedOperation
  | UnsupportedOperationFault
  | UnsupportedOptionFault
  | CommonErrors;
/**
 * Changes the size of the cluster. You can change the cluster's type, or change the
 * number or type of nodes. The default behavior is to use the elastic resize method. With
 * an elastic resize, your cluster is available for read and write operations more quickly
 * than with the classic resize method.
 *
 * Elastic resize operations have the following restrictions:
 *
 * - You can only resize clusters of the following types:
 *
 * - dc2.large
 *
 * - dc2.8xlarge
 *
 * - rg.large
 *
 * - rg.xlarge
 *
 * - rg.4xlarge
 *
 * - rg.12xlarge
 *
 * - ra3.large
 *
 * - ra3.xlplus
 *
 * - ra3.4xlarge
 *
 * - ra3.16xlarge
 *
 * - The type of nodes that you add must match the node type for the
 * cluster.
 */
export const resizeCluster: API.OperationMethod<
  ResizeClusterMessage,
  ResizeClusterResult,
  ResizeClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ResizeClusterMessage,
  output: ResizeClusterResult,
  errors: [
    ClusterNotFoundFault,
    DependentServiceUnavailableFault,
    InsufficientClusterCapacityFault,
    InvalidClusterStateFault,
    InvalidReservedNodeStateFault,
    LimitExceededFault,
    NumberOfNodesPerClusterLimitExceededFault,
    NumberOfNodesQuotaExceededFault,
    ReservedNodeAlreadyExistsFault,
    ReservedNodeAlreadyMigratedFault,
    ReservedNodeNotFoundFault,
    ReservedNodeOfferingNotFoundFault,
    UnauthorizedOperation,
    UnsupportedOperationFault,
    UnsupportedOptionFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ResizeCluster",
}));

export type RestoreFromClusterSnapshotError =
  | AccessToSnapshotDeniedFault
  | ClusterAlreadyExistsFault
  | ClusterParameterGroupNotFoundFault
  | ClusterQuotaExceededFault
  | ClusterSecurityGroupNotFoundFault
  | ClusterSnapshotNotFoundFault
  | ClusterSubnetGroupNotFoundFault
  | DependentServiceAccessDeniedFault
  | DependentServiceRequestThrottlingFault
  | DependentServiceUnavailableFault
  | HsmClientCertificateNotFoundFault
  | HsmConfigurationNotFoundFault
  | InsufficientClusterCapacityFault
  | InvalidClusterSnapshotStateFault
  | InvalidClusterSubnetGroupStateFault
  | InvalidClusterTrackFault
  | InvalidElasticIpFault
  | InvalidReservedNodeStateFault
  | InvalidRestoreFault
  | InvalidSubnet
  | InvalidTagFault
  | InvalidVPCNetworkStateFault
  | Ipv6CidrBlockNotFoundFault
  | LimitExceededFault
  | NumberOfNodesPerClusterLimitExceededFault
  | NumberOfNodesQuotaExceededFault
  | RedshiftIdcApplicationNotExistsFault
  | ReservedNodeAlreadyExistsFault
  | ReservedNodeAlreadyMigratedFault
  | ReservedNodeNotFoundFault
  | ReservedNodeOfferingNotFoundFault
  | SnapshotScheduleNotFoundFault
  | TagLimitExceededFault
  | UnauthorizedOperation
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting
 * cluster with the same configuration as the original cluster from which the snapshot was
 * created, except that the new cluster is created with the default cluster security and
 * parameter groups. After Amazon Redshift creates the cluster, you can use the ModifyCluster API to associate a different security group and different
 * parameter group with the restored cluster. If you are using a DS node type, you can also
 * choose to change to another DS node type of the same size during restore.
 *
 * If you restore a cluster into a VPC, you must provide a cluster subnet group where
 * you want the cluster restored.
 *
 * VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that
 * you own in a Region from reaching or being reached from the internet through internet
 * gateways and egress-only internet gateways. If a subnet group for a
 * provisioned cluster is in an account with VPC BPA turned on, the following capabilities
 * are blocked:
 *
 * - Creating a public cluster
 *
 * - Restoring a public cluster
 *
 * - Modifying a private cluster to be public
 *
 * - Adding a subnet with VPC BPA turned on to the subnet group when there's at
 * least one public cluster within the group
 *
 * For more information about VPC BPA, see Block public access to VPCs and
 * subnets in the *Amazon VPC User Guide*.
 *
 * For more information about working with snapshots, go to
 * Amazon Redshift Snapshots
 * in the *Amazon Redshift Cluster Management Guide*.
 */
export const restoreFromClusterSnapshot: API.OperationMethod<
  RestoreFromClusterSnapshotMessage,
  RestoreFromClusterSnapshotResult,
  RestoreFromClusterSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RestoreFromClusterSnapshotMessage,
  output: RestoreFromClusterSnapshotResult,
  errors: [
    AccessToSnapshotDeniedFault,
    ClusterAlreadyExistsFault,
    ClusterParameterGroupNotFoundFault,
    ClusterQuotaExceededFault,
    ClusterSecurityGroupNotFoundFault,
    ClusterSnapshotNotFoundFault,
    ClusterSubnetGroupNotFoundFault,
    DependentServiceAccessDeniedFault,
    DependentServiceRequestThrottlingFault,
    DependentServiceUnavailableFault,
    HsmClientCertificateNotFoundFault,
    HsmConfigurationNotFoundFault,
    InsufficientClusterCapacityFault,
    InvalidClusterSnapshotStateFault,
    InvalidClusterSubnetGroupStateFault,
    InvalidClusterTrackFault,
    InvalidElasticIpFault,
    InvalidReservedNodeStateFault,
    InvalidRestoreFault,
    InvalidSubnet,
    InvalidTagFault,
    InvalidVPCNetworkStateFault,
    Ipv6CidrBlockNotFoundFault,
    LimitExceededFault,
    NumberOfNodesPerClusterLimitExceededFault,
    NumberOfNodesQuotaExceededFault,
    RedshiftIdcApplicationNotExistsFault,
    ReservedNodeAlreadyExistsFault,
    ReservedNodeAlreadyMigratedFault,
    ReservedNodeNotFoundFault,
    ReservedNodeOfferingNotFoundFault,
    SnapshotScheduleNotFoundFault,
    TagLimitExceededFault,
    UnauthorizedOperation,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RestoreFromClusterSnapshot",
}));

export type RestoreTableFromClusterSnapshotError =
  | ClusterNotFoundFault
  | ClusterSnapshotNotFoundFault
  | InProgressTableRestoreQuotaExceededFault
  | InvalidClusterSnapshotStateFault
  | InvalidClusterStateFault
  | InvalidTableRestoreArgumentFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Creates a new table from a table in an Amazon Redshift cluster snapshot. You must
 * create the new table within the Amazon Redshift cluster that the snapshot was taken
 * from.
 *
 * You cannot use `RestoreTableFromClusterSnapshot` to restore a table with
 * the same name as an existing table in an Amazon Redshift cluster. That is, you cannot
 * overwrite an existing table in a cluster with a restored table. If you want to replace
 * your original table with a new, restored table, then rename or drop your original table
 * before you call `RestoreTableFromClusterSnapshot`. When you have renamed your
 * original table, then you can pass the original name of the table as the
 * `NewTableName` parameter value in the call to
 * `RestoreTableFromClusterSnapshot`. This way, you can replace the original
 * table with the table created from the snapshot.
 *
 * You can't use this operation to restore tables with
 * interleaved sort keys.
 */
export const restoreTableFromClusterSnapshot: API.OperationMethod<
  RestoreTableFromClusterSnapshotMessage,
  RestoreTableFromClusterSnapshotResult,
  RestoreTableFromClusterSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RestoreTableFromClusterSnapshotMessage,
  output: RestoreTableFromClusterSnapshotResult,
  errors: [
    ClusterNotFoundFault,
    ClusterSnapshotNotFoundFault,
    InProgressTableRestoreQuotaExceededFault,
    InvalidClusterSnapshotStateFault,
    InvalidClusterStateFault,
    InvalidTableRestoreArgumentFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RestoreTableFromClusterSnapshot",
}));

export type ResumeClusterError =
  | ClusterNotFoundFault
  | InsufficientClusterCapacityFault
  | InvalidClusterStateFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Resumes a paused cluster.
 */
export const resumeCluster: API.OperationMethod<
  ResumeClusterMessage,
  ResumeClusterResult,
  ResumeClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ResumeClusterMessage,
  output: ResumeClusterResult,
  errors: [
    ClusterNotFoundFault,
    InsufficientClusterCapacityFault,
    InvalidClusterStateFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ResumeCluster",
}));

export type RevokeClusterSecurityGroupIngressError =
  | AuthorizationNotFoundFault
  | ClusterSecurityGroupNotFoundFault
  | InvalidClusterSecurityGroupStateFault
  | CommonErrors;
/**
 * Revokes an ingress rule in an Amazon Redshift security group for a previously authorized
 * IP range or Amazon EC2 security group. To add an ingress rule, see AuthorizeClusterSecurityGroupIngress.
 * For information about managing security groups, go to
 * Amazon Redshift Cluster Security Groups in the
 * *Amazon Redshift Cluster Management Guide*.
 */
export const revokeClusterSecurityGroupIngress: API.OperationMethod<
  RevokeClusterSecurityGroupIngressMessage,
  RevokeClusterSecurityGroupIngressResult,
  RevokeClusterSecurityGroupIngressError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RevokeClusterSecurityGroupIngressMessage,
  output: RevokeClusterSecurityGroupIngressResult,
  errors: [
    AuthorizationNotFoundFault,
    ClusterSecurityGroupNotFoundFault,
    InvalidClusterSecurityGroupStateFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RevokeClusterSecurityGroupIngress",
}));

export type RevokeEndpointAccessError =
  | ClusterNotFoundFault
  | EndpointAuthorizationNotFoundFault
  | EndpointNotFoundFault
  | InvalidAuthorizationStateFault
  | InvalidClusterSecurityGroupStateFault
  | InvalidClusterStateFault
  | InvalidEndpointStateFault
  | CommonErrors;
/**
 * Revokes access to a cluster.
 */
export const revokeEndpointAccess: API.OperationMethod<
  RevokeEndpointAccessMessage,
  EndpointAuthorization,
  RevokeEndpointAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RevokeEndpointAccessMessage,
  output: EndpointAuthorization,
  errors: [
    ClusterNotFoundFault,
    EndpointAuthorizationNotFoundFault,
    EndpointNotFoundFault,
    InvalidAuthorizationStateFault,
    InvalidClusterSecurityGroupStateFault,
    InvalidClusterStateFault,
    InvalidEndpointStateFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RevokeEndpointAccess",
}));

export type RevokeSnapshotAccessError =
  | AccessToSnapshotDeniedFault
  | AuthorizationNotFoundFault
  | ClusterSnapshotNotFoundFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Removes the ability of the specified Amazon Web Services account to restore the specified
 * snapshot. If the account is currently restoring the snapshot, the restore will run to
 * completion.
 *
 * For more information about working with snapshots, go to
 * Amazon Redshift Snapshots
 * in the *Amazon Redshift Cluster Management Guide*.
 */
export const revokeSnapshotAccess: API.OperationMethod<
  RevokeSnapshotAccessMessage,
  RevokeSnapshotAccessResult,
  RevokeSnapshotAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RevokeSnapshotAccessMessage,
  output: RevokeSnapshotAccessResult,
  errors: [
    AccessToSnapshotDeniedFault,
    AuthorizationNotFoundFault,
    ClusterSnapshotNotFoundFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RevokeSnapshotAccess",
}));

export type RotateEncryptionKeyError =
  | ClusterNotFoundFault
  | DependentServiceRequestThrottlingFault
  | InvalidClusterStateFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Rotates the encryption keys for a cluster.
 */
export const rotateEncryptionKey: API.OperationMethod<
  RotateEncryptionKeyMessage,
  RotateEncryptionKeyResult,
  RotateEncryptionKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RotateEncryptionKeyMessage,
  output: RotateEncryptionKeyResult,
  errors: [
    ClusterNotFoundFault,
    DependentServiceRequestThrottlingFault,
    InvalidClusterStateFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RotateEncryptionKey",
}));

export type UpdatePartnerStatusError =
  | ClusterNotFoundFault
  | PartnerNotFoundFault
  | UnauthorizedPartnerIntegrationFault
  | UnsupportedOperationFault
  | CommonErrors;
/**
 * Updates the status of a partner integration.
 */
export const updatePartnerStatus: API.OperationMethod<
  UpdatePartnerStatusInputMessage,
  PartnerIntegrationOutputMessage,
  UpdatePartnerStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdatePartnerStatusInputMessage,
  output: PartnerIntegrationOutputMessage,
  errors: [
    ClusterNotFoundFault,
    PartnerNotFoundFault,
    UnauthorizedPartnerIntegrationFault,
    UnsupportedOperationFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePartnerStatus",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ReservedNodeId: S.optional(S.String),
          TargetReservedNodeOfferingId: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AcceptReservedNodeExchangeInputMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          RecurringChargeAmount: S.optional(S.Number),
          RecurringChargeFrequency: S.optional(S.String),
        }),
      ).annotate({ identifier: "RecurringCharge" });
    case 2:
      return S.Array(
        /*@__PURE__*/ RecurringCharge.pipe(/*@__PURE__*/ T.XmlName("RecurringCharge")).annotate({
          identifier: "RecurringCharge",
        }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          ReservedNodeId: S.optional(S.String),
          ReservedNodeOfferingId: S.optional(S.String),
          NodeType: S.optional(S.String),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Duration: S.optional(S.Number),
          FixedPrice: S.optional(S.Number),
          UsagePrice: S.optional(S.Number),
          CurrencyCode: S.optional(S.String),
          NodeCount: S.optional(S.Number),
          State: S.optional(S.String),
          OfferingType: S.optional(S.String),
          RecurringCharges: S.optional(RecurringChargeList),
          ReservedNodeOfferingType: S.optional(ReservedNodeOfferingType),
        }),
      ).annotate({ identifier: "ReservedNode" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ExchangedReservedNode: S.optional(ReservedNode) }).pipe(ns),
      ).annotate({
        identifier: "AcceptReservedNodeExchangeOutputMessage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          ClusterIdentifier: S.optional(S.String),
          DatabaseName: S.optional(S.String),
          PartnerName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PartnerIntegrationInputMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ DatabaseName: S.optional(S.String), PartnerName: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({
        identifier: "PartnerIntegrationOutputMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DataShareArn: S.optional(S.String),
          AssociateEntireAccount: S.optional(S.Boolean),
          ConsumerArn: S.optional(S.String),
          ConsumerRegion: S.optional(S.String),
          AllowWrites: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AssociateDataShareConsumerMessage",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ConsumerIdentifier: S.optional(S.String),
          Status: S.optional(DataShareStatus),
          ConsumerRegion: S.optional(S.String),
          CreatedDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          StatusChangeDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ProducerAllowedWrites: S.optional(S.Boolean),
          ConsumerAcceptedWrites: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "DataShareAssociation" });
    case 1:
      return S.Array(DataShareAssociation);
    case 2:
      return S.suspend(() =>
        S.Struct({
          DataShareArn: S.optional(S.String),
          ProducerArn: S.optional(S.String),
          AllowPubliclyAccessibleConsumers: S.optional(S.Boolean),
          DataShareAssociations: S.optional(DataShareAssociationList),
          ManagedBy: S.optional(S.String),
          DataShareType: S.optional(DataShareType),
        }).pipe(ns),
      ).annotate({ identifier: "DataShare" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ClusterSecurityGroupName: S.optional(S.String),
          CIDRIP: S.optional(S.String),
          EC2SecurityGroupName: S.optional(S.String),
          EC2SecurityGroupOwnerId: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AuthorizeClusterSecurityGroupIngressMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Key: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "Tag" });
    case 5:
      return S.Array(
        /*@__PURE__*/ Tag.pipe(/*@__PURE__*/ T.XmlName("Tag")).annotate({ identifier: "Tag" }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          EC2SecurityGroupName: S.optional(S.String),
          EC2SecurityGroupOwnerId: S.optional(S.String),
          Tags: S.optional(TagList),
        }),
      ).annotate({ identifier: "EC2SecurityGroup" });
    case 7:
      return S.Array(
        /*@__PURE__*/ EC2SecurityGroup.pipe(/*@__PURE__*/ T.XmlName("EC2SecurityGroup")).annotate({
          identifier: "EC2SecurityGroup",
        }),
      );
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          CIDRIP: S.optional(S.String),
          Tags: S.optional(TagList),
        }),
      ).annotate({ identifier: "IPRange" });
    case 1:
      return S.Array(
        /*@__PURE__*/ IPRange.pipe(/*@__PURE__*/ T.XmlName("IPRange")).annotate({
          identifier: "IPRange",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          ClusterSecurityGroupName: S.optional(S.String),
          Description: S.optional(S.String),
          EC2SecurityGroups: S.optional(EC2SecurityGroupList),
          IPRanges: S.optional(IPRangeList),
          Tags: S.optional(TagList),
        }),
      ).annotate({ identifier: "ClusterSecurityGroup" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ClusterSecurityGroup: S.optional(ClusterSecurityGroup) }).pipe(ns),
      ).annotate({
        identifier: "AuthorizeClusterSecurityGroupIngressResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DataShareArn: S.optional(S.String),
          ConsumerIdentifier: S.optional(S.String),
          AllowWrites: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AuthorizeDataShareMessage",
      });
    case 5:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("VpcIdentifier")));
    case 6:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          Account: S.optional(S.String),
          VpcIds: S.optional(VpcIdentifierList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AuthorizeEndpointAccessMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Grantor: S.optional(S.String),
          Grantee: S.optional(S.String),
          ClusterIdentifier: S.optional(S.String),
          AuthorizeTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ClusterStatus: S.optional(S.String),
          Status: S.optional(AuthorizationStatus),
          AllowedAllVPCs: S.optional(S.Boolean),
          AllowedVPCs: S.optional(VpcIdentifierList),
          EndpointCount: S.optional(S.Number),
        }).pipe(ns),
      ).annotate({ identifier: "EndpointAuthorization" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SnapshotIdentifier: S.optional(S.String),
          SnapshotArn: S.optional(S.String),
          SnapshotClusterIdentifier: S.optional(S.String),
          AccountWithRestoreAccess: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AuthorizeSnapshotAccessMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ AccountId: S.optional(S.String), AccountAlias: S.optional(S.String) }),
      ).annotate({ identifier: "AccountWithRestoreAccess" });
    case 2:
      return S.Array(
        /*@__PURE__*/ AccountWithRestoreAccess.pipe(
          /*@__PURE__*/ T.XmlName("AccountWithRestoreAccess"),
        ).annotate({
          identifier: "AccountWithRestoreAccess",
        }),
      );
    case 3:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("NodeType")));
    case 4:
      return S.suspend(() =>
        S.Struct({
          SnapshotIdentifier: S.optional(S.String),
          ClusterIdentifier: S.optional(S.String),
          SnapshotCreateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Status: S.optional(S.String),
          Port: S.optional(S.Number),
          AvailabilityZone: S.optional(S.String),
          ClusterCreateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          MasterUsername: S.optional(S.String),
          ClusterVersion: S.optional(S.String),
          EngineFullVersion: S.optional(S.String),
          SnapshotType: S.optional(S.String),
          NodeType: S.optional(S.String),
          NumberOfNodes: S.optional(S.Number),
          DBName: S.optional(S.String),
          VpcId: S.optional(S.String),
          Encrypted: S.optional(S.Boolean),
          KmsKeyId: S.optional(S.String),
          EncryptedWithHSM: S.optional(S.Boolean),
          AccountsWithRestoreAccess: S.optional(AccountsWithRestoreAccessList),
          OwnerAccount: S.optional(S.String),
          TotalBackupSizeInMegaBytes: S.optional(S.Number),
          ActualIncrementalBackupSizeInMegaBytes: S.optional(S.Number),
          BackupProgressInMegaBytes: S.optional(S.Number),
          CurrentBackupRateInMegaBytesPerSecond: S.optional(S.Number),
          EstimatedSecondsToCompletion: S.optional(S.Number),
          ElapsedTimeInSeconds: S.optional(S.Number),
          SourceRegion: S.optional(S.String),
          Tags: S.optional(TagList),
          RestorableNodeTypes: S.optional(RestorableNodeTypeList),
          EnhancedVpcRouting: S.optional(S.Boolean),
          MaintenanceTrackName: S.optional(S.String),
          ManualSnapshotRetentionPeriod: S.optional(S.Number),
          ManualSnapshotRemainingDays: S.optional(S.Number),
          SnapshotRetentionStartTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          MasterPasswordSecretArn: S.optional(S.String),
          MasterPasswordSecretKmsKeyId: S.optional(S.String),
          SnapshotArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Snapshot" });
    case 5:
      return S.suspend(() => S.Struct({ Snapshot: S.optional(Snapshot) }).pipe(ns)).annotate({
        identifier: "AuthorizeSnapshotAccessResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SnapshotIdentifier: S.optional(S.String),
          SnapshotClusterIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteClusterSnapshotMessage",
      });
    case 7:
      return S.Array(
        /*@__PURE__*/ DeleteClusterSnapshotMessage.pipe(
          /*@__PURE__*/ T.XmlName("DeleteClusterSnapshotMessage"),
        ).annotate({
          identifier: "DeleteClusterSnapshotMessage",
        }),
      );
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Identifiers: S.optional(DeleteClusterSnapshotMessageList) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchDeleteClusterSnapshotsRequest",
      });
    case 1:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("String")));
    case 2:
      return S.suspend(() =>
        S.Struct({
          SnapshotIdentifier: S.optional(S.String),
          SnapshotClusterIdentifier: S.optional(S.String),
          FailureCode: S.optional(S.String),
          FailureReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "SnapshotErrorMessage" });
    case 3:
      return S.Array(
        /*@__PURE__*/ SnapshotErrorMessage.pipe(
          /*@__PURE__*/ T.XmlName("SnapshotErrorMessage"),
        ).annotate({
          identifier: "SnapshotErrorMessage",
        }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          Resources: S.optional(SnapshotIdentifierList),
          Errors: S.optional(BatchSnapshotOperationErrorList),
        }).pipe(ns),
      ).annotate({
        identifier: "BatchDeleteClusterSnapshotsResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SnapshotIdentifierList: S.optional(SnapshotIdentifierList),
          ManualSnapshotRetentionPeriod: S.optional(S.Number),
          Force: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "BatchModifyClusterSnapshotsMessage",
      });
    case 6:
      return S.Array(
        /*@__PURE__*/ SnapshotErrorMessage.pipe(
          /*@__PURE__*/ T.XmlName("SnapshotErrorMessage"),
        ).annotate({
          identifier: "SnapshotErrorMessage",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          Resources: S.optional(SnapshotIdentifierList),
          Errors: S.optional(BatchSnapshotOperationErrors),
        }).pipe(ns),
      ).annotate({
        identifier: "BatchModifyClusterSnapshotsOutputMessage",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ClusterIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CancelResizeMessage" });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.Array(S.String);
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          TargetNodeType: S.optional(S.String),
          TargetNumberOfNodes: S.optional(S.Number),
          TargetClusterType: S.optional(S.String),
          Status: S.optional(S.String),
          ImportTablesCompleted: S.optional(ImportTablesCompleted),
          ImportTablesInProgress: S.optional(ImportTablesInProgress),
          ImportTablesNotStarted: S.optional(ImportTablesNotStarted),
          AvgResizeRateInMegaBytesPerSecond: S.optional(S.Number),
          TotalResizeDataInMegaBytes: S.optional(S.Number),
          ProgressInMegaBytes: S.optional(S.Number),
          ElapsedTimeInSeconds: S.optional(S.Number),
          EstimatedTimeToCompletionInSeconds: S.optional(S.Number),
          ResizeType: S.optional(S.String),
          Message: S.optional(S.String),
          TargetEncryptionType: S.optional(S.String),
          DataTransferProgressPercent: S.optional(S.Number),
        }).pipe(ns),
      ).annotate({ identifier: "ResizeProgressMessage" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SourceSnapshotIdentifier: S.optional(S.String),
          SourceSnapshotClusterIdentifier: S.optional(S.String),
          TargetSnapshotIdentifier: S.optional(S.String),
          ManualSnapshotRetentionPeriod: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CopyClusterSnapshotMessage",
      });
    case 6:
      return S.suspend(() => S.Struct({ Snapshot: S.optional(Snapshot) }).pipe(ns)).annotate({
        identifier: "CopyClusterSnapshotResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AuthenticationProfileName: S.optional(S.String),
          AuthenticationProfileContent: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateAuthenticationProfileMessage",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AuthenticationProfileName: S.optional(S.String),
          AuthenticationProfileContent: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "CreateAuthenticationProfileResult",
      });
    case 1:
      return S.Array(
        /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("ClusterSecurityGroupName")),
      );
    case 2:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("VpcSecurityGroupId")));
    case 3:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("IamRoleArn")));
    case 4:
      return S.suspend(() =>
        S.Struct({
          DBName: S.optional(S.String),
          ClusterIdentifier: S.optional(S.String),
          ClusterType: S.optional(S.String),
          NodeType: S.optional(S.String),
          MasterUsername: S.optional(S.String),
          MasterUserPassword: S.optional(SensitiveString),
          ClusterSecurityGroups: S.optional(ClusterSecurityGroupNameList),
          VpcSecurityGroupIds: S.optional(VpcSecurityGroupIdList),
          ClusterSubnetGroupName: S.optional(S.String),
          AvailabilityZone: S.optional(S.String),
          PreferredMaintenanceWindow: S.optional(S.String),
          ClusterParameterGroupName: S.optional(S.String),
          AutomatedSnapshotRetentionPeriod: S.optional(S.Number),
          ManualSnapshotRetentionPeriod: S.optional(S.Number),
          Port: S.optional(S.Number),
          ClusterVersion: S.optional(S.String),
          AllowVersionUpgrade: S.optional(S.Boolean),
          NumberOfNodes: S.optional(S.Number),
          PubliclyAccessible: S.optional(S.Boolean),
          Encrypted: S.optional(S.Boolean),
          HsmClientCertificateIdentifier: S.optional(S.String),
          HsmConfigurationIdentifier: S.optional(S.String),
          ElasticIp: S.optional(S.String),
          Tags: S.optional(TagList),
          KmsKeyId: S.optional(S.String),
          EnhancedVpcRouting: S.optional(S.Boolean),
          AdditionalInfo: S.optional(S.String),
          IamRoles: S.optional(IamRoleArnList),
          MaintenanceTrackName: S.optional(S.String),
          SnapshotScheduleIdentifier: S.optional(S.String),
          AvailabilityZoneRelocation: S.optional(S.Boolean),
          AquaConfigurationStatus: S.optional(AquaConfigurationStatus),
          DefaultIamRoleArn: S.optional(S.String),
          LoadSampleData: S.optional(S.String),
          ManageMasterPassword: S.optional(S.Boolean),
          MasterPasswordSecretKmsKeyId: S.optional(S.String),
          IpAddressType: S.optional(S.String),
          MultiAZ: S.optional(S.Boolean),
          RedshiftIdcApplicationArn: S.optional(S.String),
          CatalogName: S.optional(S.String),
          ExtraComputeForAutomaticOptimization: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateClusterMessage" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NetworkInterfaceId: S.optional(S.String),
          SubnetId: S.optional(S.String),
          PrivateIpAddress: S.optional(S.String),
          AvailabilityZone: S.optional(S.String),
          Ipv6Address: S.optional(S.String),
        }),
      ).annotate({ identifier: "NetworkInterface" });
    case 6:
      return S.Array(
        /*@__PURE__*/ NetworkInterface.pipe(/*@__PURE__*/ T.XmlName("NetworkInterface")).annotate({
          identifier: "NetworkInterface",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          VpcEndpointId: S.optional(S.String),
          VpcId: S.optional(S.String),
          NetworkInterfaces: S.optional(NetworkInterfaceList),
        }),
      ).annotate({ identifier: "VpcEndpoint" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ VpcEndpoint.pipe(/*@__PURE__*/ T.XmlName("VpcEndpoint")).annotate({
          identifier: "VpcEndpoint",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          Address: S.optional(S.String),
          Port: S.optional(S.Number),
          VpcEndpoints: S.optional(VpcEndpointsList),
        }),
      ).annotate({ identifier: "Endpoint" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ClusterSecurityGroupName: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "ClusterSecurityGroupMembership",
      });
    case 3:
      return S.Array(
        /*@__PURE__*/ ClusterSecurityGroupMembership.pipe(
          /*@__PURE__*/ T.XmlName("ClusterSecurityGroup"),
        ).annotate({
          identifier: "ClusterSecurityGroupMembership",
        }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({ VpcSecurityGroupId: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "VpcSecurityGroupMembership",
      });
    case 5:
      return S.Array(
        /*@__PURE__*/ VpcSecurityGroupMembership.pipe(
          /*@__PURE__*/ T.XmlName("VpcSecurityGroup"),
        ).annotate({
          identifier: "VpcSecurityGroupMembership",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          ParameterName: S.optional(S.String),
          ParameterApplyStatus: S.optional(S.String),
          ParameterApplyErrorDescription: S.optional(S.String),
        }),
      ).annotate({ identifier: "ClusterParameterStatus" });
    case 7:
      return S.Array(ClusterParameterStatus);
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ParameterGroupName: S.optional(S.String),
          ParameterApplyStatus: S.optional(S.String),
          ClusterParameterStatusList: S.optional(ClusterParameterStatusList),
        }),
      ).annotate({
        identifier: "ClusterParameterGroupStatus",
      });
    case 1:
      return S.Array(
        /*@__PURE__*/ ClusterParameterGroupStatus.pipe(
          /*@__PURE__*/ T.XmlName("ClusterParameterGroup"),
        ).annotate({
          identifier: "ClusterParameterGroupStatus",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          MasterUserPassword: S.optional(SensitiveString),
          NodeType: S.optional(S.String),
          NumberOfNodes: S.optional(S.Number),
          ClusterType: S.optional(S.String),
          ClusterVersion: S.optional(S.String),
          AutomatedSnapshotRetentionPeriod: S.optional(S.Number),
          ClusterIdentifier: S.optional(S.String),
          PubliclyAccessible: S.optional(S.Boolean),
          EnhancedVpcRouting: S.optional(S.Boolean),
          MaintenanceTrackName: S.optional(S.String),
          EncryptionType: S.optional(S.String),
        }),
      ).annotate({ identifier: "PendingModifiedValues" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          CurrentRestoreRateInMegaBytesPerSecond: S.optional(S.Number),
          SnapshotSizeInMegaBytes: S.optional(S.Number),
          ProgressInMegaBytes: S.optional(S.Number),
          ElapsedTimeInSeconds: S.optional(S.Number),
          EstimatedTimeToCompletionInSeconds: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RestoreStatus" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          CurrentRateInMegaBytesPerSecond: S.optional(S.Number),
          TotalDataInMegaBytes: S.optional(S.Number),
          DataTransferredInMegaBytes: S.optional(S.Number),
          EstimatedTimeToCompletionInSeconds: S.optional(S.Number),
          ElapsedTimeInSeconds: S.optional(S.Number),
        }),
      ).annotate({ identifier: "DataTransferProgress" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          HsmClientCertificateIdentifier: S.optional(S.String),
          HsmConfigurationIdentifier: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({ identifier: "HsmStatus" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DestinationRegion: S.optional(S.String),
          RetentionPeriod: S.optional(S.Number),
          ManualSnapshotRetentionPeriod: S.optional(S.Number),
          SnapshotCopyGrantName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ClusterSnapshotCopyStatus",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          NodeRole: S.optional(S.String),
          PrivateIPAddress: S.optional(S.String),
          PublicIPAddress: S.optional(S.String),
        }),
      ).annotate({ identifier: "ClusterNode" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ClusterNode);
    case 1:
      return S.suspend(() =>
        S.Struct({ ElasticIp: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({ identifier: "ElasticIpStatus" });
    case 2:
      return S.suspend(() =>
        S.Struct({ IamRoleArn: S.optional(S.String), ApplyStatus: S.optional(S.String) }),
      ).annotate({ identifier: "ClusterIamRole" });
    case 3:
      return S.Array(
        /*@__PURE__*/ ClusterIamRole.pipe(/*@__PURE__*/ T.XmlName("ClusterIamRole")).annotate({
          identifier: "ClusterIamRole",
        }),
      );
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          DeferMaintenanceIdentifier: S.optional(S.String),
          DeferMaintenanceStartTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          DeferMaintenanceEndTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
        }),
      ).annotate({
        identifier: "DeferredMaintenanceWindow",
      });
    case 6:
      return S.Array(
        /*@__PURE__*/ DeferredMaintenanceWindow.pipe(
          /*@__PURE__*/ T.XmlName("DeferredMaintenanceWindow"),
        ).annotate({
          identifier: "DeferredMaintenanceWindow",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({ ResizeType: S.optional(S.String), AllowCancelResize: S.optional(S.Boolean) }),
      ).annotate({ identifier: "ResizeInfo" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AquaStatus: S.optional(AquaStatus),
          AquaConfigurationStatus: S.optional(AquaConfigurationStatus),
        }),
      ).annotate({ identifier: "AquaConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ReservedNodeExchangeRequestId: S.optional(S.String),
          Status: S.optional(ReservedNodeExchangeStatusType),
          RequestTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          SourceReservedNodeId: S.optional(S.String),
          SourceReservedNodeType: S.optional(S.String),
          SourceReservedNodeCount: S.optional(S.Number),
          TargetReservedNodeOfferingId: S.optional(S.String),
          TargetReservedNodeType: S.optional(S.String),
          TargetReservedNodeCount: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ReservedNodeExchangeStatus",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZone: S.optional(S.String),
          ClusterNodes: S.optional(ClusterNodesList),
        }),
      ).annotate({ identifier: "SecondaryClusterInfo" });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          S3Tables: S.optional(LogTypeList),
          S3TableNamespace: S.optional(S.String),
          S3TableGranularity: S.optional(S.String),
          EnabledAll: S.optional(S.Boolean),
          LastIngestionTimes: S.optional(S3TableLastIngestionTimeMap),
        }),
      ).annotate({ identifier: "S3TablePublishStatus" });
    case 6:
      return S.suspend(() => S.Struct({ S3Tables: S.optional(S3TablePublishStatus) })).annotate({
        identifier: "LoggingPublishStatus",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          NodeType: S.optional(S.String),
          ClusterStatus: S.optional(S.String),
          ClusterAvailabilityStatus: S.optional(S.String),
          ModifyStatus: S.optional(S.String),
          MasterUsername: S.optional(S.String),
          DBName: S.optional(S.String),
          Endpoint: S.optional(Endpoint),
          ClusterCreateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          AutomatedSnapshotRetentionPeriod: S.optional(S.Number),
          ManualSnapshotRetentionPeriod: S.optional(S.Number),
          ClusterSecurityGroups: S.optional(ClusterSecurityGroupMembershipList),
          VpcSecurityGroups: S.optional(VpcSecurityGroupMembershipList),
          ClusterParameterGroups: S.optional(ClusterParameterGroupStatusList),
          ClusterSubnetGroupName: S.optional(S.String),
          VpcId: S.optional(S.String),
          AvailabilityZone: S.optional(S.String),
          PreferredMaintenanceWindow: S.optional(S.String),
          PendingModifiedValues: S.optional(PendingModifiedValues),
          ClusterVersion: S.optional(S.String),
          AllowVersionUpgrade: S.optional(S.Boolean),
          NumberOfNodes: S.optional(S.Number),
          PubliclyAccessible: S.optional(S.Boolean),
          Encrypted: S.optional(S.Boolean),
          RestoreStatus: S.optional(RestoreStatus),
          DataTransferProgress: S.optional(DataTransferProgress),
          HsmStatus: S.optional(HsmStatus),
          ClusterSnapshotCopyStatus: S.optional(ClusterSnapshotCopyStatus),
          ClusterPublicKey: S.optional(S.String),
          ClusterNodes: S.optional(ClusterNodesList),
          ElasticIpStatus: S.optional(ElasticIpStatus),
          ClusterRevisionNumber: S.optional(S.String),
          Tags: S.optional(TagList),
          KmsKeyId: S.optional(S.String),
          EnhancedVpcRouting: S.optional(S.Boolean),
          IamRoles: S.optional(ClusterIamRoleList),
          PendingActions: S.optional(PendingActionsList),
          MaintenanceTrackName: S.optional(S.String),
          ElasticResizeNumberOfNodeOptions: S.optional(S.String),
          DeferredMaintenanceWindows: S.optional(DeferredMaintenanceWindowsList),
          SnapshotScheduleIdentifier: S.optional(S.String),
          SnapshotScheduleState: S.optional(ScheduleState),
          ExpectedNextSnapshotScheduleTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          ExpectedNextSnapshotScheduleTimeStatus: S.optional(S.String),
          NextMaintenanceWindowStartTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          ResizeInfo: S.optional(ResizeInfo),
          AvailabilityZoneRelocationStatus: S.optional(S.String),
          ClusterNamespaceArn: S.optional(S.String),
          TotalStorageCapacityInMegaBytes: S.optional(S.Number),
          AquaConfiguration: S.optional(AquaConfiguration),
          DefaultIamRoleArn: S.optional(S.String),
          ReservedNodeExchangeStatus: S.optional(ReservedNodeExchangeStatus),
          CustomDomainName: S.optional(S.String),
          CustomDomainCertificateArn: S.optional(S.String),
          CustomDomainCertificateExpiryDate: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          MasterPasswordSecretArn: S.optional(S.String),
          MasterPasswordSecretKmsKeyId: S.optional(S.String),
          IpAddressType: S.optional(S.String),
          MultiAZ: S.optional(S.String),
          MultiAZSecondary: S.optional(SecondaryClusterInfo),
          LakehouseRegistrationStatus: S.optional(S.String),
          CatalogArn: S.optional(S.String),
          ExtraComputeForAutomaticOptimization: S.optional(S.String),
          LoggingPublishStatus: S.optional(LoggingPublishStatus),
        }),
      ).annotate({ identifier: "Cluster" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Cluster: S.optional(Cluster) }).pipe(ns)).annotate({
        identifier: "CreateClusterResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ParameterGroupName: S.optional(S.String),
          ParameterGroupFamily: S.optional(S.String),
          Description: S.optional(S.String),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateClusterParameterGroupMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ParameterGroupName: S.optional(S.String),
          ParameterGroupFamily: S.optional(S.String),
          Description: S.optional(S.String),
          Tags: S.optional(TagList),
        }),
      ).annotate({ identifier: "ClusterParameterGroup" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ClusterParameterGroup: S.optional(ClusterParameterGroup) }).pipe(ns),
      ).annotate({
        identifier: "CreateClusterParameterGroupResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ClusterSecurityGroupName: S.optional(S.String),
          Description: S.optional(S.String),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateClusterSecurityGroupMessage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ClusterSecurityGroup: S.optional(ClusterSecurityGroup) }).pipe(ns),
      ).annotate({
        identifier: "CreateClusterSecurityGroupResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SnapshotIdentifier: S.optional(S.String),
          ClusterIdentifier: S.optional(S.String),
          ManualSnapshotRetentionPeriod: S.optional(S.Number),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateClusterSnapshotMessage",
      });
    case 7:
      return S.suspend(() => S.Struct({ Snapshot: S.optional(Snapshot) }).pipe(ns)).annotate({
        identifier: "CreateClusterSnapshotResult",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("SubnetIdentifier")));
    case 1:
      return S.suspend(() =>
        S.Struct({
          ClusterSubnetGroupName: S.optional(S.String),
          Description: S.optional(S.String),
          SubnetIds: S.optional(SubnetIdentifierList),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateClusterSubnetGroupMessage",
      });
    case 2:
      return S.suspend(() => S.Struct({ Name: S.optional(S.String) })).annotate({
        identifier: "SupportedPlatform",
      });
    case 3:
      return S.Array(
        /*@__PURE__*/ SupportedPlatform.pipe(/*@__PURE__*/ T.XmlName("SupportedPlatform")).annotate(
          {
            identifier: "SupportedPlatform",
          },
        ),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          SupportedPlatforms: S.optional(SupportedPlatformsList),
        }),
      ).annotate({ identifier: "AvailabilityZone" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SubnetIdentifier: S.optional(S.String),
          SubnetAvailabilityZone: S.optional(AvailabilityZone),
          SubnetStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "Subnet" });
    case 6:
      return S.Array(
        /*@__PURE__*/ Subnet.pipe(/*@__PURE__*/ T.XmlName("Subnet")).annotate({
          identifier: "Subnet",
        }),
      );
    case 7:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("item")));
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ClusterSubnetGroupName: S.optional(S.String),
          Description: S.optional(S.String),
          VpcId: S.optional(S.String),
          SubnetGroupStatus: S.optional(S.String),
          Subnets: S.optional(SubnetList),
          Tags: S.optional(TagList),
          SupportedClusterIpAddressTypes: S.optional(ValueStringList),
        }),
      ).annotate({ identifier: "ClusterSubnetGroup" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ClusterSubnetGroup: S.optional(ClusterSubnetGroup) }).pipe(ns),
      ).annotate({
        identifier: "CreateClusterSubnetGroupResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CustomDomainName: S.optional(S.String),
          CustomDomainCertificateArn: S.optional(S.String),
          ClusterIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateCustomDomainAssociationMessage",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CustomDomainName: S.optional(S.String),
          CustomDomainCertificateArn: S.optional(S.String),
          ClusterIdentifier: S.optional(S.String),
          CustomDomainCertExpiryTime: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "CreateCustomDomainAssociationResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          ResourceOwner: S.optional(S.String),
          EndpointName: S.optional(S.String),
          SubnetGroupName: S.optional(S.String),
          VpcSecurityGroupIds: S.optional(VpcSecurityGroupIdList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateEndpointAccessMessage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          ResourceOwner: S.optional(S.String),
          SubnetGroupName: S.optional(S.String),
          EndpointStatus: S.optional(S.String),
          EndpointName: S.optional(S.String),
          EndpointCreateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Port: S.optional(S.Number),
          Address: S.optional(S.String),
          VpcSecurityGroups: S.optional(VpcSecurityGroupMembershipList),
          VpcEndpoint: S.optional(VpcEndpoint),
        }).pipe(ns),
      ).annotate({ identifier: "EndpointAccess" });
    case 6:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("SourceId")));
    case 7:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("EventCategory")));
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SubscriptionName: S.optional(S.String),
          SnsTopicArn: S.optional(S.String),
          SourceType: S.optional(S.String),
          SourceIds: S.optional(SourceIdsList),
          EventCategories: S.optional(EventCategoriesList),
          Severity: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateEventSubscriptionMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CustomerAwsId: S.optional(S.String),
          CustSubscriptionId: S.optional(S.String),
          SnsTopicArn: S.optional(S.String),
          Status: S.optional(S.String),
          SubscriptionCreationTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          SourceType: S.optional(S.String),
          SourceIdsList: S.optional(SourceIdsList),
          EventCategoriesList: S.optional(EventCategoriesList),
          Severity: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
          Tags: S.optional(TagList),
        }),
      ).annotate({ identifier: "EventSubscription" });
    case 2:
      return S.suspend(() =>
        S.Struct({ EventSubscription: S.optional(EventSubscription) }).pipe(ns),
      ).annotate({
        identifier: "CreateEventSubscriptionResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          HsmClientCertificateIdentifier: S.optional(S.String),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateHsmClientCertificateMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          HsmClientCertificateIdentifier: S.optional(S.String),
          HsmClientCertificatePublicKey: S.optional(S.String),
          Tags: S.optional(TagList),
        }),
      ).annotate({ identifier: "HsmClientCertificate" });
    case 5:
      return S.suspend(() =>
        S.Struct({ HsmClientCertificate: S.optional(HsmClientCertificate) }).pipe(ns),
      ).annotate({
        identifier: "CreateHsmClientCertificateResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          HsmConfigurationIdentifier: S.optional(S.String),
          Description: S.optional(S.String),
          HsmIpAddress: S.optional(S.String),
          HsmPartitionName: S.optional(S.String),
          HsmPartitionPassword: S.optional(S.String),
          HsmServerPublicCertificate: S.optional(S.String),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateHsmConfigurationMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          HsmConfigurationIdentifier: S.optional(S.String),
          Description: S.optional(S.String),
          HsmIpAddress: S.optional(S.String),
          HsmPartitionName: S.optional(S.String),
          Tags: S.optional(TagList),
        }),
      ).annotate({ identifier: "HsmConfiguration" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ HsmConfiguration: S.optional(HsmConfiguration) }).pipe(ns),
      ).annotate({
        identifier: "CreateHsmConfigurationResult",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          SourceArn: S.optional(S.String),
          TargetArn: S.optional(S.String),
          IntegrationName: S.optional(S.String),
          KMSKeyId: S.optional(S.String),
          TagList: S.optional(TagList),
          AdditionalEncryptionContext: S.optional(EncryptionContextMap),
          Description: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateIntegrationMessage" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String) }),
      ).annotate({ identifier: "IntegrationError" });
    case 4:
      return S.Array(
        /*@__PURE__*/ IntegrationError.pipe(/*@__PURE__*/ T.XmlName("IntegrationError")).annotate({
          identifier: "IntegrationError",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          IntegrationArn: S.optional(S.String),
          IntegrationName: S.optional(S.String),
          SourceArn: S.optional(S.String),
          TargetArn: S.optional(S.String),
          Status: S.optional(ZeroETLIntegrationStatus),
          Errors: S.optional(IntegrationErrorList),
          CreateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Description: S.optional(S.String),
          KMSKeyId: S.optional(S.String),
          AdditionalEncryptionContext: S.optional(EncryptionContextMap),
          Tags: S.optional(TagList),
        }).pipe(ns),
      ).annotate({ identifier: "Integration" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          IdcInstanceArn: S.optional(S.String),
          Qev2IdcApplicationName: S.optional(S.String),
          IdcDisplayName: S.optional(S.String),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateQev2IdcApplicationMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          IdcInstanceArn: S.optional(S.String),
          Qev2IdcApplicationName: S.optional(S.String),
          Qev2IdcApplicationArn: S.optional(S.String),
          IdcManagedApplicationArn: S.optional(S.String),
          IdcOnboardStatus: S.optional(S.String),
          IdcDisplayName: S.optional(S.String),
          Tags: S.optional(TagList),
        }),
      ).annotate({ identifier: "Qev2IdcApplication" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Qev2IdcApplication: S.optional(Qev2IdcApplication) }).pipe(ns),
      ).annotate({
        identifier: "CreateQev2IdcApplicationResult",
      });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          TrustedTokenIssuerArn: S.optional(S.String),
          AuthorizedAudiencesList: S.optional(AuthorizedAudienceList),
        }),
      ).annotate({ identifier: "AuthorizedTokenIssuer" });
    case 3:
      return S.Array(AuthorizedTokenIssuer);
    case 4:
      return S.suspend(() =>
        S.Struct({ Authorization: S.optional(ServiceAuthorization) }),
      ).annotate({ identifier: "LakeFormationQuery" });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ LakeFormationQuery: LakeFormationQuery })]);
    case 6:
      return S.Array(LakeFormationScopeUnion);
    case 7:
      return S.suspend(() =>
        S.Struct({ Authorization: S.optional(ServiceAuthorization) }),
      ).annotate({ identifier: "ReadWriteAccess" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ ReadWriteAccess: ReadWriteAccess })]);
    case 1:
      return S.Array(S3AccessGrantsScopeUnion);
    case 2:
      return S.suspend(() =>
        S.Struct({ Authorization: S.optional(ServiceAuthorization) }),
      ).annotate({ identifier: "Connect" });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ Connect: Connect })]);
    case 4:
      return S.Array(RedshiftScopeUnion);
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ LakeFormation: LakeFormationServiceIntegrations }),
        /*@__PURE__*/ S.Struct({ S3AccessGrants: S3AccessGrantsServiceIntegrations }),
        /*@__PURE__*/ S.Struct({ Redshift: RedshiftServiceIntegrations }),
      ]);
    case 6:
      return S.Array(ServiceIntegrationsUnion);
    case 7:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("TagKey")));
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          IdcInstanceArn: S.optional(S.String),
          RedshiftIdcApplicationName: S.optional(S.String),
          IdentityNamespace: S.optional(S.String),
          IdcDisplayName: S.optional(S.String),
          IamRoleArn: S.optional(S.String),
          AuthorizedTokenIssuerList: S.optional(AuthorizedTokenIssuerList),
          ServiceIntegrations: S.optional(ServiceIntegrationList),
          ApplicationType: S.optional(ApplicationType),
          Tags: S.optional(TagList),
          SsoTagKeys: S.optional(TagKeyList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateRedshiftIdcApplicationMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          IdcInstanceArn: S.optional(S.String),
          RedshiftIdcApplicationName: S.optional(S.String),
          RedshiftIdcApplicationArn: S.optional(S.String),
          IdentityNamespace: S.optional(S.String),
          IdcDisplayName: S.optional(S.String),
          IamRoleArn: S.optional(S.String),
          IdcManagedApplicationArn: S.optional(S.String),
          IdcOnboardStatus: S.optional(S.String),
          AuthorizedTokenIssuerList: S.optional(AuthorizedTokenIssuerList),
          ServiceIntegrations: S.optional(ServiceIntegrationList),
          ApplicationType: S.optional(ApplicationType),
          Tags: S.optional(TagList),
          SsoTagKeys: S.optional(TagKeyList),
        }),
      ).annotate({ identifier: "RedshiftIdcApplication" });
    case 2:
      return S.suspend(() =>
        S.Struct({ RedshiftIdcApplication: S.optional(RedshiftIdcApplication) }).pipe(ns),
      ).annotate({
        identifier: "CreateRedshiftIdcApplicationResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          ClusterType: S.optional(S.String),
          NodeType: S.optional(S.String),
          NumberOfNodes: S.optional(S.Number),
          Classic: S.optional(S.Boolean),
          ReservedNodeId: S.optional(S.String),
          TargetReservedNodeOfferingId: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ResizeClusterMessage" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ClusterIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PauseClusterMessage" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ClusterIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ResumeClusterMessage" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ResizeCluster: S.optional(ResizeClusterMessage),
          PauseCluster: S.optional(PauseClusterMessage),
          ResumeCluster: S.optional(ResumeClusterMessage),
        }),
      ).annotate({ identifier: "ScheduledActionType" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ScheduledActionName: S.optional(S.String),
          TargetAction: S.optional(ScheduledActionType),
          Schedule: S.optional(S.String),
          IamRole: S.optional(S.String),
          ScheduledActionDescription: S.optional(S.String),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Enable: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateScheduledActionMessage",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ T.DateFromString.pipe(/*@__PURE__*/ T.TimestampFormat("date-time")).pipe(
          /*@__PURE__*/ T.XmlName("ScheduledActionTime"),
        ),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          ScheduledActionName: S.optional(S.String),
          TargetAction: S.optional(ScheduledActionType),
          Schedule: S.optional(S.String),
          IamRole: S.optional(S.String),
          ScheduledActionDescription: S.optional(S.String),
          State: S.optional(ScheduledActionState),
          NextInvocations: S.optional(ScheduledActionTimeList),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }).pipe(ns),
      ).annotate({ identifier: "ScheduledAction" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SnapshotCopyGrantName: S.optional(S.String),
          KmsKeyId: S.optional(S.String),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateSnapshotCopyGrantMessage",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          SnapshotCopyGrantName: S.optional(S.String),
          KmsKeyId: S.optional(S.String),
          Tags: S.optional(TagList),
        }),
      ).annotate({ identifier: "SnapshotCopyGrant" });
    case 4:
      return S.suspend(() =>
        S.Struct({ SnapshotCopyGrant: S.optional(SnapshotCopyGrant) }).pipe(ns),
      ).annotate({
        identifier: "CreateSnapshotCopyGrantResult",
      });
    case 5:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("ScheduleDefinition")));
    case 6:
      return S.suspend(() =>
        S.Struct({
          ScheduleDefinitions: S.optional(ScheduleDefinitionList),
          ScheduleIdentifier: S.optional(S.String),
          ScheduleDescription: S.optional(S.String),
          Tags: S.optional(TagList),
          DryRun: S.optional(S.Boolean),
          NextInvocations: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateSnapshotScheduleMessage",
      });
    case 7:
      return S.Array(
        /*@__PURE__*/ T.DateFromString.pipe(/*@__PURE__*/ T.TimestampFormat("date-time")).pipe(
          /*@__PURE__*/ T.XmlName("SnapshotTime"),
        ),
      );
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          ScheduleAssociationState: S.optional(ScheduleState),
        }),
      ).annotate({
        identifier: "ClusterAssociatedToSchedule",
      });
    case 1:
      return S.Array(
        /*@__PURE__*/ ClusterAssociatedToSchedule.pipe(
          /*@__PURE__*/ T.XmlName("ClusterAssociatedToSchedule"),
        ).annotate({
          identifier: "ClusterAssociatedToSchedule",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          ScheduleDefinitions: S.optional(ScheduleDefinitionList),
          ScheduleIdentifier: S.optional(S.String),
          ScheduleDescription: S.optional(S.String),
          Tags: S.optional(TagList),
          NextInvocations: S.optional(ScheduledSnapshotTimeList),
          AssociatedClusterCount: S.optional(S.Number),
          AssociatedClusters: S.optional(AssociatedClusterList),
        }).pipe(ns),
      ).annotate({ identifier: "SnapshotSchedule" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceName: S.optional(S.String), Tags: S.optional(TagList) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateTagsMessage" });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CreateTagsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          FeatureType: S.optional(UsageLimitFeatureType),
          LimitType: S.optional(UsageLimitLimitType),
          Amount: S.optional(S.Number),
          Period: S.optional(UsageLimitPeriod),
          BreachAction: S.optional(UsageLimitBreachAction),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateUsageLimitMessage" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          UsageLimitId: S.optional(S.String),
          ClusterIdentifier: S.optional(S.String),
          FeatureType: S.optional(UsageLimitFeatureType),
          LimitType: S.optional(UsageLimitLimitType),
          Amount: S.optional(S.Number),
          Period: S.optional(UsageLimitPeriod),
          BreachAction: S.optional(UsageLimitBreachAction),
          Tags: S.optional(TagList),
        }).pipe(ns),
      ).annotate({ identifier: "UsageLimit" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DataShareArn: S.optional(S.String),
          ConsumerIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeauthorizeDataShareMessage",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ AuthenticationProfileName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteAuthenticationProfileMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ AuthenticationProfileName: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DeleteAuthenticationProfileResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          SkipFinalClusterSnapshot: S.optional(S.Boolean),
          FinalClusterSnapshotIdentifier: S.optional(S.String),
          FinalClusterSnapshotRetentionPeriod: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteClusterMessage" });
    case 3:
      return S.suspend(() => S.Struct({ Cluster: S.optional(Cluster) }).pipe(ns)).annotate({
        identifier: "DeleteClusterResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ParameterGroupName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteClusterParameterGroupMessage",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteClusterParameterGroupResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ClusterSecurityGroupName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteClusterSecurityGroupMessage",
      });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteClusterSecurityGroupResponse",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Snapshot: S.optional(Snapshot) }).pipe(ns)).annotate({
        identifier: "DeleteClusterSnapshotResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ClusterSubnetGroupName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteClusterSubnetGroupMessage",
      });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteClusterSubnetGroupResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          CustomDomainName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteCustomDomainAssociationMessage",
      });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteCustomDomainAssociationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ EndpointName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteEndpointAccessMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ SubscriptionName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteEventSubscriptionMessage",
      });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteEventSubscriptionResponse",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ HsmClientCertificateIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteHsmClientCertificateMessage",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteHsmClientCertificateResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ HsmConfigurationIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteHsmConfigurationMessage",
      });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteHsmConfigurationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ IntegrationArn: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteIntegrationMessage" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Qev2IdcApplicationArn: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteQev2IdcApplicationMessage",
      });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteQev2IdcApplicationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ RedshiftIdcApplicationArn: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteRedshiftIdcApplicationMessage",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteRedshiftIdcApplicationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteResourcePolicyMessage",
      });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteResourcePolicyResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ScheduledActionName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteScheduledActionMessage",
      });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteScheduledActionResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ SnapshotCopyGrantName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteSnapshotCopyGrantMessage",
      });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteSnapshotCopyGrantResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ScheduleIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteSnapshotScheduleMessage",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteSnapshotScheduleResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceName: S.optional(S.String), TagKeys: S.optional(TagKeyList) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteTagsMessage" });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteTagsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ UsageLimitId: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteUsageLimitMessage" });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteUsageLimitResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NamespaceIdentifier: S.optional(S.String),
          WorkgroupIdentifier: S.optional(S.String),
        }),
      ).annotate({ identifier: "ServerlessIdentifier" });
    case 6:
      return S.suspend(() => S.Struct({ ClusterIdentifier: S.optional(S.String) })).annotate({
        identifier: "ProvisionedIdentifier",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ ServerlessIdentifier: ServerlessIdentifier }),
        /*@__PURE__*/ S.Struct({ ProvisionedIdentifier: ProvisionedIdentifier }),
      ]);
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          NamespaceIdentifier: S.optional(NamespaceIdentifierUnion),
          ConsumerIdentifiers: S.optional(ConsumerIdentifierList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeregisterNamespaceInputMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Status: S.optional(NamespaceRegistrationStatus) }).pipe(ns),
      ).annotate({
        identifier: "DeregisterNamespaceOutputMessage",
      });
    case 3:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("AttributeName")));
    case 4:
      return S.suspend(() =>
        S.Struct({ AttributeNames: S.optional(AttributeNameList) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeAccountAttributesMessage",
      });
    case 5:
      return S.suspend(() => S.Struct({ AttributeValue: S.optional(S.String) })).annotate({
        identifier: "AttributeValueTarget",
      });
    case 6:
      return S.Array(
        /*@__PURE__*/ AttributeValueTarget.pipe(
          /*@__PURE__*/ T.XmlName("AttributeValueTarget"),
        ).annotate({
          identifier: "AttributeValueTarget",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          AttributeName: S.optional(S.String),
          AttributeValues: S.optional(AttributeValueList),
        }),
      ).annotate({ identifier: "AccountAttribute" });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ AccountAttribute.pipe(/*@__PURE__*/ T.XmlName("AccountAttribute")).annotate({
          identifier: "AccountAttribute",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({ AccountAttributes: S.optional(AttributeList) }).pipe(ns),
      ).annotate({ identifier: "AccountAttributeList" });
    case 2:
      return S.suspend(() =>
        S.Struct({ AuthenticationProfileName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeAuthenticationProfilesMessage",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AuthenticationProfileName: S.optional(S.String),
          AuthenticationProfileContent: S.optional(S.String),
        }),
      ).annotate({ identifier: "AuthenticationProfile" });
    case 4:
      return S.Array(AuthenticationProfile);
    case 5:
      return S.suspend(() =>
        S.Struct({ AuthenticationProfiles: S.optional(AuthenticationProfileList) }).pipe(ns),
      ).annotate({
        identifier: "DescribeAuthenticationProfilesResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeClusterDbRevisionsMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DatabaseRevision: S.optional(S.String),
          Description: S.optional(S.String),
          DatabaseRevisionReleaseDate: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
        }),
      ).annotate({ identifier: "RevisionTarget" });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ RevisionTarget.pipe(/*@__PURE__*/ T.XmlName("RevisionTarget")).annotate({
          identifier: "RevisionTarget",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          CurrentDatabaseRevision: S.optional(S.String),
          DatabaseRevisionReleaseDate: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          RevisionTargets: S.optional(RevisionTargetsList),
        }),
      ).annotate({ identifier: "ClusterDbRevision" });
    case 2:
      return S.Array(
        /*@__PURE__*/ ClusterDbRevision.pipe(/*@__PURE__*/ T.XmlName("ClusterDbRevision")).annotate(
          {
            identifier: "ClusterDbRevision",
          },
        ),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          ClusterDbRevisions: S.optional(ClusterDbRevisionsList),
        }).pipe(ns),
      ).annotate({
        identifier: "ClusterDbRevisionsMessage",
      });
    case 4:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("TagValue")));
    case 5:
      return S.suspend(() =>
        S.Struct({
          ParameterGroupName: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
          TagKeys: S.optional(TagKeyList),
          TagValues: S.optional(TagValueList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeClusterParameterGroupsMessage",
      });
    case 6:
      return S.Array(
        /*@__PURE__*/ ClusterParameterGroup.pipe(
          /*@__PURE__*/ T.XmlName("ClusterParameterGroup"),
        ).annotate({
          identifier: "ClusterParameterGroup",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          ParameterGroups: S.optional(ParameterGroupList),
        }).pipe(ns),
      ).annotate({
        identifier: "ClusterParameterGroupsMessage",
      });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ParameterGroupName: S.optional(S.String),
          Source: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeClusterParametersMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ParameterName: S.optional(S.String),
          ParameterValue: S.optional(S.String),
          Description: S.optional(S.String),
          Source: S.optional(S.String),
          DataType: S.optional(S.String),
          AllowedValues: S.optional(S.String),
          ApplyType: S.optional(ParameterApplyType),
          IsModifiable: S.optional(S.Boolean),
          MinimumEngineVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "Parameter" });
    case 2:
      return S.Array(
        /*@__PURE__*/ Parameter.pipe(/*@__PURE__*/ T.XmlName("Parameter")).annotate({
          identifier: "Parameter",
        }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({ Parameters: S.optional(ParametersList), Marker: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "ClusterParameterGroupDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
          TagKeys: S.optional(TagKeyList),
          TagValues: S.optional(TagValueList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeClustersMessage" });
    case 5:
      return S.Array(
        /*@__PURE__*/ Cluster.pipe(/*@__PURE__*/ T.XmlName("Cluster")).annotate({
          identifier: "Cluster",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({ Marker: S.optional(S.String), Clusters: S.optional(ClusterList) }).pipe(ns),
      ).annotate({ identifier: "ClustersMessage" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ClusterSecurityGroupName: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
          TagKeys: S.optional(TagKeyList),
          TagValues: S.optional(TagValueList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeClusterSecurityGroupsMessage",
      });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ ClusterSecurityGroup.pipe(
          /*@__PURE__*/ T.XmlName("ClusterSecurityGroup"),
        ).annotate({
          identifier: "ClusterSecurityGroup",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          ClusterSecurityGroups: S.optional(ClusterSecurityGroups),
        }).pipe(ns),
      ).annotate({
        identifier: "ClusterSecurityGroupMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Attribute: S.optional(SnapshotAttributeToSortBy),
          SortOrder: S.optional(SortByOrder),
        }),
      ).annotate({ identifier: "SnapshotSortingEntity" });
    case 3:
      return S.Array(
        /*@__PURE__*/ SnapshotSortingEntity.pipe(
          /*@__PURE__*/ T.XmlName("SnapshotSortingEntity"),
        ).annotate({
          identifier: "SnapshotSortingEntity",
        }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          SnapshotIdentifier: S.optional(S.String),
          SnapshotArn: S.optional(S.String),
          SnapshotType: S.optional(S.String),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
          OwnerAccount: S.optional(S.String),
          TagKeys: S.optional(TagKeyList),
          TagValues: S.optional(TagValueList),
          ClusterExists: S.optional(S.Boolean),
          SortingEntities: S.optional(SnapshotSortingEntityList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeClusterSnapshotsMessage",
      });
    case 5:
      return S.Array(
        /*@__PURE__*/ Snapshot.pipe(/*@__PURE__*/ T.XmlName("Snapshot")).annotate({
          identifier: "Snapshot",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({ Marker: S.optional(S.String), Snapshots: S.optional(SnapshotList) }).pipe(ns),
      ).annotate({ identifier: "SnapshotMessage" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ClusterSubnetGroupName: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
          TagKeys: S.optional(TagKeyList),
          TagValues: S.optional(TagValueList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeClusterSubnetGroupsMessage",
      });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ ClusterSubnetGroup.pipe(
          /*@__PURE__*/ T.XmlName("ClusterSubnetGroup"),
        ).annotate({
          identifier: "ClusterSubnetGroup",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          ClusterSubnetGroups: S.optional(ClusterSubnetGroups),
        }).pipe(ns),
      ).annotate({
        identifier: "ClusterSubnetGroupMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MaintenanceTrackName: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeClusterTracksMessage",
      });
    case 3:
      return S.suspend(() => S.Struct({ OperationName: S.optional(S.String) })).annotate({
        identifier: "SupportedOperation",
      });
    case 4:
      return S.Array(
        /*@__PURE__*/ SupportedOperation.pipe(
          /*@__PURE__*/ T.XmlName("SupportedOperation"),
        ).annotate({
          identifier: "SupportedOperation",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          MaintenanceTrackName: S.optional(S.String),
          DatabaseVersion: S.optional(S.String),
          SupportedOperations: S.optional(SupportedOperationList),
        }),
      ).annotate({ identifier: "UpdateTarget" });
    case 6:
      return S.Array(
        /*@__PURE__*/ UpdateTarget.pipe(/*@__PURE__*/ T.XmlName("UpdateTarget")).annotate({
          identifier: "UpdateTarget",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          MaintenanceTrackName: S.optional(S.String),
          DatabaseVersion: S.optional(S.String),
          UpdateTargets: S.optional(EligibleTracksToUpdateList),
        }),
      ).annotate({ identifier: "MaintenanceTrack" });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ MaintenanceTrack.pipe(/*@__PURE__*/ T.XmlName("MaintenanceTrack")).annotate({
          identifier: "MaintenanceTrack",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({ MaintenanceTracks: S.optional(TrackList), Marker: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "TrackListMessage" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ClusterVersion: S.optional(S.String),
          ClusterParameterGroupFamily: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeClusterVersionsMessage",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ClusterVersion: S.optional(S.String),
          ClusterParameterGroupFamily: S.optional(S.String),
          Description: S.optional(S.String),
        }),
      ).annotate({ identifier: "ClusterVersion" });
    case 4:
      return S.Array(
        /*@__PURE__*/ ClusterVersion.pipe(/*@__PURE__*/ T.XmlName("ClusterVersion")).annotate({
          identifier: "ClusterVersion",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          ClusterVersions: S.optional(ClusterVersionList),
        }).pipe(ns),
      ).annotate({ identifier: "ClusterVersionsMessage" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          CustomDomainName: S.optional(S.String),
          CustomDomainCertificateArn: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeCustomDomainAssociationsMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CustomDomainName: S.optional(S.String),
          ClusterIdentifier: S.optional(S.String),
        }),
      ).annotate({ identifier: "CertificateAssociation" });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ CertificateAssociation.pipe(
          /*@__PURE__*/ T.XmlName("CertificateAssociation"),
        ).annotate({
          identifier: "CertificateAssociation",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          CustomDomainCertificateArn: S.optional(S.String),
          CustomDomainCertificateExpiryDate: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          CertificateAssociations: S.optional(CertificateAssociationList),
        }),
      ).annotate({ identifier: "Association" });
    case 2:
      return S.Array(
        /*@__PURE__*/ Association.pipe(/*@__PURE__*/ T.XmlName("Association")).annotate({
          identifier: "Association",
        }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({ Marker: S.optional(S.String), Associations: S.optional(AssociationList) }).pipe(
          ns,
        ),
      ).annotate({
        identifier: "CustomDomainAssociationsMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DataShareArn: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeDataSharesMessage",
      });
    case 5:
      return S.Array(DataShare);
    case 6:
      return S.suspend(() =>
        S.Struct({ DataShares: S.optional(DataShareList), Marker: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "DescribeDataSharesResult" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConsumerArn: S.optional(S.String),
          Status: S.optional(DataShareStatusForConsumer),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeDataSharesForConsumerMessage",
      });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DataShares: S.optional(DataShareList), Marker: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DescribeDataSharesForConsumerResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ProducerArn: S.optional(S.String),
          Status: S.optional(DataShareStatusForProducer),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeDataSharesForProducerMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ DataShares: S.optional(DataShareList), Marker: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DescribeDataSharesForProducerResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ParameterGroupFamily: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeDefaultClusterParametersMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ParameterGroupFamily: S.optional(S.String),
          Marker: S.optional(S.String),
          Parameters: S.optional(ParametersList),
        }),
      ).annotate({ identifier: "DefaultClusterParameters" });
    case 5:
      return S.suspend(() =>
        S.Struct({ DefaultClusterParameters: S.optional(DefaultClusterParameters) }).pipe(ns),
      ).annotate({
        identifier: "DescribeDefaultClusterParametersResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          ResourceOwner: S.optional(S.String),
          EndpointName: S.optional(S.String),
          VpcId: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeEndpointAccessMessage",
      });
    case 7:
      return S.Array(EndpointAccess);
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          EndpointAccessList: S.optional(EndpointAccesses),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "EndpointAccessList" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          Account: S.optional(S.String),
          Grantee: S.optional(S.Boolean),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeEndpointAuthorizationMessage",
      });
    case 2:
      return S.Array(EndpointAuthorization);
    case 3:
      return S.suspend(() =>
        S.Struct({
          EndpointAuthorizationList: S.optional(EndpointAuthorizations),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "EndpointAuthorizationList",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ SourceType: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeEventCategoriesMessage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          EventId: S.optional(S.String),
          EventCategories: S.optional(EventCategoriesList),
          EventDescription: S.optional(S.String),
          Severity: S.optional(S.String),
        }),
      ).annotate({ identifier: "EventInfoMap" });
    case 6:
      return S.Array(
        /*@__PURE__*/ EventInfoMap.pipe(/*@__PURE__*/ T.XmlName("EventInfoMap")).annotate({
          identifier: "EventInfoMap",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({ SourceType: S.optional(S.String), Events: S.optional(EventInfoMapList) }),
      ).annotate({ identifier: "EventCategoriesMap" });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ EventCategoriesMap.pipe(
          /*@__PURE__*/ T.XmlName("EventCategoriesMap"),
        ).annotate({
          identifier: "EventCategoriesMap",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({ EventCategoriesMapList: S.optional(EventCategoriesMapList) }).pipe(ns),
      ).annotate({ identifier: "EventCategoriesMessage" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SourceIdentifier: S.optional(S.String),
          SourceType: S.optional(SourceType),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Duration: S.optional(S.Number),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeEventsMessage" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          SourceIdentifier: S.optional(S.String),
          SourceType: S.optional(SourceType),
          Message: S.optional(S.String),
          EventCategories: S.optional(EventCategoriesList),
          Severity: S.optional(S.String),
          Date: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EventId: S.optional(S.String),
        }),
      ).annotate({ identifier: "Event" });
    case 4:
      return S.Array(
        /*@__PURE__*/ Event.pipe(/*@__PURE__*/ T.XmlName("Event")).annotate({
          identifier: "Event",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({ Marker: S.optional(S.String), Events: S.optional(EventList) }).pipe(ns),
      ).annotate({ identifier: "EventsMessage" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SubscriptionName: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
          TagKeys: S.optional(TagKeyList),
          TagValues: S.optional(TagValueList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeEventSubscriptionsMessage",
      });
    case 7:
      return S.Array(
        /*@__PURE__*/ EventSubscription.pipe(/*@__PURE__*/ T.XmlName("EventSubscription")).annotate(
          {
            identifier: "EventSubscription",
          },
        ),
      );
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          EventSubscriptionsList: S.optional(EventSubscriptionsList),
        }).pipe(ns),
      ).annotate({
        identifier: "EventSubscriptionsMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          HsmClientCertificateIdentifier: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
          TagKeys: S.optional(TagKeyList),
          TagValues: S.optional(TagValueList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeHsmClientCertificatesMessage",
      });
    case 2:
      return S.Array(
        /*@__PURE__*/ HsmClientCertificate.pipe(
          /*@__PURE__*/ T.XmlName("HsmClientCertificate"),
        ).annotate({
          identifier: "HsmClientCertificate",
        }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          HsmClientCertificates: S.optional(HsmClientCertificateList),
        }).pipe(ns),
      ).annotate({
        identifier: "HsmClientCertificateMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          HsmConfigurationIdentifier: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
          TagKeys: S.optional(TagKeyList),
          TagValues: S.optional(TagValueList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeHsmConfigurationsMessage",
      });
    case 5:
      return S.Array(
        /*@__PURE__*/ HsmConfiguration.pipe(/*@__PURE__*/ T.XmlName("HsmConfiguration")).annotate({
          identifier: "HsmConfiguration",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          HsmConfigurations: S.optional(HsmConfigurationList),
        }).pipe(ns),
      ).annotate({ identifier: "HsmConfigurationMessage" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          IntegrationArn: S.optional(S.String),
          TargetArn: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeInboundIntegrationsMessage",
      });
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          IntegrationArn: S.optional(S.String),
          SourceArn: S.optional(S.String),
          TargetArn: S.optional(S.String),
          Status: S.optional(ZeroETLIntegrationStatus),
          Errors: S.optional(IntegrationErrorList),
          CreateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "InboundIntegration" });
    case 1:
      return S.Array(
        /*@__PURE__*/ InboundIntegration.pipe(
          /*@__PURE__*/ T.XmlName("InboundIntegration"),
        ).annotate({
          identifier: "InboundIntegration",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          InboundIntegrations: S.optional(InboundIntegrationList),
        }).pipe(ns),
      ).annotate({
        identifier: "InboundIntegrationsMessage",
      });
    case 3:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("Value")));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(DescribeIntegrationsFilterName),
          Values: S.optional(DescribeIntegrationsFilterValueList),
        }),
      ).annotate({
        identifier: "DescribeIntegrationsFilter",
      });
    case 5:
      return S.Array(
        /*@__PURE__*/ DescribeIntegrationsFilter.pipe(
          /*@__PURE__*/ T.XmlName("DescribeIntegrationsFilter"),
        ).annotate({
          identifier: "DescribeIntegrationsFilter",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          IntegrationArn: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
          Filters: S.optional(DescribeIntegrationsFilterList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeIntegrationsMessage",
      });
    case 7:
      return S.Array(
        /*@__PURE__*/ Integration.pipe(/*@__PURE__*/ T.XmlName("Integration")).annotate({
          identifier: "Integration",
        }),
      );
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Marker: S.optional(S.String), Integrations: S.optional(IntegrationList) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "IntegrationsMessage" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ClusterIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeLoggingStatusMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          LoggingEnabled: S.optional(S.Boolean),
          BucketName: S.optional(S.String),
          S3KeyPrefix: S.optional(S.String),
          LastSuccessfulDeliveryTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          LastFailureTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          LastFailureMessage: S.optional(S.String),
          LogDestinationType: S.optional(LogDestinationType),
          LogExports: S.optional(LogTypeList),
          S3Tables: S.optional(S3TablePublishStatus),
        }).pipe(ns),
      ).annotate({ identifier: "LoggingStatus" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(NodeConfigurationOptionsFilterName),
          Operator: S.optional(OperatorType),
          Values: S.optional(ValueStringList).pipe(T.XmlName("Value")),
        }),
      ).annotate({
        identifier: "NodeConfigurationOptionsFilter",
      });
    case 4:
      return S.Array(
        /*@__PURE__*/ NodeConfigurationOptionsFilter.pipe(
          /*@__PURE__*/ T.XmlName("NodeConfigurationOptionsFilter"),
        ).annotate({
          identifier: "NodeConfigurationOptionsFilter",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          ActionType: S.optional(ActionType),
          ClusterIdentifier: S.optional(S.String),
          SnapshotIdentifier: S.optional(S.String),
          SnapshotArn: S.optional(S.String),
          OwnerAccount: S.optional(S.String),
          Filters: S.optional(NodeConfigurationOptionsFilterList).pipe(T.XmlName("Filter")),
          Marker: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeNodeConfigurationOptionsMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NodeType: S.optional(S.String),
          NumberOfNodes: S.optional(S.Number),
          EstimatedDiskUtilizationPercent: S.optional(S.Number),
          Mode: S.optional(Mode),
        }),
      ).annotate({ identifier: "NodeConfigurationOption" });
    case 7:
      return S.Array(
        /*@__PURE__*/ NodeConfigurationOption.pipe(
          /*@__PURE__*/ T.XmlName("NodeConfigurationOption"),
        ).annotate({
          identifier: "NodeConfigurationOption",
        }),
      );
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NodeConfigurationOptionList: S.optional(NodeConfigurationOptionList),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "NodeConfigurationOptionsMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ClusterVersion: S.optional(S.String),
          NodeType: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeOrderableClusterOptionsMessage",
      });
    case 2:
      return S.Array(
        /*@__PURE__*/ AvailabilityZone.pipe(/*@__PURE__*/ T.XmlName("AvailabilityZone")).annotate({
          identifier: "AvailabilityZone",
        }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          ClusterVersion: S.optional(S.String),
          ClusterType: S.optional(S.String),
          NodeType: S.optional(S.String),
          AvailabilityZones: S.optional(AvailabilityZoneList),
        }),
      ).annotate({ identifier: "OrderableClusterOption" });
    case 4:
      return S.Array(
        /*@__PURE__*/ OrderableClusterOption.pipe(
          /*@__PURE__*/ T.XmlName("OrderableClusterOption"),
        ).annotate({
          identifier: "OrderableClusterOption",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          OrderableClusterOptions: S.optional(OrderableClusterOptionsList),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "OrderableClusterOptionsMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          ClusterIdentifier: S.optional(S.String),
          DatabaseName: S.optional(S.String),
          PartnerName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribePartnersInputMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DatabaseName: S.optional(S.String),
          PartnerName: S.optional(S.String),
          Status: S.optional(PartnerIntegrationStatus),
          StatusMessage: S.optional(S.String),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "PartnerIntegrationInfo" });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ PartnerIntegrationInfo.pipe(
          /*@__PURE__*/ T.XmlName("PartnerIntegrationInfo"),
        ).annotate({
          identifier: "PartnerIntegrationInfo",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({ PartnerIntegrationInfoList: S.optional(PartnerIntegrationInfoList) }).pipe(ns),
      ).annotate({
        identifier: "DescribePartnersOutputMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Qev2IdcApplicationArn: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeQev2IdcApplicationsMessage",
      });
    case 3:
      return S.Array(Qev2IdcApplication);
    case 4:
      return S.suspend(() =>
        S.Struct({
          Qev2IdcApplications: S.optional(Qev2IdcApplicationList),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeQev2IdcApplicationsResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          RedshiftIdcApplicationArn: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeRedshiftIdcApplicationsMessage",
      });
    case 6:
      return S.Array(RedshiftIdcApplication);
    case 7:
      return S.suspend(() =>
        S.Struct({
          RedshiftIdcApplications: S.optional(RedshiftIdcApplicationList),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeRedshiftIdcApplicationsResult",
      });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ReservedNodeId: S.optional(S.String),
          ReservedNodeExchangeRequestId: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeReservedNodeExchangeStatusInputMessage",
      });
    case 1:
      return S.Array(
        /*@__PURE__*/ ReservedNodeExchangeStatus.pipe(
          /*@__PURE__*/ T.XmlName("ReservedNodeExchangeStatus"),
        ).annotate({
          identifier: "ReservedNodeExchangeStatus",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          ReservedNodeExchangeStatusDetails: S.optional(ReservedNodeExchangeStatusList),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeReservedNodeExchangeStatusOutputMessage",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ReservedNodeOfferingId: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeReservedNodeOfferingsMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ReservedNodeOfferingId: S.optional(S.String),
          NodeType: S.optional(S.String),
          Duration: S.optional(S.Number),
          FixedPrice: S.optional(S.Number),
          UsagePrice: S.optional(S.Number),
          CurrencyCode: S.optional(S.String),
          OfferingType: S.optional(S.String),
          RecurringCharges: S.optional(RecurringChargeList),
          ReservedNodeOfferingType: S.optional(ReservedNodeOfferingType),
        }),
      ).annotate({ identifier: "ReservedNodeOffering" });
    case 5:
      return S.Array(
        /*@__PURE__*/ ReservedNodeOffering.pipe(
          /*@__PURE__*/ T.XmlName("ReservedNodeOffering"),
        ).annotate({
          identifier: "ReservedNodeOffering",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          ReservedNodeOfferings: S.optional(ReservedNodeOfferingList),
        }).pipe(ns),
      ).annotate({
        identifier: "ReservedNodeOfferingsMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ReservedNodeId: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeReservedNodesMessage",
      });
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ ReservedNode.pipe(/*@__PURE__*/ T.XmlName("ReservedNode")).annotate({
          identifier: "ReservedNode",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          ReservedNodes: S.optional(ReservedNodeList),
        }).pipe(ns),
      ).annotate({ identifier: "ReservedNodesMessage" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ClusterIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeResizeMessage" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(ScheduledActionFilterName),
          Values: S.optional(ValueStringList),
        }),
      ).annotate({ identifier: "ScheduledActionFilter" });
    case 4:
      return S.Array(
        /*@__PURE__*/ ScheduledActionFilter.pipe(
          /*@__PURE__*/ T.XmlName("ScheduledActionFilter"),
        ).annotate({
          identifier: "ScheduledActionFilter",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          ScheduledActionName: S.optional(S.String),
          TargetActionType: S.optional(ScheduledActionTypeValues),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Active: S.optional(S.Boolean),
          Filters: S.optional(ScheduledActionFilterList),
          Marker: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeScheduledActionsMessage",
      });
    case 6:
      return S.Array(
        /*@__PURE__*/ ScheduledAction.pipe(/*@__PURE__*/ T.XmlName("ScheduledAction")).annotate({
          identifier: "ScheduledAction",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          ScheduledActions: S.optional(ScheduledActionList),
        }).pipe(ns),
      ).annotate({ identifier: "ScheduledActionsMessage" });
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SnapshotCopyGrantName: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
          TagKeys: S.optional(TagKeyList),
          TagValues: S.optional(TagValueList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeSnapshotCopyGrantsMessage",
      });
    case 1:
      return S.Array(
        /*@__PURE__*/ SnapshotCopyGrant.pipe(/*@__PURE__*/ T.XmlName("SnapshotCopyGrant")).annotate(
          {
            identifier: "SnapshotCopyGrant",
          },
        ),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          SnapshotCopyGrants: S.optional(SnapshotCopyGrantList),
        }).pipe(ns),
      ).annotate({ identifier: "SnapshotCopyGrantMessage" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          ScheduleIdentifier: S.optional(S.String),
          TagKeys: S.optional(TagKeyList),
          TagValues: S.optional(TagValueList),
          Marker: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeSnapshotSchedulesMessage",
      });
    case 4:
      return S.Array(
        /*@__PURE__*/ SnapshotSchedule.pipe(/*@__PURE__*/ T.XmlName("SnapshotSchedule")).annotate({
          identifier: "SnapshotSchedule",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          SnapshotSchedules: S.optional(SnapshotScheduleList),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeSnapshotSchedulesOutputMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeStorageRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TotalBackupSizeInMegaBytes: S.optional(S.Number),
          TotalProvisionedStorageInMegaBytes: S.optional(S.Number),
        }).pipe(ns),
      ).annotate({ identifier: "CustomerStorageMessage" });
  }
}
function __c45(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          TableRestoreRequestId: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeTableRestoreStatusMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TableRestoreRequestId: S.optional(S.String),
          Status: S.optional(TableRestoreStatusType),
          Message: S.optional(S.String),
          RequestTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ProgressInMegaBytes: S.optional(S.Number),
          TotalDataInMegaBytes: S.optional(S.Number),
          ClusterIdentifier: S.optional(S.String),
          SnapshotIdentifier: S.optional(S.String),
          SourceDatabaseName: S.optional(S.String),
          SourceSchemaName: S.optional(S.String),
          SourceTableName: S.optional(S.String),
          TargetDatabaseName: S.optional(S.String),
          TargetSchemaName: S.optional(S.String),
          NewTableName: S.optional(S.String),
        }),
      ).annotate({ identifier: "TableRestoreStatus" });
    case 2:
      return S.Array(
        /*@__PURE__*/ TableRestoreStatus.pipe(
          /*@__PURE__*/ T.XmlName("TableRestoreStatus"),
        ).annotate({
          identifier: "TableRestoreStatus",
        }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          TableRestoreStatusDetails: S.optional(TableRestoreStatusList),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "TableRestoreStatusMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ResourceName: S.optional(S.String),
          ResourceType: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
          TagKeys: S.optional(TagKeyList),
          TagValues: S.optional(TagValueList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeTagsMessage" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Tag: S.optional(Tag),
          ResourceName: S.optional(S.String),
          ResourceType: S.optional(S.String),
        }),
      ).annotate({ identifier: "TaggedResource" });
    case 6:
      return S.Array(
        /*@__PURE__*/ TaggedResource.pipe(/*@__PURE__*/ T.XmlName("TaggedResource")).annotate({
          identifier: "TaggedResource",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          TaggedResources: S.optional(TaggedResourceList),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "TaggedResourceListMessage",
      });
  }
}
function __c46(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          UsageLimitId: S.optional(S.String),
          ClusterIdentifier: S.optional(S.String),
          FeatureType: S.optional(UsageLimitFeatureType),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
          TagKeys: S.optional(TagKeyList),
          TagValues: S.optional(TagValueList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeUsageLimitsMessage",
      });
    case 1:
      return S.Array(UsageLimit);
    case 2:
      return S.suspend(() =>
        S.Struct({ UsageLimits: S.optional(UsageLimits), Marker: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "UsageLimitList" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          LogDestinationType: S.optional(LogDestinationType),
          LogExports: S.optional(LogTypeList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DisableLoggingMessage" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ClusterIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisableSnapshotCopyMessage",
      });
    case 5:
      return S.suspend(() => S.Struct({ Cluster: S.optional(Cluster) }).pipe(ns)).annotate({
        identifier: "DisableSnapshotCopyResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DataShareArn: S.optional(S.String),
          DisassociateEntireAccount: S.optional(S.Boolean),
          ConsumerArn: S.optional(S.String),
          ConsumerRegion: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DisassociateDataShareConsumerMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          BucketName: S.optional(S.String),
          S3KeyPrefix: S.optional(S.String),
          LogDestinationType: S.optional(LogDestinationType),
          LogExports: S.optional(LogTypeList),
          S3TableKmsKeyId: S.optional(S.String),
          S3TableGranularity: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "EnableLoggingMessage" });
  }
}
function __c47(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          DestinationRegion: S.optional(S.String),
          RetentionPeriod: S.optional(S.Number),
          SnapshotCopyGrantName: S.optional(S.String),
          ManualSnapshotRetentionPeriod: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "EnableSnapshotCopyMessage",
      });
    case 1:
      return S.suspend(() => S.Struct({ Cluster: S.optional(Cluster) }).pipe(ns)).annotate({
        identifier: "EnableSnapshotCopyResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ClusterIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "FailoverPrimaryComputeInputMessage",
      });
    case 3:
      return S.suspend(() => S.Struct({ Cluster: S.optional(Cluster) }).pipe(ns)).annotate({
        identifier: "FailoverPrimaryComputeResult",
      });
    case 4:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("DbGroup")));
    case 5:
      return S.suspend(() =>
        S.Struct({
          DbUser: S.optional(S.String),
          DbName: S.optional(S.String),
          ClusterIdentifier: S.optional(S.String),
          DurationSeconds: S.optional(S.Number),
          AutoCreate: S.optional(S.Boolean),
          DbGroups: S.optional(DbGroupList),
          CustomDomainName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetClusterCredentialsMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DbUser: S.optional(S.String),
          DbPassword: S.optional(SensitiveString),
          Expiration: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }).pipe(ns),
      ).annotate({ identifier: "ClusterCredentials" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DbName: S.optional(S.String),
          ClusterIdentifier: S.optional(S.String),
          DurationSeconds: S.optional(S.Number),
          CustomDomainName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetClusterCredentialsWithIAMMessage",
      });
  }
}
function __c48(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DbUser: S.optional(S.String),
          DbPassword: S.optional(SensitiveString),
          Expiration: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          NextRefreshTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }).pipe(ns),
      ).annotate({
        identifier: "ClusterExtendedCredentials",
      });
    case 1:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("ClusterIdentifier")));
    case 2:
      return S.suspend(() =>
        S.Struct({ ClusterIds: S.optional(ClusterIdentifierList) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetIdentityCenterAuthTokenRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Token: S.optional(SensitiveString),
          ExpirationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }).pipe(ns),
      ).annotate({
        identifier: "GetIdentityCenterAuthTokenResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ActionType: S.optional(ReservedNodeExchangeActionType),
          ClusterIdentifier: S.optional(S.String),
          SnapshotIdentifier: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetReservedNodeExchangeConfigurationOptionsInputMessage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SourceReservedNode: S.optional(ReservedNode),
          TargetReservedNodeCount: S.optional(S.Number),
          TargetReservedNodeOffering: S.optional(ReservedNodeOffering),
        }),
      ).annotate({
        identifier: "ReservedNodeConfigurationOption",
      });
    case 6:
      return S.Array(
        /*@__PURE__*/ ReservedNodeConfigurationOption.pipe(
          /*@__PURE__*/ T.XmlName("ReservedNodeConfigurationOption"),
        ).annotate({
          identifier: "ReservedNodeConfigurationOption",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          ReservedNodeConfigurationOptionList: S.optional(ReservedNodeConfigurationOptionList),
        }).pipe(ns),
      ).annotate({
        identifier: "GetReservedNodeExchangeConfigurationOptionsOutputMessage",
      });
  }
}
function __c49(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ReservedNodeId: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetReservedNodeExchangeOfferingsInputMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          ReservedNodeOfferings: S.optional(ReservedNodeOfferingList),
        }).pipe(ns),
      ).annotate({
        identifier: "GetReservedNodeExchangeOfferingsOutputMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetResourcePolicyMessage" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.optional(S.String), Policy: S.optional(S.String) }),
      ).annotate({ identifier: "ResourcePolicy" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourcePolicy: S.optional(ResourcePolicy) }).pipe(ns),
      ).annotate({ identifier: "GetResourcePolicyResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          NamespaceArn: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListRecommendationsMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Text: S.optional(S.String),
          Database: S.optional(S.String),
          Command: S.optional(S.String),
          Type: S.optional(RecommendedActionType),
        }),
      ).annotate({ identifier: "RecommendedAction" });
    case 7:
      return S.Array(
        /*@__PURE__*/ RecommendedAction.pipe(/*@__PURE__*/ T.XmlName("RecommendedAction")).annotate(
          {
            identifier: "RecommendedAction",
          },
        ),
      );
  }
}
function __c50(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Text: S.optional(S.String), Link: S.optional(S.String) }),
      ).annotate({ identifier: "ReferenceLink" });
    case 1:
      return S.Array(
        /*@__PURE__*/ ReferenceLink.pipe(/*@__PURE__*/ T.XmlName("ReferenceLink")).annotate({
          identifier: "ReferenceLink",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          ClusterIdentifier: S.optional(S.String),
          NamespaceArn: S.optional(S.String),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          RecommendationType: S.optional(S.String),
          Title: S.optional(S.String),
          Description: S.optional(S.String),
          Observation: S.optional(S.String),
          ImpactRanking: S.optional(ImpactRankingType),
          RecommendationText: S.optional(S.String),
          RecommendedActions: S.optional(RecommendedActionList),
          ReferenceLinks: S.optional(ReferenceLinkList),
        }),
      ).annotate({ identifier: "Recommendation" });
    case 3:
      return S.Array(
        /*@__PURE__*/ Recommendation.pipe(/*@__PURE__*/ T.XmlName("Recommendation")).annotate({
          identifier: "Recommendation",
        }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          Recommendations: S.optional(RecommendationList),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListRecommendationsResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          AquaConfigurationStatus: S.optional(AquaConfigurationStatus),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ModifyAquaInputMessage" });
    case 6:
      return S.suspend(() =>
        S.Struct({ AquaConfiguration: S.optional(AquaConfiguration) }).pipe(ns),
      ).annotate({ identifier: "ModifyAquaOutputMessage" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AuthenticationProfileName: S.optional(S.String),
          AuthenticationProfileContent: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyAuthenticationProfileMessage",
      });
  }
}
function __c51(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AuthenticationProfileName: S.optional(S.String),
          AuthenticationProfileContent: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ModifyAuthenticationProfileResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          ClusterType: S.optional(S.String),
          NodeType: S.optional(S.String),
          NumberOfNodes: S.optional(S.Number),
          ClusterSecurityGroups: S.optional(ClusterSecurityGroupNameList),
          VpcSecurityGroupIds: S.optional(VpcSecurityGroupIdList),
          MasterUserPassword: S.optional(SensitiveString),
          ClusterParameterGroupName: S.optional(S.String),
          AutomatedSnapshotRetentionPeriod: S.optional(S.Number),
          ManualSnapshotRetentionPeriod: S.optional(S.Number),
          PreferredMaintenanceWindow: S.optional(S.String),
          ClusterVersion: S.optional(S.String),
          AllowVersionUpgrade: S.optional(S.Boolean),
          HsmClientCertificateIdentifier: S.optional(S.String),
          HsmConfigurationIdentifier: S.optional(S.String),
          NewClusterIdentifier: S.optional(S.String),
          PubliclyAccessible: S.optional(S.Boolean),
          ElasticIp: S.optional(S.String),
          EnhancedVpcRouting: S.optional(S.Boolean),
          MaintenanceTrackName: S.optional(S.String),
          Encrypted: S.optional(S.Boolean),
          KmsKeyId: S.optional(S.String),
          AvailabilityZoneRelocation: S.optional(S.Boolean),
          AvailabilityZone: S.optional(S.String),
          Port: S.optional(S.Number),
          ManageMasterPassword: S.optional(S.Boolean),
          MasterPasswordSecretKmsKeyId: S.optional(S.String),
          IpAddressType: S.optional(S.String),
          MultiAZ: S.optional(S.Boolean),
          ExtraComputeForAutomaticOptimization: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ModifyClusterMessage" });
    case 2:
      return S.suspend(() => S.Struct({ Cluster: S.optional(Cluster) }).pipe(ns)).annotate({
        identifier: "ModifyClusterResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          RevisionTarget: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyClusterDbRevisionMessage",
      });
    case 4:
      return S.suspend(() => S.Struct({ Cluster: S.optional(Cluster) }).pipe(ns)).annotate({
        identifier: "ModifyClusterDbRevisionResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          AddIamRoles: S.optional(IamRoleArnList),
          RemoveIamRoles: S.optional(IamRoleArnList),
          DefaultIamRoleArn: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyClusterIamRolesMessage",
      });
    case 6:
      return S.suspend(() => S.Struct({ Cluster: S.optional(Cluster) }).pipe(ns)).annotate({
        identifier: "ModifyClusterIamRolesResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          DeferMaintenance: S.optional(S.Boolean),
          DeferMaintenanceIdentifier: S.optional(S.String),
          DeferMaintenanceStartTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          DeferMaintenanceEndTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          DeferMaintenanceDuration: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyClusterMaintenanceMessage",
      });
  }
}
function __c52(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Cluster: S.optional(Cluster) }).pipe(ns)).annotate({
        identifier: "ModifyClusterMaintenanceResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ParameterGroupName: S.optional(S.String),
          Parameters: S.optional(ParametersList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyClusterParameterGroupMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ParameterGroupName: S.optional(S.String),
          ParameterGroupStatus: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ClusterParameterGroupNameMessage",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          SnapshotIdentifier: S.optional(S.String),
          ManualSnapshotRetentionPeriod: S.optional(S.Number),
          Force: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyClusterSnapshotMessage",
      });
    case 4:
      return S.suspend(() => S.Struct({ Snapshot: S.optional(Snapshot) }).pipe(ns)).annotate({
        identifier: "ModifyClusterSnapshotResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          ScheduleIdentifier: S.optional(S.String),
          DisassociateSchedule: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyClusterSnapshotScheduleMessage",
      });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "ModifyClusterSnapshotScheduleResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ClusterSubnetGroupName: S.optional(S.String),
          Description: S.optional(S.String),
          SubnetIds: S.optional(SubnetIdentifierList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyClusterSubnetGroupMessage",
      });
  }
}
function __c53(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ClusterSubnetGroup: S.optional(ClusterSubnetGroup) }).pipe(ns),
      ).annotate({
        identifier: "ModifyClusterSubnetGroupResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CustomDomainName: S.optional(S.String),
          CustomDomainCertificateArn: S.optional(S.String),
          ClusterIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyCustomDomainAssociationMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CustomDomainName: S.optional(S.String),
          CustomDomainCertificateArn: S.optional(S.String),
          ClusterIdentifier: S.optional(S.String),
          CustomDomainCertExpiryTime: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ModifyCustomDomainAssociationResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          EndpointName: S.optional(S.String),
          VpcSecurityGroupIds: S.optional(VpcSecurityGroupIdList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyEndpointAccessMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SubscriptionName: S.optional(S.String),
          SnsTopicArn: S.optional(S.String),
          SourceType: S.optional(S.String),
          SourceIds: S.optional(SourceIdsList),
          EventCategories: S.optional(EventCategoriesList),
          Severity: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyEventSubscriptionMessage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ EventSubscription: S.optional(EventSubscription) }).pipe(ns),
      ).annotate({
        identifier: "ModifyEventSubscriptionResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          IntegrationArn: S.optional(S.String),
          Description: S.optional(S.String),
          IntegrationName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ModifyIntegrationMessage" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          LakehouseRegistration: S.optional(LakehouseRegistration),
          CatalogName: S.optional(S.String),
          LakehouseIdcRegistration: S.optional(LakehouseIdcRegistration),
          LakehouseIdcApplicationArn: S.optional(S.String),
          DryRun: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyLakehouseConfigurationMessage",
      });
  }
}
function __c54(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          LakehouseIdcApplicationArn: S.optional(S.String),
          LakehouseRegistrationStatus: S.optional(S.String),
          CatalogArn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "LakehouseConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Qev2IdcApplicationArn: S.optional(S.String),
          IdcDisplayName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyQev2IdcApplicationMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Qev2IdcApplication: S.optional(Qev2IdcApplication) }).pipe(ns),
      ).annotate({
        identifier: "ModifyQev2IdcApplicationResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RedshiftIdcApplicationArn: S.optional(S.String),
          IdentityNamespace: S.optional(S.String),
          IamRoleArn: S.optional(S.String),
          IdcDisplayName: S.optional(S.String),
          AuthorizedTokenIssuerList: S.optional(AuthorizedTokenIssuerList),
          ServiceIntegrations: S.optional(ServiceIntegrationList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyRedshiftIdcApplicationMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ RedshiftIdcApplication: S.optional(RedshiftIdcApplication) }).pipe(ns),
      ).annotate({
        identifier: "ModifyRedshiftIdcApplicationResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ScheduledActionName: S.optional(S.String),
          TargetAction: S.optional(ScheduledActionType),
          Schedule: S.optional(S.String),
          IamRole: S.optional(S.String),
          ScheduledActionDescription: S.optional(S.String),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Enable: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyScheduledActionMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          RetentionPeriod: S.optional(S.Number),
          Manual: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifySnapshotCopyRetentionPeriodMessage",
      });
    case 7:
      return S.suspend(() => S.Struct({ Cluster: S.optional(Cluster) }).pipe(ns)).annotate({
        identifier: "ModifySnapshotCopyRetentionPeriodResult",
      });
  }
}
function __c55(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ScheduleIdentifier: S.optional(S.String),
          ScheduleDefinitions: S.optional(ScheduleDefinitionList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifySnapshotScheduleMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          UsageLimitId: S.optional(S.String),
          Amount: S.optional(S.Number),
          BreachAction: S.optional(UsageLimitBreachAction),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ModifyUsageLimitMessage" });
    case 2:
      return S.suspend(() => S.Struct({ Cluster: S.optional(Cluster) }).pipe(ns)).annotate({
        identifier: "PauseClusterResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ReservedNodeOfferingId: S.optional(S.String),
          NodeCount: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PurchaseReservedNodeOfferingMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ReservedNode: S.optional(ReservedNode) }).pipe(ns),
      ).annotate({
        identifier: "PurchaseReservedNodeOfferingResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.optional(S.String), Policy: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutResourcePolicyMessage" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ResourcePolicy: S.optional(ResourcePolicy) }).pipe(ns),
      ).annotate({ identifier: "PutResourcePolicyResult" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ClusterIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "RebootClusterMessage" });
  }
}
function __c56(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Cluster: S.optional(Cluster) }).pipe(ns)).annotate({
        identifier: "RebootClusterResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          NamespaceIdentifier: S.optional(NamespaceIdentifierUnion),
          ConsumerIdentifiers: S.optional(ConsumerIdentifierList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RegisterNamespaceInputMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Status: S.optional(NamespaceRegistrationStatus) }).pipe(ns),
      ).annotate({
        identifier: "RegisterNamespaceOutputMessage",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DataShareArn: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "RejectDataShareMessage" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ParameterGroupName: S.optional(S.String),
          ResetAllParameters: S.optional(S.Boolean),
          Parameters: S.optional(ParametersList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ResetClusterParameterGroupMessage",
      });
    case 5:
      return S.suspend(() => S.Struct({ Cluster: S.optional(Cluster) }).pipe(ns)).annotate({
        identifier: "ResizeClusterResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          SnapshotIdentifier: S.optional(S.String),
          SnapshotArn: S.optional(S.String),
          SnapshotClusterIdentifier: S.optional(S.String),
          Port: S.optional(S.Number),
          AvailabilityZone: S.optional(S.String),
          AllowVersionUpgrade: S.optional(S.Boolean),
          ClusterSubnetGroupName: S.optional(S.String),
          PubliclyAccessible: S.optional(S.Boolean),
          OwnerAccount: S.optional(S.String),
          HsmClientCertificateIdentifier: S.optional(S.String),
          HsmConfigurationIdentifier: S.optional(S.String),
          ElasticIp: S.optional(S.String),
          ClusterParameterGroupName: S.optional(S.String),
          ClusterSecurityGroups: S.optional(ClusterSecurityGroupNameList),
          VpcSecurityGroupIds: S.optional(VpcSecurityGroupIdList),
          PreferredMaintenanceWindow: S.optional(S.String),
          AutomatedSnapshotRetentionPeriod: S.optional(S.Number),
          ManualSnapshotRetentionPeriod: S.optional(S.Number),
          KmsKeyId: S.optional(S.String),
          NodeType: S.optional(S.String),
          EnhancedVpcRouting: S.optional(S.Boolean),
          AdditionalInfo: S.optional(S.String),
          IamRoles: S.optional(IamRoleArnList),
          MaintenanceTrackName: S.optional(S.String),
          SnapshotScheduleIdentifier: S.optional(S.String),
          NumberOfNodes: S.optional(S.Number),
          AvailabilityZoneRelocation: S.optional(S.Boolean),
          AquaConfigurationStatus: S.optional(AquaConfigurationStatus),
          DefaultIamRoleArn: S.optional(S.String),
          ReservedNodeId: S.optional(S.String),
          TargetReservedNodeOfferingId: S.optional(S.String),
          Encrypted: S.optional(S.Boolean),
          ManageMasterPassword: S.optional(S.Boolean),
          MasterPasswordSecretKmsKeyId: S.optional(S.String),
          IpAddressType: S.optional(S.String),
          MultiAZ: S.optional(S.Boolean),
          CatalogName: S.optional(S.String),
          RedshiftIdcApplicationArn: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RestoreFromClusterSnapshotMessage",
      });
    case 7:
      return S.suspend(() => S.Struct({ Cluster: S.optional(Cluster) }).pipe(ns)).annotate({
        identifier: "RestoreFromClusterSnapshotResult",
      });
  }
}
function __c57(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          SnapshotIdentifier: S.optional(S.String),
          SourceDatabaseName: S.optional(S.String),
          SourceSchemaName: S.optional(S.String),
          SourceTableName: S.optional(S.String),
          TargetDatabaseName: S.optional(S.String),
          TargetSchemaName: S.optional(S.String),
          NewTableName: S.optional(S.String),
          EnableCaseSensitiveIdentifier: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RestoreTableFromClusterSnapshotMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ TableRestoreStatus: S.optional(TableRestoreStatus) }).pipe(ns),
      ).annotate({
        identifier: "RestoreTableFromClusterSnapshotResult",
      });
    case 2:
      return S.suspend(() => S.Struct({ Cluster: S.optional(Cluster) }).pipe(ns)).annotate({
        identifier: "ResumeClusterResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ClusterSecurityGroupName: S.optional(S.String),
          CIDRIP: S.optional(S.String),
          EC2SecurityGroupName: S.optional(S.String),
          EC2SecurityGroupOwnerId: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RevokeClusterSecurityGroupIngressMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ClusterSecurityGroup: S.optional(ClusterSecurityGroup) }).pipe(ns),
      ).annotate({
        identifier: "RevokeClusterSecurityGroupIngressResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          Account: S.optional(S.String),
          VpcIds: S.optional(VpcIdentifierList),
          Force: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RevokeEndpointAccessMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SnapshotIdentifier: S.optional(S.String),
          SnapshotArn: S.optional(S.String),
          SnapshotClusterIdentifier: S.optional(S.String),
          AccountWithRestoreAccess: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RevokeSnapshotAccessMessage",
      });
    case 7:
      return S.suspend(() => S.Struct({ Snapshot: S.optional(Snapshot) }).pipe(ns)).annotate({
        identifier: "RevokeSnapshotAccessResult",
      });
  }
}
function __c58(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ClusterIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RotateEncryptionKeyMessage",
      });
    case 1:
      return S.suspend(() => S.Struct({ Cluster: S.optional(Cluster) }).pipe(ns)).annotate({
        identifier: "RotateEncryptionKeyResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          ClusterIdentifier: S.optional(S.String),
          DatabaseName: S.optional(S.String),
          PartnerName: S.optional(S.String),
          Status: S.optional(PartnerIntegrationStatus),
          StatusMessage: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdatePartnerStatusInputMessage",
      });
  }
}
