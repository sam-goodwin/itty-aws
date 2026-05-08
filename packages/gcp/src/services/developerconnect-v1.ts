// ==========================================================================
// Developer Connect API (developerconnect v1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "developerconnect",
  version: "v1",
  rootUrl: "https://developerconnect.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface ProviderOAuthConfig {
  /** Required. User selected scopes to apply to the Oauth config In the event of changing scopes, user records under AccountConnector will be deleted and users will re-auth again. */
  scopes?: ReadonlyArray<string>;
  /** Optional. Immutable. Developer Connect provided OAuth. */
  systemProviderId?:
    | "SYSTEM_PROVIDER_UNSPECIFIED"
    | "GITHUB"
    | "GITLAB"
    | "GOOGLE"
    | "SENTRY"
    | "ROVO"
    | "NEW_RELIC"
    | "DATASTAX"
    | "DYNATRACE"
    | (string & {});
}

export const ProviderOAuthConfig: Schema.Schema<ProviderOAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scopes: Schema.optional(Schema.Array(Schema.String)),
    systemProviderId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProviderOAuthConfig" });

export interface User {
  /** Identifier. Resource name of the user, in the format `projects/* /locations/* /accountConnectors/* /users/*`. */
  name?: string;
  /** Output only. The timestamp when the user was created. */
  createTime?: string;
  /** Output only. The timestamp when the token was last requested. */
  lastTokenRequestTime?: string;
  /** Output only. Developer Connect automatically converts user identity to some human readable description, e.g., email address. */
  displayName?: string;
}

export const User: Schema.Schema<User> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    lastTokenRequestTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "User" });

export interface GoogleCloudRun {
  /** Required. Immutable. The name of the Cloud Run service. Format: `projects/{project}/locations/{location}/services/{service}`. */
  serviceUri?: string;
}

export const GoogleCloudRun: Schema.Schema<GoogleCloudRun> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudRun" });

export interface UserCredential {
  /** Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: `projects/* /secrets/* /versions/*` or `projects/* /locations/* /secrets/* /versions/*` (if regional secrets are supported in that location). */
  userTokenSecretVersion?: string;
  /** Output only. The username associated with this token. */
  username?: string;
}

export const UserCredential: Schema.Schema<UserCredential> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userTokenSecretVersion: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserCredential" });

export interface BitbucketCloudConfig {
  /** Required. An access token with the minimum `repository`, `pullrequest` and `webhook` scope access. It can either be a workspace, project or repository access token. This is needed to create webhooks. It's recommended to use a system account to generate these credentials. */
  authorizerCredential?: UserCredential;
  /** Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events, formatted as `projects/* /secrets/* /versions/*` or `projects/* /locations/* /secrets/* /versions/*` (if regional secrets are supported in that location). This is used to validate and create webhooks. */
  webhookSecretSecretVersion?: string;
  /** Required. An access token with the minimum `repository` access. It can either be a workspace, project or repository access token. It's recommended to use a system account to generate the credentials. */
  readAuthorizerCredential?: UserCredential;
  /** Required. The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform. */
  workspace?: string;
}

export const BitbucketCloudConfig: Schema.Schema<BitbucketCloudConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authorizerCredential: Schema.optional(UserCredential),
    webhookSecretSecretVersion: Schema.optional(Schema.String),
    readAuthorizerCredential: Schema.optional(UserCredential),
    workspace: Schema.optional(Schema.String),
  }).annotate({ identifier: "BitbucketCloudConfig" });

export interface Installation {
  /** ID of the installation in GitHub. */
  id?: string;
  /** Either "user" or "organization". */
  type?: string;
  /** Name of the GitHub user or organization that owns this installation. */
  name?: string;
}

export const Installation: Schema.Schema<Installation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Installation" });

export interface FetchGitHubInstallationsResponse {
  /** List of installations available to the OAuth user (for github.com) or all the installations (for GitHub enterprise). */
  installations?: ReadonlyArray<Installation>;
}

export const FetchGitHubInstallationsResponse: Schema.Schema<FetchGitHubInstallationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    installations: Schema.optional(Schema.Array(Installation)),
  }).annotate({ identifier: "FetchGitHubInstallationsResponse" });

export interface LinkableGitRepository {
  /** The clone uri of the repository. */
  cloneUri?: string;
}

export const LinkableGitRepository: Schema.Schema<LinkableGitRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloneUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "LinkableGitRepository" });

export interface GitRepositoryLink {
  /** Output only. URI to access the linked repository through the Git Proxy. This field is only populated if the git proxy is enabled for the connection. */
  gitProxyUri?: string;
  /** Output only. [Output only] Update timestamp */
  updateTime?: string;
  /** Optional. Labels as key value pairs */
  labels?: Record<string, string>;
  /** Output only. Set to true when the connection is being set up or updated in the background. */
  reconciling?: boolean;
  /** Optional. Allows clients to store small amounts of arbitrary data. */
  annotations?: Record<string, string>;
  /** Identifier. Resource name of the repository, in the format `projects/* /locations/* /connections/* /gitRepositoryLinks/*`. */
  name?: string;
  /** Output only. External ID of the webhook created for the repository. */
  webhookId?: string;
  /** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. [Output only] Delete timestamp */
  deleteTime?: string;
  /** Output only. A system-assigned unique identifier for the GitRepositoryLink. */
  uid?: string;
  /** Output only. [Output only] Create timestamp */
  createTime?: string;
  /** Required. Git Clone URI. */
  cloneUri?: string;
}

export const GitRepositoryLink: Schema.Schema<GitRepositoryLink> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gitProxyUri: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    reconciling: Schema.optional(Schema.Boolean),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    webhookId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    cloneUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GitRepositoryLink" });

export interface ListGitRepositoryLinksResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** The list of GitRepositoryLinks */
  gitRepositoryLinks?: ReadonlyArray<GitRepositoryLink>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListGitRepositoryLinksResponse: Schema.Schema<ListGitRepositoryLinksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    gitRepositoryLinks: Schema.optional(Schema.Array(GitRepositoryLink)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListGitRepositoryLinksResponse" });

export interface FetchLinkableGitRepositoriesResponse {
  /** The git repositories that can be linked to the connection. */
  linkableGitRepositories?: ReadonlyArray<LinkableGitRepository>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const FetchLinkableGitRepositoriesResponse: Schema.Schema<FetchLinkableGitRepositoriesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    linkableGitRepositories: Schema.optional(
      Schema.Array(LinkableGitRepository),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "FetchLinkableGitRepositoriesResponse" });

export interface GoogleArtifactAnalysis {
  /** Required. The project id of the project where the provenance is stored. */
  projectId?: string;
}

export const GoogleArtifactAnalysis: Schema.Schema<GoogleArtifactAnalysis> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleArtifactAnalysis" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    done: Schema.optional(Schema.Boolean),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    error: Schema.optional(Status),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(Operation)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface ExchangeError {
  /** https://datatracker.ietf.org/doc/html/rfc6749#section-5.2 - error */
  code?: string;
  /** https://datatracker.ietf.org/doc/html/rfc6749#section-5.2 - error_description */
  description?: string;
}

export const ExchangeError: Schema.Schema<ExchangeError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExchangeError" });

export interface OAuthCredential {
  /** Required. A SecretManager resource containing the OAuth token that authorizes the connection. Format: `projects/* /secrets/* /versions/*` or `projects/* /locations/* /secrets/* /versions/*` (if regional secrets are supported in that location). */
  oauthTokenSecretVersion?: string;
  /** Output only. The username associated with this token. */
  username?: string;
}

export const OAuthCredential: Schema.Schema<OAuthCredential> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oauthTokenSecretVersion: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
  }).annotate({ identifier: "OAuthCredential" });

export interface GitHubConfig {
  /** Optional. OAuth credential of the account that authorized the GitHub App. It is recommended to use a robot account instead of a human user account. The OAuth token must be tied to the GitHub App of this config. */
  authorizerCredential?: OAuthCredential;
  /** Optional. GitHub App installation id. */
  appInstallationId?: string;
  /** Required. Immutable. The GitHub Application that was installed to the GitHub user or organization. */
  githubApp?:
    | "GIT_HUB_APP_UNSPECIFIED"
    | "DEVELOPER_CONNECT"
    | "FIREBASE"
    | "GEMINI_CODE_ASSIST"
    | "DATAFORM"
    | (string & {});
  /** Output only. The URI to navigate to in order to manage the installation associated with this GitHubConfig. */
  installationUri?: string;
}

export const GitHubConfig: Schema.Schema<GitHubConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authorizerCredential: Schema.optional(OAuthCredential),
    appInstallationId: Schema.optional(Schema.String),
    githubApp: Schema.optional(Schema.String),
    installationUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GitHubConfig" });

export interface GitLabConfig {
  /** Required. A GitLab personal access token with the minimum `read_api` scope access and a minimum role of `reporter`. The GitLab Projects visible to this Personal Access Token will control which Projects Developer Connect has access to. */
  readAuthorizerCredential?: UserCredential;
  /** Required. Immutable. SecretManager resource containing the webhook secret of a GitLab project, formatted as `projects/* /secrets/* /versions/*` or `projects/* /locations/* /secrets/* /versions/*` (if regional secrets are supported in that location). This is used to validate webhooks. */
  webhookSecretSecretVersion?: string;
  /** Required. A GitLab personal access token with the minimum `api` scope access and a minimum role of `maintainer`. The GitLab Projects visible to this Personal Access Token will control which Projects Developer Connect has access to. */
  authorizerCredential?: UserCredential;
}

export const GitLabConfig: Schema.Schema<GitLabConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    readAuthorizerCredential: Schema.optional(UserCredential),
    webhookSecretSecretVersion: Schema.optional(Schema.String),
    authorizerCredential: Schema.optional(UserCredential),
  }).annotate({ identifier: "GitLabConfig" });

export interface ArtifactDeployment {
  /** Output only. Unique identifier of `ArtifactDeployment`. */
  id?: string;
  /** Output only. The artifact alias in the deployment spec, with Tag/SHA. e.g. us-docker.pkg.dev/my-project/my-repo/image:1.0.0 */
  artifactAlias?: string;
  /** Output only. The time at which the deployment was undeployed, all artifacts are considered undeployed once this time is set. */
  undeployTime?: string;
  /** Output only. The artifact that is deployed. */
  artifactReference?: string;
  /** Output only. The source commits at which this artifact was built. Extracted from provenance. */
  sourceCommitUris?: ReadonlyArray<string>;
  /** Output only. The time at which the deployment was deployed. */
  deployTime?: string;
  /** Output only. The summary of container status of the artifact deployment. Format as `ContainerStatusState-Reason : restartCount` e.g. "Waiting-ImagePullBackOff : 3" */
  containerStatusSummary?: string;
}

export const ArtifactDeployment: Schema.Schema<ArtifactDeployment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    artifactAlias: Schema.optional(Schema.String),
    undeployTime: Schema.optional(Schema.String),
    artifactReference: Schema.optional(Schema.String),
    sourceCommitUris: Schema.optional(Schema.Array(Schema.String)),
    deployTime: Schema.optional(Schema.String),
    containerStatusSummary: Schema.optional(Schema.String),
  }).annotate({ identifier: "ArtifactDeployment" });

export interface GKEWorkload {
  /** Output only. The name of the GKE deployment. Format: `projects/{project}/locations/{location}/clusters/{cluster}/namespaces/{namespace}/deployments/{deployment}`. */
  deployment?: string;
  /** Required. Immutable. The name of the GKE cluster. Format: `projects/{project}/locations/{location}/clusters/{cluster}`. */
  cluster?: string;
}

export const GKEWorkload: Schema.Schema<GKEWorkload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deployment: Schema.optional(Schema.String),
    cluster: Schema.optional(Schema.String),
  }).annotate({ identifier: "GKEWorkload" });

