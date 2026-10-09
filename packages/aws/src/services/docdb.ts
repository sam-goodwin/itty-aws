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
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "DocDB", serviceShapeName: "AmazonRDSv19" });
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
export class NetworkTypeNotSupported
  extends /*@__PURE__*/ S.TaggedError<NetworkTypeNotSupported>()(
    "NetworkTypeNotSupported",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "NetworkTypeNotSupported", httpResponseCode: 400 }),
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
export interface AddSourceIdentifierToSubscriptionMessage {
  SubscriptionName?: string;
  SourceIdentifier?: string;
}
const AddSourceIdentifierToSubscriptionMessage = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<AddSourceIdentifierToSubscriptionMessage>;
export type SourceIdsList = string[];
const SourceIdsList = /*@__PURE__*/ __L.at(__c0, 1);
export type EventCategoriesList = string[];
const EventCategoriesList = /*@__PURE__*/ __L.at(__c0, 2);
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
const EventSubscription = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<EventSubscription>;
export interface AddSourceIdentifierToSubscriptionResult {
  EventSubscription?: EventSubscription;
}
const AddSourceIdentifierToSubscriptionResult = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<AddSourceIdentifierToSubscriptionResult>;
export interface Tag {
  Key?: string;
  Value?: string;
}
const Tag = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c0, 6);
export interface AddTagsToResourceMessage {
  ResourceName?: string;
  Tags?: Tag[];
}
const AddTagsToResourceMessage = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<AddTagsToResourceMessage>;
export interface AddTagsToResourceResponse {}
const AddTagsToResourceResponse = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<AddTagsToResourceResponse>;
export interface ApplyPendingMaintenanceActionMessage {
  ResourceIdentifier?: string;
  ApplyAction?: string;
  OptInType?: string;
}
const ApplyPendingMaintenanceActionMessage = /*@__PURE__*/ __L.at(
  __c1,
  1,
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
  2,
) as any as S.Schema<PendingMaintenanceAction>;
export type PendingMaintenanceActionDetails = PendingMaintenanceAction[];
const PendingMaintenanceActionDetails = /*@__PURE__*/ __L.at(__c1, 3);
export interface ResourcePendingMaintenanceActions {
  ResourceIdentifier?: string;
  PendingMaintenanceActionDetails?: PendingMaintenanceAction[];
}
const ResourcePendingMaintenanceActions = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<ResourcePendingMaintenanceActions>;
export interface ApplyPendingMaintenanceActionResult {
  ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
}
const ApplyPendingMaintenanceActionResult = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<ApplyPendingMaintenanceActionResult>;
export interface CopyDBClusterParameterGroupMessage {
  SourceDBClusterParameterGroupIdentifier?: string;
  TargetDBClusterParameterGroupIdentifier?: string;
  TargetDBClusterParameterGroupDescription?: string;
  Tags?: Tag[];
}
const CopyDBClusterParameterGroupMessage = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<CopyDBClusterParameterGroupMessage>;
export interface DBClusterParameterGroup {
  DBClusterParameterGroupName?: string;
  DBParameterGroupFamily?: string;
  Description?: string;
  DBClusterParameterGroupArn?: string;
}
const DBClusterParameterGroup = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<DBClusterParameterGroup>;
export interface CopyDBClusterParameterGroupResult {
  DBClusterParameterGroup?: DBClusterParameterGroup;
}
const CopyDBClusterParameterGroupResult = /*@__PURE__*/ __L.at(
  __c2,
  0,
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
  1,
) as any as S.Schema<CopyDBClusterSnapshotMessage>;
export type AvailabilityZones = string[];
const AvailabilityZones = /*@__PURE__*/ __L.at(__c2, 2);
export interface DBClusterSnapshot {
  AvailabilityZones?: string[];
  DBClusterSnapshotIdentifier?: string;
  DBClusterIdentifier?: string;
  SnapshotCreateTime?: Date;
  Engine?: string;
  Status?: string;
  Port?: number;
  VpcId?: string;
  ClusterCreateTime?: Date;
  MasterUsername?: string;
  EngineVersion?: string;
  SnapshotType?: string;
  PercentProgress?: number;
  StorageEncrypted?: boolean;
  KmsKeyId?: string;
  DBClusterSnapshotArn?: string;
  SourceDBClusterSnapshotArn?: string;
  StorageType?: string;
}
const DBClusterSnapshot = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<DBClusterSnapshot>;
export interface CopyDBClusterSnapshotResult {
  DBClusterSnapshot?: DBClusterSnapshot;
}
const CopyDBClusterSnapshotResult = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<CopyDBClusterSnapshotResult>;
export type VpcSecurityGroupIdList = string[];
const VpcSecurityGroupIdList = /*@__PURE__*/ __L.at(__c2, 5);
export type LogTypeList = string[];
const LogTypeList = /*@__PURE__*/ __L.at(__c2, 6);
export type GlobalClusterIdentifier = string;
export interface ServerlessV2ScalingConfiguration {
  MinCapacity?: number;
  MaxCapacity?: number;
}
const ServerlessV2ScalingConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<ServerlessV2ScalingConfiguration>;
export interface CreateDBClusterMessage {
  AvailabilityZones?: string[];
  BackupRetentionPeriod?: number;
  DBClusterIdentifier?: string;
  DBClusterParameterGroupName?: string;
  VpcSecurityGroupIds?: string[];
  DBSubnetGroupName?: string;
  Engine?: string;
  EngineVersion?: string;
  Port?: number;
  MasterUsername?: string;
  MasterUserPassword?: string | redacted.Redacted<string>;
  PreferredBackupWindow?: string;
  PreferredMaintenanceWindow?: string;
  Tags?: Tag[];
  StorageEncrypted?: boolean;
  KmsKeyId?: string;
  PreSignedUrl?: string;
  EnableCloudwatchLogsExports?: string[];
  DeletionProtection?: boolean;
  GlobalClusterIdentifier?: string;
  StorageType?: string;
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
  ManageMasterUserPassword?: boolean;
  MasterUserSecretKmsKeyId?: string;
  NetworkType?: string;
  CopyTagsToSnapshot?: boolean;
}
const CreateDBClusterMessage = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<CreateDBClusterMessage>;
export type ReadReplicaIdentifierList = string[];
const ReadReplicaIdentifierList = /*@__PURE__*/ __L.at(__c3, 1);
export interface DBClusterMember {
  DBInstanceIdentifier?: string;
  IsClusterWriter?: boolean;
  DBClusterParameterGroupStatus?: string;
  PromotionTier?: number;
}
const DBClusterMember = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<DBClusterMember>;
export type DBClusterMemberList = DBClusterMember[];
const DBClusterMemberList = /*@__PURE__*/ __L.at(__c3, 3);
export interface VpcSecurityGroupMembership {
  VpcSecurityGroupId?: string;
  Status?: string;
}
const VpcSecurityGroupMembership = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<VpcSecurityGroupMembership>;
export type VpcSecurityGroupMembershipList = VpcSecurityGroupMembership[];
const VpcSecurityGroupMembershipList = /*@__PURE__*/ __L.at(__c3, 5);
export interface DBClusterRole {
  RoleArn?: string;
  Status?: string;
}
const DBClusterRole = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<DBClusterRole>;
export type DBClusterRoles = DBClusterRole[];
const DBClusterRoles = /*@__PURE__*/ __L.at(__c3, 7);
export interface ServerlessV2ScalingConfigurationInfo {
  MinCapacity?: number;
  MaxCapacity?: number;
}
const ServerlessV2ScalingConfigurationInfo = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<ServerlessV2ScalingConfigurationInfo>;
export interface ClusterMasterUserSecret {
  SecretArn?: string;
  SecretStatus?: string;
  KmsKeyId?: string;
}
const ClusterMasterUserSecret = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<ClusterMasterUserSecret>;
export interface DBCluster {
  AvailabilityZones?: string[];
  BackupRetentionPeriod?: number;
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
  CloneGroupId?: string;
  ClusterCreateTime?: Date;
  EnabledCloudwatchLogsExports?: string[];
  DeletionProtection?: boolean;
  IOOptimizedNextAllowedModificationTime?: Date;
  StorageType?: string;
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfigurationInfo;
  MasterUserSecret?: ClusterMasterUserSecret;
  NetworkType?: string;
  CopyTagsToSnapshot?: boolean;
}
const DBCluster = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<DBCluster>;
export interface CreateDBClusterResult {
  DBCluster?: DBCluster;
}
const CreateDBClusterResult = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<CreateDBClusterResult>;
export interface CreateDBClusterParameterGroupMessage {
  DBClusterParameterGroupName?: string;
  DBParameterGroupFamily?: string;
  Description?: string;
  Tags?: Tag[];
}
const CreateDBClusterParameterGroupMessage = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<CreateDBClusterParameterGroupMessage>;
export interface CreateDBClusterParameterGroupResult {
  DBClusterParameterGroup?: DBClusterParameterGroup;
}
const CreateDBClusterParameterGroupResult = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<CreateDBClusterParameterGroupResult>;
export interface CreateDBClusterSnapshotMessage {
  DBClusterSnapshotIdentifier?: string;
  DBClusterIdentifier?: string;
  Tags?: Tag[];
}
const CreateDBClusterSnapshotMessage = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<CreateDBClusterSnapshotMessage>;
export interface CreateDBClusterSnapshotResult {
  DBClusterSnapshot?: DBClusterSnapshot;
}
const CreateDBClusterSnapshotResult = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<CreateDBClusterSnapshotResult>;
export interface CreateDBInstanceMessage {
  DBInstanceIdentifier?: string;
  DBInstanceClass?: string;
  Engine?: string;
  AvailabilityZone?: string;
  PreferredMaintenanceWindow?: string;
  AutoMinorVersionUpgrade?: boolean;
  Tags?: Tag[];
  DBClusterIdentifier?: string;
  CopyTagsToSnapshot?: boolean;
  PromotionTier?: number;
  EnablePerformanceInsights?: boolean;
  PerformanceInsightsKMSKeyId?: string;
  CACertificateIdentifier?: string;
}
const CreateDBInstanceMessage = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<CreateDBInstanceMessage>;
export interface Endpoint {
  Address?: string;
  Port?: number;
  HostedZoneId?: string;
}
const Endpoint = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<Endpoint>;
export interface AvailabilityZone {
  Name?: string;
}
const AvailabilityZone = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<AvailabilityZone>;
export interface Subnet {
  SubnetIdentifier?: string;
  SubnetAvailabilityZone?: AvailabilityZone;
  SubnetStatus?: string;
}
const Subnet = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<Subnet>;
export type SubnetList = Subnet[];
const SubnetList = /*@__PURE__*/ __L.at(__c5, 4);
export type NetworkTypeList = string[];
const NetworkTypeList = /*@__PURE__*/ __L.at(__c5, 5);
export interface DBSubnetGroup {
  DBSubnetGroupName?: string;
  DBSubnetGroupDescription?: string;
  VpcId?: string;
  SubnetGroupStatus?: string;
  Subnets?: Subnet[];
  DBSubnetGroupArn?: string;
  SupportedNetworkTypes?: string[];
}
const DBSubnetGroup = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<DBSubnetGroup>;
export interface PendingCloudwatchLogsExports {
  LogTypesToEnable?: string[];
  LogTypesToDisable?: string[];
}
const PendingCloudwatchLogsExports = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<PendingCloudwatchLogsExports>;
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
  __c6,
  0,
) as any as S.Schema<PendingModifiedValues>;
export interface DBInstanceStatusInfo {
  StatusType?: string;
  Normal?: boolean;
  Status?: string;
  Message?: string;
}
const DBInstanceStatusInfo = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<DBInstanceStatusInfo>;
export type DBInstanceStatusInfoList = DBInstanceStatusInfo[];
const DBInstanceStatusInfoList = /*@__PURE__*/ __L.at(__c6, 2);
export interface CertificateDetails {
  CAIdentifier?: string;
  ValidTill?: Date;
}
const CertificateDetails = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<CertificateDetails>;
export interface DBInstance {
  DBInstanceIdentifier?: string;
  DBInstanceClass?: string;
  Engine?: string;
  DBInstanceStatus?: string;
  Endpoint?: Endpoint;
  InstanceCreateTime?: Date;
  PreferredBackupWindow?: string;
  BackupRetentionPeriod?: number;
  VpcSecurityGroups?: VpcSecurityGroupMembership[];
  AvailabilityZone?: string;
  DBSubnetGroup?: DBSubnetGroup;
  PreferredMaintenanceWindow?: string;
  PendingModifiedValues?: PendingModifiedValues;
  LatestRestorableTime?: Date;
  EngineVersion?: string;
  AutoMinorVersionUpgrade?: boolean;
  PubliclyAccessible?: boolean;
  StatusInfos?: DBInstanceStatusInfo[];
  DBClusterIdentifier?: string;
  StorageEncrypted?: boolean;
  KmsKeyId?: string;
  DbiResourceId?: string;
  CACertificateIdentifier?: string;
  CopyTagsToSnapshot?: boolean;
  PromotionTier?: number;
  DBInstanceArn?: string;
  EnabledCloudwatchLogsExports?: string[];
  CertificateDetails?: CertificateDetails;
  PerformanceInsightsEnabled?: boolean;
  PerformanceInsightsKMSKeyId?: string;
}
const DBInstance = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<DBInstance>;
export interface CreateDBInstanceResult {
  DBInstance?: DBInstance;
}
const CreateDBInstanceResult = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<CreateDBInstanceResult>;
export type SubnetIdentifierList = string[];
const SubnetIdentifierList = /*@__PURE__*/ __L.at(__c6, 6);
export interface CreateDBSubnetGroupMessage {
  DBSubnetGroupName?: string;
  DBSubnetGroupDescription?: string;
  SubnetIds?: string[];
  Tags?: Tag[];
}
const CreateDBSubnetGroupMessage = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<CreateDBSubnetGroupMessage>;
export interface CreateDBSubnetGroupResult {
  DBSubnetGroup?: DBSubnetGroup;
}
const CreateDBSubnetGroupResult = /*@__PURE__*/ __L.at(
  __c7,
  0,
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
  __c7,
  1,
) as any as S.Schema<CreateEventSubscriptionMessage>;
export interface CreateEventSubscriptionResult {
  EventSubscription?: EventSubscription;
}
const CreateEventSubscriptionResult = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<CreateEventSubscriptionResult>;
export interface CreateGlobalClusterMessage {
  GlobalClusterIdentifier?: string;
  SourceDBClusterIdentifier?: string;
  Engine?: string;
  EngineVersion?: string;
  DeletionProtection?: boolean;
  DatabaseName?: string;
  StorageEncrypted?: boolean;
}
const CreateGlobalClusterMessage = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<CreateGlobalClusterMessage>;
export type ReadersArnList = string[];
const ReadersArnList = /*@__PURE__*/ __L.at(__c7, 4);
export type GlobalClusterMemberSynchronizationStatus =
  | "connected"
  | "pending-resync"
  | (string & {});
