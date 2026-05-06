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

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const Operation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  done: Schema.optional(Schema.Boolean),
  error: Schema.optional(Status),
  response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
}).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  },
).annotate({ identifier: "ListOperationsResponse" });

export interface Empty {}

export const Empty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Empty",
});

export interface CancelOperationRequest {}

export const CancelOperationRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "CancelOperationRequest" });

export interface OAuthCredential {
  /** Required. A SecretManager resource containing the OAuth token that authorizes the connection. Format: `projects/* /secrets/* /versions/*` or `projects/* /locations/* /secrets/* /versions/*` (if regional secrets are supported in that location). */
  oauthTokenSecretVersion?: string;
  /** Output only. The username associated with this token. */
  username?: string;
}

export const OAuthCredential = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  oauthTokenSecretVersion: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
}).annotate({ identifier: "OAuthCredential" });

export interface GitHubConfig {
  /** Required. Immutable. The GitHub Application that was installed to the GitHub user or organization. */
  githubApp?:
    | "GIT_HUB_APP_UNSPECIFIED"
    | "DEVELOPER_CONNECT"
    | "FIREBASE"
    | "GEMINI_CODE_ASSIST"
    | "DATAFORM"
    | (string & {});
  /** Optional. OAuth credential of the account that authorized the GitHub App. It is recommended to use a robot account instead of a human user account. The OAuth token must be tied to the GitHub App of this config. */
  authorizerCredential?: OAuthCredential;
  /** Optional. GitHub App installation id. */
  appInstallationId?: string;
  /** Output only. The URI to navigate to in order to manage the installation associated with this GitHubConfig. */
  installationUri?: string;
}

export const GitHubConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  githubApp: Schema.optional(Schema.String),
  authorizerCredential: Schema.optional(OAuthCredential),
  appInstallationId: Schema.optional(Schema.String),
  installationUri: Schema.optional(Schema.String),
}).annotate({ identifier: "GitHubConfig" });

export interface ServiceDirectoryConfig {
  /** Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. */
  service?: string;
}

export const ServiceDirectoryConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    service: Schema.optional(Schema.String),
  },
).annotate({ identifier: "ServiceDirectoryConfig" });

export interface GitHubEnterpriseConfig {
  /** Required. The URI of the GitHub Enterprise host this connection is for. */
  hostUri?: string;
  /** Optional. ID of the GitHub App created from the manifest. */
  appId?: string;
  /** Output only. The URL-friendly name of the GitHub App. */
  appSlug?: string;
  /** Optional. SecretManager resource containing the private key of the GitHub App, formatted as `projects/* /secrets/* /versions/*` or `projects/* /locations/* /secrets/* /versions/*` (if regional secrets are supported in that location). */
  privateKeySecretVersion?: string;
  /** Optional. SecretManager resource containing the webhook secret of the GitHub App, formatted as `projects/* /secrets/* /versions/*` or `projects/* /locations/* /secrets/* /versions/*` (if regional secrets are supported in that location). */
  webhookSecretSecretVersion?: string;
  /** Optional. ID of the installation of the GitHub App. */
  appInstallationId?: string;
  /** Output only. The URI to navigate to in order to manage the installation associated with this GitHubEnterpriseConfig. */
  installationUri?: string;
  /** Optional. Configuration for using Service Directory to privately connect to a GitHub Enterprise server. This should only be set if the GitHub Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the GitHub Enterprise server will be made over the public internet. */
  serviceDirectoryConfig?: ServiceDirectoryConfig;
  /** Output only. GitHub Enterprise version installed at the host_uri. */
  serverVersion?: string;
  /** Optional. SSL certificate to use for requests to GitHub Enterprise. */
  sslCaCertificate?: string;
  /** Optional. Immutable. GitHub Enterprise organization in which the GitHub App is created. */
  organization?: string;
}

export const GitHubEnterpriseConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    hostUri: Schema.optional(Schema.String),
    appId: Schema.optional(Schema.String),
    appSlug: Schema.optional(Schema.String),
    privateKeySecretVersion: Schema.optional(Schema.String),
    webhookSecretSecretVersion: Schema.optional(Schema.String),
    appInstallationId: Schema.optional(Schema.String),
    installationUri: Schema.optional(Schema.String),
    serviceDirectoryConfig: Schema.optional(ServiceDirectoryConfig),
    serverVersion: Schema.optional(Schema.String),
    sslCaCertificate: Schema.optional(Schema.String),
    organization: Schema.optional(Schema.String),
  },
).annotate({ identifier: "GitHubEnterpriseConfig" });

export interface UserCredential {
  /** Required. A SecretManager resource containing the user token that authorizes the Developer Connect connection. Format: `projects/* /secrets/* /versions/*` or `projects/* /locations/* /secrets/* /versions/*` (if regional secrets are supported in that location). */
  userTokenSecretVersion?: string;
  /** Output only. The username associated with this token. */
  username?: string;
}

export const UserCredential = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  userTokenSecretVersion: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
}).annotate({ identifier: "UserCredential" });

export interface GitLabConfig {
  /** Required. Immutable. SecretManager resource containing the webhook secret of a GitLab project, formatted as `projects/* /secrets/* /versions/*` or `projects/* /locations/* /secrets/* /versions/*` (if regional secrets are supported in that location). This is used to validate webhooks. */
  webhookSecretSecretVersion?: string;
  /** Required. A GitLab personal access token with the minimum `read_api` scope access and a minimum role of `reporter`. The GitLab Projects visible to this Personal Access Token will control which Projects Developer Connect has access to. */
  readAuthorizerCredential?: UserCredential;
  /** Required. A GitLab personal access token with the minimum `api` scope access and a minimum role of `maintainer`. The GitLab Projects visible to this Personal Access Token will control which Projects Developer Connect has access to. */
  authorizerCredential?: UserCredential;
}

export const GitLabConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  webhookSecretSecretVersion: Schema.optional(Schema.String),
  readAuthorizerCredential: Schema.optional(UserCredential),
  authorizerCredential: Schema.optional(UserCredential),
}).annotate({ identifier: "GitLabConfig" });

export interface GitLabEnterpriseConfig {
  /** Required. The URI of the GitLab Enterprise host this connection is for. */
  hostUri?: string;
  /** Required. Immutable. SecretManager resource containing the webhook secret of a GitLab project, formatted as `projects/* /secrets/* /versions/*` or `projects/* /locations/* /secrets/* /versions/*` (if regional secrets are supported in that location). This is used to validate webhooks. */
  webhookSecretSecretVersion?: string;
  /** Required. A GitLab personal access token with the minimum `read_api` scope access and a minimum role of `reporter`. The GitLab Projects visible to this Personal Access Token will control which Projects Developer Connect has access to. */
  readAuthorizerCredential?: UserCredential;
  /** Required. A GitLab personal access token with the minimum `api` scope access and a minimum role of `maintainer`. The GitLab Projects visible to this Personal Access Token will control which Projects Developer Connect has access to. */
  authorizerCredential?: UserCredential;
  /** Optional. Configuration for using Service Directory to privately connect to a GitLab Enterprise instance. This should only be set if the GitLab Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the GitLab Enterprise server will be made over the public internet. */
  serviceDirectoryConfig?: ServiceDirectoryConfig;
  /** Optional. SSL Certificate Authority certificate to use for requests to GitLab Enterprise instance. */
  sslCaCertificate?: string;
  /** Output only. Version of the GitLab Enterprise server running on the `host_uri`. */
  serverVersion?: string;
}

export const GitLabEnterpriseConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    hostUri: Schema.optional(Schema.String),
    webhookSecretSecretVersion: Schema.optional(Schema.String),
    readAuthorizerCredential: Schema.optional(UserCredential),
    authorizerCredential: Schema.optional(UserCredential),
    serviceDirectoryConfig: Schema.optional(ServiceDirectoryConfig),
    sslCaCertificate: Schema.optional(Schema.String),
    serverVersion: Schema.optional(Schema.String),
  },
).annotate({ identifier: "GitLabEnterpriseConfig" });

export interface BitbucketDataCenterConfig {
  /** Required. The URI of the Bitbucket Data Center host this connection is for. */
  hostUri?: string;
  /** Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events, formatted as `projects/* /secrets/* /versions/*` or `projects/* /locations/* /secrets/* /versions/*` (if regional secrets are supported in that location). This is used to validate webhooks. */
  webhookSecretSecretVersion?: string;
  /** Required. An http access token with the minimum `Repository read` access. It's recommended to use a system account to generate the credentials. */
  readAuthorizerCredential?: UserCredential;
  /** Required. An http access token with the minimum `Repository admin` scope access. This is needed to create webhooks. It's recommended to use a system account to generate these credentials. */
  authorizerCredential?: UserCredential;
  /** Optional. Configuration for using Service Directory to privately connect to a Bitbucket Data Center instance. This should only be set if the Bitbucket Data Center is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the Bitbucket Data Center will be made over the public internet. */
  serviceDirectoryConfig?: ServiceDirectoryConfig;
  /** Optional. SSL certificate authority to trust when making requests to Bitbucket Data Center. */
  sslCaCertificate?: string;
  /** Output only. Version of the Bitbucket Data Center server running on the `host_uri`. */
  serverVersion?: string;
}

export const BitbucketDataCenterConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostUri: Schema.optional(Schema.String),
    webhookSecretSecretVersion: Schema.optional(Schema.String),
    readAuthorizerCredential: Schema.optional(UserCredential),
    authorizerCredential: Schema.optional(UserCredential),
    serviceDirectoryConfig: Schema.optional(ServiceDirectoryConfig),
    sslCaCertificate: Schema.optional(Schema.String),
    serverVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "BitbucketDataCenterConfig" });

export interface BitbucketCloudConfig {
  /** Required. The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform. */
  workspace?: string;
  /** Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events, formatted as `projects/* /secrets/* /versions/*` or `projects/* /locations/* /secrets/* /versions/*` (if regional secrets are supported in that location). This is used to validate and create webhooks. */
  webhookSecretSecretVersion?: string;
  /** Required. An access token with the minimum `repository` access. It can either be a workspace, project or repository access token. It's recommended to use a system account to generate the credentials. */
  readAuthorizerCredential?: UserCredential;
  /** Required. An access token with the minimum `repository`, `pullrequest` and `webhook` scope access. It can either be a workspace, project or repository access token. This is needed to create webhooks. It's recommended to use a system account to generate these credentials. */
  authorizerCredential?: UserCredential;
}

export const BitbucketCloudConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  workspace: Schema.optional(Schema.String),
  webhookSecretSecretVersion: Schema.optional(Schema.String),
  readAuthorizerCredential: Schema.optional(UserCredential),
  authorizerCredential: Schema.optional(UserCredential),
}).annotate({ identifier: "BitbucketCloudConfig" });

