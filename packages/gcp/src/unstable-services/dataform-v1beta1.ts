// ==========================================================================
// Dataform API (dataform v1beta1)
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
  name: "dataform",
  version: "v1beta1",
  rootUrl: "https://dataform.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface MoveDirectoryRequest {
  /** Required. The directory's full path including directory name, relative to the workspace root. */
  path?: string;
  /** Required. The new path for the directory including directory name, rooted at workspace root. */
  newPath?: string;
}

export const MoveDirectoryRequest: Schema.Schema<MoveDirectoryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    newPath: Schema.optional(Schema.String),
  }).annotate({ identifier: "MoveDirectoryRequest" });

export interface IncrementalTableConfig {
  /** A set of columns or SQL expressions used to define row uniqueness. If any duplicates are discovered (as defined by `unique_key_parts`), only the newly selected rows (as defined by `incremental_select_query`) will be included in the relation. */
  uniqueKeyParts?: ReadonlyArray<string>;
  /** SQL statements to be executed before inserting new rows into the relation. */
  incrementalPreOperations?: ReadonlyArray<string>;
  /** Whether this table should be protected from being refreshed. */
  refreshDisabled?: boolean;
  /** A SQL expression conditional used to limit the set of existing rows considered for a merge operation (see `unique_key_parts` for more information). */
  updatePartitionFilter?: string;
  /** SQL statements to be executed after inserting new rows into the relation. */
  incrementalPostOperations?: ReadonlyArray<string>;
  /** The SELECT query which returns rows which should be inserted into the relation if it already exists and is not being refreshed. */
  incrementalSelectQuery?: string;
}

export const IncrementalTableConfig: Schema.Schema<IncrementalTableConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uniqueKeyParts: Schema.optional(Schema.Array(Schema.String)),
    incrementalPreOperations: Schema.optional(Schema.Array(Schema.String)),
    refreshDisabled: Schema.optional(Schema.Boolean),
    updatePartitionFilter: Schema.optional(Schema.String),
    incrementalPostOperations: Schema.optional(Schema.Array(Schema.String)),
    incrementalSelectQuery: Schema.optional(Schema.String),
  }).annotate({ identifier: "IncrementalTableConfig" });

export interface CancelWorkflowInvocationResponse {}

export const CancelWorkflowInvocationResponse: Schema.Schema<CancelWorkflowInvocationResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelWorkflowInvocationResponse",
  });

export interface Target {
  /** Optional. The action's database (Google Cloud project ID) . */
  database?: string;
  /** Optional. The action's schema (BigQuery dataset ID), within `database`. */
  schema?: string;
  /** Optional. The action's name, within `database` and `schema`. */
  name?: string;
}

export const Target: Schema.Schema<Target> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    database: Schema.optional(Schema.String),
    schema: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Target" });

export interface ErrorTable {
  /** Error Table target. */
  target?: Target;
  /** Error table partition expiration in days. Only positive values are allowed. */
  retentionDays?: number;
}

export const ErrorTable: Schema.Schema<ErrorTable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    target: Schema.optional(Target),
    retentionDays: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ErrorTable" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface ScheduledReleaseRecord {
  /** The name of the created compilation result, if one was successfully created. Must be in the format `projects/* /locations/* /repositories/* /compilationResults/*`. */
  compilationResult?: string;
  /** The error status encountered upon this attempt to create the compilation result, if the attempt was unsuccessful. */
  errorStatus?: Status;
  /** Output only. The timestamp of this release attempt. */
  releaseTime?: string;
}

export const ScheduledReleaseRecord: Schema.Schema<ScheduledReleaseRecord> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    compilationResult: Schema.optional(Schema.String),
    errorStatus: Schema.optional(Status),
    releaseTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ScheduledReleaseRecord" });

export interface ColumnDescriptor {
  /** The identifier for the column. Each entry in `path` represents one level of nesting. */
  path?: ReadonlyArray<string>;
  /** A textual description of the column. */
  description?: string;
  /** A list of BigQuery policy tags that will be applied to the column. */
  bigqueryPolicyTags?: ReadonlyArray<string>;
}

export const ColumnDescriptor: Schema.Schema<ColumnDescriptor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.Array(Schema.String)),
    description: Schema.optional(Schema.String),
    bigqueryPolicyTags: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ColumnDescriptor" });

export interface RelationDescriptor {
  /** A list of descriptions of columns within the relation. */
  columns?: ReadonlyArray<ColumnDescriptor>;
  /** A set of BigQuery labels that should be applied to the relation. */
  bigqueryLabels?: Record<string, string>;
  /** A text description of the relation. */
  description?: string;
}

export const RelationDescriptor: Schema.Schema<RelationDescriptor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    columns: Schema.optional(Schema.Array(ColumnDescriptor)),
    bigqueryLabels: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "RelationDescriptor" });

export interface Operations {
  /** Whether this action is disabled (i.e. should not be run). */
  disabled?: boolean;
  /** Arbitrary, user-defined tags on this action. */
  tags?: ReadonlyArray<string>;
  /** A list of arbitrary SQL statements that will be executed without alteration. */
  queries?: ReadonlyArray<string>;
  /** Whether these operations produce an output relation. */
  hasOutput?: boolean;
  /** A list of actions that this action depends on. */
  dependencyTargets?: ReadonlyArray<Target>;
  /** Descriptor for any output relation and its columns. Only set if `has_output` is true. */
  relationDescriptor?: RelationDescriptor;
}

export const Operations: Schema.Schema<Operations> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disabled: Schema.optional(Schema.Boolean),
    tags: Schema.optional(Schema.Array(Schema.String)),
    queries: Schema.optional(Schema.Array(Schema.String)),
    hasOutput: Schema.optional(Schema.Boolean),
    dependencyTargets: Schema.optional(Schema.Array(Target)),
    relationDescriptor: Schema.optional(RelationDescriptor),
  }).annotate({ identifier: "Operations" });

export interface Relation {
  /** Specifies whether queries on this table must include a predicate filter that filters on the partitioning column. */
  requirePartitionFilter?: boolean;
  /** SQL statements to be executed before creating the relation. */
  preOperations?: ReadonlyArray<string>;
  /** Configures `INCREMENTAL_TABLE` settings for this relation. Only set if `relation_type` is `INCREMENTAL_TABLE`. */
  incrementalTableConfig?: IncrementalTableConfig;
  /** Optional. The table format for the BigQuery table. */
  tableFormat?: "TABLE_FORMAT_UNSPECIFIED" | "ICEBERG" | (string & {});
  /** Descriptor for the relation and its columns. */
  relationDescriptor?: RelationDescriptor;
  /** Whether this action is disabled (i.e. should not be run). */
  disabled?: boolean;
  /** Optional. The connection specifying the credentials to be used to read and write to external storage, such as Cloud Storage. The connection can have the form `{project}.{location}.{connection_id}` or `projects/{project}/locations/{location}/connections/{connection_id}`, or be set to DEFAULT. */
  connection?: string;
  /** The SELECT query which returns rows which this relation should contain. */
  selectQuery?: string;
  /** SQL statements to be executed after creating the relation. */
  postOperations?: ReadonlyArray<string>;
  /** A list of actions that this action depends on. */
  dependencyTargets?: ReadonlyArray<Target>;
  /** Additional options that will be provided as key/value pairs into the options clause of a create table/view statement. See https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language for more information on which options are supported. */
  additionalOptions?: Record<string, string>;
  /** Optional. The fully qualified location prefix of the external folder where table data is stored. The URI should be in the format `gs://bucket/path_to_table/`. */
  storageUri?: string;
  /** Arbitrary, user-defined tags on this action. */
  tags?: ReadonlyArray<string>;
  /** A list of columns or SQL expressions used to cluster the table. */
  clusterExpressions?: ReadonlyArray<string>;
  /** Optional. The file format for the BigQuery table. */
  fileFormat?: "FILE_FORMAT_UNSPECIFIED" | "PARQUET" | (string & {});
  /** Sets the partition expiration in days. */
  partitionExpirationDays?: number;
  /** The type of this relation. */
  relationType?:
    | "RELATION_TYPE_UNSPECIFIED"
    | "TABLE"
    | "VIEW"
    | "INCREMENTAL_TABLE"
    | "MATERIALIZED_VIEW"
    | (string & {});
  /** The SQL expression used to partition the relation. */
  partitionExpression?: string;
}

export const Relation: Schema.Schema<Relation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requirePartitionFilter: Schema.optional(Schema.Boolean),
    preOperations: Schema.optional(Schema.Array(Schema.String)),
    incrementalTableConfig: Schema.optional(IncrementalTableConfig),
    tableFormat: Schema.optional(Schema.String),
    relationDescriptor: Schema.optional(RelationDescriptor),
    disabled: Schema.optional(Schema.Boolean),
    connection: Schema.optional(Schema.String),
    selectQuery: Schema.optional(Schema.String),
    postOperations: Schema.optional(Schema.Array(Schema.String)),
    dependencyTargets: Schema.optional(Schema.Array(Target)),
    additionalOptions: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    storageUri: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
    clusterExpressions: Schema.optional(Schema.Array(Schema.String)),
    fileFormat: Schema.optional(Schema.String),
    partitionExpirationDays: Schema.optional(Schema.Number),
    relationType: Schema.optional(Schema.String),
    partitionExpression: Schema.optional(Schema.String),
  }).annotate({ identifier: "Relation" });

export interface Assertion {
  /** A list of actions that this action depends on. */
  dependencyTargets?: ReadonlyArray<Target>;
  /** Descriptor for the assertion's automatically-generated view and its columns. */
  relationDescriptor?: RelationDescriptor;
  /** The parent action of this assertion. Only set if this assertion was automatically generated. */
  parentAction?: Target;
  /** The SELECT query which must return zero rows in order for this assertion to succeed. */
  selectQuery?: string;
  /** Whether this action is disabled (i.e. should not be run). */
  disabled?: boolean;
  /** Arbitrary, user-defined tags on this action. */
  tags?: ReadonlyArray<string>;
}

export const Assertion: Schema.Schema<Assertion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dependencyTargets: Schema.optional(Schema.Array(Target)),
    relationDescriptor: Schema.optional(RelationDescriptor),
    parentAction: Schema.optional(Target),
    selectQuery: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
    tags: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Assertion" });

export interface IncrementalLoadMode {
  /** Column name for incremental load modes */
  column?: string;
}

export const IncrementalLoadMode: Schema.Schema<IncrementalLoadMode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    column: Schema.optional(Schema.String),
  }).annotate({ identifier: "IncrementalLoadMode" });

export interface SimpleLoadMode {}

export const SimpleLoadMode: Schema.Schema<SimpleLoadMode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SimpleLoadMode",
  });

export interface LoadConfig {
  /** Insert records where the value of a column is not already present in the destination table */
  unique?: IncrementalLoadMode;
  /** Replace destination table */
  replace?: SimpleLoadMode;
  /** Append into destination table */
  append?: SimpleLoadMode;
  /** Insert records where the value exceeds the previous maximum value for a column in the destination table */
  maximum?: IncrementalLoadMode;
}

export const LoadConfig: Schema.Schema<LoadConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unique: Schema.optional(IncrementalLoadMode),
    replace: Schema.optional(SimpleLoadMode),
    append: Schema.optional(SimpleLoadMode),
    maximum: Schema.optional(IncrementalLoadMode),
  }).annotate({ identifier: "LoadConfig" });

export interface SqlDefinition {
  /** Error table configuration, */
  errorTable?: ErrorTable;
  /** Load configuration. */
  load?: LoadConfig;
  /** The SQL query representing the data preparation steps. Formatted as a Pipe SQL query statement. */
  query?: string;
}

export const SqlDefinition: Schema.Schema<SqlDefinition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorTable: Schema.optional(ErrorTable),
    load: Schema.optional(LoadConfig),
    query: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlDefinition" });

export interface DataPreparation {
  /** The data preparation definition, stored as a YAML string. */
  contentsYaml?: string;
  /** Whether this action is disabled (i.e. should not be run). */
  disabled?: boolean;
  /** Arbitrary, user-defined tags on this action. */
  tags?: ReadonlyArray<string>;
  /** SQL definition for a Data Preparation. Contains a SQL query and additional context information. */
  contentsSql?: SqlDefinition;
  /** A list of actions that this action depends on. */
  dependencyTargets?: ReadonlyArray<Target>;
}

export const DataPreparation: Schema.Schema<DataPreparation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contentsYaml: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
    tags: Schema.optional(Schema.Array(Schema.String)),
    contentsSql: Schema.optional(SqlDefinition),
    dependencyTargets: Schema.optional(Schema.Array(Target)),
  }).annotate({ identifier: "DataPreparation" });

export interface Declaration {
  /** Descriptor for the relation and its columns. Used as documentation only, i.e. values here will result in no changes to the relation's metadata. */
  relationDescriptor?: RelationDescriptor;
}

export const Declaration: Schema.Schema<Declaration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relationDescriptor: Schema.optional(RelationDescriptor),
  }).annotate({ identifier: "Declaration" });

export interface Notebook {
  /** Whether this action is disabled (i.e. should not be run). */
  disabled?: boolean;
  /** Arbitrary, user-defined tags on this action. */
  tags?: ReadonlyArray<string>;
  /** The contents of the notebook. */
  contents?: string;
  /** A list of actions that this action depends on. */
  dependencyTargets?: ReadonlyArray<Target>;
}

export const Notebook: Schema.Schema<Notebook> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disabled: Schema.optional(Schema.Boolean),
    tags: Schema.optional(Schema.Array(Schema.String)),
    contents: Schema.optional(Schema.String),
    dependencyTargets: Schema.optional(Schema.Array(Target)),
  }).annotate({ identifier: "Notebook" });

export interface CompilationResultAction {
  /** The full path including filename in which this action is located, relative to the workspace root. */
  filePath?: string;
  /** The database operations executed by this action. */
  operations?: Operations;
  /** This action's identifier. Unique within the compilation result. */
  target?: Target;
  /** Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string. */
  internalMetadata?: string;
  /** The database relation created/updated by this action. */
  relation?: Relation;
  /** The assertion executed by this action. */
  assertion?: Assertion;
  /** The data preparation executed by this action. */
  dataPreparation?: DataPreparation;
  /** The action's identifier if the project had been compiled without any overrides configured. Unique within the compilation result. */
  canonicalTarget?: Target;
  /** The declaration declared by this action. */
  declaration?: Declaration;
  /** The notebook executed by this action. */
  notebook?: Notebook;
}

