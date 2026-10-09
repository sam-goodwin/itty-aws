import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Bedrock Data Automation Runtime",
  serviceShapeName: "AmazonBedrockKeystoneRuntimeService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "bedrock" });
const ver = /*@__PURE__*/ T.ServiceVersion("2024-06-13");
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
              `https://bedrock-data-automation-runtime-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://bedrock-data-automation-runtime-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://bedrock-data-automation-runtime.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://bedrock-data-automation-runtime.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
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
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type InvocationArn = string;
export interface GetDataAutomationStatusRequest {
  invocationArn: string;
}
export type AutomationJobStatus =
  | "Created"
  | "InProgress"
  | "Success"
  | "ServiceError"
  | "ClientError"
  | (string & {});
export type S3Uri = string;
export interface OutputConfiguration {
  s3Uri: string;
}
export interface GetDataAutomationStatusResponse {
  status?: AutomationJobStatus;
  errorType?: string;
  errorMessage?: string;
  outputConfiguration?: OutputConfiguration;
  jobSubmissionTime?: Date;
  jobCompletionTime?: Date;
  jobDurationInSeconds?: number;
}
export interface SyncInputConfiguration {
  bytes?: Uint8Array;
  s3Uri?: string;
}
export type DataAutomationArn = string;
export type DataAutomationStage = "LIVE" | "DEVELOPMENT" | (string & {});
export interface DataAutomationConfiguration {
  dataAutomationProjectArn: string;
  stage?: DataAutomationStage;
}
export type BlueprintArn = string;
export type BlueprintVersion = string;
export type BlueprintStage = "DEVELOPMENT" | "LIVE" | (string & {});
export interface Blueprint {
  blueprintArn: string;
  version?: string;
  stage?: BlueprintStage;
}
export type BlueprintList = Blueprint[];
export type DataAutomationProfileArn = string;
export type KMSKeyId = string;
export type EncryptionContextKey = string;
export type EncryptionContextValue = string;
export type EncryptionContextMap = { [key: string]: string | undefined };
export interface EncryptionConfiguration {
  kmsKeyId: string;
  kmsEncryptionContext?: { [key: string]: string | undefined };
}
export interface InvokeDataAutomationRequest {
  inputConfiguration: SyncInputConfiguration;
  dataAutomationConfiguration?: DataAutomationConfiguration;
  blueprints?: Blueprint[];
  dataAutomationProfileArn: string;
  encryptionConfiguration?: EncryptionConfiguration;
  outputConfiguration?: OutputConfiguration;
}
export type SemanticModality = "DOCUMENT" | "IMAGE" | "AUDIO" | "VIDEO" | (string & {});
export type CustomOutputStatus = "MATCH" | "NO_MATCH" | (string & {});
export interface OutputSegment {
  customOutputStatus?: CustomOutputStatus;
  customOutput?: string;
  standardOutput?: string;
}
export type OutputSegmentList = OutputSegment[];
export interface InvokeDataAutomationResponse {
  outputConfiguration?: OutputConfiguration;
  semanticModality: SemanticModality;
  outputSegments?: OutputSegment[];
}
export type IdempotencyToken = string;
export interface TimestampSegment {
  startTimeMillis: number;
  endTimeMillis: number;
}
export type VideoSegmentConfiguration = { timestampSegment: TimestampSegment };
export interface VideoAssetProcessingConfiguration {
  segmentConfiguration?: VideoSegmentConfiguration;
}
export interface AssetProcessingConfiguration {
  video?: VideoAssetProcessingConfiguration;
}
export interface InputConfiguration {
  s3Uri: string;
  assetProcessingConfiguration?: AssetProcessingConfiguration;
}
export interface EventBridgeConfiguration {
  eventBridgeEnabled: boolean;
}
export interface NotificationConfiguration {
  eventBridgeConfiguration: EventBridgeConfiguration;
}
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  key: string;
  value: string;
}
export type TagList = Tag[];
export interface InvokeDataAutomationAsyncRequest {
  clientToken?: string;
  inputConfiguration: InputConfiguration;
  outputConfiguration: OutputConfiguration;
  dataAutomationConfiguration?: DataAutomationConfiguration;
  encryptionConfiguration?: EncryptionConfiguration;
  notificationConfiguration?: NotificationConfiguration;
  blueprints?: Blueprint[];
  dataAutomationProfileArn: string;
  tags?: Tag[];
}
export interface InvokeDataAutomationAsyncResponse {
  invocationArn: string;
}
export type TaggableResourceArn = string;
export interface ListTagsForResourceRequest {
  resourceARN: string;
}
export interface ListTagsForResourceResponse {
  tags?: Tag[];
}
export interface TagResourceRequest {
  resourceARN: string;
  tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  resourceARN: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export type NonBlankString = string;
export type GetDataAutomationStatusError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * API used to get data automation status.
 */
export const getDataAutomationStatus: API.OperationMethod<
  GetDataAutomationStatusRequest,
  GetDataAutomationStatusResponse,
  GetDataAutomationStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<GetDataAutomationStatusRequest>,
  output: __S(2, __c0, 2) as any as S.Schema<GetDataAutomationStatusResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataAutomationStatus",
}));

export type InvokeDataAutomationError =
  | AccessDeniedException
  | InternalServerException
  | ServiceUnavailableException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sync API: Invoke data automation.
 */
export const invokeDataAutomation: API.OperationMethod<
  InvokeDataAutomationRequest,
  InvokeDataAutomationResponse,
  InvokeDataAutomationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9, __c1, 1) as any as S.Schema<InvokeDataAutomationRequest>,
  output: __S(12, __c1, 4) as any as S.Schema<InvokeDataAutomationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ServiceUnavailableException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InvokeDataAutomation",
}));

export type InvokeDataAutomationAsyncError =
  | AccessDeniedException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Async API: Invoke data automation.
 */
export const invokeDataAutomationAsync: API.OperationMethod<
  InvokeDataAutomationAsyncRequest,
  InvokeDataAutomationAsyncResponse,
  InvokeDataAutomationAsyncError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(22, __c2, 6) as any as S.Schema<InvokeDataAutomationAsyncRequest>,
  output: __S(23, __c2, 7) as any as S.Schema<InvokeDataAutomationAsyncResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InvokeDataAutomationAsync",
}));

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List tags for an Amazon Bedrock Data Automation resource
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(24, __c3, 0) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(25, __c3, 1) as any as S.Schema<ListTagsForResourceResponse>,
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

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Tag an Amazon Bedrock Data Automation resource
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(26, __c3, 2) as any as S.Schema<TagResourceRequest>,
  output: __S(27, __c3, 3) as any as S.Schema<TagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
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
 * Untag an Amazon Bedrock Data Automation resource
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(29, __c3, 5) as any as S.Schema<UntagResourceRequest>,
  output: __S(27, __c3, 3) as any as S.Schema<UntagResourceResponse>,
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

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ invocationArn: S.String.pipe(T.HttpLabel("invocationArn")) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetDataAutomationStatusRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ s3Uri: S.String })).annotate({
        identifier: "OutputConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String),
          errorType: S.optional(S.String),
          errorMessage: S.optional(S.String),
          outputConfiguration: S.optional(__S(1, __c0, 1)),
          jobSubmissionTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          jobCompletionTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          jobDurationInSeconds: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "GetDataAutomationStatusResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ bytes: S.optional(T.Blob), s3Uri: S.optional(S.String) }),
      ).annotate({ identifier: "SyncInputConfiguration" });
    case 4:
      return S.suspend(() =>
        S.Struct({ dataAutomationProjectArn: S.String, stage: S.optional(S.String) }),
      ).annotate({
        identifier: "DataAutomationConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          blueprintArn: S.String,
          version: S.optional(S.String),
          stage: S.optional(S.String),
        }),
      ).annotate({ identifier: "Blueprint" });
    case 6:
      return S.Array(__S(5, __c0, 5));
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ kmsKeyId: S.String, kmsEncryptionContext: S.optional(__S(7, __c0, 7)) }),
      ).annotate({ identifier: "EncryptionConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          inputConfiguration: __S(3, __c0, 3),
          dataAutomationConfiguration: S.optional(__S(4, __c0, 4)),
          blueprints: S.optional(__S(6, __c0, 6)),
          dataAutomationProfileArn: S.String,
          encryptionConfiguration: S.optional(__S(8, __c1, 0)),
          outputConfiguration: S.optional(__S(1, __c0, 1)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "InvokeDataAutomationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          customOutputStatus: S.optional(S.String),
          customOutput: S.optional(S.String),
          standardOutput: S.optional(S.String),
        }),
      ).annotate({ identifier: "OutputSegment" });
    case 3:
      return S.Array(__S(10, __c1, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          outputConfiguration: S.optional(__S(1, __c0, 1)),
          semanticModality: S.String,
          outputSegments: S.optional(__S(11, __c1, 3)),
        }),
      ).annotate({
        identifier: "InvokeDataAutomationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ startTimeMillis: S.Number, endTimeMillis: S.Number }),
      ).annotate({ identifier: "TimestampSegment" });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ timestampSegment: __S(13, __c1, 5) })]);
    case 7:
      return S.suspend(() =>
        S.Struct({ segmentConfiguration: S.optional(__S(14, __c1, 6)) }),
      ).annotate({
        identifier: "VideoAssetProcessingConfiguration",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ video: S.optional(__S(15, __c1, 7)) })).annotate({
        identifier: "AssetProcessingConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          s3Uri: S.String,
          assetProcessingConfiguration: S.optional(__S(16, __c2, 0)),
        }),
      ).annotate({ identifier: "InputConfiguration" });
    case 2:
      return S.suspend(() => S.Struct({ eventBridgeEnabled: S.Boolean })).annotate({
        identifier: "EventBridgeConfiguration",
      });
    case 3:
      return S.suspend(() => S.Struct({ eventBridgeConfiguration: __S(18, __c2, 2) })).annotate({
        identifier: "NotificationConfiguration",
      });
    case 4:
      return S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
        identifier: "Tag",
      });
    case 5:
      return S.Array(__S(20, __c2, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          inputConfiguration: __S(17, __c2, 1),
          outputConfiguration: __S(1, __c0, 1),
          dataAutomationConfiguration: S.optional(__S(4, __c0, 4)),
          encryptionConfiguration: S.optional(__S(8, __c1, 0)),
          notificationConfiguration: S.optional(__S(19, __c2, 3)),
          blueprints: S.optional(__S(6, __c0, 6)),
          dataAutomationProfileArn: S.String,
          tags: S.optional(__S(21, __c2, 5)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "InvokeDataAutomationAsyncRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ invocationArn: S.String })).annotate({
        identifier: "InvokeDataAutomationAsyncResponse",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ resourceARN: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(21, __c2, 5)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceARN: S.String, tags: __S(21, __c2, 5) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TagResourceResponse",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({ resourceARN: S.String, tagKeys: __S(28, __c3, 4) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
