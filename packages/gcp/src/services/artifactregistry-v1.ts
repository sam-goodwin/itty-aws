// ==========================================================================
// Artifact Registry API (artifactregistry v1)
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
  name: "artifactregistry",
  version: "v1",
  rootUrl: "https://artifactregistry.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface MavenArtifact {
  /** Required. URL to access the pom file of the artifact. Example: us-west4-maven.pkg.dev/test-project/test-repo/com/google/guava/guava/31.0/guava-31.0.pom */
  pomUri?: string;
  /** Output only. Time the artifact was updated. */
  updateTime?: string;
  /** Version of this artifact. */
  version?: string;
  /** Output only. Time the artifact was created. */
  createTime?: string;
  /** Group ID for the artifact. Example: com.google.guava */
  groupId?: string;
  /** Required. registry_location, project_id, repository_name and maven_artifact forms a unique artifact For example, "projects/test-project/locations/us-west4/repositories/test-repo/mavenArtifacts/ com.google.guava:guava:31.0-jre", where "us-west4" is the registry_location, "test-project" is the project_id, "test-repo" is the repository_name and "com.google.guava:guava:31.0-jre" is the maven artifact. */
  name?: string;
  /** Artifact ID for the artifact. */
  artifactId?: string;
}

export const MavenArtifact: Schema.Schema<MavenArtifact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pomUri: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    groupId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    artifactId: Schema.optional(Schema.String),
  }).annotate({ identifier: "MavenArtifact" });

export interface CleanupPolicyCondition {
  /** Match versions by tag prefix. Applied on any prefix match. */
  tagPrefixes?: ReadonlyArray<string>;
  /** Match versions by version name prefix. Applied on any prefix match. */
  versionNamePrefixes?: ReadonlyArray<string>;
  /** Match versions older than a duration. */
  olderThan?: string;
  /** Match versions by tag status. */
  tagState?:
    | "TAG_STATE_UNSPECIFIED"
    | "TAGGED"
    | "UNTAGGED"
    | "ANY"
    | (string & {});
  /** Match versions by package prefix. Applied on any prefix match. */
  packageNamePrefixes?: ReadonlyArray<string>;
  /** Match versions newer than a duration. */
  newerThan?: string;
}

export const CleanupPolicyCondition: Schema.Schema<CleanupPolicyCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tagPrefixes: Schema.optional(Schema.Array(Schema.String)),
    versionNamePrefixes: Schema.optional(Schema.Array(Schema.String)),
    olderThan: Schema.optional(Schema.String),
    tagState: Schema.optional(Schema.String),
    packageNamePrefixes: Schema.optional(Schema.Array(Schema.String)),
    newerThan: Schema.optional(Schema.String),
  }).annotate({ identifier: "CleanupPolicyCondition" });

export interface CleanupPolicyMostRecentVersions {
  /** Minimum number of versions to keep. */
  keepCount?: number;
  /** List of package name prefixes that will apply this rule. */
  packageNamePrefixes?: ReadonlyArray<string>;
}

export const CleanupPolicyMostRecentVersions: Schema.Schema<CleanupPolicyMostRecentVersions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keepCount: Schema.optional(Schema.Number),
    packageNamePrefixes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CleanupPolicyMostRecentVersions" });

export interface CleanupPolicy {
  /** Policy condition for matching versions. */
  condition?: CleanupPolicyCondition;
  /** Policy action. */
  action?: "ACTION_UNSPECIFIED" | "DELETE" | "KEEP" | (string & {});
  /** The user-provided ID of the cleanup policy. */
  id?: string;
  /** Policy condition for retaining a minimum number of versions. May only be specified with a Keep action. */
  mostRecentVersions?: CleanupPolicyMostRecentVersions;
}

export const CleanupPolicy: Schema.Schema<CleanupPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    condition: Schema.optional(CleanupPolicyCondition),
    action: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    mostRecentVersions: Schema.optional(CleanupPolicyMostRecentVersions),
  }).annotate({ identifier: "CleanupPolicy" });

export interface GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigDockerRepositoryCustomRepository {
  /** An http/https uri reference to the custom remote repository, for ex: "https://registry-1.docker.io". */
  uri?: string;
}

export const GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigDockerRepositoryCustomRepository: Schema.Schema<GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigDockerRepositoryCustomRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigDockerRepositoryCustomRepository",
  });

export interface GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigNpmRepositoryCustomRepository {
  /** An http/https uri reference to the upstream remote repository, for ex: "https://my.npm.registry/". */
  uri?: string;
}

export const GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigNpmRepositoryCustomRepository: Schema.Schema<GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigNpmRepositoryCustomRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigNpmRepositoryCustomRepository",
  });

export interface UploadGenericArtifactRequest {
  /** The ID of the package of the generic artifact. If the package does not exist, a new package will be created. The `package_id` should start and end with a letter or number, only contain letters, numbers, hyphens, underscores, and periods, and not exceed 256 characters. */
  packageId?: string;
  /** The ID of the version of the generic artifact. If the version does not exist, a new version will be created. The version_id must start and end with a letter or number, can only contain lowercase letters, numbers, the following characters [-.+~:], i.e.[a-z0-9-.+~:] and cannot exceed a total of 128 characters. Creating a version called `latest` is not allowed. */
  versionId?: string;
  /** The name of the file of the generic artifact to be uploaded. E.g. `example-file.zip` The filename is limited to letters, numbers, and url safe characters, i.e. [a-zA-Z0-9-_.~@]. */
  filename?: string;
}

export const UploadGenericArtifactRequest: Schema.Schema<UploadGenericArtifactRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageId: Schema.optional(Schema.String),
    versionId: Schema.optional(Schema.String),
    filename: Schema.optional(Schema.String),
  }).annotate({ identifier: "UploadGenericArtifactRequest" });

export interface Expr {
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
}

export const Expr: Schema.Schema<Expr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    expression: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface GoogleDevtoolsArtifactregistryV1Rule {
  /** The action this rule takes. */
  action?: "ACTION_UNSPECIFIED" | "ALLOW" | "DENY" | (string & {});
  operation?: "OPERATION_UNSPECIFIED" | "DOWNLOAD" | (string & {});
  /** Optional. A CEL expression for conditions that must be met in order for the rule to apply. If not provided, the rule matches all objects. */
  condition?: Expr;
  /** The name of the rule, for example: `projects/p1/locations/us-central1/repositories/repo1/rules/rule1`. */
  name?: string;
  /** The package ID the rule applies to. If empty, this rule applies to all packages inside the repository. */
  packageId?: string;
}

export const GoogleDevtoolsArtifactregistryV1Rule: Schema.Schema<GoogleDevtoolsArtifactregistryV1Rule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    condition: Schema.optional(Expr),
    name: Schema.optional(Schema.String),
    packageId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsArtifactregistryV1Rule" });

export interface GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepository {
  /** A common public repository base for Apt. */
  repositoryBase?:
    | "REPOSITORY_BASE_UNSPECIFIED"
    | "DEBIAN"
    | "UBUNTU"
    | "DEBIAN_SNAPSHOT"
    | (string & {});
  /** A custom field to define a path to a specific repository from the base. */
  repositoryPath?: string;
}

export const GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepository: Schema.Schema<GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repositoryBase: Schema.optional(Schema.String),
    repositoryPath: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepository",
  });

export interface ImportAptArtifactsGcsSource {
  /** Cloud Storage paths URI (e.g., gs://my_bucket//my_object). */
  uris?: ReadonlyArray<string>;
  /** Supports URI wildcards for matching multiple objects from a single URI. */
  useWildcards?: boolean;
}

export const ImportAptArtifactsGcsSource: Schema.Schema<ImportAptArtifactsGcsSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uris: Schema.optional(Schema.Array(Schema.String)),
    useWildcards: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ImportAptArtifactsGcsSource" });

export interface ImportAptArtifactsRequest {
  /** Google Cloud Storage location where input content is located. */
  gcsSource?: ImportAptArtifactsGcsSource;
}

export const ImportAptArtifactsRequest: Schema.Schema<ImportAptArtifactsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsSource: Schema.optional(ImportAptArtifactsGcsSource),
  }).annotate({ identifier: "ImportAptArtifactsRequest" });

export interface Binding {
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
}

export const Binding: Schema.Schema<Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    condition: Schema.optional(Expr),
    role: Schema.optional(Schema.String),
    members: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Binding" });

export interface Policy {
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
}

export const Policy: Schema.Schema<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.Number),
    bindings: Schema.optional(Schema.Array(Binding)),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "Policy" });

export interface SetIamPolicyRequest {
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: Policy;
}

export const SetIamPolicyRequest: Schema.Schema<SetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Policy),
  }).annotate({ identifier: "SetIamPolicyRequest" });

export interface ImportAptArtifactsMetadata {}

export const ImportAptArtifactsMetadata: Schema.Schema<ImportAptArtifactsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ImportAptArtifactsMetadata",
  });

export interface Status {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Operation" });

export interface UploadKfpArtifactMediaResponse {
  /** Operation that will be returned to the user. */
  operation?: Operation;
}

export const UploadKfpArtifactMediaResponse: Schema.Schema<UploadKfpArtifactMediaResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operation: Schema.optional(Operation),
  }).annotate({ identifier: "UploadKfpArtifactMediaResponse" });

export interface NpmRepository {
  /** Customer-specified remote repository. */
  customRepository?: GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigNpmRepositoryCustomRepository;
  /** One of the publicly available Npm repositories supported by Artifact Registry. */
  publicRepository?: "PUBLIC_REPOSITORY_UNSPECIFIED" | "NPMJS" | (string & {});
}

export const NpmRepository: Schema.Schema<NpmRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customRepository: Schema.optional(
      GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigNpmRepositoryCustomRepository,
    ),
    publicRepository: Schema.optional(Schema.String),
  }).annotate({ identifier: "NpmRepository" });

export interface PlatformLogsConfig {
  /** Optional. The severity level for the logs. Logs will be generated if their severity level is >= than the value of the severity level mentioned here. */
  severityLevel?:
    | "SEVERITY_LEVEL_UNSPECIFIED"
    | "DEBUG"
    | "INFO"
    | "NOTICE"
    | "WARNING"
    | "ERROR"
    | "CRITICAL"
    | "ALERT"
    | "EMERGENCY"
    | (string & {});
  /** Optional. The state of the platform logs: enabled or disabled. */
  loggingState?:
    | "LOGGING_STATE_UNSPECIFIED"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
}

export const PlatformLogsConfig: Schema.Schema<PlatformLogsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    severityLevel: Schema.optional(Schema.String),
    loggingState: Schema.optional(Schema.String),
  }).annotate({ identifier: "PlatformLogsConfig" });

export interface GenericArtifact {
  /** Resource name of the generic artifact. project, location, repository, package_id and version_id create a unique generic artifact. i.e. "projects/test-project/locations/us-west4/repositories/test-repo/ genericArtifacts/package_id:version_id" */
  name?: string;
  /** The version of the generic artifact. */
  version?: string;
  /** Output only. The time when the Generic module is created. */
  createTime?: string;
  /** Output only. The time when the Generic module is updated. */
  updateTime?: string;
}

export const GenericArtifact: Schema.Schema<GenericArtifact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenericArtifact" });

export interface PythonPackage {
  /** Required. registry_location, project_id, repository_name and python_package forms a unique package name:`projects//locations//repository//pythonPackages/`. For example, "projects/test-project/locations/us-west4/repositories/test-repo/pythonPackages/ python_package:1.0.0", where "us-west4" is the registry_location, "test-project" is the project_id, "test-repo" is the repository_name and python_package:1.0.0" is the python package. */
  name?: string;
  /** Required. URL to access the package. Example: us-west4-python.pkg.dev/test-project/test-repo/python_package/file-name-1.0.0.tar.gz */
  uri?: string;
  /** Package for the artifact. */
  packageName?: string;
  /** Version of this package. */
  version?: string;
  /** Output only. Time the package was created. */
  createTime?: string;
  /** Output only. Time the package was updated. */
  updateTime?: string;
}

export const PythonPackage: Schema.Schema<PythonPackage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "PythonPackage" });

export interface ListPythonPackagesResponse {
  /** The token to retrieve the next page of artifacts, or empty if there are no more artifacts to return. */
  nextPageToken?: string;
  /** The python packages returned. */
  pythonPackages?: ReadonlyArray<PythonPackage>;
}

export const ListPythonPackagesResponse: Schema.Schema<ListPythonPackagesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    pythonPackages: Schema.optional(Schema.Array(PythonPackage)),
  }).annotate({ identifier: "ListPythonPackagesResponse" });

export interface GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigPythonRepositoryCustomRepository {
  /** An http/https uri reference to the upstream remote repository, for ex: "https://my.python.registry/". */
  uri?: string;
}

export const GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigPythonRepositoryCustomRepository: Schema.Schema<GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigPythonRepositoryCustomRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigPythonRepositoryCustomRepository",
  });

export interface GoogetArtifact {
  /** Output only. The GooGet package name of the artifact. */
  packageName?: string;
  /** Output only. Operating system architecture of the artifact. */
  architecture?: string;
  /** Output only. The Artifact Registry resource name of the artifact. */
  name?: string;
}

export const GoogetArtifact: Schema.Schema<GoogetArtifact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageName: Schema.optional(Schema.String),
    architecture: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogetArtifact" });

export interface UploadGoogetArtifactResponse {
  /** The GooGet artifacts updated. */
  googetArtifacts?: ReadonlyArray<GoogetArtifact>;
}

export const UploadGoogetArtifactResponse: Schema.Schema<UploadGoogetArtifactResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    googetArtifacts: Schema.optional(Schema.Array(GoogetArtifact)),
  }).annotate({ identifier: "UploadGoogetArtifactResponse" });

export interface UploadYumArtifactRequest {}

export const UploadYumArtifactRequest: Schema.Schema<UploadYumArtifactRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "UploadYumArtifactRequest",
  });

export interface Package {
  /** The time when the package was last updated. This includes publishing a new version of the package. */
  updateTime?: string;
  /** The time when the package was created. */
  createTime?: string;
  /** The name of the package, for example: `projects/p1/locations/us-central1/repositories/repo1/packages/pkg1`. If the package ID part contains slashes, the slashes are escaped. */
  name?: string;
  /** Optional. Client specified annotations. */
  annotations?: Record<string, string>;
  /** The display name of the package. */
  displayName?: string;
}

export const Package: Schema.Schema<Package> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Package" });

export interface Tag {
  /** The name of the tag, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/tags/tag1". If the package part contains slashes, the slashes are escaped. The tag part can only have characters in [a-zA-Z0-9\-._~:@], anything else must be URL encoded. */
  name?: string;
  /** The name of the version the tag refers to, for example: `projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/sha256:5243811` If the package or version ID parts contain slashes, the slashes are escaped. */
  version?: string;
}

export const Tag: Schema.Schema<Tag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "Tag" });

export interface ListTagsResponse {
  /** The tags returned. */
  tags?: ReadonlyArray<Tag>;
  /** The token to retrieve the next page of tags, or empty if there are no more tags to return. */
  nextPageToken?: string;
}

export const ListTagsResponse: Schema.Schema<ListTagsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.Array(Tag)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListTagsResponse" });

export interface UploadAptArtifactMediaResponse {
  /** Operation to be returned to the user. */
  operation?: Operation;
}

export const UploadAptArtifactMediaResponse: Schema.Schema<UploadAptArtifactMediaResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operation: Schema.optional(Operation),
  }).annotate({ identifier: "UploadAptArtifactMediaResponse" });