export const CompilationResultAction: Schema.Schema<CompilationResultAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filePath: Schema.optional(Schema.String),
    operations: Schema.optional(Operations),
    target: Schema.optional(Target),
    internalMetadata: Schema.optional(Schema.String),
    relation: Schema.optional(Relation),
    assertion: Schema.optional(Assertion),
    dataPreparation: Schema.optional(DataPreparation),
    canonicalTarget: Schema.optional(Target),
    declaration: Schema.optional(Declaration),
    notebook: Schema.optional(Notebook),
  }).annotate({ identifier: "CompilationResultAction" });

export interface MakeDirectoryResponse {}

export const MakeDirectoryResponse: Schema.Schema<MakeDirectoryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MakeDirectoryResponse",
  });

export interface NotebookRuntimeOptions {
  /** Optional. The resource name of the [Colab runtime template] (https://cloud.google.com/colab/docs/runtimes), from which a runtime is created for notebook executions. If not specified, a runtime is created with Colab's default specifications. */
  aiPlatformNotebookRuntimeTemplate?: string;
  /** Optional. The Google Cloud Storage location to upload the result to. Format: `gs://bucket-name`. */
  gcsOutputBucket?: string;
}

export const NotebookRuntimeOptions: Schema.Schema<NotebookRuntimeOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aiPlatformNotebookRuntimeTemplate: Schema.optional(Schema.String),
    gcsOutputBucket: Schema.optional(Schema.String),
  }).annotate({ identifier: "NotebookRuntimeOptions" });

export interface CodeCompilationConfig {
  /** Optional. User-defined variables that are made available to project code during compilation. */
  vars?: Record<string, string>;
  /** Optional. The default notebook runtime options. */
  defaultNotebookRuntimeOptions?: NotebookRuntimeOptions;
  /** Optional. The default BigQuery location to use. Defaults to "US". See the BigQuery docs for a full list of locations: https://cloud.google.com/bigquery/docs/locations. */
  defaultLocation?: string;
  /** Optional. The default schema (BigQuery dataset ID) for assertions. */
  assertionSchema?: string;
  /** Optional. The default database (Google Cloud project ID). */
  defaultDatabase?: string;
  /** Optional. The default schema (BigQuery dataset ID). */
  defaultSchema?: string;
  /** Optional. The suffix that should be appended to all database (Google Cloud project ID) names. */
  databaseSuffix?: string;
  /** Optional. The prefix that should be prepended to all table names. */
  tablePrefix?: string;
  /** Optional. The prefix to prepend to built-in assertion names. */
  builtinAssertionNamePrefix?: string;
  /** Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names. */
  schemaSuffix?: string;
}

export const CodeCompilationConfig: Schema.Schema<CodeCompilationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vars: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    defaultNotebookRuntimeOptions: Schema.optional(NotebookRuntimeOptions),
    defaultLocation: Schema.optional(Schema.String),
    assertionSchema: Schema.optional(Schema.String),
    defaultDatabase: Schema.optional(Schema.String),
    defaultSchema: Schema.optional(Schema.String),
    databaseSuffix: Schema.optional(Schema.String),
    tablePrefix: Schema.optional(Schema.String),
    builtinAssertionNamePrefix: Schema.optional(Schema.String),
    schemaSuffix: Schema.optional(Schema.String),
  }).annotate({ identifier: "CodeCompilationConfig" });

export interface ReleaseConfig {
  /** Identifier. The release config's name. */
  name?: string;
  /** Required. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: `12ade345` - a tag: `tag1` - a branch name: `branch1` */
  gitCommitish?: string;
  /** Optional. The name of the currently released compilation result for this release config. This value is updated when a compilation result is automatically created from this release config (using cron_schedule), or when this resource is updated by API call (perhaps to roll back to an earlier release). The compilation result must have been created using this release config. Must be in the format `projects/* /locations/* /repositories/* /compilationResults/*`. */
  releaseCompilationResult?: string;
  /** Output only. Records of the 10 most recent scheduled release attempts, ordered in descending order of `release_time`. Updated whenever automatic creation of a compilation result is triggered by cron_schedule. */
  recentScheduledReleaseRecords?: ReadonlyArray<ScheduledReleaseRecord>;
  /** Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string. */
  internalMetadata?: string;
  /** Optional. Disables automatic creation of compilation results. */
  disabled?: boolean;
  /** Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC. */
  timeZone?: string;
  /** Optional. If set, fields of `code_compilation_config` override the default compilation settings that are specified in dataform.json. */
  codeCompilationConfig?: CodeCompilationConfig;
  /** Optional. Optional schedule (in cron format) for automatic creation of compilation results. */
  cronSchedule?: string;
}

export const ReleaseConfig: Schema.Schema<ReleaseConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    gitCommitish: Schema.optional(Schema.String),
    releaseCompilationResult: Schema.optional(Schema.String),
    recentScheduledReleaseRecords: Schema.optional(
      Schema.Array(ScheduledReleaseRecord),
    ),
    internalMetadata: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
    timeZone: Schema.optional(Schema.String),
    codeCompilationConfig: Schema.optional(CodeCompilationConfig),
    cronSchedule: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReleaseConfig" });

export interface ListReleaseConfigsResponse {
  /** List of release configs. */
  releaseConfigs?: ReadonlyArray<ReleaseConfig>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Locations which could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListReleaseConfigsResponse: Schema.Schema<ListReleaseConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    releaseConfigs: Schema.optional(Schema.Array(ReleaseConfig)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListReleaseConfigsResponse" });

export interface CommitAuthor {
  /** Required. The commit author's name. */
  name?: string;
  /** Required. The commit author's email address. */
  emailAddress?: string;
}

export const CommitAuthor: Schema.Schema<CommitAuthor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    emailAddress: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommitAuthor" });

export interface CommitWorkspaceChangesRequest {
  /** Required. The commit's author. */
  author?: CommitAuthor;
  /** Optional. The commit's message. */
  commitMessage?: string;
  /** Optional. Full file paths to commit including filename, rooted at workspace root. If left empty, all files will be committed. */
  paths?: ReadonlyArray<string>;
}

export const CommitWorkspaceChangesRequest: Schema.Schema<CommitWorkspaceChangesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    author: Schema.optional(CommitAuthor),
    commitMessage: Schema.optional(Schema.String),
    paths: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CommitWorkspaceChangesRequest" });

export interface Folder {
  /** Identifier. The Folder's name. */
  name?: string;
  /** Optional. The containing Folder resource name. This should take the format: projects/{project}/locations/{location}/folders/{folder}, projects/{project}/locations/{location}/teamFolders/{teamFolder}, or just "" if this is a root Folder. This field can only be updated through MoveFolder. */
  containingFolder?: string;
  /** Output only. The timestamp of when the Folder was created. */
  createTime?: string;
  /** Output only. The IAM principal identifier of the creator of the Folder. */
  creatorIamPrincipal?: string;
  /** Output only. The resource name of the TeamFolder that this Folder is associated with. This should take the format: projects/{project}/locations/{location}/teamFolders/{teamFolder}. If this is not set, the Folder is not associated with a TeamFolder and is a UserFolder. */
  teamFolderName?: string;
  /** Output only. The timestamp of when the Folder was last updated. */
  updateTime?: string;
  /** Required. The Folder's user-friendly name. */
  displayName?: string;
  /** Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string. */
  internalMetadata?: string;
}

export const Folder: Schema.Schema<Folder> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    containingFolder: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    creatorIamPrincipal: Schema.optional(Schema.String),
    teamFolderName: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    internalMetadata: Schema.optional(Schema.String),
  }).annotate({ identifier: "Folder" });

export interface WorkspaceCompilationOverrides {
  /** Optional. The prefix that should be prepended to all table names. */
  tablePrefix?: string;
  /** Optional. The default database (Google Cloud project ID). */
  defaultDatabase?: string;
  /** Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names. */
  schemaSuffix?: string;
}

export const WorkspaceCompilationOverrides: Schema.Schema<WorkspaceCompilationOverrides> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tablePrefix: Schema.optional(Schema.String),
    defaultDatabase: Schema.optional(Schema.String),
    schemaSuffix: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkspaceCompilationOverrides" });

export interface SshAuthenticationConfig {
  /** Required. The name of the Secret Manager secret version to use as a ssh private key for Git operations. Must be in the format `projects/* /secrets/* /versions/*`. */
  userPrivateKeySecretVersion?: string;
  /** Required. Content of a public SSH key to verify an identity of a remote Git host. */
  hostPublicKey?: string;
}

export const SshAuthenticationConfig: Schema.Schema<SshAuthenticationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userPrivateKeySecretVersion: Schema.optional(Schema.String),
    hostPublicKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "SshAuthenticationConfig" });

export interface GitRemoteSettings {
  /** Required. The Git remote's URL. */
  url?: string;
  /** Optional. The name of the Secret Manager secret version to use as an authentication token for Git operations. Must be in the format `projects/* /secrets/* /versions/*`. */
  authenticationTokenSecretVersion?: string;
  /** Required. The Git remote's default branch name. If not set, `main` will be used and stored for the repository. */
  defaultBranch?: string;
  /** Output only. Deprecated: The field does not contain any token status information. Instead use https://cloud.google.com/dataform/reference/rest/v1beta1/projects.locations.repositories/computeAccessTokenStatus */
  tokenStatus?:
    | "TOKEN_STATUS_UNSPECIFIED"
    | "NOT_FOUND"
    | "INVALID"
    | "VALID"
    | (string & {});
  /** Optional. Authentication fields for remote uris using SSH protocol. */
  sshAuthenticationConfig?: SshAuthenticationConfig;
}

export const GitRemoteSettings: Schema.Schema<GitRemoteSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    authenticationTokenSecretVersion: Schema.optional(Schema.String),
    defaultBranch: Schema.optional(Schema.String),
    tokenStatus: Schema.optional(Schema.String),
    sshAuthenticationConfig: Schema.optional(SshAuthenticationConfig),
  }).annotate({ identifier: "GitRemoteSettings" });

export interface DataEncryptionState {
  /** Required. The KMS key version name with which data of a resource is encrypted. */
  kmsKeyVersionName?: string;
}

export const DataEncryptionState: Schema.Schema<DataEncryptionState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKeyVersionName: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataEncryptionState" });

export interface Repository {
  /** Output only. The resource name of the TeamFolder that this Repository is associated with. This should take the format: projects/{project}/locations/{location}/teamFolders/{teamFolder}. If this is not set, the Repository is not associated with a TeamFolder. */
  teamFolderName?: string;
  /** Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format `projects/* /secrets/* /versions/*`. The file itself must be in a JSON format. */
  npmrcEnvironmentVariablesSecretVersion?: string;
  /** Optional. If set, fields of `workspace_compilation_overrides` override the default compilation settings that are specified in dataform.json when creating workspace-scoped compilation results. See documentation for `WorkspaceCompilationOverrides` for more information. */
  workspaceCompilationOverrides?: WorkspaceCompilationOverrides;
  /** Optional. The repository's user-friendly name. */
  displayName?: string;
  /** Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string. */
  internalMetadata?: string;
  /** Identifier. The repository's name. */
  name?: string;
  /** Optional. The name of the containing folder of the repository. The field is immutable and it can be modified via a MoveRepository operation. Format: `projects/* /locations/* /folders/*`. or `projects/* /locations/* /teamFolders/*`. */
  containingFolder?: string;
  /** Optional. The service account to run workflow invocations under. */
  serviceAccount?: string;
  /** Optional. The reference to a KMS encryption key. If provided, it will be used to encrypt user data in the repository and all child resources. It is not possible to add or update the encryption key after the repository is created. Example: `projects/{kms_project}/locations/{location}/keyRings/{key_location}/cryptoKeys/{key}` */
  kmsKeyName?: string;
  /** Output only. The timestamp of when the repository was created. */
  createTime?: string;
  /** Optional. If set, configures this repository to be linked to a Git remote. */
  gitRemoteSettings?: GitRemoteSettings;
  /** Optional. Input only. If set to true, the authenticated user will be granted the roles/dataform.admin role on the created repository. To modify access to the created repository later apply setIamPolicy from https://cloud.google.com/dataform/reference/rest#rest-resource:-v1beta1.projects.locations.repositories */
  setAuthenticatedUserAdmin?: boolean;
  /** Output only. A data encryption state of a Git repository if this Repository is protected by a KMS key. */
  dataEncryptionState?: DataEncryptionState;
  /** Optional. Repository user labels. */
  labels?: Record<string, string>;
}

export const Repository: Schema.Schema<Repository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    teamFolderName: Schema.optional(Schema.String),
    npmrcEnvironmentVariablesSecretVersion: Schema.optional(Schema.String),
    workspaceCompilationOverrides: Schema.optional(
      WorkspaceCompilationOverrides,
    ),
    displayName: Schema.optional(Schema.String),
    internalMetadata: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    containingFolder: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    kmsKeyName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    gitRemoteSettings: Schema.optional(GitRemoteSettings),
    setAuthenticatedUserAdmin: Schema.optional(Schema.Boolean),
    dataEncryptionState: Schema.optional(DataEncryptionState),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Repository" });

export interface RootContentsEntry {
  /** A subfolder. */
  folder?: Folder;
  /** A repository. */
  repository?: Repository;
}

export const RootContentsEntry: Schema.Schema<RootContentsEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    folder: Schema.optional(Folder),
    repository: Schema.optional(Repository),
  }).annotate({ identifier: "RootContentsEntry" });

export interface QueryUserRootContentsResponse {
  /** List of entries in the folder. */
  entries?: ReadonlyArray<RootContentsEntry>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const QueryUserRootContentsResponse: Schema.Schema<QueryUserRootContentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(RootContentsEntry)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryUserRootContentsResponse" });

export interface FilesystemEntryMetadata {
  /** Output only. Provides the size of the entry in bytes. For directories, this will be 0. */
  sizeBytes?: string;
  /** Output only. Represents the time of the last modification of the entry. */
  updateTime?: string;
}

export const FilesystemEntryMetadata: Schema.Schema<FilesystemEntryMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sizeBytes: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "FilesystemEntryMetadata" });

export interface DirectoryEntry {
  /** Entry with metadata. */
  metadata?: FilesystemEntryMetadata;
  /** A file in the directory. */
  file?: string;
  /** A child directory in the directory. */
  directory?: string;
}

export const DirectoryEntry: Schema.Schema<DirectoryEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(FilesystemEntryMetadata),
    file: Schema.optional(Schema.String),
    directory: Schema.optional(Schema.String),
  }).annotate({ identifier: "DirectoryEntry" });

