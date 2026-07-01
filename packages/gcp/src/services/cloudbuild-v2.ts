// ==========================================================================
// Cloud Build API (cloudbuild v2)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "@distilled.cloud/core/schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "cloudbuild",
  version: "v2",
  rootUrl: "https://cloudbuild.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Location {
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
}

export const Location: Schema.Codec<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Location" });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse: Schema.Codec<ListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(Location)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Codec<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
}

export const Operation: Schema.Codec<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Codec<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface OAuthCredential {
  /** Optional. A SecretManager resource containing the OAuth token that authorizes the Cloud Build connection. Format: `projects/* /secrets/* /versions/*`. */
  oauthTokenSecretVersion?: string;
  /** Output only. The username associated to this token. */
  username?: string;
}

export const OAuthCredential: Schema.Codec<OAuthCredential> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oauthTokenSecretVersion: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
  }).annotate({ identifier: "OAuthCredential" });

export interface GitHubConfig {
  /** Optional. OAuth credential of the account that authorized the Cloud Build GitHub App. It is recommended to use a robot account instead of a human user account. The OAuth token must be tied to the Cloud Build GitHub App. */
  authorizerCredential?: OAuthCredential;
  /** Optional. GitHub App installation id. */
  appInstallationId?: string;
}

export const GitHubConfig: Schema.Codec<GitHubConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authorizerCredential: Schema.optional(OAuthCredential),
    appInstallationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GitHubConfig" });

export interface GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig {
  /** Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. */
  service?: string;
}

export const GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig: Schema.Codec<GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig",
  });

export interface GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfig {
  /** Required. The URI of the GitHub Enterprise host this connection is for. */
  hostUri?: string;
  /** Required. API Key used for authentication of webhook events. */
  apiKey?: string;
  /** Optional. Id of the GitHub App created from the manifest. */
  appId?: string;
  /** Optional. The URL-friendly name of the GitHub App. */
  appSlug?: string;
  /** Optional. SecretManager resource containing the private key of the GitHub App, formatted as `projects/* /secrets/* /versions/*`. */
  privateKeySecretVersion?: string;
  /** Optional. SecretManager resource containing the webhook secret of the GitHub App, formatted as `projects/* /secrets/* /versions/*`. */
  webhookSecretSecretVersion?: string;
  /** Optional. ID of the installation of the GitHub App. */
  appInstallationId?: string;
  /** Optional. Configuration for using Service Directory to privately connect to a GitHub Enterprise server. This should only be set if the GitHub Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the GitHub Enterprise server will be made over the public internet. */
  serviceDirectoryConfig?: GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig;
  /** Optional. SSL certificate to use for requests to GitHub Enterprise. */
  sslCa?: string;
  /** Output only. GitHub Enterprise version installed at the host_uri. */
  serverVersion?: string;
}

export const GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfig: Schema.Codec<GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostUri: Schema.optional(Schema.String),
    apiKey: Schema.optional(Schema.String),
    appId: Schema.optional(Schema.String),
    appSlug: Schema.optional(Schema.String),
    privateKeySecretVersion: Schema.optional(Schema.String),
    webhookSecretSecretVersion: Schema.optional(Schema.String),
    appInstallationId: Schema.optional(Schema.String),
    serviceDirectoryConfig: Schema.optional(
      GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig,
    ),
    sslCa: Schema.optional(Schema.String),
    serverVersion: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfig",
  });

export interface UserCredential {
  /** Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: `projects/* /secrets/* /versions/*`. */
  userTokenSecretVersion?: string;
  /** Output only. The username associated to this token. */
  username?: string;
}

export const UserCredential: Schema.Codec<UserCredential> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userTokenSecretVersion: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserCredential" });

export interface GoogleDevtoolsCloudbuildV2GitLabConfig {
  /** Optional. The URI of the GitLab Enterprise host this connection is for. If not specified, the default value is https://gitlab.com. */
  hostUri?: string;
  /** Required. Immutable. SecretManager resource containing the webhook secret of a GitLab Enterprise project, formatted as `projects/* /secrets/* /versions/*`. */
  webhookSecretSecretVersion?: string;
  /** Required. A GitLab personal access token with the minimum `read_api` scope access. */
  readAuthorizerCredential?: UserCredential;
  /** Required. A GitLab personal access token with the `api` scope access. */
  authorizerCredential?: UserCredential;
  /** Optional. Configuration for using Service Directory to privately connect to a GitLab Enterprise server. This should only be set if the GitLab Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the GitLab Enterprise server will be made over the public internet. */
  serviceDirectoryConfig?: GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig;
  /** Optional. SSL certificate to use for requests to GitLab Enterprise. */
  sslCa?: string;
  /** Output only. Version of the GitLab Enterprise server running on the `host_uri`. */
  serverVersion?: string;
}

export const GoogleDevtoolsCloudbuildV2GitLabConfig: Schema.Codec<GoogleDevtoolsCloudbuildV2GitLabConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostUri: Schema.optional(Schema.String),
    webhookSecretSecretVersion: Schema.optional(Schema.String),
    readAuthorizerCredential: Schema.optional(UserCredential),
    authorizerCredential: Schema.optional(UserCredential),
    serviceDirectoryConfig: Schema.optional(
      GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig,
    ),
    sslCa: Schema.optional(Schema.String),
    serverVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV2GitLabConfig" });

export interface BitbucketDataCenterConfig {
  /** Required. The URI of the Bitbucket Data Center instance or cluster this connection is for. */
  hostUri?: string;
  /** Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events, formatted as `projects/* /secrets/* /versions/*`. */
  webhookSecretSecretVersion?: string;
  /** Required. A http access token with the `REPO_READ` access. */
  readAuthorizerCredential?: UserCredential;
  /** Required. A http access token with the `REPO_ADMIN` scope access. */
  authorizerCredential?: UserCredential;
  /** Optional. Configuration for using Service Directory to privately connect to a Bitbucket Data Center. This should only be set if the Bitbucket Data Center is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the Bitbucket Data Center will be made over the public internet. */
  serviceDirectoryConfig?: GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig;
  /** Optional. SSL certificate to use for requests to the Bitbucket Data Center. */
  sslCa?: string;
  /** Output only. Version of the Bitbucket Data Center running on the `host_uri`. */
  serverVersion?: string;
}

export const BitbucketDataCenterConfig: Schema.Codec<BitbucketDataCenterConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostUri: Schema.optional(Schema.String),
    webhookSecretSecretVersion: Schema.optional(Schema.String),
    readAuthorizerCredential: Schema.optional(UserCredential),
    authorizerCredential: Schema.optional(UserCredential),
    serviceDirectoryConfig: Schema.optional(
      GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig,
    ),
    sslCa: Schema.optional(Schema.String),
    serverVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "BitbucketDataCenterConfig" });

export interface BitbucketCloudConfig {
  /** Required. The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform. */
  workspace?: string;
  /** Required. SecretManager resource containing the webhook secret used to verify webhook events, formatted as `projects/* /secrets/* /versions/*`. */
  webhookSecretSecretVersion?: string;
  /** Required. An access token with the `repository` access. It can be either a workspace, project or repository access token. It's recommended to use a system account to generate the credentials. */
  readAuthorizerCredential?: UserCredential;
  /** Required. An access token with the `webhook`, `repository`, `repository:admin` and `pullrequest` scope access. It can be either a workspace, project or repository access token. It's recommended to use a system account to generate these credentials. */
  authorizerCredential?: UserCredential;
}

export const BitbucketCloudConfig: Schema.Codec<BitbucketCloudConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workspace: Schema.optional(Schema.String),
    webhookSecretSecretVersion: Schema.optional(Schema.String),
    readAuthorizerCredential: Schema.optional(UserCredential),
    authorizerCredential: Schema.optional(UserCredential),
  }).annotate({ identifier: "BitbucketCloudConfig" });

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

export const InstallationState: Schema.Codec<InstallationState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stage: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    actionUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "InstallationState" });

