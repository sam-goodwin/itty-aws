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
const ns = /*@__PURE__*/ T.XmlNamespace("http://rds.amazonaws.com/doc/2014-10-31/");
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "Neptune", serviceShapeName: "AmazonRDSv19" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "rds" });
const ver = /*@__PURE__*/ T.ServiceVersion("2014-10-31");
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
              `https://rds-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            if (_.getAttr(PartitionResult, "name") === "aws-us-gov") {
              return e(`https://rds.${Region}.amazonaws.com`);
            }
            return e(`https://rds-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://rds.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://rds.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AuthorizationNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<AuthorizationNotFoundFault>()(
    "AuthorizationNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "AuthorizationNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class CertificateNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<CertificateNotFoundFault>()(
    "CertificateNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "CertificateNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class DBClusterAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<DBClusterAlreadyExistsFault>()(
    "DBClusterAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DBClusterAlreadyExistsFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class DBClusterEndpointAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<DBClusterEndpointAlreadyExistsFault>()(
    "DBClusterEndpointAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "DBClusterEndpointAlreadyExistsFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class DBClusterEndpointNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<DBClusterEndpointNotFoundFault>()(
    "DBClusterEndpointNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "DBClusterEndpointNotFoundFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class DBClusterEndpointQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<DBClusterEndpointQuotaExceededFault>()(
    "DBClusterEndpointQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "DBClusterEndpointQuotaExceededFault",
        httpResponseCode: 403,
      }),
      /*@__PURE__*/ T.HttpError(403),
    ),
  ).pipe(C.withAuthError) {}
export class DBClusterNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<DBClusterNotFoundFault>()(
    "DBClusterNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DBClusterNotFoundFault", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class DBClusterParameterGroupNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<DBClusterParameterGroupNotFoundFault>()(
    "DBClusterParameterGroupNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "DBClusterParameterGroupNotFound",
        httpResponseCode: 404,
      }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class DBClusterQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<DBClusterQuotaExceededFault>()(
    "DBClusterQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DBClusterQuotaExceededFault", httpResponseCode: 403 }),
      /*@__PURE__*/ T.HttpError(403),
    ),
  ).pipe(C.withAuthError) {}
export class DBClusterRoleAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<DBClusterRoleAlreadyExistsFault>()(
    "DBClusterRoleAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DBClusterRoleAlreadyExists", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class DBClusterRoleNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<DBClusterRoleNotFoundFault>()(
    "DBClusterRoleNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DBClusterRoleNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class DBClusterRoleQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<DBClusterRoleQuotaExceededFault>()(
    "DBClusterRoleQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DBClusterRoleQuotaExceeded", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class DBClusterSnapshotAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<DBClusterSnapshotAlreadyExistsFault>()(
    "DBClusterSnapshotAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "DBClusterSnapshotAlreadyExistsFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class DBClusterSnapshotNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<DBClusterSnapshotNotFoundFault>()(
    "DBClusterSnapshotNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "DBClusterSnapshotNotFoundFault",
        httpResponseCode: 404,
      }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class DBInstanceAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<DBInstanceAlreadyExistsFault>()(
    "DBInstanceAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DBInstanceAlreadyExists", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class DBInstanceNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<DBInstanceNotFoundFault>()(
    "DBInstanceNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DBInstanceNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class DBParameterGroupAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<DBParameterGroupAlreadyExistsFault>()(
    "DBParameterGroupAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "DBParameterGroupAlreadyExists",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class DBParameterGroupNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<DBParameterGroupNotFoundFault>()(
    "DBParameterGroupNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DBParameterGroupNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class DBParameterGroupQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<DBParameterGroupQuotaExceededFault>()(
    "DBParameterGroupQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "DBParameterGroupQuotaExceeded",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class DBSecurityGroupNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<DBSecurityGroupNotFoundFault>()(
    "DBSecurityGroupNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DBSecurityGroupNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class DBSnapshotAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<DBSnapshotAlreadyExistsFault>()(
    "DBSnapshotAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DBSnapshotAlreadyExists", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class DBSnapshotNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<DBSnapshotNotFoundFault>()(
    "DBSnapshotNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DBSnapshotNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class DBSubnetGroupAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<DBSubnetGroupAlreadyExistsFault>()(
    "DBSubnetGroupAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DBSubnetGroupAlreadyExists", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class DBSubnetGroupDoesNotCoverEnoughAZs
  extends /*@__PURE__*/ S.TaggedError<DBSubnetGroupDoesNotCoverEnoughAZs>()(
    "DBSubnetGroupDoesNotCoverEnoughAZs",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "DBSubnetGroupDoesNotCoverEnoughAZs",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class DBSubnetGroupNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<DBSubnetGroupNotFoundFault>()(
    "DBSubnetGroupNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DBSubnetGroupNotFoundFault", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class DBSubnetGroupQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<DBSubnetGroupQuotaExceededFault>()(
    "DBSubnetGroupQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DBSubnetGroupQuotaExceeded", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class DBSubnetQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<DBSubnetQuotaExceededFault>()(
    "DBSubnetQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DBSubnetQuotaExceededFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class DBUpgradeDependencyFailureFault
  extends /*@__PURE__*/ S.TaggedError<DBUpgradeDependencyFailureFault>()(
    "DBUpgradeDependencyFailureFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DBUpgradeDependencyFailure", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class DomainNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<DomainNotFoundFault>()(
    "DomainNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "DomainNotFoundFault", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
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
export class GlobalClusterAlreadyExistsFault
  extends /*@__PURE__*/ S.TaggedError<GlobalClusterAlreadyExistsFault>()(
    "GlobalClusterAlreadyExistsFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "GlobalClusterAlreadyExistsFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class GlobalClusterNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<GlobalClusterNotFoundFault>()(
    "GlobalClusterNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "GlobalClusterNotFoundFault", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class GlobalClusterQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<GlobalClusterQuotaExceededFault>()(
    "GlobalClusterQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "GlobalClusterQuotaExceededFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InstanceQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<InstanceQuotaExceededFault>()(
    "InstanceQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InstanceQuotaExceeded", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InsufficientDBClusterCapacityFault
  extends /*@__PURE__*/ S.TaggedError<InsufficientDBClusterCapacityFault>()(
    "InsufficientDBClusterCapacityFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InsufficientDBClusterCapacityFault",
        httpResponseCode: 403,
      }),
      /*@__PURE__*/ T.HttpError(403),
    ),
  ).pipe(C.withAuthError) {}
export class InsufficientDBInstanceCapacityFault
  extends /*@__PURE__*/ S.TaggedError<InsufficientDBInstanceCapacityFault>()(
    "InsufficientDBInstanceCapacityFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InsufficientDBInstanceCapacity",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InsufficientStorageClusterCapacityFault
  extends /*@__PURE__*/ S.TaggedError<InsufficientStorageClusterCapacityFault>()(
    "InsufficientStorageClusterCapacityFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InsufficientStorageClusterCapacity",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidDBClusterEndpointStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidDBClusterEndpointStateFault>()(
    "InvalidDBClusterEndpointStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InvalidDBClusterEndpointStateFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidDBClusterSnapshotStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidDBClusterSnapshotStateFault>()(
    "InvalidDBClusterSnapshotStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InvalidDBClusterSnapshotStateFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidDBClusterStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidDBClusterStateFault>()(
    "InvalidDBClusterStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidDBClusterStateFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidDBInstanceStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidDBInstanceStateFault>()(
    "InvalidDBInstanceStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidDBInstanceState", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidDBParameterGroupStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidDBParameterGroupStateFault>()(
    "InvalidDBParameterGroupStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InvalidDBParameterGroupState",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidDBSecurityGroupStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidDBSecurityGroupStateFault>()(
    "InvalidDBSecurityGroupStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidDBSecurityGroupState", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidDBSnapshotStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidDBSnapshotStateFault>()(
    "InvalidDBSnapshotStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidDBSnapshotState", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidDBSubnetGroupStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidDBSubnetGroupStateFault>()(
    "InvalidDBSubnetGroupStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InvalidDBSubnetGroupStateFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidDBSubnetStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidDBSubnetStateFault>()(
    "InvalidDBSubnetStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidDBSubnetStateFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidEventSubscriptionStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidEventSubscriptionStateFault>()(
    "InvalidEventSubscriptionStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InvalidEventSubscriptionState",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidGlobalClusterStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidGlobalClusterStateFault>()(
    "InvalidGlobalClusterStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InvalidGlobalClusterStateFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidRestoreFault
  extends /*@__PURE__*/ S.TaggedError<InvalidRestoreFault>()(
    "InvalidRestoreFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidRestoreFault", httpResponseCode: 400 }),
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
export class InvalidVPCNetworkStateFault
  extends /*@__PURE__*/ S.TaggedError<InvalidVPCNetworkStateFault>()(
    "InvalidVPCNetworkStateFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidVPCNetworkStateFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class KMSKeyNotAccessibleFault
  extends /*@__PURE__*/ S.TaggedError<KMSKeyNotAccessibleFault>()(
    "KMSKeyNotAccessibleFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "KMSKeyNotAccessibleFault", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class NetworkTypeNotSupportedFault
  extends /*@__PURE__*/ S.TaggedError<NetworkTypeNotSupportedFault>()(
    "NetworkTypeNotSupportedFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "NetworkTypeNotSupported", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class OptionGroupNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<OptionGroupNotFoundFault>()(
    "OptionGroupNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "OptionGroupNotFoundFault", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class ProvisionedIopsNotAvailableInAZFault
  extends /*@__PURE__*/ S.TaggedError<ProvisionedIopsNotAvailableInAZFault>()(
    "ProvisionedIopsNotAvailableInAZFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ProvisionedIopsNotAvailableInAZFault",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
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
export class SharedSnapshotQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<SharedSnapshotQuotaExceededFault>()(
    "SharedSnapshotQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SharedSnapshotQuotaExceeded", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class SnapshotQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<SnapshotQuotaExceededFault>()(
    "SnapshotQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SnapshotQuotaExceeded", httpResponseCode: 400 }),
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
export class StorageQuotaExceededFault
  extends /*@__PURE__*/ S.TaggedError<StorageQuotaExceededFault>()(
    "StorageQuotaExceededFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "StorageQuotaExceeded", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class StorageTypeNotSupportedFault
  extends /*@__PURE__*/ S.TaggedError<StorageTypeNotSupportedFault>()(
    "StorageTypeNotSupportedFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "StorageTypeNotSupported", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
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
export class SubscriptionNotFoundFault
  extends /*@__PURE__*/ S.TaggedError<SubscriptionNotFoundFault>()(
    "SubscriptionNotFoundFault",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SubscriptionNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export interface AddRoleToDBClusterMessage {
  DBClusterIdentifier?: string;
  RoleArn?: string;
  FeatureName?: string;
}
const AddRoleToDBClusterMessage = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<AddRoleToDBClusterMessage>;
export interface AddRoleToDBClusterResponse {}
const AddRoleToDBClusterResponse = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<AddRoleToDBClusterResponse>;
export interface AddSourceIdentifierToSubscriptionMessage {
  SubscriptionName?: string;
  SourceIdentifier?: string;
}
const AddSourceIdentifierToSubscriptionMessage = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<AddSourceIdentifierToSubscriptionMessage>;
export type SourceIdsList = string[];
const SourceIdsList = /*@__PURE__*/ __L.at(__c0, 3);
export type EventCategoriesList = string[];
const EventCategoriesList = /*@__PURE__*/ __L.at(__c0, 4);
export interface EventSubscription {
  CustomerAwsId?: string;
  CustSubscriptionId?: string;
  SnsTopicArn?: string;
  Status?: string;
  SubscriptionCreationTime?: string;
  SourceType?: string;
  SourceIdsList?: string[];
  EventCategoriesList?: string[];
  Enabled?: boolean;
  EventSubscriptionArn?: string;
}
const EventSubscription = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<EventSubscription>;
export interface AddSourceIdentifierToSubscriptionResult {
  EventSubscription?: EventSubscription;
}
const AddSourceIdentifierToSubscriptionResult = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<AddSourceIdentifierToSubscriptionResult>;
export interface Tag {
  Key?: string;
  Value?: string;
}
const Tag = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c1, 0);
export interface AddTagsToResourceMessage {
  ResourceName?: string;
  Tags?: Tag[];
}
const AddTagsToResourceMessage = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<AddTagsToResourceMessage>;
export interface AddTagsToResourceResponse {}
const AddTagsToResourceResponse = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<AddTagsToResourceResponse>;
export interface ApplyPendingMaintenanceActionMessage {
  ResourceIdentifier?: string;
  ApplyAction?: string;
  OptInType?: string;
}
const ApplyPendingMaintenanceActionMessage = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<ApplyPendingMaintenanceActionMessage>;
export interface PendingMaintenanceAction {
  Action?: string;
  AutoAppliedAfterDate?: Date;
  ForcedApplyDate?: Date;
  OptInStatus?: string;
  CurrentApplyDate?: Date;
  Description?: string;
}
const PendingMaintenanceAction = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<PendingMaintenanceAction>;
export type PendingMaintenanceActionDetails = PendingMaintenanceAction[];
const PendingMaintenanceActionDetails = /*@__PURE__*/ __L.at(__c1, 5);
export interface ResourcePendingMaintenanceActions {
  ResourceIdentifier?: string;
  PendingMaintenanceActionDetails?: PendingMaintenanceAction[];
}
const ResourcePendingMaintenanceActions = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<ResourcePendingMaintenanceActions>;
export interface ApplyPendingMaintenanceActionResult {
  ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
}
const ApplyPendingMaintenanceActionResult = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<ApplyPendingMaintenanceActionResult>;
export interface CopyDBClusterParameterGroupMessage {
  SourceDBClusterParameterGroupIdentifier?: string;
  TargetDBClusterParameterGroupIdentifier?: string;
  TargetDBClusterParameterGroupDescription?: string;
  Tags?: Tag[];
}
const CopyDBClusterParameterGroupMessage = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<CopyDBClusterParameterGroupMessage>;
export interface DBClusterParameterGroup {
  DBClusterParameterGroupName?: string;
  DBParameterGroupFamily?: string;
  Description?: string;
  DBClusterParameterGroupArn?: string;
}
const DBClusterParameterGroup = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<DBClusterParameterGroup>;
export interface CopyDBClusterParameterGroupResult {
  DBClusterParameterGroup?: DBClusterParameterGroup;
}
const CopyDBClusterParameterGroupResult = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<CopyDBClusterParameterGroupResult>;
export interface CopyDBClusterSnapshotMessage {
  SourceDBClusterSnapshotIdentifier?: string;
  TargetDBClusterSnapshotIdentifier?: string;
  KmsKeyId?: string;
  PreSignedUrl?: string;
  CopyTags?: boolean;
  Tags?: Tag[];
}
const CopyDBClusterSnapshotMessage = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<CopyDBClusterSnapshotMessage>;
export type AvailabilityZones = string[];
const AvailabilityZones = /*@__PURE__*/ __L.at(__c2, 4);
export interface DBClusterSnapshot {
  AvailabilityZones?: string[];
  DBClusterSnapshotIdentifier?: string;
  DBClusterIdentifier?: string;
  SnapshotCreateTime?: Date;
  Engine?: string;
  AllocatedStorage?: number;
  Status?: string;
  Port?: number;
  VpcId?: string;
  ClusterCreateTime?: Date;
  MasterUsername?: string;
  EngineVersion?: string;
  LicenseModel?: string;
  SnapshotType?: string;
  PercentProgress?: number;
  StorageEncrypted?: boolean;
  KmsKeyId?: string;
  DBClusterSnapshotArn?: string;
  SourceDBClusterSnapshotArn?: string;
  IAMDatabaseAuthenticationEnabled?: boolean;
  StorageType?: string;
}
const DBClusterSnapshot = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<DBClusterSnapshot>;
export interface CopyDBClusterSnapshotResult {
  DBClusterSnapshot?: DBClusterSnapshot;
}
const CopyDBClusterSnapshotResult = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<CopyDBClusterSnapshotResult>;
export interface CopyDBParameterGroupMessage {
  SourceDBParameterGroupIdentifier?: string;
  TargetDBParameterGroupIdentifier?: string;
  TargetDBParameterGroupDescription?: string;
  Tags?: Tag[];
}
const CopyDBParameterGroupMessage = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<CopyDBParameterGroupMessage>;
export interface DBParameterGroup {
  DBParameterGroupName?: string;
  DBParameterGroupFamily?: string;
  Description?: string;
  DBParameterGroupArn?: string;
}
const DBParameterGroup = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<DBParameterGroup>;
export interface CopyDBParameterGroupResult {
  DBParameterGroup?: DBParameterGroup;
}
const CopyDBParameterGroupResult = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<CopyDBParameterGroupResult>;
export type VpcSecurityGroupIdList = string[];
const VpcSecurityGroupIdList = /*@__PURE__*/ __L.at(__c3, 2);
export type LogTypeList = string[];
const LogTypeList = /*@__PURE__*/ __L.at(__c3, 3);
export interface ServerlessV2ScalingConfiguration {
  MinCapacity?: number;
  MaxCapacity?: number;
}
const ServerlessV2ScalingConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<ServerlessV2ScalingConfiguration>;
export type GlobalClusterIdentifier = string;
export interface CreateDBClusterMessage {
  AvailabilityZones?: string[];
  BackupRetentionPeriod?: number;
  CharacterSetName?: string;
  CopyTagsToSnapshot?: boolean;
  DatabaseName?: string;
  DBClusterIdentifier?: string;
  DBClusterParameterGroupName?: string;
  VpcSecurityGroupIds?: string[];
  DBSubnetGroupName?: string;
  Engine?: string;
  EngineVersion?: string;
  Port?: number;
  MasterUsername?: string;
  MasterUserPassword?: string | redacted.Redacted<string>;
  OptionGroupName?: string;
  PreferredBackupWindow?: string;
  PreferredMaintenanceWindow?: string;
  ReplicationSourceIdentifier?: string;
  Tags?: Tag[];
  StorageEncrypted?: boolean;
  KmsKeyId?: string;
  PreSignedUrl?: string;
  EnableIAMDatabaseAuthentication?: boolean;
  EnableCloudwatchLogsExports?: string[];
  DeletionProtection?: boolean;
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
  GlobalClusterIdentifier?: string;
  StorageType?: string;
  NetworkType?: string;
}
const CreateDBClusterMessage = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<CreateDBClusterMessage>;
export interface DBClusterOptionGroupStatus {
  DBClusterOptionGroupName?: string;
  Status?: string;
}
const DBClusterOptionGroupStatus = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<DBClusterOptionGroupStatus>;
export type DBClusterOptionGroupMemberships = DBClusterOptionGroupStatus[];
const DBClusterOptionGroupMemberships = /*@__PURE__*/ __L.at(__c3, 7);
export type ReadReplicaIdentifierList = string[];
const ReadReplicaIdentifierList = /*@__PURE__*/ __L.at(__c4, 0);
export interface DBClusterMember {
  DBInstanceIdentifier?: string;
  IsClusterWriter?: boolean;
  DBClusterParameterGroupStatus?: string;
  PromotionTier?: number;
}
const DBClusterMember = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<DBClusterMember>;
export type DBClusterMemberList = DBClusterMember[];
const DBClusterMemberList = /*@__PURE__*/ __L.at(__c4, 2);
export interface VpcSecurityGroupMembership {
  VpcSecurityGroupId?: string;
  Status?: string;
}
const VpcSecurityGroupMembership = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<VpcSecurityGroupMembership>;
export type VpcSecurityGroupMembershipList = VpcSecurityGroupMembership[];
const VpcSecurityGroupMembershipList = /*@__PURE__*/ __L.at(__c4, 4);
export interface DBClusterRole {
  RoleArn?: string;
  Status?: string;
  FeatureName?: string;
}
const DBClusterRole = /*@__PURE__*/ __L.at(__c4, 5) as any as S.Schema<DBClusterRole>;
export type DBClusterRoles = DBClusterRole[];
const DBClusterRoles = /*@__PURE__*/ __L.at(__c4, 6);
export interface PendingCloudwatchLogsExports {
  LogTypesToEnable?: string[];
  LogTypesToDisable?: string[];
}
const PendingCloudwatchLogsExports = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<PendingCloudwatchLogsExports>;
export interface ClusterPendingModifiedValues {
  PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;
  DBClusterIdentifier?: string;
  IAMDatabaseAuthenticationEnabled?: boolean;
  EngineVersion?: string;
  BackupRetentionPeriod?: number;
  StorageType?: string;
  AllocatedStorage?: number;
  Iops?: number;
  NetworkType?: string;
}
const ClusterPendingModifiedValues = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<ClusterPendingModifiedValues>;
export interface ServerlessV2ScalingConfigurationInfo {
  MinCapacity?: number;
  MaxCapacity?: number;
}
const ServerlessV2ScalingConfigurationInfo = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<ServerlessV2ScalingConfigurationInfo>;
export interface DBCluster {
  AllocatedStorage?: number;
  AvailabilityZones?: string[];
  BackupRetentionPeriod?: number;
  CharacterSetName?: string;
  DatabaseName?: string;
  DBClusterIdentifier?: string;
  DBClusterParameterGroup?: string;
  DBSubnetGroup?: string;
  Status?: string;
  PercentProgress?: string;
  EarliestRestorableTime?: Date;
  Endpoint?: string;
  ReaderEndpoint?: string;
  MultiAZ?: boolean;
  Engine?: string;
  EngineVersion?: string;
  LatestRestorableTime?: Date;
  Port?: number;
  MasterUsername?: string;
  DBClusterOptionGroupMemberships?: DBClusterOptionGroupStatus[];
  PreferredBackupWindow?: string;
  PreferredMaintenanceWindow?: string;
  ReplicationSourceIdentifier?: string;
  ReadReplicaIdentifiers?: string[];
  DBClusterMembers?: DBClusterMember[];
  VpcSecurityGroups?: VpcSecurityGroupMembership[];
  HostedZoneId?: string;
  StorageEncrypted?: boolean;
  KmsKeyId?: string;
  DbClusterResourceId?: string;
  DBClusterArn?: string;
  AssociatedRoles?: DBClusterRole[];
  IAMDatabaseAuthenticationEnabled?: boolean;
  CloneGroupId?: string;
  ClusterCreateTime?: Date;
  CopyTagsToSnapshot?: boolean;
  EnabledCloudwatchLogsExports?: string[];
  PendingModifiedValues?: ClusterPendingModifiedValues;
  DeletionProtection?: boolean;
  CrossAccountClone?: boolean;
  AutomaticRestartTime?: Date;
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfigurationInfo;
  GlobalClusterIdentifier?: string;
  IOOptimizedNextAllowedModificationTime?: Date;
  StorageType?: string;
  NetworkType?: string;
}
const DBCluster = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<DBCluster>;
export interface CreateDBClusterResult {
  DBCluster?: DBCluster;
}
const CreateDBClusterResult = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<CreateDBClusterResult>;
export type StringList = string[];
const StringList = /*@__PURE__*/ __L.at(__c5, 4);
export interface CreateDBClusterEndpointMessage {
  DBClusterIdentifier?: string;
  DBClusterEndpointIdentifier?: string;
  EndpointType?: string;
  StaticMembers?: string[];
  ExcludedMembers?: string[];
  Tags?: Tag[];
}
const CreateDBClusterEndpointMessage = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<CreateDBClusterEndpointMessage>;
export interface CreateDBClusterEndpointOutput {
  DBClusterEndpointIdentifier?: string;
  DBClusterIdentifier?: string;
  DBClusterEndpointResourceIdentifier?: string;
  Endpoint?: string;
  Status?: string;
  EndpointType?: string;
  CustomEndpointType?: string;
  StaticMembers?: string[];
  ExcludedMembers?: string[];
  DBClusterEndpointArn?: string;
}
const CreateDBClusterEndpointOutput = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<CreateDBClusterEndpointOutput>;
export interface CreateDBClusterParameterGroupMessage {
  DBClusterParameterGroupName?: string;
  DBParameterGroupFamily?: string;
  Description?: string;
  Tags?: Tag[];
}
const CreateDBClusterParameterGroupMessage = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<CreateDBClusterParameterGroupMessage>;
export interface CreateDBClusterParameterGroupResult {
  DBClusterParameterGroup?: DBClusterParameterGroup;
}
const CreateDBClusterParameterGroupResult = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<CreateDBClusterParameterGroupResult>;
export interface CreateDBClusterSnapshotMessage {
  DBClusterSnapshotIdentifier?: string;
  DBClusterIdentifier?: string;
  Tags?: Tag[];
}
const CreateDBClusterSnapshotMessage = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<CreateDBClusterSnapshotMessage>;
export interface CreateDBClusterSnapshotResult {
  DBClusterSnapshot?: DBClusterSnapshot;
}
const CreateDBClusterSnapshotResult = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<CreateDBClusterSnapshotResult>;
export type DBSecurityGroupNameList = string[];
const DBSecurityGroupNameList = /*@__PURE__*/ __L.at(__c6, 3);
export type SensitiveString = string | redacted.Redacted<string>;
export interface CreateDBInstanceMessage {
  DBName?: string;
  DBInstanceIdentifier?: string;
  AllocatedStorage?: number;
  DBInstanceClass?: string;
  Engine?: string;
  MasterUsername?: string;
  MasterUserPassword?: string | redacted.Redacted<string>;
  DBSecurityGroups?: string[];
  VpcSecurityGroupIds?: string[];
  AvailabilityZone?: string;
  DBSubnetGroupName?: string;
  PreferredMaintenanceWindow?: string;
  DBParameterGroupName?: string;
  BackupRetentionPeriod?: number;
  PreferredBackupWindow?: string;
  Port?: number;
  MultiAZ?: boolean;
  EngineVersion?: string;
  AutoMinorVersionUpgrade?: boolean;
  LicenseModel?: string;
  Iops?: number;
  OptionGroupName?: string;
  CharacterSetName?: string;
  PubliclyAccessible?: boolean;
  Tags?: Tag[];
  DBClusterIdentifier?: string;
  StorageType?: string;
  TdeCredentialArn?: string;
  TdeCredentialPassword?: string | redacted.Redacted<string>;
  StorageEncrypted?: boolean;
  KmsKeyId?: string;
  Domain?: string;
  CopyTagsToSnapshot?: boolean;
  MonitoringInterval?: number;
  MonitoringRoleArn?: string;
  DomainIAMRoleName?: string;
  PromotionTier?: number;
  Timezone?: string;
  EnableIAMDatabaseAuthentication?: boolean;
  EnablePerformanceInsights?: boolean;
  PerformanceInsightsKMSKeyId?: string;
  EnableCloudwatchLogsExports?: string[];
  DeletionProtection?: boolean;
}
const CreateDBInstanceMessage = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<CreateDBInstanceMessage>;
export interface Endpoint {
  Address?: string;
  Port?: number;
  HostedZoneId?: string;
}
const Endpoint = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<Endpoint>;
export interface DBSecurityGroupMembership {
  DBSecurityGroupName?: string;
  Status?: string;
}
const DBSecurityGroupMembership = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<DBSecurityGroupMembership>;
export type DBSecurityGroupMembershipList = DBSecurityGroupMembership[];
const DBSecurityGroupMembershipList = /*@__PURE__*/ __L.at(__c6, 7);
export interface DBParameterGroupStatus {
  DBParameterGroupName?: string;
  ParameterApplyStatus?: string;
}
const DBParameterGroupStatus = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<DBParameterGroupStatus>;
export type DBParameterGroupStatusList = DBParameterGroupStatus[];
const DBParameterGroupStatusList = /*@__PURE__*/ __L.at(__c7, 1);
export interface AvailabilityZone {
  Name?: string;
}
const AvailabilityZone = /*@__PURE__*/ __L.at(__c7, 2) as any as S.Schema<AvailabilityZone>;
export interface Subnet {
  SubnetIdentifier?: string;
  SubnetAvailabilityZone?: AvailabilityZone;
  SubnetStatus?: string;
}
const Subnet = /*@__PURE__*/ __L.at(__c7, 3) as any as S.Schema<Subnet>;
export type SubnetList = Subnet[];
const SubnetList = /*@__PURE__*/ __L.at(__c7, 4);
export interface DBSubnetGroup {
  DBSubnetGroupName?: string;
  DBSubnetGroupDescription?: string;
  VpcId?: string;
  SubnetGroupStatus?: string;
  Subnets?: Subnet[];
  DBSubnetGroupArn?: string;
  SupportedNetworkTypes?: string[];
}
const DBSubnetGroup = /*@__PURE__*/ __L.at(__c7, 5) as any as S.Schema<DBSubnetGroup>;
export interface PendingModifiedValues {
  DBInstanceClass?: string;
  AllocatedStorage?: number;
  MasterUserPassword?: string | redacted.Redacted<string>;
  Port?: number;
  BackupRetentionPeriod?: number;
  MultiAZ?: boolean;
  EngineVersion?: string;
  LicenseModel?: string;
  Iops?: number;
  DBInstanceIdentifier?: string;
  StorageType?: string;
  CACertificateIdentifier?: string;
  DBSubnetGroupName?: string;
  PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;
}
const PendingModifiedValues = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<PendingModifiedValues>;
export type ReadReplicaDBInstanceIdentifierList = string[];
const ReadReplicaDBInstanceIdentifierList = /*@__PURE__*/ __L.at(__c7, 7);
export type ReadReplicaDBClusterIdentifierList = string[];
const ReadReplicaDBClusterIdentifierList = /*@__PURE__*/ __L.at(__c8, 0);
export interface OptionGroupMembership {
  OptionGroupName?: string;
  Status?: string;
}
const OptionGroupMembership = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<OptionGroupMembership>;
export type OptionGroupMembershipList = OptionGroupMembership[];
const OptionGroupMembershipList = /*@__PURE__*/ __L.at(__c8, 2);
export interface DBInstanceStatusInfo {
  StatusType?: string;
  Normal?: boolean;
  Status?: string;
  Message?: string;
}
const DBInstanceStatusInfo = /*@__PURE__*/ __L.at(__c8, 3) as any as S.Schema<DBInstanceStatusInfo>;
export type DBInstanceStatusInfoList = DBInstanceStatusInfo[];
const DBInstanceStatusInfoList = /*@__PURE__*/ __L.at(__c8, 4);
export interface DomainMembership {
  Domain?: string;
  Status?: string;
  FQDN?: string;
  IAMRoleName?: string;
}
const DomainMembership = /*@__PURE__*/ __L.at(__c8, 5) as any as S.Schema<DomainMembership>;
export type DomainMembershipList = DomainMembership[];
const DomainMembershipList = /*@__PURE__*/ __L.at(__c8, 6);
export interface DBInstance {
  DBInstanceIdentifier?: string;
  DBInstanceClass?: string;
  Engine?: string;
  DBInstanceStatus?: string;
  MasterUsername?: string;
  DBName?: string;
  Endpoint?: Endpoint;
  AllocatedStorage?: number;
  InstanceCreateTime?: Date;
  PreferredBackupWindow?: string;
  BackupRetentionPeriod?: number;
  DBSecurityGroups?: DBSecurityGroupMembership[];
  VpcSecurityGroups?: VpcSecurityGroupMembership[];
  DBParameterGroups?: DBParameterGroupStatus[];
  AvailabilityZone?: string;
  DBSubnetGroup?: DBSubnetGroup;
  PreferredMaintenanceWindow?: string;
  PendingModifiedValues?: PendingModifiedValues;
  LatestRestorableTime?: Date;
  MultiAZ?: boolean;
  EngineVersion?: string;
  AutoMinorVersionUpgrade?: boolean;
  ReadReplicaSourceDBInstanceIdentifier?: string;
  ReadReplicaDBInstanceIdentifiers?: string[];
  ReadReplicaDBClusterIdentifiers?: string[];
  LicenseModel?: string;
  Iops?: number;
  OptionGroupMemberships?: OptionGroupMembership[];
  CharacterSetName?: string;
  SecondaryAvailabilityZone?: string;
  PubliclyAccessible?: boolean;
  StatusInfos?: DBInstanceStatusInfo[];
  StorageType?: string;
  TdeCredentialArn?: string;
  DbInstancePort?: number;
  DBClusterIdentifier?: string;
  StorageEncrypted?: boolean;
  KmsKeyId?: string;
  DbiResourceId?: string;
  CACertificateIdentifier?: string;
  DomainMemberships?: DomainMembership[];
  CopyTagsToSnapshot?: boolean;
  MonitoringInterval?: number;
  EnhancedMonitoringResourceArn?: string;
  MonitoringRoleArn?: string;
  PromotionTier?: number;
  DBInstanceArn?: string;
  Timezone?: string;
  IAMDatabaseAuthenticationEnabled?: boolean;
  PerformanceInsightsEnabled?: boolean;
  PerformanceInsightsKMSKeyId?: string;
  EnabledCloudwatchLogsExports?: string[];
  DeletionProtection?: boolean;
  NetworkType?: string;
}
const DBInstance = /*@__PURE__*/ __L.at(__c8, 7) as any as S.Schema<DBInstance>;
export interface CreateDBInstanceResult {
  DBInstance?: DBInstance;
}
const CreateDBInstanceResult = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<CreateDBInstanceResult>;
export interface CreateDBParameterGroupMessage {
  DBParameterGroupName?: string;
  DBParameterGroupFamily?: string;
  Description?: string;
  Tags?: Tag[];
}
const CreateDBParameterGroupMessage = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<CreateDBParameterGroupMessage>;
export interface CreateDBParameterGroupResult {
  DBParameterGroup?: DBParameterGroup;
}
const CreateDBParameterGroupResult = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<CreateDBParameterGroupResult>;
export type SubnetIdentifierList = string[];
const SubnetIdentifierList = /*@__PURE__*/ __L.at(__c9, 3);
export interface CreateDBSubnetGroupMessage {
  DBSubnetGroupName?: string;
  DBSubnetGroupDescription?: string;
  SubnetIds?: string[];
  Tags?: Tag[];
}
const CreateDBSubnetGroupMessage = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<CreateDBSubnetGroupMessage>;
export interface CreateDBSubnetGroupResult {
  DBSubnetGroup?: DBSubnetGroup;
}
const CreateDBSubnetGroupResult = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<CreateDBSubnetGroupResult>;
export interface CreateEventSubscriptionMessage {
  SubscriptionName?: string;
  SnsTopicArn?: string;
  SourceType?: string;
  EventCategories?: string[];
  SourceIds?: string[];
  Enabled?: boolean;
  Tags?: Tag[];
}
const CreateEventSubscriptionMessage = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<CreateEventSubscriptionMessage>;
export interface CreateEventSubscriptionResult {
  EventSubscription?: EventSubscription;
}
const CreateEventSubscriptionResult = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<CreateEventSubscriptionResult>;
export interface CreateGlobalClusterMessage {
  GlobalClusterIdentifier?: string;
  SourceDBClusterIdentifier?: string;
  Engine?: string;
  EngineVersion?: string;
  DeletionProtection?: boolean;
  DatabaseName?: string;
  Tags?: Tag[];
  StorageEncrypted?: boolean;
}
const CreateGlobalClusterMessage = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<CreateGlobalClusterMessage>;
export type ReadersArnList = string[];
const ReadersArnList = /*@__PURE__*/ __L.at(__c10, 1);
export interface GlobalClusterMember {
  DBClusterArn?: string;
  Readers?: string[];
  IsWriter?: boolean;
}
const GlobalClusterMember = /*@__PURE__*/ __L.at(__c10, 2) as any as S.Schema<GlobalClusterMember>;
export type GlobalClusterMemberList = GlobalClusterMember[];
const GlobalClusterMemberList = /*@__PURE__*/ __L.at(__c10, 3);
export type FailoverStatus = "pending" | "failing-over" | "cancelling" | (string & {});
const FailoverStatus = S.String;

export interface FailoverState {
  Status?: FailoverStatus;
  FromDbClusterArn?: string;
  ToDbClusterArn?: string;
  IsDataLossAllowed?: boolean;
}
const FailoverState = /*@__PURE__*/ __L.at(__c10, 4) as any as S.Schema<FailoverState>;
export interface GlobalCluster {
  GlobalClusterIdentifier?: string;
  GlobalClusterResourceId?: string;
  GlobalClusterArn?: string;
  Status?: string;
  Engine?: string;
  EngineVersion?: string;
  DatabaseName?: string;
  StorageEncrypted?: boolean;
  DeletionProtection?: boolean;
  GlobalClusterMembers?: GlobalClusterMember[];
  FailoverState?: FailoverState;
  TagList?: Tag[];
}
const GlobalCluster = /*@__PURE__*/ __L.at(__c10, 5) as any as S.Schema<GlobalCluster>;
export interface CreateGlobalClusterResult {
  GlobalCluster?: GlobalCluster;
}
const CreateGlobalClusterResult = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<CreateGlobalClusterResult>;
export interface DeleteDBClusterMessage {
  DBClusterIdentifier?: string;
  SkipFinalSnapshot?: boolean;
  FinalDBSnapshotIdentifier?: string;
}
const DeleteDBClusterMessage = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<DeleteDBClusterMessage>;
export interface DeleteDBClusterResult {
  DBCluster?: DBCluster;
}
const DeleteDBClusterResult = /*@__PURE__*/ __L.at(
  __c11,
  0,
) as any as S.Schema<DeleteDBClusterResult>;
export interface DeleteDBClusterEndpointMessage {
  DBClusterEndpointIdentifier?: string;
}
const DeleteDBClusterEndpointMessage = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<DeleteDBClusterEndpointMessage>;
export interface DeleteDBClusterEndpointOutput {
  DBClusterEndpointIdentifier?: string;
  DBClusterIdentifier?: string;
  DBClusterEndpointResourceIdentifier?: string;
  Endpoint?: string;
  Status?: string;
  EndpointType?: string;
  CustomEndpointType?: string;
  StaticMembers?: string[];
  ExcludedMembers?: string[];
  DBClusterEndpointArn?: string;
}
const DeleteDBClusterEndpointOutput = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<DeleteDBClusterEndpointOutput>;
export interface DeleteDBClusterParameterGroupMessage {
  DBClusterParameterGroupName?: string;
}
const DeleteDBClusterParameterGroupMessage = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<DeleteDBClusterParameterGroupMessage>;
export interface DeleteDBClusterParameterGroupResponse {}
const DeleteDBClusterParameterGroupResponse = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<DeleteDBClusterParameterGroupResponse>;
export interface DeleteDBClusterSnapshotMessage {
  DBClusterSnapshotIdentifier?: string;
}
const DeleteDBClusterSnapshotMessage = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<DeleteDBClusterSnapshotMessage>;
export interface DeleteDBClusterSnapshotResult {
  DBClusterSnapshot?: DBClusterSnapshot;
}
const DeleteDBClusterSnapshotResult = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<DeleteDBClusterSnapshotResult>;
export interface DeleteDBInstanceMessage {
  DBInstanceIdentifier?: string;
  SkipFinalSnapshot?: boolean;
  FinalDBSnapshotIdentifier?: string;
}
const DeleteDBInstanceMessage = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<DeleteDBInstanceMessage>;
export interface DeleteDBInstanceResult {
  DBInstance?: DBInstance;
}
const DeleteDBInstanceResult = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<DeleteDBInstanceResult>;
export interface DeleteDBParameterGroupMessage {
  DBParameterGroupName?: string;
}
const DeleteDBParameterGroupMessage = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<DeleteDBParameterGroupMessage>;
export interface DeleteDBParameterGroupResponse {}
const DeleteDBParameterGroupResponse = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<DeleteDBParameterGroupResponse>;
export interface DeleteDBSubnetGroupMessage {
  DBSubnetGroupName?: string;
}
const DeleteDBSubnetGroupMessage = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<DeleteDBSubnetGroupMessage>;
export interface DeleteDBSubnetGroupResponse {}
const DeleteDBSubnetGroupResponse = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<DeleteDBSubnetGroupResponse>;
export interface DeleteEventSubscriptionMessage {
  SubscriptionName?: string;
}
const DeleteEventSubscriptionMessage = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<DeleteEventSubscriptionMessage>;
export interface DeleteEventSubscriptionResult {
  EventSubscription?: EventSubscription;
}
const DeleteEventSubscriptionResult = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<DeleteEventSubscriptionResult>;
export interface DeleteGlobalClusterMessage {
  GlobalClusterIdentifier?: string;
}
const DeleteGlobalClusterMessage = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<DeleteGlobalClusterMessage>;
export interface DeleteGlobalClusterResult {
  GlobalCluster?: GlobalCluster;
}
const DeleteGlobalClusterResult = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<DeleteGlobalClusterResult>;
export type FilterValueList = string[];
const FilterValueList = /*@__PURE__*/ __L.at(__c13, 1);
export interface Filter {
  Name?: string;
  Values?: string[];
}
const Filter = /*@__PURE__*/ __L.at(__c13, 2) as any as S.Schema<Filter>;
export type FilterList = Filter[];
const FilterList = /*@__PURE__*/ __L.at(__c13, 3);
export interface DescribeDBClusterEndpointsMessage {
  DBClusterIdentifier?: string;
  DBClusterEndpointIdentifier?: string;
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
const DescribeDBClusterEndpointsMessage = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<DescribeDBClusterEndpointsMessage>;
export interface DBClusterEndpoint {
  DBClusterEndpointIdentifier?: string;
  DBClusterIdentifier?: string;
  DBClusterEndpointResourceIdentifier?: string;
  Endpoint?: string;
  Status?: string;
  EndpointType?: string;
  CustomEndpointType?: string;
  StaticMembers?: string[];
  ExcludedMembers?: string[];
  DBClusterEndpointArn?: string;
}
const DBClusterEndpoint = /*@__PURE__*/ __L.at(__c13, 5) as any as S.Schema<DBClusterEndpoint>;
export type DBClusterEndpointList = DBClusterEndpoint[];
const DBClusterEndpointList = /*@__PURE__*/ __L.at(__c13, 6);
export interface DBClusterEndpointMessage {
  Marker?: string;
  DBClusterEndpoints?: DBClusterEndpoint[];
}
const DBClusterEndpointMessage = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<DBClusterEndpointMessage>;
export interface DescribeDBClusterParameterGroupsMessage {
  DBClusterParameterGroupName?: string;
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
const DescribeDBClusterParameterGroupsMessage = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<DescribeDBClusterParameterGroupsMessage>;
export type DBClusterParameterGroupList = DBClusterParameterGroup[];
const DBClusterParameterGroupList = /*@__PURE__*/ __L.at(__c14, 1);
export interface DBClusterParameterGroupsMessage {
  Marker?: string;
  DBClusterParameterGroups?: DBClusterParameterGroup[];
}
const DBClusterParameterGroupsMessage = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<DBClusterParameterGroupsMessage>;
export interface DescribeDBClusterParametersMessage {
  DBClusterParameterGroupName?: string;
  Source?: string;
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
const DescribeDBClusterParametersMessage = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<DescribeDBClusterParametersMessage>;
export type ApplyMethod = "immediate" | "pending-reboot" | (string & {});
const ApplyMethod = S.String;

export interface Parameter {
  ParameterName?: string;
  ParameterValue?: string;
  Description?: string;
  Source?: string;
  ApplyType?: string;
  DataType?: string;
  AllowedValues?: string;
  IsModifiable?: boolean;
  MinimumEngineVersion?: string;
  ApplyMethod?: ApplyMethod;
}
const Parameter = /*@__PURE__*/ __L.at(__c14, 4) as any as S.Schema<Parameter>;
export type ParametersList = Parameter[];
const ParametersList = /*@__PURE__*/ __L.at(__c14, 5);
export interface DBClusterParameterGroupDetails {
  Parameters?: Parameter[];
  Marker?: string;
}
const DBClusterParameterGroupDetails = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<DBClusterParameterGroupDetails>;
export interface DescribeDBClustersMessage {
  DBClusterIdentifier?: string;
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
const DescribeDBClustersMessage = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<DescribeDBClustersMessage>;
export type DBClusterList = DBCluster[];
const DBClusterList = /*@__PURE__*/ __L.at(__c15, 0);
export interface DBClusterMessage {
  Marker?: string;
  DBClusters?: DBCluster[];
}
const DBClusterMessage = /*@__PURE__*/ __L.at(__c15, 1) as any as S.Schema<DBClusterMessage>;
export interface DescribeDBClusterSnapshotAttributesMessage {
  DBClusterSnapshotIdentifier?: string;
}
const DescribeDBClusterSnapshotAttributesMessage = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<DescribeDBClusterSnapshotAttributesMessage>;
export type AttributeValueList = string[];
const AttributeValueList = /*@__PURE__*/ __L.at(__c15, 3);
export interface DBClusterSnapshotAttribute {
  AttributeName?: string;
  AttributeValues?: string[];
}
const DBClusterSnapshotAttribute = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<DBClusterSnapshotAttribute>;
export type DBClusterSnapshotAttributeList = DBClusterSnapshotAttribute[];
const DBClusterSnapshotAttributeList = /*@__PURE__*/ __L.at(__c15, 5);
export interface DBClusterSnapshotAttributesResult {
  DBClusterSnapshotIdentifier?: string;
  DBClusterSnapshotAttributes?: DBClusterSnapshotAttribute[];
}
const DBClusterSnapshotAttributesResult = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<DBClusterSnapshotAttributesResult>;
export interface DescribeDBClusterSnapshotAttributesResult {
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
}
const DescribeDBClusterSnapshotAttributesResult = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<DescribeDBClusterSnapshotAttributesResult>;
export interface DescribeDBClusterSnapshotsMessage {
  DBClusterIdentifier?: string;
  DBClusterSnapshotIdentifier?: string;
  SnapshotType?: string;
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
  IncludeShared?: boolean;
  IncludePublic?: boolean;
}
const DescribeDBClusterSnapshotsMessage = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<DescribeDBClusterSnapshotsMessage>;
export type DBClusterSnapshotList = DBClusterSnapshot[];
const DBClusterSnapshotList = /*@__PURE__*/ __L.at(__c16, 1);
export interface DBClusterSnapshotMessage {
  Marker?: string;
  DBClusterSnapshots?: DBClusterSnapshot[];
}
const DBClusterSnapshotMessage = /*@__PURE__*/ __L.at(
  __c16,
  2,
) as any as S.Schema<DBClusterSnapshotMessage>;
export interface DescribeDBEngineVersionsMessage {
  Engine?: string;
  EngineVersion?: string;
  DBParameterGroupFamily?: string;
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
  DefaultOnly?: boolean;
  ListSupportedCharacterSets?: boolean;
  ListSupportedTimezones?: boolean;
}
const DescribeDBEngineVersionsMessage = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<DescribeDBEngineVersionsMessage>;
export interface CharacterSet {
  CharacterSetName?: string;
  CharacterSetDescription?: string;
}
const CharacterSet = /*@__PURE__*/ __L.at(__c16, 4) as any as S.Schema<CharacterSet>;
export type SupportedCharacterSetsList = CharacterSet[];
const SupportedCharacterSetsList = /*@__PURE__*/ __L.at(__c16, 5);
export interface UpgradeTarget {
  Engine?: string;
  EngineVersion?: string;
  Description?: string;
  AutoUpgrade?: boolean;
  IsMajorVersionUpgrade?: boolean;
  SupportsGlobalDatabases?: boolean;
}
const UpgradeTarget = /*@__PURE__*/ __L.at(__c16, 6) as any as S.Schema<UpgradeTarget>;
export type ValidUpgradeTargetList = UpgradeTarget[];
const ValidUpgradeTargetList = /*@__PURE__*/ __L.at(__c16, 7);
export interface Timezone {
  TimezoneName?: string;
}
const Timezone = /*@__PURE__*/ __L.at(__c17, 0) as any as S.Schema<Timezone>;
export type SupportedTimezonesList = Timezone[];
const SupportedTimezonesList = /*@__PURE__*/ __L.at(__c17, 1);
export interface DBEngineVersion {
  Engine?: string;
  EngineVersion?: string;
  DBParameterGroupFamily?: string;
  DBEngineDescription?: string;
  DBEngineVersionDescription?: string;
  DefaultCharacterSet?: CharacterSet;
  SupportedCharacterSets?: CharacterSet[];
  ValidUpgradeTarget?: UpgradeTarget[];
  SupportedTimezones?: Timezone[];
  ExportableLogTypes?: string[];
  SupportsLogExportsToCloudwatchLogs?: boolean;
  SupportsReadReplica?: boolean;
  SupportsGlobalDatabases?: boolean;
}
const DBEngineVersion = /*@__PURE__*/ __L.at(__c17, 2) as any as S.Schema<DBEngineVersion>;
export type DBEngineVersionList = DBEngineVersion[];
const DBEngineVersionList = /*@__PURE__*/ __L.at(__c17, 3);
export interface DBEngineVersionMessage {
  Marker?: string;
  DBEngineVersions?: DBEngineVersion[];
}
const DBEngineVersionMessage = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<DBEngineVersionMessage>;
export interface DescribeDBInstancesMessage {
  DBInstanceIdentifier?: string;
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
const DescribeDBInstancesMessage = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<DescribeDBInstancesMessage>;
export type DBInstanceList = DBInstance[];
const DBInstanceList = /*@__PURE__*/ __L.at(__c17, 6);
export interface DBInstanceMessage {
  Marker?: string;
  DBInstances?: DBInstance[];
}
const DBInstanceMessage = /*@__PURE__*/ __L.at(__c17, 7) as any as S.Schema<DBInstanceMessage>;
export interface DescribeDBParameterGroupsMessage {
  DBParameterGroupName?: string;
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
const DescribeDBParameterGroupsMessage = /*@__PURE__*/ __L.at(
  __c18,
  0,
) as any as S.Schema<DescribeDBParameterGroupsMessage>;
export type DBParameterGroupList = DBParameterGroup[];
const DBParameterGroupList = /*@__PURE__*/ __L.at(__c18, 1);
export interface DBParameterGroupsMessage {
  Marker?: string;
  DBParameterGroups?: DBParameterGroup[];
}
const DBParameterGroupsMessage = /*@__PURE__*/ __L.at(
  __c18,
  2,
) as any as S.Schema<DBParameterGroupsMessage>;
export interface DescribeDBParametersMessage {
  DBParameterGroupName?: string;
  Source?: string;
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
const DescribeDBParametersMessage = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<DescribeDBParametersMessage>;
export interface DBParameterGroupDetails {
  Parameters?: Parameter[];
  Marker?: string;
}
const DBParameterGroupDetails = /*@__PURE__*/ __L.at(
  __c18,
  4,
) as any as S.Schema<DBParameterGroupDetails>;
export interface DescribeDBSubnetGroupsMessage {
  DBSubnetGroupName?: string;
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
const DescribeDBSubnetGroupsMessage = /*@__PURE__*/ __L.at(
  __c18,
  5,
) as any as S.Schema<DescribeDBSubnetGroupsMessage>;
export type DBSubnetGroups = DBSubnetGroup[];
const DBSubnetGroups = /*@__PURE__*/ __L.at(__c18, 6);
export interface DBSubnetGroupMessage {
  Marker?: string;
  DBSubnetGroups?: DBSubnetGroup[];
}
const DBSubnetGroupMessage = /*@__PURE__*/ __L.at(
  __c18,
  7,
) as any as S.Schema<DBSubnetGroupMessage>;
export interface DescribeEngineDefaultClusterParametersMessage {
  DBParameterGroupFamily?: string;
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
const DescribeEngineDefaultClusterParametersMessage = /*@__PURE__*/ __L.at(
  __c19,
  0,
) as any as S.Schema<DescribeEngineDefaultClusterParametersMessage>;
export interface EngineDefaults {
  DBParameterGroupFamily?: string;
  Marker?: string;
  Parameters?: Parameter[];
}
const EngineDefaults = /*@__PURE__*/ __L.at(__c19, 1) as any as S.Schema<EngineDefaults>;
export interface DescribeEngineDefaultClusterParametersResult {
  EngineDefaults?: EngineDefaults;
}
const DescribeEngineDefaultClusterParametersResult = /*@__PURE__*/ __L.at(
  __c19,
  2,
) as any as S.Schema<DescribeEngineDefaultClusterParametersResult>;
export interface DescribeEngineDefaultParametersMessage {
  DBParameterGroupFamily?: string;
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
const DescribeEngineDefaultParametersMessage = /*@__PURE__*/ __L.at(
  __c19,
  3,
) as any as S.Schema<DescribeEngineDefaultParametersMessage>;
export interface DescribeEngineDefaultParametersResult {
  EngineDefaults?: EngineDefaults;
}
const DescribeEngineDefaultParametersResult = /*@__PURE__*/ __L.at(
  __c19,
  4,
) as any as S.Schema<DescribeEngineDefaultParametersResult>;
export interface DescribeEventCategoriesMessage {
  SourceType?: string;
  Filters?: Filter[];
}
const DescribeEventCategoriesMessage = /*@__PURE__*/ __L.at(
  __c19,
  5,
) as any as S.Schema<DescribeEventCategoriesMessage>;
export interface EventCategoriesMap {
  SourceType?: string;
  EventCategories?: string[];
}
const EventCategoriesMap = /*@__PURE__*/ __L.at(__c19, 6) as any as S.Schema<EventCategoriesMap>;
export type EventCategoriesMapList = EventCategoriesMap[];
const EventCategoriesMapList = /*@__PURE__*/ __L.at(__c19, 7);
export interface EventCategoriesMessage {
  EventCategoriesMapList?: EventCategoriesMap[];
}
const EventCategoriesMessage = /*@__PURE__*/ __L.at(
  __c20,
  0,
) as any as S.Schema<EventCategoriesMessage>;
export type SourceType =
  | "db-instance"
  | "db-parameter-group"
  | "db-security-group"
  | "db-snapshot"
  | "db-cluster"
  | "db-cluster-snapshot"
  | (string & {});
const SourceType = S.String;

export interface DescribeEventsMessage {
  SourceIdentifier?: string;
  SourceType?: SourceType;
  StartTime?: Date;
  EndTime?: Date;
  Duration?: number;
  EventCategories?: string[];
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
const DescribeEventsMessage = /*@__PURE__*/ __L.at(
  __c20,
  1,
) as any as S.Schema<DescribeEventsMessage>;
export interface Event {
  SourceIdentifier?: string;
  SourceType?: SourceType;
  Message?: string;
  EventCategories?: string[];
  Date?: Date;
  SourceArn?: string;
}
const Event = /*@__PURE__*/ __L.at(__c20, 2) as any as S.Schema<Event>;
export type EventList = Event[];
const EventList = /*@__PURE__*/ __L.at(__c20, 3);
export interface EventsMessage {
  Marker?: string;
  Events?: Event[];
}
const EventsMessage = /*@__PURE__*/ __L.at(__c20, 4) as any as S.Schema<EventsMessage>;
export interface DescribeEventSubscriptionsMessage {
  SubscriptionName?: string;
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
const DescribeEventSubscriptionsMessage = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<DescribeEventSubscriptionsMessage>;
export type EventSubscriptionsList = EventSubscription[];
const EventSubscriptionsList = /*@__PURE__*/ __L.at(__c20, 6);
export interface EventSubscriptionsMessage {
  Marker?: string;
  EventSubscriptionsList?: EventSubscription[];
}
const EventSubscriptionsMessage = /*@__PURE__*/ __L.at(
  __c20,
  7,
) as any as S.Schema<EventSubscriptionsMessage>;
export interface DescribeGlobalClustersMessage {
  GlobalClusterIdentifier?: string;
  MaxRecords?: number;
  Marker?: string;
}
const DescribeGlobalClustersMessage = /*@__PURE__*/ __L.at(
  __c21,
  0,
) as any as S.Schema<DescribeGlobalClustersMessage>;
export type GlobalClusterList = GlobalCluster[];
const GlobalClusterList = /*@__PURE__*/ __L.at(__c21, 1);
export interface GlobalClustersMessage {
  Marker?: string;
  GlobalClusters?: GlobalCluster[];
}
const GlobalClustersMessage = /*@__PURE__*/ __L.at(
  __c21,
  2,
) as any as S.Schema<GlobalClustersMessage>;
export interface DescribeOrderableDBInstanceOptionsMessage {
  Engine?: string;
  EngineVersion?: string;
  DBInstanceClass?: string;
  LicenseModel?: string;
  Vpc?: boolean;
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
const DescribeOrderableDBInstanceOptionsMessage = /*@__PURE__*/ __L.at(
  __c21,
  3,
) as any as S.Schema<DescribeOrderableDBInstanceOptionsMessage>;
export type AvailabilityZoneList = AvailabilityZone[];
const AvailabilityZoneList = /*@__PURE__*/ __L.at(__c21, 4);
export interface OrderableDBInstanceOption {
  Engine?: string;
  EngineVersion?: string;
  DBInstanceClass?: string;
  LicenseModel?: string;
  AvailabilityZones?: AvailabilityZone[];
  MultiAZCapable?: boolean;
  ReadReplicaCapable?: boolean;
  Vpc?: boolean;
  SupportsStorageEncryption?: boolean;
  StorageType?: string;
  SupportsIops?: boolean;
  SupportsEnhancedMonitoring?: boolean;
  SupportsIAMDatabaseAuthentication?: boolean;
  SupportsPerformanceInsights?: boolean;
  MinStorageSize?: number;
  MaxStorageSize?: number;
  MinIopsPerDbInstance?: number;
  MaxIopsPerDbInstance?: number;
  MinIopsPerGib?: number;
  MaxIopsPerGib?: number;
  SupportsGlobalDatabases?: boolean;
  SupportedNetworkTypes?: string[];
}
const OrderableDBInstanceOption = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<OrderableDBInstanceOption>;
export type OrderableDBInstanceOptionsList = OrderableDBInstanceOption[];
const OrderableDBInstanceOptionsList = /*@__PURE__*/ __L.at(__c21, 6);
export interface OrderableDBInstanceOptionsMessage {
  OrderableDBInstanceOptions?: OrderableDBInstanceOption[];
  Marker?: string;
}
const OrderableDBInstanceOptionsMessage = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<OrderableDBInstanceOptionsMessage>;
export interface DescribePendingMaintenanceActionsMessage {
  ResourceIdentifier?: string;
  Filters?: Filter[];
  Marker?: string;
  MaxRecords?: number;
}
const DescribePendingMaintenanceActionsMessage = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<DescribePendingMaintenanceActionsMessage>;
export type PendingMaintenanceActions = ResourcePendingMaintenanceActions[];
const PendingMaintenanceActions = /*@__PURE__*/ __L.at(__c22, 1);
export interface PendingMaintenanceActionsMessage {
  PendingMaintenanceActions?: ResourcePendingMaintenanceActions[];
  Marker?: string;
}
const PendingMaintenanceActionsMessage = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<PendingMaintenanceActionsMessage>;
export interface DescribeValidDBInstanceModificationsMessage {
  DBInstanceIdentifier?: string;
}
const DescribeValidDBInstanceModificationsMessage = /*@__PURE__*/ __L.at(
  __c22,
  3,
) as any as S.Schema<DescribeValidDBInstanceModificationsMessage>;
export interface Range {
  From?: number;
  To?: number;
  Step?: number;
}
const Range = /*@__PURE__*/ __L.at(__c22, 4) as any as S.Schema<Range>;
export type RangeList = Range[];
const RangeList = /*@__PURE__*/ __L.at(__c22, 5);
export interface DoubleRange {
  From?: number;
  To?: number;
}
const DoubleRange = /*@__PURE__*/ __L.at(__c22, 6) as any as S.Schema<DoubleRange>;
export type DoubleRangeList = DoubleRange[];
const DoubleRangeList = /*@__PURE__*/ __L.at(__c22, 7);
export interface ValidStorageOptions {
  StorageType?: string;
  StorageSize?: Range[];
  ProvisionedIops?: Range[];
  IopsToStorageRatio?: DoubleRange[];
}
const ValidStorageOptions = /*@__PURE__*/ __L.at(__c23, 0) as any as S.Schema<ValidStorageOptions>;
export type ValidStorageOptionsList = ValidStorageOptions[];
const ValidStorageOptionsList = /*@__PURE__*/ __L.at(__c23, 1);
export interface ValidDBInstanceModificationsMessage {
  Storage?: ValidStorageOptions[];
}
const ValidDBInstanceModificationsMessage = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<ValidDBInstanceModificationsMessage>;
export interface DescribeValidDBInstanceModificationsResult {
  ValidDBInstanceModificationsMessage?: ValidDBInstanceModificationsMessage;
}
const DescribeValidDBInstanceModificationsResult = /*@__PURE__*/ __L.at(
  __c23,
  3,
) as any as S.Schema<DescribeValidDBInstanceModificationsResult>;
export interface FailoverDBClusterMessage {
  DBClusterIdentifier?: string;
  TargetDBInstanceIdentifier?: string;
}
const FailoverDBClusterMessage = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<FailoverDBClusterMessage>;
export interface FailoverDBClusterResult {
  DBCluster?: DBCluster;
}
const FailoverDBClusterResult = /*@__PURE__*/ __L.at(
  __c23,
  5,
) as any as S.Schema<FailoverDBClusterResult>;
export interface FailoverGlobalClusterMessage {
  GlobalClusterIdentifier?: string;
  TargetDbClusterIdentifier?: string;
  AllowDataLoss?: boolean;
  Switchover?: boolean;
}
const FailoverGlobalClusterMessage = /*@__PURE__*/ __L.at(
  __c23,
  6,
) as any as S.Schema<FailoverGlobalClusterMessage>;
export interface FailoverGlobalClusterResult {
  GlobalCluster?: GlobalCluster;
}
const FailoverGlobalClusterResult = /*@__PURE__*/ __L.at(
  __c23,
  7,
) as any as S.Schema<FailoverGlobalClusterResult>;
export interface ListTagsForResourceMessage {
  ResourceName?: string;
  Filters?: Filter[];
}
const ListTagsForResourceMessage = /*@__PURE__*/ __L.at(
  __c24,
  0,
) as any as S.Schema<ListTagsForResourceMessage>;
export interface TagListMessage {
  TagList?: Tag[];
}
const TagListMessage = /*@__PURE__*/ __L.at(__c24, 1) as any as S.Schema<TagListMessage>;
export interface CloudwatchLogsExportConfiguration {
  EnableLogTypes?: string[];
  DisableLogTypes?: string[];
}
const CloudwatchLogsExportConfiguration = /*@__PURE__*/ __L.at(
  __c24,
  2,
) as any as S.Schema<CloudwatchLogsExportConfiguration>;
export interface ModifyDBClusterMessage {
  DBClusterIdentifier?: string;
  NewDBClusterIdentifier?: string;
  ApplyImmediately?: boolean;
  BackupRetentionPeriod?: number;
  DBClusterParameterGroupName?: string;
  VpcSecurityGroupIds?: string[];
  Port?: number;
  MasterUserPassword?: string | redacted.Redacted<string>;
  OptionGroupName?: string;
  PreferredBackupWindow?: string;
  PreferredMaintenanceWindow?: string;
  EnableIAMDatabaseAuthentication?: boolean;
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;
  EngineVersion?: string;
  AllowMajorVersionUpgrade?: boolean;
  DBInstanceParameterGroupName?: string;
  DeletionProtection?: boolean;
  CopyTagsToSnapshot?: boolean;
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
  StorageType?: string;
  NetworkType?: string;
}
const ModifyDBClusterMessage = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<ModifyDBClusterMessage>;
export interface ModifyDBClusterResult {
  DBCluster?: DBCluster;
}
const ModifyDBClusterResult = /*@__PURE__*/ __L.at(
  __c24,
  4,
) as any as S.Schema<ModifyDBClusterResult>;
export interface ModifyDBClusterEndpointMessage {
  DBClusterEndpointIdentifier?: string;
  EndpointType?: string;
  StaticMembers?: string[];
  ExcludedMembers?: string[];
}
const ModifyDBClusterEndpointMessage = /*@__PURE__*/ __L.at(
  __c24,
  5,
) as any as S.Schema<ModifyDBClusterEndpointMessage>;
export interface ModifyDBClusterEndpointOutput {
  DBClusterEndpointIdentifier?: string;
  DBClusterIdentifier?: string;
  DBClusterEndpointResourceIdentifier?: string;
  Endpoint?: string;
  Status?: string;
  EndpointType?: string;
  CustomEndpointType?: string;
  StaticMembers?: string[];
  ExcludedMembers?: string[];
  DBClusterEndpointArn?: string;
}
const ModifyDBClusterEndpointOutput = /*@__PURE__*/ __L.at(
  __c24,
  6,
) as any as S.Schema<ModifyDBClusterEndpointOutput>;
export interface ModifyDBClusterParameterGroupMessage {
  DBClusterParameterGroupName?: string;
  Parameters?: Parameter[];
}
const ModifyDBClusterParameterGroupMessage = /*@__PURE__*/ __L.at(
  __c24,
  7,
) as any as S.Schema<ModifyDBClusterParameterGroupMessage>;
export interface DBClusterParameterGroupNameMessage {
  DBClusterParameterGroupName?: string;
}
const DBClusterParameterGroupNameMessage = /*@__PURE__*/ __L.at(
  __c25,
  0,
) as any as S.Schema<DBClusterParameterGroupNameMessage>;
export interface ModifyDBClusterSnapshotAttributeMessage {
  DBClusterSnapshotIdentifier?: string;
  AttributeName?: string;
  ValuesToAdd?: string[];
  ValuesToRemove?: string[];
}
const ModifyDBClusterSnapshotAttributeMessage = /*@__PURE__*/ __L.at(
  __c25,
  1,
) as any as S.Schema<ModifyDBClusterSnapshotAttributeMessage>;
export interface ModifyDBClusterSnapshotAttributeResult {
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
}
const ModifyDBClusterSnapshotAttributeResult = /*@__PURE__*/ __L.at(
  __c25,
  2,
) as any as S.Schema<ModifyDBClusterSnapshotAttributeResult>;
export interface ModifyDBInstanceMessage {
  DBInstanceIdentifier?: string;
  AllocatedStorage?: number;
  DBInstanceClass?: string;
  DBSubnetGroupName?: string;
  DBSecurityGroups?: string[];
  VpcSecurityGroupIds?: string[];
  ApplyImmediately?: boolean;
  MasterUserPassword?: string | redacted.Redacted<string>;
  DBParameterGroupName?: string;
  BackupRetentionPeriod?: number;
  PreferredBackupWindow?: string;
  PreferredMaintenanceWindow?: string;
  MultiAZ?: boolean;
  EngineVersion?: string;
  AllowMajorVersionUpgrade?: boolean;
  AutoMinorVersionUpgrade?: boolean;
  LicenseModel?: string;
  Iops?: number;
  OptionGroupName?: string;
  NewDBInstanceIdentifier?: string;
  StorageType?: string;
  TdeCredentialArn?: string;
  TdeCredentialPassword?: string | redacted.Redacted<string>;
  CACertificateIdentifier?: string;
  Domain?: string;
  CopyTagsToSnapshot?: boolean;
  MonitoringInterval?: number;
  DBPortNumber?: number;
  PubliclyAccessible?: boolean;
  MonitoringRoleArn?: string;
  DomainIAMRoleName?: string;
  PromotionTier?: number;
  EnableIAMDatabaseAuthentication?: boolean;
  EnablePerformanceInsights?: boolean;
  PerformanceInsightsKMSKeyId?: string;
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;
  DeletionProtection?: boolean;
}
const ModifyDBInstanceMessage = /*@__PURE__*/ __L.at(
  __c25,
  3,
) as any as S.Schema<ModifyDBInstanceMessage>;
export interface ModifyDBInstanceResult {
  DBInstance?: DBInstance;
}
const ModifyDBInstanceResult = /*@__PURE__*/ __L.at(
  __c25,
  4,
) as any as S.Schema<ModifyDBInstanceResult>;
export interface ModifyDBParameterGroupMessage {
  DBParameterGroupName?: string;
  Parameters?: Parameter[];
}
const ModifyDBParameterGroupMessage = /*@__PURE__*/ __L.at(
  __c25,
  5,
) as any as S.Schema<ModifyDBParameterGroupMessage>;
export interface DBParameterGroupNameMessage {
  DBParameterGroupName?: string;
}
const DBParameterGroupNameMessage = /*@__PURE__*/ __L.at(
  __c25,
  6,
) as any as S.Schema<DBParameterGroupNameMessage>;
export interface ModifyDBSubnetGroupMessage {
  DBSubnetGroupName?: string;
  DBSubnetGroupDescription?: string;
  SubnetIds?: string[];
}
const ModifyDBSubnetGroupMessage = /*@__PURE__*/ __L.at(
  __c25,
  7,
) as any as S.Schema<ModifyDBSubnetGroupMessage>;
export interface ModifyDBSubnetGroupResult {
  DBSubnetGroup?: DBSubnetGroup;
}
const ModifyDBSubnetGroupResult = /*@__PURE__*/ __L.at(
  __c26,
  0,
) as any as S.Schema<ModifyDBSubnetGroupResult>;
export interface ModifyEventSubscriptionMessage {
  SubscriptionName?: string;
  SnsTopicArn?: string;
  SourceType?: string;
  EventCategories?: string[];
  Enabled?: boolean;
}
const ModifyEventSubscriptionMessage = /*@__PURE__*/ __L.at(
  __c26,
  1,
) as any as S.Schema<ModifyEventSubscriptionMessage>;
export interface ModifyEventSubscriptionResult {
  EventSubscription?: EventSubscription;
}
const ModifyEventSubscriptionResult = /*@__PURE__*/ __L.at(
  __c26,
  2,
) as any as S.Schema<ModifyEventSubscriptionResult>;
export interface ModifyGlobalClusterMessage {
  GlobalClusterIdentifier?: string;
  NewGlobalClusterIdentifier?: string;
  DeletionProtection?: boolean;
  EngineVersion?: string;
  AllowMajorVersionUpgrade?: boolean;
}
const ModifyGlobalClusterMessage = /*@__PURE__*/ __L.at(
  __c26,
  3,
) as any as S.Schema<ModifyGlobalClusterMessage>;
export interface ModifyGlobalClusterResult {
  GlobalCluster?: GlobalCluster;
}
const ModifyGlobalClusterResult = /*@__PURE__*/ __L.at(
  __c26,
  4,
) as any as S.Schema<ModifyGlobalClusterResult>;
export interface PromoteReadReplicaDBClusterMessage {
  DBClusterIdentifier?: string;
}
const PromoteReadReplicaDBClusterMessage = /*@__PURE__*/ __L.at(
  __c26,
  5,
) as any as S.Schema<PromoteReadReplicaDBClusterMessage>;
export interface PromoteReadReplicaDBClusterResult {
  DBCluster?: DBCluster;
}
const PromoteReadReplicaDBClusterResult = /*@__PURE__*/ __L.at(
  __c26,
  6,
) as any as S.Schema<PromoteReadReplicaDBClusterResult>;
export interface RebootDBInstanceMessage {
  DBInstanceIdentifier?: string;
  ForceFailover?: boolean;
}
const RebootDBInstanceMessage = /*@__PURE__*/ __L.at(
  __c26,
  7,
) as any as S.Schema<RebootDBInstanceMessage>;
export interface RebootDBInstanceResult {
  DBInstance?: DBInstance;
}
const RebootDBInstanceResult = /*@__PURE__*/ __L.at(
  __c27,
  0,
) as any as S.Schema<RebootDBInstanceResult>;
export interface RemoveFromGlobalClusterMessage {
  GlobalClusterIdentifier?: string;
  DbClusterIdentifier?: string;
}
const RemoveFromGlobalClusterMessage = /*@__PURE__*/ __L.at(
  __c27,
  1,
) as any as S.Schema<RemoveFromGlobalClusterMessage>;
export interface RemoveFromGlobalClusterResult {
  GlobalCluster?: GlobalCluster;
}
const RemoveFromGlobalClusterResult = /*@__PURE__*/ __L.at(
  __c27,
  2,
) as any as S.Schema<RemoveFromGlobalClusterResult>;
export interface RemoveRoleFromDBClusterMessage {
  DBClusterIdentifier?: string;
  RoleArn?: string;
  FeatureName?: string;
}
const RemoveRoleFromDBClusterMessage = /*@__PURE__*/ __L.at(
  __c27,
  3,
) as any as S.Schema<RemoveRoleFromDBClusterMessage>;
export interface RemoveRoleFromDBClusterResponse {}
const RemoveRoleFromDBClusterResponse = /*@__PURE__*/ __L.at(
  __c27,
  4,
) as any as S.Schema<RemoveRoleFromDBClusterResponse>;
export interface RemoveSourceIdentifierFromSubscriptionMessage {
  SubscriptionName?: string;
  SourceIdentifier?: string;
}
const RemoveSourceIdentifierFromSubscriptionMessage = /*@__PURE__*/ __L.at(
  __c27,
  5,
) as any as S.Schema<RemoveSourceIdentifierFromSubscriptionMessage>;
export interface RemoveSourceIdentifierFromSubscriptionResult {
  EventSubscription?: EventSubscription;
}
const RemoveSourceIdentifierFromSubscriptionResult = /*@__PURE__*/ __L.at(
  __c27,
  6,
) as any as S.Schema<RemoveSourceIdentifierFromSubscriptionResult>;
export type KeyList = string[];
const KeyList = /*@__PURE__*/ __L.at(__c27, 7);
export interface RemoveTagsFromResourceMessage {
  ResourceName?: string;
  TagKeys?: string[];
}
const RemoveTagsFromResourceMessage = /*@__PURE__*/ __L.at(
  __c28,
  0,
) as any as S.Schema<RemoveTagsFromResourceMessage>;
export interface RemoveTagsFromResourceResponse {}
const RemoveTagsFromResourceResponse = /*@__PURE__*/ __L.at(
  __c28,
  1,
) as any as S.Schema<RemoveTagsFromResourceResponse>;
export interface ResetDBClusterParameterGroupMessage {
  DBClusterParameterGroupName?: string;
  ResetAllParameters?: boolean;
  Parameters?: Parameter[];
}
const ResetDBClusterParameterGroupMessage = /*@__PURE__*/ __L.at(
  __c28,
  2,
) as any as S.Schema<ResetDBClusterParameterGroupMessage>;
export interface ResetDBParameterGroupMessage {
  DBParameterGroupName?: string;
  ResetAllParameters?: boolean;
  Parameters?: Parameter[];
}
const ResetDBParameterGroupMessage = /*@__PURE__*/ __L.at(
  __c28,
  3,
) as any as S.Schema<ResetDBParameterGroupMessage>;
export interface RestoreDBClusterFromSnapshotMessage {
  AvailabilityZones?: string[];
  DBClusterIdentifier?: string;
  SnapshotIdentifier?: string;
  Engine?: string;
  EngineVersion?: string;
  Port?: number;
  DBSubnetGroupName?: string;
  DatabaseName?: string;
  OptionGroupName?: string;
  VpcSecurityGroupIds?: string[];
  Tags?: Tag[];
  KmsKeyId?: string;
  EnableIAMDatabaseAuthentication?: boolean;
  EnableCloudwatchLogsExports?: string[];
  DBClusterParameterGroupName?: string;
  DeletionProtection?: boolean;
  CopyTagsToSnapshot?: boolean;
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
  StorageType?: string;
  NetworkType?: string;
}
const RestoreDBClusterFromSnapshotMessage = /*@__PURE__*/ __L.at(
  __c28,
  4,
) as any as S.Schema<RestoreDBClusterFromSnapshotMessage>;
export interface RestoreDBClusterFromSnapshotResult {
  DBCluster?: DBCluster;
}
const RestoreDBClusterFromSnapshotResult = /*@__PURE__*/ __L.at(
  __c28,
  5,
) as any as S.Schema<RestoreDBClusterFromSnapshotResult>;
export interface RestoreDBClusterToPointInTimeMessage {
  DBClusterIdentifier?: string;
  RestoreType?: string;
  SourceDBClusterIdentifier?: string;
  RestoreToTime?: Date;
  UseLatestRestorableTime?: boolean;
  Port?: number;
  DBSubnetGroupName?: string;
  OptionGroupName?: string;
  VpcSecurityGroupIds?: string[];
  Tags?: Tag[];
  KmsKeyId?: string;
  EnableIAMDatabaseAuthentication?: boolean;
  EnableCloudwatchLogsExports?: string[];
  DBClusterParameterGroupName?: string;
  DeletionProtection?: boolean;
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
  StorageType?: string;
  NetworkType?: string;
}
const RestoreDBClusterToPointInTimeMessage = /*@__PURE__*/ __L.at(
  __c28,
  6,
) as any as S.Schema<RestoreDBClusterToPointInTimeMessage>;
export interface RestoreDBClusterToPointInTimeResult {
  DBCluster?: DBCluster;
}
const RestoreDBClusterToPointInTimeResult = /*@__PURE__*/ __L.at(
  __c28,
  7,
) as any as S.Schema<RestoreDBClusterToPointInTimeResult>;
export interface StartDBClusterMessage {
  DBClusterIdentifier?: string;
}
const StartDBClusterMessage = /*@__PURE__*/ __L.at(
  __c29,
  0,
) as any as S.Schema<StartDBClusterMessage>;
export interface StartDBClusterResult {
  DBCluster?: DBCluster;
}
const StartDBClusterResult = /*@__PURE__*/ __L.at(
  __c29,
  1,
) as any as S.Schema<StartDBClusterResult>;
export interface StopDBClusterMessage {
  DBClusterIdentifier?: string;
}
const StopDBClusterMessage = /*@__PURE__*/ __L.at(
  __c29,
  2,
) as any as S.Schema<StopDBClusterMessage>;
export interface StopDBClusterResult {
  DBCluster?: DBCluster;
}
const StopDBClusterResult = /*@__PURE__*/ __L.at(__c29, 3) as any as S.Schema<StopDBClusterResult>;
export interface SwitchoverGlobalClusterMessage {
  GlobalClusterIdentifier?: string;
  TargetDbClusterIdentifier?: string;
}
const SwitchoverGlobalClusterMessage = /*@__PURE__*/ __L.at(
  __c29,
  4,
) as any as S.Schema<SwitchoverGlobalClusterMessage>;
export interface SwitchoverGlobalClusterResult {
  GlobalCluster?: GlobalCluster;
}
const SwitchoverGlobalClusterResult = /*@__PURE__*/ __L.at(
  __c29,
  5,
) as any as S.Schema<SwitchoverGlobalClusterResult>;
export type ExceptionMessage = string;
export type AddRoleToDBClusterError =
  | DBClusterNotFoundFault
  | DBClusterRoleAlreadyExistsFault
  | DBClusterRoleQuotaExceededFault
  | InvalidDBClusterStateFault
  | CommonErrors;
/**
 * Associates an Identity and Access Management (IAM) role with an
 * Neptune DB cluster.
 */
export const addRoleToDBCluster: API.OperationMethod<
  AddRoleToDBClusterMessage,
  AddRoleToDBClusterResponse,
  AddRoleToDBClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddRoleToDBClusterMessage,
  output: AddRoleToDBClusterResponse,
  errors: [
    DBClusterNotFoundFault,
    DBClusterRoleAlreadyExistsFault,
    DBClusterRoleQuotaExceededFault,
    InvalidDBClusterStateFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddRoleToDBCluster",
}));

export type AddSourceIdentifierToSubscriptionError =
  | SourceNotFoundFault
  | SubscriptionNotFoundFault
  | CommonErrors;
/**
 * Adds a source identifier to an existing event notification subscription.
 */
export const addSourceIdentifierToSubscription: API.OperationMethod<
  AddSourceIdentifierToSubscriptionMessage,
  AddSourceIdentifierToSubscriptionResult,
  AddSourceIdentifierToSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddSourceIdentifierToSubscriptionMessage,
  output: AddSourceIdentifierToSubscriptionResult,
  errors: [SourceNotFoundFault, SubscriptionNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddSourceIdentifierToSubscription",
}));

export type AddTagsToResourceError =
  | DBClusterNotFoundFault
  | DBInstanceNotFoundFault
  | DBSnapshotNotFoundFault
  | CommonErrors;
/**
 * Adds metadata tags to an Amazon Neptune resource. These tags can also be used with cost
 * allocation reporting to track cost associated with Amazon Neptune resources, or used in a
 * Condition statement in an IAM policy for Amazon Neptune.
 */
export const addTagsToResource: API.OperationMethod<
  AddTagsToResourceMessage,
  AddTagsToResourceResponse,
  AddTagsToResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddTagsToResourceMessage,
  output: AddTagsToResourceResponse,
  errors: [DBClusterNotFoundFault, DBInstanceNotFoundFault, DBSnapshotNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddTagsToResource",
}));

export type ApplyPendingMaintenanceActionError = ResourceNotFoundFault | CommonErrors;
/**
 * Applies a pending maintenance action to a resource (for example, to a DB instance).
 */
export const applyPendingMaintenanceAction: API.OperationMethod<
  ApplyPendingMaintenanceActionMessage,
  ApplyPendingMaintenanceActionResult,
  ApplyPendingMaintenanceActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ApplyPendingMaintenanceActionMessage,
  output: ApplyPendingMaintenanceActionResult,
  errors: [ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ApplyPendingMaintenanceAction",
}));

export type CopyDBClusterParameterGroupError =
  | DBParameterGroupAlreadyExistsFault
  | DBParameterGroupNotFoundFault
  | DBParameterGroupQuotaExceededFault
  | CommonErrors;
/**
 * Copies the specified DB cluster parameter group.
 */
export const copyDBClusterParameterGroup: API.OperationMethod<
  CopyDBClusterParameterGroupMessage,
  CopyDBClusterParameterGroupResult,
  CopyDBClusterParameterGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CopyDBClusterParameterGroupMessage,
  output: CopyDBClusterParameterGroupResult,
  errors: [
    DBParameterGroupAlreadyExistsFault,
    DBParameterGroupNotFoundFault,
    DBParameterGroupQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CopyDBClusterParameterGroup",
}));

export type CopyDBClusterSnapshotError =
  | DBClusterSnapshotAlreadyExistsFault
  | DBClusterSnapshotNotFoundFault
  | InvalidDBClusterSnapshotStateFault
  | InvalidDBClusterStateFault
  | KMSKeyNotAccessibleFault
  | SnapshotQuotaExceededFault
  | CommonErrors;
/**
 * Copies a snapshot of a DB cluster.
 *
 * To copy a DB cluster snapshot from a shared manual DB cluster snapshot,
 * `SourceDBClusterSnapshotIdentifier` must be the Amazon Resource Name (ARN) of the
 * shared DB cluster snapshot.
 */
export const copyDBClusterSnapshot: API.OperationMethod<
  CopyDBClusterSnapshotMessage,
  CopyDBClusterSnapshotResult,
  CopyDBClusterSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CopyDBClusterSnapshotMessage,
  output: CopyDBClusterSnapshotResult,
  errors: [
    DBClusterSnapshotAlreadyExistsFault,
    DBClusterSnapshotNotFoundFault,
    InvalidDBClusterSnapshotStateFault,
    InvalidDBClusterStateFault,
    KMSKeyNotAccessibleFault,
    SnapshotQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CopyDBClusterSnapshot",
}));

export type CopyDBParameterGroupError =
  | DBParameterGroupAlreadyExistsFault
  | DBParameterGroupNotFoundFault
  | DBParameterGroupQuotaExceededFault
  | CommonErrors;
/**
 * Copies the specified DB parameter group.
 */
export const copyDBParameterGroup: API.OperationMethod<
  CopyDBParameterGroupMessage,
  CopyDBParameterGroupResult,
  CopyDBParameterGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CopyDBParameterGroupMessage,
  output: CopyDBParameterGroupResult,
  errors: [
    DBParameterGroupAlreadyExistsFault,
    DBParameterGroupNotFoundFault,
    DBParameterGroupQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CopyDBParameterGroup",
}));

export type CreateDBClusterError =
  | DBClusterAlreadyExistsFault
  | DBClusterNotFoundFault
  | DBClusterParameterGroupNotFoundFault
  | DBClusterQuotaExceededFault
  | DBInstanceNotFoundFault
  | DBSubnetGroupDoesNotCoverEnoughAZs
  | DBSubnetGroupNotFoundFault
  | GlobalClusterNotFoundFault
  | InsufficientStorageClusterCapacityFault
  | InvalidDBClusterStateFault
  | InvalidDBInstanceStateFault
  | InvalidDBSubnetGroupStateFault
  | InvalidGlobalClusterStateFault
  | InvalidSubnet
  | InvalidVPCNetworkStateFault
  | KMSKeyNotAccessibleFault
  | NetworkTypeNotSupportedFault
  | StorageQuotaExceededFault
  | CommonErrors;
/**
 * Creates a new Amazon Neptune DB cluster.
 *
 * You can use the `ReplicationSourceIdentifier` parameter to create the DB
 * cluster as a Read Replica of another DB cluster or Amazon Neptune DB instance.
 *
 * Note that when you create a new cluster using `CreateDBCluster` directly,
 * deletion protection is disabled by default (when you create a new production cluster in
 * the console, deletion protection is enabled by default). You can only delete a DB
 * cluster if its `DeletionProtection` field is set to `false`.
 */
export const createDBCluster: API.OperationMethod<
  CreateDBClusterMessage,
  CreateDBClusterResult,
  CreateDBClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDBClusterMessage,
  output: CreateDBClusterResult,
  errors: [
    DBClusterAlreadyExistsFault,
    DBClusterNotFoundFault,
    DBClusterParameterGroupNotFoundFault,
    DBClusterQuotaExceededFault,
    DBInstanceNotFoundFault,
    DBSubnetGroupDoesNotCoverEnoughAZs,
    DBSubnetGroupNotFoundFault,
    GlobalClusterNotFoundFault,
    InsufficientStorageClusterCapacityFault,
    InvalidDBClusterStateFault,
    InvalidDBInstanceStateFault,
    InvalidDBSubnetGroupStateFault,
    InvalidGlobalClusterStateFault,
    InvalidSubnet,
    InvalidVPCNetworkStateFault,
    KMSKeyNotAccessibleFault,
    NetworkTypeNotSupportedFault,
    StorageQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDBCluster",
}));

export type CreateDBClusterEndpointError =
  | DBClusterEndpointAlreadyExistsFault
  | DBClusterEndpointQuotaExceededFault
  | DBClusterNotFoundFault
  | DBInstanceNotFoundFault
  | InvalidDBClusterStateFault
  | InvalidDBInstanceStateFault
  | CommonErrors;
/**
 * Creates a new custom endpoint and associates it with an Amazon Neptune DB cluster.
 */
export const createDBClusterEndpoint: API.OperationMethod<
  CreateDBClusterEndpointMessage,
  CreateDBClusterEndpointOutput,
  CreateDBClusterEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDBClusterEndpointMessage,
  output: CreateDBClusterEndpointOutput,
  errors: [
    DBClusterEndpointAlreadyExistsFault,
    DBClusterEndpointQuotaExceededFault,
    DBClusterNotFoundFault,
    DBInstanceNotFoundFault,
    InvalidDBClusterStateFault,
    InvalidDBInstanceStateFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDBClusterEndpoint",
}));

export type CreateDBClusterParameterGroupError =
  | DBParameterGroupAlreadyExistsFault
  | DBParameterGroupQuotaExceededFault
  | CommonErrors;
/**
 * Creates a new DB cluster parameter group.
 *
 * Parameters in a DB cluster parameter group apply to all of the instances in a DB
 * cluster.
 *
 * A DB cluster parameter group is initially created with the default
 * parameters for the database engine used by instances in the DB cluster.
 * To provide custom values for any of the parameters, you must modify the
 * group after creating it using ModifyDBClusterParameterGroup.
 * Once you've created a DB cluster parameter group, you need to associate it
 * with your DB cluster using ModifyDBCluster.
 * When you associate a new DB cluster parameter group with a running DB cluster,
 * you need to reboot the DB instances in the DB cluster without failover for the
 * new DB cluster parameter group and associated settings to take effect.
 *
 * After you create a DB cluster parameter group, you should wait at least
 * 5 minutes before creating your first DB cluster that uses that DB cluster
 * parameter group as the default parameter group. This allows Amazon Neptune
 * to fully complete the create action before the DB cluster parameter group
 * is used as the default for a new DB cluster. This is especially important for
 * parameters that are critical when creating the default database for a DB
 * cluster, such as the character set for the default database defined by the
 * `character_set_database` parameter. You can use the Parameter
 * Groups option of the Amazon Neptune
 * console or the DescribeDBClusterParameters
 * command to verify that your DB cluster parameter group has been created or modified.
 */
export const createDBClusterParameterGroup: API.OperationMethod<
  CreateDBClusterParameterGroupMessage,
  CreateDBClusterParameterGroupResult,
  CreateDBClusterParameterGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDBClusterParameterGroupMessage,
  output: CreateDBClusterParameterGroupResult,
  errors: [DBParameterGroupAlreadyExistsFault, DBParameterGroupQuotaExceededFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDBClusterParameterGroup",
}));

export type CreateDBClusterSnapshotError =
  | DBClusterNotFoundFault
  | DBClusterSnapshotAlreadyExistsFault
  | InvalidDBClusterSnapshotStateFault
  | InvalidDBClusterStateFault
  | SnapshotQuotaExceededFault
  | CommonErrors;
/**
 * Creates a snapshot of a DB cluster.
 */
export const createDBClusterSnapshot: API.OperationMethod<
  CreateDBClusterSnapshotMessage,
  CreateDBClusterSnapshotResult,
  CreateDBClusterSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDBClusterSnapshotMessage,
  output: CreateDBClusterSnapshotResult,
  errors: [
    DBClusterNotFoundFault,
    DBClusterSnapshotAlreadyExistsFault,
    InvalidDBClusterSnapshotStateFault,
    InvalidDBClusterStateFault,
    SnapshotQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDBClusterSnapshot",
}));

export type CreateDBInstanceError =
  | AuthorizationNotFoundFault
  | DBClusterNotFoundFault
  | DBInstanceAlreadyExistsFault
  | DBParameterGroupNotFoundFault
  | DBSecurityGroupNotFoundFault
  | DBSubnetGroupDoesNotCoverEnoughAZs
  | DBSubnetGroupNotFoundFault
  | DomainNotFoundFault
  | InstanceQuotaExceededFault
  | InsufficientDBInstanceCapacityFault
  | InvalidDBClusterStateFault
  | InvalidSubnet
  | InvalidVPCNetworkStateFault
  | KMSKeyNotAccessibleFault
  | OptionGroupNotFoundFault
  | ProvisionedIopsNotAvailableInAZFault
  | StorageQuotaExceededFault
  | StorageTypeNotSupportedFault
  | CommonErrors;
/**
 * Creates a new DB instance.
 */
export const createDBInstance: API.OperationMethod<
  CreateDBInstanceMessage,
  CreateDBInstanceResult,
  CreateDBInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDBInstanceMessage,
  output: CreateDBInstanceResult,
  errors: [
    AuthorizationNotFoundFault,
    DBClusterNotFoundFault,
    DBInstanceAlreadyExistsFault,
    DBParameterGroupNotFoundFault,
    DBSecurityGroupNotFoundFault,
    DBSubnetGroupDoesNotCoverEnoughAZs,
    DBSubnetGroupNotFoundFault,
    DomainNotFoundFault,
    InstanceQuotaExceededFault,
    InsufficientDBInstanceCapacityFault,
    InvalidDBClusterStateFault,
    InvalidSubnet,
    InvalidVPCNetworkStateFault,
    KMSKeyNotAccessibleFault,
    OptionGroupNotFoundFault,
    ProvisionedIopsNotAvailableInAZFault,
    StorageQuotaExceededFault,
    StorageTypeNotSupportedFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDBInstance",
}));

export type CreateDBParameterGroupError =
  | DBParameterGroupAlreadyExistsFault
  | DBParameterGroupQuotaExceededFault
  | CommonErrors;
/**
 * Creates a new DB parameter group.
 *
 * A DB parameter group is initially created with the default parameters for the database
 * engine used by the DB instance. To provide custom values for any of the parameters, you must
 * modify the group after creating it using *ModifyDBParameterGroup*. Once
 * you've created a DB parameter group, you need to associate it with your DB instance using
 * *ModifyDBInstance*. When you associate a new DB parameter group with a
 * running DB instance, you need to reboot the DB instance without failover for the new DB
 * parameter group and associated settings to take effect.
 *
 * After you create a DB parameter group, you should wait at least 5 minutes before
 * creating your first DB instance that uses that DB parameter group as the default parameter
 * group. This allows Amazon Neptune to fully complete the create action before the parameter
 * group is used as the default for a new DB instance. This is especially important for
 * parameters that are critical when creating the default database for a DB instance, such as
 * the character set for the default database defined by the
 * `character_set_database` parameter. You can use the Parameter
 * Groups option of the Amazon Neptune console or the
 * *DescribeDBParameters* command to verify that your DB parameter group has
 * been created or modified.
 */
export const createDBParameterGroup: API.OperationMethod<
  CreateDBParameterGroupMessage,
  CreateDBParameterGroupResult,
  CreateDBParameterGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDBParameterGroupMessage,
  output: CreateDBParameterGroupResult,
  errors: [DBParameterGroupAlreadyExistsFault, DBParameterGroupQuotaExceededFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDBParameterGroup",
}));

export type CreateDBSubnetGroupError =
  | DBSubnetGroupAlreadyExistsFault
  | DBSubnetGroupDoesNotCoverEnoughAZs
  | DBSubnetGroupQuotaExceededFault
  | DBSubnetQuotaExceededFault
  | InvalidSubnet
  | CommonErrors;
/**
 * Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at
 * least two AZs in the Amazon Region.
 */
export const createDBSubnetGroup: API.OperationMethod<
  CreateDBSubnetGroupMessage,
  CreateDBSubnetGroupResult,
  CreateDBSubnetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDBSubnetGroupMessage,
  output: CreateDBSubnetGroupResult,
  errors: [
    DBSubnetGroupAlreadyExistsFault,
    DBSubnetGroupDoesNotCoverEnoughAZs,
    DBSubnetGroupQuotaExceededFault,
    DBSubnetQuotaExceededFault,
    InvalidSubnet,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDBSubnetGroup",
}));

export type CreateEventSubscriptionError =
  | EventSubscriptionQuotaExceededFault
  | SNSInvalidTopicFault
  | SNSNoAuthorizationFault
  | SNSTopicArnNotFoundFault
  | SourceNotFoundFault
  | SubscriptionAlreadyExistFault
  | SubscriptionCategoryNotFoundFault
  | CommonErrors;
/**
 * Creates an event notification subscription. This action requires a topic ARN (Amazon
 * Resource Name) created by either the Neptune console, the SNS console, or the SNS API. To
 * obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The
 * ARN is displayed in the SNS console.
 *
 * You can specify the type of source (SourceType) you want to be notified of, provide a list
 * of Neptune sources (SourceIds) that triggers the events, and provide a list of event
 * categories (EventCategories) for events you want to be notified of. For example, you can
 * specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories
 * = Availability, Backup.
 *
 * If you specify both the SourceType and SourceIds, such as SourceType = db-instance and
 * SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the
 * specified source. If you specify a SourceType but do not specify a SourceIdentifier, you
 * receive notice of the events for that source type for all your Neptune sources. If you do not
 * specify either the SourceType nor the SourceIdentifier, you are notified of events generated
 * from all Neptune sources belonging to your customer account.
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
    SNSInvalidTopicFault,
    SNSNoAuthorizationFault,
    SNSTopicArnNotFoundFault,
    SourceNotFoundFault,
    SubscriptionAlreadyExistFault,
    SubscriptionCategoryNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEventSubscription",
}));

export type CreateGlobalClusterError =
  | DBClusterNotFoundFault
  | GlobalClusterAlreadyExistsFault
  | GlobalClusterQuotaExceededFault
  | InvalidDBClusterStateFault
  | CommonErrors;
/**
 * Creates a Neptune global database spread across multiple Amazon Regions.
 * The global database contains a single primary cluster with read-write
 * capability, and read-only secondary clusters that receive data from the
 * primary cluster through high-speed replication performed by the Neptune
 * storage subsystem.
 *
 * You can create a global database that is initially empty, and then
 * add a primary cluster and secondary clusters to it, or you can specify
 * an existing Neptune cluster during the create operation to become the
 * primary cluster of the global database.
 */
export const createGlobalCluster: API.OperationMethod<
  CreateGlobalClusterMessage,
  CreateGlobalClusterResult,
  CreateGlobalClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateGlobalClusterMessage,
  output: CreateGlobalClusterResult,
  errors: [
    DBClusterNotFoundFault,
    GlobalClusterAlreadyExistsFault,
    GlobalClusterQuotaExceededFault,
    InvalidDBClusterStateFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateGlobalCluster",
}));

export type DeleteDBClusterError =
  | DBClusterNotFoundFault
  | DBClusterSnapshotAlreadyExistsFault
  | InvalidDBClusterSnapshotStateFault
  | InvalidDBClusterStateFault
  | SnapshotQuotaExceededFault
  | CommonErrors;
/**
 * The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a
 * DB cluster, all automated backups for that DB cluster are deleted and can't be recovered.
 * Manual DB cluster snapshots of the specified DB cluster are not deleted.
 *
 * Note that the DB Cluster cannot be deleted if deletion protection is enabled. To
 * delete it, you must first set its `DeletionProtection` field to
 * `False`.
 */
export const deleteDBCluster: API.OperationMethod<
  DeleteDBClusterMessage,
  DeleteDBClusterResult,
  DeleteDBClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDBClusterMessage,
  output: DeleteDBClusterResult,
  errors: [
    DBClusterNotFoundFault,
    DBClusterSnapshotAlreadyExistsFault,
    InvalidDBClusterSnapshotStateFault,
    InvalidDBClusterStateFault,
    SnapshotQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDBCluster",
}));

export type DeleteDBClusterEndpointError =
  | DBClusterEndpointNotFoundFault
  | InvalidDBClusterEndpointStateFault
  | InvalidDBClusterStateFault
  | CommonErrors;
/**
 * Deletes a custom endpoint and removes it from an Amazon Neptune DB cluster.
 */
export const deleteDBClusterEndpoint: API.OperationMethod<
  DeleteDBClusterEndpointMessage,
  DeleteDBClusterEndpointOutput,
  DeleteDBClusterEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDBClusterEndpointMessage,
  output: DeleteDBClusterEndpointOutput,
  errors: [
    DBClusterEndpointNotFoundFault,
    InvalidDBClusterEndpointStateFault,
    InvalidDBClusterStateFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDBClusterEndpoint",
}));

export type DeleteDBClusterParameterGroupError =
  | DBParameterGroupNotFoundFault
  | InvalidDBParameterGroupStateFault
  | CommonErrors;
/**
 * Deletes a specified DB cluster parameter group. The DB cluster parameter group to be
 * deleted can't be associated with any DB clusters.
 */
export const deleteDBClusterParameterGroup: API.OperationMethod<
  DeleteDBClusterParameterGroupMessage,
  DeleteDBClusterParameterGroupResponse,
  DeleteDBClusterParameterGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDBClusterParameterGroupMessage,
  output: DeleteDBClusterParameterGroupResponse,
  errors: [DBParameterGroupNotFoundFault, InvalidDBParameterGroupStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDBClusterParameterGroup",
}));

export type DeleteDBClusterSnapshotError =
  | DBClusterSnapshotNotFoundFault
  | InvalidDBClusterSnapshotStateFault
  | CommonErrors;
/**
 * Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is
 * terminated.
 *
 * The DB cluster snapshot must be in the `available` state to be
 * deleted.
 */
export const deleteDBClusterSnapshot: API.OperationMethod<
  DeleteDBClusterSnapshotMessage,
  DeleteDBClusterSnapshotResult,
  DeleteDBClusterSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDBClusterSnapshotMessage,
  output: DeleteDBClusterSnapshotResult,
  errors: [DBClusterSnapshotNotFoundFault, InvalidDBClusterSnapshotStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDBClusterSnapshot",
}));

export type DeleteDBInstanceError =
  | DBInstanceNotFoundFault
  | DBSnapshotAlreadyExistsFault
  | InvalidDBClusterStateFault
  | InvalidDBInstanceStateFault
  | SnapshotQuotaExceededFault
  | CommonErrors;
/**
 * The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete
 * a DB instance, all automated backups for that instance are deleted and can't be recovered.
 * Manual DB snapshots of the DB instance to be deleted by `DeleteDBInstance` are not
 * deleted.
 *
 * If you request a final DB snapshot the status of the Amazon Neptune DB instance is
 * `deleting` until the DB snapshot is created. The API action
 * `DescribeDBInstance` is used to monitor the status of this operation. The action
 * can't be canceled or reverted once submitted.
 *
 * Note that when a DB instance is in a failure state and has a status of
 * `failed`, `incompatible-restore`, or `incompatible-network`,
 * you can only delete it when the `SkipFinalSnapshot` parameter is set to
 * `true`.
 *
 * You can't delete a DB instance if it is the only instance in the DB cluster, or
 * if it has deletion protection enabled.
 */
export const deleteDBInstance: API.OperationMethod<
  DeleteDBInstanceMessage,
  DeleteDBInstanceResult,
  DeleteDBInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDBInstanceMessage,
  output: DeleteDBInstanceResult,
  errors: [
    DBInstanceNotFoundFault,
    DBSnapshotAlreadyExistsFault,
    InvalidDBClusterStateFault,
    InvalidDBInstanceStateFault,
    SnapshotQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDBInstance",
}));

export type DeleteDBParameterGroupError =
  | DBParameterGroupNotFoundFault
  | InvalidDBParameterGroupStateFault
  | CommonErrors;
/**
 * Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be
 * associated with any DB instances.
 */
export const deleteDBParameterGroup: API.OperationMethod<
  DeleteDBParameterGroupMessage,
  DeleteDBParameterGroupResponse,
  DeleteDBParameterGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDBParameterGroupMessage,
  output: DeleteDBParameterGroupResponse,
  errors: [DBParameterGroupNotFoundFault, InvalidDBParameterGroupStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDBParameterGroup",
}));

export type DeleteDBSubnetGroupError =
  | DBSubnetGroupNotFoundFault
  | InvalidDBSubnetGroupStateFault
  | InvalidDBSubnetStateFault
  | CommonErrors;
/**
 * Deletes a DB subnet group.
 *
 * The specified database subnet group must not be associated with any DB instances.
 */
export const deleteDBSubnetGroup: API.OperationMethod<
  DeleteDBSubnetGroupMessage,
  DeleteDBSubnetGroupResponse,
  DeleteDBSubnetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDBSubnetGroupMessage,
  output: DeleteDBSubnetGroupResponse,
  errors: [DBSubnetGroupNotFoundFault, InvalidDBSubnetGroupStateFault, InvalidDBSubnetStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDBSubnetGroup",
}));

export type DeleteEventSubscriptionError =
  | InvalidEventSubscriptionStateFault
  | SubscriptionNotFoundFault
  | CommonErrors;
/**
 * Deletes an event notification subscription.
 */
export const deleteEventSubscription: API.OperationMethod<
  DeleteEventSubscriptionMessage,
  DeleteEventSubscriptionResult,
  DeleteEventSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteEventSubscriptionMessage,
  output: DeleteEventSubscriptionResult,
  errors: [InvalidEventSubscriptionStateFault, SubscriptionNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEventSubscription",
}));

export type DeleteGlobalClusterError =
  | GlobalClusterNotFoundFault
  | InvalidGlobalClusterStateFault
  | CommonErrors;
/**
 * Deletes a global database. The primary and all secondary clusters must
 * already be detached or deleted first.
 */
export const deleteGlobalCluster: API.OperationMethod<
  DeleteGlobalClusterMessage,
  DeleteGlobalClusterResult,
  DeleteGlobalClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteGlobalClusterMessage,
  output: DeleteGlobalClusterResult,
  errors: [GlobalClusterNotFoundFault, InvalidGlobalClusterStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteGlobalCluster",
}));

export type DescribeDBClusterEndpointsError = DBClusterNotFoundFault | CommonErrors;
/**
 * Returns information about endpoints for an Amazon Neptune DB cluster.
 *
 * This operation can also return information for Amazon RDS clusters
 * and Amazon DocDB clusters.
 */
export const describeDBClusterEndpoints: API.PaginatedOperationMethod<
  DescribeDBClusterEndpointsMessage,
  DBClusterEndpointMessage,
  DescribeDBClusterEndpointsError,
  Credentials | HttpClient.HttpClient,
  DBClusterEndpoint
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeDBClusterEndpointsMessage,
  output: DBClusterEndpointMessage,
  errors: [DBClusterNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDBClusterEndpoints",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "DBClusterEndpoints",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeDBClusterParameterGroupsError = DBParameterGroupNotFoundFault | CommonErrors;
/**
 * Returns a list of `DBClusterParameterGroup` descriptions. If a
 * `DBClusterParameterGroupName` parameter is specified, the list will contain only
 * the description of the specified DB cluster parameter group.
 */
export const describeDBClusterParameterGroups: API.PaginatedOperationMethod<
  DescribeDBClusterParameterGroupsMessage,
  DBClusterParameterGroupsMessage,
  DescribeDBClusterParameterGroupsError,
  Credentials | HttpClient.HttpClient,
  DBClusterParameterGroup
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeDBClusterParameterGroupsMessage,
  output: DBClusterParameterGroupsMessage,
  errors: [DBParameterGroupNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDBClusterParameterGroups",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "DBClusterParameterGroups",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeDBClusterParametersError = DBParameterGroupNotFoundFault | CommonErrors;
/**
 * Returns the detailed parameter list for a particular DB cluster parameter group.
 */
export const describeDBClusterParameters: API.PaginatedOperationMethod<
  DescribeDBClusterParametersMessage,
  DBClusterParameterGroupDetails,
  DescribeDBClusterParametersError,
  Credentials | HttpClient.HttpClient,
  Parameter
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeDBClusterParametersMessage,
  output: DBClusterParameterGroupDetails,
  errors: [DBParameterGroupNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDBClusterParameters",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Parameters",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeDBClustersError = DBClusterNotFoundFault | CommonErrors;
/**
 * Returns information about provisioned DB clusters, and supports
 * pagination.
 *
 * This operation can also return information for Amazon RDS clusters
 * and Amazon DocDB clusters.
 */
export const describeDBClusters: API.PaginatedOperationMethod<
  DescribeDBClustersMessage,
  DBClusterMessage,
  DescribeDBClustersError,
  Credentials | HttpClient.HttpClient,
  DBCluster
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeDBClustersMessage,
  output: DBClusterMessage,
  errors: [DBClusterNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDBClusters",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "DBClusters",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeDBClusterSnapshotAttributesError =
  | DBClusterSnapshotNotFoundFault
  | CommonErrors;
/**
 * Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster
 * snapshot.
 *
 * When sharing snapshots with other Amazon accounts,
 * `DescribeDBClusterSnapshotAttributes` returns the `restore` attribute
 * and a list of IDs for the Amazon accounts that are authorized to copy or restore the manual DB
 * cluster snapshot. If `all` is included in the list of values for the
 * `restore` attribute, then the manual DB cluster snapshot is public and can be
 * copied or restored by all Amazon accounts.
 *
 * To add or remove access for an Amazon account to copy or restore a manual DB cluster
 * snapshot, or to make the manual DB cluster snapshot public or private, use the ModifyDBClusterSnapshotAttribute API action.
 */
export const describeDBClusterSnapshotAttributes: API.OperationMethod<
  DescribeDBClusterSnapshotAttributesMessage,
  DescribeDBClusterSnapshotAttributesResult,
  DescribeDBClusterSnapshotAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeDBClusterSnapshotAttributesMessage,
  output: DescribeDBClusterSnapshotAttributesResult,
  errors: [DBClusterSnapshotNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDBClusterSnapshotAttributes",
}));

export type DescribeDBClusterSnapshotsError = DBClusterSnapshotNotFoundFault | CommonErrors;
/**
 * Returns information about DB cluster snapshots. This API action supports
 * pagination.
 */
export const describeDBClusterSnapshots: API.PaginatedOperationMethod<
  DescribeDBClusterSnapshotsMessage,
  DBClusterSnapshotMessage,
  DescribeDBClusterSnapshotsError,
  Credentials | HttpClient.HttpClient,
  DBClusterSnapshot
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeDBClusterSnapshotsMessage,
  output: DBClusterSnapshotMessage,
  errors: [DBClusterSnapshotNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDBClusterSnapshots",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "DBClusterSnapshots",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeDBEngineVersionsError = CommonErrors;
/**
 * Returns a list of the available DB engines.
 */
export const describeDBEngineVersions: API.PaginatedOperationMethod<
  DescribeDBEngineVersionsMessage,
  DBEngineVersionMessage,
  DescribeDBEngineVersionsError,
  Credentials | HttpClient.HttpClient,
  DBEngineVersion
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeDBEngineVersionsMessage,
  output: DBEngineVersionMessage,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDBEngineVersions",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "DBEngineVersions",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeDBInstancesError = DBInstanceNotFoundFault | CommonErrors;
/**
 * Returns information about provisioned instances, and supports pagination.
 *
 * This operation can also return information for Amazon RDS instances
 * and Amazon DocDB instances.
 */
export const describeDBInstances: API.PaginatedOperationMethod<
  DescribeDBInstancesMessage,
  DBInstanceMessage,
  DescribeDBInstancesError,
  Credentials | HttpClient.HttpClient,
  DBInstance
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeDBInstancesMessage,
  output: DBInstanceMessage,
  errors: [DBInstanceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDBInstances",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "DBInstances",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeDBParameterGroupsError = DBParameterGroupNotFoundFault | CommonErrors;
/**
 * Returns a list of `DBParameterGroup` descriptions. If a
 * `DBParameterGroupName` is specified, the list will contain only the description of
 * the specified DB parameter group.
 */
export const describeDBParameterGroups: API.PaginatedOperationMethod<
  DescribeDBParameterGroupsMessage,
  DBParameterGroupsMessage,
  DescribeDBParameterGroupsError,
  Credentials | HttpClient.HttpClient,
  DBParameterGroup
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeDBParameterGroupsMessage,
  output: DBParameterGroupsMessage,
  errors: [DBParameterGroupNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDBParameterGroups",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "DBParameterGroups",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeDBParametersError = DBParameterGroupNotFoundFault | CommonErrors;
/**
 * Returns the detailed parameter list for a particular DB parameter group.
 */
export const describeDBParameters: API.PaginatedOperationMethod<
  DescribeDBParametersMessage,
  DBParameterGroupDetails,
  DescribeDBParametersError,
  Credentials | HttpClient.HttpClient,
  Parameter
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeDBParametersMessage,
  output: DBParameterGroupDetails,
  errors: [DBParameterGroupNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDBParameters",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Parameters",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeDBSubnetGroupsError = DBSubnetGroupNotFoundFault | CommonErrors;
/**
 * Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the
 * list will contain only the descriptions of the specified DBSubnetGroup.
 *
 * For an overview of CIDR ranges, go to the Wikipedia Tutorial.
 */
export const describeDBSubnetGroups: API.PaginatedOperationMethod<
  DescribeDBSubnetGroupsMessage,
  DBSubnetGroupMessage,
  DescribeDBSubnetGroupsError,
  Credentials | HttpClient.HttpClient,
  DBSubnetGroup
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeDBSubnetGroupsMessage,
  output: DBSubnetGroupMessage,
  errors: [DBSubnetGroupNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDBSubnetGroups",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "DBSubnetGroups",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeEngineDefaultClusterParametersError = CommonErrors;
/**
 * Returns the default engine and system parameter information for the cluster database
 * engine.
 */
export const describeEngineDefaultClusterParameters: API.OperationMethod<
  DescribeEngineDefaultClusterParametersMessage,
  DescribeEngineDefaultClusterParametersResult,
  DescribeEngineDefaultClusterParametersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeEngineDefaultClusterParametersMessage,
  output: DescribeEngineDefaultClusterParametersResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEngineDefaultClusterParameters",
}));

export type DescribeEngineDefaultParametersError = CommonErrors;
/**
 * Returns the default engine and system parameter information for the specified database
 * engine.
 */
export const describeEngineDefaultParameters: API.PaginatedOperationMethod<
  DescribeEngineDefaultParametersMessage,
  DescribeEngineDefaultParametersResult,
  DescribeEngineDefaultParametersError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeEngineDefaultParametersMessage,
  output: DescribeEngineDefaultParametersResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEngineDefaultParameters",
  pagination: {
    inputToken: "Marker",
    outputToken: "EngineDefaults.Marker",
    items: "EngineDefaults.Parameters",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeEventCategoriesError = CommonErrors;
/**
 * Displays a list of categories for all event source types, or, if specified, for a
 * specified source type.
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
 * Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter
 * groups for the past 14 days. Events specific to a particular DB instance, DB security group,
 * database snapshot, or DB parameter group can be obtained by providing the name as a parameter.
 * By default, the past hour of events are returned.
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

export type DescribeEventSubscriptionsError = SubscriptionNotFoundFault | CommonErrors;
/**
 * Lists all the subscription descriptions for a customer account. The description for a
 * subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID,
 * CreationTime, and Status.
 *
 * If you specify a SubscriptionName, lists the description for that subscription.
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
  errors: [SubscriptionNotFoundFault],
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

export type DescribeGlobalClustersError = GlobalClusterNotFoundFault | CommonErrors;
/**
 * Returns information about Neptune global database clusters. This API
 * supports pagination.
 */
export const describeGlobalClusters: API.PaginatedOperationMethod<
  DescribeGlobalClustersMessage,
  GlobalClustersMessage,
  DescribeGlobalClustersError,
  Credentials | HttpClient.HttpClient,
  GlobalCluster
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeGlobalClustersMessage,
  output: GlobalClustersMessage,
  errors: [GlobalClusterNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeGlobalClusters",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "GlobalClusters",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeOrderableDBInstanceOptionsError = CommonErrors;
/**
 * Returns a list of orderable DB instance options for the specified engine.
 */
export const describeOrderableDBInstanceOptions: API.PaginatedOperationMethod<
  DescribeOrderableDBInstanceOptionsMessage,
  OrderableDBInstanceOptionsMessage,
  DescribeOrderableDBInstanceOptionsError,
  Credentials | HttpClient.HttpClient,
  OrderableDBInstanceOption
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeOrderableDBInstanceOptionsMessage,
  output: OrderableDBInstanceOptionsMessage,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeOrderableDBInstanceOptions",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "OrderableDBInstanceOptions",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribePendingMaintenanceActionsError = ResourceNotFoundFault | CommonErrors;
/**
 * Returns a list of resources (for example, DB instances) that have at least one pending
 * maintenance action.
 */
export const describePendingMaintenanceActions: API.PaginatedOperationMethod<
  DescribePendingMaintenanceActionsMessage,
  PendingMaintenanceActionsMessage,
  DescribePendingMaintenanceActionsError,
  Credentials | HttpClient.HttpClient,
  ResourcePendingMaintenanceActions
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribePendingMaintenanceActionsMessage,
  output: PendingMaintenanceActionsMessage,
  errors: [ResourceNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePendingMaintenanceActions",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "PendingMaintenanceActions",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeValidDBInstanceModificationsError =
  | DBInstanceNotFoundFault
  | InvalidDBInstanceStateFault
  | CommonErrors;
/**
 * You can call DescribeValidDBInstanceModifications
 * to learn what modifications you can make to your DB instance. You can use this
 * information when you call ModifyDBInstance.
 */
export const describeValidDBInstanceModifications: API.OperationMethod<
  DescribeValidDBInstanceModificationsMessage,
  DescribeValidDBInstanceModificationsResult,
  DescribeValidDBInstanceModificationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeValidDBInstanceModificationsMessage,
  output: DescribeValidDBInstanceModificationsResult,
  errors: [DBInstanceNotFoundFault, InvalidDBInstanceStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeValidDBInstanceModifications",
}));

export type FailoverDBClusterError =
  | DBClusterNotFoundFault
  | InvalidDBClusterStateFault
  | InvalidDBInstanceStateFault
  | CommonErrors;
/**
 * Forces a failover for a DB cluster.
 *
 * A failover for a DB cluster promotes one of the Read Replicas (read-only instances) in the
 * DB cluster to be the primary instance (the cluster writer).
 *
 * Amazon Neptune will automatically fail over to a Read Replica, if one exists, when the
 * primary instance fails. You can force a failover when you want to simulate a failure of a
 * primary instance for testing. Because each instance in a DB cluster has its own endpoint
 * address, you will need to clean up and re-establish any existing connections that use those
 * endpoint addresses when the failover is complete.
 */
export const failoverDBCluster: API.OperationMethod<
  FailoverDBClusterMessage,
  FailoverDBClusterResult,
  FailoverDBClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: FailoverDBClusterMessage,
  output: FailoverDBClusterResult,
  errors: [DBClusterNotFoundFault, InvalidDBClusterStateFault, InvalidDBInstanceStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "FailoverDBCluster",
}));

export type FailoverGlobalClusterError =
  | DBClusterNotFoundFault
  | GlobalClusterNotFoundFault
  | InvalidDBClusterStateFault
  | InvalidGlobalClusterStateFault
  | CommonErrors;
/**
 * Initiates the failover process for a Neptune global database.
 *
 * A failover for a Neptune global database promotes one of secondary
 * read-only DB clusters to be the primary DB cluster and demotes the
 * primary DB cluster to being a secondary (read-only) DB cluster. In other
 * words, the role of the current primary DB cluster and the selected
 * target secondary DB cluster are switched. The selected secondary DB cluster
 * assumes full read/write capabilities for the Neptune global database.
 *
 * This action applies **only** to
 * Neptune global databases. This action is only intended for use on healthy
 * Neptune global databases with healthy Neptune DB clusters and no region-wide
 * outages, to test disaster recovery scenarios or to reconfigure the global
 * database topology.
 */
export const failoverGlobalCluster: API.OperationMethod<
  FailoverGlobalClusterMessage,
  FailoverGlobalClusterResult,
  FailoverGlobalClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: FailoverGlobalClusterMessage,
  output: FailoverGlobalClusterResult,
  errors: [
    DBClusterNotFoundFault,
    GlobalClusterNotFoundFault,
    InvalidDBClusterStateFault,
    InvalidGlobalClusterStateFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "FailoverGlobalCluster",
}));

export type ListTagsForResourceError =
  | DBClusterNotFoundFault
  | DBInstanceNotFoundFault
  | DBSnapshotNotFoundFault
  | CommonErrors;
/**
 * Lists all tags on an Amazon Neptune resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceMessage,
  TagListMessage,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceMessage,
  output: TagListMessage,
  errors: [DBClusterNotFoundFault, DBInstanceNotFoundFault, DBSnapshotNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ModifyDBClusterError =
  | DBClusterAlreadyExistsFault
  | DBClusterNotFoundFault
  | DBClusterParameterGroupNotFoundFault
  | DBSubnetGroupNotFoundFault
  | InvalidDBClusterStateFault
  | InvalidDBInstanceStateFault
  | InvalidDBSecurityGroupStateFault
  | InvalidDBSubnetGroupStateFault
  | InvalidSubnet
  | InvalidVPCNetworkStateFault
  | NetworkTypeNotSupportedFault
  | StorageQuotaExceededFault
  | StorageTypeNotSupportedFault
  | CommonErrors;
/**
 * Modify a setting for a DB cluster. You can change one or more database configuration
 * parameters by specifying these parameters and the new values in the request.
 */
export const modifyDBCluster: API.OperationMethod<
  ModifyDBClusterMessage,
  ModifyDBClusterResult,
  ModifyDBClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyDBClusterMessage,
  output: ModifyDBClusterResult,
  errors: [
    DBClusterAlreadyExistsFault,
    DBClusterNotFoundFault,
    DBClusterParameterGroupNotFoundFault,
    DBSubnetGroupNotFoundFault,
    InvalidDBClusterStateFault,
    InvalidDBInstanceStateFault,
    InvalidDBSecurityGroupStateFault,
    InvalidDBSubnetGroupStateFault,
    InvalidSubnet,
    InvalidVPCNetworkStateFault,
    NetworkTypeNotSupportedFault,
    StorageQuotaExceededFault,
    StorageTypeNotSupportedFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyDBCluster",
}));

export type ModifyDBClusterEndpointError =
  | DBClusterEndpointNotFoundFault
  | DBInstanceNotFoundFault
  | InvalidDBClusterEndpointStateFault
  | InvalidDBClusterStateFault
  | InvalidDBInstanceStateFault
  | CommonErrors;
/**
 * Modifies the properties of an endpoint in an Amazon Neptune DB cluster.
 */
export const modifyDBClusterEndpoint: API.OperationMethod<
  ModifyDBClusterEndpointMessage,
  ModifyDBClusterEndpointOutput,
  ModifyDBClusterEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyDBClusterEndpointMessage,
  output: ModifyDBClusterEndpointOutput,
  errors: [
    DBClusterEndpointNotFoundFault,
    DBInstanceNotFoundFault,
    InvalidDBClusterEndpointStateFault,
    InvalidDBClusterStateFault,
    InvalidDBInstanceStateFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyDBClusterEndpoint",
}));

export type ModifyDBClusterParameterGroupError =
  | DBParameterGroupNotFoundFault
  | InvalidDBParameterGroupStateFault
  | CommonErrors;
/**
 * Modifies the parameters of a DB cluster parameter group. To modify more than one
 * parameter, submit a list of the following: `ParameterName`,
 * `ParameterValue`, and `ApplyMethod`. A maximum of 20 parameters can be
 * modified in a single request.
 *
 * Changes to dynamic parameters are applied immediately. Changes to static parameters
 * require a reboot without failover to the DB cluster associated with the parameter group
 * before the change can take effect.
 *
 * After you create a DB cluster parameter group, you should wait at least 5 minutes before
 * creating your first DB cluster that uses that DB cluster parameter group as the default
 * parameter group. This allows Amazon Neptune to fully complete the create action before the
 * parameter group is used as the default for a new DB cluster. This is especially important
 * for parameters that are critical when creating the default database for a DB cluster, such
 * as the character set for the default database defined by the
 * `character_set_database` parameter. You can use the Parameter
 * Groups option of the Amazon Neptune console or the DescribeDBClusterParameters command to verify that your DB cluster parameter
 * group has been created or modified.
 */
export const modifyDBClusterParameterGroup: API.OperationMethod<
  ModifyDBClusterParameterGroupMessage,
  DBClusterParameterGroupNameMessage,
  ModifyDBClusterParameterGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyDBClusterParameterGroupMessage,
  output: DBClusterParameterGroupNameMessage,
  errors: [DBParameterGroupNotFoundFault, InvalidDBParameterGroupStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyDBClusterParameterGroup",
}));

export type ModifyDBClusterSnapshotAttributeError =
  | DBClusterSnapshotNotFoundFault
  | InvalidDBClusterSnapshotStateFault
  | SharedSnapshotQuotaExceededFault
  | CommonErrors;
/**
 * Adds an attribute and values to, or removes an attribute and values from, a manual DB
 * cluster snapshot.
 *
 * To share a manual DB cluster snapshot with other Amazon accounts, specify
 * `restore` as the `AttributeName` and use the `ValuesToAdd`
 * parameter to add a list of IDs of the Amazon accounts that are authorized to restore the manual
 * DB cluster snapshot. Use the value `all` to make the manual DB cluster snapshot
 * public, which means that it can be copied or restored by all Amazon accounts. Do not add the
 * `all` value for any manual DB cluster snapshots that contain private information
 * that you don't want available to all Amazon accounts. If a manual DB cluster snapshot is
 * encrypted, it can be shared, but only by specifying a list of authorized Amazon account IDs for
 * the `ValuesToAdd` parameter. You can't use `all` as a value for that
 * parameter in this case.
 *
 * To view which Amazon accounts have access to copy or restore a manual DB cluster snapshot, or
 * whether a manual DB cluster snapshot public or private, use the DescribeDBClusterSnapshotAttributes API action.
 */
export const modifyDBClusterSnapshotAttribute: API.OperationMethod<
  ModifyDBClusterSnapshotAttributeMessage,
  ModifyDBClusterSnapshotAttributeResult,
  ModifyDBClusterSnapshotAttributeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyDBClusterSnapshotAttributeMessage,
  output: ModifyDBClusterSnapshotAttributeResult,
  errors: [
    DBClusterSnapshotNotFoundFault,
    InvalidDBClusterSnapshotStateFault,
    SharedSnapshotQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyDBClusterSnapshotAttribute",
}));

export type ModifyDBInstanceError =
  | AuthorizationNotFoundFault
  | CertificateNotFoundFault
  | DBInstanceAlreadyExistsFault
  | DBInstanceNotFoundFault
  | DBParameterGroupNotFoundFault
  | DBSecurityGroupNotFoundFault
  | DBUpgradeDependencyFailureFault
  | DomainNotFoundFault
  | InsufficientDBInstanceCapacityFault
  | InvalidDBInstanceStateFault
  | InvalidDBSecurityGroupStateFault
  | InvalidVPCNetworkStateFault
  | OptionGroupNotFoundFault
  | ProvisionedIopsNotAvailableInAZFault
  | StorageQuotaExceededFault
  | StorageTypeNotSupportedFault
  | CommonErrors;
/**
 * Modifies settings for a DB instance. You can change one or more database configuration
 * parameters by specifying these parameters and the new values in the request. To learn what
 * modifications you can make to your DB instance, call DescribeValidDBInstanceModifications before you call ModifyDBInstance.
 */
export const modifyDBInstance: API.OperationMethod<
  ModifyDBInstanceMessage,
  ModifyDBInstanceResult,
  ModifyDBInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyDBInstanceMessage,
  output: ModifyDBInstanceResult,
  errors: [
    AuthorizationNotFoundFault,
    CertificateNotFoundFault,
    DBInstanceAlreadyExistsFault,
    DBInstanceNotFoundFault,
    DBParameterGroupNotFoundFault,
    DBSecurityGroupNotFoundFault,
    DBUpgradeDependencyFailureFault,
    DomainNotFoundFault,
    InsufficientDBInstanceCapacityFault,
    InvalidDBInstanceStateFault,
    InvalidDBSecurityGroupStateFault,
    InvalidVPCNetworkStateFault,
    OptionGroupNotFoundFault,
    ProvisionedIopsNotAvailableInAZFault,
    StorageQuotaExceededFault,
    StorageTypeNotSupportedFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyDBInstance",
}));

export type ModifyDBParameterGroupError =
  | DBParameterGroupNotFoundFault
  | InvalidDBParameterGroupStateFault
  | CommonErrors;
/**
 * Modifies the parameters of a DB parameter group. To modify more than one parameter,
 * submit a list of the following: `ParameterName`, `ParameterValue`, and
 * `ApplyMethod`. A maximum of 20 parameters can be modified in a single request.
 *
 * Changes to dynamic parameters are applied immediately. Changes to static parameters
 * require a reboot without failover to the DB instance associated with the parameter group
 * before the change can take effect.
 *
 * After you modify a DB parameter group, you should wait at least 5 minutes before
 * creating your first DB instance that uses that DB parameter group as the default parameter
 * group. This allows Amazon Neptune to fully complete the modify action before the parameter
 * group is used as the default for a new DB instance. This is especially important for
 * parameters that are critical when creating the default database for a DB instance, such as
 * the character set for the default database defined by the
 * `character_set_database` parameter. You can use the Parameter
 * Groups option of the Amazon Neptune console or the
 * *DescribeDBParameters* command to verify that your DB parameter group has
 * been created or modified.
 */
export const modifyDBParameterGroup: API.OperationMethod<
  ModifyDBParameterGroupMessage,
  DBParameterGroupNameMessage,
  ModifyDBParameterGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyDBParameterGroupMessage,
  output: DBParameterGroupNameMessage,
  errors: [DBParameterGroupNotFoundFault, InvalidDBParameterGroupStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyDBParameterGroup",
}));

export type ModifyDBSubnetGroupError =
  | DBSubnetGroupDoesNotCoverEnoughAZs
  | DBSubnetGroupNotFoundFault
  | DBSubnetQuotaExceededFault
  | InvalidSubnet
  | SubnetAlreadyInUse
  | CommonErrors;
/**
 * Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in
 * at least two AZs in the Amazon Region.
 */
export const modifyDBSubnetGroup: API.OperationMethod<
  ModifyDBSubnetGroupMessage,
  ModifyDBSubnetGroupResult,
  ModifyDBSubnetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyDBSubnetGroupMessage,
  output: ModifyDBSubnetGroupResult,
  errors: [
    DBSubnetGroupDoesNotCoverEnoughAZs,
    DBSubnetGroupNotFoundFault,
    DBSubnetQuotaExceededFault,
    InvalidSubnet,
    SubnetAlreadyInUse,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyDBSubnetGroup",
}));

export type ModifyEventSubscriptionError =
  | EventSubscriptionQuotaExceededFault
  | SNSInvalidTopicFault
  | SNSNoAuthorizationFault
  | SNSTopicArnNotFoundFault
  | SubscriptionCategoryNotFoundFault
  | SubscriptionNotFoundFault
  | CommonErrors;
/**
 * Modifies an existing event notification subscription. Note that you can't modify the
 * source identifiers using this call; to change source identifiers for a subscription, use the
 * AddSourceIdentifierToSubscription and RemoveSourceIdentifierFromSubscription calls.
 *
 * You can see a list of the event categories for a given SourceType
 * by using the **DescribeEventCategories** action.
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
    EventSubscriptionQuotaExceededFault,
    SNSInvalidTopicFault,
    SNSNoAuthorizationFault,
    SNSTopicArnNotFoundFault,
    SubscriptionCategoryNotFoundFault,
    SubscriptionNotFoundFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyEventSubscription",
}));

export type ModifyGlobalClusterError =
  | GlobalClusterAlreadyExistsFault
  | GlobalClusterNotFoundFault
  | InvalidDBClusterStateFault
  | InvalidDBInstanceStateFault
  | InvalidGlobalClusterStateFault
  | CommonErrors;
/**
 * Modify a setting for an Amazon Neptune global cluster. You can change one
 * or more database configuration parameters by specifying these parameters
 * and their new values in the request.
 */
export const modifyGlobalCluster: API.OperationMethod<
  ModifyGlobalClusterMessage,
  ModifyGlobalClusterResult,
  ModifyGlobalClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyGlobalClusterMessage,
  output: ModifyGlobalClusterResult,
  errors: [
    GlobalClusterAlreadyExistsFault,
    GlobalClusterNotFoundFault,
    InvalidDBClusterStateFault,
    InvalidDBInstanceStateFault,
    InvalidGlobalClusterStateFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyGlobalCluster",
}));

export type PromoteReadReplicaDBClusterError =
  | DBClusterNotFoundFault
  | InvalidDBClusterStateFault
  | CommonErrors;
/**
 * Not supported.
 */
export const promoteReadReplicaDBCluster: API.OperationMethod<
  PromoteReadReplicaDBClusterMessage,
  PromoteReadReplicaDBClusterResult,
  PromoteReadReplicaDBClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PromoteReadReplicaDBClusterMessage,
  output: PromoteReadReplicaDBClusterResult,
  errors: [DBClusterNotFoundFault, InvalidDBClusterStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PromoteReadReplicaDBCluster",
}));

export type RebootDBInstanceError =
  | DBInstanceNotFoundFault
  | InvalidDBInstanceStateFault
  | CommonErrors;
/**
 * You might need to reboot your DB instance, usually for maintenance reasons. For example,
 * if you make certain modifications, or if you change the DB parameter group associated with the
 * DB instance, you must reboot the instance for the changes to take effect.
 *
 * Rebooting a DB instance restarts the database engine service. Rebooting a DB instance
 * results in a momentary outage, during which the DB instance status is set to rebooting.
 */
export const rebootDBInstance: API.OperationMethod<
  RebootDBInstanceMessage,
  RebootDBInstanceResult,
  RebootDBInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RebootDBInstanceMessage,
  output: RebootDBInstanceResult,
  errors: [DBInstanceNotFoundFault, InvalidDBInstanceStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RebootDBInstance",
}));

export type RemoveFromGlobalClusterError =
  | DBClusterNotFoundFault
  | GlobalClusterNotFoundFault
  | InvalidGlobalClusterStateFault
  | CommonErrors;
/**
 * Detaches a Neptune DB cluster from a Neptune global database. A secondary
 * cluster becomes a normal standalone cluster with read-write capability
 * instead of being read-only, and no longer receives data from the
 * primary cluster.
 */
export const removeFromGlobalCluster: API.OperationMethod<
  RemoveFromGlobalClusterMessage,
  RemoveFromGlobalClusterResult,
  RemoveFromGlobalClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveFromGlobalClusterMessage,
  output: RemoveFromGlobalClusterResult,
  errors: [DBClusterNotFoundFault, GlobalClusterNotFoundFault, InvalidGlobalClusterStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveFromGlobalCluster",
}));

export type RemoveRoleFromDBClusterError =
  | DBClusterNotFoundFault
  | DBClusterRoleNotFoundFault
  | InvalidDBClusterStateFault
  | CommonErrors;
/**
 * Disassociates an Identity and Access Management (IAM) role from a DB cluster.
 */
export const removeRoleFromDBCluster: API.OperationMethod<
  RemoveRoleFromDBClusterMessage,
  RemoveRoleFromDBClusterResponse,
  RemoveRoleFromDBClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveRoleFromDBClusterMessage,
  output: RemoveRoleFromDBClusterResponse,
  errors: [DBClusterNotFoundFault, DBClusterRoleNotFoundFault, InvalidDBClusterStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveRoleFromDBCluster",
}));

export type RemoveSourceIdentifierFromSubscriptionError =
  | SourceNotFoundFault
  | SubscriptionNotFoundFault
  | CommonErrors;
/**
 * Removes a source identifier from an existing event notification subscription.
 */
export const removeSourceIdentifierFromSubscription: API.OperationMethod<
  RemoveSourceIdentifierFromSubscriptionMessage,
  RemoveSourceIdentifierFromSubscriptionResult,
  RemoveSourceIdentifierFromSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveSourceIdentifierFromSubscriptionMessage,
  output: RemoveSourceIdentifierFromSubscriptionResult,
  errors: [SourceNotFoundFault, SubscriptionNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveSourceIdentifierFromSubscription",
}));

export type RemoveTagsFromResourceError =
  | DBClusterNotFoundFault
  | DBInstanceNotFoundFault
  | DBSnapshotNotFoundFault
  | CommonErrors;
/**
 * Removes metadata tags from an Amazon Neptune resource.
 */
export const removeTagsFromResource: API.OperationMethod<
  RemoveTagsFromResourceMessage,
  RemoveTagsFromResourceResponse,
  RemoveTagsFromResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveTagsFromResourceMessage,
  output: RemoveTagsFromResourceResponse,
  errors: [DBClusterNotFoundFault, DBInstanceNotFoundFault, DBSnapshotNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveTagsFromResource",
}));

export type ResetDBClusterParameterGroupError =
  | DBParameterGroupNotFoundFault
  | InvalidDBParameterGroupStateFault
  | CommonErrors;
/**
 * Modifies the parameters of a DB cluster parameter group to the default value. To reset
 * specific parameters submit a list of the following: `ParameterName` and
 * `ApplyMethod`. To reset the entire DB cluster parameter group, specify the
 * `DBClusterParameterGroupName` and `ResetAllParameters` parameters.
 *
 * When resetting the entire group, dynamic parameters are updated immediately and static
 * parameters are set to `pending-reboot` to take effect on the next DB instance
 * restart or RebootDBInstance request. You must call RebootDBInstance for every DB instance in your DB cluster
 * that you want the updated static parameter to apply to.
 */
export const resetDBClusterParameterGroup: API.OperationMethod<
  ResetDBClusterParameterGroupMessage,
  DBClusterParameterGroupNameMessage,
  ResetDBClusterParameterGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ResetDBClusterParameterGroupMessage,
  output: DBClusterParameterGroupNameMessage,
  errors: [DBParameterGroupNotFoundFault, InvalidDBParameterGroupStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ResetDBClusterParameterGroup",
}));

export type ResetDBParameterGroupError =
  | DBParameterGroupNotFoundFault
  | InvalidDBParameterGroupStateFault
  | CommonErrors;
/**
 * Modifies the parameters of a DB parameter group to the engine/system default value. To
 * reset specific parameters, provide a list of the following: `ParameterName` and
 * `ApplyMethod`. To reset the entire DB parameter group, specify the
 * `DBParameterGroup` name and `ResetAllParameters` parameters. When
 * resetting the entire group, dynamic parameters are updated immediately and static parameters
 * are set to `pending-reboot` to take effect on the next DB instance restart or
 * `RebootDBInstance` request.
 */
export const resetDBParameterGroup: API.OperationMethod<
  ResetDBParameterGroupMessage,
  DBParameterGroupNameMessage,
  ResetDBParameterGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ResetDBParameterGroupMessage,
  output: DBParameterGroupNameMessage,
  errors: [DBParameterGroupNotFoundFault, InvalidDBParameterGroupStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ResetDBParameterGroup",
}));

export type RestoreDBClusterFromSnapshotError =
  | DBClusterAlreadyExistsFault
  | DBClusterParameterGroupNotFoundFault
  | DBClusterQuotaExceededFault
  | DBClusterSnapshotNotFoundFault
  | DBSnapshotNotFoundFault
  | DBSubnetGroupNotFoundFault
  | InsufficientDBClusterCapacityFault
  | InsufficientStorageClusterCapacityFault
  | InvalidDBClusterSnapshotStateFault
  | InvalidDBSnapshotStateFault
  | InvalidRestoreFault
  | InvalidSubnet
  | InvalidVPCNetworkStateFault
  | KMSKeyNotAccessibleFault
  | NetworkTypeNotSupportedFault
  | OptionGroupNotFoundFault
  | StorageQuotaExceededFault
  | CommonErrors;
/**
 * Creates a new DB cluster from a DB snapshot or DB cluster snapshot.
 *
 * If a DB snapshot is specified, the target DB cluster is created from the source DB
 * snapshot with a default configuration and default security group.
 *
 * If a DB cluster snapshot is specified, the target DB cluster is created from the source DB
 * cluster restore point with the same configuration as the original source DB cluster, except
 * that the new DB cluster is created with the default security group.
 */
export const restoreDBClusterFromSnapshot: API.OperationMethod<
  RestoreDBClusterFromSnapshotMessage,
  RestoreDBClusterFromSnapshotResult,
  RestoreDBClusterFromSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RestoreDBClusterFromSnapshotMessage,
  output: RestoreDBClusterFromSnapshotResult,
  errors: [
    DBClusterAlreadyExistsFault,
    DBClusterParameterGroupNotFoundFault,
    DBClusterQuotaExceededFault,
    DBClusterSnapshotNotFoundFault,
    DBSnapshotNotFoundFault,
    DBSubnetGroupNotFoundFault,
    InsufficientDBClusterCapacityFault,
    InsufficientStorageClusterCapacityFault,
    InvalidDBClusterSnapshotStateFault,
    InvalidDBSnapshotStateFault,
    InvalidRestoreFault,
    InvalidSubnet,
    InvalidVPCNetworkStateFault,
    KMSKeyNotAccessibleFault,
    NetworkTypeNotSupportedFault,
    OptionGroupNotFoundFault,
    StorageQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RestoreDBClusterFromSnapshot",
}));

export type RestoreDBClusterToPointInTimeError =
  | DBClusterAlreadyExistsFault
  | DBClusterNotFoundFault
  | DBClusterParameterGroupNotFoundFault
  | DBClusterQuotaExceededFault
  | DBClusterSnapshotNotFoundFault
  | DBSubnetGroupNotFoundFault
  | InsufficientDBClusterCapacityFault
  | InsufficientStorageClusterCapacityFault
  | InvalidDBClusterSnapshotStateFault
  | InvalidDBClusterStateFault
  | InvalidDBSnapshotStateFault
  | InvalidRestoreFault
  | InvalidSubnet
  | InvalidVPCNetworkStateFault
  | KMSKeyNotAccessibleFault
  | NetworkTypeNotSupportedFault
  | OptionGroupNotFoundFault
  | StorageQuotaExceededFault
  | CommonErrors;
/**
 * Restores a DB cluster to an arbitrary point in time. Users can restore to any point in
 * time before `LatestRestorableTime` for up to `BackupRetentionPeriod`
 * days. The target DB cluster is created from the source DB cluster with the same configuration
 * as the original DB cluster, except that the new DB cluster is created with the default DB
 * security group.
 *
 * This action only restores the DB cluster, not the DB instances for that DB cluster. You
 * must invoke the CreateDBInstance action to create DB instances for the
 * restored DB cluster, specifying the identifier of the restored DB cluster in
 * `DBClusterIdentifier`. You can create DB instances only after the
 * `RestoreDBClusterToPointInTime` action has completed and the DB cluster is
 * available.
 */
export const restoreDBClusterToPointInTime: API.OperationMethod<
  RestoreDBClusterToPointInTimeMessage,
  RestoreDBClusterToPointInTimeResult,
  RestoreDBClusterToPointInTimeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RestoreDBClusterToPointInTimeMessage,
  output: RestoreDBClusterToPointInTimeResult,
  errors: [
    DBClusterAlreadyExistsFault,
    DBClusterNotFoundFault,
    DBClusterParameterGroupNotFoundFault,
    DBClusterQuotaExceededFault,
    DBClusterSnapshotNotFoundFault,
    DBSubnetGroupNotFoundFault,
    InsufficientDBClusterCapacityFault,
    InsufficientStorageClusterCapacityFault,
    InvalidDBClusterSnapshotStateFault,
    InvalidDBClusterStateFault,
    InvalidDBSnapshotStateFault,
    InvalidRestoreFault,
    InvalidSubnet,
    InvalidVPCNetworkStateFault,
    KMSKeyNotAccessibleFault,
    NetworkTypeNotSupportedFault,
    OptionGroupNotFoundFault,
    StorageQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RestoreDBClusterToPointInTime",
}));

export type StartDBClusterError =
  | DBClusterNotFoundFault
  | InvalidDBClusterStateFault
  | InvalidDBInstanceStateFault
  | CommonErrors;
/**
 * Starts an Amazon Neptune DB cluster that was stopped using the Amazon
 * console, the Amazon CLI stop-db-cluster command, or the StopDBCluster API.
 */
export const startDBCluster: API.OperationMethod<
  StartDBClusterMessage,
  StartDBClusterResult,
  StartDBClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartDBClusterMessage,
  output: StartDBClusterResult,
  errors: [DBClusterNotFoundFault, InvalidDBClusterStateFault, InvalidDBInstanceStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartDBCluster",
}));

export type StopDBClusterError =
  | DBClusterNotFoundFault
  | InvalidDBClusterStateFault
  | InvalidDBInstanceStateFault
  | CommonErrors;
/**
 * Stops an Amazon Neptune DB cluster. When you stop a DB cluster, Neptune
 * retains the DB cluster's metadata, including its endpoints and DB parameter
 * groups.
 *
 * Neptune also retains the transaction logs so you can do a point-in-time
 * restore if necessary.
 */
export const stopDBCluster: API.OperationMethod<
  StopDBClusterMessage,
  StopDBClusterResult,
  StopDBClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopDBClusterMessage,
  output: StopDBClusterResult,
  errors: [DBClusterNotFoundFault, InvalidDBClusterStateFault, InvalidDBInstanceStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopDBCluster",
}));

export type SwitchoverGlobalClusterError =
  | DBClusterNotFoundFault
  | GlobalClusterNotFoundFault
  | InvalidDBClusterStateFault
  | InvalidGlobalClusterStateFault
  | CommonErrors;
/**
 * Switches over the specified secondary DB cluster to be the new primary DB cluster in the global
 * database cluster. Switchover operations were previously called "managed planned failovers."
 *
 * Promotes the specified secondary cluster to assume full read/write capabilities and demotes the current
 * primary cluster to a secondary (read-only) cluster, maintaining the original replication topology. All secondary
 * clusters are synchronized with the primary at the beginning of the process so the new primary continues operations
 * for the global database without losing any data. Your database is unavailable for a short time while the primary
 * and selected secondary clusters are assuming their new roles.
 *
 * This operation is intended for controlled environments, for operations such as "regional rotation" or
 * to fall back to the original primary after a global database failover.
 */
export const switchoverGlobalCluster: API.OperationMethod<
  SwitchoverGlobalClusterMessage,
  SwitchoverGlobalClusterResult,
  SwitchoverGlobalClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SwitchoverGlobalClusterMessage,
  output: SwitchoverGlobalClusterResult,
  errors: [
    DBClusterNotFoundFault,
    GlobalClusterNotFoundFault,
    InvalidDBClusterStateFault,
    InvalidGlobalClusterStateFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SwitchoverGlobalCluster",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DBClusterIdentifier: S.optional(S.String),
          RoleArn: S.optional(S.String),
          FeatureName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AddRoleToDBClusterMessage",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AddRoleToDBClusterResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SubscriptionName: S.optional(S.String),
          SourceIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AddSourceIdentifierToSubscriptionMessage",
      });
    case 3:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("SourceId")));
    case 4:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("EventCategory")));
    case 5:
      return S.suspend(() =>
        S.Struct({
          CustomerAwsId: S.optional(S.String),
          CustSubscriptionId: S.optional(S.String),
          SnsTopicArn: S.optional(S.String),
          Status: S.optional(S.String),
          SubscriptionCreationTime: S.optional(S.String),
          SourceType: S.optional(S.String),
          SourceIdsList: S.optional(SourceIdsList),
          EventCategoriesList: S.optional(EventCategoriesList),
          Enabled: S.optional(S.Boolean),
          EventSubscriptionArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "EventSubscription" });
    case 6:
      return S.suspend(() =>
        S.Struct({ EventSubscription: S.optional(EventSubscription) }).pipe(ns),
      ).annotate({
        identifier: "AddSourceIdentifierToSubscriptionResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Key: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "Tag" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ Tag.pipe(/*@__PURE__*/ T.XmlName("Tag")).annotate({ identifier: "Tag" }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceName: S.optional(S.String), Tags: S.optional(TagList) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AddTagsToResourceMessage" });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AddTagsToResourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ResourceIdentifier: S.optional(S.String),
          ApplyAction: S.optional(S.String),
          OptInType: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ApplyPendingMaintenanceActionMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(S.String),
          AutoAppliedAfterDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ForcedApplyDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          OptInStatus: S.optional(S.String),
          CurrentApplyDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Description: S.optional(S.String),
        }),
      ).annotate({ identifier: "PendingMaintenanceAction" });
    case 5:
      return S.Array(
        /*@__PURE__*/ PendingMaintenanceAction.pipe(
          /*@__PURE__*/ T.XmlName("PendingMaintenanceAction"),
        ).annotate({
          identifier: "PendingMaintenanceAction",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          ResourceIdentifier: S.optional(S.String),
          PendingMaintenanceActionDetails: S.optional(PendingMaintenanceActionDetails),
        }),
      ).annotate({
        identifier: "ResourcePendingMaintenanceActions",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResourcePendingMaintenanceActions: S.optional(ResourcePendingMaintenanceActions),
        }).pipe(ns),
      ).annotate({
        identifier: "ApplyPendingMaintenanceActionResult",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SourceDBClusterParameterGroupIdentifier: S.optional(S.String),
          TargetDBClusterParameterGroupIdentifier: S.optional(S.String),
          TargetDBClusterParameterGroupDescription: S.optional(S.String),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CopyDBClusterParameterGroupMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DBClusterParameterGroupName: S.optional(S.String),
          DBParameterGroupFamily: S.optional(S.String),
          Description: S.optional(S.String),
          DBClusterParameterGroupArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "DBClusterParameterGroup" });
    case 2:
      return S.suspend(() =>
        S.Struct({ DBClusterParameterGroup: S.optional(DBClusterParameterGroup) }).pipe(ns),
      ).annotate({
        identifier: "CopyDBClusterParameterGroupResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          SourceDBClusterSnapshotIdentifier: S.optional(S.String),
          TargetDBClusterSnapshotIdentifier: S.optional(S.String),
          KmsKeyId: S.optional(S.String),
          PreSignedUrl: S.optional(S.String),
          CopyTags: S.optional(S.Boolean),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CopyDBClusterSnapshotMessage",
      });
    case 4:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("AvailabilityZone")));
    case 5:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZones: S.optional(AvailabilityZones),
          DBClusterSnapshotIdentifier: S.optional(S.String),
          DBClusterIdentifier: S.optional(S.String),
          SnapshotCreateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Engine: S.optional(S.String),
          AllocatedStorage: S.optional(S.Number),
          Status: S.optional(S.String),
          Port: S.optional(S.Number),
          VpcId: S.optional(S.String),
          ClusterCreateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          MasterUsername: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          LicenseModel: S.optional(S.String),
          SnapshotType: S.optional(S.String),
          PercentProgress: S.optional(S.Number),
          StorageEncrypted: S.optional(S.Boolean),
          KmsKeyId: S.optional(S.String),
          DBClusterSnapshotArn: S.optional(S.String),
          SourceDBClusterSnapshotArn: S.optional(S.String),
          IAMDatabaseAuthenticationEnabled: S.optional(S.Boolean),
          StorageType: S.optional(S.String),
        }),
      ).annotate({ identifier: "DBClusterSnapshot" });
    case 6:
      return S.suspend(() =>
        S.Struct({ DBClusterSnapshot: S.optional(DBClusterSnapshot) }).pipe(ns),
      ).annotate({
        identifier: "CopyDBClusterSnapshotResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          SourceDBParameterGroupIdentifier: S.optional(S.String),
          TargetDBParameterGroupIdentifier: S.optional(S.String),
          TargetDBParameterGroupDescription: S.optional(S.String),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CopyDBParameterGroupMessage",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DBParameterGroupName: S.optional(S.String),
          DBParameterGroupFamily: S.optional(S.String),
          Description: S.optional(S.String),
          DBParameterGroupArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "DBParameterGroup" });
    case 1:
      return S.suspend(() =>
        S.Struct({ DBParameterGroup: S.optional(DBParameterGroup) }).pipe(ns),
      ).annotate({
        identifier: "CopyDBParameterGroupResult",
      });
    case 2:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("VpcSecurityGroupId")));
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({ MinCapacity: S.optional(S.Number), MaxCapacity: S.optional(S.Number) }),
      ).annotate({
        identifier: "ServerlessV2ScalingConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZones: S.optional(AvailabilityZones),
          BackupRetentionPeriod: S.optional(S.Number),
          CharacterSetName: S.optional(S.String),
          CopyTagsToSnapshot: S.optional(S.Boolean),
          DatabaseName: S.optional(S.String),
          DBClusterIdentifier: S.optional(S.String),
          DBClusterParameterGroupName: S.optional(S.String),
          VpcSecurityGroupIds: S.optional(VpcSecurityGroupIdList),
          DBSubnetGroupName: S.optional(S.String),
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          Port: S.optional(S.Number),
          MasterUsername: S.optional(S.String),
          MasterUserPassword: S.optional(SensitiveString),
          OptionGroupName: S.optional(S.String),
          PreferredBackupWindow: S.optional(S.String),
          PreferredMaintenanceWindow: S.optional(S.String),
          ReplicationSourceIdentifier: S.optional(S.String),
          Tags: S.optional(TagList),
          StorageEncrypted: S.optional(S.Boolean),
          KmsKeyId: S.optional(S.String),
          PreSignedUrl: S.optional(S.String),
          EnableIAMDatabaseAuthentication: S.optional(S.Boolean),
          EnableCloudwatchLogsExports: S.optional(LogTypeList),
          DeletionProtection: S.optional(S.Boolean),
          ServerlessV2ScalingConfiguration: S.optional(ServerlessV2ScalingConfiguration),
          GlobalClusterIdentifier: S.optional(S.String),
          StorageType: S.optional(S.String),
          NetworkType: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateDBClusterMessage" });
    case 6:
      return S.suspend(() =>
        S.Struct({ DBClusterOptionGroupName: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "DBClusterOptionGroupStatus",
      });
    case 7:
      return S.Array(
        /*@__PURE__*/ DBClusterOptionGroupStatus.pipe(
          /*@__PURE__*/ T.XmlName("DBClusterOptionGroup"),
        ).annotate({
          identifier: "DBClusterOptionGroupStatus",
        }),
      );
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("ReadReplicaIdentifier")));
    case 1:
      return S.suspend(() =>
        S.Struct({
          DBInstanceIdentifier: S.optional(S.String),
          IsClusterWriter: S.optional(S.Boolean),
          DBClusterParameterGroupStatus: S.optional(S.String),
          PromotionTier: S.optional(S.Number),
        }),
      ).annotate({ identifier: "DBClusterMember" });
    case 2:
      return S.Array(
        /*@__PURE__*/ DBClusterMember.pipe(/*@__PURE__*/ T.XmlName("DBClusterMember")).annotate({
          identifier: "DBClusterMember",
        }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({ VpcSecurityGroupId: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "VpcSecurityGroupMembership",
      });
    case 4:
      return S.Array(
        /*@__PURE__*/ VpcSecurityGroupMembership.pipe(
          /*@__PURE__*/ T.XmlName("VpcSecurityGroupMembership"),
        ).annotate({
          identifier: "VpcSecurityGroupMembership",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          RoleArn: S.optional(S.String),
          Status: S.optional(S.String),
          FeatureName: S.optional(S.String),
        }),
      ).annotate({ identifier: "DBClusterRole" });
    case 6:
      return S.Array(
        /*@__PURE__*/ DBClusterRole.pipe(/*@__PURE__*/ T.XmlName("DBClusterRole")).annotate({
          identifier: "DBClusterRole",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          LogTypesToEnable: S.optional(LogTypeList),
          LogTypesToDisable: S.optional(LogTypeList),
        }),
      ).annotate({
        identifier: "PendingCloudwatchLogsExports",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PendingCloudwatchLogsExports: S.optional(PendingCloudwatchLogsExports),
          DBClusterIdentifier: S.optional(S.String),
          IAMDatabaseAuthenticationEnabled: S.optional(S.Boolean),
          EngineVersion: S.optional(S.String),
          BackupRetentionPeriod: S.optional(S.Number),
          StorageType: S.optional(S.String),
          AllocatedStorage: S.optional(S.Number),
          Iops: S.optional(S.Number),
          NetworkType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ClusterPendingModifiedValues",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ MinCapacity: S.optional(S.Number), MaxCapacity: S.optional(S.Number) }),
      ).annotate({
        identifier: "ServerlessV2ScalingConfigurationInfo",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AllocatedStorage: S.optional(S.Number),
          AvailabilityZones: S.optional(AvailabilityZones),
          BackupRetentionPeriod: S.optional(S.Number),
          CharacterSetName: S.optional(S.String),
          DatabaseName: S.optional(S.String),
          DBClusterIdentifier: S.optional(S.String),
          DBClusterParameterGroup: S.optional(S.String),
          DBSubnetGroup: S.optional(S.String),
          Status: S.optional(S.String),
          PercentProgress: S.optional(S.String),
          EarliestRestorableTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Endpoint: S.optional(S.String),
          ReaderEndpoint: S.optional(S.String),
          MultiAZ: S.optional(S.Boolean),
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          LatestRestorableTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Port: S.optional(S.Number),
          MasterUsername: S.optional(S.String),
          DBClusterOptionGroupMemberships: S.optional(DBClusterOptionGroupMemberships),
          PreferredBackupWindow: S.optional(S.String),
          PreferredMaintenanceWindow: S.optional(S.String),
          ReplicationSourceIdentifier: S.optional(S.String),
          ReadReplicaIdentifiers: S.optional(ReadReplicaIdentifierList),
          DBClusterMembers: S.optional(DBClusterMemberList),
          VpcSecurityGroups: S.optional(VpcSecurityGroupMembershipList),
          HostedZoneId: S.optional(S.String),
          StorageEncrypted: S.optional(S.Boolean),
          KmsKeyId: S.optional(S.String),
          DbClusterResourceId: S.optional(S.String),
          DBClusterArn: S.optional(S.String),
          AssociatedRoles: S.optional(DBClusterRoles),
          IAMDatabaseAuthenticationEnabled: S.optional(S.Boolean),
          CloneGroupId: S.optional(S.String),
          ClusterCreateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          CopyTagsToSnapshot: S.optional(S.Boolean),
          EnabledCloudwatchLogsExports: S.optional(LogTypeList),
          PendingModifiedValues: S.optional(ClusterPendingModifiedValues),
          DeletionProtection: S.optional(S.Boolean),
          CrossAccountClone: S.optional(S.Boolean),
          AutomaticRestartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ServerlessV2ScalingConfiguration: S.optional(ServerlessV2ScalingConfigurationInfo),
          GlobalClusterIdentifier: S.optional(S.String),
          IOOptimizedNextAllowedModificationTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          StorageType: S.optional(S.String),
          NetworkType: S.optional(S.String),
        }),
      ).annotate({ identifier: "DBCluster" });
    case 3:
      return S.suspend(() => S.Struct({ DBCluster: S.optional(DBCluster) }).pipe(ns)).annotate({
        identifier: "CreateDBClusterResult",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          DBClusterIdentifier: S.optional(S.String),
          DBClusterEndpointIdentifier: S.optional(S.String),
          EndpointType: S.optional(S.String),
          StaticMembers: S.optional(StringList),
          ExcludedMembers: S.optional(StringList),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateDBClusterEndpointMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DBClusterEndpointIdentifier: S.optional(S.String),
          DBClusterIdentifier: S.optional(S.String),
          DBClusterEndpointResourceIdentifier: S.optional(S.String),
          Endpoint: S.optional(S.String),
          Status: S.optional(S.String),
          EndpointType: S.optional(S.String),
          CustomEndpointType: S.optional(S.String),
          StaticMembers: S.optional(StringList),
          ExcludedMembers: S.optional(StringList),
          DBClusterEndpointArn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "CreateDBClusterEndpointOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DBClusterParameterGroupName: S.optional(S.String),
          DBParameterGroupFamily: S.optional(S.String),
          Description: S.optional(S.String),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateDBClusterParameterGroupMessage",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DBClusterParameterGroup: S.optional(DBClusterParameterGroup) }).pipe(ns),
      ).annotate({
        identifier: "CreateDBClusterParameterGroupResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DBClusterSnapshotIdentifier: S.optional(S.String),
          DBClusterIdentifier: S.optional(S.String),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateDBClusterSnapshotMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ DBClusterSnapshot: S.optional(DBClusterSnapshot) }).pipe(ns),
      ).annotate({
        identifier: "CreateDBClusterSnapshotResult",
      });
    case 3:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("DBSecurityGroupName")));
    case 4:
      return S.suspend(() =>
        S.Struct({
          DBName: S.optional(S.String),
          DBInstanceIdentifier: S.optional(S.String),
          AllocatedStorage: S.optional(S.Number),
          DBInstanceClass: S.optional(S.String),
          Engine: S.optional(S.String),
          MasterUsername: S.optional(S.String),
          MasterUserPassword: S.optional(SensitiveString),
          DBSecurityGroups: S.optional(DBSecurityGroupNameList),
          VpcSecurityGroupIds: S.optional(VpcSecurityGroupIdList),
          AvailabilityZone: S.optional(S.String),
          DBSubnetGroupName: S.optional(S.String),
          PreferredMaintenanceWindow: S.optional(S.String),
          DBParameterGroupName: S.optional(S.String),
          BackupRetentionPeriod: S.optional(S.Number),
          PreferredBackupWindow: S.optional(S.String),
          Port: S.optional(S.Number),
          MultiAZ: S.optional(S.Boolean),
          EngineVersion: S.optional(S.String),
          AutoMinorVersionUpgrade: S.optional(S.Boolean),
          LicenseModel: S.optional(S.String),
          Iops: S.optional(S.Number),
          OptionGroupName: S.optional(S.String),
          CharacterSetName: S.optional(S.String),
          PubliclyAccessible: S.optional(S.Boolean),
          Tags: S.optional(TagList),
          DBClusterIdentifier: S.optional(S.String),
          StorageType: S.optional(S.String),
          TdeCredentialArn: S.optional(S.String),
          TdeCredentialPassword: S.optional(SensitiveString),
          StorageEncrypted: S.optional(S.Boolean),
          KmsKeyId: S.optional(S.String),
          Domain: S.optional(S.String),
          CopyTagsToSnapshot: S.optional(S.Boolean),
          MonitoringInterval: S.optional(S.Number),
          MonitoringRoleArn: S.optional(S.String),
          DomainIAMRoleName: S.optional(S.String),
          PromotionTier: S.optional(S.Number),
          Timezone: S.optional(S.String),
          EnableIAMDatabaseAuthentication: S.optional(S.Boolean),
          EnablePerformanceInsights: S.optional(S.Boolean),
          PerformanceInsightsKMSKeyId: S.optional(S.String),
          EnableCloudwatchLogsExports: S.optional(LogTypeList),
          DeletionProtection: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateDBInstanceMessage" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Address: S.optional(S.String),
          Port: S.optional(S.Number),
          HostedZoneId: S.optional(S.String),
        }),
      ).annotate({ identifier: "Endpoint" });
    case 6:
      return S.suspend(() =>
        S.Struct({ DBSecurityGroupName: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "DBSecurityGroupMembership",
      });
    case 7:
      return S.Array(
        /*@__PURE__*/ DBSecurityGroupMembership.pipe(
          /*@__PURE__*/ T.XmlName("DBSecurityGroup"),
        ).annotate({
          identifier: "DBSecurityGroupMembership",
        }),
      );
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DBParameterGroupName: S.optional(S.String),
          ParameterApplyStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "DBParameterGroupStatus" });
    case 1:
      return S.Array(
        /*@__PURE__*/ DBParameterGroupStatus.pipe(
          /*@__PURE__*/ T.XmlName("DBParameterGroup"),
        ).annotate({
          identifier: "DBParameterGroupStatus",
        }),
      );
    case 2:
      return S.suspend(() => S.Struct({ Name: S.optional(S.String) })).annotate({
        identifier: "AvailabilityZone",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          SubnetIdentifier: S.optional(S.String),
          SubnetAvailabilityZone: S.optional(AvailabilityZone),
          SubnetStatus: S.optional(S.String),
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
          DBSubnetGroupName: S.optional(S.String),
          DBSubnetGroupDescription: S.optional(S.String),
          VpcId: S.optional(S.String),
          SubnetGroupStatus: S.optional(S.String),
          Subnets: S.optional(SubnetList),
          DBSubnetGroupArn: S.optional(S.String),
          SupportedNetworkTypes: S.optional(StringList),
        }),
      ).annotate({ identifier: "DBSubnetGroup" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DBInstanceClass: S.optional(S.String),
          AllocatedStorage: S.optional(S.Number),
          MasterUserPassword: S.optional(SensitiveString),
          Port: S.optional(S.Number),
          BackupRetentionPeriod: S.optional(S.Number),
          MultiAZ: S.optional(S.Boolean),
          EngineVersion: S.optional(S.String),
          LicenseModel: S.optional(S.String),
          Iops: S.optional(S.Number),
          DBInstanceIdentifier: S.optional(S.String),
          StorageType: S.optional(S.String),
          CACertificateIdentifier: S.optional(S.String),
          DBSubnetGroupName: S.optional(S.String),
          PendingCloudwatchLogsExports: S.optional(PendingCloudwatchLogsExports),
        }),
      ).annotate({ identifier: "PendingModifiedValues" });
    case 7:
      return S.Array(
        /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("ReadReplicaDBInstanceIdentifier")),
      );
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("ReadReplicaDBClusterIdentifier")),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({ OptionGroupName: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({ identifier: "OptionGroupMembership" });
    case 2:
      return S.Array(
        /*@__PURE__*/ OptionGroupMembership.pipe(
          /*@__PURE__*/ T.XmlName("OptionGroupMembership"),
        ).annotate({
          identifier: "OptionGroupMembership",
        }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          StatusType: S.optional(S.String),
          Normal: S.optional(S.Boolean),
          Status: S.optional(S.String),
          Message: S.optional(S.String),
        }),
      ).annotate({ identifier: "DBInstanceStatusInfo" });
    case 4:
      return S.Array(
        /*@__PURE__*/ DBInstanceStatusInfo.pipe(
          /*@__PURE__*/ T.XmlName("DBInstanceStatusInfo"),
        ).annotate({
          identifier: "DBInstanceStatusInfo",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          Domain: S.optional(S.String),
          Status: S.optional(S.String),
          FQDN: S.optional(S.String),
          IAMRoleName: S.optional(S.String),
        }),
      ).annotate({ identifier: "DomainMembership" });
    case 6:
      return S.Array(
        /*@__PURE__*/ DomainMembership.pipe(/*@__PURE__*/ T.XmlName("DomainMembership")).annotate({
          identifier: "DomainMembership",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          DBInstanceIdentifier: S.optional(S.String),
          DBInstanceClass: S.optional(S.String),
          Engine: S.optional(S.String),
          DBInstanceStatus: S.optional(S.String),
          MasterUsername: S.optional(S.String),
          DBName: S.optional(S.String),
          Endpoint: S.optional(Endpoint),
          AllocatedStorage: S.optional(S.Number),
          InstanceCreateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          PreferredBackupWindow: S.optional(S.String),
          BackupRetentionPeriod: S.optional(S.Number),
          DBSecurityGroups: S.optional(DBSecurityGroupMembershipList),
          VpcSecurityGroups: S.optional(VpcSecurityGroupMembershipList),
          DBParameterGroups: S.optional(DBParameterGroupStatusList),
          AvailabilityZone: S.optional(S.String),
          DBSubnetGroup: S.optional(DBSubnetGroup),
          PreferredMaintenanceWindow: S.optional(S.String),
          PendingModifiedValues: S.optional(PendingModifiedValues),
          LatestRestorableTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          MultiAZ: S.optional(S.Boolean),
          EngineVersion: S.optional(S.String),
          AutoMinorVersionUpgrade: S.optional(S.Boolean),
          ReadReplicaSourceDBInstanceIdentifier: S.optional(S.String),
          ReadReplicaDBInstanceIdentifiers: S.optional(ReadReplicaDBInstanceIdentifierList),
          ReadReplicaDBClusterIdentifiers: S.optional(ReadReplicaDBClusterIdentifierList),
          LicenseModel: S.optional(S.String),
          Iops: S.optional(S.Number),
          OptionGroupMemberships: S.optional(OptionGroupMembershipList),
          CharacterSetName: S.optional(S.String),
          SecondaryAvailabilityZone: S.optional(S.String),
          PubliclyAccessible: S.optional(S.Boolean),
          StatusInfos: S.optional(DBInstanceStatusInfoList),
          StorageType: S.optional(S.String),
          TdeCredentialArn: S.optional(S.String),
          DbInstancePort: S.optional(S.Number),
          DBClusterIdentifier: S.optional(S.String),
          StorageEncrypted: S.optional(S.Boolean),
          KmsKeyId: S.optional(S.String),
          DbiResourceId: S.optional(S.String),
          CACertificateIdentifier: S.optional(S.String),
          DomainMemberships: S.optional(DomainMembershipList),
          CopyTagsToSnapshot: S.optional(S.Boolean),
          MonitoringInterval: S.optional(S.Number),
          EnhancedMonitoringResourceArn: S.optional(S.String),
          MonitoringRoleArn: S.optional(S.String),
          PromotionTier: S.optional(S.Number),
          DBInstanceArn: S.optional(S.String),
          Timezone: S.optional(S.String),
          IAMDatabaseAuthenticationEnabled: S.optional(S.Boolean),
          PerformanceInsightsEnabled: S.optional(S.Boolean),
          PerformanceInsightsKMSKeyId: S.optional(S.String),
          EnabledCloudwatchLogsExports: S.optional(LogTypeList),
          DeletionProtection: S.optional(S.Boolean),
          NetworkType: S.optional(S.String),
        }),
      ).annotate({ identifier: "DBInstance" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ DBInstance: S.optional(DBInstance) }).pipe(ns)).annotate({
        identifier: "CreateDBInstanceResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DBParameterGroupName: S.optional(S.String),
          DBParameterGroupFamily: S.optional(S.String),
          Description: S.optional(S.String),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateDBParameterGroupMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ DBParameterGroup: S.optional(DBParameterGroup) }).pipe(ns),
      ).annotate({
        identifier: "CreateDBParameterGroupResult",
      });
    case 3:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("SubnetIdentifier")));
    case 4:
      return S.suspend(() =>
        S.Struct({
          DBSubnetGroupName: S.optional(S.String),
          DBSubnetGroupDescription: S.optional(S.String),
          SubnetIds: S.optional(SubnetIdentifierList),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateDBSubnetGroupMessage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ DBSubnetGroup: S.optional(DBSubnetGroup) }).pipe(ns),
      ).annotate({
        identifier: "CreateDBSubnetGroupResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SubscriptionName: S.optional(S.String),
          SnsTopicArn: S.optional(S.String),
          SourceType: S.optional(S.String),
          EventCategories: S.optional(EventCategoriesList),
          SourceIds: S.optional(SourceIdsList),
          Enabled: S.optional(S.Boolean),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateEventSubscriptionMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ EventSubscription: S.optional(EventSubscription) }).pipe(ns),
      ).annotate({
        identifier: "CreateEventSubscriptionResult",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          GlobalClusterIdentifier: S.optional(S.String),
          SourceDBClusterIdentifier: S.optional(S.String),
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          DeletionProtection: S.optional(S.Boolean),
          DatabaseName: S.optional(S.String),
          Tags: S.optional(TagList),
          StorageEncrypted: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateGlobalClusterMessage",
      });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          DBClusterArn: S.optional(S.String),
          Readers: S.optional(ReadersArnList),
          IsWriter: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "GlobalClusterMember" });
    case 3:
      return S.Array(
        /*@__PURE__*/ GlobalClusterMember.pipe(
          /*@__PURE__*/ T.XmlName("GlobalClusterMember"),
        ).annotate({
          identifier: "GlobalClusterMember",
        }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(FailoverStatus),
          FromDbClusterArn: S.optional(S.String),
          ToDbClusterArn: S.optional(S.String),
          IsDataLossAllowed: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "FailoverState" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          GlobalClusterIdentifier: S.optional(S.String),
          GlobalClusterResourceId: S.optional(S.String),
          GlobalClusterArn: S.optional(S.String),
          Status: S.optional(S.String),
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          DatabaseName: S.optional(S.String),
          StorageEncrypted: S.optional(S.Boolean),
          DeletionProtection: S.optional(S.Boolean),
          GlobalClusterMembers: S.optional(GlobalClusterMemberList),
          FailoverState: S.optional(FailoverState),
          TagList: S.optional(TagList),
        }),
      ).annotate({ identifier: "GlobalCluster" });
    case 6:
      return S.suspend(() =>
        S.Struct({ GlobalCluster: S.optional(GlobalCluster) }).pipe(ns),
      ).annotate({
        identifier: "CreateGlobalClusterResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DBClusterIdentifier: S.optional(S.String),
          SkipFinalSnapshot: S.optional(S.Boolean),
          FinalDBSnapshotIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteDBClusterMessage" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ DBCluster: S.optional(DBCluster) }).pipe(ns)).annotate({
        identifier: "DeleteDBClusterResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ DBClusterEndpointIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteDBClusterEndpointMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DBClusterEndpointIdentifier: S.optional(S.String),
          DBClusterIdentifier: S.optional(S.String),
          DBClusterEndpointResourceIdentifier: S.optional(S.String),
          Endpoint: S.optional(S.String),
          Status: S.optional(S.String),
          EndpointType: S.optional(S.String),
          CustomEndpointType: S.optional(S.String),
          StaticMembers: S.optional(StringList),
          ExcludedMembers: S.optional(StringList),
          DBClusterEndpointArn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DeleteDBClusterEndpointOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DBClusterParameterGroupName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteDBClusterParameterGroupMessage",
      });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteDBClusterParameterGroupResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ DBClusterSnapshotIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteDBClusterSnapshotMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ DBClusterSnapshot: S.optional(DBClusterSnapshot) }).pipe(ns),
      ).annotate({
        identifier: "DeleteDBClusterSnapshotResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DBInstanceIdentifier: S.optional(S.String),
          SkipFinalSnapshot: S.optional(S.Boolean),
          FinalDBSnapshotIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteDBInstanceMessage" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ DBInstance: S.optional(DBInstance) }).pipe(ns)).annotate({
        identifier: "DeleteDBInstanceResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ DBParameterGroupName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteDBParameterGroupMessage",
      });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteDBParameterGroupResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DBSubnetGroupName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteDBSubnetGroupMessage",
      });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteDBSubnetGroupResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ SubscriptionName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteEventSubscriptionMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ EventSubscription: S.optional(EventSubscription) }).pipe(ns),
      ).annotate({
        identifier: "DeleteEventSubscriptionResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ GlobalClusterIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteGlobalClusterMessage",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ GlobalCluster: S.optional(GlobalCluster) }).pipe(ns),
      ).annotate({
        identifier: "DeleteGlobalClusterResult",
      });
    case 1:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("Value")));
    case 2:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Values: S.optional(FilterValueList) }),
      ).annotate({ identifier: "Filter" });
    case 3:
      return S.Array(
        /*@__PURE__*/ Filter.pipe(/*@__PURE__*/ T.XmlName("Filter")).annotate({
          identifier: "Filter",
        }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          DBClusterIdentifier: S.optional(S.String),
          DBClusterEndpointIdentifier: S.optional(S.String),
          Filters: S.optional(FilterList),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeDBClusterEndpointsMessage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DBClusterEndpointIdentifier: S.optional(S.String),
          DBClusterIdentifier: S.optional(S.String),
          DBClusterEndpointResourceIdentifier: S.optional(S.String),
          Endpoint: S.optional(S.String),
          Status: S.optional(S.String),
          EndpointType: S.optional(S.String),
          CustomEndpointType: S.optional(S.String),
          StaticMembers: S.optional(StringList),
          ExcludedMembers: S.optional(StringList),
          DBClusterEndpointArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "DBClusterEndpoint" });
    case 6:
      return S.Array(
        /*@__PURE__*/ DBClusterEndpoint.pipe(
          /*@__PURE__*/ T.XmlName("DBClusterEndpointList"),
        ).annotate({
          identifier: "DBClusterEndpoint",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          DBClusterEndpoints: S.optional(DBClusterEndpointList),
        }).pipe(ns),
      ).annotate({ identifier: "DBClusterEndpointMessage" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DBClusterParameterGroupName: S.optional(S.String),
          Filters: S.optional(FilterList),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeDBClusterParameterGroupsMessage",
      });
    case 1:
      return S.Array(
        /*@__PURE__*/ DBClusterParameterGroup.pipe(
          /*@__PURE__*/ T.XmlName("DBClusterParameterGroup"),
        ).annotate({
          identifier: "DBClusterParameterGroup",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          DBClusterParameterGroups: S.optional(DBClusterParameterGroupList),
        }).pipe(ns),
      ).annotate({
        identifier: "DBClusterParameterGroupsMessage",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DBClusterParameterGroupName: S.optional(S.String),
          Source: S.optional(S.String),
          Filters: S.optional(FilterList),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeDBClusterParametersMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ParameterName: S.optional(S.String),
          ParameterValue: S.optional(S.String),
          Description: S.optional(S.String),
          Source: S.optional(S.String),
          ApplyType: S.optional(S.String),
          DataType: S.optional(S.String),
          AllowedValues: S.optional(S.String),
          IsModifiable: S.optional(S.Boolean),
          MinimumEngineVersion: S.optional(S.String),
          ApplyMethod: S.optional(ApplyMethod),
        }),
      ).annotate({ identifier: "Parameter" });
    case 5:
      return S.Array(
        /*@__PURE__*/ Parameter.pipe(/*@__PURE__*/ T.XmlName("Parameter")).annotate({
          identifier: "Parameter",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({ Parameters: S.optional(ParametersList), Marker: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DBClusterParameterGroupDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DBClusterIdentifier: S.optional(S.String),
          Filters: S.optional(FilterList),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeDBClustersMessage",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ DBCluster.pipe(/*@__PURE__*/ T.XmlName("DBCluster")).annotate({
          identifier: "DBCluster",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({ Marker: S.optional(S.String), DBClusters: S.optional(DBClusterList) }).pipe(ns),
      ).annotate({ identifier: "DBClusterMessage" });
    case 2:
      return S.suspend(() =>
        S.Struct({ DBClusterSnapshotIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeDBClusterSnapshotAttributesMessage",
      });
    case 3:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("AttributeValue")));
    case 4:
      return S.suspend(() =>
        S.Struct({
          AttributeName: S.optional(S.String),
          AttributeValues: S.optional(AttributeValueList),
        }),
      ).annotate({
        identifier: "DBClusterSnapshotAttribute",
      });
    case 5:
      return S.Array(
        /*@__PURE__*/ DBClusterSnapshotAttribute.pipe(
          /*@__PURE__*/ T.XmlName("DBClusterSnapshotAttribute"),
        ).annotate({
          identifier: "DBClusterSnapshotAttribute",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          DBClusterSnapshotIdentifier: S.optional(S.String),
          DBClusterSnapshotAttributes: S.optional(DBClusterSnapshotAttributeList),
        }),
      ).annotate({
        identifier: "DBClusterSnapshotAttributesResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DBClusterSnapshotAttributesResult: S.optional(DBClusterSnapshotAttributesResult),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeDBClusterSnapshotAttributesResult",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DBClusterIdentifier: S.optional(S.String),
          DBClusterSnapshotIdentifier: S.optional(S.String),
          SnapshotType: S.optional(S.String),
          Filters: S.optional(FilterList),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
          IncludeShared: S.optional(S.Boolean),
          IncludePublic: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeDBClusterSnapshotsMessage",
      });
    case 1:
      return S.Array(
        /*@__PURE__*/ DBClusterSnapshot.pipe(/*@__PURE__*/ T.XmlName("DBClusterSnapshot")).annotate(
          {
            identifier: "DBClusterSnapshot",
          },
        ),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          DBClusterSnapshots: S.optional(DBClusterSnapshotList),
        }).pipe(ns),
      ).annotate({ identifier: "DBClusterSnapshotMessage" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          DBParameterGroupFamily: S.optional(S.String),
          Filters: S.optional(FilterList),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
          DefaultOnly: S.optional(S.Boolean),
          ListSupportedCharacterSets: S.optional(S.Boolean),
          ListSupportedTimezones: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeDBEngineVersionsMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          CharacterSetName: S.optional(S.String),
          CharacterSetDescription: S.optional(S.String),
        }),
      ).annotate({ identifier: "CharacterSet" });
    case 5:
      return S.Array(
        /*@__PURE__*/ CharacterSet.pipe(/*@__PURE__*/ T.XmlName("CharacterSet")).annotate({
          identifier: "CharacterSet",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          Description: S.optional(S.String),
          AutoUpgrade: S.optional(S.Boolean),
          IsMajorVersionUpgrade: S.optional(S.Boolean),
          SupportsGlobalDatabases: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "UpgradeTarget" });
    case 7:
      return S.Array(
        /*@__PURE__*/ UpgradeTarget.pipe(/*@__PURE__*/ T.XmlName("UpgradeTarget")).annotate({
          identifier: "UpgradeTarget",
        }),
      );
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ TimezoneName: S.optional(S.String) })).annotate({
        identifier: "Timezone",
      });
    case 1:
      return S.Array(
        /*@__PURE__*/ Timezone.pipe(/*@__PURE__*/ T.XmlName("Timezone")).annotate({
          identifier: "Timezone",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          DBParameterGroupFamily: S.optional(S.String),
          DBEngineDescription: S.optional(S.String),
          DBEngineVersionDescription: S.optional(S.String),
          DefaultCharacterSet: S.optional(CharacterSet),
          SupportedCharacterSets: S.optional(SupportedCharacterSetsList),
          ValidUpgradeTarget: S.optional(ValidUpgradeTargetList),
          SupportedTimezones: S.optional(SupportedTimezonesList),
          ExportableLogTypes: S.optional(LogTypeList),
          SupportsLogExportsToCloudwatchLogs: S.optional(S.Boolean),
          SupportsReadReplica: S.optional(S.Boolean),
          SupportsGlobalDatabases: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "DBEngineVersion" });
    case 3:
      return S.Array(
        /*@__PURE__*/ DBEngineVersion.pipe(/*@__PURE__*/ T.XmlName("DBEngineVersion")).annotate({
          identifier: "DBEngineVersion",
        }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          DBEngineVersions: S.optional(DBEngineVersionList),
        }).pipe(ns),
      ).annotate({ identifier: "DBEngineVersionMessage" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DBInstanceIdentifier: S.optional(S.String),
          Filters: S.optional(FilterList),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeDBInstancesMessage",
      });
    case 6:
      return S.Array(
        /*@__PURE__*/ DBInstance.pipe(/*@__PURE__*/ T.XmlName("DBInstance")).annotate({
          identifier: "DBInstance",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({ Marker: S.optional(S.String), DBInstances: S.optional(DBInstanceList) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "DBInstanceMessage" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DBParameterGroupName: S.optional(S.String),
          Filters: S.optional(FilterList),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeDBParameterGroupsMessage",
      });
    case 1:
      return S.Array(
        /*@__PURE__*/ DBParameterGroup.pipe(/*@__PURE__*/ T.XmlName("DBParameterGroup")).annotate({
          identifier: "DBParameterGroup",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          DBParameterGroups: S.optional(DBParameterGroupList),
        }).pipe(ns),
      ).annotate({ identifier: "DBParameterGroupsMessage" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DBParameterGroupName: S.optional(S.String),
          Source: S.optional(S.String),
          Filters: S.optional(FilterList),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeDBParametersMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Parameters: S.optional(ParametersList), Marker: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "DBParameterGroupDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DBSubnetGroupName: S.optional(S.String),
          Filters: S.optional(FilterList),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeDBSubnetGroupsMessage",
      });
    case 6:
      return S.Array(
        /*@__PURE__*/ DBSubnetGroup.pipe(/*@__PURE__*/ T.XmlName("DBSubnetGroup")).annotate({
          identifier: "DBSubnetGroup",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({ Marker: S.optional(S.String), DBSubnetGroups: S.optional(DBSubnetGroups) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "DBSubnetGroupMessage" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DBParameterGroupFamily: S.optional(S.String),
          Filters: S.optional(FilterList),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeEngineDefaultClusterParametersMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DBParameterGroupFamily: S.optional(S.String),
          Marker: S.optional(S.String),
          Parameters: S.optional(ParametersList),
        }),
      ).annotate({ identifier: "EngineDefaults" });
    case 2:
      return S.suspend(() =>
        S.Struct({ EngineDefaults: S.optional(EngineDefaults) }).pipe(ns),
      ).annotate({
        identifier: "DescribeEngineDefaultClusterParametersResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DBParameterGroupFamily: S.optional(S.String),
          Filters: S.optional(FilterList),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeEngineDefaultParametersMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ EngineDefaults: S.optional(EngineDefaults) }).pipe(ns),
      ).annotate({
        identifier: "DescribeEngineDefaultParametersResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ SourceType: S.optional(S.String), Filters: S.optional(FilterList) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeEventCategoriesMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SourceType: S.optional(S.String),
          EventCategories: S.optional(EventCategoriesList),
        }),
      ).annotate({ identifier: "EventCategoriesMap" });
    case 7:
      return S.Array(
        /*@__PURE__*/ EventCategoriesMap.pipe(
          /*@__PURE__*/ T.XmlName("EventCategoriesMap"),
        ).annotate({
          identifier: "EventCategoriesMap",
        }),
      );
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ EventCategoriesMapList: S.optional(EventCategoriesMapList) }).pipe(ns),
      ).annotate({ identifier: "EventCategoriesMessage" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SourceIdentifier: S.optional(S.String),
          SourceType: S.optional(SourceType),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Duration: S.optional(S.Number),
          EventCategories: S.optional(EventCategoriesList),
          Filters: S.optional(FilterList),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeEventsMessage" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SourceIdentifier: S.optional(S.String),
          SourceType: S.optional(SourceType),
          Message: S.optional(S.String),
          EventCategories: S.optional(EventCategoriesList),
          Date: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          SourceArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Event" });
    case 3:
      return S.Array(
        /*@__PURE__*/ Event.pipe(/*@__PURE__*/ T.XmlName("Event")).annotate({
          identifier: "Event",
        }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({ Marker: S.optional(S.String), Events: S.optional(EventList) }).pipe(ns),
      ).annotate({ identifier: "EventsMessage" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SubscriptionName: S.optional(S.String),
          Filters: S.optional(FilterList),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeEventSubscriptionsMessage",
      });
    case 6:
      return S.Array(
        /*@__PURE__*/ EventSubscription.pipe(/*@__PURE__*/ T.XmlName("EventSubscription")).annotate(
          {
            identifier: "EventSubscription",
          },
        ),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          EventSubscriptionsList: S.optional(EventSubscriptionsList),
        }).pipe(ns),
      ).annotate({
        identifier: "EventSubscriptionsMessage",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          GlobalClusterIdentifier: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeGlobalClustersMessage",
      });
    case 1:
      return S.Array(
        /*@__PURE__*/ GlobalCluster.pipe(/*@__PURE__*/ T.XmlName("GlobalClusterMember")).annotate({
          identifier: "GlobalCluster",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          GlobalClusters: S.optional(GlobalClusterList),
        }).pipe(ns),
      ).annotate({ identifier: "GlobalClustersMessage" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          DBInstanceClass: S.optional(S.String),
          LicenseModel: S.optional(S.String),
          Vpc: S.optional(S.Boolean),
          Filters: S.optional(FilterList),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeOrderableDBInstanceOptionsMessage",
      });
    case 4:
      return S.Array(
        /*@__PURE__*/ AvailabilityZone.pipe(/*@__PURE__*/ T.XmlName("AvailabilityZone")).annotate({
          identifier: "AvailabilityZone",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          DBInstanceClass: S.optional(S.String),
          LicenseModel: S.optional(S.String),
          AvailabilityZones: S.optional(AvailabilityZoneList),
          MultiAZCapable: S.optional(S.Boolean),
          ReadReplicaCapable: S.optional(S.Boolean),
          Vpc: S.optional(S.Boolean),
          SupportsStorageEncryption: S.optional(S.Boolean),
          StorageType: S.optional(S.String),
          SupportsIops: S.optional(S.Boolean),
          SupportsEnhancedMonitoring: S.optional(S.Boolean),
          SupportsIAMDatabaseAuthentication: S.optional(S.Boolean),
          SupportsPerformanceInsights: S.optional(S.Boolean),
          MinStorageSize: S.optional(S.Number),
          MaxStorageSize: S.optional(S.Number),
          MinIopsPerDbInstance: S.optional(S.Number),
          MaxIopsPerDbInstance: S.optional(S.Number),
          MinIopsPerGib: S.optional(S.Number),
          MaxIopsPerGib: S.optional(S.Number),
          SupportsGlobalDatabases: S.optional(S.Boolean),
          SupportedNetworkTypes: S.optional(StringList),
        }),
      ).annotate({
        identifier: "OrderableDBInstanceOption",
      });
    case 6:
      return S.Array(
        /*@__PURE__*/ OrderableDBInstanceOption.pipe(
          /*@__PURE__*/ T.XmlName("OrderableDBInstanceOption"),
        ).annotate({
          identifier: "OrderableDBInstanceOption",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          OrderableDBInstanceOptions: S.optional(OrderableDBInstanceOptionsList),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "OrderableDBInstanceOptionsMessage",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ResourceIdentifier: S.optional(S.String),
          Filters: S.optional(FilterList),
          Marker: S.optional(S.String),
          MaxRecords: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribePendingMaintenanceActionsMessage",
      });
    case 1:
      return S.Array(
        /*@__PURE__*/ ResourcePendingMaintenanceActions.pipe(
          /*@__PURE__*/ T.XmlName("ResourcePendingMaintenanceActions"),
        ).annotate({
          identifier: "ResourcePendingMaintenanceActions",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          PendingMaintenanceActions: S.optional(PendingMaintenanceActions),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "PendingMaintenanceActionsMessage",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DBInstanceIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeValidDBInstanceModificationsMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          From: S.optional(S.Number),
          To: S.optional(S.Number),
          Step: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Range" });
    case 5:
      return S.Array(
        /*@__PURE__*/ Range.pipe(/*@__PURE__*/ T.XmlName("Range")).annotate({
          identifier: "Range",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({ From: S.optional(S.Number), To: S.optional(S.Number) }),
      ).annotate({ identifier: "DoubleRange" });
    case 7:
      return S.Array(
        /*@__PURE__*/ DoubleRange.pipe(/*@__PURE__*/ T.XmlName("DoubleRange")).annotate({
          identifier: "DoubleRange",
        }),
      );
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          StorageType: S.optional(S.String),
          StorageSize: S.optional(RangeList),
          ProvisionedIops: S.optional(RangeList),
          IopsToStorageRatio: S.optional(DoubleRangeList),
        }),
      ).annotate({ identifier: "ValidStorageOptions" });
    case 1:
      return S.Array(
        /*@__PURE__*/ ValidStorageOptions.pipe(
          /*@__PURE__*/ T.XmlName("ValidStorageOptions"),
        ).annotate({
          identifier: "ValidStorageOptions",
        }),
      );
    case 2:
      return S.suspend(() => S.Struct({ Storage: S.optional(ValidStorageOptionsList) })).annotate({
        identifier: "ValidDBInstanceModificationsMessage",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ValidDBInstanceModificationsMessage: S.optional(ValidDBInstanceModificationsMessage),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeValidDBInstanceModificationsResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DBClusterIdentifier: S.optional(S.String),
          TargetDBInstanceIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "FailoverDBClusterMessage" });
    case 5:
      return S.suspend(() => S.Struct({ DBCluster: S.optional(DBCluster) }).pipe(ns)).annotate({
        identifier: "FailoverDBClusterResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          GlobalClusterIdentifier: S.optional(S.String),
          TargetDbClusterIdentifier: S.optional(S.String),
          AllowDataLoss: S.optional(S.Boolean),
          Switchover: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "FailoverGlobalClusterMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ GlobalCluster: S.optional(GlobalCluster) }).pipe(ns),
      ).annotate({
        identifier: "FailoverGlobalClusterResult",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceName: S.optional(S.String), Filters: S.optional(FilterList) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceMessage",
      });
    case 1:
      return S.suspend(() => S.Struct({ TagList: S.optional(TagList) }).pipe(ns)).annotate({
        identifier: "TagListMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          EnableLogTypes: S.optional(LogTypeList),
          DisableLogTypes: S.optional(LogTypeList),
        }),
      ).annotate({
        identifier: "CloudwatchLogsExportConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DBClusterIdentifier: S.optional(S.String),
          NewDBClusterIdentifier: S.optional(S.String),
          ApplyImmediately: S.optional(S.Boolean),
          BackupRetentionPeriod: S.optional(S.Number),
          DBClusterParameterGroupName: S.optional(S.String),
          VpcSecurityGroupIds: S.optional(VpcSecurityGroupIdList),
          Port: S.optional(S.Number),
          MasterUserPassword: S.optional(SensitiveString),
          OptionGroupName: S.optional(S.String),
          PreferredBackupWindow: S.optional(S.String),
          PreferredMaintenanceWindow: S.optional(S.String),
          EnableIAMDatabaseAuthentication: S.optional(S.Boolean),
          CloudwatchLogsExportConfiguration: S.optional(CloudwatchLogsExportConfiguration),
          EngineVersion: S.optional(S.String),
          AllowMajorVersionUpgrade: S.optional(S.Boolean),
          DBInstanceParameterGroupName: S.optional(S.String),
          DeletionProtection: S.optional(S.Boolean),
          CopyTagsToSnapshot: S.optional(S.Boolean),
          ServerlessV2ScalingConfiguration: S.optional(ServerlessV2ScalingConfiguration),
          StorageType: S.optional(S.String),
          NetworkType: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ModifyDBClusterMessage" });
    case 4:
      return S.suspend(() => S.Struct({ DBCluster: S.optional(DBCluster) }).pipe(ns)).annotate({
        identifier: "ModifyDBClusterResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DBClusterEndpointIdentifier: S.optional(S.String),
          EndpointType: S.optional(S.String),
          StaticMembers: S.optional(StringList),
          ExcludedMembers: S.optional(StringList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyDBClusterEndpointMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DBClusterEndpointIdentifier: S.optional(S.String),
          DBClusterIdentifier: S.optional(S.String),
          DBClusterEndpointResourceIdentifier: S.optional(S.String),
          Endpoint: S.optional(S.String),
          Status: S.optional(S.String),
          EndpointType: S.optional(S.String),
          CustomEndpointType: S.optional(S.String),
          StaticMembers: S.optional(StringList),
          ExcludedMembers: S.optional(StringList),
          DBClusterEndpointArn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ModifyDBClusterEndpointOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DBClusterParameterGroupName: S.optional(S.String),
          Parameters: S.optional(ParametersList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyDBClusterParameterGroupMessage",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DBClusterParameterGroupName: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DBClusterParameterGroupNameMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DBClusterSnapshotIdentifier: S.optional(S.String),
          AttributeName: S.optional(S.String),
          ValuesToAdd: S.optional(AttributeValueList),
          ValuesToRemove: S.optional(AttributeValueList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyDBClusterSnapshotAttributeMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DBClusterSnapshotAttributesResult: S.optional(DBClusterSnapshotAttributesResult),
        }).pipe(ns),
      ).annotate({
        identifier: "ModifyDBClusterSnapshotAttributeResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DBInstanceIdentifier: S.optional(S.String),
          AllocatedStorage: S.optional(S.Number),
          DBInstanceClass: S.optional(S.String),
          DBSubnetGroupName: S.optional(S.String),
          DBSecurityGroups: S.optional(DBSecurityGroupNameList),
          VpcSecurityGroupIds: S.optional(VpcSecurityGroupIdList),
          ApplyImmediately: S.optional(S.Boolean),
          MasterUserPassword: S.optional(SensitiveString),
          DBParameterGroupName: S.optional(S.String),
          BackupRetentionPeriod: S.optional(S.Number),
          PreferredBackupWindow: S.optional(S.String),
          PreferredMaintenanceWindow: S.optional(S.String),
          MultiAZ: S.optional(S.Boolean),
          EngineVersion: S.optional(S.String),
          AllowMajorVersionUpgrade: S.optional(S.Boolean),
          AutoMinorVersionUpgrade: S.optional(S.Boolean),
          LicenseModel: S.optional(S.String),
          Iops: S.optional(S.Number),
          OptionGroupName: S.optional(S.String),
          NewDBInstanceIdentifier: S.optional(S.String),
          StorageType: S.optional(S.String),
          TdeCredentialArn: S.optional(S.String),
          TdeCredentialPassword: S.optional(SensitiveString),
          CACertificateIdentifier: S.optional(S.String),
          Domain: S.optional(S.String),
          CopyTagsToSnapshot: S.optional(S.Boolean),
          MonitoringInterval: S.optional(S.Number),
          DBPortNumber: S.optional(S.Number),
          PubliclyAccessible: S.optional(S.Boolean),
          MonitoringRoleArn: S.optional(S.String),
          DomainIAMRoleName: S.optional(S.String),
          PromotionTier: S.optional(S.Number),
          EnableIAMDatabaseAuthentication: S.optional(S.Boolean),
          EnablePerformanceInsights: S.optional(S.Boolean),
          PerformanceInsightsKMSKeyId: S.optional(S.String),
          CloudwatchLogsExportConfiguration: S.optional(CloudwatchLogsExportConfiguration),
          DeletionProtection: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ModifyDBInstanceMessage" });
    case 4:
      return S.suspend(() => S.Struct({ DBInstance: S.optional(DBInstance) }).pipe(ns)).annotate({
        identifier: "ModifyDBInstanceResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DBParameterGroupName: S.optional(S.String),
          Parameters: S.optional(ParametersList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyDBParameterGroupMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ DBParameterGroupName: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DBParameterGroupNameMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DBSubnetGroupName: S.optional(S.String),
          DBSubnetGroupDescription: S.optional(S.String),
          SubnetIds: S.optional(SubnetIdentifierList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyDBSubnetGroupMessage",
      });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DBSubnetGroup: S.optional(DBSubnetGroup) }).pipe(ns),
      ).annotate({
        identifier: "ModifyDBSubnetGroupResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SubscriptionName: S.optional(S.String),
          SnsTopicArn: S.optional(S.String),
          SourceType: S.optional(S.String),
          EventCategories: S.optional(EventCategoriesList),
          Enabled: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyEventSubscriptionMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ EventSubscription: S.optional(EventSubscription) }).pipe(ns),
      ).annotate({
        identifier: "ModifyEventSubscriptionResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          GlobalClusterIdentifier: S.optional(S.String),
          NewGlobalClusterIdentifier: S.optional(S.String),
          DeletionProtection: S.optional(S.Boolean),
          EngineVersion: S.optional(S.String),
          AllowMajorVersionUpgrade: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyGlobalClusterMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ GlobalCluster: S.optional(GlobalCluster) }).pipe(ns),
      ).annotate({
        identifier: "ModifyGlobalClusterResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ DBClusterIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PromoteReadReplicaDBClusterMessage",
      });
    case 6:
      return S.suspend(() => S.Struct({ DBCluster: S.optional(DBCluster) }).pipe(ns)).annotate({
        identifier: "PromoteReadReplicaDBClusterResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DBInstanceIdentifier: S.optional(S.String),
          ForceFailover: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "RebootDBInstanceMessage" });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ DBInstance: S.optional(DBInstance) }).pipe(ns)).annotate({
        identifier: "RebootDBInstanceResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          GlobalClusterIdentifier: S.optional(S.String),
          DbClusterIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RemoveFromGlobalClusterMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ GlobalCluster: S.optional(GlobalCluster) }).pipe(ns),
      ).annotate({
        identifier: "RemoveFromGlobalClusterResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DBClusterIdentifier: S.optional(S.String),
          RoleArn: S.optional(S.String),
          FeatureName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RemoveRoleFromDBClusterMessage",
      });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "RemoveRoleFromDBClusterResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SubscriptionName: S.optional(S.String),
          SourceIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RemoveSourceIdentifierFromSubscriptionMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ EventSubscription: S.optional(EventSubscription) }).pipe(ns),
      ).annotate({
        identifier: "RemoveSourceIdentifierFromSubscriptionResult",
      });
    case 7:
      return S.Array(S.String);
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceName: S.optional(S.String), TagKeys: S.optional(KeyList) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RemoveTagsFromResourceMessage",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "RemoveTagsFromResourceResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DBClusterParameterGroupName: S.optional(S.String),
          ResetAllParameters: S.optional(S.Boolean),
          Parameters: S.optional(ParametersList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ResetDBClusterParameterGroupMessage",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DBParameterGroupName: S.optional(S.String),
          ResetAllParameters: S.optional(S.Boolean),
          Parameters: S.optional(ParametersList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ResetDBParameterGroupMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZones: S.optional(AvailabilityZones),
          DBClusterIdentifier: S.optional(S.String),
          SnapshotIdentifier: S.optional(S.String),
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          Port: S.optional(S.Number),
          DBSubnetGroupName: S.optional(S.String),
          DatabaseName: S.optional(S.String),
          OptionGroupName: S.optional(S.String),
          VpcSecurityGroupIds: S.optional(VpcSecurityGroupIdList),
          Tags: S.optional(TagList),
          KmsKeyId: S.optional(S.String),
          EnableIAMDatabaseAuthentication: S.optional(S.Boolean),
          EnableCloudwatchLogsExports: S.optional(LogTypeList),
          DBClusterParameterGroupName: S.optional(S.String),
          DeletionProtection: S.optional(S.Boolean),
          CopyTagsToSnapshot: S.optional(S.Boolean),
          ServerlessV2ScalingConfiguration: S.optional(ServerlessV2ScalingConfiguration),
          StorageType: S.optional(S.String),
          NetworkType: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RestoreDBClusterFromSnapshotMessage",
      });
    case 5:
      return S.suspend(() => S.Struct({ DBCluster: S.optional(DBCluster) }).pipe(ns)).annotate({
        identifier: "RestoreDBClusterFromSnapshotResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DBClusterIdentifier: S.optional(S.String),
          RestoreType: S.optional(S.String),
          SourceDBClusterIdentifier: S.optional(S.String),
          RestoreToTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UseLatestRestorableTime: S.optional(S.Boolean),
          Port: S.optional(S.Number),
          DBSubnetGroupName: S.optional(S.String),
          OptionGroupName: S.optional(S.String),
          VpcSecurityGroupIds: S.optional(VpcSecurityGroupIdList),
          Tags: S.optional(TagList),
          KmsKeyId: S.optional(S.String),
          EnableIAMDatabaseAuthentication: S.optional(S.Boolean),
          EnableCloudwatchLogsExports: S.optional(LogTypeList),
          DBClusterParameterGroupName: S.optional(S.String),
          DeletionProtection: S.optional(S.Boolean),
          ServerlessV2ScalingConfiguration: S.optional(ServerlessV2ScalingConfiguration),
          StorageType: S.optional(S.String),
          NetworkType: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RestoreDBClusterToPointInTimeMessage",
      });
    case 7:
      return S.suspend(() => S.Struct({ DBCluster: S.optional(DBCluster) }).pipe(ns)).annotate({
        identifier: "RestoreDBClusterToPointInTimeResult",
      });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DBClusterIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartDBClusterMessage" });
    case 1:
      return S.suspend(() => S.Struct({ DBCluster: S.optional(DBCluster) }).pipe(ns)).annotate({
        identifier: "StartDBClusterResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ DBClusterIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopDBClusterMessage" });
    case 3:
      return S.suspend(() => S.Struct({ DBCluster: S.optional(DBCluster) }).pipe(ns)).annotate({
        identifier: "StopDBClusterResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          GlobalClusterIdentifier: S.optional(S.String),
          TargetDbClusterIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SwitchoverGlobalClusterMessage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ GlobalCluster: S.optional(GlobalCluster) }).pipe(ns),
      ).annotate({
        identifier: "SwitchoverGlobalClusterResult",
      });
  }
}
