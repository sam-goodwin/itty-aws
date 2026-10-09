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
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "IoT", serviceShapeName: "AWSIotService" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "iot" });
const ver = /*@__PURE__*/ T.ServiceVersion("2015-05-28");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
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
              `https://iot-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://iot-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://iot.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        if ("aws" === _.getAttr(PartitionResult, "name")) {
          return e(`https://iot.${Region}.amazonaws.com`);
        }
        if ("aws-cn" === _.getAttr(PartitionResult, "name")) {
          return e(`https://iot.${Region}.amazonaws.com.cn`);
        }
        if ("aws-us-gov" === _.getAttr(PartitionResult, "name")) {
          return e(`https://iot.${Region}.amazonaws.com`);
        }
        return e(`https://iot.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class CertificateConflictException
  extends /*@__PURE__*/ S.TaggedError<CertificateConflictException>()(
    "CertificateConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class CertificateStateException
  extends /*@__PURE__*/ S.TaggedError<CertificateStateException>()(
    "CertificateStateException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(406),
  ).pipe(C.withBadRequestError) {}
export class CertificateValidationException
  extends /*@__PURE__*/ S.TaggedError<CertificateValidationException>()(
    "CertificateValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ConflictingResourceUpdateException
  extends /*@__PURE__*/ S.TaggedError<ConflictingResourceUpdateException>()(
    "ConflictingResourceUpdateException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class DeleteConflictException
  extends /*@__PURE__*/ S.TaggedError<DeleteConflictException>()(
    "DeleteConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class IndexNotReadyException
  extends /*@__PURE__*/ S.TaggedError<IndexNotReadyException>()(
    "IndexNotReadyException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InternalException
  extends /*@__PURE__*/ S.TaggedError<InternalException>()(
    "InternalException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InternalFailureException
  extends /*@__PURE__*/ S.TaggedError<InternalFailureException>()(
    "InternalFailureException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InvalidAggregationException
  extends /*@__PURE__*/ S.TaggedError<InvalidAggregationException>()(
    "InvalidAggregationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidQueryException
  extends /*@__PURE__*/ S.TaggedError<InvalidQueryException>()(
    "InvalidQueryException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidRequestException
  extends /*@__PURE__*/ S.TaggedError<InvalidRequestException>()(
    "InvalidRequestException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidResponseException
  extends /*@__PURE__*/ S.TaggedError<InvalidResponseException>()(
    "InvalidResponseException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidStateTransitionException
  extends /*@__PURE__*/ S.TaggedError<InvalidStateTransitionException>()(
    "InvalidStateTransitionException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(410),
  ).pipe(C.withBadRequestError) {}
export class MalformedPolicyException
  extends /*@__PURE__*/ S.TaggedError<MalformedPolicyException>()(
    "MalformedPolicyException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class NotConfiguredException
  extends /*@__PURE__*/ S.TaggedError<NotConfiguredException>()(
    "NotConfiguredException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class RegistrationCodeValidationException
  extends /*@__PURE__*/ S.TaggedError<RegistrationCodeValidationException>()(
    "RegistrationCodeValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<ResourceAlreadyExistsException>()(
    "ResourceAlreadyExistsException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceArn: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError, C.withAlreadyExistsError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ResourceRegistrationFailureException
  extends /*@__PURE__*/ S.TaggedError<ResourceRegistrationFailureException>()(
    "ResourceRegistrationFailureException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ServiceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailableException>()(
    "ServiceUnavailableException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export class SqlParseException
  extends /*@__PURE__*/ S.TaggedError<SqlParseException>()(
    "SqlParseException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class TaskAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<TaskAlreadyExistsException>()(
    "TaskAlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class TopicRuleNotFound
  extends /*@__PURE__*/ S.TaggedError<TopicRuleNotFound>()(
    "TopicRuleNotFound",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "UnauthorizedException",
      message: { includes: "Access to topic rule" },
    }),
  ).pipe(C.withNotFoundError) {}
export class TransferAlreadyCompletedException
  extends /*@__PURE__*/ S.TaggedError<TransferAlreadyCompletedException>()(
    "TransferAlreadyCompletedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(410),
  ).pipe(C.withBadRequestError) {}
export class TransferConflictException
  extends /*@__PURE__*/ S.TaggedError<TransferConflictException>()(
    "TransferConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class UnauthorizedException
  extends /*@__PURE__*/ S.TaggedError<UnauthorizedException>()(
    "UnauthorizedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(401),
  ).pipe(C.withAuthError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class VersionConflictException
  extends /*@__PURE__*/ S.TaggedError<VersionConflictException>()(
    "VersionConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class VersionsLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<VersionsLimitExceededException>()(
    "VersionsLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export type CertificateId = string;
export type SetAsActive = boolean;
export interface AcceptCertificateTransferRequest {
  certificateId: string;
  setAsActive?: boolean;
}
const AcceptCertificateTransferRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<AcceptCertificateTransferRequest>;
export interface AcceptCertificateTransferResponse {}
const AcceptCertificateTransferResponse = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<AcceptCertificateTransferResponse>;
export type BillingGroupName = string;
export type BillingGroupArn = string;
export type ThingName = string;
export type ThingArn = string;
export interface AddThingToBillingGroupRequest {
  billingGroupName?: string;
  billingGroupArn?: string;
  thingName?: string;
  thingArn?: string;
}
const AddThingToBillingGroupRequest = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<AddThingToBillingGroupRequest>;
export interface AddThingToBillingGroupResponse {}
const AddThingToBillingGroupResponse = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<AddThingToBillingGroupResponse>;
export type ThingGroupName = string;
export type ThingGroupArn = string;
export type OverrideDynamicGroups = boolean;
export interface AddThingToThingGroupRequest {
  thingGroupName?: string;
  thingGroupArn?: string;
  thingName?: string;
  thingArn?: string;
  overrideDynamicGroups?: boolean;
}
const AddThingToThingGroupRequest = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<AddThingToThingGroupRequest>;
export interface AddThingToThingGroupResponse {}
const AddThingToThingGroupResponse =
  AddThingToBillingGroupResponse as any as S.Schema<AddThingToThingGroupResponse>;
export type PackageName = string;
export type VersionName = string;
export type S3Bucket = string;
export type S3Key = string;
export type S3Version = string;
export interface S3Location {
  bucket?: string;
  key?: string;
  version?: string;
}
const S3Location = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<S3Location>;
export interface Sbom {
  s3Location?: S3Location;
}
const Sbom = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<Sbom>;
export type ClientToken = string;
export interface AssociateSbomWithPackageVersionRequest {
  packageName: string;
  versionName: string;
  sbom: Sbom;
  clientToken?: string;
}
const AssociateSbomWithPackageVersionRequest = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<AssociateSbomWithPackageVersionRequest>;
export type SbomValidationStatus = "IN_PROGRESS" | "FAILED" | "SUCCEEDED" | (string & {});
const SbomValidationStatus = S.String;

export interface AssociateSbomWithPackageVersionResponse {
  packageName?: string;
  versionName?: string;
  sbom?: Sbom;
  sbomValidationStatus?: SbomValidationStatus;
}
const AssociateSbomWithPackageVersionResponse = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<AssociateSbomWithPackageVersionResponse>;
export type TargetArn = string;
export type JobTargets = string[];
const JobTargets = /*@__PURE__*/ __L.at(__c1, 1);
export type JobId = string;
export type Comment = string;
export type NamespaceId = string;
export interface AssociateTargetsWithJobRequest {
  targets: string[];
  jobId: string;
  comment?: string;
  namespaceId?: string;
}
const AssociateTargetsWithJobRequest = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<AssociateTargetsWithJobRequest>;
export type JobArn = string;
export type JobDescription = string;
export interface AssociateTargetsWithJobResponse {
  jobArn?: string;
  jobId?: string;
  description?: string;
}
const AssociateTargetsWithJobResponse = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<AssociateTargetsWithJobResponse>;
export type PolicyName = string;
export type PolicyTarget = string;
export interface AttachPolicyRequest {
  policyName: string;
  target: string;
}
const AttachPolicyRequest = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<AttachPolicyRequest>;
export interface AttachPolicyResponse {}
const AttachPolicyResponse =
  AddThingToBillingGroupResponse as any as S.Schema<AttachPolicyResponse>;
export type Principal = string;
export interface AttachPrincipalPolicyRequest {
  policyName: string;
  principal: string;
}
const AttachPrincipalPolicyRequest = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<AttachPrincipalPolicyRequest>;
export interface AttachPrincipalPolicyResponse {}
const AttachPrincipalPolicyResponse =
  AddThingToBillingGroupResponse as any as S.Schema<AttachPrincipalPolicyResponse>;
export type SecurityProfileName = string;
export type SecurityProfileTargetArn = string;
export interface AttachSecurityProfileRequest {
  securityProfileName: string;
  securityProfileTargetArn: string;
}
const AttachSecurityProfileRequest = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<AttachSecurityProfileRequest>;
export interface AttachSecurityProfileResponse {}
const AttachSecurityProfileResponse =
  AddThingToBillingGroupResponse as any as S.Schema<AttachSecurityProfileResponse>;
export type ThingPrincipalType = "EXCLUSIVE_THING" | "NON_EXCLUSIVE_THING" | (string & {});
const ThingPrincipalType = S.String;

export interface AttachThingPrincipalRequest {
  thingName: string;
  principal: string;
  thingPrincipalType?: ThingPrincipalType;
}
const AttachThingPrincipalRequest = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<AttachThingPrincipalRequest>;
export interface AttachThingPrincipalResponse {}
const AttachThingPrincipalResponse =
  AddThingToBillingGroupResponse as any as S.Schema<AttachThingPrincipalResponse>;
export type MitigationActionsTaskId = string;
export interface CancelAuditMitigationActionsTaskRequest {
  taskId: string;
}
const CancelAuditMitigationActionsTaskRequest = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<CancelAuditMitigationActionsTaskRequest>;
export interface CancelAuditMitigationActionsTaskResponse {}
const CancelAuditMitigationActionsTaskResponse =
  AcceptCertificateTransferResponse as any as S.Schema<CancelAuditMitigationActionsTaskResponse>;
export type AuditTaskId = string;
export interface CancelAuditTaskRequest {
  taskId: string;
}
const CancelAuditTaskRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<CancelAuditTaskRequest>;
export interface CancelAuditTaskResponse {}
const CancelAuditTaskResponse =
  AddThingToBillingGroupResponse as any as S.Schema<CancelAuditTaskResponse>;
export interface CancelCertificateTransferRequest {
  certificateId: string;
}
const CancelCertificateTransferRequest = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<CancelCertificateTransferRequest>;
export interface CancelCertificateTransferResponse {}
const CancelCertificateTransferResponse =
  AcceptCertificateTransferResponse as any as S.Schema<CancelCertificateTransferResponse>;
export interface CancelDetectMitigationActionsTaskRequest {
  taskId: string;
}
const CancelDetectMitigationActionsTaskRequest = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<CancelDetectMitigationActionsTaskRequest>;
export interface CancelDetectMitigationActionsTaskResponse {}
const CancelDetectMitigationActionsTaskResponse =
  AcceptCertificateTransferResponse as any as S.Schema<CancelDetectMitigationActionsTaskResponse>;
export type ReasonCode = string;
export type ForceFlag = boolean;
export interface CancelJobRequest {
  jobId: string;
  reasonCode?: string;
  comment?: string;
  force?: boolean;
}
const CancelJobRequest = /*@__PURE__*/ __L.at(__c2, 4) as any as S.Schema<CancelJobRequest>;
export interface CancelJobResponse {
  jobArn?: string;
  jobId?: string;
  description?: string;
}
const CancelJobResponse = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<CancelJobResponse>;
export type ExpectedVersion = number;
export type DetailsKey = string;
export type DetailsValue = string;
export type DetailsMap = { [key: string]: string | undefined };
const DetailsMap = /*@__PURE__*/ __L.at(__c2, 6);
export interface CancelJobExecutionRequest {
  jobId: string;
  thingName: string;
  force?: boolean;
  expectedVersion?: number;
  statusDetails?: { [key: string]: string | undefined };
}
const CancelJobExecutionRequest = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<CancelJobExecutionRequest>;
export interface CancelJobExecutionResponse {}
const CancelJobExecutionResponse =
  AddThingToBillingGroupResponse as any as S.Schema<CancelJobExecutionResponse>;
export interface ClearDefaultAuthorizerRequest {}
const ClearDefaultAuthorizerRequest = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<ClearDefaultAuthorizerRequest>;
export interface ClearDefaultAuthorizerResponse {}
const ClearDefaultAuthorizerResponse =
  AddThingToBillingGroupResponse as any as S.Schema<ClearDefaultAuthorizerResponse>;
export type ConfirmationToken = string;
export interface ConfirmTopicRuleDestinationRequest {
  confirmationToken: string;
}
const ConfirmTopicRuleDestinationRequest = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<ConfirmTopicRuleDestinationRequest>;
export interface ConfirmTopicRuleDestinationResponse {}
const ConfirmTopicRuleDestinationResponse =
  AcceptCertificateTransferResponse as any as S.Schema<ConfirmTopicRuleDestinationResponse>;
export type AuditCheckName = string;
export type CognitoIdentityPoolId = string;
export type ClientId = string;
export type PolicyVersionId = string;
export interface PolicyVersionIdentifier {
  policyName?: string;
  policyVersionId?: string;
}
const PolicyVersionIdentifier = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<PolicyVersionIdentifier>;
export type AwsAccountId = string;
export type RoleArn = string;
export type RoleAliasArn = string;
export type IssuerCertificateSubject = string;
export type IssuerId = string;
export type IssuerCertificateSerialNumber = string;
export interface IssuerCertificateIdentifier {
  issuerCertificateSubject?: string;
  issuerId?: string;
  issuerCertificateSerialNumber?: string;
}
const IssuerCertificateIdentifier = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<IssuerCertificateIdentifier>;
export type CertificateArn = string;
export interface ResourceIdentifier {
  deviceCertificateId?: string;
  caCertificateId?: string;
  cognitoIdentityPoolId?: string;
  clientId?: string;
  policyVersionIdentifier?: PolicyVersionIdentifier;
  account?: string;
  iamRoleArn?: string;
  roleAliasArn?: string;
  issuerCertificateIdentifier?: IssuerCertificateIdentifier;
  deviceCertificateArn?: string;
}
const ResourceIdentifier = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<ResourceIdentifier>;
export type SuppressIndefinitely = boolean;
export type AuditDescription = string;
export type ClientRequestToken = string;
export interface CreateAuditSuppressionRequest {
  checkName: string;
  resourceIdentifier: ResourceIdentifier;
  expirationDate?: Date;
  suppressIndefinitely?: boolean;
  description?: string;
  clientRequestToken: string;
}
const CreateAuditSuppressionRequest = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<CreateAuditSuppressionRequest>;
export interface CreateAuditSuppressionResponse {}
const CreateAuditSuppressionResponse =
  AddThingToBillingGroupResponse as any as S.Schema<CreateAuditSuppressionResponse>;
export type AuthorizerName = string;
export type AuthorizerFunctionArn = string;
export type TokenKeyName = string;
export type KeyName = string;
export type KeyValue = string;
export type PublicKeyMap = { [key: string]: string | undefined };
const PublicKeyMap = /*@__PURE__*/ __L.at(__c3, 6);
export type AuthorizerStatus = "ACTIVE" | "INACTIVE" | (string & {});
const AuthorizerStatus = S.String;

export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value?: string;
}
const Tag = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c4, 0);
export type BooleanKey = boolean;
export type EnableCachingForHttp = boolean;
export interface CreateAuthorizerRequest {
  authorizerName: string;
  authorizerFunctionArn: string;
  tokenKeyName?: string;
  tokenSigningPublicKeys?: { [key: string]: string | undefined };
  status?: AuthorizerStatus;
  tags?: Tag[];
  signingDisabled?: boolean;
  enableCachingForHttp?: boolean;
}
const CreateAuthorizerRequest = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<CreateAuthorizerRequest>;
export type AuthorizerArn = string;
export interface CreateAuthorizerResponse {
  authorizerName?: string;
  authorizerArn?: string;
}
const CreateAuthorizerResponse = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<CreateAuthorizerResponse>;
export type BillingGroupDescription = string;
export interface BillingGroupProperties {
  billingGroupDescription?: string;
}
const BillingGroupProperties = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<BillingGroupProperties>;
export interface CreateBillingGroupRequest {
  billingGroupName: string;
  billingGroupProperties?: BillingGroupProperties;
  tags?: Tag[];
}
const CreateBillingGroupRequest = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<CreateBillingGroupRequest>;
export type BillingGroupId = string;
export interface CreateBillingGroupResponse {
  billingGroupName?: string;
  billingGroupArn?: string;
  billingGroupId?: string;
}
const CreateBillingGroupResponse = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<CreateBillingGroupResponse>;
export type CertificateSigningRequest = string;
export interface CreateCertificateFromCsrRequest {
  certificateSigningRequest: string;
  setAsActive?: boolean;
}
const CreateCertificateFromCsrRequest = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<CreateCertificateFromCsrRequest>;
export type CertificatePem = string;
export interface CreateCertificateFromCsrResponse {
  certificateArn?: string;
  certificateId?: string;
  certificatePem?: string;
}
const CreateCertificateFromCsrResponse = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<CreateCertificateFromCsrResponse>;
export type CertificateProviderName = string;
export type CertificateProviderFunctionArn = string;
export type CertificateProviderOperation = "CreateCertificateFromCsr" | (string & {});
const CertificateProviderOperation = S.String;

export type CertificateProviderAccountDefaultForOperations = CertificateProviderOperation[];
const CertificateProviderAccountDefaultForOperations = /*@__PURE__*/ __L.at(__c5, 0);
export interface CreateCertificateProviderRequest {
  certificateProviderName: string;
  lambdaFunctionArn: string;
  accountDefaultForOperations: CertificateProviderOperation[];
  clientToken?: string;
  tags?: Tag[];
}
const CreateCertificateProviderRequest = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<CreateCertificateProviderRequest>;
export type CertificateProviderArn = string;
export interface CreateCertificateProviderResponse {
  certificateProviderName?: string;
  certificateProviderArn?: string;
}
const CreateCertificateProviderResponse = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<CreateCertificateProviderResponse>;
export type CommandId = string;
export type CommandNamespace = "AWS-IoT" | "AWS-IoT-FleetWise" | (string & {});
const CommandNamespace = S.String;

export type DisplayName = string;
export type CommandDescription = string;
export type CommandPayloadBlob = Uint8Array;
export type MimeType = string;
export interface CommandPayload {
  content?: Uint8Array;
  contentType?: string;
}
const CommandPayload = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<CommandPayload>;
export type CommandPayloadTemplateString = string;
export type OutputFormat = "JSON" | "CBOR" | (string & {});
const OutputFormat = S.String;

export interface AwsJsonSubstitutionCommandPreprocessorConfig {
  outputFormat: OutputFormat;
}
const AwsJsonSubstitutionCommandPreprocessorConfig = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<AwsJsonSubstitutionCommandPreprocessorConfig>;
export interface CommandPreprocessor {
  awsJsonSubstitution?: AwsJsonSubstitutionCommandPreprocessorConfig;
}
const CommandPreprocessor = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<CommandPreprocessor>;
export type CommandParameterName = string;
export type CommandParameterType =
  | "STRING"
  | "INTEGER"
  | "DOUBLE"
  | "LONG"
  | "UNSIGNEDLONG"
  | "BOOLEAN"
  | "BINARY"
  | (string & {});
const CommandParameterType = S.String;

export type StringParameterValue = string;
export type BooleanParameterValue = boolean;
export type IntegerParameterValue = number;
export type LongParameterValue = number;
export type DoubleParameterValue = number;
export type BinaryParameterValue = Uint8Array;
export type UnsignedLongParameterValue = string;
export interface CommandParameterValue {
  S?: string;
  B?: boolean;
  I?: number;
  L?: number;
  D?: number;
  BIN?: Uint8Array;
  UL?: string;
}
const CommandParameterValue = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<CommandParameterValue>;
export type CommandParameterValueComparisonOperator =
  | "EQUALS"
  | "NOT_EQUALS"
  | "LESS_THAN"
  | "LESS_THAN_EQUALS"
  | "GREATER_THAN"
  | "GREATER_THAN_EQUALS"
  | "IN_SET"
  | "NOT_IN_SET"
  | "IN_RANGE"
  | "NOT_IN_RANGE"
  | (string & {});
const CommandParameterValueComparisonOperator = S.String;

export type CommandParameterValueStringList = string[];
const CommandParameterValueStringList =
  JobTargets as any as S.Schema<CommandParameterValueStringList>;
export interface CommandParameterValueNumberRange {
  min: string;
  max: string;
}
const CommandParameterValueNumberRange = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<CommandParameterValueNumberRange>;
export interface CommandParameterValueComparisonOperand {
  number?: string;
  numbers?: string[];
  string?: string;
  strings?: string[];
  numberRange?: CommandParameterValueNumberRange;
}
const CommandParameterValueComparisonOperand = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<CommandParameterValueComparisonOperand>;
export interface CommandParameterValueCondition {
  comparisonOperator: CommandParameterValueComparisonOperator;
  operand: CommandParameterValueComparisonOperand;
}
const CommandParameterValueCondition = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<CommandParameterValueCondition>;
export type CommandParameterValueConditionList = CommandParameterValueCondition[];
const CommandParameterValueConditionList = /*@__PURE__*/ __L.at(__c6, 2);
export type CommandParameterDescription = string;
export interface CommandParameter {
  name: string;
  type?: CommandParameterType;
  value?: CommandParameterValue;
  defaultValue?: CommandParameterValue;
  valueConditions?: CommandParameterValueCondition[];
  description?: string;
}
const CommandParameter = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<CommandParameter>;
export type CommandParameterList = CommandParameter[];
const CommandParameterList = /*@__PURE__*/ __L.at(__c6, 4);
export interface CreateCommandRequest {
  commandId: string;
  namespace?: CommandNamespace;
  displayName?: string;
  description?: string;
  payload?: CommandPayload;
  payloadTemplate?: string;
  preprocessor?: CommandPreprocessor;
  mandatoryParameters?: CommandParameter[];
  roleArn?: string;
  tags?: Tag[];
}
const CreateCommandRequest = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<CreateCommandRequest>;
export type CommandArn = string;
export interface CreateCommandResponse {
  commandId?: string;
  commandArn?: string;
}
const CreateCommandResponse = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<CreateCommandResponse>;
export type MetricName = string;
export type CustomMetricDisplayName = string;
export type CustomMetricType =
  | "string-list"
  | "ip-address-list"
  | "number-list"
  | "number"
  | (string & {});
const CustomMetricType = S.String;

export interface CreateCustomMetricRequest {
  metricName: string;
  displayName?: string;
  metricType: CustomMetricType;
  tags?: Tag[];
  clientRequestToken: string;
}
const CreateCustomMetricRequest = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<CreateCustomMetricRequest>;
export type CustomMetricArn = string;
export interface CreateCustomMetricResponse {
  metricName?: string;
  metricArn?: string;
}
const CreateCustomMetricResponse = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<CreateCustomMetricResponse>;
export type DimensionName = string;
export type DimensionType = "TOPIC_FILTER" | (string & {});
const DimensionType = S.String;

export type DimensionStringValue = string;
export type DimensionStringValues = string[];
const DimensionStringValues = JobTargets as any as S.Schema<DimensionStringValues>;
export interface CreateDimensionRequest {
  name: string;
  type: DimensionType;
  stringValues: string[];
  tags?: Tag[];
  clientRequestToken: string;
}
const CreateDimensionRequest = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<CreateDimensionRequest>;
export type DimensionArn = string;
export interface CreateDimensionResponse {
  name?: string;
  arn?: string;
}
const CreateDimensionResponse = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<CreateDimensionResponse>;
export type DomainConfigurationName = string;
export type DomainName = string;
export type AcmCertificateArn = string;
export type ServerCertificateArns = string[];
const ServerCertificateArns = JobTargets as any as S.Schema<ServerCertificateArns>;
export type AllowAuthorizerOverride = boolean;
export interface AuthorizerConfig {
  defaultAuthorizerName?: string;
  allowAuthorizerOverride?: boolean;
}
const AuthorizerConfig = /*@__PURE__*/ __L.at(__c7, 3) as any as S.Schema<AuthorizerConfig>;
export type ServiceType = "DATA" | "CREDENTIAL_PROVIDER" | "JOBS" | (string & {});
const ServiceType = S.String;

export type SecurityPolicy = string;
export interface TlsConfig {
  securityPolicy?: string;
}
const TlsConfig = /*@__PURE__*/ __L.at(__c7, 4) as any as S.Schema<TlsConfig>;
export type EnableOCSPCheck = boolean;
export type OCSPLambdaArn = string;
export interface ServerCertificateConfig {
  enableOCSPCheck?: boolean;
  ocspLambdaArn?: string;
  ocspAuthorizedResponderArn?: string;
}
const ServerCertificateConfig = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<ServerCertificateConfig>;
export type AuthenticationType =
  | "CUSTOM_AUTH_X509"
  | "CUSTOM_AUTH"
  | "AWS_X509"
  | "AWS_SIGV4"
  | "DEFAULT"
  | (string & {});
const AuthenticationType = S.String;

export type ApplicationProtocol = "SECURE_MQTT" | "MQTT_WSS" | "HTTPS" | "DEFAULT" | (string & {});
const ApplicationProtocol = S.String;

export type ClientCertificateCallbackArn = string;
export interface ClientCertificateConfig {
  clientCertificateCallbackArn?: string;
}
const ClientCertificateConfig = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<ClientCertificateConfig>;
export interface CreateDomainConfigurationRequest {
  domainConfigurationName: string;
  domainName?: string;
  serverCertificateArns?: string[];
  validationCertificateArn?: string;
  authorizerConfig?: AuthorizerConfig;
  serviceType?: ServiceType;
  tags?: Tag[];
  tlsConfig?: TlsConfig;
  serverCertificateConfig?: ServerCertificateConfig;
  authenticationType?: AuthenticationType;
  applicationProtocol?: ApplicationProtocol;
  clientCertificateConfig?: ClientCertificateConfig;
}
const CreateDomainConfigurationRequest = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<CreateDomainConfigurationRequest>;
export type DomainConfigurationArn = string;
export interface CreateDomainConfigurationResponse {
  domainConfigurationName?: string;
  domainConfigurationArn?: string;
}
const CreateDomainConfigurationResponse = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<CreateDomainConfigurationResponse>;
export type ThingGroupDescription = string;
export type AttributeName = string;
export type AttributeValue = string;
export type Attributes = { [key: string]: string | undefined };
const Attributes = DetailsMap as any as S.Schema<Attributes>;
export type Flag = boolean;
export interface AttributePayload {
  attributes?: { [key: string]: string | undefined };
  merge?: boolean;
}
const AttributePayload = /*@__PURE__*/ __L.at(__c8, 1) as any as S.Schema<AttributePayload>;
export interface ThingGroupProperties {
  thingGroupDescription?: string;
  attributePayload?: AttributePayload;
}
const ThingGroupProperties = /*@__PURE__*/ __L.at(__c8, 2) as any as S.Schema<ThingGroupProperties>;
export type IndexName = string;
export type QueryString = string;
export type QueryVersion = string;
export interface CreateDynamicThingGroupRequest {
  thingGroupName: string;
  thingGroupProperties?: ThingGroupProperties;
  indexName?: string;
  queryString: string;
  queryVersion?: string;
  tags?: Tag[];
}
const CreateDynamicThingGroupRequest = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<CreateDynamicThingGroupRequest>;
export type ThingGroupId = string;
export interface CreateDynamicThingGroupResponse {
  thingGroupName?: string;
  thingGroupArn?: string;
  thingGroupId?: string;
  indexName?: string;
  queryString?: string;
  queryVersion?: string;
}
const CreateDynamicThingGroupResponse = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<CreateDynamicThingGroupResponse>;
export type FleetMetricName = string;
export type AggregationTypeName = "Statistics" | "Percentiles" | "Cardinality" | (string & {});
const AggregationTypeName = S.String;

export type AggregationTypeValue = string;
export type AggregationTypeValues = string[];
const AggregationTypeValues = JobTargets as any as S.Schema<AggregationTypeValues>;
export interface AggregationType {
  name: AggregationTypeName;
  values?: string[];
}
const AggregationType = /*@__PURE__*/ __L.at(__c8, 5) as any as S.Schema<AggregationType>;
export type FleetMetricPeriod = number;
export type AggregationField = string;
export type FleetMetricDescription = string;
export type FleetMetricUnit =
  | "Seconds"
  | "Microseconds"
  | "Milliseconds"
  | "Bytes"
  | "Kilobytes"
  | "Megabytes"
  | "Gigabytes"
  | "Terabytes"
  | "Bits"
  | "Kilobits"
  | "Megabits"
  | "Gigabits"
  | "Terabits"
  | "Percent"
  | "Count"
  | "Bytes/Second"
  | "Kilobytes/Second"
  | "Megabytes/Second"
  | "Gigabytes/Second"
  | "Terabytes/Second"
  | "Bits/Second"
  | "Kilobits/Second"
  | "Megabits/Second"
  | "Gigabits/Second"
  | "Terabits/Second"
  | "Count/Second"
  | "None"
  | (string & {});
const FleetMetricUnit = S.String;

export interface CreateFleetMetricRequest {
  metricName: string;
  queryString: string;
  aggregationType: AggregationType;
  period: number;
  aggregationField: string;
  description?: string;
  queryVersion?: string;
  indexName?: string;
  unit?: FleetMetricUnit;
  tags?: Tag[];
}
const CreateFleetMetricRequest = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<CreateFleetMetricRequest>;
export type FleetMetricArn = string;
export interface CreateFleetMetricResponse {
  metricName?: string;
  metricArn?: string;
}
const CreateFleetMetricResponse =
  CreateCustomMetricResponse as any as S.Schema<CreateFleetMetricResponse>;
export type JobDocumentSource = string;
export type JobDocument = string;
export type ExpiresInSec = number;
export interface PresignedUrlConfig {
  roleArn?: string;
  expiresInSec?: number;
}
const PresignedUrlConfig = /*@__PURE__*/ __L.at(__c8, 7) as any as S.Schema<PresignedUrlConfig>;
export type TargetSelection = "CONTINUOUS" | "SNAPSHOT" | (string & {});
const TargetSelection = S.String;

export type MaxJobExecutionsPerMin = number;
export type RolloutRatePerMinute = number;
export type IncrementFactor = number;
export type NumberOfThings = number;
export interface RateIncreaseCriteria {
  numberOfNotifiedThings?: number;
  numberOfSucceededThings?: number;
}
const RateIncreaseCriteria = /*@__PURE__*/ __L.at(__c9, 0) as any as S.Schema<RateIncreaseCriteria>;
export interface ExponentialRolloutRate {
  baseRatePerMinute: number;
  incrementFactor: number;
  rateIncreaseCriteria: RateIncreaseCriteria;
}
const ExponentialRolloutRate = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<ExponentialRolloutRate>;
export interface JobExecutionsRolloutConfig {
  maximumPerMinute?: number;
  exponentialRate?: ExponentialRolloutRate;
}
const JobExecutionsRolloutConfig = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<JobExecutionsRolloutConfig>;
export type JobExecutionFailureType = "FAILED" | "REJECTED" | "TIMED_OUT" | "ALL" | (string & {});
const JobExecutionFailureType = S.String;

export type AbortAction = "CANCEL" | (string & {});
const AbortAction = S.String;

export type AbortThresholdPercentage = number;
export type MinimumNumberOfExecutedThings = number;
export interface AbortCriteria {
  failureType: JobExecutionFailureType;
  action: AbortAction;
  thresholdPercentage: number;
  minNumberOfExecutedThings: number;
}
const AbortCriteria = /*@__PURE__*/ __L.at(__c9, 3) as any as S.Schema<AbortCriteria>;
export type AbortCriteriaList = AbortCriteria[];
const AbortCriteriaList = /*@__PURE__*/ __L.at(__c9, 4);
export interface AbortConfig {
  criteriaList: AbortCriteria[];
}
const AbortConfig = /*@__PURE__*/ __L.at(__c9, 5) as any as S.Schema<AbortConfig>;
export type InProgressTimeoutInMinutes = number;
export interface TimeoutConfig {
  inProgressTimeoutInMinutes?: number;
}
const TimeoutConfig = /*@__PURE__*/ __L.at(__c9, 6) as any as S.Schema<TimeoutConfig>;
export type JobTemplateArn = string;
export type RetryableFailureType = "FAILED" | "TIMED_OUT" | "ALL" | (string & {});
const RetryableFailureType = S.String;

export type NumberOfRetries = number;
export interface RetryCriteria {
  failureType: RetryableFailureType;
  numberOfRetries: number;
}
const RetryCriteria = /*@__PURE__*/ __L.at(__c9, 7) as any as S.Schema<RetryCriteria>;
export type RetryCriteriaList = RetryCriteria[];
const RetryCriteriaList = /*@__PURE__*/ __L.at(__c10, 0);
export interface JobExecutionsRetryConfig {
  criteriaList: RetryCriteria[];
}
const JobExecutionsRetryConfig = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<JobExecutionsRetryConfig>;
export type ParameterKey = string;
export type ParameterValue = string;
export type ParameterMap = { [key: string]: string | undefined };
const ParameterMap = PublicKeyMap as any as S.Schema<ParameterMap>;
export type StringDateTime = string;
export type JobEndBehavior = "STOP_ROLLOUT" | "CANCEL" | "FORCE_CANCEL" | (string & {});
const JobEndBehavior = S.String;

export type CronExpression = string;
export type DurationInMinutes = number;
export interface MaintenanceWindow {
  startTime: string;
  durationInMinutes: number;
}
const MaintenanceWindow = /*@__PURE__*/ __L.at(__c10, 2) as any as S.Schema<MaintenanceWindow>;
export type MaintenanceWindows = MaintenanceWindow[];
const MaintenanceWindows = /*@__PURE__*/ __L.at(__c10, 3);
export interface SchedulingConfig {
  startTime?: string;
  endTime?: string;
  endBehavior?: JobEndBehavior;
  maintenanceWindows?: MaintenanceWindow[];
}
const SchedulingConfig = /*@__PURE__*/ __L.at(__c10, 4) as any as S.Schema<SchedulingConfig>;
export type PackageVersionArn = string;
export type DestinationPackageVersions = string[];
const DestinationPackageVersions = JobTargets as any as S.Schema<DestinationPackageVersions>;
export interface CreateJobRequest {
  jobId: string;
  targets: string[];
  documentSource?: string;
  document?: string;
  description?: string;
  presignedUrlConfig?: PresignedUrlConfig;
  targetSelection?: TargetSelection;
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;
  abortConfig?: AbortConfig;
  timeoutConfig?: TimeoutConfig;
  tags?: Tag[];
  namespaceId?: string;
  jobTemplateArn?: string;
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig;
  documentParameters?: { [key: string]: string | undefined };
  schedulingConfig?: SchedulingConfig;
  destinationPackageVersions?: string[];
}
const CreateJobRequest = /*@__PURE__*/ __L.at(__c10, 5) as any as S.Schema<CreateJobRequest>;
export interface CreateJobResponse {
  jobArn?: string;
  jobId?: string;
  description?: string;
}
const CreateJobResponse = CancelJobResponse as any as S.Schema<CreateJobResponse>;
export type JobTemplateId = string;
export interface CreateJobTemplateRequest {
  jobTemplateId: string;
  jobArn?: string;
  documentSource?: string;
  document?: string;
  description: string;
  presignedUrlConfig?: PresignedUrlConfig;
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;
  abortConfig?: AbortConfig;
  timeoutConfig?: TimeoutConfig;
  tags?: Tag[];
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig;
  maintenanceWindows?: MaintenanceWindow[];
  destinationPackageVersions?: string[];
}
const CreateJobTemplateRequest = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<CreateJobTemplateRequest>;
export interface CreateJobTemplateResponse {
  jobTemplateArn?: string;
  jobTemplateId?: string;
}
const CreateJobTemplateResponse = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<CreateJobTemplateResponse>;
export interface CreateKeysAndCertificateRequest {
  setAsActive?: boolean;
}
const CreateKeysAndCertificateRequest = /*@__PURE__*/ __L.at(
  __c11,
  0,
) as any as S.Schema<CreateKeysAndCertificateRequest>;
export type PublicKey = string;
export type PrivateKey = string | redacted.Redacted<string>;
export interface KeyPair {
  PublicKey?: string;
  PrivateKey?: string | redacted.Redacted<string>;
}
const KeyPair = /*@__PURE__*/ __L.at(__c11, 1) as any as S.Schema<KeyPair>;
export interface CreateKeysAndCertificateResponse {
  certificateArn?: string;
  certificateId?: string;
  certificatePem?: string;
  keyPair?: KeyPair;
}
const CreateKeysAndCertificateResponse = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<CreateKeysAndCertificateResponse>;
export type MitigationActionName = string;
export type DeviceCertificateUpdateAction = "DEACTIVATE" | (string & {});
const DeviceCertificateUpdateAction = S.String;

export interface UpdateDeviceCertificateParams {
  action: DeviceCertificateUpdateAction;
}
const UpdateDeviceCertificateParams = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<UpdateDeviceCertificateParams>;
export type CACertificateUpdateAction = "DEACTIVATE" | (string & {});
export interface UpdateCACertificateParams {
  action: CACertificateUpdateAction;
}
const UpdateCACertificateParams =
  UpdateDeviceCertificateParams as any as S.Schema<UpdateCACertificateParams>;
export type ThingGroupNames = string[];
const ThingGroupNames = JobTargets as any as S.Schema<ThingGroupNames>;
export interface AddThingsToThingGroupParams {
  thingGroupNames: string[];
  overrideDynamicGroups?: boolean;
}
const AddThingsToThingGroupParams = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<AddThingsToThingGroupParams>;
export type PolicyTemplateName = "BLANK_POLICY" | (string & {});
const PolicyTemplateName = S.String;

export interface ReplaceDefaultPolicyVersionParams {
  templateName: PolicyTemplateName;
}
const ReplaceDefaultPolicyVersionParams = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<ReplaceDefaultPolicyVersionParams>;
export type LogLevel = "DEBUG" | "INFO" | "ERROR" | "WARN" | "DISABLED" | (string & {});
const LogLevel = S.String;

export interface EnableIoTLoggingParams {
  roleArnForLogging: string;
  logLevel: LogLevel;
}
const EnableIoTLoggingParams = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<EnableIoTLoggingParams>;
export type SnsTopicArn = string;
export interface PublishFindingToSnsParams {
  topicArn: string;
}
const PublishFindingToSnsParams = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<PublishFindingToSnsParams>;
export interface MitigationActionParams {
  updateDeviceCertificateParams?: UpdateDeviceCertificateParams;
  updateCACertificateParams?: UpdateCACertificateParams;
  addThingsToThingGroupParams?: AddThingsToThingGroupParams;
  replaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams;
  enableIoTLoggingParams?: EnableIoTLoggingParams;
  publishFindingToSnsParams?: PublishFindingToSnsParams;
}
const MitigationActionParams = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<MitigationActionParams>;
export interface CreateMitigationActionRequest {
  actionName: string;
  roleArn: string;
  actionParams: MitigationActionParams;
  tags?: Tag[];
}
const CreateMitigationActionRequest = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<CreateMitigationActionRequest>;
export type MitigationActionArn = string;
export type MitigationActionId = string;
export interface CreateMitigationActionResponse {
  actionArn?: string;
  actionId?: string;
}
const CreateMitigationActionResponse = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<CreateMitigationActionResponse>;
export type OTAUpdateId = string;
export type OTAUpdateDescription = string;
export type Target = string;
export type Targets = string[];
const Targets = JobTargets as any as S.Schema<Targets>;
export type Protocol = "MQTT" | "HTTP" | (string & {});
const Protocol = S.String;

export type Protocols = Protocol[];
const Protocols = /*@__PURE__*/ __L.at(__c12, 3);
export type MaximumPerMinute = number;
export type AwsJobRolloutRatePerMinute = number;
export type AwsJobRolloutIncrementFactor = number;
export type AwsJobRateIncreaseCriteriaNumberOfThings = number;
export interface AwsJobRateIncreaseCriteria {
  numberOfNotifiedThings?: number;
  numberOfSucceededThings?: number;
}
const AwsJobRateIncreaseCriteria = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<AwsJobRateIncreaseCriteria>;
export interface AwsJobExponentialRolloutRate {
  baseRatePerMinute: number;
  incrementFactor: number;
  rateIncreaseCriteria: AwsJobRateIncreaseCriteria;
}
const AwsJobExponentialRolloutRate = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<AwsJobExponentialRolloutRate>;
export interface AwsJobExecutionsRolloutConfig {
  maximumPerMinute?: number;
  exponentialRate?: AwsJobExponentialRolloutRate;
}
const AwsJobExecutionsRolloutConfig = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<AwsJobExecutionsRolloutConfig>;
export type ExpiresInSeconds = number;
export interface AwsJobPresignedUrlConfig {
  expiresInSec?: number;
}
const AwsJobPresignedUrlConfig = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<AwsJobPresignedUrlConfig>;
export type AwsJobAbortCriteriaFailureType =
  | "FAILED"
  | "REJECTED"
  | "TIMED_OUT"
  | "ALL"
  | (string & {});
export type AwsJobAbortCriteriaAbortAction = "CANCEL" | (string & {});
export type AwsJobAbortCriteriaAbortThresholdPercentage = number;
export type AwsJobAbortCriteriaMinimumNumberOfExecutedThings = number;
export interface AwsJobAbortCriteria {
  failureType: AwsJobAbortCriteriaFailureType;
  action: AwsJobAbortCriteriaAbortAction;
  thresholdPercentage: number;
  minNumberOfExecutedThings: number;
}
export type AwsJobAbortCriteriaList = AwsJobAbortCriteria[];
const AwsJobAbortCriteriaList = AbortCriteriaList as any as S.Schema<AwsJobAbortCriteriaList>;
export interface AwsJobAbortConfig {
  abortCriteriaList: AwsJobAbortCriteria[];
}
const AwsJobAbortConfig = /*@__PURE__*/ __L.at(__c13, 0) as any as S.Schema<AwsJobAbortConfig>;
export type AwsJobTimeoutInProgressTimeoutInMinutes = number;
export interface AwsJobTimeoutConfig {
  inProgressTimeoutInMinutes?: number;
}
const AwsJobTimeoutConfig = TimeoutConfig as any as S.Schema<AwsJobTimeoutConfig>;
export type FileName = string;
export type FileType = number;
export type OTAUpdateFileVersion = string;
export type StreamId = string;
export type FileId = number;
export interface Stream {
  streamId?: string;
  fileId?: number;
}
const Stream = /*@__PURE__*/ __L.at(__c13, 1) as any as S.Schema<Stream>;
export interface FileLocation {
  stream?: Stream;
  s3Location?: S3Location;
}
const FileLocation = /*@__PURE__*/ __L.at(__c13, 2) as any as S.Schema<FileLocation>;
export type SigningJobId = string;
export type Platform = string;
export type CertificatePathOnDevice = string;
export interface SigningProfileParameter {
  certificateArn?: string;
  platform?: string;
  certificatePathOnDevice?: string;
}
const SigningProfileParameter = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<SigningProfileParameter>;
export type SigningProfileName = string;
export type Prefix = string;
export interface S3Destination {
  bucket?: string;
  prefix?: string;
}
const S3Destination = /*@__PURE__*/ __L.at(__c13, 4) as any as S.Schema<S3Destination>;
export interface Destination {
  s3Destination?: S3Destination;
}
const Destination = /*@__PURE__*/ __L.at(__c13, 5) as any as S.Schema<Destination>;
export interface StartSigningJobParameter {
  signingProfileParameter?: SigningProfileParameter;
  signingProfileName?: string;
  destination?: Destination;
}
const StartSigningJobParameter = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<StartSigningJobParameter>;
export type Signature = Uint8Array;
export interface CodeSigningSignature {
  inlineDocument?: Uint8Array;
}
const CodeSigningSignature = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<CodeSigningSignature>;
export type CertificateName = string;
export type InlineDocument = string;
export interface CodeSigningCertificateChain {
  certificateName?: string;
  inlineDocument?: string;
}
const CodeSigningCertificateChain = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<CodeSigningCertificateChain>;
export type HashAlgorithm = string;
export type SignatureAlgorithm = string;
export interface CustomCodeSigning {
  signature?: CodeSigningSignature;
  certificateChain?: CodeSigningCertificateChain;
  hashAlgorithm?: string;
  signatureAlgorithm?: string;
}
const CustomCodeSigning = /*@__PURE__*/ __L.at(__c14, 1) as any as S.Schema<CustomCodeSigning>;
export interface CodeSigning {
  awsSignerJobId?: string;
  startSigningJobParameter?: StartSigningJobParameter;
  customCodeSigning?: CustomCodeSigning;
}
const CodeSigning = /*@__PURE__*/ __L.at(__c14, 2) as any as S.Schema<CodeSigning>;
export type AttributeKey = string;
export type Value = string;
export type AttributesMap = { [key: string]: string | undefined };
const AttributesMap = PublicKeyMap as any as S.Schema<AttributesMap>;
export interface OTAUpdateFile {
  fileName?: string;
  fileType?: number;
  fileVersion?: string;
  fileLocation?: FileLocation;
  codeSigning?: CodeSigning;
  attributes?: { [key: string]: string | undefined };
}
const OTAUpdateFile = /*@__PURE__*/ __L.at(__c14, 3) as any as S.Schema<OTAUpdateFile>;
export type OTAUpdateFiles = OTAUpdateFile[];
const OTAUpdateFiles = /*@__PURE__*/ __L.at(__c14, 4);
export type AdditionalParameterMap = { [key: string]: string | undefined };
const AdditionalParameterMap = PublicKeyMap as any as S.Schema<AdditionalParameterMap>;
export interface CreateOTAUpdateRequest {
  otaUpdateId: string;
  description?: string;
  targets: string[];
  protocols?: Protocol[];
  targetSelection?: TargetSelection;
  awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig;
  awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig;
  awsJobAbortConfig?: AwsJobAbortConfig;
  awsJobTimeoutConfig?: AwsJobTimeoutConfig;
  files: OTAUpdateFile[];
  roleArn: string;
  additionalParameters?: { [key: string]: string | undefined };
  tags?: Tag[];
}
const CreateOTAUpdateRequest = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<CreateOTAUpdateRequest>;
export type AwsIotJobId = string;
export type OTAUpdateArn = string;
export type AwsIotJobArn = string;
export type OTAUpdateStatus =
  | "CREATE_PENDING"
  | "CREATE_IN_PROGRESS"
  | "CREATE_COMPLETE"
  | "CREATE_FAILED"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED"
  | (string & {});
const OTAUpdateStatus = S.String;

export interface CreateOTAUpdateResponse {
  otaUpdateId?: string;
  awsIotJobId?: string;
  otaUpdateArn?: string;
  awsIotJobArn?: string;
  otaUpdateStatus?: OTAUpdateStatus;
}
const CreateOTAUpdateResponse = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<CreateOTAUpdateResponse>;
export type ResourceDescription = string | redacted.Redacted<string>;
export type TagMap = { [key: string]: string | undefined };
const TagMap = DetailsMap as any as S.Schema<TagMap>;
export interface CreatePackageRequest {
  packageName: string;
  description?: string | redacted.Redacted<string>;
  tags?: { [key: string]: string | undefined };
  clientToken?: string;
}
const CreatePackageRequest = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<CreatePackageRequest>;
export type PackageArn = string;
export interface CreatePackageResponse {
  packageName?: string;
  packageArn?: string;
  description?: string | redacted.Redacted<string>;
}
const CreatePackageResponse = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<CreatePackageResponse>;
export type ResourceAttributeKey = string;
export type ResourceAttributeValue = string;
export type ResourceAttributes = { [key: string]: string | undefined };
const ResourceAttributes = PublicKeyMap as any as S.Schema<ResourceAttributes>;
export interface PackageVersionArtifact {
  s3Location?: S3Location;
}
const PackageVersionArtifact = Sbom as any as S.Schema<PackageVersionArtifact>;
export type PackageVersionRecipe = string | redacted.Redacted<string>;
export interface CreatePackageVersionRequest {
  packageName: string;
  versionName: string;
  description?: string | redacted.Redacted<string>;
  attributes?: { [key: string]: string | undefined };
  artifact?: PackageVersionArtifact;
  recipe?: string | redacted.Redacted<string>;
  tags?: { [key: string]: string | undefined };
  clientToken?: string;
}
const CreatePackageVersionRequest = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<CreatePackageVersionRequest>;
export type PackageVersionStatus = "DRAFT" | "PUBLISHED" | "DEPRECATED" | (string & {});
const PackageVersionStatus = S.String;

export type PackageVersionErrorReason = string;
export interface CreatePackageVersionResponse {
  packageVersionArn?: string;
  packageName?: string;
  versionName?: string;
  description?: string | redacted.Redacted<string>;
  attributes?: { [key: string]: string | undefined };
  status?: PackageVersionStatus;
  errorReason?: string;
}
const CreatePackageVersionResponse = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<CreatePackageVersionResponse>;
export type PolicyDocument = string;
export interface CreatePolicyRequest {
  policyName: string;
  policyDocument: string;
  tags?: Tag[];
}
const CreatePolicyRequest = /*@__PURE__*/ __L.at(__c15, 3) as any as S.Schema<CreatePolicyRequest>;
export type PolicyArn = string;
export interface CreatePolicyResponse {
  policyName?: string;
  policyArn?: string;
  policyDocument?: string;
  policyVersionId?: string;
}
const CreatePolicyResponse = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<CreatePolicyResponse>;
export type SetAsDefault = boolean;
export interface CreatePolicyVersionRequest {
  policyName: string;
  policyDocument: string;
  setAsDefault?: boolean;
}
const CreatePolicyVersionRequest = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<CreatePolicyVersionRequest>;
export type IsDefaultVersion = boolean;
export interface CreatePolicyVersionResponse {
  policyArn?: string;
  policyDocument?: string;
  policyVersionId?: string;
  isDefaultVersion?: boolean;
}
const CreatePolicyVersionResponse = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<CreatePolicyVersionResponse>;
export type TemplateName = string;
export interface CreateProvisioningClaimRequest {
  templateName: string;
}
const CreateProvisioningClaimRequest = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<CreateProvisioningClaimRequest>;
export interface CreateProvisioningClaimResponse {
  certificateId?: string;
  certificatePem?: string;
  keyPair?: KeyPair;
  expiration?: Date;
}
const CreateProvisioningClaimResponse = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<CreateProvisioningClaimResponse>;
export type TemplateDescription = string;
export type TemplateBody = string;
export type Enabled2 = boolean;
export type PayloadVersion = string;
export interface ProvisioningHook {
  payloadVersion?: string;
  targetArn: string;
}
const ProvisioningHook = /*@__PURE__*/ __L.at(__c16, 1) as any as S.Schema<ProvisioningHook>;
export type TemplateType = "FLEET_PROVISIONING" | "JITP" | (string & {});
const TemplateType = S.String;

export interface CreateProvisioningTemplateRequest {
  templateName: string;
  description?: string;
  templateBody: string;
  enabled?: boolean;
  provisioningRoleArn: string;
  preProvisioningHook?: ProvisioningHook;
  tags?: Tag[];
  type?: TemplateType;
}
const CreateProvisioningTemplateRequest = /*@__PURE__*/ __L.at(
  __c16,
  2,
) as any as S.Schema<CreateProvisioningTemplateRequest>;
export type TemplateArn = string;
export type TemplateVersionId = number;
export interface CreateProvisioningTemplateResponse {
  templateArn?: string;
  templateName?: string;
  defaultVersionId?: number;
}
const CreateProvisioningTemplateResponse = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<CreateProvisioningTemplateResponse>;
export interface CreateProvisioningTemplateVersionRequest {
  templateName: string;
  templateBody: string;
  setAsDefault?: boolean;
}
const CreateProvisioningTemplateVersionRequest = /*@__PURE__*/ __L.at(
  __c16,
  4,
) as any as S.Schema<CreateProvisioningTemplateVersionRequest>;
export interface CreateProvisioningTemplateVersionResponse {
  templateArn?: string;
  templateName?: string;
  versionId?: number;
  isDefaultVersion?: boolean;
}
const CreateProvisioningTemplateVersionResponse = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<CreateProvisioningTemplateVersionResponse>;
export type RoleAlias = string;
export type CredentialDurationSeconds = number;
export interface CreateRoleAliasRequest {
  roleAlias: string;
  roleArn: string;
  credentialDurationSeconds?: number;
  tags?: Tag[];
}
const CreateRoleAliasRequest = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<CreateRoleAliasRequest>;
export interface CreateRoleAliasResponse {
  roleAlias?: string;
  roleAliasArn?: string;
}
const CreateRoleAliasResponse = /*@__PURE__*/ __L.at(
  __c16,
  7,
) as any as S.Schema<CreateRoleAliasResponse>;
export type AuditFrequency = "DAILY" | "WEEKLY" | "BIWEEKLY" | "MONTHLY" | (string & {});
const AuditFrequency = S.String;

export type DayOfMonth = string;
export type DayOfWeek = "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | (string & {});
const DayOfWeek = S.String;

export type TargetAuditCheckNames = string[];
const TargetAuditCheckNames = JobTargets as any as S.Schema<TargetAuditCheckNames>;
export type ScheduledAuditName = string;
export interface CreateScheduledAuditRequest {
  frequency: AuditFrequency;
  dayOfMonth?: string;
  dayOfWeek?: DayOfWeek;
  targetCheckNames: string[];
  scheduledAuditName: string;
  tags?: Tag[];
}
const CreateScheduledAuditRequest = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<CreateScheduledAuditRequest>;
export type ScheduledAuditArn = string;
export interface CreateScheduledAuditResponse {
  scheduledAuditArn?: string;
}
const CreateScheduledAuditResponse = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<CreateScheduledAuditResponse>;
export type SecurityProfileDescription = string;
export type BehaviorName = string;
export type BehaviorMetric = string;
export type DimensionValueOperator = "IN" | "NOT_IN" | (string & {});
const DimensionValueOperator = S.String;

export interface MetricDimension {
  dimensionName: string;
  operator?: DimensionValueOperator;
}
const MetricDimension = /*@__PURE__*/ __L.at(__c17, 2) as any as S.Schema<MetricDimension>;
export type ComparisonOperator =
  | "less-than"
  | "less-than-equals"
  | "greater-than"
  | "greater-than-equals"
  | "in-cidr-set"
  | "not-in-cidr-set"
  | "in-port-set"
  | "not-in-port-set"
  | "in-set"
  | "not-in-set"
  | (string & {});
const ComparisonOperator = S.String;

export type UnsignedLong = number;
export type Cidr = string;
export type Cidrs = string[];
const Cidrs = JobTargets as any as S.Schema<Cidrs>;
export type Port = number;
export type Ports = number[];
const Ports = /*@__PURE__*/ __L.at(__c17, 3);
export type NumberList = number[];
const NumberList = Ports as any as S.Schema<NumberList>;
export type StringValue = string;
export type StringList = string[];
const StringList = JobTargets as any as S.Schema<StringList>;
export interface MetricValue {
  count?: number;
  cidrs?: string[];
  ports?: number[];
  number?: number;
  numbers?: number[];
  strings?: string[];
}
const MetricValue = /*@__PURE__*/ __L.at(__c17, 4) as any as S.Schema<MetricValue>;
export type DurationSeconds = number;
export type ConsecutiveDatapointsToAlarm = number;
export type ConsecutiveDatapointsToClear = number;
export type EvaluationStatistic = string;
export interface StatisticalThreshold {
  statistic?: string;
}
const StatisticalThreshold = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<StatisticalThreshold>;
export type ConfidenceLevel = "LOW" | "MEDIUM" | "HIGH" | (string & {});
const ConfidenceLevel = S.String;

export interface MachineLearningDetectionConfig {
  confidenceLevel: ConfidenceLevel;
}
const MachineLearningDetectionConfig = /*@__PURE__*/ __L.at(
  __c17,
  6,
) as any as S.Schema<MachineLearningDetectionConfig>;
export interface BehaviorCriteria {
  comparisonOperator?: ComparisonOperator;
  value?: MetricValue;
  durationSeconds?: number;
  consecutiveDatapointsToAlarm?: number;
  consecutiveDatapointsToClear?: number;
  statisticalThreshold?: StatisticalThreshold;
  mlDetectionConfig?: MachineLearningDetectionConfig;
}
const BehaviorCriteria = /*@__PURE__*/ __L.at(__c17, 7) as any as S.Schema<BehaviorCriteria>;
export type SuppressAlerts = boolean;
export type ExportMetric = boolean;
export interface Behavior {
  name: string;
  metric?: string;
  metricDimension?: MetricDimension;
  criteria?: BehaviorCriteria;
  suppressAlerts?: boolean;
  exportMetric?: boolean;
}
const Behavior = /*@__PURE__*/ __L.at(__c18, 0) as any as S.Schema<Behavior>;
export type Behaviors = Behavior[];
const Behaviors = /*@__PURE__*/ __L.at(__c18, 1);
export type AlertTargetType = "SNS" | (string & {});
const AlertTargetType = S.String;

export type AlertTargetArn = string;
export interface AlertTarget {
  alertTargetArn: string;
  roleArn: string;
}
const AlertTarget = /*@__PURE__*/ __L.at(__c18, 2) as any as S.Schema<AlertTarget>;
export type AlertTargets = { [key in AlertTargetType]?: AlertTarget };
const AlertTargets = /*@__PURE__*/ __L.at(__c18, 3);
export type AdditionalMetricsToRetainList = string[];
const AdditionalMetricsToRetainList = JobTargets as any as S.Schema<AdditionalMetricsToRetainList>;
export interface MetricToRetain {
  metric: string;
  metricDimension?: MetricDimension;
  exportMetric?: boolean;
}
const MetricToRetain = /*@__PURE__*/ __L.at(__c18, 4) as any as S.Schema<MetricToRetain>;
export type AdditionalMetricsToRetainV2List = MetricToRetain[];
const AdditionalMetricsToRetainV2List = /*@__PURE__*/ __L.at(__c18, 5);
export type MqttTopic = string;
export interface MetricsExportConfig {
  mqttTopic: string;
  roleArn: string;
}
const MetricsExportConfig = /*@__PURE__*/ __L.at(__c18, 6) as any as S.Schema<MetricsExportConfig>;
export interface CreateSecurityProfileRequest {
  securityProfileName: string;
  securityProfileDescription?: string;
  behaviors?: Behavior[];
  alertTargets?: { [key: string]: AlertTarget | undefined };
  additionalMetricsToRetain?: string[];
  additionalMetricsToRetainV2?: MetricToRetain[];
  tags?: Tag[];
  metricsExportConfig?: MetricsExportConfig;
}
const CreateSecurityProfileRequest = /*@__PURE__*/ __L.at(
  __c18,
  7,
) as any as S.Schema<CreateSecurityProfileRequest>;
export type SecurityProfileArn = string;
export interface CreateSecurityProfileResponse {
  securityProfileName?: string;
  securityProfileArn?: string;
}
const CreateSecurityProfileResponse = /*@__PURE__*/ __L.at(
  __c19,
  0,
) as any as S.Schema<CreateSecurityProfileResponse>;
export type StreamDescription = string;
export interface StreamFile {
  fileId?: number;
  s3Location?: S3Location;
}
const StreamFile = /*@__PURE__*/ __L.at(__c19, 1) as any as S.Schema<StreamFile>;
export type StreamFiles = StreamFile[];
const StreamFiles = /*@__PURE__*/ __L.at(__c19, 2);
export interface CreateStreamRequest {
  streamId: string;
  description?: string;
  files: StreamFile[];
  roleArn: string;
  tags?: Tag[];
}
const CreateStreamRequest = /*@__PURE__*/ __L.at(__c19, 3) as any as S.Schema<CreateStreamRequest>;
export type StreamArn = string;
export type StreamVersion = number;
export interface CreateStreamResponse {
  streamId?: string;
  streamArn?: string;
  description?: string;
  streamVersion?: number;
}
const CreateStreamResponse = /*@__PURE__*/ __L.at(
  __c19,
  4,
) as any as S.Schema<CreateStreamResponse>;
export type ThingTypeName = string;
export interface CreateThingRequest {
  thingName: string;
  thingTypeName?: string;
  attributePayload?: AttributePayload;
  billingGroupName?: string;
}
const CreateThingRequest = /*@__PURE__*/ __L.at(__c19, 5) as any as S.Schema<CreateThingRequest>;
export type ThingId = string;
export interface CreateThingResponse {
  thingName?: string;
  thingArn?: string;
  thingId?: string;
}
const CreateThingResponse = /*@__PURE__*/ __L.at(__c19, 6) as any as S.Schema<CreateThingResponse>;
export interface CreateThingGroupRequest {
  thingGroupName: string;
  parentGroupName?: string;
  thingGroupProperties?: ThingGroupProperties;
  tags?: Tag[];
}
const CreateThingGroupRequest = /*@__PURE__*/ __L.at(
  __c19,
  7,
) as any as S.Schema<CreateThingGroupRequest>;
export interface CreateThingGroupResponse {
  thingGroupName?: string;
  thingGroupArn?: string;
  thingGroupId?: string;
}
const CreateThingGroupResponse = /*@__PURE__*/ __L.at(
  __c20,
  0,
) as any as S.Schema<CreateThingGroupResponse>;
export type ThingTypeDescription = string;
export type SearchableAttributes = string[];
const SearchableAttributes = JobTargets as any as S.Schema<SearchableAttributes>;
export type UserPropertyKeyName = string;
export type ConnectionAttributeName = string;
export interface PropagatingAttribute {
  userPropertyKey?: string;
  thingAttribute?: string;
  connectionAttribute?: string;
}
const PropagatingAttribute = /*@__PURE__*/ __L.at(
  __c20,
  1,
) as any as S.Schema<PropagatingAttribute>;
export type PropagatingAttributeList = PropagatingAttribute[];
const PropagatingAttributeList = /*@__PURE__*/ __L.at(__c20, 2);
export interface Mqtt5Configuration {
  propagatingAttributes?: PropagatingAttribute[];
}
const Mqtt5Configuration = /*@__PURE__*/ __L.at(__c20, 3) as any as S.Schema<Mqtt5Configuration>;
export interface ThingTypeProperties {
  thingTypeDescription?: string;
  searchableAttributes?: string[];
  mqtt5Configuration?: Mqtt5Configuration;
}
const ThingTypeProperties = /*@__PURE__*/ __L.at(__c20, 4) as any as S.Schema<ThingTypeProperties>;
export interface CreateThingTypeRequest {
  thingTypeName: string;
  thingTypeProperties?: ThingTypeProperties;
  tags?: Tag[];
}
const CreateThingTypeRequest = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<CreateThingTypeRequest>;
export type ThingTypeArn = string;
export type ThingTypeId = string;
export interface CreateThingTypeResponse {
  thingTypeName?: string;
  thingTypeArn?: string;
  thingTypeId?: string;
}
const CreateThingTypeResponse = /*@__PURE__*/ __L.at(
  __c20,
  6,
) as any as S.Schema<CreateThingTypeResponse>;
export type RuleName = string;
export type SQL = string;
export type Description = string;
export type TableName = string;
export type AwsArn = string;
export type DynamoOperation = string;
export type HashKeyField = string;
export type HashKeyValue = string;
export type DynamoKeyType = "STRING" | "NUMBER" | (string & {});
const DynamoKeyType = S.String;

export type RangeKeyField = string;
export type RangeKeyValue = string;
export type PayloadField = string;
export interface DynamoDBAction {
  tableName: string;
  roleArn: string;
  operation?: string;
  hashKeyField: string;
  hashKeyValue: string;
  hashKeyType?: DynamoKeyType;
  rangeKeyField?: string;
  rangeKeyValue?: string;
  rangeKeyType?: DynamoKeyType;
  payloadField?: string;
}
const DynamoDBAction = /*@__PURE__*/ __L.at(__c20, 7) as any as S.Schema<DynamoDBAction>;
export interface PutItemInput {
  tableName: string;
}
const PutItemInput = /*@__PURE__*/ __L.at(__c21, 0) as any as S.Schema<PutItemInput>;
export interface DynamoDBv2Action {
  roleArn: string;
  putItem: PutItemInput;
}
const DynamoDBv2Action = /*@__PURE__*/ __L.at(__c21, 1) as any as S.Schema<DynamoDBv2Action>;
export type FunctionArn = string;
export interface LambdaAction {
  functionArn: string;
}
const LambdaAction = /*@__PURE__*/ __L.at(__c21, 2) as any as S.Schema<LambdaAction>;
export type MessageFormat = "RAW" | "JSON" | (string & {});
const MessageFormat = S.String;

export interface SnsAction {
  targetArn: string;
  roleArn: string;
  messageFormat?: MessageFormat;
}
const SnsAction = /*@__PURE__*/ __L.at(__c21, 3) as any as S.Schema<SnsAction>;
export type QueueUrl = string;
export type UseBase64 = boolean;
export interface SqsAction {
  roleArn: string;
  queueUrl: string;
  useBase64?: boolean;
}
const SqsAction = /*@__PURE__*/ __L.at(__c21, 4) as any as S.Schema<SqsAction>;
export type StreamName = string;
export type PartitionKey = string;
export interface KinesisAction {
  roleArn: string;
  streamName: string;
  partitionKey?: string;
}
const KinesisAction = /*@__PURE__*/ __L.at(__c21, 5) as any as S.Schema<KinesisAction>;
export type TopicPattern = string;
export type Qos = number;
export type PayloadFormatIndicator = string;
export type ContentType = string;
export type ResponseTopic = string;
export type CorrelationData = string;
export type MessageExpiry = string;
export type UserPropertyKey = string;
export type UserPropertyValue = string;
export interface UserProperty {
  key: string;
  value: string;
}
const UserProperty = /*@__PURE__*/ __L.at(__c21, 6) as any as S.Schema<UserProperty>;
export type UserProperties = UserProperty[];
const UserProperties = /*@__PURE__*/ __L.at(__c21, 7);
export interface MqttHeaders {
  payloadFormatIndicator?: string;
  contentType?: string;
  responseTopic?: string;
  correlationData?: string;
  messageExpiry?: string;
  userProperties?: UserProperty[];
}
const MqttHeaders = /*@__PURE__*/ __L.at(__c22, 0) as any as S.Schema<MqttHeaders>;
export interface RepublishAction {
  roleArn: string;
  topic: string;
  qos?: number;
  headers?: MqttHeaders;
}
const RepublishAction = /*@__PURE__*/ __L.at(__c22, 1) as any as S.Schema<RepublishAction>;
export type BucketName = string;
export type Key = string;
export type CannedAccessControlList =
  | "private"
  | "public-read"
  | "public-read-write"
  | "aws-exec-read"
  | "authenticated-read"
  | "bucket-owner-read"
  | "bucket-owner-full-control"
  | "log-delivery-write"
  | (string & {});
const CannedAccessControlList = S.String;

export interface S3Action {
  roleArn: string;
  bucketName: string;
  key: string;
  cannedAcl?: CannedAccessControlList;
}
const S3Action = /*@__PURE__*/ __L.at(__c22, 2) as any as S.Schema<S3Action>;
export type DeliveryStreamName = string;
export type FirehoseSeparator = string;
export type BatchMode = boolean;
export interface FirehoseAction {
  roleArn: string;
  deliveryStreamName: string;
  separator?: string;
  batchMode?: boolean;
}
const FirehoseAction = /*@__PURE__*/ __L.at(__c22, 3) as any as S.Schema<FirehoseAction>;
export interface CloudwatchMetricAction {
  roleArn: string;
  metricNamespace: string;
  metricName: string;
  metricValue: string;
  metricUnit: string;
  metricTimestamp?: string;
}
const CloudwatchMetricAction = /*@__PURE__*/ __L.at(
  __c22,
  4,
) as any as S.Schema<CloudwatchMetricAction>;
export type AlarmName = string;
export type StateReason = string;
export type StateValue = string;
export interface CloudwatchAlarmAction {
  roleArn: string;
  alarmName: string;
  stateReason: string;
  stateValue: string;
}
const CloudwatchAlarmAction = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<CloudwatchAlarmAction>;
export type LogGroupName = string;
export interface CloudwatchLogsAction {
  roleArn: string;
  logGroupName: string;
  batchMode?: boolean;
}
const CloudwatchLogsAction = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<CloudwatchLogsAction>;
export type ElasticsearchEndpoint = string;
export type ElasticsearchIndex = string;
export type ElasticsearchType = string;
export type ElasticsearchId = string;
export interface ElasticsearchAction {
  roleArn: string;
  endpoint: string;
  index: string;
  type: string;
  id: string;
}
const ElasticsearchAction = /*@__PURE__*/ __L.at(__c22, 7) as any as S.Schema<ElasticsearchAction>;
export type SalesforceToken = string;
export type SalesforceEndpoint = string;
export interface SalesforceAction {
  token: string;
  url: string;
}
const SalesforceAction = /*@__PURE__*/ __L.at(__c23, 0) as any as S.Schema<SalesforceAction>;
export type ChannelName = string;
export interface IotAnalyticsAction {
  channelArn?: string;
  channelName?: string;
  batchMode?: boolean;
  roleArn?: string;
}
const IotAnalyticsAction = /*@__PURE__*/ __L.at(__c23, 1) as any as S.Schema<IotAnalyticsAction>;
export type InputName = string;
export type MessageId = string;
export interface IotEventsAction {
  inputName: string;
  messageId?: string;
  batchMode?: boolean;
  roleArn: string;
}
const IotEventsAction = /*@__PURE__*/ __L.at(__c23, 2) as any as S.Schema<IotEventsAction>;
export type AssetPropertyEntryId = string;
export type AssetId = string;
export type AssetPropertyId = string;
export type AssetPropertyAlias = string;
export type AssetPropertyStringValue = string;
export type AssetPropertyIntegerValue = string;
export type AssetPropertyDoubleValue = string;
export type AssetPropertyBooleanValue = string;
export type AssetPropertyVariant =
  | { stringValue: string; integerValue?: never; doubleValue?: never; booleanValue?: never }
  | { stringValue?: never; integerValue: string; doubleValue?: never; booleanValue?: never }
  | { stringValue?: never; integerValue?: never; doubleValue: string; booleanValue?: never }
  | { stringValue?: never; integerValue?: never; doubleValue?: never; booleanValue: string };
const AssetPropertyVariant = /*@__PURE__*/ __L.at(__c23, 3);
export type AssetPropertyTimeInSeconds = string;
export type AssetPropertyOffsetInNanos = string;
export interface AssetPropertyTimestamp {
  timeInSeconds: string;
  offsetInNanos?: string;
}
const AssetPropertyTimestamp = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<AssetPropertyTimestamp>;
export type AssetPropertyQuality = string;
export interface AssetPropertyValue {
  value: AssetPropertyVariant;
  timestamp: AssetPropertyTimestamp;
  quality?: string;
}
const AssetPropertyValue = /*@__PURE__*/ __L.at(__c23, 5) as any as S.Schema<AssetPropertyValue>;
export type AssetPropertyValueList = AssetPropertyValue[];
const AssetPropertyValueList = /*@__PURE__*/ __L.at(__c23, 6);
export interface PutAssetPropertyValueEntry {
  entryId?: string;
  assetId?: string;
  propertyId?: string;
  propertyAlias?: string;
  propertyValues: AssetPropertyValue[];
}
const PutAssetPropertyValueEntry = /*@__PURE__*/ __L.at(
  __c23,
  7,
) as any as S.Schema<PutAssetPropertyValueEntry>;
export type PutAssetPropertyValueEntryList = PutAssetPropertyValueEntry[];
const PutAssetPropertyValueEntryList = /*@__PURE__*/ __L.at(__c24, 0);
export interface IotSiteWiseAction {
  putAssetPropertyValueEntries: PutAssetPropertyValueEntry[];
  roleArn: string;
}
const IotSiteWiseAction = /*@__PURE__*/ __L.at(__c24, 1) as any as S.Schema<IotSiteWiseAction>;
export type ExecutionNamePrefix = string;
export type StateMachineName = string;
export interface StepFunctionsAction {
  executionNamePrefix?: string;
  stateMachineName: string;
  roleArn: string;
}
const StepFunctionsAction = /*@__PURE__*/ __L.at(__c24, 2) as any as S.Schema<StepFunctionsAction>;
export type TimestreamDatabaseName = string;
export type TimestreamTableName = string;
export type TimestreamDimensionName = string;
export type TimestreamDimensionValue = string;
export interface TimestreamDimension {
  name: string;
  value: string;
}
const TimestreamDimension = /*@__PURE__*/ __L.at(__c24, 3) as any as S.Schema<TimestreamDimension>;
export type TimestreamDimensionList = TimestreamDimension[];
const TimestreamDimensionList = /*@__PURE__*/ __L.at(__c24, 4);
export type TimestreamTimestampValue = string;
export type TimestreamTimestampUnit = string;
export interface TimestreamTimestamp {
  value: string;
  unit: string;
}
const TimestreamTimestamp = /*@__PURE__*/ __L.at(__c24, 5) as any as S.Schema<TimestreamTimestamp>;
export interface TimestreamAction {
  roleArn: string;
  databaseName: string;
  tableName: string;
  dimensions: TimestreamDimension[];
  timestamp?: TimestreamTimestamp;
}
const TimestreamAction = /*@__PURE__*/ __L.at(__c24, 6) as any as S.Schema<TimestreamAction>;
export type Url = string;
export type HeaderKey = string;
export type HeaderValue = string;
export interface HttpActionHeader {
  key: string;
  value: string;
}
export type HeaderList = HttpActionHeader[];
const HeaderList = UserProperties as any as S.Schema<HeaderList>;
export type SigningRegion = string;
export type ServiceName = string;
export interface SigV4Authorization {
  signingRegion: string;
  serviceName: string;
  roleArn: string;
}
const SigV4Authorization = /*@__PURE__*/ __L.at(__c24, 7) as any as S.Schema<SigV4Authorization>;
export interface HttpAuthorization {
  sigv4?: SigV4Authorization;
}
const HttpAuthorization = /*@__PURE__*/ __L.at(__c25, 0) as any as S.Schema<HttpAuthorization>;
export type EnableBatching = boolean;
export type MaxBatchOpenMs = number;
export type MaxBatchSize = number;
export type MaxBatchSizeBytes = number;
export type BatchAcrossTopics = boolean;
export interface BatchConfig {
  maxBatchOpenMs?: number;
  maxBatchSize?: number;
  maxBatchSizeBytes?: number;
  batchAcrossTopics?: boolean;
}
const BatchConfig = /*@__PURE__*/ __L.at(__c25, 1) as any as S.Schema<BatchConfig>;
export interface HttpAction {
  url: string;
  confirmationUrl?: string;
  headers?: HttpActionHeader[];
  auth?: HttpAuthorization;
  enableBatching?: boolean;
  batchConfig?: BatchConfig;
}
const HttpAction = /*@__PURE__*/ __L.at(__c25, 2) as any as S.Schema<HttpAction>;
export type ClientProperties = { [key: string]: string | undefined };
const ClientProperties = PublicKeyMap as any as S.Schema<ClientProperties>;
export type KafkaHeaderKey = string;
export type KafkaHeaderValue = string;
export interface KafkaActionHeader {
  key: string;
  value: string;
}
export type KafkaHeaders = KafkaActionHeader[];
const KafkaHeaders = UserProperties as any as S.Schema<KafkaHeaders>;
export interface KafkaAction {
  destinationArn: string;
  topic: string;
  key?: string;
  partition?: string;
  clientProperties: { [key: string]: string | undefined };
  headers?: KafkaActionHeader[];
}
const KafkaAction = /*@__PURE__*/ __L.at(__c25, 3) as any as S.Schema<KafkaAction>;
export interface OpenSearchAction {
  roleArn: string;
  endpoint: string;
  index: string;
  type: string;
  id: string;
}
const OpenSearchAction = ElasticsearchAction as any as S.Schema<OpenSearchAction>;
export interface LocationTimestamp {
  value: string;
  unit?: string;
}
const LocationTimestamp = /*@__PURE__*/ __L.at(__c25, 4) as any as S.Schema<LocationTimestamp>;
export interface LocationAction {
  roleArn: string;
  trackerName: string;
  deviceId: string;
  timestamp?: LocationTimestamp;
  latitude: string;
  longitude: string;
}
const LocationAction = /*@__PURE__*/ __L.at(__c25, 5) as any as S.Schema<LocationAction>;
export type InfluxDBDatabaseName = string;
export type InfluxDBTableName = string;
export type InfluxDBOrganization = string;
export type InfluxDBTagName = string;
export type InfluxDBTagValue = string;
export type InfluxDBTagMap = { [key: string]: string | undefined };
const InfluxDBTagMap = PublicKeyMap as any as S.Schema<InfluxDBTagMap>;
export type InfluxDBTimestampUnit = "s" | "ms" | "us" | "ns" | (string & {});
const InfluxDBTimestampUnit = S.String;

export type InfluxDBMaxBatchSize = number;
export type InfluxDBMaxBatchOpenMs = number;
export type InfluxDBMaxBatchSizeBytes = number;
export type InfluxDBBatchAcrossTopics = boolean;
export interface InfluxDBBatchConfig {
  maxBatchSize?: number;
  maxBatchOpenMs?: number;
  maxBatchSizeBytes?: number;
  batchAcrossTopics?: boolean;
}
const InfluxDBBatchConfig = /*@__PURE__*/ __L.at(__c25, 6) as any as S.Schema<InfluxDBBatchConfig>;
export interface InfluxDBAction {
  destinationArn: string;
  roleArn: string;
  databaseName: string;
  tableName: string;
  organization?: string;
  tags?: { [key: string]: string | undefined };
  timestampUnit?: InfluxDBTimestampUnit;
  batchConfig?: InfluxDBBatchConfig;
}
const InfluxDBAction = /*@__PURE__*/ __L.at(__c25, 7) as any as S.Schema<InfluxDBAction>;
export interface Action {
  dynamoDB?: DynamoDBAction;
  dynamoDBv2?: DynamoDBv2Action;
  lambda?: LambdaAction;
  sns?: SnsAction;
  sqs?: SqsAction;
  kinesis?: KinesisAction;
  republish?: RepublishAction;
  s3?: S3Action;
  firehose?: FirehoseAction;
  cloudwatchMetric?: CloudwatchMetricAction;
  cloudwatchAlarm?: CloudwatchAlarmAction;
  cloudwatchLogs?: CloudwatchLogsAction;
  elasticsearch?: ElasticsearchAction;
  salesforce?: SalesforceAction;
  iotAnalytics?: IotAnalyticsAction;
  iotEvents?: IotEventsAction;
  iotSiteWise?: IotSiteWiseAction;
  stepFunctions?: StepFunctionsAction;
  timestream?: TimestreamAction;
  http?: HttpAction;
  kafka?: KafkaAction;
  openSearch?: OpenSearchAction;
  location?: LocationAction;
  influxDB?: InfluxDBAction;
}
const Action = /*@__PURE__*/ __L.at(__c26, 0) as any as S.Schema<Action>;
export type ActionList = Action[];
const ActionList = /*@__PURE__*/ __L.at(__c26, 1);
export type IsDisabled = boolean;
export type AwsIotSqlVersion = string;
export interface TopicRulePayload {
  sql: string;
  description?: string;
  actions: Action[];
  ruleDisabled?: boolean;
  awsIotSqlVersion?: string;
  errorAction?: Action;
}
const TopicRulePayload = /*@__PURE__*/ __L.at(__c26, 2) as any as S.Schema<TopicRulePayload>;
export interface CreateTopicRuleRequest {
  ruleName: string;
  topicRulePayload: TopicRulePayload;
  tags?: string;
}
const CreateTopicRuleRequest = /*@__PURE__*/ __L.at(
  __c26,
  3,
) as any as S.Schema<CreateTopicRuleRequest>;
export interface CreateTopicRuleResponse {}
const CreateTopicRuleResponse =
  AddThingToBillingGroupResponse as any as S.Schema<CreateTopicRuleResponse>;
export interface HttpUrlDestinationConfiguration {
  confirmationUrl: string;
}
const HttpUrlDestinationConfiguration = /*@__PURE__*/ __L.at(
  __c26,
  4,
) as any as S.Schema<HttpUrlDestinationConfiguration>;
export type SubnetId = string;
export type SubnetIdList = string[];
const SubnetIdList = JobTargets as any as S.Schema<SubnetIdList>;
export type SecurityGroupId = string;
export type SecurityGroupList = string[];
const SecurityGroupList = JobTargets as any as S.Schema<SecurityGroupList>;
export type VpcId = string;
export interface VpcDestinationConfiguration {
  subnetIds: string[];
  securityGroups?: string[];
  vpcId: string;
  roleArn: string;
}
const VpcDestinationConfiguration = /*@__PURE__*/ __L.at(
  __c26,
  5,
) as any as S.Schema<VpcDestinationConfiguration>;
export type InfluxDBVersion = "V2" | "V3" | (string & {});
const InfluxDBVersion = S.String;

export type InfluxDBSecretId = string;
export type InfluxDBSecretType = "SecretString" | "SecretBinary" | (string & {});
const InfluxDBSecretType = S.String;

export type InfluxDBSecretKey = string;
export interface InfluxDBDestinationConfiguration {
  endpoint: string;
  influxDBVersion: InfluxDBVersion;
  secretId: string;
  secretType?: InfluxDBSecretType;
  secretKey?: string;
}
const InfluxDBDestinationConfiguration = /*@__PURE__*/ __L.at(
  __c26,
  6,
) as any as S.Schema<InfluxDBDestinationConfiguration>;
export interface TopicRuleDestinationConfiguration {
  httpUrlConfiguration?: HttpUrlDestinationConfiguration;
  vpcConfiguration?: VpcDestinationConfiguration;
  influxDBConfiguration?: InfluxDBDestinationConfiguration;
}
const TopicRuleDestinationConfiguration = /*@__PURE__*/ __L.at(
  __c26,
  7,
) as any as S.Schema<TopicRuleDestinationConfiguration>;
export interface CreateTopicRuleDestinationRequest {
  destinationConfiguration: TopicRuleDestinationConfiguration;
}
const CreateTopicRuleDestinationRequest = /*@__PURE__*/ __L.at(
  __c27,
  0,
) as any as S.Schema<CreateTopicRuleDestinationRequest>;
export type TopicRuleDestinationStatus =
  | "ENABLED"
  | "IN_PROGRESS"
  | "DISABLED"
  | "ERROR"
  | "DELETING"
  | (string & {});
const TopicRuleDestinationStatus = S.String;

export type CreatedAtDate = Date;
export type LastUpdatedAtDate = Date;
export interface HttpUrlDestinationProperties {
  confirmationUrl?: string;
}
const HttpUrlDestinationProperties = /*@__PURE__*/ __L.at(
  __c27,
  1,
) as any as S.Schema<HttpUrlDestinationProperties>;
export interface VpcDestinationProperties {
  subnetIds?: string[];
  securityGroups?: string[];
  vpcId?: string;
  roleArn?: string;
}
const VpcDestinationProperties = /*@__PURE__*/ __L.at(
  __c27,
  2,
) as any as S.Schema<VpcDestinationProperties>;
export interface InfluxDBDestinationProperties {
  endpoint?: string;
  influxDBVersion?: InfluxDBVersion;
  secretId?: string;
  secretType?: InfluxDBSecretType;
  secretKey?: string;
}
const InfluxDBDestinationProperties = /*@__PURE__*/ __L.at(
  __c27,
  3,
) as any as S.Schema<InfluxDBDestinationProperties>;
export interface TopicRuleDestination {
  arn?: string;
  status?: TopicRuleDestinationStatus;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  statusReason?: string;
  httpUrlProperties?: HttpUrlDestinationProperties;
  vpcProperties?: VpcDestinationProperties;
  influxDBProperties?: InfluxDBDestinationProperties;
}
const TopicRuleDestination = /*@__PURE__*/ __L.at(
  __c27,
  4,
) as any as S.Schema<TopicRuleDestination>;
export interface CreateTopicRuleDestinationResponse {
  topicRuleDestination?: TopicRuleDestination;
}
const CreateTopicRuleDestinationResponse = /*@__PURE__*/ __L.at(
  __c27,
  5,
) as any as S.Schema<CreateTopicRuleDestinationResponse>;
export type DeleteScheduledAudits = boolean;
export interface DeleteAccountAuditConfigurationRequest {
  deleteScheduledAudits?: boolean;
}
const DeleteAccountAuditConfigurationRequest = /*@__PURE__*/ __L.at(
  __c27,
  6,
) as any as S.Schema<DeleteAccountAuditConfigurationRequest>;
export interface DeleteAccountAuditConfigurationResponse {}
const DeleteAccountAuditConfigurationResponse =
  AcceptCertificateTransferResponse as any as S.Schema<DeleteAccountAuditConfigurationResponse>;
export interface DeleteAuditSuppressionRequest {
  checkName: string;
  resourceIdentifier: ResourceIdentifier;
}
const DeleteAuditSuppressionRequest = /*@__PURE__*/ __L.at(
  __c27,
  7,
) as any as S.Schema<DeleteAuditSuppressionRequest>;
export interface DeleteAuditSuppressionResponse {}
const DeleteAuditSuppressionResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeleteAuditSuppressionResponse>;
export interface DeleteAuthorizerRequest {
  authorizerName: string;
}
const DeleteAuthorizerRequest = /*@__PURE__*/ __L.at(
  __c28,
  0,
) as any as S.Schema<DeleteAuthorizerRequest>;
export interface DeleteAuthorizerResponse {}
const DeleteAuthorizerResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeleteAuthorizerResponse>;
export type OptionalVersion = number;
export interface DeleteBillingGroupRequest {
  billingGroupName: string;
  expectedVersion?: number;
}
const DeleteBillingGroupRequest = /*@__PURE__*/ __L.at(
  __c28,
  1,
) as any as S.Schema<DeleteBillingGroupRequest>;
export interface DeleteBillingGroupResponse {}
const DeleteBillingGroupResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeleteBillingGroupResponse>;
export interface DeleteCACertificateRequest {
  certificateId: string;
}
const DeleteCACertificateRequest = /*@__PURE__*/ __L.at(
  __c28,
  2,
) as any as S.Schema<DeleteCACertificateRequest>;
export interface DeleteCACertificateResponse {}
const DeleteCACertificateResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeleteCACertificateResponse>;
export type ForceDelete = boolean;
export interface DeleteCertificateRequest {
  certificateId: string;
  forceDelete?: boolean;
}
const DeleteCertificateRequest = /*@__PURE__*/ __L.at(
  __c28,
  3,
) as any as S.Schema<DeleteCertificateRequest>;
export interface DeleteCertificateResponse {}
const DeleteCertificateResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeleteCertificateResponse>;
export interface DeleteCertificateProviderRequest {
  certificateProviderName: string;
}
const DeleteCertificateProviderRequest = /*@__PURE__*/ __L.at(
  __c28,
  4,
) as any as S.Schema<DeleteCertificateProviderRequest>;
export interface DeleteCertificateProviderResponse {}
const DeleteCertificateProviderResponse =
  AcceptCertificateTransferResponse as any as S.Schema<DeleteCertificateProviderResponse>;
export interface DeleteCommandRequest {
  commandId: string;
}
const DeleteCommandRequest = /*@__PURE__*/ __L.at(
  __c28,
  5,
) as any as S.Schema<DeleteCommandRequest>;
export type StatusCode = number;
export interface DeleteCommandResponse {
  statusCode?: number;
}
const DeleteCommandResponse = /*@__PURE__*/ __L.at(
  __c28,
  6,
) as any as S.Schema<DeleteCommandResponse>;
export type CommandExecutionId = string;
export interface DeleteCommandExecutionRequest {
  executionId: string;
  targetArn: string;
}
const DeleteCommandExecutionRequest = /*@__PURE__*/ __L.at(
  __c28,
  7,
) as any as S.Schema<DeleteCommandExecutionRequest>;
export interface DeleteCommandExecutionResponse {}
const DeleteCommandExecutionResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeleteCommandExecutionResponse>;
export interface DeleteCustomMetricRequest {
  metricName: string;
}
const DeleteCustomMetricRequest = /*@__PURE__*/ __L.at(
  __c29,
  0,
) as any as S.Schema<DeleteCustomMetricRequest>;
export interface DeleteCustomMetricResponse {}
const DeleteCustomMetricResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeleteCustomMetricResponse>;
export interface DeleteDimensionRequest {
  name: string;
}
const DeleteDimensionRequest = /*@__PURE__*/ __L.at(
  __c29,
  1,
) as any as S.Schema<DeleteDimensionRequest>;
export interface DeleteDimensionResponse {}
const DeleteDimensionResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeleteDimensionResponse>;
export interface DeleteDomainConfigurationRequest {
  domainConfigurationName: string;
}
const DeleteDomainConfigurationRequest = /*@__PURE__*/ __L.at(
  __c29,
  2,
) as any as S.Schema<DeleteDomainConfigurationRequest>;
export interface DeleteDomainConfigurationResponse {}
const DeleteDomainConfigurationResponse =
  AcceptCertificateTransferResponse as any as S.Schema<DeleteDomainConfigurationResponse>;
export interface DeleteDynamicThingGroupRequest {
  thingGroupName: string;
  expectedVersion?: number;
}
const DeleteDynamicThingGroupRequest = /*@__PURE__*/ __L.at(
  __c29,
  3,
) as any as S.Schema<DeleteDynamicThingGroupRequest>;
export interface DeleteDynamicThingGroupResponse {}
const DeleteDynamicThingGroupResponse = /*@__PURE__*/ __L.at(
  __c29,
  4,
) as any as S.Schema<DeleteDynamicThingGroupResponse>;
export interface DeleteFleetMetricRequest {
  metricName: string;
  expectedVersion?: number;
}
const DeleteFleetMetricRequest = /*@__PURE__*/ __L.at(
  __c29,
  5,
) as any as S.Schema<DeleteFleetMetricRequest>;
export interface DeleteFleetMetricResponse {}
const DeleteFleetMetricResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeleteFleetMetricResponse>;
export interface DeleteJobRequest {
  jobId: string;
  force?: boolean;
  namespaceId?: string;
}
const DeleteJobRequest = /*@__PURE__*/ __L.at(__c29, 6) as any as S.Schema<DeleteJobRequest>;
export interface DeleteJobResponse {}
const DeleteJobResponse = AddThingToBillingGroupResponse as any as S.Schema<DeleteJobResponse>;
export type ExecutionNumber = number;
export interface DeleteJobExecutionRequest {
  jobId: string;
  thingName: string;
  executionNumber: number;
  force?: boolean;
  namespaceId?: string;
}
const DeleteJobExecutionRequest = /*@__PURE__*/ __L.at(
  __c29,
  7,
) as any as S.Schema<DeleteJobExecutionRequest>;
export interface DeleteJobExecutionResponse {}
const DeleteJobExecutionResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeleteJobExecutionResponse>;
export interface DeleteJobTemplateRequest {
  jobTemplateId: string;
}
const DeleteJobTemplateRequest = /*@__PURE__*/ __L.at(
  __c30,
  0,
) as any as S.Schema<DeleteJobTemplateRequest>;
export interface DeleteJobTemplateResponse {}
const DeleteJobTemplateResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeleteJobTemplateResponse>;
export interface DeleteMitigationActionRequest {
  actionName: string;
}
const DeleteMitigationActionRequest = /*@__PURE__*/ __L.at(
  __c30,
  1,
) as any as S.Schema<DeleteMitigationActionRequest>;
export interface DeleteMitigationActionResponse {}
const DeleteMitigationActionResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeleteMitigationActionResponse>;
export type DeleteStream_ = boolean;
export type ForceDeleteAWSJob = boolean;
export interface DeleteOTAUpdateRequest {
  otaUpdateId: string;
  deleteStream?: boolean;
  forceDeleteAWSJob?: boolean;
}
const DeleteOTAUpdateRequest = /*@__PURE__*/ __L.at(
  __c30,
  2,
) as any as S.Schema<DeleteOTAUpdateRequest>;
export interface DeleteOTAUpdateResponse {}
const DeleteOTAUpdateResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeleteOTAUpdateResponse>;
export interface DeletePackageRequest {
  packageName: string;
  clientToken?: string;
}
const DeletePackageRequest = /*@__PURE__*/ __L.at(
  __c30,
  3,
) as any as S.Schema<DeletePackageRequest>;
export interface DeletePackageResponse {}
const DeletePackageResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeletePackageResponse>;
export interface DeletePackageVersionRequest {
  packageName: string;
  versionName: string;
  clientToken?: string;
}
const DeletePackageVersionRequest = /*@__PURE__*/ __L.at(
  __c30,
  4,
) as any as S.Schema<DeletePackageVersionRequest>;
export interface DeletePackageVersionResponse {}
const DeletePackageVersionResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeletePackageVersionResponse>;
export interface DeletePolicyRequest {
  policyName: string;
}
const DeletePolicyRequest = /*@__PURE__*/ __L.at(__c30, 5) as any as S.Schema<DeletePolicyRequest>;
export interface DeletePolicyResponse {}
const DeletePolicyResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeletePolicyResponse>;
export interface DeletePolicyVersionRequest {
  policyName: string;
  policyVersionId: string;
}
const DeletePolicyVersionRequest = /*@__PURE__*/ __L.at(
  __c30,
  6,
) as any as S.Schema<DeletePolicyVersionRequest>;
export interface DeletePolicyVersionResponse {}
const DeletePolicyVersionResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeletePolicyVersionResponse>;
export interface DeleteProvisioningTemplateRequest {
  templateName: string;
}
const DeleteProvisioningTemplateRequest = /*@__PURE__*/ __L.at(
  __c30,
  7,
) as any as S.Schema<DeleteProvisioningTemplateRequest>;
export interface DeleteProvisioningTemplateResponse {}
const DeleteProvisioningTemplateResponse =
  AcceptCertificateTransferResponse as any as S.Schema<DeleteProvisioningTemplateResponse>;
export interface DeleteProvisioningTemplateVersionRequest {
  templateName: string;
  versionId: number;
}
const DeleteProvisioningTemplateVersionRequest = /*@__PURE__*/ __L.at(
  __c31,
  0,
) as any as S.Schema<DeleteProvisioningTemplateVersionRequest>;
export interface DeleteProvisioningTemplateVersionResponse {}
const DeleteProvisioningTemplateVersionResponse =
  AcceptCertificateTransferResponse as any as S.Schema<DeleteProvisioningTemplateVersionResponse>;
export interface DeleteRegistrationCodeRequest {}
const DeleteRegistrationCodeRequest = /*@__PURE__*/ __L.at(
  __c31,
  1,
) as any as S.Schema<DeleteRegistrationCodeRequest>;
export interface DeleteRegistrationCodeResponse {}
const DeleteRegistrationCodeResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeleteRegistrationCodeResponse>;
export interface DeleteRoleAliasRequest {
  roleAlias: string;
}
const DeleteRoleAliasRequest = /*@__PURE__*/ __L.at(
  __c31,
  2,
) as any as S.Schema<DeleteRoleAliasRequest>;
export interface DeleteRoleAliasResponse {}
const DeleteRoleAliasResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeleteRoleAliasResponse>;
export interface DeleteScheduledAuditRequest {
  scheduledAuditName: string;
}
const DeleteScheduledAuditRequest = /*@__PURE__*/ __L.at(
  __c31,
  3,
) as any as S.Schema<DeleteScheduledAuditRequest>;
export interface DeleteScheduledAuditResponse {}
const DeleteScheduledAuditResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeleteScheduledAuditResponse>;
export interface DeleteSecurityProfileRequest {
  securityProfileName: string;
  expectedVersion?: number;
}
const DeleteSecurityProfileRequest = /*@__PURE__*/ __L.at(
  __c31,
  4,
) as any as S.Schema<DeleteSecurityProfileRequest>;
export interface DeleteSecurityProfileResponse {}
const DeleteSecurityProfileResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeleteSecurityProfileResponse>;
export interface DeleteStreamRequest {
  streamId: string;
}
const DeleteStreamRequest = /*@__PURE__*/ __L.at(__c31, 5) as any as S.Schema<DeleteStreamRequest>;
export interface DeleteStreamResponse {}
const DeleteStreamResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeleteStreamResponse>;
export interface DeleteThingRequest {
  thingName: string;
  expectedVersion?: number;
}
const DeleteThingRequest = /*@__PURE__*/ __L.at(__c31, 6) as any as S.Schema<DeleteThingRequest>;
export interface DeleteThingResponse {}
const DeleteThingResponse = AddThingToBillingGroupResponse as any as S.Schema<DeleteThingResponse>;
export interface DeleteThingGroupRequest {
  thingGroupName: string;
  expectedVersion?: number;
}
const DeleteThingGroupRequest = /*@__PURE__*/ __L.at(
  __c31,
  7,
) as any as S.Schema<DeleteThingGroupRequest>;
export interface DeleteThingGroupResponse {}
const DeleteThingGroupResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeleteThingGroupResponse>;
export interface DeleteThingTypeRequest {
  thingTypeName: string;
}
const DeleteThingTypeRequest = /*@__PURE__*/ __L.at(
  __c32,
  0,
) as any as S.Schema<DeleteThingTypeRequest>;
export interface DeleteThingTypeResponse {}
const DeleteThingTypeResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeleteThingTypeResponse>;
export interface DeleteTopicRuleRequest {
  ruleName: string;
}
const DeleteTopicRuleRequest = /*@__PURE__*/ __L.at(
  __c32,
  1,
) as any as S.Schema<DeleteTopicRuleRequest>;
export interface DeleteTopicRuleResponse {}
const DeleteTopicRuleResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeleteTopicRuleResponse>;
export interface DeleteTopicRuleDestinationRequest {
  arn: string;
}
const DeleteTopicRuleDestinationRequest = /*@__PURE__*/ __L.at(
  __c32,
  2,
) as any as S.Schema<DeleteTopicRuleDestinationRequest>;
export interface DeleteTopicRuleDestinationResponse {}
const DeleteTopicRuleDestinationResponse =
  AcceptCertificateTransferResponse as any as S.Schema<DeleteTopicRuleDestinationResponse>;
export type LogTargetType =
  | "DEFAULT"
  | "THING_GROUP"
  | "CLIENT_ID"
  | "SOURCE_IP"
  | "PRINCIPAL_ID"
  | (string & {});
const LogTargetType = S.String;

export type LogTargetName = string;
export interface DeleteV2LoggingLevelRequest {
  targetType: LogTargetType;
  targetName: string;
}
const DeleteV2LoggingLevelRequest = /*@__PURE__*/ __L.at(
  __c32,
  3,
) as any as S.Schema<DeleteV2LoggingLevelRequest>;
export interface DeleteV2LoggingLevelResponse {}
const DeleteV2LoggingLevelResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeleteV2LoggingLevelResponse>;
export type UndoDeprecate = boolean;
export interface DeprecateThingTypeRequest {
  thingTypeName: string;
  undoDeprecate?: boolean;
}
const DeprecateThingTypeRequest = /*@__PURE__*/ __L.at(
  __c32,
  4,
) as any as S.Schema<DeprecateThingTypeRequest>;
export interface DeprecateThingTypeResponse {}
const DeprecateThingTypeResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DeprecateThingTypeResponse>;
export interface DescribeAccountAuditConfigurationRequest {}
const DescribeAccountAuditConfigurationRequest = /*@__PURE__*/ __L.at(
  __c32,
  5,
) as any as S.Schema<DescribeAccountAuditConfigurationRequest>;
export type AuditNotificationType = "SNS" | (string & {});
const AuditNotificationType = S.String;

export type Enabled = boolean;
export interface AuditNotificationTarget {
  targetArn?: string;
  roleArn?: string;
  enabled?: boolean;
}
const AuditNotificationTarget = /*@__PURE__*/ __L.at(
  __c32,
  6,
) as any as S.Schema<AuditNotificationTarget>;
export type AuditNotificationTargetConfigurations = {
  [key in AuditNotificationType]?: AuditNotificationTarget;
};
const AuditNotificationTargetConfigurations = /*@__PURE__*/ __L.at(__c32, 7);
export type ConfigName =
  | "CERT_AGE_THRESHOLD_IN_DAYS"
  | "CERT_EXPIRATION_THRESHOLD_IN_DAYS"
  | (string & {});
const ConfigName = S.String;

export type ConfigValue = string;
export type CheckCustomConfiguration = { [key in ConfigName]?: string };
const CheckCustomConfiguration = /*@__PURE__*/ __L.at(__c33, 0);
export interface AuditCheckConfiguration {
  enabled?: boolean;
  configuration?: { [key: string]: string | undefined };
}
const AuditCheckConfiguration = /*@__PURE__*/ __L.at(
  __c33,
  1,
) as any as S.Schema<AuditCheckConfiguration>;
export type AuditCheckConfigurations = { [key: string]: AuditCheckConfiguration | undefined };
const AuditCheckConfigurations = /*@__PURE__*/ __L.at(__c33, 2);
export interface DescribeAccountAuditConfigurationResponse {
  roleArn?: string;
  auditNotificationTargetConfigurations?: { [key: string]: AuditNotificationTarget | undefined };
  auditCheckConfigurations?: { [key: string]: AuditCheckConfiguration | undefined };
}
const DescribeAccountAuditConfigurationResponse = /*@__PURE__*/ __L.at(
  __c33,
  3,
) as any as S.Schema<DescribeAccountAuditConfigurationResponse>;
export type FindingId = string;
export interface DescribeAuditFindingRequest {
  findingId: string;
}
const DescribeAuditFindingRequest = /*@__PURE__*/ __L.at(
  __c33,
  4,
) as any as S.Schema<DescribeAuditFindingRequest>;
export type AuditFindingSeverity = "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | (string & {});
const AuditFindingSeverity = S.String;

export type ResourceType =
  | "DEVICE_CERTIFICATE"
  | "CA_CERTIFICATE"
  | "IOT_POLICY"
  | "COGNITO_IDENTITY_POOL"
  | "CLIENT_ID"
  | "ACCOUNT_SETTINGS"
  | "ROLE_ALIAS"
  | "IAM_ROLE"
  | "ISSUER_CERTIFICATE"
  | (string & {});
const ResourceType = S.String;

export type StringMap = { [key: string]: string | undefined };
const StringMap = DetailsMap as any as S.Schema<StringMap>;
export interface NonCompliantResource {
  resourceType?: ResourceType;
  resourceIdentifier?: ResourceIdentifier;
  additionalInfo?: { [key: string]: string | undefined };
}
const NonCompliantResource = /*@__PURE__*/ __L.at(
  __c33,
  5,
) as any as S.Schema<NonCompliantResource>;
export interface RelatedResource {
  resourceType?: ResourceType;
  resourceIdentifier?: ResourceIdentifier;
  additionalInfo?: { [key: string]: string | undefined };
}
const RelatedResource = NonCompliantResource as any as S.Schema<RelatedResource>;
export type RelatedResources = RelatedResource[];
const RelatedResources = /*@__PURE__*/ __L.at(__c33, 6);
export type ReasonForNonCompliance = string;
export type ReasonForNonComplianceCode = string;
export type IsSuppressed = boolean;
export interface AuditFinding {
  findingId?: string;
  taskId?: string;
  checkName?: string;
  taskStartTime?: Date;
  findingTime?: Date;
  severity?: AuditFindingSeverity;
  nonCompliantResource?: NonCompliantResource;
  relatedResources?: RelatedResource[];
  reasonForNonCompliance?: string;
  reasonForNonComplianceCode?: string;
  isSuppressed?: boolean;
}
const AuditFinding = /*@__PURE__*/ __L.at(__c33, 7) as any as S.Schema<AuditFinding>;
export interface DescribeAuditFindingResponse {
  finding?: AuditFinding;
}
const DescribeAuditFindingResponse = /*@__PURE__*/ __L.at(
  __c34,
  0,
) as any as S.Schema<DescribeAuditFindingResponse>;
export interface DescribeAuditMitigationActionsTaskRequest {
  taskId: string;
}
const DescribeAuditMitigationActionsTaskRequest = /*@__PURE__*/ __L.at(
  __c34,
  1,
) as any as S.Schema<DescribeAuditMitigationActionsTaskRequest>;
export type AuditMitigationActionsTaskStatus =
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED"
  | "CANCELED"
  | (string & {});
const AuditMitigationActionsTaskStatus = S.String;

export type TotalFindingsCount = number;
export type FailedFindingsCount = number;
export type SucceededFindingsCount = number;
export type SkippedFindingsCount = number;
export type CanceledFindingsCount = number;
export interface TaskStatisticsForAuditCheck {
  totalFindingsCount?: number;
  failedFindingsCount?: number;
  succeededFindingsCount?: number;
  skippedFindingsCount?: number;
  canceledFindingsCount?: number;
}
const TaskStatisticsForAuditCheck = /*@__PURE__*/ __L.at(
  __c34,
  2,
) as any as S.Schema<TaskStatisticsForAuditCheck>;
export type AuditMitigationActionsTaskStatistics = {
  [key: string]: TaskStatisticsForAuditCheck | undefined;
};
const AuditMitigationActionsTaskStatistics = /*@__PURE__*/ __L.at(__c34, 3);
export type FindingIds = string[];
const FindingIds = JobTargets as any as S.Schema<FindingIds>;
export type ReasonForNonComplianceCodes = string[];
const ReasonForNonComplianceCodes = JobTargets as any as S.Schema<ReasonForNonComplianceCodes>;
export type AuditCheckToReasonCodeFilter = { [key: string]: string[] | undefined };
const AuditCheckToReasonCodeFilter = /*@__PURE__*/ __L.at(__c34, 4);
export interface AuditMitigationActionsTaskTarget {
  auditTaskId?: string;
  findingIds?: string[];
  auditCheckToReasonCodeFilter?: { [key: string]: string[] | undefined };
}
const AuditMitigationActionsTaskTarget = /*@__PURE__*/ __L.at(
  __c34,
  5,
) as any as S.Schema<AuditMitigationActionsTaskTarget>;
export type MitigationActionNameList = string[];
export type AuditCheckToActionsMapping = { [key: string]: string[] | undefined };
const AuditCheckToActionsMapping =
  AuditCheckToReasonCodeFilter as any as S.Schema<AuditCheckToActionsMapping>;
export interface MitigationAction {
  name?: string;
  id?: string;
  roleArn?: string;
  actionParams?: MitigationActionParams;
}
const MitigationAction = /*@__PURE__*/ __L.at(__c34, 6) as any as S.Schema<MitigationAction>;
export type MitigationActionList = MitigationAction[];
const MitigationActionList = /*@__PURE__*/ __L.at(__c34, 7);
export interface DescribeAuditMitigationActionsTaskResponse {
  taskStatus?: AuditMitigationActionsTaskStatus;
  startTime?: Date;
  endTime?: Date;
  taskStatistics?: { [key: string]: TaskStatisticsForAuditCheck | undefined };
  target?: AuditMitigationActionsTaskTarget;
  auditCheckToActionsMapping?: { [key: string]: string[] | undefined };
  actionsDefinition?: MitigationAction[];
}
const DescribeAuditMitigationActionsTaskResponse = /*@__PURE__*/ __L.at(
  __c35,
  0,
) as any as S.Schema<DescribeAuditMitigationActionsTaskResponse>;
export interface DescribeAuditSuppressionRequest {
  checkName: string;
  resourceIdentifier: ResourceIdentifier;
}
const DescribeAuditSuppressionRequest = /*@__PURE__*/ __L.at(
  __c35,
  1,
) as any as S.Schema<DescribeAuditSuppressionRequest>;
export interface DescribeAuditSuppressionResponse {
  checkName?: string;
  resourceIdentifier?: ResourceIdentifier;
  expirationDate?: Date;
  suppressIndefinitely?: boolean;
  description?: string;
}
const DescribeAuditSuppressionResponse = /*@__PURE__*/ __L.at(
  __c35,
  2,
) as any as S.Schema<DescribeAuditSuppressionResponse>;
export interface DescribeAuditTaskRequest {
  taskId: string;
}
const DescribeAuditTaskRequest = /*@__PURE__*/ __L.at(
  __c35,
  3,
) as any as S.Schema<DescribeAuditTaskRequest>;
export type AuditTaskStatus = "IN_PROGRESS" | "COMPLETED" | "FAILED" | "CANCELED" | (string & {});
const AuditTaskStatus = S.String;

export type AuditTaskType = "ON_DEMAND_AUDIT_TASK" | "SCHEDULED_AUDIT_TASK" | (string & {});
const AuditTaskType = S.String;

export type TotalChecksCount = number;
export type InProgressChecksCount = number;
export type WaitingForDataCollectionChecksCount = number;
export type CompliantChecksCount = number;
export type NonCompliantChecksCount = number;
export type FailedChecksCount = number;
export type CanceledChecksCount = number;
export interface TaskStatistics {
  totalChecks?: number;
  inProgressChecks?: number;
  waitingForDataCollectionChecks?: number;
  compliantChecks?: number;
  nonCompliantChecks?: number;
  failedChecks?: number;
  canceledChecks?: number;
}
const TaskStatistics = /*@__PURE__*/ __L.at(__c35, 4) as any as S.Schema<TaskStatistics>;
export type AuditCheckRunStatus =
  | "IN_PROGRESS"
  | "WAITING_FOR_DATA_COLLECTION"
  | "CANCELED"
  | "COMPLETED_COMPLIANT"
  | "COMPLETED_NON_COMPLIANT"
  | "FAILED"
  | (string & {});
const AuditCheckRunStatus = S.String;

export type CheckCompliant = boolean;
export type TotalResourcesCount = number;
export type NonCompliantResourcesCount = number;
export type SuppressedNonCompliantResourcesCount = number;
export type ErrorCode = string;
export type ErrorMessage = string;
export interface AuditCheckDetails {
  checkRunStatus?: AuditCheckRunStatus;
  checkCompliant?: boolean;
  totalResourcesCount?: number;
  nonCompliantResourcesCount?: number;
  suppressedNonCompliantResourcesCount?: number;
  errorCode?: string;
  message?: string;
}
const AuditCheckDetails = /*@__PURE__*/ __L.at(__c35, 5) as any as S.Schema<AuditCheckDetails>;
export type AuditDetails = { [key: string]: AuditCheckDetails | undefined };
const AuditDetails = /*@__PURE__*/ __L.at(__c35, 6);
export interface DescribeAuditTaskResponse {
  taskStatus?: AuditTaskStatus;
  taskType?: AuditTaskType;
  taskStartTime?: Date;
  taskStatistics?: TaskStatistics;
  scheduledAuditName?: string;
  auditDetails?: { [key: string]: AuditCheckDetails | undefined };
}
const DescribeAuditTaskResponse = /*@__PURE__*/ __L.at(
  __c35,
  7,
) as any as S.Schema<DescribeAuditTaskResponse>;
export interface DescribeAuthorizerRequest {
  authorizerName: string;
}
const DescribeAuthorizerRequest = /*@__PURE__*/ __L.at(
  __c36,
  0,
) as any as S.Schema<DescribeAuthorizerRequest>;
export interface AuthorizerDescription {
  authorizerName?: string;
  authorizerArn?: string;
  authorizerFunctionArn?: string;
  tokenKeyName?: string;
  tokenSigningPublicKeys?: { [key: string]: string | undefined };
  status?: AuthorizerStatus;
  creationDate?: Date;
  lastModifiedDate?: Date;
  signingDisabled?: boolean;
  enableCachingForHttp?: boolean;
}
const AuthorizerDescription = /*@__PURE__*/ __L.at(
  __c36,
  1,
) as any as S.Schema<AuthorizerDescription>;
export interface DescribeAuthorizerResponse {
  authorizerDescription?: AuthorizerDescription;
}
const DescribeAuthorizerResponse = /*@__PURE__*/ __L.at(
  __c36,
  2,
) as any as S.Schema<DescribeAuthorizerResponse>;
export interface DescribeBillingGroupRequest {
  billingGroupName: string;
}
const DescribeBillingGroupRequest = /*@__PURE__*/ __L.at(
  __c36,
  3,
) as any as S.Schema<DescribeBillingGroupRequest>;
export type Version = number;
export type CreationDate = Date;
export interface BillingGroupMetadata {
  creationDate?: Date;
}
const BillingGroupMetadata = /*@__PURE__*/ __L.at(
  __c36,
  4,
) as any as S.Schema<BillingGroupMetadata>;
export interface DescribeBillingGroupResponse {
  billingGroupName?: string;
  billingGroupId?: string;
  billingGroupArn?: string;
  version?: number;
  billingGroupProperties?: BillingGroupProperties;
  billingGroupMetadata?: BillingGroupMetadata;
}
const DescribeBillingGroupResponse = /*@__PURE__*/ __L.at(
  __c36,
  5,
) as any as S.Schema<DescribeBillingGroupResponse>;
export interface DescribeCACertificateRequest {
  certificateId: string;
}
const DescribeCACertificateRequest = /*@__PURE__*/ __L.at(
  __c36,
  6,
) as any as S.Schema<DescribeCACertificateRequest>;
export type CACertificateStatus = "ACTIVE" | "INACTIVE" | (string & {});
const CACertificateStatus = S.String;

export type AutoRegistrationStatus = "ENABLE" | "DISABLE" | (string & {});
const AutoRegistrationStatus = S.String;

export type CustomerVersion = number;
export type GenerationId = string;
export interface CertificateValidity {
  notBefore?: Date;
  notAfter?: Date;
}
const CertificateValidity = /*@__PURE__*/ __L.at(__c36, 7) as any as S.Schema<CertificateValidity>;
export type CertificateMode = "DEFAULT" | "SNI_ONLY" | (string & {});
const CertificateMode = S.String;

export interface CACertificateDescription {
  certificateArn?: string;
  certificateId?: string;
  status?: CACertificateStatus;
  certificatePem?: string;
  ownedBy?: string;
  creationDate?: Date;
  autoRegistrationStatus?: AutoRegistrationStatus;
  lastModifiedDate?: Date;
  customerVersion?: number;
  generationId?: string;
  validity?: CertificateValidity;
  certificateMode?: CertificateMode;
}
const CACertificateDescription = /*@__PURE__*/ __L.at(
  __c37,
  0,
) as any as S.Schema<CACertificateDescription>;
export interface RegistrationConfig {
  templateBody?: string;
  roleArn?: string;
  templateName?: string;
}
const RegistrationConfig = /*@__PURE__*/ __L.at(__c37, 1) as any as S.Schema<RegistrationConfig>;
export interface DescribeCACertificateResponse {
  certificateDescription?: CACertificateDescription;
  registrationConfig?: RegistrationConfig;
}
const DescribeCACertificateResponse = /*@__PURE__*/ __L.at(
  __c37,
  2,
) as any as S.Schema<DescribeCACertificateResponse>;
export interface DescribeCertificateRequest {
  certificateId: string;
}
const DescribeCertificateRequest = /*@__PURE__*/ __L.at(
  __c37,
  3,
) as any as S.Schema<DescribeCertificateRequest>;
export type CertificateStatus =
  | "ACTIVE"
  | "INACTIVE"
  | "REVOKED"
  | "PENDING_TRANSFER"
  | "REGISTER_INACTIVE"
  | "PENDING_ACTIVATION"
  | (string & {});
const CertificateStatus = S.String;

export type Message = string;
export interface TransferData {
  transferMessage?: string;
  rejectReason?: string;
  transferDate?: Date;
  acceptDate?: Date;
  rejectDate?: Date;
}
const TransferData = /*@__PURE__*/ __L.at(__c37, 4) as any as S.Schema<TransferData>;
export interface CertificateDescription {
  certificateArn?: string;
  certificateId?: string;
  caCertificateId?: string;
  status?: CertificateStatus;
  certificatePem?: string;
  ownedBy?: string;
  previousOwnedBy?: string;
  creationDate?: Date;
  lastModifiedDate?: Date;
  customerVersion?: number;
  transferData?: TransferData;
  generationId?: string;
  validity?: CertificateValidity;
  certificateMode?: CertificateMode;
}
const CertificateDescription = /*@__PURE__*/ __L.at(
  __c37,
  5,
) as any as S.Schema<CertificateDescription>;
export interface DescribeCertificateResponse {
  certificateDescription?: CertificateDescription;
}
const DescribeCertificateResponse = /*@__PURE__*/ __L.at(
  __c37,
  6,
) as any as S.Schema<DescribeCertificateResponse>;
export interface DescribeCertificateProviderRequest {
  certificateProviderName: string;
}
const DescribeCertificateProviderRequest = /*@__PURE__*/ __L.at(
  __c37,
  7,
) as any as S.Schema<DescribeCertificateProviderRequest>;
export interface DescribeCertificateProviderResponse {
  certificateProviderName?: string;
  certificateProviderArn?: string;
  lambdaFunctionArn?: string;
  accountDefaultForOperations?: CertificateProviderOperation[];
  creationDate?: Date;
  lastModifiedDate?: Date;
}
const DescribeCertificateProviderResponse = /*@__PURE__*/ __L.at(
  __c38,
  0,
) as any as S.Schema<DescribeCertificateProviderResponse>;
export interface DescribeCustomMetricRequest {
  metricName: string;
}
const DescribeCustomMetricRequest = /*@__PURE__*/ __L.at(
  __c38,
  1,
) as any as S.Schema<DescribeCustomMetricRequest>;
export interface DescribeCustomMetricResponse {
  metricName?: string;
  metricArn?: string;
  metricType?: CustomMetricType;
  displayName?: string;
  creationDate?: Date;
  lastModifiedDate?: Date;
}
const DescribeCustomMetricResponse = /*@__PURE__*/ __L.at(
  __c38,
  2,
) as any as S.Schema<DescribeCustomMetricResponse>;
export interface DescribeDefaultAuthorizerRequest {}
const DescribeDefaultAuthorizerRequest = /*@__PURE__*/ __L.at(
  __c38,
  3,
) as any as S.Schema<DescribeDefaultAuthorizerRequest>;
export interface DescribeDefaultAuthorizerResponse {
  authorizerDescription?: AuthorizerDescription;
}
const DescribeDefaultAuthorizerResponse =
  DescribeAuthorizerResponse as any as S.Schema<DescribeDefaultAuthorizerResponse>;
export interface DescribeDetectMitigationActionsTaskRequest {
  taskId: string;
}
const DescribeDetectMitigationActionsTaskRequest = /*@__PURE__*/ __L.at(
  __c38,
  4,
) as any as S.Schema<DescribeDetectMitigationActionsTaskRequest>;
export type DetectMitigationActionsTaskStatus =
  | "IN_PROGRESS"
  | "SUCCESSFUL"
  | "FAILED"
  | "CANCELED"
  | (string & {});
const DetectMitigationActionsTaskStatus = S.String;

export type ViolationId = string;
export type TargetViolationIdsForDetectMitigationActions = string[];
const TargetViolationIdsForDetectMitigationActions =
  JobTargets as any as S.Schema<TargetViolationIdsForDetectMitigationActions>;
export interface DetectMitigationActionsTaskTarget {
  violationIds?: string[];
  securityProfileName?: string;
  behaviorName?: string;
}
const DetectMitigationActionsTaskTarget = /*@__PURE__*/ __L.at(
  __c38,
  5,
) as any as S.Schema<DetectMitigationActionsTaskTarget>;
export interface ViolationEventOccurrenceRange {
  startTime: Date;
  endTime: Date;
}
const ViolationEventOccurrenceRange = /*@__PURE__*/ __L.at(
  __c38,
  6,
) as any as S.Schema<ViolationEventOccurrenceRange>;
export type PrimitiveBoolean = boolean;
export type GenericLongValue = number;
export interface DetectMitigationActionsTaskStatistics {
  actionsExecuted?: number;
  actionsSkipped?: number;
  actionsFailed?: number;
}
const DetectMitigationActionsTaskStatistics = /*@__PURE__*/ __L.at(
  __c38,
  7,
) as any as S.Schema<DetectMitigationActionsTaskStatistics>;
export interface DetectMitigationActionsTaskSummary {
  taskId?: string;
  taskStatus?: DetectMitigationActionsTaskStatus;
  taskStartTime?: Date;
  taskEndTime?: Date;
  target?: DetectMitigationActionsTaskTarget;
  violationEventOccurrenceRange?: ViolationEventOccurrenceRange;
  onlyActiveViolationsIncluded?: boolean;
  suppressedAlertsIncluded?: boolean;
  actionsDefinition?: MitigationAction[];
  taskStatistics?: DetectMitigationActionsTaskStatistics;
}
const DetectMitigationActionsTaskSummary = /*@__PURE__*/ __L.at(
  __c39,
  0,
) as any as S.Schema<DetectMitigationActionsTaskSummary>;
export interface DescribeDetectMitigationActionsTaskResponse {
  taskSummary?: DetectMitigationActionsTaskSummary;
}
const DescribeDetectMitigationActionsTaskResponse = /*@__PURE__*/ __L.at(
  __c39,
  1,
) as any as S.Schema<DescribeDetectMitigationActionsTaskResponse>;
export interface DescribeDimensionRequest {
  name: string;
}
const DescribeDimensionRequest = /*@__PURE__*/ __L.at(
  __c39,
  2,
) as any as S.Schema<DescribeDimensionRequest>;
export interface DescribeDimensionResponse {
  name?: string;
  arn?: string;
  type?: DimensionType;
  stringValues?: string[];
  creationDate?: Date;
  lastModifiedDate?: Date;
}
const DescribeDimensionResponse = /*@__PURE__*/ __L.at(
  __c39,
  3,
) as any as S.Schema<DescribeDimensionResponse>;
export type ReservedDomainConfigurationName = string;
export interface DescribeDomainConfigurationRequest {
  domainConfigurationName: string;
}
const DescribeDomainConfigurationRequest = /*@__PURE__*/ __L.at(
  __c39,
  4,
) as any as S.Schema<DescribeDomainConfigurationRequest>;
export type ServerCertificateStatus = "INVALID" | "VALID" | (string & {});
const ServerCertificateStatus = S.String;

export type ServerCertificateStatusDetail = string;
export interface ServerCertificateSummary {
  serverCertificateArn?: string;
  serverCertificateStatus?: ServerCertificateStatus;
  serverCertificateStatusDetail?: string;
}
const ServerCertificateSummary = /*@__PURE__*/ __L.at(
  __c39,
  5,
) as any as S.Schema<ServerCertificateSummary>;
export type ServerCertificates = ServerCertificateSummary[];
const ServerCertificates = /*@__PURE__*/ __L.at(__c39, 6);
export type DomainConfigurationStatus = "ENABLED" | "DISABLED" | (string & {});
const DomainConfigurationStatus = S.String;

export type DomainType = "ENDPOINT" | "AWS_MANAGED" | "CUSTOMER_MANAGED" | (string & {});
const DomainType = S.String;

export interface DescribeDomainConfigurationResponse {
  domainConfigurationName?: string;
  domainConfigurationArn?: string;
  domainName?: string;
  serverCertificates?: ServerCertificateSummary[];
  authorizerConfig?: AuthorizerConfig;
  domainConfigurationStatus?: DomainConfigurationStatus;
  serviceType?: ServiceType;
  domainType?: DomainType;
  lastStatusChangeDate?: Date;
  tlsConfig?: TlsConfig;
  serverCertificateConfig?: ServerCertificateConfig;
  authenticationType?: AuthenticationType;
  applicationProtocol?: ApplicationProtocol;
  clientCertificateConfig?: ClientCertificateConfig;
}
const DescribeDomainConfigurationResponse = /*@__PURE__*/ __L.at(
  __c39,
  7,
) as any as S.Schema<DescribeDomainConfigurationResponse>;
export interface DescribeEncryptionConfigurationRequest {}
const DescribeEncryptionConfigurationRequest = /*@__PURE__*/ __L.at(
  __c40,
  0,
) as any as S.Schema<DescribeEncryptionConfigurationRequest>;
export type EncryptionType = "CUSTOMER_MANAGED_KMS_KEY" | "AWS_OWNED_KMS_KEY" | (string & {});
const EncryptionType = S.String;

export type KmsKeyArn = string;
export type KmsAccessRoleArn = string;
export type ConfigurationStatus = "HEALTHY" | "UNHEALTHY" | (string & {});
const ConfigurationStatus = S.String;

export interface ConfigurationDetails {
  configurationStatus?: ConfigurationStatus;
  errorCode?: string;
  errorMessage?: string;
}
const ConfigurationDetails = /*@__PURE__*/ __L.at(
  __c40,
  1,
) as any as S.Schema<ConfigurationDetails>;
export interface DescribeEncryptionConfigurationResponse {
  encryptionType?: EncryptionType;
  kmsKeyArn?: string;
  kmsAccessRoleArn?: string;
  configurationDetails?: ConfigurationDetails;
  lastModifiedDate?: Date;
}
const DescribeEncryptionConfigurationResponse = /*@__PURE__*/ __L.at(
  __c40,
  2,
) as any as S.Schema<DescribeEncryptionConfigurationResponse>;
export type EndpointType = string;
export interface DescribeEndpointRequest {
  endpointType?: string;
}
const DescribeEndpointRequest = /*@__PURE__*/ __L.at(
  __c40,
  3,
) as any as S.Schema<DescribeEndpointRequest>;
export type EndpointAddress = string;
export interface DescribeEndpointResponse {
  endpointAddress?: string;
}
const DescribeEndpointResponse = /*@__PURE__*/ __L.at(
  __c40,
  4,
) as any as S.Schema<DescribeEndpointResponse>;
export interface DescribeEventConfigurationsRequest {}
const DescribeEventConfigurationsRequest = /*@__PURE__*/ __L.at(
  __c40,
  5,
) as any as S.Schema<DescribeEventConfigurationsRequest>;
export type EventType =
  | "THING"
  | "THING_GROUP"
  | "THING_TYPE"
  | "THING_GROUP_MEMBERSHIP"
  | "THING_GROUP_HIERARCHY"
  | "THING_TYPE_ASSOCIATION"
  | "JOB"
  | "JOB_EXECUTION"
  | "POLICY"
  | "CERTIFICATE"
  | "CA_CERTIFICATE"
  | (string & {});
const EventType = S.String;

export interface Configuration {
  Enabled?: boolean;
}
const Configuration = /*@__PURE__*/ __L.at(__c40, 6) as any as S.Schema<Configuration>;
export type EventConfigurations = { [key in EventType]?: Configuration };
const EventConfigurations = /*@__PURE__*/ __L.at(__c40, 7);
export type LastModifiedDate = Date;
export interface DescribeEventConfigurationsResponse {
  eventConfigurations?: { [key: string]: Configuration | undefined };
  creationDate?: Date;
  lastModifiedDate?: Date;
}
const DescribeEventConfigurationsResponse = /*@__PURE__*/ __L.at(
  __c41,
  0,
) as any as S.Schema<DescribeEventConfigurationsResponse>;
export interface DescribeFleetMetricRequest {
  metricName: string;
}
const DescribeFleetMetricRequest = /*@__PURE__*/ __L.at(
  __c41,
  1,
) as any as S.Schema<DescribeFleetMetricRequest>;
export interface DescribeFleetMetricResponse {
  metricName?: string;
  queryString?: string;
  aggregationType?: AggregationType;
  period?: number;
  aggregationField?: string;
  description?: string;
  queryVersion?: string;
  indexName?: string;
  creationDate?: Date;
  lastModifiedDate?: Date;
  unit?: FleetMetricUnit;
  version?: number;
  metricArn?: string;
}
const DescribeFleetMetricResponse = /*@__PURE__*/ __L.at(
  __c41,
  2,
) as any as S.Schema<DescribeFleetMetricResponse>;
export interface DescribeIndexRequest {
  indexName: string;
}
const DescribeIndexRequest = /*@__PURE__*/ __L.at(
  __c41,
  3,
) as any as S.Schema<DescribeIndexRequest>;
export type IndexStatus = "ACTIVE" | "BUILDING" | "REBUILDING" | (string & {});
const IndexStatus = S.String;

export type IndexSchema = string;
export interface DescribeIndexResponse {
  indexName?: string;
  indexStatus?: IndexStatus;
  schema?: string;
}
const DescribeIndexResponse = /*@__PURE__*/ __L.at(
  __c41,
  4,
) as any as S.Schema<DescribeIndexResponse>;
export type BeforeSubstitutionFlag = boolean;
export interface DescribeJobRequest {
  jobId: string;
  beforeSubstitution?: boolean;
}
const DescribeJobRequest = /*@__PURE__*/ __L.at(__c41, 5) as any as S.Schema<DescribeJobRequest>;
export type JobStatus =
  | "IN_PROGRESS"
  | "CANCELED"
  | "COMPLETED"
  | "DELETION_IN_PROGRESS"
  | "SCHEDULED"
  | (string & {});
const JobStatus = S.String;

export type Forced = boolean;
export type ProcessingTargetName = string;
export type ProcessingTargetNameList = string[];
const ProcessingTargetNameList = JobTargets as any as S.Schema<ProcessingTargetNameList>;
export type CanceledThings = number;
export type SucceededThings = number;
export type FailedThings = number;
export type RejectedThings = number;
export type QueuedThings = number;
export type InProgressThings = number;
export type RemovedThings = number;
export type TimedOutThings = number;
export interface JobProcessDetails {
  processingTargets?: string[];
  numberOfCanceledThings?: number;
  numberOfSucceededThings?: number;
  numberOfFailedThings?: number;
  numberOfRejectedThings?: number;
  numberOfQueuedThings?: number;
  numberOfInProgressThings?: number;
  numberOfRemovedThings?: number;
  numberOfTimedOutThings?: number;
}
const JobProcessDetails = /*@__PURE__*/ __L.at(__c41, 6) as any as S.Schema<JobProcessDetails>;
export type BooleanWrapperObject = boolean;
export interface ScheduledJobRollout {
  startTime?: string;
}
const ScheduledJobRollout = /*@__PURE__*/ __L.at(__c41, 7) as any as S.Schema<ScheduledJobRollout>;
export type ScheduledJobRolloutList = ScheduledJobRollout[];
const ScheduledJobRolloutList = /*@__PURE__*/ __L.at(__c42, 0);
export interface Job {
  jobArn?: string;
  jobId?: string;
  targetSelection?: TargetSelection;
  status?: JobStatus;
  forceCanceled?: boolean;
  reasonCode?: string;
  comment?: string;
  targets?: string[];
  description?: string;
  presignedUrlConfig?: PresignedUrlConfig;
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;
  abortConfig?: AbortConfig;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  completedAt?: Date;
  jobProcessDetails?: JobProcessDetails;
  timeoutConfig?: TimeoutConfig;
  namespaceId?: string;
  jobTemplateArn?: string;
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig;
  documentParameters?: { [key: string]: string | undefined };
  isConcurrent?: boolean;
  schedulingConfig?: SchedulingConfig;
  scheduledJobRollouts?: ScheduledJobRollout[];
  destinationPackageVersions?: string[];
}
const Job = /*@__PURE__*/ __L.at(__c42, 1) as any as S.Schema<Job>;
export interface DescribeJobResponse {
  documentSource?: string;
  job?: Job;
}
const DescribeJobResponse = /*@__PURE__*/ __L.at(__c42, 2) as any as S.Schema<DescribeJobResponse>;
export interface DescribeJobExecutionRequest {
  jobId: string;
  thingName: string;
  executionNumber?: number;
}
const DescribeJobExecutionRequest = /*@__PURE__*/ __L.at(
  __c42,
  3,
) as any as S.Schema<DescribeJobExecutionRequest>;
export type JobExecutionStatus =
  | "QUEUED"
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "FAILED"
  | "TIMED_OUT"
  | "REJECTED"
  | "REMOVED"
  | "CANCELED"
  | (string & {});
const JobExecutionStatus = S.String;

export interface JobExecutionStatusDetails {
  detailsMap?: { [key: string]: string | undefined };
}
const JobExecutionStatusDetails = /*@__PURE__*/ __L.at(
  __c42,
  4,
) as any as S.Schema<JobExecutionStatusDetails>;
export type VersionNumber = number;
export type ApproximateSecondsBeforeTimedOut = number;
export interface JobExecution {
  jobId?: string;
  status?: JobExecutionStatus;
  forceCanceled?: boolean;
  statusDetails?: JobExecutionStatusDetails;
  thingArn?: string;
  queuedAt?: Date;
  startedAt?: Date;
  lastUpdatedAt?: Date;
  executionNumber?: number;
  versionNumber?: number;
  approximateSecondsBeforeTimedOut?: number;
}
const JobExecution = /*@__PURE__*/ __L.at(__c42, 5) as any as S.Schema<JobExecution>;
export interface DescribeJobExecutionResponse {
  execution?: JobExecution;
}
const DescribeJobExecutionResponse = /*@__PURE__*/ __L.at(
  __c42,
  6,
) as any as S.Schema<DescribeJobExecutionResponse>;
export interface DescribeJobTemplateRequest {
  jobTemplateId: string;
}
const DescribeJobTemplateRequest = /*@__PURE__*/ __L.at(
  __c42,
  7,
) as any as S.Schema<DescribeJobTemplateRequest>;
export interface DescribeJobTemplateResponse {
  jobTemplateArn?: string;
  jobTemplateId?: string;
  description?: string;
  documentSource?: string;
  document?: string;
  createdAt?: Date;
  presignedUrlConfig?: PresignedUrlConfig;
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;
  abortConfig?: AbortConfig;
  timeoutConfig?: TimeoutConfig;
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig;
  maintenanceWindows?: MaintenanceWindow[];
  destinationPackageVersions?: string[];
}
const DescribeJobTemplateResponse = /*@__PURE__*/ __L.at(
  __c43,
  0,
) as any as S.Schema<DescribeJobTemplateResponse>;
export type ManagedJobTemplateName = string;
export type ManagedTemplateVersion = string;
export interface DescribeManagedJobTemplateRequest {
  templateName: string;
  templateVersion?: string;
}
const DescribeManagedJobTemplateRequest = /*@__PURE__*/ __L.at(
  __c43,
  1,
) as any as S.Schema<DescribeManagedJobTemplateRequest>;
export type Environment = string;
export type Environments = string[];
const Environments = JobTargets as any as S.Schema<Environments>;
export type Regex = string;
export type Example = string;
export type Optional = boolean;
export interface DocumentParameter {
  key?: string;
  description?: string;
  regex?: string;
  example?: string;
  optional?: boolean;
}
const DocumentParameter = /*@__PURE__*/ __L.at(__c43, 2) as any as S.Schema<DocumentParameter>;
export type DocumentParameters = DocumentParameter[];
const DocumentParameters = /*@__PURE__*/ __L.at(__c43, 3);
export interface DescribeManagedJobTemplateResponse {
  templateName?: string;
  templateArn?: string;
  description?: string;
  templateVersion?: string;
  environments?: string[];
  documentParameters?: DocumentParameter[];
  document?: string;
}
const DescribeManagedJobTemplateResponse = /*@__PURE__*/ __L.at(
  __c43,
  4,
) as any as S.Schema<DescribeManagedJobTemplateResponse>;
export interface DescribeMitigationActionRequest {
  actionName: string;
}
const DescribeMitigationActionRequest = /*@__PURE__*/ __L.at(
  __c43,
  5,
) as any as S.Schema<DescribeMitigationActionRequest>;
export type MitigationActionType =
  | "UPDATE_DEVICE_CERTIFICATE"
  | "UPDATE_CA_CERTIFICATE"
  | "ADD_THINGS_TO_THING_GROUP"
  | "REPLACE_DEFAULT_POLICY_VERSION"
  | "ENABLE_IOT_LOGGING"
  | "PUBLISH_FINDING_TO_SNS"
  | (string & {});
const MitigationActionType = S.String;

export interface DescribeMitigationActionResponse {
  actionName?: string;
  actionType?: MitigationActionType;
  actionArn?: string;
  actionId?: string;
  roleArn?: string;
  actionParams?: MitigationActionParams;
  creationDate?: Date;
  lastModifiedDate?: Date;
}
const DescribeMitigationActionResponse = /*@__PURE__*/ __L.at(
  __c43,
  6,
) as any as S.Schema<DescribeMitigationActionResponse>;
export interface DescribeProvisioningTemplateRequest {
  templateName: string;
}
const DescribeProvisioningTemplateRequest = /*@__PURE__*/ __L.at(
  __c43,
  7,
) as any as S.Schema<DescribeProvisioningTemplateRequest>;
export interface DescribeProvisioningTemplateResponse {
  templateArn?: string;
  templateName?: string;
  description?: string;
  creationDate?: Date;
  lastModifiedDate?: Date;
  defaultVersionId?: number;
  templateBody?: string;
  enabled?: boolean;
  provisioningRoleArn?: string;
  preProvisioningHook?: ProvisioningHook;
  type?: TemplateType;
}
const DescribeProvisioningTemplateResponse = /*@__PURE__*/ __L.at(
  __c44,
  0,
) as any as S.Schema<DescribeProvisioningTemplateResponse>;
export interface DescribeProvisioningTemplateVersionRequest {
  templateName: string;
  versionId: number;
}
const DescribeProvisioningTemplateVersionRequest = /*@__PURE__*/ __L.at(
  __c44,
  1,
) as any as S.Schema<DescribeProvisioningTemplateVersionRequest>;
export interface DescribeProvisioningTemplateVersionResponse {
  versionId?: number;
  creationDate?: Date;
  templateBody?: string;
  isDefaultVersion?: boolean;
}
const DescribeProvisioningTemplateVersionResponse = /*@__PURE__*/ __L.at(
  __c44,
  2,
) as any as S.Schema<DescribeProvisioningTemplateVersionResponse>;
export interface DescribeRoleAliasRequest {
  roleAlias: string;
}
const DescribeRoleAliasRequest = /*@__PURE__*/ __L.at(
  __c44,
  3,
) as any as S.Schema<DescribeRoleAliasRequest>;
export interface RoleAliasDescription {
  roleAlias?: string;
  roleAliasArn?: string;
  roleArn?: string;
  owner?: string;
  credentialDurationSeconds?: number;
  creationDate?: Date;
  lastModifiedDate?: Date;
}
const RoleAliasDescription = /*@__PURE__*/ __L.at(
  __c44,
  4,
) as any as S.Schema<RoleAliasDescription>;
export interface DescribeRoleAliasResponse {
  roleAliasDescription?: RoleAliasDescription;
}
const DescribeRoleAliasResponse = /*@__PURE__*/ __L.at(
  __c44,
  5,
) as any as S.Schema<DescribeRoleAliasResponse>;
export interface DescribeScheduledAuditRequest {
  scheduledAuditName: string;
}
const DescribeScheduledAuditRequest = /*@__PURE__*/ __L.at(
  __c44,
  6,
) as any as S.Schema<DescribeScheduledAuditRequest>;
export interface DescribeScheduledAuditResponse {
  frequency?: AuditFrequency;
  dayOfMonth?: string;
  dayOfWeek?: DayOfWeek;
  targetCheckNames?: string[];
  scheduledAuditName?: string;
  scheduledAuditArn?: string;
}
const DescribeScheduledAuditResponse = /*@__PURE__*/ __L.at(
  __c44,
  7,
) as any as S.Schema<DescribeScheduledAuditResponse>;
export interface DescribeSecurityProfileRequest {
  securityProfileName: string;
}
const DescribeSecurityProfileRequest = /*@__PURE__*/ __L.at(
  __c45,
  0,
) as any as S.Schema<DescribeSecurityProfileRequest>;
export interface DescribeSecurityProfileResponse {
  securityProfileName?: string;
  securityProfileArn?: string;
  securityProfileDescription?: string;
  behaviors?: Behavior[];
  alertTargets?: { [key: string]: AlertTarget | undefined };
  additionalMetricsToRetain?: string[];
  additionalMetricsToRetainV2?: MetricToRetain[];
  version?: number;
  creationDate?: Date;
  lastModifiedDate?: Date;
  metricsExportConfig?: MetricsExportConfig;
}
const DescribeSecurityProfileResponse = /*@__PURE__*/ __L.at(
  __c45,
  1,
) as any as S.Schema<DescribeSecurityProfileResponse>;
export interface DescribeStreamRequest {
  streamId: string;
}
const DescribeStreamRequest = /*@__PURE__*/ __L.at(
  __c45,
  2,
) as any as S.Schema<DescribeStreamRequest>;
export interface StreamInfo {
  streamId?: string;
  streamArn?: string;
  streamVersion?: number;
  description?: string;
  files?: StreamFile[];
  createdAt?: Date;
  lastUpdatedAt?: Date;
  roleArn?: string;
}
const StreamInfo = /*@__PURE__*/ __L.at(__c45, 3) as any as S.Schema<StreamInfo>;
export interface DescribeStreamResponse {
  streamInfo?: StreamInfo;
}
const DescribeStreamResponse = /*@__PURE__*/ __L.at(
  __c45,
  4,
) as any as S.Schema<DescribeStreamResponse>;
export interface DescribeThingRequest {
  thingName: string;
}
const DescribeThingRequest = /*@__PURE__*/ __L.at(
  __c45,
  5,
) as any as S.Schema<DescribeThingRequest>;
export interface DescribeThingResponse {
  defaultClientId?: string;
  thingName?: string;
  thingId?: string;
  thingArn?: string;
  thingTypeName?: string;
  attributes?: { [key: string]: string | undefined };
  version?: number;
  billingGroupName?: string;
}
const DescribeThingResponse = /*@__PURE__*/ __L.at(
  __c45,
  6,
) as any as S.Schema<DescribeThingResponse>;
export interface DescribeThingGroupRequest {
  thingGroupName: string;
}
const DescribeThingGroupRequest = /*@__PURE__*/ __L.at(
  __c45,
  7,
) as any as S.Schema<DescribeThingGroupRequest>;
export interface GroupNameAndArn {
  groupName?: string;
  groupArn?: string;
}
const GroupNameAndArn = /*@__PURE__*/ __L.at(__c46, 0) as any as S.Schema<GroupNameAndArn>;
export type ThingGroupNameAndArnList = GroupNameAndArn[];
const ThingGroupNameAndArnList = /*@__PURE__*/ __L.at(__c46, 1);
export interface ThingGroupMetadata {
  parentGroupName?: string;
  rootToParentThingGroups?: GroupNameAndArn[];
  creationDate?: Date;
}
const ThingGroupMetadata = /*@__PURE__*/ __L.at(__c46, 2) as any as S.Schema<ThingGroupMetadata>;
export type DynamicGroupStatus = "ACTIVE" | "BUILDING" | "REBUILDING" | (string & {});
const DynamicGroupStatus = S.String;

export interface DescribeThingGroupResponse {
  thingGroupName?: string;
  thingGroupId?: string;
  thingGroupArn?: string;
  version?: number;
  thingGroupProperties?: ThingGroupProperties;
  thingGroupMetadata?: ThingGroupMetadata;
  indexName?: string;
  queryString?: string;
  queryVersion?: string;
  status?: DynamicGroupStatus;
}
const DescribeThingGroupResponse = /*@__PURE__*/ __L.at(
  __c46,
  3,
) as any as S.Schema<DescribeThingGroupResponse>;
export type TaskId = string;
export interface DescribeThingRegistrationTaskRequest {
  taskId: string;
}
const DescribeThingRegistrationTaskRequest = /*@__PURE__*/ __L.at(
  __c46,
  4,
) as any as S.Schema<DescribeThingRegistrationTaskRequest>;
export type RegistryS3BucketName = string;
export type RegistryS3KeyName = string;
export type Status =
  | "InProgress"
  | "Completed"
  | "Failed"
  | "Cancelled"
  | "Cancelling"
  | (string & {});
const Status = S.String;

export type Count = number;
export type Percentage = number;
export interface DescribeThingRegistrationTaskResponse {
  taskId?: string;
  creationDate?: Date;
  lastModifiedDate?: Date;
  templateBody?: string;
  inputFileBucket?: string;
  inputFileKey?: string;
  roleArn?: string;
  status?: Status;
  message?: string;
  successCount?: number;
  failureCount?: number;
  percentageProgress?: number;
}
const DescribeThingRegistrationTaskResponse = /*@__PURE__*/ __L.at(
  __c46,
  5,
) as any as S.Schema<DescribeThingRegistrationTaskResponse>;
export interface DescribeThingTypeRequest {
  thingTypeName: string;
}
const DescribeThingTypeRequest = /*@__PURE__*/ __L.at(
  __c46,
  6,
) as any as S.Schema<DescribeThingTypeRequest>;
export type DeprecationDate = Date;
export interface ThingTypeMetadata {
  deprecated?: boolean;
  deprecationDate?: Date;
  creationDate?: Date;
}
const ThingTypeMetadata = /*@__PURE__*/ __L.at(__c46, 7) as any as S.Schema<ThingTypeMetadata>;
export interface DescribeThingTypeResponse {
  thingTypeName?: string;
  thingTypeId?: string;
  thingTypeArn?: string;
  thingTypeProperties?: ThingTypeProperties;
  thingTypeMetadata?: ThingTypeMetadata;
}
const DescribeThingTypeResponse = /*@__PURE__*/ __L.at(
  __c47,
  0,
) as any as S.Schema<DescribeThingTypeResponse>;
export interface DetachPolicyRequest {
  policyName: string;
  target: string;
}
const DetachPolicyRequest = /*@__PURE__*/ __L.at(__c47, 1) as any as S.Schema<DetachPolicyRequest>;
export interface DetachPolicyResponse {}
const DetachPolicyResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DetachPolicyResponse>;
export interface DetachPrincipalPolicyRequest {
  policyName: string;
  principal: string;
}
const DetachPrincipalPolicyRequest = /*@__PURE__*/ __L.at(
  __c47,
  2,
) as any as S.Schema<DetachPrincipalPolicyRequest>;
export interface DetachPrincipalPolicyResponse {}
const DetachPrincipalPolicyResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DetachPrincipalPolicyResponse>;
export interface DetachSecurityProfileRequest {
  securityProfileName: string;
  securityProfileTargetArn: string;
}
const DetachSecurityProfileRequest = /*@__PURE__*/ __L.at(
  __c47,
  3,
) as any as S.Schema<DetachSecurityProfileRequest>;
export interface DetachSecurityProfileResponse {}
const DetachSecurityProfileResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DetachSecurityProfileResponse>;
export interface DetachThingPrincipalRequest {
  thingName: string;
  principal: string;
}
const DetachThingPrincipalRequest = /*@__PURE__*/ __L.at(
  __c47,
  4,
) as any as S.Schema<DetachThingPrincipalRequest>;
export interface DetachThingPrincipalResponse {}
const DetachThingPrincipalResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DetachThingPrincipalResponse>;
export interface DisableTopicRuleRequest {
  ruleName: string;
}
const DisableTopicRuleRequest = /*@__PURE__*/ __L.at(
  __c47,
  5,
) as any as S.Schema<DisableTopicRuleRequest>;
export interface DisableTopicRuleResponse {}
const DisableTopicRuleResponse =
  AddThingToBillingGroupResponse as any as S.Schema<DisableTopicRuleResponse>;
export interface DisassociateSbomFromPackageVersionRequest {
  packageName: string;
  versionName: string;
  clientToken?: string;
}
const DisassociateSbomFromPackageVersionRequest = /*@__PURE__*/ __L.at(
  __c47,
  6,
) as any as S.Schema<DisassociateSbomFromPackageVersionRequest>;
export interface DisassociateSbomFromPackageVersionResponse {}
const DisassociateSbomFromPackageVersionResponse =
  AcceptCertificateTransferResponse as any as S.Schema<DisassociateSbomFromPackageVersionResponse>;
export interface EnableTopicRuleRequest {
  ruleName: string;
}
const EnableTopicRuleRequest = /*@__PURE__*/ __L.at(
  __c47,
  7,
) as any as S.Schema<EnableTopicRuleRequest>;
export interface EnableTopicRuleResponse {}
const EnableTopicRuleResponse =
  AddThingToBillingGroupResponse as any as S.Schema<EnableTopicRuleResponse>;
export type TinyMaxResults = number;
export type NextToken = string;
export interface GetBehaviorModelTrainingSummariesRequest {
  securityProfileName?: string;
  maxResults?: number;
  nextToken?: string;
}
const GetBehaviorModelTrainingSummariesRequest = /*@__PURE__*/ __L.at(
  __c48,
  0,
) as any as S.Schema<GetBehaviorModelTrainingSummariesRequest>;
export type ModelStatus = "PENDING_BUILD" | "ACTIVE" | "EXPIRED" | (string & {});
const ModelStatus = S.String;

export type DataCollectionPercentage = number;
export interface BehaviorModelTrainingSummary {
  securityProfileName?: string;
  behaviorName?: string;
  trainingDataCollectionStartDate?: Date;
  modelStatus?: ModelStatus;
  datapointsCollectionPercentage?: number;
  lastModelRefreshDate?: Date;
}
const BehaviorModelTrainingSummary = /*@__PURE__*/ __L.at(
  __c48,
  1,
) as any as S.Schema<BehaviorModelTrainingSummary>;
export type BehaviorModelTrainingSummaries = BehaviorModelTrainingSummary[];
const BehaviorModelTrainingSummaries = /*@__PURE__*/ __L.at(__c48, 2);
export interface GetBehaviorModelTrainingSummariesResponse {
  summaries?: BehaviorModelTrainingSummary[];
  nextToken?: string;
}
const GetBehaviorModelTrainingSummariesResponse = /*@__PURE__*/ __L.at(
  __c48,
  3,
) as any as S.Schema<GetBehaviorModelTrainingSummariesResponse>;
export type MaxBuckets = number;
export interface TermsAggregation {
  maxBuckets?: number;
}
const TermsAggregation = /*@__PURE__*/ __L.at(__c48, 4) as any as S.Schema<TermsAggregation>;
export interface BucketsAggregationType {
  termsAggregation?: TermsAggregation;
}
const BucketsAggregationType = /*@__PURE__*/ __L.at(
  __c48,
  5,
) as any as S.Schema<BucketsAggregationType>;
export interface GetBucketsAggregationRequest {
  indexName?: string;
  queryString: string;
  aggregationField: string;
  queryVersion?: string;
  bucketsAggregationType: BucketsAggregationType;
}
const GetBucketsAggregationRequest = /*@__PURE__*/ __L.at(
  __c48,
  6,
) as any as S.Schema<GetBucketsAggregationRequest>;
export type BucketKeyValue = string;
export interface Bucket {
  keyValue?: string;
  count?: number;
}
const Bucket = /*@__PURE__*/ __L.at(__c48, 7) as any as S.Schema<Bucket>;
export type Buckets = Bucket[];
const Buckets = /*@__PURE__*/ __L.at(__c49, 0);
export interface GetBucketsAggregationResponse {
  totalCount?: number;
  buckets?: Bucket[];
}
const GetBucketsAggregationResponse = /*@__PURE__*/ __L.at(
  __c49,
  1,
) as any as S.Schema<GetBucketsAggregationResponse>;
export interface GetCardinalityRequest {
  indexName?: string;
  queryString: string;
  aggregationField?: string;
  queryVersion?: string;
}
const GetCardinalityRequest = /*@__PURE__*/ __L.at(
  __c49,
  2,
) as any as S.Schema<GetCardinalityRequest>;
export interface GetCardinalityResponse {
  cardinality?: number;
}
const GetCardinalityResponse = /*@__PURE__*/ __L.at(
  __c49,
  3,
) as any as S.Schema<GetCardinalityResponse>;
export interface GetCommandRequest {
  commandId: string;
}
const GetCommandRequest = /*@__PURE__*/ __L.at(__c49, 4) as any as S.Schema<GetCommandRequest>;
export type DeprecationFlag = boolean;
export interface GetCommandResponse {
  commandId?: string;
  commandArn?: string;
  namespace?: CommandNamespace;
  displayName?: string;
  description?: string;
  mandatoryParameters?: CommandParameter[];
  payload?: CommandPayload;
  payloadTemplate?: string;
  preprocessor?: CommandPreprocessor;
  roleArn?: string;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  deprecated?: boolean;
  pendingDeletion?: boolean;
}
const GetCommandResponse = /*@__PURE__*/ __L.at(__c49, 5) as any as S.Schema<GetCommandResponse>;
export interface GetCommandExecutionRequest {
  executionId: string;
  targetArn: string;
  includeResult?: boolean;
}
const GetCommandExecutionRequest = /*@__PURE__*/ __L.at(
  __c49,
  6,
) as any as S.Schema<GetCommandExecutionRequest>;
export type CommandExecutionStatus =
  | "CREATED"
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "FAILED"
  | "REJECTED"
  | "TIMED_OUT"
  | (string & {});
const CommandExecutionStatus = S.String;

export type StatusReasonCode = string;
export type StatusReasonDescription = string;
export interface StatusReason {
  reasonCode: string;
  reasonDescription?: string;
}
const StatusReason = /*@__PURE__*/ __L.at(__c49, 7) as any as S.Schema<StatusReason>;
export type CommandExecutionResultName = string;
export type StringCommandExecutionResult = string;
export type BooleanCommandExecutionResult = boolean;
export type BinaryCommandExecutionResult = Uint8Array;
export interface CommandExecutionResult {
  S?: string;
  B?: boolean;
  BIN?: Uint8Array;
}
const CommandExecutionResult = /*@__PURE__*/ __L.at(
  __c50,
  0,
) as any as S.Schema<CommandExecutionResult>;
export type CommandExecutionResultMap = { [key: string]: CommandExecutionResult | undefined };
const CommandExecutionResultMap = /*@__PURE__*/ __L.at(__c50, 1);
export type CommandExecutionParameterMap = { [key: string]: CommandParameterValue | undefined };
const CommandExecutionParameterMap = /*@__PURE__*/ __L.at(__c50, 2);
export type CommandExecutionTimeoutInSeconds = number;
export interface GetCommandExecutionResponse {
  executionId?: string;
  commandArn?: string;
  targetArn?: string;
  status?: CommandExecutionStatus;
  statusReason?: StatusReason;
  result?: { [key: string]: CommandExecutionResult | undefined };
  parameters?: { [key: string]: CommandParameterValue | undefined };
  executionTimeoutSeconds?: number;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  startedAt?: Date;
  completedAt?: Date;
  timeToLive?: Date;
}
const GetCommandExecutionResponse = /*@__PURE__*/ __L.at(
  __c50,
  3,
) as any as S.Schema<GetCommandExecutionResponse>;
export interface GetEffectivePoliciesRequest {
  principal?: string;
  cognitoIdentityPoolId?: string;
  thingName?: string;
}
const GetEffectivePoliciesRequest = /*@__PURE__*/ __L.at(
  __c50,
  4,
) as any as S.Schema<GetEffectivePoliciesRequest>;
export interface EffectivePolicy {
  policyName?: string;
  policyArn?: string;
  policyDocument?: string;
}
const EffectivePolicy = /*@__PURE__*/ __L.at(__c50, 5) as any as S.Schema<EffectivePolicy>;
export type EffectivePolicies = EffectivePolicy[];
const EffectivePolicies = /*@__PURE__*/ __L.at(__c50, 6);
export interface GetEffectivePoliciesResponse {
  effectivePolicies?: EffectivePolicy[];
}
const GetEffectivePoliciesResponse = /*@__PURE__*/ __L.at(
  __c50,
  7,
) as any as S.Schema<GetEffectivePoliciesResponse>;
export interface GetIndexingConfigurationRequest {}
const GetIndexingConfigurationRequest = /*@__PURE__*/ __L.at(
  __c51,
  0,
) as any as S.Schema<GetIndexingConfigurationRequest>;
export type ThingIndexingMode = "OFF" | "REGISTRY" | "REGISTRY_AND_SHADOW" | (string & {});
const ThingIndexingMode = S.String;

export type ThingConnectivityIndexingMode = "OFF" | "STATUS" | (string & {});
const ThingConnectivityIndexingMode = S.String;

export type DeviceDefenderIndexingMode = "OFF" | "VIOLATIONS" | (string & {});
const DeviceDefenderIndexingMode = S.String;

export type NamedShadowIndexingMode = "OFF" | "ON" | (string & {});
const NamedShadowIndexingMode = S.String;

export type FieldName = string;
export type FieldType = "Number" | "String" | "Boolean" | (string & {});
const FieldType = S.String;

export interface Field {
  name?: string;
  type?: FieldType;
}
const Field = /*@__PURE__*/ __L.at(__c51, 1) as any as S.Schema<Field>;
export type Fields = Field[];
const Fields = /*@__PURE__*/ __L.at(__c51, 2);
export type ShadowName = string;
export type NamedShadowNamesFilter = string[];
const NamedShadowNamesFilter = JobTargets as any as S.Schema<NamedShadowNamesFilter>;
export type TargetFieldName = string;
export type TargetFieldOrder = "LatLon" | "LonLat" | (string & {});
const TargetFieldOrder = S.String;

export interface GeoLocationTarget {
  name?: string;
  order?: TargetFieldOrder;
}
const GeoLocationTarget = /*@__PURE__*/ __L.at(__c51, 3) as any as S.Schema<GeoLocationTarget>;
export type GeoLocationsFilter = GeoLocationTarget[];
const GeoLocationsFilter = /*@__PURE__*/ __L.at(__c51, 4);
export type FleetIndexingApi = "GET_THING_CONNECTIVITY_DATA" | (string & {});
export type FleetIndexingApiList = FleetIndexingApi[];
const FleetIndexingApiList = Protocols as any as S.Schema<FleetIndexingApiList>;
export interface ConnectivityFilter {
  includeSocketInformation?: FleetIndexingApi[];
}
const ConnectivityFilter = /*@__PURE__*/ __L.at(__c51, 5) as any as S.Schema<ConnectivityFilter>;
export interface IndexingFilter {
  namedShadowNames?: string[];
  geoLocations?: GeoLocationTarget[];
  connectivity?: ConnectivityFilter;
}
const IndexingFilter = /*@__PURE__*/ __L.at(__c51, 6) as any as S.Schema<IndexingFilter>;
export interface ThingIndexingConfiguration {
  thingIndexingMode: ThingIndexingMode;
  thingConnectivityIndexingMode?: ThingConnectivityIndexingMode;
  deviceDefenderIndexingMode?: DeviceDefenderIndexingMode;
  namedShadowIndexingMode?: NamedShadowIndexingMode;
  managedFields?: Field[];
  customFields?: Field[];
  filter?: IndexingFilter;
}
const ThingIndexingConfiguration = /*@__PURE__*/ __L.at(
  __c51,
  7,
) as any as S.Schema<ThingIndexingConfiguration>;
export type ThingGroupIndexingMode = "OFF" | "ON" | (string & {});
const ThingGroupIndexingMode = S.String;

export interface ThingGroupIndexingConfiguration {
  thingGroupIndexingMode: ThingGroupIndexingMode;
  managedFields?: Field[];
  customFields?: Field[];
}
const ThingGroupIndexingConfiguration = /*@__PURE__*/ __L.at(
  __c52,
  0,
) as any as S.Schema<ThingGroupIndexingConfiguration>;
export interface GetIndexingConfigurationResponse {
  thingIndexingConfiguration?: ThingIndexingConfiguration;
  thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;
}
const GetIndexingConfigurationResponse = /*@__PURE__*/ __L.at(
  __c52,
  1,
) as any as S.Schema<GetIndexingConfigurationResponse>;
export interface GetJobDocumentRequest {
  jobId: string;
  beforeSubstitution?: boolean;
}
const GetJobDocumentRequest = /*@__PURE__*/ __L.at(
  __c52,
  2,
) as any as S.Schema<GetJobDocumentRequest>;
export interface GetJobDocumentResponse {
  document?: string;
}
const GetJobDocumentResponse = /*@__PURE__*/ __L.at(
  __c52,
  3,
) as any as S.Schema<GetJobDocumentResponse>;
export interface GetLoggingOptionsRequest {}
const GetLoggingOptionsRequest = /*@__PURE__*/ __L.at(
  __c52,
  4,
) as any as S.Schema<GetLoggingOptionsRequest>;
export interface GetLoggingOptionsResponse {
  roleArn?: string;
  logLevel?: LogLevel;
}
const GetLoggingOptionsResponse = /*@__PURE__*/ __L.at(
  __c52,
  5,
) as any as S.Schema<GetLoggingOptionsResponse>;
export interface GetOTAUpdateRequest {
  otaUpdateId: string;
}
const GetOTAUpdateRequest = /*@__PURE__*/ __L.at(__c52, 6) as any as S.Schema<GetOTAUpdateRequest>;
export type Code = string;
export type OTAUpdateErrorMessage = string;
export interface ErrorInfo {
  code?: string;
  message?: string;
}
const ErrorInfo = /*@__PURE__*/ __L.at(__c52, 7) as any as S.Schema<ErrorInfo>;
export interface OTAUpdateInfo {
  otaUpdateId?: string;
  otaUpdateArn?: string;
  creationDate?: Date;
  lastModifiedDate?: Date;
  description?: string;
  targets?: string[];
  protocols?: Protocol[];
  awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig;
  awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig;
  targetSelection?: TargetSelection;
  otaUpdateFiles?: OTAUpdateFile[];
  otaUpdateStatus?: OTAUpdateStatus;
  awsIotJobId?: string;
  awsIotJobArn?: string;
  errorInfo?: ErrorInfo;
  additionalParameters?: { [key: string]: string | undefined };
}
const OTAUpdateInfo = /*@__PURE__*/ __L.at(__c53, 0) as any as S.Schema<OTAUpdateInfo>;
export interface GetOTAUpdateResponse {
  otaUpdateInfo?: OTAUpdateInfo;
}
const GetOTAUpdateResponse = /*@__PURE__*/ __L.at(
  __c53,
  1,
) as any as S.Schema<GetOTAUpdateResponse>;
export interface GetPackageRequest {
  packageName: string;
}
const GetPackageRequest = /*@__PURE__*/ __L.at(__c53, 2) as any as S.Schema<GetPackageRequest>;
export interface GetPackageResponse {
  packageName?: string;
  packageArn?: string;
  description?: string | redacted.Redacted<string>;
  defaultVersionName?: string;
  creationDate?: Date;
  lastModifiedDate?: Date;
}
const GetPackageResponse = /*@__PURE__*/ __L.at(__c53, 3) as any as S.Schema<GetPackageResponse>;
export interface GetPackageConfigurationRequest {}
const GetPackageConfigurationRequest = /*@__PURE__*/ __L.at(
  __c53,
  4,
) as any as S.Schema<GetPackageConfigurationRequest>;
export type EnabledBoolean = boolean;
export interface VersionUpdateByJobsConfig {
  enabled?: boolean;
  roleArn?: string;
}
const VersionUpdateByJobsConfig = /*@__PURE__*/ __L.at(
  __c53,
  5,
) as any as S.Schema<VersionUpdateByJobsConfig>;
export interface GetPackageConfigurationResponse {
  versionUpdateByJobsConfig?: VersionUpdateByJobsConfig;
}
const GetPackageConfigurationResponse = /*@__PURE__*/ __L.at(
  __c53,
  6,
) as any as S.Schema<GetPackageConfigurationResponse>;
export interface GetPackageVersionRequest {
  packageName: string;
  versionName: string;
}
const GetPackageVersionRequest = /*@__PURE__*/ __L.at(
  __c53,
  7,
) as any as S.Schema<GetPackageVersionRequest>;
export interface GetPackageVersionResponse {
  packageVersionArn?: string;
  packageName?: string;
  versionName?: string;
  description?: string | redacted.Redacted<string>;
  attributes?: { [key: string]: string | undefined };
  artifact?: PackageVersionArtifact;
  status?: PackageVersionStatus;
  errorReason?: string;
  creationDate?: Date;
  lastModifiedDate?: Date;
  sbom?: Sbom;
  sbomValidationStatus?: SbomValidationStatus;
  recipe?: string | redacted.Redacted<string>;
}
const GetPackageVersionResponse = /*@__PURE__*/ __L.at(
  __c54,
  0,
) as any as S.Schema<GetPackageVersionResponse>;
export type Percent = number;
export type PercentList = number[];
const PercentList = Ports as any as S.Schema<PercentList>;
export interface GetPercentilesRequest {
  indexName?: string;
  queryString: string;
  aggregationField?: string;
  queryVersion?: string;
  percents?: number[];
}
const GetPercentilesRequest = /*@__PURE__*/ __L.at(
  __c54,
  1,
) as any as S.Schema<GetPercentilesRequest>;
export type PercentValue = number;
export interface PercentPair {
  percent?: number;
  value?: number;
}
const PercentPair = /*@__PURE__*/ __L.at(__c54, 2) as any as S.Schema<PercentPair>;
export type Percentiles = PercentPair[];
const Percentiles = /*@__PURE__*/ __L.at(__c54, 3);
export interface GetPercentilesResponse {
  percentiles?: PercentPair[];
}
const GetPercentilesResponse = /*@__PURE__*/ __L.at(
  __c54,
  4,
) as any as S.Schema<GetPercentilesResponse>;
export interface GetPolicyRequest {
  policyName: string;
}
const GetPolicyRequest = /*@__PURE__*/ __L.at(__c54, 5) as any as S.Schema<GetPolicyRequest>;
export interface GetPolicyResponse {
  policyName?: string;
  policyArn?: string;
  policyDocument?: string;
  defaultVersionId?: string;
  creationDate?: Date;
  lastModifiedDate?: Date;
  generationId?: string;
}
const GetPolicyResponse = /*@__PURE__*/ __L.at(__c54, 6) as any as S.Schema<GetPolicyResponse>;
export interface GetPolicyVersionRequest {
  policyName: string;
  policyVersionId: string;
}
const GetPolicyVersionRequest = /*@__PURE__*/ __L.at(
  __c54,
  7,
) as any as S.Schema<GetPolicyVersionRequest>;
export interface GetPolicyVersionResponse {
  policyArn?: string;
  policyName?: string;
  policyDocument?: string;
  policyVersionId?: string;
  isDefaultVersion?: boolean;
  creationDate?: Date;
  lastModifiedDate?: Date;
  generationId?: string;
}
const GetPolicyVersionResponse = /*@__PURE__*/ __L.at(
  __c55,
  0,
) as any as S.Schema<GetPolicyVersionResponse>;
export interface GetRegistrationCodeRequest {}
const GetRegistrationCodeRequest = /*@__PURE__*/ __L.at(
  __c55,
  1,
) as any as S.Schema<GetRegistrationCodeRequest>;
export type RegistrationCode = string;
export interface GetRegistrationCodeResponse {
  registrationCode?: string;
}
const GetRegistrationCodeResponse = /*@__PURE__*/ __L.at(
  __c55,
  2,
) as any as S.Schema<GetRegistrationCodeResponse>;
export interface GetStatisticsRequest {
  indexName?: string;
  queryString: string;
  aggregationField?: string;
  queryVersion?: string;
}
const GetStatisticsRequest = /*@__PURE__*/ __L.at(
  __c55,
  3,
) as any as S.Schema<GetStatisticsRequest>;
export type Average = number;
export type Sum = number;
export type Minimum = number;
export type Maximum = number;
export type SumOfSquares = number;
export type Variance = number;
export type StdDeviation = number;
export interface Statistics {
  count?: number;
  average?: number;
  sum?: number;
  minimum?: number;
  maximum?: number;
  sumOfSquares?: number;
  variance?: number;
  stdDeviation?: number;
}
const Statistics = /*@__PURE__*/ __L.at(__c55, 4) as any as S.Schema<Statistics>;
export interface GetStatisticsResponse {
  statistics?: Statistics;
}
const GetStatisticsResponse = /*@__PURE__*/ __L.at(
  __c55,
  5,
) as any as S.Schema<GetStatisticsResponse>;
export type ConnectivityApiThingName = string | redacted.Redacted<string>;
export interface GetThingConnectivityDataRequest {
  thingName: string | redacted.Redacted<string>;
  includeSocketInformation?: boolean;
}
const GetThingConnectivityDataRequest = /*@__PURE__*/ __L.at(
  __c55,
  6,
) as any as S.Schema<GetThingConnectivityDataRequest>;
export type DisconnectReasonValue =
  | "AUTH_ERROR"
  | "CLIENT_INITIATED_DISCONNECT"
  | "CLIENT_ERROR"
  | "CONNECTION_LOST"
  | "DUPLICATE_CLIENTID"
  | "FORBIDDEN_ACCESS"
  | "MQTT_KEEP_ALIVE_TIMEOUT"
  | "SERVER_ERROR"
  | "SERVER_INITIATED_DISCONNECT"
  | "API_INITIATED_DISCONNECT"
  | "THROTTLED"
  | "WEBSOCKET_TTL_EXPIRATION"
  | "CUSTOMAUTH_TTL_EXPIRATION"
  | "UNKNOWN"
  | "NONE"
  | (string & {});
const DisconnectReasonValue = S.String;

export type SourceIp = string | redacted.Redacted<string>;
export type SourcePort = number;
export type TargetIp = string | redacted.Redacted<string>;
export type TargetPort = number;
export type VpcEndpointId = string | redacted.Redacted<string>;
export type KeepAliveDuration = number;
export type SessionExpiry = number;
export interface GetThingConnectivityDataResponse {
  thingName?: string | redacted.Redacted<string>;
  connected?: boolean;
  timestamp?: Date;
  disconnectReason?: DisconnectReasonValue;
  sourceIp?: string | redacted.Redacted<string>;
  sourcePort?: number;
  targetIp?: string | redacted.Redacted<string>;
  targetPort?: number;
  vpcEndpointId?: string | redacted.Redacted<string>;
  keepAliveDuration?: number;
  cleanSession?: boolean;
  sessionExpiry?: number;
  clientId?: string;
}
const GetThingConnectivityDataResponse = /*@__PURE__*/ __L.at(
  __c55,
  7,
) as any as S.Schema<GetThingConnectivityDataResponse>;
export interface GetTopicRuleRequest {
  ruleName: string;
}
const GetTopicRuleRequest = /*@__PURE__*/ __L.at(__c56, 0) as any as S.Schema<GetTopicRuleRequest>;
export type RuleArn = string;
export interface TopicRule {
  ruleName?: string;
  sql?: string;
  description?: string;
  createdAt?: Date;
  actions?: Action[];
  ruleDisabled?: boolean;
  awsIotSqlVersion?: string;
  errorAction?: Action;
}
const TopicRule = /*@__PURE__*/ __L.at(__c56, 1) as any as S.Schema<TopicRule>;
export interface GetTopicRuleResponse {
  ruleArn?: string;
  rule?: TopicRule;
}
const GetTopicRuleResponse = /*@__PURE__*/ __L.at(
  __c56,
  2,
) as any as S.Schema<GetTopicRuleResponse>;
export interface GetTopicRuleDestinationRequest {
  arn: string;
}
const GetTopicRuleDestinationRequest = /*@__PURE__*/ __L.at(
  __c56,
  3,
) as any as S.Schema<GetTopicRuleDestinationRequest>;
export interface GetTopicRuleDestinationResponse {
  topicRuleDestination?: TopicRuleDestination;
}
const GetTopicRuleDestinationResponse =
  CreateTopicRuleDestinationResponse as any as S.Schema<GetTopicRuleDestinationResponse>;
export type VerboseFlag = boolean;
export interface GetV2LoggingOptionsRequest {
  verbose?: boolean;
}
const GetV2LoggingOptionsRequest = /*@__PURE__*/ __L.at(
  __c56,
  4,
) as any as S.Schema<GetV2LoggingOptionsRequest>;
export type DisableAllLogs = boolean;
export type LogEventType = string;
export type LogDestination = string;
export interface LogEventConfiguration {
  eventType: string;
  logLevel?: LogLevel;
  logDestination?: string;
}
const LogEventConfiguration = /*@__PURE__*/ __L.at(
  __c56,
  5,
) as any as S.Schema<LogEventConfiguration>;
export type LogEventConfigurations = LogEventConfiguration[];
const LogEventConfigurations = /*@__PURE__*/ __L.at(__c56, 6);
export interface GetV2LoggingOptionsResponse {
  roleArn?: string;
  defaultLogLevel?: LogLevel;
  disableAllLogs?: boolean;
  eventConfigurations?: LogEventConfiguration[];
}
const GetV2LoggingOptionsResponse = /*@__PURE__*/ __L.at(
  __c56,
  7,
) as any as S.Schema<GetV2LoggingOptionsResponse>;
export type DeviceDefenderThingName = string;
export type BehaviorCriteriaType = "STATIC" | "STATISTICAL" | "MACHINE_LEARNING" | (string & {});
const BehaviorCriteriaType = S.String;

export type ListSuppressedAlerts = boolean;
export type VerificationState =
  | "FALSE_POSITIVE"
  | "BENIGN_POSITIVE"
  | "TRUE_POSITIVE"
  | "UNKNOWN"
  | (string & {});
const VerificationState = S.String;

export type MaxResults = number;
export interface ListActiveViolationsRequest {
  thingName?: string;
  securityProfileName?: string;
  behaviorCriteriaType?: BehaviorCriteriaType;
  listSuppressedAlerts?: boolean;
  verificationState?: VerificationState;
  nextToken?: string;
  maxResults?: number;
}
const ListActiveViolationsRequest = /*@__PURE__*/ __L.at(
  __c57,
  0,
) as any as S.Schema<ListActiveViolationsRequest>;
export interface ViolationEventAdditionalInfo {
  confidenceLevel?: ConfidenceLevel;
}
const ViolationEventAdditionalInfo = /*@__PURE__*/ __L.at(
  __c57,
  1,
) as any as S.Schema<ViolationEventAdditionalInfo>;
export type VerificationStateDescription = string;
export interface ActiveViolation {
  violationId?: string;
  thingName?: string;
  securityProfileName?: string;
  behavior?: Behavior;
  lastViolationValue?: MetricValue;
  violationEventAdditionalInfo?: ViolationEventAdditionalInfo;
  verificationState?: VerificationState;
  verificationStateDescription?: string;
  lastViolationTime?: Date;
  violationStartTime?: Date;
}
const ActiveViolation = /*@__PURE__*/ __L.at(__c57, 2) as any as S.Schema<ActiveViolation>;
export type ActiveViolations = ActiveViolation[];
const ActiveViolations = /*@__PURE__*/ __L.at(__c57, 3);
export interface ListActiveViolationsResponse {
  activeViolations?: ActiveViolation[];
  nextToken?: string;
}
const ListActiveViolationsResponse = /*@__PURE__*/ __L.at(
  __c57,
  4,
) as any as S.Schema<ListActiveViolationsResponse>;
export type Recursive = boolean;
export type Marker = string;
export type PageSize = number;
export interface ListAttachedPoliciesRequest {
  target: string;
  recursive?: boolean;
  marker?: string;
  pageSize?: number;
}
const ListAttachedPoliciesRequest = /*@__PURE__*/ __L.at(
  __c57,
  5,
) as any as S.Schema<ListAttachedPoliciesRequest>;
export interface Policy {
  policyName?: string;
  policyArn?: string;
}
const Policy = /*@__PURE__*/ __L.at(__c57, 6) as any as S.Schema<Policy>;
export type Policies = Policy[];
const Policies = /*@__PURE__*/ __L.at(__c57, 7);
export interface ListAttachedPoliciesResponse {
  policies?: Policy[];
  nextMarker?: string;
}
const ListAttachedPoliciesResponse = /*@__PURE__*/ __L.at(
  __c58,
  0,
) as any as S.Schema<ListAttachedPoliciesResponse>;
export type ListSuppressedFindings = boolean;
export interface ListAuditFindingsRequest {
  taskId?: string;
  checkName?: string;
  resourceIdentifier?: ResourceIdentifier;
  maxResults?: number;
  nextToken?: string;
  startTime?: Date;
  endTime?: Date;
  listSuppressedFindings?: boolean;
}
const ListAuditFindingsRequest = /*@__PURE__*/ __L.at(
  __c58,
  1,
) as any as S.Schema<ListAuditFindingsRequest>;
export type AuditFindings = AuditFinding[];
const AuditFindings = /*@__PURE__*/ __L.at(__c58, 2);
export interface ListAuditFindingsResponse {
  findings?: AuditFinding[];
  nextToken?: string;
}
const ListAuditFindingsResponse = /*@__PURE__*/ __L.at(
  __c58,
  3,
) as any as S.Schema<ListAuditFindingsResponse>;
export type AuditMitigationActionsExecutionStatus =
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED"
  | "CANCELED"
  | "SKIPPED"
  | "PENDING"
  | (string & {});
const AuditMitigationActionsExecutionStatus = S.String;

export interface ListAuditMitigationActionsExecutionsRequest {
  taskId: string;
  actionStatus?: AuditMitigationActionsExecutionStatus;
  findingId: string;
  maxResults?: number;
  nextToken?: string;
}
const ListAuditMitigationActionsExecutionsRequest = /*@__PURE__*/ __L.at(
  __c58,
  4,
) as any as S.Schema<ListAuditMitigationActionsExecutionsRequest>;
export interface AuditMitigationActionExecutionMetadata {
  taskId?: string;
  findingId?: string;
  actionName?: string;
  actionId?: string;
  status?: AuditMitigationActionsExecutionStatus;
  startTime?: Date;
  endTime?: Date;
  errorCode?: string;
  message?: string;
}
const AuditMitigationActionExecutionMetadata = /*@__PURE__*/ __L.at(
  __c58,
  5,
) as any as S.Schema<AuditMitigationActionExecutionMetadata>;
export type AuditMitigationActionExecutionMetadataList = AuditMitigationActionExecutionMetadata[];
const AuditMitigationActionExecutionMetadataList = /*@__PURE__*/ __L.at(__c58, 6);
export interface ListAuditMitigationActionsExecutionsResponse {
  actionsExecutions?: AuditMitigationActionExecutionMetadata[];
  nextToken?: string;
}
const ListAuditMitigationActionsExecutionsResponse = /*@__PURE__*/ __L.at(
  __c58,
  7,
) as any as S.Schema<ListAuditMitigationActionsExecutionsResponse>;
export interface ListAuditMitigationActionsTasksRequest {
  auditTaskId?: string;
  findingId?: string;
  taskStatus?: AuditMitigationActionsTaskStatus;
  maxResults?: number;
  nextToken?: string;
  startTime: Date;
  endTime: Date;
}
const ListAuditMitigationActionsTasksRequest = /*@__PURE__*/ __L.at(
  __c59,
  0,
) as any as S.Schema<ListAuditMitigationActionsTasksRequest>;
export interface AuditMitigationActionsTaskMetadata {
  taskId?: string;
  startTime?: Date;
  taskStatus?: AuditMitigationActionsTaskStatus;
}
const AuditMitigationActionsTaskMetadata = /*@__PURE__*/ __L.at(
  __c59,
  1,
) as any as S.Schema<AuditMitigationActionsTaskMetadata>;
export type AuditMitigationActionsTaskMetadataList = AuditMitigationActionsTaskMetadata[];
const AuditMitigationActionsTaskMetadataList = /*@__PURE__*/ __L.at(__c59, 2);
export interface ListAuditMitigationActionsTasksResponse {
  tasks?: AuditMitigationActionsTaskMetadata[];
  nextToken?: string;
}
const ListAuditMitigationActionsTasksResponse = /*@__PURE__*/ __L.at(
  __c59,
  3,
) as any as S.Schema<ListAuditMitigationActionsTasksResponse>;
export type AscendingOrder = boolean;
export interface ListAuditSuppressionsRequest {
  checkName?: string;
  resourceIdentifier?: ResourceIdentifier;
  ascendingOrder?: boolean;
  nextToken?: string;
  maxResults?: number;
}
const ListAuditSuppressionsRequest = /*@__PURE__*/ __L.at(
  __c59,
  4,
) as any as S.Schema<ListAuditSuppressionsRequest>;
export interface AuditSuppression {
  checkName: string;
  resourceIdentifier: ResourceIdentifier;
  expirationDate?: Date;
  suppressIndefinitely?: boolean;
  description?: string;
}
const AuditSuppression = /*@__PURE__*/ __L.at(__c59, 5) as any as S.Schema<AuditSuppression>;
export type AuditSuppressionList = AuditSuppression[];
const AuditSuppressionList = /*@__PURE__*/ __L.at(__c59, 6);
export interface ListAuditSuppressionsResponse {
  suppressions?: AuditSuppression[];
  nextToken?: string;
}
const ListAuditSuppressionsResponse = /*@__PURE__*/ __L.at(
  __c59,
  7,
) as any as S.Schema<ListAuditSuppressionsResponse>;
export interface ListAuditTasksRequest {
  startTime: Date;
  endTime: Date;
  taskType?: AuditTaskType;
  taskStatus?: AuditTaskStatus;
  nextToken?: string;
  maxResults?: number;
}
const ListAuditTasksRequest = /*@__PURE__*/ __L.at(
  __c60,
  0,
) as any as S.Schema<ListAuditTasksRequest>;
export interface AuditTaskMetadata {
  taskId?: string;
  taskStatus?: AuditTaskStatus;
  taskType?: AuditTaskType;
}
const AuditTaskMetadata = /*@__PURE__*/ __L.at(__c60, 1) as any as S.Schema<AuditTaskMetadata>;
export type AuditTaskMetadataList = AuditTaskMetadata[];
const AuditTaskMetadataList = /*@__PURE__*/ __L.at(__c60, 2);
export interface ListAuditTasksResponse {
  tasks?: AuditTaskMetadata[];
  nextToken?: string;
}
const ListAuditTasksResponse = /*@__PURE__*/ __L.at(
  __c60,
  3,
) as any as S.Schema<ListAuditTasksResponse>;
export interface ListAuthorizersRequest {
  pageSize?: number;
  marker?: string;
  ascendingOrder?: boolean;
  status?: AuthorizerStatus;
}
const ListAuthorizersRequest = /*@__PURE__*/ __L.at(
  __c60,
  4,
) as any as S.Schema<ListAuthorizersRequest>;
export interface AuthorizerSummary {
  authorizerName?: string;
  authorizerArn?: string;
}
const AuthorizerSummary = CreateAuthorizerResponse as any as S.Schema<AuthorizerSummary>;
export type Authorizers = AuthorizerSummary[];
const Authorizers = /*@__PURE__*/ __L.at(__c60, 5);
export interface ListAuthorizersResponse {
  authorizers?: AuthorizerSummary[];
  nextMarker?: string;
}
const ListAuthorizersResponse = /*@__PURE__*/ __L.at(
  __c60,
  6,
) as any as S.Schema<ListAuthorizersResponse>;
export type RegistryMaxResults = number;
export interface ListBillingGroupsRequest {
  nextToken?: string;
  maxResults?: number;
  namePrefixFilter?: string;
}
const ListBillingGroupsRequest = /*@__PURE__*/ __L.at(
  __c60,
  7,
) as any as S.Schema<ListBillingGroupsRequest>;
export type BillingGroupNameAndArnList = GroupNameAndArn[];
const BillingGroupNameAndArnList =
  ThingGroupNameAndArnList as any as S.Schema<BillingGroupNameAndArnList>;
export interface ListBillingGroupsResponse {
  billingGroups?: GroupNameAndArn[];
  nextToken?: string;
}
const ListBillingGroupsResponse = /*@__PURE__*/ __L.at(
  __c61,
  0,
) as any as S.Schema<ListBillingGroupsResponse>;
export interface ListCACertificatesRequest {
  pageSize?: number;
  marker?: string;
  ascendingOrder?: boolean;
  templateName?: string;
}
const ListCACertificatesRequest = /*@__PURE__*/ __L.at(
  __c61,
  1,
) as any as S.Schema<ListCACertificatesRequest>;
export interface CACertificate {
  certificateArn?: string;
  certificateId?: string;
  status?: CACertificateStatus;
  creationDate?: Date;
}
const CACertificate = /*@__PURE__*/ __L.at(__c61, 2) as any as S.Schema<CACertificate>;
export type CACertificates = CACertificate[];
const CACertificates = /*@__PURE__*/ __L.at(__c61, 3);
export interface ListCACertificatesResponse {
  certificates?: CACertificate[];
  nextMarker?: string;
}
const ListCACertificatesResponse = /*@__PURE__*/ __L.at(
  __c61,
  4,
) as any as S.Schema<ListCACertificatesResponse>;
export interface ListCertificateProvidersRequest {
  nextToken?: string;
  ascendingOrder?: boolean;
}
const ListCertificateProvidersRequest = /*@__PURE__*/ __L.at(
  __c61,
  5,
) as any as S.Schema<ListCertificateProvidersRequest>;
export interface CertificateProviderSummary {
  certificateProviderName?: string;
  certificateProviderArn?: string;
}
const CertificateProviderSummary =
  CreateCertificateProviderResponse as any as S.Schema<CertificateProviderSummary>;
export type CertificateProviders = CertificateProviderSummary[];
const CertificateProviders = /*@__PURE__*/ __L.at(__c61, 6);
export interface ListCertificateProvidersResponse {
  certificateProviders?: CertificateProviderSummary[];
  nextToken?: string;
}
const ListCertificateProvidersResponse = /*@__PURE__*/ __L.at(
  __c61,
  7,
) as any as S.Schema<ListCertificateProvidersResponse>;
export interface ListCertificatesRequest {
  pageSize?: number;
  marker?: string;
  ascendingOrder?: boolean;
}
const ListCertificatesRequest = /*@__PURE__*/ __L.at(
  __c62,
  0,
) as any as S.Schema<ListCertificatesRequest>;
export interface Certificate {
  certificateArn?: string;
  certificateId?: string;
  status?: CertificateStatus;
  certificateMode?: CertificateMode;
  creationDate?: Date;
}
const Certificate = /*@__PURE__*/ __L.at(__c62, 1) as any as S.Schema<Certificate>;
export type Certificates = Certificate[];
const Certificates = /*@__PURE__*/ __L.at(__c62, 2);
export interface ListCertificatesResponse {
  certificates?: Certificate[];
  nextMarker?: string;
}
const ListCertificatesResponse = /*@__PURE__*/ __L.at(
  __c62,
  3,
) as any as S.Schema<ListCertificatesResponse>;
export interface ListCertificatesByCARequest {
  caCertificateId: string;
  pageSize?: number;
  marker?: string;
  ascendingOrder?: boolean;
}
const ListCertificatesByCARequest = /*@__PURE__*/ __L.at(
  __c62,
  4,
) as any as S.Schema<ListCertificatesByCARequest>;
export interface ListCertificatesByCAResponse {
  certificates?: Certificate[];
  nextMarker?: string;
}
const ListCertificatesByCAResponse = /*@__PURE__*/ __L.at(
  __c62,
  5,
) as any as S.Schema<ListCertificatesByCAResponse>;
export type CommandMaxResults = number;
export type SortOrder = "ASCENDING" | "DESCENDING" | (string & {});
const SortOrder = S.String;

export interface TimeFilter {
  after?: string;
  before?: string;
}
const TimeFilter = /*@__PURE__*/ __L.at(__c62, 6) as any as S.Schema<TimeFilter>;
export interface ListCommandExecutionsRequest {
  maxResults?: number;
  nextToken?: string;
  namespace?: CommandNamespace;
  status?: CommandExecutionStatus;
  sortOrder?: SortOrder;
  startedTimeFilter?: TimeFilter;
  completedTimeFilter?: TimeFilter;
  targetArn?: string;
  commandArn?: string;
}
const ListCommandExecutionsRequest = /*@__PURE__*/ __L.at(
  __c62,
  7,
) as any as S.Schema<ListCommandExecutionsRequest>;
export interface CommandExecutionSummary {
  commandArn?: string;
  executionId?: string;
  targetArn?: string;
  status?: CommandExecutionStatus;
  createdAt?: Date;
  startedAt?: Date;
  completedAt?: Date;
}
const CommandExecutionSummary = /*@__PURE__*/ __L.at(
  __c63,
  0,
) as any as S.Schema<CommandExecutionSummary>;
export type CommandExecutionSummaryList = CommandExecutionSummary[];
const CommandExecutionSummaryList = /*@__PURE__*/ __L.at(__c63, 1);
export interface ListCommandExecutionsResponse {
  commandExecutions?: CommandExecutionSummary[];
  nextToken?: string;
}
const ListCommandExecutionsResponse = /*@__PURE__*/ __L.at(
  __c63,
  2,
) as any as S.Schema<ListCommandExecutionsResponse>;
export interface ListCommandsRequest {
  maxResults?: number;
  nextToken?: string;
  namespace?: CommandNamespace;
  commandParameterName?: string;
  sortOrder?: SortOrder;
}
const ListCommandsRequest = /*@__PURE__*/ __L.at(__c63, 3) as any as S.Schema<ListCommandsRequest>;
export interface CommandSummary {
  commandArn?: string;
  commandId?: string;
  displayName?: string;
  deprecated?: boolean;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  pendingDeletion?: boolean;
}
const CommandSummary = /*@__PURE__*/ __L.at(__c63, 4) as any as S.Schema<CommandSummary>;
export type CommandSummaryList = CommandSummary[];
const CommandSummaryList = /*@__PURE__*/ __L.at(__c63, 5);
export interface ListCommandsResponse {
  commands?: CommandSummary[];
  nextToken?: string;
}
const ListCommandsResponse = /*@__PURE__*/ __L.at(
  __c63,
  6,
) as any as S.Schema<ListCommandsResponse>;
export interface ListCustomMetricsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListCustomMetricsRequest = /*@__PURE__*/ __L.at(
  __c63,
  7,
) as any as S.Schema<ListCustomMetricsRequest>;
export type MetricNames = string[];
const MetricNames = JobTargets as any as S.Schema<MetricNames>;
export interface ListCustomMetricsResponse {
  metricNames?: string[];
  nextToken?: string;
}
const ListCustomMetricsResponse = /*@__PURE__*/ __L.at(
  __c64,
  0,
) as any as S.Schema<ListCustomMetricsResponse>;
export interface ListDetectMitigationActionsExecutionsRequest {
  taskId?: string;
  violationId?: string;
  thingName?: string;
  startTime?: Date;
  endTime?: Date;
  maxResults?: number;
  nextToken?: string;
}
const ListDetectMitigationActionsExecutionsRequest = /*@__PURE__*/ __L.at(
  __c64,
  1,
) as any as S.Schema<ListDetectMitigationActionsExecutionsRequest>;
export type DetectMitigationActionExecutionStatus =
  | "IN_PROGRESS"
  | "SUCCESSFUL"
  | "FAILED"
  | "SKIPPED"
  | (string & {});
const DetectMitigationActionExecutionStatus = S.String;

export type DetectMitigationActionExecutionErrorCode = string;
export interface DetectMitigationActionExecution {
  taskId?: string;
  violationId?: string;
  actionName?: string;
  thingName?: string;
  executionStartDate?: Date;
  executionEndDate?: Date;
  status?: DetectMitigationActionExecutionStatus;
  errorCode?: string;
  message?: string;
}
const DetectMitigationActionExecution = /*@__PURE__*/ __L.at(
  __c64,
  2,
) as any as S.Schema<DetectMitigationActionExecution>;
export type DetectMitigationActionExecutionList = DetectMitigationActionExecution[];
const DetectMitigationActionExecutionList = /*@__PURE__*/ __L.at(__c64, 3);
export interface ListDetectMitigationActionsExecutionsResponse {
  actionsExecutions?: DetectMitigationActionExecution[];
  nextToken?: string;
}
const ListDetectMitigationActionsExecutionsResponse = /*@__PURE__*/ __L.at(
  __c64,
  4,
) as any as S.Schema<ListDetectMitigationActionsExecutionsResponse>;
export interface ListDetectMitigationActionsTasksRequest {
  maxResults?: number;
  nextToken?: string;
  startTime: Date;
  endTime: Date;
}
const ListDetectMitigationActionsTasksRequest = /*@__PURE__*/ __L.at(
  __c64,
  5,
) as any as S.Schema<ListDetectMitigationActionsTasksRequest>;
export type DetectMitigationActionsTaskSummaryList = DetectMitigationActionsTaskSummary[];
const DetectMitigationActionsTaskSummaryList = /*@__PURE__*/ __L.at(__c64, 6);
export interface ListDetectMitigationActionsTasksResponse {
  tasks?: DetectMitigationActionsTaskSummary[];
  nextToken?: string;
}
const ListDetectMitigationActionsTasksResponse = /*@__PURE__*/ __L.at(
  __c64,
  7,
) as any as S.Schema<ListDetectMitigationActionsTasksResponse>;
export interface ListDimensionsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListDimensionsRequest = /*@__PURE__*/ __L.at(
  __c65,
  0,
) as any as S.Schema<ListDimensionsRequest>;
export type DimensionNames = string[];
const DimensionNames = JobTargets as any as S.Schema<DimensionNames>;
export interface ListDimensionsResponse {
  dimensionNames?: string[];
  nextToken?: string;
}
const ListDimensionsResponse = /*@__PURE__*/ __L.at(
  __c65,
  1,
) as any as S.Schema<ListDimensionsResponse>;
export interface ListDomainConfigurationsRequest {
  marker?: string;
  pageSize?: number;
  serviceType?: ServiceType;
}
const ListDomainConfigurationsRequest = /*@__PURE__*/ __L.at(
  __c65,
  2,
) as any as S.Schema<ListDomainConfigurationsRequest>;
export interface DomainConfigurationSummary {
  domainConfigurationName?: string;
  domainConfigurationArn?: string;
  serviceType?: ServiceType;
}
const DomainConfigurationSummary = /*@__PURE__*/ __L.at(
  __c65,
  3,
) as any as S.Schema<DomainConfigurationSummary>;
export type DomainConfigurations = DomainConfigurationSummary[];
const DomainConfigurations = /*@__PURE__*/ __L.at(__c65, 4);
export interface ListDomainConfigurationsResponse {
  domainConfigurations?: DomainConfigurationSummary[];
  nextMarker?: string;
}
const ListDomainConfigurationsResponse = /*@__PURE__*/ __L.at(
  __c65,
  5,
) as any as S.Schema<ListDomainConfigurationsResponse>;
export interface ListFleetMetricsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListFleetMetricsRequest = /*@__PURE__*/ __L.at(
  __c65,
  6,
) as any as S.Schema<ListFleetMetricsRequest>;
export interface FleetMetricNameAndArn {
  metricName?: string;
  metricArn?: string;
}
const FleetMetricNameAndArn = /*@__PURE__*/ __L.at(
  __c65,
  7,
) as any as S.Schema<FleetMetricNameAndArn>;
export type FleetMetricNameAndArnList = FleetMetricNameAndArn[];
const FleetMetricNameAndArnList = /*@__PURE__*/ __L.at(__c66, 0);
export interface ListFleetMetricsResponse {
  fleetMetrics?: FleetMetricNameAndArn[];
  nextToken?: string;
}
const ListFleetMetricsResponse = /*@__PURE__*/ __L.at(
  __c66,
  1,
) as any as S.Schema<ListFleetMetricsResponse>;
export type QueryMaxResults = number;
export interface ListIndicesRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListIndicesRequest = /*@__PURE__*/ __L.at(__c66, 2) as any as S.Schema<ListIndicesRequest>;
export type IndexNamesList = string[];
const IndexNamesList = JobTargets as any as S.Schema<IndexNamesList>;
export interface ListIndicesResponse {
  indexNames?: string[];
  nextToken?: string;
}
const ListIndicesResponse = /*@__PURE__*/ __L.at(__c66, 3) as any as S.Schema<ListIndicesResponse>;
export type LaserMaxResults = number;
export interface ListJobExecutionsForJobRequest {
  jobId: string;
  status?: JobExecutionStatus;
  maxResults?: number;
  nextToken?: string;
}
const ListJobExecutionsForJobRequest = /*@__PURE__*/ __L.at(
  __c66,
  4,
) as any as S.Schema<ListJobExecutionsForJobRequest>;
export type RetryAttempt = number;
export interface JobExecutionSummary {
  status?: JobExecutionStatus;
  queuedAt?: Date;
  startedAt?: Date;
  lastUpdatedAt?: Date;
  executionNumber?: number;
  retryAttempt?: number;
}
const JobExecutionSummary = /*@__PURE__*/ __L.at(__c66, 5) as any as S.Schema<JobExecutionSummary>;
export interface JobExecutionSummaryForJob {
  thingArn?: string;
  jobExecutionSummary?: JobExecutionSummary;
}
const JobExecutionSummaryForJob = /*@__PURE__*/ __L.at(
  __c66,
  6,
) as any as S.Schema<JobExecutionSummaryForJob>;
export type JobExecutionSummaryForJobList = JobExecutionSummaryForJob[];
const JobExecutionSummaryForJobList = /*@__PURE__*/ __L.at(__c66, 7);
export interface ListJobExecutionsForJobResponse {
  executionSummaries?: JobExecutionSummaryForJob[];
  nextToken?: string;
}
const ListJobExecutionsForJobResponse = /*@__PURE__*/ __L.at(
  __c67,
  0,
) as any as S.Schema<ListJobExecutionsForJobResponse>;
export interface ListJobExecutionsForThingRequest {
  thingName: string;
  status?: JobExecutionStatus;
  namespaceId?: string;
  maxResults?: number;
  nextToken?: string;
  jobId?: string;
}
const ListJobExecutionsForThingRequest = /*@__PURE__*/ __L.at(
  __c67,
  1,
) as any as S.Schema<ListJobExecutionsForThingRequest>;
export interface JobExecutionSummaryForThing {
  jobId?: string;
  jobExecutionSummary?: JobExecutionSummary;
}
const JobExecutionSummaryForThing = /*@__PURE__*/ __L.at(
  __c67,
  2,
) as any as S.Schema<JobExecutionSummaryForThing>;
export type JobExecutionSummaryForThingList = JobExecutionSummaryForThing[];
const JobExecutionSummaryForThingList = /*@__PURE__*/ __L.at(__c67, 3);
export interface ListJobExecutionsForThingResponse {
  executionSummaries?: JobExecutionSummaryForThing[];
  nextToken?: string;
}
const ListJobExecutionsForThingResponse = /*@__PURE__*/ __L.at(
  __c67,
  4,
) as any as S.Schema<ListJobExecutionsForThingResponse>;
export interface ListJobsRequest {
  status?: JobStatus;
  targetSelection?: TargetSelection;
  maxResults?: number;
  nextToken?: string;
  thingGroupName?: string;
  thingGroupId?: string;
  namespaceId?: string;
}
const ListJobsRequest = /*@__PURE__*/ __L.at(__c67, 5) as any as S.Schema<ListJobsRequest>;
export interface JobSummary {
  jobArn?: string;
  jobId?: string;
  thingGroupId?: string;
  targetSelection?: TargetSelection;
  status?: JobStatus;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  completedAt?: Date;
  isConcurrent?: boolean;
}
const JobSummary = /*@__PURE__*/ __L.at(__c67, 6) as any as S.Schema<JobSummary>;
export type JobSummaryList = JobSummary[];
const JobSummaryList = /*@__PURE__*/ __L.at(__c67, 7);
export interface ListJobsResponse {
  jobs?: JobSummary[];
  nextToken?: string;
}
const ListJobsResponse = /*@__PURE__*/ __L.at(__c68, 0) as any as S.Schema<ListJobsResponse>;
export interface ListJobTemplatesRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListJobTemplatesRequest = /*@__PURE__*/ __L.at(
  __c68,
  1,
) as any as S.Schema<ListJobTemplatesRequest>;
export interface JobTemplateSummary {
  jobTemplateArn?: string;
  jobTemplateId?: string;
  description?: string;
  createdAt?: Date;
}
const JobTemplateSummary = /*@__PURE__*/ __L.at(__c68, 2) as any as S.Schema<JobTemplateSummary>;
export type JobTemplateSummaryList = JobTemplateSummary[];
const JobTemplateSummaryList = /*@__PURE__*/ __L.at(__c68, 3);
export interface ListJobTemplatesResponse {
  jobTemplates?: JobTemplateSummary[];
  nextToken?: string;
}
const ListJobTemplatesResponse = /*@__PURE__*/ __L.at(
  __c68,
  4,
) as any as S.Schema<ListJobTemplatesResponse>;
export interface ListManagedJobTemplatesRequest {
  templateName?: string;
  maxResults?: number;
  nextToken?: string;
}
const ListManagedJobTemplatesRequest = /*@__PURE__*/ __L.at(
  __c68,
  5,
) as any as S.Schema<ListManagedJobTemplatesRequest>;
export interface ManagedJobTemplateSummary {
  templateArn?: string;
  templateName?: string;
  description?: string;
  environments?: string[];
  templateVersion?: string;
}
const ManagedJobTemplateSummary = /*@__PURE__*/ __L.at(
  __c68,
  6,
) as any as S.Schema<ManagedJobTemplateSummary>;
export type ManagedJobTemplatesSummaryList = ManagedJobTemplateSummary[];
const ManagedJobTemplatesSummaryList = /*@__PURE__*/ __L.at(__c68, 7);
export interface ListManagedJobTemplatesResponse {
  managedJobTemplates?: ManagedJobTemplateSummary[];
  nextToken?: string;
}
const ListManagedJobTemplatesResponse = /*@__PURE__*/ __L.at(
  __c69,
  0,
) as any as S.Schema<ListManagedJobTemplatesResponse>;
export interface ListMetricValuesRequest {
  thingName: string;
  metricName: string;
  dimensionName?: string;
  dimensionValueOperator?: DimensionValueOperator;
  startTime: Date;
  endTime: Date;
  maxResults?: number;
  nextToken?: string;
}
const ListMetricValuesRequest = /*@__PURE__*/ __L.at(
  __c69,
  1,
) as any as S.Schema<ListMetricValuesRequest>;
export interface MetricDatum {
  timestamp?: Date;
  value?: MetricValue;
}
const MetricDatum = /*@__PURE__*/ __L.at(__c69, 2) as any as S.Schema<MetricDatum>;
export type MetricDatumList = MetricDatum[];
const MetricDatumList = /*@__PURE__*/ __L.at(__c69, 3);
export interface ListMetricValuesResponse {
  metricDatumList?: MetricDatum[];
  nextToken?: string;
}
const ListMetricValuesResponse = /*@__PURE__*/ __L.at(
  __c69,
  4,
) as any as S.Schema<ListMetricValuesResponse>;
export interface ListMitigationActionsRequest {
  actionType?: MitigationActionType;
  maxResults?: number;
  nextToken?: string;
}
const ListMitigationActionsRequest = /*@__PURE__*/ __L.at(
  __c69,
  5,
) as any as S.Schema<ListMitigationActionsRequest>;
export interface MitigationActionIdentifier {
  actionName?: string;
  actionArn?: string;
  creationDate?: Date;
}
const MitigationActionIdentifier = /*@__PURE__*/ __L.at(
  __c69,
  6,
) as any as S.Schema<MitigationActionIdentifier>;
export type MitigationActionIdentifierList = MitigationActionIdentifier[];
const MitigationActionIdentifierList = /*@__PURE__*/ __L.at(__c69, 7);
export interface ListMitigationActionsResponse {
  actionIdentifiers?: MitigationActionIdentifier[];
  nextToken?: string;
}
const ListMitigationActionsResponse = /*@__PURE__*/ __L.at(
  __c70,
  0,
) as any as S.Schema<ListMitigationActionsResponse>;
export interface ListOTAUpdatesRequest {
  maxResults?: number;
  nextToken?: string;
  otaUpdateStatus?: OTAUpdateStatus;
}
const ListOTAUpdatesRequest = /*@__PURE__*/ __L.at(
  __c70,
  1,
) as any as S.Schema<ListOTAUpdatesRequest>;
export interface OTAUpdateSummary {
  otaUpdateId?: string;
  otaUpdateArn?: string;
  creationDate?: Date;
}
const OTAUpdateSummary = /*@__PURE__*/ __L.at(__c70, 2) as any as S.Schema<OTAUpdateSummary>;
export type OTAUpdatesSummary = OTAUpdateSummary[];
const OTAUpdatesSummary = /*@__PURE__*/ __L.at(__c70, 3);
export interface ListOTAUpdatesResponse {
  otaUpdates?: OTAUpdateSummary[];
  nextToken?: string;
}
const ListOTAUpdatesResponse = /*@__PURE__*/ __L.at(
  __c70,
  4,
) as any as S.Schema<ListOTAUpdatesResponse>;
export interface ListOutgoingCertificatesRequest {
  pageSize?: number;
  marker?: string;
  ascendingOrder?: boolean;
}
const ListOutgoingCertificatesRequest = /*@__PURE__*/ __L.at(
  __c70,
  5,
) as any as S.Schema<ListOutgoingCertificatesRequest>;
export interface OutgoingCertificate {
  certificateArn?: string;
  certificateId?: string;
  transferredTo?: string;
  transferDate?: Date;
  transferMessage?: string;
  creationDate?: Date;
}
const OutgoingCertificate = /*@__PURE__*/ __L.at(__c70, 6) as any as S.Schema<OutgoingCertificate>;
export type OutgoingCertificates = OutgoingCertificate[];
const OutgoingCertificates = /*@__PURE__*/ __L.at(__c70, 7);
export interface ListOutgoingCertificatesResponse {
  outgoingCertificates?: OutgoingCertificate[];
  nextMarker?: string;
}
const ListOutgoingCertificatesResponse = /*@__PURE__*/ __L.at(
  __c71,
  0,
) as any as S.Schema<ListOutgoingCertificatesResponse>;
export type PackageCatalogMaxResults = number;
export interface ListPackagesRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListPackagesRequest = /*@__PURE__*/ __L.at(__c71, 1) as any as S.Schema<ListPackagesRequest>;
export interface PackageSummary {
  packageName?: string;
  defaultVersionName?: string;
  creationDate?: Date;
  lastModifiedDate?: Date;
}
const PackageSummary = /*@__PURE__*/ __L.at(__c71, 2) as any as S.Schema<PackageSummary>;
export type PackageSummaryList = PackageSummary[];
const PackageSummaryList = /*@__PURE__*/ __L.at(__c71, 3);
export interface ListPackagesResponse {
  packageSummaries?: PackageSummary[];
  nextToken?: string;
}
const ListPackagesResponse = /*@__PURE__*/ __L.at(
  __c71,
  4,
) as any as S.Schema<ListPackagesResponse>;
export interface ListPackageVersionsRequest {
  packageName: string;
  status?: PackageVersionStatus;
  maxResults?: number;
  nextToken?: string;
}
const ListPackageVersionsRequest = /*@__PURE__*/ __L.at(
  __c71,
  5,
) as any as S.Schema<ListPackageVersionsRequest>;
export interface PackageVersionSummary {
  packageName?: string;
  versionName?: string;
  status?: PackageVersionStatus;
  creationDate?: Date;
  lastModifiedDate?: Date;
}
const PackageVersionSummary = /*@__PURE__*/ __L.at(
  __c71,
  6,
) as any as S.Schema<PackageVersionSummary>;
export type PackageVersionSummaryList = PackageVersionSummary[];
const PackageVersionSummaryList = /*@__PURE__*/ __L.at(__c71, 7);
export interface ListPackageVersionsResponse {
  packageVersionSummaries?: PackageVersionSummary[];
  nextToken?: string;
}
const ListPackageVersionsResponse = /*@__PURE__*/ __L.at(
  __c72,
  0,
) as any as S.Schema<ListPackageVersionsResponse>;
export interface ListPoliciesRequest {
  marker?: string;
  pageSize?: number;
  ascendingOrder?: boolean;
}
const ListPoliciesRequest = /*@__PURE__*/ __L.at(__c72, 1) as any as S.Schema<ListPoliciesRequest>;
export interface ListPoliciesResponse {
  policies?: Policy[];
  nextMarker?: string;
}
const ListPoliciesResponse = /*@__PURE__*/ __L.at(
  __c72,
  2,
) as any as S.Schema<ListPoliciesResponse>;
export interface ListPolicyPrincipalsRequest {
  policyName: string;
  marker?: string;
  pageSize?: number;
  ascendingOrder?: boolean;
}
const ListPolicyPrincipalsRequest = /*@__PURE__*/ __L.at(
  __c72,
  3,
) as any as S.Schema<ListPolicyPrincipalsRequest>;
export type PrincipalArn = string;
export type Principals = string[];
const Principals = JobTargets as any as S.Schema<Principals>;
export interface ListPolicyPrincipalsResponse {
  principals?: string[];
  nextMarker?: string;
}
const ListPolicyPrincipalsResponse = /*@__PURE__*/ __L.at(
  __c72,
  4,
) as any as S.Schema<ListPolicyPrincipalsResponse>;
export interface ListPolicyVersionsRequest {
  policyName: string;
}
const ListPolicyVersionsRequest = /*@__PURE__*/ __L.at(
  __c72,
  5,
) as any as S.Schema<ListPolicyVersionsRequest>;
export interface PolicyVersion {
  versionId?: string;
  isDefaultVersion?: boolean;
  createDate?: Date;
}
const PolicyVersion = /*@__PURE__*/ __L.at(__c72, 6) as any as S.Schema<PolicyVersion>;
export type PolicyVersions = PolicyVersion[];
const PolicyVersions = /*@__PURE__*/ __L.at(__c72, 7);
export interface ListPolicyVersionsResponse {
  policyVersions?: PolicyVersion[];
}
const ListPolicyVersionsResponse = /*@__PURE__*/ __L.at(
  __c73,
  0,
) as any as S.Schema<ListPolicyVersionsResponse>;
export interface ListPrincipalPoliciesRequest {
  principal: string;
  marker?: string;
  pageSize?: number;
  ascendingOrder?: boolean;
}
const ListPrincipalPoliciesRequest = /*@__PURE__*/ __L.at(
  __c73,
  1,
) as any as S.Schema<ListPrincipalPoliciesRequest>;
export interface ListPrincipalPoliciesResponse {
  policies?: Policy[];
  nextMarker?: string;
}
const ListPrincipalPoliciesResponse =
  ListAttachedPoliciesResponse as any as S.Schema<ListPrincipalPoliciesResponse>;
export interface ListPrincipalThingsRequest {
  nextToken?: string;
  maxResults?: number;
  principal: string;
}
const ListPrincipalThingsRequest = /*@__PURE__*/ __L.at(
  __c73,
  2,
) as any as S.Schema<ListPrincipalThingsRequest>;
export type ThingNameList = string[];
const ThingNameList = JobTargets as any as S.Schema<ThingNameList>;
export interface ListPrincipalThingsResponse {
  things?: string[];
  nextToken?: string;
}
const ListPrincipalThingsResponse = /*@__PURE__*/ __L.at(
  __c73,
  3,
) as any as S.Schema<ListPrincipalThingsResponse>;
export interface ListPrincipalThingsV2Request {
  nextToken?: string;
  maxResults?: number;
  principal: string;
  thingPrincipalType?: ThingPrincipalType;
}
const ListPrincipalThingsV2Request = /*@__PURE__*/ __L.at(
  __c73,
  4,
) as any as S.Schema<ListPrincipalThingsV2Request>;
export interface PrincipalThingObject {
  thingName: string;
  thingPrincipalType?: ThingPrincipalType;
}
const PrincipalThingObject = /*@__PURE__*/ __L.at(
  __c73,
  5,
) as any as S.Schema<PrincipalThingObject>;
export type PrincipalThingObjects = PrincipalThingObject[];
const PrincipalThingObjects = /*@__PURE__*/ __L.at(__c73, 6);
export interface ListPrincipalThingsV2Response {
  principalThingObjects?: PrincipalThingObject[];
  nextToken?: string;
}
const ListPrincipalThingsV2Response = /*@__PURE__*/ __L.at(
  __c73,
  7,
) as any as S.Schema<ListPrincipalThingsV2Response>;
export interface ListProvisioningTemplatesRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListProvisioningTemplatesRequest = /*@__PURE__*/ __L.at(
  __c74,
  0,
) as any as S.Schema<ListProvisioningTemplatesRequest>;
export interface ProvisioningTemplateSummary {
  templateArn?: string;
  templateName?: string;
  description?: string;
  creationDate?: Date;
  lastModifiedDate?: Date;
  enabled?: boolean;
  type?: TemplateType;
}
const ProvisioningTemplateSummary = /*@__PURE__*/ __L.at(
  __c74,
  1,
) as any as S.Schema<ProvisioningTemplateSummary>;
export type ProvisioningTemplateListing = ProvisioningTemplateSummary[];
const ProvisioningTemplateListing = /*@__PURE__*/ __L.at(__c74, 2);
export interface ListProvisioningTemplatesResponse {
  templates?: ProvisioningTemplateSummary[];
  nextToken?: string;
}
const ListProvisioningTemplatesResponse = /*@__PURE__*/ __L.at(
  __c74,
  3,
) as any as S.Schema<ListProvisioningTemplatesResponse>;
export interface ListProvisioningTemplateVersionsRequest {
  templateName: string;
  maxResults?: number;
  nextToken?: string;
}
const ListProvisioningTemplateVersionsRequest = /*@__PURE__*/ __L.at(
  __c74,
  4,
) as any as S.Schema<ListProvisioningTemplateVersionsRequest>;
export interface ProvisioningTemplateVersionSummary {
  versionId?: number;
  creationDate?: Date;
  isDefaultVersion?: boolean;
}
const ProvisioningTemplateVersionSummary = /*@__PURE__*/ __L.at(
  __c74,
  5,
) as any as S.Schema<ProvisioningTemplateVersionSummary>;
export type ProvisioningTemplateVersionListing = ProvisioningTemplateVersionSummary[];
const ProvisioningTemplateVersionListing = /*@__PURE__*/ __L.at(__c74, 6);
export interface ListProvisioningTemplateVersionsResponse {
  versions?: ProvisioningTemplateVersionSummary[];
  nextToken?: string;
}
const ListProvisioningTemplateVersionsResponse = /*@__PURE__*/ __L.at(
  __c74,
  7,
) as any as S.Schema<ListProvisioningTemplateVersionsResponse>;
export interface ListRelatedResourcesForAuditFindingRequest {
  findingId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListRelatedResourcesForAuditFindingRequest = /*@__PURE__*/ __L.at(
  __c75,
  0,
) as any as S.Schema<ListRelatedResourcesForAuditFindingRequest>;
export interface ListRelatedResourcesForAuditFindingResponse {
  relatedResources?: RelatedResource[];
  nextToken?: string;
}
const ListRelatedResourcesForAuditFindingResponse = /*@__PURE__*/ __L.at(
  __c75,
  1,
) as any as S.Schema<ListRelatedResourcesForAuditFindingResponse>;
export interface ListRoleAliasesRequest {
  pageSize?: number;
  marker?: string;
  ascendingOrder?: boolean;
}
const ListRoleAliasesRequest = /*@__PURE__*/ __L.at(
  __c75,
  2,
) as any as S.Schema<ListRoleAliasesRequest>;
export type RoleAliases = string[];
const RoleAliases = JobTargets as any as S.Schema<RoleAliases>;
export interface ListRoleAliasesResponse {
  roleAliases?: string[];
  nextMarker?: string;
}
const ListRoleAliasesResponse = /*@__PURE__*/ __L.at(
  __c75,
  3,
) as any as S.Schema<ListRoleAliasesResponse>;
export type SbomValidationResult = "FAILED" | "SUCCEEDED" | (string & {});
const SbomValidationResult = S.String;

export interface ListSbomValidationResultsRequest {
  packageName: string;
  versionName: string;
  validationResult?: SbomValidationResult;
  maxResults?: number;
  nextToken?: string;
}
const ListSbomValidationResultsRequest = /*@__PURE__*/ __L.at(
  __c75,
  4,
) as any as S.Schema<ListSbomValidationResultsRequest>;
export type SbomValidationErrorCode =
  | "INCOMPATIBLE_FORMAT"
  | "FILE_SIZE_LIMIT_EXCEEDED"
  | (string & {});
const SbomValidationErrorCode = S.String;

export type SbomValidationErrorMessage = string;
export interface SbomValidationResultSummary {
  fileName?: string;
  validationResult?: SbomValidationResult;
  errorCode?: SbomValidationErrorCode;
  errorMessage?: string;
}
const SbomValidationResultSummary = /*@__PURE__*/ __L.at(
  __c75,
  5,
) as any as S.Schema<SbomValidationResultSummary>;
export type SbomValidationResultSummaryList = SbomValidationResultSummary[];
const SbomValidationResultSummaryList = /*@__PURE__*/ __L.at(__c75, 6);
export interface ListSbomValidationResultsResponse {
  validationResultSummaries?: SbomValidationResultSummary[];
  nextToken?: string;
}
const ListSbomValidationResultsResponse = /*@__PURE__*/ __L.at(
  __c75,
  7,
) as any as S.Schema<ListSbomValidationResultsResponse>;
export interface ListScheduledAuditsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListScheduledAuditsRequest = /*@__PURE__*/ __L.at(
  __c76,
  0,
) as any as S.Schema<ListScheduledAuditsRequest>;
export interface ScheduledAuditMetadata {
  scheduledAuditName?: string;
  scheduledAuditArn?: string;
  frequency?: AuditFrequency;
  dayOfMonth?: string;
  dayOfWeek?: DayOfWeek;
}
const ScheduledAuditMetadata = /*@__PURE__*/ __L.at(
  __c76,
  1,
) as any as S.Schema<ScheduledAuditMetadata>;
export type ScheduledAuditMetadataList = ScheduledAuditMetadata[];
const ScheduledAuditMetadataList = /*@__PURE__*/ __L.at(__c76, 2);
export interface ListScheduledAuditsResponse {
  scheduledAudits?: ScheduledAuditMetadata[];
  nextToken?: string;
}
const ListScheduledAuditsResponse = /*@__PURE__*/ __L.at(
  __c76,
  3,
) as any as S.Schema<ListScheduledAuditsResponse>;
export interface ListSecurityProfilesRequest {
  nextToken?: string;
  maxResults?: number;
  dimensionName?: string;
  metricName?: string;
}
const ListSecurityProfilesRequest = /*@__PURE__*/ __L.at(
  __c76,
  4,
) as any as S.Schema<ListSecurityProfilesRequest>;
export interface SecurityProfileIdentifier {
  name: string;
  arn: string;
}
const SecurityProfileIdentifier = /*@__PURE__*/ __L.at(
  __c76,
  5,
) as any as S.Schema<SecurityProfileIdentifier>;
export type SecurityProfileIdentifiers = SecurityProfileIdentifier[];
const SecurityProfileIdentifiers = /*@__PURE__*/ __L.at(__c76, 6);
export interface ListSecurityProfilesResponse {
  securityProfileIdentifiers?: SecurityProfileIdentifier[];
  nextToken?: string;
}
const ListSecurityProfilesResponse = /*@__PURE__*/ __L.at(
  __c76,
  7,
) as any as S.Schema<ListSecurityProfilesResponse>;
export interface ListSecurityProfilesForTargetRequest {
  nextToken?: string;
  maxResults?: number;
  recursive?: boolean;
  securityProfileTargetArn: string;
}
const ListSecurityProfilesForTargetRequest = /*@__PURE__*/ __L.at(
  __c77,
  0,
) as any as S.Schema<ListSecurityProfilesForTargetRequest>;
export interface SecurityProfileTarget {
  arn: string;
}
const SecurityProfileTarget = /*@__PURE__*/ __L.at(
  __c77,
  1,
) as any as S.Schema<SecurityProfileTarget>;
export interface SecurityProfileTargetMapping {
  securityProfileIdentifier?: SecurityProfileIdentifier;
  target?: SecurityProfileTarget;
}
const SecurityProfileTargetMapping = /*@__PURE__*/ __L.at(
  __c77,
  2,
) as any as S.Schema<SecurityProfileTargetMapping>;
export type SecurityProfileTargetMappings = SecurityProfileTargetMapping[];
const SecurityProfileTargetMappings = /*@__PURE__*/ __L.at(__c77, 3);
export interface ListSecurityProfilesForTargetResponse {
  securityProfileTargetMappings?: SecurityProfileTargetMapping[];
  nextToken?: string;
}
const ListSecurityProfilesForTargetResponse = /*@__PURE__*/ __L.at(
  __c77,
  4,
) as any as S.Schema<ListSecurityProfilesForTargetResponse>;
export interface ListStreamsRequest {
  maxResults?: number;
  nextToken?: string;
  ascendingOrder?: boolean;
}
const ListStreamsRequest = /*@__PURE__*/ __L.at(__c77, 5) as any as S.Schema<ListStreamsRequest>;
export interface StreamSummary {
  streamId?: string;
  streamArn?: string;
  streamVersion?: number;
  description?: string;
}
const StreamSummary = /*@__PURE__*/ __L.at(__c77, 6) as any as S.Schema<StreamSummary>;
export type StreamsSummary = StreamSummary[];
const StreamsSummary = /*@__PURE__*/ __L.at(__c77, 7);
export interface ListStreamsResponse {
  streams?: StreamSummary[];
  nextToken?: string;
}
const ListStreamsResponse = /*@__PURE__*/ __L.at(__c78, 0) as any as S.Schema<ListStreamsResponse>;
export type ResourceArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
  nextToken?: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c78,
  1,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: Tag[];
  nextToken?: string;
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c78,
  2,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface ListTargetsForPolicyRequest {
  policyName: string;
  marker?: string;
  pageSize?: number;
}
const ListTargetsForPolicyRequest = /*@__PURE__*/ __L.at(
  __c78,
  3,
) as any as S.Schema<ListTargetsForPolicyRequest>;
export type PolicyTargets = string[];
const PolicyTargets = JobTargets as any as S.Schema<PolicyTargets>;
export interface ListTargetsForPolicyResponse {
  targets?: string[];
  nextMarker?: string;
}
const ListTargetsForPolicyResponse = /*@__PURE__*/ __L.at(
  __c78,
  4,
) as any as S.Schema<ListTargetsForPolicyResponse>;
export interface ListTargetsForSecurityProfileRequest {
  securityProfileName: string;
  nextToken?: string;
  maxResults?: number;
}
const ListTargetsForSecurityProfileRequest = /*@__PURE__*/ __L.at(
  __c78,
  5,
) as any as S.Schema<ListTargetsForSecurityProfileRequest>;
export type SecurityProfileTargets = SecurityProfileTarget[];
const SecurityProfileTargets = /*@__PURE__*/ __L.at(__c78, 6);
export interface ListTargetsForSecurityProfileResponse {
  securityProfileTargets?: SecurityProfileTarget[];
  nextToken?: string;
}
const ListTargetsForSecurityProfileResponse = /*@__PURE__*/ __L.at(
  __c78,
  7,
) as any as S.Schema<ListTargetsForSecurityProfileResponse>;
export type RecursiveWithoutDefault = boolean;
export interface ListThingGroupsRequest {
  nextToken?: string;
  maxResults?: number;
  parentGroup?: string;
  namePrefixFilter?: string;
  recursive?: boolean;
}
const ListThingGroupsRequest = /*@__PURE__*/ __L.at(
  __c79,
  0,
) as any as S.Schema<ListThingGroupsRequest>;
export interface ListThingGroupsResponse {
  thingGroups?: GroupNameAndArn[];
  nextToken?: string;
}
const ListThingGroupsResponse = /*@__PURE__*/ __L.at(
  __c79,
  1,
) as any as S.Schema<ListThingGroupsResponse>;
export interface ListThingGroupsForThingRequest {
  thingName: string;
  nextToken?: string;
  maxResults?: number;
}
const ListThingGroupsForThingRequest = /*@__PURE__*/ __L.at(
  __c79,
  2,
) as any as S.Schema<ListThingGroupsForThingRequest>;
export interface ListThingGroupsForThingResponse {
  thingGroups?: GroupNameAndArn[];
  nextToken?: string;
}
const ListThingGroupsForThingResponse = /*@__PURE__*/ __L.at(
  __c79,
  3,
) as any as S.Schema<ListThingGroupsForThingResponse>;
export interface ListThingPrincipalsRequest {
  nextToken?: string;
  maxResults?: number;
  thingName: string;
}
const ListThingPrincipalsRequest = /*@__PURE__*/ __L.at(
  __c79,
  4,
) as any as S.Schema<ListThingPrincipalsRequest>;
export interface ListThingPrincipalsResponse {
  principals?: string[];
  nextToken?: string;
}
const ListThingPrincipalsResponse = /*@__PURE__*/ __L.at(
  __c79,
  5,
) as any as S.Schema<ListThingPrincipalsResponse>;
export interface ListThingPrincipalsV2Request {
  nextToken?: string;
  maxResults?: number;
  thingName: string;
  thingPrincipalType?: ThingPrincipalType;
}
const ListThingPrincipalsV2Request = /*@__PURE__*/ __L.at(
  __c79,
  6,
) as any as S.Schema<ListThingPrincipalsV2Request>;
export interface ThingPrincipalObject {
  principal: string;
  thingPrincipalType?: ThingPrincipalType;
}
const ThingPrincipalObject = /*@__PURE__*/ __L.at(
  __c79,
  7,
) as any as S.Schema<ThingPrincipalObject>;
export type ThingPrincipalObjects = ThingPrincipalObject[];
const ThingPrincipalObjects = /*@__PURE__*/ __L.at(__c80, 0);
export interface ListThingPrincipalsV2Response {
  thingPrincipalObjects?: ThingPrincipalObject[];
  nextToken?: string;
}
const ListThingPrincipalsV2Response = /*@__PURE__*/ __L.at(
  __c80,
  1,
) as any as S.Schema<ListThingPrincipalsV2Response>;
export type ReportType = "ERRORS" | "RESULTS" | (string & {});
const ReportType = S.String;

export interface ListThingRegistrationTaskReportsRequest {
  taskId: string;
  reportType: ReportType;
  nextToken?: string;
  maxResults?: number;
}
const ListThingRegistrationTaskReportsRequest = /*@__PURE__*/ __L.at(
  __c80,
  2,
) as any as S.Schema<ListThingRegistrationTaskReportsRequest>;
export type S3FileUrl = string;
export type S3FileUrlList = string[];
const S3FileUrlList = JobTargets as any as S.Schema<S3FileUrlList>;
export interface ListThingRegistrationTaskReportsResponse {
  resourceLinks?: string[];
  reportType?: ReportType;
  nextToken?: string;
}
const ListThingRegistrationTaskReportsResponse = /*@__PURE__*/ __L.at(
  __c80,
  3,
) as any as S.Schema<ListThingRegistrationTaskReportsResponse>;
export interface ListThingRegistrationTasksRequest {
  nextToken?: string;
  maxResults?: number;
  status?: Status;
}
const ListThingRegistrationTasksRequest = /*@__PURE__*/ __L.at(
  __c80,
  4,
) as any as S.Schema<ListThingRegistrationTasksRequest>;
export type TaskIdList = string[];
const TaskIdList = JobTargets as any as S.Schema<TaskIdList>;
export interface ListThingRegistrationTasksResponse {
  taskIds?: string[];
  nextToken?: string;
}
const ListThingRegistrationTasksResponse = /*@__PURE__*/ __L.at(
  __c80,
  5,
) as any as S.Schema<ListThingRegistrationTasksResponse>;
export type UsePrefixAttributeValue = boolean;
export interface ListThingsRequest {
  nextToken?: string;
  maxResults?: number;
  attributeName?: string;
  attributeValue?: string;
  thingTypeName?: string;
  usePrefixAttributeValue?: boolean;
}
const ListThingsRequest = /*@__PURE__*/ __L.at(__c80, 6) as any as S.Schema<ListThingsRequest>;
export interface ThingAttribute {
  thingName?: string;
  thingTypeName?: string;
  thingArn?: string;
  attributes?: { [key: string]: string | undefined };
  version?: number;
}
const ThingAttribute = /*@__PURE__*/ __L.at(__c80, 7) as any as S.Schema<ThingAttribute>;
export type ThingAttributeList = ThingAttribute[];
const ThingAttributeList = /*@__PURE__*/ __L.at(__c81, 0);
export interface ListThingsResponse {
  things?: ThingAttribute[];
  nextToken?: string;
}
const ListThingsResponse = /*@__PURE__*/ __L.at(__c81, 1) as any as S.Schema<ListThingsResponse>;
export interface ListThingsInBillingGroupRequest {
  billingGroupName: string;
  nextToken?: string;
  maxResults?: number;
}
const ListThingsInBillingGroupRequest = /*@__PURE__*/ __L.at(
  __c81,
  2,
) as any as S.Schema<ListThingsInBillingGroupRequest>;
export interface ListThingsInBillingGroupResponse {
  things?: string[];
  nextToken?: string;
}
const ListThingsInBillingGroupResponse =
  ListPrincipalThingsResponse as any as S.Schema<ListThingsInBillingGroupResponse>;
export interface ListThingsInThingGroupRequest {
  thingGroupName: string;
  recursive?: boolean;
  nextToken?: string;
  maxResults?: number;
}
const ListThingsInThingGroupRequest = /*@__PURE__*/ __L.at(
  __c81,
  3,
) as any as S.Schema<ListThingsInThingGroupRequest>;
export interface ListThingsInThingGroupResponse {
  things?: string[];
  nextToken?: string;
}
const ListThingsInThingGroupResponse =
  ListPrincipalThingsResponse as any as S.Schema<ListThingsInThingGroupResponse>;
export interface ListThingTypesRequest {
  nextToken?: string;
  maxResults?: number;
  thingTypeName?: string;
}
const ListThingTypesRequest = /*@__PURE__*/ __L.at(
  __c81,
  4,
) as any as S.Schema<ListThingTypesRequest>;
export interface ThingTypeDefinition {
  thingTypeName?: string;
  thingTypeArn?: string;
  thingTypeProperties?: ThingTypeProperties;
  thingTypeMetadata?: ThingTypeMetadata;
}
const ThingTypeDefinition = /*@__PURE__*/ __L.at(__c81, 5) as any as S.Schema<ThingTypeDefinition>;
export type ThingTypeList = ThingTypeDefinition[];
const ThingTypeList = /*@__PURE__*/ __L.at(__c81, 6);
export interface ListThingTypesResponse {
  thingTypes?: ThingTypeDefinition[];
  nextToken?: string;
}
const ListThingTypesResponse = /*@__PURE__*/ __L.at(
  __c81,
  7,
) as any as S.Schema<ListThingTypesResponse>;
export type TopicRuleDestinationMaxResults = number;
export interface ListTopicRuleDestinationsRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListTopicRuleDestinationsRequest = /*@__PURE__*/ __L.at(
  __c82,
  0,
) as any as S.Schema<ListTopicRuleDestinationsRequest>;
export interface HttpUrlDestinationSummary {
  confirmationUrl?: string;
}
const HttpUrlDestinationSummary =
  HttpUrlDestinationProperties as any as S.Schema<HttpUrlDestinationSummary>;
export interface VpcDestinationSummary {
  subnetIds?: string[];
  securityGroups?: string[];
  vpcId?: string;
  roleArn?: string;
}
const VpcDestinationSummary = VpcDestinationProperties as any as S.Schema<VpcDestinationSummary>;
export interface InfluxDBDestinationSummary {
  endpoint?: string;
  influxDBVersion?: InfluxDBVersion;
  secretId?: string;
  secretType?: InfluxDBSecretType;
  secretKey?: string;
}
const InfluxDBDestinationSummary =
  InfluxDBDestinationProperties as any as S.Schema<InfluxDBDestinationSummary>;
export interface TopicRuleDestinationSummary {
  arn?: string;
  status?: TopicRuleDestinationStatus;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  statusReason?: string;
  httpUrlSummary?: HttpUrlDestinationSummary;
  vpcDestinationSummary?: VpcDestinationSummary;
  influxDBSummary?: InfluxDBDestinationSummary;
}
const TopicRuleDestinationSummary = /*@__PURE__*/ __L.at(
  __c82,
  1,
) as any as S.Schema<TopicRuleDestinationSummary>;
export type TopicRuleDestinationSummaries = TopicRuleDestinationSummary[];
const TopicRuleDestinationSummaries = /*@__PURE__*/ __L.at(__c82, 2);
export interface ListTopicRuleDestinationsResponse {
  destinationSummaries?: TopicRuleDestinationSummary[];
  nextToken?: string;
}
const ListTopicRuleDestinationsResponse = /*@__PURE__*/ __L.at(
  __c82,
  3,
) as any as S.Schema<ListTopicRuleDestinationsResponse>;
export type Topic = string;
export type TopicRuleMaxResults = number;
export interface ListTopicRulesRequest {
  topic?: string;
  maxResults?: number;
  nextToken?: string;
  ruleDisabled?: boolean;
}
const ListTopicRulesRequest = /*@__PURE__*/ __L.at(
  __c82,
  4,
) as any as S.Schema<ListTopicRulesRequest>;
export interface TopicRuleListItem {
  ruleArn?: string;
  ruleName?: string;
  topicPattern?: string;
  createdAt?: Date;
  ruleDisabled?: boolean;
}
const TopicRuleListItem = /*@__PURE__*/ __L.at(__c82, 5) as any as S.Schema<TopicRuleListItem>;
export type TopicRuleList = TopicRuleListItem[];
const TopicRuleList = /*@__PURE__*/ __L.at(__c82, 6);
export interface ListTopicRulesResponse {
  rules?: TopicRuleListItem[];
  nextToken?: string;
}
const ListTopicRulesResponse = /*@__PURE__*/ __L.at(
  __c82,
  7,
) as any as S.Schema<ListTopicRulesResponse>;
export type SkyfallMaxResults = number;
export interface ListV2LoggingLevelsRequest {
  targetType?: LogTargetType;
  nextToken?: string;
  maxResults?: number;
}
const ListV2LoggingLevelsRequest = /*@__PURE__*/ __L.at(
  __c83,
  0,
) as any as S.Schema<ListV2LoggingLevelsRequest>;
export interface LogTarget {
  targetType: LogTargetType;
  targetName?: string;
}
const LogTarget = /*@__PURE__*/ __L.at(__c83, 1) as any as S.Schema<LogTarget>;
export interface LogTargetConfiguration {
  logTarget?: LogTarget;
  logLevel?: LogLevel;
}
const LogTargetConfiguration = /*@__PURE__*/ __L.at(
  __c83,
  2,
) as any as S.Schema<LogTargetConfiguration>;
export type LogTargetConfigurations = LogTargetConfiguration[];
const LogTargetConfigurations = /*@__PURE__*/ __L.at(__c83, 3);
export interface ListV2LoggingLevelsResponse {
  logTargetConfigurations?: LogTargetConfiguration[];
  nextToken?: string;
}
const ListV2LoggingLevelsResponse = /*@__PURE__*/ __L.at(
  __c83,
  4,
) as any as S.Schema<ListV2LoggingLevelsResponse>;
export interface ListViolationEventsRequest {
  startTime: Date;
  endTime: Date;
  thingName?: string;
  securityProfileName?: string;
  behaviorCriteriaType?: BehaviorCriteriaType;
  listSuppressedAlerts?: boolean;
  verificationState?: VerificationState;
  nextToken?: string;
  maxResults?: number;
}
const ListViolationEventsRequest = /*@__PURE__*/ __L.at(
  __c83,
  5,
) as any as S.Schema<ListViolationEventsRequest>;
export type ViolationEventType = "in-alarm" | "alarm-cleared" | "alarm-invalidated" | (string & {});
const ViolationEventType = S.String;

export interface ViolationEvent {
  violationId?: string;
  thingName?: string;
  securityProfileName?: string;
  behavior?: Behavior;
  metricValue?: MetricValue;
  violationEventAdditionalInfo?: ViolationEventAdditionalInfo;
  violationEventType?: ViolationEventType;
  verificationState?: VerificationState;
  verificationStateDescription?: string;
  violationEventTime?: Date;
}
const ViolationEvent = /*@__PURE__*/ __L.at(__c83, 6) as any as S.Schema<ViolationEvent>;
export type ViolationEvents = ViolationEvent[];
const ViolationEvents = /*@__PURE__*/ __L.at(__c83, 7);
export interface ListViolationEventsResponse {
  violationEvents?: ViolationEvent[];
  nextToken?: string;
}
const ListViolationEventsResponse = /*@__PURE__*/ __L.at(
  __c84,
  0,
) as any as S.Schema<ListViolationEventsResponse>;
export interface PutVerificationStateOnViolationRequest {
  violationId: string;
  verificationState: VerificationState;
  verificationStateDescription?: string;
}
const PutVerificationStateOnViolationRequest = /*@__PURE__*/ __L.at(
  __c84,
  1,
) as any as S.Schema<PutVerificationStateOnViolationRequest>;
export interface PutVerificationStateOnViolationResponse {}
const PutVerificationStateOnViolationResponse =
  AcceptCertificateTransferResponse as any as S.Schema<PutVerificationStateOnViolationResponse>;
export type AllowAutoRegistration = boolean;
export interface RegisterCACertificateRequest {
  caCertificate: string;
  verificationCertificate?: string;
  setAsActive?: boolean;
  allowAutoRegistration?: boolean;
  registrationConfig?: RegistrationConfig;
  tags?: Tag[];
  certificateMode?: CertificateMode;
}
const RegisterCACertificateRequest = /*@__PURE__*/ __L.at(
  __c84,
  2,
) as any as S.Schema<RegisterCACertificateRequest>;
export interface RegisterCACertificateResponse {
  certificateArn?: string;
  certificateId?: string;
}
const RegisterCACertificateResponse = /*@__PURE__*/ __L.at(
  __c84,
  3,
) as any as S.Schema<RegisterCACertificateResponse>;
export type SetAsActiveFlag = boolean;
export interface RegisterCertificateRequest {
  certificatePem: string;
  caCertificatePem?: string;
  setAsActive?: boolean;
  status?: CertificateStatus;
}
const RegisterCertificateRequest = /*@__PURE__*/ __L.at(
  __c84,
  4,
) as any as S.Schema<RegisterCertificateRequest>;
export interface RegisterCertificateResponse {
  certificateArn?: string;
  certificateId?: string;
}
const RegisterCertificateResponse =
  RegisterCACertificateResponse as any as S.Schema<RegisterCertificateResponse>;
export interface RegisterCertificateWithoutCARequest {
  certificatePem: string;
  status?: CertificateStatus;
}
const RegisterCertificateWithoutCARequest = /*@__PURE__*/ __L.at(
  __c84,
  5,
) as any as S.Schema<RegisterCertificateWithoutCARequest>;
export interface RegisterCertificateWithoutCAResponse {
  certificateArn?: string;
  certificateId?: string;
}
const RegisterCertificateWithoutCAResponse =
  RegisterCACertificateResponse as any as S.Schema<RegisterCertificateWithoutCAResponse>;
export type Parameter = string;
export type Parameters = { [key: string]: string | undefined };
const Parameters = DetailsMap as any as S.Schema<Parameters>;
export interface RegisterThingRequest {
  templateBody: string;
  parameters?: { [key: string]: string | undefined };
}
const RegisterThingRequest = /*@__PURE__*/ __L.at(
  __c84,
  6,
) as any as S.Schema<RegisterThingRequest>;
export type ResourceLogicalId = string;
export type ResourceArns = { [key: string]: string | undefined };
const ResourceArns = PublicKeyMap as any as S.Schema<ResourceArns>;
export interface RegisterThingResponse {
  certificatePem?: string;
  resourceArns?: { [key: string]: string | undefined };
}
const RegisterThingResponse = /*@__PURE__*/ __L.at(
  __c84,
  7,
) as any as S.Schema<RegisterThingResponse>;
export interface RejectCertificateTransferRequest {
  certificateId: string;
  rejectReason?: string;
}
const RejectCertificateTransferRequest = /*@__PURE__*/ __L.at(
  __c85,
  0,
) as any as S.Schema<RejectCertificateTransferRequest>;
export interface RejectCertificateTransferResponse {}
const RejectCertificateTransferResponse =
  AcceptCertificateTransferResponse as any as S.Schema<RejectCertificateTransferResponse>;
export interface RemoveThingFromBillingGroupRequest {
  billingGroupName?: string;
  billingGroupArn?: string;
  thingName?: string;
  thingArn?: string;
}
const RemoveThingFromBillingGroupRequest = /*@__PURE__*/ __L.at(
  __c85,
  1,
) as any as S.Schema<RemoveThingFromBillingGroupRequest>;
export interface RemoveThingFromBillingGroupResponse {}
const RemoveThingFromBillingGroupResponse =
  AcceptCertificateTransferResponse as any as S.Schema<RemoveThingFromBillingGroupResponse>;
export interface RemoveThingFromThingGroupRequest {
  thingGroupName?: string;
  thingGroupArn?: string;
  thingName?: string;
  thingArn?: string;
}
const RemoveThingFromThingGroupRequest = /*@__PURE__*/ __L.at(
  __c85,
  2,
) as any as S.Schema<RemoveThingFromThingGroupRequest>;
export interface RemoveThingFromThingGroupResponse {}
const RemoveThingFromThingGroupResponse =
  AcceptCertificateTransferResponse as any as S.Schema<RemoveThingFromThingGroupResponse>;
export interface ReplaceTopicRuleRequest {
  ruleName: string;
  topicRulePayload: TopicRulePayload;
}
const ReplaceTopicRuleRequest = /*@__PURE__*/ __L.at(
  __c85,
  3,
) as any as S.Schema<ReplaceTopicRuleRequest>;
export interface ReplaceTopicRuleResponse {}
const ReplaceTopicRuleResponse =
  AddThingToBillingGroupResponse as any as S.Schema<ReplaceTopicRuleResponse>;
export type SearchQueryMaxResults = number;
export interface SearchIndexRequest {
  indexName?: string;
  queryString: string;
  nextToken?: string;
  maxResults?: number;
  queryVersion?: string;
}
const SearchIndexRequest = /*@__PURE__*/ __L.at(__c85, 4) as any as S.Schema<SearchIndexRequest>;
export type ThingGroupNameList = string[];
const ThingGroupNameList = JobTargets as any as S.Schema<ThingGroupNameList>;
export type JsonDocument = string;
export type ConnectivityTimestamp = number;
export type DisconnectReason = string;
export interface ThingConnectivity {
  connected?: boolean;
  timestamp?: number;
  disconnectReason?: string;
  keepAliveDuration?: number;
  cleanSession?: boolean;
  sessionExpiry?: number;
  clientId?: string;
}
const ThingConnectivity = /*@__PURE__*/ __L.at(__c85, 5) as any as S.Schema<ThingConnectivity>;
export interface ThingDocument {
  thingName?: string;
  thingId?: string;
  thingTypeName?: string;
  thingGroupNames?: string[];
  attributes?: { [key: string]: string | undefined };
  shadow?: string;
  deviceDefender?: string;
  connectivity?: ThingConnectivity;
}
const ThingDocument = /*@__PURE__*/ __L.at(__c85, 6) as any as S.Schema<ThingDocument>;
export type ThingDocumentList = ThingDocument[];
const ThingDocumentList = /*@__PURE__*/ __L.at(__c85, 7);
export interface ThingGroupDocument {
  thingGroupName?: string;
  thingGroupId?: string;
  thingGroupDescription?: string;
  attributes?: { [key: string]: string | undefined };
  parentGroupNames?: string[];
}
const ThingGroupDocument = /*@__PURE__*/ __L.at(__c86, 0) as any as S.Schema<ThingGroupDocument>;
export type ThingGroupDocumentList = ThingGroupDocument[];
const ThingGroupDocumentList = /*@__PURE__*/ __L.at(__c86, 1);
export interface SearchIndexResponse {
  nextToken?: string;
  things?: ThingDocument[];
  thingGroups?: ThingGroupDocument[];
}
const SearchIndexResponse = /*@__PURE__*/ __L.at(__c86, 2) as any as S.Schema<SearchIndexResponse>;
export interface SetDefaultAuthorizerRequest {
  authorizerName: string;
}
const SetDefaultAuthorizerRequest = /*@__PURE__*/ __L.at(
  __c86,
  3,
) as any as S.Schema<SetDefaultAuthorizerRequest>;
export interface SetDefaultAuthorizerResponse {
  authorizerName?: string;
  authorizerArn?: string;
}
const SetDefaultAuthorizerResponse = /*@__PURE__*/ __L.at(
  __c86,
  4,
) as any as S.Schema<SetDefaultAuthorizerResponse>;
export interface SetDefaultPolicyVersionRequest {
  policyName: string;
  policyVersionId: string;
}
const SetDefaultPolicyVersionRequest = /*@__PURE__*/ __L.at(
  __c86,
  5,
) as any as S.Schema<SetDefaultPolicyVersionRequest>;
export interface SetDefaultPolicyVersionResponse {}
const SetDefaultPolicyVersionResponse =
  DeleteDynamicThingGroupResponse as any as S.Schema<SetDefaultPolicyVersionResponse>;
export interface LoggingOptionsPayload {
  roleArn: string;
  logLevel?: LogLevel;
}
const LoggingOptionsPayload = /*@__PURE__*/ __L.at(
  __c86,
  6,
) as any as S.Schema<LoggingOptionsPayload>;
export interface SetLoggingOptionsRequest {
  loggingOptionsPayload: LoggingOptionsPayload;
}
const SetLoggingOptionsRequest = /*@__PURE__*/ __L.at(
  __c86,
  7,
) as any as S.Schema<SetLoggingOptionsRequest>;
export interface SetLoggingOptionsResponse {}
const SetLoggingOptionsResponse =
  AddThingToBillingGroupResponse as any as S.Schema<SetLoggingOptionsResponse>;
export interface SetV2LoggingLevelRequest {
  logTarget: LogTarget;
  logLevel: LogLevel;
}
const SetV2LoggingLevelRequest = /*@__PURE__*/ __L.at(
  __c87,
  0,
) as any as S.Schema<SetV2LoggingLevelRequest>;
export interface SetV2LoggingLevelResponse {}
const SetV2LoggingLevelResponse =
  AddThingToBillingGroupResponse as any as S.Schema<SetV2LoggingLevelResponse>;
export interface SetV2LoggingOptionsRequest {
  roleArn?: string;
  defaultLogLevel?: LogLevel;
  disableAllLogs?: boolean;
  eventConfigurations?: LogEventConfiguration[];
}
const SetV2LoggingOptionsRequest = /*@__PURE__*/ __L.at(
  __c87,
  1,
) as any as S.Schema<SetV2LoggingOptionsRequest>;
export interface SetV2LoggingOptionsResponse {}
const SetV2LoggingOptionsResponse =
  AddThingToBillingGroupResponse as any as S.Schema<SetV2LoggingOptionsResponse>;
export interface StartAuditMitigationActionsTaskRequest {
  taskId: string;
  target: AuditMitigationActionsTaskTarget;
  auditCheckToActionsMapping: { [key: string]: string[] | undefined };
  clientRequestToken: string;
}
const StartAuditMitigationActionsTaskRequest = /*@__PURE__*/ __L.at(
  __c87,
  2,
) as any as S.Schema<StartAuditMitigationActionsTaskRequest>;
export interface StartAuditMitigationActionsTaskResponse {
  taskId?: string;
}
const StartAuditMitigationActionsTaskResponse = /*@__PURE__*/ __L.at(
  __c87,
  3,
) as any as S.Schema<StartAuditMitigationActionsTaskResponse>;
export type DetectMitigationActionsToExecuteList = string[];
const DetectMitigationActionsToExecuteList =
  JobTargets as any as S.Schema<DetectMitigationActionsToExecuteList>;
export interface StartDetectMitigationActionsTaskRequest {
  taskId: string;
  target: DetectMitigationActionsTaskTarget;
  actions: string[];
  violationEventOccurrenceRange?: ViolationEventOccurrenceRange;
  includeOnlyActiveViolations?: boolean;
  includeSuppressedAlerts?: boolean;
  clientRequestToken: string;
}
const StartDetectMitigationActionsTaskRequest = /*@__PURE__*/ __L.at(
  __c87,
  4,
) as any as S.Schema<StartDetectMitigationActionsTaskRequest>;
export interface StartDetectMitigationActionsTaskResponse {
  taskId?: string;
}
const StartDetectMitigationActionsTaskResponse =
  StartAuditMitigationActionsTaskResponse as any as S.Schema<StartDetectMitigationActionsTaskResponse>;
export interface StartOnDemandAuditTaskRequest {
  targetCheckNames: string[];
}
const StartOnDemandAuditTaskRequest = /*@__PURE__*/ __L.at(
  __c87,
  5,
) as any as S.Schema<StartOnDemandAuditTaskRequest>;
export interface StartOnDemandAuditTaskResponse {
  taskId?: string;
}
const StartOnDemandAuditTaskResponse =
  StartAuditMitigationActionsTaskResponse as any as S.Schema<StartOnDemandAuditTaskResponse>;
export interface StartThingRegistrationTaskRequest {
  templateBody: string;
  inputFileBucket: string;
  inputFileKey: string;
  roleArn: string;
}
const StartThingRegistrationTaskRequest = /*@__PURE__*/ __L.at(
  __c87,
  6,
) as any as S.Schema<StartThingRegistrationTaskRequest>;
export interface StartThingRegistrationTaskResponse {
  taskId?: string;
}
const StartThingRegistrationTaskResponse =
  StartAuditMitigationActionsTaskResponse as any as S.Schema<StartThingRegistrationTaskResponse>;
export interface StopThingRegistrationTaskRequest {
  taskId: string;
}
const StopThingRegistrationTaskRequest = /*@__PURE__*/ __L.at(
  __c87,
  7,
) as any as S.Schema<StopThingRegistrationTaskRequest>;
export interface StopThingRegistrationTaskResponse {}
const StopThingRegistrationTaskResponse =
  AcceptCertificateTransferResponse as any as S.Schema<StopThingRegistrationTaskResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Tag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c88, 0) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = AddThingToBillingGroupResponse as any as S.Schema<TagResourceResponse>;
export type ActionType = "PUBLISH" | "SUBSCRIBE" | "RECEIVE" | "CONNECT" | (string & {});
const ActionType = S.String;

export type Resource = string;
export type Resources = string[];
const Resources = JobTargets as any as S.Schema<Resources>;
export interface AuthInfo {
  actionType?: ActionType;
  resources: string[];
}
const AuthInfo = /*@__PURE__*/ __L.at(__c88, 1) as any as S.Schema<AuthInfo>;
export type AuthInfos = AuthInfo[];
const AuthInfos = /*@__PURE__*/ __L.at(__c88, 2);
export type PolicyNames = string[];
const PolicyNames = JobTargets as any as S.Schema<PolicyNames>;
export interface TestAuthorizationRequest {
  principal?: string;
  cognitoIdentityPoolId?: string;
  authInfos: AuthInfo[];
  clientId?: string;
  policyNamesToAdd?: string[];
  policyNamesToSkip?: string[];
}
const TestAuthorizationRequest = /*@__PURE__*/ __L.at(
  __c88,
  3,
) as any as S.Schema<TestAuthorizationRequest>;
export interface Allowed {
  policies?: Policy[];
}
const Allowed = /*@__PURE__*/ __L.at(__c88, 4) as any as S.Schema<Allowed>;
export interface ImplicitDeny {
  policies?: Policy[];
}
const ImplicitDeny = Allowed as any as S.Schema<ImplicitDeny>;
export interface ExplicitDeny {
  policies?: Policy[];
}
const ExplicitDeny = Allowed as any as S.Schema<ExplicitDeny>;
export interface Denied {
  implicitDeny?: ImplicitDeny;
  explicitDeny?: ExplicitDeny;
}
const Denied = /*@__PURE__*/ __L.at(__c88, 5) as any as S.Schema<Denied>;
export type AuthDecision = "ALLOWED" | "EXPLICIT_DENY" | "IMPLICIT_DENY" | (string & {});
const AuthDecision = S.String;

export type MissingContextValue = string;
export type MissingContextValues = string[];
const MissingContextValues = JobTargets as any as S.Schema<MissingContextValues>;
export interface AuthResult {
  authInfo?: AuthInfo;
  allowed?: Allowed;
  denied?: Denied;
  authDecision?: AuthDecision;
  missingContextValues?: string[];
}
const AuthResult = /*@__PURE__*/ __L.at(__c88, 6) as any as S.Schema<AuthResult>;
export type AuthResults = AuthResult[];
const AuthResults = /*@__PURE__*/ __L.at(__c88, 7);
export interface TestAuthorizationResponse {
  authResults?: AuthResult[];
}
const TestAuthorizationResponse = /*@__PURE__*/ __L.at(
  __c89,
  0,
) as any as S.Schema<TestAuthorizationResponse>;
export type Token = string;
export type TokenSignature = string;
export type HttpHeaderName = string;
export type HttpHeaderValue = string;
export type HttpHeaders = { [key: string]: string | undefined };
const HttpHeaders = PublicKeyMap as any as S.Schema<HttpHeaders>;
export type HttpQueryString = string;
export interface HttpContext {
  headers?: { [key: string]: string | undefined };
  queryString?: string;
}
const HttpContext = /*@__PURE__*/ __L.at(__c89, 1) as any as S.Schema<HttpContext>;
export type MqttUsername = string;
export type MqttPassword = Uint8Array;
export type MqttClientId = string;
export interface MqttContext {
  username?: string;
  password?: Uint8Array;
  clientId?: string;
}
const MqttContext = /*@__PURE__*/ __L.at(__c89, 2) as any as S.Schema<MqttContext>;
export type ServerName = string;
export interface TlsContext {
  serverName?: string;
}
const TlsContext = /*@__PURE__*/ __L.at(__c89, 3) as any as S.Schema<TlsContext>;
export interface TestInvokeAuthorizerRequest {
  authorizerName: string;
  token?: string;
  tokenSignature?: string;
  httpContext?: HttpContext;
  mqttContext?: MqttContext;
  tlsContext?: TlsContext;
}
const TestInvokeAuthorizerRequest = /*@__PURE__*/ __L.at(
  __c89,
  4,
) as any as S.Schema<TestInvokeAuthorizerRequest>;
export type IsAuthenticated = boolean;
export type PrincipalId = string;
export type PolicyDocuments = string[];
const PolicyDocuments = JobTargets as any as S.Schema<PolicyDocuments>;
export type Seconds = number;
export interface TestInvokeAuthorizerResponse {
  isAuthenticated?: boolean;
  principalId?: string;
  policyDocuments?: string[];
  refreshAfterInSeconds?: number;
  disconnectAfterInSeconds?: number;
}
const TestInvokeAuthorizerResponse = /*@__PURE__*/ __L.at(
  __c89,
  5,
) as any as S.Schema<TestInvokeAuthorizerResponse>;
export interface TransferCertificateRequest {
  certificateId: string;
  targetAwsAccount: string;
  transferMessage?: string;
}
const TransferCertificateRequest = /*@__PURE__*/ __L.at(
  __c89,
  6,
) as any as S.Schema<TransferCertificateRequest>;
export interface TransferCertificateResponse {
  transferredCertificateArn?: string;
}
const TransferCertificateResponse = /*@__PURE__*/ __L.at(
  __c89,
  7,
) as any as S.Schema<TransferCertificateResponse>;
export type TagKeyList = string[];
const TagKeyList = JobTargets as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c90,
  0,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse =
  AddThingToBillingGroupResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateAccountAuditConfigurationRequest {
  roleArn?: string;
  auditNotificationTargetConfigurations?: { [key: string]: AuditNotificationTarget | undefined };
  auditCheckConfigurations?: { [key: string]: AuditCheckConfiguration | undefined };
}
const UpdateAccountAuditConfigurationRequest = /*@__PURE__*/ __L.at(
  __c90,
  1,
) as any as S.Schema<UpdateAccountAuditConfigurationRequest>;
export interface UpdateAccountAuditConfigurationResponse {}
const UpdateAccountAuditConfigurationResponse =
  AcceptCertificateTransferResponse as any as S.Schema<UpdateAccountAuditConfigurationResponse>;
export interface UpdateAuditSuppressionRequest {
  checkName: string;
  resourceIdentifier: ResourceIdentifier;
  expirationDate?: Date;
  suppressIndefinitely?: boolean;
  description?: string;
}
const UpdateAuditSuppressionRequest = /*@__PURE__*/ __L.at(
  __c90,
  2,
) as any as S.Schema<UpdateAuditSuppressionRequest>;
export interface UpdateAuditSuppressionResponse {}
const UpdateAuditSuppressionResponse =
  AddThingToBillingGroupResponse as any as S.Schema<UpdateAuditSuppressionResponse>;
export interface UpdateAuthorizerRequest {
  authorizerName: string;
  authorizerFunctionArn?: string;
  tokenKeyName?: string;
  tokenSigningPublicKeys?: { [key: string]: string | undefined };
  status?: AuthorizerStatus;
  enableCachingForHttp?: boolean;
}
const UpdateAuthorizerRequest = /*@__PURE__*/ __L.at(
  __c90,
  3,
) as any as S.Schema<UpdateAuthorizerRequest>;
export interface UpdateAuthorizerResponse {
  authorizerName?: string;
  authorizerArn?: string;
}
const UpdateAuthorizerResponse =
  CreateAuthorizerResponse as any as S.Schema<UpdateAuthorizerResponse>;
export interface UpdateBillingGroupRequest {
  billingGroupName: string;
  billingGroupProperties: BillingGroupProperties;
  expectedVersion?: number;
}
const UpdateBillingGroupRequest = /*@__PURE__*/ __L.at(
  __c90,
  4,
) as any as S.Schema<UpdateBillingGroupRequest>;
export interface UpdateBillingGroupResponse {
  version?: number;
}
const UpdateBillingGroupResponse = /*@__PURE__*/ __L.at(
  __c90,
  5,
) as any as S.Schema<UpdateBillingGroupResponse>;
export type RemoveAutoRegistration = boolean;
export interface UpdateCACertificateRequest {
  certificateId: string;
  newStatus?: CACertificateStatus;
  newAutoRegistrationStatus?: AutoRegistrationStatus;
  registrationConfig?: RegistrationConfig;
  removeAutoRegistration?: boolean;
}
const UpdateCACertificateRequest = /*@__PURE__*/ __L.at(
  __c90,
  6,
) as any as S.Schema<UpdateCACertificateRequest>;
export interface UpdateCACertificateResponse {}
const UpdateCACertificateResponse =
  AddThingToBillingGroupResponse as any as S.Schema<UpdateCACertificateResponse>;
export interface UpdateCertificateRequest {
  certificateId: string;
  newStatus: CertificateStatus;
}
const UpdateCertificateRequest = /*@__PURE__*/ __L.at(
  __c90,
  7,
) as any as S.Schema<UpdateCertificateRequest>;
export interface UpdateCertificateResponse {}
const UpdateCertificateResponse =
  AddThingToBillingGroupResponse as any as S.Schema<UpdateCertificateResponse>;
export interface UpdateCertificateProviderRequest {
  certificateProviderName: string;
  lambdaFunctionArn?: string;
  accountDefaultForOperations?: CertificateProviderOperation[];
}
const UpdateCertificateProviderRequest = /*@__PURE__*/ __L.at(
  __c91,
  0,
) as any as S.Schema<UpdateCertificateProviderRequest>;
export interface UpdateCertificateProviderResponse {
  certificateProviderName?: string;
  certificateProviderArn?: string;
}
const UpdateCertificateProviderResponse =
  CreateCertificateProviderResponse as any as S.Schema<UpdateCertificateProviderResponse>;
export interface UpdateCommandRequest {
  commandId: string;
  displayName?: string;
  description?: string;
  deprecated?: boolean;
}
const UpdateCommandRequest = /*@__PURE__*/ __L.at(
  __c91,
  1,
) as any as S.Schema<UpdateCommandRequest>;
export interface UpdateCommandResponse {
  commandId?: string;
  displayName?: string;
  description?: string;
  deprecated?: boolean;
  lastUpdatedAt?: Date;
}
const UpdateCommandResponse = /*@__PURE__*/ __L.at(
  __c91,
  2,
) as any as S.Schema<UpdateCommandResponse>;
export interface UpdateCustomMetricRequest {
  metricName: string;
  displayName: string;
}
const UpdateCustomMetricRequest = /*@__PURE__*/ __L.at(
  __c91,
  3,
) as any as S.Schema<UpdateCustomMetricRequest>;
export interface UpdateCustomMetricResponse {
  metricName?: string;
  metricArn?: string;
  metricType?: CustomMetricType;
  displayName?: string;
  creationDate?: Date;
  lastModifiedDate?: Date;
}
const UpdateCustomMetricResponse =
  DescribeCustomMetricResponse as any as S.Schema<UpdateCustomMetricResponse>;
export interface UpdateDimensionRequest {
  name: string;
  stringValues: string[];
}
const UpdateDimensionRequest = /*@__PURE__*/ __L.at(
  __c91,
  4,
) as any as S.Schema<UpdateDimensionRequest>;
export interface UpdateDimensionResponse {
  name?: string;
  arn?: string;
  type?: DimensionType;
  stringValues?: string[];
  creationDate?: Date;
  lastModifiedDate?: Date;
}
const UpdateDimensionResponse = /*@__PURE__*/ __L.at(
  __c91,
  5,
) as any as S.Schema<UpdateDimensionResponse>;
export type RemoveAuthorizerConfig = boolean;
export interface UpdateDomainConfigurationRequest {
  domainConfigurationName: string;
  authorizerConfig?: AuthorizerConfig;
  domainConfigurationStatus?: DomainConfigurationStatus;
  removeAuthorizerConfig?: boolean;
  tlsConfig?: TlsConfig;
  serverCertificateConfig?: ServerCertificateConfig;
  authenticationType?: AuthenticationType;
  applicationProtocol?: ApplicationProtocol;
  clientCertificateConfig?: ClientCertificateConfig;
}
const UpdateDomainConfigurationRequest = /*@__PURE__*/ __L.at(
  __c91,
  6,
) as any as S.Schema<UpdateDomainConfigurationRequest>;
export interface UpdateDomainConfigurationResponse {
  domainConfigurationName?: string;
  domainConfigurationArn?: string;
}
const UpdateDomainConfigurationResponse =
  CreateDomainConfigurationResponse as any as S.Schema<UpdateDomainConfigurationResponse>;
export interface UpdateDynamicThingGroupRequest {
  thingGroupName: string;
  thingGroupProperties: ThingGroupProperties;
  expectedVersion?: number;
  indexName?: string;
  queryString?: string;
  queryVersion?: string;
}
const UpdateDynamicThingGroupRequest = /*@__PURE__*/ __L.at(
  __c91,
  7,
) as any as S.Schema<UpdateDynamicThingGroupRequest>;
export interface UpdateDynamicThingGroupResponse {
  version?: number;
}
const UpdateDynamicThingGroupResponse =
  UpdateBillingGroupResponse as any as S.Schema<UpdateDynamicThingGroupResponse>;
export interface UpdateEncryptionConfigurationRequest {
  encryptionType: EncryptionType;
  kmsKeyArn?: string;
  kmsAccessRoleArn?: string;
}
const UpdateEncryptionConfigurationRequest = /*@__PURE__*/ __L.at(
  __c92,
  0,
) as any as S.Schema<UpdateEncryptionConfigurationRequest>;
export interface UpdateEncryptionConfigurationResponse {}
const UpdateEncryptionConfigurationResponse =
  AcceptCertificateTransferResponse as any as S.Schema<UpdateEncryptionConfigurationResponse>;
export interface UpdateEventConfigurationsRequest {
  eventConfigurations?: { [key: string]: Configuration | undefined };
}
const UpdateEventConfigurationsRequest = /*@__PURE__*/ __L.at(
  __c92,
  1,
) as any as S.Schema<UpdateEventConfigurationsRequest>;
export interface UpdateEventConfigurationsResponse {}
const UpdateEventConfigurationsResponse =
  AcceptCertificateTransferResponse as any as S.Schema<UpdateEventConfigurationsResponse>;
export interface UpdateFleetMetricRequest {
  metricName: string;
  queryString?: string;
  aggregationType?: AggregationType;
  period?: number;
  aggregationField?: string;
  description?: string;
  queryVersion?: string;
  indexName: string;
  unit?: FleetMetricUnit;
  expectedVersion?: number;
}
const UpdateFleetMetricRequest = /*@__PURE__*/ __L.at(
  __c92,
  2,
) as any as S.Schema<UpdateFleetMetricRequest>;
export interface UpdateFleetMetricResponse {}
const UpdateFleetMetricResponse =
  AddThingToBillingGroupResponse as any as S.Schema<UpdateFleetMetricResponse>;
export interface UpdateIndexingConfigurationRequest {
  thingIndexingConfiguration?: ThingIndexingConfiguration;
  thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;
}
const UpdateIndexingConfigurationRequest = /*@__PURE__*/ __L.at(
  __c92,
  3,
) as any as S.Schema<UpdateIndexingConfigurationRequest>;
export interface UpdateIndexingConfigurationResponse {}
const UpdateIndexingConfigurationResponse =
  AcceptCertificateTransferResponse as any as S.Schema<UpdateIndexingConfigurationResponse>;
export interface UpdateJobRequest {
  jobId: string;
  description?: string;
  presignedUrlConfig?: PresignedUrlConfig;
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;
  abortConfig?: AbortConfig;
  timeoutConfig?: TimeoutConfig;
  namespaceId?: string;
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig;
}
const UpdateJobRequest = /*@__PURE__*/ __L.at(__c92, 4) as any as S.Schema<UpdateJobRequest>;
export interface UpdateJobResponse {}
const UpdateJobResponse = AddThingToBillingGroupResponse as any as S.Schema<UpdateJobResponse>;
export interface UpdateMitigationActionRequest {
  actionName: string;
  roleArn?: string;
  actionParams?: MitigationActionParams;
}
const UpdateMitigationActionRequest = /*@__PURE__*/ __L.at(
  __c92,
  5,
) as any as S.Schema<UpdateMitigationActionRequest>;
export interface UpdateMitigationActionResponse {
  actionArn?: string;
  actionId?: string;
}
const UpdateMitigationActionResponse =
  CreateMitigationActionResponse as any as S.Schema<UpdateMitigationActionResponse>;
export type UnsetDefaultVersion = boolean;
export interface UpdatePackageRequest {
  packageName: string;
  description?: string | redacted.Redacted<string>;
  defaultVersionName?: string;
  unsetDefaultVersion?: boolean;
  clientToken?: string;
}
const UpdatePackageRequest = /*@__PURE__*/ __L.at(
  __c92,
  6,
) as any as S.Schema<UpdatePackageRequest>;
export interface UpdatePackageResponse {}
const UpdatePackageResponse =
  AddThingToBillingGroupResponse as any as S.Schema<UpdatePackageResponse>;
export interface UpdatePackageConfigurationRequest {
  versionUpdateByJobsConfig?: VersionUpdateByJobsConfig;
  clientToken?: string;
}
const UpdatePackageConfigurationRequest = /*@__PURE__*/ __L.at(
  __c92,
  7,
) as any as S.Schema<UpdatePackageConfigurationRequest>;
export interface UpdatePackageConfigurationResponse {}
const UpdatePackageConfigurationResponse =
  AcceptCertificateTransferResponse as any as S.Schema<UpdatePackageConfigurationResponse>;
export type PackageVersionAction = "PUBLISH" | "DEPRECATE" | (string & {});
const PackageVersionAction = S.String;

export interface UpdatePackageVersionRequest {
  packageName: string;
  versionName: string;
  description?: string | redacted.Redacted<string>;
  attributes?: { [key: string]: string | undefined };
  artifact?: PackageVersionArtifact;
  action?: PackageVersionAction;
  recipe?: string | redacted.Redacted<string>;
  clientToken?: string;
}
const UpdatePackageVersionRequest = /*@__PURE__*/ __L.at(
  __c93,
  0,
) as any as S.Schema<UpdatePackageVersionRequest>;
export interface UpdatePackageVersionResponse {}
const UpdatePackageVersionResponse =
  AddThingToBillingGroupResponse as any as S.Schema<UpdatePackageVersionResponse>;
export type RemoveHook = boolean;
export interface UpdateProvisioningTemplateRequest {
  templateName: string;
  description?: string;
  enabled?: boolean;
  defaultVersionId?: number;
  provisioningRoleArn?: string;
  preProvisioningHook?: ProvisioningHook;
  removePreProvisioningHook?: boolean;
}
const UpdateProvisioningTemplateRequest = /*@__PURE__*/ __L.at(
  __c93,
  1,
) as any as S.Schema<UpdateProvisioningTemplateRequest>;
export interface UpdateProvisioningTemplateResponse {}
const UpdateProvisioningTemplateResponse =
  AcceptCertificateTransferResponse as any as S.Schema<UpdateProvisioningTemplateResponse>;
export interface UpdateRoleAliasRequest {
  roleAlias: string;
  roleArn?: string;
  credentialDurationSeconds?: number;
}
const UpdateRoleAliasRequest = /*@__PURE__*/ __L.at(
  __c93,
  2,
) as any as S.Schema<UpdateRoleAliasRequest>;
export interface UpdateRoleAliasResponse {
  roleAlias?: string;
  roleAliasArn?: string;
}
const UpdateRoleAliasResponse = CreateRoleAliasResponse as any as S.Schema<UpdateRoleAliasResponse>;
export interface UpdateScheduledAuditRequest {
  frequency?: AuditFrequency;
  dayOfMonth?: string;
  dayOfWeek?: DayOfWeek;
  targetCheckNames?: string[];
  scheduledAuditName: string;
}
const UpdateScheduledAuditRequest = /*@__PURE__*/ __L.at(
  __c93,
  3,
) as any as S.Schema<UpdateScheduledAuditRequest>;
export interface UpdateScheduledAuditResponse {
  scheduledAuditArn?: string;
}
const UpdateScheduledAuditResponse =
  CreateScheduledAuditResponse as any as S.Schema<UpdateScheduledAuditResponse>;
export type DeleteBehaviors = boolean;
export type DeleteAlertTargets = boolean;
export type DeleteAdditionalMetricsToRetain = boolean;
export type DeleteMetricsExportConfig = boolean;
export interface UpdateSecurityProfileRequest {
  securityProfileName: string;
  securityProfileDescription?: string;
  behaviors?: Behavior[];
  alertTargets?: { [key: string]: AlertTarget | undefined };
  additionalMetricsToRetain?: string[];
  additionalMetricsToRetainV2?: MetricToRetain[];
  deleteBehaviors?: boolean;
  deleteAlertTargets?: boolean;
  deleteAdditionalMetricsToRetain?: boolean;
  expectedVersion?: number;
  metricsExportConfig?: MetricsExportConfig;
  deleteMetricsExportConfig?: boolean;
}
const UpdateSecurityProfileRequest = /*@__PURE__*/ __L.at(
  __c93,
  4,
) as any as S.Schema<UpdateSecurityProfileRequest>;
export interface UpdateSecurityProfileResponse {
  securityProfileName?: string;
  securityProfileArn?: string;
  securityProfileDescription?: string;
  behaviors?: Behavior[];
  alertTargets?: { [key: string]: AlertTarget | undefined };
  additionalMetricsToRetain?: string[];
  additionalMetricsToRetainV2?: MetricToRetain[];
  version?: number;
  creationDate?: Date;
  lastModifiedDate?: Date;
  metricsExportConfig?: MetricsExportConfig;
}
const UpdateSecurityProfileResponse =
  DescribeSecurityProfileResponse as any as S.Schema<UpdateSecurityProfileResponse>;
export interface UpdateStreamRequest {
  streamId: string;
  description?: string;
  files?: StreamFile[];
  roleArn?: string;
}
const UpdateStreamRequest = /*@__PURE__*/ __L.at(__c93, 5) as any as S.Schema<UpdateStreamRequest>;
export interface UpdateStreamResponse {
  streamId?: string;
  streamArn?: string;
  description?: string;
  streamVersion?: number;
}
const UpdateStreamResponse = CreateStreamResponse as any as S.Schema<UpdateStreamResponse>;
export type RemoveThingType = boolean;
export interface UpdateThingRequest {
  thingName: string;
  thingTypeName?: string;
  attributePayload?: AttributePayload;
  expectedVersion?: number;
  removeThingType?: boolean;
}
const UpdateThingRequest = /*@__PURE__*/ __L.at(__c93, 6) as any as S.Schema<UpdateThingRequest>;
export interface UpdateThingResponse {}
const UpdateThingResponse = AddThingToBillingGroupResponse as any as S.Schema<UpdateThingResponse>;
export interface UpdateThingGroupRequest {
  thingGroupName: string;
  thingGroupProperties: ThingGroupProperties;
  expectedVersion?: number;
}
const UpdateThingGroupRequest = /*@__PURE__*/ __L.at(
  __c93,
  7,
) as any as S.Schema<UpdateThingGroupRequest>;
export interface UpdateThingGroupResponse {
  version?: number;
}
const UpdateThingGroupResponse = /*@__PURE__*/ __L.at(
  __c94,
  0,
) as any as S.Schema<UpdateThingGroupResponse>;
export type ThingGroupList = string[];
const ThingGroupList = JobTargets as any as S.Schema<ThingGroupList>;
export interface UpdateThingGroupsForThingRequest {
  thingName?: string;
  thingGroupsToAdd?: string[];
  thingGroupsToRemove?: string[];
  overrideDynamicGroups?: boolean;
}
const UpdateThingGroupsForThingRequest = /*@__PURE__*/ __L.at(
  __c94,
  1,
) as any as S.Schema<UpdateThingGroupsForThingRequest>;
export interface UpdateThingGroupsForThingResponse {}
const UpdateThingGroupsForThingResponse =
  AcceptCertificateTransferResponse as any as S.Schema<UpdateThingGroupsForThingResponse>;
export interface UpdateThingTypeRequest {
  thingTypeName: string;
  thingTypeProperties?: ThingTypeProperties;
}
const UpdateThingTypeRequest = /*@__PURE__*/ __L.at(
  __c94,
  2,
) as any as S.Schema<UpdateThingTypeRequest>;
export interface UpdateThingTypeResponse {}
const UpdateThingTypeResponse =
  AddThingToBillingGroupResponse as any as S.Schema<UpdateThingTypeResponse>;
export interface UpdateTopicRuleDestinationRequest {
  arn: string;
  status: TopicRuleDestinationStatus;
}
const UpdateTopicRuleDestinationRequest = /*@__PURE__*/ __L.at(
  __c94,
  3,
) as any as S.Schema<UpdateTopicRuleDestinationRequest>;
export interface UpdateTopicRuleDestinationResponse {}
const UpdateTopicRuleDestinationResponse =
  AcceptCertificateTransferResponse as any as S.Schema<UpdateTopicRuleDestinationResponse>;
export interface ValidateSecurityProfileBehaviorsRequest {
  behaviors: Behavior[];
}
const ValidateSecurityProfileBehaviorsRequest = /*@__PURE__*/ __L.at(
  __c94,
  4,
) as any as S.Schema<ValidateSecurityProfileBehaviorsRequest>;
export type Valid = boolean;
export interface ValidationError {
  errorMessage?: string;
}
const ValidationError = /*@__PURE__*/ __L.at(__c94, 5) as any as S.Schema<ValidationError>;
export type ValidationErrors = ValidationError[];
const ValidationErrors = /*@__PURE__*/ __L.at(__c94, 6);
export interface ValidateSecurityProfileBehaviorsResponse {
  valid?: boolean;
  validationErrors?: ValidationError[];
}
const ValidateSecurityProfileBehaviorsResponse = /*@__PURE__*/ __L.at(
  __c94,
  7,
) as any as S.Schema<ValidateSecurityProfileBehaviorsResponse>;
export type ErrorMessage2 = string;
export type ResourceId = string;
export type AcceptCertificateTransferError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | TransferAlreadyCompletedException
  | UnauthorizedException
  | CommonErrors;
/**
 * Accepts a pending certificate transfer. The default state of the certificate is
 * INACTIVE.
 *
 * To check for pending certificate transfers, call ListCertificates
 * to enumerate your certificates.
 *
 * Requires permission to access the AcceptCertificateTransfer action.
 */
export const acceptCertificateTransfer: API.OperationMethod<
  AcceptCertificateTransferRequest,
  AcceptCertificateTransferResponse,
  AcceptCertificateTransferError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AcceptCertificateTransferRequest,
  output: AcceptCertificateTransferResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    TransferAlreadyCompletedException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcceptCertificateTransfer",
}));

export type AddThingToBillingGroupError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Adds a thing to a billing group.
 *
 * Requires permission to access the AddThingToBillingGroup action.
 */
export const addThingToBillingGroup: API.OperationMethod<
  AddThingToBillingGroupRequest,
  AddThingToBillingGroupResponse,
  AddThingToBillingGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddThingToBillingGroupRequest,
  output: AddThingToBillingGroupResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddThingToBillingGroup",
}));

export type AddThingToThingGroupError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Adds a thing to a thing group.
 *
 * Requires permission to access the AddThingToThingGroup action.
 */
export const addThingToThingGroup: API.OperationMethod<
  AddThingToThingGroupRequest,
  AddThingToThingGroupResponse,
  AddThingToThingGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddThingToThingGroupRequest,
  output: AddThingToThingGroupResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddThingToThingGroup",
}));

export type AssociateSbomWithPackageVersionError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates the selected software bill of materials (SBOM) with a specific software package version.
 *
 * Requires permission to access the AssociateSbomWithPackageVersion action.
 */
export const associateSbomWithPackageVersion: API.OperationMethod<
  AssociateSbomWithPackageVersionRequest,
  AssociateSbomWithPackageVersionResponse,
  AssociateSbomWithPackageVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateSbomWithPackageVersionRequest,
  output: AssociateSbomWithPackageVersionResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateSbomWithPackageVersion",
}));

export type AssociateTargetsWithJobError =
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Associates a group with a continuous job. The following criteria must be met:
 *
 * - The job must have been created with the `targetSelection` field
 * set to "CONTINUOUS".
 *
 * - The job status must currently be "IN_PROGRESS".
 *
 * - The total number of targets associated with a job must not exceed
 * 100.
 *
 * Requires permission to access the AssociateTargetsWithJob action.
 */
export const associateTargetsWithJob: API.OperationMethod<
  AssociateTargetsWithJobRequest,
  AssociateTargetsWithJobResponse,
  AssociateTargetsWithJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateTargetsWithJobRequest,
  output: AssociateTargetsWithJobResponse,
  errors: [
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateTargetsWithJob",
}));

export type AttachPolicyError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Attaches the specified policy to the specified principal (certificate or other
 * credential).
 *
 * Requires permission to access the AttachPolicy action.
 */
export const attachPolicy: API.OperationMethod<
  AttachPolicyRequest,
  AttachPolicyResponse,
  AttachPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AttachPolicyRequest,
  output: AttachPolicyResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AttachPolicy",
}));

export type AttachPrincipalPolicyError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Attaches the specified policy to the specified principal (certificate or other
 * credential).
 *
 * **Note:** This action is deprecated and works as
 * expected for backward compatibility, but we won't add enhancements. Use AttachPolicy instead.
 *
 * Requires permission to access the AttachPrincipalPolicy action.
 */
export const attachPrincipalPolicy: API.OperationMethod<
  AttachPrincipalPolicyRequest,
  AttachPrincipalPolicyResponse,
  AttachPrincipalPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AttachPrincipalPolicyRequest,
  output: AttachPrincipalPolicyResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AttachPrincipalPolicy",
}));

export type AttachSecurityProfileError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | VersionConflictException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Associates a Device Defender security profile with a thing group or this account. Each
 * thing group or account can have up to five security profiles associated with it.
 *
 * Requires permission to access the AttachSecurityProfile action.
 */
export const attachSecurityProfile: API.OperationMethod<
  AttachSecurityProfileRequest,
  AttachSecurityProfileResponse,
  AttachSecurityProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AttachSecurityProfileRequest,
  output: AttachSecurityProfileResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    VersionConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AttachSecurityProfile",
}));

export type AttachThingPrincipalError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Attaches the specified principal to the specified thing. A principal can be X.509
 * certificates, Amazon Cognito identities or federated identities.
 *
 * Requires permission to access the AttachThingPrincipal action.
 */
export const attachThingPrincipal: API.OperationMethod<
  AttachThingPrincipalRequest,
  AttachThingPrincipalResponse,
  AttachThingPrincipalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AttachThingPrincipalRequest,
  output: AttachThingPrincipalResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AttachThingPrincipal",
}));

export type CancelAuditMitigationActionsTaskError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Cancels a mitigation action task that is in progress. If the task
 * is not
 * in progress, an InvalidRequestException occurs.
 *
 * Requires permission to access the CancelAuditMitigationActionsTask action.
 */
export const cancelAuditMitigationActionsTask: API.OperationMethod<
  CancelAuditMitigationActionsTaskRequest,
  CancelAuditMitigationActionsTaskResponse,
  CancelAuditMitigationActionsTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelAuditMitigationActionsTaskRequest,
  output: CancelAuditMitigationActionsTaskResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelAuditMitigationActionsTask",
}));

export type CancelAuditTaskError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Cancels an audit that is in progress. The audit can be either scheduled or on demand. If the audit isn't in progress, an "InvalidRequestException" occurs.
 *
 * Requires permission to access the CancelAuditTask action.
 */
export const cancelAuditTask: API.OperationMethod<
  CancelAuditTaskRequest,
  CancelAuditTaskResponse,
  CancelAuditTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelAuditTaskRequest,
  output: CancelAuditTaskResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelAuditTask",
}));

export type CancelCertificateTransferError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | TransferAlreadyCompletedException
  | UnauthorizedException
  | CommonErrors;
/**
 * Cancels a pending transfer for the specified certificate.
 *
 * **Note** Only the transfer source account can use this
 * operation to cancel a transfer. (Transfer destinations can use RejectCertificateTransfer instead.) After transfer, IoT returns the
 * certificate to the source account in the INACTIVE state. After the destination account has
 * accepted the transfer, the transfer cannot be cancelled.
 *
 * After a certificate transfer is cancelled, the status of the certificate changes from
 * PENDING_TRANSFER to INACTIVE.
 *
 * Requires permission to access the CancelCertificateTransfer action.
 */
export const cancelCertificateTransfer: API.OperationMethod<
  CancelCertificateTransferRequest,
  CancelCertificateTransferResponse,
  CancelCertificateTransferError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelCertificateTransferRequest,
  output: CancelCertificateTransferResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    TransferAlreadyCompletedException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelCertificateTransfer",
}));

export type CancelDetectMitigationActionsTaskError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Cancels a Device Defender ML Detect mitigation action.
 *
 * Requires permission to access the CancelDetectMitigationActionsTask action.
 */
export const cancelDetectMitigationActionsTask: API.OperationMethod<
  CancelDetectMitigationActionsTaskRequest,
  CancelDetectMitigationActionsTaskResponse,
  CancelDetectMitigationActionsTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelDetectMitigationActionsTaskRequest,
  output: CancelDetectMitigationActionsTaskResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelDetectMitigationActionsTask",
}));

export type CancelJobError =
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Cancels a job.
 *
 * Requires permission to access the CancelJob action.
 */
export const cancelJob: API.OperationMethod<
  CancelJobRequest,
  CancelJobResponse,
  CancelJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelJobRequest,
  output: CancelJobResponse,
  errors: [
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelJob",
}));

export type CancelJobExecutionError =
  | InvalidRequestException
  | InvalidStateTransitionException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | VersionConflictException
  | CommonErrors;
/**
 * Cancels the execution of a job for a given thing.
 *
 * Requires permission to access the CancelJobExecution action.
 */
export const cancelJobExecution: API.OperationMethod<
  CancelJobExecutionRequest,
  CancelJobExecutionResponse,
  CancelJobExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelJobExecutionRequest,
  output: CancelJobExecutionResponse,
  errors: [
    InvalidRequestException,
    InvalidStateTransitionException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    VersionConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelJobExecution",
}));

export type ClearDefaultAuthorizerError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Clears the default authorizer.
 *
 * Requires permission to access the ClearDefaultAuthorizer action.
 */
export const clearDefaultAuthorizer: API.OperationMethod<
  ClearDefaultAuthorizerRequest,
  ClearDefaultAuthorizerResponse,
  ClearDefaultAuthorizerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ClearDefaultAuthorizerRequest,
  output: ClearDefaultAuthorizerResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ClearDefaultAuthorizer",
}));

export type ConfirmTopicRuleDestinationError =
  | ConflictingResourceUpdateException
  | InternalException
  | InvalidRequestException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Confirms a topic rule destination. When you create a rule requiring a destination, IoT
 * sends a confirmation message to the endpoint or base address you specify. The message
 * includes a token which you pass back when calling `ConfirmTopicRuleDestination`
 * to confirm that you own or have access to the endpoint.
 *
 * Requires permission to access the ConfirmTopicRuleDestination action.
 */
export const confirmTopicRuleDestination: API.OperationMethod<
  ConfirmTopicRuleDestinationRequest,
  ConfirmTopicRuleDestinationResponse,
  ConfirmTopicRuleDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ConfirmTopicRuleDestinationRequest,
  output: ConfirmTopicRuleDestinationResponse,
  errors: [
    ConflictingResourceUpdateException,
    InternalException,
    InvalidRequestException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ConfirmTopicRuleDestination",
}));

export type CreateAuditSuppressionError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a Device Defender audit suppression.
 *
 * Requires permission to access the CreateAuditSuppression action.
 */
export const createAuditSuppression: API.OperationMethod<
  CreateAuditSuppressionRequest,
  CreateAuditSuppressionResponse,
  CreateAuditSuppressionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAuditSuppressionRequest,
  output: CreateAuditSuppressionResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAuditSuppression",
}));

export type CreateAuthorizerError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates an authorizer.
 *
 * Requires permission to access the CreateAuthorizer action.
 */
export const createAuthorizer: API.OperationMethod<
  CreateAuthorizerRequest,
  CreateAuthorizerResponse,
  CreateAuthorizerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAuthorizerRequest,
  output: CreateAuthorizerResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAuthorizer",
}));

export type CreateBillingGroupError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a billing group. If this call is made multiple times using
 * the same billing group name and configuration, the call will succeed. If this call is made with
 * the same billing group name but different configuration a `ResourceAlreadyExistsException` is thrown.
 *
 * Requires permission to access the CreateBillingGroup action.
 */
export const createBillingGroup: API.OperationMethod<
  CreateBillingGroupRequest,
  CreateBillingGroupResponse,
  CreateBillingGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateBillingGroupRequest,
  output: CreateBillingGroupResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceAlreadyExistsException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateBillingGroup",
}));

export type CreateCertificateFromCsrError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates an X.509 certificate using the specified certificate signing
 * request.
 *
 * Requires permission to access the CreateCertificateFromCsr action.
 *
 * The CSR must include a public key that is either an RSA key with a length of at least
 * 2048 bits or an ECC key from NIST P-256, NIST P-384, or NIST P-521 curves. For supported
 * certificates, consult Certificate signing algorithms supported by IoT.
 *
 * Reusing the same certificate signing request (CSR)
 * results in a distinct certificate.
 *
 * You can create multiple certificates in a batch by creating a directory, copying
 * multiple `.csr` files into that directory, and then specifying that directory on the command
 * line. The following commands show how to create a batch of certificates given a batch of
 * CSRs. In the following commands, we assume that a set of CSRs are located inside of the
 * directory my-csr-directory:
 *
 * On Linux and OS X, the command is:
 *
 * $ ls my-csr-directory/ | xargs -I {} aws iot create-certificate-from-csr
 * --certificate-signing-request file://my-csr-directory/{}
 *
 * This command lists all of the CSRs in my-csr-directory and pipes each CSR file name
 * to the `aws iot create-certificate-from-csr` Amazon Web Services CLI command to create a certificate for
 * the corresponding CSR.
 *
 * You can also run the `aws iot create-certificate-from-csr` part of the
 * command in parallel to speed up the certificate creation process:
 *
 * $ ls my-csr-directory/ | xargs -P 10 -I {} aws iot create-certificate-from-csr
 * --certificate-signing-request file://my-csr-directory/{}
 *
 * On Windows PowerShell, the command to create certificates for all CSRs in
 * my-csr-directory is:
 *
 * > ls -Name my-csr-directory | %{aws iot create-certificate-from-csr
 * --certificate-signing-request file://my-csr-directory/$_}
 *
 * On a Windows command prompt, the command to create certificates for all CSRs in
 * my-csr-directory is:
 *
 * > forfiles /p my-csr-directory /c "cmd /c aws iot create-certificate-from-csr
 * --certificate-signing-request file://@path"
 */
export const createCertificateFromCsr: API.OperationMethod<
  CreateCertificateFromCsrRequest,
  CreateCertificateFromCsrResponse,
  CreateCertificateFromCsrError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCertificateFromCsrRequest,
  output: CreateCertificateFromCsrResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCertificateFromCsr",
}));

export type CreateCertificateProviderError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates an Amazon Web Services IoT Core certificate provider. You can use Amazon Web Services IoT Core certificate provider to
 * customize how to sign a certificate signing request (CSR) in IoT fleet provisioning. For
 * more information, see Customizing certificate
 * signing using Amazon Web Services IoT Core certificate provider from Amazon Web Services IoT Core Developer
 * Guide.
 *
 * Requires permission to access the CreateCertificateProvider action.
 *
 * After you create a certificate provider, the behavior of
 * `CreateCertificateFromCsr` API for fleet provisioning will
 * change and all API calls to `CreateCertificateFromCsr` will invoke the
 * certificate provider to create the certificates. It can take up to a few minutes for
 * this behavior to change after a certificate provider is created.
 */
export const createCertificateProvider: API.OperationMethod<
  CreateCertificateProviderRequest,
  CreateCertificateProviderResponse,
  CreateCertificateProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCertificateProviderRequest,
  output: CreateCertificateProviderResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCertificateProvider",
}));

export type CreateCommandError =
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a command. A command contains reusable configurations that can be applied
 * before they are sent to the devices.
 */
export const createCommand: API.OperationMethod<
  CreateCommandRequest,
  CreateCommandResponse,
  CreateCommandError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCommandRequest,
  output: CreateCommandResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCommand",
}));

export type CreateCustomMetricError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Use this API to define a
 * Custom
 * Metric
 * published by your devices to Device Defender.
 *
 * Requires permission to access the CreateCustomMetric action.
 */
export const createCustomMetric: API.OperationMethod<
  CreateCustomMetricRequest,
  CreateCustomMetricResponse,
  CreateCustomMetricError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCustomMetricRequest,
  output: CreateCustomMetricResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCustomMetric",
}));

export type CreateDimensionError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Create a dimension that you can use to limit the scope of a metric used in a security profile for IoT Device Defender.
 * For example, using a `TOPIC_FILTER` dimension, you can narrow down the scope of the metric only to MQTT topics whose name match the pattern specified in the dimension.
 *
 * Requires permission to access the CreateDimension action.
 */
export const createDimension: API.OperationMethod<
  CreateDimensionRequest,
  CreateDimensionResponse,
  CreateDimensionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDimensionRequest,
  output: CreateDimensionResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDimension",
}));

export type CreateDomainConfigurationError =
  | CertificateValidationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a domain configuration.
 *
 * Requires permission to access the CreateDomainConfiguration action.
 */
export const createDomainConfiguration: API.OperationMethod<
  CreateDomainConfigurationRequest,
  CreateDomainConfigurationResponse,
  CreateDomainConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDomainConfigurationRequest,
  output: CreateDomainConfigurationResponse,
  errors: [
    CertificateValidationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDomainConfiguration",
}));

export type CreateDynamicThingGroupError =
  | InternalFailureException
  | InvalidQueryException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a dynamic thing group.
 *
 * Requires permission to access the CreateDynamicThingGroup action.
 */
export const createDynamicThingGroup: API.OperationMethod<
  CreateDynamicThingGroupRequest,
  CreateDynamicThingGroupResponse,
  CreateDynamicThingGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDynamicThingGroupRequest,
  output: CreateDynamicThingGroupResponse,
  errors: [
    InternalFailureException,
    InvalidQueryException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDynamicThingGroup",
}));

export type CreateFleetMetricError =
  | IndexNotReadyException
  | InternalFailureException
  | InvalidAggregationException
  | InvalidQueryException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a fleet metric.
 *
 * Requires permission to access the CreateFleetMetric action.
 */
export const createFleetMetric: API.OperationMethod<
  CreateFleetMetricRequest,
  CreateFleetMetricResponse,
  CreateFleetMetricError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateFleetMetricRequest,
  output: CreateFleetMetricResponse,
  errors: [
    IndexNotReadyException,
    InternalFailureException,
    InvalidAggregationException,
    InvalidQueryException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateFleetMetric",
}));

export type CreateJobError =
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a job.
 *
 * Requires permission to access the CreateJob action.
 */
export const createJob: API.OperationMethod<
  CreateJobRequest,
  CreateJobResponse,
  CreateJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateJobRequest,
  output: CreateJobResponse,
  errors: [
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateJob",
}));

export type CreateJobTemplateError =
  | ConflictException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a job template.
 *
 * Requires permission to access the CreateJobTemplate action.
 */
export const createJobTemplate: API.OperationMethod<
  CreateJobTemplateRequest,
  CreateJobTemplateResponse,
  CreateJobTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateJobTemplateRequest,
  output: CreateJobTemplateResponse,
  errors: [
    ConflictException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateJobTemplate",
}));

export type CreateKeysAndCertificateError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued
 * public key. You can also call `CreateKeysAndCertificate` over MQTT from a
 * device, for more information, see Provisioning MQTT API.
 *
 * **Note** This is the only time IoT issues the private key
 * for this certificate, so it is important to keep it in a secure location.
 *
 * Requires permission to access the CreateKeysAndCertificate action.
 */
export const createKeysAndCertificate: API.OperationMethod<
  CreateKeysAndCertificateRequest,
  CreateKeysAndCertificateResponse,
  CreateKeysAndCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateKeysAndCertificateRequest,
  output: CreateKeysAndCertificateResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateKeysAndCertificate",
}));

export type CreateMitigationActionError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ThrottlingException
  | CommonErrors;
/**
 * Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask. Only certain types of mitigation actions can be applied to specific check names.
 * For more information, see Mitigation actions. Each mitigation action can apply only one type of change.
 *
 * Requires permission to access the CreateMitigationAction action.
 */
export const createMitigationAction: API.OperationMethod<
  CreateMitigationActionRequest,
  CreateMitigationActionResponse,
  CreateMitigationActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateMitigationActionRequest,
  output: CreateMitigationActionResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMitigationAction",
}));

export type CreateOTAUpdateError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates an IoT OTA update on a target group of things or groups.
 *
 * Requires permission to access the CreateOTAUpdate action.
 */
export const createOTAUpdate: API.OperationMethod<
  CreateOTAUpdateRequest,
  CreateOTAUpdateResponse,
  CreateOTAUpdateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateOTAUpdateRequest,
  output: CreateOTAUpdateResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateOTAUpdate",
}));

export type CreatePackageError =
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an IoT software package that can be deployed to your fleet.
 *
 * Requires permission to access the CreatePackage and GetIndexingConfiguration actions.
 */
export const createPackage: API.OperationMethod<
  CreatePackageRequest,
  CreatePackageResponse,
  CreatePackageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreatePackageRequest,
  output: CreatePackageResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePackage",
}));

export type CreatePackageVersionError =
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new version for an existing IoT software package.
 *
 * Requires permission to access the CreatePackageVersion and GetIndexingConfiguration actions.
 */
export const createPackageVersion: API.OperationMethod<
  CreatePackageVersionRequest,
  CreatePackageVersionResponse,
  CreatePackageVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreatePackageVersionRequest,
  output: CreatePackageVersionResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePackageVersion",
}));

export type CreatePolicyError =
  | InternalFailureException
  | InvalidRequestException
  | MalformedPolicyException
  | ResourceAlreadyExistsException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates an IoT policy.
 *
 * The created policy is the default version for the policy. This operation creates a
 * policy version with a version identifier of **1** and sets
 * **1** as the policy's default version.
 *
 * Requires permission to access the CreatePolicy action.
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
    InternalFailureException,
    InvalidRequestException,
    MalformedPolicyException,
    ResourceAlreadyExistsException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePolicy",
}));

export type CreatePolicyVersionError =
  | InternalFailureException
  | InvalidRequestException
  | MalformedPolicyException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | VersionsLimitExceededException
  | CommonErrors;
/**
 * Creates a new version of the specified IoT policy. To update a policy, create a
 * new policy version. A managed policy can have up to five versions. If the policy has five
 * versions, you must use DeletePolicyVersion to delete an existing version
 * before you create a new one.
 *
 * Optionally, you can set the new version as the policy's default version. The default
 * version is the operative version (that is, the version that is in effect for the
 * certificates to which the policy is attached).
 *
 * Requires permission to access the CreatePolicyVersion action.
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
    InternalFailureException,
    InvalidRequestException,
    MalformedPolicyException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    VersionsLimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePolicyVersion",
}));

export type CreateProvisioningClaimError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a provisioning claim.
 *
 * Requires permission to access the CreateProvisioningClaim action.
 */
export const createProvisioningClaim: API.OperationMethod<
  CreateProvisioningClaimRequest,
  CreateProvisioningClaimResponse,
  CreateProvisioningClaimError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProvisioningClaimRequest,
  output: CreateProvisioningClaimResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateProvisioningClaim",
}));

export type CreateProvisioningTemplateError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a provisioning template.
 *
 * Requires permission to access the CreateProvisioningTemplate action.
 */
export const createProvisioningTemplate: API.OperationMethod<
  CreateProvisioningTemplateRequest,
  CreateProvisioningTemplateResponse,
  CreateProvisioningTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProvisioningTemplateRequest,
  output: CreateProvisioningTemplateResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateProvisioningTemplate",
}));

export type CreateProvisioningTemplateVersionError =
  | ConflictingResourceUpdateException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | VersionsLimitExceededException
  | CommonErrors;
/**
 * Creates a new version of a provisioning template.
 *
 * Requires permission to access the CreateProvisioningTemplateVersion action.
 */
export const createProvisioningTemplateVersion: API.OperationMethod<
  CreateProvisioningTemplateVersionRequest,
  CreateProvisioningTemplateVersionResponse,
  CreateProvisioningTemplateVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProvisioningTemplateVersionRequest,
  output: CreateProvisioningTemplateVersionResponse,
  errors: [
    ConflictingResourceUpdateException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    VersionsLimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateProvisioningTemplateVersion",
}));

export type CreateRoleAliasError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a role alias.
 *
 * Requires permission to access the CreateRoleAlias action.
 *
 * The value of
 * `credentialDurationSeconds`
 * must be less than or equal to the maximum session
 * duration of the IAM role that the role alias references. For more information, see
 *
 * Modifying a role maximum session duration (Amazon Web Services API) from the Amazon Web Services Identity and Access Management User Guide.
 */
export const createRoleAlias: API.OperationMethod<
  CreateRoleAliasRequest,
  CreateRoleAliasResponse,
  CreateRoleAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateRoleAliasRequest,
  output: CreateRoleAliasResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRoleAlias",
}));

export type CreateScheduledAuditError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a scheduled audit that is run at a specified
 * time interval.
 *
 * Requires permission to access the CreateScheduledAudit action.
 */
export const createScheduledAudit: API.OperationMethod<
  CreateScheduledAuditRequest,
  CreateScheduledAuditResponse,
  CreateScheduledAuditError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateScheduledAuditRequest,
  output: CreateScheduledAuditResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateScheduledAudit",
}));

export type CreateSecurityProfileError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Creates a Device Defender security profile.
 *
 * Requires permission to access the CreateSecurityProfile action.
 */
export const createSecurityProfile: API.OperationMethod<
  CreateSecurityProfileRequest,
  CreateSecurityProfileResponse,
  CreateSecurityProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSecurityProfileRequest,
  output: CreateSecurityProfileResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceAlreadyExistsException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSecurityProfile",
}));

export type CreateStreamError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a stream for delivering one or more large files in chunks over MQTT. A stream transports data
 * bytes in chunks or blocks packaged as MQTT messages from a source like S3. You can have one or more files
 * associated with a stream.
 *
 * Requires permission to access the CreateStream action.
 */
export const createStream: API.OperationMethod<
  CreateStreamRequest,
  CreateStreamResponse,
  CreateStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateStreamRequest,
  output: CreateStreamResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateStream",
}));

export type CreateThingError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a thing record in the registry. If this call is made multiple times using
 * the same thing name and configuration, the call will succeed. If this call is made with
 * the same thing name but different configuration a
 * `ResourceAlreadyExistsException` is thrown.
 *
 * This is a control plane operation. See Authorization for
 * information about authorizing control plane actions.
 *
 * Requires permission to access the CreateThing action.
 */
export const createThing: API.OperationMethod<
  CreateThingRequest,
  CreateThingResponse,
  CreateThingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateThingRequest,
  output: CreateThingResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateThing",
}));

export type CreateThingGroupError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | ThrottlingException
  | CommonErrors;
/**
 * Create a thing group.
 *
 * This is a control plane operation. See Authorization for
 * information about authorizing control plane actions.
 *
 * If the `ThingGroup` that you create has the exact same attributes as an existing
 * `ThingGroup`, you will get a 200 success response.
 *
 * Requires permission to access the CreateThingGroup action.
 */
export const createThingGroup: API.OperationMethod<
  CreateThingGroupRequest,
  CreateThingGroupResponse,
  CreateThingGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateThingGroupRequest,
  output: CreateThingGroupResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceAlreadyExistsException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateThingGroup",
}));

export type CreateThingTypeError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a new thing type. If this call is made multiple times using
 * the same thing type name and configuration, the call will succeed. If this call is made with
 * the same thing type name but different configuration a `ResourceAlreadyExistsException` is thrown.
 *
 * Requires permission to access the CreateThingType action.
 */
export const createThingType: API.OperationMethod<
  CreateThingTypeRequest,
  CreateThingTypeResponse,
  CreateThingTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateThingTypeRequest,
  output: CreateThingTypeResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceAlreadyExistsException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateThingType",
}));

export type CreateTopicRuleError =
  | ConflictingResourceUpdateException
  | InternalException
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | ServiceUnavailableException
  | SqlParseException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a rule. Creating rules is an administrator-level action. Any user who has
 * permission to create rules will be able to access data processed by the rule.
 *
 * Requires permission to access the CreateTopicRule action.
 */
export const createTopicRule: API.OperationMethod<
  CreateTopicRuleRequest,
  CreateTopicRuleResponse,
  CreateTopicRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTopicRuleRequest,
  output: CreateTopicRuleResponse,
  errors: [
    ConflictingResourceUpdateException,
    InternalException,
    InvalidRequestException,
    ResourceAlreadyExistsException,
    ServiceUnavailableException,
    SqlParseException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTopicRule",
}));

export type CreateTopicRuleDestinationError =
  | ConflictingResourceUpdateException
  | InternalException
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a topic rule destination. The destination must be confirmed prior to use.
 *
 * Requires permission to access the CreateTopicRuleDestination action.
 */
export const createTopicRuleDestination: API.OperationMethod<
  CreateTopicRuleDestinationRequest,
  CreateTopicRuleDestinationResponse,
  CreateTopicRuleDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTopicRuleDestinationRequest,
  output: CreateTopicRuleDestinationResponse,
  errors: [
    ConflictingResourceUpdateException,
    InternalException,
    InvalidRequestException,
    ResourceAlreadyExistsException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTopicRuleDestination",
}));

export type DeleteAccountAuditConfigurationError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Restores the default settings for Device Defender audits for this account. Any
 * configuration data you entered is deleted and all audit checks are reset to
 * disabled.
 *
 * Requires permission to access the DeleteAccountAuditConfiguration action.
 */
export const deleteAccountAuditConfiguration: API.OperationMethod<
  DeleteAccountAuditConfigurationRequest,
  DeleteAccountAuditConfigurationResponse,
  DeleteAccountAuditConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccountAuditConfigurationRequest,
  output: DeleteAccountAuditConfigurationResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAccountAuditConfiguration",
}));

export type DeleteAuditSuppressionError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a Device Defender audit suppression.
 *
 * Requires permission to access the DeleteAuditSuppression action.
 */
export const deleteAuditSuppression: API.OperationMethod<
  DeleteAuditSuppressionRequest,
  DeleteAuditSuppressionResponse,
  DeleteAuditSuppressionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAuditSuppressionRequest,
  output: DeleteAuditSuppressionResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAuditSuppression",
}));

export type DeleteAuthorizerError =
  | DeleteConflictException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes an authorizer.
 *
 * Requires permission to access the DeleteAuthorizer action.
 */
export const deleteAuthorizer: API.OperationMethod<
  DeleteAuthorizerRequest,
  DeleteAuthorizerResponse,
  DeleteAuthorizerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAuthorizerRequest,
  output: DeleteAuthorizerResponse,
  errors: [
    DeleteConflictException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAuthorizer",
}));

export type DeleteBillingGroupError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | VersionConflictException
  | CommonErrors;
/**
 * Deletes the billing group.
 *
 * Requires permission to access the DeleteBillingGroup action.
 */
export const deleteBillingGroup: API.OperationMethod<
  DeleteBillingGroupRequest,
  DeleteBillingGroupResponse,
  DeleteBillingGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBillingGroupRequest,
  output: DeleteBillingGroupResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ThrottlingException,
    VersionConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBillingGroup",
}));

export type DeleteCACertificateError =
  | CertificateStateException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes a registered CA certificate.
 *
 * Requires permission to access the DeleteCACertificate action.
 */
export const deleteCACertificate: API.OperationMethod<
  DeleteCACertificateRequest,
  DeleteCACertificateResponse,
  DeleteCACertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCACertificateRequest,
  output: DeleteCACertificateResponse,
  errors: [
    CertificateStateException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCACertificate",
}));

export type DeleteCertificateError =
  | CertificateStateException
  | DeleteConflictException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes the specified certificate.
 *
 * A certificate cannot be deleted if it has a policy or IoT thing attached to it or if
 * its status is set to ACTIVE. To delete a certificate, first use the DetachPolicy action to detach all policies. Next, use the UpdateCertificate action to set the certificate to the INACTIVE
 * status.
 *
 * Requires permission to access the DeleteCertificate action.
 */
export const deleteCertificate: API.OperationMethod<
  DeleteCertificateRequest,
  DeleteCertificateResponse,
  DeleteCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCertificateRequest,
  output: DeleteCertificateResponse,
  errors: [
    CertificateStateException,
    DeleteConflictException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCertificate",
}));

export type DeleteCertificateProviderError =
  | DeleteConflictException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes a certificate provider.
 *
 * Requires permission to access the DeleteCertificateProvider action.
 *
 * If you delete the certificate provider resource, the behavior of
 * `CreateCertificateFromCsr` will resume, and IoT will create
 * certificates signed by IoT from a certificate signing request (CSR).
 */
export const deleteCertificateProvider: API.OperationMethod<
  DeleteCertificateProviderRequest,
  DeleteCertificateProviderResponse,
  DeleteCertificateProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCertificateProviderRequest,
  output: DeleteCertificateProviderResponse,
  errors: [
    DeleteConflictException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCertificateProvider",
}));

export type DeleteCommandError =
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete a command resource.
 */
export const deleteCommand: API.OperationMethod<
  DeleteCommandRequest,
  DeleteCommandResponse,
  DeleteCommandError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCommandRequest,
  output: DeleteCommandResponse,
  errors: [ConflictException, InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCommand",
}));

export type DeleteCommandExecutionError =
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete a command execution.
 *
 * Only command executions that enter a terminal state can be deleted from
 * your account.
 */
export const deleteCommandExecution: API.OperationMethod<
  DeleteCommandExecutionRequest,
  DeleteCommandExecutionResponse,
  DeleteCommandExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCommandExecutionRequest,
  output: DeleteCommandExecutionResponse,
  errors: [ConflictException, InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCommandExecution",
}));

export type DeleteCustomMetricError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Deletes a Device Defender detect custom metric.
 *
 * Requires permission to access the DeleteCustomMetric action.
 *
 * Before you can delete a custom metric, you must first remove the custom metric from all
 * security profiles it's a part of.
 * The
 * security
 * profile associated with the custom metric can be found using the ListSecurityProfiles
 * API with `metricName` set to your custom metric name.
 */
export const deleteCustomMetric: API.OperationMethod<
  DeleteCustomMetricRequest,
  DeleteCustomMetricResponse,
  DeleteCustomMetricError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCustomMetricRequest,
  output: DeleteCustomMetricResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCustomMetric",
}));

export type DeleteDimensionError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Removes the specified dimension from your Amazon Web Services accounts.
 *
 * Requires permission to access the DeleteDimension action.
 */
export const deleteDimension: API.OperationMethod<
  DeleteDimensionRequest,
  DeleteDimensionResponse,
  DeleteDimensionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDimensionRequest,
  output: DeleteDimensionResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDimension",
}));

export type DeleteDomainConfigurationError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes the specified domain configuration.
 *
 * Requires permission to access the DeleteDomainConfiguration action.
 */
export const deleteDomainConfiguration: API.OperationMethod<
  DeleteDomainConfigurationRequest,
  DeleteDomainConfigurationResponse,
  DeleteDomainConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDomainConfigurationRequest,
  output: DeleteDomainConfigurationResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDomainConfiguration",
}));

export type DeleteDynamicThingGroupError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | VersionConflictException
  | CommonErrors;
/**
 * Deletes a dynamic thing group.
 *
 * Requires permission to access the DeleteDynamicThingGroup action.
 */
export const deleteDynamicThingGroup: API.OperationMethod<
  DeleteDynamicThingGroupRequest,
  DeleteDynamicThingGroupResponse,
  DeleteDynamicThingGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDynamicThingGroupRequest,
  output: DeleteDynamicThingGroupResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ThrottlingException,
    VersionConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDynamicThingGroup",
}));

export type DeleteFleetMetricError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | VersionConflictException
  | CommonErrors;
/**
 * Deletes the specified fleet metric.
 * Returns successfully with no error if the deletion is successful or you specify a fleet metric that doesn't exist.
 *
 * Requires permission to access the DeleteFleetMetric action.
 */
export const deleteFleetMetric: API.OperationMethod<
  DeleteFleetMetricRequest,
  DeleteFleetMetricResponse,
  DeleteFleetMetricError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteFleetMetricRequest,
  output: DeleteFleetMetricResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    VersionConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteFleetMetric",
}));

export type DeleteJobError =
  | InvalidRequestException
  | InvalidStateTransitionException
  | LimitExceededException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a job and its related job executions.
 *
 * Deleting a job may take time, depending on the number of job executions created for
 * the job and various other factors. While the job is being deleted, the status of the job
 * will be shown as "DELETION_IN_PROGRESS". Attempting to delete or cancel a job whose
 * status is already "DELETION_IN_PROGRESS" will result in an error.
 *
 * Only 10 jobs may have status "DELETION_IN_PROGRESS" at the same time, or a
 * LimitExceededException will occur.
 *
 * Requires permission to access the DeleteJob action.
 */
export const deleteJob: API.OperationMethod<
  DeleteJobRequest,
  DeleteJobResponse,
  DeleteJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteJobRequest,
  output: DeleteJobResponse,
  errors: [
    InvalidRequestException,
    InvalidStateTransitionException,
    LimitExceededException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteJob",
}));

export type DeleteJobExecutionError =
  | InvalidRequestException
  | InvalidStateTransitionException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a job execution.
 *
 * Requires permission to access the DeleteJobExecution action.
 */
export const deleteJobExecution: API.OperationMethod<
  DeleteJobExecutionRequest,
  DeleteJobExecutionResponse,
  DeleteJobExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteJobExecutionRequest,
  output: DeleteJobExecutionResponse,
  errors: [
    InvalidRequestException,
    InvalidStateTransitionException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteJobExecution",
}));

export type DeleteJobTemplateError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes the specified job template.
 */
export const deleteJobTemplate: API.OperationMethod<
  DeleteJobTemplateRequest,
  DeleteJobTemplateResponse,
  DeleteJobTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteJobTemplateRequest,
  output: DeleteJobTemplateResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteJobTemplate",
}));

export type DeleteMitigationActionError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a defined mitigation action from your Amazon Web Services accounts.
 *
 * Requires permission to access the DeleteMitigationAction action.
 */
export const deleteMitigationAction: API.OperationMethod<
  DeleteMitigationActionRequest,
  DeleteMitigationActionResponse,
  DeleteMitigationActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteMitigationActionRequest,
  output: DeleteMitigationActionResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMitigationAction",
}));

export type DeleteOTAUpdateError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | VersionConflictException
  | CommonErrors;
/**
 * Delete an OTA update.
 *
 * Requires permission to access the DeleteOTAUpdate action.
 */
export const deleteOTAUpdate: API.OperationMethod<
  DeleteOTAUpdateRequest,
  DeleteOTAUpdateResponse,
  DeleteOTAUpdateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteOTAUpdateRequest,
  output: DeleteOTAUpdateResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    VersionConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteOTAUpdate",
}));

export type DeletePackageError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a specific version from a software package.
 *
 * **Note:** All package versions must be deleted before deleting the software package.
 *
 * Requires permission to access the DeletePackageVersion action.
 */
export const deletePackage: API.OperationMethod<
  DeletePackageRequest,
  DeletePackageResponse,
  DeletePackageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeletePackageRequest,
  output: DeletePackageResponse,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePackage",
}));

export type DeletePackageVersionError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a specific version from a software package.
 *
 * **Note:** If a package version is designated as default, you must remove the designation from the software package using the UpdatePackage action.
 */
export const deletePackageVersion: API.OperationMethod<
  DeletePackageVersionRequest,
  DeletePackageVersionResponse,
  DeletePackageVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeletePackageVersionRequest,
  output: DeletePackageVersionResponse,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePackageVersion",
}));

export type DeletePolicyError =
  | DeleteConflictException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes the specified policy.
 *
 * A policy cannot be deleted if it has non-default versions or it is attached to any
 * certificate.
 *
 * To delete a policy, use the DeletePolicyVersion action to delete all non-default
 * versions of the policy; use the DetachPolicy action to detach the policy from any
 * certificate; and then use the DeletePolicy action to delete the policy.
 *
 * When a policy is deleted using DeletePolicy, its default version is deleted with
 * it.
 *
 * Because of the distributed nature of Amazon Web Services, it can take up to five minutes after
 * a policy is detached before it's ready to be deleted.
 *
 * Requires permission to access the DeletePolicy action.
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
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePolicy",
}));

export type DeletePolicyVersionError =
  | DeleteConflictException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes the specified version of the specified policy. You cannot delete the default
 * version of a policy using this action. To delete the default version of a policy, use DeletePolicy. To find out which version of a policy is marked as the default
 * version, use ListPolicyVersions.
 *
 * Requires permission to access the DeletePolicyVersion action.
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
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePolicyVersion",
}));

export type DeleteProvisioningTemplateError =
  | ConflictingResourceUpdateException
  | DeleteConflictException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes a provisioning template.
 *
 * Requires permission to access the DeleteProvisioningTemplate action.
 */
export const deleteProvisioningTemplate: API.OperationMethod<
  DeleteProvisioningTemplateRequest,
  DeleteProvisioningTemplateResponse,
  DeleteProvisioningTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProvisioningTemplateRequest,
  output: DeleteProvisioningTemplateResponse,
  errors: [
    ConflictingResourceUpdateException,
    DeleteConflictException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProvisioningTemplate",
}));

export type DeleteProvisioningTemplateVersionError =
  | ConflictingResourceUpdateException
  | DeleteConflictException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes a provisioning template version.
 *
 * Requires permission to access the DeleteProvisioningTemplateVersion action.
 */
export const deleteProvisioningTemplateVersion: API.OperationMethod<
  DeleteProvisioningTemplateVersionRequest,
  DeleteProvisioningTemplateVersionResponse,
  DeleteProvisioningTemplateVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProvisioningTemplateVersionRequest,
  output: DeleteProvisioningTemplateVersionResponse,
  errors: [
    ConflictingResourceUpdateException,
    DeleteConflictException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProvisioningTemplateVersion",
}));

export type DeleteRegistrationCodeError =
  | InternalFailureException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes a CA certificate registration code.
 *
 * Requires permission to access the DeleteRegistrationCode action.
 */
export const deleteRegistrationCode: API.OperationMethod<
  DeleteRegistrationCodeRequest,
  DeleteRegistrationCodeResponse,
  DeleteRegistrationCodeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteRegistrationCodeRequest,
  output: DeleteRegistrationCodeResponse,
  errors: [
    InternalFailureException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRegistrationCode",
}));

export type DeleteRoleAliasError =
  | DeleteConflictException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes a role alias
 *
 * Requires permission to access the DeleteRoleAlias action.
 */
export const deleteRoleAlias: API.OperationMethod<
  DeleteRoleAliasRequest,
  DeleteRoleAliasResponse,
  DeleteRoleAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteRoleAliasRequest,
  output: DeleteRoleAliasResponse,
  errors: [
    DeleteConflictException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRoleAlias",
}));

export type DeleteScheduledAuditError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a scheduled audit.
 *
 * Requires permission to access the DeleteScheduledAudit action.
 */
export const deleteScheduledAudit: API.OperationMethod<
  DeleteScheduledAuditRequest,
  DeleteScheduledAuditResponse,
  DeleteScheduledAuditError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteScheduledAuditRequest,
  output: DeleteScheduledAuditResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteScheduledAudit",
}));

export type DeleteSecurityProfileError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | VersionConflictException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Deletes a Device Defender security profile.
 *
 * Requires permission to access the DeleteSecurityProfile action.
 */
export const deleteSecurityProfile: API.OperationMethod<
  DeleteSecurityProfileRequest,
  DeleteSecurityProfileResponse,
  DeleteSecurityProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSecurityProfileRequest,
  output: DeleteSecurityProfileResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ThrottlingException,
    VersionConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSecurityProfile",
}));

export type DeleteStreamError =
  | DeleteConflictException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes a stream.
 *
 * Requires permission to access the DeleteStream action.
 */
export const deleteStream: API.OperationMethod<
  DeleteStreamRequest,
  DeleteStreamResponse,
  DeleteStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteStreamRequest,
  output: DeleteStreamResponse,
  errors: [
    DeleteConflictException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteStream",
}));

export type DeleteThingError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | VersionConflictException
  | CommonErrors;
/**
 * Deletes the specified thing. Returns successfully with no error if the deletion is
 * successful or you specify a thing that doesn't exist.
 *
 * Requires permission to access the DeleteThing action.
 */
export const deleteThing: API.OperationMethod<
  DeleteThingRequest,
  DeleteThingResponse,
  DeleteThingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteThingRequest,
  output: DeleteThingResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    VersionConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteThing",
}));

export type DeleteThingGroupError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | VersionConflictException
  | CommonErrors;
/**
 * Deletes a thing group.
 *
 * Requires permission to access the DeleteThingGroup action.
 */
export const deleteThingGroup: API.OperationMethod<
  DeleteThingGroupRequest,
  DeleteThingGroupResponse,
  DeleteThingGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteThingGroupRequest,
  output: DeleteThingGroupResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ThrottlingException,
    VersionConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteThingGroup",
}));

export type DeleteThingTypeError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes the specified thing type. You cannot delete a thing type if it has things
 * associated with it. To delete a thing type, first mark it as deprecated by calling DeprecateThingType, then remove any associated things by calling UpdateThing to change the thing type on any associated thing, and
 * finally use DeleteThingType to delete the thing type.
 *
 * Requires permission to access the DeleteThingType action.
 */
export const deleteThingType: API.OperationMethod<
  DeleteThingTypeRequest,
  DeleteThingTypeResponse,
  DeleteThingTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteThingTypeRequest,
  output: DeleteThingTypeResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteThingType",
}));

export type DeleteTopicRuleError =
  | ConflictingResourceUpdateException
  | InternalException
  | InvalidRequestException
  | ServiceUnavailableException
  | UnauthorizedException
  | TopicRuleNotFound
  | CommonErrors;
/**
 * Deletes the rule.
 *
 * Requires permission to access the DeleteTopicRule action.
 */
export const deleteTopicRule: API.OperationMethod<
  DeleteTopicRuleRequest,
  DeleteTopicRuleResponse,
  DeleteTopicRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTopicRuleRequest,
  output: DeleteTopicRuleResponse,
  errors: [
    ConflictingResourceUpdateException,
    InternalException,
    InvalidRequestException,
    ServiceUnavailableException,
    UnauthorizedException,
    TopicRuleNotFound,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTopicRule",
}));

export type DeleteTopicRuleDestinationError =
  | ConflictingResourceUpdateException
  | InternalException
  | InvalidRequestException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes a topic rule destination.
 *
 * Requires permission to access the DeleteTopicRuleDestination action.
 */
export const deleteTopicRuleDestination: API.OperationMethod<
  DeleteTopicRuleDestinationRequest,
  DeleteTopicRuleDestinationResponse,
  DeleteTopicRuleDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTopicRuleDestinationRequest,
  output: DeleteTopicRuleDestinationResponse,
  errors: [
    ConflictingResourceUpdateException,
    InternalException,
    InvalidRequestException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTopicRuleDestination",
}));

export type DeleteV2LoggingLevelError =
  | InternalException
  | InvalidRequestException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deletes a logging level.
 *
 * Requires permission to access the DeleteV2LoggingLevel action.
 */
export const deleteV2LoggingLevel: API.OperationMethod<
  DeleteV2LoggingLevelRequest,
  DeleteV2LoggingLevelResponse,
  DeleteV2LoggingLevelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteV2LoggingLevelRequest,
  output: DeleteV2LoggingLevelResponse,
  errors: [InternalException, InvalidRequestException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteV2LoggingLevel",
}));

export type DeprecateThingTypeError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deprecates a thing type. You can not associate new things with deprecated thing
 * type.
 *
 * Requires permission to access the DeprecateThingType action.
 */
export const deprecateThingType: API.OperationMethod<
  DeprecateThingTypeRequest,
  DeprecateThingTypeResponse,
  DeprecateThingTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeprecateThingTypeRequest,
  output: DeprecateThingTypeResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeprecateThingType",
}));

export type DescribeAccountAuditConfigurationError =
  | InternalFailureException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets information about the Device Defender audit settings for this account.
 * Settings include how audit notifications are sent and which audit checks are
 * enabled or disabled.
 *
 * Requires permission to access the DescribeAccountAuditConfiguration action.
 */
export const describeAccountAuditConfiguration: API.OperationMethod<
  DescribeAccountAuditConfigurationRequest,
  DescribeAccountAuditConfigurationResponse,
  DescribeAccountAuditConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAccountAuditConfigurationRequest,
  output: DescribeAccountAuditConfigurationResponse,
  errors: [InternalFailureException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAccountAuditConfiguration",
}));

export type DescribeAuditFindingError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets information about a single audit finding. Properties include the reason for
 * noncompliance, the severity of the issue,
 * and the start time
 * when the audit that returned the
 * finding.
 *
 * Requires permission to access the DescribeAuditFinding action.
 */
export const describeAuditFinding: API.OperationMethod<
  DescribeAuditFindingRequest,
  DescribeAuditFindingResponse,
  DescribeAuditFindingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAuditFindingRequest,
  output: DescribeAuditFindingResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAuditFinding",
}));

export type DescribeAuditMitigationActionsTaskError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings. Properties include the actions being applied, the audit checks to which they're being applied, the task status, and aggregated task statistics.
 */
export const describeAuditMitigationActionsTask: API.OperationMethod<
  DescribeAuditMitigationActionsTaskRequest,
  DescribeAuditMitigationActionsTaskResponse,
  DescribeAuditMitigationActionsTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAuditMitigationActionsTaskRequest,
  output: DescribeAuditMitigationActionsTaskResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAuditMitigationActionsTask",
}));

export type DescribeAuditSuppressionError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets information about a Device Defender audit suppression.
 */
export const describeAuditSuppression: API.OperationMethod<
  DescribeAuditSuppressionRequest,
  DescribeAuditSuppressionResponse,
  DescribeAuditSuppressionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAuditSuppressionRequest,
  output: DescribeAuditSuppressionResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAuditSuppression",
}));

export type DescribeAuditTaskError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets information about a Device Defender audit.
 *
 * Requires permission to access the DescribeAuditTask action.
 */
export const describeAuditTask: API.OperationMethod<
  DescribeAuditTaskRequest,
  DescribeAuditTaskResponse,
  DescribeAuditTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAuditTaskRequest,
  output: DescribeAuditTaskResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAuditTask",
}));

export type DescribeAuthorizerError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Describes an authorizer.
 *
 * Requires permission to access the DescribeAuthorizer action.
 */
export const describeAuthorizer: API.OperationMethod<
  DescribeAuthorizerRequest,
  DescribeAuthorizerResponse,
  DescribeAuthorizerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAuthorizerRequest,
  output: DescribeAuthorizerResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAuthorizer",
}));

export type DescribeBillingGroupError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns information about a billing group.
 *
 * Requires permission to access the DescribeBillingGroup action.
 */
export const describeBillingGroup: API.OperationMethod<
  DescribeBillingGroupRequest,
  DescribeBillingGroupResponse,
  DescribeBillingGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeBillingGroupRequest,
  output: DescribeBillingGroupResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeBillingGroup",
}));

export type DescribeCACertificateError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Describes a registered CA certificate.
 *
 * Requires permission to access the DescribeCACertificate action.
 */
export const describeCACertificate: API.OperationMethod<
  DescribeCACertificateRequest,
  DescribeCACertificateResponse,
  DescribeCACertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeCACertificateRequest,
  output: DescribeCACertificateResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCACertificate",
}));

export type DescribeCertificateError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Gets information about the specified certificate.
 *
 * Requires permission to access the DescribeCertificate action.
 */
export const describeCertificate: API.OperationMethod<
  DescribeCertificateRequest,
  DescribeCertificateResponse,
  DescribeCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeCertificateRequest,
  output: DescribeCertificateResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCertificate",
}));

export type DescribeCertificateProviderError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Describes a certificate provider.
 *
 * Requires permission to access the DescribeCertificateProvider action.
 */
export const describeCertificateProvider: API.OperationMethod<
  DescribeCertificateProviderRequest,
  DescribeCertificateProviderResponse,
  DescribeCertificateProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeCertificateProviderRequest,
  output: DescribeCertificateProviderResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCertificateProvider",
}));

export type DescribeCustomMetricError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Gets information about a Device Defender detect custom metric.
 *
 * Requires permission to access the DescribeCustomMetric action.
 */
export const describeCustomMetric: API.OperationMethod<
  DescribeCustomMetricRequest,
  DescribeCustomMetricResponse,
  DescribeCustomMetricError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeCustomMetricRequest,
  output: DescribeCustomMetricResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCustomMetric",
}));

export type DescribeDefaultAuthorizerError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Describes the default authorizer.
 *
 * Requires permission to access the DescribeDefaultAuthorizer action.
 */
export const describeDefaultAuthorizer: API.OperationMethod<
  DescribeDefaultAuthorizerRequest,
  DescribeDefaultAuthorizerResponse,
  DescribeDefaultAuthorizerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeDefaultAuthorizerRequest,
  output: DescribeDefaultAuthorizerResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDefaultAuthorizer",
}));

export type DescribeDetectMitigationActionsTaskError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Gets information about a Device Defender ML Detect mitigation action.
 *
 * Requires permission to access the DescribeDetectMitigationActionsTask action.
 */
export const describeDetectMitigationActionsTask: API.OperationMethod<
  DescribeDetectMitigationActionsTaskRequest,
  DescribeDetectMitigationActionsTaskResponse,
  DescribeDetectMitigationActionsTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeDetectMitigationActionsTaskRequest,
  output: DescribeDetectMitigationActionsTaskResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDetectMitigationActionsTask",
}));

export type DescribeDimensionError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Provides details about a dimension that is defined in your Amazon Web Services accounts.
 *
 * Requires permission to access the DescribeDimension action.
 */
export const describeDimension: API.OperationMethod<
  DescribeDimensionRequest,
  DescribeDimensionResponse,
  DescribeDimensionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeDimensionRequest,
  output: DescribeDimensionResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDimension",
}));

export type DescribeDomainConfigurationError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Gets summary information about a domain configuration.
 *
 * Requires permission to access the DescribeDomainConfiguration action.
 */
export const describeDomainConfiguration: API.OperationMethod<
  DescribeDomainConfigurationRequest,
  DescribeDomainConfigurationResponse,
  DescribeDomainConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeDomainConfigurationRequest,
  output: DescribeDomainConfigurationResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDomainConfiguration",
}));

export type DescribeEncryptionConfigurationError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Retrieves the encryption configuration for resources and data of your Amazon Web Services account in
 * Amazon Web Services IoT Core. For more information, see Data encryption at rest in
 * the *Amazon Web Services IoT Core Developer Guide*.
 */
export const describeEncryptionConfiguration: API.OperationMethod<
  DescribeEncryptionConfigurationRequest,
  DescribeEncryptionConfigurationResponse,
  DescribeEncryptionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeEncryptionConfigurationRequest,
  output: DescribeEncryptionConfigurationResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEncryptionConfiguration",
}));

export type DescribeEndpointError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Returns or creates a unique endpoint specific to the Amazon Web Services account making the
 * call.
 *
 * The first time `DescribeEndpoint` is called, an endpoint is created. All subsequent calls to `DescribeEndpoint` return the same endpoint.
 *
 * Requires permission to access the DescribeEndpoint action.
 */
export const describeEndpoint: API.OperationMethod<
  DescribeEndpointRequest,
  DescribeEndpointResponse,
  DescribeEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeEndpointRequest,
  output: DescribeEndpointResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEndpoint",
}));

export type DescribeEventConfigurationsError =
  | InternalFailureException
  | ThrottlingException
  | CommonErrors;
/**
 * Describes event configurations.
 *
 * Requires permission to access the DescribeEventConfigurations action.
 */
export const describeEventConfigurations: API.OperationMethod<
  DescribeEventConfigurationsRequest,
  DescribeEventConfigurationsResponse,
  DescribeEventConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeEventConfigurationsRequest,
  output: DescribeEventConfigurationsResponse,
  errors: [InternalFailureException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEventConfigurations",
}));

export type DescribeFleetMetricError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Gets information about the specified fleet metric.
 *
 * Requires permission to access the DescribeFleetMetric action.
 */
export const describeFleetMetric: API.OperationMethod<
  DescribeFleetMetricRequest,
  DescribeFleetMetricResponse,
  DescribeFleetMetricError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeFleetMetricRequest,
  output: DescribeFleetMetricResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeFleetMetric",
}));

export type DescribeIndexError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Describes a search index.
 *
 * Requires permission to access the DescribeIndex action.
 */
export const describeIndex: API.OperationMethod<
  DescribeIndexRequest,
  DescribeIndexResponse,
  DescribeIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeIndexRequest,
  output: DescribeIndexResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeIndex",
}));

export type DescribeJobError =
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Describes a job.
 *
 * Requires permission to access the DescribeJob action.
 */
export const describeJob: API.OperationMethod<
  DescribeJobRequest,
  DescribeJobResponse,
  DescribeJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeJobRequest,
  output: DescribeJobResponse,
  errors: [
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeJob",
}));

export type DescribeJobExecutionError =
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Describes a job execution.
 *
 * Requires permission to access the DescribeJobExecution action.
 */
export const describeJobExecution: API.OperationMethod<
  DescribeJobExecutionRequest,
  DescribeJobExecutionResponse,
  DescribeJobExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeJobExecutionRequest,
  output: DescribeJobExecutionResponse,
  errors: [
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeJobExecution",
}));

export type DescribeJobTemplateError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns information about a job template.
 */
export const describeJobTemplate: API.OperationMethod<
  DescribeJobTemplateRequest,
  DescribeJobTemplateResponse,
  DescribeJobTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeJobTemplateRequest,
  output: DescribeJobTemplateResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeJobTemplate",
}));

export type DescribeManagedJobTemplateError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * View details of a managed job template.
 */
export const describeManagedJobTemplate: API.OperationMethod<
  DescribeManagedJobTemplateRequest,
  DescribeManagedJobTemplateResponse,
  DescribeManagedJobTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeManagedJobTemplateRequest,
  output: DescribeManagedJobTemplateResponse,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeManagedJobTemplate",
}));

export type DescribeMitigationActionError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets information about a mitigation action.
 *
 * Requires permission to access the DescribeMitigationAction action.
 */
export const describeMitigationAction: API.OperationMethod<
  DescribeMitigationActionRequest,
  DescribeMitigationActionResponse,
  DescribeMitigationActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeMitigationActionRequest,
  output: DescribeMitigationActionResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeMitigationAction",
}));

export type DescribeProvisioningTemplateError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Returns information about a provisioning template.
 *
 * Requires permission to access the DescribeProvisioningTemplate action.
 */
export const describeProvisioningTemplate: API.OperationMethod<
  DescribeProvisioningTemplateRequest,
  DescribeProvisioningTemplateResponse,
  DescribeProvisioningTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeProvisioningTemplateRequest,
  output: DescribeProvisioningTemplateResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeProvisioningTemplate",
}));

export type DescribeProvisioningTemplateVersionError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Returns information about a provisioning template version.
 *
 * Requires permission to access the DescribeProvisioningTemplateVersion action.
 */
export const describeProvisioningTemplateVersion: API.OperationMethod<
  DescribeProvisioningTemplateVersionRequest,
  DescribeProvisioningTemplateVersionResponse,
  DescribeProvisioningTemplateVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeProvisioningTemplateVersionRequest,
  output: DescribeProvisioningTemplateVersionResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeProvisioningTemplateVersion",
}));

export type DescribeRoleAliasError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Describes a role alias.
 *
 * Requires permission to access the DescribeRoleAlias action.
 */
export const describeRoleAlias: API.OperationMethod<
  DescribeRoleAliasRequest,
  DescribeRoleAliasResponse,
  DescribeRoleAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeRoleAliasRequest,
  output: DescribeRoleAliasResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRoleAlias",
}));

export type DescribeScheduledAuditError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets information about a scheduled audit.
 *
 * Requires permission to access the DescribeScheduledAudit action.
 */
export const describeScheduledAudit: API.OperationMethod<
  DescribeScheduledAuditRequest,
  DescribeScheduledAuditResponse,
  DescribeScheduledAuditError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeScheduledAuditRequest,
  output: DescribeScheduledAuditResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeScheduledAudit",
}));

export type DescribeSecurityProfileError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Gets information about a Device Defender security profile.
 *
 * Requires permission to access the DescribeSecurityProfile action.
 */
export const describeSecurityProfile: API.OperationMethod<
  DescribeSecurityProfileRequest,
  DescribeSecurityProfileResponse,
  DescribeSecurityProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeSecurityProfileRequest,
  output: DescribeSecurityProfileResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSecurityProfile",
}));

export type DescribeStreamError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Gets information about a stream.
 *
 * Requires permission to access the DescribeStream action.
 */
export const describeStream: API.OperationMethod<
  DescribeStreamRequest,
  DescribeStreamResponse,
  DescribeStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeStreamRequest,
  output: DescribeStreamResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeStream",
}));

export type DescribeThingError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Gets information about the specified thing.
 *
 * Requires permission to access the DescribeThing action.
 */
export const describeThing: API.OperationMethod<
  DescribeThingRequest,
  DescribeThingResponse,
  DescribeThingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeThingRequest,
  output: DescribeThingResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeThing",
}));

export type DescribeThingGroupError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Describe a thing group.
 *
 * Requires permission to access the DescribeThingGroup action.
 */
export const describeThingGroup: API.OperationMethod<
  DescribeThingGroupRequest,
  DescribeThingGroupResponse,
  DescribeThingGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeThingGroupRequest,
  output: DescribeThingGroupResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeThingGroup",
}));

export type DescribeThingRegistrationTaskError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Describes a bulk thing provisioning task.
 *
 * Requires permission to access the DescribeThingRegistrationTask action.
 */
export const describeThingRegistrationTask: API.OperationMethod<
  DescribeThingRegistrationTaskRequest,
  DescribeThingRegistrationTaskResponse,
  DescribeThingRegistrationTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeThingRegistrationTaskRequest,
  output: DescribeThingRegistrationTaskResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeThingRegistrationTask",
}));

export type DescribeThingTypeError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Gets information about the specified thing type.
 *
 * Requires permission to access the DescribeThingType action.
 */
export const describeThingType: API.OperationMethod<
  DescribeThingTypeRequest,
  DescribeThingTypeResponse,
  DescribeThingTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeThingTypeRequest,
  output: DescribeThingTypeResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeThingType",
}));

export type DetachPolicyError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Detaches a policy from the specified target.
 *
 * Because of the distributed nature of Amazon Web Services, it can take up to five minutes after
 * a policy is detached before it's ready to be deleted.
 *
 * Requires permission to access the DetachPolicy action.
 */
export const detachPolicy: API.OperationMethod<
  DetachPolicyRequest,
  DetachPolicyResponse,
  DetachPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DetachPolicyRequest,
  output: DetachPolicyResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetachPolicy",
}));

export type DetachPrincipalPolicyError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Removes the specified policy from the specified certificate.
 *
 * **Note:** This action is deprecated and works as
 * expected for backward compatibility, but we won't add enhancements. Use DetachPolicy instead.
 *
 * Requires permission to access the DetachPrincipalPolicy action.
 */
export const detachPrincipalPolicy: API.OperationMethod<
  DetachPrincipalPolicyRequest,
  DetachPrincipalPolicyResponse,
  DetachPrincipalPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DetachPrincipalPolicyRequest,
  output: DetachPrincipalPolicyResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetachPrincipalPolicy",
}));

export type DetachSecurityProfileError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Disassociates a Device Defender security profile from a thing group or from this account.
 *
 * Requires permission to access the DetachSecurityProfile action.
 */
export const detachSecurityProfile: API.OperationMethod<
  DetachSecurityProfileRequest,
  DetachSecurityProfileResponse,
  DetachSecurityProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DetachSecurityProfileRequest,
  output: DetachSecurityProfileResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetachSecurityProfile",
}));

export type DetachThingPrincipalError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Detaches the specified principal from the specified thing. A principal can be X.509
 * certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
 * identities.
 *
 * This call is asynchronous. It might take several seconds for the detachment to
 * propagate.
 *
 * Requires permission to access the DetachThingPrincipal action.
 */
export const detachThingPrincipal: API.OperationMethod<
  DetachThingPrincipalRequest,
  DetachThingPrincipalResponse,
  DetachThingPrincipalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DetachThingPrincipalRequest,
  output: DetachThingPrincipalResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetachThingPrincipal",
}));

export type DisableTopicRuleError =
  | ConflictingResourceUpdateException
  | InternalException
  | InvalidRequestException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Disables the rule.
 *
 * Requires permission to access the DisableTopicRule action.
 */
export const disableTopicRule: API.OperationMethod<
  DisableTopicRuleRequest,
  DisableTopicRuleResponse,
  DisableTopicRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableTopicRuleRequest,
  output: DisableTopicRuleResponse,
  errors: [
    ConflictingResourceUpdateException,
    InternalException,
    InvalidRequestException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableTopicRule",
}));

export type DisassociateSbomFromPackageVersionError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates the selected software bill of materials (SBOM) from a specific software package version.
 *
 * Requires permission to access the DisassociateSbomWithPackageVersion action.
 */
export const disassociateSbomFromPackageVersion: API.OperationMethod<
  DisassociateSbomFromPackageVersionRequest,
  DisassociateSbomFromPackageVersionResponse,
  DisassociateSbomFromPackageVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateSbomFromPackageVersionRequest,
  output: DisassociateSbomFromPackageVersionResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateSbomFromPackageVersion",
}));

export type EnableTopicRuleError =
  | ConflictingResourceUpdateException
  | InternalException
  | InvalidRequestException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Enables the rule.
 *
 * Requires permission to access the EnableTopicRule action.
 */
export const enableTopicRule: API.OperationMethod<
  EnableTopicRuleRequest,
  EnableTopicRuleResponse,
  EnableTopicRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableTopicRuleRequest,
  output: EnableTopicRuleResponse,
  errors: [
    ConflictingResourceUpdateException,
    InternalException,
    InvalidRequestException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableTopicRule",
}));

export type GetBehaviorModelTrainingSummariesError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Returns a Device Defender's ML Detect Security Profile training model's status.
 *
 * Requires permission to access the GetBehaviorModelTrainingSummaries action.
 */
export const getBehaviorModelTrainingSummaries: API.PaginatedOperationMethod<
  GetBehaviorModelTrainingSummariesRequest,
  GetBehaviorModelTrainingSummariesResponse,
  GetBehaviorModelTrainingSummariesError,
  Credentials | HttpClient.HttpClient,
  BehaviorModelTrainingSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetBehaviorModelTrainingSummariesRequest,
  output: GetBehaviorModelTrainingSummariesResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBehaviorModelTrainingSummaries",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "summaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetBucketsAggregationError =
  | IndexNotReadyException
  | InternalFailureException
  | InvalidAggregationException
  | InvalidQueryException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Aggregates on indexed data with search queries pertaining to particular fields.
 *
 * Requires permission to access the GetBucketsAggregation action.
 */
export const getBucketsAggregation: API.OperationMethod<
  GetBucketsAggregationRequest,
  GetBucketsAggregationResponse,
  GetBucketsAggregationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBucketsAggregationRequest,
  output: GetBucketsAggregationResponse,
  errors: [
    IndexNotReadyException,
    InternalFailureException,
    InvalidAggregationException,
    InvalidQueryException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBucketsAggregation",
}));

export type GetCardinalityError =
  | IndexNotReadyException
  | InternalFailureException
  | InvalidAggregationException
  | InvalidQueryException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Returns the approximate count of unique values that match the query.
 *
 * Requires permission to access the GetCardinality action.
 */
export const getCardinality: API.OperationMethod<
  GetCardinalityRequest,
  GetCardinalityResponse,
  GetCardinalityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCardinalityRequest,
  output: GetCardinalityResponse,
  errors: [
    IndexNotReadyException,
    InternalFailureException,
    InvalidAggregationException,
    InvalidQueryException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCardinality",
}));

export type GetCommandError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about the specified command.
 */
export const getCommand: API.OperationMethod<
  GetCommandRequest,
  GetCommandResponse,
  GetCommandError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCommandRequest,
  output: GetCommandResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCommand",
}));

export type GetCommandExecutionError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about the specific command execution on a single device.
 */
export const getCommandExecution: API.OperationMethod<
  GetCommandExecutionRequest,
  GetCommandExecutionResponse,
  GetCommandExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCommandExecutionRequest,
  output: GetCommandExecutionResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCommandExecution",
}));

export type GetEffectivePoliciesError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Gets a list of the policies that have an effect on the authorization behavior of the
 * specified device when it connects to the IoT device gateway.
 *
 * Requires permission to access the GetEffectivePolicies action.
 */
export const getEffectivePolicies: API.OperationMethod<
  GetEffectivePoliciesRequest,
  GetEffectivePoliciesResponse,
  GetEffectivePoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetEffectivePoliciesRequest,
  output: GetEffectivePoliciesResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEffectivePolicies",
}));

export type GetIndexingConfigurationError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Gets the indexing configuration.
 *
 * Requires permission to access the GetIndexingConfiguration action.
 */
export const getIndexingConfiguration: API.OperationMethod<
  GetIndexingConfigurationRequest,
  GetIndexingConfigurationResponse,
  GetIndexingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIndexingConfigurationRequest,
  output: GetIndexingConfigurationResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIndexingConfiguration",
}));

export type GetJobDocumentError =
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets a job document.
 *
 * Requires permission to access the GetJobDocument action.
 */
export const getJobDocument: API.OperationMethod<
  GetJobDocumentRequest,
  GetJobDocumentResponse,
  GetJobDocumentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetJobDocumentRequest,
  output: GetJobDocumentResponse,
  errors: [
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetJobDocument",
}));

export type GetLoggingOptionsError =
  | InternalException
  | InvalidRequestException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Gets the logging options.
 *
 * NOTE: use of this command is not recommended. Use `GetV2LoggingOptions`
 * instead.
 *
 * Requires permission to access the GetLoggingOptions action.
 */
export const getLoggingOptions: API.OperationMethod<
  GetLoggingOptionsRequest,
  GetLoggingOptionsResponse,
  GetLoggingOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLoggingOptionsRequest,
  output: GetLoggingOptionsResponse,
  errors: [InternalException, InvalidRequestException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLoggingOptions",
}));

export type GetOTAUpdateError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Gets an OTA update.
 *
 * Requires permission to access the GetOTAUpdate action.
 */
export const getOTAUpdate: API.OperationMethod<
  GetOTAUpdateRequest,
  GetOTAUpdateResponse,
  GetOTAUpdateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOTAUpdateRequest,
  output: GetOTAUpdateResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOTAUpdate",
}));

export type GetPackageError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about the specified software package.
 *
 * Requires permission to access the GetPackage action.
 */
export const getPackage: API.OperationMethod<
  GetPackageRequest,
  GetPackageResponse,
  GetPackageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPackageRequest,
  output: GetPackageResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPackage",
}));

export type GetPackageConfigurationError =
  | InternalServerException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets information about the specified software package's configuration.
 *
 * Requires permission to access the GetPackageConfiguration action.
 */
export const getPackageConfiguration: API.OperationMethod<
  GetPackageConfigurationRequest,
  GetPackageConfigurationResponse,
  GetPackageConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPackageConfigurationRequest,
  output: GetPackageConfigurationResponse,
  errors: [InternalServerException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPackageConfiguration",
}));

export type GetPackageVersionError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about the specified package version.
 *
 * Requires permission to access the GetPackageVersion action.
 */
export const getPackageVersion: API.OperationMethod<
  GetPackageVersionRequest,
  GetPackageVersionResponse,
  GetPackageVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPackageVersionRequest,
  output: GetPackageVersionResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPackageVersion",
}));

export type GetPercentilesError =
  | IndexNotReadyException
  | InternalFailureException
  | InvalidAggregationException
  | InvalidQueryException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Groups the aggregated values that match the query into percentile groupings. The default
 * percentile groupings are: 1,5,25,50,75,95,99, although you can specify your own
 * when you call `GetPercentiles`. This function returns a value for each
 * percentile group specified (or the default percentile groupings). The percentile group
 * "1" contains the aggregated field value that occurs in approximately one percent of the
 * values that match the query. The percentile group "5" contains the aggregated field value
 * that occurs in approximately five percent of the values that match the query, and so on.
 * The result is an approximation, the more values that match the query, the more accurate
 * the percentile values.
 *
 * Requires permission to access the GetPercentiles action.
 */
export const getPercentiles: API.OperationMethod<
  GetPercentilesRequest,
  GetPercentilesResponse,
  GetPercentilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPercentilesRequest,
  output: GetPercentilesResponse,
  errors: [
    IndexNotReadyException,
    InternalFailureException,
    InvalidAggregationException,
    InvalidQueryException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPercentiles",
}));

export type GetPolicyError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Gets information about the specified policy with the policy document of the default
 * version.
 *
 * Requires permission to access the GetPolicy action.
 */
export const getPolicy: API.OperationMethod<
  GetPolicyRequest,
  GetPolicyResponse,
  GetPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPolicyRequest,
  output: GetPolicyResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPolicy",
}));

export type GetPolicyVersionError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Gets information about the specified policy version.
 *
 * Requires permission to access the GetPolicyVersion action.
 */
export const getPolicyVersion: API.OperationMethod<
  GetPolicyVersionRequest,
  GetPolicyVersionResponse,
  GetPolicyVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPolicyVersionRequest,
  output: GetPolicyVersionResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPolicyVersion",
}));

export type GetRegistrationCodeError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Gets a registration code used to register a CA certificate with IoT.
 *
 * IoT will create a registration code as part of this API call if the registration
 * code doesn't exist or has been deleted. If you already have a registration code, this API
 * call will return the same registration code.
 *
 * Requires permission to access the GetRegistrationCode action.
 */
export const getRegistrationCode: API.OperationMethod<
  GetRegistrationCodeRequest,
  GetRegistrationCodeResponse,
  GetRegistrationCodeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRegistrationCodeRequest,
  output: GetRegistrationCodeResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRegistrationCode",
}));

export type GetStatisticsError =
  | IndexNotReadyException
  | InternalFailureException
  | InvalidAggregationException
  | InvalidQueryException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Returns the count, average, sum, minimum, maximum, sum of squares, variance,
 * and standard deviation for the specified aggregated field. If the aggregation field is of type
 * `String`, only the count statistic is returned.
 *
 * Requires permission to access the GetStatistics action.
 */
export const getStatistics: API.OperationMethod<
  GetStatisticsRequest,
  GetStatisticsResponse,
  GetStatisticsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetStatisticsRequest,
  output: GetStatisticsResponse,
  errors: [
    IndexNotReadyException,
    InternalFailureException,
    InvalidAggregationException,
    InvalidQueryException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetStatistics",
}));

export type GetThingConnectivityDataError =
  | IndexNotReadyException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Retrieves the live connectivity status per device. If a device has never connected to IoT Core or was disconnected for more than 1 hour before fleet indexing's `thingConnectivityIndexingMode` was enabled, the response will have the `connected` field set to `false` with no additional session details.
 */
export const getThingConnectivityData: API.OperationMethod<
  GetThingConnectivityDataRequest,
  GetThingConnectivityDataResponse,
  GetThingConnectivityDataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetThingConnectivityDataRequest,
  output: GetThingConnectivityDataResponse,
  errors: [
    IndexNotReadyException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetThingConnectivityData",
}));

export type GetTopicRuleError =
  | InternalException
  | InvalidRequestException
  | ServiceUnavailableException
  | UnauthorizedException
  | TopicRuleNotFound
  | CommonErrors;
/**
 * Gets information about the rule.
 *
 * Requires permission to access the GetTopicRule action.
 */
export const getTopicRule: API.OperationMethod<
  GetTopicRuleRequest,
  GetTopicRuleResponse,
  GetTopicRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTopicRuleRequest,
  output: GetTopicRuleResponse,
  errors: [
    InternalException,
    InvalidRequestException,
    ServiceUnavailableException,
    UnauthorizedException,
    TopicRuleNotFound,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTopicRule",
}));

export type GetTopicRuleDestinationError =
  | InternalException
  | InvalidRequestException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Gets information about a topic rule destination.
 *
 * Requires permission to access the GetTopicRuleDestination action.
 */
export const getTopicRuleDestination: API.OperationMethod<
  GetTopicRuleDestinationRequest,
  GetTopicRuleDestinationResponse,
  GetTopicRuleDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTopicRuleDestinationRequest,
  output: GetTopicRuleDestinationResponse,
  errors: [
    InternalException,
    InvalidRequestException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTopicRuleDestination",
}));

export type GetV2LoggingOptionsError =
  | InternalException
  | NotConfiguredException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Gets the fine grained logging options.
 *
 * Requires permission to access the GetV2LoggingOptions action.
 */
export const getV2LoggingOptions: API.OperationMethod<
  GetV2LoggingOptionsRequest,
  GetV2LoggingOptionsResponse,
  GetV2LoggingOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetV2LoggingOptionsRequest,
  output: GetV2LoggingOptionsResponse,
  errors: [InternalException, NotConfiguredException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetV2LoggingOptions",
}));

export type ListActiveViolationsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Lists the active violations for a given Device Defender security profile.
 *
 * Requires permission to access the ListActiveViolations action.
 */
export const listActiveViolations: API.PaginatedOperationMethod<
  ListActiveViolationsRequest,
  ListActiveViolationsResponse,
  ListActiveViolationsError,
  Credentials | HttpClient.HttpClient,
  ActiveViolation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListActiveViolationsRequest,
  output: ListActiveViolationsResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListActiveViolations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "activeViolations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAttachedPoliciesError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the policies attached to the specified thing group.
 *
 * Requires permission to access the ListAttachedPolicies action.
 */
export const listAttachedPolicies: API.PaginatedOperationMethod<
  ListAttachedPoliciesRequest,
  ListAttachedPoliciesResponse,
  ListAttachedPoliciesError,
  Credentials | HttpClient.HttpClient,
  Policy
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAttachedPoliciesRequest,
  output: ListAttachedPoliciesResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAttachedPolicies",
  pagination: {
    inputToken: "marker",
    outputToken: "nextMarker",
    items: "policies",
    pageSize: "pageSize",
  } as const,
})) as any;

export type ListAuditFindingsError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists the findings (results) of a Device Defender audit or of the audits
 * performed during a specified time period. (Findings are retained for 90 days.)
 *
 * Requires permission to access the ListAuditFindings action.
 */
export const listAuditFindings: API.PaginatedOperationMethod<
  ListAuditFindingsRequest,
  ListAuditFindingsResponse,
  ListAuditFindingsError,
  Credentials | HttpClient.HttpClient,
  AuditFinding
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAuditFindingsRequest,
  output: ListAuditFindingsResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAuditFindings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "findings",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAuditMitigationActionsExecutionsError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the status of audit mitigation action tasks that were
 * executed.
 *
 * Requires permission to access the ListAuditMitigationActionsExecutions action.
 */
export const listAuditMitigationActionsExecutions: API.PaginatedOperationMethod<
  ListAuditMitigationActionsExecutionsRequest,
  ListAuditMitigationActionsExecutionsResponse,
  ListAuditMitigationActionsExecutionsError,
  Credentials | HttpClient.HttpClient,
  AuditMitigationActionExecutionMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAuditMitigationActionsExecutionsRequest,
  output: ListAuditMitigationActionsExecutionsResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAuditMitigationActionsExecutions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "actionsExecutions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAuditMitigationActionsTasksError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets a list of audit mitigation action tasks that match the specified filters.
 *
 * Requires permission to access the ListAuditMitigationActionsTasks action.
 */
export const listAuditMitigationActionsTasks: API.PaginatedOperationMethod<
  ListAuditMitigationActionsTasksRequest,
  ListAuditMitigationActionsTasksResponse,
  ListAuditMitigationActionsTasksError,
  Credentials | HttpClient.HttpClient,
  AuditMitigationActionsTaskMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAuditMitigationActionsTasksRequest,
  output: ListAuditMitigationActionsTasksResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAuditMitigationActionsTasks",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "tasks",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAuditSuppressionsError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists your Device Defender audit listings.
 *
 * Requires permission to access the ListAuditSuppressions action.
 */
export const listAuditSuppressions: API.PaginatedOperationMethod<
  ListAuditSuppressionsRequest,
  ListAuditSuppressionsResponse,
  ListAuditSuppressionsError,
  Credentials | HttpClient.HttpClient,
  AuditSuppression
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAuditSuppressionsRequest,
  output: ListAuditSuppressionsResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAuditSuppressions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "suppressions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAuditTasksError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists the Device Defender audits that have been performed during a given
 * time period.
 *
 * Requires permission to access the ListAuditTasks action.
 */
export const listAuditTasks: API.PaginatedOperationMethod<
  ListAuditTasksRequest,
  ListAuditTasksResponse,
  ListAuditTasksError,
  Credentials | HttpClient.HttpClient,
  AuditTaskMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAuditTasksRequest,
  output: ListAuditTasksResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAuditTasks",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "tasks",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAuthorizersError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the authorizers registered in your account.
 *
 * Requires permission to access the ListAuthorizers action.
 */
export const listAuthorizers: API.PaginatedOperationMethod<
  ListAuthorizersRequest,
  ListAuthorizersResponse,
  ListAuthorizersError,
  Credentials | HttpClient.HttpClient,
  AuthorizerSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAuthorizersRequest,
  output: ListAuthorizersResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAuthorizers",
  pagination: {
    inputToken: "marker",
    outputToken: "nextMarker",
    items: "authorizers",
    pageSize: "pageSize",
  } as const,
})) as any;

export type ListBillingGroupsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists the billing groups you have created.
 *
 * Requires permission to access the ListBillingGroups action.
 */
export const listBillingGroups: API.PaginatedOperationMethod<
  ListBillingGroupsRequest,
  ListBillingGroupsResponse,
  ListBillingGroupsError,
  Credentials | HttpClient.HttpClient,
  GroupNameAndArn
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListBillingGroupsRequest,
  output: ListBillingGroupsResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBillingGroups",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "billingGroups",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCACertificatesError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the CA certificates registered for your Amazon Web Services account.
 *
 * The results are paginated with a default page size of 25. You can use the returned
 * marker to retrieve additional results.
 *
 * Requires permission to access the ListCACertificates action.
 */
export const listCACertificates: API.PaginatedOperationMethod<
  ListCACertificatesRequest,
  ListCACertificatesResponse,
  ListCACertificatesError,
  Credentials | HttpClient.HttpClient,
  CACertificate
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCACertificatesRequest,
  output: ListCACertificatesResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCACertificates",
  pagination: {
    inputToken: "marker",
    outputToken: "nextMarker",
    items: "certificates",
    pageSize: "pageSize",
  } as const,
})) as any;

export type ListCertificateProvidersError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists all your certificate providers in your Amazon Web Services account.
 *
 * Requires permission to access the ListCertificateProviders action.
 */
export const listCertificateProviders: API.OperationMethod<
  ListCertificateProvidersRequest,
  ListCertificateProvidersResponse,
  ListCertificateProvidersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListCertificateProvidersRequest,
  output: ListCertificateProvidersResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCertificateProviders",
}));

export type ListCertificatesError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the certificates registered in your Amazon Web Services account.
 *
 * The results are paginated with a default page size of 25. You can use the returned
 * marker to retrieve additional results.
 *
 * Requires permission to access the ListCertificates action.
 */
export const listCertificates: API.PaginatedOperationMethod<
  ListCertificatesRequest,
  ListCertificatesResponse,
  ListCertificatesError,
  Credentials | HttpClient.HttpClient,
  Certificate
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCertificatesRequest,
  output: ListCertificatesResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCertificates",
  pagination: {
    inputToken: "marker",
    outputToken: "nextMarker",
    items: "certificates",
    pageSize: "pageSize",
  } as const,
})) as any;

export type ListCertificatesByCAError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * List the device certificates signed by the specified CA certificate.
 *
 * Requires permission to access the ListCertificatesByCA action.
 */
export const listCertificatesByCA: API.PaginatedOperationMethod<
  ListCertificatesByCARequest,
  ListCertificatesByCAResponse,
  ListCertificatesByCAError,
  Credentials | HttpClient.HttpClient,
  Certificate
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCertificatesByCARequest,
  output: ListCertificatesByCAResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCertificatesByCA",
  pagination: {
    inputToken: "marker",
    outputToken: "nextMarker",
    items: "certificates",
    pageSize: "pageSize",
  } as const,
})) as any;

export type ListCommandExecutionsError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List all command executions.
 *
 * - You must provide only the `startedTimeFilter` or
 * the `completedTimeFilter` information. If you provide
 * both time filters, the API will generate an error. You can use
 * this information to retrieve a list of command executions
 * within a specific timeframe.
 *
 * - You must provide only the `commandArn` or
 * the `thingArn` information depending on whether you want
 * to list executions for a specific command or an IoT thing. If you provide
 * both fields, the API will generate an error.
 *
 * For more information about considerations for using this API, see
 * List
 * command executions in your account (CLI).
 */
export const listCommandExecutions: API.PaginatedOperationMethod<
  ListCommandExecutionsRequest,
  ListCommandExecutionsResponse,
  ListCommandExecutionsError,
  Credentials | HttpClient.HttpClient,
  CommandExecutionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCommandExecutionsRequest,
  output: ListCommandExecutionsResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCommandExecutions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "commandExecutions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCommandsError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List all commands in your account.
 */
export const listCommands: API.PaginatedOperationMethod<
  ListCommandsRequest,
  ListCommandsResponse,
  ListCommandsError,
  Credentials | HttpClient.HttpClient,
  CommandSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCommandsRequest,
  output: ListCommandsResponse,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCommands",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "commands",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCustomMetricsError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Lists your Device Defender detect custom metrics.
 *
 * Requires permission to access the ListCustomMetrics action.
 */
export const listCustomMetrics: API.PaginatedOperationMethod<
  ListCustomMetricsRequest,
  ListCustomMetricsResponse,
  ListCustomMetricsError,
  Credentials | HttpClient.HttpClient,
  MetricName
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCustomMetricsRequest,
  output: ListCustomMetricsResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCustomMetrics",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "metricNames",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDetectMitigationActionsExecutionsError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Lists mitigation actions executions for a Device Defender ML Detect Security Profile.
 *
 * Requires permission to access the ListDetectMitigationActionsExecutions action.
 */
export const listDetectMitigationActionsExecutions: API.PaginatedOperationMethod<
  ListDetectMitigationActionsExecutionsRequest,
  ListDetectMitigationActionsExecutionsResponse,
  ListDetectMitigationActionsExecutionsError,
  Credentials | HttpClient.HttpClient,
  DetectMitigationActionExecution
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDetectMitigationActionsExecutionsRequest,
  output: ListDetectMitigationActionsExecutionsResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDetectMitigationActionsExecutions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "actionsExecutions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDetectMitigationActionsTasksError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * List of Device Defender ML Detect mitigation actions tasks.
 *
 * Requires permission to access the ListDetectMitigationActionsTasks action.
 */
export const listDetectMitigationActionsTasks: API.PaginatedOperationMethod<
  ListDetectMitigationActionsTasksRequest,
  ListDetectMitigationActionsTasksResponse,
  ListDetectMitigationActionsTasksError,
  Credentials | HttpClient.HttpClient,
  DetectMitigationActionsTaskSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDetectMitigationActionsTasksRequest,
  output: ListDetectMitigationActionsTasksResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDetectMitigationActionsTasks",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "tasks",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDimensionsError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * List the set of dimensions that are defined for your Amazon Web Services accounts.
 *
 * Requires permission to access the ListDimensions action.
 */
export const listDimensions: API.PaginatedOperationMethod<
  ListDimensionsRequest,
  ListDimensionsResponse,
  ListDimensionsError,
  Credentials | HttpClient.HttpClient,
  DimensionName
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDimensionsRequest,
  output: ListDimensionsResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDimensions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "dimensionNames",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDomainConfigurationsError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Gets a list of domain configurations for the user. This list is sorted
 * alphabetically by domain configuration name.
 *
 * Requires permission to access the ListDomainConfigurations action.
 */
export const listDomainConfigurations: API.PaginatedOperationMethod<
  ListDomainConfigurationsRequest,
  ListDomainConfigurationsResponse,
  ListDomainConfigurationsError,
  Credentials | HttpClient.HttpClient,
  DomainConfigurationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDomainConfigurationsRequest,
  output: ListDomainConfigurationsResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDomainConfigurations",
  pagination: {
    inputToken: "marker",
    outputToken: "nextMarker",
    items: "domainConfigurations",
    pageSize: "pageSize",
  } as const,
})) as any;

export type ListFleetMetricsError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists all your fleet metrics.
 *
 * Requires permission to access the ListFleetMetrics action.
 */
export const listFleetMetrics: API.PaginatedOperationMethod<
  ListFleetMetricsRequest,
  ListFleetMetricsResponse,
  ListFleetMetricsError,
  Credentials | HttpClient.HttpClient,
  FleetMetricNameAndArn
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFleetMetricsRequest,
  output: ListFleetMetricsResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFleetMetrics",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "fleetMetrics",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListIndicesError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the search indices.
 *
 * Requires permission to access the ListIndices action.
 */
export const listIndices: API.PaginatedOperationMethod<
  ListIndicesRequest,
  ListIndicesResponse,
  ListIndicesError,
  Credentials | HttpClient.HttpClient,
  IndexName
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListIndicesRequest,
  output: ListIndicesResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIndices",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "indexNames",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListJobExecutionsForJobError =
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists the job executions for a job.
 *
 * Requires permission to access the ListJobExecutionsForJob action.
 */
export const listJobExecutionsForJob: API.PaginatedOperationMethod<
  ListJobExecutionsForJobRequest,
  ListJobExecutionsForJobResponse,
  ListJobExecutionsForJobError,
  Credentials | HttpClient.HttpClient,
  JobExecutionSummaryForJob
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListJobExecutionsForJobRequest,
  output: ListJobExecutionsForJobResponse,
  errors: [
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListJobExecutionsForJob",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "executionSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListJobExecutionsForThingError =
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists the job executions for the specified thing.
 *
 * Requires permission to access the ListJobExecutionsForThing action.
 */
export const listJobExecutionsForThing: API.PaginatedOperationMethod<
  ListJobExecutionsForThingRequest,
  ListJobExecutionsForThingResponse,
  ListJobExecutionsForThingError,
  Credentials | HttpClient.HttpClient,
  JobExecutionSummaryForThing
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListJobExecutionsForThingRequest,
  output: ListJobExecutionsForThingResponse,
  errors: [
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListJobExecutionsForThing",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "executionSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListJobsError =
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists jobs.
 *
 * Requires permission to access the ListJobs action.
 */
export const listJobs: API.PaginatedOperationMethod<
  ListJobsRequest,
  ListJobsResponse,
  ListJobsError,
  Credentials | HttpClient.HttpClient,
  JobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListJobsRequest,
  output: ListJobsResponse,
  errors: [
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "jobs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListJobTemplatesError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns a list of job templates.
 *
 * Requires permission to access the ListJobTemplates action.
 */
export const listJobTemplates: API.PaginatedOperationMethod<
  ListJobTemplatesRequest,
  ListJobTemplatesResponse,
  ListJobTemplatesError,
  Credentials | HttpClient.HttpClient,
  JobTemplateSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListJobTemplatesRequest,
  output: ListJobTemplatesResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListJobTemplates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "jobTemplates",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListManagedJobTemplatesError =
  | InternalServerException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns a list of managed job templates.
 */
export const listManagedJobTemplates: API.PaginatedOperationMethod<
  ListManagedJobTemplatesRequest,
  ListManagedJobTemplatesResponse,
  ListManagedJobTemplatesError,
  Credentials | HttpClient.HttpClient,
  ManagedJobTemplateSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListManagedJobTemplatesRequest,
  output: ListManagedJobTemplatesResponse,
  errors: [
    InternalServerException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListManagedJobTemplates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "managedJobTemplates",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMetricValuesError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists the values reported for an IoT Device Defender metric (device-side metric, cloud-side metric, or custom metric)
 * by the given thing during the specified time period.
 */
export const listMetricValues: API.PaginatedOperationMethod<
  ListMetricValuesRequest,
  ListMetricValuesResponse,
  ListMetricValuesError,
  Credentials | HttpClient.HttpClient,
  MetricDatum
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMetricValuesRequest,
  output: ListMetricValuesResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMetricValues",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "metricDatumList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMitigationActionsError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets a list of all mitigation actions that match the specified filter criteria.
 *
 * Requires permission to access the ListMitigationActions action.
 */
export const listMitigationActions: API.PaginatedOperationMethod<
  ListMitigationActionsRequest,
  ListMitigationActionsResponse,
  ListMitigationActionsError,
  Credentials | HttpClient.HttpClient,
  MitigationActionIdentifier
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMitigationActionsRequest,
  output: ListMitigationActionsResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMitigationActions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "actionIdentifiers",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListOTAUpdatesError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists OTA updates.
 *
 * Requires permission to access the ListOTAUpdates action.
 */
export const listOTAUpdates: API.PaginatedOperationMethod<
  ListOTAUpdatesRequest,
  ListOTAUpdatesResponse,
  ListOTAUpdatesError,
  Credentials | HttpClient.HttpClient,
  OTAUpdateSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOTAUpdatesRequest,
  output: ListOTAUpdatesResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOTAUpdates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "otaUpdates",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListOutgoingCertificatesError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists certificates that are being transferred but not yet accepted.
 *
 * Requires permission to access the ListOutgoingCertificates action.
 */
export const listOutgoingCertificates: API.PaginatedOperationMethod<
  ListOutgoingCertificatesRequest,
  ListOutgoingCertificatesResponse,
  ListOutgoingCertificatesError,
  Credentials | HttpClient.HttpClient,
  OutgoingCertificate
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOutgoingCertificatesRequest,
  output: ListOutgoingCertificatesResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOutgoingCertificates",
  pagination: {
    inputToken: "marker",
    outputToken: "nextMarker",
    items: "outgoingCertificates",
    pageSize: "pageSize",
  } as const,
})) as any;

export type ListPackagesError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the software packages associated to the account.
 *
 * Requires permission to access the ListPackages action.
 */
export const listPackages: API.PaginatedOperationMethod<
  ListPackagesRequest,
  ListPackagesResponse,
  ListPackagesError,
  Credentials | HttpClient.HttpClient,
  PackageSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPackagesRequest,
  output: ListPackagesResponse,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPackages",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "packageSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPackageVersionsError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the software package versions associated to the account.
 *
 * Requires permission to access the ListPackageVersions action.
 */
export const listPackageVersions: API.PaginatedOperationMethod<
  ListPackageVersionsRequest,
  ListPackageVersionsResponse,
  ListPackageVersionsError,
  Credentials | HttpClient.HttpClient,
  PackageVersionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPackageVersionsRequest,
  output: ListPackageVersionsResponse,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPackageVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "packageVersionSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPoliciesError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists your policies.
 *
 * Requires permission to access the ListPolicies action.
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
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPolicies",
  pagination: {
    inputToken: "marker",
    outputToken: "nextMarker",
    items: "policies",
    pageSize: "pageSize",
  } as const,
})) as any;

export type ListPolicyPrincipalsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the principals associated with the specified policy.
 *
 * **Note:** This action is deprecated and works as
 * expected for backward compatibility, but we won't add enhancements. Use ListTargetsForPolicy instead.
 *
 * Requires permission to access the ListPolicyPrincipals action.
 */
export const listPolicyPrincipals: API.PaginatedOperationMethod<
  ListPolicyPrincipalsRequest,
  ListPolicyPrincipalsResponse,
  ListPolicyPrincipalsError,
  Credentials | HttpClient.HttpClient,
  PrincipalArn
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPolicyPrincipalsRequest,
  output: ListPolicyPrincipalsResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPolicyPrincipals",
  pagination: {
    inputToken: "marker",
    outputToken: "nextMarker",
    items: "principals",
    pageSize: "pageSize",
  } as const,
})) as any;

export type ListPolicyVersionsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the versions of the specified policy and identifies the default
 * version.
 *
 * Requires permission to access the ListPolicyVersions action.
 */
export const listPolicyVersions: API.OperationMethod<
  ListPolicyVersionsRequest,
  ListPolicyVersionsResponse,
  ListPolicyVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListPolicyVersionsRequest,
  output: ListPolicyVersionsResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPolicyVersions",
}));

export type ListPrincipalPoliciesError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the policies attached to the specified principal. If you use an Cognito
 * identity, the ID must be in AmazonCognito Identity format.
 *
 * **Note:** This action is deprecated and works as
 * expected for backward compatibility, but we won't add enhancements. Use ListAttachedPolicies instead.
 *
 * Requires permission to access the ListPrincipalPolicies action.
 */
export const listPrincipalPolicies: API.PaginatedOperationMethod<
  ListPrincipalPoliciesRequest,
  ListPrincipalPoliciesResponse,
  ListPrincipalPoliciesError,
  Credentials | HttpClient.HttpClient,
  Policy
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPrincipalPoliciesRequest,
  output: ListPrincipalPoliciesResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPrincipalPolicies",
  pagination: {
    inputToken: "marker",
    outputToken: "nextMarker",
    items: "policies",
    pageSize: "pageSize",
  } as const,
})) as any;

export type ListPrincipalThingsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the things associated with the specified principal. A principal can be X.509
 * certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
 * identities.
 *
 * Requires permission to access the ListPrincipalThings action.
 */
export const listPrincipalThings: API.PaginatedOperationMethod<
  ListPrincipalThingsRequest,
  ListPrincipalThingsResponse,
  ListPrincipalThingsError,
  Credentials | HttpClient.HttpClient,
  ThingName
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPrincipalThingsRequest,
  output: ListPrincipalThingsResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPrincipalThings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "things",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPrincipalThingsV2Error =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the things associated with the specified principal. A principal can be an X.509
 * certificate or an Amazon Cognito ID.
 *
 * Requires permission to access the ListPrincipalThings action.
 */
export const listPrincipalThingsV2: API.PaginatedOperationMethod<
  ListPrincipalThingsV2Request,
  ListPrincipalThingsV2Response,
  ListPrincipalThingsV2Error,
  Credentials | HttpClient.HttpClient,
  PrincipalThingObject
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPrincipalThingsV2Request,
  output: ListPrincipalThingsV2Response,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPrincipalThingsV2",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "principalThingObjects",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListProvisioningTemplatesError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the provisioning templates in your Amazon Web Services account.
 *
 * Requires permission to access the ListProvisioningTemplates action.
 */
export const listProvisioningTemplates: API.PaginatedOperationMethod<
  ListProvisioningTemplatesRequest,
  ListProvisioningTemplatesResponse,
  ListProvisioningTemplatesError,
  Credentials | HttpClient.HttpClient,
  ProvisioningTemplateSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProvisioningTemplatesRequest,
  output: ListProvisioningTemplatesResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProvisioningTemplates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "templates",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListProvisioningTemplateVersionsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * A list of provisioning template versions.
 *
 * Requires permission to access the ListProvisioningTemplateVersions action.
 */
export const listProvisioningTemplateVersions: API.PaginatedOperationMethod<
  ListProvisioningTemplateVersionsRequest,
  ListProvisioningTemplateVersionsResponse,
  ListProvisioningTemplateVersionsError,
  Credentials | HttpClient.HttpClient,
  ProvisioningTemplateVersionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProvisioningTemplateVersionsRequest,
  output: ListProvisioningTemplateVersionsResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProvisioningTemplateVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "versions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRelatedResourcesForAuditFindingError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The related resources of an Audit finding.
 * The following resources can be returned from calling this API:
 *
 * - DEVICE_CERTIFICATE
 *
 * - CA_CERTIFICATE
 *
 * - IOT_POLICY
 *
 * - COGNITO_IDENTITY_POOL
 *
 * - CLIENT_ID
 *
 * - ACCOUNT_SETTINGS
 *
 * - ROLE_ALIAS
 *
 * - IAM_ROLE
 *
 * - ISSUER_CERTIFICATE
 *
 * This API is similar to DescribeAuditFinding's RelatedResources
 * but provides pagination and is not limited to 10 resources.
 * When calling DescribeAuditFinding for the intermediate CA revoked for
 * active device certificates check, RelatedResources will not be populated. You must use this API, ListRelatedResourcesForAuditFinding, to list the certificates.
 */
export const listRelatedResourcesForAuditFinding: API.PaginatedOperationMethod<
  ListRelatedResourcesForAuditFindingRequest,
  ListRelatedResourcesForAuditFindingResponse,
  ListRelatedResourcesForAuditFindingError,
  Credentials | HttpClient.HttpClient,
  RelatedResource
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRelatedResourcesForAuditFindingRequest,
  output: ListRelatedResourcesForAuditFindingResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRelatedResourcesForAuditFinding",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "relatedResources",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRoleAliasesError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the role aliases registered in your account.
 *
 * Requires permission to access the ListRoleAliases action.
 */
export const listRoleAliases: API.PaginatedOperationMethod<
  ListRoleAliasesRequest,
  ListRoleAliasesResponse,
  ListRoleAliasesError,
  Credentials | HttpClient.HttpClient,
  RoleAlias
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRoleAliasesRequest,
  output: ListRoleAliasesResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRoleAliases",
  pagination: {
    inputToken: "marker",
    outputToken: "nextMarker",
    items: "roleAliases",
    pageSize: "pageSize",
  } as const,
})) as any;

export type ListSbomValidationResultsError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The validation results for all software bill of materials (SBOM) attached to a specific software package version.
 *
 * Requires permission to access the ListSbomValidationResults action.
 */
export const listSbomValidationResults: API.PaginatedOperationMethod<
  ListSbomValidationResultsRequest,
  ListSbomValidationResultsResponse,
  ListSbomValidationResultsError,
  Credentials | HttpClient.HttpClient,
  SbomValidationResultSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSbomValidationResultsRequest,
  output: ListSbomValidationResultsResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSbomValidationResults",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "validationResultSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListScheduledAuditsError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists all of your scheduled audits.
 *
 * Requires permission to access the ListScheduledAudits action.
 */
export const listScheduledAudits: API.PaginatedOperationMethod<
  ListScheduledAuditsRequest,
  ListScheduledAuditsResponse,
  ListScheduledAuditsError,
  Credentials | HttpClient.HttpClient,
  ScheduledAuditMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListScheduledAuditsRequest,
  output: ListScheduledAuditsResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListScheduledAudits",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "scheduledAudits",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSecurityProfilesError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Lists the Device Defender security profiles
 * you've
 * created. You can filter security profiles by dimension or custom metric.
 *
 * Requires permission to access the ListSecurityProfiles action.
 *
 * `dimensionName` and `metricName` cannot be used in the same request.
 */
export const listSecurityProfiles: API.PaginatedOperationMethod<
  ListSecurityProfilesRequest,
  ListSecurityProfilesResponse,
  ListSecurityProfilesError,
  Credentials | HttpClient.HttpClient,
  SecurityProfileIdentifier
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSecurityProfilesRequest,
  output: ListSecurityProfilesResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSecurityProfiles",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "securityProfileIdentifiers",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSecurityProfilesForTargetError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Lists the Device Defender security profiles attached to a target (thing group).
 *
 * Requires permission to access the ListSecurityProfilesForTarget action.
 */
export const listSecurityProfilesForTarget: API.PaginatedOperationMethod<
  ListSecurityProfilesForTargetRequest,
  ListSecurityProfilesForTargetResponse,
  ListSecurityProfilesForTargetError,
  Credentials | HttpClient.HttpClient,
  SecurityProfileTargetMapping
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSecurityProfilesForTargetRequest,
  output: ListSecurityProfilesForTargetResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSecurityProfilesForTarget",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "securityProfileTargetMappings",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListStreamsError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists all of the streams in your Amazon Web Services account.
 *
 * Requires permission to access the ListStreams action.
 */
export const listStreams: API.PaginatedOperationMethod<
  ListStreamsRequest,
  ListStreamsResponse,
  ListStreamsError,
  Credentials | HttpClient.HttpClient,
  StreamSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListStreamsRequest,
  output: ListStreamsResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStreams",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "streams",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists the tags (metadata) you have assigned to the resource.
 *
 * Requires permission to access the ListTagsForResource action.
 */
export const listTagsForResource: API.PaginatedOperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient,
  Tag
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", items: "tags" } as const,
})) as any;

export type ListTargetsForPolicyError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * List targets for the specified policy.
 *
 * Requires permission to access the ListTargetsForPolicy action.
 */
export const listTargetsForPolicy: API.PaginatedOperationMethod<
  ListTargetsForPolicyRequest,
  ListTargetsForPolicyResponse,
  ListTargetsForPolicyError,
  Credentials | HttpClient.HttpClient,
  PolicyTarget
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTargetsForPolicyRequest,
  output: ListTargetsForPolicyResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTargetsForPolicy",
  pagination: {
    inputToken: "marker",
    outputToken: "nextMarker",
    items: "targets",
    pageSize: "pageSize",
  } as const,
})) as any;

export type ListTargetsForSecurityProfileError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Lists the targets (thing groups) associated with a given Device Defender security profile.
 *
 * Requires permission to access the ListTargetsForSecurityProfile action.
 */
export const listTargetsForSecurityProfile: API.PaginatedOperationMethod<
  ListTargetsForSecurityProfileRequest,
  ListTargetsForSecurityProfileResponse,
  ListTargetsForSecurityProfileError,
  Credentials | HttpClient.HttpClient,
  SecurityProfileTarget
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTargetsForSecurityProfileRequest,
  output: ListTargetsForSecurityProfileResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTargetsForSecurityProfile",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "securityProfileTargets",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListThingGroupsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * List the thing groups in your account.
 *
 * Requires permission to access the ListThingGroups action.
 */
export const listThingGroups: API.PaginatedOperationMethod<
  ListThingGroupsRequest,
  ListThingGroupsResponse,
  ListThingGroupsError,
  Credentials | HttpClient.HttpClient,
  GroupNameAndArn
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListThingGroupsRequest,
  output: ListThingGroupsResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListThingGroups",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "thingGroups",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListThingGroupsForThingError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * List the thing groups to which the specified thing belongs.
 *
 * Requires permission to access the ListThingGroupsForThing action.
 */
export const listThingGroupsForThing: API.PaginatedOperationMethod<
  ListThingGroupsForThingRequest,
  ListThingGroupsForThingResponse,
  ListThingGroupsForThingError,
  Credentials | HttpClient.HttpClient,
  GroupNameAndArn
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListThingGroupsForThingRequest,
  output: ListThingGroupsForThingResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListThingGroupsForThing",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "thingGroups",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListThingPrincipalsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the principals associated with the specified thing. A principal can be X.509
 * certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
 * identities.
 *
 * Requires permission to access the ListThingPrincipals action.
 */
export const listThingPrincipals: API.PaginatedOperationMethod<
  ListThingPrincipalsRequest,
  ListThingPrincipalsResponse,
  ListThingPrincipalsError,
  Credentials | HttpClient.HttpClient,
  PrincipalArn
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListThingPrincipalsRequest,
  output: ListThingPrincipalsResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListThingPrincipals",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "principals",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListThingPrincipalsV2Error =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the principals associated with the specified thing. A principal can be an X.509
 * certificate or an Amazon Cognito ID.
 *
 * Requires permission to access the ListThingPrincipals action.
 */
export const listThingPrincipalsV2: API.PaginatedOperationMethod<
  ListThingPrincipalsV2Request,
  ListThingPrincipalsV2Response,
  ListThingPrincipalsV2Error,
  Credentials | HttpClient.HttpClient,
  ThingPrincipalObject
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListThingPrincipalsV2Request,
  output: ListThingPrincipalsV2Response,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListThingPrincipalsV2",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "thingPrincipalObjects",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListThingRegistrationTaskReportsError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Information about the thing registration tasks.
 */
export const listThingRegistrationTaskReports: API.PaginatedOperationMethod<
  ListThingRegistrationTaskReportsRequest,
  ListThingRegistrationTaskReportsResponse,
  ListThingRegistrationTaskReportsError,
  Credentials | HttpClient.HttpClient,
  S3FileUrl
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListThingRegistrationTaskReportsRequest,
  output: ListThingRegistrationTaskReportsResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListThingRegistrationTaskReports",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "resourceLinks",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListThingRegistrationTasksError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * List bulk thing provisioning tasks.
 *
 * Requires permission to access the ListThingRegistrationTasks action.
 */
export const listThingRegistrationTasks: API.PaginatedOperationMethod<
  ListThingRegistrationTasksRequest,
  ListThingRegistrationTasksResponse,
  ListThingRegistrationTasksError,
  Credentials | HttpClient.HttpClient,
  TaskId
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListThingRegistrationTasksRequest,
  output: ListThingRegistrationTasksResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListThingRegistrationTasks",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "taskIds",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListThingsError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists your things. Use the **attributeName** and **attributeValue** parameters to filter your things. For example,
 * calling `ListThings` with attributeName=Color and attributeValue=Red
 * retrieves all things in the registry that contain an attribute **Color** with the value **Red**. For more
 * information, see List Things from the Amazon Web Services IoT Core Developer
 * Guide.
 *
 * Requires permission to access the ListThings action.
 *
 * You will not be charged for calling this API if an `Access denied` error is returned. You will also not be charged if no attributes or pagination token was provided in request and no pagination token and no results were returned.
 */
export const listThings: API.PaginatedOperationMethod<
  ListThingsRequest,
  ListThingsResponse,
  ListThingsError,
  Credentials | HttpClient.HttpClient,
  ThingAttribute
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListThingsRequest,
  output: ListThingsResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListThings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "things",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListThingsInBillingGroupError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists the things you have added to the given billing group.
 *
 * Requires permission to access the ListThingsInBillingGroup action.
 */
export const listThingsInBillingGroup: API.PaginatedOperationMethod<
  ListThingsInBillingGroupRequest,
  ListThingsInBillingGroupResponse,
  ListThingsInBillingGroupError,
  Credentials | HttpClient.HttpClient,
  ThingName
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListThingsInBillingGroupRequest,
  output: ListThingsInBillingGroupResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListThingsInBillingGroup",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "things",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListThingsInThingGroupError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists the things in the specified group.
 *
 * Requires permission to access the ListThingsInThingGroup action.
 */
export const listThingsInThingGroup: API.PaginatedOperationMethod<
  ListThingsInThingGroupRequest,
  ListThingsInThingGroupResponse,
  ListThingsInThingGroupError,
  Credentials | HttpClient.HttpClient,
  ThingName
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListThingsInThingGroupRequest,
  output: ListThingsInThingGroupResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListThingsInThingGroup",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "things",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListThingTypesError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the existing thing types.
 *
 * Requires permission to access the ListThingTypes action.
 */
export const listThingTypes: API.PaginatedOperationMethod<
  ListThingTypesRequest,
  ListThingTypesResponse,
  ListThingTypesError,
  Credentials | HttpClient.HttpClient,
  ThingTypeDefinition
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListThingTypesRequest,
  output: ListThingTypesResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListThingTypes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "thingTypes",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTopicRuleDestinationsError =
  | InternalException
  | InvalidRequestException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists all the topic rule destinations in your Amazon Web Services account.
 *
 * Requires permission to access the ListTopicRuleDestinations action.
 */
export const listTopicRuleDestinations: API.PaginatedOperationMethod<
  ListTopicRuleDestinationsRequest,
  ListTopicRuleDestinationsResponse,
  ListTopicRuleDestinationsError,
  Credentials | HttpClient.HttpClient,
  TopicRuleDestinationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTopicRuleDestinationsRequest,
  output: ListTopicRuleDestinationsResponse,
  errors: [
    InternalException,
    InvalidRequestException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTopicRuleDestinations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "destinationSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTopicRulesError =
  | InternalException
  | InvalidRequestException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the rules for the specific topic.
 *
 * Requires permission to access the ListTopicRules action.
 */
export const listTopicRules: API.PaginatedOperationMethod<
  ListTopicRulesRequest,
  ListTopicRulesResponse,
  ListTopicRulesError,
  Credentials | HttpClient.HttpClient,
  TopicRuleListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTopicRulesRequest,
  output: ListTopicRulesResponse,
  errors: [
    InternalException,
    InvalidRequestException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTopicRules",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "rules",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListV2LoggingLevelsError =
  | InternalException
  | InvalidRequestException
  | NotConfiguredException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Lists logging levels.
 *
 * Requires permission to access the ListV2LoggingLevels action.
 */
export const listV2LoggingLevels: API.PaginatedOperationMethod<
  ListV2LoggingLevelsRequest,
  ListV2LoggingLevelsResponse,
  ListV2LoggingLevelsError,
  Credentials | HttpClient.HttpClient,
  LogTargetConfiguration
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListV2LoggingLevelsRequest,
  output: ListV2LoggingLevelsResponse,
  errors: [
    InternalException,
    InvalidRequestException,
    NotConfiguredException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListV2LoggingLevels",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "logTargetConfigurations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListViolationEventsError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Lists the Device Defender security profile violations discovered during the given time period.
 * You can use filters to limit the results to those alerts issued for a particular security profile,
 * behavior, or thing (device).
 *
 * Requires permission to access the ListViolationEvents action.
 */
export const listViolationEvents: API.PaginatedOperationMethod<
  ListViolationEventsRequest,
  ListViolationEventsResponse,
  ListViolationEventsError,
  Credentials | HttpClient.HttpClient,
  ViolationEvent
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListViolationEventsRequest,
  output: ListViolationEventsResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListViolationEvents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "violationEvents",
    pageSize: "maxResults",
  } as const,
})) as any;

export type PutVerificationStateOnViolationError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Set a verification state and provide a description of that verification state on a violation (detect alarm).
 */
export const putVerificationStateOnViolation: API.OperationMethod<
  PutVerificationStateOnViolationRequest,
  PutVerificationStateOnViolationResponse,
  PutVerificationStateOnViolationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutVerificationStateOnViolationRequest,
  output: PutVerificationStateOnViolationResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutVerificationStateOnViolation",
}));

export type RegisterCACertificateError =
  | CertificateValidationException
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | RegistrationCodeValidationException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Registers a CA certificate with Amazon Web Services IoT Core. There is no limit to the number of CA
 * certificates you can register in your Amazon Web Services account. You can register up to 10 CA
 * certificates with the same `CA subject field` per Amazon Web Services account.
 *
 * Requires permission to access the RegisterCACertificate action.
 */
export const registerCACertificate: API.OperationMethod<
  RegisterCACertificateRequest,
  RegisterCACertificateResponse,
  RegisterCACertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RegisterCACertificateRequest,
  output: RegisterCACertificateResponse,
  errors: [
    CertificateValidationException,
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    RegistrationCodeValidationException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterCACertificate",
}));

export type RegisterCertificateError =
  | CertificateConflictException
  | CertificateStateException
  | CertificateValidationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Registers a device certificate with IoT in the same certificate mode as the signing CA. If you have more than one CA certificate that has the same subject field, you must
 * specify the CA certificate that was used to sign the device certificate being
 * registered.
 *
 * Requires permission to access the RegisterCertificate action.
 */
export const registerCertificate: API.OperationMethod<
  RegisterCertificateRequest,
  RegisterCertificateResponse,
  RegisterCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RegisterCertificateRequest,
  output: RegisterCertificateResponse,
  errors: [
    CertificateConflictException,
    CertificateStateException,
    CertificateValidationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceAlreadyExistsException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterCertificate",
}));

export type RegisterCertificateWithoutCAError =
  | CertificateStateException
  | CertificateValidationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Register a certificate that does not have a certificate authority (CA).
 * For supported certificates, consult
 * Certificate signing algorithms supported by IoT.
 */
export const registerCertificateWithoutCA: API.OperationMethod<
  RegisterCertificateWithoutCARequest,
  RegisterCertificateWithoutCAResponse,
  RegisterCertificateWithoutCAError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RegisterCertificateWithoutCARequest,
  output: RegisterCertificateWithoutCAResponse,
  errors: [
    CertificateStateException,
    CertificateValidationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceAlreadyExistsException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterCertificateWithoutCA",
}));

export type RegisterThingError =
  | ConflictingResourceUpdateException
  | InternalFailureException
  | InvalidRequestException
  | ResourceRegistrationFailureException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Provisions a thing in the device registry. RegisterThing calls other IoT control
 * plane APIs. These calls might exceed your account level
 * IoT Throttling Limits and cause throttle errors. Please contact Amazon Web Services Customer Support to raise
 * your throttling limits if necessary.
 *
 * Requires permission to access the RegisterThing action.
 */
export const registerThing: API.OperationMethod<
  RegisterThingRequest,
  RegisterThingResponse,
  RegisterThingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RegisterThingRequest,
  output: RegisterThingResponse,
  errors: [
    ConflictingResourceUpdateException,
    InternalFailureException,
    InvalidRequestException,
    ResourceRegistrationFailureException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterThing",
}));

export type RejectCertificateTransferError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | TransferAlreadyCompletedException
  | UnauthorizedException
  | CommonErrors;
/**
 * Rejects a pending certificate transfer. After IoT rejects a certificate transfer,
 * the certificate status changes from **PENDING_TRANSFER** to
 * **INACTIVE**.
 *
 * To check for pending certificate transfers, call ListCertificates
 * to enumerate your certificates.
 *
 * This operation can only be called by the transfer destination. After it is called,
 * the certificate will be returned to the source's account in the INACTIVE state.
 *
 * Requires permission to access the RejectCertificateTransfer action.
 */
export const rejectCertificateTransfer: API.OperationMethod<
  RejectCertificateTransferRequest,
  RejectCertificateTransferResponse,
  RejectCertificateTransferError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RejectCertificateTransferRequest,
  output: RejectCertificateTransferResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    TransferAlreadyCompletedException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RejectCertificateTransfer",
}));

export type RemoveThingFromBillingGroupError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Removes the given thing from the billing group.
 *
 * Requires permission to access the RemoveThingFromBillingGroup action.
 *
 * This call is asynchronous. It might take several seconds for the detachment to propagate.
 */
export const removeThingFromBillingGroup: API.OperationMethod<
  RemoveThingFromBillingGroupRequest,
  RemoveThingFromBillingGroupResponse,
  RemoveThingFromBillingGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveThingFromBillingGroupRequest,
  output: RemoveThingFromBillingGroupResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveThingFromBillingGroup",
}));

export type RemoveThingFromThingGroupError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Remove the specified thing from the specified group.
 *
 * You must specify either a `thingGroupArn` or a
 * `thingGroupName` to identify the thing group and
 * either a `thingArn` or a `thingName` to
 * identify the thing to remove from the thing group.
 *
 * Requires permission to access the RemoveThingFromThingGroup action.
 */
export const removeThingFromThingGroup: API.OperationMethod<
  RemoveThingFromThingGroupRequest,
  RemoveThingFromThingGroupResponse,
  RemoveThingFromThingGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveThingFromThingGroupRequest,
  output: RemoveThingFromThingGroupResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveThingFromThingGroup",
}));

export type ReplaceTopicRuleError =
  | ConflictingResourceUpdateException
  | InternalException
  | InvalidRequestException
  | ServiceUnavailableException
  | SqlParseException
  | UnauthorizedException
  | CommonErrors;
/**
 * Replaces the rule. You must specify all parameters for the new rule. Creating rules
 * is an administrator-level action. Any user who has permission to create rules will be able
 * to access data processed by the rule.
 *
 * Requires permission to access the ReplaceTopicRule action.
 */
export const replaceTopicRule: API.OperationMethod<
  ReplaceTopicRuleRequest,
  ReplaceTopicRuleResponse,
  ReplaceTopicRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ReplaceTopicRuleRequest,
  output: ReplaceTopicRuleResponse,
  errors: [
    ConflictingResourceUpdateException,
    InternalException,
    InvalidRequestException,
    ServiceUnavailableException,
    SqlParseException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ReplaceTopicRule",
}));

export type SearchIndexError =
  | IndexNotReadyException
  | InternalFailureException
  | InvalidQueryException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Searches the specified index.
 *
 * If a device has never connected to IoT Core or was disconnected for more than 1 hour before fleet indexing's `thingConnectivityIndexingMode` was enabled, the `connectivity` object for this device in the response will have the `connected` field set to `false` with no additional session details.
 *
 * Requires permission to access the SearchIndex action.
 */
export const searchIndex: API.OperationMethod<
  SearchIndexRequest,
  SearchIndexResponse,
  SearchIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SearchIndexRequest,
  output: SearchIndexResponse,
  errors: [
    IndexNotReadyException,
    InternalFailureException,
    InvalidQueryException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchIndex",
}));

export type SetDefaultAuthorizerError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Sets the default authorizer. This will be used if a websocket connection is made
 * without specifying an authorizer.
 *
 * Requires permission to access the SetDefaultAuthorizer action.
 */
export const setDefaultAuthorizer: API.OperationMethod<
  SetDefaultAuthorizerRequest,
  SetDefaultAuthorizerResponse,
  SetDefaultAuthorizerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetDefaultAuthorizerRequest,
  output: SetDefaultAuthorizerResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetDefaultAuthorizer",
}));

export type SetDefaultPolicyVersionError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Sets the specified version of the specified policy as the policy's default
 * (operative) version. This action affects all certificates to which the policy is attached.
 * To list the principals the policy is attached to, use the ListPrincipalPolicies
 * action.
 *
 * Requires permission to access the SetDefaultPolicyVersion action.
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
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetDefaultPolicyVersion",
}));

export type SetLoggingOptionsError =
  | InternalException
  | InvalidRequestException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Sets the logging options.
 *
 * NOTE: use of this command is not recommended. Use `SetV2LoggingOptions`
 * instead.
 *
 * Requires permission to access the SetLoggingOptions action.
 */
export const setLoggingOptions: API.OperationMethod<
  SetLoggingOptionsRequest,
  SetLoggingOptionsResponse,
  SetLoggingOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetLoggingOptionsRequest,
  output: SetLoggingOptionsResponse,
  errors: [InternalException, InvalidRequestException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetLoggingOptions",
}));

export type SetV2LoggingLevelError =
  | InternalException
  | InvalidRequestException
  | LimitExceededException
  | NotConfiguredException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Sets the logging level.
 *
 * Requires permission to access the SetV2LoggingLevel action.
 */
export const setV2LoggingLevel: API.OperationMethod<
  SetV2LoggingLevelRequest,
  SetV2LoggingLevelResponse,
  SetV2LoggingLevelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetV2LoggingLevelRequest,
  output: SetV2LoggingLevelResponse,
  errors: [
    InternalException,
    InvalidRequestException,
    LimitExceededException,
    NotConfiguredException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetV2LoggingLevel",
}));

export type SetV2LoggingOptionsError =
  | InternalException
  | InvalidRequestException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Sets the logging options for the V2 logging service.
 *
 * Requires permission to access the SetV2LoggingOptions action.
 */
export const setV2LoggingOptions: API.OperationMethod<
  SetV2LoggingOptionsRequest,
  SetV2LoggingOptionsResponse,
  SetV2LoggingOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetV2LoggingOptionsRequest,
  output: SetV2LoggingOptionsResponse,
  errors: [InternalException, InvalidRequestException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetV2LoggingOptions",
}));

export type StartAuditMitigationActionsTaskError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | TaskAlreadyExistsException
  | ThrottlingException
  | CommonErrors;
/**
 * Starts a task that applies a set of mitigation actions to the specified target.
 *
 * Requires permission to access the StartAuditMitigationActionsTask action.
 */
export const startAuditMitigationActionsTask: API.OperationMethod<
  StartAuditMitigationActionsTaskRequest,
  StartAuditMitigationActionsTaskResponse,
  StartAuditMitigationActionsTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartAuditMitigationActionsTaskRequest,
  output: StartAuditMitigationActionsTaskResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    TaskAlreadyExistsException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartAuditMitigationActionsTask",
}));

export type StartDetectMitigationActionsTaskError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | TaskAlreadyExistsException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Starts a Device Defender ML Detect mitigation actions task.
 *
 * Requires permission to access the StartDetectMitigationActionsTask action.
 */
export const startDetectMitigationActionsTask: API.OperationMethod<
  StartDetectMitigationActionsTaskRequest,
  StartDetectMitigationActionsTaskResponse,
  StartDetectMitigationActionsTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartDetectMitigationActionsTaskRequest,
  output: StartDetectMitigationActionsTaskResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    TaskAlreadyExistsException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartDetectMitigationActionsTask",
}));

export type StartOnDemandAuditTaskError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Starts an on-demand Device Defender audit.
 *
 * Requires permission to access the StartOnDemandAuditTask action.
 */
export const startOnDemandAuditTask: API.OperationMethod<
  StartOnDemandAuditTaskRequest,
  StartOnDemandAuditTaskResponse,
  StartOnDemandAuditTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartOnDemandAuditTaskRequest,
  output: StartOnDemandAuditTaskResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartOnDemandAuditTask",
}));

export type StartThingRegistrationTaskError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a bulk thing provisioning task.
 *
 * Requires permission to access the StartThingRegistrationTask action.
 */
export const startThingRegistrationTask: API.OperationMethod<
  StartThingRegistrationTaskRequest,
  StartThingRegistrationTaskResponse,
  StartThingRegistrationTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartThingRegistrationTaskRequest,
  output: StartThingRegistrationTaskResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartThingRegistrationTask",
}));

export type StopThingRegistrationTaskError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Cancels a bulk thing provisioning task.
 *
 * Requires permission to access the StopThingRegistrationTask action.
 */
export const stopThingRegistrationTask: API.OperationMethod<
  StopThingRegistrationTaskRequest,
  StopThingRegistrationTaskResponse,
  StopThingRegistrationTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopThingRegistrationTaskRequest,
  output: StopThingRegistrationTaskResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopThingRegistrationTask",
}));

export type TagResourceError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Adds to or modifies the tags of the given resource. Tags are metadata which can be
 * used to manage a resource.
 *
 * Requires permission to access the TagResource action.
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
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type TestAuthorizationError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Tests if a specified principal is authorized to perform an IoT action on a
 * specified resource. Use this to test and debug the authorization behavior of devices that
 * connect to the IoT device gateway.
 *
 * Requires permission to access the TestAuthorization action.
 */
export const testAuthorization: API.OperationMethod<
  TestAuthorizationRequest,
  TestAuthorizationResponse,
  TestAuthorizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TestAuthorizationRequest,
  output: TestAuthorizationResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TestAuthorization",
}));

export type TestInvokeAuthorizerError =
  | InternalFailureException
  | InvalidRequestException
  | InvalidResponseException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Tests a custom authorization behavior by invoking a specified custom authorizer. Use
 * this to test and debug the custom authorization behavior of devices that connect to the IoT
 * device gateway.
 *
 * Requires permission to access the TestInvokeAuthorizer action.
 */
export const testInvokeAuthorizer: API.OperationMethod<
  TestInvokeAuthorizerRequest,
  TestInvokeAuthorizerResponse,
  TestInvokeAuthorizerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TestInvokeAuthorizerRequest,
  output: TestInvokeAuthorizerResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    InvalidResponseException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TestInvokeAuthorizer",
}));

export type TransferCertificateError =
  | CertificateStateException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | TransferConflictException
  | UnauthorizedException
  | CommonErrors;
/**
 * Transfers the specified certificate to the specified Amazon Web Services account.
 *
 * Requires permission to access the TransferCertificate action.
 *
 * You can cancel the transfer until it is accepted by the recipient.
 *
 * No notification is sent to the transfer destination's account. The caller is responsible for notifying the transfer target.
 *
 * The certificate being transferred must not be in the `ACTIVE` state. You can use the
 * UpdateCertificate action to deactivate it.
 *
 * The certificate must not have any policies attached to it. You can use the
 * DetachPolicy action to detach them.
 *
 * **Customer managed key behavior:** When you use a customer managed key to encrypt your data and then transfer
 * the certificate to a customer in a different account using the `TransferCertificate` operation, the certificates will no longer be encrypted by their
 * customer managed key configuration. During the transfer process, certificates are encrypted using Amazon Web Services IoT Core owned keys.
 *
 * While a certificate is in the **PENDING_TRANSFER** state, it's always protected by Amazon Web Services IoT Core owned keys, regardless of the customer managed key configuration of either the source or destination account.
 *
 * Once the transfer is completed through AcceptCertificateTransfer, RejectCertificateTransfer, or
 * CancelCertificateTransfer, the certificate will be protected by the customer managed key configuration of the account that owns
 * the certificate after the transfer operation:
 *
 * - If the transfer is accepted: The certificate is encrypted by the target account's customer managed key configuration.
 *
 * - If the transfer is rejected or cancelled: The certificate is protected by the source account's customer managed key configuration.
 */
export const transferCertificate: API.OperationMethod<
  TransferCertificateRequest,
  TransferCertificateResponse,
  TransferCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TransferCertificateRequest,
  output: TransferCertificateResponse,
  errors: [
    CertificateStateException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    TransferConflictException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TransferCertificate",
}));

export type UntagResourceError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Removes the given tags (metadata) from the resource.
 *
 * Requires permission to access the UntagResource action.
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
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAccountAuditConfigurationError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Configures or reconfigures the Device Defender audit settings for this account.
 * Settings include how audit notifications are sent and which audit checks are
 * enabled or disabled.
 *
 * Requires permission to access the UpdateAccountAuditConfiguration action.
 */
export const updateAccountAuditConfiguration: API.OperationMethod<
  UpdateAccountAuditConfigurationRequest,
  UpdateAccountAuditConfigurationResponse,
  UpdateAccountAuditConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAccountAuditConfigurationRequest,
  output: UpdateAccountAuditConfigurationResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAccountAuditConfiguration",
}));

export type UpdateAuditSuppressionError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates a Device Defender audit suppression.
 */
export const updateAuditSuppression: API.OperationMethod<
  UpdateAuditSuppressionRequest,
  UpdateAuditSuppressionResponse,
  UpdateAuditSuppressionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAuditSuppressionRequest,
  output: UpdateAuditSuppressionResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAuditSuppression",
}));

export type UpdateAuthorizerError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates an authorizer.
 *
 * Requires permission to access the UpdateAuthorizer action.
 */
export const updateAuthorizer: API.OperationMethod<
  UpdateAuthorizerRequest,
  UpdateAuthorizerResponse,
  UpdateAuthorizerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAuthorizerRequest,
  output: UpdateAuthorizerResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAuthorizer",
}));

export type UpdateBillingGroupError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | VersionConflictException
  | CommonErrors;
/**
 * Updates information about the billing group.
 *
 * Requires permission to access the UpdateBillingGroup action.
 */
export const updateBillingGroup: API.OperationMethod<
  UpdateBillingGroupRequest,
  UpdateBillingGroupResponse,
  UpdateBillingGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateBillingGroupRequest,
  output: UpdateBillingGroupResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
    VersionConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateBillingGroup",
}));

export type UpdateCACertificateError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates a registered CA certificate.
 *
 * Requires permission to access the UpdateCACertificate action.
 */
export const updateCACertificate: API.OperationMethod<
  UpdateCACertificateRequest,
  UpdateCACertificateResponse,
  UpdateCACertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCACertificateRequest,
  output: UpdateCACertificateResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCACertificate",
}));

export type UpdateCertificateError =
  | CertificateStateException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates the status of the specified certificate. This operation is
 * idempotent.
 *
 * Requires permission to access the UpdateCertificate action.
 *
 * Certificates must be in the ACTIVE state to authenticate devices that use
 * a certificate to connect to IoT.
 *
 * Within a few minutes of updating a certificate from the ACTIVE state to any other
 * state, IoT disconnects all devices that used that certificate to connect. Devices cannot
 * use a certificate that is not in the ACTIVE state to reconnect.
 */
export const updateCertificate: API.OperationMethod<
  UpdateCertificateRequest,
  UpdateCertificateResponse,
  UpdateCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCertificateRequest,
  output: UpdateCertificateResponse,
  errors: [
    CertificateStateException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCertificate",
}));

export type UpdateCertificateProviderError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates a certificate provider.
 *
 * Requires permission to access the UpdateCertificateProvider action.
 */
export const updateCertificateProvider: API.OperationMethod<
  UpdateCertificateProviderRequest,
  UpdateCertificateProviderResponse,
  UpdateCertificateProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCertificateProviderRequest,
  output: UpdateCertificateProviderResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCertificateProvider",
}));

export type UpdateCommandError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update information about a command or mark a command for deprecation.
 */
export const updateCommand: API.OperationMethod<
  UpdateCommandRequest,
  UpdateCommandResponse,
  UpdateCommandError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCommandRequest,
  output: UpdateCommandResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCommand",
}));

export type UpdateCustomMetricError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Updates a
 * Device Defender detect custom metric.
 *
 * Requires permission to access the UpdateCustomMetric action.
 */
export const updateCustomMetric: API.OperationMethod<
  UpdateCustomMetricRequest,
  UpdateCustomMetricResponse,
  UpdateCustomMetricError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCustomMetricRequest,
  output: UpdateCustomMetricResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCustomMetric",
}));

export type UpdateDimensionError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Updates the definition for a dimension. You
 * cannot
 * change the type of a dimension after
 * it is created (you can delete it and
 * recreate
 * it).
 *
 * Requires permission to access the UpdateDimension action.
 */
export const updateDimension: API.OperationMethod<
  UpdateDimensionRequest,
  UpdateDimensionResponse,
  UpdateDimensionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDimensionRequest,
  output: UpdateDimensionResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDimension",
}));

export type UpdateDomainConfigurationError =
  | CertificateValidationException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates values stored in the domain configuration. Domain configurations for default
 * endpoints can't be updated.
 *
 * Requires permission to access the UpdateDomainConfiguration action.
 */
export const updateDomainConfiguration: API.OperationMethod<
  UpdateDomainConfigurationRequest,
  UpdateDomainConfigurationResponse,
  UpdateDomainConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDomainConfigurationRequest,
  output: UpdateDomainConfigurationResponse,
  errors: [
    CertificateValidationException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDomainConfiguration",
}));

export type UpdateDynamicThingGroupError =
  | InternalFailureException
  | InvalidQueryException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | VersionConflictException
  | CommonErrors;
/**
 * Updates a dynamic thing group.
 *
 * Requires permission to access the UpdateDynamicThingGroup action.
 */
export const updateDynamicThingGroup: API.OperationMethod<
  UpdateDynamicThingGroupRequest,
  UpdateDynamicThingGroupResponse,
  UpdateDynamicThingGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDynamicThingGroupRequest,
  output: UpdateDynamicThingGroupResponse,
  errors: [
    InternalFailureException,
    InvalidQueryException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
    VersionConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDynamicThingGroup",
}));

export type UpdateEncryptionConfigurationError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates the encryption configuration. By default, Amazon Web Services IoT Core encrypts your data at rest using Amazon Web Services owned keys. Amazon Web Services IoT Core also supports symmetric customer managed keys
 * from Key Management Service (KMS). With customer managed keys, you create, own, and
 * manage the KMS keys in your Amazon Web Services account.
 *
 * Before using this API, you must set up permissions for Amazon Web Services IoT Core to access KMS. For more information, see Data encryption at rest in the *Amazon Web Services IoT Core Developer Guide*.
 */
export const updateEncryptionConfiguration: API.OperationMethod<
  UpdateEncryptionConfigurationRequest,
  UpdateEncryptionConfigurationResponse,
  UpdateEncryptionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateEncryptionConfigurationRequest,
  output: UpdateEncryptionConfigurationResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEncryptionConfiguration",
}));

export type UpdateEventConfigurationsError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates the event configurations.
 *
 * Requires permission to access the UpdateEventConfigurations action.
 */
export const updateEventConfigurations: API.OperationMethod<
  UpdateEventConfigurationsRequest,
  UpdateEventConfigurationsResponse,
  UpdateEventConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateEventConfigurationsRequest,
  output: UpdateEventConfigurationsResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEventConfigurations",
}));

export type UpdateFleetMetricError =
  | IndexNotReadyException
  | InternalFailureException
  | InvalidAggregationException
  | InvalidQueryException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | VersionConflictException
  | CommonErrors;
/**
 * Updates the data for a fleet metric.
 *
 * Requires permission to access the UpdateFleetMetric action.
 */
export const updateFleetMetric: API.OperationMethod<
  UpdateFleetMetricRequest,
  UpdateFleetMetricResponse,
  UpdateFleetMetricError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateFleetMetricRequest,
  output: UpdateFleetMetricResponse,
  errors: [
    IndexNotReadyException,
    InternalFailureException,
    InvalidAggregationException,
    InvalidQueryException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    VersionConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFleetMetric",
}));

export type UpdateIndexingConfigurationError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates the search configuration.
 *
 * Requires permission to access the UpdateIndexingConfiguration action.
 */
export const updateIndexingConfiguration: API.OperationMethod<
  UpdateIndexingConfigurationRequest,
  UpdateIndexingConfigurationResponse,
  UpdateIndexingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateIndexingConfigurationRequest,
  output: UpdateIndexingConfigurationResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateIndexingConfiguration",
}));

export type UpdateJobError =
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates supported fields of the specified job.
 *
 * Requires permission to access the UpdateJob action.
 */
export const updateJob: API.OperationMethod<
  UpdateJobRequest,
  UpdateJobResponse,
  UpdateJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateJobRequest,
  output: UpdateJobResponse,
  errors: [
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateJob",
}));

export type UpdateMitigationActionError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates the definition for the specified mitigation action.
 *
 * Requires permission to access the UpdateMitigationAction action.
 */
export const updateMitigationAction: API.OperationMethod<
  UpdateMitigationActionRequest,
  UpdateMitigationActionResponse,
  UpdateMitigationActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateMitigationActionRequest,
  output: UpdateMitigationActionResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateMitigationAction",
}));

export type UpdatePackageError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the supported fields for a specific software package.
 *
 * Requires permission to access the UpdatePackage and GetIndexingConfiguration actions.
 */
export const updatePackage: API.OperationMethod<
  UpdatePackageRequest,
  UpdatePackageResponse,
  UpdatePackageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdatePackageRequest,
  output: UpdatePackageResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePackage",
}));

export type UpdatePackageConfigurationError =
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the software package configuration.
 *
 * Requires permission to access the UpdatePackageConfiguration and iam:PassRole actions.
 */
export const updatePackageConfiguration: API.OperationMethod<
  UpdatePackageConfigurationRequest,
  UpdatePackageConfigurationResponse,
  UpdatePackageConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdatePackageConfigurationRequest,
  output: UpdatePackageConfigurationResponse,
  errors: [ConflictException, InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePackageConfiguration",
}));

export type UpdatePackageVersionError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the supported fields for a specific package version.
 *
 * Requires permission to access the UpdatePackageVersion and GetIndexingConfiguration actions.
 */
export const updatePackageVersion: API.OperationMethod<
  UpdatePackageVersionRequest,
  UpdatePackageVersionResponse,
  UpdatePackageVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdatePackageVersionRequest,
  output: UpdatePackageVersionResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePackageVersion",
}));

export type UpdateProvisioningTemplateError =
  | ConflictingResourceUpdateException
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates a provisioning template.
 *
 * Requires permission to access the UpdateProvisioningTemplate action.
 */
export const updateProvisioningTemplate: API.OperationMethod<
  UpdateProvisioningTemplateRequest,
  UpdateProvisioningTemplateResponse,
  UpdateProvisioningTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateProvisioningTemplateRequest,
  output: UpdateProvisioningTemplateResponse,
  errors: [
    ConflictingResourceUpdateException,
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateProvisioningTemplate",
}));

export type UpdateRoleAliasError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates a role alias.
 *
 * Requires permission to access the UpdateRoleAlias action.
 *
 * The value of
 * `credentialDurationSeconds`
 * must be less than or equal to the
 * maximum session duration of the IAM role that the role alias references. For more
 * information, see Modifying a role maximum session duration (Amazon Web Services API) from the Amazon Web Services
 * Identity and Access Management User Guide.
 */
export const updateRoleAlias: API.OperationMethod<
  UpdateRoleAliasRequest,
  UpdateRoleAliasResponse,
  UpdateRoleAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateRoleAliasRequest,
  output: UpdateRoleAliasResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRoleAlias",
}));

export type UpdateScheduledAuditError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates a scheduled audit, including which checks are performed and
 * how often the audit takes place.
 *
 * Requires permission to access the UpdateScheduledAudit action.
 */
export const updateScheduledAudit: API.OperationMethod<
  UpdateScheduledAuditRequest,
  UpdateScheduledAuditResponse,
  UpdateScheduledAuditError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateScheduledAuditRequest,
  output: UpdateScheduledAuditResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateScheduledAudit",
}));

export type UpdateSecurityProfileError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | VersionConflictException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Updates a Device Defender security profile.
 *
 * Requires permission to access the UpdateSecurityProfile action.
 */
export const updateSecurityProfile: API.OperationMethod<
  UpdateSecurityProfileRequest,
  UpdateSecurityProfileResponse,
  UpdateSecurityProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSecurityProfileRequest,
  output: UpdateSecurityProfileResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
    VersionConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSecurityProfile",
}));

export type UpdateStreamError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates an existing stream. The stream version will be incremented by one.
 *
 * Requires permission to access the UpdateStream action.
 */
export const updateStream: API.OperationMethod<
  UpdateStreamRequest,
  UpdateStreamResponse,
  UpdateStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateStreamRequest,
  output: UpdateStreamResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateStream",
}));

export type UpdateThingError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | VersionConflictException
  | CommonErrors;
/**
 * Updates the data for a thing.
 *
 * Requires permission to access the UpdateThing action.
 */
export const updateThing: API.OperationMethod<
  UpdateThingRequest,
  UpdateThingResponse,
  UpdateThingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateThingRequest,
  output: UpdateThingResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    VersionConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateThing",
}));

export type UpdateThingGroupError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | VersionConflictException
  | CommonErrors;
/**
 * Update a thing group.
 *
 * Requires permission to access the UpdateThingGroup action.
 */
export const updateThingGroup: API.OperationMethod<
  UpdateThingGroupRequest,
  UpdateThingGroupResponse,
  UpdateThingGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateThingGroupRequest,
  output: UpdateThingGroupResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
    VersionConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateThingGroup",
}));

export type UpdateThingGroupsForThingError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates the groups to which the thing belongs.
 *
 * Requires permission to access the UpdateThingGroupsForThing action.
 */
export const updateThingGroupsForThing: API.OperationMethod<
  UpdateThingGroupsForThingRequest,
  UpdateThingGroupsForThingResponse,
  UpdateThingGroupsForThingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateThingGroupsForThingRequest,
  output: UpdateThingGroupsForThingResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateThingGroupsForThing",
}));

export type UpdateThingTypeError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates a thing type.
 */
export const updateThingType: API.OperationMethod<
  UpdateThingTypeRequest,
  UpdateThingTypeResponse,
  UpdateThingTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateThingTypeRequest,
  output: UpdateThingTypeResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateThingType",
}));

export type UpdateTopicRuleDestinationError =
  | ConflictingResourceUpdateException
  | InternalException
  | InvalidRequestException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates a topic rule destination. You use this to change the status, endpoint URL, or
 * confirmation URL of the destination.
 *
 * Requires permission to access the UpdateTopicRuleDestination action.
 */
export const updateTopicRuleDestination: API.OperationMethod<
  UpdateTopicRuleDestinationRequest,
  UpdateTopicRuleDestinationResponse,
  UpdateTopicRuleDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateTopicRuleDestinationRequest,
  output: UpdateTopicRuleDestinationResponse,
  errors: [
    ConflictingResourceUpdateException,
    InternalException,
    InvalidRequestException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTopicRuleDestination",
}));

export type ValidateSecurityProfileBehaviorsError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Validates a Device Defender security profile behaviors specification.
 *
 * Requires permission to access the ValidateSecurityProfileBehaviors action.
 */
export const validateSecurityProfileBehaviors: API.OperationMethod<
  ValidateSecurityProfileBehaviorsRequest,
  ValidateSecurityProfileBehaviorsResponse,
  ValidateSecurityProfileBehaviorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ValidateSecurityProfileBehaviorsRequest,
  output: ValidateSecurityProfileBehaviorsResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ValidateSecurityProfileBehaviors",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          certificateId: S.String.pipe(T.HttpLabel("certificateId")),
          setAsActive: S.optional(S.Boolean).pipe(T.HttpQuery("setAsActive")),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/accept-certificate-transfer/{certificateId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AcceptCertificateTransferRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AcceptCertificateTransferResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          billingGroupName: S.optional(S.String),
          billingGroupArn: S.optional(S.String),
          thingName: S.optional(S.String),
          thingArn: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/billing-groups/addThingToBillingGroup" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AddThingToBillingGroupRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AddThingToBillingGroupResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          thingGroupName: S.optional(S.String),
          thingGroupArn: S.optional(S.String),
          thingName: S.optional(S.String),
          thingArn: S.optional(S.String),
          overrideDynamicGroups: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/thing-groups/addThingToThingGroup" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AddThingToThingGroupRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          bucket: S.optional(S.String),
          key: S.optional(S.String),
          version: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3Location" });
    case 6:
      return S.suspend(() => S.Struct({ s3Location: S.optional(S3Location) })).annotate({
        identifier: "Sbom",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          packageName: S.String.pipe(T.HttpLabel("packageName")),
          versionName: S.String.pipe(T.HttpLabel("versionName")),
          sbom: Sbom,
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/packages/{packageName}/versions/{versionName}/sbom" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateSbomWithPackageVersionRequest",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          packageName: S.optional(S.String),
          versionName: S.optional(S.String),
          sbom: S.optional(Sbom),
          sbomValidationStatus: S.optional(SbomValidationStatus),
        }),
      ).annotate({
        identifier: "AssociateSbomWithPackageVersionResponse",
      });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          targets: JobTargets,
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          comment: S.optional(S.String),
          namespaceId: S.optional(S.String).pipe(T.HttpQuery("namespaceId")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/jobs/{jobId}/targets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateTargetsWithJobRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          jobArn: S.optional(S.String),
          jobId: S.optional(S.String),
          description: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AssociateTargetsWithJobResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ policyName: S.String.pipe(T.HttpLabel("policyName")), target: S.String }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/target-policies/{policyName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AttachPolicyRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          policyName: S.String.pipe(T.HttpLabel("policyName")),
          principal: S.String.pipe(T.HttpHeader("x-amzn-iot-principal")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/principal-policies/{policyName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AttachPrincipalPolicyRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          securityProfileName: S.String.pipe(T.HttpLabel("securityProfileName")),
          securityProfileTargetArn: S.String.pipe(T.HttpQuery("securityProfileTargetArn")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/security-profiles/{securityProfileName}/targets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AttachSecurityProfileRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          thingName: S.String.pipe(T.HttpLabel("thingName")),
          principal: S.String.pipe(T.HttpHeader("x-amzn-principal")),
          thingPrincipalType: S.optional(ThingPrincipalType).pipe(
            T.HttpQuery("thingPrincipalType"),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/things/{thingName}/principals" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AttachThingPrincipalRequest",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ taskId: S.String.pipe(T.HttpLabel("taskId")) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/audit/mitigationactions/tasks/{taskId}/cancel" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CancelAuditMitigationActionsTaskRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ taskId: S.String.pipe(T.HttpLabel("taskId")) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/audit/tasks/{taskId}/cancel" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CancelAuditTaskRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ certificateId: S.String.pipe(T.HttpLabel("certificateId")) }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/cancel-certificate-transfer/{certificateId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CancelCertificateTransferRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ taskId: S.String.pipe(T.HttpLabel("taskId")) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/detect/mitigationactions/tasks/{taskId}/cancel" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CancelDetectMitigationActionsTaskRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          reasonCode: S.optional(S.String),
          comment: S.optional(S.String),
          force: S.optional(S.Boolean).pipe(T.HttpQuery("force")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/jobs/{jobId}/cancel" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CancelJobRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          jobArn: S.optional(S.String),
          jobId: S.optional(S.String),
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "CancelJobResponse" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          thingName: S.String.pipe(T.HttpLabel("thingName")),
          force: S.optional(S.Boolean).pipe(T.HttpQuery("force")),
          expectedVersion: S.optional(S.Number),
          statusDetails: S.optional(DetailsMap),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/things/{thingName}/jobs/{jobId}/cancel" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CancelJobExecutionRequest",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/default-authorizer" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ClearDefaultAuthorizerRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ confirmationToken: S.String.pipe(T.HttpLabel("confirmationToken")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/confirmdestination/{confirmationToken+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ConfirmTopicRuleDestinationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ policyName: S.optional(S.String), policyVersionId: S.optional(S.String) }),
      ).annotate({ identifier: "PolicyVersionIdentifier" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          issuerCertificateSubject: S.optional(S.String),
          issuerId: S.optional(S.String),
          issuerCertificateSerialNumber: S.optional(S.String),
        }),
      ).annotate({
        identifier: "IssuerCertificateIdentifier",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          deviceCertificateId: S.optional(S.String),
          caCertificateId: S.optional(S.String),
          cognitoIdentityPoolId: S.optional(S.String),
          clientId: S.optional(S.String),
          policyVersionIdentifier: S.optional(PolicyVersionIdentifier),
          account: S.optional(S.String),
          iamRoleArn: S.optional(S.String),
          roleAliasArn: S.optional(S.String),
          issuerCertificateIdentifier: S.optional(IssuerCertificateIdentifier),
          deviceCertificateArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "ResourceIdentifier" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          checkName: S.String,
          resourceIdentifier: ResourceIdentifier,
          expirationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          suppressIndefinitely: S.optional(S.Boolean),
          description: S.optional(S.String),
          clientRequestToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/audit/suppressions/create" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateAuditSuppressionRequest",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.optional(S.String) })).annotate({
        identifier: "Tag",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(Tag);
    case 1:
      return S.suspend(() =>
        S.Struct({
          authorizerName: S.String.pipe(T.HttpLabel("authorizerName")),
          authorizerFunctionArn: S.String,
          tokenKeyName: S.optional(S.String),
          tokenSigningPublicKeys: S.optional(PublicKeyMap),
          status: S.optional(AuthorizerStatus),
          tags: S.optional(TagList),
          signingDisabled: S.optional(S.Boolean),
          enableCachingForHttp: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/authorizer/{authorizerName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateAuthorizerRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ authorizerName: S.optional(S.String), authorizerArn: S.optional(S.String) }),
      ).annotate({ identifier: "CreateAuthorizerResponse" });
    case 3:
      return S.suspend(() => S.Struct({ billingGroupDescription: S.optional(S.String) })).annotate({
        identifier: "BillingGroupProperties",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          billingGroupName: S.String.pipe(T.HttpLabel("billingGroupName")),
          billingGroupProperties: S.optional(BillingGroupProperties),
          tags: S.optional(TagList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/billing-groups/{billingGroupName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateBillingGroupRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          billingGroupName: S.optional(S.String),
          billingGroupArn: S.optional(S.String),
          billingGroupId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateBillingGroupResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          certificateSigningRequest: S.String,
          setAsActive: S.optional(S.Boolean).pipe(T.HttpQuery("setAsActive")),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/certificates" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateCertificateFromCsrRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          certificateArn: S.optional(S.String),
          certificateId: S.optional(S.String),
          certificatePem: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateCertificateFromCsrResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(CertificateProviderOperation);
    case 1:
      return S.suspend(() =>
        S.Struct({
          certificateProviderName: S.String.pipe(T.HttpLabel("certificateProviderName")),
          lambdaFunctionArn: S.String,
          accountDefaultForOperations: CertificateProviderAccountDefaultForOperations,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/certificate-providers/{certificateProviderName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateCertificateProviderRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          certificateProviderName: S.optional(S.String),
          certificateProviderArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateCertificateProviderResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ content: S.optional(T.Blob), contentType: S.optional(S.String) }),
      ).annotate({ identifier: "CommandPayload" });
    case 4:
      return S.suspend(() => S.Struct({ outputFormat: OutputFormat })).annotate({
        identifier: "AwsJsonSubstitutionCommandPreprocessorConfig",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ awsJsonSubstitution: S.optional(AwsJsonSubstitutionCommandPreprocessorConfig) }),
      ).annotate({ identifier: "CommandPreprocessor" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          S: S.optional(S.String),
          B: S.optional(S.Boolean),
          I: S.optional(S.Number),
          L: S.optional(S.Number),
          D: S.optional(S.Number),
          BIN: S.optional(T.Blob),
          UL: S.optional(S.String),
        }),
      ).annotate({ identifier: "CommandParameterValue" });
    case 7:
      return S.suspend(() => S.Struct({ min: S.String, max: S.String })).annotate({
        identifier: "CommandParameterValueNumberRange",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          number: S.optional(S.String),
          numbers: S.optional(CommandParameterValueStringList),
          string: S.optional(S.String),
          strings: S.optional(CommandParameterValueStringList),
          numberRange: S.optional(CommandParameterValueNumberRange),
        }),
      ).annotate({
        identifier: "CommandParameterValueComparisonOperand",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          comparisonOperator: CommandParameterValueComparisonOperator,
          operand: CommandParameterValueComparisonOperand,
        }),
      ).annotate({
        identifier: "CommandParameterValueCondition",
      });
    case 2:
      return S.Array(CommandParameterValueCondition);
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          type: S.optional(CommandParameterType),
          value: S.optional(CommandParameterValue),
          defaultValue: S.optional(CommandParameterValue),
          valueConditions: S.optional(CommandParameterValueConditionList),
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "CommandParameter" });
    case 4:
      return S.Array(CommandParameter);
    case 5:
      return S.suspend(() =>
        S.Struct({
          commandId: S.String.pipe(T.HttpLabel("commandId")),
          namespace: S.optional(CommandNamespace),
          displayName: S.optional(S.String),
          description: S.optional(S.String),
          payload: S.optional(CommandPayload),
          payloadTemplate: S.optional(S.String),
          preprocessor: S.optional(CommandPreprocessor),
          mandatoryParameters: S.optional(CommandParameterList),
          roleArn: S.optional(S.String),
          tags: S.optional(TagList),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/commands/{commandId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateCommandRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ commandId: S.optional(S.String), commandArn: S.optional(S.String) }),
      ).annotate({ identifier: "CreateCommandResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          metricName: S.String.pipe(T.HttpLabel("metricName")),
          displayName: S.optional(S.String),
          metricType: CustomMetricType,
          tags: S.optional(TagList),
          clientRequestToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/custom-metric/{metricName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateCustomMetricRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ metricName: S.optional(S.String), metricArn: S.optional(S.String) }),
      ).annotate({
        identifier: "CreateCustomMetricResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.String.pipe(T.HttpLabel("name")),
          type: DimensionType,
          stringValues: DimensionStringValues,
          tags: S.optional(TagList),
          clientRequestToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/dimensions/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateDimensionRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), arn: S.optional(S.String) }),
      ).annotate({ identifier: "CreateDimensionResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          defaultAuthorizerName: S.optional(S.String),
          allowAuthorizerOverride: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AuthorizerConfig" });
    case 4:
      return S.suspend(() => S.Struct({ securityPolicy: S.optional(S.String) })).annotate({
        identifier: "TlsConfig",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          enableOCSPCheck: S.optional(S.Boolean),
          ocspLambdaArn: S.optional(S.String),
          ocspAuthorizedResponderArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "ServerCertificateConfig" });
    case 6:
      return S.suspend(() =>
        S.Struct({ clientCertificateCallbackArn: S.optional(S.String) }),
      ).annotate({ identifier: "ClientCertificateConfig" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainConfigurationName: S.String.pipe(T.HttpLabel("domainConfigurationName")),
          domainName: S.optional(S.String),
          serverCertificateArns: S.optional(ServerCertificateArns),
          validationCertificateArn: S.optional(S.String),
          authorizerConfig: S.optional(AuthorizerConfig),
          serviceType: S.optional(ServiceType),
          tags: S.optional(TagList),
          tlsConfig: S.optional(TlsConfig),
          serverCertificateConfig: S.optional(ServerCertificateConfig),
          authenticationType: S.optional(AuthenticationType),
          applicationProtocol: S.optional(ApplicationProtocol),
          clientCertificateConfig: S.optional(ClientCertificateConfig),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domainConfigurations/{domainConfigurationName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateDomainConfigurationRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainConfigurationName: S.optional(S.String),
          domainConfigurationArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateDomainConfigurationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ attributes: S.optional(Attributes), merge: S.optional(S.Boolean) }),
      ).annotate({ identifier: "AttributePayload" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          thingGroupDescription: S.optional(S.String),
          attributePayload: S.optional(AttributePayload),
        }),
      ).annotate({ identifier: "ThingGroupProperties" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          thingGroupName: S.String.pipe(T.HttpLabel("thingGroupName")),
          thingGroupProperties: S.optional(ThingGroupProperties),
          indexName: S.optional(S.String),
          queryString: S.String,
          queryVersion: S.optional(S.String),
          tags: S.optional(TagList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/dynamic-thing-groups/{thingGroupName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateDynamicThingGroupRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          thingGroupName: S.optional(S.String),
          thingGroupArn: S.optional(S.String),
          thingGroupId: S.optional(S.String),
          indexName: S.optional(S.String),
          queryString: S.optional(S.String),
          queryVersion: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateDynamicThingGroupResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ name: AggregationTypeName, values: S.optional(AggregationTypeValues) }),
      ).annotate({ identifier: "AggregationType" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          metricName: S.String.pipe(T.HttpLabel("metricName")),
          queryString: S.String,
          aggregationType: AggregationType,
          period: S.Number,
          aggregationField: S.String,
          description: S.optional(S.String),
          queryVersion: S.optional(S.String),
          indexName: S.optional(S.String),
          unit: S.optional(FleetMetricUnit),
          tags: S.optional(TagList),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/fleet-metric/{metricName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateFleetMetricRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ roleArn: S.optional(S.String), expiresInSec: S.optional(S.Number) }),
      ).annotate({ identifier: "PresignedUrlConfig" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          numberOfNotifiedThings: S.optional(S.Number),
          numberOfSucceededThings: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RateIncreaseCriteria" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          baseRatePerMinute: S.Number,
          incrementFactor: S.Number,
          rateIncreaseCriteria: RateIncreaseCriteria,
        }),
      ).annotate({ identifier: "ExponentialRolloutRate" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          maximumPerMinute: S.optional(S.Number),
          exponentialRate: S.optional(ExponentialRolloutRate),
        }),
      ).annotate({
        identifier: "JobExecutionsRolloutConfig",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          failureType: JobExecutionFailureType,
          action: AbortAction,
          thresholdPercentage: S.Number,
          minNumberOfExecutedThings: S.Number,
        }),
      ).annotate({ identifier: "AbortCriteria" });
    case 4:
      return S.Array(AbortCriteria);
    case 5:
      return S.suspend(() => S.Struct({ criteriaList: AbortCriteriaList })).annotate({
        identifier: "AbortConfig",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ inProgressTimeoutInMinutes: S.optional(S.Number) }),
      ).annotate({ identifier: "TimeoutConfig" });
    case 7:
      return S.suspend(() =>
        S.Struct({ failureType: RetryableFailureType, numberOfRetries: S.Number }),
      ).annotate({ identifier: "RetryCriteria" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Array(RetryCriteria);
    case 1:
      return S.suspend(() => S.Struct({ criteriaList: RetryCriteriaList })).annotate({
        identifier: "JobExecutionsRetryConfig",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ startTime: S.String, durationInMinutes: S.Number }),
      ).annotate({ identifier: "MaintenanceWindow" });
    case 3:
      return S.Array(MaintenanceWindow);
    case 4:
      return S.suspend(() =>
        S.Struct({
          startTime: S.optional(S.String),
          endTime: S.optional(S.String),
          endBehavior: S.optional(JobEndBehavior),
          maintenanceWindows: S.optional(MaintenanceWindows),
        }),
      ).annotate({ identifier: "SchedulingConfig" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          targets: JobTargets,
          documentSource: S.optional(S.String),
          document: S.optional(S.String),
          description: S.optional(S.String),
          presignedUrlConfig: S.optional(PresignedUrlConfig),
          targetSelection: S.optional(TargetSelection),
          jobExecutionsRolloutConfig: S.optional(JobExecutionsRolloutConfig),
          abortConfig: S.optional(AbortConfig),
          timeoutConfig: S.optional(TimeoutConfig),
          tags: S.optional(TagList),
          namespaceId: S.optional(S.String),
          jobTemplateArn: S.optional(S.String),
          jobExecutionsRetryConfig: S.optional(JobExecutionsRetryConfig),
          documentParameters: S.optional(ParameterMap),
          schedulingConfig: S.optional(SchedulingConfig),
          destinationPackageVersions: S.optional(DestinationPackageVersions),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/jobs/{jobId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateJobRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          jobTemplateId: S.String.pipe(T.HttpLabel("jobTemplateId")),
          jobArn: S.optional(S.String),
          documentSource: S.optional(S.String),
          document: S.optional(S.String),
          description: S.String,
          presignedUrlConfig: S.optional(PresignedUrlConfig),
          jobExecutionsRolloutConfig: S.optional(JobExecutionsRolloutConfig),
          abortConfig: S.optional(AbortConfig),
          timeoutConfig: S.optional(TimeoutConfig),
          tags: S.optional(TagList),
          jobExecutionsRetryConfig: S.optional(JobExecutionsRetryConfig),
          maintenanceWindows: S.optional(MaintenanceWindows),
          destinationPackageVersions: S.optional(DestinationPackageVersions),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/job-templates/{jobTemplateId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateJobTemplateRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ jobTemplateArn: S.optional(S.String), jobTemplateId: S.optional(S.String) }),
      ).annotate({
        identifier: "CreateJobTemplateResponse",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ setAsActive: S.optional(S.Boolean).pipe(T.HttpQuery("setAsActive")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/keys-and-certificate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateKeysAndCertificateRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ PublicKey: S.optional(S.String), PrivateKey: S.optional(SensitiveString) }),
      ).annotate({ identifier: "KeyPair" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          certificateArn: S.optional(S.String),
          certificateId: S.optional(S.String),
          certificatePem: S.optional(S.String),
          keyPair: S.optional(KeyPair),
        }),
      ).annotate({
        identifier: "CreateKeysAndCertificateResponse",
      });
    case 3:
      return S.suspend(() => S.Struct({ action: DeviceCertificateUpdateAction })).annotate({
        identifier: "UpdateDeviceCertificateParams",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          thingGroupNames: ThingGroupNames,
          overrideDynamicGroups: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AddThingsToThingGroupParams",
      });
    case 5:
      return S.suspend(() => S.Struct({ templateName: PolicyTemplateName })).annotate({
        identifier: "ReplaceDefaultPolicyVersionParams",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ roleArnForLogging: S.String, logLevel: LogLevel }),
      ).annotate({ identifier: "EnableIoTLoggingParams" });
    case 7:
      return S.suspend(() => S.Struct({ topicArn: S.String })).annotate({
        identifier: "PublishFindingToSnsParams",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          updateDeviceCertificateParams: S.optional(UpdateDeviceCertificateParams),
          updateCACertificateParams: S.optional(UpdateCACertificateParams),
          addThingsToThingGroupParams: S.optional(AddThingsToThingGroupParams),
          replaceDefaultPolicyVersionParams: S.optional(ReplaceDefaultPolicyVersionParams),
          enableIoTLoggingParams: S.optional(EnableIoTLoggingParams),
          publishFindingToSnsParams: S.optional(PublishFindingToSnsParams),
        }),
      ).annotate({ identifier: "MitigationActionParams" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          actionName: S.String.pipe(T.HttpLabel("actionName")),
          roleArn: S.String,
          actionParams: MitigationActionParams,
          tags: S.optional(TagList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/mitigationactions/actions/{actionName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateMitigationActionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ actionArn: S.optional(S.String), actionId: S.optional(S.String) }),
      ).annotate({
        identifier: "CreateMitigationActionResponse",
      });
    case 3:
      return S.Array(Protocol);
    case 4:
      return S.suspend(() =>
        S.Struct({
          numberOfNotifiedThings: S.optional(S.Number),
          numberOfSucceededThings: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsJobRateIncreaseCriteria",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          baseRatePerMinute: S.Number,
          incrementFactor: S.Number,
          rateIncreaseCriteria: AwsJobRateIncreaseCriteria,
        }),
      ).annotate({
        identifier: "AwsJobExponentialRolloutRate",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          maximumPerMinute: S.optional(S.Number),
          exponentialRate: S.optional(AwsJobExponentialRolloutRate),
        }),
      ).annotate({
        identifier: "AwsJobExecutionsRolloutConfig",
      });
    case 7:
      return S.suspend(() => S.Struct({ expiresInSec: S.optional(S.Number) })).annotate({
        identifier: "AwsJobPresignedUrlConfig",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ abortCriteriaList: AwsJobAbortCriteriaList })).annotate({
        identifier: "AwsJobAbortConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ streamId: S.optional(S.String), fileId: S.optional(S.Number) }),
      ).annotate({ identifier: "Stream" });
    case 2:
      return S.suspend(() =>
        S.Struct({ stream: S.optional(Stream), s3Location: S.optional(S3Location) }),
      ).annotate({ identifier: "FileLocation" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          certificateArn: S.optional(S.String),
          platform: S.optional(S.String),
          certificatePathOnDevice: S.optional(S.String),
        }),
      ).annotate({ identifier: "SigningProfileParameter" });
    case 4:
      return S.suspend(() =>
        S.Struct({ bucket: S.optional(S.String), prefix: S.optional(S.String) }),
      ).annotate({ identifier: "S3Destination" });
    case 5:
      return S.suspend(() => S.Struct({ s3Destination: S.optional(S3Destination) })).annotate({
        identifier: "Destination",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          signingProfileParameter: S.optional(SigningProfileParameter),
          signingProfileName: S.optional(S.String),
          destination: S.optional(Destination),
        }),
      ).annotate({ identifier: "StartSigningJobParameter" });
    case 7:
      return S.suspend(() => S.Struct({ inlineDocument: S.optional(T.Blob) })).annotate({
        identifier: "CodeSigningSignature",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ certificateName: S.optional(S.String), inlineDocument: S.optional(S.String) }),
      ).annotate({
        identifier: "CodeSigningCertificateChain",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          signature: S.optional(CodeSigningSignature),
          certificateChain: S.optional(CodeSigningCertificateChain),
          hashAlgorithm: S.optional(S.String),
          signatureAlgorithm: S.optional(S.String),
        }),
      ).annotate({ identifier: "CustomCodeSigning" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          awsSignerJobId: S.optional(S.String),
          startSigningJobParameter: S.optional(StartSigningJobParameter),
          customCodeSigning: S.optional(CustomCodeSigning),
        }),
      ).annotate({ identifier: "CodeSigning" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          fileName: S.optional(S.String),
          fileType: S.optional(S.Number),
          fileVersion: S.optional(S.String),
          fileLocation: S.optional(FileLocation),
          codeSigning: S.optional(CodeSigning),
          attributes: S.optional(AttributesMap),
        }),
      ).annotate({ identifier: "OTAUpdateFile" });
    case 4:
      return S.Array(OTAUpdateFile);
    case 5:
      return S.suspend(() =>
        S.Struct({
          otaUpdateId: S.String.pipe(T.HttpLabel("otaUpdateId")),
          description: S.optional(S.String),
          targets: Targets,
          protocols: S.optional(Protocols),
          targetSelection: S.optional(TargetSelection),
          awsJobExecutionsRolloutConfig: S.optional(AwsJobExecutionsRolloutConfig),
          awsJobPresignedUrlConfig: S.optional(AwsJobPresignedUrlConfig),
          awsJobAbortConfig: S.optional(AwsJobAbortConfig),
          awsJobTimeoutConfig: S.optional(AwsJobTimeoutConfig),
          files: OTAUpdateFiles,
          roleArn: S.String,
          additionalParameters: S.optional(AdditionalParameterMap),
          tags: S.optional(TagList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/otaUpdates/{otaUpdateId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateOTAUpdateRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          otaUpdateId: S.optional(S.String),
          awsIotJobId: S.optional(S.String),
          otaUpdateArn: S.optional(S.String),
          awsIotJobArn: S.optional(S.String),
          otaUpdateStatus: S.optional(OTAUpdateStatus),
        }),
      ).annotate({ identifier: "CreateOTAUpdateResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          packageName: S.String.pipe(T.HttpLabel("packageName")),
          description: S.optional(SensitiveString),
          tags: S.optional(TagMap),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/packages/{packageName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreatePackageRequest" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          packageName: S.optional(S.String),
          packageArn: S.optional(S.String),
          description: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "CreatePackageResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          packageName: S.String.pipe(T.HttpLabel("packageName")),
          versionName: S.String.pipe(T.HttpLabel("versionName")),
          description: S.optional(SensitiveString),
          attributes: S.optional(ResourceAttributes),
          artifact: S.optional(PackageVersionArtifact),
          recipe: S.optional(SensitiveString),
          tags: S.optional(TagMap),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/packages/{packageName}/versions/{versionName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreatePackageVersionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          packageVersionArn: S.optional(S.String),
          packageName: S.optional(S.String),
          versionName: S.optional(S.String),
          description: S.optional(SensitiveString),
          attributes: S.optional(ResourceAttributes),
          status: S.optional(PackageVersionStatus),
          errorReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreatePackageVersionResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          policyName: S.String.pipe(T.HttpLabel("policyName")),
          policyDocument: S.String,
          tags: S.optional(TagList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/policies/{policyName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreatePolicyRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          policyName: S.optional(S.String),
          policyArn: S.optional(S.String),
          policyDocument: S.optional(S.String),
          policyVersionId: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreatePolicyResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          policyName: S.String.pipe(T.HttpLabel("policyName")),
          policyDocument: S.String,
          setAsDefault: S.optional(S.Boolean).pipe(T.HttpQuery("setAsDefault")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/policies/{policyName}/version" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreatePolicyVersionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          policyArn: S.optional(S.String),
          policyDocument: S.optional(S.String),
          policyVersionId: S.optional(S.String),
          isDefaultVersion: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "CreatePolicyVersionResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ templateName: S.String.pipe(T.HttpLabel("templateName")) }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/provisioning-templates/{templateName}/provisioning-claim",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateProvisioningClaimRequest",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          certificateId: S.optional(S.String),
          certificatePem: S.optional(S.String),
          keyPair: S.optional(KeyPair),
          expiration: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "CreateProvisioningClaimResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ payloadVersion: S.optional(S.String), targetArn: S.String }),
      ).annotate({ identifier: "ProvisioningHook" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          templateName: S.String,
          description: S.optional(S.String),
          templateBody: S.String,
          enabled: S.optional(S.Boolean),
          provisioningRoleArn: S.String,
          preProvisioningHook: S.optional(ProvisioningHook),
          tags: S.optional(TagList),
          type: S.optional(TemplateType),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/provisioning-templates" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateProvisioningTemplateRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          templateArn: S.optional(S.String),
          templateName: S.optional(S.String),
          defaultVersionId: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "CreateProvisioningTemplateResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          templateName: S.String.pipe(T.HttpLabel("templateName")),
          templateBody: S.String,
          setAsDefault: S.optional(S.Boolean).pipe(T.HttpQuery("setAsDefault")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/provisioning-templates/{templateName}/versions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateProvisioningTemplateVersionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          templateArn: S.optional(S.String),
          templateName: S.optional(S.String),
          versionId: S.optional(S.Number),
          isDefaultVersion: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "CreateProvisioningTemplateVersionResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          roleAlias: S.String.pipe(T.HttpLabel("roleAlias")),
          roleArn: S.String,
          credentialDurationSeconds: S.optional(S.Number),
          tags: S.optional(TagList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/role-aliases/{roleAlias}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateRoleAliasRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ roleAlias: S.optional(S.String), roleAliasArn: S.optional(S.String) }),
      ).annotate({ identifier: "CreateRoleAliasResponse" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          frequency: AuditFrequency,
          dayOfMonth: S.optional(S.String),
          dayOfWeek: S.optional(DayOfWeek),
          targetCheckNames: TargetAuditCheckNames,
          scheduledAuditName: S.String.pipe(T.HttpLabel("scheduledAuditName")),
          tags: S.optional(TagList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/audit/scheduledaudits/{scheduledAuditName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateScheduledAuditRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ scheduledAuditArn: S.optional(S.String) })).annotate({
        identifier: "CreateScheduledAuditResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ dimensionName: S.String, operator: S.optional(DimensionValueOperator) }),
      ).annotate({ identifier: "MetricDimension" });
    case 3:
      return S.Array(S.Number);
    case 4:
      return S.suspend(() =>
        S.Struct({
          count: S.optional(S.Number),
          cidrs: S.optional(Cidrs),
          ports: S.optional(Ports),
          number: S.optional(S.Number),
          numbers: S.optional(NumberList),
          strings: S.optional(StringList),
        }),
      ).annotate({ identifier: "MetricValue" });
    case 5:
      return S.suspend(() => S.Struct({ statistic: S.optional(S.String) })).annotate({
        identifier: "StatisticalThreshold",
      });
    case 6:
      return S.suspend(() => S.Struct({ confidenceLevel: ConfidenceLevel })).annotate({
        identifier: "MachineLearningDetectionConfig",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          comparisonOperator: S.optional(ComparisonOperator),
          value: S.optional(MetricValue),
          durationSeconds: S.optional(S.Number),
          consecutiveDatapointsToAlarm: S.optional(S.Number),
          consecutiveDatapointsToClear: S.optional(S.Number),
          statisticalThreshold: S.optional(StatisticalThreshold),
          mlDetectionConfig: S.optional(MachineLearningDetectionConfig),
        }),
      ).annotate({ identifier: "BehaviorCriteria" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          metric: S.optional(S.String),
          metricDimension: S.optional(MetricDimension),
          criteria: S.optional(BehaviorCriteria),
          suppressAlerts: S.optional(S.Boolean),
          exportMetric: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Behavior" });
    case 1:
      return S.Array(Behavior);
    case 2:
      return S.suspend(() => S.Struct({ alertTargetArn: S.String, roleArn: S.String })).annotate({
        identifier: "AlertTarget",
      });
    case 3:
      return S.Record(AlertTargetType, /*@__PURE__*/ AlertTarget.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          metric: S.String,
          metricDimension: S.optional(MetricDimension),
          exportMetric: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "MetricToRetain" });
    case 5:
      return S.Array(MetricToRetain);
    case 6:
      return S.suspend(() => S.Struct({ mqttTopic: S.String, roleArn: S.String })).annotate({
        identifier: "MetricsExportConfig",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          securityProfileName: S.String.pipe(T.HttpLabel("securityProfileName")),
          securityProfileDescription: S.optional(S.String),
          behaviors: S.optional(Behaviors),
          alertTargets: S.optional(AlertTargets),
          additionalMetricsToRetain: S.optional(AdditionalMetricsToRetainList),
          additionalMetricsToRetainV2: S.optional(AdditionalMetricsToRetainV2List),
          tags: S.optional(TagList),
          metricsExportConfig: S.optional(MetricsExportConfig),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/security-profiles/{securityProfileName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateSecurityProfileRequest",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          securityProfileName: S.optional(S.String),
          securityProfileArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateSecurityProfileResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ fileId: S.optional(S.Number), s3Location: S.optional(S3Location) }),
      ).annotate({ identifier: "StreamFile" });
    case 2:
      return S.Array(StreamFile);
    case 3:
      return S.suspend(() =>
        S.Struct({
          streamId: S.String.pipe(T.HttpLabel("streamId")),
          description: S.optional(S.String),
          files: StreamFiles,
          roleArn: S.String,
          tags: S.optional(TagList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/streams/{streamId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateStreamRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          streamId: S.optional(S.String),
          streamArn: S.optional(S.String),
          description: S.optional(S.String),
          streamVersion: S.optional(S.Number),
        }),
      ).annotate({ identifier: "CreateStreamResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          thingName: S.String.pipe(T.HttpLabel("thingName")),
          thingTypeName: S.optional(S.String),
          attributePayload: S.optional(AttributePayload),
          billingGroupName: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/things/{thingName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateThingRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          thingName: S.optional(S.String),
          thingArn: S.optional(S.String),
          thingId: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateThingResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          thingGroupName: S.String.pipe(T.HttpLabel("thingGroupName")),
          parentGroupName: S.optional(S.String),
          thingGroupProperties: S.optional(ThingGroupProperties),
          tags: S.optional(TagList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/thing-groups/{thingGroupName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateThingGroupRequest" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          thingGroupName: S.optional(S.String),
          thingGroupArn: S.optional(S.String),
          thingGroupId: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateThingGroupResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          userPropertyKey: S.optional(S.String),
          thingAttribute: S.optional(S.String),
          connectionAttribute: S.optional(S.String),
        }),
      ).annotate({ identifier: "PropagatingAttribute" });
    case 2:
      return S.Array(PropagatingAttribute);
    case 3:
      return S.suspend(() =>
        S.Struct({ propagatingAttributes: S.optional(PropagatingAttributeList) }),
      ).annotate({ identifier: "Mqtt5Configuration" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          thingTypeDescription: S.optional(S.String),
          searchableAttributes: S.optional(SearchableAttributes),
          mqtt5Configuration: S.optional(Mqtt5Configuration),
        }),
      ).annotate({ identifier: "ThingTypeProperties" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          thingTypeName: S.String.pipe(T.HttpLabel("thingTypeName")),
          thingTypeProperties: S.optional(ThingTypeProperties),
          tags: S.optional(TagList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/thing-types/{thingTypeName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateThingTypeRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          thingTypeName: S.optional(S.String),
          thingTypeArn: S.optional(S.String),
          thingTypeId: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateThingTypeResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          tableName: S.String,
          roleArn: S.String,
          operation: S.optional(S.String),
          hashKeyField: S.String,
          hashKeyValue: S.String,
          hashKeyType: S.optional(DynamoKeyType),
          rangeKeyField: S.optional(S.String),
          rangeKeyValue: S.optional(S.String),
          rangeKeyType: S.optional(DynamoKeyType),
          payloadField: S.optional(S.String),
        }),
      ).annotate({ identifier: "DynamoDBAction" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ tableName: S.String })).annotate({
        identifier: "PutItemInput",
      });
    case 1:
      return S.suspend(() => S.Struct({ roleArn: S.String, putItem: PutItemInput })).annotate({
        identifier: "DynamoDBv2Action",
      });
    case 2:
      return S.suspend(() => S.Struct({ functionArn: S.String })).annotate({
        identifier: "LambdaAction",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          targetArn: S.String,
          roleArn: S.String,
          messageFormat: S.optional(MessageFormat),
        }),
      ).annotate({ identifier: "SnsAction" });
    case 4:
      return S.suspend(() =>
        S.Struct({ roleArn: S.String, queueUrl: S.String, useBase64: S.optional(S.Boolean) }),
      ).annotate({ identifier: "SqsAction" });
    case 5:
      return S.suspend(() =>
        S.Struct({ roleArn: S.String, streamName: S.String, partitionKey: S.optional(S.String) }),
      ).annotate({ identifier: "KinesisAction" });
    case 6:
      return S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
        identifier: "UserProperty",
      });
    case 7:
      return S.Array(UserProperty);
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          payloadFormatIndicator: S.optional(S.String),
          contentType: S.optional(S.String),
          responseTopic: S.optional(S.String),
          correlationData: S.optional(S.String),
          messageExpiry: S.optional(S.String),
          userProperties: S.optional(UserProperties),
        }),
      ).annotate({ identifier: "MqttHeaders" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          roleArn: S.String,
          topic: S.String,
          qos: S.optional(S.Number),
          headers: S.optional(MqttHeaders),
        }),
      ).annotate({ identifier: "RepublishAction" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          roleArn: S.String,
          bucketName: S.String,
          key: S.String,
          cannedAcl: S.optional(CannedAccessControlList),
        }),
      ).annotate({ identifier: "S3Action" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          roleArn: S.String,
          deliveryStreamName: S.String,
          separator: S.optional(S.String),
          batchMode: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "FirehoseAction" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          roleArn: S.String,
          metricNamespace: S.String,
          metricName: S.String,
          metricValue: S.String,
          metricUnit: S.String,
          metricTimestamp: S.optional(S.String),
        }),
      ).annotate({ identifier: "CloudwatchMetricAction" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          roleArn: S.String,
          alarmName: S.String,
          stateReason: S.String,
          stateValue: S.String,
        }),
      ).annotate({ identifier: "CloudwatchAlarmAction" });
    case 6:
      return S.suspend(() =>
        S.Struct({ roleArn: S.String, logGroupName: S.String, batchMode: S.optional(S.Boolean) }),
      ).annotate({ identifier: "CloudwatchLogsAction" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          roleArn: S.String,
          endpoint: S.String,
          index: S.String,
          type: S.String,
          id: S.String,
        }),
      ).annotate({ identifier: "ElasticsearchAction" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ token: S.String, url: S.String })).annotate({
        identifier: "SalesforceAction",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          channelArn: S.optional(S.String),
          channelName: S.optional(S.String),
          batchMode: S.optional(S.Boolean),
          roleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "IotAnalyticsAction" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          inputName: S.String,
          messageId: S.optional(S.String),
          batchMode: S.optional(S.Boolean),
          roleArn: S.String,
        }),
      ).annotate({ identifier: "IotEventsAction" });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ stringValue: S.String }),
        /*@__PURE__*/ S.Struct({ integerValue: S.String }),
        /*@__PURE__*/ S.Struct({ doubleValue: S.String }),
        /*@__PURE__*/ S.Struct({ booleanValue: S.String }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({ timeInSeconds: S.String, offsetInNanos: S.optional(S.String) }),
      ).annotate({ identifier: "AssetPropertyTimestamp" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          value: AssetPropertyVariant,
          timestamp: AssetPropertyTimestamp,
          quality: S.optional(S.String),
        }),
      ).annotate({ identifier: "AssetPropertyValue" });
    case 6:
      return S.Array(AssetPropertyValue);
    case 7:
      return S.suspend(() =>
        S.Struct({
          entryId: S.optional(S.String),
          assetId: S.optional(S.String),
          propertyId: S.optional(S.String),
          propertyAlias: S.optional(S.String),
          propertyValues: AssetPropertyValueList,
        }),
      ).annotate({
        identifier: "PutAssetPropertyValueEntry",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.Array(PutAssetPropertyValueEntry);
    case 1:
      return S.suspend(() =>
        S.Struct({
          putAssetPropertyValueEntries: PutAssetPropertyValueEntryList,
          roleArn: S.String,
        }),
      ).annotate({ identifier: "IotSiteWiseAction" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          executionNamePrefix: S.optional(S.String),
          stateMachineName: S.String,
          roleArn: S.String,
        }),
      ).annotate({ identifier: "StepFunctionsAction" });
    case 3:
      return S.suspend(() => S.Struct({ name: S.String, value: S.String })).annotate({
        identifier: "TimestreamDimension",
      });
    case 4:
      return S.Array(TimestreamDimension);
    case 5:
      return S.suspend(() => S.Struct({ value: S.String, unit: S.String })).annotate({
        identifier: "TimestreamTimestamp",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          roleArn: S.String,
          databaseName: S.String,
          tableName: S.String,
          dimensions: TimestreamDimensionList,
          timestamp: S.optional(TimestreamTimestamp),
        }),
      ).annotate({ identifier: "TimestreamAction" });
    case 7:
      return S.suspend(() =>
        S.Struct({ signingRegion: S.String, serviceName: S.String, roleArn: S.String }),
      ).annotate({ identifier: "SigV4Authorization" });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ sigv4: S.optional(SigV4Authorization) })).annotate({
        identifier: "HttpAuthorization",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          maxBatchOpenMs: S.optional(S.Number),
          maxBatchSize: S.optional(S.Number),
          maxBatchSizeBytes: S.optional(S.Number),
          batchAcrossTopics: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "BatchConfig" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          url: S.String,
          confirmationUrl: S.optional(S.String),
          headers: S.optional(HeaderList),
          auth: S.optional(HttpAuthorization),
          enableBatching: S.optional(S.Boolean),
          batchConfig: S.optional(BatchConfig),
        }),
      ).annotate({ identifier: "HttpAction" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          destinationArn: S.String,
          topic: S.String,
          key: S.optional(S.String),
          partition: S.optional(S.String),
          clientProperties: ClientProperties,
          headers: S.optional(KafkaHeaders),
        }),
      ).annotate({ identifier: "KafkaAction" });
    case 4:
      return S.suspend(() => S.Struct({ value: S.String, unit: S.optional(S.String) })).annotate({
        identifier: "LocationTimestamp",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          roleArn: S.String,
          trackerName: S.String,
          deviceId: S.String,
          timestamp: S.optional(LocationTimestamp),
          latitude: S.String,
          longitude: S.String,
        }),
      ).annotate({ identifier: "LocationAction" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          maxBatchSize: S.optional(S.Number),
          maxBatchOpenMs: S.optional(S.Number),
          maxBatchSizeBytes: S.optional(S.Number),
          batchAcrossTopics: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "InfluxDBBatchConfig" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          destinationArn: S.String,
          roleArn: S.String,
          databaseName: S.String,
          tableName: S.String,
          organization: S.optional(S.String),
          tags: S.optional(InfluxDBTagMap),
          timestampUnit: S.optional(InfluxDBTimestampUnit),
          batchConfig: S.optional(InfluxDBBatchConfig),
        }),
      ).annotate({ identifier: "InfluxDBAction" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          dynamoDB: S.optional(DynamoDBAction),
          dynamoDBv2: S.optional(DynamoDBv2Action),
          lambda: S.optional(LambdaAction),
          sns: S.optional(SnsAction),
          sqs: S.optional(SqsAction),
          kinesis: S.optional(KinesisAction),
          republish: S.optional(RepublishAction),
          s3: S.optional(S3Action),
          firehose: S.optional(FirehoseAction),
          cloudwatchMetric: S.optional(CloudwatchMetricAction),
          cloudwatchAlarm: S.optional(CloudwatchAlarmAction),
          cloudwatchLogs: S.optional(CloudwatchLogsAction),
          elasticsearch: S.optional(ElasticsearchAction),
          salesforce: S.optional(SalesforceAction),
          iotAnalytics: S.optional(IotAnalyticsAction),
          iotEvents: S.optional(IotEventsAction),
          iotSiteWise: S.optional(IotSiteWiseAction),
          stepFunctions: S.optional(StepFunctionsAction),
          timestream: S.optional(TimestreamAction),
          http: S.optional(HttpAction),
          kafka: S.optional(KafkaAction),
          openSearch: S.optional(OpenSearchAction),
          location: S.optional(LocationAction),
          influxDB: S.optional(InfluxDBAction),
        }),
      ).annotate({ identifier: "Action" });
    case 1:
      return S.Array(Action);
    case 2:
      return S.suspend(() =>
        S.Struct({
          sql: S.String,
          description: S.optional(S.String),
          actions: ActionList,
          ruleDisabled: S.optional(S.Boolean),
          awsIotSqlVersion: S.optional(S.String),
          errorAction: S.optional(Action),
        }),
      ).annotate({ identifier: "TopicRulePayload" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ruleName: S.String.pipe(T.HttpLabel("ruleName")),
          topicRulePayload: TopicRulePayload.pipe(T.HttpPayload()).annotate({
            identifier: "TopicRulePayload",
          }),
          tags: S.optional(S.String).pipe(T.HttpHeader("x-amz-tagging")),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/rules/{ruleName}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateTopicRuleRequest" });
    case 4:
      return S.suspend(() => S.Struct({ confirmationUrl: S.String })).annotate({
        identifier: "HttpUrlDestinationConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          subnetIds: SubnetIdList,
          securityGroups: S.optional(SecurityGroupList),
          vpcId: S.String,
          roleArn: S.String,
        }),
      ).annotate({
        identifier: "VpcDestinationConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          endpoint: S.String,
          influxDBVersion: InfluxDBVersion,
          secretId: S.String,
          secretType: S.optional(InfluxDBSecretType),
          secretKey: S.optional(S.String),
        }),
      ).annotate({
        identifier: "InfluxDBDestinationConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          httpUrlConfiguration: S.optional(HttpUrlDestinationConfiguration),
          vpcConfiguration: S.optional(VpcDestinationConfiguration),
          influxDBConfiguration: S.optional(InfluxDBDestinationConfiguration),
        }),
      ).annotate({
        identifier: "TopicRuleDestinationConfiguration",
      });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ destinationConfiguration: TopicRuleDestinationConfiguration }).pipe(
          T.all(T.Http({ method: "POST", uri: "/destinations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateTopicRuleDestinationRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ confirmationUrl: S.optional(S.String) })).annotate({
        identifier: "HttpUrlDestinationProperties",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          subnetIds: S.optional(SubnetIdList),
          securityGroups: S.optional(SecurityGroupList),
          vpcId: S.optional(S.String),
          roleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "VpcDestinationProperties" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          endpoint: S.optional(S.String),
          influxDBVersion: S.optional(InfluxDBVersion),
          secretId: S.optional(S.String),
          secretType: S.optional(InfluxDBSecretType),
          secretKey: S.optional(S.String),
        }),
      ).annotate({
        identifier: "InfluxDBDestinationProperties",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          status: S.optional(TopicRuleDestinationStatus),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          statusReason: S.optional(S.String),
          httpUrlProperties: S.optional(HttpUrlDestinationProperties),
          vpcProperties: S.optional(VpcDestinationProperties),
          influxDBProperties: S.optional(InfluxDBDestinationProperties),
        }),
      ).annotate({ identifier: "TopicRuleDestination" });
    case 5:
      return S.suspend(() =>
        S.Struct({ topicRuleDestination: S.optional(TopicRuleDestination) }),
      ).annotate({
        identifier: "CreateTopicRuleDestinationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          deleteScheduledAudits: S.optional(S.Boolean).pipe(T.HttpQuery("deleteScheduledAudits")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/audit/configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAccountAuditConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ checkName: S.String, resourceIdentifier: ResourceIdentifier }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/audit/suppressions/delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAuditSuppressionRequest",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ authorizerName: S.String.pipe(T.HttpLabel("authorizerName")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/authorizer/{authorizerName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAuthorizerRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          billingGroupName: S.String.pipe(T.HttpLabel("billingGroupName")),
          expectedVersion: S.optional(S.Number).pipe(T.HttpQuery("expectedVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/billing-groups/{billingGroupName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteBillingGroupRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ certificateId: S.String.pipe(T.HttpLabel("certificateId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/cacertificate/{certificateId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteCACertificateRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          certificateId: S.String.pipe(T.HttpLabel("certificateId")),
          forceDelete: S.optional(S.Boolean).pipe(T.HttpQuery("forceDelete")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/certificates/{certificateId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteCertificateRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          certificateProviderName: S.String.pipe(T.HttpLabel("certificateProviderName")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/certificate-providers/{certificateProviderName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteCertificateProviderRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ commandId: S.String.pipe(T.HttpLabel("commandId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/commands/{commandId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteCommandRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ statusCode: S.optional(S.Number).pipe(T.HttpResponseCode()) }),
      ).annotate({ identifier: "DeleteCommandResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          executionId: S.String.pipe(T.HttpLabel("executionId")),
          targetArn: S.String.pipe(T.HttpQuery("targetArn")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/command-executions/{executionId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteCommandExecutionRequest",
      });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ metricName: S.String.pipe(T.HttpLabel("metricName")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/custom-metric/{metricName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteCustomMetricRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.String.pipe(T.HttpLabel("name")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/dimensions/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDimensionRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainConfigurationName: S.String.pipe(T.HttpLabel("domainConfigurationName")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/domainConfigurations/{domainConfigurationName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDomainConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          thingGroupName: S.String.pipe(T.HttpLabel("thingGroupName")),
          expectedVersion: S.optional(S.Number).pipe(T.HttpQuery("expectedVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/dynamic-thing-groups/{thingGroupName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDynamicThingGroupRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteDynamicThingGroupResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          metricName: S.String.pipe(T.HttpLabel("metricName")),
          expectedVersion: S.optional(S.Number).pipe(T.HttpQuery("expectedVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/fleet-metric/{metricName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteFleetMetricRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          force: S.optional(S.Boolean).pipe(T.HttpQuery("force")),
          namespaceId: S.optional(S.String).pipe(T.HttpQuery("namespaceId")),
        }).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/jobs/{jobId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteJobRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          thingName: S.String.pipe(T.HttpLabel("thingName")),
          executionNumber: S.Number.pipe(T.HttpLabel("executionNumber")),
          force: S.optional(S.Boolean).pipe(T.HttpQuery("force")),
          namespaceId: S.optional(S.String).pipe(T.HttpQuery("namespaceId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/things/{thingName}/jobs/{jobId}/executionNumber/{executionNumber}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteJobExecutionRequest",
      });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ jobTemplateId: S.String.pipe(T.HttpLabel("jobTemplateId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/job-templates/{jobTemplateId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteJobTemplateRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ actionName: S.String.pipe(T.HttpLabel("actionName")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/mitigationactions/actions/{actionName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteMitigationActionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          otaUpdateId: S.String.pipe(T.HttpLabel("otaUpdateId")),
          deleteStream: S.optional(S.Boolean).pipe(T.HttpQuery("deleteStream")),
          forceDeleteAWSJob: S.optional(S.Boolean).pipe(T.HttpQuery("forceDeleteAWSJob")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/otaUpdates/{otaUpdateId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteOTAUpdateRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          packageName: S.String.pipe(T.HttpLabel("packageName")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/packages/{packageName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeletePackageRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          packageName: S.String.pipe(T.HttpLabel("packageName")),
          versionName: S.String.pipe(T.HttpLabel("versionName")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/packages/{packageName}/versions/{versionName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeletePackageVersionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ policyName: S.String.pipe(T.HttpLabel("policyName")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/policies/{policyName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeletePolicyRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          policyName: S.String.pipe(T.HttpLabel("policyName")),
          policyVersionId: S.String.pipe(T.HttpLabel("policyVersionId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/policies/{policyName}/version/{policyVersionId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeletePolicyVersionRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ templateName: S.String.pipe(T.HttpLabel("templateName")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/provisioning-templates/{templateName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteProvisioningTemplateRequest",
      });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          templateName: S.String.pipe(T.HttpLabel("templateName")),
          versionId: S.Number.pipe(T.HttpLabel("versionId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/provisioning-templates/{templateName}/versions/{versionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteProvisioningTemplateVersionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/registrationcode" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteRegistrationCodeRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ roleAlias: S.String.pipe(T.HttpLabel("roleAlias")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/role-aliases/{roleAlias}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteRoleAliasRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ scheduledAuditName: S.String.pipe(T.HttpLabel("scheduledAuditName")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/audit/scheduledaudits/{scheduledAuditName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteScheduledAuditRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          securityProfileName: S.String.pipe(T.HttpLabel("securityProfileName")),
          expectedVersion: S.optional(S.Number).pipe(T.HttpQuery("expectedVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/security-profiles/{securityProfileName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteSecurityProfileRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ streamId: S.String.pipe(T.HttpLabel("streamId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/streams/{streamId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteStreamRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          thingName: S.String.pipe(T.HttpLabel("thingName")),
          expectedVersion: S.optional(S.Number).pipe(T.HttpQuery("expectedVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/things/{thingName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteThingRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          thingGroupName: S.String.pipe(T.HttpLabel("thingGroupName")),
          expectedVersion: S.optional(S.Number).pipe(T.HttpQuery("expectedVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/thing-groups/{thingGroupName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteThingGroupRequest" });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ thingTypeName: S.String.pipe(T.HttpLabel("thingTypeName")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/thing-types/{thingTypeName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteThingTypeRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ruleName: S.String.pipe(T.HttpLabel("ruleName")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/rules/{ruleName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteTopicRuleRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ arn: S.String.pipe(T.HttpLabel("arn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/destinations/{arn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteTopicRuleDestinationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          targetType: LogTargetType.pipe(T.HttpQuery("targetType")),
          targetName: S.String.pipe(T.HttpQuery("targetName")),
        }).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/v2LoggingLevel" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteV2LoggingLevelRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          thingTypeName: S.String.pipe(T.HttpLabel("thingTypeName")),
          undoDeprecate: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/thing-types/{thingTypeName}/deprecate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeprecateThingTypeRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/audit/configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAccountAuditConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          targetArn: S.optional(S.String),
          roleArn: S.optional(S.String),
          enabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AuditNotificationTarget" });
    case 7:
      return S.Record(
        AuditNotificationType,
        /*@__PURE__*/ AuditNotificationTarget.pipe(S.optional),
      );
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.Record(ConfigName, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          enabled: S.optional(S.Boolean),
          configuration: S.optional(CheckCustomConfiguration),
        }),
      ).annotate({ identifier: "AuditCheckConfiguration" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ AuditCheckConfiguration.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          roleArn: S.optional(S.String),
          auditNotificationTargetConfigurations: S.optional(AuditNotificationTargetConfigurations),
          auditCheckConfigurations: S.optional(AuditCheckConfigurations),
        }),
      ).annotate({
        identifier: "DescribeAccountAuditConfigurationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ findingId: S.String.pipe(T.HttpLabel("findingId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/audit/findings/{findingId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAuditFindingRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceType: S.optional(ResourceType),
          resourceIdentifier: S.optional(ResourceIdentifier),
          additionalInfo: S.optional(StringMap),
        }),
      ).annotate({ identifier: "NonCompliantResource" });
    case 6:
      return S.Array(RelatedResource);
    case 7:
      return S.suspend(() =>
        S.Struct({
          findingId: S.optional(S.String),
          taskId: S.optional(S.String),
          checkName: S.optional(S.String),
          taskStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          findingTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          severity: S.optional(AuditFindingSeverity),
          nonCompliantResource: S.optional(NonCompliantResource),
          relatedResources: S.optional(RelatedResources),
          reasonForNonCompliance: S.optional(S.String),
          reasonForNonComplianceCode: S.optional(S.String),
          isSuppressed: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AuditFinding" });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ finding: S.optional(AuditFinding) })).annotate({
        identifier: "DescribeAuditFindingResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ taskId: S.String.pipe(T.HttpLabel("taskId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/audit/mitigationactions/tasks/{taskId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAuditMitigationActionsTaskRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          totalFindingsCount: S.optional(S.Number),
          failedFindingsCount: S.optional(S.Number),
          succeededFindingsCount: S.optional(S.Number),
          skippedFindingsCount: S.optional(S.Number),
          canceledFindingsCount: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "TaskStatisticsForAuditCheck",
      });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ TaskStatisticsForAuditCheck.pipe(S.optional));
    case 4:
      return S.Record(S.String, /*@__PURE__*/ ReasonForNonComplianceCodes.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          auditTaskId: S.optional(S.String),
          findingIds: S.optional(FindingIds),
          auditCheckToReasonCodeFilter: S.optional(AuditCheckToReasonCodeFilter),
        }),
      ).annotate({
        identifier: "AuditMitigationActionsTaskTarget",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          id: S.optional(S.String),
          roleArn: S.optional(S.String),
          actionParams: S.optional(MitigationActionParams),
        }),
      ).annotate({ identifier: "MitigationAction" });
    case 7:
      return S.Array(MitigationAction);
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          taskStatus: S.optional(AuditMitigationActionsTaskStatus),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          taskStatistics: S.optional(AuditMitigationActionsTaskStatistics),
          target: S.optional(AuditMitigationActionsTaskTarget),
          auditCheckToActionsMapping: S.optional(AuditCheckToActionsMapping),
          actionsDefinition: S.optional(MitigationActionList),
        }),
      ).annotate({
        identifier: "DescribeAuditMitigationActionsTaskResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ checkName: S.String, resourceIdentifier: ResourceIdentifier }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/audit/suppressions/describe" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAuditSuppressionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          checkName: S.optional(S.String),
          resourceIdentifier: S.optional(ResourceIdentifier),
          expirationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          suppressIndefinitely: S.optional(S.Boolean),
          description: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeAuditSuppressionResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ taskId: S.String.pipe(T.HttpLabel("taskId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/audit/tasks/{taskId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeAuditTaskRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          totalChecks: S.optional(S.Number),
          inProgressChecks: S.optional(S.Number),
          waitingForDataCollectionChecks: S.optional(S.Number),
          compliantChecks: S.optional(S.Number),
          nonCompliantChecks: S.optional(S.Number),
          failedChecks: S.optional(S.Number),
          canceledChecks: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TaskStatistics" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          checkRunStatus: S.optional(AuditCheckRunStatus),
          checkCompliant: S.optional(S.Boolean),
          totalResourcesCount: S.optional(S.Number),
          nonCompliantResourcesCount: S.optional(S.Number),
          suppressedNonCompliantResourcesCount: S.optional(S.Number),
          errorCode: S.optional(S.String),
          message: S.optional(S.String),
        }),
      ).annotate({ identifier: "AuditCheckDetails" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ AuditCheckDetails.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          taskStatus: S.optional(AuditTaskStatus),
          taskType: S.optional(AuditTaskType),
          taskStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          taskStatistics: S.optional(TaskStatistics),
          scheduledAuditName: S.optional(S.String),
          auditDetails: S.optional(AuditDetails),
        }),
      ).annotate({
        identifier: "DescribeAuditTaskResponse",
      });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ authorizerName: S.String.pipe(T.HttpLabel("authorizerName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/authorizer/{authorizerName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAuthorizerRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          authorizerName: S.optional(S.String),
          authorizerArn: S.optional(S.String),
          authorizerFunctionArn: S.optional(S.String),
          tokenKeyName: S.optional(S.String),
          tokenSigningPublicKeys: S.optional(PublicKeyMap),
          status: S.optional(AuthorizerStatus),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          signingDisabled: S.optional(S.Boolean),
          enableCachingForHttp: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AuthorizerDescription" });
    case 2:
      return S.suspend(() =>
        S.Struct({ authorizerDescription: S.optional(AuthorizerDescription) }),
      ).annotate({
        identifier: "DescribeAuthorizerResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ billingGroupName: S.String.pipe(T.HttpLabel("billingGroupName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/billing-groups/{billingGroupName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeBillingGroupRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))) }),
      ).annotate({ identifier: "BillingGroupMetadata" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          billingGroupName: S.optional(S.String),
          billingGroupId: S.optional(S.String),
          billingGroupArn: S.optional(S.String),
          version: S.optional(S.Number),
          billingGroupProperties: S.optional(BillingGroupProperties),
          billingGroupMetadata: S.optional(BillingGroupMetadata),
        }),
      ).annotate({
        identifier: "DescribeBillingGroupResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ certificateId: S.String.pipe(T.HttpLabel("certificateId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/cacertificate/{certificateId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeCACertificateRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          notBefore: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          notAfter: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "CertificateValidity" });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          certificateArn: S.optional(S.String),
          certificateId: S.optional(S.String),
          status: S.optional(CACertificateStatus),
          certificatePem: S.optional(S.String),
          ownedBy: S.optional(S.String),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          autoRegistrationStatus: S.optional(AutoRegistrationStatus),
          lastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          customerVersion: S.optional(S.Number),
          generationId: S.optional(S.String),
          validity: S.optional(CertificateValidity),
          certificateMode: S.optional(CertificateMode),
        }),
      ).annotate({ identifier: "CACertificateDescription" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          templateBody: S.optional(S.String),
          roleArn: S.optional(S.String),
          templateName: S.optional(S.String),
        }),
      ).annotate({ identifier: "RegistrationConfig" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          certificateDescription: S.optional(CACertificateDescription),
          registrationConfig: S.optional(RegistrationConfig),
        }),
      ).annotate({
        identifier: "DescribeCACertificateResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ certificateId: S.String.pipe(T.HttpLabel("certificateId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/certificates/{certificateId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeCertificateRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          transferMessage: S.optional(S.String),
          rejectReason: S.optional(S.String),
          transferDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          acceptDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          rejectDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "TransferData" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          certificateArn: S.optional(S.String),
          certificateId: S.optional(S.String),
          caCertificateId: S.optional(S.String),
          status: S.optional(CertificateStatus),
          certificatePem: S.optional(S.String),
          ownedBy: S.optional(S.String),
          previousOwnedBy: S.optional(S.String),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          customerVersion: S.optional(S.Number),
          transferData: S.optional(TransferData),
          generationId: S.optional(S.String),
          validity: S.optional(CertificateValidity),
          certificateMode: S.optional(CertificateMode),
        }),
      ).annotate({ identifier: "CertificateDescription" });
    case 6:
      return S.suspend(() =>
        S.Struct({ certificateDescription: S.optional(CertificateDescription) }),
      ).annotate({
        identifier: "DescribeCertificateResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          certificateProviderName: S.String.pipe(T.HttpLabel("certificateProviderName")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/certificate-providers/{certificateProviderName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeCertificateProviderRequest",
      });
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          certificateProviderName: S.optional(S.String),
          certificateProviderArn: S.optional(S.String),
          lambdaFunctionArn: S.optional(S.String),
          accountDefaultForOperations: S.optional(CertificateProviderAccountDefaultForOperations),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DescribeCertificateProviderResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ metricName: S.String.pipe(T.HttpLabel("metricName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/custom-metric/{metricName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeCustomMetricRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          metricName: S.optional(S.String),
          metricArn: S.optional(S.String),
          metricType: S.optional(CustomMetricType),
          displayName: S.optional(S.String),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DescribeCustomMetricResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/default-authorizer" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeDefaultAuthorizerRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ taskId: S.String.pipe(T.HttpLabel("taskId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/detect/mitigationactions/tasks/{taskId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeDetectMitigationActionsTaskRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          violationIds: S.optional(TargetViolationIdsForDetectMitigationActions),
          securityProfileName: S.optional(S.String),
          behaviorName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DetectMitigationActionsTaskTarget",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          startTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          endTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "ViolationEventOccurrenceRange",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          actionsExecuted: S.optional(S.Number),
          actionsSkipped: S.optional(S.Number),
          actionsFailed: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "DetectMitigationActionsTaskStatistics",
      });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          taskId: S.optional(S.String),
          taskStatus: S.optional(DetectMitigationActionsTaskStatus),
          taskStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          taskEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          target: S.optional(DetectMitigationActionsTaskTarget),
          violationEventOccurrenceRange: S.optional(ViolationEventOccurrenceRange),
          onlyActiveViolationsIncluded: S.optional(S.Boolean),
          suppressedAlertsIncluded: S.optional(S.Boolean),
          actionsDefinition: S.optional(MitigationActionList),
          taskStatistics: S.optional(DetectMitigationActionsTaskStatistics),
        }),
      ).annotate({
        identifier: "DetectMitigationActionsTaskSummary",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ taskSummary: S.optional(DetectMitigationActionsTaskSummary) }),
      ).annotate({
        identifier: "DescribeDetectMitigationActionsTaskResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ name: S.String.pipe(T.HttpLabel("name")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/dimensions/{name}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeDimensionRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          arn: S.optional(S.String),
          type: S.optional(DimensionType),
          stringValues: S.optional(DimensionStringValues),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DescribeDimensionResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainConfigurationName: S.String.pipe(T.HttpLabel("domainConfigurationName")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domainConfigurations/{domainConfigurationName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeDomainConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          serverCertificateArn: S.optional(S.String),
          serverCertificateStatus: S.optional(ServerCertificateStatus),
          serverCertificateStatusDetail: S.optional(S.String),
        }),
      ).annotate({ identifier: "ServerCertificateSummary" });
    case 6:
      return S.Array(ServerCertificateSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainConfigurationName: S.optional(S.String),
          domainConfigurationArn: S.optional(S.String),
          domainName: S.optional(S.String),
          serverCertificates: S.optional(ServerCertificates),
          authorizerConfig: S.optional(AuthorizerConfig),
          domainConfigurationStatus: S.optional(DomainConfigurationStatus),
          serviceType: S.optional(ServiceType),
          domainType: S.optional(DomainType),
          lastStatusChangeDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          tlsConfig: S.optional(TlsConfig),
          serverCertificateConfig: S.optional(ServerCertificateConfig),
          authenticationType: S.optional(AuthenticationType),
          applicationProtocol: S.optional(ApplicationProtocol),
          clientCertificateConfig: S.optional(ClientCertificateConfig),
        }),
      ).annotate({
        identifier: "DescribeDomainConfigurationResponse",
      });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/encryption-configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeEncryptionConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          configurationStatus: S.optional(ConfigurationStatus),
          errorCode: S.optional(S.String),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "ConfigurationDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          encryptionType: S.optional(EncryptionType),
          kmsKeyArn: S.optional(S.String),
          kmsAccessRoleArn: S.optional(S.String),
          configurationDetails: S.optional(ConfigurationDetails),
          lastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DescribeEncryptionConfigurationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ endpointType: S.optional(S.String).pipe(T.HttpQuery("endpointType")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/endpoint" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeEndpointRequest" });
    case 4:
      return S.suspend(() => S.Struct({ endpointAddress: S.optional(S.String) })).annotate({
        identifier: "DescribeEndpointResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/event-configurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeEventConfigurationsRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ Enabled: S.optional(S.Boolean) })).annotate({
        identifier: "Configuration",
      });
    case 7:
      return S.Record(EventType, /*@__PURE__*/ Configuration.pipe(S.optional));
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          eventConfigurations: S.optional(EventConfigurations),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DescribeEventConfigurationsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ metricName: S.String.pipe(T.HttpLabel("metricName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/fleet-metric/{metricName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeFleetMetricRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          metricName: S.optional(S.String),
          queryString: S.optional(S.String),
          aggregationType: S.optional(AggregationType),
          period: S.optional(S.Number),
          aggregationField: S.optional(S.String),
          description: S.optional(S.String),
          queryVersion: S.optional(S.String),
          indexName: S.optional(S.String),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          unit: S.optional(FleetMetricUnit),
          version: S.optional(S.Number),
          metricArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeFleetMetricResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ indexName: S.String.pipe(T.HttpLabel("indexName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/indices/{indexName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeIndexRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          indexName: S.optional(S.String),
          indexStatus: S.optional(IndexStatus),
          schema: S.optional(S.String),
        }),
      ).annotate({ identifier: "DescribeIndexResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          beforeSubstitution: S.optional(S.Boolean).pipe(T.HttpQuery("beforeSubstitution")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/jobs/{jobId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeJobRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          processingTargets: S.optional(ProcessingTargetNameList),
          numberOfCanceledThings: S.optional(S.Number),
          numberOfSucceededThings: S.optional(S.Number),
          numberOfFailedThings: S.optional(S.Number),
          numberOfRejectedThings: S.optional(S.Number),
          numberOfQueuedThings: S.optional(S.Number),
          numberOfInProgressThings: S.optional(S.Number),
          numberOfRemovedThings: S.optional(S.Number),
          numberOfTimedOutThings: S.optional(S.Number),
        }),
      ).annotate({ identifier: "JobProcessDetails" });
    case 7:
      return S.suspend(() => S.Struct({ startTime: S.optional(S.String) })).annotate({
        identifier: "ScheduledJobRollout",
      });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ScheduledJobRollout);
    case 1:
      return S.suspend(() =>
        S.Struct({
          jobArn: S.optional(S.String),
          jobId: S.optional(S.String),
          targetSelection: S.optional(TargetSelection),
          status: S.optional(JobStatus),
          forceCanceled: S.optional(S.Boolean),
          reasonCode: S.optional(S.String),
          comment: S.optional(S.String),
          targets: S.optional(JobTargets),
          description: S.optional(S.String),
          presignedUrlConfig: S.optional(PresignedUrlConfig),
          jobExecutionsRolloutConfig: S.optional(JobExecutionsRolloutConfig),
          abortConfig: S.optional(AbortConfig),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          completedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          jobProcessDetails: S.optional(JobProcessDetails),
          timeoutConfig: S.optional(TimeoutConfig),
          namespaceId: S.optional(S.String),
          jobTemplateArn: S.optional(S.String),
          jobExecutionsRetryConfig: S.optional(JobExecutionsRetryConfig),
          documentParameters: S.optional(ParameterMap),
          isConcurrent: S.optional(S.Boolean),
          schedulingConfig: S.optional(SchedulingConfig),
          scheduledJobRollouts: S.optional(ScheduledJobRolloutList),
          destinationPackageVersions: S.optional(DestinationPackageVersions),
        }),
      ).annotate({ identifier: "Job" });
    case 2:
      return S.suspend(() =>
        S.Struct({ documentSource: S.optional(S.String), job: S.optional(Job) }),
      ).annotate({ identifier: "DescribeJobResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          thingName: S.String.pipe(T.HttpLabel("thingName")),
          executionNumber: S.optional(S.Number).pipe(T.HttpQuery("executionNumber")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/things/{thingName}/jobs/{jobId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeJobExecutionRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ detailsMap: S.optional(DetailsMap) })).annotate({
        identifier: "JobExecutionStatusDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          jobId: S.optional(S.String),
          status: S.optional(JobExecutionStatus),
          forceCanceled: S.optional(S.Boolean),
          statusDetails: S.optional(JobExecutionStatusDetails),
          thingArn: S.optional(S.String),
          queuedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          startedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          executionNumber: S.optional(S.Number),
          versionNumber: S.optional(S.Number),
          approximateSecondsBeforeTimedOut: S.optional(S.Number),
        }),
      ).annotate({ identifier: "JobExecution" });
    case 6:
      return S.suspend(() => S.Struct({ execution: S.optional(JobExecution) })).annotate({
        identifier: "DescribeJobExecutionResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ jobTemplateId: S.String.pipe(T.HttpLabel("jobTemplateId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/job-templates/{jobTemplateId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeJobTemplateRequest",
      });
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          jobTemplateArn: S.optional(S.String),
          jobTemplateId: S.optional(S.String),
          description: S.optional(S.String),
          documentSource: S.optional(S.String),
          document: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          presignedUrlConfig: S.optional(PresignedUrlConfig),
          jobExecutionsRolloutConfig: S.optional(JobExecutionsRolloutConfig),
          abortConfig: S.optional(AbortConfig),
          timeoutConfig: S.optional(TimeoutConfig),
          jobExecutionsRetryConfig: S.optional(JobExecutionsRetryConfig),
          maintenanceWindows: S.optional(MaintenanceWindows),
          destinationPackageVersions: S.optional(DestinationPackageVersions),
        }),
      ).annotate({
        identifier: "DescribeJobTemplateResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          templateName: S.String.pipe(T.HttpLabel("templateName")),
          templateVersion: S.optional(S.String).pipe(T.HttpQuery("templateVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/managed-job-templates/{templateName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeManagedJobTemplateRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          key: S.optional(S.String),
          description: S.optional(S.String),
          regex: S.optional(S.String),
          example: S.optional(S.String),
          optional: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "DocumentParameter" });
    case 3:
      return S.Array(DocumentParameter);
    case 4:
      return S.suspend(() =>
        S.Struct({
          templateName: S.optional(S.String),
          templateArn: S.optional(S.String),
          description: S.optional(S.String),
          templateVersion: S.optional(S.String),
          environments: S.optional(Environments),
          documentParameters: S.optional(DocumentParameters),
          document: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeManagedJobTemplateResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ actionName: S.String.pipe(T.HttpLabel("actionName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/mitigationactions/actions/{actionName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeMitigationActionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          actionName: S.optional(S.String),
          actionType: S.optional(MitigationActionType),
          actionArn: S.optional(S.String),
          actionId: S.optional(S.String),
          roleArn: S.optional(S.String),
          actionParams: S.optional(MitigationActionParams),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DescribeMitigationActionResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ templateName: S.String.pipe(T.HttpLabel("templateName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/provisioning-templates/{templateName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeProvisioningTemplateRequest",
      });
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          templateArn: S.optional(S.String),
          templateName: S.optional(S.String),
          description: S.optional(S.String),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          defaultVersionId: S.optional(S.Number),
          templateBody: S.optional(S.String),
          enabled: S.optional(S.Boolean),
          provisioningRoleArn: S.optional(S.String),
          preProvisioningHook: S.optional(ProvisioningHook),
          type: S.optional(TemplateType),
        }),
      ).annotate({
        identifier: "DescribeProvisioningTemplateResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          templateName: S.String.pipe(T.HttpLabel("templateName")),
          versionId: S.Number.pipe(T.HttpLabel("versionId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/provisioning-templates/{templateName}/versions/{versionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeProvisioningTemplateVersionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          versionId: S.optional(S.Number),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          templateBody: S.optional(S.String),
          isDefaultVersion: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "DescribeProvisioningTemplateVersionResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ roleAlias: S.String.pipe(T.HttpLabel("roleAlias")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/role-aliases/{roleAlias}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeRoleAliasRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          roleAlias: S.optional(S.String),
          roleAliasArn: S.optional(S.String),
          roleArn: S.optional(S.String),
          owner: S.optional(S.String),
          credentialDurationSeconds: S.optional(S.Number),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "RoleAliasDescription" });
    case 5:
      return S.suspend(() =>
        S.Struct({ roleAliasDescription: S.optional(RoleAliasDescription) }),
      ).annotate({
        identifier: "DescribeRoleAliasResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ scheduledAuditName: S.String.pipe(T.HttpLabel("scheduledAuditName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/audit/scheduledaudits/{scheduledAuditName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeScheduledAuditRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          frequency: S.optional(AuditFrequency),
          dayOfMonth: S.optional(S.String),
          dayOfWeek: S.optional(DayOfWeek),
          targetCheckNames: S.optional(TargetAuditCheckNames),
          scheduledAuditName: S.optional(S.String),
          scheduledAuditArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeScheduledAuditResponse",
      });
  }
}
function __c45(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ securityProfileName: S.String.pipe(T.HttpLabel("securityProfileName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/security-profiles/{securityProfileName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeSecurityProfileRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          securityProfileName: S.optional(S.String),
          securityProfileArn: S.optional(S.String),
          securityProfileDescription: S.optional(S.String),
          behaviors: S.optional(Behaviors),
          alertTargets: S.optional(AlertTargets),
          additionalMetricsToRetain: S.optional(AdditionalMetricsToRetainList),
          additionalMetricsToRetainV2: S.optional(AdditionalMetricsToRetainV2List),
          version: S.optional(S.Number),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          metricsExportConfig: S.optional(MetricsExportConfig),
        }),
      ).annotate({
        identifier: "DescribeSecurityProfileResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ streamId: S.String.pipe(T.HttpLabel("streamId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/streams/{streamId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeStreamRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          streamId: S.optional(S.String),
          streamArn: S.optional(S.String),
          streamVersion: S.optional(S.Number),
          description: S.optional(S.String),
          files: S.optional(StreamFiles),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          roleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "StreamInfo" });
    case 4:
      return S.suspend(() => S.Struct({ streamInfo: S.optional(StreamInfo) })).annotate({
        identifier: "DescribeStreamResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ thingName: S.String.pipe(T.HttpLabel("thingName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/things/{thingName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeThingRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          defaultClientId: S.optional(S.String),
          thingName: S.optional(S.String),
          thingId: S.optional(S.String),
          thingArn: S.optional(S.String),
          thingTypeName: S.optional(S.String),
          attributes: S.optional(Attributes),
          version: S.optional(S.Number),
          billingGroupName: S.optional(S.String),
        }),
      ).annotate({ identifier: "DescribeThingResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ thingGroupName: S.String.pipe(T.HttpLabel("thingGroupName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/thing-groups/{thingGroupName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeThingGroupRequest",
      });
  }
}
function __c46(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ groupName: S.optional(S.String), groupArn: S.optional(S.String) }),
      ).annotate({ identifier: "GroupNameAndArn" });
    case 1:
      return S.Array(GroupNameAndArn);
    case 2:
      return S.suspend(() =>
        S.Struct({
          parentGroupName: S.optional(S.String),
          rootToParentThingGroups: S.optional(ThingGroupNameAndArnList),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ThingGroupMetadata" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          thingGroupName: S.optional(S.String),
          thingGroupId: S.optional(S.String),
          thingGroupArn: S.optional(S.String),
          version: S.optional(S.Number),
          thingGroupProperties: S.optional(ThingGroupProperties),
          thingGroupMetadata: S.optional(ThingGroupMetadata),
          indexName: S.optional(S.String),
          queryString: S.optional(S.String),
          queryVersion: S.optional(S.String),
          status: S.optional(DynamicGroupStatus),
        }),
      ).annotate({
        identifier: "DescribeThingGroupResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ taskId: S.String.pipe(T.HttpLabel("taskId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/thing-registration-tasks/{taskId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeThingRegistrationTaskRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          taskId: S.optional(S.String),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          templateBody: S.optional(S.String),
          inputFileBucket: S.optional(S.String),
          inputFileKey: S.optional(S.String),
          roleArn: S.optional(S.String),
          status: S.optional(Status),
          message: S.optional(S.String),
          successCount: S.optional(S.Number),
          failureCount: S.optional(S.Number),
          percentageProgress: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "DescribeThingRegistrationTaskResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ thingTypeName: S.String.pipe(T.HttpLabel("thingTypeName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/thing-types/{thingTypeName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeThingTypeRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          deprecated: S.optional(S.Boolean),
          deprecationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ThingTypeMetadata" });
  }
}
function __c47(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          thingTypeName: S.optional(S.String),
          thingTypeId: S.optional(S.String),
          thingTypeArn: S.optional(S.String),
          thingTypeProperties: S.optional(ThingTypeProperties),
          thingTypeMetadata: S.optional(ThingTypeMetadata),
        }),
      ).annotate({
        identifier: "DescribeThingTypeResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ policyName: S.String.pipe(T.HttpLabel("policyName")), target: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/target-policies/{policyName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DetachPolicyRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          policyName: S.String.pipe(T.HttpLabel("policyName")),
          principal: S.String.pipe(T.HttpHeader("x-amzn-iot-principal")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/principal-policies/{policyName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DetachPrincipalPolicyRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          securityProfileName: S.String.pipe(T.HttpLabel("securityProfileName")),
          securityProfileTargetArn: S.String.pipe(T.HttpQuery("securityProfileTargetArn")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/security-profiles/{securityProfileName}/targets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DetachSecurityProfileRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          thingName: S.String.pipe(T.HttpLabel("thingName")),
          principal: S.String.pipe(T.HttpHeader("x-amzn-principal")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/things/{thingName}/principals" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DetachThingPrincipalRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ruleName: S.String.pipe(T.HttpLabel("ruleName")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/rules/{ruleName}/disable" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DisableTopicRuleRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          packageName: S.String.pipe(T.HttpLabel("packageName")),
          versionName: S.String.pipe(T.HttpLabel("versionName")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/packages/{packageName}/versions/{versionName}/sbom",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateSbomFromPackageVersionRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ruleName: S.String.pipe(T.HttpLabel("ruleName")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/rules/{ruleName}/enable" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "EnableTopicRuleRequest" });
  }
}
function __c48(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          securityProfileName: S.optional(S.String).pipe(T.HttpQuery("securityProfileName")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/behavior-model-training/summaries" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetBehaviorModelTrainingSummariesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          securityProfileName: S.optional(S.String),
          behaviorName: S.optional(S.String),
          trainingDataCollectionStartDate: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
          modelStatus: S.optional(ModelStatus),
          datapointsCollectionPercentage: S.optional(S.Number),
          lastModelRefreshDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "BehaviorModelTrainingSummary",
      });
    case 2:
      return S.Array(BehaviorModelTrainingSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({
          summaries: S.optional(BehaviorModelTrainingSummaries),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetBehaviorModelTrainingSummariesResponse",
      });
    case 4:
      return S.suspend(() => S.Struct({ maxBuckets: S.optional(S.Number) })).annotate({
        identifier: "TermsAggregation",
      });
    case 5:
      return S.suspend(() => S.Struct({ termsAggregation: S.optional(TermsAggregation) })).annotate(
        { identifier: "BucketsAggregationType" },
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          indexName: S.optional(S.String),
          queryString: S.String,
          aggregationField: S.String,
          queryVersion: S.optional(S.String),
          bucketsAggregationType: BucketsAggregationType,
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/indices/buckets" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetBucketsAggregationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ keyValue: S.optional(S.String), count: S.optional(S.Number) }),
      ).annotate({ identifier: "Bucket" });
  }
}
function __c49(j: number): any {
  switch (j) {
    case 0:
      return S.Array(Bucket);
    case 1:
      return S.suspend(() =>
        S.Struct({ totalCount: S.optional(S.Number), buckets: S.optional(Buckets) }),
      ).annotate({
        identifier: "GetBucketsAggregationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          indexName: S.optional(S.String),
          queryString: S.String,
          aggregationField: S.optional(S.String),
          queryVersion: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/indices/cardinality" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetCardinalityRequest" });
    case 3:
      return S.suspend(() => S.Struct({ cardinality: S.optional(S.Number) })).annotate({
        identifier: "GetCardinalityResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ commandId: S.String.pipe(T.HttpLabel("commandId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/commands/{commandId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetCommandRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          commandId: S.optional(S.String),
          commandArn: S.optional(S.String),
          namespace: S.optional(CommandNamespace),
          displayName: S.optional(S.String),
          description: S.optional(S.String),
          mandatoryParameters: S.optional(CommandParameterList),
          payload: S.optional(CommandPayload),
          payloadTemplate: S.optional(S.String),
          preprocessor: S.optional(CommandPreprocessor),
          roleArn: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          deprecated: S.optional(S.Boolean),
          pendingDeletion: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "GetCommandResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          executionId: S.String.pipe(T.HttpLabel("executionId")),
          targetArn: S.String.pipe(T.HttpQuery("targetArn")),
          includeResult: S.optional(S.Boolean).pipe(T.HttpQuery("includeResult")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/command-executions/{executionId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCommandExecutionRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ reasonCode: S.String, reasonDescription: S.optional(S.String) }),
      ).annotate({ identifier: "StatusReason" });
  }
}
function __c50(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ S: S.optional(S.String), B: S.optional(S.Boolean), BIN: S.optional(T.Blob) }),
      ).annotate({ identifier: "CommandExecutionResult" });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ CommandExecutionResult.pipe(S.optional));
    case 2:
      return S.Record(S.String, /*@__PURE__*/ CommandParameterValue.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          executionId: S.optional(S.String),
          commandArn: S.optional(S.String),
          targetArn: S.optional(S.String),
          status: S.optional(CommandExecutionStatus),
          statusReason: S.optional(StatusReason),
          result: S.optional(CommandExecutionResultMap),
          parameters: S.optional(CommandExecutionParameterMap),
          executionTimeoutSeconds: S.optional(S.Number),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          startedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          completedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          timeToLive: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "GetCommandExecutionResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          principal: S.optional(S.String),
          cognitoIdentityPoolId: S.optional(S.String),
          thingName: S.optional(S.String).pipe(T.HttpQuery("thingName")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/effective-policies" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetEffectivePoliciesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          policyName: S.optional(S.String),
          policyArn: S.optional(S.String),
          policyDocument: S.optional(S.String),
        }),
      ).annotate({ identifier: "EffectivePolicy" });
    case 6:
      return S.Array(EffectivePolicy);
    case 7:
      return S.suspend(() =>
        S.Struct({ effectivePolicies: S.optional(EffectivePolicies) }),
      ).annotate({
        identifier: "GetEffectivePoliciesResponse",
      });
  }
}
function __c51(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/indexing/config" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetIndexingConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), type: S.optional(FieldType) }),
      ).annotate({ identifier: "Field" });
    case 2:
      return S.Array(Field);
    case 3:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), order: S.optional(TargetFieldOrder) }),
      ).annotate({ identifier: "GeoLocationTarget" });
    case 4:
      return S.Array(GeoLocationTarget);
    case 5:
      return S.suspend(() =>
        S.Struct({ includeSocketInformation: S.optional(FleetIndexingApiList) }),
      ).annotate({ identifier: "ConnectivityFilter" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          namedShadowNames: S.optional(NamedShadowNamesFilter),
          geoLocations: S.optional(GeoLocationsFilter),
          connectivity: S.optional(ConnectivityFilter),
        }),
      ).annotate({ identifier: "IndexingFilter" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          thingIndexingMode: ThingIndexingMode,
          thingConnectivityIndexingMode: S.optional(ThingConnectivityIndexingMode),
          deviceDefenderIndexingMode: S.optional(DeviceDefenderIndexingMode),
          namedShadowIndexingMode: S.optional(NamedShadowIndexingMode),
          managedFields: S.optional(Fields),
          customFields: S.optional(Fields),
          filter: S.optional(IndexingFilter),
        }),
      ).annotate({
        identifier: "ThingIndexingConfiguration",
      });
  }
}
function __c52(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          thingGroupIndexingMode: ThingGroupIndexingMode,
          managedFields: S.optional(Fields),
          customFields: S.optional(Fields),
        }),
      ).annotate({
        identifier: "ThingGroupIndexingConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          thingIndexingConfiguration: S.optional(ThingIndexingConfiguration),
          thingGroupIndexingConfiguration: S.optional(ThingGroupIndexingConfiguration),
        }),
      ).annotate({
        identifier: "GetIndexingConfigurationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          beforeSubstitution: S.optional(S.Boolean).pipe(T.HttpQuery("beforeSubstitution")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/jobs/{jobId}/job-document" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetJobDocumentRequest" });
    case 3:
      return S.suspend(() => S.Struct({ document: S.optional(S.String) })).annotate({
        identifier: "GetJobDocumentResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/loggingOptions" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetLoggingOptionsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ roleArn: S.optional(S.String), logLevel: S.optional(LogLevel) }),
      ).annotate({
        identifier: "GetLoggingOptionsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ otaUpdateId: S.String.pipe(T.HttpLabel("otaUpdateId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/otaUpdates/{otaUpdateId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetOTAUpdateRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ code: S.optional(S.String), message: S.optional(S.String) }),
      ).annotate({ identifier: "ErrorInfo" });
  }
}
function __c53(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          otaUpdateId: S.optional(S.String),
          otaUpdateArn: S.optional(S.String),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          description: S.optional(S.String),
          targets: S.optional(Targets),
          protocols: S.optional(Protocols),
          awsJobExecutionsRolloutConfig: S.optional(AwsJobExecutionsRolloutConfig),
          awsJobPresignedUrlConfig: S.optional(AwsJobPresignedUrlConfig),
          targetSelection: S.optional(TargetSelection),
          otaUpdateFiles: S.optional(OTAUpdateFiles),
          otaUpdateStatus: S.optional(OTAUpdateStatus),
          awsIotJobId: S.optional(S.String),
          awsIotJobArn: S.optional(S.String),
          errorInfo: S.optional(ErrorInfo),
          additionalParameters: S.optional(AdditionalParameterMap),
        }),
      ).annotate({ identifier: "OTAUpdateInfo" });
    case 1:
      return S.suspend(() => S.Struct({ otaUpdateInfo: S.optional(OTAUpdateInfo) })).annotate({
        identifier: "GetOTAUpdateResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ packageName: S.String.pipe(T.HttpLabel("packageName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/packages/{packageName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetPackageRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          packageName: S.optional(S.String),
          packageArn: S.optional(S.String),
          description: S.optional(SensitiveString),
          defaultVersionName: S.optional(S.String),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "GetPackageResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/package-configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPackageConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ enabled: S.optional(S.Boolean), roleArn: S.optional(S.String) }),
      ).annotate({
        identifier: "VersionUpdateByJobsConfig",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ versionUpdateByJobsConfig: S.optional(VersionUpdateByJobsConfig) }),
      ).annotate({
        identifier: "GetPackageConfigurationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          packageName: S.String.pipe(T.HttpLabel("packageName")),
          versionName: S.String.pipe(T.HttpLabel("versionName")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/packages/{packageName}/versions/{versionName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetPackageVersionRequest" });
  }
}
function __c54(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          packageVersionArn: S.optional(S.String),
          packageName: S.optional(S.String),
          versionName: S.optional(S.String),
          description: S.optional(SensitiveString),
          attributes: S.optional(ResourceAttributes),
          artifact: S.optional(PackageVersionArtifact),
          status: S.optional(PackageVersionStatus),
          errorReason: S.optional(S.String),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          sbom: S.optional(Sbom),
          sbomValidationStatus: S.optional(SbomValidationStatus),
          recipe: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "GetPackageVersionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          indexName: S.optional(S.String),
          queryString: S.String,
          aggregationField: S.optional(S.String),
          queryVersion: S.optional(S.String),
          percents: S.optional(PercentList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/indices/percentiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetPercentilesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ percent: S.optional(S.Number), value: S.optional(S.Number) }),
      ).annotate({ identifier: "PercentPair" });
    case 3:
      return S.Array(PercentPair);
    case 4:
      return S.suspend(() => S.Struct({ percentiles: S.optional(Percentiles) })).annotate({
        identifier: "GetPercentilesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ policyName: S.String.pipe(T.HttpLabel("policyName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/policies/{policyName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetPolicyRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          policyName: S.optional(S.String),
          policyArn: S.optional(S.String),
          policyDocument: S.optional(S.String),
          defaultVersionId: S.optional(S.String),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          generationId: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetPolicyResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          policyName: S.String.pipe(T.HttpLabel("policyName")),
          policyVersionId: S.String.pipe(T.HttpLabel("policyVersionId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/policies/{policyName}/version/{policyVersionId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetPolicyVersionRequest" });
  }
}
function __c55(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          policyArn: S.optional(S.String),
          policyName: S.optional(S.String),
          policyDocument: S.optional(S.String),
          policyVersionId: S.optional(S.String),
          isDefaultVersion: S.optional(S.Boolean),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          generationId: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetPolicyVersionResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/registrationcode" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetRegistrationCodeRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ registrationCode: S.optional(S.String) })).annotate({
        identifier: "GetRegistrationCodeResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          indexName: S.optional(S.String),
          queryString: S.String,
          aggregationField: S.optional(S.String),
          queryVersion: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/indices/statistics" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetStatisticsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          count: S.optional(S.Number),
          average: S.optional(S.Number),
          sum: S.optional(S.Number),
          minimum: S.optional(S.Number),
          maximum: S.optional(S.Number),
          sumOfSquares: S.optional(S.Number),
          variance: S.optional(S.Number),
          stdDeviation: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Statistics" });
    case 5:
      return S.suspend(() => S.Struct({ statistics: S.optional(Statistics) })).annotate({
        identifier: "GetStatisticsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          thingName: SensitiveString.pipe(T.HttpLabel("thingName")),
          includeSocketInformation: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/things/{thingName}/connectivity-data" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetThingConnectivityDataRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          thingName: S.optional(SensitiveString),
          connected: S.optional(S.Boolean),
          timestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          disconnectReason: S.optional(DisconnectReasonValue),
          sourceIp: S.optional(SensitiveString),
          sourcePort: S.optional(S.Number),
          targetIp: S.optional(SensitiveString),
          targetPort: S.optional(S.Number),
          vpcEndpointId: S.optional(SensitiveString),
          keepAliveDuration: S.optional(S.Number),
          cleanSession: S.optional(S.Boolean),
          sessionExpiry: S.optional(S.Number),
          clientId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetThingConnectivityDataResponse",
      });
  }
}
function __c56(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ruleName: S.String.pipe(T.HttpLabel("ruleName")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/rules/{ruleName}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetTopicRuleRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ruleName: S.optional(S.String),
          sql: S.optional(S.String),
          description: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          actions: S.optional(ActionList),
          ruleDisabled: S.optional(S.Boolean),
          awsIotSqlVersion: S.optional(S.String),
          errorAction: S.optional(Action),
        }),
      ).annotate({ identifier: "TopicRule" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ruleArn: S.optional(S.String), rule: S.optional(TopicRule) }),
      ).annotate({ identifier: "GetTopicRuleResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ arn: S.String.pipe(T.HttpLabel("arn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/destinations/{arn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTopicRuleDestinationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ verbose: S.optional(S.Boolean).pipe(T.HttpQuery("verbose")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/v2LoggingOptions" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetV2LoggingOptionsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          eventType: S.String,
          logLevel: S.optional(LogLevel),
          logDestination: S.optional(S.String),
        }),
      ).annotate({ identifier: "LogEventConfiguration" });
    case 6:
      return S.Array(LogEventConfiguration);
    case 7:
      return S.suspend(() =>
        S.Struct({
          roleArn: S.optional(S.String),
          defaultLogLevel: S.optional(LogLevel),
          disableAllLogs: S.optional(S.Boolean),
          eventConfigurations: S.optional(LogEventConfigurations),
        }),
      ).annotate({
        identifier: "GetV2LoggingOptionsResponse",
      });
  }
}
function __c57(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          thingName: S.optional(S.String).pipe(T.HttpQuery("thingName")),
          securityProfileName: S.optional(S.String).pipe(T.HttpQuery("securityProfileName")),
          behaviorCriteriaType: S.optional(BehaviorCriteriaType).pipe(
            T.HttpQuery("behaviorCriteriaType"),
          ),
          listSuppressedAlerts: S.optional(S.Boolean).pipe(T.HttpQuery("listSuppressedAlerts")),
          verificationState: S.optional(VerificationState).pipe(T.HttpQuery("verificationState")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/active-violations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListActiveViolationsRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ confidenceLevel: S.optional(ConfidenceLevel) })).annotate({
        identifier: "ViolationEventAdditionalInfo",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          violationId: S.optional(S.String),
          thingName: S.optional(S.String),
          securityProfileName: S.optional(S.String),
          behavior: S.optional(Behavior),
          lastViolationValue: S.optional(MetricValue),
          violationEventAdditionalInfo: S.optional(ViolationEventAdditionalInfo),
          verificationState: S.optional(VerificationState),
          verificationStateDescription: S.optional(S.String),
          lastViolationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          violationStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ActiveViolation" });
    case 3:
      return S.Array(ActiveViolation);
    case 4:
      return S.suspend(() =>
        S.Struct({
          activeViolations: S.optional(ActiveViolations),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListActiveViolationsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          target: S.String.pipe(T.HttpLabel("target")),
          recursive: S.optional(S.Boolean).pipe(T.HttpQuery("recursive")),
          marker: S.optional(S.String).pipe(T.HttpQuery("marker")),
          pageSize: S.optional(S.Number).pipe(T.HttpQuery("pageSize")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/attached-policies/{target}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAttachedPoliciesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ policyName: S.optional(S.String), policyArn: S.optional(S.String) }),
      ).annotate({ identifier: "Policy" });
    case 7:
      return S.Array(Policy);
  }
}
function __c58(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ policies: S.optional(Policies), nextMarker: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAttachedPoliciesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          taskId: S.optional(S.String),
          checkName: S.optional(S.String),
          resourceIdentifier: S.optional(ResourceIdentifier),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          listSuppressedFindings: S.optional(S.Boolean),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/audit/findings" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListAuditFindingsRequest" });
    case 2:
      return S.Array(AuditFinding);
    case 3:
      return S.suspend(() =>
        S.Struct({ findings: S.optional(AuditFindings), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAuditFindingsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          taskId: S.String.pipe(T.HttpQuery("taskId")),
          actionStatus: S.optional(AuditMitigationActionsExecutionStatus).pipe(
            T.HttpQuery("actionStatus"),
          ),
          findingId: S.String.pipe(T.HttpQuery("findingId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/audit/mitigationactions/executions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAuditMitigationActionsExecutionsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          taskId: S.optional(S.String),
          findingId: S.optional(S.String),
          actionName: S.optional(S.String),
          actionId: S.optional(S.String),
          status: S.optional(AuditMitigationActionsExecutionStatus),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          errorCode: S.optional(S.String),
          message: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AuditMitigationActionExecutionMetadata",
      });
    case 6:
      return S.Array(AuditMitigationActionExecutionMetadata);
    case 7:
      return S.suspend(() =>
        S.Struct({
          actionsExecutions: S.optional(AuditMitigationActionExecutionMetadataList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAuditMitigationActionsExecutionsResponse",
      });
  }
}
function __c59(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          auditTaskId: S.optional(S.String).pipe(T.HttpQuery("auditTaskId")),
          findingId: S.optional(S.String).pipe(T.HttpQuery("findingId")),
          taskStatus: S.optional(AuditMitigationActionsTaskStatus).pipe(T.HttpQuery("taskStatus")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          startTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("startTime")),
          endTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("endTime")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/audit/mitigationactions/tasks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAuditMitigationActionsTasksRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          taskId: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          taskStatus: S.optional(AuditMitigationActionsTaskStatus),
        }),
      ).annotate({
        identifier: "AuditMitigationActionsTaskMetadata",
      });
    case 2:
      return S.Array(AuditMitigationActionsTaskMetadata);
    case 3:
      return S.suspend(() =>
        S.Struct({
          tasks: S.optional(AuditMitigationActionsTaskMetadataList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAuditMitigationActionsTasksResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          checkName: S.optional(S.String),
          resourceIdentifier: S.optional(ResourceIdentifier),
          ascendingOrder: S.optional(S.Boolean),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/audit/suppressions/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAuditSuppressionsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          checkName: S.String,
          resourceIdentifier: ResourceIdentifier,
          expirationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          suppressIndefinitely: S.optional(S.Boolean),
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "AuditSuppression" });
    case 6:
      return S.Array(AuditSuppression);
    case 7:
      return S.suspend(() =>
        S.Struct({
          suppressions: S.optional(AuditSuppressionList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAuditSuppressionsResponse",
      });
  }
}
function __c60(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          startTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("startTime")),
          endTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("endTime")),
          taskType: S.optional(AuditTaskType).pipe(T.HttpQuery("taskType")),
          taskStatus: S.optional(AuditTaskStatus).pipe(T.HttpQuery("taskStatus")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/audit/tasks" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListAuditTasksRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          taskId: S.optional(S.String),
          taskStatus: S.optional(AuditTaskStatus),
          taskType: S.optional(AuditTaskType),
        }),
      ).annotate({ identifier: "AuditTaskMetadata" });
    case 2:
      return S.Array(AuditTaskMetadata);
    case 3:
      return S.suspend(() =>
        S.Struct({ tasks: S.optional(AuditTaskMetadataList), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAuditTasksResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          pageSize: S.optional(S.Number).pipe(T.HttpQuery("pageSize")),
          marker: S.optional(S.String).pipe(T.HttpQuery("marker")),
          ascendingOrder: S.optional(S.Boolean).pipe(T.HttpQuery("isAscendingOrder")),
          status: S.optional(AuthorizerStatus).pipe(T.HttpQuery("status")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/authorizers" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListAuthorizersRequest" });
    case 5:
      return S.Array(AuthorizerSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({ authorizers: S.optional(Authorizers), nextMarker: S.optional(S.String) }),
      ).annotate({ identifier: "ListAuthorizersResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          namePrefixFilter: S.optional(S.String).pipe(T.HttpQuery("namePrefixFilter")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/billing-groups" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListBillingGroupsRequest" });
  }
}
function __c61(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          billingGroups: S.optional(BillingGroupNameAndArnList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListBillingGroupsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          pageSize: S.optional(S.Number).pipe(T.HttpQuery("pageSize")),
          marker: S.optional(S.String).pipe(T.HttpQuery("marker")),
          ascendingOrder: S.optional(S.Boolean).pipe(T.HttpQuery("isAscendingOrder")),
          templateName: S.optional(S.String).pipe(T.HttpQuery("templateName")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/cacertificates" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListCACertificatesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          certificateArn: S.optional(S.String),
          certificateId: S.optional(S.String),
          status: S.optional(CACertificateStatus),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "CACertificate" });
    case 3:
      return S.Array(CACertificate);
    case 4:
      return S.suspend(() =>
        S.Struct({ certificates: S.optional(CACertificates), nextMarker: S.optional(S.String) }),
      ).annotate({
        identifier: "ListCACertificatesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          ascendingOrder: S.optional(S.Boolean).pipe(T.HttpQuery("isAscendingOrder")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/certificate-providers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCertificateProvidersRequest",
      });
    case 6:
      return S.Array(CertificateProviderSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({
          certificateProviders: S.optional(CertificateProviders),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCertificateProvidersResponse",
      });
  }
}
function __c62(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          pageSize: S.optional(S.Number).pipe(T.HttpQuery("pageSize")),
          marker: S.optional(S.String).pipe(T.HttpQuery("marker")),
          ascendingOrder: S.optional(S.Boolean).pipe(T.HttpQuery("isAscendingOrder")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/certificates" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListCertificatesRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          certificateArn: S.optional(S.String),
          certificateId: S.optional(S.String),
          status: S.optional(CertificateStatus),
          certificateMode: S.optional(CertificateMode),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Certificate" });
    case 2:
      return S.Array(Certificate);
    case 3:
      return S.suspend(() =>
        S.Struct({ certificates: S.optional(Certificates), nextMarker: S.optional(S.String) }),
      ).annotate({ identifier: "ListCertificatesResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          caCertificateId: S.String.pipe(T.HttpLabel("caCertificateId")),
          pageSize: S.optional(S.Number).pipe(T.HttpQuery("pageSize")),
          marker: S.optional(S.String).pipe(T.HttpQuery("marker")),
          ascendingOrder: S.optional(S.Boolean).pipe(T.HttpQuery("isAscendingOrder")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/certificates-by-ca/{caCertificateId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCertificatesByCARequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ certificates: S.optional(Certificates), nextMarker: S.optional(S.String) }),
      ).annotate({
        identifier: "ListCertificatesByCAResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ after: S.optional(S.String), before: S.optional(S.String) }),
      ).annotate({ identifier: "TimeFilter" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          namespace: S.optional(CommandNamespace),
          status: S.optional(CommandExecutionStatus),
          sortOrder: S.optional(SortOrder),
          startedTimeFilter: S.optional(TimeFilter),
          completedTimeFilter: S.optional(TimeFilter),
          targetArn: S.optional(S.String),
          commandArn: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/command-executions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCommandExecutionsRequest",
      });
  }
}
function __c63(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          commandArn: S.optional(S.String),
          executionId: S.optional(S.String),
          targetArn: S.optional(S.String),
          status: S.optional(CommandExecutionStatus),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          startedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          completedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "CommandExecutionSummary" });
    case 1:
      return S.Array(CommandExecutionSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({
          commandExecutions: S.optional(CommandExecutionSummaryList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCommandExecutionsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          namespace: S.optional(CommandNamespace).pipe(T.HttpQuery("namespace")),
          commandParameterName: S.optional(S.String).pipe(T.HttpQuery("commandParameterName")),
          sortOrder: S.optional(SortOrder).pipe(T.HttpQuery("sortOrder")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/commands" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListCommandsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          commandArn: S.optional(S.String),
          commandId: S.optional(S.String),
          displayName: S.optional(S.String),
          deprecated: S.optional(S.Boolean),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          pendingDeletion: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "CommandSummary" });
    case 5:
      return S.Array(CommandSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({ commands: S.optional(CommandSummaryList), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListCommandsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/custom-metrics" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListCustomMetricsRequest" });
  }
}
function __c64(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ metricNames: S.optional(MetricNames), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListCustomMetricsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          taskId: S.optional(S.String).pipe(T.HttpQuery("taskId")),
          violationId: S.optional(S.String).pipe(T.HttpQuery("violationId")),
          thingName: S.optional(S.String).pipe(T.HttpQuery("thingName")),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("startTime"),
          ),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("endTime"),
          ),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/detect/mitigationactions/executions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDetectMitigationActionsExecutionsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          taskId: S.optional(S.String),
          violationId: S.optional(S.String),
          actionName: S.optional(S.String),
          thingName: S.optional(S.String),
          executionStartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          executionEndDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(DetectMitigationActionExecutionStatus),
          errorCode: S.optional(S.String),
          message: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DetectMitigationActionExecution",
      });
    case 3:
      return S.Array(DetectMitigationActionExecution);
    case 4:
      return S.suspend(() =>
        S.Struct({
          actionsExecutions: S.optional(DetectMitigationActionExecutionList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDetectMitigationActionsExecutionsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          startTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("startTime")),
          endTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("endTime")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/detect/mitigationactions/tasks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDetectMitigationActionsTasksRequest",
      });
    case 6:
      return S.Array(DetectMitigationActionsTaskSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({
          tasks: S.optional(DetectMitigationActionsTaskSummaryList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDetectMitigationActionsTasksResponse",
      });
  }
}
function __c65(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/dimensions" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListDimensionsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ dimensionNames: S.optional(DimensionNames), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListDimensionsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          marker: S.optional(S.String).pipe(T.HttpQuery("marker")),
          pageSize: S.optional(S.Number).pipe(T.HttpQuery("pageSize")),
          serviceType: S.optional(ServiceType).pipe(T.HttpQuery("serviceType")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domainConfigurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDomainConfigurationsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainConfigurationName: S.optional(S.String),
          domainConfigurationArn: S.optional(S.String),
          serviceType: S.optional(ServiceType),
        }),
      ).annotate({
        identifier: "DomainConfigurationSummary",
      });
    case 4:
      return S.Array(DomainConfigurationSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainConfigurations: S.optional(DomainConfigurations),
          nextMarker: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDomainConfigurationsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/fleet-metrics" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListFleetMetricsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ metricName: S.optional(S.String), metricArn: S.optional(S.String) }),
      ).annotate({ identifier: "FleetMetricNameAndArn" });
  }
}
function __c66(j: number): any {
  switch (j) {
    case 0:
      return S.Array(FleetMetricNameAndArn);
    case 1:
      return S.suspend(() =>
        S.Struct({
          fleetMetrics: S.optional(FleetMetricNameAndArnList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListFleetMetricsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/indices" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListIndicesRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ indexNames: S.optional(IndexNamesList), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListIndicesResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          status: S.optional(JobExecutionStatus).pipe(T.HttpQuery("status")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/jobs/{jobId}/things" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListJobExecutionsForJobRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(JobExecutionStatus),
          queuedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          startedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          executionNumber: S.optional(S.Number),
          retryAttempt: S.optional(S.Number),
        }),
      ).annotate({ identifier: "JobExecutionSummary" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          thingArn: S.optional(S.String),
          jobExecutionSummary: S.optional(JobExecutionSummary),
        }),
      ).annotate({
        identifier: "JobExecutionSummaryForJob",
      });
    case 7:
      return S.Array(JobExecutionSummaryForJob);
  }
}
function __c67(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          executionSummaries: S.optional(JobExecutionSummaryForJobList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListJobExecutionsForJobResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          thingName: S.String.pipe(T.HttpLabel("thingName")),
          status: S.optional(JobExecutionStatus).pipe(T.HttpQuery("status")),
          namespaceId: S.optional(S.String).pipe(T.HttpQuery("namespaceId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          jobId: S.optional(S.String).pipe(T.HttpQuery("jobId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/things/{thingName}/jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListJobExecutionsForThingRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          jobId: S.optional(S.String),
          jobExecutionSummary: S.optional(JobExecutionSummary),
        }),
      ).annotate({
        identifier: "JobExecutionSummaryForThing",
      });
    case 3:
      return S.Array(JobExecutionSummaryForThing);
    case 4:
      return S.suspend(() =>
        S.Struct({
          executionSummaries: S.optional(JobExecutionSummaryForThingList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListJobExecutionsForThingResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(JobStatus).pipe(T.HttpQuery("status")),
          targetSelection: S.optional(TargetSelection).pipe(T.HttpQuery("targetSelection")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          thingGroupName: S.optional(S.String).pipe(T.HttpQuery("thingGroupName")),
          thingGroupId: S.optional(S.String).pipe(T.HttpQuery("thingGroupId")),
          namespaceId: S.optional(S.String).pipe(T.HttpQuery("namespaceId")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/jobs" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListJobsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          jobArn: S.optional(S.String),
          jobId: S.optional(S.String),
          thingGroupId: S.optional(S.String),
          targetSelection: S.optional(TargetSelection),
          status: S.optional(JobStatus),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          completedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          isConcurrent: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "JobSummary" });
    case 7:
      return S.Array(JobSummary);
  }
}
function __c68(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ jobs: S.optional(JobSummaryList), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListJobsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/job-templates" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListJobTemplatesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          jobTemplateArn: S.optional(S.String),
          jobTemplateId: S.optional(S.String),
          description: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "JobTemplateSummary" });
    case 3:
      return S.Array(JobTemplateSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          jobTemplates: S.optional(JobTemplateSummaryList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListJobTemplatesResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          templateName: S.optional(S.String).pipe(T.HttpQuery("templateName")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/managed-job-templates" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListManagedJobTemplatesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          templateArn: S.optional(S.String),
          templateName: S.optional(S.String),
          description: S.optional(S.String),
          environments: S.optional(Environments),
          templateVersion: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ManagedJobTemplateSummary",
      });
    case 7:
      return S.Array(ManagedJobTemplateSummary);
  }
}
function __c69(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          managedJobTemplates: S.optional(ManagedJobTemplatesSummaryList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListManagedJobTemplatesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          thingName: S.String.pipe(T.HttpQuery("thingName")),
          metricName: S.String.pipe(T.HttpQuery("metricName")),
          dimensionName: S.optional(S.String).pipe(T.HttpQuery("dimensionName")),
          dimensionValueOperator: S.optional(DimensionValueOperator).pipe(
            T.HttpQuery("dimensionValueOperator"),
          ),
          startTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("startTime")),
          endTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("endTime")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/metric-values" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListMetricValuesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          timestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          value: S.optional(MetricValue),
        }),
      ).annotate({ identifier: "MetricDatum" });
    case 3:
      return S.Array(MetricDatum);
    case 4:
      return S.suspend(() =>
        S.Struct({ metricDatumList: S.optional(MetricDatumList), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListMetricValuesResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          actionType: S.optional(MitigationActionType).pipe(T.HttpQuery("actionType")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/mitigationactions/actions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListMitigationActionsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          actionName: S.optional(S.String),
          actionArn: S.optional(S.String),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "MitigationActionIdentifier",
      });
    case 7:
      return S.Array(MitigationActionIdentifier);
  }
}
function __c70(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          actionIdentifiers: S.optional(MitigationActionIdentifierList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListMitigationActionsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          otaUpdateStatus: S.optional(OTAUpdateStatus).pipe(T.HttpQuery("otaUpdateStatus")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/otaUpdates" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListOTAUpdatesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          otaUpdateId: S.optional(S.String),
          otaUpdateArn: S.optional(S.String),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "OTAUpdateSummary" });
    case 3:
      return S.Array(OTAUpdateSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({ otaUpdates: S.optional(OTAUpdatesSummary), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListOTAUpdatesResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          pageSize: S.optional(S.Number).pipe(T.HttpQuery("pageSize")),
          marker: S.optional(S.String).pipe(T.HttpQuery("marker")),
          ascendingOrder: S.optional(S.Boolean).pipe(T.HttpQuery("isAscendingOrder")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/certificates-out-going" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListOutgoingCertificatesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          certificateArn: S.optional(S.String),
          certificateId: S.optional(S.String),
          transferredTo: S.optional(S.String),
          transferDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          transferMessage: S.optional(S.String),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "OutgoingCertificate" });
    case 7:
      return S.Array(OutgoingCertificate);
  }
}
function __c71(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          outgoingCertificates: S.optional(OutgoingCertificates),
          nextMarker: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListOutgoingCertificatesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/packages" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListPackagesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          packageName: S.optional(S.String),
          defaultVersionName: S.optional(S.String),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "PackageSummary" });
    case 3:
      return S.Array(PackageSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          packageSummaries: S.optional(PackageSummaryList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListPackagesResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          packageName: S.String.pipe(T.HttpLabel("packageName")),
          status: S.optional(PackageVersionStatus).pipe(T.HttpQuery("status")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/packages/{packageName}/versions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPackageVersionsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          packageName: S.optional(S.String),
          versionName: S.optional(S.String),
          status: S.optional(PackageVersionStatus),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "PackageVersionSummary" });
    case 7:
      return S.Array(PackageVersionSummary);
  }
}
function __c72(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          packageVersionSummaries: S.optional(PackageVersionSummaryList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListPackageVersionsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          marker: S.optional(S.String).pipe(T.HttpQuery("marker")),
          pageSize: S.optional(S.Number).pipe(T.HttpQuery("pageSize")),
          ascendingOrder: S.optional(S.Boolean).pipe(T.HttpQuery("isAscendingOrder")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/policies" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListPoliciesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ policies: S.optional(Policies), nextMarker: S.optional(S.String) }),
      ).annotate({ identifier: "ListPoliciesResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          policyName: S.String.pipe(T.HttpHeader("x-amzn-iot-policy")),
          marker: S.optional(S.String).pipe(T.HttpQuery("marker")),
          pageSize: S.optional(S.Number).pipe(T.HttpQuery("pageSize")),
          ascendingOrder: S.optional(S.Boolean).pipe(T.HttpQuery("isAscendingOrder")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/policy-principals" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListPolicyPrincipalsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ principals: S.optional(Principals), nextMarker: S.optional(S.String) }),
      ).annotate({
        identifier: "ListPolicyPrincipalsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ policyName: S.String.pipe(T.HttpLabel("policyName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/policies/{policyName}/version" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPolicyVersionsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          versionId: S.optional(S.String),
          isDefaultVersion: S.optional(S.Boolean),
          createDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "PolicyVersion" });
    case 7:
      return S.Array(PolicyVersion);
  }
}
function __c73(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ policyVersions: S.optional(PolicyVersions) })).annotate({
        identifier: "ListPolicyVersionsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          principal: S.String.pipe(T.HttpHeader("x-amzn-iot-principal")),
          marker: S.optional(S.String).pipe(T.HttpQuery("marker")),
          pageSize: S.optional(S.Number).pipe(T.HttpQuery("pageSize")),
          ascendingOrder: S.optional(S.Boolean).pipe(T.HttpQuery("isAscendingOrder")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/principal-policies" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPrincipalPoliciesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          principal: S.String.pipe(T.HttpHeader("x-amzn-principal")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/principals/things" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListPrincipalThingsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ things: S.optional(ThingNameList), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListPrincipalThingsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          principal: S.String.pipe(T.HttpHeader("x-amzn-principal")),
          thingPrincipalType: S.optional(ThingPrincipalType).pipe(
            T.HttpQuery("thingPrincipalType"),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/principals/things-v2" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPrincipalThingsV2Request",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ thingName: S.String, thingPrincipalType: S.optional(ThingPrincipalType) }),
      ).annotate({ identifier: "PrincipalThingObject" });
    case 6:
      return S.Array(PrincipalThingObject);
    case 7:
      return S.suspend(() =>
        S.Struct({
          principalThingObjects: S.optional(PrincipalThingObjects),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListPrincipalThingsV2Response",
      });
  }
}
function __c74(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/provisioning-templates" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListProvisioningTemplatesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          templateArn: S.optional(S.String),
          templateName: S.optional(S.String),
          description: S.optional(S.String),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          enabled: S.optional(S.Boolean),
          type: S.optional(TemplateType),
        }),
      ).annotate({
        identifier: "ProvisioningTemplateSummary",
      });
    case 2:
      return S.Array(ProvisioningTemplateSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({
          templates: S.optional(ProvisioningTemplateListing),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListProvisioningTemplatesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          templateName: S.String.pipe(T.HttpLabel("templateName")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/provisioning-templates/{templateName}/versions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListProvisioningTemplateVersionsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          versionId: S.optional(S.Number),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          isDefaultVersion: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "ProvisioningTemplateVersionSummary",
      });
    case 6:
      return S.Array(ProvisioningTemplateVersionSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({
          versions: S.optional(ProvisioningTemplateVersionListing),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListProvisioningTemplateVersionsResponse",
      });
  }
}
function __c75(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          findingId: S.String.pipe(T.HttpQuery("findingId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/audit/relatedResources" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListRelatedResourcesForAuditFindingRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          relatedResources: S.optional(RelatedResources),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListRelatedResourcesForAuditFindingResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          pageSize: S.optional(S.Number).pipe(T.HttpQuery("pageSize")),
          marker: S.optional(S.String).pipe(T.HttpQuery("marker")),
          ascendingOrder: S.optional(S.Boolean).pipe(T.HttpQuery("isAscendingOrder")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/role-aliases" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListRoleAliasesRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ roleAliases: S.optional(RoleAliases), nextMarker: S.optional(S.String) }),
      ).annotate({ identifier: "ListRoleAliasesResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          packageName: S.String.pipe(T.HttpLabel("packageName")),
          versionName: S.String.pipe(T.HttpLabel("versionName")),
          validationResult: S.optional(SbomValidationResult).pipe(T.HttpQuery("validationResult")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/packages/{packageName}/versions/{versionName}/sbom-validation-results",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSbomValidationResultsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          fileName: S.optional(S.String),
          validationResult: S.optional(SbomValidationResult),
          errorCode: S.optional(SbomValidationErrorCode),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SbomValidationResultSummary",
      });
    case 6:
      return S.Array(SbomValidationResultSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({
          validationResultSummaries: S.optional(SbomValidationResultSummaryList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListSbomValidationResultsResponse",
      });
  }
}
function __c76(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/audit/scheduledaudits" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListScheduledAuditsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          scheduledAuditName: S.optional(S.String),
          scheduledAuditArn: S.optional(S.String),
          frequency: S.optional(AuditFrequency),
          dayOfMonth: S.optional(S.String),
          dayOfWeek: S.optional(DayOfWeek),
        }),
      ).annotate({ identifier: "ScheduledAuditMetadata" });
    case 2:
      return S.Array(ScheduledAuditMetadata);
    case 3:
      return S.suspend(() =>
        S.Struct({
          scheduledAudits: S.optional(ScheduledAuditMetadataList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListScheduledAuditsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          dimensionName: S.optional(S.String).pipe(T.HttpQuery("dimensionName")),
          metricName: S.optional(S.String).pipe(T.HttpQuery("metricName")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/security-profiles" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListSecurityProfilesRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ name: S.String, arn: S.String })).annotate({
        identifier: "SecurityProfileIdentifier",
      });
    case 6:
      return S.Array(SecurityProfileIdentifier);
    case 7:
      return S.suspend(() =>
        S.Struct({
          securityProfileIdentifiers: S.optional(SecurityProfileIdentifiers),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListSecurityProfilesResponse",
      });
  }
}
function __c77(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          recursive: S.optional(S.Boolean).pipe(T.HttpQuery("recursive")),
          securityProfileTargetArn: S.String.pipe(T.HttpQuery("securityProfileTargetArn")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/security-profiles-for-target" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSecurityProfilesForTargetRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ arn: S.String })).annotate({
        identifier: "SecurityProfileTarget",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          securityProfileIdentifier: S.optional(SecurityProfileIdentifier),
          target: S.optional(SecurityProfileTarget),
        }),
      ).annotate({
        identifier: "SecurityProfileTargetMapping",
      });
    case 3:
      return S.Array(SecurityProfileTargetMapping);
    case 4:
      return S.suspend(() =>
        S.Struct({
          securityProfileTargetMappings: S.optional(SecurityProfileTargetMappings),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListSecurityProfilesForTargetResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          ascendingOrder: S.optional(S.Boolean).pipe(T.HttpQuery("isAscendingOrder")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/streams" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListStreamsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          streamId: S.optional(S.String),
          streamArn: S.optional(S.String),
          streamVersion: S.optional(S.Number),
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "StreamSummary" });
    case 7:
      return S.Array(StreamSummary);
  }
}
function __c78(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ streams: S.optional(StreamsSummary), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListStreamsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpQuery("resourceArn")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/tags" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ tags: S.optional(TagList), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          policyName: S.String.pipe(T.HttpLabel("policyName")),
          marker: S.optional(S.String).pipe(T.HttpQuery("marker")),
          pageSize: S.optional(S.Number).pipe(T.HttpQuery("pageSize")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/policy-targets/{policyName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTargetsForPolicyRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ targets: S.optional(PolicyTargets), nextMarker: S.optional(S.String) }),
      ).annotate({
        identifier: "ListTargetsForPolicyResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          securityProfileName: S.String.pipe(T.HttpLabel("securityProfileName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/security-profiles/{securityProfileName}/targets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTargetsForSecurityProfileRequest",
      });
    case 6:
      return S.Array(SecurityProfileTarget);
    case 7:
      return S.suspend(() =>
        S.Struct({
          securityProfileTargets: S.optional(SecurityProfileTargets),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListTargetsForSecurityProfileResponse",
      });
  }
}
function __c79(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          parentGroup: S.optional(S.String).pipe(T.HttpQuery("parentGroup")),
          namePrefixFilter: S.optional(S.String).pipe(T.HttpQuery("namePrefixFilter")),
          recursive: S.optional(S.Boolean).pipe(T.HttpQuery("recursive")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/thing-groups" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListThingGroupsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          thingGroups: S.optional(ThingGroupNameAndArnList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListThingGroupsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          thingName: S.String.pipe(T.HttpLabel("thingName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/things/{thingName}/thing-groups" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListThingGroupsForThingRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          thingGroups: S.optional(ThingGroupNameAndArnList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListThingGroupsForThingResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          thingName: S.String.pipe(T.HttpLabel("thingName")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/things/{thingName}/principals" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListThingPrincipalsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ principals: S.optional(Principals), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListThingPrincipalsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          thingName: S.String.pipe(T.HttpLabel("thingName")),
          thingPrincipalType: S.optional(ThingPrincipalType).pipe(
            T.HttpQuery("thingPrincipalType"),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/things/{thingName}/principals-v2" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListThingPrincipalsV2Request",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ principal: S.String, thingPrincipalType: S.optional(ThingPrincipalType) }),
      ).annotate({ identifier: "ThingPrincipalObject" });
  }
}
function __c80(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ThingPrincipalObject);
    case 1:
      return S.suspend(() =>
        S.Struct({
          thingPrincipalObjects: S.optional(ThingPrincipalObjects),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListThingPrincipalsV2Response",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          taskId: S.String.pipe(T.HttpLabel("taskId")),
          reportType: ReportType.pipe(T.HttpQuery("reportType")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/thing-registration-tasks/{taskId}/reports" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListThingRegistrationTaskReportsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          resourceLinks: S.optional(S3FileUrlList),
          reportType: S.optional(ReportType),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListThingRegistrationTaskReportsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          status: S.optional(Status).pipe(T.HttpQuery("status")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/thing-registration-tasks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListThingRegistrationTasksRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ taskIds: S.optional(TaskIdList), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListThingRegistrationTasksResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          attributeName: S.optional(S.String).pipe(T.HttpQuery("attributeName")),
          attributeValue: S.optional(S.String).pipe(T.HttpQuery("attributeValue")),
          thingTypeName: S.optional(S.String).pipe(T.HttpQuery("thingTypeName")),
          usePrefixAttributeValue: S.optional(S.Boolean).pipe(
            T.HttpQuery("usePrefixAttributeValue"),
          ),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/things" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListThingsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          thingName: S.optional(S.String),
          thingTypeName: S.optional(S.String),
          thingArn: S.optional(S.String),
          attributes: S.optional(Attributes),
          version: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ThingAttribute" });
  }
}
function __c81(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ThingAttribute);
    case 1:
      return S.suspend(() =>
        S.Struct({ things: S.optional(ThingAttributeList), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListThingsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          billingGroupName: S.String.pipe(T.HttpLabel("billingGroupName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/billing-groups/{billingGroupName}/things" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListThingsInBillingGroupRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          thingGroupName: S.String.pipe(T.HttpLabel("thingGroupName")),
          recursive: S.optional(S.Boolean).pipe(T.HttpQuery("recursive")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/thing-groups/{thingGroupName}/things" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListThingsInThingGroupRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          thingTypeName: S.optional(S.String).pipe(T.HttpQuery("thingTypeName")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/thing-types" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListThingTypesRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          thingTypeName: S.optional(S.String),
          thingTypeArn: S.optional(S.String),
          thingTypeProperties: S.optional(ThingTypeProperties),
          thingTypeMetadata: S.optional(ThingTypeMetadata),
        }),
      ).annotate({ identifier: "ThingTypeDefinition" });
    case 6:
      return S.Array(ThingTypeDefinition);
    case 7:
      return S.suspend(() =>
        S.Struct({ thingTypes: S.optional(ThingTypeList), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListThingTypesResponse" });
  }
}
function __c82(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/destinations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTopicRuleDestinationsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          status: S.optional(TopicRuleDestinationStatus),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          statusReason: S.optional(S.String),
          httpUrlSummary: S.optional(HttpUrlDestinationSummary),
          vpcDestinationSummary: S.optional(VpcDestinationSummary),
          influxDBSummary: S.optional(InfluxDBDestinationSummary),
        }),
      ).annotate({
        identifier: "TopicRuleDestinationSummary",
      });
    case 2:
      return S.Array(TopicRuleDestinationSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({
          destinationSummaries: S.optional(TopicRuleDestinationSummaries),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListTopicRuleDestinationsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          topic: S.optional(S.String).pipe(T.HttpQuery("topic")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          ruleDisabled: S.optional(S.Boolean).pipe(T.HttpQuery("ruleDisabled")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/rules" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListTopicRulesRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ruleArn: S.optional(S.String),
          ruleName: S.optional(S.String),
          topicPattern: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ruleDisabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "TopicRuleListItem" });
    case 6:
      return S.Array(TopicRuleListItem);
    case 7:
      return S.suspend(() =>
        S.Struct({ rules: S.optional(TopicRuleList), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListTopicRulesResponse" });
  }
}
function __c83(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          targetType: S.optional(LogTargetType).pipe(T.HttpQuery("targetType")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/v2LoggingLevel" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListV2LoggingLevelsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ targetType: LogTargetType, targetName: S.optional(S.String) }),
      ).annotate({ identifier: "LogTarget" });
    case 2:
      return S.suspend(() =>
        S.Struct({ logTarget: S.optional(LogTarget), logLevel: S.optional(LogLevel) }),
      ).annotate({ identifier: "LogTargetConfiguration" });
    case 3:
      return S.Array(LogTargetConfiguration);
    case 4:
      return S.suspend(() =>
        S.Struct({
          logTargetConfigurations: S.optional(LogTargetConfigurations),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListV2LoggingLevelsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          startTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("startTime")),
          endTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")).pipe(T.HttpQuery("endTime")),
          thingName: S.optional(S.String).pipe(T.HttpQuery("thingName")),
          securityProfileName: S.optional(S.String).pipe(T.HttpQuery("securityProfileName")),
          behaviorCriteriaType: S.optional(BehaviorCriteriaType).pipe(
            T.HttpQuery("behaviorCriteriaType"),
          ),
          listSuppressedAlerts: S.optional(S.Boolean).pipe(T.HttpQuery("listSuppressedAlerts")),
          verificationState: S.optional(VerificationState).pipe(T.HttpQuery("verificationState")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/violation-events" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListViolationEventsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          violationId: S.optional(S.String),
          thingName: S.optional(S.String),
          securityProfileName: S.optional(S.String),
          behavior: S.optional(Behavior),
          metricValue: S.optional(MetricValue),
          violationEventAdditionalInfo: S.optional(ViolationEventAdditionalInfo),
          violationEventType: S.optional(ViolationEventType),
          verificationState: S.optional(VerificationState),
          verificationStateDescription: S.optional(S.String),
          violationEventTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ViolationEvent" });
    case 7:
      return S.Array(ViolationEvent);
  }
}
function __c84(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ violationEvents: S.optional(ViolationEvents), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListViolationEventsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          violationId: S.String.pipe(T.HttpLabel("violationId")),
          verificationState: VerificationState,
          verificationStateDescription: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/violations/verification-state/{violationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutVerificationStateOnViolationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          caCertificate: S.String,
          verificationCertificate: S.optional(S.String),
          setAsActive: S.optional(S.Boolean).pipe(T.HttpQuery("setAsActive")),
          allowAutoRegistration: S.optional(S.Boolean).pipe(T.HttpQuery("allowAutoRegistration")),
          registrationConfig: S.optional(RegistrationConfig),
          tags: S.optional(TagList),
          certificateMode: S.optional(CertificateMode),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/cacertificate" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RegisterCACertificateRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ certificateArn: S.optional(S.String), certificateId: S.optional(S.String) }),
      ).annotate({
        identifier: "RegisterCACertificateResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          certificatePem: S.String,
          caCertificatePem: S.optional(S.String),
          setAsActive: S.optional(S.Boolean).pipe(T.HttpQuery("setAsActive")),
          status: S.optional(CertificateStatus),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/certificate/register" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RegisterCertificateRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ certificatePem: S.String, status: S.optional(CertificateStatus) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/certificate/register-no-ca" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RegisterCertificateWithoutCARequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ templateBody: S.String, parameters: S.optional(Parameters) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/things" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "RegisterThingRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ certificatePem: S.optional(S.String), resourceArns: S.optional(ResourceArns) }),
      ).annotate({ identifier: "RegisterThingResponse" });
  }
}
function __c85(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          certificateId: S.String.pipe(T.HttpLabel("certificateId")),
          rejectReason: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/reject-certificate-transfer/{certificateId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RejectCertificateTransferRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          billingGroupName: S.optional(S.String),
          billingGroupArn: S.optional(S.String),
          thingName: S.optional(S.String),
          thingArn: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/billing-groups/removeThingFromBillingGroup" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RemoveThingFromBillingGroupRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          thingGroupName: S.optional(S.String),
          thingGroupArn: S.optional(S.String),
          thingName: S.optional(S.String),
          thingArn: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/thing-groups/removeThingFromThingGroup" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RemoveThingFromThingGroupRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ruleName: S.String.pipe(T.HttpLabel("ruleName")),
          topicRulePayload: TopicRulePayload.pipe(T.HttpPayload()).annotate({
            identifier: "TopicRulePayload",
          }),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/rules/{ruleName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ReplaceTopicRuleRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          indexName: S.optional(S.String),
          queryString: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          queryVersion: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/indices/search" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "SearchIndexRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          connected: S.optional(S.Boolean),
          timestamp: S.optional(S.Number),
          disconnectReason: S.optional(S.String),
          keepAliveDuration: S.optional(S.Number),
          cleanSession: S.optional(S.Boolean),
          sessionExpiry: S.optional(S.Number),
          clientId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ThingConnectivity" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          thingName: S.optional(S.String),
          thingId: S.optional(S.String),
          thingTypeName: S.optional(S.String),
          thingGroupNames: S.optional(ThingGroupNameList),
          attributes: S.optional(Attributes),
          shadow: S.optional(S.String),
          deviceDefender: S.optional(S.String),
          connectivity: S.optional(ThingConnectivity),
        }),
      ).annotate({ identifier: "ThingDocument" });
    case 7:
      return S.Array(ThingDocument);
  }
}
function __c86(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          thingGroupName: S.optional(S.String),
          thingGroupId: S.optional(S.String),
          thingGroupDescription: S.optional(S.String),
          attributes: S.optional(Attributes),
          parentGroupNames: S.optional(ThingGroupNameList),
        }),
      ).annotate({ identifier: "ThingGroupDocument" });
    case 1:
      return S.Array(ThingGroupDocument);
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          things: S.optional(ThingDocumentList),
          thingGroups: S.optional(ThingGroupDocumentList),
        }),
      ).annotate({ identifier: "SearchIndexResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ authorizerName: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/default-authorizer" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SetDefaultAuthorizerRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ authorizerName: S.optional(S.String), authorizerArn: S.optional(S.String) }),
      ).annotate({
        identifier: "SetDefaultAuthorizerResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          policyName: S.String.pipe(T.HttpLabel("policyName")),
          policyVersionId: S.String.pipe(T.HttpLabel("policyVersionId")),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/policies/{policyName}/version/{policyVersionId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SetDefaultPolicyVersionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ roleArn: S.String, logLevel: S.optional(LogLevel) }),
      ).annotate({ identifier: "LoggingOptionsPayload" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          loggingOptionsPayload: LoggingOptionsPayload.pipe(T.HttpPayload()).annotate({
            identifier: "LoggingOptionsPayload",
          }),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/loggingOptions" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "SetLoggingOptionsRequest" });
  }
}
function __c87(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ logTarget: LogTarget, logLevel: LogLevel }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v2LoggingLevel" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "SetV2LoggingLevelRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          roleArn: S.optional(S.String),
          defaultLogLevel: S.optional(LogLevel),
          disableAllLogs: S.optional(S.Boolean),
          eventConfigurations: S.optional(LogEventConfigurations),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v2LoggingOptions" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SetV2LoggingOptionsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          taskId: S.String.pipe(T.HttpLabel("taskId")),
          target: AuditMitigationActionsTaskTarget,
          auditCheckToActionsMapping: AuditCheckToActionsMapping,
          clientRequestToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/audit/mitigationactions/tasks/{taskId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartAuditMitigationActionsTaskRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ taskId: S.optional(S.String) })).annotate({
        identifier: "StartAuditMitigationActionsTaskResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          taskId: S.String.pipe(T.HttpLabel("taskId")),
          target: DetectMitigationActionsTaskTarget,
          actions: DetectMitigationActionsToExecuteList,
          violationEventOccurrenceRange: S.optional(ViolationEventOccurrenceRange),
          includeOnlyActiveViolations: S.optional(S.Boolean),
          includeSuppressedAlerts: S.optional(S.Boolean),
          clientRequestToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/detect/mitigationactions/tasks/{taskId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartDetectMitigationActionsTaskRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ targetCheckNames: TargetAuditCheckNames }).pipe(
          T.all(T.Http({ method: "POST", uri: "/audit/tasks" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StartOnDemandAuditTaskRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          templateBody: S.String,
          inputFileBucket: S.String,
          inputFileKey: S.String,
          roleArn: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/thing-registration-tasks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartThingRegistrationTaskRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ taskId: S.String.pipe(T.HttpLabel("taskId")) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/thing-registration-tasks/{taskId}/cancel" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StopThingRegistrationTaskRequest",
      });
  }
}
function __c88(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tags: TagList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/tags" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ actionType: S.optional(ActionType), resources: Resources }),
      ).annotate({ identifier: "AuthInfo" });
    case 2:
      return S.Array(AuthInfo);
    case 3:
      return S.suspend(() =>
        S.Struct({
          principal: S.optional(S.String),
          cognitoIdentityPoolId: S.optional(S.String),
          authInfos: AuthInfos,
          clientId: S.optional(S.String).pipe(T.HttpQuery("clientId")),
          policyNamesToAdd: S.optional(PolicyNames),
          policyNamesToSkip: S.optional(PolicyNames),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/test-authorization" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TestAuthorizationRequest" });
    case 4:
      return S.suspend(() => S.Struct({ policies: S.optional(Policies) })).annotate({
        identifier: "Allowed",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          implicitDeny: S.optional(ImplicitDeny),
          explicitDeny: S.optional(ExplicitDeny),
        }),
      ).annotate({ identifier: "Denied" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          authInfo: S.optional(AuthInfo),
          allowed: S.optional(Allowed),
          denied: S.optional(Denied),
          authDecision: S.optional(AuthDecision),
          missingContextValues: S.optional(MissingContextValues),
        }),
      ).annotate({ identifier: "AuthResult" });
    case 7:
      return S.Array(AuthResult);
  }
}
function __c89(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ authResults: S.optional(AuthResults) })).annotate({
        identifier: "TestAuthorizationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ headers: S.optional(HttpHeaders), queryString: S.optional(S.String) }),
      ).annotate({ identifier: "HttpContext" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          username: S.optional(S.String),
          password: S.optional(T.Blob),
          clientId: S.optional(S.String),
        }),
      ).annotate({ identifier: "MqttContext" });
    case 3:
      return S.suspend(() => S.Struct({ serverName: S.optional(S.String) })).annotate({
        identifier: "TlsContext",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          authorizerName: S.String.pipe(T.HttpLabel("authorizerName")),
          token: S.optional(S.String),
          tokenSignature: S.optional(S.String),
          httpContext: S.optional(HttpContext),
          mqttContext: S.optional(MqttContext),
          tlsContext: S.optional(TlsContext),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/authorizer/{authorizerName}/test" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "TestInvokeAuthorizerRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          isAuthenticated: S.optional(S.Boolean),
          principalId: S.optional(S.String),
          policyDocuments: S.optional(PolicyDocuments),
          refreshAfterInSeconds: S.optional(S.Number),
          disconnectAfterInSeconds: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "TestInvokeAuthorizerResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          certificateId: S.String.pipe(T.HttpLabel("certificateId")),
          targetAwsAccount: S.String.pipe(T.HttpQuery("targetAwsAccount")),
          transferMessage: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/transfer-certificate/{certificateId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "TransferCertificateRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ transferredCertificateArn: S.optional(S.String) }),
      ).annotate({
        identifier: "TransferCertificateResponse",
      });
  }
}
function __c90(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tagKeys: TagKeyList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/untag" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          roleArn: S.optional(S.String),
          auditNotificationTargetConfigurations: S.optional(AuditNotificationTargetConfigurations),
          auditCheckConfigurations: S.optional(AuditCheckConfigurations),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/audit/configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAccountAuditConfigurationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          checkName: S.String,
          resourceIdentifier: ResourceIdentifier,
          expirationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          suppressIndefinitely: S.optional(S.Boolean),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/audit/suppressions/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAuditSuppressionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          authorizerName: S.String.pipe(T.HttpLabel("authorizerName")),
          authorizerFunctionArn: S.optional(S.String),
          tokenKeyName: S.optional(S.String),
          tokenSigningPublicKeys: S.optional(PublicKeyMap),
          status: S.optional(AuthorizerStatus),
          enableCachingForHttp: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/authorizer/{authorizerName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateAuthorizerRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          billingGroupName: S.String.pipe(T.HttpLabel("billingGroupName")),
          billingGroupProperties: BillingGroupProperties,
          expectedVersion: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/billing-groups/{billingGroupName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateBillingGroupRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ version: S.optional(S.Number) })).annotate({
        identifier: "UpdateBillingGroupResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          certificateId: S.String.pipe(T.HttpLabel("certificateId")),
          newStatus: S.optional(CACertificateStatus).pipe(T.HttpQuery("newStatus")),
          newAutoRegistrationStatus: S.optional(AutoRegistrationStatus).pipe(
            T.HttpQuery("newAutoRegistrationStatus"),
          ),
          registrationConfig: S.optional(RegistrationConfig),
          removeAutoRegistration: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/cacertificate/{certificateId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateCACertificateRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          certificateId: S.String.pipe(T.HttpLabel("certificateId")),
          newStatus: CertificateStatus.pipe(T.HttpQuery("newStatus")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/certificates/{certificateId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateCertificateRequest" });
  }
}
function __c91(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          certificateProviderName: S.String.pipe(T.HttpLabel("certificateProviderName")),
          lambdaFunctionArn: S.optional(S.String),
          accountDefaultForOperations: S.optional(CertificateProviderAccountDefaultForOperations),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/certificate-providers/{certificateProviderName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateCertificateProviderRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          commandId: S.String.pipe(T.HttpLabel("commandId")),
          displayName: S.optional(S.String),
          description: S.optional(S.String),
          deprecated: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/commands/{commandId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateCommandRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          commandId: S.optional(S.String),
          displayName: S.optional(S.String),
          description: S.optional(S.String),
          deprecated: S.optional(S.Boolean),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "UpdateCommandResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          metricName: S.String.pipe(T.HttpLabel("metricName")),
          displayName: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/custom-metric/{metricName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateCustomMetricRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String.pipe(T.HttpLabel("name")),
          stringValues: DimensionStringValues,
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/dimensions/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateDimensionRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          arn: S.optional(S.String),
          type: S.optional(DimensionType),
          stringValues: S.optional(DimensionStringValues),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastModifiedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "UpdateDimensionResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainConfigurationName: S.String.pipe(T.HttpLabel("domainConfigurationName")),
          authorizerConfig: S.optional(AuthorizerConfig),
          domainConfigurationStatus: S.optional(DomainConfigurationStatus),
          removeAuthorizerConfig: S.optional(S.Boolean),
          tlsConfig: S.optional(TlsConfig),
          serverCertificateConfig: S.optional(ServerCertificateConfig),
          authenticationType: S.optional(AuthenticationType),
          applicationProtocol: S.optional(ApplicationProtocol),
          clientCertificateConfig: S.optional(ClientCertificateConfig),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/domainConfigurations/{domainConfigurationName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateDomainConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          thingGroupName: S.String.pipe(T.HttpLabel("thingGroupName")),
          thingGroupProperties: ThingGroupProperties,
          expectedVersion: S.optional(S.Number),
          indexName: S.optional(S.String),
          queryString: S.optional(S.String),
          queryVersion: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/dynamic-thing-groups/{thingGroupName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateDynamicThingGroupRequest",
      });
  }
}
function __c92(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          encryptionType: EncryptionType,
          kmsKeyArn: S.optional(S.String),
          kmsAccessRoleArn: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/encryption-configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateEncryptionConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ eventConfigurations: S.optional(EventConfigurations) }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/event-configurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateEventConfigurationsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          metricName: S.String.pipe(T.HttpLabel("metricName")),
          queryString: S.optional(S.String),
          aggregationType: S.optional(AggregationType),
          period: S.optional(S.Number),
          aggregationField: S.optional(S.String),
          description: S.optional(S.String),
          queryVersion: S.optional(S.String),
          indexName: S.String,
          unit: S.optional(FleetMetricUnit),
          expectedVersion: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/fleet-metric/{metricName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateFleetMetricRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          thingIndexingConfiguration: S.optional(ThingIndexingConfiguration),
          thingGroupIndexingConfiguration: S.optional(ThingGroupIndexingConfiguration),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/indexing/config" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateIndexingConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          description: S.optional(S.String),
          presignedUrlConfig: S.optional(PresignedUrlConfig),
          jobExecutionsRolloutConfig: S.optional(JobExecutionsRolloutConfig),
          abortConfig: S.optional(AbortConfig),
          timeoutConfig: S.optional(TimeoutConfig),
          namespaceId: S.optional(S.String).pipe(T.HttpQuery("namespaceId")),
          jobExecutionsRetryConfig: S.optional(JobExecutionsRetryConfig),
        }).pipe(
          T.all(T.Http({ method: "PATCH", uri: "/jobs/{jobId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateJobRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          actionName: S.String.pipe(T.HttpLabel("actionName")),
          roleArn: S.optional(S.String),
          actionParams: S.optional(MitigationActionParams),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/mitigationactions/actions/{actionName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateMitigationActionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          packageName: S.String.pipe(T.HttpLabel("packageName")),
          description: S.optional(SensitiveString),
          defaultVersionName: S.optional(S.String),
          unsetDefaultVersion: S.optional(S.Boolean),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/packages/{packageName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdatePackageRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          versionUpdateByJobsConfig: S.optional(VersionUpdateByJobsConfig),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/package-configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdatePackageConfigurationRequest",
      });
  }
}
function __c93(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          packageName: S.String.pipe(T.HttpLabel("packageName")),
          versionName: S.String.pipe(T.HttpLabel("versionName")),
          description: S.optional(SensitiveString),
          attributes: S.optional(ResourceAttributes),
          artifact: S.optional(PackageVersionArtifact),
          action: S.optional(PackageVersionAction),
          recipe: S.optional(SensitiveString),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/packages/{packageName}/versions/{versionName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdatePackageVersionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          templateName: S.String.pipe(T.HttpLabel("templateName")),
          description: S.optional(S.String),
          enabled: S.optional(S.Boolean),
          defaultVersionId: S.optional(S.Number),
          provisioningRoleArn: S.optional(S.String),
          preProvisioningHook: S.optional(ProvisioningHook),
          removePreProvisioningHook: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/provisioning-templates/{templateName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateProvisioningTemplateRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          roleAlias: S.String.pipe(T.HttpLabel("roleAlias")),
          roleArn: S.optional(S.String),
          credentialDurationSeconds: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/role-aliases/{roleAlias}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateRoleAliasRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          frequency: S.optional(AuditFrequency),
          dayOfMonth: S.optional(S.String),
          dayOfWeek: S.optional(DayOfWeek),
          targetCheckNames: S.optional(TargetAuditCheckNames),
          scheduledAuditName: S.String.pipe(T.HttpLabel("scheduledAuditName")),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/audit/scheduledaudits/{scheduledAuditName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateScheduledAuditRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          securityProfileName: S.String.pipe(T.HttpLabel("securityProfileName")),
          securityProfileDescription: S.optional(S.String),
          behaviors: S.optional(Behaviors),
          alertTargets: S.optional(AlertTargets),
          additionalMetricsToRetain: S.optional(AdditionalMetricsToRetainList),
          additionalMetricsToRetainV2: S.optional(AdditionalMetricsToRetainV2List),
          deleteBehaviors: S.optional(S.Boolean),
          deleteAlertTargets: S.optional(S.Boolean),
          deleteAdditionalMetricsToRetain: S.optional(S.Boolean),
          expectedVersion: S.optional(S.Number).pipe(T.HttpQuery("expectedVersion")),
          metricsExportConfig: S.optional(MetricsExportConfig),
          deleteMetricsExportConfig: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/security-profiles/{securityProfileName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateSecurityProfileRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          streamId: S.String.pipe(T.HttpLabel("streamId")),
          description: S.optional(S.String),
          files: S.optional(StreamFiles),
          roleArn: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/streams/{streamId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateStreamRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          thingName: S.String.pipe(T.HttpLabel("thingName")),
          thingTypeName: S.optional(S.String),
          attributePayload: S.optional(AttributePayload),
          expectedVersion: S.optional(S.Number),
          removeThingType: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/things/{thingName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateThingRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          thingGroupName: S.String.pipe(T.HttpLabel("thingGroupName")),
          thingGroupProperties: ThingGroupProperties,
          expectedVersion: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/thing-groups/{thingGroupName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateThingGroupRequest" });
  }
}
function __c94(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ version: S.optional(S.Number) })).annotate({
        identifier: "UpdateThingGroupResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          thingName: S.optional(S.String),
          thingGroupsToAdd: S.optional(ThingGroupList),
          thingGroupsToRemove: S.optional(ThingGroupList),
          overrideDynamicGroups: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/thing-groups/updateThingGroupsForThing" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateThingGroupsForThingRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          thingTypeName: S.String.pipe(T.HttpLabel("thingTypeName")),
          thingTypeProperties: S.optional(ThingTypeProperties),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/thing-types/{thingTypeName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateThingTypeRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ arn: S.String, status: TopicRuleDestinationStatus }).pipe(
          T.all(T.Http({ method: "PATCH", uri: "/destinations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateTopicRuleDestinationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ behaviors: Behaviors }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/security-profile-behaviors/validate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ValidateSecurityProfileBehaviorsRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ errorMessage: S.optional(S.String) })).annotate({
        identifier: "ValidationError",
      });
    case 6:
      return S.Array(ValidationError);
    case 7:
      return S.suspend(() =>
        S.Struct({ valid: S.optional(S.Boolean), validationErrors: S.optional(ValidationErrors) }),
      ).annotate({
        identifier: "ValidateSecurityProfileBehaviorsResponse",
      });
  }
}