export interface SecureSourceManagerInstanceConfig {
  /** Required. Immutable. Secure Source Manager instance resource, formatted as `projects/* /locations/* /instances/*` */
  instance?: string;
}

export const SecureSourceManagerInstanceConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instance: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecureSourceManagerInstanceConfig" });

export interface BasicAuthentication {
  /** The password SecretManager secret version to authenticate as. */
  passwordSecretVersion?: string;
  /** Required. The username to authenticate as. */
  username?: string;
}

export const BasicAuthentication = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  passwordSecretVersion: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
}).annotate({ identifier: "BasicAuthentication" });

export interface BearerTokenAuthentication {
  /** Optional. The token SecretManager secret version to authenticate as. */
  tokenSecretVersion?: string;
}

export const BearerTokenAuthentication =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tokenSecretVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "BearerTokenAuthentication" });

export interface GenericHTTPEndpointConfig {
  /** Optional. Basic authentication with username and password. */
  basicAuthentication?: BasicAuthentication;
  /** Optional. Bearer token authentication with a token. */
  bearerTokenAuthentication?: BearerTokenAuthentication;
  /** Required. Immutable. The service provider's https endpoint. */
  hostUri?: string;
  /** Optional. Configuration for using Service Directory to privately connect to a HTTP service provider. This should only be set if the Http service provider is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the HTTP service provider will be made over the public internet. */
  serviceDirectoryConfig?: ServiceDirectoryConfig;
  /** Optional. The SSL certificate to use for requests to the HTTP service provider. */
  sslCaCertificate?: string;
}

export const GenericHTTPEndpointConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    basicAuthentication: Schema.optional(BasicAuthentication),
    bearerTokenAuthentication: Schema.optional(BearerTokenAuthentication),
    hostUri: Schema.optional(Schema.String),
    serviceDirectoryConfig: Schema.optional(ServiceDirectoryConfig),
    sslCaCertificate: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenericHTTPEndpointConfig" });

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

export const InstallationState = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  stage: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
  actionUri: Schema.optional(Schema.String),
}).annotate({ identifier: "InstallationState" });

export interface CryptoKeyConfig {
  /** Required. The name of the key which is used to encrypt/decrypt customer data. For key in Cloud KMS, the key should be in the format of `projects/* /locations/* /keyRings/* /cryptoKeys/*`. */
  keyReference?: string;
}

export const CryptoKeyConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keyReference: Schema.optional(Schema.String),
}).annotate({ identifier: "CryptoKeyConfig" });

export interface GitProxyConfig {
  /** Optional. Setting this to true allows the git proxy to be used for performing git operations on the repositories linked in the connection. */
  enabled?: boolean;
  /** Output only. The base URI for the HTTP proxy endpoint. Has the format `https://{generatedID}-c-h-{shortRegion}.developerconnect.dev` Populated only when enabled is set to true. This endpoint is used by other Google services that integrate with Developer Connect. */
  httpProxyBaseUri?: string;
}

export const GitProxyConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
  httpProxyBaseUri: Schema.optional(Schema.String),
}).annotate({ identifier: "GitProxyConfig" });

export interface Connection {
  /** Configuration for connections to github.com. */
  githubConfig?: GitHubConfig;
  /** Configuration for connections to an instance of GitHub Enterprise. */
  githubEnterpriseConfig?: GitHubEnterpriseConfig;
  /** Configuration for connections to gitlab.com. */
  gitlabConfig?: GitLabConfig;
  /** Configuration for connections to an instance of GitLab Enterprise. */
  gitlabEnterpriseConfig?: GitLabEnterpriseConfig;
  /** Configuration for connections to an instance of Bitbucket Data Center. */
  bitbucketDataCenterConfig?: BitbucketDataCenterConfig;
  /** Configuration for connections to an instance of Bitbucket Clouds. */
  bitbucketCloudConfig?: BitbucketCloudConfig;
  /** Configuration for connections to an instance of Secure Source Manager. */
  secureSourceManagerInstanceConfig?: SecureSourceManagerInstanceConfig;
  /** Optional. Configuration for connections to an HTTP service provider. */
  httpConfig?: GenericHTTPEndpointConfig;
  /** Identifier. The resource name of the connection, in the format `projects/{project}/locations/{location}/connections/{connection_id}`. */
  name?: string;
  /** Output only. [Output only] Create timestamp */
  createTime?: string;
  /** Output only. [Output only] Update timestamp */
  updateTime?: string;
  /** Output only. [Output only] Delete timestamp */
  deleteTime?: string;
  /** Optional. Labels as key value pairs */
  labels?: Record<string, string>;
  /** Output only. Installation state of the Connection. */
  installationState?: InstallationState;
  /** Optional. If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled. */
  disabled?: boolean;
  /** Output only. Set to true when the connection is being set up or updated in the background. */
  reconciling?: boolean;
  /** Optional. Allows clients to store small amounts of arbitrary data. */
  annotations?: Record<string, string>;
  /** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. A system-assigned unique identifier for the Connection. */
  uid?: string;
  /** Optional. The crypto key configuration. This field is used by the Customer-Managed Encryption Keys (CMEK) feature. */
  cryptoKeyConfig?: CryptoKeyConfig;
  /** Optional. Configuration for the git proxy feature. Enabling the git proxy allows clients to perform git operations on the repositories linked in the connection. [Learn more](https://docs.cloud.google.com/developer-connect/docs/configure-git-proxy). */
  gitProxyConfig?: GitProxyConfig;
}

export const Connection = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  githubConfig: Schema.optional(GitHubConfig),
  githubEnterpriseConfig: Schema.optional(GitHubEnterpriseConfig),
  gitlabConfig: Schema.optional(GitLabConfig),
  gitlabEnterpriseConfig: Schema.optional(GitLabEnterpriseConfig),
  bitbucketDataCenterConfig: Schema.optional(BitbucketDataCenterConfig),
  bitbucketCloudConfig: Schema.optional(BitbucketCloudConfig),
  secureSourceManagerInstanceConfig: Schema.optional(
    SecureSourceManagerInstanceConfig,
  ),
  httpConfig: Schema.optional(GenericHTTPEndpointConfig),
  name: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
  deleteTime: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  installationState: Schema.optional(InstallationState),
  disabled: Schema.optional(Schema.Boolean),
  reconciling: Schema.optional(Schema.Boolean),
  annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
  uid: Schema.optional(Schema.String),
  cryptoKeyConfig: Schema.optional(CryptoKeyConfig),
  gitProxyConfig: Schema.optional(GitProxyConfig),
}).annotate({ identifier: "Connection" });

export interface ListConnectionsResponse {
  /** The list of Connection */
  connections?: ReadonlyArray<Connection>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connections: Schema.optional(Schema.Array(Connection)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListConnectionsResponse" });

export interface GitRepositoryLink {
  /** Identifier. Resource name of the repository, in the format `projects/* /locations/* /connections/* /gitRepositoryLinks/*`. */
  name?: string;
  /** Required. Git Clone URI. */
  cloneUri?: string;
  /** Output only. [Output only] Create timestamp */
  createTime?: string;
  /** Output only. [Output only] Update timestamp */
  updateTime?: string;
  /** Output only. [Output only] Delete timestamp */
  deleteTime?: string;
  /** Optional. Labels as key value pairs */
  labels?: Record<string, string>;
  /** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. Set to true when the connection is being set up or updated in the background. */
  reconciling?: boolean;
  /** Optional. Allows clients to store small amounts of arbitrary data. */
  annotations?: Record<string, string>;
  /** Output only. A system-assigned unique identifier for the GitRepositoryLink. */
  uid?: string;
  /** Output only. External ID of the webhook created for the repository. */
  webhookId?: string;
  /** Output only. URI to access the linked repository through the Git Proxy. This field is only populated if the git proxy is enabled for the connection. */
  gitProxyUri?: string;
}

export const GitRepositoryLink = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  cloneUri: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
  deleteTime: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
  reconciling: Schema.optional(Schema.Boolean),
  annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  uid: Schema.optional(Schema.String),
  webhookId: Schema.optional(Schema.String),
  gitProxyUri: Schema.optional(Schema.String),
}).annotate({ identifier: "GitRepositoryLink" });

export interface ListGitRepositoryLinksResponse {
  /** The list of GitRepositoryLinks */
  gitRepositoryLinks?: ReadonlyArray<GitRepositoryLink>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListGitRepositoryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gitRepositoryLinks: Schema.optional(Schema.Array(GitRepositoryLink)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListGitRepositoryLinksResponse" });

export interface FetchReadWriteTokenRequest {}

export const FetchReadWriteTokenRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "FetchReadWriteTokenRequest",
  });

export interface FetchReadWriteTokenResponse {
  /** The token content. */
  token?: string;
  /** Expiration timestamp. Can be empty if unknown or non-expiring. */
  expirationTime?: string;
  /** The git_username to specify when making a git clone with the token. For example, for GitHub GitRepositoryLinks, this would be "x-access-token" */
  gitUsername?: string;
}

export const FetchReadWriteTokenResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
    expirationTime: Schema.optional(Schema.String),
    gitUsername: Schema.optional(Schema.String),
  }).annotate({ identifier: "FetchReadWriteTokenResponse" });

export interface FetchReadTokenRequest {}

export const FetchReadTokenRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "FetchReadTokenRequest" });

export interface FetchReadTokenResponse {
  /** The token content. */
  token?: string;
  /** Expiration timestamp. Can be empty if unknown or non-expiring. */
  expirationTime?: string;
  /** The git_username to specify when making a git clone with the token. For example, for GitHub GitRepositoryLinks, this would be "x-access-token" */
  gitUsername?: string;
}

export const FetchReadTokenResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    token: Schema.optional(Schema.String),
    expirationTime: Schema.optional(Schema.String),
    gitUsername: Schema.optional(Schema.String),
  },
).annotate({ identifier: "FetchReadTokenResponse" });

export interface LinkableGitRepository {
  /** The clone uri of the repository. */
  cloneUri?: string;
}

export const LinkableGitRepository = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cloneUri: Schema.optional(Schema.String),
}).annotate({ identifier: "LinkableGitRepository" });

export interface FetchLinkableGitRepositoriesResponse {
  /** The git repositories that can be linked to the connection. */
  linkableGitRepositories?: ReadonlyArray<LinkableGitRepository>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const FetchLinkableGitRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    linkableGitRepositories: Schema.optional(
      Schema.Array(LinkableGitRepository),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "FetchLinkableGitRepositoriesResponse" });

export interface Installation {
  /** ID of the installation in GitHub. */
  id?: string;
  /** Name of the GitHub user or organization that owns this installation. */
  name?: string;
  /** Either "user" or "organization". */
  type?: string;
}

export const Installation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "Installation" });