export interface Connection {
  /** Immutable. The resource name of the connection, in the format `projects/{project}/locations/{location}/connections/{connection_id}`. */
  name?: string;
  /** Output only. Server assigned timestamp for when the connection was created. */
  createTime?: string;
  /** Output only. Server assigned timestamp for when the connection was updated. */
  updateTime?: string;
  /** Configuration for connections to github.com. */
  githubConfig?: GitHubConfig;
  /** Configuration for connections to an instance of GitHub Enterprise. */
  githubEnterpriseConfig?: GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfig;
  /** Configuration for connections to gitlab.com or an instance of GitLab Enterprise. */
  gitlabConfig?: GoogleDevtoolsCloudbuildV2GitLabConfig;
  /** Configuration for connections to Bitbucket Data Center. */
  bitbucketDataCenterConfig?: BitbucketDataCenterConfig;
  /** Configuration for connections to Bitbucket Cloud. */
  bitbucketCloudConfig?: BitbucketCloudConfig;
  /** Output only. Installation state of the Connection. */
  installationState?: InstallationState;
  /** Optional. If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled. */
  disabled?: boolean;
  /** Output only. Set to true when the connection is being set up or updated in the background. */
  reconciling?: boolean;
  /** Optional. Allows clients to store small amounts of arbitrary data. */
  annotations?: Record<string, string>;
  /** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
}

export const Connection: Schema.Codec<Connection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    githubConfig: Schema.optional(GitHubConfig),
    githubEnterpriseConfig: Schema.optional(
      GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfig,
    ),
    gitlabConfig: Schema.optional(GoogleDevtoolsCloudbuildV2GitLabConfig),
    bitbucketDataCenterConfig: Schema.optional(BitbucketDataCenterConfig),
    bitbucketCloudConfig: Schema.optional(BitbucketCloudConfig),
    installationState: Schema.optional(InstallationState),
    disabled: Schema.optional(Schema.Boolean),
    reconciling: Schema.optional(Schema.Boolean),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "Connection" });

export interface ListConnectionsResponse {
  /** The list of Connections. */
  connections?: ReadonlyArray<Connection>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListConnectionsResponse: Schema.Codec<ListConnectionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connections: Schema.optional(Schema.Array(Connection)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListConnectionsResponse" });

export interface Repository {
  /** Immutable. Resource name of the repository, in the format `projects/* /locations/* /connections/* /repositories/*`. */
  name?: string;
  /** Required. Git Clone HTTPS URI. */
  remoteUri?: string;
  /** Output only. Server assigned timestamp for when the connection was created. */
  createTime?: string;
  /** Output only. Server assigned timestamp for when the connection was updated. */
  updateTime?: string;
  /** Optional. Allows clients to store small amounts of arbitrary data. */
  annotations?: Record<string, string>;
  /** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. External ID of the webhook created for the repository. */
  webhookId?: string;
}

export const Repository: Schema.Codec<Repository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    remoteUri: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    webhookId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Repository" });

export interface CreateRepositoryRequest {
  /** Required. The connection to contain the repository. If the request is part of a BatchCreateRepositoriesRequest, this field should be empty or match the parent specified there. */
  parent?: string;
  /** Required. The repository to create. */
  repository?: Repository;
  /** Required. The ID to use for the repository, which will become the final component of the repository's resource name. This ID should be unique in the connection. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@. */
  repositoryId?: string;
}

export const CreateRepositoryRequest: Schema.Codec<CreateRepositoryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String),
    repository: Schema.optional(Repository),
    repositoryId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreateRepositoryRequest" });

export interface BatchCreateRepositoriesRequest {
  /** Required. The request messages specifying the repositories to create. */
  requests?: ReadonlyArray<CreateRepositoryRequest>;
}

export const BatchCreateRepositoriesRequest: Schema.Codec<BatchCreateRepositoriesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(CreateRepositoryRequest)),
  }).annotate({ identifier: "BatchCreateRepositoriesRequest" });

export interface ListRepositoriesResponse {
  /** The list of Repositories. */
  repositories?: ReadonlyArray<Repository>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListRepositoriesResponse: Schema.Codec<ListRepositoriesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repositories: Schema.optional(Schema.Array(Repository)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListRepositoriesResponse" });

export interface FetchReadWriteTokenRequest {}

export const FetchReadWriteTokenRequest: Schema.Codec<FetchReadWriteTokenRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "FetchReadWriteTokenRequest",
  });

export interface FetchReadWriteTokenResponse {
  /** The token content. */
  token?: string;
  /** Expiration timestamp. Can be empty if unknown or non-expiring. */
  expirationTime?: string;
}

export const FetchReadWriteTokenResponse: Schema.Codec<FetchReadWriteTokenResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
    expirationTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "FetchReadWriteTokenResponse" });

export interface FetchReadTokenRequest {}

export const FetchReadTokenRequest: Schema.Codec<FetchReadTokenRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "FetchReadTokenRequest",
  });

export interface FetchReadTokenResponse {
  /** The token content. */
  token?: string;
  /** Expiration timestamp. Can be empty if unknown or non-expiring. */
  expirationTime?: string;
}

export const FetchReadTokenResponse: Schema.Codec<FetchReadTokenResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
    expirationTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "FetchReadTokenResponse" });

export interface HttpBody {
  /** The HTTP Content-Type header value specifying the content type of the body. */
  contentType?: string;
  /** The HTTP request/response body as raw binary. */
  data?: string;
  /** Application specific response metadata. Must be set in the first response for streaming APIs. */
  extensions?: ReadonlyArray<Record<string, unknown>>;
}

export const HttpBody: Schema.Codec<HttpBody> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contentType: Schema.optional(Schema.String),
    data: Schema.optional(Schema.String),
    extensions: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "HttpBody" });

export interface FetchLinkableRepositoriesResponse {
  /** repositories ready to be created. */
  repositories?: ReadonlyArray<Repository>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const FetchLinkableRepositoriesResponse: Schema.Codec<FetchLinkableRepositoriesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repositories: Schema.optional(Schema.Array(Repository)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "FetchLinkableRepositoriesResponse" });

export interface FetchGitRefsResponse {
  /** Name of the refs fetched. */
  refNames?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const FetchGitRefsResponse: Schema.Codec<FetchGitRefsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    refNames: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "FetchGitRefsResponse" });

export interface Expr {
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
}

export const Expr: Schema.Codec<Expr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface Binding {
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
}

export const Binding: Schema.Codec<Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    members: Schema.optional(Schema.Array(Schema.String)),
    condition: Schema.optional(Expr),
  }).annotate({ identifier: "Binding" });

export interface AuditLogConfig {
  /** The log type that this config enables. */
  logType?:
    | "LOG_TYPE_UNSPECIFIED"
    | "ADMIN_READ"
    | "DATA_WRITE"
    | "DATA_READ"
    | (string & {});
  /** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
  exemptedMembers?: ReadonlyArray<string>;
}

export const AuditLogConfig: Schema.Codec<AuditLogConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logType: Schema.optional(Schema.String),
    exemptedMembers: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AuditLogConfig" });

export interface AuditConfig {
  /** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
  service?: string;
  /** The configuration for logging of each type of permission. */
  auditLogConfigs?: ReadonlyArray<AuditLogConfig>;
}

export const AuditConfig: Schema.Codec<AuditConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    auditLogConfigs: Schema.optional(Schema.Array(AuditLogConfig)),
  }).annotate({ identifier: "AuditConfig" });

export interface Policy {
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<AuditConfig>;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
}

export const Policy: Schema.Codec<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.Number),
    bindings: Schema.optional(Schema.Array(Binding)),
    auditConfigs: Schema.optional(Schema.Array(AuditConfig)),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "Policy" });