export interface VulnerabilityScanningConfig {
  /** Output only. The last time this repository config was enabled. */
  lastEnableTime?: string;
  /** Output only. Reason for the repository state. */
  enablementStateReason?: string;
  /** Output only. State of feature enablement, combining repository enablement config and API enablement state. */
  enablementState?:
    | "ENABLEMENT_STATE_UNSPECIFIED"
    | "SCANNING_UNSUPPORTED"
    | "SCANNING_DISABLED"
    | "SCANNING_ACTIVE"
    | (string & {});
  /** Optional. Config for whether this repository has vulnerability scanning disabled. */
  enablementConfig?:
    | "ENABLEMENT_CONFIG_UNSPECIFIED"
    | "INHERITED"
    | "DISABLED"
    | (string & {});
}

export const VulnerabilityScanningConfig: Schema.Schema<VulnerabilityScanningConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastEnableTime: Schema.optional(Schema.String),
    enablementStateReason: Schema.optional(Schema.String),
    enablementState: Schema.optional(Schema.String),
    enablementConfig: Schema.optional(Schema.String),
  }).annotate({ identifier: "VulnerabilityScanningConfig" });

export interface DockerRepositoryConfig {
  /** The repository which enabled this flag prevents all tags from being modified, moved or deleted. This does not prevent tags from being created. */
  immutableTags?: boolean;
}

export const DockerRepositoryConfig: Schema.Schema<DockerRepositoryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    immutableTags: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DockerRepositoryConfig" });

export interface MavenRepositoryConfig {
  /** Version policy defines the versions that the registry will accept. */
  versionPolicy?:
    | "VERSION_POLICY_UNSPECIFIED"
    | "RELEASE"
    | "SNAPSHOT"
    | (string & {});
  /** The repository with this flag will allow publishing the same snapshot versions. */
  allowSnapshotOverwrites?: boolean;
}

export const MavenRepositoryConfig: Schema.Schema<MavenRepositoryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionPolicy: Schema.optional(Schema.String),
    allowSnapshotOverwrites: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "MavenRepositoryConfig" });

export interface GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryCustomRepository {
  /** An http/https uri reference to the upstream remote repository, for ex: "https://my.apt.registry/". */
  uri?: string;
}

export const GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryCustomRepository: Schema.Schema<GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryCustomRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryCustomRepository",
  });

export interface AptRepository {
  /** One of the publicly available Apt repositories supported by Artifact Registry. */
  publicRepository?: GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepository;
  /** Customer-specified remote repository. */
  customRepository?: GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryCustomRepository;
}

export const AptRepository: Schema.Schema<AptRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publicRepository: Schema.optional(
      GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepository,
    ),
    customRepository: Schema.optional(
      GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryCustomRepository,
    ),
  }).annotate({ identifier: "AptRepository" });

export interface GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryCustomRepository {
  /** An http/https uri reference to the upstream remote repository, for ex: "https://my.yum.registry/". */
  uri?: string;
}

export const GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryCustomRepository: Schema.Schema<GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryCustomRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryCustomRepository",
  });

export interface GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepository {
  /** A common public repository base for Yum. */
  repositoryBase?:
    | "REPOSITORY_BASE_UNSPECIFIED"
    | "CENTOS"
    | "CENTOS_DEBUG"
    | "CENTOS_VAULT"
    | "CENTOS_STREAM"
    | "ROCKY"
    | "EPEL"
    | (string & {});
  /** A custom field to define a path to a specific repository from the base. */
  repositoryPath?: string;
}

export const GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepository: Schema.Schema<GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repositoryBase: Schema.optional(Schema.String),
    repositoryPath: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepository",
  });

export interface YumRepository {
  /** Customer-specified remote repository. */
  customRepository?: GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryCustomRepository;
  /** One of the publicly available Yum repositories supported by Artifact Registry. */
  publicRepository?: GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepository;
}

export const YumRepository: Schema.Schema<YumRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customRepository: Schema.optional(
      GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryCustomRepository,
    ),
    publicRepository: Schema.optional(
      GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepository,
    ),
  }).annotate({ identifier: "YumRepository" });

export interface GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigMavenRepositoryCustomRepository {
  /** An http/https uri reference to the upstream remote repository, for ex: "https://my.maven.registry/". */
  uri?: string;
}

export const GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigMavenRepositoryCustomRepository: Schema.Schema<GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigMavenRepositoryCustomRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigMavenRepositoryCustomRepository",
  });

export interface MavenRepository {
  /** Customer-specified remote repository. */
  customRepository?: GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigMavenRepositoryCustomRepository;
  /** One of the publicly available Maven repositories supported by Artifact Registry. */
  publicRepository?:
    | "PUBLIC_REPOSITORY_UNSPECIFIED"
    | "MAVEN_CENTRAL"
    | (string & {});
}

export const MavenRepository: Schema.Schema<MavenRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customRepository: Schema.optional(
      GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigMavenRepositoryCustomRepository,
    ),
    publicRepository: Schema.optional(Schema.String),
  }).annotate({ identifier: "MavenRepository" });

export interface CommonRemoteRepository {
  /** Required. A common public repository base for remote repository. */
  uri?: string;
}

export const CommonRemoteRepository: Schema.Schema<CommonRemoteRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommonRemoteRepository" });

export interface PythonRepository {
  /** One of the publicly available Python repositories supported by Artifact Registry. */
  publicRepository?: "PUBLIC_REPOSITORY_UNSPECIFIED" | "PYPI" | (string & {});
  /** Customer-specified remote repository. */
  customRepository?: GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigPythonRepositoryCustomRepository;
}

export const PythonRepository: Schema.Schema<PythonRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publicRepository: Schema.optional(Schema.String),
    customRepository: Schema.optional(
      GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigPythonRepositoryCustomRepository,
    ),
  }).annotate({ identifier: "PythonRepository" });

export interface DockerRepository {
  /** Customer-specified remote repository. */
  customRepository?: GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigDockerRepositoryCustomRepository;
  /** One of the publicly available Docker repositories supported by Artifact Registry. */
  publicRepository?:
    | "PUBLIC_REPOSITORY_UNSPECIFIED"
    | "DOCKER_HUB"
    | (string & {});
}

export const DockerRepository: Schema.Schema<DockerRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customRepository: Schema.optional(
      GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigDockerRepositoryCustomRepository,
    ),
    publicRepository: Schema.optional(Schema.String),
  }).annotate({ identifier: "DockerRepository" });

export interface UsernamePasswordCredentials {
  /** The username to access the remote repository. */
  username?: string;
  /** The Secret Manager key version that holds the password to access the remote repository. Must be in the format of `projects/{project}/secrets/{secret}/versions/{version}`. */
  passwordSecretVersion?: string;
}

export const UsernamePasswordCredentials: Schema.Schema<UsernamePasswordCredentials> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.optional(Schema.String),
    passwordSecretVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "UsernamePasswordCredentials" });

export interface UpstreamCredentials {
  /** Use username and password to access the remote repository. */
  usernamePasswordCredentials?: UsernamePasswordCredentials;
}

export const UpstreamCredentials: Schema.Schema<UpstreamCredentials> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    usernamePasswordCredentials: Schema.optional(UsernamePasswordCredentials),
  }).annotate({ identifier: "UpstreamCredentials" });

export interface RemoteRepositoryConfig {
  /** Specific settings for an Apt remote repository. */
  aptRepository?: AptRepository;
  /** Specific settings for a Yum remote repository. */
  yumRepository?: YumRepository;
  /** Specific settings for a Maven remote repository. */
  mavenRepository?: MavenRepository;
  /** Common remote repository settings. Used as the remote repository upstream URL. */
  commonRepository?: CommonRemoteRepository;
  /** Specific settings for a Python remote repository. */
  pythonRepository?: PythonRepository;
  /** The description of the remote source. */
  description?: string;
  /** Input only. A create/update remote repo option to avoid making a HEAD/GET request to validate a remote repo and any supplied upstream credentials. */
  disableUpstreamValidation?: boolean;
  /** Specific settings for a Docker remote repository. */
  dockerRepository?: DockerRepository;
  /** Specific settings for an Npm remote repository. */
  npmRepository?: NpmRepository;
  /** Optional. The credentials used to access the remote repository. */
  upstreamCredentials?: UpstreamCredentials;
}

export const RemoteRepositoryConfig: Schema.Schema<RemoteRepositoryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aptRepository: Schema.optional(AptRepository),
    yumRepository: Schema.optional(YumRepository),
    mavenRepository: Schema.optional(MavenRepository),
    commonRepository: Schema.optional(CommonRemoteRepository),
    pythonRepository: Schema.optional(PythonRepository),
    description: Schema.optional(Schema.String),
    disableUpstreamValidation: Schema.optional(Schema.Boolean),
    dockerRepository: Schema.optional(DockerRepository),
    npmRepository: Schema.optional(NpmRepository),
    upstreamCredentials: Schema.optional(UpstreamCredentials),
  }).annotate({ identifier: "RemoteRepositoryConfig" });

export interface UpstreamPolicy {
  /** The user-provided ID of the upstream policy. */
  id?: string;
  /** A reference to the repository resource, for example: `projects/p1/locations/us-central1/repositories/repo1`. */
  repository?: string;
  /** Entries with a greater priority value take precedence in the pull order. */
  priority?: number;
}

export const UpstreamPolicy: Schema.Schema<UpstreamPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    repository: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.Number),
  }).annotate({ identifier: "UpstreamPolicy" });

export interface VirtualRepositoryConfig {
  /** Policies that configure the upstream artifacts distributed by the Virtual Repository. Upstream policies cannot be set on a standard repository. */
  upstreamPolicies?: ReadonlyArray<UpstreamPolicy>;
}

export const VirtualRepositoryConfig: Schema.Schema<VirtualRepositoryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    upstreamPolicies: Schema.optional(Schema.Array(UpstreamPolicy)),
  }).annotate({ identifier: "VirtualRepositoryConfig" });

export interface Repository {
  /** Output only. The repository endpoint, for example: `us-docker.pkg.dev/my-proj/my-repo`. */
  registryUri?: string;
  /** Output only. Whether or not this repository satisfies PZI. */
  satisfiesPzi?: boolean;
  /** Optional. Config and state for vulnerability scanning of resources within this Repository. */
  vulnerabilityScanningConfig?: VulnerabilityScanningConfig;
  /** Docker repository config contains repository level configuration for the repositories of docker type. */
  dockerConfig?: DockerRepositoryConfig;
  /** Optional. The mode of the repository. */
  mode?:
    | "MODE_UNSPECIFIED"
    | "STANDARD_REPOSITORY"
    | "VIRTUAL_REPOSITORY"
    | "REMOTE_REPOSITORY"
    | "AOSS_REPOSITORY"
    | "ASSURED_OSS_REPOSITORY"
    | (string & {});
  /** Output only. The time when the repository was last updated. */
  updateTime?: string;
  /** Output only. Whether or not this repository satisfies PZS. */
  satisfiesPzs?: boolean;
  /** Optional. Cleanup policies for this repository. Cleanup policies indicate when certain package versions can be automatically deleted. Map keys are policy IDs supplied by users during policy creation. They must unique within a repository and be under 128 characters in length. */
  cleanupPolicies?: Record<string, CleanupPolicy>;
  /** Optional. The format of packages that are stored in the repository. */
  format?:
    | "FORMAT_UNSPECIFIED"
    | "DOCKER"
    | "MAVEN"
    | "NPM"
    | "APT"
    | "YUM"
    | "GOOGET"
    | "PYTHON"
    | "KFP"
    | "GO"
    | "GENERIC"
    | "RUBY"
    | (string & {});
  /** Maven repository config contains repository level configuration for the repositories of maven type. */
  mavenConfig?: MavenRepositoryConfig;
  /** Labels with user-defined metadata. This field may contain up to 64 entries. Label keys and values may be no longer than 63 characters. Label keys must begin with a lowercase letter and may only contain lowercase letters, numeric characters, underscores, and dashes. */
  labels?: Record<string, string>;
  /** The Cloud KMS resource name of the customer managed encryption key that's used to encrypt the contents of the Repository. Has the form: `projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key`. This value may not be changed after the Repository has been created. */
  kmsKeyName?: string;
  /** Optional. Configuration for platform logs. */
  platformLogsConfig?: PlatformLogsConfig;
  /** Optional. If this is true, an unspecified repo type will be treated as error rather than defaulting to standard. */
  disallowUnspecifiedMode?: boolean;
  /** The user-provided description of the repository. */
  description?: string;
  /** Output only. The size, in bytes, of all artifact storage in this repository. Repositories that are generally available or in public preview use this to calculate storage costs. */
  sizeBytes?: string;
  /** Output only. The time when the repository was created. */
  createTime?: string;
  /** Configuration specific for a Remote Repository. */
  remoteRepositoryConfig?: RemoteRepositoryConfig;
  /** Optional. If true, the cleanup pipeline is prevented from deleting versions in this repository. */
  cleanupPolicyDryRun?: boolean;
  /** Configuration specific for a Virtual Repository. */
  virtualRepositoryConfig?: VirtualRepositoryConfig;
  /** The name of the repository, for example: `projects/p1/locations/us-central1/repositories/repo1`. For each location in a project, repository names must be unique. */
  name?: string;
}

export const Repository: Schema.Schema<Repository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    registryUri: Schema.optional(Schema.String),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    vulnerabilityScanningConfig: Schema.optional(VulnerabilityScanningConfig),
    dockerConfig: Schema.optional(DockerRepositoryConfig),
    mode: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    cleanupPolicies: Schema.optional(
      Schema.Record(Schema.String, CleanupPolicy),
    ),
    format: Schema.optional(Schema.String),
    mavenConfig: Schema.optional(MavenRepositoryConfig),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    kmsKeyName: Schema.optional(Schema.String),
    platformLogsConfig: Schema.optional(PlatformLogsConfig),
    disallowUnspecifiedMode: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
    sizeBytes: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    remoteRepositoryConfig: Schema.optional(RemoteRepositoryConfig),
    cleanupPolicyDryRun: Schema.optional(Schema.Boolean),
    virtualRepositoryConfig: Schema.optional(VirtualRepositoryConfig),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Repository" });

export interface UploadGenericArtifactMediaResponse {
  /** Operation that will be returned to the user. */
  operation?: Operation;
}

export const UploadGenericArtifactMediaResponse: Schema.Schema<UploadGenericArtifactMediaResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operation: Schema.optional(Operation),
  }).annotate({ identifier: "UploadGenericArtifactMediaResponse" });

export interface UploadAptArtifactMetadata {}

export const UploadAptArtifactMetadata: Schema.Schema<UploadAptArtifactMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "UploadAptArtifactMetadata",
  });

export interface ExportArtifactRequest {
  /** The artifact tag to export. Format:projects/{project}/locations/{location}/repositories/{repository}/packages/{package}/tags/{tag} */
  sourceTag?: string;
  /** The artifact version to export. Format: projects/{project}/locations/{location}/repositories/{repository}/packages/{package}/versions/{version} */
  sourceVersion?: string;
  /** The Cloud Storage path to export the artifact to. Should start with the bucket name, and optionally have a directory path. Examples: `dst_bucket`, `dst_bucket/sub_dir`. Existing objects with the same path will be overwritten. */
  gcsPath?: string;
}