export interface FetchGitHubInstallationsResponse {
  /** List of installations available to the OAuth user (for github.com) or all the installations (for GitHub enterprise). */
  installations?: ReadonlyArray<Installation>;
}

export const FetchGitHubInstallationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    installations: Schema.optional(Schema.Array(Installation)),
  }).annotate({ identifier: "FetchGitHubInstallationsResponse" });

export interface FetchGitRefsResponse {
  /** Name of the refs fetched. */
  refNames?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const FetchGitRefsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  refNames: Schema.optional(Schema.Array(Schema.String)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "FetchGitRefsResponse" });

export interface CustomOAuthConfig {
  /** Required. The scopes to be requested during OAuth. */
  scopes?: ReadonlyArray<string>;
  /** Required. The client ID of the OAuth application. */
  clientId?: string;
  /** Required. Input only. The client secret of the OAuth application. It will be provided as plain text, but encrypted and stored in developer connect. As INPUT_ONLY field, it will not be included in the output. */
  clientSecret?: string;
  /** Required. Immutable. The OAuth2 authorization server URL. */
  authUri?: string;
  /** Required. Immutable. The OAuth2 token request URL. */
  tokenUri?: string;
  /** Optional. Configuration for using Service Directory to connect to a private service. */
  serviceDirectoryConfig?: ServiceDirectoryConfig;
  /** Optional. SSL certificate to use for requests to a private service. */
  sslCaCertificate?: string;
  /** Optional. Disable PKCE for this OAuth config. PKCE is enabled by default. */
  pkceDisabled?: boolean;
  /** Required. The host URI of the OAuth application. */
  hostUri?: string;
  /** Required. The type of the SCM provider. */
  scmProvider?:
    | "SCM_PROVIDER_UNKNOWN"
    | "GITHUB_ENTERPRISE"
    | "GITLAB_ENTERPRISE"
    | "BITBUCKET_DATA_CENTER"
    | (string & {});
  /** Output only. SCM server version installed at the host URI. */
  serverVersion?: string;
}

export const CustomOAuthConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scopes: Schema.optional(Schema.Array(Schema.String)),
  clientId: Schema.optional(Schema.String),
  clientSecret: Schema.optional(Schema.String),
  authUri: Schema.optional(Schema.String),
  tokenUri: Schema.optional(Schema.String),
  serviceDirectoryConfig: Schema.optional(ServiceDirectoryConfig),
  sslCaCertificate: Schema.optional(Schema.String),
  pkceDisabled: Schema.optional(Schema.Boolean),
  hostUri: Schema.optional(Schema.String),
  scmProvider: Schema.optional(Schema.String),
  serverVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "CustomOAuthConfig" });

export interface ProviderOAuthConfig {
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
  /** Required. User selected scopes to apply to the Oauth config In the event of changing scopes, user records under AccountConnector will be deleted and users will re-auth again. */
  scopes?: ReadonlyArray<string>;
}

export const ProviderOAuthConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  systemProviderId: Schema.optional(Schema.String),
  scopes: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "ProviderOAuthConfig" });

export interface ProxyConfig {
  /** Optional. Setting this to true allows the git and http proxies to perform actions on behalf of the user configured under the account connector. */
  enabled?: boolean;
  /** Output only. The base URI for the HTTP proxy endpoint. Has the format `https://{generatedID}-a-h-{shortRegion}.developerconnect.dev` Populated only when `enabled` is set to `true`. This endpoint is used by other Google services that integrate with Developer Connect. */
  httpProxyBaseUri?: string;
}

export const ProxyConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
  httpProxyBaseUri: Schema.optional(Schema.String),
}).annotate({ identifier: "ProxyConfig" });

export interface AccountConnector {
  /** Custom OAuth config. */
  customOauthConfig?: CustomOAuthConfig;
  /** Optional. Provider OAuth config. */
  providerOauthConfig?: ProviderOAuthConfig;
  /** Identifier. The resource name of the accountConnector, in the format `projects/{project}/locations/{location}/accountConnectors/{account_connector_id}`. */
  name?: string;
  /** Output only. The timestamp when the accountConnector was created. */
  createTime?: string;
  /** Output only. The timestamp when the accountConnector was updated. */
  updateTime?: string;
  /** Optional. Allows users to store small amounts of arbitrary data. */
  annotations?: Record<string, string>;
  /** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Optional. Labels as key value pairs */
  labels?: Record<string, string>;
  /** Output only. Start OAuth flow by clicking on this URL. */
  oauthStartUri?: string;
  /** Optional. Configuration for the http and git proxy features. */
  proxyConfig?: ProxyConfig;
  /** Output only. A system-assigned unique identifier for the Account Connector. */
  uid?: string;
}

export const AccountConnector = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customOauthConfig: Schema.optional(CustomOAuthConfig),
  providerOauthConfig: Schema.optional(ProviderOAuthConfig),
  name: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
  annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  oauthStartUri: Schema.optional(Schema.String),
  proxyConfig: Schema.optional(ProxyConfig),
  uid: Schema.optional(Schema.String),
}).annotate({ identifier: "AccountConnector" });

export interface ListAccountConnectorsResponse {
  /** The list of AccountConnectors */
  accountConnectors?: ReadonlyArray<AccountConnector>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListAccountConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountConnectors: Schema.optional(Schema.Array(AccountConnector)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListAccountConnectorsResponse" });

export interface UserRepository {
  /** Output only. The user friendly repo name (e.g., myuser/myrepo) */
  displayName?: string;
  /** Output only. The Git proxy URL for this repo. For example: https://us-west1-git.developerconnect.dev/a/my-proj/my-ac/myuser/myrepo.git. Populated only when `proxy_config.enabled` is set to `true` in the Account Connector. This URL is used by other Google services that integrate with Developer Connect. */
  gitProxyUri?: string;
  /** Output only. The git clone URL of the repo. For example: https://github.com/myuser/myrepo.git */
  cloneUri?: string;
}

export const UserRepository = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  displayName: Schema.optional(Schema.String),
  gitProxyUri: Schema.optional(Schema.String),
  cloneUri: Schema.optional(Schema.String),
}).annotate({ identifier: "UserRepository" });

export interface FetchUserRepositoriesResponse {
  /** The repositories that the user can access with this account connector. */
  userRepos?: ReadonlyArray<UserRepository>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const FetchUserRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userRepos: Schema.optional(Schema.Array(UserRepository)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "FetchUserRepositoriesResponse" });

export interface FetchAccessTokenRequest {}

export const FetchAccessTokenRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "FetchAccessTokenRequest",
  });

export interface ExchangeError {
  /** https://datatracker.ietf.org/doc/html/rfc6749#section-5.2 - error */
  code?: string;
  /** https://datatracker.ietf.org/doc/html/rfc6749#section-5.2 - error_description */
  description?: string;
}

export const ExchangeError = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
}).annotate({ identifier: "ExchangeError" });

export interface FetchAccessTokenResponse {
  /** The token content. */
  token?: string;
  /** Expiration timestamp. Can be empty if unknown or non-expiring. */
  expirationTime?: string;
  /** The scopes of the access token. */
  scopes?: ReadonlyArray<string>;
  /** The error resulted from exchanging OAuth tokens from the service provider. */
  exchangeError?: ExchangeError;
}

export const FetchAccessTokenResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
    expirationTime: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
    exchangeError: Schema.optional(ExchangeError),
  }).annotate({ identifier: "FetchAccessTokenResponse" });

export interface User {
  /** Identifier. Resource name of the user, in the format `projects/* /locations/* /accountConnectors/* /users/*`. */
  name?: string;
  /** Output only. Developer Connect automatically converts user identity to some human readable description, e.g., email address. */
  displayName?: string;
  /** Output only. The timestamp when the user was created. */
  createTime?: string;
  /** Output only. The timestamp when the token was last requested. */
  lastTokenRequestTime?: string;
}

export const User = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  lastTokenRequestTime: Schema.optional(Schema.String),
}).annotate({ identifier: "User" });

export interface ListUsersResponse {
  /** The list of Users */
  users?: ReadonlyArray<User>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListUsersResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  users: Schema.optional(Schema.Array(User)),
  nextPageToken: Schema.optional(Schema.String),
  unreachable: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "ListUsersResponse" });

export interface StartOAuthResponse {
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
  /** The ticket to be used for post processing the callback from the service provider. */
  ticket?: string;
  /** Please refer to https://datatracker.ietf.org/doc/html/rfc7636#section-4.1 */
  codeChallenge?: string;
  /** Please refer to https://datatracker.ietf.org/doc/html/rfc7636#section-4.2 */
  codeChallengeMethod?: string;
  /** The client ID to the OAuth App of the service provider. */
  clientId?: string;
  /** The list of scopes requested by the application. */
  scopes?: ReadonlyArray<string>;
  /** The authorization server URL to the OAuth flow of the service provider. */
  authUri?: string;
}

export const StartOAuthResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  systemProviderId: Schema.optional(Schema.String),
  ticket: Schema.optional(Schema.String),
  codeChallenge: Schema.optional(Schema.String),
  codeChallengeMethod: Schema.optional(Schema.String),
  clientId: Schema.optional(Schema.String),
  scopes: Schema.optional(Schema.Array(Schema.String)),
  authUri: Schema.optional(Schema.String),
}).annotate({ identifier: "StartOAuthResponse" });

export interface FinishOAuthResponse {
  /** The error resulted from exchanging OAuth tokens from the service provider. */
  exchangeError?: ExchangeError;
}

export const FinishOAuthResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  exchangeError: Schema.optional(ExchangeError),
}).annotate({ identifier: "FinishOAuthResponse" });

export interface Projects {
  /** Optional. The project IDs. Format: {project} */
  projectIds?: ReadonlyArray<string>;
}

export const Projects = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  projectIds: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "Projects" });

export interface GKEWorkload {
  /** Required. Immutable. The name of the GKE cluster. Format: `projects/{project}/locations/{location}/clusters/{cluster}`. */
  cluster?: string;
  /** Output only. The name of the GKE deployment. Format: `projects/{project}/locations/{location}/clusters/{cluster}/namespaces/{namespace}/deployments/{deployment}`. */
  deployment?: string;
}

export const GKEWorkload = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cluster: Schema.optional(Schema.String),
  deployment: Schema.optional(Schema.String),
}).annotate({ identifier: "GKEWorkload" });

export interface GoogleCloudRun {
  /** Required. Immutable. The name of the Cloud Run service. Format: `projects/{project}/locations/{location}/services/{service}`. */
  serviceUri?: string;
}

export const GoogleCloudRun = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  serviceUri: Schema.optional(Schema.String),
}).annotate({ identifier: "GoogleCloudRun" });

