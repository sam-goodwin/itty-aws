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
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "deadline", serviceShapeName: "Deadline" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "deadline" });
const ver = /*@__PURE__*/ T.ServiceVersion("2023-10-12");
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
              `https://deadline-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://deadline-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://deadline.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://deadline.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      context: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ExceptionContext).annotate({
          identifier: "ExceptionContext",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.suspend(() => ConflictExceptionReason).annotate({
        identifier: "ConflictExceptionReason",
      }),
      resourceId: S.String,
      resourceType: S.String,
      context: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ExceptionContext).annotate({
          identifier: "ExceptionContext",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerErrorException
  extends /*@__PURE__*/ S.TaggedError<InternalServerErrorException>()(
    "InternalServerErrorException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()("InternalServerException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withServerError, C.withRetryableError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
      context: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ExceptionContext).annotate({
          identifier: "ExceptionContext",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.suspend(() => ServiceQuotaExceededExceptionReason).annotate({
        identifier: "ServiceQuotaExceededExceptionReason",
      }),
      resourceType: S.String,
      serviceCode: S.String,
      quotaCode: S.String,
      resourceId: /*@__PURE__*/ S.optional(S.String),
      context: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ExceptionContext).annotate({
          identifier: "ExceptionContext",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      serviceCode: /*@__PURE__*/ S.optional(S.String),
      quotaCode: /*@__PURE__*/ S.optional(S.String),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
      context: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ExceptionContext).annotate({
          identifier: "ExceptionContext",
        }),
      ),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.HttpError(429),
      /*@__PURE__*/ T.Retryable({ throttling: true }),
    ),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.suspend(() => ValidationExceptionReason).annotate({
        identifier: "ValidationExceptionReason",
      }),
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ValidationExceptionFieldList).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
      context: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ExceptionContext).annotate({
          identifier: "ExceptionContext",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type FarmId = string;
export type DeadlinePrincipalType = "USER" | "GROUP" | (string & {});
const DeadlinePrincipalType = S.String;

export type IdentityStoreId = string;
export type MembershipLevel = "VIEWER" | "CONTRIBUTOR" | "OWNER" | "MANAGER" | (string & {});
const MembershipLevel = S.String;

export type IdentityCenterPrincipalId = string;
export type Region = string;
export interface AssociateMemberToFarmRequest {
  farmId: string;
  principalType: DeadlinePrincipalType;
  identityStoreId: string;
  membershipLevel: MembershipLevel;
  principalId: string;
  identityCenterRegion?: string;
}
const AssociateMemberToFarmRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<AssociateMemberToFarmRequest>;
export interface AssociateMemberToFarmResponse {}
const AssociateMemberToFarmResponse = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<AssociateMemberToFarmResponse>;
export type FleetId = string;
export interface AssociateMemberToFleetRequest {
  farmId: string;
  fleetId: string;
  principalType: DeadlinePrincipalType;
  identityStoreId: string;
  membershipLevel: MembershipLevel;
  principalId: string;
  identityCenterRegion?: string;
}
const AssociateMemberToFleetRequest = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<AssociateMemberToFleetRequest>;
export interface AssociateMemberToFleetResponse {}
const AssociateMemberToFleetResponse =
  AssociateMemberToFarmResponse as any as S.Schema<AssociateMemberToFleetResponse>;
export type QueueId = string;
export type JobId = string;
export interface AssociateMemberToJobRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  principalType: DeadlinePrincipalType;
  identityStoreId: string;
  membershipLevel: MembershipLevel;
  principalId: string;
  identityCenterRegion?: string;
}
const AssociateMemberToJobRequest = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<AssociateMemberToJobRequest>;
export interface AssociateMemberToJobResponse {}
const AssociateMemberToJobResponse =
  AssociateMemberToFarmResponse as any as S.Schema<AssociateMemberToJobResponse>;
export interface AssociateMemberToQueueRequest {
  farmId: string;
  queueId: string;
  principalType: DeadlinePrincipalType;
  identityStoreId: string;
  membershipLevel: MembershipLevel;
  principalId: string;
  identityCenterRegion?: string;
}
const AssociateMemberToQueueRequest = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<AssociateMemberToQueueRequest>;
export interface AssociateMemberToQueueResponse {}
const AssociateMemberToQueueResponse =
  AssociateMemberToFarmResponse as any as S.Schema<AssociateMemberToQueueResponse>;
export interface AssumeFleetRoleForReadRequest {
  farmId: string;
  fleetId: string;
}
const AssumeFleetRoleForReadRequest = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<AssumeFleetRoleForReadRequest>;
export type AccessKeyId = string | redacted.Redacted<string>;
export type SecretAccessKey = string | redacted.Redacted<string>;
export type SessionToken = string | redacted.Redacted<string>;
export interface AwsCredentials {
  accessKeyId: string | redacted.Redacted<string>;
  secretAccessKey: string | redacted.Redacted<string>;
  sessionToken: string | redacted.Redacted<string>;
  expiration: Date;
}
const AwsCredentials = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<AwsCredentials>;
export interface AssumeFleetRoleForReadResponse {
  credentials: AwsCredentials;
}
const AssumeFleetRoleForReadResponse = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<AssumeFleetRoleForReadResponse>;
export type WorkerId = string;
export interface AssumeFleetRoleForWorkerRequest {
  farmId: string;
  fleetId: string;
  workerId: string;
}
const AssumeFleetRoleForWorkerRequest = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<AssumeFleetRoleForWorkerRequest>;
export interface AssumeFleetRoleForWorkerResponse {
  credentials: AwsCredentials;
}
const AssumeFleetRoleForWorkerResponse =
  AssumeFleetRoleForReadResponse as any as S.Schema<AssumeFleetRoleForWorkerResponse>;
export interface AssumeQueueRoleForReadRequest {
  farmId: string;
  queueId: string;
}
const AssumeQueueRoleForReadRequest = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<AssumeQueueRoleForReadRequest>;
export interface AssumeQueueRoleForReadResponse {
  credentials: AwsCredentials;
}
const AssumeQueueRoleForReadResponse =
  AssumeFleetRoleForReadResponse as any as S.Schema<AssumeQueueRoleForReadResponse>;
export interface AssumeQueueRoleForUserRequest {
  farmId: string;
  queueId: string;
}
const AssumeQueueRoleForUserRequest = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<AssumeQueueRoleForUserRequest>;
export interface AssumeQueueRoleForUserResponse {
  credentials: AwsCredentials;
}
const AssumeQueueRoleForUserResponse =
  AssumeFleetRoleForReadResponse as any as S.Schema<AssumeQueueRoleForUserResponse>;
export interface AssumeQueueRoleForWorkerRequest {
  farmId: string;
  fleetId: string;
  workerId: string;
  queueId: string;
}
const AssumeQueueRoleForWorkerRequest = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<AssumeQueueRoleForWorkerRequest>;
export interface AssumeQueueRoleForWorkerResponse {
  credentials?: AwsCredentials;
}
const AssumeQueueRoleForWorkerResponse = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<AssumeQueueRoleForWorkerResponse>;
export interface BatchGetJobIdentifier {
  farmId: string;
  queueId: string;
  jobId: string;
}
const BatchGetJobIdentifier = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<BatchGetJobIdentifier>;
export type BatchGetJobIdentifiers = BatchGetJobIdentifier[];
const BatchGetJobIdentifiers = /*@__PURE__*/ __L.at(__c1, 6);
export interface BatchGetJobRequest {
  identifiers: BatchGetJobIdentifier[];
}
const BatchGetJobRequest = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<BatchGetJobRequest>;
export type JobName = string;
export type JobLifecycleStatus =
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "CREATE_COMPLETE"
  | "UPLOAD_IN_PROGRESS"
  | "UPLOAD_FAILED"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_FAILED"
  | "UPDATE_SUCCEEDED"
  | "ARCHIVED"
  | (string & {});
const JobLifecycleStatus = S.String;

export type JobPriority = number;
export type CreatedAt = Date;
export type CreatedBy = string;
export type UpdatedAt = Date;
export type UpdatedBy = string;
export type StartedAt = Date;
export type EndedAt = Date;
export type TaskRunStatus =
  | "PENDING"
  | "READY"
  | "ASSIGNED"
  | "STARTING"
  | "SCHEDULED"
  | "INTERRUPTING"
  | "RUNNING"
  | "SUSPENDED"
  | "CANCELED"
  | "FAILED"
  | "SUCCEEDED"
  | "NOT_COMPATIBLE"
  | (string & {});
const TaskRunStatus = S.String;

export type JobTargetTaskRunStatus =
  | "READY"
  | "FAILED"
  | "SUCCEEDED"
  | "CANCELED"
  | "SUSPENDED"
  | "PENDING"
  | (string & {});
const JobTargetTaskRunStatus = S.String;

export type TaskRunStatusCounts = { [key in TaskRunStatus]?: number };
const TaskRunStatusCounts = /*@__PURE__*/ __L.at(__c2, 0);
export type TaskFailureRetryCount = number;
export type StorageProfileId = string;
export type MaxFailedTasksCount = number;
export type MaxRetriesPerTask = number;
export type IntString = string;
export type FloatString = string;
export type ParameterString = string;
export type PathString = string;
export type BooleanString = string;
export type RangeExprString = string;
export type ParameterStringList = string[];
const ParameterStringList = /*@__PURE__*/ __L.at(__c2, 1);
export type PathStringList = string[];
const PathStringList = ParameterStringList as any as S.Schema<PathStringList>;
export type IntStringList = string[];
const IntStringList = ParameterStringList as any as S.Schema<IntStringList>;
export type FloatStringList = string[];
const FloatStringList = ParameterStringList as any as S.Schema<FloatStringList>;
export type BooleanStringList = string[];
const BooleanStringList = ParameterStringList as any as S.Schema<BooleanStringList>;
export type NestedIntStringList = string[];
const NestedIntStringList = ParameterStringList as any as S.Schema<NestedIntStringList>;
export type IntStringListList = string[][];
const IntStringListList = /*@__PURE__*/ __L.at(__c2, 2);
export type JobParameter =
  | {
      int: string;
      float?: never;
      string?: never;
      path?: never;
      bool?: never;
      rangeExpr?: never;
      stringList?: never;
      pathList?: never;
      intList?: never;
      floatList?: never;
      boolList?: never;
      intListList?: never;
    }
  | {
      int?: never;
      float: string;
      string?: never;
      path?: never;
      bool?: never;
      rangeExpr?: never;
      stringList?: never;
      pathList?: never;
      intList?: never;
      floatList?: never;
      boolList?: never;
      intListList?: never;
    }
  | {
      int?: never;
      float?: never;
      string: string;
      path?: never;
      bool?: never;
      rangeExpr?: never;
      stringList?: never;
      pathList?: never;
      intList?: never;
      floatList?: never;
      boolList?: never;
      intListList?: never;
    }
  | {
      int?: never;
      float?: never;
      string?: never;
      path: string;
      bool?: never;
      rangeExpr?: never;
      stringList?: never;
      pathList?: never;
      intList?: never;
      floatList?: never;
      boolList?: never;
      intListList?: never;
    }
  | {
      int?: never;
      float?: never;
      string?: never;
      path?: never;
      bool: string;
      rangeExpr?: never;
      stringList?: never;
      pathList?: never;
      intList?: never;
      floatList?: never;
      boolList?: never;
      intListList?: never;
    }
  | {
      int?: never;
      float?: never;
      string?: never;
      path?: never;
      bool?: never;
      rangeExpr: string;
      stringList?: never;
      pathList?: never;
      intList?: never;
      floatList?: never;
      boolList?: never;
      intListList?: never;
    }
  | {
      int?: never;
      float?: never;
      string?: never;
      path?: never;
      bool?: never;
      rangeExpr?: never;
      stringList: string[];
      pathList?: never;
      intList?: never;
      floatList?: never;
      boolList?: never;
      intListList?: never;
    }
  | {
      int?: never;
      float?: never;
      string?: never;
      path?: never;
      bool?: never;
      rangeExpr?: never;
      stringList?: never;
      pathList: string[];
      intList?: never;
      floatList?: never;
      boolList?: never;
      intListList?: never;
    }
  | {
      int?: never;
      float?: never;
      string?: never;
      path?: never;
      bool?: never;
      rangeExpr?: never;
      stringList?: never;
      pathList?: never;
      intList: string[];
      floatList?: never;
      boolList?: never;
      intListList?: never;
    }
  | {
      int?: never;
      float?: never;
      string?: never;
      path?: never;
      bool?: never;
      rangeExpr?: never;
      stringList?: never;
      pathList?: never;
      intList?: never;
      floatList: string[];
      boolList?: never;
      intListList?: never;
    }
  | {
      int?: never;
      float?: never;
      string?: never;
      path?: never;
      bool?: never;
      rangeExpr?: never;
      stringList?: never;
      pathList?: never;
      intList?: never;
      floatList?: never;
      boolList: string[];
      intListList?: never;
    }
  | {
      int?: never;
      float?: never;
      string?: never;
      path?: never;
      bool?: never;
      rangeExpr?: never;
      stringList?: never;
      pathList?: never;
      intList?: never;
      floatList?: never;
      boolList?: never;
      intListList: string[][];
    };
const JobParameter = /*@__PURE__*/ __L.at(__c2, 3);
export type JobParameters = { [key: string]: JobParameter | undefined };
const JobParameters = /*@__PURE__*/ __L.at(__c2, 4);
export type FileSystemLocationName = string;
export type PathFormat = "windows" | "posix" | (string & {});
const PathFormat = S.String;

export type OutputRelativeDirectoriesList = string[];
const OutputRelativeDirectoriesList =
  ParameterStringList as any as S.Schema<OutputRelativeDirectoriesList>;
export interface ManifestProperties {
  fileSystemLocationName?: string;
  rootPath: string;
  rootPathFormat: PathFormat;
  outputRelativeDirectories?: string[];
  inputManifestPath?: string;
  inputManifestHash?: string;
}
const ManifestProperties = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<ManifestProperties>;
export type ManifestPropertiesList = ManifestProperties[];
const ManifestPropertiesList = /*@__PURE__*/ __L.at(__c2, 6);
export type JobAttachmentsFileSystem = "COPIED" | "VIRTUAL" | (string & {});
const JobAttachmentsFileSystem = S.String;

export interface Attachments {
  manifests: ManifestProperties[];
  fileSystem?: JobAttachmentsFileSystem;
}
const Attachments = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<Attachments>;
export type JobDescription = string | redacted.Redacted<string>;
export type MaxWorkerCount = number;
export interface BatchGetJobItem {
  farmId: string;
  queueId: string;
  jobId: string;
  name: string;
  lifecycleStatus: JobLifecycleStatus;
  lifecycleStatusMessage: string;
  priority: number;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
  startedAt?: Date;
  endedAt?: Date;
  taskRunStatus?: TaskRunStatus;
  targetTaskRunStatus?: JobTargetTaskRunStatus;
  taskRunStatusCounts?: { [key: string]: number | undefined };
  taskFailureRetryCount?: number;
  storageProfileId?: string;
  maxFailedTasksCount?: number;
  maxRetriesPerTask?: number;
  parameters?: { [key: string]: JobParameter | undefined };
  attachments?: Attachments;
  description?: string | redacted.Redacted<string>;
  maxWorkerCount?: number;
  sourceJobId?: string;
}
const BatchGetJobItem = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<BatchGetJobItem>;
export type BatchGetJobItems = BatchGetJobItem[];
const BatchGetJobItems = /*@__PURE__*/ __L.at(__c3, 1);
export type BatchGetJobErrorCode =
  | "InternalServerErrorException"
  | "ResourceNotFoundException"
  | "ValidationException"
  | "AccessDeniedException"
  | "ThrottlingException"
  | (string & {});
const BatchGetJobErrorCode = S.String;

export interface BatchGetJobError_ {
  farmId: string;
  queueId: string;
  jobId: string;
  code: BatchGetJobErrorCode;
  message: string;
}
const BatchGetJobError_ = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<BatchGetJobError_>;
export type BatchGetJobErrors = BatchGetJobError_[];
const BatchGetJobErrors = /*@__PURE__*/ __L.at(__c3, 3);
export interface BatchGetJobResponse {
  jobs: BatchGetJobItem[];
  errors: BatchGetJobError_[];
}
const BatchGetJobResponse = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<BatchGetJobResponse>;
export interface JobDetailsIdentifiers {
  jobId: string;
}
const JobDetailsIdentifiers = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<JobDetailsIdentifiers>;
export interface JobAttachmentDetailsIdentifiers {
  jobId: string;
}
const JobAttachmentDetailsIdentifiers = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<JobAttachmentDetailsIdentifiers>;
export type StepId = string;
export interface StepDetailsIdentifiers {
  jobId: string;
  stepId: string;
}
const StepDetailsIdentifiers = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<StepDetailsIdentifiers>;
export type EnvironmentId = string;
export interface EnvironmentDetailsIdentifiers {
  jobId: string;
  environmentId: string;
}
const EnvironmentDetailsIdentifiers = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<EnvironmentDetailsIdentifiers>;
export type JobEntityIdentifiersUnion =
  | {
      jobDetails: JobDetailsIdentifiers;
      jobAttachmentDetails?: never;
      stepDetails?: never;
      environmentDetails?: never;
    }
  | {
      jobDetails?: never;
      jobAttachmentDetails: JobAttachmentDetailsIdentifiers;
      stepDetails?: never;
      environmentDetails?: never;
    }
  | {
      jobDetails?: never;
      jobAttachmentDetails?: never;
      stepDetails: StepDetailsIdentifiers;
      environmentDetails?: never;
    }
  | {
      jobDetails?: never;
      jobAttachmentDetails?: never;
      stepDetails?: never;
      environmentDetails: EnvironmentDetailsIdentifiers;
    };
const JobEntityIdentifiersUnion = /*@__PURE__*/ __L.at(__c4, 1);
export type JobEntityIdentifiers = JobEntityIdentifiersUnion[];
const JobEntityIdentifiers = /*@__PURE__*/ __L.at(__c4, 2);
export interface BatchGetJobEntityRequest {
  farmId: string;
  fleetId: string;
  workerId: string;
  identifiers: JobEntityIdentifiersUnion[];
}
const BatchGetJobEntityRequest = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<BatchGetJobEntityRequest>;
export type S3BucketName = string;
export type S3Prefix = string;
export interface JobDetailsJobAttachmentSettings {
  s3BucketName: string;
  rootPrefix: string;
}
const JobDetailsJobAttachmentSettings = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<JobDetailsJobAttachmentSettings>;
export interface PosixUser {
  user: string;
  group: string;
}
const PosixUser = /*@__PURE__*/ __L.at(__c4, 5) as any as S.Schema<PosixUser>;
export interface WindowsUser {
  user: string;
  passwordArn: string;
}
const WindowsUser = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<WindowsUser>;
export type RunAs = "QUEUE_CONFIGURED_USER" | "WORKER_AGENT_USER" | (string & {});
const RunAs = S.String;

export interface JobRunAsUser {
  posix?: PosixUser;
  windows?: WindowsUser;
  runAs: RunAs;
}
const JobRunAsUser = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<JobRunAsUser>;
export type IamRoleArn = string;
export type OpenjdExtensionName = string;
export type OpenjdExtensionNameList = string[];
const OpenjdExtensionNameList = ParameterStringList as any as S.Schema<OpenjdExtensionNameList>;
export interface PathMappingRule {
  sourcePathFormat: PathFormat;
  sourcePath: string;
  destinationPath: string;
}
const PathMappingRule = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<PathMappingRule>;
export type PathMappingRules = PathMappingRule[];
const PathMappingRules = /*@__PURE__*/ __L.at(__c5, 1);
export interface JobDetailsEntity {
  jobId: string;
  jobAttachmentSettings?: JobDetailsJobAttachmentSettings;
  jobRunAsUser?: JobRunAsUser;
  logGroupName: string;
  queueRoleArn?: string;
  parameters?: { [key: string]: JobParameter | undefined };
  schemaVersion: string;
  extensions?: string[];
  pathMappingRules?: PathMappingRule[];
}
const JobDetailsEntity = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<JobDetailsEntity>;
export interface JobAttachmentDetailsEntity {
  jobId: string;
  attachments: Attachments;
}
const JobAttachmentDetailsEntity = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<JobAttachmentDetailsEntity>;
export type Document = unknown;
export type DependenciesList = string[];
const DependenciesList = ParameterStringList as any as S.Schema<DependenciesList>;
export type SerializedSymbolTable = string;
export interface StepDetailsEntity {
  jobId: string;
  stepId: string;
  schemaVersion: string;
  template: any;
  dependencies: string[];
  extensions?: string[];
  resolvedSymbolTable?: string;
}
const StepDetailsEntity = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<StepDetailsEntity>;
export interface EnvironmentDetailsEntity {
  jobId: string;
  environmentId: string;
  schemaVersion: string;
  template: any;
  extensions?: string[];
  resolvedSymbolTable?: string;
}
const EnvironmentDetailsEntity = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<EnvironmentDetailsEntity>;
export type JobEntity =
  | {
      jobDetails: JobDetailsEntity;
      jobAttachmentDetails?: never;
      stepDetails?: never;
      environmentDetails?: never;
    }
  | {
      jobDetails?: never;
      jobAttachmentDetails: JobAttachmentDetailsEntity;
      stepDetails?: never;
      environmentDetails?: never;
    }
  | {
      jobDetails?: never;
      jobAttachmentDetails?: never;
      stepDetails: StepDetailsEntity;
      environmentDetails?: never;
    }
  | {
      jobDetails?: never;
      jobAttachmentDetails?: never;
      stepDetails?: never;
      environmentDetails: EnvironmentDetailsEntity;
    };
const JobEntity = /*@__PURE__*/ __L.at(__c5, 6);
export type BatchGetJobEntityList = JobEntity[];
const BatchGetJobEntityList = /*@__PURE__*/ __L.at(__c5, 7);
export type JobEntityErrorCode =
  | "AccessDeniedException"
  | "InternalServerException"
  | "ValidationException"
  | "ResourceNotFoundException"
  | "MaxPayloadSizeExceeded"
  | "ConflictException"
  | (string & {});
const JobEntityErrorCode = S.String;

export interface JobDetailsError {
  jobId: string;
  code: JobEntityErrorCode;
  message: string;
}
const JobDetailsError = /*@__PURE__*/ __L.at(__c6, 0) as any as S.Schema<JobDetailsError>;
export interface JobAttachmentDetailsError {
  jobId: string;
  code: JobEntityErrorCode;
  message: string;
}
const JobAttachmentDetailsError = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<JobAttachmentDetailsError>;
export interface StepDetailsError {
  jobId: string;
  stepId: string;
  code: JobEntityErrorCode;
  message: string;
}
const StepDetailsError = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<StepDetailsError>;
export interface EnvironmentDetailsError {
  jobId: string;
  environmentId: string;
  code: JobEntityErrorCode;
  message: string;
}
const EnvironmentDetailsError = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<EnvironmentDetailsError>;
export type GetJobEntityError =
  | {
      jobDetails: JobDetailsError;
      jobAttachmentDetails?: never;
      stepDetails?: never;
      environmentDetails?: never;
    }
  | {
      jobDetails?: never;
      jobAttachmentDetails: JobAttachmentDetailsError;
      stepDetails?: never;
      environmentDetails?: never;
    }
  | {
      jobDetails?: never;
      jobAttachmentDetails?: never;
      stepDetails: StepDetailsError;
      environmentDetails?: never;
    }
  | {
      jobDetails?: never;
      jobAttachmentDetails?: never;
      stepDetails?: never;
      environmentDetails: EnvironmentDetailsError;
    };
const GetJobEntityError = /*@__PURE__*/ __L.at(__c6, 4);
export type BatchGetJobEntityErrors = GetJobEntityError[];
const BatchGetJobEntityErrors = /*@__PURE__*/ __L.at(__c6, 5);
export interface BatchGetJobEntityResponse {
  entities: JobEntity[];
  errors: GetJobEntityError[];
}
const BatchGetJobEntityResponse = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<BatchGetJobEntityResponse>;
export type SessionId = string;
export interface BatchGetSessionIdentifier {
  farmId: string;
  queueId: string;
  jobId: string;
  sessionId: string;
}
const BatchGetSessionIdentifier = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<BatchGetSessionIdentifier>;
export type BatchGetSessionIdentifiers = BatchGetSessionIdentifier[];
const BatchGetSessionIdentifiers = /*@__PURE__*/ __L.at(__c7, 0);
export interface BatchGetSessionRequest {
  identifiers: BatchGetSessionIdentifier[];
}
const BatchGetSessionRequest = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<BatchGetSessionRequest>;
export type SessionLifecycleStatus =
  | "STARTED"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_SUCCEEDED"
  | "UPDATE_FAILED"
  | "ENDED"
  | (string & {});
const SessionLifecycleStatus = S.String;

export type SessionLifecycleTargetStatus = "ENDED" | (string & {});
const SessionLifecycleTargetStatus = S.String;

export type LogDriver = string;
export type LogOptions = { [key: string]: string | undefined };
const LogOptions = /*@__PURE__*/ __L.at(__c7, 2);
export type LogParameters = { [key: string]: string | undefined };
const LogParameters = /*@__PURE__*/ __L.at(__c7, 3);
export type LogError = string;
export interface LogConfiguration {
  logDriver: string;
  options?: { [key: string]: string | undefined };
  parameters?: { [key: string]: string | undefined };
  error?: string;
}
const LogConfiguration = /*@__PURE__*/ __L.at(__c7, 4) as any as S.Schema<LogConfiguration>;
export type IpV4Address = string;
export type IpV4Addresses = string[];
const IpV4Addresses = ParameterStringList as any as S.Schema<IpV4Addresses>;
export type IpV6Address = string;
export type IpV6Addresses = string[];
const IpV6Addresses = ParameterStringList as any as S.Schema<IpV6Addresses>;
export interface IpAddresses {
  ipV4Addresses?: string[];
  ipV6Addresses?: string[];
}
const IpAddresses = /*@__PURE__*/ __L.at(__c7, 5) as any as S.Schema<IpAddresses>;
export type HostName = string;
export type InstanceType = string;
export interface HostPropertiesResponse {
  ipAddresses?: IpAddresses;
  hostName?: string;
  ec2InstanceArn?: string;
  ec2InstanceType?: string;
}
const HostPropertiesResponse = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<HostPropertiesResponse>;
export interface BatchGetSessionItem {
  farmId: string;
  queueId: string;
  jobId: string;
  sessionId: string;
  fleetId: string;
  workerId: string;
  startedAt: Date;
  lifecycleStatus: SessionLifecycleStatus;
  endedAt?: Date;
  targetLifecycleStatus?: SessionLifecycleTargetStatus;
  updatedAt?: Date;
  updatedBy?: string;
  log: LogConfiguration;
  hostProperties?: HostPropertiesResponse;
  workerLog?: LogConfiguration;
}
const BatchGetSessionItem = /*@__PURE__*/ __L.at(__c7, 7) as any as S.Schema<BatchGetSessionItem>;
export type BatchGetSessionItems = BatchGetSessionItem[];
const BatchGetSessionItems = /*@__PURE__*/ __L.at(__c8, 0);
export type BatchGetSessionErrorCode =
  | "InternalServerErrorException"
  | "ResourceNotFoundException"
  | "ValidationException"
  | (string & {});
const BatchGetSessionErrorCode = S.String;

export interface BatchGetSessionError_ {
  farmId: string;
  queueId: string;
  jobId: string;
  sessionId: string;
  code: BatchGetSessionErrorCode;
  message: string;
}
const BatchGetSessionError_ = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<BatchGetSessionError_>;
export type BatchGetSessionErrors = BatchGetSessionError_[];
const BatchGetSessionErrors = /*@__PURE__*/ __L.at(__c8, 2);
export interface BatchGetSessionResponse {
  sessions: BatchGetSessionItem[];
  errors: BatchGetSessionError_[];
}
const BatchGetSessionResponse = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<BatchGetSessionResponse>;
export type SessionActionId = string;
export interface BatchGetSessionActionIdentifier {
  farmId: string;
  queueId: string;
  jobId: string;
  sessionActionId: string;
}
const BatchGetSessionActionIdentifier = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<BatchGetSessionActionIdentifier>;
export type BatchGetSessionActionIdentifiers = BatchGetSessionActionIdentifier[];
const BatchGetSessionActionIdentifiers = /*@__PURE__*/ __L.at(__c8, 5);
export interface BatchGetSessionActionRequest {
  identifiers: BatchGetSessionActionIdentifier[];
}
const BatchGetSessionActionRequest = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<BatchGetSessionActionRequest>;
export type SessionActionStatus =
  | "ASSIGNED"
  | "RUNNING"
  | "CANCELING"
  | "SUCCEEDED"
  | "FAILED"
  | "INTERRUPTED"
  | "CANCELED"
  | "NEVER_ATTEMPTED"
  | "SCHEDULED"
  | "RECLAIMING"
  | "RECLAIMED"
  | (string & {});
const SessionActionStatus = S.String;

export type SessionActionProgressPercent = number;
export interface TaskRunManifestPropertiesResponse {
  outputManifestPath?: string;
  outputManifestHash?: string;
}
const TaskRunManifestPropertiesResponse = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<TaskRunManifestPropertiesResponse>;
export type TaskRunManifestPropertiesListResponse = TaskRunManifestPropertiesResponse[];
const TaskRunManifestPropertiesListResponse = /*@__PURE__*/ __L.at(__c9, 0);
export type ProcessExitCode = number;
export type SessionActionProgressMessage = string | redacted.Redacted<string>;
export type LimitId = string;
export type MinOneMaxInteger = number;
export interface AcquiredLimit {
  limitId: string;
  count: number;
}
const AcquiredLimit = /*@__PURE__*/ __L.at(__c9, 1) as any as S.Schema<AcquiredLimit>;
export type AcquiredLimits = AcquiredLimit[];
const AcquiredLimits = /*@__PURE__*/ __L.at(__c9, 2);
export interface EnvironmentEnterSessionActionDefinition {
  environmentId: string;
}
const EnvironmentEnterSessionActionDefinition = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<EnvironmentEnterSessionActionDefinition>;
export interface EnvironmentExitSessionActionDefinition {
  environmentId: string;
}
const EnvironmentExitSessionActionDefinition =
  EnvironmentEnterSessionActionDefinition as any as S.Schema<EnvironmentExitSessionActionDefinition>;
export type TaskId = string;
export type TaskParameterValue =
  | { int: string; float?: never; string?: never; path?: never; chunkInt?: never }
  | { int?: never; float: string; string?: never; path?: never; chunkInt?: never }
  | { int?: never; float?: never; string: string; path?: never; chunkInt?: never }
  | { int?: never; float?: never; string?: never; path: string; chunkInt?: never }
  | { int?: never; float?: never; string?: never; path?: never; chunkInt: string };
const TaskParameterValue = /*@__PURE__*/ __L.at(__c9, 4);
export type TaskParameters = { [key: string]: TaskParameterValue | undefined };
const TaskParameters = /*@__PURE__*/ __L.at(__c9, 5);
export interface TaskRunSessionActionDefinition {
  taskId?: string;
  stepId: string;
  parameters: { [key: string]: TaskParameterValue | undefined };
}
const TaskRunSessionActionDefinition = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<TaskRunSessionActionDefinition>;
export interface SyncInputJobAttachmentsSessionActionDefinition {
  stepId?: string;
}
const SyncInputJobAttachmentsSessionActionDefinition = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<SyncInputJobAttachmentsSessionActionDefinition>;
export type SessionActionDefinition =
  | {
      envEnter: EnvironmentEnterSessionActionDefinition;
      envExit?: never;
      taskRun?: never;
      syncInputJobAttachments?: never;
    }
  | {
      envEnter?: never;
      envExit: EnvironmentExitSessionActionDefinition;
      taskRun?: never;
      syncInputJobAttachments?: never;
    }
  | {
      envEnter?: never;
      envExit?: never;
      taskRun: TaskRunSessionActionDefinition;
      syncInputJobAttachments?: never;
    }
  | {
      envEnter?: never;
      envExit?: never;
      taskRun?: never;
      syncInputJobAttachments: SyncInputJobAttachmentsSessionActionDefinition;
    };
const SessionActionDefinition = /*@__PURE__*/ __L.at(__c10, 0);
export interface BatchGetSessionActionItem {
  farmId: string;
  queueId: string;
  jobId: string;
  sessionActionId: string;
  status: SessionActionStatus;
  startedAt?: Date;
  endedAt?: Date;
  workerUpdatedAt?: Date;
  progressPercent?: number;
  manifests?: TaskRunManifestPropertiesResponse[];
  sessionId: string;
  processExitCode?: number;
  progressMessage?: string | redacted.Redacted<string>;
  acquiredLimits?: AcquiredLimit[];
  definition: SessionActionDefinition;
}
const BatchGetSessionActionItem = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<BatchGetSessionActionItem>;
export type BatchGetSessionActionItems = BatchGetSessionActionItem[];
const BatchGetSessionActionItems = /*@__PURE__*/ __L.at(__c10, 2);
export type BatchGetSessionActionErrorCode =
  | "InternalServerErrorException"
  | "ResourceNotFoundException"
  | "ValidationException"
  | (string & {});
const BatchGetSessionActionErrorCode = S.String;

export interface BatchGetSessionActionError_ {
  farmId: string;
  queueId: string;
  jobId: string;
  sessionActionId: string;
  code: BatchGetSessionActionErrorCode;
  message: string;
}
const BatchGetSessionActionError_ = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<BatchGetSessionActionError_>;
export type BatchGetSessionActionErrors = BatchGetSessionActionError_[];
const BatchGetSessionActionErrors = /*@__PURE__*/ __L.at(__c10, 4);
export interface BatchGetSessionActionResponse {
  sessionActions: BatchGetSessionActionItem[];
  errors: BatchGetSessionActionError_[];
}
const BatchGetSessionActionResponse = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<BatchGetSessionActionResponse>;
export interface BatchGetStepIdentifier {
  farmId: string;
  queueId: string;
  jobId: string;
  stepId: string;
}
const BatchGetStepIdentifier = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<BatchGetStepIdentifier>;
export type BatchGetStepIdentifiers = BatchGetStepIdentifier[];
const BatchGetStepIdentifiers = /*@__PURE__*/ __L.at(__c10, 7);
export interface BatchGetStepRequest {
  identifiers: BatchGetStepIdentifier[];
}
const BatchGetStepRequest = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<BatchGetStepRequest>;
export type StepName = string;
export type StepLifecycleStatus =
  | "CREATE_COMPLETE"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_FAILED"
  | "UPDATE_SUCCEEDED"
  | (string & {});
const StepLifecycleStatus = S.String;

export type StepTargetTaskRunStatus =
  | "READY"
  | "FAILED"
  | "SUCCEEDED"
  | "CANCELED"
  | "SUSPENDED"
  | "PENDING"
  | (string & {});
const StepTargetTaskRunStatus = S.String;

export interface DependencyCounts {
  dependenciesResolved: number;
  dependenciesUnresolved: number;
  consumersResolved: number;
  consumersUnresolved: number;
}
const DependencyCounts = /*@__PURE__*/ __L.at(__c11, 1) as any as S.Schema<DependencyCounts>;
export type AttributeCapabilityName = string;
export type AttributeCapabilityValue = string;
export type ListAttributeCapabilityValue = string[];
const ListAttributeCapabilityValue =
  ParameterStringList as any as S.Schema<ListAttributeCapabilityValue>;
export interface StepAttributeCapability {
  name: string;
  anyOf?: string[];
  allOf?: string[];
}
const StepAttributeCapability = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<StepAttributeCapability>;
export type StepAttributeCapabilities = StepAttributeCapability[];
const StepAttributeCapabilities = /*@__PURE__*/ __L.at(__c11, 3);
export type AmountCapabilityName = string;
export interface StepAmountCapability {
  name: string;
  min?: number;
  max?: number;
  value?: number;
}
const StepAmountCapability = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<StepAmountCapability>;
export type StepAmountCapabilities = StepAmountCapability[];
const StepAmountCapabilities = /*@__PURE__*/ __L.at(__c11, 5);
export interface StepRequiredCapabilities {
  attributes: StepAttributeCapability[];
  amounts: StepAmountCapability[];
}
const StepRequiredCapabilities = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<StepRequiredCapabilities>;
export type StepParameterName = string;
export type StepParameterType = "INT" | "FLOAT" | "STRING" | "PATH" | "CHUNK_INT" | (string & {});
const StepParameterType = S.String;

export type DefaultTaskCount = number;
export type TargetRuntimeSeconds = number;
export type RangeConstraint = "CONTIGUOUS" | "NONCONTIGUOUS" | (string & {});
const RangeConstraint = S.String;

export interface StepParameterChunks {
  defaultTaskCount: number;
  targetRuntimeSeconds?: number;
  rangeConstraint: RangeConstraint;
}
const StepParameterChunks = /*@__PURE__*/ __L.at(__c11, 7) as any as S.Schema<StepParameterChunks>;
export interface StepParameter {
  name: string;
  type: StepParameterType;
  chunks?: StepParameterChunks;
}
const StepParameter = /*@__PURE__*/ __L.at(__c12, 0) as any as S.Schema<StepParameter>;
export type StepParameterList = StepParameter[];
const StepParameterList = /*@__PURE__*/ __L.at(__c12, 1);
export type CombinationExpression = string;
export interface ParameterSpace {
  parameters: StepParameter[];
  combination?: string;
}
const ParameterSpace = /*@__PURE__*/ __L.at(__c12, 2) as any as S.Schema<ParameterSpace>;
export type StepDescription = string | redacted.Redacted<string>;
export interface BatchGetStepItem {
  farmId: string;
  queueId: string;
  jobId: string;
  stepId: string;
  name: string;
  lifecycleStatus: StepLifecycleStatus;
  lifecycleStatusMessage?: string;
  taskRunStatus: TaskRunStatus;
  taskRunStatusCounts: { [key: string]: number | undefined };
  taskFailureRetryCount?: number;
  targetTaskRunStatus?: StepTargetTaskRunStatus;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
  startedAt?: Date;
  endedAt?: Date;
  dependencyCounts?: DependencyCounts;
  requiredCapabilities?: StepRequiredCapabilities;
  parameterSpace?: ParameterSpace;
  description?: string | redacted.Redacted<string>;
}
const BatchGetStepItem = /*@__PURE__*/ __L.at(__c12, 3) as any as S.Schema<BatchGetStepItem>;
export type BatchGetStepItems = BatchGetStepItem[];
const BatchGetStepItems = /*@__PURE__*/ __L.at(__c12, 4);
export type BatchGetStepErrorCode =
  | "InternalServerErrorException"
  | "ResourceNotFoundException"
  | "ValidationException"
  | "AccessDeniedException"
  | "ThrottlingException"
  | (string & {});
const BatchGetStepErrorCode = S.String;

export interface BatchGetStepError_ {
  farmId: string;
  queueId: string;
  jobId: string;
  stepId: string;
  code: BatchGetStepErrorCode;
  message: string;
}
const BatchGetStepError_ = /*@__PURE__*/ __L.at(__c12, 5) as any as S.Schema<BatchGetStepError_>;
export type BatchGetStepErrors = BatchGetStepError_[];
const BatchGetStepErrors = /*@__PURE__*/ __L.at(__c12, 6);
export interface BatchGetStepResponse {
  steps: BatchGetStepItem[];
  errors: BatchGetStepError_[];
}
const BatchGetStepResponse = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<BatchGetStepResponse>;
export interface BatchGetTaskIdentifier {
  farmId: string;
  queueId: string;
  jobId: string;
  stepId: string;
  taskId: string;
}
const BatchGetTaskIdentifier = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<BatchGetTaskIdentifier>;
export type BatchGetTaskIdentifiers = BatchGetTaskIdentifier[];
const BatchGetTaskIdentifiers = /*@__PURE__*/ __L.at(__c13, 1);
export interface BatchGetTaskRequest {
  identifiers: BatchGetTaskIdentifier[];
}
const BatchGetTaskRequest = /*@__PURE__*/ __L.at(__c13, 2) as any as S.Schema<BatchGetTaskRequest>;
export type TaskTargetRunStatus =
  | "READY"
  | "FAILED"
  | "SUCCEEDED"
  | "CANCELED"
  | "SUSPENDED"
  | "PENDING"
  | (string & {});
const TaskTargetRunStatus = S.String;

export type TaskRetryCount = number;
export interface BatchGetTaskItem {
  farmId: string;
  queueId: string;
  jobId: string;
  stepId: string;
  taskId: string;
  createdAt: Date;
  createdBy: string;
  runStatus: TaskRunStatus;
  targetRunStatus?: TaskTargetRunStatus;
  failureRetryCount?: number;
  startedAt?: Date;
  endedAt?: Date;
  updatedAt?: Date;
  updatedBy?: string;
  latestSessionActionId?: string;
  parameters?: { [key: string]: TaskParameterValue | undefined };
}
const BatchGetTaskItem = /*@__PURE__*/ __L.at(__c13, 3) as any as S.Schema<BatchGetTaskItem>;
export type BatchGetTaskItems = BatchGetTaskItem[];
const BatchGetTaskItems = /*@__PURE__*/ __L.at(__c13, 4);
export type BatchGetTaskErrorCode =
  | "InternalServerErrorException"
  | "ResourceNotFoundException"
  | "ValidationException"
  | "AccessDeniedException"
  | "ThrottlingException"
  | (string & {});
const BatchGetTaskErrorCode = S.String;

export interface BatchGetTaskError_ {
  farmId: string;
  queueId: string;
  jobId: string;
  stepId: string;
  taskId: string;
  code: BatchGetTaskErrorCode;
  message: string;
}
const BatchGetTaskError_ = /*@__PURE__*/ __L.at(__c13, 5) as any as S.Schema<BatchGetTaskError_>;
export type BatchGetTaskErrors = BatchGetTaskError_[];
const BatchGetTaskErrors = /*@__PURE__*/ __L.at(__c13, 6);
export interface BatchGetTaskResponse {
  tasks: BatchGetTaskItem[];
  errors: BatchGetTaskError_[];
}
const BatchGetTaskResponse = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<BatchGetTaskResponse>;
export interface BatchGetWorkerIdentifier {
  farmId: string;
  fleetId: string;
  workerId: string;
}
const BatchGetWorkerIdentifier = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<BatchGetWorkerIdentifier>;
export type BatchGetWorkerIdentifiers = BatchGetWorkerIdentifier[];
const BatchGetWorkerIdentifiers = /*@__PURE__*/ __L.at(__c14, 1);
export interface BatchGetWorkerRequest {
  identifiers: BatchGetWorkerIdentifier[];
}
const BatchGetWorkerRequest = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<BatchGetWorkerRequest>;
export type WorkerStatus =
  | "CREATED"
  | "STARTED"
  | "STOPPING"
  | "STOPPED"
  | "NOT_RESPONDING"
  | "NOT_COMPATIBLE"
  | "RUNNING"
  | "IDLE"
  | (string & {});
const WorkerStatus = S.String;

export interface BatchGetWorkerItem {
  farmId: string;
  fleetId: string;
  workerId: string;
  hostProperties?: HostPropertiesResponse;
  status: WorkerStatus;
  log?: LogConfiguration;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
}
const BatchGetWorkerItem = /*@__PURE__*/ __L.at(__c14, 3) as any as S.Schema<BatchGetWorkerItem>;
export type BatchGetWorkerItems = BatchGetWorkerItem[];
const BatchGetWorkerItems = /*@__PURE__*/ __L.at(__c14, 4);
export type BatchGetWorkerErrorCode =
  | "InternalServerErrorException"
  | "ResourceNotFoundException"
  | "ValidationException"
  | (string & {});
const BatchGetWorkerErrorCode = S.String;

export interface BatchGetWorkerError_ {
  farmId: string;
  fleetId: string;
  workerId: string;
  code: BatchGetWorkerErrorCode;
  message: string;
}
const BatchGetWorkerError_ = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<BatchGetWorkerError_>;
export type BatchGetWorkerErrors = BatchGetWorkerError_[];
const BatchGetWorkerErrors = /*@__PURE__*/ __L.at(__c14, 6);
export interface BatchGetWorkerResponse {
  workers: BatchGetWorkerItem[];
  errors: BatchGetWorkerError_[];
}
const BatchGetWorkerResponse = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<BatchGetWorkerResponse>;
export type ClientToken = string;
export type UpdateJobLifecycleStatus = "ARCHIVED" | (string & {});
const UpdateJobLifecycleStatus = S.String;

export type JobDescriptionOverride = string | redacted.Redacted<string>;
export interface BatchUpdateJobItem {
  farmId: string;
  queueId: string;
  jobId: string;
  targetTaskRunStatus?: JobTargetTaskRunStatus;
  priority?: number;
  maxFailedTasksCount?: number;
  maxRetriesPerTask?: number;
  lifecycleStatus?: UpdateJobLifecycleStatus;
  maxWorkerCount?: number;
  name?: string;
  description?: string | redacted.Redacted<string>;
}
const BatchUpdateJobItem = /*@__PURE__*/ __L.at(__c15, 0) as any as S.Schema<BatchUpdateJobItem>;
export type BatchUpdateJobItems = BatchUpdateJobItem[];
const BatchUpdateJobItems = /*@__PURE__*/ __L.at(__c15, 1);
export interface BatchUpdateJobRequest {
  clientToken?: string;
  jobs: BatchUpdateJobItem[];
}
const BatchUpdateJobRequest = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<BatchUpdateJobRequest>;
export type BatchUpdateJobErrorCode =
  | "ConflictException"
  | "InternalServerErrorException"
  | "ResourceNotFoundException"
  | "ValidationException"
  | "AccessDeniedException"
  | "ThrottlingException"
  | (string & {});
const BatchUpdateJobErrorCode = S.String;

export interface BatchUpdateJobError_ {
  farmId: string;
  queueId: string;
  jobId: string;
  code: BatchUpdateJobErrorCode;
  message: string;
}
const BatchUpdateJobError_ = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<BatchUpdateJobError_>;
export type BatchUpdateJobErrors = BatchUpdateJobError_[];
const BatchUpdateJobErrors = /*@__PURE__*/ __L.at(__c15, 4);
export interface BatchUpdateJobResponse {
  errors: BatchUpdateJobError_[];
}
const BatchUpdateJobResponse = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<BatchUpdateJobResponse>;
export interface BatchUpdateTaskItem {
  farmId: string;
  queueId: string;
  jobId: string;
  stepId: string;
  taskId: string;
  targetRunStatus: TaskTargetRunStatus;
}
const BatchUpdateTaskItem = /*@__PURE__*/ __L.at(__c15, 6) as any as S.Schema<BatchUpdateTaskItem>;
export type BatchUpdateTaskItems = BatchUpdateTaskItem[];
const BatchUpdateTaskItems = /*@__PURE__*/ __L.at(__c15, 7);
export interface BatchUpdateTaskRequest {
  clientToken?: string;
  tasks: BatchUpdateTaskItem[];
}
const BatchUpdateTaskRequest = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<BatchUpdateTaskRequest>;
export type BatchUpdateTaskErrorCode =
  | "ConflictException"
  | "InternalServerErrorException"
  | "ResourceNotFoundException"
  | "ValidationException"
  | "AccessDeniedException"
  | "ThrottlingException"
  | (string & {});
const BatchUpdateTaskErrorCode = S.String;

export interface BatchUpdateTaskError_ {
  farmId: string;
  queueId: string;
  jobId: string;
  stepId: string;
  taskId: string;
  code: BatchUpdateTaskErrorCode;
  message: string;
}
const BatchUpdateTaskError_ = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<BatchUpdateTaskError_>;
export type BatchUpdateTaskErrors = BatchUpdateTaskError_[];
const BatchUpdateTaskErrors = /*@__PURE__*/ __L.at(__c16, 2);
export interface BatchUpdateTaskResponse {
  errors: BatchUpdateTaskError_[];
}
const BatchUpdateTaskResponse = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<BatchUpdateTaskResponse>;
export type S3Key = string;
export interface S3Location {
  bucketName: string;
  key: string;
}
const S3Location = /*@__PURE__*/ __L.at(__c16, 4) as any as S.Schema<S3Location>;
export interface CopyJobTemplateRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  targetS3Location: S3Location;
}
const CopyJobTemplateRequest = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<CopyJobTemplateRequest>;
export type JobTemplateType = "JSON" | "YAML" | (string & {});
const JobTemplateType = S.String;

export interface CopyJobTemplateResponse {
  templateType: JobTemplateType;
}
const CopyJobTemplateResponse = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<CopyJobTemplateResponse>;
export type ResourceName = string;
export type Description = string | redacted.Redacted<string>;
export type UsageTrackingResource = { queueId: string };
const UsageTrackingResource = /*@__PURE__*/ __L.at(__c16, 7);
export type ConsumedUsageLimit = number;
export type BudgetActionType =
  | "STOP_SCHEDULING_AND_COMPLETE_TASKS"
  | "STOP_SCHEDULING_AND_CANCEL_TASKS"
  | (string & {});
const BudgetActionType = S.String;

export type ThresholdPercentage = number;
export interface BudgetActionToAdd {
  type: BudgetActionType;
  thresholdPercentage: number;
  description?: string | redacted.Redacted<string>;
}
const BudgetActionToAdd = /*@__PURE__*/ __L.at(__c17, 0) as any as S.Schema<BudgetActionToAdd>;
export type BudgetActionsToAdd = BudgetActionToAdd[];
const BudgetActionsToAdd = /*@__PURE__*/ __L.at(__c17, 1);
export type StartsAt = Date;
export type EndsAt = Date;
export interface FixedBudgetSchedule {
  startTime: Date;
  endTime: Date;
}
const FixedBudgetSchedule = /*@__PURE__*/ __L.at(__c17, 2) as any as S.Schema<FixedBudgetSchedule>;
export type BudgetSchedule = { fixed: FixedBudgetSchedule };
const BudgetSchedule = /*@__PURE__*/ __L.at(__c17, 3);
export type Tags = { [key: string]: string | undefined };
const Tags = LogOptions as any as S.Schema<Tags>;
export interface CreateBudgetRequest {
  farmId: string;
  displayName: string;
  description?: string | redacted.Redacted<string>;
  clientToken?: string;
  usageTrackingResource: UsageTrackingResource;
  approximateDollarLimit: number;
  actions: BudgetActionToAdd[];
  schedule: BudgetSchedule;
  tags?: { [key: string]: string | undefined };
}
const CreateBudgetRequest = /*@__PURE__*/ __L.at(__c17, 4) as any as S.Schema<CreateBudgetRequest>;
export type BudgetId = string;
export interface CreateBudgetResponse {
  budgetId: string;
}
const CreateBudgetResponse = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<CreateBudgetResponse>;
export type KmsKeyArn = string;
export type CostScaleFactor = number;
export interface CreateFarmRequest {
  clientToken?: string;
  displayName: string;
  description?: string | redacted.Redacted<string>;
  kmsKeyArn?: string;
  costScaleFactor?: number;
  tags?: { [key: string]: string | undefined };
}
const CreateFarmRequest = /*@__PURE__*/ __L.at(__c17, 6) as any as S.Schema<CreateFarmRequest>;
export interface CreateFarmResponse {
  farmId: string;
}
const CreateFarmResponse = /*@__PURE__*/ __L.at(__c17, 7) as any as S.Schema<CreateFarmResponse>;
export type MinZeroMaxInteger = number;
export type AutoScalingMode = "NO_SCALING" | "EVENT_BASED_AUTO_SCALING" | (string & {});
const AutoScalingMode = S.String;

export interface CustomerManagedAutoScalingConfiguration {
  standbyWorkerCount?: number;
  workerIdleDurationSeconds?: number;
  scaleOutWorkersPerMinute?: number;
}
const CustomerManagedAutoScalingConfiguration = /*@__PURE__*/ __L.at(
  __c18,
  0,
) as any as S.Schema<CustomerManagedAutoScalingConfiguration>;
export type MinOneMaxTenThousand = number;
export interface VCpuCountRange {
  min: number;
  max?: number;
}
const VCpuCountRange = /*@__PURE__*/ __L.at(__c18, 1) as any as S.Schema<VCpuCountRange>;
export type MemoryAmountMiB = number;
export interface MemoryMiBRange {
  min: number;
  max?: number;
}
const MemoryMiBRange = VCpuCountRange as any as S.Schema<MemoryMiBRange>;
export type AcceleratorType = "gpu" | (string & {});
const AcceleratorType = S.String;

export type AcceleratorTypes = AcceleratorType[];
const AcceleratorTypes = /*@__PURE__*/ __L.at(__c18, 2);
export interface AcceleratorCountRange {
  min: number;
  max?: number;
}
const AcceleratorCountRange = VCpuCountRange as any as S.Schema<AcceleratorCountRange>;
export interface AcceleratorTotalMemoryMiBRange {
  min: number;
  max?: number;
}
const AcceleratorTotalMemoryMiBRange = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<AcceleratorTotalMemoryMiBRange>;
export type CustomerManagedFleetOperatingSystemFamily =
  | "WINDOWS"
  | "LINUX"
  | "MACOS"
  | (string & {});
const CustomerManagedFleetOperatingSystemFamily = S.String;

export type CpuArchitectureType = "x86_64" | "arm64" | (string & {});
const CpuArchitectureType = S.String;

export interface FleetAmountCapability {
  name: string;
  min: number;
  max?: number;
}
const FleetAmountCapability = /*@__PURE__*/ __L.at(
  __c18,
  4,
) as any as S.Schema<FleetAmountCapability>;
export type CustomFleetAmountCapabilities = FleetAmountCapability[];
const CustomFleetAmountCapabilities = /*@__PURE__*/ __L.at(__c18, 5);
export type AttributeCapabilityValuesList = string[];
const AttributeCapabilityValuesList =
  ParameterStringList as any as S.Schema<AttributeCapabilityValuesList>;
export interface FleetAttributeCapability {
  name: string;
  values: string[];
}
const FleetAttributeCapability = /*@__PURE__*/ __L.at(
  __c18,
  6,
) as any as S.Schema<FleetAttributeCapability>;
export type CustomFleetAttributeCapabilities = FleetAttributeCapability[];
const CustomFleetAttributeCapabilities = /*@__PURE__*/ __L.at(__c18, 7);
export interface CustomerManagedWorkerCapabilities {
  vCpuCount: VCpuCountRange;
  memoryMiB: MemoryMiBRange;
  acceleratorTypes?: AcceleratorType[];
  acceleratorCount?: AcceleratorCountRange;
  acceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRange;
  osFamily: CustomerManagedFleetOperatingSystemFamily;
  cpuArchitectureType: CpuArchitectureType;
  customAmounts?: FleetAmountCapability[];
  customAttributes?: FleetAttributeCapability[];
}
const CustomerManagedWorkerCapabilities = /*@__PURE__*/ __L.at(
  __c19,
  0,
) as any as S.Schema<CustomerManagedWorkerCapabilities>;
export type TagPropagationMode =
  | "NO_PROPAGATION"
  | "PROPAGATE_TAGS_TO_WORKERS_AT_LAUNCH"
  | (string & {});
const TagPropagationMode = S.String;

export interface CustomerManagedFleetConfiguration {
  mode: AutoScalingMode;
  autoScalingConfiguration?: CustomerManagedAutoScalingConfiguration;
  workerCapabilities: CustomerManagedWorkerCapabilities;
  storageProfileId?: string;
  tagPropagationMode?: TagPropagationMode;
}
const CustomerManagedFleetConfiguration = /*@__PURE__*/ __L.at(
  __c19,
  1,
) as any as S.Schema<CustomerManagedFleetConfiguration>;
export type ServiceManagedFleetOperatingSystemFamily = "WINDOWS" | "LINUX" | (string & {});
const ServiceManagedFleetOperatingSystemFamily = S.String;

export type EbsIops = number;
export type EbsThroughputMiB = number;
export interface Ec2EbsVolume {
  sizeGiB?: number;
  iops?: number;
  throughputMiB?: number;
}
const Ec2EbsVolume = /*@__PURE__*/ __L.at(__c19, 2) as any as S.Schema<Ec2EbsVolume>;
export type AcceleratorName = "t4" | "a10g" | "l4" | "l40s" | "rtx-pro-server-6000" | (string & {});
const AcceleratorName = S.String;

export type AcceleratorRuntime = string;
export interface AcceleratorSelection {
  name: AcceleratorName;
  runtime?: string;
}
const AcceleratorSelection = /*@__PURE__*/ __L.at(
  __c19,
  3,
) as any as S.Schema<AcceleratorSelection>;
export type AcceleratorSelections = AcceleratorSelection[];
const AcceleratorSelections = /*@__PURE__*/ __L.at(__c19, 4);
export interface AcceleratorCapabilities {
  selections: AcceleratorSelection[];
  count?: AcceleratorCountRange;
}
const AcceleratorCapabilities = /*@__PURE__*/ __L.at(
  __c19,
  5,
) as any as S.Schema<AcceleratorCapabilities>;
export type InstanceTypes = string[];
const InstanceTypes = ParameterStringList as any as S.Schema<InstanceTypes>;
export type FleetSoftwareAddOnName = "docker" | (string & {});
const FleetSoftwareAddOnName = S.String;

export interface FleetSoftwareAddOn {
  name: FleetSoftwareAddOnName;
}
const FleetSoftwareAddOn = /*@__PURE__*/ __L.at(__c19, 6) as any as S.Schema<FleetSoftwareAddOn>;
export type FleetSoftwareAddOns = FleetSoftwareAddOn[];
const FleetSoftwareAddOns = /*@__PURE__*/ __L.at(__c19, 7);
export interface ServiceManagedEc2InstanceCapabilities {
  vCpuCount: VCpuCountRange;
  memoryMiB: MemoryMiBRange;
  osFamily: ServiceManagedFleetOperatingSystemFamily;
  cpuArchitectureType: CpuArchitectureType;
  rootEbsVolume?: Ec2EbsVolume;
  acceleratorCapabilities?: AcceleratorCapabilities;
  allowedInstanceTypes?: string[];
  excludedInstanceTypes?: string[];
  customAmounts?: FleetAmountCapability[];
  customAttributes?: FleetAttributeCapability[];
  softwareAddOns?: FleetSoftwareAddOn[];
}
const ServiceManagedEc2InstanceCapabilities = /*@__PURE__*/ __L.at(
  __c20,
  0,
) as any as S.Schema<ServiceManagedEc2InstanceCapabilities>;
export type Ec2MarketType = "on-demand" | "spot" | "wait-and-save" | (string & {});
const Ec2MarketType = S.String;

export interface ServiceManagedEc2InstanceMarketOptions {
  type: Ec2MarketType;
}
const ServiceManagedEc2InstanceMarketOptions = /*@__PURE__*/ __L.at(
  __c20,
  1,
) as any as S.Schema<ServiceManagedEc2InstanceMarketOptions>;
export type VpcResourceConfigurationArn = string;
export type VpcResourceConfigurationArns = string[];
const VpcResourceConfigurationArns =
  ParameterStringList as any as S.Schema<VpcResourceConfigurationArns>;
export interface VpcConfiguration {
  resourceConfigurationArns?: string[];
}
const VpcConfiguration = /*@__PURE__*/ __L.at(__c20, 2) as any as S.Schema<VpcConfiguration>;
export type PersistentVolumeSizeGiB = number;
export type PersistentVolumeIops = number;
export type PersistentVolumeThroughputMiB = number;
export type MountPath = string;
export type PersistentVolumeTtlHours = number;
export interface PersistentVolumeConfiguration {
  sizeGiB?: number;
  iops?: number;
  throughputMiB?: number;
  mountPath: string;
  lastUsedTtlHours?: number;
}
const PersistentVolumeConfiguration = /*@__PURE__*/ __L.at(
  __c20,
  3,
) as any as S.Schema<PersistentVolumeConfiguration>;
export type ServiceManagedEc2WorkerIdleDurationSeconds = number;
export interface ServiceManagedEc2AutoScalingConfiguration {
  standbyWorkerCount?: number;
  workerIdleDurationSeconds?: number;
  scaleOutWorkersPerMinute?: number;
}
const ServiceManagedEc2AutoScalingConfiguration =
  CustomerManagedAutoScalingConfiguration as any as S.Schema<ServiceManagedEc2AutoScalingConfiguration>;
export interface ServiceManagedEc2FleetConfiguration {
  instanceCapabilities: ServiceManagedEc2InstanceCapabilities;
  instanceMarketOptions: ServiceManagedEc2InstanceMarketOptions;
  vpcConfiguration?: VpcConfiguration;
  storageProfileId?: string;
  persistentVolumeConfiguration?: PersistentVolumeConfiguration;
  autoScalingConfiguration?: ServiceManagedEc2AutoScalingConfiguration;
}
const ServiceManagedEc2FleetConfiguration = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<ServiceManagedEc2FleetConfiguration>;
export type FleetConfiguration =
  | { customerManaged: CustomerManagedFleetConfiguration; serviceManagedEc2?: never }
  | { customerManaged?: never; serviceManagedEc2: ServiceManagedEc2FleetConfiguration };
const FleetConfiguration = /*@__PURE__*/ __L.at(__c20, 5);
export type HostConfigurationScript = string | redacted.Redacted<string>;
export type HostConfigurationScriptTimeoutSeconds = number;
export interface HostConfiguration {
  scriptBody: string | redacted.Redacted<string>;
  scriptTimeoutSeconds?: number;
}
const HostConfiguration = /*@__PURE__*/ __L.at(__c20, 6) as any as S.Schema<HostConfiguration>;
export interface CreateFleetRequest {
  farmId: string;
  clientToken?: string;
  displayName: string;
  description?: string | redacted.Redacted<string>;
  roleArn: string;
  minWorkerCount?: number;
  maxWorkerCount: number;
  configuration: FleetConfiguration;
  tags?: { [key: string]: string | undefined };
  hostConfiguration?: HostConfiguration;
}
const CreateFleetRequest = /*@__PURE__*/ __L.at(__c20, 7) as any as S.Schema<CreateFleetRequest>;
export interface CreateFleetResponse {
  fleetId: string;
}
const CreateFleetResponse = /*@__PURE__*/ __L.at(__c21, 0) as any as S.Schema<CreateFleetResponse>;
export type JobTemplate = string | redacted.Redacted<string>;
export type CreateJobTargetTaskRunStatus = "READY" | "SUSPENDED" | (string & {});
const CreateJobTargetTaskRunStatus = S.String;

export interface CreateJobRequest {
  farmId: string;
  queueId: string;
  clientToken?: string;
  template?: string | redacted.Redacted<string>;
  templateType?: JobTemplateType;
  priority: number;
  parameters?: { [key: string]: JobParameter | undefined };
  attachments?: Attachments;
  storageProfileId?: string;
  targetTaskRunStatus?: CreateJobTargetTaskRunStatus;
  maxFailedTasksCount?: number;
  maxRetriesPerTask?: number;
  maxWorkerCount?: number;
  sourceJobId?: string;
  nameOverride?: string;
  descriptionOverride?: string | redacted.Redacted<string>;
  tags?: { [key: string]: string | undefined };
}
const CreateJobRequest = /*@__PURE__*/ __L.at(__c21, 1) as any as S.Schema<CreateJobRequest>;
export interface CreateJobResponse {
  jobId: string;
}
const CreateJobResponse = JobDetailsIdentifiers as any as S.Schema<CreateJobResponse>;
export type VpcId = string;
export type SubnetId = string;
export type SubnetIdList = string[];
const SubnetIdList = ParameterStringList as any as S.Schema<SubnetIdList>;
export type SecurityGroupId = string;
export type SecurityGroupIdList = string[];
const SecurityGroupIdList = ParameterStringList as any as S.Schema<SecurityGroupIdList>;
export interface CreateLicenseEndpointRequest {
  clientToken?: string;
  vpcId: string;
  subnetIds: string[];
  securityGroupIds: string[];
  tags?: { [key: string]: string | undefined };
}
const CreateLicenseEndpointRequest = /*@__PURE__*/ __L.at(
  __c21,
  2,
) as any as S.Schema<CreateLicenseEndpointRequest>;
export type LicenseEndpointId = string;
export interface CreateLicenseEndpointResponse {
  licenseEndpointId: string;
}
const CreateLicenseEndpointResponse = /*@__PURE__*/ __L.at(
  __c21,
  3,
) as any as S.Schema<CreateLicenseEndpointResponse>;
export type AmountRequirementName = string;
export type MaxCount = number;
export interface CreateLimitRequest {
  farmId: string;
  clientToken?: string;
  displayName: string;
  amountRequirementName: string;
  maxCount: number;
  description?: string | redacted.Redacted<string>;
}
const CreateLimitRequest = /*@__PURE__*/ __L.at(__c21, 4) as any as S.Schema<CreateLimitRequest>;
export interface CreateLimitResponse {
  limitId: string;
}
const CreateLimitResponse = /*@__PURE__*/ __L.at(__c21, 5) as any as S.Schema<CreateLimitResponse>;
export type IdentityCenterInstanceArn = string;
export type Subdomain = string;
export interface CreateMonitorRequest {
  clientToken?: string;
  displayName: string;
  identityCenterInstanceArn: string;
  identityCenterRegion?: string;
  subdomain: string;
  roleArn: string;
  tags?: { [key: string]: string | undefined };
}
const CreateMonitorRequest = /*@__PURE__*/ __L.at(
  __c21,
  6,
) as any as S.Schema<CreateMonitorRequest>;
export type MonitorId = string;
export type IdentityCenterApplicationArn = string;
export interface CreateMonitorResponse {
  monitorId: string;
  identityCenterApplicationArn: string;
}
const CreateMonitorResponse = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<CreateMonitorResponse>;
export type DefaultQueueBudgetAction =
  | "NONE"
  | "STOP_SCHEDULING_AND_COMPLETE_TASKS"
  | "STOP_SCHEDULING_AND_CANCEL_TASKS"
  | (string & {});
const DefaultQueueBudgetAction = S.String;

export interface JobAttachmentSettings {
  s3BucketName: string;
  rootPrefix: string;
}
const JobAttachmentSettings = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<JobAttachmentSettings>;
export type RequiredFileSystemLocationNames = string[];
const RequiredFileSystemLocationNames =
  ParameterStringList as any as S.Schema<RequiredFileSystemLocationNames>;
export type AllowedStorageProfileIds = string[];
const AllowedStorageProfileIds = ParameterStringList as any as S.Schema<AllowedStorageProfileIds>;
export interface PriorityFifoSchedulingConfiguration {}
const PriorityFifoSchedulingConfiguration = /*@__PURE__*/ __L.at(
  __c22,
  1,
) as any as S.Schema<PriorityFifoSchedulingConfiguration>;
export type SchedulingRenderingTaskBuffer = number;
export interface PriorityBalancedSchedulingConfiguration {
  renderingTaskBuffer?: number;
}
const PriorityBalancedSchedulingConfiguration = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<PriorityBalancedSchedulingConfiguration>;
export type SchedulingPriorityWeight = number;
export type SchedulingErrorWeight = number;
export type SchedulingSubmissionTimeWeight = number;
export type SchedulingRenderingTaskWeight = number;
export interface SchedulingMaxPriorityOverrideAlwaysScheduleFirst {}
const SchedulingMaxPriorityOverrideAlwaysScheduleFirst =
  PriorityFifoSchedulingConfiguration as any as S.Schema<SchedulingMaxPriorityOverrideAlwaysScheduleFirst>;
export type SchedulingMaxPriorityOverride = {
  alwaysScheduleFirst: SchedulingMaxPriorityOverrideAlwaysScheduleFirst;
};
const SchedulingMaxPriorityOverride = /*@__PURE__*/ __L.at(__c22, 3);
export interface SchedulingMinPriorityOverrideAlwaysScheduleLast {}
const SchedulingMinPriorityOverrideAlwaysScheduleLast =
  PriorityFifoSchedulingConfiguration as any as S.Schema<SchedulingMinPriorityOverrideAlwaysScheduleLast>;
export type SchedulingMinPriorityOverride = {
  alwaysScheduleLast: SchedulingMinPriorityOverrideAlwaysScheduleLast;
};
const SchedulingMinPriorityOverride = /*@__PURE__*/ __L.at(__c22, 4);
export interface WeightedBalancedSchedulingConfiguration {
  priorityWeight?: number;
  errorWeight?: number;
  submissionTimeWeight?: number;
  renderingTaskWeight?: number;
  renderingTaskBuffer?: number;
  maxPriorityOverride?: SchedulingMaxPriorityOverride;
  minPriorityOverride?: SchedulingMinPriorityOverride;
}
const WeightedBalancedSchedulingConfiguration = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<WeightedBalancedSchedulingConfiguration>;
export type SchedulingConfiguration =
  | {
      priorityFifo: PriorityFifoSchedulingConfiguration;
      priorityBalanced?: never;
      weightedBalanced?: never;
    }
  | {
      priorityFifo?: never;
      priorityBalanced: PriorityBalancedSchedulingConfiguration;
      weightedBalanced?: never;
    }
  | {
      priorityFifo?: never;
      priorityBalanced?: never;
      weightedBalanced: WeightedBalancedSchedulingConfiguration;
    };
const SchedulingConfiguration = /*@__PURE__*/ __L.at(__c22, 6);
export interface CreateQueueRequest {
  farmId: string;
  clientToken?: string;
  displayName: string;
  description?: string | redacted.Redacted<string>;
  defaultBudgetAction?: DefaultQueueBudgetAction;
  jobAttachmentSettings?: JobAttachmentSettings;
  roleArn?: string;
  jobRunAsUser?: JobRunAsUser;
  requiredFileSystemLocationNames?: string[];
  allowedStorageProfileIds?: string[];
  tags?: { [key: string]: string | undefined };
  schedulingConfiguration?: SchedulingConfiguration;
}
const CreateQueueRequest = /*@__PURE__*/ __L.at(__c22, 7) as any as S.Schema<CreateQueueRequest>;
export interface CreateQueueResponse {
  queueId: string;
}
const CreateQueueResponse = /*@__PURE__*/ __L.at(__c23, 0) as any as S.Schema<CreateQueueResponse>;
export type Priority = number;
export type EnvironmentTemplateType = "JSON" | "YAML" | (string & {});
const EnvironmentTemplateType = S.String;

export type EnvironmentTemplate = string | redacted.Redacted<string>;
export interface CreateQueueEnvironmentRequest {
  farmId: string;
  queueId: string;
  clientToken?: string;
  priority: number;
  templateType: EnvironmentTemplateType;
  template: string | redacted.Redacted<string>;
}
const CreateQueueEnvironmentRequest = /*@__PURE__*/ __L.at(
  __c23,
  1,
) as any as S.Schema<CreateQueueEnvironmentRequest>;
export type QueueEnvironmentId = string;
export interface CreateQueueEnvironmentResponse {
  queueEnvironmentId: string;
}
const CreateQueueEnvironmentResponse = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<CreateQueueEnvironmentResponse>;
export interface CreateQueueFleetAssociationRequest {
  farmId: string;
  queueId: string;
  fleetId: string;
}
const CreateQueueFleetAssociationRequest = /*@__PURE__*/ __L.at(
  __c23,
  3,
) as any as S.Schema<CreateQueueFleetAssociationRequest>;
export interface CreateQueueFleetAssociationResponse {}
const CreateQueueFleetAssociationResponse =
  PriorityFifoSchedulingConfiguration as any as S.Schema<CreateQueueFleetAssociationResponse>;
export interface CreateQueueLimitAssociationRequest {
  farmId: string;
  queueId: string;
  limitId: string;
}
const CreateQueueLimitAssociationRequest = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<CreateQueueLimitAssociationRequest>;
export interface CreateQueueLimitAssociationResponse {}
const CreateQueueLimitAssociationResponse =
  PriorityFifoSchedulingConfiguration as any as S.Schema<CreateQueueLimitAssociationResponse>;
export type StorageProfileOperatingSystemFamily = "WINDOWS" | "LINUX" | "MACOS" | (string & {});
const StorageProfileOperatingSystemFamily = S.String;

export type FileSystemLocationType = "SHARED" | "LOCAL" | (string & {});
const FileSystemLocationType = S.String;

export interface FileSystemLocation {
  name: string;
  path: string;
  type: FileSystemLocationType;
}
const FileSystemLocation = /*@__PURE__*/ __L.at(__c23, 5) as any as S.Schema<FileSystemLocation>;
export type FileSystemLocationsList = FileSystemLocation[];
const FileSystemLocationsList = /*@__PURE__*/ __L.at(__c23, 6);
export interface CreateStorageProfileRequest {
  farmId: string;
  clientToken?: string;
  displayName: string;
  osFamily: StorageProfileOperatingSystemFamily;
  fileSystemLocations?: FileSystemLocation[];
}
const CreateStorageProfileRequest = /*@__PURE__*/ __L.at(
  __c23,
  7,
) as any as S.Schema<CreateStorageProfileRequest>;
export interface CreateStorageProfileResponse {
  storageProfileId: string;
}
const CreateStorageProfileResponse = /*@__PURE__*/ __L.at(
  __c24,
  0,
) as any as S.Schema<CreateStorageProfileResponse>;
export interface HostPropertiesRequest {
  ipAddresses?: IpAddresses;
  hostName?: string;
}
const HostPropertiesRequest = /*@__PURE__*/ __L.at(
  __c24,
  1,
) as any as S.Schema<HostPropertiesRequest>;
export interface CreateWorkerRequest {
  farmId: string;
  fleetId: string;
  hostProperties?: HostPropertiesRequest;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateWorkerRequest = /*@__PURE__*/ __L.at(__c24, 2) as any as S.Schema<CreateWorkerRequest>;
export interface CreateWorkerResponse {
  workerId: string;
}
const CreateWorkerResponse = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<CreateWorkerResponse>;
export interface DeleteBudgetRequest {
  farmId: string;
  budgetId: string;
}
const DeleteBudgetRequest = /*@__PURE__*/ __L.at(__c24, 4) as any as S.Schema<DeleteBudgetRequest>;
export interface DeleteBudgetResponse {}
const DeleteBudgetResponse = AssociateMemberToFarmResponse as any as S.Schema<DeleteBudgetResponse>;
export interface DeleteFarmRequest {
  farmId: string;
}
const DeleteFarmRequest = /*@__PURE__*/ __L.at(__c24, 5) as any as S.Schema<DeleteFarmRequest>;
export interface DeleteFarmResponse {}
const DeleteFarmResponse = AssociateMemberToFarmResponse as any as S.Schema<DeleteFarmResponse>;
export interface DeleteFleetRequest {
  farmId: string;
  fleetId: string;
  clientToken?: string;
}
const DeleteFleetRequest = /*@__PURE__*/ __L.at(__c24, 6) as any as S.Schema<DeleteFleetRequest>;
export interface DeleteFleetResponse {}
const DeleteFleetResponse = AssociateMemberToFarmResponse as any as S.Schema<DeleteFleetResponse>;
export interface DeleteLicenseEndpointRequest {
  licenseEndpointId: string;
}
const DeleteLicenseEndpointRequest = /*@__PURE__*/ __L.at(
  __c24,
  7,
) as any as S.Schema<DeleteLicenseEndpointRequest>;
export interface DeleteLicenseEndpointResponse {}
const DeleteLicenseEndpointResponse =
  AssociateMemberToFarmResponse as any as S.Schema<DeleteLicenseEndpointResponse>;
export interface DeleteLimitRequest {
  farmId: string;
  limitId: string;
}
const DeleteLimitRequest = /*@__PURE__*/ __L.at(__c25, 0) as any as S.Schema<DeleteLimitRequest>;
export interface DeleteLimitResponse {}
const DeleteLimitResponse = AssociateMemberToFarmResponse as any as S.Schema<DeleteLimitResponse>;
export type MeteredProductId = string;
export interface DeleteMeteredProductRequest {
  licenseEndpointId: string;
  productId: string;
}
const DeleteMeteredProductRequest = /*@__PURE__*/ __L.at(
  __c25,
  1,
) as any as S.Schema<DeleteMeteredProductRequest>;
export interface DeleteMeteredProductResponse {}
const DeleteMeteredProductResponse =
  AssociateMemberToFarmResponse as any as S.Schema<DeleteMeteredProductResponse>;
export interface DeleteMonitorRequest {
  monitorId: string;
}
const DeleteMonitorRequest = /*@__PURE__*/ __L.at(
  __c25,
  2,
) as any as S.Schema<DeleteMonitorRequest>;
export interface DeleteMonitorResponse {}
const DeleteMonitorResponse =
  AssociateMemberToFarmResponse as any as S.Schema<DeleteMonitorResponse>;
export interface DeleteQueueRequest {
  farmId: string;
  queueId: string;
}
const DeleteQueueRequest = /*@__PURE__*/ __L.at(__c25, 3) as any as S.Schema<DeleteQueueRequest>;
export interface DeleteQueueResponse {}
const DeleteQueueResponse = AssociateMemberToFarmResponse as any as S.Schema<DeleteQueueResponse>;
export interface DeleteQueueEnvironmentRequest {
  farmId: string;
  queueId: string;
  queueEnvironmentId: string;
}
const DeleteQueueEnvironmentRequest = /*@__PURE__*/ __L.at(
  __c25,
  4,
) as any as S.Schema<DeleteQueueEnvironmentRequest>;
export interface DeleteQueueEnvironmentResponse {}
const DeleteQueueEnvironmentResponse =
  AssociateMemberToFarmResponse as any as S.Schema<DeleteQueueEnvironmentResponse>;
export interface DeleteQueueFleetAssociationRequest {
  farmId: string;
  queueId: string;
  fleetId: string;
}
const DeleteQueueFleetAssociationRequest = /*@__PURE__*/ __L.at(
  __c25,
  5,
) as any as S.Schema<DeleteQueueFleetAssociationRequest>;
export interface DeleteQueueFleetAssociationResponse {}
const DeleteQueueFleetAssociationResponse =
  PriorityFifoSchedulingConfiguration as any as S.Schema<DeleteQueueFleetAssociationResponse>;
export interface DeleteQueueLimitAssociationRequest {
  farmId: string;
  queueId: string;
  limitId: string;
}
const DeleteQueueLimitAssociationRequest = /*@__PURE__*/ __L.at(
  __c25,
  6,
) as any as S.Schema<DeleteQueueLimitAssociationRequest>;
export interface DeleteQueueLimitAssociationResponse {}
const DeleteQueueLimitAssociationResponse =
  PriorityFifoSchedulingConfiguration as any as S.Schema<DeleteQueueLimitAssociationResponse>;
export interface DeleteStorageProfileRequest {
  farmId: string;
  storageProfileId: string;
}
const DeleteStorageProfileRequest = /*@__PURE__*/ __L.at(
  __c25,
  7,
) as any as S.Schema<DeleteStorageProfileRequest>;
export interface DeleteStorageProfileResponse {}
const DeleteStorageProfileResponse =
  AssociateMemberToFarmResponse as any as S.Schema<DeleteStorageProfileResponse>;
export type VolumeId = string;
export interface DeleteVolumeRequest {
  farmId: string;
  fleetId: string;
  volumeId: string;
}
const DeleteVolumeRequest = /*@__PURE__*/ __L.at(__c26, 0) as any as S.Schema<DeleteVolumeRequest>;
export interface DeleteVolumeResponse {}
const DeleteVolumeResponse = AssociateMemberToFarmResponse as any as S.Schema<DeleteVolumeResponse>;
export interface DeleteWorkerRequest {
  farmId: string;
  fleetId: string;
  workerId: string;
}
const DeleteWorkerRequest = /*@__PURE__*/ __L.at(__c26, 1) as any as S.Schema<DeleteWorkerRequest>;
export interface DeleteWorkerResponse {}
const DeleteWorkerResponse = AssociateMemberToFarmResponse as any as S.Schema<DeleteWorkerResponse>;
export interface DisassociateMemberFromFarmRequest {
  farmId: string;
  principalId: string;
}
const DisassociateMemberFromFarmRequest = /*@__PURE__*/ __L.at(
  __c26,
  2,
) as any as S.Schema<DisassociateMemberFromFarmRequest>;
export interface DisassociateMemberFromFarmResponse {}
const DisassociateMemberFromFarmResponse =
  PriorityFifoSchedulingConfiguration as any as S.Schema<DisassociateMemberFromFarmResponse>;
export interface DisassociateMemberFromFleetRequest {
  farmId: string;
  fleetId: string;
  principalId: string;
}
const DisassociateMemberFromFleetRequest = /*@__PURE__*/ __L.at(
  __c26,
  3,
) as any as S.Schema<DisassociateMemberFromFleetRequest>;
export interface DisassociateMemberFromFleetResponse {}
const DisassociateMemberFromFleetResponse =
  PriorityFifoSchedulingConfiguration as any as S.Schema<DisassociateMemberFromFleetResponse>;
export interface DisassociateMemberFromJobRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  principalId: string;
}
const DisassociateMemberFromJobRequest = /*@__PURE__*/ __L.at(
  __c26,
  4,
) as any as S.Schema<DisassociateMemberFromJobRequest>;
export interface DisassociateMemberFromJobResponse {}
const DisassociateMemberFromJobResponse =
  PriorityFifoSchedulingConfiguration as any as S.Schema<DisassociateMemberFromJobResponse>;
export interface DisassociateMemberFromQueueRequest {
  farmId: string;
  queueId: string;
  principalId: string;
}
const DisassociateMemberFromQueueRequest = /*@__PURE__*/ __L.at(
  __c26,
  5,
) as any as S.Schema<DisassociateMemberFromQueueRequest>;
export interface DisassociateMemberFromQueueResponse {}
const DisassociateMemberFromQueueResponse =
  PriorityFifoSchedulingConfiguration as any as S.Schema<DisassociateMemberFromQueueResponse>;
export interface GetBudgetRequest {
  farmId: string;
  budgetId: string;
}
const GetBudgetRequest = /*@__PURE__*/ __L.at(__c26, 6) as any as S.Schema<GetBudgetRequest>;
export type BudgetStatus = "ACTIVE" | "INACTIVE" | (string & {});
const BudgetStatus = S.String;

export interface ConsumedUsages {
  approximateDollarUsage: number;
}
const ConsumedUsages = /*@__PURE__*/ __L.at(__c26, 7) as any as S.Schema<ConsumedUsages>;
export interface ResponseBudgetAction {
  type: BudgetActionType;
  thresholdPercentage: number;
  description?: string | redacted.Redacted<string>;
}
export type ResponseBudgetActionList = ResponseBudgetAction[];
const ResponseBudgetActionList = BudgetActionsToAdd as any as S.Schema<ResponseBudgetActionList>;
export interface GetBudgetResponse {
  budgetId: string;
  usageTrackingResource: UsageTrackingResource;
  status: BudgetStatus;
  displayName: string;
  approximateDollarLimit: number;
  usages: ConsumedUsages;
  createdBy: string;
  createdAt: Date;
  updatedBy?: string;
  updatedAt?: Date;
  description?: string | redacted.Redacted<string>;
  actions: ResponseBudgetAction[];
  schedule: BudgetSchedule;
  queueStoppedAt?: Date;
}
const GetBudgetResponse = /*@__PURE__*/ __L.at(__c27, 0) as any as S.Schema<GetBudgetResponse>;
export interface GetFarmRequest {
  farmId: string;
}
const GetFarmRequest = /*@__PURE__*/ __L.at(__c27, 1) as any as S.Schema<GetFarmRequest>;
export interface GetFarmResponse {
  farmId: string;
  displayName: string;
  kmsKeyArn?: string;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
  description?: string | redacted.Redacted<string>;
  costScaleFactor: number;
}
const GetFarmResponse = /*@__PURE__*/ __L.at(__c27, 2) as any as S.Schema<GetFarmResponse>;
export interface GetFleetRequest {
  farmId: string;
  fleetId: string;
}
const GetFleetRequest = /*@__PURE__*/ __L.at(__c27, 3) as any as S.Schema<GetFleetRequest>;
export type FleetStatus =
  | "ACTIVE"
  | "CREATE_IN_PROGRESS"
  | "UPDATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | "SUSPENDED"
  | (string & {});
const FleetStatus = S.String;

export type AutoScalingStatus = "GROWING" | "STEADY" | "SHRINKING" | (string & {});
const AutoScalingStatus = S.String;

export type FleetAmountCapabilities = FleetAmountCapability[];
const FleetAmountCapabilities =
  CustomFleetAmountCapabilities as any as S.Schema<FleetAmountCapabilities>;
export type FleetAttributeCapabilities = FleetAttributeCapability[];
const FleetAttributeCapabilities =
  CustomFleetAttributeCapabilities as any as S.Schema<FleetAttributeCapabilities>;
export interface FleetCapabilities {
  amounts?: FleetAmountCapability[];
  attributes?: FleetAttributeCapability[];
}
const FleetCapabilities = /*@__PURE__*/ __L.at(__c27, 4) as any as S.Schema<FleetCapabilities>;
export interface GetFleetResponse {
  fleetId: string;
  farmId: string;
  displayName: string;
  status: FleetStatus;
  statusMessage?: string;
  autoScalingStatus?: AutoScalingStatus;
  targetWorkerCount?: number;
  workerCount: number;
  minWorkerCount: number;
  maxWorkerCount: number;
  configuration: FleetConfiguration;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
  description?: string | redacted.Redacted<string>;
  hostConfiguration?: HostConfiguration;
  capabilities?: FleetCapabilities;
  roleArn: string;
}
const GetFleetResponse = /*@__PURE__*/ __L.at(__c27, 5) as any as S.Schema<GetFleetResponse>;
export interface GetJobRequest {
  farmId: string;
  queueId: string;
  jobId: string;
}
const GetJobRequest = /*@__PURE__*/ __L.at(__c27, 6) as any as S.Schema<GetJobRequest>;
export interface GetJobResponse {
  jobId: string;
  name: string;
  lifecycleStatus: JobLifecycleStatus;
  lifecycleStatusMessage: string;
  priority: number;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
  startedAt?: Date;
  endedAt?: Date;
  taskRunStatus?: TaskRunStatus;
  targetTaskRunStatus?: JobTargetTaskRunStatus;
  taskRunStatusCounts?: { [key: string]: number | undefined };
  taskFailureRetryCount?: number;
  storageProfileId?: string;
  maxFailedTasksCount?: number;
  maxRetriesPerTask?: number;
  parameters?: { [key: string]: JobParameter | undefined };
  attachments?: Attachments;
  description?: string | redacted.Redacted<string>;
  maxWorkerCount?: number;
  sourceJobId?: string;
}
const GetJobResponse = /*@__PURE__*/ __L.at(__c27, 7) as any as S.Schema<GetJobResponse>;
export interface GetLicenseEndpointRequest {
  licenseEndpointId: string;
}
const GetLicenseEndpointRequest = /*@__PURE__*/ __L.at(
  __c28,
  0,
) as any as S.Schema<GetLicenseEndpointRequest>;
export type LicenseEndpointStatus =
  | "CREATE_IN_PROGRESS"
  | "DELETE_IN_PROGRESS"
  | "READY"
  | "NOT_READY"
  | (string & {});
const LicenseEndpointStatus = S.String;

export type StatusMessage = string;
export type DnsName = string;
export interface GetLicenseEndpointResponse {
  licenseEndpointId: string;
  status: LicenseEndpointStatus;
  statusMessage: string;
  vpcId?: string;
  dnsName?: string;
  subnetIds?: string[];
  securityGroupIds?: string[];
}
const GetLicenseEndpointResponse = /*@__PURE__*/ __L.at(
  __c28,
  1,
) as any as S.Schema<GetLicenseEndpointResponse>;
export interface GetLimitRequest {
  farmId: string;
  limitId: string;
}
const GetLimitRequest = /*@__PURE__*/ __L.at(__c28, 2) as any as S.Schema<GetLimitRequest>;
export interface GetLimitResponse {
  farmId: string;
  limitId: string;
  currentCount: number;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
  displayName: string;
  amountRequirementName: string;
  maxCount: number;
  description?: string | redacted.Redacted<string>;
}
const GetLimitResponse = /*@__PURE__*/ __L.at(__c28, 3) as any as S.Schema<GetLimitResponse>;
export interface GetMonitorRequest {
  monitorId: string;
}
const GetMonitorRequest = /*@__PURE__*/ __L.at(__c28, 4) as any as S.Schema<GetMonitorRequest>;
export type Url = string;
export interface GetMonitorResponse {
  monitorId: string;
  displayName: string;
  subdomain: string;
  url: string;
  roleArn: string;
  identityCenterInstanceArn: string;
  identityCenterRegion?: string;
  identityCenterApplicationArn: string;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
}
const GetMonitorResponse = /*@__PURE__*/ __L.at(__c28, 5) as any as S.Schema<GetMonitorResponse>;
export interface GetMonitorSettingsRequest {
  monitorId: string;
}
const GetMonitorSettingsRequest = /*@__PURE__*/ __L.at(
  __c28,
  6,
) as any as S.Schema<GetMonitorSettingsRequest>;
export type SettingKey = string;
export type SettingValue = string;
export type SettingsMap = { [key: string]: string | undefined };
const SettingsMap = LogParameters as any as S.Schema<SettingsMap>;
export interface GetMonitorSettingsResponse {
  settings: { [key: string]: string | undefined };
}
const GetMonitorSettingsResponse = /*@__PURE__*/ __L.at(
  __c28,
  7,
) as any as S.Schema<GetMonitorSettingsResponse>;
export interface GetQueueRequest {
  farmId: string;
  queueId: string;
}
const GetQueueRequest = /*@__PURE__*/ __L.at(__c29, 0) as any as S.Schema<GetQueueRequest>;
export type QueueStatus = "IDLE" | "SCHEDULING" | "SCHEDULING_BLOCKED" | (string & {});
const QueueStatus = S.String;

export type QueueBlockedReason =
  | "NO_BUDGET_CONFIGURED"
  | "BUDGET_THRESHOLD_REACHED"
  | (string & {});
const QueueBlockedReason = S.String;

export interface GetQueueResponse {
  farmId: string;
  queueId: string;
  displayName: string;
  status: QueueStatus;
  defaultBudgetAction: DefaultQueueBudgetAction;
  blockedReason?: QueueBlockedReason;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
  description?: string | redacted.Redacted<string>;
  jobAttachmentSettings?: JobAttachmentSettings;
  roleArn?: string;
  requiredFileSystemLocationNames?: string[];
  allowedStorageProfileIds?: string[];
  jobRunAsUser?: JobRunAsUser;
  schedulingConfiguration?: SchedulingConfiguration;
}
const GetQueueResponse = /*@__PURE__*/ __L.at(__c29, 1) as any as S.Schema<GetQueueResponse>;
export interface GetQueueEnvironmentRequest {
  farmId: string;
  queueId: string;
  queueEnvironmentId: string;
}
const GetQueueEnvironmentRequest = /*@__PURE__*/ __L.at(
  __c29,
  2,
) as any as S.Schema<GetQueueEnvironmentRequest>;
export type EnvironmentName = string;
export interface GetQueueEnvironmentResponse {
  queueEnvironmentId: string;
  name: string;
  priority: number;
  templateType: EnvironmentTemplateType;
  template: string | redacted.Redacted<string>;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
}
const GetQueueEnvironmentResponse = /*@__PURE__*/ __L.at(
  __c29,
  3,
) as any as S.Schema<GetQueueEnvironmentResponse>;
export interface GetQueueFleetAssociationRequest {
  farmId: string;
  queueId: string;
  fleetId: string;
}
const GetQueueFleetAssociationRequest = /*@__PURE__*/ __L.at(
  __c29,
  4,
) as any as S.Schema<GetQueueFleetAssociationRequest>;
export type QueueFleetAssociationStatus =
  | "ACTIVE"
  | "STOP_SCHEDULING_AND_COMPLETE_TASKS"
  | "STOP_SCHEDULING_AND_CANCEL_TASKS"
  | "STOPPED"
  | (string & {});
const QueueFleetAssociationStatus = S.String;

export interface GetQueueFleetAssociationResponse {
  queueId: string;
  fleetId: string;
  status: QueueFleetAssociationStatus;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
}
const GetQueueFleetAssociationResponse = /*@__PURE__*/ __L.at(
  __c29,
  5,
) as any as S.Schema<GetQueueFleetAssociationResponse>;
export interface GetQueueLimitAssociationRequest {
  farmId: string;
  queueId: string;
  limitId: string;
}
const GetQueueLimitAssociationRequest = /*@__PURE__*/ __L.at(
  __c29,
  6,
) as any as S.Schema<GetQueueLimitAssociationRequest>;
export type QueueLimitAssociationStatus =
  | "ACTIVE"
  | "STOP_LIMIT_USAGE_AND_COMPLETE_TASKS"
  | "STOP_LIMIT_USAGE_AND_CANCEL_TASKS"
  | "STOPPED"
  | (string & {});
const QueueLimitAssociationStatus = S.String;

export interface GetQueueLimitAssociationResponse {
  queueId: string;
  limitId: string;
  status: QueueLimitAssociationStatus;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
}
const GetQueueLimitAssociationResponse = /*@__PURE__*/ __L.at(
  __c29,
  7,
) as any as S.Schema<GetQueueLimitAssociationResponse>;
export interface GetSessionRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  sessionId: string;
}
const GetSessionRequest = /*@__PURE__*/ __L.at(__c30, 0) as any as S.Schema<GetSessionRequest>;
export interface GetSessionResponse {
  sessionId: string;
  fleetId: string;
  workerId: string;
  startedAt: Date;
  lifecycleStatus: SessionLifecycleStatus;
  endedAt?: Date;
  targetLifecycleStatus?: SessionLifecycleTargetStatus;
  updatedAt?: Date;
  updatedBy?: string;
  log: LogConfiguration;
  hostProperties?: HostPropertiesResponse;
  workerLog?: LogConfiguration;
}
const GetSessionResponse = /*@__PURE__*/ __L.at(__c30, 1) as any as S.Schema<GetSessionResponse>;
export interface GetSessionActionRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  sessionActionId: string;
}
const GetSessionActionRequest = /*@__PURE__*/ __L.at(
  __c30,
  2,
) as any as S.Schema<GetSessionActionRequest>;
export interface GetSessionActionResponse {
  sessionActionId: string;
  status: SessionActionStatus;
  startedAt?: Date;
  endedAt?: Date;
  workerUpdatedAt?: Date;
  progressPercent?: number;
  manifests?: TaskRunManifestPropertiesResponse[];
  sessionId: string;
  processExitCode?: number;
  progressMessage?: string | redacted.Redacted<string>;
  acquiredLimits?: AcquiredLimit[];
  definition: SessionActionDefinition;
}
const GetSessionActionResponse = /*@__PURE__*/ __L.at(
  __c30,
  3,
) as any as S.Schema<GetSessionActionResponse>;
export type NextToken = string;
export type MaxResults = number;
export type AggregationId = string;
export interface GetSessionsStatisticsAggregationRequest {
  farmId: string;
  nextToken?: string;
  maxResults?: number;
  aggregationId: string;
}
const GetSessionsStatisticsAggregationRequest = /*@__PURE__*/ __L.at(
  __c30,
  4,
) as any as S.Schema<GetSessionsStatisticsAggregationRequest>;
export type UserId = string;
export type UsageType = "COMPUTE" | "LICENSE" | "PERSISTENT_VOLUME" | (string & {});
const UsageType = S.String;

export type LicenseProduct = string;
export interface Stats {
  min?: number;
  max?: number;
  avg?: number;
  sum?: number;
}
const Stats = /*@__PURE__*/ __L.at(__c30, 5) as any as S.Schema<Stats>;
export interface Statistics {
  queueId?: string;
  fleetId?: string;
  jobId?: string;
  jobName?: string;
  userId?: string;
  usageType?: UsageType;
  licenseProduct?: string;
  instanceType?: string;
  count: number;
  costInUsd: Stats;
  runtimeInSeconds: Stats;
  aggregationStartTime?: Date;
  aggregationEndTime?: Date;
}
const Statistics = /*@__PURE__*/ __L.at(__c30, 6) as any as S.Schema<Statistics>;
export type StatisticsList = Statistics[];
const StatisticsList = /*@__PURE__*/ __L.at(__c30, 7);
export type SessionsStatisticsAggregationStatus =
  | "IN_PROGRESS"
  | "TIMEOUT"
  | "FAILED"
  | "COMPLETED"
  | (string & {});
const SessionsStatisticsAggregationStatus = S.String;

export interface GetSessionsStatisticsAggregationResponse {
  statistics?: Statistics[];
  status: SessionsStatisticsAggregationStatus;
  statusMessage?: string;
  nextToken?: string;
}
const GetSessionsStatisticsAggregationResponse = /*@__PURE__*/ __L.at(
  __c31,
  0,
) as any as S.Schema<GetSessionsStatisticsAggregationResponse>;
export interface GetStepRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  stepId: string;
}
const GetStepRequest = /*@__PURE__*/ __L.at(__c31, 1) as any as S.Schema<GetStepRequest>;
export interface GetStepResponse {
  stepId: string;
  name: string;
  lifecycleStatus: StepLifecycleStatus;
  lifecycleStatusMessage?: string;
  taskRunStatus: TaskRunStatus;
  taskRunStatusCounts: { [key: string]: number | undefined };
  taskFailureRetryCount?: number;
  targetTaskRunStatus?: StepTargetTaskRunStatus;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
  startedAt?: Date;
  endedAt?: Date;
  dependencyCounts?: DependencyCounts;
  requiredCapabilities?: StepRequiredCapabilities;
  parameterSpace?: ParameterSpace;
  description?: string | redacted.Redacted<string>;
}
const GetStepResponse = /*@__PURE__*/ __L.at(__c31, 2) as any as S.Schema<GetStepResponse>;
export interface GetStorageProfileRequest {
  farmId: string;
  storageProfileId: string;
}
const GetStorageProfileRequest = /*@__PURE__*/ __L.at(
  __c31,
  3,
) as any as S.Schema<GetStorageProfileRequest>;
export interface GetStorageProfileResponse {
  storageProfileId: string;
  displayName: string;
  osFamily: StorageProfileOperatingSystemFamily;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
  fileSystemLocations?: FileSystemLocation[];
}
const GetStorageProfileResponse = /*@__PURE__*/ __L.at(
  __c31,
  4,
) as any as S.Schema<GetStorageProfileResponse>;
export interface GetStorageProfileForQueueRequest {
  farmId: string;
  queueId: string;
  storageProfileId: string;
}
const GetStorageProfileForQueueRequest = /*@__PURE__*/ __L.at(
  __c31,
  5,
) as any as S.Schema<GetStorageProfileForQueueRequest>;
export interface GetStorageProfileForQueueResponse {
  storageProfileId: string;
  displayName: string;
  osFamily: StorageProfileOperatingSystemFamily;
  fileSystemLocations?: FileSystemLocation[];
}
const GetStorageProfileForQueueResponse = /*@__PURE__*/ __L.at(
  __c31,
  6,
) as any as S.Schema<GetStorageProfileForQueueResponse>;
export interface GetTaskRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  stepId: string;
  taskId: string;
}
const GetTaskRequest = /*@__PURE__*/ __L.at(__c31, 7) as any as S.Schema<GetTaskRequest>;
export interface GetTaskResponse {
  taskId: string;
  createdAt: Date;
  createdBy: string;
  runStatus: TaskRunStatus;
  targetRunStatus?: TaskTargetRunStatus;
  failureRetryCount?: number;
  startedAt?: Date;
  endedAt?: Date;
  updatedAt?: Date;
  updatedBy?: string;
  latestSessionActionId?: string;
  parameters?: { [key: string]: TaskParameterValue | undefined };
}
const GetTaskResponse = /*@__PURE__*/ __L.at(__c32, 0) as any as S.Schema<GetTaskResponse>;
export interface GetVolumeRequest {
  farmId: string;
  fleetId: string;
  volumeId: string;
}
const GetVolumeRequest = /*@__PURE__*/ __L.at(__c32, 1) as any as S.Schema<GetVolumeRequest>;
export type VolumeState =
  | "PENDING_CREATION"
  | "PENDING_ATTACHMENT"
  | "IN_USE"
  | "AVAILABLE"
  | "PENDING_DELETION"
  | (string & {});
const VolumeState = S.String;

export type EbsVolumeType = "gp3" | (string & {});
const EbsVolumeType = S.String;

export interface GetVolumeResponse {
  volumeId: string;
  farmId: string;
  fleetId: string;
  state: VolumeState;
  sizeGiB: number;
  availabilityZoneId: string;
  attachedWorkerId?: string;
  volumeType: EbsVolumeType;
  iops?: number;
  throughputMiB?: number;
  createdAt: Date;
  lastAssignedAt?: Date;
  lastReleasedAt?: Date;
  expiresAt?: Date;
}
const GetVolumeResponse = /*@__PURE__*/ __L.at(__c32, 2) as any as S.Schema<GetVolumeResponse>;
export interface GetWorkerRequest {
  farmId: string;
  fleetId: string;
  workerId: string;
}
const GetWorkerRequest = /*@__PURE__*/ __L.at(__c32, 3) as any as S.Schema<GetWorkerRequest>;
export interface GetWorkerResponse {
  farmId: string;
  fleetId: string;
  workerId: string;
  hostProperties?: HostPropertiesResponse;
  status: WorkerStatus;
  log?: LogConfiguration;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
}
const GetWorkerResponse = BatchGetWorkerItem as any as S.Schema<GetWorkerResponse>;
export interface ListAvailableMeteredProductsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListAvailableMeteredProductsRequest = /*@__PURE__*/ __L.at(
  __c32,
  4,
) as any as S.Schema<ListAvailableMeteredProductsRequest>;
export type BoundedString = string;
export type PortNumber = number;
export interface MeteredProductSummary {
  productId: string;
  family: string;
  vendor: string;
  port: number;
}
const MeteredProductSummary = /*@__PURE__*/ __L.at(
  __c32,
  5,
) as any as S.Schema<MeteredProductSummary>;
export type MeteredProductSummaryList = MeteredProductSummary[];
const MeteredProductSummaryList = /*@__PURE__*/ __L.at(__c32, 6);
export interface ListAvailableMeteredProductsResponse {
  meteredProducts: MeteredProductSummary[];
  nextToken?: string;
}
const ListAvailableMeteredProductsResponse = /*@__PURE__*/ __L.at(
  __c32,
  7,
) as any as S.Schema<ListAvailableMeteredProductsResponse>;
export interface ListBudgetsRequest {
  farmId: string;
  nextToken?: string;
  maxResults?: number;
  status?: BudgetStatus;
}
const ListBudgetsRequest = /*@__PURE__*/ __L.at(__c33, 0) as any as S.Schema<ListBudgetsRequest>;
export interface BudgetSummary {
  budgetId: string;
  usageTrackingResource: UsageTrackingResource;
  status: BudgetStatus;
  displayName: string;
  approximateDollarLimit: number;
  usages: ConsumedUsages;
  createdBy: string;
  createdAt: Date;
  updatedBy?: string;
  updatedAt?: Date;
  description?: string | redacted.Redacted<string>;
}
const BudgetSummary = /*@__PURE__*/ __L.at(__c33, 1) as any as S.Schema<BudgetSummary>;
export type BudgetSummaries = BudgetSummary[];
const BudgetSummaries = /*@__PURE__*/ __L.at(__c33, 2);
export interface ListBudgetsResponse {
  budgets: BudgetSummary[];
  nextToken?: string;
}
const ListBudgetsResponse = /*@__PURE__*/ __L.at(__c33, 3) as any as S.Schema<ListBudgetsResponse>;
export interface ListFarmMembersRequest {
  farmId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListFarmMembersRequest = /*@__PURE__*/ __L.at(
  __c33,
  4,
) as any as S.Schema<ListFarmMembersRequest>;
export interface FarmMember {
  farmId: string;
  principalId: string;
  principalType: DeadlinePrincipalType;
  identityStoreId: string;
  membershipLevel: MembershipLevel;
}
const FarmMember = /*@__PURE__*/ __L.at(__c33, 5) as any as S.Schema<FarmMember>;
export type FarmMembers = FarmMember[];
const FarmMembers = /*@__PURE__*/ __L.at(__c33, 6);
export interface ListFarmMembersResponse {
  members: FarmMember[];
  nextToken?: string;
}
const ListFarmMembersResponse = /*@__PURE__*/ __L.at(
  __c33,
  7,
) as any as S.Schema<ListFarmMembersResponse>;
export interface ListFarmsRequest {
  nextToken?: string;
  maxResults?: number;
  principalId?: string;
}
const ListFarmsRequest = /*@__PURE__*/ __L.at(__c34, 0) as any as S.Schema<ListFarmsRequest>;
export interface FarmSummary {
  farmId: string;
  displayName: string;
  kmsKeyArn?: string;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
}
const FarmSummary = /*@__PURE__*/ __L.at(__c34, 1) as any as S.Schema<FarmSummary>;
export type FarmSummaries = FarmSummary[];
const FarmSummaries = /*@__PURE__*/ __L.at(__c34, 2);
export interface ListFarmsResponse {
  farms: FarmSummary[];
  nextToken?: string;
}
const ListFarmsResponse = /*@__PURE__*/ __L.at(__c34, 3) as any as S.Schema<ListFarmsResponse>;
export interface ListFleetMembersRequest {
  farmId: string;
  fleetId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListFleetMembersRequest = /*@__PURE__*/ __L.at(
  __c34,
  4,
) as any as S.Schema<ListFleetMembersRequest>;
export interface FleetMember {
  farmId: string;
  fleetId: string;
  principalId: string;
  principalType: DeadlinePrincipalType;
  identityStoreId: string;
  membershipLevel: MembershipLevel;
}
const FleetMember = /*@__PURE__*/ __L.at(__c34, 5) as any as S.Schema<FleetMember>;
export type FleetMembers = FleetMember[];
const FleetMembers = /*@__PURE__*/ __L.at(__c34, 6);
export interface ListFleetMembersResponse {
  members: FleetMember[];
  nextToken?: string;
}
const ListFleetMembersResponse = /*@__PURE__*/ __L.at(
  __c34,
  7,
) as any as S.Schema<ListFleetMembersResponse>;
export interface ListFleetsRequest {
  farmId: string;
  nextToken?: string;
  maxResults?: number;
  principalId?: string;
  displayName?: string;
  status?: FleetStatus;
}
const ListFleetsRequest = /*@__PURE__*/ __L.at(__c35, 0) as any as S.Schema<ListFleetsRequest>;
export interface FleetSummary {
  fleetId: string;
  farmId: string;
  displayName: string;
  status: FleetStatus;
  statusMessage?: string;
  autoScalingStatus?: AutoScalingStatus;
  targetWorkerCount?: number;
  workerCount: number;
  minWorkerCount: number;
  maxWorkerCount: number;
  configuration: FleetConfiguration;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
}
const FleetSummary = /*@__PURE__*/ __L.at(__c35, 1) as any as S.Schema<FleetSummary>;
export type FleetSummaries = FleetSummary[];
const FleetSummaries = /*@__PURE__*/ __L.at(__c35, 2);
export interface ListFleetsResponse {
  fleets: FleetSummary[];
  nextToken?: string;
}
const ListFleetsResponse = /*@__PURE__*/ __L.at(__c35, 3) as any as S.Schema<ListFleetsResponse>;
export interface ListJobMembersRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListJobMembersRequest = /*@__PURE__*/ __L.at(
  __c35,
  4,
) as any as S.Schema<ListJobMembersRequest>;
export interface JobMember {
  farmId: string;
  queueId: string;
  jobId: string;
  principalId: string;
  principalType: DeadlinePrincipalType;
  identityStoreId: string;
  membershipLevel: MembershipLevel;
}
const JobMember = /*@__PURE__*/ __L.at(__c35, 5) as any as S.Schema<JobMember>;
export type JobMembers = JobMember[];
const JobMembers = /*@__PURE__*/ __L.at(__c35, 6);
export interface ListJobMembersResponse {
  members: JobMember[];
  nextToken?: string;
}
const ListJobMembersResponse = /*@__PURE__*/ __L.at(
  __c35,
  7,
) as any as S.Schema<ListJobMembersResponse>;
export interface ListJobParameterDefinitionsRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListJobParameterDefinitionsRequest = /*@__PURE__*/ __L.at(
  __c36,
  0,
) as any as S.Schema<ListJobParameterDefinitionsRequest>;
export type JobParameterDefinition = unknown;
export type JobParameterDefinitions = any[];
const JobParameterDefinitions = /*@__PURE__*/ __L.at(__c36, 1);
export interface ListJobParameterDefinitionsResponse {
  jobParameterDefinitions: any[];
  nextToken?: string;
}
const ListJobParameterDefinitionsResponse = /*@__PURE__*/ __L.at(
  __c36,
  2,
) as any as S.Schema<ListJobParameterDefinitionsResponse>;
export interface ListJobsRequest {
  farmId: string;
  queueId: string;
  nextToken?: string;
  maxResults?: number;
  principalId?: string;
}
const ListJobsRequest = /*@__PURE__*/ __L.at(__c36, 3) as any as S.Schema<ListJobsRequest>;
export interface JobSummary {
  jobId: string;
  name: string;
  lifecycleStatus: JobLifecycleStatus;
  lifecycleStatusMessage: string;
  priority: number;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
  startedAt?: Date;
  endedAt?: Date;
  taskRunStatus?: TaskRunStatus;
  targetTaskRunStatus?: JobTargetTaskRunStatus;
  taskRunStatusCounts?: { [key: string]: number | undefined };
  taskFailureRetryCount?: number;
  maxFailedTasksCount?: number;
  maxRetriesPerTask?: number;
  maxWorkerCount?: number;
  sourceJobId?: string;
}
const JobSummary = /*@__PURE__*/ __L.at(__c36, 4) as any as S.Schema<JobSummary>;
export type JobSummaries = JobSummary[];
const JobSummaries = /*@__PURE__*/ __L.at(__c36, 5);
export interface ListJobsResponse {
  jobs: JobSummary[];
  nextToken?: string;
}
const ListJobsResponse = /*@__PURE__*/ __L.at(__c36, 6) as any as S.Schema<ListJobsResponse>;
export interface ListLicenseEndpointsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListLicenseEndpointsRequest = /*@__PURE__*/ __L.at(
  __c36,
  7,
) as any as S.Schema<ListLicenseEndpointsRequest>;
export interface LicenseEndpointSummary {
  licenseEndpointId?: string;
  status?: LicenseEndpointStatus;
  statusMessage?: string;
  vpcId?: string;
}
const LicenseEndpointSummary = /*@__PURE__*/ __L.at(
  __c37,
  0,
) as any as S.Schema<LicenseEndpointSummary>;
export type LicenseEndpointSummaries = LicenseEndpointSummary[];
const LicenseEndpointSummaries = /*@__PURE__*/ __L.at(__c37, 1);
export interface ListLicenseEndpointsResponse {
  licenseEndpoints: LicenseEndpointSummary[];
  nextToken?: string;
}
const ListLicenseEndpointsResponse = /*@__PURE__*/ __L.at(
  __c37,
  2,
) as any as S.Schema<ListLicenseEndpointsResponse>;
export interface ListLimitsRequest {
  farmId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListLimitsRequest = /*@__PURE__*/ __L.at(__c37, 3) as any as S.Schema<ListLimitsRequest>;
export interface LimitSummary {
  farmId: string;
  limitId: string;
  currentCount: number;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
  displayName: string;
  amountRequirementName: string;
  maxCount: number;
}
const LimitSummary = /*@__PURE__*/ __L.at(__c37, 4) as any as S.Schema<LimitSummary>;
export type LimitSummaries = LimitSummary[];
const LimitSummaries = /*@__PURE__*/ __L.at(__c37, 5);
export interface ListLimitsResponse {
  limits: LimitSummary[];
  nextToken?: string;
}
const ListLimitsResponse = /*@__PURE__*/ __L.at(__c37, 6) as any as S.Schema<ListLimitsResponse>;
export interface ListMeteredProductsRequest {
  licenseEndpointId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListMeteredProductsRequest = /*@__PURE__*/ __L.at(
  __c37,
  7,
) as any as S.Schema<ListMeteredProductsRequest>;
export interface ListMeteredProductsResponse {
  meteredProducts: MeteredProductSummary[];
  nextToken?: string;
}
const ListMeteredProductsResponse =
  ListAvailableMeteredProductsResponse as any as S.Schema<ListMeteredProductsResponse>;
export interface ListMonitorsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListMonitorsRequest = /*@__PURE__*/ __L.at(__c38, 0) as any as S.Schema<ListMonitorsRequest>;
export interface MonitorSummary {
  monitorId: string;
  displayName: string;
  subdomain: string;
  url: string;
  roleArn: string;
  identityCenterInstanceArn: string;
  identityCenterRegion?: string;
  identityCenterApplicationArn: string;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
}
const MonitorSummary = GetMonitorResponse as any as S.Schema<MonitorSummary>;
export type MonitorSummaries = MonitorSummary[];
const MonitorSummaries = /*@__PURE__*/ __L.at(__c38, 1);
export interface ListMonitorsResponse {
  monitors: MonitorSummary[];
  nextToken?: string;
}
const ListMonitorsResponse = /*@__PURE__*/ __L.at(
  __c38,
  2,
) as any as S.Schema<ListMonitorsResponse>;
export interface ListQueueEnvironmentsRequest {
  farmId: string;
  queueId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListQueueEnvironmentsRequest = /*@__PURE__*/ __L.at(
  __c38,
  3,
) as any as S.Schema<ListQueueEnvironmentsRequest>;
export interface QueueEnvironmentSummary {
  queueEnvironmentId: string;
  name: string;
  priority: number;
}
const QueueEnvironmentSummary = /*@__PURE__*/ __L.at(
  __c38,
  4,
) as any as S.Schema<QueueEnvironmentSummary>;
export type QueueEnvironmentSummaries = QueueEnvironmentSummary[];
const QueueEnvironmentSummaries = /*@__PURE__*/ __L.at(__c38, 5);
export interface ListQueueEnvironmentsResponse {
  environments: QueueEnvironmentSummary[];
  nextToken?: string;
}
const ListQueueEnvironmentsResponse = /*@__PURE__*/ __L.at(
  __c38,
  6,
) as any as S.Schema<ListQueueEnvironmentsResponse>;
export interface ListQueueFleetAssociationsRequest {
  farmId: string;
  nextToken?: string;
  maxResults?: number;
  queueId?: string;
  fleetId?: string;
}
const ListQueueFleetAssociationsRequest = /*@__PURE__*/ __L.at(
  __c38,
  7,
) as any as S.Schema<ListQueueFleetAssociationsRequest>;
export interface QueueFleetAssociationSummary {
  queueId: string;
  fleetId: string;
  status: QueueFleetAssociationStatus;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
}
const QueueFleetAssociationSummary =
  GetQueueFleetAssociationResponse as any as S.Schema<QueueFleetAssociationSummary>;
export type QueueFleetAssociationSummaries = QueueFleetAssociationSummary[];
const QueueFleetAssociationSummaries = /*@__PURE__*/ __L.at(__c39, 0);
export interface ListQueueFleetAssociationsResponse {
  queueFleetAssociations: QueueFleetAssociationSummary[];
  nextToken?: string;
}
const ListQueueFleetAssociationsResponse = /*@__PURE__*/ __L.at(
  __c39,
  1,
) as any as S.Schema<ListQueueFleetAssociationsResponse>;
export interface ListQueueLimitAssociationsRequest {
  farmId: string;
  nextToken?: string;
  maxResults?: number;
  queueId?: string;
  limitId?: string;
}
const ListQueueLimitAssociationsRequest = /*@__PURE__*/ __L.at(
  __c39,
  2,
) as any as S.Schema<ListQueueLimitAssociationsRequest>;
export interface QueueLimitAssociationSummary {
  queueId: string;
  limitId: string;
  status: QueueLimitAssociationStatus;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
}
const QueueLimitAssociationSummary =
  GetQueueLimitAssociationResponse as any as S.Schema<QueueLimitAssociationSummary>;
export type QueueLimitAssociationSummaries = QueueLimitAssociationSummary[];
const QueueLimitAssociationSummaries = /*@__PURE__*/ __L.at(__c39, 3);
export interface ListQueueLimitAssociationsResponse {
  queueLimitAssociations: QueueLimitAssociationSummary[];
  nextToken?: string;
}
const ListQueueLimitAssociationsResponse = /*@__PURE__*/ __L.at(
  __c39,
  4,
) as any as S.Schema<ListQueueLimitAssociationsResponse>;
export interface ListQueueMembersRequest {
  farmId: string;
  queueId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListQueueMembersRequest = /*@__PURE__*/ __L.at(
  __c39,
  5,
) as any as S.Schema<ListQueueMembersRequest>;
export interface QueueMember {
  farmId: string;
  queueId: string;
  principalId: string;
  principalType: DeadlinePrincipalType;
  identityStoreId: string;
  membershipLevel: MembershipLevel;
}
const QueueMember = /*@__PURE__*/ __L.at(__c39, 6) as any as S.Schema<QueueMember>;
export type QueueMemberList = QueueMember[];
const QueueMemberList = /*@__PURE__*/ __L.at(__c39, 7);
export interface ListQueueMembersResponse {
  members: QueueMember[];
  nextToken?: string;
}
const ListQueueMembersResponse = /*@__PURE__*/ __L.at(
  __c40,
  0,
) as any as S.Schema<ListQueueMembersResponse>;
export interface ListQueuesRequest {
  farmId: string;
  nextToken?: string;
  maxResults?: number;
  principalId?: string;
  status?: QueueStatus;
}
const ListQueuesRequest = /*@__PURE__*/ __L.at(__c40, 1) as any as S.Schema<ListQueuesRequest>;
export interface QueueSummary {
  farmId: string;
  queueId: string;
  displayName: string;
  status: QueueStatus;
  defaultBudgetAction: DefaultQueueBudgetAction;
  blockedReason?: QueueBlockedReason;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
}
const QueueSummary = /*@__PURE__*/ __L.at(__c40, 2) as any as S.Schema<QueueSummary>;
export type QueueSummaries = QueueSummary[];
const QueueSummaries = /*@__PURE__*/ __L.at(__c40, 3);
export interface ListQueuesResponse {
  queues: QueueSummary[];
  nextToken?: string;
}
const ListQueuesResponse = /*@__PURE__*/ __L.at(__c40, 4) as any as S.Schema<ListQueuesResponse>;
export interface ListSessionActionsRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  nextToken?: string;
  maxResults?: number;
  sessionId?: string;
  taskId?: string;
}
const ListSessionActionsRequest = /*@__PURE__*/ __L.at(
  __c40,
  5,
) as any as S.Schema<ListSessionActionsRequest>;
export interface EnvironmentEnterSessionActionDefinitionSummary {
  environmentId: string;
}
const EnvironmentEnterSessionActionDefinitionSummary =
  EnvironmentEnterSessionActionDefinition as any as S.Schema<EnvironmentEnterSessionActionDefinitionSummary>;
export interface EnvironmentExitSessionActionDefinitionSummary {
  environmentId: string;
}
const EnvironmentExitSessionActionDefinitionSummary =
  EnvironmentEnterSessionActionDefinition as any as S.Schema<EnvironmentExitSessionActionDefinitionSummary>;
export interface TaskRunSessionActionDefinitionSummary {
  taskId?: string;
  stepId: string;
  parameters?: { [key: string]: TaskParameterValue | undefined };
}
const TaskRunSessionActionDefinitionSummary = /*@__PURE__*/ __L.at(
  __c40,
  6,
) as any as S.Schema<TaskRunSessionActionDefinitionSummary>;
export interface SyncInputJobAttachmentsSessionActionDefinitionSummary {
  stepId?: string;
}
const SyncInputJobAttachmentsSessionActionDefinitionSummary =
  SyncInputJobAttachmentsSessionActionDefinition as any as S.Schema<SyncInputJobAttachmentsSessionActionDefinitionSummary>;
export type SessionActionDefinitionSummary =
  | {
      envEnter: EnvironmentEnterSessionActionDefinitionSummary;
      envExit?: never;
      taskRun?: never;
      syncInputJobAttachments?: never;
    }
  | {
      envEnter?: never;
      envExit: EnvironmentExitSessionActionDefinitionSummary;
      taskRun?: never;
      syncInputJobAttachments?: never;
    }
  | {
      envEnter?: never;
      envExit?: never;
      taskRun: TaskRunSessionActionDefinitionSummary;
      syncInputJobAttachments?: never;
    }
  | {
      envEnter?: never;
      envExit?: never;
      taskRun?: never;
      syncInputJobAttachments: SyncInputJobAttachmentsSessionActionDefinitionSummary;
    };
const SessionActionDefinitionSummary = /*@__PURE__*/ __L.at(__c40, 7);
export interface SessionActionSummary {
  sessionActionId: string;
  status: SessionActionStatus;
  startedAt?: Date;
  endedAt?: Date;
  workerUpdatedAt?: Date;
  progressPercent?: number;
  manifests?: TaskRunManifestPropertiesResponse[];
  definition: SessionActionDefinitionSummary;
}
const SessionActionSummary = /*@__PURE__*/ __L.at(
  __c41,
  0,
) as any as S.Schema<SessionActionSummary>;
export type SessionActionSummaries = SessionActionSummary[];
const SessionActionSummaries = /*@__PURE__*/ __L.at(__c41, 1);
export interface ListSessionActionsResponse {
  sessionActions: SessionActionSummary[];
  nextToken?: string;
}
const ListSessionActionsResponse = /*@__PURE__*/ __L.at(
  __c41,
  2,
) as any as S.Schema<ListSessionActionsResponse>;
export interface ListSessionsRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListSessionsRequest = /*@__PURE__*/ __L.at(__c41, 3) as any as S.Schema<ListSessionsRequest>;
export interface SessionSummary {
  sessionId: string;
  fleetId: string;
  workerId: string;
  startedAt: Date;
  lifecycleStatus: SessionLifecycleStatus;
  endedAt?: Date;
  targetLifecycleStatus?: SessionLifecycleTargetStatus;
  updatedAt?: Date;
  updatedBy?: string;
}
const SessionSummary = /*@__PURE__*/ __L.at(__c41, 4) as any as S.Schema<SessionSummary>;
export type SessionSummaries = SessionSummary[];
const SessionSummaries = /*@__PURE__*/ __L.at(__c41, 5);
export interface ListSessionsResponse {
  sessions: SessionSummary[];
  nextToken?: string;
}
const ListSessionsResponse = /*@__PURE__*/ __L.at(
  __c41,
  6,
) as any as S.Schema<ListSessionsResponse>;
export interface ListSessionsForWorkerRequest {
  farmId: string;
  fleetId: string;
  workerId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListSessionsForWorkerRequest = /*@__PURE__*/ __L.at(
  __c41,
  7,
) as any as S.Schema<ListSessionsForWorkerRequest>;
export interface WorkerSessionSummary {
  sessionId: string;
  queueId: string;
  jobId: string;
  startedAt: Date;
  lifecycleStatus: SessionLifecycleStatus;
  endedAt?: Date;
  targetLifecycleStatus?: SessionLifecycleTargetStatus;
}
const WorkerSessionSummary = /*@__PURE__*/ __L.at(
  __c42,
  0,
) as any as S.Schema<WorkerSessionSummary>;
export type ListSessionsForWorkerSummaries = WorkerSessionSummary[];
const ListSessionsForWorkerSummaries = /*@__PURE__*/ __L.at(__c42, 1);
export interface ListSessionsForWorkerResponse {
  sessions: WorkerSessionSummary[];
  nextToken?: string;
}
const ListSessionsForWorkerResponse = /*@__PURE__*/ __L.at(
  __c42,
  2,
) as any as S.Schema<ListSessionsForWorkerResponse>;
export interface ListStepConsumersRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  stepId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListStepConsumersRequest = /*@__PURE__*/ __L.at(
  __c42,
  3,
) as any as S.Schema<ListStepConsumersRequest>;
export type DependencyConsumerResolutionStatus = "RESOLVED" | "UNRESOLVED" | (string & {});
const DependencyConsumerResolutionStatus = S.String;

export interface StepConsumer {
  stepId: string;
  status: DependencyConsumerResolutionStatus;
}
const StepConsumer = /*@__PURE__*/ __L.at(__c42, 4) as any as S.Schema<StepConsumer>;
export type StepConsumers = StepConsumer[];
const StepConsumers = /*@__PURE__*/ __L.at(__c42, 5);
export interface ListStepConsumersResponse {
  consumers: StepConsumer[];
  nextToken?: string;
}
const ListStepConsumersResponse = /*@__PURE__*/ __L.at(
  __c42,
  6,
) as any as S.Schema<ListStepConsumersResponse>;
export interface ListStepDependenciesRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  stepId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListStepDependenciesRequest = /*@__PURE__*/ __L.at(
  __c42,
  7,
) as any as S.Schema<ListStepDependenciesRequest>;
export interface StepDependency {
  stepId: string;
  status: DependencyConsumerResolutionStatus;
}
export type StepDependencies = StepDependency[];
const StepDependencies = StepConsumers as any as S.Schema<StepDependencies>;
export interface ListStepDependenciesResponse {
  dependencies: StepDependency[];
  nextToken?: string;
}
const ListStepDependenciesResponse = /*@__PURE__*/ __L.at(
  __c43,
  0,
) as any as S.Schema<ListStepDependenciesResponse>;
export interface ListStepsRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListStepsRequest = /*@__PURE__*/ __L.at(__c43, 1) as any as S.Schema<ListStepsRequest>;
export interface StepSummary {
  stepId: string;
  name: string;
  lifecycleStatus: StepLifecycleStatus;
  lifecycleStatusMessage?: string;
  taskRunStatus: TaskRunStatus;
  taskRunStatusCounts: { [key: string]: number | undefined };
  taskFailureRetryCount?: number;
  targetTaskRunStatus?: StepTargetTaskRunStatus;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
  startedAt?: Date;
  endedAt?: Date;
  dependencyCounts?: DependencyCounts;
}
const StepSummary = /*@__PURE__*/ __L.at(__c43, 2) as any as S.Schema<StepSummary>;
export type StepSummaries = StepSummary[];
const StepSummaries = /*@__PURE__*/ __L.at(__c43, 3);
export interface ListStepsResponse {
  steps: StepSummary[];
  nextToken?: string;
}
const ListStepsResponse = /*@__PURE__*/ __L.at(__c43, 4) as any as S.Schema<ListStepsResponse>;
export interface ListStorageProfilesRequest {
  farmId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListStorageProfilesRequest = /*@__PURE__*/ __L.at(
  __c43,
  5,
) as any as S.Schema<ListStorageProfilesRequest>;
export interface StorageProfileSummary {
  storageProfileId: string;
  displayName: string;
  osFamily: StorageProfileOperatingSystemFamily;
}
const StorageProfileSummary = /*@__PURE__*/ __L.at(
  __c43,
  6,
) as any as S.Schema<StorageProfileSummary>;
export type StorageProfileSummaries = StorageProfileSummary[];
const StorageProfileSummaries = /*@__PURE__*/ __L.at(__c43, 7);
export interface ListStorageProfilesResponse {
  storageProfiles: StorageProfileSummary[];
  nextToken?: string;
}
const ListStorageProfilesResponse = /*@__PURE__*/ __L.at(
  __c44,
  0,
) as any as S.Schema<ListStorageProfilesResponse>;
export interface ListStorageProfilesForQueueRequest {
  farmId: string;
  queueId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListStorageProfilesForQueueRequest = /*@__PURE__*/ __L.at(
  __c44,
  1,
) as any as S.Schema<ListStorageProfilesForQueueRequest>;
export interface ListStorageProfilesForQueueResponse {
  storageProfiles: StorageProfileSummary[];
  nextToken?: string;
}
const ListStorageProfilesForQueueResponse =
  ListStorageProfilesResponse as any as S.Schema<ListStorageProfilesForQueueResponse>;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c44,
  2,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c44,
  3,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface ListTasksRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  stepId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListTasksRequest = /*@__PURE__*/ __L.at(__c44, 4) as any as S.Schema<ListTasksRequest>;
export interface TaskSummary {
  taskId: string;
  createdAt: Date;
  createdBy: string;
  runStatus: TaskRunStatus;
  targetRunStatus?: TaskTargetRunStatus;
  failureRetryCount?: number;
  startedAt?: Date;
  endedAt?: Date;
  updatedAt?: Date;
  updatedBy?: string;
  latestSessionActionId?: string;
  parameters?: { [key: string]: TaskParameterValue | undefined };
}
const TaskSummary = GetTaskResponse as any as S.Schema<TaskSummary>;
export type TaskSummaries = TaskSummary[];
const TaskSummaries = /*@__PURE__*/ __L.at(__c44, 5);
export interface ListTasksResponse {
  tasks: TaskSummary[];
  nextToken?: string;
}
const ListTasksResponse = /*@__PURE__*/ __L.at(__c44, 6) as any as S.Schema<ListTasksResponse>;
export interface ListVolumesRequest {
  farmId: string;
  fleetId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListVolumesRequest = /*@__PURE__*/ __L.at(__c44, 7) as any as S.Schema<ListVolumesRequest>;
export interface VolumeSummary {
  volumeId: string;
  farmId: string;
  fleetId: string;
  state: VolumeState;
  sizeGiB: number;
  availabilityZoneId: string;
  attachedWorkerId?: string;
}
const VolumeSummary = /*@__PURE__*/ __L.at(__c45, 0) as any as S.Schema<VolumeSummary>;
export type VolumeSummaries = VolumeSummary[];
const VolumeSummaries = /*@__PURE__*/ __L.at(__c45, 1);
export interface ListVolumesResponse {
  volumes: VolumeSummary[];
  nextToken?: string;
}
const ListVolumesResponse = /*@__PURE__*/ __L.at(__c45, 2) as any as S.Schema<ListVolumesResponse>;
export interface ListWorkersRequest {
  farmId: string;
  fleetId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListWorkersRequest = /*@__PURE__*/ __L.at(__c45, 3) as any as S.Schema<ListWorkersRequest>;
export interface WorkerSummary {
  farmId: string;
  fleetId: string;
  workerId: string;
  hostProperties?: HostPropertiesResponse;
  status: WorkerStatus;
  log?: LogConfiguration;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
}
export type WorkerSummaries = WorkerSummary[];
const WorkerSummaries = BatchGetWorkerItems as any as S.Schema<WorkerSummaries>;
export interface ListWorkersResponse {
  workers: WorkerSummary[];
  nextToken?: string;
}
const ListWorkersResponse = /*@__PURE__*/ __L.at(__c45, 4) as any as S.Schema<ListWorkersResponse>;
export interface PutMeteredProductRequest {
  licenseEndpointId: string;
  productId: string;
}
const PutMeteredProductRequest = /*@__PURE__*/ __L.at(
  __c45,
  5,
) as any as S.Schema<PutMeteredProductRequest>;
export interface PutMeteredProductResponse {}
const PutMeteredProductResponse =
  AssociateMemberToFarmResponse as any as S.Schema<PutMeteredProductResponse>;
export type ComparisonOperator =
  | "EQUAL"
  | "NOT_EQUAL"
  | "GREATER_THAN_EQUAL_TO"
  | "GREATER_THAN"
  | "LESS_THAN_EQUAL_TO"
  | "LESS_THAN"
  | "ANY_EQUALS"
  | "ALL_NOT_EQUALS"
  | (string & {});
const ComparisonOperator = S.String;

export interface DateTimeFilterExpression {
  name: string;
  operator: ComparisonOperator;
  dateTime: Date;
}
const DateTimeFilterExpression = /*@__PURE__*/ __L.at(
  __c45,
  6,
) as any as S.Schema<DateTimeFilterExpression>;
export type ParameterValue = string;
export interface ParameterFilterExpression {
  name: string;
  operator: ComparisonOperator;
  value: string;
}
const ParameterFilterExpression = /*@__PURE__*/ __L.at(
  __c45,
  7,
) as any as S.Schema<ParameterFilterExpression>;
export type SearchTerm = string;
export type SearchTermMatchingType = "FUZZY_MATCH" | "CONTAINS" | (string & {});
const SearchTermMatchingType = S.String;

export interface SearchTermFilterExpression {
  searchTerm: string;
  matchType?: SearchTermMatchingType;
}
const SearchTermFilterExpression = /*@__PURE__*/ __L.at(
  __c46,
  0,
) as any as S.Schema<SearchTermFilterExpression>;
export type StringFilter = string;
export interface StringFilterExpression {
  name: string;
  operator: ComparisonOperator;
  value: string;
}
const StringFilterExpression = /*@__PURE__*/ __L.at(
  __c46,
  1,
) as any as S.Schema<StringFilterExpression>;
export type StringFilterList = string[];
const StringFilterList = ParameterStringList as any as S.Schema<StringFilterList>;
export interface StringListFilterExpression {
  name: string;
  operator: ComparisonOperator;
  values: string[];
}
const StringListFilterExpression = /*@__PURE__*/ __L.at(
  __c46,
  2,
) as any as S.Schema<StringListFilterExpression>;
export type SearchFilterExpression =
  | {
      dateTimeFilter: DateTimeFilterExpression;
      parameterFilter?: never;
      searchTermFilter?: never;
      stringFilter?: never;
      stringListFilter?: never;
      groupFilter?: never;
    }
  | {
      dateTimeFilter?: never;
      parameterFilter: ParameterFilterExpression;
      searchTermFilter?: never;
      stringFilter?: never;
      stringListFilter?: never;
      groupFilter?: never;
    }
  | {
      dateTimeFilter?: never;
      parameterFilter?: never;
      searchTermFilter: SearchTermFilterExpression;
      stringFilter?: never;
      stringListFilter?: never;
      groupFilter?: never;
    }
  | {
      dateTimeFilter?: never;
      parameterFilter?: never;
      searchTermFilter?: never;
      stringFilter: StringFilterExpression;
      stringListFilter?: never;
      groupFilter?: never;
    }
  | {
      dateTimeFilter?: never;
      parameterFilter?: never;
      searchTermFilter?: never;
      stringFilter?: never;
      stringListFilter: StringListFilterExpression;
      groupFilter?: never;
    }
  | {
      dateTimeFilter?: never;
      parameterFilter?: never;
      searchTermFilter?: never;
      stringFilter?: never;
      stringListFilter?: never;
      groupFilter: SearchGroupedFilterExpressions;
    };
const SearchFilterExpression = /*@__PURE__*/ __L.at(
  __c46,
  3,
) as any as S.Schema<SearchFilterExpression>;
export type SearchFilterExpressions = SearchFilterExpression[];
const SearchFilterExpressions = /*@__PURE__*/ __L.at(
  __c46,
  4,
) as any as S.Schema<SearchFilterExpressions>;
export type LogicalOperator = "AND" | "OR" | (string & {});
const LogicalOperator = S.String;

export interface SearchGroupedFilterExpressions {
  filters: SearchFilterExpression[];
  operator: LogicalOperator;
}
const SearchGroupedFilterExpressions = /*@__PURE__*/ __L.at(
  __c46,
  5,
) as any as S.Schema<SearchGroupedFilterExpressions>;
export interface UserJobsFirst {
  userIdentityId: string;
}
const UserJobsFirst = /*@__PURE__*/ __L.at(__c46, 6) as any as S.Schema<UserJobsFirst>;
export type SortOrder = "ASCENDING" | "DESCENDING" | (string & {});
const SortOrder = S.String;

export interface FieldSortExpression {
  sortOrder: SortOrder;
  name: string;
}
const FieldSortExpression = /*@__PURE__*/ __L.at(__c46, 7) as any as S.Schema<FieldSortExpression>;
export interface ParameterSortExpression {
  sortOrder: SortOrder;
  name: string;
}
const ParameterSortExpression = FieldSortExpression as any as S.Schema<ParameterSortExpression>;
export type SearchSortExpression =
  | { userJobsFirst: UserJobsFirst; fieldSort?: never; parameterSort?: never }
  | { userJobsFirst?: never; fieldSort: FieldSortExpression; parameterSort?: never }
  | { userJobsFirst?: never; fieldSort?: never; parameterSort: ParameterSortExpression };
const SearchSortExpression = /*@__PURE__*/ __L.at(__c47, 0);
export type SearchSortExpressions = SearchSortExpression[];
const SearchSortExpressions = /*@__PURE__*/ __L.at(__c47, 1);
export type QueueIds = string[];
const QueueIds = ParameterStringList as any as S.Schema<QueueIds>;
export interface SearchJobsRequest {
  farmId: string;
  filterExpressions?: SearchGroupedFilterExpressions;
  sortExpressions?: SearchSortExpression[];
  itemOffset: number;
  pageSize?: number;
  queueIds: string[];
}
const SearchJobsRequest = /*@__PURE__*/ __L.at(__c47, 2) as any as S.Schema<SearchJobsRequest>;
export interface JobSearchSummary {
  jobId?: string;
  queueId?: string;
  name?: string;
  lifecycleStatus?: JobLifecycleStatus;
  lifecycleStatusMessage?: string;
  taskRunStatus?: TaskRunStatus;
  targetTaskRunStatus?: JobTargetTaskRunStatus;
  taskRunStatusCounts?: { [key: string]: number | undefined };
  taskFailureRetryCount?: number;
  priority?: number;
  maxFailedTasksCount?: number;
  maxRetriesPerTask?: number;
  createdBy?: string;
  createdAt?: Date;
  endedAt?: Date;
  startedAt?: Date;
  updatedAt?: Date;
  updatedBy?: string;
  jobParameters?: { [key: string]: JobParameter | undefined };
  maxWorkerCount?: number;
  sourceJobId?: string;
}
const JobSearchSummary = /*@__PURE__*/ __L.at(__c47, 3) as any as S.Schema<JobSearchSummary>;
export type JobSearchSummaries = JobSearchSummary[];
const JobSearchSummaries = /*@__PURE__*/ __L.at(__c47, 4);
export type NextItemOffset = number;
export type TotalResults = number;
export interface SearchJobsResponse {
  jobs: JobSearchSummary[];
  nextItemOffset?: number;
  totalResults: number;
}
const SearchJobsResponse = /*@__PURE__*/ __L.at(__c47, 5) as any as S.Schema<SearchJobsResponse>;
export interface SearchStepsRequest {
  farmId: string;
  filterExpressions?: SearchGroupedFilterExpressions;
  sortExpressions?: SearchSortExpression[];
  itemOffset: number;
  pageSize?: number;
  queueIds: string[];
  jobId?: string;
}
const SearchStepsRequest = /*@__PURE__*/ __L.at(__c47, 6) as any as S.Schema<SearchStepsRequest>;
export interface StepSearchSummary {
  stepId?: string;
  jobId?: string;
  queueId?: string;
  name?: string;
  lifecycleStatus?: StepLifecycleStatus;
  lifecycleStatusMessage?: string;
  taskRunStatus?: TaskRunStatus;
  targetTaskRunStatus?: StepTargetTaskRunStatus;
  taskRunStatusCounts?: { [key: string]: number | undefined };
  taskFailureRetryCount?: number;
  createdAt?: Date;
  createdBy?: string;
  startedAt?: Date;
  endedAt?: Date;
  updatedAt?: Date;
  updatedBy?: string;
  parameterSpace?: ParameterSpace;
}
const StepSearchSummary = /*@__PURE__*/ __L.at(__c47, 7) as any as S.Schema<StepSearchSummary>;
export type StepSearchSummaries = StepSearchSummary[];
const StepSearchSummaries = /*@__PURE__*/ __L.at(__c48, 0);
export interface SearchStepsResponse {
  steps: StepSearchSummary[];
  nextItemOffset?: number;
  totalResults: number;
}
const SearchStepsResponse = /*@__PURE__*/ __L.at(__c48, 1) as any as S.Schema<SearchStepsResponse>;
export interface SearchTasksRequest {
  farmId: string;
  filterExpressions?: SearchGroupedFilterExpressions;
  sortExpressions?: SearchSortExpression[];
  itemOffset: number;
  pageSize?: number;
  queueIds: string[];
  jobId?: string;
}
const SearchTasksRequest = /*@__PURE__*/ __L.at(__c48, 2) as any as S.Schema<SearchTasksRequest>;
export interface TaskSearchSummary {
  taskId?: string;
  stepId?: string;
  jobId?: string;
  queueId?: string;
  runStatus?: TaskRunStatus;
  targetRunStatus?: TaskTargetRunStatus;
  parameters?: { [key: string]: TaskParameterValue | undefined };
  failureRetryCount?: number;
  startedAt?: Date;
  endedAt?: Date;
  updatedAt?: Date;
  updatedBy?: string;
  latestSessionActionId?: string;
}
const TaskSearchSummary = /*@__PURE__*/ __L.at(__c48, 3) as any as S.Schema<TaskSearchSummary>;
export type TaskSearchSummaries = TaskSearchSummary[];
const TaskSearchSummaries = /*@__PURE__*/ __L.at(__c48, 4);
export interface SearchTasksResponse {
  tasks: TaskSearchSummary[];
  nextItemOffset?: number;
  totalResults: number;
}
const SearchTasksResponse = /*@__PURE__*/ __L.at(__c48, 5) as any as S.Schema<SearchTasksResponse>;
export type FleetIds = string[];
const FleetIds = ParameterStringList as any as S.Schema<FleetIds>;
export interface SearchWorkersRequest {
  farmId: string;
  filterExpressions?: SearchGroupedFilterExpressions;
  sortExpressions?: SearchSortExpression[];
  itemOffset: number;
  pageSize?: number;
  fleetIds: string[];
}
const SearchWorkersRequest = /*@__PURE__*/ __L.at(
  __c48,
  6,
) as any as S.Schema<SearchWorkersRequest>;
export interface WorkerSearchSummary {
  fleetId?: string;
  workerId?: string;
  status?: WorkerStatus;
  hostProperties?: HostPropertiesResponse;
  createdBy?: string;
  createdAt?: Date;
  updatedBy?: string;
  updatedAt?: Date;
}
const WorkerSearchSummary = /*@__PURE__*/ __L.at(__c48, 7) as any as S.Schema<WorkerSearchSummary>;
export type WorkerSearchSummaries = WorkerSearchSummary[];
const WorkerSearchSummaries = /*@__PURE__*/ __L.at(__c49, 0);
export interface SearchWorkersResponse {
  workers: WorkerSearchSummary[];
  nextItemOffset?: number;
  totalResults: number;
}
const SearchWorkersResponse = /*@__PURE__*/ __L.at(
  __c49,
  1,
) as any as S.Schema<SearchWorkersResponse>;
export type SessionsStatisticsResources =
  | { queueIds: string[]; fleetIds?: never }
  | { queueIds?: never; fleetIds: string[] };
const SessionsStatisticsResources = /*@__PURE__*/ __L.at(__c49, 2);
export type Timezone = string;
export type Period = "HOURLY" | "DAILY" | "WEEKLY" | "MONTHLY" | (string & {});
const Period = S.String;

export type UsageGroupByField =
  | "QUEUE_ID"
  | "FLEET_ID"
  | "JOB_ID"
  | "USER_ID"
  | "USAGE_TYPE"
  | "INSTANCE_TYPE"
  | "LICENSE_PRODUCT"
  | (string & {});
export type UsageGroupBy = UsageGroupByField[];
const UsageGroupBy = AcceleratorTypes as any as S.Schema<UsageGroupBy>;
export type UsageStatistic = "SUM" | "MIN" | "MAX" | "AVG" | (string & {});
export type UsageStatistics = UsageStatistic[];
const UsageStatistics = AcceleratorTypes as any as S.Schema<UsageStatistics>;
export interface StartSessionsStatisticsAggregationRequest {
  farmId: string;
  resourceIds: SessionsStatisticsResources;
  startTime: Date;
  endTime: Date;
  timezone?: string;
  period?: Period;
  groupBy: UsageGroupByField[];
  statistics: UsageStatistic[];
}
const StartSessionsStatisticsAggregationRequest = /*@__PURE__*/ __L.at(
  __c49,
  3,
) as any as S.Schema<StartSessionsStatisticsAggregationRequest>;
export interface StartSessionsStatisticsAggregationResponse {
  aggregationId: string;
}
const StartSessionsStatisticsAggregationResponse = /*@__PURE__*/ __L.at(
  __c49,
  4,
) as any as S.Schema<StartSessionsStatisticsAggregationResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags?: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c49, 5) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = AssociateMemberToFarmResponse as any as S.Schema<TagResourceResponse>;
export type StringList = string[];
const StringList = ParameterStringList as any as S.Schema<StringList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c49,
  6,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse =
  AssociateMemberToFarmResponse as any as S.Schema<UntagResourceResponse>;
export interface BudgetActionToRemove {
  type: BudgetActionType;
  thresholdPercentage: number;
}
const BudgetActionToRemove = /*@__PURE__*/ __L.at(
  __c49,
  7,
) as any as S.Schema<BudgetActionToRemove>;
export type BudgetActionsToRemove = BudgetActionToRemove[];
const BudgetActionsToRemove = /*@__PURE__*/ __L.at(__c50, 0);
export interface UpdateBudgetRequest {
  farmId: string;
  budgetId: string;
  clientToken?: string;
  displayName?: string;
  description?: string | redacted.Redacted<string>;
  status?: BudgetStatus;
  approximateDollarLimit?: number;
  actionsToAdd?: BudgetActionToAdd[];
  actionsToRemove?: BudgetActionToRemove[];
  schedule?: BudgetSchedule;
}
const UpdateBudgetRequest = /*@__PURE__*/ __L.at(__c50, 1) as any as S.Schema<UpdateBudgetRequest>;
export interface UpdateBudgetResponse {}
const UpdateBudgetResponse = AssociateMemberToFarmResponse as any as S.Schema<UpdateBudgetResponse>;
export interface UpdateFarmRequest {
  farmId: string;
  displayName?: string;
  description?: string | redacted.Redacted<string>;
  costScaleFactor?: number;
}
const UpdateFarmRequest = /*@__PURE__*/ __L.at(__c50, 2) as any as S.Schema<UpdateFarmRequest>;
export interface UpdateFarmResponse {}
const UpdateFarmResponse = AssociateMemberToFarmResponse as any as S.Schema<UpdateFarmResponse>;
export interface UpdateFleetRequest {
  farmId: string;
  fleetId: string;
  clientToken?: string;
  displayName?: string;
  description?: string | redacted.Redacted<string>;
  roleArn?: string;
  minWorkerCount?: number;
  maxWorkerCount?: number;
  configuration?: FleetConfiguration;
  hostConfiguration?: HostConfiguration;
}
const UpdateFleetRequest = /*@__PURE__*/ __L.at(__c50, 3) as any as S.Schema<UpdateFleetRequest>;
export interface UpdateFleetResponse {}
const UpdateFleetResponse = AssociateMemberToFarmResponse as any as S.Schema<UpdateFleetResponse>;
export interface UpdateJobRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  clientToken?: string;
  targetTaskRunStatus?: JobTargetTaskRunStatus;
  priority?: number;
  maxFailedTasksCount?: number;
  maxRetriesPerTask?: number;
  lifecycleStatus?: UpdateJobLifecycleStatus;
  maxWorkerCount?: number;
  name?: string;
  description?: string | redacted.Redacted<string>;
}
const UpdateJobRequest = /*@__PURE__*/ __L.at(__c50, 4) as any as S.Schema<UpdateJobRequest>;
export interface UpdateJobResponse {}
const UpdateJobResponse = AssociateMemberToFarmResponse as any as S.Schema<UpdateJobResponse>;
export interface UpdateLimitRequest {
  farmId: string;
  limitId: string;
  displayName?: string;
  description?: string | redacted.Redacted<string>;
  maxCount?: number;
}
const UpdateLimitRequest = /*@__PURE__*/ __L.at(__c50, 5) as any as S.Schema<UpdateLimitRequest>;
export interface UpdateLimitResponse {}
const UpdateLimitResponse = AssociateMemberToFarmResponse as any as S.Schema<UpdateLimitResponse>;
export interface UpdateMonitorRequest {
  monitorId: string;
  subdomain?: string;
  displayName?: string;
  roleArn?: string;
}
const UpdateMonitorRequest = /*@__PURE__*/ __L.at(
  __c50,
  6,
) as any as S.Schema<UpdateMonitorRequest>;
export interface UpdateMonitorResponse {}
const UpdateMonitorResponse =
  AssociateMemberToFarmResponse as any as S.Schema<UpdateMonitorResponse>;
export interface UpdateMonitorSettingsRequest {
  monitorId: string;
  settings: { [key: string]: string | undefined };
}
const UpdateMonitorSettingsRequest = /*@__PURE__*/ __L.at(
  __c50,
  7,
) as any as S.Schema<UpdateMonitorSettingsRequest>;
export interface UpdateMonitorSettingsResponse {}
const UpdateMonitorSettingsResponse =
  AssociateMemberToFarmResponse as any as S.Schema<UpdateMonitorSettingsResponse>;
export interface UpdateQueueRequest {
  farmId: string;
  queueId: string;
  clientToken?: string;
  displayName?: string;
  description?: string | redacted.Redacted<string>;
  defaultBudgetAction?: DefaultQueueBudgetAction;
  jobAttachmentSettings?: JobAttachmentSettings;
  roleArn?: string;
  jobRunAsUser?: JobRunAsUser;
  requiredFileSystemLocationNamesToAdd?: string[];
  requiredFileSystemLocationNamesToRemove?: string[];
  allowedStorageProfileIdsToAdd?: string[];
  allowedStorageProfileIdsToRemove?: string[];
  schedulingConfiguration?: SchedulingConfiguration;
}
const UpdateQueueRequest = /*@__PURE__*/ __L.at(__c51, 0) as any as S.Schema<UpdateQueueRequest>;
export interface UpdateQueueResponse {}
const UpdateQueueResponse = AssociateMemberToFarmResponse as any as S.Schema<UpdateQueueResponse>;
export interface UpdateQueueEnvironmentRequest {
  farmId: string;
  queueId: string;
  queueEnvironmentId: string;
  clientToken?: string;
  priority?: number;
  templateType?: EnvironmentTemplateType;
  template?: string | redacted.Redacted<string>;
}
const UpdateQueueEnvironmentRequest = /*@__PURE__*/ __L.at(
  __c51,
  1,
) as any as S.Schema<UpdateQueueEnvironmentRequest>;
export interface UpdateQueueEnvironmentResponse {}
const UpdateQueueEnvironmentResponse =
  AssociateMemberToFarmResponse as any as S.Schema<UpdateQueueEnvironmentResponse>;
export type UpdateQueueFleetAssociationStatus =
  | "ACTIVE"
  | "STOP_SCHEDULING_AND_COMPLETE_TASKS"
  | "STOP_SCHEDULING_AND_CANCEL_TASKS"
  | (string & {});
const UpdateQueueFleetAssociationStatus = S.String;

export interface UpdateQueueFleetAssociationRequest {
  farmId: string;
  queueId: string;
  fleetId: string;
  status: UpdateQueueFleetAssociationStatus;
}
const UpdateQueueFleetAssociationRequest = /*@__PURE__*/ __L.at(
  __c51,
  2,
) as any as S.Schema<UpdateQueueFleetAssociationRequest>;
export interface UpdateQueueFleetAssociationResponse {}
const UpdateQueueFleetAssociationResponse =
  PriorityFifoSchedulingConfiguration as any as S.Schema<UpdateQueueFleetAssociationResponse>;
export type UpdateQueueLimitAssociationStatus =
  | "ACTIVE"
  | "STOP_LIMIT_USAGE_AND_COMPLETE_TASKS"
  | "STOP_LIMIT_USAGE_AND_CANCEL_TASKS"
  | (string & {});
const UpdateQueueLimitAssociationStatus = S.String;

export interface UpdateQueueLimitAssociationRequest {
  farmId: string;
  queueId: string;
  limitId: string;
  status: UpdateQueueLimitAssociationStatus;
}
const UpdateQueueLimitAssociationRequest = /*@__PURE__*/ __L.at(
  __c51,
  3,
) as any as S.Schema<UpdateQueueLimitAssociationRequest>;
export interface UpdateQueueLimitAssociationResponse {}
const UpdateQueueLimitAssociationResponse =
  PriorityFifoSchedulingConfiguration as any as S.Schema<UpdateQueueLimitAssociationResponse>;
export interface UpdateSessionRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  sessionId: string;
  clientToken?: string;
  targetLifecycleStatus: SessionLifecycleTargetStatus;
}
const UpdateSessionRequest = /*@__PURE__*/ __L.at(
  __c51,
  4,
) as any as S.Schema<UpdateSessionRequest>;
export interface UpdateSessionResponse {}
const UpdateSessionResponse =
  AssociateMemberToFarmResponse as any as S.Schema<UpdateSessionResponse>;
export interface UpdateStepRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  stepId: string;
  clientToken?: string;
  targetTaskRunStatus: StepTargetTaskRunStatus;
}
const UpdateStepRequest = /*@__PURE__*/ __L.at(__c51, 5) as any as S.Schema<UpdateStepRequest>;
export interface UpdateStepResponse {}
const UpdateStepResponse = AssociateMemberToFarmResponse as any as S.Schema<UpdateStepResponse>;
export interface UpdateStorageProfileRequest {
  farmId: string;
  storageProfileId: string;
  clientToken?: string;
  displayName?: string;
  osFamily?: StorageProfileOperatingSystemFamily;
  fileSystemLocationsToAdd?: FileSystemLocation[];
  fileSystemLocationsToRemove?: FileSystemLocation[];
}
const UpdateStorageProfileRequest = /*@__PURE__*/ __L.at(
  __c51,
  6,
) as any as S.Schema<UpdateStorageProfileRequest>;
export interface UpdateStorageProfileResponse {}
const UpdateStorageProfileResponse =
  AssociateMemberToFarmResponse as any as S.Schema<UpdateStorageProfileResponse>;
export interface UpdateTaskRequest {
  farmId: string;
  queueId: string;
  jobId: string;
  stepId: string;
  taskId: string;
  clientToken?: string;
  targetRunStatus: TaskTargetRunStatus;
}
const UpdateTaskRequest = /*@__PURE__*/ __L.at(__c51, 7) as any as S.Schema<UpdateTaskRequest>;
export interface UpdateTaskResponse {}
const UpdateTaskResponse = AssociateMemberToFarmResponse as any as S.Schema<UpdateTaskResponse>;
export type UpdatedWorkerStatus = "STARTED" | "STOPPING" | "STOPPED" | (string & {});
const UpdatedWorkerStatus = S.String;

export interface WorkerAmountCapability {
  name: string;
  value: number;
}
const WorkerAmountCapability = /*@__PURE__*/ __L.at(
  __c52,
  0,
) as any as S.Schema<WorkerAmountCapability>;
export type WorkerAmountCapabilityList = WorkerAmountCapability[];
const WorkerAmountCapabilityList = /*@__PURE__*/ __L.at(__c52, 1);
export interface WorkerAttributeCapability {
  name: string;
  values: string[];
}
const WorkerAttributeCapability = /*@__PURE__*/ __L.at(
  __c52,
  2,
) as any as S.Schema<WorkerAttributeCapability>;
export type WorkerAttributeCapabilityList = WorkerAttributeCapability[];
const WorkerAttributeCapabilityList = /*@__PURE__*/ __L.at(__c52, 3);
export interface WorkerCapabilities {
  amounts: WorkerAmountCapability[];
  attributes: WorkerAttributeCapability[];
}
const WorkerCapabilities = /*@__PURE__*/ __L.at(__c52, 4) as any as S.Schema<WorkerCapabilities>;
export interface UpdateWorkerRequest {
  farmId: string;
  fleetId: string;
  workerId: string;
  status?: UpdatedWorkerStatus;
  capabilities?: WorkerCapabilities;
  hostProperties?: HostPropertiesRequest;
}
const UpdateWorkerRequest = /*@__PURE__*/ __L.at(__c52, 5) as any as S.Schema<UpdateWorkerRequest>;
export interface UpdateWorkerResponse {
  log?: LogConfiguration;
  hostConfiguration?: HostConfiguration;
}
const UpdateWorkerResponse = /*@__PURE__*/ __L.at(
  __c52,
  6,
) as any as S.Schema<UpdateWorkerResponse>;
export type CompletedStatus =
  | "SUCCEEDED"
  | "FAILED"
  | "INTERRUPTED"
  | "CANCELED"
  | "NEVER_ATTEMPTED"
  | (string & {});
const CompletedStatus = S.String;

export interface TaskRunManifestPropertiesRequest {
  outputManifestPath?: string;
  outputManifestHash?: string;
}
export type TaskRunManifestPropertiesListRequest = TaskRunManifestPropertiesRequest[];
const TaskRunManifestPropertiesListRequest =
  TaskRunManifestPropertiesListResponse as any as S.Schema<TaskRunManifestPropertiesListRequest>;
export interface UpdatedSessionActionInfo {
  completedStatus?: CompletedStatus;
  processExitCode?: number;
  progressMessage?: string | redacted.Redacted<string>;
  startedAt?: Date;
  endedAt?: Date;
  updatedAt?: Date;
  progressPercent?: number;
  manifests?: TaskRunManifestPropertiesRequest[];
}
const UpdatedSessionActionInfo = /*@__PURE__*/ __L.at(
  __c52,
  7,
) as any as S.Schema<UpdatedSessionActionInfo>;
export type UpdatedSessionActions = { [key: string]: UpdatedSessionActionInfo | undefined };
const UpdatedSessionActions = /*@__PURE__*/ __L.at(__c53, 0);
export interface UpdateWorkerScheduleRequest {
  farmId: string;
  fleetId: string;
  workerId: string;
  updatedSessionActions?: { [key: string]: UpdatedSessionActionInfo | undefined };
}
const UpdateWorkerScheduleRequest = /*@__PURE__*/ __L.at(
  __c53,
  1,
) as any as S.Schema<UpdateWorkerScheduleRequest>;
export interface AssignedEnvironmentEnterSessionActionDefinition {
  environmentId: string;
}
export interface AssignedEnvironmentExitSessionActionDefinition {
  environmentId: string;
}
export interface AssignedTaskRunSessionActionDefinition {
  taskId?: string;
  stepId: string;
  parameters: { [key: string]: TaskParameterValue | undefined };
}
export interface AssignedSyncInputJobAttachmentsSessionActionDefinition {
  stepId?: string;
}
export type AssignedSessionActionDefinition =
  | {
      envEnter: AssignedEnvironmentEnterSessionActionDefinition;
      envExit?: never;
      taskRun?: never;
      syncInputJobAttachments?: never;
    }
  | {
      envEnter?: never;
      envExit: AssignedEnvironmentExitSessionActionDefinition;
      taskRun?: never;
      syncInputJobAttachments?: never;
    }
  | {
      envEnter?: never;
      envExit?: never;
      taskRun: AssignedTaskRunSessionActionDefinition;
      syncInputJobAttachments?: never;
    }
  | {
      envEnter?: never;
      envExit?: never;
      taskRun?: never;
      syncInputJobAttachments: AssignedSyncInputJobAttachmentsSessionActionDefinition;
    };
const AssignedSessionActionDefinition =
  SessionActionDefinition as any as S.Schema<AssignedSessionActionDefinition>;
export interface AssignedSessionAction {
  sessionActionId: string;
  definition: AssignedSessionActionDefinition;
}
const AssignedSessionAction = /*@__PURE__*/ __L.at(
  __c53,
  2,
) as any as S.Schema<AssignedSessionAction>;
export type AssignedSessionActions = AssignedSessionAction[];
const AssignedSessionActions = /*@__PURE__*/ __L.at(__c53, 3);
export type SessionMetadataKey = string;
export type SessionMetadataValue = string;
export type SessionMetadata = { [key: string]: string | undefined };
const SessionMetadata = LogParameters as any as S.Schema<SessionMetadata>;
export interface AssignedSession {
  queueId: string;
  jobId: string;
  sessionActions: AssignedSessionAction[];
  logConfiguration: LogConfiguration;
  metadata?: { [key: string]: string | undefined };
}
const AssignedSession = /*@__PURE__*/ __L.at(__c53, 4) as any as S.Schema<AssignedSession>;
export type AssignedSessions = { [key: string]: AssignedSession | undefined };
const AssignedSessions = /*@__PURE__*/ __L.at(__c53, 5);
export type SessionActionIdList = string[];
const SessionActionIdList = ParameterStringList as any as S.Schema<SessionActionIdList>;
export type CancelSessionActions = { [key: string]: string[] | undefined };
const CancelSessionActions = /*@__PURE__*/ __L.at(__c53, 6);
export type DesiredWorkerStatus = "STOPPED" | (string & {});
const DesiredWorkerStatus = S.String;

export type UpdateWorkerScheduleInterval = number;
export interface UpdateWorkerScheduleResponse {
  assignedSessions: { [key: string]: AssignedSession | undefined };
  cancelSessionActions: { [key: string]: string[] | undefined };
  desiredWorkerStatus?: DesiredWorkerStatus;
  updateIntervalSeconds: number;
}
const UpdateWorkerScheduleResponse = /*@__PURE__*/ __L.at(
  __c53,
  7,
) as any as S.Schema<UpdateWorkerScheduleResponse>;
export type ExceptionContext = { [key: string]: string | undefined };
const ExceptionContext = LogParameters as any as S.Schema<ExceptionContext>;
export type ServiceQuotaExceededExceptionReason =
  | "SERVICE_QUOTA_EXCEEDED_EXCEPTION"
  | "KMS_KEY_LIMIT_EXCEEDED"
  | "DEPENDENCY_LIMIT_EXCEEDED"
  | (string & {});
const ServiceQuotaExceededExceptionReason = S.String;

export type ValidationExceptionReason =
  | "UNKNOWN_OPERATION"
  | "CANNOT_PARSE"
  | "FIELD_VALIDATION_FAILED"
  | "OTHER"
  | (string & {});
const ValidationExceptionReason = S.String;

export interface ValidationExceptionField {
  name: string;
  message: string;
}
const ValidationExceptionField = /*@__PURE__*/ __L.at(
  __c54,
  0,
) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
const ValidationExceptionFieldList = /*@__PURE__*/ __L.at(__c54, 1);
export type ConflictExceptionReason =
  | "CONFLICT_EXCEPTION"
  | "CONCURRENT_MODIFICATION"
  | "RESOURCE_ALREADY_EXISTS"
  | "RESOURCE_IN_USE"
  | "STATUS_CONFLICT"
  | (string & {});
const ConflictExceptionReason = S.String;

export type AssociateMemberToFarmError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Assigns a farm membership level to a member.
 */
export const associateMemberToFarm: API.OperationMethod<
  AssociateMemberToFarmRequest,
  AssociateMemberToFarmResponse,
  AssociateMemberToFarmError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateMemberToFarmRequest,
  output: AssociateMemberToFarmResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateMemberToFarm",
  endpointHostPrefix: "management.",
}));

export type AssociateMemberToFleetError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Assigns a fleet membership level to a member.
 */
export const associateMemberToFleet: API.OperationMethod<
  AssociateMemberToFleetRequest,
  AssociateMemberToFleetResponse,
  AssociateMemberToFleetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateMemberToFleetRequest,
  output: AssociateMemberToFleetResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateMemberToFleet",
  endpointHostPrefix: "management.",
}));

export type AssociateMemberToJobError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Assigns a job membership level to a member
 */
export const associateMemberToJob: API.OperationMethod<
  AssociateMemberToJobRequest,
  AssociateMemberToJobResponse,
  AssociateMemberToJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateMemberToJobRequest,
  output: AssociateMemberToJobResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateMemberToJob",
  endpointHostPrefix: "management.",
}));

export type AssociateMemberToQueueError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Assigns a queue membership level to a member
 */
export const associateMemberToQueue: API.OperationMethod<
  AssociateMemberToQueueRequest,
  AssociateMemberToQueueResponse,
  AssociateMemberToQueueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateMemberToQueueRequest,
  output: AssociateMemberToQueueResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateMemberToQueue",
  endpointHostPrefix: "management.",
}));

export type AssumeFleetRoleForReadError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get Amazon Web Services credentials from the fleet role. The IAM permissions of the credentials are scoped down to have read-only access.
 */
export const assumeFleetRoleForRead: API.OperationMethod<
  AssumeFleetRoleForReadRequest,
  AssumeFleetRoleForReadResponse,
  AssumeFleetRoleForReadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssumeFleetRoleForReadRequest,
  output: AssumeFleetRoleForReadResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssumeFleetRoleForRead",
  endpointHostPrefix: "management.",
}));

export type AssumeFleetRoleForWorkerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get credentials from the fleet role for a worker.
 */
export const assumeFleetRoleForWorker: API.OperationMethod<
  AssumeFleetRoleForWorkerRequest,
  AssumeFleetRoleForWorkerResponse,
  AssumeFleetRoleForWorkerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssumeFleetRoleForWorkerRequest,
  output: AssumeFleetRoleForWorkerResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssumeFleetRoleForWorker",
  endpointHostPrefix: "scheduling.",
}));

export type AssumeQueueRoleForReadError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets Amazon Web Services credentials from the queue role. The IAM permissions of the credentials are scoped down to have read-only access.
 */
export const assumeQueueRoleForRead: API.OperationMethod<
  AssumeQueueRoleForReadRequest,
  AssumeQueueRoleForReadResponse,
  AssumeQueueRoleForReadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssumeQueueRoleForReadRequest,
  output: AssumeQueueRoleForReadResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssumeQueueRoleForRead",
  endpointHostPrefix: "management.",
}));

export type AssumeQueueRoleForUserError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Allows a user to assume a role for a queue.
 */
export const assumeQueueRoleForUser: API.OperationMethod<
  AssumeQueueRoleForUserRequest,
  AssumeQueueRoleForUserResponse,
  AssumeQueueRoleForUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssumeQueueRoleForUserRequest,
  output: AssumeQueueRoleForUserResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssumeQueueRoleForUser",
  endpointHostPrefix: "management.",
}));

export type AssumeQueueRoleForWorkerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Allows a worker to assume a queue role.
 */
export const assumeQueueRoleForWorker: API.OperationMethod<
  AssumeQueueRoleForWorkerRequest,
  AssumeQueueRoleForWorkerResponse,
  AssumeQueueRoleForWorkerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssumeQueueRoleForWorkerRequest,
  output: AssumeQueueRoleForWorkerResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssumeQueueRoleForWorker",
  endpointHostPrefix: "scheduling.",
}));

export type BatchGetJobError =
  | AccessDeniedException
  | InternalServerErrorException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves multiple jobs in a single request. This is a batch version of the `GetJob` API.
 *
 * The result of getting each job is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.
 */
export const batchGetJob: API.OperationMethod<
  BatchGetJobRequest,
  BatchGetJobResponse,
  BatchGetJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetJobRequest,
  output: BatchGetJobResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetJob",
  endpointHostPrefix: "management.",
}));

export type BatchGetJobEntityError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get batched job details for a worker.
 */
export const batchGetJobEntity: API.OperationMethod<
  BatchGetJobEntityRequest,
  BatchGetJobEntityResponse,
  BatchGetJobEntityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetJobEntityRequest,
  output: BatchGetJobEntityResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetJobEntity",
  endpointHostPrefix: "scheduling.",
}));

export type BatchGetSessionError =
  | AccessDeniedException
  | InternalServerErrorException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves multiple sessions in a single request. This is a batch version of the `GetSession` API.
 *
 * The result of getting each session is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.
 */
export const batchGetSession: API.OperationMethod<
  BatchGetSessionRequest,
  BatchGetSessionResponse,
  BatchGetSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetSessionRequest,
  output: BatchGetSessionResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetSession",
  endpointHostPrefix: "management.",
}));

export type BatchGetSessionActionError =
  | AccessDeniedException
  | InternalServerErrorException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves multiple session actions in a single request. This is a batch version of the `GetSessionAction` API.
 *
 * The result of getting each session action is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.
 */
export const batchGetSessionAction: API.OperationMethod<
  BatchGetSessionActionRequest,
  BatchGetSessionActionResponse,
  BatchGetSessionActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetSessionActionRequest,
  output: BatchGetSessionActionResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetSessionAction",
  endpointHostPrefix: "management.",
}));

export type BatchGetStepError =
  | AccessDeniedException
  | InternalServerErrorException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves multiple steps in a single request. This is a batch version of the `GetStep` API.
 *
 * The result of getting each step is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.
 */
export const batchGetStep: API.OperationMethod<
  BatchGetStepRequest,
  BatchGetStepResponse,
  BatchGetStepError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetStepRequest,
  output: BatchGetStepResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetStep",
  endpointHostPrefix: "management.",
}));

export type BatchGetTaskError =
  | AccessDeniedException
  | InternalServerErrorException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves multiple tasks in a single request. This is a batch version of the `GetTask` API.
 *
 * The result of getting each task is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.
 */
export const batchGetTask: API.OperationMethod<
  BatchGetTaskRequest,
  BatchGetTaskResponse,
  BatchGetTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetTaskRequest,
  output: BatchGetTaskResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetTask",
  endpointHostPrefix: "management.",
}));

export type BatchGetWorkerError =
  | AccessDeniedException
  | InternalServerErrorException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves multiple workers in a single request. This is a batch version of the `GetWorker` API.
 *
 * The result of getting each worker is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.
 */
export const batchGetWorker: API.OperationMethod<
  BatchGetWorkerRequest,
  BatchGetWorkerResponse,
  BatchGetWorkerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetWorkerRequest,
  output: BatchGetWorkerResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetWorker",
  endpointHostPrefix: "management.",
}));

export type BatchUpdateJobError =
  | AccessDeniedException
  | InternalServerErrorException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates multiple jobs in a single request. This is a batch version of the `UpdateJob` API.
 *
 * The result of updating each job is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.
 *
 * When you change the status of a job to `ARCHIVED`, the job can't be scheduled or archived.
 *
 * An archived job and its steps and tasks are deleted after 120 days. The job can't be recovered.
 */
export const batchUpdateJob: API.OperationMethod<
  BatchUpdateJobRequest,
  BatchUpdateJobResponse,
  BatchUpdateJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateJobRequest,
  output: BatchUpdateJobResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateJob",
  endpointHostPrefix: "management.",
}));

export type BatchUpdateTaskError =
  | AccessDeniedException
  | InternalServerErrorException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates multiple tasks in a single request. This is a batch version of the `UpdateTask` API.
 *
 * The result of updating each task is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.
 */
export const batchUpdateTask: API.OperationMethod<
  BatchUpdateTaskRequest,
  BatchUpdateTaskResponse,
  BatchUpdateTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateTaskRequest,
  output: BatchUpdateTaskResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateTask",
  endpointHostPrefix: "management.",
}));

export type CopyJobTemplateError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Copies a job template to an Amazon S3 bucket.
 */
export const copyJobTemplate: API.OperationMethod<
  CopyJobTemplateRequest,
  CopyJobTemplateResponse,
  CopyJobTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CopyJobTemplateRequest,
  output: CopyJobTemplateResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CopyJobTemplate",
  endpointHostPrefix: "management.",
}));

export type CreateBudgetError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | ConflictException
  | CommonErrors;
/**
 * Creates a budget to set spending thresholds for your rendering activity.
 */
export const createBudget: API.OperationMethod<
  CreateBudgetRequest,
  CreateBudgetResponse,
  CreateBudgetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateBudgetRequest,
  output: CreateBudgetResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
    ConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateBudget",
  endpointHostPrefix: "management.",
}));

export type CreateFarmError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a farm to allow space for queues and fleets. Farms are the space where the components of your renders gather and are pieced together in the cloud. Farms contain budgets and allow you to enforce permissions. Deadline Cloud farms are a useful container for large projects.
 */
export const createFarm: API.OperationMethod<
  CreateFarmRequest,
  CreateFarmResponse,
  CreateFarmError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateFarmRequest,
  output: CreateFarmResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateFarm",
  endpointHostPrefix: "management.",
}));

export type CreateFleetError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | ConflictException
  | CommonErrors;
/**
 * Creates a fleet. Fleets gather information relating to compute, or capacity, for renders within your farms. You can choose to manage your own capacity or opt to have fleets fully managed by Deadline Cloud.
 */
export const createFleet: API.OperationMethod<
  CreateFleetRequest,
  CreateFleetResponse,
  CreateFleetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateFleetRequest,
  output: CreateFleetResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
    ConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateFleet",
  endpointHostPrefix: "management.",
}));

export type CreateJobError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a job. A job is a set of instructions that Deadline Cloud uses to schedule and run work on available workers. For more information, see Deadline Cloud jobs.
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
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateJob",
  endpointHostPrefix: "management.",
}));

export type CreateLicenseEndpointError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a license endpoint to integrate your various licensed software used for rendering on Deadline Cloud.
 */
export const createLicenseEndpoint: API.OperationMethod<
  CreateLicenseEndpointRequest,
  CreateLicenseEndpointResponse,
  CreateLicenseEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLicenseEndpointRequest,
  output: CreateLicenseEndpointResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLicenseEndpoint",
  endpointHostPrefix: "management.",
}));

export type CreateLimitError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a limit that manages the distribution of shared resources, such as floating licenses. A limit can throttle work assignments, help manage workloads, and track current usage. Before you use a limit, you must associate the limit with one or more queues.
 *
 * You must add the `amountRequirementName` to a step in a job template to declare the limit requirement.
 */
export const createLimit: API.OperationMethod<
  CreateLimitRequest,
  CreateLimitResponse,
  CreateLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLimitRequest,
  output: CreateLimitResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLimit",
  endpointHostPrefix: "management.",
}));

export type CreateMonitorError =
  | AccessDeniedException
  | InternalServerErrorException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | ConflictException
  | CommonErrors;
/**
 * Creates an Amazon Web Services Deadline Cloud monitor that you can use to view your farms, queues, and fleets. After you submit a job, you can track the progress of the tasks and steps that make up the job, and then download the job's results.
 */
export const createMonitor: API.OperationMethod<
  CreateMonitorRequest,
  CreateMonitorResponse,
  CreateMonitorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateMonitorRequest,
  output: CreateMonitorResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
    ConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMonitor",
  endpointHostPrefix: "management.",
}));

export type CreateQueueError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | ConflictException
  | CommonErrors;
/**
 * Creates a queue to coordinate the order in which jobs run on a farm. A queue can also specify where to pull resources and indicate where to output completed jobs.
 */
export const createQueue: API.OperationMethod<
  CreateQueueRequest,
  CreateQueueResponse,
  CreateQueueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateQueueRequest,
  output: CreateQueueResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
    ConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateQueue",
  endpointHostPrefix: "management.",
}));

export type CreateQueueEnvironmentError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an environment for a queue that defines how jobs in the queue run.
 */
export const createQueueEnvironment: API.OperationMethod<
  CreateQueueEnvironmentRequest,
  CreateQueueEnvironmentResponse,
  CreateQueueEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateQueueEnvironmentRequest,
  output: CreateQueueEnvironmentResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateQueueEnvironment",
  endpointHostPrefix: "management.",
}));

export type CreateQueueFleetAssociationError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an association between a queue and a fleet.
 */
export const createQueueFleetAssociation: API.OperationMethod<
  CreateQueueFleetAssociationRequest,
  CreateQueueFleetAssociationResponse,
  CreateQueueFleetAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateQueueFleetAssociationRequest,
  output: CreateQueueFleetAssociationResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateQueueFleetAssociation",
  endpointHostPrefix: "management.",
}));

export type CreateQueueLimitAssociationError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a limit with a particular queue. After the limit is associated, all workers for jobs that specify the limit associated with the queue are subject to the limit. You can't associate two limits with the same `amountRequirementName` to the same queue.
 */
export const createQueueLimitAssociation: API.OperationMethod<
  CreateQueueLimitAssociationRequest,
  CreateQueueLimitAssociationResponse,
  CreateQueueLimitAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateQueueLimitAssociationRequest,
  output: CreateQueueLimitAssociationResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateQueueLimitAssociation",
  endpointHostPrefix: "management.",
}));

export type CreateStorageProfileError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | ConflictException
  | CommonErrors;
/**
 * Creates a storage profile that specifies the operating system, file type, and file location of resources used on a farm.
 */
export const createStorageProfile: API.OperationMethod<
  CreateStorageProfileRequest,
  CreateStorageProfileResponse,
  CreateStorageProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateStorageProfileRequest,
  output: CreateStorageProfileResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
    ConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateStorageProfile",
  endpointHostPrefix: "management.",
}));

export type CreateWorkerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a worker. A worker tells your instance how much processing power (vCPU), and memory (GiB) you'll need to assemble the digital assets held within a particular instance. You can specify certain instance types to use, or let the worker know which instances types to exclude.
 *
 * Deadline Cloud limits the number of workers to less than or equal to the fleet's maximum worker count. The service maintains eventual consistency for the worker count. If you make multiple rapid calls to `CreateWorker` before the field updates, you might exceed your fleet's maximum worker count. For example, if your `maxWorkerCount` is 10 and you currently have 9 workers, making two quick `CreateWorker` calls might successfully create 2 workers instead of 1, resulting in 11 total workers.
 */
export const createWorker: API.OperationMethod<
  CreateWorkerRequest,
  CreateWorkerResponse,
  CreateWorkerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateWorkerRequest,
  output: CreateWorkerResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateWorker",
  endpointHostPrefix: "scheduling.",
}));

export type DeleteBudgetError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | ConflictException
  | CommonErrors;
/**
 * Deletes a budget.
 */
export const deleteBudget: API.OperationMethod<
  DeleteBudgetRequest,
  DeleteBudgetResponse,
  DeleteBudgetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBudgetRequest,
  output: DeleteBudgetResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    ConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBudget",
  endpointHostPrefix: "management.",
}));

export type DeleteFarmError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | ConflictException
  | CommonErrors;
/**
 * Deletes a farm.
 */
export const deleteFarm: API.OperationMethod<
  DeleteFarmRequest,
  DeleteFarmResponse,
  DeleteFarmError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteFarmRequest,
  output: DeleteFarmResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    ConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteFarm",
  endpointHostPrefix: "management.",
}));

export type DeleteFleetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a fleet.
 */
export const deleteFleet: API.OperationMethod<
  DeleteFleetRequest,
  DeleteFleetResponse,
  DeleteFleetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteFleetRequest,
  output: DeleteFleetResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteFleet",
  endpointHostPrefix: "management.",
}));

export type DeleteLicenseEndpointError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a license endpoint.
 */
export const deleteLicenseEndpoint: API.OperationMethod<
  DeleteLicenseEndpointRequest,
  DeleteLicenseEndpointResponse,
  DeleteLicenseEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteLicenseEndpointRequest,
  output: DeleteLicenseEndpointResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLicenseEndpoint",
  endpointHostPrefix: "management.",
}));

export type DeleteLimitError =
  | AccessDeniedException
  | InternalServerErrorException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes a limit from the specified farm. Before you delete a limit you must use the `DeleteQueueLimitAssociation` operation to remove the association with any queues.
 */
export const deleteLimit: API.OperationMethod<
  DeleteLimitRequest,
  DeleteLimitResponse,
  DeleteLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteLimitRequest,
  output: DeleteLimitResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLimit",
  endpointHostPrefix: "management.",
}));

export type DeleteMeteredProductError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a metered product.
 */
export const deleteMeteredProduct: API.OperationMethod<
  DeleteMeteredProductRequest,
  DeleteMeteredProductResponse,
  DeleteMeteredProductError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteMeteredProductRequest,
  output: DeleteMeteredProductResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMeteredProduct",
  endpointHostPrefix: "management.",
}));

export type DeleteMonitorError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | ConflictException
  | CommonErrors;
/**
 * Removes a Deadline Cloud monitor. After you delete a monitor, you can create a new one and attach farms to the monitor.
 */
export const deleteMonitor: API.OperationMethod<
  DeleteMonitorRequest,
  DeleteMonitorResponse,
  DeleteMonitorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteMonitorRequest,
  output: DeleteMonitorResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    ConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMonitor",
  endpointHostPrefix: "management.",
}));

export type DeleteQueueError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a queue.
 *
 * You can't recover the jobs in a queue if you delete the queue. Deleting the queue also deletes the jobs in that queue.
 */
export const deleteQueue: API.OperationMethod<
  DeleteQueueRequest,
  DeleteQueueResponse,
  DeleteQueueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteQueueRequest,
  output: DeleteQueueResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteQueue",
  endpointHostPrefix: "management.",
}));

export type DeleteQueueEnvironmentError =
  | AccessDeniedException
  | InternalServerErrorException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a queue environment.
 */
export const deleteQueueEnvironment: API.OperationMethod<
  DeleteQueueEnvironmentRequest,
  DeleteQueueEnvironmentResponse,
  DeleteQueueEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteQueueEnvironmentRequest,
  output: DeleteQueueEnvironmentResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteQueueEnvironment",
  endpointHostPrefix: "management.",
}));

export type DeleteQueueFleetAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a queue-fleet association.
 */
export const deleteQueueFleetAssociation: API.OperationMethod<
  DeleteQueueFleetAssociationRequest,
  DeleteQueueFleetAssociationResponse,
  DeleteQueueFleetAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteQueueFleetAssociationRequest,
  output: DeleteQueueFleetAssociationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteQueueFleetAssociation",
  endpointHostPrefix: "management.",
}));

export type DeleteQueueLimitAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes the association between a queue and a limit. You must use the `UpdateQueueLimitAssociation` operation to set the status to `STOP_LIMIT_USAGE_AND_COMPLETE_TASKS` or `STOP_LIMIT_USAGE_AND_CANCEL_TASKS`. The status does not change immediately. Use the `GetQueueLimitAssociation` operation to see if the status changed to `STOPPED` before deleting the association.
 */
export const deleteQueueLimitAssociation: API.OperationMethod<
  DeleteQueueLimitAssociationRequest,
  DeleteQueueLimitAssociationResponse,
  DeleteQueueLimitAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteQueueLimitAssociationRequest,
  output: DeleteQueueLimitAssociationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteQueueLimitAssociation",
  endpointHostPrefix: "management.",
}));

export type DeleteStorageProfileError =
  | AccessDeniedException
  | InternalServerErrorException
  | ThrottlingException
  | ValidationException
  | ConflictException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes a storage profile.
 */
export const deleteStorageProfile: API.OperationMethod<
  DeleteStorageProfileRequest,
  DeleteStorageProfileResponse,
  DeleteStorageProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteStorageProfileRequest,
  output: DeleteStorageProfileResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ThrottlingException,
    ValidationException,
    ConflictException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteStorageProfile",
  endpointHostPrefix: "management.",
}));

export type DeleteVolumeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a persistent volume.
 */
export const deleteVolume: API.OperationMethod<
  DeleteVolumeRequest,
  DeleteVolumeResponse,
  DeleteVolumeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteVolumeRequest,
  output: DeleteVolumeResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVolume",
  endpointHostPrefix: "management.",
}));

export type DeleteWorkerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a worker.
 */
export const deleteWorker: API.OperationMethod<
  DeleteWorkerRequest,
  DeleteWorkerResponse,
  DeleteWorkerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteWorkerRequest,
  output: DeleteWorkerResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWorker",
  endpointHostPrefix: "management.",
}));

export type DisassociateMemberFromFarmError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates a member from a farm.
 */
export const disassociateMemberFromFarm: API.OperationMethod<
  DisassociateMemberFromFarmRequest,
  DisassociateMemberFromFarmResponse,
  DisassociateMemberFromFarmError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateMemberFromFarmRequest,
  output: DisassociateMemberFromFarmResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateMemberFromFarm",
  endpointHostPrefix: "management.",
}));

export type DisassociateMemberFromFleetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates a member from a fleet.
 */
export const disassociateMemberFromFleet: API.OperationMethod<
  DisassociateMemberFromFleetRequest,
  DisassociateMemberFromFleetResponse,
  DisassociateMemberFromFleetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateMemberFromFleetRequest,
  output: DisassociateMemberFromFleetResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateMemberFromFleet",
  endpointHostPrefix: "management.",
}));

export type DisassociateMemberFromJobError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates a member from a job.
 */
export const disassociateMemberFromJob: API.OperationMethod<
  DisassociateMemberFromJobRequest,
  DisassociateMemberFromJobResponse,
  DisassociateMemberFromJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateMemberFromJobRequest,
  output: DisassociateMemberFromJobResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateMemberFromJob",
  endpointHostPrefix: "management.",
}));

export type DisassociateMemberFromQueueError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates a member from a queue.
 */
export const disassociateMemberFromQueue: API.OperationMethod<
  DisassociateMemberFromQueueRequest,
  DisassociateMemberFromQueueResponse,
  DisassociateMemberFromQueueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateMemberFromQueueRequest,
  output: DisassociateMemberFromQueueResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateMemberFromQueue",
  endpointHostPrefix: "management.",
}));

export type GetBudgetError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get a budget.
 */
export const getBudget: API.OperationMethod<
  GetBudgetRequest,
  GetBudgetResponse,
  GetBudgetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBudgetRequest,
  output: GetBudgetResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBudget",
  endpointHostPrefix: "management.",
}));

export type GetFarmError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get a farm.
 */
export const getFarm: API.OperationMethod<
  GetFarmRequest,
  GetFarmResponse,
  GetFarmError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFarmRequest,
  output: GetFarmResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFarm",
  endpointHostPrefix: "management.",
}));

export type GetFleetError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get a fleet.
 */
export const getFleet: API.OperationMethod<
  GetFleetRequest,
  GetFleetResponse,
  GetFleetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFleetRequest,
  output: GetFleetResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFleet",
  endpointHostPrefix: "management.",
}));

export type GetJobError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a Deadline Cloud job.
 */
export const getJob: API.OperationMethod<
  GetJobRequest,
  GetJobResponse,
  GetJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetJobRequest,
  output: GetJobResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetJob",
  endpointHostPrefix: "management.",
}));

export type GetLicenseEndpointError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a licence endpoint.
 */
export const getLicenseEndpoint: API.OperationMethod<
  GetLicenseEndpointRequest,
  GetLicenseEndpointResponse,
  GetLicenseEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLicenseEndpointRequest,
  output: GetLicenseEndpointResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLicenseEndpoint",
  endpointHostPrefix: "management.",
}));

export type GetLimitError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a specific limit.
 */
export const getLimit: API.OperationMethod<
  GetLimitRequest,
  GetLimitResponse,
  GetLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLimitRequest,
  output: GetLimitResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLimit",
  endpointHostPrefix: "management.",
}));

export type GetMonitorError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about the specified monitor.
 */
export const getMonitor: API.OperationMethod<
  GetMonitorRequest,
  GetMonitorResponse,
  GetMonitorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMonitorRequest,
  output: GetMonitorResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMonitor",
  endpointHostPrefix: "management.",
}));

export type GetMonitorSettingsError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the settings for a Deadline Cloud monitor.
 */
export const getMonitorSettings: API.OperationMethod<
  GetMonitorSettingsRequest,
  GetMonitorSettingsResponse,
  GetMonitorSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMonitorSettingsRequest,
  output: GetMonitorSettingsResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMonitorSettings",
  endpointHostPrefix: "management.",
}));

export type GetQueueError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a queue.
 */
export const getQueue: API.OperationMethod<
  GetQueueRequest,
  GetQueueResponse,
  GetQueueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetQueueRequest,
  output: GetQueueResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetQueue",
  endpointHostPrefix: "management.",
}));

export type GetQueueEnvironmentError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a queue environment.
 */
export const getQueueEnvironment: API.OperationMethod<
  GetQueueEnvironmentRequest,
  GetQueueEnvironmentResponse,
  GetQueueEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetQueueEnvironmentRequest,
  output: GetQueueEnvironmentResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetQueueEnvironment",
  endpointHostPrefix: "management.",
}));

export type GetQueueFleetAssociationError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a queue-fleet association.
 */
export const getQueueFleetAssociation: API.OperationMethod<
  GetQueueFleetAssociationRequest,
  GetQueueFleetAssociationResponse,
  GetQueueFleetAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetQueueFleetAssociationRequest,
  output: GetQueueFleetAssociationResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetQueueFleetAssociation",
  endpointHostPrefix: "management.",
}));

export type GetQueueLimitAssociationError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a specific association between a queue and a limit.
 */
export const getQueueLimitAssociation: API.OperationMethod<
  GetQueueLimitAssociationRequest,
  GetQueueLimitAssociationResponse,
  GetQueueLimitAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetQueueLimitAssociationRequest,
  output: GetQueueLimitAssociationResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetQueueLimitAssociation",
  endpointHostPrefix: "management.",
}));

export type GetSessionError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a session.
 */
export const getSession: API.OperationMethod<
  GetSessionRequest,
  GetSessionResponse,
  GetSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSessionRequest,
  output: GetSessionResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSession",
  endpointHostPrefix: "management.",
}));

export type GetSessionActionError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a session action for the job.
 */
export const getSessionAction: API.OperationMethod<
  GetSessionActionRequest,
  GetSessionActionResponse,
  GetSessionActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSessionActionRequest,
  output: GetSessionActionResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSessionAction",
  endpointHostPrefix: "management.",
}));

export type GetSessionsStatisticsAggregationError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a set of statistics for queues or farms. Before you can call the `GetSessionStatisticsAggregation` operation, you must first call the `StartSessionsStatisticsAggregation` operation. Statistics are available for 1 hour after you call the `StartSessionsStatisticsAggregation` operation.
 */
export const getSessionsStatisticsAggregation: API.PaginatedOperationMethod<
  GetSessionsStatisticsAggregationRequest,
  GetSessionsStatisticsAggregationResponse,
  GetSessionsStatisticsAggregationError,
  Credentials | HttpClient.HttpClient,
  Statistics
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetSessionsStatisticsAggregationRequest,
  output: GetSessionsStatisticsAggregationResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSessionsStatisticsAggregation",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "statistics",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetStepError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a step.
 */
export const getStep: API.OperationMethod<
  GetStepRequest,
  GetStepResponse,
  GetStepError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetStepRequest,
  output: GetStepResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetStep",
  endpointHostPrefix: "management.",
}));

export type GetStorageProfileError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a storage profile.
 */
export const getStorageProfile: API.OperationMethod<
  GetStorageProfileRequest,
  GetStorageProfileResponse,
  GetStorageProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetStorageProfileRequest,
  output: GetStorageProfileResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetStorageProfile",
  endpointHostPrefix: "management.",
}));

export type GetStorageProfileForQueueError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a storage profile for a queue.
 */
export const getStorageProfileForQueue: API.OperationMethod<
  GetStorageProfileForQueueRequest,
  GetStorageProfileForQueueResponse,
  GetStorageProfileForQueueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetStorageProfileForQueueRequest,
  output: GetStorageProfileForQueueResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetStorageProfileForQueue",
  endpointHostPrefix: "management.",
}));

export type GetTaskError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a task.
 */
export const getTask: API.OperationMethod<
  GetTaskRequest,
  GetTaskResponse,
  GetTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTaskRequest,
  output: GetTaskResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTask",
  endpointHostPrefix: "management.",
}));

export type GetVolumeError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a persistent volume.
 */
export const getVolume: API.OperationMethod<
  GetVolumeRequest,
  GetVolumeResponse,
  GetVolumeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetVolumeRequest,
  output: GetVolumeResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetVolume",
  endpointHostPrefix: "management.",
}));

export type GetWorkerError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a worker.
 */
export const getWorker: API.OperationMethod<
  GetWorkerRequest,
  GetWorkerResponse,
  GetWorkerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWorkerRequest,
  output: GetWorkerResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWorker",
  endpointHostPrefix: "management.",
}));

export type ListAvailableMeteredProductsError =
  | InternalServerErrorException
  | ThrottlingException
  | CommonErrors;
/**
 * A list of the available metered products.
 */
export const listAvailableMeteredProducts: API.PaginatedOperationMethod<
  ListAvailableMeteredProductsRequest,
  ListAvailableMeteredProductsResponse,
  ListAvailableMeteredProductsError,
  Credentials | HttpClient.HttpClient,
  MeteredProductSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAvailableMeteredProductsRequest,
  output: ListAvailableMeteredProductsResponse,
  errors: [InternalServerErrorException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAvailableMeteredProducts",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "meteredProducts",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBudgetsError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * A list of budgets in a farm.
 */
export const listBudgets: API.PaginatedOperationMethod<
  ListBudgetsRequest,
  ListBudgetsResponse,
  ListBudgetsError,
  Credentials | HttpClient.HttpClient,
  BudgetSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListBudgetsRequest,
  output: ListBudgetsResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBudgets",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "budgets",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFarmMembersError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the members of a farm.
 */
export const listFarmMembers: API.PaginatedOperationMethod<
  ListFarmMembersRequest,
  ListFarmMembersResponse,
  ListFarmMembersError,
  Credentials | HttpClient.HttpClient,
  FarmMember
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFarmMembersRequest,
  output: ListFarmMembersResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFarmMembers",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "members",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFarmsError =
  | AccessDeniedException
  | InternalServerErrorException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists farms.
 */
export const listFarms: API.PaginatedOperationMethod<
  ListFarmsRequest,
  ListFarmsResponse,
  ListFarmsError,
  Credentials | HttpClient.HttpClient,
  FarmSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFarmsRequest,
  output: ListFarmsResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFarms",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "farms",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFleetMembersError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists fleet members.
 */
export const listFleetMembers: API.PaginatedOperationMethod<
  ListFleetMembersRequest,
  ListFleetMembersResponse,
  ListFleetMembersError,
  Credentials | HttpClient.HttpClient,
  FleetMember
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFleetMembersRequest,
  output: ListFleetMembersResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFleetMembers",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "members",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFleetsError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists fleets.
 */
export const listFleets: API.PaginatedOperationMethod<
  ListFleetsRequest,
  ListFleetsResponse,
  ListFleetsError,
  Credentials | HttpClient.HttpClient,
  FleetSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFleetsRequest,
  output: ListFleetsResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFleets",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "fleets",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListJobMembersError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists members on a job.
 */
export const listJobMembers: API.PaginatedOperationMethod<
  ListJobMembersRequest,
  ListJobMembersResponse,
  ListJobMembersError,
  Credentials | HttpClient.HttpClient,
  JobMember
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListJobMembersRequest,
  output: ListJobMembersResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListJobMembers",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "members",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListJobParameterDefinitionsError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists parameter definitions of a job.
 */
export const listJobParameterDefinitions: API.PaginatedOperationMethod<
  ListJobParameterDefinitionsRequest,
  ListJobParameterDefinitionsResponse,
  ListJobParameterDefinitionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListJobParameterDefinitionsRequest,
  output: ListJobParameterDefinitionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListJobParameterDefinitions",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "jobParameterDefinitions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListJobsError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists jobs.
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
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListJobs",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "jobs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListLicenseEndpointsError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists license endpoints.
 */
export const listLicenseEndpoints: API.PaginatedOperationMethod<
  ListLicenseEndpointsRequest,
  ListLicenseEndpointsResponse,
  ListLicenseEndpointsError,
  Credentials | HttpClient.HttpClient,
  LicenseEndpointSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListLicenseEndpointsRequest,
  output: ListLicenseEndpointsResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLicenseEndpoints",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "licenseEndpoints",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListLimitsError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a list of limits defined in the specified farm.
 */
export const listLimits: API.PaginatedOperationMethod<
  ListLimitsRequest,
  ListLimitsResponse,
  ListLimitsError,
  Credentials | HttpClient.HttpClient,
  LimitSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListLimitsRequest,
  output: ListLimitsResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLimits",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "limits",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMeteredProductsError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists metered products.
 */
export const listMeteredProducts: API.PaginatedOperationMethod<
  ListMeteredProductsRequest,
  ListMeteredProductsResponse,
  ListMeteredProductsError,
  Credentials | HttpClient.HttpClient,
  MeteredProductSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMeteredProductsRequest,
  output: ListMeteredProductsResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMeteredProducts",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "meteredProducts",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMonitorsError =
  | AccessDeniedException
  | InternalServerErrorException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a list of your monitors in Deadline Cloud.
 */
export const listMonitors: API.PaginatedOperationMethod<
  ListMonitorsRequest,
  ListMonitorsResponse,
  ListMonitorsError,
  Credentials | HttpClient.HttpClient,
  MonitorSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMonitorsRequest,
  output: ListMonitorsResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMonitors",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "monitors",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListQueueEnvironmentsError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists queue environments.
 */
export const listQueueEnvironments: API.PaginatedOperationMethod<
  ListQueueEnvironmentsRequest,
  ListQueueEnvironmentsResponse,
  ListQueueEnvironmentsError,
  Credentials | HttpClient.HttpClient,
  QueueEnvironmentSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListQueueEnvironmentsRequest,
  output: ListQueueEnvironmentsResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListQueueEnvironments",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "environments",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListQueueFleetAssociationsError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists queue-fleet associations.
 */
export const listQueueFleetAssociations: API.PaginatedOperationMethod<
  ListQueueFleetAssociationsRequest,
  ListQueueFleetAssociationsResponse,
  ListQueueFleetAssociationsError,
  Credentials | HttpClient.HttpClient,
  QueueFleetAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListQueueFleetAssociationsRequest,
  output: ListQueueFleetAssociationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListQueueFleetAssociations",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "queueFleetAssociations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListQueueLimitAssociationsError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets a list of the associations between queues and limits defined in a farm.
 */
export const listQueueLimitAssociations: API.PaginatedOperationMethod<
  ListQueueLimitAssociationsRequest,
  ListQueueLimitAssociationsResponse,
  ListQueueLimitAssociationsError,
  Credentials | HttpClient.HttpClient,
  QueueLimitAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListQueueLimitAssociationsRequest,
  output: ListQueueLimitAssociationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListQueueLimitAssociations",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "queueLimitAssociations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListQueueMembersError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the members in a queue.
 */
export const listQueueMembers: API.PaginatedOperationMethod<
  ListQueueMembersRequest,
  ListQueueMembersResponse,
  ListQueueMembersError,
  Credentials | HttpClient.HttpClient,
  QueueMember
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListQueueMembersRequest,
  output: ListQueueMembersResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListQueueMembers",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "members",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListQueuesError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists queues.
 */
export const listQueues: API.PaginatedOperationMethod<
  ListQueuesRequest,
  ListQueuesResponse,
  ListQueuesError,
  Credentials | HttpClient.HttpClient,
  QueueSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListQueuesRequest,
  output: ListQueuesResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListQueues",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "queues",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSessionActionsError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists session actions.
 */
export const listSessionActions: API.PaginatedOperationMethod<
  ListSessionActionsRequest,
  ListSessionActionsResponse,
  ListSessionActionsError,
  Credentials | HttpClient.HttpClient,
  SessionActionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSessionActionsRequest,
  output: ListSessionActionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSessionActions",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "sessionActions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSessionsError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists sessions.
 */
export const listSessions: API.PaginatedOperationMethod<
  ListSessionsRequest,
  ListSessionsResponse,
  ListSessionsError,
  Credentials | HttpClient.HttpClient,
  SessionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSessionsRequest,
  output: ListSessionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSessions",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "sessions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSessionsForWorkerError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists sessions for a worker.
 */
export const listSessionsForWorker: API.PaginatedOperationMethod<
  ListSessionsForWorkerRequest,
  ListSessionsForWorkerResponse,
  ListSessionsForWorkerError,
  Credentials | HttpClient.HttpClient,
  WorkerSessionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSessionsForWorkerRequest,
  output: ListSessionsForWorkerResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSessionsForWorker",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "sessions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListStepConsumersError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists step consumers.
 */
export const listStepConsumers: API.PaginatedOperationMethod<
  ListStepConsumersRequest,
  ListStepConsumersResponse,
  ListStepConsumersError,
  Credentials | HttpClient.HttpClient,
  StepConsumer
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListStepConsumersRequest,
  output: ListStepConsumersResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStepConsumers",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "consumers",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListStepDependenciesError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the dependencies for a step.
 */
export const listStepDependencies: API.PaginatedOperationMethod<
  ListStepDependenciesRequest,
  ListStepDependenciesResponse,
  ListStepDependenciesError,
  Credentials | HttpClient.HttpClient,
  StepDependency
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListStepDependenciesRequest,
  output: ListStepDependenciesResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStepDependencies",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "dependencies",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListStepsError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists steps for a job.
 */
export const listSteps: API.PaginatedOperationMethod<
  ListStepsRequest,
  ListStepsResponse,
  ListStepsError,
  Credentials | HttpClient.HttpClient,
  StepSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListStepsRequest,
  output: ListStepsResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSteps",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "steps",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListStorageProfilesError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists storage profiles.
 */
export const listStorageProfiles: API.PaginatedOperationMethod<
  ListStorageProfilesRequest,
  ListStorageProfilesResponse,
  ListStorageProfilesError,
  Credentials | HttpClient.HttpClient,
  StorageProfileSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListStorageProfilesRequest,
  output: ListStorageProfilesResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStorageProfiles",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "storageProfiles",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListStorageProfilesForQueueError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists storage profiles for a queue.
 */
export const listStorageProfilesForQueue: API.PaginatedOperationMethod<
  ListStorageProfilesForQueueRequest,
  ListStorageProfilesForQueueResponse,
  ListStorageProfilesForQueueError,
  Credentials | HttpClient.HttpClient,
  StorageProfileSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListStorageProfilesForQueueRequest,
  output: ListStorageProfilesForQueueResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStorageProfilesForQueue",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "storageProfiles",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists tags for a resource.
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
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
  endpointHostPrefix: "management.",
}));

export type ListTasksError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists tasks for a job.
 */
export const listTasks: API.PaginatedOperationMethod<
  ListTasksRequest,
  ListTasksResponse,
  ListTasksError,
  Credentials | HttpClient.HttpClient,
  TaskSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTasksRequest,
  output: ListTasksResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTasks",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "tasks",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListVolumesError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the persistent volumes in a fleet.
 */
export const listVolumes: API.PaginatedOperationMethod<
  ListVolumesRequest,
  ListVolumesResponse,
  ListVolumesError,
  Credentials | HttpClient.HttpClient,
  VolumeSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListVolumesRequest,
  output: ListVolumesResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVolumes",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "volumes",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListWorkersError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists workers.
 */
export const listWorkers: API.PaginatedOperationMethod<
  ListWorkersRequest,
  ListWorkersResponse,
  ListWorkersError,
  Credentials | HttpClient.HttpClient,
  WorkerSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListWorkersRequest,
  output: ListWorkersResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkers",
  endpointHostPrefix: "management.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "workers",
    pageSize: "maxResults",
  } as const,
})) as any;

export type PutMeteredProductError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds a metered product.
 */
export const putMeteredProduct: API.OperationMethod<
  PutMeteredProductRequest,
  PutMeteredProductResponse,
  PutMeteredProductError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutMeteredProductRequest,
  output: PutMeteredProductResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutMeteredProduct",
  endpointHostPrefix: "management.",
}));

export type SearchJobsError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Searches for jobs.
 */
export const searchJobs: API.OperationMethod<
  SearchJobsRequest,
  SearchJobsResponse,
  SearchJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SearchJobsRequest,
  output: SearchJobsResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchJobs",
  endpointHostPrefix: "management.",
}));

export type SearchStepsError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Searches for steps.
 */
export const searchSteps: API.OperationMethod<
  SearchStepsRequest,
  SearchStepsResponse,
  SearchStepsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SearchStepsRequest,
  output: SearchStepsResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchSteps",
  endpointHostPrefix: "management.",
}));

export type SearchTasksError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Searches for tasks.
 */
export const searchTasks: API.OperationMethod<
  SearchTasksRequest,
  SearchTasksResponse,
  SearchTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SearchTasksRequest,
  output: SearchTasksResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchTasks",
  endpointHostPrefix: "management.",
}));

export type SearchWorkersError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Searches for workers.
 */
export const searchWorkers: API.OperationMethod<
  SearchWorkersRequest,
  SearchWorkersResponse,
  SearchWorkersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SearchWorkersRequest,
  output: SearchWorkersResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchWorkers",
  endpointHostPrefix: "management.",
}));

export type StartSessionsStatisticsAggregationError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts an asynchronous request for getting aggregated statistics about queues and farms. Get the statistics using the `GetSessionsStatisticsAggregation` operation. You can only have one running aggregation for your Deadline Cloud farm. Call the `GetSessionsStatisticsAggregation` operation and check the `status` field to see if an aggregation is running. Statistics are available for 1 hour after you call the `StartSessionsStatisticsAggregation` operation.
 */
export const startSessionsStatisticsAggregation: API.OperationMethod<
  StartSessionsStatisticsAggregationRequest,
  StartSessionsStatisticsAggregationResponse,
  StartSessionsStatisticsAggregationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartSessionsStatisticsAggregationRequest,
  output: StartSessionsStatisticsAggregationResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartSessionsStatisticsAggregation",
  endpointHostPrefix: "management.",
}));

export type TagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Tags a resource using the resource's ARN and desired tags.
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
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
  endpointHostPrefix: "management.",
}));

export type UntagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes a tag from a resource using the resource's ARN and tag to remove.
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
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
  endpointHostPrefix: "management.",
}));

export type UpdateBudgetError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | ConflictException
  | InternalServerException
  | CommonErrors;
/**
 * Updates a budget that sets spending thresholds for rendering activity.
 */
export const updateBudget: API.OperationMethod<
  UpdateBudgetRequest,
  UpdateBudgetResponse,
  UpdateBudgetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateBudgetRequest,
  output: UpdateBudgetResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    ConflictException,
    InternalServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateBudget",
  endpointHostPrefix: "management.",
}));

export type UpdateFarmError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | ConflictException
  | CommonErrors;
/**
 * Updates a farm.
 */
export const updateFarm: API.OperationMethod<
  UpdateFarmRequest,
  UpdateFarmResponse,
  UpdateFarmError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateFarmRequest,
  output: UpdateFarmResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    ConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFarm",
  endpointHostPrefix: "management.",
}));

export type UpdateFleetError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a fleet.
 *
 * Workers that are running when you call `UpdateFleet` keep the instance type and capabilities that they launched with until they scale in. Deadline Cloud can schedule jobs that you submit after the update on these existing workers, so the new configuration might not take effect immediately. To make sure that all workers use the new configuration, set `maxWorkerCount` to 0, use the `ListWorkers` operation to confirm that the fleet has no workers, and then restore `maxWorkerCount`.
 */
export const updateFleet: API.OperationMethod<
  UpdateFleetRequest,
  UpdateFleetResponse,
  UpdateFleetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateFleetRequest,
  output: UpdateFleetResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFleet",
  endpointHostPrefix: "management.",
}));

export type UpdateJobError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a job.
 *
 * When you change the status of the job to `ARCHIVED`, the job can't be scheduled or archived.
 *
 * An archived jobs and its steps and tasks are deleted after 120 days. The job can't be recovered.
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
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateJob",
  endpointHostPrefix: "management.",
}));

export type UpdateLimitError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the properties of the specified limit.
 */
export const updateLimit: API.OperationMethod<
  UpdateLimitRequest,
  UpdateLimitResponse,
  UpdateLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLimitRequest,
  output: UpdateLimitResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLimit",
  endpointHostPrefix: "management.",
}));

export type UpdateMonitorError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | ConflictException
  | CommonErrors;
/**
 * Modifies the settings for a Deadline Cloud monitor. You can modify one or all of the settings when you call `UpdateMonitor`.
 */
export const updateMonitor: API.OperationMethod<
  UpdateMonitorRequest,
  UpdateMonitorResponse,
  UpdateMonitorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateMonitorRequest,
  output: UpdateMonitorResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    ConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateMonitor",
  endpointHostPrefix: "management.",
}));

export type UpdateMonitorSettingsError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the settings for a Deadline Cloud monitor. Keys present in the request are upserted; keys absent are left unchanged. Send an empty string value to delete a key.
 */
export const updateMonitorSettings: API.OperationMethod<
  UpdateMonitorSettingsRequest,
  UpdateMonitorSettingsResponse,
  UpdateMonitorSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateMonitorSettingsRequest,
  output: UpdateMonitorSettingsResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateMonitorSettings",
  endpointHostPrefix: "management.",
}));

export type UpdateQueueError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | ConflictException
  | CommonErrors;
/**
 * Updates a queue.
 */
export const updateQueue: API.OperationMethod<
  UpdateQueueRequest,
  UpdateQueueResponse,
  UpdateQueueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateQueueRequest,
  output: UpdateQueueResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    ConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateQueue",
  endpointHostPrefix: "management.",
}));

export type UpdateQueueEnvironmentError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the queue environment.
 */
export const updateQueueEnvironment: API.OperationMethod<
  UpdateQueueEnvironmentRequest,
  UpdateQueueEnvironmentResponse,
  UpdateQueueEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateQueueEnvironmentRequest,
  output: UpdateQueueEnvironmentResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateQueueEnvironment",
  endpointHostPrefix: "management.",
}));

export type UpdateQueueFleetAssociationError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a queue-fleet association.
 */
export const updateQueueFleetAssociation: API.OperationMethod<
  UpdateQueueFleetAssociationRequest,
  UpdateQueueFleetAssociationResponse,
  UpdateQueueFleetAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateQueueFleetAssociationRequest,
  output: UpdateQueueFleetAssociationResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateQueueFleetAssociation",
  endpointHostPrefix: "management.",
}));

export type UpdateQueueLimitAssociationError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the status of the queue. If you set the status to one of the `STOP_LIMIT_USAGE*` values, there will be a delay before the status transitions to the `STOPPED` state.
 */
export const updateQueueLimitAssociation: API.OperationMethod<
  UpdateQueueLimitAssociationRequest,
  UpdateQueueLimitAssociationResponse,
  UpdateQueueLimitAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateQueueLimitAssociationRequest,
  output: UpdateQueueLimitAssociationResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateQueueLimitAssociation",
  endpointHostPrefix: "management.",
}));

export type UpdateSessionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a session.
 */
export const updateSession: API.OperationMethod<
  UpdateSessionRequest,
  UpdateSessionResponse,
  UpdateSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSessionRequest,
  output: UpdateSessionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSession",
  endpointHostPrefix: "management.",
}));

export type UpdateStepError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a step.
 */
export const updateStep: API.OperationMethod<
  UpdateStepRequest,
  UpdateStepResponse,
  UpdateStepError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateStepRequest,
  output: UpdateStepResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateStep",
  endpointHostPrefix: "management.",
}));

export type UpdateStorageProfileError =
  | AccessDeniedException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | ConflictException
  | CommonErrors;
/**
 * Updates a storage profile.
 */
export const updateStorageProfile: API.OperationMethod<
  UpdateStorageProfileRequest,
  UpdateStorageProfileResponse,
  UpdateStorageProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateStorageProfileRequest,
  output: UpdateStorageProfileResponse,
  errors: [
    AccessDeniedException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    ConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateStorageProfile",
  endpointHostPrefix: "management.",
}));

export type UpdateTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a task.
 */
export const updateTask: API.OperationMethod<
  UpdateTaskRequest,
  UpdateTaskResponse,
  UpdateTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateTaskRequest,
  output: UpdateTaskResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTask",
  endpointHostPrefix: "management.",
}));

export type UpdateWorkerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a worker.
 */
export const updateWorker: API.OperationMethod<
  UpdateWorkerRequest,
  UpdateWorkerResponse,
  UpdateWorkerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateWorkerRequest,
  output: UpdateWorkerResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateWorker",
  endpointHostPrefix: "scheduling.",
}));

export type UpdateWorkerScheduleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerErrorException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the schedule for a worker.
 */
export const updateWorkerSchedule: API.OperationMethod<
  UpdateWorkerScheduleRequest,
  UpdateWorkerScheduleResponse,
  UpdateWorkerScheduleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateWorkerScheduleRequest,
  output: UpdateWorkerScheduleResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerErrorException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateWorkerSchedule",
  endpointHostPrefix: "scheduling.",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          principalType: DeadlinePrincipalType,
          identityStoreId: S.String,
          membershipLevel: MembershipLevel,
          principalId: S.String.pipe(T.HttpLabel("principalId")),
          identityCenterRegion: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/2023-10-12/farms/{farmId}/members/{principalId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateMemberToFarmRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AssociateMemberToFarmResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          fleetId: S.String.pipe(T.HttpLabel("fleetId")),
          principalType: DeadlinePrincipalType,
          identityStoreId: S.String,
          membershipLevel: MembershipLevel,
          principalId: S.String.pipe(T.HttpLabel("principalId")),
          identityCenterRegion: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/2023-10-12/farms/{farmId}/fleets/{fleetId}/members/{principalId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateMemberToFleetRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          principalType: DeadlinePrincipalType,
          identityStoreId: S.String,
          membershipLevel: MembershipLevel,
          principalId: S.String.pipe(T.HttpLabel("principalId")),
          identityCenterRegion: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/members/{principalId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateMemberToJobRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          principalType: DeadlinePrincipalType,
          identityStoreId: S.String,
          membershipLevel: MembershipLevel,
          principalId: S.String.pipe(T.HttpLabel("principalId")),
          identityCenterRegion: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/members/{principalId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateMemberToQueueRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          fleetId: S.String.pipe(T.HttpLabel("fleetId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/fleets/{fleetId}/read-roles",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssumeFleetRoleForReadRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          accessKeyId: SensitiveString,
          secretAccessKey: SensitiveString,
          sessionToken: SensitiveString,
          expiration: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "AwsCredentials" });
    case 7:
      return S.suspend(() => S.Struct({ credentials: AwsCredentials })).annotate({
        identifier: "AssumeFleetRoleForReadResponse",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          fleetId: S.String.pipe(T.HttpLabel("fleetId")),
          workerId: S.String.pipe(T.HttpLabel("workerId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/fleet-roles",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssumeFleetRoleForWorkerRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/read-roles",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssumeQueueRoleForReadRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/user-roles",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssumeQueueRoleForUserRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          fleetId: S.String.pipe(T.HttpLabel("fleetId")),
          workerId: S.String.pipe(T.HttpLabel("workerId")),
          queueId: S.String.pipe(T.HttpQuery("queueId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/queue-roles",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssumeQueueRoleForWorkerRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ credentials: S.optional(AwsCredentials) })).annotate({
        identifier: "AssumeQueueRoleForWorkerResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ farmId: S.String, queueId: S.String, jobId: S.String }),
      ).annotate({ identifier: "BatchGetJobIdentifier" });
    case 6:
      return S.Array(BatchGetJobIdentifier);
    case 7:
      return S.suspend(() =>
        S.Struct({ identifiers: BatchGetJobIdentifiers }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2023-10-12/batch-get-job" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BatchGetJobRequest" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Record(TaskRunStatus, /*@__PURE__*/ S.Number.pipe(S.optional));
    case 1:
      return S.Array(S.String);
    case 2:
      return S.Array(NestedIntStringList);
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ int: S.String }),
        /*@__PURE__*/ S.Struct({ float: S.String }),
        /*@__PURE__*/ S.Struct({ string: S.String }),
        /*@__PURE__*/ S.Struct({ path: S.String }),
        /*@__PURE__*/ S.Struct({ bool: S.String }),
        /*@__PURE__*/ S.Struct({ rangeExpr: S.String }),
        /*@__PURE__*/ S.Struct({ stringList: ParameterStringList }),
        /*@__PURE__*/ S.Struct({ pathList: PathStringList }),
        /*@__PURE__*/ S.Struct({ intList: IntStringList }),
        /*@__PURE__*/ S.Struct({ floatList: FloatStringList }),
        /*@__PURE__*/ S.Struct({ boolList: BooleanStringList }),
        /*@__PURE__*/ S.Struct({ intListList: IntStringListList }),
      ]);
    case 4:
      return S.Record(S.String, /*@__PURE__*/ JobParameter.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          fileSystemLocationName: S.optional(S.String),
          rootPath: S.String,
          rootPathFormat: PathFormat,
          outputRelativeDirectories: S.optional(OutputRelativeDirectoriesList),
          inputManifestPath: S.optional(S.String),
          inputManifestHash: S.optional(S.String),
        }),
      ).annotate({ identifier: "ManifestProperties" });
    case 6:
      return S.Array(ManifestProperties);
    case 7:
      return S.suspend(() =>
        S.Struct({
          manifests: ManifestPropertiesList,
          fileSystem: S.optional(JobAttachmentsFileSystem),
        }),
      ).annotate({ identifier: "Attachments" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          queueId: S.String,
          jobId: S.String,
          name: S.String,
          lifecycleStatus: JobLifecycleStatus,
          lifecycleStatusMessage: S.String,
          priority: S.Number,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
          startedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          taskRunStatus: S.optional(TaskRunStatus),
          targetTaskRunStatus: S.optional(JobTargetTaskRunStatus),
          taskRunStatusCounts: S.optional(TaskRunStatusCounts),
          taskFailureRetryCount: S.optional(S.Number),
          storageProfileId: S.optional(S.String),
          maxFailedTasksCount: S.optional(S.Number),
          maxRetriesPerTask: S.optional(S.Number),
          parameters: S.optional(JobParameters),
          attachments: S.optional(Attachments),
          description: S.optional(SensitiveString),
          maxWorkerCount: S.optional(S.Number),
          sourceJobId: S.optional(S.String),
        }),
      ).annotate({ identifier: "BatchGetJobItem" });
    case 1:
      return S.Array(BatchGetJobItem);
    case 2:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          queueId: S.String,
          jobId: S.String,
          code: BatchGetJobErrorCode,
          message: S.String,
        }),
      ).annotate({ identifier: "BatchGetJobError" });
    case 3:
      return S.Array(BatchGetJobError_);
    case 4:
      return S.suspend(() =>
        S.Struct({ jobs: BatchGetJobItems, errors: BatchGetJobErrors }),
      ).annotate({ identifier: "BatchGetJobResponse" });
    case 5:
      return S.suspend(() => S.Struct({ jobId: S.String })).annotate({
        identifier: "JobDetailsIdentifiers",
      });
    case 6:
      return S.suspend(() => S.Struct({ jobId: S.String })).annotate({
        identifier: "JobAttachmentDetailsIdentifiers",
      });
    case 7:
      return S.suspend(() => S.Struct({ jobId: S.String, stepId: S.String })).annotate({
        identifier: "StepDetailsIdentifiers",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ jobId: S.String, environmentId: S.String })).annotate({
        identifier: "EnvironmentDetailsIdentifiers",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ jobDetails: JobDetailsIdentifiers }),
        /*@__PURE__*/ S.Struct({ jobAttachmentDetails: JobAttachmentDetailsIdentifiers }),
        /*@__PURE__*/ S.Struct({ stepDetails: StepDetailsIdentifiers }),
        /*@__PURE__*/ S.Struct({ environmentDetails: EnvironmentDetailsIdentifiers }),
      ]);
    case 2:
      return S.Array(JobEntityIdentifiersUnion);
    case 3:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          fleetId: S.String.pipe(T.HttpLabel("fleetId")),
          workerId: S.String.pipe(T.HttpLabel("workerId")),
          identifiers: JobEntityIdentifiers,
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/batchGetJobEntity",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BatchGetJobEntityRequest" });
    case 4:
      return S.suspend(() => S.Struct({ s3BucketName: S.String, rootPrefix: S.String })).annotate({
        identifier: "JobDetailsJobAttachmentSettings",
      });
    case 5:
      return S.suspend(() => S.Struct({ user: S.String, group: S.String })).annotate({
        identifier: "PosixUser",
      });
    case 6:
      return S.suspend(() => S.Struct({ user: S.String, passwordArn: S.String })).annotate({
        identifier: "WindowsUser",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ posix: S.optional(PosixUser), windows: S.optional(WindowsUser), runAs: RunAs }),
      ).annotate({ identifier: "JobRunAsUser" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ sourcePathFormat: PathFormat, sourcePath: S.String, destinationPath: S.String }),
      ).annotate({ identifier: "PathMappingRule" });
    case 1:
      return S.Array(PathMappingRule);
    case 2:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          jobAttachmentSettings: S.optional(JobDetailsJobAttachmentSettings),
          jobRunAsUser: S.optional(JobRunAsUser),
          logGroupName: S.String,
          queueRoleArn: S.optional(S.String),
          parameters: S.optional(JobParameters),
          schemaVersion: S.String,
          extensions: S.optional(OpenjdExtensionNameList),
          pathMappingRules: S.optional(PathMappingRules),
        }),
      ).annotate({ identifier: "JobDetailsEntity" });
    case 3:
      return S.suspend(() => S.Struct({ jobId: S.String, attachments: Attachments })).annotate({
        identifier: "JobAttachmentDetailsEntity",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          stepId: S.String,
          schemaVersion: S.String,
          template: S.Any,
          dependencies: DependenciesList,
          extensions: S.optional(OpenjdExtensionNameList),
          resolvedSymbolTable: S.optional(S.String),
        }),
      ).annotate({ identifier: "StepDetailsEntity" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          environmentId: S.String,
          schemaVersion: S.String,
          template: S.Any,
          extensions: S.optional(OpenjdExtensionNameList),
          resolvedSymbolTable: S.optional(S.String),
        }),
      ).annotate({ identifier: "EnvironmentDetailsEntity" });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ jobDetails: JobDetailsEntity }),
        /*@__PURE__*/ S.Struct({ jobAttachmentDetails: JobAttachmentDetailsEntity }),
        /*@__PURE__*/ S.Struct({ stepDetails: StepDetailsEntity }),
        /*@__PURE__*/ S.Struct({ environmentDetails: EnvironmentDetailsEntity }),
      ]);
    case 7:
      return S.Array(JobEntity);
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ jobId: S.String, code: JobEntityErrorCode, message: S.String }),
      ).annotate({ identifier: "JobDetailsError" });
    case 1:
      return S.suspend(() =>
        S.Struct({ jobId: S.String, code: JobEntityErrorCode, message: S.String }),
      ).annotate({
        identifier: "JobAttachmentDetailsError",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          stepId: S.String,
          code: JobEntityErrorCode,
          message: S.String,
        }),
      ).annotate({ identifier: "StepDetailsError" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          environmentId: S.String,
          code: JobEntityErrorCode,
          message: S.String,
        }),
      ).annotate({ identifier: "EnvironmentDetailsError" });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ jobDetails: JobDetailsError }),
        /*@__PURE__*/ S.Struct({ jobAttachmentDetails: JobAttachmentDetailsError }),
        /*@__PURE__*/ S.Struct({ stepDetails: StepDetailsError }),
        /*@__PURE__*/ S.Struct({ environmentDetails: EnvironmentDetailsError }),
      ]);
    case 5:
      return S.Array(GetJobEntityError);
    case 6:
      return S.suspend(() =>
        S.Struct({ entities: BatchGetJobEntityList, errors: BatchGetJobEntityErrors }),
      ).annotate({
        identifier: "BatchGetJobEntityResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ farmId: S.String, queueId: S.String, jobId: S.String, sessionId: S.String }),
      ).annotate({
        identifier: "BatchGetSessionIdentifier",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(BatchGetSessionIdentifier);
    case 1:
      return S.suspend(() =>
        S.Struct({ identifiers: BatchGetSessionIdentifiers }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2023-10-12/batch-get-session" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BatchGetSessionRequest" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          logDriver: S.String,
          options: S.optional(LogOptions),
          parameters: S.optional(LogParameters),
          error: S.optional(S.String),
        }),
      ).annotate({ identifier: "LogConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ipV4Addresses: S.optional(IpV4Addresses),
          ipV6Addresses: S.optional(IpV6Addresses),
        }),
      ).annotate({ identifier: "IpAddresses" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ipAddresses: S.optional(IpAddresses),
          hostName: S.optional(S.String),
          ec2InstanceArn: S.optional(S.String),
          ec2InstanceType: S.optional(S.String),
        }),
      ).annotate({ identifier: "HostPropertiesResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          queueId: S.String,
          jobId: S.String,
          sessionId: S.String,
          fleetId: S.String,
          workerId: S.String,
          startedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lifecycleStatus: SessionLifecycleStatus,
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          targetLifecycleStatus: S.optional(SessionLifecycleTargetStatus),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
          log: LogConfiguration,
          hostProperties: S.optional(HostPropertiesResponse),
          workerLog: S.optional(LogConfiguration),
        }),
      ).annotate({ identifier: "BatchGetSessionItem" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(BatchGetSessionItem);
    case 1:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          queueId: S.String,
          jobId: S.String,
          sessionId: S.String,
          code: BatchGetSessionErrorCode,
          message: S.String,
        }),
      ).annotate({ identifier: "BatchGetSessionError" });
    case 2:
      return S.Array(BatchGetSessionError_);
    case 3:
      return S.suspend(() =>
        S.Struct({ sessions: BatchGetSessionItems, errors: BatchGetSessionErrors }),
      ).annotate({ identifier: "BatchGetSessionResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          queueId: S.String,
          jobId: S.String,
          sessionActionId: S.String,
        }),
      ).annotate({
        identifier: "BatchGetSessionActionIdentifier",
      });
    case 5:
      return S.Array(BatchGetSessionActionIdentifier);
    case 6:
      return S.suspend(() =>
        S.Struct({ identifiers: BatchGetSessionActionIdentifiers }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2023-10-12/batch-get-session-action" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetSessionActionRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          outputManifestPath: S.optional(S.String),
          outputManifestHash: S.optional(S.String),
        }),
      ).annotate({
        identifier: "TaskRunManifestPropertiesResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(TaskRunManifestPropertiesResponse);
    case 1:
      return S.suspend(() => S.Struct({ limitId: S.String, count: S.Number })).annotate({
        identifier: "AcquiredLimit",
      });
    case 2:
      return S.Array(AcquiredLimit);
    case 3:
      return S.suspend(() => S.Struct({ environmentId: S.String })).annotate({
        identifier: "EnvironmentEnterSessionActionDefinition",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ int: S.String }),
        /*@__PURE__*/ S.Struct({ float: S.String }),
        /*@__PURE__*/ S.Struct({ string: S.String }),
        /*@__PURE__*/ S.Struct({ path: S.String }),
        /*@__PURE__*/ S.Struct({ chunkInt: S.String }),
      ]);
    case 5:
      return S.Record(S.String, /*@__PURE__*/ TaskParameterValue.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({ taskId: S.optional(S.String), stepId: S.String, parameters: TaskParameters }),
      ).annotate({
        identifier: "TaskRunSessionActionDefinition",
      });
    case 7:
      return S.suspend(() => S.Struct({ stepId: S.optional(S.String) })).annotate({
        identifier: "SyncInputJobAttachmentsSessionActionDefinition",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ envEnter: EnvironmentEnterSessionActionDefinition }),
        /*@__PURE__*/ S.Struct({ envExit: EnvironmentExitSessionActionDefinition }),
        /*@__PURE__*/ S.Struct({ taskRun: TaskRunSessionActionDefinition }),
        /*@__PURE__*/ S.Struct({
          syncInputJobAttachments: SyncInputJobAttachmentsSessionActionDefinition,
        }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          queueId: S.String,
          jobId: S.String,
          sessionActionId: S.String,
          status: SessionActionStatus,
          startedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          workerUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          progressPercent: S.optional(S.Number),
          manifests: S.optional(TaskRunManifestPropertiesListResponse),
          sessionId: S.String,
          processExitCode: S.optional(S.Number),
          progressMessage: S.optional(SensitiveString),
          acquiredLimits: S.optional(AcquiredLimits),
          definition: SessionActionDefinition,
        }),
      ).annotate({
        identifier: "BatchGetSessionActionItem",
      });
    case 2:
      return S.Array(BatchGetSessionActionItem);
    case 3:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          queueId: S.String,
          jobId: S.String,
          sessionActionId: S.String,
          code: BatchGetSessionActionErrorCode,
          message: S.String,
        }),
      ).annotate({
        identifier: "BatchGetSessionActionError",
      });
    case 4:
      return S.Array(BatchGetSessionActionError_);
    case 5:
      return S.suspend(() =>
        S.Struct({
          sessionActions: BatchGetSessionActionItems,
          errors: BatchGetSessionActionErrors,
        }),
      ).annotate({
        identifier: "BatchGetSessionActionResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ farmId: S.String, queueId: S.String, jobId: S.String, stepId: S.String }),
      ).annotate({ identifier: "BatchGetStepIdentifier" });
    case 7:
      return S.Array(BatchGetStepIdentifier);
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ identifiers: BatchGetStepIdentifiers }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2023-10-12/batch-get-step" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BatchGetStepRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          dependenciesResolved: S.Number,
          dependenciesUnresolved: S.Number,
          consumersResolved: S.Number,
          consumersUnresolved: S.Number,
        }),
      ).annotate({ identifier: "DependencyCounts" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          anyOf: S.optional(ListAttributeCapabilityValue),
          allOf: S.optional(ListAttributeCapabilityValue),
        }),
      ).annotate({ identifier: "StepAttributeCapability" });
    case 3:
      return S.Array(StepAttributeCapability);
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          min: S.optional(S.Number),
          max: S.optional(S.Number),
          value: S.optional(S.Number),
        }),
      ).annotate({ identifier: "StepAmountCapability" });
    case 5:
      return S.Array(StepAmountCapability);
    case 6:
      return S.suspend(() =>
        S.Struct({ attributes: StepAttributeCapabilities, amounts: StepAmountCapabilities }),
      ).annotate({ identifier: "StepRequiredCapabilities" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          defaultTaskCount: S.Number,
          targetRuntimeSeconds: S.optional(S.Number),
          rangeConstraint: RangeConstraint,
        }),
      ).annotate({ identifier: "StepParameterChunks" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          type: StepParameterType,
          chunks: S.optional(StepParameterChunks),
        }),
      ).annotate({ identifier: "StepParameter" });
    case 1:
      return S.Array(StepParameter);
    case 2:
      return S.suspend(() =>
        S.Struct({ parameters: StepParameterList, combination: S.optional(S.String) }),
      ).annotate({ identifier: "ParameterSpace" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          queueId: S.String,
          jobId: S.String,
          stepId: S.String,
          name: S.String,
          lifecycleStatus: StepLifecycleStatus,
          lifecycleStatusMessage: S.optional(S.String),
          taskRunStatus: TaskRunStatus,
          taskRunStatusCounts: TaskRunStatusCounts,
          taskFailureRetryCount: S.optional(S.Number),
          targetTaskRunStatus: S.optional(StepTargetTaskRunStatus),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
          startedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          dependencyCounts: S.optional(DependencyCounts),
          requiredCapabilities: S.optional(StepRequiredCapabilities),
          parameterSpace: S.optional(ParameterSpace),
          description: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "BatchGetStepItem" });
    case 4:
      return S.Array(BatchGetStepItem);
    case 5:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          queueId: S.String,
          jobId: S.String,
          stepId: S.String,
          code: BatchGetStepErrorCode,
          message: S.String,
        }),
      ).annotate({ identifier: "BatchGetStepError" });
    case 6:
      return S.Array(BatchGetStepError_);
    case 7:
      return S.suspend(() =>
        S.Struct({ steps: BatchGetStepItems, errors: BatchGetStepErrors }),
      ).annotate({ identifier: "BatchGetStepResponse" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          queueId: S.String,
          jobId: S.String,
          stepId: S.String,
          taskId: S.String,
        }),
      ).annotate({ identifier: "BatchGetTaskIdentifier" });
    case 1:
      return S.Array(BatchGetTaskIdentifier);
    case 2:
      return S.suspend(() =>
        S.Struct({ identifiers: BatchGetTaskIdentifiers }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2023-10-12/batch-get-task" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BatchGetTaskRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          queueId: S.String,
          jobId: S.String,
          stepId: S.String,
          taskId: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          runStatus: TaskRunStatus,
          targetRunStatus: S.optional(TaskTargetRunStatus),
          failureRetryCount: S.optional(S.Number),
          startedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
          latestSessionActionId: S.optional(S.String),
          parameters: S.optional(TaskParameters),
        }),
      ).annotate({ identifier: "BatchGetTaskItem" });
    case 4:
      return S.Array(BatchGetTaskItem);
    case 5:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          queueId: S.String,
          jobId: S.String,
          stepId: S.String,
          taskId: S.String,
          code: BatchGetTaskErrorCode,
          message: S.String,
        }),
      ).annotate({ identifier: "BatchGetTaskError" });
    case 6:
      return S.Array(BatchGetTaskError_);
    case 7:
      return S.suspend(() =>
        S.Struct({ tasks: BatchGetTaskItems, errors: BatchGetTaskErrors }),
      ).annotate({ identifier: "BatchGetTaskResponse" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ farmId: S.String, fleetId: S.String, workerId: S.String }),
      ).annotate({ identifier: "BatchGetWorkerIdentifier" });
    case 1:
      return S.Array(BatchGetWorkerIdentifier);
    case 2:
      return S.suspend(() =>
        S.Struct({ identifiers: BatchGetWorkerIdentifiers }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2023-10-12/batch-get-worker" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BatchGetWorkerRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          fleetId: S.String,
          workerId: S.String,
          hostProperties: S.optional(HostPropertiesResponse),
          status: WorkerStatus,
          log: S.optional(LogConfiguration),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "BatchGetWorkerItem" });
    case 4:
      return S.Array(BatchGetWorkerItem);
    case 5:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          fleetId: S.String,
          workerId: S.String,
          code: BatchGetWorkerErrorCode,
          message: S.String,
        }),
      ).annotate({ identifier: "BatchGetWorkerError" });
    case 6:
      return S.Array(BatchGetWorkerError_);
    case 7:
      return S.suspend(() =>
        S.Struct({ workers: BatchGetWorkerItems, errors: BatchGetWorkerErrors }),
      ).annotate({ identifier: "BatchGetWorkerResponse" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          queueId: S.String,
          jobId: S.String,
          targetTaskRunStatus: S.optional(JobTargetTaskRunStatus),
          priority: S.optional(S.Number),
          maxFailedTasksCount: S.optional(S.Number),
          maxRetriesPerTask: S.optional(S.Number),
          lifecycleStatus: S.optional(UpdateJobLifecycleStatus),
          maxWorkerCount: S.optional(S.Number),
          name: S.optional(S.String),
          description: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "BatchUpdateJobItem" });
    case 1:
      return S.Array(BatchUpdateJobItem);
    case 2:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amz-Client-Token"),
            T.IdempotencyToken(),
          ),
          jobs: BatchUpdateJobItems,
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/2023-10-12/batch-update-job" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BatchUpdateJobRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          queueId: S.String,
          jobId: S.String,
          code: BatchUpdateJobErrorCode,
          message: S.String,
        }),
      ).annotate({ identifier: "BatchUpdateJobError" });
    case 4:
      return S.Array(BatchUpdateJobError_);
    case 5:
      return S.suspend(() => S.Struct({ errors: BatchUpdateJobErrors })).annotate({
        identifier: "BatchUpdateJobResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          queueId: S.String,
          jobId: S.String,
          stepId: S.String,
          taskId: S.String,
          targetRunStatus: TaskTargetRunStatus,
        }),
      ).annotate({ identifier: "BatchUpdateTaskItem" });
    case 7:
      return S.Array(BatchUpdateTaskItem);
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amz-Client-Token"),
            T.IdempotencyToken(),
          ),
          tasks: BatchUpdateTaskItems,
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/2023-10-12/batch-update-task" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BatchUpdateTaskRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          queueId: S.String,
          jobId: S.String,
          stepId: S.String,
          taskId: S.String,
          code: BatchUpdateTaskErrorCode,
          message: S.String,
        }),
      ).annotate({ identifier: "BatchUpdateTaskError" });
    case 2:
      return S.Array(BatchUpdateTaskError_);
    case 3:
      return S.suspend(() => S.Struct({ errors: BatchUpdateTaskErrors })).annotate({
        identifier: "BatchUpdateTaskResponse",
      });
    case 4:
      return S.suspend(() => S.Struct({ bucketName: S.String, key: S.String })).annotate({
        identifier: "S3Location",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          targetS3Location: S3Location,
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/template",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CopyJobTemplateRequest" });
    case 6:
      return S.suspend(() => S.Struct({ templateType: JobTemplateType })).annotate({
        identifier: "CopyJobTemplateResponse",
      });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ queueId: S.String })]);
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          type: BudgetActionType,
          thresholdPercentage: S.Number,
          description: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "BudgetActionToAdd" });
    case 1:
      return S.Array(BudgetActionToAdd);
    case 2:
      return S.suspend(() =>
        S.Struct({
          startTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          endTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "FixedBudgetSchedule" });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ fixed: FixedBudgetSchedule })]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          displayName: S.String,
          description: S.optional(SensitiveString),
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amz-Client-Token"),
            T.IdempotencyToken(),
          ),
          usageTrackingResource: UsageTrackingResource,
          approximateDollarLimit: S.Number,
          actions: BudgetActionsToAdd,
          schedule: BudgetSchedule,
          tags: S.optional(Tags),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2023-10-12/farms/{farmId}/budgets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateBudgetRequest" });
    case 5:
      return S.suspend(() => S.Struct({ budgetId: S.String })).annotate({
        identifier: "CreateBudgetResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amz-Client-Token"),
            T.IdempotencyToken(),
          ),
          displayName: S.String,
          description: S.optional(SensitiveString),
          kmsKeyArn: S.optional(S.String),
          costScaleFactor: S.optional(S.Number),
          tags: S.optional(Tags),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/2023-10-12/farms" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateFarmRequest" });
    case 7:
      return S.suspend(() => S.Struct({ farmId: S.String })).annotate({
        identifier: "CreateFarmResponse",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          standbyWorkerCount: S.optional(S.Number),
          workerIdleDurationSeconds: S.optional(S.Number),
          scaleOutWorkersPerMinute: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "CustomerManagedAutoScalingConfiguration",
      });
    case 1:
      return S.suspend(() => S.Struct({ min: S.Number, max: S.optional(S.Number) })).annotate({
        identifier: "VCpuCountRange",
      });
    case 2:
      return S.Array(AcceleratorType);
    case 3:
      return S.suspend(() => S.Struct({ min: S.Number, max: S.optional(S.Number) })).annotate({
        identifier: "AcceleratorTotalMemoryMiBRange",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ name: S.String, min: S.Number, max: S.optional(S.Number) }),
      ).annotate({ identifier: "FleetAmountCapability" });
    case 5:
      return S.Array(FleetAmountCapability);
    case 6:
      return S.suspend(() =>
        S.Struct({ name: S.String, values: AttributeCapabilityValuesList }),
      ).annotate({ identifier: "FleetAttributeCapability" });
    case 7:
      return S.Array(FleetAttributeCapability);
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          vCpuCount: VCpuCountRange,
          memoryMiB: MemoryMiBRange,
          acceleratorTypes: S.optional(AcceleratorTypes),
          acceleratorCount: S.optional(AcceleratorCountRange),
          acceleratorTotalMemoryMiB: S.optional(AcceleratorTotalMemoryMiBRange),
          osFamily: CustomerManagedFleetOperatingSystemFamily,
          cpuArchitectureType: CpuArchitectureType,
          customAmounts: S.optional(CustomFleetAmountCapabilities),
          customAttributes: S.optional(CustomFleetAttributeCapabilities),
        }),
      ).annotate({
        identifier: "CustomerManagedWorkerCapabilities",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          mode: AutoScalingMode,
          autoScalingConfiguration: S.optional(CustomerManagedAutoScalingConfiguration),
          workerCapabilities: CustomerManagedWorkerCapabilities,
          storageProfileId: S.optional(S.String),
          tagPropagationMode: S.optional(TagPropagationMode),
        }),
      ).annotate({
        identifier: "CustomerManagedFleetConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          sizeGiB: S.optional(S.Number),
          iops: S.optional(S.Number),
          throughputMiB: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Ec2EbsVolume" });
    case 3:
      return S.suspend(() =>
        S.Struct({ name: AcceleratorName, runtime: S.optional(S.String) }),
      ).annotate({ identifier: "AcceleratorSelection" });
    case 4:
      return S.Array(AcceleratorSelection);
    case 5:
      return S.suspend(() =>
        S.Struct({ selections: AcceleratorSelections, count: S.optional(AcceleratorCountRange) }),
      ).annotate({ identifier: "AcceleratorCapabilities" });
    case 6:
      return S.suspend(() => S.Struct({ name: FleetSoftwareAddOnName })).annotate({
        identifier: "FleetSoftwareAddOn",
      });
    case 7:
      return S.Array(FleetSoftwareAddOn);
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          vCpuCount: VCpuCountRange,
          memoryMiB: MemoryMiBRange,
          osFamily: ServiceManagedFleetOperatingSystemFamily,
          cpuArchitectureType: CpuArchitectureType,
          rootEbsVolume: S.optional(Ec2EbsVolume),
          acceleratorCapabilities: S.optional(AcceleratorCapabilities),
          allowedInstanceTypes: S.optional(InstanceTypes),
          excludedInstanceTypes: S.optional(InstanceTypes),
          customAmounts: S.optional(CustomFleetAmountCapabilities),
          customAttributes: S.optional(CustomFleetAttributeCapabilities),
          softwareAddOns: S.optional(FleetSoftwareAddOns),
        }),
      ).annotate({
        identifier: "ServiceManagedEc2InstanceCapabilities",
      });
    case 1:
      return S.suspend(() => S.Struct({ type: Ec2MarketType })).annotate({
        identifier: "ServiceManagedEc2InstanceMarketOptions",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceConfigurationArns: S.optional(VpcResourceConfigurationArns) }),
      ).annotate({ identifier: "VpcConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          sizeGiB: S.optional(S.Number),
          iops: S.optional(S.Number),
          throughputMiB: S.optional(S.Number),
          mountPath: S.String,
          lastUsedTtlHours: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "PersistentVolumeConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          instanceCapabilities: ServiceManagedEc2InstanceCapabilities,
          instanceMarketOptions: ServiceManagedEc2InstanceMarketOptions,
          vpcConfiguration: S.optional(VpcConfiguration),
          storageProfileId: S.optional(S.String),
          persistentVolumeConfiguration: S.optional(PersistentVolumeConfiguration),
          autoScalingConfiguration: S.optional(ServiceManagedEc2AutoScalingConfiguration),
        }),
      ).annotate({
        identifier: "ServiceManagedEc2FleetConfiguration",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ customerManaged: CustomerManagedFleetConfiguration }),
        /*@__PURE__*/ S.Struct({ serviceManagedEc2: ServiceManagedEc2FleetConfiguration }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({ scriptBody: SensitiveString, scriptTimeoutSeconds: S.optional(S.Number) }),
      ).annotate({ identifier: "HostConfiguration" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amz-Client-Token"),
            T.IdempotencyToken(),
          ),
          displayName: S.String,
          description: S.optional(SensitiveString),
          roleArn: S.String,
          minWorkerCount: S.optional(S.Number),
          maxWorkerCount: S.Number,
          configuration: FleetConfiguration,
          tags: S.optional(Tags),
          hostConfiguration: S.optional(HostConfiguration),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2023-10-12/farms/{farmId}/fleets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateFleetRequest" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ fleetId: S.String })).annotate({
        identifier: "CreateFleetResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amz-Client-Token"),
            T.IdempotencyToken(),
          ),
          template: S.optional(SensitiveString),
          templateType: S.optional(JobTemplateType),
          priority: S.Number,
          parameters: S.optional(JobParameters),
          attachments: S.optional(Attachments),
          storageProfileId: S.optional(S.String),
          targetTaskRunStatus: S.optional(CreateJobTargetTaskRunStatus),
          maxFailedTasksCount: S.optional(S.Number),
          maxRetriesPerTask: S.optional(S.Number),
          maxWorkerCount: S.optional(S.Number),
          sourceJobId: S.optional(S.String),
          nameOverride: S.optional(S.String),
          descriptionOverride: S.optional(SensitiveString),
          tags: S.optional(Tags),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateJobRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amz-Client-Token"),
            T.IdempotencyToken(),
          ),
          vpcId: S.String,
          subnetIds: SubnetIdList,
          securityGroupIds: SecurityGroupIdList,
          tags: S.optional(Tags),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2023-10-12/license-endpoints" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateLicenseEndpointRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ licenseEndpointId: S.String })).annotate({
        identifier: "CreateLicenseEndpointResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amz-Client-Token"),
            T.IdempotencyToken(),
          ),
          displayName: S.String,
          amountRequirementName: S.String,
          maxCount: S.Number,
          description: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2023-10-12/farms/{farmId}/limits" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateLimitRequest" });
    case 5:
      return S.suspend(() => S.Struct({ limitId: S.String })).annotate({
        identifier: "CreateLimitResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amz-Client-Token"),
            T.IdempotencyToken(),
          ),
          displayName: S.String,
          identityCenterInstanceArn: S.String,
          identityCenterRegion: S.optional(S.String),
          subdomain: S.String,
          roleArn: S.String,
          tags: S.optional(Tags),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2023-10-12/monitors" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateMonitorRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ monitorId: S.String, identityCenterApplicationArn: S.String }),
      ).annotate({ identifier: "CreateMonitorResponse" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ s3BucketName: S.String, rootPrefix: S.String })).annotate({
        identifier: "JobAttachmentSettings",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "PriorityFifoSchedulingConfiguration",
      });
    case 2:
      return S.suspend(() => S.Struct({ renderingTaskBuffer: S.optional(S.Number) })).annotate({
        identifier: "PriorityBalancedSchedulingConfiguration",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          alwaysScheduleFirst: SchedulingMaxPriorityOverrideAlwaysScheduleFirst,
        }),
      ]);
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          alwaysScheduleLast: SchedulingMinPriorityOverrideAlwaysScheduleLast,
        }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          priorityWeight: S.optional(S.Number),
          errorWeight: S.optional(S.Number),
          submissionTimeWeight: S.optional(S.Number),
          renderingTaskWeight: S.optional(S.Number),
          renderingTaskBuffer: S.optional(S.Number),
          maxPriorityOverride: S.optional(SchedulingMaxPriorityOverride),
          minPriorityOverride: S.optional(SchedulingMinPriorityOverride),
        }),
      ).annotate({
        identifier: "WeightedBalancedSchedulingConfiguration",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ priorityFifo: PriorityFifoSchedulingConfiguration }),
        /*@__PURE__*/ S.Struct({ priorityBalanced: PriorityBalancedSchedulingConfiguration }),
        /*@__PURE__*/ S.Struct({ weightedBalanced: WeightedBalancedSchedulingConfiguration }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amz-Client-Token"),
            T.IdempotencyToken(),
          ),
          displayName: S.String,
          description: S.optional(SensitiveString),
          defaultBudgetAction: S.optional(DefaultQueueBudgetAction),
          jobAttachmentSettings: S.optional(JobAttachmentSettings),
          roleArn: S.optional(S.String),
          jobRunAsUser: S.optional(JobRunAsUser),
          requiredFileSystemLocationNames: S.optional(RequiredFileSystemLocationNames),
          allowedStorageProfileIds: S.optional(AllowedStorageProfileIds),
          tags: S.optional(Tags),
          schedulingConfiguration: S.optional(SchedulingConfiguration),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2023-10-12/farms/{farmId}/queues" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateQueueRequest" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ queueId: S.String })).annotate({
        identifier: "CreateQueueResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amz-Client-Token"),
            T.IdempotencyToken(),
          ),
          priority: S.Number,
          templateType: EnvironmentTemplateType,
          template: SensitiveString,
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/environments",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateQueueEnvironmentRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ queueEnvironmentId: S.String })).annotate({
        identifier: "CreateQueueEnvironmentResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String,
          fleetId: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/2023-10-12/farms/{farmId}/queue-fleet-associations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateQueueFleetAssociationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String,
          limitId: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/2023-10-12/farms/{farmId}/queue-limit-associations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateQueueLimitAssociationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ name: S.String, path: S.String, type: FileSystemLocationType }),
      ).annotate({ identifier: "FileSystemLocation" });
    case 6:
      return S.Array(FileSystemLocation);
    case 7:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amz-Client-Token"),
            T.IdempotencyToken(),
          ),
          displayName: S.String,
          osFamily: StorageProfileOperatingSystemFamily,
          fileSystemLocations: S.optional(FileSystemLocationsList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2023-10-12/farms/{farmId}/storage-profiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateStorageProfileRequest",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ storageProfileId: S.String })).annotate({
        identifier: "CreateStorageProfileResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ipAddresses: S.optional(IpAddresses), hostName: S.optional(S.String) }),
      ).annotate({ identifier: "HostPropertiesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          fleetId: S.String.pipe(T.HttpLabel("fleetId")),
          hostProperties: S.optional(HostPropertiesRequest),
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amz-Client-Token"),
            T.IdempotencyToken(),
          ),
          tags: S.optional(Tags),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateWorkerRequest" });
    case 3:
      return S.suspend(() => S.Struct({ workerId: S.String })).annotate({
        identifier: "CreateWorkerResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          budgetId: S.String.pipe(T.HttpLabel("budgetId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/2023-10-12/farms/{farmId}/budgets/{budgetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteBudgetRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ farmId: S.String.pipe(T.HttpLabel("farmId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/2023-10-12/farms/{farmId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteFarmRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          fleetId: S.String.pipe(T.HttpLabel("fleetId")),
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amz-Client-Token"),
            T.IdempotencyToken(),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/2023-10-12/farms/{farmId}/fleets/{fleetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteFleetRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ licenseEndpointId: S.String.pipe(T.HttpLabel("licenseEndpointId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/2023-10-12/license-endpoints/{licenseEndpointId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteLicenseEndpointRequest",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          limitId: S.String.pipe(T.HttpLabel("limitId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/2023-10-12/farms/{farmId}/limits/{limitId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteLimitRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          licenseEndpointId: S.String.pipe(T.HttpLabel("licenseEndpointId")),
          productId: S.String.pipe(T.HttpLabel("productId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/2023-10-12/license-endpoints/{licenseEndpointId}/metered-products/{productId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteMeteredProductRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ monitorId: S.String.pipe(T.HttpLabel("monitorId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/2023-10-12/monitors/{monitorId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteMonitorRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/2023-10-12/farms/{farmId}/queues/{queueId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteQueueRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          queueEnvironmentId: S.String.pipe(T.HttpLabel("queueEnvironmentId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/environments/{queueEnvironmentId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteQueueEnvironmentRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          fleetId: S.String.pipe(T.HttpLabel("fleetId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/2023-10-12/farms/{farmId}/queue-fleet-associations/{queueId}/{fleetId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteQueueFleetAssociationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          limitId: S.String.pipe(T.HttpLabel("limitId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/2023-10-12/farms/{farmId}/queue-limit-associations/{queueId}/{limitId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteQueueLimitAssociationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          storageProfileId: S.String.pipe(T.HttpLabel("storageProfileId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/2023-10-12/farms/{farmId}/storage-profiles/{storageProfileId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteStorageProfileRequest",
      });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          fleetId: S.String.pipe(T.HttpLabel("fleetId")),
          volumeId: S.String.pipe(T.HttpLabel("volumeId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/2023-10-12/farms/{farmId}/fleets/{fleetId}/volumes/{volumeId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteVolumeRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          fleetId: S.String.pipe(T.HttpLabel("fleetId")),
          workerId: S.String.pipe(T.HttpLabel("workerId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteWorkerRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          principalId: S.String.pipe(T.HttpLabel("principalId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/2023-10-12/farms/{farmId}/members/{principalId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateMemberFromFarmRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          fleetId: S.String.pipe(T.HttpLabel("fleetId")),
          principalId: S.String.pipe(T.HttpLabel("principalId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/2023-10-12/farms/{farmId}/fleets/{fleetId}/members/{principalId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateMemberFromFleetRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          principalId: S.String.pipe(T.HttpLabel("principalId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/members/{principalId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateMemberFromJobRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          principalId: S.String.pipe(T.HttpLabel("principalId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/members/{principalId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateMemberFromQueueRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          budgetId: S.String.pipe(T.HttpLabel("budgetId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2023-10-12/farms/{farmId}/budgets/{budgetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetBudgetRequest" });
    case 7:
      return S.suspend(() => S.Struct({ approximateDollarUsage: S.Number })).annotate({
        identifier: "ConsumedUsages",
      });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          budgetId: S.String,
          usageTrackingResource: UsageTrackingResource,
          status: BudgetStatus,
          displayName: S.String,
          approximateDollarLimit: S.Number,
          usages: ConsumedUsages,
          createdBy: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedBy: S.optional(S.String),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          description: S.optional(SensitiveString),
          actions: ResponseBudgetActionList,
          schedule: BudgetSchedule,
          queueStoppedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "GetBudgetResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ farmId: S.String.pipe(T.HttpLabel("farmId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2023-10-12/farms/{farmId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetFarmRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          displayName: S.String,
          kmsKeyArn: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
          description: S.optional(SensitiveString),
          costScaleFactor: S.Number,
        }),
      ).annotate({ identifier: "GetFarmResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          fleetId: S.String.pipe(T.HttpLabel("fleetId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2023-10-12/farms/{farmId}/fleets/{fleetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetFleetRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          amounts: S.optional(FleetAmountCapabilities),
          attributes: S.optional(FleetAttributeCapabilities),
        }),
      ).annotate({ identifier: "FleetCapabilities" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          fleetId: S.String,
          farmId: S.String,
          displayName: S.String,
          status: FleetStatus,
          statusMessage: S.optional(S.String),
          autoScalingStatus: S.optional(AutoScalingStatus),
          targetWorkerCount: S.optional(S.Number),
          workerCount: S.Number,
          minWorkerCount: S.Number,
          maxWorkerCount: S.Number,
          configuration: FleetConfiguration,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
          description: S.optional(SensitiveString),
          hostConfiguration: S.optional(HostConfiguration),
          capabilities: S.optional(FleetCapabilities),
          roleArn: S.String,
        }),
      ).annotate({ identifier: "GetFleetResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetJobRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          name: S.String,
          lifecycleStatus: JobLifecycleStatus,
          lifecycleStatusMessage: S.String,
          priority: S.Number,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
          startedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          taskRunStatus: S.optional(TaskRunStatus),
          targetTaskRunStatus: S.optional(JobTargetTaskRunStatus),
          taskRunStatusCounts: S.optional(TaskRunStatusCounts),
          taskFailureRetryCount: S.optional(S.Number),
          storageProfileId: S.optional(S.String),
          maxFailedTasksCount: S.optional(S.Number),
          maxRetriesPerTask: S.optional(S.Number),
          parameters: S.optional(JobParameters),
          attachments: S.optional(Attachments),
          description: S.optional(SensitiveString),
          maxWorkerCount: S.optional(S.Number),
          sourceJobId: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetJobResponse" });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ licenseEndpointId: S.String.pipe(T.HttpLabel("licenseEndpointId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2023-10-12/license-endpoints/{licenseEndpointId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetLicenseEndpointRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          licenseEndpointId: S.String,
          status: LicenseEndpointStatus,
          statusMessage: S.String,
          vpcId: S.optional(S.String),
          dnsName: S.optional(S.String),
          subnetIds: S.optional(SubnetIdList),
          securityGroupIds: S.optional(SecurityGroupIdList),
        }),
      ).annotate({
        identifier: "GetLicenseEndpointResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          limitId: S.String.pipe(T.HttpLabel("limitId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2023-10-12/farms/{farmId}/limits/{limitId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetLimitRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          limitId: S.String,
          currentCount: S.Number,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
          displayName: S.String,
          amountRequirementName: S.String,
          maxCount: S.Number,
          description: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "GetLimitResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ monitorId: S.String.pipe(T.HttpLabel("monitorId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2023-10-12/monitors/{monitorId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetMonitorRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          monitorId: S.String,
          displayName: S.String,
          subdomain: S.String,
          url: S.String,
          roleArn: S.String,
          identityCenterInstanceArn: S.String,
          identityCenterRegion: S.optional(S.String),
          identityCenterApplicationArn: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetMonitorResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ monitorId: S.String.pipe(T.HttpLabel("monitorId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2023-10-12/monitors/{monitorId}/settings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetMonitorSettingsRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ settings: SettingsMap })).annotate({
        identifier: "GetMonitorSettingsResponse",
      });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2023-10-12/farms/{farmId}/queues/{queueId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetQueueRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          queueId: S.String,
          displayName: S.String,
          status: QueueStatus,
          defaultBudgetAction: DefaultQueueBudgetAction,
          blockedReason: S.optional(QueueBlockedReason),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
          description: S.optional(SensitiveString),
          jobAttachmentSettings: S.optional(JobAttachmentSettings),
          roleArn: S.optional(S.String),
          requiredFileSystemLocationNames: S.optional(RequiredFileSystemLocationNames),
          allowedStorageProfileIds: S.optional(AllowedStorageProfileIds),
          jobRunAsUser: S.optional(JobRunAsUser),
          schedulingConfiguration: S.optional(SchedulingConfiguration),
        }),
      ).annotate({ identifier: "GetQueueResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          queueEnvironmentId: S.String.pipe(T.HttpLabel("queueEnvironmentId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/environments/{queueEnvironmentId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetQueueEnvironmentRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          queueEnvironmentId: S.String,
          name: S.String,
          priority: S.Number,
          templateType: EnvironmentTemplateType,
          template: SensitiveString,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetQueueEnvironmentResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          fleetId: S.String.pipe(T.HttpLabel("fleetId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/queue-fleet-associations/{queueId}/{fleetId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetQueueFleetAssociationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          queueId: S.String,
          fleetId: S.String,
          status: QueueFleetAssociationStatus,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetQueueFleetAssociationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          limitId: S.String.pipe(T.HttpLabel("limitId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/queue-limit-associations/{queueId}/{limitId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetQueueLimitAssociationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          queueId: S.String,
          limitId: S.String,
          status: QueueLimitAssociationStatus,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetQueueLimitAssociationResponse",
      });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          sessionId: S.String.pipe(T.HttpLabel("sessionId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/sessions/{sessionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSessionRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.String,
          fleetId: S.String,
          workerId: S.String,
          startedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lifecycleStatus: SessionLifecycleStatus,
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          targetLifecycleStatus: S.optional(SessionLifecycleTargetStatus),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
          log: LogConfiguration,
          hostProperties: S.optional(HostPropertiesResponse),
          workerLog: S.optional(LogConfiguration),
        }),
      ).annotate({ identifier: "GetSessionResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          sessionActionId: S.String.pipe(T.HttpLabel("sessionActionId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/session-actions/{sessionActionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSessionActionRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          sessionActionId: S.String,
          status: SessionActionStatus,
          startedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          workerUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          progressPercent: S.optional(S.Number),
          manifests: S.optional(TaskRunManifestPropertiesListResponse),
          sessionId: S.String,
          processExitCode: S.optional(S.Number),
          progressMessage: S.optional(SensitiveString),
          acquiredLimits: S.optional(AcquiredLimits),
          definition: SessionActionDefinition,
        }),
      ).annotate({ identifier: "GetSessionActionResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          aggregationId: S.String.pipe(T.HttpQuery("aggregationId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/sessions-statistics-aggregation",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSessionsStatisticsAggregationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          min: S.optional(S.Number),
          max: S.optional(S.Number),
          avg: S.optional(S.Number),
          sum: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Stats" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          queueId: S.optional(S.String),
          fleetId: S.optional(S.String),
          jobId: S.optional(S.String),
          jobName: S.optional(S.String),
          userId: S.optional(S.String),
          usageType: S.optional(UsageType),
          licenseProduct: S.optional(S.String),
          instanceType: S.optional(S.String),
          count: S.Number,
          costInUsd: Stats,
          runtimeInSeconds: Stats,
          aggregationStartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          aggregationEndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "Statistics" });
    case 7:
      return S.Array(Statistics);
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          statistics: S.optional(StatisticsList),
          status: SessionsStatisticsAggregationStatus,
          statusMessage: S.optional(S.String),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetSessionsStatisticsAggregationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          stepId: S.String.pipe(T.HttpLabel("stepId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetStepRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          stepId: S.String,
          name: S.String,
          lifecycleStatus: StepLifecycleStatus,
          lifecycleStatusMessage: S.optional(S.String),
          taskRunStatus: TaskRunStatus,
          taskRunStatusCounts: TaskRunStatusCounts,
          taskFailureRetryCount: S.optional(S.Number),
          targetTaskRunStatus: S.optional(StepTargetTaskRunStatus),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
          startedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          dependencyCounts: S.optional(DependencyCounts),
          requiredCapabilities: S.optional(StepRequiredCapabilities),
          parameterSpace: S.optional(ParameterSpace),
          description: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "GetStepResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          storageProfileId: S.String.pipe(T.HttpLabel("storageProfileId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/storage-profiles/{storageProfileId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetStorageProfileRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          storageProfileId: S.String,
          displayName: S.String,
          osFamily: StorageProfileOperatingSystemFamily,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
          fileSystemLocations: S.optional(FileSystemLocationsList),
        }),
      ).annotate({
        identifier: "GetStorageProfileResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          storageProfileId: S.String.pipe(T.HttpLabel("storageProfileId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/storage-profiles/{storageProfileId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetStorageProfileForQueueRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          storageProfileId: S.String,
          displayName: S.String,
          osFamily: StorageProfileOperatingSystemFamily,
          fileSystemLocations: S.optional(FileSystemLocationsList),
        }),
      ).annotate({
        identifier: "GetStorageProfileForQueueResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          stepId: S.String.pipe(T.HttpLabel("stepId")),
          taskId: S.String.pipe(T.HttpLabel("taskId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/tasks/{taskId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetTaskRequest" });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          taskId: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          runStatus: TaskRunStatus,
          targetRunStatus: S.optional(TaskTargetRunStatus),
          failureRetryCount: S.optional(S.Number),
          startedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
          latestSessionActionId: S.optional(S.String),
          parameters: S.optional(TaskParameters),
        }),
      ).annotate({ identifier: "GetTaskResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          fleetId: S.String.pipe(T.HttpLabel("fleetId")),
          volumeId: S.String.pipe(T.HttpLabel("volumeId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/fleets/{fleetId}/volumes/{volumeId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetVolumeRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          volumeId: S.String,
          farmId: S.String,
          fleetId: S.String,
          state: VolumeState,
          sizeGiB: S.Number,
          availabilityZoneId: S.String,
          attachedWorkerId: S.optional(S.String),
          volumeType: EbsVolumeType,
          iops: S.optional(S.Number),
          throughputMiB: S.optional(S.Number),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastAssignedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastReleasedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          expiresAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "GetVolumeResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          fleetId: S.String.pipe(T.HttpLabel("fleetId")),
          workerId: S.String.pipe(T.HttpLabel("workerId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetWorkerRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2023-10-12/metered-products" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAvailableMeteredProductsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ productId: S.String, family: S.String, vendor: S.String, port: S.Number }),
      ).annotate({ identifier: "MeteredProductSummary" });
    case 6:
      return S.Array(MeteredProductSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({ meteredProducts: MeteredProductSummaryList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAvailableMeteredProductsResponse",
      });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          status: S.optional(BudgetStatus).pipe(T.HttpQuery("status")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2023-10-12/farms/{farmId}/budgets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListBudgetsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          budgetId: S.String,
          usageTrackingResource: UsageTrackingResource,
          status: BudgetStatus,
          displayName: S.String,
          approximateDollarLimit: S.Number,
          usages: ConsumedUsages,
          createdBy: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedBy: S.optional(S.String),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          description: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "BudgetSummary" });
    case 2:
      return S.Array(BudgetSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ budgets: BudgetSummaries, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListBudgetsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2023-10-12/farms/{farmId}/members" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListFarmMembersRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          principalId: S.String,
          principalType: DeadlinePrincipalType,
          identityStoreId: S.String,
          membershipLevel: MembershipLevel,
        }),
      ).annotate({ identifier: "FarmMember" });
    case 6:
      return S.Array(FarmMember);
    case 7:
      return S.suspend(() =>
        S.Struct({ members: FarmMembers, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListFarmMembersResponse" });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          principalId: S.optional(S.String).pipe(T.HttpQuery("principalId")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/2023-10-12/farms" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListFarmsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          displayName: S.String,
          kmsKeyArn: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "FarmSummary" });
    case 2:
      return S.Array(FarmSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ farms: FarmSummaries, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListFarmsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          fleetId: S.String.pipe(T.HttpLabel("fleetId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2023-10-12/farms/{farmId}/fleets/{fleetId}/members" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListFleetMembersRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          fleetId: S.String,
          principalId: S.String,
          principalType: DeadlinePrincipalType,
          identityStoreId: S.String,
          membershipLevel: MembershipLevel,
        }),
      ).annotate({ identifier: "FleetMember" });
    case 6:
      return S.Array(FleetMember);
    case 7:
      return S.suspend(() =>
        S.Struct({ members: FleetMembers, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListFleetMembersResponse" });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          principalId: S.optional(S.String).pipe(T.HttpQuery("principalId")),
          displayName: S.optional(S.String).pipe(T.HttpQuery("displayName")),
          status: S.optional(FleetStatus).pipe(T.HttpQuery("status")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2023-10-12/farms/{farmId}/fleets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListFleetsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          fleetId: S.String,
          farmId: S.String,
          displayName: S.String,
          status: FleetStatus,
          statusMessage: S.optional(S.String),
          autoScalingStatus: S.optional(AutoScalingStatus),
          targetWorkerCount: S.optional(S.Number),
          workerCount: S.Number,
          minWorkerCount: S.Number,
          maxWorkerCount: S.Number,
          configuration: FleetConfiguration,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "FleetSummary" });
    case 2:
      return S.Array(FleetSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ fleets: FleetSummaries, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListFleetsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/members",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListJobMembersRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          queueId: S.String,
          jobId: S.String,
          principalId: S.String,
          principalType: DeadlinePrincipalType,
          identityStoreId: S.String,
          membershipLevel: MembershipLevel,
        }),
      ).annotate({ identifier: "JobMember" });
    case 6:
      return S.Array(JobMember);
    case 7:
      return S.suspend(() =>
        S.Struct({ members: JobMembers, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListJobMembersResponse" });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/parameter-definitions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListJobParameterDefinitionsRequest",
      });
    case 1:
      return S.Array(S.Any);
    case 2:
      return S.suspend(() =>
        S.Struct({
          jobParameterDefinitions: JobParameterDefinitions,
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListJobParameterDefinitionsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          principalId: S.optional(S.String).pipe(T.HttpQuery("principalId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListJobsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          jobId: S.String,
          name: S.String,
          lifecycleStatus: JobLifecycleStatus,
          lifecycleStatusMessage: S.String,
          priority: S.Number,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
          startedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          taskRunStatus: S.optional(TaskRunStatus),
          targetTaskRunStatus: S.optional(JobTargetTaskRunStatus),
          taskRunStatusCounts: S.optional(TaskRunStatusCounts),
          taskFailureRetryCount: S.optional(S.Number),
          maxFailedTasksCount: S.optional(S.Number),
          maxRetriesPerTask: S.optional(S.Number),
          maxWorkerCount: S.optional(S.Number),
          sourceJobId: S.optional(S.String),
        }),
      ).annotate({ identifier: "JobSummary" });
    case 5:
      return S.Array(JobSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({ jobs: JobSummaries, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListJobsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2023-10-12/license-endpoints" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListLicenseEndpointsRequest",
      });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          licenseEndpointId: S.optional(S.String),
          status: S.optional(LicenseEndpointStatus),
          statusMessage: S.optional(S.String),
          vpcId: S.optional(S.String),
        }),
      ).annotate({ identifier: "LicenseEndpointSummary" });
    case 1:
      return S.Array(LicenseEndpointSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({ licenseEndpoints: LicenseEndpointSummaries, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListLicenseEndpointsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2023-10-12/farms/{farmId}/limits" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListLimitsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          limitId: S.String,
          currentCount: S.Number,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
          displayName: S.String,
          amountRequirementName: S.String,
          maxCount: S.Number,
        }),
      ).annotate({ identifier: "LimitSummary" });
    case 5:
      return S.Array(LimitSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({ limits: LimitSummaries, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListLimitsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          licenseEndpointId: S.String.pipe(T.HttpLabel("licenseEndpointId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/license-endpoints/{licenseEndpointId}/metered-products",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListMeteredProductsRequest",
      });
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2023-10-12/monitors" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListMonitorsRequest" });
    case 1:
      return S.Array(MonitorSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({ monitors: MonitorSummaries, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListMonitorsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/environments",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListQueueEnvironmentsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ queueEnvironmentId: S.String, name: S.String, priority: S.Number }),
      ).annotate({ identifier: "QueueEnvironmentSummary" });
    case 5:
      return S.Array(QueueEnvironmentSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({ environments: QueueEnvironmentSummaries, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListQueueEnvironmentsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          queueId: S.optional(S.String).pipe(T.HttpQuery("queueId")),
          fleetId: S.optional(S.String).pipe(T.HttpQuery("fleetId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2023-10-12/farms/{farmId}/queue-fleet-associations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListQueueFleetAssociationsRequest",
      });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.Array(QueueFleetAssociationSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          queueFleetAssociations: QueueFleetAssociationSummaries,
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListQueueFleetAssociationsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          queueId: S.optional(S.String).pipe(T.HttpQuery("queueId")),
          limitId: S.optional(S.String).pipe(T.HttpQuery("limitId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2023-10-12/farms/{farmId}/queue-limit-associations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListQueueLimitAssociationsRequest",
      });
    case 3:
      return S.Array(QueueLimitAssociationSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          queueLimitAssociations: QueueLimitAssociationSummaries,
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListQueueLimitAssociationsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/members" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListQueueMembersRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          queueId: S.String,
          principalId: S.String,
          principalType: DeadlinePrincipalType,
          identityStoreId: S.String,
          membershipLevel: MembershipLevel,
        }),
      ).annotate({ identifier: "QueueMember" });
    case 7:
      return S.Array(QueueMember);
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ members: QueueMemberList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListQueueMembersResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          principalId: S.optional(S.String).pipe(T.HttpQuery("principalId")),
          status: S.optional(QueueStatus).pipe(T.HttpQuery("status")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2023-10-12/farms/{farmId}/queues" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListQueuesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String,
          queueId: S.String,
          displayName: S.String,
          status: QueueStatus,
          defaultBudgetAction: DefaultQueueBudgetAction,
          blockedReason: S.optional(QueueBlockedReason),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "QueueSummary" });
    case 3:
      return S.Array(QueueSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({ queues: QueueSummaries, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListQueuesResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          sessionId: S.optional(S.String).pipe(T.HttpQuery("sessionId")),
          taskId: S.optional(S.String).pipe(T.HttpQuery("taskId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/session-actions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSessionActionsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          taskId: S.optional(S.String),
          stepId: S.String,
          parameters: S.optional(TaskParameters),
        }),
      ).annotate({
        identifier: "TaskRunSessionActionDefinitionSummary",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ envEnter: EnvironmentEnterSessionActionDefinitionSummary }),
        /*@__PURE__*/ S.Struct({ envExit: EnvironmentExitSessionActionDefinitionSummary }),
        /*@__PURE__*/ S.Struct({ taskRun: TaskRunSessionActionDefinitionSummary }),
        /*@__PURE__*/ S.Struct({
          syncInputJobAttachments: SyncInputJobAttachmentsSessionActionDefinitionSummary,
        }),
      ]);
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sessionActionId: S.String,
          status: SessionActionStatus,
          startedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          workerUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          progressPercent: S.optional(S.Number),
          manifests: S.optional(TaskRunManifestPropertiesListResponse),
          definition: SessionActionDefinitionSummary,
        }),
      ).annotate({ identifier: "SessionActionSummary" });
    case 1:
      return S.Array(SessionActionSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({ sessionActions: SessionActionSummaries, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListSessionActionsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/sessions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListSessionsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.String,
          fleetId: S.String,
          workerId: S.String,
          startedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lifecycleStatus: SessionLifecycleStatus,
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          targetLifecycleStatus: S.optional(SessionLifecycleTargetStatus),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "SessionSummary" });
    case 5:
      return S.Array(SessionSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({ sessions: SessionSummaries, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListSessionsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          fleetId: S.String.pipe(T.HttpLabel("fleetId")),
          workerId: S.String.pipe(T.HttpLabel("workerId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/sessions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSessionsForWorkerRequest",
      });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.String,
          queueId: S.String,
          jobId: S.String,
          startedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lifecycleStatus: SessionLifecycleStatus,
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          targetLifecycleStatus: S.optional(SessionLifecycleTargetStatus),
        }),
      ).annotate({ identifier: "WorkerSessionSummary" });
    case 1:
      return S.Array(WorkerSessionSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({ sessions: ListSessionsForWorkerSummaries, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListSessionsForWorkerResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          stepId: S.String.pipe(T.HttpLabel("stepId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/consumers",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListStepConsumersRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ stepId: S.String, status: DependencyConsumerResolutionStatus }),
      ).annotate({ identifier: "StepConsumer" });
    case 5:
      return S.Array(StepConsumer);
    case 6:
      return S.suspend(() =>
        S.Struct({ consumers: StepConsumers, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListStepConsumersResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          stepId: S.String.pipe(T.HttpLabel("stepId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/dependencies",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListStepDependenciesRequest",
      });
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ dependencies: StepDependencies, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListStepDependenciesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListStepsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          stepId: S.String,
          name: S.String,
          lifecycleStatus: StepLifecycleStatus,
          lifecycleStatusMessage: S.optional(S.String),
          taskRunStatus: TaskRunStatus,
          taskRunStatusCounts: TaskRunStatusCounts,
          taskFailureRetryCount: S.optional(S.Number),
          targetTaskRunStatus: S.optional(StepTargetTaskRunStatus),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
          startedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          dependencyCounts: S.optional(DependencyCounts),
        }),
      ).annotate({ identifier: "StepSummary" });
    case 3:
      return S.Array(StepSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({ steps: StepSummaries, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListStepsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2023-10-12/farms/{farmId}/storage-profiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListStorageProfilesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          storageProfileId: S.String,
          displayName: S.String,
          osFamily: StorageProfileOperatingSystemFamily,
        }),
      ).annotate({ identifier: "StorageProfileSummary" });
    case 7:
      return S.Array(StorageProfileSummary);
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ storageProfiles: StorageProfileSummaries, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListStorageProfilesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/storage-profiles",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListStorageProfilesForQueueRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2023-10-12/tags/{resourceArn}" }),
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
    case 3:
      return S.suspend(() => S.Struct({ tags: S.optional(Tags) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          stepId: S.String.pipe(T.HttpLabel("stepId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/tasks",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListTasksRequest" });
    case 5:
      return S.Array(TaskSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({ tasks: TaskSummaries, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListTasksResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          fleetId: S.String.pipe(T.HttpLabel("fleetId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2023-10-12/farms/{farmId}/fleets/{fleetId}/volumes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListVolumesRequest" });
  }
}
function __c45(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          volumeId: S.String,
          farmId: S.String,
          fleetId: S.String,
          state: VolumeState,
          sizeGiB: S.Number,
          availabilityZoneId: S.String,
          attachedWorkerId: S.optional(S.String),
        }),
      ).annotate({ identifier: "VolumeSummary" });
    case 1:
      return S.Array(VolumeSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({ volumes: VolumeSummaries, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListVolumesResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          fleetId: S.String.pipe(T.HttpLabel("fleetId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListWorkersRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ workers: WorkerSummaries, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListWorkersResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          licenseEndpointId: S.String.pipe(T.HttpLabel("licenseEndpointId")),
          productId: S.String.pipe(T.HttpLabel("productId")),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/2023-10-12/license-endpoints/{licenseEndpointId}/metered-products/{productId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutMeteredProductRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          operator: ComparisonOperator,
          dateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "DateTimeFilterExpression" });
    case 7:
      return S.suspend(() =>
        S.Struct({ name: S.String, operator: ComparisonOperator, value: S.String }),
      ).annotate({
        identifier: "ParameterFilterExpression",
      });
  }
}
function __c46(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ searchTerm: S.String, matchType: S.optional(SearchTermMatchingType) }),
      ).annotate({
        identifier: "SearchTermFilterExpression",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.String, operator: ComparisonOperator, value: S.String }),
      ).annotate({ identifier: "StringFilterExpression" });
    case 2:
      return S.suspend(() =>
        S.Struct({ name: S.String, operator: ComparisonOperator, values: StringFilterList }),
      ).annotate({
        identifier: "StringListFilterExpression",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ dateTimeFilter: DateTimeFilterExpression }),
        /*@__PURE__*/ S.Struct({ parameterFilter: ParameterFilterExpression }),
        /*@__PURE__*/ S.Struct({ searchTermFilter: SearchTermFilterExpression }),
        /*@__PURE__*/ S.Struct({ stringFilter: StringFilterExpression }),
        /*@__PURE__*/ S.Struct({ stringListFilter: StringListFilterExpression }),
        /*@__PURE__*/ S.Struct({
          groupFilter: /*@__PURE__*/ S.suspend(
            (): S.Schema<SearchGroupedFilterExpressions> => SearchGroupedFilterExpressions,
          ).annotate({ identifier: "SearchGroupedFilterExpressions" }),
        }),
      ]);
    case 4:
      return S.Array(
        /*@__PURE__*/ S.suspend(() => SearchFilterExpression).annotate({
          identifier: "SearchFilterExpression",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          filters: S.suspend(() => SearchFilterExpressions).annotate({
            identifier: "SearchFilterExpressions",
          }),
          operator: LogicalOperator,
        }),
      ).annotate({
        identifier: "SearchGroupedFilterExpressions",
      });
    case 6:
      return S.suspend(() => S.Struct({ userIdentityId: S.String })).annotate({
        identifier: "UserJobsFirst",
      });
    case 7:
      return S.suspend(() => S.Struct({ sortOrder: SortOrder, name: S.String })).annotate({
        identifier: "FieldSortExpression",
      });
  }
}
function __c47(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ userJobsFirst: UserJobsFirst }),
        /*@__PURE__*/ S.Struct({ fieldSort: FieldSortExpression }),
        /*@__PURE__*/ S.Struct({ parameterSort: ParameterSortExpression }),
      ]);
    case 1:
      return S.Array(SearchSortExpression);
    case 2:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          filterExpressions: S.optional(SearchGroupedFilterExpressions),
          sortExpressions: S.optional(SearchSortExpressions),
          itemOffset: S.Number,
          pageSize: S.optional(S.Number),
          queueIds: QueueIds,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2023-10-12/farms/{farmId}/search/jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SearchJobsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          jobId: S.optional(S.String),
          queueId: S.optional(S.String),
          name: S.optional(S.String),
          lifecycleStatus: S.optional(JobLifecycleStatus),
          lifecycleStatusMessage: S.optional(S.String),
          taskRunStatus: S.optional(TaskRunStatus),
          targetTaskRunStatus: S.optional(JobTargetTaskRunStatus),
          taskRunStatusCounts: S.optional(TaskRunStatusCounts),
          taskFailureRetryCount: S.optional(S.Number),
          priority: S.optional(S.Number),
          maxFailedTasksCount: S.optional(S.Number),
          maxRetriesPerTask: S.optional(S.Number),
          createdBy: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          startedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
          jobParameters: S.optional(JobParameters),
          maxWorkerCount: S.optional(S.Number),
          sourceJobId: S.optional(S.String),
        }),
      ).annotate({ identifier: "JobSearchSummary" });
    case 4:
      return S.Array(JobSearchSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          jobs: JobSearchSummaries,
          nextItemOffset: S.optional(S.Number),
          totalResults: S.Number,
        }),
      ).annotate({ identifier: "SearchJobsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          filterExpressions: S.optional(SearchGroupedFilterExpressions),
          sortExpressions: S.optional(SearchSortExpressions),
          itemOffset: S.Number,
          pageSize: S.optional(S.Number),
          queueIds: QueueIds,
          jobId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2023-10-12/farms/{farmId}/search/steps" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SearchStepsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          stepId: S.optional(S.String),
          jobId: S.optional(S.String),
          queueId: S.optional(S.String),
          name: S.optional(S.String),
          lifecycleStatus: S.optional(StepLifecycleStatus),
          lifecycleStatusMessage: S.optional(S.String),
          taskRunStatus: S.optional(TaskRunStatus),
          targetTaskRunStatus: S.optional(StepTargetTaskRunStatus),
          taskRunStatusCounts: S.optional(TaskRunStatusCounts),
          taskFailureRetryCount: S.optional(S.Number),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          createdBy: S.optional(S.String),
          startedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
          parameterSpace: S.optional(ParameterSpace),
        }),
      ).annotate({ identifier: "StepSearchSummary" });
  }
}
function __c48(j: number): any {
  switch (j) {
    case 0:
      return S.Array(StepSearchSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          steps: StepSearchSummaries,
          nextItemOffset: S.optional(S.Number),
          totalResults: S.Number,
        }),
      ).annotate({ identifier: "SearchStepsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          filterExpressions: S.optional(SearchGroupedFilterExpressions),
          sortExpressions: S.optional(SearchSortExpressions),
          itemOffset: S.Number,
          pageSize: S.optional(S.Number),
          queueIds: QueueIds,
          jobId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2023-10-12/farms/{farmId}/search/tasks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SearchTasksRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          taskId: S.optional(S.String),
          stepId: S.optional(S.String),
          jobId: S.optional(S.String),
          queueId: S.optional(S.String),
          runStatus: S.optional(TaskRunStatus),
          targetRunStatus: S.optional(TaskTargetRunStatus),
          parameters: S.optional(TaskParameters),
          failureRetryCount: S.optional(S.Number),
          startedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
          latestSessionActionId: S.optional(S.String),
        }),
      ).annotate({ identifier: "TaskSearchSummary" });
    case 4:
      return S.Array(TaskSearchSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          tasks: TaskSearchSummaries,
          nextItemOffset: S.optional(S.Number),
          totalResults: S.Number,
        }),
      ).annotate({ identifier: "SearchTasksResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          filterExpressions: S.optional(SearchGroupedFilterExpressions),
          sortExpressions: S.optional(SearchSortExpressions),
          itemOffset: S.Number,
          pageSize: S.optional(S.Number),
          fleetIds: FleetIds,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2023-10-12/farms/{farmId}/search/workers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SearchWorkersRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          fleetId: S.optional(S.String),
          workerId: S.optional(S.String),
          status: S.optional(WorkerStatus),
          hostProperties: S.optional(HostPropertiesResponse),
          createdBy: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "WorkerSearchSummary" });
  }
}
function __c49(j: number): any {
  switch (j) {
    case 0:
      return S.Array(WorkerSearchSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          workers: WorkerSearchSummaries,
          nextItemOffset: S.optional(S.Number),
          totalResults: S.Number,
        }),
      ).annotate({ identifier: "SearchWorkersResponse" });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ queueIds: QueueIds }),
        /*@__PURE__*/ S.Struct({ fleetIds: FleetIds }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          resourceIds: SessionsStatisticsResources,
          startTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          endTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          timezone: S.optional(S.String),
          period: S.optional(Period),
          groupBy: UsageGroupBy,
          statistics: UsageStatistics,
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/2023-10-12/farms/{farmId}/sessions-statistics-aggregation",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartSessionsStatisticsAggregationRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ aggregationId: S.String })).annotate({
        identifier: "StartSessionsStatisticsAggregationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: S.optional(Tags),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2023-10-12/tags/{resourceArn}" }),
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
          tagKeys: StringList.pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/2023-10-12/tags/{resourceArn}" }),
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
        S.Struct({ type: BudgetActionType, thresholdPercentage: S.Number }),
      ).annotate({ identifier: "BudgetActionToRemove" });
  }
}
function __c50(j: number): any {
  switch (j) {
    case 0:
      return S.Array(BudgetActionToRemove);
    case 1:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          budgetId: S.String.pipe(T.HttpLabel("budgetId")),
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amz-Client-Token"),
            T.IdempotencyToken(),
          ),
          displayName: S.optional(S.String),
          description: S.optional(SensitiveString),
          status: S.optional(BudgetStatus),
          approximateDollarLimit: S.optional(S.Number),
          actionsToAdd: S.optional(BudgetActionsToAdd),
          actionsToRemove: S.optional(BudgetActionsToRemove),
          schedule: S.optional(BudgetSchedule),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/2023-10-12/farms/{farmId}/budgets/{budgetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateBudgetRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          displayName: S.optional(S.String),
          description: S.optional(SensitiveString),
          costScaleFactor: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/2023-10-12/farms/{farmId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateFarmRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          fleetId: S.String.pipe(T.HttpLabel("fleetId")),
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amz-Client-Token"),
            T.IdempotencyToken(),
          ),
          displayName: S.optional(S.String),
          description: S.optional(SensitiveString),
          roleArn: S.optional(S.String),
          minWorkerCount: S.optional(S.Number),
          maxWorkerCount: S.optional(S.Number),
          configuration: S.optional(FleetConfiguration),
          hostConfiguration: S.optional(HostConfiguration),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/2023-10-12/farms/{farmId}/fleets/{fleetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateFleetRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amz-Client-Token"),
            T.IdempotencyToken(),
          ),
          targetTaskRunStatus: S.optional(JobTargetTaskRunStatus),
          priority: S.optional(S.Number),
          maxFailedTasksCount: S.optional(S.Number),
          maxRetriesPerTask: S.optional(S.Number),
          lifecycleStatus: S.optional(UpdateJobLifecycleStatus),
          maxWorkerCount: S.optional(S.Number),
          name: S.optional(S.String),
          description: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateJobRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          limitId: S.String.pipe(T.HttpLabel("limitId")),
          displayName: S.optional(S.String),
          description: S.optional(SensitiveString),
          maxCount: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/2023-10-12/farms/{farmId}/limits/{limitId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateLimitRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          monitorId: S.String.pipe(T.HttpLabel("monitorId")),
          subdomain: S.optional(S.String),
          displayName: S.optional(S.String),
          roleArn: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/2023-10-12/monitors/{monitorId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateMonitorRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          monitorId: S.String.pipe(T.HttpLabel("monitorId")),
          settings: SettingsMap,
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/2023-10-12/monitors/{monitorId}/settings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateMonitorSettingsRequest",
      });
  }
}
function __c51(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amz-Client-Token"),
            T.IdempotencyToken(),
          ),
          displayName: S.optional(S.String),
          description: S.optional(SensitiveString),
          defaultBudgetAction: S.optional(DefaultQueueBudgetAction),
          jobAttachmentSettings: S.optional(JobAttachmentSettings),
          roleArn: S.optional(S.String),
          jobRunAsUser: S.optional(JobRunAsUser),
          requiredFileSystemLocationNamesToAdd: S.optional(RequiredFileSystemLocationNames),
          requiredFileSystemLocationNamesToRemove: S.optional(RequiredFileSystemLocationNames),
          allowedStorageProfileIdsToAdd: S.optional(AllowedStorageProfileIds),
          allowedStorageProfileIdsToRemove: S.optional(AllowedStorageProfileIds),
          schedulingConfiguration: S.optional(SchedulingConfiguration),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/2023-10-12/farms/{farmId}/queues/{queueId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateQueueRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          queueEnvironmentId: S.String.pipe(T.HttpLabel("queueEnvironmentId")),
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amz-Client-Token"),
            T.IdempotencyToken(),
          ),
          priority: S.optional(S.Number),
          templateType: S.optional(EnvironmentTemplateType),
          template: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/environments/{queueEnvironmentId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateQueueEnvironmentRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          fleetId: S.String.pipe(T.HttpLabel("fleetId")),
          status: UpdateQueueFleetAssociationStatus,
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/2023-10-12/farms/{farmId}/queue-fleet-associations/{queueId}/{fleetId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateQueueFleetAssociationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          limitId: S.String.pipe(T.HttpLabel("limitId")),
          status: UpdateQueueLimitAssociationStatus,
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/2023-10-12/farms/{farmId}/queue-limit-associations/{queueId}/{limitId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateQueueLimitAssociationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          sessionId: S.String.pipe(T.HttpLabel("sessionId")),
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amz-Client-Token"),
            T.IdempotencyToken(),
          ),
          targetLifecycleStatus: SessionLifecycleTargetStatus,
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/sessions/{sessionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateSessionRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          stepId: S.String.pipe(T.HttpLabel("stepId")),
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amz-Client-Token"),
            T.IdempotencyToken(),
          ),
          targetTaskRunStatus: StepTargetTaskRunStatus,
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateStepRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          storageProfileId: S.String.pipe(T.HttpLabel("storageProfileId")),
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amz-Client-Token"),
            T.IdempotencyToken(),
          ),
          displayName: S.optional(S.String),
          osFamily: S.optional(StorageProfileOperatingSystemFamily),
          fileSystemLocationsToAdd: S.optional(FileSystemLocationsList),
          fileSystemLocationsToRemove: S.optional(FileSystemLocationsList),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/2023-10-12/farms/{farmId}/storage-profiles/{storageProfileId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateStorageProfileRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          queueId: S.String.pipe(T.HttpLabel("queueId")),
          jobId: S.String.pipe(T.HttpLabel("jobId")),
          stepId: S.String.pipe(T.HttpLabel("stepId")),
          taskId: S.String.pipe(T.HttpLabel("taskId")),
          clientToken: S.optional(S.String).pipe(
            T.HttpHeader("X-Amz-Client-Token"),
            T.IdempotencyToken(),
          ),
          targetRunStatus: TaskTargetRunStatus,
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/tasks/{taskId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateTaskRequest" });
  }
}
function __c52(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ name: S.String, value: S.Number })).annotate({
        identifier: "WorkerAmountCapability",
      });
    case 1:
      return S.Array(WorkerAmountCapability);
    case 2:
      return S.suspend(() =>
        S.Struct({ name: S.String, values: AttributeCapabilityValuesList }),
      ).annotate({
        identifier: "WorkerAttributeCapability",
      });
    case 3:
      return S.Array(WorkerAttributeCapability);
    case 4:
      return S.suspend(() =>
        S.Struct({
          amounts: WorkerAmountCapabilityList,
          attributes: WorkerAttributeCapabilityList,
        }),
      ).annotate({ identifier: "WorkerCapabilities" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          fleetId: S.String.pipe(T.HttpLabel("fleetId")),
          workerId: S.String.pipe(T.HttpLabel("workerId")),
          status: S.optional(UpdatedWorkerStatus),
          capabilities: S.optional(WorkerCapabilities),
          hostProperties: S.optional(HostPropertiesRequest),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateWorkerRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          log: S.optional(LogConfiguration),
          hostConfiguration: S.optional(HostConfiguration),
        }),
      ).annotate({ identifier: "UpdateWorkerResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          completedStatus: S.optional(CompletedStatus),
          processExitCode: S.optional(S.Number),
          progressMessage: S.optional(SensitiveString),
          startedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          progressPercent: S.optional(S.Number),
          manifests: S.optional(TaskRunManifestPropertiesListRequest),
        }),
      ).annotate({ identifier: "UpdatedSessionActionInfo" });
  }
}
function __c53(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ UpdatedSessionActionInfo.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          farmId: S.String.pipe(T.HttpLabel("farmId")),
          fleetId: S.String.pipe(T.HttpLabel("fleetId")),
          workerId: S.String.pipe(T.HttpLabel("workerId")),
          updatedSessionActions: S.optional(UpdatedSessionActions),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/schedule",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateWorkerScheduleRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ sessionActionId: S.String, definition: AssignedSessionActionDefinition }),
      ).annotate({ identifier: "AssignedSessionAction" });
    case 3:
      return S.Array(AssignedSessionAction);
    case 4:
      return S.suspend(() =>
        S.Struct({
          queueId: S.String,
          jobId: S.String,
          sessionActions: AssignedSessionActions,
          logConfiguration: LogConfiguration,
          metadata: S.optional(SessionMetadata),
        }),
      ).annotate({ identifier: "AssignedSession" });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ AssignedSession.pipe(S.optional));
    case 6:
      return S.Record(S.String, /*@__PURE__*/ SessionActionIdList.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          assignedSessions: AssignedSessions,
          cancelSessionActions: CancelSessionActions,
          desiredWorkerStatus: S.optional(DesiredWorkerStatus),
          updateIntervalSeconds: S.Number,
        }),
      ).annotate({
        identifier: "UpdateWorkerScheduleResponse",
      });
  }
}
function __c54(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 1:
      return S.Array(ValidationExceptionField);
  }
}
