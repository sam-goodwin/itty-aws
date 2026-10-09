import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "CodeCatalyst",
  serviceShapeName: "CodeCatalyst",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "CodeCatalyst" });
const ver = /*@__PURE__*/ T.ServiceVersion("2022-09-28");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseFIPS = false, Region, Endpoint } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  if (Endpoint != null) {
    return e(Endpoint);
  }
  {
    const PartitionResult = _.partition("us-west-2");
    if (!(Region != null) && PartitionResult != null && PartitionResult !== false) {
      if (UseFIPS === true) {
        if (_.getAttr(PartitionResult, "supportsFIPS") === false) {
          return err("Partition does not support FIPS.");
        }
        return e(
          `https://codecatalyst-fips.global.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
        );
      }
      return e(`https://codecatalyst.global.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
    }
  }
  {
    const PartitionResult = _.partition(Region);
    if (Region != null && PartitionResult != null && PartitionResult !== false) {
      if (UseFIPS === true) {
        if (_.getAttr(PartitionResult, "supportsFIPS") === false) {
          return err("Partition does not support FIPS.");
        }
        return e(
          `https://codecatalyst-fips.global.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
        );
      }
      return e(`https://codecatalyst.global.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
    }
  }
  return err("No matching endpoint rule");
});

export type AccessTokenName = string;
export interface CreateAccessTokenRequest {
  name: string;
  expiresTime?: Date;
}
const CreateAccessTokenRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<CreateAccessTokenRequest>;
export type AccessTokenSecret = string | redacted.Redacted<string>;
export type AccessTokenId = string;
export interface CreateAccessTokenResponse {
  secret: string | redacted.Redacted<string>;
  name: string;
  expiresTime: Date;
  accessTokenId: string;
}
const CreateAccessTokenResponse = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<CreateAccessTokenResponse>;
export type NameString = string;
export type SourceRepositoryNameString = string;
export type SourceRepositoryBranchString = string;
export interface RepositoryInput {
  repositoryName: string;
  branchName?: string;
}
const RepositoryInput = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<RepositoryInput>;
export type RepositoriesInput = RepositoryInput[];
const RepositoriesInput = /*@__PURE__*/ __L.at(__c0, 3);
export type ClientToken = string;
export interface IdeConfiguration {
  runtime?: string;
  name?: string;
}
const IdeConfiguration = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<IdeConfiguration>;
export type IdeConfigurationList = IdeConfiguration[];
const IdeConfigurationList = /*@__PURE__*/ __L.at(__c0, 5);
export type InstanceType = string;
export type InactivityTimeoutMinutes = number;
export interface PersistentStorageConfiguration {
  sizeInGiB: number;
}
const PersistentStorageConfiguration = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<PersistentStorageConfiguration>;
export interface CreateDevEnvironmentRequest {
  spaceName: string;
  projectName: string;
  repositories?: RepositoryInput[];
  clientToken?: string;
  alias?: string;
  ides?: IdeConfiguration[];
  instanceType: string;
  inactivityTimeoutMinutes?: number;
  persistentStorage: PersistentStorageConfiguration;
  vpcConnectionName?: string;
}
const CreateDevEnvironmentRequest = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<CreateDevEnvironmentRequest>;
export type Uuid = string;
export interface CreateDevEnvironmentResponse {
  spaceName: string;
  projectName: string;
  id: string;
  vpcConnectionName?: string;
}
const CreateDevEnvironmentResponse = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<CreateDevEnvironmentResponse>;
export type ProjectDisplayName = string;
export type ProjectDescription = string;
export interface CreateProjectRequest {
  spaceName: string;
  displayName: string;
  description?: string;
}
const CreateProjectRequest = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<CreateProjectRequest>;
export interface CreateProjectResponse {
  spaceName?: string;
  name: string;
  displayName?: string;
  description?: string;
}
const CreateProjectResponse = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<CreateProjectResponse>;
export type SourceRepositoryDescriptionString = string;
export interface CreateSourceRepositoryRequest {
  spaceName: string;
  projectName: string;
  name: string;
  description?: string;
}
const CreateSourceRepositoryRequest = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<CreateSourceRepositoryRequest>;
export interface CreateSourceRepositoryResponse {
  spaceName: string;
  projectName: string;
  name: string;
  description?: string;
}
const CreateSourceRepositoryResponse = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<CreateSourceRepositoryResponse>;
export interface CreateSourceRepositoryBranchRequest {
  spaceName: string;
  projectName: string;
  sourceRepositoryName: string;
  name: string;
  headCommitId?: string;
}
const CreateSourceRepositoryBranchRequest = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<CreateSourceRepositoryBranchRequest>;
export type SourceRepositoryBranchRefString = string;
export interface CreateSourceRepositoryBranchResponse {
  ref?: string;
  name?: string;
  lastUpdatedTime?: Date;
  headCommitId?: string;
}
const CreateSourceRepositoryBranchResponse = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<CreateSourceRepositoryBranchResponse>;
export interface DeleteAccessTokenRequest {
  id: string;
}
const DeleteAccessTokenRequest = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<DeleteAccessTokenRequest>;
export interface DeleteAccessTokenResponse {}
const DeleteAccessTokenResponse = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<DeleteAccessTokenResponse>;
export interface DeleteDevEnvironmentRequest {
  spaceName: string;
  projectName: string;
  id: string;
}
const DeleteDevEnvironmentRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<DeleteDevEnvironmentRequest>;
export interface DeleteDevEnvironmentResponse {
  spaceName: string;
  projectName: string;
  id: string;
}
const DeleteDevEnvironmentResponse = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<DeleteDevEnvironmentResponse>;
export interface DeleteProjectRequest {
  spaceName: string;
  name: string;
}
const DeleteProjectRequest = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<DeleteProjectRequest>;
export interface DeleteProjectResponse {
  spaceName: string;
  name: string;
  displayName?: string;
}
const DeleteProjectResponse = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<DeleteProjectResponse>;
export interface DeleteSourceRepositoryRequest {
  spaceName: string;
  projectName: string;
  name: string;
}
const DeleteSourceRepositoryRequest = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<DeleteSourceRepositoryRequest>;
export interface DeleteSourceRepositoryResponse {
  spaceName: string;
  projectName: string;
  name: string;
}
const DeleteSourceRepositoryResponse = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<DeleteSourceRepositoryResponse>;
export interface DeleteSpaceRequest {
  name: string;
}
const DeleteSpaceRequest = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<DeleteSpaceRequest>;
export interface DeleteSpaceResponse {
  name: string;
  displayName?: string;
}
const DeleteSpaceResponse = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<DeleteSpaceResponse>;
export interface GetDevEnvironmentRequest {
  spaceName: string;
  projectName: string;
  id: string;
}
const GetDevEnvironmentRequest = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<GetDevEnvironmentRequest>;
export type DevEnvironmentStatus = string;
export type StatusReason = string;
export interface DevEnvironmentRepositorySummary {
  repositoryName: string;
  branchName?: string;
}
const DevEnvironmentRepositorySummary = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<DevEnvironmentRepositorySummary>;
export type DevEnvironmentRepositorySummaries = DevEnvironmentRepositorySummary[];
const DevEnvironmentRepositorySummaries = /*@__PURE__*/ __L.at(__c3, 3);
export interface Ide {
  runtime?: string;
  name?: string;
}
export type Ides = Ide[];
const Ides = IdeConfigurationList as any as S.Schema<Ides>;
export interface PersistentStorage {
  sizeInGiB: number;
}
const PersistentStorage = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<PersistentStorage>;
export interface GetDevEnvironmentResponse {
  spaceName: string;
  projectName: string;
  id: string;
  lastUpdatedTime: Date;
  creatorId: string;
  status: string;
  statusReason?: string;
  repositories: DevEnvironmentRepositorySummary[];
  alias?: string;
  ides?: Ide[];
  instanceType: string;
  inactivityTimeoutMinutes: number;
  persistentStorage: PersistentStorage;
  vpcConnectionName?: string;
}
const GetDevEnvironmentResponse = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<GetDevEnvironmentResponse>;
export interface GetProjectRequest {
  spaceName: string;
  name: string;
}
const GetProjectRequest = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<GetProjectRequest>;
export interface GetProjectResponse {
  spaceName?: string;
  name: string;
  displayName?: string;
  description?: string;
}
const GetProjectResponse = CreateProjectResponse as any as S.Schema<GetProjectResponse>;
export interface GetSourceRepositoryRequest {
  spaceName: string;
  projectName: string;
  name: string;
}
const GetSourceRepositoryRequest = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<GetSourceRepositoryRequest>;
export interface GetSourceRepositoryResponse {
  spaceName: string;
  projectName: string;
  name: string;
  description?: string;
  lastUpdatedTime: Date;
  createdTime: Date;
}
const GetSourceRepositoryResponse = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<GetSourceRepositoryResponse>;
export interface GetSourceRepositoryCloneUrlsRequest {
  spaceName: string;
  projectName: string;
  sourceRepositoryName: string;
}
const GetSourceRepositoryCloneUrlsRequest = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<GetSourceRepositoryCloneUrlsRequest>;
export interface GetSourceRepositoryCloneUrlsResponse {
  https: string;
}
const GetSourceRepositoryCloneUrlsResponse = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<GetSourceRepositoryCloneUrlsResponse>;
export interface GetSpaceRequest {
  name: string;
}
const GetSpaceRequest = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<GetSpaceRequest>;
export type RegionString = string;
export interface GetSpaceResponse {
  name: string;
  regionName: string;
  displayName?: string;
  description?: string;
}
const GetSpaceResponse = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<GetSpaceResponse>;
export interface GetSubscriptionRequest {
  spaceName: string;
}
const GetSubscriptionRequest = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<GetSubscriptionRequest>;
export interface GetSubscriptionResponse {
  subscriptionType?: string;
  awsAccountName?: string;
  pendingSubscriptionType?: string;
  pendingSubscriptionStartTime?: Date;
}
const GetSubscriptionResponse = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<GetSubscriptionResponse>;
export interface GetUserDetailsRequest {
  id?: string;
  userName?: string;
}
const GetUserDetailsRequest = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<GetUserDetailsRequest>;
export interface EmailAddress {
  email?: string;
  verified?: boolean;
}
const EmailAddress = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<EmailAddress>;
export interface GetUserDetailsResponse {
  userId?: string;
  userName?: string;
  displayName?: string;
  primaryEmail?: EmailAddress;
  version?: string;
}
const GetUserDetailsResponse = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<GetUserDetailsResponse>;
export interface GetWorkflowRequest {
  spaceName: string;
  id: string;
  projectName: string;
}
const GetWorkflowRequest = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<GetWorkflowRequest>;
export interface WorkflowDefinition {
  path: string;
}
const WorkflowDefinition = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<WorkflowDefinition>;
export type WorkflowRunMode = string;
export type WorkflowStatus = string;
export interface GetWorkflowResponse {
  spaceName: string;
  projectName: string;
  id: string;
  name: string;
  sourceRepositoryName?: string;
  sourceBranchName?: string;
  definition: WorkflowDefinition;
  createdTime: Date;
  lastUpdatedTime: Date;
  runMode: string;
  status: string;
}
const GetWorkflowResponse = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<GetWorkflowResponse>;
export interface GetWorkflowRunRequest {
  spaceName: string;
  id: string;
  projectName: string;
}
const GetWorkflowRunRequest = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<GetWorkflowRunRequest>;
export type WorkflowRunStatus = string;
export interface WorkflowRunStatusReason {}
const WorkflowRunStatusReason =
  DeleteAccessTokenResponse as any as S.Schema<WorkflowRunStatusReason>;
export type WorkflowRunStatusReasons = WorkflowRunStatusReason[];
const WorkflowRunStatusReasons = /*@__PURE__*/ __L.at(__c5, 6);
export interface GetWorkflowRunResponse {
  spaceName: string;
  projectName: string;
  id: string;
  workflowId: string;
  status: string;
  statusReasons?: WorkflowRunStatusReason[];
  startTime: Date;
  endTime?: Date;
  lastUpdatedTime: Date;
}
const GetWorkflowRunResponse = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<GetWorkflowRunResponse>;
export interface ListAccessTokensRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListAccessTokensRequest = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<ListAccessTokensRequest>;
export interface AccessTokenSummary {
  id: string;
  name: string;
  expiresTime?: Date;
}
const AccessTokenSummary = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<AccessTokenSummary>;
export type AccessTokenSummaries = AccessTokenSummary[];
const AccessTokenSummaries = /*@__PURE__*/ __L.at(__c6, 2);
export interface ListAccessTokensResponse {
  items: AccessTokenSummary[];
  nextToken?: string;
}
const ListAccessTokensResponse = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<ListAccessTokensResponse>;
export type StringList = string[];
const StringList = /*@__PURE__*/ __L.at(__c6, 4);
export interface Filter {
  key: string;
  values: string[];
  comparisonOperator?: string;
}
const Filter = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<Filter>;
export type Filters = Filter[];
const Filters = /*@__PURE__*/ __L.at(__c6, 6);
export interface ListDevEnvironmentsRequest {
  spaceName: string;
  projectName?: string;
  filters?: Filter[];
  nextToken?: string;
  maxResults?: number;
}
const ListDevEnvironmentsRequest = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<ListDevEnvironmentsRequest>;
export interface DevEnvironmentSummary {
  spaceName?: string;
  projectName?: string;
  id: string;
  lastUpdatedTime: Date;
  creatorId: string;
  status: string;
  statusReason?: string;
  repositories: DevEnvironmentRepositorySummary[];
  alias?: string;
  ides?: Ide[];
  instanceType: string;
  inactivityTimeoutMinutes: number;
  persistentStorage: PersistentStorage;
  vpcConnectionName?: string;
}
const DevEnvironmentSummary = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<DevEnvironmentSummary>;
export type DevEnvironmentSummaryList = DevEnvironmentSummary[];
const DevEnvironmentSummaryList = /*@__PURE__*/ __L.at(__c7, 1);
export interface ListDevEnvironmentsResponse {
  items: DevEnvironmentSummary[];
  nextToken?: string;
}
const ListDevEnvironmentsResponse = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<ListDevEnvironmentsResponse>;
export interface ListDevEnvironmentSessionsRequest {
  spaceName: string;
  projectName: string;
  devEnvironmentId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListDevEnvironmentSessionsRequest = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<ListDevEnvironmentSessionsRequest>;
export interface DevEnvironmentSessionSummary {
  spaceName: string;
  projectName: string;
  devEnvironmentId: string;
  startedTime: Date;
  id: string;
}
const DevEnvironmentSessionSummary = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<DevEnvironmentSessionSummary>;
export type DevEnvironmentSessionsSummaryList = DevEnvironmentSessionSummary[];
const DevEnvironmentSessionsSummaryList = /*@__PURE__*/ __L.at(__c7, 5);
export interface ListDevEnvironmentSessionsResponse {
  items: DevEnvironmentSessionSummary[];
  nextToken?: string;
}
const ListDevEnvironmentSessionsResponse = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<ListDevEnvironmentSessionsResponse>;
export interface ListEventLogsRequest {
  spaceName: string;
  startTime: Date;
  endTime: Date;
  eventName?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListEventLogsRequest = /*@__PURE__*/ __L.at(__c7, 7) as any as S.Schema<ListEventLogsRequest>;
export type OperationType = string;
export type UserType = string;
export interface UserIdentity {
  userType: string;
  principalId: string;
  userName?: string;
  awsAccountId?: string;
}
const UserIdentity = /*@__PURE__*/ __L.at(__c8, 0) as any as S.Schema<UserIdentity>;
export interface ProjectInformation {
  name?: string;
  projectId?: string;
}
const ProjectInformation = /*@__PURE__*/ __L.at(__c8, 1) as any as S.Schema<ProjectInformation>;
export interface EventPayload {
  contentType?: string;
  data?: string;
}
const EventPayload = /*@__PURE__*/ __L.at(__c8, 2) as any as S.Schema<EventPayload>;
export interface EventLogEntry {
  id: string;
  eventName: string;
  eventType: string;
  eventCategory: string;
  eventSource: string;
  eventTime: Date;
  operationType: string;
  userIdentity: UserIdentity;
  projectInformation?: ProjectInformation;
  requestId?: string;
  requestPayload?: EventPayload;
  responsePayload?: EventPayload;
  errorCode?: string;
  sourceIpAddress?: string;
  userAgent?: string;
}
const EventLogEntry = /*@__PURE__*/ __L.at(__c8, 3) as any as S.Schema<EventLogEntry>;
export type EventLogEntries = EventLogEntry[];
const EventLogEntries = /*@__PURE__*/ __L.at(__c8, 4);
export interface ListEventLogsResponse {
  nextToken?: string;
  items: EventLogEntry[];
}
const ListEventLogsResponse = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<ListEventLogsResponse>;
export type FilterKey = string;
export type ComparisonOperator = string;
export interface ProjectListFilter {
  key: string;
  values: string[];
  comparisonOperator?: string;
}
export type ProjectListFilters = ProjectListFilter[];
const ProjectListFilters = Filters as any as S.Schema<ProjectListFilters>;
export interface ListProjectsRequest {
  spaceName: string;
  nextToken?: string;
  maxResults?: number;
  filters?: ProjectListFilter[];
}
const ListProjectsRequest = /*@__PURE__*/ __L.at(__c8, 6) as any as S.Schema<ListProjectsRequest>;
export interface ProjectSummary {
  name: string;
  displayName?: string;
  description?: string;
}
const ProjectSummary = /*@__PURE__*/ __L.at(__c8, 7) as any as S.Schema<ProjectSummary>;
export type ProjectSummaries = ProjectSummary[];
const ProjectSummaries = /*@__PURE__*/ __L.at(__c9, 0);
export interface ListProjectsResponse {
  nextToken?: string;
  items?: ProjectSummary[];
}
const ListProjectsResponse = /*@__PURE__*/ __L.at(__c9, 1) as any as S.Schema<ListProjectsResponse>;
export interface ListSourceRepositoriesRequest {
  spaceName: string;
  projectName: string;
  nextToken?: string;
  maxResults?: number;
}
const ListSourceRepositoriesRequest = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<ListSourceRepositoriesRequest>;
export type SourceRepositoryIdString = string;
export interface ListSourceRepositoriesItem {
  id: string;
  name: string;
  description?: string;
  lastUpdatedTime: Date;
  createdTime: Date;
}
const ListSourceRepositoriesItem = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<ListSourceRepositoriesItem>;
export type ListSourceRepositoriesItems = ListSourceRepositoriesItem[];
const ListSourceRepositoriesItems = /*@__PURE__*/ __L.at(__c9, 4);
export interface ListSourceRepositoriesResponse {
  items?: ListSourceRepositoriesItem[];
  nextToken?: string;
}
const ListSourceRepositoriesResponse = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<ListSourceRepositoriesResponse>;
export interface ListSourceRepositoryBranchesRequest {
  spaceName: string;
  projectName: string;
  sourceRepositoryName: string;
  nextToken?: string;
  maxResults?: number;
}
const ListSourceRepositoryBranchesRequest = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<ListSourceRepositoryBranchesRequest>;
export interface ListSourceRepositoryBranchesItem {
  ref?: string;
  name?: string;
  lastUpdatedTime?: Date;
  headCommitId?: string;
}
const ListSourceRepositoryBranchesItem =
  CreateSourceRepositoryBranchResponse as any as S.Schema<ListSourceRepositoryBranchesItem>;
export type ListSourceRepositoryBranchesItems = ListSourceRepositoryBranchesItem[];
const ListSourceRepositoryBranchesItems = /*@__PURE__*/ __L.at(__c9, 7);
export interface ListSourceRepositoryBranchesResponse {
  nextToken?: string;
  items: ListSourceRepositoryBranchesItem[];
}
const ListSourceRepositoryBranchesResponse = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<ListSourceRepositoryBranchesResponse>;
export interface ListSpacesRequest {
  nextToken?: string;
}
const ListSpacesRequest = /*@__PURE__*/ __L.at(__c10, 1) as any as S.Schema<ListSpacesRequest>;
export interface SpaceSummary {
  name: string;
  regionName: string;
  displayName?: string;
  description?: string;
}
const SpaceSummary = GetSpaceResponse as any as S.Schema<SpaceSummary>;
export type SpaceSummaries = SpaceSummary[];
const SpaceSummaries = /*@__PURE__*/ __L.at(__c10, 2);
export interface ListSpacesResponse {
  nextToken?: string;
  items?: SpaceSummary[];
}
const ListSpacesResponse = /*@__PURE__*/ __L.at(__c10, 3) as any as S.Schema<ListSpacesResponse>;
export interface WorkflowRunSortCriteria {}
export type WorkflowRunSortCriteriaList = WorkflowRunSortCriteria[];
const WorkflowRunSortCriteriaList =
  WorkflowRunStatusReasons as any as S.Schema<WorkflowRunSortCriteriaList>;
export interface ListWorkflowRunsRequest {
  spaceName: string;
  workflowId?: string;
  projectName: string;
  nextToken?: string;
  maxResults?: number;
  sortBy?: WorkflowRunSortCriteria[];
}
const ListWorkflowRunsRequest = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<ListWorkflowRunsRequest>;
export interface WorkflowRunSummary {
  id: string;
  workflowId: string;
  workflowName: string;
  status: string;
  statusReasons?: WorkflowRunStatusReason[];
  startTime: Date;
  endTime?: Date;
  lastUpdatedTime: Date;
}
const WorkflowRunSummary = /*@__PURE__*/ __L.at(__c10, 5) as any as S.Schema<WorkflowRunSummary>;
export type WorkflowRunSummaries = WorkflowRunSummary[];
const WorkflowRunSummaries = /*@__PURE__*/ __L.at(__c10, 6);
export interface ListWorkflowRunsResponse {
  nextToken?: string;
  items?: WorkflowRunSummary[];
}
const ListWorkflowRunsResponse = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<ListWorkflowRunsResponse>;
export interface WorkflowSortCriteria {}
export type WorkflowSortCriteriaList = WorkflowSortCriteria[];
const WorkflowSortCriteriaList =
  WorkflowRunStatusReasons as any as S.Schema<WorkflowSortCriteriaList>;
export interface ListWorkflowsRequest {
  spaceName: string;
  projectName: string;
  nextToken?: string;
  maxResults?: number;
  sortBy?: WorkflowSortCriteria[];
}
const ListWorkflowsRequest = /*@__PURE__*/ __L.at(
  __c11,
  0,
) as any as S.Schema<ListWorkflowsRequest>;
export interface WorkflowDefinitionSummary {
  path: string;
}
const WorkflowDefinitionSummary = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<WorkflowDefinitionSummary>;
export interface WorkflowSummary {
  id: string;
  name: string;
  sourceRepositoryName: string;
  sourceBranchName: string;
  definition: WorkflowDefinitionSummary;
  createdTime: Date;
  lastUpdatedTime: Date;
  runMode: string;
  status: string;
}
const WorkflowSummary = /*@__PURE__*/ __L.at(__c11, 2) as any as S.Schema<WorkflowSummary>;
export type WorkflowSummaries = WorkflowSummary[];
const WorkflowSummaries = /*@__PURE__*/ __L.at(__c11, 3);
export interface ListWorkflowsResponse {
  nextToken?: string;
  items?: WorkflowSummary[];
}
const ListWorkflowsResponse = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<ListWorkflowsResponse>;
export interface StartDevEnvironmentRequest {
  spaceName: string;
  projectName: string;
  id: string;
  ides?: IdeConfiguration[];
  instanceType?: string;
  inactivityTimeoutMinutes?: number;
}
const StartDevEnvironmentRequest = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<StartDevEnvironmentRequest>;
export interface StartDevEnvironmentResponse {
  spaceName: string;
  projectName: string;
  id: string;
  status: string;
}
const StartDevEnvironmentResponse = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<StartDevEnvironmentResponse>;
export type DevEnvironmentSessionType = string;
export type ExecuteCommandSessionConfigurationArguments = string[];
const ExecuteCommandSessionConfigurationArguments =
  StringList as any as S.Schema<ExecuteCommandSessionConfigurationArguments>;
export interface ExecuteCommandSessionConfiguration {
  command: string;
  arguments?: string[];
}
const ExecuteCommandSessionConfiguration = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<ExecuteCommandSessionConfiguration>;
export interface DevEnvironmentSessionConfiguration {
  sessionType: string;
  executeCommandSessionConfiguration?: ExecuteCommandSessionConfiguration;
}
const DevEnvironmentSessionConfiguration = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<DevEnvironmentSessionConfiguration>;
export interface StartDevEnvironmentSessionRequest {
  spaceName: string;
  projectName: string;
  id: string;
  sessionConfiguration: DevEnvironmentSessionConfiguration;
}
const StartDevEnvironmentSessionRequest = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<StartDevEnvironmentSessionRequest>;
export type SensitiveString = string | redacted.Redacted<string>;
export interface DevEnvironmentAccessDetails {
  streamUrl: string | redacted.Redacted<string>;
  tokenValue: string | redacted.Redacted<string>;
}
const DevEnvironmentAccessDetails = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<DevEnvironmentAccessDetails>;
export interface StartDevEnvironmentSessionResponse {
  accessDetails: DevEnvironmentAccessDetails;
  sessionId?: string;
  spaceName: string;
  projectName: string;
  id: string;
}
const StartDevEnvironmentSessionResponse = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<StartDevEnvironmentSessionResponse>;
export interface StartWorkflowRunRequest {
  spaceName: string;
  projectName: string;
  workflowId: string;
  clientToken?: string;
}
const StartWorkflowRunRequest = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<StartWorkflowRunRequest>;
export interface StartWorkflowRunResponse {
  spaceName: string;
  projectName: string;
  id: string;
  workflowId: string;
}
const StartWorkflowRunResponse = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<StartWorkflowRunResponse>;
export interface StopDevEnvironmentRequest {
  spaceName: string;
  projectName: string;
  id: string;
}
const StopDevEnvironmentRequest = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<StopDevEnvironmentRequest>;
export interface StopDevEnvironmentResponse {
  spaceName: string;
  projectName: string;
  id: string;
  status: string;
}
const StopDevEnvironmentResponse =
  StartDevEnvironmentResponse as any as S.Schema<StopDevEnvironmentResponse>;
export interface StopDevEnvironmentSessionRequest {
  spaceName: string;
  projectName: string;
  id: string;
  sessionId: string;
}
const StopDevEnvironmentSessionRequest = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<StopDevEnvironmentSessionRequest>;
export interface StopDevEnvironmentSessionResponse {
  spaceName: string;
  projectName: string;
  id: string;
  sessionId: string;
}
const StopDevEnvironmentSessionResponse = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<StopDevEnvironmentSessionResponse>;
export interface UpdateDevEnvironmentRequest {
  spaceName: string;
  projectName: string;
  id: string;
  alias?: string;
  ides?: IdeConfiguration[];
  instanceType?: string;
  inactivityTimeoutMinutes?: number;
  clientToken?: string;
}
const UpdateDevEnvironmentRequest = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<UpdateDevEnvironmentRequest>;
export interface UpdateDevEnvironmentResponse {
  id: string;
  spaceName: string;
  projectName: string;
  alias?: string;
  ides?: IdeConfiguration[];
  instanceType?: string;
  inactivityTimeoutMinutes?: number;
  clientToken?: string;
}
const UpdateDevEnvironmentResponse = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<UpdateDevEnvironmentResponse>;
export interface UpdateProjectRequest {
  spaceName: string;
  name: string;
  description?: string;
}
const UpdateProjectRequest = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<UpdateProjectRequest>;
export interface UpdateProjectResponse {
  spaceName?: string;
  name?: string;
  displayName?: string;
  description?: string;
}
const UpdateProjectResponse = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<UpdateProjectResponse>;
export type SpaceDescription = string;
export interface UpdateSpaceRequest {
  name: string;
  description?: string;
}
const UpdateSpaceRequest = /*@__PURE__*/ __L.at(__c13, 5) as any as S.Schema<UpdateSpaceRequest>;
export interface UpdateSpaceResponse {
  name?: string;
  displayName?: string;
  description?: string;
}
const UpdateSpaceResponse = /*@__PURE__*/ __L.at(__c13, 6) as any as S.Schema<UpdateSpaceResponse>;
export interface VerifySessionRequest {}
const VerifySessionRequest = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<VerifySessionRequest>;
export interface VerifySessionResponse {
  identity?: string;
}
const VerifySessionResponse = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<VerifySessionResponse>;
export type CreateAccessTokenError = CommonErrors;
/**
 * Creates a personal access token (PAT) for the current user. A personal access token (PAT) is similar to a password.
 * It is associated with your user identity for use across all spaces and projects in Amazon CodeCatalyst. You use PATs to access CodeCatalyst
 * from resources that include integrated development environments (IDEs) and Git-based source repositories.
 * PATs represent you in Amazon CodeCatalyst and you can manage them in your user settings.For more information, see
 * Managing personal access tokens in Amazon CodeCatalyst.
 */
export const createAccessToken: API.OperationMethod<
  CreateAccessTokenRequest,
  CreateAccessTokenResponse,
  CreateAccessTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAccessTokenRequest,
  output: CreateAccessTokenResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAccessToken",
}));

export type CreateDevEnvironmentError = CommonErrors;
/**
 * Creates a Dev Environment in Amazon CodeCatalyst, a cloud-based development environment that you can use to quickly work on the code stored
 * in the source repositories of your project.
 *
 * When created in the Amazon CodeCatalyst console, by default a Dev Environment is configured to have a 2 core processor, 4GB of RAM, and 16GB of persistent storage. None of these
 * defaults apply to a Dev Environment created programmatically.
 */
export const createDevEnvironment: API.OperationMethod<
  CreateDevEnvironmentRequest,
  CreateDevEnvironmentResponse,
  CreateDevEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDevEnvironmentRequest,
  output: CreateDevEnvironmentResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDevEnvironment",
}));