export interface QueryDirectoryContentsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** List of entries in the directory. */
  directoryEntries?: ReadonlyArray<DirectoryEntry>;
}

export const QueryDirectoryContentsResponse: Schema.Schema<QueryDirectoryContentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    directoryEntries: Schema.optional(Schema.Array(DirectoryEntry)),
  }).annotate({ identifier: "QueryDirectoryContentsResponse" });

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

export const UncommittedFileChange: Schema.Schema<UncommittedFileChange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "UncommittedFileChange" });

export interface MoveDirectoryResponse {}

export const MoveDirectoryResponse: Schema.Schema<MoveDirectoryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MoveDirectoryResponse",
  });

export interface CommitWorkspaceChangesResponse {}

export const CommitWorkspaceChangesResponse: Schema.Schema<CommitWorkspaceChangesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CommitWorkspaceChangesResponse",
  });

export interface WriteFile {
  /** The file's contents. */
  contents?: string;
}

export const WriteFile: Schema.Schema<WriteFile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contents: Schema.optional(Schema.String),
  }).annotate({ identifier: "WriteFile" });

export interface DeleteFile {}

export const DeleteFile: Schema.Schema<DeleteFile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeleteFile",
  });

export interface FileOperation {
  /** Represents the write operation. */
  writeFile?: WriteFile;
  /** Represents the delete operation. */
  deleteFile?: DeleteFile;
}

export const FileOperation: Schema.Schema<FileOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    writeFile: Schema.optional(WriteFile),
    deleteFile: Schema.optional(DeleteFile),
  }).annotate({ identifier: "FileOperation" });

export interface DeleteTeamFolderTreeRequest {
  /** Optional. If `false` (default): The operation will fail if any Repository within the folder hierarchy has associated Release Configs or Workflow Configs. If `true`: The operation will attempt to delete everything, including any Release Configs and Workflow Configs linked to Repositories within the folder hierarchy. This permanently removes schedules and resources. */
  force?: boolean;
}

export const DeleteTeamFolderTreeRequest: Schema.Schema<DeleteTeamFolderTreeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DeleteTeamFolderTreeRequest" });

export interface InstallNpmPackagesResponse {}

export const InstallNpmPackagesResponse: Schema.Schema<InstallNpmPackagesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "InstallNpmPackagesResponse",
  });

export interface Expr {
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
}

export const Expr: Schema.Schema<Expr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface Binding {
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
}

export const Binding: Schema.Schema<Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    condition: Schema.optional(Expr),
    members: Schema.optional(Schema.Array(Schema.String)),
    role: Schema.optional(Schema.String),
  }).annotate({ identifier: "Binding" });

export interface PrivateResourceMetadata {
  /** Output only. If true, this resource is user-scoped, meaning it is either a workspace or sourced from a workspace. */
  userScoped?: boolean;
}

export const PrivateResourceMetadata: Schema.Schema<PrivateResourceMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userScoped: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PrivateResourceMetadata" });

export interface Interval {
  /** Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. */
  endTime?: string;
  /** Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. */
  startTime?: string;
}

export const Interval: Schema.Schema<Interval> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Interval" });

export interface BigQueryAction {
  /** Output only. The generated BigQuery SQL script that will be executed. */
  sqlScript?: string;
  /** Output only. The ID of the BigQuery job that executed the SQL in sql_script. Only set once the job has started to run. */
  jobId?: string;
}

export const BigQueryAction: Schema.Schema<BigQueryAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sqlScript: Schema.optional(Schema.String),
    jobId: Schema.optional(Schema.String),
  }).annotate({ identifier: "BigQueryAction" });

export interface ActionErrorTable {
  /** Error Table target. */
  target?: Target;
  /** Error table partition expiration in days. Only positive values are allowed. */
  retentionDays?: number;
}

export const ActionErrorTable: Schema.Schema<ActionErrorTable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    target: Schema.optional(Target),
    retentionDays: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ActionErrorTable" });

export interface ActionSimpleLoadMode {}

export const ActionSimpleLoadMode: Schema.Schema<ActionSimpleLoadMode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ActionSimpleLoadMode",
  });

export interface ActionIncrementalLoadMode {
  /** Column name for incremental load modes */
  column?: string;
}

export const ActionIncrementalLoadMode: Schema.Schema<ActionIncrementalLoadMode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    column: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActionIncrementalLoadMode" });

export interface ActionLoadConfig {
  /** Replace destination table */
  replace?: ActionSimpleLoadMode;
  /** Insert records where the value of a column is not already present in the destination table */
  unique?: ActionIncrementalLoadMode;
  /** Insert records where the value exceeds the previous maximum value for a column in the destination table */
  maximum?: ActionIncrementalLoadMode;
  /** Append into destination table */
  append?: ActionSimpleLoadMode;
}

export const ActionLoadConfig: Schema.Schema<ActionLoadConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    replace: Schema.optional(ActionSimpleLoadMode),
    unique: Schema.optional(ActionIncrementalLoadMode),
    maximum: Schema.optional(ActionIncrementalLoadMode),
    append: Schema.optional(ActionSimpleLoadMode),
  }).annotate({ identifier: "ActionLoadConfig" });

export interface ActionSqlDefinition {
  /** Error table configuration, */
  errorTable?: ActionErrorTable;
  /** Load configuration. */
  loadConfig?: ActionLoadConfig;
  /** The SQL query representing the data preparation steps. Formatted as a Pipe SQL query statement. */
  query?: string;
}

export const ActionSqlDefinition: Schema.Schema<ActionSqlDefinition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorTable: Schema.optional(ActionErrorTable),
    loadConfig: Schema.optional(ActionLoadConfig),
    query: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActionSqlDefinition" });

export interface DataPreparationAction {
  /** Output only. The ID of the BigQuery job that executed the SQL in sql_script. Only set once the job has started to run. */
  jobId?: string;
  /** Output only. The generated BigQuery SQL script that will be executed. For reference only. */
  generatedSql?: string;
  /** Output only. YAML representing the contents of the data preparation. Can be used to show the customer what the input was to their workflow. */
  contentsYaml?: string;
  /** SQL definition for a Data Preparation. Contains a SQL query and additional context information. */
  contentsSql?: ActionSqlDefinition;
}

export const DataPreparationAction: Schema.Schema<DataPreparationAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobId: Schema.optional(Schema.String),
    generatedSql: Schema.optional(Schema.String),
    contentsYaml: Schema.optional(Schema.String),
    contentsSql: Schema.optional(ActionSqlDefinition),
  }).annotate({ identifier: "DataPreparationAction" });

export interface NotebookAction {
  /** Output only. The code contents of a Notebook to be run. */
  contents?: string;
  /** Output only. The ID of the Vertex job that executed the notebook in contents and also the ID used for the outputs created in Google Cloud Storage buckets. Only set once the job has started to run. */
  jobId?: string;
}

export const NotebookAction: Schema.Schema<NotebookAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contents: Schema.optional(Schema.String),
    jobId: Schema.optional(Schema.String),
  }).annotate({ identifier: "NotebookAction" });

export interface WorkflowInvocationAction {
  /** Output only. If and only if action's state is FAILED a failure reason is set. */
  failureReason?: string;
  /** Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string. */
  internalMetadata?: string;
  /** Output only. This action's identifier. Unique within the workflow invocation. */
  target?: Target;
  /** Output only. This action's timing details. `start_time` will be set if the action is in [RUNNING, SUCCEEDED, CANCELLED, FAILED] state. `end_time` will be set if the action is in [SUCCEEDED, CANCELLED, FAILED] state. */
  invocationTiming?: Interval;
  /** Output only. The workflow action's bigquery action details. */
  bigqueryAction?: BigQueryAction;
  /** Output only. The workflow action's data preparation action details. */
  dataPreparationAction?: DataPreparationAction;
  /** Output only. The action's identifier if the project had been compiled without any overrides configured. Unique within the compilation result. */
  canonicalTarget?: Target;
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
  /** Output only. The workflow action's notebook action details. */
  notebookAction?: NotebookAction;
}

export const WorkflowInvocationAction: Schema.Schema<WorkflowInvocationAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    failureReason: Schema.optional(Schema.String),
    internalMetadata: Schema.optional(Schema.String),
    target: Schema.optional(Target),
    invocationTiming: Schema.optional(Interval),
    bigqueryAction: Schema.optional(BigQueryAction),
    dataPreparationAction: Schema.optional(DataPreparationAction),
    canonicalTarget: Schema.optional(Target),
    state: Schema.optional(Schema.String),
    notebookAction: Schema.optional(NotebookAction),
  }).annotate({ identifier: "WorkflowInvocationAction" });

export interface MoveRepositoryRequest {
  /** Optional. The name of the Folder, TeamFolder, or root location to move the repository to. Can be in the format of: "" to move into the root User folder, `projects/* /locations/* /folders/*`, `projects/* /locations/* /teamFolders/*` */
  destinationContainingFolder?: string;
}

export const MoveRepositoryRequest: Schema.Schema<MoveRepositoryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinationContainingFolder: Schema.optional(Schema.String),
  }).annotate({ identifier: "MoveRepositoryRequest" });

export interface PushGitCommitsResponse {}

export const PushGitCommitsResponse: Schema.Schema<PushGitCommitsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "PushGitCommitsResponse",
  });

export interface ScheduledExecutionRecord {
  /** The error status encountered upon this attempt to create the workflow invocation, if the attempt was unsuccessful. */
  errorStatus?: Status;
  /** Output only. The timestamp of this execution attempt. */
  executionTime?: string;
  /** The name of the created workflow invocation, if one was successfully created. Must be in the format `projects/* /locations/* /repositories/* /workflowInvocations/*`. */
  workflowInvocation?: string;
}

export const ScheduledExecutionRecord: Schema.Schema<ScheduledExecutionRecord> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorStatus: Schema.optional(Status),
    executionTime: Schema.optional(Schema.String),
    workflowInvocation: Schema.optional(Schema.String),
  }).annotate({ identifier: "ScheduledExecutionRecord" });

export interface InvocationConfig {
  /** Optional. The set of action identifiers to include. */
  includedTargets?: ReadonlyArray<Target>;
  /** Optional. When set to true, transitive dependencies of included actions will be executed. */
  transitiveDependenciesIncluded?: boolean;
  /** Optional. When set to true, transitive dependents of included actions will be executed. */
  transitiveDependentsIncluded?: boolean;
  /** Optional. The set of tags to include. */
  includedTags?: ReadonlyArray<string>;
  /** Optional. Specifies the priority for query execution in BigQuery. More information can be found at https://cloud.google.com/bigquery/docs/running-queries#queries. */
  queryPriority?:
    | "QUERY_PRIORITY_UNSPECIFIED"
    | "INTERACTIVE"
    | "BATCH"
    | (string & {});
  /** Optional. When set to true, any incremental tables will be fully refreshed. */
  fullyRefreshIncrementalTablesEnabled?: boolean;
  /** Optional. The service account to run workflow invocations under. */
  serviceAccount?: string;
}

export const InvocationConfig: Schema.Schema<InvocationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includedTargets: Schema.optional(Schema.Array(Target)),
    transitiveDependenciesIncluded: Schema.optional(Schema.Boolean),
    transitiveDependentsIncluded: Schema.optional(Schema.Boolean),
    includedTags: Schema.optional(Schema.Array(Schema.String)),
    queryPriority: Schema.optional(Schema.String),
    fullyRefreshIncrementalTablesEnabled: Schema.optional(Schema.Boolean),
    serviceAccount: Schema.optional(Schema.String),
  }).annotate({ identifier: "InvocationConfig" });

export interface WorkflowConfig {
  /** Identifier. The workflow config's name. */
  name?: string;
  /** Output only. Records of the 10 most recent scheduled execution attempts, ordered in descending order of `execution_time`. Updated whenever automatic creation of a workflow invocation is triggered by cron_schedule. */
  recentScheduledExecutionRecords?: ReadonlyArray<ScheduledExecutionRecord>;
  /** Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string. */
  internalMetadata?: string;
  /** Optional. If left unset, a default InvocationConfig will be used. */
  invocationConfig?: InvocationConfig;
  /** Output only. The timestamp of when the WorkflowConfig was created. */
  createTime?: string;
  /** Optional. Disables automatic creation of workflow invocations. */
  disabled?: boolean;
  /** Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC. */
  timeZone?: string;
  /** Required. The name of the release config whose release_compilation_result should be executed. Must be in the format `projects/* /locations/* /repositories/* /releaseConfigs/*`. */
  releaseConfig?: string;
  /** Optional. Optional schedule (in cron format) for automatic execution of this workflow config. */
  cronSchedule?: string;
  /** Output only. The timestamp of when the WorkflowConfig was last updated. */
  updateTime?: string;
}

export const WorkflowConfig: Schema.Schema<WorkflowConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    recentScheduledExecutionRecords: Schema.optional(
      Schema.Array(ScheduledExecutionRecord),
    ),
    internalMetadata: Schema.optional(Schema.String),
    invocationConfig: Schema.optional(InvocationConfig),
    createTime: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
    timeZone: Schema.optional(Schema.String),
    releaseConfig: Schema.optional(Schema.String),
    cronSchedule: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkflowConfig" });

export interface ListWorkflowConfigsResponse {
  /** List of workflow configs. */
  workflowConfigs?: ReadonlyArray<WorkflowConfig>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Locations which could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListWorkflowConfigsResponse: Schema.Schema<ListWorkflowConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workflowConfigs: Schema.optional(Schema.Array(WorkflowConfig)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListWorkflowConfigsResponse" });

export interface PushGitCommitsRequest {
  /** Optional. The name of the branch in the Git remote to which commits should be pushed. If left unset, the repository's default branch name will be used. */
  remoteBranch?: string;
}

export const PushGitCommitsRequest: Schema.Schema<PushGitCommitsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    remoteBranch: Schema.optional(Schema.String),
  }).annotate({ identifier: "PushGitCommitsRequest" });

export interface PolicyName {
  /** Resource type. Types are defined in IAM's .service files. Valid values for type might be 'storage_buckets', 'compute_instances', 'resourcemanager_customers', 'billing_accounts', etc. */
  type?: string;
  /** For Cloud IAM: The location of the Policy. Must be empty or "global" for Policies owned by global IAM. Must name a region from prodspec/cloud-iam-cloudspec for Regional IAM Policies, see go/iam-faq#where-is-iam-currently-deployed. For Local IAM: This field should be set to "local". */
  region?: string;
  /** Identifies an instance of the type. ID format varies by type. The ID format is defined in the IAM .service file that defines the type, either in path_mapping or in a comment. */
  id?: string;
}

