// ==========================================================================
// Cloud Dataplex API (dataplex v1)
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
  name: "dataplex",
  version: "v1",
  rootUrl: "https://dataplex.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleCloudDataplexV1MetadataJobExportJobSpecExportJobScope {
  /** The entry types that are in scope for the export job, specified as relative resource names in the format projects/{project_id_or_number}/locations/{location}/entryTypes/{entry_type_id}. Only entries that belong to the specified entry types are affected by the job. */
  entryTypes?: ReadonlyArray<string>;
  /** The projects whose metadata you want to export, in the format projects/{project_id_or_number}. Only the entries from the specified projects are exported.The projects must be in the same organization and VPC Service Controls perimeter as the job.If you set the job scope to be a list of projects, then set the organization-level export flag to false and don't provide a list of entry groups. */
  projects?: ReadonlyArray<string>;
  /** Whether the metadata export job is an organization-level export job. If true, the job exports the entries from the same organization and VPC Service Controls perimeter as the job. The project that the job belongs to determines the VPC Service Controls perimeter. If you set the job scope to be at the organization level, then don't provide a list of projects or entry groups. If false, you must specify a list of projects or a list of entry groups whose entries you want to export.The default is false. */
  organizationLevel?: boolean;
  /** The aspect types that are in scope for the export job, specified as relative resource names in the format projects/{project_id_or_number}/locations/{location}/aspectTypes/{aspect_type_id}. Only aspects that belong to the specified aspect types are affected by the job. */
  aspectTypes?: ReadonlyArray<string>;
  /** The entry groups whose metadata you want to export, in the format projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}. Only the entries in the specified entry groups are exported.The entry groups must be in the same location and the same VPC Service Controls perimeter as the job.If you set the job scope to be a list of entry groups, then set the organization-level export flag to false and don't provide a list of projects. */
  entryGroups?: ReadonlyArray<string>;
}

export const GoogleCloudDataplexV1MetadataJobExportJobSpecExportJobScope: Schema.Schema<GoogleCloudDataplexV1MetadataJobExportJobSpecExportJobScope> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entryTypes: Schema.optional(Schema.Array(Schema.String)),
    projects: Schema.optional(Schema.Array(Schema.String)),
    organizationLevel: Schema.optional(Schema.Boolean),
    aspectTypes: Schema.optional(Schema.Array(Schema.String)),
    entryGroups: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDataplexV1MetadataJobExportJobSpecExportJobScope",
  });

export interface GoogleCloudDataplexV1MetadataJobExportJobSpec {
  /** Required. The scope of the export job. */
  scope?: GoogleCloudDataplexV1MetadataJobExportJobSpecExportJobScope;
  /** Required. The root path of the Cloud Storage bucket to export the metadata to, in the format gs://{bucket}/. You can optionally specify a custom prefix after the bucket name, in the format gs://{bucket}/{prefix}/. The maximum length of the custom prefix is 128 characters. Dataplex Universal Catalog constructs the object path for the exported files by using the bucket name and prefix that you provide, followed by a system-generated path.The bucket must be in the same VPC Service Controls perimeter as the job. */
  outputPath?: string;
}

export const GoogleCloudDataplexV1MetadataJobExportJobSpec: Schema.Schema<GoogleCloudDataplexV1MetadataJobExportJobSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.optional(
      GoogleCloudDataplexV1MetadataJobExportJobSpecExportJobScope,
    ),
    outputPath: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1MetadataJobExportJobSpec" });

export interface GoogleCloudDataplexV1DataDocumentationResultQuery {
  /** Output only. The description for the query. */
  description?: string;
  /** Output only. The SQL query string which can be executed. */
  sql?: string;
}

export const GoogleCloudDataplexV1DataDocumentationResultQuery: Schema.Schema<GoogleCloudDataplexV1DataDocumentationResultQuery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    sql: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataDocumentationResultQuery",
  });

export interface GoogleCloudDataplexV1DataDocumentationResultSchemaRelationshipSchemaPaths {
  /** Output only. The service-qualified full resource name of the table Ex: //bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID */
  tableFqn?: string;
  /** Output only. An ordered set of Paths to fields within the schema of the table. For fields nested within a top level field of type record, use '.' to separate field names. Examples: Top level field - top_level Nested field - top_level.child.sub_field */
  paths?: ReadonlyArray<string>;
}

export const GoogleCloudDataplexV1DataDocumentationResultSchemaRelationshipSchemaPaths: Schema.Schema<GoogleCloudDataplexV1DataDocumentationResultSchemaRelationshipSchemaPaths> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tableFqn: Schema.optional(Schema.String),
    paths: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDataplexV1DataDocumentationResultSchemaRelationshipSchemaPaths",
  });

export interface GoogleCloudDataplexV1DataDocumentationResultSchemaRelationship {
  /** Output only. The type of relationship between the schema paths. */
  type?: "TYPE_UNSPECIFIED" | "SCHEMA_JOIN" | (string & {});
  /** Output only. An ordered list of fields for the join from the first table. The size of this list must be the same as right_schema_paths. Each field at index i in this list must correspond to a field at the same index in the right_schema_paths list. */
  leftSchemaPaths?: GoogleCloudDataplexV1DataDocumentationResultSchemaRelationshipSchemaPaths;
  /** Output only. Sources which generated the schema relation edge. */
  sources?: ReadonlyArray<
    | "SOURCE_UNSPECIFIED"
    | "AGENT"
    | "QUERY_HISTORY"
    | "TABLE_CONSTRAINTS"
    | (string & {})
  >;
  /** Output only. An ordered list of fields for the join from the second table. The size of this list must be the same as left_schema_paths. Each field at index i in this list must correspond to a field at the same index in the left_schema_paths list. */
  rightSchemaPaths?: GoogleCloudDataplexV1DataDocumentationResultSchemaRelationshipSchemaPaths;
}

export const GoogleCloudDataplexV1DataDocumentationResultSchemaRelationship: Schema.Schema<GoogleCloudDataplexV1DataDocumentationResultSchemaRelationship> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    leftSchemaPaths: Schema.optional(
      GoogleCloudDataplexV1DataDocumentationResultSchemaRelationshipSchemaPaths,
    ),
    sources: Schema.optional(Schema.Array(Schema.String)),
    rightSchemaPaths: Schema.optional(
      GoogleCloudDataplexV1DataDocumentationResultSchemaRelationshipSchemaPaths,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDataplexV1DataDocumentationResultSchemaRelationship",
  });

export interface GoogleCloudDataplexV1DataDocumentationResultDatasetResult {
  /** Output only. Sample SQL queries for the dataset. */
  queries?: ReadonlyArray<GoogleCloudDataplexV1DataDocumentationResultQuery>;
  /** Output only. Relationships suggesting how tables in the dataset are related to each other, based on their schema. */
  schemaRelationships?: ReadonlyArray<GoogleCloudDataplexV1DataDocumentationResultSchemaRelationship>;
  /** Output only. Generated Dataset description. */
  overview?: string;
}

export const GoogleCloudDataplexV1DataDocumentationResultDatasetResult: Schema.Schema<GoogleCloudDataplexV1DataDocumentationResultDatasetResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queries: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1DataDocumentationResultQuery),
    ),
    schemaRelationships: Schema.optional(
      Schema.Array(
        GoogleCloudDataplexV1DataDocumentationResultSchemaRelationship,
      ),
    ),
    overview: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataDocumentationResultDatasetResult",
  });

export interface GoogleCloudDataplexV1DataDocumentationResultField {
  /** Output only. The name of the column. */
  name?: string;
  /** Output only. Nested fields. */
  fields?: ReadonlyArray<GoogleCloudDataplexV1DataDocumentationResultField>;
  /** Output only. Generated description for columns and fields. */
  description?: string;
}

export const GoogleCloudDataplexV1DataDocumentationResultField: Schema.Schema<GoogleCloudDataplexV1DataDocumentationResultField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.optional(Schema.String),
      fields: Schema.optional(
        Schema.Array(GoogleCloudDataplexV1DataDocumentationResultField),
      ),
      description: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "GoogleCloudDataplexV1DataDocumentationResultField",
  }) as any as Schema.Schema<GoogleCloudDataplexV1DataDocumentationResultField>;

export interface GoogleCloudDataplexV1DataDocumentationResultSchema {
  /** Output only. The list of columns. */
  fields?: ReadonlyArray<GoogleCloudDataplexV1DataDocumentationResultField>;
}

export const GoogleCloudDataplexV1DataDocumentationResultSchema: Schema.Schema<GoogleCloudDataplexV1DataDocumentationResultSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fields: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1DataDocumentationResultField),
    ),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataDocumentationResultSchema",
  });

export interface GoogleCloudDataplexV1DataDocumentationResultTableResult {
  /** Output only. Generated description of the table. */
  overview?: string;
  /** Output only. The service-qualified full resource name of the cloud resource. Ex: //bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID */
  name?: string;
  /** Output only. Schema of the table with generated metadata of the columns in the schema. */
  schema?: GoogleCloudDataplexV1DataDocumentationResultSchema;
  /** Output only. Sample SQL queries for the table. */
  queries?: ReadonlyArray<GoogleCloudDataplexV1DataDocumentationResultQuery>;
}

export const GoogleCloudDataplexV1DataDocumentationResultTableResult: Schema.Schema<GoogleCloudDataplexV1DataDocumentationResultTableResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    overview: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    schema: Schema.optional(GoogleCloudDataplexV1DataDocumentationResultSchema),
    queries: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1DataDocumentationResultQuery),
    ),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataDocumentationResultTableResult",
  });

export interface GoogleCloudDataplexV1DataDocumentationResult {
  /** Output only. Insights for a Dataset resource. */
  datasetResult?: GoogleCloudDataplexV1DataDocumentationResultDatasetResult;
  /** Output only. Insights for a Table resource. */
  tableResult?: GoogleCloudDataplexV1DataDocumentationResultTableResult;
}

export const GoogleCloudDataplexV1DataDocumentationResult: Schema.Schema<GoogleCloudDataplexV1DataDocumentationResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datasetResult: Schema.optional(
      GoogleCloudDataplexV1DataDocumentationResultDatasetResult,
    ),
    tableResult: Schema.optional(
      GoogleCloudDataplexV1DataDocumentationResultTableResult,
    ),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataDocumentationResult" });

export interface GoogleCloudDataplexV1DataQualityRuleResultDebugQueryResult {
  /** Indicates the data type of the result. For more information, see BigQuery data types (https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types). */
  type?: string;
  /** Represents the value of the result as a string. */
  value?: string;
  /** Specifies the name of the result. Available if provided with an explicit alias using [AS] alias. */
  name?: string;
}

export const GoogleCloudDataplexV1DataQualityRuleResultDebugQueryResult: Schema.Schema<GoogleCloudDataplexV1DataQualityRuleResultDebugQueryResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataQualityRuleResultDebugQueryResult",
  });

export interface GoogleCloudDataplexV1DataQualityRuleResultDebugQueryResultSet {
  /** Output only. Contains all results. Up to 10 results can be returned. */
  results?: ReadonlyArray<GoogleCloudDataplexV1DataQualityRuleResultDebugQueryResult>;
}

export const GoogleCloudDataplexV1DataQualityRuleResultDebugQueryResultSet: Schema.Schema<GoogleCloudDataplexV1DataQualityRuleResultDebugQueryResultSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1DataQualityRuleResultDebugQueryResult),
    ),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataQualityRuleResultDebugQueryResultSet",
  });

export interface GoogleCloudDataplexV1DataQualityRuleDebugQuery {
  /** Optional. Specifies the description of the debug query. The maximum length is 1,024 characters. */
  description?: string;
  /** Required. Specifies the SQL statement to be executed. */
  sqlStatement?: string;
}

export const GoogleCloudDataplexV1DataQualityRuleDebugQuery: Schema.Schema<GoogleCloudDataplexV1DataQualityRuleDebugQuery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    sqlStatement: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataQualityRuleDebugQuery" });

export interface GoogleCloudDataplexV1DataQualityRuleRangeExpectation {
  /** Optional. The minimum column value allowed for a row to pass this validation. At least one of min_value and max_value need to be provided. */
  minValue?: string;
  /** Optional. Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed.Only relevant if a max_value has been defined. Default = false. */
  strictMaxEnabled?: boolean;
  /** Optional. The maximum column value allowed for a row to pass this validation. At least one of min_value and max_value need to be provided. */
  maxValue?: string;
  /** Optional. Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed.Only relevant if a min_value has been defined. Default = false. */
  strictMinEnabled?: boolean;
}

export const GoogleCloudDataplexV1DataQualityRuleRangeExpectation: Schema.Schema<GoogleCloudDataplexV1DataQualityRuleRangeExpectation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minValue: Schema.optional(Schema.String),
    strictMaxEnabled: Schema.optional(Schema.Boolean),
    maxValue: Schema.optional(Schema.String),
    strictMinEnabled: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataQualityRuleRangeExpectation",
  });

export interface GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation {
  /** Optional. The maximum column statistic value allowed for a row to pass this validation.At least one of min_value and max_value need to be provided. */
  maxValue?: string;
  /** Optional. Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed.Only relevant if a min_value has been defined. Default = false. */
  strictMinEnabled?: boolean;
  /** Optional. Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed.Only relevant if a max_value has been defined. Default = false. */
  strictMaxEnabled?: boolean;
  /** Optional. The aggregate metric to evaluate. */
  statistic?: "STATISTIC_UNDEFINED" | "MEAN" | "MIN" | "MAX" | (string & {});
  /** Optional. The minimum column statistic value allowed for a row to pass this validation.At least one of min_value and max_value need to be provided. */
  minValue?: string;
}

export const GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation: Schema.Schema<GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxValue: Schema.optional(Schema.String),
    strictMinEnabled: Schema.optional(Schema.Boolean),
    strictMaxEnabled: Schema.optional(Schema.Boolean),
    statistic: Schema.optional(Schema.String),
    minValue: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation",
  });

export interface GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation {
  /** Optional. The SQL expression. */
  sqlExpression?: string;
}

export const GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation: Schema.Schema<GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sqlExpression: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation",
  });

export interface GoogleCloudDataplexV1DataQualityRuleRuleSourceRulePathElementEntrySource {
  /** Output only. The entry type to represent the current characteristics of the entry in the form of: projects/{project_id_or_number}/locations/{location_id}/entryTypes/{entry-type-id}. */
  entryType?: string;
  /** Output only. The entry name in the form of: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id} */
  entry?: string;
  /** Output only. The display name of the entry. */
  displayName?: string;
}

export const GoogleCloudDataplexV1DataQualityRuleRuleSourceRulePathElementEntrySource: Schema.Schema<GoogleCloudDataplexV1DataQualityRuleRuleSourceRulePathElementEntrySource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entryType: Schema.optional(Schema.String),
    entry: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDataplexV1DataQualityRuleRuleSourceRulePathElementEntrySource",
  });

export interface GoogleCloudDataplexV1DataQualityRuleRuleSourceRulePathElementEntryLinkSource {
  /** Output only. The entry link name in the form of: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entryLinks/{entry_link_id} */
  entryLink?: string;
  /** Output only. The entry link type to represent the current relationship between the entry and the next entry in the path. In the form of: projects/{project_id_or_number}/locations/{location_id}/entryLinkTypes/{entry_link_type_id} */
  entryLinkType?: string;
}

export const GoogleCloudDataplexV1DataQualityRuleRuleSourceRulePathElementEntryLinkSource: Schema.Schema<GoogleCloudDataplexV1DataQualityRuleRuleSourceRulePathElementEntryLinkSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entryLink: Schema.optional(Schema.String),
    entryLinkType: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDataplexV1DataQualityRuleRuleSourceRulePathElementEntryLinkSource",
  });

export interface GoogleCloudDataplexV1DataQualityRuleRuleSourceRulePathElement {
  /** Output only. Entry source represents information about the related source entry. */
  entrySource?: GoogleCloudDataplexV1DataQualityRuleRuleSourceRulePathElementEntrySource;
  /** Output only. Entry link source represents information about the entry link. */
  entryLinkSource?: GoogleCloudDataplexV1DataQualityRuleRuleSourceRulePathElementEntryLinkSource;
}

export const GoogleCloudDataplexV1DataQualityRuleRuleSourceRulePathElement: Schema.Schema<GoogleCloudDataplexV1DataQualityRuleRuleSourceRulePathElement> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entrySource: Schema.optional(
      GoogleCloudDataplexV1DataQualityRuleRuleSourceRulePathElementEntrySource,
    ),
    entryLinkSource: Schema.optional(
      GoogleCloudDataplexV1DataQualityRuleRuleSourceRulePathElementEntryLinkSource,
    ),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataQualityRuleRuleSourceRulePathElement",
  });

export interface GoogleCloudDataplexV1DataQualityRuleRuleSource {
  /** Output only. Rule path elements represent information about the individual items in the relationship path between the scan resource and rule origin in that order. */
  rulePathElements?: ReadonlyArray<GoogleCloudDataplexV1DataQualityRuleRuleSourceRulePathElement>;
}

export const GoogleCloudDataplexV1DataQualityRuleRuleSource: Schema.Schema<GoogleCloudDataplexV1DataQualityRuleRuleSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rulePathElements: Schema.optional(
      Schema.Array(
        GoogleCloudDataplexV1DataQualityRuleRuleSourceRulePathElement,
      ),
    ),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataQualityRuleRuleSource" });

export interface GoogleCloudDataplexV1DataQualityRuleRegexExpectation {
  /** Optional. A regular expression the column value is expected to match. */
  regex?: string;
}

export const GoogleCloudDataplexV1DataQualityRuleRegexExpectation: Schema.Schema<GoogleCloudDataplexV1DataQualityRuleRegexExpectation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regex: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataQualityRuleRegexExpectation",
  });

export interface GoogleCloudDataplexV1DataQualityRuleUniquenessExpectation {}

export const GoogleCloudDataplexV1DataQualityRuleUniquenessExpectation: Schema.Schema<GoogleCloudDataplexV1DataQualityRuleUniquenessExpectation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDataplexV1DataQualityRuleUniquenessExpectation",
  });

export interface GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation {
  /** Optional. The SQL expression. */
  sqlExpression?: string;
}

export const GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation: Schema.Schema<GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sqlExpression: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation",
  });

export interface GoogleCloudDataplexV1DataQualityRuleSqlAssertion {
  /** Optional. The SQL statement. */
  sqlStatement?: string;
}

export const GoogleCloudDataplexV1DataQualityRuleSqlAssertion: Schema.Schema<GoogleCloudDataplexV1DataQualityRuleSqlAssertion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sqlStatement: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataQualityRuleSqlAssertion",
  });

export interface GoogleCloudDataplexV1DataQualityRuleTemplateReferenceParameterValue {
  /** Required. Represents the string value of the parameter. */
  value?: string;
}

export const GoogleCloudDataplexV1DataQualityRuleTemplateReferenceParameterValue: Schema.Schema<GoogleCloudDataplexV1DataQualityRuleTemplateReferenceParameterValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDataplexV1DataQualityRuleTemplateReferenceParameterValue",
  });

export interface GoogleCloudDataplexV1DataQualityRuleTemplateSql {
  /** Output only. Templatized SQL query for data quality rules. */
  query?: string;
}

export const GoogleCloudDataplexV1DataQualityRuleTemplateSql: Schema.Schema<GoogleCloudDataplexV1DataQualityRuleTemplateSql> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataQualityRuleTemplateSql",
  });

export interface GoogleCloudDataplexV1DataQualityRuleTemplateParameterDescription {
  /** Output only. Description of the input parameter. It can include the type(s) supported by the parameter and intended usage. It is for information purposes only and does not affect the behavior of the rule template. */
  description?: string;
  /** Output only. The default value for the parameter if no value is provided. */
  defaultValue?: string;
}

export const GoogleCloudDataplexV1DataQualityRuleTemplateParameterDescription: Schema.Schema<GoogleCloudDataplexV1DataQualityRuleTemplateParameterDescription> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    defaultValue: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDataplexV1DataQualityRuleTemplateParameterDescription",
  });

export interface GoogleCloudDataplexV1DataQualityRuleTemplate {
  /** Output only. A list of features or properties supported by this rule template. */
  capabilities?: ReadonlyArray<string>;
  /** Output only. The name of the rule template in the format: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id} */
  name?: string;
  /** Output only. Collection of SQLs for data quality rules. Currently only one SQL is supported. */
  sqlCollection?: ReadonlyArray<GoogleCloudDataplexV1DataQualityRuleTemplateSql>;
  /** Output only. The dimension a rule template belongs to. Rule level results are also aggregated at the dimension level. */
  dimension?: string;
  /** Output only. Description for input parameters */
  inputParameters?: Record<
    string,
    GoogleCloudDataplexV1DataQualityRuleTemplateParameterDescription
  >;
}

export const GoogleCloudDataplexV1DataQualityRuleTemplate: Schema.Schema<GoogleCloudDataplexV1DataQualityRuleTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    capabilities: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    sqlCollection: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1DataQualityRuleTemplateSql),
    ),
    dimension: Schema.optional(Schema.String),
    inputParameters: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDataplexV1DataQualityRuleTemplateParameterDescription,
      ),
    ),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataQualityRuleTemplate" });

export interface GoogleCloudDataplexV1DataQualityRuleTemplateReference {
  /** Optional. Provides the map of parameter name and value. The maximum size of the field is 120KB (encoded as UTF-8). */
  values?: Record<
    string,
    GoogleCloudDataplexV1DataQualityRuleTemplateReferenceParameterValue
  >;
  /** Output only. The resolved SQL statement generated from the template with parameters substituted. It is only populated in the result. */
  resolvedSql?: string;
  /** Required. The template entry name. Entry must be of EntryType projects/dataplex-types/locations/global/entryTypes/data-quality-rule-template and contains top-level aspect of AspectType projects/dataplex-types/locations/global/aspectTypes/data-quality-rule-template. The format is: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id} */
  name?: string;
  /** Output only. The rule template used to resolve the rule. It is only populated in the result. */
  ruleTemplate?: GoogleCloudDataplexV1DataQualityRuleTemplate;
}

export const GoogleCloudDataplexV1DataQualityRuleTemplateReference: Schema.Schema<GoogleCloudDataplexV1DataQualityRuleTemplateReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDataplexV1DataQualityRuleTemplateReferenceParameterValue,
      ),
    ),
    resolvedSql: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    ruleTemplate: Schema.optional(GoogleCloudDataplexV1DataQualityRuleTemplate),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataQualityRuleTemplateReference",
  });

export interface GoogleCloudDataplexV1DataQualityRuleNonNullExpectation {}

export const GoogleCloudDataplexV1DataQualityRuleNonNullExpectation: Schema.Schema<GoogleCloudDataplexV1DataQualityRuleNonNullExpectation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDataplexV1DataQualityRuleNonNullExpectation",
  });

export interface GoogleCloudDataplexV1DataQualityRuleSetExpectation {
  /** Optional. Expected values for the column value. */
  values?: ReadonlyArray<string>;
}

export const GoogleCloudDataplexV1DataQualityRuleSetExpectation: Schema.Schema<GoogleCloudDataplexV1DataQualityRuleSetExpectation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataQualityRuleSetExpectation",
  });

export interface GoogleCloudDataplexV1DataQualityRule {
  /** Optional. Specifies the debug queries for this rule. Currently, only one query is supported, but this may be expanded in the future. */
  debugQueries?: ReadonlyArray<GoogleCloudDataplexV1DataQualityRuleDebugQuery>;
  /** Optional. The dimension a rule belongs to. Results are also aggregated at the dimension level. Custom dimension name is supported with all uppercase letters and maximum length of 30 characters. */
  dimension?: string;
  /** Row-level rule which evaluates whether each column value lies between a specified range. */
  rangeExpectation?: GoogleCloudDataplexV1DataQualityRuleRangeExpectation;
  /** Aggregate rule which evaluates whether the column aggregate statistic lies between a specified range. */
  statisticRangeExpectation?: GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation;
  /** Aggregate rule which evaluates whether the provided expression is true for a table. */
  tableConditionExpectation?: GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation;
  /** Optional. A mutable name for the rule. The name must contain only letters (a-z, A-Z), numbers (0-9), or hyphens (-). The maximum length is 63 characters. Must start with a letter. Must end with a number or a letter. */
  name?: string;
  /** Output only. Contains information about the source of the rule and its relationship with the BigQuery table, where applicable. */
  ruleSource?: GoogleCloudDataplexV1DataQualityRuleRuleSource;
  /** Optional. Whether the Rule is active or suspended. Default is false. */
  suspended?: boolean;
  /** Row-level rule which evaluates whether each column value matches a specified regex. */
  regexExpectation?: GoogleCloudDataplexV1DataQualityRuleRegexExpectation;
  /** Optional. Rows with null values will automatically fail a rule, unless ignore_null is true. In that case, such null rows are trivially considered passing.This field is only valid for the following type of rules: RangeExpectation RegexExpectation SetExpectation UniquenessExpectation */
  ignoreNull?: boolean;
  /** Row-level rule which evaluates whether each column value is unique. */
  uniquenessExpectation?: GoogleCloudDataplexV1DataQualityRuleUniquenessExpectation;
  /** Optional. Map of attribute name and value linked to the rule. The rules to evaluate can be filtered based on attributes provided here and a filter expression provided in the DataQualitySpec.filter field. */
  attributes?: Record<string, string>;
  /** Optional. The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of 0.0, 1.0.0 indicates default value (i.e. 1.0).This field is only valid for row-level type rules. */
  threshold?: number;
  /** Row-level rule which evaluates whether each row in a table passes the specified condition. */
  rowConditionExpectation?: GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation;
  /** Aggregate rule which evaluates the number of rows returned for the provided statement. If any rows are returned, this rule fails. */
  sqlAssertion?: GoogleCloudDataplexV1DataQualityRuleSqlAssertion;
  /** Aggregate rule which references a rule template and provides the parameters to be substituted in the template. If any rows are returned, this rule fails. */
  templateReference?: GoogleCloudDataplexV1DataQualityRuleTemplateReference;
  /** Optional. The unnested column which this rule is evaluated against. */
  column?: string;
  /** Row-level rule which evaluates whether each column value is null. */
  nonNullExpectation?: GoogleCloudDataplexV1DataQualityRuleNonNullExpectation;
  /** Row-level rule which evaluates whether each column value is contained by a specified set. */
  setExpectation?: GoogleCloudDataplexV1DataQualityRuleSetExpectation;
  /** Optional. Description of the rule. The maximum length is 1,024 characters. */
  description?: string;
}

export const GoogleCloudDataplexV1DataQualityRule: Schema.Schema<GoogleCloudDataplexV1DataQualityRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    debugQueries: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1DataQualityRuleDebugQuery),
    ),
    dimension: Schema.optional(Schema.String),
    rangeExpectation: Schema.optional(
      GoogleCloudDataplexV1DataQualityRuleRangeExpectation,
    ),
    statisticRangeExpectation: Schema.optional(
      GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation,
    ),
    tableConditionExpectation: Schema.optional(
      GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation,
    ),
    name: Schema.optional(Schema.String),
    ruleSource: Schema.optional(GoogleCloudDataplexV1DataQualityRuleRuleSource),
    suspended: Schema.optional(Schema.Boolean),
    regexExpectation: Schema.optional(
      GoogleCloudDataplexV1DataQualityRuleRegexExpectation,
    ),
    ignoreNull: Schema.optional(Schema.Boolean),
    uniquenessExpectation: Schema.optional(
      GoogleCloudDataplexV1DataQualityRuleUniquenessExpectation,
    ),
    attributes: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    threshold: Schema.optional(Schema.Number),
    rowConditionExpectation: Schema.optional(
      GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation,
    ),
    sqlAssertion: Schema.optional(
      GoogleCloudDataplexV1DataQualityRuleSqlAssertion,
    ),
    templateReference: Schema.optional(
      GoogleCloudDataplexV1DataQualityRuleTemplateReference,
    ),
    column: Schema.optional(Schema.String),
    nonNullExpectation: Schema.optional(
      GoogleCloudDataplexV1DataQualityRuleNonNullExpectation,
    ),
    setExpectation: Schema.optional(
      GoogleCloudDataplexV1DataQualityRuleSetExpectation,
    ),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataQualityRule" });

export interface GoogleCloudDataplexV1DataQualityRuleResult {
  /** Output only. The number of rows which passed a rule evaluation.This field is only valid for row-level type rules.This field is not set for rule SqlAssertion. */
  passedCount?: string;
  /** Output only. The query to find rows that did not pass this rule.This field is only valid for row-level type rules. */
  failingRowsQuery?: string;
  /** Output only. Whether the rule passed or failed. */
  passed?: boolean;
  /** Output only. Contains the results of all debug queries for this rule. The number of result sets will correspond to the number of debug_queries. */
  debugQueriesResultSets?: ReadonlyArray<GoogleCloudDataplexV1DataQualityRuleResultDebugQueryResultSet>;
  /** Output only. The number of rows a rule was evaluated against.This field is only valid for row-level type rules.Evaluated count can be configured to either include all rows (default) - with null rows automatically failing rule evaluation, or exclude null rows from the evaluated_count, by setting ignore_nulls = true.This field is not set for rule SqlAssertion. */
  evaluatedCount?: string;
  /** Output only. The rule specified in the DataQualitySpec, as is. */
  rule?: GoogleCloudDataplexV1DataQualityRule;
  /** Output only. The number of rows with null values in the specified column. */
  nullCount?: string;
  /** Output only. The number of rows returned by the SQL statement in a SQL assertion rule.This field is only valid for SQL assertion rules. */
  assertionRowCount?: string;
  /** Output only. The ratio of passed_count / evaluated_count.This field is only valid for row-level type rules. */
  passRatio?: number;
}

export const GoogleCloudDataplexV1DataQualityRuleResult: Schema.Schema<GoogleCloudDataplexV1DataQualityRuleResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    passedCount: Schema.optional(Schema.String),
    failingRowsQuery: Schema.optional(Schema.String),
    passed: Schema.optional(Schema.Boolean),
    debugQueriesResultSets: Schema.optional(
      Schema.Array(
        GoogleCloudDataplexV1DataQualityRuleResultDebugQueryResultSet,
      ),
    ),
    evaluatedCount: Schema.optional(Schema.String),
    rule: Schema.optional(GoogleCloudDataplexV1DataQualityRule),
    nullCount: Schema.optional(Schema.String),
    assertionRowCount: Schema.optional(Schema.String),
    passRatio: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataQualityRuleResult" });

export interface GoogleCloudDataplexV1DataScanCatalogPublishingStatus {
  /** Output only. Execution state for publishing. */
  state?:
    | "STATE_UNSPECIFIED"
    | "SUCCEEDED"
    | "FAILED"
    | "SKIPPED"
    | (string & {});
}

export const GoogleCloudDataplexV1DataScanCatalogPublishingStatus: Schema.Schema<GoogleCloudDataplexV1DataScanCatalogPublishingStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataScanCatalogPublishingStatus",
  });

export interface GoogleCloudDataplexV1ScannedDataIncrementalField {
  /** Output only. The field that contains values which monotonically increases over time (e.g. a timestamp column). */
  field?: string;
  /** Output only. Value that marks the start of the range. */
  start?: string;
  /** Output only. Value that marks the end of the range. */
  end?: string;
}

export const GoogleCloudDataplexV1ScannedDataIncrementalField: Schema.Schema<GoogleCloudDataplexV1ScannedDataIncrementalField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    field: Schema.optional(Schema.String),
    start: Schema.optional(Schema.String),
    end: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1ScannedDataIncrementalField",
  });

export interface GoogleCloudDataplexV1ScannedData {
  /** The range denoted by values of an incremental field */
  incrementalField?: GoogleCloudDataplexV1ScannedDataIncrementalField;
}

export const GoogleCloudDataplexV1ScannedData: Schema.Schema<GoogleCloudDataplexV1ScannedData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    incrementalField: Schema.optional(
      GoogleCloudDataplexV1ScannedDataIncrementalField,
    ),
  }).annotate({ identifier: "GoogleCloudDataplexV1ScannedData" });

export interface GoogleCloudDataplexV1DataQualityDimension {
  /** Output only. The dimension name a rule belongs to. Custom dimension name is supported with all uppercase letters and maximum length of 30 characters. */
  name?: string;
}

export const GoogleCloudDataplexV1DataQualityDimension: Schema.Schema<GoogleCloudDataplexV1DataQualityDimension> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataQualityDimension" });

export interface GoogleCloudDataplexV1DataQualityDimensionResult {
  /** Output only. The dimension config specified in the DataQualitySpec, as is. */
  dimension?: GoogleCloudDataplexV1DataQualityDimension;
  /** Output only. Whether the dimension passed or failed. */
  passed?: boolean;
  /** Output only. The dimension-level data quality score for this data scan job if and only if the 'dimension' field is set.The score ranges between 0, 100 (up to two decimal points). */
  score?: number;
}

export const GoogleCloudDataplexV1DataQualityDimensionResult: Schema.Schema<GoogleCloudDataplexV1DataQualityDimensionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dimension: Schema.optional(GoogleCloudDataplexV1DataQualityDimension),
    passed: Schema.optional(Schema.Boolean),
    score: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataQualityDimensionResult",
  });

export interface GoogleCloudDataplexV1DataQualityResultPostScanActionsResultBigQueryExportResult {
  /** Output only. Execution state for the BigQuery exporting. */
  state?:
    | "STATE_UNSPECIFIED"
    | "SUCCEEDED"
    | "FAILED"
    | "SKIPPED"
    | (string & {});
  /** Output only. Additional information about the BigQuery exporting. */
  message?: string;
}

export const GoogleCloudDataplexV1DataQualityResultPostScanActionsResultBigQueryExportResult: Schema.Schema<GoogleCloudDataplexV1DataQualityResultPostScanActionsResultBigQueryExportResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDataplexV1DataQualityResultPostScanActionsResultBigQueryExportResult",
  });

export interface GoogleCloudDataplexV1DataQualityResultPostScanActionsResult {
  /** Output only. The result of BigQuery export post scan action. */
  bigqueryExportResult?: GoogleCloudDataplexV1DataQualityResultPostScanActionsResultBigQueryExportResult;
}

export const GoogleCloudDataplexV1DataQualityResultPostScanActionsResult: Schema.Schema<GoogleCloudDataplexV1DataQualityResultPostScanActionsResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bigqueryExportResult: Schema.optional(
      GoogleCloudDataplexV1DataQualityResultPostScanActionsResultBigQueryExportResult,
    ),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataQualityResultPostScanActionsResult",
  });

export interface GoogleCloudDataplexV1DataQualityResultAnomalyDetectionGeneratedAssets {
  /** Output only. The intermediate table for data anomaly detection. Format: PROJECT_ID.DATASET_ID.TABLE_ID */
  dataIntermediateTable?: string;
  /** Output only. The intermediate table for freshness anomaly detection. Format: PROJECT_ID.DATASET_ID.TABLE_ID */
  freshnessIntermediateTable?: string;
  /** Output only. The result table for anomaly detection. Format: PROJECT_ID.DATASET_ID.TABLE_ID If the result table is set at AnomalyDetectionAssets, the result table here would be the same as the one set in the AnomalyDetectionAssets.result_table. */
  resultTable?: string;
  /** Output only. The intermediate table for volume anomaly detection. Format: PROJECT_ID.DATASET_ID.TABLE_ID */
  volumeIntermediateTable?: string;
}

export const GoogleCloudDataplexV1DataQualityResultAnomalyDetectionGeneratedAssets: Schema.Schema<GoogleCloudDataplexV1DataQualityResultAnomalyDetectionGeneratedAssets> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataIntermediateTable: Schema.optional(Schema.String),
    freshnessIntermediateTable: Schema.optional(Schema.String),
    resultTable: Schema.optional(Schema.String),
    volumeIntermediateTable: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDataplexV1DataQualityResultAnomalyDetectionGeneratedAssets",
  });

export interface GoogleCloudDataplexV1DataQualityColumnResult {
  /** Output only. The column-level data quality score for this data scan job if and only if the 'column' field is set.The score ranges between between 0, 100 (up to two decimal points). */
  score?: number;
  /** Output only. Whether the column passed or failed. */
  passed?: boolean;
  /** Output only. The dimension-level results for this column. */
  dimensions?: ReadonlyArray<GoogleCloudDataplexV1DataQualityDimensionResult>;
  /** Output only. The column specified in the DataQualityRule. */
  column?: string;
}

export const GoogleCloudDataplexV1DataQualityColumnResult: Schema.Schema<GoogleCloudDataplexV1DataQualityColumnResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    passed: Schema.optional(Schema.Boolean),
    dimensions: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1DataQualityDimensionResult),
    ),
    column: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataQualityColumnResult" });

export interface GoogleCloudDataplexV1DataQualityResult {
  /** Output only. A list of all the rules in a job, and their results. */
  rules?: ReadonlyArray<GoogleCloudDataplexV1DataQualityRuleResult>;
  /** Output only. The count of rows processed. */
  rowCount?: string;
  /** Output only. The status of publishing the data scan as Dataplex Universal Catalog metadata. */
  catalogPublishingStatus?: GoogleCloudDataplexV1DataScanCatalogPublishingStatus;
  /** Output only. The overall data quality score.The score ranges between 0, 100 (up to two decimal points). */
  score?: number;
  /** Output only. The data scanned for this result. */
  scannedData?: GoogleCloudDataplexV1ScannedData;
  /** Output only. A list of results at the dimension level.A dimension will have a corresponding DataQualityDimensionResult if and only if there is at least one rule with the 'dimension' field set to it. */
  dimensions?: ReadonlyArray<GoogleCloudDataplexV1DataQualityDimensionResult>;
  /** Output only. The result of post scan actions. */
  postScanActionsResult?: GoogleCloudDataplexV1DataQualityResultPostScanActionsResult;
  /** Output only. The generated assets for anomaly detection. */
  anomalyDetectionGeneratedAssets?: GoogleCloudDataplexV1DataQualityResultAnomalyDetectionGeneratedAssets;
  /** Output only. Overall data quality result -- true if all rules passed. */
  passed?: boolean;
  /** Output only. A list of results at the column level.A column will have a corresponding DataQualityColumnResult if and only if there is at least one rule with the 'column' field set to it. */
  columns?: ReadonlyArray<GoogleCloudDataplexV1DataQualityColumnResult>;
}

export const GoogleCloudDataplexV1DataQualityResult: Schema.Schema<GoogleCloudDataplexV1DataQualityResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rules: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1DataQualityRuleResult),
    ),
    rowCount: Schema.optional(Schema.String),
    catalogPublishingStatus: Schema.optional(
      GoogleCloudDataplexV1DataScanCatalogPublishingStatus,
    ),
    score: Schema.optional(Schema.Number),
    scannedData: Schema.optional(GoogleCloudDataplexV1ScannedData),
    dimensions: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1DataQualityDimensionResult),
    ),
    postScanActionsResult: Schema.optional(
      GoogleCloudDataplexV1DataQualityResultPostScanActionsResult,
    ),
    anomalyDetectionGeneratedAssets: Schema.optional(
      GoogleCloudDataplexV1DataQualityResultAnomalyDetectionGeneratedAssets,
    ),
    passed: Schema.optional(Schema.Boolean),
    columns: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1DataQualityColumnResult),
    ),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataQualityResult" });

export interface GoogleCloudDataplexV1ExecutionIdentityDataplexServiceAgent {}

export const GoogleCloudDataplexV1ExecutionIdentityDataplexServiceAgent: Schema.Schema<GoogleCloudDataplexV1ExecutionIdentityDataplexServiceAgent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDataplexV1ExecutionIdentityDataplexServiceAgent",
  });

export interface GoogleCloudDataplexV1ExecutionIdentityUserCredential {}

export const GoogleCloudDataplexV1ExecutionIdentityUserCredential: Schema.Schema<GoogleCloudDataplexV1ExecutionIdentityUserCredential> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDataplexV1ExecutionIdentityUserCredential",
  });

export interface GoogleCloudDataplexV1ExecutionIdentityServiceAccount {
  /** Required. Service account email. The datascan will execute with this service account's credentials. The user calling this API must have permissions to act as this service account. Dataplex service agent must be granted iam.serviceAccounts.getAccessToken permission on this service account, for example, through the iam.serviceAccountTokenCreator role . */
  email?: string;
}

export const GoogleCloudDataplexV1ExecutionIdentityServiceAccount: Schema.Schema<GoogleCloudDataplexV1ExecutionIdentityServiceAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1ExecutionIdentityServiceAccount",
  });

export interface GoogleCloudDataplexV1ExecutionIdentity {
  /** Optional. The Dataplex service agent associated with the user's project. */
  dataplexServiceAgent?: GoogleCloudDataplexV1ExecutionIdentityDataplexServiceAgent;
  /** Optional. The credential of the calling user. Supports only ONE_TIME trigger type. */
  userCredential?: GoogleCloudDataplexV1ExecutionIdentityUserCredential;
  /** Optional. The provided service account. */
  serviceAccount?: GoogleCloudDataplexV1ExecutionIdentityServiceAccount;
}

export const GoogleCloudDataplexV1ExecutionIdentity: Schema.Schema<GoogleCloudDataplexV1ExecutionIdentity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataplexServiceAgent: Schema.optional(
      GoogleCloudDataplexV1ExecutionIdentityDataplexServiceAgent,
    ),
    userCredential: Schema.optional(
      GoogleCloudDataplexV1ExecutionIdentityUserCredential,
    ),
    serviceAccount: Schema.optional(
      GoogleCloudDataplexV1ExecutionIdentityServiceAccount,
    ),
  }).annotate({ identifier: "GoogleCloudDataplexV1ExecutionIdentity" });

export interface GoogleCloudDataplexV1DataProfileSpecPostScanActionsBigQueryExport {
  /** Optional. The BigQuery table to export DataProfileScan results to. Format: //bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID */
  resultsTable?: string;
}

export const GoogleCloudDataplexV1DataProfileSpecPostScanActionsBigQueryExport: Schema.Schema<GoogleCloudDataplexV1DataProfileSpecPostScanActionsBigQueryExport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resultsTable: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDataplexV1DataProfileSpecPostScanActionsBigQueryExport",
  });

export interface GoogleCloudDataplexV1DataProfileSpecPostScanActions {
  /** Optional. If set, results will be exported to the provided BigQuery table. */
  bigqueryExport?: GoogleCloudDataplexV1DataProfileSpecPostScanActionsBigQueryExport;
}

export const GoogleCloudDataplexV1DataProfileSpecPostScanActions: Schema.Schema<GoogleCloudDataplexV1DataProfileSpecPostScanActions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bigqueryExport: Schema.optional(
      GoogleCloudDataplexV1DataProfileSpecPostScanActionsBigQueryExport,
    ),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataProfileSpecPostScanActions",
  });

export interface GoogleCloudDataplexV1DataProfileSpecSelectedFields {
  /** Optional. Expected input is a list of fully qualified names of fields as in the schema.Only top-level field names for nested fields are supported. For instance, if 'x' is of nested field type, listing 'x' is supported but 'x.y.z' is not supported. Here 'y' and 'y.z' are nested fields of 'x'. */
  fieldNames?: ReadonlyArray<string>;
}

export const GoogleCloudDataplexV1DataProfileSpecSelectedFields: Schema.Schema<GoogleCloudDataplexV1DataProfileSpecSelectedFields> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataProfileSpecSelectedFields",
  });

export interface GoogleCloudDataplexV1DataProfileSpec {
  /** Optional. Actions to take upon job completion.. */
  postScanActions?: GoogleCloudDataplexV1DataProfileSpecPostScanActions;
  /** Optional. A filter applied to all rows in a single DataScan job. The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10 */
  rowFilter?: string;
  /** Optional. The fields to exclude from data profile.If specified, the fields will be excluded from data profile, regardless of include_fields value. */
  excludeFields?: GoogleCloudDataplexV1DataProfileSpecSelectedFields;
  /** Optional. If set, the latest DataScan job result will be published as Dataplex Universal Catalog metadata. */
  catalogPublishingEnabled?: boolean;
  /** Optional. The percentage of the records to be selected from the dataset for DataScan. Value can range between 0.0 and 100.0 with up to 3 significant decimal digits. Sampling is not applied if sampling_percent is not specified, 0 or 100. */
  samplingPercent?: number;
  /** Optional. The fields to include in data profile.If not specified, all fields at the time of profile scan job execution are included, except for ones listed in exclude_fields. */
  includeFields?: GoogleCloudDataplexV1DataProfileSpecSelectedFields;
  /** Optional. The execution mode for the profile scan. */
  mode?: "MODE_UNSPECIFIED" | "STANDARD" | "LIGHTWEIGHT" | (string & {});
}

export const GoogleCloudDataplexV1DataProfileSpec: Schema.Schema<GoogleCloudDataplexV1DataProfileSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    postScanActions: Schema.optional(
      GoogleCloudDataplexV1DataProfileSpecPostScanActions,
    ),
    rowFilter: Schema.optional(Schema.String),
    excludeFields: Schema.optional(
      GoogleCloudDataplexV1DataProfileSpecSelectedFields,
    ),
    catalogPublishingEnabled: Schema.optional(Schema.Boolean),
    samplingPercent: Schema.optional(Schema.Number),
    includeFields: Schema.optional(
      GoogleCloudDataplexV1DataProfileSpecSelectedFields,
    ),
    mode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataProfileSpec" });

export interface GoogleCloudDataplexV1DataDocumentationSpec {
  /** Optional. Whether to publish result to Dataplex Catalog. */
  catalogPublishingEnabled?: boolean;
  /** Optional. Specifies which components of the data documentation to generate. Any component that is required to generate the specified components will also be generated. If no generation scope is specified, all available documentation components will be generated. */
  generationScopes?: ReadonlyArray<
    | "GENERATION_SCOPE_UNSPECIFIED"
    | "ALL"
    | "TABLE_AND_COLUMN_DESCRIPTIONS"
    | "SQL_QUERIES"
    | (string & {})
  >;
}

export const GoogleCloudDataplexV1DataDocumentationSpec: Schema.Schema<GoogleCloudDataplexV1DataDocumentationSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    catalogPublishingEnabled: Schema.optional(Schema.Boolean),
    generationScopes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataDocumentationSpec" });

export interface GoogleCloudDataplexV1DataQualitySpecPostScanActionsBigQueryExport {
  /** Optional. The BigQuery table to export DataQualityScan results to. Format: //bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID or projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID */
  resultsTable?: string;
}

export const GoogleCloudDataplexV1DataQualitySpecPostScanActionsBigQueryExport: Schema.Schema<GoogleCloudDataplexV1DataQualitySpecPostScanActionsBigQueryExport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resultsTable: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDataplexV1DataQualitySpecPostScanActionsBigQueryExport",
  });

export interface GoogleCloudDataplexV1DataQualitySpecPostScanActionsRecipients {
  /** Optional. The email recipients who will receive the DataQualityScan results report. */
  emails?: ReadonlyArray<string>;
}

export const GoogleCloudDataplexV1DataQualitySpecPostScanActionsRecipients: Schema.Schema<GoogleCloudDataplexV1DataQualitySpecPostScanActionsRecipients> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    emails: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataQualitySpecPostScanActionsRecipients",
  });

export interface GoogleCloudDataplexV1DataQualitySpecPostScanActionsScoreThresholdTrigger {
  /** Optional. The score range is in 0,100. */
  scoreThreshold?: number;
}

export const GoogleCloudDataplexV1DataQualitySpecPostScanActionsScoreThresholdTrigger: Schema.Schema<GoogleCloudDataplexV1DataQualitySpecPostScanActionsScoreThresholdTrigger> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scoreThreshold: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDataplexV1DataQualitySpecPostScanActionsScoreThresholdTrigger",
  });

export interface GoogleCloudDataplexV1DataQualitySpecPostScanActionsJobFailureTrigger {}

export const GoogleCloudDataplexV1DataQualitySpecPostScanActionsJobFailureTrigger: Schema.Schema<GoogleCloudDataplexV1DataQualitySpecPostScanActionsJobFailureTrigger> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudDataplexV1DataQualitySpecPostScanActionsJobFailureTrigger",
  });

export interface GoogleCloudDataplexV1DataQualitySpecPostScanActionsJobEndTrigger {}

export const GoogleCloudDataplexV1DataQualitySpecPostScanActionsJobEndTrigger: Schema.Schema<GoogleCloudDataplexV1DataQualitySpecPostScanActionsJobEndTrigger> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudDataplexV1DataQualitySpecPostScanActionsJobEndTrigger",
  });

export interface GoogleCloudDataplexV1DataQualitySpecPostScanActionsNotificationReport {
  /** Required. The recipients who will receive the notification report. */
  recipients?: GoogleCloudDataplexV1DataQualitySpecPostScanActionsRecipients;
  /** Optional. If set, report will be sent when score threshold is met. */
  scoreThresholdTrigger?: GoogleCloudDataplexV1DataQualitySpecPostScanActionsScoreThresholdTrigger;
  /** Optional. If set, report will be sent when a scan job fails. */
  jobFailureTrigger?: GoogleCloudDataplexV1DataQualitySpecPostScanActionsJobFailureTrigger;
  /** Optional. If set, report will be sent when a scan job ends. */
  jobEndTrigger?: GoogleCloudDataplexV1DataQualitySpecPostScanActionsJobEndTrigger;
}

export const GoogleCloudDataplexV1DataQualitySpecPostScanActionsNotificationReport: Schema.Schema<GoogleCloudDataplexV1DataQualitySpecPostScanActionsNotificationReport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recipients: Schema.optional(
      GoogleCloudDataplexV1DataQualitySpecPostScanActionsRecipients,
    ),
    scoreThresholdTrigger: Schema.optional(
      GoogleCloudDataplexV1DataQualitySpecPostScanActionsScoreThresholdTrigger,
    ),
    jobFailureTrigger: Schema.optional(
      GoogleCloudDataplexV1DataQualitySpecPostScanActionsJobFailureTrigger,
    ),
    jobEndTrigger: Schema.optional(
      GoogleCloudDataplexV1DataQualitySpecPostScanActionsJobEndTrigger,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDataplexV1DataQualitySpecPostScanActionsNotificationReport",
  });

export interface GoogleCloudDataplexV1DataQualitySpecPostScanActions {
  /** Optional. If set, results will be exported to the provided BigQuery table. */
  bigqueryExport?: GoogleCloudDataplexV1DataQualitySpecPostScanActionsBigQueryExport;
  /** Optional. If set, results will be sent to the provided notification receipts upon triggers. */
  notificationReport?: GoogleCloudDataplexV1DataQualitySpecPostScanActionsNotificationReport;
}

export const GoogleCloudDataplexV1DataQualitySpecPostScanActions: Schema.Schema<GoogleCloudDataplexV1DataQualitySpecPostScanActions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bigqueryExport: Schema.optional(
      GoogleCloudDataplexV1DataQualitySpecPostScanActionsBigQueryExport,
    ),
    notificationReport: Schema.optional(
      GoogleCloudDataplexV1DataQualitySpecPostScanActionsNotificationReport,
    ),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataQualitySpecPostScanActions",
  });

export interface GoogleCloudDataplexV1DataQualitySpec {
  /** Optional. Actions to take upon job completion. */
  postScanActions?: GoogleCloudDataplexV1DataQualitySpecPostScanActions;
  /** Optional. If set, the latest DataScan job result will be published as Dataplex Universal Catalog metadata. */
  catalogPublishingEnabled?: boolean;
  /** Optional. A filter applied to all rows in a single DataScan job. The filter needs to be a valid SQL expression for a WHERE clause in GoogleSQL syntax (https://cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax#where_clause).Example: col1 >= 0 AND col2 < 10 */
  rowFilter?: string;
  /** Optional. The percentage of the records to be selected from the dataset for DataScan. Value can range between 0.0 and 100.0 with up to 3 significant decimal digits. Sampling is not applied if sampling_percent is not specified, 0 or 100. */
  samplingPercent?: number;
  /** Optional. Filter for selectively running a subset of rules. You can filter the request by the name or attribute key-value pairs defined on the rule. If not specified, all rules are run. The filter is applicable to both, the rules retrieved from catalog and explicitly defined rules in the scan. Please see filter syntax (https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview#rule-filtering) for more details. */
  filter?: string;
  /** Required. The list of rules to evaluate against a data source. At least one rule is required. */
  rules?: ReadonlyArray<GoogleCloudDataplexV1DataQualityRule>;
  /** Optional. If enabled, the data scan will retrieve rules defined in the dataplex-types.global.data-rules aspect on all paths of the catalog entry corresponding to the BigQuery table resource and all attached glossary terms. The path that data-rules aspect is attached on the table entry defines the column that the rule will be evaluated against. For glossary terms, the path that the terms are attached on the table entry defines the column that the rule will be evaluated against. At the start of scan execution, the rules reflect the latest state retrieved from the catalog entry and any updates on the rules thereafter are ignored for that execution. The updates will be reflected from the next execution. Rules defined in the datascan must be empty if this field is enabled. */
  enableCatalogBasedRules?: boolean;
}

export const GoogleCloudDataplexV1DataQualitySpec: Schema.Schema<GoogleCloudDataplexV1DataQualitySpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    postScanActions: Schema.optional(
      GoogleCloudDataplexV1DataQualitySpecPostScanActions,
    ),
    catalogPublishingEnabled: Schema.optional(Schema.Boolean),
    rowFilter: Schema.optional(Schema.String),
    samplingPercent: Schema.optional(Schema.Number),
    filter: Schema.optional(Schema.String),
    rules: Schema.optional(Schema.Array(GoogleCloudDataplexV1DataQualityRule)),
    enableCatalogBasedRules: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataQualitySpec" });

export interface GoogleCloudDataplexV1TriggerOnDemand {}

export const GoogleCloudDataplexV1TriggerOnDemand: Schema.Schema<GoogleCloudDataplexV1TriggerOnDemand> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDataplexV1TriggerOnDemand",
  });

export interface GoogleCloudDataplexV1TriggerSchedule {
  /** Required. Cron (https://en.wikipedia.org/wiki/Cron) schedule for running scans periodically.To explicitly set a timezone in the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database (wikipedia (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)). For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *.This field is required for Schedule scans. */
  cron?: string;
}

export const GoogleCloudDataplexV1TriggerSchedule: Schema.Schema<GoogleCloudDataplexV1TriggerSchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cron: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1TriggerSchedule" });

export interface GoogleCloudDataplexV1TriggerOneTime {
  /** Optional. Time to live for OneTime scans. default value is 24 hours, minimum value is 0 seconds, and maximum value is 365 days. The time is calculated from the data scan job completion time. If value is set as 0 seconds, the scan will be immediately deleted upon job completion, regardless of whether the job succeeded or failed. */
  ttlAfterScanCompletion?: string;
}

export const GoogleCloudDataplexV1TriggerOneTime: Schema.Schema<GoogleCloudDataplexV1TriggerOneTime> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ttlAfterScanCompletion: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1TriggerOneTime" });

export interface GoogleCloudDataplexV1Trigger {
  /** The scan runs once via RunDataScan API. */
  onDemand?: GoogleCloudDataplexV1TriggerOnDemand;
  /** The scan is scheduled to run periodically. */
  schedule?: GoogleCloudDataplexV1TriggerSchedule;
  /** The scan runs once, and does not create an associated ScanJob child resource. */
  oneTime?: GoogleCloudDataplexV1TriggerOneTime;
}

export const GoogleCloudDataplexV1Trigger: Schema.Schema<GoogleCloudDataplexV1Trigger> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    onDemand: Schema.optional(GoogleCloudDataplexV1TriggerOnDemand),
    schedule: Schema.optional(GoogleCloudDataplexV1TriggerSchedule),
    oneTime: Schema.optional(GoogleCloudDataplexV1TriggerOneTime),
  }).annotate({ identifier: "GoogleCloudDataplexV1Trigger" });

export interface GoogleCloudDataplexV1DataScanExecutionSpec {
  /** Optional. Spec related to how often and when a scan should be triggered.If not specified, the default is OnDemand, which means the scan will not run until the user calls RunDataScan API. */
  trigger?: GoogleCloudDataplexV1Trigger;
  /** Immutable. The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time.If not specified, a data scan will run for all data in the table. */
  field?: string;
}

export const GoogleCloudDataplexV1DataScanExecutionSpec: Schema.Schema<GoogleCloudDataplexV1DataScanExecutionSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trigger: Schema.optional(GoogleCloudDataplexV1Trigger),
    field: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataScanExecutionSpec" });

export interface GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue {
  /** Output only. Ratio of the corresponding value in the field against the total number of rows in the scanned data. */
  ratio?: number;
  /** Output only. String value of a top N non-null value. */
  value?: string;
  /** Output only. Count of the corresponding value in the scanned data. */
  count?: string;
}

export const GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue: Schema.Schema<GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ratio: Schema.optional(Schema.Number),
    value: Schema.optional(Schema.String),
    count: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue",
  });

export interface GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo {
  /** Output only. Minimum of non-null values in the scanned data. NaN, if the field has a NaN. */
  min?: number;
  /** Output only. Average of non-null values in the scanned data. NaN, if the field has a NaN. */
  average?: number;
  /** Output only. Standard deviation of non-null values in the scanned data. NaN, if the field has a NaN. */
  standardDeviation?: number;
  /** Output only. A quartile divides the number of data points into four parts, or quarters, of more-or-less equal size. Three main quartiles used are: The first quartile (Q1) splits off the lowest 25% of data from the highest 75%. It is also known as the lower or 25th empirical quartile, as 25% of the data is below this point. The second quartile (Q2) is the median of a data set. So, 50% of the data lies below this point. The third quartile (Q3) splits off the highest 25% of data from the lowest 75%. It is known as the upper or 75th empirical quartile, as 75% of the data lies below this point. Here, the quartiles is provided as an ordered list of quartile values for the scanned data, occurring in order Q1, median, Q3. */
  quartiles?: ReadonlyArray<number>;
  /** Output only. Maximum of non-null values in the scanned data. NaN, if the field has a NaN. */
  max?: number;
}

export const GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo: Schema.Schema<GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    min: Schema.optional(Schema.Number),
    average: Schema.optional(Schema.Number),
    standardDeviation: Schema.optional(Schema.Number),
    quartiles: Schema.optional(Schema.Array(Schema.Number)),
    max: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo",
  });

export interface GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo {
  /** Output only. Minimum length of non-null values in the scanned data. */
  minLength?: string;
  /** Output only. Maximum length of non-null values in the scanned data. */
  maxLength?: string;
  /** Output only. Average length of non-null values in the scanned data. */
  averageLength?: number;
}

export const GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo: Schema.Schema<GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minLength: Schema.optional(Schema.String),
    maxLength: Schema.optional(Schema.String),
    averageLength: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo",
  });

export interface GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo {
  /** Output only. A quartile divides the number of data points into four parts, or quarters, of more-or-less equal size. Three main quartiles used are: The first quartile (Q1) splits off the lowest 25% of data from the highest 75%. It is also known as the lower or 25th empirical quartile, as 25% of the data is below this point. The second quartile (Q2) is the median of a data set. So, 50% of the data lies below this point. The third quartile (Q3) splits off the highest 25% of data from the lowest 75%. It is known as the upper or 75th empirical quartile, as 75% of the data lies below this point. Here, the quartiles is provided as an ordered list of approximate quartile values for the scanned data, occurring in order Q1, median, Q3. */
  quartiles?: ReadonlyArray<string>;
  /** Output only. Maximum of non-null values in the scanned data. NaN, if the field has a NaN. */
  max?: string;
  /** Output only. Standard deviation of non-null values in the scanned data. NaN, if the field has a NaN. */
  standardDeviation?: number;
  /** Output only. Average of non-null values in the scanned data. NaN, if the field has a NaN. */
  average?: number;
  /** Output only. Minimum of non-null values in the scanned data. NaN, if the field has a NaN. */
  min?: string;
}

export const GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo: Schema.Schema<GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quartiles: Schema.optional(Schema.Array(Schema.String)),
    max: Schema.optional(Schema.String),
    standardDeviation: Schema.optional(Schema.Number),
    average: Schema.optional(Schema.Number),
    min: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo",
  });

export interface GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo {
  /** Output only. The list of top N non-null values, frequency and ratio with which they occur in the scanned data. N is 10 or equal to the number of distinct values in the field, whichever is smaller. Not available for complex non-groupable field type, including RECORD, ARRAY, GEOGRAPHY, and JSON, as well as fields with REPEATABLE mode. */
  topNValues?: ReadonlyArray<GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue>;
  /** Output only. Ratio of rows with null value against total scanned rows. */
  nullRatio?: number;
  /** Double type field information. */
  doubleProfile?: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo;
  /** Output only. Ratio of rows with distinct values against total scanned rows. Not available for complex non-groupable field type, including RECORD, ARRAY, GEOGRAPHY, and JSON, as well as fields with REPEATABLE mode. */
  distinctRatio?: number;
  /** String type field information. */
  stringProfile?: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo;
  /** Integer type field information. */
  integerProfile?: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo;
}

export const GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo: Schema.Schema<GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topNValues: Schema.optional(
      Schema.Array(
        GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue,
      ),
    ),
    nullRatio: Schema.optional(Schema.Number),
    doubleProfile: Schema.optional(
      GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo,
    ),
    distinctRatio: Schema.optional(Schema.Number),
    stringProfile: Schema.optional(
      GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo,
    ),
    integerProfile: Schema.optional(
      GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo,
    ),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo",
  });

export interface GoogleCloudDataplexV1DataProfileResultProfileField {
  /** Output only. The name of the field. */
  name?: string;
  /** Output only. The data type retrieved from the schema of the data source. For instance, for a BigQuery native table, it is the BigQuery Table Schema (https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#tablefieldschema). For a Dataplex Universal Catalog Entity, it is the Entity Schema (https://cloud.google.com/dataplex/docs/reference/rpc/google.cloud.dataplex.v1#type_3). */
  type?: string;
  /** Output only. Profile information for the corresponding field. */
  profile?: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo;
  /** Output only. The mode of the field. Possible values include: REQUIRED, if it is a required field. NULLABLE, if it is an optional field. REPEATED, if it is a repeated field. */
  mode?: string;
}

export const GoogleCloudDataplexV1DataProfileResultProfileField: Schema.Schema<GoogleCloudDataplexV1DataProfileResultProfileField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    profile: Schema.optional(
      GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo,
    ),
    mode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataProfileResultProfileField",
  });

export interface GoogleCloudDataplexV1DataProfileResultProfile {
  /** Output only. List of fields with structural and profile information for each field. */
  fields?: ReadonlyArray<GoogleCloudDataplexV1DataProfileResultProfileField>;
}

export const GoogleCloudDataplexV1DataProfileResultProfile: Schema.Schema<GoogleCloudDataplexV1DataProfileResultProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fields: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1DataProfileResultProfileField),
    ),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataProfileResultProfile" });

export interface GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResult {
  /** Output only. Execution state for the BigQuery exporting. */
  state?:
    | "STATE_UNSPECIFIED"
    | "SUCCEEDED"
    | "FAILED"
    | "SKIPPED"
    | (string & {});
  /** Output only. Additional information about the BigQuery exporting. */
  message?: string;
}

export const GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResult: Schema.Schema<GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResult",
  });

export interface GoogleCloudDataplexV1DataProfileResultPostScanActionsResult {
  /** Output only. The result of BigQuery export post scan action. */
  bigqueryExportResult?: GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResult;
}

export const GoogleCloudDataplexV1DataProfileResultPostScanActionsResult: Schema.Schema<GoogleCloudDataplexV1DataProfileResultPostScanActionsResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bigqueryExportResult: Schema.optional(
      GoogleCloudDataplexV1DataProfileResultPostScanActionsResultBigQueryExportResult,
    ),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataProfileResultPostScanActionsResult",
  });

export interface GoogleCloudDataplexV1DataProfileResult {
  /** Output only. The count of rows scanned. */
  rowCount?: string;
  /** Output only. The profile information per field. */
  profile?: GoogleCloudDataplexV1DataProfileResultProfile;
  /** Output only. The status of publishing the data scan as Dataplex Universal Catalog metadata. */
  catalogPublishingStatus?: GoogleCloudDataplexV1DataScanCatalogPublishingStatus;
  /** Output only. The result of post scan actions. */
  postScanActionsResult?: GoogleCloudDataplexV1DataProfileResultPostScanActionsResult;
  /** Output only. The data scanned for this result. */
  scannedData?: GoogleCloudDataplexV1ScannedData;
}

export const GoogleCloudDataplexV1DataProfileResult: Schema.Schema<GoogleCloudDataplexV1DataProfileResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rowCount: Schema.optional(Schema.String),
    profile: Schema.optional(GoogleCloudDataplexV1DataProfileResultProfile),
    catalogPublishingStatus: Schema.optional(
      GoogleCloudDataplexV1DataScanCatalogPublishingStatus,
    ),
    postScanActionsResult: Schema.optional(
      GoogleCloudDataplexV1DataProfileResultPostScanActionsResult,
    ),
    scannedData: Schema.optional(GoogleCloudDataplexV1ScannedData),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataProfileResult" });

export interface GoogleCloudDataplexV1DataScanExecutionStatus {
  /** Optional. The time when the DataScanJob execution was created. */
  latestJobCreateTime?: string;
  /** Optional. The time when the latest DataScanJob started. */
  latestJobStartTime?: string;
  /** Optional. The time when the latest DataScanJob ended. */
  latestJobEndTime?: string;
}

export const GoogleCloudDataplexV1DataScanExecutionStatus: Schema.Schema<GoogleCloudDataplexV1DataScanExecutionStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestJobCreateTime: Schema.optional(Schema.String),
    latestJobStartTime: Schema.optional(Schema.String),
    latestJobEndTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataScanExecutionStatus" });

export interface GoogleCloudDataplexV1DataDiscoverySpecStorageConfigUnstructuredDataOptions {
  /** Optional. Deprecated: Use semantic_inference_enabled instead. Specifies whether deeper entity inference over the objects' contents using GenAI is enabled. */
  entityInferenceEnabled?: boolean;
  /** Optional. Specifies whether deeper semantic inference over the objects' contents using GenAI is enabled. */
  semanticInferenceEnabled?: boolean;
}

export const GoogleCloudDataplexV1DataDiscoverySpecStorageConfigUnstructuredDataOptions: Schema.Schema<GoogleCloudDataplexV1DataDiscoverySpecStorageConfigUnstructuredDataOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityInferenceEnabled: Schema.optional(Schema.Boolean),
    semanticInferenceEnabled: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDataplexV1DataDiscoverySpecStorageConfigUnstructuredDataOptions",
  });

export interface GoogleCloudDataplexV1DataDiscoverySpecStorageConfigCsvOptions {
  /** Optional. Whether to disable the inference of data types for CSV data. If true, all columns are registered as strings. */
  typeInferenceDisabled?: boolean;
  /** Optional. The number of rows to interpret as header rows that should be skipped when reading data rows. */
  headerRows?: number;
  /** Optional. The character encoding of the data. The default is UTF-8. */
  encoding?: string;
  /** Optional. The delimiter that is used to separate values. The default is , (comma). */
  delimiter?: string;
  /** Optional. The character used to quote column values. Accepts " (double quotation mark) or ' (single quotation mark). If unspecified, defaults to " (double quotation mark). */
  quote?: string;
}

export const GoogleCloudDataplexV1DataDiscoverySpecStorageConfigCsvOptions: Schema.Schema<GoogleCloudDataplexV1DataDiscoverySpecStorageConfigCsvOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    typeInferenceDisabled: Schema.optional(Schema.Boolean),
    headerRows: Schema.optional(Schema.Number),
    encoding: Schema.optional(Schema.String),
    delimiter: Schema.optional(Schema.String),
    quote: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataDiscoverySpecStorageConfigCsvOptions",
  });

export interface GoogleCloudDataplexV1DataDiscoverySpecStorageConfigJsonOptions {
  /** Optional. The character encoding of the data. The default is UTF-8. */
  encoding?: string;
  /** Optional. Whether to disable the inference of data types for JSON data. If true, all columns are registered as their primitive types (strings, number, or boolean). */
  typeInferenceDisabled?: boolean;
}

export const GoogleCloudDataplexV1DataDiscoverySpecStorageConfigJsonOptions: Schema.Schema<GoogleCloudDataplexV1DataDiscoverySpecStorageConfigJsonOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encoding: Schema.optional(Schema.String),
    typeInferenceDisabled: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDataplexV1DataDiscoverySpecStorageConfigJsonOptions",
  });

export interface GoogleCloudDataplexV1DataDiscoverySpecStorageConfig {
  /** Optional. Defines the data to include during discovery when only a subset of the data should be considered. Provide a list of patterns that identify the data to include. For Cloud Storage bucket assets, these patterns are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these patterns are interpreted as patterns to match table names. */
  includePatterns?: ReadonlyArray<string>;
  /** Optional. Specifies configuration for unstructured data discovery. */
  unstructuredDataOptions?: GoogleCloudDataplexV1DataDiscoverySpecStorageConfigUnstructuredDataOptions;
  /** Optional. Configuration for CSV data. */
  csvOptions?: GoogleCloudDataplexV1DataDiscoverySpecStorageConfigCsvOptions;
  /** Optional. Configuration for JSON data. */
  jsonOptions?: GoogleCloudDataplexV1DataDiscoverySpecStorageConfigJsonOptions;
  /** Optional. Defines the data to exclude during discovery. Provide a list of patterns that identify the data to exclude. For Cloud Storage bucket assets, these patterns are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these patterns are interpreted as patterns to match table names. */
  excludePatterns?: ReadonlyArray<string>;
}

export const GoogleCloudDataplexV1DataDiscoverySpecStorageConfig: Schema.Schema<GoogleCloudDataplexV1DataDiscoverySpecStorageConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includePatterns: Schema.optional(Schema.Array(Schema.String)),
    unstructuredDataOptions: Schema.optional(
      GoogleCloudDataplexV1DataDiscoverySpecStorageConfigUnstructuredDataOptions,
    ),
    csvOptions: Schema.optional(
      GoogleCloudDataplexV1DataDiscoverySpecStorageConfigCsvOptions,
    ),
    jsonOptions: Schema.optional(
      GoogleCloudDataplexV1DataDiscoverySpecStorageConfigJsonOptions,
    ),
    excludePatterns: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataDiscoverySpecStorageConfig",
  });

export interface GoogleCloudDataplexV1DataDiscoverySpecBigQueryPublishingConfig {
  /** Optional. Determines whether to publish discovered tables as BigLake external tables or non-BigLake external tables. */
  tableType?: "TABLE_TYPE_UNSPECIFIED" | "EXTERNAL" | "BIGLAKE" | (string & {});
  /** Optional. The BigQuery connection used to create BigLake tables. Must be in the form projects/{project_id}/locations/{location_id}/connections/{connection_id} */
  connection?: string;
  /** Optional. The project of the BigQuery dataset to publish BigLake external or non-BigLake external tables to. If not specified, the project of the Cloud Storage bucket will be used. The format is "projects/{project_id_or_number}". */
  project?: string;
  /** Optional. The location of the BigQuery dataset to publish BigLake external or non-BigLake external tables to. 1. If the Cloud Storage bucket is located in a multi-region bucket, then BigQuery dataset can be in the same multi-region bucket or any single region that is included in the same multi-region bucket. The datascan can be created in any single region that is included in the same multi-region bucket 2. If the Cloud Storage bucket is located in a dual-region bucket, then BigQuery dataset can be located in regions that are included in the dual-region bucket, or in a multi-region that includes the dual-region. The datascan can be created in any single region that is included in the same dual-region bucket. 3. If the Cloud Storage bucket is located in a single region, then BigQuery dataset can be in the same single region or any multi-region bucket that includes the same single region. The datascan will be created in the same single region as the bucket. 4. If the BigQuery dataset is in single region, it must be in the same single region as the datascan.For supported values, refer to https://cloud.google.com/bigquery/docs/locations#supported_locations. */
  location?: string;
}

export const GoogleCloudDataplexV1DataDiscoverySpecBigQueryPublishingConfig: Schema.Schema<GoogleCloudDataplexV1DataDiscoverySpecBigQueryPublishingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tableType: Schema.optional(Schema.String),
    connection: Schema.optional(Schema.String),
    project: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDataplexV1DataDiscoverySpecBigQueryPublishingConfig",
  });

export interface GoogleCloudDataplexV1DataDiscoverySpec {
  /** Cloud Storage related configurations. */
  storageConfig?: GoogleCloudDataplexV1DataDiscoverySpecStorageConfig;
  /** Optional. Configuration for metadata publishing. */
  bigqueryPublishingConfig?: GoogleCloudDataplexV1DataDiscoverySpecBigQueryPublishingConfig;
}

export const GoogleCloudDataplexV1DataDiscoverySpec: Schema.Schema<GoogleCloudDataplexV1DataDiscoverySpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageConfig: Schema.optional(
      GoogleCloudDataplexV1DataDiscoverySpecStorageConfig,
    ),
    bigqueryPublishingConfig: Schema.optional(
      GoogleCloudDataplexV1DataDiscoverySpecBigQueryPublishingConfig,
    ),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataDiscoverySpec" });

export interface GoogleCloudDataplexV1DataDiscoveryResultScanStatistics {
  /** The number of files scanned. */
  scannedFileCount?: number;
  /** The number of filesets created. */
  filesetsCreated?: number;
  /** The number of files excluded. */
  filesExcluded?: number;
  /** The number of filesets deleted. */
  filesetsDeleted?: number;
  /** The number of tables updated. */
  tablesUpdated?: number;
  /** The number of filesets updated. */
  filesetsUpdated?: number;
  /** The number of tables deleted. */
  tablesDeleted?: number;
  /** The data processed in bytes. */
  dataProcessedBytes?: string;
  /** The number of tables created. */
  tablesCreated?: number;
}

export const GoogleCloudDataplexV1DataDiscoveryResultScanStatistics: Schema.Schema<GoogleCloudDataplexV1DataDiscoveryResultScanStatistics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scannedFileCount: Schema.optional(Schema.Number),
    filesetsCreated: Schema.optional(Schema.Number),
    filesExcluded: Schema.optional(Schema.Number),
    filesetsDeleted: Schema.optional(Schema.Number),
    tablesUpdated: Schema.optional(Schema.Number),
    filesetsUpdated: Schema.optional(Schema.Number),
    tablesDeleted: Schema.optional(Schema.Number),
    dataProcessedBytes: Schema.optional(Schema.String),
    tablesCreated: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataDiscoveryResultScanStatistics",
  });

export interface GoogleCloudDataplexV1DataDiscoveryResultBigQueryPublishing {
  /** Output only. The BigQuery dataset the discovered tables are published to. */
  dataset?: string;
  /** Output only. The location of the BigQuery publishing dataset. */
  location?: string;
}

export const GoogleCloudDataplexV1DataDiscoveryResultBigQueryPublishing: Schema.Schema<GoogleCloudDataplexV1DataDiscoveryResultBigQueryPublishing> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataDiscoveryResultBigQueryPublishing",
  });

export interface GoogleCloudDataplexV1DataDiscoveryResult {
  /** Output only. Describes result statistics of a data scan discovery job. */
  scanStatistics?: GoogleCloudDataplexV1DataDiscoveryResultScanStatistics;
  /** Output only. Configuration for metadata publishing. */
  bigqueryPublishing?: GoogleCloudDataplexV1DataDiscoveryResultBigQueryPublishing;
}

export const GoogleCloudDataplexV1DataDiscoveryResult: Schema.Schema<GoogleCloudDataplexV1DataDiscoveryResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scanStatistics: Schema.optional(
      GoogleCloudDataplexV1DataDiscoveryResultScanStatistics,
    ),
    bigqueryPublishing: Schema.optional(
      GoogleCloudDataplexV1DataDiscoveryResultBigQueryPublishing,
    ),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataDiscoveryResult" });

export interface GoogleCloudDataplexV1DataSource {
  /** Immutable. The Dataplex Universal Catalog entity that represents the data source (e.g. BigQuery table) for DataScan, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}. */
  entity?: string;
  /** Immutable. The service-qualified full resource name of the cloud resource for a DataScan job to scan against. The field could either be: Cloud Storage bucket for DataDiscoveryScan Format: //storage.googleapis.com/projects/PROJECT_ID/buckets/BUCKET_ID or BigQuery table of type "TABLE" for DataProfileScan/DataQualityScan/DataDocumentationScan Format: //bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID or BigQuery dataset for DataDocumentationScan only Format: //bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID */
  resource?: string;
}

export const GoogleCloudDataplexV1DataSource: Schema.Schema<GoogleCloudDataplexV1DataSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entity: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataSource" });

export interface GoogleCloudDataplexV1DataScan {
  /** Output only. The result of a data documentation scan. */
  dataDocumentationResult?: GoogleCloudDataplexV1DataDocumentationResult;
  /** Optional. User friendly display name. Must be between 1-256 characters. */
  displayName?: string;
  /** Output only. Current state of the DataScan. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | "ACTION_REQUIRED"
    | (string & {});
  /** Output only. The result of a data quality scan. */
  dataQualityResult?: GoogleCloudDataplexV1DataQualityResult;
  /** Optional. Immutable. The identity to run the datascan. If not specified, defaults to the Dataplex Service Agent. */
  executionIdentity?: GoogleCloudDataplexV1ExecutionIdentity;
  /** Settings for a data profile scan. */
  dataProfileSpec?: GoogleCloudDataplexV1DataProfileSpec;
  /** Output only. Identifier. The relative resource name of the scan, of the form: projects/{project}/locations/{location_id}/dataScans/{datascan_id}, where project refers to a project_id or project_number and location_id refers to a Google Cloud region. */
  name?: string;
  /** Settings for a data documentation scan. */
  dataDocumentationSpec?: GoogleCloudDataplexV1DataDocumentationSpec;
  /** Settings for a data quality scan. */
  dataQualitySpec?: GoogleCloudDataplexV1DataQualitySpec;
  /** Optional. DataScan execution settings.If not specified, the fields in it will use their default values. */
  executionSpec?: GoogleCloudDataplexV1DataScanExecutionSpec;
  /** Output only. The result of a data profile scan. */
  dataProfileResult?: GoogleCloudDataplexV1DataProfileResult;
  /** Optional. User-defined labels for the scan. */
  labels?: Record<string, string>;
  /** Output only. Status of the data scan execution. */
  executionStatus?: GoogleCloudDataplexV1DataScanExecutionStatus;
  /** Optional. Description of the scan. Must be between 1-1024 characters. */
  description?: string;
  /** Output only. System generated globally unique ID for the scan. This ID will be different if the scan is deleted and re-created with the same name. */
  uid?: string;
  /** Output only. The time when the scan was last updated. */
  updateTime?: string;
  /** Output only. The type of DataScan. */
  type?:
    | "DATA_SCAN_TYPE_UNSPECIFIED"
    | "DATA_QUALITY"
    | "DATA_PROFILE"
    | "DATA_DISCOVERY"
    | "DATA_DOCUMENTATION"
    | (string & {});
  /** Settings for a data discovery scan. */
  dataDiscoverySpec?: GoogleCloudDataplexV1DataDiscoverySpec;
  /** Output only. The result of a data discovery scan. */
  dataDiscoveryResult?: GoogleCloudDataplexV1DataDiscoveryResult;
  /** Output only. The time when the scan was created. */
  createTime?: string;
  /** Required. The data source for DataScan. */
  data?: GoogleCloudDataplexV1DataSource;
}

export const GoogleCloudDataplexV1DataScan: Schema.Schema<GoogleCloudDataplexV1DataScan> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataDocumentationResult: Schema.optional(
      GoogleCloudDataplexV1DataDocumentationResult,
    ),
    displayName: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    dataQualityResult: Schema.optional(GoogleCloudDataplexV1DataQualityResult),
    executionIdentity: Schema.optional(GoogleCloudDataplexV1ExecutionIdentity),
    dataProfileSpec: Schema.optional(GoogleCloudDataplexV1DataProfileSpec),
    name: Schema.optional(Schema.String),
    dataDocumentationSpec: Schema.optional(
      GoogleCloudDataplexV1DataDocumentationSpec,
    ),
    dataQualitySpec: Schema.optional(GoogleCloudDataplexV1DataQualitySpec),
    executionSpec: Schema.optional(GoogleCloudDataplexV1DataScanExecutionSpec),
    dataProfileResult: Schema.optional(GoogleCloudDataplexV1DataProfileResult),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    executionStatus: Schema.optional(
      GoogleCloudDataplexV1DataScanExecutionStatus,
    ),
    description: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    dataDiscoverySpec: Schema.optional(GoogleCloudDataplexV1DataDiscoverySpec),
    dataDiscoveryResult: Schema.optional(
      GoogleCloudDataplexV1DataDiscoveryResult,
    ),
    createTime: Schema.optional(Schema.String),
    data: Schema.optional(GoogleCloudDataplexV1DataSource),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataScan" });

export interface GoogleCloudDataplexV1DataAssetAccessGroupConfig {
  /** Optional. IAM roles granted on the resource to this access group. Role name follows https://cloud.google.com/iam/docs/reference/rest/v1/roles.Example: [ "roles/bigquery.dataViewer" ] */
  iamRoles?: ReadonlyArray<string>;
}

export const GoogleCloudDataplexV1DataAssetAccessGroupConfig: Schema.Schema<GoogleCloudDataplexV1DataAssetAccessGroupConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    iamRoles: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataAssetAccessGroupConfig",
  });

export interface GoogleCloudDataplexV1DataAsset {
  /** Output only. System generated globally unique ID for the data asset. This ID will be different if the data asset is deleted and re-created with the same name. */
  uid?: string;
  /** Output only. The time at which the data asset was created. */
  createTime?: string;
  /** Output only. The time at which the data asset was last updated. */
  updateTime?: string;
  /** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Required. Immutable. Full resource name of the cloud resource represented by the data asset. This must follow https://cloud.google.com/iam/docs/full-resource-names. Example: //bigquery.googleapis.com/projects/my_project_123/datasets/dataset_456/tables/table_789 Only BigQuery tables and datasets are currently supported. Data asset creator must have getIamPolicy and setIamPolicy permissions on the resource. Data asset creator must also have resource specific get permission, for instance, bigquery.tables.get for BigQuery tables. */
  resource?: string;
  /** Identifier. Resource name of the data asset. Format: projects/{project_id_or_number}/locations/{location_id}/dataProducts/{data_product_id}/dataAssets/{data_asset_id} */
  name?: string;
  /** Optional. User-defined labels for the data asset.Example: { "environment": "production", "billing": "marketing-department" } */
  labels?: Record<string, string>;
  /** Optional. Access groups configurations for this data asset.The key is DataProduct.AccessGroup.id and the value is AccessGroupConfig.Example: { "analyst": { "iamRoles": ["roles/bigquery.dataViewer"] } } Currently, at most one IAM role is allowed per access group. For providing multiple predefined IAM roles, wrap them in a custom IAM role as per https://cloud.google.com/iam/docs/creating-custom-roles. */
  accessGroupConfigs?: Record<
    string,
    GoogleCloudDataplexV1DataAssetAccessGroupConfig
  >;
}

export const GoogleCloudDataplexV1DataAsset: Schema.Schema<GoogleCloudDataplexV1DataAsset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uid: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    accessGroupConfigs: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudDataplexV1DataAssetAccessGroupConfig,
      ),
    ),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataAsset" });

export interface GoogleCloudLocationLocation {
  /** The canonical id for this location. For example: "us-east1". */
  locationId?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1" */
  name?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
}

export const GoogleCloudLocationLocation: Schema.Schema<GoogleCloudLocationLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleCloudLocationLocation" });

export interface GoogleCloudLocationListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<GoogleCloudLocationLocation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const GoogleCloudLocationListLocationsResponse: Schema.Schema<GoogleCloudLocationListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(GoogleCloudLocationLocation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudLocationListLocationsResponse" });

export interface GoogleCloudDataplexV1LookupContextRequest {
  /** Required. The entry names to look up the context for. The maximum number of resources for a request is limited to 10.Examples:projects/{project}/locations/{location}/entryGroups/{entry_group}/entries/{entry} */
  resources?: ReadonlyArray<string>;
  /** Optional. Allows to configure the context.Supported options: format - The format of the context (one of yaml, xml, json, default is yaml). context_budget - If provided, the output will be intelligently truncated on a best-effort basis to contain approximately the desired amount of characters. There is no guarantee to achieve the specific amount. */
  options?: Record<string, string>;
}

export const GoogleCloudDataplexV1LookupContextRequest: Schema.Schema<GoogleCloudDataplexV1LookupContextRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(Schema.String)),
    options: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleCloudDataplexV1LookupContextRequest" });

export interface GoogleCloudDataplexV1Partition {
  /** Optional. The etag for this partition. */
  etag?: string;
  /** Required. Immutable. The set of values representing the partition, which correspond to the partition schema defined in the parent entity. */
  values?: ReadonlyArray<string>;
  /** Required. Immutable. The location of the entity data within the partition, for example, gs://bucket/path/to/entity/key1=value1/key2=value2. Or projects//datasets//tables/ */
  location?: string;
  /** Output only. Partition values used in the HTTP URL must be double encoded. For example, url_encode(url_encode(value)) can be used to encode "US:CA/CA#Sunnyvale so that the request URL ends with "/partitions/US%253ACA/CA%2523Sunnyvale". The name field in the response retains the encoded format. */
  name?: string;
}

export const GoogleCloudDataplexV1Partition: Schema.Schema<GoogleCloudDataplexV1Partition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    values: Schema.optional(Schema.Array(Schema.String)),
    location: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1Partition" });

export interface GoogleCloudDataplexV1ListPartitionsResponse {
  /** Partitions under the specified parent entity. */
  partitions?: ReadonlyArray<GoogleCloudDataplexV1Partition>;
  /** Token to retrieve the next page of results, or empty if there are no remaining results in the list. */
  nextPageToken?: string;
}

export const GoogleCloudDataplexV1ListPartitionsResponse: Schema.Schema<GoogleCloudDataplexV1ListPartitionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partitions: Schema.optional(Schema.Array(GoogleCloudDataplexV1Partition)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1ListPartitionsResponse" });

export interface GoogleCloudDataplexV1TaskTriggerSpec {
  /** Optional. The first run of the task will be after this time. If not specified, the task will run shortly after being submitted if ON_DEMAND and based on the schedule if RECURRING. */
  startTime?: string;
  /** Optional. Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task. */
  maxRetries?: number;
  /** Required. Immutable. Trigger type of the user-specified Task. */
  type?: "TYPE_UNSPECIFIED" | "ON_DEMAND" | "RECURRING" | (string & {});
  /** Optional. Prevent the task from executing. This does not cancel already running tasks. It is intended to temporarily disable RECURRING tasks. */
  disabled?: boolean;
  /** Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. This field is required for RECURRING tasks. */
  schedule?: string;
}

export const GoogleCloudDataplexV1TaskTriggerSpec: Schema.Schema<GoogleCloudDataplexV1TaskTriggerSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    maxRetries: Schema.optional(Schema.Number),
    type: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
    schedule: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1TaskTriggerSpec" });

export interface GoogleCloudDataplexV1AspectSource {
  /** The time the aspect was created in the source system. */
  createTime?: string;
  /** The time the aspect was last updated in the source system. */
  updateTime?: string;
  /** The version of the data format used to produce this data. This field is used to indicated when the underlying data format changes (e.g., schema modifications, changes to the source URL format definition, etc). */
  dataVersion?: string;
}

export const GoogleCloudDataplexV1AspectSource: Schema.Schema<GoogleCloudDataplexV1AspectSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    dataVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1AspectSource" });

export interface GoogleCloudDataplexV1Aspect {
  /** Optional. Information related to the source system of the aspect. */
  aspectSource?: GoogleCloudDataplexV1AspectSource;
  /** Output only. The resource name of the type used to create this Aspect. */
  aspectType?: string;
  /** Output only. The time when the Aspect was created. */
  createTime?: string;
  /** Output only. The path in the entry under which the aspect is attached. */
  path?: string;
  /** Required. The content of the aspect, according to its aspect type schema. The maximum size of the field is 120KB (encoded as UTF-8). */
  data?: Record<string, unknown>;
  /** Output only. The time when the Aspect was last updated. */
  updateTime?: string;
}

export const GoogleCloudDataplexV1Aspect: Schema.Schema<GoogleCloudDataplexV1Aspect> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aspectSource: Schema.optional(GoogleCloudDataplexV1AspectSource),
    aspectType: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    data: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1Aspect" });

export interface GoogleCloudDataplexV1EntryLinkEntryReference {
  /** Required. Immutable. The relative resource name of the referenced Entry, of the form: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id} */
  name?: string;
  /** Immutable. The path in the Entry that is referenced in the Entry Link. Empty path denotes that the Entry itself is referenced in the Entry Link. */
  path?: string;
  /** Required. Immutable. The reference type of the Entry. */
  type?: "UNSPECIFIED" | "SOURCE" | "TARGET" | (string & {});
}

export const GoogleCloudDataplexV1EntryLinkEntryReference: Schema.Schema<GoogleCloudDataplexV1EntryLinkEntryReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1EntryLinkEntryReference" });

export interface GoogleCloudDataplexV1EntryLink {
  /** Required. Immutable. Relative resource name of the Entry Link Type used to create this Entry Link. For example: Entry link between synonym terms in a glossary: projects/dataplex-types/locations/global/entryLinkTypes/synonym Entry link between related terms in a glossary: projects/dataplex-types/locations/global/entryLinkTypes/related Entry link between glossary terms and data assets: projects/dataplex-types/locations/global/entryLinkTypes/definition */
  entryLinkType?: string;
  /** Output only. Immutable. Identifier. The relative resource name of the Entry Link, of the form: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entryLinks/{entry_link_id} */
  name?: string;
  /** Optional. The aspects that are attached to the entry link. The format of the aspect key has to be the following: {project_id_or_number}.{location_id}.{aspect_type_id} Currently, only a single aspect of a Dataplex-owned Aspect Type is allowed. */
  aspects?: Record<string, GoogleCloudDataplexV1Aspect>;
  /** Required. Immutable. Specifies the Entries referenced in the Entry Link. There should be exactly two entry references. */
  entryReferences?: ReadonlyArray<GoogleCloudDataplexV1EntryLinkEntryReference>;
  /** Output only. The time when the Entry Link was last updated. */
  updateTime?: string;
  /** Output only. The time when the Entry Link was created. */
  createTime?: string;
}

export const GoogleCloudDataplexV1EntryLink: Schema.Schema<GoogleCloudDataplexV1EntryLink> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entryLinkType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    aspects: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudDataplexV1Aspect),
    ),
    entryReferences: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1EntryLinkEntryReference),
    ),
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1EntryLink" });

export interface GoogleRpcStatus {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const GoogleRpcStatus: Schema.Schema<GoogleRpcStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleRpcStatus" });

export interface GoogleLongrunningOperation {
  /** The normal, successful response of the operation. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse. */
  response?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: GoogleRpcStatus;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}. */
  name?: string;
  /** If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available. */
  done?: boolean;
}

export const GoogleLongrunningOperation: Schema.Schema<GoogleLongrunningOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(GoogleRpcStatus),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    done: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleLongrunningOperation" });

export interface GoogleCloudDataplexV1DataTaxonomy {
  /** Output only. The relative resource name of the DataTaxonomy, of the form: projects/{project_number}/locations/{location_id}/dataTaxonomies/{data_taxonomy_id}. */
  name?: string;
  /** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. The time when the DataTaxonomy was created. */
  createTime?: string;
  /** Optional. Description of the DataTaxonomy. */
  description?: string;
  /** Output only. The number of attributes in the DataTaxonomy. */
  attributeCount?: number;
  /** Optional. User-defined labels for the DataTaxonomy. */
  labels?: Record<string, string>;
  /** Output only. The number of classes in the DataTaxonomy. */
  classCount?: number;
  /** Output only. The time when the DataTaxonomy was last updated. */
  updateTime?: string;
  /** Output only. System generated globally unique ID for the dataTaxonomy. This ID will be different if the DataTaxonomy is deleted and re-created with the same name. */
  uid?: string;
  /** Optional. User friendly display name. */
  displayName?: string;
}

export const GoogleCloudDataplexV1DataTaxonomy: Schema.Schema<GoogleCloudDataplexV1DataTaxonomy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    attributeCount: Schema.optional(Schema.Number),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    classCount: Schema.optional(Schema.Number),
    updateTime: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataTaxonomy" });

export interface GoogleCloudDataplexV1ListDataTaxonomiesResponse {
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachableLocations?: ReadonlyArray<string>;
  /** DataTaxonomies under the given parent location. */
  dataTaxonomies?: ReadonlyArray<GoogleCloudDataplexV1DataTaxonomy>;
}

export const GoogleCloudDataplexV1ListDataTaxonomiesResponse: Schema.Schema<GoogleCloudDataplexV1ListDataTaxonomiesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachableLocations: Schema.optional(Schema.Array(Schema.String)),
    dataTaxonomies: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1DataTaxonomy),
    ),
  }).annotate({
    identifier: "GoogleCloudDataplexV1ListDataTaxonomiesResponse",
  });

export interface GoogleIamV1AuditLogConfig {
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

export const GoogleIamV1AuditLogConfig: Schema.Schema<GoogleIamV1AuditLogConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logType: Schema.optional(Schema.String),
    exemptedMembers: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleIamV1AuditLogConfig" });

export interface GoogleCloudDataplexV1DiscoveryEventTableDetails {
  /** The fully-qualified resource name of the table resource. */
  table?: string;
  /** The type of the table resource. */
  type?:
    | "TABLE_TYPE_UNSPECIFIED"
    | "EXTERNAL_TABLE"
    | "BIGLAKE_TABLE"
    | "OBJECT_TABLE"
    | (string & {});
}

export const GoogleCloudDataplexV1DiscoveryEventTableDetails: Schema.Schema<GoogleCloudDataplexV1DiscoveryEventTableDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    table: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DiscoveryEventTableDetails",
  });

export interface GoogleCloudDataplexV1ActionFailedSecurityPolicyApply {
  /** Resource name of one of the assets with failing security policy application. Populated for a lake or zone resource only. */
  asset?: string;
}

export const GoogleCloudDataplexV1ActionFailedSecurityPolicyApply: Schema.Schema<GoogleCloudDataplexV1ActionFailedSecurityPolicyApply> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    asset: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1ActionFailedSecurityPolicyApply",
  });

export interface GoogleCloudDataplexV1EntrySourceAncestor {
  /** Optional. The name of the ancestor resource. */
  name?: string;
  /** Optional. The type of the ancestor resource. */
  type?: string;
}

export const GoogleCloudDataplexV1EntrySourceAncestor: Schema.Schema<GoogleCloudDataplexV1EntrySourceAncestor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1EntrySourceAncestor" });

export interface GoogleCloudDataplexV1EntrySource {
  /** Output only. Location of the resource in the source system. You can search the entry by this location. By default, this should match the location of the entry group containing this entry. A different value allows capturing the source location for data external to Google Cloud. */
  location?: string;
  /** A description of the data resource. Maximum length is 2,000 characters. */
  description?: string;
  /** Immutable. The entries representing the ancestors of the data resource in the source system. */
  ancestors?: ReadonlyArray<GoogleCloudDataplexV1EntrySourceAncestor>;
  /** User-defined labels. The maximum size of keys and values is 128 characters each. */
  labels?: Record<string, string>;
  /** The name of the resource in the source system. Maximum length is 4,000 characters. */
  resource?: string;
  /** The time when the resource was last updated in the source system. If the entry exists in the system and its EntrySource has update_time populated, further updates to the EntrySource of the entry must provide incremental updates to its update_time. */
  updateTime?: string;
  /** A user-friendly display name. Maximum length is 500 characters. */
  displayName?: string;
  /** The name of the source system. Maximum length is 64 characters. */
  system?: string;
  /** The platform containing the source system. Maximum length is 64 characters. */
  platform?: string;
  /** The time when the resource was created in the source system. */
  createTime?: string;
}

export const GoogleCloudDataplexV1EntrySource: Schema.Schema<GoogleCloudDataplexV1EntrySource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    ancestors: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1EntrySourceAncestor),
    ),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    resource: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    system: Schema.optional(Schema.String),
    platform: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1EntrySource" });

export interface GoogleCloudDataplexV1Entry {
  /** Optional. Immutable. The resource name of the parent entry, in the format projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}. */
  parentEntry?: string;
  /** Identifier. The relative resource name of the entry, in the format projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}. */
  name?: string;
  /** Optional. The aspects that are attached to the entry. Depending on how the aspect is attached to the entry, the format of the aspect key can be one of the following: If the aspect is attached directly to the entry: {project_id_or_number}.{location_id}.{aspect_type_id} If the aspect is attached to an entry's path: {project_id_or_number}.{location_id}.{aspect_type_id}@{path} */
  aspects?: Record<string, GoogleCloudDataplexV1Aspect>;
  /** Required. Immutable. The relative resource name of the entry type that was used to create this entry, in the format projects/{project_id_or_number}/locations/{location_id}/entryTypes/{entry_type_id}. */
  entryType?: string;
  /** Output only. The time when the entry was last updated in Dataplex Universal Catalog. */
  updateTime?: string;
  /** Optional. A name for the entry that can be referenced by an external system. For more information, see Fully qualified names (https://cloud.google.com/data-catalog/docs/fully-qualified-names). The maximum size of the field is 4000 characters. */
  fullyQualifiedName?: string;
  /** Output only. The time when the entry was created in Dataplex Universal Catalog. */
  createTime?: string;
  /** Optional. Information related to the source system of the data resource that is represented by the entry. */
  entrySource?: GoogleCloudDataplexV1EntrySource;
}

export const GoogleCloudDataplexV1Entry: Schema.Schema<GoogleCloudDataplexV1Entry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parentEntry: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    aspects: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudDataplexV1Aspect),
    ),
    entryType: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    fullyQualifiedName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    entrySource: Schema.optional(GoogleCloudDataplexV1EntrySource),
  }).annotate({ identifier: "GoogleCloudDataplexV1Entry" });

export interface GoogleCloudDataplexV1DataAttributeBindingPath {
  /** Required. The name identifier of the path. Nested columns should be of the form: 'address.city'. */
  name?: string;
  /** Optional. List of attributes to be associated with the path of the resource, provided in the form: projects/{project}/locations/{location}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id} */
  attributes?: ReadonlyArray<string>;
}

export const GoogleCloudDataplexV1DataAttributeBindingPath: Schema.Schema<GoogleCloudDataplexV1DataAttributeBindingPath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    attributes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataAttributeBindingPath" });

export interface GoogleCloudDataplexV1DataAttributeBinding {
  /** Optional. User-defined labels for the DataAttributeBinding. */
  labels?: Record<string, string>;
  /** Optional. Description of the DataAttributeBinding. */
  description?: string;
  /** Output only. System generated globally unique ID for the DataAttributeBinding. This ID will be different if the DataAttributeBinding is deleted and re-created with the same name. */
  uid?: string;
  /** Optional. User friendly display name. */
  displayName?: string;
  /** Optional. Immutable. The resource name of the resource that is associated to attributes. Presently, only entity resource is supported in the form: projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/entities/{entity_id} Must belong in the same project and region as the attribute binding, and there can only exist one active binding for a resource. */
  resource?: string;
  /** Output only. The time when the DataAttributeBinding was last updated. */
  updateTime?: string;
  /** Output only. The relative resource name of the Data Attribute Binding, of the form: projects/{project_number}/locations/{location}/dataAttributeBindings/{data_attribute_binding_id} */
  name?: string;
  /** Output only. The time when the DataAttributeBinding was created. */
  createTime?: string;
  /** Optional. The list of paths for items within the associated resource (eg. columns and partitions within a table) along with attribute bindings. */
  paths?: ReadonlyArray<GoogleCloudDataplexV1DataAttributeBindingPath>;
  /** Optional. List of attributes to be associated with the resource, provided in the form: projects/{project}/locations/{location}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id} */
  attributes?: ReadonlyArray<string>;
  /** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Etags must be used when calling the DeleteDataAttributeBinding and the UpdateDataAttributeBinding method. */
  etag?: string;
}

export const GoogleCloudDataplexV1DataAttributeBinding: Schema.Schema<GoogleCloudDataplexV1DataAttributeBinding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    paths: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1DataAttributeBindingPath),
    ),
    attributes: Schema.optional(Schema.Array(Schema.String)),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataAttributeBinding" });

export interface GoogleCloudDataplexV1ListDataAttributeBindingsResponse {
  /** DataAttributeBindings under the given parent Location. */
  dataAttributeBindings?: ReadonlyArray<GoogleCloudDataplexV1DataAttributeBinding>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachableLocations?: ReadonlyArray<string>;
}

export const GoogleCloudDataplexV1ListDataAttributeBindingsResponse: Schema.Schema<GoogleCloudDataplexV1ListDataAttributeBindingsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataAttributeBindings: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1DataAttributeBinding),
    ),
    nextPageToken: Schema.optional(Schema.String),
    unreachableLocations: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDataplexV1ListDataAttributeBindingsResponse",
  });

export interface GoogleCloudDataplexV1SchemaSchemaField {
  /** Required. The name of the field. Must contain only letters, numbers and underscores, with a maximum length of 767 characters, and must begin with a letter or underscore. */
  name?: string;
  /** Optional. Any nested field for complex types. */
  fields?: ReadonlyArray<GoogleCloudDataplexV1SchemaSchemaField>;
  /** Required. The type of field. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "BOOLEAN"
    | "BYTE"
    | "INT16"
    | "INT32"
    | "INT64"
    | "FLOAT"
    | "DOUBLE"
    | "DECIMAL"
    | "STRING"
    | "BINARY"
    | "TIMESTAMP"
    | "DATE"
    | "TIME"
    | "RECORD"
    | "NULL"
    | (string & {});
  /** Optional. User friendly field description. Must be less than or equal to 1024 characters. */
  description?: string;
  /** Required. Additional field semantics. */
  mode?:
    | "MODE_UNSPECIFIED"
    | "REQUIRED"
    | "NULLABLE"
    | "REPEATED"
    | (string & {});
}

export const GoogleCloudDataplexV1SchemaSchemaField: Schema.Schema<GoogleCloudDataplexV1SchemaSchemaField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.optional(Schema.String),
      fields: Schema.optional(
        Schema.Array(GoogleCloudDataplexV1SchemaSchemaField),
      ),
      type: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      mode: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "GoogleCloudDataplexV1SchemaSchemaField",
  }) as any as Schema.Schema<GoogleCloudDataplexV1SchemaSchemaField>;

export interface GoogleCloudDataplexV1ActionMissingData {}

export const GoogleCloudDataplexV1ActionMissingData: Schema.Schema<GoogleCloudDataplexV1ActionMissingData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDataplexV1ActionMissingData",
  });

export interface GoogleCloudDataplexV1ActionUnauthorizedResource {}

export const GoogleCloudDataplexV1ActionUnauthorizedResource: Schema.Schema<GoogleCloudDataplexV1ActionUnauthorizedResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDataplexV1ActionUnauthorizedResource",
  });

export interface GoogleCloudDataplexV1ActionMissingResource {}

export const GoogleCloudDataplexV1ActionMissingResource: Schema.Schema<GoogleCloudDataplexV1ActionMissingResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDataplexV1ActionMissingResource",
  });

export interface GoogleCloudDataplexV1ActionInvalidDataPartition {
  /** The issue type of InvalidDataPartition. */
  expectedStructure?:
    | "PARTITION_STRUCTURE_UNSPECIFIED"
    | "CONSISTENT_KEYS"
    | "HIVE_STYLE_KEYS"
    | (string & {});
}

export const GoogleCloudDataplexV1ActionInvalidDataPartition: Schema.Schema<GoogleCloudDataplexV1ActionInvalidDataPartition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expectedStructure: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1ActionInvalidDataPartition",
  });

export interface GoogleCloudDataplexV1ActionInvalidDataFormat {
  /** The expected data format of the entity. */
  expectedFormat?: string;
  /** The list of data locations sampled and used for format/schema inference. */
  sampledDataLocations?: ReadonlyArray<string>;
  /** The new unexpected data format within the entity. */
  newFormat?: string;
}

export const GoogleCloudDataplexV1ActionInvalidDataFormat: Schema.Schema<GoogleCloudDataplexV1ActionInvalidDataFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expectedFormat: Schema.optional(Schema.String),
    sampledDataLocations: Schema.optional(Schema.Array(Schema.String)),
    newFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1ActionInvalidDataFormat" });

export interface GoogleCloudDataplexV1ActionInvalidDataOrganization {}

export const GoogleCloudDataplexV1ActionInvalidDataOrganization: Schema.Schema<GoogleCloudDataplexV1ActionInvalidDataOrganization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDataplexV1ActionInvalidDataOrganization",
  });

export interface GoogleCloudDataplexV1ActionIncompatibleDataSchema {
  /** The list of data locations sampled and used for format/schema inference. */
  sampledDataLocations?: ReadonlyArray<string>;
  /** The new and incompatible schema within the table. The schema is provided as a JSON formatted structured listing columns and data types. */
  newSchema?: string;
  /** The name of the table containing invalid data. */
  table?: string;
  /** Whether the action relates to a schema that is incompatible or modified. */
  schemaChange?:
    | "SCHEMA_CHANGE_UNSPECIFIED"
    | "INCOMPATIBLE"
    | "MODIFIED"
    | (string & {});
  /** The existing and expected schema of the table. The schema is provided as a JSON formatted structure listing columns and data types. */
  existingSchema?: string;
}

export const GoogleCloudDataplexV1ActionIncompatibleDataSchema: Schema.Schema<GoogleCloudDataplexV1ActionIncompatibleDataSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sampledDataLocations: Schema.optional(Schema.Array(Schema.String)),
    newSchema: Schema.optional(Schema.String),
    table: Schema.optional(Schema.String),
    schemaChange: Schema.optional(Schema.String),
    existingSchema: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1ActionIncompatibleDataSchema",
  });

export interface GoogleCloudDataplexV1Action {
  /** The category of issue associated with the action. */
  category?:
    | "CATEGORY_UNSPECIFIED"
    | "RESOURCE_MANAGEMENT"
    | "SECURITY_POLICY"
    | "DATA_DISCOVERY"
    | (string & {});
  /** Output only. The relative resource name of the action, of the form: projects/{project}/locations/{location}/lakes/{lake}/actions/{action} projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/actions/{action} projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/assets/{asset}/actions/{action}. */
  name?: string;
  /** Output only. The relative resource name of the asset, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}. */
  asset?: string;
  /** Output only. The relative resource name of the zone, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}. */
  zone?: string;
  /** Details for issues related to absence of data within managed resources. */
  missingData?: GoogleCloudDataplexV1ActionMissingData;
  /** Details for issues related to lack of permissions to access data resources. */
  unauthorizedResource?: GoogleCloudDataplexV1ActionUnauthorizedResource;
  /** Details for issues related to absence of a managed resource. */
  missingResource?: GoogleCloudDataplexV1ActionMissingResource;
  /** Output only. The relative resource name of the lake, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}. */
  lake?: string;
  /** Details for issues related to invalid or unsupported data partition structure. */
  invalidDataPartition?: GoogleCloudDataplexV1ActionInvalidDataPartition;
  /** The time that the issue was detected. */
  detectTime?: string;
  /** Details for issues related to applying security policy. */
  failedSecurityPolicyApply?: GoogleCloudDataplexV1ActionFailedSecurityPolicyApply;
  /** Details for issues related to invalid or unsupported data formats. */
  invalidDataFormat?: GoogleCloudDataplexV1ActionInvalidDataFormat;
  /** Details for issues related to invalid data arrangement. */
  invalidDataOrganization?: GoogleCloudDataplexV1ActionInvalidDataOrganization;
  /** Detailed description of the issue requiring action. */
  issue?: string;
  /** The list of data locations associated with this action. Cloud Storage locations are represented as URI paths(E.g. gs://bucket/table1/year=2020/month=Jan/). BigQuery locations refer to resource names(E.g. bigquery.googleapis.com/projects/project-id/datasets/dataset-id). */
  dataLocations?: ReadonlyArray<string>;
  /** Details for issues related to incompatible schemas detected within data. */
  incompatibleDataSchema?: GoogleCloudDataplexV1ActionIncompatibleDataSchema;
}

export const GoogleCloudDataplexV1Action: Schema.Schema<GoogleCloudDataplexV1Action> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    asset: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    missingData: Schema.optional(GoogleCloudDataplexV1ActionMissingData),
    unauthorizedResource: Schema.optional(
      GoogleCloudDataplexV1ActionUnauthorizedResource,
    ),
    missingResource: Schema.optional(
      GoogleCloudDataplexV1ActionMissingResource,
    ),
    lake: Schema.optional(Schema.String),
    invalidDataPartition: Schema.optional(
      GoogleCloudDataplexV1ActionInvalidDataPartition,
    ),
    detectTime: Schema.optional(Schema.String),
    failedSecurityPolicyApply: Schema.optional(
      GoogleCloudDataplexV1ActionFailedSecurityPolicyApply,
    ),
    invalidDataFormat: Schema.optional(
      GoogleCloudDataplexV1ActionInvalidDataFormat,
    ),
    invalidDataOrganization: Schema.optional(
      GoogleCloudDataplexV1ActionInvalidDataOrganization,
    ),
    issue: Schema.optional(Schema.String),
    dataLocations: Schema.optional(Schema.Array(Schema.String)),
    incompatibleDataSchema: Schema.optional(
      GoogleCloudDataplexV1ActionIncompatibleDataSchema,
    ),
  }).annotate({ identifier: "GoogleCloudDataplexV1Action" });

export interface GoogleCloudDataplexV1ListActionsResponse {
  /** Actions under the given parent lake/zone/asset. */
  actions?: ReadonlyArray<GoogleCloudDataplexV1Action>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const GoogleCloudDataplexV1ListActionsResponse: Schema.Schema<GoogleCloudDataplexV1ListActionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actions: Schema.optional(Schema.Array(GoogleCloudDataplexV1Action)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1ListActionsResponse" });

export interface GoogleTypeExpr {
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
}

export const GoogleTypeExpr: Schema.Schema<GoogleTypeExpr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    expression: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleTypeExpr" });

export interface GoogleIamV1Binding {
  /** Specifies the principals requesting access for a Google Cloud resource. members can have the following values: allUsers: A special identifier that represents anyone who is on the internet; with or without a Google account. allAuthenticatedUsers: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. user:{emailid}: An email address that represents a specific Google account. For example, alice@example.com . serviceAccount:{emailid}: An email address that represents a Google service account. For example, my-other-app@appspot.gserviceaccount.com. serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]: An identifier for a Kubernetes service account (https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, my-project.svc.id.goog[my-namespace/my-kubernetes-sa]. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. domain:{domain}: The G Suite domain (primary) that represents all the users of that domain. For example, google.com or example.com. principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}: A single identity in a workforce identity pool. principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}: All workforce identities in a group. principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}: All workforce identities with a specific attribute value. principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*: All identities in a workforce identity pool. principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}: A single identity in a workload identity pool. principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}: A workload identity pool group. principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}: All identities in a workload identity pool with a certain attribute. principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*: All identities in a workload identity pool. deleted:user:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a user that has been recently deleted. For example, alice@example.com?uid=123456789012345678901. If the user is recovered, this value reverts to user:{emailid} and the recovered user retains the role in the binding. deleted:serviceAccount:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901. If the service account is undeleted, this value reverts to serviceAccount:{emailid} and the undeleted service account retains the role in the binding. deleted:group:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, admins@example.com?uid=123456789012345678901. If the group is recovered, this value reverts to group:{emailid} and the recovered group retains the role in the binding. deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}: Deleted single identity in a workforce identity pool. For example, deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value. */
  members?: ReadonlyArray<string>;
  /** The condition that is associated with this binding.If the condition evaluates to true, then this binding applies to the current request.If the condition evaluates to false, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: GoogleTypeExpr;
  /** Role that is assigned to the list of members, or principals. For example, roles/viewer, roles/editor, or roles/owner.For an overview of the IAM roles and permissions, see the IAM documentation (https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see here (https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
}

export const GoogleIamV1Binding: Schema.Schema<GoogleIamV1Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    members: Schema.optional(Schema.Array(Schema.String)),
    condition: Schema.optional(GoogleTypeExpr),
    role: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleIamV1Binding" });

export interface GoogleIamV1AuditConfig {
  /** Specifies a service that will be enabled for audit logging. For example, storage.googleapis.com, cloudsql.googleapis.com. allServices is a special value that covers all services. */
  service?: string;
  /** The configuration for logging of each type of permission. */
  auditLogConfigs?: ReadonlyArray<GoogleIamV1AuditLogConfig>;
}

export const GoogleIamV1AuditConfig: Schema.Schema<GoogleIamV1AuditConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    auditLogConfigs: Schema.optional(Schema.Array(GoogleIamV1AuditLogConfig)),
  }).annotate({ identifier: "GoogleIamV1AuditConfig" });

export interface GoogleIamV1Policy {
  /** etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to getIamPolicy, and systems are expected to put that etag in the request to setIamPolicy to ensure that their change will be applied to the same version of the policy.Important: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost. */
  etag?: string;
  /** Specifies the format of the policy.Valid values are 0, 1, and 3. Requests that specify an invalid value are rejected.Any operation that affects conditional role bindings must specify version 3. This requirement applies to the following operations: Getting a policy that includes a conditional role binding Adding a conditional role binding to a policy Changing a conditional role binding in a policy Removing any role binding, with or without a condition, from a policy that includes conditionsImportant: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Associates a list of members, or principals, with a role. Optionally, may specify a condition that determines how and when the bindings are applied. Each of the bindings must contain at least one principal.The bindings in a Policy can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the bindings grant 50 different roles to user:alice@example.com, and not to any other principal, then you can add another 1,450 principals to the bindings in the Policy. */
  bindings?: ReadonlyArray<GoogleIamV1Binding>;
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<GoogleIamV1AuditConfig>;
}

export const GoogleIamV1Policy: Schema.Schema<GoogleIamV1Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
    bindings: Schema.optional(Schema.Array(GoogleIamV1Binding)),
    auditConfigs: Schema.optional(Schema.Array(GoogleIamV1AuditConfig)),
  }).annotate({ identifier: "GoogleIamV1Policy" });

export interface GoogleCloudDataplexV1AssetResourceStatus {
  /** Additional information about the current state. */
  message?: string;
  /** Output only. Service account associated with the BigQuery Connection. */
  managedAccessIdentity?: string;
  /** Last update time of the status. */
  updateTime?: string;
  /** The current state of the managed resource. */
  state?: "STATE_UNSPECIFIED" | "READY" | "ERROR" | (string & {});
}

export const GoogleCloudDataplexV1AssetResourceStatus: Schema.Schema<GoogleCloudDataplexV1AssetResourceStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    managedAccessIdentity: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1AssetResourceStatus" });

export interface GoogleCloudDataplexV1SearchEntriesResultSnippets {
  /** Entry */
  dataplexEntry?: GoogleCloudDataplexV1Entry;
}

export const GoogleCloudDataplexV1SearchEntriesResultSnippets: Schema.Schema<GoogleCloudDataplexV1SearchEntriesResultSnippets> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataplexEntry: Schema.optional(GoogleCloudDataplexV1Entry),
  }).annotate({
    identifier: "GoogleCloudDataplexV1SearchEntriesResultSnippets",
  });

export interface GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions {
  /** Optional. The delimiter being used to separate values. This defaults to ','. */
  delimiter?: string;
  /** Optional. Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings. */
  disableTypeInference?: boolean;
  /** Optional. The number of rows to interpret as header rows that should be skipped when reading data rows. */
  headerRows?: number;
  /** Optional. The character encoding of the data. The default is UTF-8. */
  encoding?: string;
}

export const GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions: Schema.Schema<GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    delimiter: Schema.optional(Schema.String),
    disableTypeInference: Schema.optional(Schema.Boolean),
    headerRows: Schema.optional(Schema.Number),
    encoding: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions",
  });

export interface GoogleCloudDataplexV1DiscoveryEventEntityDetails {
  /** The name of the entity resource. The name is the fully-qualified resource name. */
  entity?: string;
  /** The type of the entity resource. */
  type?: "ENTITY_TYPE_UNSPECIFIED" | "TABLE" | "FILESET" | (string & {});
}

export const GoogleCloudDataplexV1DiscoveryEventEntityDetails: Schema.Schema<GoogleCloudDataplexV1DiscoveryEventEntityDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entity: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DiscoveryEventEntityDetails",
  });

export interface GoogleCloudDataplexV1MetadataJobImportJobSpecImportJobScope {
  /** Required. The entry groups that are in scope for the import job, specified as relative resource names in the format projects/{project_number_or_id}/locations/{location_id}/entryGroups/{entry_group_id}. Only entries and aspects that belong to the specified entry groups are affected by the job.The entry groups and the job must be in the same location. */
  entryGroups?: ReadonlyArray<string>;
  /** Optional. Defines the scope of entries that can be referenced in the entry links.Currently, projects are supported as valid scopes. Format: projects/{project_number_or_id}If the metadata import file attempts to create an entry link which references an entry that is not in the scope, the import job will skip that entry link. */
  referencedEntryScopes?: ReadonlyArray<string>;
  /** Optional. The aspect types that are in scope for the import job, specified as relative resource names in the format projects/{project_number_or_id}/locations/{location_id}/aspectTypes/{aspect_type_id}. The job modifies only the aspects that belong to these aspect types.This field is required when creating an aspect-only import job.If the metadata import file attempts to modify an aspect whose type isn't included in this list, the import job is halted before modifying any entries or aspects.The location of an aspect type must either match the location of the job, or the aspect type must be global. */
  aspectTypes?: ReadonlyArray<string>;
  /** Optional. The glossaries that are in scope for the import job, specified as relative resource names in the format projects/{project_number_or_id}/locations/{location_id}/glossaries/{glossary_id}.While importing Business Glossary entries, the user must provide glossaries. While importing entries, the user does not have to provide glossaries. If the metadata import file attempts to modify Business Glossary entries whose glossary isn't included in this list, the import job will skip those entries.The location of a glossary must either match the location of the job, or the glossary must be global. */
  glossaries?: ReadonlyArray<string>;
  /** Required. The entry types that are in scope for the import job, specified as relative resource names in the format projects/{project_number_or_id}/locations/{location_id}/entryTypes/{entry_type_id}. The job modifies only the entries and aspects that belong to these entry types.If the metadata import file attempts to modify an entry whose type isn't included in this list, the import job is halted before modifying any entries or aspects.The location of an entry type must either match the location of the job, or the entry type must be global. */
  entryTypes?: ReadonlyArray<string>;
  /** Optional. The entry link types that are in scope for the import job, specified as relative resource names in the format projects/{project_number_or_id}/locations/{location_id}/entryLinkTypes/{entry_link_type_id}. The job modifies only the entryLinks that belong to these entry link types.If the metadata import file attempts to create or delete an entry link whose entry link type isn't included in this list, the import job will skip those entry links. */
  entryLinkTypes?: ReadonlyArray<string>;
}

export const GoogleCloudDataplexV1MetadataJobImportJobSpecImportJobScope: Schema.Schema<GoogleCloudDataplexV1MetadataJobImportJobSpecImportJobScope> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entryGroups: Schema.optional(Schema.Array(Schema.String)),
    referencedEntryScopes: Schema.optional(Schema.Array(Schema.String)),
    aspectTypes: Schema.optional(Schema.Array(Schema.String)),
    glossaries: Schema.optional(Schema.Array(Schema.String)),
    entryTypes: Schema.optional(Schema.Array(Schema.String)),
    entryLinkTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDataplexV1MetadataJobImportJobSpecImportJobScope",
  });

export interface GoogleCloudDataplexV1MetadataJobImportJobSpec {
  /** Optional. The URI of a Cloud Storage bucket or folder (beginning with gs:// and ending with /) that contains the metadata import files for this job.A metadata import file defines the values to set for each of the entries and aspects in a metadata import job. For more information about how to create a metadata import file and the file requirements, see Metadata import file (https://cloud.google.com/dataplex/docs/import-metadata#metadata-import-file).You can provide multiple metadata import files in the same metadata job. The bucket or folder must contain at least one metadata import file, in JSON Lines format (either .json or .jsonl file extension).In FULL entry sync mode, don't save the metadata import file in a folder named SOURCE_STORAGE_URI/deletions/.Caution: If the metadata import file contains no data, all entries and aspects that belong to the job's scope are deleted. */
  sourceStorageUri?: string;
  /** Optional. The time when the process that created the metadata import files began. */
  sourceCreateTime?: string;
  /** Required. The sync mode for entries. */
  entrySyncMode?:
    | "SYNC_MODE_UNSPECIFIED"
    | "FULL"
    | "INCREMENTAL"
    | "NONE"
    | (string & {});
  /** Required. The sync mode for aspects. */
  aspectSyncMode?:
    | "SYNC_MODE_UNSPECIFIED"
    | "FULL"
    | "INCREMENTAL"
    | "NONE"
    | (string & {});
  /** Required. A boundary on the scope of impact that the metadata import job can have. */
  scope?: GoogleCloudDataplexV1MetadataJobImportJobSpecImportJobScope;
  /** Optional. The level of logs to write to Cloud Logging for this job.Debug-level logs provide highly-detailed information for troubleshooting, but their increased verbosity could incur additional costs (https://cloud.google.com/stackdriver/pricing) that might not be merited for all jobs.If unspecified, defaults to INFO. */
  logLevel?: "LOG_LEVEL_UNSPECIFIED" | "DEBUG" | "INFO" | (string & {});
}

export const GoogleCloudDataplexV1MetadataJobImportJobSpec: Schema.Schema<GoogleCloudDataplexV1MetadataJobImportJobSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceStorageUri: Schema.optional(Schema.String),
    sourceCreateTime: Schema.optional(Schema.String),
    entrySyncMode: Schema.optional(Schema.String),
    aspectSyncMode: Schema.optional(Schema.String),
    scope: Schema.optional(
      GoogleCloudDataplexV1MetadataJobImportJobSpecImportJobScope,
    ),
    logLevel: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1MetadataJobImportJobSpec" });

export interface GoogleCloudDataplexV1MetadataJobStatus {
  /** Output only. Message relating to the progression of a metadata job. */
  message?: string;
  /** Output only. State of the metadata job. */
  state?:
    | "STATE_UNSPECIFIED"
    | "QUEUED"
    | "RUNNING"
    | "CANCELING"
    | "CANCELED"
    | "SUCCEEDED"
    | "FAILED"
    | "SUCCEEDED_WITH_ERRORS"
    | (string & {});
  /** Output only. Progress tracking. */
  completionPercent?: number;
  /** Output only. The time when the status was updated. */
  updateTime?: string;
}

export const GoogleCloudDataplexV1MetadataJobStatus: Schema.Schema<GoogleCloudDataplexV1MetadataJobStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    completionPercent: Schema.optional(Schema.Number),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1MetadataJobStatus" });

export interface GoogleCloudDataplexV1MetadataJobImportJobResult {
  /** Output only. The total number of entries that were updated. */
  updatedEntries?: string;
  /** Output only. The total number of entry links that were successfully deleted. */
  deletedEntryLinks?: string;
  /** Output only. The total number of entry links that were successfully created. */
  createdEntryLinks?: string;
  /** Output only. The total number of entries that were created. */
  createdEntries?: string;
  /** Output only. The total number of entries that were unchanged. */
  unchangedEntries?: string;
  /** Output only. The total number of entries that were deleted. */
  deletedEntries?: string;
  /** Output only. The time when the status was updated. */
  updateTime?: string;
  /** Output only. The total number of entries that were recreated. */
  recreatedEntries?: string;
  /** Output only. The total number of entry links that were left unchanged. */
  unchangedEntryLinks?: string;
}

export const GoogleCloudDataplexV1MetadataJobImportJobResult: Schema.Schema<GoogleCloudDataplexV1MetadataJobImportJobResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updatedEntries: Schema.optional(Schema.String),
    deletedEntryLinks: Schema.optional(Schema.String),
    createdEntryLinks: Schema.optional(Schema.String),
    createdEntries: Schema.optional(Schema.String),
    unchangedEntries: Schema.optional(Schema.String),
    deletedEntries: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    recreatedEntries: Schema.optional(Schema.String),
    unchangedEntryLinks: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1MetadataJobImportJobResult",
  });

export interface GoogleCloudDataplexV1MetadataJobExportJobResult {
  /** Output only. The number of entries that were exported. */
  exportedEntries?: string;
  /** Output only. The error message if the metadata export job failed. */
  errorMessage?: string;
}

export const GoogleCloudDataplexV1MetadataJobExportJobResult: Schema.Schema<GoogleCloudDataplexV1MetadataJobExportJobResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportedEntries: Schema.optional(Schema.String),
    errorMessage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1MetadataJobExportJobResult",
  });

export interface GoogleCloudDataplexV1MetadataJob {
  /** Output only. A system-generated, globally unique ID for the metadata job. If the metadata job is deleted and then re-created with the same name, this ID is different. */
  uid?: string;
  /** Output only. The time when the metadata job was updated. */
  updateTime?: string;
  /** Import job specification. */
  importSpec?: GoogleCloudDataplexV1MetadataJobImportJobSpec;
  /** Output only. Metadata job status. */
  status?: GoogleCloudDataplexV1MetadataJobStatus;
  /** Optional. User-defined labels. */
  labels?: Record<string, string>;
  /** Output only. The time when the metadata job was created. */
  createTime?: string;
  /** Output only. Import job result. */
  importResult?: GoogleCloudDataplexV1MetadataJobImportJobResult;
  /** Output only. Identifier. The name of the resource that the configuration is applied to, in the format projects/{project_number}/locations/{location_id}/metadataJobs/{metadata_job_id}. */
  name?: string;
  /** Required. Metadata job type. */
  type?: "TYPE_UNSPECIFIED" | "IMPORT" | "EXPORT" | (string & {});
  /** Output only. Export job result. */
  exportResult?: GoogleCloudDataplexV1MetadataJobExportJobResult;
  /** Export job specification. */
  exportSpec?: GoogleCloudDataplexV1MetadataJobExportJobSpec;
}

export const GoogleCloudDataplexV1MetadataJob: Schema.Schema<GoogleCloudDataplexV1MetadataJob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uid: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    importSpec: Schema.optional(GoogleCloudDataplexV1MetadataJobImportJobSpec),
    status: Schema.optional(GoogleCloudDataplexV1MetadataJobStatus),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    importResult: Schema.optional(
      GoogleCloudDataplexV1MetadataJobImportJobResult,
    ),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    exportResult: Schema.optional(
      GoogleCloudDataplexV1MetadataJobExportJobResult,
    ),
    exportSpec: Schema.optional(GoogleCloudDataplexV1MetadataJobExportJobSpec),
  }).annotate({ identifier: "GoogleCloudDataplexV1MetadataJob" });

export interface GoogleCloudDataplexV1ListMetadataJobsResponse {
  /** Metadata jobs under the specified parent location. */
  metadataJobs?: ReadonlyArray<GoogleCloudDataplexV1MetadataJob>;
  /** A token to retrieve the next page of results. If there are no more results in the list, the value is empty. */
  nextPageToken?: string;
  /** Locations that the service couldn't reach. */
  unreachableLocations?: ReadonlyArray<string>;
}

export const GoogleCloudDataplexV1ListMetadataJobsResponse: Schema.Schema<GoogleCloudDataplexV1ListMetadataJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadataJobs: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1MetadataJob),
    ),
    nextPageToken: Schema.optional(Schema.String),
    unreachableLocations: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDataplexV1ListMetadataJobsResponse" });

export interface GoogleCloudDataplexV1DiscoveryEventConfigDetails {
  /** A list of discovery configuration parameters in effect. The keys are the field paths within DiscoverySpec. Eg. includePatterns, excludePatterns, csvOptions.disableTypeInference, etc. */
  parameters?: Record<string, string>;
}

export const GoogleCloudDataplexV1DiscoveryEventConfigDetails: Schema.Schema<GoogleCloudDataplexV1DiscoveryEventConfigDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DiscoveryEventConfigDetails",
  });

export interface GoogleCloudDataplexV1EntryGroup {
  /** Output only. The time when the EntryGroup was last updated. */
  updateTime?: string;
  /** Output only. System generated globally unique ID for the EntryGroup. If you delete and recreate the EntryGroup with the same name, this ID will be different. */
  uid?: string;
  /** Output only. Denotes the transfer status of the Entry Group. It is unspecified for Entry Group created from Dataplex API. */
  transferStatus?:
    | "TRANSFER_STATUS_UNSPECIFIED"
    | "TRANSFER_STATUS_MIGRATED"
    | "TRANSFER_STATUS_TRANSFERRED"
    | (string & {});
  /** Optional. User friendly display name. */
  displayName?: string;
  /** Optional. Description of the EntryGroup. */
  description?: string;
  /** Optional. User-defined labels for the EntryGroup. */
  labels?: Record<string, string>;
  /** This checksum is computed by the service, and might be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. The time when the EntryGroup was created. */
  createTime?: string;
  /** Output only. The relative resource name of the EntryGroup, in the format projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}. */
  name?: string;
}

export const GoogleCloudDataplexV1EntryGroup: Schema.Schema<GoogleCloudDataplexV1EntryGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    transferStatus: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1EntryGroup" });

export interface GoogleCloudDataplexV1CancelJobRequest {}

export const GoogleCloudDataplexV1CancelJobRequest: Schema.Schema<GoogleCloudDataplexV1CancelJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDataplexV1CancelJobRequest",
  });

export interface GoogleCloudDataplexV1MetadataFeedScope {
  /** Optional. Whether the metadata feed is at the organization-level. If true, all changes happened to the entries in the same organization as the feed are published. If false, you must specify a list of projects or a list of entry groups whose entries you want to listen to.The default is false. */
  organizationLevel?: boolean;
  /** Optional. The projects whose entries you want to listen to. Must be in the same organization as the feed. Must be in the format: projects/{project_id_or_number}. */
  projects?: ReadonlyArray<string>;
  /** Optional. The entry groups whose entries you want to listen to. Must be in the format: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}. */
  entryGroups?: ReadonlyArray<string>;
}

export const GoogleCloudDataplexV1MetadataFeedScope: Schema.Schema<GoogleCloudDataplexV1MetadataFeedScope> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationLevel: Schema.optional(Schema.Boolean),
    projects: Schema.optional(Schema.Array(Schema.String)),
    entryGroups: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDataplexV1MetadataFeedScope" });

export interface GoogleCloudDataplexV1TaskExecutionSpec {
  /** Required. Service account to use to execute a task. If not provided, the default Compute service account for the project is used. */
  serviceAccount?: string;
  /** Optional. The Cloud KMS key to use for encryption, of the form: projects/{project_number}/locations/{location_id}/keyRings/{key-ring-name}/cryptoKeys/{key-name}. */
  kmsKey?: string;
  /** Optional. The project in which jobs are run. By default, the project containing the Lake is used. If a project is provided, the ExecutionSpec.service_account must belong to this project. */
  project?: string;
  /** Optional. The arguments to pass to the task. The args can use placeholders of the format ${placeholder} as part of key/value string. These will be interpolated before passing the args to the driver. Currently supported placeholders: - ${task_id} - ${job_time} To pass positional args, set the key as TASK_ARGS. The value should be a comma-separated string of all the positional arguments. To use a delimiter other than comma, refer to https://cloud.google.com/sdk/gcloud/reference/topic/escaping. In case of other keys being present in the args, then TASK_ARGS will be passed as the last argument. */
  args?: Record<string, string>;
  /** Optional. The maximum duration after which the job execution is expired. */
  maxJobExecutionLifetime?: string;
}

export const GoogleCloudDataplexV1TaskExecutionSpec: Schema.Schema<GoogleCloudDataplexV1TaskExecutionSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccount: Schema.optional(Schema.String),
    kmsKey: Schema.optional(Schema.String),
    project: Schema.optional(Schema.String),
    args: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    maxJobExecutionLifetime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1TaskExecutionSpec" });

export interface GoogleCloudDataplexV1Job {
  /** Output only. The full resource name for the job run under a particular service. */
  serviceJob?: string;
  /** Output only. The number of times the job has been retried (excluding the initial attempt). */
  retryCount?: number;
  /** Output only. User-defined labels for the task. */
  labels?: Record<string, string>;
  /** Output only. Execution state for the job. */
  state?:
    | "STATE_UNSPECIFIED"
    | "RUNNING"
    | "CANCELLING"
    | "CANCELLED"
    | "SUCCEEDED"
    | "FAILED"
    | "ABORTED"
    | (string & {});
  /** Output only. System generated globally unique ID for the job. */
  uid?: string;
  /** Output only. The time when the job ended. */
  endTime?: string;
  /** Output only. The underlying service running a job. */
  service?: "SERVICE_UNSPECIFIED" | "DATAPROC" | (string & {});
  /** Output only. Additional information about the current state. */
  message?: string;
  /** Output only. The time when the job was started. */
  startTime?: string;
  /** Output only. Job execution trigger. */
  trigger?:
    | "TRIGGER_UNSPECIFIED"
    | "TASK_CONFIG"
    | "RUN_REQUEST"
    | (string & {});
  /** Output only. The relative resource name of the job, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{task_id}/jobs/{job_id}. */
  name?: string;
  /** Output only. Spec related to how a task is executed. */
  executionSpec?: GoogleCloudDataplexV1TaskExecutionSpec;
}

export const GoogleCloudDataplexV1Job: Schema.Schema<GoogleCloudDataplexV1Job> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceJob: Schema.optional(Schema.String),
    retryCount: Schema.optional(Schema.Number),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    state: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    service: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    trigger: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    executionSpec: Schema.optional(GoogleCloudDataplexV1TaskExecutionSpec),
  }).annotate({ identifier: "GoogleCloudDataplexV1Job" });

export interface GoogleCloudDataplexV1TaskExecutionStatus {
  /** Output only. Last update time of the status. */
  updateTime?: string;
  /** Output only. latest job execution */
  latestJob?: GoogleCloudDataplexV1Job;
}

export const GoogleCloudDataplexV1TaskExecutionStatus: Schema.Schema<GoogleCloudDataplexV1TaskExecutionStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    latestJob: Schema.optional(GoogleCloudDataplexV1Job),
  }).annotate({ identifier: "GoogleCloudDataplexV1TaskExecutionStatus" });

export interface GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources {
  /** Optional. Max configurable executors. If max_executors_count > executors_count, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. Default=1000 */
  maxExecutorsCount?: number;
  /** Optional. Total number of job executors. Executor Count should be between 2 and 100. Default=2 */
  executorsCount?: number;
}

export const GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources: Schema.Schema<GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxExecutorsCount: Schema.optional(Schema.Number),
    executorsCount: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources",
  });

export interface GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime {
  /** Optional. Container image to use. */
  image?: string;
  /** Optional. Override to common configuration of open source components installed on the Dataproc cluster. The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties). */
  properties?: Record<string, string>;
  /** Optional. A list of python packages to be installed. Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz */
  pythonPackages?: ReadonlyArray<string>;
  /** Optional. A list of Java JARS to add to the classpath. Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar */
  javaJars?: ReadonlyArray<string>;
}

export const GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime: Schema.Schema<GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    image: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    pythonPackages: Schema.optional(Schema.Array(Schema.String)),
    javaJars: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime",
  });

export interface GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork {
  /** Optional. The Cloud VPC sub-network in which the job is run. */
  subNetwork?: string;
  /** Optional. List of network tags to apply to the job. */
  networkTags?: ReadonlyArray<string>;
  /** Optional. The Cloud VPC network in which the job is run. By default, the Cloud VPC network named Default within the project is used. */
  network?: string;
}

export const GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork: Schema.Schema<GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subNetwork: Schema.optional(Schema.String),
    networkTags: Schema.optional(Schema.Array(Schema.String)),
    network: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork",
  });

export interface GoogleCloudDataplexV1TaskInfrastructureSpec {
  /** Compute resources needed for a Task when using Dataproc Serverless. */
  batch?: GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources;
  /** Container Image Runtime Configuration. */
  containerImage?: GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime;
  /** Vpc network. */
  vpcNetwork?: GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork;
}

export const GoogleCloudDataplexV1TaskInfrastructureSpec: Schema.Schema<GoogleCloudDataplexV1TaskInfrastructureSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    batch: Schema.optional(
      GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources,
    ),
    containerImage: Schema.optional(
      GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime,
    ),
    vpcNetwork: Schema.optional(
      GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork,
    ),
  }).annotate({ identifier: "GoogleCloudDataplexV1TaskInfrastructureSpec" });

export interface GoogleCloudDataplexV1TaskSparkTaskConfig {
  /** The Cloud Storage URI of the jar file that contains the main class. The execution args are passed in as a sequence of named process arguments (--key=value). */
  mainJarFileUri?: string;
  /** The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris. The execution args are passed in as a sequence of named process arguments (--key=value). */
  mainClass?: string;
  /** The Gcloud Storage URI of the main Python file to use as the driver. Must be a .py file. The execution args are passed in as a sequence of named process arguments (--key=value). */
  pythonScriptFile?: string;
  /** Optional. Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. */
  archiveUris?: ReadonlyArray<string>;
  /** The query text. The execution args are used to declare a set of script variables (set key="value";). */
  sqlScript?: string;
  /** A reference to a query file. This should be the Cloud Storage URI of the query file. The execution args are used to declare a set of script variables (set key="value";). */
  sqlScriptFile?: string;
  /** Optional. Cloud Storage URIs of files to be placed in the working directory of each executor. */
  fileUris?: ReadonlyArray<string>;
  /** Optional. Infrastructure specification for the execution. */
  infrastructureSpec?: GoogleCloudDataplexV1TaskInfrastructureSpec;
}

export const GoogleCloudDataplexV1TaskSparkTaskConfig: Schema.Schema<GoogleCloudDataplexV1TaskSparkTaskConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mainJarFileUri: Schema.optional(Schema.String),
    mainClass: Schema.optional(Schema.String),
    pythonScriptFile: Schema.optional(Schema.String),
    archiveUris: Schema.optional(Schema.Array(Schema.String)),
    sqlScript: Schema.optional(Schema.String),
    sqlScriptFile: Schema.optional(Schema.String),
    fileUris: Schema.optional(Schema.Array(Schema.String)),
    infrastructureSpec: Schema.optional(
      GoogleCloudDataplexV1TaskInfrastructureSpec,
    ),
  }).annotate({ identifier: "GoogleCloudDataplexV1TaskSparkTaskConfig" });

export interface GoogleCloudDataplexV1TaskNotebookTaskConfig {
  /** Required. Path to input notebook. This can be the Cloud Storage URI of the notebook file or the path to a Notebook Content. The execution args are accessible as environment variables (TASK_key=value). */
  notebook?: string;
  /** Optional. Cloud Storage URIs of files to be placed in the working directory of each executor. */
  fileUris?: ReadonlyArray<string>;
  /** Optional. Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. */
  archiveUris?: ReadonlyArray<string>;
  /** Optional. Infrastructure specification for the execution. */
  infrastructureSpec?: GoogleCloudDataplexV1TaskInfrastructureSpec;
}

export const GoogleCloudDataplexV1TaskNotebookTaskConfig: Schema.Schema<GoogleCloudDataplexV1TaskNotebookTaskConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notebook: Schema.optional(Schema.String),
    fileUris: Schema.optional(Schema.Array(Schema.String)),
    archiveUris: Schema.optional(Schema.Array(Schema.String)),
    infrastructureSpec: Schema.optional(
      GoogleCloudDataplexV1TaskInfrastructureSpec,
    ),
  }).annotate({ identifier: "GoogleCloudDataplexV1TaskNotebookTaskConfig" });

export interface GoogleCloudDataplexV1Task {
  /** Output only. The time when the task was created. */
  createTime?: string;
  /** Required. Spec related to how often and when a task should be triggered. */
  triggerSpec?: GoogleCloudDataplexV1TaskTriggerSpec;
  /** Optional. User-defined labels for the task. */
  labels?: Record<string, string>;
  /** Optional. Description of the task. */
  description?: string;
  /** Output only. Status of the latest task executions. */
  executionStatus?: GoogleCloudDataplexV1TaskExecutionStatus;
  /** Config related to running custom Spark tasks. */
  spark?: GoogleCloudDataplexV1TaskSparkTaskConfig;
  /** Output only. System generated globally unique ID for the task. This ID will be different if the task is deleted and re-created with the same name. */
  uid?: string;
  /** Output only. The time when the task was last updated. */
  updateTime?: string;
  /** Output only. The relative resource name of the task, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/ tasks/{task_id}. */
  name?: string;
  /** Required. Spec related to how a task is executed. */
  executionSpec?: GoogleCloudDataplexV1TaskExecutionSpec;
  /** Optional. User friendly display name. */
  displayName?: string;
  /** Config related to running scheduled Notebooks. */
  notebook?: GoogleCloudDataplexV1TaskNotebookTaskConfig;
  /** Output only. Current state of the task. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | "ACTION_REQUIRED"
    | (string & {});
}

export const GoogleCloudDataplexV1Task: Schema.Schema<GoogleCloudDataplexV1Task> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    triggerSpec: Schema.optional(GoogleCloudDataplexV1TaskTriggerSpec),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
    executionStatus: Schema.optional(GoogleCloudDataplexV1TaskExecutionStatus),
    spark: Schema.optional(GoogleCloudDataplexV1TaskSparkTaskConfig),
    uid: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    executionSpec: Schema.optional(GoogleCloudDataplexV1TaskExecutionSpec),
    displayName: Schema.optional(Schema.String),
    notebook: Schema.optional(GoogleCloudDataplexV1TaskNotebookTaskConfig),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1Task" });

export interface GoogleCloudDataplexV1ListTasksResponse {
  /** Tasks under the given parent lake. */
  tasks?: ReadonlyArray<GoogleCloudDataplexV1Task>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachableLocations?: ReadonlyArray<string>;
}

export const GoogleCloudDataplexV1ListTasksResponse: Schema.Schema<GoogleCloudDataplexV1ListTasksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tasks: Schema.optional(Schema.Array(GoogleCloudDataplexV1Task)),
    nextPageToken: Schema.optional(Schema.String),
    unreachableLocations: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDataplexV1ListTasksResponse" });

export interface GoogleCloudDataplexV1EntryTypeAspectInfo {
  /** Required aspect type for the entry type. */
  type?: string;
}

export const GoogleCloudDataplexV1EntryTypeAspectInfo: Schema.Schema<GoogleCloudDataplexV1EntryTypeAspectInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1EntryTypeAspectInfo" });

export interface GoogleCloudDataplexV1EntryTypeAuthorization {
  /** Immutable. The IAM permission grantable on the Entry Group to allow access to instantiate Entries of Dataplex Universal Catalog owned Entry Types, only settable for Dataplex Universal Catalog owned Types. */
  alternateUsePermission?: string;
}

export const GoogleCloudDataplexV1EntryTypeAuthorization: Schema.Schema<GoogleCloudDataplexV1EntryTypeAuthorization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alternateUsePermission: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1EntryTypeAuthorization" });

export interface GoogleCloudDataplexV1EntryType {
  /** Optional. Indicates the classes this Entry Type belongs to, for example, TABLE, DATABASE, MODEL. */
  typeAliases?: ReadonlyArray<string>;
  /** Optional. The system that Entries of this type belongs to. Examples include CloudSQL, MariaDB etc */
  system?: string;
  /** Output only. The time when the EntryType was created. */
  createTime?: string;
  /** Optional. User-defined labels for the EntryType. */
  labels?: Record<string, string>;
  /** Optional. Description of the EntryType. */
  description?: string;
  /** Output only. System generated globally unique ID for the EntryType. This ID will be different if the EntryType is deleted and re-created with the same name. */
  uid?: string;
  /** Output only. The time when the EntryType was last updated. */
  updateTime?: string;
  /** Output only. The relative resource name of the EntryType, of the form: projects/{project_number}/locations/{location_id}/entryTypes/{entry_type_id}. */
  name?: string;
  /** AspectInfo for the entry type. */
  requiredAspects?: ReadonlyArray<GoogleCloudDataplexV1EntryTypeAspectInfo>;
  /** Immutable. Authorization defined for this type. */
  authorization?: GoogleCloudDataplexV1EntryTypeAuthorization;
  /** Optional. The platform that Entries of this type belongs to. */
  platform?: string;
  /** Optional. This checksum is computed by the service, and might be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Optional. User friendly display name. */
  displayName?: string;
}

export const GoogleCloudDataplexV1EntryType: Schema.Schema<GoogleCloudDataplexV1EntryType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    typeAliases: Schema.optional(Schema.Array(Schema.String)),
    system: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    requiredAspects: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1EntryTypeAspectInfo),
    ),
    authorization: Schema.optional(GoogleCloudDataplexV1EntryTypeAuthorization),
    platform: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1EntryType" });

export interface GoogleCloudDataplexV1GlossaryCategory {
  /** Output only. Identifier. The resource name of the GlossaryCategory. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/categories/{category_id} */
  name?: string;
  /** Optional. User-defined labels for the GlossaryCategory. */
  labels?: Record<string, string>;
  /** Optional. The user-mutable description of the GlossaryCategory. */
  description?: string;
  /** Optional. User friendly display name of the GlossaryCategory. This is user-mutable. This will be same as the GlossaryCategoryId, if not specified. */
  displayName?: string;
  /** Required. The immediate parent of the GlossaryCategory in the resource-hierarchy. It can either be a Glossary or a GlossaryCategory. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} OR projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/categories/{category_id} */
  parent?: string;
  /** Output only. System generated unique id for the GlossaryCategory. This ID will be different if the GlossaryCategory is deleted and re-created with the same name. */
  uid?: string;
  /** Output only. The time at which the GlossaryCategory was created. */
  createTime?: string;
  /** Output only. The time at which the GlossaryCategory was last updated. */
  updateTime?: string;
}

export const GoogleCloudDataplexV1GlossaryCategory: Schema.Schema<GoogleCloudDataplexV1GlossaryCategory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1GlossaryCategory" });

export interface GoogleCloudDataplexV1ListGlossaryCategoriesResponse {
  /** Lists the GlossaryCategories in the specified parent. */
  categories?: ReadonlyArray<GoogleCloudDataplexV1GlossaryCategory>;
  /** A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Locations that the service couldn't reach. */
  unreachableLocations?: ReadonlyArray<string>;
}

export const GoogleCloudDataplexV1ListGlossaryCategoriesResponse: Schema.Schema<GoogleCloudDataplexV1ListGlossaryCategoriesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    categories: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1GlossaryCategory),
    ),
    nextPageToken: Schema.optional(Schema.String),
    unreachableLocations: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDataplexV1ListGlossaryCategoriesResponse",
  });

export interface GoogleCloudDataplexV1DataScanEventDataQualityResult {
  /** The result of each dimension for data quality result. The key of the map is the name of the dimension. The value is the bool value depicting whether the dimension result was pass or not. */
  dimensionPassed?: Record<string, boolean>;
  /** The table-level data quality score for the data scan job.The data quality score ranges between 0, 100 (up to two decimal points). */
  score?: number;
  /** The count of rows processed in the data scan job. */
  rowCount?: string;
  /** Whether the data quality result was pass or not. */
  passed?: boolean;
  /** The score of each dimension for data quality result. The key of the map is the name of the dimension. The value is the data quality score for the dimension.The score ranges between 0, 100 (up to two decimal points). */
  dimensionScore?: Record<string, number>;
  /** The score of each column scanned in the data scan job. The key of the map is the name of the column. The value is the data quality score for the column.The score ranges between 0, 100 (up to two decimal points). */
  columnScore?: Record<string, number>;
}

export const GoogleCloudDataplexV1DataScanEventDataQualityResult: Schema.Schema<GoogleCloudDataplexV1DataScanEventDataQualityResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dimensionPassed: Schema.optional(
      Schema.Record(Schema.String, Schema.Boolean),
    ),
    score: Schema.optional(Schema.Number),
    rowCount: Schema.optional(Schema.String),
    passed: Schema.optional(Schema.Boolean),
    dimensionScore: Schema.optional(
      Schema.Record(Schema.String, Schema.Number),
    ),
    columnScore: Schema.optional(Schema.Record(Schema.String, Schema.Number)),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataScanEventDataQualityResult",
  });

export interface GoogleCloudDataplexV1SchemaPartitionField {
  /** Required. Immutable. The type of field. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "BOOLEAN"
    | "BYTE"
    | "INT16"
    | "INT32"
    | "INT64"
    | "FLOAT"
    | "DOUBLE"
    | "DECIMAL"
    | "STRING"
    | "BINARY"
    | "TIMESTAMP"
    | "DATE"
    | "TIME"
    | "RECORD"
    | "NULL"
    | (string & {});
  /** Required. Partition field name must consist of letters, numbers, and underscores only, with a maximum of length of 256 characters, and must begin with a letter or underscore.. */
  name?: string;
}

export const GoogleCloudDataplexV1SchemaPartitionField: Schema.Schema<GoogleCloudDataplexV1SchemaPartitionField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1SchemaPartitionField" });

export interface GoogleCloudDataplexV1Schema {
  /** Required. Set to true if user-managed or false if managed by Dataplex Universal Catalog. The default is false (managed by Dataplex Universal Catalog). Set to falseto enable Dataplex Universal Catalog discovery to update the schema. including new data discovery, schema inference, and schema evolution. Users retain the ability to input and edit the schema. Dataplex Universal Catalog treats schema input by the user as though produced by a previous Dataplex Universal Catalog discovery operation, and it will evolve the schema and take action based on that treatment. Set to true to fully manage the entity schema. This setting guarantees that Dataplex Universal Catalog will not change schema fields. */
  userManaged?: boolean;
  /** Optional. The sequence of fields describing data in table entities. Note: BigQuery SchemaFields are immutable. */
  fields?: ReadonlyArray<GoogleCloudDataplexV1SchemaSchemaField>;
  /** Optional. The sequence of fields describing the partition structure in entities. If this field is empty, there are no partitions within the data. */
  partitionFields?: ReadonlyArray<GoogleCloudDataplexV1SchemaPartitionField>;
  /** Optional. The structure of paths containing partition data within the entity. */
  partitionStyle?:
    | "PARTITION_STYLE_UNSPECIFIED"
    | "HIVE_COMPATIBLE"
    | (string & {});
}

export const GoogleCloudDataplexV1Schema: Schema.Schema<GoogleCloudDataplexV1Schema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userManaged: Schema.optional(Schema.Boolean),
    fields: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1SchemaSchemaField),
    ),
    partitionFields: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1SchemaPartitionField),
    ),
    partitionStyle: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1Schema" });

export interface GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions {
  /** Optional. The character encoding of the data. The default is UTF-8. */
  encoding?: string;
  /** Optional. Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean). */
  disableTypeInference?: boolean;
}

export const GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions: Schema.Schema<GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encoding: Schema.optional(Schema.String),
    disableTypeInference: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions",
  });

export interface GoogleCloudDataplexV1SessionEventQueryDetail {
  /** The unique Query id identifying the query. */
  queryId?: string;
  /** The query text executed. */
  queryText?: string;
  /** The data processed by the query. */
  dataProcessedBytes?: string;
  /** Query Execution engine. */
  engine?: "ENGINE_UNSPECIFIED" | "SPARK_SQL" | "BIGQUERY" | (string & {});
  /** Time taken for execution of the query. */
  duration?: string;
  /** The size of results the query produced. */
  resultSizeBytes?: string;
}

export const GoogleCloudDataplexV1SessionEventQueryDetail: Schema.Schema<GoogleCloudDataplexV1SessionEventQueryDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryId: Schema.optional(Schema.String),
    queryText: Schema.optional(Schema.String),
    dataProcessedBytes: Schema.optional(Schema.String),
    engine: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
    resultSizeBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1SessionEventQueryDetail" });

export interface GoogleCloudDataplexV1ZoneResourceSpec {
  /** Required. Immutable. The location type of the resources that are allowed to be attached to the assets within this zone. */
  locationType?:
    | "LOCATION_TYPE_UNSPECIFIED"
    | "SINGLE_REGION"
    | "MULTI_REGION"
    | (string & {});
}

export const GoogleCloudDataplexV1ZoneResourceSpec: Schema.Schema<GoogleCloudDataplexV1ZoneResourceSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1ZoneResourceSpec" });

export interface GoogleCloudDataplexV1AssetStatus {
  /** Number of active assets. */
  activeAssets?: number;
  /** Number of assets that are in process of updating the security policy on attached resources. */
  securityPolicyApplyingAssets?: number;
  /** Last update time of the status. */
  updateTime?: string;
}

export const GoogleCloudDataplexV1AssetStatus: Schema.Schema<GoogleCloudDataplexV1AssetStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activeAssets: Schema.optional(Schema.Number),
    securityPolicyApplyingAssets: Schema.optional(Schema.Number),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1AssetStatus" });

export interface GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions {
  /** Optional. The delimiter being used to separate values. This defaults to ','. */
  delimiter?: string;
  /** Optional. Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings. */
  disableTypeInference?: boolean;
  /** Optional. The number of rows to interpret as header rows that should be skipped when reading data rows. */
  headerRows?: number;
  /** Optional. The character encoding of the data. The default is UTF-8. */
  encoding?: string;
}

export const GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions: Schema.Schema<GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    delimiter: Schema.optional(Schema.String),
    disableTypeInference: Schema.optional(Schema.Boolean),
    headerRows: Schema.optional(Schema.Number),
    encoding: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions",
  });

export interface GoogleCloudDataplexV1ZoneDiscoverySpec {
  /** Optional. The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names. */
  includePatterns?: ReadonlyArray<string>;
  /** Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes.To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. */
  schedule?: string;
  /** Required. Whether discovery is enabled. */
  enabled?: boolean;
  /** Optional. The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names. */
  excludePatterns?: ReadonlyArray<string>;
  /** Optional. Configuration for CSV data. */
  csvOptions?: GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions;
  /** Optional. Configuration for Json data. */
  jsonOptions?: GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions;
}

export const GoogleCloudDataplexV1ZoneDiscoverySpec: Schema.Schema<GoogleCloudDataplexV1ZoneDiscoverySpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includePatterns: Schema.optional(Schema.Array(Schema.String)),
    schedule: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    excludePatterns: Schema.optional(Schema.Array(Schema.String)),
    csvOptions: Schema.optional(
      GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions,
    ),
    jsonOptions: Schema.optional(
      GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions,
    ),
  }).annotate({ identifier: "GoogleCloudDataplexV1ZoneDiscoverySpec" });

export interface GoogleCloudDataplexV1Zone {
  /** Required. Immutable. The type of the zone. */
  type?: "TYPE_UNSPECIFIED" | "RAW" | "CURATED" | (string & {});
  /** Output only. The relative resource name of the zone, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}. */
  name?: string;
  /** Output only. The time when the zone was created. */
  createTime?: string;
  /** Required. Specification of the resources that are referenced by the assets within this zone. */
  resourceSpec?: GoogleCloudDataplexV1ZoneResourceSpec;
  /** Optional. User defined labels for the zone. */
  labels?: Record<string, string>;
  /** Output only. Aggregated status of the underlying assets of the zone. */
  assetStatus?: GoogleCloudDataplexV1AssetStatus;
  /** Optional. Description of the zone. */
  description?: string;
  /** Output only. System generated globally unique ID for the zone. This ID will be different if the zone is deleted and re-created with the same name. */
  uid?: string;
  /** Optional. User friendly display name. */
  displayName?: string;
  /** Output only. Current state of the zone. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | "ACTION_REQUIRED"
    | (string & {});
  /** Optional. Specification of the discovery feature applied to data in this zone. */
  discoverySpec?: GoogleCloudDataplexV1ZoneDiscoverySpec;
  /** Output only. The time when the zone was last updated. */
  updateTime?: string;
}

export const GoogleCloudDataplexV1Zone: Schema.Schema<GoogleCloudDataplexV1Zone> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    resourceSpec: Schema.optional(GoogleCloudDataplexV1ZoneResourceSpec),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    assetStatus: Schema.optional(GoogleCloudDataplexV1AssetStatus),
    description: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    discoverySpec: Schema.optional(GoogleCloudDataplexV1ZoneDiscoverySpec),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1Zone" });

export interface GoogleCloudDataplexV1Glossary {
  /** Optional. The user-mutable description of the Glossary. */
  description?: string;
  /** Output only. The number of GlossaryTerms in the Glossary. */
  termCount?: number;
  /** Optional. User-defined labels for the Glossary. */
  labels?: Record<string, string>;
  /** Output only. The time at which the Glossary was last updated. */
  updateTime?: string;
  /** Output only. The number of GlossaryCategories in the Glossary. */
  categoryCount?: number;
  /** Output only. System generated unique id for the Glossary. This ID will be different if the Glossary is deleted and re-created with the same name. */
  uid?: string;
  /** Optional. User friendly display name of the Glossary. This is user-mutable. This will be same as the GlossaryId, if not specified. */
  displayName?: string;
  /** Output only. Identifier. The resource name of the Glossary. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} */
  name?: string;
  /** Optional. Needed for resource freshness validation. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. The time at which the Glossary was created. */
  createTime?: string;
}

export const GoogleCloudDataplexV1Glossary: Schema.Schema<GoogleCloudDataplexV1Glossary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    termCount: Schema.optional(Schema.Number),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    updateTime: Schema.optional(Schema.String),
    categoryCount: Schema.optional(Schema.Number),
    uid: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1Glossary" });

export interface GoogleCloudDataplexV1DataAccessSpec {
  /** Optional. The format of strings follows the pattern followed by IAM in the bindings. user:{email}, serviceAccount:{email} group:{email}. The set of principals to be granted reader role on data stored within resources. */
  readers?: ReadonlyArray<string>;
}

export const GoogleCloudDataplexV1DataAccessSpec: Schema.Schema<GoogleCloudDataplexV1DataAccessSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    readers: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataAccessSpec" });

export interface GoogleCloudDataplexV1ListDataScansResponse {
  /** DataScans (BASIC view only) under the given parent location. */
  dataScans?: ReadonlyArray<GoogleCloudDataplexV1DataScan>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const GoogleCloudDataplexV1ListDataScansResponse: Schema.Schema<GoogleCloudDataplexV1ListDataScansResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataScans: Schema.optional(Schema.Array(GoogleCloudDataplexV1DataScan)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1ListDataScansResponse" });

export interface GoogleCloudDataplexV1AspectTypeAuthorization {
  /** Immutable. The IAM permission grantable on the EntryGroup to allow access to instantiate Aspects of Dataplex Universal Catalog owned AspectTypes, only settable for Dataplex Universal Catalog owned Types. */
  alternateUsePermission?: string;
}

export const GoogleCloudDataplexV1AspectTypeAuthorization: Schema.Schema<GoogleCloudDataplexV1AspectTypeAuthorization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alternateUsePermission: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1AspectTypeAuthorization" });

export interface GoogleCloudDataplexV1AspectTypeMetadataTemplateConstraints {
  /** Optional. Marks this field as optional or required. */
  required?: boolean;
}

export const GoogleCloudDataplexV1AspectTypeMetadataTemplateConstraints: Schema.Schema<GoogleCloudDataplexV1AspectTypeMetadataTemplateConstraints> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    required: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDataplexV1AspectTypeMetadataTemplateConstraints",
  });

export interface GoogleCloudDataplexV1AspectTypeMetadataTemplateEnumValue {
  /** Required. Name of the enumvalue. This is the actual value that the aspect can contain. */
  name?: string;
  /** Required. Index for the enum value. It can't be modified. */
  index?: number;
  /** Optional. You can set this message if you need to deprecate an enum value. */
  deprecated?: string;
}

export const GoogleCloudDataplexV1AspectTypeMetadataTemplateEnumValue: Schema.Schema<GoogleCloudDataplexV1AspectTypeMetadataTemplateEnumValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    index: Schema.optional(Schema.Number),
    deprecated: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1AspectTypeMetadataTemplateEnumValue",
  });

export interface GoogleCloudDataplexV1AspectTypeMetadataTemplateAnnotations {
  /** Optional. Display order for a field. You can use this to reorder where a field is rendered. */
  displayOrder?: number;
  /** Optional. Suggested hints for string fields. You can use them to suggest values to users through console. */
  stringValues?: ReadonlyArray<string>;
  /** Optional. Description for a field. */
  description?: string;
  /** Optional. Marks a field as deprecated. You can include a deprecation message. */
  deprecated?: string;
  /** Optional. Display name for a field. */
  displayName?: string;
  /** Optional. You can use String Type annotations to specify special meaning to string fields. The following values are supported: richText: The field must be interpreted as a rich text field. url: A fully qualified URL link. resource: A service qualified resource reference. */
  stringType?: string;
}

export const GoogleCloudDataplexV1AspectTypeMetadataTemplateAnnotations: Schema.Schema<GoogleCloudDataplexV1AspectTypeMetadataTemplateAnnotations> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayOrder: Schema.optional(Schema.Number),
    stringValues: Schema.optional(Schema.Array(Schema.String)),
    description: Schema.optional(Schema.String),
    deprecated: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    stringType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1AspectTypeMetadataTemplateAnnotations",
  });

export interface GoogleCloudDataplexV1AspectTypeMetadataTemplate {
  /** Optional. Specifies the constraints on this field. */
  constraints?: GoogleCloudDataplexV1AspectTypeMetadataTemplateConstraints;
  /** Required. The name of the field. */
  name?: string;
  /** Optional. The list of values for an enum type. You must define it if the type is enum. */
  enumValues?: ReadonlyArray<GoogleCloudDataplexV1AspectTypeMetadataTemplateEnumValue>;
  /** Required. The datatype of this field. The following values are supported:Primitive types: string int bool double datetime. Must be of the format RFC3339 UTC "Zulu" (Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z").Complex types: enum array map record */
  type?: string;
  /** Optional. If the type is array, set array_items. array_items can refer to a primitive field or a complex (record only) field. To specify a primitive field, you only need to set name and type in the nested MetadataTemplate. The recommended value for the name field is item, as this isn't used in the actual payload. */
  arrayItems?: GoogleCloudDataplexV1AspectTypeMetadataTemplate;
  /** Optional. You can use type id if this definition of the field needs to be reused later. The type id must be unique across the entire template. You can only specify it if the field type is record. */
  typeId?: string;
  /** Optional. Field definition. You must specify it if the type is record. It defines the nested fields. */
  recordFields?: ReadonlyArray<GoogleCloudDataplexV1AspectTypeMetadataTemplate>;
  /** Optional. Specifies annotations on this field. */
  annotations?: GoogleCloudDataplexV1AspectTypeMetadataTemplateAnnotations;
  /** Optional. If the type is map, set map_items. map_items can refer to a primitive field or a complex (record only) field. To specify a primitive field, you only need to set name and type in the nested MetadataTemplate. The recommended value for the name field is item, as this isn't used in the actual payload. */
  mapItems?: GoogleCloudDataplexV1AspectTypeMetadataTemplate;
  /** Optional. A reference to another field definition (not an inline definition). The value must be equal to the value of an id field defined elsewhere in the MetadataTemplate. Only fields with record type can refer to other fields. */
  typeRef?: string;
  /** Optional. Index is used to encode Template messages. The value of index can range between 1 and 2,147,483,647. Index must be unique within all fields in a Template. (Nested Templates can reuse indexes). Once a Template is defined, the index cannot be changed, because it identifies the field in the actual storage format. Index is a mandatory field, but it is optional for top level fields, and map/array "values" definitions. */
  index?: number;
}

export const GoogleCloudDataplexV1AspectTypeMetadataTemplate: Schema.Schema<GoogleCloudDataplexV1AspectTypeMetadataTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      constraints: Schema.optional(
        GoogleCloudDataplexV1AspectTypeMetadataTemplateConstraints,
      ),
      name: Schema.optional(Schema.String),
      enumValues: Schema.optional(
        Schema.Array(GoogleCloudDataplexV1AspectTypeMetadataTemplateEnumValue),
      ),
      type: Schema.optional(Schema.String),
      arrayItems: Schema.optional(
        GoogleCloudDataplexV1AspectTypeMetadataTemplate,
      ),
      typeId: Schema.optional(Schema.String),
      recordFields: Schema.optional(
        Schema.Array(GoogleCloudDataplexV1AspectTypeMetadataTemplate),
      ),
      annotations: Schema.optional(
        GoogleCloudDataplexV1AspectTypeMetadataTemplateAnnotations,
      ),
      mapItems: Schema.optional(
        GoogleCloudDataplexV1AspectTypeMetadataTemplate,
      ),
      typeRef: Schema.optional(Schema.String),
      index: Schema.optional(Schema.Number),
    }),
  ).annotate({
    identifier: "GoogleCloudDataplexV1AspectTypeMetadataTemplate",
  }) as any as Schema.Schema<GoogleCloudDataplexV1AspectTypeMetadataTemplate>;

export interface GoogleCloudDataplexV1AspectType {
  /** Optional. Immutable. Stores data classification of the aspect. */
  dataClassification?:
    | "DATA_CLASSIFICATION_UNSPECIFIED"
    | "METADATA_AND_DATA"
    | (string & {});
  /** Immutable. Defines the Authorization for this type. */
  authorization?: GoogleCloudDataplexV1AspectTypeAuthorization;
  /** Output only. The relative resource name of the AspectType, of the form: projects/{project_number}/locations/{location_id}/aspectTypes/{aspect_type_id}. */
  name?: string;
  /** The service computes this checksum. The client may send it on update and delete requests to ensure it has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. The time when the AspectType was created. */
  createTime?: string;
  /** Optional. Description of the AspectType. */
  description?: string;
  /** Required. MetadataTemplate of the aspect. */
  metadataTemplate?: GoogleCloudDataplexV1AspectTypeMetadataTemplate;
  /** Optional. User-defined labels for the AspectType. */
  labels?: Record<string, string>;
  /** Output only. The time when the AspectType was last updated. */
  updateTime?: string;
  /** Output only. System generated globally unique ID for the AspectType. If you delete and recreate the AspectType with the same name, then this ID will be different. */
  uid?: string;
  /** Output only. Denotes the transfer status of the Aspect Type. It is unspecified for Aspect Types created from Dataplex API. */
  transferStatus?:
    | "TRANSFER_STATUS_UNSPECIFIED"
    | "TRANSFER_STATUS_MIGRATED"
    | "TRANSFER_STATUS_TRANSFERRED"
    | (string & {});
  /** Optional. User friendly display name. */
  displayName?: string;
}

export const GoogleCloudDataplexV1AspectType: Schema.Schema<GoogleCloudDataplexV1AspectType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataClassification: Schema.optional(Schema.String),
    authorization: Schema.optional(
      GoogleCloudDataplexV1AspectTypeAuthorization,
    ),
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    metadataTemplate: Schema.optional(
      GoogleCloudDataplexV1AspectTypeMetadataTemplate,
    ),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    updateTime: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    transferStatus: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1AspectType" });

export interface GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility {
  /** Output only. Provides additional detail if the entity is incompatible with the metadata store. */
  reason?: string;
  /** Output only. Whether the entity is compatible and can be represented in the metadata store. */
  compatible?: boolean;
}

export const GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility: Schema.Schema<GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String),
    compatible: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility",
  });

export interface GoogleCloudDataplexV1EntityCompatibilityStatus {
  /** Output only. Whether this entity is compatible with Hive Metastore. */
  hiveMetastore?: GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility;
  /** Output only. Whether this entity is compatible with BigQuery. */
  bigquery?: GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility;
}

export const GoogleCloudDataplexV1EntityCompatibilityStatus: Schema.Schema<GoogleCloudDataplexV1EntityCompatibilityStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hiveMetastore: Schema.optional(
      GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility,
    ),
    bigquery: Schema.optional(
      GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility,
    ),
  }).annotate({ identifier: "GoogleCloudDataplexV1EntityCompatibilityStatus" });

export interface GoogleCloudDataplexV1DataScanEventDataProfileAppliedConfigs {
  /** Boolean indicating whether a column filter was applied in the DataScan job. */
  columnFilterApplied?: boolean;
  /** Boolean indicating whether a row filter was applied in the DataScan job. */
  rowFilterApplied?: boolean;
  /** The percentage of the records selected from the dataset for DataScan. Value ranges between 0.0 and 100.0. Value 0.0 or 100.0 imply that sampling was not applied. */
  samplingPercent?: number;
}

export const GoogleCloudDataplexV1DataScanEventDataProfileAppliedConfigs: Schema.Schema<GoogleCloudDataplexV1DataScanEventDataProfileAppliedConfigs> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    columnFilterApplied: Schema.optional(Schema.Boolean),
    rowFilterApplied: Schema.optional(Schema.Boolean),
    samplingPercent: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataScanEventDataProfileAppliedConfigs",
  });

export interface GoogleCloudDataplexV1DataScanEventPostScanActionsResultBigQueryExportResult {
  /** Additional information about the BigQuery exporting. */
  message?: string;
  /** Execution state for the BigQuery exporting. */
  state?:
    | "STATE_UNSPECIFIED"
    | "SUCCEEDED"
    | "FAILED"
    | "SKIPPED"
    | (string & {});
}

export const GoogleCloudDataplexV1DataScanEventPostScanActionsResultBigQueryExportResult: Schema.Schema<GoogleCloudDataplexV1DataScanEventPostScanActionsResultBigQueryExportResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDataplexV1DataScanEventPostScanActionsResultBigQueryExportResult",
  });

export interface GoogleCloudDataplexV1DataScanEventPostScanActionsResult {
  /** The result of BigQuery export post scan action. */
  bigqueryExportResult?: GoogleCloudDataplexV1DataScanEventPostScanActionsResultBigQueryExportResult;
}

export const GoogleCloudDataplexV1DataScanEventPostScanActionsResult: Schema.Schema<GoogleCloudDataplexV1DataScanEventPostScanActionsResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bigqueryExportResult: Schema.optional(
      GoogleCloudDataplexV1DataScanEventPostScanActionsResultBigQueryExportResult,
    ),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataScanEventPostScanActionsResult",
  });

export interface GoogleCloudDataplexV1DataScanEventDataQualityAppliedConfigs {
  /** Boolean indicating whether a row filter was applied in the DataScan job. */
  rowFilterApplied?: boolean;
  /** The percentage of the records selected from the dataset for DataScan. Value ranges between 0.0 and 100.0. Value 0.0 or 100.0 imply that sampling was not applied. */
  samplingPercent?: number;
}

export const GoogleCloudDataplexV1DataScanEventDataQualityAppliedConfigs: Schema.Schema<GoogleCloudDataplexV1DataScanEventDataQualityAppliedConfigs> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rowFilterApplied: Schema.optional(Schema.Boolean),
    samplingPercent: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataScanEventDataQualityAppliedConfigs",
  });

export interface GoogleCloudDataplexV1DataScanEventDataProfileResult {
  /** The count of rows processed in the data scan job. */
  rowCount?: string;
}

export const GoogleCloudDataplexV1DataScanEventDataProfileResult: Schema.Schema<GoogleCloudDataplexV1DataScanEventDataProfileResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rowCount: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DataScanEventDataProfileResult",
  });

export interface GoogleCloudDataplexV1DataScanEvent {
  /** Applied configs for data profile type data scan. */
  dataProfileConfigs?: GoogleCloudDataplexV1DataScanEventDataProfileAppliedConfigs;
  /** The type of the data scan. */
  type?:
    | "SCAN_TYPE_UNSPECIFIED"
    | "DATA_PROFILE"
    | "DATA_QUALITY"
    | "DATA_DISCOVERY"
    | (string & {});
  /** The data source of the data scan */
  dataSource?: string;
  /** The time when the data scan job started to run. */
  startTime?: string;
  /** The time when the data scan job was created. */
  createTime?: string;
  /** The scope of the data scan (e.g. full, incremental). */
  scope?: "SCOPE_UNSPECIFIED" | "FULL" | "INCREMENTAL" | (string & {});
  /** The time when the data scan job finished. */
  endTime?: string;
  /** Data quality result for data quality type data scan. */
  dataQuality?: GoogleCloudDataplexV1DataScanEventDataQualityResult;
  /** The trigger type of the data scan job. */
  trigger?:
    | "TRIGGER_UNSPECIFIED"
    | "ON_DEMAND"
    | "SCHEDULE"
    | "ONE_TIME"
    | (string & {});
  /** The identifier of the specific data scan job this log entry is for. */
  jobId?: string;
  /** The status of publishing the data scan as Dataplex Universal Catalog metadata. */
  catalogPublishingStatus?: GoogleCloudDataplexV1DataScanCatalogPublishingStatus;
  /** A version identifier of the spec which was used to execute this job. */
  specVersion?: string;
  /** The result of post scan actions. */
  postScanActionsResult?: GoogleCloudDataplexV1DataScanEventPostScanActionsResult;
  /** The message describing the data scan job event. */
  message?: string;
  /** Applied configs for data quality type data scan. */
  dataQualityConfigs?: GoogleCloudDataplexV1DataScanEventDataQualityAppliedConfigs;
  /** The status of the data scan job. */
  state?:
    | "STATE_UNSPECIFIED"
    | "STARTED"
    | "SUCCEEDED"
    | "FAILED"
    | "CANCELLED"
    | "CREATED"
    | (string & {});
  /** Data profile result for data profile type data scan. */
  dataProfile?: GoogleCloudDataplexV1DataScanEventDataProfileResult;
}

export const GoogleCloudDataplexV1DataScanEvent: Schema.Schema<GoogleCloudDataplexV1DataScanEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataProfileConfigs: Schema.optional(
      GoogleCloudDataplexV1DataScanEventDataProfileAppliedConfigs,
    ),
    type: Schema.optional(Schema.String),
    dataSource: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    dataQuality: Schema.optional(
      GoogleCloudDataplexV1DataScanEventDataQualityResult,
    ),
    trigger: Schema.optional(Schema.String),
    jobId: Schema.optional(Schema.String),
    catalogPublishingStatus: Schema.optional(
      GoogleCloudDataplexV1DataScanCatalogPublishingStatus,
    ),
    specVersion: Schema.optional(Schema.String),
    postScanActionsResult: Schema.optional(
      GoogleCloudDataplexV1DataScanEventPostScanActionsResult,
    ),
    message: Schema.optional(Schema.String),
    dataQualityConfigs: Schema.optional(
      GoogleCloudDataplexV1DataScanEventDataQualityAppliedConfigs,
    ),
    state: Schema.optional(Schema.String),
    dataProfile: Schema.optional(
      GoogleCloudDataplexV1DataScanEventDataProfileResult,
    ),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataScanEvent" });

export interface GoogleCloudDataplexV1DataScanJob {
  /** Output only. System generated globally unique ID for the DataScanJob. */
  uid?: string;
  /** Output only. The time when the DataScanJob ended. */
  endTime?: string;
  /** Output only. The time when the DataScanJob was created. */
  createTime?: string;
  /** Output only. Settings for a data discovery scan. */
  dataDiscoverySpec?: GoogleCloudDataplexV1DataDiscoverySpec;
  /** Output only. The type of the parent DataScan. */
  type?:
    | "DATA_SCAN_TYPE_UNSPECIFIED"
    | "DATA_QUALITY"
    | "DATA_PROFILE"
    | "DATA_DISCOVERY"
    | "DATA_DOCUMENTATION"
    | (string & {});
  /** Output only. The result of a data discovery scan. */
  dataDiscoveryResult?: GoogleCloudDataplexV1DataDiscoveryResult;
  /** Output only. The time when the DataScanJob was started. */
  startTime?: string;
  /** Output only. Additional information about the current state. */
  message?: string;
  /** Output only. The result of a data quality scan. */
  dataQualityResult?: GoogleCloudDataplexV1DataQualityResult;
  /** Output only. Execution state for the DataScanJob. */
  state?:
    | "STATE_UNSPECIFIED"
    | "RUNNING"
    | "CANCELING"
    | "CANCELLED"
    | "SUCCEEDED"
    | "FAILED"
    | "PENDING"
    | "SUCCEEDED_WITH_ERRORS"
    | (string & {});
  /** Output only. The result of a data documentation scan. */
  dataDocumentationResult?: GoogleCloudDataplexV1DataDocumentationResult;
  /** Output only. A message indicating partial failure details. */
  partialFailureMessage?: string;
  /** Output only. Settings for a data quality scan. */
  dataQualitySpec?: GoogleCloudDataplexV1DataQualitySpec;
  /** Output only. The result of a data profile scan. */
  dataProfileResult?: GoogleCloudDataplexV1DataProfileResult;
  /** Output only. Identifier. The relative resource name of the DataScanJob, of the form: projects/{project}/locations/{location_id}/dataScans/{datascan_id}/jobs/{job_id}, where project refers to a project_id or project_number and location_id refers to a Google Cloud region. */
  name?: string;
  /** Output only. Settings for a data profile scan. */
  dataProfileSpec?: GoogleCloudDataplexV1DataProfileSpec;
  /** Output only. Settings for a data documentation scan. */
  dataDocumentationSpec?: GoogleCloudDataplexV1DataDocumentationSpec;
}

export const GoogleCloudDataplexV1DataScanJob: Schema.Schema<GoogleCloudDataplexV1DataScanJob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uid: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    dataDiscoverySpec: Schema.optional(GoogleCloudDataplexV1DataDiscoverySpec),
    type: Schema.optional(Schema.String),
    dataDiscoveryResult: Schema.optional(
      GoogleCloudDataplexV1DataDiscoveryResult,
    ),
    startTime: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    dataQualityResult: Schema.optional(GoogleCloudDataplexV1DataQualityResult),
    state: Schema.optional(Schema.String),
    dataDocumentationResult: Schema.optional(
      GoogleCloudDataplexV1DataDocumentationResult,
    ),
    partialFailureMessage: Schema.optional(Schema.String),
    dataQualitySpec: Schema.optional(GoogleCloudDataplexV1DataQualitySpec),
    dataProfileResult: Schema.optional(GoogleCloudDataplexV1DataProfileResult),
    name: Schema.optional(Schema.String),
    dataProfileSpec: Schema.optional(GoogleCloudDataplexV1DataProfileSpec),
    dataDocumentationSpec: Schema.optional(
      GoogleCloudDataplexV1DataDocumentationSpec,
    ),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataScanJob" });

export interface GoogleCloudDataplexV1RunDataScanResponse {
  /** DataScanJob created by RunDataScan request. */
  job?: GoogleCloudDataplexV1DataScanJob;
}

export const GoogleCloudDataplexV1RunDataScanResponse: Schema.Schema<GoogleCloudDataplexV1RunDataScanResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    job: Schema.optional(GoogleCloudDataplexV1DataScanJob),
  }).annotate({ identifier: "GoogleCloudDataplexV1RunDataScanResponse" });

export interface GoogleCloudDataplexV1ResourceAccessSpec {
  /** Optional. The format of strings follows the pattern followed by IAM in the bindings. user:{email}, serviceAccount:{email} group:{email}. The set of principals to be granted reader role on the resource. */
  readers?: ReadonlyArray<string>;
  /** Optional. The set of principals to be granted writer role on the resource. */
  writers?: ReadonlyArray<string>;
  /** Optional. The set of principals to be granted owner role on the resource. */
  owners?: ReadonlyArray<string>;
}

export const GoogleCloudDataplexV1ResourceAccessSpec: Schema.Schema<GoogleCloudDataplexV1ResourceAccessSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    readers: Schema.optional(Schema.Array(Schema.String)),
    writers: Schema.optional(Schema.Array(Schema.String)),
    owners: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDataplexV1ResourceAccessSpec" });

export interface GoogleCloudDataplexV1DataAttribute {
  /** Output only. The relative resource name of the dataAttribute, of the form: projects/{project_number}/locations/{location_id}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id}. */
  name?: string;
  /** Output only. The time when the DataAttribute was created. */
  createTime?: string;
  /** Optional. The ID of the parent DataAttribute resource, should belong to the same data taxonomy. Circular dependency in parent chain is not valid. Maximum depth of the hierarchy allowed is 4. a -> b -> c -> d -> e, depth = 4 */
  parentId?: string;
  /** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Optional. Specified when applied to data stored on the resource (eg: rows, columns in BigQuery Tables). */
  dataAccessSpec?: GoogleCloudDataplexV1DataAccessSpec;
  /** Optional. User-defined labels for the DataAttribute. */
  labels?: Record<string, string>;
  /** Optional. Specified when applied to a resource (eg: Cloud Storage bucket, BigQuery dataset, BigQuery table). */
  resourceAccessSpec?: GoogleCloudDataplexV1ResourceAccessSpec;
  /** Output only. The number of child attributes present for this attribute. */
  attributeCount?: number;
  /** Optional. Description of the DataAttribute. */
  description?: string;
  /** Optional. User friendly display name. */
  displayName?: string;
  /** Output only. System generated globally unique ID for the DataAttribute. This ID will be different if the DataAttribute is deleted and re-created with the same name. */
  uid?: string;
  /** Output only. The time when the DataAttribute was last updated. */
  updateTime?: string;
}

export const GoogleCloudDataplexV1DataAttribute: Schema.Schema<GoogleCloudDataplexV1DataAttribute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    parentId: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    dataAccessSpec: Schema.optional(GoogleCloudDataplexV1DataAccessSpec),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    resourceAccessSpec: Schema.optional(
      GoogleCloudDataplexV1ResourceAccessSpec,
    ),
    attributeCount: Schema.optional(Schema.Number),
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataAttribute" });

export interface GoogleCloudDataplexV1ListDataAttributesResponse {
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachableLocations?: ReadonlyArray<string>;
  /** DataAttributes under the given parent DataTaxonomy. */
  dataAttributes?: ReadonlyArray<GoogleCloudDataplexV1DataAttribute>;
}

export const GoogleCloudDataplexV1ListDataAttributesResponse: Schema.Schema<GoogleCloudDataplexV1ListDataAttributesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachableLocations: Schema.optional(Schema.Array(Schema.String)),
    dataAttributes: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1DataAttribute),
    ),
  }).annotate({
    identifier: "GoogleCloudDataplexV1ListDataAttributesResponse",
  });

export interface GoogleCloudDataplexV1GovernanceEventEntity {
  /** Type of entity. */
  entityType?: "ENTITY_TYPE_UNSPECIFIED" | "TABLE" | "FILESET" | (string & {});
  /** The Entity resource the log event is associated with. Format: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id} */
  entity?: string;
}

export const GoogleCloudDataplexV1GovernanceEventEntity: Schema.Schema<GoogleCloudDataplexV1GovernanceEventEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityType: Schema.optional(Schema.String),
    entity: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1GovernanceEventEntity" });

export interface GoogleCloudDataplexV1ListDataScanJobsResponse {
  /** DataScanJobs (BASIC view only) under a given dataScan. */
  dataScanJobs?: ReadonlyArray<GoogleCloudDataplexV1DataScanJob>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const GoogleCloudDataplexV1ListDataScanJobsResponse: Schema.Schema<GoogleCloudDataplexV1ListDataScanJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataScanJobs: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1DataScanJob),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1ListDataScanJobsResponse" });

export interface GoogleCloudDataplexV1RunTaskResponse {
  /** Jobs created by RunTask API. */
  job?: GoogleCloudDataplexV1Job;
}

export const GoogleCloudDataplexV1RunTaskResponse: Schema.Schema<GoogleCloudDataplexV1RunTaskResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    job: Schema.optional(GoogleCloudDataplexV1Job),
  }).annotate({ identifier: "GoogleCloudDataplexV1RunTaskResponse" });

export interface GoogleCloudDataplexV1DiscoveryEventActionDetails {
  /** The human readable issue associated with the action. */
  issue?: string;
  /** The type of action. Eg. IncompatibleDataSchema, InvalidDataFormat */
  type?: string;
}

export const GoogleCloudDataplexV1DiscoveryEventActionDetails: Schema.Schema<GoogleCloudDataplexV1DiscoveryEventActionDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    issue: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DiscoveryEventActionDetails",
  });

export interface GoogleCloudDataplexV1LakeMetastore {
  /** Optional. A relative reference to the Dataproc Metastore (https://cloud.google.com/dataproc-metastore/docs) service associated with the lake: projects/{project_id}/locations/{location_id}/services/{service_id} */
  service?: string;
}

export const GoogleCloudDataplexV1LakeMetastore: Schema.Schema<GoogleCloudDataplexV1LakeMetastore> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1LakeMetastore" });

export interface GoogleCloudDataplexV1GenerateDataQualityRulesRequest {}

export const GoogleCloudDataplexV1GenerateDataQualityRulesRequest: Schema.Schema<GoogleCloudDataplexV1GenerateDataQualityRulesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDataplexV1GenerateDataQualityRulesRequest",
  });

export interface GoogleCloudDataplexV1StorageFormatIcebergOptions {
  /** Optional. The location of where the iceberg metadata is present, must be within the table path */
  metadataLocation?: string;
}

export const GoogleCloudDataplexV1StorageFormatIcebergOptions: Schema.Schema<GoogleCloudDataplexV1StorageFormatIcebergOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadataLocation: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1StorageFormatIcebergOptions",
  });

export interface GoogleCloudDataplexV1StorageFormatJsonOptions {
  /** Optional. The character encoding of the data. Accepts "US-ASCII", "UTF-8" and "ISO-8859-1". Defaults to UTF-8 if not specified. */
  encoding?: string;
}

export const GoogleCloudDataplexV1StorageFormatJsonOptions: Schema.Schema<GoogleCloudDataplexV1StorageFormatJsonOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encoding: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1StorageFormatJsonOptions" });

export interface GoogleCloudDataplexV1StorageFormatCsvOptions {
  /** Optional. The delimiter used to separate values. Defaults to ','. */
  delimiter?: string;
  /** Optional. The character used to quote column values. Accepts '"' (double quotation mark) or ''' (single quotation mark). Defaults to '"' (double quotation mark) if unspecified. */
  quote?: string;
  /** Optional. The character encoding of the data. Accepts "US-ASCII", "UTF-8", and "ISO-8859-1". Defaults to UTF-8 if unspecified. */
  encoding?: string;
  /** Optional. The number of rows to interpret as header rows that should be skipped when reading data rows. Defaults to 0. */
  headerRows?: number;
}

export const GoogleCloudDataplexV1StorageFormatCsvOptions: Schema.Schema<GoogleCloudDataplexV1StorageFormatCsvOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    delimiter: Schema.optional(Schema.String),
    quote: Schema.optional(Schema.String),
    encoding: Schema.optional(Schema.String),
    headerRows: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleCloudDataplexV1StorageFormatCsvOptions" });

export interface GoogleCloudDataplexV1StorageFormat {
  /** Optional. Additional information about iceberg tables. */
  iceberg?: GoogleCloudDataplexV1StorageFormatIcebergOptions;
  /** Optional. Additional information about CSV formatted data. */
  json?: GoogleCloudDataplexV1StorageFormatJsonOptions;
  /** Output only. The data format associated with the stored data, which represents content type values. The value is inferred from mime type. */
  format?:
    | "FORMAT_UNSPECIFIED"
    | "PARQUET"
    | "AVRO"
    | "ORC"
    | "CSV"
    | "JSON"
    | "IMAGE"
    | "AUDIO"
    | "VIDEO"
    | "TEXT"
    | "TFRECORD"
    | "OTHER"
    | "UNKNOWN"
    | (string & {});
  /** Required. The mime type descriptor for the data. Must match the pattern {type}/{subtype}. Supported values: application/x-parquet application/x-avro application/x-orc application/x-tfrecord application/x-parquet+iceberg application/x-avro+iceberg application/x-orc+iceberg application/json application/{subtypes} text/csv text/ image/{image subtype} video/{video subtype} audio/{audio subtype} */
  mimeType?: string;
  /** Optional. The compression type associated with the stored data. If unspecified, the data is uncompressed. */
  compressionFormat?:
    | "COMPRESSION_FORMAT_UNSPECIFIED"
    | "GZIP"
    | "BZIP2"
    | (string & {});
  /** Optional. Additional information about CSV formatted data. */
  csv?: GoogleCloudDataplexV1StorageFormatCsvOptions;
}

export const GoogleCloudDataplexV1StorageFormat: Schema.Schema<GoogleCloudDataplexV1StorageFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    iceberg: Schema.optional(GoogleCloudDataplexV1StorageFormatIcebergOptions),
    json: Schema.optional(GoogleCloudDataplexV1StorageFormatJsonOptions),
    format: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
    compressionFormat: Schema.optional(Schema.String),
    csv: Schema.optional(GoogleCloudDataplexV1StorageFormatCsvOptions),
  }).annotate({ identifier: "GoogleCloudDataplexV1StorageFormat" });

export interface GoogleCloudDataplexV1StorageAccess {
  /** Output only. Describes the read access mechanism of the data. Not user settable. */
  read?: "ACCESS_MODE_UNSPECIFIED" | "DIRECT" | "MANAGED" | (string & {});
}

export const GoogleCloudDataplexV1StorageAccess: Schema.Schema<GoogleCloudDataplexV1StorageAccess> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    read: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1StorageAccess" });

export interface GoogleCloudDataplexV1Entity {
  /** Optional. The set of items within the data path constituting the data in the entity, represented as a glob path. Example: gs://bucket/path/to/data/** /*.csv. */
  dataPathPattern?: string;
  /** Output only. The name of the associated Data Catalog entry. */
  catalogEntry?: string;
  /** Optional. Display name must be shorter than or equal to 256 characters. */
  displayName?: string;
  /** Required. Immutable. The storage path of the entity data. For Cloud Storage data, this is the fully-qualified path to the entity, such as gs://bucket/path/to/data. For BigQuery data, this is the name of the table resource, such as projects/project_id/datasets/dataset_id/tables/table_id. */
  dataPath?: string;
  /** Required. Identifies the storage format of the entity data. It does not apply to entities with data stored in BigQuery. */
  format?: GoogleCloudDataplexV1StorageFormat;
  /** Optional. The etag associated with the entity, which can be retrieved with a GetEntity request. Required for update and delete requests. */
  etag?: string;
  /** Required. The description of the data structure and layout. The schema is not included in list responses. It is only included in SCHEMA and FULL entity views of a GetEntity response. */
  schema?: GoogleCloudDataplexV1Schema;
  /** Output only. Identifies the access mechanism to the entity. Not user settable. */
  access?: GoogleCloudDataplexV1StorageAccess;
  /** Output only. The resource name of the entity, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{id}. */
  name?: string;
  /** Required. Immutable. The ID of the asset associated with the storage location containing the entity data. The entity must be with in the same zone with the asset. */
  asset?: string;
  /** Output only. The time when the entity was last updated. */
  updateTime?: string;
  /** Output only. System generated unique ID for the Entity. This ID will be different if the Entity is deleted and re-created with the same name. */
  uid?: string;
  /** Output only. Metadata stores that the entity is compatible with. */
  compatibility?: GoogleCloudDataplexV1EntityCompatibilityStatus;
  /** Optional. User friendly longer description text. Must be shorter than or equal to 1024 characters. */
  description?: string;
  /** Output only. The time when the entity was created. */
  createTime?: string;
  /** Required. Immutable. Identifies the storage system of the entity data. */
  system?:
    | "STORAGE_SYSTEM_UNSPECIFIED"
    | "CLOUD_STORAGE"
    | "BIGQUERY"
    | (string & {});
  /** Required. Immutable. The type of entity. */
  type?: "TYPE_UNSPECIFIED" | "TABLE" | "FILESET" | (string & {});
  /** Required. A user-provided entity ID. It is mutable, and will be used as the published table name. Specifying a new ID in an update entity request will override the existing value. The ID must contain only letters (a-z, A-Z), numbers (0-9), and underscores, and consist of 256 or fewer characters. */
  id?: string;
}

export const GoogleCloudDataplexV1Entity: Schema.Schema<GoogleCloudDataplexV1Entity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataPathPattern: Schema.optional(Schema.String),
    catalogEntry: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    dataPath: Schema.optional(Schema.String),
    format: Schema.optional(GoogleCloudDataplexV1StorageFormat),
    etag: Schema.optional(Schema.String),
    schema: Schema.optional(GoogleCloudDataplexV1Schema),
    access: Schema.optional(GoogleCloudDataplexV1StorageAccess),
    name: Schema.optional(Schema.String),
    asset: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    compatibility: Schema.optional(
      GoogleCloudDataplexV1EntityCompatibilityStatus,
    ),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    system: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1Entity" });

export interface GoogleCloudDataplexV1ListEntitiesResponse {
  /** Entities in the specified parent zone. */
  entities?: ReadonlyArray<GoogleCloudDataplexV1Entity>;
  /** Token to retrieve the next page of results, or empty if there are no remaining results in the list. */
  nextPageToken?: string;
}

export const GoogleCloudDataplexV1ListEntitiesResponse: Schema.Schema<GoogleCloudDataplexV1ListEntitiesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entities: Schema.optional(Schema.Array(GoogleCloudDataplexV1Entity)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1ListEntitiesResponse" });

export interface GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions {
  /** Optional. The character encoding of the data. The default is UTF-8. */
  encoding?: string;
  /** Optional. Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean). */
  disableTypeInference?: boolean;
}

export const GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions: Schema.Schema<GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encoding: Schema.optional(Schema.String),
    disableTypeInference: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions",
  });

export interface GoogleCloudDataplexV1AssetDiscoverySpec {
  /** Optional. The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names. */
  includePatterns?: ReadonlyArray<string>;
  /** Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes.To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. */
  schedule?: string;
  /** Optional. Configuration for CSV data. */
  csvOptions?: GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions;
  /** Optional. Configuration for Json data. */
  jsonOptions?: GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions;
  /** Optional. Whether discovery is enabled. */
  enabled?: boolean;
  /** Optional. The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names. */
  excludePatterns?: ReadonlyArray<string>;
}

export const GoogleCloudDataplexV1AssetDiscoverySpec: Schema.Schema<GoogleCloudDataplexV1AssetDiscoverySpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includePatterns: Schema.optional(Schema.Array(Schema.String)),
    schedule: Schema.optional(Schema.String),
    csvOptions: Schema.optional(
      GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions,
    ),
    jsonOptions: Schema.optional(
      GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions,
    ),
    enabled: Schema.optional(Schema.Boolean),
    excludePatterns: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDataplexV1AssetDiscoverySpec" });

export interface GoogleCloudDataplexV1JobEvent {
  /** The unique id identifying the job. */
  jobId?: string;
  /** Job execution trigger. */
  executionTrigger?:
    | "EXECUTION_TRIGGER_UNSPECIFIED"
    | "TASK_CONFIG"
    | "RUN_REQUEST"
    | (string & {});
  /** The type of the job. */
  type?: "TYPE_UNSPECIFIED" | "SPARK" | "NOTEBOOK" | (string & {});
  /** The time when the job started running. */
  startTime?: string;
  /** The time when the job ended running. */
  endTime?: string;
  /** The log message. */
  message?: string;
  /** The service used to execute the job. */
  service?: "SERVICE_UNSPECIFIED" | "DATAPROC" | (string & {});
  /** The job state on completion. */
  state?:
    | "STATE_UNSPECIFIED"
    | "SUCCEEDED"
    | "FAILED"
    | "CANCELLED"
    | "ABORTED"
    | (string & {});
  /** The number of retries. */
  retries?: number;
  /** The reference to the job within the service. */
  serviceJob?: string;
}

export const GoogleCloudDataplexV1JobEvent: Schema.Schema<GoogleCloudDataplexV1JobEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobId: Schema.optional(Schema.String),
    executionTrigger: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    service: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    retries: Schema.optional(Schema.Number),
    serviceJob: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1JobEvent" });

export interface GoogleCloudDataplexV1ListZonesResponse {
  /** Zones under the given parent lake. */
  zones?: ReadonlyArray<GoogleCloudDataplexV1Zone>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const GoogleCloudDataplexV1ListZonesResponse: Schema.Schema<GoogleCloudDataplexV1ListZonesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zones: Schema.optional(Schema.Array(GoogleCloudDataplexV1Zone)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1ListZonesResponse" });

export interface GoogleCloudDataplexV1MetadataFeedFilters {
  /** Optional. The aspect types that you want to listen to. Depending on how the aspect is attached to the entry, in the format: projects/{project_id_or_number}/locations/{location}/aspectTypes/{aspect_type_id}. */
  aspectTypes?: ReadonlyArray<string>;
  /** Optional. The entry types that you want to listen to, specified as relative resource names in the format projects/{project_id_or_number}/locations/{location}/entryTypes/{entry_type_id}. Only entries that belong to the specified entry types are published. */
  entryTypes?: ReadonlyArray<string>;
  /** Optional. The type of change that you want to listen to. If not specified, all changes are published. */
  changeTypes?: ReadonlyArray<
    "CHANGE_TYPE_UNSPECIFIED" | "CREATE" | "UPDATE" | "DELETE" | (string & {})
  >;
}

export const GoogleCloudDataplexV1MetadataFeedFilters: Schema.Schema<GoogleCloudDataplexV1MetadataFeedFilters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aspectTypes: Schema.optional(Schema.Array(Schema.String)),
    entryTypes: Schema.optional(Schema.Array(Schema.String)),
    changeTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDataplexV1MetadataFeedFilters" });

export interface GoogleIamV1TestIamPermissionsResponse {
  /** A subset of TestPermissionsRequest.permissions that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const GoogleIamV1TestIamPermissionsResponse: Schema.Schema<GoogleIamV1TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleIamV1TestIamPermissionsResponse" });

export interface GoogleCloudDataplexV1DataProductPrincipal {
  /** Optional. Email of the Google Group, as per https://cloud.google.com/iam/docs/principals-overview#google-group. */
  googleGroup?: string;
}

export const GoogleCloudDataplexV1DataProductPrincipal: Schema.Schema<GoogleCloudDataplexV1DataProductPrincipal> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    googleGroup: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataProductPrincipal" });

export interface GoogleCloudDataplexV1DataProductAccessGroup {
  /** Required. Unique identifier of the access group within the data product. User defined. Eg. "analyst", "developer", etc. */
  id?: string;
  /** Required. User friendly display name of the access group. Eg. "Analyst", "Developer", etc. */
  displayName?: string;
  /** Required. The principal entity associated with this access group. */
  principal?: GoogleCloudDataplexV1DataProductPrincipal;
  /** Optional. Description of the access group. */
  description?: string;
}

export const GoogleCloudDataplexV1DataProductAccessGroup: Schema.Schema<GoogleCloudDataplexV1DataProductAccessGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    principal: Schema.optional(GoogleCloudDataplexV1DataProductPrincipal),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataProductAccessGroup" });

export interface GoogleCloudDataplexV1DataProduct {
  /** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. The time at which the data product was created. */
  createTime?: string;
  /** Optional. Base64 encoded image representing the data product. Max Size: 3.0MiB Expected image dimensions are 512x512 pixels, however the API only performs validation on size of the encoded data. Note: For byte fields, the content of the fields are base64-encoded (which increases the size of the data by 33-36%) when using JSON on the wire. */
  icon?: string;
  /** Identifier. Resource name of the data product. Format: projects/{project_id_or_number}/locations/{location_id}/dataProducts/{data_product_id}. */
  name?: string;
  /** Output only. The time at which the data product was last updated. */
  updateTime?: string;
  /** Required. User-friendly display name of the data product. */
  displayName?: string;
  /** Optional. Data product access groups by access group id as key. If data product is used only for packaging data assets, then access groups may be empty. However, if a data product is used for sharing data assets, then at least one access group must be specified.Example: { "analyst": { "id": "analyst", "displayName": "Analyst", "description": "Access group for analysts", "principal": { "googleGroup": "analysts@example.com" } } } */
  accessGroups?: Record<string, GoogleCloudDataplexV1DataProductAccessGroup>;
  /** Output only. System generated unique ID for the data product. This ID will be different if the data product is deleted and re-created with the same name. */
  uid?: string;
  /** Optional. Description of the data product. */
  description?: string;
  /** Required. Emails of the data product owners. */
  ownerEmails?: ReadonlyArray<string>;
  /** Output only. Number of data assets associated with this data product. */
  assetCount?: number;
  /** Optional. User-defined labels for the data product.Example: { "environment": "production", "billing": "marketing-department" } */
  labels?: Record<string, string>;
}

export const GoogleCloudDataplexV1DataProduct: Schema.Schema<GoogleCloudDataplexV1DataProduct> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    icon: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    accessGroups: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudDataplexV1DataProductAccessGroup),
    ),
    uid: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    ownerEmails: Schema.optional(Schema.Array(Schema.String)),
    assetCount: Schema.optional(Schema.Number),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataProduct" });

export interface GoogleCloudDataplexV1LookupContextResponse {
  /** Pre-formatted block of text containing the context for the requested resources. */
  context?: string;
}

export const GoogleCloudDataplexV1LookupContextResponse: Schema.Schema<GoogleCloudDataplexV1LookupContextResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    context: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1LookupContextResponse" });

export interface GoogleCloudDataplexV1EntryLinkEvent {
  /** The log message. */
  message?: string;
  /** The type of the event. */
  eventType?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "ENTRY_LINK_CREATE"
    | "ENTRY_LINK_DELETE"
    | (string & {});
  /** Name of the resource. */
  resource?: string;
}

export const GoogleCloudDataplexV1EntryLinkEvent: Schema.Schema<GoogleCloudDataplexV1EntryLinkEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    eventType: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1EntryLinkEvent" });

export interface GoogleCloudDataplexV1AssetDiscoveryStatusStats {
  /** The count of fileset entities within the referenced resource. */
  filesets?: string;
  /** The count of data items within the referenced resource. */
  dataItems?: string;
  /** The number of stored data bytes within the referenced resource. */
  dataSize?: string;
  /** The count of table entities within the referenced resource. */
  tables?: string;
}

export const GoogleCloudDataplexV1AssetDiscoveryStatusStats: Schema.Schema<GoogleCloudDataplexV1AssetDiscoveryStatusStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filesets: Schema.optional(Schema.String),
    dataItems: Schema.optional(Schema.String),
    dataSize: Schema.optional(Schema.String),
    tables: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1AssetDiscoveryStatusStats" });

export interface GoogleCloudDataplexV1ListGlossariesResponse {
  /** Lists the Glossaries in the specified parent. */
  glossaries?: ReadonlyArray<GoogleCloudDataplexV1Glossary>;
  /** A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Locations that the service couldn't reach. */
  unreachableLocations?: ReadonlyArray<string>;
}

export const GoogleCloudDataplexV1ListGlossariesResponse: Schema.Schema<GoogleCloudDataplexV1ListGlossariesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    glossaries: Schema.optional(Schema.Array(GoogleCloudDataplexV1Glossary)),
    nextPageToken: Schema.optional(Schema.String),
    unreachableLocations: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDataplexV1ListGlossariesResponse" });

export interface GoogleCloudDataplexV1ImportItem {
  /** Information about an entry and its attached aspects. */
  entry?: GoogleCloudDataplexV1Entry;
  /** Information about the entry link. User should provide either one of the entry or entry_link. While providing entry_link, user should not provide update_mask and aspect_keys. */
  entryLink?: GoogleCloudDataplexV1EntryLink;
  /** The fields to update, in paths that are relative to the Entry resource. Separate each field with a comma.In FULL entry sync mode, Dataplex Universal Catalog includes the paths of all of the fields for an entry that can be modified, including aspects. This means that Dataplex Universal Catalog replaces the existing entry with the entry in the metadata import file. All modifiable fields are updated, regardless of the fields that are listed in the update mask, and regardless of whether a field is present in the entry object.The update_mask field is ignored when an entry is created or re-created.In an aspect-only metadata job (when entry sync mode is NONE), set this value to aspects.Dataplex Universal Catalog also determines which entries and aspects to modify by comparing the values and timestamps that you provide in the metadata import file with the values and timestamps that exist in your project. For more information, see Comparison logic (https://cloud.google.com/dataplex/docs/import-metadata#data-modification-logic). */
  updateMask?: string;
  /** The aspects to modify. Supports the following syntaxes: {aspect_type_reference}: matches aspects that belong to the specified aspect type and are attached directly to the entry. {aspect_type_reference}@{path}: matches aspects that belong to the specified aspect type and path. {aspect_type_reference}@* : matches aspects of the given type for all paths. *@path : matches aspects of all types on the given path.Replace {aspect_type_reference} with a reference to the aspect type, in the format {project_id_or_number}.{location_id}.{aspect_type_id}.In FULL entry sync mode, if you leave this field empty, it is treated as specifying exactly those aspects that are present within the specified entry. Dataplex Universal Catalog implicitly adds the keys for all of the required aspects of an entry. */
  aspectKeys?: ReadonlyArray<string>;
}

export const GoogleCloudDataplexV1ImportItem: Schema.Schema<GoogleCloudDataplexV1ImportItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entry: Schema.optional(GoogleCloudDataplexV1Entry),
    entryLink: Schema.optional(GoogleCloudDataplexV1EntryLink),
    updateMask: Schema.optional(Schema.String),
    aspectKeys: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDataplexV1ImportItem" });

export interface GoogleCloudDataplexV1DiscoveryEventPartitionDetails {
  /** The type of the containing entity resource. */
  type?: "ENTITY_TYPE_UNSPECIFIED" | "TABLE" | "FILESET" | (string & {});
  /** The locations of the data items (e.g., a Cloud Storage objects) sampled for metadata inference. */
  sampledDataLocations?: ReadonlyArray<string>;
  /** The name to the partition resource. The name is the fully-qualified resource name. */
  partition?: string;
  /** The name to the containing entity resource. The name is the fully-qualified resource name. */
  entity?: string;
}

export const GoogleCloudDataplexV1DiscoveryEventPartitionDetails: Schema.Schema<GoogleCloudDataplexV1DiscoveryEventPartitionDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    sampledDataLocations: Schema.optional(Schema.Array(Schema.String)),
    partition: Schema.optional(Schema.String),
    entity: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1DiscoveryEventPartitionDetails",
  });

export interface GoogleCloudDataplexV1DiscoveryEvent {
  /** The id of the associated asset. */
  assetId?: string;
  /** Details about the entity associated with the event. */
  entity?: GoogleCloudDataplexV1DiscoveryEventEntityDetails;
  /** The log message. */
  message?: string;
  /** The data location associated with the event. */
  dataLocation?: string;
  /** The id of the associated lake. */
  lakeId?: string;
  /** Details about the partition associated with the event. */
  partition?: GoogleCloudDataplexV1DiscoveryEventPartitionDetails;
  /** The id of the associated datascan for standalone discovery. */
  datascanId?: string;
  /** Details about the BigQuery table publishing associated with the event. */
  table?: GoogleCloudDataplexV1DiscoveryEventTableDetails;
  /** Details about the action associated with the event. */
  action?: GoogleCloudDataplexV1DiscoveryEventActionDetails;
  /** The id of the associated zone. */
  zoneId?: string;
  /** The type of the event being logged. */
  type?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "CONFIG"
    | "ENTITY_CREATED"
    | "ENTITY_UPDATED"
    | "ENTITY_DELETED"
    | "PARTITION_CREATED"
    | "PARTITION_UPDATED"
    | "PARTITION_DELETED"
    | "TABLE_PUBLISHED"
    | "TABLE_UPDATED"
    | "TABLE_IGNORED"
    | "TABLE_DELETED"
    | (string & {});
  /** Details about discovery configuration in effect. */
  config?: GoogleCloudDataplexV1DiscoveryEventConfigDetails;
}

export const GoogleCloudDataplexV1DiscoveryEvent: Schema.Schema<GoogleCloudDataplexV1DiscoveryEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assetId: Schema.optional(Schema.String),
    entity: Schema.optional(GoogleCloudDataplexV1DiscoveryEventEntityDetails),
    message: Schema.optional(Schema.String),
    dataLocation: Schema.optional(Schema.String),
    lakeId: Schema.optional(Schema.String),
    partition: Schema.optional(
      GoogleCloudDataplexV1DiscoveryEventPartitionDetails,
    ),
    datascanId: Schema.optional(Schema.String),
    table: Schema.optional(GoogleCloudDataplexV1DiscoveryEventTableDetails),
    action: Schema.optional(GoogleCloudDataplexV1DiscoveryEventActionDetails),
    zoneId: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    config: Schema.optional(GoogleCloudDataplexV1DiscoveryEventConfigDetails),
  }).annotate({ identifier: "GoogleCloudDataplexV1DiscoveryEvent" });

export interface GoogleCloudDataplexV1RunDataScanRequest {}

export const GoogleCloudDataplexV1RunDataScanRequest: Schema.Schema<GoogleCloudDataplexV1RunDataScanRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDataplexV1RunDataScanRequest",
  });

export interface GoogleCloudDataplexV1CancelMetadataJobRequest {}

export const GoogleCloudDataplexV1CancelMetadataJobRequest: Schema.Schema<GoogleCloudDataplexV1CancelMetadataJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDataplexV1CancelMetadataJobRequest",
  });

export interface GoogleLongrunningCancelOperationRequest {}

export const GoogleLongrunningCancelOperationRequest: Schema.Schema<GoogleLongrunningCancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleLongrunningCancelOperationRequest",
  });

export interface GoogleCloudDataplexV1ListDataProductsResponse {
  /** Unordered list. Locations that the service couldn't reach. */
  unreachable?: ReadonlyArray<string>;
  /** The data products for the requested filter criteria. */
  dataProducts?: ReadonlyArray<GoogleCloudDataplexV1DataProduct>;
  /** A token, which can be sent as page_token to retrieve the next page. If this field is empty, then there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudDataplexV1ListDataProductsResponse: Schema.Schema<GoogleCloudDataplexV1ListDataProductsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    dataProducts: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1DataProduct),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1ListDataProductsResponse" });

export interface GoogleCloudDataplexV1EncryptionConfigFailureDetails {
  /** Output only. The error code for the failure. */
  errorCode?:
    | "UNKNOWN"
    | "INTERNAL_ERROR"
    | "REQUIRE_USER_ACTION"
    | (string & {});
  /** Output only. The error message will be shown to the user. Set only if the error code is REQUIRE_USER_ACTION. */
  errorMessage?: string;
}

export const GoogleCloudDataplexV1EncryptionConfigFailureDetails: Schema.Schema<GoogleCloudDataplexV1EncryptionConfigFailureDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorCode: Schema.optional(Schema.String),
    errorMessage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDataplexV1EncryptionConfigFailureDetails",
  });

export interface GoogleCloudDataplexV1EncryptionConfig {
  /** Identifier. The resource name of the EncryptionConfig. Format: organizations/{organization}/locations/{location}/encryptionConfigs/{encryption_config} Global location is not supported. */
  name?: string;
  /** Output only. Details of the failure if anything related to Cmek db fails. */
  failureDetails?: GoogleCloudDataplexV1EncryptionConfigFailureDetails;
  /** Optional. If a key is chosen, it means that the customer is using CMEK. If a key is not chosen, it means that the customer is using Google managed encryption. */
  key?: string;
  /** Output only. The time when the Encryption configuration was last updated. */
  updateTime?: string;
  /** Etag of the EncryptionConfig. This is a strong etag. */
  etag?: string;
  /** Output only. The time when the Encryption configuration was created. */
  createTime?: string;
  /** Output only. The state of encryption of the databases. */
  encryptionState?:
    | "ENCRYPTION_STATE_UNSPECIFIED"
    | "ENCRYPTING"
    | "COMPLETED"
    | "FAILED"
    | (string & {});
  /** Optional. Represent the state of CMEK opt-in for metastore. */
  enableMetastoreEncryption?: boolean;
}

export const GoogleCloudDataplexV1EncryptionConfig: Schema.Schema<GoogleCloudDataplexV1EncryptionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    failureDetails: Schema.optional(
      GoogleCloudDataplexV1EncryptionConfigFailureDetails,
    ),
    key: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    encryptionState: Schema.optional(Schema.String),
    enableMetastoreEncryption: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDataplexV1EncryptionConfig" });

export interface GoogleCloudDataplexV1ListEncryptionConfigsResponse {
  /** The list of EncryptionConfigs under the given parent location. */
  encryptionConfigs?: ReadonlyArray<GoogleCloudDataplexV1EncryptionConfig>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachableLocations?: ReadonlyArray<string>;
}

export const GoogleCloudDataplexV1ListEncryptionConfigsResponse: Schema.Schema<GoogleCloudDataplexV1ListEncryptionConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encryptionConfigs: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1EncryptionConfig),
    ),
    nextPageToken: Schema.optional(Schema.String),
    unreachableLocations: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDataplexV1ListEncryptionConfigsResponse",
  });

export interface GoogleCloudDataplexV1GlossaryTerm {
  /** Optional. User friendly display name of the GlossaryTerm. This is user-mutable. This will be same as the GlossaryTermId, if not specified. */
  displayName?: string;
  /** Required. The immediate parent of the GlossaryTerm in the resource-hierarchy. It can either be a Glossary or a GlossaryCategory. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} OR projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/categories/{category_id} */
  parent?: string;
  /** Output only. System generated unique id for the GlossaryTerm. This ID will be different if the GlossaryTerm is deleted and re-created with the same name. */
  uid?: string;
  /** Output only. The time at which the GlossaryTerm was created. */
  createTime?: string;
  /** Output only. The time at which the GlossaryTerm was last updated. */
  updateTime?: string;
  /** Output only. Identifier. The resource name of the GlossaryTerm. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/terms/{term_id} */
  name?: string;
  /** Optional. User-defined labels for the GlossaryTerm. */
  labels?: Record<string, string>;
  /** Optional. The user-mutable description of the GlossaryTerm. */
  description?: string;
}

export const GoogleCloudDataplexV1GlossaryTerm: Schema.Schema<GoogleCloudDataplexV1GlossaryTerm> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1GlossaryTerm" });

export interface GoogleCloudDataplexV1ListEntryGroupsResponse {
  /** Entry groups under the given parent location. */
  entryGroups?: ReadonlyArray<GoogleCloudDataplexV1EntryGroup>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** Locations that the service couldn't reach. */
  unreachableLocations?: ReadonlyArray<string>;
}

export const GoogleCloudDataplexV1ListEntryGroupsResponse: Schema.Schema<GoogleCloudDataplexV1ListEntryGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entryGroups: Schema.optional(Schema.Array(GoogleCloudDataplexV1EntryGroup)),
    nextPageToken: Schema.optional(Schema.String),
    unreachableLocations: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDataplexV1ListEntryGroupsResponse" });

export interface GoogleCloudDataplexV1AssetDiscoveryStatus {
  /** The duration of the last discovery run. */
  lastRunDuration?: string;
  /** The start time of the last discovery run. */
  lastRunTime?: string;
  /** Data Stats of the asset reported by discovery. */
  stats?: GoogleCloudDataplexV1AssetDiscoveryStatusStats;
  /** Last update time of the status. */
  updateTime?: string;
  /** The current status of the discovery feature. */
  state?:
    | "STATE_UNSPECIFIED"
    | "SCHEDULED"
    | "IN_PROGRESS"
    | "PAUSED"
    | "DISABLED"
    | (string & {});
  /** Additional information about the current state. */
  message?: string;
}

export const GoogleCloudDataplexV1AssetDiscoveryStatus: Schema.Schema<GoogleCloudDataplexV1AssetDiscoveryStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastRunDuration: Schema.optional(Schema.String),
    lastRunTime: Schema.optional(Schema.String),
    stats: Schema.optional(GoogleCloudDataplexV1AssetDiscoveryStatusStats),
    updateTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1AssetDiscoveryStatus" });

export interface GoogleCloudDataplexV1LakeMetastoreStatus {
  /** Additional information about the current status. */
  message?: string;
  /** The URI of the endpoint used to access the Metastore service. */
  endpoint?: string;
  /** Last update time of the metastore status of the lake. */
  updateTime?: string;
  /** Current state of association. */
  state?:
    | "STATE_UNSPECIFIED"
    | "NONE"
    | "READY"
    | "UPDATING"
    | "ERROR"
    | (string & {});
}

export const GoogleCloudDataplexV1LakeMetastoreStatus: Schema.Schema<GoogleCloudDataplexV1LakeMetastoreStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    endpoint: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1LakeMetastoreStatus" });

export interface GoogleCloudDataplexV1MetadataFeed {
  /** Identifier. The resource name of the metadata feed, in the format projects/{project_id_or_number}/locations/{location_id}/metadataFeeds/{metadata_feed_id}. */
  name?: string;
  /** Optional. User-defined labels. */
  labels?: Record<string, string>;
  /** Output only. A system-generated, globally unique ID for the metadata job. If the metadata job is deleted and then re-created with the same name, this ID is different. */
  uid?: string;
  /** Output only. The time when the feed was created. */
  createTime?: string;
  /** Required. The scope of the metadata feed. Only the in scope changes are published. */
  scope?: GoogleCloudDataplexV1MetadataFeedScope;
  /** Optional. The filters of the metadata feed. Only the changes that match the filters are published. */
  filters?: GoogleCloudDataplexV1MetadataFeedFilters;
  /** Output only. The time when the feed was updated. */
  updateTime?: string;
  /** Optional. The pubsub topic that you want the metadata feed messages to publish to. Please grant Dataplex service account the permission to publish messages to the topic. The service account is: service-{PROJECT_NUMBER}@gcp-sa-dataplex.iam.gserviceaccount.com. */
  pubsubTopic?: string;
}

export const GoogleCloudDataplexV1MetadataFeed: Schema.Schema<GoogleCloudDataplexV1MetadataFeed> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    uid: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    scope: Schema.optional(GoogleCloudDataplexV1MetadataFeedScope),
    filters: Schema.optional(GoogleCloudDataplexV1MetadataFeedFilters),
    updateTime: Schema.optional(Schema.String),
    pubsubTopic: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1MetadataFeed" });

export interface GoogleCloudDataplexV1ListMetadataFeedsResponse {
  /** Unordered list. Locations that the service couldn't reach. */
  unreachable?: ReadonlyArray<string>;
  /** List of metadata feeds under the specified parent location. */
  metadataFeeds?: ReadonlyArray<GoogleCloudDataplexV1MetadataFeed>;
  /** A token to retrieve the next page of results. If there are no more results in the list, the value is empty. */
  nextPageToken?: string;
}

export const GoogleCloudDataplexV1ListMetadataFeedsResponse: Schema.Schema<GoogleCloudDataplexV1ListMetadataFeedsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    metadataFeeds: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1MetadataFeed),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1ListMetadataFeedsResponse" });

export interface GoogleCloudDataplexV1DataQualityScanRuleResult {
  /** The passing threshold (0.0, 100.0) of the data quality rule. */
  thresholdPercent?: number;
  /** The number of rows which passed a rule evaluation. This field is only valid for rules of PER_ROW evaluation type. */
  passedRowCount?: string;
  /** Identifier of the specific data scan job this log entry is for. */
  jobId?: string;
  /** The type of the data quality rule. */
  ruleType?:
    | "RULE_TYPE_UNSPECIFIED"
    | "NON_NULL_EXPECTATION"
    | "RANGE_EXPECTATION"
    | "REGEX_EXPECTATION"
    | "ROW_CONDITION_EXPECTATION"
    | "SET_EXPECTATION"
    | "STATISTIC_RANGE_EXPECTATION"
    | "TABLE_CONDITION_EXPECTATION"
    | "UNIQUENESS_EXPECTATION"
    | "SQL_ASSERTION"
    | "TEMPLATE_REFERENCE"
    | (string & {});
  /** The evaluation type of the data quality rule. */
  evalutionType?:
    | "EVALUATION_TYPE_UNSPECIFIED"
    | "PER_ROW"
    | "AGGREGATE"
    | (string & {});
  /** The column which this rule is evaluated against. */
  column?: string;
  /** The name of the data quality rule. */
  ruleName?: string;
  /** The result of the data quality rule. */
  result?: "RESULT_UNSPECIFIED" | "PASSED" | "FAILED" | (string & {});
  /** The number of rows evaluated against the data quality rule. This field is only valid for rules of PER_ROW evaluation type. */
  evaluatedRowCount?: string;
  /** The data source of the data scan (e.g. BigQuery table name). */
  dataSource?: string;
  /** The dimension of the data quality rule. */
  ruleDimension?: string;
  /** The number of rows with null values in the specified column. */
  nullRowCount?: string;
  /** The number of rows returned by the SQL statement in a SQL assertion rule. This field is only valid for SQL assertion rules. */
  assertionRowCount?: string;
}

export const GoogleCloudDataplexV1DataQualityScanRuleResult: Schema.Schema<GoogleCloudDataplexV1DataQualityScanRuleResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    thresholdPercent: Schema.optional(Schema.Number),
    passedRowCount: Schema.optional(Schema.String),
    jobId: Schema.optional(Schema.String),
    ruleType: Schema.optional(Schema.String),
    evalutionType: Schema.optional(Schema.String),
    column: Schema.optional(Schema.String),
    ruleName: Schema.optional(Schema.String),
    result: Schema.optional(Schema.String),
    evaluatedRowCount: Schema.optional(Schema.String),
    dataSource: Schema.optional(Schema.String),
    ruleDimension: Schema.optional(Schema.String),
    nullRowCount: Schema.optional(Schema.String),
    assertionRowCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1DataQualityScanRuleResult" });

export interface GoogleCloudDataplexV1ListEntriesResponse {
  /** The list of entries under the given parent location. */
  entries?: ReadonlyArray<GoogleCloudDataplexV1Entry>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const GoogleCloudDataplexV1ListEntriesResponse: Schema.Schema<GoogleCloudDataplexV1ListEntriesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(GoogleCloudDataplexV1Entry)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1ListEntriesResponse" });

export interface GoogleCloudDataplexV1LookupEntryLinksResponse {
  /** List of entry links that reference the specified entry. */
  entryLinks?: ReadonlyArray<GoogleCloudDataplexV1EntryLink>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const GoogleCloudDataplexV1LookupEntryLinksResponse: Schema.Schema<GoogleCloudDataplexV1LookupEntryLinksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entryLinks: Schema.optional(Schema.Array(GoogleCloudDataplexV1EntryLink)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1LookupEntryLinksResponse" });

export interface GoogleCloudDataplexV1AssetSecurityStatus {
  /** Last update time of the status. */
  updateTime?: string;
  /** The current state of the security policy applied to the attached resource. */
  state?: "STATE_UNSPECIFIED" | "READY" | "APPLYING" | "ERROR" | (string & {});
  /** Additional information about the current state. */
  message?: string;
}

export const GoogleCloudDataplexV1AssetSecurityStatus: Schema.Schema<GoogleCloudDataplexV1AssetSecurityStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1AssetSecurityStatus" });

export interface GoogleCloudDataplexV1AssetResourceSpec {
  /** Required. Immutable. Type of resource. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "STORAGE_BUCKET"
    | "BIGQUERY_DATASET"
    | (string & {});
  /** Immutable. Relative name of the cloud resource that contains the data that is being managed within a lake. For example: projects/{project_number}/buckets/{bucket_id} projects/{project_number}/datasets/{dataset_id} */
  name?: string;
  /** Optional. Determines how read permissions are handled for each asset and their associated tables. Only available to storage buckets assets. */
  readAccessMode?:
    | "ACCESS_MODE_UNSPECIFIED"
    | "DIRECT"
    | "MANAGED"
    | (string & {});
}

export const GoogleCloudDataplexV1AssetResourceSpec: Schema.Schema<GoogleCloudDataplexV1AssetResourceSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    readAccessMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1AssetResourceSpec" });

export interface GoogleCloudDataplexV1Asset {
  /** Output only. System generated globally unique ID for the asset. This ID will be different if the asset is deleted and re-created with the same name. */
  uid?: string;
  /** Output only. The time when the asset was last updated. */
  updateTime?: string;
  /** Optional. User defined labels for the asset. */
  labels?: Record<string, string>;
  /** Optional. Description of the asset. */
  description?: string;
  /** Output only. The time when the asset was created. */
  createTime?: string;
  /** Output only. Status of the resource referenced by this asset. */
  resourceStatus?: GoogleCloudDataplexV1AssetResourceStatus;
  /** Optional. User friendly display name. */
  displayName?: string;
  /** Output only. Current state of the asset. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | "ACTION_REQUIRED"
    | (string & {});
  /** Optional. Specification of the discovery feature applied to data referenced by this asset. When this spec is left unset, the asset will use the spec set on the parent zone. */
  discoverySpec?: GoogleCloudDataplexV1AssetDiscoverySpec;
  /** Output only. Status of the security policy applied to resource referenced by this asset. */
  securityStatus?: GoogleCloudDataplexV1AssetSecurityStatus;
  /** Required. Specification of the resource that is referenced by this asset. */
  resourceSpec?: GoogleCloudDataplexV1AssetResourceSpec;
  /** Output only. Status of the discovery feature applied to data referenced by this asset. */
  discoveryStatus?: GoogleCloudDataplexV1AssetDiscoveryStatus;
  /** Output only. The relative resource name of the asset, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}. */
  name?: string;
}

export const GoogleCloudDataplexV1Asset: Schema.Schema<GoogleCloudDataplexV1Asset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uid: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    resourceStatus: Schema.optional(GoogleCloudDataplexV1AssetResourceStatus),
    displayName: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    discoverySpec: Schema.optional(GoogleCloudDataplexV1AssetDiscoverySpec),
    securityStatus: Schema.optional(GoogleCloudDataplexV1AssetSecurityStatus),
    resourceSpec: Schema.optional(GoogleCloudDataplexV1AssetResourceSpec),
    discoveryStatus: Schema.optional(GoogleCloudDataplexV1AssetDiscoveryStatus),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1Asset" });

export interface GoogleCloudDataplexV1ListAssetsResponse {
  /** Asset under the given parent zone. */
  assets?: ReadonlyArray<GoogleCloudDataplexV1Asset>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const GoogleCloudDataplexV1ListAssetsResponse: Schema.Schema<GoogleCloudDataplexV1ListAssetsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assets: Schema.optional(Schema.Array(GoogleCloudDataplexV1Asset)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1ListAssetsResponse" });

export interface GoogleCloudDataplexV1SearchEntriesResult {
  /** Linked resource name. */
  linkedResource?: string;
  dataplexEntry?: GoogleCloudDataplexV1Entry;
  /** Snippets. */
  snippets?: GoogleCloudDataplexV1SearchEntriesResultSnippets;
}

export const GoogleCloudDataplexV1SearchEntriesResult: Schema.Schema<GoogleCloudDataplexV1SearchEntriesResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    linkedResource: Schema.optional(Schema.String),
    dataplexEntry: Schema.optional(GoogleCloudDataplexV1Entry),
    snippets: Schema.optional(GoogleCloudDataplexV1SearchEntriesResultSnippets),
  }).annotate({ identifier: "GoogleCloudDataplexV1SearchEntriesResult" });

export interface GoogleCloudDataplexV1CancelDataScanJobRequest {}

export const GoogleCloudDataplexV1CancelDataScanJobRequest: Schema.Schema<GoogleCloudDataplexV1CancelDataScanJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDataplexV1CancelDataScanJobRequest",
  });

export interface GoogleCloudDataplexV1Lake {
  /** Output only. Service account associated with this lake. This service account must be authorized to access or operate on resources managed by the lake. */
  serviceAccount?: string;
  /** Output only. The relative resource name of the lake, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}. */
  name?: string;
  /** Output only. The time when the lake was created. */
  createTime?: string;
  /** Optional. Settings to manage lake and Dataproc Metastore service instance association. */
  metastore?: GoogleCloudDataplexV1LakeMetastore;
  /** Output only. Aggregated status of the underlying assets of the lake. */
  assetStatus?: GoogleCloudDataplexV1AssetStatus;
  /** Optional. Description of the lake. */
  description?: string;
  /** Optional. User-defined labels for the lake. */
  labels?: Record<string, string>;
  /** Output only. Current state of the lake. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | "ACTION_REQUIRED"
    | (string & {});
  /** Output only. The time when the lake was last updated. */
  updateTime?: string;
  /** Output only. Metastore status of the lake. */
  metastoreStatus?: GoogleCloudDataplexV1LakeMetastoreStatus;
  /** Output only. System generated globally unique ID for the lake. This ID will be different if the lake is deleted and re-created with the same name. */
  uid?: string;
  /** Optional. User friendly display name. */
  displayName?: string;
}

export const GoogleCloudDataplexV1Lake: Schema.Schema<GoogleCloudDataplexV1Lake> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccount: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    metastore: Schema.optional(GoogleCloudDataplexV1LakeMetastore),
    assetStatus: Schema.optional(GoogleCloudDataplexV1AssetStatus),
    description: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    state: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    metastoreStatus: Schema.optional(GoogleCloudDataplexV1LakeMetastoreStatus),
    uid: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1Lake" });

export interface GoogleCloudDataplexV1ListLakesResponse {
  /** Lakes under the given parent location. */
  lakes?: ReadonlyArray<GoogleCloudDataplexV1Lake>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachableLocations?: ReadonlyArray<string>;
}

export const GoogleCloudDataplexV1ListLakesResponse: Schema.Schema<GoogleCloudDataplexV1ListLakesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lakes: Schema.optional(Schema.Array(GoogleCloudDataplexV1Lake)),
    nextPageToken: Schema.optional(Schema.String),
    unreachableLocations: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDataplexV1ListLakesResponse" });

export interface GoogleCloudDataplexV1ListDataAssetsResponse {
  /** The data assets for the requested filter criteria. */
  dataAssets?: ReadonlyArray<GoogleCloudDataplexV1DataAsset>;
  /** A token, which can be sent as page_token to retrieve the next page. If this field is empty, then there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudDataplexV1ListDataAssetsResponse: Schema.Schema<GoogleCloudDataplexV1ListDataAssetsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataAssets: Schema.optional(Schema.Array(GoogleCloudDataplexV1DataAsset)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1ListDataAssetsResponse" });

export interface GoogleCloudDataplexV1RunTaskRequest {
  /** Optional. User-defined labels for the task. If the map is left empty, the task will run with existing labels from task definition. If the map contains an entry with a new key, the same will be added to existing set of labels. If the map contains an entry with an existing label key in task definition, the task will run with new label value for that entry. Clearing an existing label will require label value to be explicitly set to a hyphen "-". The label value cannot be empty. */
  labels?: Record<string, string>;
  /** Optional. Execution spec arguments. If the map is left empty, the task will run with existing execution spec args from task definition. If the map contains an entry with a new key, the same will be added to existing set of args. If the map contains an entry with an existing arg key in task definition, the task will run with new arg value for that entry. Clearing an existing arg will require arg value to be explicitly set to a hyphen "-". The arg value cannot be empty. */
  args?: Record<string, string>;
}

export const GoogleCloudDataplexV1RunTaskRequest: Schema.Schema<GoogleCloudDataplexV1RunTaskRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    args: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleCloudDataplexV1RunTaskRequest" });

export interface GoogleCloudDataplexV1SearchEntriesResponse {
  /** The results matching the search query. */
  results?: ReadonlyArray<GoogleCloudDataplexV1SearchEntriesResult>;
  /** Locations that the service couldn't reach. Search results don't include data from these locations. */
  unreachable?: ReadonlyArray<string>;
  /** The estimated total number of matching entries. This number isn't guaranteed to be accurate. */
  totalSize?: number;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const GoogleCloudDataplexV1SearchEntriesResponse: Schema.Schema<GoogleCloudDataplexV1SearchEntriesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(GoogleCloudDataplexV1SearchEntriesResult),
    ),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    totalSize: Schema.optional(Schema.Number),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1SearchEntriesResponse" });

export interface GoogleCloudDataplexV1BusinessGlossaryEvent {
  /** The log message. */
  message?: string;
  /** The type of the event. */
  eventType?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "GLOSSARY_CREATE"
    | "GLOSSARY_UPDATE"
    | "GLOSSARY_DELETE"
    | "GLOSSARY_CATEGORY_CREATE"
    | "GLOSSARY_CATEGORY_UPDATE"
    | "GLOSSARY_CATEGORY_DELETE"
    | "GLOSSARY_TERM_CREATE"
    | "GLOSSARY_TERM_UPDATE"
    | "GLOSSARY_TERM_DELETE"
    | (string & {});
  /** Name of the resource. */
  resource?: string;
}

export const GoogleCloudDataplexV1BusinessGlossaryEvent: Schema.Schema<GoogleCloudDataplexV1BusinessGlossaryEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    eventType: Schema.optional(Schema.String),
    resource: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDataplexV1BusinessGlossaryEvent" });

export interface GoogleCloudDataplexV1ListGlossaryTermsResponse {
  /** A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Locations that the service couldn't reach. */
  unreachableLocations?: ReadonlyArray<string>;
  /** Lists the GlossaryTerms in the specified parent. */
  terms?: ReadonlyArray<GoogleCloudDataplexV1GlossaryTerm>;
}

export const GoogleCloudDataplexV1ListGlossaryTermsResponse: Schema.Schema<GoogleCloudDataplexV1ListGlossaryTermsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachableLocations: Schema.optional(Schema.Array(Schema.String)),
    terms: Schema.optional(Schema.Array(GoogleCloudDataplexV1GlossaryTerm)),
  }).annotate({ identifier: "GoogleCloudDataplexV1ListGlossaryTermsResponse" });

export interface GoogleCloudDataplexV1OperationMetadata {
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED. */
  requestedCancellation?: boolean;
}

export const GoogleCloudDataplexV1OperationMetadata: Schema.Schema<GoogleCloudDataplexV1OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    verb: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudDataplexV1OperationMetadata" });

export interface GoogleCloudDataplexV1SessionEvent {
  /** If the session is associated with an environment with fast startup enabled, and was created before being assigned to a user. */
  fastStartupEnabled?: boolean;
  /** The type of the event. */
  type?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "START"
    | "STOP"
    | "QUERY"
    | "CREATE"
    | (string & {});
  /** The information about the user that created the session. It will be the email address of the user. */
  userId?: string;
  /** The idle duration of a warm pooled session before it is assigned to user. */
  unassignedDuration?: string;
  /** The log message. */
  message?: string;
  /** Unique identifier for the session. */
  sessionId?: string;
  /** The status of the event. */
  eventSucceeded?: boolean;
  /** The execution details of the query. */
  query?: GoogleCloudDataplexV1SessionEventQueryDetail;
}

export const GoogleCloudDataplexV1SessionEvent: Schema.Schema<GoogleCloudDataplexV1SessionEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fastStartupEnabled: Schema.optional(Schema.Boolean),
    type: Schema.optional(Schema.String),
    userId: Schema.optional(Schema.String),
    unassignedDuration: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    sessionId: Schema.optional(Schema.String),
    eventSucceeded: Schema.optional(Schema.Boolean),
    query: Schema.optional(GoogleCloudDataplexV1SessionEventQueryDetail),
  }).annotate({ identifier: "GoogleCloudDataplexV1SessionEvent" });

export interface GoogleIamV1SetIamPolicyRequest {
  /** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used:paths: "bindings, etag" */
  updateMask?: string;
  /** REQUIRED: The complete policy to be applied to the resource. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: GoogleIamV1Policy;
}

export const GoogleIamV1SetIamPolicyRequest: Schema.Schema<GoogleIamV1SetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String),
    policy: Schema.optional(GoogleIamV1Policy),
  }).annotate({ identifier: "GoogleIamV1SetIamPolicyRequest" });

export interface GoogleIamV1TestIamPermissionsRequest {
  /** The set of permissions to check for the resource. Permissions with wildcards (such as * or storage.*) are not allowed. For more information see IAM Overview (https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const GoogleIamV1TestIamPermissionsRequest: Schema.Schema<GoogleIamV1TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleIamV1TestIamPermissionsRequest" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface GoogleCloudDataplexV1ModifyEntryRequest {
  /** Optional. If set to true, any aspects not specified in the request will be deleted. The default is false. */
  deleteMissingAspects?: boolean;
  /** Required. The entry to modify. */
  entry?: GoogleCloudDataplexV1Entry;
  /** Optional. Mask of fields to update. To update Aspects, the update_mask must contain the value "aspects".If the update_mask is empty, the service will update all modifiable fields present in the request. */
  updateMask?: string;
  /** Optional. The aspect keys which the service should modify. It supports the following syntaxes: - matches an aspect of the given type and empty path. @path - matches an aspect of the given type and specified path. For example, to attach an aspect to a field that is specified by the schema aspect, the path should have the format Schema.. @* - matches aspects of the given type for all paths. *@path - matches aspects of all types on the given path.The service will not remove existing aspects matching the syntax unless delete_missing_aspects is set to true.If this field is left empty, the service treats it as specifying exactly those Aspects present in the request. */
  aspectKeys?: ReadonlyArray<string>;
}

export const GoogleCloudDataplexV1ModifyEntryRequest: Schema.Schema<GoogleCloudDataplexV1ModifyEntryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deleteMissingAspects: Schema.optional(Schema.Boolean),
    entry: Schema.optional(GoogleCloudDataplexV1Entry),
    updateMask: Schema.optional(Schema.String),
    aspectKeys: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDataplexV1ModifyEntryRequest" });

export interface GoogleCloudDataplexV1ListEntryTypesResponse {
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** Locations that the service couldn't reach. */
  unreachableLocations?: ReadonlyArray<string>;
  /** EntryTypes under the given parent location. */
  entryTypes?: ReadonlyArray<GoogleCloudDataplexV1EntryType>;
}

export const GoogleCloudDataplexV1ListEntryTypesResponse: Schema.Schema<GoogleCloudDataplexV1ListEntryTypesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachableLocations: Schema.optional(Schema.Array(Schema.String)),
    entryTypes: Schema.optional(Schema.Array(GoogleCloudDataplexV1EntryType)),
  }).annotate({ identifier: "GoogleCloudDataplexV1ListEntryTypesResponse" });

export interface GoogleLongrunningListOperationsResponse {
  /** Unordered list. Unreachable resources. Populated when the request sets ListOperationsRequest.return_partial_success and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<GoogleLongrunningOperation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const GoogleLongrunningListOperationsResponse: Schema.Schema<GoogleLongrunningListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(GoogleLongrunningOperation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleLongrunningListOperationsResponse" });

export interface GoogleCloudDataplexV1CancelDataScanJobResponse {}

export const GoogleCloudDataplexV1CancelDataScanJobResponse: Schema.Schema<GoogleCloudDataplexV1CancelDataScanJobResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudDataplexV1CancelDataScanJobResponse",
  });

export interface GoogleCloudDataplexV1ListAspectTypesResponse {
  /** AspectTypes under the given parent location. */
  aspectTypes?: ReadonlyArray<GoogleCloudDataplexV1AspectType>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** Locations that the service couldn't reach. */
  unreachableLocations?: ReadonlyArray<string>;
}

export const GoogleCloudDataplexV1ListAspectTypesResponse: Schema.Schema<GoogleCloudDataplexV1ListAspectTypesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aspectTypes: Schema.optional(Schema.Array(GoogleCloudDataplexV1AspectType)),
    nextPageToken: Schema.optional(Schema.String),
    unreachableLocations: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudDataplexV1ListAspectTypesResponse" });

export interface GoogleCloudDataplexV1GovernanceEvent {
  /** The type of the event. */
  eventType?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "RESOURCE_IAM_POLICY_UPDATE"
    | "BIGQUERY_TABLE_CREATE"
    | "BIGQUERY_TABLE_UPDATE"
    | "BIGQUERY_TABLE_DELETE"
    | "BIGQUERY_CONNECTION_CREATE"
    | "BIGQUERY_CONNECTION_UPDATE"
    | "BIGQUERY_CONNECTION_DELETE"
    | "BIGQUERY_TAXONOMY_CREATE"
    | "BIGQUERY_POLICY_TAG_CREATE"
    | "BIGQUERY_POLICY_TAG_DELETE"
    | "BIGQUERY_POLICY_TAG_SET_IAM_POLICY"
    | "ACCESS_POLICY_UPDATE"
    | "GOVERNANCE_RULE_MATCHED_RESOURCES"
    | "GOVERNANCE_RULE_SEARCH_LIMIT_EXCEEDS"
    | "GOVERNANCE_RULE_ERRORS"
    | "GOVERNANCE_RULE_PROCESSING"
    | (string & {});
  /** The log message. */
  message?: string;
  /** Entity resource information if the log event is associated with a specific entity. */
  entity?: GoogleCloudDataplexV1GovernanceEventEntity;
}

export const GoogleCloudDataplexV1GovernanceEvent: Schema.Schema<GoogleCloudDataplexV1GovernanceEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventType: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    entity: Schema.optional(GoogleCloudDataplexV1GovernanceEventEntity),
  }).annotate({ identifier: "GoogleCloudDataplexV1GovernanceEvent" });

export interface GoogleCloudDataplexV1ListJobsResponse {
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** Jobs under a given task. */
  jobs?: ReadonlyArray<GoogleCloudDataplexV1Job>;
}

export const GoogleCloudDataplexV1ListJobsResponse: Schema.Schema<GoogleCloudDataplexV1ListJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    jobs: Schema.optional(Schema.Array(GoogleCloudDataplexV1Job)),
  }).annotate({ identifier: "GoogleCloudDataplexV1ListJobsResponse" });

export interface GoogleCloudDataplexV1GenerateDataQualityRulesResponse {
  /** The data quality rules that Dataplex Universal Catalog generates based on the results of a data profiling scan. */
  rule?: ReadonlyArray<GoogleCloudDataplexV1DataQualityRule>;
}

export const GoogleCloudDataplexV1GenerateDataQualityRulesResponse: Schema.Schema<GoogleCloudDataplexV1GenerateDataQualityRulesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rule: Schema.optional(Schema.Array(GoogleCloudDataplexV1DataQualityRule)),
  }).annotate({
    identifier: "GoogleCloudDataplexV1GenerateDataQualityRulesResponse",
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

export interface DeleteOrganizationsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteOrganizationsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsLocationsOperationsRequest>;

export type DeleteOrganizationsLocationsOperationsResponse = Empty;
export const DeleteOrganizationsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteOrganizationsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. */
export const deleteOrganizationsLocationsOperations: API.OperationMethod<
  DeleteOrganizationsLocationsOperationsRequest,
  DeleteOrganizationsLocationsOperationsResponse,
  DeleteOrganizationsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsOperationsRequest,
  output: DeleteOrganizationsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetOrganizationsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsOperationsRequest>;

export type GetOrganizationsLocationsOperationsResponse =
  GoogleLongrunningOperation;
export const GetOrganizationsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type GetOrganizationsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getOrganizationsLocationsOperations: API.OperationMethod<
  GetOrganizationsLocationsOperationsRequest,
  GetOrganizationsLocationsOperationsResponse,
  GetOrganizationsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsOperationsRequest,
  output: GetOrganizationsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsLocationsOperationsRequest {
  /** The standard list page token. */
  pageToken?: string;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** When set to true, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field.This can only be true when reading across collections. For example, when parent is set to "projects/example/locations/-".This field is not supported by default and will result in an UNIMPLEMENTED error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
}

export const ListOrganizationsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsOperationsRequest>;

export type ListOrganizationsLocationsOperationsResponse =
  GoogleLongrunningListOperationsResponse;
export const ListOrganizationsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningListOperationsResponse;

export type ListOrganizationsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED. */
export const listOrganizationsLocationsOperations: API.PaginatedOperationMethod<
  ListOrganizationsLocationsOperationsRequest,
  ListOrganizationsLocationsOperationsResponse,
  ListOrganizationsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsOperationsRequest,
  output: ListOrganizationsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CancelOrganizationsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: GoogleLongrunningCancelOperationRequest;
}

export const CancelOrganizationsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleLongrunningCancelOperationRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelOrganizationsLocationsOperationsRequest>;

export type CancelOrganizationsLocationsOperationsResponse = Empty;
export const CancelOrganizationsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelOrganizationsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED. */
export const cancelOrganizationsLocationsOperations: API.OperationMethod<
  CancelOrganizationsLocationsOperationsRequest,
  CancelOrganizationsLocationsOperationsResponse,
  CancelOrganizationsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelOrganizationsLocationsOperationsRequest,
  output: CancelOrganizationsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsOrganizationsLocationsEncryptionConfigsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsOrganizationsLocationsEncryptionConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsOrganizationsLocationsEncryptionConfigsRequest>;

export type TestIamPermissionsOrganizationsLocationsEncryptionConfigsResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsOrganizationsLocationsEncryptionConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsOrganizationsLocationsEncryptionConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsOrganizationsLocationsEncryptionConfigs: API.OperationMethod<
  TestIamPermissionsOrganizationsLocationsEncryptionConfigsRequest,
  TestIamPermissionsOrganizationsLocationsEncryptionConfigsResponse,
  TestIamPermissionsOrganizationsLocationsEncryptionConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsOrganizationsLocationsEncryptionConfigsRequest,
  output: TestIamPermissionsOrganizationsLocationsEncryptionConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsEncryptionConfigsRequest {
  /** Required. The location for which the EncryptionConfig is to be listed. */
  parent: string;
  /** Optional. Order by fields for the result. */
  orderBy?: string;
  /** Optional. Maximum number of EncryptionConfigs to return. The service may return fewer than this value. If unspecified, at most 10 EncryptionConfigs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. Filter the EncryptionConfigs to be returned. Using bare literals: (These values will be matched anywhere it may appear in the object's field values) * filter=some_value Using fields: (These values will be matched only in the specified field) * filter=some_field=some_value Supported fields: * name, key, create_time, update_time, encryption_state Example: * filter=name=organizations/123/locations/us-central1/encryptionConfigs/test-config conjunctions: (AND, OR, NOT) * filter=name=organizations/123/locations/us-central1/encryptionConfigs/test-config AND mode=CMEK logical operators: (>, <, >=, <=, !=, =, :), * filter=create_time>2024-05-01T00:00:00.000Z */
  filter?: string;
  /** Optional. Page token received from a previous ListEncryptionConfigs call. Provide this to retrieve the subsequent page. When paginating, the parameters - filter and order_by provided to ListEncryptionConfigs must match the call that provided the page token. */
  pageToken?: string;
}

export const ListOrganizationsLocationsEncryptionConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/encryptionConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsEncryptionConfigsRequest>;

export type ListOrganizationsLocationsEncryptionConfigsResponse =
  GoogleCloudDataplexV1ListEncryptionConfigsResponse;
export const ListOrganizationsLocationsEncryptionConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListEncryptionConfigsResponse;

export type ListOrganizationsLocationsEncryptionConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List EncryptionConfigs. */
export const listOrganizationsLocationsEncryptionConfigs: API.PaginatedOperationMethod<
  ListOrganizationsLocationsEncryptionConfigsRequest,
  ListOrganizationsLocationsEncryptionConfigsResponse,
  ListOrganizationsLocationsEncryptionConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsEncryptionConfigsRequest,
  output: ListOrganizationsLocationsEncryptionConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateOrganizationsLocationsEncryptionConfigsRequest {
  /** Required. The ID of the EncryptionConfig to create. Currently, only a value of "default" is supported. */
  encryptionConfigId?: string;
  /** Required. The location at which the EncryptionConfig is to be created. */
  parent: string;
  /** Request body */
  body?: GoogleCloudDataplexV1EncryptionConfig;
}

export const CreateOrganizationsLocationsEncryptionConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encryptionConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("encryptionConfigId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDataplexV1EncryptionConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/encryptionConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateOrganizationsLocationsEncryptionConfigsRequest>;

export type CreateOrganizationsLocationsEncryptionConfigsResponse =
  GoogleLongrunningOperation;
export const CreateOrganizationsLocationsEncryptionConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateOrganizationsLocationsEncryptionConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create an EncryptionConfig. */
export const createOrganizationsLocationsEncryptionConfigs: API.OperationMethod<
  CreateOrganizationsLocationsEncryptionConfigsRequest,
  CreateOrganizationsLocationsEncryptionConfigsResponse,
  CreateOrganizationsLocationsEncryptionConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsLocationsEncryptionConfigsRequest,
  output: CreateOrganizationsLocationsEncryptionConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchOrganizationsLocationsEncryptionConfigsRequest {
  /** Identifier. The resource name of the EncryptionConfig. Format: organizations/{organization}/locations/{location}/encryptionConfigs/{encryption_config} Global location is not supported. */
  name: string;
  /** Optional. Mask of fields to update. The service treats an omitted field mask as an implied field mask equivalent to all fields that are populated (have a non-empty value). */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDataplexV1EncryptionConfig;
}

export const PatchOrganizationsLocationsEncryptionConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDataplexV1EncryptionConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsLocationsEncryptionConfigsRequest>;

export type PatchOrganizationsLocationsEncryptionConfigsResponse =
  GoogleLongrunningOperation;
export const PatchOrganizationsLocationsEncryptionConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchOrganizationsLocationsEncryptionConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update an EncryptionConfig. */
export const patchOrganizationsLocationsEncryptionConfigs: API.OperationMethod<
  PatchOrganizationsLocationsEncryptionConfigsRequest,
  PatchOrganizationsLocationsEncryptionConfigsResponse,
  PatchOrganizationsLocationsEncryptionConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsLocationsEncryptionConfigsRequest,
  output: PatchOrganizationsLocationsEncryptionConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsLocationsEncryptionConfigsRequest {
  /** Required. The name of the EncryptionConfig to fetch. */
  name: string;
}

export const GetOrganizationsLocationsEncryptionConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsEncryptionConfigsRequest>;

export type GetOrganizationsLocationsEncryptionConfigsResponse =
  GoogleCloudDataplexV1EncryptionConfig;
export const GetOrganizationsLocationsEncryptionConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1EncryptionConfig;

export type GetOrganizationsLocationsEncryptionConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get an EncryptionConfig. */
export const getOrganizationsLocationsEncryptionConfigs: API.OperationMethod<
  GetOrganizationsLocationsEncryptionConfigsRequest,
  GetOrganizationsLocationsEncryptionConfigsResponse,
  GetOrganizationsLocationsEncryptionConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsEncryptionConfigsRequest,
  output: GetOrganizationsLocationsEncryptionConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteOrganizationsLocationsEncryptionConfigsRequest {
  /** Required. The name of the EncryptionConfig to delete. */
  name: string;
  /** Optional. Etag of the EncryptionConfig. This is a strong etag. */
  etag?: string;
}

export const DeleteOrganizationsLocationsEncryptionConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsLocationsEncryptionConfigsRequest>;

export type DeleteOrganizationsLocationsEncryptionConfigsResponse =
  GoogleLongrunningOperation;
export const DeleteOrganizationsLocationsEncryptionConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteOrganizationsLocationsEncryptionConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete an EncryptionConfig. */
export const deleteOrganizationsLocationsEncryptionConfigs: API.OperationMethod<
  DeleteOrganizationsLocationsEncryptionConfigsRequest,
  DeleteOrganizationsLocationsEncryptionConfigsResponse,
  DeleteOrganizationsLocationsEncryptionConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsEncryptionConfigsRequest,
  output: DeleteOrganizationsLocationsEncryptionConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyOrganizationsLocationsEncryptionConfigsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyOrganizationsLocationsEncryptionConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyOrganizationsLocationsEncryptionConfigsRequest>;

export type SetIamPolicyOrganizationsLocationsEncryptionConfigsResponse =
  GoogleIamV1Policy;
export const SetIamPolicyOrganizationsLocationsEncryptionConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyOrganizationsLocationsEncryptionConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyOrganizationsLocationsEncryptionConfigs: API.OperationMethod<
  SetIamPolicyOrganizationsLocationsEncryptionConfigsRequest,
  SetIamPolicyOrganizationsLocationsEncryptionConfigsResponse,
  SetIamPolicyOrganizationsLocationsEncryptionConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyOrganizationsLocationsEncryptionConfigsRequest,
  output: SetIamPolicyOrganizationsLocationsEncryptionConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyOrganizationsLocationsEncryptionConfigsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyOrganizationsLocationsEncryptionConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyOrganizationsLocationsEncryptionConfigsRequest>;

export type GetIamPolicyOrganizationsLocationsEncryptionConfigsResponse =
  GoogleIamV1Policy;
export const GetIamPolicyOrganizationsLocationsEncryptionConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyOrganizationsLocationsEncryptionConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyOrganizationsLocationsEncryptionConfigs: API.OperationMethod<
  GetIamPolicyOrganizationsLocationsEncryptionConfigsRequest,
  GetIamPolicyOrganizationsLocationsEncryptionConfigsResponse,
  GetIamPolicyOrganizationsLocationsEncryptionConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyOrganizationsLocationsEncryptionConfigsRequest,
  output: GetIamPolicyOrganizationsLocationsEncryptionConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface LookupEntryLinksProjectsLocationsRequest {
  /** Mode of entry reference. */
  entryMode?: "ENTRY_MODE_UNSPECIFIED" | "SOURCE" | "TARGET" | (string & {});
  /** Required. The resource name of the referred Entry. Format: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}. Entry Links which references this entry will be returned in the response. */
  entry?: string;
  /** Entry link types to filter the response by. If empty, all entry link types will be returned. At most 10 entry link types can be specified. */
  entryLinkTypes?: string[];
  /** Maximum number of EntryLinks to return. The service may return fewer than this value. If unspecified, at most 10 EntryLinks will be returned. The maximum value is 10; values above 10 will be coerced to 10. */
  pageSize?: number;
  /** Required. The project to which the request should be attributed to Format: projects/{project_id_or_number}/locations/{location_id}. */
  name: string;
  /** Page token received from a previous LookupEntryLinks call. Provide this to retrieve the subsequent page. When paginating, all other parameters that are provided to the LookupEntryLinks request must match the call that provided the page token. */
  pageToken?: string;
}

export const LookupEntryLinksProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entryMode: Schema.optional(Schema.String).pipe(T.HttpQuery("entryMode")),
    entry: Schema.optional(Schema.String).pipe(T.HttpQuery("entry")),
    entryLinkTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("entryLinkTypes"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:lookupEntryLinks" }),
    svc,
  ) as unknown as Schema.Schema<LookupEntryLinksProjectsLocationsRequest>;

export type LookupEntryLinksProjectsLocationsResponse =
  GoogleCloudDataplexV1LookupEntryLinksResponse;
export const LookupEntryLinksProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1LookupEntryLinksResponse;

export type LookupEntryLinksProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Looks up Entry Links referencing the specified Entry. */
export const lookupEntryLinksProjectsLocations: API.PaginatedOperationMethod<
  LookupEntryLinksProjectsLocationsRequest,
  LookupEntryLinksProjectsLocationsResponse,
  LookupEntryLinksProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: LookupEntryLinksProjectsLocationsRequest,
  output: LookupEntryLinksProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface LookupEntryProjectsLocationsRequest {
  /** Optional. View to control which parts of an entry the service should return. Please check the limitations on returned aspects in the Entry view documentation. Amount of returned aspects depends on the selected Entry View. */
  view?:
    | "ENTRY_VIEW_UNSPECIFIED"
    | "BASIC"
    | "FULL"
    | "CUSTOM"
    | "ALL"
    | (string & {});
  /** Required. The project to which the request should be attributed in the following form: projects/{project}/locations/{location}. */
  name: string;
  /** Optional. Limits the aspects returned to the provided aspect types. It only works for CUSTOM view. */
  aspectTypes?: string[];
  /** Required. The resource name of the Entry: projects/{project}/locations/{location}/entryGroups/{entry_group}/entries/{entry}. */
  entry?: string;
  /** Optional. Limits the aspects returned to those associated with the provided paths within the Entry. It only works for CUSTOM view. */
  paths?: string[];
}

export const LookupEntryProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    name: Schema.String.pipe(T.HttpPath("name")),
    aspectTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("aspectTypes"),
    ),
    entry: Schema.optional(Schema.String).pipe(T.HttpQuery("entry")),
    paths: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("paths"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:lookupEntry" }),
    svc,
  ) as unknown as Schema.Schema<LookupEntryProjectsLocationsRequest>;

export type LookupEntryProjectsLocationsResponse = GoogleCloudDataplexV1Entry;
export const LookupEntryProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1Entry;

export type LookupEntryProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Looks up an entry by name using the permission on the source system. */
export const lookupEntryProjectsLocations: API.OperationMethod<
  LookupEntryProjectsLocationsRequest,
  LookupEntryProjectsLocationsResponse,
  LookupEntryProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LookupEntryProjectsLocationsRequest,
  output: LookupEntryProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsRequest {
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160). */
  filter?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse =
  GoogleCloudLocationListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudLocationListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service.This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: Global locations: If name is empty, the method lists the public locations available to all projects. Project-specific locations: If name follows the format projects/{project}, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project.For gRPC and client library implementations, the resource name is passed as the name field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
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

export type GetProjectsLocationsResponse = GoogleCloudLocationLocation;
export const GetProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudLocationLocation;

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

export interface ModifyEntryProjectsLocationsRequest {
  /** Required. The project to which the request should be attributed in the following form: projects/{project}/locations/{location}. */
  name: string;
  /** Request body */
  body?: GoogleCloudDataplexV1ModifyEntryRequest;
}

export const ModifyEntryProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDataplexV1ModifyEntryRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:modifyEntry", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ModifyEntryProjectsLocationsRequest>;

export type ModifyEntryProjectsLocationsResponse = GoogleCloudDataplexV1Entry;
export const ModifyEntryProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1Entry;

export type ModifyEntryProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Modifies an entry using the permission on the source system. */
export const modifyEntryProjectsLocations: API.OperationMethod<
  ModifyEntryProjectsLocationsRequest,
  ModifyEntryProjectsLocationsResponse,
  ModifyEntryProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ModifyEntryProjectsLocationsRequest,
  output: ModifyEntryProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface LookupContextProjectsLocationsRequest {
  /** Required. The project to which the request should be attributed in the following form: projects/{project}/locations/{location}. */
  name: string;
  /** Request body */
  body?: GoogleCloudDataplexV1LookupContextRequest;
}

export const LookupContextProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDataplexV1LookupContextRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:lookupContext", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<LookupContextProjectsLocationsRequest>;

export type LookupContextProjectsLocationsResponse =
  GoogleCloudDataplexV1LookupContextResponse;
export const LookupContextProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1LookupContextResponse;

export type LookupContextProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Looks up LLM Context for the specified resources. */
export const lookupContextProjectsLocations: API.OperationMethod<
  LookupContextProjectsLocationsRequest,
  LookupContextProjectsLocationsResponse,
  LookupContextProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LookupContextProjectsLocationsRequest,
  output: LookupContextProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SearchEntriesProjectsLocationsRequest {
  /** Optional. Number of results in the search page. If <=0, then defaults to 10. Max limit for page_size is 1000. Throws an invalid argument for page_size > 1000. */
  pageSize?: number;
  /** Required. The project to which the request should be attributed in the following form: projects/{project}/locations/global. */
  name: string;
  /** Optional. Specifies whether the search should understand the meaning and intent behind the query, rather than just matching keywords. */
  semanticSearch?: boolean;
  /** Optional. Page token received from a previous SearchEntries call. Provide this to retrieve the subsequent page. */
  pageToken?: string;
  /** Optional. Specifies the ordering of results. Supported values are: relevance last_modified_timestamp last_modified_timestamp asc */
  orderBy?: string;
  /** Optional. The scope under which the search should be operating. It must either be organizations/ or projects/. If it is unspecified, it defaults to the organization where the project provided in name is located. */
  scope?: string;
  /** Required. The query against which entries in scope should be matched. The query syntax is defined in Search syntax for Dataplex Universal Catalog (https://cloud.google.com/dataplex/docs/search-syntax). */
  query?: string;
}

export const SearchEntriesProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    semanticSearch: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("semanticSearch"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    scope: Schema.optional(Schema.String).pipe(T.HttpQuery("scope")),
    query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:searchEntries", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SearchEntriesProjectsLocationsRequest>;

export type SearchEntriesProjectsLocationsResponse =
  GoogleCloudDataplexV1SearchEntriesResponse;
export const SearchEntriesProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1SearchEntriesResponse;

export type SearchEntriesProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Searches for Entries matching the given query and scope. */
export const searchEntriesProjectsLocations: API.PaginatedOperationMethod<
  SearchEntriesProjectsLocationsRequest,
  SearchEntriesProjectsLocationsResponse,
  SearchEntriesProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchEntriesProjectsLocationsRequest,
  output: SearchEntriesProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface TestIamPermissionsProjectsLocationsChangeRequestsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsChangeRequestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsChangeRequestsRequest>;

export type TestIamPermissionsProjectsLocationsChangeRequestsResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsChangeRequestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsChangeRequestsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsChangeRequests: API.OperationMethod<
  TestIamPermissionsProjectsLocationsChangeRequestsRequest,
  TestIamPermissionsProjectsLocationsChangeRequestsResponse,
  TestIamPermissionsProjectsLocationsChangeRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsChangeRequestsRequest,
  output: TestIamPermissionsProjectsLocationsChangeRequestsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsChangeRequestsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsChangeRequestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsChangeRequestsRequest>;

export type SetIamPolicyProjectsLocationsChangeRequestsResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsChangeRequestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsChangeRequestsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyProjectsLocationsChangeRequests: API.OperationMethod<
  SetIamPolicyProjectsLocationsChangeRequestsRequest,
  SetIamPolicyProjectsLocationsChangeRequestsResponse,
  SetIamPolicyProjectsLocationsChangeRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsChangeRequestsRequest,
  output: SetIamPolicyProjectsLocationsChangeRequestsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsChangeRequestsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsChangeRequestsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsChangeRequestsRequest>;

export type GetIamPolicyProjectsLocationsChangeRequestsResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsChangeRequestsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsChangeRequestsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsChangeRequests: API.OperationMethod<
  GetIamPolicyProjectsLocationsChangeRequestsRequest,
  GetIamPolicyProjectsLocationsChangeRequestsResponse,
  GetIamPolicyProjectsLocationsChangeRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsChangeRequestsRequest,
  output: GetIamPolicyProjectsLocationsChangeRequestsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetIamPolicyProjectsLocationsEntryGroupsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsEntryGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsEntryGroupsRequest>;

export type GetIamPolicyProjectsLocationsEntryGroupsResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsEntryGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsEntryGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsEntryGroups: API.OperationMethod<
  GetIamPolicyProjectsLocationsEntryGroupsRequest,
  GetIamPolicyProjectsLocationsEntryGroupsResponse,
  GetIamPolicyProjectsLocationsEntryGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsEntryGroupsRequest,
  output: GetIamPolicyProjectsLocationsEntryGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsEntryGroupsRequest {
  /** Required. The resource name of the EntryGroup: projects/{project_number}/locations/{location_id}/entryGroups/{entry_group_id}. */
  name: string;
  /** Optional. If the client provided etag value does not match the current etag value, the DeleteEntryGroupRequest method returns an ABORTED error response. */
  etag?: string;
}

export const DeleteProjectsLocationsEntryGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsEntryGroupsRequest>;

export type DeleteProjectsLocationsEntryGroupsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsEntryGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsEntryGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an EntryGroup. */
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
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsEntryGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsEntryGroupsRequest>;

export type SetIamPolicyProjectsLocationsEntryGroupsResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsEntryGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsEntryGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
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

export interface ListProjectsLocationsEntryGroupsRequest {
  /** Optional. Maximum number of EntryGroups to return. The service may return fewer than this value. If unspecified, the service returns at most 10 EntryGroups. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. Page token received from a previous ListEntryGroups call. Provide this to retrieve the subsequent page. When paginating, all other parameters you provide to ListEntryGroups must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filter request. */
  filter?: string;
  /** Required. The resource name of the entryGroup location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region. */
  parent: string;
  /** Optional. Order by fields for the result. */
  orderBy?: string;
}

export const ListProjectsLocationsEntryGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/entryGroups" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsEntryGroupsRequest>;

export type ListProjectsLocationsEntryGroupsResponse =
  GoogleCloudDataplexV1ListEntryGroupsResponse;
export const ListProjectsLocationsEntryGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListEntryGroupsResponse;

export type ListProjectsLocationsEntryGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists EntryGroup resources in a project and location. */
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

export interface CreateProjectsLocationsEntryGroupsRequest {
  /** Required. The resource name of the entryGroup, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region. */
  parent: string;
  /** Required. EntryGroup identifier. */
  entryGroupId?: string;
  /** Optional. The service validates the request without performing any mutations. The default is false. */
  validateOnly?: boolean;
  /** Request body */
  body?: GoogleCloudDataplexV1EntryGroup;
}

export const CreateProjectsLocationsEntryGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    entryGroupId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("entryGroupId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GoogleCloudDataplexV1EntryGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/entryGroups", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsEntryGroupsRequest>;

export type CreateProjectsLocationsEntryGroupsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsEntryGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsEntryGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an EntryGroup. */
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
  /** Output only. The relative resource name of the EntryGroup, in the format projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}. */
  name: string;
  /** Required. Mask of fields to update. */
  updateMask?: string;
  /** Optional. The service validates the request, without performing any mutations. The default is false. */
  validateOnly?: boolean;
  /** Request body */
  body?: GoogleCloudDataplexV1EntryGroup;
}

export const PatchProjectsLocationsEntryGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GoogleCloudDataplexV1EntryGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsEntryGroupsRequest>;

export type PatchProjectsLocationsEntryGroupsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsEntryGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsEntryGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an EntryGroup. */
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

export interface GetProjectsLocationsEntryGroupsRequest {
  /** Required. The resource name of the EntryGroup: projects/{project_number}/locations/{location_id}/entryGroups/{entry_group_id}. */
  name: string;
}

export const GetProjectsLocationsEntryGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsEntryGroupsRequest>;

export type GetProjectsLocationsEntryGroupsResponse =
  GoogleCloudDataplexV1EntryGroup;
export const GetProjectsLocationsEntryGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1EntryGroup;

export type GetProjectsLocationsEntryGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an EntryGroup. */
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

export interface TestIamPermissionsProjectsLocationsEntryGroupsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsEntryGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsEntryGroupsRequest>;

export type TestIamPermissionsProjectsLocationsEntryGroupsResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsEntryGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsEntryGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
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

export interface CreateProjectsLocationsEntryGroupsEntryLinksRequest {
  /** Required. Entry Link identifier * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the EntryGroup. */
  entryLinkId?: string;
  /** Required. The resource name of the parent Entry Group: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}. */
  parent: string;
  /** Request body */
  body?: GoogleCloudDataplexV1EntryLink;
}

export const CreateProjectsLocationsEntryGroupsEntryLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entryLinkId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("entryLinkId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDataplexV1EntryLink).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/entryLinks", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsEntryGroupsEntryLinksRequest>;

export type CreateProjectsLocationsEntryGroupsEntryLinksResponse =
  GoogleCloudDataplexV1EntryLink;
export const CreateProjectsLocationsEntryGroupsEntryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1EntryLink;

export type CreateProjectsLocationsEntryGroupsEntryLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an Entry Link. */
export const createProjectsLocationsEntryGroupsEntryLinks: API.OperationMethod<
  CreateProjectsLocationsEntryGroupsEntryLinksRequest,
  CreateProjectsLocationsEntryGroupsEntryLinksResponse,
  CreateProjectsLocationsEntryGroupsEntryLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsEntryGroupsEntryLinksRequest,
  output: CreateProjectsLocationsEntryGroupsEntryLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsEntryGroupsEntryLinksRequest {
  /** Output only. Immutable. Identifier. The relative resource name of the Entry Link, of the form: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entryLinks/{entry_link_id} */
  name: string;
  /** Optional. If set to true and the entry link doesn't exist, the service will create it. */
  allowMissing?: boolean;
  /** Optional. The map keys of the Aspects which the service should modify. It should be the aspect type reference in the format {project_id_or_number}.{location_id}.{aspect_type_id}.If this field is left empty, the service treats it as specifying exactly those Aspects present in the request. */
  aspectKeys?: string[];
  /** Request body */
  body?: GoogleCloudDataplexV1EntryLink;
}

export const PatchProjectsLocationsEntryGroupsEntryLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    aspectKeys: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("aspectKeys"),
    ),
    body: Schema.optional(GoogleCloudDataplexV1EntryLink).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsEntryGroupsEntryLinksRequest>;

export type PatchProjectsLocationsEntryGroupsEntryLinksResponse =
  GoogleCloudDataplexV1EntryLink;
export const PatchProjectsLocationsEntryGroupsEntryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1EntryLink;

export type PatchProjectsLocationsEntryGroupsEntryLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an Entry Link. */
export const patchProjectsLocationsEntryGroupsEntryLinks: API.OperationMethod<
  PatchProjectsLocationsEntryGroupsEntryLinksRequest,
  PatchProjectsLocationsEntryGroupsEntryLinksResponse,
  PatchProjectsLocationsEntryGroupsEntryLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsEntryGroupsEntryLinksRequest,
  output: PatchProjectsLocationsEntryGroupsEntryLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsEntryGroupsEntryLinksRequest {
  /** Required. The resource name of the Entry Link: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entryLinks/{entry_link_id}. */
  name: string;
}

export const GetProjectsLocationsEntryGroupsEntryLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsEntryGroupsEntryLinksRequest>;

export type GetProjectsLocationsEntryGroupsEntryLinksResponse =
  GoogleCloudDataplexV1EntryLink;
export const GetProjectsLocationsEntryGroupsEntryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1EntryLink;

export type GetProjectsLocationsEntryGroupsEntryLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an Entry Link. */
export const getProjectsLocationsEntryGroupsEntryLinks: API.OperationMethod<
  GetProjectsLocationsEntryGroupsEntryLinksRequest,
  GetProjectsLocationsEntryGroupsEntryLinksResponse,
  GetProjectsLocationsEntryGroupsEntryLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsEntryGroupsEntryLinksRequest,
  output: GetProjectsLocationsEntryGroupsEntryLinksResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsEntryGroupsEntryLinksRequest {
  /** Required. The resource name of the Entry Link: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entryLinks/{entry_link_id}. */
  name: string;
}

export const DeleteProjectsLocationsEntryGroupsEntryLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsEntryGroupsEntryLinksRequest>;

export type DeleteProjectsLocationsEntryGroupsEntryLinksResponse =
  GoogleCloudDataplexV1EntryLink;
export const DeleteProjectsLocationsEntryGroupsEntryLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1EntryLink;

export type DeleteProjectsLocationsEntryGroupsEntryLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an Entry Link. */
export const deleteProjectsLocationsEntryGroupsEntryLinks: API.OperationMethod<
  DeleteProjectsLocationsEntryGroupsEntryLinksRequest,
  DeleteProjectsLocationsEntryGroupsEntryLinksResponse,
  DeleteProjectsLocationsEntryGroupsEntryLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsEntryGroupsEntryLinksRequest,
  output: DeleteProjectsLocationsEntryGroupsEntryLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsEntryGroupsEntriesRequest {
  /** Required. The resource name of the parent Entry Group: projects/{project}/locations/{location}/entryGroups/{entry_group}. */
  parent: string;
  /** Required. Entry identifier. It has to be unique within an Entry Group.Entries corresponding to Google Cloud resources use an Entry ID format based on full resource names (https://cloud.google.com/apis/design/resource_names#full_resource_name). The format is a full resource name of the resource without the prefix double slashes in the API service name part of the full resource name. This allows retrieval of entries using their associated resource name.For example, if the full resource name of a resource is //library.googleapis.com/shelves/shelf1/books/book2, then the suggested entry_id is library.googleapis.com/shelves/shelf1/books/book2.It is also suggested to follow the same convention for entries corresponding to resources from providers or systems other than Google Cloud.The maximum size of the field is 4000 characters. */
  entryId?: string;
  /** Request body */
  body?: GoogleCloudDataplexV1Entry;
}

export const CreateProjectsLocationsEntryGroupsEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    entryId: Schema.optional(Schema.String).pipe(T.HttpQuery("entryId")),
    body: Schema.optional(GoogleCloudDataplexV1Entry).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/entries", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsEntryGroupsEntriesRequest>;

export type CreateProjectsLocationsEntryGroupsEntriesResponse =
  GoogleCloudDataplexV1Entry;
export const CreateProjectsLocationsEntryGroupsEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1Entry;

export type CreateProjectsLocationsEntryGroupsEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an Entry. */
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

export interface PatchProjectsLocationsEntryGroupsEntriesRequest {
  /** Optional. The map keys of the Aspects which the service should modify. It supports the following syntaxes: - matches an aspect of the given type and empty path. @path - matches an aspect of the given type and specified path. For example, to attach an aspect to a field that is specified by the schema aspect, the path should have the format Schema.. @* - matches aspects of the given type for all paths. *@path - matches aspects of all types on the given path.The service will not remove existing aspects matching the syntax unless delete_missing_aspects is set to true.If this field is left empty, the service treats it as specifying exactly those Aspects present in the request. */
  aspectKeys?: string[];
  /** Identifier. The relative resource name of the entry, in the format projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}. */
  name: string;
  /** Optional. Mask of fields to update. To update Aspects, the update_mask must contain the value "aspects".If the update_mask is empty, the service will update all modifiable fields present in the request. */
  updateMask?: string;
  /** Optional. If set to true and the entry doesn't exist, the service will create it. */
  allowMissing?: boolean;
  /** Optional. If set to true and the aspect_keys specify aspect ranges, the service deletes any existing aspects from that range that weren't provided in the request. */
  deleteMissingAspects?: boolean;
  /** Request body */
  body?: GoogleCloudDataplexV1Entry;
}

export const PatchProjectsLocationsEntryGroupsEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aspectKeys: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("aspectKeys"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    deleteMissingAspects: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("deleteMissingAspects"),
    ),
    body: Schema.optional(GoogleCloudDataplexV1Entry).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsEntryGroupsEntriesRequest>;

export type PatchProjectsLocationsEntryGroupsEntriesResponse =
  GoogleCloudDataplexV1Entry;
export const PatchProjectsLocationsEntryGroupsEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1Entry;

export type PatchProjectsLocationsEntryGroupsEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an Entry. */
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

export interface GetProjectsLocationsEntryGroupsEntriesRequest {
  /** Optional. Limits the aspects returned to those associated with the provided paths within the Entry. It only works for CUSTOM view. */
  paths?: string[];
  /** Required. The resource name of the Entry: projects/{project}/locations/{location}/entryGroups/{entry_group}/entries/{entry}. */
  name: string;
  /** Optional. View to control which parts of an entry the service should return. Please check the limitations on returned aspects in the Entry view documentation. Amount of returned aspects depends on the selected Entry View. */
  view?:
    | "ENTRY_VIEW_UNSPECIFIED"
    | "BASIC"
    | "FULL"
    | "CUSTOM"
    | "ALL"
    | (string & {});
  /** Optional. Limits the aspects returned to the provided aspect types. It only works for CUSTOM view. */
  aspectTypes?: string[];
}

export const GetProjectsLocationsEntryGroupsEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paths: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("paths"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    aspectTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("aspectTypes"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsEntryGroupsEntriesRequest>;

export type GetProjectsLocationsEntryGroupsEntriesResponse =
  GoogleCloudDataplexV1Entry;
export const GetProjectsLocationsEntryGroupsEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1Entry;

export type GetProjectsLocationsEntryGroupsEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an Entry. */
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
  /** Optional. Number of items to return per page. If there are remaining results, the service returns a next_page_token. If unspecified, the service returns at most 10 Entries. The maximum value is 100; values above 100 will be coerced to 100. */
  pageSize?: number;
  /** Required. The resource name of the parent Entry Group: projects/{project}/locations/{location}/entryGroups/{entry_group}. */
  parent: string;
  /** Optional. A filter on the entries to return. Filters are case-sensitive. You can filter the request by the following fields: entry_type entry_source.display_name parent_entryThe comparison operators are =, !=, <, >, <=, >=. The service compares strings according to lexical order.You can use the logical operators AND, OR, NOT in the filter.You can use Wildcard "*", but for entry_type and parent_entry you need to provide the full project id or number.You cannot use parent_entry in conjunction with other fields.Example filter expressions: "entry_source.display_name=AnExampleDisplayName" "entry_type=projects/example-project/locations/global/entryTypes/example-entry_type" "entry_type=projects/example-project/locations/us/entryTypes/a* OR entry_type=projects/another-project/locations/*" "NOT entry_source.display_name=AnotherExampleDisplayName" "parent_entry=projects/example-project/locations/us/entryGroups/example-entry-group/entries/example-entry" */
  filter?: string;
  /** Optional. Page token received from a previous ListEntries call. Provide this to retrieve the subsequent page. */
  pageToken?: string;
}

export const ListProjectsLocationsEntryGroupsEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/entries" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsEntryGroupsEntriesRequest>;

export type ListProjectsLocationsEntryGroupsEntriesResponse =
  GoogleCloudDataplexV1ListEntriesResponse;
export const ListProjectsLocationsEntryGroupsEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListEntriesResponse;

export type ListProjectsLocationsEntryGroupsEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Entries within an EntryGroup. */
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

export interface DeleteProjectsLocationsEntryGroupsEntriesRequest {
  /** Required. The resource name of the Entry: projects/{project}/locations/{location}/entryGroups/{entry_group}/entries/{entry}. */
  name: string;
}

export const DeleteProjectsLocationsEntryGroupsEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsEntryGroupsEntriesRequest>;

export type DeleteProjectsLocationsEntryGroupsEntriesResponse =
  GoogleCloudDataplexV1Entry;
export const DeleteProjectsLocationsEntryGroupsEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1Entry;

export type DeleteProjectsLocationsEntryGroupsEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an Entry. */
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

export interface GetIamPolicyProjectsLocationsDataScansRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsDataScansRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsDataScansRequest>;

export type GetIamPolicyProjectsLocationsDataScansResponse = GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsDataScansResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsDataScansError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsDataScans: API.OperationMethod<
  GetIamPolicyProjectsLocationsDataScansRequest,
  GetIamPolicyProjectsLocationsDataScansResponse,
  GetIamPolicyProjectsLocationsDataScansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsDataScansRequest,
  output: GetIamPolicyProjectsLocationsDataScansResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsDataScansRequest {
  /** Required. The resource name of the parent location: projects/{project}/locations/{location_id} where project refers to a project_id or project_number and location_id refers to a Google Cloud region. */
  parent: string;
  /** Required. DataScan identifier. Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter. Must be between 1-63 characters. Must be unique within the customer project / location. */
  dataScanId?: string;
  /** Optional. Only validate the request, but do not perform mutations. The default is false. */
  validateOnly?: boolean;
  /** Request body */
  body?: GoogleCloudDataplexV1DataScan;
}

export const CreateProjectsLocationsDataScansRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    dataScanId: Schema.optional(Schema.String).pipe(T.HttpQuery("dataScanId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GoogleCloudDataplexV1DataScan).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/dataScans", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDataScansRequest>;

export type CreateProjectsLocationsDataScansResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsDataScansResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsDataScansError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a DataScan resource. */
export const createProjectsLocationsDataScans: API.OperationMethod<
  CreateProjectsLocationsDataScansRequest,
  CreateProjectsLocationsDataScansResponse,
  CreateProjectsLocationsDataScansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDataScansRequest,
  output: CreateProjectsLocationsDataScansResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsDataScansRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsDataScansRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsDataScansRequest>;

export type SetIamPolicyProjectsLocationsDataScansResponse = GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsDataScansResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsDataScansError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyProjectsLocationsDataScans: API.OperationMethod<
  SetIamPolicyProjectsLocationsDataScansRequest,
  SetIamPolicyProjectsLocationsDataScansResponse,
  SetIamPolicyProjectsLocationsDataScansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsDataScansRequest,
  output: SetIamPolicyProjectsLocationsDataScansResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsDataScansRequest {
  /** Required. The resource name of the dataScan: projects/{project}/locations/{location_id}/dataScans/{data_scan_id} where project refers to a project_id or project_number and location_id refers to a Google Cloud region. */
  name: string;
  /** Optional. If set to true, any child resources of this data scan will also be deleted. (Otherwise, the request will only work if the data scan has no child resources.) */
  force?: boolean;
}

export const DeleteProjectsLocationsDataScansRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsDataScansRequest>;

export type DeleteProjectsLocationsDataScansResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsDataScansResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsDataScansError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a DataScan resource. */
export const deleteProjectsLocationsDataScans: API.OperationMethod<
  DeleteProjectsLocationsDataScansRequest,
  DeleteProjectsLocationsDataScansResponse,
  DeleteProjectsLocationsDataScansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDataScansRequest,
  output: DeleteProjectsLocationsDataScansResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RunProjectsLocationsDataScansRequest {
  /** Required. The resource name of the DataScan: projects/{project}/locations/{location_id}/dataScans/{data_scan_id}. where project refers to a project_id or project_number and location_id refers to a Google Cloud region.Only OnDemand data scans are allowed. */
  name: string;
  /** Request body */
  body?: GoogleCloudDataplexV1RunDataScanRequest;
}

export const RunProjectsLocationsDataScansRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDataplexV1RunDataScanRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:run", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RunProjectsLocationsDataScansRequest>;

export type RunProjectsLocationsDataScansResponse =
  GoogleCloudDataplexV1RunDataScanResponse;
export const RunProjectsLocationsDataScansResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1RunDataScanResponse;

export type RunProjectsLocationsDataScansError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Runs an on-demand execution of a DataScan */
export const runProjectsLocationsDataScans: API.OperationMethod<
  RunProjectsLocationsDataScansRequest,
  RunProjectsLocationsDataScansResponse,
  RunProjectsLocationsDataScansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunProjectsLocationsDataScansRequest,
  output: RunProjectsLocationsDataScansResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsDataScansRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsDataScansRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsDataScansRequest>;

export type TestIamPermissionsProjectsLocationsDataScansResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsDataScansResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsDataScansError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsDataScans: API.OperationMethod<
  TestIamPermissionsProjectsLocationsDataScansRequest,
  TestIamPermissionsProjectsLocationsDataScansResponse,
  TestIamPermissionsProjectsLocationsDataScansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsDataScansRequest,
  output: TestIamPermissionsProjectsLocationsDataScansResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateDataQualityRulesProjectsLocationsDataScansRequest {
  /** Required. The name must be one of the following: The name of a data scan with at least one successful, completed data profiling job The name of a successful, completed data profiling job (a data scan job where the job type is data profiling) */
  name: string;
  /** Request body */
  body?: GoogleCloudDataplexV1GenerateDataQualityRulesRequest;
}

export const GenerateDataQualityRulesProjectsLocationsDataScansRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDataplexV1GenerateDataQualityRulesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:generateDataQualityRules",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateDataQualityRulesProjectsLocationsDataScansRequest>;

export type GenerateDataQualityRulesProjectsLocationsDataScansResponse =
  GoogleCloudDataplexV1GenerateDataQualityRulesResponse;
export const GenerateDataQualityRulesProjectsLocationsDataScansResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1GenerateDataQualityRulesResponse;

export type GenerateDataQualityRulesProjectsLocationsDataScansError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates recommended data quality rules based on the results of a data profiling scan.Use the recommendations to build rules for a data quality scan. */
export const generateDataQualityRulesProjectsLocationsDataScans: API.OperationMethod<
  GenerateDataQualityRulesProjectsLocationsDataScansRequest,
  GenerateDataQualityRulesProjectsLocationsDataScansResponse,
  GenerateDataQualityRulesProjectsLocationsDataScansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateDataQualityRulesProjectsLocationsDataScansRequest,
  output: GenerateDataQualityRulesProjectsLocationsDataScansResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsDataScansRequest {
  /** Required. The resource name of the parent location: projects/{project}/locations/{location_id} where project refers to a project_id or project_number and location_id refers to a Google Cloud region. */
  parent: string;
  /** Optional. Order by fields (name or create_time) for the result. If not specified, the ordering is undefined. */
  orderBy?: string;
  /** Optional. Page token received from a previous ListDataScans call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataScans must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filter request. */
  filter?: string;
  /** Optional. Maximum number of dataScans to return. The service may return fewer than this value. If unspecified, at most 500 scans will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsDataScansRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dataScans" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDataScansRequest>;

export type ListProjectsLocationsDataScansResponse =
  GoogleCloudDataplexV1ListDataScansResponse;
export const ListProjectsLocationsDataScansResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListDataScansResponse;

export type ListProjectsLocationsDataScansError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists DataScans. */
export const listProjectsLocationsDataScans: API.PaginatedOperationMethod<
  ListProjectsLocationsDataScansRequest,
  ListProjectsLocationsDataScansResponse,
  ListProjectsLocationsDataScansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDataScansRequest,
  output: ListProjectsLocationsDataScansResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsDataScansRequest {
  /** Optional. Mask of fields to update. */
  updateMask?: string;
  /** Optional. Only validate the request, but do not perform mutations. The default is false. */
  validateOnly?: boolean;
  /** Output only. Identifier. The relative resource name of the scan, of the form: projects/{project}/locations/{location_id}/dataScans/{datascan_id}, where project refers to a project_id or project_number and location_id refers to a Google Cloud region. */
  name: string;
  /** Request body */
  body?: GoogleCloudDataplexV1DataScan;
}

export const PatchProjectsLocationsDataScansRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDataplexV1DataScan).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsDataScansRequest>;

export type PatchProjectsLocationsDataScansResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsDataScansResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsDataScansError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a DataScan resource. */
export const patchProjectsLocationsDataScans: API.OperationMethod<
  PatchProjectsLocationsDataScansRequest,
  PatchProjectsLocationsDataScansResponse,
  PatchProjectsLocationsDataScansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsDataScansRequest,
  output: PatchProjectsLocationsDataScansResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsDataScansRequest {
  /** Optional. Select the DataScan view to return. Defaults to BASIC. */
  view?: "DATA_SCAN_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
  /** Required. The resource name of the dataScan: projects/{project}/locations/{location_id}/dataScans/{data_scan_id} where project refers to a project_id or project_number and location_id refers to a Google Cloud region. */
  name: string;
}

export const GetProjectsLocationsDataScansRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDataScansRequest>;

export type GetProjectsLocationsDataScansResponse =
  GoogleCloudDataplexV1DataScan;
export const GetProjectsLocationsDataScansResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1DataScan;

export type GetProjectsLocationsDataScansError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a DataScan resource. */
export const getProjectsLocationsDataScans: API.OperationMethod<
  GetProjectsLocationsDataScansRequest,
  GetProjectsLocationsDataScansResponse,
  GetProjectsLocationsDataScansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDataScansRequest,
  output: GetProjectsLocationsDataScansResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsDataScansJobsRequest {
  /** Optional. Select the DataScanJob view to return. Defaults to BASIC. */
  view?: "DATA_SCAN_JOB_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
  /** Required. The resource name of the DataScanJob: projects/{project}/locations/{location_id}/dataScans/{data_scan_id}/jobs/{data_scan_job_id} where project refers to a project_id or project_number and location_id refers to a Google Cloud region. */
  name: string;
}

export const GetProjectsLocationsDataScansJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDataScansJobsRequest>;

export type GetProjectsLocationsDataScansJobsResponse =
  GoogleCloudDataplexV1DataScanJob;
export const GetProjectsLocationsDataScansJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1DataScanJob;

export type GetProjectsLocationsDataScansJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a DataScanJob resource. */
export const getProjectsLocationsDataScansJobs: API.OperationMethod<
  GetProjectsLocationsDataScansJobsRequest,
  GetProjectsLocationsDataScansJobsResponse,
  GetProjectsLocationsDataScansJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDataScansJobsRequest,
  output: GetProjectsLocationsDataScansJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsDataScansJobsRequest {
  /** Optional. Maximum number of DataScanJobs to return. The service may return fewer than this value. If unspecified, at most 10 DataScanJobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. Page token received from a previous ListDataScanJobs call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataScanJobs must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The resource name of the parent environment: projects/{project}/locations/{location_id}/dataScans/{data_scan_id} where project refers to a project_id or project_number and location_id refers to a Google Cloud region. */
  parent: string;
  /** Optional. An expression for filtering the results of the ListDataScanJobs request.If unspecified, all datascan jobs will be returned. Multiple filters can be applied (with AND, OR logical operators). Filters are case-sensitive.Allowed fields are: start_time end_timestart_time and end_time expect RFC-3339 formatted strings (e.g. 2018-10-08T18:30:00-07:00).For instance, 'start_time > 2018-10-08T00:00:00.123456789Z AND end_time < 2018-10-09T00:00:00.123456789Z' limits results to DataScanJobs between specified start and end times. */
  filter?: string;
}

export const ListProjectsLocationsDataScansJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/jobs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDataScansJobsRequest>;

export type ListProjectsLocationsDataScansJobsResponse =
  GoogleCloudDataplexV1ListDataScanJobsResponse;
export const ListProjectsLocationsDataScansJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListDataScanJobsResponse;

export type ListProjectsLocationsDataScansJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists DataScanJobs under the given DataScan. */
export const listProjectsLocationsDataScansJobs: API.PaginatedOperationMethod<
  ListProjectsLocationsDataScansJobsRequest,
  ListProjectsLocationsDataScansJobsResponse,
  ListProjectsLocationsDataScansJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDataScansJobsRequest,
  output: ListProjectsLocationsDataScansJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CancelProjectsLocationsDataScansJobsRequest {
  /** Required. The resource name of the DataScanJob: projects/{project_id_or_number}/locations/{location_id}/dataScans/{data_scan_id}/jobs/{data_scan_job_id} where project_id_or_number refers to a project_id or project_number and location_id refers to a Google Cloud region. */
  name: string;
  /** Request body */
  body?: GoogleCloudDataplexV1CancelDataScanJobRequest;
}

export const CancelProjectsLocationsDataScansJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDataplexV1CancelDataScanJobRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsDataScansJobsRequest>;

export type CancelProjectsLocationsDataScansJobsResponse =
  GoogleCloudDataplexV1CancelDataScanJobResponse;
export const CancelProjectsLocationsDataScansJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1CancelDataScanJobResponse;

export type CancelProjectsLocationsDataScansJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cancels a running/pending DataScan job. */
export const cancelProjectsLocationsDataScansJobs: API.OperationMethod<
  CancelProjectsLocationsDataScansJobsRequest,
  CancelProjectsLocationsDataScansJobsResponse,
  CancelProjectsLocationsDataScansJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsDataScansJobsRequest,
  output: CancelProjectsLocationsDataScansJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateDataQualityRulesProjectsLocationsDataScansJobsRequest {
  /** Required. The name must be one of the following: The name of a data scan with at least one successful, completed data profiling job The name of a successful, completed data profiling job (a data scan job where the job type is data profiling) */
  name: string;
  /** Request body */
  body?: GoogleCloudDataplexV1GenerateDataQualityRulesRequest;
}

export const GenerateDataQualityRulesProjectsLocationsDataScansJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDataplexV1GenerateDataQualityRulesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:generateDataQualityRules",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateDataQualityRulesProjectsLocationsDataScansJobsRequest>;

export type GenerateDataQualityRulesProjectsLocationsDataScansJobsResponse =
  GoogleCloudDataplexV1GenerateDataQualityRulesResponse;
export const GenerateDataQualityRulesProjectsLocationsDataScansJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1GenerateDataQualityRulesResponse;

export type GenerateDataQualityRulesProjectsLocationsDataScansJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates recommended data quality rules based on the results of a data profiling scan.Use the recommendations to build rules for a data quality scan. */
export const generateDataQualityRulesProjectsLocationsDataScansJobs: API.OperationMethod<
  GenerateDataQualityRulesProjectsLocationsDataScansJobsRequest,
  GenerateDataQualityRulesProjectsLocationsDataScansJobsResponse,
  GenerateDataQualityRulesProjectsLocationsDataScansJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateDataQualityRulesProjectsLocationsDataScansJobsRequest,
  output: GenerateDataQualityRulesProjectsLocationsDataScansJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsMetadataJobsRequest {
  /** Required. The resource name of the parent location, in the format projects/{project_id_or_number}/locations/{location_id} */
  parent: string;
  /** Optional. The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-. */
  metadataJobId?: string;
  /** Optional. The service validates the request without performing any mutations. The default is false. */
  validateOnly?: boolean;
  /** Request body */
  body?: GoogleCloudDataplexV1MetadataJob;
}

export const CreateProjectsLocationsMetadataJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    metadataJobId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("metadataJobId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GoogleCloudDataplexV1MetadataJob).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/metadataJobs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsMetadataJobsRequest>;

export type CreateProjectsLocationsMetadataJobsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsMetadataJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsMetadataJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a metadata job. For example, use a metadata job to import metadata from a third-party system into Dataplex Universal Catalog. */
export const createProjectsLocationsMetadataJobs: API.OperationMethod<
  CreateProjectsLocationsMetadataJobsRequest,
  CreateProjectsLocationsMetadataJobsResponse,
  CreateProjectsLocationsMetadataJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsMetadataJobsRequest,
  output: CreateProjectsLocationsMetadataJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsMetadataJobsRequest {
  /** Required. The resource name of the metadata job, in the format projects/{project_id_or_number}/locations/{location_id}/metadataJobs/{metadata_job_id}. */
  name: string;
}

export const GetProjectsLocationsMetadataJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsMetadataJobsRequest>;

export type GetProjectsLocationsMetadataJobsResponse =
  GoogleCloudDataplexV1MetadataJob;
export const GetProjectsLocationsMetadataJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1MetadataJob;

export type GetProjectsLocationsMetadataJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a metadata job. */
export const getProjectsLocationsMetadataJobs: API.OperationMethod<
  GetProjectsLocationsMetadataJobsRequest,
  GetProjectsLocationsMetadataJobsResponse,
  GetProjectsLocationsMetadataJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMetadataJobsRequest,
  output: GetProjectsLocationsMetadataJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsMetadataJobsRequest {
  /** Optional. The page token received from a previous ListMetadataJobs call. Provide this token to retrieve the subsequent page of results. When paginating, all other parameters that are provided to the ListMetadataJobs request must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filter request. Filters are case-sensitive. The service supports the following formats: labels.key1 = "value1" labels:key1 name = "value"You can combine filters with AND, OR, and NOT operators. */
  filter?: string;
  /** Optional. The maximum number of metadata jobs to return. The service might return fewer jobs than this value. If unspecified, at most 10 jobs are returned. The maximum value is 1,000. */
  pageSize?: number;
  /** Required. The resource name of the parent location, in the format projects/{project_id_or_number}/locations/{location_id} */
  parent: string;
  /** Optional. The field to sort the results by, either name or create_time. If not specified, the ordering is undefined. */
  orderBy?: string;
}

export const ListProjectsLocationsMetadataJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/metadataJobs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsMetadataJobsRequest>;

export type ListProjectsLocationsMetadataJobsResponse =
  GoogleCloudDataplexV1ListMetadataJobsResponse;
export const ListProjectsLocationsMetadataJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListMetadataJobsResponse;

export type ListProjectsLocationsMetadataJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists metadata jobs. */
export const listProjectsLocationsMetadataJobs: API.PaginatedOperationMethod<
  ListProjectsLocationsMetadataJobsRequest,
  ListProjectsLocationsMetadataJobsResponse,
  ListProjectsLocationsMetadataJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsMetadataJobsRequest,
  output: ListProjectsLocationsMetadataJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CancelProjectsLocationsMetadataJobsRequest {
  /** Required. The resource name of the job, in the format projects/{project_id_or_number}/locations/{location_id}/metadataJobs/{metadata_job_id} */
  name: string;
  /** Request body */
  body?: GoogleCloudDataplexV1CancelMetadataJobRequest;
}

export const CancelProjectsLocationsMetadataJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDataplexV1CancelMetadataJobRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsMetadataJobsRequest>;

export type CancelProjectsLocationsMetadataJobsResponse = Empty;
export const CancelProjectsLocationsMetadataJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelProjectsLocationsMetadataJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cancels a metadata job.If you cancel a metadata import job that is in progress, the changes in the job might be partially applied. We recommend that you reset the state of the entry groups in your project by running another metadata job that reverts the changes from the canceled job. */
export const cancelProjectsLocationsMetadataJobs: API.OperationMethod<
  CancelProjectsLocationsMetadataJobsRequest,
  CancelProjectsLocationsMetadataJobsResponse,
  CancelProjectsLocationsMetadataJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsMetadataJobsRequest,
  output: CancelProjectsLocationsMetadataJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsDataDomainsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsDataDomainsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsDataDomainsRequest>;

export type TestIamPermissionsProjectsLocationsDataDomainsResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsDataDomainsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsDataDomainsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsDataDomains: API.OperationMethod<
  TestIamPermissionsProjectsLocationsDataDomainsRequest,
  TestIamPermissionsProjectsLocationsDataDomainsResponse,
  TestIamPermissionsProjectsLocationsDataDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsDataDomainsRequest,
  output: TestIamPermissionsProjectsLocationsDataDomainsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsDataDomainsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsDataDomainsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsDataDomainsRequest>;

export type SetIamPolicyProjectsLocationsDataDomainsResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsDataDomainsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsDataDomainsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyProjectsLocationsDataDomains: API.OperationMethod<
  SetIamPolicyProjectsLocationsDataDomainsRequest,
  SetIamPolicyProjectsLocationsDataDomainsResponse,
  SetIamPolicyProjectsLocationsDataDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsDataDomainsRequest,
  output: SetIamPolicyProjectsLocationsDataDomainsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsDataDomainsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsDataDomainsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsDataDomainsRequest>;

export type GetIamPolicyProjectsLocationsDataDomainsResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsDataDomainsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsDataDomainsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsDataDomains: API.OperationMethod<
  GetIamPolicyProjectsLocationsDataDomainsRequest,
  GetIamPolicyProjectsLocationsDataDomainsResponse,
  GetIamPolicyProjectsLocationsDataDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsDataDomainsRequest,
  output: GetIamPolicyProjectsLocationsDataDomainsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsLakesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsLakesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsLakesRequest>;

export type SetIamPolicyProjectsLocationsLakesResponse = GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsLakesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsLakesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyProjectsLocationsLakes: API.OperationMethod<
  SetIamPolicyProjectsLocationsLakesRequest,
  SetIamPolicyProjectsLocationsLakesResponse,
  SetIamPolicyProjectsLocationsLakesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsLakesRequest,
  output: SetIamPolicyProjectsLocationsLakesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsLakesRequest {
  /** Required. The resource name of the lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}. */
  name: string;
}

export const DeleteProjectsLocationsLakesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsLakesRequest>;

export type DeleteProjectsLocationsLakesResponse = GoogleLongrunningOperation;
export const DeleteProjectsLocationsLakesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsLakesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a lake resource. All zones within the lake must be deleted before the lake can be deleted. */
export const deleteProjectsLocationsLakes: API.OperationMethod<
  DeleteProjectsLocationsLakesRequest,
  DeleteProjectsLocationsLakesResponse,
  DeleteProjectsLocationsLakesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsLakesRequest,
  output: DeleteProjectsLocationsLakesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsLakesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsLakesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsLakesRequest>;

export type GetIamPolicyProjectsLocationsLakesResponse = GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsLakesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsLakesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsLakes: API.OperationMethod<
  GetIamPolicyProjectsLocationsLakesRequest,
  GetIamPolicyProjectsLocationsLakesResponse,
  GetIamPolicyProjectsLocationsLakesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsLakesRequest,
  output: GetIamPolicyProjectsLocationsLakesResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsLakesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsLakesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsLakesRequest>;

export type TestIamPermissionsProjectsLocationsLakesResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsLakesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsLakesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsLakes: API.OperationMethod<
  TestIamPermissionsProjectsLocationsLakesRequest,
  TestIamPermissionsProjectsLocationsLakesResponse,
  TestIamPermissionsProjectsLocationsLakesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsLakesRequest,
  output: TestIamPermissionsProjectsLocationsLakesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsLakesRequest {
  /** Required. The resource name of the lake location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region. */
  parent: string;
  /** Required. Lake identifier. This ID will be used to generate names such as database and dataset names when publishing metadata to Hive Metastore and BigQuery. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must end with a number or a letter. * Must be between 1-63 characters. * Must be unique within the customer project / location. */
  lakeId?: string;
  /** Optional. Only validate the request, but do not perform mutations. The default is false. */
  validateOnly?: boolean;
  /** Request body */
  body?: GoogleCloudDataplexV1Lake;
}

export const CreateProjectsLocationsLakesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    lakeId: Schema.optional(Schema.String).pipe(T.HttpQuery("lakeId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GoogleCloudDataplexV1Lake).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/lakes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsLakesRequest>;

export type CreateProjectsLocationsLakesResponse = GoogleLongrunningOperation;
export const CreateProjectsLocationsLakesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsLakesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a lake resource. */
export const createProjectsLocationsLakes: API.OperationMethod<
  CreateProjectsLocationsLakesRequest,
  CreateProjectsLocationsLakesResponse,
  CreateProjectsLocationsLakesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsLakesRequest,
  output: CreateProjectsLocationsLakesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsLakesRequest {
  /** Required. Mask of fields to update. */
  updateMask?: string;
  /** Optional. Only validate the request, but do not perform mutations. The default is false. */
  validateOnly?: boolean;
  /** Output only. The relative resource name of the lake, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}. */
  name: string;
  /** Request body */
  body?: GoogleCloudDataplexV1Lake;
}

export const PatchProjectsLocationsLakesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDataplexV1Lake).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsLakesRequest>;

export type PatchProjectsLocationsLakesResponse = GoogleLongrunningOperation;
export const PatchProjectsLocationsLakesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsLakesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a lake resource. */
export const patchProjectsLocationsLakes: API.OperationMethod<
  PatchProjectsLocationsLakesRequest,
  PatchProjectsLocationsLakesResponse,
  PatchProjectsLocationsLakesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsLakesRequest,
  output: PatchProjectsLocationsLakesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsLakesRequest {
  /** Required. The resource name of the lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}. */
  name: string;
}

export const GetProjectsLocationsLakesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsLakesRequest>;

export type GetProjectsLocationsLakesResponse = GoogleCloudDataplexV1Lake;
export const GetProjectsLocationsLakesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1Lake;

export type GetProjectsLocationsLakesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a lake resource. */
export const getProjectsLocationsLakes: API.OperationMethod<
  GetProjectsLocationsLakesRequest,
  GetProjectsLocationsLakesResponse,
  GetProjectsLocationsLakesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsLakesRequest,
  output: GetProjectsLocationsLakesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsLakesRequest {
  /** Required. The resource name of the lake location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region. */
  parent: string;
  /** Optional. Order by fields for the result. */
  orderBy?: string;
  /** Optional. Maximum number of Lakes to return. The service may return fewer than this value. If unspecified, at most 10 lakes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. Filter request. */
  filter?: string;
  /** Optional. Page token received from a previous ListLakes call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListLakes must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsLakesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/lakes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsLakesRequest>;

export type ListProjectsLocationsLakesResponse =
  GoogleCloudDataplexV1ListLakesResponse;
export const ListProjectsLocationsLakesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListLakesResponse;

export type ListProjectsLocationsLakesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists lake resources in a project and location. */
export const listProjectsLocationsLakes: API.PaginatedOperationMethod<
  ListProjectsLocationsLakesRequest,
  ListProjectsLocationsLakesResponse,
  ListProjectsLocationsLakesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsLakesRequest,
  output: ListProjectsLocationsLakesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsLakesZonesRequest {
  /** Optional. Only validate the request, but do not perform mutations. The default is false. */
  validateOnly?: boolean;
  /** Required. Zone identifier. This ID will be used to generate names such as database and dataset names when publishing metadata to Hive Metastore and BigQuery. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must end with a number or a letter. * Must be between 1-63 characters. * Must be unique across all lakes from all locations in a project. * Must not be one of the reserved IDs (i.e. "default", "global-temp") */
  zoneId?: string;
  /** Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}. */
  parent: string;
  /** Request body */
  body?: GoogleCloudDataplexV1Zone;
}

export const CreateProjectsLocationsLakesZonesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    zoneId: Schema.optional(Schema.String).pipe(T.HttpQuery("zoneId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDataplexV1Zone).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/zones", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsLakesZonesRequest>;

export type CreateProjectsLocationsLakesZonesResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsLakesZonesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsLakesZonesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a zone resource within a lake. */
export const createProjectsLocationsLakesZones: API.OperationMethod<
  CreateProjectsLocationsLakesZonesRequest,
  CreateProjectsLocationsLakesZonesResponse,
  CreateProjectsLocationsLakesZonesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsLakesZonesRequest,
  output: CreateProjectsLocationsLakesZonesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsLakesZonesRequest {
  /** Output only. The relative resource name of the zone, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}. */
  name: string;
  /** Required. Mask of fields to update. */
  updateMask?: string;
  /** Optional. Only validate the request, but do not perform mutations. The default is false. */
  validateOnly?: boolean;
  /** Request body */
  body?: GoogleCloudDataplexV1Zone;
}

export const PatchProjectsLocationsLakesZonesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GoogleCloudDataplexV1Zone).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsLakesZonesRequest>;

export type PatchProjectsLocationsLakesZonesResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsLakesZonesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsLakesZonesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a zone resource. */
export const patchProjectsLocationsLakesZones: API.OperationMethod<
  PatchProjectsLocationsLakesZonesRequest,
  PatchProjectsLocationsLakesZonesResponse,
  PatchProjectsLocationsLakesZonesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsLakesZonesRequest,
  output: PatchProjectsLocationsLakesZonesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsLakesZonesRequest {
  /** Required. The resource name of the zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}. */
  name: string;
}

export const GetProjectsLocationsLakesZonesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsLakesZonesRequest>;

export type GetProjectsLocationsLakesZonesResponse = GoogleCloudDataplexV1Zone;
export const GetProjectsLocationsLakesZonesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1Zone;

export type GetProjectsLocationsLakesZonesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a zone resource. */
export const getProjectsLocationsLakesZones: API.OperationMethod<
  GetProjectsLocationsLakesZonesRequest,
  GetProjectsLocationsLakesZonesResponse,
  GetProjectsLocationsLakesZonesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsLakesZonesRequest,
  output: GetProjectsLocationsLakesZonesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsLakesZonesRequest {
  /** Optional. Page token received from a previous ListZones call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListZones must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filter request. */
  filter?: string;
  /** Optional. Maximum number of zones to return. The service may return fewer than this value. If unspecified, at most 10 zones will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}. */
  parent: string;
  /** Optional. Order by fields for the result. */
  orderBy?: string;
}

export const ListProjectsLocationsLakesZonesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/zones" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsLakesZonesRequest>;

export type ListProjectsLocationsLakesZonesResponse =
  GoogleCloudDataplexV1ListZonesResponse;
export const ListProjectsLocationsLakesZonesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListZonesResponse;

export type ListProjectsLocationsLakesZonesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists zone resources in a lake. */
export const listProjectsLocationsLakesZones: API.PaginatedOperationMethod<
  ListProjectsLocationsLakesZonesRequest,
  ListProjectsLocationsLakesZonesResponse,
  ListProjectsLocationsLakesZonesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsLakesZonesRequest,
  output: ListProjectsLocationsLakesZonesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface TestIamPermissionsProjectsLocationsLakesZonesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsLakesZonesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsLakesZonesRequest>;

export type TestIamPermissionsProjectsLocationsLakesZonesResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsLakesZonesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsLakesZonesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsLakesZones: API.OperationMethod<
  TestIamPermissionsProjectsLocationsLakesZonesRequest,
  TestIamPermissionsProjectsLocationsLakesZonesResponse,
  TestIamPermissionsProjectsLocationsLakesZonesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsLakesZonesRequest,
  output: TestIamPermissionsProjectsLocationsLakesZonesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsLakesZonesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsLakesZonesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsLakesZonesRequest>;

export type GetIamPolicyProjectsLocationsLakesZonesResponse = GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsLakesZonesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsLakesZonesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsLakesZones: API.OperationMethod<
  GetIamPolicyProjectsLocationsLakesZonesRequest,
  GetIamPolicyProjectsLocationsLakesZonesResponse,
  GetIamPolicyProjectsLocationsLakesZonesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsLakesZonesRequest,
  output: GetIamPolicyProjectsLocationsLakesZonesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsLakesZonesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsLakesZonesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsLakesZonesRequest>;

export type SetIamPolicyProjectsLocationsLakesZonesResponse = GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsLakesZonesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsLakesZonesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyProjectsLocationsLakesZones: API.OperationMethod<
  SetIamPolicyProjectsLocationsLakesZonesRequest,
  SetIamPolicyProjectsLocationsLakesZonesResponse,
  SetIamPolicyProjectsLocationsLakesZonesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsLakesZonesRequest,
  output: SetIamPolicyProjectsLocationsLakesZonesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsLakesZonesRequest {
  /** Required. The resource name of the zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}. */
  name: string;
}

export const DeleteProjectsLocationsLakesZonesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsLakesZonesRequest>;

export type DeleteProjectsLocationsLakesZonesResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsLakesZonesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsLakesZonesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a zone resource. All assets within a zone must be deleted before the zone can be deleted. */
export const deleteProjectsLocationsLakesZones: API.OperationMethod<
  DeleteProjectsLocationsLakesZonesRequest,
  DeleteProjectsLocationsLakesZonesResponse,
  DeleteProjectsLocationsLakesZonesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsLakesZonesRequest,
  output: DeleteProjectsLocationsLakesZonesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsLakesZonesAssetsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsLakesZonesAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsLakesZonesAssetsRequest>;

export type TestIamPermissionsProjectsLocationsLakesZonesAssetsResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsLakesZonesAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsLakesZonesAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsLakesZonesAssets: API.OperationMethod<
  TestIamPermissionsProjectsLocationsLakesZonesAssetsRequest,
  TestIamPermissionsProjectsLocationsLakesZonesAssetsResponse,
  TestIamPermissionsProjectsLocationsLakesZonesAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsLakesZonesAssetsRequest,
  output: TestIamPermissionsProjectsLocationsLakesZonesAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsLakesZonesAssetsRequest {
  /** Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}. */
  parent: string;
  /** Optional. Order by fields for the result. */
  orderBy?: string;
  /** Optional. Page token received from a previous ListAssets call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListAssets must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filter request. */
  filter?: string;
  /** Optional. Maximum number of asset to return. The service may return fewer than this value. If unspecified, at most 10 assets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsLakesZonesAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/assets" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsLakesZonesAssetsRequest>;

export type ListProjectsLocationsLakesZonesAssetsResponse =
  GoogleCloudDataplexV1ListAssetsResponse;
export const ListProjectsLocationsLakesZonesAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListAssetsResponse;

export type ListProjectsLocationsLakesZonesAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists asset resources in a zone. */
export const listProjectsLocationsLakesZonesAssets: API.PaginatedOperationMethod<
  ListProjectsLocationsLakesZonesAssetsRequest,
  ListProjectsLocationsLakesZonesAssetsResponse,
  ListProjectsLocationsLakesZonesAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsLakesZonesAssetsRequest,
  output: ListProjectsLocationsLakesZonesAssetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsLakesZonesAssetsRequest {
  /** Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}. */
  parent: string;
  /** Required. Asset identifier. This ID will be used to generate names such as table names when publishing metadata to Hive Metastore and BigQuery. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must end with a number or a letter. * Must be between 1-63 characters. * Must be unique within the zone. */
  assetId?: string;
  /** Optional. Only validate the request, but do not perform mutations. The default is false. */
  validateOnly?: boolean;
  /** Request body */
  body?: GoogleCloudDataplexV1Asset;
}

export const CreateProjectsLocationsLakesZonesAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    assetId: Schema.optional(Schema.String).pipe(T.HttpQuery("assetId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GoogleCloudDataplexV1Asset).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/assets", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsLakesZonesAssetsRequest>;

export type CreateProjectsLocationsLakesZonesAssetsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsLakesZonesAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsLakesZonesAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an asset resource. */
export const createProjectsLocationsLakesZonesAssets: API.OperationMethod<
  CreateProjectsLocationsLakesZonesAssetsRequest,
  CreateProjectsLocationsLakesZonesAssetsResponse,
  CreateProjectsLocationsLakesZonesAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsLakesZonesAssetsRequest,
  output: CreateProjectsLocationsLakesZonesAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsLakesZonesAssetsRequest {
  /** Output only. The relative resource name of the asset, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}. */
  name: string;
  /** Required. Mask of fields to update. */
  updateMask?: string;
  /** Optional. Only validate the request, but do not perform mutations. The default is false. */
  validateOnly?: boolean;
  /** Request body */
  body?: GoogleCloudDataplexV1Asset;
}

export const PatchProjectsLocationsLakesZonesAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GoogleCloudDataplexV1Asset).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsLakesZonesAssetsRequest>;

export type PatchProjectsLocationsLakesZonesAssetsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsLakesZonesAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsLakesZonesAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an asset resource. */
export const patchProjectsLocationsLakesZonesAssets: API.OperationMethod<
  PatchProjectsLocationsLakesZonesAssetsRequest,
  PatchProjectsLocationsLakesZonesAssetsResponse,
  PatchProjectsLocationsLakesZonesAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsLakesZonesAssetsRequest,
  output: PatchProjectsLocationsLakesZonesAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsLakesZonesAssetsRequest {
  /** Required. The resource name of the asset: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}. */
  name: string;
}

export const GetProjectsLocationsLakesZonesAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsLakesZonesAssetsRequest>;

export type GetProjectsLocationsLakesZonesAssetsResponse =
  GoogleCloudDataplexV1Asset;
export const GetProjectsLocationsLakesZonesAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1Asset;

export type GetProjectsLocationsLakesZonesAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves an asset resource. */
export const getProjectsLocationsLakesZonesAssets: API.OperationMethod<
  GetProjectsLocationsLakesZonesAssetsRequest,
  GetProjectsLocationsLakesZonesAssetsResponse,
  GetProjectsLocationsLakesZonesAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsLakesZonesAssetsRequest,
  output: GetProjectsLocationsLakesZonesAssetsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsLakesZonesAssetsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsLakesZonesAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsLakesZonesAssetsRequest>;

export type SetIamPolicyProjectsLocationsLakesZonesAssetsResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsLakesZonesAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsLakesZonesAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyProjectsLocationsLakesZonesAssets: API.OperationMethod<
  SetIamPolicyProjectsLocationsLakesZonesAssetsRequest,
  SetIamPolicyProjectsLocationsLakesZonesAssetsResponse,
  SetIamPolicyProjectsLocationsLakesZonesAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsLakesZonesAssetsRequest,
  output: SetIamPolicyProjectsLocationsLakesZonesAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsLakesZonesAssetsRequest {
  /** Required. The resource name of the asset: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}. */
  name: string;
}

export const DeleteProjectsLocationsLakesZonesAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsLakesZonesAssetsRequest>;

export type DeleteProjectsLocationsLakesZonesAssetsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsLakesZonesAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsLakesZonesAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an asset resource. The referenced storage resource is detached (default) or deleted based on the associated Lifecycle policy. */
export const deleteProjectsLocationsLakesZonesAssets: API.OperationMethod<
  DeleteProjectsLocationsLakesZonesAssetsRequest,
  DeleteProjectsLocationsLakesZonesAssetsResponse,
  DeleteProjectsLocationsLakesZonesAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsLakesZonesAssetsRequest,
  output: DeleteProjectsLocationsLakesZonesAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsLakesZonesAssetsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsLakesZonesAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsLakesZonesAssetsRequest>;

export type GetIamPolicyProjectsLocationsLakesZonesAssetsResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsLakesZonesAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsLakesZonesAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsLakesZonesAssets: API.OperationMethod<
  GetIamPolicyProjectsLocationsLakesZonesAssetsRequest,
  GetIamPolicyProjectsLocationsLakesZonesAssetsResponse,
  GetIamPolicyProjectsLocationsLakesZonesAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsLakesZonesAssetsRequest,
  output: GetIamPolicyProjectsLocationsLakesZonesAssetsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsLakesZonesAssetsActionsRequest {
  /** Optional. Maximum number of actions to return. The service may return fewer than this value. If unspecified, at most 10 actions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The resource name of the parent asset: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}. */
  parent: string;
  /** Optional. Page token received from a previous ListAssetActions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListAssetActions must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsLakesZonesAssetsActionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/actions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsLakesZonesAssetsActionsRequest>;

export type ListProjectsLocationsLakesZonesAssetsActionsResponse =
  GoogleCloudDataplexV1ListActionsResponse;
export const ListProjectsLocationsLakesZonesAssetsActionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListActionsResponse;

export type ListProjectsLocationsLakesZonesAssetsActionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists action resources in an asset. */
export const listProjectsLocationsLakesZonesAssetsActions: API.PaginatedOperationMethod<
  ListProjectsLocationsLakesZonesAssetsActionsRequest,
  ListProjectsLocationsLakesZonesAssetsActionsResponse,
  ListProjectsLocationsLakesZonesAssetsActionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsLakesZonesAssetsActionsRequest,
  output: ListProjectsLocationsLakesZonesAssetsActionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdateProjectsLocationsLakesZonesEntitiesRequest {
  /** Optional. Only validate the request, but do not perform mutations. The default is false. */
  validateOnly?: boolean;
  /** Output only. The resource name of the entity, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{id}. */
  name: string;
  /** Request body */
  body?: GoogleCloudDataplexV1Entity;
}

export const UpdateProjectsLocationsLakesZonesEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDataplexV1Entity).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateProjectsLocationsLakesZonesEntitiesRequest>;

export type UpdateProjectsLocationsLakesZonesEntitiesResponse =
  GoogleCloudDataplexV1Entity;
export const UpdateProjectsLocationsLakesZonesEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1Entity;

export type UpdateProjectsLocationsLakesZonesEntitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a metadata entity. Only supports full resource update. */
export const updateProjectsLocationsLakesZonesEntities: API.OperationMethod<
  UpdateProjectsLocationsLakesZonesEntitiesRequest,
  UpdateProjectsLocationsLakesZonesEntitiesResponse,
  UpdateProjectsLocationsLakesZonesEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateProjectsLocationsLakesZonesEntitiesRequest,
  output: UpdateProjectsLocationsLakesZonesEntitiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsLakesZonesEntitiesRequest {
  /** Required. The resource name of the entity: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}. */
  name: string;
  /** Required. The etag associated with the entity, which can be retrieved with a GetEntity request. */
  etag?: string;
}

export const DeleteProjectsLocationsLakesZonesEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsLakesZonesEntitiesRequest>;

export type DeleteProjectsLocationsLakesZonesEntitiesResponse = Empty;
export const DeleteProjectsLocationsLakesZonesEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsLakesZonesEntitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a metadata entity. */
export const deleteProjectsLocationsLakesZonesEntities: API.OperationMethod<
  DeleteProjectsLocationsLakesZonesEntitiesRequest,
  DeleteProjectsLocationsLakesZonesEntitiesResponse,
  DeleteProjectsLocationsLakesZonesEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsLakesZonesEntitiesRequest,
  output: DeleteProjectsLocationsLakesZonesEntitiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsLakesZonesEntitiesRequest {
  /** Optional. The following filter parameters can be added to the URL to limit the entities returned by the API: Entity ID: ?filter="id=entityID" Asset ID: ?filter="asset=assetID" Data path ?filter="data_path=gs://my-bucket" Is HIVE compatible: ?filter="hive_compatible=true" Is BigQuery compatible: ?filter="bigquery_compatible=true" */
  filter?: string;
  /** Optional. Page token received from a previous ListEntities call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListEntities must match the call that provided the page token. */
  pageToken?: string;
  /** Required. Specify the entity view to make a partial list request. */
  view?: "ENTITY_VIEW_UNSPECIFIED" | "TABLES" | "FILESETS" | (string & {});
  /** Optional. Maximum number of entities to return. The service may return fewer than this value. If unspecified, 100 entities will be returned by default. The maximum value is 500; larger values will will be truncated to 500. */
  pageSize?: number;
  /** Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}. */
  parent: string;
}

export const ListProjectsLocationsLakesZonesEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/entities" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsLakesZonesEntitiesRequest>;

export type ListProjectsLocationsLakesZonesEntitiesResponse =
  GoogleCloudDataplexV1ListEntitiesResponse;
export const ListProjectsLocationsLakesZonesEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListEntitiesResponse;

export type ListProjectsLocationsLakesZonesEntitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List metadata entities in a zone. */
export const listProjectsLocationsLakesZonesEntities: API.PaginatedOperationMethod<
  ListProjectsLocationsLakesZonesEntitiesRequest,
  ListProjectsLocationsLakesZonesEntitiesResponse,
  ListProjectsLocationsLakesZonesEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsLakesZonesEntitiesRequest,
  output: ListProjectsLocationsLakesZonesEntitiesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsLakesZonesEntitiesRequest {
  /** Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}. */
  parent: string;
  /** Optional. Only validate the request, but do not perform mutations. The default is false. */
  validateOnly?: boolean;
  /** Request body */
  body?: GoogleCloudDataplexV1Entity;
}

export const CreateProjectsLocationsLakesZonesEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GoogleCloudDataplexV1Entity).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/entities", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsLakesZonesEntitiesRequest>;

export type CreateProjectsLocationsLakesZonesEntitiesResponse =
  GoogleCloudDataplexV1Entity;
export const CreateProjectsLocationsLakesZonesEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1Entity;

export type CreateProjectsLocationsLakesZonesEntitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a metadata entity. */
export const createProjectsLocationsLakesZonesEntities: API.OperationMethod<
  CreateProjectsLocationsLakesZonesEntitiesRequest,
  CreateProjectsLocationsLakesZonesEntitiesResponse,
  CreateProjectsLocationsLakesZonesEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsLakesZonesEntitiesRequest,
  output: CreateProjectsLocationsLakesZonesEntitiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsLakesZonesEntitiesRequest {
  /** Required. The resource name of the entity: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}. */
  name: string;
  /** Optional. Used to select the subset of entity information to return. Defaults to BASIC. */
  view?:
    | "ENTITY_VIEW_UNSPECIFIED"
    | "BASIC"
    | "SCHEMA"
    | "FULL"
    | (string & {});
}

export const GetProjectsLocationsLakesZonesEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsLakesZonesEntitiesRequest>;

export type GetProjectsLocationsLakesZonesEntitiesResponse =
  GoogleCloudDataplexV1Entity;
export const GetProjectsLocationsLakesZonesEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1Entity;

export type GetProjectsLocationsLakesZonesEntitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a metadata entity. */
export const getProjectsLocationsLakesZonesEntities: API.OperationMethod<
  GetProjectsLocationsLakesZonesEntitiesRequest,
  GetProjectsLocationsLakesZonesEntitiesResponse,
  GetProjectsLocationsLakesZonesEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsLakesZonesEntitiesRequest,
  output: GetProjectsLocationsLakesZonesEntitiesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsLakesZonesEntitiesPartitionsRequest {
  /** Required. The resource name of the partition. format: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}/partitions/{partition_value_path}. The {partition_value_path} segment consists of an ordered sequence of partition values separated by "/". All values must be provided. */
  name: string;
  /** Optional. The etag associated with the partition. */
  etag?: string;
}

export const DeleteProjectsLocationsLakesZonesEntitiesPartitionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsLakesZonesEntitiesPartitionsRequest>;

export type DeleteProjectsLocationsLakesZonesEntitiesPartitionsResponse = Empty;
export const DeleteProjectsLocationsLakesZonesEntitiesPartitionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsLakesZonesEntitiesPartitionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a metadata partition. */
export const deleteProjectsLocationsLakesZonesEntitiesPartitions: API.OperationMethod<
  DeleteProjectsLocationsLakesZonesEntitiesPartitionsRequest,
  DeleteProjectsLocationsLakesZonesEntitiesPartitionsResponse,
  DeleteProjectsLocationsLakesZonesEntitiesPartitionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsLakesZonesEntitiesPartitionsRequest,
  output: DeleteProjectsLocationsLakesZonesEntitiesPartitionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsLakesZonesEntitiesPartitionsRequest {
  /** Optional. Maximum number of partitions to return. The service may return fewer than this value. If unspecified, 100 partitions will be returned by default. The maximum page size is 500; larger values will will be truncated to 500. */
  pageSize?: number;
  /** Optional. Page token received from a previous ListPartitions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListPartitions must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The resource name of the parent entity: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}. */
  parent: string;
  /** Optional. Filter the partitions returned to the caller using a key value pair expression. Supported operators and syntax: logic operators: AND, OR comparison operators: <, >, >=, <= ,=, != LIKE operators: The right hand of a LIKE operator supports "." and "*" for wildcard searches, for example "value1 LIKE ".*oo.*" parenthetical grouping: ( )Sample filter expression: `?filter="key1 < value1 OR key2 > value2"Notes: Keys to the left of operators are case insensitive. Partition results are sorted first by creation time, then by lexicographic order. Up to 20 key value filter pairs are allowed, but due to performance considerations, only the first 10 will be used as a filter. */
  filter?: string;
}

export const ListProjectsLocationsLakesZonesEntitiesPartitionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/partitions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsLakesZonesEntitiesPartitionsRequest>;

export type ListProjectsLocationsLakesZonesEntitiesPartitionsResponse =
  GoogleCloudDataplexV1ListPartitionsResponse;
export const ListProjectsLocationsLakesZonesEntitiesPartitionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListPartitionsResponse;

export type ListProjectsLocationsLakesZonesEntitiesPartitionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List metadata partitions of an entity. */
export const listProjectsLocationsLakesZonesEntitiesPartitions: API.PaginatedOperationMethod<
  ListProjectsLocationsLakesZonesEntitiesPartitionsRequest,
  ListProjectsLocationsLakesZonesEntitiesPartitionsResponse,
  ListProjectsLocationsLakesZonesEntitiesPartitionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsLakesZonesEntitiesPartitionsRequest,
  output: ListProjectsLocationsLakesZonesEntitiesPartitionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsLakesZonesEntitiesPartitionsRequest {
  /** Optional. Only validate the request, but do not perform mutations. The default is false. */
  validateOnly?: boolean;
  /** Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}. */
  parent: string;
  /** Request body */
  body?: GoogleCloudDataplexV1Partition;
}

export const CreateProjectsLocationsLakesZonesEntitiesPartitionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDataplexV1Partition).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/partitions", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsLakesZonesEntitiesPartitionsRequest>;

export type CreateProjectsLocationsLakesZonesEntitiesPartitionsResponse =
  GoogleCloudDataplexV1Partition;
export const CreateProjectsLocationsLakesZonesEntitiesPartitionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1Partition;

export type CreateProjectsLocationsLakesZonesEntitiesPartitionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a metadata partition. */
export const createProjectsLocationsLakesZonesEntitiesPartitions: API.OperationMethod<
  CreateProjectsLocationsLakesZonesEntitiesPartitionsRequest,
  CreateProjectsLocationsLakesZonesEntitiesPartitionsResponse,
  CreateProjectsLocationsLakesZonesEntitiesPartitionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsLakesZonesEntitiesPartitionsRequest,
  output: CreateProjectsLocationsLakesZonesEntitiesPartitionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsLakesZonesEntitiesPartitionsRequest {
  /** Required. The resource name of the partition: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}/partitions/{partition_value_path}. The {partition_value_path} segment consists of an ordered sequence of partition values separated by "/". All values must be provided. */
  name: string;
}

export const GetProjectsLocationsLakesZonesEntitiesPartitionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsLakesZonesEntitiesPartitionsRequest>;

export type GetProjectsLocationsLakesZonesEntitiesPartitionsResponse =
  GoogleCloudDataplexV1Partition;
export const GetProjectsLocationsLakesZonesEntitiesPartitionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1Partition;

export type GetProjectsLocationsLakesZonesEntitiesPartitionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a metadata partition of an entity. */
export const getProjectsLocationsLakesZonesEntitiesPartitions: API.OperationMethod<
  GetProjectsLocationsLakesZonesEntitiesPartitionsRequest,
  GetProjectsLocationsLakesZonesEntitiesPartitionsResponse,
  GetProjectsLocationsLakesZonesEntitiesPartitionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsLakesZonesEntitiesPartitionsRequest,
  output: GetProjectsLocationsLakesZonesEntitiesPartitionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsLakesZonesActionsRequest {
  /** Optional. Maximum number of actions to return. The service may return fewer than this value. If unspecified, at most 10 actions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}. */
  parent: string;
  /** Optional. Page token received from a previous ListZoneActions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListZoneActions must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsLakesZonesActionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/actions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsLakesZonesActionsRequest>;

export type ListProjectsLocationsLakesZonesActionsResponse =
  GoogleCloudDataplexV1ListActionsResponse;
export const ListProjectsLocationsLakesZonesActionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListActionsResponse;

export type ListProjectsLocationsLakesZonesActionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists action resources in a zone. */
export const listProjectsLocationsLakesZonesActions: API.PaginatedOperationMethod<
  ListProjectsLocationsLakesZonesActionsRequest,
  ListProjectsLocationsLakesZonesActionsResponse,
  ListProjectsLocationsLakesZonesActionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsLakesZonesActionsRequest,
  output: ListProjectsLocationsLakesZonesActionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsLakesTasksRequest {
  /** Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}. */
  parent: string;
  /** Required. Task identifier. */
  taskId?: string;
  /** Optional. Only validate the request, but do not perform mutations. The default is false. */
  validateOnly?: boolean;
  /** Request body */
  body?: GoogleCloudDataplexV1Task;
}

export const CreateProjectsLocationsLakesTasksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    taskId: Schema.optional(Schema.String).pipe(T.HttpQuery("taskId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GoogleCloudDataplexV1Task).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/tasks", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsLakesTasksRequest>;

export type CreateProjectsLocationsLakesTasksResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsLakesTasksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsLakesTasksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a task resource within a lake. */
export const createProjectsLocationsLakesTasks: API.OperationMethod<
  CreateProjectsLocationsLakesTasksRequest,
  CreateProjectsLocationsLakesTasksResponse,
  CreateProjectsLocationsLakesTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsLakesTasksRequest,
  output: CreateProjectsLocationsLakesTasksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsLakesTasksRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsLakesTasksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsLakesTasksRequest>;

export type GetIamPolicyProjectsLocationsLakesTasksResponse = GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsLakesTasksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsLakesTasksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsLakesTasks: API.OperationMethod<
  GetIamPolicyProjectsLocationsLakesTasksRequest,
  GetIamPolicyProjectsLocationsLakesTasksResponse,
  GetIamPolicyProjectsLocationsLakesTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsLakesTasksRequest,
  output: GetIamPolicyProjectsLocationsLakesTasksResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsLakesTasksRequest {
  /** Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}. */
  parent: string;
  /** Optional. Order by fields for the result. */
  orderBy?: string;
  /** Optional. Filter request. */
  filter?: string;
  /** Optional. Page token received from a previous ListZones call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListZones must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Maximum number of tasks to return. The service may return fewer than this value. If unspecified, at most 10 tasks will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsLakesTasksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/tasks" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsLakesTasksRequest>;

export type ListProjectsLocationsLakesTasksResponse =
  GoogleCloudDataplexV1ListTasksResponse;
export const ListProjectsLocationsLakesTasksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListTasksResponse;

export type ListProjectsLocationsLakesTasksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists tasks under the given lake. */
export const listProjectsLocationsLakesTasks: API.PaginatedOperationMethod<
  ListProjectsLocationsLakesTasksRequest,
  ListProjectsLocationsLakesTasksResponse,
  ListProjectsLocationsLakesTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsLakesTasksRequest,
  output: ListProjectsLocationsLakesTasksResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsLakesTasksRequest {
  /** Output only. The relative resource name of the task, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/ tasks/{task_id}. */
  name: string;
  /** Required. Mask of fields to update. */
  updateMask?: string;
  /** Optional. Only validate the request, but do not perform mutations. The default is false. */
  validateOnly?: boolean;
  /** Request body */
  body?: GoogleCloudDataplexV1Task;
}

export const PatchProjectsLocationsLakesTasksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GoogleCloudDataplexV1Task).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsLakesTasksRequest>;

export type PatchProjectsLocationsLakesTasksResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsLakesTasksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsLakesTasksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the task resource. */
export const patchProjectsLocationsLakesTasks: API.OperationMethod<
  PatchProjectsLocationsLakesTasksRequest,
  PatchProjectsLocationsLakesTasksResponse,
  PatchProjectsLocationsLakesTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsLakesTasksRequest,
  output: PatchProjectsLocationsLakesTasksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsLakesTasksRequest {
  /** Required. The resource name of the task: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{tasks_id}. */
  name: string;
}

export const GetProjectsLocationsLakesTasksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsLakesTasksRequest>;

export type GetProjectsLocationsLakesTasksResponse = GoogleCloudDataplexV1Task;
export const GetProjectsLocationsLakesTasksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1Task;

export type GetProjectsLocationsLakesTasksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get task resource. */
export const getProjectsLocationsLakesTasks: API.OperationMethod<
  GetProjectsLocationsLakesTasksRequest,
  GetProjectsLocationsLakesTasksResponse,
  GetProjectsLocationsLakesTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsLakesTasksRequest,
  output: GetProjectsLocationsLakesTasksResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsLakesTasksRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsLakesTasksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsLakesTasksRequest>;

export type TestIamPermissionsProjectsLocationsLakesTasksResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsLakesTasksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsLakesTasksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsLakesTasks: API.OperationMethod<
  TestIamPermissionsProjectsLocationsLakesTasksRequest,
  TestIamPermissionsProjectsLocationsLakesTasksResponse,
  TestIamPermissionsProjectsLocationsLakesTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsLakesTasksRequest,
  output: TestIamPermissionsProjectsLocationsLakesTasksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RunProjectsLocationsLakesTasksRequest {
  /** Required. The resource name of the task: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{task_id}. */
  name: string;
  /** Request body */
  body?: GoogleCloudDataplexV1RunTaskRequest;
}

export const RunProjectsLocationsLakesTasksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDataplexV1RunTaskRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:run", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RunProjectsLocationsLakesTasksRequest>;

export type RunProjectsLocationsLakesTasksResponse =
  GoogleCloudDataplexV1RunTaskResponse;
export const RunProjectsLocationsLakesTasksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1RunTaskResponse;

export type RunProjectsLocationsLakesTasksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Run an on demand execution of a Task. */
export const runProjectsLocationsLakesTasks: API.OperationMethod<
  RunProjectsLocationsLakesTasksRequest,
  RunProjectsLocationsLakesTasksResponse,
  RunProjectsLocationsLakesTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunProjectsLocationsLakesTasksRequest,
  output: RunProjectsLocationsLakesTasksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsLakesTasksRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsLakesTasksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsLakesTasksRequest>;

export type SetIamPolicyProjectsLocationsLakesTasksResponse = GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsLakesTasksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsLakesTasksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyProjectsLocationsLakesTasks: API.OperationMethod<
  SetIamPolicyProjectsLocationsLakesTasksRequest,
  SetIamPolicyProjectsLocationsLakesTasksResponse,
  SetIamPolicyProjectsLocationsLakesTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsLakesTasksRequest,
  output: SetIamPolicyProjectsLocationsLakesTasksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsLakesTasksRequest {
  /** Required. The resource name of the task: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/task/{task_id}. */
  name: string;
}

export const DeleteProjectsLocationsLakesTasksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsLakesTasksRequest>;

export type DeleteProjectsLocationsLakesTasksResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsLakesTasksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsLakesTasksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete the task resource. */
export const deleteProjectsLocationsLakesTasks: API.OperationMethod<
  DeleteProjectsLocationsLakesTasksRequest,
  DeleteProjectsLocationsLakesTasksResponse,
  DeleteProjectsLocationsLakesTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsLakesTasksRequest,
  output: DeleteProjectsLocationsLakesTasksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsLakesTasksJobsRequest {
  /** Required. The resource name of the job: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{task_id}/jobs/{job_id}. */
  name: string;
}

export const GetProjectsLocationsLakesTasksJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsLakesTasksJobsRequest>;

export type GetProjectsLocationsLakesTasksJobsResponse =
  GoogleCloudDataplexV1Job;
export const GetProjectsLocationsLakesTasksJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1Job;

export type GetProjectsLocationsLakesTasksJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get job resource. */
export const getProjectsLocationsLakesTasksJobs: API.OperationMethod<
  GetProjectsLocationsLakesTasksJobsRequest,
  GetProjectsLocationsLakesTasksJobsResponse,
  GetProjectsLocationsLakesTasksJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsLakesTasksJobsRequest,
  output: GetProjectsLocationsLakesTasksJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsLakesTasksJobsRequest {
  /** Optional. Maximum number of jobs to return. The service may return fewer than this value. If unspecified, at most 10 jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. Page token received from a previous ListJobs call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListJobs must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The resource name of the parent environment: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{task_id}. */
  parent: string;
}

export const ListProjectsLocationsLakesTasksJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/jobs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsLakesTasksJobsRequest>;

export type ListProjectsLocationsLakesTasksJobsResponse =
  GoogleCloudDataplexV1ListJobsResponse;
export const ListProjectsLocationsLakesTasksJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListJobsResponse;

export type ListProjectsLocationsLakesTasksJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Jobs under the given task. */
export const listProjectsLocationsLakesTasksJobs: API.PaginatedOperationMethod<
  ListProjectsLocationsLakesTasksJobsRequest,
  ListProjectsLocationsLakesTasksJobsResponse,
  ListProjectsLocationsLakesTasksJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsLakesTasksJobsRequest,
  output: ListProjectsLocationsLakesTasksJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CancelProjectsLocationsLakesTasksJobsRequest {
  /** Required. The resource name of the job: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/task/{task_id}/job/{job_id}. */
  name: string;
  /** Request body */
  body?: GoogleCloudDataplexV1CancelJobRequest;
}

export const CancelProjectsLocationsLakesTasksJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDataplexV1CancelJobRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsLakesTasksJobsRequest>;

export type CancelProjectsLocationsLakesTasksJobsResponse = Empty;
export const CancelProjectsLocationsLakesTasksJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelProjectsLocationsLakesTasksJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cancel jobs running for the task resource. */
export const cancelProjectsLocationsLakesTasksJobs: API.OperationMethod<
  CancelProjectsLocationsLakesTasksJobsRequest,
  CancelProjectsLocationsLakesTasksJobsResponse,
  CancelProjectsLocationsLakesTasksJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsLakesTasksJobsRequest,
  output: CancelProjectsLocationsLakesTasksJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsLakesActionsRequest {
  /** Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}. */
  parent: string;
  /** Optional. Page token received from a previous ListLakeActions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListLakeActions must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Maximum number of actions to return. The service may return fewer than this value. If unspecified, at most 10 actions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsLakesActionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/actions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsLakesActionsRequest>;

export type ListProjectsLocationsLakesActionsResponse =
  GoogleCloudDataplexV1ListActionsResponse;
export const ListProjectsLocationsLakesActionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListActionsResponse;

export type ListProjectsLocationsLakesActionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists action resources in a lake. */
export const listProjectsLocationsLakesActions: API.PaginatedOperationMethod<
  ListProjectsLocationsLakesActionsRequest,
  ListProjectsLocationsLakesActionsResponse,
  ListProjectsLocationsLakesActionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsLakesActionsRequest,
  output: ListProjectsLocationsLakesActionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SetIamPolicyProjectsLocationsEntryLinkTypesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsEntryLinkTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsEntryLinkTypesRequest>;

export type SetIamPolicyProjectsLocationsEntryLinkTypesResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsEntryLinkTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsEntryLinkTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyProjectsLocationsEntryLinkTypes: API.OperationMethod<
  SetIamPolicyProjectsLocationsEntryLinkTypesRequest,
  SetIamPolicyProjectsLocationsEntryLinkTypesResponse,
  SetIamPolicyProjectsLocationsEntryLinkTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsEntryLinkTypesRequest,
  output: SetIamPolicyProjectsLocationsEntryLinkTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsEntryLinkTypesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsEntryLinkTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsEntryLinkTypesRequest>;

export type TestIamPermissionsProjectsLocationsEntryLinkTypesResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsEntryLinkTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsEntryLinkTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsEntryLinkTypes: API.OperationMethod<
  TestIamPermissionsProjectsLocationsEntryLinkTypesRequest,
  TestIamPermissionsProjectsLocationsEntryLinkTypesResponse,
  TestIamPermissionsProjectsLocationsEntryLinkTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsEntryLinkTypesRequest,
  output: TestIamPermissionsProjectsLocationsEntryLinkTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsEntryLinkTypesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsEntryLinkTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsEntryLinkTypesRequest>;

export type GetIamPolicyProjectsLocationsEntryLinkTypesResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsEntryLinkTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsEntryLinkTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsEntryLinkTypes: API.OperationMethod<
  GetIamPolicyProjectsLocationsEntryLinkTypesRequest,
  GetIamPolicyProjectsLocationsEntryLinkTypesResponse,
  GetIamPolicyProjectsLocationsEntryLinkTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsEntryLinkTypesRequest,
  output: GetIamPolicyProjectsLocationsEntryLinkTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsAspectTypesRequest {
  /** Required. AspectType identifier. */
  aspectTypeId?: string;
  /** Optional. The service validates the request without performing any mutations. The default is false. */
  validateOnly?: boolean;
  /** Required. The resource name of the AspectType, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region. */
  parent: string;
  /** Request body */
  body?: GoogleCloudDataplexV1AspectType;
}

export const CreateProjectsLocationsAspectTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aspectTypeId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("aspectTypeId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDataplexV1AspectType).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/aspectTypes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAspectTypesRequest>;

export type CreateProjectsLocationsAspectTypesResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsAspectTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsAspectTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an AspectType. */
export const createProjectsLocationsAspectTypes: API.OperationMethod<
  CreateProjectsLocationsAspectTypesRequest,
  CreateProjectsLocationsAspectTypesResponse,
  CreateProjectsLocationsAspectTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAspectTypesRequest,
  output: CreateProjectsLocationsAspectTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAspectTypesRequest {
  /** Output only. The relative resource name of the AspectType, of the form: projects/{project_number}/locations/{location_id}/aspectTypes/{aspect_type_id}. */
  name: string;
  /** Required. Mask of fields to update. */
  updateMask?: string;
  /** Optional. Only validate the request, but do not perform mutations. The default is false. */
  validateOnly?: boolean;
  /** Request body */
  body?: GoogleCloudDataplexV1AspectType;
}

export const PatchProjectsLocationsAspectTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GoogleCloudDataplexV1AspectType).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAspectTypesRequest>;

export type PatchProjectsLocationsAspectTypesResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsAspectTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsAspectTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an AspectType. */
export const patchProjectsLocationsAspectTypes: API.OperationMethod<
  PatchProjectsLocationsAspectTypesRequest,
  PatchProjectsLocationsAspectTypesResponse,
  PatchProjectsLocationsAspectTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAspectTypesRequest,
  output: PatchProjectsLocationsAspectTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAspectTypesRequest {
  /** Required. The resource name of the AspectType: projects/{project_number}/locations/{location_id}/aspectTypes/{aspect_type_id}. */
  name: string;
}

export const GetProjectsLocationsAspectTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAspectTypesRequest>;

export type GetProjectsLocationsAspectTypesResponse =
  GoogleCloudDataplexV1AspectType;
export const GetProjectsLocationsAspectTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1AspectType;

export type GetProjectsLocationsAspectTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an AspectType. */
export const getProjectsLocationsAspectTypes: API.OperationMethod<
  GetProjectsLocationsAspectTypesRequest,
  GetProjectsLocationsAspectTypesResponse,
  GetProjectsLocationsAspectTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAspectTypesRequest,
  output: GetProjectsLocationsAspectTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAspectTypesRequest {
  /** Optional. Page token received from a previous ListAspectTypes call. Provide this to retrieve the subsequent page. When paginating, all other parameters you provide to ListAspectTypes must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filter request. Filters are case-sensitive. The service supports the following formats: labels.key1 = "value1" labels:key1 name = "value"These restrictions can be conjoined with AND, OR, and NOT conjunctions. */
  filter?: string;
  /** Optional. Maximum number of AspectTypes to return. The service may return fewer than this value. If unspecified, the service returns at most 10 AspectTypes. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The resource name of the AspectType location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region. */
  parent: string;
  /** Optional. Orders the result by name or create_time fields. If not specified, the ordering is undefined. */
  orderBy?: string;
}

export const ListProjectsLocationsAspectTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/aspectTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAspectTypesRequest>;

export type ListProjectsLocationsAspectTypesResponse =
  GoogleCloudDataplexV1ListAspectTypesResponse;
export const ListProjectsLocationsAspectTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListAspectTypesResponse;

export type ListProjectsLocationsAspectTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists AspectType resources in a project and location. */
export const listProjectsLocationsAspectTypes: API.PaginatedOperationMethod<
  ListProjectsLocationsAspectTypesRequest,
  ListProjectsLocationsAspectTypesResponse,
  ListProjectsLocationsAspectTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAspectTypesRequest,
  output: ListProjectsLocationsAspectTypesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface TestIamPermissionsProjectsLocationsAspectTypesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsAspectTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsAspectTypesRequest>;

export type TestIamPermissionsProjectsLocationsAspectTypesResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsAspectTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsAspectTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsAspectTypes: API.OperationMethod<
  TestIamPermissionsProjectsLocationsAspectTypesRequest,
  TestIamPermissionsProjectsLocationsAspectTypesResponse,
  TestIamPermissionsProjectsLocationsAspectTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsAspectTypesRequest,
  output: TestIamPermissionsProjectsLocationsAspectTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsAspectTypesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsAspectTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsAspectTypesRequest>;

export type GetIamPolicyProjectsLocationsAspectTypesResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsAspectTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsAspectTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsAspectTypes: API.OperationMethod<
  GetIamPolicyProjectsLocationsAspectTypesRequest,
  GetIamPolicyProjectsLocationsAspectTypesResponse,
  GetIamPolicyProjectsLocationsAspectTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsAspectTypesRequest,
  output: GetIamPolicyProjectsLocationsAspectTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsAspectTypesRequest {
  /** Required. The resource name of the AspectType: projects/{project_number}/locations/{location_id}/aspectTypes/{aspect_type_id}. */
  name: string;
  /** Optional. If the client provided etag value does not match the current etag value, the DeleteAspectTypeRequest method returns an ABORTED error response. */
  etag?: string;
}

export const DeleteProjectsLocationsAspectTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAspectTypesRequest>;

export type DeleteProjectsLocationsAspectTypesResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsAspectTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsAspectTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an AspectType. */
export const deleteProjectsLocationsAspectTypes: API.OperationMethod<
  DeleteProjectsLocationsAspectTypesRequest,
  DeleteProjectsLocationsAspectTypesResponse,
  DeleteProjectsLocationsAspectTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAspectTypesRequest,
  output: DeleteProjectsLocationsAspectTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsAspectTypesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsAspectTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsAspectTypesRequest>;

export type SetIamPolicyProjectsLocationsAspectTypesResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsAspectTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsAspectTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyProjectsLocationsAspectTypes: API.OperationMethod<
  SetIamPolicyProjectsLocationsAspectTypesRequest,
  SetIamPolicyProjectsLocationsAspectTypesResponse,
  SetIamPolicyProjectsLocationsAspectTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsAspectTypesRequest,
  output: SetIamPolicyProjectsLocationsAspectTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsGlossariesRequest {
  /** Required. The name of the Glossary to delete. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} */
  name: string;
  /** Optional. The etag of the Glossary. If this is provided, it must match the server's etag. If the etag is provided and does not match the server-computed etag, the request must fail with a ABORTED error code. */
  etag?: string;
}

export const DeleteProjectsLocationsGlossariesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsGlossariesRequest>;

export type DeleteProjectsLocationsGlossariesResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsGlossariesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsGlossariesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a Glossary resource. All the categories and terms within the Glossary must be deleted before the Glossary can be deleted. */
export const deleteProjectsLocationsGlossaries: API.OperationMethod<
  DeleteProjectsLocationsGlossariesRequest,
  DeleteProjectsLocationsGlossariesResponse,
  DeleteProjectsLocationsGlossariesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGlossariesRequest,
  output: DeleteProjectsLocationsGlossariesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsGlossariesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsGlossariesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsGlossariesRequest>;

export type SetIamPolicyProjectsLocationsGlossariesResponse = GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsGlossariesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsGlossariesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyProjectsLocationsGlossaries: API.OperationMethod<
  SetIamPolicyProjectsLocationsGlossariesRequest,
  SetIamPolicyProjectsLocationsGlossariesResponse,
  SetIamPolicyProjectsLocationsGlossariesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsGlossariesRequest,
  output: SetIamPolicyProjectsLocationsGlossariesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsGlossariesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsGlossariesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsGlossariesRequest>;

export type GetIamPolicyProjectsLocationsGlossariesResponse = GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsGlossariesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsGlossariesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsGlossaries: API.OperationMethod<
  GetIamPolicyProjectsLocationsGlossariesRequest,
  GetIamPolicyProjectsLocationsGlossariesResponse,
  GetIamPolicyProjectsLocationsGlossariesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsGlossariesRequest,
  output: GetIamPolicyProjectsLocationsGlossariesResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsGlossariesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsGlossariesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsGlossariesRequest>;

export type TestIamPermissionsProjectsLocationsGlossariesResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsGlossariesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsGlossariesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsGlossaries: API.OperationMethod<
  TestIamPermissionsProjectsLocationsGlossariesRequest,
  TestIamPermissionsProjectsLocationsGlossariesResponse,
  TestIamPermissionsProjectsLocationsGlossariesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsGlossariesRequest,
  output: TestIamPermissionsProjectsLocationsGlossariesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsGlossariesRequest {
  /** Optional. A page token, received from a previous ListGlossaries call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListGlossaries must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filter expression that filters Glossaries listed in the response. Filters on proto fields of Glossary are supported. Examples of using a filter are: - display_name="my-glossary" - categoryCount=1 - termCount=0 */
  filter?: string;
  /** Optional. The maximum number of Glossaries to return. The service may return fewer than this value. If unspecified, at most 50 Glossaries will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent, which has this collection of Glossaries. Format: projects/{project_id_or_number}/locations/{location_id} where location_id refers to a Google Cloud region. */
  parent: string;
  /** Optional. Order by expression that orders Glossaries listed in the response. Order by fields are: name or create_time for the result. If not specified, the ordering is undefined. */
  orderBy?: string;
}

export const ListProjectsLocationsGlossariesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/glossaries" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGlossariesRequest>;

export type ListProjectsLocationsGlossariesResponse =
  GoogleCloudDataplexV1ListGlossariesResponse;
export const ListProjectsLocationsGlossariesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListGlossariesResponse;

export type ListProjectsLocationsGlossariesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Glossary resources in a project and location. */
export const listProjectsLocationsGlossaries: API.PaginatedOperationMethod<
  ListProjectsLocationsGlossariesRequest,
  ListProjectsLocationsGlossariesResponse,
  ListProjectsLocationsGlossariesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGlossariesRequest,
  output: ListProjectsLocationsGlossariesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsGlossariesRequest {
  /** Optional. Validates the request without actually creating the Glossary. Default: false. */
  validateOnly?: boolean;
  /** Required. Glossary ID: Glossary identifier. */
  glossaryId?: string;
  /** Required. The parent resource where this Glossary will be created. Format: projects/{project_id_or_number}/locations/{location_id} where location_id refers to a Google Cloud region. */
  parent: string;
  /** Request body */
  body?: GoogleCloudDataplexV1Glossary;
}

export const CreateProjectsLocationsGlossariesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    glossaryId: Schema.optional(Schema.String).pipe(T.HttpQuery("glossaryId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDataplexV1Glossary).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/glossaries", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsGlossariesRequest>;

export type CreateProjectsLocationsGlossariesResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsGlossariesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsGlossariesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Glossary resource. */
export const createProjectsLocationsGlossaries: API.OperationMethod<
  CreateProjectsLocationsGlossariesRequest,
  CreateProjectsLocationsGlossariesResponse,
  CreateProjectsLocationsGlossariesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGlossariesRequest,
  output: CreateProjectsLocationsGlossariesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsGlossariesRequest {
  /** Required. The list of fields to update. */
  updateMask?: string;
  /** Optional. Validates the request without actually updating the Glossary. Default: false. */
  validateOnly?: boolean;
  /** Output only. Identifier. The resource name of the Glossary. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} */
  name: string;
  /** Request body */
  body?: GoogleCloudDataplexV1Glossary;
}

export const PatchProjectsLocationsGlossariesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDataplexV1Glossary).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsGlossariesRequest>;

export type PatchProjectsLocationsGlossariesResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsGlossariesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsGlossariesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a Glossary resource. */
export const patchProjectsLocationsGlossaries: API.OperationMethod<
  PatchProjectsLocationsGlossariesRequest,
  PatchProjectsLocationsGlossariesResponse,
  PatchProjectsLocationsGlossariesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsGlossariesRequest,
  output: PatchProjectsLocationsGlossariesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsGlossariesRequest {
  /** Required. The name of the Glossary to retrieve. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} */
  name: string;
}

export const GetProjectsLocationsGlossariesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGlossariesRequest>;

export type GetProjectsLocationsGlossariesResponse =
  GoogleCloudDataplexV1Glossary;
export const GetProjectsLocationsGlossariesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1Glossary;

export type GetProjectsLocationsGlossariesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a Glossary resource. */
export const getProjectsLocationsGlossaries: API.OperationMethod<
  GetProjectsLocationsGlossariesRequest,
  GetProjectsLocationsGlossariesResponse,
  GetProjectsLocationsGlossariesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGlossariesRequest,
  output: GetProjectsLocationsGlossariesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsGlossariesCategoriesRequest {
  /** Required. The name of the GlossaryCategory to delete. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/categories/{category_id} */
  name: string;
}

export const DeleteProjectsLocationsGlossariesCategoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsGlossariesCategoriesRequest>;

export type DeleteProjectsLocationsGlossariesCategoriesResponse = Empty;
export const DeleteProjectsLocationsGlossariesCategoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsGlossariesCategoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a GlossaryCategory resource. All the GlossaryCategories and GlossaryTerms nested directly under the specified GlossaryCategory will be moved one level up to the parent in the hierarchy. */
export const deleteProjectsLocationsGlossariesCategories: API.OperationMethod<
  DeleteProjectsLocationsGlossariesCategoriesRequest,
  DeleteProjectsLocationsGlossariesCategoriesResponse,
  DeleteProjectsLocationsGlossariesCategoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGlossariesCategoriesRequest,
  output: DeleteProjectsLocationsGlossariesCategoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsGlossariesCategoriesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsGlossariesCategoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsGlossariesCategoriesRequest>;

export type SetIamPolicyProjectsLocationsGlossariesCategoriesResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsGlossariesCategoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsGlossariesCategoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyProjectsLocationsGlossariesCategories: API.OperationMethod<
  SetIamPolicyProjectsLocationsGlossariesCategoriesRequest,
  SetIamPolicyProjectsLocationsGlossariesCategoriesResponse,
  SetIamPolicyProjectsLocationsGlossariesCategoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsGlossariesCategoriesRequest,
  output: SetIamPolicyProjectsLocationsGlossariesCategoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsGlossariesCategoriesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsGlossariesCategoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsGlossariesCategoriesRequest>;

export type GetIamPolicyProjectsLocationsGlossariesCategoriesResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsGlossariesCategoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsGlossariesCategoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsGlossariesCategories: API.OperationMethod<
  GetIamPolicyProjectsLocationsGlossariesCategoriesRequest,
  GetIamPolicyProjectsLocationsGlossariesCategoriesResponse,
  GetIamPolicyProjectsLocationsGlossariesCategoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsGlossariesCategoriesRequest,
  output: GetIamPolicyProjectsLocationsGlossariesCategoriesResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsGlossariesCategoriesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsGlossariesCategoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsGlossariesCategoriesRequest>;

export type TestIamPermissionsProjectsLocationsGlossariesCategoriesResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsGlossariesCategoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsGlossariesCategoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsGlossariesCategories: API.OperationMethod<
  TestIamPermissionsProjectsLocationsGlossariesCategoriesRequest,
  TestIamPermissionsProjectsLocationsGlossariesCategoriesResponse,
  TestIamPermissionsProjectsLocationsGlossariesCategoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsGlossariesCategoriesRequest,
  output: TestIamPermissionsProjectsLocationsGlossariesCategoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsGlossariesCategoriesRequest {
  /** Optional. Filter expression that filters GlossaryCategories listed in the response. Filters are supported on the following fields: - immediate_parentExamples of using a filter are: - immediate_parent="projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}" - immediate_parent="projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/categories/{category_id}"This will only return the GlossaryCategories that are directly nested under the specified parent. */
  filter?: string;
  /** Optional. A page token, received from a previous ListGlossaryCategories call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListGlossaryCategories must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of GlossaryCategories to return. The service may return fewer than this value. If unspecified, at most 50 GlossaryCategories will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent, which has this collection of GlossaryCategories. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} Location is the Google Cloud region. */
  parent: string;
  /** Optional. Order by expression that orders GlossaryCategories listed in the response. Order by fields are: name or create_time for the result. If not specified, the ordering is undefined. */
  orderBy?: string;
}

export const ListProjectsLocationsGlossariesCategoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/categories" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGlossariesCategoriesRequest>;

export type ListProjectsLocationsGlossariesCategoriesResponse =
  GoogleCloudDataplexV1ListGlossaryCategoriesResponse;
export const ListProjectsLocationsGlossariesCategoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListGlossaryCategoriesResponse;

export type ListProjectsLocationsGlossariesCategoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists GlossaryCategory resources in a Glossary. */
export const listProjectsLocationsGlossariesCategories: API.PaginatedOperationMethod<
  ListProjectsLocationsGlossariesCategoriesRequest,
  ListProjectsLocationsGlossariesCategoriesResponse,
  ListProjectsLocationsGlossariesCategoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGlossariesCategoriesRequest,
  output: ListProjectsLocationsGlossariesCategoriesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsGlossariesCategoriesRequest {
  /** Required. The parent resource where this GlossaryCategory will be created. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} where locationId refers to a Google Cloud region. */
  parent: string;
  /** Required. GlossaryCategory identifier. */
  categoryId?: string;
  /** Request body */
  body?: GoogleCloudDataplexV1GlossaryCategory;
}

export const CreateProjectsLocationsGlossariesCategoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    categoryId: Schema.optional(Schema.String).pipe(T.HttpQuery("categoryId")),
    body: Schema.optional(GoogleCloudDataplexV1GlossaryCategory).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/categories", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsGlossariesCategoriesRequest>;

export type CreateProjectsLocationsGlossariesCategoriesResponse =
  GoogleCloudDataplexV1GlossaryCategory;
export const CreateProjectsLocationsGlossariesCategoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1GlossaryCategory;

export type CreateProjectsLocationsGlossariesCategoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new GlossaryCategory resource. */
export const createProjectsLocationsGlossariesCategories: API.OperationMethod<
  CreateProjectsLocationsGlossariesCategoriesRequest,
  CreateProjectsLocationsGlossariesCategoriesResponse,
  CreateProjectsLocationsGlossariesCategoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGlossariesCategoriesRequest,
  output: CreateProjectsLocationsGlossariesCategoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsGlossariesCategoriesRequest {
  /** Required. The list of fields to update. */
  updateMask?: string;
  /** Output only. Identifier. The resource name of the GlossaryCategory. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/categories/{category_id} */
  name: string;
  /** Request body */
  body?: GoogleCloudDataplexV1GlossaryCategory;
}

export const PatchProjectsLocationsGlossariesCategoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDataplexV1GlossaryCategory).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsGlossariesCategoriesRequest>;

export type PatchProjectsLocationsGlossariesCategoriesResponse =
  GoogleCloudDataplexV1GlossaryCategory;
export const PatchProjectsLocationsGlossariesCategoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1GlossaryCategory;

export type PatchProjectsLocationsGlossariesCategoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a GlossaryCategory resource. */
export const patchProjectsLocationsGlossariesCategories: API.OperationMethod<
  PatchProjectsLocationsGlossariesCategoriesRequest,
  PatchProjectsLocationsGlossariesCategoriesResponse,
  PatchProjectsLocationsGlossariesCategoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsGlossariesCategoriesRequest,
  output: PatchProjectsLocationsGlossariesCategoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsGlossariesCategoriesRequest {
  /** Required. The name of the GlossaryCategory to retrieve. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/categories/{category_id} */
  name: string;
}

export const GetProjectsLocationsGlossariesCategoriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGlossariesCategoriesRequest>;

export type GetProjectsLocationsGlossariesCategoriesResponse =
  GoogleCloudDataplexV1GlossaryCategory;
export const GetProjectsLocationsGlossariesCategoriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1GlossaryCategory;

export type GetProjectsLocationsGlossariesCategoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a GlossaryCategory resource. */
export const getProjectsLocationsGlossariesCategories: API.OperationMethod<
  GetProjectsLocationsGlossariesCategoriesRequest,
  GetProjectsLocationsGlossariesCategoriesResponse,
  GetProjectsLocationsGlossariesCategoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGlossariesCategoriesRequest,
  output: GetProjectsLocationsGlossariesCategoriesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsGlossariesTermsRequest {
  /** Required. The parent, which has this collection of GlossaryTerms. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} where location_id refers to a Google Cloud region. */
  parent: string;
  /** Optional. Order by expression that orders GlossaryTerms listed in the response. Order by fields are: name or create_time for the result. If not specified, the ordering is undefined. */
  orderBy?: string;
  /** Optional. The maximum number of GlossaryTerms to return. The service may return fewer than this value. If unspecified, at most 50 GlossaryTerms will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous ListGlossaryTerms call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListGlossaryTerms must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filter expression that filters GlossaryTerms listed in the response. Filters are supported on the following fields: - immediate_parentExamples of using a filter are: - immediate_parent="projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}" - immediate_parent="projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/categories/{category_id}"This will only return the GlossaryTerms that are directly nested under the specified parent. */
  filter?: string;
}

export const ListProjectsLocationsGlossariesTermsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/terms" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGlossariesTermsRequest>;

export type ListProjectsLocationsGlossariesTermsResponse =
  GoogleCloudDataplexV1ListGlossaryTermsResponse;
export const ListProjectsLocationsGlossariesTermsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListGlossaryTermsResponse;

export type ListProjectsLocationsGlossariesTermsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists GlossaryTerm resources in a Glossary. */
export const listProjectsLocationsGlossariesTerms: API.PaginatedOperationMethod<
  ListProjectsLocationsGlossariesTermsRequest,
  ListProjectsLocationsGlossariesTermsResponse,
  ListProjectsLocationsGlossariesTermsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGlossariesTermsRequest,
  output: ListProjectsLocationsGlossariesTermsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsGlossariesTermsRequest {
  /** Required. The parent resource where the GlossaryTerm will be created. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} where location_id refers to a Google Cloud region. */
  parent: string;
  /** Required. GlossaryTerm identifier. */
  termId?: string;
  /** Request body */
  body?: GoogleCloudDataplexV1GlossaryTerm;
}

export const CreateProjectsLocationsGlossariesTermsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    termId: Schema.optional(Schema.String).pipe(T.HttpQuery("termId")),
    body: Schema.optional(GoogleCloudDataplexV1GlossaryTerm).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/terms", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsGlossariesTermsRequest>;

export type CreateProjectsLocationsGlossariesTermsResponse =
  GoogleCloudDataplexV1GlossaryTerm;
export const CreateProjectsLocationsGlossariesTermsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1GlossaryTerm;

export type CreateProjectsLocationsGlossariesTermsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new GlossaryTerm resource. */
export const createProjectsLocationsGlossariesTerms: API.OperationMethod<
  CreateProjectsLocationsGlossariesTermsRequest,
  CreateProjectsLocationsGlossariesTermsResponse,
  CreateProjectsLocationsGlossariesTermsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGlossariesTermsRequest,
  output: CreateProjectsLocationsGlossariesTermsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsGlossariesTermsRequest {
  /** Output only. Identifier. The resource name of the GlossaryTerm. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/terms/{term_id} */
  name: string;
  /** Required. The list of fields to update. */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDataplexV1GlossaryTerm;
}

export const PatchProjectsLocationsGlossariesTermsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDataplexV1GlossaryTerm).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsGlossariesTermsRequest>;

export type PatchProjectsLocationsGlossariesTermsResponse =
  GoogleCloudDataplexV1GlossaryTerm;
export const PatchProjectsLocationsGlossariesTermsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1GlossaryTerm;

export type PatchProjectsLocationsGlossariesTermsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a GlossaryTerm resource. */
export const patchProjectsLocationsGlossariesTerms: API.OperationMethod<
  PatchProjectsLocationsGlossariesTermsRequest,
  PatchProjectsLocationsGlossariesTermsResponse,
  PatchProjectsLocationsGlossariesTermsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsGlossariesTermsRequest,
  output: PatchProjectsLocationsGlossariesTermsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsGlossariesTermsRequest {
  /** Required. The name of the GlossaryTerm to retrieve. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/terms/{term_id} */
  name: string;
}

export const GetProjectsLocationsGlossariesTermsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGlossariesTermsRequest>;

export type GetProjectsLocationsGlossariesTermsResponse =
  GoogleCloudDataplexV1GlossaryTerm;
export const GetProjectsLocationsGlossariesTermsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1GlossaryTerm;

export type GetProjectsLocationsGlossariesTermsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a GlossaryTerm resource. */
export const getProjectsLocationsGlossariesTerms: API.OperationMethod<
  GetProjectsLocationsGlossariesTermsRequest,
  GetProjectsLocationsGlossariesTermsResponse,
  GetProjectsLocationsGlossariesTermsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGlossariesTermsRequest,
  output: GetProjectsLocationsGlossariesTermsResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsGlossariesTermsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsGlossariesTermsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsGlossariesTermsRequest>;

export type TestIamPermissionsProjectsLocationsGlossariesTermsResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsGlossariesTermsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsGlossariesTermsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsGlossariesTerms: API.OperationMethod<
  TestIamPermissionsProjectsLocationsGlossariesTermsRequest,
  TestIamPermissionsProjectsLocationsGlossariesTermsResponse,
  TestIamPermissionsProjectsLocationsGlossariesTermsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsGlossariesTermsRequest,
  output: TestIamPermissionsProjectsLocationsGlossariesTermsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsGlossariesTermsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsGlossariesTermsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsGlossariesTermsRequest>;

export type GetIamPolicyProjectsLocationsGlossariesTermsResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsGlossariesTermsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsGlossariesTermsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsGlossariesTerms: API.OperationMethod<
  GetIamPolicyProjectsLocationsGlossariesTermsRequest,
  GetIamPolicyProjectsLocationsGlossariesTermsResponse,
  GetIamPolicyProjectsLocationsGlossariesTermsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsGlossariesTermsRequest,
  output: GetIamPolicyProjectsLocationsGlossariesTermsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsGlossariesTermsRequest {
  /** Required. The name of the GlossaryTerm to delete. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/terms/{term_id} */
  name: string;
}

export const DeleteProjectsLocationsGlossariesTermsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsGlossariesTermsRequest>;

export type DeleteProjectsLocationsGlossariesTermsResponse = Empty;
export const DeleteProjectsLocationsGlossariesTermsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsGlossariesTermsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a GlossaryTerm resource. */
export const deleteProjectsLocationsGlossariesTerms: API.OperationMethod<
  DeleteProjectsLocationsGlossariesTermsRequest,
  DeleteProjectsLocationsGlossariesTermsResponse,
  DeleteProjectsLocationsGlossariesTermsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGlossariesTermsRequest,
  output: DeleteProjectsLocationsGlossariesTermsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsGlossariesTermsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsGlossariesTermsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsGlossariesTermsRequest>;

export type SetIamPolicyProjectsLocationsGlossariesTermsResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsGlossariesTermsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsGlossariesTermsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyProjectsLocationsGlossariesTerms: API.OperationMethod<
  SetIamPolicyProjectsLocationsGlossariesTermsRequest,
  SetIamPolicyProjectsLocationsGlossariesTermsResponse,
  SetIamPolicyProjectsLocationsGlossariesTermsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsGlossariesTermsRequest,
  output: SetIamPolicyProjectsLocationsGlossariesTermsResponse,
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
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = GoogleLongrunningOperation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

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

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list page token. */
  pageToken?: string;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** When set to true, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field.This can only be true when reading across collections. For example, when parent is set to "projects/example/locations/-".This field is not supported by default and will result in an UNIMPLEMENTED error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse =
  GoogleLongrunningListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningListOperationsResponse;

export type ListProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED. */
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
  body?: GoogleLongrunningCancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleLongrunningCancelOperationRequest).pipe(
      T.HttpBody(),
    ),
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

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED. */
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

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. */
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

export interface ListProjectsLocationsMetadataFeedsRequest {
  /** Optional. The page token received from a previous ListMetadataFeeds call. Provide this token to retrieve the subsequent page of results. When paginating, all other parameters that are provided to the ListMetadataFeeds request must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filter request. Filters are case-sensitive. The service supports the following formats: labels.key1 = "value1" labels:key1 name = "value"You can combine filters with AND, OR, and NOT operators. */
  filter?: string;
  /** Optional. The maximum number of metadata feeds to return. The service might return fewer feeds than this value. If unspecified, at most 10 feeds are returned. The maximum value is 1,000. */
  pageSize?: number;
  /** Required. The resource name of the parent location, in the format projects/{project_id_or_number}/locations/{location_id} */
  parent: string;
  /** Optional. The field to sort the results by, either name or create_time. If not specified, the ordering is undefined. */
  orderBy?: string;
}

export const ListProjectsLocationsMetadataFeedsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/metadataFeeds" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsMetadataFeedsRequest>;

export type ListProjectsLocationsMetadataFeedsResponse =
  GoogleCloudDataplexV1ListMetadataFeedsResponse;
export const ListProjectsLocationsMetadataFeedsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListMetadataFeedsResponse;

export type ListProjectsLocationsMetadataFeedsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a list of MetadataFeeds. */
export const listProjectsLocationsMetadataFeeds: API.PaginatedOperationMethod<
  ListProjectsLocationsMetadataFeedsRequest,
  ListProjectsLocationsMetadataFeedsResponse,
  ListProjectsLocationsMetadataFeedsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsMetadataFeedsRequest,
  output: ListProjectsLocationsMetadataFeedsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsMetadataFeedsRequest {
  /** Optional. The service validates the request without performing any mutations. The default is false. */
  validateOnly?: boolean;
  /** Required. The resource name of the parent location, in the format projects/{project_id_or_number}/locations/{location_id} */
  parent: string;
  /** Optional. The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-. */
  metadataFeedId?: string;
  /** Request body */
  body?: GoogleCloudDataplexV1MetadataFeed;
}

export const CreateProjectsLocationsMetadataFeedsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    metadataFeedId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("metadataFeedId"),
    ),
    body: Schema.optional(GoogleCloudDataplexV1MetadataFeed).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/metadataFeeds",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsMetadataFeedsRequest>;

export type CreateProjectsLocationsMetadataFeedsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsMetadataFeedsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsMetadataFeedsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a MetadataFeed. */
export const createProjectsLocationsMetadataFeeds: API.OperationMethod<
  CreateProjectsLocationsMetadataFeedsRequest,
  CreateProjectsLocationsMetadataFeedsResponse,
  CreateProjectsLocationsMetadataFeedsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsMetadataFeedsRequest,
  output: CreateProjectsLocationsMetadataFeedsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsMetadataFeedsRequest {
  /** Required. The resource name of the metadata feed, in the format projects/{project_id_or_number}/locations/{location_id}/MetadataFeeds/{metadata_feed_id}. */
  name: string;
}

export const GetProjectsLocationsMetadataFeedsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsMetadataFeedsRequest>;

export type GetProjectsLocationsMetadataFeedsResponse =
  GoogleCloudDataplexV1MetadataFeed;
export const GetProjectsLocationsMetadataFeedsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1MetadataFeed;

export type GetProjectsLocationsMetadataFeedsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a MetadataFeed. */
export const getProjectsLocationsMetadataFeeds: API.OperationMethod<
  GetProjectsLocationsMetadataFeedsRequest,
  GetProjectsLocationsMetadataFeedsResponse,
  GetProjectsLocationsMetadataFeedsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMetadataFeedsRequest,
  output: GetProjectsLocationsMetadataFeedsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsMetadataFeedsRequest {
  /** Identifier. The resource name of the metadata feed, in the format projects/{project_id_or_number}/locations/{location_id}/metadataFeeds/{metadata_feed_id}. */
  name: string;
  /** Optional. Mask of fields to update. */
  updateMask?: string;
  /** Optional. Only validate the request, but do not perform mutations. The default is false. */
  validateOnly?: boolean;
  /** Request body */
  body?: GoogleCloudDataplexV1MetadataFeed;
}

export const PatchProjectsLocationsMetadataFeedsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GoogleCloudDataplexV1MetadataFeed).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsMetadataFeedsRequest>;

export type PatchProjectsLocationsMetadataFeedsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsMetadataFeedsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsMetadataFeedsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a MetadataFeed. */
export const patchProjectsLocationsMetadataFeeds: API.OperationMethod<
  PatchProjectsLocationsMetadataFeedsRequest,
  PatchProjectsLocationsMetadataFeedsResponse,
  PatchProjectsLocationsMetadataFeedsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsMetadataFeedsRequest,
  output: PatchProjectsLocationsMetadataFeedsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsMetadataFeedsRequest {
  /** Required. The resource name of the metadata feed, in the format projects/{project_id_or_number}/locations/{location_id}/MetadataFeeds/{metadata_feed_id}. */
  name: string;
}

export const DeleteProjectsLocationsMetadataFeedsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsMetadataFeedsRequest>;

export type DeleteProjectsLocationsMetadataFeedsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsMetadataFeedsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsMetadataFeedsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a MetadataFeed. */
export const deleteProjectsLocationsMetadataFeeds: API.OperationMethod<
  DeleteProjectsLocationsMetadataFeedsRequest,
  DeleteProjectsLocationsMetadataFeedsResponse,
  DeleteProjectsLocationsMetadataFeedsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsMetadataFeedsRequest,
  output: DeleteProjectsLocationsMetadataFeedsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsEntryTypesRequest {
  /** Required. The resource name of the EntryType: projects/{project_number}/locations/{location_id}/entryTypes/{entry_type_id}. */
  name: string;
  /** Optional. If the client provided etag value does not match the current etag value, the DeleteEntryTypeRequest method returns an ABORTED error response. */
  etag?: string;
}

export const DeleteProjectsLocationsEntryTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsEntryTypesRequest>;

export type DeleteProjectsLocationsEntryTypesResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsEntryTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsEntryTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an EntryType. */
export const deleteProjectsLocationsEntryTypes: API.OperationMethod<
  DeleteProjectsLocationsEntryTypesRequest,
  DeleteProjectsLocationsEntryTypesResponse,
  DeleteProjectsLocationsEntryTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsEntryTypesRequest,
  output: DeleteProjectsLocationsEntryTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsEntryTypesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsEntryTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsEntryTypesRequest>;

export type SetIamPolicyProjectsLocationsEntryTypesResponse = GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsEntryTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsEntryTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyProjectsLocationsEntryTypes: API.OperationMethod<
  SetIamPolicyProjectsLocationsEntryTypesRequest,
  SetIamPolicyProjectsLocationsEntryTypesResponse,
  SetIamPolicyProjectsLocationsEntryTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsEntryTypesRequest,
  output: SetIamPolicyProjectsLocationsEntryTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsEntryTypesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsEntryTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsEntryTypesRequest>;

export type GetIamPolicyProjectsLocationsEntryTypesResponse = GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsEntryTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsEntryTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsEntryTypes: API.OperationMethod<
  GetIamPolicyProjectsLocationsEntryTypesRequest,
  GetIamPolicyProjectsLocationsEntryTypesResponse,
  GetIamPolicyProjectsLocationsEntryTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsEntryTypesRequest,
  output: GetIamPolicyProjectsLocationsEntryTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsEntryTypesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsEntryTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsEntryTypesRequest>;

export type TestIamPermissionsProjectsLocationsEntryTypesResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsEntryTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsEntryTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsEntryTypes: API.OperationMethod<
  TestIamPermissionsProjectsLocationsEntryTypesRequest,
  TestIamPermissionsProjectsLocationsEntryTypesResponse,
  TestIamPermissionsProjectsLocationsEntryTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsEntryTypesRequest,
  output: TestIamPermissionsProjectsLocationsEntryTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsEntryTypesRequest {
  /** Required. The resource name of the EntryType location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region. */
  parent: string;
  /** Optional. Orders the result by name or create_time fields. If not specified, the ordering is undefined. */
  orderBy?: string;
  /** Optional. Maximum number of EntryTypes to return. The service may return fewer than this value. If unspecified, the service returns at most 10 EntryTypes. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. Filter request. Filters are case-sensitive. The service supports the following formats: labels.key1 = "value1" labels:key1 name = "value"These restrictions can be conjoined with AND, OR, and NOT conjunctions. */
  filter?: string;
  /** Optional. Page token received from a previous ListEntryTypes call. Provide this to retrieve the subsequent page. When paginating, all other parameters you provided to ListEntryTypes must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsEntryTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/entryTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsEntryTypesRequest>;

export type ListProjectsLocationsEntryTypesResponse =
  GoogleCloudDataplexV1ListEntryTypesResponse;
export const ListProjectsLocationsEntryTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListEntryTypesResponse;

export type ListProjectsLocationsEntryTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists EntryType resources in a project and location. */
export const listProjectsLocationsEntryTypes: API.PaginatedOperationMethod<
  ListProjectsLocationsEntryTypesRequest,
  ListProjectsLocationsEntryTypesResponse,
  ListProjectsLocationsEntryTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsEntryTypesRequest,
  output: ListProjectsLocationsEntryTypesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsEntryTypesRequest {
  /** Required. EntryType identifier. */
  entryTypeId?: string;
  /** Required. The resource name of the EntryType, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region. */
  parent: string;
  /** Optional. The service validates the request without performing any mutations. The default is false. */
  validateOnly?: boolean;
  /** Request body */
  body?: GoogleCloudDataplexV1EntryType;
}

export const CreateProjectsLocationsEntryTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entryTypeId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("entryTypeId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GoogleCloudDataplexV1EntryType).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/entryTypes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsEntryTypesRequest>;

export type CreateProjectsLocationsEntryTypesResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsEntryTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsEntryTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an EntryType. */
export const createProjectsLocationsEntryTypes: API.OperationMethod<
  CreateProjectsLocationsEntryTypesRequest,
  CreateProjectsLocationsEntryTypesResponse,
  CreateProjectsLocationsEntryTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsEntryTypesRequest,
  output: CreateProjectsLocationsEntryTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsEntryTypesRequest {
  /** Output only. The relative resource name of the EntryType, of the form: projects/{project_number}/locations/{location_id}/entryTypes/{entry_type_id}. */
  name: string;
  /** Required. Mask of fields to update. */
  updateMask?: string;
  /** Optional. The service validates the request without performing any mutations. The default is false. */
  validateOnly?: boolean;
  /** Request body */
  body?: GoogleCloudDataplexV1EntryType;
}

export const PatchProjectsLocationsEntryTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GoogleCloudDataplexV1EntryType).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsEntryTypesRequest>;

export type PatchProjectsLocationsEntryTypesResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsEntryTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsEntryTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an EntryType. */
export const patchProjectsLocationsEntryTypes: API.OperationMethod<
  PatchProjectsLocationsEntryTypesRequest,
  PatchProjectsLocationsEntryTypesResponse,
  PatchProjectsLocationsEntryTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsEntryTypesRequest,
  output: PatchProjectsLocationsEntryTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsEntryTypesRequest {
  /** Required. The resource name of the EntryType: projects/{project_number}/locations/{location_id}/entryTypes/{entry_type_id}. */
  name: string;
}

export const GetProjectsLocationsEntryTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsEntryTypesRequest>;

export type GetProjectsLocationsEntryTypesResponse =
  GoogleCloudDataplexV1EntryType;
export const GetProjectsLocationsEntryTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1EntryType;

export type GetProjectsLocationsEntryTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an EntryType. */
export const getProjectsLocationsEntryTypes: API.OperationMethod<
  GetProjectsLocationsEntryTypesRequest,
  GetProjectsLocationsEntryTypesResponse,
  GetProjectsLocationsEntryTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsEntryTypesRequest,
  output: GetProjectsLocationsEntryTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsDataProductsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsDataProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsDataProductsRequest>;

export type TestIamPermissionsProjectsLocationsDataProductsResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsDataProductsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsDataProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsDataProducts: API.OperationMethod<
  TestIamPermissionsProjectsLocationsDataProductsRequest,
  TestIamPermissionsProjectsLocationsDataProductsResponse,
  TestIamPermissionsProjectsLocationsDataProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsDataProductsRequest,
  output: TestIamPermissionsProjectsLocationsDataProductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsDataProductsRequest {
  /** Required. The parent resource where this data product will be created. Format: projects/{project_id_or_number}/locations/{location_id} */
  parent: string;
  /** Optional. The ID of the data product to create.The ID must conform to RFC-1034 and contain only lower-case letters (a-z), numbers (0-9), or hyphens, with the first character a letter, the last a letter or a number, and a 63 character maximum. Characters outside of ASCII are not permitted. Valid format regex: ^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$ If not provided, a system generated ID will be used. */
  dataProductId?: string;
  /** Optional. Validates the request without actually creating the data product. Default: false. */
  validateOnly?: boolean;
  /** Request body */
  body?: GoogleCloudDataplexV1DataProduct;
}

export const CreateProjectsLocationsDataProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    dataProductId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("dataProductId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GoogleCloudDataplexV1DataProduct).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/dataProducts",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDataProductsRequest>;

export type CreateProjectsLocationsDataProductsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsDataProductsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsDataProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a data product. */
export const createProjectsLocationsDataProducts: API.OperationMethod<
  CreateProjectsLocationsDataProductsRequest,
  CreateProjectsLocationsDataProductsResponse,
  CreateProjectsLocationsDataProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDataProductsRequest,
  output: CreateProjectsLocationsDataProductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsDataProductsRequest {
  /** Required. The name of the data product to retrieve. Format: projects/{project_id_or_number}/locations/{location_id}/dataProducts/{data_product_id} */
  name: string;
}

export const GetProjectsLocationsDataProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDataProductsRequest>;

export type GetProjectsLocationsDataProductsResponse =
  GoogleCloudDataplexV1DataProduct;
export const GetProjectsLocationsDataProductsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1DataProduct;

export type GetProjectsLocationsDataProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a data product. */
export const getProjectsLocationsDataProducts: API.OperationMethod<
  GetProjectsLocationsDataProductsRequest,
  GetProjectsLocationsDataProductsResponse,
  GetProjectsLocationsDataProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDataProductsRequest,
  output: GetProjectsLocationsDataProductsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsDataProductsRequest {
  /** Optional. The list of fields to update. If this is empty or not set, then all the fields will be updated. */
  updateMask?: string;
  /** Optional. Validates the request without actually updating the data product. Default: false. */
  validateOnly?: boolean;
  /** Identifier. Resource name of the data product. Format: projects/{project_id_or_number}/locations/{location_id}/dataProducts/{data_product_id}. */
  name: string;
  /** Request body */
  body?: GoogleCloudDataplexV1DataProduct;
}

export const PatchProjectsLocationsDataProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDataplexV1DataProduct).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsDataProductsRequest>;

export type PatchProjectsLocationsDataProductsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsDataProductsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsDataProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a data product. */
export const patchProjectsLocationsDataProducts: API.OperationMethod<
  PatchProjectsLocationsDataProductsRequest,
  PatchProjectsLocationsDataProductsResponse,
  PatchProjectsLocationsDataProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsDataProductsRequest,
  output: PatchProjectsLocationsDataProductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsDataProductsRequest {
  /** Required. The parent, which has this collection of data products.Format: projects/{project_id_or_number}/locations/{location_id}.Supports listing across all locations with the wildcard - (hyphen) character. Example: projects/{project_id_or_number}/locations/- */
  parent: string;
  /** Optional. Order by expression that orders data products listed in the response.Supported Order by fields are: name or create_time.If not specified, the ordering is undefined.Ordering by create_time is not supported when listing resources across locations (i.e. when request contains /locations/-). */
  orderBy?: string;
  /** Optional. The maximum number of data products to return. The service may return fewer than this value. If unspecified, at most 50 data products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous ListDataProducts call. Provide this to retrieve the subsequent page.When paginating, all other parameters provided to ListDataProducts must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filter expression that filters data products listed in the response.Example of using this filter is: display_name="my-data-product" */
  filter?: string;
}

export const ListProjectsLocationsDataProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dataProducts" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDataProductsRequest>;

export type ListProjectsLocationsDataProductsResponse =
  GoogleCloudDataplexV1ListDataProductsResponse;
export const ListProjectsLocationsDataProductsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListDataProductsResponse;

export type ListProjectsLocationsDataProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists data products for a given project. */
export const listProjectsLocationsDataProducts: API.PaginatedOperationMethod<
  ListProjectsLocationsDataProductsRequest,
  ListProjectsLocationsDataProductsResponse,
  ListProjectsLocationsDataProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDataProductsRequest,
  output: ListProjectsLocationsDataProductsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SetIamPolicyProjectsLocationsDataProductsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsDataProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsDataProductsRequest>;

export type SetIamPolicyProjectsLocationsDataProductsResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsDataProductsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsDataProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyProjectsLocationsDataProducts: API.OperationMethod<
  SetIamPolicyProjectsLocationsDataProductsRequest,
  SetIamPolicyProjectsLocationsDataProductsResponse,
  SetIamPolicyProjectsLocationsDataProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsDataProductsRequest,
  output: SetIamPolicyProjectsLocationsDataProductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsDataProductsRequest {
  /** Optional. Validates the request without actually deleting the data product. Default: false. */
  validateOnly?: boolean;
  /** Optional. The etag of the data product.If an etag is provided and does not match the current etag of the data product, then the deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
  /** Required. The name of the data product to delete. Format: projects/{project_id_or_number}/locations/{location_id}/dataProducts/{data_product_id} */
  name: string;
}

export const DeleteProjectsLocationsDataProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsDataProductsRequest>;

export type DeleteProjectsLocationsDataProductsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsDataProductsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsDataProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a data product. The deletion will fail if the data product is not empty (i.e. contains at least one data asset). */
export const deleteProjectsLocationsDataProducts: API.OperationMethod<
  DeleteProjectsLocationsDataProductsRequest,
  DeleteProjectsLocationsDataProductsResponse,
  DeleteProjectsLocationsDataProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDataProductsRequest,
  output: DeleteProjectsLocationsDataProductsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsDataProductsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsDataProductsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsDataProductsRequest>;

export type GetIamPolicyProjectsLocationsDataProductsResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsDataProductsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsDataProductsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsDataProducts: API.OperationMethod<
  GetIamPolicyProjectsLocationsDataProductsRequest,
  GetIamPolicyProjectsLocationsDataProductsResponse,
  GetIamPolicyProjectsLocationsDataProductsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsDataProductsRequest,
  output: GetIamPolicyProjectsLocationsDataProductsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsDataProductsDataAssetsRequest {
  /** Required. The name of the data asset to delete. Format: projects/{project_id_or_number}/locations/{location_id}/dataProducts/{data_product_id}/dataAssets/{data_asset_id} */
  name: string;
  /** Optional. Validates the request without actually deleting the data asset. Defaults to false. */
  validateOnly?: boolean;
  /** Optional. The etag of the data asset. If this is provided, it must match the server's etag. If the etag is provided and does not match the server-computed etag, the request must fail with a ABORTED error code. */
  etag?: string;
}

export const DeleteProjectsLocationsDataProductsDataAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsDataProductsDataAssetsRequest>;

export type DeleteProjectsLocationsDataProductsDataAssetsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsDataProductsDataAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsDataProductsDataAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a data asset. */
export const deleteProjectsLocationsDataProductsDataAssets: API.OperationMethod<
  DeleteProjectsLocationsDataProductsDataAssetsRequest,
  DeleteProjectsLocationsDataProductsDataAssetsResponse,
  DeleteProjectsLocationsDataProductsDataAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDataProductsDataAssetsRequest,
  output: DeleteProjectsLocationsDataProductsDataAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsDataProductsDataAssetsRequest {
  /** Required. The parent, which has this collection of data assets. Format: projects/{project_id_or_number}/locations/{location_id}/dataProducts/{data_product_id} */
  parent: string;
  /** Optional. Order by expression that orders data assets listed in the response.Supported order_by fields are: name or create_time.If not specified, the ordering is undefined. */
  orderBy?: string;
  /** Optional. The maximum number of data assets to return. The service may return fewer than this value. If unspecified, at most 50 data assets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. Filter expression that filters data assets listed in the response. */
  filter?: string;
  /** Optional. A page token, received from a previous ListDataAssets call. Provide this to retrieve the subsequent page.When paginating, all other parameters provided to ListDataAssets must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsDataProductsDataAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dataAssets" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDataProductsDataAssetsRequest>;

export type ListProjectsLocationsDataProductsDataAssetsResponse =
  GoogleCloudDataplexV1ListDataAssetsResponse;
export const ListProjectsLocationsDataProductsDataAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListDataAssetsResponse;

export type ListProjectsLocationsDataProductsDataAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists data assets for a given data product. */
export const listProjectsLocationsDataProductsDataAssets: API.PaginatedOperationMethod<
  ListProjectsLocationsDataProductsDataAssetsRequest,
  ListProjectsLocationsDataProductsDataAssetsResponse,
  ListProjectsLocationsDataProductsDataAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDataProductsDataAssetsRequest,
  output: ListProjectsLocationsDataProductsDataAssetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsDataProductsDataAssetsRequest {
  /** Required. The parent resource where this data asset will be created. Format: projects/{project_id_or_number}/locations/{location_id}/dataProducts/{data_product_id} */
  parent: string;
  /** Optional. The ID of the data asset to create.The ID must conform to RFC-1034 and contain only lower-case letters (a-z), numbers (0-9), or hyphens, with the first character a letter, the last a letter or a number, and a 63 character maximum. Characters outside of ASCII are not permitted. Valid format regex: ^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$ If not provided, a system generated ID will be used. */
  dataAssetId?: string;
  /** Optional. Validates the request without actually creating the data asset. Defaults to false. */
  validateOnly?: boolean;
  /** Request body */
  body?: GoogleCloudDataplexV1DataAsset;
}

export const CreateProjectsLocationsDataProductsDataAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    dataAssetId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("dataAssetId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GoogleCloudDataplexV1DataAsset).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/dataAssets", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDataProductsDataAssetsRequest>;

export type CreateProjectsLocationsDataProductsDataAssetsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsDataProductsDataAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsDataProductsDataAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a data asset. */
export const createProjectsLocationsDataProductsDataAssets: API.OperationMethod<
  CreateProjectsLocationsDataProductsDataAssetsRequest,
  CreateProjectsLocationsDataProductsDataAssetsResponse,
  CreateProjectsLocationsDataProductsDataAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDataProductsDataAssetsRequest,
  output: CreateProjectsLocationsDataProductsDataAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsDataProductsDataAssetsRequest {
  /** Optional. The list of fields to update. If this is empty or not set, then all the fields will be updated. */
  updateMask?: string;
  /** Optional. Validates the request without actually updating the data asset. Defaults to false. */
  validateOnly?: boolean;
  /** Identifier. Resource name of the data asset. Format: projects/{project_id_or_number}/locations/{location_id}/dataProducts/{data_product_id}/dataAssets/{data_asset_id} */
  name: string;
  /** Request body */
  body?: GoogleCloudDataplexV1DataAsset;
}

export const PatchProjectsLocationsDataProductsDataAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDataplexV1DataAsset).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsDataProductsDataAssetsRequest>;

export type PatchProjectsLocationsDataProductsDataAssetsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsDataProductsDataAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsDataProductsDataAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a data asset. */
export const patchProjectsLocationsDataProductsDataAssets: API.OperationMethod<
  PatchProjectsLocationsDataProductsDataAssetsRequest,
  PatchProjectsLocationsDataProductsDataAssetsResponse,
  PatchProjectsLocationsDataProductsDataAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsDataProductsDataAssetsRequest,
  output: PatchProjectsLocationsDataProductsDataAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsDataProductsDataAssetsRequest {
  /** Required. The name of the data asset to retrieve. Format: projects/{project_id_or_number}/locations/{location_id}/dataProducts/{data_product_id}/dataAssets/{data_asset_id} */
  name: string;
}

export const GetProjectsLocationsDataProductsDataAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDataProductsDataAssetsRequest>;

export type GetProjectsLocationsDataProductsDataAssetsResponse =
  GoogleCloudDataplexV1DataAsset;
export const GetProjectsLocationsDataProductsDataAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1DataAsset;

export type GetProjectsLocationsDataProductsDataAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a data asset. */
export const getProjectsLocationsDataProductsDataAssets: API.OperationMethod<
  GetProjectsLocationsDataProductsDataAssetsRequest,
  GetProjectsLocationsDataProductsDataAssetsResponse,
  GetProjectsLocationsDataProductsDataAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDataProductsDataAssetsRequest,
  output: GetProjectsLocationsDataProductsDataAssetsResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsGovernanceRulesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsGovernanceRulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsGovernanceRulesRequest>;

export type TestIamPermissionsProjectsLocationsGovernanceRulesResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsGovernanceRulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsGovernanceRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsGovernanceRules: API.OperationMethod<
  TestIamPermissionsProjectsLocationsGovernanceRulesRequest,
  TestIamPermissionsProjectsLocationsGovernanceRulesResponse,
  TestIamPermissionsProjectsLocationsGovernanceRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsGovernanceRulesRequest,
  output: TestIamPermissionsProjectsLocationsGovernanceRulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsGovernanceRulesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsGovernanceRulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsGovernanceRulesRequest>;

export type SetIamPolicyProjectsLocationsGovernanceRulesResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsGovernanceRulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsGovernanceRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyProjectsLocationsGovernanceRules: API.OperationMethod<
  SetIamPolicyProjectsLocationsGovernanceRulesRequest,
  SetIamPolicyProjectsLocationsGovernanceRulesResponse,
  SetIamPolicyProjectsLocationsGovernanceRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsGovernanceRulesRequest,
  output: SetIamPolicyProjectsLocationsGovernanceRulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsGovernanceRulesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsGovernanceRulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsGovernanceRulesRequest>;

export type GetIamPolicyProjectsLocationsGovernanceRulesResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsGovernanceRulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsGovernanceRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsGovernanceRules: API.OperationMethod<
  GetIamPolicyProjectsLocationsGovernanceRulesRequest,
  GetIamPolicyProjectsLocationsGovernanceRulesResponse,
  GetIamPolicyProjectsLocationsGovernanceRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsGovernanceRulesRequest,
  output: GetIamPolicyProjectsLocationsGovernanceRulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetIamPolicyProjectsLocationsDataTaxonomiesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsDataTaxonomiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsDataTaxonomiesRequest>;

export type GetIamPolicyProjectsLocationsDataTaxonomiesResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsDataTaxonomiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsDataTaxonomiesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsDataTaxonomies: API.OperationMethod<
  GetIamPolicyProjectsLocationsDataTaxonomiesRequest,
  GetIamPolicyProjectsLocationsDataTaxonomiesResponse,
  GetIamPolicyProjectsLocationsDataTaxonomiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsDataTaxonomiesRequest,
  output: GetIamPolicyProjectsLocationsDataTaxonomiesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsDataTaxonomiesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsDataTaxonomiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsDataTaxonomiesRequest>;

export type SetIamPolicyProjectsLocationsDataTaxonomiesResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsDataTaxonomiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsDataTaxonomiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyProjectsLocationsDataTaxonomies: API.OperationMethod<
  SetIamPolicyProjectsLocationsDataTaxonomiesRequest,
  SetIamPolicyProjectsLocationsDataTaxonomiesResponse,
  SetIamPolicyProjectsLocationsDataTaxonomiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsDataTaxonomiesRequest,
  output: SetIamPolicyProjectsLocationsDataTaxonomiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsDataTaxonomiesRequest {
  /** Required. The resource name of the DataTaxonomy: projects/{project_number}/locations/{location_id}/dataTaxonomies/{data_taxonomy_id} */
  name: string;
  /** Optional. If the client provided etag value does not match the current etag value,the DeleteDataTaxonomy method returns an ABORTED error. */
  etag?: string;
}

export const DeleteProjectsLocationsDataTaxonomiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsDataTaxonomiesRequest>;

export type DeleteProjectsLocationsDataTaxonomiesResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsDataTaxonomiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsDataTaxonomiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a DataTaxonomy resource. All attributes within the DataTaxonomy must be deleted before the DataTaxonomy can be deleted. */
export const deleteProjectsLocationsDataTaxonomies: API.OperationMethod<
  DeleteProjectsLocationsDataTaxonomiesRequest,
  DeleteProjectsLocationsDataTaxonomiesResponse,
  DeleteProjectsLocationsDataTaxonomiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDataTaxonomiesRequest,
  output: DeleteProjectsLocationsDataTaxonomiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsDataTaxonomiesRequest {
  parent: string;
  /** Required. DataTaxonomy identifier. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the Project. */
  dataTaxonomyId?: string;
  /** Optional. Only validate the request, but do not perform mutations. The default is false. */
  validateOnly?: boolean;
  /** Request body */
  body?: GoogleCloudDataplexV1DataTaxonomy;
}

export const CreateProjectsLocationsDataTaxonomiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    dataTaxonomyId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("dataTaxonomyId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GoogleCloudDataplexV1DataTaxonomy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/dataTaxonomies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDataTaxonomiesRequest>;

export type CreateProjectsLocationsDataTaxonomiesResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsDataTaxonomiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsDataTaxonomiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a DataTaxonomy resource. */
export const createProjectsLocationsDataTaxonomies: API.OperationMethod<
  CreateProjectsLocationsDataTaxonomiesRequest,
  CreateProjectsLocationsDataTaxonomiesResponse,
  CreateProjectsLocationsDataTaxonomiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDataTaxonomiesRequest,
  output: CreateProjectsLocationsDataTaxonomiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsDataTaxonomiesRequest {
  /** Output only. The relative resource name of the DataTaxonomy, of the form: projects/{project_number}/locations/{location_id}/dataTaxonomies/{data_taxonomy_id}. */
  name: string;
  /** Required. Mask of fields to update. */
  updateMask?: string;
  /** Optional. Only validate the request, but do not perform mutations. The default is false. */
  validateOnly?: boolean;
  /** Request body */
  body?: GoogleCloudDataplexV1DataTaxonomy;
}

export const PatchProjectsLocationsDataTaxonomiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GoogleCloudDataplexV1DataTaxonomy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsDataTaxonomiesRequest>;

export type PatchProjectsLocationsDataTaxonomiesResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsDataTaxonomiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsDataTaxonomiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a DataTaxonomy resource. */
export const patchProjectsLocationsDataTaxonomies: API.OperationMethod<
  PatchProjectsLocationsDataTaxonomiesRequest,
  PatchProjectsLocationsDataTaxonomiesResponse,
  PatchProjectsLocationsDataTaxonomiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsDataTaxonomiesRequest,
  output: PatchProjectsLocationsDataTaxonomiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsDataTaxonomiesRequest {
  name: string;
}

export const GetProjectsLocationsDataTaxonomiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDataTaxonomiesRequest>;

export type GetProjectsLocationsDataTaxonomiesResponse =
  GoogleCloudDataplexV1DataTaxonomy;
export const GetProjectsLocationsDataTaxonomiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1DataTaxonomy;

export type GetProjectsLocationsDataTaxonomiesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a DataTaxonomy resource. */
export const getProjectsLocationsDataTaxonomies: API.OperationMethod<
  GetProjectsLocationsDataTaxonomiesRequest,
  GetProjectsLocationsDataTaxonomiesResponse,
  GetProjectsLocationsDataTaxonomiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDataTaxonomiesRequest,
  output: GetProjectsLocationsDataTaxonomiesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsDataTaxonomiesRequest {
  /** Required. The resource name of the DataTaxonomy location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region. */
  parent: string;
  /** Optional. Order by fields for the result. */
  orderBy?: string;
  /** Optional. Filter request. */
  filter?: string;
  /** Optional. Page token received from a previous ListDataTaxonomies call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataTaxonomies must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Maximum number of DataTaxonomies to return. The service may return fewer than this value. If unspecified, at most 10 DataTaxonomies will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsDataTaxonomiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dataTaxonomies" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDataTaxonomiesRequest>;

export type ListProjectsLocationsDataTaxonomiesResponse =
  GoogleCloudDataplexV1ListDataTaxonomiesResponse;
export const ListProjectsLocationsDataTaxonomiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListDataTaxonomiesResponse;

export type ListProjectsLocationsDataTaxonomiesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists DataTaxonomy resources in a project and location. */
export const listProjectsLocationsDataTaxonomies: API.PaginatedOperationMethod<
  ListProjectsLocationsDataTaxonomiesRequest,
  ListProjectsLocationsDataTaxonomiesResponse,
  ListProjectsLocationsDataTaxonomiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDataTaxonomiesRequest,
  output: ListProjectsLocationsDataTaxonomiesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface TestIamPermissionsProjectsLocationsDataTaxonomiesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsDataTaxonomiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsDataTaxonomiesRequest>;

export type TestIamPermissionsProjectsLocationsDataTaxonomiesResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsDataTaxonomiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsDataTaxonomiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsDataTaxonomies: API.OperationMethod<
  TestIamPermissionsProjectsLocationsDataTaxonomiesRequest,
  TestIamPermissionsProjectsLocationsDataTaxonomiesResponse,
  TestIamPermissionsProjectsLocationsDataTaxonomiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsDataTaxonomiesRequest,
  output: TestIamPermissionsProjectsLocationsDataTaxonomiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsDataTaxonomiesAttributesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsDataTaxonomiesAttributesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsDataTaxonomiesAttributesRequest>;

export type SetIamPolicyProjectsLocationsDataTaxonomiesAttributesResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsDataTaxonomiesAttributesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsDataTaxonomiesAttributesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyProjectsLocationsDataTaxonomiesAttributes: API.OperationMethod<
  SetIamPolicyProjectsLocationsDataTaxonomiesAttributesRequest,
  SetIamPolicyProjectsLocationsDataTaxonomiesAttributesResponse,
  SetIamPolicyProjectsLocationsDataTaxonomiesAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsDataTaxonomiesAttributesRequest,
  output: SetIamPolicyProjectsLocationsDataTaxonomiesAttributesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsDataTaxonomiesAttributesRequest {
  /** Required. The resource name of the DataAttribute: projects/{project_number}/locations/{location_id}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id} */
  name: string;
  /** Optional. If the client provided etag value does not match the current etag value, the DeleteDataAttribute method returns an ABORTED error response. */
  etag?: string;
}

export const DeleteProjectsLocationsDataTaxonomiesAttributesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsDataTaxonomiesAttributesRequest>;

export type DeleteProjectsLocationsDataTaxonomiesAttributesResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsDataTaxonomiesAttributesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsDataTaxonomiesAttributesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a Data Attribute resource. */
export const deleteProjectsLocationsDataTaxonomiesAttributes: API.OperationMethod<
  DeleteProjectsLocationsDataTaxonomiesAttributesRequest,
  DeleteProjectsLocationsDataTaxonomiesAttributesResponse,
  DeleteProjectsLocationsDataTaxonomiesAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDataTaxonomiesAttributesRequest,
  output: DeleteProjectsLocationsDataTaxonomiesAttributesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsDataTaxonomiesAttributesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsDataTaxonomiesAttributesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsDataTaxonomiesAttributesRequest>;

export type GetIamPolicyProjectsLocationsDataTaxonomiesAttributesResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsDataTaxonomiesAttributesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsDataTaxonomiesAttributesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsDataTaxonomiesAttributes: API.OperationMethod<
  GetIamPolicyProjectsLocationsDataTaxonomiesAttributesRequest,
  GetIamPolicyProjectsLocationsDataTaxonomiesAttributesResponse,
  GetIamPolicyProjectsLocationsDataTaxonomiesAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsDataTaxonomiesAttributesRequest,
  output: GetIamPolicyProjectsLocationsDataTaxonomiesAttributesResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsDataTaxonomiesAttributesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsDataTaxonomiesAttributesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsDataTaxonomiesAttributesRequest>;

export type TestIamPermissionsProjectsLocationsDataTaxonomiesAttributesResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsDataTaxonomiesAttributesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsDataTaxonomiesAttributesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsDataTaxonomiesAttributes: API.OperationMethod<
  TestIamPermissionsProjectsLocationsDataTaxonomiesAttributesRequest,
  TestIamPermissionsProjectsLocationsDataTaxonomiesAttributesResponse,
  TestIamPermissionsProjectsLocationsDataTaxonomiesAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsDataTaxonomiesAttributesRequest,
  output: TestIamPermissionsProjectsLocationsDataTaxonomiesAttributesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsDataTaxonomiesAttributesRequest {
  /** Required. The resource name of the DataTaxonomy: projects/{project_number}/locations/{location_id}/dataTaxonomies/{data_taxonomy_id} */
  parent: string;
  /** Optional. Order by fields for the result. */
  orderBy?: string;
  /** Optional. Maximum number of DataAttributes to return. The service may return fewer than this value. If unspecified, at most 10 dataAttributes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. Page token received from a previous ListDataAttributes call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataAttributes must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filter request. */
  filter?: string;
}

export const ListProjectsLocationsDataTaxonomiesAttributesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/attributes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDataTaxonomiesAttributesRequest>;

export type ListProjectsLocationsDataTaxonomiesAttributesResponse =
  GoogleCloudDataplexV1ListDataAttributesResponse;
export const ListProjectsLocationsDataTaxonomiesAttributesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListDataAttributesResponse;

export type ListProjectsLocationsDataTaxonomiesAttributesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Data Attribute resources in a DataTaxonomy. */
export const listProjectsLocationsDataTaxonomiesAttributes: API.PaginatedOperationMethod<
  ListProjectsLocationsDataTaxonomiesAttributesRequest,
  ListProjectsLocationsDataTaxonomiesAttributesResponse,
  ListProjectsLocationsDataTaxonomiesAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDataTaxonomiesAttributesRequest,
  output: ListProjectsLocationsDataTaxonomiesAttributesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsDataTaxonomiesAttributesRequest {
  /** Required. DataAttribute identifier. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the DataTaxonomy. */
  dataAttributeId?: string;
  /** Optional. Only validate the request, but do not perform mutations. The default is false. */
  validateOnly?: boolean;
  /** Required. The resource name of the parent data taxonomy projects/{project_number}/locations/{location_id}/dataTaxonomies/{data_taxonomy_id} */
  parent: string;
  /** Request body */
  body?: GoogleCloudDataplexV1DataAttribute;
}

export const CreateProjectsLocationsDataTaxonomiesAttributesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataAttributeId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("dataAttributeId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDataplexV1DataAttribute).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/attributes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDataTaxonomiesAttributesRequest>;

export type CreateProjectsLocationsDataTaxonomiesAttributesResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsDataTaxonomiesAttributesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsDataTaxonomiesAttributesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a DataAttribute resource. */
export const createProjectsLocationsDataTaxonomiesAttributes: API.OperationMethod<
  CreateProjectsLocationsDataTaxonomiesAttributesRequest,
  CreateProjectsLocationsDataTaxonomiesAttributesResponse,
  CreateProjectsLocationsDataTaxonomiesAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDataTaxonomiesAttributesRequest,
  output: CreateProjectsLocationsDataTaxonomiesAttributesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsDataTaxonomiesAttributesRequest {
  /** Required. Mask of fields to update. */
  updateMask?: string;
  /** Optional. Only validate the request, but do not perform mutations. The default is false. */
  validateOnly?: boolean;
  /** Output only. The relative resource name of the dataAttribute, of the form: projects/{project_number}/locations/{location_id}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id}. */
  name: string;
  /** Request body */
  body?: GoogleCloudDataplexV1DataAttribute;
}

export const PatchProjectsLocationsDataTaxonomiesAttributesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDataplexV1DataAttribute).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsDataTaxonomiesAttributesRequest>;

export type PatchProjectsLocationsDataTaxonomiesAttributesResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsDataTaxonomiesAttributesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsDataTaxonomiesAttributesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a DataAttribute resource. */
export const patchProjectsLocationsDataTaxonomiesAttributes: API.OperationMethod<
  PatchProjectsLocationsDataTaxonomiesAttributesRequest,
  PatchProjectsLocationsDataTaxonomiesAttributesResponse,
  PatchProjectsLocationsDataTaxonomiesAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsDataTaxonomiesAttributesRequest,
  output: PatchProjectsLocationsDataTaxonomiesAttributesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsDataTaxonomiesAttributesRequest {
  /** Required. The resource name of the dataAttribute: projects/{project_number}/locations/{location_id}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id} */
  name: string;
}

export const GetProjectsLocationsDataTaxonomiesAttributesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDataTaxonomiesAttributesRequest>;

export type GetProjectsLocationsDataTaxonomiesAttributesResponse =
  GoogleCloudDataplexV1DataAttribute;
export const GetProjectsLocationsDataTaxonomiesAttributesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1DataAttribute;

export type GetProjectsLocationsDataTaxonomiesAttributesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a Data Attribute resource. */
export const getProjectsLocationsDataTaxonomiesAttributes: API.OperationMethod<
  GetProjectsLocationsDataTaxonomiesAttributesRequest,
  GetProjectsLocationsDataTaxonomiesAttributesResponse,
  GetProjectsLocationsDataTaxonomiesAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDataTaxonomiesAttributesRequest,
  output: GetProjectsLocationsDataTaxonomiesAttributesResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsDataAttributeBindingsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsDataAttributeBindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsDataAttributeBindingsRequest>;

export type TestIamPermissionsProjectsLocationsDataAttributeBindingsResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsDataAttributeBindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsDataAttributeBindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsDataAttributeBindings: API.OperationMethod<
  TestIamPermissionsProjectsLocationsDataAttributeBindingsRequest,
  TestIamPermissionsProjectsLocationsDataAttributeBindingsResponse,
  TestIamPermissionsProjectsLocationsDataAttributeBindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsDataAttributeBindingsRequest,
  output: TestIamPermissionsProjectsLocationsDataAttributeBindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsDataAttributeBindingsRequest {
  /** Optional. Maximum number of DataAttributeBindings to return. The service may return fewer than this value. If unspecified, at most 10 DataAttributeBindings will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. Filter request. Filter using resource: filter=resource:"resource-name" Filter using attribute: filter=attributes:"attribute-name" Filter using attribute in paths list: filter=paths.attributes:"attribute-name" */
  filter?: string;
  /** Optional. Page token received from a previous ListDataAttributeBindings call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataAttributeBindings must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The resource name of the Location: projects/{project_number}/locations/{location_id} */
  parent: string;
  /** Optional. Order by fields for the result. */
  orderBy?: string;
}

export const ListProjectsLocationsDataAttributeBindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dataAttributeBindings" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDataAttributeBindingsRequest>;

export type ListProjectsLocationsDataAttributeBindingsResponse =
  GoogleCloudDataplexV1ListDataAttributeBindingsResponse;
export const ListProjectsLocationsDataAttributeBindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1ListDataAttributeBindingsResponse;

export type ListProjectsLocationsDataAttributeBindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists DataAttributeBinding resources in a project and location. */
export const listProjectsLocationsDataAttributeBindings: API.PaginatedOperationMethod<
  ListProjectsLocationsDataAttributeBindingsRequest,
  ListProjectsLocationsDataAttributeBindingsResponse,
  ListProjectsLocationsDataAttributeBindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDataAttributeBindingsRequest,
  output: ListProjectsLocationsDataAttributeBindingsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsDataAttributeBindingsRequest {
  /** Optional. Only validate the request, but do not perform mutations. The default is false. */
  validateOnly?: boolean;
  /** Required. DataAttributeBinding identifier. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the Location. */
  dataAttributeBindingId?: string;
  /** Required. The resource name of the parent data taxonomy projects/{project_number}/locations/{location_id} */
  parent: string;
  /** Request body */
  body?: GoogleCloudDataplexV1DataAttributeBinding;
}

export const CreateProjectsLocationsDataAttributeBindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    dataAttributeBindingId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("dataAttributeBindingId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudDataplexV1DataAttributeBinding).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/dataAttributeBindings",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDataAttributeBindingsRequest>;

export type CreateProjectsLocationsDataAttributeBindingsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsDataAttributeBindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsDataAttributeBindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a DataAttributeBinding resource. */
export const createProjectsLocationsDataAttributeBindings: API.OperationMethod<
  CreateProjectsLocationsDataAttributeBindingsRequest,
  CreateProjectsLocationsDataAttributeBindingsResponse,
  CreateProjectsLocationsDataAttributeBindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDataAttributeBindingsRequest,
  output: CreateProjectsLocationsDataAttributeBindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsDataAttributeBindingsRequest {
  /** Required. Mask of fields to update. */
  updateMask?: string;
  /** Optional. Only validate the request, but do not perform mutations. The default is false. */
  validateOnly?: boolean;
  /** Output only. The relative resource name of the Data Attribute Binding, of the form: projects/{project_number}/locations/{location}/dataAttributeBindings/{data_attribute_binding_id} */
  name: string;
  /** Request body */
  body?: GoogleCloudDataplexV1DataAttributeBinding;
}

export const PatchProjectsLocationsDataAttributeBindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudDataplexV1DataAttributeBinding).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsDataAttributeBindingsRequest>;

export type PatchProjectsLocationsDataAttributeBindingsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsDataAttributeBindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsDataAttributeBindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a DataAttributeBinding resource. */
export const patchProjectsLocationsDataAttributeBindings: API.OperationMethod<
  PatchProjectsLocationsDataAttributeBindingsRequest,
  PatchProjectsLocationsDataAttributeBindingsResponse,
  PatchProjectsLocationsDataAttributeBindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsDataAttributeBindingsRequest,
  output: PatchProjectsLocationsDataAttributeBindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsDataAttributeBindingsRequest {
  /** Required. The resource name of the DataAttributeBinding: projects/{project_number}/locations/{location_id}/dataAttributeBindings/{data_attribute_binding_id} */
  name: string;
}

export const GetProjectsLocationsDataAttributeBindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDataAttributeBindingsRequest>;

export type GetProjectsLocationsDataAttributeBindingsResponse =
  GoogleCloudDataplexV1DataAttributeBinding;
export const GetProjectsLocationsDataAttributeBindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDataplexV1DataAttributeBinding;

export type GetProjectsLocationsDataAttributeBindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a DataAttributeBinding resource. */
export const getProjectsLocationsDataAttributeBindings: API.OperationMethod<
  GetProjectsLocationsDataAttributeBindingsRequest,
  GetProjectsLocationsDataAttributeBindingsResponse,
  GetProjectsLocationsDataAttributeBindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDataAttributeBindingsRequest,
  output: GetProjectsLocationsDataAttributeBindingsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetIamPolicyProjectsLocationsDataAttributeBindingsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsDataAttributeBindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsDataAttributeBindingsRequest>;

export type SetIamPolicyProjectsLocationsDataAttributeBindingsResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsDataAttributeBindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsDataAttributeBindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors. */
export const setIamPolicyProjectsLocationsDataAttributeBindings: API.OperationMethod<
  SetIamPolicyProjectsLocationsDataAttributeBindingsRequest,
  SetIamPolicyProjectsLocationsDataAttributeBindingsResponse,
  SetIamPolicyProjectsLocationsDataAttributeBindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsDataAttributeBindingsRequest,
  output: SetIamPolicyProjectsLocationsDataAttributeBindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsDataAttributeBindingsRequest {
  /** Required. The resource name of the DataAttributeBinding: projects/{project_number}/locations/{location_id}/dataAttributeBindings/{data_attribute_binding_id} */
  name: string;
  /** Required. If the client provided etag value does not match the current etag value, the DeleteDataAttributeBindingRequest method returns an ABORTED error response. Etags must be used when calling the DeleteDataAttributeBinding. */
  etag?: string;
}

export const DeleteProjectsLocationsDataAttributeBindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsDataAttributeBindingsRequest>;

export type DeleteProjectsLocationsDataAttributeBindingsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsDataAttributeBindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsDataAttributeBindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a DataAttributeBinding resource. All attributes within the DataAttributeBinding must be deleted before the DataAttributeBinding can be deleted. */
export const deleteProjectsLocationsDataAttributeBindings: API.OperationMethod<
  DeleteProjectsLocationsDataAttributeBindingsRequest,
  DeleteProjectsLocationsDataAttributeBindingsResponse,
  DeleteProjectsLocationsDataAttributeBindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDataAttributeBindingsRequest,
  output: DeleteProjectsLocationsDataAttributeBindingsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsDataAttributeBindingsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsDataAttributeBindingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsDataAttributeBindingsRequest>;

export type GetIamPolicyProjectsLocationsDataAttributeBindingsResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsDataAttributeBindingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsDataAttributeBindingsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsDataAttributeBindings: API.OperationMethod<
  GetIamPolicyProjectsLocationsDataAttributeBindingsRequest,
  GetIamPolicyProjectsLocationsDataAttributeBindingsResponse,
  GetIamPolicyProjectsLocationsDataAttributeBindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsDataAttributeBindingsRequest,
  output: GetIamPolicyProjectsLocationsDataAttributeBindingsResponse,
  errors: [NotFound, Forbidden],
}));
