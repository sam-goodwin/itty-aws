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
  sdkId: "CodeStar connections",
  serviceShapeName: "CodeStar_connections_20191201",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "codestar-connections" });
const ver = /*@__PURE__*/ T.ServiceVersion("2019-12-01");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_0();
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
              `https://codestar-connections-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://codestar-connections-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://codestar-connections.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://codestar-connections.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
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
export class ConcurrentModificationException
  extends /*@__PURE__*/ S.TaggedError<ConcurrentModificationException>()(
    "ConcurrentModificationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ConditionalCheckFailedException
  extends /*@__PURE__*/ S.TaggedError<ConditionalCheckFailedException>()(
    "ConditionalCheckFailedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export class InvalidInputException
  extends /*@__PURE__*/ S.TaggedError<InvalidInputException>()(
    "InvalidInputException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
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
export class ResourceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ResourceUnavailableException>()(
    "ResourceUnavailableException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class RetryLatestCommitFailedException
  extends /*@__PURE__*/ S.TaggedError<RetryLatestCommitFailedException>()(
    "RetryLatestCommitFailedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export class SyncBlockerDoesNotExistException
  extends /*@__PURE__*/ S.TaggedError<SyncBlockerDoesNotExistException>()(
    "SyncBlockerDoesNotExistException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class SyncConfigurationStillExistsException
  extends /*@__PURE__*/ S.TaggedError<SyncConfigurationStillExistsException>()(
    "SyncConfigurationStillExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class UnsupportedOperationException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedOperationException>()(
    "UnsupportedOperationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class UnsupportedProviderTypeException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedProviderTypeException>()(
    "UnsupportedProviderTypeException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class UpdateOutOfSyncException
  extends /*@__PURE__*/ S.TaggedError<UpdateOutOfSyncException>()(
    "UpdateOutOfSyncException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export type ProviderType =
  | "Bitbucket"
  | "GitHub"
  | "GitHubEnterpriseServer"
  | "GitLab"
  | "GitLabSelfManaged"
  | (string & {});
export type ConnectionName = string;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagList = Tag[];
export type HostArn = string;
export interface CreateConnectionInput {
  ProviderType?: ProviderType;
  ConnectionName: string;
  Tags?: Tag[];
  HostArn?: string;
}
export type ConnectionArn = string;
export interface CreateConnectionOutput {
  ConnectionArn: string;
  Tags?: Tag[];
}
export type HostName = string;
export type Url = string;
export type VpcId = string;
export type SubnetId = string;
export type SubnetIds = string[];
export type SecurityGroupId = string;
export type SecurityGroupIds = string[];
export type TlsCertificate = string;
export interface VpcConfiguration {
  VpcId: string;
  SubnetIds: string[];
  SecurityGroupIds: string[];
  TlsCertificate?: string;
}
export interface CreateHostInput {
  Name: string;
  ProviderType: ProviderType;
  ProviderEndpoint: string;
  VpcConfiguration?: VpcConfiguration;
  Tags?: Tag[];
}
export interface CreateHostOutput {
  HostArn?: string;
  Tags?: Tag[];
}
export type OwnerId = string;
export type RepositoryName = string;
export type KmsKeyArn = string;
export interface CreateRepositoryLinkInput {
  ConnectionArn: string;
  OwnerId: string;
  RepositoryName: string;
  EncryptionKeyArn?: string;
  Tags?: Tag[];
}
export type RepositoryLinkArn = string;
export type RepositoryLinkId = string;
export interface RepositoryLinkInfo {
  ConnectionArn: string;
  EncryptionKeyArn?: string;
  OwnerId: string;
  ProviderType: ProviderType;
  RepositoryLinkArn: string;
  RepositoryLinkId: string;
  RepositoryName: string;
}
export interface CreateRepositoryLinkOutput {
  RepositoryLinkInfo: RepositoryLinkInfo;
}
export type BranchName = string;
export type DeploymentFilePath = string;
export type ResourceName = string;
export type IamRoleArn = string;
export type SyncConfigurationType = "CFN_STACK_SYNC" | (string & {});
export type PublishDeploymentStatus = "ENABLED" | "DISABLED" | (string & {});
export type TriggerResourceUpdateOn = "ANY_CHANGE" | "FILE_CHANGE" | (string & {});
export interface CreateSyncConfigurationInput {
  Branch: string;
  ConfigFile: string;
  RepositoryLinkId: string;
  ResourceName: string;
  RoleArn: string;
  SyncType: SyncConfigurationType;
  PublishDeploymentStatus?: PublishDeploymentStatus;
  TriggerResourceUpdateOn?: TriggerResourceUpdateOn;
}
export interface SyncConfiguration {
  Branch: string;
  ConfigFile?: string;
  OwnerId: string;
  ProviderType: ProviderType;
  RepositoryLinkId: string;
  RepositoryName: string;
  ResourceName: string;
  RoleArn: string;
  SyncType: SyncConfigurationType;
  PublishDeploymentStatus?: PublishDeploymentStatus;
  TriggerResourceUpdateOn?: TriggerResourceUpdateOn;
}
export interface CreateSyncConfigurationOutput {
  SyncConfiguration: SyncConfiguration;
}
export interface DeleteConnectionInput {
  ConnectionArn: string;
}
export interface DeleteConnectionOutput {}
export interface DeleteHostInput {
  HostArn: string;
}
export interface DeleteHostOutput {}
export interface DeleteRepositoryLinkInput {
  RepositoryLinkId: string;
}
export interface DeleteRepositoryLinkOutput {}
export interface DeleteSyncConfigurationInput {
  SyncType: SyncConfigurationType;
  ResourceName: string;
}
export interface DeleteSyncConfigurationOutput {}
export interface GetConnectionInput {
  ConnectionArn: string;
}
export type AccountId = string;
export type ConnectionStatus = "PENDING" | "AVAILABLE" | "ERROR" | (string & {});
export interface Connection {
  ConnectionName?: string;
  ConnectionArn?: string;
  ProviderType?: ProviderType;
  OwnerAccountId?: string;
  ConnectionStatus?: ConnectionStatus;
  HostArn?: string;
}
export interface GetConnectionOutput {
  Connection?: Connection;
}
export interface GetHostInput {
  HostArn: string;
}
export type HostStatus = string;
export interface GetHostOutput {
  Name?: string;
  Status?: string;
  ProviderType?: ProviderType;
  ProviderEndpoint?: string;
  VpcConfiguration?: VpcConfiguration;
}
export interface GetRepositoryLinkInput {
  RepositoryLinkId: string;
}
export interface GetRepositoryLinkOutput {
  RepositoryLinkInfo: RepositoryLinkInfo;
}
export interface GetRepositorySyncStatusInput {
  Branch: string;
  RepositoryLinkId: string;
  SyncType: SyncConfigurationType;
}
export type RepositorySyncStatus =
  | "FAILED"
  | "INITIATED"
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "QUEUED"
  | (string & {});
export type Event = string;
export type ExternalId = string;
export type Type = string;
export interface RepositorySyncEvent {
  Event: string;
  ExternalId?: string;
  Time: Date;
  Type: string;
}
export type RepositorySyncEventList = RepositorySyncEvent[];
export interface RepositorySyncAttempt {
  StartedAt: Date;
  Status: RepositorySyncStatus;
  Events: RepositorySyncEvent[];
}
export interface GetRepositorySyncStatusOutput {
  LatestSync: RepositorySyncAttempt;
}
export interface GetResourceSyncStatusInput {
  ResourceName: string;
  SyncType: SyncConfigurationType;
}
export type Directory = string;
export type SHA = string;
export interface Revision {
  Branch: string;
  Directory: string;
  OwnerId: string;
  RepositoryName: string;
  ProviderType: ProviderType;
  Sha: string;
}
export interface ResourceSyncEvent {
  Event: string;
  ExternalId?: string;
  Time: Date;
  Type: string;
}
export type ResourceSyncEventList = ResourceSyncEvent[];
export type ResourceSyncStatus =
  | "FAILED"
  | "INITIATED"
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | (string & {});
export type Target = string;
export interface ResourceSyncAttempt {
  Events: ResourceSyncEvent[];
  InitialRevision: Revision;
  StartedAt: Date;
  Status: ResourceSyncStatus;
  TargetRevision: Revision;
  Target: string;
}
export interface GetResourceSyncStatusOutput {
  DesiredState?: Revision;
  LatestSuccessfulSync?: ResourceSyncAttempt;
  LatestSync: ResourceSyncAttempt;
}
export interface GetSyncBlockerSummaryInput {
  SyncType: SyncConfigurationType;
  ResourceName: string;
}
export type Id = string;
export type BlockerType = "AUTOMATED" | (string & {});
export type BlockerStatus = "ACTIVE" | "RESOLVED" | (string & {});
export type CreatedReason = string;
export type SyncBlockerContextKey = string;
export type SyncBlockerContextValue = string;
export interface SyncBlockerContext {
  Key: string;
  Value: string;
}
export type SyncBlockerContextList = SyncBlockerContext[];
export type ResolvedReason = string;
export interface SyncBlocker {
  Id: string;
  Type: BlockerType;
  Status: BlockerStatus;
  CreatedReason: string;
  CreatedAt: Date;
  Contexts?: SyncBlockerContext[];
  ResolvedReason?: string;
  ResolvedAt?: Date;
}
export type LatestSyncBlockerList = SyncBlocker[];
export interface SyncBlockerSummary {
  ResourceName: string;
  ParentResourceName?: string;
  LatestBlockers?: SyncBlocker[];
}
export interface GetSyncBlockerSummaryOutput {
  SyncBlockerSummary: SyncBlockerSummary;
}
export interface GetSyncConfigurationInput {
  SyncType: SyncConfigurationType;
  ResourceName: string;
}
export interface GetSyncConfigurationOutput {
  SyncConfiguration: SyncConfiguration;
}
export type MaxResults = number;
export type NextToken = string;
export interface ListConnectionsInput {
  ProviderTypeFilter?: ProviderType;
  HostArnFilter?: string;
  MaxResults?: number;
  NextToken?: string;
}
export type ConnectionList = Connection[];
export interface ListConnectionsOutput {
  Connections?: Connection[];
  NextToken?: string;
}
export interface ListHostsInput {
  MaxResults?: number;
  NextToken?: string;
}
export type HostStatusMessage = string;
export interface Host {
  Name?: string;
  HostArn?: string;
  ProviderType?: ProviderType;
  ProviderEndpoint?: string;
  VpcConfiguration?: VpcConfiguration;
  Status?: string;
  StatusMessage?: string;
}
export type HostList = Host[];
export interface ListHostsOutput {
  Hosts?: Host[];
  NextToken?: string;
}
export type SharpNextToken = string;
export interface ListRepositoryLinksInput {
  MaxResults?: number;
  NextToken?: string;
}
export type RepositoryLinkList = RepositoryLinkInfo[];
export interface ListRepositoryLinksOutput {
  RepositoryLinks: RepositoryLinkInfo[];
  NextToken?: string;
}
export interface ListRepositorySyncDefinitionsInput {
  RepositoryLinkId: string;
  SyncType: SyncConfigurationType;
}
export type Parent = string;
export interface RepositorySyncDefinition {
  Branch: string;
  Directory: string;
  Parent: string;
  Target: string;
}
export type RepositorySyncDefinitionList = RepositorySyncDefinition[];
export interface ListRepositorySyncDefinitionsOutput {
  RepositorySyncDefinitions: RepositorySyncDefinition[];
  NextToken?: string;
}
export interface ListSyncConfigurationsInput {
  MaxResults?: number;
  NextToken?: string;
  RepositoryLinkId: string;
  SyncType: SyncConfigurationType;
}
export type SyncConfigurationList = SyncConfiguration[];
export interface ListSyncConfigurationsOutput {
  SyncConfigurations: SyncConfiguration[];
  NextToken?: string;
}
export type AmazonResourceName = string;
export interface ListTagsForResourceInput {
  ResourceArn: string;
}
export interface ListTagsForResourceOutput {
  Tags?: Tag[];
}
export interface TagResourceInput {
  ResourceArn: string;
  Tags: Tag[];
}
export interface TagResourceOutput {}
export type TagKeyList = string[];
export interface UntagResourceInput {
  ResourceArn: string;
  TagKeys: string[];
}
export interface UntagResourceOutput {}
export interface UpdateHostInput {
  HostArn: string;
  ProviderEndpoint?: string;
  VpcConfiguration?: VpcConfiguration;
}
export interface UpdateHostOutput {}
export interface UpdateRepositoryLinkInput {
  ConnectionArn?: string;
  EncryptionKeyArn?: string;
  RepositoryLinkId: string;
}
export interface UpdateRepositoryLinkOutput {
  RepositoryLinkInfo: RepositoryLinkInfo;
}
export interface UpdateSyncBlockerInput {
  Id: string;
  SyncType: SyncConfigurationType;
  ResourceName: string;
  ResolvedReason: string;
}
export interface UpdateSyncBlockerOutput {
  ResourceName: string;
  ParentResourceName?: string;
  SyncBlocker: SyncBlocker;
}
export interface UpdateSyncConfigurationInput {
  Branch?: string;
  ConfigFile?: string;
  RepositoryLinkId?: string;
  ResourceName: string;
  RoleArn?: string;
  SyncType: SyncConfigurationType;
  PublishDeploymentStatus?: PublishDeploymentStatus;
  TriggerResourceUpdateOn?: TriggerResourceUpdateOn;
}
export interface UpdateSyncConfigurationOutput {
  SyncConfiguration: SyncConfiguration;
}
export type ErrorMessage = string;
export type CreateConnectionError =
  | LimitExceededException
  | ResourceNotFoundException
  | ResourceUnavailableException
  | CommonErrors;
/**
 * Creates a connection that can then be given to other Amazon Web Services services like CodePipeline so
 * that it can access third-party code repositories. The connection is in pending status until
 * the third-party connection handshake is completed from the console.
 */
export const createConnection: API.OperationMethod<
  CreateConnectionInput,
  CreateConnectionOutput,
  CreateConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2) as any as S.Schema<CreateConnectionInput>,
  output: __S(3) as any as S.Schema<CreateConnectionOutput>,
  errors: [LimitExceededException, ResourceNotFoundException, ResourceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConnection",
}));

export type CreateHostError = LimitExceededException | CommonErrors;
/**
 * Creates a resource that represents the infrastructure where a third-party provider is
 * installed. The host is used when you create connections to an installed third-party provider
 * type, such as GitHub Enterprise Server. You create one host for all connections to that
 * provider.
 *
 * A host created through the CLI or the SDK is in `PENDING` status by
 * default. You can make its status `AVAILABLE` by setting up the host in the console.
 */
export const createHost: API.OperationMethod<
  CreateHostInput,
  CreateHostOutput,
  CreateHostError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(6) as any as S.Schema<CreateHostInput>,
  output: __S(7) as any as S.Schema<CreateHostOutput>,
  errors: [LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateHost",
}));

export type CreateRepositoryLinkError =
  | AccessDeniedException
  | ConcurrentModificationException
  | InternalServerException
  | InvalidInputException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a link to a specified external Git repository. A repository link allows Git sync to monitor and sync changes to files in a specified Git repository.
 */
export const createRepositoryLink: API.OperationMethod<
  CreateRepositoryLinkInput,
  CreateRepositoryLinkOutput,
  CreateRepositoryLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(8) as any as S.Schema<CreateRepositoryLinkInput>,
  output: __S(10) as any as S.Schema<CreateRepositoryLinkOutput>,
  errors: [
    AccessDeniedException,
    ConcurrentModificationException,
    InternalServerException,
    InvalidInputException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRepositoryLink",
}));

export type CreateSyncConfigurationError =
  | AccessDeniedException
  | ConcurrentModificationException
  | InternalServerException
  | InvalidInputException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a sync configuration which allows Amazon Web Services to sync content from a Git
 * repository to update a specified Amazon Web Services resource. Parameters for the sync
 * configuration are determined by the sync type.
 */
export const createSyncConfiguration: API.OperationMethod<
  CreateSyncConfigurationInput,
  CreateSyncConfigurationOutput,
  CreateSyncConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(11) as any as S.Schema<CreateSyncConfigurationInput>,
  output: __S(13) as any as S.Schema<CreateSyncConfigurationOutput>,
  errors: [
    AccessDeniedException,
    ConcurrentModificationException,
    InternalServerException,
    InvalidInputException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSyncConfiguration",
}));

export type DeleteConnectionError = ResourceNotFoundException | CommonErrors;
/**
 * The connection to be deleted.
 */
export const deleteConnection: API.OperationMethod<
  DeleteConnectionInput,
  DeleteConnectionOutput,
  DeleteConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14) as any as S.Schema<DeleteConnectionInput>,
  output: __S(15) as any as S.Schema<DeleteConnectionOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConnection",
}));

export type DeleteHostError =
  | ResourceNotFoundException
  | ResourceUnavailableException
  | CommonErrors;
/**
 * The host to be deleted. Before you delete a host, all connections associated to the host must be deleted.
 *
 * A host cannot be deleted if it is in the VPC_CONFIG_INITIALIZING or VPC_CONFIG_DELETING state.
 */
export const deleteHost: API.OperationMethod<
  DeleteHostInput,
  DeleteHostOutput,
  DeleteHostError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(16) as any as S.Schema<DeleteHostInput>,
  output: __S(15) as any as S.Schema<DeleteHostOutput>,
  errors: [ResourceNotFoundException, ResourceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteHost",
}));

export type DeleteRepositoryLinkError =
  | AccessDeniedException
  | ConcurrentModificationException
  | InternalServerException
  | InvalidInputException
  | ResourceNotFoundException
  | SyncConfigurationStillExistsException
  | ThrottlingException
  | UnsupportedProviderTypeException
  | CommonErrors;
/**
 * Deletes the association between your connection and a specified external Git repository.
 */
export const deleteRepositoryLink: API.OperationMethod<
  DeleteRepositoryLinkInput,
  DeleteRepositoryLinkOutput,
  DeleteRepositoryLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(17) as any as S.Schema<DeleteRepositoryLinkInput>,
  output: __S(15) as any as S.Schema<DeleteRepositoryLinkOutput>,
  errors: [
    AccessDeniedException,
    ConcurrentModificationException,
    InternalServerException,
    InvalidInputException,
    ResourceNotFoundException,
    SyncConfigurationStillExistsException,
    ThrottlingException,
    UnsupportedProviderTypeException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRepositoryLink",
}));

export type DeleteSyncConfigurationError =
  | AccessDeniedException
  | ConcurrentModificationException
  | InternalServerException
  | InvalidInputException
  | LimitExceededException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes the sync configuration for a specified repository and connection.
 */
export const deleteSyncConfiguration: API.OperationMethod<
  DeleteSyncConfigurationInput,
  DeleteSyncConfigurationOutput,
  DeleteSyncConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(18) as any as S.Schema<DeleteSyncConfigurationInput>,
  output: __S(15) as any as S.Schema<DeleteSyncConfigurationOutput>,
  errors: [
    AccessDeniedException,
    ConcurrentModificationException,
    InternalServerException,
    InvalidInputException,
    LimitExceededException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSyncConfiguration",
}));

export type GetConnectionError =
  | ResourceNotFoundException
  | ResourceUnavailableException
  | CommonErrors;
/**
 * Returns the connection ARN and details such as status, owner, and provider type.
 */
export const getConnection: API.OperationMethod<
  GetConnectionInput,
  GetConnectionOutput,
  GetConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(19) as any as S.Schema<GetConnectionInput>,
  output: __S(21) as any as S.Schema<GetConnectionOutput>,
  errors: [ResourceNotFoundException, ResourceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConnection",
}));

export type GetHostError = ResourceNotFoundException | ResourceUnavailableException | CommonErrors;
/**
 * Returns the host ARN and details such as status, provider type, endpoint, and, if
 * applicable, the VPC configuration.
 */
export const getHost: API.OperationMethod<
  GetHostInput,
  GetHostOutput,
  GetHostError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(22) as any as S.Schema<GetHostInput>,
  output: __S(23) as any as S.Schema<GetHostOutput>,
  errors: [ResourceNotFoundException, ResourceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetHost",
}));

export type GetRepositoryLinkError =
  | AccessDeniedException
  | ConcurrentModificationException
  | InternalServerException
  | InvalidInputException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns details about a repository link. A repository link allows Git sync to monitor
 * and sync changes from files in a specified Git repository.
 */
export const getRepositoryLink: API.OperationMethod<
  GetRepositoryLinkInput,
  GetRepositoryLinkOutput,
  GetRepositoryLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(24) as any as S.Schema<GetRepositoryLinkInput>,
  output: __S(25) as any as S.Schema<GetRepositoryLinkOutput>,
  errors: [
    AccessDeniedException,
    ConcurrentModificationException,
    InternalServerException,
    InvalidInputException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRepositoryLink",
}));

export type GetRepositorySyncStatusError =
  | AccessDeniedException
  | InternalServerException
  | InvalidInputException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns details about the sync status for a repository. A repository sync uses Git sync
 * to push and pull changes from your remote repository.
 */
export const getRepositorySyncStatus: API.OperationMethod<
  GetRepositorySyncStatusInput,
  GetRepositorySyncStatusOutput,
  GetRepositorySyncStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(26) as any as S.Schema<GetRepositorySyncStatusInput>,
  output: __S(30) as any as S.Schema<GetRepositorySyncStatusOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    InvalidInputException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRepositorySyncStatus",
}));

export type GetResourceSyncStatusError =
  | AccessDeniedException
  | InternalServerException
  | InvalidInputException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns the status of the sync with the Git repository for a specific Amazon Web Services
 * resource.
 */
export const getResourceSyncStatus: API.OperationMethod<
  GetResourceSyncStatusInput,
  GetResourceSyncStatusOutput,
  GetResourceSyncStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(31) as any as S.Schema<GetResourceSyncStatusInput>,
  output: __S(34) as any as S.Schema<GetResourceSyncStatusOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    InvalidInputException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourceSyncStatus",
}));

export type GetSyncBlockerSummaryError =
  | AccessDeniedException
  | InternalServerException
  | InvalidInputException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns a list of the most recent sync blockers.
 */
export const getSyncBlockerSummary: API.OperationMethod<
  GetSyncBlockerSummaryInput,
  GetSyncBlockerSummaryOutput,
  GetSyncBlockerSummaryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(35) as any as S.Schema<GetSyncBlockerSummaryInput>,
  output: __S(39) as any as S.Schema<GetSyncBlockerSummaryOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    InvalidInputException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSyncBlockerSummary",
}));

export type GetSyncConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | InvalidInputException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns details about a sync configuration, including the sync type and resource name. A sync configuration allows the configuration to sync (push and pull) changes from the remote repository for a specified branch in a Git repository.
 */
export const getSyncConfiguration: API.OperationMethod<
  GetSyncConfigurationInput,
  GetSyncConfigurationOutput,
  GetSyncConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(40) as any as S.Schema<GetSyncConfigurationInput>,
  output: __S(13) as any as S.Schema<GetSyncConfigurationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    InvalidInputException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSyncConfiguration",
}));

export type ListConnectionsError = ResourceNotFoundException | CommonErrors;
/**
 * Lists the connections associated with your account.
 */
export const listConnections: API.PaginatedOperationMethod<
  ListConnectionsInput,
  ListConnectionsOutput,
  ListConnectionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(41) as any as S.Schema<ListConnectionsInput>,
  output: __S(43) as any as S.Schema<ListConnectionsOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConnections",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListHostsError = CommonErrors;
/**
 * Lists the hosts associated with your account.
 */
export const listHosts: API.PaginatedOperationMethod<
  ListHostsInput,
  ListHostsOutput,
  ListHostsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(44) as any as S.Schema<ListHostsInput>,
  output: __S(47) as any as S.Schema<ListHostsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListHosts",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListRepositoryLinksError =
  | AccessDeniedException
  | ConcurrentModificationException
  | InternalServerException
  | InvalidInputException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists the repository links created for connections in your account.
 */
export const listRepositoryLinks: API.PaginatedOperationMethod<
  ListRepositoryLinksInput,
  ListRepositoryLinksOutput,
  ListRepositoryLinksError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(48) as any as S.Schema<ListRepositoryLinksInput>,
  output: __S(50) as any as S.Schema<ListRepositoryLinksOutput>,
  errors: [
    AccessDeniedException,
    ConcurrentModificationException,
    InternalServerException,
    InvalidInputException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRepositoryLinks",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListRepositorySyncDefinitionsError =
  | AccessDeniedException
  | InternalServerException
  | InvalidInputException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists the repository sync definitions for repository links in your account.
 */
export const listRepositorySyncDefinitions: API.OperationMethod<
  ListRepositorySyncDefinitionsInput,
  ListRepositorySyncDefinitionsOutput,
  ListRepositorySyncDefinitionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(51) as any as S.Schema<ListRepositorySyncDefinitionsInput>,
  output: __S(54) as any as S.Schema<ListRepositorySyncDefinitionsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    InvalidInputException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRepositorySyncDefinitions",
}));

export type ListSyncConfigurationsError =
  | AccessDeniedException
  | InternalServerException
  | InvalidInputException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns a list of sync configurations for a specified repository.
 */
export const listSyncConfigurations: API.PaginatedOperationMethod<
  ListSyncConfigurationsInput,
  ListSyncConfigurationsOutput,
  ListSyncConfigurationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(55) as any as S.Schema<ListSyncConfigurationsInput>,
  output: __S(57) as any as S.Schema<ListSyncConfigurationsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    InvalidInputException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSyncConfigurations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError = ResourceNotFoundException | CommonErrors;
/**
 * Gets the set of key-value pairs (metadata) that are used to manage the resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58) as any as S.Schema<ListTagsForResourceInput>,
  output: __S(59) as any as S.Schema<ListTagsForResourceOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type TagResourceError = LimitExceededException | ResourceNotFoundException | CommonErrors;
/**
 * Adds to or modifies the tags of the given resource. Tags are metadata that can be used
 * to manage a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceInput,
  TagResourceOutput,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(60) as any as S.Schema<TagResourceInput>,
  output: __S(15) as any as S.Schema<TagResourceOutput>,
  errors: [LimitExceededException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError = ResourceNotFoundException | CommonErrors;
/**
 * Removes tags from an Amazon Web Services resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceInput,
  UntagResourceOutput,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(61) as any as S.Schema<UntagResourceInput>,
  output: __S(15) as any as S.Schema<UntagResourceOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateHostError =
  | ConflictException
  | ResourceNotFoundException
  | ResourceUnavailableException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Updates a specified host with the provided configurations.
 */
export const updateHost: API.OperationMethod<
  UpdateHostInput,
  UpdateHostOutput,
  UpdateHostError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62) as any as S.Schema<UpdateHostInput>,
  output: __S(15) as any as S.Schema<UpdateHostOutput>,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ResourceUnavailableException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateHost",
}));

export type UpdateRepositoryLinkError =
  | AccessDeniedException
  | ConditionalCheckFailedException
  | InternalServerException
  | InvalidInputException
  | ResourceNotFoundException
  | ThrottlingException
  | UpdateOutOfSyncException
  | CommonErrors;
/**
 * Updates the association between your connection and a specified external Git repository.
 * A repository link allows Git sync to monitor and sync changes to files in a specified Git
 * repository.
 */
export const updateRepositoryLink: API.OperationMethod<
  UpdateRepositoryLinkInput,
  UpdateRepositoryLinkOutput,
  UpdateRepositoryLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(63) as any as S.Schema<UpdateRepositoryLinkInput>,
  output: __S(10) as any as S.Schema<UpdateRepositoryLinkOutput>,
  errors: [
    AccessDeniedException,
    ConditionalCheckFailedException,
    InternalServerException,
    InvalidInputException,
    ResourceNotFoundException,
    ThrottlingException,
    UpdateOutOfSyncException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRepositoryLink",
}));

export type UpdateSyncBlockerError =
  | AccessDeniedException
  | InternalServerException
  | InvalidInputException
  | ResourceNotFoundException
  | RetryLatestCommitFailedException
  | SyncBlockerDoesNotExistException
  | ThrottlingException
  | CommonErrors;
/**
 * Allows you to update the status of a sync blocker, resolving the blocker and allowing syncing to continue.
 */
export const updateSyncBlocker: API.OperationMethod<
  UpdateSyncBlockerInput,
  UpdateSyncBlockerOutput,
  UpdateSyncBlockerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(64) as any as S.Schema<UpdateSyncBlockerInput>,
  output: __S(65) as any as S.Schema<UpdateSyncBlockerOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    InvalidInputException,
    ResourceNotFoundException,
    RetryLatestCommitFailedException,
    SyncBlockerDoesNotExistException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSyncBlocker",
}));

export type UpdateSyncConfigurationError =
  | AccessDeniedException
  | ConcurrentModificationException
  | InternalServerException
  | InvalidInputException
  | ResourceNotFoundException
  | ThrottlingException
  | UpdateOutOfSyncException
  | CommonErrors;
/**
 * Updates the sync configuration for your connection and a specified external Git repository.
 */
export const updateSyncConfiguration: API.OperationMethod<
  UpdateSyncConfigurationInput,
  UpdateSyncConfigurationOutput,
  UpdateSyncConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(66) as any as S.Schema<UpdateSyncConfigurationInput>,
  output: __S(13) as any as S.Schema<UpdateSyncConfigurationOutput>,
  errors: [
    AccessDeniedException,
    ConcurrentModificationException,
    InternalServerException,
    InvalidInputException,
    ResourceNotFoundException,
    ThrottlingException,
    UpdateOutOfSyncException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSyncConfiguration",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 1:
      return S.Array(__S(0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ProviderType: S.optional(S.String),
          ConnectionName: S.String,
          Tags: S.optional(__S(1)),
          HostArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateConnectionInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ConnectionArn: S.String, Tags: S.optional(__S(1)) }),
      ).annotate({ identifier: "CreateConnectionOutput" });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          VpcId: S.String,
          SubnetIds: __S(4),
          SecurityGroupIds: __S(4),
          TlsCertificate: S.optional(S.String),
        }),
      ).annotate({ identifier: "VpcConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          ProviderType: S.String,
          ProviderEndpoint: S.String,
          VpcConfiguration: S.optional(__S(5)),
          Tags: S.optional(__S(1)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateHostInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ HostArn: S.optional(S.String), Tags: S.optional(__S(1)) }),
      ).annotate({ identifier: "CreateHostOutput" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ConnectionArn: S.String,
          OwnerId: S.String,
          RepositoryName: S.String,
          EncryptionKeyArn: S.optional(S.String),
          Tags: S.optional(__S(1)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateRepositoryLinkInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ConnectionArn: S.String,
          EncryptionKeyArn: S.optional(S.String),
          OwnerId: S.String,
          ProviderType: S.String,
          RepositoryLinkArn: S.String,
          RepositoryLinkId: S.String,
          RepositoryName: S.String,
        }),
      ).annotate({ identifier: "RepositoryLinkInfo" });
    case 2:
      return S.suspend(() => S.Struct({ RepositoryLinkInfo: __S(9) })).annotate({
        identifier: "CreateRepositoryLinkOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Branch: S.String,
          ConfigFile: S.String,
          RepositoryLinkId: S.String,
          ResourceName: S.String,
          RoleArn: S.String,
          SyncType: S.String,
          PublishDeploymentStatus: S.optional(S.String),
          TriggerResourceUpdateOn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateSyncConfigurationInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Branch: S.String,
          ConfigFile: S.optional(S.String),
          OwnerId: S.String,
          ProviderType: S.String,
          RepositoryLinkId: S.String,
          RepositoryName: S.String,
          ResourceName: S.String,
          RoleArn: S.String,
          SyncType: S.String,
          PublishDeploymentStatus: S.optional(S.String),
          TriggerResourceUpdateOn: S.optional(S.String),
        }),
      ).annotate({ identifier: "SyncConfiguration" });
    case 5:
      return S.suspend(() => S.Struct({ SyncConfiguration: __S(12) })).annotate({
        identifier: "CreateSyncConfigurationOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ConnectionArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteConnectionInput" });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteConnectionOutput",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ HostArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteHostInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ RepositoryLinkId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteRepositoryLinkInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ SyncType: S.String, ResourceName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteSyncConfigurationInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ConnectionArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetConnectionInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ConnectionName: S.optional(S.String),
          ConnectionArn: S.optional(S.String),
          ProviderType: S.optional(S.String),
          OwnerAccountId: S.optional(S.String),
          ConnectionStatus: S.optional(S.String),
          HostArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Connection" });
    case 5:
      return S.suspend(() => S.Struct({ Connection: S.optional(__S(20)) })).annotate({
        identifier: "GetConnectionOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ HostArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetHostInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Status: S.optional(S.String),
          ProviderType: S.optional(S.String),
          ProviderEndpoint: S.optional(S.String),
          VpcConfiguration: S.optional(__S(5)),
        }),
      ).annotate({ identifier: "GetHostOutput" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ RepositoryLinkId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetRepositoryLinkInput" });
    case 1:
      return S.suspend(() => S.Struct({ RepositoryLinkInfo: __S(9) })).annotate({
        identifier: "GetRepositoryLinkOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Branch: S.String,
          RepositoryLinkId: S.String,
          SyncType: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetRepositorySyncStatusInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Event: S.String,
          ExternalId: S.optional(S.String),
          Time: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Type: S.String,
        }),
      ).annotate({ identifier: "RepositorySyncEvent" });
    case 4:
      return S.Array(__S(27));
    case 5:
      return S.suspend(() =>
        S.Struct({
          StartedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Status: S.String,
          Events: __S(28),
        }),
      ).annotate({ identifier: "RepositorySyncAttempt" });
    case 6:
      return S.suspend(() => S.Struct({ LatestSync: __S(29) })).annotate({
        identifier: "GetRepositorySyncStatusOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceName: S.String, SyncType: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetResourceSyncStatusInput",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Branch: S.String,
          Directory: S.String,
          OwnerId: S.String,
          RepositoryName: S.String,
          ProviderType: S.String,
          Sha: S.String,
        }),
      ).annotate({ identifier: "Revision" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Events: __S(28),
          InitialRevision: __S(32),
          StartedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Status: S.String,
          TargetRevision: __S(32),
          Target: S.String,
        }),
      ).annotate({ identifier: "ResourceSyncAttempt" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DesiredState: S.optional(__S(32)),
          LatestSuccessfulSync: S.optional(__S(33)),
          LatestSync: __S(33),
        }),
      ).annotate({
        identifier: "GetResourceSyncStatusOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ SyncType: S.String, ResourceName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetSyncBlockerSummaryInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Id: S.String,
          Type: S.String,
          Status: S.String,
          CreatedReason: S.String,
          CreatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Contexts: S.optional(__S(1)),
          ResolvedReason: S.optional(S.String),
          ResolvedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "SyncBlocker" });
    case 5:
      return S.Array(__S(36));
    case 6:
      return S.suspend(() =>
        S.Struct({
          ResourceName: S.String,
          ParentResourceName: S.optional(S.String),
          LatestBlockers: S.optional(__S(37)),
        }),
      ).annotate({ identifier: "SyncBlockerSummary" });
    case 7:
      return S.suspend(() => S.Struct({ SyncBlockerSummary: __S(38) })).annotate({
        identifier: "GetSyncBlockerSummaryOutput",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ SyncType: S.String, ResourceName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetSyncConfigurationInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ProviderTypeFilter: S.optional(S.String),
          HostArnFilter: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListConnectionsInput" });
    case 2:
      return S.Array(__S(20));
    case 3:
      return S.suspend(() =>
        S.Struct({ Connections: S.optional(__S(42)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListConnectionsOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ MaxResults: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListHostsInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          HostArn: S.optional(S.String),
          ProviderType: S.optional(S.String),
          ProviderEndpoint: S.optional(S.String),
          VpcConfiguration: S.optional(__S(5)),
          Status: S.optional(S.String),
          StatusMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "Host" });
    case 6:
      return S.Array(__S(45));
    case 7:
      return S.suspend(() =>
        S.Struct({ Hosts: S.optional(__S(46)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListHostsOutput" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ MaxResults: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListRepositoryLinksInput" });
    case 1:
      return S.Array(__S(9));
    case 2:
      return S.suspend(() =>
        S.Struct({ RepositoryLinks: __S(49), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListRepositoryLinksOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ RepositoryLinkId: S.String, SyncType: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListRepositorySyncDefinitionsInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Branch: S.String, Directory: S.String, Parent: S.String, Target: S.String }),
      ).annotate({ identifier: "RepositorySyncDefinition" });
    case 5:
      return S.Array(__S(52));
    case 6:
      return S.suspend(() =>
        S.Struct({
          RepositorySyncDefinitions: __S(53),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListRepositorySyncDefinitionsOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          RepositoryLinkId: S.String,
          SyncType: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListSyncConfigurationsInput",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(12));
    case 1:
      return S.suspend(() =>
        S.Struct({ SyncConfigurations: __S(56), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListSyncConfigurationsOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListTagsForResourceInput" });
    case 3:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(1)) })).annotate({
        identifier: "ListTagsForResourceOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Tags: __S(1) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, TagKeys: __S(4) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          HostArn: S.String,
          ProviderEndpoint: S.optional(S.String),
          VpcConfiguration: S.optional(__S(5)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateHostInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConnectionArn: S.optional(S.String),
          EncryptionKeyArn: S.optional(S.String),
          RepositoryLinkId: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateRepositoryLinkInput",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Id: S.String,
          SyncType: S.String,
          ResourceName: S.String,
          ResolvedReason: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateSyncBlockerInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceName: S.String,
          ParentResourceName: S.optional(S.String),
          SyncBlocker: __S(36),
        }),
      ).annotate({ identifier: "UpdateSyncBlockerOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Branch: S.optional(S.String),
          ConfigFile: S.optional(S.String),
          RepositoryLinkId: S.optional(S.String),
          ResourceName: S.String,
          RoleArn: S.optional(S.String),
          SyncType: S.String,
          PublishDeploymentStatus: S.optional(S.String),
          TriggerResourceUpdateOn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateSyncConfigurationInput",
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
    case 8:
      return __c8(i & 7);
  }
}