export const PolicyName: Schema.Schema<PolicyName> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyName" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface ResetWorkspaceChangesResponse {}

export const ResetWorkspaceChangesResponse: Schema.Schema<ResetWorkspaceChangesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ResetWorkspaceChangesResponse",
  });

export interface DirectorySearchResult {
  /** File system path relative to the workspace root. */
  path?: string;
}

export const DirectorySearchResult: Schema.Schema<DirectorySearchResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "DirectorySearchResult" });

export interface QueryCompilationResultActionsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** List of compilation result actions. */
  compilationResultActions?: ReadonlyArray<CompilationResultAction>;
}

export const QueryCompilationResultActionsResponse: Schema.Schema<QueryCompilationResultActionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    compilationResultActions: Schema.optional(
      Schema.Array(CompilationResultAction),
    ),
  }).annotate({ identifier: "QueryCompilationResultActionsResponse" });

export interface TeamFolder {
  /** Identifier. The TeamFolder's name. */
  name?: string;
  /** Output only. The timestamp of when the TeamFolder was created. */
  createTime?: string;
  /** Output only. The IAM principal identifier of the creator of the TeamFolder. */
  creatorIamPrincipal?: string;
  /** Output only. The timestamp of when the TeamFolder was last updated. */
  updateTime?: string;
  /** Required. The TeamFolder's user-friendly name. */
  displayName?: string;
  /** Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string. */
  internalMetadata?: string;
}

export const TeamFolder: Schema.Schema<TeamFolder> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    creatorIamPrincipal: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    internalMetadata: Schema.optional(Schema.String),
  }).annotate({ identifier: "TeamFolder" });

export interface TeamFolderSearchResult {
  /** A TeamFolder resource that is in the project / location. */
  teamFolder?: TeamFolder;
}

export const TeamFolderSearchResult: Schema.Schema<TeamFolderSearchResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    teamFolder: Schema.optional(TeamFolder),
  }).annotate({ identifier: "TeamFolderSearchResult" });

export interface SearchTeamFoldersResponse {
  /** List of TeamFolders that match the search query. */
  results?: ReadonlyArray<TeamFolderSearchResult>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const SearchTeamFoldersResponse: Schema.Schema<SearchTeamFoldersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(Schema.Array(TeamFolderSearchResult)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchTeamFoldersResponse" });

export interface TeamFolderContentsEntry {
  /** A subfolder. */
  folder?: Folder;
  /** A repository. */
  repository?: Repository;
}

export const TeamFolderContentsEntry: Schema.Schema<TeamFolderContentsEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    folder: Schema.optional(Folder),
    repository: Schema.optional(Repository),
  }).annotate({ identifier: "TeamFolderContentsEntry" });

export interface QueryTeamFolderContentsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** List of entries in the TeamFolder. */
  entries?: ReadonlyArray<TeamFolderContentsEntry>;
}

export const QueryTeamFolderContentsResponse: Schema.Schema<QueryTeamFolderContentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    entries: Schema.optional(Schema.Array(TeamFolderContentsEntry)),
  }).annotate({ identifier: "QueryTeamFolderContentsResponse" });

export interface CommitRepositoryChangesResponse {
  /** The commit SHA of the current commit. */
  commitSha?: string;
}

export const CommitRepositoryChangesResponse: Schema.Schema<CommitRepositoryChangesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    commitSha: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommitRepositoryChangesResponse" });

export interface ReadFileResponse {
  /** The file's contents. */
  fileContents?: string;
}

export const ReadFileResponse: Schema.Schema<ReadFileResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileContents: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReadFileResponse" });

export interface WorkflowInvocation {
  /** Output only. Metadata indicating whether this resource is user-scoped. `WorkflowInvocation` resource is `user_scoped` only if it is sourced from a compilation result and the compilation result is user-scoped. */
  privateResourceMetadata?: PrivateResourceMetadata;
  /** Immutable. If left unset, a default InvocationConfig will be used. */
  invocationConfig?: InvocationConfig;
  /** Output only. This workflow invocation's current state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "RUNNING"
    | "SUCCEEDED"
    | "CANCELLED"
    | "FAILED"
    | "CANCELING"
    | (string & {});
  /** Immutable. The name of the compilation result to use for this invocation. Must be in the format `projects/* /locations/* /repositories/* /compilationResults/*`. */
  compilationResult?: string;
  /** Output only. The resolved compilation result that was used to create this invocation. Will be in the format `projects/* /locations/* /repositories/* /compilationResults/*`. */
  resolvedCompilationResult?: string;
  /** Output only. This workflow invocation's timing details. */
  invocationTiming?: Interval;
  /** Output only. Only set if the repository has a KMS Key. */
  dataEncryptionState?: DataEncryptionState;
  /** Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string. */
  internalMetadata?: string;
  /** Output only. The workflow invocation's name. */
  name?: string;
  /** Immutable. The name of the workflow config to invoke. Must be in the format `projects/* /locations/* /repositories/* /workflowConfigs/*`. */
  workflowConfig?: string;
}

export const WorkflowInvocation: Schema.Schema<WorkflowInvocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateResourceMetadata: Schema.optional(PrivateResourceMetadata),
    invocationConfig: Schema.optional(InvocationConfig),
    state: Schema.optional(Schema.String),
    compilationResult: Schema.optional(Schema.String),
    resolvedCompilationResult: Schema.optional(Schema.String),
    invocationTiming: Schema.optional(Interval),
    dataEncryptionState: Schema.optional(DataEncryptionState),
    internalMetadata: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    workflowConfig: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkflowInvocation" });

export interface PullGitCommitsResponse {}

export const PullGitCommitsResponse: Schema.Schema<PullGitCommitsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "PullGitCommitsResponse",
  });

export interface MoveFileRequest {
  /** Required. The file's full path including filename, relative to the workspace root. */
  path?: string;
  /** Required. The file's new path including filename, relative to the workspace root. */
  newPath?: string;
}

export const MoveFileRequest: Schema.Schema<MoveFileRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    newPath: Schema.optional(Schema.String),
  }).annotate({ identifier: "MoveFileRequest" });

export interface ListWorkflowInvocationsResponse {
  /** List of workflow invocations. */
  workflowInvocations?: ReadonlyArray<WorkflowInvocation>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Locations which could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListWorkflowInvocationsResponse: Schema.Schema<ListWorkflowInvocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workflowInvocations: Schema.optional(Schema.Array(WorkflowInvocation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListWorkflowInvocationsResponse" });

export interface Location {
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    displayName: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
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

export interface Workspace {
  /** Identifier. The workspace's name. */
  name?: string;
  /** Output only. The timestamp of when the workspace was created. */
  createTime?: string;
  /** Output only. A data encryption state of a Git repository if this Workspace is protected by a KMS key. */
  dataEncryptionState?: DataEncryptionState;
  /** Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string. */
  internalMetadata?: string;
  /** Optional. If set to true, workspaces will not be moved if its linked Repository is moved. Instead, it will be deleted. */
  disableMoves?: boolean;
  /** Output only. Metadata indicating whether this resource is user-scoped. For `Workspace` resources, the `user_scoped` field is always `true`. */
  privateResourceMetadata?: PrivateResourceMetadata;
}

export const Workspace: Schema.Schema<Workspace> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    dataEncryptionState: Schema.optional(DataEncryptionState),
    internalMetadata: Schema.optional(Schema.String),
    disableMoves: Schema.optional(Schema.Boolean),
    privateResourceMetadata: Schema.optional(PrivateResourceMetadata),
  }).annotate({ identifier: "Workspace" });

export interface ListWorkspacesResponse {
  /** List of workspaces. */
  workspaces?: ReadonlyArray<Workspace>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Locations which could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListWorkspacesResponse: Schema.Schema<ListWorkspacesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workspaces: Schema.optional(Schema.Array(Workspace)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListWorkspacesResponse" });

export interface CompilationError {
  /** Output only. The error's top level message. */
  message?: string;
  /** Output only. The identifier of the action where this error occurred, if available. */
  actionTarget?: Target;
  /** Output only. The error's full stack trace. */
  stack?: string;
  /** Output only. The path of the file where this error occurred, if available, relative to the project root. */
  path?: string;
}

export const CompilationError: Schema.Schema<CompilationError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    actionTarget: Schema.optional(Target),
    stack: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "CompilationError" });

export interface CompilationResult {
  /** Immutable. If set, fields of `code_compilation_config` override the default compilation settings that are specified in dataform.json. */
  codeCompilationConfig?: CodeCompilationConfig;
  /** Immutable. The name of the release config to compile. Must be in the format `projects/* /locations/* /repositories/* /releaseConfigs/*`. */
  releaseConfig?: string;
  /** Output only. Metadata indicating whether this resource is user-scoped. `CompilationResult` resource is `user_scoped` only if it is sourced from a workspace. */
  privateResourceMetadata?: PrivateResourceMetadata;
  /** Output only. Errors encountered during project compilation. */
  compilationErrors?: ReadonlyArray<CompilationError>;
  /** Output only. The timestamp of when the compilation result was created. */
  createTime?: string;
  /** Immutable. The name of the workspace to compile. Must be in the format `projects/* /locations/* /repositories/* /workspaces/*`. */
  workspace?: string;
  /** Output only. The version of `@dataform/core` that was used for compilation. */
  dataformCoreVersion?: string;
  /** Output only. Only set if the repository has a KMS Key. */
  dataEncryptionState?: DataEncryptionState;
  /** Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string. */
  internalMetadata?: string;
  /** Output only. The compilation result's name. */
  name?: string;
  /** Output only. The fully resolved Git commit SHA of the code that was compiled. Not set for compilation results whose source is a workspace. */
  resolvedGitCommitSha?: string;
  /** Immutable. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: `12ade345` - a tag: `tag1` - a branch name: `branch1` */
  gitCommitish?: string;
}

export const CompilationResult: Schema.Schema<CompilationResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    codeCompilationConfig: Schema.optional(CodeCompilationConfig),
    releaseConfig: Schema.optional(Schema.String),
    privateResourceMetadata: Schema.optional(PrivateResourceMetadata),
    compilationErrors: Schema.optional(Schema.Array(CompilationError)),
    createTime: Schema.optional(Schema.String),
    workspace: Schema.optional(Schema.String),
    dataformCoreVersion: Schema.optional(Schema.String),
    dataEncryptionState: Schema.optional(DataEncryptionState),
    internalMetadata: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    resolvedGitCommitSha: Schema.optional(Schema.String),
    gitCommitish: Schema.optional(Schema.String),
  }).annotate({ identifier: "CompilationResult" });

export interface Policy {
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
}

export const Policy: Schema.Schema<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.Number),
    etag: Schema.optional(Schema.String),
    bindings: Schema.optional(Schema.Array(Binding)),
  }).annotate({ identifier: "Policy" });

export interface FetchRemoteBranchesResponse {
  /** The remote repository's branch names. */
  branches?: ReadonlyArray<string>;
}

export const FetchRemoteBranchesResponse: Schema.Schema<FetchRemoteBranchesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    branches: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "FetchRemoteBranchesResponse" });

export interface SetIamPolicyRequest {
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: Policy;
}

export const SetIamPolicyRequest: Schema.Schema<SetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Policy),
  }).annotate({ identifier: "SetIamPolicyRequest" });

export interface CommitLogEntry {
  /** Commit timestamp. */
  commitTime?: string;
  /** The commit SHA for this commit log entry. */
  commitSha?: string;
  /** The commit author for this commit log entry. */
  author?: CommitAuthor;
  /** The commit message for this commit log entry. */
  commitMessage?: string;
}

export const CommitLogEntry: Schema.Schema<CommitLogEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    commitTime: Schema.optional(Schema.String),
    commitSha: Schema.optional(Schema.String),
    author: Schema.optional(CommitAuthor),
    commitMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommitLogEntry" });

export interface RemoveDirectoryRequest {
  /** Required. The directory's full path including directory name, relative to the workspace root. */
  path?: string;
}

export const RemoveDirectoryRequest: Schema.Schema<RemoveDirectoryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoveDirectoryRequest" });

export interface RemoveFileResponse {}

export const RemoveFileResponse: Schema.Schema<RemoveFileResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RemoveFileResponse",
  });

export interface IamPolicyOverrideView {
  /** The IAM policy name for the resource. */
  iamPolicyName?: PolicyName;
  /** Whether the IAM policy encoded in this view is active. */
  isActive?: boolean;
}

export const IamPolicyOverrideView: Schema.Schema<IamPolicyOverrideView> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    iamPolicyName: Schema.optional(PolicyName),
    isActive: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "IamPolicyOverrideView" });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Schema<TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface DeleteFolderTreeRequest {
  /** Optional. If `false` (default): The operation will fail if any Repository within the folder hierarchy has associated Release Configs or Workflow Configs. If `true`: The operation will attempt to delete everything, including any Release Configs and Workflow Configs linked to Repositories within the folder hierarchy. This permanently removes schedules and resources. */
  force?: boolean;
}

export const DeleteFolderTreeRequest: Schema.Schema<DeleteFolderTreeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DeleteFolderTreeRequest" });

export interface ReadRepositoryFileResponse {
  /** The file's contents. */
  contents?: string;
}

export const ReadRepositoryFileResponse: Schema.Schema<ReadRepositoryFileResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contents: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReadRepositoryFileResponse" });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(Status),
    done: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface FileSearchResult {
  /** File system path relative to the workspace root. */
  path?: string;
}

export const FileSearchResult: Schema.Schema<FileSearchResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "FileSearchResult" });

export interface SearchResult {
  /** Details when search result is a file. */
  file?: FileSearchResult;
  /** Details when search result is a directory. */
  directory?: DirectorySearchResult;
}

export const SearchResult: Schema.Schema<SearchResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    file: Schema.optional(FileSearchResult),
    directory: Schema.optional(DirectorySearchResult),
  }).annotate({ identifier: "SearchResult" });

export interface SearchFilesResponse {
  /** Optional. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** List of matched results. */
  searchResults?: ReadonlyArray<SearchResult>;
}

export const SearchFilesResponse: Schema.Schema<SearchFilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    searchResults: Schema.optional(Schema.Array(SearchResult)),
  }).annotate({ identifier: "SearchFilesResponse" });

export interface MoveFileResponse {}

export const MoveFileResponse: Schema.Schema<MoveFileResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MoveFileResponse",
  });

export interface CommitMetadata {
  /** Required. The commit's author. */
  author?: CommitAuthor;
  /** Optional. The commit's message. */
  commitMessage?: string;
}