export interface AppHubWorkload {
  /** Output only. The environment of the App Hub Workload. */
  environment?: string;
  /** Output only. The criticality of the App Hub Workload. */
  criticality?: string;
  /** Required. Output only. Immutable. The name of the App Hub Workload. Format: `projects/{project}/locations/{location}/applications/{application}/workloads/{workload}`. */
  workload?: string;
}

export const AppHubWorkload: Schema.Schema<AppHubWorkload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environment: Schema.optional(Schema.String),
    criticality: Schema.optional(Schema.String),
    workload: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppHubWorkload" });

export interface AppHubService {
  /** Output only. The criticality of the App Hub Service. */
  criticality?: string;
  /** Output only. The environment of the App Hub Service. */
  environment?: string;
  /** Required. Output only. Immutable. The name of the App Hub Service. Format: `projects/{project}/locations/{location}/applications/{application}/services/{service}`. */
  apphubService?: string;
}

export const AppHubService: Schema.Schema<AppHubService> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    criticality: Schema.optional(Schema.String),
    environment: Schema.optional(Schema.String),
    apphubService: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppHubService" });

export interface RuntimeConfig {
  /** Output only. Google Kubernetes Engine runtime. */
  gkeWorkload?: GKEWorkload;
  /** Required. Immutable. The URI of the runtime configuration. For GKE, this is the cluster name. For Cloud Run, this is the service name. */
  uri?: string;
  /** Output only. Cloud Run runtime. */
  googleCloudRun?: GoogleCloudRun;
  /** Output only. App Hub Workload. */
  appHubWorkload?: AppHubWorkload;
  /** Output only. The state of the Runtime. */
  state?: "STATE_UNSPECIFIED" | "LINKED" | "UNLINKED" | (string & {});
  /** Output only. App Hub Service. */
  appHubService?: AppHubService;
}

export const RuntimeConfig: Schema.Schema<RuntimeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gkeWorkload: Schema.optional(GKEWorkload),
    uri: Schema.optional(Schema.String),
    googleCloudRun: Schema.optional(GoogleCloudRun),
    appHubWorkload: Schema.optional(AppHubWorkload),
    state: Schema.optional(Schema.String),
    appHubService: Schema.optional(AppHubService),
  }).annotate({ identifier: "RuntimeConfig" });

export interface DeploymentEvent {
  /** Output only. The artifact deployments of the DeploymentEvent. Each artifact deployment contains the artifact uri and the runtime configuration uri. For GKE, this would be all the containers images that are deployed in the pod. */
  artifactDeployments?: ReadonlyArray<ArtifactDeployment>;
  /** Output only. The update time of the DeploymentEvent. */
  updateTime?: string;
  /** Output only. The runtime configurations where the DeploymentEvent happened. */
  runtimeConfig?: RuntimeConfig;
  /** Identifier. The name of the DeploymentEvent. This name is provided by Developer Connect insights. Format: projects/{project}/locations/{location}/insightsConfigs/{insights_config}/deploymentEvents/{uuid} */
  name?: string;
  /** Output only. The runtime assigned URI of the DeploymentEvent. For GKE, this is the fully qualified replica set uri. e.g. container.googleapis.com/projects/{project}/locations/{location}/clusters/{cluster}/k8s/namespaces/{namespace}/apps/replicasets/{replica-set-id} For Cloud Run, this is the revision name. */
  runtimeDeploymentUri?: string;
  /** Output only. The time at which the DeploymentEvent was undeployed, all artifacts are considered undeployed once this time is set. This would be the max of all ArtifactDeployment undeploy_times. If any ArtifactDeployment is still active (i.e. does not have an undeploy_time), this field will be empty. */
  undeployTime?: string;
  /** Output only. The time at which the DeploymentEvent was deployed. This would be the min of all ArtifactDeployment deploy_times. */
  deployTime?: string;
  /** Output only. The create time of the DeploymentEvent. */
  createTime?: string;
  /** Output only. The state of the DeploymentEvent. */
  state?:
    | "STATE_UNSPECIFIED"
    | "STATE_ACTIVE"
    | "STATE_INACTIVE"
    | (string & {});
}

export const DeploymentEvent: Schema.Schema<DeploymentEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifactDeployments: Schema.optional(Schema.Array(ArtifactDeployment)),
    updateTime: Schema.optional(Schema.String),
    runtimeConfig: Schema.optional(RuntimeConfig),
    name: Schema.optional(Schema.String),
    runtimeDeploymentUri: Schema.optional(Schema.String),
    undeployTime: Schema.optional(Schema.String),
    deployTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeploymentEvent" });

export interface ListDeploymentEventsResponse {
  /** The list of DeploymentEvents. */
  deploymentEvents?: ReadonlyArray<DeploymentEvent>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListDeploymentEventsResponse: Schema.Schema<ListDeploymentEventsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deploymentEvents: Schema.optional(Schema.Array(DeploymentEvent)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDeploymentEventsResponse" });

export interface HttpBody {
  /** The HTTP request/response body as raw binary. */
  data?: string;
  /** Application specific response metadata. Must be set in the first response for streaming APIs. */
  extensions?: ReadonlyArray<Record<string, unknown>>;
  /** The HTTP Content-Type header value specifying the content type of the body. */
  contentType?: string;
}

export const HttpBody: Schema.Schema<HttpBody> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.optional(Schema.String),
    extensions: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    contentType: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpBody" });

export interface ProcessGitLabWebhookRequest {
  /** Required. HTTP request body. */
  body?: HttpBody;
}

export const ProcessGitLabWebhookRequest: Schema.Schema<ProcessGitLabWebhookRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(HttpBody),
  }).annotate({ identifier: "ProcessGitLabWebhookRequest" });

export interface InstallationState {
  /** Output only. Current step of the installation process. */
  stage?:
    | "STAGE_UNSPECIFIED"
    | "PENDING_CREATE_APP"
    | "PENDING_USER_OAUTH"
    | "PENDING_INSTALL_APP"
    | "COMPLETE"
    | (string & {});
  /** Output only. Message of what the user should do next to continue the installation. Empty string if the installation is already complete. */
  message?: string;
  /** Output only. Link to follow for next action. Empty string if the installation is already complete. */
  actionUri?: string;
}

export const InstallationState: Schema.Schema<InstallationState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stage: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    actionUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "InstallationState" });

export interface Projects {
  /** Optional. The project IDs. Format: {project} */
  projectIds?: ReadonlyArray<string>;
}

export const Projects: Schema.Schema<Projects> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Projects" });

export interface GoogleArtifactRegistry {
  /** Required. Immutable. The name of the artifact registry package. */
  artifactRegistryPackage?: string;
  /** Required. The host project of Artifact Registry. */
  projectId?: string;
}

export const GoogleArtifactRegistry: Schema.Schema<GoogleArtifactRegistry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifactRegistryPackage: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleArtifactRegistry" });

export interface ArtifactConfig {
  /** Optional. Set if the artifact is stored in Artifact registry. */
  googleArtifactRegistry?: GoogleArtifactRegistry;
  /** Optional. Set if the artifact metadata is stored in Artifact analysis. */
  googleArtifactAnalysis?: GoogleArtifactAnalysis;
  /** Required. Immutable. The URI of the artifact that is deployed. e.g. `us-docker.pkg.dev/my-project/my-repo/image`. The URI does not include the tag / digest because it captures a lineage of artifacts. */
  uri?: string;
}

export const ArtifactConfig: Schema.Schema<ArtifactConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    googleArtifactRegistry: Schema.optional(GoogleArtifactRegistry),
    googleArtifactAnalysis: Schema.optional(GoogleArtifactAnalysis),
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "ArtifactConfig" });

export interface InsightsConfig {
  /** Identifier. The name of the InsightsConfig. Format: projects/{project}/locations/{location}/insightsConfigs/{insightsConfig} */
  name?: string;
  /** Output only. The runtime configurations where the application is deployed. */
  runtimeConfigs?: ReadonlyArray<RuntimeConfig>;
  /** Optional. User specified annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. */
  annotations?: Record<string, string>;
  /** Output only. Reconciling (https://google.aip.dev/128#reconciliation). Set to true if the current state of InsightsConfig does not match the user's intended state, and the service is actively updating the resource to reconcile them. This can happen due to user-triggered updates or system actions like failover or maintenance. */
  reconciling?: boolean;
  /** Output only. Update timestamp. */
  updateTime?: string;
  /** Optional. Set of labels associated with an InsightsConfig. */
  labels?: Record<string, string>;
  /** Output only. Any errors that occurred while setting up the InsightsConfig. Each error will be in the format: `field_name: error_message`, e.g. GetAppHubApplication: Permission denied while getting App Hub application. Please grant permissions to the P4SA. */
  errors?: ReadonlyArray<Status>;
  /** Optional. The projects to track with the InsightsConfig. */
  projects?: Projects;
  /** Output only. Create timestamp. */
  createTime?: string;
  /** Optional. Output only. The state of the InsightsConfig. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "COMPLETE"
    | "ERROR"
    | (string & {});
  /** Optional. The artifact configurations of the artifacts that are deployed. */
  artifactConfigs?: ReadonlyArray<ArtifactConfig>;
  /** Optional. The name of the App Hub Application. Format: projects/{project}/locations/{location}/applications/{application} */
  appHubApplication?: string;
}

export const InsightsConfig: Schema.Schema<InsightsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    runtimeConfigs: Schema.optional(Schema.Array(RuntimeConfig)),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    reconciling: Schema.optional(Schema.Boolean),
    updateTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    errors: Schema.optional(Schema.Array(Status)),
    projects: Schema.optional(Projects),
    createTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    artifactConfigs: Schema.optional(Schema.Array(ArtifactConfig)),
    appHubApplication: Schema.optional(Schema.String),
  }).annotate({ identifier: "InsightsConfig" });

export interface ListInsightsConfigsResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** The list of InsightsConfigs. */
  insightsConfigs?: ReadonlyArray<InsightsConfig>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListInsightsConfigsResponse: Schema.Schema<ListInsightsConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    insightsConfigs: Schema.optional(Schema.Array(InsightsConfig)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListInsightsConfigsResponse" });

export interface FetchReadTokenRequest {}

export const FetchReadTokenRequest: Schema.Schema<FetchReadTokenRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "FetchReadTokenRequest",
  });

export interface Location {
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse: Schema.Schema<ListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(Location)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface CryptoKeyConfig {
  /** Required. The name of the key which is used to encrypt/decrypt customer data. For key in Cloud KMS, the key should be in the format of `projects/* /locations/* /keyRings/* /cryptoKeys/*`. */
  keyReference?: string;
}

export const CryptoKeyConfig: Schema.Schema<CryptoKeyConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyReference: Schema.optional(Schema.String),
  }).annotate({ identifier: "CryptoKeyConfig" });

export interface ProcessBitbucketCloudWebhookRequest {
  /** Required. HTTP request body. */
  body?: HttpBody;
}

export const ProcessBitbucketCloudWebhookRequest: Schema.Schema<ProcessBitbucketCloudWebhookRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(HttpBody),
  }).annotate({ identifier: "ProcessBitbucketCloudWebhookRequest" });

export interface FetchReadTokenResponse {
  /** The token content. */
  token?: string;
  /** Expiration timestamp. Can be empty if unknown or non-expiring. */
  expirationTime?: string;
  /** The git_username to specify when making a git clone with the token. For example, for GitHub GitRepositoryLinks, this would be "x-access-token" */
  gitUsername?: string;
}

export const FetchReadTokenResponse: Schema.Schema<FetchReadTokenResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
    expirationTime: Schema.optional(Schema.String),
    gitUsername: Schema.optional(Schema.String),
  }).annotate({ identifier: "FetchReadTokenResponse" });

export interface ProcessGitHubEnterpriseWebhookRequest {
  /** Required. HTTP request body. */
  body?: HttpBody;
}