export type CreateProjectError = CommonErrors;
/**
 * Creates a project in a specified space.
 */
export const createProject: API.OperationMethod<
  CreateProjectRequest,
  CreateProjectResponse,
  CreateProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectRequest,
  output: CreateProjectResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateProject",
}));

export type CreateSourceRepositoryError = CommonErrors;
/**
 * Creates an empty Git-based source repository in a specified project. The repository is
 * created with an initial empty commit with a default branch named `main`.
 */
export const createSourceRepository: API.OperationMethod<
  CreateSourceRepositoryRequest,
  CreateSourceRepositoryResponse,
  CreateSourceRepositoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSourceRepositoryRequest,
  output: CreateSourceRepositoryResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSourceRepository",
}));

export type CreateSourceRepositoryBranchError = CommonErrors;
/**
 * Creates a branch in a specified source repository in Amazon CodeCatalyst.
 *
 * This API only creates a branch in a source repository hosted in Amazon CodeCatalyst. You cannot use this API to create a branch in a linked repository.
 */
export const createSourceRepositoryBranch: API.OperationMethod<
  CreateSourceRepositoryBranchRequest,
  CreateSourceRepositoryBranchResponse,
  CreateSourceRepositoryBranchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSourceRepositoryBranchRequest,
  output: CreateSourceRepositoryBranchResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSourceRepositoryBranch",
}));