export const ExportArtifactRequest: Schema.Schema<ExportArtifactRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceTag: Schema.optional(Schema.String),
    sourceVersion: Schema.optional(Schema.String),
    gcsPath: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExportArtifactRequest" });

export interface UploadGoogetArtifactRequest {}

export const UploadGoogetArtifactRequest: Schema.Schema<UploadGoogetArtifactRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "UploadGoogetArtifactRequest",
  });

export interface UploadGoModuleMetadata {}

export const UploadGoModuleMetadata: Schema.Schema<UploadGoModuleMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "UploadGoModuleMetadata",
  });

export interface Hash {
  /** The algorithm used to compute the hash value. */
  type?:
    | "HASH_TYPE_UNSPECIFIED"
    | "SHA256"
    | "MD5"
    | "DIRSUM_SHA256"
    | (string & {});
  /** The hash value. */
  value?: string;
}

export const Hash: Schema.Schema<Hash> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "Hash" });

export interface Version {
  /** Output only. A list of related tags. Will contain up to 100 tags that reference this version. */
  relatedTags?: ReadonlyArray<Tag>;
  /** The name of the version, for example: `projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/art1`. If the package or version ID parts contain slashes, the slashes are escaped. */
  name?: string;
  /** Optional. Client specified annotations. */
  annotations?: Record<string, string>;
  /** Output only. Repository-specific Metadata stored against this version. The fields returned are defined by the underlying repository-specific resource. Currently, the resources could be: DockerImage MavenArtifact */
  metadata?: Record<string, unknown>;
  /** Optional. Description of the version, as specified in its metadata. */
  description?: string;
  /** The time when the version was created. */
  createTime?: string;
  /** Output only. Immutable reference for the version, calculated based on the version's content. Currently we only support dirsum_sha256 hash algorithm. Additional hash algorithms may be added in the future. */
  fingerprints?: ReadonlyArray<Hash>;
  /** The time when the version was last updated. */
  updateTime?: string;
}

export const Version: Schema.Schema<Version> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relatedTags: Schema.optional(Schema.Array(Tag)),
    name: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    fingerprints: Schema.optional(Schema.Array(Hash)),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Version" });

export interface ExportArtifactResponse {
  /** The exported version. Should be the same as the request version with fingerprint resource name. */
  exportedVersion?: Version;
}

export const ExportArtifactResponse: Schema.Schema<ExportArtifactResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportedVersion: Schema.optional(Version),
  }).annotate({ identifier: "ExportArtifactResponse" });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Schema<TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface VPCSCConfig {
  /** The name of the project's VPC SC Config. Always of the form: projects/{projectID}/locations/{location}/vpcscConfig In update request: never set In response: always set */
  name?: string;
  /** The project per location VPC SC policy that defines the VPC SC behavior for the Remote Repository (Allow/Deny). */
  vpcscPolicy?: "VPCSC_POLICY_UNSPECIFIED" | "DENY" | "ALLOW" | (string & {});
}

export const VPCSCConfig: Schema.Schema<VPCSCConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    vpcscPolicy: Schema.optional(Schema.String),
  }).annotate({ identifier: "VPCSCConfig" });

export interface AptArtifact {
  /** Output only. Repository component of the artifact. */
  component?: string;
  /** Output only. Contents of the artifact's control metadata file. */
  controlFile?: string;
  /** Output only. The Apt package name of the artifact. */
  packageName?: string;
  /** Output only. The Artifact Registry resource name of the artifact. */
  name?: string;
  /** Output only. An artifact is a binary or source package. */
  packageType?:
    | "PACKAGE_TYPE_UNSPECIFIED"
    | "BINARY"
    | "SOURCE"
    | (string & {});
  /** Output only. Operating system architecture of the artifact. */
  architecture?: string;
}

export const AptArtifact: Schema.Schema<AptArtifact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    component: Schema.optional(Schema.String),
    controlFile: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    packageType: Schema.optional(Schema.String),
    architecture: Schema.optional(Schema.String),
  }).annotate({ identifier: "AptArtifact" });

export interface UploadAptArtifactResponse {
  /** The Apt artifacts updated. */
  aptArtifacts?: ReadonlyArray<AptArtifact>;
}

export const UploadAptArtifactResponse: Schema.Schema<UploadAptArtifactResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aptArtifacts: Schema.optional(Schema.Array(AptArtifact)),
  }).annotate({ identifier: "UploadAptArtifactResponse" });

export interface UploadAptArtifactRequest {}

export const UploadAptArtifactRequest: Schema.Schema<UploadAptArtifactRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "UploadAptArtifactRequest",
  });

export interface Location {
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    locationId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface ListRepositoriesResponse {
  /** The repositories returned. */
  repositories?: ReadonlyArray<Repository>;
  /** The token to retrieve the next page of repositories, or empty if there are no more repositories to return. */
  nextPageToken?: string;
}

export const ListRepositoriesResponse: Schema.Schema<ListRepositoriesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repositories: Schema.optional(Schema.Array(Repository)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListRepositoriesResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface ImportAptArtifactsErrorInfo {
  /** The detailed error status. */
  error?: Status;
  /** Google Cloud Storage location requested. */
  gcsSource?: ImportAptArtifactsGcsSource;
}

export const ImportAptArtifactsErrorInfo: Schema.Schema<ImportAptArtifactsErrorInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(Status),
    gcsSource: Schema.optional(ImportAptArtifactsGcsSource),
  }).annotate({ identifier: "ImportAptArtifactsErrorInfo" });

export interface KfpArtifact {
  /** Output only. Resource name of the KFP artifact. Since users don't directly interact with this resource, the name will be derived from the associated version. For example, when version = ".../versions/sha256:abcdef...", the name will be ".../kfpArtifacts/sha256:abcdef...". */
  name?: string;
  /** The version associated with the KFP artifact. Must follow the Semantic Versioning standard. */
  version?: string;
}

export const KfpArtifact: Schema.Schema<KfpArtifact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "KfpArtifact" });

export interface ImportYumArtifactsGcsSource {
  /** Cloud Storage paths URI (e.g., gs://my_bucket//my_object). */
  uris?: ReadonlyArray<string>;
  /** Supports URI wildcards for matching multiple objects from a single URI. */
  useWildcards?: boolean;
}

export const ImportYumArtifactsGcsSource: Schema.Schema<ImportYumArtifactsGcsSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uris: Schema.optional(Schema.Array(Schema.String)),
    useWildcards: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ImportYumArtifactsGcsSource" });

export interface ImportYumArtifactsErrorInfo {
  /** The detailed error status. */
  error?: Status;
  /** Google Cloud Storage location requested. */
  gcsSource?: ImportYumArtifactsGcsSource;
}

export const ImportYumArtifactsErrorInfo: Schema.Schema<ImportYumArtifactsErrorInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(Status),
    gcsSource: Schema.optional(ImportYumArtifactsGcsSource),
  }).annotate({ identifier: "ImportYumArtifactsErrorInfo" });

export interface YumArtifact {
  /** Output only. The yum package name of the artifact. */
  packageName?: string;
  /** Output only. An artifact is a binary or source package. */
  packageType?:
    | "PACKAGE_TYPE_UNSPECIFIED"
    | "BINARY"
    | "SOURCE"
    | (string & {});
  /** Output only. Operating system architecture of the artifact. */
  architecture?: string;
  /** Output only. The Artifact Registry resource name of the artifact. */
  name?: string;
}

export const YumArtifact: Schema.Schema<YumArtifact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageName: Schema.optional(Schema.String),
    packageType: Schema.optional(Schema.String),
    architecture: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "YumArtifact" });

export interface ImportYumArtifactsResponse {
  /** Detailed error info for packages that were not imported. */
  errors?: ReadonlyArray<ImportYumArtifactsErrorInfo>;
  /** The yum artifacts imported. */
  yumArtifacts?: ReadonlyArray<YumArtifact>;
}

export const ImportYumArtifactsResponse: Schema.Schema<ImportYumArtifactsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(ImportYumArtifactsErrorInfo)),
    yumArtifacts: Schema.optional(Schema.Array(YumArtifact)),
  }).annotate({ identifier: "ImportYumArtifactsResponse" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface ListVersionsResponse {
  /** The versions returned. */
  versions?: ReadonlyArray<Version>;
  /** The token to retrieve the next page of versions, or empty if there are no more versions to return. */
  nextPageToken?: string;
}

export const ListVersionsResponse: Schema.Schema<ListVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versions: Schema.optional(Schema.Array(Version)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListVersionsResponse" });

export interface Attachment {
  /** The name of the attachment. E.g. `projects/p1/locations/us/repositories/repo/attachments/sbom`. */
  name?: string;
  /** Type of attachment. E.g. `application/vnd.spdx+json` */
  type?: string;
  /** Output only. The time when the attachment was created. */
  createTime?: string;
  /** Output only. The time when the attachment was last updated. */
  updateTime?: string;
  /** Optional. User annotations. These attributes can only be set and used by the user, and not by Artifact Registry. See https://google.aip.dev/128#annotations for more details such as format and size limitations. */
  annotations?: Record<string, string>;
  /** Required. The files that belong to this attachment. If the file ID part contains slashes, they are escaped. E.g. `projects/p1/locations/us-central1/repositories/repo1/files/sha:`. */
  files?: ReadonlyArray<string>;
  /** Required. The target the attachment is for, can be a Version, Package or Repository. E.g. `projects/p1/locations/us-central1/repositories/repo1/packages/p1/versions/v1`. */
  target?: string;
  /** The namespace this attachment belongs to. E.g. If an attachment is created by artifact analysis, namespace is set to `artifactanalysis.googleapis.com`. */
  attachmentNamespace?: string;
  /** Output only. The name of the OCI version that this attachment created. Only populated for Docker attachments. E.g. `projects/p1/locations/us-central1/repositories/repo1/packages/p1/versions/v1`. */
  ociVersionName?: string;
}

export const Attachment: Schema.Schema<Attachment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    files: Schema.optional(Schema.Array(Schema.String)),
    target: Schema.optional(Schema.String),
    attachmentNamespace: Schema.optional(Schema.String),
    ociVersionName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Attachment" });

export interface ListAttachmentsResponse {
  /** The token to retrieve the next page of attachments, or empty if there are no more attachments to return. */
  nextPageToken?: string;
  /** The attachments returned. */
  attachments?: ReadonlyArray<Attachment>;
}

export const ListAttachmentsResponse: Schema.Schema<ListAttachmentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    attachments: Schema.optional(Schema.Array(Attachment)),
  }).annotate({ identifier: "ListAttachmentsResponse" });

export interface ImageManifest {
  /** Optional. The required OS features for the image, for example on Windows `win32k`. */
  osFeatures?: ReadonlyArray<string>;
  /** Optional. The CPU architecture of the image. Values are provided by the Docker client and are not validated by Artifact Registry. Example values include "amd64", "arm64", "ppc64le", "s390x", "riscv64", "mips64le", etc. */
  architecture?: string;
  /** Optional. The manifest digest, in the format "sha256:". */
  digest?: string;
  /** Optional. The variant of the CPU in the image, for example `v7` to specify ARMv7 when architecture is `arm`. */
  variant?: string;
  /** Optional. The operating system of the image. Values are provided by the Docker client and are not validated by Artifact Registry. Example values include "linux", "windows", "darwin", "aix", etc. */
  os?: string;
  /** Optional. The OS version of the image, for example on Windows `10.0.14393.1066`. */
  osVersion?: string;
  /** Optional. The media type of the manifest, e.g., "application/vnd.docker.distribution.manifest.v2+json" */
  mediaType?: string;
}

export const ImageManifest: Schema.Schema<ImageManifest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    osFeatures: Schema.optional(Schema.Array(Schema.String)),
    architecture: Schema.optional(Schema.String),
    digest: Schema.optional(Schema.String),
    variant: Schema.optional(Schema.String),
    os: Schema.optional(Schema.String),
    osVersion: Schema.optional(Schema.String),
    mediaType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImageManifest" });

export interface DockerImage {
  /** Optional. For multi-arch images (manifest lists), this field contains the list of image manifests. */
  imageManifests?: ReadonlyArray<ImageManifest>;
  /** ArtifactType of this image, e.g. "application/vnd.example+type". If the `subject_digest` is set and no `artifact_type` is given, the `media_type` will be considered as the `artifact_type`. This field is returned as the `metadata.artifactType` field in the Version resource. */
  artifactType?: string;
  /** Output only. The time when the docker image was last updated. */
  updateTime?: string;
  /** Calculated size of the image. This field is returned as the 'metadata.imageSizeBytes' field in the Version resource. */
  imageSizeBytes?: string;
  /** Required. registry_location, project_id, repository_name and image id forms a unique image name:`projects//locations//repositories//dockerImages/`. For example, "projects/test-project/locations/us-west4/repositories/test-repo/dockerImages/ nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf", where "us-west4" is the registry_location, "test-project" is the project_id, "test-repo" is the repository_name and "nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf" is the image's digest. */
  name?: string;
  /** Required. URL to access the image. Example: us-west4-docker.pkg.dev/test-project/test-repo/nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf */
  uri?: string;
  /** Tags attached to this image. */
  tags?: ReadonlyArray<string>;
  /** The time this image was built. This field is returned as the 'metadata.buildTime' field in the Version resource. The build time is returned to the client as an RFC 3339 string, which can be easily used with the JavaScript Date constructor. */
  buildTime?: string;
  /** Media type of this image, e.g. "application/vnd.docker.distribution.manifest.v2+json". This field is returned as the 'metadata.mediaType' field in the Version resource. */
  mediaType?: string;
  /** Time the image was uploaded. */
  uploadTime?: string;
}

export const DockerImage: Schema.Schema<DockerImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageManifests: Schema.optional(Schema.Array(ImageManifest)),
    artifactType: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    imageSizeBytes: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
    buildTime: Schema.optional(Schema.String),
    mediaType: Schema.optional(Schema.String),
    uploadTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "DockerImage" });

export interface ListDockerImagesResponse {
  /** The docker images returned. */
  dockerImages?: ReadonlyArray<DockerImage>;
  /** The token to retrieve the next page of artifacts, or empty if there are no more artifacts to return. */
  nextPageToken?: string;
}

export const ListDockerImagesResponse: Schema.Schema<ListDockerImagesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dockerImages: Schema.optional(Schema.Array(DockerImage)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDockerImagesResponse" });

export interface UploadFileRequest {
  /** Optional. The ID of the file. If left empty will default to sha256 digest of the content uploaded. */
  fileId?: string;
}

export const UploadFileRequest: Schema.Schema<UploadFileRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileId: Schema.optional(Schema.String),
  }).annotate({ identifier: "UploadFileRequest" });

export interface UploadGoogetArtifactMediaResponse {
  /** Operation to be returned to the user. */
  operation?: Operation;
}

export const UploadGoogetArtifactMediaResponse: Schema.Schema<UploadGoogetArtifactMediaResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operation: Schema.optional(Operation),
  }).annotate({ identifier: "UploadGoogetArtifactMediaResponse" });

export interface UploadFileMediaResponse {
  /** Operation that will be returned to the user. */
  operation?: Operation;
}

export const UploadFileMediaResponse: Schema.Schema<UploadFileMediaResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operation: Schema.optional(Operation),
  }).annotate({ identifier: "UploadFileMediaResponse" });

export interface OperationMetadata {}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "OperationMetadata",
  });