export const ProcessGitHubEnterpriseWebhookRequest: Schema.Schema<ProcessGitHubEnterpriseWebhookRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(HttpBody),
  }).annotate({ identifier: "ProcessGitHubEnterpriseWebhookRequest" });

export interface SecureSourceManagerInstanceConfig {
  /** Required. Immutable. Secure Source Manager instance resource, formatted as `projects/* /locations/* /instances/*` */
  instance?: string;
}

export const SecureSourceManagerInstanceConfig: Schema.Schema<SecureSourceManagerInstanceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instance: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecureSourceManagerInstanceConfig" });

export interface GitProxyConfig {
  /** Output only. The base URI for the HTTP proxy endpoint. Has the format `https://{generatedID}-c-h-{shortRegion}.developerconnect.dev` Populated only when enabled is set to true. This endpoint is used by other Google services that integrate with Developer Connect. */
  httpProxyBaseUri?: string;
  /** Optional. Setting this to true allows the git proxy to be used for performing git operations on the repositories linked in the connection. */
  enabled?: boolean;
}

export const GitProxyConfig: Schema.Schema<GitProxyConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    httpProxyBaseUri: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GitProxyConfig" });

export interface ListUsersResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** The list of Users */
  users?: ReadonlyArray<User>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListUsersResponse: Schema.Schema<ListUsersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    users: Schema.optional(Schema.Array(User)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListUsersResponse" });

export interface FetchGitRefsResponse {
  /** Name of the refs fetched. */
  refNames?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const FetchGitRefsResponse: Schema.Schema<FetchGitRefsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    refNames: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "FetchGitRefsResponse" });

export interface UserRepository {
  /** Output only. The user friendly repo name (e.g., myuser/myrepo) */
  displayName?: string;
  /** Output only. The git clone URL of the repo. For example: https://github.com/myuser/myrepo.git */
  cloneUri?: string;
  /** Output only. The Git proxy URL for this repo. For example: https://us-west1-git.developerconnect.dev/a/my-proj/my-ac/myuser/myrepo.git. Populated only when `proxy_config.enabled` is set to `true` in the Account Connector. This URL is used by other Google services that integrate with Developer Connect. */
  gitProxyUri?: string;
}

export const UserRepository: Schema.Schema<UserRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    cloneUri: Schema.optional(Schema.String),
    gitProxyUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserRepository" });

export interface ServiceDirectoryConfig {
  /** Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. */
  service?: string;
}

export const ServiceDirectoryConfig: Schema.Schema<ServiceDirectoryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceDirectoryConfig" });

export interface GitHubEnterpriseConfig {
  /** Output only. The URI to navigate to in order to manage the installation associated with this GitHubEnterpriseConfig. */
  installationUri?: string;
  /** Optional. SecretManager resource containing the private key of the GitHub App, formatted as `projects/* /secrets/* /versions/*` or `projects/* /locations/* /secrets/* /versions/*` (if regional secrets are supported in that location). */
  privateKeySecretVersion?: string;
  /** Output only. GitHub Enterprise version installed at the host_uri. */
  serverVersion?: string;
  /** Optional. Immutable. GitHub Enterprise organization in which the GitHub App is created. */
  organization?: string;
  /** Required. The URI of the GitHub Enterprise host this connection is for. */
  hostUri?: string;
  /** Optional. Configuration for using Service Directory to privately connect to a GitHub Enterprise server. This should only be set if the GitHub Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the GitHub Enterprise server will be made over the public internet. */
  serviceDirectoryConfig?: ServiceDirectoryConfig;
  /** Output only. The URL-friendly name of the GitHub App. */
  appSlug?: string;
  /** Optional. ID of the GitHub App created from the manifest. */
  appId?: string;
  /** Optional. SecretManager resource containing the webhook secret of the GitHub App, formatted as `projects/* /secrets/* /versions/*` or `projects/* /locations/* /secrets/* /versions/*` (if regional secrets are supported in that location). */
  webhookSecretSecretVersion?: string;
  /** Optional. SSL certificate to use for requests to GitHub Enterprise. */
  sslCaCertificate?: string;
  /** Optional. ID of the installation of the GitHub App. */
  appInstallationId?: string;
}

export const GitHubEnterpriseConfig: Schema.Schema<GitHubEnterpriseConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    installationUri: Schema.optional(Schema.String),
    privateKeySecretVersion: Schema.optional(Schema.String),
    serverVersion: Schema.optional(Schema.String),
    organization: Schema.optional(Schema.String),
    hostUri: Schema.optional(Schema.String),
    serviceDirectoryConfig: Schema.optional(ServiceDirectoryConfig),
    appSlug: Schema.optional(Schema.String),
    appId: Schema.optional(Schema.String),
    webhookSecretSecretVersion: Schema.optional(Schema.String),
    sslCaCertificate: Schema.optional(Schema.String),
    appInstallationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GitHubEnterpriseConfig" });

export interface BitbucketDataCenterConfig {
  /** Required. An http access token with the minimum `Repository read` access. It's recommended to use a system account to generate the credentials. */
  readAuthorizerCredential?: UserCredential;
  /** Required. The URI of the Bitbucket Data Center host this connection is for. */
  hostUri?: string;
  /** Optional. Configuration for using Service Directory to privately connect to a Bitbucket Data Center instance. This should only be set if the Bitbucket Data Center is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the Bitbucket Data Center will be made over the public internet. */
  serviceDirectoryConfig?: ServiceDirectoryConfig;
  /** Optional. SSL certificate authority to trust when making requests to Bitbucket Data Center. */
  sslCaCertificate?: string;
  /** Required. An http access token with the minimum `Repository admin` scope access. This is needed to create webhooks. It's recommended to use a system account to generate these credentials. */
  authorizerCredential?: UserCredential;
  /** Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events, formatted as `projects/* /secrets/* /versions/*` or `projects/* /locations/* /secrets/* /versions/*` (if regional secrets are supported in that location). This is used to validate webhooks. */
  webhookSecretSecretVersion?: string;
  /** Output only. Version of the Bitbucket Data Center server running on the `host_uri`. */
  serverVersion?: string;
}

export const BitbucketDataCenterConfig: Schema.Schema<BitbucketDataCenterConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    readAuthorizerCredential: Schema.optional(UserCredential),
    hostUri: Schema.optional(Schema.String),
    serviceDirectoryConfig: Schema.optional(ServiceDirectoryConfig),
    sslCaCertificate: Schema.optional(Schema.String),
    authorizerCredential: Schema.optional(UserCredential),
    webhookSecretSecretVersion: Schema.optional(Schema.String),
    serverVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "BitbucketDataCenterConfig" });

export interface BasicAuthentication {
  /** The password SecretManager secret version to authenticate as. */
  passwordSecretVersion?: string;
  /** Required. The username to authenticate as. */
  username?: string;
}

export const BasicAuthentication: Schema.Schema<BasicAuthentication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    passwordSecretVersion: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
  }).annotate({ identifier: "BasicAuthentication" });

export interface BearerTokenAuthentication {
  /** Optional. The token SecretManager secret version to authenticate as. */
  tokenSecretVersion?: string;
}

export const BearerTokenAuthentication: Schema.Schema<BearerTokenAuthentication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tokenSecretVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "BearerTokenAuthentication" });

export interface GenericHTTPEndpointConfig {
  /** Required. Immutable. The service provider's https endpoint. */
  hostUri?: string;
  /** Optional. Configuration for using Service Directory to privately connect to a HTTP service provider. This should only be set if the Http service provider is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the HTTP service provider will be made over the public internet. */
  serviceDirectoryConfig?: ServiceDirectoryConfig;
  /** Optional. The SSL certificate to use for requests to the HTTP service provider. */
  sslCaCertificate?: string;
  /** Optional. Basic authentication with username and password. */
  basicAuthentication?: BasicAuthentication;
  /** Optional. Bearer token authentication with a token. */
  bearerTokenAuthentication?: BearerTokenAuthentication;
}

export const GenericHTTPEndpointConfig: Schema.Schema<GenericHTTPEndpointConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostUri: Schema.optional(Schema.String),
    serviceDirectoryConfig: Schema.optional(ServiceDirectoryConfig),
    sslCaCertificate: Schema.optional(Schema.String),
    basicAuthentication: Schema.optional(BasicAuthentication),
    bearerTokenAuthentication: Schema.optional(BearerTokenAuthentication),
  }).annotate({ identifier: "GenericHTTPEndpointConfig" });

export interface GitLabEnterpriseConfig {
  /** Required. A GitLab personal access token with the minimum `api` scope access and a minimum role of `maintainer`. The GitLab Projects visible to this Personal Access Token will control which Projects Developer Connect has access to. */
  authorizerCredential?: UserCredential;
  /** Required. The URI of the GitLab Enterprise host this connection is for. */
  hostUri?: string;
  /** Optional. Configuration for using Service Directory to privately connect to a GitLab Enterprise instance. This should only be set if the GitLab Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the GitLab Enterprise server will be made over the public internet. */
  serviceDirectoryConfig?: ServiceDirectoryConfig;
  /** Optional. SSL Certificate Authority certificate to use for requests to GitLab Enterprise instance. */
  sslCaCertificate?: string;
  /** Required. A GitLab personal access token with the minimum `read_api` scope access and a minimum role of `reporter`. The GitLab Projects visible to this Personal Access Token will control which Projects Developer Connect has access to. */
  readAuthorizerCredential?: UserCredential;
  /** Output only. Version of the GitLab Enterprise server running on the `host_uri`. */
  serverVersion?: string;
  /** Required. Immutable. SecretManager resource containing the webhook secret of a GitLab project, formatted as `projects/* /secrets/* /versions/*` or `projects/* /locations/* /secrets/* /versions/*` (if regional secrets are supported in that location). This is used to validate webhooks. */
  webhookSecretSecretVersion?: string;
}

export const GitLabEnterpriseConfig: Schema.Schema<GitLabEnterpriseConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authorizerCredential: Schema.optional(UserCredential),
    hostUri: Schema.optional(Schema.String),
    serviceDirectoryConfig: Schema.optional(ServiceDirectoryConfig),
    sslCaCertificate: Schema.optional(Schema.String),
    readAuthorizerCredential: Schema.optional(UserCredential),
    serverVersion: Schema.optional(Schema.String),
    webhookSecretSecretVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "GitLabEnterpriseConfig" });

export interface Connection {
  /** Configuration for connections to github.com. */
  githubConfig?: GitHubConfig;
  /** Optional. If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled. */
  disabled?: boolean;
  /** Output only. A system-assigned unique identifier for the Connection. */
  uid?: string;
  /** Configuration for connections to gitlab.com. */
  gitlabConfig?: GitLabConfig;
  /** Output only. Set to true when the connection is being set up or updated in the background. */
  reconciling?: boolean;
  /** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Configuration for connections to an instance of GitHub Enterprise. */
  githubEnterpriseConfig?: GitHubEnterpriseConfig;
  /** Optional. Labels as key value pairs */
  labels?: Record<string, string>;
  /** Configuration for connections to an instance of Secure Source Manager. */
  secureSourceManagerInstanceConfig?: SecureSourceManagerInstanceConfig;
  /** Output only. [Output only] Create timestamp */
  createTime?: string;
  /** Configuration for connections to an instance of Bitbucket Data Center. */
  bitbucketDataCenterConfig?: BitbucketDataCenterConfig;
  /** Optional. Configuration for connections to an HTTP service provider. */
  httpConfig?: GenericHTTPEndpointConfig;
  /** Configuration for connections to an instance of GitLab Enterprise. */
  gitlabEnterpriseConfig?: GitLabEnterpriseConfig;
  /** Output only. [Output only] Delete timestamp */
  deleteTime?: string;
  /** Identifier. The resource name of the connection, in the format `projects/{project}/locations/{location}/connections/{connection_id}`. */
  name?: string;
  /** Optional. Configuration for the git proxy feature. Enabling the git proxy allows clients to perform git operations on the repositories linked in the connection. [Learn more](https://docs.cloud.google.com/developer-connect/docs/configure-git-proxy). */
  gitProxyConfig?: GitProxyConfig;
  /** Optional. Allows clients to store small amounts of arbitrary data. */
  annotations?: Record<string, string>;
  /** Optional. The crypto key configuration. This field is used by the Customer-Managed Encryption Keys (CMEK) feature. */
  cryptoKeyConfig?: CryptoKeyConfig;
  /** Output only. Installation state of the Connection. */
  installationState?: InstallationState;
  /** Configuration for connections to an instance of Bitbucket Clouds. */
  bitbucketCloudConfig?: BitbucketCloudConfig;
  /** Output only. [Output only] Update timestamp */
  updateTime?: string;
}

