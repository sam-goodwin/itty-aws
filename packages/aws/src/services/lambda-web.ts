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
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "Lambda Web", serviceShapeName: "LambdaWeb" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "lambda" });
const ver = /*@__PURE__*/ T.ServiceVersion("2025-03-07");
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
              `https://lambda-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://lambda-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://lambda.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://lambda.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
      serviceCode: /*@__PURE__*/ S.optional(S.String),
      quotaCode: /*@__PURE__*/ S.optional(S.String),
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
      serviceCode: /*@__PURE__*/ S.optional(S.String),
      quotaCode: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.HttpError(429),
      /*@__PURE__*/ T.Retryable({ throttling: true }),
    ),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type FunctionName = string;
export type Description = string;
export type KmsKeyArn = string;
export interface S3Object {
  bucket: string;
  key: string;
  versionId?: string;
}
export interface CodeConfig {
  s3Object: S3Object;
}
export interface RuntimeConfig {
  runtime: string;
}
export interface BuildConfig {
  codeConfig: CodeConfig;
  runtimeConfig: RuntimeConfig;
}
export type RoleArn = string;
export type EnvironmentVariables = { [key: string]: string | undefined };
export type ApplicationLogLevel =
  | "TRACE"
  | "DEBUG"
  | "INFO"
  | "WARN"
  | "ERROR"
  | "FATAL"
  | (string & {});
export type SystemLogLevel = "DEBUG" | "INFO" | "WARN" | (string & {});
export interface LoggingConfig {
  logGroup?: string;
  applicationLogLevel?: ApplicationLogLevel;
  systemLogLevel?: SystemLogLevel;
}
export interface TelemetryConfig {
  loggingConfig?: LoggingConfig;
}
export interface ServiceConfig {
  executionRoleArn: string;
  timeoutSeconds?: number;
  maxConcurrencyPerEnvironment?: number;
  environmentVariables?: { [key: string]: string | undefined };
  telemetryConfig?: TelemetryConfig;
}
export interface RevisionConfig {
  description?: string;
  kmsKeyArn?: string;
  buildConfig: BuildConfig;
  serviceConfig: ServiceConfig;
}
export type EndpointName = string;
export type EndpointType = "HomeRegion" | "MultiRegion" | "PerRegion" | (string & {});
export type AuthType = "ApplicationManaged" | "IamAuth" | (string & {});
export type AutoDeploymentMode = "LatestRevision" | "Disabled" | (string & {});
export type Region = string;
export type RegionList = string[];
export interface ScalingConfig {
  maxEnvironments?: number;
}
export interface ThrottleConfig {
  rateLimit?: number;
}
export interface EndpointConfig {
  endpointName: string;
  description?: string;
  endpointType: EndpointType;
  authType: AuthType;
  autoDeploymentMode?: AutoDeploymentMode;
  regions?: string[];
  scalingConfig?: ScalingConfig;
  throttleConfig?: ThrottleConfig;
}
export type TagKey = string;
export type Tags = { [key: string]: string | undefined };
export interface CreateWebFunctionRequest {
  functionName: string;
  revisionConfig?: RevisionConfig;
  endpointConfig?: EndpointConfig;
  tags?: { [key: string]: string | undefined };
}
export type FunctionArn = string;
export type FunctionState = "Pending" | "Active" | "Failed" | "Deleting" | (string & {});
export type RevisionArn = string;
export type RevisionId = string;
export type RevisionState = "Pending" | "Active" | "Failed" | (string & {});
export interface FunctionRevisionSummary {
  revisionArn: string;
  revisionId: string;
  description?: string;
  state: RevisionState;
  stateReason: string;
  createdAt: Date;
}
export type EndpointArn = string;
export type DomainName = string;
export interface RevisionWeight {
  revisionId: string;
  weight: number;
}
export type RevisionWeightList = RevisionWeight[];
export type EndpointState = "Pending" | "Active" | "Failed" | "Deleting" | (string & {});
export type EndpointUpdateStatus = "InProgress" | "Successful" | "Failed" | (string & {});
export interface FunctionEndpointSummary {
  endpointArn: string;
  endpointName: string;
  description?: string;
  endpointType: EndpointType;
  domainName: string;
  authType: AuthType;
  autoDeploymentMode: AutoDeploymentMode;
  revisionWeights: RevisionWeight[];
  regions: string[];
  scalingConfig?: ScalingConfig;
  throttleConfig?: ThrottleConfig;
  state: EndpointState;
  stateReason: string;
  updateStatus?: EndpointUpdateStatus;
  updateStatusReason?: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface CreateWebFunctionResponse {
  functionName: string;
  functionArn: string;
  state: FunctionState;
  stateReason: string;
  createdAt: Date;
  updatedAt: Date;
  revision?: FunctionRevisionSummary;
  endpoint?: FunctionEndpointSummary;
  tags?: { [key: string]: string | undefined };
}
export interface CreateWebFunctionEndpointRequest {
  functionName: string;
  endpointName: string;
  description?: string;
  endpointType: EndpointType;
  authType: AuthType;
  autoDeploymentMode?: AutoDeploymentMode;
  revisionWeights?: RevisionWeight[];
  regions?: string[];
  scalingConfig?: ScalingConfig;
  throttleConfig?: ThrottleConfig;
}
export interface RegionalEndpoint {
  domainName?: string;
  authType: AuthType;
  revisionWeights: RevisionWeight[];
  scalingConfig?: ScalingConfig;
  throttleConfig?: ThrottleConfig;
  state: EndpointState;
  stateReason: string;
  updateStatus?: EndpointUpdateStatus;
  updateStatusReason?: string;
}
export type RegionalEndpoints = { [key: string]: RegionalEndpoint | undefined };
export interface CreateWebFunctionEndpointResponse {
  functionArn: string;
  endpointArn: string;
  endpointName: string;
  description?: string;
  endpointType: EndpointType;
  domainName: string;
  authType: AuthType;
  autoDeploymentMode: AutoDeploymentMode;
  revisionWeights: RevisionWeight[];
  regions: string[];
  scalingConfig?: ScalingConfig;
  throttleConfig?: ThrottleConfig;
  state: EndpointState;
  stateReason: string;
  updateStatus?: EndpointUpdateStatus;
  updateStatusReason?: string;
  regionalEndpoints: { [key: string]: RegionalEndpoint | undefined };
  createdAt: Date;
  updatedAt: Date;
}
export interface CreateWebFunctionRevisionRequest {
  functionName: string;
  description?: string;
  kmsKeyArn?: string;
  buildConfig: BuildConfig;
  serviceConfig: ServiceConfig;
}
export interface RevisionError {
  attribute: string;
  errorCode: string;
  errorMessage: string;
}
export type RevisionErrors = RevisionError[];
export interface CreateWebFunctionRevisionResponse {
  functionArn: string;
  revisionArn: string;
  revisionId: string;
  description?: string;
  kmsKeyArn?: string;
  buildConfig: BuildConfig;
  serviceConfig: ServiceConfig;
  state: RevisionState;
  stateReason: string;
  errors?: RevisionError[];
  createdAt: Date;
}
export type ResourceArn = string;
export type PolicyRevisionId = string;
export interface DeleteResourcePolicyRequest {
  resourceArn: string;
  revisionId?: string;
}
export interface DeleteResourcePolicyResponse {}
export interface DeleteWebFunctionRequest {
  functionName: string;
}
export interface DeleteWebFunctionResponse {}
export interface DeleteWebFunctionEndpointRequest {
  functionName: string;
  endpointName: string;
}
export interface DeleteWebFunctionEndpointResponse {}
export interface DeleteWebFunctionRevisionRequest {
  functionName: string;
  revisionId: string;
}
export interface DeleteWebFunctionRevisionResponse {}
export interface GetResourcePolicyRequest {
  resourceArn: string;
}
export type ResourcePolicy = string;
export interface GetResourcePolicyResponse {
  policy: string;
  revisionId: string;
}
export interface GetWebAccountSettingsRequest {}
export interface AccountQuotas {
  maxTotalArmVCpus: number;
  maxTotalRateLimit: number;
  maxRevisionsPerFunction: number;
  maxEndpointsPerFunction: number;
}
export interface AccountUsage {
  functionCount: number;
}
export interface GetWebAccountSettingsResponse {
  accountQuotas: AccountQuotas;
  accountUsage: AccountUsage;
}
export interface GetWebFunctionRequest {
  functionName: string;
}
export interface GetWebFunctionResponse {
  functionName: string;
  functionArn: string;
  state: FunctionState;
  stateReason: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface GetWebFunctionEndpointRequest {
  functionName: string;
  endpointName: string;
}
export interface GetWebFunctionEndpointResponse {
  functionArn: string;
  endpointArn: string;
  endpointName: string;
  description?: string;
  endpointType: EndpointType;
  domainName: string;
  authType: AuthType;
  autoDeploymentMode: AutoDeploymentMode;
  revisionWeights: RevisionWeight[];
  regions: string[];
  scalingConfig?: ScalingConfig;
  throttleConfig?: ThrottleConfig;
  state: EndpointState;
  stateReason: string;
  updateStatus?: EndpointUpdateStatus;
  updateStatusReason?: string;
  regionalEndpoints: { [key: string]: RegionalEndpoint | undefined };
  createdAt: Date;
  updatedAt: Date;
}
export interface GetWebFunctionRevisionRequest {
  functionName: string;
  revisionId: string;
}
export interface GetWebFunctionRevisionResponse {
  functionArn: string;
  revisionArn: string;
  revisionId: string;
  description?: string;
  kmsKeyArn?: string;
  buildConfig: BuildConfig;
  serviceConfig: ServiceConfig;
  state: RevisionState;
  stateReason: string;
  errors?: RevisionError[];
  createdAt: Date;
}
export interface ListTagsRequest {
  resource: string;
}
export interface ListTagsResponse {
  tags?: { [key: string]: string | undefined };
}
export type FilterValueList = string[];
export interface Filter {
  name: string;
  values: string[];
}
export type FilterList = Filter[];
export type MaxResults = number;
export type NextToken = string;
export interface ListWebFunctionEndpointsRequest {
  functionName: string;
  filters?: Filter[];
  maxResults?: number;
  nextToken?: string;
}
export type FunctionEndpointSummaryList = FunctionEndpointSummary[];
export interface ListWebFunctionEndpointsResponse {
  endpoints: FunctionEndpointSummary[];
  nextToken?: string;
}
export interface ListWebFunctionRevisionsRequest {
  functionName: string;
  filters?: Filter[];
  maxResults?: number;
  nextToken?: string;
}
export type FunctionRevisionSummaryList = FunctionRevisionSummary[];
export interface ListWebFunctionRevisionsResponse {
  revisions: FunctionRevisionSummary[];
  nextToken?: string;
}
export interface ListWebFunctionsRequest {
  filters?: Filter[];
  maxResults?: number;
  nextToken?: string;
}
export interface FunctionSummary {
  functionName: string;
  functionArn: string;
  state: FunctionState;
  stateReason: string;
  createdAt: Date;
  updatedAt: Date;
}
export type FunctionSummaryList = FunctionSummary[];
export interface ListWebFunctionsResponse {
  functions: FunctionSummary[];
  nextToken?: string;
}
export interface PutResourcePolicyRequest {
  resourceArn: string;
  policy: string;
  revisionId?: string;
}
export interface PutResourcePolicyResponse {
  policy: string;
  revisionId: string;
}
export interface TagResourceRequest {
  resource: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  resource: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateWebFunctionEndpointRequest {
  functionName: string;
  endpointName: string;
  description?: string;
  authType?: AuthType;
  autoDeploymentMode?: AutoDeploymentMode;
  revisionWeights?: RevisionWeight[];
  scalingConfig?: ScalingConfig;
  throttleConfig?: ThrottleConfig;
}
export interface UpdateWebFunctionEndpointResponse {
  functionArn: string;
  endpointArn: string;
  endpointName: string;
  description?: string;
  endpointType: EndpointType;
  domainName: string;
  authType: AuthType;
  autoDeploymentMode: AutoDeploymentMode;
  revisionWeights: RevisionWeight[];
  regions: string[];
  scalingConfig?: ScalingConfig;
  throttleConfig?: ThrottleConfig;
  state: EndpointState;
  stateReason: string;
  updateStatus?: EndpointUpdateStatus;
  updateStatusReason?: string;
  regionalEndpoints: { [key: string]: RegionalEndpoint | undefined };
  createdAt: Date;
  updatedAt: Date;
}
export type CreateWebFunctionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a web function with an initial revision and endpoint. To create a web function, you provide the function name, revision configuration (code and service settings), and endpoint configuration.
 *
 * To use this operation, you must have the `CreateWebFunction` permission on the web function. You don't need separate permissions for the initial revision or endpoint.
 *
 * This API is experimental and for internal AWS use only. It is not yet available to external customers.
 */
export const createWebFunction: API.OperationMethod<
  CreateWebFunctionRequest,
  CreateWebFunctionResponse,
  CreateWebFunctionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14) as any as S.Schema<CreateWebFunctionRequest>,
  output: __S(19) as any as S.Schema<CreateWebFunctionResponse>,
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
  operationName: "CreateWebFunction",
}));

export type CreateWebFunctionEndpointError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an endpoint for a web function. An endpoint exposes the web function over HTTPS and routes traffic to one or more revisions.
 *
 * To use this operation, you must have the `CreateWebFunctionEndpoint` permission on the web function, not on the endpoint being created.
 *
 * This API is experimental and for internal AWS use only. It is not yet available to external customers.
 */
export const createWebFunctionEndpoint: API.OperationMethod<
  CreateWebFunctionEndpointRequest,
  CreateWebFunctionEndpointResponse,
  CreateWebFunctionEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(20) as any as S.Schema<CreateWebFunctionEndpointRequest>,
  output: __S(23) as any as S.Schema<CreateWebFunctionEndpointResponse>,
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
  operationName: "CreateWebFunctionEndpoint",
}));

export type CreateWebFunctionRevisionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an immutable revision for a web function. A revision represents a specific version of the function code and configuration.
 *
 * To use this operation, you must have the `CreateWebFunctionRevision` permission on the web function, not on the revision being created.
 *
 * This API is experimental and for internal AWS use only. It is not yet available to external customers.
 */
export const createWebFunctionRevision: API.OperationMethod<
  CreateWebFunctionRevisionRequest,
  CreateWebFunctionRevisionResponse,
  CreateWebFunctionRevisionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(24) as any as S.Schema<CreateWebFunctionRevisionRequest>,
  output: __S(27) as any as S.Schema<CreateWebFunctionRevisionResponse>,
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
  operationName: "CreateWebFunctionRevision",
}));

export type DeleteResourcePolicyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes the resource-based policy from a web function.
 *
 * This API is experimental and for internal AWS use only. It is not yet available to external customers.
 */
export const deleteResourcePolicy: API.OperationMethod<
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
  DeleteResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(28) as any as S.Schema<DeleteResourcePolicyRequest>,
  output: __S(29) as any as S.Schema<DeleteResourcePolicyResponse>,
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
  operationName: "DeleteResourcePolicy",
}));

export type DeleteWebFunctionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a web function and all of its associated revisions and endpoints.
 *
 * To use this operation, you must have the `DeleteWebFunction` permission on the web function. You don't need the `DeleteWebFunctionRevision` or `DeleteWebFunctionEndpoint` permission.
 *
 * This API is experimental and for internal AWS use only. It is not yet available to external customers.
 */
export const deleteWebFunction: API.OperationMethod<
  DeleteWebFunctionRequest,
  DeleteWebFunctionResponse,
  DeleteWebFunctionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30) as any as S.Schema<DeleteWebFunctionRequest>,
  output: __S(29) as any as S.Schema<DeleteWebFunctionResponse>,
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
  operationName: "DeleteWebFunction",
}));

export type DeleteWebFunctionEndpointError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a web function endpoint.
 *
 * This API is experimental and for internal AWS use only. It is not yet available to external customers.
 */
export const deleteWebFunctionEndpoint: API.OperationMethod<
  DeleteWebFunctionEndpointRequest,
  DeleteWebFunctionEndpointResponse,
  DeleteWebFunctionEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(31) as any as S.Schema<DeleteWebFunctionEndpointRequest>,
  output: __S(32) as any as S.Schema<DeleteWebFunctionEndpointResponse>,
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
  operationName: "DeleteWebFunctionEndpoint",
}));

export type DeleteWebFunctionRevisionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a web function revision. You cannot delete a revision that is currently serving traffic on an endpoint.
 *
 * This API is experimental and for internal AWS use only. It is not yet available to external customers.
 */
export const deleteWebFunctionRevision: API.OperationMethod<
  DeleteWebFunctionRevisionRequest,
  DeleteWebFunctionRevisionResponse,
  DeleteWebFunctionRevisionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(33) as any as S.Schema<DeleteWebFunctionRevisionRequest>,
  output: __S(32) as any as S.Schema<DeleteWebFunctionRevisionResponse>,
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
  operationName: "DeleteWebFunctionRevision",
}));

export type GetResourcePolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the resource-based policy attached to a web function.
 *
 * This API is experimental and for internal AWS use only. It is not yet available to external customers.
 */
export const getResourcePolicy: API.OperationMethod<
  GetResourcePolicyRequest,
  GetResourcePolicyResponse,
  GetResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(34) as any as S.Schema<GetResourcePolicyRequest>,
  output: __S(35) as any as S.Schema<GetResourcePolicyResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourcePolicy",
}));

export type GetWebAccountSettingsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves details about your AWS Lambda Web Functions account settings for the current AWS Region, including the quotas that apply to web functions and your current usage.
 *
 * This API is experimental and for internal AWS use only. It is not yet available to external customers.
 */
export const getWebAccountSettings: API.OperationMethod<
  GetWebAccountSettingsRequest,
  GetWebAccountSettingsResponse,
  GetWebAccountSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(36) as any as S.Schema<GetWebAccountSettingsRequest>,
  output: __S(39) as any as S.Schema<GetWebAccountSettingsResponse>,
  errors: [AccessDeniedException, InternalServerException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWebAccountSettings",
}));

export type GetWebFunctionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details about a web function, including its current state and configuration.
 *
 * This API is experimental and for internal AWS use only. It is not yet available to external customers.
 */
export const getWebFunction: API.OperationMethod<
  GetWebFunctionRequest,
  GetWebFunctionResponse,
  GetWebFunctionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(40) as any as S.Schema<GetWebFunctionRequest>,
  output: __S(41) as any as S.Schema<GetWebFunctionResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWebFunction",
}));

export type GetWebFunctionEndpointError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details about a web function endpoint, including its current state, configuration, and domain name.
 *
 * This API is experimental and for internal AWS use only. It is not yet available to external customers.
 */
export const getWebFunctionEndpoint: API.OperationMethod<
  GetWebFunctionEndpointRequest,
  GetWebFunctionEndpointResponse,
  GetWebFunctionEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(42) as any as S.Schema<GetWebFunctionEndpointRequest>,
  output: __S(23) as any as S.Schema<GetWebFunctionEndpointResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWebFunctionEndpoint",
}));

export type GetWebFunctionRevisionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details about a web function revision, including its state and configuration.
 *
 * This API is experimental and for internal AWS use only. It is not yet available to external customers.
 */
export const getWebFunctionRevision: API.OperationMethod<
  GetWebFunctionRevisionRequest,
  GetWebFunctionRevisionResponse,
  GetWebFunctionRevisionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(43) as any as S.Schema<GetWebFunctionRevisionRequest>,
  output: __S(27) as any as S.Schema<GetWebFunctionRevisionResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWebFunctionRevision",
}));

export type ListTagsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of tags applied to a web function.
 *
 * This API is experimental and for internal AWS use only. It is not yet available to external customers.
 */
export const listTags: API.OperationMethod<
  ListTagsRequest,
  ListTagsResponse,
  ListTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(44) as any as S.Schema<ListTagsRequest>,
  output: __S(45) as any as S.Schema<ListTagsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTags",
}));

export type ListWebFunctionEndpointsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists endpoints for a web function. We recommend using pagination to ensure that the operation returns quickly and successfully.
 *
 * This API is experimental and for internal AWS use only. It is not yet available to external customers.
 */
export const listWebFunctionEndpoints: API.PaginatedOperationMethod<
  ListWebFunctionEndpointsRequest,
  ListWebFunctionEndpointsResponse,
  ListWebFunctionEndpointsError,
  Credentials | HttpClient.HttpClient,
  FunctionEndpointSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(48) as any as S.Schema<ListWebFunctionEndpointsRequest>,
  output: __S(50) as any as S.Schema<ListWebFunctionEndpointsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWebFunctionEndpoints",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "endpoints",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListWebFunctionRevisionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists revisions for a web function. We recommend using pagination to ensure that the operation returns quickly and successfully.
 *
 * This API is experimental and for internal AWS use only. It is not yet available to external customers.
 */
export const listWebFunctionRevisions: API.PaginatedOperationMethod<
  ListWebFunctionRevisionsRequest,
  ListWebFunctionRevisionsResponse,
  ListWebFunctionRevisionsError,
  Credentials | HttpClient.HttpClient,
  FunctionRevisionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(51) as any as S.Schema<ListWebFunctionRevisionsRequest>,
  output: __S(53) as any as S.Schema<ListWebFunctionRevisionsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWebFunctionRevisions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "revisions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListWebFunctionsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists web functions in your account. We recommend using pagination to ensure that the operation returns quickly and successfully.
 *
 * This API is experimental and for internal AWS use only. It is not yet available to external customers.
 */
export const listWebFunctions: API.PaginatedOperationMethod<
  ListWebFunctionsRequest,
  ListWebFunctionsResponse,
  ListWebFunctionsError,
  Credentials | HttpClient.HttpClient,
  FunctionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(54) as any as S.Schema<ListWebFunctionsRequest>,
  output: __S(56) as any as S.Schema<ListWebFunctionsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWebFunctions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "functions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type PutResourcePolicyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds or updates a resource-based policy on a web function. A resource-based policy grants permissions to other AWS accounts or services to perform actions on the web function.
 *
 * This API is experimental and for internal AWS use only. It is not yet available to external customers.
 */
export const putResourcePolicy: API.OperationMethod<
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  PutResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(57) as any as S.Schema<PutResourcePolicyRequest>,
  output: __S(35) as any as S.Schema<PutResourcePolicyResponse>,
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
  operationName: "PutResourcePolicy",
}));

export type TagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds tags to a web function. If a tag key already exists, the existing value is overwritten with the new value.
 *
 * This API is experimental and for internal AWS use only. It is not yet available to external customers.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58) as any as S.Schema<TagResourceRequest>,
  output: __S(29) as any as S.Schema<TagResourceResponse>,
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
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes tags from a web function.
 *
 * This API is experimental and for internal AWS use only. It is not yet available to external customers.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(59) as any as S.Schema<UntagResourceRequest>,
  output: __S(29) as any as S.Schema<UntagResourceResponse>,
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
  operationName: "UntagResource",
}));

export type UpdateWebFunctionEndpointError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration of a web function endpoint. You can modify the authorization type, auto-deployment mode, revision weights, scaling, and throttling settings.
 *
 * This API is experimental and for internal AWS use only. It is not yet available to external customers.
 */
export const updateWebFunctionEndpoint: API.OperationMethod<
  UpdateWebFunctionEndpointRequest,
  UpdateWebFunctionEndpointResponse,
  UpdateWebFunctionEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(60) as any as S.Schema<UpdateWebFunctionEndpointRequest>,
  output: __S(23) as any as S.Schema<UpdateWebFunctionEndpointResponse>,
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
  operationName: "UpdateWebFunctionEndpoint",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ bucket: S.String, key: S.String, versionId: S.optional(S.String) }),
      ).annotate({ identifier: "S3Object" });
    case 1:
      return S.suspend(() => S.Struct({ s3Object: __S(0) })).annotate({
        identifier: "CodeConfig",
      });
    case 2:
      return S.suspend(() => S.Struct({ runtime: S.String })).annotate({
        identifier: "RuntimeConfig",
      });
    case 3:
      return S.suspend(() => S.Struct({ codeConfig: __S(1), runtimeConfig: __S(2) })).annotate({
        identifier: "BuildConfig",
      });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          logGroup: S.optional(S.String),
          applicationLogLevel: S.optional(S.String),
          systemLogLevel: S.optional(S.String),
        }),
      ).annotate({ identifier: "LoggingConfig" });
    case 6:
      return S.suspend(() => S.Struct({ loggingConfig: S.optional(__S(5)) })).annotate({
        identifier: "TelemetryConfig",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          executionRoleArn: S.String,
          timeoutSeconds: S.optional(S.Number),
          maxConcurrencyPerEnvironment: S.optional(S.Number),
          environmentVariables: S.optional(__S(4)),
          telemetryConfig: S.optional(__S(6)),
        }),
      ).annotate({ identifier: "ServiceConfig" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          description: S.optional(S.String),
          kmsKeyArn: S.optional(S.String),
          buildConfig: __S(3),
          serviceConfig: __S(7),
        }),
      ).annotate({ identifier: "RevisionConfig" });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() => S.Struct({ maxEnvironments: S.optional(S.Number) })).annotate({
        identifier: "ScalingConfig",
      });
    case 3:
      return S.suspend(() => S.Struct({ rateLimit: S.optional(S.Number) })).annotate({
        identifier: "ThrottleConfig",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          endpointName: S.String,
          description: S.optional(S.String),
          endpointType: S.String,
          authType: S.String,
          autoDeploymentMode: S.optional(S.String),
          regions: S.optional(__S(9)),
          scalingConfig: S.optional(__S(10)),
          throttleConfig: S.optional(__S(11)),
        }),
      ).annotate({ identifier: "EndpointConfig" });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          functionName: S.String,
          revisionConfig: S.optional(__S(8)),
          endpointConfig: S.optional(__S(12)),
          tags: S.optional(__S(13)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/2025-03-07/web-functions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateWebFunctionRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          revisionArn: S.String,
          revisionId: S.String,
          description: S.optional(S.String),
          state: S.String,
          stateReason: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "FunctionRevisionSummary" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ revisionId: S.String, weight: S.Number })).annotate({
        identifier: "RevisionWeight",
      });
    case 1:
      return S.Array(__S(16));
    case 2:
      return S.suspend(() =>
        S.Struct({
          endpointArn: S.String,
          endpointName: S.String,
          description: S.optional(S.String),
          endpointType: S.String,
          domainName: S.String,
          authType: S.String,
          autoDeploymentMode: S.String,
          revisionWeights: __S(17),
          regions: __S(9),
          scalingConfig: S.optional(__S(10)),
          throttleConfig: S.optional(__S(11)),
          state: S.String,
          stateReason: S.String,
          updateStatus: S.optional(S.String),
          updateStatusReason: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "FunctionEndpointSummary" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          functionName: S.String,
          functionArn: S.String,
          state: S.String,
          stateReason: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          revision: S.optional(__S(15)),
          endpoint: S.optional(__S(18)),
          tags: S.optional(__S(13)),
        }),
      ).annotate({
        identifier: "CreateWebFunctionResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          functionName: S.String.pipe(T.HttpLabel("functionName")),
          endpointName: S.String,
          description: S.optional(S.String),
          endpointType: S.String,
          authType: S.String,
          autoDeploymentMode: S.optional(S.String),
          revisionWeights: S.optional(__S(17)),
          regions: S.optional(__S(9)),
          scalingConfig: S.optional(__S(10)),
          throttleConfig: S.optional(__S(11)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/2025-03-07/web-functions/{functionName}/endpoints" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateWebFunctionEndpointRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainName: S.optional(S.String),
          authType: S.String,
          revisionWeights: __S(17),
          scalingConfig: S.optional(__S(10)),
          throttleConfig: S.optional(__S(11)),
          state: S.String,
          stateReason: S.String,
          updateStatus: S.optional(S.String),
          updateStatusReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "RegionalEndpoint" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __S(21).pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          functionArn: S.String,
          endpointArn: S.String,
          endpointName: S.String,
          description: S.optional(S.String),
          endpointType: S.String,
          domainName: S.String,
          authType: S.String,
          autoDeploymentMode: S.String,
          revisionWeights: __S(17),
          regions: __S(9),
          scalingConfig: S.optional(__S(10)),
          throttleConfig: S.optional(__S(11)),
          state: S.String,
          stateReason: S.String,
          updateStatus: S.optional(S.String),
          updateStatusReason: S.optional(S.String),
          regionalEndpoints: __S(22),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "CreateWebFunctionEndpointResponse",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          functionName: S.String.pipe(T.HttpLabel("functionName")),
          description: S.optional(S.String),
          kmsKeyArn: S.optional(S.String),
          buildConfig: __S(3),
          serviceConfig: __S(7),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2025-03-07/web-functions/{functionName}/revisions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateWebFunctionRevisionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ attribute: S.String, errorCode: S.String, errorMessage: S.String }),
      ).annotate({ identifier: "RevisionError" });
    case 2:
      return S.Array(__S(25));
    case 3:
      return S.suspend(() =>
        S.Struct({
          functionArn: S.String,
          revisionArn: S.String,
          revisionId: S.String,
          description: S.optional(S.String),
          kmsKeyArn: S.optional(S.String),
          buildConfig: __S(3),
          serviceConfig: __S(7),
          state: S.String,
          stateReason: S.String,
          errors: S.optional(__S(26)),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "CreateWebFunctionRevisionResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          revisionId: S.optional(S.String).pipe(T.HttpQuery("RevisionId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/2025-03-07/resource-policy/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteResourcePolicyRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteResourcePolicyResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ functionName: S.String.pipe(T.HttpLabel("functionName")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/2025-03-07/web-functions/{functionName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteWebFunctionRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          functionName: S.String.pipe(T.HttpLabel("functionName")),
          endpointName: S.String.pipe(T.HttpLabel("endpointName")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/2025-03-07/web-functions/{functionName}/endpoints/{endpointName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteWebFunctionEndpointRequest",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteWebFunctionEndpointResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          functionName: S.String.pipe(T.HttpLabel("functionName")),
          revisionId: S.String.pipe(T.HttpLabel("revisionId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/2025-03-07/web-functions/{functionName}/revisions/{revisionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteWebFunctionRevisionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2025-03-07/resource-policy/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetResourcePolicyRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ policy: S.String, revisionId: S.String }).pipe(
          S.encodeKeys({ policy: "Policy", revisionId: "RevisionId" }),
        ),
      ).annotate({
        identifier: "GetResourcePolicyResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2025-03-07/web-account-settings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetWebAccountSettingsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          maxTotalArmVCpus: S.Number,
          maxTotalRateLimit: S.Number,
          maxRevisionsPerFunction: S.Number,
          maxEndpointsPerFunction: S.Number,
        }),
      ).annotate({ identifier: "AccountQuotas" });
    case 6:
      return S.suspend(() => S.Struct({ functionCount: S.Number })).annotate({
        identifier: "AccountUsage",
      });
    case 7:
      return S.suspend(() => S.Struct({ accountQuotas: __S(37), accountUsage: __S(38) })).annotate({
        identifier: "GetWebAccountSettingsResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ functionName: S.String.pipe(T.HttpLabel("functionName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2025-03-07/web-functions/{functionName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetWebFunctionRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          functionName: S.String,
          functionArn: S.String,
          state: S.String,
          stateReason: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "GetWebFunctionResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          functionName: S.String.pipe(T.HttpLabel("functionName")),
          endpointName: S.String.pipe(T.HttpLabel("endpointName")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2025-03-07/web-functions/{functionName}/endpoints/{endpointName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetWebFunctionEndpointRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          functionName: S.String.pipe(T.HttpLabel("functionName")),
          revisionId: S.String.pipe(T.HttpLabel("revisionId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/2025-03-07/web-functions/{functionName}/revisions/{revisionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetWebFunctionRevisionRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ resource: S.String.pipe(T.HttpLabel("resource")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/2025-03-07/tags/{resource}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListTagsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ tags: S.optional(__S(13)) }).pipe(S.encodeKeys({ tags: "Tags" })),
      ).annotate({ identifier: "ListTagsResponse" });
    case 6:
      return S.suspend(() => S.Struct({ name: S.String, values: __S(9) })).annotate({
        identifier: "Filter",
      });
    case 7:
      return S.Array(__S(46));
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          functionName: S.String.pipe(T.HttpLabel("functionName")),
          filters: S.optional(__S(47)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/2025-03-07/web-functions/{functionName}/list-endpoints",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListWebFunctionEndpointsRequest",
      });
    case 1:
      return S.Array(__S(18));
    case 2:
      return S.suspend(() =>
        S.Struct({ endpoints: __S(49), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListWebFunctionEndpointsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          functionName: S.String.pipe(T.HttpLabel("functionName")),
          filters: S.optional(__S(47)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/2025-03-07/web-functions/{functionName}/list-revisions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListWebFunctionRevisionsRequest",
      });
    case 4:
      return S.Array(__S(15));
    case 5:
      return S.suspend(() =>
        S.Struct({ revisions: __S(52), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListWebFunctionRevisionsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(__S(47)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2025-03-07/web-functions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListWebFunctionsRequest" });
    case 7:
      return S.Array(__S(41));
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ functions: __S(55), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListWebFunctionsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          policy: S.String,
          revisionId: S.optional(S.String),
        })
          .pipe(S.encodeKeys({ policy: "Policy", revisionId: "RevisionId" }))
          .pipe(
            T.all(
              T.Http({ method: "PUT", uri: "/2025-03-07/resource-policy/{resourceArn}" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "PutResourcePolicyRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ resource: S.String.pipe(T.HttpLabel("resource")), tags: __S(13) })
          .pipe(S.encodeKeys({ tags: "Tags" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/2025-03-07/tags/{resource}" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          resource: S.String.pipe(T.HttpLabel("resource")),
          tagKeys: __S(9).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/2025-03-07/tags/{resource}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          functionName: S.String.pipe(T.HttpLabel("functionName")),
          endpointName: S.String.pipe(T.HttpLabel("endpointName")),
          description: S.optional(S.String),
          authType: S.optional(S.String),
          autoDeploymentMode: S.optional(S.String),
          revisionWeights: S.optional(__S(17)),
          scalingConfig: S.optional(__S(10)),
          throttleConfig: S.optional(__S(11)),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/2025-03-07/web-functions/{functionName}/endpoints/{endpointName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateWebFunctionEndpointRequest",
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
  }
}