export interface ImportGoogetArtifactsGcsSource {
  /** Cloud Storage paths URI (e.g., `gs://my_bucket/my_object`). */
  uris?: ReadonlyArray<string>;
  /** Supports URI wildcards for matching multiple objects from a single URI. */
  useWildcards?: boolean;
}

export const ImportGoogetArtifactsGcsSource: Schema.Schema<ImportGoogetArtifactsGcsSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uris: Schema.optional(Schema.Array(Schema.String)),
    useWildcards: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ImportGoogetArtifactsGcsSource" });

export interface ImportGoogetArtifactsErrorInfo {
  /** Google Cloud Storage location requested. */
  gcsSource?: ImportGoogetArtifactsGcsSource;
  /** The detailed error status. */
  error?: Status;
}

export const ImportGoogetArtifactsErrorInfo: Schema.Schema<ImportGoogetArtifactsErrorInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsSource: Schema.optional(ImportGoogetArtifactsGcsSource),
    error: Schema.optional(Status),
  }).annotate({ identifier: "ImportGoogetArtifactsErrorInfo" });

export interface ExportedFile {
  /** Cloud Storage Object path of the exported file. Examples: `dst_bucket/file1`, `dst_bucket/sub_dir/file1` */
  gcsObjectPath?: string;
  /** Name of the exported artifact file. Format: `projects/p1/locations/us/repositories/repo1/files/file1` */
  name?: string;
  /** The hashes of the file content. */
  hashes?: ReadonlyArray<Hash>;
}

export const ExportedFile: Schema.Schema<ExportedFile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsObjectPath: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    hashes: Schema.optional(Schema.Array(Hash)),
  }).annotate({ identifier: "ExportedFile" });

export interface ProjectConfig {
  /** Identifier. The name of the project's configuration. Always of the form: projects/{project}/locations/{location}/projectConfig */
  name?: string;
  /** Optional. Configuration for platform logs. */
  platformLogsConfig?: PlatformLogsConfig;
}

export const ProjectConfig: Schema.Schema<ProjectConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    platformLogsConfig: Schema.optional(PlatformLogsConfig),
  }).annotate({ identifier: "ProjectConfig" });

export interface UploadKfpArtifactRequest {
  /** Description of the package version. */
  description?: string;
  /** Tags to be created with the version. */
  tags?: ReadonlyArray<string>;
}

export const UploadKfpArtifactRequest: Schema.Schema<UploadKfpArtifactRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "UploadKfpArtifactRequest" });

export interface ImportYumArtifactsRequest {
  /** Google Cloud Storage location where input content is located. */
  gcsSource?: ImportYumArtifactsGcsSource;
}

export const ImportYumArtifactsRequest: Schema.Schema<ImportYumArtifactsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsSource: Schema.optional(ImportYumArtifactsGcsSource),
  }).annotate({ identifier: "ImportYumArtifactsRequest" });

export interface ImportGoogetArtifactsResponse {
  /** The GooGet artifacts updated. */
  googetArtifacts?: ReadonlyArray<GoogetArtifact>;
  /** Detailed error info for packages that were not imported. */
  errors?: ReadonlyArray<ImportGoogetArtifactsErrorInfo>;
}

export const ImportGoogetArtifactsResponse: Schema.Schema<ImportGoogetArtifactsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    googetArtifacts: Schema.optional(Schema.Array(GoogetArtifact)),
    errors: Schema.optional(Schema.Array(ImportGoogetArtifactsErrorInfo)),
  }).annotate({ identifier: "ImportGoogetArtifactsResponse" });

export interface ImportGoogetArtifactsMetadata {}

export const ImportGoogetArtifactsMetadata: Schema.Schema<ImportGoogetArtifactsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ImportGoogetArtifactsMetadata",
  });

export interface NpmPackage {
  /** Version of this package. */
  version?: string;
  /** Output only. Time the package was created. */
  createTime?: string;
  /** Output only. Time the package was updated. */
  updateTime?: string;
  /** Package for the artifact. */
  packageName?: string;
  /** Required. registry_location, project_id, repository_name and npm_package forms a unique package For example, "projects/test-project/locations/us-west4/repositories/test-repo/npmPackages/ npm_test:1.0.0", where "us-west4" is the registry_location, "test-project" is the project_id, "test-repo" is the repository_name and npm_test:1.0.0" is the npm package. */
  name?: string;
  /** Tags attached to this package. */
  tags?: ReadonlyArray<string>;
}

export const NpmPackage: Schema.Schema<NpmPackage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "NpmPackage" });

export interface ListNpmPackagesResponse {
  /** The npm packages returned. */
  npmPackages?: ReadonlyArray<NpmPackage>;
  /** The token to retrieve the next page of artifacts, or empty if there are no more artifacts to return. */
  nextPageToken?: string;
}

export const ListNpmPackagesResponse: Schema.Schema<ListNpmPackagesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    npmPackages: Schema.optional(Schema.Array(NpmPackage)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListNpmPackagesResponse" });

export interface GoogleDevtoolsArtifactregistryV1File {
  /** The name of the Package or Version that owns this file, if any. */
  owner?: string;
  /** The name of the file, for example: `projects/p1/locations/us-central1/repositories/repo1/files/a%2Fb%2Fc.txt`. If the file ID part contains slashes, they are escaped. */
  name?: string;
  /** Optional. Client specified annotations. */
  annotations?: Record<string, string>;
  /** The hashes of the file content. */
  hashes?: ReadonlyArray<Hash>;
  /** Output only. The time when the File was last updated. */
  updateTime?: string;
  /** Output only. The time when the File was created. */
  createTime?: string;
  /** Output only. The time when the last attempt to refresh the file's data was made. Only set when the repository is remote. */
  fetchTime?: string;
  /** The size of the File in bytes. */
  sizeBytes?: string;
}

export const GoogleDevtoolsArtifactregistryV1File: Schema.Schema<GoogleDevtoolsArtifactregistryV1File> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    owner: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    hashes: Schema.optional(Schema.Array(Hash)),
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    fetchTime: Schema.optional(Schema.String),
    sizeBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDevtoolsArtifactregistryV1File" });

export interface ListPackagesResponse {
  /** The packages returned. */
  packages?: ReadonlyArray<Package>;
  /** The token to retrieve the next page of packages, or empty if there are no more packages to return. */
  nextPageToken?: string;
}

export const ListPackagesResponse: Schema.Schema<ListPackagesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packages: Schema.optional(Schema.Array(Package)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListPackagesResponse" });

export interface ImportAptArtifactsResponse {
  /** Detailed error info for packages that were not imported. */
  errors?: ReadonlyArray<ImportAptArtifactsErrorInfo>;
  /** The Apt artifacts imported. */
  aptArtifacts?: ReadonlyArray<AptArtifact>;
}

export const ImportAptArtifactsResponse: Schema.Schema<ImportAptArtifactsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(ImportAptArtifactsErrorInfo)),
    aptArtifacts: Schema.optional(Schema.Array(AptArtifact)),
  }).annotate({ identifier: "ImportAptArtifactsResponse" });

export interface ImportYumArtifactsMetadata {}

export const ImportYumArtifactsMetadata: Schema.Schema<ImportYumArtifactsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ImportYumArtifactsMetadata",
  });

export interface UploadYumArtifactMediaResponse {
  /** Operation to be returned to the user. */
  operation?: Operation;
}

export const UploadYumArtifactMediaResponse: Schema.Schema<UploadYumArtifactMediaResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operation: Schema.optional(Operation),
  }).annotate({ identifier: "UploadYumArtifactMediaResponse" });

export interface ListFilesResponse {
  /** The files returned. */
  files?: ReadonlyArray<GoogleDevtoolsArtifactregistryV1File>;
  /** The token to retrieve the next page of files, or empty if there are no more files to return. */
  nextPageToken?: string;
}

export const ListFilesResponse: Schema.Schema<ListFilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    files: Schema.optional(Schema.Array(GoogleDevtoolsArtifactregistryV1File)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListFilesResponse" });

export interface ListMavenArtifactsResponse {
  /** The token to retrieve the next page of artifacts, or empty if there are no more artifacts to return. */
  nextPageToken?: string;
  /** The maven artifacts returned. */
  mavenArtifacts?: ReadonlyArray<MavenArtifact>;
}

export const ListMavenArtifactsResponse: Schema.Schema<ListMavenArtifactsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    mavenArtifacts: Schema.optional(Schema.Array(MavenArtifact)),
  }).annotate({ identifier: "ListMavenArtifactsResponse" });

export interface ListRulesResponse {
  /** The rules returned. */
  rules?: ReadonlyArray<GoogleDevtoolsArtifactregistryV1Rule>;
  /** The token to retrieve the next page of rules, or empty if there are no more rules to return. */
  nextPageToken?: string;
}

export const ListRulesResponse: Schema.Schema<ListRulesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rules: Schema.optional(Schema.Array(GoogleDevtoolsArtifactregistryV1Rule)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListRulesResponse" });

export interface BatchDeleteVersionsRequest {
  /** Required. The names of the versions to delete. The maximum number of versions deleted per batch is determined by the service and is dependent on the available resources in the region. */
  names?: ReadonlyArray<string>;
  /** If true, the request is performed without deleting data, following AIP-163. */
  validateOnly?: boolean;
}

export const BatchDeleteVersionsRequest: Schema.Schema<BatchDeleteVersionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
    validateOnly: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BatchDeleteVersionsRequest" });

export interface BatchDeleteVersionsMetadata {
  /** The versions the operation failed to delete. */
  failedVersions?: ReadonlyArray<string>;
}

export const BatchDeleteVersionsMetadata: Schema.Schema<BatchDeleteVersionsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    failedVersions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BatchDeleteVersionsMetadata" });

export interface UploadGoogetArtifactMetadata {}

export const UploadGoogetArtifactMetadata: Schema.Schema<UploadGoogetArtifactMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "UploadGoogetArtifactMetadata",
  });

export interface GoModule {
  /** The resource name of a Go module. */
  name?: string;
  /** The version of the Go module. Must be a valid canonical version as defined in https://go.dev/ref/mod#glos-canonical-version. */
  version?: string;
  /** Output only. The time when the Go module is created. */
  createTime?: string;
  /** Output only. The time when the Go module is updated. */
  updateTime?: string;
}

export const GoModule: Schema.Schema<GoModule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoModule" });

export interface ListLocationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
}

export const ListLocationsResponse: Schema.Schema<ListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(Location)),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface UploadKfpArtifactMetadata {}

export const UploadKfpArtifactMetadata: Schema.Schema<UploadKfpArtifactMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "UploadKfpArtifactMetadata",
  });

export interface ExportArtifactMetadata {
  /** The exported artifact files. */
  exportedFiles?: ReadonlyArray<ExportedFile>;
}

export const ExportArtifactMetadata: Schema.Schema<ExportArtifactMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportedFiles: Schema.optional(Schema.Array(ExportedFile)),
  }).annotate({ identifier: "ExportArtifactMetadata" });

export interface UploadGoModuleMediaResponse {
  /** Operation to be returned to the user. */
  operation?: Operation;
}

export const UploadGoModuleMediaResponse: Schema.Schema<UploadGoModuleMediaResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operation: Schema.optional(Operation),
  }).annotate({ identifier: "UploadGoModuleMediaResponse" });

export interface UploadGoModuleRequest {}

export const UploadGoModuleRequest: Schema.Schema<UploadGoModuleRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "UploadGoModuleRequest",
  });

export interface ImportGoogetArtifactsRequest {
  /** Google Cloud Storage location where input content is located. */
  gcsSource?: ImportGoogetArtifactsGcsSource;
}

export const ImportGoogetArtifactsRequest: Schema.Schema<ImportGoogetArtifactsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsSource: Schema.optional(ImportGoogetArtifactsGcsSource),
  }).annotate({ identifier: "ImportGoogetArtifactsRequest" });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Schema<TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface DownloadFileResponse {}

export const DownloadFileResponse: Schema.Schema<DownloadFileResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DownloadFileResponse",
  });

export interface ProjectSettings {
  /** The percentage of pull traffic to redirect from GCR to AR when using partial redirection. */
  pullPercent?: number;
  /** The name of the project's settings. Always of the form: projects/{project-id}/projectSettings In update request: never set In response: always set */
  name?: string;
  /** The redirection state of the legacy repositories in this project. */
  legacyRedirectionState?:
    | "REDIRECTION_STATE_UNSPECIFIED"
    | "REDIRECTION_FROM_GCR_IO_DISABLED"
    | "REDIRECTION_FROM_GCR_IO_ENABLED"
    | "REDIRECTION_FROM_GCR_IO_FINALIZED"
    | "REDIRECTION_FROM_GCR_IO_ENABLED_AND_COPYING"
    | "REDIRECTION_FROM_GCR_IO_PARTIAL_AND_COPYING"
    | (string & {});
}

export const ProjectSettings: Schema.Schema<ProjectSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pullPercent: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    legacyRedirectionState: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProjectSettings" });

export interface UploadYumArtifactResponse {
  /** The Yum artifacts updated. */
  yumArtifacts?: ReadonlyArray<YumArtifact>;
}

export const UploadYumArtifactResponse: Schema.Schema<UploadYumArtifactResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    yumArtifacts: Schema.optional(Schema.Array(YumArtifact)),
  }).annotate({ identifier: "UploadYumArtifactResponse" });

export interface UploadGenericArtifactMetadata {}

export const UploadGenericArtifactMetadata: Schema.Schema<UploadGenericArtifactMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "UploadGenericArtifactMetadata",
  });

export interface UploadYumArtifactMetadata {}

export const UploadYumArtifactMetadata: Schema.Schema<UploadYumArtifactMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "UploadYumArtifactMetadata",
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

export interface UpdateProjectSettingsProjectsRequest {
  /** The name of the project's settings. Always of the form: projects/{project-id}/projectSettings In update request: never set In response: always set */
  name: string;
  /** Field mask to support partial updates. */
  updateMask?: string;
  /** Request body */
  body?: ProjectSettings;
}

export const UpdateProjectSettingsProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ProjectSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateProjectSettingsProjectsRequest>;

export type UpdateProjectSettingsProjectsResponse = ProjectSettings;
export const UpdateProjectSettingsProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProjectSettings;

export type UpdateProjectSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the Settings for the Project. */
export const updateProjectSettingsProjects: API.OperationMethod<
  UpdateProjectSettingsProjectsRequest,
  UpdateProjectSettingsProjectsResponse,
  UpdateProjectSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateProjectSettingsProjectsRequest,
  output: UpdateProjectSettingsProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectSettingsProjectsRequest {
  /** Required. The name of the projectSettings resource. */
  name: string;
}

export const GetProjectSettingsProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectSettingsProjectsRequest>;

export type GetProjectSettingsProjectsResponse = ProjectSettings;
export const GetProjectSettingsProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProjectSettings;

export type GetProjectSettingsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the Settings for the Project. */
export const getProjectSettingsProjects: API.OperationMethod<
  GetProjectSettingsProjectsRequest,
  GetProjectSettingsProjectsResponse,
  GetProjectSettingsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectSettingsProjectsRequest,
  output: GetProjectSettingsProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetVpcscConfigProjectsLocationsRequest {
  /** Required. The name of the VPCSCConfig resource. */
  name: string;
}

export const GetVpcscConfigProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetVpcscConfigProjectsLocationsRequest>;

export type GetVpcscConfigProjectsLocationsResponse = VPCSCConfig;
export const GetVpcscConfigProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ VPCSCConfig;