export interface SetIamPolicyRequest {
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: Policy;
  /** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
  updateMask?: string;
}

export const SetIamPolicyRequest: Schema.Codec<SetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Policy),
    updateMask: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetIamPolicyRequest" });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Codec<TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Codec<TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface GoogleDevtoolsCloudbuildV2OperationMetadata {
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
}

export const GoogleDevtoolsCloudbuildV2OperationMetadata: Schema.Codec<GoogleDevtoolsCloudbuildV2OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    apiVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV2OperationMetadata" });

export interface RunWorkflowCustomOperationMetadata {
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. ID of the pipeline run created by RunWorkflow. */
  pipelineRunId?: string;
}

export const RunWorkflowCustomOperationMetadata: Schema.Codec<RunWorkflowCustomOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    apiVersion: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    pipelineRunId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RunWorkflowCustomOperationMetadata" });

export interface OperationMetadata {
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusDetail?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
  cancelRequested?: boolean;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
}

export const OperationMetadata: Schema.Codec<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    statusDetail: Schema.optional(Schema.String),
    cancelRequested: Schema.optional(Schema.Boolean),
    apiVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface BatchCreateRepositoriesResponse {
  /** Repository resources created. */
  repositories?: ReadonlyArray<Repository>;
}

export const BatchCreateRepositoriesResponse: Schema.Codec<BatchCreateRepositoriesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repositories: Schema.optional(Schema.Array(Repository)),
  }).annotate({ identifier: "BatchCreateRepositoriesResponse" });

export interface ParamValue {
  /** Type of parameter. */
  type?: "TYPE_UNSPECIFIED" | "STRING" | "ARRAY" | "OBJECT" | (string & {});
  /** Value of the parameter if type is string. */
  stringVal?: string;
  /** Value of the parameter if type is array. */
  arrayVal?: ReadonlyArray<string>;
  /** Optional. Value of the parameter if type is object. */
  objectVal?: Record<string, string>;
}

export const ParamValue: Schema.Codec<ParamValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    stringVal: Schema.optional(Schema.String),
    arrayVal: Schema.optional(Schema.Array(Schema.String)),
    objectVal: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "ParamValue" });

export interface ParamSpec {
  /** Name of the ParamSpec */
  name?: string;
  /** Description of the ParamSpec */
  description?: string;
  /** Type of ParamSpec */
  type?: "TYPE_UNSPECIFIED" | "STRING" | "ARRAY" | "OBJECT" | (string & {});
  /** The default value a parameter takes if no input value is supplied */
  default?: ParamValue;
}

export const ParamSpec: Schema.Codec<ParamSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    default: Schema.optional(ParamValue),
  }).annotate({ identifier: "ParamSpec" });

export interface EnvVar {
  /** Name of the environment variable. */
  name?: string;
  /** Value of the environment variable. */
  value?: string;
}

export const EnvVar: Schema.Codec<EnvVar> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnvVar" });

export interface VolumeMount {
  /** Name of the volume. */
  name?: string;
  /** Mounted read-only if true, read-write otherwise (false or unspecified). */
  readOnly?: boolean;
  /** Path within the container at which the volume should be mounted. Must not contain ':'. */
  mountPath?: string;
  /** Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
  subPath?: string;
  /** Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). */
  subPathExpr?: string;
}

export const VolumeMount: Schema.Codec<VolumeMount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    readOnly: Schema.optional(Schema.Boolean),
    mountPath: Schema.optional(Schema.String),
    subPath: Schema.optional(Schema.String),
    subPathExpr: Schema.optional(Schema.String),
  }).annotate({ identifier: "VolumeMount" });

export interface SecurityContext {
  /** Run container in privileged mode. */
  privileged?: boolean;
  /** Optional. The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows. +optional */
  runAsUser?: string;
  /** Optional. The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows. +optional */
  runAsGroup?: string;
  /** Optional. Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. +optional */
  runAsNonRoot?: boolean;
  /** Optional. AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows. +optional */
  allowPrivilegeEscalation?: boolean;
}

export const SecurityContext: Schema.Codec<SecurityContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privileged: Schema.optional(Schema.Boolean),
    runAsUser: Schema.optional(Schema.String),
    runAsGroup: Schema.optional(Schema.String),
    runAsNonRoot: Schema.optional(Schema.Boolean),
    allowPrivilegeEscalation: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SecurityContext" });

export interface Param {
  /** Name of the parameter. */
  name?: string;
  /** Value of the parameter. */
  value?: ParamValue;
}

export const Param: Schema.Codec<Param> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(ParamValue),
  }).annotate({ identifier: "Param" });

export interface StepRef {
  /** Optional. Name of the step. */
  name?: string;
  /** Optional. Type of the resolver. */
  resolver?:
    | "RESOLVER_NAME_UNSPECIFIED"
    | "BUNDLES"
    | "GCB_REPO"
    | "GIT"
    | "DEVELOPER_CONNECT"
    | "DEFAULT"
    | (string & {});
  /** Optional. Parameters used to control the resolution. */
  params?: ReadonlyArray<Param>;
}

export const StepRef: Schema.Codec<StepRef> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    resolver: Schema.optional(Schema.String),
    params: Schema.optional(Schema.Array(Param)),
  }).annotate({ identifier: "StepRef" });

export interface Step {
  /** Name of the container specified as a DNS_LABEL. */
  name?: string;
  /** Docker image name. */
  image?: string;
  /** Arguments to the entrypoint. */
  args?: ReadonlyArray<string>;
  /** Entrypoint array. */
  command?: ReadonlyArray<string>;
  /** Container's working directory. */
  workingDir?: string;
  /** List of environment variables to set in the container. */
  env?: ReadonlyArray<EnvVar>;
  /** The contents of an executable file to execute. */
  script?: string;
  /** Pod volumes to mount into the container's filesystem. */
  volumeMounts?: ReadonlyArray<VolumeMount>;
  /** Time after which the Step times out. Defaults to never. */
  timeout?: string;
  /** Optional. SecurityContext defines the security options the Step should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/ +optional */
  securityContext?: SecurityContext;
  /** Optional. Optional reference to a remote StepAction. */
  ref?: StepRef;
  /** Optional. Optional parameters passed to the StepAction. */
  params?: ReadonlyArray<Param>;
  /** Optional. OnError defines the exiting behavior on error can be set to [ continue | stopAndFail ] */
  onError?:
    | "ON_ERROR_TYPE_UNSPECIFIED"
    | "STOP_AND_FAIL"
    | "CONTINUE"
    | (string & {});
}

export const Step: Schema.Codec<Step> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    image: Schema.optional(Schema.String),
    args: Schema.optional(Schema.Array(Schema.String)),
    command: Schema.optional(Schema.Array(Schema.String)),
    workingDir: Schema.optional(Schema.String),
    env: Schema.optional(Schema.Array(EnvVar)),
    script: Schema.optional(Schema.String),
    volumeMounts: Schema.optional(Schema.Array(VolumeMount)),
    timeout: Schema.optional(Schema.String),
    securityContext: Schema.optional(SecurityContext),
    ref: Schema.optional(StepRef),
    params: Schema.optional(Schema.Array(Param)),
    onError: Schema.optional(Schema.String),
  }).annotate({ identifier: "Step" });

export interface PropertySpec {
  /** A type for the object. */
  type?: "TYPE_UNSPECIFIED" | "STRING" | (string & {});
}

export const PropertySpec: Schema.Codec<PropertySpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "PropertySpec" });

export interface TaskResult {
  /** Name of the result. */
  name?: string;
  /** Description of the result. */
  description?: string;
  /** The type of data that the result holds. */
  type?: "TYPE_UNSPECIFIED" | "STRING" | "ARRAY" | "OBJECT" | (string & {});
  /** When type is OBJECT, this map holds the names of fields inside that object along with the type of data each field holds. */
  properties?: Record<string, PropertySpec>;
  /** Optional. Optionally used to initialize a Task's result with a Step's result. */
  value?: ParamValue;
}

export const TaskResult: Schema.Codec<TaskResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.Record(Schema.String, PropertySpec)),
    value: Schema.optional(ParamValue),
  }).annotate({ identifier: "TaskResult" });

