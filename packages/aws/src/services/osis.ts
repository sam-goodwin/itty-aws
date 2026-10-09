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
const ns = /*@__PURE__*/ T.XmlNamespace("http://osis.amazonaws.com/doc/2022-01-01");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "OSIS",
  serviceShapeName: "AmazonOpenSearchIngestionService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "osis" });
const ver = /*@__PURE__*/ T.ServiceVersion("2022-01-01");
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
              `https://osis-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://osis-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://osis.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://osis.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class DisabledOperationException
  extends /*@__PURE__*/ S.TaggedError<DisabledOperationException>()(
    "DisabledOperationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalException
  extends /*@__PURE__*/ S.TaggedError<InternalException>()(
    "InternalException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InvalidPaginationTokenException
  extends /*@__PURE__*/ S.TaggedError<InvalidPaginationTokenException>()(
    "InvalidPaginationTokenException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ResourceAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<ResourceAlreadyExistsException>()(
    "ResourceAlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError, C.withAlreadyExistsError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type PipelineName = string;
export type PipelineUnits = number;
export type PipelineConfigurationBody = string;
export type LogGroup = string;
export interface CloudWatchLogDestination {
  LogGroup: string;
}
export interface LogPublishingOptions {
  IsLoggingEnabled?: boolean;
  CloudWatchLogDestination?: CloudWatchLogDestination;
}
export type SubnetId = string;
export type SubnetIds = string[];
export type SecurityGroupId = string;
export type SecurityGroupIds = string[];
export type CidrBlock = string;
export interface VpcAttachmentOptions {
  AttachToVpc: boolean;
  CidrBlock?: string;
}
export type VpcEndpointManagement = "CUSTOMER" | "SERVICE" | (string & {});
export interface VpcOptions {
  SubnetIds: string[];
  SecurityGroupIds?: string[];
  VpcAttachmentOptions?: VpcAttachmentOptions;
  VpcEndpointManagement?: VpcEndpointManagement;
}
export interface BufferOptions {
  PersistentBufferEnabled: boolean;
}
export type KmsKeyArn = string;
export interface EncryptionAtRestOptions {
  KmsKeyArn: string;
}
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagList = Tag[];
export type PipelineRoleArn = string;
export interface CreatePipelineRequest {
  PipelineName: string;
  MinUnits: number;
  MaxUnits: number;
  PipelineConfigurationBody: string;
  LogPublishingOptions?: LogPublishingOptions;
  VpcOptions?: VpcOptions;
  BufferOptions?: BufferOptions;
  EncryptionAtRestOptions?: EncryptionAtRestOptions;
  Tags?: Tag[];
  PipelineRoleArn?: string;
}
export type PipelineStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | "STARTING"
  | "START_FAILED"
  | "STOPPING"
  | "STOPPED"
  | (string & {});
export interface PipelineStatusReason {
  Description?: string;
}
export type IngestEndpointUrlsList = string[];
export interface VpcEndpoint {
  VpcEndpointId?: string;
  VpcId?: string;
  VpcOptions?: VpcOptions;
}
export type VpcEndpointsList = VpcEndpoint[];
export type VpcEndpointServiceName = "OPENSEARCH_SERVERLESS" | (string & {});
export interface ServiceVpcEndpoint {
  ServiceName?: VpcEndpointServiceName;
  VpcEndpointId?: string;
}
export type ServiceVpcEndpointsList = ServiceVpcEndpoint[];
export interface PipelineDestination {
  ServiceName?: string;
  Endpoint?: string;
}
export type PipelineDestinationList = PipelineDestination[];
export interface Pipeline {
  PipelineName?: string;
  PipelineArn?: string;
  MinUnits?: number;
  MaxUnits?: number;
  Status?: PipelineStatus;
  StatusReason?: PipelineStatusReason;
  PipelineConfigurationBody?: string;
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  IngestEndpointUrls?: string[];
  LogPublishingOptions?: LogPublishingOptions;
  VpcEndpoints?: VpcEndpoint[];
  BufferOptions?: BufferOptions;
  EncryptionAtRestOptions?: EncryptionAtRestOptions;
  VpcEndpointService?: string;
  ServiceVpcEndpoints?: ServiceVpcEndpoint[];
  Destinations?: PipelineDestination[];
  Tags?: Tag[];
  PipelineRoleArn?: string;
}
export interface CreatePipelineResponse {
  Pipeline?: Pipeline;
}
export type PipelineArn = string;
export interface PipelineEndpointVpcOptions {
  SubnetIds?: string[];
  SecurityGroupIds?: string[];
}
export interface CreatePipelineEndpointRequest {
  PipelineArn: string;
  VpcOptions: PipelineEndpointVpcOptions;
}
export type PipelineEndpointId = string;
export type PipelineEndpointStatus =
  | "CREATING"
  | "ACTIVE"
  | "CREATE_FAILED"
  | "DELETING"
  | "REVOKING"
  | "REVOKED"
  | (string & {});
export interface CreatePipelineEndpointResponse {
  PipelineArn?: string;
  EndpointId?: string;
  Status?: PipelineEndpointStatus;
  VpcId?: string;
}
export interface DeletePipelineRequest {
  PipelineName: string;
}
export interface DeletePipelineResponse {}
export interface DeletePipelineEndpointRequest {
  EndpointId: string;
}
export interface DeletePipelineEndpointResponse {}
export interface DeleteResourcePolicyRequest {
  ResourceArn: string;
}
export interface DeleteResourcePolicyResponse {}
export interface GetPipelineRequest {
  PipelineName: string;
}
export interface GetPipelineResponse {
  Pipeline?: Pipeline;
}
export type BlueprintFormat = string;
export interface GetPipelineBlueprintRequest {
  BlueprintName: string;
  Format?: string;
}
export interface PipelineBlueprint {
  BlueprintName?: string;
  PipelineConfigurationBody?: string;
  DisplayName?: string;
  DisplayDescription?: string;
  Service?: string;
  UseCase?: string;
}
export interface GetPipelineBlueprintResponse {
  Blueprint?: PipelineBlueprint;
  Format?: string;
}
export interface GetPipelineChangeProgressRequest {
  PipelineName: string;
}
export type ChangeProgressStatuses =
  | "PENDING"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED"
  | (string & {});
export type ChangeProgressStageStatuses =
  | "PENDING"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED"
  | (string & {});
export interface ChangeProgressStage {
  Name?: string;
  Status?: ChangeProgressStageStatuses;
  Description?: string;
  LastUpdatedAt?: Date;
}
export type ChangeProgressStageList = ChangeProgressStage[];
export interface ChangeProgressStatus {
  StartTime?: Date;
  Status?: ChangeProgressStatuses;
  TotalNumberOfStages?: number;
  ChangeProgressStages?: ChangeProgressStage[];
}
export type ChangeProgressStatusList = ChangeProgressStatus[];
export interface GetPipelineChangeProgressResponse {
  ChangeProgressStatuses?: ChangeProgressStatus[];
}
export interface GetResourcePolicyRequest {
  ResourceArn: string;
}
export type ResourcePolicy = string;
export interface GetResourcePolicyResponse {
  ResourceArn?: string;
  Policy?: string;
}
export interface ListPipelineBlueprintsRequest {}
export interface PipelineBlueprintSummary {
  BlueprintName?: string;
  DisplayName?: string;
  DisplayDescription?: string;
  Service?: string;
  UseCase?: string;
}
export type PipelineBlueprintsSummaryList = PipelineBlueprintSummary[];
export interface ListPipelineBlueprintsResponse {
  Blueprints?: PipelineBlueprintSummary[];
}
export type MaxResults = number;
export type NextToken = string;
export interface ListPipelineEndpointConnectionsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export type AwsAccountId = string;
export interface PipelineEndpointConnection {
  PipelineArn?: string;
  EndpointId?: string;
  Status?: PipelineEndpointStatus;
  VpcEndpointOwner?: string;
}
export type PipelineEndpointConnectionsSummaryList = PipelineEndpointConnection[];
export interface ListPipelineEndpointConnectionsResponse {
  NextToken?: string;
  PipelineEndpointConnections?: PipelineEndpointConnection[];
}
export interface ListPipelineEndpointsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface PipelineEndpoint {
  PipelineArn?: string;
  EndpointId?: string;
  Status?: PipelineEndpointStatus;
  VpcId?: string;
  VpcOptions?: PipelineEndpointVpcOptions;
  IngestEndpointUrl?: string;
}
export type PipelineEndpointsSummaryList = PipelineEndpoint[];
export interface ListPipelineEndpointsResponse {
  NextToken?: string;
  PipelineEndpoints?: PipelineEndpoint[];
}
export interface ListPipelinesRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface PipelineSummary {
  Status?: PipelineStatus;
  StatusReason?: PipelineStatusReason;
  PipelineName?: string;
  PipelineArn?: string;
  MinUnits?: number;
  MaxUnits?: number;
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  Destinations?: PipelineDestination[];
  Tags?: Tag[];
}
export type PipelineSummaryList = PipelineSummary[];
export interface ListPipelinesResponse {
  NextToken?: string;
  Pipelines?: PipelineSummary[];
}
export interface ListTagsForResourceRequest {
  Arn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
}
export interface PutResourcePolicyRequest {
  ResourceArn: string;
  Policy: string;
}
export interface PutResourcePolicyResponse {
  ResourceArn?: string;
  Policy?: string;
}
export type PipelineEndpointIdsList = string[];
export interface RevokePipelineEndpointConnectionsRequest {
  PipelineArn: string;
  EndpointIds: string[];
}
export interface RevokePipelineEndpointConnectionsResponse {
  PipelineArn?: string;
}
export interface StartPipelineRequest {
  PipelineName: string;
}
export interface StartPipelineResponse {
  Pipeline?: Pipeline;
}
export interface StopPipelineRequest {
  PipelineName: string;
}
export interface StopPipelineResponse {
  Pipeline?: Pipeline;
}
export interface TagResourceRequest {
  Arn: string;
  Tags: Tag[];
}
export interface TagResourceResponse {}
export type StringList = string[];
export interface UntagResourceRequest {
  Arn: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdatePipelineRequest {
  PipelineName: string;
  MinUnits?: number;
  MaxUnits?: number;
  PipelineConfigurationBody?: string;
  LogPublishingOptions?: LogPublishingOptions;
  BufferOptions?: BufferOptions;
  EncryptionAtRestOptions?: EncryptionAtRestOptions;
  PipelineRoleArn?: string;
}
export interface UpdatePipelineResponse {
  Pipeline?: Pipeline;
}
export interface ValidatePipelineRequest {
  PipelineConfigurationBody: string;
}
export interface ValidationMessage {
  Message?: string;
}
export type ValidationMessageList = ValidationMessage[];
export interface ValidatePipelineResponse {
  isValid?: boolean;
  Errors?: ValidationMessage[];
}
export type ErrorMessage = string;
export type CreatePipelineError =
  | AccessDeniedException
  | DisabledOperationException
  | InternalException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Creates an OpenSearch Ingestion pipeline. For more information, see Creating Amazon OpenSearch
 * Ingestion pipelines.
 */
export const createPipeline: API.OperationMethod<
  CreatePipelineRequest,
  CreatePipelineResponse,
  CreatePipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9, __c1, 1) as any as S.Schema<CreatePipelineRequest>,
  output: __S(18, __c2, 2) as any as S.Schema<CreatePipelineResponse>,
  errors: [
    AccessDeniedException,
    DisabledOperationException,
    InternalException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePipeline",
}));

export type CreatePipelineEndpointError =
  | AccessDeniedException
  | DisabledOperationException
  | InternalException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Creates a VPC endpoint for an OpenSearch Ingestion pipeline. Pipeline endpoints allow you to
 * ingest data from your VPC into pipelines that you have access to.
 */
export const createPipelineEndpoint: API.OperationMethod<
  CreatePipelineEndpointRequest,
  CreatePipelineEndpointResponse,
  CreatePipelineEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(20, __c2, 4) as any as S.Schema<CreatePipelineEndpointRequest>,
  output: __S(21, __c2, 5) as any as S.Schema<CreatePipelineEndpointResponse>,
  errors: [
    AccessDeniedException,
    DisabledOperationException,
    InternalException,
    LimitExceededException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePipelineEndpoint",
}));

export type DeletePipelineError =
  | AccessDeniedException
  | ConflictException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an OpenSearch Ingestion pipeline. For more information, see Deleting Amazon OpenSearch
 * Ingestion pipelines.
 */
export const deletePipeline: API.OperationMethod<
  DeletePipelineRequest,
  DeletePipelineResponse,
  DeletePipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(22, __c2, 6) as any as S.Schema<DeletePipelineRequest>,
  output: __S(23, __c2, 7) as any as S.Schema<DeletePipelineResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePipeline",
}));

export type DeletePipelineEndpointError =
  | AccessDeniedException
  | DisabledOperationException
  | InternalException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a VPC endpoint for an OpenSearch Ingestion pipeline.
 */
export const deletePipelineEndpoint: API.OperationMethod<
  DeletePipelineEndpointRequest,
  DeletePipelineEndpointResponse,
  DeletePipelineEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(24, __c3, 0) as any as S.Schema<DeletePipelineEndpointRequest>,
  output: __S(25, __c3, 1) as any as S.Schema<DeletePipelineEndpointResponse>,
  errors: [
    AccessDeniedException,
    DisabledOperationException,
    InternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePipelineEndpoint",
}));

export type DeleteResourcePolicyError =
  | AccessDeniedException
  | DisabledOperationException
  | InternalException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a resource-based policy from an OpenSearch Ingestion resource.
 */
export const deleteResourcePolicy: API.OperationMethod<
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
  DeleteResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(26, __c3, 2) as any as S.Schema<DeleteResourcePolicyRequest>,
  output: __S(25, __c3, 1) as any as S.Schema<DeleteResourcePolicyResponse>,
  errors: [
    AccessDeniedException,
    DisabledOperationException,
    InternalException,
    LimitExceededException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteResourcePolicy",
}));

export type GetPipelineError =
  | AccessDeniedException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about an OpenSearch Ingestion pipeline.
 */
export const getPipeline: API.OperationMethod<
  GetPipelineRequest,
  GetPipelineResponse,
  GetPipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(27, __c3, 3) as any as S.Schema<GetPipelineRequest>,
  output: __S(18, __c2, 2) as any as S.Schema<GetPipelineResponse>,
  errors: [
    AccessDeniedException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPipeline",
}));

export type GetPipelineBlueprintError =
  | AccessDeniedException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a specific blueprint for OpenSearch Ingestion. Blueprints are
 * templates for the configuration needed for a `CreatePipeline` request. For more
 * information, see Using
 * blueprints to create a pipeline.
 */
export const getPipelineBlueprint: API.OperationMethod<
  GetPipelineBlueprintRequest,
  GetPipelineBlueprintResponse,
  GetPipelineBlueprintError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(28, __c3, 4) as any as S.Schema<GetPipelineBlueprintRequest>,
  output: __S(30, __c3, 6) as any as S.Schema<GetPipelineBlueprintResponse>,
  errors: [
    AccessDeniedException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPipelineBlueprint",
}));

export type GetPipelineChangeProgressError =
  | AccessDeniedException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns progress information for the current change happening on an OpenSearch Ingestion
 * pipeline. Currently, this operation only returns information when a pipeline is being
 * created.
 *
 * For more information, see Tracking the status of pipeline creation.
 */
export const getPipelineChangeProgress: API.OperationMethod<
  GetPipelineChangeProgressRequest,
  GetPipelineChangeProgressResponse,
  GetPipelineChangeProgressError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(31, __c3, 7) as any as S.Schema<GetPipelineChangeProgressRequest>,
  output: __S(36, __c4, 4) as any as S.Schema<GetPipelineChangeProgressResponse>,
  errors: [
    AccessDeniedException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPipelineChangeProgress",
}));

export type GetResourcePolicyError =
  | AccessDeniedException
  | DisabledOperationException
  | InternalException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the resource-based policy attached to an OpenSearch Ingestion resource.
 */
export const getResourcePolicy: API.OperationMethod<
  GetResourcePolicyRequest,
  GetResourcePolicyResponse,
  GetResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(37, __c4, 5) as any as S.Schema<GetResourcePolicyRequest>,
  output: __S(38, __c4, 6) as any as S.Schema<GetResourcePolicyResponse>,
  errors: [
    AccessDeniedException,
    DisabledOperationException,
    InternalException,
    LimitExceededException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourcePolicy",
}));

export type ListPipelineBlueprintsError =
  | AccessDeniedException
  | DisabledOperationException
  | InternalException
  | InvalidPaginationTokenException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of all available blueprints for Data Prepper. For more information, see
 * Using
 * blueprints to create a pipeline.
 */
export const listPipelineBlueprints: API.OperationMethod<
  ListPipelineBlueprintsRequest,
  ListPipelineBlueprintsResponse,
  ListPipelineBlueprintsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(39, __c4, 7) as any as S.Schema<ListPipelineBlueprintsRequest>,
  output: __S(42, __c5, 2) as any as S.Schema<ListPipelineBlueprintsResponse>,
  errors: [
    AccessDeniedException,
    DisabledOperationException,
    InternalException,
    InvalidPaginationTokenException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPipelineBlueprints",
}));

export type ListPipelineEndpointConnectionsError =
  | AccessDeniedException
  | DisabledOperationException
  | InternalException
  | LimitExceededException
  | ValidationException
  | CommonErrors;
/**
 * Lists the pipeline endpoints connected to pipelines in your account.
 */
export const listPipelineEndpointConnections: API.PaginatedOperationMethod<
  ListPipelineEndpointConnectionsRequest,
  ListPipelineEndpointConnectionsResponse,
  ListPipelineEndpointConnectionsError,
  Credentials | HttpClient.HttpClient,
  PipelineEndpointConnection
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(43, __c5, 3) as any as S.Schema<ListPipelineEndpointConnectionsRequest>,
  output: __S(46, __c5, 6) as any as S.Schema<ListPipelineEndpointConnectionsResponse>,
  errors: [
    AccessDeniedException,
    DisabledOperationException,
    InternalException,
    LimitExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPipelineEndpointConnections",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "PipelineEndpointConnections",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListPipelineEndpointsError =
  | AccessDeniedException
  | DisabledOperationException
  | InternalException
  | LimitExceededException
  | ValidationException
  | CommonErrors;
/**
 * Lists all pipeline endpoints in your account.
 */
export const listPipelineEndpoints: API.PaginatedOperationMethod<
  ListPipelineEndpointsRequest,
  ListPipelineEndpointsResponse,
  ListPipelineEndpointsError,
  Credentials | HttpClient.HttpClient,
  PipelineEndpoint
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(47, __c5, 7) as any as S.Schema<ListPipelineEndpointsRequest>,
  output: __S(50, __c6, 2) as any as S.Schema<ListPipelineEndpointsResponse>,
  errors: [
    AccessDeniedException,
    DisabledOperationException,
    InternalException,
    LimitExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPipelineEndpoints",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "PipelineEndpoints",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListPipelinesError =
  | AccessDeniedException
  | DisabledOperationException
  | InternalException
  | InvalidPaginationTokenException
  | ValidationException
  | CommonErrors;
/**
 * Lists all OpenSearch Ingestion pipelines in the current Amazon Web Services account and Region.
 * For more information, see Viewing Amazon OpenSearch
 * Ingestion pipelines.
 */
export const listPipelines: API.PaginatedOperationMethod<
  ListPipelinesRequest,
  ListPipelinesResponse,
  ListPipelinesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(51, __c6, 3) as any as S.Schema<ListPipelinesRequest>,
  output: __S(54, __c6, 6) as any as S.Schema<ListPipelinesResponse>,
  errors: [
    AccessDeniedException,
    DisabledOperationException,
    InternalException,
    InvalidPaginationTokenException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPipelines",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists all resource tags associated with an OpenSearch Ingestion pipeline. For more information,
 * see Tagging Amazon OpenSearch Ingestion pipelines.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(55, __c6, 7) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(56, __c7, 0) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    AccessDeniedException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type PutResourcePolicyError =
  | AccessDeniedException
  | DisabledOperationException
  | InternalException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Attaches a resource-based policy to an OpenSearch Ingestion resource. Resource-based
 * policies grant permissions to principals to perform actions on the resource.
 */
export const putResourcePolicy: API.OperationMethod<
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  PutResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(57, __c7, 1) as any as S.Schema<PutResourcePolicyRequest>,
  output: __S(38, __c4, 6) as any as S.Schema<PutResourcePolicyResponse>,
  errors: [
    AccessDeniedException,
    DisabledOperationException,
    InternalException,
    LimitExceededException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutResourcePolicy",
}));

export type RevokePipelineEndpointConnectionsError =
  | AccessDeniedException
  | DisabledOperationException
  | InternalException
  | LimitExceededException
  | ValidationException
  | CommonErrors;
/**
 * Revokes pipeline endpoints from specified endpoint IDs.
 */
export const revokePipelineEndpointConnections: API.OperationMethod<
  RevokePipelineEndpointConnectionsRequest,
  RevokePipelineEndpointConnectionsResponse,
  RevokePipelineEndpointConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58, __c7, 2) as any as S.Schema<RevokePipelineEndpointConnectionsRequest>,
  output: __S(59, __c7, 3) as any as S.Schema<RevokePipelineEndpointConnectionsResponse>,
  errors: [
    AccessDeniedException,
    DisabledOperationException,
    InternalException,
    LimitExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RevokePipelineEndpointConnections",
}));

export type StartPipelineError =
  | AccessDeniedException
  | ConflictException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Starts an OpenSearch Ingestion pipeline. For more information, see Starting an OpenSearch Ingestion pipeline.
 */
export const startPipeline: API.OperationMethod<
  StartPipelineRequest,
  StartPipelineResponse,
  StartPipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(60, __c7, 4) as any as S.Schema<StartPipelineRequest>,
  output: __S(18, __c2, 2) as any as S.Schema<StartPipelineResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartPipeline",
}));

export type StopPipelineError =
  | AccessDeniedException
  | ConflictException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Stops an OpenSearch Ingestion pipeline. For more information, see Stopping
 * an OpenSearch Ingestion pipeline.
 */
export const stopPipeline: API.OperationMethod<
  StopPipelineRequest,
  StopPipelineResponse,
  StopPipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(61, __c7, 5) as any as S.Schema<StopPipelineRequest>,
  output: __S(18, __c2, 2) as any as S.Schema<StopPipelineResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopPipeline",
}));

export type TagResourceError =
  | AccessDeniedException
  | DisabledOperationException
  | InternalException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Tags an OpenSearch Ingestion pipeline. For more information, see Tagging Amazon OpenSearch
 * Ingestion pipelines.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62, __c7, 6) as any as S.Schema<TagResourceRequest>,
  output: __S(63, __c7, 7) as any as S.Schema<TagResourceResponse>,
  errors: [
    AccessDeniedException,
    DisabledOperationException,
    InternalException,
    LimitExceededException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes one or more tags from an OpenSearch Ingestion pipeline. For more information, see Tagging
 * Amazon OpenSearch Ingestion pipelines.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(64, __c8, 0) as any as S.Schema<UntagResourceRequest>,
  output: __S(63, __c7, 7) as any as S.Schema<UntagResourceResponse>,
  errors: [
    AccessDeniedException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdatePipelineError =
  | AccessDeniedException
  | ConflictException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates an OpenSearch Ingestion pipeline. For more information, see Updating Amazon OpenSearch
 * Ingestion pipelines.
 */
export const updatePipeline: API.OperationMethod<
  UpdatePipelineRequest,
  UpdatePipelineResponse,
  UpdatePipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65, __c8, 1) as any as S.Schema<UpdatePipelineRequest>,
  output: __S(18, __c2, 2) as any as S.Schema<UpdatePipelineResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePipeline",
}));

export type ValidatePipelineError =
  | AccessDeniedException
  | DisabledOperationException
  | InternalException
  | ValidationException
  | CommonErrors;
/**
 * Checks whether an OpenSearch Ingestion pipeline configuration is valid prior to creation. For
 * more information, see Creating Amazon OpenSearch
 * Ingestion pipelines.
 */
export const validatePipeline: API.OperationMethod<
  ValidatePipelineRequest,
  ValidatePipelineResponse,
  ValidatePipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(66, __c8, 2) as any as S.Schema<ValidatePipelineRequest>,
  output: __S(69, __c8, 5) as any as S.Schema<ValidatePipelineResponse>,
  errors: [
    AccessDeniedException,
    DisabledOperationException,
    InternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ValidatePipeline",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ LogGroup: S.String })).annotate({
        identifier: "CloudWatchLogDestination",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          IsLoggingEnabled: S.optional(S.Boolean),
          CloudWatchLogDestination: S.optional(__S(0, __c0, 0)),
        }),
      ).annotate({ identifier: "LogPublishingOptions" });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({ AttachToVpc: S.Boolean, CidrBlock: S.optional(S.String) }),
      ).annotate({ identifier: "VpcAttachmentOptions" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SubnetIds: __S(2, __c0, 2),
          SecurityGroupIds: S.optional(__S(2, __c0, 2)),
          VpcAttachmentOptions: S.optional(__S(3, __c0, 3)),
          VpcEndpointManagement: S.optional(S.String),
        }),
      ).annotate({ identifier: "VpcOptions" });
    case 5:
      return S.suspend(() => S.Struct({ PersistentBufferEnabled: S.Boolean })).annotate({
        identifier: "BufferOptions",
      });
    case 6:
      return S.suspend(() => S.Struct({ KmsKeyArn: S.String })).annotate({
        identifier: "EncryptionAtRestOptions",
      });
    case 7:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(7, __c0, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          PipelineName: S.String,
          MinUnits: S.Number,
          MaxUnits: S.Number,
          PipelineConfigurationBody: S.String,
          LogPublishingOptions: S.optional(__S(1, __c0, 1)),
          VpcOptions: S.optional(__S(4, __c0, 4)),
          BufferOptions: S.optional(__S(5, __c0, 5)),
          EncryptionAtRestOptions: S.optional(__S(6, __c0, 6)),
          Tags: S.optional(__S(8, __c1, 0)),
          PipelineRoleArn: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2022-01-01/osis/createPipeline" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreatePipelineRequest" });
    case 2:
      return S.suspend(() => S.Struct({ Description: S.optional(S.String) })).annotate({
        identifier: "PipelineStatusReason",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          VpcEndpointId: S.optional(S.String),
          VpcId: S.optional(S.String),
          VpcOptions: S.optional(__S(4, __c0, 4)),
        }),
      ).annotate({ identifier: "VpcEndpoint" });
    case 4:
      return S.Array(__S(11, __c1, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          ServiceName: S.optional(S.String),
          VpcEndpointId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ServiceVpcEndpoint" });
    case 6:
      return S.Array(__S(13, __c1, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ ServiceName: S.optional(S.String), Endpoint: S.optional(S.String) }),
      ).annotate({ identifier: "PipelineDestination" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(15, __c1, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          PipelineName: S.optional(S.String),
          PipelineArn: S.optional(S.String),
          MinUnits: S.optional(S.Number),
          MaxUnits: S.optional(S.Number),
          Status: S.optional(S.String),
          StatusReason: S.optional(__S(10, __c1, 2)),
          PipelineConfigurationBody: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          IngestEndpointUrls: S.optional(__S(2, __c0, 2)),
          LogPublishingOptions: S.optional(__S(1, __c0, 1)),
          VpcEndpoints: S.optional(__S(12, __c1, 4)),
          BufferOptions: S.optional(__S(5, __c0, 5)),
          EncryptionAtRestOptions: S.optional(__S(6, __c0, 6)),
          VpcEndpointService: S.optional(S.String),
          ServiceVpcEndpoints: S.optional(__S(14, __c1, 6)),
          Destinations: S.optional(__S(16, __c2, 0)),
          Tags: S.optional(__S(8, __c1, 0)),
          PipelineRoleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Pipeline" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Pipeline: S.optional(__S(17, __c2, 1)) }).pipe(ns),
      ).annotate({
        identifier: "CreatePipelineResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          SubnetIds: S.optional(__S(2, __c0, 2)),
          SecurityGroupIds: S.optional(__S(2, __c0, 2)),
        }),
      ).annotate({
        identifier: "PipelineEndpointVpcOptions",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ PipelineArn: S.String, VpcOptions: __S(19, __c2, 3) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2022-01-01/osis/createPipelineEndpoint" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreatePipelineEndpointRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PipelineArn: S.optional(S.String),
          EndpointId: S.optional(S.String),
          Status: S.optional(S.String),
          VpcId: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "CreatePipelineEndpointResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ PipelineName: S.String.pipe(T.HttpLabel("PipelineName")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/2022-01-01/osis/deletePipeline/{PipelineName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeletePipelineRequest" });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeletePipelineResponse",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ EndpointId: S.String.pipe(T.HttpLabel("EndpointId")) }).pipe(
          T.all(
            ns,
            T.Http({
              method: "DELETE",
              uri: "/2022-01-01/osis/deletePipelineEndpoint/{EndpointId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeletePipelineEndpointRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeletePipelineEndpointResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/2022-01-01/osis/resourcePolicy/{ResourceArn}" }),
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
    case 3:
      return S.suspend(() =>
        S.Struct({ PipelineName: S.String.pipe(T.HttpLabel("PipelineName")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2022-01-01/osis/getPipeline/{PipelineName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetPipelineRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          BlueprintName: S.String.pipe(T.HttpLabel("BlueprintName")),
          Format: S.optional(S.String).pipe(T.HttpQuery("format")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2022-01-01/osis/getPipelineBlueprint/{BlueprintName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPipelineBlueprintRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          BlueprintName: S.optional(S.String),
          PipelineConfigurationBody: S.optional(S.String),
          DisplayName: S.optional(S.String),
          DisplayDescription: S.optional(S.String),
          Service: S.optional(S.String),
          UseCase: S.optional(S.String),
        }),
      ).annotate({ identifier: "PipelineBlueprint" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Blueprint: S.optional(__S(29, __c3, 5)), Format: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({
        identifier: "GetPipelineBlueprintResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ PipelineName: S.String.pipe(T.HttpLabel("PipelineName")) }).pipe(
          T.all(
            ns,
            T.Http({
              method: "GET",
              uri: "/2022-01-01/osis/getPipelineChangeProgress/{PipelineName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPipelineChangeProgressRequest",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Status: S.optional(S.String),
          Description: S.optional(S.String),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ChangeProgressStage" });
    case 1:
      return S.Array(__S(32, __c4, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Status: S.optional(S.String),
          TotalNumberOfStages: S.optional(S.Number),
          ChangeProgressStages: S.optional(__S(33, __c4, 1)),
        }),
      ).annotate({ identifier: "ChangeProgressStatus" });
    case 3:
      return S.Array(__S(34, __c4, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ ChangeProgressStatuses: S.optional(__S(35, __c4, 3)) }).pipe(ns),
      ).annotate({
        identifier: "GetPipelineChangeProgressResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2022-01-01/osis/resourcePolicy/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetResourcePolicyRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.optional(S.String), Policy: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "GetResourcePolicyResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2022-01-01/osis/listPipelineBlueprints" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPipelineBlueprintsRequest",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          BlueprintName: S.optional(S.String),
          DisplayName: S.optional(S.String),
          DisplayDescription: S.optional(S.String),
          Service: S.optional(S.String),
          UseCase: S.optional(S.String),
        }),
      ).annotate({ identifier: "PipelineBlueprintSummary" });
    case 1:
      return S.Array(__S(40, __c5, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ Blueprints: S.optional(__S(41, __c5, 1)) }).pipe(ns),
      ).annotate({
        identifier: "ListPipelineBlueprintsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2022-01-01/osis/listPipelineEndpointConnections" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPipelineEndpointConnectionsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          PipelineArn: S.optional(S.String),
          EndpointId: S.optional(S.String),
          Status: S.optional(S.String),
          VpcEndpointOwner: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PipelineEndpointConnection",
      });
    case 5:
      return S.Array(__S(44, __c5, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          PipelineEndpointConnections: S.optional(__S(45, __c5, 5)),
        }).pipe(ns),
      ).annotate({
        identifier: "ListPipelineEndpointConnectionsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2022-01-01/osis/listPipelineEndpoints" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPipelineEndpointsRequest",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PipelineArn: S.optional(S.String),
          EndpointId: S.optional(S.String),
          Status: S.optional(S.String),
          VpcId: S.optional(S.String),
          VpcOptions: S.optional(__S(19, __c2, 3)),
          IngestEndpointUrl: S.optional(S.String),
        }),
      ).annotate({ identifier: "PipelineEndpoint" });
    case 1:
      return S.Array(__S(48, __c6, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          PipelineEndpoints: S.optional(__S(49, __c6, 1)),
        }).pipe(ns),
      ).annotate({
        identifier: "ListPipelineEndpointsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2022-01-01/osis/listPipelines" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListPipelinesRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          StatusReason: S.optional(__S(10, __c1, 2)),
          PipelineName: S.optional(S.String),
          PipelineArn: S.optional(S.String),
          MinUnits: S.optional(S.Number),
          MaxUnits: S.optional(S.Number),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Destinations: S.optional(__S(16, __c2, 0)),
          Tags: S.optional(__S(8, __c1, 0)),
        }),
      ).annotate({ identifier: "PipelineSummary" });
    case 5:
      return S.Array(__S(52, __c6, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          Pipelines: S.optional(__S(53, __c6, 5)),
        }).pipe(ns),
      ).annotate({ identifier: "ListPipelinesResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpQuery("arn")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2022-01-01/osis/listTagsForResource" }),
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
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(8, __c1, 0)) }).pipe(ns)).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")), Policy: S.String }).pipe(
          T.all(
            ns,
            T.Http({ method: "PUT", uri: "/2022-01-01/osis/resourcePolicy/{ResourceArn}" }),
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
        S.Struct({ PipelineArn: S.String, EndpointIds: __S(2, __c0, 2) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2022-01-01/osis/revokePipelineEndpointConnections" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RevokePipelineEndpointConnectionsRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ PipelineArn: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "RevokePipelineEndpointConnectionsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ PipelineName: S.String.pipe(T.HttpLabel("PipelineName")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "PUT", uri: "/2022-01-01/osis/startPipeline/{PipelineName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartPipelineRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ PipelineName: S.String.pipe(T.HttpLabel("PipelineName")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "PUT", uri: "/2022-01-01/osis/stopPipeline/{PipelineName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StopPipelineRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpQuery("arn")), Tags: __S(8, __c1, 0) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2022-01-01/osis/tagResource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "TagResourceResponse",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Arn: S.String.pipe(T.HttpQuery("arn")), TagKeys: __S(2, __c0, 2) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2022-01-01/osis/untagResource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          PipelineName: S.String.pipe(T.HttpLabel("PipelineName")),
          MinUnits: S.optional(S.Number),
          MaxUnits: S.optional(S.Number),
          PipelineConfigurationBody: S.optional(S.String),
          LogPublishingOptions: S.optional(__S(1, __c0, 1)),
          BufferOptions: S.optional(__S(5, __c0, 5)),
          EncryptionAtRestOptions: S.optional(__S(6, __c0, 6)),
          PipelineRoleArn: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "PUT", uri: "/2022-01-01/osis/updatePipeline/{PipelineName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdatePipelineRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ PipelineConfigurationBody: S.String }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2022-01-01/osis/validatePipeline" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ValidatePipelineRequest" });
    case 3:
      return S.suspend(() => S.Struct({ Message: S.optional(S.String) })).annotate({
        identifier: "ValidationMessage",
      });
    case 4:
      return S.Array(__S(67, __c8, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          isValid: S.optional(S.Boolean),
          Errors: S.optional(__S(68, __c8, 4)),
        }).pipe(ns),
      ).annotate({ identifier: "ValidatePipelineResponse" });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