export type DeleteAccessTokenError = CommonErrors;
/**
 * Deletes a specified personal access token (PAT). A personal access token can only be deleted by the user who created it.
 */
export const deleteAccessToken: API.OperationMethod<
  DeleteAccessTokenRequest,
  DeleteAccessTokenResponse,
  DeleteAccessTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccessTokenRequest,
  output: DeleteAccessTokenResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAccessToken",
}));

export type DeleteDevEnvironmentError = CommonErrors;
/**
 * Deletes a Dev Environment.
 */
export const deleteDevEnvironment: API.OperationMethod<
  DeleteDevEnvironmentRequest,
  DeleteDevEnvironmentResponse,
  DeleteDevEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDevEnvironmentRequest,
  output: DeleteDevEnvironmentResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDevEnvironment",
}));

export type DeleteProjectError = CommonErrors;
/**
 * Deletes a project in a space.
 */
export const deleteProject: API.OperationMethod<
  DeleteProjectRequest,
  DeleteProjectResponse,
  DeleteProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectRequest,
  output: DeleteProjectResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProject",
}));

export type DeleteSourceRepositoryError = CommonErrors;
/**
 * Deletes a source repository in Amazon CodeCatalyst. You cannot use this API to delete a linked repository. It can only be used to delete a Amazon CodeCatalyst source repository.
 */