export interface WorkspaceDeclaration {
  /** Name is the name by which you can bind the volume at runtime. */
  name?: string;
  /** Description is a human readable description of this volume. */
  description?: string;
  /** MountPath overrides the directory that the volume will be made available at. */
  mountPath?: string;
  /** ReadOnly dictates whether a mounted volume is writable. */
  readOnly?: boolean;
  /** Optional. Optional marks a Workspace as not being required in TaskRuns. By default this field is false and so declared workspaces are required. */
  optional?: boolean;
}

export const WorkspaceDeclaration: Schema.Codec<WorkspaceDeclaration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    mountPath: Schema.optional(Schema.String),
    readOnly: Schema.optional(Schema.Boolean),
    optional: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "WorkspaceDeclaration" });

export interface ExecAction {
  /** Optional. Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. +optional */
  command?: ReadonlyArray<string>;
}

export const ExecAction: Schema.Codec<ExecAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    command: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ExecAction" });

export interface Probe {
  /** Optional. Exec specifies the action to take. +optional */
  exec?: ExecAction;
  /** Optional. How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. +optional */
  periodSeconds?: number;
}

export const Probe: Schema.Codec<Probe> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exec: Schema.optional(ExecAction),
    periodSeconds: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Probe" });

export interface Sidecar {
  /** Name of the Sidecar. */
  name?: string;
  /** Docker image name. */
  image?: string;
  /** Arguments to the entrypoint. */
  args?: ReadonlyArray<string>;
  /** Entrypoint array. */
  command?: ReadonlyArray<string>;
  /** Container's working directory. */
  workingDir?: string;
  /** List of environment variables to set in the container. */
  env?: ReadonlyArray<EnvVar>;
  /** The contents of an executable file to execute. */
  script?: string;
  /** Pod volumes to mount into the container's filesystem. */
  volumeMounts?: ReadonlyArray<VolumeMount>;
  /** Optional. Security options the container should be run with. */
  securityContext?: SecurityContext;
  /** Optional. Periodic probe of Sidecar service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes +optional */
  readinessProbe?: Probe;
}

export const Sidecar: Schema.Codec<Sidecar> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    image: Schema.optional(Schema.String),
    args: Schema.optional(Schema.Array(Schema.String)),
    command: Schema.optional(Schema.Array(Schema.String)),
    workingDir: Schema.optional(Schema.String),
    env: Schema.optional(Schema.Array(EnvVar)),
    script: Schema.optional(Schema.String),
    volumeMounts: Schema.optional(Schema.Array(VolumeMount)),
    securityContext: Schema.optional(SecurityContext),
    readinessProbe: Schema.optional(Probe),
  }).annotate({ identifier: "Sidecar" });

export interface EmptyDirVolumeSource {}

export const EmptyDirVolumeSource: Schema.Codec<EmptyDirVolumeSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "EmptyDirVolumeSource",
  });

export interface VolumeSource {
  /** Name of the Volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: string;
  /** A temporary directory that shares a pod's lifetime. */
  emptyDir?: EmptyDirVolumeSource;
}

export const VolumeSource: Schema.Codec<VolumeSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    emptyDir: Schema.optional(EmptyDirVolumeSource),
  }).annotate({ identifier: "VolumeSource" });

export interface StepTemplate {
  /** Optional. List of environment variables to set in the Step. Cannot be updated. */
  env?: ReadonlyArray<EnvVar>;
  /** Optional. Pod volumes to mount into the container's filesystem. */
  volumeMounts?: ReadonlyArray<VolumeMount>;
}

export const StepTemplate: Schema.Codec<StepTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    env: Schema.optional(Schema.Array(EnvVar)),
    volumeMounts: Schema.optional(Schema.Array(VolumeMount)),
  }).annotate({ identifier: "StepTemplate" });

export interface TaskSpec {
  /** List of parameters. */
  params?: ReadonlyArray<ParamSpec>;
  /** Steps of the task. */
  steps?: ReadonlyArray<Step>;
  /** Values that this Task can output. */
  results?: ReadonlyArray<TaskResult>;
  /** The volumes that this Task requires. */
  workspaces?: ReadonlyArray<WorkspaceDeclaration>;
  /** Description of the task. */
  description?: string;
  /** Sidecars that run alongside the Task's step containers. */
  sidecars?: ReadonlyArray<Sidecar>;
  /** A collection of volumes that are available to mount into steps. */
  volumes?: ReadonlyArray<VolumeSource>;
  /** Sidecars that run alongside the Task’s step containers that should be added to this Task. */
  managedSidecars?: ReadonlyArray<
    "MANAGED_SIDECAR_UNSPECIFIED" | "PRIVILEGED_DOCKER_DAEMON" | (string & {})
  >;
  /** Optional. StepTemplate can be used as the basis for all step containers within the Task, so that the steps inherit settings on the base container. */
  stepTemplate?: StepTemplate;
}

export const TaskSpec: Schema.Codec<TaskSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    params: Schema.optional(Schema.Array(ParamSpec)),
    steps: Schema.optional(Schema.Array(Step)),
    results: Schema.optional(Schema.Array(TaskResult)),
    workspaces: Schema.optional(Schema.Array(WorkspaceDeclaration)),
    description: Schema.optional(Schema.String),
    sidecars: Schema.optional(Schema.Array(Sidecar)),
    volumes: Schema.optional(Schema.Array(VolumeSource)),
    managedSidecars: Schema.optional(Schema.Array(Schema.String)),
    stepTemplate: Schema.optional(StepTemplate),
  }).annotate({ identifier: "TaskSpec" });

export interface EmbeddedTask {
  /** User annotations. See https://google.aip.dev/128#annotations */
  annotations?: Record<string, string>;
  /** Spec to instantiate this TaskRun. */
  taskSpec?: TaskSpec;
}

export const EmbeddedTask: Schema.Codec<EmbeddedTask> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    taskSpec: Schema.optional(TaskSpec),
  }).annotate({ identifier: "EmbeddedTask" });

export interface TaskRef {
  /** Optional. Name of the task. */
  name?: string;
  /** Resolver is the name of the resolver that should perform resolution of the referenced Tekton resource. */
  resolver?:
    | "RESOLVER_NAME_UNSPECIFIED"
    | "BUNDLES"
    | "GCB_REPO"
    | "GIT"
    | "DEVELOPER_CONNECT"
    | "DEFAULT"
    | (string & {});
  /** Params contains the parameters used to identify the referenced Tekton resource. Example entries might include "repo" or "path" but the set of params ultimately depends on the chosen resolver. */
  params?: ReadonlyArray<Param>;
}

export const TaskRef: Schema.Codec<TaskRef> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    resolver: Schema.optional(Schema.String),
    params: Schema.optional(Schema.Array(Param)),
  }).annotate({ identifier: "TaskRef" });

export interface WhenExpression {
  /** Input is the string for guard checking which can be a static input or an output from a parent Task. */
  input?: string;
  /** Operator that represents an Input's relationship to the values */
  expressionOperator?:
    | "EXPRESSION_OPERATOR_UNSPECIFIED"
    | "IN"
    | "NOT_IN"
    | (string & {});
  /** Values is an array of strings, which is compared against the input, for guard checking. */
  values?: ReadonlyArray<string>;
}

export const WhenExpression: Schema.Codec<WhenExpression> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    input: Schema.optional(Schema.String),
    expressionOperator: Schema.optional(Schema.String),
    values: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "WhenExpression" });

export interface WorkspacePipelineTaskBinding {
  /** Name of the workspace as declared by the task. */
  name?: string;
  /** Name of the workspace declared by the pipeline. */
  workspace?: string;
  /** Optional. SubPath is optionally a directory on the volume which should be used for this binding (i.e. the volume will be mounted at this sub directory). +optional */
  subPath?: string;
}

export const WorkspacePipelineTaskBinding: Schema.Codec<WorkspacePipelineTaskBinding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    workspace: Schema.optional(Schema.String),
    subPath: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkspacePipelineTaskBinding" });

export interface PipelineTask {
  /** Name of the task. */
  name?: string;
  /** Spec to instantiate this TaskRun. */
  taskSpec?: EmbeddedTask;
  /** Reference to a specific instance of a task. */
  taskRef?: TaskRef;
  /** Conditions that need to be true for the task to run. */
  whenExpressions?: ReadonlyArray<WhenExpression>;
  /** Params is a list of parameter names and values. */
  params?: ReadonlyArray<Param>;
  /** Workspaces maps workspaces from the pipeline spec to the workspaces declared in the Task. */
  workspaces?: ReadonlyArray<WorkspacePipelineTaskBinding>;
  /** RunAfter is the list of PipelineTask names that should be executed before this Task executes. (Used to force a specific ordering in graph execution.) */
  runAfter?: ReadonlyArray<string>;
  /** Retries represents how many times this task should be retried in case of task failure. */
  retries?: number;
  /** Time after which the TaskRun times out. Defaults to 1 hour. Specified TaskRun timeout should be less than 24h. */
  timeout?: string;
}

export const PipelineTask: Schema.Codec<PipelineTask> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    taskSpec: Schema.optional(EmbeddedTask),
    taskRef: Schema.optional(TaskRef),
    whenExpressions: Schema.optional(Schema.Array(WhenExpression)),
    params: Schema.optional(Schema.Array(Param)),
    workspaces: Schema.optional(Schema.Array(WorkspacePipelineTaskBinding)),
    runAfter: Schema.optional(Schema.Array(Schema.String)),
    retries: Schema.optional(Schema.Number),
    timeout: Schema.optional(Schema.String),
  }).annotate({ identifier: "PipelineTask" });

export interface PipelineWorkspaceDeclaration {
  /** Name is the name of a workspace to be provided by a PipelineRun. */
  name?: string;
  /** Description is a human readable string describing how the workspace will be used in the Pipeline. */
  description?: string;
  /** Optional marks a Workspace as not being required in PipelineRuns. By default this field is false and so declared workspaces are required. */
  optional?: boolean;
}

export const PipelineWorkspaceDeclaration: Schema.Codec<PipelineWorkspaceDeclaration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    optional: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PipelineWorkspaceDeclaration" });

export interface ResultValue {
  /** Value of the result if type is string. */
  stringVal?: string;
  /** Value of the result if type is array. */
  arrayVal?: ReadonlyArray<string>;
  /** Value of the result if type is object. */
  objectVal?: Record<string, string>;
  /** Output only. The type of data that the result holds. */
  type?: "TYPE_UNSPECIFIED" | "STRING" | "ARRAY" | "OBJECT" | (string & {});
}

export const ResultValue: Schema.Codec<ResultValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stringVal: Schema.optional(Schema.String),
    arrayVal: Schema.optional(Schema.Array(Schema.String)),
    objectVal: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResultValue" });

export interface PipelineResult {
  /** Output only. Name of the result. */
  name?: string;
  /** Output only. Description of the result. */
  description?: string;
  /** Output only. The type of data that the result holds. */
  type?: "TYPE_UNSPECIFIED" | "STRING" | "ARRAY" | "OBJECT" | (string & {});
  /** Output only. Value of the result. */
  value?: ResultValue;
}

export const PipelineResult: Schema.Codec<PipelineResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    value: Schema.optional(ResultValue),
  }).annotate({ identifier: "PipelineResult" });

export interface PipelineSpec {
  /** List of Tasks that execute when this Pipeline is run. */
  tasks?: ReadonlyArray<PipelineTask>;
  /** List of parameters. */
  params?: ReadonlyArray<ParamSpec>;
  /** Workspaces declares a set of named workspaces that are expected to be provided by a PipelineRun. */
  workspaces?: ReadonlyArray<PipelineWorkspaceDeclaration>;
  /** List of Tasks that execute just before leaving the Pipeline i.e. either after all Tasks are finished executing successfully or after a failure which would result in ending the Pipeline. */
  finallyTasks?: ReadonlyArray<PipelineTask>;
  /** Output only. auto-generated yaml that is output only for display purpose for workflows using pipeline_spec, used by UI/gcloud cli for Workflows. */
  generatedYaml?: string;
  /** Optional. Output only. List of results written out by the pipeline's containers */
  results?: ReadonlyArray<PipelineResult>;
}

export const PipelineSpec: Schema.Codec<PipelineSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tasks: Schema.optional(Schema.Array(PipelineTask)),
    params: Schema.optional(Schema.Array(ParamSpec)),
    workspaces: Schema.optional(Schema.Array(PipelineWorkspaceDeclaration)),
    finallyTasks: Schema.optional(Schema.Array(PipelineTask)),
    generatedYaml: Schema.optional(Schema.String),
    results: Schema.optional(Schema.Array(PipelineResult)),
  }).annotate({ identifier: "PipelineSpec" });

export interface PipelineRef {
  /** Optional. Name of the Pipeline. */
  name?: string;
  /** Resolver is the name of the resolver that should perform resolution of the referenced Tekton resource. */
  resolver?:
    | "RESOLVER_NAME_UNSPECIFIED"
    | "BUNDLES"
    | "GCB_REPO"
    | "GIT"
    | "DEVELOPER_CONNECT"
    | "DEFAULT"
    | (string & {});
  /** Params contains the parameters used to identify the referenced Tekton resource. Example entries might include "repo" or "path" but the set of params ultimately depends on the chosen resolver. */
  params?: ReadonlyArray<Param>;
}

export const PipelineRef: Schema.Codec<PipelineRef> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    resolver: Schema.optional(Schema.String),
    params: Schema.optional(Schema.Array(Param)),
  }).annotate({ identifier: "PipelineRef" });

export interface SecretVolumeSource {
  /** Name of the secret referenced by the WorkspaceBinding. */
  secretName?: string;
  /** Optional. Resource name of the SecretVersion. In format: projects/* /secrets/* /versions/* */
  secretVersion?: string;
}

export const SecretVolumeSource: Schema.Codec<SecretVolumeSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secretName: Schema.optional(Schema.String),
    secretVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecretVolumeSource" });

export interface WorkspaceBinding {
  /** Name of the workspace. */
  name?: string;
  /** Secret Volume Source. */
  secret?: SecretVolumeSource;
  /** Optional. SubPath is optionally a directory on the volume which should be used for this binding (i.e. the volume will be mounted at this sub directory). +optional */
  subPath?: string;
}

export const WorkspaceBinding: Schema.Codec<WorkspaceBinding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    secret: Schema.optional(SecretVolumeSource),
    subPath: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkspaceBinding" });

export interface GoogleDevtoolsCloudbuildV2Condition {
  /** Type of condition. */
  type?: string;
  /** Status of the condition. */
  status?: "UNKNOWN" | "TRUE" | "FALSE" | (string & {});
  /** Severity with which to treat failures of this type of condition. */
  severity?: "SEVERITY_UNSPECIFIED" | "WARNING" | "INFO" | (string & {});
  /** LastTransitionTime is the last time the condition transitioned from one status to another. */
  lastTransitionTime?: string;
  /** The reason for the condition's last transition. */
  reason?: string;
  /** A human readable message indicating details about the transition. */
  message?: string;
}

export const GoogleDevtoolsCloudbuildV2Condition: Schema.Codec<GoogleDevtoolsCloudbuildV2Condition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    lastTransitionTime: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsCloudbuildV2Condition" });

export interface ChildStatusReference {
  /** Name is the name of the TaskRun or Run this is referencing. */
  name?: string;
  /** PipelineTaskName is the name of the PipelineTask this is referencing. */
  pipelineTaskName?: string;
  /** WhenExpressions is the list of checks guarding the execution of the PipelineTask */
  whenExpressions?: ReadonlyArray<WhenExpression>;
  /** Output only. Type of the child reference. */
  type?: "TYPE_UNSPECIFIED" | "TASK_RUN" | (string & {});
}

export const ChildStatusReference: Schema.Codec<ChildStatusReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    pipelineTaskName: Schema.optional(Schema.String),
    whenExpressions: Schema.optional(Schema.Array(WhenExpression)),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChildStatusReference" });

