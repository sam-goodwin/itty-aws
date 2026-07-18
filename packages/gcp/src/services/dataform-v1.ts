// ==========================================================================
// Dataform API (dataform v1)
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
  name: "dataform",
  version: "v1",
  rootUrl: "https://dataform.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface IncrementalLoadMode {
  /** Column name for incremental load modes */
  column?: string;
}

export const IncrementalLoadMode: Schema.Codec<IncrementalLoadMode> =
  /*@__PURE__*/ Schema.Struct({
    column: Schema.optional(Schema.String),
  }).annotate({ identifier: "IncrementalLoadMode" });

export interface SimpleLoadMode {}

export const SimpleLoadMode: Schema.Codec<SimpleLoadMode> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SimpleLoadMode",
  });

export interface LoadConfig {
  /** Insert records where the value exceeds the previous maximum value for a column in the destination table */
  maximum?: IncrementalLoadMode;
  /** Insert records where the value of a column is not already present in the destination table */
  unique?: IncrementalLoadMode;
  /** Replace destination table */
  replace?: SimpleLoadMode;
  /** Append into destination table */
  append?: SimpleLoadMode;
}

export const LoadConfig: Schema.Codec<LoadConfig> =
  /*@__PURE__*/ Schema.Struct({
    maximum: Schema.optional(IncrementalLoadMode),
    unique: Schema.optional(IncrementalLoadMode),
    replace: Schema.optional(SimpleLoadMode),
    append: Schema.optional(SimpleLoadMode),
  }).annotate({ identifier: "LoadConfig" });

export interface Target {
  /** Optional. The action's name, within `database` and `schema`. */
  name?: string;
  /** Optional. The action's database (Google Cloud project ID) . */
  database?: string;
  /** Optional. The action's schema (BigQuery dataset ID), within `database`. */
  schema?: string;
}

export const Target: Schema.Codec<Target> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    database: Schema.optional(Schema.String),
    schema: Schema.optional(Schema.String),
  }).annotate({ identifier: "Target" });

export interface ActionErrorTable {
  /** Error table partition expiration in days. Only positive values are allowed. */
  retentionDays?: number;
  /** Error Table target. */
  target?: Target;
}

export const ActionErrorTable: Schema.Codec<ActionErrorTable> =
  /*@__PURE__*/ Schema.Struct({
    retentionDays: Schema.optional(Schema.Number),
    target: Schema.optional(Target),
  }).annotate({ identifier: "ActionErrorTable" });

export interface PrivateResourceMetadata {
  /** Output only. If true, this resource is user-scoped, meaning it is either a workspace or sourced from a workspace. */
  userScoped?: boolean;
}

export const PrivateResourceMetadata: Schema.Codec<PrivateResourceMetadata> =
  /*@__PURE__*/ Schema.Struct({
    userScoped: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PrivateResourceMetadata" });

export interface DataEncryptionState {
  /** Required. The KMS key version name with which data of a resource is encrypted. */
  kmsKeyVersionName?: string;
}

export const DataEncryptionState: Schema.Codec<DataEncryptionState> =
  /*@__PURE__*/ Schema.Struct({
    kmsKeyVersionName: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataEncryptionState" });

export interface Interval {
  /** Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. */
  endTime?: string;
  /** Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. */
  startTime?: string;
}

export const Interval: Schema.Codec<Interval> =
  /*@__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Interval" });

export interface InvocationConfig {
  /** Optional. When set to true, transitive dependents of included actions will be executed. */
  transitiveDependentsIncluded?: boolean;
  /** Optional. The service account to run workflow invocations under. */
  serviceAccount?: string;
  /** Optional. The set of tags to include. */
  includedTags?: ReadonlyArray<string>;
  /** Optional. When set to true, any incremental tables will be fully refreshed. */
  fullyRefreshIncrementalTablesEnabled?: boolean;
  /** Optional. Specifies the priority for query execution in BigQuery. More information can be found at https://cloud.google.com/bigquery/docs/running-queries#queries. */
  queryPriority?:
    | "QUERY_PRIORITY_UNSPECIFIED"
    | "INTERACTIVE"
    | "BATCH"
    | (string & {});
  /** Optional. When set to true, transitive dependencies of included actions will be executed. */
  transitiveDependenciesIncluded?: boolean;
  /** Optional. The set of action identifiers to include. */
  includedTargets?: ReadonlyArray<Target>;
}

export const InvocationConfig: Schema.Codec<InvocationConfig> =
  /*@__PURE__*/ Schema.Struct({
    transitiveDependentsIncluded: Schema.optional(Schema.Boolean),
    serviceAccount: Schema.optional(Schema.String),
    includedTags: Schema.optional(Schema.Array(Schema.String)),
    fullyRefreshIncrementalTablesEnabled: Schema.optional(Schema.Boolean),
    queryPriority: Schema.optional(Schema.String),
    transitiveDependenciesIncluded: Schema.optional(Schema.Boolean),
    includedTargets: Schema.optional(Schema.Array(Target)),
  }).annotate({ identifier: "InvocationConfig" });

export interface WorkflowInvocation {
  /** Output only. Metadata indicating whether this resource is user-scoped. `WorkflowInvocation` resource is `user_scoped` only if it is sourced from a compilation result and the compilation result is user-scoped. */
  privateResourceMetadata?: PrivateResourceMetadata;
  /** Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string. */
  internalMetadata?: string;
  /** Immutable. The name of the compilation result to use for this invocation. Must be in the format `projects/* /locations/* /repositories/* /compilationResults/*`. */
  compilationResult?: string;
  /** Output only. The workflow invocation's name. */
  name?: string;
  /** Output only. Only set if the repository has a KMS Key. */
  dataEncryptionState?: DataEncryptionState;
  /** Output only. This workflow invocation's timing details. */
  invocationTiming?: Interval;
  /** Immutable. If left unset, a default InvocationConfig will be used. */
  invocationConfig?: InvocationConfig;
  /** Output only. The resolved compilation result that was used to create this invocation. Will be in the format `projects/* /locations/* /repositories/* /compilationResults/*`. */
  resolvedCompilationResult?: string;
  /** Immutable. The name of the workflow config to invoke. Must be in the format `projects/* /locations/* /repositories/* /workflowConfigs/*`. */
  workflowConfig?: string;
  /** Output only. This workflow invocation's current state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "RUNNING"
    | "SUCCEEDED"
    | "CANCELLED"
    | "FAILED"
    | "CANCELING"
    | (string & {});
}

export const WorkflowInvocation: Schema.Codec<WorkflowInvocation> =
  /*@__PURE__*/ Schema.Struct({
    privateResourceMetadata: Schema.optional(PrivateResourceMetadata),
    internalMetadata: Schema.optional(Schema.String),
    compilationResult: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    dataEncryptionState: Schema.optional(DataEncryptionState),
    invocationTiming: Schema.optional(Interval),
    invocationConfig: Schema.optional(InvocationConfig),
    resolvedCompilationResult: Schema.optional(Schema.String),
    workflowConfig: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkflowInvocation" });

export interface UncommittedFileChange {
  /** The file's full path including filename, relative to the workspace root. */
  path?: string;
  /** Output only. Indicates the status of the file. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ADDED"
    | "DELETED"
    | "MODIFIED"
    | "HAS_CONFLICTS"
    | (string & {});
}

export const UncommittedFileChange: Schema.Codec<UncommittedFileChange> =
  /*@__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "UncommittedFileChange" });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Codec<TestIamPermissionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface ActionIncrementalLoadMode {
  /** Column name for incremental load modes */
  column?: string;
}

export const ActionIncrementalLoadMode: Schema.Codec<ActionIncrementalLoadMode> =
  /*@__PURE__*/ Schema.Struct({
    column: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActionIncrementalLoadMode" });

export interface ActionSimpleLoadMode {}

export const ActionSimpleLoadMode: Schema.Codec<ActionSimpleLoadMode> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ActionSimpleLoadMode",
  });

export interface ActionLoadConfig {
  /** Insert records where the value exceeds the previous maximum value for a column in the destination table */
  maximum?: ActionIncrementalLoadMode;
  /** Insert records where the value of a column is not already present in the destination table */
  unique?: ActionIncrementalLoadMode;
  /** Append into destination table */
  append?: ActionSimpleLoadMode;
  /** Replace destination table */
  replace?: ActionSimpleLoadMode;
}

export const ActionLoadConfig: Schema.Codec<ActionLoadConfig> =
  /*@__PURE__*/ Schema.Struct({
    maximum: Schema.optional(ActionIncrementalLoadMode),
    unique: Schema.optional(ActionIncrementalLoadMode),
    append: Schema.optional(ActionSimpleLoadMode),
    replace: Schema.optional(ActionSimpleLoadMode),
  }).annotate({ identifier: "ActionLoadConfig" });

export interface ActionSqlDefinition {
  /** Load configuration. */
  loadConfig?: ActionLoadConfig;
  /** The SQL query representing the data preparation steps. Formatted as a Pipe SQL query statement. */
  query?: string;
  /** Error table configuration, */
  errorTable?: ActionErrorTable;
}

export const ActionSqlDefinition: Schema.Codec<ActionSqlDefinition> =
  /*@__PURE__*/ Schema.Struct({
    loadConfig: Schema.optional(ActionLoadConfig),
    query: Schema.optional(Schema.String),
    errorTable: Schema.optional(ActionErrorTable),
  }).annotate({ identifier: "ActionSqlDefinition" });

export interface DataPreparationAction {
  /** Output only. The ID of the BigQuery job that executed the SQL in sql_script. Only set once the job has started to run. */
  jobId?: string;
  /** Output only. YAML representing the contents of the data preparation. Can be used to show the customer what the input was to their workflow. */
  contentsYaml?: string;
  /** SQL definition for a Data Preparation. Contains a SQL query and additional context information. */
  contentsSql?: ActionSqlDefinition;
  /** Output only. The generated BigQuery SQL script that will be executed. For reference only. */
  generatedSql?: string;
}

export const DataPreparationAction: Schema.Codec<DataPreparationAction> =
  /*@__PURE__*/ Schema.Struct({
    jobId: Schema.optional(Schema.String),
    contentsYaml: Schema.optional(Schema.String),
    contentsSql: Schema.optional(ActionSqlDefinition),
    generatedSql: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataPreparationAction" });

export interface PushGitCommitsRequest {
  /** Optional. The name of the branch in the Git remote to which commits should be pushed. If left unset, the repository's default branch name will be used. */
  remoteBranch?: string;
}

export const PushGitCommitsRequest: Schema.Codec<PushGitCommitsRequest> =
  /*@__PURE__*/ Schema.Struct({
    remoteBranch: Schema.optional(Schema.String),
  }).annotate({ identifier: "PushGitCommitsRequest" });

export interface RemoveFileRequest {
  /** Required. The file's full path including filename, relative to the workspace root. */
  path?: string;
}

export const RemoveFileRequest: Schema.Codec<RemoveFileRequest> =
  /*@__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoveFileRequest" });

export interface TeamFolder {
  /** Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string. */
  internalMetadata?: string;
  /** Identifier. The TeamFolder's name. */
  name?: string;
  /** Required. The TeamFolder's user-friendly name. */
  displayName?: string;
  /** Output only. The IAM principal identifier of the creator of the TeamFolder. */
  creatorIamPrincipal?: string;
  /** Output only. The timestamp of when the TeamFolder was last updated. */
  updateTime?: string;
  /** Output only. The timestamp of when the TeamFolder was created. */
  createTime?: string;
}

export const TeamFolder: Schema.Codec<TeamFolder> =
  /*@__PURE__*/ Schema.Struct({
    internalMetadata: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    creatorIamPrincipal: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "TeamFolder" });

export interface TeamFolderSearchResult {
  /** A TeamFolder resource that is in the project / location. */
  teamFolder?: TeamFolder;
}

export const TeamFolderSearchResult: Schema.Codec<TeamFolderSearchResult> =
  /*@__PURE__*/ Schema.Struct({
    teamFolder: Schema.optional(TeamFolder),
  }).annotate({ identifier: "TeamFolderSearchResult" });

export interface FilesystemEntryMetadata {
  /** Output only. Provides the size of the entry in bytes. For directories, this will be 0. */
  sizeBytes?: string;
  /** Output only. Represents the time of the last modification of the entry. */
  updateTime?: string;
}

export const FilesystemEntryMetadata: Schema.Codec<FilesystemEntryMetadata> =
  /*@__PURE__*/ Schema.Struct({
    sizeBytes: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "FilesystemEntryMetadata" });

export interface DirectoryEntry {
  /** A file in the directory. The path is returned including the full folder structure from the root. */
  file?: string;
  /** A child directory in the directory. The path is returned including the full folder structure from the root. */
  directory?: string;
  /** Entry with metadata. */
  metadata?: FilesystemEntryMetadata;
}

export const DirectoryEntry: Schema.Codec<DirectoryEntry> =
  /*@__PURE__*/ Schema.Struct({
    file: Schema.optional(Schema.String),
    directory: Schema.optional(Schema.String),
    metadata: Schema.optional(FilesystemEntryMetadata),
  }).annotate({ identifier: "DirectoryEntry" });

export interface CancelWorkflowInvocationRequest {}

export const CancelWorkflowInvocationRequest: Schema.Codec<CancelWorkflowInvocationRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelWorkflowInvocationRequest",
  });

export interface ColumnDescriptor {
  /** A list of BigQuery policy tags that will be applied to the column. */
  bigqueryPolicyTags?: ReadonlyArray<string>;
  /** The identifier for the column. Each entry in `path` represents one level of nesting. */
  path?: ReadonlyArray<string>;
  /** A textual description of the column. */
  description?: string;
}

export const ColumnDescriptor: Schema.Codec<ColumnDescriptor> =
  /*@__PURE__*/ Schema.Struct({
    bigqueryPolicyTags: Schema.optional(Schema.Array(Schema.String)),
    path: Schema.optional(Schema.Array(Schema.String)),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "ColumnDescriptor" });

export interface RelationDescriptor {
  /** A text description of the relation. */
  description?: string;
  /** A list of descriptions of columns within the relation. */
  columns?: ReadonlyArray<ColumnDescriptor>;
  /** A set of BigQuery labels that should be applied to the relation. */
  bigqueryLabels?: Record<string, string>;
}

export const RelationDescriptor: Schema.Codec<RelationDescriptor> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    columns: Schema.optional(Schema.Array(ColumnDescriptor)),
    bigqueryLabels: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "RelationDescriptor" });

export interface Assertion {
  /** The parent action of this assertion. Only set if this assertion was automatically generated. */
  parentAction?: Target;
  /** Descriptor for the assertion's automatically-generated view and its columns. */
  relationDescriptor?: RelationDescriptor;
  /** Whether this action is disabled (i.e. should not be run). */
  disabled?: boolean;
  /** The SELECT query which must return zero rows in order for this assertion to succeed. */
  selectQuery?: string;
  /** A list of actions that this action depends on. */
  dependencyTargets?: ReadonlyArray<Target>;
  /** Arbitrary, user-defined tags on this action. */
  tags?: ReadonlyArray<string>;
}

export const Assertion: Schema.Codec<Assertion> =
  /*@__PURE__*/ Schema.Struct({
    parentAction: Schema.optional(Target),
    relationDescriptor: Schema.optional(RelationDescriptor),
    disabled: Schema.optional(Schema.Boolean),
    selectQuery: Schema.optional(Schema.String),
    dependencyTargets: Schema.optional(Schema.Array(Target)),
    tags: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Assertion" });

export interface CancelWorkflowInvocationResponse {}

export const CancelWorkflowInvocationResponse: Schema.Codec<CancelWorkflowInvocationResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelWorkflowInvocationResponse",
  });

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
  /*@__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface Binding {
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
}

export const Binding: Schema.Codec<Binding> =
  /*@__PURE__*/ Schema.Struct({
    members: Schema.optional(Schema.Array(Schema.String)),
    condition: Schema.optional(Expr),
    role: Schema.optional(Schema.String),
  }).annotate({ identifier: "Binding" });

export interface Policy {
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
}

export const Policy: Schema.Codec<Policy> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.Number),
    bindings: Schema.optional(Schema.Array(Binding)),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "Policy" });

export interface SetIamPolicyRequest {
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: Policy;
}

export const SetIamPolicyRequest: Schema.Codec<SetIamPolicyRequest> =
  /*@__PURE__*/ Schema.Struct({
    policy: Schema.optional(Policy),
  }).annotate({ identifier: "SetIamPolicyRequest" });

export interface CommitAuthor {
  /** Required. The commit author's email address. */
  emailAddress?: string;
  /** Required. The commit author's name. */
  name?: string;
}