export const Connection: Schema.Schema<Connection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    githubConfig: Schema.optional(GitHubConfig),
    disabled: Schema.optional(Schema.Boolean),
    uid: Schema.optional(Schema.String),
    gitlabConfig: Schema.optional(GitLabConfig),
    reconciling: Schema.optional(Schema.Boolean),
    etag: Schema.optional(Schema.String),
    githubEnterpriseConfig: Schema.optional(GitHubEnterpriseConfig),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    secureSourceManagerInstanceConfig: Schema.optional(
      SecureSourceManagerInstanceConfig,
    ),
    createTime: Schema.optional(Schema.String),
    bitbucketDataCenterConfig: Schema.optional(BitbucketDataCenterConfig),
    httpConfig: Schema.optional(GenericHTTPEndpointConfig),
    gitlabEnterpriseConfig: Schema.optional(GitLabEnterpriseConfig),
    deleteTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    gitProxyConfig: Schema.optional(GitProxyConfig),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    cryptoKeyConfig: Schema.optional(CryptoKeyConfig),
    installationState: Schema.optional(InstallationState),
    bitbucketCloudConfig: Schema.optional(BitbucketCloudConfig),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Connection" });

export interface ProcessBitbucketDataCenterWebhookRequest {
  /** Required. HTTP request body. */
  body?: HttpBody;
}

export const ProcessBitbucketDataCenterWebhookRequest: Schema.Schema<ProcessBitbucketDataCenterWebhookRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(HttpBody),
  }).annotate({ identifier: "ProcessBitbucketDataCenterWebhookRequest" });

export interface FetchReadWriteTokenRequest {}

export const FetchReadWriteTokenRequest: Schema.Schema<FetchReadWriteTokenRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "FetchReadWriteTokenRequest",
  });

export interface CustomOAuthConfig {
  /** Required. Immutable. The OAuth2 authorization server URL. */
  authUri?: string;
  /** Required. The type of the SCM provider. */
  scmProvider?:
    | "SCM_PROVIDER_UNKNOWN"
    | "GITHUB_ENTERPRISE"
    | "GITLAB_ENTERPRISE"
    | "BITBUCKET_DATA_CENTER"
    | (string & {});
  /** Required. The scopes to be requested during OAuth. */
  scopes?: ReadonlyArray<string>;
  /** Required. The client ID of the OAuth application. */
  clientId?: string;
  /** Required. Input only. The client secret of the OAuth application. It will be provided as plain text, but encrypted and stored in developer connect. As INPUT_ONLY field, it will not be included in the output. */
  clientSecret?: string;
  /** Optional. SSL certificate to use for requests to a private service. */
  sslCaCertificate?: string;
  /** Required. Immutable. The OAuth2 token request URL. */
  tokenUri?: string;
  /** Output only. SCM server version installed at the host URI. */
  serverVersion?: string;
  /** Optional. Configuration for using Service Directory to connect to a private service. */
  serviceDirectoryConfig?: ServiceDirectoryConfig;
  /** Optional. Disable PKCE for this OAuth config. PKCE is enabled by default. */
  pkceDisabled?: boolean;
  /** Required. The host URI of the OAuth application. */
  hostUri?: string;
}

export const CustomOAuthConfig: Schema.Schema<CustomOAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authUri: Schema.optional(Schema.String),
    scmProvider: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
    clientId: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Schema.String),
    sslCaCertificate: Schema.optional(Schema.String),
    tokenUri: Schema.optional(Schema.String),
    serverVersion: Schema.optional(Schema.String),
    serviceDirectoryConfig: Schema.optional(ServiceDirectoryConfig),
    pkceDisabled: Schema.optional(Schema.Boolean),
    hostUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomOAuthConfig" });

export interface FetchAccessTokenResponse {
  /** The scopes of the access token. */
  scopes?: ReadonlyArray<string>;
  /** The token content. */
  token?: string;
  /** Expiration timestamp. Can be empty if unknown or non-expiring. */
  expirationTime?: string;
  /** The error resulted from exchanging OAuth tokens from the service provider. */
  exchangeError?: ExchangeError;
}

export const FetchAccessTokenResponse: Schema.Schema<FetchAccessTokenResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scopes: Schema.optional(Schema.Array(Schema.String)),
    token: Schema.optional(Schema.String),
    expirationTime: Schema.optional(Schema.String),
    exchangeError: Schema.optional(ExchangeError),
  }).annotate({ identifier: "FetchAccessTokenResponse" });

export interface FinishOAuthResponse {
  /** The error resulted from exchanging OAuth tokens from the service provider. */
  exchangeError?: ExchangeError;
}

export const FinishOAuthResponse: Schema.Schema<FinishOAuthResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exchangeError: Schema.optional(ExchangeError),
  }).annotate({ identifier: "FinishOAuthResponse" });

export interface ProxyConfig {
  /** Output only. The base URI for the HTTP proxy endpoint. Has the format `https://{generatedID}-a-h-{shortRegion}.developerconnect.dev` Populated only when `enabled` is set to `true`. This endpoint is used by other Google services that integrate with Developer Connect. */
  httpProxyBaseUri?: string;
  /** Optional. Setting this to true allows the git and http proxies to perform actions on behalf of the user configured under the account connector. */
  enabled?: boolean;
}

export const ProxyConfig: Schema.Schema<ProxyConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    httpProxyBaseUri: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ProxyConfig" });

export interface AccountConnector {
  /** Output only. A system-assigned unique identifier for the Account Connector. */
  uid?: string;
  /** Custom OAuth config. */
  customOauthConfig?: CustomOAuthConfig;
  /** Output only. The timestamp when the accountConnector was created. */
  createTime?: string;
  /** Output only. Start OAuth flow by clicking on this URL. */
  oauthStartUri?: string;
  /** Output only. The timestamp when the accountConnector was updated. */
  updateTime?: string;
  /** Optional. Labels as key value pairs */
  labels?: Record<string, string>;
  /** Optional. Configuration for the http and git proxy features. */
  proxyConfig?: ProxyConfig;
  /** Optional. Provider OAuth config. */
  providerOauthConfig?: ProviderOAuthConfig;
  /** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Optional. Allows users to store small amounts of arbitrary data. */
  annotations?: Record<string, string>;
  /** Identifier. The resource name of the accountConnector, in the format `projects/{project}/locations/{location}/accountConnectors/{account_connector_id}`. */
  name?: string;
}

export const AccountConnector: Schema.Schema<AccountConnector> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uid: Schema.optional(Schema.String),
    customOauthConfig: Schema.optional(CustomOAuthConfig),
    createTime: Schema.optional(Schema.String),
    oauthStartUri: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    proxyConfig: Schema.optional(ProxyConfig),
    providerOauthConfig: Schema.optional(ProviderOAuthConfig),
    etag: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccountConnector" });

export interface ListConnectionsResponse {
  /** The list of Connection */
  connections?: ReadonlyArray<Connection>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListConnectionsResponse: Schema.Schema<ListConnectionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connections: Schema.optional(Schema.Array(Connection)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListConnectionsResponse" });

export interface OperationMetadata {
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    target: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    apiVersion: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface StartOAuthResponse {
  /** The client ID to the OAuth App of the service provider. */
  clientId?: string;
  /** The list of scopes requested by the application. */
  scopes?: ReadonlyArray<string>;
  /** Please refer to https://datatracker.ietf.org/doc/html/rfc7636#section-4.1 */
  codeChallenge?: string;
  /** The authorization server URL to the OAuth flow of the service provider. */
  authUri?: string;
  /** The ticket to be used for post processing the callback from the service provider. */
  ticket?: string;
  /** Please refer to https://datatracker.ietf.org/doc/html/rfc7636#section-4.2 */
  codeChallengeMethod?: string;
  /** The ID of the system provider. */
  systemProviderId?:
    | "SYSTEM_PROVIDER_UNSPECIFIED"
    | "GITHUB"
    | "GITLAB"
    | "GOOGLE"
    | "SENTRY"
    | "ROVO"
    | "NEW_RELIC"
    | "DATASTAX"
    | "DYNATRACE"
    | (string & {});
}

export const StartOAuthResponse: Schema.Schema<StartOAuthResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
    codeChallenge: Schema.optional(Schema.String),
    authUri: Schema.optional(Schema.String),
    ticket: Schema.optional(Schema.String),
    codeChallengeMethod: Schema.optional(Schema.String),
    systemProviderId: Schema.optional(Schema.String),
  }).annotate({ identifier: "StartOAuthResponse" });

export interface ProcessGitLabEnterpriseWebhookRequest {
  /** Required. HTTP request body. */
  body?: HttpBody;
}

export const ProcessGitLabEnterpriseWebhookRequest: Schema.Schema<ProcessGitLabEnterpriseWebhookRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(HttpBody),
  }).annotate({ identifier: "ProcessGitLabEnterpriseWebhookRequest" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface ListAccountConnectorsResponse {
  /** The list of AccountConnectors */
  accountConnectors?: ReadonlyArray<AccountConnector>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListAccountConnectorsResponse: Schema.Schema<ListAccountConnectorsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountConnectors: Schema.optional(Schema.Array(AccountConnector)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAccountConnectorsResponse" });

export interface FetchReadWriteTokenResponse {
  /** The token content. */
  token?: string;
  /** Expiration timestamp. Can be empty if unknown or non-expiring. */
  expirationTime?: string;
  /** The git_username to specify when making a git clone with the token. For example, for GitHub GitRepositoryLinks, this would be "x-access-token" */
  gitUsername?: string;
}

export const FetchReadWriteTokenResponse: Schema.Schema<FetchReadWriteTokenResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
    expirationTime: Schema.optional(Schema.String),
    gitUsername: Schema.optional(Schema.String),
  }).annotate({ identifier: "FetchReadWriteTokenResponse" });

export interface FetchUserRepositoriesResponse {
  /** The repositories that the user can access with this account connector. */
  userRepos?: ReadonlyArray<UserRepository>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const FetchUserRepositoriesResponse: Schema.Schema<FetchUserRepositoriesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userRepos: Schema.optional(Schema.Array(UserRepository)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "FetchUserRepositoriesResponse" });

export interface FetchAccessTokenRequest {}

export const FetchAccessTokenRequest: Schema.Schema<FetchAccessTokenRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "FetchAccessTokenRequest",
  });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(NotFound, [{ httpStatus: 404 }]);

