// ==========================================================================
// Google Cloud Data Catalog API (datacatalog v1)
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
  name: "datacatalog",
  version: "v1",
  rootUrl: "https://datacatalog.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec {
  /** Looker specific column type of this column. */
  type?:
    | "LOOKER_COLUMN_TYPE_UNSPECIFIED"
    | "DIMENSION"
    | "DIMENSION_GROUP"
    | "FILTER"
    | "MEASURE"
    | "PARAMETER"
    | (string & {});
}

export const GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec: Schema.Schema<GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec",
  });

export interface GoogleCloudDatacatalogV1ColumnSchemaFieldElementType {
  /** Required. The type of a field element. See ColumnSchema.type. */
  type?: string;
}

export const GoogleCloudDatacatalogV1ColumnSchemaFieldElementType: Schema.Schema<GoogleCloudDatacatalogV1ColumnSchemaFieldElementType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatacatalogV1ColumnSchemaFieldElementType",
  });

export interface GoogleCloudDatacatalogV1ColumnSchema {
  /** Optional. A column's mode indicates whether values in this column are required, nullable, or repeated. Only `NULLABLE`, `REQUIRED`, and `REPEATED` values are supported. Default mode is `NULLABLE`. */
  mode?: string;
  /** Optional. Schema of sub-columns. A column can have zero or more sub-columns. */
  subcolumns?: ReadonlyArray<GoogleCloudDatacatalogV1ColumnSchema>;
  /** Optional. Garbage collection policy for the column or column family. Applies to systems like Cloud Bigtable. */
  gcRule?: string;
  /** Optional. Default value for the column. */
  defaultValue?: string;
  /** Optional. Ordinal position */
  ordinalPosition?: number;
  /** Optional. Most important inclusion of this column. */
  highestIndexingType?:
    | "INDEXING_TYPE_UNSPECIFIED"
    | "INDEXING_TYPE_NONE"
    | "INDEXING_TYPE_NON_UNIQUE"
    | "INDEXING_TYPE_UNIQUE"
    | "INDEXING_TYPE_PRIMARY_KEY"
    | (string & {});
  /** Required. Type of the column. Must be a UTF-8 string with the maximum size of 128 bytes. */
  type?: string;
  /** Optional. Description of the column. Default value is an empty string. The description must be a UTF-8 string with the maximum size of 2000 bytes. */
  description?: string;
  /** Looker specific column info of this column. */
  lookerColumnSpec?: GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec;
  /** Required. Name of the column. Must be a UTF-8 string without dots (.). The maximum size is 64 bytes. */
  column?: string;
  /** Optional. The subtype of the RANGE, if the type of this field is RANGE. If the type is RANGE, this field is required. Possible values for the field element type of a RANGE include: * DATE * DATETIME * TIMESTAMP */
  rangeElementType?: GoogleCloudDatacatalogV1ColumnSchemaFieldElementType;
}

export const GoogleCloudDatacatalogV1ColumnSchema: Schema.Schema<GoogleCloudDatacatalogV1ColumnSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      mode: Schema.optional(Schema.String),
      subcolumns: Schema.optional(
        Schema.Array(GoogleCloudDatacatalogV1ColumnSchema),
      ),
      gcRule: Schema.optional(Schema.String),
      defaultValue: Schema.optional(Schema.String),
      ordinalPosition: Schema.optional(Schema.Number),
      highestIndexingType: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      lookerColumnSpec: Schema.optional(
        GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec,
      ),
      column: Schema.optional(Schema.String),
      rangeElementType: Schema.optional(
        GoogleCloudDatacatalogV1ColumnSchemaFieldElementType,
      ),
    }),
  ).annotate({
    identifier: "GoogleCloudDatacatalogV1ColumnSchema",
  }) as any as Schema.Schema<GoogleCloudDatacatalogV1ColumnSchema>;

export interface GoogleCloudDatacatalogV1TagFieldEnumValue {
  /** The display name of the enum value. */
  displayName?: string;
}

export const GoogleCloudDatacatalogV1TagFieldEnumValue: Schema.Schema<GoogleCloudDatacatalogV1TagFieldEnumValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1TagFieldEnumValue" });

export interface GoogleCloudDatacatalogV1UsageStats {
  /** The number of failed attempts to use the underlying entry. */
  totalFailures?: number;
  /** The number of successful uses of the underlying entry. */
  totalCompletions?: number;
  /** The number of cancelled attempts to use the underlying entry. */
  totalCancellations?: number;
  /** Total time spent only on successful uses, in milliseconds. */
  totalExecutionTimeForCompletionsMillis?: number;
}

export const GoogleCloudDatacatalogV1UsageStats: Schema.Schema<GoogleCloudDatacatalogV1UsageStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalFailures: Schema.optional(Schema.Number),
    totalCompletions: Schema.optional(Schema.Number),
    totalCancellations: Schema.optional(Schema.Number),
    totalExecutionTimeForCompletionsMillis: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1UsageStats" });

export interface GoogleCloudDatacatalogV1CommonUsageStats {
  /** View count in source system. */
  viewCount?: string;
}

export const GoogleCloudDatacatalogV1CommonUsageStats: Schema.Schema<GoogleCloudDatacatalogV1CommonUsageStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    viewCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1CommonUsageStats" });

export interface GoogleCloudDatacatalogV1UsageSignal {
  /** Output only. BigQuery usage statistics over each of the predefined time ranges. Supported time ranges are `{"24H", "7D", "30D"}`. */
  usageWithinTimeRange?: Record<string, GoogleCloudDatacatalogV1UsageStats>;
  /** The end timestamp of the duration of usage statistics. */
  updateTime?: string;
  /** Common usage statistics over each of the predefined time ranges. Supported time ranges are `{"24H", "7D", "30D", "Lifetime"}`. */
  commonUsageWithinTimeRange?: Record<
    string,
    GoogleCloudDatacatalogV1CommonUsageStats
  >;
  /** Favorite count in the source system. */
  favoriteCount?: string;
}

export const GoogleCloudDatacatalogV1UsageSignal: Schema.Schema<GoogleCloudDatacatalogV1UsageSignal> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    usageWithinTimeRange: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudDatacatalogV1UsageStats),
    ),
    updateTime: Schema.optional(Schema.String),
    commonUsageWithinTimeRange: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudDatacatalogV1CommonUsageStats),
    ),
    favoriteCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1UsageSignal" });

export interface GoogleCloudDatacatalogV1GraphSpecGraphElementTableProperty {
  /** Required. Property name. */
  name?: string;
  /** Required. Property data type. */
  type?: string;
}

export const GoogleCloudDatacatalogV1GraphSpecGraphElementTableProperty: Schema.Schema<GoogleCloudDatacatalogV1GraphSpecGraphElementTableProperty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatacatalogV1GraphSpecGraphElementTableProperty",
  });

export interface GoogleCloudDatacatalogV1BigQueryDateShardedSpec {
  /** Output only. The Data Catalog resource name of the dataset entry the current table belongs to. For example: `projects/{PROJECT_ID}/locations/{LOCATION}/entrygroups/{ENTRY_GROUP_ID}/entries/{ENTRY_ID}`. */
  dataset?: string;
  /** Output only. The table name prefix of the shards. The name of any given shard is `[table_prefix]YYYYMMDD`. For example, for the `MyTable20180101` shard, the `table_prefix` is `MyTable`. */
  tablePrefix?: string;
  /** Output only. Total number of shards. */
  shardCount?: string;
  /** Output only. BigQuery resource name of the latest shard. */
  latestShardResource?: string;
}

export const GoogleCloudDatacatalogV1BigQueryDateShardedSpec: Schema.Schema<GoogleCloudDatacatalogV1BigQueryDateShardedSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
    tablePrefix: Schema.optional(Schema.String),
    shardCount: Schema.optional(Schema.String),
    latestShardResource: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatacatalogV1BigQueryDateShardedSpec",
  });

export interface GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema {
  /** Thrift IDL source of the schema. */
  text?: string;
}

export const GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema: Schema.Schema<GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema",
  });

export interface GoogleCloudDatacatalogV1DataplexExternalTable {
  /** Google Cloud resource name of the external table. */
  googleCloudResource?: string;
  /** Service in which the external table is registered. */
  system?:
    | "INTEGRATED_SYSTEM_UNSPECIFIED"
    | "BIGQUERY"
    | "CLOUD_PUBSUB"
    | "DATAPROC_METASTORE"
    | "DATAPLEX"
    | "CLOUD_SPANNER"
    | "CLOUD_BIGTABLE"
    | "CLOUD_SQL"
    | "LOOKER"
    | "VERTEX_AI"
    | (string & {});
  /** Fully qualified name (FQN) of the external table. */
  fullyQualifiedName?: string;
  /** Name of the Data Catalog entry representing the external table. */
  dataCatalogEntry?: string;
}

export const GoogleCloudDatacatalogV1DataplexExternalTable: Schema.Schema<GoogleCloudDatacatalogV1DataplexExternalTable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    googleCloudResource: Schema.optional(Schema.String),
    system: Schema.optional(Schema.String),
    fullyQualifiedName: Schema.optional(Schema.String),
    dataCatalogEntry: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1DataplexExternalTable" });

export interface GoogleCloudDatacatalogV1SetConfigRequest {
  /** Opt-in status for the migration of Tag Templates to Dataplex Universal Catalog. */
  tagTemplateMigration?:
    | "TAG_TEMPLATE_MIGRATION_UNSPECIFIED"
    | "TAG_TEMPLATE_MIGRATION_ENABLED"
    | "TAG_TEMPLATE_MIGRATION_DISABLED"
    | (string & {});
  /** Opt-in status for the UI switch to Dataplex Universal Catalog. */
  catalogUiExperience?:
    | "CATALOG_UI_EXPERIENCE_UNSPECIFIED"
    | "CATALOG_UI_EXPERIENCE_ENABLED"
    | "CATALOG_UI_EXPERIENCE_DISABLED"
    | (string & {});
}

export const GoogleCloudDatacatalogV1SetConfigRequest: Schema.Schema<GoogleCloudDatacatalogV1SetConfigRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tagTemplateMigration: Schema.optional(Schema.String),
    catalogUiExperience: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1SetConfigRequest" });

export interface GoogleCloudDatacatalogV1PhysicalSchemaCsvSchema {}

export const GoogleCloudDatacatalogV1PhysicalSchemaCsvSchema: Schema.Schema<GoogleCloudDatacatalogV1PhysicalSchemaCsvSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDatacatalogV1PhysicalSchemaCsvSchema",
  });

export interface GoogleCloudDatacatalogV1VertexModelSourceInfo {
  /** If this Model is copy of another Model. If true then source_type pertains to the original. */
  copy?: boolean;
  /** Type of the model source. */
  sourceType?:
    | "MODEL_SOURCE_TYPE_UNSPECIFIED"
    | "AUTOML"
    | "CUSTOM"
    | "BQML"
    | "MODEL_GARDEN"
    | "GENIE"
    | "CUSTOM_TEXT_EMBEDDING"
    | "MARKETPLACE"
    | (string & {});
}

export const GoogleCloudDatacatalogV1VertexModelSourceInfo: Schema.Schema<GoogleCloudDatacatalogV1VertexModelSourceInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    copy: Schema.optional(Schema.Boolean),
    sourceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1VertexModelSourceInfo" });

export interface GoogleCloudDatacatalogV1VertexModelSpec {
  /** The description of this version. */
  versionDescription?: string;
  /** The version ID of the model. */
  versionId?: string;
  /** Source of a Vertex model. */
  vertexModelSourceInfo?: GoogleCloudDatacatalogV1VertexModelSourceInfo;
  /** User provided version aliases so that a model version can be referenced via alias */
  versionAliases?: ReadonlyArray<string>;
  /** URI of the Docker image to be used as the custom container for serving predictions. */
  containerImageUri?: string;
}

export const GoogleCloudDatacatalogV1VertexModelSpec: Schema.Schema<GoogleCloudDatacatalogV1VertexModelSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionDescription: Schema.optional(Schema.String),
    versionId: Schema.optional(Schema.String),
    vertexModelSourceInfo: Schema.optional(
      GoogleCloudDatacatalogV1VertexModelSourceInfo,
    ),
    versionAliases: Schema.optional(Schema.Array(Schema.String)),
    containerImageUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1VertexModelSpec" });

export interface GoogleCloudDatacatalogV1LookerSystemSpec {
  /** Name of the parent Looker Instance. Empty if it does not exist. */
  parentInstanceDisplayName?: string;
  /** Name of the parent Model. Empty if it does not exist. */
  parentModelDisplayName?: string;
  /** ID of the parent View. Empty if it does not exist. */
  parentViewId?: string;
  /** Name of the parent View. Empty if it does not exist. */
  parentViewDisplayName?: string;
  /** ID of the parent Looker Instance. Empty if it does not exist. Example value: `someinstance.looker.com` */
  parentInstanceId?: string;
  /** ID of the parent Model. Empty if it does not exist. */
  parentModelId?: string;
}

export const GoogleCloudDatacatalogV1LookerSystemSpec: Schema.Schema<GoogleCloudDatacatalogV1LookerSystemSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parentInstanceDisplayName: Schema.optional(Schema.String),
    parentModelDisplayName: Schema.optional(Schema.String),
    parentViewId: Schema.optional(Schema.String),
    parentViewDisplayName: Schema.optional(Schema.String),
    parentInstanceId: Schema.optional(Schema.String),
    parentModelId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1LookerSystemSpec" });

export interface GoogleCloudDatacatalogV1ViewSpec {
  /** Output only. The query that defines the table view. */
  viewQuery?: string;
}

export const GoogleCloudDatacatalogV1ViewSpec: Schema.Schema<GoogleCloudDatacatalogV1ViewSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    viewQuery: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1ViewSpec" });

export interface GoogleCloudDatacatalogV1TableSpec {
  /** Output only. If the table is date-sharded, that is, it matches the `[prefix]YYYYMMDD` name pattern, this field is the Data Catalog resource name of the date-sharded grouped entry. For example: `projects/{PROJECT_ID}/locations/{LOCATION}/entrygroups/{ENTRY_GROUP_ID}/entries/{ENTRY_ID}`. Otherwise, `grouped_entry` is empty. */
  groupedEntry?: string;
}

export const GoogleCloudDatacatalogV1TableSpec: Schema.Schema<GoogleCloudDatacatalogV1TableSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupedEntry: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1TableSpec" });

export interface GoogleCloudDatacatalogV1BigQueryTableSpec {
  /** Output only. The table source type. */
  tableSourceType?:
    | "TABLE_SOURCE_TYPE_UNSPECIFIED"
    | "BIGQUERY_VIEW"
    | "BIGQUERY_TABLE"
    | "BIGQUERY_MATERIALIZED_VIEW"
    | (string & {});
  /** Table view specification. Populated only if the `table_source_type` is `BIGQUERY_VIEW`. */
  viewSpec?: GoogleCloudDatacatalogV1ViewSpec;
  /** Specification of a BigQuery table. Populated only if the `table_source_type` is `BIGQUERY_TABLE`. */
  tableSpec?: GoogleCloudDatacatalogV1TableSpec;
}

export const GoogleCloudDatacatalogV1BigQueryTableSpec: Schema.Schema<GoogleCloudDatacatalogV1BigQueryTableSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tableSourceType: Schema.optional(Schema.String),
    viewSpec: Schema.optional(GoogleCloudDatacatalogV1ViewSpec),
    tableSpec: Schema.optional(GoogleCloudDatacatalogV1TableSpec),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1BigQueryTableSpec" });

export interface Expr {
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
}

export const Expr: Schema.Schema<Expr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    expression: Schema.optional(Schema.String),
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

export const Binding: Schema.Schema<Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    members: Schema.optional(Schema.Array(Schema.String)),
    condition: Schema.optional(Expr),
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

export interface GoogleCloudDatacatalogV1StorageProperties {
  /** Patterns to identify a set of files for this fileset. Examples of a valid `file_pattern`: * `gs://bucket_name/dir/*`: matches all files in the `bucket_name/dir` directory * `gs://bucket_name/dir/**`: matches all files in the `bucket_name/dir` and all subdirectories recursively * `gs://bucket_name/file*`: matches files prefixed by `file` in `bucket_name` * `gs://bucket_name/??.txt`: matches files with two characters followed by `.txt` in `bucket_name` * `gs://bucket_name/[aeiou].txt`: matches files that contain a single vowel character followed by `.txt` in `bucket_name` * `gs://bucket_name/[a-m].txt`: matches files that contain `a`, `b`, ... or `m` followed by `.txt` in `bucket_name` * `gs://bucket_name/a/* /b`: matches all files in `bucket_name` that match the `a/* /b` pattern, such as `a/c/b`, `a/d/b` * `gs://another_bucket/a.txt`: matches `gs://another_bucket/a.txt` */
  filePattern?: ReadonlyArray<string>;
  /** File type in MIME format, for example, `text/plain`. */
  fileType?: string;
}

export const GoogleCloudDatacatalogV1StorageProperties: Schema.Schema<GoogleCloudDatacatalogV1StorageProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filePattern: Schema.optional(Schema.Array(Schema.String)),
    fileType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1StorageProperties" });

export interface GoogleCloudDatacatalogV1StarEntryResponse {}

export const GoogleCloudDatacatalogV1StarEntryResponse: Schema.Schema<GoogleCloudDatacatalogV1StarEntryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDatacatalogV1StarEntryResponse",
  });

export interface GoogleCloudDatacatalogV1CloudBigtableSystemSpec {
  /** Display name of the Instance. This is user specified and different from the resource name. */
  instanceDisplayName?: string;
}

export const GoogleCloudDatacatalogV1CloudBigtableSystemSpec: Schema.Schema<GoogleCloudDatacatalogV1CloudBigtableSystemSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceDisplayName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatacatalogV1CloudBigtableSystemSpec",
  });

export interface GoogleCloudDatacatalogV1SystemTimestamps {
  /** Timestamp of the last modification of the resource or its metadata within a given system. Note: Depending on the source system, not every modification updates this timestamp. For example, BigQuery timestamps every metadata modification but not data or permission changes. */
  updateTime?: string;
  /** Output only. Expiration timestamp of the resource within the given system. Currently only applicable to BigQuery resources. */
  expireTime?: string;
  /** Creation timestamp of the resource within the given system. */
  createTime?: string;
}

export const GoogleCloudDatacatalogV1SystemTimestamps: Schema.Schema<GoogleCloudDatacatalogV1SystemTimestamps> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1SystemTimestamps" });

export interface GoogleCloudDatacatalogV1GcsFileSpec {
  /** Output only. Creation, modification, and expiration timestamps of a Cloud Storage file. */
  gcsTimestamps?: GoogleCloudDatacatalogV1SystemTimestamps;
  /** Required. Full file path. Example: `gs://bucket_name/a/b.txt`. */
  filePath?: string;
  /** Output only. File size in bytes. */
  sizeBytes?: string;
}

export const GoogleCloudDatacatalogV1GcsFileSpec: Schema.Schema<GoogleCloudDatacatalogV1GcsFileSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsTimestamps: Schema.optional(GoogleCloudDatacatalogV1SystemTimestamps),
    filePath: Schema.optional(Schema.String),
    sizeBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1GcsFileSpec" });

export interface GoogleCloudDatacatalogV1GcsFilesetSpec {
  /** Required. Patterns to identify a set of files in Google Cloud Storage. For more information, see [Wildcard Names] (https://cloud.google.com/storage/docs/wildcards). Note: Currently, bucket wildcards are not supported. Examples of valid `file_patterns`: * `gs://bucket_name/dir/*`: matches all files in `bucket_name/dir` directory * `gs://bucket_name/dir/**`: matches all files in `bucket_name/dir` and all subdirectories * `gs://bucket_name/file*`: matches files prefixed by `file` in `bucket_name` * `gs://bucket_name/??.txt`: matches files with two characters followed by `.txt` in `bucket_name` * `gs://bucket_name/[aeiou].txt`: matches files that contain a single vowel character followed by `.txt` in `bucket_name` * `gs://bucket_name/[a-m].txt`: matches files that contain `a`, `b`, ... or `m` followed by `.txt` in `bucket_name` * `gs://bucket_name/a/* /b`: matches all files in `bucket_name` that match the `a/* /b` pattern, such as `a/c/b`, `a/d/b` * `gs://another_bucket/a.txt`: matches `gs://another_bucket/a.txt` You can combine wildcards to match complex sets of files, for example: `gs://bucket_name/[a-m]??.j*g` */
  filePatterns?: ReadonlyArray<string>;
  /** Output only. Sample files contained in this fileset, not all files contained in this fileset are represented here. */
  sampleGcsFileSpecs?: ReadonlyArray<GoogleCloudDatacatalogV1GcsFileSpec>;
}

export const GoogleCloudDatacatalogV1GcsFilesetSpec: Schema.Schema<GoogleCloudDatacatalogV1GcsFilesetSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filePatterns: Schema.optional(Schema.Array(Schema.String)),
    sampleGcsFileSpecs: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogV1GcsFileSpec),
    ),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1GcsFilesetSpec" });

export interface GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec {
  /** Type of this view. */
  viewType?:
    | "VIEW_TYPE_UNSPECIFIED"
    | "STANDARD_VIEW"
    | "MATERIALIZED_VIEW"
    | (string & {});
  /** SQL query used to generate this view. */
  sqlQuery?: string;
  /** Name of a singular table this view reflects one to one. */
  baseTable?: string;
}

export const GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec: Schema.Schema<GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    viewType: Schema.optional(Schema.String),
    sqlQuery: Schema.optional(Schema.String),
    baseTable: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec",
  });

export interface GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema {
  /** JSON source of the Avro schema. */
  text?: string;
}

export const GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema: Schema.Schema<GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema",
  });

export interface GoogleCloudDatacatalogV1PhysicalSchemaParquetSchema {}