export interface AppHubWorkload {
  /** Required. Output only. Immutable. The name of the App Hub Workload. Format: `projects/{project}/locations/{location}/applications/{application}/workloads/{workload}`. */
  workload?: string;
  /** Output only. The criticality of the App Hub Workload. */
  criticality?: string;
  /** Output only. The environment of the App Hub Workload. */
  environment?: string;
}

export const AppHubWorkload = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  workload: Schema.optional(Schema.String),
  criticality: Schema.optional(Schema.String),
  environment: Schema.optional(Schema.String),
}).annotate({ identifier: "AppHubWorkload" });

export interface AppHubService {
  /** Required. Output only. Immutable. The name of the App Hub Service. Format: `projects/{project}/locations/{location}/applications/{application}/services/{service}`. */
  apphubService?: string;
  /** Output only. The criticality of the App Hub Service. */
  criticality?: string;
  /** Output only. The environment of the App Hub Service. */
  environment?: string;
}

export const AppHubService = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  apphubService: Schema.optional(Schema.String),
  criticality: Schema.optional(Schema.String),
  environment: Schema.optional(Schema.String),
}).annotate({ identifier: "AppHubService" });

export interface RuntimeConfig {
  /** Output only. Google Kubernetes Engine runtime. */
  gkeWorkload?: GKEWorkload;
  /** Output only. Cloud Run runtime. */
  googleCloudRun?: GoogleCloudRun;
  /** Output only. App Hub Workload. */
  appHubWorkload?: AppHubWorkload;
  /** Output only. App Hub Service. */
  appHubService?: AppHubService;
  /** Required. Immutable. The URI of the runtime configuration. For GKE, this is the cluster name. For Cloud Run, this is the service name. */
  uri?: string;
  /** Output only. The state of the Runtime. */
  state?: "STATE_UNSPECIFIED" | "LINKED" | "UNLINKED" | (string & {});
}

export const RuntimeConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gkeWorkload: Schema.optional(GKEWorkload),
  googleCloudRun: Schema.optional(GoogleCloudRun),
  appHubWorkload: Schema.optional(AppHubWorkload),
  appHubService: Schema.optional(AppHubService),
  uri: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
}).annotate({ identifier: "RuntimeConfig" });

export interface GoogleArtifactRegistry {
  /** Required. The host project of Artifact Registry. */
  projectId?: string;
  /** Required. Immutable. The name of the artifact registry package. */
  artifactRegistryPackage?: string;
}

export const GoogleArtifactRegistry = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    projectId: Schema.optional(Schema.String),
    artifactRegistryPackage: Schema.optional(Schema.String),
  },
).annotate({ identifier: "GoogleArtifactRegistry" });

export interface GoogleArtifactAnalysis {
  /** Required. The project id of the project where the provenance is stored. */
  projectId?: string;
}

export const GoogleArtifactAnalysis = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    projectId: Schema.optional(Schema.String),
  },
).annotate({ identifier: "GoogleArtifactAnalysis" });

export interface ArtifactConfig {
  /** Optional. Set if the artifact is stored in Artifact registry. */
  googleArtifactRegistry?: GoogleArtifactRegistry;
  /** Optional. Set if the artifact metadata is stored in Artifact analysis. */
  googleArtifactAnalysis?: GoogleArtifactAnalysis;
  /** Required. Immutable. The URI of the artifact that is deployed. e.g. `us-docker.pkg.dev/my-project/my-repo/image`. The URI does not include the tag / digest because it captures a lineage of artifacts. */
  uri?: string;
}

export const ArtifactConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  googleArtifactRegistry: Schema.optional(GoogleArtifactRegistry),
  googleArtifactAnalysis: Schema.optional(GoogleArtifactAnalysis),
  uri: Schema.optional(Schema.String),
}).annotate({ identifier: "ArtifactConfig" });

export interface InsightsConfig {
  /** Optional. The name of the App Hub Application. Format: projects/{project}/locations/{location}/applications/{application} */
  appHubApplication?: string;
  /** Optional. The projects to track with the InsightsConfig. */
  projects?: Projects;
  /** Identifier. The name of the InsightsConfig. Format: projects/{project}/locations/{location}/insightsConfigs/{insightsConfig} */
  name?: string;
  /** Output only. Create timestamp. */
  createTime?: string;
  /** Output only. Update timestamp. */
  updateTime?: string;
  /** Output only. The runtime configurations where the application is deployed. */
  runtimeConfigs?: ReadonlyArray<RuntimeConfig>;
  /** Optional. The artifact configurations of the artifacts that are deployed. */
  artifactConfigs?: ReadonlyArray<ArtifactConfig>;
  /** Optional. Output only. The state of the InsightsConfig. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "COMPLETE"
    | "ERROR"
    | (string & {});
  /** Optional. User specified annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. */
  annotations?: Record<string, string>;
  /** Optional. Set of labels associated with an InsightsConfig. */
  labels?: Record<string, string>;
  /** Output only. Reconciling (https://google.aip.dev/128#reconciliation). Set to true if the current state of InsightsConfig does not match the user's intended state, and the service is actively updating the resource to reconcile them. This can happen due to user-triggered updates or system actions like failover or maintenance. */
  reconciling?: boolean;
  /** Output only. Any errors that occurred while setting up the InsightsConfig. Each error will be in the format: `field_name: error_message`, e.g. GetAppHubApplication: Permission denied while getting App Hub application. Please grant permissions to the P4SA. */
  errors?: ReadonlyArray<Status>;
}

export const InsightsConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  appHubApplication: Schema.optional(Schema.String),
  projects: Schema.optional(Projects),
  name: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
  runtimeConfigs: Schema.optional(Schema.Array(RuntimeConfig)),
  artifactConfigs: Schema.optional(Schema.Array(ArtifactConfig)),
  state: Schema.optional(Schema.String),
  annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  reconciling: Schema.optional(Schema.Boolean),
  errors: Schema.optional(Schema.Array(Status)),
}).annotate({ identifier: "InsightsConfig" });

export interface ListInsightsConfigsResponse {
  /** The list of InsightsConfigs. */
  insightsConfigs?: ReadonlyArray<InsightsConfig>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListInsightsConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    insightsConfigs: Schema.optional(Schema.Array(InsightsConfig)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListInsightsConfigsResponse" });

export interface ArtifactDeployment {
  /** Output only. Unique identifier of `ArtifactDeployment`. */
  id?: string;
  /** Output only. The artifact that is deployed. */
  artifactReference?: string;
  /** Output only. The artifact alias in the deployment spec, with Tag/SHA. e.g. us-docker.pkg.dev/my-project/my-repo/image:1.0.0 */
  artifactAlias?: string;
  /** Output only. The source commits at which this artifact was built. Extracted from provenance. */
  sourceCommitUris?: ReadonlyArray<string>;
  /** Output only. The time at which the deployment was deployed. */
  deployTime?: string;
  /** Output only. The time at which the deployment was undeployed, all artifacts are considered undeployed once this time is set. */
  undeployTime?: string;
  /** Output only. The summary of container status of the artifact deployment. Format as `ContainerStatusState-Reason : restartCount` e.g. "Waiting-ImagePullBackOff : 3" */
  containerStatusSummary?: string;
}

export const ArtifactDeployment = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  artifactReference: Schema.optional(Schema.String),
  artifactAlias: Schema.optional(Schema.String),
  sourceCommitUris: Schema.optional(Schema.Array(Schema.String)),
  deployTime: Schema.optional(Schema.String),
  undeployTime: Schema.optional(Schema.String),
  containerStatusSummary: Schema.optional(Schema.String),
}).annotate({ identifier: "ArtifactDeployment" });

export interface DeploymentEvent {
  /** Identifier. The name of the DeploymentEvent. This name is provided by Developer Connect insights. Format: projects/{project}/locations/{location}/insightsConfigs/{insights_config}/deploymentEvents/{uuid} */
  name?: string;
  /** Output only. The create time of the DeploymentEvent. */
  createTime?: string;
  /** Output only. The update time of the DeploymentEvent. */
  updateTime?: string;
  /** Output only. The runtime configurations where the DeploymentEvent happened. */
  runtimeConfig?: RuntimeConfig;
  /** Output only. The runtime assigned URI of the DeploymentEvent. For GKE, this is the fully qualified replica set uri. e.g. container.googleapis.com/projects/{project}/locations/{location}/clusters/{cluster}/k8s/namespaces/{namespace}/apps/replicasets/{replica-set-id} For Cloud Run, this is the revision name. */
  runtimeDeploymentUri?: string;
  /** Output only. The state of the DeploymentEvent. */
  state?:
    | "STATE_UNSPECIFIED"
    | "STATE_ACTIVE"
    | "STATE_INACTIVE"
    | (string & {});
  /** Output only. The artifact deployments of the DeploymentEvent. Each artifact deployment contains the artifact uri and the runtime configuration uri. For GKE, this would be all the containers images that are deployed in the pod. */
  artifactDeployments?: ReadonlyArray<ArtifactDeployment>;
  /** Output only. The time at which the DeploymentEvent was deployed. This would be the min of all ArtifactDeployment deploy_times. */
  deployTime?: string;
  /** Output only. The time at which the DeploymentEvent was undeployed, all artifacts are considered undeployed once this time is set. This would be the max of all ArtifactDeployment undeploy_times. If any ArtifactDeployment is still active (i.e. does not have an undeploy_time), this field will be empty. */
  undeployTime?: string;
}

export const DeploymentEvent = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
  runtimeConfig: Schema.optional(RuntimeConfig),
  runtimeDeploymentUri: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  artifactDeployments: Schema.optional(Schema.Array(ArtifactDeployment)),
  deployTime: Schema.optional(Schema.String),
  undeployTime: Schema.optional(Schema.String),
}).annotate({ identifier: "DeploymentEvent" });

export interface ListDeploymentEventsResponse {
  /** The list of DeploymentEvents. */
  deploymentEvents?: ReadonlyArray<DeploymentEvent>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListDeploymentEventsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deploymentEvents: Schema.optional(Schema.Array(DeploymentEvent)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDeploymentEventsResponse" });

export interface HttpBody {
  /** The HTTP Content-Type header value specifying the content type of the body. */
  contentType?: string;
  /** The HTTP request/response body as raw binary. */
  data?: string;
  /** Application specific response metadata. Must be set in the first response for streaming APIs. */
  extensions?: ReadonlyArray<Record<string, unknown>>;
}

export const HttpBody = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  contentType: Schema.optional(Schema.String),
  data: Schema.optional(Schema.String),
  extensions: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
}).annotate({ identifier: "HttpBody" });

export interface ProcessGitHubEnterpriseWebhookRequest {
  /** Required. HTTP request body. */
  body?: HttpBody;
}

export const ProcessGitHubEnterpriseWebhookRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(HttpBody),
  }).annotate({ identifier: "ProcessGitHubEnterpriseWebhookRequest" });