export const deleteSourceRepository: API.OperationMethod<
  DeleteSourceRepositoryRequest,
  DeleteSourceRepositoryResponse,
  DeleteSourceRepositoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSourceRepositoryRequest,
  output: DeleteSourceRepositoryResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSourceRepository",
}));

export type DeleteSpaceError = CommonErrors;
/**
 * Deletes a space.
 *
 * Deleting a space cannot be undone. Additionally, since space names must be unique across Amazon CodeCatalyst, you cannot reuse names of deleted spaces.
 */
export const deleteSpace: API.OperationMethod<
  DeleteSpaceRequest,
  DeleteSpaceResponse,
  DeleteSpaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSpaceRequest,
  output: DeleteSpaceResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSpace",
}));

export type GetDevEnvironmentError = CommonErrors;
/**
 * Returns information about a Dev Environment for a source repository in a project. Dev Environments are specific to the user who creates them.
 */
export const getDevEnvironment: API.OperationMethod<
  GetDevEnvironmentRequest,
  GetDevEnvironmentResponse,
  GetDevEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDevEnvironmentRequest,
  output: GetDevEnvironmentResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDevEnvironment",
}));

export type GetProjectError = CommonErrors;
/**
 * Returns information about a project.
 */
export const getProject: API.OperationMethod<
  GetProjectRequest,
  GetProjectResponse,
  GetProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectRequest,
  output: GetProjectResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProject",
}));

