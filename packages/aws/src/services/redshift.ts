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
export interface RecurringCharge {
  RecurringChargeAmount?: number;
  RecurringChargeFrequency?: string;
}
export type RecurringChargeList = RecurringCharge[];
export type ReservedNodeOfferingType = "Regular" | "Upgradable" | (string & {});
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
export interface AcceptReservedNodeExchangeOutputMessage {
  ExchangedReservedNode?: ReservedNode;
}
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
export interface PartnerIntegrationOutputMessage {
  DatabaseName?: string;
  PartnerName?: string;
}
export interface AssociateDataShareConsumerMessage {
  DataShareArn?: string;
  AssociateEntireAccount?: boolean;
  ConsumerArn?: string;
  ConsumerRegion?: string;
  AllowWrites?: boolean;
}
export type DataShareStatus =
  | "ACTIVE"
  | "PENDING_AUTHORIZATION"
  | "AUTHORIZED"
  | "DEAUTHORIZED"
  | "REJECTED"
  | "AVAILABLE"
  | (string & {});
export interface DataShareAssociation {
  ConsumerIdentifier?: string;
  Status?: DataShareStatus;
  ConsumerRegion?: string;
  CreatedDate?: Date;
  StatusChangeDate?: Date;
  ProducerAllowedWrites?: boolean;
  ConsumerAcceptedWrites?: boolean;
}
export type DataShareAssociationList = DataShareAssociation[];
export type DataShareType = "INTERNAL" | (string & {});
export interface DataShare {
  DataShareArn?: string;
  ProducerArn?: string;
  AllowPubliclyAccessibleConsumers?: boolean;
  DataShareAssociations?: DataShareAssociation[];
  ManagedBy?: string;
  DataShareType?: DataShareType;
}
export interface AuthorizeClusterSecurityGroupIngressMessage {
  ClusterSecurityGroupName?: string;
  CIDRIP?: string;
  EC2SecurityGroupName?: string;
  EC2SecurityGroupOwnerId?: string;
}
export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagList = Tag[];
export interface EC2SecurityGroup {
  Status?: string;
  EC2SecurityGroupName?: string;
  EC2SecurityGroupOwnerId?: string;
  Tags?: Tag[];
}
export type EC2SecurityGroupList = EC2SecurityGroup[];
export interface IPRange {
  Status?: string;
  CIDRIP?: string;
  Tags?: Tag[];
}
export type IPRangeList = IPRange[];
export interface ClusterSecurityGroup {
  ClusterSecurityGroupName?: string;
  Description?: string;
  EC2SecurityGroups?: EC2SecurityGroup[];
  IPRanges?: IPRange[];
  Tags?: Tag[];
}
export interface AuthorizeClusterSecurityGroupIngressResult {
  ClusterSecurityGroup?: ClusterSecurityGroup;
}
export interface AuthorizeDataShareMessage {
  DataShareArn?: string;
  ConsumerIdentifier?: string;
  AllowWrites?: boolean;
}
export type VpcIdentifierList = string[];
export interface AuthorizeEndpointAccessMessage {
  ClusterIdentifier?: string;
  Account?: string;
  VpcIds?: string[];
}
export type AuthorizationStatus = "Authorized" | "Revoking" | (string & {});
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
export interface AuthorizeSnapshotAccessMessage {
  SnapshotIdentifier?: string;
  SnapshotArn?: string;
  SnapshotClusterIdentifier?: string;
  AccountWithRestoreAccess?: string;
}
export interface AccountWithRestoreAccess {
  AccountId?: string;
  AccountAlias?: string;
}
export type AccountsWithRestoreAccessList = AccountWithRestoreAccess[];
export type RestorableNodeTypeList = string[];
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
export interface AuthorizeSnapshotAccessResult {
  Snapshot?: Snapshot;
}
export interface DeleteClusterSnapshotMessage {
  SnapshotIdentifier?: string;
  SnapshotClusterIdentifier?: string;
}
export type DeleteClusterSnapshotMessageList = DeleteClusterSnapshotMessage[];
export interface BatchDeleteClusterSnapshotsRequest {
  Identifiers?: DeleteClusterSnapshotMessage[];
}
export type SnapshotIdentifierList = string[];
export interface SnapshotErrorMessage {
  SnapshotIdentifier?: string;
  SnapshotClusterIdentifier?: string;
  FailureCode?: string;
  FailureReason?: string;
}
export type BatchSnapshotOperationErrorList = SnapshotErrorMessage[];
export interface BatchDeleteClusterSnapshotsResult {
  Resources?: string[];
  Errors?: SnapshotErrorMessage[];
}
export interface BatchModifyClusterSnapshotsMessage {
  SnapshotIdentifierList?: string[];
  ManualSnapshotRetentionPeriod?: number;
  Force?: boolean;
}
export type BatchSnapshotOperationErrors = SnapshotErrorMessage[];
export interface BatchModifyClusterSnapshotsOutputMessage {
  Resources?: string[];
  Errors?: SnapshotErrorMessage[];
}
export interface CancelResizeMessage {
  ClusterIdentifier?: string;
}
export type ImportTablesCompleted = string[];
export type ImportTablesInProgress = string[];
export type ImportTablesNotStarted = string[];
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
export interface CopyClusterSnapshotMessage {
  SourceSnapshotIdentifier?: string;
  SourceSnapshotClusterIdentifier?: string;
  TargetSnapshotIdentifier?: string;
  ManualSnapshotRetentionPeriod?: number;
}
export interface CopyClusterSnapshotResult {
  Snapshot?: Snapshot;
}
export type AuthenticationProfileNameString = string;
export interface CreateAuthenticationProfileMessage {
  AuthenticationProfileName?: string;
  AuthenticationProfileContent?: string;
}
export interface CreateAuthenticationProfileResult {
  AuthenticationProfileName?: string;
  AuthenticationProfileContent?: string;
}
export type SensitiveString = string | redacted.Redacted<string>;
export type ClusterSecurityGroupNameList = string[];
export type VpcSecurityGroupIdList = string[];
export type IamRoleArnList = string[];
export type AquaConfigurationStatus = "enabled" | "disabled" | "auto" | (string & {});
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
export interface NetworkInterface {
  NetworkInterfaceId?: string;
  SubnetId?: string;
  PrivateIpAddress?: string;
  AvailabilityZone?: string;
  Ipv6Address?: string;
}
export type NetworkInterfaceList = NetworkInterface[];
export interface VpcEndpoint {
  VpcEndpointId?: string;
  VpcId?: string;
  NetworkInterfaces?: NetworkInterface[];
}
export type VpcEndpointsList = VpcEndpoint[];
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
export type ClusterSecurityGroupMembershipList = ClusterSecurityGroupMembership[];
export interface VpcSecurityGroupMembership {
  VpcSecurityGroupId?: string;
  Status?: string;
}
export type VpcSecurityGroupMembershipList = VpcSecurityGroupMembership[];
export interface ClusterParameterStatus {
  ParameterName?: string;
  ParameterApplyStatus?: string;
  ParameterApplyErrorDescription?: string;
}
export type ClusterParameterStatusList = ClusterParameterStatus[];
export interface ClusterParameterGroupStatus {
  ParameterGroupName?: string;
  ParameterApplyStatus?: string;
  ClusterParameterStatusList?: ClusterParameterStatus[];
}
export type ClusterParameterGroupStatusList = ClusterParameterGroupStatus[];
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
export interface RestoreStatus {
  Status?: string;
  CurrentRestoreRateInMegaBytesPerSecond?: number;
  SnapshotSizeInMegaBytes?: number;
  ProgressInMegaBytes?: number;
  ElapsedTimeInSeconds?: number;
  EstimatedTimeToCompletionInSeconds?: number;
}
export interface DataTransferProgress {
  Status?: string;
  CurrentRateInMegaBytesPerSecond?: number;
  TotalDataInMegaBytes?: number;
  DataTransferredInMegaBytes?: number;
  EstimatedTimeToCompletionInSeconds?: number;
  ElapsedTimeInSeconds?: number;
}
export interface HsmStatus {
  HsmClientCertificateIdentifier?: string;
  HsmConfigurationIdentifier?: string;
  Status?: string;
}
export interface ClusterSnapshotCopyStatus {
  DestinationRegion?: string;
  RetentionPeriod?: number;
  ManualSnapshotRetentionPeriod?: number;
  SnapshotCopyGrantName?: string;
}
export interface ClusterNode {
  NodeRole?: string;
  PrivateIPAddress?: string;
  PublicIPAddress?: string;
}
export type ClusterNodesList = ClusterNode[];
export interface ElasticIpStatus {
  ElasticIp?: string;
  Status?: string;
}
export interface ClusterIamRole {
  IamRoleArn?: string;
  ApplyStatus?: string;
}
export type ClusterIamRoleList = ClusterIamRole[];
export type PendingActionsList = string[];
export interface DeferredMaintenanceWindow {
  DeferMaintenanceIdentifier?: string;
  DeferMaintenanceStartTime?: Date;
  DeferMaintenanceEndTime?: Date;
}
export type DeferredMaintenanceWindowsList = DeferredMaintenanceWindow[];
export type ScheduleState = "MODIFYING" | "ACTIVE" | "FAILED" | (string & {});
export interface ResizeInfo {
  ResizeType?: string;
  AllowCancelResize?: boolean;
}
export type AquaStatus = "enabled" | "disabled" | "applying" | (string & {});
export interface AquaConfiguration {
  AquaStatus?: AquaStatus;
  AquaConfigurationStatus?: AquaConfigurationStatus;
}
export type ReservedNodeExchangeStatusType =
  | "REQUESTED"
  | "PENDING"
  | "IN_PROGRESS"
  | "RETRYING"
  | "SUCCEEDED"
  | "FAILED"
  | (string & {});
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
export interface SecondaryClusterInfo {
  AvailabilityZone?: string;
  ClusterNodes?: ClusterNode[];
}
export type LogTypeList = string[];
export type S3TableLastIngestionTimeMap = { [key: string]: string | undefined };
export interface S3TablePublishStatus {
  S3Tables?: string[];
  S3TableNamespace?: string;
  S3TableGranularity?: string;
  EnabledAll?: boolean;
  LastIngestionTimes?: { [key: string]: string | undefined };
}
export interface LoggingPublishStatus {
  S3Tables?: S3TablePublishStatus;
}
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
export interface CreateClusterResult {
  Cluster?: Cluster;
}
export interface CreateClusterParameterGroupMessage {
  ParameterGroupName?: string;
  ParameterGroupFamily?: string;
  Description?: string;
  Tags?: Tag[];
}
export interface ClusterParameterGroup {
  ParameterGroupName?: string;
  ParameterGroupFamily?: string;
  Description?: string;
  Tags?: Tag[];
}
export interface CreateClusterParameterGroupResult {
  ClusterParameterGroup?: ClusterParameterGroup;
}
export interface CreateClusterSecurityGroupMessage {
  ClusterSecurityGroupName?: string;
  Description?: string;
  Tags?: Tag[];
}
export interface CreateClusterSecurityGroupResult {
  ClusterSecurityGroup?: ClusterSecurityGroup;
}
export interface CreateClusterSnapshotMessage {
  SnapshotIdentifier?: string;
  ClusterIdentifier?: string;
  ManualSnapshotRetentionPeriod?: number;
  Tags?: Tag[];
}
export interface CreateClusterSnapshotResult {
  Snapshot?: Snapshot;
}
export type SubnetIdentifierList = string[];
export interface CreateClusterSubnetGroupMessage {
  ClusterSubnetGroupName?: string;
  Description?: string;
  SubnetIds?: string[];
  Tags?: Tag[];
}
export interface SupportedPlatform {
  Name?: string;
}
export type SupportedPlatformsList = SupportedPlatform[];
export interface AvailabilityZone {
  Name?: string;
  SupportedPlatforms?: SupportedPlatform[];
}
export interface Subnet {
  SubnetIdentifier?: string;
  SubnetAvailabilityZone?: AvailabilityZone;
  SubnetStatus?: string;
}
export type SubnetList = Subnet[];
export type ValueStringList = string[];
export interface ClusterSubnetGroup {
  ClusterSubnetGroupName?: string;
  Description?: string;
  VpcId?: string;
  SubnetGroupStatus?: string;
  Subnets?: Subnet[];
  Tags?: Tag[];
  SupportedClusterIpAddressTypes?: string[];
}
export interface CreateClusterSubnetGroupResult {
  ClusterSubnetGroup?: ClusterSubnetGroup;
}
export type CustomDomainNameString = string;
export type CustomDomainCertificateArnString = string;
export interface CreateCustomDomainAssociationMessage {
  CustomDomainName?: string;
  CustomDomainCertificateArn?: string;
  ClusterIdentifier?: string;
}
export interface CreateCustomDomainAssociationResult {
  CustomDomainName?: string;
  CustomDomainCertificateArn?: string;
  ClusterIdentifier?: string;
  CustomDomainCertExpiryTime?: string;
}
export interface CreateEndpointAccessMessage {
  ClusterIdentifier?: string;
  ResourceOwner?: string;
  EndpointName?: string;
  SubnetGroupName?: string;
  VpcSecurityGroupIds?: string[];
}
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
export type SourceIdsList = string[];
export type EventCategoriesList = string[];
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
export interface CreateEventSubscriptionResult {
  EventSubscription?: EventSubscription;
}
export interface CreateHsmClientCertificateMessage {
  HsmClientCertificateIdentifier?: string;
  Tags?: Tag[];
}
export interface HsmClientCertificate {
  HsmClientCertificateIdentifier?: string;
  HsmClientCertificatePublicKey?: string;
  Tags?: Tag[];
}
export interface CreateHsmClientCertificateResult {
  HsmClientCertificate?: HsmClientCertificate;
}
export interface CreateHsmConfigurationMessage {
  HsmConfigurationIdentifier?: string;
  Description?: string;
  HsmIpAddress?: string;
  HsmPartitionName?: string;
  HsmPartitionPassword?: string;
  HsmServerPublicCertificate?: string;
  Tags?: Tag[];
}
export interface HsmConfiguration {
  HsmConfigurationIdentifier?: string;
  Description?: string;
  HsmIpAddress?: string;
  HsmPartitionName?: string;
  Tags?: Tag[];
}
export interface CreateHsmConfigurationResult {
  HsmConfiguration?: HsmConfiguration;
}
export type SourceArn = string;
export type TargetArn = string;
export type IntegrationName = string;
export type EncryptionContextMap = { [key: string]: string | undefined };
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
export interface IntegrationError {
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type IntegrationErrorList = IntegrationError[];
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
export type Qev2IdcApplicationName = string;
export type IdcDisplayNameString = string;
export interface CreateQev2IdcApplicationMessage {
  IdcInstanceArn?: string;
  Qev2IdcApplicationName?: string;
  IdcDisplayName?: string;
  Tags?: Tag[];
}
export interface Qev2IdcApplication {
  IdcInstanceArn?: string;
  Qev2IdcApplicationName?: string;
  Qev2IdcApplicationArn?: string;
  IdcManagedApplicationArn?: string;
  IdcOnboardStatus?: string;
  IdcDisplayName?: string;
  Tags?: Tag[];
}
export interface CreateQev2IdcApplicationResult {
  Qev2IdcApplication?: Qev2IdcApplication;
}
export type RedshiftIdcApplicationName = string;
export type IdentityNamespaceString = string;
export type AuthorizedAudienceList = string[];
export interface AuthorizedTokenIssuer {
  TrustedTokenIssuerArn?: string;
  AuthorizedAudiencesList?: string[];
}
export type AuthorizedTokenIssuerList = AuthorizedTokenIssuer[];
export type ServiceAuthorization = "Enabled" | "Disabled" | (string & {});
export interface LakeFormationQuery {
  Authorization?: ServiceAuthorization;
}
export type LakeFormationScopeUnion = { LakeFormationQuery: LakeFormationQuery };
export type LakeFormationServiceIntegrations = LakeFormationScopeUnion[];
export interface ReadWriteAccess {
  Authorization?: ServiceAuthorization;
}
export type S3AccessGrantsScopeUnion = { ReadWriteAccess: ReadWriteAccess };
export type S3AccessGrantsServiceIntegrations = S3AccessGrantsScopeUnion[];
export interface Connect {
  Authorization?: ServiceAuthorization;
}
export type RedshiftScopeUnion = { Connect: Connect };
export type RedshiftServiceIntegrations = RedshiftScopeUnion[];
export type ServiceIntegrationsUnion =
  | { LakeFormation: LakeFormationScopeUnion[]; S3AccessGrants?: never; Redshift?: never }
  | { LakeFormation?: never; S3AccessGrants: S3AccessGrantsScopeUnion[]; Redshift?: never }
  | { LakeFormation?: never; S3AccessGrants?: never; Redshift: RedshiftScopeUnion[] };
export type ServiceIntegrationList = ServiceIntegrationsUnion[];
export type ApplicationType = "None" | "Lakehouse" | (string & {});
export type TagKeyList = string[];
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
export interface CreateRedshiftIdcApplicationResult {
  RedshiftIdcApplication?: RedshiftIdcApplication;
}
export interface ResizeClusterMessage {
  ClusterIdentifier?: string;
  ClusterType?: string;
  NodeType?: string;
  NumberOfNodes?: number;
  Classic?: boolean;
  ReservedNodeId?: string;
  TargetReservedNodeOfferingId?: string;
}
export interface PauseClusterMessage {
  ClusterIdentifier?: string;
}
export interface ResumeClusterMessage {
  ClusterIdentifier?: string;
}
export interface ScheduledActionType {
  ResizeCluster?: ResizeClusterMessage;
  PauseCluster?: PauseClusterMessage;
  ResumeCluster?: ResumeClusterMessage;
}
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
export type ScheduledActionState = "ACTIVE" | "DISABLED" | (string & {});
export type ScheduledActionTimeList = Date[];
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
export interface CreateSnapshotCopyGrantMessage {
  SnapshotCopyGrantName?: string;
  KmsKeyId?: string;
  Tags?: Tag[];
}
export interface SnapshotCopyGrant {
  SnapshotCopyGrantName?: string;
  KmsKeyId?: string;
  Tags?: Tag[];
}
export interface CreateSnapshotCopyGrantResult {
  SnapshotCopyGrant?: SnapshotCopyGrant;
}
export type ScheduleDefinitionList = string[];
export interface CreateSnapshotScheduleMessage {
  ScheduleDefinitions?: string[];
  ScheduleIdentifier?: string;
  ScheduleDescription?: string;
  Tags?: Tag[];
  DryRun?: boolean;
  NextInvocations?: number;
}
export type ScheduledSnapshotTimeList = Date[];
export interface ClusterAssociatedToSchedule {
  ClusterIdentifier?: string;
  ScheduleAssociationState?: ScheduleState;
}
export type AssociatedClusterList = ClusterAssociatedToSchedule[];
export interface SnapshotSchedule {
  ScheduleDefinitions?: string[];
  ScheduleIdentifier?: string;
  ScheduleDescription?: string;
  Tags?: Tag[];
  NextInvocations?: Date[];
  AssociatedClusterCount?: number;
  AssociatedClusters?: ClusterAssociatedToSchedule[];
}
export interface CreateTagsMessage {
  ResourceName?: string;
  Tags?: Tag[];
}
export interface CreateTagsResponse {}
export type UsageLimitFeatureType =
  | "spectrum"
  | "concurrency-scaling"
  | "cross-region-datasharing"
  | "extra-compute-for-automatic-optimization"
  | (string & {});
export type UsageLimitLimitType = "time" | "data-scanned" | (string & {});
export type UsageLimitPeriod = "daily" | "weekly" | "monthly" | (string & {});
export type UsageLimitBreachAction = "log" | "emit-metric" | "disable" | (string & {});
export interface CreateUsageLimitMessage {
  ClusterIdentifier?: string;
  FeatureType?: UsageLimitFeatureType;
  LimitType?: UsageLimitLimitType;
  Amount?: number;
  Period?: UsageLimitPeriod;
  BreachAction?: UsageLimitBreachAction;
  Tags?: Tag[];
}
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
export interface DeauthorizeDataShareMessage {
  DataShareArn?: string;
  ConsumerIdentifier?: string;
}
export interface DeleteAuthenticationProfileMessage {
  AuthenticationProfileName?: string;
}
export interface DeleteAuthenticationProfileResult {
  AuthenticationProfileName?: string;
}
export interface DeleteClusterMessage {
  ClusterIdentifier?: string;
  SkipFinalClusterSnapshot?: boolean;
  FinalClusterSnapshotIdentifier?: string;
  FinalClusterSnapshotRetentionPeriod?: number;
}
export interface DeleteClusterResult {
  Cluster?: Cluster;
}
export interface DeleteClusterParameterGroupMessage {
  ParameterGroupName?: string;
}
export interface DeleteClusterParameterGroupResponse {}
export interface DeleteClusterSecurityGroupMessage {
  ClusterSecurityGroupName?: string;
}
export interface DeleteClusterSecurityGroupResponse {}
export interface DeleteClusterSnapshotResult {
  Snapshot?: Snapshot;
}
export interface DeleteClusterSubnetGroupMessage {
  ClusterSubnetGroupName?: string;
}
export interface DeleteClusterSubnetGroupResponse {}
export interface DeleteCustomDomainAssociationMessage {
  ClusterIdentifier?: string;
  CustomDomainName?: string;
}
export interface DeleteCustomDomainAssociationResponse {}
export interface DeleteEndpointAccessMessage {
  EndpointName?: string;
}
export interface DeleteEventSubscriptionMessage {
  SubscriptionName?: string;
}
export interface DeleteEventSubscriptionResponse {}
export interface DeleteHsmClientCertificateMessage {
  HsmClientCertificateIdentifier?: string;
}
export interface DeleteHsmClientCertificateResponse {}
export interface DeleteHsmConfigurationMessage {
  HsmConfigurationIdentifier?: string;
}
export interface DeleteHsmConfigurationResponse {}
export interface DeleteIntegrationMessage {
  IntegrationArn?: string;
}
export interface DeleteQev2IdcApplicationMessage {
  Qev2IdcApplicationArn?: string;
}
export interface DeleteQev2IdcApplicationResponse {}
export interface DeleteRedshiftIdcApplicationMessage {
  RedshiftIdcApplicationArn?: string;
}
export interface DeleteRedshiftIdcApplicationResponse {}
export interface DeleteResourcePolicyMessage {
  ResourceArn?: string;
}
export interface DeleteResourcePolicyResponse {}
export interface DeleteScheduledActionMessage {
  ScheduledActionName?: string;
}
export interface DeleteScheduledActionResponse {}
export interface DeleteSnapshotCopyGrantMessage {
  SnapshotCopyGrantName?: string;
}
export interface DeleteSnapshotCopyGrantResponse {}
export interface DeleteSnapshotScheduleMessage {
  ScheduleIdentifier?: string;
}
export interface DeleteSnapshotScheduleResponse {}
export interface DeleteTagsMessage {
  ResourceName?: string;
  TagKeys?: string[];
}
export interface DeleteTagsResponse {}
export interface DeleteUsageLimitMessage {
  UsageLimitId?: string;
}
export interface DeleteUsageLimitResponse {}
export interface ServerlessIdentifier {
  NamespaceIdentifier?: string;
  WorkgroupIdentifier?: string;
}
export interface ProvisionedIdentifier {
  ClusterIdentifier?: string;
}
export type NamespaceIdentifierUnion =
  | { ServerlessIdentifier: ServerlessIdentifier; ProvisionedIdentifier?: never }
  | { ServerlessIdentifier?: never; ProvisionedIdentifier: ProvisionedIdentifier };
export type ConsumerIdentifierList = string[];
export interface DeregisterNamespaceInputMessage {
  NamespaceIdentifier?: NamespaceIdentifierUnion;
  ConsumerIdentifiers?: string[];
}
export type NamespaceRegistrationStatus = "Registering" | "Deregistering" | (string & {});
export interface DeregisterNamespaceOutputMessage {
  Status?: NamespaceRegistrationStatus;
}
export type AttributeNameList = string[];
export interface DescribeAccountAttributesMessage {
  AttributeNames?: string[];
}
export interface AttributeValueTarget {
  AttributeValue?: string;
}
export type AttributeValueList = AttributeValueTarget[];
export interface AccountAttribute {
  AttributeName?: string;
  AttributeValues?: AttributeValueTarget[];
}
export type AttributeList = AccountAttribute[];
export interface AccountAttributeList {
  AccountAttributes?: AccountAttribute[];
}
export interface DescribeAuthenticationProfilesMessage {
  AuthenticationProfileName?: string;
}
export interface AuthenticationProfile {
  AuthenticationProfileName?: string;
  AuthenticationProfileContent?: string;
}
export type AuthenticationProfileList = AuthenticationProfile[];
export interface DescribeAuthenticationProfilesResult {
  AuthenticationProfiles?: AuthenticationProfile[];
}
export interface DescribeClusterDbRevisionsMessage {
  ClusterIdentifier?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface RevisionTarget {
  DatabaseRevision?: string;
  Description?: string;
  DatabaseRevisionReleaseDate?: Date;
}
export type RevisionTargetsList = RevisionTarget[];
export interface ClusterDbRevision {
  ClusterIdentifier?: string;
  CurrentDatabaseRevision?: string;
  DatabaseRevisionReleaseDate?: Date;
  RevisionTargets?: RevisionTarget[];
}
export type ClusterDbRevisionsList = ClusterDbRevision[];
export interface ClusterDbRevisionsMessage {
  Marker?: string;
  ClusterDbRevisions?: ClusterDbRevision[];
}
export type TagValueList = string[];
export interface DescribeClusterParameterGroupsMessage {
  ParameterGroupName?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: string[];
  TagValues?: string[];
}
export type ParameterGroupList = ClusterParameterGroup[];
export interface ClusterParameterGroupsMessage {
  Marker?: string;
  ParameterGroups?: ClusterParameterGroup[];
}
export interface DescribeClusterParametersMessage {
  ParameterGroupName?: string;
  Source?: string;
  MaxRecords?: number;
  Marker?: string;
}
export type ParameterApplyType = "static" | "dynamic" | (string & {});
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
export type ParametersList = Parameter[];
export interface ClusterParameterGroupDetails {
  Parameters?: Parameter[];
  Marker?: string;
}
export interface DescribeClustersMessage {
  ClusterIdentifier?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: string[];
  TagValues?: string[];
}
export type ClusterList = Cluster[];
export interface ClustersMessage {
  Marker?: string;
  Clusters?: Cluster[];
}
export interface DescribeClusterSecurityGroupsMessage {
  ClusterSecurityGroupName?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: string[];
  TagValues?: string[];
}
export type ClusterSecurityGroups = ClusterSecurityGroup[];
export interface ClusterSecurityGroupMessage {
  Marker?: string;
  ClusterSecurityGroups?: ClusterSecurityGroup[];
}
export type SnapshotAttributeToSortBy =
  | "SOURCE_TYPE"
  | "TOTAL_SIZE"
  | "CREATE_TIME"
  | (string & {});
export type SortByOrder = "ASC" | "DESC" | (string & {});
export interface SnapshotSortingEntity {
  Attribute?: SnapshotAttributeToSortBy;
  SortOrder?: SortByOrder;
}
export type SnapshotSortingEntityList = SnapshotSortingEntity[];
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
export type SnapshotList = Snapshot[];
export interface SnapshotMessage {
  Marker?: string;
  Snapshots?: Snapshot[];
}
export interface DescribeClusterSubnetGroupsMessage {
  ClusterSubnetGroupName?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: string[];
  TagValues?: string[];
}
export type ClusterSubnetGroups = ClusterSubnetGroup[];
export interface ClusterSubnetGroupMessage {
  Marker?: string;
  ClusterSubnetGroups?: ClusterSubnetGroup[];
}
export interface DescribeClusterTracksMessage {
  MaintenanceTrackName?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface SupportedOperation {
  OperationName?: string;
}
export type SupportedOperationList = SupportedOperation[];
export interface UpdateTarget {
  MaintenanceTrackName?: string;
  DatabaseVersion?: string;
  SupportedOperations?: SupportedOperation[];
}
export type EligibleTracksToUpdateList = UpdateTarget[];
export interface MaintenanceTrack {
  MaintenanceTrackName?: string;
  DatabaseVersion?: string;
  UpdateTargets?: UpdateTarget[];
}
export type TrackList = MaintenanceTrack[];
export interface TrackListMessage {
  MaintenanceTracks?: MaintenanceTrack[];
  Marker?: string;
}
export interface DescribeClusterVersionsMessage {
  ClusterVersion?: string;
  ClusterParameterGroupFamily?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface ClusterVersion {
  ClusterVersion?: string;
  ClusterParameterGroupFamily?: string;
  Description?: string;
}
export type ClusterVersionList = ClusterVersion[];
export interface ClusterVersionsMessage {
  Marker?: string;
  ClusterVersions?: ClusterVersion[];
}
export interface DescribeCustomDomainAssociationsMessage {
  CustomDomainName?: string;
  CustomDomainCertificateArn?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface CertificateAssociation {
  CustomDomainName?: string;
  ClusterIdentifier?: string;
}
export type CertificateAssociationList = CertificateAssociation[];
export interface Association {
  CustomDomainCertificateArn?: string;
  CustomDomainCertificateExpiryDate?: Date;
  CertificateAssociations?: CertificateAssociation[];
}
export type AssociationList = Association[];
export interface CustomDomainAssociationsMessage {
  Marker?: string;
  Associations?: Association[];
}
export interface DescribeDataSharesMessage {
  DataShareArn?: string;
  MaxRecords?: number;
  Marker?: string;
}
export type DataShareList = DataShare[];
export interface DescribeDataSharesResult {
  DataShares?: DataShare[];
  Marker?: string;
}
export type DataShareStatusForConsumer = "ACTIVE" | "AVAILABLE" | (string & {});
export interface DescribeDataSharesForConsumerMessage {
  ConsumerArn?: string;
  Status?: DataShareStatusForConsumer;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeDataSharesForConsumerResult {
  DataShares?: DataShare[];
  Marker?: string;
}
export type DataShareStatusForProducer =
  | "ACTIVE"
  | "AUTHORIZED"
  | "PENDING_AUTHORIZATION"
  | "DEAUTHORIZED"
  | "REJECTED"
  | (string & {});
export interface DescribeDataSharesForProducerMessage {
  ProducerArn?: string;
  Status?: DataShareStatusForProducer;
  MaxRecords?: number;
  Marker?: string;
}
export interface DescribeDataSharesForProducerResult {
  DataShares?: DataShare[];
  Marker?: string;
}
export interface DescribeDefaultClusterParametersMessage {
  ParameterGroupFamily?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface DefaultClusterParameters {
  ParameterGroupFamily?: string;
  Marker?: string;
  Parameters?: Parameter[];
}
export interface DescribeDefaultClusterParametersResult {
  DefaultClusterParameters?: DefaultClusterParameters;
}
export interface DescribeEndpointAccessMessage {
  ClusterIdentifier?: string;
  ResourceOwner?: string;
  EndpointName?: string;
  VpcId?: string;
  MaxRecords?: number;
  Marker?: string;
}
export type EndpointAccesses = EndpointAccess[];
export interface EndpointAccessList {
  EndpointAccessList?: EndpointAccess[];
  Marker?: string;
}
export interface DescribeEndpointAuthorizationMessage {
  ClusterIdentifier?: string;
  Account?: string;
  Grantee?: boolean;
  MaxRecords?: number;
  Marker?: string;
}
export type EndpointAuthorizations = EndpointAuthorization[];
export interface EndpointAuthorizationList {
  EndpointAuthorizationList?: EndpointAuthorization[];
  Marker?: string;
}
export interface DescribeEventCategoriesMessage {
  SourceType?: string;
}
export interface EventInfoMap {
  EventId?: string;
  EventCategories?: string[];
  EventDescription?: string;
  Severity?: string;
}
export type EventInfoMapList = EventInfoMap[];
export interface EventCategoriesMap {
  SourceType?: string;
  Events?: EventInfoMap[];
}
export type EventCategoriesMapList = EventCategoriesMap[];
export interface EventCategoriesMessage {
  EventCategoriesMapList?: EventCategoriesMap[];
}
export type SourceType =
  | "cluster"
  | "cluster-parameter-group"
  | "cluster-security-group"
  | "cluster-snapshot"
  | "scheduled-action"
  | (string & {});
export interface DescribeEventsMessage {
  SourceIdentifier?: string;
  SourceType?: SourceType;
  StartTime?: Date;
  EndTime?: Date;
  Duration?: number;
  MaxRecords?: number;
  Marker?: string;
}
export interface Event {
  SourceIdentifier?: string;
  SourceType?: SourceType;
  Message?: string;
  EventCategories?: string[];
  Severity?: string;
  Date?: Date;
  EventId?: string;
}
export type EventList = Event[];
export interface EventsMessage {
  Marker?: string;
  Events?: Event[];
}
export interface DescribeEventSubscriptionsMessage {
  SubscriptionName?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: string[];
  TagValues?: string[];
}
export type EventSubscriptionsList = EventSubscription[];
export interface EventSubscriptionsMessage {
  Marker?: string;
  EventSubscriptionsList?: EventSubscription[];
}
export interface DescribeHsmClientCertificatesMessage {
  HsmClientCertificateIdentifier?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: string[];
  TagValues?: string[];
}
export type HsmClientCertificateList = HsmClientCertificate[];
export interface HsmClientCertificateMessage {
  Marker?: string;
  HsmClientCertificates?: HsmClientCertificate[];
}
export interface DescribeHsmConfigurationsMessage {
  HsmConfigurationIdentifier?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: string[];
  TagValues?: string[];
}
export type HsmConfigurationList = HsmConfiguration[];
export interface HsmConfigurationMessage {
  Marker?: string;
  HsmConfigurations?: HsmConfiguration[];
}
export type InboundIntegrationArn = string;
export interface DescribeInboundIntegrationsMessage {
  IntegrationArn?: string;
  TargetArn?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface InboundIntegration {
  IntegrationArn?: string;
  SourceArn?: string;
  TargetArn?: string;
  Status?: ZeroETLIntegrationStatus;
  Errors?: IntegrationError[];
  CreateTime?: Date;
}
export type InboundIntegrationList = InboundIntegration[];
export interface InboundIntegrationsMessage {
  Marker?: string;
  InboundIntegrations?: (InboundIntegration & {
    Errors: (IntegrationError & { ErrorCode: string })[];
  })[];
}
export type DescribeIntegrationsFilterName =
  | "integration-arn"
  | "source-arn"
  | "source-types"
  | "status"
  | (string & {});
export type DescribeIntegrationsFilterValueList = string[];
export interface DescribeIntegrationsFilter {
  Name?: DescribeIntegrationsFilterName;
  Values?: string[];
}
export type DescribeIntegrationsFilterList = DescribeIntegrationsFilter[];
export interface DescribeIntegrationsMessage {
  IntegrationArn?: string;
  MaxRecords?: number;
  Marker?: string;
  Filters?: DescribeIntegrationsFilter[];
}
export type IntegrationList = Integration[];
export interface IntegrationsMessage {
  Marker?: string;
  Integrations?: (Integration & { Errors: (IntegrationError & { ErrorCode: string })[] })[];
}
export interface DescribeLoggingStatusMessage {
  ClusterIdentifier?: string;
}
export type S3KeyPrefixValue = string;
export type LogDestinationType = "s3" | "cloudwatch" | "s3table" | (string & {});
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
export type ActionType =
  | "restore-cluster"
  | "recommend-node-config"
  | "resize-cluster"
  | (string & {});
export type NodeConfigurationOptionsFilterName =
  | "NodeType"
  | "NumberOfNodes"
  | "EstimatedDiskUtilizationPercent"
  | "Mode"
  | (string & {});
export type OperatorType = "eq" | "lt" | "gt" | "le" | "ge" | "in" | "between" | (string & {});
export interface NodeConfigurationOptionsFilter {
  Name?: NodeConfigurationOptionsFilterName;
  Operator?: OperatorType;
  Values?: string[];
}
export type NodeConfigurationOptionsFilterList = NodeConfigurationOptionsFilter[];
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
export type Mode = "standard" | "high-performance" | (string & {});
export interface NodeConfigurationOption {
  NodeType?: string;
  NumberOfNodes?: number;
  EstimatedDiskUtilizationPercent?: number;
  Mode?: Mode;
}
export type NodeConfigurationOptionList = NodeConfigurationOption[];
export interface NodeConfigurationOptionsMessage {
  NodeConfigurationOptionList?: NodeConfigurationOption[];
  Marker?: string;
}
export interface DescribeOrderableClusterOptionsMessage {
  ClusterVersion?: string;
  NodeType?: string;
  MaxRecords?: number;
  Marker?: string;
}
export type AvailabilityZoneList = AvailabilityZone[];
export interface OrderableClusterOption {
  ClusterVersion?: string;
  ClusterType?: string;
  NodeType?: string;
  AvailabilityZones?: AvailabilityZone[];
}
export type OrderableClusterOptionsList = OrderableClusterOption[];
export interface OrderableClusterOptionsMessage {
  OrderableClusterOptions?: OrderableClusterOption[];
  Marker?: string;
}
export interface DescribePartnersInputMessage {
  AccountId?: string;
  ClusterIdentifier?: string;
  DatabaseName?: string;
  PartnerName?: string;
}
export type PartnerIntegrationStatus =
  | "Active"
  | "Inactive"
  | "RuntimeFailure"
  | "ConnectionFailure"
  | (string & {});
export type PartnerIntegrationStatusMessage = string;
export interface PartnerIntegrationInfo {
  DatabaseName?: string;
  PartnerName?: string;
  Status?: PartnerIntegrationStatus;
  StatusMessage?: string;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
export type PartnerIntegrationInfoList = PartnerIntegrationInfo[];
export interface DescribePartnersOutputMessage {
  PartnerIntegrationInfoList?: PartnerIntegrationInfo[];
}
export interface DescribeQev2IdcApplicationsMessage {
  Qev2IdcApplicationArn?: string;
  MaxRecords?: number;
  Marker?: string;
}
export type Qev2IdcApplicationList = Qev2IdcApplication[];
export interface DescribeQev2IdcApplicationsResult {
  Qev2IdcApplications?: Qev2IdcApplication[];
  Marker?: string;
}
export interface DescribeRedshiftIdcApplicationsMessage {
  RedshiftIdcApplicationArn?: string;
  MaxRecords?: number;
  Marker?: string;
}
export type RedshiftIdcApplicationList = RedshiftIdcApplication[];
export interface DescribeRedshiftIdcApplicationsResult {
  RedshiftIdcApplications?: RedshiftIdcApplication[];
  Marker?: string;
}
export interface DescribeReservedNodeExchangeStatusInputMessage {
  ReservedNodeId?: string;
  ReservedNodeExchangeRequestId?: string;
  MaxRecords?: number;
  Marker?: string;
}
export type ReservedNodeExchangeStatusList = ReservedNodeExchangeStatus[];
export interface DescribeReservedNodeExchangeStatusOutputMessage {
  ReservedNodeExchangeStatusDetails?: ReservedNodeExchangeStatus[];
  Marker?: string;
}
export interface DescribeReservedNodeOfferingsMessage {
  ReservedNodeOfferingId?: string;
  MaxRecords?: number;
  Marker?: string;
}
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
export type ReservedNodeOfferingList = ReservedNodeOffering[];
export interface ReservedNodeOfferingsMessage {
  Marker?: string;
  ReservedNodeOfferings?: ReservedNodeOffering[];
}
export interface DescribeReservedNodesMessage {
  ReservedNodeId?: string;
  MaxRecords?: number;
  Marker?: string;
}
export type ReservedNodeList = ReservedNode[];
export interface ReservedNodesMessage {
  Marker?: string;
  ReservedNodes?: ReservedNode[];
}
export interface DescribeResizeMessage {
  ClusterIdentifier?: string;
}
export type ScheduledActionTypeValues =
  | "ResizeCluster"
  | "PauseCluster"
  | "ResumeCluster"
  | (string & {});
export type ScheduledActionFilterName = "cluster-identifier" | "iam-role" | (string & {});
export interface ScheduledActionFilter {
  Name?: ScheduledActionFilterName;
  Values?: string[];
}
export type ScheduledActionFilterList = ScheduledActionFilter[];
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
export type ScheduledActionList = ScheduledAction[];
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
export interface DescribeSnapshotCopyGrantsMessage {
  SnapshotCopyGrantName?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: string[];
  TagValues?: string[];
}
export type SnapshotCopyGrantList = SnapshotCopyGrant[];
export interface SnapshotCopyGrantMessage {
  Marker?: string;
  SnapshotCopyGrants?: SnapshotCopyGrant[];
}
export interface DescribeSnapshotSchedulesMessage {
  ClusterIdentifier?: string;
  ScheduleIdentifier?: string;
  TagKeys?: string[];
  TagValues?: string[];
  Marker?: string;
  MaxRecords?: number;
}
export type SnapshotScheduleList = SnapshotSchedule[];
export interface DescribeSnapshotSchedulesOutputMessage {
  SnapshotSchedules?: SnapshotSchedule[];
  Marker?: string;
}
export interface DescribeStorageRequest {}
export interface CustomerStorageMessage {
  TotalBackupSizeInMegaBytes?: number;
  TotalProvisionedStorageInMegaBytes?: number;
}
export interface DescribeTableRestoreStatusMessage {
  ClusterIdentifier?: string;
  TableRestoreRequestId?: string;
  MaxRecords?: number;
  Marker?: string;
}
export type TableRestoreStatusType =
  | "PENDING"
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "FAILED"
  | "CANCELED"
  | (string & {});
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
export type TableRestoreStatusList = TableRestoreStatus[];
export interface TableRestoreStatusMessage {
  TableRestoreStatusDetails?: TableRestoreStatus[];
  Marker?: string;
}
export interface DescribeTagsMessage {
  ResourceName?: string;
  ResourceType?: string;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: string[];
  TagValues?: string[];
}
export interface TaggedResource {
  Tag?: Tag;
  ResourceName?: string;
  ResourceType?: string;
}
export type TaggedResourceList = TaggedResource[];
export interface TaggedResourceListMessage {
  TaggedResources?: TaggedResource[];
  Marker?: string;
}
export interface DescribeUsageLimitsMessage {
  UsageLimitId?: string;
  ClusterIdentifier?: string;
  FeatureType?: UsageLimitFeatureType;
  MaxRecords?: number;
  Marker?: string;
  TagKeys?: string[];
  TagValues?: string[];
}
export type UsageLimits = UsageLimit[];
export interface UsageLimitList {
  UsageLimits?: UsageLimit[];
  Marker?: string;
}
export interface DisableLoggingMessage {
  ClusterIdentifier?: string;
  LogDestinationType?: LogDestinationType;
  LogExports?: string[];
}
export interface DisableSnapshotCopyMessage {
  ClusterIdentifier?: string;
}
export interface DisableSnapshotCopyResult {
  Cluster?: Cluster;
}
export interface DisassociateDataShareConsumerMessage {
  DataShareArn?: string;
  DisassociateEntireAccount?: boolean;
  ConsumerArn?: string;
  ConsumerRegion?: string;
}
export interface EnableLoggingMessage {
  ClusterIdentifier?: string;
  BucketName?: string;
  S3KeyPrefix?: string;
  LogDestinationType?: LogDestinationType;
  LogExports?: string[];
  S3TableKmsKeyId?: string;
  S3TableGranularity?: string;
}
export interface EnableSnapshotCopyMessage {
  ClusterIdentifier?: string;
  DestinationRegion?: string;
  RetentionPeriod?: number;
  SnapshotCopyGrantName?: string;
  ManualSnapshotRetentionPeriod?: number;
}
export interface EnableSnapshotCopyResult {
  Cluster?: Cluster;
}
export interface FailoverPrimaryComputeInputMessage {
  ClusterIdentifier?: string;
}
export interface FailoverPrimaryComputeResult {
  Cluster?: Cluster;
}
export type DbGroupList = string[];
export interface GetClusterCredentialsMessage {
  DbUser?: string;
  DbName?: string;
  ClusterIdentifier?: string;
  DurationSeconds?: number;
  AutoCreate?: boolean;
  DbGroups?: string[];
  CustomDomainName?: string;
}
export interface ClusterCredentials {
  DbUser?: string;
  DbPassword?: string | redacted.Redacted<string>;
  Expiration?: Date;
}
export interface GetClusterCredentialsWithIAMMessage {
  DbName?: string;
  ClusterIdentifier?: string;
  DurationSeconds?: number;
  CustomDomainName?: string;
}
export interface ClusterExtendedCredentials {
  DbUser?: string;
  DbPassword?: string | redacted.Redacted<string>;
  Expiration?: Date;
  NextRefreshTime?: Date;
}
export type ClusterIdentifierList = string[];
export interface GetIdentityCenterAuthTokenRequest {
  ClusterIds?: string[];
}
export interface GetIdentityCenterAuthTokenResponse {
  Token?: string | redacted.Redacted<string>;
  ExpirationTime?: Date;
}
export type ReservedNodeExchangeActionType = "restore-cluster" | "resize-cluster" | (string & {});
export interface GetReservedNodeExchangeConfigurationOptionsInputMessage {
  ActionType?: ReservedNodeExchangeActionType;
  ClusterIdentifier?: string;
  SnapshotIdentifier?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface ReservedNodeConfigurationOption {
  SourceReservedNode?: ReservedNode;
  TargetReservedNodeCount?: number;
  TargetReservedNodeOffering?: ReservedNodeOffering;
}
export type ReservedNodeConfigurationOptionList = ReservedNodeConfigurationOption[];
export interface GetReservedNodeExchangeConfigurationOptionsOutputMessage {
  Marker?: string;
  ReservedNodeConfigurationOptionList?: ReservedNodeConfigurationOption[];
}
export interface GetReservedNodeExchangeOfferingsInputMessage {
  ReservedNodeId?: string;
  MaxRecords?: number;
  Marker?: string;
}
export interface GetReservedNodeExchangeOfferingsOutputMessage {
  Marker?: string;
  ReservedNodeOfferings?: ReservedNodeOffering[];
}
export interface GetResourcePolicyMessage {
  ResourceArn?: string;
}
export interface ResourcePolicy {
  ResourceArn?: string;
  Policy?: string;
}
export interface GetResourcePolicyResult {
  ResourcePolicy?: ResourcePolicy;
}
export interface ListRecommendationsMessage {
  ClusterIdentifier?: string;
  NamespaceArn?: string;
  MaxRecords?: number;
  Marker?: string;
}
export type ImpactRankingType = "HIGH" | "MEDIUM" | "LOW" | (string & {});
export type RecommendedActionType = "SQL" | "CLI" | (string & {});
export interface RecommendedAction {
  Text?: string;
  Database?: string;
  Command?: string;
  Type?: RecommendedActionType;
}
export type RecommendedActionList = RecommendedAction[];
export interface ReferenceLink {
  Text?: string;
  Link?: string;
}
export type ReferenceLinkList = ReferenceLink[];
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
export type RecommendationList = Recommendation[];
export interface ListRecommendationsResult {
  Recommendations?: Recommendation[];
  Marker?: string;
}
export interface ModifyAquaInputMessage {
  ClusterIdentifier?: string;
  AquaConfigurationStatus?: AquaConfigurationStatus;
}
export interface ModifyAquaOutputMessage {
  AquaConfiguration?: AquaConfiguration;
}
export interface ModifyAuthenticationProfileMessage {
  AuthenticationProfileName?: string;
  AuthenticationProfileContent?: string;
}
export interface ModifyAuthenticationProfileResult {
  AuthenticationProfileName?: string;
  AuthenticationProfileContent?: string;
}
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
export interface ModifyClusterResult {
  Cluster?: Cluster;
}
export interface ModifyClusterDbRevisionMessage {
  ClusterIdentifier?: string;
  RevisionTarget?: string;
}
export interface ModifyClusterDbRevisionResult {
  Cluster?: Cluster;
}
export interface ModifyClusterIamRolesMessage {
  ClusterIdentifier?: string;
  AddIamRoles?: string[];
  RemoveIamRoles?: string[];
  DefaultIamRoleArn?: string;
}
export interface ModifyClusterIamRolesResult {
  Cluster?: Cluster;
}
export interface ModifyClusterMaintenanceMessage {
  ClusterIdentifier?: string;
  DeferMaintenance?: boolean;
  DeferMaintenanceIdentifier?: string;
  DeferMaintenanceStartTime?: Date;
  DeferMaintenanceEndTime?: Date;
  DeferMaintenanceDuration?: number;
}
export interface ModifyClusterMaintenanceResult {
  Cluster?: Cluster;
}
export interface ModifyClusterParameterGroupMessage {
  ParameterGroupName?: string;
  Parameters?: Parameter[];
}
export interface ClusterParameterGroupNameMessage {
  ParameterGroupName?: string;
  ParameterGroupStatus?: string;
}
export interface ModifyClusterSnapshotMessage {
  SnapshotIdentifier?: string;
  ManualSnapshotRetentionPeriod?: number;
  Force?: boolean;
}
export interface ModifyClusterSnapshotResult {
  Snapshot?: Snapshot;
}
export interface ModifyClusterSnapshotScheduleMessage {
  ClusterIdentifier?: string;
  ScheduleIdentifier?: string;
  DisassociateSchedule?: boolean;
}
export interface ModifyClusterSnapshotScheduleResponse {}
export interface ModifyClusterSubnetGroupMessage {
  ClusterSubnetGroupName?: string;
  Description?: string;
  SubnetIds?: string[];
}
export interface ModifyClusterSubnetGroupResult {
  ClusterSubnetGroup?: ClusterSubnetGroup;
}
export interface ModifyCustomDomainAssociationMessage {
  CustomDomainName?: string;
  CustomDomainCertificateArn?: string;
  ClusterIdentifier?: string;
}
export interface ModifyCustomDomainAssociationResult {
  CustomDomainName?: string;
  CustomDomainCertificateArn?: string;
  ClusterIdentifier?: string;
  CustomDomainCertExpiryTime?: string;
}
export interface ModifyEndpointAccessMessage {
  EndpointName?: string;
  VpcSecurityGroupIds?: string[];
}
export interface ModifyEventSubscriptionMessage {
  SubscriptionName?: string;
  SnsTopicArn?: string;
  SourceType?: string;
  SourceIds?: string[];
  EventCategories?: string[];
  Severity?: string;
  Enabled?: boolean;
}
export interface ModifyEventSubscriptionResult {
  EventSubscription?: EventSubscription;
}
export interface ModifyIntegrationMessage {
  IntegrationArn?: string;
  Description?: string;
  IntegrationName?: string;
}
export type LakehouseRegistration = "Register" | "Deregister" | (string & {});
export type LakehouseIdcRegistration = "Associate" | "Disassociate" | (string & {});
export interface ModifyLakehouseConfigurationMessage {
  ClusterIdentifier?: string;
  LakehouseRegistration?: LakehouseRegistration;
  CatalogName?: string;
  LakehouseIdcRegistration?: LakehouseIdcRegistration;
  LakehouseIdcApplicationArn?: string;
  DryRun?: boolean;
}
export interface LakehouseConfiguration {
  ClusterIdentifier?: string;
  LakehouseIdcApplicationArn?: string;
  LakehouseRegistrationStatus?: string;
  CatalogArn?: string;
}
export interface ModifyQev2IdcApplicationMessage {
  Qev2IdcApplicationArn?: string;
  IdcDisplayName?: string;
}
export interface ModifyQev2IdcApplicationResult {
  Qev2IdcApplication?: Qev2IdcApplication;
}
export interface ModifyRedshiftIdcApplicationMessage {
  RedshiftIdcApplicationArn?: string;
  IdentityNamespace?: string;
  IamRoleArn?: string;
  IdcDisplayName?: string;
  AuthorizedTokenIssuerList?: AuthorizedTokenIssuer[];
  ServiceIntegrations?: ServiceIntegrationsUnion[];
}
export interface ModifyRedshiftIdcApplicationResult {
  RedshiftIdcApplication?: RedshiftIdcApplication;
}
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
export interface ModifySnapshotCopyRetentionPeriodMessage {
  ClusterIdentifier?: string;
  RetentionPeriod?: number;
  Manual?: boolean;
}
export interface ModifySnapshotCopyRetentionPeriodResult {
  Cluster?: Cluster;
}
export interface ModifySnapshotScheduleMessage {
  ScheduleIdentifier?: string;
  ScheduleDefinitions?: string[];
}
export interface ModifyUsageLimitMessage {
  UsageLimitId?: string;
  Amount?: number;
  BreachAction?: UsageLimitBreachAction;
}
export interface PauseClusterResult {
  Cluster?: Cluster;
}
export interface PurchaseReservedNodeOfferingMessage {
  ReservedNodeOfferingId?: string;
  NodeCount?: number;
}
export interface PurchaseReservedNodeOfferingResult {
  ReservedNode?: ReservedNode;
}
export interface PutResourcePolicyMessage {
  ResourceArn?: string;
  Policy?: string;
}
export interface PutResourcePolicyResult {
  ResourcePolicy?: ResourcePolicy;
}
export interface RebootClusterMessage {
  ClusterIdentifier?: string;
}
export interface RebootClusterResult {
  Cluster?: Cluster;
}
export interface RegisterNamespaceInputMessage {
  NamespaceIdentifier?: NamespaceIdentifierUnion;
  ConsumerIdentifiers?: string[];
}
export interface RegisterNamespaceOutputMessage {
  Status?: NamespaceRegistrationStatus;
}
export interface RejectDataShareMessage {
  DataShareArn?: string;
}
export interface ResetClusterParameterGroupMessage {
  ParameterGroupName?: string;
  ResetAllParameters?: boolean;
  Parameters?: Parameter[];
}
export interface ResizeClusterResult {
  Cluster?: Cluster;
}
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
export interface RestoreFromClusterSnapshotResult {
  Cluster?: Cluster;
}
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
export interface RestoreTableFromClusterSnapshotResult {
  TableRestoreStatus?: TableRestoreStatus;
}
export interface ResumeClusterResult {
  Cluster?: Cluster;
}
export interface RevokeClusterSecurityGroupIngressMessage {
  ClusterSecurityGroupName?: string;
  CIDRIP?: string;
  EC2SecurityGroupName?: string;
  EC2SecurityGroupOwnerId?: string;
}
export interface RevokeClusterSecurityGroupIngressResult {
  ClusterSecurityGroup?: ClusterSecurityGroup;
}
export interface RevokeEndpointAccessMessage {
  ClusterIdentifier?: string;
  Account?: string;
  VpcIds?: string[];
  Force?: boolean;
}
export interface RevokeSnapshotAccessMessage {
  SnapshotIdentifier?: string;
  SnapshotArn?: string;
  SnapshotClusterIdentifier?: string;
  AccountWithRestoreAccess?: string;
}
export interface RevokeSnapshotAccessResult {
  Snapshot?: Snapshot;
}
export interface RotateEncryptionKeyMessage {
  ClusterIdentifier?: string;
}
export interface RotateEncryptionKeyResult {
  Cluster?: Cluster;
}
export interface UpdatePartnerStatusInputMessage {
  AccountId?: string;
  ClusterIdentifier?: string;
  DatabaseName?: string;
  PartnerName?: string;
  Status?: PartnerIntegrationStatus;
  StatusMessage?: string;
}
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
  input: __S(0) as any as S.Schema<AcceptReservedNodeExchangeInputMessage>,
  output: __S(4) as any as S.Schema<AcceptReservedNodeExchangeOutputMessage>,
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
  input: __S(5) as any as S.Schema<PartnerIntegrationInputMessage>,
  output: __S(6) as any as S.Schema<PartnerIntegrationOutputMessage>,
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
  input: __S(7) as any as S.Schema<AssociateDataShareConsumerMessage>,
  output: __S(10) as any as S.Schema<DataShare>,
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
  input: __S(11) as any as S.Schema<AuthorizeClusterSecurityGroupIngressMessage>,
  output: __S(19) as any as S.Schema<AuthorizeClusterSecurityGroupIngressResult>,
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
  input: __S(20) as any as S.Schema<AuthorizeDataShareMessage>,
  output: __S(10) as any as S.Schema<DataShare>,
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
  input: __S(22) as any as S.Schema<AuthorizeEndpointAccessMessage>,
  output: __S(23) as any as S.Schema<EndpointAuthorization>,
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
  input: __S(24) as any as S.Schema<AuthorizeSnapshotAccessMessage>,
  output: __S(29) as any as S.Schema<AuthorizeSnapshotAccessResult>,
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
  input: __S(32) as any as S.Schema<BatchDeleteClusterSnapshotsRequest>,
  output: __S(36) as any as S.Schema<BatchDeleteClusterSnapshotsResult>,
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
  input: __S(37) as any as S.Schema<BatchModifyClusterSnapshotsMessage>,
  output: __S(39) as any as S.Schema<BatchModifyClusterSnapshotsOutputMessage>,
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
  input: __S(40) as any as S.Schema<CancelResizeMessage>,
  output: __S(44) as any as S.Schema<ResizeProgressMessage>,
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
  input: __S(45) as any as S.Schema<CopyClusterSnapshotMessage>,
  output: __S(46) as any as S.Schema<CopyClusterSnapshotResult>,
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
  input: __S(47) as any as S.Schema<CreateAuthenticationProfileMessage>,
  output: __S(48) as any as S.Schema<CreateAuthenticationProfileResult>,
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
  input: __S(52) as any as S.Schema<CreateClusterMessage>,
  output: __S(88) as any as S.Schema<CreateClusterResult>,
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
  input: __S(89) as any as S.Schema<CreateClusterParameterGroupMessage>,
  output: __S(91) as any as S.Schema<CreateClusterParameterGroupResult>,
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
  input: __S(92) as any as S.Schema<CreateClusterSecurityGroupMessage>,
  output: __S(93) as any as S.Schema<CreateClusterSecurityGroupResult>,
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
  input: __S(94) as any as S.Schema<CreateClusterSnapshotMessage>,
  output: __S(95) as any as S.Schema<CreateClusterSnapshotResult>,
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
  input: __S(97) as any as S.Schema<CreateClusterSubnetGroupMessage>,
  output: __S(105) as any as S.Schema<CreateClusterSubnetGroupResult>,
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
  input: __S(106) as any as S.Schema<CreateCustomDomainAssociationMessage>,
  output: __S(107) as any as S.Schema<CreateCustomDomainAssociationResult>,
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
  input: __S(108) as any as S.Schema<CreateEndpointAccessMessage>,
  output: __S(109) as any as S.Schema<EndpointAccess>,
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
  input: __S(112) as any as S.Schema<CreateEventSubscriptionMessage>,
  output: __S(114) as any as S.Schema<CreateEventSubscriptionResult>,
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
  input: __S(115) as any as S.Schema<CreateHsmClientCertificateMessage>,
  output: __S(117) as any as S.Schema<CreateHsmClientCertificateResult>,
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
  input: __S(118) as any as S.Schema<CreateHsmConfigurationMessage>,
  output: __S(120) as any as S.Schema<CreateHsmConfigurationResult>,
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
  input: __S(122) as any as S.Schema<CreateIntegrationMessage>,
  output: __S(125) as any as S.Schema<Integration>,
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
  input: __S(126) as any as S.Schema<CreateQev2IdcApplicationMessage>,
  output: __S(128) as any as S.Schema<CreateQev2IdcApplicationResult>,
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
  input: __S(144) as any as S.Schema<CreateRedshiftIdcApplicationMessage>,
  output: __S(146) as any as S.Schema<CreateRedshiftIdcApplicationResult>,
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
  input: __S(151) as any as S.Schema<CreateScheduledActionMessage>,
  output: __S(153) as any as S.Schema<ScheduledAction>,
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
  input: __S(154) as any as S.Schema<CreateSnapshotCopyGrantMessage>,
  output: __S(156) as any as S.Schema<CreateSnapshotCopyGrantResult>,
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
  input: __S(158) as any as S.Schema<CreateSnapshotScheduleMessage>,
  output: __S(162) as any as S.Schema<SnapshotSchedule>,
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
  input: __S(163) as any as S.Schema<CreateTagsMessage>,
  output: __S(164) as any as S.Schema<CreateTagsResponse>,
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
  input: __S(165) as any as S.Schema<CreateUsageLimitMessage>,
  output: __S(166) as any as S.Schema<UsageLimit>,
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
  input: __S(167) as any as S.Schema<DeauthorizeDataShareMessage>,
  output: __S(10) as any as S.Schema<DataShare>,
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
  input: __S(168) as any as S.Schema<DeleteAuthenticationProfileMessage>,
  output: __S(169) as any as S.Schema<DeleteAuthenticationProfileResult>,
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
  input: __S(170) as any as S.Schema<DeleteClusterMessage>,
  output: __S(171) as any as S.Schema<DeleteClusterResult>,
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
  input: __S(172) as any as S.Schema<DeleteClusterParameterGroupMessage>,
  output: __S(173) as any as S.Schema<DeleteClusterParameterGroupResponse>,
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
  input: __S(174) as any as S.Schema<DeleteClusterSecurityGroupMessage>,
  output: __S(175) as any as S.Schema<DeleteClusterSecurityGroupResponse>,
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
  input: __S(30) as any as S.Schema<DeleteClusterSnapshotMessage>,
  output: __S(176) as any as S.Schema<DeleteClusterSnapshotResult>,
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
  input: __S(177) as any as S.Schema<DeleteClusterSubnetGroupMessage>,
  output: __S(178) as any as S.Schema<DeleteClusterSubnetGroupResponse>,
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
  input: __S(179) as any as S.Schema<DeleteCustomDomainAssociationMessage>,
  output: __S(180) as any as S.Schema<DeleteCustomDomainAssociationResponse>,
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
  input: __S(181) as any as S.Schema<DeleteEndpointAccessMessage>,
  output: __S(109) as any as S.Schema<EndpointAccess>,
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
  input: __S(182) as any as S.Schema<DeleteEventSubscriptionMessage>,
  output: __S(183) as any as S.Schema<DeleteEventSubscriptionResponse>,
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
  input: __S(184) as any as S.Schema<DeleteHsmClientCertificateMessage>,
  output: __S(185) as any as S.Schema<DeleteHsmClientCertificateResponse>,
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
  input: __S(186) as any as S.Schema<DeleteHsmConfigurationMessage>,
  output: __S(187) as any as S.Schema<DeleteHsmConfigurationResponse>,
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
  input: __S(188) as any as S.Schema<DeleteIntegrationMessage>,
  output: __S(125) as any as S.Schema<Integration>,
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
  input: __S(5) as any as S.Schema<PartnerIntegrationInputMessage>,
  output: __S(6) as any as S.Schema<PartnerIntegrationOutputMessage>,
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
  input: __S(189) as any as S.Schema<DeleteQev2IdcApplicationMessage>,
  output: __S(190) as any as S.Schema<DeleteQev2IdcApplicationResponse>,
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
  input: __S(191) as any as S.Schema<DeleteRedshiftIdcApplicationMessage>,
  output: __S(192) as any as S.Schema<DeleteRedshiftIdcApplicationResponse>,
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
  input: __S(193) as any as S.Schema<DeleteResourcePolicyMessage>,
  output: __S(194) as any as S.Schema<DeleteResourcePolicyResponse>,
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
  input: __S(195) as any as S.Schema<DeleteScheduledActionMessage>,
  output: __S(196) as any as S.Schema<DeleteScheduledActionResponse>,
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
  input: __S(197) as any as S.Schema<DeleteSnapshotCopyGrantMessage>,
  output: __S(198) as any as S.Schema<DeleteSnapshotCopyGrantResponse>,
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
  input: __S(199) as any as S.Schema<DeleteSnapshotScheduleMessage>,
  output: __S(200) as any as S.Schema<DeleteSnapshotScheduleResponse>,
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
  input: __S(201) as any as S.Schema<DeleteTagsMessage>,
  output: __S(202) as any as S.Schema<DeleteTagsResponse>,
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
  input: __S(203) as any as S.Schema<DeleteUsageLimitMessage>,
  output: __S(204) as any as S.Schema<DeleteUsageLimitResponse>,
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
  input: __S(209) as any as S.Schema<DeregisterNamespaceInputMessage>,
  output: __S(210) as any as S.Schema<DeregisterNamespaceOutputMessage>,
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
  input: __S(212) as any as S.Schema<DescribeAccountAttributesMessage>,
  output: __S(217) as any as S.Schema<AccountAttributeList>,
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
  input: __S(218) as any as S.Schema<DescribeAuthenticationProfilesMessage>,
  output: __S(221) as any as S.Schema<DescribeAuthenticationProfilesResult>,
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
  input: __S(222) as any as S.Schema<DescribeClusterDbRevisionsMessage>,
  output: __S(227) as any as S.Schema<ClusterDbRevisionsMessage>,
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
  input: __S(229) as any as S.Schema<DescribeClusterParameterGroupsMessage>,
  output: __S(231) as any as S.Schema<ClusterParameterGroupsMessage>,
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
  input: __S(232) as any as S.Schema<DescribeClusterParametersMessage>,
  output: __S(235) as any as S.Schema<ClusterParameterGroupDetails>,
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
  input: __S(236) as any as S.Schema<DescribeClustersMessage>,
  output: __S(238) as any as S.Schema<ClustersMessage>,
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
  input: __S(239) as any as S.Schema<DescribeClusterSecurityGroupsMessage>,
  output: __S(241) as any as S.Schema<ClusterSecurityGroupMessage>,
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
  input: __S(244) as any as S.Schema<DescribeClusterSnapshotsMessage>,
  output: __S(246) as any as S.Schema<SnapshotMessage>,
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
  input: __S(247) as any as S.Schema<DescribeClusterSubnetGroupsMessage>,
  output: __S(249) as any as S.Schema<ClusterSubnetGroupMessage>,
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
  input: __S(250) as any as S.Schema<DescribeClusterTracksMessage>,
  output: __S(257) as any as S.Schema<TrackListMessage>,
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
  input: __S(258) as any as S.Schema<DescribeClusterVersionsMessage>,
  output: __S(261) as any as S.Schema<ClusterVersionsMessage>,
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
  input: __S(262) as any as S.Schema<DescribeCustomDomainAssociationsMessage>,
  output: __S(267) as any as S.Schema<CustomDomainAssociationsMessage>,
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
  input: __S(268) as any as S.Schema<DescribeDataSharesMessage>,
  output: __S(270) as any as S.Schema<DescribeDataSharesResult>,
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
  input: __S(271) as any as S.Schema<DescribeDataSharesForConsumerMessage>,
  output: __S(272) as any as S.Schema<DescribeDataSharesForConsumerResult>,
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
  input: __S(273) as any as S.Schema<DescribeDataSharesForProducerMessage>,
  output: __S(274) as any as S.Schema<DescribeDataSharesForProducerResult>,
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
  input: __S(275) as any as S.Schema<DescribeDefaultClusterParametersMessage>,
  output: __S(277) as any as S.Schema<DescribeDefaultClusterParametersResult>,
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
  input: __S(278) as any as S.Schema<DescribeEndpointAccessMessage>,
  output: __S(280) as any as S.Schema<EndpointAccessList>,
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
  input: __S(281) as any as S.Schema<DescribeEndpointAuthorizationMessage>,
  output: __S(283) as any as S.Schema<EndpointAuthorizationList>,
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
  input: __S(284) as any as S.Schema<DescribeEventCategoriesMessage>,
  output: __S(289) as any as S.Schema<EventCategoriesMessage>,
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
  input: __S(290) as any as S.Schema<DescribeEventsMessage>,
  output: __S(293) as any as S.Schema<EventsMessage>,
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
  input: __S(294) as any as S.Schema<DescribeEventSubscriptionsMessage>,
  output: __S(296) as any as S.Schema<EventSubscriptionsMessage>,
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
  input: __S(297) as any as S.Schema<DescribeHsmClientCertificatesMessage>,
  output: __S(299) as any as S.Schema<HsmClientCertificateMessage>,
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
  input: __S(300) as any as S.Schema<DescribeHsmConfigurationsMessage>,
  output: __S(302) as any as S.Schema<HsmConfigurationMessage>,
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
  input: __S(303) as any as S.Schema<DescribeInboundIntegrationsMessage>,
  output: __S(306) as any as S.Schema<InboundIntegrationsMessage>,
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
  input: __S(310) as any as S.Schema<DescribeIntegrationsMessage>,
  output: __S(312) as any as S.Schema<IntegrationsMessage>,
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
  input: __S(313) as any as S.Schema<DescribeLoggingStatusMessage>,
  output: __S(314) as any as S.Schema<LoggingStatus>,
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
  input: __S(317) as any as S.Schema<DescribeNodeConfigurationOptionsMessage>,
  output: __S(320) as any as S.Schema<NodeConfigurationOptionsMessage>,
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
  input: __S(321) as any as S.Schema<DescribeOrderableClusterOptionsMessage>,
  output: __S(325) as any as S.Schema<OrderableClusterOptionsMessage>,
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
  input: __S(326) as any as S.Schema<DescribePartnersInputMessage>,
  output: __S(329) as any as S.Schema<DescribePartnersOutputMessage>,
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
  input: __S(330) as any as S.Schema<DescribeQev2IdcApplicationsMessage>,
  output: __S(332) as any as S.Schema<DescribeQev2IdcApplicationsResult>,
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
  input: __S(333) as any as S.Schema<DescribeRedshiftIdcApplicationsMessage>,
  output: __S(335) as any as S.Schema<DescribeRedshiftIdcApplicationsResult>,
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
  input: __S(336) as any as S.Schema<DescribeReservedNodeExchangeStatusInputMessage>,
  output: __S(338) as any as S.Schema<DescribeReservedNodeExchangeStatusOutputMessage>,
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
  input: __S(339) as any as S.Schema<DescribeReservedNodeOfferingsMessage>,
  output: __S(342) as any as S.Schema<ReservedNodeOfferingsMessage>,
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
  input: __S(343) as any as S.Schema<DescribeReservedNodesMessage>,
  output: __S(345) as any as S.Schema<ReservedNodesMessage>,
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
  input: __S(346) as any as S.Schema<DescribeResizeMessage>,
  output: __S(44) as any as S.Schema<ResizeProgressMessage>,
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
  input: __S(349) as any as S.Schema<DescribeScheduledActionsMessage>,
  output: __S(351) as any as S.Schema<ScheduledActionsMessage>,
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
  input: __S(352) as any as S.Schema<DescribeSnapshotCopyGrantsMessage>,
  output: __S(354) as any as S.Schema<SnapshotCopyGrantMessage>,
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
  input: __S(355) as any as S.Schema<DescribeSnapshotSchedulesMessage>,
  output: __S(357) as any as S.Schema<DescribeSnapshotSchedulesOutputMessage>,
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
  input: __S(358) as any as S.Schema<DescribeStorageRequest>,
  output: __S(359) as any as S.Schema<CustomerStorageMessage>,
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
  input: __S(360) as any as S.Schema<DescribeTableRestoreStatusMessage>,
  output: __S(363) as any as S.Schema<TableRestoreStatusMessage>,
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
  input: __S(364) as any as S.Schema<DescribeTagsMessage>,
  output: __S(367) as any as S.Schema<TaggedResourceListMessage>,
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
  input: __S(368) as any as S.Schema<DescribeUsageLimitsMessage>,
  output: __S(370) as any as S.Schema<UsageLimitList>,
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
  input: __S(371) as any as S.Schema<DisableLoggingMessage>,
  output: __S(314) as any as S.Schema<LoggingStatus>,
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
  input: __S(372) as any as S.Schema<DisableSnapshotCopyMessage>,
  output: __S(373) as any as S.Schema<DisableSnapshotCopyResult>,
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
  input: __S(374) as any as S.Schema<DisassociateDataShareConsumerMessage>,
  output: __S(10) as any as S.Schema<DataShare>,
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
  input: __S(375) as any as S.Schema<EnableLoggingMessage>,
  output: __S(314) as any as S.Schema<LoggingStatus>,
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
  input: __S(376) as any as S.Schema<EnableSnapshotCopyMessage>,
  output: __S(377) as any as S.Schema<EnableSnapshotCopyResult>,
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
  input: __S(378) as any as S.Schema<FailoverPrimaryComputeInputMessage>,
  output: __S(379) as any as S.Schema<FailoverPrimaryComputeResult>,
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
  input: __S(381) as any as S.Schema<GetClusterCredentialsMessage>,
  output: __S(382) as any as S.Schema<ClusterCredentials>,
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
  input: __S(383) as any as S.Schema<GetClusterCredentialsWithIAMMessage>,
  output: __S(384) as any as S.Schema<ClusterExtendedCredentials>,
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
  input: __S(386) as any as S.Schema<GetIdentityCenterAuthTokenRequest>,
  output: __S(387) as any as S.Schema<GetIdentityCenterAuthTokenResponse>,
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
  input: __S(388) as any as S.Schema<GetReservedNodeExchangeConfigurationOptionsInputMessage>,
  output: __S(391) as any as S.Schema<GetReservedNodeExchangeConfigurationOptionsOutputMessage>,
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
  input: __S(392) as any as S.Schema<GetReservedNodeExchangeOfferingsInputMessage>,
  output: __S(393) as any as S.Schema<GetReservedNodeExchangeOfferingsOutputMessage>,
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
  input: __S(394) as any as S.Schema<GetResourcePolicyMessage>,
  output: __S(396) as any as S.Schema<GetResourcePolicyResult>,
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
  input: __S(397) as any as S.Schema<ListRecommendationsMessage>,
  output: __S(404) as any as S.Schema<ListRecommendationsResult>,
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
  input: __S(405) as any as S.Schema<ModifyAquaInputMessage>,
  output: __S(406) as any as S.Schema<ModifyAquaOutputMessage>,
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
  input: __S(407) as any as S.Schema<ModifyAuthenticationProfileMessage>,
  output: __S(408) as any as S.Schema<ModifyAuthenticationProfileResult>,
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
  input: __S(409) as any as S.Schema<ModifyClusterMessage>,
  output: __S(410) as any as S.Schema<ModifyClusterResult>,
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
  input: __S(411) as any as S.Schema<ModifyClusterDbRevisionMessage>,
  output: __S(412) as any as S.Schema<ModifyClusterDbRevisionResult>,
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
  input: __S(413) as any as S.Schema<ModifyClusterIamRolesMessage>,
  output: __S(414) as any as S.Schema<ModifyClusterIamRolesResult>,
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
  input: __S(415) as any as S.Schema<ModifyClusterMaintenanceMessage>,
  output: __S(416) as any as S.Schema<ModifyClusterMaintenanceResult>,
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
  input: __S(417) as any as S.Schema<ModifyClusterParameterGroupMessage>,
  output: __S(418) as any as S.Schema<ClusterParameterGroupNameMessage>,
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
  input: __S(419) as any as S.Schema<ModifyClusterSnapshotMessage>,
  output: __S(420) as any as S.Schema<ModifyClusterSnapshotResult>,
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
  input: __S(421) as any as S.Schema<ModifyClusterSnapshotScheduleMessage>,
  output: __S(422) as any as S.Schema<ModifyClusterSnapshotScheduleResponse>,
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
  input: __S(423) as any as S.Schema<ModifyClusterSubnetGroupMessage>,
  output: __S(424) as any as S.Schema<ModifyClusterSubnetGroupResult>,
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
  input: __S(425) as any as S.Schema<ModifyCustomDomainAssociationMessage>,
  output: __S(426) as any as S.Schema<ModifyCustomDomainAssociationResult>,
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
  input: __S(427) as any as S.Schema<ModifyEndpointAccessMessage>,
  output: __S(109) as any as S.Schema<EndpointAccess>,
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
  input: __S(428) as any as S.Schema<ModifyEventSubscriptionMessage>,
  output: __S(429) as any as S.Schema<ModifyEventSubscriptionResult>,
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
  input: __S(430) as any as S.Schema<ModifyIntegrationMessage>,
  output: __S(125) as any as S.Schema<Integration>,
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
  input: __S(431) as any as S.Schema<ModifyLakehouseConfigurationMessage>,
  output: __S(432) as any as S.Schema<LakehouseConfiguration>,
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
  input: __S(433) as any as S.Schema<ModifyQev2IdcApplicationMessage>,
  output: __S(434) as any as S.Schema<ModifyQev2IdcApplicationResult>,
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
  input: __S(435) as any as S.Schema<ModifyRedshiftIdcApplicationMessage>,
  output: __S(436) as any as S.Schema<ModifyRedshiftIdcApplicationResult>,
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
  input: __S(437) as any as S.Schema<ModifyScheduledActionMessage>,
  output: __S(153) as any as S.Schema<ScheduledAction>,
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
  input: __S(438) as any as S.Schema<ModifySnapshotCopyRetentionPeriodMessage>,
  output: __S(439) as any as S.Schema<ModifySnapshotCopyRetentionPeriodResult>,
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
  input: __S(440) as any as S.Schema<ModifySnapshotScheduleMessage>,
  output: __S(162) as any as S.Schema<SnapshotSchedule>,
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
  input: __S(441) as any as S.Schema<ModifyUsageLimitMessage>,
  output: __S(166) as any as S.Schema<UsageLimit>,
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
  input: __S(148) as any as S.Schema<PauseClusterMessage>,
  output: __S(442) as any as S.Schema<PauseClusterResult>,
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
  input: __S(443) as any as S.Schema<PurchaseReservedNodeOfferingMessage>,
  output: __S(444) as any as S.Schema<PurchaseReservedNodeOfferingResult>,
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
  input: __S(445) as any as S.Schema<PutResourcePolicyMessage>,
  output: __S(446) as any as S.Schema<PutResourcePolicyResult>,
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
  input: __S(447) as any as S.Schema<RebootClusterMessage>,
  output: __S(448) as any as S.Schema<RebootClusterResult>,
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
  input: __S(449) as any as S.Schema<RegisterNamespaceInputMessage>,
  output: __S(450) as any as S.Schema<RegisterNamespaceOutputMessage>,
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
  input: __S(451) as any as S.Schema<RejectDataShareMessage>,
  output: __S(10) as any as S.Schema<DataShare>,
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
  input: __S(452) as any as S.Schema<ResetClusterParameterGroupMessage>,
  output: __S(418) as any as S.Schema<ClusterParameterGroupNameMessage>,
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
  input: __S(147) as any as S.Schema<ResizeClusterMessage>,
  output: __S(453) as any as S.Schema<ResizeClusterResult>,
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
  input: __S(454) as any as S.Schema<RestoreFromClusterSnapshotMessage>,
  output: __S(455) as any as S.Schema<RestoreFromClusterSnapshotResult>,
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
  input: __S(456) as any as S.Schema<RestoreTableFromClusterSnapshotMessage>,
  output: __S(457) as any as S.Schema<RestoreTableFromClusterSnapshotResult>,
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
  input: __S(149) as any as S.Schema<ResumeClusterMessage>,
  output: __S(458) as any as S.Schema<ResumeClusterResult>,
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
  input: __S(459) as any as S.Schema<RevokeClusterSecurityGroupIngressMessage>,
  output: __S(460) as any as S.Schema<RevokeClusterSecurityGroupIngressResult>,
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
  input: __S(461) as any as S.Schema<RevokeEndpointAccessMessage>,
  output: __S(23) as any as S.Schema<EndpointAuthorization>,
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
  input: __S(462) as any as S.Schema<RevokeSnapshotAccessMessage>,
  output: __S(463) as any as S.Schema<RevokeSnapshotAccessResult>,
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
  input: __S(464) as any as S.Schema<RotateEncryptionKeyMessage>,
  output: __S(465) as any as S.Schema<RotateEncryptionKeyResult>,
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
  input: __S(466) as any as S.Schema<UpdatePartnerStatusInputMessage>,
  output: __S(6) as any as S.Schema<PartnerIntegrationOutputMessage>,
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
        /*@__PURE__*/ __S(1).pipe(/*@__PURE__*/ T.XmlName("RecurringCharge")).annotate({
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
          RecurringCharges: S.optional(__S(2)),
          ReservedNodeOfferingType: S.optional(S.String),
        }),
      ).annotate({ identifier: "ReservedNode" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ExchangedReservedNode: S.optional(__S(3)) }).pipe(ns),
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
          Status: S.optional(S.String),
          ConsumerRegion: S.optional(S.String),
          CreatedDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          StatusChangeDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ProducerAllowedWrites: S.optional(S.Boolean),
          ConsumerAcceptedWrites: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "DataShareAssociation" });
    case 1:
      return S.Array(__S(8));
    case 2:
      return S.suspend(() =>
        S.Struct({
          DataShareArn: S.optional(S.String),
          ProducerArn: S.optional(S.String),
          AllowPubliclyAccessibleConsumers: S.optional(S.Boolean),
          DataShareAssociations: S.optional(__S(9)),
          ManagedBy: S.optional(S.String),
          DataShareType: S.optional(S.String),
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
        /*@__PURE__*/ __S(12).pipe(/*@__PURE__*/ T.XmlName("Tag")).annotate({ identifier: "Tag" }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          EC2SecurityGroupName: S.optional(S.String),
          EC2SecurityGroupOwnerId: S.optional(S.String),
          Tags: S.optional(__S(13)),
        }),
      ).annotate({ identifier: "EC2SecurityGroup" });
    case 7:
      return S.Array(
        /*@__PURE__*/ __S(14).pipe(/*@__PURE__*/ T.XmlName("EC2SecurityGroup")).annotate({
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
          Tags: S.optional(__S(13)),
        }),
      ).annotate({ identifier: "IPRange" });
    case 1:
      return S.Array(
        /*@__PURE__*/ __S(16).pipe(/*@__PURE__*/ T.XmlName("IPRange")).annotate({
          identifier: "IPRange",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          ClusterSecurityGroupName: S.optional(S.String),
          Description: S.optional(S.String),
          EC2SecurityGroups: S.optional(__S(15)),
          IPRanges: S.optional(__S(17)),
          Tags: S.optional(__S(13)),
        }),
      ).annotate({ identifier: "ClusterSecurityGroup" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ClusterSecurityGroup: S.optional(__S(18)) }).pipe(ns),
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
          VpcIds: S.optional(__S(21)),
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
          Status: S.optional(S.String),
          AllowedAllVPCs: S.optional(S.Boolean),
          AllowedVPCs: S.optional(__S(21)),
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
        /*@__PURE__*/ __S(25).pipe(/*@__PURE__*/ T.XmlName("AccountWithRestoreAccess")).annotate({
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
          AccountsWithRestoreAccess: S.optional(__S(26)),
          OwnerAccount: S.optional(S.String),
          TotalBackupSizeInMegaBytes: S.optional(S.Number),
          ActualIncrementalBackupSizeInMegaBytes: S.optional(S.Number),
          BackupProgressInMegaBytes: S.optional(S.Number),
          CurrentBackupRateInMegaBytesPerSecond: S.optional(S.Number),
          EstimatedSecondsToCompletion: S.optional(S.Number),
          ElapsedTimeInSeconds: S.optional(S.Number),
          SourceRegion: S.optional(S.String),
          Tags: S.optional(__S(13)),
          RestorableNodeTypes: S.optional(__S(27)),
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
      return S.suspend(() => S.Struct({ Snapshot: S.optional(__S(28)) }).pipe(ns)).annotate({
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
        /*@__PURE__*/ __S(30)
          .pipe(/*@__PURE__*/ T.XmlName("DeleteClusterSnapshotMessage"))
          .annotate({
            identifier: "DeleteClusterSnapshotMessage",
          }),
      );
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Identifiers: S.optional(__S(31)) }).pipe(
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
        /*@__PURE__*/ __S(34).pipe(/*@__PURE__*/ T.XmlName("SnapshotErrorMessage")).annotate({
          identifier: "SnapshotErrorMessage",
        }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          Resources: S.optional(__S(33)),
          Errors: S.optional(__S(35)),
        }).pipe(ns),
      ).annotate({
        identifier: "BatchDeleteClusterSnapshotsResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SnapshotIdentifierList: S.optional(__S(33)),
          ManualSnapshotRetentionPeriod: S.optional(S.Number),
          Force: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "BatchModifyClusterSnapshotsMessage",
      });
    case 6:
      return S.Array(
        /*@__PURE__*/ __S(34).pipe(/*@__PURE__*/ T.XmlName("SnapshotErrorMessage")).annotate({
          identifier: "SnapshotErrorMessage",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          Resources: S.optional(__S(33)),
          Errors: S.optional(__S(38)),
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
          ImportTablesCompleted: S.optional(__S(41)),
          ImportTablesInProgress: S.optional(__S(42)),
          ImportTablesNotStarted: S.optional(__S(43)),
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
      return S.suspend(() => S.Struct({ Snapshot: S.optional(__S(28)) }).pipe(ns)).annotate({
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
          ClusterSecurityGroups: S.optional(__S(49)),
          VpcSecurityGroupIds: S.optional(__S(50)),
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
          Tags: S.optional(__S(13)),
          KmsKeyId: S.optional(S.String),
          EnhancedVpcRouting: S.optional(S.Boolean),
          AdditionalInfo: S.optional(S.String),
          IamRoles: S.optional(__S(51)),
          MaintenanceTrackName: S.optional(S.String),
          SnapshotScheduleIdentifier: S.optional(S.String),
          AvailabilityZoneRelocation: S.optional(S.Boolean),
          AquaConfigurationStatus: S.optional(S.String),
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
        /*@__PURE__*/ __S(53).pipe(/*@__PURE__*/ T.XmlName("NetworkInterface")).annotate({
          identifier: "NetworkInterface",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          VpcEndpointId: S.optional(S.String),
          VpcId: S.optional(S.String),
          NetworkInterfaces: S.optional(__S(54)),
        }),
      ).annotate({ identifier: "VpcEndpoint" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ __S(55).pipe(/*@__PURE__*/ T.XmlName("VpcEndpoint")).annotate({
          identifier: "VpcEndpoint",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          Address: S.optional(S.String),
          Port: S.optional(S.Number),
          VpcEndpoints: S.optional(__S(56)),
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
        /*@__PURE__*/ __S(58).pipe(/*@__PURE__*/ T.XmlName("ClusterSecurityGroup")).annotate({
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
        /*@__PURE__*/ __S(60).pipe(/*@__PURE__*/ T.XmlName("VpcSecurityGroup")).annotate({
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
      return S.Array(__S(62));
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ParameterGroupName: S.optional(S.String),
          ParameterApplyStatus: S.optional(S.String),
          ClusterParameterStatusList: S.optional(__S(63)),
        }),
      ).annotate({
        identifier: "ClusterParameterGroupStatus",
      });
    case 1:
      return S.Array(
        /*@__PURE__*/ __S(64).pipe(/*@__PURE__*/ T.XmlName("ClusterParameterGroup")).annotate({
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
      return S.Array(__S(71));
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
        /*@__PURE__*/ __S(74).pipe(/*@__PURE__*/ T.XmlName("ClusterIamRole")).annotate({
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
        /*@__PURE__*/ __S(77).pipe(/*@__PURE__*/ T.XmlName("DeferredMaintenanceWindow")).annotate({
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
          AquaStatus: S.optional(S.String),
          AquaConfigurationStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "AquaConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ReservedNodeExchangeRequestId: S.optional(S.String),
          Status: S.optional(S.String),
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
          ClusterNodes: S.optional(__S(72)),
        }),
      ).annotate({ identifier: "SecondaryClusterInfo" });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          S3Tables: S.optional(__S(83)),
          S3TableNamespace: S.optional(S.String),
          S3TableGranularity: S.optional(S.String),
          EnabledAll: S.optional(S.Boolean),
          LastIngestionTimes: S.optional(__S(84)),
        }),
      ).annotate({ identifier: "S3TablePublishStatus" });
    case 6:
      return S.suspend(() => S.Struct({ S3Tables: S.optional(__S(85)) })).annotate({
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
          ClusterSecurityGroups: S.optional(__S(59)),
          VpcSecurityGroups: S.optional(__S(61)),
          ClusterParameterGroups: S.optional(__S(65)),
          ClusterSubnetGroupName: S.optional(S.String),
          VpcId: S.optional(S.String),
          AvailabilityZone: S.optional(S.String),
          PreferredMaintenanceWindow: S.optional(S.String),
          PendingModifiedValues: S.optional(__S(66)),
          ClusterVersion: S.optional(S.String),
          AllowVersionUpgrade: S.optional(S.Boolean),
          NumberOfNodes: S.optional(S.Number),
          PubliclyAccessible: S.optional(S.Boolean),
          Encrypted: S.optional(S.Boolean),
          RestoreStatus: S.optional(__S(67)),
          DataTransferProgress: S.optional(__S(68)),
          HsmStatus: S.optional(__S(69)),
          ClusterSnapshotCopyStatus: S.optional(__S(70)),
          ClusterPublicKey: S.optional(S.String),
          ClusterNodes: S.optional(__S(72)),
          ElasticIpStatus: S.optional(__S(73)),
          ClusterRevisionNumber: S.optional(S.String),
          Tags: S.optional(__S(13)),
          KmsKeyId: S.optional(S.String),
          EnhancedVpcRouting: S.optional(S.Boolean),
          IamRoles: S.optional(__S(75)),
          PendingActions: S.optional(__S(76)),
          MaintenanceTrackName: S.optional(S.String),
          ElasticResizeNumberOfNodeOptions: S.optional(S.String),
          DeferredMaintenanceWindows: S.optional(__S(78)),
          SnapshotScheduleIdentifier: S.optional(S.String),
          SnapshotScheduleState: S.optional(S.String),
          ExpectedNextSnapshotScheduleTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          ExpectedNextSnapshotScheduleTimeStatus: S.optional(S.String),
          NextMaintenanceWindowStartTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          ResizeInfo: S.optional(__S(79)),
          AvailabilityZoneRelocationStatus: S.optional(S.String),
          ClusterNamespaceArn: S.optional(S.String),
          TotalStorageCapacityInMegaBytes: S.optional(S.Number),
          AquaConfiguration: S.optional(__S(80)),
          DefaultIamRoleArn: S.optional(S.String),
          ReservedNodeExchangeStatus: S.optional(__S(81)),
          CustomDomainName: S.optional(S.String),
          CustomDomainCertificateArn: S.optional(S.String),
          CustomDomainCertificateExpiryDate: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          MasterPasswordSecretArn: S.optional(S.String),
          MasterPasswordSecretKmsKeyId: S.optional(S.String),
          IpAddressType: S.optional(S.String),
          MultiAZ: S.optional(S.String),
          MultiAZSecondary: S.optional(__S(82)),
          LakehouseRegistrationStatus: S.optional(S.String),
          CatalogArn: S.optional(S.String),
          ExtraComputeForAutomaticOptimization: S.optional(S.String),
          LoggingPublishStatus: S.optional(__S(86)),
        }),
      ).annotate({ identifier: "Cluster" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Cluster: S.optional(__S(87)) }).pipe(ns)).annotate({
        identifier: "CreateClusterResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ParameterGroupName: S.optional(S.String),
          ParameterGroupFamily: S.optional(S.String),
          Description: S.optional(S.String),
          Tags: S.optional(__S(13)),
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
          Tags: S.optional(__S(13)),
        }),
      ).annotate({ identifier: "ClusterParameterGroup" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ClusterParameterGroup: S.optional(__S(90)) }).pipe(ns),
      ).annotate({
        identifier: "CreateClusterParameterGroupResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ClusterSecurityGroupName: S.optional(S.String),
          Description: S.optional(S.String),
          Tags: S.optional(__S(13)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateClusterSecurityGroupMessage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ClusterSecurityGroup: S.optional(__S(18)) }).pipe(ns),
      ).annotate({
        identifier: "CreateClusterSecurityGroupResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SnapshotIdentifier: S.optional(S.String),
          ClusterIdentifier: S.optional(S.String),
          ManualSnapshotRetentionPeriod: S.optional(S.Number),
          Tags: S.optional(__S(13)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateClusterSnapshotMessage",
      });
    case 7:
      return S.suspend(() => S.Struct({ Snapshot: S.optional(__S(28)) }).pipe(ns)).annotate({
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
          SubnetIds: S.optional(__S(96)),
          Tags: S.optional(__S(13)),
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
        /*@__PURE__*/ __S(98).pipe(/*@__PURE__*/ T.XmlName("SupportedPlatform")).annotate({
          identifier: "SupportedPlatform",
        }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          SupportedPlatforms: S.optional(__S(99)),
        }),
      ).annotate({ identifier: "AvailabilityZone" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SubnetIdentifier: S.optional(S.String),
          SubnetAvailabilityZone: S.optional(__S(100)),
          SubnetStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "Subnet" });
    case 6:
      return S.Array(
        /*@__PURE__*/ __S(101).pipe(/*@__PURE__*/ T.XmlName("Subnet")).annotate({
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
          Subnets: S.optional(__S(102)),
          Tags: S.optional(__S(13)),
          SupportedClusterIpAddressTypes: S.optional(__S(103)),
        }),
      ).annotate({ identifier: "ClusterSubnetGroup" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ClusterSubnetGroup: S.optional(__S(104)) }).pipe(ns),
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
          VpcSecurityGroupIds: S.optional(__S(50)),
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
          VpcSecurityGroups: S.optional(__S(61)),
          VpcEndpoint: S.optional(__S(55)),
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
          SourceIds: S.optional(__S(110)),
          EventCategories: S.optional(__S(111)),
          Severity: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
          Tags: S.optional(__S(13)),
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
          SourceIdsList: S.optional(__S(110)),
          EventCategoriesList: S.optional(__S(111)),
          Severity: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
          Tags: S.optional(__S(13)),
        }),
      ).annotate({ identifier: "EventSubscription" });
    case 2:
      return S.suspend(() =>
        S.Struct({ EventSubscription: S.optional(__S(113)) }).pipe(ns),
      ).annotate({
        identifier: "CreateEventSubscriptionResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          HsmClientCertificateIdentifier: S.optional(S.String),
          Tags: S.optional(__S(13)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateHsmClientCertificateMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          HsmClientCertificateIdentifier: S.optional(S.String),
          HsmClientCertificatePublicKey: S.optional(S.String),
          Tags: S.optional(__S(13)),
        }),
      ).annotate({ identifier: "HsmClientCertificate" });
    case 5:
      return S.suspend(() =>
        S.Struct({ HsmClientCertificate: S.optional(__S(116)) }).pipe(ns),
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
          Tags: S.optional(__S(13)),
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
          Tags: S.optional(__S(13)),
        }),
      ).annotate({ identifier: "HsmConfiguration" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ HsmConfiguration: S.optional(__S(119)) }).pipe(ns),
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
          TagList: S.optional(__S(13)),
          AdditionalEncryptionContext: S.optional(__S(121)),
          Description: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateIntegrationMessage" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String) }),
      ).annotate({ identifier: "IntegrationError" });
    case 4:
      return S.Array(
        /*@__PURE__*/ __S(123).pipe(/*@__PURE__*/ T.XmlName("IntegrationError")).annotate({
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
          Status: S.optional(S.String),
          Errors: S.optional(__S(124)),
          CreateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Description: S.optional(S.String),
          KMSKeyId: S.optional(S.String),
          AdditionalEncryptionContext: S.optional(__S(121)),
          Tags: S.optional(__S(13)),
        }).pipe(ns),
      ).annotate({ identifier: "Integration" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          IdcInstanceArn: S.optional(S.String),
          Qev2IdcApplicationName: S.optional(S.String),
          IdcDisplayName: S.optional(S.String),
          Tags: S.optional(__S(13)),
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
          Tags: S.optional(__S(13)),
        }),
      ).annotate({ identifier: "Qev2IdcApplication" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Qev2IdcApplication: S.optional(__S(127)) }).pipe(ns),
      ).annotate({
        identifier: "CreateQev2IdcApplicationResult",
      });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          TrustedTokenIssuerArn: S.optional(S.String),
          AuthorizedAudiencesList: S.optional(__S(129)),
        }),
      ).annotate({ identifier: "AuthorizedTokenIssuer" });
    case 3:
      return S.Array(__S(130));
    case 4:
      return S.suspend(() => S.Struct({ Authorization: S.optional(S.String) })).annotate({
        identifier: "LakeFormationQuery",
      });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ LakeFormationQuery: __S(132) })]);
    case 6:
      return S.Array(__S(133));
    case 7:
      return S.suspend(() => S.Struct({ Authorization: S.optional(S.String) })).annotate({
        identifier: "ReadWriteAccess",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ ReadWriteAccess: __S(135) })]);
    case 1:
      return S.Array(__S(136));
    case 2:
      return S.suspend(() => S.Struct({ Authorization: S.optional(S.String) })).annotate({
        identifier: "Connect",
      });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ Connect: __S(138) })]);
    case 4:
      return S.Array(__S(139));
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ LakeFormation: __S(134) }),
        /*@__PURE__*/ S.Struct({ S3AccessGrants: __S(137) }),
        /*@__PURE__*/ S.Struct({ Redshift: __S(140) }),
      ]);
    case 6:
      return S.Array(__S(141));
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
          AuthorizedTokenIssuerList: S.optional(__S(131)),
          ServiceIntegrations: S.optional(__S(142)),
          ApplicationType: S.optional(S.String),
          Tags: S.optional(__S(13)),
          SsoTagKeys: S.optional(__S(143)),
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
          AuthorizedTokenIssuerList: S.optional(__S(131)),
          ServiceIntegrations: S.optional(__S(142)),
          ApplicationType: S.optional(S.String),
          Tags: S.optional(__S(13)),
          SsoTagKeys: S.optional(__S(143)),
        }),
      ).annotate({ identifier: "RedshiftIdcApplication" });
    case 2:
      return S.suspend(() =>
        S.Struct({ RedshiftIdcApplication: S.optional(__S(145)) }).pipe(ns),
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
          ResizeCluster: S.optional(__S(147)),
          PauseCluster: S.optional(__S(148)),
          ResumeCluster: S.optional(__S(149)),
        }),
      ).annotate({ identifier: "ScheduledActionType" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ScheduledActionName: S.optional(S.String),
          TargetAction: S.optional(__S(150)),
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
          TargetAction: S.optional(__S(150)),
          Schedule: S.optional(S.String),
          IamRole: S.optional(S.String),
          ScheduledActionDescription: S.optional(S.String),
          State: S.optional(S.String),
          NextInvocations: S.optional(__S(152)),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }).pipe(ns),
      ).annotate({ identifier: "ScheduledAction" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SnapshotCopyGrantName: S.optional(S.String),
          KmsKeyId: S.optional(S.String),
          Tags: S.optional(__S(13)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateSnapshotCopyGrantMessage",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          SnapshotCopyGrantName: S.optional(S.String),
          KmsKeyId: S.optional(S.String),
          Tags: S.optional(__S(13)),
        }),
      ).annotate({ identifier: "SnapshotCopyGrant" });
    case 4:
      return S.suspend(() =>
        S.Struct({ SnapshotCopyGrant: S.optional(__S(155)) }).pipe(ns),
      ).annotate({
        identifier: "CreateSnapshotCopyGrantResult",
      });
    case 5:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("ScheduleDefinition")));
    case 6:
      return S.suspend(() =>
        S.Struct({
          ScheduleDefinitions: S.optional(__S(157)),
          ScheduleIdentifier: S.optional(S.String),
          ScheduleDescription: S.optional(S.String),
          Tags: S.optional(__S(13)),
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
          ScheduleAssociationState: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ClusterAssociatedToSchedule",
      });
    case 1:
      return S.Array(
        /*@__PURE__*/ __S(160)
          .pipe(/*@__PURE__*/ T.XmlName("ClusterAssociatedToSchedule"))
          .annotate({
            identifier: "ClusterAssociatedToSchedule",
          }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          ScheduleDefinitions: S.optional(__S(157)),
          ScheduleIdentifier: S.optional(S.String),
          ScheduleDescription: S.optional(S.String),
          Tags: S.optional(__S(13)),
          NextInvocations: S.optional(__S(159)),
          AssociatedClusterCount: S.optional(S.Number),
          AssociatedClusters: S.optional(__S(161)),
        }).pipe(ns),
      ).annotate({ identifier: "SnapshotSchedule" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceName: S.optional(S.String), Tags: S.optional(__S(13)) }).pipe(
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
          FeatureType: S.optional(S.String),
          LimitType: S.optional(S.String),
          Amount: S.optional(S.Number),
          Period: S.optional(S.String),
          BreachAction: S.optional(S.String),
          Tags: S.optional(__S(13)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateUsageLimitMessage" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          UsageLimitId: S.optional(S.String),
          ClusterIdentifier: S.optional(S.String),
          FeatureType: S.optional(S.String),
          LimitType: S.optional(S.String),
          Amount: S.optional(S.Number),
          Period: S.optional(S.String),
          BreachAction: S.optional(S.String),
          Tags: S.optional(__S(13)),
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
      return S.suspend(() => S.Struct({ Cluster: S.optional(__S(87)) }).pipe(ns)).annotate({
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
      return S.suspend(() => S.Struct({ Snapshot: S.optional(__S(28)) }).pipe(ns)).annotate({
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
        S.Struct({ ResourceName: S.optional(S.String), TagKeys: S.optional(__S(143)) }).pipe(
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
        /*@__PURE__*/ S.Struct({ ServerlessIdentifier: __S(205) }),
        /*@__PURE__*/ S.Struct({ ProvisionedIdentifier: __S(206) }),
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
          NamespaceIdentifier: S.optional(__S(207)),
          ConsumerIdentifiers: S.optional(__S(208)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeregisterNamespaceInputMessage",
      });
    case 2:
      return S.suspend(() => S.Struct({ Status: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "DeregisterNamespaceOutputMessage",
      });
    case 3:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("AttributeName")));
    case 4:
      return S.suspend(() =>
        S.Struct({ AttributeNames: S.optional(__S(211)) }).pipe(
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
        /*@__PURE__*/ __S(213).pipe(/*@__PURE__*/ T.XmlName("AttributeValueTarget")).annotate({
          identifier: "AttributeValueTarget",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          AttributeName: S.optional(S.String),
          AttributeValues: S.optional(__S(214)),
        }),
      ).annotate({ identifier: "AccountAttribute" });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ __S(215).pipe(/*@__PURE__*/ T.XmlName("AccountAttribute")).annotate({
          identifier: "AccountAttribute",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({ AccountAttributes: S.optional(__S(216)) }).pipe(ns),
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
      return S.Array(__S(219));
    case 5:
      return S.suspend(() =>
        S.Struct({ AuthenticationProfiles: S.optional(__S(220)) }).pipe(ns),
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
        /*@__PURE__*/ __S(223).pipe(/*@__PURE__*/ T.XmlName("RevisionTarget")).annotate({
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
          RevisionTargets: S.optional(__S(224)),
        }),
      ).annotate({ identifier: "ClusterDbRevision" });
    case 2:
      return S.Array(
        /*@__PURE__*/ __S(225).pipe(/*@__PURE__*/ T.XmlName("ClusterDbRevision")).annotate({
          identifier: "ClusterDbRevision",
        }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          ClusterDbRevisions: S.optional(__S(226)),
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
          TagKeys: S.optional(__S(143)),
          TagValues: S.optional(__S(228)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeClusterParameterGroupsMessage",
      });
    case 6:
      return S.Array(
        /*@__PURE__*/ __S(90).pipe(/*@__PURE__*/ T.XmlName("ClusterParameterGroup")).annotate({
          identifier: "ClusterParameterGroup",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          ParameterGroups: S.optional(__S(230)),
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
          ApplyType: S.optional(S.String),
          IsModifiable: S.optional(S.Boolean),
          MinimumEngineVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "Parameter" });
    case 2:
      return S.Array(
        /*@__PURE__*/ __S(233).pipe(/*@__PURE__*/ T.XmlName("Parameter")).annotate({
          identifier: "Parameter",
        }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({ Parameters: S.optional(__S(234)), Marker: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "ClusterParameterGroupDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
          TagKeys: S.optional(__S(143)),
          TagValues: S.optional(__S(228)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeClustersMessage" });
    case 5:
      return S.Array(
        /*@__PURE__*/ __S(87).pipe(/*@__PURE__*/ T.XmlName("Cluster")).annotate({
          identifier: "Cluster",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({ Marker: S.optional(S.String), Clusters: S.optional(__S(237)) }).pipe(ns),
      ).annotate({ identifier: "ClustersMessage" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ClusterSecurityGroupName: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
          TagKeys: S.optional(__S(143)),
          TagValues: S.optional(__S(228)),
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
        /*@__PURE__*/ __S(18).pipe(/*@__PURE__*/ T.XmlName("ClusterSecurityGroup")).annotate({
          identifier: "ClusterSecurityGroup",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          ClusterSecurityGroups: S.optional(__S(240)),
        }).pipe(ns),
      ).annotate({
        identifier: "ClusterSecurityGroupMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Attribute: S.optional(S.String),
          SortOrder: S.optional(S.String),
        }),
      ).annotate({ identifier: "SnapshotSortingEntity" });
    case 3:
      return S.Array(
        /*@__PURE__*/ __S(242).pipe(/*@__PURE__*/ T.XmlName("SnapshotSortingEntity")).annotate({
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
          TagKeys: S.optional(__S(143)),
          TagValues: S.optional(__S(228)),
          ClusterExists: S.optional(S.Boolean),
          SortingEntities: S.optional(__S(243)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeClusterSnapshotsMessage",
      });
    case 5:
      return S.Array(
        /*@__PURE__*/ __S(28).pipe(/*@__PURE__*/ T.XmlName("Snapshot")).annotate({
          identifier: "Snapshot",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({ Marker: S.optional(S.String), Snapshots: S.optional(__S(245)) }).pipe(ns),
      ).annotate({ identifier: "SnapshotMessage" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ClusterSubnetGroupName: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
          TagKeys: S.optional(__S(143)),
          TagValues: S.optional(__S(228)),
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
        /*@__PURE__*/ __S(104).pipe(/*@__PURE__*/ T.XmlName("ClusterSubnetGroup")).annotate({
          identifier: "ClusterSubnetGroup",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          ClusterSubnetGroups: S.optional(__S(248)),
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
        /*@__PURE__*/ __S(251).pipe(/*@__PURE__*/ T.XmlName("SupportedOperation")).annotate({
          identifier: "SupportedOperation",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          MaintenanceTrackName: S.optional(S.String),
          DatabaseVersion: S.optional(S.String),
          SupportedOperations: S.optional(__S(252)),
        }),
      ).annotate({ identifier: "UpdateTarget" });
    case 6:
      return S.Array(
        /*@__PURE__*/ __S(253).pipe(/*@__PURE__*/ T.XmlName("UpdateTarget")).annotate({
          identifier: "UpdateTarget",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          MaintenanceTrackName: S.optional(S.String),
          DatabaseVersion: S.optional(S.String),
          UpdateTargets: S.optional(__S(254)),
        }),
      ).annotate({ identifier: "MaintenanceTrack" });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ __S(255).pipe(/*@__PURE__*/ T.XmlName("MaintenanceTrack")).annotate({
          identifier: "MaintenanceTrack",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({ MaintenanceTracks: S.optional(__S(256)), Marker: S.optional(S.String) }).pipe(
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
        /*@__PURE__*/ __S(259).pipe(/*@__PURE__*/ T.XmlName("ClusterVersion")).annotate({
          identifier: "ClusterVersion",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          ClusterVersions: S.optional(__S(260)),
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
        /*@__PURE__*/ __S(263).pipe(/*@__PURE__*/ T.XmlName("CertificateAssociation")).annotate({
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
          CertificateAssociations: S.optional(__S(264)),
        }),
      ).annotate({ identifier: "Association" });
    case 2:
      return S.Array(
        /*@__PURE__*/ __S(265).pipe(/*@__PURE__*/ T.XmlName("Association")).annotate({
          identifier: "Association",
        }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({ Marker: S.optional(S.String), Associations: S.optional(__S(266)) }).pipe(ns),
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
      return S.Array(__S(10));
    case 6:
      return S.suspend(() =>
        S.Struct({ DataShares: S.optional(__S(269)), Marker: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "DescribeDataSharesResult" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConsumerArn: S.optional(S.String),
          Status: S.optional(S.String),
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
        S.Struct({ DataShares: S.optional(__S(269)), Marker: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DescribeDataSharesForConsumerResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ProducerArn: S.optional(S.String),
          Status: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeDataSharesForProducerMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ DataShares: S.optional(__S(269)), Marker: S.optional(S.String) }).pipe(ns),
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
          Parameters: S.optional(__S(234)),
        }),
      ).annotate({ identifier: "DefaultClusterParameters" });
    case 5:
      return S.suspend(() =>
        S.Struct({ DefaultClusterParameters: S.optional(__S(276)) }).pipe(ns),
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
      return S.Array(__S(109));
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          EndpointAccessList: S.optional(__S(279)),
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
      return S.Array(__S(23));
    case 3:
      return S.suspend(() =>
        S.Struct({
          EndpointAuthorizationList: S.optional(__S(282)),
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
          EventCategories: S.optional(__S(111)),
          EventDescription: S.optional(S.String),
          Severity: S.optional(S.String),
        }),
      ).annotate({ identifier: "EventInfoMap" });
    case 6:
      return S.Array(
        /*@__PURE__*/ __S(285).pipe(/*@__PURE__*/ T.XmlName("EventInfoMap")).annotate({
          identifier: "EventInfoMap",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({ SourceType: S.optional(S.String), Events: S.optional(__S(286)) }),
      ).annotate({ identifier: "EventCategoriesMap" });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ __S(287).pipe(/*@__PURE__*/ T.XmlName("EventCategoriesMap")).annotate({
          identifier: "EventCategoriesMap",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({ EventCategoriesMapList: S.optional(__S(288)) }).pipe(ns),
      ).annotate({ identifier: "EventCategoriesMessage" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SourceIdentifier: S.optional(S.String),
          SourceType: S.optional(S.String),
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
          SourceType: S.optional(S.String),
          Message: S.optional(S.String),
          EventCategories: S.optional(__S(111)),
          Severity: S.optional(S.String),
          Date: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EventId: S.optional(S.String),
        }),
      ).annotate({ identifier: "Event" });
    case 4:
      return S.Array(
        /*@__PURE__*/ __S(291).pipe(/*@__PURE__*/ T.XmlName("Event")).annotate({
          identifier: "Event",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({ Marker: S.optional(S.String), Events: S.optional(__S(292)) }).pipe(ns),
      ).annotate({ identifier: "EventsMessage" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SubscriptionName: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
          TagKeys: S.optional(__S(143)),
          TagValues: S.optional(__S(228)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeEventSubscriptionsMessage",
      });
    case 7:
      return S.Array(
        /*@__PURE__*/ __S(113).pipe(/*@__PURE__*/ T.XmlName("EventSubscription")).annotate({
          identifier: "EventSubscription",
        }),
      );
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          EventSubscriptionsList: S.optional(__S(295)),
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
          TagKeys: S.optional(__S(143)),
          TagValues: S.optional(__S(228)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeHsmClientCertificatesMessage",
      });
    case 2:
      return S.Array(
        /*@__PURE__*/ __S(116).pipe(/*@__PURE__*/ T.XmlName("HsmClientCertificate")).annotate({
          identifier: "HsmClientCertificate",
        }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          HsmClientCertificates: S.optional(__S(298)),
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
          TagKeys: S.optional(__S(143)),
          TagValues: S.optional(__S(228)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeHsmConfigurationsMessage",
      });
    case 5:
      return S.Array(
        /*@__PURE__*/ __S(119).pipe(/*@__PURE__*/ T.XmlName("HsmConfiguration")).annotate({
          identifier: "HsmConfiguration",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          HsmConfigurations: S.optional(__S(301)),
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
          Status: S.optional(S.String),
          Errors: S.optional(__S(124)),
          CreateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "InboundIntegration" });
    case 1:
      return S.Array(
        /*@__PURE__*/ __S(304).pipe(/*@__PURE__*/ T.XmlName("InboundIntegration")).annotate({
          identifier: "InboundIntegration",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          InboundIntegrations: S.optional(__S(305)),
        }).pipe(ns),
      ).annotate({
        identifier: "InboundIntegrationsMessage",
      });
    case 3:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("Value")));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Values: S.optional(__S(307)),
        }),
      ).annotate({
        identifier: "DescribeIntegrationsFilter",
      });
    case 5:
      return S.Array(
        /*@__PURE__*/ __S(308)
          .pipe(/*@__PURE__*/ T.XmlName("DescribeIntegrationsFilter"))
          .annotate({
            identifier: "DescribeIntegrationsFilter",
          }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          IntegrationArn: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
          Filters: S.optional(__S(309)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeIntegrationsMessage",
      });
    case 7:
      return S.Array(
        /*@__PURE__*/ __S(125).pipe(/*@__PURE__*/ T.XmlName("Integration")).annotate({
          identifier: "Integration",
        }),
      );
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Marker: S.optional(S.String), Integrations: S.optional(__S(311)) }).pipe(ns),
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
          LogDestinationType: S.optional(S.String),
          LogExports: S.optional(__S(83)),
          S3Tables: S.optional(__S(85)),
        }).pipe(ns),
      ).annotate({ identifier: "LoggingStatus" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Operator: S.optional(S.String),
          Values: S.optional(__S(103)).pipe(T.XmlName("Value")),
        }),
      ).annotate({
        identifier: "NodeConfigurationOptionsFilter",
      });
    case 4:
      return S.Array(
        /*@__PURE__*/ __S(315)
          .pipe(/*@__PURE__*/ T.XmlName("NodeConfigurationOptionsFilter"))
          .annotate({
            identifier: "NodeConfigurationOptionsFilter",
          }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          ActionType: S.optional(S.String),
          ClusterIdentifier: S.optional(S.String),
          SnapshotIdentifier: S.optional(S.String),
          SnapshotArn: S.optional(S.String),
          OwnerAccount: S.optional(S.String),
          Filters: S.optional(__S(316)).pipe(T.XmlName("Filter")),
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
          Mode: S.optional(S.String),
        }),
      ).annotate({ identifier: "NodeConfigurationOption" });
    case 7:
      return S.Array(
        /*@__PURE__*/ __S(318).pipe(/*@__PURE__*/ T.XmlName("NodeConfigurationOption")).annotate({
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
          NodeConfigurationOptionList: S.optional(__S(319)),
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
        /*@__PURE__*/ __S(100).pipe(/*@__PURE__*/ T.XmlName("AvailabilityZone")).annotate({
          identifier: "AvailabilityZone",
        }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          ClusterVersion: S.optional(S.String),
          ClusterType: S.optional(S.String),
          NodeType: S.optional(S.String),
          AvailabilityZones: S.optional(__S(322)),
        }),
      ).annotate({ identifier: "OrderableClusterOption" });
    case 4:
      return S.Array(
        /*@__PURE__*/ __S(323).pipe(/*@__PURE__*/ T.XmlName("OrderableClusterOption")).annotate({
          identifier: "OrderableClusterOption",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          OrderableClusterOptions: S.optional(__S(324)),
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
          Status: S.optional(S.String),
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
        /*@__PURE__*/ __S(327).pipe(/*@__PURE__*/ T.XmlName("PartnerIntegrationInfo")).annotate({
          identifier: "PartnerIntegrationInfo",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({ PartnerIntegrationInfoList: S.optional(__S(328)) }).pipe(ns),
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
      return S.Array(__S(127));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Qev2IdcApplications: S.optional(__S(331)),
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
      return S.Array(__S(145));
    case 7:
      return S.suspend(() =>
        S.Struct({
          RedshiftIdcApplications: S.optional(__S(334)),
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
        /*@__PURE__*/ __S(81).pipe(/*@__PURE__*/ T.XmlName("ReservedNodeExchangeStatus")).annotate({
          identifier: "ReservedNodeExchangeStatus",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          ReservedNodeExchangeStatusDetails: S.optional(__S(337)),
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
          RecurringCharges: S.optional(__S(2)),
          ReservedNodeOfferingType: S.optional(S.String),
        }),
      ).annotate({ identifier: "ReservedNodeOffering" });
    case 5:
      return S.Array(
        /*@__PURE__*/ __S(340).pipe(/*@__PURE__*/ T.XmlName("ReservedNodeOffering")).annotate({
          identifier: "ReservedNodeOffering",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          ReservedNodeOfferings: S.optional(__S(341)),
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
        /*@__PURE__*/ __S(3).pipe(/*@__PURE__*/ T.XmlName("ReservedNode")).annotate({
          identifier: "ReservedNode",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          ReservedNodes: S.optional(__S(344)),
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
          Name: S.optional(S.String),
          Values: S.optional(__S(103)),
        }),
      ).annotate({ identifier: "ScheduledActionFilter" });
    case 4:
      return S.Array(
        /*@__PURE__*/ __S(347).pipe(/*@__PURE__*/ T.XmlName("ScheduledActionFilter")).annotate({
          identifier: "ScheduledActionFilter",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          ScheduledActionName: S.optional(S.String),
          TargetActionType: S.optional(S.String),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Active: S.optional(S.Boolean),
          Filters: S.optional(__S(348)),
          Marker: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeScheduledActionsMessage",
      });
    case 6:
      return S.Array(
        /*@__PURE__*/ __S(153).pipe(/*@__PURE__*/ T.XmlName("ScheduledAction")).annotate({
          identifier: "ScheduledAction",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          ScheduledActions: S.optional(__S(350)),
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
          TagKeys: S.optional(__S(143)),
          TagValues: S.optional(__S(228)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeSnapshotCopyGrantsMessage",
      });
    case 1:
      return S.Array(
        /*@__PURE__*/ __S(155).pipe(/*@__PURE__*/ T.XmlName("SnapshotCopyGrant")).annotate({
          identifier: "SnapshotCopyGrant",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          SnapshotCopyGrants: S.optional(__S(353)),
        }).pipe(ns),
      ).annotate({ identifier: "SnapshotCopyGrantMessage" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          ScheduleIdentifier: S.optional(S.String),
          TagKeys: S.optional(__S(143)),
          TagValues: S.optional(__S(228)),
          Marker: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeSnapshotSchedulesMessage",
      });
    case 4:
      return S.Array(
        /*@__PURE__*/ __S(162).pipe(/*@__PURE__*/ T.XmlName("SnapshotSchedule")).annotate({
          identifier: "SnapshotSchedule",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          SnapshotSchedules: S.optional(__S(356)),
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
          Status: S.optional(S.String),
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
        /*@__PURE__*/ __S(361).pipe(/*@__PURE__*/ T.XmlName("TableRestoreStatus")).annotate({
          identifier: "TableRestoreStatus",
        }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          TableRestoreStatusDetails: S.optional(__S(362)),
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
          TagKeys: S.optional(__S(143)),
          TagValues: S.optional(__S(228)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeTagsMessage" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Tag: S.optional(__S(12)),
          ResourceName: S.optional(S.String),
          ResourceType: S.optional(S.String),
        }),
      ).annotate({ identifier: "TaggedResource" });
    case 6:
      return S.Array(
        /*@__PURE__*/ __S(365).pipe(/*@__PURE__*/ T.XmlName("TaggedResource")).annotate({
          identifier: "TaggedResource",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          TaggedResources: S.optional(__S(366)),
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
          FeatureType: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
          TagKeys: S.optional(__S(143)),
          TagValues: S.optional(__S(228)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeUsageLimitsMessage",
      });
    case 1:
      return S.Array(__S(166));
    case 2:
      return S.suspend(() =>
        S.Struct({ UsageLimits: S.optional(__S(369)), Marker: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "UsageLimitList" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          LogDestinationType: S.optional(S.String),
          LogExports: S.optional(__S(83)),
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
      return S.suspend(() => S.Struct({ Cluster: S.optional(__S(87)) }).pipe(ns)).annotate({
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
          LogDestinationType: S.optional(S.String),
          LogExports: S.optional(__S(83)),
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
      return S.suspend(() => S.Struct({ Cluster: S.optional(__S(87)) }).pipe(ns)).annotate({
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
      return S.suspend(() => S.Struct({ Cluster: S.optional(__S(87)) }).pipe(ns)).annotate({
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
          DbGroups: S.optional(__S(380)),
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
        S.Struct({ ClusterIds: S.optional(__S(385)) }).pipe(
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
          ActionType: S.optional(S.String),
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
          SourceReservedNode: S.optional(__S(3)),
          TargetReservedNodeCount: S.optional(S.Number),
          TargetReservedNodeOffering: S.optional(__S(340)),
        }),
      ).annotate({
        identifier: "ReservedNodeConfigurationOption",
      });
    case 6:
      return S.Array(
        /*@__PURE__*/ __S(389)
          .pipe(/*@__PURE__*/ T.XmlName("ReservedNodeConfigurationOption"))
          .annotate({
            identifier: "ReservedNodeConfigurationOption",
          }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          ReservedNodeConfigurationOptionList: S.optional(__S(390)),
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
          ReservedNodeOfferings: S.optional(__S(341)),
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
      return S.suspend(() => S.Struct({ ResourcePolicy: S.optional(__S(395)) }).pipe(ns)).annotate({
        identifier: "GetResourcePolicyResult",
      });
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
          Type: S.optional(S.String),
        }),
      ).annotate({ identifier: "RecommendedAction" });
    case 7:
      return S.Array(
        /*@__PURE__*/ __S(398).pipe(/*@__PURE__*/ T.XmlName("RecommendedAction")).annotate({
          identifier: "RecommendedAction",
        }),
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
        /*@__PURE__*/ __S(400).pipe(/*@__PURE__*/ T.XmlName("ReferenceLink")).annotate({
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
          ImpactRanking: S.optional(S.String),
          RecommendationText: S.optional(S.String),
          RecommendedActions: S.optional(__S(399)),
          ReferenceLinks: S.optional(__S(401)),
        }),
      ).annotate({ identifier: "Recommendation" });
    case 3:
      return S.Array(
        /*@__PURE__*/ __S(402).pipe(/*@__PURE__*/ T.XmlName("Recommendation")).annotate({
          identifier: "Recommendation",
        }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          Recommendations: S.optional(__S(403)),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListRecommendationsResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          AquaConfigurationStatus: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ModifyAquaInputMessage" });
    case 6:
      return S.suspend(() =>
        S.Struct({ AquaConfiguration: S.optional(__S(80)) }).pipe(ns),
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
          ClusterSecurityGroups: S.optional(__S(49)),
          VpcSecurityGroupIds: S.optional(__S(50)),
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
      return S.suspend(() => S.Struct({ Cluster: S.optional(__S(87)) }).pipe(ns)).annotate({
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
      return S.suspend(() => S.Struct({ Cluster: S.optional(__S(87)) }).pipe(ns)).annotate({
        identifier: "ModifyClusterDbRevisionResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          AddIamRoles: S.optional(__S(51)),
          RemoveIamRoles: S.optional(__S(51)),
          DefaultIamRoleArn: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyClusterIamRolesMessage",
      });
    case 6:
      return S.suspend(() => S.Struct({ Cluster: S.optional(__S(87)) }).pipe(ns)).annotate({
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
      return S.suspend(() => S.Struct({ Cluster: S.optional(__S(87)) }).pipe(ns)).annotate({
        identifier: "ModifyClusterMaintenanceResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ParameterGroupName: S.optional(S.String),
          Parameters: S.optional(__S(234)),
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
      return S.suspend(() => S.Struct({ Snapshot: S.optional(__S(28)) }).pipe(ns)).annotate({
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
          SubnetIds: S.optional(__S(96)),
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
        S.Struct({ ClusterSubnetGroup: S.optional(__S(104)) }).pipe(ns),
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
          VpcSecurityGroupIds: S.optional(__S(50)),
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
          SourceIds: S.optional(__S(110)),
          EventCategories: S.optional(__S(111)),
          Severity: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyEventSubscriptionMessage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ EventSubscription: S.optional(__S(113)) }).pipe(ns),
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
          LakehouseRegistration: S.optional(S.String),
          CatalogName: S.optional(S.String),
          LakehouseIdcRegistration: S.optional(S.String),
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
        S.Struct({ Qev2IdcApplication: S.optional(__S(127)) }).pipe(ns),
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
          AuthorizedTokenIssuerList: S.optional(__S(131)),
          ServiceIntegrations: S.optional(__S(142)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyRedshiftIdcApplicationMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ RedshiftIdcApplication: S.optional(__S(145)) }).pipe(ns),
      ).annotate({
        identifier: "ModifyRedshiftIdcApplicationResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ScheduledActionName: S.optional(S.String),
          TargetAction: S.optional(__S(150)),
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
      return S.suspend(() => S.Struct({ Cluster: S.optional(__S(87)) }).pipe(ns)).annotate({
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
          ScheduleDefinitions: S.optional(__S(157)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifySnapshotScheduleMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          UsageLimitId: S.optional(S.String),
          Amount: S.optional(S.Number),
          BreachAction: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ModifyUsageLimitMessage" });
    case 2:
      return S.suspend(() => S.Struct({ Cluster: S.optional(__S(87)) }).pipe(ns)).annotate({
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
      return S.suspend(() => S.Struct({ ReservedNode: S.optional(__S(3)) }).pipe(ns)).annotate({
        identifier: "PurchaseReservedNodeOfferingResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.optional(S.String), Policy: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutResourcePolicyMessage" });
    case 6:
      return S.suspend(() => S.Struct({ ResourcePolicy: S.optional(__S(395)) }).pipe(ns)).annotate({
        identifier: "PutResourcePolicyResult",
      });
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
      return S.suspend(() => S.Struct({ Cluster: S.optional(__S(87)) }).pipe(ns)).annotate({
        identifier: "RebootClusterResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          NamespaceIdentifier: S.optional(__S(207)),
          ConsumerIdentifiers: S.optional(__S(208)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RegisterNamespaceInputMessage",
      });
    case 2:
      return S.suspend(() => S.Struct({ Status: S.optional(S.String) }).pipe(ns)).annotate({
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
          Parameters: S.optional(__S(234)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ResetClusterParameterGroupMessage",
      });
    case 5:
      return S.suspend(() => S.Struct({ Cluster: S.optional(__S(87)) }).pipe(ns)).annotate({
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
          ClusterSecurityGroups: S.optional(__S(49)),
          VpcSecurityGroupIds: S.optional(__S(50)),
          PreferredMaintenanceWindow: S.optional(S.String),
          AutomatedSnapshotRetentionPeriod: S.optional(S.Number),
          ManualSnapshotRetentionPeriod: S.optional(S.Number),
          KmsKeyId: S.optional(S.String),
          NodeType: S.optional(S.String),
          EnhancedVpcRouting: S.optional(S.Boolean),
          AdditionalInfo: S.optional(S.String),
          IamRoles: S.optional(__S(51)),
          MaintenanceTrackName: S.optional(S.String),
          SnapshotScheduleIdentifier: S.optional(S.String),
          NumberOfNodes: S.optional(S.Number),
          AvailabilityZoneRelocation: S.optional(S.Boolean),
          AquaConfigurationStatus: S.optional(S.String),
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
      return S.suspend(() => S.Struct({ Cluster: S.optional(__S(87)) }).pipe(ns)).annotate({
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
        S.Struct({ TableRestoreStatus: S.optional(__S(361)) }).pipe(ns),
      ).annotate({
        identifier: "RestoreTableFromClusterSnapshotResult",
      });
    case 2:
      return S.suspend(() => S.Struct({ Cluster: S.optional(__S(87)) }).pipe(ns)).annotate({
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
        S.Struct({ ClusterSecurityGroup: S.optional(__S(18)) }).pipe(ns),
      ).annotate({
        identifier: "RevokeClusterSecurityGroupIngressResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ClusterIdentifier: S.optional(S.String),
          Account: S.optional(S.String),
          VpcIds: S.optional(__S(21)),
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
      return S.suspend(() => S.Struct({ Snapshot: S.optional(__S(28)) }).pipe(ns)).annotate({
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
      return S.suspend(() => S.Struct({ Cluster: S.optional(__S(87)) }).pipe(ns)).annotate({
        identifier: "RotateEncryptionKeyResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          ClusterIdentifier: S.optional(S.String),
          DatabaseName: S.optional(S.String),
          PartnerName: S.optional(S.String),
          Status: S.optional(S.String),
          StatusMessage: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdatePartnerStatusInputMessage",
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
    case 25:
      return __c25(i & 7);
    case 26:
      return __c26(i & 7);
    case 27:
      return __c27(i & 7);
    case 28:
      return __c28(i & 7);
    case 29:
      return __c29(i & 7);
    case 30:
      return __c30(i & 7);
    case 31:
      return __c31(i & 7);
    case 32:
      return __c32(i & 7);
    case 33:
      return __c33(i & 7);
    case 34:
      return __c34(i & 7);
    case 35:
      return __c35(i & 7);
    case 36:
      return __c36(i & 7);
    case 37:
      return __c37(i & 7);
    case 38:
      return __c38(i & 7);
    case 39:
      return __c39(i & 7);
    case 40:
      return __c40(i & 7);
    case 41:
      return __c41(i & 7);
    case 42:
      return __c42(i & 7);
    case 43:
      return __c43(i & 7);
    case 44:
      return __c44(i & 7);
    case 45:
      return __c45(i & 7);
    case 46:
      return __c46(i & 7);
    case 47:
      return __c47(i & 7);
    case 48:
      return __c48(i & 7);
    case 49:
      return __c49(i & 7);
    case 50:
      return __c50(i & 7);
    case 51:
      return __c51(i & 7);
    case 52:
      return __c52(i & 7);
    case 53:
      return __c53(i & 7);
    case 54:
      return __c54(i & 7);
    case 55:
      return __c55(i & 7);
    case 56:
      return __c56(i & 7);
    case 57:
      return __c57(i & 7);
    case 58:
      return __c58(i & 7);
  }
}