export interface ProcessGitLabEnterpriseWebhookRequest {
  /** Required. HTTP request body. */
  body?: HttpBody;
}

export const ProcessGitLabEnterpriseWebhookRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(HttpBody),
  }).annotate({ identifier: "ProcessGitLabEnterpriseWebhookRequest" });

export interface ProcessGitLabWebhookRequest {
  /** Required. HTTP request body. */
  body?: HttpBody;
}

export const ProcessGitLabWebhookRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(HttpBody),
  }).annotate({ identifier: "ProcessGitLabWebhookRequest" });

export interface ProcessBitbucketDataCenterWebhookRequest {
  /** Required. HTTP request body. */
  body?: HttpBody;
}

export const ProcessBitbucketDataCenterWebhookRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(HttpBody),
  }).annotate({ identifier: "ProcessBitbucketDataCenterWebhookRequest" });

export interface ProcessBitbucketCloudWebhookRequest {
  /** Required. HTTP request body. */
  body?: HttpBody;
}

export const ProcessBitbucketCloudWebhookRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(HttpBody),
  }).annotate({ identifier: "ProcessBitbucketCloudWebhookRequest" });

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

export const Location = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const ListLocationsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  locations: Schema.optional(Schema.Array(Location)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListLocationsResponse" });

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
  statusMessage?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
}

export const OperationMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  target: Schema.optional(Schema.String),
  verb: Schema.optional(Schema.String),
  statusMessage: Schema.optional(Schema.String),
  requestedCancellation: Schema.optional(Schema.Boolean),
  apiVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "OperationMetadata" });

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
  /** Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. */
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
    T.Http({ method: "GET", path: "v1/{name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the [ListLocationsRequest.name] field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRequest,
  output: ListProjectsLocationsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = Location;
export const GetProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Location;

export type GetProjectsLocationsError = DefaultErrors;

/** Gets information about a location. */
export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListProjectsLocationsOperationsError = DefaultErrors;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsOperationsRequest,
  ListProjectsLocationsOperationsResponse,
  ListProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = Operation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetProjectsLocationsOperationsError = DefaultErrors;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsOperations: API.OperationMethod<
  GetProjectsLocationsOperationsRequest,
  GetProjectsLocationsOperationsResponse,
  GetProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = Empty;
export const DeleteProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsOperationsError = DefaultErrors;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteProjectsLocationsOperations: API.OperationMethod<
  DeleteProjectsLocationsOperationsRequest,
  DeleteProjectsLocationsOperationsResponse,
  DeleteProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v1/{name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = Empty;
export const CancelProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelProjectsLocationsOperationsError = DefaultErrors;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelProjectsLocationsOperations: API.OperationMethod<
  CancelProjectsLocationsOperationsRequest,
  CancelProjectsLocationsOperationsResponse,
  CancelProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [],
}));

export interface ListProjectsLocationsConnectionsRequest {
  /** Required. Parent value for ListConnectionsRequest */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Filtering results */
  filter?: string;
  /** Optional. Hint for how to order the results */
  orderBy?: string;
}

export const ListProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/connections" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConnectionsRequest>;

export type ListProjectsLocationsConnectionsResponse = ListConnectionsResponse;
export const ListProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListConnectionsResponse;

export type ListProjectsLocationsConnectionsError = DefaultErrors;

/** Lists Connections in a given project and location. */
export const listProjectsLocationsConnections: API.PaginatedOperationMethod<
  ListProjectsLocationsConnectionsRequest,
  ListProjectsLocationsConnectionsResponse,
  ListProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConnectionsRequest,
  output: ListProjectsLocationsConnectionsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsConnectionsRequest {
  /** Required. Name of the resource */
  name: string;
}

export const GetProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConnectionsRequest>;

export type GetProjectsLocationsConnectionsResponse = Connection;
export const GetProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Connection;

export type GetProjectsLocationsConnectionsError = DefaultErrors;

/** Gets details of a single Connection. */
export const getProjectsLocationsConnections: API.OperationMethod<
  GetProjectsLocationsConnectionsRequest,
  GetProjectsLocationsConnectionsResponse,
  GetProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConnectionsRequest,
  output: GetProjectsLocationsConnectionsResponse,
  errors: [],
}));

export interface CreateProjectsLocationsConnectionsRequest {
  /** Required. Value for parent. */
  parent: string;
  /** Required. Id of the requesting object If auto-generating Id server-side, remove this field and connection_id from the method_signature of Create RPC */
  connectionId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
  /** Request body */
  body?: Connection;
}

export const CreateProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    connectionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("connectionId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Connection).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{parent}/connections", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConnectionsRequest>;

export type CreateProjectsLocationsConnectionsResponse = Operation;
export const CreateProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsConnectionsError = DefaultErrors;

/** Creates a new Connection in a given project and location. */
export const createProjectsLocationsConnections: API.OperationMethod<
  CreateProjectsLocationsConnectionsRequest,
  CreateProjectsLocationsConnectionsResponse,
  CreateProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConnectionsRequest,
  output: CreateProjectsLocationsConnectionsResponse,
  errors: [],
}));

export interface PatchProjectsLocationsConnectionsRequest {
  /** Identifier. The resource name of the connection, in the format `projects/{project}/locations/{location}/connections/{connection_id}`. */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the Connection resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to true, and the connection is not found a new connection will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input connection has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties). */
  allowMissing?: boolean;
  /** Optional. If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
  /** Request body */
  body?: Connection;
}

export const PatchProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Connection).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsConnectionsRequest>;

export type PatchProjectsLocationsConnectionsResponse = Operation;
export const PatchProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsConnectionsError = DefaultErrors;

/** Updates the parameters of a single Connection. */
export const patchProjectsLocationsConnections: API.OperationMethod<
  PatchProjectsLocationsConnectionsRequest,
  PatchProjectsLocationsConnectionsResponse,
  PatchProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsConnectionsRequest,
  output: PatchProjectsLocationsConnectionsResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsConnectionsRequest {
  /** Required. Name of the resource */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
  /** Optional. The current etag of the Connection. If an etag is provided and does not match the current etag of the Connection, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
}

export const DeleteProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsConnectionsRequest>;

export type DeleteProjectsLocationsConnectionsResponse = Operation;
export const DeleteProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsConnectionsError = DefaultErrors;

/** Deletes a single Connection. */
export const deleteProjectsLocationsConnections: API.OperationMethod<
  DeleteProjectsLocationsConnectionsRequest,
  DeleteProjectsLocationsConnectionsResponse,
  DeleteProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsConnectionsRequest,
  output: DeleteProjectsLocationsConnectionsResponse,
  errors: [],
}));

export interface FetchLinkableGitRepositoriesProjectsLocationsConnectionsRequest {
  /** Required. The name of the Connection. Format: `projects/* /locations/* /connections/*`. */
  connection: string;
  /** Optional. Number of results to return in the list. Defaults to 20. */
  pageSize?: number;
  /** Optional. Page start. */
  pageToken?: string;
}

export const FetchLinkableGitRepositoriesProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connection: Schema.String.pipe(T.HttpPath("connection")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{connection}:fetchLinkableGitRepositories",
    }),
    svc,
  ) as unknown as Schema.Schema<FetchLinkableGitRepositoriesProjectsLocationsConnectionsRequest>;

export type FetchLinkableGitRepositoriesProjectsLocationsConnectionsResponse =
  FetchLinkableGitRepositoriesResponse;
export const FetchLinkableGitRepositoriesProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchLinkableGitRepositoriesResponse;

export type FetchLinkableGitRepositoriesProjectsLocationsConnectionsError =
  DefaultErrors;

/** FetchLinkableGitRepositories returns a list of git repositories from an SCM that are available to be added to a Connection. */
export const fetchLinkableGitRepositoriesProjectsLocationsConnections: API.PaginatedOperationMethod<
  FetchLinkableGitRepositoriesProjectsLocationsConnectionsRequest,
  FetchLinkableGitRepositoriesProjectsLocationsConnectionsResponse,
  FetchLinkableGitRepositoriesProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: FetchLinkableGitRepositoriesProjectsLocationsConnectionsRequest,
  output: FetchLinkableGitRepositoriesProjectsLocationsConnectionsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v1/{connection}:fetchGitHubInstallations" }),
    svc,
  ) as unknown as Schema.Schema<FetchGitHubInstallationsProjectsLocationsConnectionsRequest>;

export type FetchGitHubInstallationsProjectsLocationsConnectionsResponse =
  FetchGitHubInstallationsResponse;
export const FetchGitHubInstallationsProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchGitHubInstallationsResponse;

export type FetchGitHubInstallationsProjectsLocationsConnectionsError =
  DefaultErrors;

/** FetchGitHubInstallations returns the list of GitHub Installations that are available to be added to a Connection. For github.com, only installations accessible to the authorizer token are returned. For GitHub Enterprise, all installations are returned. */
export const fetchGitHubInstallationsProjectsLocationsConnections: API.OperationMethod<
  FetchGitHubInstallationsProjectsLocationsConnectionsRequest,
  FetchGitHubInstallationsProjectsLocationsConnectionsResponse,
  FetchGitHubInstallationsProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchGitHubInstallationsProjectsLocationsConnectionsRequest,
  output: FetchGitHubInstallationsProjectsLocationsConnectionsResponse,
  errors: [],
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
      path: "v1/{parent}/connections:processGitHubEnterpriseWebhook",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ProcessGitHubEnterpriseWebhookProjectsLocationsConnectionsRequest>;

export type ProcessGitHubEnterpriseWebhookProjectsLocationsConnectionsResponse =
  Empty;
export const ProcessGitHubEnterpriseWebhookProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type ProcessGitHubEnterpriseWebhookProjectsLocationsConnectionsError =
  DefaultErrors;

/** ProcessGitHubEnterpriseWebhook is called by the external GitHub Enterprise instances for notifying events. */
export const processGitHubEnterpriseWebhookProjectsLocationsConnections: API.OperationMethod<
  ProcessGitHubEnterpriseWebhookProjectsLocationsConnectionsRequest,
  ProcessGitHubEnterpriseWebhookProjectsLocationsConnectionsResponse,
  ProcessGitHubEnterpriseWebhookProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ProcessGitHubEnterpriseWebhookProjectsLocationsConnectionsRequest,
  output: ProcessGitHubEnterpriseWebhookProjectsLocationsConnectionsResponse,
  errors: [],
}));

export interface CreateProjectsLocationsConnectionsGitRepositoryLinksRequest {
  /** Required. Value for parent. */
  parent: string;
  /** Required. The ID to use for the repository, which will become the final component of the repository's resource name. This ID should be unique in the connection. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@. */
  gitRepositoryLinkId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
  /** Request body */
  body?: GitRepositoryLink;
}