export const GoogleCloudDatacatalogV1PhysicalSchemaParquetSchema: Schema.Schema<GoogleCloudDatacatalogV1PhysicalSchemaParquetSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDatacatalogV1PhysicalSchemaParquetSchema",
  });

export interface GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema {
  /** Protocol buffer source of the schema. */
  text?: string;
}

export const GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema: Schema.Schema<GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema",
  });

export interface GoogleCloudDatacatalogV1PhysicalSchemaOrcSchema {}

export const GoogleCloudDatacatalogV1PhysicalSchemaOrcSchema: Schema.Schema<GoogleCloudDatacatalogV1PhysicalSchemaOrcSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDatacatalogV1PhysicalSchemaOrcSchema",
  });

export interface GoogleCloudDatacatalogV1PhysicalSchema {
  /** Schema in Avro JSON format. */
  avro?: GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema;
  /** Schema in Thrift format. */
  thrift?: GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema;
  /** Marks a Parquet-encoded data source. */
  parquet?: GoogleCloudDatacatalogV1PhysicalSchemaParquetSchema;
  /** Schema in protocol buffer format. */
  protobuf?: GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema;
  /** Marks an ORC-encoded data source. */
  orc?: GoogleCloudDatacatalogV1PhysicalSchemaOrcSchema;
  /** Marks a CSV-encoded data source. */
  csv?: GoogleCloudDatacatalogV1PhysicalSchemaCsvSchema;
}

export const GoogleCloudDatacatalogV1PhysicalSchema: Schema.Schema<GoogleCloudDatacatalogV1PhysicalSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    avro: Schema.optional(GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema),
    thrift: Schema.optional(GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema),
    parquet: Schema.optional(
      GoogleCloudDatacatalogV1PhysicalSchemaParquetSchema,
    ),
    protobuf: Schema.optional(
      GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema,
    ),
    orc: Schema.optional(GoogleCloudDatacatalogV1PhysicalSchemaOrcSchema),
    csv: Schema.optional(GoogleCloudDatacatalogV1PhysicalSchemaCsvSchema),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1PhysicalSchema" });

export interface GoogleCloudDatacatalogV1DataplexSpec {
  /** Format of the data. */
  dataFormat?: GoogleCloudDatacatalogV1PhysicalSchema;
  /** Project ID of the underlying Cloud Storage or BigQuery data. Note that this may not be the same project as the corresponding Dataplex Universal Catalog lake / zone / asset. */
  projectId?: string;
  /** Fully qualified resource name of an asset in Dataplex Universal Catalog, to which the underlying data source (Cloud Storage bucket or BigQuery dataset) of the entity is attached. */
  asset?: string;
  /** Compression format of the data, e.g., zip, gzip etc. */
  compressionFormat?: string;
}

export const GoogleCloudDatacatalogV1DataplexSpec: Schema.Schema<GoogleCloudDatacatalogV1DataplexSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataFormat: Schema.optional(GoogleCloudDatacatalogV1PhysicalSchema),
    projectId: Schema.optional(Schema.String),
    asset: Schema.optional(Schema.String),
    compressionFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1DataplexSpec" });

export interface GoogleCloudDatacatalogV1DataplexTableSpec {
  /** Common Dataplex Universal Catalog fields. */
  dataplexSpec?: GoogleCloudDatacatalogV1DataplexSpec;
  /** List of external tables registered by Dataplex Universal Catalog in other systems based on the same underlying data. External tables allow to query this data in those systems. */
  externalTables?: ReadonlyArray<GoogleCloudDatacatalogV1DataplexExternalTable>;
  /** Indicates if the table schema is managed by the user or not. */
  userManaged?: boolean;
}

export const GoogleCloudDatacatalogV1DataplexTableSpec: Schema.Schema<GoogleCloudDatacatalogV1DataplexTableSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataplexSpec: Schema.optional(GoogleCloudDatacatalogV1DataplexSpec),
    externalTables: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogV1DataplexExternalTable),
    ),
    userManaged: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1DataplexTableSpec" });

export interface GoogleCloudDatacatalogV1DatabaseTableSpec {
  /** Type of this table. */
  type?: "TABLE_TYPE_UNSPECIFIED" | "NATIVE" | "EXTERNAL" | (string & {});
  /** Spec what applies to tables that are actually views. Not set for "real" tables. */
  databaseViewSpec?: GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec;
  /** Output only. Fields specific to a Dataplex Universal Catalog table and present only in the Dataplex Universal Catalog table entries. */
  dataplexTable?: GoogleCloudDatacatalogV1DataplexTableSpec;
}

export const GoogleCloudDatacatalogV1DatabaseTableSpec: Schema.Schema<GoogleCloudDatacatalogV1DatabaseTableSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    databaseViewSpec: Schema.optional(
      GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec,
    ),
    dataplexTable: Schema.optional(GoogleCloudDatacatalogV1DataplexTableSpec),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1DatabaseTableSpec" });

export interface GoogleCloudDatacatalogV1PersonalDetails {
  /** True if the entry is starred by the user; false otherwise. */
  starred?: boolean;
  /** Set if the entry is starred; unset otherwise. */
  starTime?: string;
}

export const GoogleCloudDatacatalogV1PersonalDetails: Schema.Schema<GoogleCloudDatacatalogV1PersonalDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    starred: Schema.optional(Schema.Boolean),
    starTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1PersonalDetails" });

export interface GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec {
  /** Location of the cluster, typically a Cloud zone. */
  location?: string;
  /** Name of the cluster. */
  displayName?: string;
  /** Type of the resource. For a cluster this would be "CLUSTER". */
  type?: string;
  /** A link back to the parent resource, in this case Instance. */
  linkedResource?: string;
}

export const GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec: Schema.Schema<GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    linkedResource: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec",
  });

export interface GoogleCloudDatacatalogV1CloudBigtableInstanceSpec {
  /** The list of clusters for the Instance. */
  cloudBigtableClusterSpecs?: ReadonlyArray<GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec>;
}

export const GoogleCloudDatacatalogV1CloudBigtableInstanceSpec: Schema.Schema<GoogleCloudDatacatalogV1CloudBigtableInstanceSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudBigtableClusterSpecs: Schema.optional(
      Schema.Array(
        GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec,
      ),
    ),
  }).annotate({
    identifier: "GoogleCloudDatacatalogV1CloudBigtableInstanceSpec",
  });

export interface GoogleCloudDatacatalogV1ServiceSpec {
  /** Specification that applies to Instance entries of `CLOUD_BIGTABLE` system. */
  cloudBigtableInstanceSpec?: GoogleCloudDatacatalogV1CloudBigtableInstanceSpec;
}

export const GoogleCloudDatacatalogV1ServiceSpec: Schema.Schema<GoogleCloudDatacatalogV1ServiceSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudBigtableInstanceSpec: Schema.optional(
      GoogleCloudDatacatalogV1CloudBigtableInstanceSpec,
    ),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1ServiceSpec" });

export interface GoogleCloudDatacatalogV1DataSource {
  /** Detailed properties of the underlying storage. */
  storageProperties?: GoogleCloudDatacatalogV1StorageProperties;
  /** Service that physically stores the data. */
  service?:
    | "SERVICE_UNSPECIFIED"
    | "CLOUD_STORAGE"
    | "BIGQUERY"
    | (string & {});
  /** Output only. Data Catalog entry name, if applicable. */
  sourceEntry?: string;
  /** Full name of a resource as defined by the service. For example: `//bigquery.googleapis.com/projects/{PROJECT_ID}/locations/{LOCATION}/datasets/{DATASET_ID}/tables/{TABLE_ID}` */
  resource?: string;
}

export const GoogleCloudDatacatalogV1DataSource: Schema.Schema<GoogleCloudDatacatalogV1DataSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageProperties: Schema.optional(
      GoogleCloudDatacatalogV1StorageProperties,
    ),
    service: Schema.optional(Schema.String),
    sourceEntry: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1DataSource" });

export interface GoogleCloudDatacatalogV1EntryOverview {
  /** Entry overview with support for rich text. The overview must only contain Unicode characters, and should be formatted using HTML. The maximum length is 10 MiB as this value holds HTML descriptions including encoded images. The maximum length of the text without images is 100 KiB. */
  overview?: string;
}

export const GoogleCloudDatacatalogV1EntryOverview: Schema.Schema<GoogleCloudDatacatalogV1EntryOverview> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    overview: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1EntryOverview" });

export interface GoogleCloudDatacatalogV1ContactsPerson {
  /** Email of the person in the format of `john.doe@xyz`, ``, or `John Doe`. */
  email?: string;
  /** Designation of the person, for example, Data Steward. */
  designation?: string;
}

export const GoogleCloudDatacatalogV1ContactsPerson: Schema.Schema<GoogleCloudDatacatalogV1ContactsPerson> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
    designation: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1ContactsPerson" });

export interface GoogleCloudDatacatalogV1Contacts {
  /** The list of contact people for the entry. */
  people?: ReadonlyArray<GoogleCloudDatacatalogV1ContactsPerson>;
}

export const GoogleCloudDatacatalogV1Contacts: Schema.Schema<GoogleCloudDatacatalogV1Contacts> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    people: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogV1ContactsPerson),
    ),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1Contacts" });

export interface GoogleCloudDatacatalogV1BusinessContext {
  /** Entry overview fields for rich text descriptions of entries. */
  entryOverview?: GoogleCloudDatacatalogV1EntryOverview;
  /** Contact people for the entry. */
  contacts?: GoogleCloudDatacatalogV1Contacts;
}

export const GoogleCloudDatacatalogV1BusinessContext: Schema.Schema<GoogleCloudDatacatalogV1BusinessContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entryOverview: Schema.optional(GoogleCloudDatacatalogV1EntryOverview),
    contacts: Schema.optional(GoogleCloudDatacatalogV1Contacts),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1BusinessContext" });

export interface GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec {
  /** Cloud SQL instance ID in the format of `project:location:instance`. */
  instanceId?: string;
  /** Database name. */
  database?: string;
  /** Type of the Cloud SQL database. */
  type?: "DATABASE_TYPE_UNSPECIFIED" | "POSTGRES" | "MYSQL" | (string & {});
}

export const GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec: Schema.Schema<GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceId: Schema.optional(Schema.String),
    database: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec",
  });

export interface GoogleCloudDatacatalogV1BigQueryConnectionSpec {
  /** The type of the BigQuery connection. */
  connectionType?: "CONNECTION_TYPE_UNSPECIFIED" | "CLOUD_SQL" | (string & {});
  /** True if there are credentials attached to the BigQuery connection; false otherwise. */
  hasCredential?: boolean;
  /** Specification for the BigQuery connection to a Cloud SQL instance. */
  cloudSql?: GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec;
}

export const GoogleCloudDatacatalogV1BigQueryConnectionSpec: Schema.Schema<GoogleCloudDatacatalogV1BigQueryConnectionSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectionType: Schema.optional(Schema.String),
    hasCredential: Schema.optional(Schema.Boolean),
    cloudSql: Schema.optional(
      GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec,
    ),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1BigQueryConnectionSpec" });

export interface GoogleCloudDatacatalogV1DataSourceConnectionSpec {
  /** Output only. Fields specific to BigQuery connections. */
  bigqueryConnectionSpec?: GoogleCloudDatacatalogV1BigQueryConnectionSpec;
}

export const GoogleCloudDatacatalogV1DataSourceConnectionSpec: Schema.Schema<GoogleCloudDatacatalogV1DataSourceConnectionSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bigqueryConnectionSpec: Schema.optional(
      GoogleCloudDatacatalogV1BigQueryConnectionSpec,
    ),
  }).annotate({
    identifier: "GoogleCloudDatacatalogV1DataSourceConnectionSpec",
  });

export interface GoogleCloudDatacatalogV1VertexDatasetSpec {
  /** The number of DataItems in this Dataset. Only apply for non-structured Dataset. */
  dataItemCount?: string;
  /** Type of the dataset. */
  dataType?:
    | "DATA_TYPE_UNSPECIFIED"
    | "TABLE"
    | "IMAGE"
    | "TEXT"
    | "VIDEO"
    | "CONVERSATION"
    | "TIME_SERIES"
    | "DOCUMENT"
    | "TEXT_TO_SPEECH"
    | "TRANSLATION"
    | "STORE_VISION"
    | "ENTERPRISE_KNOWLEDGE_GRAPH"
    | "TEXT_PROMPT"
    | (string & {});
}

export const GoogleCloudDatacatalogV1VertexDatasetSpec: Schema.Schema<GoogleCloudDatacatalogV1VertexDatasetSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataItemCount: Schema.optional(Schema.String),
    dataType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1VertexDatasetSpec" });

export interface GoogleCloudDatacatalogV1DatasetSpec {
  /** Vertex AI Dataset specific fields */
  vertexDatasetSpec?: GoogleCloudDatacatalogV1VertexDatasetSpec;
}

export const GoogleCloudDatacatalogV1DatasetSpec: Schema.Schema<GoogleCloudDatacatalogV1DatasetSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vertexDatasetSpec: Schema.optional(
      GoogleCloudDatacatalogV1VertexDatasetSpec,
    ),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1DatasetSpec" });

export interface GoogleCloudDatacatalogV1FeatureOnlineStoreSpec {
  /** Output only. Type of underlying storage for the FeatureOnlineStore. */
  storageType?:
    | "STORAGE_TYPE_UNSPECIFIED"
    | "BIGTABLE"
    | "OPTIMIZED"
    | (string & {});
}

export const GoogleCloudDatacatalogV1FeatureOnlineStoreSpec: Schema.Schema<GoogleCloudDatacatalogV1FeatureOnlineStoreSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1FeatureOnlineStoreSpec" });

export interface GoogleCloudDatacatalogV1SqlDatabaseSystemSpec {
  /** SQL Database Engine. enum SqlEngine { UNDEFINED = 0; MY_SQL = 1; POSTGRE_SQL = 2; SQL_SERVER = 3; } Engine of the enclosing database instance. */
  sqlEngine?: string;
  /** Version of the database engine. */
  databaseVersion?: string;
  /** Host of the SQL database enum InstanceHost { UNDEFINED = 0; SELF_HOSTED = 1; CLOUD_SQL = 2; AMAZON_RDS = 3; AZURE_SQL = 4; } Host of the enclousing database instance. */
  instanceHost?: string;
}

export const GoogleCloudDatacatalogV1SqlDatabaseSystemSpec: Schema.Schema<GoogleCloudDatacatalogV1SqlDatabaseSystemSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sqlEngine: Schema.optional(Schema.String),
    databaseVersion: Schema.optional(Schema.String),
    instanceHost: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1SqlDatabaseSystemSpec" });

export interface GoogleCloudDatacatalogV1DataplexFilesetSpec {
  /** Common Dataplex Universal Catalog fields. */
  dataplexSpec?: GoogleCloudDatacatalogV1DataplexSpec;
}

export const GoogleCloudDatacatalogV1DataplexFilesetSpec: Schema.Schema<GoogleCloudDatacatalogV1DataplexFilesetSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataplexSpec: Schema.optional(GoogleCloudDatacatalogV1DataplexSpec),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1DataplexFilesetSpec" });

export interface GoogleCloudDatacatalogV1FilesetSpec {
  /** Fields specific to a Dataplex Universal Catalog fileset and present only in the Dataplex Universal Catalog fileset entries. */
  dataplexFileset?: GoogleCloudDatacatalogV1DataplexFilesetSpec;
}

export const GoogleCloudDatacatalogV1FilesetSpec: Schema.Schema<GoogleCloudDatacatalogV1FilesetSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataplexFileset: Schema.optional(
      GoogleCloudDatacatalogV1DataplexFilesetSpec,
    ),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1FilesetSpec" });

export interface GoogleCloudDatacatalogV1GraphSpecGraphElementTableLabelAndProperties {
  /** Required. The name of the label. */
  label?: string;
  /** Optional. The properties associated with the label. */
  properties?: ReadonlyArray<GoogleCloudDatacatalogV1GraphSpecGraphElementTableProperty>;
}

export const GoogleCloudDatacatalogV1GraphSpecGraphElementTableLabelAndProperties: Schema.Schema<GoogleCloudDatacatalogV1GraphSpecGraphElementTableLabelAndProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    label: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogV1GraphSpecGraphElementTableProperty),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatacatalogV1GraphSpecGraphElementTableLabelAndProperties",
  });

export interface GoogleCloudDatacatalogV1GraphSpecGraphElementTableGraphNodeReference {
  /** Required. The reference to the source/destination node of the edge. This name must be a valid `alias` of a node element in the same graph. Example, `Person` node can be a source node name of an edge element `Person_to_Address`. */
  nodeAlias?: string;
  /** Required. The referencing columns in the edge table. The size of `edge_table_columns` must be equal to the size of `node_table_columns`. */
  edgeTableColumns?: ReadonlyArray<string>;
  /** Required. The referenced columns of the source node table. */
  nodeTableColumns?: ReadonlyArray<string>;
}

export const GoogleCloudDatacatalogV1GraphSpecGraphElementTableGraphNodeReference: Schema.Schema<GoogleCloudDatacatalogV1GraphSpecGraphElementTableGraphNodeReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeAlias: Schema.optional(Schema.String),
    edgeTableColumns: Schema.optional(Schema.Array(Schema.String)),
    nodeTableColumns: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDatacatalogV1GraphSpecGraphElementTableGraphNodeReference",
  });

export interface GoogleCloudDatacatalogV1GraphSpecGraphElementTable {
  /** Required. The name of the data source. This is either a table name or a view name that is used for graph element input source. E.g. `Person` table or `PersonView` view. */
  dataSource?: string;
  /** Required. The labels and their properties for the graph element. */
  labelAndProperties?: ReadonlyArray<GoogleCloudDatacatalogV1GraphSpecGraphElementTableLabelAndProperties>;
  /** Required. The name of the keys of the elements in the table. */
  elementKeys?: ReadonlyArray<string>;
  /** Required. The input source of the graph element. */
  inputSource?: "INPUT_SOURCE_UNSPECIFIED" | "TABLE" | "VIEW" | (string & {});
  /** Required. The alias name of the graph element. */
  alias?: string;
  /** Optional. The source node reference of the edge. */
  sourceNodeReference?: GoogleCloudDatacatalogV1GraphSpecGraphElementTableGraphNodeReference;
  /** Optional. If set, this is the input column for dynamic properties in schemaless data model. */
  dynamicPropertiesColumn?: string;
  /** Optional. The destination node reference of the edge. */
  destinationNodeReference?: GoogleCloudDatacatalogV1GraphSpecGraphElementTableGraphNodeReference;
  /** Optional. If set, this is the input column for dynamic label in schemaless data model. */
  dynamicLabelColumn?: string;
  /** Required. The kind of the graph element. */
  kind?: "KIND_UNSPECIFIED" | "NODE" | "EDGE" | (string & {});
}

export const GoogleCloudDatacatalogV1GraphSpecGraphElementTable: Schema.Schema<GoogleCloudDatacatalogV1GraphSpecGraphElementTable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSource: Schema.optional(Schema.String),
    labelAndProperties: Schema.optional(
      Schema.Array(
        GoogleCloudDatacatalogV1GraphSpecGraphElementTableLabelAndProperties,
      ),
    ),
    elementKeys: Schema.optional(Schema.Array(Schema.String)),
    inputSource: Schema.optional(Schema.String),
    alias: Schema.optional(Schema.String),
    sourceNodeReference: Schema.optional(
      GoogleCloudDatacatalogV1GraphSpecGraphElementTableGraphNodeReference,
    ),
    dynamicPropertiesColumn: Schema.optional(Schema.String),
    destinationNodeReference: Schema.optional(
      GoogleCloudDatacatalogV1GraphSpecGraphElementTableGraphNodeReference,
    ),
    dynamicLabelColumn: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatacatalogV1GraphSpecGraphElementTable",
  });

export interface GoogleCloudDatacatalogV1GraphSpec {
  /** Output only. Fully qualified graph name. e.g. `named_catalog.MyGraph` */
  name?: string;
  /** Optional. Edge tables of the graph. */
  edgeTables?: ReadonlyArray<GoogleCloudDatacatalogV1GraphSpecGraphElementTable>;
  /** Required. Node tables of the graph. */
  nodeTables?: ReadonlyArray<GoogleCloudDatacatalogV1GraphSpecGraphElementTable>;
}

export const GoogleCloudDatacatalogV1GraphSpec: Schema.Schema<GoogleCloudDatacatalogV1GraphSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    edgeTables: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogV1GraphSpecGraphElementTable),
    ),
    nodeTables: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogV1GraphSpecGraphElementTable),
    ),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1GraphSpec" });

export interface GoogleCloudDatacatalogV1ModelSpec {
  /** Specification for vertex model resources. */
  vertexModelSpec?: GoogleCloudDatacatalogV1VertexModelSpec;
}

export const GoogleCloudDatacatalogV1ModelSpec: Schema.Schema<GoogleCloudDatacatalogV1ModelSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vertexModelSpec: Schema.optional(GoogleCloudDatacatalogV1VertexModelSpec),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1ModelSpec" });

export interface GoogleCloudDatacatalogV1Schema {
  /** The unified GoogleSQL-like schema of columns. The overall maximum number of columns and nested columns is 10,000. The maximum nested depth is 15 levels. */
  columns?: ReadonlyArray<GoogleCloudDatacatalogV1ColumnSchema>;
}

export const GoogleCloudDatacatalogV1Schema: Schema.Schema<GoogleCloudDatacatalogV1Schema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    columns: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogV1ColumnSchema),
    ),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1Schema" });

export interface GoogleCloudDatacatalogV1SpannerTableSpecSpannerPrimaryKey {
  /** Output only. Column names of the primary key. */
  columns?: ReadonlyArray<string>;
}

export const GoogleCloudDatacatalogV1SpannerTableSpecSpannerPrimaryKey: Schema.Schema<GoogleCloudDatacatalogV1SpannerTableSpecSpannerPrimaryKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    columns: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDatacatalogV1SpannerTableSpecSpannerPrimaryKey",
  });