export type GetVpcscConfigProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the VPCSC Config for the Project. */
export const getVpcscConfigProjectsLocations: API.OperationMethod<
  GetVpcscConfigProjectsLocationsRequest,
  GetVpcscConfigProjectsLocationsResponse,
  GetVpcscConfigProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetVpcscConfigProjectsLocationsRequest,
  output: GetVpcscConfigProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateProjectConfigProjectsLocationsRequest {
  /** Identifier. The name of the project's configuration. Always of the form: projects/{project}/locations/{location}/projectConfig */
  name: string;
  /** Optional. Field mask to support partial updates. See https://protobuf.dev/reference/protobuf/google.protobuf/#field-mask for more details. */
  updateMask?: string;
  /** Request body */
  body?: ProjectConfig;
}

export const UpdateProjectConfigProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ProjectConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateProjectConfigProjectsLocationsRequest>;

export type UpdateProjectConfigProjectsLocationsResponse = ProjectConfig;
export const UpdateProjectConfigProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProjectConfig;

export type UpdateProjectConfigProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the project configuration. */
export const updateProjectConfigProjectsLocations: API.OperationMethod<
  UpdateProjectConfigProjectsLocationsRequest,
  UpdateProjectConfigProjectsLocationsResponse,
  UpdateProjectConfigProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateProjectConfigProjectsLocationsRequest,
  output: UpdateProjectConfigProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateVpcscConfigProjectsLocationsRequest {
  /** The name of the project's VPC SC Config. Always of the form: projects/{projectID}/locations/{location}/vpcscConfig In update request: never set In response: always set */
  name: string;
  /** Field mask to support partial updates. */
  updateMask?: string;
  /** Request body */
  body?: VPCSCConfig;
}

export const UpdateVpcscConfigProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(VPCSCConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateVpcscConfigProjectsLocationsRequest>;

export type UpdateVpcscConfigProjectsLocationsResponse = VPCSCConfig;
export const UpdateVpcscConfigProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ VPCSCConfig;

export type UpdateVpcscConfigProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the VPCSC Config for the Project. */
export const updateVpcscConfigProjectsLocations: API.OperationMethod<
  UpdateVpcscConfigProjectsLocationsRequest,
  UpdateVpcscConfigProjectsLocationsResponse,
  UpdateVpcscConfigProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateVpcscConfigProjectsLocationsRequest,
  output: UpdateVpcscConfigProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export interface GetProjectConfigProjectsLocationsRequest {
  /** Required. The name of the project's logging configuration: projects/{project}/locations/{location}/projectConfig */
  name: string;
}

export const GetProjectConfigProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectConfigProjectsLocationsRequest>;

export type GetProjectConfigProjectsLocationsResponse = ProjectConfig;
export const GetProjectConfigProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ProjectConfig;

export type GetProjectConfigProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the project configuration. */
export const getProjectConfigProjectsLocations: API.OperationMethod<
  GetProjectConfigProjectsLocationsRequest,
  GetProjectConfigProjectsLocationsResponse,
  GetProjectConfigProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectConfigProjectsLocationsRequest,
  output: GetProjectConfigProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsRequest {
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the [ListLocationsRequest.name] field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
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

export interface SetIamPolicyProjectsLocationsRepositoriesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsRepositoriesRequest>;

export type SetIamPolicyProjectsLocationsRepositoriesResponse = Policy;
export const SetIamPolicyProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the IAM policy for a given resource. */
export const setIamPolicyProjectsLocationsRepositories: API.OperationMethod<
  SetIamPolicyProjectsLocationsRepositoriesRequest,
  SetIamPolicyProjectsLocationsRepositoriesResponse,
  SetIamPolicyProjectsLocationsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsRepositoriesRequest,
  output: SetIamPolicyProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExportArtifactProjectsLocationsRepositoriesRequest {
  /** Required. The repository of the artifact to export. Format: projects/{project}/locations/{location}/repositories/{repository} */
  repository: string;
  /** Request body */
  body?: ExportArtifactRequest;
}

export const ExportArtifactProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repository: Schema.String.pipe(T.HttpPath("repository")),
    body: Schema.optional(ExportArtifactRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+repository}:exportArtifact",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExportArtifactProjectsLocationsRepositoriesRequest>;

export type ExportArtifactProjectsLocationsRepositoriesResponse = Operation;
export const ExportArtifactProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ExportArtifactProjectsLocationsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Exports an artifact to a Cloud Storage bucket. */
export const exportArtifactProjectsLocationsRepositories: API.OperationMethod<
  ExportArtifactProjectsLocationsRepositoriesRequest,
  ExportArtifactProjectsLocationsRepositoriesResponse,
  ExportArtifactProjectsLocationsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportArtifactProjectsLocationsRepositoriesRequest,
  output: ExportArtifactProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsRepositoriesRequest {
  /** Required. The name of the repository to retrieve. */
  name: string;
}

export const GetProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRepositoriesRequest>;

export type GetProjectsLocationsRepositoriesResponse = Repository;
export const GetProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Repository;

export type GetProjectsLocationsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a repository. */
export const getProjectsLocationsRepositories: API.OperationMethod<
  GetProjectsLocationsRepositoriesRequest,
  GetProjectsLocationsRepositoriesResponse,
  GetProjectsLocationsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRepositoriesRequest,
  output: GetProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsRepositoriesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsRepositoriesRequest>;

export type TestIamPermissionsProjectsLocationsRepositoriesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Tests if the caller has a list of permissions on a resource. */
export const testIamPermissionsProjectsLocationsRepositories: API.OperationMethod<
  TestIamPermissionsProjectsLocationsRepositoriesRequest,
  TestIamPermissionsProjectsLocationsRepositoriesResponse,
  TestIamPermissionsProjectsLocationsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsRepositoriesRequest,
  output: TestIamPermissionsProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRepositoriesRequest {
  /** The maximum number of repositories to return. Maximum page size is 1,000. */
  pageSize?: number;
  /** Required. The name of the parent resource whose repositories will be listed. */
  parent: string;
  /** The next_page_token value returned from a previous list request, if any. */
  pageToken?: string;
  /** Optional. The field to order the results by. */
  orderBy?: string;
  /** Optional. An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `name` Examples of using a filter: To filter the results of your request to repositories with the name `my-repo` in project `my-project` in the `us-central` region, append the following filter expression to your request: * `name="projects/my-project/locations/us-central1/repositories/my-repo"` You can also use wildcards to match any number of characters before or after the value: * `name="projects/my-project/locations/us-central1/repositories/my-*"` * `name="projects/my-project/locations/us-central1/repositories/*repo"` * `name="projects/my-project/locations/us-central1/repositories/*repo*"` */
  filter?: string;
}

export const ListProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/repositories" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRepositoriesRequest>;

export type ListProjectsLocationsRepositoriesResponse =
  ListRepositoriesResponse;
export const ListProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListRepositoriesResponse;

export type ListProjectsLocationsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists repositories. */
export const listProjectsLocationsRepositories: API.PaginatedOperationMethod<
  ListProjectsLocationsRepositoriesRequest,
  ListProjectsLocationsRepositoriesResponse,
  ListProjectsLocationsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRepositoriesRequest,
  output: ListProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsRepositoriesRequest {
  /** Required. The name of the repository to delete. */
  name: string;
}

export const DeleteProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsRepositoriesRequest>;

export type DeleteProjectsLocationsRepositoriesResponse = Operation;
export const DeleteProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a repository and all of its contents. The returned Operation will finish once the repository has been deleted. It will not have any Operation metadata and will return a google.protobuf.Empty response. */
export const deleteProjectsLocationsRepositories: API.OperationMethod<
  DeleteProjectsLocationsRepositoriesRequest,
  DeleteProjectsLocationsRepositoriesResponse,
  DeleteProjectsLocationsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRepositoriesRequest,
  output: DeleteProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsRepositoriesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsRepositoriesRequest>;

export type GetIamPolicyProjectsLocationsRepositoriesResponse = Policy;
export const GetIamPolicyProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the IAM policy for a given resource. */
export const getIamPolicyProjectsLocationsRepositories: API.OperationMethod<
  GetIamPolicyProjectsLocationsRepositoriesRequest,
  GetIamPolicyProjectsLocationsRepositoriesResponse,
  GetIamPolicyProjectsLocationsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsRepositoriesRequest,
  output: GetIamPolicyProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsRepositoriesRequest {
  /** Required. The name of the parent resource where the repository will be created. */
  parent: string;
  /** Required. The repository id to use for this repository. */
  repositoryId?: string;
  /** Request body */
  body?: Repository;
}

export const CreateProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    repositoryId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("repositoryId"),
    ),
    body: Schema.optional(Repository).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/repositories",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsRepositoriesRequest>;

export type CreateProjectsLocationsRepositoriesResponse = Operation;
export const CreateProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository. */
export const createProjectsLocationsRepositories: API.OperationMethod<
  CreateProjectsLocationsRepositoriesRequest,
  CreateProjectsLocationsRepositoriesResponse,
  CreateProjectsLocationsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsRepositoriesRequest,
  output: CreateProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsRepositoriesRequest {
  /** The name of the repository, for example: `projects/p1/locations/us-central1/repositories/repo1`. For each location in a project, repository names must be unique. */
  name: string;
  /** The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask */
  updateMask?: string;
  /** Request body */
  body?: Repository;
}

export const PatchProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Repository).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsRepositoriesRequest>;

export type PatchProjectsLocationsRepositoriesResponse = Repository;
export const PatchProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Repository;

export type PatchProjectsLocationsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a repository. */
export const patchProjectsLocationsRepositories: API.OperationMethod<
  PatchProjectsLocationsRepositoriesRequest,
  PatchProjectsLocationsRepositoriesResponse,
  PatchProjectsLocationsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsRepositoriesRequest,
  output: PatchProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRepositoriesDockerImagesRequest {
  /** Required. The name of the parent resource whose docker images will be listed. */
  parent: string;
  /** The next_page_token value returned from a previous list request, if any. */
  pageToken?: string;
  /** The field to order the results by. */
  orderBy?: string;
  /** The maximum number of artifacts to return. Maximum page size is 1,000. */
  pageSize?: number;
}

export const ListProjectsLocationsRepositoriesDockerImagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dockerImages" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRepositoriesDockerImagesRequest>;

export type ListProjectsLocationsRepositoriesDockerImagesResponse =
  ListDockerImagesResponse;
export const ListProjectsLocationsRepositoriesDockerImagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDockerImagesResponse;

export type ListProjectsLocationsRepositoriesDockerImagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists docker images. */
export const listProjectsLocationsRepositoriesDockerImages: API.PaginatedOperationMethod<
  ListProjectsLocationsRepositoriesDockerImagesRequest,
  ListProjectsLocationsRepositoriesDockerImagesResponse,
  ListProjectsLocationsRepositoriesDockerImagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRepositoriesDockerImagesRequest,
  output: ListProjectsLocationsRepositoriesDockerImagesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsRepositoriesDockerImagesRequest {
  /** Required. The name of the docker images. */
  name: string;
}

export const GetProjectsLocationsRepositoriesDockerImagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRepositoriesDockerImagesRequest>;

export type GetProjectsLocationsRepositoriesDockerImagesResponse = DockerImage;
export const GetProjectsLocationsRepositoriesDockerImagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DockerImage;

export type GetProjectsLocationsRepositoriesDockerImagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a docker image. */
export const getProjectsLocationsRepositoriesDockerImages: API.OperationMethod<
  GetProjectsLocationsRepositoriesDockerImagesRequest,
  GetProjectsLocationsRepositoriesDockerImagesResponse,
  GetProjectsLocationsRepositoriesDockerImagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRepositoriesDockerImagesRequest,
  output: GetProjectsLocationsRepositoriesDockerImagesResponse,
  errors: [NotFound, Forbidden],
}));

export interface UploadProjectsLocationsRepositoriesKfpArtifactsRequest {
  /** The resource name of the repository where the KFP artifact will be uploaded. */
  parent: string;
  /** Request body */
  body?: UploadKfpArtifactRequest;
}