export class Forbidden extends Schema.TaggedErrorClass<Forbidden>()(
  "Forbidden",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(Forbidden, [{ httpStatus: 403 }]);

export class BadRequest extends Schema.TaggedErrorClass<BadRequest>()(
  "BadRequest",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface ListProjectsLocationsRequest {
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRequest,
  output: ListProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = Location;
export const GetProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Location;

export type GetProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Gets information about a location. */
export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsInsightsConfigsRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsInsightsConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsInsightsConfigsRequest>;

export type GetProjectsLocationsInsightsConfigsResponse = InsightsConfig;
export const GetProjectsLocationsInsightsConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ InsightsConfig;

export type GetProjectsLocationsInsightsConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Insight. */
export const getProjectsLocationsInsightsConfigs: API.OperationMethod<
  GetProjectsLocationsInsightsConfigsRequest,
  GetProjectsLocationsInsightsConfigsResponse,
  GetProjectsLocationsInsightsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsInsightsConfigsRequest,
  output: GetProjectsLocationsInsightsConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsInsightsConfigsRequest {
  /** Identifier. The name of the InsightsConfig. Format: projects/{project}/locations/{location}/insightsConfigs/{insightsConfig} */
  name: string;
  /** Optional. If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to true, and the insightsConfig is not found a new insightsConfig will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input insightsConfig has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties). */
  allowMissing?: boolean;
  /** Request body */
  body?: InsightsConfig;
}

export const PatchProjectsLocationsInsightsConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    body: Schema.optional(InsightsConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsInsightsConfigsRequest>;

export type PatchProjectsLocationsInsightsConfigsResponse = Operation;
export const PatchProjectsLocationsInsightsConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsInsightsConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single InsightsConfig. */
export const patchProjectsLocationsInsightsConfigs: API.OperationMethod<
  PatchProjectsLocationsInsightsConfigsRequest,
  PatchProjectsLocationsInsightsConfigsResponse,
  PatchProjectsLocationsInsightsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsInsightsConfigsRequest,
  output: PatchProjectsLocationsInsightsConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsInsightsConfigsRequest {
  /** Required. ID of the requesting InsightsConfig. */
  insightsConfigId?: string;
  /** Required. Value for parent. */
  parent: string;
  /** Optional. If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
  /** Request body */
  body?: InsightsConfig;
}

export const CreateProjectsLocationsInsightsConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    insightsConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("insightsConfigId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(InsightsConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/insightsConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsInsightsConfigsRequest>;

export type CreateProjectsLocationsInsightsConfigsResponse = Operation;
export const CreateProjectsLocationsInsightsConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsInsightsConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new InsightsConfig in a given project and location. */
export const createProjectsLocationsInsightsConfigs: API.OperationMethod<
  CreateProjectsLocationsInsightsConfigsRequest,
  CreateProjectsLocationsInsightsConfigsResponse,
  CreateProjectsLocationsInsightsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsInsightsConfigsRequest,
  output: CreateProjectsLocationsInsightsConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsInsightsConfigsRequest {
  /** Optional. Filtering results. See https://google.aip.dev/160 for more details. Filter string, adhering to the rules in https://google.aip.dev/160. List only InsightsConfigs matching the filter. If filter is empty, all InsightsConfigs are listed. */
  filter?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Required. Parent value for ListInsightsConfigsRequest. */
  parent: string;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsInsightsConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/insightsConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsInsightsConfigsRequest>;

export type ListProjectsLocationsInsightsConfigsResponse =
  ListInsightsConfigsResponse;
export const ListProjectsLocationsInsightsConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListInsightsConfigsResponse;

export type ListProjectsLocationsInsightsConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists InsightsConfigs in a given project and location. */
export const listProjectsLocationsInsightsConfigs: API.PaginatedOperationMethod<
  ListProjectsLocationsInsightsConfigsRequest,
  ListProjectsLocationsInsightsConfigsResponse,
  ListProjectsLocationsInsightsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsInsightsConfigsRequest,
  output: ListProjectsLocationsInsightsConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsInsightsConfigsRequest {
  /** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Value for parent. */
  name: string;
  /** Optional. If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsInsightsConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsInsightsConfigsRequest>;

export type DeleteProjectsLocationsInsightsConfigsResponse = Operation;
export const DeleteProjectsLocationsInsightsConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsInsightsConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Insight. */
export const deleteProjectsLocationsInsightsConfigs: API.OperationMethod<
  DeleteProjectsLocationsInsightsConfigsRequest,
  DeleteProjectsLocationsInsightsConfigsResponse,
  DeleteProjectsLocationsInsightsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsInsightsConfigsRequest,
  output: DeleteProjectsLocationsInsightsConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsInsightsConfigsDeploymentEventsRequest {
  /** Required. The name of the deployment event to retrieve. Format: projects/{project}/locations/{location}/insightsConfigs/{insights_config}/deploymentEvents/{uuid} */
  name: string;
}

export const GetProjectsLocationsInsightsConfigsDeploymentEventsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsInsightsConfigsDeploymentEventsRequest>;

export type GetProjectsLocationsInsightsConfigsDeploymentEventsResponse =
  DeploymentEvent;
export const GetProjectsLocationsInsightsConfigsDeploymentEventsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DeploymentEvent;

export type GetProjectsLocationsInsightsConfigsDeploymentEventsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a single Deployment Event. */
export const getProjectsLocationsInsightsConfigsDeploymentEvents: API.OperationMethod<
  GetProjectsLocationsInsightsConfigsDeploymentEventsRequest,
  GetProjectsLocationsInsightsConfigsDeploymentEventsResponse,
  GetProjectsLocationsInsightsConfigsDeploymentEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsInsightsConfigsDeploymentEventsRequest,
  output: GetProjectsLocationsInsightsConfigsDeploymentEventsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsInsightsConfigsDeploymentEventsRequest {
  /** Optional. The maximum number of deployment events to return. The service may return fewer than this value. If unspecified, at most 50 deployment events will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. Filter expression that matches a subset of the DeploymentEvents. https://google.aip.dev/160. */
  filter?: string;
  /** Optional. A page token, received from a previous `ListDeploymentEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDeploymentEvents` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The parent insights config that owns this collection of deployment events. Format: projects/{project}/locations/{location}/insightsConfigs/{insights_config} */
  parent: string;
}

export const ListProjectsLocationsInsightsConfigsDeploymentEventsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/deploymentEvents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsInsightsConfigsDeploymentEventsRequest>;

export type ListProjectsLocationsInsightsConfigsDeploymentEventsResponse =
  ListDeploymentEventsResponse;
export const ListProjectsLocationsInsightsConfigsDeploymentEventsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDeploymentEventsResponse;

export type ListProjectsLocationsInsightsConfigsDeploymentEventsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Deployment Events in a given insights config. */
export const listProjectsLocationsInsightsConfigsDeploymentEvents: API.PaginatedOperationMethod<
  ListProjectsLocationsInsightsConfigsDeploymentEventsRequest,
  ListProjectsLocationsInsightsConfigsDeploymentEventsResponse,
  ListProjectsLocationsInsightsConfigsDeploymentEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsInsightsConfigsDeploymentEventsRequest,
  output: ListProjectsLocationsInsightsConfigsDeploymentEventsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = Empty;
export const DeleteProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteProjectsLocationsOperations: API.OperationMethod<
  DeleteProjectsLocationsOperationsRequest,
  DeleteProjectsLocationsOperationsResponse,
  DeleteProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page size. */
  pageSize?: number;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list filter. */
  filter?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsOperationsRequest,
  ListProjectsLocationsOperationsResponse,
  ListProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = Operation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsOperations: API.OperationMethod<
  GetProjectsLocationsOperationsRequest,
  GetProjectsLocationsOperationsResponse,
  GetProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = Empty;
export const CancelProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelProjectsLocationsOperations: API.OperationMethod<
  CancelProjectsLocationsOperationsRequest,
  CancelProjectsLocationsOperationsResponse,
  CancelProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsConnectionsRequest {
  /** Optional. The current etag of the Connection. If an etag is provided and does not match the current etag of the Connection, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Name of the resource */
  name: string;
  /** Optional. If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsConnectionsRequest>;

export type DeleteProjectsLocationsConnectionsResponse = Operation;
export const DeleteProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Connection. */
export const deleteProjectsLocationsConnections: API.OperationMethod<
  DeleteProjectsLocationsConnectionsRequest,
  DeleteProjectsLocationsConnectionsResponse,
  DeleteProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsConnectionsRequest,
  output: DeleteProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsConnectionsRequest {
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Filtering results */
  filter?: string;
  /** Optional. Hint for how to order the results */
  orderBy?: string;
  /** Required. Parent value for ListConnectionsRequest */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/connections" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConnectionsRequest>;

export type ListProjectsLocationsConnectionsResponse = ListConnectionsResponse;
export const ListProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListConnectionsResponse;

export type ListProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Connections in a given project and location. */
export const listProjectsLocationsConnections: API.PaginatedOperationMethod<
  ListProjectsLocationsConnectionsRequest,
  ListProjectsLocationsConnectionsResponse,
  ListProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConnectionsRequest,
  output: ListProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface FetchGitHubInstallationsProjectsLocationsConnectionsRequest {
  /** Required. The resource name of the connection in the format `projects/* /locations/* /connections/*`. */
  connection: string;
}

export const FetchGitHubInstallationsProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connection: Schema.String.pipe(T.HttpPath("connection")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+connection}:fetchGitHubInstallations",
    }),
    svc,
  ) as unknown as Schema.Schema<FetchGitHubInstallationsProjectsLocationsConnectionsRequest>;

export type FetchGitHubInstallationsProjectsLocationsConnectionsResponse =
  FetchGitHubInstallationsResponse;
export const FetchGitHubInstallationsProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchGitHubInstallationsResponse;

export type FetchGitHubInstallationsProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** FetchGitHubInstallations returns the list of GitHub Installations that are available to be added to a Connection. For github.com, only installations accessible to the authorizer token are returned. For GitHub Enterprise, all installations are returned. */
export const fetchGitHubInstallationsProjectsLocationsConnections: API.OperationMethod<
  FetchGitHubInstallationsProjectsLocationsConnectionsRequest,
  FetchGitHubInstallationsProjectsLocationsConnectionsResponse,
  FetchGitHubInstallationsProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchGitHubInstallationsProjectsLocationsConnectionsRequest,
  output: FetchGitHubInstallationsProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface FetchLinkableGitRepositoriesProjectsLocationsConnectionsRequest {
  /** Optional. Page start. */
  pageToken?: string;
  /** Required. The name of the Connection. Format: `projects/* /locations/* /connections/*`. */
  connection: string;
  /** Optional. Number of results to return in the list. Defaults to 20. */
  pageSize?: number;
}

export const FetchLinkableGitRepositoriesProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    connection: Schema.String.pipe(T.HttpPath("connection")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+connection}:fetchLinkableGitRepositories",
    }),
    svc,
  ) as unknown as Schema.Schema<FetchLinkableGitRepositoriesProjectsLocationsConnectionsRequest>;

export type FetchLinkableGitRepositoriesProjectsLocationsConnectionsResponse =
  FetchLinkableGitRepositoriesResponse;
export const FetchLinkableGitRepositoriesProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchLinkableGitRepositoriesResponse;

export type FetchLinkableGitRepositoriesProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** FetchLinkableGitRepositories returns a list of git repositories from an SCM that are available to be added to a Connection. */
export const fetchLinkableGitRepositoriesProjectsLocationsConnections: API.PaginatedOperationMethod<
  FetchLinkableGitRepositoriesProjectsLocationsConnectionsRequest,
  FetchLinkableGitRepositoriesProjectsLocationsConnectionsResponse,
  FetchLinkableGitRepositoriesProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: FetchLinkableGitRepositoriesProjectsLocationsConnectionsRequest,
  output: FetchLinkableGitRepositoriesProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsConnectionsRequest {
  /** Required. Value for parent. */
  parent: string;
  /** Optional. If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
  /** Required. Id of the requesting object If auto-generating Id server-side, remove this field and connection_id from the method_signature of Create RPC */
  connectionId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Connection;
}

export const CreateProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    connectionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("connectionId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Connection).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/connections", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConnectionsRequest>;

export type CreateProjectsLocationsConnectionsResponse = Operation;
export const CreateProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Connection in a given project and location. */
export const createProjectsLocationsConnections: API.OperationMethod<
  CreateProjectsLocationsConnectionsRequest,
  CreateProjectsLocationsConnectionsResponse,
  CreateProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConnectionsRequest,
  output: CreateProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsConnectionsRequest {
  /** Required. Name of the resource */
  name: string;
}

export const GetProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConnectionsRequest>;

export type GetProjectsLocationsConnectionsResponse = Connection;
export const GetProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Connection;

export type GetProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Connection. */
export const getProjectsLocationsConnections: API.OperationMethod<
  GetProjectsLocationsConnectionsRequest,
  GetProjectsLocationsConnectionsResponse,
  GetProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConnectionsRequest,
  output: GetProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsConnectionsRequest {
  /** Required. Field mask is used to specify the fields to be overwritten in the Connection resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Identifier. The resource name of the connection, in the format `projects/{project}/locations/{location}/connections/{connection_id}`. */
  name: string;
  /** Optional. If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
  /** Optional. If set to true, and the connection is not found a new connection will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input connection has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties). */
  allowMissing?: boolean;
  /** Request body */
  body?: Connection;
}

export const PatchProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    body: Schema.optional(Connection).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsConnectionsRequest>;

export type PatchProjectsLocationsConnectionsResponse = Operation;
export const PatchProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single Connection. */
export const patchProjectsLocationsConnections: API.OperationMethod<
  PatchProjectsLocationsConnectionsRequest,
  PatchProjectsLocationsConnectionsResponse,
  PatchProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsConnectionsRequest,
  output: PatchProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ProcessGitHubEnterpriseWebhookProjectsLocationsConnectionsRequest {
  /** Required. Project and location where the webhook will be received. Format: `projects/* /locations/*`. */
  parent: string;
  /** Request body */
  body?: ProcessGitHubEnterpriseWebhookRequest;
}

export const ProcessGitHubEnterpriseWebhookProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ProcessGitHubEnterpriseWebhookRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/connections:processGitHubEnterpriseWebhook",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ProcessGitHubEnterpriseWebhookProjectsLocationsConnectionsRequest>;

export type ProcessGitHubEnterpriseWebhookProjectsLocationsConnectionsResponse =
  Empty;
export const ProcessGitHubEnterpriseWebhookProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type ProcessGitHubEnterpriseWebhookProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** ProcessGitHubEnterpriseWebhook is called by the external GitHub Enterprise instances for notifying events. */
export const processGitHubEnterpriseWebhookProjectsLocationsConnections: API.OperationMethod<
  ProcessGitHubEnterpriseWebhookProjectsLocationsConnectionsRequest,
  ProcessGitHubEnterpriseWebhookProjectsLocationsConnectionsResponse,
  ProcessGitHubEnterpriseWebhookProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ProcessGitHubEnterpriseWebhookProjectsLocationsConnectionsRequest,
  output: ProcessGitHubEnterpriseWebhookProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FetchGitRefsProjectsLocationsConnectionsGitRepositoryLinksRequest {
  /** Optional. Number of results to return in the list. Default to 20. */
  pageSize?: number;
  /** Required. The resource name of GitRepositoryLink in the format `projects/* /locations/* /connections/* /gitRepositoryLinks/*`. */
  gitRepositoryLink: string;
  /** Optional. Page start. */
  pageToken?: string;
  /** Required. Type of refs to fetch. */
  refType?: "REF_TYPE_UNSPECIFIED" | "TAG" | "BRANCH" | (string & {});
}

export const FetchGitRefsProjectsLocationsConnectionsGitRepositoryLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    gitRepositoryLink: Schema.String.pipe(T.HttpPath("gitRepositoryLink")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    refType: Schema.optional(Schema.String).pipe(T.HttpQuery("refType")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+gitRepositoryLink}:fetchGitRefs" }),
    svc,
  ) as unknown as Schema.Schema<FetchGitRefsProjectsLocationsConnectionsGitRepositoryLinksRequest>;

export type FetchGitRefsProjectsLocationsConnectionsGitRepositoryLinksResponse =
  FetchGitRefsResponse;
export const FetchGitRefsProjectsLocationsConnectionsGitRepositoryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchGitRefsResponse;

export type FetchGitRefsProjectsLocationsConnectionsGitRepositoryLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetch the list of branches or tags for a given repository. */
export const fetchGitRefsProjectsLocationsConnectionsGitRepositoryLinks: API.PaginatedOperationMethod<
  FetchGitRefsProjectsLocationsConnectionsGitRepositoryLinksRequest,
  FetchGitRefsProjectsLocationsConnectionsGitRepositoryLinksResponse,
  FetchGitRefsProjectsLocationsConnectionsGitRepositoryLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: FetchGitRefsProjectsLocationsConnectionsGitRepositoryLinksRequest,
  output: FetchGitRefsProjectsLocationsConnectionsGitRepositoryLinksResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsConnectionsGitRepositoryLinksRequest {
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. Parent value for ListGitRepositoryLinksRequest */
  parent: string;
  /** Optional. Hint for how to order the results */
  orderBy?: string;
  /** Optional. Filtering results */
  filter?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsConnectionsGitRepositoryLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/gitRepositoryLinks" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConnectionsGitRepositoryLinksRequest>;

export type ListProjectsLocationsConnectionsGitRepositoryLinksResponse =
  ListGitRepositoryLinksResponse;
export const ListProjectsLocationsConnectionsGitRepositoryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListGitRepositoryLinksResponse;

export type ListProjectsLocationsConnectionsGitRepositoryLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists GitRepositoryLinks in a given project, location, and connection. */
export const listProjectsLocationsConnectionsGitRepositoryLinks: API.PaginatedOperationMethod<
  ListProjectsLocationsConnectionsGitRepositoryLinksRequest,
  ListProjectsLocationsConnectionsGitRepositoryLinksResponse,
  ListProjectsLocationsConnectionsGitRepositoryLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConnectionsGitRepositoryLinksRequest,
  output: ListProjectsLocationsConnectionsGitRepositoryLinksResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsConnectionsGitRepositoryLinksRequest {
  /** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Required. Name of the resource */
  name: string;
  /** Optional. If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsConnectionsGitRepositoryLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsConnectionsGitRepositoryLinksRequest>;

export type DeleteProjectsLocationsConnectionsGitRepositoryLinksResponse =
  Operation;
export const DeleteProjectsLocationsConnectionsGitRepositoryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsConnectionsGitRepositoryLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single GitRepositoryLink. */
export const deleteProjectsLocationsConnectionsGitRepositoryLinks: API.OperationMethod<
  DeleteProjectsLocationsConnectionsGitRepositoryLinksRequest,
  DeleteProjectsLocationsConnectionsGitRepositoryLinksResponse,
  DeleteProjectsLocationsConnectionsGitRepositoryLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsConnectionsGitRepositoryLinksRequest,
  output: DeleteProjectsLocationsConnectionsGitRepositoryLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ProcessBitbucketDataCenterWebhookProjectsLocationsConnectionsGitRepositoryLinksRequest {
  /** Required. The GitRepositoryLink where the webhook will be received. Format: `projects/* /locations/* /connections/* /gitRepositoryLinks/*`. */
  name: string;
  /** Request body */
  body?: ProcessBitbucketDataCenterWebhookRequest;
}

export const ProcessBitbucketDataCenterWebhookProjectsLocationsConnectionsGitRepositoryLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ProcessBitbucketDataCenterWebhookRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:processBitbucketDataCenterWebhook",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ProcessBitbucketDataCenterWebhookProjectsLocationsConnectionsGitRepositoryLinksRequest>;

export type ProcessBitbucketDataCenterWebhookProjectsLocationsConnectionsGitRepositoryLinksResponse =
  Empty;
export const ProcessBitbucketDataCenterWebhookProjectsLocationsConnectionsGitRepositoryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type ProcessBitbucketDataCenterWebhookProjectsLocationsConnectionsGitRepositoryLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** ProcessBitbucketDataCenterWebhook is called by the external Bitbucket Data Center instances for notifying events. */
export const processBitbucketDataCenterWebhookProjectsLocationsConnectionsGitRepositoryLinks: API.OperationMethod<
  ProcessBitbucketDataCenterWebhookProjectsLocationsConnectionsGitRepositoryLinksRequest,
  ProcessBitbucketDataCenterWebhookProjectsLocationsConnectionsGitRepositoryLinksResponse,
  ProcessBitbucketDataCenterWebhookProjectsLocationsConnectionsGitRepositoryLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    ProcessBitbucketDataCenterWebhookProjectsLocationsConnectionsGitRepositoryLinksRequest,
  output:
    ProcessBitbucketDataCenterWebhookProjectsLocationsConnectionsGitRepositoryLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsConnectionsGitRepositoryLinksRequest {
  /** Required. Name of the resource */
  name: string;
}

export const GetProjectsLocationsConnectionsGitRepositoryLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConnectionsGitRepositoryLinksRequest>;

export type GetProjectsLocationsConnectionsGitRepositoryLinksResponse =
  GitRepositoryLink;
export const GetProjectsLocationsConnectionsGitRepositoryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GitRepositoryLink;

export type GetProjectsLocationsConnectionsGitRepositoryLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single GitRepositoryLink. */
export const getProjectsLocationsConnectionsGitRepositoryLinks: API.OperationMethod<
  GetProjectsLocationsConnectionsGitRepositoryLinksRequest,
  GetProjectsLocationsConnectionsGitRepositoryLinksResponse,
  GetProjectsLocationsConnectionsGitRepositoryLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConnectionsGitRepositoryLinksRequest,
  output: GetProjectsLocationsConnectionsGitRepositoryLinksResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsConnectionsGitRepositoryLinksRequest {
  /** Required. The ID to use for the repository, which will become the final component of the repository's resource name. This ID should be unique in the connection. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@. */
  gitRepositoryLinkId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Value for parent. */
  parent: string;
  /** Optional. If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
  /** Request body */
  body?: GitRepositoryLink;
}

export const CreateProjectsLocationsConnectionsGitRepositoryLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gitRepositoryLinkId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("gitRepositoryLinkId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GitRepositoryLink).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/gitRepositoryLinks",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConnectionsGitRepositoryLinksRequest>;

export type CreateProjectsLocationsConnectionsGitRepositoryLinksResponse =
  Operation;
export const CreateProjectsLocationsConnectionsGitRepositoryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsConnectionsGitRepositoryLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a GitRepositoryLink. Upon linking a Git Repository, Developer Connect will configure the Git Repository to send webhook events to Developer Connect. Connections that use Firebase GitHub Application will have events forwarded to the Firebase service. Connections that use Gemini Code Assist will have events forwarded to Gemini Code Assist service. All other Connections will have events forwarded to Cloud Build. */
export const createProjectsLocationsConnectionsGitRepositoryLinks: API.OperationMethod<
  CreateProjectsLocationsConnectionsGitRepositoryLinksRequest,
  CreateProjectsLocationsConnectionsGitRepositoryLinksResponse,
  CreateProjectsLocationsConnectionsGitRepositoryLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConnectionsGitRepositoryLinksRequest,
  output: CreateProjectsLocationsConnectionsGitRepositoryLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FetchReadWriteTokenProjectsLocationsConnectionsGitRepositoryLinksRequest {
  /** Required. The resource name of the gitRepositoryLink in the format `projects/* /locations/* /connections/* /gitRepositoryLinks/*`. */
  gitRepositoryLink: string;
  /** Request body */
  body?: FetchReadWriteTokenRequest;
}

export const FetchReadWriteTokenProjectsLocationsConnectionsGitRepositoryLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gitRepositoryLink: Schema.String.pipe(T.HttpPath("gitRepositoryLink")),
    body: Schema.optional(FetchReadWriteTokenRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+gitRepositoryLink}:fetchReadWriteToken",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<FetchReadWriteTokenProjectsLocationsConnectionsGitRepositoryLinksRequest>;

export type FetchReadWriteTokenProjectsLocationsConnectionsGitRepositoryLinksResponse =
  FetchReadWriteTokenResponse;
export const FetchReadWriteTokenProjectsLocationsConnectionsGitRepositoryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchReadWriteTokenResponse;

export type FetchReadWriteTokenProjectsLocationsConnectionsGitRepositoryLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Fetches read/write token of a given gitRepositoryLink. */
export const fetchReadWriteTokenProjectsLocationsConnectionsGitRepositoryLinks: API.OperationMethod<
  FetchReadWriteTokenProjectsLocationsConnectionsGitRepositoryLinksRequest,
  FetchReadWriteTokenProjectsLocationsConnectionsGitRepositoryLinksResponse,
  FetchReadWriteTokenProjectsLocationsConnectionsGitRepositoryLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    FetchReadWriteTokenProjectsLocationsConnectionsGitRepositoryLinksRequest,
  output:
    FetchReadWriteTokenProjectsLocationsConnectionsGitRepositoryLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ProcessBitbucketCloudWebhookProjectsLocationsConnectionsGitRepositoryLinksRequest {
  /** Required. The GitRepositoryLink where the webhook will be received. Format: `projects/* /locations/* /connections/* /gitRepositoryLinks/*`. */
  name: string;
  /** Request body */
  body?: ProcessBitbucketCloudWebhookRequest;
}

export const ProcessBitbucketCloudWebhookProjectsLocationsConnectionsGitRepositoryLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ProcessBitbucketCloudWebhookRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:processBitbucketCloudWebhook",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ProcessBitbucketCloudWebhookProjectsLocationsConnectionsGitRepositoryLinksRequest>;

export type ProcessBitbucketCloudWebhookProjectsLocationsConnectionsGitRepositoryLinksResponse =
  Empty;
export const ProcessBitbucketCloudWebhookProjectsLocationsConnectionsGitRepositoryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type ProcessBitbucketCloudWebhookProjectsLocationsConnectionsGitRepositoryLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** ProcessBitbucketCloudWebhook is called by the external Bitbucket Cloud instances for notifying events. */
export const processBitbucketCloudWebhookProjectsLocationsConnectionsGitRepositoryLinks: API.OperationMethod<
  ProcessBitbucketCloudWebhookProjectsLocationsConnectionsGitRepositoryLinksRequest,
  ProcessBitbucketCloudWebhookProjectsLocationsConnectionsGitRepositoryLinksResponse,
  ProcessBitbucketCloudWebhookProjectsLocationsConnectionsGitRepositoryLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    ProcessBitbucketCloudWebhookProjectsLocationsConnectionsGitRepositoryLinksRequest,
  output:
    ProcessBitbucketCloudWebhookProjectsLocationsConnectionsGitRepositoryLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FetchReadTokenProjectsLocationsConnectionsGitRepositoryLinksRequest {
  /** Required. The resource name of the gitRepositoryLink in the format `projects/* /locations/* /connections/* /gitRepositoryLinks/*`. */
  gitRepositoryLink: string;
  /** Request body */
  body?: FetchReadTokenRequest;
}

export const FetchReadTokenProjectsLocationsConnectionsGitRepositoryLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gitRepositoryLink: Schema.String.pipe(T.HttpPath("gitRepositoryLink")),
    body: Schema.optional(FetchReadTokenRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+gitRepositoryLink}:fetchReadToken",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<FetchReadTokenProjectsLocationsConnectionsGitRepositoryLinksRequest>;

export type FetchReadTokenProjectsLocationsConnectionsGitRepositoryLinksResponse =
  FetchReadTokenResponse;
export const FetchReadTokenProjectsLocationsConnectionsGitRepositoryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchReadTokenResponse;

export type FetchReadTokenProjectsLocationsConnectionsGitRepositoryLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Fetches read token of a given gitRepositoryLink. */
export const fetchReadTokenProjectsLocationsConnectionsGitRepositoryLinks: API.OperationMethod<
  FetchReadTokenProjectsLocationsConnectionsGitRepositoryLinksRequest,
  FetchReadTokenProjectsLocationsConnectionsGitRepositoryLinksResponse,
  FetchReadTokenProjectsLocationsConnectionsGitRepositoryLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchReadTokenProjectsLocationsConnectionsGitRepositoryLinksRequest,
  output: FetchReadTokenProjectsLocationsConnectionsGitRepositoryLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ProcessGitLabEnterpriseWebhookProjectsLocationsConnectionsGitRepositoryLinksRequest {
  /** Required. The GitRepositoryLink resource where the webhook will be received. Format: `projects/* /locations/* /connections/* /gitRepositoryLinks/*`. */
  name: string;
  /** Request body */
  body?: ProcessGitLabEnterpriseWebhookRequest;
}

export const ProcessGitLabEnterpriseWebhookProjectsLocationsConnectionsGitRepositoryLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ProcessGitLabEnterpriseWebhookRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:processGitLabEnterpriseWebhook",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ProcessGitLabEnterpriseWebhookProjectsLocationsConnectionsGitRepositoryLinksRequest>;

export type ProcessGitLabEnterpriseWebhookProjectsLocationsConnectionsGitRepositoryLinksResponse =
  Empty;
export const ProcessGitLabEnterpriseWebhookProjectsLocationsConnectionsGitRepositoryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type ProcessGitLabEnterpriseWebhookProjectsLocationsConnectionsGitRepositoryLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** ProcessGitLabEnterpriseWebhook is called by the external GitLab Enterprise instances for notifying events. */
export const processGitLabEnterpriseWebhookProjectsLocationsConnectionsGitRepositoryLinks: API.OperationMethod<
  ProcessGitLabEnterpriseWebhookProjectsLocationsConnectionsGitRepositoryLinksRequest,
  ProcessGitLabEnterpriseWebhookProjectsLocationsConnectionsGitRepositoryLinksResponse,
  ProcessGitLabEnterpriseWebhookProjectsLocationsConnectionsGitRepositoryLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    ProcessGitLabEnterpriseWebhookProjectsLocationsConnectionsGitRepositoryLinksRequest,
  output:
    ProcessGitLabEnterpriseWebhookProjectsLocationsConnectionsGitRepositoryLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ProcessGitLabWebhookProjectsLocationsConnectionsGitRepositoryLinksRequest {
  /** Required. The GitRepositoryLink resource where the webhook will be received. Format: `projects/* /locations/* /connections/* /gitRepositoryLinks/*`. */
  name: string;
  /** Request body */
  body?: ProcessGitLabWebhookRequest;
}

export const ProcessGitLabWebhookProjectsLocationsConnectionsGitRepositoryLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ProcessGitLabWebhookRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:processGitLabWebhook",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ProcessGitLabWebhookProjectsLocationsConnectionsGitRepositoryLinksRequest>;

export type ProcessGitLabWebhookProjectsLocationsConnectionsGitRepositoryLinksResponse =
  Empty;
export const ProcessGitLabWebhookProjectsLocationsConnectionsGitRepositoryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type ProcessGitLabWebhookProjectsLocationsConnectionsGitRepositoryLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** ProcessGitLabWebhook is called by the GitLab.com for notifying events. */
export const processGitLabWebhookProjectsLocationsConnectionsGitRepositoryLinks: API.OperationMethod<
  ProcessGitLabWebhookProjectsLocationsConnectionsGitRepositoryLinksRequest,
  ProcessGitLabWebhookProjectsLocationsConnectionsGitRepositoryLinksResponse,
  ProcessGitLabWebhookProjectsLocationsConnectionsGitRepositoryLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    ProcessGitLabWebhookProjectsLocationsConnectionsGitRepositoryLinksRequest,
  output:
    ProcessGitLabWebhookProjectsLocationsConnectionsGitRepositoryLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAccountConnectorsRequest {
  /** Required. The ID to use for the AccountConnector, which will become the final component of the AccountConnector's resource name. Its format should adhere to https://google.aip.dev/122#resource-id-segments Names must be unique per-project per-location. */
  accountConnectorId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Location resource name as the account_connector’s parent. */
  parent: string;
  /** Optional. If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
  /** Request body */
  body?: AccountConnector;
}

export const CreateProjectsLocationsAccountConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountConnectorId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("accountConnectorId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(AccountConnector).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/accountConnectors",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAccountConnectorsRequest>;

export type CreateProjectsLocationsAccountConnectorsResponse = Operation;
export const CreateProjectsLocationsAccountConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsAccountConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new AccountConnector in a given project and location. */
export const createProjectsLocationsAccountConnectors: API.OperationMethod<
  CreateProjectsLocationsAccountConnectorsRequest,
  CreateProjectsLocationsAccountConnectorsResponse,
  CreateProjectsLocationsAccountConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAccountConnectorsRequest,
  output: CreateProjectsLocationsAccountConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAccountConnectorsRequest {
  /** Required. Name of the resource */
  name: string;
}

export const GetProjectsLocationsAccountConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAccountConnectorsRequest>;

export type GetProjectsLocationsAccountConnectorsResponse = AccountConnector;
export const GetProjectsLocationsAccountConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountConnector;

export type GetProjectsLocationsAccountConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single AccountConnector. */
export const getProjectsLocationsAccountConnectors: API.OperationMethod<
  GetProjectsLocationsAccountConnectorsRequest,
  GetProjectsLocationsAccountConnectorsResponse,
  GetProjectsLocationsAccountConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAccountConnectorsRequest,
  output: GetProjectsLocationsAccountConnectorsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsAccountConnectorsRequest {
  /** Optional. If set to true, and the accountConnector is not found a new accountConnector will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input accountConnector has all the necessary */
  allowMissing?: boolean;
  /** Optional. The list of fields to be updated. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Identifier. The resource name of the accountConnector, in the format `projects/{project}/locations/{location}/accountConnectors/{account_connector_id}`. */
  name: string;
  /** Optional. If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
  /** Request body */
  body?: AccountConnector;
}

export const PatchProjectsLocationsAccountConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(AccountConnector).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAccountConnectorsRequest>;

export type PatchProjectsLocationsAccountConnectorsResponse = Operation;
export const PatchProjectsLocationsAccountConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsAccountConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single AccountConnector. */
export const patchProjectsLocationsAccountConnectors: API.OperationMethod<
  PatchProjectsLocationsAccountConnectorsRequest,
  PatchProjectsLocationsAccountConnectorsResponse,
  PatchProjectsLocationsAccountConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAccountConnectorsRequest,
  output: PatchProjectsLocationsAccountConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FetchUserRepositoriesProjectsLocationsAccountConnectorsRequest {
  /** Required. The name of the Account Connector resource in the format: `projects/* /locations/* /accountConnectors/*`. */
  accountConnector: string;
  /** Optional. Number of results to return in the list. Defaults to 20. */
  pageSize?: number;
  /** Optional. Page start. */
  pageToken?: string;
  /** Optional. The name of the repository. When specified, only the UserRepository with this name will be returned if the repository is accessible under this Account Connector for the calling user. */
  repository?: string;
}

export const FetchUserRepositoriesProjectsLocationsAccountConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountConnector: Schema.String.pipe(T.HttpPath("accountConnector")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    repository: Schema.optional(Schema.String).pipe(T.HttpQuery("repository")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+accountConnector}:fetchUserRepositories",
    }),
    svc,
  ) as unknown as Schema.Schema<FetchUserRepositoriesProjectsLocationsAccountConnectorsRequest>;

export type FetchUserRepositoriesProjectsLocationsAccountConnectorsResponse =
  FetchUserRepositoriesResponse;
export const FetchUserRepositoriesProjectsLocationsAccountConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchUserRepositoriesResponse;

export type FetchUserRepositoriesProjectsLocationsAccountConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** FetchUserRepositories returns a list of UserRepos that are available for an account connector resource. */
export const fetchUserRepositoriesProjectsLocationsAccountConnectors: API.PaginatedOperationMethod<
  FetchUserRepositoriesProjectsLocationsAccountConnectorsRequest,
  FetchUserRepositoriesProjectsLocationsAccountConnectorsResponse,
  FetchUserRepositoriesProjectsLocationsAccountConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: FetchUserRepositoriesProjectsLocationsAccountConnectorsRequest,
  output: FetchUserRepositoriesProjectsLocationsAccountConnectorsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAccountConnectorsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Name of the resource */
  name: string;
  /** Optional. If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
  /** Optional. The current etag of the AccountConnectorn. If an etag is provided and does not match the current etag of the AccountConnector, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
  /** Optional. If set to true, any Users from this AccountConnector will also be deleted. (Otherwise, the request will only work if the AccountConnector has no Users.) */
  force?: boolean;
}

export const DeleteProjectsLocationsAccountConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAccountConnectorsRequest>;

export type DeleteProjectsLocationsAccountConnectorsResponse = Operation;
export const DeleteProjectsLocationsAccountConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsAccountConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single AccountConnector. */
export const deleteProjectsLocationsAccountConnectors: API.OperationMethod<
  DeleteProjectsLocationsAccountConnectorsRequest,
  DeleteProjectsLocationsAccountConnectorsResponse,
  DeleteProjectsLocationsAccountConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAccountConnectorsRequest,
  output: DeleteProjectsLocationsAccountConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAccountConnectorsRequest {
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Filtering results */
  filter?: string;
  /** Optional. Hint for how to order the results */
  orderBy?: string;
  /** Required. Parent value for ListAccountConnectorsRequest */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsAccountConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/accountConnectors" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAccountConnectorsRequest>;

export type ListProjectsLocationsAccountConnectorsResponse =
  ListAccountConnectorsResponse;
export const ListProjectsLocationsAccountConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAccountConnectorsResponse;

export type ListProjectsLocationsAccountConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists AccountConnectors in a given project and location. */
export const listProjectsLocationsAccountConnectors: API.PaginatedOperationMethod<
  ListProjectsLocationsAccountConnectorsRequest,
  ListProjectsLocationsAccountConnectorsResponse,
  ListProjectsLocationsAccountConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAccountConnectorsRequest,
  output: ListProjectsLocationsAccountConnectorsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface FetchAccessTokenProjectsLocationsAccountConnectorsUsersRequest {
  /** Required. The resource name of the AccountConnector in the format `projects/* /locations/* /accountConnectors/*`. */
  accountConnector: string;
  /** Request body */
  body?: FetchAccessTokenRequest;
}

export const FetchAccessTokenProjectsLocationsAccountConnectorsUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountConnector: Schema.String.pipe(T.HttpPath("accountConnector")),
    body: Schema.optional(FetchAccessTokenRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+accountConnector}/users:fetchAccessToken",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<FetchAccessTokenProjectsLocationsAccountConnectorsUsersRequest>;

export type FetchAccessTokenProjectsLocationsAccountConnectorsUsersResponse =
  FetchAccessTokenResponse;
export const FetchAccessTokenProjectsLocationsAccountConnectorsUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchAccessTokenResponse;

export type FetchAccessTokenProjectsLocationsAccountConnectorsUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Fetches OAuth access token based on end user credentials. */
export const fetchAccessTokenProjectsLocationsAccountConnectorsUsers: API.OperationMethod<
  FetchAccessTokenProjectsLocationsAccountConnectorsUsersRequest,
  FetchAccessTokenProjectsLocationsAccountConnectorsUsersResponse,
  FetchAccessTokenProjectsLocationsAccountConnectorsUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchAccessTokenProjectsLocationsAccountConnectorsUsersRequest,
  output: FetchAccessTokenProjectsLocationsAccountConnectorsUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FinishOAuthFlowProjectsLocationsAccountConnectorsUsersRequest {
  /** Required. The code to be used for getting the token from SCM provider. */
  "oauthParams.code"?: string;
  /** Required. The resource name of the AccountConnector in the format `projects/* /locations/* /accountConnectors/*`. */
  accountConnector: string;
  /** Required. The ticket to be used for post processing the callback from SCM provider. */
  "oauthParams.ticket"?: string;
  /** Required. The scopes returned by Google OAuth flow. */
  "googleOauthParams.scopes"?: string[];
  /** Optional. The version info returned by Google OAuth flow. */
  "googleOauthParams.versionInfo"?: string;
  /** Required. The ticket to be used for post processing the callback from Google OAuth flow. */
  "googleOauthParams.ticket"?: string;
}

export const FinishOAuthFlowProjectsLocationsAccountConnectorsUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "oauthParams.code": Schema.optional(Schema.String).pipe(
      T.HttpQuery("oauthParams.code"),
    ),
    accountConnector: Schema.String.pipe(T.HttpPath("accountConnector")),
    "oauthParams.ticket": Schema.optional(Schema.String).pipe(
      T.HttpQuery("oauthParams.ticket"),
    ),
    "googleOauthParams.scopes": Schema.optional(
      Schema.Array(Schema.String),
    ).pipe(T.HttpQuery("googleOauthParams.scopes")),
    "googleOauthParams.versionInfo": Schema.optional(Schema.String).pipe(
      T.HttpQuery("googleOauthParams.versionInfo"),
    ),
    "googleOauthParams.ticket": Schema.optional(Schema.String).pipe(
      T.HttpQuery("googleOauthParams.ticket"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+accountConnector}/users:finishOAuthFlow",
    }),
    svc,
  ) as unknown as Schema.Schema<FinishOAuthFlowProjectsLocationsAccountConnectorsUsersRequest>;

export type FinishOAuthFlowProjectsLocationsAccountConnectorsUsersResponse =
  FinishOAuthResponse;
export const FinishOAuthFlowProjectsLocationsAccountConnectorsUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ FinishOAuthResponse;

export type FinishOAuthFlowProjectsLocationsAccountConnectorsUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Finishes OAuth flow for an account connector. */
export const finishOAuthFlowProjectsLocationsAccountConnectorsUsers: API.OperationMethod<
  FinishOAuthFlowProjectsLocationsAccountConnectorsUsersRequest,
  FinishOAuthFlowProjectsLocationsAccountConnectorsUsersResponse,
  FinishOAuthFlowProjectsLocationsAccountConnectorsUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FinishOAuthFlowProjectsLocationsAccountConnectorsUsersRequest,
  output: FinishOAuthFlowProjectsLocationsAccountConnectorsUsersResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsAccountConnectorsUsersRequest {
  /** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Name of the resource */
  name: string;
  /** Optional. If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsAccountConnectorsUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAccountConnectorsUsersRequest>;

export type DeleteProjectsLocationsAccountConnectorsUsersResponse = Operation;
export const DeleteProjectsLocationsAccountConnectorsUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsAccountConnectorsUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single User. */
export const deleteProjectsLocationsAccountConnectorsUsers: API.OperationMethod<
  DeleteProjectsLocationsAccountConnectorsUsersRequest,
  DeleteProjectsLocationsAccountConnectorsUsersResponse,
  DeleteProjectsLocationsAccountConnectorsUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAccountConnectorsUsersRequest,
  output: DeleteProjectsLocationsAccountConnectorsUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FetchSelfProjectsLocationsAccountConnectorsUsersRequest {
  /** Required. Name of the AccountConnector resource */
  name: string;
}

export const FetchSelfProjectsLocationsAccountConnectorsUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/users:fetchSelf" }),
    svc,
  ) as unknown as Schema.Schema<FetchSelfProjectsLocationsAccountConnectorsUsersRequest>;

export type FetchSelfProjectsLocationsAccountConnectorsUsersResponse = User;
export const FetchSelfProjectsLocationsAccountConnectorsUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ User;

export type FetchSelfProjectsLocationsAccountConnectorsUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetch the User based on the user credentials. */
export const fetchSelfProjectsLocationsAccountConnectorsUsers: API.OperationMethod<
  FetchSelfProjectsLocationsAccountConnectorsUsersRequest,
  FetchSelfProjectsLocationsAccountConnectorsUsersResponse,
  FetchSelfProjectsLocationsAccountConnectorsUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchSelfProjectsLocationsAccountConnectorsUsersRequest,
  output: FetchSelfProjectsLocationsAccountConnectorsUsersResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteSelfProjectsLocationsAccountConnectorsUsersRequest {
  /** Required. Name of the AccountConnector resource */
  name: string;
}

export const DeleteSelfProjectsLocationsAccountConnectorsUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}/users:deleteSelf" }),
    svc,
  ) as unknown as Schema.Schema<DeleteSelfProjectsLocationsAccountConnectorsUsersRequest>;

export type DeleteSelfProjectsLocationsAccountConnectorsUsersResponse =
  Operation;
export const DeleteSelfProjectsLocationsAccountConnectorsUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteSelfProjectsLocationsAccountConnectorsUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete the User based on the user credentials. */
export const deleteSelfProjectsLocationsAccountConnectorsUsers: API.OperationMethod<
  DeleteSelfProjectsLocationsAccountConnectorsUsersRequest,
  DeleteSelfProjectsLocationsAccountConnectorsUsersResponse,
  DeleteSelfProjectsLocationsAccountConnectorsUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteSelfProjectsLocationsAccountConnectorsUsersRequest,
  output: DeleteSelfProjectsLocationsAccountConnectorsUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StartOAuthFlowProjectsLocationsAccountConnectorsUsersRequest {
  /** Required. The resource name of the AccountConnector in the format `projects/* /locations/* /accountConnectors/*`. */
  accountConnector: string;
}

export const StartOAuthFlowProjectsLocationsAccountConnectorsUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountConnector: Schema.String.pipe(T.HttpPath("accountConnector")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+accountConnector}/users:startOAuthFlow",
    }),
    svc,
  ) as unknown as Schema.Schema<StartOAuthFlowProjectsLocationsAccountConnectorsUsersRequest>;