export const CreateProjectsLocationsConnectionsGitRepositoryLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    gitRepositoryLinkId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("gitRepositoryLinkId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GitRepositoryLink).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/gitRepositoryLinks",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConnectionsGitRepositoryLinksRequest>;

export type CreateProjectsLocationsConnectionsGitRepositoryLinksResponse =
  Operation;
export const CreateProjectsLocationsConnectionsGitRepositoryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsConnectionsGitRepositoryLinksError =
  DefaultErrors;

/** Creates a GitRepositoryLink. Upon linking a Git Repository, Developer Connect will configure the Git Repository to send webhook events to Developer Connect. Connections that use Firebase GitHub Application will have events forwarded to the Firebase service. Connections that use Gemini Code Assist will have events forwarded to Gemini Code Assist service. All other Connections will have events forwarded to Cloud Build. */
export const createProjectsLocationsConnectionsGitRepositoryLinks: API.OperationMethod<
  CreateProjectsLocationsConnectionsGitRepositoryLinksRequest,
  CreateProjectsLocationsConnectionsGitRepositoryLinksResponse,
  CreateProjectsLocationsConnectionsGitRepositoryLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConnectionsGitRepositoryLinksRequest,
  output: CreateProjectsLocationsConnectionsGitRepositoryLinksResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsConnectionsGitRepositoryLinksRequest {
  /** Required. Name of the resource */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
  /** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
}

export const DeleteProjectsLocationsConnectionsGitRepositoryLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsConnectionsGitRepositoryLinksRequest>;

export type DeleteProjectsLocationsConnectionsGitRepositoryLinksResponse =
  Operation;
export const DeleteProjectsLocationsConnectionsGitRepositoryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsConnectionsGitRepositoryLinksError =
  DefaultErrors;

/** Deletes a single GitRepositoryLink. */
export const deleteProjectsLocationsConnectionsGitRepositoryLinks: API.OperationMethod<
  DeleteProjectsLocationsConnectionsGitRepositoryLinksRequest,
  DeleteProjectsLocationsConnectionsGitRepositoryLinksResponse,
  DeleteProjectsLocationsConnectionsGitRepositoryLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsConnectionsGitRepositoryLinksRequest,
  output: DeleteProjectsLocationsConnectionsGitRepositoryLinksResponse,
  errors: [],
}));

export interface ListProjectsLocationsConnectionsGitRepositoryLinksRequest {
  /** Required. Parent value for ListGitRepositoryLinksRequest */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Filtering results */
  filter?: string;
  /** Optional. Hint for how to order the results */
  orderBy?: string;
}

export const ListProjectsLocationsConnectionsGitRepositoryLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/gitRepositoryLinks" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConnectionsGitRepositoryLinksRequest>;

export type ListProjectsLocationsConnectionsGitRepositoryLinksResponse =
  ListGitRepositoryLinksResponse;
export const ListProjectsLocationsConnectionsGitRepositoryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListGitRepositoryLinksResponse;

export type ListProjectsLocationsConnectionsGitRepositoryLinksError =
  DefaultErrors;

/** Lists GitRepositoryLinks in a given project, location, and connection. */
export const listProjectsLocationsConnectionsGitRepositoryLinks: API.PaginatedOperationMethod<
  ListProjectsLocationsConnectionsGitRepositoryLinksRequest,
  ListProjectsLocationsConnectionsGitRepositoryLinksResponse,
  ListProjectsLocationsConnectionsGitRepositoryLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConnectionsGitRepositoryLinksRequest,
  output: ListProjectsLocationsConnectionsGitRepositoryLinksResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsConnectionsGitRepositoryLinksRequest {
  /** Required. Name of the resource */
  name: string;
}

export const GetProjectsLocationsConnectionsGitRepositoryLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConnectionsGitRepositoryLinksRequest>;

export type GetProjectsLocationsConnectionsGitRepositoryLinksResponse =
  GitRepositoryLink;
export const GetProjectsLocationsConnectionsGitRepositoryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GitRepositoryLink;

export type GetProjectsLocationsConnectionsGitRepositoryLinksError =
  DefaultErrors;

/** Gets details of a single GitRepositoryLink. */
export const getProjectsLocationsConnectionsGitRepositoryLinks: API.OperationMethod<
  GetProjectsLocationsConnectionsGitRepositoryLinksRequest,
  GetProjectsLocationsConnectionsGitRepositoryLinksResponse,
  GetProjectsLocationsConnectionsGitRepositoryLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConnectionsGitRepositoryLinksRequest,
  output: GetProjectsLocationsConnectionsGitRepositoryLinksResponse,
  errors: [],
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
      path: "v1/{gitRepositoryLink}:fetchReadWriteToken",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<FetchReadWriteTokenProjectsLocationsConnectionsGitRepositoryLinksRequest>;

export type FetchReadWriteTokenProjectsLocationsConnectionsGitRepositoryLinksResponse =
  FetchReadWriteTokenResponse;
export const FetchReadWriteTokenProjectsLocationsConnectionsGitRepositoryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchReadWriteTokenResponse;

export type FetchReadWriteTokenProjectsLocationsConnectionsGitRepositoryLinksError =
  DefaultErrors;

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
  errors: [],
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
      path: "v1/{gitRepositoryLink}:fetchReadToken",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<FetchReadTokenProjectsLocationsConnectionsGitRepositoryLinksRequest>;

export type FetchReadTokenProjectsLocationsConnectionsGitRepositoryLinksResponse =
  FetchReadTokenResponse;
export const FetchReadTokenProjectsLocationsConnectionsGitRepositoryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchReadTokenResponse;

export type FetchReadTokenProjectsLocationsConnectionsGitRepositoryLinksError =
  DefaultErrors;

/** Fetches read token of a given gitRepositoryLink. */
export const fetchReadTokenProjectsLocationsConnectionsGitRepositoryLinks: API.OperationMethod<
  FetchReadTokenProjectsLocationsConnectionsGitRepositoryLinksRequest,
  FetchReadTokenProjectsLocationsConnectionsGitRepositoryLinksResponse,
  FetchReadTokenProjectsLocationsConnectionsGitRepositoryLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchReadTokenProjectsLocationsConnectionsGitRepositoryLinksRequest,
  output: FetchReadTokenProjectsLocationsConnectionsGitRepositoryLinksResponse,
  errors: [],
}));

export interface FetchGitRefsProjectsLocationsConnectionsGitRepositoryLinksRequest {
  /** Required. The resource name of GitRepositoryLink in the format `projects/* /locations/* /connections/* /gitRepositoryLinks/*`. */
  gitRepositoryLink: string;
  /** Required. Type of refs to fetch. */
  refType?: "REF_TYPE_UNSPECIFIED" | "TAG" | "BRANCH" | (string & {});
  /** Optional. Number of results to return in the list. Default to 20. */
  pageSize?: number;
  /** Optional. Page start. */
  pageToken?: string;
}

export const FetchGitRefsProjectsLocationsConnectionsGitRepositoryLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gitRepositoryLink: Schema.String.pipe(T.HttpPath("gitRepositoryLink")),
    refType: Schema.optional(Schema.String).pipe(T.HttpQuery("refType")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{gitRepositoryLink}:fetchGitRefs" }),
    svc,
  ) as unknown as Schema.Schema<FetchGitRefsProjectsLocationsConnectionsGitRepositoryLinksRequest>;

export type FetchGitRefsProjectsLocationsConnectionsGitRepositoryLinksResponse =
  FetchGitRefsResponse;
export const FetchGitRefsProjectsLocationsConnectionsGitRepositoryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchGitRefsResponse;

export type FetchGitRefsProjectsLocationsConnectionsGitRepositoryLinksError =
  DefaultErrors;

/** Fetch the list of branches or tags for a given repository. */
export const fetchGitRefsProjectsLocationsConnectionsGitRepositoryLinks: API.PaginatedOperationMethod<
  FetchGitRefsProjectsLocationsConnectionsGitRepositoryLinksRequest,
  FetchGitRefsProjectsLocationsConnectionsGitRepositoryLinksResponse,
  FetchGitRefsProjectsLocationsConnectionsGitRepositoryLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: FetchGitRefsProjectsLocationsConnectionsGitRepositoryLinksRequest,
  output: FetchGitRefsProjectsLocationsConnectionsGitRepositoryLinksResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
      path: "v1/{name}:processGitLabEnterpriseWebhook",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ProcessGitLabEnterpriseWebhookProjectsLocationsConnectionsGitRepositoryLinksRequest>;

export type ProcessGitLabEnterpriseWebhookProjectsLocationsConnectionsGitRepositoryLinksResponse =
  Empty;
export const ProcessGitLabEnterpriseWebhookProjectsLocationsConnectionsGitRepositoryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type ProcessGitLabEnterpriseWebhookProjectsLocationsConnectionsGitRepositoryLinksError =
  DefaultErrors;

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
  errors: [],
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
      path: "v1/{name}:processGitLabWebhook",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ProcessGitLabWebhookProjectsLocationsConnectionsGitRepositoryLinksRequest>;

export type ProcessGitLabWebhookProjectsLocationsConnectionsGitRepositoryLinksResponse =
  Empty;
export const ProcessGitLabWebhookProjectsLocationsConnectionsGitRepositoryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type ProcessGitLabWebhookProjectsLocationsConnectionsGitRepositoryLinksError =
  DefaultErrors;

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
  errors: [],
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
      path: "v1/{name}:processBitbucketDataCenterWebhook",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ProcessBitbucketDataCenterWebhookProjectsLocationsConnectionsGitRepositoryLinksRequest>;

export type ProcessBitbucketDataCenterWebhookProjectsLocationsConnectionsGitRepositoryLinksResponse =
  Empty;
export const ProcessBitbucketDataCenterWebhookProjectsLocationsConnectionsGitRepositoryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type ProcessBitbucketDataCenterWebhookProjectsLocationsConnectionsGitRepositoryLinksError =
  DefaultErrors;

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
  errors: [],
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
      path: "v1/{name}:processBitbucketCloudWebhook",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ProcessBitbucketCloudWebhookProjectsLocationsConnectionsGitRepositoryLinksRequest>;

export type ProcessBitbucketCloudWebhookProjectsLocationsConnectionsGitRepositoryLinksResponse =
  Empty;
export const ProcessBitbucketCloudWebhookProjectsLocationsConnectionsGitRepositoryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type ProcessBitbucketCloudWebhookProjectsLocationsConnectionsGitRepositoryLinksError =
  DefaultErrors;

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
  errors: [],
}));

export interface ListProjectsLocationsAccountConnectorsRequest {
  /** Required. Parent value for ListAccountConnectorsRequest */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Filtering results */
  filter?: string;
  /** Optional. Hint for how to order the results */
  orderBy?: string;
}

export const ListProjectsLocationsAccountConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/accountConnectors" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAccountConnectorsRequest>;