export const UploadProjectsLocationsRepositoriesKfpArtifactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(UploadKfpArtifactRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/kfpArtifacts:create",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UploadProjectsLocationsRepositoriesKfpArtifactsRequest>;

export type UploadProjectsLocationsRepositoriesKfpArtifactsResponse =
  UploadKfpArtifactMediaResponse;
export const UploadProjectsLocationsRepositoriesKfpArtifactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UploadKfpArtifactMediaResponse;

export type UploadProjectsLocationsRepositoriesKfpArtifactsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Directly uploads a KFP artifact. The returned Operation will complete once the resource is uploaded. Package, Version, and File resources will be created based on the uploaded artifact. Uploaded artifacts that conflict with existing resources will be overwritten. */
export const uploadProjectsLocationsRepositoriesKfpArtifacts: API.OperationMethod<
  UploadProjectsLocationsRepositoriesKfpArtifactsRequest,
  UploadProjectsLocationsRepositoriesKfpArtifactsResponse,
  UploadProjectsLocationsRepositoriesKfpArtifactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UploadProjectsLocationsRepositoriesKfpArtifactsRequest,
  output: UploadProjectsLocationsRepositoriesKfpArtifactsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UploadProjectsLocationsRepositoriesGenericArtifactsRequest {
  /** The resource name of the repository where the generic artifact will be uploaded. */
  parent: string;
  /** Request body */
  body?: UploadGenericArtifactRequest;
}

export const UploadProjectsLocationsRepositoriesGenericArtifactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(UploadGenericArtifactRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/genericArtifacts:create",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UploadProjectsLocationsRepositoriesGenericArtifactsRequest>;

export type UploadProjectsLocationsRepositoriesGenericArtifactsResponse =
  UploadGenericArtifactMediaResponse;
export const UploadProjectsLocationsRepositoriesGenericArtifactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UploadGenericArtifactMediaResponse;

export type UploadProjectsLocationsRepositoriesGenericArtifactsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Directly uploads a Generic artifact. The returned operation will complete once the resources are uploaded. Package, version, and file resources are created based on the uploaded artifact. Uploaded artifacts that conflict with existing resources will raise an `ALREADY_EXISTS` error. */
export const uploadProjectsLocationsRepositoriesGenericArtifacts: API.OperationMethod<
  UploadProjectsLocationsRepositoriesGenericArtifactsRequest,
  UploadProjectsLocationsRepositoriesGenericArtifactsResponse,
  UploadProjectsLocationsRepositoriesGenericArtifactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UploadProjectsLocationsRepositoriesGenericArtifactsRequest,
  output: UploadProjectsLocationsRepositoriesGenericArtifactsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UploadProjectsLocationsRepositoriesFilesRequest {
  /** Required. The resource name of the repository where the file will be uploaded. */
  parent: string;
  /** Request body */
  body?: UploadFileRequest;
}

export const UploadProjectsLocationsRepositoriesFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(UploadFileRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/files:upload",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UploadProjectsLocationsRepositoriesFilesRequest>;

export type UploadProjectsLocationsRepositoriesFilesResponse =
  UploadFileMediaResponse;
export const UploadProjectsLocationsRepositoriesFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ UploadFileMediaResponse;

export type UploadProjectsLocationsRepositoriesFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Directly uploads a file to a repository. The returned Operation will complete once the resources are uploaded. */
export const uploadProjectsLocationsRepositoriesFiles: API.OperationMethod<
  UploadProjectsLocationsRepositoriesFilesRequest,
  UploadProjectsLocationsRepositoriesFilesResponse,
  UploadProjectsLocationsRepositoriesFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UploadProjectsLocationsRepositoriesFilesRequest,
  output: UploadProjectsLocationsRepositoriesFilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsRepositoriesFilesRequest {
  /** Required. The name of the file to retrieve. */
  name: string;
}

export const GetProjectsLocationsRepositoriesFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRepositoriesFilesRequest>;

export type GetProjectsLocationsRepositoriesFilesResponse =
  GoogleDevtoolsArtifactregistryV1File;
export const GetProjectsLocationsRepositoriesFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleDevtoolsArtifactregistryV1File;

export type GetProjectsLocationsRepositoriesFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a file. */
export const getProjectsLocationsRepositoriesFiles: API.OperationMethod<
  GetProjectsLocationsRepositoriesFilesRequest,
  GetProjectsLocationsRepositoriesFilesResponse,
  GetProjectsLocationsRepositoriesFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRepositoriesFilesRequest,
  output: GetProjectsLocationsRepositoriesFilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsRepositoriesFilesRequest {
  /** An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `name` * `owner` * `annotations` Examples of using a filter: To filter the results of your request to files with the name `my_file.txt` in project `my-project` in the `us-central` region, in repository `my-repo`, append the following filter expression to your request: * `name="projects/my-project/locations/us-central1/repositories/my-repo/files/my-file.txt"` You can also use wildcards to match any number of characters before or after the value: * `name="projects/my-project/locations/us-central1/repositories/my-repo/files/my-*"` * `name="projects/my-project/locations/us-central1/repositories/my-repo/files/*file.txt"` * `name="projects/my-project/locations/us-central1/repositories/my-repo/files/*file*"` To filter the results of your request to files owned by the version `1.0` in package `pkg1`, append the following filter expression to your request: * `owner="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/versions/1.0"` To filter the results of your request to files with the annotation key-value pair [`external_link`: `external_link_value`], append the following filter expression to your request: * `"annotations.external_link:external_link_value"` To filter just for a specific annotation key `external_link`, append the following filter expression to your request: * `"annotations.external_link"` If the annotation key or value contains special characters, you can escape them by surrounding the value with backticks. For example, to filter the results of your request to files with the annotation key-value pair [`external.link`:`https://example.com/my-file`], append the following filter expression to your request: * `` "annotations.`external.link`:`https://example.com/my-file`" `` You can also filter with annotations with a wildcard to match any number of characters before or after the value: * `` "annotations.*_link:`*example.com*`" `` */
  filter?: string;
  /** The field to order the results by. */
  orderBy?: string;
  /** Required. The name of the repository whose files will be listed. For example: "projects/p1/locations/us-central1/repositories/repo1 */
  parent: string;
  /** The next_page_token value returned from a previous list request, if any. */
  pageToken?: string;
  /** The maximum number of files to return. Maximum page size is 1,000. */
  pageSize?: number;
}

export const ListProjectsLocationsRepositoriesFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/files" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRepositoriesFilesRequest>;

export type ListProjectsLocationsRepositoriesFilesResponse = ListFilesResponse;
export const ListProjectsLocationsRepositoriesFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListFilesResponse;

export type ListProjectsLocationsRepositoriesFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists files. */
export const listProjectsLocationsRepositoriesFiles: API.PaginatedOperationMethod<
  ListProjectsLocationsRepositoriesFilesRequest,
  ListProjectsLocationsRepositoriesFilesResponse,
  ListProjectsLocationsRepositoriesFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRepositoriesFilesRequest,
  output: ListProjectsLocationsRepositoriesFilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsRepositoriesFilesRequest {
  /** The name of the file, for example: `projects/p1/locations/us-central1/repositories/repo1/files/a%2Fb%2Fc.txt`. If the file ID part contains slashes, they are escaped. */
  name: string;
  /** Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask */
  updateMask?: string;
  /** Request body */
  body?: GoogleDevtoolsArtifactregistryV1File;
}

export const PatchProjectsLocationsRepositoriesFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleDevtoolsArtifactregistryV1File).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsRepositoriesFilesRequest>;

export type PatchProjectsLocationsRepositoriesFilesResponse =
  GoogleDevtoolsArtifactregistryV1File;
export const PatchProjectsLocationsRepositoriesFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleDevtoolsArtifactregistryV1File;

export type PatchProjectsLocationsRepositoriesFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a file. */
export const patchProjectsLocationsRepositoriesFiles: API.OperationMethod<
  PatchProjectsLocationsRepositoriesFilesRequest,
  PatchProjectsLocationsRepositoriesFilesResponse,
  PatchProjectsLocationsRepositoriesFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsRepositoriesFilesRequest,
  output: PatchProjectsLocationsRepositoriesFilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DownloadProjectsLocationsRepositoriesFilesRequest {
  /** Required. The name of the file to download. */
  name: string;
}

export const DownloadProjectsLocationsRepositoriesFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:download" }),
    svc,
  ) as unknown as Schema.Schema<DownloadProjectsLocationsRepositoriesFilesRequest>;

export type DownloadProjectsLocationsRepositoriesFilesResponse =
  DownloadFileResponse;
export const DownloadProjectsLocationsRepositoriesFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DownloadFileResponse;

export type DownloadProjectsLocationsRepositoriesFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Download a file. */
export const downloadProjectsLocationsRepositoriesFiles: API.OperationMethod<
  DownloadProjectsLocationsRepositoriesFilesRequest,
  DownloadProjectsLocationsRepositoriesFilesResponse,
  DownloadProjectsLocationsRepositoriesFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DownloadProjectsLocationsRepositoriesFilesRequest,
  output: DownloadProjectsLocationsRepositoriesFilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsRepositoriesFilesRequest {
  /** Required. The name of the file to delete. */
  name: string;
}

export const DeleteProjectsLocationsRepositoriesFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsRepositoriesFilesRequest>;

export type DeleteProjectsLocationsRepositoriesFilesResponse = Operation;
export const DeleteProjectsLocationsRepositoriesFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsRepositoriesFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a file and all of its content. It is only allowed on generic repositories. The returned operation will complete once the file has been deleted. */
export const deleteProjectsLocationsRepositoriesFiles: API.OperationMethod<
  DeleteProjectsLocationsRepositoriesFilesRequest,
  DeleteProjectsLocationsRepositoriesFilesResponse,
  DeleteProjectsLocationsRepositoriesFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRepositoriesFilesRequest,
  output: DeleteProjectsLocationsRepositoriesFilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRepositoriesMavenArtifactsRequest {
  /** The maximum number of artifacts to return. Maximum page size is 1,000. */
  pageSize?: number;
  /** Required. The name of the parent resource whose maven artifacts will be listed. */
  parent: string;
  /** The next_page_token value returned from a previous list request, if any. */
  pageToken?: string;
}

export const ListProjectsLocationsRepositoriesMavenArtifactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/mavenArtifacts" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRepositoriesMavenArtifactsRequest>;

export type ListProjectsLocationsRepositoriesMavenArtifactsResponse =
  ListMavenArtifactsResponse;
export const ListProjectsLocationsRepositoriesMavenArtifactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMavenArtifactsResponse;

export type ListProjectsLocationsRepositoriesMavenArtifactsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists maven artifacts. */
export const listProjectsLocationsRepositoriesMavenArtifacts: API.PaginatedOperationMethod<
  ListProjectsLocationsRepositoriesMavenArtifactsRequest,
  ListProjectsLocationsRepositoriesMavenArtifactsResponse,
  ListProjectsLocationsRepositoriesMavenArtifactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRepositoriesMavenArtifactsRequest,
  output: ListProjectsLocationsRepositoriesMavenArtifactsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsRepositoriesMavenArtifactsRequest {
  /** Required. The name of the maven artifact. */
  name: string;
}

export const GetProjectsLocationsRepositoriesMavenArtifactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRepositoriesMavenArtifactsRequest>;

export type GetProjectsLocationsRepositoriesMavenArtifactsResponse =
  MavenArtifact;
export const GetProjectsLocationsRepositoriesMavenArtifactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ MavenArtifact;

export type GetProjectsLocationsRepositoriesMavenArtifactsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a maven artifact. */
export const getProjectsLocationsRepositoriesMavenArtifacts: API.OperationMethod<
  GetProjectsLocationsRepositoriesMavenArtifactsRequest,
  GetProjectsLocationsRepositoriesMavenArtifactsResponse,
  GetProjectsLocationsRepositoriesMavenArtifactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRepositoriesMavenArtifactsRequest,
  output: GetProjectsLocationsRepositoriesMavenArtifactsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UploadProjectsLocationsRepositoriesYumArtifactsRequest {
  /** The name of the parent resource where the artifacts will be uploaded. */
  parent: string;
  /** Request body */
  body?: UploadYumArtifactRequest;
}

export const UploadProjectsLocationsRepositoriesYumArtifactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(UploadYumArtifactRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/yumArtifacts:create",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UploadProjectsLocationsRepositoriesYumArtifactsRequest>;

export type UploadProjectsLocationsRepositoriesYumArtifactsResponse =
  UploadYumArtifactMediaResponse;
export const UploadProjectsLocationsRepositoriesYumArtifactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UploadYumArtifactMediaResponse;

export type UploadProjectsLocationsRepositoriesYumArtifactsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Directly uploads a Yum artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored. */
export const uploadProjectsLocationsRepositoriesYumArtifacts: API.OperationMethod<
  UploadProjectsLocationsRepositoriesYumArtifactsRequest,
  UploadProjectsLocationsRepositoriesYumArtifactsResponse,
  UploadProjectsLocationsRepositoriesYumArtifactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UploadProjectsLocationsRepositoriesYumArtifactsRequest,
  output: UploadProjectsLocationsRepositoriesYumArtifactsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImportProjectsLocationsRepositoriesYumArtifactsRequest {
  /** The name of the parent resource where the artifacts will be imported. */
  parent: string;
  /** Request body */
  body?: ImportYumArtifactsRequest;
}

export const ImportProjectsLocationsRepositoriesYumArtifactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ImportYumArtifactsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/yumArtifacts:import",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportProjectsLocationsRepositoriesYumArtifactsRequest>;

export type ImportProjectsLocationsRepositoriesYumArtifactsResponse = Operation;
export const ImportProjectsLocationsRepositoriesYumArtifactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ImportProjectsLocationsRepositoriesYumArtifactsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Imports Yum (RPM) artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored. */
export const importProjectsLocationsRepositoriesYumArtifacts: API.OperationMethod<
  ImportProjectsLocationsRepositoriesYumArtifactsRequest,
  ImportProjectsLocationsRepositoriesYumArtifactsResponse,
  ImportProjectsLocationsRepositoriesYumArtifactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportProjectsLocationsRepositoriesYumArtifactsRequest,
  output: ImportProjectsLocationsRepositoriesYumArtifactsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsRepositoriesAttachmentsRequest {
  /** Required. The name of the attachment to delete. */
  name: string;
}

export const DeleteProjectsLocationsRepositoriesAttachmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsRepositoriesAttachmentsRequest>;

export type DeleteProjectsLocationsRepositoriesAttachmentsResponse = Operation;
export const DeleteProjectsLocationsRepositoriesAttachmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsRepositoriesAttachmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an attachment. The returned Operation will finish once the attachments has been deleted. It will not have any Operation metadata and will return a `google.protobuf.Empty` response. */
export const deleteProjectsLocationsRepositoriesAttachments: API.OperationMethod<
  DeleteProjectsLocationsRepositoriesAttachmentsRequest,
  DeleteProjectsLocationsRepositoriesAttachmentsResponse,
  DeleteProjectsLocationsRepositoriesAttachmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRepositoriesAttachmentsRequest,
  output: DeleteProjectsLocationsRepositoriesAttachmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsRepositoriesAttachmentsRequest {
  /** Required. The name of the attachment to retrieve. */
  name: string;
}

export const GetProjectsLocationsRepositoriesAttachmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRepositoriesAttachmentsRequest>;

export type GetProjectsLocationsRepositoriesAttachmentsResponse = Attachment;
export const GetProjectsLocationsRepositoriesAttachmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Attachment;

export type GetProjectsLocationsRepositoriesAttachmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an attachment. */
export const getProjectsLocationsRepositoriesAttachments: API.OperationMethod<
  GetProjectsLocationsRepositoriesAttachmentsRequest,
  GetProjectsLocationsRepositoriesAttachmentsResponse,
  GetProjectsLocationsRepositoriesAttachmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRepositoriesAttachmentsRequest,
  output: GetProjectsLocationsRepositoriesAttachmentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsRepositoriesAttachmentsRequest {
  /** The maximum number of attachments to return. Maximum page size is 1,000. */
  pageSize?: number;
  /** Required. The name of the parent resource whose attachments will be listed. */
  parent: string;
  /** Optional. An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `target` * `type` * `attachment_namespace` */
  filter?: string;
  /** The next_page_token value returned from a previous list request, if any. */
  pageToken?: string;
}

export const ListProjectsLocationsRepositoriesAttachmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/attachments" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRepositoriesAttachmentsRequest>;

export type ListProjectsLocationsRepositoriesAttachmentsResponse =
  ListAttachmentsResponse;
export const ListProjectsLocationsRepositoriesAttachmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAttachmentsResponse;

export type ListProjectsLocationsRepositoriesAttachmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists attachments. */
export const listProjectsLocationsRepositoriesAttachments: API.PaginatedOperationMethod<
  ListProjectsLocationsRepositoriesAttachmentsRequest,
  ListProjectsLocationsRepositoriesAttachmentsResponse,
  ListProjectsLocationsRepositoriesAttachmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRepositoriesAttachmentsRequest,
  output: ListProjectsLocationsRepositoriesAttachmentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsRepositoriesAttachmentsRequest {
  /** Required. The name of the parent resource where the attachment will be created. */
  parent: string;
  /** Required. The attachment id to use for this attachment. */
  attachmentId?: string;
  /** Request body */
  body?: Attachment;
}

export const CreateProjectsLocationsRepositoriesAttachmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    attachmentId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("attachmentId"),
    ),
    body: Schema.optional(Attachment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/attachments", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsRepositoriesAttachmentsRequest>;

export type CreateProjectsLocationsRepositoriesAttachmentsResponse = Operation;
export const CreateProjectsLocationsRepositoriesAttachmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsRepositoriesAttachmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an attachment. The returned Operation will finish once the attachment has been created. Its response will be the created attachment. */
export const createProjectsLocationsRepositoriesAttachments: API.OperationMethod<
  CreateProjectsLocationsRepositoriesAttachmentsRequest,
  CreateProjectsLocationsRepositoriesAttachmentsResponse,
  CreateProjectsLocationsRepositoriesAttachmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsRepositoriesAttachmentsRequest,
  output: CreateProjectsLocationsRepositoriesAttachmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRepositoriesNpmPackagesRequest {
  /** The maximum number of artifacts to return. Maximum page size is 1,000. */
  pageSize?: number;
  /** Required. The name of the parent resource whose npm packages will be listed. */
  parent: string;
  /** The next_page_token value returned from a previous list request, if any. */
  pageToken?: string;
}

export const ListProjectsLocationsRepositoriesNpmPackagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/npmPackages" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRepositoriesNpmPackagesRequest>;

export type ListProjectsLocationsRepositoriesNpmPackagesResponse =
  ListNpmPackagesResponse;
export const ListProjectsLocationsRepositoriesNpmPackagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListNpmPackagesResponse;

export type ListProjectsLocationsRepositoriesNpmPackagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists npm packages. */
export const listProjectsLocationsRepositoriesNpmPackages: API.PaginatedOperationMethod<
  ListProjectsLocationsRepositoriesNpmPackagesRequest,
  ListProjectsLocationsRepositoriesNpmPackagesResponse,
  ListProjectsLocationsRepositoriesNpmPackagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRepositoriesNpmPackagesRequest,
  output: ListProjectsLocationsRepositoriesNpmPackagesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsRepositoriesNpmPackagesRequest {
  /** Required. The name of the npm package. */
  name: string;
}

export const GetProjectsLocationsRepositoriesNpmPackagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRepositoriesNpmPackagesRequest>;

export type GetProjectsLocationsRepositoriesNpmPackagesResponse = NpmPackage;
export const GetProjectsLocationsRepositoriesNpmPackagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ NpmPackage;

export type GetProjectsLocationsRepositoriesNpmPackagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a npm package. */
export const getProjectsLocationsRepositoriesNpmPackages: API.OperationMethod<
  GetProjectsLocationsRepositoriesNpmPackagesRequest,
  GetProjectsLocationsRepositoriesNpmPackagesResponse,
  GetProjectsLocationsRepositoriesNpmPackagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRepositoriesNpmPackagesRequest,
  output: GetProjectsLocationsRepositoriesNpmPackagesResponse,
  errors: [NotFound, Forbidden],
}));