export interface GoogleCloudDatacatalogV1SpannerTableSpecSpannerForeignKeyForeignKeyColumnMapping {
  /** Output only. The column in the referenced table that is part of the foreign key. */
  referenceColumn?: string;
  /** Output only. The column in the current table that is part of the foreign key. */
  column?: string;
}

export const GoogleCloudDatacatalogV1SpannerTableSpecSpannerForeignKeyForeignKeyColumnMapping: Schema.Schema<GoogleCloudDatacatalogV1SpannerTableSpecSpannerForeignKeyForeignKeyColumnMapping> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    referenceColumn: Schema.optional(Schema.String),
    column: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDatacatalogV1SpannerTableSpecSpannerForeignKeyForeignKeyColumnMapping",
  });

export interface GoogleCloudDatacatalogV1SpannerTableSpecSpannerForeignKey {
  /** Output only. The table name this foreign key referenced to. Format: `projects/{PROJECT_ID}/locations/{LOCATION}/entryGroups/{ENTRY_GROUP_ID}/entries/{ENTRY_ID}` */
  entry?: string;
  /** Output only. The ordered list of column mappings for this foreign key. */
  columnMappings?: ReadonlyArray<GoogleCloudDatacatalogV1SpannerTableSpecSpannerForeignKeyForeignKeyColumnMapping>;
  /** Output only. The constraint_name of the foreign key, for example, FK_CustomerOrder. */
  name?: string;
}

export const GoogleCloudDatacatalogV1SpannerTableSpecSpannerForeignKey: Schema.Schema<GoogleCloudDatacatalogV1SpannerTableSpecSpannerForeignKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entry: Schema.optional(Schema.String),
    columnMappings: Schema.optional(
      Schema.Array(
        GoogleCloudDatacatalogV1SpannerTableSpecSpannerForeignKeyForeignKeyColumnMapping,
      ),
    ),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatacatalogV1SpannerTableSpecSpannerForeignKey",
  });

export interface GoogleCloudDatacatalogV1SpannerTableSpec {
  /** Output only. The primary key of the table. */
  primaryKey?: GoogleCloudDatacatalogV1SpannerTableSpecSpannerPrimaryKey;
  /** Output only. The foreign keys of the table. */
  foreignKeys?: ReadonlyArray<GoogleCloudDatacatalogV1SpannerTableSpecSpannerForeignKey>;
}

export const GoogleCloudDatacatalogV1SpannerTableSpec: Schema.Schema<GoogleCloudDatacatalogV1SpannerTableSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryKey: Schema.optional(
      GoogleCloudDatacatalogV1SpannerTableSpecSpannerPrimaryKey,
    ),
    foreignKeys: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogV1SpannerTableSpecSpannerForeignKey),
    ),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1SpannerTableSpec" });

export interface GoogleCloudDatacatalogV1RoutineSpecArgument {
  /** The name of the argument. A return argument of a function might not have a name. */
  name?: string;
  /** Type of the argument. The exact value depends on the source system and the language. */
  type?: string;
  /** Specifies whether the argument is input or output. */
  mode?: "MODE_UNSPECIFIED" | "IN" | "OUT" | "INOUT" | (string & {});
}

export const GoogleCloudDatacatalogV1RoutineSpecArgument: Schema.Schema<GoogleCloudDatacatalogV1RoutineSpecArgument> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    mode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1RoutineSpecArgument" });

export interface GoogleCloudDatacatalogV1BigQueryRoutineSpec {
  /** Paths of the imported libraries. */
  importedLibraries?: ReadonlyArray<string>;
}

export const GoogleCloudDatacatalogV1BigQueryRoutineSpec: Schema.Schema<GoogleCloudDatacatalogV1BigQueryRoutineSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    importedLibraries: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1BigQueryRoutineSpec" });

export interface GoogleCloudDatacatalogV1RoutineSpec {
  /** The language the routine is written in. The exact value depends on the source system. For BigQuery routines, possible values are: * `SQL` * `JAVASCRIPT` */
  language?: string;
  /** Arguments of the routine. */
  routineArguments?: ReadonlyArray<GoogleCloudDatacatalogV1RoutineSpecArgument>;
  /** Return type of the argument. The exact value depends on the source system and the language. */
  returnType?: string;
  /** Fields specific for BigQuery routines. */
  bigqueryRoutineSpec?: GoogleCloudDatacatalogV1BigQueryRoutineSpec;
  /** The type of the routine. */
  routineType?:
    | "ROUTINE_TYPE_UNSPECIFIED"
    | "SCALAR_FUNCTION"
    | "PROCEDURE"
    | (string & {});
  /** The body of the routine. */
  definitionBody?: string;
}

export const GoogleCloudDatacatalogV1RoutineSpec: Schema.Schema<GoogleCloudDatacatalogV1RoutineSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    language: Schema.optional(Schema.String),
    routineArguments: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogV1RoutineSpecArgument),
    ),
    returnType: Schema.optional(Schema.String),
    bigqueryRoutineSpec: Schema.optional(
      GoogleCloudDatacatalogV1BigQueryRoutineSpec,
    ),
    routineType: Schema.optional(Schema.String),
    definitionBody: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1RoutineSpec" });

export interface GoogleCloudDatacatalogV1Entry {
  /** Indicates the entry's source system that Data Catalog doesn't automatically integrate with. The `user_specified_system` string has the following limitations: * Is case insensitive. * Must begin with a letter or underscore. * Can only contain letters, numbers, and underscores. * Must be at least 1 character and at most 64 characters long. */
  userSpecifiedSystem?: string;
  /** [Fully Qualified Name (FQN)](https://cloud.google.com//data-catalog/docs/fully-qualified-names) of the resource. Set automatically for entries representing resources from synced systems. Settable only during creation, and read-only later. Can be used for search and lookup of the entries. */
  fullyQualifiedName?: string;
  /** Cloud labels attached to the entry. In Data Catalog, you can create and modify labels attached only to custom entries. Synced entries have unmodifiable labels that come from the source system. */
  labels?: Record<string, string>;
  /** Specification that applies to Cloud Bigtable system. Only settable when `integrated_system` is equal to `CLOUD_BIGTABLE` */
  cloudBigtableSystemSpec?: GoogleCloudDatacatalogV1CloudBigtableSystemSpec;
  /** Specification that applies to a Cloud Storage fileset. Valid only for entries with the `FILESET` type. */
  gcsFilesetSpec?: GoogleCloudDatacatalogV1GcsFilesetSpec;
  /** Specification that applies to a table resource. Valid only for entries with the `TABLE` or `EXPLORE` type. */
  databaseTableSpec?: GoogleCloudDatacatalogV1DatabaseTableSpec;
  /** Display name of an entry. The maximum size is 500 bytes when encoded in UTF-8. Default value is an empty string. */
  displayName?: string;
  /** Output only. Additional information related to the entry. Private to the current user. */
  personalDetails?: GoogleCloudDatacatalogV1PersonalDetails;
  /** The type of the entry. For details, see [`EntryType`](#entrytype). */
  type?:
    | "ENTRY_TYPE_UNSPECIFIED"
    | "TABLE"
    | "MODEL"
    | "DATA_STREAM"
    | "FILESET"
    | "CLUSTER"
    | "DATABASE"
    | "DATA_SOURCE_CONNECTION"
    | "ROUTINE"
    | "LAKE"
    | "ZONE"
    | "SERVICE"
    | "DATABASE_SCHEMA"
    | "DASHBOARD"
    | "EXPLORE"
    | "LOOK"
    | "FEATURE_ONLINE_STORE"
    | "FEATURE_VIEW"
    | "FEATURE_GROUP"
    | "GRAPH"
    | (string & {});
  /** Entry description that can consist of several sentences or paragraphs that describe entry contents. The description must not contain Unicode non-characters as well as C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). The maximum size is 2000 bytes when encoded in UTF-8. Default value is an empty string. */
  description?: string;
  /** Resource usage statistics. */
  usageSignal?: GoogleCloudDatacatalogV1UsageSignal;
  /** Output only. Specification that applies to a BigQuery table. Valid only for entries with the `TABLE` type. */
  bigqueryTableSpec?: GoogleCloudDatacatalogV1BigQueryTableSpec;
  /** Specification that applies to a Service resource. */
  serviceSpec?: GoogleCloudDatacatalogV1ServiceSpec;
  /** Output only. Physical location of the entry. */
  dataSource?: GoogleCloudDatacatalogV1DataSource;
  /** Timestamps from the underlying resource, not from the Data Catalog entry. Output only when the entry has a system listed in the `IntegratedSystem` enum. For entries with `user_specified_system`, this field is optional and defaults to an empty timestamp. */
  sourceSystemTimestamps?: GoogleCloudDatacatalogV1SystemTimestamps;
  /** Business Context of the entry. Not supported for BigQuery datasets */
  businessContext?: GoogleCloudDatacatalogV1BusinessContext;
  /** Specification that applies to a data source connection. Valid only for entries with the `DATA_SOURCE_CONNECTION` type. */
  dataSourceConnectionSpec?: GoogleCloudDatacatalogV1DataSourceConnectionSpec;
  /** Specification that applies to a dataset. */
  datasetSpec?: GoogleCloudDatacatalogV1DatasetSpec;
  /** FeatureonlineStore spec for Vertex AI Feature Store. */
  featureOnlineStoreSpec?: GoogleCloudDatacatalogV1FeatureOnlineStoreSpec;
  /** Specification that applies to a relational database system. Only settable when `user_specified_system` is equal to `SQL_DATABASE` */
  sqlDatabaseSystemSpec?: GoogleCloudDatacatalogV1SqlDatabaseSystemSpec;
  /** Specification that applies to a fileset resource. Valid only for entries with the `FILESET` type. */
  filesetSpec?: GoogleCloudDatacatalogV1FilesetSpec;
  /** Output only. Indicates the entry's source system that Data Catalog integrates with, such as BigQuery, Pub/Sub, or Dataproc Metastore. */
  integratedSystem?:
    | "INTEGRATED_SYSTEM_UNSPECIFIED"
    | "BIGQUERY"
    | "CLOUD_PUBSUB"
    | "DATAPROC_METASTORE"
    | "DATAPLEX"
    | "CLOUD_SPANNER"
    | "CLOUD_BIGTABLE"
    | "CLOUD_SQL"
    | "LOOKER"
    | "VERTEX_AI"
    | (string & {});
  /** Spec for graph. */
  graphSpec?: GoogleCloudDatacatalogV1GraphSpec;
  /** Output only. Identifier. The resource name of an entry in URL format. Note: The entry itself and its child resources might not be stored in the location specified in its name. */
  name?: string;
  /** Model specification. */
  modelSpec?: GoogleCloudDatacatalogV1ModelSpec;
  /** The resource this metadata entry refers to. For Google Cloud Platform resources, `linked_resource` is the [Full Resource Name] (https://cloud.google.com/apis/design/resource_names#full_resource_name). For example, the `linked_resource` for a table resource from BigQuery is: `//bigquery.googleapis.com/projects/{PROJECT_ID}/datasets/{DATASET_ID}/tables/{TABLE_ID}` Output only when the entry is one of the types in the `EntryType` enum. For entries with a `user_specified_type`, this field is optional and defaults to an empty string. The resource string must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), periods (.), colons (:), slashes (/), dashes (-), and hashes (#). The maximum size is 200 bytes when encoded in UTF-8. */
  linkedResource?: string;
  /** Custom entry type that doesn't match any of the values allowed for input and listed in the `EntryType` enum. When creating an entry, first check the type values in the enum. If there are no appropriate types for the new entry, provide a custom value, for example, `my_special_type`. The `user_specified_type` string has the following limitations: * Is case insensitive. * Must begin with a letter or underscore. * Can only contain letters, numbers, and underscores. * Must be at least 1 character and at most 64 characters long. */
  userSpecifiedType?: string;
  /** Schema of the entry. An entry might not have any schema attached to it. */
  schema?: GoogleCloudDatacatalogV1Schema;
  /** Specification of a Spanner table. */
  spannerTableSpec?: GoogleCloudDatacatalogV1SpannerTableSpec;
  /** Specification that applies to Looker sysstem. Only settable when `user_specified_system` is equal to `LOOKER` */
  lookerSystemSpec?: GoogleCloudDatacatalogV1LookerSystemSpec;
  /** Output only. Specification for a group of BigQuery tables with the `[prefix]YYYYMMDD` name pattern. For more information, see [Introduction to partitioned tables] (https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding). */
  bigqueryDateShardedSpec?: GoogleCloudDatacatalogV1BigQueryDateShardedSpec;
  /** Specification that applies to a user-defined function or procedure. Valid only for entries with the `ROUTINE` type. */
  routineSpec?: GoogleCloudDatacatalogV1RoutineSpec;
}

export const GoogleCloudDatacatalogV1Entry: Schema.Schema<GoogleCloudDatacatalogV1Entry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userSpecifiedSystem: Schema.optional(Schema.String),
    fullyQualifiedName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    cloudBigtableSystemSpec: Schema.optional(
      GoogleCloudDatacatalogV1CloudBigtableSystemSpec,
    ),
    gcsFilesetSpec: Schema.optional(GoogleCloudDatacatalogV1GcsFilesetSpec),
    databaseTableSpec: Schema.optional(
      GoogleCloudDatacatalogV1DatabaseTableSpec,
    ),
    displayName: Schema.optional(Schema.String),
    personalDetails: Schema.optional(GoogleCloudDatacatalogV1PersonalDetails),
    type: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    usageSignal: Schema.optional(GoogleCloudDatacatalogV1UsageSignal),
    bigqueryTableSpec: Schema.optional(
      GoogleCloudDatacatalogV1BigQueryTableSpec,
    ),
    serviceSpec: Schema.optional(GoogleCloudDatacatalogV1ServiceSpec),
    dataSource: Schema.optional(GoogleCloudDatacatalogV1DataSource),
    sourceSystemTimestamps: Schema.optional(
      GoogleCloudDatacatalogV1SystemTimestamps,
    ),
    businessContext: Schema.optional(GoogleCloudDatacatalogV1BusinessContext),
    dataSourceConnectionSpec: Schema.optional(
      GoogleCloudDatacatalogV1DataSourceConnectionSpec,
    ),
    datasetSpec: Schema.optional(GoogleCloudDatacatalogV1DatasetSpec),
    featureOnlineStoreSpec: Schema.optional(
      GoogleCloudDatacatalogV1FeatureOnlineStoreSpec,
    ),
    sqlDatabaseSystemSpec: Schema.optional(
      GoogleCloudDatacatalogV1SqlDatabaseSystemSpec,
    ),
    filesetSpec: Schema.optional(GoogleCloudDatacatalogV1FilesetSpec),
    integratedSystem: Schema.optional(Schema.String),
    graphSpec: Schema.optional(GoogleCloudDatacatalogV1GraphSpec),
    name: Schema.optional(Schema.String),
    modelSpec: Schema.optional(GoogleCloudDatacatalogV1ModelSpec),
    linkedResource: Schema.optional(Schema.String),
    userSpecifiedType: Schema.optional(Schema.String),
    schema: Schema.optional(GoogleCloudDatacatalogV1Schema),
    spannerTableSpec: Schema.optional(GoogleCloudDatacatalogV1SpannerTableSpec),
    lookerSystemSpec: Schema.optional(GoogleCloudDatacatalogV1LookerSystemSpec),
    bigqueryDateShardedSpec: Schema.optional(
      GoogleCloudDatacatalogV1BigQueryDateShardedSpec,
    ),
    routineSpec: Schema.optional(GoogleCloudDatacatalogV1RoutineSpec),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1Entry" });

export interface GoogleCloudDatacatalogV1ListEntriesResponse {
  /** Entry details. */
  entries?: ReadonlyArray<GoogleCloudDatacatalogV1Entry>;
  /** Pagination token of the next results page. Empty if there are no more items in results. */
  nextPageToken?: string;
}

export const GoogleCloudDatacatalogV1ListEntriesResponse: Schema.Schema<GoogleCloudDatacatalogV1ListEntriesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(GoogleCloudDatacatalogV1Entry)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1ListEntriesResponse" });

export interface GoogleCloudDatacatalogV1MigrationConfig {
  /** Opt-in status for the migration of Tag Templates to Dataplex Universal Catalog. */
  tagTemplateMigration?:
    | "TAG_TEMPLATE_MIGRATION_UNSPECIFIED"
    | "TAG_TEMPLATE_MIGRATION_ENABLED"
    | "TAG_TEMPLATE_MIGRATION_DISABLED"
    | (string & {});
  /** Opt-in status for the UI switch to Dataplex Universal Catalog. */
  catalogUiExperience?:
    | "CATALOG_UI_EXPERIENCE_UNSPECIFIED"
    | "CATALOG_UI_EXPERIENCE_ENABLED"
    | "CATALOG_UI_EXPERIENCE_DISABLED"
    | (string & {});
  /** The time when the Tag Template migration was enabled. If the Tag Template migration is not enabled, this field is not set. */
  templateMigrationEnabledTime?: string;
}

export const GoogleCloudDatacatalogV1MigrationConfig: Schema.Schema<GoogleCloudDatacatalogV1MigrationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tagTemplateMigration: Schema.optional(Schema.String),
    catalogUiExperience: Schema.optional(Schema.String),
    templateMigrationEnabledTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1MigrationConfig" });

export interface GoogleCloudDatacatalogV1OrganizationConfig {
  /** Map of organizations and project resource names and their configuration. The format for the map keys is `organizations/{organizationId}` or `projects/{projectId}`. */
  config?: Record<string, GoogleCloudDatacatalogV1MigrationConfig>;
}

export const GoogleCloudDatacatalogV1OrganizationConfig: Schema.Schema<GoogleCloudDatacatalogV1OrganizationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudDatacatalogV1MigrationConfig),
    ),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1OrganizationConfig" });

export interface GoogleCloudDatacatalogV1SerializedPolicyTag {
  /** Resource name of the policy tag. This field is ignored when calling `ImportTaxonomies`. */
  policyTag?: string;
  /** Required. Display name of the policy tag. At most 200 bytes when encoded in UTF-8. */
  displayName?: string;
  /** Description of the serialized policy tag. At most 2000 bytes when encoded in UTF-8. If not set, defaults to an empty description. */
  description?: string;
  /** Children of the policy tag, if any. */
  childPolicyTags?: ReadonlyArray<GoogleCloudDatacatalogV1SerializedPolicyTag>;
}

export const GoogleCloudDatacatalogV1SerializedPolicyTag: Schema.Schema<GoogleCloudDatacatalogV1SerializedPolicyTag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      policyTag: Schema.optional(Schema.String),
      displayName: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      childPolicyTags: Schema.optional(
        Schema.Array(GoogleCloudDatacatalogV1SerializedPolicyTag),
      ),
    }),
  ).annotate({
    identifier: "GoogleCloudDatacatalogV1SerializedPolicyTag",
  }) as any as Schema.Schema<GoogleCloudDatacatalogV1SerializedPolicyTag>;

export interface GoogleCloudDatacatalogV1SerializedTaxonomy {
  /** Required. Display name of the taxonomy. At most 200 bytes when encoded in UTF-8. */
  displayName?: string;
  /** Description of the serialized taxonomy. At most 2000 bytes when encoded in UTF-8. If not set, defaults to an empty description. */
  description?: string;
  /** A list of policy types that are activated per taxonomy. */
  activatedPolicyTypes?: ReadonlyArray<
    "POLICY_TYPE_UNSPECIFIED" | "FINE_GRAINED_ACCESS_CONTROL" | (string & {})
  >;
  /** Top level policy tags associated with the taxonomy, if any. */
  policyTags?: ReadonlyArray<GoogleCloudDatacatalogV1SerializedPolicyTag>;
}

export const GoogleCloudDatacatalogV1SerializedTaxonomy: Schema.Schema<GoogleCloudDatacatalogV1SerializedTaxonomy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    activatedPolicyTypes: Schema.optional(Schema.Array(Schema.String)),
    policyTags: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogV1SerializedPolicyTag),
    ),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1SerializedTaxonomy" });

export interface GoogleCloudDatacatalogV1ExportTaxonomiesResponse {
  /** List of taxonomies and policy tags as nested protocol buffers. */
  taxonomies?: ReadonlyArray<GoogleCloudDatacatalogV1SerializedTaxonomy>;
}

export const GoogleCloudDatacatalogV1ExportTaxonomiesResponse: Schema.Schema<GoogleCloudDatacatalogV1ExportTaxonomiesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    taxonomies: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogV1SerializedTaxonomy),
    ),
  }).annotate({
    identifier: "GoogleCloudDatacatalogV1ExportTaxonomiesResponse",
  });

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
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    error: Schema.optional(Status),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface GoogleCloudDatacatalogV1CrossRegionalSource {
  /** Required. The resource name of the source taxonomy to import. */
  taxonomy?: string;
}

export const GoogleCloudDatacatalogV1CrossRegionalSource: Schema.Schema<GoogleCloudDatacatalogV1CrossRegionalSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    taxonomy: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1CrossRegionalSource" });

export interface GoogleCloudDatacatalogV1TaxonomyService {
  /** The Google Cloud service name. */
  name?:
    | "MANAGING_SYSTEM_UNSPECIFIED"
    | "MANAGING_SYSTEM_DATAPLEX"
    | "MANAGING_SYSTEM_OTHER"
    | (string & {});
  /** The service agent for the service. */
  identity?: string;
}

export const GoogleCloudDatacatalogV1TaxonomyService: Schema.Schema<GoogleCloudDatacatalogV1TaxonomyService> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    identity: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1TaxonomyService" });