export const CommitMetadata: Schema.Schema<CommitMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    author: Schema.optional(CommitAuthor),
    commitMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommitMetadata" });

export interface CommitRepositoryChangesRequest {
  /** Optional. The commit SHA which must be the repository's current HEAD before applying this commit; otherwise this request will fail. If unset, no validation on the current HEAD commit SHA is performed. */
  requiredHeadCommitSha?: string;
  /** Optional. A map to the path of the file to the operation. The path is the full file path including filename, from repository root. */
  fileOperations?: Record<string, FileOperation>;
  /** Required. The changes to commit to the repository. */
  commitMetadata?: CommitMetadata;
}

export const CommitRepositoryChangesRequest: Schema.Schema<CommitRepositoryChangesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requiredHeadCommitSha: Schema.optional(Schema.String),
    fileOperations: Schema.optional(
      Schema.Record(Schema.String, FileOperation),
    ),
    commitMetadata: Schema.optional(CommitMetadata),
  }).annotate({ identifier: "CommitRepositoryChangesRequest" });

export interface QueryRepositoryDirectoryContentsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** List of entries in the directory. */
  directoryEntries?: ReadonlyArray<DirectoryEntry>;
}

export const QueryRepositoryDirectoryContentsResponse: Schema.Schema<QueryRepositoryDirectoryContentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    directoryEntries: Schema.optional(Schema.Array(DirectoryEntry)),
  }).annotate({ identifier: "QueryRepositoryDirectoryContentsResponse" });

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

export const ComputeRepositoryAccessTokenStatusResponse: Schema.Schema<ComputeRepositoryAccessTokenStatusResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tokenStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "ComputeRepositoryAccessTokenStatusResponse" });

export interface FetchRepositoryHistoryResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** A list of commit logs, ordered by 'git log' default order. */
  commits?: ReadonlyArray<CommitLogEntry>;
}

export const FetchRepositoryHistoryResponse: Schema.Schema<FetchRepositoryHistoryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    commits: Schema.optional(Schema.Array(CommitLogEntry)),
  }).annotate({ identifier: "FetchRepositoryHistoryResponse" });

export interface OperationMetadata {
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusDetail?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
  cancelRequested?: boolean;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    statusDetail: Schema.optional(Schema.String),
    cancelRequested: Schema.optional(Schema.Boolean),
    verb: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface Config {
  /** Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string. */
  internalMetadata?: string;
  /** Identifier. The config name. */
  name?: string;
  /** Optional. The default KMS key that is used if no encryption key is provided when a repository is created. */
  defaultKmsKeyName?: string;
}

export const Config: Schema.Schema<Config> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    internalMetadata: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    defaultKmsKeyName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Config" });

export interface WriteFileRequest {
  /** Required. The file. */
  path?: string;
  /** Required. The file's contents. */
  contents?: string;
}

export const WriteFileRequest: Schema.Schema<WriteFileRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    contents: Schema.optional(Schema.String),
  }).annotate({ identifier: "WriteFileRequest" });

export interface MoveFolderRequest {
  /** Optional. The name of the Folder, TeamFolder, or root location to move the Folder to. Can be in the format of: "" to move into the root User folder, `projects/* /locations/* /folders/*`, `projects/* /locations/* /teamFolders/*` */
  destinationContainingFolder?: string;
}

export const MoveFolderRequest: Schema.Schema<MoveFolderRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinationContainingFolder: Schema.optional(Schema.String),
  }).annotate({ identifier: "MoveFolderRequest" });

export interface ResetWorkspaceChangesRequest {
  /** Optional. If set to true, untracked files will be deleted. */
  clean?: boolean;
  /** Optional. Full file paths to reset back to their committed state including filename, rooted at workspace root. If left empty, all files will be reset. */
  paths?: ReadonlyArray<string>;
}

export const ResetWorkspaceChangesRequest: Schema.Schema<ResetWorkspaceChangesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clean: Schema.optional(Schema.Boolean),
    paths: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ResetWorkspaceChangesRequest" });

export interface FetchFileDiffResponse {
  /** The raw formatted Git diff for the file. */
  formattedDiff?: string;
}

export const FetchFileDiffResponse: Schema.Schema<FetchFileDiffResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    formattedDiff: Schema.optional(Schema.String),
  }).annotate({ identifier: "FetchFileDiffResponse" });

export interface FolderContentsEntry {
  /** A subfolder. */
  folder?: Folder;
  /** A repository. */
  repository?: Repository;
}

export const FolderContentsEntry: Schema.Schema<FolderContentsEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    folder: Schema.optional(Folder),
    repository: Schema.optional(Repository),
  }).annotate({ identifier: "FolderContentsEntry" });

export interface QueryFolderContentsResponse {
  /** List of entries in the folder. */
  entries?: ReadonlyArray<FolderContentsEntry>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const QueryFolderContentsResponse: Schema.Schema<QueryFolderContentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(FolderContentsEntry)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryFolderContentsResponse" });

export interface ListRepositoriesResponse {
  /** List of repositories. */
  repositories?: ReadonlyArray<Repository>;
  /** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Locations which could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListRepositoriesResponse: Schema.Schema<ListRepositoriesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repositories: Schema.optional(Schema.Array(Repository)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListRepositoriesResponse" });

export interface InstallNpmPackagesRequest {}

export const InstallNpmPackagesRequest: Schema.Schema<InstallNpmPackagesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "InstallNpmPackagesRequest",
  });

export interface FetchGitAheadBehindResponse {
  /** The number of commits in the remote branch that are not in the workspace. */
  commitsAhead?: number;
  /** The number of commits in the workspace that are not in the remote branch. */
  commitsBehind?: number;
}

export const FetchGitAheadBehindResponse: Schema.Schema<FetchGitAheadBehindResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    commitsAhead: Schema.optional(Schema.Number),
    commitsBehind: Schema.optional(Schema.Number),
  }).annotate({ identifier: "FetchGitAheadBehindResponse" });

export interface WriteFileResponse {}

export const WriteFileResponse: Schema.Schema<WriteFileResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "WriteFileResponse",
  });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Schema<TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface PullGitCommitsRequest {
  /** Optional. The name of the branch in the Git remote from which to pull commits. If left unset, the repository's default branch name will be used. */
  remoteBranch?: string;
  /** Required. The author of any merge commit which may be created as a result of merging fetched Git commits into this workspace. */
  author?: CommitAuthor;
}

export const PullGitCommitsRequest: Schema.Schema<PullGitCommitsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    remoteBranch: Schema.optional(Schema.String),
    author: Schema.optional(CommitAuthor),
  }).annotate({ identifier: "PullGitCommitsRequest" });

export interface MakeDirectoryRequest {
  /** Required. The directory's full path including directory name, relative to the workspace root. */
  path?: string;
}

export const MakeDirectoryRequest: Schema.Schema<MakeDirectoryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "MakeDirectoryRequest" });

export interface QueryWorkflowInvocationActionsResponse {
  /** List of workflow invocation actions. */
  workflowInvocationActions?: ReadonlyArray<WorkflowInvocationAction>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const QueryWorkflowInvocationActionsResponse: Schema.Schema<QueryWorkflowInvocationActionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workflowInvocationActions: Schema.optional(
      Schema.Array(WorkflowInvocationAction),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryWorkflowInvocationActionsResponse" });

export interface RemoveFileRequest {
  /** Required. The file's full path including filename, relative to the workspace root. */
  path?: string;
}

export const RemoveFileRequest: Schema.Schema<RemoveFileRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoveFileRequest" });

export interface CancelWorkflowInvocationRequest {}

export const CancelWorkflowInvocationRequest: Schema.Schema<CancelWorkflowInvocationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelWorkflowInvocationRequest",
  });

export interface ListCompilationResultsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Locations which could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** List of compilation results. */
  compilationResults?: ReadonlyArray<CompilationResult>;
}

export const ListCompilationResultsResponse: Schema.Schema<ListCompilationResultsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    compilationResults: Schema.optional(Schema.Array(CompilationResult)),
  }).annotate({ identifier: "ListCompilationResultsResponse" });

export interface FetchFileGitStatusesResponse {
  /** A list of all files which have uncommitted Git changes. There will only be a single entry for any given file. */
  uncommittedFileChanges?: ReadonlyArray<UncommittedFileChange>;
}

export const FetchFileGitStatusesResponse: Schema.Schema<FetchFileGitStatusesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uncommittedFileChanges: Schema.optional(
      Schema.Array(UncommittedFileChange),
    ),
  }).annotate({ identifier: "FetchFileGitStatusesResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface RemoveDirectoryResponse {}

export const RemoveDirectoryResponse: Schema.Schema<RemoveDirectoryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RemoveDirectoryResponse",
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

export interface GetConfigProjectsLocationsRequest {
  /** Required. The config name. */
  name: string;
}

export const GetConfigProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetConfigProjectsLocationsRequest>;

export type GetConfigProjectsLocationsResponse = Config;
export const GetConfigProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Config;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetConfigProjectsLocationsRequest,
  output: GetConfigProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface QueryUserRootContentsProjectsLocationsRequest {
  /** Required. Location of the user root folder to list contents for. Format: projects/* /locations/* */
  location: string;
  /** Optional. Page token received from a previous `QueryUserRootContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryUserRootFolderContents`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Field to additionally sort results by. Will order Folders before Repositories, and then by `order_by` in ascending order. Supported keywords: display_name (default), created_at, last_modified_at. Examples: * `orderBy="display_name"` * `orderBy="display_name desc"` */
  orderBy?: string;
  /** Optional. Optional filtering for the returned list. Filtering is currently only supported on the `display_name` field. Example: * `filter="display_name="MyFolder""` */
  filter?: string;
}

export const QueryUserRootContentsProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.HttpPath("location")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/{+location}:queryUserRootContents",
    }),
    svc,
  ) as unknown as Schema.Schema<QueryUserRootContentsProjectsLocationsRequest>;

export type QueryUserRootContentsProjectsLocationsResponse =
  QueryUserRootContentsResponse;
export const QueryUserRootContentsProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ QueryUserRootContentsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: QueryUserRootContentsProjectsLocationsRequest,
  output: QueryUserRootContentsProjectsLocationsResponse,
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
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
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

export interface UpdateConfigProjectsLocationsRequest {
  /** Identifier. The config name. */
  name: string;
  /** Optional. Specifies the fields to be updated in the config. */
  updateMask?: string;
  /** Request body */
  body?: Config;
}

export const UpdateConfigProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Config).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateConfigProjectsLocationsRequest>;

export type UpdateConfigProjectsLocationsResponse = Config;
export const UpdateConfigProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Config;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateConfigProjectsLocationsRequest,
  output: UpdateConfigProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRequest {
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}/locations" }),
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

export interface DeleteProjectsLocationsFoldersRequest {
  /** Required. The Folder's name. */
  name: string;
}

export const DeleteProjectsLocationsFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsFoldersRequest>;

export type DeleteProjectsLocationsFoldersResponse = Empty;
export const DeleteProjectsLocationsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsFoldersRequest>;

export type TestIamPermissionsProjectsLocationsFoldersResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsFoldersRequest,
  output: TestIamPermissionsProjectsLocationsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Folder).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsFoldersRequest>;

export type PatchProjectsLocationsFoldersResponse = Folder;
export const PatchProjectsLocationsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Folder;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsFoldersRequest,
  output: PatchProjectsLocationsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsFoldersRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsFoldersRequest>;

export type SetIamPolicyProjectsLocationsFoldersResponse = Policy;
export const SetIamPolicyProjectsLocationsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsFoldersRequest,
  output: SetIamPolicyProjectsLocationsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MoveProjectsLocationsFoldersRequest {
  /** Required. The full resource name of the Folder to move. */
  name: string;
  /** Request body */
  body?: MoveFolderRequest;
}

export const MoveProjectsLocationsFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(MoveFolderRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:move", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<MoveProjectsLocationsFoldersRequest>;

export type MoveProjectsLocationsFoldersResponse = Operation;
export const MoveProjectsLocationsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MoveProjectsLocationsFoldersRequest,
  output: MoveProjectsLocationsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsFoldersRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsFoldersRequest>;

export type GetIamPolicyProjectsLocationsFoldersResponse = Policy;
export const GetIamPolicyProjectsLocationsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsFoldersRequest,
  output: GetIamPolicyProjectsLocationsFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsFoldersRequest {
  /** Required. The location in which to create the Folder. Must be in the format `projects/* /locations/*`. */
  parent: string;
  /** Deprecated: This field is not used. The resource name is generated automatically. The ID to use for the Folder, which will become the final component of the Folder's resource name. */
  folderId?: string;
  /** Request body */
  body?: Folder;
}

export const CreateProjectsLocationsFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    folderId: Schema.optional(Schema.String).pipe(T.HttpQuery("folderId")),
    body: Schema.optional(Folder).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/folders",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsFoldersRequest>;

export type CreateProjectsLocationsFoldersResponse = Folder;
export const CreateProjectsLocationsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Folder;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsFoldersRequest,
  output: CreateProjectsLocationsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsFoldersRequest {
  /** Required. The Folder's name. */
  name: string;
}

export const GetProjectsLocationsFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsFoldersRequest>;

export type GetProjectsLocationsFoldersResponse = Folder;
export const GetProjectsLocationsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Folder;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsFoldersRequest,
  output: GetProjectsLocationsFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteTreeProjectsLocationsFoldersRequest {
  /** Required. The Folder's name. Format: projects/{project}/locations/{location}/folders/{folder} */
  name: string;
  /** Request body */
  body?: DeleteFolderTreeRequest;
}

export const DeleteTreeProjectsLocationsFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DeleteFolderTreeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:deleteTree",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteTreeProjectsLocationsFoldersRequest>;

export type DeleteTreeProjectsLocationsFoldersResponse = Operation;
export const DeleteTreeProjectsLocationsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteTreeProjectsLocationsFoldersRequest,
  output: DeleteTreeProjectsLocationsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface QueryFolderContentsProjectsLocationsFoldersRequest {
  /** Required. Resource name of the Folder to list contents for. Format: projects/* /locations/* /folders/* */
  folder: string;
  /** Optional. Field to additionally sort results by. Will order Folders before Repositories, and then by `order_by` in ascending order. Supported keywords: display_name (default), create_time, last_modified_time. Examples: * `orderBy="display_name"` * `orderBy="display_name desc"` */
  orderBy?: string;
  /** Optional. Optional filtering for the returned list. Filtering is currently only supported on the `display_name` field. Example: * `filter="display_name="MyFolder""` */
  filter?: string;
  /** Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Page token received from a previous `QueryFolderContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryFolderContents`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
}

export const QueryFolderContentsProjectsLocationsFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    folder: Schema.String.pipe(T.HttpPath("folder")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+folder}:queryFolderContents" }),
    svc,
  ) as unknown as Schema.Schema<QueryFolderContentsProjectsLocationsFoldersRequest>;

export type QueryFolderContentsProjectsLocationsFoldersResponse =
  QueryFolderContentsResponse;
export const QueryFolderContentsProjectsLocationsFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ QueryFolderContentsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: QueryFolderContentsProjectsLocationsFoldersRequest,
  output: QueryFolderContentsProjectsLocationsFoldersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsRepositoriesRequest {
  /** Required. The repository's name. */
  name: string;
  /** Optional. If set to true, child resources of this repository (compilation results and workflow invocations) will also be deleted. Otherwise, the request will only succeed if the repository has no child resources. **Note:** *This flag doesn't support deletion of workspaces, release configs or workflow configs. If any of such resources exists in the repository, the request will fail.*. */
  force?: boolean;
}

export const DeleteProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsRepositoriesRequest>;

export type DeleteProjectsLocationsRepositoriesResponse = Empty;
export const DeleteProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRepositoriesRequest,
  output: DeleteProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "v1beta1/{+resource}:testIamPermissions",
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

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
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

export interface FetchRemoteBranchesProjectsLocationsRepositoriesRequest {
  /** Required. The repository's name. */
  name: string;
}

export const FetchRemoteBranchesProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}:fetchRemoteBranches" }),
    svc,
  ) as unknown as Schema.Schema<FetchRemoteBranchesProjectsLocationsRepositoriesRequest>;