export type GetSourceRepositoryError = CommonErrors;
/**
 * Returns information about a source repository.
 */
export const getSourceRepository: API.OperationMethod<
  GetSourceRepositoryRequest,
  GetSourceRepositoryResponse,
  GetSourceRepositoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSourceRepositoryRequest,
  output: GetSourceRepositoryResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSourceRepository",
}));

export type GetSourceRepositoryCloneUrlsError = CommonErrors;
/**
 * Returns information about the URLs that can be used with a Git client to clone a source
 * repository.
 */
export const getSourceRepositoryCloneUrls: API.OperationMethod<
  GetSourceRepositoryCloneUrlsRequest,
  GetSourceRepositoryCloneUrlsResponse,
  GetSourceRepositoryCloneUrlsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSourceRepositoryCloneUrlsRequest,
  output: GetSourceRepositoryCloneUrlsResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSourceRepositoryCloneUrls",
}));

export type GetSpaceError = CommonErrors;
/**
 * Returns information about an space.
 */
export const getSpace: API.OperationMethod<
  GetSpaceRequest,
  GetSpaceResponse,
  GetSpaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSpaceRequest,
  output: GetSpaceResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSpace",
}));

export type GetSubscriptionError = CommonErrors;
/**
 * Returns information about the Amazon Web Services account used for billing purposes
 * and the billing plan for the space.
 */
export const getSubscription: API.OperationMethod<
  GetSubscriptionRequest,
  GetSubscriptionResponse,
  GetSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSubscriptionRequest,
  output: GetSubscriptionResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSubscription",
}));

export type GetUserDetailsError = CommonErrors;
/**
 * Returns information about a user.
 */
export const getUserDetails: API.OperationMethod<
  GetUserDetailsRequest,
  GetUserDetailsResponse,
  GetUserDetailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetUserDetailsRequest,
  output: GetUserDetailsResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetUserDetails",
}));

export type GetWorkflowError = CommonErrors;
/**
 * Returns information about a workflow.
 */
export const getWorkflow: API.OperationMethod<
  GetWorkflowRequest,
  GetWorkflowResponse,
  GetWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWorkflowRequest,
  output: GetWorkflowResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWorkflow",
}));

export type GetWorkflowRunError = CommonErrors;
/**
 * Returns information about a specified run of a workflow.
 */
export const getWorkflowRun: API.OperationMethod<
  GetWorkflowRunRequest,
  GetWorkflowRunResponse,
  GetWorkflowRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWorkflowRunRequest,
  output: GetWorkflowRunResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWorkflowRun",
}));

export type ListAccessTokensError = CommonErrors;
/**
 * Lists all personal access tokens (PATs) associated with the user who calls the API. You can only list PATs associated with your Amazon Web Services Builder ID.
 */
export const listAccessTokens: API.PaginatedOperationMethod<
  ListAccessTokensRequest,
  ListAccessTokensResponse,
  ListAccessTokensError,
  Credentials | HttpClient.HttpClient,
  AccessTokenSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccessTokensRequest,
  output: ListAccessTokensResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccessTokens",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDevEnvironmentsError = CommonErrors;
/**
 * Retrieves a list of Dev Environments in a project.
 */
export const listDevEnvironments: API.PaginatedOperationMethod<
  ListDevEnvironmentsRequest,
  ListDevEnvironmentsResponse,
  ListDevEnvironmentsError,
  Credentials | HttpClient.HttpClient,
  DevEnvironmentSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDevEnvironmentsRequest,
  output: ListDevEnvironmentsResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDevEnvironments",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDevEnvironmentSessionsError = CommonErrors;
/**
 * Retrieves a list of active sessions for a Dev Environment in a project.
 */
export const listDevEnvironmentSessions: API.PaginatedOperationMethod<
  ListDevEnvironmentSessionsRequest,
  ListDevEnvironmentSessionsResponse,
  ListDevEnvironmentSessionsError,
  Credentials | HttpClient.HttpClient,
  DevEnvironmentSessionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDevEnvironmentSessionsRequest,
  output: ListDevEnvironmentSessionsResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDevEnvironmentSessions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListEventLogsError = CommonErrors;
/**
 * Retrieves a list of events that occurred during a specific time in a space. You can
 * use these events to audit user and system activity in a space. For more information, see
 * Monitoring in the *Amazon CodeCatalyst User Guide*.
 *
 * ListEventLogs guarantees events for the last 30 days in a given space. You can also
 * view and retrieve a list of management events over the last 90 days for Amazon CodeCatalyst in the
 * CloudTrail console by viewing Event history, or by creating a trail to create
 * and maintain a record of events that extends past 90 days. For more information, see Working with CloudTrail Event History and Working with
 * CloudTrail trails.
 */
