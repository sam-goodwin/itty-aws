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
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "IoTThingsGraph",
  serviceShapeName: "IotThingsGraphFrontEndService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "iotthingsgraph" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-09-06");
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
              `https://iotthingsgraph-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://iotthingsgraph-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://iotthingsgraph.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        if ("aws" === _.getAttr(PartitionResult, "name")) {
          return e(`https://iotthingsgraph.${Region}.amazonaws.com`);
        }
        return e(`https://iotthingsgraph.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class InternalFailureException
  extends /*@__PURE__*/ S.TaggedError<InternalFailureException>()(
    "InternalFailureException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InvalidRequestException
  extends /*@__PURE__*/ S.TaggedError<InvalidRequestException>()(
    "InvalidRequestException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(410),
  ).pipe(C.withBadRequestError) {}
export class ResourceAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<ResourceAlreadyExistsException>()(
    "ResourceAlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError, C.withAlreadyExistsError) {}
export class ResourceInUseException
  extends /*@__PURE__*/ S.TaggedError<ResourceInUseException>()(
    "ResourceInUseException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(412),
  ) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export type ThingName = string;
export type Urn = string;
export type Version = number;
export interface AssociateEntityToThingRequest {
  thingName: string;
  entityId: string;
  namespaceVersion?: number;
}
const AssociateEntityToThingRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<AssociateEntityToThingRequest>;
export interface AssociateEntityToThingResponse {}
const AssociateEntityToThingResponse = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<AssociateEntityToThingResponse>;
export type DefinitionLanguage = "GRAPHQL" | (string & {});
const DefinitionLanguage = S.String;

export type DefinitionText = string;
export interface DefinitionDocument {
  language: DefinitionLanguage;
  text: string;
}
const DefinitionDocument = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<DefinitionDocument>;
export interface CreateFlowTemplateRequest {
  definition: DefinitionDocument;
  compatibleNamespaceVersion?: number;
}
const CreateFlowTemplateRequest = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<CreateFlowTemplateRequest>;
export type Arn = string;
export interface FlowTemplateSummary {
  id?: string;
  arn?: string;
  revisionNumber?: number;
  createdAt?: Date;
}
const FlowTemplateSummary = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<FlowTemplateSummary>;
export interface CreateFlowTemplateResponse {
  summary?: FlowTemplateSummary;
}
const CreateFlowTemplateResponse = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<CreateFlowTemplateResponse>;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  key: string;
  value: string;
}
const Tag = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c0, 7);
export type DeploymentTarget = "GREENGRASS" | "CLOUD" | (string & {});
const DeploymentTarget = S.String;

export type GroupName = string;
export type S3BucketName = string;
export type Enabled = boolean;
export type RoleArn = string;
export interface MetricsConfiguration {
  cloudMetricEnabled?: boolean;
  metricRuleRoleArn?: string;
}
const MetricsConfiguration = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<MetricsConfiguration>;
export interface CreateSystemInstanceRequest {
  tags?: Tag[];
  definition: DefinitionDocument;
  target: DeploymentTarget;
  greengrassGroupName?: string;
  s3BucketName?: string;
  metricsConfiguration?: MetricsConfiguration;
  flowActionsRoleArn?: string;
}
const CreateSystemInstanceRequest = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<CreateSystemInstanceRequest>;
export type SystemInstanceDeploymentStatus =
  | "NOT_DEPLOYED"
  | "BOOTSTRAP"
  | "DEPLOY_IN_PROGRESS"
  | "DEPLOYED_IN_TARGET"
  | "UNDEPLOY_IN_PROGRESS"
  | "FAILED"
  | "PENDING_DELETE"
  | "DELETED_IN_TARGET"
  | (string & {});
const SystemInstanceDeploymentStatus = S.String;

export type GreengrassGroupId = string;
export type GreengrassGroupVersionId = string;
export interface SystemInstanceSummary {
  id?: string;
  arn?: string;
  status?: SystemInstanceDeploymentStatus;
  target?: DeploymentTarget;
  greengrassGroupName?: string;
  createdAt?: Date;
  updatedAt?: Date;
  greengrassGroupId?: string;
  greengrassGroupVersionId?: string;
}
const SystemInstanceSummary = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<SystemInstanceSummary>;
export interface CreateSystemInstanceResponse {
  summary?: SystemInstanceSummary;
}
const CreateSystemInstanceResponse = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<CreateSystemInstanceResponse>;
export interface CreateSystemTemplateRequest {
  definition: DefinitionDocument;
  compatibleNamespaceVersion?: number;
}
const CreateSystemTemplateRequest = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<CreateSystemTemplateRequest>;
export interface SystemTemplateSummary {
  id?: string;
  arn?: string;
  revisionNumber?: number;
  createdAt?: Date;
}
const SystemTemplateSummary = FlowTemplateSummary as any as S.Schema<SystemTemplateSummary>;
export interface CreateSystemTemplateResponse {
  summary?: SystemTemplateSummary;
}
const CreateSystemTemplateResponse =
  CreateFlowTemplateResponse as any as S.Schema<CreateSystemTemplateResponse>;
export interface DeleteFlowTemplateRequest {
  id: string;
}
const DeleteFlowTemplateRequest = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<DeleteFlowTemplateRequest>;
export interface DeleteFlowTemplateResponse {}
const DeleteFlowTemplateResponse =
  AssociateEntityToThingResponse as any as S.Schema<DeleteFlowTemplateResponse>;
export interface DeleteNamespaceRequest {}
const DeleteNamespaceRequest = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<DeleteNamespaceRequest>;
export type NamespaceName = string;
export interface DeleteNamespaceResponse {
  namespaceArn?: string;
  namespaceName?: string;
}
const DeleteNamespaceResponse = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<DeleteNamespaceResponse>;
export interface DeleteSystemInstanceRequest {
  id?: string;
}
const DeleteSystemInstanceRequest = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<DeleteSystemInstanceRequest>;
export interface DeleteSystemInstanceResponse {}
const DeleteSystemInstanceResponse =
  AssociateEntityToThingResponse as any as S.Schema<DeleteSystemInstanceResponse>;
export interface DeleteSystemTemplateRequest {
  id: string;
}
const DeleteSystemTemplateRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<DeleteSystemTemplateRequest>;
export interface DeleteSystemTemplateResponse {}
const DeleteSystemTemplateResponse =
  AssociateEntityToThingResponse as any as S.Schema<DeleteSystemTemplateResponse>;
export interface DeploySystemInstanceRequest {
  id?: string;
}
const DeploySystemInstanceRequest = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<DeploySystemInstanceRequest>;
export type GreengrassDeploymentId = string;
export interface DeploySystemInstanceResponse {
  summary: SystemInstanceSummary;
  greengrassDeploymentId?: string;
}
const DeploySystemInstanceResponse = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<DeploySystemInstanceResponse>;
export interface DeprecateFlowTemplateRequest {
  id: string;
}
const DeprecateFlowTemplateRequest = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<DeprecateFlowTemplateRequest>;
export interface DeprecateFlowTemplateResponse {}
const DeprecateFlowTemplateResponse =
  AssociateEntityToThingResponse as any as S.Schema<DeprecateFlowTemplateResponse>;
export interface DeprecateSystemTemplateRequest {
  id: string;
}
const DeprecateSystemTemplateRequest = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<DeprecateSystemTemplateRequest>;
export interface DeprecateSystemTemplateResponse {}
const DeprecateSystemTemplateResponse = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<DeprecateSystemTemplateResponse>;
export interface DescribeNamespaceRequest {
  namespaceName?: string;
}
const DescribeNamespaceRequest = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<DescribeNamespaceRequest>;
export interface DescribeNamespaceResponse {
  namespaceArn?: string;
  namespaceName?: string;
  trackingNamespaceName?: string;
  trackingNamespaceVersion?: number;
  namespaceVersion?: number;
}
const DescribeNamespaceResponse = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<DescribeNamespaceResponse>;
export type EntityType =
  | "DEVICE"
  | "SERVICE"
  | "DEVICE_MODEL"
  | "CAPABILITY"
  | "STATE"
  | "ACTION"
  | "EVENT"
  | "PROPERTY"
  | "MAPPING"
  | "ENUM"
  | (string & {});
const EntityType = S.String;

export interface DissociateEntityFromThingRequest {
  thingName: string;
  entityType: EntityType;
}
const DissociateEntityFromThingRequest = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<DissociateEntityFromThingRequest>;
export interface DissociateEntityFromThingResponse {}
const DissociateEntityFromThingResponse = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<DissociateEntityFromThingResponse>;
export type Urns = string[];
const Urns = /*@__PURE__*/ __L.at(__c3, 3);
export interface GetEntitiesRequest {
  ids: string[];
  namespaceVersion?: number;
}
const GetEntitiesRequest = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<GetEntitiesRequest>;
export interface EntityDescription {
  id?: string;
  arn?: string;
  type?: EntityType;
  createdAt?: Date;
  definition?: DefinitionDocument;
}
const EntityDescription = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<EntityDescription>;
export type EntityDescriptions = EntityDescription[];
const EntityDescriptions = /*@__PURE__*/ __L.at(__c3, 6);
export interface GetEntitiesResponse {
  descriptions?: EntityDescription[];
}
const GetEntitiesResponse = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<GetEntitiesResponse>;
export interface GetFlowTemplateRequest {
  id: string;
  revisionNumber?: number;
}
const GetFlowTemplateRequest = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<GetFlowTemplateRequest>;
export interface FlowTemplateDescription {
  summary?: FlowTemplateSummary;
  definition?: DefinitionDocument;
  validatedNamespaceVersion?: number;
}
const FlowTemplateDescription = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<FlowTemplateDescription>;
export interface GetFlowTemplateResponse {
  description?: FlowTemplateDescription;
}
const GetFlowTemplateResponse = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<GetFlowTemplateResponse>;
export type NextToken = string;
export type MaxResults = number;
export interface GetFlowTemplateRevisionsRequest {
  id: string;
  nextToken?: string;
  maxResults?: number;
}
const GetFlowTemplateRevisionsRequest = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<GetFlowTemplateRevisionsRequest>;
export type FlowTemplateSummaries = FlowTemplateSummary[];
const FlowTemplateSummaries = /*@__PURE__*/ __L.at(__c4, 4);
export interface GetFlowTemplateRevisionsResponse {
  summaries?: FlowTemplateSummary[];
  nextToken?: string;
}
const GetFlowTemplateRevisionsResponse = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<GetFlowTemplateRevisionsResponse>;
export interface GetNamespaceDeletionStatusRequest {}
const GetNamespaceDeletionStatusRequest = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<GetNamespaceDeletionStatusRequest>;
export type NamespaceDeletionStatus = "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | (string & {});
const NamespaceDeletionStatus = S.String;

export type NamespaceDeletionStatusErrorCodes = "VALIDATION_FAILED" | (string & {});
const NamespaceDeletionStatusErrorCodes = S.String;

export interface GetNamespaceDeletionStatusResponse {
  namespaceArn?: string;
  namespaceName?: string;
  status?: NamespaceDeletionStatus;
  errorCode?: NamespaceDeletionStatusErrorCodes;
  errorMessage?: string;
}
const GetNamespaceDeletionStatusResponse = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<GetNamespaceDeletionStatusResponse>;
export interface GetSystemInstanceRequest {
  id: string;
}
const GetSystemInstanceRequest = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<GetSystemInstanceRequest>;
export interface DependencyRevision {
  id?: string;
  revisionNumber?: number;
}
const DependencyRevision = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<DependencyRevision>;
export type DependencyRevisions = DependencyRevision[];
const DependencyRevisions = /*@__PURE__*/ __L.at(__c5, 2);
export interface SystemInstanceDescription {
  summary?: SystemInstanceSummary;
  definition?: DefinitionDocument;
  s3BucketName?: string;
  metricsConfiguration?: MetricsConfiguration;
  validatedNamespaceVersion?: number;
  validatedDependencyRevisions?: DependencyRevision[];
  flowActionsRoleArn?: string;
}
const SystemInstanceDescription = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<SystemInstanceDescription>;
export interface GetSystemInstanceResponse {
  description?: SystemInstanceDescription;
}
const GetSystemInstanceResponse = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<GetSystemInstanceResponse>;
export interface GetSystemTemplateRequest {
  id: string;
  revisionNumber?: number;
}
const GetSystemTemplateRequest = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<GetSystemTemplateRequest>;
export interface SystemTemplateDescription {
  summary?: SystemTemplateSummary;
  definition?: DefinitionDocument;
  validatedNamespaceVersion?: number;
}
const SystemTemplateDescription = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<SystemTemplateDescription>;
export interface GetSystemTemplateResponse {
  description?: SystemTemplateDescription;
}
const GetSystemTemplateResponse = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<GetSystemTemplateResponse>;
export interface GetSystemTemplateRevisionsRequest {
  id: string;
  nextToken?: string;
  maxResults?: number;
}
const GetSystemTemplateRevisionsRequest = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<GetSystemTemplateRevisionsRequest>;
export type SystemTemplateSummaries = SystemTemplateSummary[];
export interface GetSystemTemplateRevisionsResponse {
  summaries?: SystemTemplateSummary[];
  nextToken?: string;
}
const GetSystemTemplateRevisionsResponse =
  GetFlowTemplateRevisionsResponse as any as S.Schema<GetSystemTemplateRevisionsResponse>;
export type UploadId = string;
export interface GetUploadStatusRequest {
  uploadId: string;
}
const GetUploadStatusRequest = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<GetUploadStatusRequest>;
export type UploadStatus = "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | (string & {});
const UploadStatus = S.String;

export type StringList = string[];
const StringList = Urns as any as S.Schema<StringList>;
export interface GetUploadStatusResponse {
  uploadId: string;
  uploadStatus: UploadStatus;
  namespaceArn?: string;
  namespaceName?: string;
  namespaceVersion?: number;
  failureReason?: string[];
  createdDate: Date;
}
const GetUploadStatusResponse = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<GetUploadStatusResponse>;
export type FlowExecutionId = string;
export interface ListFlowExecutionMessagesRequest {
  flowExecutionId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListFlowExecutionMessagesRequest = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<ListFlowExecutionMessagesRequest>;
export type FlowExecutionMessageId = string;
export type FlowExecutionEventType =
  | "EXECUTION_STARTED"
  | "EXECUTION_FAILED"
  | "EXECUTION_ABORTED"
  | "EXECUTION_SUCCEEDED"
  | "STEP_STARTED"
  | "STEP_FAILED"
  | "STEP_SUCCEEDED"
  | "ACTIVITY_SCHEDULED"
  | "ACTIVITY_STARTED"
  | "ACTIVITY_FAILED"
  | "ACTIVITY_SUCCEEDED"
  | "START_FLOW_EXECUTION_TASK"
  | "SCHEDULE_NEXT_READY_STEPS_TASK"
  | "THING_ACTION_TASK"
  | "THING_ACTION_TASK_FAILED"
  | "THING_ACTION_TASK_SUCCEEDED"
  | "ACKNOWLEDGE_TASK_MESSAGE"
  | (string & {});
const FlowExecutionEventType = S.String;

export type FlowExecutionMessagePayload = string;
export interface FlowExecutionMessage {
  messageId?: string;
  eventType?: FlowExecutionEventType;
  timestamp?: Date;
  payload?: string;
}
const FlowExecutionMessage = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<FlowExecutionMessage>;
export type FlowExecutionMessages = FlowExecutionMessage[];
const FlowExecutionMessages = /*@__PURE__*/ __L.at(__c6, 5);
export interface ListFlowExecutionMessagesResponse {
  messages?: FlowExecutionMessage[];
  nextToken?: string;
}
const ListFlowExecutionMessagesResponse = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<ListFlowExecutionMessagesResponse>;
export type ResourceArn = string;
export interface ListTagsForResourceRequest {
  maxResults?: number;
  resourceArn: string;
  nextToken?: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: Tag[];
  nextToken?: string;
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<ListTagsForResourceResponse>;
export type EntityTypes = EntityType[];
const EntityTypes = /*@__PURE__*/ __L.at(__c7, 1);
export type EntityFilterName =
  | "NAME"
  | "NAMESPACE"
  | "SEMANTIC_TYPE_PATH"
  | "REFERENCED_ENTITY_ID"
  | (string & {});
const EntityFilterName = S.String;

export type EntityFilterValue = string;
export type EntityFilterValues = string[];
const EntityFilterValues = Urns as any as S.Schema<EntityFilterValues>;
export interface EntityFilter {
  name?: EntityFilterName;
  value?: string[];
}
const EntityFilter = /*@__PURE__*/ __L.at(__c7, 2) as any as S.Schema<EntityFilter>;
export type EntityFilters = EntityFilter[];
const EntityFilters = /*@__PURE__*/ __L.at(__c7, 3);
export interface SearchEntitiesRequest {
  entityTypes: EntityType[];
  filters?: EntityFilter[];
  nextToken?: string;
  maxResults?: number;
  namespaceVersion?: number;
}
const SearchEntitiesRequest = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<SearchEntitiesRequest>;
export interface SearchEntitiesResponse {
  descriptions?: EntityDescription[];
  nextToken?: string;
}
const SearchEntitiesResponse = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<SearchEntitiesResponse>;
export interface SearchFlowExecutionsRequest {
  systemInstanceId: string;
  flowExecutionId?: string;
  startTime?: Date;
  endTime?: Date;
  nextToken?: string;
  maxResults?: number;
}
const SearchFlowExecutionsRequest = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<SearchFlowExecutionsRequest>;
export type FlowExecutionStatus = "RUNNING" | "ABORTED" | "SUCCEEDED" | "FAILED" | (string & {});
const FlowExecutionStatus = S.String;

export interface FlowExecutionSummary {
  flowExecutionId?: string;
  status?: FlowExecutionStatus;
  systemInstanceId?: string;
  flowTemplateId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
const FlowExecutionSummary = /*@__PURE__*/ __L.at(__c7, 7) as any as S.Schema<FlowExecutionSummary>;
export type FlowExecutionSummaries = FlowExecutionSummary[];
const FlowExecutionSummaries = /*@__PURE__*/ __L.at(__c8, 0);
export interface SearchFlowExecutionsResponse {
  summaries?: FlowExecutionSummary[];
  nextToken?: string;
}
const SearchFlowExecutionsResponse = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<SearchFlowExecutionsResponse>;
export type FlowTemplateFilterName = "DEVICE_MODEL_ID" | (string & {});
const FlowTemplateFilterName = S.String;

export type FlowTemplateFilterValue = string;
export type FlowTemplateFilterValues = string[];
const FlowTemplateFilterValues = Urns as any as S.Schema<FlowTemplateFilterValues>;
export interface FlowTemplateFilter {
  name: FlowTemplateFilterName;
  value: string[];
}
const FlowTemplateFilter = /*@__PURE__*/ __L.at(__c8, 2) as any as S.Schema<FlowTemplateFilter>;
export type FlowTemplateFilters = FlowTemplateFilter[];
const FlowTemplateFilters = /*@__PURE__*/ __L.at(__c8, 3);
export interface SearchFlowTemplatesRequest {
  filters?: FlowTemplateFilter[];
  nextToken?: string;
  maxResults?: number;
}
const SearchFlowTemplatesRequest = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<SearchFlowTemplatesRequest>;
export interface SearchFlowTemplatesResponse {
  summaries?: FlowTemplateSummary[];
  nextToken?: string;
}
const SearchFlowTemplatesResponse =
  GetFlowTemplateRevisionsResponse as any as S.Schema<SearchFlowTemplatesResponse>;
export type SystemInstanceFilterName =
  | "SYSTEM_TEMPLATE_ID"
  | "STATUS"
  | "GREENGRASS_GROUP_NAME"
  | (string & {});
const SystemInstanceFilterName = S.String;

export type SystemInstanceFilterValue = string;
export type SystemInstanceFilterValues = string[];
const SystemInstanceFilterValues = Urns as any as S.Schema<SystemInstanceFilterValues>;
export interface SystemInstanceFilter {
  name?: SystemInstanceFilterName;
  value?: string[];
}
const SystemInstanceFilter = /*@__PURE__*/ __L.at(__c8, 5) as any as S.Schema<SystemInstanceFilter>;
export type SystemInstanceFilters = SystemInstanceFilter[];
const SystemInstanceFilters = /*@__PURE__*/ __L.at(__c8, 6);
export interface SearchSystemInstancesRequest {
  filters?: SystemInstanceFilter[];
  nextToken?: string;
  maxResults?: number;
}
const SearchSystemInstancesRequest = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<SearchSystemInstancesRequest>;
export type SystemInstanceSummaries = SystemInstanceSummary[];
const SystemInstanceSummaries = /*@__PURE__*/ __L.at(__c9, 0);
export interface SearchSystemInstancesResponse {
  summaries?: SystemInstanceSummary[];
  nextToken?: string;
}
const SearchSystemInstancesResponse = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<SearchSystemInstancesResponse>;
export type SystemTemplateFilterName = "FLOW_TEMPLATE_ID" | (string & {});
const SystemTemplateFilterName = S.String;

export type SystemTemplateFilterValue = string;
export type SystemTemplateFilterValues = string[];
const SystemTemplateFilterValues = Urns as any as S.Schema<SystemTemplateFilterValues>;
export interface SystemTemplateFilter {
  name: SystemTemplateFilterName;
  value: string[];
}
const SystemTemplateFilter = /*@__PURE__*/ __L.at(__c9, 2) as any as S.Schema<SystemTemplateFilter>;
export type SystemTemplateFilters = SystemTemplateFilter[];
const SystemTemplateFilters = /*@__PURE__*/ __L.at(__c9, 3);
export interface SearchSystemTemplatesRequest {
  filters?: SystemTemplateFilter[];
  nextToken?: string;
  maxResults?: number;
}
const SearchSystemTemplatesRequest = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<SearchSystemTemplatesRequest>;
export interface SearchSystemTemplatesResponse {
  summaries?: SystemTemplateSummary[];
  nextToken?: string;
}
const SearchSystemTemplatesResponse =
  GetFlowTemplateRevisionsResponse as any as S.Schema<SearchSystemTemplatesResponse>;
export interface SearchThingsRequest {
  entityId: string;
  nextToken?: string;
  maxResults?: number;
  namespaceVersion?: number;
}
const SearchThingsRequest = /*@__PURE__*/ __L.at(__c9, 5) as any as S.Schema<SearchThingsRequest>;
export type ThingArn = string;
export interface Thing {
  thingArn?: string;
  thingName?: string;
}
const Thing = /*@__PURE__*/ __L.at(__c9, 6) as any as S.Schema<Thing>;
export type Things = Thing[];
const Things = /*@__PURE__*/ __L.at(__c9, 7);
export interface SearchThingsResponse {
  things?: Thing[];
  nextToken?: string;
}
const SearchThingsResponse = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<SearchThingsResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Tag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c10, 1) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = AssociateEntityToThingResponse as any as S.Schema<TagResourceResponse>;
export interface UndeploySystemInstanceRequest {
  id?: string;
}
const UndeploySystemInstanceRequest = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<UndeploySystemInstanceRequest>;
export interface UndeploySystemInstanceResponse {
  summary?: SystemInstanceSummary;
}
const UndeploySystemInstanceResponse =
  CreateSystemInstanceResponse as any as S.Schema<UndeploySystemInstanceResponse>;
export type TagKeyList = string[];
const TagKeyList = Urns as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse =
  AssociateEntityToThingResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateFlowTemplateRequest {
  id: string;
  definition: DefinitionDocument;
  compatibleNamespaceVersion?: number;
}
const UpdateFlowTemplateRequest = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<UpdateFlowTemplateRequest>;
export interface UpdateFlowTemplateResponse {
  summary?: FlowTemplateSummary;
}
const UpdateFlowTemplateResponse =
  CreateFlowTemplateResponse as any as S.Schema<UpdateFlowTemplateResponse>;
export interface UpdateSystemTemplateRequest {
  id: string;
  definition: DefinitionDocument;
  compatibleNamespaceVersion?: number;
}
const UpdateSystemTemplateRequest = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<UpdateSystemTemplateRequest>;
export interface UpdateSystemTemplateResponse {
  summary?: SystemTemplateSummary;
}
const UpdateSystemTemplateResponse =
  CreateFlowTemplateResponse as any as S.Schema<UpdateSystemTemplateResponse>;
export type SyncWithPublicNamespace = boolean;
export type DeprecateExistingEntities = boolean;
export interface UploadEntityDefinitionsRequest {
  document?: DefinitionDocument;
  syncWithPublicNamespace?: boolean;
  deprecateExistingEntities?: boolean;
}
const UploadEntityDefinitionsRequest = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<UploadEntityDefinitionsRequest>;
export interface UploadEntityDefinitionsResponse {
  uploadId: string;
}
const UploadEntityDefinitionsResponse = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<UploadEntityDefinitionsResponse>;
export type ErrorMessage = string;
export type AssociateEntityToThingError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Associates a device with a concrete thing that is in the user's registry.
 *
 * A thing can be associated with only one device at a time. If you associate a thing with a new device id, its previous association will be removed.
 */
export const associateEntityToThing: API.OperationMethod<
  AssociateEntityToThingRequest,
  AssociateEntityToThingResponse,
  AssociateEntityToThingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateEntityToThingRequest,
  output: AssociateEntityToThingResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateEntityToThing",
}));

export type CreateFlowTemplateError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a workflow template. Workflows can be created only in the user's namespace. (The public namespace contains only
 * entities.) The workflow can contain only entities in the specified namespace. The workflow is validated against the entities in the
 * latest version of the user's namespace unless another namespace version is specified in the request.
 */
export const createFlowTemplate: API.OperationMethod<
  CreateFlowTemplateRequest,
  CreateFlowTemplateResponse,
  CreateFlowTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateFlowTemplateRequest,
  output: CreateFlowTemplateResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateFlowTemplate",
}));

export type CreateSystemInstanceError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a system instance.
 *
 * This action validates the system instance, prepares the deployment-related resources. For Greengrass deployments, it updates the Greengrass group that is
 * specified by the `greengrassGroupName` parameter. It also adds a file to the S3 bucket specified by the `s3BucketName` parameter. You need to
 * call `DeploySystemInstance` after running this action.
 *
 * For Greengrass deployments, since this action modifies and adds resources to a Greengrass group and an S3 bucket on the caller's behalf, the calling identity must have write permissions
 * to both the specified Greengrass group and S3 bucket. Otherwise, the call will fail with an authorization error.
 *
 * For cloud deployments, this action requires a `flowActionsRoleArn` value. This is an IAM role
 * that has permissions to access AWS services, such as AWS Lambda and AWS IoT, that the flow uses when it executes.
 *
 * If the definition document doesn't specify a version of the user's namespace, the latest version will be used by default.
 */
export const createSystemInstance: API.OperationMethod<
  CreateSystemInstanceRequest,
  CreateSystemInstanceResponse,
  CreateSystemInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSystemInstanceRequest,
  output: CreateSystemInstanceResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSystemInstance",
}));

export type CreateSystemTemplateError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a system. The system is validated against the entities in the
 * latest version of the user's namespace unless another namespace version is specified in the request.
 */
export const createSystemTemplate: API.OperationMethod<
  CreateSystemTemplateRequest,
  CreateSystemTemplateResponse,
  CreateSystemTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSystemTemplateRequest,
  output: CreateSystemTemplateResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceAlreadyExistsException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSystemTemplate",
}));

export type DeleteFlowTemplateError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceInUseException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a workflow. Any new system or deployment that contains this workflow will fail to update or deploy.
 * Existing deployments that contain the workflow will continue to run (since they use a snapshot of the workflow taken at the time of deployment).
 */
export const deleteFlowTemplate: API.OperationMethod<
  DeleteFlowTemplateRequest,
  DeleteFlowTemplateResponse,
  DeleteFlowTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteFlowTemplateRequest,
  output: DeleteFlowTemplateResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceInUseException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteFlowTemplate",
}));

export type DeleteNamespaceError = InternalFailureException | ThrottlingException | CommonErrors;
/**
 * Deletes the specified namespace. This action deletes all of the entities in the namespace. Delete the systems and flows that use entities in the namespace before performing this action. This action takes no
 * request parameters.
 */
export const deleteNamespace: API.OperationMethod<
  DeleteNamespaceRequest,
  DeleteNamespaceResponse,
  DeleteNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteNamespaceRequest,
  output: DeleteNamespaceResponse,
  errors: [InternalFailureException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteNamespace",
}));

export type DeleteSystemInstanceError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceInUseException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a system instance.
 * Only system instances that have never been deployed, or that have been undeployed can be deleted.
 *
 * Users can create a new system instance that has the same ID as a deleted system instance.
 */
export const deleteSystemInstance: API.OperationMethod<
  DeleteSystemInstanceRequest,
  DeleteSystemInstanceResponse,
  DeleteSystemInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSystemInstanceRequest,
  output: DeleteSystemInstanceResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceInUseException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSystemInstance",
}));

export type DeleteSystemTemplateError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceInUseException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a system. New deployments can't contain the system after its deletion.
 * Existing deployments that contain the system will continue to work because they use a snapshot of the system that is taken when it is deployed.
 */
export const deleteSystemTemplate: API.OperationMethod<
  DeleteSystemTemplateRequest,
  DeleteSystemTemplateResponse,
  DeleteSystemTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSystemTemplateRequest,
  output: DeleteSystemTemplateResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceInUseException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSystemTemplate",
}));

export type DeploySystemInstanceError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * **Greengrass and Cloud Deployments**
 *
 * Deploys the system instance to the target specified in `CreateSystemInstance`.
 *
 * **Greengrass Deployments**
 *
 * If the system or any workflows and entities have been updated before this action is called, then the deployment will create a new Amazon Simple Storage Service
 * resource file and then deploy it.
 *
 * Since this action creates a Greengrass deployment on the caller's behalf, the calling identity must have write permissions
 * to the specified Greengrass group. Otherwise, the call will fail with an authorization error.
 *
 * For information about the artifacts that get added to your Greengrass core device when you use this API, see AWS IoT Things Graph and AWS IoT Greengrass.
 */
export const deploySystemInstance: API.OperationMethod<
  DeploySystemInstanceRequest,
  DeploySystemInstanceResponse,
  DeploySystemInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeploySystemInstanceRequest,
  output: DeploySystemInstanceResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeploySystemInstance",
}));

export type DeprecateFlowTemplateError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deprecates the specified workflow. This action marks the workflow for deletion. Deprecated flows can't be deployed, but existing deployments will continue to run.
 */
export const deprecateFlowTemplate: API.OperationMethod<
  DeprecateFlowTemplateRequest,
  DeprecateFlowTemplateResponse,
  DeprecateFlowTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeprecateFlowTemplateRequest,
  output: DeprecateFlowTemplateResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeprecateFlowTemplate",
}));

export type DeprecateSystemTemplateError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deprecates the specified system.
 */
export const deprecateSystemTemplate: API.OperationMethod<
  DeprecateSystemTemplateRequest,
  DeprecateSystemTemplateResponse,
  DeprecateSystemTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeprecateSystemTemplateRequest,
  output: DeprecateSystemTemplateResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeprecateSystemTemplate",
}));

export type DescribeNamespaceError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the latest version of the user's namespace and the public version that it is tracking.
 */
export const describeNamespace: API.OperationMethod<
  DescribeNamespaceRequest,
  DescribeNamespaceResponse,
  DescribeNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeNamespaceRequest,
  output: DescribeNamespaceResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeNamespace",
}));

export type DissociateEntityFromThingError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only
 * one entity of a particular type can be associated with a thing.
 */
export const dissociateEntityFromThing: API.OperationMethod<
  DissociateEntityFromThingRequest,
  DissociateEntityFromThingResponse,
  DissociateEntityFromThingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DissociateEntityFromThingRequest,
  output: DissociateEntityFromThingResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DissociateEntityFromThing",
}));

export type GetEntitiesError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets definitions of the specified entities. Uses the latest version of the user's namespace by default. This API returns the
 * following TDM entities.
 *
 * - Properties
 *
 * - States
 *
 * - Events
 *
 * - Actions
 *
 * - Capabilities
 *
 * - Mappings
 *
 * - Devices
 *
 * - Device Models
 *
 * - Services
 *
 * This action doesn't return definitions for systems, flows, and deployments.
 */
export const getEntities: API.OperationMethod<
  GetEntitiesRequest,
  GetEntitiesResponse,
  GetEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetEntitiesRequest,
  output: GetEntitiesResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEntities",
}));

export type GetFlowTemplateError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the latest version of the `DefinitionDocument` and `FlowTemplateSummary` for the specified workflow.
 */
export const getFlowTemplate: API.OperationMethod<
  GetFlowTemplateRequest,
  GetFlowTemplateResponse,
  GetFlowTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFlowTemplateRequest,
  output: GetFlowTemplateResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFlowTemplate",
}));

export type GetFlowTemplateRevisionsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets revisions of the specified workflow. Only the last 100 revisions are stored. If the workflow has been deprecated,
 * this action will return revisions that occurred before the deprecation. This action won't work for workflows that have been deleted.
 */
export const getFlowTemplateRevisions: API.PaginatedOperationMethod<
  GetFlowTemplateRevisionsRequest,
  GetFlowTemplateRevisionsResponse,
  GetFlowTemplateRevisionsError,
  Credentials | HttpClient.HttpClient,
  FlowTemplateSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetFlowTemplateRevisionsRequest,
  output: GetFlowTemplateRevisionsResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFlowTemplateRevisions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "summaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetNamespaceDeletionStatusError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the status of a namespace deletion task.
 */
export const getNamespaceDeletionStatus: API.OperationMethod<
  GetNamespaceDeletionStatusRequest,
  GetNamespaceDeletionStatusResponse,
  GetNamespaceDeletionStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetNamespaceDeletionStatusRequest,
  output: GetNamespaceDeletionStatusResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetNamespaceDeletionStatus",
}));

export type GetSystemInstanceError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets a system instance.
 */
export const getSystemInstance: API.OperationMethod<
  GetSystemInstanceRequest,
  GetSystemInstanceResponse,
  GetSystemInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSystemInstanceRequest,
  output: GetSystemInstanceResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSystemInstance",
}));

export type GetSystemTemplateError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets a system.
 */
export const getSystemTemplate: API.OperationMethod<
  GetSystemTemplateRequest,
  GetSystemTemplateResponse,
  GetSystemTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSystemTemplateRequest,
  output: GetSystemTemplateResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSystemTemplate",
}));

export type GetSystemTemplateRevisionsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets revisions made to the specified system template. Only the previous 100 revisions are stored. If the system has been deprecated, this action will return
 * the revisions that occurred before its deprecation. This action won't work with systems that have been deleted.
 */
export const getSystemTemplateRevisions: API.PaginatedOperationMethod<
  GetSystemTemplateRevisionsRequest,
  GetSystemTemplateRevisionsResponse,
  GetSystemTemplateRevisionsError,
  Credentials | HttpClient.HttpClient,
  SystemTemplateSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetSystemTemplateRevisionsRequest,
  output: GetSystemTemplateRevisionsResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSystemTemplateRevisions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "summaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetUploadStatusError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the status of the specified upload.
 */
export const getUploadStatus: API.OperationMethod<
  GetUploadStatusRequest,
  GetUploadStatusResponse,
  GetUploadStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetUploadStatusRequest,
  output: GetUploadStatusResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetUploadStatus",
}));

export type ListFlowExecutionMessagesError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns a list of objects that contain information about events in a flow execution.
 */
export const listFlowExecutionMessages: API.PaginatedOperationMethod<
  ListFlowExecutionMessagesRequest,
  ListFlowExecutionMessagesResponse,
  ListFlowExecutionMessagesError,
  Credentials | HttpClient.HttpClient,
  FlowExecutionMessage
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFlowExecutionMessagesRequest,
  output: ListFlowExecutionMessagesResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFlowExecutionMessages",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "messages",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists all tags on an AWS IoT Things Graph resource.
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
    ResourceAlreadyExistsException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "tags",
    pageSize: "maxResults",
  } as const,
})) as any;

export type SearchEntitiesError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Searches for entities of the specified type. You can search for entities in your namespace and the public namespace that you're tracking.
 */
export const searchEntities: API.PaginatedOperationMethod<
  SearchEntitiesRequest,
  SearchEntitiesResponse,
  SearchEntitiesError,
  Credentials | HttpClient.HttpClient,
  EntityDescription
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SearchEntitiesRequest,
  output: SearchEntitiesResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchEntities",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "descriptions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type SearchFlowExecutionsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Searches for AWS IoT Things Graph workflow execution instances.
 */
export const searchFlowExecutions: API.PaginatedOperationMethod<
  SearchFlowExecutionsRequest,
  SearchFlowExecutionsResponse,
  SearchFlowExecutionsError,
  Credentials | HttpClient.HttpClient,
  FlowExecutionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SearchFlowExecutionsRequest,
  output: SearchFlowExecutionsResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchFlowExecutions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "summaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type SearchFlowTemplatesError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Searches for summary information about workflows.
 */
export const searchFlowTemplates: API.PaginatedOperationMethod<
  SearchFlowTemplatesRequest,
  SearchFlowTemplatesResponse,
  SearchFlowTemplatesError,
  Credentials | HttpClient.HttpClient,
  FlowTemplateSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SearchFlowTemplatesRequest,
  output: SearchFlowTemplatesResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchFlowTemplates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "summaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type SearchSystemInstancesError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Searches for system instances in the user's account.
 */
export const searchSystemInstances: API.PaginatedOperationMethod<
  SearchSystemInstancesRequest,
  SearchSystemInstancesResponse,
  SearchSystemInstancesError,
  Credentials | HttpClient.HttpClient,
  SystemInstanceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SearchSystemInstancesRequest,
  output: SearchSystemInstancesResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchSystemInstances",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "summaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type SearchSystemTemplatesError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow.
 */
export const searchSystemTemplates: API.PaginatedOperationMethod<
  SearchSystemTemplatesRequest,
  SearchSystemTemplatesResponse,
  SearchSystemTemplatesError,
  Credentials | HttpClient.HttpClient,
  SystemTemplateSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SearchSystemTemplatesRequest,
  output: SearchSystemTemplatesResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchSystemTemplates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "summaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type SearchThingsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Searches for things associated with the specified entity. You can search by both device and device model.
 *
 * For example, if two different devices, camera1 and camera2, implement the camera device model, the user can associate thing1 to camera1 and thing2 to camera2.
 * `SearchThings(camera2)` will return only thing2, but `SearchThings(camera)` will return both thing1 and thing2.
 *
 * This action searches for exact matches and doesn't perform partial text matching.
 */
export const searchThings: API.PaginatedOperationMethod<
  SearchThingsRequest,
  SearchThingsResponse,
  SearchThingsError,
  Credentials | HttpClient.HttpClient,
  Thing
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SearchThingsRequest,
  output: SearchThingsResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchThings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "things",
    pageSize: "maxResults",
  } as const,
})) as any;

export type TagResourceError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a tag for the specified resource.
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
    ResourceAlreadyExistsException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UndeploySystemInstanceError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Removes a system instance from its target (Cloud or Greengrass).
 */
export const undeploySystemInstance: API.OperationMethod<
  UndeploySystemInstanceRequest,
  UndeploySystemInstanceResponse,
  UndeploySystemInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UndeploySystemInstanceRequest,
  output: UndeploySystemInstanceResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UndeploySystemInstance",
}));

export type UntagResourceError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | ThrottlingException
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
    InternalFailureException,
    InvalidRequestException,
    ResourceAlreadyExistsException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateFlowTemplateError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates the specified workflow. All deployed systems and system instances that use the workflow will see the changes in the flow when it is redeployed. If you don't want this
 * behavior, copy the workflow (creating a new workflow with a different ID), and update the copy. The workflow can contain only entities in the specified namespace.
 */
export const updateFlowTemplate: API.OperationMethod<
  UpdateFlowTemplateRequest,
  UpdateFlowTemplateResponse,
  UpdateFlowTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateFlowTemplateRequest,
  output: UpdateFlowTemplateResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFlowTemplate",
}));

export type UpdateSystemTemplateError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates the specified system. You don't need to run this action after updating a workflow. Any deployment that uses the system will see the changes in the system when it is redeployed.
 */
export const updateSystemTemplate: API.OperationMethod<
  UpdateSystemTemplateRequest,
  UpdateSystemTemplateResponse,
  UpdateSystemTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSystemTemplateRequest,
  output: UpdateSystemTemplateResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSystemTemplate",
}));

export type UploadEntityDefinitionsError =
  | InternalFailureException
  | InvalidRequestException
  | ThrottlingException
  | CommonErrors;
/**
 * Asynchronously uploads one or more entity definitions to the user's namespace. The `document` parameter is required if
 * `syncWithPublicNamespace` and `deleteExistingEntites` are false. If the `syncWithPublicNamespace` parameter is set to
 * `true`, the user's namespace will synchronize with the latest version of the public namespace. If `deprecateExistingEntities` is set to true,
 * all entities in the latest version will be deleted before the new `DefinitionDocument` is uploaded.
 *
 * When a user uploads entity definitions for the first time, the service creates a new namespace for the user. The new namespace tracks the public namespace. Currently users
 * can have only one namespace. The namespace version increments whenever a user uploads entity definitions that are backwards-incompatible and whenever a user sets the
 * `syncWithPublicNamespace` parameter or the `deprecateExistingEntities` parameter to `true`.
 *
 * The IDs for all of the entities should be in URN format. Each entity must be in the user's namespace. Users can't create entities in the public namespace, but entity definitions can refer to entities in the public namespace.
 *
 * Valid entities are `Device`, `DeviceModel`, `Service`, `Capability`, `State`, `Action`, `Event`, `Property`,
 * `Mapping`, `Enum`.
 */
export const uploadEntityDefinitions: API.OperationMethod<
  UploadEntityDefinitionsRequest,
  UploadEntityDefinitionsResponse,
  UploadEntityDefinitionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UploadEntityDefinitionsRequest,
  output: UploadEntityDefinitionsResponse,
  errors: [InternalFailureException, InvalidRequestException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UploadEntityDefinitions",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          thingName: S.String,
          entityId: S.String,
          namespaceVersion: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AssociateEntityToThingRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AssociateEntityToThingResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ language: DefinitionLanguage, text: S.String })).annotate({
        identifier: "DefinitionDocument",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          definition: DefinitionDocument,
          compatibleNamespaceVersion: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateFlowTemplateRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          revisionNumber: S.optional(S.Number),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "FlowTemplateSummary" });
    case 5:
      return S.suspend(() => S.Struct({ summary: S.optional(FlowTemplateSummary) })).annotate({
        identifier: "CreateFlowTemplateResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
        identifier: "Tag",
      });
    case 7:
      return S.Array(Tag);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          cloudMetricEnabled: S.optional(S.Boolean),
          metricRuleRoleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "MetricsConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          tags: S.optional(TagList),
          definition: DefinitionDocument,
          target: DeploymentTarget,
          greengrassGroupName: S.optional(S.String),
          s3BucketName: S.optional(S.String),
          metricsConfiguration: S.optional(MetricsConfiguration),
          flowActionsRoleArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateSystemInstanceRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          status: S.optional(SystemInstanceDeploymentStatus),
          target: S.optional(DeploymentTarget),
          greengrassGroupName: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          greengrassGroupId: S.optional(S.String),
          greengrassGroupVersionId: S.optional(S.String),
        }),
      ).annotate({ identifier: "SystemInstanceSummary" });
    case 3:
      return S.suspend(() => S.Struct({ summary: S.optional(SystemInstanceSummary) })).annotate({
        identifier: "CreateSystemInstanceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          definition: DefinitionDocument,
          compatibleNamespaceVersion: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateSystemTemplateRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ id: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteFlowTemplateRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteNamespaceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ namespaceArn: S.optional(S.String), namespaceName: S.optional(S.String) }),
      ).annotate({ identifier: "DeleteNamespaceResponse" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ id: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteSystemInstanceRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ id: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteSystemTemplateRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ id: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeploySystemInstanceRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ summary: SystemInstanceSummary, greengrassDeploymentId: S.optional(S.String) }),
      ).annotate({
        identifier: "DeploySystemInstanceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ id: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeprecateFlowTemplateRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ id: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeprecateSystemTemplateRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeprecateSystemTemplateResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ namespaceName: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeNamespaceRequest" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          namespaceArn: S.optional(S.String),
          namespaceName: S.optional(S.String),
          trackingNamespaceName: S.optional(S.String),
          trackingNamespaceVersion: S.optional(S.Number),
          namespaceVersion: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "DescribeNamespaceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ thingName: S.String, entityType: EntityType }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DissociateEntityFromThingRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DissociateEntityFromThingResponse",
      });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({ ids: Urns, namespaceVersion: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetEntitiesRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          type: S.optional(EntityType),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          definition: S.optional(DefinitionDocument),
        }),
      ).annotate({ identifier: "EntityDescription" });
    case 6:
      return S.Array(EntityDescription);
    case 7:
      return S.suspend(() => S.Struct({ descriptions: S.optional(EntityDescriptions) })).annotate({
        identifier: "GetEntitiesResponse",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ id: S.String, revisionNumber: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetFlowTemplateRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          summary: S.optional(FlowTemplateSummary),
          definition: S.optional(DefinitionDocument),
          validatedNamespaceVersion: S.optional(S.Number),
        }),
      ).annotate({ identifier: "FlowTemplateDescription" });
    case 2:
      return S.suspend(() =>
        S.Struct({ description: S.optional(FlowTemplateDescription) }),
      ).annotate({ identifier: "GetFlowTemplateResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetFlowTemplateRevisionsRequest",
      });
    case 4:
      return S.Array(FlowTemplateSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({ summaries: S.optional(FlowTemplateSummaries), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "GetFlowTemplateRevisionsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetNamespaceDeletionStatusRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          namespaceArn: S.optional(S.String),
          namespaceName: S.optional(S.String),
          status: S.optional(NamespaceDeletionStatus),
          errorCode: S.optional(NamespaceDeletionStatusErrorCodes),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetNamespaceDeletionStatusResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ id: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetSystemInstanceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ id: S.optional(S.String), revisionNumber: S.optional(S.Number) }),
      ).annotate({ identifier: "DependencyRevision" });
    case 2:
      return S.Array(DependencyRevision);
    case 3:
      return S.suspend(() =>
        S.Struct({
          summary: S.optional(SystemInstanceSummary),
          definition: S.optional(DefinitionDocument),
          s3BucketName: S.optional(S.String),
          metricsConfiguration: S.optional(MetricsConfiguration),
          validatedNamespaceVersion: S.optional(S.Number),
          validatedDependencyRevisions: S.optional(DependencyRevisions),
          flowActionsRoleArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SystemInstanceDescription",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ description: S.optional(SystemInstanceDescription) }),
      ).annotate({
        identifier: "GetSystemInstanceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ id: S.String, revisionNumber: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetSystemTemplateRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          summary: S.optional(SystemTemplateSummary),
          definition: S.optional(DefinitionDocument),
          validatedNamespaceVersion: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "SystemTemplateDescription",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ description: S.optional(SystemTemplateDescription) }),
      ).annotate({
        identifier: "GetSystemTemplateResponse",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetSystemTemplateRevisionsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ uploadId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetUploadStatusRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          uploadId: S.String,
          uploadStatus: UploadStatus,
          namespaceArn: S.optional(S.String),
          namespaceName: S.optional(S.String),
          namespaceVersion: S.optional(S.Number),
          failureReason: S.optional(StringList),
          createdDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "GetUploadStatusResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          flowExecutionId: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListFlowExecutionMessagesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          messageId: S.optional(S.String),
          eventType: S.optional(FlowExecutionEventType),
          timestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          payload: S.optional(S.String),
        }),
      ).annotate({ identifier: "FlowExecutionMessage" });
    case 5:
      return S.Array(FlowExecutionMessage);
    case 6:
      return S.suspend(() =>
        S.Struct({ messages: S.optional(FlowExecutionMessages), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListFlowExecutionMessagesResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          resourceArn: S.String,
          nextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ tags: S.optional(TagList), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 1:
      return S.Array(EntityType);
    case 2:
      return S.suspend(() =>
        S.Struct({ name: S.optional(EntityFilterName), value: S.optional(EntityFilterValues) }),
      ).annotate({ identifier: "EntityFilter" });
    case 3:
      return S.Array(EntityFilter);
    case 4:
      return S.suspend(() =>
        S.Struct({
          entityTypes: EntityTypes,
          filters: S.optional(EntityFilters),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          namespaceVersion: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SearchEntitiesRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ descriptions: S.optional(EntityDescriptions), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "SearchEntitiesResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          systemInstanceId: S.String,
          flowExecutionId: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SearchFlowExecutionsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          flowExecutionId: S.optional(S.String),
          status: S.optional(FlowExecutionStatus),
          systemInstanceId: S.optional(S.String),
          flowTemplateId: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "FlowExecutionSummary" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(FlowExecutionSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          summaries: S.optional(FlowExecutionSummaries),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SearchFlowExecutionsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ name: FlowTemplateFilterName, value: FlowTemplateFilterValues }),
      ).annotate({ identifier: "FlowTemplateFilter" });
    case 3:
      return S.Array(FlowTemplateFilter);
    case 4:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(FlowTemplateFilters),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SearchFlowTemplatesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(SystemInstanceFilterName),
          value: S.optional(SystemInstanceFilterValues),
        }),
      ).annotate({ identifier: "SystemInstanceFilter" });
    case 6:
      return S.Array(SystemInstanceFilter);
    case 7:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(SystemInstanceFilters),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SearchSystemInstancesRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(SystemInstanceSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          summaries: S.optional(SystemInstanceSummaries),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SearchSystemInstancesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ name: SystemTemplateFilterName, value: SystemTemplateFilterValues }),
      ).annotate({ identifier: "SystemTemplateFilter" });
    case 3:
      return S.Array(SystemTemplateFilter);
    case 4:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(SystemTemplateFilters),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SearchSystemTemplatesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          entityId: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          namespaceVersion: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SearchThingsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ thingArn: S.optional(S.String), thingName: S.optional(S.String) }),
      ).annotate({ identifier: "Thing" });
    case 7:
      return S.Array(Thing);
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ things: S.optional(Things), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "SearchThingsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tags: TagList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ id: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UndeploySystemInstanceRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tagKeys: TagKeyList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          definition: DefinitionDocument,
          compatibleNamespaceVersion: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateFlowTemplateRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          definition: DefinitionDocument,
          compatibleNamespaceVersion: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateSystemTemplateRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          document: S.optional(DefinitionDocument),
          syncWithPublicNamespace: S.optional(S.Boolean),
          deprecateExistingEntities: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UploadEntityDefinitionsRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ uploadId: S.String })).annotate({
        identifier: "UploadEntityDefinitionsResponse",
      });
  }
}