export interface GoogleCloudDatacatalogV1Taxonomy {
  /** Identifier. Resource name of this taxonomy in URL format. Note: Policy tag manager generates unique taxonomy IDs. */
  name?: string;
  /** Optional. Description of this taxonomy. If not set, defaults to empty. The description must contain only Unicode characters, tabs, newlines, carriage returns, and page breaks, and be at most 2000 bytes long when encoded in UTF-8. */
  description?: string;
  /** Output only. Identity of the service which owns the Taxonomy. This field is only populated when the taxonomy is created by a Google Cloud service. Currently only 'DATAPLEX' is supported. */
  service?: GoogleCloudDatacatalogV1TaxonomyService;
  /** Output only. Number of policy tags in this taxonomy. */
  policyTagCount?: number;
  /** Optional. A list of policy types that are activated for this taxonomy. If not set, defaults to an empty list. */
  activatedPolicyTypes?: ReadonlyArray<
    "POLICY_TYPE_UNSPECIFIED" | "FINE_GRAINED_ACCESS_CONTROL" | (string & {})
  >;
  /** Required. User-defined name of this taxonomy. The name can't start or end with spaces, must contain only Unicode letters, numbers, underscores, dashes, and spaces, and be at most 200 bytes long when encoded in UTF-8. The taxonomy display name must be unique within an organization. */
  displayName?: string;
  /** Output only. Creation and modification timestamps of this taxonomy. */
  taxonomyTimestamps?: GoogleCloudDatacatalogV1SystemTimestamps;
}

export const GoogleCloudDatacatalogV1Taxonomy: Schema.Schema<GoogleCloudDatacatalogV1Taxonomy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    service: Schema.optional(GoogleCloudDatacatalogV1TaxonomyService),
    policyTagCount: Schema.optional(Schema.Number),
    activatedPolicyTypes: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
    taxonomyTimestamps: Schema.optional(
      GoogleCloudDatacatalogV1SystemTimestamps,
    ),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1Taxonomy" });

export interface GoogleCloudDatacatalogV1ImportTaxonomiesResponse {
  /** Imported taxonomies. */
  taxonomies?: ReadonlyArray<GoogleCloudDatacatalogV1Taxonomy>;
}

export const GoogleCloudDatacatalogV1ImportTaxonomiesResponse: Schema.Schema<GoogleCloudDatacatalogV1ImportTaxonomiesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    taxonomies: Schema.optional(Schema.Array(GoogleCloudDatacatalogV1Taxonomy)),
  }).annotate({
    identifier: "GoogleCloudDatacatalogV1ImportTaxonomiesResponse",
  });

export interface GoogleCloudDatacatalogV1SearchCatalogRequestScope {
  /** If `true`, include Google Cloud public datasets in search results. By default, they are excluded. See [Google Cloud Public Datasets](/public-datasets) for more information. */
  includeGcpPublicDatasets?: boolean;
  /** Optional. This field is deprecated. The search mechanism for public and private tag templates is the same. */
  includePublicTagTemplates?: boolean;
  /** Optional. If `true`, search only among starred entries. By default, all results are returned, starred or not. */
  starredOnly?: boolean;
  /** The list of organization IDs to search within. To find your organization ID, follow the steps from [Creating and managing organizations] (/resource-manager/docs/creating-managing-organization). */
  includeOrgIds?: ReadonlyArray<string>;
  /** The list of project IDs to search within. For more information on the distinction between project names, IDs, and numbers, see [Projects](/docs/overview/#projects). */
  includeProjectIds?: ReadonlyArray<string>;
  /** Optional. The list of locations to search within. If empty, all locations are searched. Returns an error if any location in the list isn't one of the [Supported regions](https://cloud.google.com/data-catalog/docs/concepts/regions#supported_regions). If a location is unreachable, its name is returned in the `SearchCatalogResponse.unreachable` field. To get additional information on the error, repeat the search request and set the location name as the value of this parameter. */
  restrictedLocations?: ReadonlyArray<string>;
}

export const GoogleCloudDatacatalogV1SearchCatalogRequestScope: Schema.Schema<GoogleCloudDatacatalogV1SearchCatalogRequestScope> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeGcpPublicDatasets: Schema.optional(Schema.Boolean),
    includePublicTagTemplates: Schema.optional(Schema.Boolean),
    starredOnly: Schema.optional(Schema.Boolean),
    includeOrgIds: Schema.optional(Schema.Array(Schema.String)),
    includeProjectIds: Schema.optional(Schema.Array(Schema.String)),
    restrictedLocations: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDatacatalogV1SearchCatalogRequestScope",
  });

export interface GoogleCloudDatacatalogV1ModifyEntryContactsRequest {
  /** Required. The new value for the Contacts. */
  contacts?: GoogleCloudDatacatalogV1Contacts;
}

export const GoogleCloudDatacatalogV1ModifyEntryContactsRequest: Schema.Schema<GoogleCloudDatacatalogV1ModifyEntryContactsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contacts: Schema.optional(GoogleCloudDatacatalogV1Contacts),
  }).annotate({
    identifier: "GoogleCloudDatacatalogV1ModifyEntryContactsRequest",
  });

export interface GoogleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest {
  /** Required. The new display name of the enum value. For example, `my_new_enum_value`. */
  newEnumValueDisplayName?: string;
}

export const GoogleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest: Schema.Schema<GoogleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    newEnumValueDisplayName: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest",
  });

export interface GoogleCloudDatacatalogV1SearchCatalogResult {
  /** Type of the search result. You can use this field to determine which get method to call to fetch the full resource. */
  searchResultType?:
    | "SEARCH_RESULT_TYPE_UNSPECIFIED"
    | "ENTRY"
    | "TAG_TEMPLATE"
    | "ENTRY_GROUP"
    | (string & {});
  /** Output only. The source system that Data Catalog automatically integrates with, such as BigQuery, Cloud Pub/Sub, or Dataproc Metastore. */
  integratedSystem?:
    | "INTEGRATED_SYSTEM_UNSPECIFIED"
    | "BIGQUERY"
    | "CLOUD_PUBSUB"
    | "DATAPROC_METASTORE"
    | "DATAPLEX"
    | "CLOUD_SPANNER"
    | "CLOUD_BIGTABLE"
    | "CLOUD_SQL"
    | "LOOKER"
    | "VERTEX_AI"
    | (string & {});
  /** The display name of the result. */
  displayName?: string;
  /** The full name of the Google Cloud resource the entry belongs to. For more information, see [Full Resource Name] (/apis/design/resource_names#full_resource_name). Example: `//bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID` */
  linkedResource?: string;
  /** Custom source system that you can manually integrate Data Catalog with. */
  userSpecifiedSystem?: string;
  /** Entry description that can consist of several sentences or paragraphs that describe entry contents. */
  description?: string;
  /** Fully qualified name (FQN) of the resource. FQNs take two forms: * For non-regionalized resources: `{SYSTEM}:{PROJECT}.{PATH_TO_RESOURCE_SEPARATED_WITH_DOTS}` * For regionalized resources: `{SYSTEM}:{PROJECT}.{LOCATION_ID}.{PATH_TO_RESOURCE_SEPARATED_WITH_DOTS}` Example for a DPMS table: `dataproc_metastore:PROJECT_ID.LOCATION_ID.INSTANCE_ID.DATABASE_ID.TABLE_ID` */
  fullyQualifiedName?: string;
  /** Sub-type of the search result. A dot-delimited full type of the resource. The same type you specify in the `type` search predicate. Examples: `entry.table`, `entry.dataStream`, `tagTemplate`. */
  searchResultSubtype?: string;
  /** The last modification timestamp of the entry in the source system. */
  modifyTime?: string;
  /** The relative name of the resource in URL format. Examples: * `projects/{PROJECT_ID}/locations/{LOCATION_ID}/entryGroups/{ENTRY_GROUP_ID}/entries/{ENTRY_ID}` * `projects/{PROJECT_ID}/tagTemplates/{TAG_TEMPLATE_ID}` */
  relativeResourceName?: string;
}

export const GoogleCloudDatacatalogV1SearchCatalogResult: Schema.Schema<GoogleCloudDatacatalogV1SearchCatalogResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    searchResultType: Schema.optional(Schema.String),
    integratedSystem: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    linkedResource: Schema.optional(Schema.String),
    userSpecifiedSystem: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    fullyQualifiedName: Schema.optional(Schema.String),
    searchResultSubtype: Schema.optional(Schema.String),
    modifyTime: Schema.optional(Schema.String),
    relativeResourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1SearchCatalogResult" });

export interface GoogleCloudDatacatalogV1SearchCatalogResponse {
  /** Pagination token that can be used in subsequent calls to retrieve the next page of results. */
  nextPageToken?: string;
  /** The approximate total number of entries matched by the query. */
  totalSize?: number;
  /** Search results. */
  results?: ReadonlyArray<GoogleCloudDatacatalogV1SearchCatalogResult>;
  /** Unreachable locations. Search results don't include data from those locations. To get additional information on an error, repeat the search request and restrict it to specific locations by setting the `SearchCatalogRequest.scope.restricted_locations` parameter. */
  unreachable?: ReadonlyArray<string>;
}

export const GoogleCloudDatacatalogV1SearchCatalogResponse: Schema.Schema<GoogleCloudDatacatalogV1SearchCatalogResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    totalSize: Schema.optional(Schema.Number),
    results: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogV1SearchCatalogResult),
    ),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1SearchCatalogResponse" });

export interface SetIamPolicyRequest {
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: Policy;
}

export const SetIamPolicyRequest: Schema.Schema<SetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Policy),
  }).annotate({ identifier: "SetIamPolicyRequest" });

export interface GoogleCloudDatacatalogV1InlineSource {
  /** Required. Taxonomies to import. */
  taxonomies?: ReadonlyArray<GoogleCloudDatacatalogV1SerializedTaxonomy>;
}

export const GoogleCloudDatacatalogV1InlineSource: Schema.Schema<GoogleCloudDatacatalogV1InlineSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    taxonomies: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogV1SerializedTaxonomy),
    ),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1InlineSource" });

export interface GoogleCloudDatacatalogV1EntryGroup {
  /** Identifier. The resource name of the entry group in URL format. Note: The entry group itself and its child resources might not be stored in the location specified in its name. */
  name?: string;
  /** Entry group description. Can consist of several sentences or paragraphs that describe the entry group contents. Default value is an empty string. */
  description?: string;
  /** Optional. When set to [true], it means DataCatalog EntryGroup was transferred to Dataplex Universal Catalog. It makes EntryGroup and its Entries to be read-only in DataCatalog. However, new Tags on EntryGroup and its Entries can be created. After setting the flag to [true] it cannot be unset. */
  transferredToDataplex?: boolean;
  /** A short name to identify the entry group, for example, "analytics data - jan 2011". Default value is an empty string. */
  displayName?: string;
  /** Output only. Timestamps of the entry group. Default value is empty. */
  dataCatalogTimestamps?: GoogleCloudDatacatalogV1SystemTimestamps;
}

export const GoogleCloudDatacatalogV1EntryGroup: Schema.Schema<GoogleCloudDatacatalogV1EntryGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    transferredToDataplex: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    dataCatalogTimestamps: Schema.optional(
      GoogleCloudDatacatalogV1SystemTimestamps,
    ),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1EntryGroup" });

export interface GoogleCloudDatacatalogV1ListEntryGroupsResponse {
  /** Entry group details. */
  entryGroups?: ReadonlyArray<GoogleCloudDatacatalogV1EntryGroup>;
  /** Pagination token to specify in the next call to retrieve the next page of results. Empty if there are no more items. */
  nextPageToken?: string;
}

export const GoogleCloudDatacatalogV1ListEntryGroupsResponse: Schema.Schema<GoogleCloudDatacatalogV1ListEntryGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entryGroups: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogV1EntryGroup),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatacatalogV1ListEntryGroupsResponse",
  });

export interface GoogleCloudDatacatalogV1ImportTaxonomiesRequest {
  /** Inline source taxonomy to import. */
  inlineSource?: GoogleCloudDatacatalogV1InlineSource;
  /** Cross-regional source taxonomy to import. */
  crossRegionalSource?: GoogleCloudDatacatalogV1CrossRegionalSource;
}

export const GoogleCloudDatacatalogV1ImportTaxonomiesRequest: Schema.Schema<GoogleCloudDatacatalogV1ImportTaxonomiesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inlineSource: Schema.optional(GoogleCloudDatacatalogV1InlineSource),
    crossRegionalSource: Schema.optional(
      GoogleCloudDatacatalogV1CrossRegionalSource,
    ),
  }).annotate({
    identifier: "GoogleCloudDatacatalogV1ImportTaxonomiesRequest",
  });

export interface GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue {
  /** Required. The display name of the enum value. Must not be an empty string. The name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), and can't start or end with spaces. The maximum length is 200 characters. */
  displayName?: string;
}

export const GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue: Schema.Schema<GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue",
  });

export interface GoogleCloudDatacatalogV1FieldTypeEnumType {
  /** The set of allowed values for this enum. This set must not be empty and can include up to 100 allowed values. The display names of the values in this set must not be empty and must be case-insensitively unique within this set. The order of items in this set is preserved. This field can be used to create, remove, and reorder enum values. To rename enum values, use the `RenameTagTemplateFieldEnumValue` method. */
  allowedValues?: ReadonlyArray<GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue>;
}

export const GoogleCloudDatacatalogV1FieldTypeEnumType: Schema.Schema<GoogleCloudDatacatalogV1FieldTypeEnumType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowedValues: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue),
    ),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1FieldTypeEnumType" });

export interface GoogleCloudDatacatalogV1FieldType {
  /** Primitive types, such as string, boolean, etc. */
  primitiveType?:
    | "PRIMITIVE_TYPE_UNSPECIFIED"
    | "DOUBLE"
    | "STRING"
    | "BOOL"
    | "TIMESTAMP"
    | "RICHTEXT"
    | (string & {});
  /** An enum type. */
  enumType?: GoogleCloudDatacatalogV1FieldTypeEnumType;
}

export const GoogleCloudDatacatalogV1FieldType: Schema.Schema<GoogleCloudDatacatalogV1FieldType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primitiveType: Schema.optional(Schema.String),
    enumType: Schema.optional(GoogleCloudDatacatalogV1FieldTypeEnumType),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1FieldType" });

export interface GoogleCloudDatacatalogV1TagField {
  /** The value of a tag field with a double type. */
  doubleValue?: number;
  /** The value of a tag field with a string type. The maximum length is 2000 UTF-8 characters. */
  stringValue?: string;
  /** The value of a tag field with an enum type. This value must be one of the allowed values listed in this enum. */
  enumValue?: GoogleCloudDatacatalogV1TagFieldEnumValue;
  /** Output only. The order of this field with respect to other fields in this tag. Can be set by Tag. For example, a higher value can indicate a more important field. The value can be negative. Multiple fields can have the same order, and field orders within a tag don't have to be sequential. */
  order?: number;
  /** Output only. The display name of this field. */
  displayName?: string;
  /** The value of a tag field with a boolean type. */
  boolValue?: boolean;
  /** The value of a tag field with a timestamp type. */
  timestampValue?: string;
  /** The value of a tag field with a rich text type. The maximum length is 10 MiB as this value holds HTML descriptions including encoded images. The maximum length of the text without images is 100 KiB. */
  richtextValue?: string;
}

export const GoogleCloudDatacatalogV1TagField: Schema.Schema<GoogleCloudDatacatalogV1TagField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    doubleValue: Schema.optional(Schema.Number),
    stringValue: Schema.optional(Schema.String),
    enumValue: Schema.optional(GoogleCloudDatacatalogV1TagFieldEnumValue),
    order: Schema.optional(Schema.Number),
    displayName: Schema.optional(Schema.String),
    boolValue: Schema.optional(Schema.Boolean),
    timestampValue: Schema.optional(Schema.String),
    richtextValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1TagField" });

export interface GoogleCloudDatacatalogV1Tag {
  /** Output only. Denotes the transfer status of the Tag Template. */
  dataplexTransferStatus?:
    | "DATAPLEX_TRANSFER_STATUS_UNSPECIFIED"
    | "MIGRATED"
    | "TRANSFERRED"
    | (string & {});
  /** Required. The resource name of the tag template this tag uses. Example: `projects/{PROJECT_ID}/locations/{LOCATION}/tagTemplates/{TAG_TEMPLATE_ID}` This field cannot be modified after creation. */
  template?: string;
  /** Resources like entry can have schemas associated with them. This scope allows you to attach tags to an individual column based on that schema. To attach a tag to a nested column, separate column names with a dot (`.`). Example: `column.nested_column`. */
  column?: string;
  /** Identifier. The resource name of the tag in URL format where tag ID is a system-generated identifier. Note: The tag itself might not be stored in the location specified in its name. */
  name?: string;
  /** Required. Maps the ID of a tag field to its value and additional information about that field. Tag template defines valid field IDs. A tag must have at least 1 field and at most 500 fields. */
  fields?: Record<string, GoogleCloudDatacatalogV1TagField>;
  /** Output only. The display name of the tag template. */
  templateDisplayName?: string;
}

export const GoogleCloudDatacatalogV1Tag: Schema.Schema<GoogleCloudDatacatalogV1Tag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataplexTransferStatus: Schema.optional(Schema.String),
    template: Schema.optional(Schema.String),
    column: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    fields: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudDatacatalogV1TagField),
    ),
    templateDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1Tag" });

export interface GoogleCloudDatacatalogV1ListTagsResponse {
  /** Tag details. */
  tags?: ReadonlyArray<GoogleCloudDatacatalogV1Tag>;
  /** Pagination token of the next results page. Empty if there are no more items in results. */
  nextPageToken?: string;
}

export const GoogleCloudDatacatalogV1ListTagsResponse: Schema.Schema<GoogleCloudDatacatalogV1ListTagsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.Array(GoogleCloudDatacatalogV1Tag)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1ListTagsResponse" });

export interface GoogleCloudDatacatalogV1TaggedEntry {
  /** Optional. Tags that should be deleted from the Data Catalog. Caller should populate template name and column only. */
  absentTags?: ReadonlyArray<GoogleCloudDatacatalogV1Tag>;
  /** Optional. Tags that should be ingested into the Data Catalog. Caller should populate template name, column and fields. */
  presentTags?: ReadonlyArray<GoogleCloudDatacatalogV1Tag>;
  /** Non-encrypted Data Catalog v1 Entry. */
  v1Entry?: GoogleCloudDatacatalogV1Entry;
}

export const GoogleCloudDatacatalogV1TaggedEntry: Schema.Schema<GoogleCloudDatacatalogV1TaggedEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    absentTags: Schema.optional(Schema.Array(GoogleCloudDatacatalogV1Tag)),
    presentTags: Schema.optional(Schema.Array(GoogleCloudDatacatalogV1Tag)),
    v1Entry: Schema.optional(GoogleCloudDatacatalogV1Entry),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1TaggedEntry" });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Schema<TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface GoogleCloudDatacatalogV1PolicyTag {
  /** Description of this policy tag. If not set, defaults to empty. The description must contain only Unicode characters, tabs, newlines, carriage returns and page breaks, and be at most 2000 bytes long when encoded in UTF-8. */
  description?: string;
  /** Resource name of this policy tag's parent policy tag. If empty, this is a top level tag. If not set, defaults to an empty string. For example, for the "LatLong" policy tag in the example above, this field contains the resource name of the "Geolocation" policy tag, and, for "Geolocation", this field is empty. */
  parentPolicyTag?: string;
  /** Identifier. Resource name of this policy tag in the URL format. The policy tag manager generates unique taxonomy IDs and policy tag IDs. */
  name?: string;
  /** Required. User-defined name of this policy tag. The name can't start or end with spaces and must be unique within the parent taxonomy, contain only Unicode letters, numbers, underscores, dashes and spaces, and be at most 200 bytes long when encoded in UTF-8. */
  displayName?: string;
  /** Output only. Resource names of child policy tags of this policy tag. */
  childPolicyTags?: ReadonlyArray<string>;
}

export const GoogleCloudDatacatalogV1PolicyTag: Schema.Schema<GoogleCloudDatacatalogV1PolicyTag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    parentPolicyTag: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    childPolicyTags: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1PolicyTag" });

export interface GoogleCloudDatacatalogV1TagTemplateField {
  /** The display name for this field. Defaults to an empty string. The name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), and can't start or end with spaces. The maximum length is 200 characters. */
  displayName?: string;
  /** The order of this field with respect to other fields in this tag template. For example, a higher value can indicate a more important field. The value can be negative. Multiple fields can have the same order and field orders within a tag don't have to be sequential. */
  order?: number;
  /** Identifier. The resource name of the tag template field in URL format. Example: `projects/{PROJECT_ID}/locations/{LOCATION}/tagTemplates/{TAG_TEMPLATE}/fields/{FIELD}` Note: The tag template field itself might not be stored in the location specified in its name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum length is 64 characters. */
  name?: string;
  /** Required. The type of value this tag field can contain. */
  type?: GoogleCloudDatacatalogV1FieldType;
  /** The description for this field. Defaults to an empty string. */
  description?: string;
  /** If true, this field is required. Defaults to false. */
  isRequired?: boolean;
}

export const GoogleCloudDatacatalogV1TagTemplateField: Schema.Schema<GoogleCloudDatacatalogV1TagTemplateField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    order: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    type: Schema.optional(GoogleCloudDatacatalogV1FieldType),
    description: Schema.optional(Schema.String),
    isRequired: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1TagTemplateField" });

export interface GoogleCloudDatacatalogV1TagTemplate {
  /** Identifier. The resource name of the tag template in URL format. Note: The tag template itself and its child resources might not be stored in the location specified in its name. */
  name?: string;
  /** Indicates whether tags created with this template are public. Public tags do not require tag template access to appear in ListTags API response. Additionally, you can search for a public tag by value with a simple search query in addition to using a ``tag:`` predicate. */
  isPubliclyReadable?: boolean;
  /** Optional. Transfer status of the TagTemplate */
  dataplexTransferStatus?:
    | "DATAPLEX_TRANSFER_STATUS_UNSPECIFIED"
    | "MIGRATED"
    | "TRANSFERRED"
    | (string & {});
  /** Display name for this template. Defaults to an empty string. The name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), and can't start or end with spaces. The maximum length is 200 characters. */
  displayName?: string;
  /** Required. Map of tag template field IDs to the settings for the field. This map is an exhaustive list of the allowed fields. The map must contain at least one field and at most 500 fields. The keys to this map are tag template field IDs. The IDs have the following limitations: * Can contain uppercase and lowercase letters, numbers (0-9) and underscores (_). * Must be at least 1 character and at most 64 characters long. * Must start with a letter or underscore. */
  fields?: Record<string, GoogleCloudDatacatalogV1TagTemplateField>;
}