export interface TimeoutFields {
  /** Pipeline sets the maximum allowed duration for execution of the entire pipeline. The sum of individual timeouts for tasks and finally must not exceed this value. */
  pipeline?: string;
  /** Tasks sets the maximum allowed duration of this pipeline's tasks */
  tasks?: string;
  /** Finally sets the maximum allowed duration of this pipeline's finally */
  finally?: string;
}

export const TimeoutFields: Schema.Codec<TimeoutFields> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pipeline: Schema.optional(Schema.String),
    tasks: Schema.optional(Schema.String),
    finally: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeoutFields" });

export interface SkippedTask {
  /** Name is the Pipeline Task name */
  name?: string;
  /** WhenExpressions is the list of checks guarding the execution of the PipelineTask */
  whenExpressions?: ReadonlyArray<WhenExpression>;
  /** Output only. Reason is the cause of the PipelineTask being skipped. */
  reason?: string;
}

export const SkippedTask: Schema.Codec<SkippedTask> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    whenExpressions: Schema.optional(Schema.Array(WhenExpression)),
    reason: Schema.optional(Schema.String),
  }).annotate({ identifier: "SkippedTask" });

export interface Worker {
  /** Optional. Machine type of a worker, default is "e2-standard-2". */
  machineType?: string;
}

export const Worker: Schema.Codec<Worker> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machineType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Worker" });

export interface Security {
  /** IAM service account whose credentials will be used at runtime. */
  serviceAccount?: string;
  /** Optional. Privilege mode. */
  privilegeMode?:
    | "PRIVILEGE_MODE_UNSPECIFIED"
    | "PRIVILEGED"
    | "UNPRIVILEGED"
    | (string & {});
}

export const Security: Schema.Codec<Security> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccount: Schema.optional(Schema.String),
    privilegeMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "Security" });

export interface Provenance {
  /** Optional. Provenance push mode. */
  enabled?:
    | "ENABLED_UNSPECIFIED"
    | "REQUIRED"
    | "OPTIMISTIC"
    | "DISABLED"
    | (string & {});
  /** Optional. Where provenance is stored. */
  storage?:
    | "STORAGE_UNSPECIFIED"
    | "PREFER_ARTIFACT_PROJECT"
    | "ARTIFACT_PROJECT_ONLY"
    | "BUILD_PROJECT_ONLY"
    | (string & {});
  /** Optional. Provenance region. */
  region?: "REGION_UNSPECIFIED" | "GLOBAL" | (string & {});
}

export const Provenance: Schema.Codec<Provenance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.String),
    storage: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
  }).annotate({ identifier: "Provenance" });

export interface PipelineRunResult {
  /** Output only. Name of the TaskRun */
  name?: string;
  /** Output only. Value of the result. */
  value?: ResultValue;
}

export const PipelineRunResult: Schema.Codec<PipelineRunResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(ResultValue),
  }).annotate({ identifier: "PipelineRunResult" });

export interface PipelineRun {
  /** Output only. The `PipelineRun` name with format `projects/{project}/locations/{location}/pipelineRuns/{pipeline_run}` */
  name?: string;
  /** Output only. A unique identifier for the `PipelineRun`. */
  uid?: string;
  /** Output only. Time at which the request to create the `PipelineRun` was received. */
  createTime?: string;
  /** Output only. Time at which the request to update the `PipelineRun` was received. */
  updateTime?: string;
  /** User annotations. See https://google.aip.dev/128#annotations */
  annotations?: Record<string, string>;
  /** Output only. The Workflow used to create this PipelineRun. */
  workflow?: string;
  /** Output only. The WorkerPool used to run this PipelineRun. */
  workerPool?: string;
  /** PipelineSpec defines the desired state of Pipeline. */
  pipelineSpec?: PipelineSpec;
  /** PipelineRef refer to a specific instance of a Pipeline. */
  pipelineRef?: PipelineRef;
  /** Output only. Inline pipelineSpec yaml string, used by workflow run requests. */
  pipelineSpecYaml?: string;
  /** Params is a list of parameter names and values. */
  params?: ReadonlyArray<Param>;
  /** Workspaces is a list of WorkspaceBindings from volumes to workspaces. */
  workspaces?: ReadonlyArray<WorkspaceBinding>;
  /** Service account used in the Pipeline. Deprecated; please use security.service_account instead. */
  serviceAccount?: string;
  /** Pipelinerun status the user can provide. Used for cancellation. */
  pipelineRunStatus?:
    | "PIPELINE_RUN_STATUS_UNSPECIFIED"
    | "PIPELINE_RUN_CANCELLED"
    | (string & {});
  /** Output only. Kubernetes Conditions convention for PipelineRun status and error. */
  conditions?: ReadonlyArray<GoogleDevtoolsCloudbuildV2Condition>;
  /** Output only. Time the pipeline is actually started. */
  startTime?: string;
  /** Output only. Time the pipeline completed. */
  completionTime?: string;
  /** Output only. List of TaskRun and Run names and PipelineTask names for children of this PipelineRun. */
  childReferences?: ReadonlyArray<ChildStatusReference>;
  /** Needed for declarative-friendly resources. */
  etag?: string;
  /** Time after which the Pipeline times out. Currently three keys are accepted in the map pipeline, tasks and finally with Timeouts.pipeline >= Timeouts.tasks + Timeouts.finally */
  timeouts?: TimeoutFields;
  /** Output only. List of tasks that were skipped due to when expressions evaluating to false. */
  skippedTasks?: ReadonlyArray<SkippedTask>;
  /** Output only. The exact PipelineSpec used to instantiate the run. */
  resolvedPipelineSpec?: PipelineSpec;
  /** Output only. FinallyStartTime is when all non-finally tasks have been completed and only finally tasks are being executed. +optional */
  finallyStartTime?: string;
  /** Output only. GCB default params. */
  gcbParams?: Record<string, string>;
  /** Optional. Worker configuration. */
  worker?: Worker;
  /** Optional. Security configuration. */
  security?: Security;
  /** Optional. Provenance configuration. */
  provenance?: Provenance;
  /** Output only. The `Record` of this `PipelineRun`. Format: `projects/{project}/locations/{location}/results/{result_id}/records/{record_id}` */
  record?: string;
  /** Optional. Output only. List of results written out by the pipeline's containers */
  results?: ReadonlyArray<PipelineRunResult>;
}

export const PipelineRun: Schema.Codec<PipelineRun> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    workflow: Schema.optional(Schema.String),
    workerPool: Schema.optional(Schema.String),
    pipelineSpec: Schema.optional(PipelineSpec),
    pipelineRef: Schema.optional(PipelineRef),
    pipelineSpecYaml: Schema.optional(Schema.String),
    params: Schema.optional(Schema.Array(Param)),
    workspaces: Schema.optional(Schema.Array(WorkspaceBinding)),
    serviceAccount: Schema.optional(Schema.String),
    pipelineRunStatus: Schema.optional(Schema.String),
    conditions: Schema.optional(
      Schema.Array(GoogleDevtoolsCloudbuildV2Condition),
    ),
    startTime: Schema.optional(Schema.String),
    completionTime: Schema.optional(Schema.String),
    childReferences: Schema.optional(Schema.Array(ChildStatusReference)),
    etag: Schema.optional(Schema.String),
    timeouts: Schema.optional(TimeoutFields),
    skippedTasks: Schema.optional(Schema.Array(SkippedTask)),
    resolvedPipelineSpec: Schema.optional(PipelineSpec),
    finallyStartTime: Schema.optional(Schema.String),
    gcbParams: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    worker: Schema.optional(Worker),
    security: Schema.optional(Security),
    provenance: Schema.optional(Provenance),
    record: Schema.optional(Schema.String),
    results: Schema.optional(Schema.Array(PipelineRunResult)),
  }).annotate({ identifier: "PipelineRun" });

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
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsRequest>;

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
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsRequest>;

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

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsOperationsRequest>;

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
    T.Http({ method: "POST", path: "v2/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CancelProjectsLocationsOperationsRequest>;

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

export interface CreateProjectsLocationsConnectionsRequest {
  /** Required. Project and location where the connection will be created. Format: `projects/* /locations/*`. */
  parent: string;
  /** Required. The ID to use for the Connection, which will become the final component of the Connection's resource name. Names must be unique per-project per-location. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@. */
  connectionId?: string;
  /** Request body */
  body?: Connection;
}

export const CreateProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    connectionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("connectionId"),
    ),
    body: Schema.optional(Connection).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/connections", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsConnectionsRequest>;

export type CreateProjectsLocationsConnectionsResponse = Operation;
export const CreateProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Connection. */
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
  /** Required. The name of the Connection to retrieve. Format: `projects/* /locations/* /connections/*`. */
  name: string;
}