export type StartOAuthFlowProjectsLocationsAccountConnectorsUsersResponse =
  StartOAuthResponse;
export const StartOAuthFlowProjectsLocationsAccountConnectorsUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ StartOAuthResponse;

export type StartOAuthFlowProjectsLocationsAccountConnectorsUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Starts OAuth flow for an account connector. */
export const startOAuthFlowProjectsLocationsAccountConnectorsUsers: API.OperationMethod<
  StartOAuthFlowProjectsLocationsAccountConnectorsUsersRequest,
  StartOAuthFlowProjectsLocationsAccountConnectorsUsersResponse,
  StartOAuthFlowProjectsLocationsAccountConnectorsUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartOAuthFlowProjectsLocationsAccountConnectorsUsersRequest,
  output: StartOAuthFlowProjectsLocationsAccountConnectorsUsersResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAccountConnectorsUsersRequest {
  /** Required. Parent value for ListUsersRequest */
  parent: string;
  /** Optional. Hint for how to order the results */
  orderBy?: string;
  /** Optional. Filtering results */
  filter?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsAccountConnectorsUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/users" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAccountConnectorsUsersRequest>;

export type ListProjectsLocationsAccountConnectorsUsersResponse =
  ListUsersResponse;
export const ListProjectsLocationsAccountConnectorsUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListUsersResponse;

export type ListProjectsLocationsAccountConnectorsUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Users in a given project, location, and account_connector. */
export const listProjectsLocationsAccountConnectorsUsers: API.PaginatedOperationMethod<
  ListProjectsLocationsAccountConnectorsUsersRequest,
  ListProjectsLocationsAccountConnectorsUsersResponse,
  ListProjectsLocationsAccountConnectorsUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAccountConnectorsUsersRequest,
  output: ListProjectsLocationsAccountConnectorsUsersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