export const listEventLogs: API.PaginatedOperationMethod<
  ListEventLogsRequest,
  ListEventLogsResponse,
  ListEventLogsError,
  Credentials | HttpClient.HttpClient,
  EventLogEntry
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListEventLogsRequest,
  output: ListEventLogsResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEventLogs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListProjectsError = CommonErrors;
/**
 * Retrieves a list of projects.
 */
export const listProjects: API.PaginatedOperationMethod<
  ListProjectsRequest,
  ListProjectsResponse,
  ListProjectsError,
  Credentials | HttpClient.HttpClient,
  ProjectSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsRequest,
  output: ListProjectsResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProjects",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSourceRepositoriesError = CommonErrors;
/**
 * Retrieves a list of source repositories in a project.
 */
export const listSourceRepositories: API.PaginatedOperationMethod<
  ListSourceRepositoriesRequest,
  ListSourceRepositoriesResponse,
  ListSourceRepositoriesError,
  Credentials | HttpClient.HttpClient,
  ListSourceRepositoriesItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSourceRepositoriesRequest,
  output: ListSourceRepositoriesResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSourceRepositories",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSourceRepositoryBranchesError = CommonErrors;
/**
 * Retrieves a list of branches in a specified source repository.
 */
export const listSourceRepositoryBranches: API.PaginatedOperationMethod<
  ListSourceRepositoryBranchesRequest,
  ListSourceRepositoryBranchesResponse,
  ListSourceRepositoryBranchesError,
  Credentials | HttpClient.HttpClient,
  ListSourceRepositoryBranchesItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSourceRepositoryBranchesRequest,
  output: ListSourceRepositoryBranchesResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSourceRepositoryBranches",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSpacesError = CommonErrors;
/**
 * Retrieves a list of spaces.
 */
export const listSpaces: API.PaginatedOperationMethod<
  ListSpacesRequest,
  ListSpacesResponse,
  ListSpacesError,
  Credentials | HttpClient.HttpClient,
  SpaceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSpacesRequest,
  output: ListSpacesResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSpaces",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", items: "items" } as const,
})) as any;

export type ListWorkflowRunsError = CommonErrors;
/**
 * Retrieves a list of workflow runs of a specified workflow.
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
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkflowRuns",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListWorkflowsError = CommonErrors;
/**
 * Retrieves a list of workflows in a specified project.
 */
export const listWorkflows: API.PaginatedOperationMethod<
  ListWorkflowsRequest,
  ListWorkflowsResponse,
  ListWorkflowsError,
  Credentials | HttpClient.HttpClient,
  WorkflowSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListWorkflowsRequest,
  output: ListWorkflowsResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkflows",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type StartDevEnvironmentError = CommonErrors;
/**
 * Starts a specified Dev Environment and puts it into an active state.
 */
export const startDevEnvironment: API.OperationMethod<
  StartDevEnvironmentRequest,
  StartDevEnvironmentResponse,
  StartDevEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartDevEnvironmentRequest,
  output: StartDevEnvironmentResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartDevEnvironment",
}));

export type StartDevEnvironmentSessionError = CommonErrors;
/**
 * Starts a session for a specified Dev Environment.
 */
export const startDevEnvironmentSession: API.OperationMethod<
  StartDevEnvironmentSessionRequest,
  StartDevEnvironmentSessionResponse,
  StartDevEnvironmentSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartDevEnvironmentSessionRequest,
  output: StartDevEnvironmentSessionResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartDevEnvironmentSession",
}));

export type StartWorkflowRunError = CommonErrors;
/**
 * Begins a run of a specified workflow.
 */
export const startWorkflowRun: API.OperationMethod<
  StartWorkflowRunRequest,
  StartWorkflowRunResponse,
  StartWorkflowRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartWorkflowRunRequest,
  output: StartWorkflowRunResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartWorkflowRun",
}));

export type StopDevEnvironmentError = CommonErrors;
/**
 * Pauses a specified Dev Environment and places it in a non-running state. Stopped Dev Environments do not consume compute minutes.
 */
export const stopDevEnvironment: API.OperationMethod<
  StopDevEnvironmentRequest,
  StopDevEnvironmentResponse,
  StopDevEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopDevEnvironmentRequest,
  output: StopDevEnvironmentResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopDevEnvironment",
}));

export type StopDevEnvironmentSessionError = CommonErrors;
/**
 * Stops a session for a specified Dev Environment.
 */
export const stopDevEnvironmentSession: API.OperationMethod<
  StopDevEnvironmentSessionRequest,
  StopDevEnvironmentSessionResponse,
  StopDevEnvironmentSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopDevEnvironmentSessionRequest,
  output: StopDevEnvironmentSessionResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopDevEnvironmentSession",
}));

export type UpdateDevEnvironmentError = CommonErrors;
/**
 * Changes one or more values for a Dev Environment. Updating certain values of the Dev Environment will cause a restart.
 */
export const updateDevEnvironment: API.OperationMethod<
  UpdateDevEnvironmentRequest,
  UpdateDevEnvironmentResponse,
  UpdateDevEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDevEnvironmentRequest,
  output: UpdateDevEnvironmentResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDevEnvironment",
}));

export type UpdateProjectError = CommonErrors;
/**
 * Changes one or more values for a project.
 */
export const updateProject: API.OperationMethod<
  UpdateProjectRequest,
  UpdateProjectResponse,
  UpdateProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateProjectRequest,
  output: UpdateProjectResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateProject",
}));

export type UpdateSpaceError = CommonErrors;
/**
 * Changes one or more values for a space.
 */
export const updateSpace: API.OperationMethod<
  UpdateSpaceRequest,
  UpdateSpaceResponse,
  UpdateSpaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSpaceRequest,
  output: UpdateSpaceResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSpace",
}));

export type VerifySessionError = CommonErrors;
/**
 * Verifies whether the calling user has a valid Amazon CodeCatalyst login and session. If successful, this returns the ID of the user in Amazon CodeCatalyst.
 */
