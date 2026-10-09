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
  sdkId: "Nova Act",
  serviceShapeName: "AmazonNovaAgentsDataPlane",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "nova-act" });
const ver = /*@__PURE__*/ T.ServiceVersion("2025-08-22");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseDualStack = false, UseFIPS = false, Endpoint, Region } = p;
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
              `https://nova-act-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true && UseDualStack === false) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://nova-act-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseFIPS === false && UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://nova-act.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://nova-act.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
      reason: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => InternalServerExceptionReason).annotate({
          identifier: "InternalServerExceptionReason",
        }),
      ),
    },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
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
      serviceCode: S.String,
      quotaCode: S.String,
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
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type WorkflowDefinitionName = string;
export type UuidString = string;
export type Task = string | redacted.Redacted<string>;
export type ToolName = string;
export type ToolDescription = string | redacted.Redacted<string>;
export type ToolInputSchemaDocument = unknown;
export type ToolInputSchema = { json: any };
const ToolInputSchema = /*@__PURE__*/ __L.at(__c0, 0);
export interface ToolSpec {
  name: string;
  description: string | redacted.Redacted<string>;
  inputSchema: ToolInputSchema;
}
const ToolSpec = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<ToolSpec>;
export type ToolSpecs = ToolSpec[];
const ToolSpecs = /*@__PURE__*/ __L.at(__c0, 2);
export type ClientToken = string;
export interface CreateActRequest {
  workflowDefinitionName: string;
  workflowRunId: string;
  sessionId: string;
  task: string | redacted.Redacted<string>;
  toolSpecs?: ToolSpec[];
  clientToken?: string;
}
const CreateActRequest = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<CreateActRequest>;
export type ActStatus =
  | "RUNNING"
  | "PENDING_CLIENT_ACTION"
  | "PENDING_HUMAN_ACTION"
  | "SUCCEEDED"
  | "FAILED"
  | "TIMED_OUT"
  | (string & {});
const ActStatus = S.String;

export interface CreateActResponse {
  actId: string;
  status: ActStatus;
}
const CreateActResponse = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<CreateActResponse>;
export interface CreateSessionRequest {
  workflowDefinitionName: string;
  workflowRunId: string;
  clientToken?: string;
}
const CreateSessionRequest = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<CreateSessionRequest>;
export interface CreateSessionResponse {
  sessionId: string;
}
const CreateSessionResponse = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<CreateSessionResponse>;
export type WorkflowDescription = string | redacted.Redacted<string>;
export type S3BucketName = string;
export type S3KeyPrefix = string;
export interface WorkflowExportConfig {
  s3BucketName: string;
  s3KeyPrefix?: string;
}
const WorkflowExportConfig = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<WorkflowExportConfig>;
export interface CreateWorkflowDefinitionRequest {
  name: string;
  description?: string | redacted.Redacted<string>;
  exportConfig?: WorkflowExportConfig;
  clientToken?: string;
}
const CreateWorkflowDefinitionRequest = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<CreateWorkflowDefinitionRequest>;
export type WorkflowDefinitionStatus = "ACTIVE" | "DELETING" | (string & {});
const WorkflowDefinitionStatus = S.String;

export interface CreateWorkflowDefinitionResponse {
  status: WorkflowDefinitionStatus;
}
const CreateWorkflowDefinitionResponse = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<CreateWorkflowDefinitionResponse>;
export type ModelId = string;
export type CloudWatchLogGroupName = string;
export type NonBlankString = string;
export interface ClientInfo {
  compatibilityVersion: number;
  sdkVersion?: string;
}
const ClientInfo = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<ClientInfo>;
export interface CreateWorkflowRunRequest {
  workflowDefinitionName: string;
  modelId: string;
  clientToken?: string;
  logGroupName?: string;
  clientInfo: ClientInfo;
}
const CreateWorkflowRunRequest = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<CreateWorkflowRunRequest>;
export type WorkflowRunStatus =
  | "RUNNING"
  | "SUCCEEDED"
  | "FAILED"
  | "TIMED_OUT"
  | "DELETING"
  | (string & {});
const WorkflowRunStatus = S.String;

export interface CreateWorkflowRunResponse {
  workflowRunId: string;
  status: WorkflowRunStatus;
}
const CreateWorkflowRunResponse = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<CreateWorkflowRunResponse>;
export interface DeleteWorkflowDefinitionRequest {
  workflowDefinitionName: string;
}
const DeleteWorkflowDefinitionRequest = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<DeleteWorkflowDefinitionRequest>;
export interface DeleteWorkflowDefinitionResponse {
  status: WorkflowDefinitionStatus;
}
const DeleteWorkflowDefinitionResponse =
  CreateWorkflowDefinitionResponse as any as S.Schema<DeleteWorkflowDefinitionResponse>;
export interface DeleteWorkflowRunRequest {
  workflowDefinitionName: string;
  workflowRunId: string;
}
const DeleteWorkflowRunRequest = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<DeleteWorkflowRunRequest>;
export interface DeleteWorkflowRunResponse {
  status: WorkflowRunStatus;
}
const DeleteWorkflowRunResponse =
  CreateWorkflowDefinitionResponse as any as S.Schema<DeleteWorkflowRunResponse>;
export interface GetWorkflowDefinitionRequest {
  workflowDefinitionName: string;
}
const GetWorkflowDefinitionRequest = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<GetWorkflowDefinitionRequest>;
export type WorkflowDefinitionArn = string;
export interface GetWorkflowDefinitionResponse {
  name: string;
  arn: string;
  createdAt: Date;
  description?: string | redacted.Redacted<string>;
  exportConfig?: WorkflowExportConfig;
  status: WorkflowDefinitionStatus;
}
const GetWorkflowDefinitionResponse = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<GetWorkflowDefinitionResponse>;
export interface GetWorkflowRunRequest {
  workflowDefinitionName: string;
  workflowRunId: string;
}
const GetWorkflowRunRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<GetWorkflowRunRequest>;
export type WorkflowRunArn = string;
export interface GetWorkflowRunResponse {
  workflowRunArn: string;
  workflowRunId: string;
  status: WorkflowRunStatus;
  startedAt: Date;
  endedAt?: Date;
  modelId: string;
  logGroupName?: string;
}
const GetWorkflowRunResponse = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<GetWorkflowRunResponse>;
export type CallId = string;
export type CallResultContent = { text: string };
const CallResultContent = /*@__PURE__*/ __L.at(__c2, 3);
export type CallResultContents = CallResultContent[];
const CallResultContents = /*@__PURE__*/ __L.at(__c2, 4);
export interface CallResult {
  callId?: string;
  content: CallResultContent[];
}
const CallResult = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<CallResult>;
export type CallResults = CallResult[];
const CallResults = /*@__PURE__*/ __L.at(__c2, 6);
export interface InvokeActStepRequest {
  workflowDefinitionName: string;
  workflowRunId: string;
  sessionId: string;
  actId: string;
  callResults: CallResult[];
  previousStepId?: string;
}
const InvokeActStepRequest = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<InvokeActStepRequest>;
export type SensitiveDocument = unknown;
export interface Call {
  callId: string;
  input: any;
  name: string;
}
const Call = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<Call>;
export type Calls = Call[];
const Calls = /*@__PURE__*/ __L.at(__c3, 1);
export interface InvokeActStepResponse {
  calls: Call[];
  stepId: string;
}
const InvokeActStepResponse = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<InvokeActStepResponse>;
export type MaxResults = number;
export type NextToken = string;
export type SortOrder = "Ascending" | "Descending" | (string & {});
const SortOrder = S.String;

export interface ListActsRequest {
  workflowDefinitionName: string;
  workflowRunId?: string;
  sessionId?: string;
  maxResults?: number;
  nextToken?: string;
  sortOrder?: SortOrder;
}
const ListActsRequest = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<ListActsRequest>;
export type TraceLocationType = "S3" | (string & {});
const TraceLocationType = S.String;

export interface TraceLocation {
  locationType: TraceLocationType;
  location: string;
}
const TraceLocation = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<TraceLocation>;
export interface ActSummary {
  workflowRunId: string;
  sessionId: string;
  actId: string;
  status: ActStatus;
  startedAt: Date;
  endedAt?: Date;
  traceLocation?: TraceLocation;
}
const ActSummary = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<ActSummary>;
export type ActSummaries = ActSummary[];
const ActSummaries = /*@__PURE__*/ __L.at(__c3, 6);
export interface ListActsResponse {
  actSummaries: ActSummary[];
  nextToken?: string;
}
const ListActsResponse = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<ListActsResponse>;
export interface ListModelsRequest {
  clientCompatibilityVersion: number;
}
const ListModelsRequest = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<ListModelsRequest>;
export type ModelStatus = "ACTIVE" | "LEGACY" | "DEPRECATED" | "PREVIEW" | (string & {});
const ModelStatus = S.String;

export interface ModelLifecycle {
  status: ModelStatus;
}
const ModelLifecycle = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<ModelLifecycle>;
export interface ModelSummary {
  modelId: string;
  modelLifecycle: ModelLifecycle;
  minimumCompatibilityVersion: number;
}
const ModelSummary = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<ModelSummary>;
export type ModelSummaries = ModelSummary[];
const ModelSummaries = /*@__PURE__*/ __L.at(__c4, 3);
export interface ModelAlias {
  aliasName: string;
  latestModelId: string;
  resolvedModelId?: string;
}
const ModelAlias = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<ModelAlias>;
export type ModelAliases = ModelAlias[];
const ModelAliases = /*@__PURE__*/ __L.at(__c4, 5);
export type ModelIdList = string[];
const ModelIdList = /*@__PURE__*/ __L.at(__c4, 6);
export interface CompatibilityInformation {
  clientCompatibilityVersion: number;
  supportedModelIds: string[];
  message?: string;
}
const CompatibilityInformation = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<CompatibilityInformation>;
export interface ListModelsResponse {
  modelSummaries: ModelSummary[];
  modelAliases: ModelAlias[];
  compatibilityInformation: CompatibilityInformation;
}
const ListModelsResponse = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<ListModelsResponse>;
export interface ListSessionsRequest {
  workflowDefinitionName: string;
  workflowRunId: string;
  maxResults?: number;
  nextToken?: string;
  sortOrder?: SortOrder;
}
const ListSessionsRequest = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<ListSessionsRequest>;
export interface SessionSummary {
  sessionId: string;
}
const SessionSummary = CreateSessionResponse as any as S.Schema<SessionSummary>;
export type SessionSummaries = SessionSummary[];
const SessionSummaries = /*@__PURE__*/ __L.at(__c5, 2);
export interface ListSessionsResponse {
  sessionSummaries: SessionSummary[];
  nextToken?: string;
}
const ListSessionsResponse = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<ListSessionsResponse>;
export interface ListWorkflowDefinitionsRequest {
  maxResults?: number;
  nextToken?: string;
  sortOrder?: SortOrder;
}
const ListWorkflowDefinitionsRequest = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<ListWorkflowDefinitionsRequest>;
export interface WorkflowDefinitionSummary {
  workflowDefinitionArn: string;
  workflowDefinitionName: string;
  createdAt: Date;
  status: WorkflowDefinitionStatus;
}
const WorkflowDefinitionSummary = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<WorkflowDefinitionSummary>;
export type WorkflowDefinitionSummaries = WorkflowDefinitionSummary[];
const WorkflowDefinitionSummaries = /*@__PURE__*/ __L.at(__c5, 6);
export interface ListWorkflowDefinitionsResponse {
  workflowDefinitionSummaries: WorkflowDefinitionSummary[];
  nextToken?: string;
}
const ListWorkflowDefinitionsResponse = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<ListWorkflowDefinitionsResponse>;
export interface ListWorkflowRunsRequest {
  workflowDefinitionName: string;
  maxResults?: number;
  nextToken?: string;
  sortOrder?: SortOrder;
}
const ListWorkflowRunsRequest = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<ListWorkflowRunsRequest>;
export interface WorkflowRunSummary {
  workflowRunArn: string;
  workflowRunId: string;
  status: WorkflowRunStatus;
  startedAt: Date;
  endedAt?: Date;
  traceLocation?: TraceLocation;
}
const WorkflowRunSummary = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<WorkflowRunSummary>;
export type WorkflowRunSummaries = WorkflowRunSummary[];
const WorkflowRunSummaries = /*@__PURE__*/ __L.at(__c6, 2);
export interface ListWorkflowRunsResponse {
  workflowRunSummaries: WorkflowRunSummary[];
  nextToken?: string;
}
const ListWorkflowRunsResponse = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<ListWorkflowRunsResponse>;
export type SensitiveString = string | redacted.Redacted<string>;
export interface ActError {
  message: string | redacted.Redacted<string>;
  type?: string;
}
const ActError = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<ActError>;
export interface UpdateActRequest {
  workflowDefinitionName: string;
  workflowRunId: string;
  sessionId: string;
  actId: string;
  status: ActStatus;
  error?: ActError;
}
const UpdateActRequest = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<UpdateActRequest>;
export interface UpdateActResponse {}
const UpdateActResponse = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<UpdateActResponse>;
export interface UpdateWorkflowRunRequest {
  workflowDefinitionName: string;
  workflowRunId: string;
  status: WorkflowRunStatus;
}
const UpdateWorkflowRunRequest = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<UpdateWorkflowRunRequest>;
export interface UpdateWorkflowRunResponse {}
const UpdateWorkflowRunResponse = UpdateActResponse as any as S.Schema<UpdateWorkflowRunResponse>;
export type InternalServerExceptionReason =
  | "InvalidModelGeneration"
  | "RequestTokenLimitExceeded"
  | (string & {});
const InternalServerExceptionReason = S.String;

export type ValidationExceptionReason =
  | "FieldValidationFailed"
  | "InvalidStatus"
  | "GuardrailIntervened"
  | (string & {});
const ValidationExceptionReason = S.String;

export interface ValidationExceptionField {
  name: string;
  message: string;
}
const ValidationExceptionField = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
const ValidationExceptionFieldList = /*@__PURE__*/ __L.at(__c7, 1);
export type CreateActError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new AI task (act) within a session that can interact with tools and perform specific actions.
 */
export const createAct: API.OperationMethod<
  CreateActRequest,
  CreateActResponse,
  CreateActError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateActRequest,
  output: CreateActResponse,
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
  operationName: "CreateAct",
}));

export type CreateSessionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new session context within a workflow run to manage conversation state and acts.
 */
export const createSession: API.OperationMethod<
  CreateSessionRequest,
  CreateSessionResponse,
  CreateSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSessionRequest,
  output: CreateSessionResponse,
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
  operationName: "CreateSession",
}));

export type CreateWorkflowDefinitionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new workflow definition template that can be used to execute multiple workflow runs.
 */
export const createWorkflowDefinition: API.OperationMethod<
  CreateWorkflowDefinitionRequest,
  CreateWorkflowDefinitionResponse,
  CreateWorkflowDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateWorkflowDefinitionRequest,
  output: CreateWorkflowDefinitionResponse,
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
  operationName: "CreateWorkflowDefinition",
}));

export type CreateWorkflowRunError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new execution instance of a workflow definition with specified parameters.
 */
export const createWorkflowRun: API.OperationMethod<
  CreateWorkflowRunRequest,
  CreateWorkflowRunResponse,
  CreateWorkflowRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateWorkflowRunRequest,
  output: CreateWorkflowRunResponse,
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
  operationName: "CreateWorkflowRun",
}));

export type DeleteWorkflowDefinitionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a workflow definition and all associated resources. This operation cannot be undone.
 */
export const deleteWorkflowDefinition: API.OperationMethod<
  DeleteWorkflowDefinitionRequest,
  DeleteWorkflowDefinitionResponse,
  DeleteWorkflowDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteWorkflowDefinitionRequest,
  output: DeleteWorkflowDefinitionResponse,
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
  operationName: "DeleteWorkflowDefinition",
}));

export type DeleteWorkflowRunError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Terminates and cleans up a workflow run, stopping all associated acts and sessions.
 */
export const deleteWorkflowRun: API.OperationMethod<
  DeleteWorkflowRunRequest,
  DeleteWorkflowRunResponse,
  DeleteWorkflowRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteWorkflowRunRequest,
  output: DeleteWorkflowRunResponse,
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
  operationName: "DeleteWorkflowRun",
}));

export type GetWorkflowDefinitionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details and configuration of a specific workflow definition.
 */
export const getWorkflowDefinition: API.OperationMethod<
  GetWorkflowDefinitionRequest,
  GetWorkflowDefinitionResponse,
  GetWorkflowDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWorkflowDefinitionRequest,
  output: GetWorkflowDefinitionResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWorkflowDefinition",
}));

export type GetWorkflowRunError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the current state, configuration, and execution details of a workflow run.
 */
export const getWorkflowRun: API.OperationMethod<
  GetWorkflowRunRequest,
  GetWorkflowRunResponse,
  GetWorkflowRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWorkflowRunRequest,
  output: GetWorkflowRunResponse,
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
  operationName: "GetWorkflowRun",
}));

export type InvokeActStepError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Executes the next step of an act, processing tool call results and returning new tool calls if needed.
 */
export const invokeActStep: API.OperationMethod<
  InvokeActStepRequest,
  InvokeActStepResponse,
  InvokeActStepError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: InvokeActStepRequest,
  output: InvokeActStepResponse,
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
  operationName: "InvokeActStep",
}));

export type ListActsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all acts within a specific session with their current status and execution details.
 */
export const listActs: API.PaginatedOperationMethod<
  ListActsRequest,
  ListActsResponse,
  ListActsError,
  Credentials | HttpClient.HttpClient,
  ActSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListActsRequest,
  output: ListActsResponse,
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
  operationName: "ListActs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "actSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListModelsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists all available AI models that can be used for workflow execution, including their status and compatibility information.
 */
export const listModels: API.OperationMethod<
  ListModelsRequest,
  ListModelsResponse,
  ListModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListModelsRequest,
  output: ListModelsResponse,
  errors: [AccessDeniedException, InternalServerException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListModels",
}));

export type ListSessionsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all sessions within a specific workflow run.
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
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSessions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "sessionSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListWorkflowDefinitionsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all workflow definitions in your account with optional filtering and pagination.
 */
export const listWorkflowDefinitions: API.PaginatedOperationMethod<
  ListWorkflowDefinitionsRequest,
  ListWorkflowDefinitionsResponse,
  ListWorkflowDefinitionsError,
  Credentials | HttpClient.HttpClient,
  WorkflowDefinitionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListWorkflowDefinitionsRequest,
  output: ListWorkflowDefinitionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkflowDefinitions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "workflowDefinitionSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListWorkflowRunsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all workflow runs for a specific workflow definition with optional filtering and pagination.
 */
export const listWorkflowRuns: API.PaginatedOperationMethod<
  ListWorkflowRunsRequest,
  ListWorkflowRunsResponse,
  ListWorkflowRunsError,
  Credentials | HttpClient.HttpClient,
  WorkflowRunSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListWorkflowRunsRequest,
  output: ListWorkflowRunsResponse,
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
  operationName: "ListWorkflowRuns",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "workflowRunSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type UpdateActError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing act's configuration, status, or error information.
 */
export const updateAct: API.OperationMethod<
  UpdateActRequest,
  UpdateActResponse,
  UpdateActError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateActRequest,
  output: UpdateActResponse,
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
  operationName: "UpdateAct",
}));

export type UpdateWorkflowRunError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration or state of an active workflow run.
 */
export const updateWorkflowRun: API.OperationMethod<
  UpdateWorkflowRunRequest,
  UpdateWorkflowRunResponse,
  UpdateWorkflowRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateWorkflowRunRequest,
  output: UpdateWorkflowRunResponse,
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
  operationName: "UpdateWorkflowRun",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ json: S.Any })]);
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.String, description: SensitiveString, inputSchema: ToolInputSchema }),
      ).annotate({ identifier: "ToolSpec" });
    case 2:
      return S.Array(ToolSpec);
    case 3:
      return S.suspend(() =>
        S.Struct({
          workflowDefinitionName: S.String.pipe(T.HttpLabel("workflowDefinitionName")),
          workflowRunId: S.String.pipe(T.HttpLabel("workflowRunId")),
          sessionId: S.String.pipe(T.HttpLabel("sessionId")),
          task: SensitiveString,
          toolSpecs: S.optional(ToolSpecs),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/workflow-definitions/{workflowDefinitionName}/workflow-runs/{workflowRunId}/sessions/{sessionId}/acts",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateActRequest" });
    case 4:
      return S.suspend(() => S.Struct({ actId: S.String, status: ActStatus })).annotate({
        identifier: "CreateActResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          workflowDefinitionName: S.String.pipe(T.HttpLabel("workflowDefinitionName")),
          workflowRunId: S.String.pipe(T.HttpLabel("workflowRunId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/workflow-definitions/{workflowDefinitionName}/workflow-runs/{workflowRunId}/sessions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateSessionRequest" });
    case 6:
      return S.suspend(() => S.Struct({ sessionId: S.String })).annotate({
        identifier: "CreateSessionResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ s3BucketName: S.String, s3KeyPrefix: S.optional(S.String) }),
      ).annotate({ identifier: "WorkflowExportConfig" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(SensitiveString),
          exportConfig: S.optional(WorkflowExportConfig),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/workflow-definitions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateWorkflowDefinitionRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ status: WorkflowDefinitionStatus })).annotate({
        identifier: "CreateWorkflowDefinitionResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ compatibilityVersion: S.Number, sdkVersion: S.optional(S.String) }),
      ).annotate({ identifier: "ClientInfo" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workflowDefinitionName: S.String.pipe(T.HttpLabel("workflowDefinitionName")),
          modelId: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          logGroupName: S.optional(S.String),
          clientInfo: ClientInfo,
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/workflow-definitions/{workflowDefinitionName}/workflow-runs",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateWorkflowRunRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ workflowRunId: S.String, status: WorkflowRunStatus }),
      ).annotate({
        identifier: "CreateWorkflowRunResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          workflowDefinitionName: S.String.pipe(T.HttpLabel("workflowDefinitionName")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/workflow-definitions/{workflowDefinitionName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteWorkflowDefinitionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          workflowDefinitionName: S.String.pipe(T.HttpLabel("workflowDefinitionName")),
          workflowRunId: S.String.pipe(T.HttpLabel("workflowRunId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/workflow-definitions/{workflowDefinitionName}/workflow-runs/{workflowRunId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteWorkflowRunRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          workflowDefinitionName: S.String.pipe(T.HttpLabel("workflowDefinitionName")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workflow-definitions/{workflowDefinitionName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetWorkflowDefinitionRequest",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          arn: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          description: S.optional(SensitiveString),
          exportConfig: S.optional(WorkflowExportConfig),
          status: WorkflowDefinitionStatus,
        }),
      ).annotate({
        identifier: "GetWorkflowDefinitionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          workflowDefinitionName: S.String.pipe(T.HttpLabel("workflowDefinitionName")),
          workflowRunId: S.String.pipe(T.HttpLabel("workflowRunId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/workflow-definitions/{workflowDefinitionName}/workflow-runs/{workflowRunId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetWorkflowRunRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          workflowRunArn: S.String,
          workflowRunId: S.String,
          status: WorkflowRunStatus,
          startedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          modelId: S.String,
          logGroupName: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetWorkflowRunResponse" });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ text: S.String })]);
    case 4:
      return S.Array(CallResultContent);
    case 5:
      return S.suspend(() =>
        S.Struct({ callId: S.optional(S.String), content: CallResultContents }),
      ).annotate({ identifier: "CallResult" });
    case 6:
      return S.Array(CallResult);
    case 7:
      return S.suspend(() =>
        S.Struct({
          workflowDefinitionName: S.String.pipe(T.HttpLabel("workflowDefinitionName")),
          workflowRunId: S.String.pipe(T.HttpLabel("workflowRunId")),
          sessionId: S.String.pipe(T.HttpLabel("sessionId")),
          actId: S.String.pipe(T.HttpLabel("actId")),
          callResults: CallResults,
          previousStepId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/workflow-definitions/{workflowDefinitionName}/workflow-runs/{workflowRunId}/sessions/{sessionId}/acts/{actId}/invoke-step/",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "InvokeActStepRequest" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ callId: S.String, input: S.Any, name: S.String })).annotate(
        { identifier: "Call" },
      );
    case 1:
      return S.Array(Call);
    case 2:
      return S.suspend(() => S.Struct({ calls: Calls, stepId: S.String })).annotate({
        identifier: "InvokeActStepResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workflowDefinitionName: S.String.pipe(T.HttpLabel("workflowDefinitionName")),
          workflowRunId: S.optional(S.String).pipe(T.HttpQuery("workflowRunId")),
          sessionId: S.optional(S.String).pipe(T.HttpQuery("sessionId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          sortOrder: S.optional(SortOrder),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workflow-definitions/{workflowDefinitionName}/acts" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListActsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ locationType: TraceLocationType, location: S.String }),
      ).annotate({ identifier: "TraceLocation" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          workflowRunId: S.String,
          sessionId: S.String,
          actId: S.String,
          status: ActStatus,
          startedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          traceLocation: S.optional(TraceLocation),
        }),
      ).annotate({ identifier: "ActSummary" });
    case 6:
      return S.Array(ActSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({ actSummaries: ActSummaries, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListActsResponse" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clientCompatibilityVersion: S.Number.pipe(T.HttpQuery("clientCompatibilityVersion")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/models" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListModelsRequest" });
    case 1:
      return S.suspend(() => S.Struct({ status: ModelStatus })).annotate({
        identifier: "ModelLifecycle",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String,
          modelLifecycle: ModelLifecycle,
          minimumCompatibilityVersion: S.Number,
        }),
      ).annotate({ identifier: "ModelSummary" });
    case 3:
      return S.Array(ModelSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          aliasName: S.String,
          latestModelId: S.String,
          resolvedModelId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ModelAlias" });
    case 5:
      return S.Array(ModelAlias);
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({
          clientCompatibilityVersion: S.Number,
          supportedModelIds: ModelIdList,
          message: S.optional(S.String),
        }),
      ).annotate({ identifier: "CompatibilityInformation" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          modelSummaries: ModelSummaries,
          modelAliases: ModelAliases,
          compatibilityInformation: CompatibilityInformation,
        }),
      ).annotate({ identifier: "ListModelsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          workflowDefinitionName: S.String.pipe(T.HttpLabel("workflowDefinitionName")),
          workflowRunId: S.String.pipe(T.HttpLabel("workflowRunId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          sortOrder: S.optional(SortOrder),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/workflow-definitions/{workflowDefinitionName}/workflow-runs/{workflowRunId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListSessionsRequest" });
    case 2:
      return S.Array(SessionSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ sessionSummaries: SessionSummaries, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListSessionsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          sortOrder: S.optional(SortOrder),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workflow-definitions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListWorkflowDefinitionsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          workflowDefinitionArn: S.String,
          workflowDefinitionName: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: WorkflowDefinitionStatus,
        }),
      ).annotate({
        identifier: "WorkflowDefinitionSummary",
      });
    case 6:
      return S.Array(WorkflowDefinitionSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({
          workflowDefinitionSummaries: WorkflowDefinitionSummaries,
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListWorkflowDefinitionsResponse",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          workflowDefinitionName: S.String.pipe(T.HttpLabel("workflowDefinitionName")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          sortOrder: S.optional(SortOrder),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/workflow-definitions/{workflowDefinitionName}/workflow-runs",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListWorkflowRunsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          workflowRunArn: S.String,
          workflowRunId: S.String,
          status: WorkflowRunStatus,
          startedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          endedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          traceLocation: S.optional(TraceLocation),
        }),
      ).annotate({ identifier: "WorkflowRunSummary" });
    case 2:
      return S.Array(WorkflowRunSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ workflowRunSummaries: WorkflowRunSummaries, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListWorkflowRunsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ message: SensitiveString, type: S.optional(S.String) }),
      ).annotate({ identifier: "ActError" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          workflowDefinitionName: S.String.pipe(T.HttpLabel("workflowDefinitionName")),
          workflowRunId: S.String.pipe(T.HttpLabel("workflowRunId")),
          sessionId: S.String.pipe(T.HttpLabel("sessionId")),
          actId: S.String.pipe(T.HttpLabel("actId")),
          status: ActStatus,
          error: S.optional(ActError),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/workflow-definitions/{workflowDefinitionName}/workflow-runs/{workflowRunId}/sessions/{sessionId}/acts/{actId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateActRequest" });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "UpdateActResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          workflowDefinitionName: S.String.pipe(T.HttpLabel("workflowDefinitionName")),
          workflowRunId: S.String.pipe(T.HttpLabel("workflowRunId")),
          status: WorkflowRunStatus,
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/workflow-definitions/{workflowDefinitionName}/workflow-runs/{workflowRunId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateWorkflowRunRequest" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 1:
      return S.Array(ValidationExceptionField);
  }
}
