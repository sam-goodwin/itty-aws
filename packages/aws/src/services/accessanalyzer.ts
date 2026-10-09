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
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "AccessAnalyzer",
  serviceShapeName: "AccessAnalyzer",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "access-analyzer" });
const ver = /*@__PURE__*/ T.ServiceVersion("2019-11-01");
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
              `https://access-analyzer-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            if (_.getAttr(PartitionResult, "name") === "aws-us-gov") {
              return e(`https://access-analyzer.${Region}.amazonaws.com`);
            }
            return e(
              `https://access-analyzer-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://access-analyzer.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://access-analyzer.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class InvalidParameterException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterException>()(
    "InvalidParameterException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.HttpError(429),
      /*@__PURE__*/ T.Retryable({ throttling: true }),
    ),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class UnprocessableEntityException
  extends /*@__PURE__*/ S.TaggedError<UnprocessableEntityException>()(
    "UnprocessableEntityException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(422), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withBadRequestError, C.withRetryableError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: S.String,
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ValidationExceptionFieldList).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type AnalyzerArn = string;
export type Name = string;
export interface ApplyArchiveRuleRequest {
  analyzerArn: string;
  ruleName: string;
  clientToken?: string;
}
const ApplyArchiveRuleRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<ApplyArchiveRuleRequest>;
export interface ApplyArchiveRuleResponse {}
const ApplyArchiveRuleResponse = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<ApplyArchiveRuleResponse>;
export type JobId = string;
export interface CancelPolicyGenerationRequest {
  jobId: string;
}
const CancelPolicyGenerationRequest = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<CancelPolicyGenerationRequest>;
export interface CancelPolicyGenerationResponse {}
const CancelPolicyGenerationResponse =
  ApplyArchiveRuleResponse as any as S.Schema<CancelPolicyGenerationResponse>;
export type AccessCheckPolicyDocument = string | redacted.Redacted<string>;
export type Action = string;
export type ActionsList = string[];
const ActionsList = /*@__PURE__*/ __L.at(__c0, 3);
export type Resource = string;
export type ResourcesList = string[];
const ResourcesList = ActionsList as any as S.Schema<ResourcesList>;
export interface Access {
  actions?: string[];
  resources?: string[];
}
const Access = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<Access>;
export type AccessList = Access[];
const AccessList = /*@__PURE__*/ __L.at(__c0, 5);
export type AccessCheckPolicyType = string;
export interface CheckAccessNotGrantedRequest {
  policyDocument: string | redacted.Redacted<string>;
  access: Access[];
  policyType: string;
}
const CheckAccessNotGrantedRequest = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<CheckAccessNotGrantedRequest>;
export type CheckAccessNotGrantedResult = string;
export interface ReasonSummary {
  description?: string;
  statementIndex?: number;
  statementId?: string;
}
const ReasonSummary = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<ReasonSummary>;
export type ReasonSummaryList = ReasonSummary[];
const ReasonSummaryList = /*@__PURE__*/ __L.at(__c1, 0);
export interface CheckAccessNotGrantedResponse {
  result?: string;
  message?: string;
  reasons?: ReasonSummary[];
}
const CheckAccessNotGrantedResponse = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<CheckAccessNotGrantedResponse>;
export interface CheckNoNewAccessRequest {
  newPolicyDocument: string | redacted.Redacted<string>;
  existingPolicyDocument: string | redacted.Redacted<string>;
  policyType: string;
}
const CheckNoNewAccessRequest = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<CheckNoNewAccessRequest>;
export type CheckNoNewAccessResult = string;
export interface CheckNoNewAccessResponse {
  result?: string;
  message?: string;
  reasons?: ReasonSummary[];
}
const CheckNoNewAccessResponse = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<CheckNoNewAccessResponse>;
export type AccessCheckResourceType = string;
export interface CheckNoPublicAccessRequest {
  policyDocument: string | redacted.Redacted<string>;
  resourceType: string;
}
const CheckNoPublicAccessRequest = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<CheckNoPublicAccessRequest>;
export type CheckNoPublicAccessResult = string;
export interface CheckNoPublicAccessResponse {
  result?: string;
  message?: string;
  reasons?: ReasonSummary[];
}
const CheckNoPublicAccessResponse =
  CheckAccessNotGrantedResponse as any as S.Schema<CheckNoPublicAccessResponse>;
export type ConfigurationsMapKey = string;
export type EbsUserId = string;
export type EbsUserIdList = string[];
const EbsUserIdList = ActionsList as any as S.Schema<EbsUserIdList>;
export type EbsGroup = string;
export type EbsGroupList = string[];
const EbsGroupList = ActionsList as any as S.Schema<EbsGroupList>;
export type EbsSnapshotDataEncryptionKeyId = string;
export interface EbsSnapshotConfiguration {
  userIds?: string[];
  groups?: string[];
  kmsKeyId?: string;
}
const EbsSnapshotConfiguration = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<EbsSnapshotConfiguration>;
export type EcrRepositoryPolicy = string;
export interface EcrRepositoryConfiguration {
  repositoryPolicy?: string;
}
const EcrRepositoryConfiguration = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<EcrRepositoryConfiguration>;
export type IamTrustPolicy = string;
export interface IamRoleConfiguration {
  trustPolicy?: string;
}
const IamRoleConfiguration = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<IamRoleConfiguration>;
export type EfsFileSystemPolicy = string;
export interface EfsFileSystemConfiguration {
  fileSystemPolicy?: string;
}
const EfsFileSystemConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<EfsFileSystemConfiguration>;
export type PolicyName = string;
export type KmsKeyPolicy = string;
export type KmsKeyPoliciesMap = { [key: string]: string | undefined };
const KmsKeyPoliciesMap = /*@__PURE__*/ __L.at(__c2, 1);
export type KmsGrantOperation = string;
export type KmsGrantOperationsList = string[];
const KmsGrantOperationsList = ActionsList as any as S.Schema<KmsGrantOperationsList>;
export type GranteePrincipal = string;
export type RetiringPrincipal = string;
export type KmsConstraintsKey = string;
export type KmsConstraintsValue = string;
export type KmsConstraintsMap = { [key: string]: string | undefined };
const KmsConstraintsMap = KmsKeyPoliciesMap as any as S.Schema<KmsConstraintsMap>;
export interface KmsGrantConstraints {
  encryptionContextEquals?: { [key: string]: string | undefined };
  encryptionContextSubset?: { [key: string]: string | undefined };
}
const KmsGrantConstraints = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<KmsGrantConstraints>;
export type IssuingAccount = string;
export interface KmsGrantConfiguration {
  operations: string[];
  granteePrincipal: string;
  retiringPrincipal?: string;
  constraints?: KmsGrantConstraints;
  issuingAccount: string;
}
const KmsGrantConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<KmsGrantConfiguration>;
export type KmsGrantConfigurationsList = KmsGrantConfiguration[];
const KmsGrantConfigurationsList = /*@__PURE__*/ __L.at(__c2, 4);
export interface KmsKeyConfiguration {
  keyPolicies?: { [key: string]: string | undefined };
  grants?: KmsGrantConfiguration[];
}
const KmsKeyConfiguration = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<KmsKeyConfiguration>;
export type RdsDbClusterSnapshotAttributeName = string;
export type RdsDbClusterSnapshotAccountId = string;
export type RdsDbClusterSnapshotAccountIdsList = string[];
const RdsDbClusterSnapshotAccountIdsList =
  ActionsList as any as S.Schema<RdsDbClusterSnapshotAccountIdsList>;
export type RdsDbClusterSnapshotAttributeValue = { accountIds: string[] };
const RdsDbClusterSnapshotAttributeValue = /*@__PURE__*/ __L.at(__c2, 6);
export type RdsDbClusterSnapshotAttributesMap = {
  [key: string]: RdsDbClusterSnapshotAttributeValue | undefined;
};
const RdsDbClusterSnapshotAttributesMap = /*@__PURE__*/ __L.at(__c2, 7);
export type RdsDbClusterSnapshotKmsKeyId = string;
export interface RdsDbClusterSnapshotConfiguration {
  attributes?: { [key: string]: RdsDbClusterSnapshotAttributeValue | undefined };
  kmsKeyId?: string;
}
const RdsDbClusterSnapshotConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<RdsDbClusterSnapshotConfiguration>;
export type RdsDbSnapshotAttributeName = string;
export type RdsDbSnapshotAccountId = string;
export type RdsDbSnapshotAccountIdsList = string[];
export type RdsDbSnapshotAttributeValue = { accountIds: string[] };
export type RdsDbSnapshotAttributesMap = { [key: string]: RdsDbSnapshotAttributeValue | undefined };
const RdsDbSnapshotAttributesMap =
  RdsDbClusterSnapshotAttributesMap as any as S.Schema<RdsDbSnapshotAttributesMap>;
export type RdsDbSnapshotKmsKeyId = string;
export interface RdsDbSnapshotConfiguration {
  attributes?: { [key: string]: RdsDbSnapshotAttributeValue | undefined };
  kmsKeyId?: string;
}
const RdsDbSnapshotConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<RdsDbSnapshotConfiguration>;
export type SecretsManagerSecretKmsId = string;
export type SecretsManagerSecretPolicy = string;
export interface SecretsManagerSecretConfiguration {
  kmsKeyId?: string;
  secretPolicy?: string;
}
const SecretsManagerSecretConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<SecretsManagerSecretConfiguration>;
export type S3BucketPolicy = string;
export type AclPermission = string;
export type AclCanonicalId = string;
export type AclUri = string;
export type AclGrantee = { id: string; uri?: never } | { id?: never; uri: string };
const AclGrantee = /*@__PURE__*/ __L.at(__c3, 3);
export interface S3BucketAclGrantConfiguration {
  permission: string;
  grantee: AclGrantee;
}
const S3BucketAclGrantConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<S3BucketAclGrantConfiguration>;
export type S3BucketAclGrantConfigurationsList = S3BucketAclGrantConfiguration[];
const S3BucketAclGrantConfigurationsList = /*@__PURE__*/ __L.at(__c3, 5);
export interface S3PublicAccessBlockConfiguration {
  ignorePublicAcls: boolean;
  restrictPublicBuckets: boolean;
}
const S3PublicAccessBlockConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<S3PublicAccessBlockConfiguration>;
export type AccessPointArn = string;
export type AccessPointPolicy = string;
export type VpcId = string;
export interface VpcConfiguration {
  vpcId: string;
}
const VpcConfiguration = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<VpcConfiguration>;
export interface InternetConfiguration {}
const InternetConfiguration = ApplyArchiveRuleResponse as any as S.Schema<InternetConfiguration>;
export type NetworkOriginConfiguration =
  | { vpcConfiguration: VpcConfiguration; internetConfiguration?: never }
  | { vpcConfiguration?: never; internetConfiguration: InternetConfiguration };
const NetworkOriginConfiguration = /*@__PURE__*/ __L.at(__c4, 0);
export interface S3AccessPointConfiguration {
  accessPointPolicy?: string;
  publicAccessBlock?: S3PublicAccessBlockConfiguration;
  networkOrigin?: NetworkOriginConfiguration;
}
const S3AccessPointConfiguration = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<S3AccessPointConfiguration>;
export type S3AccessPointConfigurationsMap = {
  [key: string]: S3AccessPointConfiguration | undefined;
};
const S3AccessPointConfigurationsMap = /*@__PURE__*/ __L.at(__c4, 2);
export interface S3BucketConfiguration {
  bucketPolicy?: string;
  bucketAclGrants?: S3BucketAclGrantConfiguration[];
  bucketPublicAccessBlock?: S3PublicAccessBlockConfiguration;
  accessPoints?: { [key: string]: S3AccessPointConfiguration | undefined };
}
const S3BucketConfiguration = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<S3BucketConfiguration>;
export type SnsTopicPolicy = string;
export interface SnsTopicConfiguration {
  topicPolicy?: string;
}
const SnsTopicConfiguration = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<SnsTopicConfiguration>;
export type SqsQueuePolicy = string;
export interface SqsQueueConfiguration {
  queuePolicy?: string;
}
const SqsQueueConfiguration = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<SqsQueueConfiguration>;
export type S3ExpressDirectoryBucketPolicy = string;
export type S3ExpressDirectoryAccessPointArn = string;
export interface S3ExpressDirectoryAccessPointConfiguration {
  accessPointPolicy?: string;
  networkOrigin?: NetworkOriginConfiguration;
}
const S3ExpressDirectoryAccessPointConfiguration = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<S3ExpressDirectoryAccessPointConfiguration>;
export type S3ExpressDirectoryAccessPointConfigurationsMap = {
  [key: string]: S3ExpressDirectoryAccessPointConfiguration | undefined;
};
const S3ExpressDirectoryAccessPointConfigurationsMap = /*@__PURE__*/ __L.at(__c4, 7);
export interface S3ExpressDirectoryBucketConfiguration {
  bucketPolicy?: string;
  accessPoints?: { [key: string]: S3ExpressDirectoryAccessPointConfiguration | undefined };
}
const S3ExpressDirectoryBucketConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<S3ExpressDirectoryBucketConfiguration>;
export type DynamodbStreamPolicy = string;
export interface DynamodbStreamConfiguration {
  streamPolicy?: string;
}
const DynamodbStreamConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<DynamodbStreamConfiguration>;
export type DynamodbTablePolicy = string;
export interface DynamodbTableConfiguration {
  tablePolicy?: string;
}
const DynamodbTableConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<DynamodbTableConfiguration>;
export type Configuration =
  | {
      ebsSnapshot: EbsSnapshotConfiguration;
      ecrRepository?: never;
      iamRole?: never;
      efsFileSystem?: never;
      kmsKey?: never;
      rdsDbClusterSnapshot?: never;
      rdsDbSnapshot?: never;
      secretsManagerSecret?: never;
      s3Bucket?: never;
      snsTopic?: never;
      sqsQueue?: never;
      s3ExpressDirectoryBucket?: never;
      dynamodbStream?: never;
      dynamodbTable?: never;
    }
  | {
      ebsSnapshot?: never;
      ecrRepository: EcrRepositoryConfiguration;
      iamRole?: never;
      efsFileSystem?: never;
      kmsKey?: never;
      rdsDbClusterSnapshot?: never;
      rdsDbSnapshot?: never;
      secretsManagerSecret?: never;
      s3Bucket?: never;
      snsTopic?: never;
      sqsQueue?: never;
      s3ExpressDirectoryBucket?: never;
      dynamodbStream?: never;
      dynamodbTable?: never;
    }
  | {
      ebsSnapshot?: never;
      ecrRepository?: never;
      iamRole: IamRoleConfiguration;
      efsFileSystem?: never;
      kmsKey?: never;
      rdsDbClusterSnapshot?: never;
      rdsDbSnapshot?: never;
      secretsManagerSecret?: never;
      s3Bucket?: never;
      snsTopic?: never;
      sqsQueue?: never;
      s3ExpressDirectoryBucket?: never;
      dynamodbStream?: never;
      dynamodbTable?: never;
    }
  | {
      ebsSnapshot?: never;
      ecrRepository?: never;
      iamRole?: never;
      efsFileSystem: EfsFileSystemConfiguration;
      kmsKey?: never;
      rdsDbClusterSnapshot?: never;
      rdsDbSnapshot?: never;
      secretsManagerSecret?: never;
      s3Bucket?: never;
      snsTopic?: never;
      sqsQueue?: never;
      s3ExpressDirectoryBucket?: never;
      dynamodbStream?: never;
      dynamodbTable?: never;
    }
  | {
      ebsSnapshot?: never;
      ecrRepository?: never;
      iamRole?: never;
      efsFileSystem?: never;
      kmsKey: KmsKeyConfiguration;
      rdsDbClusterSnapshot?: never;
      rdsDbSnapshot?: never;
      secretsManagerSecret?: never;
      s3Bucket?: never;
      snsTopic?: never;
      sqsQueue?: never;
      s3ExpressDirectoryBucket?: never;
      dynamodbStream?: never;
      dynamodbTable?: never;
    }
  | {
      ebsSnapshot?: never;
      ecrRepository?: never;
      iamRole?: never;
      efsFileSystem?: never;
      kmsKey?: never;
      rdsDbClusterSnapshot: RdsDbClusterSnapshotConfiguration;
      rdsDbSnapshot?: never;
      secretsManagerSecret?: never;
      s3Bucket?: never;
      snsTopic?: never;
      sqsQueue?: never;
      s3ExpressDirectoryBucket?: never;
      dynamodbStream?: never;
      dynamodbTable?: never;
    }
  | {
      ebsSnapshot?: never;
      ecrRepository?: never;
      iamRole?: never;
      efsFileSystem?: never;
      kmsKey?: never;
      rdsDbClusterSnapshot?: never;
      rdsDbSnapshot: RdsDbSnapshotConfiguration;
      secretsManagerSecret?: never;
      s3Bucket?: never;
      snsTopic?: never;
      sqsQueue?: never;
      s3ExpressDirectoryBucket?: never;
      dynamodbStream?: never;
      dynamodbTable?: never;
    }
  | {
      ebsSnapshot?: never;
      ecrRepository?: never;
      iamRole?: never;
      efsFileSystem?: never;
      kmsKey?: never;
      rdsDbClusterSnapshot?: never;
      rdsDbSnapshot?: never;
      secretsManagerSecret: SecretsManagerSecretConfiguration;
      s3Bucket?: never;
      snsTopic?: never;
      sqsQueue?: never;
      s3ExpressDirectoryBucket?: never;
      dynamodbStream?: never;
      dynamodbTable?: never;
    }
  | {
      ebsSnapshot?: never;
      ecrRepository?: never;
      iamRole?: never;
      efsFileSystem?: never;
      kmsKey?: never;
      rdsDbClusterSnapshot?: never;
      rdsDbSnapshot?: never;
      secretsManagerSecret?: never;
      s3Bucket: S3BucketConfiguration;
      snsTopic?: never;
      sqsQueue?: never;
      s3ExpressDirectoryBucket?: never;
      dynamodbStream?: never;
      dynamodbTable?: never;
    }
  | {
      ebsSnapshot?: never;
      ecrRepository?: never;
      iamRole?: never;
      efsFileSystem?: never;
      kmsKey?: never;
      rdsDbClusterSnapshot?: never;
      rdsDbSnapshot?: never;
      secretsManagerSecret?: never;
      s3Bucket?: never;
      snsTopic: SnsTopicConfiguration;
      sqsQueue?: never;
      s3ExpressDirectoryBucket?: never;
      dynamodbStream?: never;
      dynamodbTable?: never;
    }
  | {
      ebsSnapshot?: never;
      ecrRepository?: never;
      iamRole?: never;
      efsFileSystem?: never;
      kmsKey?: never;
      rdsDbClusterSnapshot?: never;
      rdsDbSnapshot?: never;
      secretsManagerSecret?: never;
      s3Bucket?: never;
      snsTopic?: never;
      sqsQueue: SqsQueueConfiguration;
      s3ExpressDirectoryBucket?: never;
      dynamodbStream?: never;
      dynamodbTable?: never;
    }
  | {
      ebsSnapshot?: never;
      ecrRepository?: never;
      iamRole?: never;
      efsFileSystem?: never;
      kmsKey?: never;
      rdsDbClusterSnapshot?: never;
      rdsDbSnapshot?: never;
      secretsManagerSecret?: never;
      s3Bucket?: never;
      snsTopic?: never;
      sqsQueue?: never;
      s3ExpressDirectoryBucket: S3ExpressDirectoryBucketConfiguration;
      dynamodbStream?: never;
      dynamodbTable?: never;
    }
  | {
      ebsSnapshot?: never;
      ecrRepository?: never;
      iamRole?: never;
      efsFileSystem?: never;
      kmsKey?: never;
      rdsDbClusterSnapshot?: never;
      rdsDbSnapshot?: never;
      secretsManagerSecret?: never;
      s3Bucket?: never;
      snsTopic?: never;
      sqsQueue?: never;
      s3ExpressDirectoryBucket?: never;
      dynamodbStream: DynamodbStreamConfiguration;
      dynamodbTable?: never;
    }
  | {
      ebsSnapshot?: never;
      ecrRepository?: never;
      iamRole?: never;
      efsFileSystem?: never;
      kmsKey?: never;
      rdsDbClusterSnapshot?: never;
      rdsDbSnapshot?: never;
      secretsManagerSecret?: never;
      s3Bucket?: never;
      snsTopic?: never;
      sqsQueue?: never;
      s3ExpressDirectoryBucket?: never;
      dynamodbStream?: never;
      dynamodbTable: DynamodbTableConfiguration;
    };
const Configuration = /*@__PURE__*/ __L.at(__c5, 3);
export type ConfigurationsMap = { [key: string]: Configuration | undefined };
const ConfigurationsMap = /*@__PURE__*/ __L.at(__c5, 4);
export interface CreateAccessPreviewRequest {
  analyzerArn: string;
  configurations: { [key: string]: Configuration | undefined };
  clientToken?: string;
}
const CreateAccessPreviewRequest = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<CreateAccessPreviewRequest>;
export type AccessPreviewId = string;
export interface CreateAccessPreviewResponse {
  id: string;
}
const CreateAccessPreviewResponse = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<CreateAccessPreviewResponse>;
export type AnalyzerName = string;
export type Type = string;
export type ValueList = string[];
const ValueList = ActionsList as any as S.Schema<ValueList>;
export interface Criterion {
  eq?: string[];
  neq?: string[];
  contains?: string[];
  exists?: boolean;
}
const Criterion = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<Criterion>;
export type FilterCriteriaMap = { [key: string]: Criterion | undefined };
const FilterCriteriaMap = /*@__PURE__*/ __L.at(__c6, 0);
export interface InlineArchiveRule {
  ruleName: string;
  filter: { [key: string]: Criterion | undefined };
}
const InlineArchiveRule = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<InlineArchiveRule>;
export type InlineArchiveRulesList = InlineArchiveRule[];
const InlineArchiveRulesList = /*@__PURE__*/ __L.at(__c6, 2);
export type TagsMap = { [key: string]: string | undefined };
const TagsMap = /*@__PURE__*/ __L.at(__c6, 3);
export type AccountIdsList = string[];
const AccountIdsList = ActionsList as any as S.Schema<AccountIdsList>;
export type TagsList = { [key: string]: string | undefined }[];
const TagsList = /*@__PURE__*/ __L.at(__c6, 4);
export interface AnalysisRuleCriteria {
  accountIds?: string[];
  resourceTags?: { [key: string]: string | undefined }[];
}
const AnalysisRuleCriteria = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<AnalysisRuleCriteria>;
export type AnalysisRuleCriteriaList = AnalysisRuleCriteria[];
const AnalysisRuleCriteriaList = /*@__PURE__*/ __L.at(__c6, 6);
export interface AnalysisRule {
  exclusions?: AnalysisRuleCriteria[];
}
const AnalysisRule = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<AnalysisRule>;
export interface UnusedAccessConfiguration {
  unusedAccessAge?: number;
  analysisRule?: AnalysisRule;
}
const UnusedAccessConfiguration = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<UnusedAccessConfiguration>;
export type ResourceType = string;
export type ResourceTypeList = string[];
const ResourceTypeList = ActionsList as any as S.Schema<ResourceTypeList>;
export type ResourceArnsList = string[];
const ResourceArnsList = ActionsList as any as S.Schema<ResourceArnsList>;
export interface InternalAccessAnalysisRuleCriteria {
  accountIds?: string[];
  resourceTypes?: string[];
  resourceArns?: string[];
}
const InternalAccessAnalysisRuleCriteria = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<InternalAccessAnalysisRuleCriteria>;
export type InternalAccessAnalysisRuleCriteriaList = InternalAccessAnalysisRuleCriteria[];
const InternalAccessAnalysisRuleCriteriaList = /*@__PURE__*/ __L.at(__c7, 2);
export interface InternalAccessAnalysisRule {
  inclusions?: InternalAccessAnalysisRuleCriteria[];
}
const InternalAccessAnalysisRule = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<InternalAccessAnalysisRule>;
export interface InternalAccessConfiguration {
  analysisRule?: InternalAccessAnalysisRule;
}
const InternalAccessConfiguration = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<InternalAccessConfiguration>;
export type AnalyzerConfiguration =
  | { unusedAccess: UnusedAccessConfiguration; internalAccess?: never }
  | { unusedAccess?: never; internalAccess: InternalAccessConfiguration };
const AnalyzerConfiguration = /*@__PURE__*/ __L.at(__c7, 5);
export interface CreateAnalyzerRequest {
  analyzerName: string;
  type: string;
  archiveRules?: InlineArchiveRule[];
  tags?: { [key: string]: string | undefined };
  clientToken?: string;
  configuration?: AnalyzerConfiguration;
}
const CreateAnalyzerRequest = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<CreateAnalyzerRequest>;
export interface CreateAnalyzerResponse {
  arn?: string;
}
const CreateAnalyzerResponse = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<CreateAnalyzerResponse>;
export interface CreateArchiveRuleRequest {
  analyzerName: string;
  ruleName: string;
  filter: { [key: string]: Criterion | undefined };
  clientToken?: string;
}
const CreateArchiveRuleRequest = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<CreateArchiveRuleRequest>;
export interface CreateArchiveRuleResponse {}
const CreateArchiveRuleResponse =
  ApplyArchiveRuleResponse as any as S.Schema<CreateArchiveRuleResponse>;
export interface CreateServiceLinkedAnalyzerRequest {
  type: string;
  archiveRules?: InlineArchiveRule[];
  clientToken?: string;
  configuration?: AnalyzerConfiguration;
}
const CreateServiceLinkedAnalyzerRequest = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<CreateServiceLinkedAnalyzerRequest>;
export interface CreateServiceLinkedAnalyzerResponse {
  arn?: string;
}
const CreateServiceLinkedAnalyzerResponse = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<CreateServiceLinkedAnalyzerResponse>;
export interface DeleteAnalyzerRequest {
  analyzerName: string;
  clientToken?: string;
}
const DeleteAnalyzerRequest = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<DeleteAnalyzerRequest>;
export interface DeleteAnalyzerResponse {}
const DeleteAnalyzerResponse = ApplyArchiveRuleResponse as any as S.Schema<DeleteAnalyzerResponse>;
export interface DeleteArchiveRuleRequest {
  analyzerName: string;
  ruleName: string;
  clientToken?: string;
}
const DeleteArchiveRuleRequest = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<DeleteArchiveRuleRequest>;
export interface DeleteArchiveRuleResponse {}
const DeleteArchiveRuleResponse =
  ApplyArchiveRuleResponse as any as S.Schema<DeleteArchiveRuleResponse>;
export interface DeleteServiceLinkedAnalyzerRequest {
  analyzerName: string;
  clientToken?: string;
}
const DeleteServiceLinkedAnalyzerRequest = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<DeleteServiceLinkedAnalyzerRequest>;
export interface DeleteServiceLinkedAnalyzerResponse {}
const DeleteServiceLinkedAnalyzerResponse = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<DeleteServiceLinkedAnalyzerResponse>;
export interface GenerateFindingRecommendationRequest {
  analyzerArn: string;
  id: string;
}
const GenerateFindingRecommendationRequest = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<GenerateFindingRecommendationRequest>;
export interface GenerateFindingRecommendationResponse {}
const GenerateFindingRecommendationResponse =
  DeleteServiceLinkedAnalyzerResponse as any as S.Schema<GenerateFindingRecommendationResponse>;
export interface GetAccessPreviewRequest {
  accessPreviewId: string;
  analyzerArn: string;
}
const GetAccessPreviewRequest = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<GetAccessPreviewRequest>;
export type AccessPreviewStatus = string;
export type AccessPreviewStatusReasonCode = string;
export interface AccessPreviewStatusReason {
  code: string;
}
const AccessPreviewStatusReason = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<AccessPreviewStatusReason>;
export interface AccessPreview {
  id: string;
  analyzerArn: string;
  configurations: { [key: string]: Configuration | undefined };
  createdAt: Date;
  status: string;
  statusReason?: AccessPreviewStatusReason;
}
const AccessPreview = /*@__PURE__*/ __L.at(__c9, 2) as any as S.Schema<AccessPreview>;
export interface GetAccessPreviewResponse {
  accessPreview: AccessPreview;
}
const GetAccessPreviewResponse = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<GetAccessPreviewResponse>;
export type ResourceArn = string;
export interface GetAnalyzedResourceRequest {
  analyzerArn: string;
  resourceArn: string;
}
const GetAnalyzedResourceRequest = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<GetAnalyzedResourceRequest>;
export type ActionList = string[];
const ActionList = ActionsList as any as S.Schema<ActionList>;
export type SharedViaList = string[];
const SharedViaList = ActionsList as any as S.Schema<SharedViaList>;
export type FindingStatus = string;
export interface AnalyzedResource {
  resourceArn: string;
  resourceType: string;
  createdAt: Date;
  analyzedAt: Date;
  updatedAt: Date;
  isPublic: boolean;
  actions?: string[];
  sharedVia?: string[];
  status?: string;
  resourceOwnerAccount: string;
  error?: string;
}
const AnalyzedResource = /*@__PURE__*/ __L.at(__c9, 5) as any as S.Schema<AnalyzedResource>;
export interface GetAnalyzedResourceResponse {
  resource?: AnalyzedResource;
}
const GetAnalyzedResourceResponse = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<GetAnalyzedResourceResponse>;
export interface GetAnalyzerRequest {
  analyzerName: string;
}
const GetAnalyzerRequest = /*@__PURE__*/ __L.at(__c9, 7) as any as S.Schema<GetAnalyzerRequest>;
export type AnalyzerStatus = string;
export type ReasonCode = string;
export interface StatusReason {
  code: string;
}
const StatusReason = /*@__PURE__*/ __L.at(__c10, 0) as any as S.Schema<StatusReason>;
export interface AnalyzerSummary {
  arn: string;
  name: string;
  type: string;
  createdAt: Date;
  lastResourceAnalyzed?: string;
  lastResourceAnalyzedAt?: Date;
  tags?: { [key: string]: string | undefined };
  status: string;
  statusReason?: StatusReason;
  configuration?: AnalyzerConfiguration;
  managedBy?: string;
}
const AnalyzerSummary = /*@__PURE__*/ __L.at(__c10, 1) as any as S.Schema<AnalyzerSummary>;
export interface GetAnalyzerResponse {
  analyzer: AnalyzerSummary;
}
const GetAnalyzerResponse = /*@__PURE__*/ __L.at(__c10, 2) as any as S.Schema<GetAnalyzerResponse>;
export interface GetArchiveRuleRequest {
  analyzerName: string;
  ruleName: string;
}
const GetArchiveRuleRequest = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<GetArchiveRuleRequest>;
export interface ArchiveRuleSummary {
  ruleName: string;
  filter: { [key: string]: Criterion | undefined };
  createdAt: Date;
  updatedAt: Date;
}
const ArchiveRuleSummary = /*@__PURE__*/ __L.at(__c10, 4) as any as S.Schema<ArchiveRuleSummary>;
export interface GetArchiveRuleResponse {
  archiveRule: ArchiveRuleSummary;
}
const GetArchiveRuleResponse = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<GetArchiveRuleResponse>;
export type FindingId = string;
export interface GetFindingRequest {
  analyzerArn: string;
  id: string;
}
const GetFindingRequest = /*@__PURE__*/ __L.at(__c10, 6) as any as S.Schema<GetFindingRequest>;
export type PrincipalMap = { [key: string]: string | undefined };
const PrincipalMap = KmsKeyPoliciesMap as any as S.Schema<PrincipalMap>;
export type ConditionKeyMap = { [key: string]: string | undefined };
const ConditionKeyMap = KmsKeyPoliciesMap as any as S.Schema<ConditionKeyMap>;
export type FindingSourceType = string;
export interface FindingSourceDetail {
  accessPointArn?: string;
  accessPointAccount?: string;
}
const FindingSourceDetail = /*@__PURE__*/ __L.at(__c10, 7) as any as S.Schema<FindingSourceDetail>;
export interface FindingSource {
  type: string;
  detail?: FindingSourceDetail;
}
const FindingSource = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<FindingSource>;
export type FindingSourceList = FindingSource[];
const FindingSourceList = /*@__PURE__*/ __L.at(__c11, 1);
export type ResourceControlPolicyRestriction = string;
export interface Finding {
  id: string;
  principal?: { [key: string]: string | undefined };
  action?: string[];
  resource?: string;
  isPublic?: boolean;
  resourceType: string;
  condition: { [key: string]: string | undefined };
  createdAt: Date;
  analyzedAt: Date;
  updatedAt: Date;
  status: string;
  resourceOwnerAccount: string;
  error?: string;
  sources?: FindingSource[];
  resourceControlPolicyRestriction?: string;
}
const Finding = /*@__PURE__*/ __L.at(__c11, 2) as any as S.Schema<Finding>;
export interface GetFindingResponse {
  finding?: Finding;
}
const GetFindingResponse = /*@__PURE__*/ __L.at(__c11, 3) as any as S.Schema<GetFindingResponse>;
export type Token = string;
export interface GetFindingRecommendationRequest {
  analyzerArn: string;
  id: string;
  maxResults?: number;
  nextToken?: string;
}
const GetFindingRecommendationRequest = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<GetFindingRecommendationRequest>;
export interface RecommendationError {
  code: string;
  message: string;
}
const RecommendationError = /*@__PURE__*/ __L.at(__c11, 5) as any as S.Schema<RecommendationError>;
export type RecommendedRemediationAction = string;
export interface UnusedPermissionsRecommendedStep {
  policyUpdatedAt?: Date;
  recommendedAction: string;
  recommendedPolicy?: string;
  existingPolicyId?: string;
}
const UnusedPermissionsRecommendedStep = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<UnusedPermissionsRecommendedStep>;
export type RecommendedStep = {
  unusedPermissionsRecommendedStep: UnusedPermissionsRecommendedStep;
};
const RecommendedStep = /*@__PURE__*/ __L.at(__c11, 7);
export type RecommendedStepList = RecommendedStep[];
const RecommendedStepList = /*@__PURE__*/ __L.at(__c12, 0);
export type RecommendationType = string;
export type Status = string;
export interface GetFindingRecommendationResponse {
  startedAt: Date;
  completedAt?: Date;
  nextToken?: string;
  error?: RecommendationError;
  resourceArn: string;
  recommendedSteps?: RecommendedStep[];
  recommendationType: string;
  status: string;
}
const GetFindingRecommendationResponse = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<GetFindingRecommendationResponse>;
export interface GetFindingsStatisticsRequest {
  analyzerArn: string;
}
const GetFindingsStatisticsRequest = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<GetFindingsStatisticsRequest>;
export interface ResourceTypeDetails {
  totalActivePublic?: number;
  totalActiveCrossAccount?: number;
  totalActiveErrors?: number;
}
const ResourceTypeDetails = /*@__PURE__*/ __L.at(__c12, 3) as any as S.Schema<ResourceTypeDetails>;
export type ResourceTypeStatisticsMap = { [key: string]: ResourceTypeDetails | undefined };
const ResourceTypeStatisticsMap = /*@__PURE__*/ __L.at(__c12, 4);
export interface ExternalAccessFindingsStatistics {
  resourceTypeStatistics?: { [key: string]: ResourceTypeDetails | undefined };
  totalActiveFindings?: number;
  totalArchivedFindings?: number;
  totalResolvedFindings?: number;
}
const ExternalAccessFindingsStatistics = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<ExternalAccessFindingsStatistics>;
export interface InternalAccessResourceTypeDetails {
  totalActiveFindings?: number;
  totalResolvedFindings?: number;
  totalArchivedFindings?: number;
}
const InternalAccessResourceTypeDetails = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<InternalAccessResourceTypeDetails>;
export type InternalAccessResourceTypeStatisticsMap = {
  [key: string]: InternalAccessResourceTypeDetails | undefined;
};
const InternalAccessResourceTypeStatisticsMap = /*@__PURE__*/ __L.at(__c12, 7);
export interface InternalAccessFindingsStatistics {
  resourceTypeStatistics?: { [key: string]: InternalAccessResourceTypeDetails | undefined };
  totalActiveFindings?: number;
  totalArchivedFindings?: number;
  totalResolvedFindings?: number;
}
const InternalAccessFindingsStatistics = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<InternalAccessFindingsStatistics>;
export interface UnusedAccessTypeStatistics {
  unusedAccessType?: string;
  total?: number;
}
const UnusedAccessTypeStatistics = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<UnusedAccessTypeStatistics>;
export type UnusedAccessTypeStatisticsList = UnusedAccessTypeStatistics[];
const UnusedAccessTypeStatisticsList = /*@__PURE__*/ __L.at(__c13, 2);
export type FindingAggregationAccountDetailsMap = { [key: string]: number | undefined };
const FindingAggregationAccountDetailsMap = /*@__PURE__*/ __L.at(__c13, 3);
export interface FindingAggregationAccountDetails {
  account?: string;
  numberOfActiveFindings?: number;
  details?: { [key: string]: number | undefined };
}
const FindingAggregationAccountDetails = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<FindingAggregationAccountDetails>;
export type AccountAggregations = FindingAggregationAccountDetails[];
const AccountAggregations = /*@__PURE__*/ __L.at(__c13, 5);
export interface UnusedAccessFindingsStatistics {
  unusedAccessTypeStatistics?: UnusedAccessTypeStatistics[];
  topAccounts?: FindingAggregationAccountDetails[];
  totalActiveFindings?: number;
  totalArchivedFindings?: number;
  totalResolvedFindings?: number;
}
const UnusedAccessFindingsStatistics = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<UnusedAccessFindingsStatistics>;
export type FindingsStatistics =
  | {
      externalAccessFindingsStatistics: ExternalAccessFindingsStatistics;
      internalAccessFindingsStatistics?: never;
      unusedAccessFindingsStatistics?: never;
    }
  | {
      externalAccessFindingsStatistics?: never;
      internalAccessFindingsStatistics: InternalAccessFindingsStatistics;
      unusedAccessFindingsStatistics?: never;
    }
  | {
      externalAccessFindingsStatistics?: never;
      internalAccessFindingsStatistics?: never;
      unusedAccessFindingsStatistics: UnusedAccessFindingsStatistics;
    };
const FindingsStatistics = /*@__PURE__*/ __L.at(__c13, 7);
export type FindingsStatisticsList = FindingsStatistics[];
const FindingsStatisticsList = /*@__PURE__*/ __L.at(__c14, 0);
export interface GetFindingsStatisticsResponse {
  findingsStatistics?: FindingsStatistics[];
  lastUpdatedAt?: Date;
}
const GetFindingsStatisticsResponse = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<GetFindingsStatisticsResponse>;
export interface GetFindingV2Request {
  analyzerArn: string;
  id: string;
  maxResults?: number;
  nextToken?: string;
}
const GetFindingV2Request = /*@__PURE__*/ __L.at(__c14, 2) as any as S.Schema<GetFindingV2Request>;
export type InternalAccessType = string;
export type PrincipalType = string;
export type ServiceControlPolicyRestriction = string;
export interface InternalAccessDetails {
  action?: string[];
  condition?: { [key: string]: string | undefined };
  principal?: { [key: string]: string | undefined };
  principalOwnerAccount?: string;
  accessType?: string;
  principalType?: string;
  sources?: FindingSource[];
  resourceControlPolicyRestriction?: string;
  serviceControlPolicyRestriction?: string;
}
const InternalAccessDetails = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<InternalAccessDetails>;
export interface ExternalAccessDetails {
  action?: string[];
  condition: { [key: string]: string | undefined };
  isPublic?: boolean;
  principal?: { [key: string]: string | undefined };
  sources?: FindingSource[];
  resourceControlPolicyRestriction?: string;
}
const ExternalAccessDetails = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<ExternalAccessDetails>;
export interface UnusedAction {
  action: string;
  lastAccessed?: Date;
}
const UnusedAction = /*@__PURE__*/ __L.at(__c14, 5) as any as S.Schema<UnusedAction>;
export type UnusedActionList = UnusedAction[];
const UnusedActionList = /*@__PURE__*/ __L.at(__c14, 6);
export interface UnusedPermissionDetails {
  actions?: UnusedAction[];
  serviceNamespace: string;
  lastAccessed?: Date;
}
const UnusedPermissionDetails = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<UnusedPermissionDetails>;
export interface UnusedIamUserAccessKeyDetails {
  accessKeyId: string;
  lastAccessed?: Date;
}
const UnusedIamUserAccessKeyDetails = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<UnusedIamUserAccessKeyDetails>;
export interface UnusedIamRoleDetails {
  lastAccessed?: Date;
}
const UnusedIamRoleDetails = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<UnusedIamRoleDetails>;
export interface UnusedIamUserPasswordDetails {
  lastAccessed?: Date;
}
const UnusedIamUserPasswordDetails = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<UnusedIamUserPasswordDetails>;
export type FindingDetails =
  | {
      internalAccessDetails: InternalAccessDetails;
      externalAccessDetails?: never;
      unusedPermissionDetails?: never;
      unusedIamUserAccessKeyDetails?: never;
      unusedIamRoleDetails?: never;
      unusedIamUserPasswordDetails?: never;
    }
  | {
      internalAccessDetails?: never;
      externalAccessDetails: ExternalAccessDetails;
      unusedPermissionDetails?: never;
      unusedIamUserAccessKeyDetails?: never;
      unusedIamRoleDetails?: never;
      unusedIamUserPasswordDetails?: never;
    }
  | {
      internalAccessDetails?: never;
      externalAccessDetails?: never;
      unusedPermissionDetails: UnusedPermissionDetails;
      unusedIamUserAccessKeyDetails?: never;
      unusedIamRoleDetails?: never;
      unusedIamUserPasswordDetails?: never;
    }
  | {
      internalAccessDetails?: never;
      externalAccessDetails?: never;
      unusedPermissionDetails?: never;
      unusedIamUserAccessKeyDetails: UnusedIamUserAccessKeyDetails;
      unusedIamRoleDetails?: never;
      unusedIamUserPasswordDetails?: never;
    }
  | {
      internalAccessDetails?: never;
      externalAccessDetails?: never;
      unusedPermissionDetails?: never;
      unusedIamUserAccessKeyDetails?: never;
      unusedIamRoleDetails: UnusedIamRoleDetails;
      unusedIamUserPasswordDetails?: never;
    }
  | {
      internalAccessDetails?: never;
      externalAccessDetails?: never;
      unusedPermissionDetails?: never;
      unusedIamUserAccessKeyDetails?: never;
      unusedIamRoleDetails?: never;
      unusedIamUserPasswordDetails: UnusedIamUserPasswordDetails;
    };
const FindingDetails = /*@__PURE__*/ __L.at(__c15, 3);
export type FindingDetailsList = FindingDetails[];
const FindingDetailsList = /*@__PURE__*/ __L.at(__c15, 4);
export type FindingType = string;
export interface GetFindingV2Response {
  analyzedAt: Date;
  createdAt: Date;
  error?: string;
  id: string;
  nextToken?: string;
  resource?: string;
  resourceType: string;
  resourceOwnerAccount: string;
  status: string;
  updatedAt: Date;
  findingDetails: FindingDetails[];
  findingType?: string;
}
const GetFindingV2Response = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<GetFindingV2Response>;
export interface GetGeneratedPolicyRequest {
  jobId: string;
  includeResourcePlaceholders?: boolean;
  includeServiceLevelTemplate?: boolean;
}
const GetGeneratedPolicyRequest = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<GetGeneratedPolicyRequest>;
export type JobStatus = string;
export type JobErrorCode = string;
export interface JobError {
  code: string;
  message: string;
}
const JobError = RecommendationError as any as S.Schema<JobError>;
export interface JobDetails {
  jobId: string;
  status: string;
  startedOn: Date;
  completedOn?: Date;
  jobError?: JobError;
}
const JobDetails = /*@__PURE__*/ __L.at(__c15, 7) as any as S.Schema<JobDetails>;
export type PrincipalArn = string;
export type CloudTrailArn = string;
export type RegionList = string[];
const RegionList = ActionsList as any as S.Schema<RegionList>;
export interface TrailProperties {
  cloudTrailArn: string;
  regions?: string[];
  allRegions?: boolean;
}
const TrailProperties = /*@__PURE__*/ __L.at(__c16, 0) as any as S.Schema<TrailProperties>;
export type TrailPropertiesList = TrailProperties[];
const TrailPropertiesList = /*@__PURE__*/ __L.at(__c16, 1);
export interface CloudTrailProperties {
  trailProperties: TrailProperties[];
  startTime: Date;
  endTime: Date;
}
const CloudTrailProperties = /*@__PURE__*/ __L.at(
  __c16,
  2,
) as any as S.Schema<CloudTrailProperties>;
export interface GeneratedPolicyProperties {
  isComplete?: boolean;
  principalArn: string;
  cloudTrailProperties?: CloudTrailProperties;
}
const GeneratedPolicyProperties = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<GeneratedPolicyProperties>;
export interface GeneratedPolicy {
  policy: string;
}
const GeneratedPolicy = /*@__PURE__*/ __L.at(__c16, 4) as any as S.Schema<GeneratedPolicy>;
export type GeneratedPolicyList = GeneratedPolicy[];
const GeneratedPolicyList = /*@__PURE__*/ __L.at(__c16, 5);
export interface GeneratedPolicyResult {
  properties: GeneratedPolicyProperties;
  generatedPolicies?: GeneratedPolicy[];
}
const GeneratedPolicyResult = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<GeneratedPolicyResult>;
export interface GetGeneratedPolicyResponse {
  jobDetails: JobDetails;
  generatedPolicyResult: GeneratedPolicyResult;
}
const GetGeneratedPolicyResponse = /*@__PURE__*/ __L.at(
  __c16,
  7,
) as any as S.Schema<GetGeneratedPolicyResponse>;
export interface ListAccessPreviewFindingsRequest {
  accessPreviewId: string;
  analyzerArn: string;
  filter?: { [key: string]: Criterion | undefined };
  nextToken?: string;
  maxResults?: number;
}
const ListAccessPreviewFindingsRequest = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<ListAccessPreviewFindingsRequest>;
export type AccessPreviewFindingId = string;
export type FindingChangeType = string;
export interface AccessPreviewFinding {
  id: string;
  existingFindingId?: string;
  existingFindingStatus?: string;
  principal?: { [key: string]: string | undefined };
  action?: string[];
  condition?: { [key: string]: string | undefined };
  resource?: string;
  isPublic?: boolean;
  resourceType: string;
  createdAt: Date;
  changeType: string;
  status: string;
  resourceOwnerAccount: string;
  error?: string;
  sources?: FindingSource[];
  resourceControlPolicyRestriction?: string;
}
const AccessPreviewFinding = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<AccessPreviewFinding>;
export type AccessPreviewFindingsList = AccessPreviewFinding[];
const AccessPreviewFindingsList = /*@__PURE__*/ __L.at(__c17, 2);
export interface ListAccessPreviewFindingsResponse {
  findings: AccessPreviewFinding[];
  nextToken?: string;
}
const ListAccessPreviewFindingsResponse = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<ListAccessPreviewFindingsResponse>;
export interface ListAccessPreviewsRequest {
  analyzerArn: string;
  nextToken?: string;
  maxResults?: number;
}
const ListAccessPreviewsRequest = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<ListAccessPreviewsRequest>;
export interface AccessPreviewSummary {
  id: string;
  analyzerArn: string;
  createdAt: Date;
  status: string;
  statusReason?: AccessPreviewStatusReason;
}
const AccessPreviewSummary = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<AccessPreviewSummary>;
export type AccessPreviewsList = AccessPreviewSummary[];
const AccessPreviewsList = /*@__PURE__*/ __L.at(__c17, 6);
export interface ListAccessPreviewsResponse {
  accessPreviews: AccessPreviewSummary[];
  nextToken?: string;
}
const ListAccessPreviewsResponse = /*@__PURE__*/ __L.at(
  __c17,
  7,
) as any as S.Schema<ListAccessPreviewsResponse>;
export interface ListAnalyzedResourcesRequest {
  analyzerArn: string;
  resourceType?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListAnalyzedResourcesRequest = /*@__PURE__*/ __L.at(
  __c18,
  0,
) as any as S.Schema<ListAnalyzedResourcesRequest>;
export interface AnalyzedResourceSummary {
  resourceArn: string;
  resourceOwnerAccount: string;
  resourceType: string;
}
const AnalyzedResourceSummary = /*@__PURE__*/ __L.at(
  __c18,
  1,
) as any as S.Schema<AnalyzedResourceSummary>;
export type AnalyzedResourcesList = AnalyzedResourceSummary[];
const AnalyzedResourcesList = /*@__PURE__*/ __L.at(__c18, 2);
export interface ListAnalyzedResourcesResponse {
  analyzedResources: AnalyzedResourceSummary[];
  nextToken?: string;
}
const ListAnalyzedResourcesResponse = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<ListAnalyzedResourcesResponse>;
export interface ListAnalyzersRequest {
  nextToken?: string;
  maxResults?: number;
  type?: string;
}
const ListAnalyzersRequest = /*@__PURE__*/ __L.at(
  __c18,
  4,
) as any as S.Schema<ListAnalyzersRequest>;
export type AnalyzersList = AnalyzerSummary[];
const AnalyzersList = /*@__PURE__*/ __L.at(__c18, 5);
export interface ListAnalyzersResponse {
  analyzers: AnalyzerSummary[];
  nextToken?: string;
}
const ListAnalyzersResponse = /*@__PURE__*/ __L.at(
  __c18,
  6,
) as any as S.Schema<ListAnalyzersResponse>;
export interface ListArchiveRulesRequest {
  analyzerName: string;
  nextToken?: string;
  maxResults?: number;
}
const ListArchiveRulesRequest = /*@__PURE__*/ __L.at(
  __c18,
  7,
) as any as S.Schema<ListArchiveRulesRequest>;
export type ArchiveRulesList = ArchiveRuleSummary[];
const ArchiveRulesList = /*@__PURE__*/ __L.at(__c19, 0);
export interface ListArchiveRulesResponse {
  archiveRules: ArchiveRuleSummary[];
  nextToken?: string;
}
const ListArchiveRulesResponse = /*@__PURE__*/ __L.at(
  __c19,
  1,
) as any as S.Schema<ListArchiveRulesResponse>;
export type OrderBy = string;
export interface SortCriteria {
  attributeName?: string;
  orderBy?: string;
}
const SortCriteria = /*@__PURE__*/ __L.at(__c19, 2) as any as S.Schema<SortCriteria>;
export interface ListFindingsRequest {
  analyzerArn: string;
  filter?: { [key: string]: Criterion | undefined };
  sort?: SortCriteria;
  nextToken?: string;
  maxResults?: number;
}
const ListFindingsRequest = /*@__PURE__*/ __L.at(__c19, 3) as any as S.Schema<ListFindingsRequest>;
export interface FindingSummary {
  id: string;
  principal?: { [key: string]: string | undefined };
  action?: string[];
  resource?: string;
  isPublic?: boolean;
  resourceType: string;
  condition: { [key: string]: string | undefined };
  createdAt: Date;
  analyzedAt: Date;
  updatedAt: Date;
  status: string;
  resourceOwnerAccount: string;
  error?: string;
  sources?: FindingSource[];
  resourceControlPolicyRestriction?: string;
}
const FindingSummary = Finding as any as S.Schema<FindingSummary>;
export type FindingsList = FindingSummary[];
const FindingsList = /*@__PURE__*/ __L.at(__c19, 4);
export interface ListFindingsResponse {
  findings: FindingSummary[];
  nextToken?: string;
}
const ListFindingsResponse = /*@__PURE__*/ __L.at(
  __c19,
  5,
) as any as S.Schema<ListFindingsResponse>;
export interface ListFindingsV2Request {
  analyzerArn: string;
  filter?: { [key: string]: Criterion | undefined };
  maxResults?: number;
  nextToken?: string;
  sort?: SortCriteria;
}
const ListFindingsV2Request = /*@__PURE__*/ __L.at(
  __c19,
  6,
) as any as S.Schema<ListFindingsV2Request>;
export interface FindingSummaryV2 {
  analyzedAt: Date;
  createdAt: Date;
  error?: string;
  id: string;
  resource?: string;
  resourceType: string;
  resourceOwnerAccount: string;
  status: string;
  updatedAt: Date;
  findingType?: string;
}
const FindingSummaryV2 = /*@__PURE__*/ __L.at(__c19, 7) as any as S.Schema<FindingSummaryV2>;
export type FindingsListV2 = FindingSummaryV2[];
const FindingsListV2 = /*@__PURE__*/ __L.at(__c20, 0);
export interface ListFindingsV2Response {
  findings: FindingSummaryV2[];
  nextToken?: string;
}
const ListFindingsV2Response = /*@__PURE__*/ __L.at(
  __c20,
  1,
) as any as S.Schema<ListFindingsV2Response>;
export interface ListPolicyGenerationsRequest {
  principalArn?: string;
  maxResults?: number;
  nextToken?: string;
}
const ListPolicyGenerationsRequest = /*@__PURE__*/ __L.at(
  __c20,
  2,
) as any as S.Schema<ListPolicyGenerationsRequest>;
export interface PolicyGeneration {
  jobId: string;
  principalArn: string;
  status: string;
  startedOn: Date;
  completedOn?: Date;
}
const PolicyGeneration = /*@__PURE__*/ __L.at(__c20, 3) as any as S.Schema<PolicyGeneration>;
export type PolicyGenerationList = PolicyGeneration[];
const PolicyGenerationList = /*@__PURE__*/ __L.at(__c20, 4);
export interface ListPolicyGenerationsResponse {
  policyGenerations: PolicyGeneration[];
  nextToken?: string;
}
const ListPolicyGenerationsResponse = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<ListPolicyGenerationsResponse>;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c20,
  6,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c20,
  7,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface PolicyGenerationDetails {
  principalArn: string;
}
const PolicyGenerationDetails = /*@__PURE__*/ __L.at(
  __c21,
  0,
) as any as S.Schema<PolicyGenerationDetails>;
export interface Trail {
  cloudTrailArn: string;
  regions?: string[];
  allRegions?: boolean;
}
export type TrailList = Trail[];
const TrailList = TrailPropertiesList as any as S.Schema<TrailList>;
export type RoleArn = string;
export interface CloudTrailDetails {
  trails: Trail[];
  accessRole: string;
  startTime: Date;
  endTime?: Date;
}
const CloudTrailDetails = /*@__PURE__*/ __L.at(__c21, 1) as any as S.Schema<CloudTrailDetails>;
export interface StartPolicyGenerationRequest {
  policyGenerationDetails: PolicyGenerationDetails;
  cloudTrailDetails?: CloudTrailDetails;
  clientToken?: string;
}
const StartPolicyGenerationRequest = /*@__PURE__*/ __L.at(
  __c21,
  2,
) as any as S.Schema<StartPolicyGenerationRequest>;
export interface StartPolicyGenerationResponse {
  jobId: string;
}
const StartPolicyGenerationResponse = /*@__PURE__*/ __L.at(
  __c21,
  3,
) as any as S.Schema<StartPolicyGenerationResponse>;
export interface StartResourceScanRequest {
  analyzerArn: string;
  resourceArn: string;
  resourceOwnerAccount?: string;
}
const StartResourceScanRequest = /*@__PURE__*/ __L.at(
  __c21,
  4,
) as any as S.Schema<StartResourceScanRequest>;
export interface StartResourceScanResponse {}
const StartResourceScanResponse =
  ApplyArchiveRuleResponse as any as S.Schema<StartResourceScanResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c21, 5) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = ApplyArchiveRuleResponse as any as S.Schema<TagResourceResponse>;
export type TagKeys = string[];
const TagKeys = ActionsList as any as S.Schema<TagKeys>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c21,
  6,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = ApplyArchiveRuleResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateAnalyzerRequest {
  analyzerName: string;
  configuration?: AnalyzerConfiguration;
}
const UpdateAnalyzerRequest = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<UpdateAnalyzerRequest>;
export interface UpdateAnalyzerResponse {
  configuration?: AnalyzerConfiguration;
}
const UpdateAnalyzerResponse = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<UpdateAnalyzerResponse>;
export interface UpdateArchiveRuleRequest {
  analyzerName: string;
  ruleName: string;
  filter: { [key: string]: Criterion | undefined };
  clientToken?: string;
}
const UpdateArchiveRuleRequest = /*@__PURE__*/ __L.at(
  __c22,
  1,
) as any as S.Schema<UpdateArchiveRuleRequest>;
export interface UpdateArchiveRuleResponse {}
const UpdateArchiveRuleResponse =
  ApplyArchiveRuleResponse as any as S.Schema<UpdateArchiveRuleResponse>;
export type FindingStatusUpdate = string;
export type FindingIdList = string[];
const FindingIdList = ActionsList as any as S.Schema<FindingIdList>;
export interface UpdateFindingsRequest {
  analyzerArn: string;
  status: string;
  ids?: string[];
  resourceArn?: string;
  clientToken?: string;
}
const UpdateFindingsRequest = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<UpdateFindingsRequest>;
export interface UpdateFindingsResponse {}
const UpdateFindingsResponse = ApplyArchiveRuleResponse as any as S.Schema<UpdateFindingsResponse>;
export type Locale = string;
export type PolicyDocument = string;
export type PolicyType = string;
export type ValidatePolicyResourceType = string;
export interface ValidatePolicyRequest {
  locale?: string;
  maxResults?: number;
  nextToken?: string;
  policyDocument: string;
  policyType: string;
  validatePolicyResourceType?: string;
}
const ValidatePolicyRequest = /*@__PURE__*/ __L.at(
  __c22,
  3,
) as any as S.Schema<ValidatePolicyRequest>;
export type ValidatePolicyFindingType = string;
export type IssueCode = string;
export type LearnMoreLink = string;
export interface Substring {
  start: number;
  length: number;
}
const Substring = /*@__PURE__*/ __L.at(__c22, 4) as any as S.Schema<Substring>;
export type PathElement =
  | { index: number; key?: never; substring?: never; value?: never }
  | { index?: never; key: string; substring?: never; value?: never }
  | { index?: never; key?: never; substring: Substring; value?: never }
  | { index?: never; key?: never; substring?: never; value: string };
const PathElement = /*@__PURE__*/ __L.at(__c22, 5);
export type PathElementList = PathElement[];
const PathElementList = /*@__PURE__*/ __L.at(__c22, 6);
export interface Position {
  line: number;
  column: number;
  offset: number;
}
const Position = /*@__PURE__*/ __L.at(__c22, 7) as any as S.Schema<Position>;
export interface Span {
  start: Position;
  end: Position;
}
const Span = /*@__PURE__*/ __L.at(__c23, 0) as any as S.Schema<Span>;
export interface Location {
  path: PathElement[];
  span: Span;
}
const Location = /*@__PURE__*/ __L.at(__c23, 1) as any as S.Schema<Location>;
export type LocationList = Location[];
const LocationList = /*@__PURE__*/ __L.at(__c23, 2);
export interface ValidatePolicyFinding {
  findingDetails: string;
  findingType: string;
  issueCode: string;
  learnMoreLink: string;
  locations: Location[];
}
const ValidatePolicyFinding = /*@__PURE__*/ __L.at(
  __c23,
  3,
) as any as S.Schema<ValidatePolicyFinding>;
export type ValidatePolicyFindingList = ValidatePolicyFinding[];
const ValidatePolicyFindingList = /*@__PURE__*/ __L.at(__c23, 4);
export interface ValidatePolicyResponse {
  findings: ValidatePolicyFinding[];
  nextToken?: string;
}
const ValidatePolicyResponse = /*@__PURE__*/ __L.at(
  __c23,
  5,
) as any as S.Schema<ValidatePolicyResponse>;
export type ValidationExceptionReason = string;
export interface ValidationExceptionField {
  name: string;
  message: string;
}
const ValidationExceptionField = /*@__PURE__*/ __L.at(
  __c23,
  6,
) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
const ValidationExceptionFieldList = /*@__PURE__*/ __L.at(__c23, 7);
export type ApplyArchiveRuleError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retroactively applies the archive rule to existing findings that meet the archive rule criteria.
 */
export const applyArchiveRule: API.OperationMethod<
  ApplyArchiveRuleRequest,
  ApplyArchiveRuleResponse,
  ApplyArchiveRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ApplyArchiveRuleRequest,
  output: ApplyArchiveRuleResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ApplyArchiveRule",
}));

export type CancelPolicyGenerationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Cancels the requested policy generation.
 */
export const cancelPolicyGeneration: API.OperationMethod<
  CancelPolicyGenerationRequest,
  CancelPolicyGenerationResponse,
  CancelPolicyGenerationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelPolicyGenerationRequest,
  output: CancelPolicyGenerationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelPolicyGeneration",
}));

export type CheckAccessNotGrantedError =
  | AccessDeniedException
  | InternalServerException
  | InvalidParameterException
  | ThrottlingException
  | UnprocessableEntityException
  | ValidationException
  | CommonErrors;
/**
 * Checks whether the specified access isn't allowed by a policy.
 */
export const checkAccessNotGranted: API.OperationMethod<
  CheckAccessNotGrantedRequest,
  CheckAccessNotGrantedResponse,
  CheckAccessNotGrantedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CheckAccessNotGrantedRequest,
  output: CheckAccessNotGrantedResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    InvalidParameterException,
    ThrottlingException,
    UnprocessableEntityException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CheckAccessNotGranted",
}));

export type CheckNoNewAccessError =
  | AccessDeniedException
  | InternalServerException
  | InvalidParameterException
  | ThrottlingException
  | UnprocessableEntityException
  | ValidationException
  | CommonErrors;
/**
 * Checks whether new access is allowed for an updated policy when compared to the existing policy.
 *
 * You can find examples for reference policies and learn how to set up and run a custom policy check for new access in the IAM Access Analyzer custom policy checks samples repository on GitHub. The reference policies in this repository are meant to be passed to the `existingPolicyDocument` request parameter.
 */
export const checkNoNewAccess: API.OperationMethod<
  CheckNoNewAccessRequest,
  CheckNoNewAccessResponse,
  CheckNoNewAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CheckNoNewAccessRequest,
  output: CheckNoNewAccessResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    InvalidParameterException,
    ThrottlingException,
    UnprocessableEntityException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CheckNoNewAccess",
}));

export type CheckNoPublicAccessError =
  | AccessDeniedException
  | InternalServerException
  | InvalidParameterException
  | ThrottlingException
  | UnprocessableEntityException
  | ValidationException
  | CommonErrors;
/**
 * Checks whether a resource policy can grant public access to the specified resource type.
 */
export const checkNoPublicAccess: API.OperationMethod<
  CheckNoPublicAccessRequest,
  CheckNoPublicAccessResponse,
  CheckNoPublicAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CheckNoPublicAccessRequest,
  output: CheckNoPublicAccessResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    InvalidParameterException,
    ThrottlingException,
    UnprocessableEntityException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CheckNoPublicAccess",
}));

export type CreateAccessPreviewError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an access preview that allows you to preview IAM Access Analyzer findings for your resource before deploying resource permissions.
 */
export const createAccessPreview: API.OperationMethod<
  CreateAccessPreviewRequest,
  CreateAccessPreviewResponse,
  CreateAccessPreviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAccessPreviewRequest,
  output: CreateAccessPreviewResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAccessPreview",
}));

export type CreateAnalyzerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an analyzer for your account.
 */
export const createAnalyzer: API.OperationMethod<
  CreateAnalyzerRequest,
  CreateAnalyzerResponse,
  CreateAnalyzerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAnalyzerRequest,
  output: CreateAnalyzerResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAnalyzer",
}));

export type CreateArchiveRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an archive rule for the specified analyzer. Archive rules automatically archive new findings that meet the criteria you define when you create the rule.
 *
 * To learn about filter keys that you can use to create an archive rule, see IAM Access Analyzer filter keys in the **IAM User Guide**.
 */
export const createArchiveRule: API.OperationMethod<
  CreateArchiveRuleRequest,
  CreateArchiveRuleResponse,
  CreateArchiveRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateArchiveRuleRequest,
  output: CreateArchiveRuleResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateArchiveRule",
}));

export type CreateServiceLinkedAnalyzerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a service-linked analyzer managed by an Amazon Web Services service. This operation can only be invoked by authorized Amazon Web Services services. Direct customer invocation returns `AccessDeniedException`.
 *
 * Service-linked analyzers enable Amazon Web Services services to create and manage analyzers on behalf of customers. The lifecycle of these analyzers is managed by the calling service.
 */
export const createServiceLinkedAnalyzer: API.OperationMethod<
  CreateServiceLinkedAnalyzerRequest,
  CreateServiceLinkedAnalyzerResponse,
  CreateServiceLinkedAnalyzerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateServiceLinkedAnalyzerRequest,
  output: CreateServiceLinkedAnalyzerResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateServiceLinkedAnalyzer",
}));

export type DeleteAnalyzerError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified analyzer. When you delete an analyzer, IAM Access Analyzer is disabled for the account or organization in the current or specific Region. All findings that were generated by the analyzer are deleted. You cannot undo this action.
 */
export const deleteAnalyzer: API.OperationMethod<
  DeleteAnalyzerRequest,
  DeleteAnalyzerResponse,
  DeleteAnalyzerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAnalyzerRequest,
  output: DeleteAnalyzerResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAnalyzer",
}));

export type DeleteArchiveRuleError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified archive rule.
 */
export const deleteArchiveRule: API.OperationMethod<
  DeleteArchiveRuleRequest,
  DeleteArchiveRuleResponse,
  DeleteArchiveRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteArchiveRuleRequest,
  output: DeleteArchiveRuleResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteArchiveRule",
}));

export type DeleteServiceLinkedAnalyzerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a service-linked analyzer. This operation can be invoked by both authorized Amazon Web Services services and customers.
 *
 * When invoked by a customer, IAM Access Analyzer performs a callback to the managing service to verify whether the analyzer is still in use and can be deleted. If the service indicates the analyzer is still in use, the deletion is rejected with `ConflictException`.
 */
export const deleteServiceLinkedAnalyzer: API.OperationMethod<
  DeleteServiceLinkedAnalyzerRequest,
  DeleteServiceLinkedAnalyzerResponse,
  DeleteServiceLinkedAnalyzerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteServiceLinkedAnalyzerRequest,
  output: DeleteServiceLinkedAnalyzerResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteServiceLinkedAnalyzer",
}));

export type GenerateFindingRecommendationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a recommendation for an unused permissions finding.
 */
export const generateFindingRecommendation: API.OperationMethod<
  GenerateFindingRecommendationRequest,
  GenerateFindingRecommendationResponse,
  GenerateFindingRecommendationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GenerateFindingRecommendationRequest,
  output: GenerateFindingRecommendationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GenerateFindingRecommendation",
}));

export type GetAccessPreviewError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about an access preview for the specified analyzer.
 */
export const getAccessPreview: API.OperationMethod<
  GetAccessPreviewRequest,
  GetAccessPreviewResponse,
  GetAccessPreviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccessPreviewRequest,
  output: GetAccessPreviewResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccessPreview",
}));

export type GetAnalyzedResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a resource that was analyzed.
 *
 * This action is supported only for external access analyzers.
 */
export const getAnalyzedResource: API.OperationMethod<
  GetAnalyzedResourceRequest,
  GetAnalyzedResourceResponse,
  GetAnalyzedResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAnalyzedResourceRequest,
  output: GetAnalyzedResourceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAnalyzedResource",
}));

export type GetAnalyzerError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the specified analyzer.
 */
export const getAnalyzer: API.OperationMethod<
  GetAnalyzerRequest,
  GetAnalyzerResponse,
  GetAnalyzerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAnalyzerRequest,
  output: GetAnalyzerResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAnalyzer",
}));

export type GetArchiveRuleError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about an archive rule.
 *
 * To learn about filter keys that you can use to create an archive rule, see IAM Access Analyzer filter keys in the **IAM User Guide**.
 */
export const getArchiveRule: API.OperationMethod<
  GetArchiveRuleRequest,
  GetArchiveRuleResponse,
  GetArchiveRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetArchiveRuleRequest,
  output: GetArchiveRuleResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetArchiveRule",
}));

export type GetFindingError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the specified finding. GetFinding and GetFindingV2 both use `access-analyzer:GetFinding` in the `Action` element of an IAM policy statement. You must have permission to perform the `access-analyzer:GetFinding` action.
 *
 * GetFinding is supported only for external access analyzers. You must use GetFindingV2 for internal and unused access analyzers.
 */
export const getFinding: API.OperationMethod<
  GetFindingRequest,
  GetFindingResponse,
  GetFindingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFindingRequest,
  output: GetFindingResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFinding",
}));

export type GetFindingRecommendationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a finding recommendation for the specified analyzer.
 */
export const getFindingRecommendation: API.PaginatedOperationMethod<
  GetFindingRecommendationRequest,
  GetFindingRecommendationResponse,
  GetFindingRecommendationError,
  Credentials | HttpClient.HttpClient,
  RecommendedStep
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetFindingRecommendationRequest,
  output: GetFindingRecommendationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFindingRecommendation",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "recommendedSteps",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetFindingsStatisticsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of aggregated finding statistics for an external access or unused access analyzer.
 */
export const getFindingsStatistics: API.OperationMethod<
  GetFindingsStatisticsRequest,
  GetFindingsStatisticsResponse,
  GetFindingsStatisticsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFindingsStatisticsRequest,
  output: GetFindingsStatisticsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFindingsStatistics",
}));

export type GetFindingV2Error =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the specified finding. GetFinding and GetFindingV2 both use `access-analyzer:GetFinding` in the `Action` element of an IAM policy statement. You must have permission to perform the `access-analyzer:GetFinding` action.
 */
export const getFindingV2: API.PaginatedOperationMethod<
  GetFindingV2Request,
  GetFindingV2Response,
  GetFindingV2Error,
  Credentials | HttpClient.HttpClient,
  FindingDetails
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetFindingV2Request,
  output: GetFindingV2Response,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFindingV2",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "findingDetails",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetGeneratedPolicyError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the policy that was generated using `StartPolicyGeneration`.
 */
export const getGeneratedPolicy: API.OperationMethod<
  GetGeneratedPolicyRequest,
  GetGeneratedPolicyResponse,
  GetGeneratedPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetGeneratedPolicyRequest,
  output: GetGeneratedPolicyResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGeneratedPolicy",
}));

export type ListAccessPreviewFindingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of access preview findings generated by the specified access preview.
 */
export const listAccessPreviewFindings: API.PaginatedOperationMethod<
  ListAccessPreviewFindingsRequest,
  ListAccessPreviewFindingsResponse,
  ListAccessPreviewFindingsError,
  Credentials | HttpClient.HttpClient,
  AccessPreviewFinding
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccessPreviewFindingsRequest,
  output: ListAccessPreviewFindingsResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccessPreviewFindings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "findings",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAccessPreviewsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of access previews for the specified analyzer.
 */
export const listAccessPreviews: API.PaginatedOperationMethod<
  ListAccessPreviewsRequest,
  ListAccessPreviewsResponse,
  ListAccessPreviewsError,
  Credentials | HttpClient.HttpClient,
  AccessPreviewSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccessPreviewsRequest,
  output: ListAccessPreviewsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccessPreviews",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "accessPreviews",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAnalyzedResourcesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of resources of the specified type that have been analyzed by the specified analyzer.
 */
export const listAnalyzedResources: API.PaginatedOperationMethod<
  ListAnalyzedResourcesRequest,
  ListAnalyzedResourcesResponse,
  ListAnalyzedResourcesError,
  Credentials | HttpClient.HttpClient,
  AnalyzedResourceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAnalyzedResourcesRequest,
  output: ListAnalyzedResourcesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAnalyzedResources",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "analyzedResources",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAnalyzersError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of analyzers.
 */
export const listAnalyzers: API.PaginatedOperationMethod<
  ListAnalyzersRequest,
  ListAnalyzersResponse,
  ListAnalyzersError,
  Credentials | HttpClient.HttpClient,
  AnalyzerSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAnalyzersRequest,
  output: ListAnalyzersResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAnalyzers",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "analyzers",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListArchiveRulesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of archive rules created for the specified analyzer.
 */
export const listArchiveRules: API.PaginatedOperationMethod<
  ListArchiveRulesRequest,
  ListArchiveRulesResponse,
  ListArchiveRulesError,
  Credentials | HttpClient.HttpClient,
  ArchiveRuleSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListArchiveRulesRequest,
  output: ListArchiveRulesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListArchiveRules",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "archiveRules",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFindingsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of findings generated by the specified analyzer. ListFindings and ListFindingsV2 both use `access-analyzer:ListFindings` in the `Action` element of an IAM policy statement. You must have permission to perform the `access-analyzer:ListFindings` action.
 *
 * To learn about filter keys that you can use to retrieve a list of findings, see IAM Access Analyzer filter keys in the **IAM User Guide**.
 *
 * ListFindings is supported only for external access analyzers. You must use ListFindingsV2 for internal and unused access analyzers.
 */
export const listFindings: API.PaginatedOperationMethod<
  ListFindingsRequest,
  ListFindingsResponse,
  ListFindingsError,
  Credentials | HttpClient.HttpClient,
  FindingSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFindingsRequest,
  output: ListFindingsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFindings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "findings",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFindingsV2Error =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of findings generated by the specified analyzer. ListFindings and ListFindingsV2 both use `access-analyzer:ListFindings` in the `Action` element of an IAM policy statement. You must have permission to perform the `access-analyzer:ListFindings` action.
 *
 * To learn about filter keys that you can use to retrieve a list of findings, see IAM Access Analyzer filter keys in the **IAM User Guide**.
 */
export const listFindingsV2: API.PaginatedOperationMethod<
  ListFindingsV2Request,
  ListFindingsV2Response,
  ListFindingsV2Error,
  Credentials | HttpClient.HttpClient,
  FindingSummaryV2
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFindingsV2Request,
  output: ListFindingsV2Response,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFindingsV2",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "findings",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPolicyGenerationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all of the policy generations requested in the last seven days.
 */
export const listPolicyGenerations: API.PaginatedOperationMethod<
  ListPolicyGenerationsRequest,
  ListPolicyGenerationsResponse,
  ListPolicyGenerationsError,
  Credentials | HttpClient.HttpClient,
  PolicyGeneration
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPolicyGenerationsRequest,
  output: ListPolicyGenerationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPolicyGenerations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "policyGenerations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of tags applied to the specified resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type StartPolicyGenerationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts the policy generation request.
 */
export const startPolicyGeneration: API.OperationMethod<
  StartPolicyGenerationRequest,
  StartPolicyGenerationResponse,
  StartPolicyGenerationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartPolicyGenerationRequest,
  output: StartPolicyGenerationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartPolicyGeneration",
}));

export type StartResourceScanError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Immediately starts a scan of the policies applied to the specified resource.
 *
 * This action is supported only for external access analyzers.
 */
export const startResourceScan: API.OperationMethod<
  StartResourceScanRequest,
  StartResourceScanResponse,
  StartResourceScanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartResourceScanRequest,
  output: StartResourceScanResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartResourceScan",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds a tag to the specified resource.
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
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes a tag from the specified resource.
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
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAnalyzerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Modifies the configuration of an existing analyzer.
 *
 * This action is not supported for external access analyzers.
 */
export const updateAnalyzer: API.OperationMethod<
  UpdateAnalyzerRequest,
  UpdateAnalyzerResponse,
  UpdateAnalyzerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAnalyzerRequest,
  output: UpdateAnalyzerResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAnalyzer",
}));

export type UpdateArchiveRuleError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the criteria and values for the specified archive rule.
 */
export const updateArchiveRule: API.OperationMethod<
  UpdateArchiveRuleRequest,
  UpdateArchiveRuleResponse,
  UpdateArchiveRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateArchiveRuleRequest,
  output: UpdateArchiveRuleResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateArchiveRule",
}));

export type UpdateFindingsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the status for the specified findings.
 */
export const updateFindings: API.OperationMethod<
  UpdateFindingsRequest,
  UpdateFindingsResponse,
  UpdateFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateFindingsRequest,
  output: UpdateFindingsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFindings",
}));

export type ValidatePolicyError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Requests the validation of a policy and returns a list of findings. The findings help you identify issues and provide actionable recommendations to resolve the issue and enable you to author functional policies that meet security best practices.
 */
export const validatePolicy: API.PaginatedOperationMethod<
  ValidatePolicyRequest,
  ValidatePolicyResponse,
  ValidatePolicyError,
  Credentials | HttpClient.HttpClient,
  ValidatePolicyFinding
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ValidatePolicyRequest,
  output: ValidatePolicyResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ValidatePolicy",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "findings",
    pageSize: "maxResults",
  } as const,
})) as any;

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          analyzerArn: S.String,
          ruleName: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/archive-rule" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ApplyArchiveRuleRequest" });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "ApplyArchiveRuleResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ jobId: S.String.pipe(T.HttpLabel("jobId")) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/policy/generation/{jobId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CancelPolicyGenerationRequest",
      });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({ actions: S.optional(ActionsList), resources: S.optional(ResourcesList) }),
      ).annotate({ identifier: "Access" });
    case 5:
      return S.Array(Access);
    case 6:
      return S.suspend(() =>
        S.Struct({
          policyDocument: SensitiveString,
          access: AccessList,
          policyType: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/policy/check-access-not-granted" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CheckAccessNotGrantedRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          description: S.optional(S.String),
          statementIndex: S.optional(S.Number),
          statementId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ReasonSummary" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ReasonSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          result: S.optional(S.String),
          message: S.optional(S.String),
          reasons: S.optional(ReasonSummaryList),
        }),
      ).annotate({
        identifier: "CheckAccessNotGrantedResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          newPolicyDocument: SensitiveString,
          existingPolicyDocument: SensitiveString,
          policyType: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/policy/check-no-new-access" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CheckNoNewAccessRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          result: S.optional(S.String),
          message: S.optional(S.String),
          reasons: S.optional(ReasonSummaryList),
        }),
      ).annotate({ identifier: "CheckNoNewAccessResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ policyDocument: SensitiveString, resourceType: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/policy/check-no-public-access" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CheckNoPublicAccessRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          userIds: S.optional(EbsUserIdList),
          groups: S.optional(EbsGroupList),
          kmsKeyId: S.optional(S.String),
        }),
      ).annotate({ identifier: "EbsSnapshotConfiguration" });
    case 6:
      return S.suspend(() => S.Struct({ repositoryPolicy: S.optional(S.String) })).annotate({
        identifier: "EcrRepositoryConfiguration",
      });
    case 7:
      return S.suspend(() => S.Struct({ trustPolicy: S.optional(S.String) })).annotate({
        identifier: "IamRoleConfiguration",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ fileSystemPolicy: S.optional(S.String) })).annotate({
        identifier: "EfsFileSystemConfiguration",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          encryptionContextEquals: S.optional(KmsConstraintsMap),
          encryptionContextSubset: S.optional(KmsConstraintsMap),
        }),
      ).annotate({ identifier: "KmsGrantConstraints" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          operations: KmsGrantOperationsList,
          granteePrincipal: S.String,
          retiringPrincipal: S.optional(S.String),
          constraints: S.optional(KmsGrantConstraints),
          issuingAccount: S.String,
        }),
      ).annotate({ identifier: "KmsGrantConfiguration" });
    case 4:
      return S.Array(KmsGrantConfiguration);
    case 5:
      return S.suspend(() =>
        S.Struct({
          keyPolicies: S.optional(KmsKeyPoliciesMap),
          grants: S.optional(KmsGrantConfigurationsList),
        }),
      ).annotate({ identifier: "KmsKeyConfiguration" });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ accountIds: RdsDbClusterSnapshotAccountIdsList })]);
    case 7:
      return S.Record(S.String, /*@__PURE__*/ RdsDbClusterSnapshotAttributeValue.pipe(S.optional));
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          attributes: S.optional(RdsDbClusterSnapshotAttributesMap),
          kmsKeyId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RdsDbClusterSnapshotConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          attributes: S.optional(RdsDbSnapshotAttributesMap),
          kmsKeyId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RdsDbSnapshotConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ kmsKeyId: S.optional(S.String), secretPolicy: S.optional(S.String) }),
      ).annotate({
        identifier: "SecretsManagerSecretConfiguration",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ id: S.String }),
        /*@__PURE__*/ S.Struct({ uri: S.String }),
      ]);
    case 4:
      return S.suspend(() => S.Struct({ permission: S.String, grantee: AclGrantee })).annotate({
        identifier: "S3BucketAclGrantConfiguration",
      });
    case 5:
      return S.Array(S3BucketAclGrantConfiguration);
    case 6:
      return S.suspend(() =>
        S.Struct({ ignorePublicAcls: S.Boolean, restrictPublicBuckets: S.Boolean }),
      ).annotate({
        identifier: "S3PublicAccessBlockConfiguration",
      });
    case 7:
      return S.suspend(() => S.Struct({ vpcId: S.String })).annotate({
        identifier: "VpcConfiguration",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ vpcConfiguration: VpcConfiguration }),
        /*@__PURE__*/ S.Struct({ internetConfiguration: InternetConfiguration }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          accessPointPolicy: S.optional(S.String),
          publicAccessBlock: S.optional(S3PublicAccessBlockConfiguration),
          networkOrigin: S.optional(NetworkOriginConfiguration),
        }),
      ).annotate({
        identifier: "S3AccessPointConfiguration",
      });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S3AccessPointConfiguration.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          bucketPolicy: S.optional(S.String),
          bucketAclGrants: S.optional(S3BucketAclGrantConfigurationsList),
          bucketPublicAccessBlock: S.optional(S3PublicAccessBlockConfiguration),
          accessPoints: S.optional(S3AccessPointConfigurationsMap),
        }),
      ).annotate({ identifier: "S3BucketConfiguration" });
    case 4:
      return S.suspend(() => S.Struct({ topicPolicy: S.optional(S.String) })).annotate({
        identifier: "SnsTopicConfiguration",
      });
    case 5:
      return S.suspend(() => S.Struct({ queuePolicy: S.optional(S.String) })).annotate({
        identifier: "SqsQueueConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          accessPointPolicy: S.optional(S.String),
          networkOrigin: S.optional(NetworkOriginConfiguration),
        }),
      ).annotate({
        identifier: "S3ExpressDirectoryAccessPointConfiguration",
      });
    case 7:
      return S.Record(
        S.String,
        /*@__PURE__*/ S3ExpressDirectoryAccessPointConfiguration.pipe(S.optional),
      );
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          bucketPolicy: S.optional(S.String),
          accessPoints: S.optional(S3ExpressDirectoryAccessPointConfigurationsMap),
        }),
      ).annotate({
        identifier: "S3ExpressDirectoryBucketConfiguration",
      });
    case 1:
      return S.suspend(() => S.Struct({ streamPolicy: S.optional(S.String) })).annotate({
        identifier: "DynamodbStreamConfiguration",
      });
    case 2:
      return S.suspend(() => S.Struct({ tablePolicy: S.optional(S.String) })).annotate({
        identifier: "DynamodbTableConfiguration",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ ebsSnapshot: EbsSnapshotConfiguration }),
        /*@__PURE__*/ S.Struct({ ecrRepository: EcrRepositoryConfiguration }),
        /*@__PURE__*/ S.Struct({ iamRole: IamRoleConfiguration }),
        /*@__PURE__*/ S.Struct({ efsFileSystem: EfsFileSystemConfiguration }),
        /*@__PURE__*/ S.Struct({ kmsKey: KmsKeyConfiguration }),
        /*@__PURE__*/ S.Struct({ rdsDbClusterSnapshot: RdsDbClusterSnapshotConfiguration }),
        /*@__PURE__*/ S.Struct({ rdsDbSnapshot: RdsDbSnapshotConfiguration }),
        /*@__PURE__*/ S.Struct({ secretsManagerSecret: SecretsManagerSecretConfiguration }),
        /*@__PURE__*/ S.Struct({ s3Bucket: S3BucketConfiguration }),
        /*@__PURE__*/ S.Struct({ snsTopic: SnsTopicConfiguration }),
        /*@__PURE__*/ S.Struct({ sqsQueue: SqsQueueConfiguration }),
        /*@__PURE__*/ S.Struct({ s3ExpressDirectoryBucket: S3ExpressDirectoryBucketConfiguration }),
        /*@__PURE__*/ S.Struct({ dynamodbStream: DynamodbStreamConfiguration }),
        /*@__PURE__*/ S.Struct({ dynamodbTable: DynamodbTableConfiguration }),
      ]);
    case 4:
      return S.Record(S.String, /*@__PURE__*/ Configuration.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          analyzerArn: S.String,
          configurations: ConfigurationsMap,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/access-preview" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateAccessPreviewRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ id: S.String })).annotate({
        identifier: "CreateAccessPreviewResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          eq: S.optional(ValueList),
          neq: S.optional(ValueList),
          contains: S.optional(ValueList),
          exists: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Criterion" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ Criterion.pipe(S.optional));
    case 1:
      return S.suspend(() => S.Struct({ ruleName: S.String, filter: FilterCriteriaMap })).annotate({
        identifier: "InlineArchiveRule",
      });
    case 2:
      return S.Array(InlineArchiveRule);
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.Array(TagsMap);
    case 5:
      return S.suspend(() =>
        S.Struct({ accountIds: S.optional(AccountIdsList), resourceTags: S.optional(TagsList) }),
      ).annotate({ identifier: "AnalysisRuleCriteria" });
    case 6:
      return S.Array(AnalysisRuleCriteria);
    case 7:
      return S.suspend(() =>
        S.Struct({ exclusions: S.optional(AnalysisRuleCriteriaList) }),
      ).annotate({ identifier: "AnalysisRule" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ unusedAccessAge: S.optional(S.Number), analysisRule: S.optional(AnalysisRule) }),
      ).annotate({
        identifier: "UnusedAccessConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          accountIds: S.optional(AccountIdsList),
          resourceTypes: S.optional(ResourceTypeList),
          resourceArns: S.optional(ResourceArnsList),
        }),
      ).annotate({
        identifier: "InternalAccessAnalysisRuleCriteria",
      });
    case 2:
      return S.Array(InternalAccessAnalysisRuleCriteria);
    case 3:
      return S.suspend(() =>
        S.Struct({ inclusions: S.optional(InternalAccessAnalysisRuleCriteriaList) }),
      ).annotate({
        identifier: "InternalAccessAnalysisRule",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ analysisRule: S.optional(InternalAccessAnalysisRule) }),
      ).annotate({
        identifier: "InternalAccessConfiguration",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ unusedAccess: UnusedAccessConfiguration }),
        /*@__PURE__*/ S.Struct({ internalAccess: InternalAccessConfiguration }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          analyzerName: S.String,
          type: S.String,
          archiveRules: S.optional(InlineArchiveRulesList),
          tags: S.optional(TagsMap),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          configuration: S.optional(AnalyzerConfiguration),
        }).pipe(T.all(T.Http({ method: "PUT", uri: "/analyzer" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateAnalyzerRequest" });
    case 7:
      return S.suspend(() => S.Struct({ arn: S.optional(S.String) })).annotate({
        identifier: "CreateAnalyzerResponse",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          analyzerName: S.String.pipe(T.HttpLabel("analyzerName")),
          ruleName: S.String,
          filter: FilterCriteriaMap,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/analyzer/{analyzerName}/archive-rule" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateArchiveRuleRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          archiveRules: S.optional(InlineArchiveRulesList),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          configuration: S.optional(AnalyzerConfiguration),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/service-linked-analyzer" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateServiceLinkedAnalyzerRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ arn: S.optional(S.String) })).annotate({
        identifier: "CreateServiceLinkedAnalyzerResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          analyzerName: S.String.pipe(T.HttpLabel("analyzerName")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/analyzer/{analyzerName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAnalyzerRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          analyzerName: S.String.pipe(T.HttpLabel("analyzerName")),
          ruleName: S.String.pipe(T.HttpLabel("ruleName")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/analyzer/{analyzerName}/archive-rule/{ruleName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteArchiveRuleRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          analyzerName: S.String.pipe(T.HttpLabel("analyzerName")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/service-linked-analyzer/{analyzerName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteServiceLinkedAnalyzerRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteServiceLinkedAnalyzerResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          analyzerArn: S.String.pipe(T.HttpQuery("analyzerArn")),
          id: S.String.pipe(T.HttpLabel("id")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/recommendation/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GenerateFindingRecommendationRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          accessPreviewId: S.String.pipe(T.HttpLabel("accessPreviewId")),
          analyzerArn: S.String.pipe(T.HttpQuery("analyzerArn")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/access-preview/{accessPreviewId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAccessPreviewRequest" });
    case 1:
      return S.suspend(() => S.Struct({ code: S.String })).annotate({
        identifier: "AccessPreviewStatusReason",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          analyzerArn: S.String,
          configurations: ConfigurationsMap,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
          statusReason: S.optional(AccessPreviewStatusReason),
        }),
      ).annotate({ identifier: "AccessPreview" });
    case 3:
      return S.suspend(() => S.Struct({ accessPreview: AccessPreview })).annotate({
        identifier: "GetAccessPreviewResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          analyzerArn: S.String.pipe(T.HttpQuery("analyzerArn")),
          resourceArn: S.String.pipe(T.HttpQuery("resourceArn")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/analyzed-resource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetAnalyzedResourceRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String,
          resourceType: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          analyzedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          isPublic: S.Boolean,
          actions: S.optional(ActionList),
          sharedVia: S.optional(SharedViaList),
          status: S.optional(S.String),
          resourceOwnerAccount: S.String,
          error: S.optional(S.String),
        }),
      ).annotate({ identifier: "AnalyzedResource" });
    case 6:
      return S.suspend(() => S.Struct({ resource: S.optional(AnalyzedResource) })).annotate({
        identifier: "GetAnalyzedResourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ analyzerName: S.String.pipe(T.HttpLabel("analyzerName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/analyzer/{analyzerName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAnalyzerRequest" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ code: S.String })).annotate({
        identifier: "StatusReason",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.String,
          type: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastResourceAnalyzed: S.optional(S.String),
          lastResourceAnalyzedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          tags: S.optional(TagsMap),
          status: S.String,
          statusReason: S.optional(StatusReason),
          configuration: S.optional(AnalyzerConfiguration),
          managedBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "AnalyzerSummary" });
    case 2:
      return S.suspend(() => S.Struct({ analyzer: AnalyzerSummary })).annotate({
        identifier: "GetAnalyzerResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          analyzerName: S.String.pipe(T.HttpLabel("analyzerName")),
          ruleName: S.String.pipe(T.HttpLabel("ruleName")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/analyzer/{analyzerName}/archive-rule/{ruleName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetArchiveRuleRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ruleName: S.String,
          filter: FilterCriteriaMap,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "ArchiveRuleSummary" });
    case 5:
      return S.suspend(() => S.Struct({ archiveRule: ArchiveRuleSummary })).annotate({
        identifier: "GetArchiveRuleResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          analyzerArn: S.String.pipe(T.HttpQuery("analyzerArn")),
          id: S.String.pipe(T.HttpLabel("id")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/finding/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetFindingRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          accessPointArn: S.optional(S.String),
          accessPointAccount: S.optional(S.String),
        }),
      ).annotate({ identifier: "FindingSourceDetail" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ type: S.String, detail: S.optional(FindingSourceDetail) }),
      ).annotate({ identifier: "FindingSource" });
    case 1:
      return S.Array(FindingSource);
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          principal: S.optional(PrincipalMap),
          action: S.optional(ActionList),
          resource: S.optional(S.String),
          isPublic: S.optional(S.Boolean),
          resourceType: S.String,
          condition: ConditionKeyMap,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          analyzedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
          resourceOwnerAccount: S.String,
          error: S.optional(S.String),
          sources: S.optional(FindingSourceList),
          resourceControlPolicyRestriction: S.optional(S.String),
        }),
      ).annotate({ identifier: "Finding" });
    case 3:
      return S.suspend(() => S.Struct({ finding: S.optional(Finding) })).annotate({
        identifier: "GetFindingResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          analyzerArn: S.String.pipe(T.HttpQuery("analyzerArn")),
          id: S.String.pipe(T.HttpLabel("id")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/recommendation/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetFindingRecommendationRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ code: S.String, message: S.String })).annotate({
        identifier: "RecommendationError",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          policyUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          recommendedAction: S.String,
          recommendedPolicy: S.optional(S.String),
          existingPolicyId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UnusedPermissionsRecommendedStep",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          unusedPermissionsRecommendedStep: UnusedPermissionsRecommendedStep,
        }),
      ]);
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(RecommendedStep);
    case 1:
      return S.suspend(() =>
        S.Struct({
          startedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          completedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          nextToken: S.optional(S.String),
          error: S.optional(RecommendationError),
          resourceArn: S.String,
          recommendedSteps: S.optional(RecommendedStepList),
          recommendationType: S.String,
          status: S.String,
        }),
      ).annotate({
        identifier: "GetFindingRecommendationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ analyzerArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/analyzer/findings/statistics" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetFindingsStatisticsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          totalActivePublic: S.optional(S.Number),
          totalActiveCrossAccount: S.optional(S.Number),
          totalActiveErrors: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ResourceTypeDetails" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ ResourceTypeDetails.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceTypeStatistics: S.optional(ResourceTypeStatisticsMap),
          totalActiveFindings: S.optional(S.Number),
          totalArchivedFindings: S.optional(S.Number),
          totalResolvedFindings: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ExternalAccessFindingsStatistics",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          totalActiveFindings: S.optional(S.Number),
          totalResolvedFindings: S.optional(S.Number),
          totalArchivedFindings: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "InternalAccessResourceTypeDetails",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ InternalAccessResourceTypeDetails.pipe(S.optional));
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          resourceTypeStatistics: S.optional(InternalAccessResourceTypeStatisticsMap),
          totalActiveFindings: S.optional(S.Number),
          totalArchivedFindings: S.optional(S.Number),
          totalResolvedFindings: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "InternalAccessFindingsStatistics",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ unusedAccessType: S.optional(S.String), total: S.optional(S.Number) }),
      ).annotate({
        identifier: "UnusedAccessTypeStatistics",
      });
    case 2:
      return S.Array(UnusedAccessTypeStatistics);
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.Number.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          account: S.optional(S.String),
          numberOfActiveFindings: S.optional(S.Number),
          details: S.optional(FindingAggregationAccountDetailsMap),
        }),
      ).annotate({
        identifier: "FindingAggregationAccountDetails",
      });
    case 5:
      return S.Array(FindingAggregationAccountDetails);
    case 6:
      return S.suspend(() =>
        S.Struct({
          unusedAccessTypeStatistics: S.optional(UnusedAccessTypeStatisticsList),
          topAccounts: S.optional(AccountAggregations),
          totalActiveFindings: S.optional(S.Number),
          totalArchivedFindings: S.optional(S.Number),
          totalResolvedFindings: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "UnusedAccessFindingsStatistics",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          externalAccessFindingsStatistics: ExternalAccessFindingsStatistics,
        }),
        /*@__PURE__*/ S.Struct({
          internalAccessFindingsStatistics: InternalAccessFindingsStatistics,
        }),
        /*@__PURE__*/ S.Struct({ unusedAccessFindingsStatistics: UnusedAccessFindingsStatistics }),
      ]);
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Array(FindingsStatistics);
    case 1:
      return S.suspend(() =>
        S.Struct({
          findingsStatistics: S.optional(FindingsStatisticsList),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "GetFindingsStatisticsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          analyzerArn: S.String.pipe(T.HttpQuery("analyzerArn")),
          id: S.String.pipe(T.HttpLabel("id")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/findingv2/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetFindingV2Request" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          action: S.optional(ActionList),
          condition: S.optional(ConditionKeyMap),
          principal: S.optional(PrincipalMap),
          principalOwnerAccount: S.optional(S.String),
          accessType: S.optional(S.String),
          principalType: S.optional(S.String),
          sources: S.optional(FindingSourceList),
          resourceControlPolicyRestriction: S.optional(S.String),
          serviceControlPolicyRestriction: S.optional(S.String),
        }),
      ).annotate({ identifier: "InternalAccessDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          action: S.optional(ActionList),
          condition: ConditionKeyMap,
          isPublic: S.optional(S.Boolean),
          principal: S.optional(PrincipalMap),
          sources: S.optional(FindingSourceList),
          resourceControlPolicyRestriction: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExternalAccessDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          action: S.String,
          lastAccessed: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "UnusedAction" });
    case 6:
      return S.Array(UnusedAction);
    case 7:
      return S.suspend(() =>
        S.Struct({
          actions: S.optional(UnusedActionList),
          serviceNamespace: S.String,
          lastAccessed: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "UnusedPermissionDetails" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          accessKeyId: S.String,
          lastAccessed: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "UnusedIamUserAccessKeyDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          lastAccessed: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "UnusedIamRoleDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          lastAccessed: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "UnusedIamUserPasswordDetails",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ internalAccessDetails: InternalAccessDetails }),
        /*@__PURE__*/ S.Struct({ externalAccessDetails: ExternalAccessDetails }),
        /*@__PURE__*/ S.Struct({ unusedPermissionDetails: UnusedPermissionDetails }),
        /*@__PURE__*/ S.Struct({ unusedIamUserAccessKeyDetails: UnusedIamUserAccessKeyDetails }),
        /*@__PURE__*/ S.Struct({ unusedIamRoleDetails: UnusedIamRoleDetails }),
        /*@__PURE__*/ S.Struct({ unusedIamUserPasswordDetails: UnusedIamUserPasswordDetails }),
      ]);
    case 4:
      return S.Array(FindingDetails);
    case 5:
      return S.suspend(() =>
        S.Struct({
          analyzedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          error: S.optional(S.String),
          id: S.String,
          nextToken: S.optional(S.String),
          resource: S.optional(S.String),
          resourceType: S.String,
          resourceOwnerAccount: S.String,
          status: S.String,
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          findingDetails: FindingDetailsList,
          findingType: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetFindingV2Response" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          includeResourcePlaceholders: S.optional(S.Boolean).pipe(
            T.HttpQuery("includeResourcePlaceholders"),
          ),
          includeServiceLevelTemplate: S.optional(S.Boolean).pipe(
            T.HttpQuery("includeServiceLevelTemplate"),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/policy/generation/{jobId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetGeneratedPolicyRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          status: S.String,
          startedOn: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          completedOn: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          jobError: S.optional(JobError),
        }),
      ).annotate({ identifier: "JobDetails" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          cloudTrailArn: S.String,
          regions: S.optional(RegionList),
          allRegions: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "TrailProperties" });
    case 1:
      return S.Array(TrailProperties);
    case 2:
      return S.suspend(() =>
        S.Struct({
          trailProperties: TrailPropertiesList,
          startTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          endTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "CloudTrailProperties" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          isComplete: S.optional(S.Boolean),
          principalArn: S.String,
          cloudTrailProperties: S.optional(CloudTrailProperties),
        }),
      ).annotate({
        identifier: "GeneratedPolicyProperties",
      });
    case 4:
      return S.suspend(() => S.Struct({ policy: S.String })).annotate({
        identifier: "GeneratedPolicy",
      });
    case 5:
      return S.Array(GeneratedPolicy);
    case 6:
      return S.suspend(() =>
        S.Struct({
          properties: GeneratedPolicyProperties,
          generatedPolicies: S.optional(GeneratedPolicyList),
        }),
      ).annotate({ identifier: "GeneratedPolicyResult" });
    case 7:
      return S.suspend(() =>
        S.Struct({ jobDetails: JobDetails, generatedPolicyResult: GeneratedPolicyResult }),
      ).annotate({
        identifier: "GetGeneratedPolicyResponse",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          accessPreviewId: S.String.pipe(T.HttpLabel("accessPreviewId")),
          analyzerArn: S.String,
          filter: S.optional(FilterCriteriaMap),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/access-preview/{accessPreviewId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAccessPreviewFindingsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          existingFindingId: S.optional(S.String),
          existingFindingStatus: S.optional(S.String),
          principal: S.optional(PrincipalMap),
          action: S.optional(ActionList),
          condition: S.optional(ConditionKeyMap),
          resource: S.optional(S.String),
          isPublic: S.optional(S.Boolean),
          resourceType: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          changeType: S.String,
          status: S.String,
          resourceOwnerAccount: S.String,
          error: S.optional(S.String),
          sources: S.optional(FindingSourceList),
          resourceControlPolicyRestriction: S.optional(S.String),
        }),
      ).annotate({ identifier: "AccessPreviewFinding" });
    case 2:
      return S.Array(AccessPreviewFinding);
    case 3:
      return S.suspend(() =>
        S.Struct({ findings: AccessPreviewFindingsList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAccessPreviewFindingsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          analyzerArn: S.String.pipe(T.HttpQuery("analyzerArn")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/access-preview" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListAccessPreviewsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          analyzerArn: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: S.String,
          statusReason: S.optional(AccessPreviewStatusReason),
        }),
      ).annotate({ identifier: "AccessPreviewSummary" });
    case 6:
      return S.Array(AccessPreviewSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({ accessPreviews: AccessPreviewsList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAccessPreviewsResponse",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          analyzerArn: S.String,
          resourceType: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/analyzed-resource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAnalyzedResourcesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, resourceOwnerAccount: S.String, resourceType: S.String }),
      ).annotate({ identifier: "AnalyzedResourceSummary" });
    case 2:
      return S.Array(AnalyzedResourceSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ analyzedResources: AnalyzedResourcesList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAnalyzedResourcesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          type: S.optional(S.String).pipe(T.HttpQuery("type")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/analyzer" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListAnalyzersRequest" });
    case 5:
      return S.Array(AnalyzerSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({ analyzers: AnalyzersList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAnalyzersResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          analyzerName: S.String.pipe(T.HttpLabel("analyzerName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/analyzer/{analyzerName}/archive-rule" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListArchiveRulesRequest" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ArchiveRuleSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({ archiveRules: ArchiveRulesList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListArchiveRulesResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ attributeName: S.optional(S.String), orderBy: S.optional(S.String) }),
      ).annotate({ identifier: "SortCriteria" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          analyzerArn: S.String,
          filter: S.optional(FilterCriteriaMap),
          sort: S.optional(SortCriteria),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/finding" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListFindingsRequest" });
    case 4:
      return S.Array(FindingSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({ findings: FindingsList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListFindingsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          analyzerArn: S.String,
          filter: S.optional(FilterCriteriaMap),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          sort: S.optional(SortCriteria),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/findingv2" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListFindingsV2Request" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          analyzedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          error: S.optional(S.String),
          id: S.String,
          resource: S.optional(S.String),
          resourceType: S.String,
          resourceOwnerAccount: S.String,
          status: S.String,
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          findingType: S.optional(S.String),
        }),
      ).annotate({ identifier: "FindingSummaryV2" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.Array(FindingSummaryV2);
    case 1:
      return S.suspend(() =>
        S.Struct({ findings: FindingsListV2, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListFindingsV2Response" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          principalArn: S.optional(S.String).pipe(T.HttpQuery("principalArn")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/policy/generation" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListPolicyGenerationsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          principalArn: S.String,
          status: S.String,
          startedOn: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          completedOn: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "PolicyGeneration" });
    case 4:
      return S.Array(PolicyGeneration);
    case 5:
      return S.suspend(() =>
        S.Struct({ policyGenerations: PolicyGenerationList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListPolicyGenerationsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ tags: S.optional(TagsMap) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ principalArn: S.String })).annotate({
        identifier: "PolicyGenerationDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          trails: TrailList,
          accessRole: S.String,
          startTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CloudTrailDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          policyGenerationDetails: PolicyGenerationDetails,
          cloudTrailDetails: S.optional(CloudTrailDetails),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/policy/generation" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StartPolicyGenerationRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ jobId: S.String })).annotate({
        identifier: "StartPolicyGenerationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          analyzerArn: S.String,
          resourceArn: S.String,
          resourceOwnerAccount: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/resource/scan" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartResourceScanRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: TagsMap }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: TagKeys.pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          analyzerName: S.String.pipe(T.HttpLabel("analyzerName")),
          configuration: S.optional(AnalyzerConfiguration),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/analyzer/{analyzerName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateAnalyzerRequest" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ configuration: S.optional(AnalyzerConfiguration) }),
      ).annotate({ identifier: "UpdateAnalyzerResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          analyzerName: S.String.pipe(T.HttpLabel("analyzerName")),
          ruleName: S.String.pipe(T.HttpLabel("ruleName")),
          filter: FilterCriteriaMap,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/analyzer/{analyzerName}/archive-rule/{ruleName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateArchiveRuleRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          analyzerArn: S.String,
          status: S.String,
          ids: S.optional(FindingIdList),
          resourceArn: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "PUT", uri: "/finding" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateFindingsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          locale: S.optional(S.String),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          policyDocument: S.String,
          policyType: S.String,
          validatePolicyResourceType: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/policy/validation" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ValidatePolicyRequest" });
    case 4:
      return S.suspend(() => S.Struct({ start: S.Number, length: S.Number })).annotate({
        identifier: "Substring",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ index: S.Number }),
        /*@__PURE__*/ S.Struct({ key: S.String }),
        /*@__PURE__*/ S.Struct({ substring: Substring }),
        /*@__PURE__*/ S.Struct({ value: S.String }),
      ]);
    case 6:
      return S.Array(PathElement);
    case 7:
      return S.suspend(() =>
        S.Struct({ line: S.Number, column: S.Number, offset: S.Number }),
      ).annotate({ identifier: "Position" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ start: Position, end: Position })).annotate({
        identifier: "Span",
      });
    case 1:
      return S.suspend(() => S.Struct({ path: PathElementList, span: Span })).annotate({
        identifier: "Location",
      });
    case 2:
      return S.Array(Location);
    case 3:
      return S.suspend(() =>
        S.Struct({
          findingDetails: S.String,
          findingType: S.String,
          issueCode: S.String,
          learnMoreLink: S.String,
          locations: LocationList,
        }),
      ).annotate({ identifier: "ValidatePolicyFinding" });
    case 4:
      return S.Array(ValidatePolicyFinding);
    case 5:
      return S.suspend(() =>
        S.Struct({ findings: ValidatePolicyFindingList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ValidatePolicyResponse" });
    case 6:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 7:
      return S.Array(ValidationExceptionField);
  }
}