export const GetProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsConnectionsRequest>;

export type GetProjectsLocationsConnectionsResponse = Connection;
export const GetProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Connection;

export type GetProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single connection. */
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

export interface ListProjectsLocationsConnectionsRequest {
  /** Required. The parent, which owns this collection of Connections. Format: `projects/* /locations/*`. */
  parent: string;
  /** Number of results to return in the list. */
  pageSize?: number;
  /** Page start. */
  pageToken?: string;
  /** Optional. If set to true, the response will return partial results when some regions are unreachable. If set to false, the response will fail if any region is unreachable. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/connections" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsConnectionsRequest>;

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

export interface PatchProjectsLocationsConnectionsRequest {
  /** Immutable. The resource name of the connection, in the format `projects/{project}/locations/{location}/connections/{connection_id}`. */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** If set to true, and the connection is not found a new connection will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input connection has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties). */
  allowMissing?: boolean;
  /** The current etag of the connection. If an etag is provided and does not match the current etag of the connection, update will be blocked and an ABORTED error will be returned. */
  etag?: string;
  /** Request body */
  body?: Connection;
}

export const PatchProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    body: Schema.optional(Connection).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsConnectionsRequest>;

export type PatchProjectsLocationsConnectionsResponse = Operation;
export const PatchProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a single connection. */
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

export interface DeleteProjectsLocationsConnectionsRequest {
  /** Required. The name of the Connection to delete. Format: `projects/* /locations/* /connections/*`. */
  name: string;
  /** The current etag of the connection. If an etag is provided and does not match the current etag of the connection, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
  /** If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsConnectionsRequest>;

export type DeleteProjectsLocationsConnectionsResponse = Operation;
export const DeleteProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single connection. */
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

export interface ProcessWebhookProjectsLocationsConnectionsRequest {
  /** Required. Project and location where the webhook will be received. Format: `projects/* /locations/*`. */
  parent: string;
  /** Arbitrary additional key to find the matching repository for a webhook event if needed. */
  webhookKey?: string;
  /** Request body */
  body?: HttpBody;
}

export const ProcessWebhookProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    webhookKey: Schema.optional(Schema.String).pipe(T.HttpQuery("webhookKey")),
    body: Schema.optional(HttpBody).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/connections:processWebhook",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ProcessWebhookProjectsLocationsConnectionsRequest>;

export type ProcessWebhookProjectsLocationsConnectionsResponse = Empty;
export const ProcessWebhookProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type ProcessWebhookProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** ProcessWebhook is called by the external SCM for notifying of events. */
export const processWebhookProjectsLocationsConnections: API.OperationMethod<
  ProcessWebhookProjectsLocationsConnectionsRequest,
  ProcessWebhookProjectsLocationsConnectionsResponse,
  ProcessWebhookProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ProcessWebhookProjectsLocationsConnectionsRequest,
  output: ProcessWebhookProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FetchLinkableRepositoriesProjectsLocationsConnectionsRequest {
  /** Required. The name of the Connection. Format: `projects/* /locations/* /connections/*`. */
  connection: string;
  /** Number of results to return in the list. Default to 20. */
  pageSize?: number;
  /** Page start. */
  pageToken?: string;
}

export const FetchLinkableRepositoriesProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connection: Schema.String.pipe(T.HttpPath("connection")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v2/{+connection}:fetchLinkableRepositories",
    }),
    svc,
  ) as unknown as Schema.Codec<FetchLinkableRepositoriesProjectsLocationsConnectionsRequest>;

export type FetchLinkableRepositoriesProjectsLocationsConnectionsResponse =
  FetchLinkableRepositoriesResponse;
export const FetchLinkableRepositoriesProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchLinkableRepositoriesResponse;

export type FetchLinkableRepositoriesProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** FetchLinkableRepositories get repositories from SCM that are accessible and could be added to the connection. */
export const fetchLinkableRepositoriesProjectsLocationsConnections: API.PaginatedOperationMethod<
  FetchLinkableRepositoriesProjectsLocationsConnectionsRequest,
  FetchLinkableRepositoriesProjectsLocationsConnectionsResponse,
  FetchLinkableRepositoriesProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: FetchLinkableRepositoriesProjectsLocationsConnectionsRequest,
  output: FetchLinkableRepositoriesProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SetIamPolicyProjectsLocationsConnectionsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SetIamPolicyProjectsLocationsConnectionsRequest>;

export type SetIamPolicyProjectsLocationsConnectionsResponse = Policy;
export const SetIamPolicyProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsConnections: API.OperationMethod<
  SetIamPolicyProjectsLocationsConnectionsRequest,
  SetIamPolicyProjectsLocationsConnectionsResponse,
  SetIamPolicyProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsConnectionsRequest,
  output: SetIamPolicyProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsConnectionsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Codec<GetIamPolicyProjectsLocationsConnectionsRequest>;

export type GetIamPolicyProjectsLocationsConnectionsResponse = Policy;
export const GetIamPolicyProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsConnections: API.OperationMethod<
  GetIamPolicyProjectsLocationsConnectionsRequest,
  GetIamPolicyProjectsLocationsConnectionsResponse,
  GetIamPolicyProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsConnectionsRequest,
  output: GetIamPolicyProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsConnectionsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<TestIamPermissionsProjectsLocationsConnectionsRequest>;

export type TestIamPermissionsProjectsLocationsConnectionsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsConnections: API.OperationMethod<
  TestIamPermissionsProjectsLocationsConnectionsRequest,
  TestIamPermissionsProjectsLocationsConnectionsResponse,
  TestIamPermissionsProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsConnectionsRequest,
  output: TestIamPermissionsProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsConnectionsRepositoriesRequest {
  /** Required. The connection to contain the repository. If the request is part of a BatchCreateRepositoriesRequest, this field should be empty or match the parent specified there. */
  parent: string;
  /** Required. The ID to use for the repository, which will become the final component of the repository's resource name. This ID should be unique in the connection. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@. */
  repositoryId?: string;
  /** Request body */
  body?: Repository;
}

export const CreateProjectsLocationsConnectionsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    repositoryId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("repositoryId"),
    ),
    body: Schema.optional(Repository).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/repositories",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsConnectionsRepositoriesRequest>;

export type CreateProjectsLocationsConnectionsRepositoriesResponse = Operation;
export const CreateProjectsLocationsConnectionsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsConnectionsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Repository. */
export const createProjectsLocationsConnectionsRepositories: API.OperationMethod<
  CreateProjectsLocationsConnectionsRepositoriesRequest,
  CreateProjectsLocationsConnectionsRepositoriesResponse,
  CreateProjectsLocationsConnectionsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConnectionsRepositoriesRequest,
  output: CreateProjectsLocationsConnectionsRepositoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchCreateProjectsLocationsConnectionsRepositoriesRequest {
  /** Required. The connection to contain all the repositories being created. Format: projects/* /locations/* /connections/* The parent field in the CreateRepositoryRequest messages must either be empty or match this field. */
  parent: string;
  /** Request body */
  body?: BatchCreateRepositoriesRequest;
}

export const BatchCreateProjectsLocationsConnectionsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchCreateRepositoriesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/repositories:batchCreate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BatchCreateProjectsLocationsConnectionsRepositoriesRequest>;

