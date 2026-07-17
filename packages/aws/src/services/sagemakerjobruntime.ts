import * as HttpClient from "effect/unstable/http/HttpClient";
import * as S from "@distilled.cloud/core/schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import type { Region } from "../region.ts";
const svc = T.AwsApiService({
  sdkId: "SagemakerJobRuntime",
  serviceShapeName: "AgenticRFTRuntimeService",
});
const auth = T.AwsAuthSigv4({ name: "sagemaker" });
const ver = T.ServiceVersion("2026-02-01");
const proto = T.AwsProtocolsRestJson1();
const rules = T.EndpointResolver((p, _) => {
  const { UseFIPS = false, Endpoint, Region } = p;
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
      return err(
        "Invalid Configuration: FIPS and custom endpoint are not supported",
      );
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (_.getAttr(PartitionResult, "name") === "aws" && UseFIPS === false) {
          return e(
            `https://job-runtime.sagemaker.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-cn" &&
          UseFIPS === false
        ) {
          return e(
            `https://job-runtime.sagemaker.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (
          _.getAttr(PartitionResult, "name") === "aws-us-gov" &&
          UseFIPS === false
        ) {
          return e(
            `https://job-runtime.sagemaker.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (UseFIPS === true) {
          return e(
            `https://job-runtime.sagemaker-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        return e(
          `https://job-runtime.sagemaker.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

//# Newtypes
export type JobArn = string;
export type TrajectoryId = string;
export type FailureReason = string;

//# Schemas
export type CompletionStatus = "ready" | "failed" | (string & {});
export const CompletionStatus = /*@__PURE__*/ /*#__PURE__*/ S.String;
export interface CompleteRolloutRequest {
  JobArn: string;
  TrajectoryId: string;
  Status?: CompletionStatus;
  ClientToken?: string;
}
export const CompleteRolloutRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      JobArn: S.String.pipe(T.HttpHeader("X-Amzn-SageMaker-Job-Arn")),
      TrajectoryId: S.String,
      Status: S.optional(CompletionStatus),
      ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    }).pipe(
      T.all(
        T.Http({ method: "POST", uri: "/complete-rollout" }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
).annotate({
  identifier: "CompleteRolloutRequest",
}) as any as S.Schema<CompleteRolloutRequest>;
export interface CompleteRolloutResponse {}
export const CompleteRolloutResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () => S.Struct({}),
).annotate({
  identifier: "CompleteRolloutResponse",
}) as any as S.Schema<CompleteRolloutResponse>;
export interface SampleRequest {
  JobArn: string;
  TrajectoryId: string;
  Body: T.StreamingInputBody;
}
export const SampleRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    JobArn: S.String.pipe(T.HttpHeader("X-Amzn-SageMaker-Job-Arn")),
    TrajectoryId: S.String.pipe(T.HttpHeader("X-Amzn-SageMaker-Trajectory-Id")),
    Body: T.StreamingInput.pipe(T.HttpPayload()),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/sample" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({ identifier: "SampleRequest" }) as any as S.Schema<SampleRequest>;
export interface SampleResponse {
  ContentType?: string;
  Body: T.StreamingOutputBody;
}
export const SampleResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    ContentType: S.optional(S.String).pipe(T.HttpHeader("Content-Type")),
    Body: T.StreamingOutput.pipe(T.HttpPayload()),
  }),
).annotate({ identifier: "SampleResponse" }) as any as S.Schema<SampleResponse>;
export interface SampleWithResponseStreamRequest {
  JobArn: string;
  TrajectoryId: string;
  Body: T.StreamingInputBody;
}
export const SampleWithResponseStreamRequest =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      JobArn: S.String.pipe(T.HttpHeader("X-Amzn-SageMaker-Job-Arn")),
      TrajectoryId: S.String.pipe(
        T.HttpHeader("X-Amzn-SageMaker-Trajectory-Id"),
      ),
      Body: T.StreamingInput.pipe(T.HttpPayload()),
    }).pipe(
      T.all(
        T.Http({ method: "POST", uri: "/sample-with-response-stream" }),
        svc,
        auth,
        proto,
        ver,
        rules,
      ),
    ),
  ).annotate({
    identifier: "SampleWithResponseStreamRequest",
  }) as any as S.Schema<SampleWithResponseStreamRequest>;
export interface SampleWithResponseStreamResponse {
  ContentType?: string;
  Body: T.StreamingOutputBody;
}
export const SampleWithResponseStreamResponse =
  /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
    S.Struct({
      ContentType: S.optional(S.String).pipe(T.HttpHeader("Content-Type")),
      Body: T.StreamingOutput.pipe(T.HttpPayload()),
    }),
  ).annotate({
    identifier: "SampleWithResponseStreamResponse",
  }) as any as S.Schema<SampleWithResponseStreamResponse>;
export type DoubleList = number[];
export const DoubleList = /*@__PURE__*/ /*#__PURE__*/ S.Array(S.Number);
export interface UpdateRewardRequest {
  JobArn: string;
  TrajectoryId: string;
  Rewards: number[];
  ClientToken?: string;
}
export const UpdateRewardRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    JobArn: S.String.pipe(T.HttpHeader("X-Amzn-SageMaker-Job-Arn")),
    TrajectoryId: S.String,
    Rewards: DoubleList,
    ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/update-reward" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateRewardRequest",
}) as any as S.Schema<UpdateRewardRequest>;
export interface UpdateRewardResponse {}
export const UpdateRewardResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({}),
).annotate({
  identifier: "UpdateRewardResponse",
}) as any as S.Schema<UpdateRewardResponse>;

//# Errors
export class AccessDeniedException extends S.TaggedErrorClass<AccessDeniedException>()(
  "AccessDeniedException",
  { Message: S.String },
).pipe(C.withAuthError) {}
export class ConflictException extends S.TaggedErrorClass<ConflictException>()(
  "ConflictException",
  { Message: S.String },
).pipe(C.withConflictError) {}
export class InternalServiceError extends S.TaggedErrorClass<InternalServiceError>()(
  "InternalServiceError",
  { Message: S.String },
  T.Retryable(),
).pipe(C.withServerError, C.withRetryableError) {}
export class ResourceNotFoundException extends S.TaggedErrorClass<ResourceNotFoundException>()(
  "ResourceNotFoundException",
  { Message: S.String },
).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException extends S.TaggedErrorClass<ServiceQuotaExceededException>()(
  "ServiceQuotaExceededException",
  { Message: S.String },
).pipe(C.withQuotaError) {}
export class ThrottlingException extends S.TaggedErrorClass<ThrottlingException>()(
  "ThrottlingException",
  { Message: S.String },
  T.Retryable(),
).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException extends S.TaggedErrorClass<ValidationException>()(
  "ValidationException",
  { Message: S.String },
).pipe(C.withBadRequestError) {}

//# Operations
export type CompleteRolloutError =
  | AccessDeniedException
  | ConflictException
  | InternalServiceError
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Marks a rollout as complete, indicating that no further turns will be appended
 * to the trajectory. After calling this operation, the trajectory is sealed and
 * eligible for reward submission via the UpdateReward operation.
 */
export const completeRollout: API.OperationMethod<
  CompleteRolloutRequest,
  CompleteRolloutResponse,
  CompleteRolloutError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CompleteRolloutRequest,
  output: CompleteRolloutResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServiceError,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  operationName: "CompleteRollout",
}));
export type SampleError =
  | AccessDeniedException
  | InternalServiceError
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sends an inference request to the model during a job execution. The request
 * and response bodies are forwarded to and from the model without modification.
 * Each turn (prompt and response) is captured for later use.
 */
export const sample: API.OperationMethod<
  SampleRequest,
  SampleResponse,
  SampleError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SampleRequest,
  output: SampleResponse,
  errors: [
    AccessDeniedException,
    InternalServiceError,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  operationName: "Sample",
}));
export type SampleWithResponseStreamError =
  | AccessDeniedException
  | InternalServiceError
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sends a streaming inference request to the model during a job execution.
 * Returns the response as a stream of payload chunks. Each turn is captured
 * for later use.
 */
export const sampleWithResponseStream: API.OperationMethod<
  SampleWithResponseStreamRequest,
  SampleWithResponseStreamResponse,
  SampleWithResponseStreamError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SampleWithResponseStreamRequest,
  output: SampleWithResponseStreamResponse,
  errors: [
    AccessDeniedException,
    InternalServiceError,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  operationName: "SampleWithResponseStream",
}));
export type UpdateRewardError =
  | AccessDeniedException
  | ConflictException
  | InternalServiceError
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the reward values for a trajectory and transitions it to
 * reward-received status, signaling that it is eligible for processing. Call this
 * operation after CompleteRollout to provide the computed reward scores.
 */
export const updateReward: API.OperationMethod<
  UpdateRewardRequest,
  UpdateRewardResponse,
  UpdateRewardError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateRewardRequest,
  output: UpdateRewardResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServiceError,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  operationName: "UpdateReward",
}));