export type ListProjectsLocationsAccountConnectorsResponse =
  ListAccountConnectorsResponse;
export const ListProjectsLocationsAccountConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAccountConnectorsResponse;

export type ListProjectsLocationsAccountConnectorsError = DefaultErrors;

/** Lists AccountConnectors in a given project and location. */
export const listProjectsLocationsAccountConnectors: API.PaginatedOperationMethod<
  ListProjectsLocationsAccountConnectorsRequest,
  ListProjectsLocationsAccountConnectorsResponse,
  ListProjectsLocationsAccountConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAccountConnectorsRequest,
  output: ListProjectsLocationsAccountConnectorsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsAccountConnectorsRequest {
  /** Required. Name of the resource */
  name: string;
}

export const GetProjectsLocationsAccountConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAccountConnectorsRequest>;

export type GetProjectsLocationsAccountConnectorsResponse = AccountConnector;
export const GetProjectsLocationsAccountConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AccountConnector;

export type GetProjectsLocationsAccountConnectorsError = DefaultErrors;

/** Gets details of a single AccountConnector. */
export const getProjectsLocationsAccountConnectors: API.OperationMethod<
  GetProjectsLocationsAccountConnectorsRequest,
  GetProjectsLocationsAccountConnectorsResponse,
  GetProjectsLocationsAccountConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAccountConnectorsRequest,
  output: GetProjectsLocationsAccountConnectorsResponse,
  errors: [],
}));

export interface CreateProjectsLocationsAccountConnectorsRequest {
  /** Required. Location resource name as the account_connector’s parent. */
  parent: string;
  /** Required. The ID to use for the AccountConnector, which will become the final component of the AccountConnector's resource name. Its format should adhere to https://google.aip.dev/122#resource-id-segments Names must be unique per-project per-location. */
  accountConnectorId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
  /** Request body */
  body?: AccountConnector;
}

export const CreateProjectsLocationsAccountConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    accountConnectorId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("accountConnectorId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(AccountConnector).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/accountConnectors",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAccountConnectorsRequest>;

export type CreateProjectsLocationsAccountConnectorsResponse = Operation;
export const CreateProjectsLocationsAccountConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsAccountConnectorsError = DefaultErrors;

/** Creates a new AccountConnector in a given project and location. */
export const createProjectsLocationsAccountConnectors: API.OperationMethod<
  CreateProjectsLocationsAccountConnectorsRequest,
  CreateProjectsLocationsAccountConnectorsResponse,
  CreateProjectsLocationsAccountConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAccountConnectorsRequest,
  output: CreateProjectsLocationsAccountConnectorsResponse,
  errors: [],
}));

export interface PatchProjectsLocationsAccountConnectorsRequest {
  /** Identifier. The resource name of the accountConnector, in the format `projects/{project}/locations/{location}/accountConnectors/{account_connector_id}`. */
  name: string;
  /** Optional. The list of fields to be updated. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to true, and the accountConnector is not found a new accountConnector will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input accountConnector has all the necessary */
  allowMissing?: boolean;
  /** Optional. If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
  /** Request body */
  body?: AccountConnector;
}

export const PatchProjectsLocationsAccountConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(AccountConnector).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAccountConnectorsRequest>;

export type PatchProjectsLocationsAccountConnectorsResponse = Operation;
export const PatchProjectsLocationsAccountConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsAccountConnectorsError = DefaultErrors;

/** Updates the parameters of a single AccountConnector. */
export const patchProjectsLocationsAccountConnectors: API.OperationMethod<
  PatchProjectsLocationsAccountConnectorsRequest,
  PatchProjectsLocationsAccountConnectorsResponse,
  PatchProjectsLocationsAccountConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAccountConnectorsRequest,
  output: PatchProjectsLocationsAccountConnectorsResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsAccountConnectorsRequest {
  /** Required. Name of the resource */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
  /** Optional. The current etag of the AccountConnectorn. If an etag is provided and does not match the current etag of the AccountConnector, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
  /** Optional. If set to true, any Users from this AccountConnector will also be deleted. (Otherwise, the request will only work if the AccountConnector has no Users.) */
  force?: boolean;
}

export const DeleteProjectsLocationsAccountConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAccountConnectorsRequest>;

export type DeleteProjectsLocationsAccountConnectorsResponse = Operation;
export const DeleteProjectsLocationsAccountConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsAccountConnectorsError = DefaultErrors;

/** Deletes a single AccountConnector. */
export const deleteProjectsLocationsAccountConnectors: API.OperationMethod<
  DeleteProjectsLocationsAccountConnectorsRequest,
  DeleteProjectsLocationsAccountConnectorsResponse,
  DeleteProjectsLocationsAccountConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAccountConnectorsRequest,
  output: DeleteProjectsLocationsAccountConnectorsResponse,
  errors: [],
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
      path: "v1/{accountConnector}:fetchUserRepositories",
    }),
    svc,
  ) as unknown as Schema.Schema<FetchUserRepositoriesProjectsLocationsAccountConnectorsRequest>;

export type FetchUserRepositoriesProjectsLocationsAccountConnectorsResponse =
  FetchUserRepositoriesResponse;
export const FetchUserRepositoriesProjectsLocationsAccountConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchUserRepositoriesResponse;

export type FetchUserRepositoriesProjectsLocationsAccountConnectorsError =
  DefaultErrors;

/** FetchUserRepositories returns a list of UserRepos that are available for an account connector resource. */
export const fetchUserRepositoriesProjectsLocationsAccountConnectors: API.PaginatedOperationMethod<
  FetchUserRepositoriesProjectsLocationsAccountConnectorsRequest,
  FetchUserRepositoriesProjectsLocationsAccountConnectorsResponse,
  FetchUserRepositoriesProjectsLocationsAccountConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: FetchUserRepositoriesProjectsLocationsAccountConnectorsRequest,
  output: FetchUserRepositoriesProjectsLocationsAccountConnectorsResponse,
  errors: [],
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
      path: "v1/{accountConnector}/users:fetchAccessToken",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<FetchAccessTokenProjectsLocationsAccountConnectorsUsersRequest>;

export type FetchAccessTokenProjectsLocationsAccountConnectorsUsersResponse =
  FetchAccessTokenResponse;
export const FetchAccessTokenProjectsLocationsAccountConnectorsUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchAccessTokenResponse;

export type FetchAccessTokenProjectsLocationsAccountConnectorsUsersError =
  DefaultErrors;

/** Fetches OAuth access token based on end user credentials. */
export const fetchAccessTokenProjectsLocationsAccountConnectorsUsers: API.OperationMethod<
  FetchAccessTokenProjectsLocationsAccountConnectorsUsersRequest,
  FetchAccessTokenProjectsLocationsAccountConnectorsUsersResponse,
  FetchAccessTokenProjectsLocationsAccountConnectorsUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchAccessTokenProjectsLocationsAccountConnectorsUsersRequest,
  output: FetchAccessTokenProjectsLocationsAccountConnectorsUsersResponse,
  errors: [],
}));

export interface ListProjectsLocationsAccountConnectorsUsersRequest {
  /** Required. Parent value for ListUsersRequest */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Filtering results */
  filter?: string;
  /** Optional. Hint for how to order the results */
  orderBy?: string;
}

export const ListProjectsLocationsAccountConnectorsUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/users" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAccountConnectorsUsersRequest>;

export type ListProjectsLocationsAccountConnectorsUsersResponse =
  ListUsersResponse;
export const ListProjectsLocationsAccountConnectorsUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListUsersResponse;

export type ListProjectsLocationsAccountConnectorsUsersError = DefaultErrors;

/** Lists Users in a given project, location, and account_connector. */
export const listProjectsLocationsAccountConnectorsUsers: API.PaginatedOperationMethod<
  ListProjectsLocationsAccountConnectorsUsersRequest,
  ListProjectsLocationsAccountConnectorsUsersResponse,
  ListProjectsLocationsAccountConnectorsUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAccountConnectorsUsersRequest,
  output: ListProjectsLocationsAccountConnectorsUsersResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAccountConnectorsUsersRequest {
  /** Required. Name of the resource */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
  /** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
}

export const DeleteProjectsLocationsAccountConnectorsUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAccountConnectorsUsersRequest>;

export type DeleteProjectsLocationsAccountConnectorsUsersResponse = Operation;
export const DeleteProjectsLocationsAccountConnectorsUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsAccountConnectorsUsersError = DefaultErrors;

/** Deletes a single User. */
export const deleteProjectsLocationsAccountConnectorsUsers: API.OperationMethod<
  DeleteProjectsLocationsAccountConnectorsUsersRequest,
  DeleteProjectsLocationsAccountConnectorsUsersResponse,
  DeleteProjectsLocationsAccountConnectorsUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAccountConnectorsUsersRequest,
  output: DeleteProjectsLocationsAccountConnectorsUsersResponse,
  errors: [],
}));

export interface FetchSelfProjectsLocationsAccountConnectorsUsersRequest {
  /** Required. Name of the AccountConnector resource */
  name: string;
}

export const FetchSelfProjectsLocationsAccountConnectorsUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}/users:fetchSelf" }),
    svc,
  ) as unknown as Schema.Schema<FetchSelfProjectsLocationsAccountConnectorsUsersRequest>;

export type FetchSelfProjectsLocationsAccountConnectorsUsersResponse = User;
export const FetchSelfProjectsLocationsAccountConnectorsUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ User;

export type FetchSelfProjectsLocationsAccountConnectorsUsersError =
  DefaultErrors;

/** Fetch the User based on the user credentials. */
export const fetchSelfProjectsLocationsAccountConnectorsUsers: API.OperationMethod<
  FetchSelfProjectsLocationsAccountConnectorsUsersRequest,
  FetchSelfProjectsLocationsAccountConnectorsUsersResponse,
  FetchSelfProjectsLocationsAccountConnectorsUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchSelfProjectsLocationsAccountConnectorsUsersRequest,
  output: FetchSelfProjectsLocationsAccountConnectorsUsersResponse,
  errors: [],
}));

export interface DeleteSelfProjectsLocationsAccountConnectorsUsersRequest {
  /** Required. Name of the AccountConnector resource */
  name: string;
}

export const DeleteSelfProjectsLocationsAccountConnectorsUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}/users:deleteSelf" }),
    svc,
  ) as unknown as Schema.Schema<DeleteSelfProjectsLocationsAccountConnectorsUsersRequest>;

export type DeleteSelfProjectsLocationsAccountConnectorsUsersResponse =
  Operation;
export const DeleteSelfProjectsLocationsAccountConnectorsUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteSelfProjectsLocationsAccountConnectorsUsersError =
  DefaultErrors;