export type FetchRemoteBranchesProjectsLocationsRepositoriesResponse =
  FetchRemoteBranchesResponse;
export const FetchRemoteBranchesProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchRemoteBranchesResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchRemoteBranchesProjectsLocationsRepositoriesRequest,
  output: FetchRemoteBranchesProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsRepositoriesRequest {
  /** Identifier. The repository's name. */
  name: string;
  /** Optional. Specifies the fields to be updated in the repository. If left unset, all fields will be updated. */
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
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
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

/** Updates a single Repository. **Note:** *This method does not fully implement [AIP/134](https://google.aip.dev/134). The wildcard entry (\*) is treated as a bad request, and when the `field_mask` is omitted, the request is treated as a full update on all modifiable fields.* */
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

export interface QueryDirectoryContentsProjectsLocationsRepositoriesRequest {
  /** Required. The repository's name. */
  name: string;
  /** Optional. The Commit SHA for the commit to query from. If unset, the directory will be queried from HEAD. */
  commitSha?: string;
  /** Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. The directory's full path including directory name, relative to root. If left unset, the root is used. */
  path?: string;
  /** Optional. Page token received from a previous `QueryRepositoryDirectoryContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryRepositoryDirectoryContents`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
}

export const QueryDirectoryContentsProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    commitSha: Schema.optional(Schema.String).pipe(T.HttpQuery("commitSha")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    path: Schema.optional(Schema.String).pipe(T.HttpQuery("path")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}:queryDirectoryContents" }),
    svc,
  ) as unknown as Schema.Schema<QueryDirectoryContentsProjectsLocationsRepositoriesRequest>;

export type QueryDirectoryContentsProjectsLocationsRepositoriesResponse =
  QueryRepositoryDirectoryContentsResponse;
export const QueryDirectoryContentsProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ QueryRepositoryDirectoryContentsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: QueryDirectoryContentsProjectsLocationsRepositoriesRequest,
  output: QueryDirectoryContentsProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CommitProjectsLocationsRepositoriesRequest {
  /** Required. The repository's name. */
  name: string;
  /** Request body */
  body?: CommitRepositoryChangesRequest;
}

export const CommitProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CommitRepositoryChangesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:commit", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CommitProjectsLocationsRepositoriesRequest>;

export type CommitProjectsLocationsRepositoriesResponse =
  CommitRepositoryChangesResponse;
export const CommitProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CommitRepositoryChangesResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CommitProjectsLocationsRepositoriesRequest,
  output: CommitProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FetchHistoryProjectsLocationsRepositoriesRequest {
  /** Required. The repository's name. */
  name: string;
  /** Optional. Maximum number of commits to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Page token received from a previous `FetchRepositoryHistory` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchRepositoryHistory`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
}

export const FetchHistoryProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}:fetchHistory" }),
    svc,
  ) as unknown as Schema.Schema<FetchHistoryProjectsLocationsRepositoriesRequest>;

export type FetchHistoryProjectsLocationsRepositoriesResponse =
  FetchRepositoryHistoryResponse;
export const FetchHistoryProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchRepositoryHistoryResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: FetchHistoryProjectsLocationsRepositoriesRequest,
  output: FetchHistoryProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
      path: "v1beta1/{+resource}:setIamPolicy",
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

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
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

export interface ComputeAccessTokenStatusProjectsLocationsRepositoriesRequest {
  /** Required. The repository's name. */
  name: string;
}

export const ComputeAccessTokenStatusProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}:computeAccessTokenStatus" }),
    svc,
  ) as unknown as Schema.Schema<ComputeAccessTokenStatusProjectsLocationsRepositoriesRequest>;

export type ComputeAccessTokenStatusProjectsLocationsRepositoriesResponse =
  ComputeRepositoryAccessTokenStatusResponse;
export const ComputeAccessTokenStatusProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ComputeRepositoryAccessTokenStatusResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ComputeAccessTokenStatusProjectsLocationsRepositoriesRequest,
  output: ComputeAccessTokenStatusProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsRepositoriesRequest {
  /** Optional. Maximum number of repositories to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Page token received from a previous `ListRepositories` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRepositories`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The location in which to list repositories. Must be in the format `projects/* /locations/*`. */
  parent: string;
  /** Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field. */
  orderBy?: string;
  /** Optional. Filter for the returned list. */
  filter?: string;
}

export const ListProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/repositories" }),
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

/** Lists Repositories in a given project and location. **Note:** *This method can return repositories not shown in the [Dataform UI](https://console.cloud.google.com/bigquery/dataform)*. */
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

export interface MoveProjectsLocationsRepositoriesRequest {
  /** Required. The full resource name of the repository to move. */
  name: string;
  /** Request body */
  body?: MoveRepositoryRequest;
}

export const MoveProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(MoveRepositoryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:move", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<MoveProjectsLocationsRepositoriesRequest>;

export type MoveProjectsLocationsRepositoriesResponse = Operation;
export const MoveProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MoveProjectsLocationsRepositoriesRequest,
  output: MoveProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReadFileProjectsLocationsRepositoriesRequest {
  /** Required. The repository's name. */
  name: string;
  /** Optional. The commit SHA for the commit to read from. If unset, the file will be read from HEAD. */
  commitSha?: string;
  /** Required. Full file path to read including filename, from repository root. */
  path?: string;
}

export const ReadFileProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    commitSha: Schema.optional(Schema.String).pipe(T.HttpQuery("commitSha")),
    path: Schema.optional(Schema.String).pipe(T.HttpQuery("path")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}:readFile" }),
    svc,
  ) as unknown as Schema.Schema<ReadFileProjectsLocationsRepositoriesRequest>;

export type ReadFileProjectsLocationsRepositoriesResponse =
  ReadRepositoryFileResponse;
export const ReadFileProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ReadRepositoryFileResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReadFileProjectsLocationsRepositoriesRequest,
  output: ReadFileProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden],
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
    T.Http({ method: "GET", path: "v1beta1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsRepositoriesRequest>;

export type GetIamPolicyProjectsLocationsRepositoriesResponse = Policy;
export const GetIamPolicyProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsRepositoriesRequest,
  output: GetIamPolicyProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsRepositoriesRequest {
  /** Required. The location in which to create the repository. Must be in the format `projects/* /locations/*`. */
  parent: string;
  /** Required. The ID to use for the repository, which will become the final component of the repository's resource name. */
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
      path: "v1beta1/{+parent}/repositories",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsRepositoriesRequest>;

export type CreateProjectsLocationsRepositoriesResponse = Repository;
export const CreateProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Repository;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsRepositoriesRequest,
  output: CreateProjectsLocationsRepositoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsRepositoriesRequest {
  /** Required. The repository's name. */
  name: string;
}

export const GetProjectsLocationsRepositoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRepositoriesRequest>;

export type GetProjectsLocationsRepositoriesResponse = Repository;
export const GetProjectsLocationsRepositoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Repository;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRepositoriesRequest,
  output: GetProjectsLocationsRepositoriesResponse,
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/releaseConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRepositoriesReleaseConfigsRequest>;

export type ListProjectsLocationsRepositoriesReleaseConfigsResponse =
  ListReleaseConfigsResponse;
export const ListProjectsLocationsRepositoriesReleaseConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListReleaseConfigsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRepositoriesReleaseConfigsRequest,
  output: ListProjectsLocationsRepositoriesReleaseConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsRepositoriesReleaseConfigsRequest {
  /** Required. The release config's name. */
  name: string;
}

export const GetProjectsLocationsRepositoriesReleaseConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRepositoriesReleaseConfigsRequest>;

export type GetProjectsLocationsRepositoriesReleaseConfigsResponse =
  ReleaseConfig;
export const GetProjectsLocationsRepositoriesReleaseConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ReleaseConfig;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRepositoriesReleaseConfigsRequest,
  output: GetProjectsLocationsRepositoriesReleaseConfigsResponse,
  errors: [NotFound, Forbidden],
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    releaseConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("releaseConfigId"),
    ),
    body: Schema.optional(ReleaseConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/releaseConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsRepositoriesReleaseConfigsRequest>;

export type CreateProjectsLocationsRepositoriesReleaseConfigsResponse =
  ReleaseConfig;
export const CreateProjectsLocationsRepositoriesReleaseConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ReleaseConfig;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsRepositoriesReleaseConfigsRequest,
  output: CreateProjectsLocationsRepositoriesReleaseConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsRepositoriesReleaseConfigsRequest {
  /** Optional. Specifies the fields to be updated in the release config. If left unset, all fields will be updated. */
  updateMask?: string;
  /** Identifier. The release config's name. */
  name: string;
  /** Request body */
  body?: ReleaseConfig;
}

export const PatchProjectsLocationsRepositoriesReleaseConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ReleaseConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsRepositoriesReleaseConfigsRequest>;

export type PatchProjectsLocationsRepositoriesReleaseConfigsResponse =
  ReleaseConfig;
export const PatchProjectsLocationsRepositoriesReleaseConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ReleaseConfig;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsRepositoriesReleaseConfigsRequest,
  output: PatchProjectsLocationsRepositoriesReleaseConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsRepositoriesReleaseConfigsRequest {
  /** Required. The release config's name. */
  name: string;
}

export const DeleteProjectsLocationsRepositoriesReleaseConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsRepositoriesReleaseConfigsRequest>;

export type DeleteProjectsLocationsRepositoriesReleaseConfigsResponse = Empty;
export const DeleteProjectsLocationsRepositoriesReleaseConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRepositoriesReleaseConfigsRequest,
  output: DeleteProjectsLocationsRepositoriesReleaseConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MoveFileProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  workspace: string;
  /** Request body */
  body?: MoveFileRequest;
}

export const MoveFileProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workspace: Schema.String.pipe(T.HttpPath("workspace")),
    body: Schema.optional(MoveFileRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+workspace}:moveFile",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<MoveFileProjectsLocationsRepositoriesWorkspacesRequest>;

export type MoveFileProjectsLocationsRepositoriesWorkspacesResponse =
  MoveFileResponse;
export const MoveFileProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ MoveFileResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MoveFileProjectsLocationsRepositoriesWorkspacesRequest,
  output: MoveFileProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsRepositoriesWorkspacesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsRepositoriesWorkspacesRequest>;

export type SetIamPolicyProjectsLocationsRepositoriesWorkspacesResponse =
  Policy;
export const SetIamPolicyProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsRepositoriesWorkspacesRequest,
  output: SetIamPolicyProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRepositoriesWorkspacesRequest {
  /** Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field. */
  orderBy?: string;
  /** Optional. Filter for the returned list. */
  filter?: string;
  /** Required. The repository in which to list workspaces. Must be in the format `projects/* /locations/* /repositories/*`. */
  parent: string;
  /** Optional. Page token received from a previous `ListWorkspaces` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkspaces`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Maximum number of workspaces to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/workspaces" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRepositoriesWorkspacesRequest>;

export type ListProjectsLocationsRepositoriesWorkspacesResponse =
  ListWorkspacesResponse;
export const ListProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListWorkspacesResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRepositoriesWorkspacesRequest,
  output: ListProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface FetchFileGitStatusesProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  name: string;
}

export const FetchFileGitStatusesProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}:fetchFileGitStatuses" }),
    svc,
  ) as unknown as Schema.Schema<FetchFileGitStatusesProjectsLocationsRepositoriesWorkspacesRequest>;

export type FetchFileGitStatusesProjectsLocationsRepositoriesWorkspacesResponse =
  FetchFileGitStatusesResponse;
export const FetchFileGitStatusesProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchFileGitStatusesResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchFileGitStatusesProjectsLocationsRepositoriesWorkspacesRequest,
  output: FetchFileGitStatusesProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  name: string;
}

export const GetProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRepositoriesWorkspacesRequest>;

export type GetProjectsLocationsRepositoriesWorkspacesResponse = Workspace;
export const GetProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Workspace;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRepositoriesWorkspacesRequest,
  output: GetProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PushProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  name: string;
  /** Request body */
  body?: PushGitCommitsRequest;
}

export const PushProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(PushGitCommitsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:push", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PushProjectsLocationsRepositoriesWorkspacesRequest>;

export type PushProjectsLocationsRepositoriesWorkspacesResponse =
  PushGitCommitsResponse;
export const PushProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PushGitCommitsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PushProjectsLocationsRepositoriesWorkspacesRequest,
  output: PushProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MakeDirectoryProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  workspace: string;
  /** Request body */
  body?: MakeDirectoryRequest;
}

export const MakeDirectoryProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workspace: Schema.String.pipe(T.HttpPath("workspace")),
    body: Schema.optional(MakeDirectoryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+workspace}:makeDirectory",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<MakeDirectoryProjectsLocationsRepositoriesWorkspacesRequest>;

export type MakeDirectoryProjectsLocationsRepositoriesWorkspacesResponse =
  MakeDirectoryResponse;
export const MakeDirectoryProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ MakeDirectoryResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MakeDirectoryProjectsLocationsRepositoriesWorkspacesRequest,
  output: MakeDirectoryProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReadFileProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  workspace: string;
  /** Required. The file's full path including filename, relative to the workspace root. */
  path?: string;
  /** Optional. The Git revision of the file to return. If left empty, the current contents of `path` will be returned. */
  revision?: string;
}

export const ReadFileProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workspace: Schema.String.pipe(T.HttpPath("workspace")),
    path: Schema.optional(Schema.String).pipe(T.HttpQuery("path")),
    revision: Schema.optional(Schema.String).pipe(T.HttpQuery("revision")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+workspace}:readFile" }),
    svc,
  ) as unknown as Schema.Schema<ReadFileProjectsLocationsRepositoriesWorkspacesRequest>;