export type BatchCreateProjectsLocationsConnectionsRepositoriesResponse =
  Operation;
export const BatchCreateProjectsLocationsConnectionsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type BatchCreateProjectsLocationsConnectionsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates multiple repositories inside a connection. */
export const batchCreateProjectsLocationsConnectionsRepositories: API.OperationMethod<
  BatchCreateProjectsLocationsConnectionsRepositoriesRequest,
  BatchCreateProjectsLocationsConnectionsRepositoriesResponse,
  BatchCreateProjectsLocationsConnectionsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchCreateProjectsLocationsConnectionsRepositoriesRequest,
  output: BatchCreateProjectsLocationsConnectionsRepositoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsConnectionsRepositoriesRequest {
  /** Required. The name of the Repository to retrieve. Format: `projects/* /locations/* /connections/* /repositories/*`. */
  name: string;
}

export const GetProjectsLocationsConnectionsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsConnectionsRepositoriesRequest>;

export type GetProjectsLocationsConnectionsRepositoriesResponse = Repository;
export const GetProjectsLocationsConnectionsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Repository;

export type GetProjectsLocationsConnectionsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single repository. */
export const getProjectsLocationsConnectionsRepositories: API.OperationMethod<
  GetProjectsLocationsConnectionsRepositoriesRequest,
  GetProjectsLocationsConnectionsRepositoriesResponse,
  GetProjectsLocationsConnectionsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConnectionsRepositoriesRequest,
  output: GetProjectsLocationsConnectionsRepositoriesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsConnectionsRepositoriesRequest {
  /** Required. The parent, which owns this collection of Repositories. Format: `projects/* /locations/* /connections/*`. */
  parent: string;
  /** Number of results to return in the list. */
  pageSize?: number;
  /** Page start. */
  pageToken?: string;
  /** A filter expression that filters resources listed in the response. Expressions must follow API improvement proposal [AIP-160](https://google.aip.dev/160). e.g. `remote_uri:"https://github.com*"`. */
  filter?: string;
  /** Optional. If set to true, the response will return partial results when some regions are unreachable. If set to false, the response will fail if any region is unreachable. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsConnectionsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/repositories" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsConnectionsRepositoriesRequest>;

export type ListProjectsLocationsConnectionsRepositoriesResponse =
  ListRepositoriesResponse;
export const ListProjectsLocationsConnectionsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListRepositoriesResponse;

export type ListProjectsLocationsConnectionsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Repositories in a given connection. */
export const listProjectsLocationsConnectionsRepositories: API.PaginatedOperationMethod<
  ListProjectsLocationsConnectionsRepositoriesRequest,
  ListProjectsLocationsConnectionsRepositoriesResponse,
  ListProjectsLocationsConnectionsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConnectionsRepositoriesRequest,
  output: ListProjectsLocationsConnectionsRepositoriesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsConnectionsRepositoriesRequest {
  /** Required. The name of the Repository to delete. Format: `projects/* /locations/* /connections/* /repositories/*`. */
  name: string;
  /** The current etag of the repository. If an etag is provided and does not match the current etag of the repository, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
  /** If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsConnectionsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsConnectionsRepositoriesRequest>;

export type DeleteProjectsLocationsConnectionsRepositoriesResponse = Operation;
export const DeleteProjectsLocationsConnectionsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsConnectionsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single repository. */
export const deleteProjectsLocationsConnectionsRepositories: API.OperationMethod<
  DeleteProjectsLocationsConnectionsRepositoriesRequest,
  DeleteProjectsLocationsConnectionsRepositoriesResponse,
  DeleteProjectsLocationsConnectionsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsConnectionsRepositoriesRequest,
  output: DeleteProjectsLocationsConnectionsRepositoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AccessReadWriteTokenProjectsLocationsConnectionsRepositoriesRequest {
  /** Required. The resource name of the repository in the format `projects/* /locations/* /connections/* /repositories/*`. */
  repository: string;
  /** Request body */
  body?: FetchReadWriteTokenRequest;
}

export const AccessReadWriteTokenProjectsLocationsConnectionsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repository: Schema.String.pipe(T.HttpPath("repository")),
    body: Schema.optional(FetchReadWriteTokenRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+repository}:accessReadWriteToken",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<AccessReadWriteTokenProjectsLocationsConnectionsRepositoriesRequest>;

export type AccessReadWriteTokenProjectsLocationsConnectionsRepositoriesResponse =
  FetchReadWriteTokenResponse;
export const AccessReadWriteTokenProjectsLocationsConnectionsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchReadWriteTokenResponse;

export type AccessReadWriteTokenProjectsLocationsConnectionsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Fetches read/write token of a given repository. */
export const accessReadWriteTokenProjectsLocationsConnectionsRepositories: API.OperationMethod<
  AccessReadWriteTokenProjectsLocationsConnectionsRepositoriesRequest,
  AccessReadWriteTokenProjectsLocationsConnectionsRepositoriesResponse,
  AccessReadWriteTokenProjectsLocationsConnectionsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AccessReadWriteTokenProjectsLocationsConnectionsRepositoriesRequest,
  output: AccessReadWriteTokenProjectsLocationsConnectionsRepositoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AccessReadTokenProjectsLocationsConnectionsRepositoriesRequest {
  /** Required. The resource name of the repository in the format `projects/* /locations/* /connections/* /repositories/*`. */
  repository: string;
  /** Request body */
  body?: FetchReadTokenRequest;
}

export const AccessReadTokenProjectsLocationsConnectionsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repository: Schema.String.pipe(T.HttpPath("repository")),
    body: Schema.optional(FetchReadTokenRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+repository}:accessReadToken",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<AccessReadTokenProjectsLocationsConnectionsRepositoriesRequest>;

export type AccessReadTokenProjectsLocationsConnectionsRepositoriesResponse =
  FetchReadTokenResponse;
export const AccessReadTokenProjectsLocationsConnectionsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchReadTokenResponse;

export type AccessReadTokenProjectsLocationsConnectionsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Fetches read token of a given repository. */
export const accessReadTokenProjectsLocationsConnectionsRepositories: API.OperationMethod<
  AccessReadTokenProjectsLocationsConnectionsRepositoriesRequest,
  AccessReadTokenProjectsLocationsConnectionsRepositoriesResponse,
  AccessReadTokenProjectsLocationsConnectionsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AccessReadTokenProjectsLocationsConnectionsRepositoriesRequest,
  output: AccessReadTokenProjectsLocationsConnectionsRepositoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FetchGitRefsProjectsLocationsConnectionsRepositoriesRequest {
  /** Required. The resource name of the repository in the format `projects/* /locations/* /connections/* /repositories/*`. */
  repository: string;
  /** Type of refs to fetch */
  refType?: "REF_TYPE_UNSPECIFIED" | "TAG" | "BRANCH" | (string & {});
  /** Optional. Number of results to return in the list. Default to 20. */
  pageSize?: number;
  /** Optional. Page start. */
  pageToken?: string;
}

export const FetchGitRefsProjectsLocationsConnectionsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repository: Schema.String.pipe(T.HttpPath("repository")),
    refType: Schema.optional(Schema.String).pipe(T.HttpQuery("refType")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+repository}:fetchGitRefs" }),
    svc,
  ) as unknown as Schema.Codec<FetchGitRefsProjectsLocationsConnectionsRepositoriesRequest>;

export type FetchGitRefsProjectsLocationsConnectionsRepositoriesResponse =
  FetchGitRefsResponse;
export const FetchGitRefsProjectsLocationsConnectionsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchGitRefsResponse;

export type FetchGitRefsProjectsLocationsConnectionsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetch the list of branches or tags for a given repository. */
export const fetchGitRefsProjectsLocationsConnectionsRepositories: API.PaginatedOperationMethod<
  FetchGitRefsProjectsLocationsConnectionsRepositoriesRequest,
  FetchGitRefsProjectsLocationsConnectionsRepositoriesResponse,
  FetchGitRefsProjectsLocationsConnectionsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: FetchGitRefsProjectsLocationsConnectionsRepositoriesRequest,
  output: FetchGitRefsProjectsLocationsConnectionsRepositoriesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