export interface UploadProjectsLocationsRepositoriesGoogetArtifactsRequest {
  /** The name of the parent resource where the artifacts will be uploaded. */
  parent: string;
  /** Request body */
  body?: UploadGoogetArtifactRequest;
}

export const UploadProjectsLocationsRepositoriesGoogetArtifactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(UploadGoogetArtifactRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/googetArtifacts:create",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UploadProjectsLocationsRepositoriesGoogetArtifactsRequest>;

export type UploadProjectsLocationsRepositoriesGoogetArtifactsResponse =
  UploadGoogetArtifactMediaResponse;
export const UploadProjectsLocationsRepositoriesGoogetArtifactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UploadGoogetArtifactMediaResponse;

export type UploadProjectsLocationsRepositoriesGoogetArtifactsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Directly uploads a GooGet artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored. */
export const uploadProjectsLocationsRepositoriesGoogetArtifacts: API.OperationMethod<
  UploadProjectsLocationsRepositoriesGoogetArtifactsRequest,
  UploadProjectsLocationsRepositoriesGoogetArtifactsResponse,
  UploadProjectsLocationsRepositoriesGoogetArtifactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UploadProjectsLocationsRepositoriesGoogetArtifactsRequest,
  output: UploadProjectsLocationsRepositoriesGoogetArtifactsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImportProjectsLocationsRepositoriesGoogetArtifactsRequest {
  /** The name of the parent resource where the artifacts will be imported. */
  parent: string;
  /** Request body */
  body?: ImportGoogetArtifactsRequest;
}

export const ImportProjectsLocationsRepositoriesGoogetArtifactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ImportGoogetArtifactsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/googetArtifacts:import",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportProjectsLocationsRepositoriesGoogetArtifactsRequest>;

export type ImportProjectsLocationsRepositoriesGoogetArtifactsResponse =
  Operation;
export const ImportProjectsLocationsRepositoriesGoogetArtifactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ImportProjectsLocationsRepositoriesGoogetArtifactsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Imports GooGet artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored. */
export const importProjectsLocationsRepositoriesGoogetArtifacts: API.OperationMethod<
  ImportProjectsLocationsRepositoriesGoogetArtifactsRequest,
  ImportProjectsLocationsRepositoriesGoogetArtifactsResponse,
  ImportProjectsLocationsRepositoriesGoogetArtifactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportProjectsLocationsRepositoriesGoogetArtifactsRequest,
  output: ImportProjectsLocationsRepositoriesGoogetArtifactsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsRepositoriesPythonPackagesRequest {
  /** Required. The name of the python package. */
  name: string;
}

export const GetProjectsLocationsRepositoriesPythonPackagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRepositoriesPythonPackagesRequest>;

export type GetProjectsLocationsRepositoriesPythonPackagesResponse =
  PythonPackage;
export const GetProjectsLocationsRepositoriesPythonPackagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PythonPackage;

export type GetProjectsLocationsRepositoriesPythonPackagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a python package. */
export const getProjectsLocationsRepositoriesPythonPackages: API.OperationMethod<
  GetProjectsLocationsRepositoriesPythonPackagesRequest,
  GetProjectsLocationsRepositoriesPythonPackagesResponse,
  GetProjectsLocationsRepositoriesPythonPackagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRepositoriesPythonPackagesRequest,
  output: GetProjectsLocationsRepositoriesPythonPackagesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsRepositoriesPythonPackagesRequest {
  /** The maximum number of artifacts to return. Maximum page size is 1,000. */
  pageSize?: number;
  /** Required. The name of the parent resource whose python packages will be listed. */
  parent: string;
  /** The next_page_token value returned from a previous list request, if any. */
  pageToken?: string;
}

export const ListProjectsLocationsRepositoriesPythonPackagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/pythonPackages" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRepositoriesPythonPackagesRequest>;

export type ListProjectsLocationsRepositoriesPythonPackagesResponse =
  ListPythonPackagesResponse;
export const ListProjectsLocationsRepositoriesPythonPackagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPythonPackagesResponse;

export type ListProjectsLocationsRepositoriesPythonPackagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists python packages. */
export const listProjectsLocationsRepositoriesPythonPackages: API.PaginatedOperationMethod<
  ListProjectsLocationsRepositoriesPythonPackagesRequest,
  ListProjectsLocationsRepositoriesPythonPackagesResponse,
  ListProjectsLocationsRepositoriesPythonPackagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRepositoriesPythonPackagesRequest,
  output: ListProjectsLocationsRepositoriesPythonPackagesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ImportProjectsLocationsRepositoriesAptArtifactsRequest {
  /** The name of the parent resource where the artifacts will be imported. */
  parent: string;
  /** Request body */
  body?: ImportAptArtifactsRequest;
}

export const ImportProjectsLocationsRepositoriesAptArtifactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ImportAptArtifactsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/aptArtifacts:import",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportProjectsLocationsRepositoriesAptArtifactsRequest>;

export type ImportProjectsLocationsRepositoriesAptArtifactsResponse = Operation;
export const ImportProjectsLocationsRepositoriesAptArtifactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ImportProjectsLocationsRepositoriesAptArtifactsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Imports Apt artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored. */
export const importProjectsLocationsRepositoriesAptArtifacts: API.OperationMethod<
  ImportProjectsLocationsRepositoriesAptArtifactsRequest,
  ImportProjectsLocationsRepositoriesAptArtifactsResponse,
  ImportProjectsLocationsRepositoriesAptArtifactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportProjectsLocationsRepositoriesAptArtifactsRequest,
  output: ImportProjectsLocationsRepositoriesAptArtifactsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UploadProjectsLocationsRepositoriesAptArtifactsRequest {
  /** The name of the parent resource where the artifacts will be uploaded. */
  parent: string;
  /** Request body */
  body?: UploadAptArtifactRequest;
}

export const UploadProjectsLocationsRepositoriesAptArtifactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(UploadAptArtifactRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/aptArtifacts:create",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UploadProjectsLocationsRepositoriesAptArtifactsRequest>;

export type UploadProjectsLocationsRepositoriesAptArtifactsResponse =
  UploadAptArtifactMediaResponse;
export const UploadProjectsLocationsRepositoriesAptArtifactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UploadAptArtifactMediaResponse;

export type UploadProjectsLocationsRepositoriesAptArtifactsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Directly uploads an Apt artifact. The returned Operation will complete once the resources are uploaded. Package, Version, and File resources are created based on the imported artifact. Imported artifacts that conflict with existing resources are ignored. */
export const uploadProjectsLocationsRepositoriesAptArtifacts: API.OperationMethod<
  UploadProjectsLocationsRepositoriesAptArtifactsRequest,
  UploadProjectsLocationsRepositoriesAptArtifactsResponse,
  UploadProjectsLocationsRepositoriesAptArtifactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UploadProjectsLocationsRepositoriesAptArtifactsRequest,
  output: UploadProjectsLocationsRepositoriesAptArtifactsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsRepositoriesRulesRequest {
  /** Required. The name of the parent resource where the rule will be created. */
  parent: string;
  /** The rule id to use for this repository. */
  ruleId?: string;
  /** Request body */
  body?: GoogleDevtoolsArtifactregistryV1Rule;
}

export const CreateProjectsLocationsRepositoriesRulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    ruleId: Schema.optional(Schema.String).pipe(T.HttpQuery("ruleId")),
    body: Schema.optional(GoogleDevtoolsArtifactregistryV1Rule).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/rules", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsRepositoriesRulesRequest>;

export type CreateProjectsLocationsRepositoriesRulesResponse =
  GoogleDevtoolsArtifactregistryV1Rule;
export const CreateProjectsLocationsRepositoriesRulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleDevtoolsArtifactregistryV1Rule;

export type CreateProjectsLocationsRepositoriesRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a rule. */
export const createProjectsLocationsRepositoriesRules: API.OperationMethod<
  CreateProjectsLocationsRepositoriesRulesRequest,
  CreateProjectsLocationsRepositoriesRulesResponse,
  CreateProjectsLocationsRepositoriesRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsRepositoriesRulesRequest,
  output: CreateProjectsLocationsRepositoriesRulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsRepositoriesRulesRequest {
  /** Required. The name of the rule to delete. */
  name: string;
}

export const DeleteProjectsLocationsRepositoriesRulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsRepositoriesRulesRequest>;

export type DeleteProjectsLocationsRepositoriesRulesResponse = Empty;
export const DeleteProjectsLocationsRepositoriesRulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsRepositoriesRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a rule. */
export const deleteProjectsLocationsRepositoriesRules: API.OperationMethod<
  DeleteProjectsLocationsRepositoriesRulesRequest,
  DeleteProjectsLocationsRepositoriesRulesResponse,
  DeleteProjectsLocationsRepositoriesRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRepositoriesRulesRequest,
  output: DeleteProjectsLocationsRepositoriesRulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRepositoriesRulesRequest {
  /** The maximum number of rules to return. Maximum page size is 1,000. */
  pageSize?: number;
  /** Required. The name of the parent repository whose rules will be listed. For example: `projects/p1/locations/us-central1/repositories/repo1`. */
  parent: string;
  /** The next_page_token value returned from a previous list request, if any. */
  pageToken?: string;
}

export const ListProjectsLocationsRepositoriesRulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/rules" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRepositoriesRulesRequest>;

export type ListProjectsLocationsRepositoriesRulesResponse = ListRulesResponse;
export const ListProjectsLocationsRepositoriesRulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListRulesResponse;

export type ListProjectsLocationsRepositoriesRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists rules. */
export const listProjectsLocationsRepositoriesRules: API.PaginatedOperationMethod<
  ListProjectsLocationsRepositoriesRulesRequest,
  ListProjectsLocationsRepositoriesRulesResponse,
  ListProjectsLocationsRepositoriesRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRepositoriesRulesRequest,
  output: ListProjectsLocationsRepositoriesRulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsRepositoriesRulesRequest {
  /** The name of the rule, for example: `projects/p1/locations/us-central1/repositories/repo1/rules/rule1`. */
  name: string;
  /** The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask */
  updateMask?: string;
  /** Request body */
  body?: GoogleDevtoolsArtifactregistryV1Rule;
}

export const PatchProjectsLocationsRepositoriesRulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleDevtoolsArtifactregistryV1Rule).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsRepositoriesRulesRequest>;

export type PatchProjectsLocationsRepositoriesRulesResponse =
  GoogleDevtoolsArtifactregistryV1Rule;
export const PatchProjectsLocationsRepositoriesRulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleDevtoolsArtifactregistryV1Rule;

export type PatchProjectsLocationsRepositoriesRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a rule. */
export const patchProjectsLocationsRepositoriesRules: API.OperationMethod<
  PatchProjectsLocationsRepositoriesRulesRequest,
  PatchProjectsLocationsRepositoriesRulesResponse,
  PatchProjectsLocationsRepositoriesRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsRepositoriesRulesRequest,
  output: PatchProjectsLocationsRepositoriesRulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsRepositoriesRulesRequest {
  /** Required. The name of the rule to retrieve. */
  name: string;
}

export const GetProjectsLocationsRepositoriesRulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRepositoriesRulesRequest>;

export type GetProjectsLocationsRepositoriesRulesResponse =
  GoogleDevtoolsArtifactregistryV1Rule;
export const GetProjectsLocationsRepositoriesRulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleDevtoolsArtifactregistryV1Rule;

export type GetProjectsLocationsRepositoriesRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a rule. */
export const getProjectsLocationsRepositoriesRules: API.OperationMethod<
  GetProjectsLocationsRepositoriesRulesRequest,
  GetProjectsLocationsRepositoriesRulesResponse,
  GetProjectsLocationsRepositoriesRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRepositoriesRulesRequest,
  output: GetProjectsLocationsRepositoriesRulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface UploadProjectsLocationsRepositoriesGoModulesRequest {
  /** The resource name of the repository where the Go module will be uploaded. */
  parent: string;
  /** Request body */
  body?: UploadGoModuleRequest;
}

export const UploadProjectsLocationsRepositoriesGoModulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(UploadGoModuleRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/goModules:create",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UploadProjectsLocationsRepositoriesGoModulesRequest>;

export type UploadProjectsLocationsRepositoriesGoModulesResponse =
  UploadGoModuleMediaResponse;
export const UploadProjectsLocationsRepositoriesGoModulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ UploadGoModuleMediaResponse;

export type UploadProjectsLocationsRepositoriesGoModulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Directly uploads a Go module. The returned Operation will complete once the Go module is uploaded. Package, Version, and File resources are created based on the uploaded Go module. */
export const uploadProjectsLocationsRepositoriesGoModules: API.OperationMethod<
  UploadProjectsLocationsRepositoriesGoModulesRequest,
  UploadProjectsLocationsRepositoriesGoModulesResponse,
  UploadProjectsLocationsRepositoriesGoModulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UploadProjectsLocationsRepositoriesGoModulesRequest,
  output: UploadProjectsLocationsRepositoriesGoModulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRepositoriesPackagesRequest {
  /** Required. The name of the parent resource whose packages will be listed. */
  parent: string;
  /** The next_page_token value returned from a previous list request, if any. */
  pageToken?: string;
  /** The maximum number of packages to return. Maximum page size is 1,000. */
  pageSize?: number;
  /** Optional. An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `name` * `annotations` Examples of using a filter: To filter the results of your request to packages with the name `my-package` in project `my-project` in the `us-central` region, in repository `my-repo`, append the following filter expression to your request: * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package"` You can also use wildcards to match any number of characters before or after the value: * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-*"` * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/*package"` * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/*pack*"` To filter the results of your request to packages with the annotation key-value pair [`external_link`: `external_link_value`], append the following filter expression to your request": * `"annotations.external_link:external_link_value"` To filter the results just for a specific annotation key `external_link`, append the following filter expression to your request: * `"annotations.external_link"` If the annotation key or value contains special characters, you can escape them by surrounding the value with backticks. For example, to filter the results of your request to packages with the annotation key-value pair [`external.link`:`https://example.com/my-package`], append the following filter expression to your request: * `` "annotations.`external.link`:`https://example.com/my-package`" `` You can also filter with annotations with a wildcard to match any number of characters before or after the value: * `` "annotations.*_link:`*example.com*`" `` */
  filter?: string;
  /** Optional. The field to order the results by. */
  orderBy?: string;
}

export const ListProjectsLocationsRepositoriesPackagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/packages" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRepositoriesPackagesRequest>;

export type ListProjectsLocationsRepositoriesPackagesResponse =
  ListPackagesResponse;
export const ListProjectsLocationsRepositoriesPackagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPackagesResponse;

export type ListProjectsLocationsRepositoriesPackagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists packages. */
export const listProjectsLocationsRepositoriesPackages: API.PaginatedOperationMethod<
  ListProjectsLocationsRepositoriesPackagesRequest,
  ListProjectsLocationsRepositoriesPackagesResponse,
  ListProjectsLocationsRepositoriesPackagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRepositoriesPackagesRequest,
  output: ListProjectsLocationsRepositoriesPackagesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsRepositoriesPackagesRequest {
  /** The name of the package, for example: `projects/p1/locations/us-central1/repositories/repo1/packages/pkg1`. If the package ID part contains slashes, the slashes are escaped. */
  name: string;
  /** The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask */
  updateMask?: string;
  /** Request body */
  body?: Package;
}

export const PatchProjectsLocationsRepositoriesPackagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Package).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsRepositoriesPackagesRequest>;

export type PatchProjectsLocationsRepositoriesPackagesResponse = Package;
export const PatchProjectsLocationsRepositoriesPackagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Package;

export type PatchProjectsLocationsRepositoriesPackagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a package. */
export const patchProjectsLocationsRepositoriesPackages: API.OperationMethod<
  PatchProjectsLocationsRepositoriesPackagesRequest,
  PatchProjectsLocationsRepositoriesPackagesResponse,
  PatchProjectsLocationsRepositoriesPackagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsRepositoriesPackagesRequest,
  output: PatchProjectsLocationsRepositoriesPackagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsRepositoriesPackagesRequest {
  /** Required. The name of the package to retrieve. */
  name: string;
}

export const GetProjectsLocationsRepositoriesPackagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRepositoriesPackagesRequest>;

export type GetProjectsLocationsRepositoriesPackagesResponse = Package;
export const GetProjectsLocationsRepositoriesPackagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Package;

export type GetProjectsLocationsRepositoriesPackagesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a package. */
export const getProjectsLocationsRepositoriesPackages: API.OperationMethod<
  GetProjectsLocationsRepositoriesPackagesRequest,
  GetProjectsLocationsRepositoriesPackagesResponse,
  GetProjectsLocationsRepositoriesPackagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRepositoriesPackagesRequest,
  output: GetProjectsLocationsRepositoriesPackagesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsRepositoriesPackagesRequest {
  /** Required. The name of the package to delete. */
  name: string;
}

export const DeleteProjectsLocationsRepositoriesPackagesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsRepositoriesPackagesRequest>;

export type DeleteProjectsLocationsRepositoriesPackagesResponse = Operation;
export const DeleteProjectsLocationsRepositoriesPackagesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsRepositoriesPackagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a package and all of its versions and tags. The returned operation will complete once the package has been deleted. */
export const deleteProjectsLocationsRepositoriesPackages: API.OperationMethod<
  DeleteProjectsLocationsRepositoriesPackagesRequest,
  DeleteProjectsLocationsRepositoriesPackagesResponse,
  DeleteProjectsLocationsRepositoriesPackagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRepositoriesPackagesRequest,
  output: DeleteProjectsLocationsRepositoriesPackagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRepositoriesPackagesVersionsRequest {
  /** Optional. An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `name` * `annotations` Examples of using a filter: To filter the results of your request to versions with the name `my-version` in project `my-project` in the `us-central` region, in repository `my-repo`, append the following filter expression to your request: * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/versions/my-version"` You can also use wildcards to match any number of characters before or after the value: * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/versions/*version"` * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/versions/my*"` * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/versions/*version*"` To filter the results of your request to versions with the annotation key-value pair [`external_link`: `external_link_value`], append the following filter expression to your request: * `"annotations.external_link:external_link_value"` To filter just for a specific annotation key `external_link`, append the following filter expression to your request: * `"annotations.external_link"` If the annotation key or value contains special characters, you can escape them by surrounding the value with backticks. For example, to filter the results of your request to versions with the annotation key-value pair [`external.link`:`https://example.com/my-version`], append the following filter expression to your request: * `` "annotations.`external.link`:`https://example.com/my-version`" `` You can also filter with annotations with a wildcard to match any number of characters before or after the value: * `` "annotations.*_link:`*example.com*`" `` */
  filter?: string;
  /** Optional. The field to order the results by. */
  orderBy?: string;
  /** The name of the parent resource whose versions will be listed. */
  parent: string;
  /** The next_page_token value returned from a previous list request, if any. */
  pageToken?: string;
  /** The maximum number of versions to return. Maximum page size is 1,000. */
  pageSize?: number;
  /** The view that should be returned in the response. */
  view?: "VERSION_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
}

export const ListProjectsLocationsRepositoriesPackagesVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/versions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRepositoriesPackagesVersionsRequest>;

export type ListProjectsLocationsRepositoriesPackagesVersionsResponse =
  ListVersionsResponse;
export const ListProjectsLocationsRepositoriesPackagesVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListVersionsResponse;

export type ListProjectsLocationsRepositoriesPackagesVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists versions. */
export const listProjectsLocationsRepositoriesPackagesVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsRepositoriesPackagesVersionsRequest,
  ListProjectsLocationsRepositoriesPackagesVersionsResponse,
  ListProjectsLocationsRepositoriesPackagesVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRepositoriesPackagesVersionsRequest,
  output: ListProjectsLocationsRepositoriesPackagesVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsRepositoriesPackagesVersionsRequest {
  /** The name of the version, for example: `projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/art1`. If the package or version ID parts contain slashes, the slashes are escaped. */
  name: string;
  /** The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask */
  updateMask?: string;
  /** Request body */
  body?: Version;
}

export const PatchProjectsLocationsRepositoriesPackagesVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Version).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsRepositoriesPackagesVersionsRequest>;