export const CommitAuthor: Schema.Codec<CommitAuthor> =
  /*@__PURE__*/ Schema.Struct({
    emailAddress: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommitAuthor" });

export interface CommitLogEntry {
  /** The commit SHA for this commit log entry. */
  commitSha?: string;
  /** The commit message for this commit log entry. */
  commitMessage?: string;
  /** Commit timestamp. */
  commitTime?: string;
  /** The commit author for this commit log entry. */
  author?: CommitAuthor;
}

export const CommitLogEntry: Schema.Codec<CommitLogEntry> =
  /*@__PURE__*/ Schema.Struct({
    commitSha: Schema.optional(Schema.String),
    commitMessage: Schema.optional(Schema.String),
    commitTime: Schema.optional(Schema.String),
    author: Schema.optional(CommitAuthor),
  }).annotate({ identifier: "CommitLogEntry" });

export interface Declaration {
  /** Descriptor for the relation and its columns. Used as documentation only, i.e. values here will result in no changes to the relation's metadata. */
  relationDescriptor?: RelationDescriptor;
}

export const Declaration: Schema.Codec<Declaration> =
  /*@__PURE__*/ Schema.Struct({
    relationDescriptor: Schema.optional(RelationDescriptor),
  }).annotate({ identifier: "Declaration" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Codec<Status> =
  /*@__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface ScheduledReleaseRecord {
  /** The name of the created compilation result, if one was successfully created. Must be in the format `projects/* /locations/* /repositories/* /compilationResults/*`. */
  compilationResult?: string;
  /** Output only. The timestamp of this release attempt. */
  releaseTime?: string;
  /** The error status encountered upon this attempt to create the compilation result, if the attempt was unsuccessful. */
  errorStatus?: Status;
}

export const ScheduledReleaseRecord: Schema.Codec<ScheduledReleaseRecord> =
  /*@__PURE__*/ Schema.Struct({
    compilationResult: Schema.optional(Schema.String),
    releaseTime: Schema.optional(Schema.String),
    errorStatus: Schema.optional(Status),
  }).annotate({ identifier: "ScheduledReleaseRecord" });

export interface NotebookRuntimeOptions {
  /** Optional. The resource name of the [Colab runtime template] (https://cloud.google.com/colab/docs/runtimes), from which a runtime is created for notebook executions. If not specified, a runtime is created with Colab's default specifications. */
  aiPlatformNotebookRuntimeTemplate?: string;
  /** Optional. The Google Cloud Storage location to upload the result to. Format: `gs://bucket-name`. */
  gcsOutputBucket?: string;
}

export const NotebookRuntimeOptions: Schema.Codec<NotebookRuntimeOptions> =
  /*@__PURE__*/ Schema.Struct({
    aiPlatformNotebookRuntimeTemplate: Schema.optional(Schema.String),
    gcsOutputBucket: Schema.optional(Schema.String),
  }).annotate({ identifier: "NotebookRuntimeOptions" });

export interface CodeCompilationConfig {
  /** Optional. The prefix that should be prepended to all table names. */
  tablePrefix?: string;
  /** Optional. The default notebook runtime options. */
  defaultNotebookRuntimeOptions?: NotebookRuntimeOptions;
  /** Optional. The default BigQuery location to use. Defaults to "US". See the BigQuery docs for a full list of locations: https://cloud.google.com/bigquery/docs/locations. */
  defaultLocation?: string;
  /** Optional. The prefix to prepend to built-in assertion names. */
  builtinAssertionNamePrefix?: string;
  /** Optional. User-defined variables that are made available to project code during compilation. */
  vars?: Record<string, string>;
  /** Optional. The default schema (BigQuery dataset ID) for assertions. */
  assertionSchema?: string;
  /** Optional. The suffix that should be appended to all database (Google Cloud project ID) names. */
  databaseSuffix?: string;
  /** Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names. */
  schemaSuffix?: string;
  /** Optional. The default schema (BigQuery dataset ID). */
  defaultSchema?: string;
  /** Optional. The default database (Google Cloud project ID). */
  defaultDatabase?: string;
}

export const CodeCompilationConfig: Schema.Codec<CodeCompilationConfig> =
  /*@__PURE__*/ Schema.Struct({
    tablePrefix: Schema.optional(Schema.String),
    defaultNotebookRuntimeOptions: Schema.optional(NotebookRuntimeOptions),
    defaultLocation: Schema.optional(Schema.String),
    builtinAssertionNamePrefix: Schema.optional(Schema.String),
    vars: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    assertionSchema: Schema.optional(Schema.String),
    databaseSuffix: Schema.optional(Schema.String),
    schemaSuffix: Schema.optional(Schema.String),
    defaultSchema: Schema.optional(Schema.String),
    defaultDatabase: Schema.optional(Schema.String),
  }).annotate({ identifier: "CodeCompilationConfig" });

export interface ReleaseConfig {
  /** Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC. */
  timeZone?: string;
  /** Output only. Records of the 10 most recent scheduled release attempts, ordered in descending order of `release_time`. Updated whenever automatic creation of a compilation result is triggered by cron_schedule. */
  recentScheduledReleaseRecords?: ReadonlyArray<ScheduledReleaseRecord>;
  /** Optional. Disables automatic creation of compilation results. */
  disabled?: boolean;
  /** Optional. If set, fields of `code_compilation_config` override the default compilation settings that are specified in dataform.json. */
  codeCompilationConfig?: CodeCompilationConfig;
  /** Required. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: `12ade345` - a tag: `tag1` - a branch name: `branch1` */
  gitCommitish?: string;
  /** Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string. */
  internalMetadata?: string;
  /** Identifier. The release config's name. */
  name?: string;
  /** Optional. Optional schedule (in cron format) for automatic creation of compilation results. */
  cronSchedule?: string;
  /** Optional. The name of the currently released compilation result for this release config. This value is updated when a compilation result is automatically created from this release config (using cron_schedule), or when this resource is updated by API call (perhaps to roll back to an earlier release). The compilation result must have been created using this release config. Must be in the format `projects/* /locations/* /repositories/* /compilationResults/*`. */
  releaseCompilationResult?: string;
}

export const ReleaseConfig: Schema.Codec<ReleaseConfig> =
  /*@__PURE__*/ Schema.Struct({
    timeZone: Schema.optional(Schema.String),
    recentScheduledReleaseRecords: Schema.optional(
      Schema.Array(ScheduledReleaseRecord),
    ),
    disabled: Schema.optional(Schema.Boolean),
    codeCompilationConfig: Schema.optional(CodeCompilationConfig),
    gitCommitish: Schema.optional(Schema.String),
    internalMetadata: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    cronSchedule: Schema.optional(Schema.String),
    releaseCompilationResult: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReleaseConfig" });

export interface ListReleaseConfigsResponse {
  /** Locations which could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** List of release configs. */
  releaseConfigs?: ReadonlyArray<ReleaseConfig>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListReleaseConfigsResponse: Schema.Codec<ListReleaseConfigsResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    releaseConfigs: Schema.optional(Schema.Array(ReleaseConfig)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListReleaseConfigsResponse" });

export interface NotebookAction {
  /** Output only. The code contents of a Notebook to be run. */
  contents?: string;
  /** Output only. The ID of the Gemini Enterprise Agent Platform job that executed the notebook in contents and also the ID used for the outputs created in Google Cloud Storage buckets. Only set once the job has started to run. */
  jobId?: string;
}

export const NotebookAction: Schema.Codec<NotebookAction> =
  /*@__PURE__*/ Schema.Struct({
    contents: Schema.optional(Schema.String),
    jobId: Schema.optional(Schema.String),
  }).annotate({ identifier: "NotebookAction" });

export interface WorkspaceCompilationOverrides {
  /** Optional. The default database (Google Cloud project ID). */
  defaultDatabase?: string;
  /** Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names. */
  schemaSuffix?: string;
  /** Optional. The prefix that should be prepended to all table names. */
  tablePrefix?: string;
}

export const WorkspaceCompilationOverrides: Schema.Codec<WorkspaceCompilationOverrides> =
  /*@__PURE__*/ Schema.Struct({
    defaultDatabase: Schema.optional(Schema.String),
    schemaSuffix: Schema.optional(Schema.String),
    tablePrefix: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkspaceCompilationOverrides" });

export interface PullGitCommitsResponse {}

export const PullGitCommitsResponse: Schema.Codec<PullGitCommitsResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "PullGitCommitsResponse",
  });

export interface MakeDirectoryResponse {}

export const MakeDirectoryResponse: Schema.Codec<MakeDirectoryResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MakeDirectoryResponse",
  });

export interface IncrementalTableConfig {
  /** A set of columns or SQL expressions used to define row uniqueness. If any duplicates are discovered (as defined by `unique_key_parts`), only the newly selected rows (as defined by `incremental_select_query`) will be included in the relation. */
  uniqueKeyParts?: ReadonlyArray<string>;
  /** The SELECT query which returns rows which should be inserted into the relation if it already exists and is not being refreshed. */
  incrementalSelectQuery?: string;
  /** SQL statements to be executed before inserting new rows into the relation. */
  incrementalPreOperations?: ReadonlyArray<string>;
  /** Whether this table should be protected from being refreshed. */
  refreshDisabled?: boolean;
  /** A SQL expression conditional used to limit the set of existing rows considered for a merge operation (see `unique_key_parts` for more information). */
  updatePartitionFilter?: string;
  /** SQL statements to be executed after inserting new rows into the relation. */
  incrementalPostOperations?: ReadonlyArray<string>;
}

export const IncrementalTableConfig: Schema.Codec<IncrementalTableConfig> =
  /*@__PURE__*/ Schema.Struct({
    uniqueKeyParts: Schema.optional(Schema.Array(Schema.String)),
    incrementalSelectQuery: Schema.optional(Schema.String),
    incrementalPreOperations: Schema.optional(Schema.Array(Schema.String)),
    refreshDisabled: Schema.optional(Schema.Boolean),
    updatePartitionFilter: Schema.optional(Schema.String),
    incrementalPostOperations: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "IncrementalTableConfig" });

export interface Relation {
  /** Arbitrary, user-defined tags on this action. */
  tags?: ReadonlyArray<string>;
  /** SQL statements to be executed before creating the relation. */
  preOperations?: ReadonlyArray<string>;
  /** A list of columns or SQL expressions used to cluster the table. */
  clusterExpressions?: ReadonlyArray<string>;
  /** Specifies whether queries on this table must include a predicate filter that filters on the partitioning column. */
  requirePartitionFilter?: boolean;
  /** Optional. The table format for the BigQuery table. */
  tableFormat?: "TABLE_FORMAT_UNSPECIFIED" | "ICEBERG" | (string & {});
  /** The SQL expression used to partition the relation. */
  partitionExpression?: string;
  /** The type of this relation. */
  relationType?:
    | "RELATION_TYPE_UNSPECIFIED"
    | "TABLE"
    | "VIEW"
    | "INCREMENTAL_TABLE"
    | "MATERIALIZED_VIEW"
    | (string & {});
  /** Optional. The connection specifying the credentials to be used to read and write to external storage, such as Cloud Storage. The connection can have the form `{project}.{location}.{connection_id}` or `projects/{project}/locations/{location}/connections/{connection_id}`, or be set to DEFAULT. */
  connection?: string;
  /** Optional. The fully qualified location prefix of the external folder where table data is stored. The URI should be in the format `gs://bucket/path_to_table/`. */
  storageUri?: string;
  /** Additional options that will be provided as key/value pairs into the options clause of a create table/view statement. See https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language for more information on which options are supported. */
  additionalOptions?: Record<string, string>;
  /** Optional. The file format for the BigQuery table. */
  fileFormat?: "FILE_FORMAT_UNSPECIFIED" | "PARQUET" | (string & {});
  /** A list of actions that this action depends on. */
  dependencyTargets?: ReadonlyArray<Target>;
  /** Configures `INCREMENTAL_TABLE` settings for this relation. Only set if `relation_type` is `INCREMENTAL_TABLE`. */
  incrementalTableConfig?: IncrementalTableConfig;
  /** The SELECT query which returns rows which this relation should contain. */
  selectQuery?: string;
  /** Sets the partition expiration in days. */
  partitionExpirationDays?: number;
  /** SQL statements to be executed after creating the relation. */
  postOperations?: ReadonlyArray<string>;
  /** Descriptor for the relation and its columns. */
  relationDescriptor?: RelationDescriptor;
  /** Whether this action is disabled (i.e. should not be run). */
  disabled?: boolean;
}

export const Relation: Schema.Codec<Relation> =
  /*@__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.Array(Schema.String)),
    preOperations: Schema.optional(Schema.Array(Schema.String)),
    clusterExpressions: Schema.optional(Schema.Array(Schema.String)),
    requirePartitionFilter: Schema.optional(Schema.Boolean),
    tableFormat: Schema.optional(Schema.String),
    partitionExpression: Schema.optional(Schema.String),
    relationType: Schema.optional(Schema.String),
    connection: Schema.optional(Schema.String),
    storageUri: Schema.optional(Schema.String),
    additionalOptions: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    fileFormat: Schema.optional(Schema.String),
    dependencyTargets: Schema.optional(Schema.Array(Target)),
    incrementalTableConfig: Schema.optional(IncrementalTableConfig),
    selectQuery: Schema.optional(Schema.String),
    partitionExpirationDays: Schema.optional(Schema.Number),
    postOperations: Schema.optional(Schema.Array(Schema.String)),
    relationDescriptor: Schema.optional(RelationDescriptor),
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Relation" });

export interface ErrorTable {
  /** Error Table target. */
  target?: Target;
  /** Error table partition expiration in days. Only positive values are allowed. */
  retentionDays?: number;
}

export const ErrorTable: Schema.Codec<ErrorTable> =
  /*@__PURE__*/ Schema.Struct({
    target: Schema.optional(Target),
    retentionDays: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ErrorTable" });

export interface SqlDefinition {
  /** Error table configuration, */
  errorTable?: ErrorTable;
  /** The SQL query representing the data preparation steps. Formatted as a Pipe SQL query statement. */
  query?: string;
  /** Load configuration. */
  load?: LoadConfig;
}

export const SqlDefinition: Schema.Codec<SqlDefinition> =
  /*@__PURE__*/ Schema.Struct({
    errorTable: Schema.optional(ErrorTable),
    query: Schema.optional(Schema.String),
    load: Schema.optional(LoadConfig),
  }).annotate({ identifier: "SqlDefinition" });

export interface DataPreparation {
  /** A list of actions that this action depends on. */
  dependencyTargets?: ReadonlyArray<Target>;
  /** Arbitrary, user-defined tags on this action. */
  tags?: ReadonlyArray<string>;
  /** The data preparation definition, stored as a YAML string. */
  contentsYaml?: string;
  /** SQL definition for a Data Preparation. Contains a SQL query and additional context information. */
  contentsSql?: SqlDefinition;
  /** Whether this action is disabled (i.e. should not be run). */
  disabled?: boolean;
}

export const DataPreparation: Schema.Codec<DataPreparation> =
  /*@__PURE__*/ Schema.Struct({
    dependencyTargets: Schema.optional(Schema.Array(Target)),
    tags: Schema.optional(Schema.Array(Schema.String)),
    contentsYaml: Schema.optional(Schema.String),
    contentsSql: Schema.optional(SqlDefinition),
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DataPreparation" });

export interface Notebook {
  /** The contents of the notebook. */
  contents?: string;
  /** A list of actions that this action depends on. */
  dependencyTargets?: ReadonlyArray<Target>;
  /** Whether this action is disabled (i.e. should not be run). */
  disabled?: boolean;
  /** Arbitrary, user-defined tags on this action. */
  tags?: ReadonlyArray<string>;
}

export const Notebook: Schema.Codec<Notebook> =
  /*@__PURE__*/ Schema.Struct({
    contents: Schema.optional(Schema.String),
    dependencyTargets: Schema.optional(Schema.Array(Target)),
    disabled: Schema.optional(Schema.Boolean),
    tags: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Notebook" });

export interface Operations {
  /** A list of actions that this action depends on. */
  dependencyTargets?: ReadonlyArray<Target>;
  /** Arbitrary, user-defined tags on this action. */
  tags?: ReadonlyArray<string>;
  /** Whether these operations produce an output relation. */
  hasOutput?: boolean;
  /** Descriptor for any output relation and its columns. Only set if `has_output` is true. */
  relationDescriptor?: RelationDescriptor;
  /** A list of arbitrary SQL statements that will be executed without alteration. */
  queries?: ReadonlyArray<string>;
  /** Whether this action is disabled (i.e. should not be run). */
  disabled?: boolean;
}

export const Operations: Schema.Codec<Operations> =
  /*@__PURE__*/ Schema.Struct({
    dependencyTargets: Schema.optional(Schema.Array(Target)),
    tags: Schema.optional(Schema.Array(Schema.String)),
    hasOutput: Schema.optional(Schema.Boolean),
    relationDescriptor: Schema.optional(RelationDescriptor),
    queries: Schema.optional(Schema.Array(Schema.String)),
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Operations" });

export interface CompilationResultAction {
  /** The database relation created/updated by this action. */
  relation?: Relation;
  /** The data preparation executed by this action. */
  dataPreparation?: DataPreparation;
  /** Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string. */
  internalMetadata?: string;
  /** This action's identifier. Unique within the compilation result. */
  target?: Target;
  /** The action's identifier if the project had been compiled without any overrides configured. Unique within the compilation result. */
  canonicalTarget?: Target;
  /** The full path including filename in which this action is located, relative to the workspace root. */
  filePath?: string;
  /** The notebook executed by this action. */
  notebook?: Notebook;
  /** The database operations executed by this action. */
  operations?: Operations;
  /** The declaration declared by this action. */
  declaration?: Declaration;
  /** The assertion executed by this action. */
  assertion?: Assertion;
}

export const CompilationResultAction: Schema.Codec<CompilationResultAction> =
  /*@__PURE__*/ Schema.Struct({
    relation: Schema.optional(Relation),
    dataPreparation: Schema.optional(DataPreparation),
    internalMetadata: Schema.optional(Schema.String),
    target: Schema.optional(Target),
    canonicalTarget: Schema.optional(Target),
    filePath: Schema.optional(Schema.String),
    notebook: Schema.optional(Notebook),
    operations: Schema.optional(Operations),
    declaration: Schema.optional(Declaration),
    assertion: Schema.optional(Assertion),
  }).annotate({ identifier: "CompilationResultAction" });

export interface QueryCompilationResultActionsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** List of compilation result actions. */
  compilationResultActions?: ReadonlyArray<CompilationResultAction>;
}

export const QueryCompilationResultActionsResponse: Schema.Codec<QueryCompilationResultActionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    compilationResultActions: Schema.optional(
      Schema.Array(CompilationResultAction),
    ),
  }).annotate({ identifier: "QueryCompilationResultActionsResponse" });

export interface ComputeRepositoryAccessTokenStatusResponse {
  /** Indicates the status of the Git access token. */
  tokenStatus?:
    | "TOKEN_STATUS_UNSPECIFIED"
    | "NOT_FOUND"
    | "INVALID"
    | "VALID"
    | "PERMISSION_DENIED"
    | (string & {});
}

export const ComputeRepositoryAccessTokenStatusResponse: Schema.Codec<ComputeRepositoryAccessTokenStatusResponse> =
  /*@__PURE__*/ Schema.Struct({
    tokenStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "ComputeRepositoryAccessTokenStatusResponse" });

export interface Operation {
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
}

export const Operation: Schema.Codec<Operation> =
  /*@__PURE__*/ Schema.Struct({
    error: Schema.optional(Status),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Operation" });

export interface ListWorkflowInvocationsResponse {
  /** Locations which could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** List of workflow invocations. */
  workflowInvocations?: ReadonlyArray<WorkflowInvocation>;
}

export const ListWorkflowInvocationsResponse: Schema.Codec<ListWorkflowInvocationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    workflowInvocations: Schema.optional(Schema.Array(WorkflowInvocation)),
  }).annotate({ identifier: "ListWorkflowInvocationsResponse" });

export interface PullGitCommitsRequest {
  /** Optional. The name of the branch in the Git remote from which to pull commits. If left unset, the repository's default branch name will be used. */
  remoteBranch?: string;
  /** Required. The author of any merge commit which may be created as a result of merging fetched Git commits into this workspace. */
  author?: CommitAuthor;
}

export const PullGitCommitsRequest: Schema.Codec<PullGitCommitsRequest> =
  /*@__PURE__*/ Schema.Struct({
    remoteBranch: Schema.optional(Schema.String),
    author: Schema.optional(CommitAuthor),
  }).annotate({ identifier: "PullGitCommitsRequest" });

export interface CommitRepositoryChangesResponse {
  /** The commit SHA of the current commit. */
  commitSha?: string;
}

export const CommitRepositoryChangesResponse: Schema.Codec<CommitRepositoryChangesResponse> =
  /*@__PURE__*/ Schema.Struct({
    commitSha: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommitRepositoryChangesResponse" });

export interface WriteFileRequest {
  /** Required. The file. */
  path?: string;
  /** Required. The file's contents. */
  contents?: string;
}

export const WriteFileRequest: Schema.Codec<WriteFileRequest> =
  /*@__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    contents: Schema.optional(Schema.String),
  }).annotate({ identifier: "WriteFileRequest" });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Codec<TestIamPermissionsRequest> =
  /*@__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface FetchGitAheadBehindResponse {
  /** The number of commits in the workspace that are not in the remote branch. */
  commitsBehind?: number;
  /** The number of commits in the remote branch that are not in the workspace. */
  commitsAhead?: number;
}

export const FetchGitAheadBehindResponse: Schema.Codec<FetchGitAheadBehindResponse> =
  /*@__PURE__*/ Schema.Struct({
    commitsBehind: Schema.optional(Schema.Number),
    commitsAhead: Schema.optional(Schema.Number),
  }).annotate({ identifier: "FetchGitAheadBehindResponse" });

export interface DirectorySearchResult {
  /** File system path relative to the workspace root. */
  path?: string;
}

export const DirectorySearchResult: Schema.Codec<DirectorySearchResult> =
  /*@__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "DirectorySearchResult" });

export interface FileSearchResult {
  /** File system path relative to the workspace root. */
  path?: string;
}

export const FileSearchResult: Schema.Codec<FileSearchResult> =
  /*@__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "FileSearchResult" });

export interface SearchResult {
  /** Details when search result is a directory. */
  directory?: DirectorySearchResult;
  /** Details when search result is a file. */
  file?: FileSearchResult;
}

export const SearchResult: Schema.Codec<SearchResult> =
  /*@__PURE__*/ Schema.Struct({
    directory: Schema.optional(DirectorySearchResult),
    file: Schema.optional(FileSearchResult),
  }).annotate({ identifier: "SearchResult" });

export interface SearchFilesResponse {
  /** List of matched results. */
  searchResults?: ReadonlyArray<SearchResult>;
  /** Optional. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const SearchFilesResponse: Schema.Codec<SearchFilesResponse> =
  /*@__PURE__*/ Schema.Struct({
    searchResults: Schema.optional(Schema.Array(SearchResult)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchFilesResponse" });

export interface SshAuthenticationConfig {
  /** Required. Content of a public SSH key to verify an identity of a remote Git host. */
  hostPublicKey?: string;
  /** Required. The name of the Secret Manager secret version to use as a ssh private key for Git operations. Must be in the format `projects/* /secrets/* /versions/*`. */
  userPrivateKeySecretVersion?: string;
}

export const SshAuthenticationConfig: Schema.Codec<SshAuthenticationConfig> =
  /*@__PURE__*/ Schema.Struct({
    hostPublicKey: Schema.optional(Schema.String),
    userPrivateKeySecretVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "SshAuthenticationConfig" });

export interface GitRemoteSettings {
  /** Optional. Authentication fields for remote uris using SSH protocol. */
  sshAuthenticationConfig?: SshAuthenticationConfig;
  /** Optional. The Git remote's default branch name. If not set, `main` will be used. */
  defaultBranch?: string;
  /** Optional. The name of the Secret Manager secret version to use as an authentication token for Git operations. Must be in the format `projects/* /secrets/* /versions/*`. */
  authenticationTokenSecretVersion?: string;
  /** Optional. Resource name for the `GitRepositoryLink` used for machine credentials. Must be in the format `projects/* /locations/* /connections/* /gitRepositoryLinks/*` */
  gitRepositoryLink?: string;
  /** Required. The Git remote's URL. */
  url?: string;
  /** Output only. Deprecated: The field does not contain any token status information. */
  tokenStatus?:
    | "TOKEN_STATUS_UNSPECIFIED"
    | "NOT_FOUND"
    | "INVALID"
    | "VALID"
    | (string & {});
  /** Output only. The Git remote's effective default branch name. This is the default branch name of the Git remote if it is set, otherwise it is `main`. */
  effectiveDefaultBranch?: string;
}

export const GitRemoteSettings: Schema.Codec<GitRemoteSettings> =
  /*@__PURE__*/ Schema.Struct({
    sshAuthenticationConfig: Schema.optional(SshAuthenticationConfig),
    defaultBranch: Schema.optional(Schema.String),
    authenticationTokenSecretVersion: Schema.optional(Schema.String),
    gitRepositoryLink: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    tokenStatus: Schema.optional(Schema.String),
    effectiveDefaultBranch: Schema.optional(Schema.String),
  }).annotate({ identifier: "GitRemoteSettings" });

export interface Repository {
  /** Output only. The resource name of the TeamFolder that this Repository is associated with. This should take the format: projects/{project}/locations/{location}/teamFolders/{teamFolder}. If this is not set, the Repository is not associated with a TeamFolder. */
  teamFolderName?: string;
  /** Optional. Repository user labels. */
  labels?: Record<string, string>;
  /** Optional. The repository's user-friendly name. */
  displayName?: string;
  /** Optional. The name of the containing folder of the repository. The field is immutable and it can be modified via a MoveRepository operation. Format: `projects/* /locations/* /folders/*`. or `projects/* /locations/* /teamFolders/*`. */
  containingFolder?: string;
  /** Optional. Input only. If set to true, the authenticated user will be granted the roles/dataform.admin role on the created repository. */
  setAuthenticatedUserAdmin?: boolean;
  /** Output only. The timestamp of when the repository was created. */
  createTime?: string;
  /** Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format `projects/* /secrets/* /versions/*`. The file itself must be in a JSON format. */
  npmrcEnvironmentVariablesSecretVersion?: string;
  /** Optional. The service account to run workflow invocations under. */
  serviceAccount?: string;
  /** Optional. If set, configures this repository to be linked to a Git remote. */
  gitRemoteSettings?: GitRemoteSettings;
  /** Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string. */
  internalMetadata?: string;
  /** Optional. If set, fields of `workspace_compilation_overrides` override the default compilation settings that are specified in dataform.json when creating workspace-scoped compilation results. See documentation for `WorkspaceCompilationOverrides` for more information. */
  workspaceCompilationOverrides?: WorkspaceCompilationOverrides;
  /** Identifier. The repository's name. */
  name?: string;
  /** Optional. The reference to a KMS encryption key. If provided, it will be used to encrypt user data in the repository and all child resources. It is not possible to add or update the encryption key after the repository is created. Example: `projects/{kms_project}/locations/{location}/keyRings/{key_location}/cryptoKeys/{key}` */
  kmsKeyName?: string;
  /** Output only. A data encryption state of a Git repository if this Repository is protected by a KMS key. */
  dataEncryptionState?: DataEncryptionState;
}

export const Repository: Schema.Codec<Repository> =
  /*@__PURE__*/ Schema.Struct({
    teamFolderName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    displayName: Schema.optional(Schema.String),
    containingFolder: Schema.optional(Schema.String),
    setAuthenticatedUserAdmin: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    npmrcEnvironmentVariablesSecretVersion: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    gitRemoteSettings: Schema.optional(GitRemoteSettings),
    internalMetadata: Schema.optional(Schema.String),
    workspaceCompilationOverrides: Schema.optional(
      WorkspaceCompilationOverrides,
    ),
    name: Schema.optional(Schema.String),
    kmsKeyName: Schema.optional(Schema.String),
    dataEncryptionState: Schema.optional(DataEncryptionState),
  }).annotate({ identifier: "Repository" });

export interface ListRepositoriesResponse {
  /** List of repositories. */
  repositories?: ReadonlyArray<Repository>;
  /** Locations which could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListRepositoriesResponse: Schema.Codec<ListRepositoriesResponse> =
  /*@__PURE__*/ Schema.Struct({
    repositories: Schema.optional(Schema.Array(Repository)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListRepositoriesResponse" });

export interface BigQueryAction {
  /** Output only. The generated BigQuery SQL script that will be executed. */
  sqlScript?: string;
  /** Output only. The ID of the BigQuery job that executed the SQL in sql_script. Only set once the job has started to run. */
  jobId?: string;
}

export const BigQueryAction: Schema.Codec<BigQueryAction> =
  /*@__PURE__*/ Schema.Struct({
    sqlScript: Schema.optional(Schema.String),
    jobId: Schema.optional(Schema.String),
  }).annotate({ identifier: "BigQueryAction" });

export interface WriteFileResponse {}

export const WriteFileResponse: Schema.Codec<WriteFileResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "WriteFileResponse",
  });

export interface QueryRepositoryDirectoryContentsResponse {
  /** List of entries in the directory. */
  directoryEntries?: ReadonlyArray<DirectoryEntry>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const QueryRepositoryDirectoryContentsResponse: Schema.Codec<QueryRepositoryDirectoryContentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    directoryEntries: Schema.optional(Schema.Array(DirectoryEntry)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryRepositoryDirectoryContentsResponse" });

export interface Folder {
  /** Required. The Folder's user-friendly name. */
  displayName?: string;
  /** Output only. The IAM principal identifier of the creator of the Folder. */
  creatorIamPrincipal?: string;
  /** Identifier. The Folder's name. */
  name?: string;
  /** Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string. */
  internalMetadata?: string;
  /** Output only. The timestamp of when the Folder was created. */
  createTime?: string;
  /** Optional. The containing Folder resource name. This should take the format: projects/{project}/locations/{location}/folders/{folder}, projects/{project}/locations/{location}/teamFolders/{teamFolder}, or just "" if this is a root Folder. This field can only be updated through MoveFolder. */
  containingFolder?: string;
  /** Output only. The resource name of the TeamFolder that this Folder is associated with. This should take the format: projects/{project}/locations/{location}/teamFolders/{teamFolder}. If this is not set, the Folder is not associated with a TeamFolder and is a UserFolder. */
  teamFolderName?: string;
  /** Output only. The timestamp of when the Folder was last updated. */
  updateTime?: string;
}

export const Folder: Schema.Codec<Folder> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    creatorIamPrincipal: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    internalMetadata: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    containingFolder: Schema.optional(Schema.String),
    teamFolderName: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Folder" });

export interface WorkflowInvocationAction {
  /** Output only. The workflow action's bigquery action details. */
  bigqueryAction?: BigQueryAction;
  /** Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string. */
  internalMetadata?: string;
  /** Output only. The workflow action's notebook action details. */
  notebookAction?: NotebookAction;
  /** Output only. If and only if action's state is FAILED a failure reason is set. */
  failureReason?: string;
  /** Output only. This action's current state. */
  state?:
    | "PENDING"
    | "RUNNING"
    | "SKIPPED"
    | "DISABLED"
    | "SUCCEEDED"
    | "CANCELLED"
    | "FAILED"
    | (string & {});
  /** Output only. The workflow action's data preparation action details. */
  dataPreparationAction?: DataPreparationAction;
  /** Output only. The action's identifier if the project had been compiled without any overrides configured. Unique within the compilation result. */
  canonicalTarget?: Target;
  /** Output only. This action's identifier. Unique within the workflow invocation. */
  target?: Target;
  /** Output only. This action's timing details. `start_time` will be set if the action is in [RUNNING, SUCCEEDED, CANCELLED, FAILED] state. `end_time` will be set if the action is in [SUCCEEDED, CANCELLED, FAILED] state. */
  invocationTiming?: Interval;
}

export const WorkflowInvocationAction: Schema.Codec<WorkflowInvocationAction> =
  /*@__PURE__*/ Schema.Struct({
    bigqueryAction: Schema.optional(BigQueryAction),
    internalMetadata: Schema.optional(Schema.String),
    notebookAction: Schema.optional(NotebookAction),
    failureReason: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    dataPreparationAction: Schema.optional(DataPreparationAction),
    canonicalTarget: Schema.optional(Target),
    target: Schema.optional(Target),
    invocationTiming: Schema.optional(Interval),
  }).annotate({ identifier: "WorkflowInvocationAction" });

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface RemoveFileResponse {}

export const RemoveFileResponse: Schema.Codec<RemoveFileResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RemoveFileResponse",
  });

export interface CommitWorkspaceChangesResponse {}

export const CommitWorkspaceChangesResponse: Schema.Codec<CommitWorkspaceChangesResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CommitWorkspaceChangesResponse",
  });

export interface MoveDirectoryRequest {
  /** Required. The new path for the directory including directory name, rooted at workspace root. */
  newPath?: string;
  /** Required. The directory's full path including directory name, relative to the workspace root. */
  path?: string;
}

export const MoveDirectoryRequest: Schema.Codec<MoveDirectoryRequest> =
  /*@__PURE__*/ Schema.Struct({
    newPath: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "MoveDirectoryRequest" });

export interface QueryWorkflowInvocationActionsResponse {
  /** List of workflow invocation actions. */
  workflowInvocationActions?: ReadonlyArray<WorkflowInvocationAction>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const QueryWorkflowInvocationActionsResponse: Schema.Codec<QueryWorkflowInvocationActionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    workflowInvocationActions: Schema.optional(
      Schema.Array(WorkflowInvocationAction),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryWorkflowInvocationActionsResponse" });

export interface CommitWorkspaceChangesRequest {
  /** Optional. The commit's message. */
  commitMessage?: string;
  /** Optional. Full file paths to commit including filename, rooted at workspace root. If left empty, all files will be committed. */
  paths?: ReadonlyArray<string>;
  /** Required. The commit's author. */
  author?: CommitAuthor;
}

export const CommitWorkspaceChangesRequest: Schema.Codec<CommitWorkspaceChangesRequest> =
  /*@__PURE__*/ Schema.Struct({
    commitMessage: Schema.optional(Schema.String),
    paths: Schema.optional(Schema.Array(Schema.String)),
    author: Schema.optional(CommitAuthor),
  }).annotate({ identifier: "CommitWorkspaceChangesRequest" });

export interface PolicyName {
  /** For Cloud IAM: The location of the Policy. Must be empty or "global" for Policies owned by global IAM. Must name a region from prodspec/cloud-iam-cloudspec for Regional IAM Policies, see go/iam-faq#where-is-iam-currently-deployed. For Local IAM: This field should be set to "local". */
  region?: string;
  /** Resource type. Types are defined in IAM's .service files. Valid values for type might be 'storage_buckets', 'compute_instances', 'resourcemanager_customers', 'billing_accounts', etc. */
  type?: string;
  /** Identifies an instance of the type. ID format varies by type. The ID format is defined in the IAM .service file that defines the type, either in path_mapping or in a comment. */
  id?: string;
}

export const PolicyName: Schema.Codec<PolicyName> =
  /*@__PURE__*/ Schema.Struct({
    region: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyName" });

export interface CompilationError {
  /** Output only. The error's top level message. */
  message?: string;
  /** Output only. The identifier of the action where this error occurred, if available. */
  actionTarget?: Target;
  /** Output only. The path of the file where this error occurred, if available, relative to the project root. */
  path?: string;
  /** Output only. The error's full stack trace. */
  stack?: string;
}

export const CompilationError: Schema.Codec<CompilationError> =
  /*@__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    actionTarget: Schema.optional(Target),
    path: Schema.optional(Schema.String),
    stack: Schema.optional(Schema.String),
  }).annotate({ identifier: "CompilationError" });

export interface WriteFile {
  /** The file's contents. */
  contents?: string;
}

export const WriteFile: Schema.Codec<WriteFile> =
  /*@__PURE__*/ Schema.Struct({
    contents: Schema.optional(Schema.String),
  }).annotate({ identifier: "WriteFile" });

export interface Workspace {
  /** Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string. */
  internalMetadata?: string;
  /** Optional. If set to true, workspaces will not be moved if its linked Repository is moved. Instead, it will be deleted. */
  disableMoves?: boolean;
  /** Identifier. The workspace's name. */
  name?: string;
  /** Output only. A data encryption state of a Git repository if this Workspace is protected by a KMS key. */
  dataEncryptionState?: DataEncryptionState;
  /** Output only. The timestamp of when the workspace was created. */
  createTime?: string;
  /** Output only. Metadata indicating whether this resource is user-scoped. For `Workspace` resources, the `user_scoped` field is always `true`. */
  privateResourceMetadata?: PrivateResourceMetadata;
}

export const Workspace: Schema.Codec<Workspace> =
  /*@__PURE__*/ Schema.Struct({
    internalMetadata: Schema.optional(Schema.String),
    disableMoves: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    dataEncryptionState: Schema.optional(DataEncryptionState),
    createTime: Schema.optional(Schema.String),
    privateResourceMetadata: Schema.optional(PrivateResourceMetadata),
  }).annotate({ identifier: "Workspace" });

export interface ListWorkspacesResponse {
  /** List of workspaces. */
  workspaces?: ReadonlyArray<Workspace>;
  /** Locations which could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListWorkspacesResponse: Schema.Codec<ListWorkspacesResponse> =
  /*@__PURE__*/ Schema.Struct({
    workspaces: Schema.optional(Schema.Array(Workspace)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListWorkspacesResponse" });

export interface MakeDirectoryRequest {
  /** Required. The directory's full path including directory name, relative to the workspace root. */
  path?: string;
}

export const MakeDirectoryRequest: Schema.Codec<MakeDirectoryRequest> =
  /*@__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "MakeDirectoryRequest" });

export interface RemoveDirectoryRequest {
  /** Required. The directory's full path including directory name, relative to the workspace root. */
  path?: string;
}

export const RemoveDirectoryRequest: Schema.Codec<RemoveDirectoryRequest> =
  /*@__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoveDirectoryRequest" });

export interface MoveFileResponse {}

export const MoveFileResponse: Schema.Codec<MoveFileResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MoveFileResponse",
  });

export interface MoveDirectoryResponse {}

export const MoveDirectoryResponse: Schema.Codec<MoveDirectoryResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MoveDirectoryResponse",
  });

export interface FetchRepositoryHistoryResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** A list of commit logs, ordered by 'git log' default order. */
  commits?: ReadonlyArray<CommitLogEntry>;
}

export const FetchRepositoryHistoryResponse: Schema.Codec<FetchRepositoryHistoryResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    commits: Schema.optional(Schema.Array(CommitLogEntry)),
  }).annotate({ identifier: "FetchRepositoryHistoryResponse" });

export interface DeleteFile {}

export const DeleteFile: Schema.Codec<DeleteFile> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeleteFile",
  });

export interface FileOperation {
  /** Represents the delete operation. */
  deleteFile?: DeleteFile;
  /** Represents the write operation. */
  writeFile?: WriteFile;
}

export const FileOperation: Schema.Codec<FileOperation> =
  /*@__PURE__*/ Schema.Struct({
    deleteFile: Schema.optional(DeleteFile),
    writeFile: Schema.optional(WriteFile),
  }).annotate({ identifier: "FileOperation" });

export interface ReadRepositoryFileResponse {
  /** The file's contents. */
  contents?: string;
}

export const ReadRepositoryFileResponse: Schema.Codec<ReadRepositoryFileResponse> =
  /*@__PURE__*/ Schema.Struct({
    contents: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReadRepositoryFileResponse" });

export interface RootContentsEntry {
  /** A subfolder. */
  folder?: Folder;
  /** A repository. */
  repository?: Repository;
}

export const RootContentsEntry: Schema.Codec<RootContentsEntry> =
  /*@__PURE__*/ Schema.Struct({
    folder: Schema.optional(Folder),
    repository: Schema.optional(Repository),
  }).annotate({ identifier: "RootContentsEntry" });

export interface QueryUserRootContentsResponse {
  /** List of entries in the folder. */
  entries?: ReadonlyArray<RootContentsEntry>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const QueryUserRootContentsResponse: Schema.Codec<QueryUserRootContentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(RootContentsEntry)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryUserRootContentsResponse" });

export interface FetchRemoteBranchesResponse {
  /** The remote repository's branch names. */
  branches?: ReadonlyArray<string>;
}

export const FetchRemoteBranchesResponse: Schema.Codec<FetchRemoteBranchesResponse> =
  /*@__PURE__*/ Schema.Struct({
    branches: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "FetchRemoteBranchesResponse" });

export interface IamPolicyOverrideView {
  /** The IAM policy name for the resource. */
  iamPolicyName?: PolicyName;
  /** Whether the IAM policy encoded in this view is active. */
  isActive?: boolean;
}

export const IamPolicyOverrideView: Schema.Codec<IamPolicyOverrideView> =
  /*@__PURE__*/ Schema.Struct({
    iamPolicyName: Schema.optional(PolicyName),
    isActive: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "IamPolicyOverrideView" });

export interface RemoveDirectoryResponse {}

export const RemoveDirectoryResponse: Schema.Codec<RemoveDirectoryResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RemoveDirectoryResponse",
  });

export interface DeleteFolderTreeRequest {
  /** Optional. If `false` (default): The operation will fail if any Repository within the folder hierarchy has associated Release Configs or Workflow Configs. If `true`: The operation will attempt to delete everything, including any Release Configs and Workflow Configs linked to Repositories within the folder hierarchy. This permanently removes schedules and resources. */
  force?: boolean;
}

export const DeleteFolderTreeRequest: Schema.Codec<DeleteFolderTreeRequest> =
  /*@__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DeleteFolderTreeRequest" });

export interface FolderContentsEntry {
  /** A subfolder. */
  folder?: Folder;
  /** A repository. */
  repository?: Repository;
}

export const FolderContentsEntry: Schema.Codec<FolderContentsEntry> =
  /*@__PURE__*/ Schema.Struct({
    folder: Schema.optional(Folder),
    repository: Schema.optional(Repository),
  }).annotate({ identifier: "FolderContentsEntry" });

export interface CommitMetadata {
  /** Required. The commit's author. */
  author?: CommitAuthor;
  /** Optional. The commit's message. */
  commitMessage?: string;
}

export const CommitMetadata: Schema.Codec<CommitMetadata> =
  /*@__PURE__*/ Schema.Struct({
    author: Schema.optional(CommitAuthor),
    commitMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommitMetadata" });

export interface Location {
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
}

export const Location: Schema.Codec<Location> =
  /*@__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Location" });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse: Schema.Codec<ListLocationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(Location)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface ListOperationsResponse {
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
}

export const ListOperationsResponse: Schema.Codec<ListOperationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    operations: Schema.optional(Schema.Array(Operation)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface ResetWorkspaceChangesRequest {
  /** Optional. Full file paths to reset back to their committed state including filename, rooted at workspace root. If left empty, all files will be reset. */
  paths?: ReadonlyArray<string>;
  /** Optional. If set to true, untracked files will be deleted. */
  clean?: boolean;
}

export const ResetWorkspaceChangesRequest: Schema.Codec<ResetWorkspaceChangesRequest> =
  /*@__PURE__*/ Schema.Struct({
    paths: Schema.optional(Schema.Array(Schema.String)),
    clean: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ResetWorkspaceChangesRequest" });

export interface CompilationResult {
  /** Immutable. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: `12ade345` - a tag: `tag1` - a branch name: `branch1` */
  gitCommitish?: string;
  /** Output only. Metadata indicating whether this resource is user-scoped. `CompilationResult` resource is `user_scoped` only if it is sourced from a workspace. */
  privateResourceMetadata?: PrivateResourceMetadata;
  /** Immutable. If set, fields of `code_compilation_config` override the default compilation settings that are specified in dataform.json. */
  codeCompilationConfig?: CodeCompilationConfig;
  /** Output only. The compilation result's name. */
  name?: string;
  /** Output only. Only set if the repository has a KMS Key. */
  dataEncryptionState?: DataEncryptionState;
  /** Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string. */
  internalMetadata?: string;
  /** Immutable. The name of the release config to compile. Must be in the format `projects/* /locations/* /repositories/* /releaseConfigs/*`. */
  releaseConfig?: string;
  /** Output only. The fully resolved Git commit SHA of the code that was compiled. Not set for compilation results whose source is a workspace. */
  resolvedGitCommitSha?: string;
  /** Output only. The timestamp of when the compilation result was created. */
  createTime?: string;
  /** Output only. Errors encountered during project compilation. */
  compilationErrors?: ReadonlyArray<CompilationError>;
  /** Immutable. The name of the workspace to compile. Must be in the format `projects/* /locations/* /repositories/* /workspaces/*`. */
  workspace?: string;
  /** Output only. The version of `@dataform/core` that was used for compilation. */
  dataformCoreVersion?: string;
}

export const CompilationResult: Schema.Codec<CompilationResult> =
  /*@__PURE__*/ Schema.Struct({
    gitCommitish: Schema.optional(Schema.String),
    privateResourceMetadata: Schema.optional(PrivateResourceMetadata),
    codeCompilationConfig: Schema.optional(CodeCompilationConfig),
    name: Schema.optional(Schema.String),
    dataEncryptionState: Schema.optional(DataEncryptionState),
    internalMetadata: Schema.optional(Schema.String),
    releaseConfig: Schema.optional(Schema.String),
    resolvedGitCommitSha: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    compilationErrors: Schema.optional(Schema.Array(CompilationError)),
    workspace: Schema.optional(Schema.String),
    dataformCoreVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "CompilationResult" });

export interface ListCompilationResultsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** List of compilation results. */
  compilationResults?: ReadonlyArray<CompilationResult>;
  /** Locations which could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListCompilationResultsResponse: Schema.Codec<ListCompilationResultsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    compilationResults: Schema.optional(Schema.Array(CompilationResult)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListCompilationResultsResponse" });

export interface ResetWorkspaceChangesResponse {}

export const ResetWorkspaceChangesResponse: Schema.Codec<ResetWorkspaceChangesResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ResetWorkspaceChangesResponse",
  });

export interface Config {
  /** Identifier. The config name. */
  name?: string;
  /** Optional. The default KMS key that is used if no encryption key is provided when a repository is created. */
  defaultKmsKeyName?: string;
  /** Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string. */
  internalMetadata?: string;
}

export const Config: Schema.Codec<Config> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    defaultKmsKeyName: Schema.optional(Schema.String),
    internalMetadata: Schema.optional(Schema.String),
  }).annotate({ identifier: "Config" });

export interface ScheduledExecutionRecord {
  /** The name of the created workflow invocation, if one was successfully created. Must be in the format `projects/* /locations/* /repositories/* /workflowInvocations/*`. */
  workflowInvocation?: string;
  /** The error status encountered upon this attempt to create the workflow invocation, if the attempt was unsuccessful. */
  errorStatus?: Status;
  /** Output only. The timestamp of this execution attempt. */
  executionTime?: string;
}

export const ScheduledExecutionRecord: Schema.Codec<ScheduledExecutionRecord> =
  /*@__PURE__*/ Schema.Struct({
    workflowInvocation: Schema.optional(Schema.String),
    errorStatus: Schema.optional(Status),
    executionTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ScheduledExecutionRecord" });

export interface WorkflowConfig {
  /** Identifier. The workflow config's name. */
  name?: string;
  /** Optional. Optional schedule (in cron format) for automatic execution of this workflow config. */
  cronSchedule?: string;
  /** Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string. */
  internalMetadata?: string;
  /** Optional. Disables automatic creation of workflow invocations. */
  disabled?: boolean;
  /** Output only. Records of the 10 most recent scheduled execution attempts, ordered in descending order of `execution_time`. Updated whenever automatic creation of a workflow invocation is triggered by cron_schedule. */
  recentScheduledExecutionRecords?: ReadonlyArray<ScheduledExecutionRecord>;
  /** Required. The name of the release config whose release_compilation_result should be executed. Must be in the format `projects/* /locations/* /repositories/* /releaseConfigs/*`. */
  releaseConfig?: string;
  /** Output only. The timestamp of when the WorkflowConfig was created. */
  createTime?: string;
  /** Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC. */
  timeZone?: string;
  /** Output only. The timestamp of when the WorkflowConfig was last updated. */
  updateTime?: string;
  /** Optional. If left unset, a default InvocationConfig will be used. */
  invocationConfig?: InvocationConfig;
}

export const WorkflowConfig: Schema.Codec<WorkflowConfig> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    cronSchedule: Schema.optional(Schema.String),
    internalMetadata: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
    recentScheduledExecutionRecords: Schema.optional(
      Schema.Array(ScheduledExecutionRecord),
    ),
    releaseConfig: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    timeZone: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    invocationConfig: Schema.optional(InvocationConfig),
  }).annotate({ identifier: "WorkflowConfig" });

export interface ListWorkflowConfigsResponse {
  /** List of workflow configs. */
  workflowConfigs?: ReadonlyArray<WorkflowConfig>;
  /** Locations which could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListWorkflowConfigsResponse: Schema.Codec<ListWorkflowConfigsResponse> =
  /*@__PURE__*/ Schema.Struct({
    workflowConfigs: Schema.optional(Schema.Array(WorkflowConfig)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListWorkflowConfigsResponse" });

export interface TeamFolderContentsEntry {
  /** A subfolder. */
  folder?: Folder;
  /** A repository. */
  repository?: Repository;
}

export const TeamFolderContentsEntry: Schema.Codec<TeamFolderContentsEntry> =
  /*@__PURE__*/ Schema.Struct({
    folder: Schema.optional(Folder),
    repository: Schema.optional(Repository),
  }).annotate({ identifier: "TeamFolderContentsEntry" });

export interface QueryTeamFolderContentsResponse {
  /** List of entries in the TeamFolder. */
  entries?: ReadonlyArray<TeamFolderContentsEntry>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const QueryTeamFolderContentsResponse: Schema.Codec<QueryTeamFolderContentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(TeamFolderContentsEntry)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryTeamFolderContentsResponse" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Codec<CancelOperationRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface FetchFileGitStatusesResponse {
  /** A list of all files which have uncommitted Git changes. There will only be a single entry for any given file. */
  uncommittedFileChanges?: ReadonlyArray<UncommittedFileChange>;
}

export const FetchFileGitStatusesResponse: Schema.Codec<FetchFileGitStatusesResponse> =
  /*@__PURE__*/ Schema.Struct({
    uncommittedFileChanges: Schema.optional(
      Schema.Array(UncommittedFileChange),
    ),
  }).annotate({ identifier: "FetchFileGitStatusesResponse" });

export interface MoveRepositoryRequest {
  /** Optional. The name of the Folder, TeamFolder, or root location to move the repository to. Can be in the format of: "" to move into the root User folder, `projects/* /locations/* /folders/*`, `projects/* /locations/* /teamFolders/*` */
  destinationContainingFolder?: string;
}

export const MoveRepositoryRequest: Schema.Codec<MoveRepositoryRequest> =
  /*@__PURE__*/ Schema.Struct({
    destinationContainingFolder: Schema.optional(Schema.String),
  }).annotate({ identifier: "MoveRepositoryRequest" });

export interface SearchTeamFoldersResponse {
  /** List of TeamFolders that match the search query. */
  results?: ReadonlyArray<TeamFolderSearchResult>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const SearchTeamFoldersResponse: Schema.Codec<SearchTeamFoldersResponse> =
  /*@__PURE__*/ Schema.Struct({
    results: Schema.optional(Schema.Array(TeamFolderSearchResult)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchTeamFoldersResponse" });

export interface FetchFileDiffResponse {
  /** The raw formatted Git diff for the file. */
  formattedDiff?: string;
}

export const FetchFileDiffResponse: Schema.Codec<FetchFileDiffResponse> =
  /*@__PURE__*/ Schema.Struct({
    formattedDiff: Schema.optional(Schema.String),
  }).annotate({ identifier: "FetchFileDiffResponse" });

export interface PushGitCommitsResponse {}

export const PushGitCommitsResponse: Schema.Codec<PushGitCommitsResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "PushGitCommitsResponse",
  });

export interface QueryDirectoryContentsResponse {
  /** List of entries in the directory. */
  directoryEntries?: ReadonlyArray<DirectoryEntry>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const QueryDirectoryContentsResponse: Schema.Codec<QueryDirectoryContentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    directoryEntries: Schema.optional(Schema.Array(DirectoryEntry)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryDirectoryContentsResponse" });

export interface ReadFileResponse {
  /** The file's contents. */
  fileContents?: string;
}

export const ReadFileResponse: Schema.Codec<ReadFileResponse> =
  /*@__PURE__*/ Schema.Struct({
    fileContents: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReadFileResponse" });

export interface QueryFolderContentsResponse {
  /** List of entries in the folder. */
  entries?: ReadonlyArray<FolderContentsEntry>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const QueryFolderContentsResponse: Schema.Codec<QueryFolderContentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(FolderContentsEntry)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryFolderContentsResponse" });

export interface InstallNpmPackagesResponse {}

export const InstallNpmPackagesResponse: Schema.Codec<InstallNpmPackagesResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "InstallNpmPackagesResponse",
  });

export interface DeleteTeamFolderTreeRequest {
  /** Optional. If `false` (default): The operation will fail if any Repository within the folder hierarchy has associated Release Configs or Workflow Configs. If `true`: The operation will attempt to delete everything, including any Release Configs and Workflow Configs linked to Repositories within the folder hierarchy. This permanently removes schedules and resources. */
  force?: boolean;
}

export const DeleteTeamFolderTreeRequest: Schema.Codec<DeleteTeamFolderTreeRequest> =
  /*@__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DeleteTeamFolderTreeRequest" });

export interface InstallNpmPackagesRequest {}

export const InstallNpmPackagesRequest: Schema.Codec<InstallNpmPackagesRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "InstallNpmPackagesRequest",
  });

export interface MoveFileRequest {
  /** Required. The file's full path including filename, relative to the workspace root. */
  path?: string;
  /** Required. The file's new path including filename, relative to the workspace root. */
  newPath?: string;
}

export const MoveFileRequest: Schema.Codec<MoveFileRequest> =
  /*@__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    newPath: Schema.optional(Schema.String),
  }).annotate({ identifier: "MoveFileRequest" });

export interface OperationMetadata {
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusDetail?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
  cancelRequested?: boolean;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
}

export const OperationMetadata: Schema.Codec<OperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    statusDetail: Schema.optional(Schema.String),
    cancelRequested: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface MoveFolderRequest {
  /** Optional. The name of the Folder, TeamFolder, or root location to move the Folder to. Can be in the format of: "" to move into the root User folder, `projects/* /locations/* /folders/*`, `projects/* /locations/* /teamFolders/*` */
  destinationContainingFolder?: string;
}

export const MoveFolderRequest: Schema.Codec<MoveFolderRequest> =
  /*@__PURE__*/ Schema.Struct({
    destinationContainingFolder: Schema.optional(Schema.String),
  }).annotate({ identifier: "MoveFolderRequest" });

export interface CommitRepositoryChangesRequest {
  /** Optional. A map to the path of the file to the operation. The path is the full file path including filename, from repository root. */
  fileOperations?: Record<string, FileOperation>;
  /** Required. The changes to commit to the repository. */
  commitMetadata?: CommitMetadata;
  /** Optional. The commit SHA which must be the repository's current HEAD before applying this commit; otherwise this request will fail. If unset, no validation on the current HEAD commit SHA is performed. */
  requiredHeadCommitSha?: string;
}

export const CommitRepositoryChangesRequest: Schema.Codec<CommitRepositoryChangesRequest> =
  /*@__PURE__*/ Schema.Struct({
    fileOperations: Schema.optional(
      Schema.Record(Schema.String, FileOperation),
    ),
    commitMetadata: Schema.optional(CommitMetadata),
    requiredHeadCommitSha: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommitRepositoryChangesRequest" });

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

export interface GetProjectsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = Location;
export const GetProjectsLocationsResponse = /*@__PURE__*/ Location;

export type GetProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Gets information about a location. */
export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsRequest {
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRequest,
  output: ListProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface QueryUserRootContentsProjectsLocationsRequest {
  /** Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Page token received from a previous `QueryUserRootContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryUserRootFolderContents`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Optional filtering for the returned list. Filtering is currently only supported on the `display_name` field. Example: * `filter="display_name="MyFolder""` */
  filter?: string;
  /** Required. Location of the user root folder to list contents for. Format: projects/* /locations/* */
  location: string;
  /** Optional. Field to additionally sort results by. Will order Folders before Repositories, and then by `order_by` in ascending order. Supported keywords: display_name (default), created_at, last_modified_at. Examples: * `orderBy="display_name"` * `orderBy="display_name desc"` */
  orderBy?: string;
}

export const QueryUserRootContentsProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    location: Schema.String.pipe(T.HttpPath("location")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+location}:queryUserRootContents" }),
    svc,
  ) as unknown as Schema.Codec<QueryUserRootContentsProjectsLocationsRequest>;

export type QueryUserRootContentsProjectsLocationsResponse =
  QueryUserRootContentsResponse;
export const QueryUserRootContentsProjectsLocationsResponse =
  /*@__PURE__*/ QueryUserRootContentsResponse;

export type QueryUserRootContentsProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the contents of a caller's root folder in a given location. The root folder contains all resources that are created by the user and not contained in any other folder. */
export const queryUserRootContentsProjectsLocations: API.PaginatedOperationMethod<
  QueryUserRootContentsProjectsLocationsRequest,
  QueryUserRootContentsProjectsLocationsResponse,
  QueryUserRootContentsProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: QueryUserRootContentsProjectsLocationsRequest,
  output: QueryUserRootContentsProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdateConfigProjectsLocationsRequest {
  /** Optional. Specifies the fields to be updated in the config. */
  updateMask?: string;
  /** Identifier. The config name. */
  name: string;
  /** Request body */
  body?: Config;
}

export const UpdateConfigProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Config).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateConfigProjectsLocationsRequest>;

export type UpdateConfigProjectsLocationsResponse = Config;
export const UpdateConfigProjectsLocationsResponse = /*@__PURE__*/ Config;

export type UpdateConfigProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update default config for a given project and location. **Note:** *This method does not fully implement [AIP/134](https://google.aip.dev/134). The wildcard entry (\*) is treated as a bad request, and when the `field_mask` is omitted, the request is treated as a full update on all modifiable fields.* */
export const updateConfigProjectsLocations: API.OperationMethod<
  UpdateConfigProjectsLocationsRequest,
  UpdateConfigProjectsLocationsResponse,
  UpdateConfigProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateConfigProjectsLocationsRequest,
  output: UpdateConfigProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetConfigProjectsLocationsRequest {
  /** Required. The config name. */
  name: string;
}

export const GetConfigProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetConfigProjectsLocationsRequest>;

export type GetConfigProjectsLocationsResponse = Config;
export const GetConfigProjectsLocationsResponse = /*@__PURE__*/ Config;

export type GetConfigProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get default config for a given project and location. */
export const getConfigProjectsLocations: API.OperationMethod<
  GetConfigProjectsLocationsRequest,
  GetConfigProjectsLocationsResponse,
  GetConfigProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetConfigProjectsLocationsRequest,
  output: GetConfigProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetIamPolicyProjectsLocationsTeamFoldersRequest {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
}

export const GetIamPolicyProjectsLocationsTeamFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
    resource: Schema.String.pipe(T.HttpPath("resource")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Codec<GetIamPolicyProjectsLocationsTeamFoldersRequest>;

export type GetIamPolicyProjectsLocationsTeamFoldersResponse = Policy;
export const GetIamPolicyProjectsLocationsTeamFoldersResponse =
  /*@__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsTeamFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsTeamFolders: API.OperationMethod<
  GetIamPolicyProjectsLocationsTeamFoldersRequest,
  GetIamPolicyProjectsLocationsTeamFoldersResponse,
  GetIamPolicyProjectsLocationsTeamFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsTeamFoldersRequest,
  output: GetIamPolicyProjectsLocationsTeamFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsTeamFoldersRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsTeamFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SetIamPolicyProjectsLocationsTeamFoldersRequest>;

export type SetIamPolicyProjectsLocationsTeamFoldersResponse = Policy;
export const SetIamPolicyProjectsLocationsTeamFoldersResponse =
  /*@__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsTeamFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsTeamFolders: API.OperationMethod<
  SetIamPolicyProjectsLocationsTeamFoldersRequest,
  SetIamPolicyProjectsLocationsTeamFoldersResponse,
  SetIamPolicyProjectsLocationsTeamFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsTeamFoldersRequest,
  output: SetIamPolicyProjectsLocationsTeamFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteTreeProjectsLocationsTeamFoldersRequest {
  /** Required. The TeamFolder's name. Format: projects/{project}/locations/{location}/teamFolders/{team_folder} */
  name: string;
  /** Request body */
  body?: DeleteTeamFolderTreeRequest;
}

export const DeleteTreeProjectsLocationsTeamFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DeleteTeamFolderTreeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:deleteTree", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<DeleteTreeProjectsLocationsTeamFoldersRequest>;

export type DeleteTreeProjectsLocationsTeamFoldersResponse = Operation;
export const DeleteTreeProjectsLocationsTeamFoldersResponse =
  /*@__PURE__*/ Operation;

export type DeleteTreeProjectsLocationsTeamFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a TeamFolder with its contents (Folders, Repositories, Workspaces, ReleaseConfigs, and WorkflowConfigs). */
export const deleteTreeProjectsLocationsTeamFolders: API.OperationMethod<
  DeleteTreeProjectsLocationsTeamFoldersRequest,
  DeleteTreeProjectsLocationsTeamFoldersResponse,
  DeleteTreeProjectsLocationsTeamFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTreeProjectsLocationsTeamFoldersRequest,
  output: DeleteTreeProjectsLocationsTeamFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsTeamFoldersRequest {
  /** Required. The TeamFolder's name. */
  name: string;
}

export const DeleteProjectsLocationsTeamFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsTeamFoldersRequest>;

export type DeleteProjectsLocationsTeamFoldersResponse = Empty;
export const DeleteProjectsLocationsTeamFoldersResponse = /*@__PURE__*/ Empty;

export type DeleteProjectsLocationsTeamFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single TeamFolder. */
export const deleteProjectsLocationsTeamFolders: API.OperationMethod<
  DeleteProjectsLocationsTeamFoldersRequest,
  DeleteProjectsLocationsTeamFoldersResponse,
  DeleteProjectsLocationsTeamFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsTeamFoldersRequest,
  output: DeleteProjectsLocationsTeamFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsTeamFoldersRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsTeamFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<TestIamPermissionsProjectsLocationsTeamFoldersRequest>;

export type TestIamPermissionsProjectsLocationsTeamFoldersResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsTeamFoldersResponse =
  /*@__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsTeamFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsTeamFolders: API.OperationMethod<
  TestIamPermissionsProjectsLocationsTeamFoldersRequest,
  TestIamPermissionsProjectsLocationsTeamFoldersResponse,
  TestIamPermissionsProjectsLocationsTeamFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsTeamFoldersRequest,
  output: TestIamPermissionsProjectsLocationsTeamFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsTeamFoldersRequest {
  /** Optional. Specifies the fields to be updated in the Folder. If left unset, all fields will be updated. */
  updateMask?: string;
  /** Identifier. The TeamFolder's name. */
  name: string;
  /** Request body */
  body?: TeamFolder;
}

export const PatchProjectsLocationsTeamFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(TeamFolder).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsTeamFoldersRequest>;

export type PatchProjectsLocationsTeamFoldersResponse = TeamFolder;
export const PatchProjectsLocationsTeamFoldersResponse =
  /*@__PURE__*/ TeamFolder;

export type PatchProjectsLocationsTeamFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a single TeamFolder. */
export const patchProjectsLocationsTeamFolders: API.OperationMethod<
  PatchProjectsLocationsTeamFoldersRequest,
  PatchProjectsLocationsTeamFoldersResponse,
  PatchProjectsLocationsTeamFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsTeamFoldersRequest,
  output: PatchProjectsLocationsTeamFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsTeamFoldersRequest {
  /** Required. The TeamFolder's name. */
  name: string;
}

export const GetProjectsLocationsTeamFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsTeamFoldersRequest>;

export type GetProjectsLocationsTeamFoldersResponse = TeamFolder;
export const GetProjectsLocationsTeamFoldersResponse = /*@__PURE__*/ TeamFolder;

export type GetProjectsLocationsTeamFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetches a single TeamFolder. */
export const getProjectsLocationsTeamFolders: API.OperationMethod<
  GetProjectsLocationsTeamFoldersRequest,
  GetProjectsLocationsTeamFoldersResponse,
  GetProjectsLocationsTeamFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsTeamFoldersRequest,
  output: GetProjectsLocationsTeamFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsTeamFoldersRequest {
  /** Required. The location in which to create the TeamFolder. Must be in the format `projects/* /locations/*`. */
  parent: string;
  /** Request body */
  body?: TeamFolder;
}

export const CreateProjectsLocationsTeamFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(TeamFolder).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/teamFolders", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsTeamFoldersRequest>;

export type CreateProjectsLocationsTeamFoldersResponse = TeamFolder;
export const CreateProjectsLocationsTeamFoldersResponse =
  /*@__PURE__*/ TeamFolder;

export type CreateProjectsLocationsTeamFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new TeamFolder in a given project and location. */
export const createProjectsLocationsTeamFolders: API.OperationMethod<
  CreateProjectsLocationsTeamFoldersRequest,
  CreateProjectsLocationsTeamFoldersResponse,
  CreateProjectsLocationsTeamFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsTeamFoldersRequest,
  output: CreateProjectsLocationsTeamFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface QueryContentsProjectsLocationsTeamFoldersRequest {
  /** Optional. Page token received from a previous `QueryTeamFolderContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryTeamFolderContents`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Optional filtering for the returned list. Filtering is currently only supported on the `display_name` field. Example: * `filter="display_name="MyFolder""` */
  filter?: string;
  /** Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Required. Resource name of the TeamFolder to list contents for. Format: `projects/* /locations/* /teamFolders/*`. */
  teamFolder: string;
  /** Optional. Field to additionally sort results by. Will order Folders before Repositories, and then by `order_by` in ascending order. Supported keywords: `display_name` (default), `create_time`, last_modified_time. Examples: * `orderBy="display_name"` * `orderBy="display_name desc"` */
  orderBy?: string;
}

export const QueryContentsProjectsLocationsTeamFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    teamFolder: Schema.String.pipe(T.HttpPath("teamFolder")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+teamFolder}:queryContents" }),
    svc,
  ) as unknown as Schema.Codec<QueryContentsProjectsLocationsTeamFoldersRequest>;

export type QueryContentsProjectsLocationsTeamFoldersResponse =
  QueryTeamFolderContentsResponse;
export const QueryContentsProjectsLocationsTeamFoldersResponse =
  /*@__PURE__*/ QueryTeamFolderContentsResponse;

export type QueryContentsProjectsLocationsTeamFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the contents of a given TeamFolder. */
export const queryContentsProjectsLocationsTeamFolders: API.PaginatedOperationMethod<
  QueryContentsProjectsLocationsTeamFoldersRequest,
  QueryContentsProjectsLocationsTeamFoldersResponse,
  QueryContentsProjectsLocationsTeamFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: QueryContentsProjectsLocationsTeamFoldersRequest,
  output: QueryContentsProjectsLocationsTeamFoldersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SearchProjectsLocationsTeamFoldersRequest {
  /** Optional. Field to additionally sort results by. Supported keywords: `display_name` (default), `create_time`, `last_modified_time`. Examples: * `orderBy="display_name"` * `orderBy="display_name desc"` */
  orderBy?: string;
  /** Required. Location in which to query TeamFolders. Format: `projects/* /locations/*`. */
  location: string;
  /** Optional. Page token received from a previous `SearchTeamFolders` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchTeamFolders`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Optional filtering for the returned list. Filtering is currently only supported on the `display_name` field. Example: * `filter="display_name="MyFolder""` */
  filter?: string;
  /** Optional. Maximum number of `TeamFolders` to return. The server may return fewer items than requested. If unspecified, the server will pick a default of `page_size` = 50. */
  pageSize?: number;
}

export const SearchProjectsLocationsTeamFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    location: Schema.String.pipe(T.HttpPath("location")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+location}/teamFolders:search" }),
    svc,
  ) as unknown as Schema.Codec<SearchProjectsLocationsTeamFoldersRequest>;

export type SearchProjectsLocationsTeamFoldersResponse =
  SearchTeamFoldersResponse;
export const SearchProjectsLocationsTeamFoldersResponse =
  /*@__PURE__*/ SearchTeamFoldersResponse;

export type SearchProjectsLocationsTeamFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns all TeamFolders in a given location that the caller has access to and match the provided filter. */
export const searchProjectsLocationsTeamFolders: API.PaginatedOperationMethod<
  SearchProjectsLocationsTeamFoldersRequest,
  SearchProjectsLocationsTeamFoldersResponse,
  SearchProjectsLocationsTeamFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SearchProjectsLocationsTeamFoldersRequest,
  output: SearchProjectsLocationsTeamFoldersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsFoldersRequest {
  /** Required. The location in which to create the Folder. Must be in the format `projects/* /locations/*`. */
  parent: string;
  /** Request body */
  body?: Folder;
}

export const CreateProjectsLocationsFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Folder).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/folders", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsFoldersRequest>;

export type CreateProjectsLocationsFoldersResponse = Folder;
export const CreateProjectsLocationsFoldersResponse = /*@__PURE__*/ Folder;

export type CreateProjectsLocationsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Folder in a given project and location. */
export const createProjectsLocationsFolders: API.OperationMethod<
  CreateProjectsLocationsFoldersRequest,
  CreateProjectsLocationsFoldersResponse,
  CreateProjectsLocationsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsFoldersRequest,
  output: CreateProjectsLocationsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsFoldersRequest {
  /** Required. The Folder's name. */
  name: string;
}

export const GetProjectsLocationsFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsFoldersRequest>;

export type GetProjectsLocationsFoldersResponse = Folder;
export const GetProjectsLocationsFoldersResponse = /*@__PURE__*/ Folder;

export type GetProjectsLocationsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetches a single Folder. */
export const getProjectsLocationsFolders: API.OperationMethod<
  GetProjectsLocationsFoldersRequest,
  GetProjectsLocationsFoldersResponse,
  GetProjectsLocationsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsFoldersRequest,
  output: GetProjectsLocationsFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsFoldersRequest {
  /** Optional. Specifies the fields to be updated in the Folder. If left unset, all fields that can be updated, will be updated. A few fields cannot be updated and will be ignored if specified in the update_mask (e.g. parent_name, team_folder_name). */
  updateMask?: string;
  /** Identifier. The Folder's name. */
  name: string;
  /** Request body */
  body?: Folder;
}

export const PatchProjectsLocationsFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Folder).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsFoldersRequest>;

export type PatchProjectsLocationsFoldersResponse = Folder;
export const PatchProjectsLocationsFoldersResponse = /*@__PURE__*/ Folder;

export type PatchProjectsLocationsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a single Folder. */
export const patchProjectsLocationsFolders: API.OperationMethod<
  PatchProjectsLocationsFoldersRequest,
  PatchProjectsLocationsFoldersResponse,
  PatchProjectsLocationsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsFoldersRequest,
  output: PatchProjectsLocationsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MoveProjectsLocationsFoldersRequest {
  /** Required. The full resource name of the Folder to move. */
  name: string;
  /** Request body */
  body?: MoveFolderRequest;
}

export const MoveProjectsLocationsFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(MoveFolderRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:move", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<MoveProjectsLocationsFoldersRequest>;

export type MoveProjectsLocationsFoldersResponse = Operation;
export const MoveProjectsLocationsFoldersResponse = /*@__PURE__*/ Operation;

export type MoveProjectsLocationsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Moves a Folder to a new Folder, TeamFolder, or the root location. */
export const moveProjectsLocationsFolders: API.OperationMethod<
  MoveProjectsLocationsFoldersRequest,
  MoveProjectsLocationsFoldersResponse,
  MoveProjectsLocationsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: MoveProjectsLocationsFoldersRequest,
  output: MoveProjectsLocationsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsFoldersRequest {
  /** Required. The Folder's name. */
  name: string;
}

export const DeleteProjectsLocationsFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsFoldersRequest>;

export type DeleteProjectsLocationsFoldersResponse = Empty;
export const DeleteProjectsLocationsFoldersResponse = /*@__PURE__*/ Empty;

export type DeleteProjectsLocationsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Folder. */
export const deleteProjectsLocationsFolders: API.OperationMethod<
  DeleteProjectsLocationsFoldersRequest,
  DeleteProjectsLocationsFoldersResponse,
  DeleteProjectsLocationsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsFoldersRequest,
  output: DeleteProjectsLocationsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsFoldersRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<TestIamPermissionsProjectsLocationsFoldersRequest>;

export type TestIamPermissionsProjectsLocationsFoldersResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsFoldersResponse =
  /*@__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsFolders: API.OperationMethod<
  TestIamPermissionsProjectsLocationsFoldersRequest,
  TestIamPermissionsProjectsLocationsFoldersResponse,
  TestIamPermissionsProjectsLocationsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsFoldersRequest,
  output: TestIamPermissionsProjectsLocationsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface QueryFolderContentsProjectsLocationsFoldersRequest {
  /** Optional. Field to additionally sort results by. Will order Folders before Repositories, and then by `order_by` in ascending order. Supported keywords: display_name (default), create_time, last_modified_time. Examples: * `orderBy="display_name"` * `orderBy="display_name desc"` */
  orderBy?: string;
  /** Required. Resource name of the Folder to list contents for. Format: projects/* /locations/* /folders/* */
  folder: string;
  /** Optional. Page token received from a previous `QueryFolderContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryFolderContents`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Optional filtering for the returned list. Filtering is currently only supported on the `display_name` field. Example: * `filter="display_name="MyFolder""` */
  filter?: string;
  /** Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
}

export const QueryFolderContentsProjectsLocationsFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    folder: Schema.String.pipe(T.HttpPath("folder")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+folder}:queryFolderContents" }),
    svc,
  ) as unknown as Schema.Codec<QueryFolderContentsProjectsLocationsFoldersRequest>;

export type QueryFolderContentsProjectsLocationsFoldersResponse =
  QueryFolderContentsResponse;
export const QueryFolderContentsProjectsLocationsFoldersResponse =
  /*@__PURE__*/ QueryFolderContentsResponse;

export type QueryFolderContentsProjectsLocationsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the contents of a given Folder. */
export const queryFolderContentsProjectsLocationsFolders: API.PaginatedOperationMethod<
  QueryFolderContentsProjectsLocationsFoldersRequest,
  QueryFolderContentsProjectsLocationsFoldersResponse,
  QueryFolderContentsProjectsLocationsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: QueryFolderContentsProjectsLocationsFoldersRequest,
  output: QueryFolderContentsProjectsLocationsFoldersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteTreeProjectsLocationsFoldersRequest {
  /** Required. The Folder's name. Format: projects/{project}/locations/{location}/folders/{folder} */
  name: string;
  /** Request body */
  body?: DeleteFolderTreeRequest;
}

export const DeleteTreeProjectsLocationsFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DeleteFolderTreeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:deleteTree", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<DeleteTreeProjectsLocationsFoldersRequest>;

export type DeleteTreeProjectsLocationsFoldersResponse = Operation;
export const DeleteTreeProjectsLocationsFoldersResponse =
  /*@__PURE__*/ Operation;

export type DeleteTreeProjectsLocationsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a Folder with its contents (Folders, Repositories, Workspaces, ReleaseConfigs, and WorkflowConfigs). */
export const deleteTreeProjectsLocationsFolders: API.OperationMethod<
  DeleteTreeProjectsLocationsFoldersRequest,
  DeleteTreeProjectsLocationsFoldersResponse,
  DeleteTreeProjectsLocationsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTreeProjectsLocationsFoldersRequest,
  output: DeleteTreeProjectsLocationsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsFoldersRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Codec<GetIamPolicyProjectsLocationsFoldersRequest>;

export type GetIamPolicyProjectsLocationsFoldersResponse = Policy;
export const GetIamPolicyProjectsLocationsFoldersResponse =
  /*@__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsFolders: API.OperationMethod<
  GetIamPolicyProjectsLocationsFoldersRequest,
  GetIamPolicyProjectsLocationsFoldersResponse,
  GetIamPolicyProjectsLocationsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsFoldersRequest,
  output: GetIamPolicyProjectsLocationsFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsFoldersRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SetIamPolicyProjectsLocationsFoldersRequest>;

export type SetIamPolicyProjectsLocationsFoldersResponse = Policy;
export const SetIamPolicyProjectsLocationsFoldersResponse =
  /*@__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsFolders: API.OperationMethod<
  SetIamPolicyProjectsLocationsFoldersRequest,
  SetIamPolicyProjectsLocationsFoldersResponse,
  SetIamPolicyProjectsLocationsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsFoldersRequest,
  output: SetIamPolicyProjectsLocationsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list page size. */
  pageSize?: number;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ ListOperationsResponse;

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
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
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
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = Empty;
export const DeleteProjectsLocationsOperationsResponse = /*@__PURE__*/ Empty;

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
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = Empty;
export const CancelProjectsLocationsOperationsResponse = /*@__PURE__*/ Empty;

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
> = /*@__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = Operation;
export const GetProjectsLocationsOperationsResponse = /*@__PURE__*/ Operation;

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
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface FetchHistoryProjectsLocationsRepositoriesRequest {
  /** Optional. Maximum number of commits to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Required. The repository's name. */
  name: string;
  /** Optional. Page token received from a previous `FetchRepositoryHistory` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchRepositoryHistory`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
}

export const FetchHistoryProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:fetchHistory" }),
    svc,
  ) as unknown as Schema.Codec<FetchHistoryProjectsLocationsRepositoriesRequest>;

export type FetchHistoryProjectsLocationsRepositoriesResponse =
  FetchRepositoryHistoryResponse;
export const FetchHistoryProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ FetchRepositoryHistoryResponse;

export type FetchHistoryProjectsLocationsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetches a Repository's history of commits. The Repository must not have a value for `git_remote_settings.url`. */
export const fetchHistoryProjectsLocationsRepositories: API.PaginatedOperationMethod<
  FetchHistoryProjectsLocationsRepositoriesRequest,
  FetchHistoryProjectsLocationsRepositoriesResponse,
  FetchHistoryProjectsLocationsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: FetchHistoryProjectsLocationsRepositoriesRequest,
  output: FetchHistoryProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface MoveProjectsLocationsRepositoriesRequest {
  /** Required. The full resource name of the repository to move. */
  name: string;
  /** Request body */
  body?: MoveRepositoryRequest;
}

export const MoveProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(MoveRepositoryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:move", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<MoveProjectsLocationsRepositoriesRequest>;

export type MoveProjectsLocationsRepositoriesResponse = Operation;
export const MoveProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ Operation;

export type MoveProjectsLocationsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Moves a Repository to a new location. */
export const moveProjectsLocationsRepositories: API.OperationMethod<
  MoveProjectsLocationsRepositoriesRequest,
  MoveProjectsLocationsRepositoriesResponse,
  MoveProjectsLocationsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: MoveProjectsLocationsRepositoriesRequest,
  output: MoveProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsRepositoriesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Codec<GetIamPolicyProjectsLocationsRepositoriesRequest>;

export type GetIamPolicyProjectsLocationsRepositoriesResponse = Policy;
export const GetIamPolicyProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsRepositories: API.OperationMethod<
  GetIamPolicyProjectsLocationsRepositoriesRequest,
  GetIamPolicyProjectsLocationsRepositoriesResponse,
  GetIamPolicyProjectsLocationsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsRepositoriesRequest,
  output: GetIamPolicyProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsRepositoriesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SetIamPolicyProjectsLocationsRepositoriesRequest>;

export type SetIamPolicyProjectsLocationsRepositoriesResponse = Policy;
export const SetIamPolicyProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsRepositories: API.OperationMethod<
  SetIamPolicyProjectsLocationsRepositoriesRequest,
  SetIamPolicyProjectsLocationsRepositoriesResponse,
  SetIamPolicyProjectsLocationsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsRepositoriesRequest,
  output: SetIamPolicyProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRepositoriesRequest {
  /** Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field. */
  orderBy?: string;
  /** Optional. Page token received from a previous `ListRepositories` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRepositories`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filter for the returned list. */
  filter?: string;
  /** Required. The location in which to list repositories. Must be in the format `projects/* /locations/*`. */
  parent: string;
  /** Optional. Maximum number of repositories to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/repositories" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsRepositoriesRequest>;

export type ListProjectsLocationsRepositoriesResponse =
  ListRepositoriesResponse;
export const ListProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ ListRepositoriesResponse;

export type ListProjectsLocationsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Repositories in a given project and location. **Note:** *This method can return repositories not shown in the [Dataform UI](https://console.cloud.google.com/bigquery/dataform)*. */
export const listProjectsLocationsRepositories: API.PaginatedOperationMethod<
  ListProjectsLocationsRepositoriesRequest,
  ListProjectsLocationsRepositoriesResponse,
  ListProjectsLocationsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRepositoriesRequest,
  output: ListProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsRepositoriesRequest {
  /** Required. The ID to use for the repository, which will become the final component of the repository's resource name. */
  repositoryId?: string;
  /** Required. The location in which to create the repository. Must be in the format `projects/* /locations/*`. */
  parent: string;
  /** Request body */
  body?: Repository;
}

export const CreateProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ Schema.Struct({
    repositoryId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("repositoryId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Repository).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/repositories",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsRepositoriesRequest>;

export type CreateProjectsLocationsRepositoriesResponse = Repository;
export const CreateProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ Repository;

export type CreateProjectsLocationsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Repository in a given project and location. */
export const createProjectsLocationsRepositories: API.OperationMethod<
  CreateProjectsLocationsRepositoriesRequest,
  CreateProjectsLocationsRepositoriesResponse,
  CreateProjectsLocationsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsRepositoriesRequest,
  output: CreateProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ComputeAccessTokenStatusProjectsLocationsRepositoriesRequest {
  /** Required. The repository's name. */
  name: string;
}

export const ComputeAccessTokenStatusProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:computeAccessTokenStatus" }),
    svc,
  ) as unknown as Schema.Codec<ComputeAccessTokenStatusProjectsLocationsRepositoriesRequest>;

export type ComputeAccessTokenStatusProjectsLocationsRepositoriesResponse =
  ComputeRepositoryAccessTokenStatusResponse;
export const ComputeAccessTokenStatusProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ ComputeRepositoryAccessTokenStatusResponse;

export type ComputeAccessTokenStatusProjectsLocationsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Computes a Repository's Git access token status. */
export const computeAccessTokenStatusProjectsLocationsRepositories: API.OperationMethod<
  ComputeAccessTokenStatusProjectsLocationsRepositoriesRequest,
  ComputeAccessTokenStatusProjectsLocationsRepositoriesResponse,
  ComputeAccessTokenStatusProjectsLocationsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ComputeAccessTokenStatusProjectsLocationsRepositoriesRequest,
  output: ComputeAccessTokenStatusProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsRepositoriesRequest {
  /** Required. The repository's name. */
  name: string;
}

export const GetProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsRepositoriesRequest>;

export type GetProjectsLocationsRepositoriesResponse = Repository;
export const GetProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ Repository;

export type GetProjectsLocationsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetches a single Repository. */
export const getProjectsLocationsRepositories: API.OperationMethod<
  GetProjectsLocationsRepositoriesRequest,
  GetProjectsLocationsRepositoriesResponse,
  GetProjectsLocationsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRepositoriesRequest,
  output: GetProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CommitProjectsLocationsRepositoriesRequest {
  /** Required. The repository's name. */
  name: string;
  /** Request body */
  body?: CommitRepositoryChangesRequest;
}

export const CommitProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CommitRepositoryChangesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:commit", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CommitProjectsLocationsRepositoriesRequest>;

export type CommitProjectsLocationsRepositoriesResponse =
  CommitRepositoryChangesResponse;
export const CommitProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ CommitRepositoryChangesResponse;

export type CommitProjectsLocationsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Applies a Git commit to a Repository. The Repository must not have a value for `git_remote_settings.url`. */
export const commitProjectsLocationsRepositories: API.OperationMethod<
  CommitProjectsLocationsRepositoriesRequest,
  CommitProjectsLocationsRepositoriesResponse,
  CommitProjectsLocationsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CommitProjectsLocationsRepositoriesRequest,
  output: CommitProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsRepositoriesRequest {
  /** Optional. Specifies the fields to be updated in the repository. If left unset, all fields will be updated. */
  updateMask?: string;
  /** Identifier. The repository's name. */
  name: string;
  /** Request body */
  body?: Repository;
}

export const PatchProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Repository).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsRepositoriesRequest>;

export type PatchProjectsLocationsRepositoriesResponse = Repository;
export const PatchProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ Repository;

export type PatchProjectsLocationsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a single Repository. **Note:** *This method does not fully implement [AIP/134](https://google.aip.dev/134). The wildcard entry (\*) is treated as a bad request, and when the `field_mask` is omitted, the request is treated as a full update on all modifiable fields.* */
export const patchProjectsLocationsRepositories: API.OperationMethod<
  PatchProjectsLocationsRepositoriesRequest,
  PatchProjectsLocationsRepositoriesResponse,
  PatchProjectsLocationsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsRepositoriesRequest,
  output: PatchProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsRepositoriesRequest {
  /** Required. The repository's name. */
  name: string;
  /** Optional. If set to true, child resources of this repository (compilation results and workflow invocations) will also be deleted. Otherwise, the request will only succeed if the repository has no child resources. **Note:** *This flag doesn't support deletion of workspaces, release configs or workflow configs. If any of such resources exists in the repository, the request will fail.*. */
  force?: boolean;
}

export const DeleteProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsRepositoriesRequest>;

export type DeleteProjectsLocationsRepositoriesResponse = Empty;
export const DeleteProjectsLocationsRepositoriesResponse = /*@__PURE__*/ Empty;

export type DeleteProjectsLocationsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Repository. */
export const deleteProjectsLocationsRepositories: API.OperationMethod<
  DeleteProjectsLocationsRepositoriesRequest,
  DeleteProjectsLocationsRepositoriesResponse,
  DeleteProjectsLocationsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRepositoriesRequest,
  output: DeleteProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReadFileProjectsLocationsRepositoriesRequest {
  /** Required. The repository's name. */
  name: string;
  /** Required. Full file path to read including filename, from repository root. */
  path?: string;
  /** Optional. The commit SHA for the commit to read from. If unset, the file will be read from HEAD. */
  commitSha?: string;
}

export const ReadFileProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    path: Schema.optional(Schema.String).pipe(T.HttpQuery("path")),
    commitSha: Schema.optional(Schema.String).pipe(T.HttpQuery("commitSha")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:readFile" }),
    svc,
  ) as unknown as Schema.Codec<ReadFileProjectsLocationsRepositoriesRequest>;

export type ReadFileProjectsLocationsRepositoriesResponse =
  ReadRepositoryFileResponse;
export const ReadFileProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ ReadRepositoryFileResponse;

export type ReadFileProjectsLocationsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the contents of a file (inside a Repository). The Repository must not have a value for `git_remote_settings.url`. */
export const readFileProjectsLocationsRepositories: API.OperationMethod<
  ReadFileProjectsLocationsRepositoriesRequest,
  ReadFileProjectsLocationsRepositoriesResponse,
  ReadFileProjectsLocationsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ReadFileProjectsLocationsRepositoriesRequest,
  output: ReadFileProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsRepositoriesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<TestIamPermissionsProjectsLocationsRepositoriesRequest>;

export type TestIamPermissionsProjectsLocationsRepositoriesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsRepositories: API.OperationMethod<
  TestIamPermissionsProjectsLocationsRepositoriesRequest,
  TestIamPermissionsProjectsLocationsRepositoriesResponse,
  TestIamPermissionsProjectsLocationsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsRepositoriesRequest,
  output: TestIamPermissionsProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface QueryDirectoryContentsProjectsLocationsRepositoriesRequest {
  /** Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Required. The repository's name. */
  name: string;
  /** Optional. Page token received from a previous `QueryRepositoryDirectoryContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryRepositoryDirectoryContents`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The Commit SHA for the commit to query from. If unset, the directory will be queried from HEAD. */
  commitSha?: string;
  /** Optional. The directory's full path including directory name, relative to root. If left unset, the root is used. */
  path?: string;
}

export const QueryDirectoryContentsProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    commitSha: Schema.optional(Schema.String).pipe(T.HttpQuery("commitSha")),
    path: Schema.optional(Schema.String).pipe(T.HttpQuery("path")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:queryDirectoryContents" }),
    svc,
  ) as unknown as Schema.Codec<QueryDirectoryContentsProjectsLocationsRepositoriesRequest>;

export type QueryDirectoryContentsProjectsLocationsRepositoriesResponse =
  QueryRepositoryDirectoryContentsResponse;
export const QueryDirectoryContentsProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ QueryRepositoryDirectoryContentsResponse;

export type QueryDirectoryContentsProjectsLocationsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the contents of a given Repository directory. The Repository must not have a value for `git_remote_settings.url`. */
export const queryDirectoryContentsProjectsLocationsRepositories: API.PaginatedOperationMethod<
  QueryDirectoryContentsProjectsLocationsRepositoriesRequest,
  QueryDirectoryContentsProjectsLocationsRepositoriesResponse,
  QueryDirectoryContentsProjectsLocationsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: QueryDirectoryContentsProjectsLocationsRepositoriesRequest,
  output: QueryDirectoryContentsProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface FetchRemoteBranchesProjectsLocationsRepositoriesRequest {
  /** Required. The repository's name. */
  name: string;
}

export const FetchRemoteBranchesProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:fetchRemoteBranches" }),
    svc,
  ) as unknown as Schema.Codec<FetchRemoteBranchesProjectsLocationsRepositoriesRequest>;

export type FetchRemoteBranchesProjectsLocationsRepositoriesResponse =
  FetchRemoteBranchesResponse;
export const FetchRemoteBranchesProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ FetchRemoteBranchesResponse;

export type FetchRemoteBranchesProjectsLocationsRepositoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetches a Repository's remote branches. */
export const fetchRemoteBranchesProjectsLocationsRepositories: API.OperationMethod<
  FetchRemoteBranchesProjectsLocationsRepositoriesRequest,
  FetchRemoteBranchesProjectsLocationsRepositoriesResponse,
  FetchRemoteBranchesProjectsLocationsRepositoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: FetchRemoteBranchesProjectsLocationsRepositoriesRequest,
  output: FetchRemoteBranchesProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  name: string;
}

export const GetProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsRepositoriesWorkspacesRequest>;

export type GetProjectsLocationsRepositoriesWorkspacesResponse = Workspace;
export const GetProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ Workspace;

export type GetProjectsLocationsRepositoriesWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetches a single Workspace. */
export const getProjectsLocationsRepositoriesWorkspaces: API.OperationMethod<
  GetProjectsLocationsRepositoriesWorkspacesRequest,
  GetProjectsLocationsRepositoriesWorkspacesResponse,
  GetProjectsLocationsRepositoriesWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRepositoriesWorkspacesRequest,
  output: GetProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CommitProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  name: string;
  /** Request body */
  body?: CommitWorkspaceChangesRequest;
}

export const CommitProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CommitWorkspaceChangesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:commit", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CommitProjectsLocationsRepositoriesWorkspacesRequest>;

export type CommitProjectsLocationsRepositoriesWorkspacesResponse =
  CommitWorkspaceChangesResponse;
export const CommitProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ CommitWorkspaceChangesResponse;

export type CommitProjectsLocationsRepositoriesWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Applies a Git commit for uncommitted files in a Workspace. */
export const commitProjectsLocationsRepositoriesWorkspaces: API.OperationMethod<
  CommitProjectsLocationsRepositoriesWorkspacesRequest,
  CommitProjectsLocationsRepositoriesWorkspacesResponse,
  CommitProjectsLocationsRepositoriesWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CommitProjectsLocationsRepositoriesWorkspacesRequest,
  output: CommitProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResetProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  name: string;
  /** Request body */
  body?: ResetWorkspaceChangesRequest;
}

export const ResetProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ResetWorkspaceChangesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:reset", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<ResetProjectsLocationsRepositoriesWorkspacesRequest>;

export type ResetProjectsLocationsRepositoriesWorkspacesResponse =
  ResetWorkspaceChangesResponse;
export const ResetProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ ResetWorkspaceChangesResponse;

export type ResetProjectsLocationsRepositoriesWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Performs a Git reset for uncommitted files in a Workspace. */
export const resetProjectsLocationsRepositoriesWorkspaces: API.OperationMethod<
  ResetProjectsLocationsRepositoriesWorkspacesRequest,
  ResetProjectsLocationsRepositoriesWorkspacesResponse,
  ResetProjectsLocationsRepositoriesWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ResetProjectsLocationsRepositoriesWorkspacesRequest,
  output: ResetProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MakeDirectoryProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  workspace: string;
  /** Request body */
  body?: MakeDirectoryRequest;
}

export const MakeDirectoryProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ Schema.Struct({
    workspace: Schema.String.pipe(T.HttpPath("workspace")),
    body: Schema.optional(MakeDirectoryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+workspace}:makeDirectory",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<MakeDirectoryProjectsLocationsRepositoriesWorkspacesRequest>;

export type MakeDirectoryProjectsLocationsRepositoriesWorkspacesResponse =
  MakeDirectoryResponse;
export const MakeDirectoryProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ MakeDirectoryResponse;

export type MakeDirectoryProjectsLocationsRepositoriesWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a directory inside a Workspace. */
export const makeDirectoryProjectsLocationsRepositoriesWorkspaces: API.OperationMethod<
  MakeDirectoryProjectsLocationsRepositoriesWorkspacesRequest,
  MakeDirectoryProjectsLocationsRepositoriesWorkspacesResponse,
  MakeDirectoryProjectsLocationsRepositoriesWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: MakeDirectoryProjectsLocationsRepositoriesWorkspacesRequest,
  output: MakeDirectoryProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InstallNpmPackagesProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  workspace: string;
  /** Request body */
  body?: InstallNpmPackagesRequest;
}

export const InstallNpmPackagesProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ Schema.Struct({
    workspace: Schema.String.pipe(T.HttpPath("workspace")),
    body: Schema.optional(InstallNpmPackagesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+workspace}:installNpmPackages",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<InstallNpmPackagesProjectsLocationsRepositoriesWorkspacesRequest>;

export type InstallNpmPackagesProjectsLocationsRepositoriesWorkspacesResponse =
  InstallNpmPackagesResponse;
export const InstallNpmPackagesProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ InstallNpmPackagesResponse;

export type InstallNpmPackagesProjectsLocationsRepositoriesWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Installs dependency NPM packages (inside a Workspace). */
export const installNpmPackagesProjectsLocationsRepositoriesWorkspaces: API.OperationMethod<
  InstallNpmPackagesProjectsLocationsRepositoriesWorkspacesRequest,
  InstallNpmPackagesProjectsLocationsRepositoriesWorkspacesResponse,
  InstallNpmPackagesProjectsLocationsRepositoriesWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: InstallNpmPackagesProjectsLocationsRepositoriesWorkspacesRequest,
  output: InstallNpmPackagesProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FetchFileGitStatusesProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  name: string;
}

export const FetchFileGitStatusesProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:fetchFileGitStatuses" }),
    svc,
  ) as unknown as Schema.Codec<FetchFileGitStatusesProjectsLocationsRepositoriesWorkspacesRequest>;

export type FetchFileGitStatusesProjectsLocationsRepositoriesWorkspacesResponse =
  FetchFileGitStatusesResponse;
export const FetchFileGitStatusesProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ FetchFileGitStatusesResponse;

export type FetchFileGitStatusesProjectsLocationsRepositoriesWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetches Git statuses for the files in a Workspace. */
export const fetchFileGitStatusesProjectsLocationsRepositoriesWorkspaces: API.OperationMethod<
  FetchFileGitStatusesProjectsLocationsRepositoriesWorkspacesRequest,
  FetchFileGitStatusesProjectsLocationsRepositoriesWorkspacesResponse,
  FetchFileGitStatusesProjectsLocationsRepositoriesWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: FetchFileGitStatusesProjectsLocationsRepositoriesWorkspacesRequest,
  output: FetchFileGitStatusesProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The repository in which to create the workspace. Must be in the format `projects/* /locations/* /repositories/*`. */
  parent: string;
  /** Required. The ID to use for the workspace, which will become the final component of the workspace's resource name. */
  workspaceId?: string;
  /** Request body */
  body?: Workspace;
}

export const CreateProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    workspaceId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("workspaceId"),
    ),
    body: Schema.optional(Workspace).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/workspaces", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsRepositoriesWorkspacesRequest>;

export type CreateProjectsLocationsRepositoriesWorkspacesResponse = Workspace;
export const CreateProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ Workspace;

export type CreateProjectsLocationsRepositoriesWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Workspace in a given Repository. */
export const createProjectsLocationsRepositoriesWorkspaces: API.OperationMethod<
  CreateProjectsLocationsRepositoriesWorkspacesRequest,
  CreateProjectsLocationsRepositoriesWorkspacesResponse,
  CreateProjectsLocationsRepositoriesWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsRepositoriesWorkspacesRequest,
  output: CreateProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface QueryDirectoryContentsProjectsLocationsRepositoriesWorkspacesRequest {
  /** Optional. Page token received from a previous `QueryDirectoryContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryDirectoryContents`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The workspace's name. */
  workspace: string;
  /** Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. The directory's full path including directory name, relative to the workspace root. If left unset, the workspace root is used. */
  path?: string;
  /** Optional. Specifies the metadata to return for each directory entry. If unspecified, the default is `DIRECTORY_CONTENTS_VIEW_BASIC`. Currently the `DIRECTORY_CONTENTS_VIEW_METADATA` view is not supported by CMEK-protected workspaces. */
  view?:
    | "DIRECTORY_CONTENTS_VIEW_UNSPECIFIED"
    | "DIRECTORY_CONTENTS_VIEW_BASIC"
    | "DIRECTORY_CONTENTS_VIEW_METADATA"
    | (string & {});
}

export const QueryDirectoryContentsProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    workspace: Schema.String.pipe(T.HttpPath("workspace")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    path: Schema.optional(Schema.String).pipe(T.HttpQuery("path")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+workspace}:queryDirectoryContents" }),
    svc,
  ) as unknown as Schema.Codec<QueryDirectoryContentsProjectsLocationsRepositoriesWorkspacesRequest>;

export type QueryDirectoryContentsProjectsLocationsRepositoriesWorkspacesResponse =
  QueryDirectoryContentsResponse;
export const QueryDirectoryContentsProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ QueryDirectoryContentsResponse;

export type QueryDirectoryContentsProjectsLocationsRepositoriesWorkspacesError =
  DefaultErrors | NotFound | Forbidden;

/** Returns the contents of a given Workspace directory. */
export const queryDirectoryContentsProjectsLocationsRepositoriesWorkspaces: API.PaginatedOperationMethod<
  QueryDirectoryContentsProjectsLocationsRepositoriesWorkspacesRequest,
  QueryDirectoryContentsProjectsLocationsRepositoriesWorkspacesResponse,
  QueryDirectoryContentsProjectsLocationsRepositoriesWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: QueryDirectoryContentsProjectsLocationsRepositoriesWorkspacesRequest,
  output: QueryDirectoryContentsProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface RemoveDirectoryProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  workspace: string;
  /** Request body */
  body?: RemoveDirectoryRequest;
}

export const RemoveDirectoryProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ Schema.Struct({
    workspace: Schema.String.pipe(T.HttpPath("workspace")),
    body: Schema.optional(RemoveDirectoryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+workspace}:removeDirectory",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<RemoveDirectoryProjectsLocationsRepositoriesWorkspacesRequest>;

export type RemoveDirectoryProjectsLocationsRepositoriesWorkspacesResponse =
  RemoveDirectoryResponse;
export const RemoveDirectoryProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ RemoveDirectoryResponse;

export type RemoveDirectoryProjectsLocationsRepositoriesWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a directory (inside a Workspace) and all of its contents. */
export const removeDirectoryProjectsLocationsRepositoriesWorkspaces: API.OperationMethod<
  RemoveDirectoryProjectsLocationsRepositoriesWorkspacesRequest,
  RemoveDirectoryProjectsLocationsRepositoriesWorkspacesResponse,
  RemoveDirectoryProjectsLocationsRepositoriesWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveDirectoryProjectsLocationsRepositoriesWorkspacesRequest,
  output: RemoveDirectoryProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PushProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  name: string;
  /** Request body */
  body?: PushGitCommitsRequest;
}

export const PushProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(PushGitCommitsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:push", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PushProjectsLocationsRepositoriesWorkspacesRequest>;

export type PushProjectsLocationsRepositoriesWorkspacesResponse =
  PushGitCommitsResponse;
export const PushProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ PushGitCommitsResponse;

export type PushProjectsLocationsRepositoriesWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Pushes Git commits from a Workspace to the Repository's remote. */
export const pushProjectsLocationsRepositoriesWorkspaces: API.OperationMethod<
  PushProjectsLocationsRepositoriesWorkspacesRequest,
  PushProjectsLocationsRepositoriesWorkspacesResponse,
  PushProjectsLocationsRepositoriesWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PushProjectsLocationsRepositoriesWorkspacesRequest,
  output: PushProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FetchFileDiffProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  workspace: string;
  /** Required. The file's full path including filename, relative to the workspace root. */
  path?: string;
}

export const FetchFileDiffProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ Schema.Struct({
    workspace: Schema.String.pipe(T.HttpPath("workspace")),
    path: Schema.optional(Schema.String).pipe(T.HttpQuery("path")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+workspace}:fetchFileDiff" }),
    svc,
  ) as unknown as Schema.Codec<FetchFileDiffProjectsLocationsRepositoriesWorkspacesRequest>;

export type FetchFileDiffProjectsLocationsRepositoriesWorkspacesResponse =
  FetchFileDiffResponse;
export const FetchFileDiffProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ FetchFileDiffResponse;

export type FetchFileDiffProjectsLocationsRepositoriesWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetches Git diff for an uncommitted file in a Workspace. */
export const fetchFileDiffProjectsLocationsRepositoriesWorkspaces: API.OperationMethod<
  FetchFileDiffProjectsLocationsRepositoriesWorkspacesRequest,
  FetchFileDiffProjectsLocationsRepositoriesWorkspacesResponse,
  FetchFileDiffProjectsLocationsRepositoriesWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: FetchFileDiffProjectsLocationsRepositoriesWorkspacesRequest,
  output: FetchFileDiffProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden],
}));

export interface FetchGitAheadBehindProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  name: string;
  /** Optional. The name of the branch in the Git remote against which this workspace should be compared. If left unset, the repository's default branch name will be used. */
  remoteBranch?: string;
}

export const FetchGitAheadBehindProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    remoteBranch: Schema.optional(Schema.String).pipe(
      T.HttpQuery("remoteBranch"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:fetchGitAheadBehind" }),
    svc,
  ) as unknown as Schema.Codec<FetchGitAheadBehindProjectsLocationsRepositoriesWorkspacesRequest>;

export type FetchGitAheadBehindProjectsLocationsRepositoriesWorkspacesResponse =
  FetchGitAheadBehindResponse;
export const FetchGitAheadBehindProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ FetchGitAheadBehindResponse;

export type FetchGitAheadBehindProjectsLocationsRepositoriesWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetches Git ahead/behind against a remote branch. */
export const fetchGitAheadBehindProjectsLocationsRepositoriesWorkspaces: API.OperationMethod<
  FetchGitAheadBehindProjectsLocationsRepositoriesWorkspacesRequest,
  FetchGitAheadBehindProjectsLocationsRepositoriesWorkspacesResponse,
  FetchGitAheadBehindProjectsLocationsRepositoriesWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: FetchGitAheadBehindProjectsLocationsRepositoriesWorkspacesRequest,
  output: FetchGitAheadBehindProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden],
}));

export interface WriteFileProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  workspace: string;
  /** Request body */
  body?: WriteFileRequest;
}

export const WriteFileProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ Schema.Struct({
    workspace: Schema.String.pipe(T.HttpPath("workspace")),
    body: Schema.optional(WriteFileRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+workspace}:writeFile",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<WriteFileProjectsLocationsRepositoriesWorkspacesRequest>;

export type WriteFileProjectsLocationsRepositoriesWorkspacesResponse =
  WriteFileResponse;
export const WriteFileProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ WriteFileResponse;

export type WriteFileProjectsLocationsRepositoriesWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Writes to a file (inside a Workspace). */
export const writeFileProjectsLocationsRepositoriesWorkspaces: API.OperationMethod<
  WriteFileProjectsLocationsRepositoriesWorkspacesRequest,
  WriteFileProjectsLocationsRepositoriesWorkspacesResponse,
  WriteFileProjectsLocationsRepositoriesWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: WriteFileProjectsLocationsRepositoriesWorkspacesRequest,
  output: WriteFileProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace resource's name. */
  name: string;
}

export const DeleteProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsRepositoriesWorkspacesRequest>;

export type DeleteProjectsLocationsRepositoriesWorkspacesResponse = Empty;
export const DeleteProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ Empty;

export type DeleteProjectsLocationsRepositoriesWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Workspace. */
export const deleteProjectsLocationsRepositoriesWorkspaces: API.OperationMethod<
  DeleteProjectsLocationsRepositoriesWorkspacesRequest,
  DeleteProjectsLocationsRepositoriesWorkspacesResponse,
  DeleteProjectsLocationsRepositoriesWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRepositoriesWorkspacesRequest,
  output: DeleteProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReadFileProjectsLocationsRepositoriesWorkspacesRequest {
  /** Optional. The Git revision of the file to return. If left empty, the current contents of `path` will be returned. */
  revision?: string;
  /** Required. The file's full path including filename, relative to the workspace root. */
  path?: string;
  /** Required. The workspace's name. */
  workspace: string;
}

export const ReadFileProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ Schema.Struct({
    revision: Schema.optional(Schema.String).pipe(T.HttpQuery("revision")),
    path: Schema.optional(Schema.String).pipe(T.HttpQuery("path")),
    workspace: Schema.String.pipe(T.HttpPath("workspace")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+workspace}:readFile" }),
    svc,
  ) as unknown as Schema.Codec<ReadFileProjectsLocationsRepositoriesWorkspacesRequest>;

export type ReadFileProjectsLocationsRepositoriesWorkspacesResponse =
  ReadFileResponse;
export const ReadFileProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ ReadFileResponse;

export type ReadFileProjectsLocationsRepositoriesWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the contents of a file (inside a Workspace). */
export const readFileProjectsLocationsRepositoriesWorkspaces: API.OperationMethod<
  ReadFileProjectsLocationsRepositoriesWorkspacesRequest,
  ReadFileProjectsLocationsRepositoriesWorkspacesResponse,
  ReadFileProjectsLocationsRepositoriesWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ReadFileProjectsLocationsRepositoriesWorkspacesRequest,
  output: ReadFileProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsRepositoriesWorkspacesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<TestIamPermissionsProjectsLocationsRepositoriesWorkspacesRequest>;

export type TestIamPermissionsProjectsLocationsRepositoriesWorkspacesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsRepositoriesWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsRepositoriesWorkspaces: API.OperationMethod<
  TestIamPermissionsProjectsLocationsRepositoriesWorkspacesRequest,
  TestIamPermissionsProjectsLocationsRepositoriesWorkspacesResponse,
  TestIamPermissionsProjectsLocationsRepositoriesWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsRepositoriesWorkspacesRequest,
  output: TestIamPermissionsProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MoveDirectoryProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  workspace: string;
  /** Request body */
  body?: MoveDirectoryRequest;
}

export const MoveDirectoryProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ Schema.Struct({
    workspace: Schema.String.pipe(T.HttpPath("workspace")),
    body: Schema.optional(MoveDirectoryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+workspace}:moveDirectory",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<MoveDirectoryProjectsLocationsRepositoriesWorkspacesRequest>;

export type MoveDirectoryProjectsLocationsRepositoriesWorkspacesResponse =
  MoveDirectoryResponse;
export const MoveDirectoryProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ MoveDirectoryResponse;

export type MoveDirectoryProjectsLocationsRepositoriesWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Moves a directory (inside a Workspace), and all of its contents, to a new location. */
export const moveDirectoryProjectsLocationsRepositoriesWorkspaces: API.OperationMethod<
  MoveDirectoryProjectsLocationsRepositoriesWorkspacesRequest,
  MoveDirectoryProjectsLocationsRepositoriesWorkspacesResponse,
  MoveDirectoryProjectsLocationsRepositoriesWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: MoveDirectoryProjectsLocationsRepositoriesWorkspacesRequest,
  output: MoveDirectoryProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PullProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  name: string;
  /** Request body */
  body?: PullGitCommitsRequest;
}

export const PullProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(PullGitCommitsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:pull", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PullProjectsLocationsRepositoriesWorkspacesRequest>;

export type PullProjectsLocationsRepositoriesWorkspacesResponse =
  PullGitCommitsResponse;
export const PullProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ PullGitCommitsResponse;

export type PullProjectsLocationsRepositoriesWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Pulls Git commits from the Repository's remote into a Workspace. */
export const pullProjectsLocationsRepositoriesWorkspaces: API.OperationMethod<
  PullProjectsLocationsRepositoriesWorkspacesRequest,
  PullProjectsLocationsRepositoriesWorkspacesResponse,
  PullProjectsLocationsRepositoriesWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PullProjectsLocationsRepositoriesWorkspacesRequest,
  output: PullProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SearchFilesProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  workspace: string;
  /** Optional. Maximum number of search results to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Page token received from a previous `SearchFilesRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchFilesRequest`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Optional filter for the returned list in filtering format. Filtering is only currently supported on the `path` field. See https://google.aip.dev/160 for details. */
  filter?: string;
}

export const SearchFilesProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ Schema.Struct({
    workspace: Schema.String.pipe(T.HttpPath("workspace")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+workspace}:searchFiles" }),
    svc,
  ) as unknown as Schema.Codec<SearchFilesProjectsLocationsRepositoriesWorkspacesRequest>;

export type SearchFilesProjectsLocationsRepositoriesWorkspacesResponse =
  SearchFilesResponse;
export const SearchFilesProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ SearchFilesResponse;

export type SearchFilesProjectsLocationsRepositoriesWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Finds the contents of a given Workspace directory by filter. */
export const searchFilesProjectsLocationsRepositoriesWorkspaces: API.PaginatedOperationMethod<
  SearchFilesProjectsLocationsRepositoriesWorkspacesRequest,
  SearchFilesProjectsLocationsRepositoriesWorkspacesResponse,
  SearchFilesProjectsLocationsRepositoriesWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SearchFilesProjectsLocationsRepositoriesWorkspacesRequest,
  output: SearchFilesProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface RemoveFileProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  workspace: string;
  /** Request body */
  body?: RemoveFileRequest;
}

export const RemoveFileProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ Schema.Struct({
    workspace: Schema.String.pipe(T.HttpPath("workspace")),
    body: Schema.optional(RemoveFileRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+workspace}:removeFile",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<RemoveFileProjectsLocationsRepositoriesWorkspacesRequest>;

export type RemoveFileProjectsLocationsRepositoriesWorkspacesResponse =
  RemoveFileResponse;
export const RemoveFileProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ RemoveFileResponse;

export type RemoveFileProjectsLocationsRepositoriesWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a file (inside a Workspace). */
export const removeFileProjectsLocationsRepositoriesWorkspaces: API.OperationMethod<
  RemoveFileProjectsLocationsRepositoriesWorkspacesRequest,
  RemoveFileProjectsLocationsRepositoriesWorkspacesResponse,
  RemoveFileProjectsLocationsRepositoriesWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveFileProjectsLocationsRepositoriesWorkspacesRequest,
  output: RemoveFileProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRepositoriesWorkspacesRequest {
  /** Optional. Page token received from a previous `ListWorkspaces` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkspaces`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filter for the returned list. */
  filter?: string;
  /** Required. The repository in which to list workspaces. Must be in the format `projects/* /locations/* /repositories/*`. */
  parent: string;
  /** Optional. Maximum number of workspaces to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field. */
  orderBy?: string;
}

export const ListProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/workspaces" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsRepositoriesWorkspacesRequest>;

export type ListProjectsLocationsRepositoriesWorkspacesResponse =
  ListWorkspacesResponse;
export const ListProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ ListWorkspacesResponse;

export type ListProjectsLocationsRepositoriesWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Workspaces in a given Repository. */
export const listProjectsLocationsRepositoriesWorkspaces: API.PaginatedOperationMethod<
  ListProjectsLocationsRepositoriesWorkspacesRequest,
  ListProjectsLocationsRepositoriesWorkspacesResponse,
  ListProjectsLocationsRepositoriesWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRepositoriesWorkspacesRequest,
  output: ListProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsRepositoriesWorkspacesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Codec<GetIamPolicyProjectsLocationsRepositoriesWorkspacesRequest>;

export type GetIamPolicyProjectsLocationsRepositoriesWorkspacesResponse =
  Policy;
export const GetIamPolicyProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsRepositoriesWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsRepositoriesWorkspaces: API.OperationMethod<
  GetIamPolicyProjectsLocationsRepositoriesWorkspacesRequest,
  GetIamPolicyProjectsLocationsRepositoriesWorkspacesResponse,
  GetIamPolicyProjectsLocationsRepositoriesWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsRepositoriesWorkspacesRequest,
  output: GetIamPolicyProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsRepositoriesWorkspacesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SetIamPolicyProjectsLocationsRepositoriesWorkspacesRequest>;

export type SetIamPolicyProjectsLocationsRepositoriesWorkspacesResponse =
  Policy;
export const SetIamPolicyProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsRepositoriesWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsRepositoriesWorkspaces: API.OperationMethod<
  SetIamPolicyProjectsLocationsRepositoriesWorkspacesRequest,
  SetIamPolicyProjectsLocationsRepositoriesWorkspacesResponse,
  SetIamPolicyProjectsLocationsRepositoriesWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsRepositoriesWorkspacesRequest,
  output: SetIamPolicyProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MoveFileProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  workspace: string;
  /** Request body */
  body?: MoveFileRequest;
}

export const MoveFileProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ Schema.Struct({
    workspace: Schema.String.pipe(T.HttpPath("workspace")),
    body: Schema.optional(MoveFileRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+workspace}:moveFile", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<MoveFileProjectsLocationsRepositoriesWorkspacesRequest>;

export type MoveFileProjectsLocationsRepositoriesWorkspacesResponse =
  MoveFileResponse;
export const MoveFileProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ MoveFileResponse;

export type MoveFileProjectsLocationsRepositoriesWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Moves a file (inside a Workspace) to a new location. */
export const moveFileProjectsLocationsRepositoriesWorkspaces: API.OperationMethod<
  MoveFileProjectsLocationsRepositoriesWorkspacesRequest,
  MoveFileProjectsLocationsRepositoriesWorkspacesResponse,
  MoveFileProjectsLocationsRepositoriesWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: MoveFileProjectsLocationsRepositoriesWorkspacesRequest,
  output: MoveFileProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsRepositoriesReleaseConfigsRequest {
  /** Required. The repository in which to create the release config. Must be in the format `projects/* /locations/* /repositories/*`. */
  parent: string;
  /** Required. The ID to use for the release config, which will become the final component of the release config's resource name. */
  releaseConfigId?: string;
  /** Request body */
  body?: ReleaseConfig;
}

export const CreateProjectsLocationsRepositoriesReleaseConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    releaseConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("releaseConfigId"),
    ),
    body: Schema.optional(ReleaseConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/releaseConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsRepositoriesReleaseConfigsRequest>;

export type CreateProjectsLocationsRepositoriesReleaseConfigsResponse =
  ReleaseConfig;
export const CreateProjectsLocationsRepositoriesReleaseConfigsResponse =
  /*@__PURE__*/ ReleaseConfig;

export type CreateProjectsLocationsRepositoriesReleaseConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new ReleaseConfig in a given Repository. */
export const createProjectsLocationsRepositoriesReleaseConfigs: API.OperationMethod<
  CreateProjectsLocationsRepositoriesReleaseConfigsRequest,
  CreateProjectsLocationsRepositoriesReleaseConfigsResponse,
  CreateProjectsLocationsRepositoriesReleaseConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsRepositoriesReleaseConfigsRequest,
  output: CreateProjectsLocationsRepositoriesReleaseConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsRepositoriesReleaseConfigsRequest {
  /** Identifier. The release config's name. */
  name: string;
  /** Optional. Specifies the fields to be updated in the release config. If left unset, all fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: ReleaseConfig;
}

export const PatchProjectsLocationsRepositoriesReleaseConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ReleaseConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsRepositoriesReleaseConfigsRequest>;

export type PatchProjectsLocationsRepositoriesReleaseConfigsResponse =
  ReleaseConfig;
export const PatchProjectsLocationsRepositoriesReleaseConfigsResponse =
  /*@__PURE__*/ ReleaseConfig;

export type PatchProjectsLocationsRepositoriesReleaseConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a single ReleaseConfig. **Note:** *This method does not fully implement [AIP/134](https://google.aip.dev/134). The wildcard entry (\*) is treated as a bad request, and when the `field_mask` is omitted, the request is treated as a full update on all modifiable fields.* */
export const patchProjectsLocationsRepositoriesReleaseConfigs: API.OperationMethod<
  PatchProjectsLocationsRepositoriesReleaseConfigsRequest,
  PatchProjectsLocationsRepositoriesReleaseConfigsResponse,
  PatchProjectsLocationsRepositoriesReleaseConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsRepositoriesReleaseConfigsRequest,
  output: PatchProjectsLocationsRepositoriesReleaseConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsRepositoriesReleaseConfigsRequest {
  /** Required. The release config's name. */
  name: string;
}

export const DeleteProjectsLocationsRepositoriesReleaseConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsRepositoriesReleaseConfigsRequest>;

export type DeleteProjectsLocationsRepositoriesReleaseConfigsResponse = Empty;
export const DeleteProjectsLocationsRepositoriesReleaseConfigsResponse =
  /*@__PURE__*/ Empty;

export type DeleteProjectsLocationsRepositoriesReleaseConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single ReleaseConfig. */
export const deleteProjectsLocationsRepositoriesReleaseConfigs: API.OperationMethod<
  DeleteProjectsLocationsRepositoriesReleaseConfigsRequest,
  DeleteProjectsLocationsRepositoriesReleaseConfigsResponse,
  DeleteProjectsLocationsRepositoriesReleaseConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRepositoriesReleaseConfigsRequest,
  output: DeleteProjectsLocationsRepositoriesReleaseConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsRepositoriesReleaseConfigsRequest {
  /** Required. The release config's name. */
  name: string;
}

export const GetProjectsLocationsRepositoriesReleaseConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsRepositoriesReleaseConfigsRequest>;

export type GetProjectsLocationsRepositoriesReleaseConfigsResponse =
  ReleaseConfig;
export const GetProjectsLocationsRepositoriesReleaseConfigsResponse =
  /*@__PURE__*/ ReleaseConfig;

export type GetProjectsLocationsRepositoriesReleaseConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetches a single ReleaseConfig. */
export const getProjectsLocationsRepositoriesReleaseConfigs: API.OperationMethod<
  GetProjectsLocationsRepositoriesReleaseConfigsRequest,
  GetProjectsLocationsRepositoriesReleaseConfigsResponse,
  GetProjectsLocationsRepositoriesReleaseConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRepositoriesReleaseConfigsRequest,
  output: GetProjectsLocationsRepositoriesReleaseConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsRepositoriesReleaseConfigsRequest {
  /** Required. The repository in which to list release configs. Must be in the format `projects/* /locations/* /repositories/*`. */
  parent: string;
  /** Optional. Maximum number of release configs to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Page token received from a previous `ListReleaseConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReleaseConfigs`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsRepositoriesReleaseConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/releaseConfigs" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsRepositoriesReleaseConfigsRequest>;

export type ListProjectsLocationsRepositoriesReleaseConfigsResponse =
  ListReleaseConfigsResponse;
export const ListProjectsLocationsRepositoriesReleaseConfigsResponse =
  /*@__PURE__*/ ListReleaseConfigsResponse;

export type ListProjectsLocationsRepositoriesReleaseConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists ReleaseConfigs in a given Repository. */
export const listProjectsLocationsRepositoriesReleaseConfigs: API.PaginatedOperationMethod<
  ListProjectsLocationsRepositoriesReleaseConfigsRequest,
  ListProjectsLocationsRepositoriesReleaseConfigsResponse,
  ListProjectsLocationsRepositoriesReleaseConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRepositoriesReleaseConfigsRequest,
  output: ListProjectsLocationsRepositoriesReleaseConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface QueryProjectsLocationsRepositoriesWorkflowInvocationsRequest {
  /** Optional. Maximum number of workflow invocations to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Required. The workflow invocation's name. */
  name: string;
  /** Optional. Page token received from a previous `QueryWorkflowInvocationActions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryWorkflowInvocationActions`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
}

export const QueryProjectsLocationsRepositoriesWorkflowInvocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:query" }),
    svc,
  ) as unknown as Schema.Codec<QueryProjectsLocationsRepositoriesWorkflowInvocationsRequest>;

export type QueryProjectsLocationsRepositoriesWorkflowInvocationsResponse =
  QueryWorkflowInvocationActionsResponse;
export const QueryProjectsLocationsRepositoriesWorkflowInvocationsResponse =
  /*@__PURE__*/ QueryWorkflowInvocationActionsResponse;

export type QueryProjectsLocationsRepositoriesWorkflowInvocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns WorkflowInvocationActions in a given WorkflowInvocation. */
export const queryProjectsLocationsRepositoriesWorkflowInvocations: API.PaginatedOperationMethod<
  QueryProjectsLocationsRepositoriesWorkflowInvocationsRequest,
  QueryProjectsLocationsRepositoriesWorkflowInvocationsResponse,
  QueryProjectsLocationsRepositoriesWorkflowInvocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: QueryProjectsLocationsRepositoriesWorkflowInvocationsRequest,
  output: QueryProjectsLocationsRepositoriesWorkflowInvocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsRepositoriesWorkflowInvocationsRequest {
  /** Required. The repository in which to create the workflow invocation. Must be in the format `projects/* /locations/* /repositories/*`. */
  parent: string;
  /** Request body */
  body?: WorkflowInvocation;
}

export const CreateProjectsLocationsRepositoriesWorkflowInvocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(WorkflowInvocation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/workflowInvocations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsRepositoriesWorkflowInvocationsRequest>;

export type CreateProjectsLocationsRepositoriesWorkflowInvocationsResponse =
  WorkflowInvocation;
export const CreateProjectsLocationsRepositoriesWorkflowInvocationsResponse =
  /*@__PURE__*/ WorkflowInvocation;

export type CreateProjectsLocationsRepositoriesWorkflowInvocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new WorkflowInvocation in a given Repository. */
export const createProjectsLocationsRepositoriesWorkflowInvocations: API.OperationMethod<
  CreateProjectsLocationsRepositoriesWorkflowInvocationsRequest,
  CreateProjectsLocationsRepositoriesWorkflowInvocationsResponse,
  CreateProjectsLocationsRepositoriesWorkflowInvocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsRepositoriesWorkflowInvocationsRequest,
  output: CreateProjectsLocationsRepositoriesWorkflowInvocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsRepositoriesWorkflowInvocationsRequest {
  /** Required. The workflow invocation resource's name. */
  name: string;
}

export const DeleteProjectsLocationsRepositoriesWorkflowInvocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsRepositoriesWorkflowInvocationsRequest>;

export type DeleteProjectsLocationsRepositoriesWorkflowInvocationsResponse =
  Empty;
export const DeleteProjectsLocationsRepositoriesWorkflowInvocationsResponse =
  /*@__PURE__*/ Empty;

export type DeleteProjectsLocationsRepositoriesWorkflowInvocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single WorkflowInvocation. */
export const deleteProjectsLocationsRepositoriesWorkflowInvocations: API.OperationMethod<
  DeleteProjectsLocationsRepositoriesWorkflowInvocationsRequest,
  DeleteProjectsLocationsRepositoriesWorkflowInvocationsResponse,
  DeleteProjectsLocationsRepositoriesWorkflowInvocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRepositoriesWorkflowInvocationsRequest,
  output: DeleteProjectsLocationsRepositoriesWorkflowInvocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsRepositoriesWorkflowInvocationsRequest {
  /** Required. The workflow invocation resource's name. */
  name: string;
}

export const GetProjectsLocationsRepositoriesWorkflowInvocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsRepositoriesWorkflowInvocationsRequest>;

export type GetProjectsLocationsRepositoriesWorkflowInvocationsResponse =
  WorkflowInvocation;
export const GetProjectsLocationsRepositoriesWorkflowInvocationsResponse =
  /*@__PURE__*/ WorkflowInvocation;

export type GetProjectsLocationsRepositoriesWorkflowInvocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetches a single WorkflowInvocation. */
export const getProjectsLocationsRepositoriesWorkflowInvocations: API.OperationMethod<
  GetProjectsLocationsRepositoriesWorkflowInvocationsRequest,
  GetProjectsLocationsRepositoriesWorkflowInvocationsResponse,
  GetProjectsLocationsRepositoriesWorkflowInvocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRepositoriesWorkflowInvocationsRequest,
  output: GetProjectsLocationsRepositoriesWorkflowInvocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsRepositoriesWorkflowInvocationsRequest {
  /** Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field. */
  orderBy?: string;
  /** Required. The parent resource of the WorkflowInvocation type. Must be in the format `projects/* /locations/* /repositories/*`. */
  parent: string;
  /** Optional. Maximum number of workflow invocations to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Page token received from a previous `ListWorkflowInvocations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkflowInvocations`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filter for the returned list. */
  filter?: string;
}

export const ListProjectsLocationsRepositoriesWorkflowInvocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/workflowInvocations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsRepositoriesWorkflowInvocationsRequest>;

export type ListProjectsLocationsRepositoriesWorkflowInvocationsResponse =
  ListWorkflowInvocationsResponse;
export const ListProjectsLocationsRepositoriesWorkflowInvocationsResponse =
  /*@__PURE__*/ ListWorkflowInvocationsResponse;

export type ListProjectsLocationsRepositoriesWorkflowInvocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists WorkflowInvocations in a given Repository. */
export const listProjectsLocationsRepositoriesWorkflowInvocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRepositoriesWorkflowInvocationsRequest,
  ListProjectsLocationsRepositoriesWorkflowInvocationsResponse,
  ListProjectsLocationsRepositoriesWorkflowInvocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRepositoriesWorkflowInvocationsRequest,
  output: ListProjectsLocationsRepositoriesWorkflowInvocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CancelProjectsLocationsRepositoriesWorkflowInvocationsRequest {
  /** Required. The workflow invocation resource's name. */
  name: string;
  /** Request body */
  body?: CancelWorkflowInvocationRequest;
}

export const CancelProjectsLocationsRepositoriesWorkflowInvocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelWorkflowInvocationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CancelProjectsLocationsRepositoriesWorkflowInvocationsRequest>;

export type CancelProjectsLocationsRepositoriesWorkflowInvocationsResponse =
  CancelWorkflowInvocationResponse;
export const CancelProjectsLocationsRepositoriesWorkflowInvocationsResponse =
  /*@__PURE__*/ CancelWorkflowInvocationResponse;

export type CancelProjectsLocationsRepositoriesWorkflowInvocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Requests cancellation of a running WorkflowInvocation. */
export const cancelProjectsLocationsRepositoriesWorkflowInvocations: API.OperationMethod<
  CancelProjectsLocationsRepositoriesWorkflowInvocationsRequest,
  CancelProjectsLocationsRepositoriesWorkflowInvocationsResponse,
  CancelProjectsLocationsRepositoriesWorkflowInvocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsRepositoriesWorkflowInvocationsRequest,
  output: CancelProjectsLocationsRepositoriesWorkflowInvocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsRepositoriesWorkflowConfigsRequest {
  /** Required. The repository in which to create the workflow config. Must be in the format `projects/* /locations/* /repositories/*`. */
  parent: string;
  /** Required. The ID to use for the workflow config, which will become the final component of the workflow config's resource name. */
  workflowConfigId?: string;
  /** Request body */
  body?: WorkflowConfig;
}

export const CreateProjectsLocationsRepositoriesWorkflowConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    workflowConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("workflowConfigId"),
    ),
    body: Schema.optional(WorkflowConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/workflowConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsRepositoriesWorkflowConfigsRequest>;

export type CreateProjectsLocationsRepositoriesWorkflowConfigsResponse =
  WorkflowConfig;
export const CreateProjectsLocationsRepositoriesWorkflowConfigsResponse =
  /*@__PURE__*/ WorkflowConfig;

export type CreateProjectsLocationsRepositoriesWorkflowConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new WorkflowConfig in a given Repository. */
export const createProjectsLocationsRepositoriesWorkflowConfigs: API.OperationMethod<
  CreateProjectsLocationsRepositoriesWorkflowConfigsRequest,
  CreateProjectsLocationsRepositoriesWorkflowConfigsResponse,
  CreateProjectsLocationsRepositoriesWorkflowConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsRepositoriesWorkflowConfigsRequest,
  output: CreateProjectsLocationsRepositoriesWorkflowConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsRepositoriesWorkflowConfigsRequest {
  /** Identifier. The workflow config's name. */
  name: string;
  /** Optional. Specifies the fields to be updated in the workflow config. If left unset, all fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: WorkflowConfig;
}

export const PatchProjectsLocationsRepositoriesWorkflowConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(WorkflowConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsRepositoriesWorkflowConfigsRequest>;

export type PatchProjectsLocationsRepositoriesWorkflowConfigsResponse =
  WorkflowConfig;
export const PatchProjectsLocationsRepositoriesWorkflowConfigsResponse =
  /*@__PURE__*/ WorkflowConfig;

export type PatchProjectsLocationsRepositoriesWorkflowConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a single WorkflowConfig. **Note:** *This method does not fully implement [AIP/134](https://google.aip.dev/134). The wildcard entry (\*) is treated as a bad request, and when the `field_mask` is omitted, the request is treated as a full update on all modifiable fields.* */
export const patchProjectsLocationsRepositoriesWorkflowConfigs: API.OperationMethod<
  PatchProjectsLocationsRepositoriesWorkflowConfigsRequest,
  PatchProjectsLocationsRepositoriesWorkflowConfigsResponse,
  PatchProjectsLocationsRepositoriesWorkflowConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsRepositoriesWorkflowConfigsRequest,
  output: PatchProjectsLocationsRepositoriesWorkflowConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsRepositoriesWorkflowConfigsRequest {
  /** Required. The workflow config's name. */
  name: string;
}

export const DeleteProjectsLocationsRepositoriesWorkflowConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsRepositoriesWorkflowConfigsRequest>;

export type DeleteProjectsLocationsRepositoriesWorkflowConfigsResponse = Empty;
export const DeleteProjectsLocationsRepositoriesWorkflowConfigsResponse =
  /*@__PURE__*/ Empty;

export type DeleteProjectsLocationsRepositoriesWorkflowConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single WorkflowConfig. */
export const deleteProjectsLocationsRepositoriesWorkflowConfigs: API.OperationMethod<
  DeleteProjectsLocationsRepositoriesWorkflowConfigsRequest,
  DeleteProjectsLocationsRepositoriesWorkflowConfigsResponse,
  DeleteProjectsLocationsRepositoriesWorkflowConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRepositoriesWorkflowConfigsRequest,
  output: DeleteProjectsLocationsRepositoriesWorkflowConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsRepositoriesWorkflowConfigsRequest {
  /** Required. The workflow config's name. */
  name: string;
}

export const GetProjectsLocationsRepositoriesWorkflowConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsRepositoriesWorkflowConfigsRequest>;

export type GetProjectsLocationsRepositoriesWorkflowConfigsResponse =
  WorkflowConfig;
export const GetProjectsLocationsRepositoriesWorkflowConfigsResponse =
  /*@__PURE__*/ WorkflowConfig;

export type GetProjectsLocationsRepositoriesWorkflowConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetches a single WorkflowConfig. */
export const getProjectsLocationsRepositoriesWorkflowConfigs: API.OperationMethod<
  GetProjectsLocationsRepositoriesWorkflowConfigsRequest,
  GetProjectsLocationsRepositoriesWorkflowConfigsResponse,
  GetProjectsLocationsRepositoriesWorkflowConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRepositoriesWorkflowConfigsRequest,
  output: GetProjectsLocationsRepositoriesWorkflowConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsRepositoriesWorkflowConfigsRequest {
  /** Required. The repository in which to list workflow configs. Must be in the format `projects/* /locations/* /repositories/*`. */
  parent: string;
  /** Optional. Maximum number of workflow configs to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Page token received from a previous `ListWorkflowConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkflowConfigs`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsRepositoriesWorkflowConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/workflowConfigs" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsRepositoriesWorkflowConfigsRequest>;

export type ListProjectsLocationsRepositoriesWorkflowConfigsResponse =
  ListWorkflowConfigsResponse;
export const ListProjectsLocationsRepositoriesWorkflowConfigsResponse =
  /*@__PURE__*/ ListWorkflowConfigsResponse;

export type ListProjectsLocationsRepositoriesWorkflowConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists WorkflowConfigs in a given Repository. */
export const listProjectsLocationsRepositoriesWorkflowConfigs: API.PaginatedOperationMethod<
  ListProjectsLocationsRepositoriesWorkflowConfigsRequest,
  ListProjectsLocationsRepositoriesWorkflowConfigsResponse,
  ListProjectsLocationsRepositoriesWorkflowConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRepositoriesWorkflowConfigsRequest,
  output: ListProjectsLocationsRepositoriesWorkflowConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface QueryProjectsLocationsRepositoriesCompilationResultsRequest {
  /** Required. The compilation result's name. */
  name: string;
  /** Optional. Page token received from a previous `QueryCompilationResultActions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryCompilationResultActions`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Optional filter for the returned list. Filtering is only currently supported on the `file_path` field. */
  filter?: string;
  /** Optional. Maximum number of compilation results to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
}

export const QueryProjectsLocationsRepositoriesCompilationResultsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:query" }),
    svc,
  ) as unknown as Schema.Codec<QueryProjectsLocationsRepositoriesCompilationResultsRequest>;

export type QueryProjectsLocationsRepositoriesCompilationResultsResponse =
  QueryCompilationResultActionsResponse;
export const QueryProjectsLocationsRepositoriesCompilationResultsResponse =
  /*@__PURE__*/ QueryCompilationResultActionsResponse;

export type QueryProjectsLocationsRepositoriesCompilationResultsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns CompilationResultActions in a given CompilationResult. */
export const queryProjectsLocationsRepositoriesCompilationResults: API.PaginatedOperationMethod<
  QueryProjectsLocationsRepositoriesCompilationResultsRequest,
  QueryProjectsLocationsRepositoriesCompilationResultsResponse,
  QueryProjectsLocationsRepositoriesCompilationResultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: QueryProjectsLocationsRepositoriesCompilationResultsRequest,
  output: QueryProjectsLocationsRepositoriesCompilationResultsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsRepositoriesCompilationResultsRequest {
  /** Optional. This field only supports ordering by `name` and `create_time`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field. */
  orderBy?: string;
  /** Required. The repository in which to list compilation results. Must be in the format `projects/* /locations/* /repositories/*`. */
  parent: string;
  /** Optional. Maximum number of compilation results to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Page token received from a previous `ListCompilationResults` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCompilationResults`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filter for the returned list. */
  filter?: string;
}

export const ListProjectsLocationsRepositoriesCompilationResultsRequest =
  /*@__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/compilationResults" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsRepositoriesCompilationResultsRequest>;

export type ListProjectsLocationsRepositoriesCompilationResultsResponse =
  ListCompilationResultsResponse;
export const ListProjectsLocationsRepositoriesCompilationResultsResponse =
  /*@__PURE__*/ ListCompilationResultsResponse;

export type ListProjectsLocationsRepositoriesCompilationResultsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists CompilationResults in a given Repository. */
export const listProjectsLocationsRepositoriesCompilationResults: API.PaginatedOperationMethod<
  ListProjectsLocationsRepositoriesCompilationResultsRequest,
  ListProjectsLocationsRepositoriesCompilationResultsResponse,
  ListProjectsLocationsRepositoriesCompilationResultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRepositoriesCompilationResultsRequest,
  output: ListProjectsLocationsRepositoriesCompilationResultsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsRepositoriesCompilationResultsRequest {
  /** Required. The compilation result's name. */
  name: string;
}

export const GetProjectsLocationsRepositoriesCompilationResultsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsRepositoriesCompilationResultsRequest>;

export type GetProjectsLocationsRepositoriesCompilationResultsResponse =
  CompilationResult;
export const GetProjectsLocationsRepositoriesCompilationResultsResponse =
  /*@__PURE__*/ CompilationResult;

export type GetProjectsLocationsRepositoriesCompilationResultsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetches a single CompilationResult. */
export const getProjectsLocationsRepositoriesCompilationResults: API.OperationMethod<
  GetProjectsLocationsRepositoriesCompilationResultsRequest,
  GetProjectsLocationsRepositoriesCompilationResultsResponse,
  GetProjectsLocationsRepositoriesCompilationResultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRepositoriesCompilationResultsRequest,
  output: GetProjectsLocationsRepositoriesCompilationResultsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsRepositoriesCompilationResultsRequest {
  /** Required. The repository in which to create the compilation result. Must be in the format `projects/* /locations/* /repositories/*`. */
  parent: string;
  /** Request body */
  body?: CompilationResult;
}

export const CreateProjectsLocationsRepositoriesCompilationResultsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(CompilationResult).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/compilationResults",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsRepositoriesCompilationResultsRequest>;

export type CreateProjectsLocationsRepositoriesCompilationResultsResponse =
  CompilationResult;
export const CreateProjectsLocationsRepositoriesCompilationResultsResponse =
  /*@__PURE__*/ CompilationResult;

export type CreateProjectsLocationsRepositoriesCompilationResultsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new CompilationResult in a given project and location. */
export const createProjectsLocationsRepositoriesCompilationResults: API.OperationMethod<
  CreateProjectsLocationsRepositoriesCompilationResultsRequest,
  CreateProjectsLocationsRepositoriesCompilationResultsResponse,
  CreateProjectsLocationsRepositoriesCompilationResultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsRepositoriesCompilationResultsRequest,
  output: CreateProjectsLocationsRepositoriesCompilationResultsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