export type ReadFileProjectsLocationsRepositoriesWorkspacesResponse =
  ReadFileResponse;
export const ReadFileProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ReadFileResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReadFileProjectsLocationsRepositoriesWorkspacesRequest,
  output: ReadFileProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetIamPolicyProjectsLocationsRepositoriesWorkspacesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsRepositoriesWorkspacesRequest>;

export type GetIamPolicyProjectsLocationsRepositoriesWorkspacesResponse =
  Policy;
export const GetIamPolicyProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsRepositoriesWorkspacesRequest,
  output: GetIamPolicyProjectsLocationsRepositoriesWorkspacesResponse,
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    workspaceId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("workspaceId"),
    ),
    body: Schema.optional(Workspace).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/workspaces",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsRepositoriesWorkspacesRequest>;

export type CreateProjectsLocationsRepositoriesWorkspacesResponse = Workspace;
export const CreateProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Workspace;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsRepositoriesWorkspacesRequest,
  output: CreateProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResetProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  name: string;
  /** Request body */
  body?: ResetWorkspaceChangesRequest;
}

export const ResetProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ResetWorkspaceChangesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:reset", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ResetProjectsLocationsRepositoriesWorkspacesRequest>;

export type ResetProjectsLocationsRepositoriesWorkspacesResponse =
  ResetWorkspaceChangesResponse;
export const ResetProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ResetWorkspaceChangesResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResetProjectsLocationsRepositoriesWorkspacesRequest,
  output: ResetProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MoveDirectoryProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  workspace: string;
  /** Request body */
  body?: MoveDirectoryRequest;
}

export const MoveDirectoryProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workspace: Schema.String.pipe(T.HttpPath("workspace")),
    body: Schema.optional(MoveDirectoryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+workspace}:moveDirectory",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<MoveDirectoryProjectsLocationsRepositoriesWorkspacesRequest>;

export type MoveDirectoryProjectsLocationsRepositoriesWorkspacesResponse =
  MoveDirectoryResponse;
export const MoveDirectoryProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ MoveDirectoryResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MoveDirectoryProjectsLocationsRepositoriesWorkspacesRequest,
  output: MoveDirectoryProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SearchFilesProjectsLocationsRepositoriesWorkspacesRequest {
  /** Optional. Maximum number of search results to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Optional filter for the returned list in filtering format. Filtering is only currently supported on the `path` field. See https://google.aip.dev/160 for details. */
  filter?: string;
  /** Required. The workspace's name. */
  workspace: string;
  /** Optional. Page token received from a previous `SearchFilesRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchFilesRequest`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
}

export const SearchFilesProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    workspace: Schema.String.pipe(T.HttpPath("workspace")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+workspace}:searchFiles" }),
    svc,
  ) as unknown as Schema.Schema<SearchFilesProjectsLocationsRepositoriesWorkspacesRequest>;

export type SearchFilesProjectsLocationsRepositoriesWorkspacesResponse =
  SearchFilesResponse;
export const SearchFilesProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchFilesResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchFilesProjectsLocationsRepositoriesWorkspacesRequest,
  output: SearchFilesProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace resource's name. */
  name: string;
}

export const DeleteProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsRepositoriesWorkspacesRequest>;

export type DeleteProjectsLocationsRepositoriesWorkspacesResponse = Empty;
export const DeleteProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRepositoriesWorkspacesRequest,
  output: DeleteProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RemoveFileProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  workspace: string;
  /** Request body */
  body?: RemoveFileRequest;
}

export const RemoveFileProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workspace: Schema.String.pipe(T.HttpPath("workspace")),
    body: Schema.optional(RemoveFileRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+workspace}:removeFile",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RemoveFileProjectsLocationsRepositoriesWorkspacesRequest>;

export type RemoveFileProjectsLocationsRepositoriesWorkspacesResponse =
  RemoveFileResponse;
export const RemoveFileProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemoveFileResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemoveFileProjectsLocationsRepositoriesWorkspacesRequest,
  output: RemoveFileProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsRepositoriesWorkspacesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsRepositoriesWorkspacesRequest>;

export type TestIamPermissionsProjectsLocationsRepositoriesWorkspacesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsRepositoriesWorkspacesRequest,
  output: TestIamPermissionsProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FetchGitAheadBehindProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  name: string;
  /** Optional. The name of the branch in the Git remote against which this workspace should be compared. If left unset, the repository's default branch name will be used. */
  remoteBranch?: string;
}

export const FetchGitAheadBehindProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    remoteBranch: Schema.optional(Schema.String).pipe(
      T.HttpQuery("remoteBranch"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}:fetchGitAheadBehind" }),
    svc,
  ) as unknown as Schema.Schema<FetchGitAheadBehindProjectsLocationsRepositoriesWorkspacesRequest>;

export type FetchGitAheadBehindProjectsLocationsRepositoriesWorkspacesResponse =
  FetchGitAheadBehindResponse;
export const FetchGitAheadBehindProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchGitAheadBehindResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchGitAheadBehindProjectsLocationsRepositoriesWorkspacesRequest,
  output: FetchGitAheadBehindProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden],
}));

export interface FetchFileDiffProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  workspace: string;
  /** Required. The file's full path including filename, relative to the workspace root. */
  path?: string;
}

export const FetchFileDiffProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workspace: Schema.String.pipe(T.HttpPath("workspace")),
    path: Schema.optional(Schema.String).pipe(T.HttpQuery("path")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+workspace}:fetchFileDiff" }),
    svc,
  ) as unknown as Schema.Schema<FetchFileDiffProjectsLocationsRepositoriesWorkspacesRequest>;

export type FetchFileDiffProjectsLocationsRepositoriesWorkspacesResponse =
  FetchFileDiffResponse;
export const FetchFileDiffProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchFileDiffResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchFileDiffProjectsLocationsRepositoriesWorkspacesRequest,
  output: FetchFileDiffProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden],
}));

export interface QueryDirectoryContentsProjectsLocationsRepositoriesWorkspacesRequest {
  /** Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. The directory's full path including directory name, relative to the workspace root. If left unset, the workspace root is used. */
  path?: string;
  /** Optional. Page token received from a previous `QueryDirectoryContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryDirectoryContents`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The workspace's name. */
  workspace: string;
  /** Optional. Specifies the metadata to return for each directory entry. If unspecified, the default is `DIRECTORY_CONTENTS_VIEW_BASIC`. Currently the `DIRECTORY_CONTENTS_VIEW_METADATA` view is not supported by CMEK-protected workspaces. */
  view?:
    | "DIRECTORY_CONTENTS_VIEW_UNSPECIFIED"
    | "DIRECTORY_CONTENTS_VIEW_BASIC"
    | "DIRECTORY_CONTENTS_VIEW_METADATA"
    | (string & {});
}

export const QueryDirectoryContentsProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    path: Schema.optional(Schema.String).pipe(T.HttpQuery("path")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    workspace: Schema.String.pipe(T.HttpPath("workspace")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/{+workspace}:queryDirectoryContents",
    }),
    svc,
  ) as unknown as Schema.Schema<QueryDirectoryContentsProjectsLocationsRepositoriesWorkspacesRequest>;

export type QueryDirectoryContentsProjectsLocationsRepositoriesWorkspacesResponse =
  QueryDirectoryContentsResponse;
export const QueryDirectoryContentsProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ QueryDirectoryContentsResponse;

export type QueryDirectoryContentsProjectsLocationsRepositoriesWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the contents of a given Workspace directory. */
export const queryDirectoryContentsProjectsLocationsRepositoriesWorkspaces: API.PaginatedOperationMethod<
  QueryDirectoryContentsProjectsLocationsRepositoriesWorkspacesRequest,
  QueryDirectoryContentsProjectsLocationsRepositoriesWorkspacesResponse,
  QueryDirectoryContentsProjectsLocationsRepositoriesWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: QueryDirectoryContentsProjectsLocationsRepositoriesWorkspacesRequest,
  output: QueryDirectoryContentsProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface InstallNpmPackagesProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  workspace: string;
  /** Request body */
  body?: InstallNpmPackagesRequest;
}

export const InstallNpmPackagesProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workspace: Schema.String.pipe(T.HttpPath("workspace")),
    body: Schema.optional(InstallNpmPackagesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+workspace}:installNpmPackages",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InstallNpmPackagesProjectsLocationsRepositoriesWorkspacesRequest>;

export type InstallNpmPackagesProjectsLocationsRepositoriesWorkspacesResponse =
  InstallNpmPackagesResponse;
export const InstallNpmPackagesProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ InstallNpmPackagesResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InstallNpmPackagesProjectsLocationsRepositoriesWorkspacesRequest,
  output: InstallNpmPackagesProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RemoveDirectoryProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  workspace: string;
  /** Request body */
  body?: RemoveDirectoryRequest;
}

export const RemoveDirectoryProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workspace: Schema.String.pipe(T.HttpPath("workspace")),
    body: Schema.optional(RemoveDirectoryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+workspace}:removeDirectory",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RemoveDirectoryProjectsLocationsRepositoriesWorkspacesRequest>;

export type RemoveDirectoryProjectsLocationsRepositoriesWorkspacesResponse =
  RemoveDirectoryResponse;
export const RemoveDirectoryProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemoveDirectoryResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemoveDirectoryProjectsLocationsRepositoriesWorkspacesRequest,
  output: RemoveDirectoryProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CommitProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  name: string;
  /** Request body */
  body?: CommitWorkspaceChangesRequest;
}

export const CommitProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CommitWorkspaceChangesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:commit", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CommitProjectsLocationsRepositoriesWorkspacesRequest>;

export type CommitProjectsLocationsRepositoriesWorkspacesResponse =
  CommitWorkspaceChangesResponse;
export const CommitProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CommitWorkspaceChangesResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CommitProjectsLocationsRepositoriesWorkspacesRequest,
  output: CommitProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PullProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  name: string;
  /** Request body */
  body?: PullGitCommitsRequest;
}

export const PullProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(PullGitCommitsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:pull", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PullProjectsLocationsRepositoriesWorkspacesRequest>;

export type PullProjectsLocationsRepositoriesWorkspacesResponse =
  PullGitCommitsResponse;
export const PullProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PullGitCommitsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PullProjectsLocationsRepositoriesWorkspacesRequest,
  output: PullProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface WriteFileProjectsLocationsRepositoriesWorkspacesRequest {
  /** Required. The workspace's name. */
  workspace: string;
  /** Request body */
  body?: WriteFileRequest;
}

export const WriteFileProjectsLocationsRepositoriesWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workspace: Schema.String.pipe(T.HttpPath("workspace")),
    body: Schema.optional(WriteFileRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+workspace}:writeFile",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<WriteFileProjectsLocationsRepositoriesWorkspacesRequest>;

export type WriteFileProjectsLocationsRepositoriesWorkspacesResponse =
  WriteFileResponse;
export const WriteFileProjectsLocationsRepositoriesWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ WriteFileResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: WriteFileProjectsLocationsRepositoriesWorkspacesRequest,
  output: WriteFileProjectsLocationsRepositoriesWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsRepositoriesWorkflowInvocationsRequest {
  /** Required. The repository in which to create the workflow invocation. Must be in the format `projects/* /locations/* /repositories/*`. */
  parent: string;
  /** Request body */
  body?: WorkflowInvocation;
}

export const CreateProjectsLocationsRepositoriesWorkflowInvocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(WorkflowInvocation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/workflowInvocations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsRepositoriesWorkflowInvocationsRequest>;

export type CreateProjectsLocationsRepositoriesWorkflowInvocationsResponse =
  WorkflowInvocation;
export const CreateProjectsLocationsRepositoriesWorkflowInvocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WorkflowInvocation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsRepositoriesWorkflowInvocationsRequest,
  output: CreateProjectsLocationsRepositoriesWorkflowInvocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsRepositoriesWorkflowInvocationsRequest {
  /** Required. The workflow invocation resource's name. */
  name: string;
}

export const DeleteProjectsLocationsRepositoriesWorkflowInvocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsRepositoriesWorkflowInvocationsRequest>;

export type DeleteProjectsLocationsRepositoriesWorkflowInvocationsResponse =
  Empty;
export const DeleteProjectsLocationsRepositoriesWorkflowInvocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRepositoriesWorkflowInvocationsRequest,
  output: DeleteProjectsLocationsRepositoriesWorkflowInvocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface QueryProjectsLocationsRepositoriesWorkflowInvocationsRequest {
  /** Required. The workflow invocation's name. */
  name: string;
  /** Optional. Maximum number of workflow invocations to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Page token received from a previous `QueryWorkflowInvocationActions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryWorkflowInvocationActions`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
}

export const QueryProjectsLocationsRepositoriesWorkflowInvocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}:query" }),
    svc,
  ) as unknown as Schema.Schema<QueryProjectsLocationsRepositoriesWorkflowInvocationsRequest>;

export type QueryProjectsLocationsRepositoriesWorkflowInvocationsResponse =
  QueryWorkflowInvocationActionsResponse;
export const QueryProjectsLocationsRepositoriesWorkflowInvocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ QueryWorkflowInvocationActionsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: QueryProjectsLocationsRepositoriesWorkflowInvocationsRequest,
  output: QueryProjectsLocationsRepositoriesWorkflowInvocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsRepositoriesWorkflowInvocationsRequest {
  /** Optional. Maximum number of workflow invocations to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Page token received from a previous `ListWorkflowInvocations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkflowInvocations`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The parent resource of the WorkflowInvocation type. Must be in the format `projects/* /locations/* /repositories/*`. */
  parent: string;
  /** Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field. */
  orderBy?: string;
  /** Optional. Filter for the returned list. */
  filter?: string;
}

export const ListProjectsLocationsRepositoriesWorkflowInvocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/workflowInvocations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRepositoriesWorkflowInvocationsRequest>;

export type ListProjectsLocationsRepositoriesWorkflowInvocationsResponse =
  ListWorkflowInvocationsResponse;
export const ListProjectsLocationsRepositoriesWorkflowInvocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListWorkflowInvocationsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRepositoriesWorkflowInvocationsRequest,
  output: ListProjectsLocationsRepositoriesWorkflowInvocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsRepositoriesWorkflowInvocationsRequest {
  /** Required. The workflow invocation resource's name. */
  name: string;
}

export const GetProjectsLocationsRepositoriesWorkflowInvocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRepositoriesWorkflowInvocationsRequest>;

export type GetProjectsLocationsRepositoriesWorkflowInvocationsResponse =
  WorkflowInvocation;
export const GetProjectsLocationsRepositoriesWorkflowInvocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WorkflowInvocation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRepositoriesWorkflowInvocationsRequest,
  output: GetProjectsLocationsRepositoriesWorkflowInvocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelProjectsLocationsRepositoriesWorkflowInvocationsRequest {
  /** Required. The workflow invocation resource's name. */
  name: string;
  /** Request body */
  body?: CancelWorkflowInvocationRequest;
}

export const CancelProjectsLocationsRepositoriesWorkflowInvocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelWorkflowInvocationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsRepositoriesWorkflowInvocationsRequest>;

export type CancelProjectsLocationsRepositoriesWorkflowInvocationsResponse =
  CancelWorkflowInvocationResponse;
export const CancelProjectsLocationsRepositoriesWorkflowInvocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CancelWorkflowInvocationResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsRepositoriesWorkflowInvocationsRequest,
  output: CancelProjectsLocationsRepositoriesWorkflowInvocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsRepositoriesCompilationResultsRequest {
  /** Required. The compilation result's name. */
  name: string;
}

export const GetProjectsLocationsRepositoriesCompilationResultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRepositoriesCompilationResultsRequest>;

export type GetProjectsLocationsRepositoriesCompilationResultsResponse =
  CompilationResult;
export const GetProjectsLocationsRepositoriesCompilationResultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CompilationResult;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRepositoriesCompilationResultsRequest,
  output: GetProjectsLocationsRepositoriesCompilationResultsResponse,
  errors: [NotFound, Forbidden],
}));