export type PatchProjectsLocationsRepositoriesPackagesVersionsResponse =
  Version;
export const PatchProjectsLocationsRepositoriesPackagesVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Version;

export type PatchProjectsLocationsRepositoriesPackagesVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a version. */
export const patchProjectsLocationsRepositoriesPackagesVersions: API.OperationMethod<
  PatchProjectsLocationsRepositoriesPackagesVersionsRequest,
  PatchProjectsLocationsRepositoriesPackagesVersionsResponse,
  PatchProjectsLocationsRepositoriesPackagesVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsRepositoriesPackagesVersionsRequest,
  output: PatchProjectsLocationsRepositoriesPackagesVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchDeleteProjectsLocationsRepositoriesPackagesVersionsRequest {
  /** The name of the repository holding all requested versions. */
  parent: string;
  /** Request body */
  body?: BatchDeleteVersionsRequest;
}

export const BatchDeleteProjectsLocationsRepositoriesPackagesVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchDeleteVersionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/versions:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchDeleteProjectsLocationsRepositoriesPackagesVersionsRequest>;

export type BatchDeleteProjectsLocationsRepositoriesPackagesVersionsResponse =
  Operation;
export const BatchDeleteProjectsLocationsRepositoriesPackagesVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type BatchDeleteProjectsLocationsRepositoriesPackagesVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes multiple versions across a repository. The returned operation will complete once the versions have been deleted. */
export const batchDeleteProjectsLocationsRepositoriesPackagesVersions: API.OperationMethod<
  BatchDeleteProjectsLocationsRepositoriesPackagesVersionsRequest,
  BatchDeleteProjectsLocationsRepositoriesPackagesVersionsResponse,
  BatchDeleteProjectsLocationsRepositoriesPackagesVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeleteProjectsLocationsRepositoriesPackagesVersionsRequest,
  output: BatchDeleteProjectsLocationsRepositoriesPackagesVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsRepositoriesPackagesVersionsRequest {
  /** The name of the version to retrieve. */
  name: string;
  /** The view that should be returned in the response. */
  view?: "VERSION_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
}

export const GetProjectsLocationsRepositoriesPackagesVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRepositoriesPackagesVersionsRequest>;

export type GetProjectsLocationsRepositoriesPackagesVersionsResponse = Version;
export const GetProjectsLocationsRepositoriesPackagesVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Version;

export type GetProjectsLocationsRepositoriesPackagesVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a version */
export const getProjectsLocationsRepositoriesPackagesVersions: API.OperationMethod<
  GetProjectsLocationsRepositoriesPackagesVersionsRequest,
  GetProjectsLocationsRepositoriesPackagesVersionsResponse,
  GetProjectsLocationsRepositoriesPackagesVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRepositoriesPackagesVersionsRequest,
  output: GetProjectsLocationsRepositoriesPackagesVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsRepositoriesPackagesVersionsRequest {
  /** By default, a version that is tagged may not be deleted. If force=true, the version and any tags pointing to the version are deleted. */
  force?: boolean;
  /** The name of the version to delete. */
  name: string;
}

export const DeleteProjectsLocationsRepositoriesPackagesVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsRepositoriesPackagesVersionsRequest>;

export type DeleteProjectsLocationsRepositoriesPackagesVersionsResponse =
  Operation;
export const DeleteProjectsLocationsRepositoriesPackagesVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsRepositoriesPackagesVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a version and all of its content. The returned operation will complete once the version has been deleted. */
export const deleteProjectsLocationsRepositoriesPackagesVersions: API.OperationMethod<
  DeleteProjectsLocationsRepositoriesPackagesVersionsRequest,
  DeleteProjectsLocationsRepositoriesPackagesVersionsResponse,
  DeleteProjectsLocationsRepositoriesPackagesVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRepositoriesPackagesVersionsRequest,
  output: DeleteProjectsLocationsRepositoriesPackagesVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRepositoriesPackagesTagsRequest {
  /** The maximum number of tags to return. Maximum page size is 1,000. */
  pageSize?: number;
  /** The name of the parent package whose tags will be listed. For example: `projects/p1/locations/us-central1/repositories/repo1/packages/pkg1`. */
  parent: string;
  /** An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `name` * `version` Examples of using a filter: To filter the results of your request to tags with the name `my-tag` in package `my-package` in repository `my-repo` in project "`y-project` in the us-central region, append the following filter expression to your request: * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/tags/my-tag"` You can also use wildcards to match any number of characters before or after the value: * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/tags/my*"` * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/tags/*tag"` * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/tags/*tag*"` To filter the results of your request to tags applied to the version `1.0` in package `my-package`, append the following filter expression to your request: * `version="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/versions/1.0"` */
  filter?: string;
  /** The next_page_token value returned from a previous list request, if any. */
  pageToken?: string;
}

export const ListProjectsLocationsRepositoriesPackagesTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/tags" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRepositoriesPackagesTagsRequest>;

export type ListProjectsLocationsRepositoriesPackagesTagsResponse =
  ListTagsResponse;
export const ListProjectsLocationsRepositoriesPackagesTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTagsResponse;

export type ListProjectsLocationsRepositoriesPackagesTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists tags. */
export const listProjectsLocationsRepositoriesPackagesTags: API.PaginatedOperationMethod<
  ListProjectsLocationsRepositoriesPackagesTagsRequest,
  ListProjectsLocationsRepositoriesPackagesTagsResponse,
  ListProjectsLocationsRepositoriesPackagesTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRepositoriesPackagesTagsRequest,
  output: ListProjectsLocationsRepositoriesPackagesTagsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsRepositoriesPackagesTagsRequest {
  /** The name of the tag, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/tags/tag1". If the package part contains slashes, the slashes are escaped. The tag part can only have characters in [a-zA-Z0-9\-._~:@], anything else must be URL encoded. */
  name: string;
  /** The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask */
  updateMask?: string;
  /** Request body */
  body?: Tag;
}

export const PatchProjectsLocationsRepositoriesPackagesTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Tag).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsRepositoriesPackagesTagsRequest>;

export type PatchProjectsLocationsRepositoriesPackagesTagsResponse = Tag;
export const PatchProjectsLocationsRepositoriesPackagesTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Tag;

export type PatchProjectsLocationsRepositoriesPackagesTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a tag. */
export const patchProjectsLocationsRepositoriesPackagesTags: API.OperationMethod<
  PatchProjectsLocationsRepositoriesPackagesTagsRequest,
  PatchProjectsLocationsRepositoriesPackagesTagsResponse,
  PatchProjectsLocationsRepositoriesPackagesTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsRepositoriesPackagesTagsRequest,
  output: PatchProjectsLocationsRepositoriesPackagesTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsRepositoriesPackagesTagsRequest {
  /** The name of the tag to retrieve. */
  name: string;
}

export const GetProjectsLocationsRepositoriesPackagesTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRepositoriesPackagesTagsRequest>;

export type GetProjectsLocationsRepositoriesPackagesTagsResponse = Tag;
export const GetProjectsLocationsRepositoriesPackagesTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Tag;

export type GetProjectsLocationsRepositoriesPackagesTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a tag. */
export const getProjectsLocationsRepositoriesPackagesTags: API.OperationMethod<
  GetProjectsLocationsRepositoriesPackagesTagsRequest,
  GetProjectsLocationsRepositoriesPackagesTagsResponse,
  GetProjectsLocationsRepositoriesPackagesTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRepositoriesPackagesTagsRequest,
  output: GetProjectsLocationsRepositoriesPackagesTagsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsRepositoriesPackagesTagsRequest {
  /** The name of the parent resource where the tag will be created. */
  parent: string;
  /** The tag id to use for this repository. */
  tagId?: string;
  /** Request body */
  body?: Tag;
}

export const CreateProjectsLocationsRepositoriesPackagesTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    tagId: Schema.optional(Schema.String).pipe(T.HttpQuery("tagId")),
    body: Schema.optional(Tag).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/tags", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsRepositoriesPackagesTagsRequest>;

export type CreateProjectsLocationsRepositoriesPackagesTagsResponse = Tag;
export const CreateProjectsLocationsRepositoriesPackagesTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Tag;

export type CreateProjectsLocationsRepositoriesPackagesTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a tag. */
export const createProjectsLocationsRepositoriesPackagesTags: API.OperationMethod<
  CreateProjectsLocationsRepositoriesPackagesTagsRequest,
  CreateProjectsLocationsRepositoriesPackagesTagsResponse,
  CreateProjectsLocationsRepositoriesPackagesTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsRepositoriesPackagesTagsRequest,
  output: CreateProjectsLocationsRepositoriesPackagesTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsRepositoriesPackagesTagsRequest {
  /** The name of the tag to delete. */
  name: string;
}

export const DeleteProjectsLocationsRepositoriesPackagesTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsRepositoriesPackagesTagsRequest>;

export type DeleteProjectsLocationsRepositoriesPackagesTagsResponse = Empty;
export const DeleteProjectsLocationsRepositoriesPackagesTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsRepositoriesPackagesTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a tag. */
export const deleteProjectsLocationsRepositoriesPackagesTags: API.OperationMethod<
  DeleteProjectsLocationsRepositoriesPackagesTagsRequest,
  DeleteProjectsLocationsRepositoriesPackagesTagsResponse,
  DeleteProjectsLocationsRepositoriesPackagesTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRepositoriesPackagesTagsRequest,
  output: DeleteProjectsLocationsRepositoriesPackagesTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