const GlobalClusterMemberSynchronizationStatus = S.String;

export interface GlobalClusterMember {
  DBClusterArn?: string;
  Readers?: string[];
  IsWriter?: boolean;
  SynchronizationStatus?: GlobalClusterMemberSynchronizationStatus;
}
const GlobalClusterMember = /*@__PURE__*/ __L.at(__c7, 5) as any as S.Schema<GlobalClusterMember>;
export type GlobalClusterMemberList = GlobalClusterMember[];
const GlobalClusterMemberList = /*@__PURE__*/ __L.at(__c7, 6);
export type FailoverStatus = "pending" | "failing-over" | "cancelling" | (string & {});
const FailoverStatus = S.String;

export interface FailoverState {
  Status?: FailoverStatus;
  FromDbClusterArn?: string;
  ToDbClusterArn?: string;
  IsDataLossAllowed?: boolean;
}
const FailoverState = /*@__PURE__*/ __L.at(__c7, 7) as any as S.Schema<FailoverState>;
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
const GlobalCluster = /*@__PURE__*/ __L.at(__c8, 0) as any as S.Schema<GlobalCluster>;
export interface CreateGlobalClusterResult {
  GlobalCluster?: GlobalCluster;
}
const CreateGlobalClusterResult = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<CreateGlobalClusterResult>;
export interface DeleteDBClusterMessage {
  DBClusterIdentifier?: string;
  SkipFinalSnapshot?: boolean;
  FinalDBSnapshotIdentifier?: string;
}
const DeleteDBClusterMessage = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<DeleteDBClusterMessage>;
export interface DeleteDBClusterResult {
  DBCluster?: DBCluster;
}
const DeleteDBClusterResult = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<DeleteDBClusterResult>;
export interface DeleteDBClusterParameterGroupMessage {
  DBClusterParameterGroupName?: string;
}
const DeleteDBClusterParameterGroupMessage = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<DeleteDBClusterParameterGroupMessage>;
export interface DeleteDBClusterParameterGroupResponse {}
const DeleteDBClusterParameterGroupResponse = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<DeleteDBClusterParameterGroupResponse>;
export interface DeleteDBClusterSnapshotMessage {
  DBClusterSnapshotIdentifier?: string;
}
const DeleteDBClusterSnapshotMessage = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<DeleteDBClusterSnapshotMessage>;
export interface DeleteDBClusterSnapshotResult {
  DBClusterSnapshot?: DBClusterSnapshot;
}
const DeleteDBClusterSnapshotResult = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<DeleteDBClusterSnapshotResult>;
export interface DeleteDBInstanceMessage {
  DBInstanceIdentifier?: string;
}
const DeleteDBInstanceMessage = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<DeleteDBInstanceMessage>;
export interface DeleteDBInstanceResult {
  DBInstance?: DBInstance;
}
const DeleteDBInstanceResult = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<DeleteDBInstanceResult>;
export interface DeleteDBSubnetGroupMessage {
  DBSubnetGroupName?: string;
}
const DeleteDBSubnetGroupMessage = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<DeleteDBSubnetGroupMessage>;
export interface DeleteDBSubnetGroupResponse {}
const DeleteDBSubnetGroupResponse = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<DeleteDBSubnetGroupResponse>;
export interface DeleteEventSubscriptionMessage {
  SubscriptionName?: string;
}
const DeleteEventSubscriptionMessage = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<DeleteEventSubscriptionMessage>;
export interface DeleteEventSubscriptionResult {
  EventSubscription?: EventSubscription;
}
const DeleteEventSubscriptionResult = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<DeleteEventSubscriptionResult>;
export interface DeleteGlobalClusterMessage {
  GlobalClusterIdentifier?: string;
}
const DeleteGlobalClusterMessage = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<DeleteGlobalClusterMessage>;
export interface DeleteGlobalClusterResult {
  GlobalCluster?: GlobalCluster;
}
const DeleteGlobalClusterResult = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<DeleteGlobalClusterResult>;
export type FilterValueList = string[];
const FilterValueList = /*@__PURE__*/ __L.at(__c10, 0);
export interface Filter {
  Name?: string;
  Values?: string[];
}
const Filter = /*@__PURE__*/ __L.at(__c10, 1) as any as S.Schema<Filter>;
export type FilterList = Filter[];
const FilterList = /*@__PURE__*/ __L.at(__c10, 2);
export interface DescribeCertificatesMessage {
  CertificateIdentifier?: string;
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
const DescribeCertificatesMessage = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<DescribeCertificatesMessage>;
export interface Certificate {
  CertificateIdentifier?: string;
  CertificateType?: string;
  Thumbprint?: string;
  ValidFrom?: Date;
  ValidTill?: Date;
  CertificateArn?: string;
}
const Certificate = /*@__PURE__*/ __L.at(__c10, 4) as any as S.Schema<Certificate>;
export type CertificateList = Certificate[];
const CertificateList = /*@__PURE__*/ __L.at(__c10, 5);
export interface CertificateMessage {
  Certificates?: Certificate[];
  Marker?: string;
}
const CertificateMessage = /*@__PURE__*/ __L.at(__c10, 6) as any as S.Schema<CertificateMessage>;
export interface DescribeDBClusterParameterGroupsMessage {
  DBClusterParameterGroupName?: string;
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
const DescribeDBClusterParameterGroupsMessage = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<DescribeDBClusterParameterGroupsMessage>;
export type DBClusterParameterGroupList = DBClusterParameterGroup[];
const DBClusterParameterGroupList = /*@__PURE__*/ __L.at(__c11, 0);
export interface DBClusterParameterGroupsMessage {
  Marker?: string;
  DBClusterParameterGroups?: DBClusterParameterGroup[];
}
const DBClusterParameterGroupsMessage = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<DBClusterParameterGroupsMessage>;
export interface DescribeDBClusterParametersMessage {
  DBClusterParameterGroupName?: string;
  Source?: string;
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
const DescribeDBClusterParametersMessage = /*@__PURE__*/ __L.at(
  __c11,
  2,
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
const Parameter = /*@__PURE__*/ __L.at(__c11, 3) as any as S.Schema<Parameter>;
export type ParametersList = Parameter[];
const ParametersList = /*@__PURE__*/ __L.at(__c11, 4);
export interface DBClusterParameterGroupDetails {
  Parameters?: Parameter[];
  Marker?: string;
}
const DBClusterParameterGroupDetails = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<DBClusterParameterGroupDetails>;
export interface DescribeDBClustersMessage {
  DBClusterIdentifier?: string;
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
const DescribeDBClustersMessage = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<DescribeDBClustersMessage>;
export type DBClusterList = DBCluster[];
const DBClusterList = /*@__PURE__*/ __L.at(__c11, 7);
export interface DBClusterMessage {
  Marker?: string;
  DBClusters?: DBCluster[];
}
const DBClusterMessage = /*@__PURE__*/ __L.at(__c12, 0) as any as S.Schema<DBClusterMessage>;
export interface DescribeDBClusterSnapshotAttributesMessage {
  DBClusterSnapshotIdentifier?: string;
}
const DescribeDBClusterSnapshotAttributesMessage = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<DescribeDBClusterSnapshotAttributesMessage>;
export type AttributeValueList = string[];
const AttributeValueList = /*@__PURE__*/ __L.at(__c12, 2);
export interface DBClusterSnapshotAttribute {
  AttributeName?: string;
  AttributeValues?: string[];
}
const DBClusterSnapshotAttribute = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<DBClusterSnapshotAttribute>;
export type DBClusterSnapshotAttributeList = DBClusterSnapshotAttribute[];
const DBClusterSnapshotAttributeList = /*@__PURE__*/ __L.at(__c12, 4);
export interface DBClusterSnapshotAttributesResult {
  DBClusterSnapshotIdentifier?: string;
  DBClusterSnapshotAttributes?: DBClusterSnapshotAttribute[];
}
const DBClusterSnapshotAttributesResult = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<DBClusterSnapshotAttributesResult>;
export interface DescribeDBClusterSnapshotAttributesResult {
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
}
const DescribeDBClusterSnapshotAttributesResult = /*@__PURE__*/ __L.at(
  __c12,
  6,
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
  __c12,
  7,
) as any as S.Schema<DescribeDBClusterSnapshotsMessage>;
export type DBClusterSnapshotList = DBClusterSnapshot[];
const DBClusterSnapshotList = /*@__PURE__*/ __L.at(__c13, 0);
export interface DBClusterSnapshotMessage {
  Marker?: string;
  DBClusterSnapshots?: DBClusterSnapshot[];
}
const DBClusterSnapshotMessage = /*@__PURE__*/ __L.at(
  __c13,
  1,
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
  __c13,
  2,
) as any as S.Schema<DescribeDBEngineVersionsMessage>;
export interface UpgradeTarget {
  Engine?: string;
  EngineVersion?: string;
  Description?: string;
  AutoUpgrade?: boolean;
  IsMajorVersionUpgrade?: boolean;
}
const UpgradeTarget = /*@__PURE__*/ __L.at(__c13, 3) as any as S.Schema<UpgradeTarget>;
export type ValidUpgradeTargetList = UpgradeTarget[];
const ValidUpgradeTargetList = /*@__PURE__*/ __L.at(__c13, 4);
export type CACertificateIdentifiersList = string[];
const CACertificateIdentifiersList = /*@__PURE__*/ __L.at(__c13, 5);
export interface ServerlessV2FeaturesSupport {
  MinCapacity?: number;
  MaxCapacity?: number;
}
const ServerlessV2FeaturesSupport = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<ServerlessV2FeaturesSupport>;
export interface DBEngineVersion {
  Engine?: string;
  EngineVersion?: string;
  DBParameterGroupFamily?: string;
  DBEngineDescription?: string;
  DBEngineVersionDescription?: string;
  ValidUpgradeTarget?: UpgradeTarget[];
  ExportableLogTypes?: string[];
  SupportsLogExportsToCloudwatchLogs?: boolean;
  SupportedCACertificateIdentifiers?: string[];
  SupportsCertificateRotationWithoutRestart?: boolean;
  ServerlessV2FeaturesSupport?: ServerlessV2FeaturesSupport;
}
const DBEngineVersion = /*@__PURE__*/ __L.at(__c13, 7) as any as S.Schema<DBEngineVersion>;
export type DBEngineVersionList = DBEngineVersion[];
const DBEngineVersionList = /*@__PURE__*/ __L.at(__c14, 0);
export interface DBEngineVersionMessage {
  Marker?: string;
  DBEngineVersions?: DBEngineVersion[];
}
const DBEngineVersionMessage = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<DBEngineVersionMessage>;
export interface DescribeDBInstancesMessage {
  DBInstanceIdentifier?: string;
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
const DescribeDBInstancesMessage = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<DescribeDBInstancesMessage>;
export type DBInstanceList = DBInstance[];
const DBInstanceList = /*@__PURE__*/ __L.at(__c14, 3);
export interface DBInstanceMessage {
  Marker?: string;
  DBInstances?: DBInstance[];
}
const DBInstanceMessage = /*@__PURE__*/ __L.at(__c14, 4) as any as S.Schema<DBInstanceMessage>;
export interface DescribeDBSubnetGroupsMessage {
  DBSubnetGroupName?: string;
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
const DescribeDBSubnetGroupsMessage = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<DescribeDBSubnetGroupsMessage>;
export type DBSubnetGroups = DBSubnetGroup[];
const DBSubnetGroups = /*@__PURE__*/ __L.at(__c14, 6);
export interface DBSubnetGroupMessage {
  Marker?: string;
  DBSubnetGroups?: DBSubnetGroup[];
}
const DBSubnetGroupMessage = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<DBSubnetGroupMessage>;
export interface DescribeEngineDefaultClusterParametersMessage {
  DBParameterGroupFamily?: string;
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
const DescribeEngineDefaultClusterParametersMessage = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<DescribeEngineDefaultClusterParametersMessage>;
export interface EngineDefaults {
  DBParameterGroupFamily?: string;
  Marker?: string;
  Parameters?: Parameter[];
}
const EngineDefaults = /*@__PURE__*/ __L.at(__c15, 1) as any as S.Schema<EngineDefaults>;
export interface DescribeEngineDefaultClusterParametersResult {
  EngineDefaults?: EngineDefaults;
}
const DescribeEngineDefaultClusterParametersResult = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<DescribeEngineDefaultClusterParametersResult>;
export interface DescribeEventCategoriesMessage {
  SourceType?: string;
  Filters?: Filter[];
}
const DescribeEventCategoriesMessage = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<DescribeEventCategoriesMessage>;
export interface EventCategoriesMap {
  SourceType?: string;
  EventCategories?: string[];
}
const EventCategoriesMap = /*@__PURE__*/ __L.at(__c15, 4) as any as S.Schema<EventCategoriesMap>;
export type EventCategoriesMapList = EventCategoriesMap[];
const EventCategoriesMapList = /*@__PURE__*/ __L.at(__c15, 5);
export interface EventCategoriesMessage {
  EventCategoriesMapList?: EventCategoriesMap[];
}
const EventCategoriesMessage = /*@__PURE__*/ __L.at(
  __c15,
  6,
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
  __c15,
  7,
) as any as S.Schema<DescribeEventsMessage>;
export interface Event {
  SourceIdentifier?: string;
  SourceType?: SourceType;
  Message?: string;
  EventCategories?: string[];
  Date?: Date;
  SourceArn?: string;
}
const Event = /*@__PURE__*/ __L.at(__c16, 0) as any as S.Schema<Event>;
export type EventList = Event[];
const EventList = /*@__PURE__*/ __L.at(__c16, 1);
export interface EventsMessage {
  Marker?: string;
  Events?: Event[];
}
const EventsMessage = /*@__PURE__*/ __L.at(__c16, 2) as any as S.Schema<EventsMessage>;
export interface DescribeEventSubscriptionsMessage {
  SubscriptionName?: string;
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
const DescribeEventSubscriptionsMessage = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<DescribeEventSubscriptionsMessage>;
export type EventSubscriptionsList = EventSubscription[];
const EventSubscriptionsList = /*@__PURE__*/ __L.at(__c16, 4);
export interface EventSubscriptionsMessage {
  Marker?: string;
  EventSubscriptionsList?: EventSubscription[];
}
const EventSubscriptionsMessage = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<EventSubscriptionsMessage>;
export interface DescribeGlobalClustersMessage {
  GlobalClusterIdentifier?: string;
  Filters?: Filter[];
  MaxRecords?: number;
  Marker?: string;
}
const DescribeGlobalClustersMessage = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<DescribeGlobalClustersMessage>;
export type GlobalClusterList = GlobalCluster[];
const GlobalClusterList = /*@__PURE__*/ __L.at(__c16, 7);
export interface GlobalClustersMessage {
  Marker?: string;
  GlobalClusters?: GlobalCluster[];
}
const GlobalClustersMessage = /*@__PURE__*/ __L.at(
  __c17,
  0,
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
  __c17,
  1,
) as any as S.Schema<DescribeOrderableDBInstanceOptionsMessage>;
export type AvailabilityZoneList = AvailabilityZone[];
const AvailabilityZoneList = /*@__PURE__*/ __L.at(__c17, 2);
export interface OrderableDBInstanceOption {
  Engine?: string;
  EngineVersion?: string;
  DBInstanceClass?: string;
  LicenseModel?: string;
  AvailabilityZones?: AvailabilityZone[];
  Vpc?: boolean;
  StorageType?: string;
}
const OrderableDBInstanceOption = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<OrderableDBInstanceOption>;
export type OrderableDBInstanceOptionsList = OrderableDBInstanceOption[];
const OrderableDBInstanceOptionsList = /*@__PURE__*/ __L.at(__c17, 4);
export interface OrderableDBInstanceOptionsMessage {
  OrderableDBInstanceOptions?: OrderableDBInstanceOption[];
  Marker?: string;
}
const OrderableDBInstanceOptionsMessage = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<OrderableDBInstanceOptionsMessage>;
export interface DescribePendingMaintenanceActionsMessage {
  ResourceIdentifier?: string;
  Filters?: Filter[];
  Marker?: string;
  MaxRecords?: number;
}
const DescribePendingMaintenanceActionsMessage = /*@__PURE__*/ __L.at(
  __c17,
  6,
) as any as S.Schema<DescribePendingMaintenanceActionsMessage>;
export type PendingMaintenanceActions = ResourcePendingMaintenanceActions[];
const PendingMaintenanceActions = /*@__PURE__*/ __L.at(__c17, 7);
export interface PendingMaintenanceActionsMessage {
  PendingMaintenanceActions?: ResourcePendingMaintenanceActions[];
  Marker?: string;
}
const PendingMaintenanceActionsMessage = /*@__PURE__*/ __L.at(
  __c18,
  0,
) as any as S.Schema<PendingMaintenanceActionsMessage>;
export interface FailoverDBClusterMessage {
  DBClusterIdentifier?: string;
  TargetDBInstanceIdentifier?: string;
}
const FailoverDBClusterMessage = /*@__PURE__*/ __L.at(
  __c18,
  1,
) as any as S.Schema<FailoverDBClusterMessage>;
export interface FailoverDBClusterResult {
  DBCluster?: DBCluster;
}
const FailoverDBClusterResult = /*@__PURE__*/ __L.at(
  __c18,
  2,
) as any as S.Schema<FailoverDBClusterResult>;
export type DBClusterIdentifier = string;
export interface FailoverGlobalClusterMessage {
  GlobalClusterIdentifier?: string;
  TargetDbClusterIdentifier?: string;
  AllowDataLoss?: boolean;
  Switchover?: boolean;
}
const FailoverGlobalClusterMessage = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<FailoverGlobalClusterMessage>;
export interface FailoverGlobalClusterResult {
  GlobalCluster?: GlobalCluster;
}
const FailoverGlobalClusterResult = /*@__PURE__*/ __L.at(
  __c18,
  4,
) as any as S.Schema<FailoverGlobalClusterResult>;
export interface ListTagsForResourceMessage {
  ResourceName?: string;
  Filters?: Filter[];
}
const ListTagsForResourceMessage = /*@__PURE__*/ __L.at(
  __c18,
  5,
) as any as S.Schema<ListTagsForResourceMessage>;
export interface TagListMessage {
  TagList?: Tag[];
}
const TagListMessage = /*@__PURE__*/ __L.at(__c18, 6) as any as S.Schema<TagListMessage>;
export interface CloudwatchLogsExportConfiguration {
  EnableLogTypes?: string[];
  DisableLogTypes?: string[];
}
const CloudwatchLogsExportConfiguration = /*@__PURE__*/ __L.at(
  __c18,
  7,
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
  PreferredBackupWindow?: string;
  PreferredMaintenanceWindow?: string;
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;
  EngineVersion?: string;
  AllowMajorVersionUpgrade?: boolean;
  DeletionProtection?: boolean;
  StorageType?: string;
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
  ManageMasterUserPassword?: boolean;
  MasterUserSecretKmsKeyId?: string;
  RotateMasterUserPassword?: boolean;
  NetworkType?: string;
  CopyTagsToSnapshot?: boolean;
}
const ModifyDBClusterMessage = /*@__PURE__*/ __L.at(
  __c19,
  0,
) as any as S.Schema<ModifyDBClusterMessage>;
export interface ModifyDBClusterResult {
  DBCluster?: DBCluster;
}
const ModifyDBClusterResult = /*@__PURE__*/ __L.at(
  __c19,
  1,
) as any as S.Schema<ModifyDBClusterResult>;
export interface ModifyDBClusterParameterGroupMessage {
  DBClusterParameterGroupName?: string;
  Parameters?: Parameter[];
}
const ModifyDBClusterParameterGroupMessage = /*@__PURE__*/ __L.at(
  __c19,
  2,
) as any as S.Schema<ModifyDBClusterParameterGroupMessage>;
export interface DBClusterParameterGroupNameMessage {
  DBClusterParameterGroupName?: string;
}
const DBClusterParameterGroupNameMessage = /*@__PURE__*/ __L.at(
  __c19,
  3,
) as any as S.Schema<DBClusterParameterGroupNameMessage>;
export interface ModifyDBClusterSnapshotAttributeMessage {
  DBClusterSnapshotIdentifier?: string;
  AttributeName?: string;
  ValuesToAdd?: string[];
  ValuesToRemove?: string[];
}
const ModifyDBClusterSnapshotAttributeMessage = /*@__PURE__*/ __L.at(
  __c19,
  4,
) as any as S.Schema<ModifyDBClusterSnapshotAttributeMessage>;
export interface ModifyDBClusterSnapshotAttributeResult {
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
}
const ModifyDBClusterSnapshotAttributeResult = /*@__PURE__*/ __L.at(
  __c19,
  5,
) as any as S.Schema<ModifyDBClusterSnapshotAttributeResult>;
export interface ModifyDBInstanceMessage {
  DBInstanceIdentifier?: string;
  DBInstanceClass?: string;
  ApplyImmediately?: boolean;
  PreferredMaintenanceWindow?: string;
  AutoMinorVersionUpgrade?: boolean;
  NewDBInstanceIdentifier?: string;
  CACertificateIdentifier?: string;
  CopyTagsToSnapshot?: boolean;
  PromotionTier?: number;
  EnablePerformanceInsights?: boolean;
  PerformanceInsightsKMSKeyId?: string;
  CertificateRotationRestart?: boolean;
}
const ModifyDBInstanceMessage = /*@__PURE__*/ __L.at(
  __c19,
  6,
) as any as S.Schema<ModifyDBInstanceMessage>;
export interface ModifyDBInstanceResult {
  DBInstance?: DBInstance;
}
const ModifyDBInstanceResult = /*@__PURE__*/ __L.at(
  __c19,
  7,
) as any as S.Schema<ModifyDBInstanceResult>;
export interface ModifyDBSubnetGroupMessage {
  DBSubnetGroupName?: string;
  DBSubnetGroupDescription?: string;
  SubnetIds?: string[];
}
const ModifyDBSubnetGroupMessage = /*@__PURE__*/ __L.at(
  __c20,
  0,
) as any as S.Schema<ModifyDBSubnetGroupMessage>;
export interface ModifyDBSubnetGroupResult {
  DBSubnetGroup?: DBSubnetGroup;
}
const ModifyDBSubnetGroupResult = /*@__PURE__*/ __L.at(
  __c20,
  1,
) as any as S.Schema<ModifyDBSubnetGroupResult>;
export interface ModifyEventSubscriptionMessage {
  SubscriptionName?: string;
  SnsTopicArn?: string;
  SourceType?: string;
  EventCategories?: string[];
  Enabled?: boolean;
}
const ModifyEventSubscriptionMessage = /*@__PURE__*/ __L.at(
  __c20,
  2,
) as any as S.Schema<ModifyEventSubscriptionMessage>;
export interface ModifyEventSubscriptionResult {
  EventSubscription?: EventSubscription;
}
const ModifyEventSubscriptionResult = /*@__PURE__*/ __L.at(
  __c20,
  3,
) as any as S.Schema<ModifyEventSubscriptionResult>;
export interface ModifyGlobalClusterMessage {
  GlobalClusterIdentifier?: string;
  NewGlobalClusterIdentifier?: string;
  DeletionProtection?: boolean;
}
const ModifyGlobalClusterMessage = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<ModifyGlobalClusterMessage>;
export interface ModifyGlobalClusterResult {
  GlobalCluster?: GlobalCluster;
}
const ModifyGlobalClusterResult = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<ModifyGlobalClusterResult>;
export interface RebootDBInstanceMessage {
  DBInstanceIdentifier?: string;
  ForceFailover?: boolean;
}
const RebootDBInstanceMessage = /*@__PURE__*/ __L.at(
  __c20,
  6,
) as any as S.Schema<RebootDBInstanceMessage>;
export interface RebootDBInstanceResult {
  DBInstance?: DBInstance;
}
const RebootDBInstanceResult = /*@__PURE__*/ __L.at(
  __c20,
  7,
) as any as S.Schema<RebootDBInstanceResult>;
export interface RemoveFromGlobalClusterMessage {
  GlobalClusterIdentifier?: string;
  DbClusterIdentifier?: string;
}
const RemoveFromGlobalClusterMessage = /*@__PURE__*/ __L.at(
  __c21,
  0,
) as any as S.Schema<RemoveFromGlobalClusterMessage>;
export interface RemoveFromGlobalClusterResult {
  GlobalCluster?: GlobalCluster;
}
const RemoveFromGlobalClusterResult = /*@__PURE__*/ __L.at(
  __c21,
  1,
) as any as S.Schema<RemoveFromGlobalClusterResult>;
export interface RemoveSourceIdentifierFromSubscriptionMessage {
  SubscriptionName?: string;
  SourceIdentifier?: string;
}
const RemoveSourceIdentifierFromSubscriptionMessage = /*@__PURE__*/ __L.at(
  __c21,
  2,
) as any as S.Schema<RemoveSourceIdentifierFromSubscriptionMessage>;
export interface RemoveSourceIdentifierFromSubscriptionResult {
  EventSubscription?: EventSubscription;
}
const RemoveSourceIdentifierFromSubscriptionResult = /*@__PURE__*/ __L.at(
  __c21,
  3,
) as any as S.Schema<RemoveSourceIdentifierFromSubscriptionResult>;
export type KeyList = string[];
const KeyList = /*@__PURE__*/ __L.at(__c21, 4);
export interface RemoveTagsFromResourceMessage {
  ResourceName?: string;
  TagKeys?: string[];
}
const RemoveTagsFromResourceMessage = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<RemoveTagsFromResourceMessage>;
export interface RemoveTagsFromResourceResponse {}
const RemoveTagsFromResourceResponse = /*@__PURE__*/ __L.at(
  __c21,
  6,
) as any as S.Schema<RemoveTagsFromResourceResponse>;
export interface ResetDBClusterParameterGroupMessage {
  DBClusterParameterGroupName?: string;
  ResetAllParameters?: boolean;
  Parameters?: Parameter[];
}
const ResetDBClusterParameterGroupMessage = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<ResetDBClusterParameterGroupMessage>;
export interface RestoreDBClusterFromSnapshotMessage {
  AvailabilityZones?: string[];
  DBClusterIdentifier?: string;
  SnapshotIdentifier?: string;
  Engine?: string;
  EngineVersion?: string;
  Port?: number;
  DBSubnetGroupName?: string;
  VpcSecurityGroupIds?: string[];
  Tags?: Tag[];
  KmsKeyId?: string;
  EnableCloudwatchLogsExports?: string[];
  DeletionProtection?: boolean;
  DBClusterParameterGroupName?: string;
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
  StorageType?: string;
  NetworkType?: string;
  CopyTagsToSnapshot?: boolean;
}
const RestoreDBClusterFromSnapshotMessage = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<RestoreDBClusterFromSnapshotMessage>;
export interface RestoreDBClusterFromSnapshotResult {
  DBCluster?: DBCluster;
}
const RestoreDBClusterFromSnapshotResult = /*@__PURE__*/ __L.at(
  __c22,
  1,
) as any as S.Schema<RestoreDBClusterFromSnapshotResult>;
export interface RestoreDBClusterToPointInTimeMessage {
  DBClusterIdentifier?: string;
  RestoreType?: string;
  SourceDBClusterIdentifier?: string;
  RestoreToTime?: Date;
  UseLatestRestorableTime?: boolean;
  Port?: number;
  DBSubnetGroupName?: string;
  VpcSecurityGroupIds?: string[];
  Tags?: Tag[];
  KmsKeyId?: string;
  EnableCloudwatchLogsExports?: string[];
  DeletionProtection?: boolean;
  ServerlessV2ScalingConfiguration?: ServerlessV2ScalingConfiguration;
  StorageType?: string;
  NetworkType?: string;
  CopyTagsToSnapshot?: boolean;
}
const RestoreDBClusterToPointInTimeMessage = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<RestoreDBClusterToPointInTimeMessage>;
export interface RestoreDBClusterToPointInTimeResult {
  DBCluster?: DBCluster;
}
const RestoreDBClusterToPointInTimeResult = /*@__PURE__*/ __L.at(
  __c22,
  3,
) as any as S.Schema<RestoreDBClusterToPointInTimeResult>;
export interface StartDBClusterMessage {
  DBClusterIdentifier?: string;
}
const StartDBClusterMessage = /*@__PURE__*/ __L.at(
  __c22,
  4,
) as any as S.Schema<StartDBClusterMessage>;
export interface StartDBClusterResult {
  DBCluster?: DBCluster;
}
const StartDBClusterResult = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<StartDBClusterResult>;
export interface StopDBClusterMessage {
  DBClusterIdentifier?: string;
}
const StopDBClusterMessage = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<StopDBClusterMessage>;
export interface StopDBClusterResult {
  DBCluster?: DBCluster;
}
const StopDBClusterResult = /*@__PURE__*/ __L.at(__c22, 7) as any as S.Schema<StopDBClusterResult>;
export interface SwitchoverGlobalClusterMessage {
  GlobalClusterIdentifier?: string;
  TargetDbClusterIdentifier?: string;
}
const SwitchoverGlobalClusterMessage = /*@__PURE__*/ __L.at(
  __c23,
  0,
) as any as S.Schema<SwitchoverGlobalClusterMessage>;
export interface SwitchoverGlobalClusterResult {
  GlobalCluster?: GlobalCluster;
}
const SwitchoverGlobalClusterResult = /*@__PURE__*/ __L.at(
  __c23,
  1,
) as any as S.Schema<SwitchoverGlobalClusterResult>;
export type ExceptionMessage = string;
export type AddSourceIdentifierToSubscriptionError =
  | SourceNotFoundFault
  | SubscriptionNotFoundFault
  | CommonErrors;
/**
 * Adds a source identifier to an existing event notification
 * subscription.
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
 * Adds metadata tags to an Amazon DocumentDB resource. You can use these tags
 * with cost allocation reporting to track costs that are associated
 * with Amazon DocumentDB resources or in a `Condition` statement in
 * an Identity and Access Management (IAM) policy for Amazon DocumentDB.
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

export type ApplyPendingMaintenanceActionError =
  | InvalidDBClusterStateFault
  | InvalidDBInstanceStateFault
  | ResourceNotFoundFault
  | CommonErrors;
/**
 * Applies a pending maintenance action to a resource (for example,
 * to an Amazon DocumentDB instance).
 */
export const applyPendingMaintenanceAction: API.OperationMethod<
  ApplyPendingMaintenanceActionMessage,
  ApplyPendingMaintenanceActionResult,
  ApplyPendingMaintenanceActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ApplyPendingMaintenanceActionMessage,
  output: ApplyPendingMaintenanceActionResult,
  errors: [InvalidDBClusterStateFault, InvalidDBInstanceStateFault, ResourceNotFoundFault],
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
 * Copies the specified cluster parameter group.
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
 * Copies a snapshot of a cluster.
 *
 * To copy a cluster snapshot from a shared manual cluster snapshot,
 * `SourceDBClusterSnapshotIdentifier` must be the Amazon
 * Resource Name (ARN) of the shared cluster snapshot. You can only
 * copy a shared DB cluster snapshot, whether encrypted or not, in the
 * same Amazon Web Services Region.
 *
 * To cancel the copy operation after it is in progress, delete the
 * target cluster snapshot identified by
 * `TargetDBClusterSnapshotIdentifier` while that cluster
 * snapshot is in the *copying* status.
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
  | NetworkTypeNotSupported
  | StorageQuotaExceededFault
  | CommonErrors;
/**
 * Creates a new Amazon DocumentDB cluster.
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
    NetworkTypeNotSupported,
    StorageQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDBCluster",
}));

export type CreateDBClusterParameterGroupError =
  | DBParameterGroupAlreadyExistsFault
  | DBParameterGroupQuotaExceededFault
  | CommonErrors;
/**
 * Creates a new cluster parameter group.
 *
 * Parameters in a cluster parameter group apply to all of the
 * instances in a cluster.
 *
 * A cluster parameter group is initially created with the default
 * parameters for the database engine used by instances in the cluster.
 * In Amazon DocumentDB, you cannot make modifications directly to the
 * `default.docdb3.6` cluster parameter group. If your
 * Amazon DocumentDB cluster is using the default cluster parameter group and you
 * want to modify a value in it, you must first
 * create a new parameter group
 * or
 * copy an existing parameter group,
 * modify it, and then apply the modified parameter group to your
 * cluster. For the new cluster parameter group and associated settings
 * to take effect, you must then reboot the instances in the cluster
 * without failover. For more information,
 * see
 * Modifying Amazon DocumentDB Cluster Parameter Groups.
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
 * Creates a snapshot of a cluster.
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
  | InstanceQuotaExceededFault
  | InsufficientDBInstanceCapacityFault
  | InvalidDBClusterStateFault
  | InvalidSubnet
  | InvalidVPCNetworkStateFault
  | KMSKeyNotAccessibleFault
  | StorageQuotaExceededFault
  | StorageTypeNotSupportedFault
  | CommonErrors;
/**
 * Creates a new instance.
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
    InstanceQuotaExceededFault,
    InsufficientDBInstanceCapacityFault,
    InvalidDBClusterStateFault,
    InvalidSubnet,
    InvalidVPCNetworkStateFault,
    KMSKeyNotAccessibleFault,
    StorageQuotaExceededFault,
    StorageTypeNotSupportedFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDBInstance",
}));

export type CreateDBSubnetGroupError =
  | DBSubnetGroupAlreadyExistsFault
  | DBSubnetGroupDoesNotCoverEnoughAZs
  | DBSubnetGroupQuotaExceededFault
  | DBSubnetQuotaExceededFault
  | InvalidSubnet
  | CommonErrors;
/**
 * Creates a new subnet group. subnet groups must contain at least one subnet in at
 * least two Availability Zones in the Amazon Web Services Region.
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
 * Creates an Amazon DocumentDB event notification subscription. This action requires a topic Amazon Resource Name (ARN) created by using the Amazon DocumentDB console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the Amazon SNS console.
 *
 * You can specify the type of source (`SourceType`) that you want to be notified of. You can also provide a list of Amazon DocumentDB sources (`SourceIds`) that trigger the events, and you can provide a list of event categories (`EventCategories`) for events that you want to be notified of. For example, you can specify `SourceType = db-instance`, `SourceIds = mydbinstance1, mydbinstance2` and `EventCategories = Availability, Backup`.
 *
 * If you specify both the `SourceType` and `SourceIds` (such as `SourceType = db-instance` and `SourceIdentifier = myDBInstance1`), you are notified of all the `db-instance` events for the specified source. If you specify a `SourceType` but do not specify a `SourceIdentifier`, you receive notice of the events for that source type for all your Amazon DocumentDB sources. If you do not specify either the `SourceType` or the `SourceIdentifier`, you are notified of events generated from all Amazon DocumentDB sources belonging to your customer account.
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
 * Creates an Amazon DocumentDB global cluster that can span multiple multiple Amazon Web Services Regions.
 * The global cluster contains one primary cluster with read-write capability, and up-to 10 read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload's performance.
 *
 * You can create a global cluster that is initially empty, and then add a primary and a secondary to it.
 * Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster.
 *
 * This action only applies to Amazon DocumentDB clusters.
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
 * Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.
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

export type DeleteDBClusterParameterGroupError =
  | DBParameterGroupNotFoundFault
  | InvalidDBParameterGroupStateFault
  | CommonErrors;
/**
 * Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.
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
 * Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.
 *
 * The cluster snapshot must be in the `available` state to be deleted.
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
 * Deletes a previously provisioned instance.
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

export type DeleteDBSubnetGroupError =
  | DBSubnetGroupNotFoundFault
  | InvalidDBSubnetGroupStateFault
  | InvalidDBSubnetStateFault
  | CommonErrors;
/**
 * Deletes a subnet group.
 *
 * The specified database subnet group must not be associated with any DB
 * instances.
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
 * Deletes an Amazon DocumentDB event notification subscription.
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
 * Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.
 *
 * This action only applies to Amazon DocumentDB clusters.
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

export type DescribeCertificatesError = CertificateNotFoundFault | CommonErrors;
/**
 * Returns a list of certificate authority (CA) certificates provided by Amazon DocumentDB for this Amazon Web Services account.
 */
export const describeCertificates: API.PaginatedOperationMethod<
  DescribeCertificatesMessage,
  CertificateMessage,
  DescribeCertificatesError,
  Credentials | HttpClient.HttpClient,
  Certificate
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeCertificatesMessage,
  output: CertificateMessage,
  errors: [CertificateNotFoundFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCertificates",
  pagination: {
    inputToken: "Marker",
    outputToken: "Marker",
    items: "Certificates",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeDBClusterParameterGroupsError = DBParameterGroupNotFoundFault | CommonErrors;
/**
 * Returns a list of `DBClusterParameterGroup` descriptions. If a `DBClusterParameterGroupName` parameter is specified, the list contains only the description of the specified cluster parameter group.
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
 * Returns the detailed parameter list for a particular cluster parameter
 * group.
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
 * Returns information about provisioned Amazon DocumentDB clusters. This API
 * operation supports pagination. For certain management features
 * such as cluster and instance lifecycle management, Amazon DocumentDB leverages
 * operational technology that is shared with Amazon RDS and Amazon
 * Neptune. Use the `filterName=engine,Values=docdb` filter
 * parameter to return only Amazon DocumentDB clusters.
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
 * Returns a list of cluster snapshot attribute names and values for a manual DB
 * cluster snapshot.
 *
 * When you share snapshots with other Amazon Web Services accounts,
 * `DescribeDBClusterSnapshotAttributes` returns the `restore` attribute and a list of IDs for the Amazon Web Services accounts that are authorized to copy or restore the manual cluster snapshot. If `all` is included in the list of values for the `restore` attribute, then the manual cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.
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
 * Returns information about cluster snapshots. This API operation supports pagination.
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
 * Returns a list of the available engines.
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
 * Returns information about provisioned Amazon DocumentDB instances. This API supports pagination.
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

export type DescribeDBSubnetGroupsError = DBSubnetGroupNotFoundFault | CommonErrors;
/**
 * Returns a list of `DBSubnetGroup` descriptions. If a
 * `DBSubnetGroupName` is specified, the list will contain only the descriptions of the specified `DBSubnetGroup`.
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
 * Returns events related to instances, security groups, snapshots, and DB parameter groups for the past 14 days. You can obtain events specific to a particular DB instance, security group, snapshot, or parameter group by providing the name as a parameter. By default, the events of the past hour are returned.
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
 * Lists all the subscription descriptions for a customer account. The description for a subscription includes `SubscriptionName`, `SNSTopicARN`, `CustomerID`, `SourceType`, `SourceID`, `CreationTime`, and `Status`.
 *
 * If you specify a `SubscriptionName`, lists the description for that subscription.
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
 * Returns information about Amazon DocumentDB global clusters. This API supports pagination.
 *
 * This action only applies to Amazon DocumentDB clusters.
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
 * Returns a list of orderable instance options for the specified engine.
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
 * Returns a list of resources (for example, instances) that have at least one pending
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

export type FailoverDBClusterError =
  | DBClusterNotFoundFault
  | InvalidDBClusterStateFault
  | InvalidDBInstanceStateFault
  | CommonErrors;
/**
 * Forces a failover for a cluster.
 *
 * A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).
 *
 * If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.
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
 * Promotes the specified secondary DB cluster to be the primary DB cluster in the global cluster when failing over a global cluster occurs.
 *
 * Use this operation to respond to an unplanned event, such as a regional disaster in the primary region.
 * Failing over can result in a loss of write transaction data that wasn't replicated to the chosen secondary before the failover event occurred.
 * However, the recovery process that promotes a DB instance on the chosen seconday DB cluster to be the primary writer DB instance guarantees that the data is in a transactionally consistent state.
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
 * Lists all tags on an Amazon DocumentDB resource.
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
  | NetworkTypeNotSupported
  | StorageQuotaExceededFault
  | CommonErrors;
/**
 * Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database
 * configuration parameters by specifying these parameters and the new values in the
 * request.
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
    NetworkTypeNotSupported,
    StorageQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyDBCluster",
}));

export type ModifyDBClusterParameterGroupError =
  | DBParameterGroupNotFoundFault
  | InvalidDBParameterGroupStateFault
  | CommonErrors;
/**
 * Modifies the parameters of a cluster parameter group. To modify more than one
 * parameter, submit a list of the following: `ParameterName`,
 * `ParameterValue`, and `ApplyMethod`. A maximum of 20
 * parameters can be modified in a single request.
 *
 * Changes to dynamic parameters are applied immediately. Changes to static
 * parameters require a reboot or maintenance window
 *
 * before the change can take effect.
 *
 * After you create a cluster parameter group, you should wait at least 5 minutes
 * before creating your first cluster that uses that cluster parameter group as
 * the default parameter group. This allows Amazon DocumentDB to fully complete the create action
 * before the parameter group is used as the default for a new cluster. This step is
 * especially important for parameters that are critical when creating the default
 * database for a cluster, such as the character set for the default database
 * defined by the `character_set_database` parameter.
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
 * Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.
 *
 * To share a manual cluster snapshot with other Amazon Web Services accounts, specify `restore` as the `AttributeName`, and use the `ValuesToAdd` parameter to add a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual cluster snapshot. Use the value `all` to make the manual cluster snapshot public, which means that it can be copied or restored by all Amazon Web Services accounts. Do not add the `all` value for any manual cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized Amazon Web Services account IDs for the `ValuesToAdd` parameter. You can't use `all` as a value for that parameter in this case.
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
  | InsufficientDBInstanceCapacityFault
  | InvalidDBInstanceStateFault
  | InvalidDBSecurityGroupStateFault
  | InvalidVPCNetworkStateFault
  | StorageQuotaExceededFault
  | StorageTypeNotSupportedFault
  | CommonErrors;
/**
 * Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
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
    InsufficientDBInstanceCapacityFault,
    InvalidDBInstanceStateFault,
    InvalidDBSecurityGroupStateFault,
    InvalidVPCNetworkStateFault,
    StorageQuotaExceededFault,
    StorageTypeNotSupportedFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyDBInstance",
}));

export type ModifyDBSubnetGroupError =
  | DBSubnetGroupDoesNotCoverEnoughAZs
  | DBSubnetGroupNotFoundFault
  | DBSubnetQuotaExceededFault
  | InvalidSubnet
  | SubnetAlreadyInUse
  | CommonErrors;
/**
 * Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.
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
 * Modifies an existing Amazon DocumentDB event notification subscription.
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
  | GlobalClusterNotFoundFault
  | InvalidGlobalClusterStateFault
  | CommonErrors;
/**
 * Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.
 *
 * This action only applies to Amazon DocumentDB clusters.
 */
export const modifyGlobalCluster: API.OperationMethod<
  ModifyGlobalClusterMessage,
  ModifyGlobalClusterResult,
  ModifyGlobalClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ModifyGlobalClusterMessage,
  output: ModifyGlobalClusterResult,
  errors: [GlobalClusterNotFoundFault, InvalidGlobalClusterStateFault],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyGlobalCluster",
}));

export type RebootDBInstanceError =
  | DBInstanceNotFoundFault
  | InvalidDBInstanceStateFault
  | CommonErrors;
/**
 * You might need to reboot your instance, usually for maintenance reasons. For
 * example, if you make certain changes, or if you change the cluster parameter group
 * that is associated with the instance, you must reboot the instance for the changes to
 * take effect.
 *
 * Rebooting an instance restarts the database engine service. Rebooting an instance
 * results in a momentary outage, during which the instance status is set to
 * *rebooting*.
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
 * Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region.
 *
 * This action only applies to Amazon DocumentDB clusters.
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

export type RemoveSourceIdentifierFromSubscriptionError =
  | SourceNotFoundFault
  | SubscriptionNotFoundFault
  | CommonErrors;
/**
 * Removes a source identifier from an existing Amazon DocumentDB event notification
 * subscription.
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
 * Removes metadata tags from an Amazon DocumentDB resource.
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
 * Modifies the parameters of a cluster parameter group to the default value. To
 * reset specific parameters, submit a list of the following: `ParameterName`
 * and `ApplyMethod`. To reset the entire cluster parameter group, specify
 * the `DBClusterParameterGroupName` and `ResetAllParameters`
 * parameters.
 *
 * When you reset the entire group, dynamic parameters are updated immediately and
 * static parameters are set to `pending-reboot` to take effect on the next DB
 * instance reboot.
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

export type RestoreDBClusterFromSnapshotError =
  | DBClusterAlreadyExistsFault
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
  | NetworkTypeNotSupported
  | StorageQuotaExceededFault
  | CommonErrors;
/**
 * Creates a new cluster from a snapshot or cluster snapshot.
 *
 * If a snapshot is specified, the target cluster is created from the source DB snapshot with a default configuration and default security group.
 *
 * If a cluster snapshot is specified, the target cluster is created from the source cluster restore point with the same configuration as the original source DB cluster, except that the new cluster is created with the default security group.
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
    NetworkTypeNotSupported,
    StorageQuotaExceededFault,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RestoreDBClusterFromSnapshot",
}));

export type RestoreDBClusterToPointInTimeError =
  | DBClusterAlreadyExistsFault
  | DBClusterNotFoundFault
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
  | NetworkTypeNotSupported
  | StorageQuotaExceededFault
  | CommonErrors;
/**
 * Restores a cluster to an arbitrary point in time. Users can restore to any point in
 * time before `LatestRestorableTime` for up to
 * `BackupRetentionPeriod` days. The target cluster is created from the
 * source cluster with the same configuration as the original cluster, except that
 * the new cluster is created with the default security group.
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
    NetworkTypeNotSupported,
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
 * Restarts the stopped cluster that is specified by `DBClusterIdentifier`.
 * For more information, see Stopping and
 * Starting an Amazon DocumentDB Cluster.
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
 * Stops the running cluster that is specified by `DBClusterIdentifier`. The
 * cluster must be in the *available* state. For more information, see
 * Stopping and
 * Starting an Amazon DocumentDB Cluster.
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
 * Switches over the specified secondary Amazon DocumentDB cluster to be the new primary Amazon DocumentDB cluster in the global database cluster.
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
          SubscriptionName: S.optional(S.String),
          SourceIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AddSourceIdentifierToSubscriptionMessage",
      });
    case 1:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("SourceId")));
    case 2:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("EventCategory")));
    case 3:
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
    case 4:
      return S.suspend(() =>
        S.Struct({ EventSubscription: S.optional(EventSubscription) }).pipe(ns),
      ).annotate({
        identifier: "AddSourceIdentifierToSubscriptionResult",
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
        S.Struct({ ResourceName: S.optional(S.String), Tags: S.optional(TagList) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AddTagsToResourceMessage" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AddTagsToResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceIdentifier: S.optional(S.String),
          ApplyAction: S.optional(S.String),
          OptInType: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ApplyPendingMaintenanceActionMessage",
      });
    case 2:
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
    case 3:
      return S.Array(
        /*@__PURE__*/ PendingMaintenanceAction.pipe(
          /*@__PURE__*/ T.XmlName("PendingMaintenanceAction"),
        ).annotate({
          identifier: "PendingMaintenanceAction",
        }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          ResourceIdentifier: S.optional(S.String),
          PendingMaintenanceActionDetails: S.optional(PendingMaintenanceActionDetails),
        }),
      ).annotate({
        identifier: "ResourcePendingMaintenanceActions",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ResourcePendingMaintenanceActions: S.optional(ResourcePendingMaintenanceActions),
        }).pipe(ns),
      ).annotate({
        identifier: "ApplyPendingMaintenanceActionResult",
      });
    case 6:
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
    case 7:
      return S.suspend(() =>
        S.Struct({
          DBClusterParameterGroupName: S.optional(S.String),
          DBParameterGroupFamily: S.optional(S.String),
          Description: S.optional(S.String),
          DBClusterParameterGroupArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "DBClusterParameterGroup" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DBClusterParameterGroup: S.optional(DBClusterParameterGroup) }).pipe(ns),
      ).annotate({
        identifier: "CopyDBClusterParameterGroupResult",
      });
    case 1:
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
    case 2:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("AvailabilityZone")));
    case 3:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZones: S.optional(AvailabilityZones),
          DBClusterSnapshotIdentifier: S.optional(S.String),
          DBClusterIdentifier: S.optional(S.String),
          SnapshotCreateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Engine: S.optional(S.String),
          Status: S.optional(S.String),
          Port: S.optional(S.Number),
          VpcId: S.optional(S.String),
          ClusterCreateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          MasterUsername: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          SnapshotType: S.optional(S.String),
          PercentProgress: S.optional(S.Number),
          StorageEncrypted: S.optional(S.Boolean),
          KmsKeyId: S.optional(S.String),
          DBClusterSnapshotArn: S.optional(S.String),
          SourceDBClusterSnapshotArn: S.optional(S.String),
          StorageType: S.optional(S.String),
        }),
      ).annotate({ identifier: "DBClusterSnapshot" });
    case 4:
      return S.suspend(() =>
        S.Struct({ DBClusterSnapshot: S.optional(DBClusterSnapshot) }).pipe(ns),
      ).annotate({
        identifier: "CopyDBClusterSnapshotResult",
      });
    case 5:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("VpcSecurityGroupId")));
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({ MinCapacity: S.optional(S.Number), MaxCapacity: S.optional(S.Number) }),
      ).annotate({
        identifier: "ServerlessV2ScalingConfiguration",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZones: S.optional(AvailabilityZones),
          BackupRetentionPeriod: S.optional(S.Number),
          DBClusterIdentifier: S.optional(S.String),
          DBClusterParameterGroupName: S.optional(S.String),
          VpcSecurityGroupIds: S.optional(VpcSecurityGroupIdList),
          DBSubnetGroupName: S.optional(S.String),
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          Port: S.optional(S.Number),
          MasterUsername: S.optional(S.String),
          MasterUserPassword: S.optional(SensitiveString),
          PreferredBackupWindow: S.optional(S.String),
          PreferredMaintenanceWindow: S.optional(S.String),
          Tags: S.optional(TagList),
          StorageEncrypted: S.optional(S.Boolean),
          KmsKeyId: S.optional(S.String),
          PreSignedUrl: S.optional(S.String),
          EnableCloudwatchLogsExports: S.optional(LogTypeList),
          DeletionProtection: S.optional(S.Boolean),
          GlobalClusterIdentifier: S.optional(S.String),
          StorageType: S.optional(S.String),
          ServerlessV2ScalingConfiguration: S.optional(ServerlessV2ScalingConfiguration),
          ManageMasterUserPassword: S.optional(S.Boolean),
          MasterUserSecretKmsKeyId: S.optional(S.String),
          NetworkType: S.optional(S.String),
          CopyTagsToSnapshot: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateDBClusterMessage" });
    case 1:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("ReadReplicaIdentifier")));
    case 2:
      return S.suspend(() =>
        S.Struct({
          DBInstanceIdentifier: S.optional(S.String),
          IsClusterWriter: S.optional(S.Boolean),
          DBClusterParameterGroupStatus: S.optional(S.String),
          PromotionTier: S.optional(S.Number),
        }),
      ).annotate({ identifier: "DBClusterMember" });
    case 3:
      return S.Array(
        /*@__PURE__*/ DBClusterMember.pipe(/*@__PURE__*/ T.XmlName("DBClusterMember")).annotate({
          identifier: "DBClusterMember",
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
          /*@__PURE__*/ T.XmlName("VpcSecurityGroupMembership"),
        ).annotate({
          identifier: "VpcSecurityGroupMembership",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({ RoleArn: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({ identifier: "DBClusterRole" });
    case 7:
      return S.Array(
        /*@__PURE__*/ DBClusterRole.pipe(/*@__PURE__*/ T.XmlName("DBClusterRole")).annotate({
          identifier: "DBClusterRole",
        }),
      );
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ MinCapacity: S.optional(S.Number), MaxCapacity: S.optional(S.Number) }),
      ).annotate({
        identifier: "ServerlessV2ScalingConfigurationInfo",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SecretArn: S.optional(S.String),
          SecretStatus: S.optional(S.String),
          KmsKeyId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ClusterMasterUserSecret" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZones: S.optional(AvailabilityZones),
          BackupRetentionPeriod: S.optional(S.Number),
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
          CloneGroupId: S.optional(S.String),
          ClusterCreateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EnabledCloudwatchLogsExports: S.optional(LogTypeList),
          DeletionProtection: S.optional(S.Boolean),
          IOOptimizedNextAllowedModificationTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          StorageType: S.optional(S.String),
          ServerlessV2ScalingConfiguration: S.optional(ServerlessV2ScalingConfigurationInfo),
          MasterUserSecret: S.optional(ClusterMasterUserSecret),
          NetworkType: S.optional(S.String),
          CopyTagsToSnapshot: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "DBCluster" });
    case 3:
      return S.suspend(() => S.Struct({ DBCluster: S.optional(DBCluster) }).pipe(ns)).annotate({
        identifier: "CreateDBClusterResult",
      });
    case 4:
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
    case 5:
      return S.suspend(() =>
        S.Struct({ DBClusterParameterGroup: S.optional(DBClusterParameterGroup) }).pipe(ns),
      ).annotate({
        identifier: "CreateDBClusterParameterGroupResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DBClusterSnapshotIdentifier: S.optional(S.String),
          DBClusterIdentifier: S.optional(S.String),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateDBClusterSnapshotMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ DBClusterSnapshot: S.optional(DBClusterSnapshot) }).pipe(ns),
      ).annotate({
        identifier: "CreateDBClusterSnapshotResult",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DBInstanceIdentifier: S.optional(S.String),
          DBInstanceClass: S.optional(S.String),
          Engine: S.optional(S.String),
          AvailabilityZone: S.optional(S.String),
          PreferredMaintenanceWindow: S.optional(S.String),
          AutoMinorVersionUpgrade: S.optional(S.Boolean),
          Tags: S.optional(TagList),
          DBClusterIdentifier: S.optional(S.String),
          CopyTagsToSnapshot: S.optional(S.Boolean),
          PromotionTier: S.optional(S.Number),
          EnablePerformanceInsights: S.optional(S.Boolean),
          PerformanceInsightsKMSKeyId: S.optional(S.String),
          CACertificateIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateDBInstanceMessage" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Address: S.optional(S.String),
          Port: S.optional(S.Number),
          HostedZoneId: S.optional(S.String),
        }),
      ).annotate({ identifier: "Endpoint" });
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
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          DBSubnetGroupName: S.optional(S.String),
          DBSubnetGroupDescription: S.optional(S.String),
          VpcId: S.optional(S.String),
          SubnetGroupStatus: S.optional(S.String),
          Subnets: S.optional(SubnetList),
          DBSubnetGroupArn: S.optional(S.String),
          SupportedNetworkTypes: S.optional(NetworkTypeList),
        }),
      ).annotate({ identifier: "DBSubnetGroup" });
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
function __c6(j: number): any {
  switch (j) {
    case 0:
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
    case 1:
      return S.suspend(() =>
        S.Struct({
          StatusType: S.optional(S.String),
          Normal: S.optional(S.Boolean),
          Status: S.optional(S.String),
          Message: S.optional(S.String),
        }),
      ).annotate({ identifier: "DBInstanceStatusInfo" });
    case 2:
      return S.Array(
        /*@__PURE__*/ DBInstanceStatusInfo.pipe(
          /*@__PURE__*/ T.XmlName("DBInstanceStatusInfo"),
        ).annotate({
          identifier: "DBInstanceStatusInfo",
        }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          CAIdentifier: S.optional(S.String),
          ValidTill: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CertificateDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DBInstanceIdentifier: S.optional(S.String),
          DBInstanceClass: S.optional(S.String),
          Engine: S.optional(S.String),
          DBInstanceStatus: S.optional(S.String),
          Endpoint: S.optional(Endpoint),
          InstanceCreateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          PreferredBackupWindow: S.optional(S.String),
          BackupRetentionPeriod: S.optional(S.Number),
          VpcSecurityGroups: S.optional(VpcSecurityGroupMembershipList),
          AvailabilityZone: S.optional(S.String),
          DBSubnetGroup: S.optional(DBSubnetGroup),
          PreferredMaintenanceWindow: S.optional(S.String),
          PendingModifiedValues: S.optional(PendingModifiedValues),
          LatestRestorableTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EngineVersion: S.optional(S.String),
          AutoMinorVersionUpgrade: S.optional(S.Boolean),
          PubliclyAccessible: S.optional(S.Boolean),
          StatusInfos: S.optional(DBInstanceStatusInfoList),
          DBClusterIdentifier: S.optional(S.String),
          StorageEncrypted: S.optional(S.Boolean),
          KmsKeyId: S.optional(S.String),
          DbiResourceId: S.optional(S.String),
          CACertificateIdentifier: S.optional(S.String),
          CopyTagsToSnapshot: S.optional(S.Boolean),
          PromotionTier: S.optional(S.Number),
          DBInstanceArn: S.optional(S.String),
          EnabledCloudwatchLogsExports: S.optional(LogTypeList),
          CertificateDetails: S.optional(CertificateDetails),
          PerformanceInsightsEnabled: S.optional(S.Boolean),
          PerformanceInsightsKMSKeyId: S.optional(S.String),
        }),
      ).annotate({ identifier: "DBInstance" });
    case 5:
      return S.suspend(() => S.Struct({ DBInstance: S.optional(DBInstance) }).pipe(ns)).annotate({
        identifier: "CreateDBInstanceResult",
      });
    case 6:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("SubnetIdentifier")));
    case 7:
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
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DBSubnetGroup: S.optional(DBSubnetGroup) }).pipe(ns),
      ).annotate({
        identifier: "CreateDBSubnetGroupResult",
      });
    case 1:
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
    case 2:
      return S.suspend(() =>
        S.Struct({ EventSubscription: S.optional(EventSubscription) }).pipe(ns),
      ).annotate({
        identifier: "CreateEventSubscriptionResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          GlobalClusterIdentifier: S.optional(S.String),
          SourceDBClusterIdentifier: S.optional(S.String),
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          DeletionProtection: S.optional(S.Boolean),
          DatabaseName: S.optional(S.String),
          StorageEncrypted: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateGlobalClusterMessage",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          DBClusterArn: S.optional(S.String),
          Readers: S.optional(ReadersArnList),
          IsWriter: S.optional(S.Boolean),
          SynchronizationStatus: S.optional(GlobalClusterMemberSynchronizationStatus),
        }),
      ).annotate({ identifier: "GlobalClusterMember" });
    case 6:
      return S.Array(
        /*@__PURE__*/ GlobalClusterMember.pipe(
          /*@__PURE__*/ T.XmlName("GlobalClusterMember"),
        ).annotate({
          identifier: "GlobalClusterMember",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(FailoverStatus),
          FromDbClusterArn: S.optional(S.String),
          ToDbClusterArn: S.optional(S.String),
          IsDataLossAllowed: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "FailoverState" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
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
    case 1:
      return S.suspend(() =>
        S.Struct({ GlobalCluster: S.optional(GlobalCluster) }).pipe(ns),
      ).annotate({
        identifier: "CreateGlobalClusterResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DBClusterIdentifier: S.optional(S.String),
          SkipFinalSnapshot: S.optional(S.Boolean),
          FinalDBSnapshotIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteDBClusterMessage" });
    case 3:
      return S.suspend(() => S.Struct({ DBCluster: S.optional(DBCluster) }).pipe(ns)).annotate({
        identifier: "DeleteDBClusterResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ DBClusterParameterGroupName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteDBClusterParameterGroupMessage",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteDBClusterParameterGroupResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ DBClusterSnapshotIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteDBClusterSnapshotMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ DBClusterSnapshot: S.optional(DBClusterSnapshot) }).pipe(ns),
      ).annotate({
        identifier: "DeleteDBClusterSnapshotResult",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DBInstanceIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteDBInstanceMessage" });
    case 1:
      return S.suspend(() => S.Struct({ DBInstance: S.optional(DBInstance) }).pipe(ns)).annotate({
        identifier: "DeleteDBInstanceResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ DBSubnetGroupName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteDBSubnetGroupMessage",
      });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteDBSubnetGroupResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ SubscriptionName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteEventSubscriptionMessage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ EventSubscription: S.optional(EventSubscription) }).pipe(ns),
      ).annotate({
        identifier: "DeleteEventSubscriptionResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ GlobalClusterIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteGlobalClusterMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ GlobalCluster: S.optional(GlobalCluster) }).pipe(ns),
      ).annotate({
        identifier: "DeleteGlobalClusterResult",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("Value")));
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Values: S.optional(FilterValueList) }),
      ).annotate({ identifier: "Filter" });
    case 2:
      return S.Array(
        /*@__PURE__*/ Filter.pipe(/*@__PURE__*/ T.XmlName("Filter")).annotate({
          identifier: "Filter",
        }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          CertificateIdentifier: S.optional(S.String),
          Filters: S.optional(FilterList),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeCertificatesMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          CertificateIdentifier: S.optional(S.String),
          CertificateType: S.optional(S.String),
          Thumbprint: S.optional(S.String),
          ValidFrom: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ValidTill: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          CertificateArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Certificate" });
    case 5:
      return S.Array(
        /*@__PURE__*/ Certificate.pipe(/*@__PURE__*/ T.XmlName("Certificate")).annotate({
          identifier: "Certificate",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({ Certificates: S.optional(CertificateList), Marker: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "CertificateMessage" });
    case 7:
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
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ DBClusterParameterGroup.pipe(
          /*@__PURE__*/ T.XmlName("DBClusterParameterGroup"),
        ).annotate({
          identifier: "DBClusterParameterGroup",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          DBClusterParameterGroups: S.optional(DBClusterParameterGroupList),
        }).pipe(ns),
      ).annotate({
        identifier: "DBClusterParameterGroupsMessage",
      });
    case 2:
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
    case 3:
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
    case 4:
      return S.Array(
        /*@__PURE__*/ Parameter.pipe(/*@__PURE__*/ T.XmlName("Parameter")).annotate({
          identifier: "Parameter",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({ Parameters: S.optional(ParametersList), Marker: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DBClusterParameterGroupDetails",
      });
    case 6:
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
    case 7:
      return S.Array(
        /*@__PURE__*/ DBCluster.pipe(/*@__PURE__*/ T.XmlName("DBCluster")).annotate({
          identifier: "DBCluster",
        }),
      );
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Marker: S.optional(S.String), DBClusters: S.optional(DBClusterList) }).pipe(ns),
      ).annotate({ identifier: "DBClusterMessage" });
    case 1:
      return S.suspend(() =>
        S.Struct({ DBClusterSnapshotIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeDBClusterSnapshotAttributesMessage",
      });
    case 2:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("AttributeValue")));
    case 3:
      return S.suspend(() =>
        S.Struct({
          AttributeName: S.optional(S.String),
          AttributeValues: S.optional(AttributeValueList),
        }),
      ).annotate({
        identifier: "DBClusterSnapshotAttribute",
      });
    case 4:
      return S.Array(
        /*@__PURE__*/ DBClusterSnapshotAttribute.pipe(
          /*@__PURE__*/ T.XmlName("DBClusterSnapshotAttribute"),
        ).annotate({
          identifier: "DBClusterSnapshotAttribute",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          DBClusterSnapshotIdentifier: S.optional(S.String),
          DBClusterSnapshotAttributes: S.optional(DBClusterSnapshotAttributeList),
        }),
      ).annotate({
        identifier: "DBClusterSnapshotAttributesResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DBClusterSnapshotAttributesResult: S.optional(DBClusterSnapshotAttributesResult),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeDBClusterSnapshotAttributesResult",
      });
    case 7:
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
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ DBClusterSnapshot.pipe(/*@__PURE__*/ T.XmlName("DBClusterSnapshot")).annotate(
          {
            identifier: "DBClusterSnapshot",
          },
        ),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          DBClusterSnapshots: S.optional(DBClusterSnapshotList),
        }).pipe(ns),
      ).annotate({ identifier: "DBClusterSnapshotMessage" });
    case 2:
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
    case 3:
      return S.suspend(() =>
        S.Struct({
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          Description: S.optional(S.String),
          AutoUpgrade: S.optional(S.Boolean),
          IsMajorVersionUpgrade: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "UpgradeTarget" });
    case 4:
      return S.Array(
        /*@__PURE__*/ UpgradeTarget.pipe(/*@__PURE__*/ T.XmlName("UpgradeTarget")).annotate({
          identifier: "UpgradeTarget",
        }),
      );
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({ MinCapacity: S.optional(S.Number), MaxCapacity: S.optional(S.Number) }),
      ).annotate({
        identifier: "ServerlessV2FeaturesSupport",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          DBParameterGroupFamily: S.optional(S.String),
          DBEngineDescription: S.optional(S.String),
          DBEngineVersionDescription: S.optional(S.String),
          ValidUpgradeTarget: S.optional(ValidUpgradeTargetList),
          ExportableLogTypes: S.optional(LogTypeList),
          SupportsLogExportsToCloudwatchLogs: S.optional(S.Boolean),
          SupportedCACertificateIdentifiers: S.optional(CACertificateIdentifiersList),
          SupportsCertificateRotationWithoutRestart: S.optional(S.Boolean),
          ServerlessV2FeaturesSupport: S.optional(ServerlessV2FeaturesSupport),
        }),
      ).annotate({ identifier: "DBEngineVersion" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Array(
        /*@__PURE__*/ DBEngineVersion.pipe(/*@__PURE__*/ T.XmlName("DBEngineVersion")).annotate({
          identifier: "DBEngineVersion",
        }),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          DBEngineVersions: S.optional(DBEngineVersionList),
        }).pipe(ns),
      ).annotate({ identifier: "DBEngineVersionMessage" });
    case 2:
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
    case 3:
      return S.Array(
        /*@__PURE__*/ DBInstance.pipe(/*@__PURE__*/ T.XmlName("DBInstance")).annotate({
          identifier: "DBInstance",
        }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({ Marker: S.optional(S.String), DBInstances: S.optional(DBInstanceList) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "DBInstanceMessage" });
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
function __c15(j: number): any {
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
        S.Struct({ SourceType: S.optional(S.String), Filters: S.optional(FilterList) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeEventCategoriesMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SourceType: S.optional(S.String),
          EventCategories: S.optional(EventCategoriesList),
        }),
      ).annotate({ identifier: "EventCategoriesMap" });
    case 5:
      return S.Array(
        /*@__PURE__*/ EventCategoriesMap.pipe(
          /*@__PURE__*/ T.XmlName("EventCategoriesMap"),
        ).annotate({
          identifier: "EventCategoriesMap",
        }),
      );
    case 6:
      return S.suspend(() =>
        S.Struct({ EventCategoriesMapList: S.optional(EventCategoriesMapList) }).pipe(ns),
      ).annotate({ identifier: "EventCategoriesMessage" });
    case 7:
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
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
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
    case 1:
      return S.Array(
        /*@__PURE__*/ Event.pipe(/*@__PURE__*/ T.XmlName("Event")).annotate({
          identifier: "Event",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({ Marker: S.optional(S.String), Events: S.optional(EventList) }).pipe(ns),
      ).annotate({ identifier: "EventsMessage" });
    case 3:
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
    case 4:
      return S.Array(
        /*@__PURE__*/ EventSubscription.pipe(/*@__PURE__*/ T.XmlName("EventSubscription")).annotate(
          {
            identifier: "EventSubscription",
          },
        ),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          EventSubscriptionsList: S.optional(EventSubscriptionsList),
        }).pipe(ns),
      ).annotate({
        identifier: "EventSubscriptionsMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          GlobalClusterIdentifier: S.optional(S.String),
          Filters: S.optional(FilterList),
          MaxRecords: S.optional(S.Number),
          Marker: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeGlobalClustersMessage",
      });
    case 7:
      return S.Array(
        /*@__PURE__*/ GlobalCluster.pipe(/*@__PURE__*/ T.XmlName("GlobalClusterMember")).annotate({
          identifier: "GlobalCluster",
        }),
      );
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Marker: S.optional(S.String),
          GlobalClusters: S.optional(GlobalClusterList),
        }).pipe(ns),
      ).annotate({ identifier: "GlobalClustersMessage" });
    case 1:
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
    case 2:
      return S.Array(
        /*@__PURE__*/ AvailabilityZone.pipe(/*@__PURE__*/ T.XmlName("AvailabilityZone")).annotate({
          identifier: "AvailabilityZone",
        }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          DBInstanceClass: S.optional(S.String),
          LicenseModel: S.optional(S.String),
          AvailabilityZones: S.optional(AvailabilityZoneList),
          Vpc: S.optional(S.Boolean),
          StorageType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "OrderableDBInstanceOption",
      });
    case 4:
      return S.Array(
        /*@__PURE__*/ OrderableDBInstanceOption.pipe(
          /*@__PURE__*/ T.XmlName("OrderableDBInstanceOption"),
        ).annotate({
          identifier: "OrderableDBInstanceOption",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          OrderableDBInstanceOptions: S.optional(OrderableDBInstanceOptionsList),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "OrderableDBInstanceOptionsMessage",
      });
    case 6:
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
    case 7:
      return S.Array(
        /*@__PURE__*/ ResourcePendingMaintenanceActions.pipe(
          /*@__PURE__*/ T.XmlName("ResourcePendingMaintenanceActions"),
        ).annotate({
          identifier: "ResourcePendingMaintenanceActions",
        }),
      );
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PendingMaintenanceActions: S.optional(PendingMaintenanceActions),
          Marker: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "PendingMaintenanceActionsMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DBClusterIdentifier: S.optional(S.String),
          TargetDBInstanceIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "FailoverDBClusterMessage" });
    case 2:
      return S.suspend(() => S.Struct({ DBCluster: S.optional(DBCluster) }).pipe(ns)).annotate({
        identifier: "FailoverDBClusterResult",
      });
    case 3:
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
    case 4:
      return S.suspend(() =>
        S.Struct({ GlobalCluster: S.optional(GlobalCluster) }).pipe(ns),
      ).annotate({
        identifier: "FailoverGlobalClusterResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceName: S.optional(S.String), Filters: S.optional(FilterList) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceMessage",
      });
    case 6:
      return S.suspend(() => S.Struct({ TagList: S.optional(TagList) }).pipe(ns)).annotate({
        identifier: "TagListMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          EnableLogTypes: S.optional(LogTypeList),
          DisableLogTypes: S.optional(LogTypeList),
        }),
      ).annotate({
        identifier: "CloudwatchLogsExportConfiguration",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
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
          PreferredBackupWindow: S.optional(S.String),
          PreferredMaintenanceWindow: S.optional(S.String),
          CloudwatchLogsExportConfiguration: S.optional(CloudwatchLogsExportConfiguration),
          EngineVersion: S.optional(S.String),
          AllowMajorVersionUpgrade: S.optional(S.Boolean),
          DeletionProtection: S.optional(S.Boolean),
          StorageType: S.optional(S.String),
          ServerlessV2ScalingConfiguration: S.optional(ServerlessV2ScalingConfiguration),
          ManageMasterUserPassword: S.optional(S.Boolean),
          MasterUserSecretKmsKeyId: S.optional(S.String),
          RotateMasterUserPassword: S.optional(S.Boolean),
          NetworkType: S.optional(S.String),
          CopyTagsToSnapshot: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ModifyDBClusterMessage" });
    case 1:
      return S.suspend(() => S.Struct({ DBCluster: S.optional(DBCluster) }).pipe(ns)).annotate({
        identifier: "ModifyDBClusterResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DBClusterParameterGroupName: S.optional(S.String),
          Parameters: S.optional(ParametersList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyDBClusterParameterGroupMessage",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DBClusterParameterGroupName: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DBClusterParameterGroupNameMessage",
      });
    case 4:
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
    case 5:
      return S.suspend(() =>
        S.Struct({
          DBClusterSnapshotAttributesResult: S.optional(DBClusterSnapshotAttributesResult),
        }).pipe(ns),
      ).annotate({
        identifier: "ModifyDBClusterSnapshotAttributeResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DBInstanceIdentifier: S.optional(S.String),
          DBInstanceClass: S.optional(S.String),
          ApplyImmediately: S.optional(S.Boolean),
          PreferredMaintenanceWindow: S.optional(S.String),
          AutoMinorVersionUpgrade: S.optional(S.Boolean),
          NewDBInstanceIdentifier: S.optional(S.String),
          CACertificateIdentifier: S.optional(S.String),
          CopyTagsToSnapshot: S.optional(S.Boolean),
          PromotionTier: S.optional(S.Number),
          EnablePerformanceInsights: S.optional(S.Boolean),
          PerformanceInsightsKMSKeyId: S.optional(S.String),
          CertificateRotationRestart: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ModifyDBInstanceMessage" });
    case 7:
      return S.suspend(() => S.Struct({ DBInstance: S.optional(DBInstance) }).pipe(ns)).annotate({
        identifier: "ModifyDBInstanceResult",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DBSubnetGroupName: S.optional(S.String),
          DBSubnetGroupDescription: S.optional(S.String),
          SubnetIds: S.optional(SubnetIdentifierList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyDBSubnetGroupMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ DBSubnetGroup: S.optional(DBSubnetGroup) }).pipe(ns),
      ).annotate({
        identifier: "ModifyDBSubnetGroupResult",
      });
    case 2:
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
    case 3:
      return S.suspend(() =>
        S.Struct({ EventSubscription: S.optional(EventSubscription) }).pipe(ns),
      ).annotate({
        identifier: "ModifyEventSubscriptionResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          GlobalClusterIdentifier: S.optional(S.String),
          NewGlobalClusterIdentifier: S.optional(S.String),
          DeletionProtection: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyGlobalClusterMessage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ GlobalCluster: S.optional(GlobalCluster) }).pipe(ns),
      ).annotate({
        identifier: "ModifyGlobalClusterResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DBInstanceIdentifier: S.optional(S.String),
          ForceFailover: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "RebootDBInstanceMessage" });
    case 7:
      return S.suspend(() => S.Struct({ DBInstance: S.optional(DBInstance) }).pipe(ns)).annotate({
        identifier: "RebootDBInstanceResult",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          GlobalClusterIdentifier: S.optional(S.String),
          DbClusterIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RemoveFromGlobalClusterMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ GlobalCluster: S.optional(GlobalCluster) }).pipe(ns),
      ).annotate({
        identifier: "RemoveFromGlobalClusterResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SubscriptionName: S.optional(S.String),
          SourceIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RemoveSourceIdentifierFromSubscriptionMessage",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ EventSubscription: S.optional(EventSubscription) }).pipe(ns),
      ).annotate({
        identifier: "RemoveSourceIdentifierFromSubscriptionResult",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceName: S.optional(S.String), TagKeys: S.optional(KeyList) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RemoveTagsFromResourceMessage",
      });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "RemoveTagsFromResourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DBClusterParameterGroupName: S.optional(S.String),
          ResetAllParameters: S.optional(S.Boolean),
          Parameters: S.optional(ParametersList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ResetDBClusterParameterGroupMessage",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZones: S.optional(AvailabilityZones),
          DBClusterIdentifier: S.optional(S.String),
          SnapshotIdentifier: S.optional(S.String),
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          Port: S.optional(S.Number),
          DBSubnetGroupName: S.optional(S.String),
          VpcSecurityGroupIds: S.optional(VpcSecurityGroupIdList),
          Tags: S.optional(TagList),
          KmsKeyId: S.optional(S.String),
          EnableCloudwatchLogsExports: S.optional(LogTypeList),
          DeletionProtection: S.optional(S.Boolean),
          DBClusterParameterGroupName: S.optional(S.String),
          ServerlessV2ScalingConfiguration: S.optional(ServerlessV2ScalingConfiguration),
          StorageType: S.optional(S.String),
          NetworkType: S.optional(S.String),
          CopyTagsToSnapshot: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RestoreDBClusterFromSnapshotMessage",
      });
    case 1:
      return S.suspend(() => S.Struct({ DBCluster: S.optional(DBCluster) }).pipe(ns)).annotate({
        identifier: "RestoreDBClusterFromSnapshotResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DBClusterIdentifier: S.optional(S.String),
          RestoreType: S.optional(S.String),
          SourceDBClusterIdentifier: S.optional(S.String),
          RestoreToTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UseLatestRestorableTime: S.optional(S.Boolean),
          Port: S.optional(S.Number),
          DBSubnetGroupName: S.optional(S.String),
          VpcSecurityGroupIds: S.optional(VpcSecurityGroupIdList),
          Tags: S.optional(TagList),
          KmsKeyId: S.optional(S.String),
          EnableCloudwatchLogsExports: S.optional(LogTypeList),
          DeletionProtection: S.optional(S.Boolean),
          ServerlessV2ScalingConfiguration: S.optional(ServerlessV2ScalingConfiguration),
          StorageType: S.optional(S.String),
          NetworkType: S.optional(S.String),
          CopyTagsToSnapshot: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RestoreDBClusterToPointInTimeMessage",
      });
    case 3:
      return S.suspend(() => S.Struct({ DBCluster: S.optional(DBCluster) }).pipe(ns)).annotate({
        identifier: "RestoreDBClusterToPointInTimeResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ DBClusterIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartDBClusterMessage" });
    case 5:
      return S.suspend(() => S.Struct({ DBCluster: S.optional(DBCluster) }).pipe(ns)).annotate({
        identifier: "StartDBClusterResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ DBClusterIdentifier: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopDBClusterMessage" });
    case 7:
      return S.suspend(() => S.Struct({ DBCluster: S.optional(DBCluster) }).pipe(ns)).annotate({
        identifier: "StopDBClusterResult",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          GlobalClusterIdentifier: S.optional(S.String),
          TargetDbClusterIdentifier: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SwitchoverGlobalClusterMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ GlobalCluster: S.optional(GlobalCluster) }).pipe(ns),
      ).annotate({
        identifier: "SwitchoverGlobalClusterResult",
      });
  }
}