export interface QueryProjectsLocationsRepositoriesCompilationResultsRequest {
  /** Optional. Page token received from a previous `QueryCompilationResultActions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryCompilationResultActions`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Optional filter for the returned list. Filtering is only currently supported on the `file_path` field. */
  filter?: string;
  /** Required. The compilation result's name. */
  name: string;
  /** Optional. Maximum number of compilation results to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
}

export const QueryProjectsLocationsRepositoriesCompilationResultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}:query" }),
    svc,
  ) as unknown as Schema.Schema<QueryProjectsLocationsRepositoriesCompilationResultsRequest>;

export type QueryProjectsLocationsRepositoriesCompilationResultsResponse =
  QueryCompilationResultActionsResponse;
export const QueryProjectsLocationsRepositoriesCompilationResultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ QueryCompilationResultActionsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: QueryProjectsLocationsRepositoriesCompilationResultsRequest,
  output: QueryProjectsLocationsRepositoriesCompilationResultsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsRepositoriesCompilationResultsRequest {
  /** Optional. Page token received from a previous `ListCompilationResults` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCompilationResults`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Maximum number of compilation results to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. This field only supports ordering by `name` and `create_time`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field. */
  orderBy?: string;
  /** Optional. Filter for the returned list. */
  filter?: string;
  /** Required. The repository in which to list compilation results. Must be in the format `projects/* /locations/* /repositories/*`. */
  parent: string;
}

export const ListProjectsLocationsRepositoriesCompilationResultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/compilationResults" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRepositoriesCompilationResultsRequest>;

export type ListProjectsLocationsRepositoriesCompilationResultsResponse =
  ListCompilationResultsResponse;
export const ListProjectsLocationsRepositoriesCompilationResultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCompilationResultsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRepositoriesCompilationResultsRequest,
  output: ListProjectsLocationsRepositoriesCompilationResultsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsRepositoriesCompilationResultsRequest {
  /** Required. The repository in which to create the compilation result. Must be in the format `projects/* /locations/* /repositories/*`. */
  parent: string;
  /** Request body */
  body?: CompilationResult;
}

export const CreateProjectsLocationsRepositoriesCompilationResultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(CompilationResult).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/compilationResults",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsRepositoriesCompilationResultsRequest>;

export type CreateProjectsLocationsRepositoriesCompilationResultsResponse =
  CompilationResult;
export const CreateProjectsLocationsRepositoriesCompilationResultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CompilationResult;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsRepositoriesCompilationResultsRequest,
  output: CreateProjectsLocationsRepositoriesCompilationResultsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRepositoriesWorkflowConfigsRequest {
  /** Optional. Page token received from a previous `ListWorkflowConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkflowConfigs`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The repository in which to list workflow configs. Must be in the format `projects/* /locations/* /repositories/*`. */
  parent: string;
  /** Optional. Maximum number of workflow configs to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsRepositoriesWorkflowConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/workflowConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRepositoriesWorkflowConfigsRequest>;

export type ListProjectsLocationsRepositoriesWorkflowConfigsResponse =
  ListWorkflowConfigsResponse;
export const ListProjectsLocationsRepositoriesWorkflowConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListWorkflowConfigsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRepositoriesWorkflowConfigsRequest,
  output: ListProjectsLocationsRepositoriesWorkflowConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsRepositoriesWorkflowConfigsRequest {
  /** Required. The workflow config's name. */
  name: string;
}

export const GetProjectsLocationsRepositoriesWorkflowConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRepositoriesWorkflowConfigsRequest>;

export type GetProjectsLocationsRepositoriesWorkflowConfigsResponse =
  WorkflowConfig;
export const GetProjectsLocationsRepositoriesWorkflowConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WorkflowConfig;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRepositoriesWorkflowConfigsRequest,
  output: GetProjectsLocationsRepositoriesWorkflowConfigsResponse,
  errors: [NotFound, Forbidden],
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    workflowConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("workflowConfigId"),
    ),
    body: Schema.optional(WorkflowConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/workflowConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsRepositoriesWorkflowConfigsRequest>;

export type CreateProjectsLocationsRepositoriesWorkflowConfigsResponse =
  WorkflowConfig;
export const CreateProjectsLocationsRepositoriesWorkflowConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WorkflowConfig;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsRepositoriesWorkflowConfigsRequest,
  output: CreateProjectsLocationsRepositoriesWorkflowConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsRepositoriesWorkflowConfigsRequest {
  /** Optional. Specifies the fields to be updated in the workflow config. If left unset, all fields will be updated. */
  updateMask?: string;
  /** Identifier. The workflow config's name. */
  name: string;
  /** Request body */
  body?: WorkflowConfig;
}

export const PatchProjectsLocationsRepositoriesWorkflowConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(WorkflowConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsRepositoriesWorkflowConfigsRequest>;

export type PatchProjectsLocationsRepositoriesWorkflowConfigsResponse =
  WorkflowConfig;
export const PatchProjectsLocationsRepositoriesWorkflowConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WorkflowConfig;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsRepositoriesWorkflowConfigsRequest,
  output: PatchProjectsLocationsRepositoriesWorkflowConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsRepositoriesWorkflowConfigsRequest {
  /** Required. The workflow config's name. */
  name: string;
}

export const DeleteProjectsLocationsRepositoriesWorkflowConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsRepositoriesWorkflowConfigsRequest>;

export type DeleteProjectsLocationsRepositoriesWorkflowConfigsResponse = Empty;
export const DeleteProjectsLocationsRepositoriesWorkflowConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsRepositoriesWorkflowConfigsRequest,
  output: DeleteProjectsLocationsRepositoriesWorkflowConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list filter. */
  filter?: string;
  /** The name of the operation's parent resource. */
  name: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list page size. */
  pageSize?: number;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}/operations" }),
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
    T.Http({ method: "POST", path: "v1beta1/{+name}:cancel", hasBody: true }),
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

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
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

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
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

export interface DeleteProjectsLocationsTeamFoldersRequest {
  /** Required. The TeamFolder's name. */
  name: string;
}

export const DeleteProjectsLocationsTeamFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsTeamFoldersRequest>;

export type DeleteProjectsLocationsTeamFoldersResponse = Empty;
export const DeleteProjectsLocationsTeamFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsTeamFoldersRequest>;

export type TestIamPermissionsProjectsLocationsTeamFoldersResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsTeamFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsTeamFoldersRequest,
  output: TestIamPermissionsProjectsLocationsTeamFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsTeamFoldersRequest {
  /** Identifier. The TeamFolder's name. */
  name: string;
  /** Optional. Specifies the fields to be updated in the Folder. If left unset, all fields will be updated. */
  updateMask?: string;
  /** Request body */
  body?: TeamFolder;
}

export const PatchProjectsLocationsTeamFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(TeamFolder).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsTeamFoldersRequest>;

export type PatchProjectsLocationsTeamFoldersResponse = TeamFolder;
export const PatchProjectsLocationsTeamFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ TeamFolder;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsTeamFoldersRequest,
  output: PatchProjectsLocationsTeamFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsTeamFoldersRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsTeamFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsTeamFoldersRequest>;

export type SetIamPolicyProjectsLocationsTeamFoldersResponse = Policy;
export const SetIamPolicyProjectsLocationsTeamFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsTeamFoldersRequest,
  output: SetIamPolicyProjectsLocationsTeamFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SearchProjectsLocationsTeamFoldersRequest {
  /** Optional. Field to additionally sort results by. Supported keywords: `display_name` (default), `create_time`, `last_modified_time`. Examples: * `orderBy="display_name"` * `orderBy="display_name desc"` */
  orderBy?: string;
  /** Optional. Optional filtering for the returned list. Filtering is currently only supported on the `display_name` field. Example: * `filter="display_name="MyFolder""` */
  filter?: string;
  /** Required. Location in which to query TeamFolders. Format: `projects/* /locations/*`. */
  location: string;
  /** Optional. Page token received from a previous `SearchTeamFolders` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchTeamFolders`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Maximum number of TeamFolders to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
}

export const SearchProjectsLocationsTeamFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    location: Schema.String.pipe(T.HttpPath("location")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+location}/teamFolders:search" }),
    svc,
  ) as unknown as Schema.Schema<SearchProjectsLocationsTeamFoldersRequest>;

export type SearchProjectsLocationsTeamFoldersResponse =
  SearchTeamFoldersResponse;
export const SearchProjectsLocationsTeamFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchTeamFoldersResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchProjectsLocationsTeamFoldersRequest,
  output: SearchProjectsLocationsTeamFoldersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsTeamFoldersRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsTeamFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsTeamFoldersRequest>;

export type GetIamPolicyProjectsLocationsTeamFoldersResponse = Policy;
export const GetIamPolicyProjectsLocationsTeamFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsTeamFoldersRequest,
  output: GetIamPolicyProjectsLocationsTeamFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsTeamFoldersRequest {
  /** Deprecated: This field is not used. The resource name is generated automatically. The ID to use for the TeamFolder, which will become the final component of the TeamFolder's resource name. */
  teamFolderId?: string;
  /** Required. The location in which to create the TeamFolder. Must be in the format `projects/* /locations/*`. */
  parent: string;
  /** Request body */
  body?: TeamFolder;
}

export const CreateProjectsLocationsTeamFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    teamFolderId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("teamFolderId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(TeamFolder).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/teamFolders",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsTeamFoldersRequest>;

export type CreateProjectsLocationsTeamFoldersResponse = TeamFolder;
export const CreateProjectsLocationsTeamFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ TeamFolder;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsTeamFoldersRequest,
  output: CreateProjectsLocationsTeamFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsTeamFoldersRequest {
  /** Required. The TeamFolder's name. */
  name: string;
}

export const GetProjectsLocationsTeamFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsTeamFoldersRequest>;

export type GetProjectsLocationsTeamFoldersResponse = TeamFolder;
export const GetProjectsLocationsTeamFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ TeamFolder;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsTeamFoldersRequest,
  output: GetProjectsLocationsTeamFoldersResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteTreeProjectsLocationsTeamFoldersRequest {
  /** Required. The TeamFolder's name. Format: projects/{project}/locations/{location}/teamFolders/{team_folder} */
  name: string;
  /** Request body */
  body?: DeleteTeamFolderTreeRequest;
}

export const DeleteTreeProjectsLocationsTeamFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DeleteTeamFolderTreeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:deleteTree",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteTreeProjectsLocationsTeamFoldersRequest>;

export type DeleteTreeProjectsLocationsTeamFoldersResponse = Operation;
export const DeleteTreeProjectsLocationsTeamFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteTreeProjectsLocationsTeamFoldersRequest,
  output: DeleteTreeProjectsLocationsTeamFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface QueryContentsProjectsLocationsTeamFoldersRequest {
  /** Optional. Field to additionally sort results by. Will order Folders before Repositories, and then by `order_by` in ascending order. Supported keywords: `display_name` (default), `create_time`, last_modified_time. Examples: * `orderBy="display_name"` * `orderBy="display_name desc"` */
  orderBy?: string;
  /** Optional. Optional filtering for the returned list. Filtering is currently only supported on the `display_name` field. Example: * `filter="display_name="MyFolder""` */
  filter?: string;
  /** Required. Resource name of the TeamFolder to list contents for. Format: `projects/* /locations/* /teamFolders/*`. */
  teamFolder: string;
  /** Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Page token received from a previous `QueryTeamFolderContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryTeamFolderContents`, with the exception of `page_size`, must match the call that provided the page token. */
  pageToken?: string;
}

export const QueryContentsProjectsLocationsTeamFoldersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    teamFolder: Schema.String.pipe(T.HttpPath("teamFolder")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+teamFolder}:queryContents" }),
    svc,
  ) as unknown as Schema.Schema<QueryContentsProjectsLocationsTeamFoldersRequest>;

export type QueryContentsProjectsLocationsTeamFoldersResponse =
  QueryTeamFolderContentsResponse;
export const QueryContentsProjectsLocationsTeamFoldersResponse =
  /*@__PURE__*/ /*#__PURE__*/ QueryTeamFolderContentsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: QueryContentsProjectsLocationsTeamFoldersRequest,
  output: QueryContentsProjectsLocationsTeamFoldersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