export const GoogleCloudDatacatalogV1TagTemplate: Schema.Schema<GoogleCloudDatacatalogV1TagTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    isPubliclyReadable: Schema.optional(Schema.Boolean),
    dataplexTransferStatus: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    fields: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudDatacatalogV1TagTemplateField),
    ),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1TagTemplate" });

export interface GoogleCloudDatacatalogV1UnstarEntryResponse {}

export const GoogleCloudDatacatalogV1UnstarEntryResponse: Schema.Schema<GoogleCloudDatacatalogV1UnstarEntryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDatacatalogV1UnstarEntryResponse",
  });

export interface GetPolicyOptions {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  requestedPolicyVersion?: number;
}

export const GetPolicyOptions: Schema.Schema<GetPolicyOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestedPolicyVersion: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GetPolicyOptions" });

export interface GetIamPolicyRequest {
  /** OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`. */
  options?: GetPolicyOptions;
}

export const GetIamPolicyRequest: Schema.Schema<GetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    options: Schema.optional(GetPolicyOptions),
  }).annotate({ identifier: "GetIamPolicyRequest" });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Schema<TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface GoogleCloudDatacatalogV1StarEntryRequest {}

export const GoogleCloudDatacatalogV1StarEntryRequest: Schema.Schema<GoogleCloudDatacatalogV1StarEntryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDatacatalogV1StarEntryRequest",
  });

export interface GoogleCloudDatacatalogV1ListTaxonomiesResponse {
  /** Taxonomies that the project contains. */
  taxonomies?: ReadonlyArray<GoogleCloudDatacatalogV1Taxonomy>;
  /** Pagination token of the next results page. Empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const GoogleCloudDatacatalogV1ListTaxonomiesResponse: Schema.Schema<GoogleCloudDatacatalogV1ListTaxonomiesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    taxonomies: Schema.optional(Schema.Array(GoogleCloudDatacatalogV1Taxonomy)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1ListTaxonomiesResponse" });

export interface GoogleCloudDatacatalogV1UnstarEntryRequest {}

export const GoogleCloudDatacatalogV1UnstarEntryRequest: Schema.Schema<GoogleCloudDatacatalogV1UnstarEntryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDatacatalogV1UnstarEntryRequest",
  });

export interface GoogleCloudDatacatalogV1SearchCatalogRequest {
  /** Optional. Pagination token that, if specified, returns the next page of search results. If empty, returns the first page. This token is returned in the SearchCatalogResponse.next_page_token field of the response to a previous SearchCatalogRequest call. */
  pageToken?: string;
  /** Required. The scope of this search request. The `scope` is invalid if `include_org_ids`, `include_project_ids` are empty AND `include_gcp_public_datasets` is set to `false`. In this case, the request returns an error. */
  scope?: GoogleCloudDatacatalogV1SearchCatalogRequestScope;
  /** Optional. If set, use searchAll permission granted on organizations from `include_org_ids` and projects from `include_project_ids` instead of the fine grained per resource permissions when filtering the search results. The only allowed `order_by` criteria for admin_search mode is `default`. Using this flags guarantees a full recall of the search results. */
  adminSearch?: boolean;
  /** Optional. The query string with a minimum of 3 characters and specific syntax. For more information, see [Data Catalog search syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference). An empty query string returns all data assets (in the specified scope) that you have access to. A query string can be a simple `xyz` or qualified by predicates: * `name:x` * `column:y` * `description:z` */
  query?: string;
  /** Upper bound on the number of results you can get in a single response. Can't be negative or 0, defaults to 10 in this case. The maximum number is 1000. If exceeded, throws an "invalid argument" exception. */
  pageSize?: number;
  /** Specifies the order of results. Currently supported case-sensitive values are: * `relevance` that can only be descending * `last_modified_timestamp [asc|desc]` with descending (`desc`) as default * `default` that can only be descending Search queries don't guarantee full recall. Results that match your query might not be returned, even in subsequent result pages. Additionally, returned (and not returned) results can vary if you repeat search queries. If you are experiencing recall issues and you don't have to fetch the results in any specific order, consider setting this parameter to `default`. If this parameter is omitted, it defaults to the descending `relevance`. */
  orderBy?: string;
}

export const GoogleCloudDatacatalogV1SearchCatalogRequest: Schema.Schema<GoogleCloudDatacatalogV1SearchCatalogRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String),
    scope: Schema.optional(GoogleCloudDatacatalogV1SearchCatalogRequestScope),
    adminSearch: Schema.optional(Schema.Boolean),
    query: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    orderBy: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1SearchCatalogRequest" });

export interface GoogleCloudDatacatalogV1ReconcileTagsMetadata {
  /** State of the reconciliation operation. */
  state?:
    | "RECONCILIATION_STATE_UNSPECIFIED"
    | "RECONCILIATION_QUEUED"
    | "RECONCILIATION_IN_PROGRESS"
    | "RECONCILIATION_DONE"
    | (string & {});
  /** Maps the name of each tagged column (or empty string for a sole entry) to tagging operation status. */
  errors?: Record<string, Status>;
}

export const GoogleCloudDatacatalogV1ReconcileTagsMetadata: Schema.Schema<GoogleCloudDatacatalogV1ReconcileTagsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    errors: Schema.optional(Schema.Record(Schema.String, Status)),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1ReconcileTagsMetadata" });

export interface GoogleCloudDatacatalogV1ImportEntriesMetadata {
  /** State of the import operation. */
  state?:
    | "IMPORT_STATE_UNSPECIFIED"
    | "IMPORT_QUEUED"
    | "IMPORT_IN_PROGRESS"
    | "IMPORT_DONE"
    | "IMPORT_OBSOLETE"
    | (string & {});
  /** Partial errors that are encountered during the ImportEntries operation. There is no guarantee that all the encountered errors are reported. However, if no errors are reported, it means that no errors were encountered. */
  errors?: ReadonlyArray<Status>;
}

export const GoogleCloudDatacatalogV1ImportEntriesMetadata: Schema.Schema<GoogleCloudDatacatalogV1ImportEntriesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    errors: Schema.optional(Schema.Array(Status)),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1ImportEntriesMetadata" });

export interface GoogleCloudDatacatalogV1ImportEntriesRequest {
  /** Path to a Cloud Storage bucket that contains a dump ready for ingestion. */
  gcsBucketPath?: string;
  /** Optional. (Optional) Dataplex Universal Catalog task job id, if specified will be used as part of ImportEntries LRO ID */
  jobId?: string;
}

export const GoogleCloudDatacatalogV1ImportEntriesRequest: Schema.Schema<GoogleCloudDatacatalogV1ImportEntriesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsBucketPath: Schema.optional(Schema.String),
    jobId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1ImportEntriesRequest" });

export interface GoogleCloudDatacatalogV1DumpItem {
  /** Entry and its tags. */
  taggedEntry?: GoogleCloudDatacatalogV1TaggedEntry;
}

export const GoogleCloudDatacatalogV1DumpItem: Schema.Schema<GoogleCloudDatacatalogV1DumpItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    taggedEntry: Schema.optional(GoogleCloudDatacatalogV1TaggedEntry),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1DumpItem" });

export interface GoogleCloudDatacatalogV1ReconcileTagsResponse {
  /** Number of tags created in the request. */
  createdTagsCount?: string;
  /** Number of tags updated in the request. */
  updatedTagsCount?: string;
  /** Number of tags deleted in the request. */
  deletedTagsCount?: string;
}

export const GoogleCloudDatacatalogV1ReconcileTagsResponse: Schema.Schema<GoogleCloudDatacatalogV1ReconcileTagsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createdTagsCount: Schema.optional(Schema.String),
    updatedTagsCount: Schema.optional(Schema.String),
    deletedTagsCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1ReconcileTagsResponse" });

export interface GoogleCloudDatacatalogV1ImportEntriesResponse {
  /** Cumulative number of entries created and entries updated as a result of import operation. */
  upsertedEntriesCount?: string;
  /** Number of entries deleted as a result of import operation. */
  deletedEntriesCount?: string;
}

export const GoogleCloudDatacatalogV1ImportEntriesResponse: Schema.Schema<GoogleCloudDatacatalogV1ImportEntriesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    upsertedEntriesCount: Schema.optional(Schema.String),
    deletedEntriesCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1ImportEntriesResponse" });

export interface GoogleCloudDatacatalogV1ReplaceTaxonomyRequest {
  /** Required. Taxonomy to update along with its child policy tags. */
  serializedTaxonomy?: GoogleCloudDatacatalogV1SerializedTaxonomy;
}

export const GoogleCloudDatacatalogV1ReplaceTaxonomyRequest: Schema.Schema<GoogleCloudDatacatalogV1ReplaceTaxonomyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serializedTaxonomy: Schema.optional(
      GoogleCloudDatacatalogV1SerializedTaxonomy,
    ),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1ReplaceTaxonomyRequest" });

export interface GoogleCloudDatacatalogV1ListPolicyTagsResponse {
  /** The policy tags that belong to the taxonomy. */
  policyTags?: ReadonlyArray<GoogleCloudDatacatalogV1PolicyTag>;
  /** Pagination token of the next results page. Empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const GoogleCloudDatacatalogV1ListPolicyTagsResponse: Schema.Schema<GoogleCloudDatacatalogV1ListPolicyTagsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policyTags: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogV1PolicyTag),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1ListPolicyTagsResponse" });

export interface GoogleCloudDatacatalogV1ReconcileTagsRequest {
  /** A list of tags to apply to an entry. A tag can specify a tag template, which must be the template specified in the `ReconcileTagsRequest`. The sole entry and each of its columns must be mentioned at most once. */
  tags?: ReadonlyArray<GoogleCloudDatacatalogV1Tag>;
  forceDeleteMissing?: boolean;
  /** Required. The name of the tag template, which is used for reconciliation. */
  tagTemplate?: string;
}

export const GoogleCloudDatacatalogV1ReconcileTagsRequest: Schema.Schema<GoogleCloudDatacatalogV1ReconcileTagsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.Array(GoogleCloudDatacatalogV1Tag)),
    forceDeleteMissing: Schema.optional(Schema.Boolean),
    tagTemplate: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogV1ReconcileTagsRequest" });

export interface GoogleCloudDatacatalogV1RenameTagTemplateFieldRequest {
  /** Required. The new ID of this tag template field. For example, `my_new_field`. */
  newTagTemplateFieldId?: string;
}

export const GoogleCloudDatacatalogV1RenameTagTemplateFieldRequest: Schema.Schema<GoogleCloudDatacatalogV1RenameTagTemplateFieldRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    newTagTemplateFieldId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatacatalogV1RenameTagTemplateFieldRequest",
  });

export interface GoogleCloudDatacatalogV1ModifyEntryOverviewRequest {
  /** Required. The new value for the Entry Overview. */
  entryOverview?: GoogleCloudDatacatalogV1EntryOverview;
}

export const GoogleCloudDatacatalogV1ModifyEntryOverviewRequest: Schema.Schema<GoogleCloudDatacatalogV1ModifyEntryOverviewRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entryOverview: Schema.optional(GoogleCloudDatacatalogV1EntryOverview),
  }).annotate({
    identifier: "GoogleCloudDatacatalogV1ModifyEntryOverviewRequest",
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

export interface SearchCatalogRequest {
  /** Request body */
  body?: GoogleCloudDatacatalogV1SearchCatalogRequest;
}

export const SearchCatalogRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(GoogleCloudDatacatalogV1SearchCatalogRequest).pipe(
    T.HttpBody(),
  ),
}).pipe(
  T.Http({ method: "POST", path: "v1/catalog:search", hasBody: true }),
  svc,
) as unknown as Schema.Schema<SearchCatalogRequest>;

export type SearchCatalogResponse =
  GoogleCloudDatacatalogV1SearchCatalogResponse;
export const SearchCatalogResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1SearchCatalogResponse;

export type SearchCatalogError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Searches Data Catalog for multiple resources like entries and tags that match a query. This is a [Custom Method] (https://cloud.google.com/apis/design/custom_methods) that doesn't return all information on a resource, only its ID and high level fields. To get more information, you can subsequently call specific get methods. Note: Data Catalog search queries don't guarantee full recall. Results that match your query might not be returned, even in subsequent result pages. Additionally, returned (and not returned) results can vary if you repeat search queries. For more information, see [Data Catalog search syntax] (https://cloud.google.com/data-catalog/docs/how-to/search-reference). */
export const searchCatalog: API.OperationMethod<
  SearchCatalogRequest,
  SearchCatalogResponse,
  SearchCatalogError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchCatalogRequest,
  output: SearchCatalogResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RetrieveEffectiveConfigProjectsLocationsRequest {
  /** Required. The resource whose effective config is being retrieved. */
  name: string;
}

export const RetrieveEffectiveConfigProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:retrieveEffectiveConfig" }),
    svc,
  ) as unknown as Schema.Schema<RetrieveEffectiveConfigProjectsLocationsRequest>;

export type RetrieveEffectiveConfigProjectsLocationsResponse =
  GoogleCloudDatacatalogV1MigrationConfig;
export const RetrieveEffectiveConfigProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1MigrationConfig;

export type RetrieveEffectiveConfigProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the effective configuration related to the migration from Data Catalog to Dataplex Universal Catalog for a specific organization or project. If there is no specific configuration set for the resource, the setting is checked hierarchicahlly through the ancestors of the resource, starting from the resource itself. */
export const retrieveEffectiveConfigProjectsLocations: API.OperationMethod<
  RetrieveEffectiveConfigProjectsLocationsRequest,
  RetrieveEffectiveConfigProjectsLocationsResponse,
  RetrieveEffectiveConfigProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RetrieveEffectiveConfigProjectsLocationsRequest,
  output: RetrieveEffectiveConfigProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetConfigProjectsLocationsRequest {
  /** Required. The organization or project whose config is being specified. */
  name: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1SetConfigRequest;
}

export const SetConfigProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDatacatalogV1SetConfigRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:setConfig", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SetConfigProjectsLocationsRequest>;

export type SetConfigProjectsLocationsResponse =
  GoogleCloudDatacatalogV1MigrationConfig;
export const SetConfigProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1MigrationConfig;

export type SetConfigProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the configuration related to the migration to Dataplex Universal Catalog for an organization or project. */
export const setConfigProjectsLocations: API.OperationMethod<
  SetConfigProjectsLocationsRequest,
  SetConfigProjectsLocationsResponse,
  SetConfigProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetConfigProjectsLocationsRequest,
  output: SetConfigProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list filter. */
  filter?: string;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
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

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
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

export interface GetProjectsLocationsEntryGroupsRequest {
  /** Required. The name of the entry group to get. */
  name: string;
  /** The fields to return. If empty or omitted, all fields are returned. */
  readMask?: string;
}

export const GetProjectsLocationsEntryGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    readMask: Schema.optional(Schema.String).pipe(T.HttpQuery("readMask")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsEntryGroupsRequest>;

export type GetProjectsLocationsEntryGroupsResponse =
  GoogleCloudDatacatalogV1EntryGroup;
export const GetProjectsLocationsEntryGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1EntryGroup;

export type GetProjectsLocationsEntryGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an entry group. */
export const getProjectsLocationsEntryGroups: API.OperationMethod<
  GetProjectsLocationsEntryGroupsRequest,
  GetProjectsLocationsEntryGroupsResponse,
  GetProjectsLocationsEntryGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsEntryGroupsRequest,
  output: GetProjectsLocationsEntryGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsEntryGroupsRequest {
  /** Required. The name of the location that contains the entry groups to list. Can be provided as a URL. */
  parent: string;
  /** Optional. Pagination token that specifies the next page to return. If empty, returns the first page. */
  pageToken?: string;
  /** Optional. The maximum number of items to return. Default is 10. Maximum limit is 1000. Throws an invalid argument if `page_size` is greater than 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsEntryGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/entryGroups" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsEntryGroupsRequest>;

export type ListProjectsLocationsEntryGroupsResponse =
  GoogleCloudDatacatalogV1ListEntryGroupsResponse;
export const ListProjectsLocationsEntryGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1ListEntryGroupsResponse;

export type ListProjectsLocationsEntryGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists entry groups. */
export const listProjectsLocationsEntryGroups: API.PaginatedOperationMethod<
  ListProjectsLocationsEntryGroupsRequest,
  ListProjectsLocationsEntryGroupsResponse,
  ListProjectsLocationsEntryGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsEntryGroupsRequest,
  output: ListProjectsLocationsEntryGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface TestIamPermissionsProjectsLocationsEntryGroupsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsEntryGroupsRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsEntryGroupsRequest>;

export type TestIamPermissionsProjectsLocationsEntryGroupsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsEntryGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsEntryGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets your permissions on a resource. Returns an empty set of permissions if the resource doesn't exist. Supported resources are: - Tag templates - Entry groups Note: This method gets policies only within Data Catalog and can't be used to get policies from BigQuery, Pub/Sub, Dataproc Metastore, and any external Google Cloud Platform resources ingested into Data Catalog. No Google IAM permissions are required to call this method. */
export const testIamPermissionsProjectsLocationsEntryGroups: API.OperationMethod<
  TestIamPermissionsProjectsLocationsEntryGroupsRequest,
  TestIamPermissionsProjectsLocationsEntryGroupsResponse,
  TestIamPermissionsProjectsLocationsEntryGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsEntryGroupsRequest,
  output: TestIamPermissionsProjectsLocationsEntryGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsEntryGroupsRequest {
  /** Required. The names of the project and location that the new entry group belongs to. Note: The entry group itself and its child resources might not be stored in the location specified in its name. */
  parent: string;
  /** Required. The ID of the entry group to create. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and must start with a letter or underscore. The maximum size is 64 bytes when encoded in UTF-8. */
  entryGroupId?: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1EntryGroup;
}

export const CreateProjectsLocationsEntryGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    entryGroupId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("entryGroupId"),
    ),
    body: Schema.optional(GoogleCloudDatacatalogV1EntryGroup).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/entryGroups", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsEntryGroupsRequest>;

export type CreateProjectsLocationsEntryGroupsResponse =
  GoogleCloudDatacatalogV1EntryGroup;
export const CreateProjectsLocationsEntryGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1EntryGroup;

export type CreateProjectsLocationsEntryGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an entry group. An entry group contains logically related entries together with [Cloud Identity and Access Management](/data-catalog/docs/concepts/iam) policies. These policies specify users who can create, edit, and view entries within entry groups. Data Catalog automatically creates entry groups with names that start with the `@` symbol for the following resources: * BigQuery entries (`@bigquery`) * Pub/Sub topics (`@pubsub`) * Dataproc Metastore services (`@dataproc_metastore_{SERVICE_NAME_HASH}`) You can create your own entry groups for Cloud Storage fileset entries and custom entries together with the corresponding IAM policies. User-created entry groups can't contain the `@` symbol, it is reserved for automatically created groups. Entry groups, like entries, can be searched. A maximum of 10,000 entry groups may be created per organization across all locations. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project). */
export const createProjectsLocationsEntryGroups: API.OperationMethod<
  CreateProjectsLocationsEntryGroupsRequest,
  CreateProjectsLocationsEntryGroupsResponse,
  CreateProjectsLocationsEntryGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsEntryGroupsRequest,
  output: CreateProjectsLocationsEntryGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsEntryGroupsRequest {
  /** Identifier. The resource name of the entry group in URL format. Note: The entry group itself and its child resources might not be stored in the location specified in its name. */
  name: string;
  /** Names of fields whose values to overwrite on an entry group. If this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied. */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1EntryGroup;
}

export const PatchProjectsLocationsEntryGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDatacatalogV1EntryGroup).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsEntryGroupsRequest>;

export type PatchProjectsLocationsEntryGroupsResponse =
  GoogleCloudDatacatalogV1EntryGroup;
export const PatchProjectsLocationsEntryGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1EntryGroup;

export type PatchProjectsLocationsEntryGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an entry group. You must enable the Data Catalog API in the project identified by the `entry_group.name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project). */
export const patchProjectsLocationsEntryGroups: API.OperationMethod<
  PatchProjectsLocationsEntryGroupsRequest,
  PatchProjectsLocationsEntryGroupsResponse,
  PatchProjectsLocationsEntryGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsEntryGroupsRequest,
  output: PatchProjectsLocationsEntryGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsEntryGroupsRequest {
  /** Required. The name of the entry group to delete. */
  name: string;
  /** Optional. If true, deletes all entries in the entry group. */
  force?: boolean;
}

export const DeleteProjectsLocationsEntryGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsEntryGroupsRequest>;

export type DeleteProjectsLocationsEntryGroupsResponse = Empty;
export const DeleteProjectsLocationsEntryGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsEntryGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an entry group. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project). */
export const deleteProjectsLocationsEntryGroups: API.OperationMethod<
  DeleteProjectsLocationsEntryGroupsRequest,
  DeleteProjectsLocationsEntryGroupsResponse,
  DeleteProjectsLocationsEntryGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsEntryGroupsRequest,
  output: DeleteProjectsLocationsEntryGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsEntryGroupsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsEntryGroupsRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsEntryGroupsRequest>;

export type SetIamPolicyProjectsLocationsEntryGroupsResponse = Policy;
export const SetIamPolicyProjectsLocationsEntryGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsEntryGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets an access control policy for a resource. Replaces any existing policy. Supported resources are: - Tag templates - Entry groups Note: This method sets policies only within Data Catalog and can't be used to manage policies in BigQuery, Pub/Sub, Dataproc Metastore, and any external Google Cloud Platform resources synced with the Data Catalog. To call this method, you must have the following Google IAM permissions: - `datacatalog.tagTemplates.setIamPolicy` to set policies on tag templates. - `datacatalog.entryGroups.setIamPolicy` to set policies on entry groups. */
export const setIamPolicyProjectsLocationsEntryGroups: API.OperationMethod<
  SetIamPolicyProjectsLocationsEntryGroupsRequest,
  SetIamPolicyProjectsLocationsEntryGroupsResponse,
  SetIamPolicyProjectsLocationsEntryGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsEntryGroupsRequest,
  output: SetIamPolicyProjectsLocationsEntryGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsEntryGroupsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GetIamPolicyRequest;
}

export const GetIamPolicyProjectsLocationsEntryGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:getIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsEntryGroupsRequest>;

export type GetIamPolicyProjectsLocationsEntryGroupsResponse = Policy;
export const GetIamPolicyProjectsLocationsEntryGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsEntryGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the access control policy for a resource. May return: * A`NOT_FOUND` error if the resource doesn't exist or you don't have the permission to view it. * An empty policy if the resource exists but doesn't have a set policy. Supported resources are: - Tag templates - Entry groups Note: This method doesn't get policies from Google Cloud Platform resources ingested into Data Catalog. To call this method, you must have the following Google IAM permissions: - `datacatalog.tagTemplates.getIamPolicy` to get policies on tag templates. - `datacatalog.entryGroups.getIamPolicy` to get policies on entry groups. */
export const getIamPolicyProjectsLocationsEntryGroups: API.OperationMethod<
  GetIamPolicyProjectsLocationsEntryGroupsRequest,
  GetIamPolicyProjectsLocationsEntryGroupsResponse,
  GetIamPolicyProjectsLocationsEntryGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsEntryGroupsRequest,
  output: GetIamPolicyProjectsLocationsEntryGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StarProjectsLocationsEntryGroupsEntriesRequest {
  /** Required. The name of the entry to mark as starred. */
  name: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1StarEntryRequest;
}

export const StarProjectsLocationsEntryGroupsEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDatacatalogV1StarEntryRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:star", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<StarProjectsLocationsEntryGroupsEntriesRequest>;

export type StarProjectsLocationsEntryGroupsEntriesResponse =
  GoogleCloudDatacatalogV1StarEntryResponse;
export const StarProjectsLocationsEntryGroupsEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1StarEntryResponse;

export type StarProjectsLocationsEntryGroupsEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks an Entry as starred by the current user. Starring information is private to each user. */
export const starProjectsLocationsEntryGroupsEntries: API.OperationMethod<
  StarProjectsLocationsEntryGroupsEntriesRequest,
  StarProjectsLocationsEntryGroupsEntriesResponse,
  StarProjectsLocationsEntryGroupsEntriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StarProjectsLocationsEntryGroupsEntriesRequest,
  output: StarProjectsLocationsEntryGroupsEntriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImportProjectsLocationsEntryGroupsEntriesRequest {
  /** Required. Target entry group for ingested entries. */
  parent: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1ImportEntriesRequest;
}

export const ImportProjectsLocationsEntryGroupsEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDatacatalogV1ImportEntriesRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/entries:import",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportProjectsLocationsEntryGroupsEntriesRequest>;

export type ImportProjectsLocationsEntryGroupsEntriesResponse = Operation;
export const ImportProjectsLocationsEntryGroupsEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ImportProjectsLocationsEntryGroupsEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Imports entries from a source, such as data previously dumped into a Cloud Storage bucket, into Data Catalog. Import of entries is a sync operation that reconciles the state of the third-party system with the Data Catalog. `ImportEntries` accepts source data snapshots of a third-party system. Snapshot should be delivered as a .wire or base65-encoded .txt file containing a sequence of Protocol Buffer messages of DumpItem type. `ImportEntries` returns a long-running operation resource that can be queried with Operations.GetOperation to return ImportEntriesMetadata and an ImportEntriesResponse message. */
export const importProjectsLocationsEntryGroupsEntries: API.OperationMethod<
  ImportProjectsLocationsEntryGroupsEntriesRequest,
  ImportProjectsLocationsEntryGroupsEntriesResponse,
  ImportProjectsLocationsEntryGroupsEntriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportProjectsLocationsEntryGroupsEntriesRequest,
  output: ImportProjectsLocationsEntryGroupsEntriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UnstarProjectsLocationsEntryGroupsEntriesRequest {
  /** Required. The name of the entry to mark as **not** starred. */
  name: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1UnstarEntryRequest;
}

export const UnstarProjectsLocationsEntryGroupsEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDatacatalogV1UnstarEntryRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:unstar", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UnstarProjectsLocationsEntryGroupsEntriesRequest>;

export type UnstarProjectsLocationsEntryGroupsEntriesResponse =
  GoogleCloudDatacatalogV1UnstarEntryResponse;
export const UnstarProjectsLocationsEntryGroupsEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1UnstarEntryResponse;

export type UnstarProjectsLocationsEntryGroupsEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks an Entry as NOT starred by the current user. Starring information is private to each user. */
export const unstarProjectsLocationsEntryGroupsEntries: API.OperationMethod<
  UnstarProjectsLocationsEntryGroupsEntriesRequest,
  UnstarProjectsLocationsEntryGroupsEntriesResponse,
  UnstarProjectsLocationsEntryGroupsEntriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UnstarProjectsLocationsEntryGroupsEntriesRequest,
  output: UnstarProjectsLocationsEntryGroupsEntriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsEntryGroupsEntriesRequest {
  /** Names of fields whose values to overwrite on an entry. If this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied. You can modify only the fields listed below. For entries with type `DATA_STREAM`: * `schema` For entries with type `FILESET`: * `schema` * `display_name` * `description` * `gcs_fileset_spec` * `gcs_fileset_spec.file_patterns` For entries with `user_specified_type`: * `schema` * `display_name` * `description` * `user_specified_type` * `user_specified_system` * `linked_resource` * `source_system_timestamps` */
  updateMask?: string;
  /** Output only. Identifier. The resource name of an entry in URL format. Note: The entry itself and its child resources might not be stored in the location specified in its name. */
  name: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1Entry;
}

export const PatchProjectsLocationsEntryGroupsEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDatacatalogV1Entry).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsEntryGroupsEntriesRequest>;

export type PatchProjectsLocationsEntryGroupsEntriesResponse =
  GoogleCloudDatacatalogV1Entry;
export const PatchProjectsLocationsEntryGroupsEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1Entry;

export type PatchProjectsLocationsEntryGroupsEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing entry. You must enable the Data Catalog API in the project identified by the `entry.name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project). */
export const patchProjectsLocationsEntryGroupsEntries: API.OperationMethod<
  PatchProjectsLocationsEntryGroupsEntriesRequest,
  PatchProjectsLocationsEntryGroupsEntriesResponse,
  PatchProjectsLocationsEntryGroupsEntriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsEntryGroupsEntriesRequest,
  output: PatchProjectsLocationsEntryGroupsEntriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsEntryGroupsEntriesRequest {
  /** Required. The name of the entry to delete. */
  name: string;
}

export const DeleteProjectsLocationsEntryGroupsEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsEntryGroupsEntriesRequest>;

export type DeleteProjectsLocationsEntryGroupsEntriesResponse = Empty;
export const DeleteProjectsLocationsEntryGroupsEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsEntryGroupsEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing entry. You can delete only the entries created by the CreateEntry method. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project). */
export const deleteProjectsLocationsEntryGroupsEntries: API.OperationMethod<
  DeleteProjectsLocationsEntryGroupsEntriesRequest,
  DeleteProjectsLocationsEntryGroupsEntriesResponse,
  DeleteProjectsLocationsEntryGroupsEntriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsEntryGroupsEntriesRequest,
  output: DeleteProjectsLocationsEntryGroupsEntriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsEntryGroupsEntriesRequest {
  /** Required. The ID of the entry to create. The ID must contain only letters (a-z, A-Z), numbers (0-9), and underscores (_). The maximum size is 64 bytes when encoded in UTF-8. */
  entryId?: string;
  /** Required. The name of the entry group this entry belongs to. Note: The entry itself and its child resources might not be stored in the location specified in its name. */
  parent: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1Entry;
}

export const CreateProjectsLocationsEntryGroupsEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entryId: Schema.optional(Schema.String).pipe(T.HttpQuery("entryId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDatacatalogV1Entry).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/entries", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsEntryGroupsEntriesRequest>;

export type CreateProjectsLocationsEntryGroupsEntriesResponse =
  GoogleCloudDatacatalogV1Entry;
export const CreateProjectsLocationsEntryGroupsEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1Entry;

export type CreateProjectsLocationsEntryGroupsEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an entry. You can create entries only with 'FILESET', 'CLUSTER', 'DATA_STREAM', or custom types. Data Catalog automatically creates entries with other types during metadata ingestion from integrated systems. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project). An entry group can have a maximum of 100,000 entries. */
export const createProjectsLocationsEntryGroupsEntries: API.OperationMethod<
  CreateProjectsLocationsEntryGroupsEntriesRequest,
  CreateProjectsLocationsEntryGroupsEntriesResponse,
  CreateProjectsLocationsEntryGroupsEntriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsEntryGroupsEntriesRequest,
  output: CreateProjectsLocationsEntryGroupsEntriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsEntryGroupsEntriesRequest {
  /** Required. The name of the entry to get. */
  name: string;
}

export const GetProjectsLocationsEntryGroupsEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsEntryGroupsEntriesRequest>;

export type GetProjectsLocationsEntryGroupsEntriesResponse =
  GoogleCloudDatacatalogV1Entry;
export const GetProjectsLocationsEntryGroupsEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1Entry;

export type GetProjectsLocationsEntryGroupsEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an entry. */
export const getProjectsLocationsEntryGroupsEntries: API.OperationMethod<
  GetProjectsLocationsEntryGroupsEntriesRequest,
  GetProjectsLocationsEntryGroupsEntriesResponse,
  GetProjectsLocationsEntryGroupsEntriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsEntryGroupsEntriesRequest,
  output: GetProjectsLocationsEntryGroupsEntriesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsEntryGroupsEntriesRequest {
  /** Required. The name of the entry group that contains the entries to list. Can be provided in URL format. */
  parent: string;
  /** Pagination token that specifies the next page to return. If empty, the first page is returned. */
  pageToken?: string;
  /** The maximum number of items to return. Default is 10. Maximum limit is 1000. Throws an invalid argument if `page_size` is more than 1000. */
  pageSize?: number;
  /** The fields to return for each entry. If empty or omitted, all fields are returned. For example, to return a list of entries with only the `name` field, set `read_mask` to only one path with the `name` value. */
  readMask?: string;
}

export const ListProjectsLocationsEntryGroupsEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    readMask: Schema.optional(Schema.String).pipe(T.HttpQuery("readMask")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/entries" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsEntryGroupsEntriesRequest>;

export type ListProjectsLocationsEntryGroupsEntriesResponse =
  GoogleCloudDatacatalogV1ListEntriesResponse;
export const ListProjectsLocationsEntryGroupsEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1ListEntriesResponse;

export type ListProjectsLocationsEntryGroupsEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists entries. Note: Currently, this method can list only custom entries. To get a list of both custom and automatically created entries, use SearchCatalog. */
export const listProjectsLocationsEntryGroupsEntries: API.PaginatedOperationMethod<
  ListProjectsLocationsEntryGroupsEntriesRequest,
  ListProjectsLocationsEntryGroupsEntriesResponse,
  ListProjectsLocationsEntryGroupsEntriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsEntryGroupsEntriesRequest,
  output: ListProjectsLocationsEntryGroupsEntriesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ModifyEntryContactsProjectsLocationsEntryGroupsEntriesRequest {
  /** Required. The full resource name of the entry. */
  name: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1ModifyEntryContactsRequest;
}

export const ModifyEntryContactsProjectsLocationsEntryGroupsEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDatacatalogV1ModifyEntryContactsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:modifyEntryContacts",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ModifyEntryContactsProjectsLocationsEntryGroupsEntriesRequest>;

export type ModifyEntryContactsProjectsLocationsEntryGroupsEntriesResponse =
  GoogleCloudDatacatalogV1Contacts;
export const ModifyEntryContactsProjectsLocationsEntryGroupsEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1Contacts;

export type ModifyEntryContactsProjectsLocationsEntryGroupsEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Modifies contacts, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateContacts` IAM permission on the corresponding project. */
export const modifyEntryContactsProjectsLocationsEntryGroupsEntries: API.OperationMethod<
  ModifyEntryContactsProjectsLocationsEntryGroupsEntriesRequest,
  ModifyEntryContactsProjectsLocationsEntryGroupsEntriesResponse,
  ModifyEntryContactsProjectsLocationsEntryGroupsEntriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ModifyEntryContactsProjectsLocationsEntryGroupsEntriesRequest,
  output: ModifyEntryContactsProjectsLocationsEntryGroupsEntriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsEntryGroupsEntriesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsEntryGroupsEntriesRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsEntryGroupsEntriesRequest>;

export type TestIamPermissionsProjectsLocationsEntryGroupsEntriesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsEntryGroupsEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsEntryGroupsEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets your permissions on a resource. Returns an empty set of permissions if the resource doesn't exist. Supported resources are: - Tag templates - Entry groups Note: This method gets policies only within Data Catalog and can't be used to get policies from BigQuery, Pub/Sub, Dataproc Metastore, and any external Google Cloud Platform resources ingested into Data Catalog. No Google IAM permissions are required to call this method. */
export const testIamPermissionsProjectsLocationsEntryGroupsEntries: API.OperationMethod<
  TestIamPermissionsProjectsLocationsEntryGroupsEntriesRequest,
  TestIamPermissionsProjectsLocationsEntryGroupsEntriesResponse,
  TestIamPermissionsProjectsLocationsEntryGroupsEntriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsEntryGroupsEntriesRequest,
  output: TestIamPermissionsProjectsLocationsEntryGroupsEntriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsEntryGroupsEntriesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GetIamPolicyRequest;
}

export const GetIamPolicyProjectsLocationsEntryGroupsEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:getIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsEntryGroupsEntriesRequest>;

export type GetIamPolicyProjectsLocationsEntryGroupsEntriesResponse = Policy;
export const GetIamPolicyProjectsLocationsEntryGroupsEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsEntryGroupsEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the access control policy for a resource. May return: * A`NOT_FOUND` error if the resource doesn't exist or you don't have the permission to view it. * An empty policy if the resource exists but doesn't have a set policy. Supported resources are: - Tag templates - Entry groups Note: This method doesn't get policies from Google Cloud Platform resources ingested into Data Catalog. To call this method, you must have the following Google IAM permissions: - `datacatalog.tagTemplates.getIamPolicy` to get policies on tag templates. - `datacatalog.entryGroups.getIamPolicy` to get policies on entry groups. */
export const getIamPolicyProjectsLocationsEntryGroupsEntries: API.OperationMethod<
  GetIamPolicyProjectsLocationsEntryGroupsEntriesRequest,
  GetIamPolicyProjectsLocationsEntryGroupsEntriesResponse,
  GetIamPolicyProjectsLocationsEntryGroupsEntriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsEntryGroupsEntriesRequest,
  output: GetIamPolicyProjectsLocationsEntryGroupsEntriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ModifyEntryOverviewProjectsLocationsEntryGroupsEntriesRequest {
  /** Required. The full resource name of the entry. */
  name: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1ModifyEntryOverviewRequest;
}

export const ModifyEntryOverviewProjectsLocationsEntryGroupsEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDatacatalogV1ModifyEntryOverviewRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:modifyEntryOverview",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ModifyEntryOverviewProjectsLocationsEntryGroupsEntriesRequest>;

export type ModifyEntryOverviewProjectsLocationsEntryGroupsEntriesResponse =
  GoogleCloudDatacatalogV1EntryOverview;
export const ModifyEntryOverviewProjectsLocationsEntryGroupsEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1EntryOverview;

export type ModifyEntryOverviewProjectsLocationsEntryGroupsEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Modifies entry overview, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateOverview` IAM permission on the corresponding project. */
export const modifyEntryOverviewProjectsLocationsEntryGroupsEntries: API.OperationMethod<
  ModifyEntryOverviewProjectsLocationsEntryGroupsEntriesRequest,
  ModifyEntryOverviewProjectsLocationsEntryGroupsEntriesResponse,
  ModifyEntryOverviewProjectsLocationsEntryGroupsEntriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ModifyEntryOverviewProjectsLocationsEntryGroupsEntriesRequest,
  output: ModifyEntryOverviewProjectsLocationsEntryGroupsEntriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsEntryGroupsEntriesTagsRequest {
  /** Names of fields whose values to overwrite on a tag. Currently, a tag has the only modifiable field with the name `fields`. In general, if this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied. */
  updateMask?: string;
  /** Identifier. The resource name of the tag in URL format where tag ID is a system-generated identifier. Note: The tag itself might not be stored in the location specified in its name. */
  name: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1Tag;
}

export const PatchProjectsLocationsEntryGroupsEntriesTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDatacatalogV1Tag).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsEntryGroupsEntriesTagsRequest>;

export type PatchProjectsLocationsEntryGroupsEntriesTagsResponse =
  GoogleCloudDatacatalogV1Tag;
export const PatchProjectsLocationsEntryGroupsEntriesTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1Tag;

export type PatchProjectsLocationsEntryGroupsEntriesTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing tag. */
export const patchProjectsLocationsEntryGroupsEntriesTags: API.OperationMethod<
  PatchProjectsLocationsEntryGroupsEntriesTagsRequest,
  PatchProjectsLocationsEntryGroupsEntriesTagsResponse,
  PatchProjectsLocationsEntryGroupsEntriesTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsEntryGroupsEntriesTagsRequest,
  output: PatchProjectsLocationsEntryGroupsEntriesTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsEntryGroupsEntriesTagsRequest {
  /** Required. The name of the tag to delete. */
  name: string;
}

export const DeleteProjectsLocationsEntryGroupsEntriesTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsEntryGroupsEntriesTagsRequest>;

export type DeleteProjectsLocationsEntryGroupsEntriesTagsResponse = Empty;
export const DeleteProjectsLocationsEntryGroupsEntriesTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsEntryGroupsEntriesTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a tag. */
export const deleteProjectsLocationsEntryGroupsEntriesTags: API.OperationMethod<
  DeleteProjectsLocationsEntryGroupsEntriesTagsRequest,
  DeleteProjectsLocationsEntryGroupsEntriesTagsResponse,
  DeleteProjectsLocationsEntryGroupsEntriesTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsEntryGroupsEntriesTagsRequest,
  output: DeleteProjectsLocationsEntryGroupsEntriesTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReconcileProjectsLocationsEntryGroupsEntriesTagsRequest {
  /** Required. Name of Entry to be tagged. */
  parent: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1ReconcileTagsRequest;
}

export const ReconcileProjectsLocationsEntryGroupsEntriesTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDatacatalogV1ReconcileTagsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/tags:reconcile",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ReconcileProjectsLocationsEntryGroupsEntriesTagsRequest>;

export type ReconcileProjectsLocationsEntryGroupsEntriesTagsResponse =
  Operation;
export const ReconcileProjectsLocationsEntryGroupsEntriesTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ReconcileProjectsLocationsEntryGroupsEntriesTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** `ReconcileTags` creates or updates a list of tags on the entry. If the ReconcileTagsRequest.force_delete_missing parameter is set, the operation deletes tags not included in the input tag list. `ReconcileTags` returns a long-running operation resource that can be queried with Operations.GetOperation to return ReconcileTagsMetadata and a ReconcileTagsResponse message. Note: SearchCatalog might return stale search results for up to 24 hours after the `ReconcileTags` operation completes. */
export const reconcileProjectsLocationsEntryGroupsEntriesTags: API.OperationMethod<
  ReconcileProjectsLocationsEntryGroupsEntriesTagsRequest,
  ReconcileProjectsLocationsEntryGroupsEntriesTagsResponse,
  ReconcileProjectsLocationsEntryGroupsEntriesTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReconcileProjectsLocationsEntryGroupsEntriesTagsRequest,
  output: ReconcileProjectsLocationsEntryGroupsEntriesTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsEntryGroupsEntriesTagsRequest {
  /** Required. The name of the resource to attach this tag to. Tags can be attached to entries or entry groups. An entry can have up to 1000 attached tags. Note: The tag and its child resources might not be stored in the location specified in its name. */
  parent: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1Tag;
}

export const CreateProjectsLocationsEntryGroupsEntriesTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDatacatalogV1Tag).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/tags", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsEntryGroupsEntriesTagsRequest>;

export type CreateProjectsLocationsEntryGroupsEntriesTagsResponse =
  GoogleCloudDatacatalogV1Tag;
export const CreateProjectsLocationsEntryGroupsEntriesTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1Tag;

export type CreateProjectsLocationsEntryGroupsEntriesTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a tag and assigns it to: * An Entry if the method name is `projects.locations.entryGroups.entries.tags.create`. * Or EntryGroupif the method name is `projects.locations.entryGroups.tags.create`. Note: The project identified by the `parent` parameter for the [tag] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be in the same organization. */
export const createProjectsLocationsEntryGroupsEntriesTags: API.OperationMethod<
  CreateProjectsLocationsEntryGroupsEntriesTagsRequest,
  CreateProjectsLocationsEntryGroupsEntriesTagsResponse,
  CreateProjectsLocationsEntryGroupsEntriesTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsEntryGroupsEntriesTagsRequest,
  output: CreateProjectsLocationsEntryGroupsEntriesTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsEntryGroupsEntriesTagsRequest {
  /** Pagination token that specifies the next page to return. If empty, the first page is returned. */
  pageToken?: string;
  /** The maximum number of tags to return. Default is 10. Maximum limit is 1000. */
  pageSize?: number;
  /** Required. The name of the Data Catalog resource to list the tags of. The resource can be an Entry or an EntryGroup (without `/entries/{entries}` at the end). */
  parent: string;
}

export const ListProjectsLocationsEntryGroupsEntriesTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/tags" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsEntryGroupsEntriesTagsRequest>;

export type ListProjectsLocationsEntryGroupsEntriesTagsResponse =
  GoogleCloudDatacatalogV1ListTagsResponse;
export const ListProjectsLocationsEntryGroupsEntriesTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1ListTagsResponse;

export type ListProjectsLocationsEntryGroupsEntriesTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists tags assigned to an Entry. The columns in the response are lowercased. */
export const listProjectsLocationsEntryGroupsEntriesTags: API.PaginatedOperationMethod<
  ListProjectsLocationsEntryGroupsEntriesTagsRequest,
  ListProjectsLocationsEntryGroupsEntriesTagsResponse,
  ListProjectsLocationsEntryGroupsEntriesTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsEntryGroupsEntriesTagsRequest,
  output: ListProjectsLocationsEntryGroupsEntriesTagsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsEntryGroupsTagsRequest {
  /** Names of fields whose values to overwrite on a tag. Currently, a tag has the only modifiable field with the name `fields`. In general, if this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied. */
  updateMask?: string;
  /** Identifier. The resource name of the tag in URL format where tag ID is a system-generated identifier. Note: The tag itself might not be stored in the location specified in its name. */
  name: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1Tag;
}

export const PatchProjectsLocationsEntryGroupsTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDatacatalogV1Tag).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsEntryGroupsTagsRequest>;

export type PatchProjectsLocationsEntryGroupsTagsResponse =
  GoogleCloudDatacatalogV1Tag;
export const PatchProjectsLocationsEntryGroupsTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1Tag;

export type PatchProjectsLocationsEntryGroupsTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing tag. */
export const patchProjectsLocationsEntryGroupsTags: API.OperationMethod<
  PatchProjectsLocationsEntryGroupsTagsRequest,
  PatchProjectsLocationsEntryGroupsTagsResponse,
  PatchProjectsLocationsEntryGroupsTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsEntryGroupsTagsRequest,
  output: PatchProjectsLocationsEntryGroupsTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsEntryGroupsTagsRequest {
  /** Required. The name of the tag to delete. */
  name: string;
}

export const DeleteProjectsLocationsEntryGroupsTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsEntryGroupsTagsRequest>;

export type DeleteProjectsLocationsEntryGroupsTagsResponse = Empty;
export const DeleteProjectsLocationsEntryGroupsTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsEntryGroupsTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a tag. */
export const deleteProjectsLocationsEntryGroupsTags: API.OperationMethod<
  DeleteProjectsLocationsEntryGroupsTagsRequest,
  DeleteProjectsLocationsEntryGroupsTagsResponse,
  DeleteProjectsLocationsEntryGroupsTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsEntryGroupsTagsRequest,
  output: DeleteProjectsLocationsEntryGroupsTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsEntryGroupsTagsRequest {
  /** Required. The name of the Data Catalog resource to list the tags of. The resource can be an Entry or an EntryGroup (without `/entries/{entries}` at the end). */
  parent: string;
  /** The maximum number of tags to return. Default is 10. Maximum limit is 1000. */
  pageSize?: number;
  /** Pagination token that specifies the next page to return. If empty, the first page is returned. */
  pageToken?: string;
}

export const ListProjectsLocationsEntryGroupsTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/tags" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsEntryGroupsTagsRequest>;

export type ListProjectsLocationsEntryGroupsTagsResponse =
  GoogleCloudDatacatalogV1ListTagsResponse;
export const ListProjectsLocationsEntryGroupsTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1ListTagsResponse;

export type ListProjectsLocationsEntryGroupsTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists tags assigned to an Entry. The columns in the response are lowercased. */
export const listProjectsLocationsEntryGroupsTags: API.PaginatedOperationMethod<
  ListProjectsLocationsEntryGroupsTagsRequest,
  ListProjectsLocationsEntryGroupsTagsResponse,
  ListProjectsLocationsEntryGroupsTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsEntryGroupsTagsRequest,
  output: ListProjectsLocationsEntryGroupsTagsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsEntryGroupsTagsRequest {
  /** Required. The name of the resource to attach this tag to. Tags can be attached to entries or entry groups. An entry can have up to 1000 attached tags. Note: The tag and its child resources might not be stored in the location specified in its name. */
  parent: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1Tag;
}

export const CreateProjectsLocationsEntryGroupsTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDatacatalogV1Tag).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/tags", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsEntryGroupsTagsRequest>;

export type CreateProjectsLocationsEntryGroupsTagsResponse =
  GoogleCloudDatacatalogV1Tag;
export const CreateProjectsLocationsEntryGroupsTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1Tag;

export type CreateProjectsLocationsEntryGroupsTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a tag and assigns it to: * An Entry if the method name is `projects.locations.entryGroups.entries.tags.create`. * Or EntryGroupif the method name is `projects.locations.entryGroups.tags.create`. Note: The project identified by the `parent` parameter for the [tag] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be in the same organization. */
export const createProjectsLocationsEntryGroupsTags: API.OperationMethod<
  CreateProjectsLocationsEntryGroupsTagsRequest,
  CreateProjectsLocationsEntryGroupsTagsResponse,
  CreateProjectsLocationsEntryGroupsTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsEntryGroupsTagsRequest,
  output: CreateProjectsLocationsEntryGroupsTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsTagTemplatesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GetIamPolicyRequest;
}

export const GetIamPolicyProjectsLocationsTagTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:getIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsTagTemplatesRequest>;

export type GetIamPolicyProjectsLocationsTagTemplatesResponse = Policy;
export const GetIamPolicyProjectsLocationsTagTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsTagTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the access control policy for a resource. May return: * A`NOT_FOUND` error if the resource doesn't exist or you don't have the permission to view it. * An empty policy if the resource exists but doesn't have a set policy. Supported resources are: - Tag templates - Entry groups Note: This method doesn't get policies from Google Cloud Platform resources ingested into Data Catalog. To call this method, you must have the following Google IAM permissions: - `datacatalog.tagTemplates.getIamPolicy` to get policies on tag templates. - `datacatalog.entryGroups.getIamPolicy` to get policies on entry groups. */
export const getIamPolicyProjectsLocationsTagTemplates: API.OperationMethod<
  GetIamPolicyProjectsLocationsTagTemplatesRequest,
  GetIamPolicyProjectsLocationsTagTemplatesResponse,
  GetIamPolicyProjectsLocationsTagTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsTagTemplatesRequest,
  output: GetIamPolicyProjectsLocationsTagTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsTagTemplatesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsTagTemplatesRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsTagTemplatesRequest>;

export type SetIamPolicyProjectsLocationsTagTemplatesResponse = Policy;
export const SetIamPolicyProjectsLocationsTagTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsTagTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets an access control policy for a resource. Replaces any existing policy. Supported resources are: - Tag templates - Entry groups Note: This method sets policies only within Data Catalog and can't be used to manage policies in BigQuery, Pub/Sub, Dataproc Metastore, and any external Google Cloud Platform resources synced with the Data Catalog. To call this method, you must have the following Google IAM permissions: - `datacatalog.tagTemplates.setIamPolicy` to set policies on tag templates. - `datacatalog.entryGroups.setIamPolicy` to set policies on entry groups. */
export const setIamPolicyProjectsLocationsTagTemplates: API.OperationMethod<
  SetIamPolicyProjectsLocationsTagTemplatesRequest,
  SetIamPolicyProjectsLocationsTagTemplatesResponse,
  SetIamPolicyProjectsLocationsTagTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsTagTemplatesRequest,
  output: SetIamPolicyProjectsLocationsTagTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsTagTemplatesRequest {
  /** Names of fields whose values to overwrite on a tag template. Currently, only `display_name` and `is_publicly_readable` can be overwritten. If this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied. Note: Updating the `is_publicly_readable` field may require up to 12 hours to take effect in search results. */
  updateMask?: string;
  /** Identifier. The resource name of the tag template in URL format. Note: The tag template itself and its child resources might not be stored in the location specified in its name. */
  name: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1TagTemplate;
}

export const PatchProjectsLocationsTagTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDatacatalogV1TagTemplate).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsTagTemplatesRequest>;

export type PatchProjectsLocationsTagTemplatesResponse =
  GoogleCloudDatacatalogV1TagTemplate;
export const PatchProjectsLocationsTagTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1TagTemplate;

export type PatchProjectsLocationsTagTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a tag template. You can't update template fields with this method. These fields are separate resources with their own create, update, and delete methods. You must enable the Data Catalog API in the project identified by the `tag_template.name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project). */
export const patchProjectsLocationsTagTemplates: API.OperationMethod<
  PatchProjectsLocationsTagTemplatesRequest,
  PatchProjectsLocationsTagTemplatesResponse,
  PatchProjectsLocationsTagTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsTagTemplatesRequest,
  output: PatchProjectsLocationsTagTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsTagTemplatesRequest {
  /** Required. The name of the tag template to delete. */
  name: string;
  /** Required. If true, deletes all tags that use this template. Currently, `true` is the only supported value. */
  force?: boolean;
}

export const DeleteProjectsLocationsTagTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsTagTemplatesRequest>;

export type DeleteProjectsLocationsTagTemplatesResponse = Empty;
export const DeleteProjectsLocationsTagTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsTagTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a tag template and all tags that use it. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project). */
export const deleteProjectsLocationsTagTemplates: API.OperationMethod<
  DeleteProjectsLocationsTagTemplatesRequest,
  DeleteProjectsLocationsTagTemplatesResponse,
  DeleteProjectsLocationsTagTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsTagTemplatesRequest,
  output: DeleteProjectsLocationsTagTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsTagTemplatesRequest {
  /** Required. The name of the project and the template location [region](https://cloud.google.com/data-catalog/docs/concepts/regions). */
  parent: string;
  /** Required. The ID of the tag template to create. The ID must contain only lowercase letters (a-z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum size is 64 bytes when encoded in UTF-8. */
  tagTemplateId?: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1TagTemplate;
}

export const CreateProjectsLocationsTagTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    tagTemplateId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("tagTemplateId"),
    ),
    body: Schema.optional(GoogleCloudDatacatalogV1TagTemplate).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/tagTemplates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsTagTemplatesRequest>;

export type CreateProjectsLocationsTagTemplatesResponse =
  GoogleCloudDatacatalogV1TagTemplate;
export const CreateProjectsLocationsTagTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1TagTemplate;

export type CreateProjectsLocationsTagTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project). */
export const createProjectsLocationsTagTemplates: API.OperationMethod<
  CreateProjectsLocationsTagTemplatesRequest,
  CreateProjectsLocationsTagTemplatesResponse,
  CreateProjectsLocationsTagTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsTagTemplatesRequest,
  output: CreateProjectsLocationsTagTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsTagTemplatesRequest {
  /** Required. The name of the tag template to get. */
  name: string;
}

export const GetProjectsLocationsTagTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsTagTemplatesRequest>;

export type GetProjectsLocationsTagTemplatesResponse =
  GoogleCloudDatacatalogV1TagTemplate;
export const GetProjectsLocationsTagTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1TagTemplate;

export type GetProjectsLocationsTagTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a tag template. */
export const getProjectsLocationsTagTemplates: API.OperationMethod<
  GetProjectsLocationsTagTemplatesRequest,
  GetProjectsLocationsTagTemplatesResponse,
  GetProjectsLocationsTagTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsTagTemplatesRequest,
  output: GetProjectsLocationsTagTemplatesResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsTagTemplatesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsTagTemplatesRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsTagTemplatesRequest>;

export type TestIamPermissionsProjectsLocationsTagTemplatesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsTagTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsTagTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets your permissions on a resource. Returns an empty set of permissions if the resource doesn't exist. Supported resources are: - Tag templates - Entry groups Note: This method gets policies only within Data Catalog and can't be used to get policies from BigQuery, Pub/Sub, Dataproc Metastore, and any external Google Cloud Platform resources ingested into Data Catalog. No Google IAM permissions are required to call this method. */
export const testIamPermissionsProjectsLocationsTagTemplates: API.OperationMethod<
  TestIamPermissionsProjectsLocationsTagTemplatesRequest,
  TestIamPermissionsProjectsLocationsTagTemplatesResponse,
  TestIamPermissionsProjectsLocationsTagTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsTagTemplatesRequest,
  output: TestIamPermissionsProjectsLocationsTagTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RenameProjectsLocationsTagTemplatesFieldsRequest {
  /** Required. The name of the tag template field. */
  name: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1RenameTagTemplateFieldRequest;
}

export const RenameProjectsLocationsTagTemplatesFieldsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDatacatalogV1RenameTagTemplateFieldRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:rename", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RenameProjectsLocationsTagTemplatesFieldsRequest>;

export type RenameProjectsLocationsTagTemplatesFieldsResponse =
  GoogleCloudDatacatalogV1TagTemplateField;
export const RenameProjectsLocationsTagTemplatesFieldsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1TagTemplateField;

export type RenameProjectsLocationsTagTemplatesFieldsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Renames a field in a tag template. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project). */
export const renameProjectsLocationsTagTemplatesFields: API.OperationMethod<
  RenameProjectsLocationsTagTemplatesFieldsRequest,
  RenameProjectsLocationsTagTemplatesFieldsResponse,
  RenameProjectsLocationsTagTemplatesFieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RenameProjectsLocationsTagTemplatesFieldsRequest,
  output: RenameProjectsLocationsTagTemplatesFieldsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsTagTemplatesFieldsRequest {
  /** Required. The ID of the tag template field to create. Note: Adding a required field to an existing template is *not* allowed. Field IDs can contain letters (both uppercase and lowercase), numbers (0-9), underscores (_) and dashes (-). Field IDs must be at least 1 character long and at most 128 characters long. Field IDs must also be unique within their template. */
  tagTemplateFieldId?: string;
  /** Required. The name of the project and the template location [region](https://cloud.google.com/data-catalog/docs/concepts/regions). */
  parent: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1TagTemplateField;
}

export const CreateProjectsLocationsTagTemplatesFieldsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tagTemplateFieldId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("tagTemplateFieldId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDatacatalogV1TagTemplateField).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/fields", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsTagTemplatesFieldsRequest>;

export type CreateProjectsLocationsTagTemplatesFieldsResponse =
  GoogleCloudDatacatalogV1TagTemplateField;
export const CreateProjectsLocationsTagTemplatesFieldsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1TagTemplateField;

export type CreateProjectsLocationsTagTemplatesFieldsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a field in a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project). */
export const createProjectsLocationsTagTemplatesFields: API.OperationMethod<
  CreateProjectsLocationsTagTemplatesFieldsRequest,
  CreateProjectsLocationsTagTemplatesFieldsResponse,
  CreateProjectsLocationsTagTemplatesFieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsTagTemplatesFieldsRequest,
  output: CreateProjectsLocationsTagTemplatesFieldsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsTagTemplatesFieldsRequest {
  /** Required. The name of the tag template field. */
  name: string;
  /** Optional. Names of fields whose values to overwrite on an individual field of a tag template. The following fields are modifiable: * `display_name` * `type.enum_type` * `is_required` If this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied with one exception: when updating an enum type, the provided values are merged with the existing values. Therefore, enum values can only be added, existing enum values cannot be deleted or renamed. Additionally, updating a template field from optional to required is *not* allowed. */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1TagTemplateField;
}

export const PatchProjectsLocationsTagTemplatesFieldsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDatacatalogV1TagTemplateField).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsTagTemplatesFieldsRequest>;

export type PatchProjectsLocationsTagTemplatesFieldsResponse =
  GoogleCloudDatacatalogV1TagTemplateField;
export const PatchProjectsLocationsTagTemplatesFieldsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1TagTemplateField;

export type PatchProjectsLocationsTagTemplatesFieldsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a field in a tag template. You can't update the field type with this method. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project). */
export const patchProjectsLocationsTagTemplatesFields: API.OperationMethod<
  PatchProjectsLocationsTagTemplatesFieldsRequest,
  PatchProjectsLocationsTagTemplatesFieldsResponse,
  PatchProjectsLocationsTagTemplatesFieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsTagTemplatesFieldsRequest,
  output: PatchProjectsLocationsTagTemplatesFieldsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsTagTemplatesFieldsRequest {
  /** Required. The name of the tag template field to delete. */
  name: string;
  /** Required. If true, deletes this field from any tags that use it. Currently, `true` is the only supported value. */
  force?: boolean;
}

export const DeleteProjectsLocationsTagTemplatesFieldsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsTagTemplatesFieldsRequest>;

export type DeleteProjectsLocationsTagTemplatesFieldsResponse = Empty;
export const DeleteProjectsLocationsTagTemplatesFieldsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsTagTemplatesFieldsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a field in a tag template and all uses of this field from the tags based on this template. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project). */
export const deleteProjectsLocationsTagTemplatesFields: API.OperationMethod<
  DeleteProjectsLocationsTagTemplatesFieldsRequest,
  DeleteProjectsLocationsTagTemplatesFieldsResponse,
  DeleteProjectsLocationsTagTemplatesFieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsTagTemplatesFieldsRequest,
  output: DeleteProjectsLocationsTagTemplatesFieldsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RenameProjectsLocationsTagTemplatesFieldsEnumValuesRequest {
  /** Required. The name of the enum field value. */
  name: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest;
}

export const RenameProjectsLocationsTagTemplatesFieldsEnumValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:rename", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RenameProjectsLocationsTagTemplatesFieldsEnumValuesRequest>;

export type RenameProjectsLocationsTagTemplatesFieldsEnumValuesResponse =
  GoogleCloudDatacatalogV1TagTemplateField;
export const RenameProjectsLocationsTagTemplatesFieldsEnumValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1TagTemplateField;

export type RenameProjectsLocationsTagTemplatesFieldsEnumValuesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Renames an enum value in a tag template. Within a single enum field, enum values must be unique. */
export const renameProjectsLocationsTagTemplatesFieldsEnumValues: API.OperationMethod<
  RenameProjectsLocationsTagTemplatesFieldsEnumValuesRequest,
  RenameProjectsLocationsTagTemplatesFieldsEnumValuesResponse,
  RenameProjectsLocationsTagTemplatesFieldsEnumValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RenameProjectsLocationsTagTemplatesFieldsEnumValuesRequest,
  output: RenameProjectsLocationsTagTemplatesFieldsEnumValuesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsTaxonomiesRequest {
  /** Required. Resource name of the taxonomy to delete. Note: All policy tags in this taxonomy are also deleted. */
  name: string;
}

export const DeleteProjectsLocationsTaxonomiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsTaxonomiesRequest>;

export type DeleteProjectsLocationsTaxonomiesResponse = Empty;
export const DeleteProjectsLocationsTaxonomiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsTaxonomiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a taxonomy, including all policy tags in this taxonomy, their associated policies, and the policy tags references from BigQuery columns. */
export const deleteProjectsLocationsTaxonomies: API.OperationMethod<
  DeleteProjectsLocationsTaxonomiesRequest,
  DeleteProjectsLocationsTaxonomiesResponse,
  DeleteProjectsLocationsTaxonomiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsTaxonomiesRequest,
  output: DeleteProjectsLocationsTaxonomiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsTaxonomiesRequest {
  /** Identifier. Resource name of this taxonomy in URL format. Note: Policy tag manager generates unique taxonomy IDs. */
  name: string;
  /** Specifies fields to update. If not set, defaults to all fields you can update. For more information, see [FieldMask] (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask). */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1Taxonomy;
}

export const PatchProjectsLocationsTaxonomiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDatacatalogV1Taxonomy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsTaxonomiesRequest>;

export type PatchProjectsLocationsTaxonomiesResponse =
  GoogleCloudDatacatalogV1Taxonomy;
export const PatchProjectsLocationsTaxonomiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1Taxonomy;

export type PatchProjectsLocationsTaxonomiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a taxonomy, including its display name, description, and activated policy types. */
export const patchProjectsLocationsTaxonomies: API.OperationMethod<
  PatchProjectsLocationsTaxonomiesRequest,
  PatchProjectsLocationsTaxonomiesResponse,
  PatchProjectsLocationsTaxonomiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsTaxonomiesRequest,
  output: PatchProjectsLocationsTaxonomiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImportProjectsLocationsTaxonomiesRequest {
  /** Required. Resource name of project that the imported taxonomies will belong to. */
  parent: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1ImportTaxonomiesRequest;
}

export const ImportProjectsLocationsTaxonomiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDatacatalogV1ImportTaxonomiesRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/taxonomies:import",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportProjectsLocationsTaxonomiesRequest>;

export type ImportProjectsLocationsTaxonomiesResponse =
  GoogleCloudDatacatalogV1ImportTaxonomiesResponse;
export const ImportProjectsLocationsTaxonomiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1ImportTaxonomiesResponse;

export type ImportProjectsLocationsTaxonomiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates new taxonomies (including their policy tags) in a given project by importing from inlined or cross-regional sources. For a cross-regional source, new taxonomies are created by copying from a source in another region. For an inlined source, taxonomies and policy tags are created in bulk using nested protocol buffer structures. */
export const importProjectsLocationsTaxonomies: API.OperationMethod<
  ImportProjectsLocationsTaxonomiesRequest,
  ImportProjectsLocationsTaxonomiesResponse,
  ImportProjectsLocationsTaxonomiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportProjectsLocationsTaxonomiesRequest,
  output: ImportProjectsLocationsTaxonomiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExportProjectsLocationsTaxonomiesRequest {
  /** Required. Resource names of the taxonomies to export. */
  taxonomies?: string[];
  /** Required. Resource name of the project that the exported taxonomies belong to. */
  parent: string;
  /** Serialized export taxonomies that contain all the policy tags as nested protocol buffers. */
  serializedTaxonomies?: boolean;
}

export const ExportProjectsLocationsTaxonomiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    taxonomies: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("taxonomies"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    serializedTaxonomies: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("serializedTaxonomies"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/taxonomies:export" }),
    svc,
  ) as unknown as Schema.Schema<ExportProjectsLocationsTaxonomiesRequest>;

export type ExportProjectsLocationsTaxonomiesResponse =
  GoogleCloudDatacatalogV1ExportTaxonomiesResponse;
export const ExportProjectsLocationsTaxonomiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1ExportTaxonomiesResponse;

export type ExportProjectsLocationsTaxonomiesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Exports taxonomies in the requested type and returns them, including their policy tags. The requested taxonomies must belong to the same project. This method generates `SerializedTaxonomy` protocol buffers with nested policy tags that can be used as input for `ImportTaxonomies` calls. */
export const exportProjectsLocationsTaxonomies: API.OperationMethod<
  ExportProjectsLocationsTaxonomiesRequest,
  ExportProjectsLocationsTaxonomiesResponse,
  ExportProjectsLocationsTaxonomiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportProjectsLocationsTaxonomiesRequest,
  output: ExportProjectsLocationsTaxonomiesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsTaxonomiesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsTaxonomiesRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsTaxonomiesRequest>;

export type SetIamPolicyProjectsLocationsTaxonomiesResponse = Policy;
export const SetIamPolicyProjectsLocationsTaxonomiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsTaxonomiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the IAM policy for a policy tag or a taxonomy. */
export const setIamPolicyProjectsLocationsTaxonomies: API.OperationMethod<
  SetIamPolicyProjectsLocationsTaxonomiesRequest,
  SetIamPolicyProjectsLocationsTaxonomiesResponse,
  SetIamPolicyProjectsLocationsTaxonomiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsTaxonomiesRequest,
  output: SetIamPolicyProjectsLocationsTaxonomiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsTaxonomiesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GetIamPolicyRequest;
}

export const GetIamPolicyProjectsLocationsTaxonomiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:getIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsTaxonomiesRequest>;

export type GetIamPolicyProjectsLocationsTaxonomiesResponse = Policy;
export const GetIamPolicyProjectsLocationsTaxonomiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsTaxonomiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the IAM policy for a policy tag or a taxonomy. */
export const getIamPolicyProjectsLocationsTaxonomies: API.OperationMethod<
  GetIamPolicyProjectsLocationsTaxonomiesRequest,
  GetIamPolicyProjectsLocationsTaxonomiesResponse,
  GetIamPolicyProjectsLocationsTaxonomiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsTaxonomiesRequest,
  output: GetIamPolicyProjectsLocationsTaxonomiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsTaxonomiesRequest {
  /** Supported field for filter is 'service' and value is 'dataplex'. Eg: service=dataplex. */
  filter?: string;
  /** Required. Resource name of the project to list the taxonomies of. */
  parent: string;
  /** The pagination token of the next results page. If not set, the first page is returned. The token is returned in the response to a previous list request. */
  pageToken?: string;
  /** The maximum number of items to return. Must be a value between 1 and 1000 inclusively. If not set, defaults to 50. */
  pageSize?: number;
}

export const ListProjectsLocationsTaxonomiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/taxonomies" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsTaxonomiesRequest>;

export type ListProjectsLocationsTaxonomiesResponse =
  GoogleCloudDatacatalogV1ListTaxonomiesResponse;
export const ListProjectsLocationsTaxonomiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1ListTaxonomiesResponse;

export type ListProjectsLocationsTaxonomiesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all taxonomies in a project in a particular location that you have a permission to view. */
export const listProjectsLocationsTaxonomies: API.PaginatedOperationMethod<
  ListProjectsLocationsTaxonomiesRequest,
  ListProjectsLocationsTaxonomiesResponse,
  ListProjectsLocationsTaxonomiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsTaxonomiesRequest,
  output: ListProjectsLocationsTaxonomiesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsTaxonomiesRequest {
  /** Required. Resource name of the taxonomy to get. */
  name: string;
}

export const GetProjectsLocationsTaxonomiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsTaxonomiesRequest>;

export type GetProjectsLocationsTaxonomiesResponse =
  GoogleCloudDatacatalogV1Taxonomy;
export const GetProjectsLocationsTaxonomiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1Taxonomy;

export type GetProjectsLocationsTaxonomiesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a taxonomy. */
export const getProjectsLocationsTaxonomies: API.OperationMethod<
  GetProjectsLocationsTaxonomiesRequest,
  GetProjectsLocationsTaxonomiesResponse,
  GetProjectsLocationsTaxonomiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsTaxonomiesRequest,
  output: GetProjectsLocationsTaxonomiesResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsTaxonomiesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsTaxonomiesRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsTaxonomiesRequest>;

export type TestIamPermissionsProjectsLocationsTaxonomiesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsTaxonomiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsTaxonomiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns your permissions on a specified policy tag or taxonomy. */
export const testIamPermissionsProjectsLocationsTaxonomies: API.OperationMethod<
  TestIamPermissionsProjectsLocationsTaxonomiesRequest,
  TestIamPermissionsProjectsLocationsTaxonomiesResponse,
  TestIamPermissionsProjectsLocationsTaxonomiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsTaxonomiesRequest,
  output: TestIamPermissionsProjectsLocationsTaxonomiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReplaceProjectsLocationsTaxonomiesRequest {
  /** Required. Resource name of the taxonomy to update. */
  name: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1ReplaceTaxonomyRequest;
}

export const ReplaceProjectsLocationsTaxonomiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDatacatalogV1ReplaceTaxonomyRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:replace", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ReplaceProjectsLocationsTaxonomiesRequest>;

export type ReplaceProjectsLocationsTaxonomiesResponse =
  GoogleCloudDatacatalogV1Taxonomy;
export const ReplaceProjectsLocationsTaxonomiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1Taxonomy;

export type ReplaceProjectsLocationsTaxonomiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Replaces (updates) a taxonomy and all its policy tags. The taxonomy and its entire hierarchy of policy tags must be represented literally by `SerializedTaxonomy` and the nested `SerializedPolicyTag` messages. This operation automatically does the following: - Deletes the existing policy tags that are missing from the `SerializedPolicyTag`. - Creates policy tags that don't have resource names. They are considered new. - Updates policy tags with valid resources names accordingly. */
export const replaceProjectsLocationsTaxonomies: API.OperationMethod<
  ReplaceProjectsLocationsTaxonomiesRequest,
  ReplaceProjectsLocationsTaxonomiesResponse,
  ReplaceProjectsLocationsTaxonomiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReplaceProjectsLocationsTaxonomiesRequest,
  output: ReplaceProjectsLocationsTaxonomiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsTaxonomiesRequest {
  /** Required. Resource name of the project that the taxonomy will belong to. */
  parent: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1Taxonomy;
}

export const CreateProjectsLocationsTaxonomiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDatacatalogV1Taxonomy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/taxonomies", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsTaxonomiesRequest>;

export type CreateProjectsLocationsTaxonomiesResponse =
  GoogleCloudDatacatalogV1Taxonomy;
export const CreateProjectsLocationsTaxonomiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1Taxonomy;

export type CreateProjectsLocationsTaxonomiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a taxonomy in a specified project. The taxonomy is initially empty, that is, it doesn't contain policy tags. */
export const createProjectsLocationsTaxonomies: API.OperationMethod<
  CreateProjectsLocationsTaxonomiesRequest,
  CreateProjectsLocationsTaxonomiesResponse,
  CreateProjectsLocationsTaxonomiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsTaxonomiesRequest,
  output: CreateProjectsLocationsTaxonomiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsTaxonomiesPolicyTagsRequest {
  /** The maximum number of items to return. Must be a value between 1 and 1000 inclusively. If not set, defaults to 50. */
  pageSize?: number;
  /** The pagination token of the next results page. If not set, returns the first page. The token is returned in the response to a previous list request. */
  pageToken?: string;
  /** Required. Resource name of the taxonomy to list the policy tags of. */
  parent: string;
}

export const ListProjectsLocationsTaxonomiesPolicyTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/policyTags" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsTaxonomiesPolicyTagsRequest>;

export type ListProjectsLocationsTaxonomiesPolicyTagsResponse =
  GoogleCloudDatacatalogV1ListPolicyTagsResponse;
export const ListProjectsLocationsTaxonomiesPolicyTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1ListPolicyTagsResponse;

export type ListProjectsLocationsTaxonomiesPolicyTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all policy tags in a taxonomy. */
export const listProjectsLocationsTaxonomiesPolicyTags: API.PaginatedOperationMethod<
  ListProjectsLocationsTaxonomiesPolicyTagsRequest,
  ListProjectsLocationsTaxonomiesPolicyTagsResponse,
  ListProjectsLocationsTaxonomiesPolicyTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsTaxonomiesPolicyTagsRequest,
  output: ListProjectsLocationsTaxonomiesPolicyTagsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsTaxonomiesPolicyTagsRequest {
  /** Required. Resource name of the policy tag. */
  name: string;
}

export const GetProjectsLocationsTaxonomiesPolicyTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsTaxonomiesPolicyTagsRequest>;

export type GetProjectsLocationsTaxonomiesPolicyTagsResponse =
  GoogleCloudDatacatalogV1PolicyTag;
export const GetProjectsLocationsTaxonomiesPolicyTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1PolicyTag;

export type GetProjectsLocationsTaxonomiesPolicyTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a policy tag. */
export const getProjectsLocationsTaxonomiesPolicyTags: API.OperationMethod<
  GetProjectsLocationsTaxonomiesPolicyTagsRequest,
  GetProjectsLocationsTaxonomiesPolicyTagsResponse,
  GetProjectsLocationsTaxonomiesPolicyTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsTaxonomiesPolicyTagsRequest,
  output: GetProjectsLocationsTaxonomiesPolicyTagsResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsTaxonomiesPolicyTagsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsTaxonomiesPolicyTagsRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsTaxonomiesPolicyTagsRequest>;

export type TestIamPermissionsProjectsLocationsTaxonomiesPolicyTagsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsTaxonomiesPolicyTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsTaxonomiesPolicyTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns your permissions on a specified policy tag or taxonomy. */
export const testIamPermissionsProjectsLocationsTaxonomiesPolicyTags: API.OperationMethod<
  TestIamPermissionsProjectsLocationsTaxonomiesPolicyTagsRequest,
  TestIamPermissionsProjectsLocationsTaxonomiesPolicyTagsResponse,
  TestIamPermissionsProjectsLocationsTaxonomiesPolicyTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsTaxonomiesPolicyTagsRequest,
  output: TestIamPermissionsProjectsLocationsTaxonomiesPolicyTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsTaxonomiesPolicyTagsRequest {
  /** Required. Resource name of the taxonomy that the policy tag will belong to. */
  parent: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1PolicyTag;
}

export const CreateProjectsLocationsTaxonomiesPolicyTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDatacatalogV1PolicyTag).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/policyTags", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsTaxonomiesPolicyTagsRequest>;

export type CreateProjectsLocationsTaxonomiesPolicyTagsResponse =
  GoogleCloudDatacatalogV1PolicyTag;
export const CreateProjectsLocationsTaxonomiesPolicyTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1PolicyTag;

export type CreateProjectsLocationsTaxonomiesPolicyTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a policy tag in a taxonomy. */
export const createProjectsLocationsTaxonomiesPolicyTags: API.OperationMethod<
  CreateProjectsLocationsTaxonomiesPolicyTagsRequest,
  CreateProjectsLocationsTaxonomiesPolicyTagsResponse,
  CreateProjectsLocationsTaxonomiesPolicyTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsTaxonomiesPolicyTagsRequest,
  output: CreateProjectsLocationsTaxonomiesPolicyTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsTaxonomiesPolicyTagsRequest {
  /** Required. Resource name of the policy tag to delete. Note: All of its descendant policy tags are also deleted. */
  name: string;
}

export const DeleteProjectsLocationsTaxonomiesPolicyTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsTaxonomiesPolicyTagsRequest>;

export type DeleteProjectsLocationsTaxonomiesPolicyTagsResponse = Empty;
export const DeleteProjectsLocationsTaxonomiesPolicyTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsTaxonomiesPolicyTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a policy tag together with the following: * All of its descendant policy tags, if any * Policies associated with the policy tag and its descendants * References from BigQuery table schema of the policy tag and its descendants */
export const deleteProjectsLocationsTaxonomiesPolicyTags: API.OperationMethod<
  DeleteProjectsLocationsTaxonomiesPolicyTagsRequest,
  DeleteProjectsLocationsTaxonomiesPolicyTagsResponse,
  DeleteProjectsLocationsTaxonomiesPolicyTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsTaxonomiesPolicyTagsRequest,
  output: DeleteProjectsLocationsTaxonomiesPolicyTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsTaxonomiesPolicyTagsRequest {
  /** Specifies the fields to update. You can update only display name, description, and parent policy tag. If not set, defaults to all updatable fields. For more information, see [FieldMask] (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask). */
  updateMask?: string;
  /** Identifier. Resource name of this policy tag in the URL format. The policy tag manager generates unique taxonomy IDs and policy tag IDs. */
  name: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1PolicyTag;
}

export const PatchProjectsLocationsTaxonomiesPolicyTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDatacatalogV1PolicyTag).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsTaxonomiesPolicyTagsRequest>;

export type PatchProjectsLocationsTaxonomiesPolicyTagsResponse =
  GoogleCloudDatacatalogV1PolicyTag;
export const PatchProjectsLocationsTaxonomiesPolicyTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1PolicyTag;

export type PatchProjectsLocationsTaxonomiesPolicyTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a policy tag, including its display name, description, and parent policy tag. */
export const patchProjectsLocationsTaxonomiesPolicyTags: API.OperationMethod<
  PatchProjectsLocationsTaxonomiesPolicyTagsRequest,
  PatchProjectsLocationsTaxonomiesPolicyTagsResponse,
  PatchProjectsLocationsTaxonomiesPolicyTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsTaxonomiesPolicyTagsRequest,
  output: PatchProjectsLocationsTaxonomiesPolicyTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsTaxonomiesPolicyTagsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsTaxonomiesPolicyTagsRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsTaxonomiesPolicyTagsRequest>;

export type SetIamPolicyProjectsLocationsTaxonomiesPolicyTagsResponse = Policy;
export const SetIamPolicyProjectsLocationsTaxonomiesPolicyTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsTaxonomiesPolicyTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the IAM policy for a policy tag or a taxonomy. */
export const setIamPolicyProjectsLocationsTaxonomiesPolicyTags: API.OperationMethod<
  SetIamPolicyProjectsLocationsTaxonomiesPolicyTagsRequest,
  SetIamPolicyProjectsLocationsTaxonomiesPolicyTagsResponse,
  SetIamPolicyProjectsLocationsTaxonomiesPolicyTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsTaxonomiesPolicyTagsRequest,
  output: SetIamPolicyProjectsLocationsTaxonomiesPolicyTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsTaxonomiesPolicyTagsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GetIamPolicyRequest;
}

export const GetIamPolicyProjectsLocationsTaxonomiesPolicyTagsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:getIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsTaxonomiesPolicyTagsRequest>;

export type GetIamPolicyProjectsLocationsTaxonomiesPolicyTagsResponse = Policy;
export const GetIamPolicyProjectsLocationsTaxonomiesPolicyTagsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsTaxonomiesPolicyTagsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the IAM policy for a policy tag or a taxonomy. */
export const getIamPolicyProjectsLocationsTaxonomiesPolicyTags: API.OperationMethod<
  GetIamPolicyProjectsLocationsTaxonomiesPolicyTagsRequest,
  GetIamPolicyProjectsLocationsTaxonomiesPolicyTagsResponse,
  GetIamPolicyProjectsLocationsTaxonomiesPolicyTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsTaxonomiesPolicyTagsRequest,
  output: GetIamPolicyProjectsLocationsTaxonomiesPolicyTagsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetConfigOrganizationsLocationsRequest {
  /** Required. The organization or project whose config is being specified. */
  name: string;
  /** Request body */
  body?: GoogleCloudDatacatalogV1SetConfigRequest;
}

export const SetConfigOrganizationsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDatacatalogV1SetConfigRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:setConfig", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SetConfigOrganizationsLocationsRequest>;

export type SetConfigOrganizationsLocationsResponse =
  GoogleCloudDatacatalogV1MigrationConfig;
export const SetConfigOrganizationsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1MigrationConfig;

export type SetConfigOrganizationsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the configuration related to the migration to Dataplex Universal Catalog for an organization or project. */
export const setConfigOrganizationsLocations: API.OperationMethod<
  SetConfigOrganizationsLocationsRequest,
  SetConfigOrganizationsLocationsResponse,
  SetConfigOrganizationsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetConfigOrganizationsLocationsRequest,
  output: SetConfigOrganizationsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RetrieveConfigOrganizationsLocationsRequest {
  /** Required. The organization whose config is being retrieved. */
  name: string;
}

export const RetrieveConfigOrganizationsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:retrieveConfig" }),
    svc,
  ) as unknown as Schema.Schema<RetrieveConfigOrganizationsLocationsRequest>;

export type RetrieveConfigOrganizationsLocationsResponse =
  GoogleCloudDatacatalogV1OrganizationConfig;
export const RetrieveConfigOrganizationsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1OrganizationConfig;

export type RetrieveConfigOrganizationsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the configuration related to the migration from Data Catalog to Dataplex Universal Catalog for a specific organization, including all the projects under it which have a separate configuration set. */
export const retrieveConfigOrganizationsLocations: API.OperationMethod<
  RetrieveConfigOrganizationsLocationsRequest,
  RetrieveConfigOrganizationsLocationsResponse,
  RetrieveConfigOrganizationsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RetrieveConfigOrganizationsLocationsRequest,
  output: RetrieveConfigOrganizationsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface RetrieveEffectiveConfigOrganizationsLocationsRequest {
  /** Required. The resource whose effective config is being retrieved. */
  name: string;
}

export const RetrieveEffectiveConfigOrganizationsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:retrieveEffectiveConfig" }),
    svc,
  ) as unknown as Schema.Schema<RetrieveEffectiveConfigOrganizationsLocationsRequest>;

export type RetrieveEffectiveConfigOrganizationsLocationsResponse =
  GoogleCloudDatacatalogV1MigrationConfig;
export const RetrieveEffectiveConfigOrganizationsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1MigrationConfig;

export type RetrieveEffectiveConfigOrganizationsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the effective configuration related to the migration from Data Catalog to Dataplex Universal Catalog for a specific organization or project. If there is no specific configuration set for the resource, the setting is checked hierarchicahlly through the ancestors of the resource, starting from the resource itself. */
export const retrieveEffectiveConfigOrganizationsLocations: API.OperationMethod<
  RetrieveEffectiveConfigOrganizationsLocationsRequest,
  RetrieveEffectiveConfigOrganizationsLocationsResponse,
  RetrieveEffectiveConfigOrganizationsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RetrieveEffectiveConfigOrganizationsLocationsRequest,
  output: RetrieveEffectiveConfigOrganizationsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface LookupEntriesRequest {
  /** Project where the lookup should be performed. Required to lookup entry that is not a part of `DPMS` or `DATAPLEX` `integrated_system` using its `fully_qualified_name`. Ignored in other cases. */
  project?: string;
  /** The SQL name of the entry. SQL names are case-sensitive. Examples: * `pubsub.topic.{PROJECT_ID}.{TOPIC_ID}` * `pubsub.topic.{PROJECT_ID}.`\``{TOPIC.ID.SEPARATED.WITH.DOTS}`\` * `bigquery.table.{PROJECT_ID}.{DATASET_ID}.{TABLE_ID}` * `bigquery.dataset.{PROJECT_ID}.{DATASET_ID}` * `datacatalog.entry.{PROJECT_ID}.{LOCATION_ID}.{ENTRY_GROUP_ID}.{ENTRY_ID}` Identifiers (`*_ID`) should comply with the [Lexical structure in GoogleSQL] (https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical). */
  sqlResource?: string;
  /** [Fully Qualified Name (FQN)](https://cloud.google.com//data-catalog/docs/fully-qualified-names) of the resource. FQNs take two forms: * For non-regionalized resources: `{SYSTEM}:{PROJECT}.{PATH_TO_RESOURCE_SEPARATED_WITH_DOTS}` * For regionalized resources: `{SYSTEM}:{PROJECT}.{LOCATION_ID}.{PATH_TO_RESOURCE_SEPARATED_WITH_DOTS}` Example for a DPMS table: `dataproc_metastore:{PROJECT_ID}.{LOCATION_ID}.{INSTANCE_ID}.{DATABASE_ID}.{TABLE_ID}` */
  fullyQualifiedName?: string;
  /** Location where the lookup should be performed. Required to lookup entry that is not a part of `DPMS` or `DATAPLEX` `integrated_system` using its `fully_qualified_name`. Ignored in other cases. */
  location?: string;
  /** The full name of the Google Cloud Platform resource the Data Catalog entry represents. For more information, see [Full Resource Name] (https://cloud.google.com/apis/design/resource_names#full_resource_name). Full names are case-sensitive. For example: * `//bigquery.googleapis.com/projects/{PROJECT_ID}/datasets/{DATASET_ID}/tables/{TABLE_ID}` * `//pubsub.googleapis.com/projects/{PROJECT_ID}/topics/{TOPIC_ID}` */
  linkedResource?: string;
}

export const LookupEntriesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.optional(Schema.String).pipe(T.HttpQuery("project")),
  sqlResource: Schema.optional(Schema.String).pipe(T.HttpQuery("sqlResource")),
  fullyQualifiedName: Schema.optional(Schema.String).pipe(
    T.HttpQuery("fullyQualifiedName"),
  ),
  location: Schema.optional(Schema.String).pipe(T.HttpQuery("location")),
  linkedResource: Schema.optional(Schema.String).pipe(
    T.HttpQuery("linkedResource"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "v1/entries:lookup" }),
  svc,
) as unknown as Schema.Schema<LookupEntriesRequest>;

export type LookupEntriesResponse = GoogleCloudDatacatalogV1Entry;
export const LookupEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogV1Entry;

export type LookupEntriesError = DefaultErrors | NotFound | Forbidden;

/** Gets an entry by its target resource name. The resource name comes from the source Google Cloud Platform service. */
export const lookupEntries: API.OperationMethod<
  LookupEntriesRequest,
  LookupEntriesResponse,
  LookupEntriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LookupEntriesRequest,
  output: LookupEntriesResponse,
  errors: [NotFound, Forbidden],
}));