export const verifySession: API.OperationMethod<
  VerifySessionRequest,
  VerifySessionResponse,
  VerifySessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: VerifySessionRequest,
  output: VerifySessionResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "VerifySession",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          expiresTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/v1/accessTokens" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateAccessTokenRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          secret: SensitiveString,
          name: S.String,
          expiresTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          accessTokenId: S.String,
        }),
      ).annotate({
        identifier: "CreateAccessTokenResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ repositoryName: S.String, branchName: S.optional(S.String) }),
      ).annotate({ identifier: "RepositoryInput" });
    case 3:
      return S.Array(RepositoryInput);
    case 4:
      return S.suspend(() =>
        S.Struct({ runtime: S.optional(S.String), name: S.optional(S.String) }),
      ).annotate({ identifier: "IdeConfiguration" });
    case 5:
      return S.Array(IdeConfiguration);
    case 6:
      return S.suspend(() => S.Struct({ sizeInGiB: S.Number })).annotate({
        identifier: "PersistentStorageConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          projectName: S.String.pipe(T.HttpLabel("projectName")),
          repositories: S.optional(RepositoriesInput),
          clientToken: S.optional(S.String),
          alias: S.optional(S.String),
          ides: S.optional(IdeConfigurationList),
          instanceType: S.String,
          inactivityTimeoutMinutes: S.optional(S.Number),
          persistentStorage: PersistentStorageConfiguration,
          vpcConnectionName: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateDevEnvironmentRequest",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String,
          projectName: S.String,
          id: S.String,
          vpcConnectionName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateDevEnvironmentResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          displayName: S.String,
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/spaces/{spaceName}/projects" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateProjectRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.optional(S.String),
          name: S.String,
          displayName: S.optional(S.String),
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateProjectResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          projectName: S.String.pipe(T.HttpLabel("projectName")),
          name: S.String.pipe(T.HttpLabel("name")),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{name}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateSourceRepositoryRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String,
          projectName: S.String,
          name: S.String,
          description: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateSourceRepositoryResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          projectName: S.String.pipe(T.HttpLabel("projectName")),
          sourceRepositoryName: S.String.pipe(T.HttpLabel("sourceRepositoryName")),
          name: S.String.pipe(T.HttpLabel("name")),
          headCommitId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{sourceRepositoryName}/branches/{name}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateSourceRepositoryBranchRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ref: S.optional(S.String),
          name: S.optional(S.String),
          lastUpdatedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          headCommitId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateSourceRepositoryBranchResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/accessTokens/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAccessTokenRequest" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteAccessTokenResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          projectName: S.String.pipe(T.HttpLabel("projectName")),
          id: S.String.pipe(T.HttpLabel("id")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDevEnvironmentRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ spaceName: S.String, projectName: S.String, id: S.String }),
      ).annotate({
        identifier: "DeleteDevEnvironmentResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          name: S.String.pipe(T.HttpLabel("name")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/spaces/{spaceName}/projects/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteProjectRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ spaceName: S.String, name: S.String, displayName: S.optional(S.String) }),
      ).annotate({ identifier: "DeleteProjectResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          projectName: S.String.pipe(T.HttpLabel("projectName")),
          name: S.String.pipe(T.HttpLabel("name")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{name}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteSourceRepositoryRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ spaceName: S.String, projectName: S.String, name: S.String }),
      ).annotate({
        identifier: "DeleteSourceRepositoryResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ name: S.String.pipe(T.HttpLabel("name")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/spaces/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteSpaceRequest" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ name: S.String, displayName: S.optional(S.String) }),
      ).annotate({ identifier: "DeleteSpaceResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          projectName: S.String.pipe(T.HttpLabel("projectName")),
          id: S.String.pipe(T.HttpLabel("id")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDevEnvironmentRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ repositoryName: S.String, branchName: S.optional(S.String) }),
      ).annotate({
        identifier: "DevEnvironmentRepositorySummary",
      });
    case 3:
      return S.Array(DevEnvironmentRepositorySummary);
    case 4:
      return S.suspend(() => S.Struct({ sizeInGiB: S.Number })).annotate({
        identifier: "PersistentStorage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String,
          projectName: S.String,
          id: S.String,
          lastUpdatedTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          creatorId: S.String,
          status: S.String,
          statusReason: S.optional(S.String),
          repositories: DevEnvironmentRepositorySummaries,
          alias: S.optional(S.String),
          ides: S.optional(Ides),
          instanceType: S.String,
          inactivityTimeoutMinutes: S.Number,
          persistentStorage: PersistentStorage,
          vpcConnectionName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetDevEnvironmentResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          name: S.String.pipe(T.HttpLabel("name")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/spaces/{spaceName}/projects/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetProjectRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          projectName: S.String.pipe(T.HttpLabel("projectName")),
          name: S.String.pipe(T.HttpLabel("name")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{name}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSourceRepositoryRequest",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String,
          projectName: S.String,
          name: S.String,
          description: S.optional(S.String),
          lastUpdatedTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "GetSourceRepositoryResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          projectName: S.String.pipe(T.HttpLabel("projectName")),
          sourceRepositoryName: S.String.pipe(T.HttpLabel("sourceRepositoryName")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{sourceRepositoryName}/cloneUrls",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSourceRepositoryCloneUrlsRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ https: S.String })).annotate({
        identifier: "GetSourceRepositoryCloneUrlsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ name: S.String.pipe(T.HttpLabel("name")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/v1/spaces/{name}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetSpaceRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          regionName: S.String,
          displayName: S.optional(S.String),
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetSpaceResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ spaceName: S.String.pipe(T.HttpLabel("spaceName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/spaces/{spaceName}/subscription" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSubscriptionRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          subscriptionType: S.optional(S.String),
          awsAccountName: S.optional(S.String),
          pendingSubscriptionType: S.optional(S.String),
          pendingSubscriptionStartTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
        }),
      ).annotate({ identifier: "GetSubscriptionResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String).pipe(T.HttpQuery("id")),
          userName: S.optional(S.String).pipe(T.HttpQuery("userName")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/userDetails" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetUserDetailsRequest" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ email: S.optional(S.String), verified: S.optional(S.Boolean) }),
      ).annotate({ identifier: "EmailAddress" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          userId: S.optional(S.String),
          userName: S.optional(S.String),
          displayName: S.optional(S.String),
          primaryEmail: S.optional(EmailAddress),
          version: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetUserDetailsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          id: S.String.pipe(T.HttpLabel("id")),
          projectName: S.String.pipe(T.HttpLabel("projectName")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/spaces/{spaceName}/projects/{projectName}/workflows/{id}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetWorkflowRequest" });
    case 3:
      return S.suspend(() => S.Struct({ path: S.String })).annotate({
        identifier: "WorkflowDefinition",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String,
          projectName: S.String,
          id: S.String,
          name: S.String,
          sourceRepositoryName: S.optional(S.String),
          sourceBranchName: S.optional(S.String),
          definition: WorkflowDefinition,
          createdTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          runMode: S.String,
          status: S.String,
        }),
      ).annotate({ identifier: "GetWorkflowResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          id: S.String.pipe(T.HttpLabel("id")),
          projectName: S.String.pipe(T.HttpLabel("projectName")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/spaces/{spaceName}/projects/{projectName}/workflowRuns/{id}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetWorkflowRunRequest" });
    case 6:
      return S.Array(WorkflowRunStatusReason);
    case 7:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String,
          projectName: S.String,
          id: S.String,
          workflowId: S.String,
          status: S.String,
          statusReasons: S.optional(WorkflowRunStatusReasons),
          startTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastUpdatedTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "GetWorkflowRunResponse" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v1/accessTokens" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListAccessTokensRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: S.String,
          expiresTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "AccessTokenSummary" });
    case 2:
      return S.Array(AccessTokenSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ items: AccessTokenSummaries, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAccessTokensResponse" });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({ key: S.String, values: StringList, comparisonOperator: S.optional(S.String) }),
      ).annotate({ identifier: "Filter" });
    case 6:
      return S.Array(Filter);
    case 7:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          projectName: S.optional(S.String),
          filters: S.optional(Filters),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/spaces/{spaceName}/devEnvironments" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDevEnvironmentsRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.optional(S.String),
          projectName: S.optional(S.String),
          id: S.String,
          lastUpdatedTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          creatorId: S.String,
          status: S.String,
          statusReason: S.optional(S.String),
          repositories: DevEnvironmentRepositorySummaries,
          alias: S.optional(S.String),
          ides: S.optional(Ides),
          instanceType: S.String,
          inactivityTimeoutMinutes: S.Number,
          persistentStorage: PersistentStorage,
          vpcConnectionName: S.optional(S.String),
        }),
      ).annotate({ identifier: "DevEnvironmentSummary" });
    case 1:
      return S.Array(DevEnvironmentSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({ items: DevEnvironmentSummaryList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListDevEnvironmentsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          projectName: S.String.pipe(T.HttpLabel("projectName")),
          devEnvironmentId: S.String.pipe(T.HttpLabel("devEnvironmentId")),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{devEnvironmentId}/sessions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDevEnvironmentSessionsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String,
          projectName: S.String,
          devEnvironmentId: S.String,
          startedTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          id: S.String,
        }),
      ).annotate({
        identifier: "DevEnvironmentSessionSummary",
      });
    case 5:
      return S.Array(DevEnvironmentSessionSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({ items: DevEnvironmentSessionsSummaryList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListDevEnvironmentSessionsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          startTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          endTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          eventName: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/spaces/{spaceName}/eventLogs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListEventLogsRequest" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          userType: S.String,
          principalId: S.String,
          userName: S.optional(S.String),
          awsAccountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "UserIdentity" });
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), projectId: S.optional(S.String) }),
      ).annotate({ identifier: "ProjectInformation" });
    case 2:
      return S.suspend(() =>
        S.Struct({ contentType: S.optional(S.String), data: S.optional(S.String) }),
      ).annotate({ identifier: "EventPayload" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          eventName: S.String,
          eventType: S.String,
          eventCategory: S.String,
          eventSource: S.String,
          eventTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          operationType: S.String,
          userIdentity: UserIdentity,
          projectInformation: S.optional(ProjectInformation),
          requestId: S.optional(S.String),
          requestPayload: S.optional(EventPayload),
          responsePayload: S.optional(EventPayload),
          errorCode: S.optional(S.String),
          sourceIpAddress: S.optional(S.String),
          userAgent: S.optional(S.String),
        }),
      ).annotate({ identifier: "EventLogEntry" });
    case 4:
      return S.Array(EventLogEntry);
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), items: EventLogEntries }),
      ).annotate({ identifier: "ListEventLogsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          filters: S.optional(ProjectListFilters),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/spaces/{spaceName}/projects" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListProjectsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          displayName: S.optional(S.String),
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "ProjectSummary" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ProjectSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), items: S.optional(ProjectSummaries) }),
      ).annotate({ identifier: "ListProjectsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          projectName: S.String.pipe(T.HttpLabel("projectName")),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSourceRepositoriesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: S.String,
          description: S.optional(S.String),
          lastUpdatedTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "ListSourceRepositoriesItem",
      });
    case 4:
      return S.Array(ListSourceRepositoriesItem);
    case 5:
      return S.suspend(() =>
        S.Struct({
          items: S.optional(ListSourceRepositoriesItems),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListSourceRepositoriesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          projectName: S.String.pipe(T.HttpLabel("projectName")),
          sourceRepositoryName: S.String.pipe(T.HttpLabel("sourceRepositoryName")),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{sourceRepositoryName}/branches",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSourceRepositoryBranchesRequest",
      });
    case 7:
      return S.Array(ListSourceRepositoryBranchesItem);
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), items: ListSourceRepositoryBranchesItems }),
      ).annotate({
        identifier: "ListSourceRepositoryBranchesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v1/spaces" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListSpacesRequest" });
    case 2:
      return S.Array(SpaceSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), items: S.optional(SpaceSummaries) }),
      ).annotate({ identifier: "ListSpacesResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          workflowId: S.optional(S.String).pipe(T.HttpQuery("workflowId")),
          projectName: S.String.pipe(T.HttpLabel("projectName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          sortBy: S.optional(WorkflowRunSortCriteriaList),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v1/spaces/{spaceName}/projects/{projectName}/workflowRuns",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListWorkflowRunsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          workflowId: S.String,
          workflowName: S.String,
          status: S.String,
          statusReasons: S.optional(WorkflowRunStatusReasons),
          startTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastUpdatedTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "WorkflowRunSummary" });
    case 6:
      return S.Array(WorkflowRunSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), items: S.optional(WorkflowRunSummaries) }),
      ).annotate({ identifier: "ListWorkflowRunsResponse" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          projectName: S.String.pipe(T.HttpLabel("projectName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          sortBy: S.optional(WorkflowSortCriteriaList),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v1/spaces/{spaceName}/projects/{projectName}/workflows",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListWorkflowsRequest" });
    case 1:
      return S.suspend(() => S.Struct({ path: S.String })).annotate({
        identifier: "WorkflowDefinitionSummary",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: S.String,
          sourceRepositoryName: S.String,
          sourceBranchName: S.String,
          definition: WorkflowDefinitionSummary,
          createdTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          runMode: S.String,
          status: S.String,
        }),
      ).annotate({ identifier: "WorkflowSummary" });
    case 3:
      return S.Array(WorkflowSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), items: S.optional(WorkflowSummaries) }),
      ).annotate({ identifier: "ListWorkflowsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          projectName: S.String.pipe(T.HttpLabel("projectName")),
          id: S.String.pipe(T.HttpLabel("id")),
          ides: S.optional(IdeConfigurationList),
          instanceType: S.optional(S.String),
          inactivityTimeoutMinutes: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/start",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartDevEnvironmentRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ spaceName: S.String, projectName: S.String, id: S.String, status: S.String }),
      ).annotate({
        identifier: "StartDevEnvironmentResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          command: S.String,
          arguments: S.optional(ExecuteCommandSessionConfigurationArguments),
        }),
      ).annotate({
        identifier: "ExecuteCommandSessionConfiguration",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sessionType: S.String,
          executeCommandSessionConfiguration: S.optional(ExecuteCommandSessionConfiguration),
        }),
      ).annotate({
        identifier: "DevEnvironmentSessionConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          projectName: S.String.pipe(T.HttpLabel("projectName")),
          id: S.String.pipe(T.HttpLabel("id")),
          sessionConfiguration: DevEnvironmentSessionConfiguration,
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/session",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartDevEnvironmentSessionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ streamUrl: SensitiveString, tokenValue: SensitiveString }),
      ).annotate({
        identifier: "DevEnvironmentAccessDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          accessDetails: DevEnvironmentAccessDetails,
          sessionId: S.optional(S.String),
          spaceName: S.String,
          projectName: S.String,
          id: S.String,
        }),
      ).annotate({
        identifier: "StartDevEnvironmentSessionResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          projectName: S.String.pipe(T.HttpLabel("projectName")),
          workflowId: S.String.pipe(T.HttpQuery("workflowId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v1/spaces/{spaceName}/projects/{projectName}/workflowRuns",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartWorkflowRunRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String,
          projectName: S.String,
          id: S.String,
          workflowId: S.String,
        }),
      ).annotate({ identifier: "StartWorkflowRunResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          projectName: S.String.pipe(T.HttpLabel("projectName")),
          id: S.String.pipe(T.HttpLabel("id")),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/stop",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StopDevEnvironmentRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          projectName: S.String.pipe(T.HttpLabel("projectName")),
          id: S.String.pipe(T.HttpLabel("id")),
          sessionId: S.String.pipe(T.HttpLabel("sessionId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/session/{sessionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StopDevEnvironmentSessionRequest",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ spaceName: S.String, projectName: S.String, id: S.String, sessionId: S.String }),
      ).annotate({
        identifier: "StopDevEnvironmentSessionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          projectName: S.String.pipe(T.HttpLabel("projectName")),
          id: S.String.pipe(T.HttpLabel("id")),
          alias: S.optional(S.String),
          ides: S.optional(IdeConfigurationList),
          instanceType: S.optional(S.String),
          inactivityTimeoutMinutes: S.optional(S.Number),
          clientToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateDevEnvironmentRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          spaceName: S.String,
          projectName: S.String,
          alias: S.optional(S.String),
          ides: S.optional(IdeConfigurationList),
          instanceType: S.optional(S.String),
          inactivityTimeoutMinutes: S.optional(S.Number),
          clientToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateDevEnvironmentResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.String.pipe(T.HttpLabel("spaceName")),
          name: S.String.pipe(T.HttpLabel("name")),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/v1/spaces/{spaceName}/projects/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateProjectRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          spaceName: S.optional(S.String),
          name: S.optional(S.String),
          displayName: S.optional(S.String),
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "UpdateProjectResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String.pipe(T.HttpLabel("name")),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/v1/spaces/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateSpaceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          displayName: S.optional(S.String),
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "UpdateSpaceResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/session" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "VerifySessionRequest" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ identity: S.optional(S.String) })).annotate({
        identifier: "VerifySessionResponse",
      });
  }
}