/** Delete the User based on the user credentials. */
export const deleteSelfProjectsLocationsAccountConnectorsUsers: API.OperationMethod<
  DeleteSelfProjectsLocationsAccountConnectorsUsersRequest,
  DeleteSelfProjectsLocationsAccountConnectorsUsersResponse,
  DeleteSelfProjectsLocationsAccountConnectorsUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteSelfProjectsLocationsAccountConnectorsUsersRequest,
  output: DeleteSelfProjectsLocationsAccountConnectorsUsersResponse,
  errors: [],
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
      path: "v1/{accountConnector}/users:startOAuthFlow",
    }),
    svc,
  ) as unknown as Schema.Schema<StartOAuthFlowProjectsLocationsAccountConnectorsUsersRequest>;

export type StartOAuthFlowProjectsLocationsAccountConnectorsUsersResponse =
  StartOAuthResponse;
export const StartOAuthFlowProjectsLocationsAccountConnectorsUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ StartOAuthResponse;

export type StartOAuthFlowProjectsLocationsAccountConnectorsUsersError =
  DefaultErrors;

/** Starts OAuth flow for an account connector. */
export const startOAuthFlowProjectsLocationsAccountConnectorsUsers: API.OperationMethod<
  StartOAuthFlowProjectsLocationsAccountConnectorsUsersRequest,
  StartOAuthFlowProjectsLocationsAccountConnectorsUsersResponse,
  StartOAuthFlowProjectsLocationsAccountConnectorsUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartOAuthFlowProjectsLocationsAccountConnectorsUsersRequest,
  output: StartOAuthFlowProjectsLocationsAccountConnectorsUsersResponse,
  errors: [],
}));

export interface FinishOAuthFlowProjectsLocationsAccountConnectorsUsersRequest {
  /** Required. The resource name of the AccountConnector in the format `projects/* /locations/* /accountConnectors/*`. */
  accountConnector: string;
  /** Required. The code to be used for getting the token from SCM provider. */
  "oauthParams.code"?: string;
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
    accountConnector: Schema.String.pipe(T.HttpPath("accountConnector")),
    "oauthParams.code": Schema.optional(Schema.String).pipe(
      T.HttpQuery("oauthParams.code"),
    ),
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
      path: "v1/{accountConnector}/users:finishOAuthFlow",
    }),
    svc,
  ) as unknown as Schema.Schema<FinishOAuthFlowProjectsLocationsAccountConnectorsUsersRequest>;

export type FinishOAuthFlowProjectsLocationsAccountConnectorsUsersResponse =
  FinishOAuthResponse;
export const FinishOAuthFlowProjectsLocationsAccountConnectorsUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ FinishOAuthResponse;

export type FinishOAuthFlowProjectsLocationsAccountConnectorsUsersError =
  DefaultErrors;

/** Finishes OAuth flow for an account connector. */
export const finishOAuthFlowProjectsLocationsAccountConnectorsUsers: API.OperationMethod<
  FinishOAuthFlowProjectsLocationsAccountConnectorsUsersRequest,
  FinishOAuthFlowProjectsLocationsAccountConnectorsUsersResponse,
  FinishOAuthFlowProjectsLocationsAccountConnectorsUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FinishOAuthFlowProjectsLocationsAccountConnectorsUsersRequest,
  output: FinishOAuthFlowProjectsLocationsAccountConnectorsUsersResponse,
  errors: [],
}));

export interface ListProjectsLocationsInsightsConfigsRequest {
  /** Required. Parent value for ListInsightsConfigsRequest. */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Filtering results. See https://google.aip.dev/160 for more details. Filter string, adhering to the rules in https://google.aip.dev/160. List only InsightsConfigs matching the filter. If filter is empty, all InsightsConfigs are listed. */
  filter?: string;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
}

export const ListProjectsLocationsInsightsConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/insightsConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsInsightsConfigsRequest>;

export type ListProjectsLocationsInsightsConfigsResponse =
  ListInsightsConfigsResponse;
export const ListProjectsLocationsInsightsConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListInsightsConfigsResponse;

export type ListProjectsLocationsInsightsConfigsError = DefaultErrors;

/** Lists InsightsConfigs in a given project and location. */
export const listProjectsLocationsInsightsConfigs: API.PaginatedOperationMethod<
  ListProjectsLocationsInsightsConfigsRequest,
  ListProjectsLocationsInsightsConfigsResponse,
  ListProjectsLocationsInsightsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsInsightsConfigsRequest,
  output: ListProjectsLocationsInsightsConfigsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsInsightsConfigsRequest {
  /** Required. Value for parent. */
  parent: string;
  /** Required. ID of the requesting InsightsConfig. */
  insightsConfigId?: string;
  /** Optional. If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
  /** Request body */
  body?: InsightsConfig;
}

export const CreateProjectsLocationsInsightsConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    insightsConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("insightsConfigId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(InsightsConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/insightsConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsInsightsConfigsRequest>;

export type CreateProjectsLocationsInsightsConfigsResponse = Operation;
export const CreateProjectsLocationsInsightsConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsInsightsConfigsError = DefaultErrors;

/** Creates a new InsightsConfig in a given project and location. */
export const createProjectsLocationsInsightsConfigs: API.OperationMethod<
  CreateProjectsLocationsInsightsConfigsRequest,
  CreateProjectsLocationsInsightsConfigsResponse,
  CreateProjectsLocationsInsightsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsInsightsConfigsRequest,
  output: CreateProjectsLocationsInsightsConfigsResponse,
  errors: [],
}));

export interface GetProjectsLocationsInsightsConfigsRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsInsightsConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsInsightsConfigsRequest>;

export type GetProjectsLocationsInsightsConfigsResponse = InsightsConfig;
export const GetProjectsLocationsInsightsConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ InsightsConfig;

export type GetProjectsLocationsInsightsConfigsError = DefaultErrors;

/** Gets details of a single Insight. */
export const getProjectsLocationsInsightsConfigs: API.OperationMethod<
  GetProjectsLocationsInsightsConfigsRequest,
  GetProjectsLocationsInsightsConfigsResponse,
  GetProjectsLocationsInsightsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsInsightsConfigsRequest,
  output: GetProjectsLocationsInsightsConfigsResponse,
  errors: [],
}));

export interface PatchProjectsLocationsInsightsConfigsRequest {
  /** Identifier. The name of the InsightsConfig. Format: projects/{project}/locations/{location}/insightsConfigs/{insightsConfig} */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to true, and the insightsConfig is not found a new insightsConfig will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input insightsConfig has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties). */
  allowMissing?: boolean;
  /** Optional. If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
  /** Request body */
  body?: InsightsConfig;
}

export const PatchProjectsLocationsInsightsConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(InsightsConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsInsightsConfigsRequest>;

export type PatchProjectsLocationsInsightsConfigsResponse = Operation;
export const PatchProjectsLocationsInsightsConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsInsightsConfigsError = DefaultErrors;

/** Updates the parameters of a single InsightsConfig. */
export const patchProjectsLocationsInsightsConfigs: API.OperationMethod<
  PatchProjectsLocationsInsightsConfigsRequest,
  PatchProjectsLocationsInsightsConfigsResponse,
  PatchProjectsLocationsInsightsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsInsightsConfigsRequest,
  output: PatchProjectsLocationsInsightsConfigsResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsInsightsConfigsRequest {
  /** Required. Value for parent. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set, validate the request, but do not actually post it. */
  validateOnly?: boolean;
  /** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
}

export const DeleteProjectsLocationsInsightsConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsInsightsConfigsRequest>;

export type DeleteProjectsLocationsInsightsConfigsResponse = Operation;
export const DeleteProjectsLocationsInsightsConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsInsightsConfigsError = DefaultErrors;

/** Deletes a single Insight. */
export const deleteProjectsLocationsInsightsConfigs: API.OperationMethod<
  DeleteProjectsLocationsInsightsConfigsRequest,
  DeleteProjectsLocationsInsightsConfigsResponse,
  DeleteProjectsLocationsInsightsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsInsightsConfigsRequest,
  output: DeleteProjectsLocationsInsightsConfigsResponse,
  errors: [],
}));

export interface GetProjectsLocationsInsightsConfigsDeploymentEventsRequest {
  /** Required. The name of the deployment event to retrieve. Format: projects/{project}/locations/{location}/insightsConfigs/{insights_config}/deploymentEvents/{uuid} */
  name: string;
}

export const GetProjectsLocationsInsightsConfigsDeploymentEventsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsInsightsConfigsDeploymentEventsRequest>;

export type GetProjectsLocationsInsightsConfigsDeploymentEventsResponse =
  DeploymentEvent;
export const GetProjectsLocationsInsightsConfigsDeploymentEventsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DeploymentEvent;

export type GetProjectsLocationsInsightsConfigsDeploymentEventsError =
  DefaultErrors;

/** Gets a single Deployment Event. */
export const getProjectsLocationsInsightsConfigsDeploymentEvents: API.OperationMethod<
  GetProjectsLocationsInsightsConfigsDeploymentEventsRequest,
  GetProjectsLocationsInsightsConfigsDeploymentEventsResponse,
  GetProjectsLocationsInsightsConfigsDeploymentEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsInsightsConfigsDeploymentEventsRequest,
  output: GetProjectsLocationsInsightsConfigsDeploymentEventsResponse,
  errors: [],
}));

export interface ListProjectsLocationsInsightsConfigsDeploymentEventsRequest {
  /** Required. The parent insights config that owns this collection of deployment events. Format: projects/{project}/locations/{location}/insightsConfigs/{insights_config} */
  parent: string;
  /** Optional. The maximum number of deployment events to return. The service may return fewer than this value. If unspecified, at most 50 deployment events will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListDeploymentEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDeploymentEvents` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filter expression that matches a subset of the DeploymentEvents. https://google.aip.dev/160. */
  filter?: string;
}

export const ListProjectsLocationsInsightsConfigsDeploymentEventsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/deploymentEvents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsInsightsConfigsDeploymentEventsRequest>;

export type ListProjectsLocationsInsightsConfigsDeploymentEventsResponse =
  ListDeploymentEventsResponse;
export const ListProjectsLocationsInsightsConfigsDeploymentEventsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDeploymentEventsResponse;

export type ListProjectsLocationsInsightsConfigsDeploymentEventsError =
  DefaultErrors;

/** Lists Deployment Events in a given insights config. */
export const listProjectsLocationsInsightsConfigsDeploymentEvents: API.PaginatedOperationMethod<
  ListProjectsLocationsInsightsConfigsDeploymentEventsRequest,
  ListProjectsLocationsInsightsConfigsDeploymentEventsResponse,
  ListProjectsLocationsInsightsConfigsDeploymentEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsInsightsConfigsDeploymentEventsRequest,
  output: ListProjectsLocationsInsightsConfigsDeploymentEventsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
