// ==========================================================================
// Database Migration API (datamigration v1)
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
  name: "datamigration",
  version: "v1",
  rootUrl: "https://datamigration.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface ConstraintEntity {
  /** Reference columns which may be associated with the constraint. For example, if the constraint is a FOREIGN_KEY, this represents the list of full names of referenced columns by the foreign key. */
  referenceColumns?: ReadonlyArray<string>;
  /** Table which is associated with the constraint. In case the constraint is defined on a table, this field is left empty as this information is stored in parent_name. However, if constraint is defined on a view, this field stores the table name on which the view is defined. */
  tableName?: string;
  /** The name of the table constraint. */
  name?: string;
  /** Table columns used as part of the Constraint, for example primary key constraint should list the columns which constitutes the key. */
  tableColumns?: ReadonlyArray<string>;
  /** Reference table which may be associated with the constraint. For example, if the constraint is a FOREIGN_KEY, this represents the list of full name of the referenced table by the foreign key. */
  referenceTable?: string;
  /** Custom engine specific features. */
  customFeatures?: Record<string, unknown>;
  /** Type of constraint, for example unique, primary key, foreign key (currently only primary key is supported). */
  type?: string;
}

export const ConstraintEntity: Schema.Schema<ConstraintEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    referenceColumns: Schema.optional(Schema.Array(Schema.String)),
    tableName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    tableColumns: Schema.optional(Schema.Array(Schema.String)),
    referenceTable: Schema.optional(Schema.String),
    customFeatures: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConstraintEntity" });

export interface ViewEntity {
  /** Custom engine specific features. */
  customFeatures?: Record<string, unknown>;
  /** The SQL code which creates the view. */
  sqlCode?: string;
  /** View constraints. */
  constraints?: ReadonlyArray<ConstraintEntity>;
}

export const ViewEntity: Schema.Schema<ViewEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customFeatures: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    sqlCode: Schema.optional(Schema.String),
    constraints: Schema.optional(Schema.Array(ConstraintEntity)),
  }).annotate({ identifier: "ViewEntity" });

export interface GoogleCloudClouddmsV1OperationMetadata {
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Additional metadata that is returned by the backend for the operation. */
  metadata?: Record<string, string>;
}

export const GoogleCloudClouddmsV1OperationMetadata: Schema.Schema<GoogleCloudClouddmsV1OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    target: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleCloudClouddmsV1OperationMetadata" });

export interface SslConfig {
  /** Input only. The x509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server.If this field is used then the 'client_key' field is mandatory. */
  clientCertificate?: string;
  /** Optional. SSL flags used for establishing SSL connection to the source database. Only source specific flags are supported. An object containing a list of "key": "value" pairs. Example: { "server_certificate_hostname": "server.com"}. */
  sslFlags?: Record<string, string>;
  /** Optional. The ssl config type according to 'client_key', 'client_certificate' and 'ca_certificate'. */
  type?:
    | "SSL_TYPE_UNSPECIFIED"
    | "SERVER_ONLY"
    | "SERVER_CLIENT"
    | "REQUIRED"
    | "NONE"
    | (string & {});
  /** Input only. The unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' field is mandatory. */
  clientKey?: string;
  /** Required. Input only. The x509 PEM-encoded certificate of the CA that signed the source database server's certificate. The replica will use this certificate to verify it's connecting to the right host. */
  caCertificate?: string;
}

export const SslConfig: Schema.Schema<SslConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientCertificate: Schema.optional(Schema.String),
    sslFlags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    type: Schema.optional(Schema.String),
    clientKey: Schema.optional(Schema.String),
    caCertificate: Schema.optional(Schema.String),
  }).annotate({ identifier: "SslConfig" });

export interface MySqlConnectionProfile {
  /** If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source. */
  cloudSqlId?: string;
  /** Required. The network port of the source MySQL database. */
  port?: number;
  /** SSL configuration for the destination to connect to the source database. */
  ssl?: SslConfig;
  /** Required. The IP or hostname of the source MySQL database. */
  host?: string;
  /** Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service. */
  username?: string;
  /** Required. Input only. The password for the user that Database Migration Service will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Database Migration Service. */
  password?: string;
  /** Output only. Indicates If this connection profile password is stored. */
  passwordSet?: boolean;
}

export const MySqlConnectionProfile: Schema.Schema<MySqlConnectionProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudSqlId: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    ssl: Schema.optional(SslConfig),
    host: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    passwordSet: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "MySqlConnectionProfile" });

export interface VmCreationConfig {
  /** Required. VM instance machine type to create. */
  vmMachineType?: string;
  /** The Google Cloud Platform zone to create the VM in. */
  vmZone?: string;
  /** The subnet name the vm needs to be created in. */
  subnet?: string;
}

export const VmCreationConfig: Schema.Schema<VmCreationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmMachineType: Schema.optional(Schema.String),
    vmZone: Schema.optional(Schema.String),
    subnet: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmCreationConfig" });

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

export interface Operation {
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(Status),
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
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

export interface Link {
  /** Describes what the link offers. */
  description?: string;
  /** The URL of the link. */
  url?: string;
}

export const Link: Schema.Schema<Link> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "Link" });

export interface Help {
  /** URL(s) pointing to additional information on handling the current error. */
  links?: ReadonlyArray<Link>;
}

export const Help: Schema.Schema<Help> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    links: Schema.optional(Schema.Array(Link)),
  }).annotate({ identifier: "Help" });

export interface StopMigrationJobRequest {}

export const StopMigrationJobRequest: Schema.Schema<StopMigrationJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "StopMigrationJobRequest",
  });

export interface RollbackConversionWorkspaceRequest {}

export const RollbackConversionWorkspaceRequest: Schema.Schema<RollbackConversionWorkspaceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RollbackConversionWorkspaceRequest",
  });

export interface SeedConversionWorkspaceRequest {
  /** Should the conversion workspace be committed automatically after the seed operation. */
  autoCommit?: boolean;
  /** Optional. Fully qualified (Uri) name of the source connection profile. */
  sourceConnectionProfile?: string;
  /** Optional. Fully qualified (Uri) name of the destination connection profile. */
  destinationConnectionProfile?: string;
}

export const SeedConversionWorkspaceRequest: Schema.Schema<SeedConversionWorkspaceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autoCommit: Schema.optional(Schema.Boolean),
    sourceConnectionProfile: Schema.optional(Schema.String),
    destinationConnectionProfile: Schema.optional(Schema.String),
  }).annotate({ identifier: "SeedConversionWorkspaceRequest" });

export interface EntityMove {
  /** Required. The new schema */
  newSchema?: string;
}

export const EntityMove: Schema.Schema<EntityMove> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    newSchema: Schema.optional(Schema.String),
  }).annotate({ identifier: "EntityMove" });

export interface IndexEntity {
  /** The name of the index. */
  name?: string;
  /** Table columns used as part of the Index, for example B-TREE index should list the columns which constitutes the index. */
  tableColumns?: ReadonlyArray<string>;
  /** Type of index, for example B-TREE. */
  type?: string;
  /** For each table_column, mark whether it's sorting order is ascending (false) or descending (true). If no value is defined, assume all columns are sorted in ascending order. Otherwise, the number of items must match that of table_columns with each value specifying the direction of the matched column by its index. */
  tableColumnsDescending?: ReadonlyArray<boolean>;
  /** Boolean value indicating whether the index is unique. */
  unique?: boolean;
  /** Custom engine specific features. */
  customFeatures?: Record<string, unknown>;
}

export const IndexEntity: Schema.Schema<IndexEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    tableColumns: Schema.optional(Schema.Array(Schema.String)),
    type: Schema.optional(Schema.String),
    tableColumnsDescending: Schema.optional(Schema.Array(Schema.Boolean)),
    unique: Schema.optional(Schema.Boolean),
    customFeatures: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "IndexEntity" });

export interface UDTEntity {
  /** Custom engine specific features. */
  customFeatures?: Record<string, unknown>;
  /** The SQL code which creates the udt body. */
  udtBody?: string;
  /** The SQL code which creates the udt. */
  udtSqlCode?: string;
}

export const UDTEntity: Schema.Schema<UDTEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customFeatures: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    udtBody: Schema.optional(Schema.String),
    udtSqlCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "UDTEntity" });

export interface MappingRuleFilter {
  /** Optional. The rule should be applied to specific entities defined by their fully qualified names. */
  entities?: ReadonlyArray<string>;
  /** Optional. The rule should be applied to entities whose parent entity (fully qualified name) matches the given value. For example, if the rule applies to a table entity, the expected value should be a schema (schema). If the rule applies to a column or index entity, the expected value can be either a schema (schema) or a table (schema.table) */
  parentEntity?: string;
  /** Optional. The rule should be applied to entities whose non-qualified name ends with the given suffix. */
  entityNameSuffix?: string;
  /** Optional. The rule should be applied to entities whose non-qualified name contains the given string. */
  entityNameContains?: string;
  /** Optional. The rule should be applied to entities whose non-qualified name starts with the given prefix. */
  entityNamePrefix?: string;
}

export const MappingRuleFilter: Schema.Schema<MappingRuleFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entities: Schema.optional(Schema.Array(Schema.String)),
    parentEntity: Schema.optional(Schema.String),
    entityNameSuffix: Schema.optional(Schema.String),
    entityNameContains: Schema.optional(Schema.String),
    entityNamePrefix: Schema.optional(Schema.String),
  }).annotate({ identifier: "MappingRuleFilter" });

export interface MultiEntityRename {
  /** Optional. The pattern used to generate the new entity's name. This pattern must include the characters '{name}', which will be replaced with the name of the original entity. For example, the pattern 't_{name}' for an entity name jobs would be converted to 't_jobs'. If unspecified, the default value for this field is '{name}' */
  newNamePattern?: string;
  /** Optional. Additional transformation that can be done on the source entity name before it is being used by the new_name_pattern, for example lower case. If no transformation is desired, use NO_TRANSFORMATION */
  sourceNameTransformation?:
    | "ENTITY_NAME_TRANSFORMATION_UNSPECIFIED"
    | "ENTITY_NAME_TRANSFORMATION_NO_TRANSFORMATION"
    | "ENTITY_NAME_TRANSFORMATION_LOWER_CASE"
    | "ENTITY_NAME_TRANSFORMATION_UPPER_CASE"
    | "ENTITY_NAME_TRANSFORMATION_CAPITALIZED_CASE"
    | (string & {});
}

export const MultiEntityRename: Schema.Schema<MultiEntityRename> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    newNamePattern: Schema.optional(Schema.String),
    sourceNameTransformation: Schema.optional(Schema.String),
  }).annotate({ identifier: "MultiEntityRename" });

export interface SingleColumnChange {
  /** Optional. Column data type name. */
  dataType?: string;
  /** Optional. Is the column nullable. */
  nullable?: boolean;
  /** Optional. Comment associated with the column. */
  comment?: string;
  /** Optional. Is the column of array type. */
  array?: boolean;
  /** Optional. Is the column auto-generated/identity. */
  autoGenerated?: boolean;
  /** Optional. Is the column a UDT (User-defined Type). */
  udt?: boolean;
  /** Optional. Column fractional seconds precision - e.g. 2 as in timestamp (2) - when relevant. */
  fractionalSecondsPrecision?: number;
  /** Optional. Charset override - instead of table level charset. */
  charset?: string;
  /** Optional. Column precision - e.g. 8 as in double (8,2) - when relevant. */
  precision?: number;
  /** Optional. Specifies the list of values allowed in the column. */
  setValues?: ReadonlyArray<string>;
  /** Optional. Column scale - e.g. 2 as in double (8,2) - when relevant. */
  scale?: number;
  /** Optional. Custom engine specific features. */
  customFeatures?: Record<string, unknown>;
  /** Optional. The length of the array, only relevant if the column type is an array. */
  arrayLength?: number;
  /** Optional. Column length - e.g. 50 as in varchar (50) - when relevant. */
  length?: string;
  /** Optional. Collation override - instead of table level collation. */
  collation?: string;
}

export const SingleColumnChange: Schema.Schema<SingleColumnChange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataType: Schema.optional(Schema.String),
    nullable: Schema.optional(Schema.Boolean),
    comment: Schema.optional(Schema.String),
    array: Schema.optional(Schema.Boolean),
    autoGenerated: Schema.optional(Schema.Boolean),
    udt: Schema.optional(Schema.Boolean),
    fractionalSecondsPrecision: Schema.optional(Schema.Number),
    charset: Schema.optional(Schema.String),
    precision: Schema.optional(Schema.Number),
    setValues: Schema.optional(Schema.Array(Schema.String)),
    scale: Schema.optional(Schema.Number),
    customFeatures: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    arrayLength: Schema.optional(Schema.Number),
    length: Schema.optional(Schema.String),
    collation: Schema.optional(Schema.String),
  }).annotate({ identifier: "SingleColumnChange" });

export interface ConvertRowIdToColumn {
  /** Required. Only work on tables without primary key defined */
  onlyIfNoPrimaryKey?: boolean;
}

export const ConvertRowIdToColumn: Schema.Schema<ConvertRowIdToColumn> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    onlyIfNoPrimaryKey: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ConvertRowIdToColumn" });

export interface SourceSqlChange {
  /** Required. Sql code for source (stored procedure, function, trigger or view) */
  sqlCode?: string;
}

export const SourceSqlChange: Schema.Schema<SourceSqlChange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sqlCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "SourceSqlChange" });

export interface FilterTableColumns {
  /** Optional. List of columns to be included for a particular table. */
  includeColumns?: ReadonlyArray<string>;
  /** Optional. List of columns to be excluded for a particular table. */
  excludeColumns?: ReadonlyArray<string>;
}

export const FilterTableColumns: Schema.Schema<FilterTableColumns> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeColumns: Schema.optional(Schema.Array(Schema.String)),
    excludeColumns: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "FilterTableColumns" });

export interface SingleEntityRename {
  /** Required. The new name of the destination entity */
  newName?: string;
}

export const SingleEntityRename: Schema.Schema<SingleEntityRename> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    newName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SingleEntityRename" });

export interface SinglePackageChange {
  /** Optional. Sql code for package description */
  packageDescription?: string;
  /** Optional. Sql code for package body */
  packageBody?: string;
}

export const SinglePackageChange: Schema.Schema<SinglePackageChange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageDescription: Schema.optional(Schema.String),
    packageBody: Schema.optional(Schema.String),
  }).annotate({ identifier: "SinglePackageChange" });

export interface SourceTextFilter {
  /** Optional. The filter will match columns with length greater than or equal to this number. */
  sourceMinLengthFilter?: string;
  /** Optional. The filter will match columns with length smaller than or equal to this number. */
  sourceMaxLengthFilter?: string;
}

export const SourceTextFilter: Schema.Schema<SourceTextFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceMinLengthFilter: Schema.optional(Schema.String),
    sourceMaxLengthFilter: Schema.optional(Schema.String),
  }).annotate({ identifier: "SourceTextFilter" });

export interface SourceNumericFilter {
  /** Optional. The filter will match columns with precision smaller than or equal to this number. */
  sourceMaxPrecisionFilter?: number;
  /** Optional. The filter will match columns with precision greater than or equal to this number. */
  sourceMinPrecisionFilter?: number;
  /** Required. Enum to set the option defining the datatypes numeric filter has to be applied to */
  numericFilterOption?:
    | "NUMERIC_FILTER_OPTION_UNSPECIFIED"
    | "NUMERIC_FILTER_OPTION_ALL"
    | "NUMERIC_FILTER_OPTION_LIMIT"
    | "NUMERIC_FILTER_OPTION_LIMITLESS"
    | (string & {});
  /** Optional. The filter will match columns with scale greater than or equal to this number. */
  sourceMinScaleFilter?: number;
  /** Optional. The filter will match columns with scale smaller than or equal to this number. */
  sourceMaxScaleFilter?: number;
}

export const SourceNumericFilter: Schema.Schema<SourceNumericFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceMaxPrecisionFilter: Schema.optional(Schema.Number),
    sourceMinPrecisionFilter: Schema.optional(Schema.Number),
    numericFilterOption: Schema.optional(Schema.String),
    sourceMinScaleFilter: Schema.optional(Schema.Number),
    sourceMaxScaleFilter: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SourceNumericFilter" });

export interface MultiColumnDatatypeChange {
  /** Optional. Custom engine specific features. */
  customFeatures?: Record<string, unknown>;
  /** Optional. Column fractional seconds precision - used only for timestamp based datatypes - if not specified and relevant uses the source column fractional seconds precision. */
  overrideFractionalSecondsPrecision?: number;
  /** Required. New data type. */
  newDataType?: string;
  /** Required. Filter on source data type. */
  sourceDataTypeFilter?: string;
  /** Optional. Filter for text-based data types like varchar. */
  sourceTextFilter?: SourceTextFilter;
  /** Optional. Filter for fixed point number data types such as NUMERIC/NUMBER. */
  sourceNumericFilter?: SourceNumericFilter;
  /** Optional. Column scale - when relevant - if not specified and relevant uses the source column scale. */
  overrideScale?: number;
  /** Optional. Column precision - when relevant - if not specified and relevant uses the source column precision. */
  overridePrecision?: number;
  /** Optional. Column length - e.g. varchar (50) - if not specified and relevant uses the source column length. */
  overrideLength?: string;
}

export const MultiColumnDatatypeChange: Schema.Schema<MultiColumnDatatypeChange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customFeatures: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    overrideFractionalSecondsPrecision: Schema.optional(Schema.Number),
    newDataType: Schema.optional(Schema.String),
    sourceDataTypeFilter: Schema.optional(Schema.String),
    sourceTextFilter: Schema.optional(SourceTextFilter),
    sourceNumericFilter: Schema.optional(SourceNumericFilter),
    overrideScale: Schema.optional(Schema.Number),
    overridePrecision: Schema.optional(Schema.Number),
    overrideLength: Schema.optional(Schema.String),
  }).annotate({ identifier: "MultiColumnDatatypeChange" });

export interface SetTablePrimaryKey {
  /** Optional. Name for the primary key */
  primaryKey?: string;
  /** Required. List of column names for the primary key */
  primaryKeyColumns?: ReadonlyArray<string>;
}

export const SetTablePrimaryKey: Schema.Schema<SetTablePrimaryKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryKey: Schema.optional(Schema.String),
    primaryKeyColumns: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "SetTablePrimaryKey" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface IntComparisonFilter {
  /** Required. Integer compare value to be used */
  value?: string;
  /** Required. Relation between source value and compare value */
  valueComparison?:
    | "VALUE_COMPARISON_UNSPECIFIED"
    | "VALUE_COMPARISON_IF_VALUE_SMALLER_THAN"
    | "VALUE_COMPARISON_IF_VALUE_SMALLER_EQUAL_THAN"
    | "VALUE_COMPARISON_IF_VALUE_LARGER_THAN"
    | "VALUE_COMPARISON_IF_VALUE_LARGER_EQUAL_THAN"
    | (string & {});
}

export const IntComparisonFilter: Schema.Schema<IntComparisonFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    valueComparison: Schema.optional(Schema.String),
  }).annotate({ identifier: "IntComparisonFilter" });

export interface ApplyHash {
  /** Optional. Generate UUID from the data's byte array */
  uuidFromBytes?: Empty;
}

export const ApplyHash: Schema.Schema<ApplyHash> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuidFromBytes: Schema.optional(Empty),
  }).annotate({ identifier: "ApplyHash" });

export interface RoundToScale {
  /** Required. Scale value to be used */
  scale?: number;
}

export const RoundToScale: Schema.Schema<RoundToScale> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scale: Schema.optional(Schema.Number),
  }).annotate({ identifier: "RoundToScale" });

export interface AssignSpecificValue {
  /** Required. Specific value to be assigned */
  value?: string;
}

export const AssignSpecificValue: Schema.Schema<AssignSpecificValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "AssignSpecificValue" });

export interface DoubleComparisonFilter {
  /** Required. Double compare value to be used */
  value?: number;
  /** Required. Relation between source value and compare value */
  valueComparison?:
    | "VALUE_COMPARISON_UNSPECIFIED"
    | "VALUE_COMPARISON_IF_VALUE_SMALLER_THAN"
    | "VALUE_COMPARISON_IF_VALUE_SMALLER_EQUAL_THAN"
    | "VALUE_COMPARISON_IF_VALUE_LARGER_THAN"
    | "VALUE_COMPARISON_IF_VALUE_LARGER_EQUAL_THAN"
    | (string & {});
}

export const DoubleComparisonFilter: Schema.Schema<DoubleComparisonFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Number),
    valueComparison: Schema.optional(Schema.String),
  }).annotate({ identifier: "DoubleComparisonFilter" });

export interface ValueListFilter {
  /** Required. The list to be used to filter by */
  values?: ReadonlyArray<string>;
  /** Required. Whether to ignore case when filtering by values. Defaults to false */
  ignoreCase?: boolean;
  /** Required. Indicates whether the filter matches rows with values that are present in the list or those with values not present in it. */
  valuePresentList?:
    | "VALUE_PRESENT_IN_LIST_UNSPECIFIED"
    | "VALUE_PRESENT_IN_LIST_IF_VALUE_LIST"
    | "VALUE_PRESENT_IN_LIST_IF_VALUE_NOT_LIST"
    | (string & {});
}

export const ValueListFilter: Schema.Schema<ValueListFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
    ignoreCase: Schema.optional(Schema.Boolean),
    valuePresentList: Schema.optional(Schema.String),
  }).annotate({ identifier: "ValueListFilter" });

export interface ValueTransformation {
  /** Optional. Value is null */
  isNull?: Empty;
  /** Optional. Set to min_value - if integer or numeric, will use int.minvalue, etc */
  assignMinValue?: Empty;
  /** Optional. Filter on relation between source value and compare value of type integer. */
  intComparison?: IntComparisonFilter;
  /** Optional. Set to null */
  assignNull?: Empty;
  /** Optional. Applies a hash function on the data */
  applyHash?: ApplyHash;
  /** Optional. Allows the data to change scale */
  roundScale?: RoundToScale;
  /** Optional. Set to a specific value (value is converted to fit the target data type) */
  assignSpecificValue?: AssignSpecificValue;
  /** Optional. Set to max_value - if integer or numeric, will use int.maxvalue, etc */
  assignMaxValue?: Empty;
  /** Optional. Filter on relation between source value and compare value of type double. */
  doubleComparison?: DoubleComparisonFilter;
  /** Optional. Value is found in the specified list. */
  valueList?: ValueListFilter;
}

export const ValueTransformation: Schema.Schema<ValueTransformation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isNull: Schema.optional(Empty),
    assignMinValue: Schema.optional(Empty),
    intComparison: Schema.optional(IntComparisonFilter),
    assignNull: Schema.optional(Empty),
    applyHash: Schema.optional(ApplyHash),
    roundScale: Schema.optional(RoundToScale),
    assignSpecificValue: Schema.optional(AssignSpecificValue),
    assignMaxValue: Schema.optional(Empty),
    doubleComparison: Schema.optional(DoubleComparisonFilter),
    valueList: Schema.optional(ValueListFilter),
  }).annotate({ identifier: "ValueTransformation" });

export interface ConditionalColumnSetValue {
  /** Optional. Optional filter on source column precision and scale. Used for fixed point numbers such as NUMERIC/NUMBER data types. */
  sourceNumericFilter?: SourceNumericFilter;
  /** Optional. Optional filter on source column length. Used for text based data types like varchar. */
  sourceTextFilter?: SourceTextFilter;
  /** Required. Description of data transformation during migration. */
  valueTransformation?: ValueTransformation;
  /** Optional. Custom engine specific features. */
  customFeatures?: Record<string, unknown>;
}

export const ConditionalColumnSetValue: Schema.Schema<ConditionalColumnSetValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceNumericFilter: Schema.optional(SourceNumericFilter),
    sourceTextFilter: Schema.optional(SourceTextFilter),
    valueTransformation: Schema.optional(ValueTransformation),
    customFeatures: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "ConditionalColumnSetValue" });

export interface MappingRule {
  /** Optional. The mapping rule state */
  state?:
    | "STATE_UNSPECIFIED"
    | "ENABLED"
    | "DISABLED"
    | "DELETED"
    | (string & {});
  /** Required. The rule filter */
  filter?: MappingRuleFilter;
  /** Optional. Rule to specify how multiple entities should be renamed. */
  multiEntityRename?: MultiEntityRename;
  /** Optional. Rule to specify how a single column is converted. */
  singleColumnChange?: SingleColumnChange;
  /** Optional. Rule to specify how multiple tables should be converted with an additional rowid column. */
  convertRowidColumn?: ConvertRowIdToColumn;
  /** Output only. The revision ID of the mapping rule. A new revision is committed whenever the mapping rule is changed in any way. The format is an 8-character hexadecimal string. */
  revisionId?: string;
  /** Optional. Rule to change the sql code for an entity, for example, function, procedure. */
  sourceSqlChange?: SourceSqlChange;
  /** Required. The order in which the rule is applied. Lower order rules are applied before higher value rules so they may end up being overridden. */
  ruleOrder?: string;
  /** Optional. Rule to specify the list of columns to include or exclude from a table. */
  filterTableColumns?: FilterTableColumns;
  /** Optional. Rule to specify how a single entity should be renamed. */
  singleEntityRename?: SingleEntityRename;
  /** Optional. Rule to specify how a single package is converted. */
  singlePackageChange?: SinglePackageChange;
  /** Full name of the mapping rule resource, in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{set}/mappingRule/{rule}. */
  name?: string;
  /** Output only. The timestamp that the revision was created. */
  revisionCreateTime?: string;
  /** Optional. Rule to specify how multiple columns should be converted to a different data type. */
  multiColumnDataTypeChange?: MultiColumnDatatypeChange;
  /** Optional. Rule to specify how multiple entities should be relocated into a different schema. */
  entityMove?: EntityMove;
  /** Required. The rule scope */
  ruleScope?:
    | "DATABASE_ENTITY_TYPE_UNSPECIFIED"
    | "DATABASE_ENTITY_TYPE_SCHEMA"
    | "DATABASE_ENTITY_TYPE_TABLE"
    | "DATABASE_ENTITY_TYPE_COLUMN"
    | "DATABASE_ENTITY_TYPE_CONSTRAINT"
    | "DATABASE_ENTITY_TYPE_INDEX"
    | "DATABASE_ENTITY_TYPE_TRIGGER"
    | "DATABASE_ENTITY_TYPE_VIEW"
    | "DATABASE_ENTITY_TYPE_SEQUENCE"
    | "DATABASE_ENTITY_TYPE_STORED_PROCEDURE"
    | "DATABASE_ENTITY_TYPE_FUNCTION"
    | "DATABASE_ENTITY_TYPE_SYNONYM"
    | "DATABASE_ENTITY_TYPE_DATABASE_PACKAGE"
    | "DATABASE_ENTITY_TYPE_UDT"
    | "DATABASE_ENTITY_TYPE_MATERIALIZED_VIEW"
    | "DATABASE_ENTITY_TYPE_DATABASE"
    | (string & {});
  /** Optional. A human readable name */
  displayName?: string;
  /** Optional. Rule to specify the primary key for a table */
  setTablePrimaryKey?: SetTablePrimaryKey;
  /** Optional. Rule to specify how the data contained in a column should be transformed (such as trimmed, rounded, etc) provided that the data meets certain criteria. */
  conditionalColumnSetValue?: ConditionalColumnSetValue;
}

export const MappingRule: Schema.Schema<MappingRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    filter: Schema.optional(MappingRuleFilter),
    multiEntityRename: Schema.optional(MultiEntityRename),
    singleColumnChange: Schema.optional(SingleColumnChange),
    convertRowidColumn: Schema.optional(ConvertRowIdToColumn),
    revisionId: Schema.optional(Schema.String),
    sourceSqlChange: Schema.optional(SourceSqlChange),
    ruleOrder: Schema.optional(Schema.String),
    filterTableColumns: Schema.optional(FilterTableColumns),
    singleEntityRename: Schema.optional(SingleEntityRename),
    singlePackageChange: Schema.optional(SinglePackageChange),
    name: Schema.optional(Schema.String),
    revisionCreateTime: Schema.optional(Schema.String),
    multiColumnDataTypeChange: Schema.optional(MultiColumnDatatypeChange),
    entityMove: Schema.optional(EntityMove),
    ruleScope: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    setTablePrimaryKey: Schema.optional(SetTablePrimaryKey),
    conditionalColumnSetValue: Schema.optional(ConditionalColumnSetValue),
  }).annotate({ identifier: "MappingRule" });

export interface ListMappingRulesResponse {
  /** The list of conversion workspace mapping rules. */
  mappingRules?: ReadonlyArray<MappingRule>;
  /** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListMappingRulesResponse: Schema.Schema<ListMappingRulesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mappingRules: Schema.optional(Schema.Array(MappingRule)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListMappingRulesResponse" });

export interface ApplyConversionWorkspaceRequest {
  /** Optional. Filter which entities to apply. Leaving this field empty will apply all of the entities. Supports Google AIP 160 based filtering. */
  filter?: string;
  /** Optional. Only validates the apply process, but doesn't change the destination database. Only works for PostgreSQL destination connection profile. */
  dryRun?: boolean;
  /** Optional. Specifies whether the conversion workspace is to be committed automatically after the apply. */
  autoCommit?: boolean;
  /** Optional. Fully qualified (Uri) name of the destination connection profile. */
  connectionProfile?: string;
}

export const ApplyConversionWorkspaceRequest: Schema.Schema<ApplyConversionWorkspaceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.Boolean),
    autoCommit: Schema.optional(Schema.Boolean),
    connectionProfile: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApplyConversionWorkspaceRequest" });

export interface ErrorInfo {
  /** The reason of the error. This is a constant value that identifies the proximate cause of the error. Error reasons are unique within a particular domain of errors. This should be at most 63 characters and match a regular expression of `A-Z+[A-Z0-9]`, which represents UPPER_SNAKE_CASE. */
  reason?: string;
  /** The logical grouping to which the "reason" belongs. The error domain is typically the registered service name of the tool or product that generates the error. Example: "pubsub.googleapis.com". If the error is generated by some common infrastructure, the error domain must be a globally unique value that identifies the infrastructure. For Google API infrastructure, the error domain is "googleapis.com". */
  domain?: string;
  /** Additional structured details about this error. Keys must match a regular expression of `a-z+` but should ideally be lowerCamelCase. Also, they must be limited to 64 characters in length. When identifying the current value of an exceeded limit, the units should be contained in the key, not the value. For example, rather than `{"instanceLimit": "100/request"}`, should be returned as, `{"instanceLimitPerRequest": "100"}`, if the client exceeds the number of instances that can be created in a single (batch) request. */
  metadata?: Record<string, string>;
}

export const ErrorInfo: Schema.Schema<ErrorInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "ErrorInfo" });

export interface StaticIpConnectivity {}

export const StaticIpConnectivity: Schema.Schema<StaticIpConnectivity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "StaticIpConnectivity",
  });

export interface ReverseSshConnectivity {
  /** Required. The IP of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. */
  vmIp?: string;
  /** Required. The forwarding port of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. */
  vmPort?: number;
  /** The name of the VPC to peer with the Cloud SQL private network. */
  vpc?: string;
  /** The name of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. */
  vm?: string;
}

export const ReverseSshConnectivity: Schema.Schema<ReverseSshConnectivity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmIp: Schema.optional(Schema.String),
    vmPort: Schema.optional(Schema.Number),
    vpc: Schema.optional(Schema.String),
    vm: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReverseSshConnectivity" });

export interface DataCacheConfig {
  /** Optional. Whether data cache is enabled for the instance. */
  dataCacheEnabled?: boolean;
}

export const DataCacheConfig: Schema.Schema<DataCacheConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataCacheEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DataCacheConfig" });

export interface Position {
  /** Issue offset */
  offset?: number;
  /** Issue line number */
  line?: number;
  /** Issue column number */
  column?: number;
  /** Issue length */
  length?: number;
}

export const Position: Schema.Schema<Position> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    offset: Schema.optional(Schema.Number),
    line: Schema.optional(Schema.Number),
    column: Schema.optional(Schema.Number),
    length: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Position" });

export interface RetryInfo {
  /** Clients should wait at least this long between retrying the same request. */
  retryDelay?: string;
}

export const RetryInfo: Schema.Schema<RetryInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    retryDelay: Schema.optional(Schema.String),
  }).annotate({ identifier: "RetryInfo" });

export interface PrivateServiceConnectConnectivity {
  /** Required. A service attachment that exposes a database, and has the following format: projects/{project}/regions/{region}/serviceAttachments/{service_attachment_name} */
  serviceAttachment?: string;
}

export const PrivateServiceConnectConnectivity: Schema.Schema<PrivateServiceConnectConnectivity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAttachment: Schema.optional(Schema.String),
  }).annotate({ identifier: "PrivateServiceConnectConnectivity" });

export interface RequestInfo {
  /** An opaque string that should only be interpreted by the service generating it. For example, it can be used to identify requests in the service's logs. */
  requestId?: string;
  /** Any data that was used to serve this request. For example, an encrypted stack trace that can be sent back to the service provider for debugging. */
  servingData?: string;
}

export const RequestInfo: Schema.Schema<RequestInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
    servingData: Schema.optional(Schema.String),
  }).annotate({ identifier: "RequestInfo" });

export interface FetchStaticIpsResponse {
  /** List of static IPs. */
  staticIps?: ReadonlyArray<string>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const FetchStaticIpsResponse: Schema.Schema<FetchStaticIpsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    staticIps: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "FetchStaticIpsResponse" });

export interface AuthorizedNetwork {
  /** Optional. CIDR range for one authorzied network of the instance. */
  cidrRange?: string;
}

export const AuthorizedNetwork: Schema.Schema<AuthorizedNetwork> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cidrRange: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuthorizedNetwork" });

export interface SourceObjectIdentifier {
  /** Optional. The database name. This will be required only if the object uses a database name as part of its unique identifier. */
  database?: string;
  /** Optional. The schema name. This will be required only if the object uses a schema name as part of its unique identifier. */
  schema?: string;
  /** Optional. The table name. This will be required only if the object is a level below database or schema. */
  table?: string;
  /** Required. The type of the migration job object. */
  type?:
    | "MIGRATION_JOB_OBJECT_TYPE_UNSPECIFIED"
    | "DATABASE"
    | "SCHEMA"
    | "TABLE"
    | (string & {});
}

export const SourceObjectIdentifier: Schema.Schema<SourceObjectIdentifier> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    database: Schema.optional(Schema.String),
    schema: Schema.optional(Schema.String),
    table: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "SourceObjectIdentifier" });

export interface SourceObjectConfig {
  /** Optional. The object identifier. */
  objectIdentifier?: SourceObjectIdentifier;
}

export const SourceObjectConfig: Schema.Schema<SourceObjectConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectIdentifier: Schema.optional(SourceObjectIdentifier),
  }).annotate({ identifier: "SourceObjectConfig" });

export interface SourceObjectsConfig {
  /** Optional. The objects selection type of the migration job. */
  objectsSelectionType?:
    | "OBJECTS_SELECTION_TYPE_UNSPECIFIED"
    | "ALL_OBJECTS"
    | "SPECIFIED_OBJECTS"
    | (string & {});
  /** Optional. The list of the objects to be migrated. */
  objectConfigs?: ReadonlyArray<SourceObjectConfig>;
}

export const SourceObjectsConfig: Schema.Schema<SourceObjectsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectsSelectionType: Schema.optional(Schema.String),
    objectConfigs: Schema.optional(Schema.Array(SourceObjectConfig)),
  }).annotate({ identifier: "SourceObjectsConfig" });

export interface MigrationJobVerificationError {
  /** Output only. An instance of ErrorCode specifying the error that occurred. */
  errorCode?:
    | "ERROR_CODE_UNSPECIFIED"
    | "CONNECTION_FAILURE"
    | "AUTHENTICATION_FAILURE"
    | "INVALID_CONNECTION_PROFILE_CONFIG"
    | "VERSION_INCOMPATIBILITY"
    | "CONNECTION_PROFILE_TYPES_INCOMPATIBILITY"
    | "NO_PGLOGICAL_INSTALLED"
    | "PGLOGICAL_NODE_ALREADY_EXISTS"
    | "INVALID_WAL_LEVEL"
    | "INVALID_SHARED_PRELOAD_LIBRARY"
    | "INSUFFICIENT_MAX_REPLICATION_SLOTS"
    | "INSUFFICIENT_MAX_WAL_SENDERS"
    | "INSUFFICIENT_MAX_WORKER_PROCESSES"
    | "UNSUPPORTED_EXTENSIONS"
    | "UNSUPPORTED_MIGRATION_TYPE"
    | "INVALID_RDS_LOGICAL_REPLICATION"
    | "UNSUPPORTED_GTID_MODE"
    | "UNSUPPORTED_TABLE_DEFINITION"
    | "UNSUPPORTED_DEFINER"
    | "CANT_RESTART_RUNNING_MIGRATION"
    | "SOURCE_ALREADY_SETUP"
    | "TABLES_WITH_LIMITED_SUPPORT"
    | "UNSUPPORTED_DATABASE_LOCALE"
    | "UNSUPPORTED_DATABASE_FDW_CONFIG"
    | "ERROR_RDBMS"
    | "SOURCE_SIZE_EXCEEDS_THRESHOLD"
    | "EXISTING_CONFLICTING_DATABASES"
    | "PARALLEL_IMPORT_INSUFFICIENT_PRIVILEGE"
    | "EXISTING_DATA"
    | "SOURCE_MAX_SUBSCRIPTIONS"
    | (string & {});
  /** Output only. A formatted message with further details about the error and a CTA. */
  errorMessage?: string;
  /** Output only. A specific detailed error message, if supplied by the engine. */
  errorDetailMessage?: string;
}

export const MigrationJobVerificationError: Schema.Schema<MigrationJobVerificationError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorCode: Schema.optional(Schema.String),
    errorMessage: Schema.optional(Schema.String),
    errorDetailMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "MigrationJobVerificationError" });

export interface LocalizedMessage {
  /** The locale used following the specification defined at https://www.rfc-editor.org/rfc/bcp/bcp47.txt. Examples are: "en-US", "fr-CH", "es-MX" */
  locale?: string;
  /** The localized error message in the above locale. */
  message?: string;
}

export const LocalizedMessage: Schema.Schema<LocalizedMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locale: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "LocalizedMessage" });

export interface StartMigrationJobRequest {
  /** Optional. Start the migration job without running prior configuration verification. Defaults to `false`. */
  skipValidation?: boolean;
}

export const StartMigrationJobRequest: Schema.Schema<StartMigrationJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    skipValidation: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "StartMigrationJobRequest" });

export interface InstanceNetworkConfig {
  /** Optional. Enabling public ip for the instance. */
  enablePublicIp?: boolean;
  /** Optional. A list of external network authorized to access this instance. */
  authorizedExternalNetworks?: ReadonlyArray<AuthorizedNetwork>;
  /** Optional. Enabling an outbound public IP address to support a database server sending requests out into the internet. */
  enableOutboundPublicIp?: boolean;
}

export const InstanceNetworkConfig: Schema.Schema<InstanceNetworkConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enablePublicIp: Schema.optional(Schema.Boolean),
    authorizedExternalNetworks: Schema.optional(
      Schema.Array(AuthorizedNetwork),
    ),
    enableOutboundPublicIp: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "InstanceNetworkConfig" });

export interface StaticServiceIpConnectivity {}

export const StaticServiceIpConnectivity: Schema.Schema<StaticServiceIpConnectivity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "StaticServiceIpConnectivity",
  });

export interface AuditLogConfig {
  /** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
  exemptedMembers?: ReadonlyArray<string>;
  /** The log type that this config enables. */
  logType?:
    | "LOG_TYPE_UNSPECIFIED"
    | "ADMIN_READ"
    | "DATA_WRITE"
    | "DATA_READ"
    | (string & {});
}

export const AuditLogConfig: Schema.Schema<AuditLogConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exemptedMembers: Schema.optional(Schema.Array(Schema.String)),
    logType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuditLogConfig" });

export interface AuditConfig {
  /** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
  service?: string;
  /** The configuration for logging of each type of permission. */
  auditLogConfigs?: ReadonlyArray<AuditLogConfig>;
}

export const AuditConfig: Schema.Schema<AuditConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    auditLogConfigs: Schema.optional(Schema.Array(AuditLogConfig)),
  }).annotate({ identifier: "AuditConfig" });

export interface Expr {
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
}

export const Expr: Schema.Schema<Expr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
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
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<AuditConfig>;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
}

export const Policy: Schema.Schema<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
    auditConfigs: Schema.optional(Schema.Array(AuditConfig)),
    bindings: Schema.optional(Schema.Array(Binding)),
  }).annotate({ identifier: "Policy" });

export interface UserPassword {
  /** The database username. */
  user?: string;
  /** The initial password for the user. */
  password?: string;
  /** Output only. Indicates if the initial_user.password field has been set. */
  passwordSet?: boolean;
}

export const UserPassword: Schema.Schema<UserPassword> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    passwordSet: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "UserPassword" });

export interface HeterogeneousMetadata {
  /** The number of unsupported events. */
  unsupportedEventsCount?: string;
}

export const HeterogeneousMetadata: Schema.Schema<HeterogeneousMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unsupportedEventsCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "HeterogeneousMetadata" });

export interface MigrationJobObject {
  /** The object's name. */
  name?: string;
  /** Output only. The error details in case of failure. */
  error?: Status;
  /** The state of the migration job object. */
  state?:
    | "STATE_UNSPECIFIED"
    | "NOT_STARTED"
    | "RUNNING"
    | "STOPPING"
    | "STOPPED"
    | "RESTARTING"
    | "FAILED"
    | "REMOVING"
    | "NOT_SELECTED"
    | "COMPLETED"
    | (string & {});
  /** The object identifier in the data source. */
  sourceObject?: SourceObjectIdentifier;
  /** Output only. The phase of the migration job object. */
  phase?:
    | "PHASE_UNSPECIFIED"
    | "FULL_DUMP"
    | "CDC"
    | "READY_FOR_PROMOTE"
    | "PROMOTE_IN_PROGRESS"
    | "PROMOTED"
    | "DIFF_BACKUP"
    | (string & {});
  /** Output only. The last update time of the migration job object. */
  updateTime?: string;
  /** Output only. Metadata for heterogeneous migration jobs objects. */
  heterogeneousMetadata?: HeterogeneousMetadata;
  /** Output only. The creation time of the migration job object. */
  createTime?: string;
}

export const MigrationJobObject: Schema.Schema<MigrationJobObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    error: Schema.optional(Status),
    state: Schema.optional(Schema.String),
    sourceObject: Schema.optional(SourceObjectIdentifier),
    phase: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    heterogeneousMetadata: Schema.optional(HeterogeneousMetadata),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "MigrationJobObject" });

export interface ListMigrationJobObjectsResponse {
  /** List of migration job objects. */
  migrationJobObjects?: ReadonlyArray<MigrationJobObject>;
  /** A token, which can be sent as `page_token` to retrieve the next page. */
  nextPageToken?: string;
}

export const ListMigrationJobObjectsResponse: Schema.Schema<ListMigrationJobObjectsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    migrationJobObjects: Schema.optional(Schema.Array(MigrationJobObject)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListMigrationJobObjectsResponse" });

export interface LogMiner {}

export const LogMiner: Schema.Schema<LogMiner> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "LogMiner",
  });

export interface OracleAsmLogFileAccess {}

export const OracleAsmLogFileAccess: Schema.Schema<OracleAsmLogFileAccess> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "OracleAsmLogFileAccess",
  });

export interface LogFileDirectories {
  /** Required. Oracle directory for online logs. */
  onlineLogDirectory?: string;
  /** Required. Oracle directory for archived logs. */
  archivedLogDirectory?: string;
}

export const LogFileDirectories: Schema.Schema<LogFileDirectories> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    onlineLogDirectory: Schema.optional(Schema.String),
    archivedLogDirectory: Schema.optional(Schema.String),
  }).annotate({ identifier: "LogFileDirectories" });

export interface BinaryLogParser {
  /** Use Oracle ASM. */
  oracleAsmLogFileAccess?: OracleAsmLogFileAccess;
  /** Use Oracle directories. */
  logFileDirectories?: LogFileDirectories;
}

export const BinaryLogParser: Schema.Schema<BinaryLogParser> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oracleAsmLogFileAccess: Schema.optional(OracleAsmLogFileAccess),
    logFileDirectories: Schema.optional(LogFileDirectories),
  }).annotate({ identifier: "BinaryLogParser" });

export interface OracleSourceConfig {
  /** Use LogMiner. */
  logMiner?: LogMiner;
  /** Optional. The schema change number (SCN) to start CDC data migration from. */
  cdcStartPosition?: string;
  /** Optional. Maximum number of connections Database Migration Service will open to the source for CDC phase. */
  maxConcurrentCdcConnections?: number;
  /** Optional. Maximum number of connections Database Migration Service will open to the source for full dump phase. */
  maxConcurrentFullDumpConnections?: number;
  /** Use Binary Log Parser. */
  binaryLogParser?: BinaryLogParser;
  /** Optional. Whether to skip full dump or not. */
  skipFullDump?: boolean;
}

export const OracleSourceConfig: Schema.Schema<OracleSourceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logMiner: Schema.optional(LogMiner),
    cdcStartPosition: Schema.optional(Schema.String),
    maxConcurrentCdcConnections: Schema.optional(Schema.Number),
    maxConcurrentFullDumpConnections: Schema.optional(Schema.Number),
    binaryLogParser: Schema.optional(BinaryLogParser),
    skipFullDump: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "OracleSourceConfig" });

export interface PostgresDestinationConfig {
  /** Optional. Timeout for data migration transactions. */
  transactionTimeout?: string;
  /** Optional. Maximum number of connections Database Migration Service will open to the destination for data migration. */
  maxConcurrentConnections?: number;
}

export const PostgresDestinationConfig: Schema.Schema<PostgresDestinationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transactionTimeout: Schema.optional(Schema.String),
    maxConcurrentConnections: Schema.optional(Schema.Number),
  }).annotate({ identifier: "PostgresDestinationConfig" });

export interface OracleToPostgresConfig {
  /** Optional. Configuration for Oracle source. */
  oracleSourceConfig?: OracleSourceConfig;
  /** Optional. Configuration for Postgres destination. */
  postgresDestinationConfig?: PostgresDestinationConfig;
}

export const OracleToPostgresConfig: Schema.Schema<OracleToPostgresConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oracleSourceConfig: Schema.optional(OracleSourceConfig),
    postgresDestinationConfig: Schema.optional(PostgresDestinationConfig),
  }).annotate({ identifier: "OracleToPostgresConfig" });

export interface RulesFile {
  /** Required. The filename of the rules that needs to be converted. The filename is used mainly so that future logs of the import rules job contain it, and can therefore be searched by it. */
  rulesSourceFilename?: string;
  /** Required. The text content of the rules that needs to be converted. */
  rulesContent?: string;
}

export const RulesFile: Schema.Schema<RulesFile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rulesSourceFilename: Schema.optional(Schema.String),
    rulesContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "RulesFile" });

export interface ImportMappingRulesRequest {
  /** Required. Should the conversion workspace be committed automatically after the import operation. */
  autoCommit?: boolean;
  /** Required. The format of the rules content file. */
  rulesFormat?:
    | "IMPORT_RULES_FILE_FORMAT_UNSPECIFIED"
    | "IMPORT_RULES_FILE_FORMAT_HARBOUR_BRIDGE_SESSION_FILE"
    | "IMPORT_RULES_FILE_FORMAT_ORATOPG_CONFIG_FILE"
    | (string & {});
  /** Required. One or more rules files. */
  rulesFiles?: ReadonlyArray<RulesFile>;
}

export const ImportMappingRulesRequest: Schema.Schema<ImportMappingRulesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autoCommit: Schema.optional(Schema.Boolean),
    rulesFormat: Schema.optional(Schema.String),
    rulesFiles: Schema.optional(Schema.Array(RulesFile)),
  }).annotate({ identifier: "ImportMappingRulesRequest" });

export interface SequenceEntity {
  /** Start number for the sequence represented as bytes to accommodate large. numbers */
  startValue?: string;
  /** Increment value for the sequence. */
  increment?: string;
  /** Indicates whether the sequence value should cycle through. */
  cycle?: boolean;
  /** Minimum number for the sequence represented as bytes to accommodate large. numbers */
  minValue?: string;
  /** Custom engine specific features. */
  customFeatures?: Record<string, unknown>;
  /** Indicates number of entries to cache / precreate. */
  cache?: string;
  /** Maximum number for the sequence represented as bytes to accommodate large. numbers */
  maxValue?: string;
}

export const SequenceEntity: Schema.Schema<SequenceEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startValue: Schema.optional(Schema.String),
    increment: Schema.optional(Schema.String),
    cycle: Schema.optional(Schema.Boolean),
    minValue: Schema.optional(Schema.String),
    customFeatures: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    cache: Schema.optional(Schema.String),
    maxValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "SequenceEntity" });

export interface PscInterfaceConfig {
  /** Required. Fully qualified name of the Network Attachment that DMS will connect to. Format: `projects/{{project}}/regions/{{region}}/networkAttachments/{{name}}` */
  networkAttachment?: string;
}

export const PscInterfaceConfig: Schema.Schema<PscInterfaceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkAttachment: Schema.optional(Schema.String),
  }).annotate({ identifier: "PscInterfaceConfig" });

export interface SeedJobDetails {
  /** Output only. The connection profile which was used for the seed job. */
  connectionProfile?: string;
}

export const SeedJobDetails: Schema.Schema<SeedJobDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectionProfile: Schema.optional(Schema.String),
  }).annotate({ identifier: "SeedJobDetails" });

export interface FieldViolation {
  /** The reason of the field-level error. This is a constant value that identifies the proximate cause of the field-level error. It should uniquely identify the type of the FieldViolation within the scope of the google.rpc.ErrorInfo.domain. This should be at most 63 characters and match a regular expression of `A-Z+[A-Z0-9]`, which represents UPPER_SNAKE_CASE. */
  reason?: string;
  /** A path that leads to a field in the request body. The value will be a sequence of dot-separated identifiers that identify a protocol buffer field. Consider the following: message CreateContactRequest { message EmailAddress { enum Type { TYPE_UNSPECIFIED = 0; HOME = 1; WORK = 2; } optional string email = 1; repeated EmailType type = 2; } string full_name = 1; repeated EmailAddress email_addresses = 2; } In this example, in proto `field` could take one of the following values: * `full_name` for a violation in the `full_name` value * `email_addresses[0].email` for a violation in the `email` field of the first `email_addresses` message * `email_addresses[2].type[1]` for a violation in the second `type` value in the third `email_addresses` message. In JSON, the same values are represented as: * `fullName` for a violation in the `fullName` value * `emailAddresses[0].email` for a violation in the `email` field of the first `emailAddresses` message * `emailAddresses[2].type[1]` for a violation in the second `type` value in the third `emailAddresses` message. */
  field?: string;
  /** A description of why the request element is bad. */
  description?: string;
  /** Provides a localized error message for field-level errors that is safe to return to the API consumer. */
  localizedMessage?: LocalizedMessage;
}

export const FieldViolation: Schema.Schema<FieldViolation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String),
    field: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    localizedMessage: Schema.optional(LocalizedMessage),
  }).annotate({ identifier: "FieldViolation" });

export interface ResourceInfo {
  /** A name for the type of resource being accessed, e.g. "sql table", "cloud storage bucket", "file", "Google calendar"; or the type URL of the resource: e.g. "type.googleapis.com/google.pubsub.v1.Topic". */
  resourceType?: string;
  /** Describes what error is encountered when accessing this resource. For example, updating a cloud project may require the `writer` permission on the developer console project. */
  description?: string;
  /** The name of the resource being accessed. For example, a shared calendar name: "example.com_4fghdhgsrgh@group.calendar.google.com", if the current error is google.rpc.Code.PERMISSION_DENIED. */
  resourceName?: string;
  /** The owner of the resource (optional). For example, "user:" or "project:". */
  owner?: string;
}

export const ResourceInfo: Schema.Schema<ResourceInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceType: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    owner: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceInfo" });

export interface SqlServerEncryptionOptions {
  /** Required. Path to the Certificate Private Key (.pvk) in Cloud Storage, in the form `gs://bucketName/fileName`. The instance must have write permissions to the bucket and read access to the file. */
  pvkPath?: string;
  /** Required. Path to the Certificate (.cer) in Cloud Storage, in the form `gs://bucketName/fileName`. The instance must have write permissions to the bucket and read access to the file. */
  certPath?: string;
  /** Required. Input only. Password that encrypts the private key. */
  pvkPassword?: string;
}

export const SqlServerEncryptionOptions: Schema.Schema<SqlServerEncryptionOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pvkPath: Schema.optional(Schema.String),
    certPath: Schema.optional(Schema.String),
    pvkPassword: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlServerEncryptionOptions" });

export interface SqlServerDatabaseBackup {
  /** Required. Name of a SQL Server database for which to define backup configuration. */
  database?: string;
  /** Optional. Encryption settings for the database. Required if provided database backups are encrypted. Encryption settings include path to certificate, path to certificate private key, and key password. */
  encryptionOptions?: SqlServerEncryptionOptions;
}

export const SqlServerDatabaseBackup: Schema.Schema<SqlServerDatabaseBackup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    database: Schema.optional(Schema.String),
    encryptionOptions: Schema.optional(SqlServerEncryptionOptions),
  }).annotate({ identifier: "SqlServerDatabaseBackup" });

export interface EntityDdl {
  /** The actual ddl code. */
  ddl?: string;
  /** The DDL Kind selected for apply, or UNSPECIFIED if the entity wasn't converted yet. */
  ddlKind?:
    | "DDL_KIND_UNSPECIFIED"
    | "SOURCE"
    | "DETERMINISTIC"
    | "AI"
    | "USER_EDIT"
    | (string & {});
  /** The name of the database entity the ddl refers to. */
  entity?: string;
  /** Type of DDL (Create, Alter). */
  ddlType?: string;
  /** The entity type (if the DDL is for a sub entity). */
  entityType?:
    | "DATABASE_ENTITY_TYPE_UNSPECIFIED"
    | "DATABASE_ENTITY_TYPE_SCHEMA"
    | "DATABASE_ENTITY_TYPE_TABLE"
    | "DATABASE_ENTITY_TYPE_COLUMN"
    | "DATABASE_ENTITY_TYPE_CONSTRAINT"
    | "DATABASE_ENTITY_TYPE_INDEX"
    | "DATABASE_ENTITY_TYPE_TRIGGER"
    | "DATABASE_ENTITY_TYPE_VIEW"
    | "DATABASE_ENTITY_TYPE_SEQUENCE"
    | "DATABASE_ENTITY_TYPE_STORED_PROCEDURE"
    | "DATABASE_ENTITY_TYPE_FUNCTION"
    | "DATABASE_ENTITY_TYPE_SYNONYM"
    | "DATABASE_ENTITY_TYPE_DATABASE_PACKAGE"
    | "DATABASE_ENTITY_TYPE_UDT"
    | "DATABASE_ENTITY_TYPE_MATERIALIZED_VIEW"
    | "DATABASE_ENTITY_TYPE_DATABASE"
    | (string & {});
  /** If ddl_kind is USER_EDIT, this holds the DDL kind of the original content - DETERMINISTIC or AI. Otherwise, this is DDL_KIND_UNSPECIFIED. */
  editedDdlKind?:
    | "DDL_KIND_UNSPECIFIED"
    | "SOURCE"
    | "DETERMINISTIC"
    | "AI"
    | "USER_EDIT"
    | (string & {});
  /** EntityIssues found for this ddl. */
  issueId?: ReadonlyArray<string>;
}

export const EntityDdl: Schema.Schema<EntityDdl> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ddl: Schema.optional(Schema.String),
    ddlKind: Schema.optional(Schema.String),
    entity: Schema.optional(Schema.String),
    ddlType: Schema.optional(Schema.String),
    entityType: Schema.optional(Schema.String),
    editedDdlKind: Schema.optional(Schema.String),
    issueId: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "EntityDdl" });

export interface Location {
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    locationId: Schema.optional(Schema.String),
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

export interface QuotaFailureViolation {
  /** The API Service from which the `QuotaFailure.Violation` orginates. In some cases, Quota issues originate from an API Service other than the one that was called. In other words, a dependency of the called API Service could be the cause of the `QuotaFailure`, and this field would have the dependency API service name. For example, if the called API is Kubernetes Engine API (container.googleapis.com), and a quota violation occurs in the Kubernetes Engine API itself, this field would be "container.googleapis.com". On the other hand, if the quota violation occurs when the Kubernetes Engine API creates VMs in the Compute Engine API (compute.googleapis.com), this field would be "compute.googleapis.com". */
  apiService?: string;
  /** The id of the violated quota. Also know as "limit name", this is the unique identifier of a quota in the context of an API service. For example, "CPUS-PER-VM-FAMILY-per-project-region". */
  quotaId?: string;
  /** The new quota value being rolled out at the time of the violation. At the completion of the rollout, this value will be enforced in place of quota_value. If no rollout is in progress at the time of the violation, this field is not set. For example, if at the time of the violation a rollout is in progress changing the number of CPUs quota from 10 to 20, 20 would be the value of this field. */
  futureQuotaValue?: string;
  /** The subject on which the quota check failed. For example, "clientip:" or "project:". */
  subject?: string;
  /** The metric of the violated quota. A quota metric is a named counter to measure usage, such as API requests or CPUs. When an activity occurs in a service, such as Virtual Machine allocation, one or more quota metrics may be affected. For example, "compute.googleapis.com/cpus_per_vm_family", "storage.googleapis.com/internet_egress_bandwidth". */
  quotaMetric?: string;
  /** The dimensions of the violated quota. Every non-global quota is enforced on a set of dimensions. While quota metric defines what to count, the dimensions specify for what aspects the counter should be increased. For example, the quota "CPUs per region per VM family" enforces a limit on the metric "compute.googleapis.com/cpus_per_vm_family" on dimensions "region" and "vm_family". And if the violation occurred in region "us-central1" and for VM family "n1", the quota_dimensions would be, { "region": "us-central1", "vm_family": "n1", } When a quota is enforced globally, the quota_dimensions would always be empty. */
  quotaDimensions?: Record<string, string>;
  /** A description of how the quota check failed. Clients can use this description to find more about the quota configuration in the service's public documentation, or find the relevant quota limit to adjust through developer console. For example: "Service disabled" or "Daily Limit for read operations exceeded". */
  description?: string;
  /** The enforced quota value at the time of the `QuotaFailure`. For example, if the enforced quota value at the time of the `QuotaFailure` on the number of CPUs is "10", then the value of this field would reflect this quantity. */
  quotaValue?: string;
}

export const QuotaFailureViolation: Schema.Schema<QuotaFailureViolation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiService: Schema.optional(Schema.String),
    quotaId: Schema.optional(Schema.String),
    futureQuotaValue: Schema.optional(Schema.String),
    subject: Schema.optional(Schema.String),
    quotaMetric: Schema.optional(Schema.String),
    quotaDimensions: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    description: Schema.optional(Schema.String),
    quotaValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "QuotaFailureViolation" });

export interface SetIamPolicyRequest {
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: Policy;
  /** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
  updateMask?: string;
}

export const SetIamPolicyRequest: Schema.Schema<SetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Policy),
    updateMask: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetIamPolicyRequest" });

export interface GenerateTcpProxyScriptRequest {
  /** Required. The type of the Compute instance that will host the proxy. */
  vmMachineType?: string;
  /** Optional. The Google Cloud Platform zone to create the VM in. The fully qualified name of the zone must be specified, including the region name, for example "us-central1-b". If not specified, uses the "-b" zone of the destination Connection Profile's region. */
  vmZone?: string;
  /** Required. The name of the Compute instance that will host the proxy. */
  vmName?: string;
  /** Required. The name of the subnet the Compute instance will use for private connectivity. Must be supplied in the form of projects/{project}/regions/{region}/subnetworks/{subnetwork}. Note: the region for the subnet must match the Compute instance region. */
  vmSubnet?: string;
}

export const GenerateTcpProxyScriptRequest: Schema.Schema<GenerateTcpProxyScriptRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmMachineType: Schema.optional(Schema.String),
    vmZone: Schema.optional(Schema.String),
    vmName: Schema.optional(Schema.String),
    vmSubnet: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateTcpProxyScriptRequest" });

export interface ConvertJobDetails {
  /** Output only. AIP-160 based filter used to specify the entities to convert */
  filter?: string;
}

export const ConvertJobDetails: Schema.Schema<ConvertJobDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConvertJobDetails" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface SqlAclEntry {
  /** The time when this access control entry expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example: `2012-11-15T16:19:00.094Z`. */
  expireTime?: string;
  /** Input only. The time-to-leave of this access control entry. */
  ttl?: string;
  /** A label to identify this entry. */
  label?: string;
  /** The allowlisted value for the access control list. */
  value?: string;
}

export const SqlAclEntry: Schema.Schema<SqlAclEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expireTime: Schema.optional(Schema.String),
    ttl: Schema.optional(Schema.String),
    label: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlAclEntry" });

export interface SqlIpConfig {
  /** Whether the instance should be assigned an IPv4 address or not. */
  enableIpv4?: boolean;
  /** The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, `projects/myProject/global/networks/default`. This setting can be updated, but it cannot be removed after it is set. */
  privateNetwork?: string;
  /** Optional. The name of the allocated IP address range for the private IP Cloud SQL instance. This name refers to an already allocated IP range address. If set, the instance IP address will be created in the allocated range. Note that this IP address range can't be modified after the instance is created. If you change the VPC when configuring connectivity settings for the migration job, this field is not relevant. */
  allocatedIpRange?: string;
  /** Whether SSL connections over IP should be enforced or not. */
  requireSsl?: boolean;
  /** The list of external networks that are allowed to connect to the instance using the IP. See https://en.wikipedia.org/wiki/CIDR_notation#CIDR_notation, also known as 'slash' notation (e.g. `192.168.100.0/24`). */
  authorizedNetworks?: ReadonlyArray<SqlAclEntry>;
}

export const SqlIpConfig: Schema.Schema<SqlIpConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableIpv4: Schema.optional(Schema.Boolean),
    privateNetwork: Schema.optional(Schema.String),
    allocatedIpRange: Schema.optional(Schema.String),
    requireSsl: Schema.optional(Schema.Boolean),
    authorizedNetworks: Schema.optional(Schema.Array(SqlAclEntry)),
  }).annotate({ identifier: "SqlIpConfig" });

export interface VmSelectionConfig {
  /** Required. The Google Cloud Platform zone the VM is located. */
  vmZone?: string;
}

export const VmSelectionConfig: Schema.Schema<VmSelectionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmZone: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmSelectionConfig" });

export interface GenerateSshScriptRequest {
  /** The VM creation configuration */
  vmCreationConfig?: VmCreationConfig;
  /** The port that will be open on the bastion host. */
  vmPort?: number;
  /** Required. Bastion VM Instance name to use or to create. */
  vm?: string;
  /** The VM selection configuration */
  vmSelectionConfig?: VmSelectionConfig;
}

export const GenerateSshScriptRequest: Schema.Schema<GenerateSshScriptRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmCreationConfig: Schema.optional(VmCreationConfig),
    vmPort: Schema.optional(Schema.Number),
    vm: Schema.optional(Schema.String),
    vmSelectionConfig: Schema.optional(VmSelectionConfig),
  }).annotate({ identifier: "GenerateSshScriptRequest" });

export interface ForwardSshTunnelConnectivity {
  /** Required. Username for the SSH tunnel. */
  username?: string;
  /** Input only. SSH password. */
  password?: string;
  /** Input only. SSH private key. */
  privateKey?: string;
  /** Required. Hostname for the SSH tunnel. */
  hostname?: string;
  /** Port for the SSH tunnel, default value is 22. */
  port?: number;
}

export const ForwardSshTunnelConnectivity: Schema.Schema<ForwardSshTunnelConnectivity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    privateKey: Schema.optional(Schema.String),
    hostname: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ForwardSshTunnelConnectivity" });

export interface OracleAsmConfig {
  /** Required. Port for the Oracle ASM connection. */
  port?: number;
  /** Optional. SSL configuration for the Oracle connection. */
  ssl?: SslConfig;
  /** Required. Hostname for the Oracle ASM connection. */
  hostname?: string;
  /** Output only. Indicates whether a new password is included in the request. */
  passwordSet?: boolean;
  /** Required. Username for the Oracle ASM connection. */
  username?: string;
  /** Required. Input only. Password for the Oracle ASM connection. */
  password?: string;
  /** Required. ASM service name for the Oracle ASM connection. */
  asmService?: string;
}

export const OracleAsmConfig: Schema.Schema<OracleAsmConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port: Schema.optional(Schema.Number),
    ssl: Schema.optional(SslConfig),
    hostname: Schema.optional(Schema.String),
    passwordSet: Schema.optional(Schema.Boolean),
    username: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    asmService: Schema.optional(Schema.String),
  }).annotate({ identifier: "OracleAsmConfig" });

export interface PrivateConnectivity {
  /** Required. The resource name (URI) of the private connection. */
  privateConnection?: string;
}

export const PrivateConnectivity: Schema.Schema<PrivateConnectivity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateConnection: Schema.optional(Schema.String),
  }).annotate({ identifier: "PrivateConnectivity" });

export interface OracleConnectionProfile {
  /** Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service. */
  username?: string;
  /** Required. The IP or hostname of the source Oracle database. */
  host?: string;
  /** Forward SSH tunnel connectivity. */
  forwardSshConnectivity?: ForwardSshTunnelConnectivity;
  /** Static Service IP connectivity. */
  staticServiceIpConnectivity?: StaticServiceIpConnectivity;
  /** Optional. Configuration for Oracle ASM connection. */
  oracleAsmConfig?: OracleAsmConfig;
  /** Output only. Indicates whether a new password is included in the request. */
  passwordSet?: boolean;
  /** Required. Input only. The password for the user that Database Migration Service will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Database Migration Service. */
  password?: string;
  /** Private connectivity. */
  privateConnectivity?: PrivateConnectivity;
  /** Required. Database service for the Oracle connection. */
  databaseService?: string;
  /** Required. The network port of the source Oracle database. */
  port?: number;
  /** SSL configuration for the connection to the source Oracle database. * Only `SERVER_ONLY` configuration is supported for Oracle SSL. * SSL is supported for Oracle versions 12 and above. */
  ssl?: SslConfig;
}

export const OracleConnectionProfile: Schema.Schema<OracleConnectionProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.optional(Schema.String),
    host: Schema.optional(Schema.String),
    forwardSshConnectivity: Schema.optional(ForwardSshTunnelConnectivity),
    staticServiceIpConnectivity: Schema.optional(StaticServiceIpConnectivity),
    oracleAsmConfig: Schema.optional(OracleAsmConfig),
    passwordSet: Schema.optional(Schema.Boolean),
    password: Schema.optional(Schema.String),
    privateConnectivity: Schema.optional(PrivateConnectivity),
    databaseService: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    ssl: Schema.optional(SslConfig),
  }).annotate({ identifier: "OracleConnectionProfile" });

export interface MachineConfig {
  /** The number of CPU's in the VM instance. */
  cpuCount?: number;
  /** Optional. Machine type of the VM instance. E.g. "n2-highmem-4", "n2-highmem-8", "c4a-highmem-4-lssd". cpu_count must match the number of vCPUs in the machine type. */
  machineType?: string;
}

export const MachineConfig: Schema.Schema<MachineConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpuCount: Schema.optional(Schema.Number),
    machineType: Schema.optional(Schema.String),
  }).annotate({ identifier: "MachineConfig" });

export interface PrimaryInstanceSettings {
  /** Database flags to pass to AlloyDB when DMS is creating the AlloyDB cluster and instances. See the AlloyDB documentation for how these can be used. */
  databaseFlags?: Record<string, string>;
  /** Output only. All outbound public IP addresses configured for the instance. */
  outboundPublicIpAddresses?: ReadonlyArray<string>;
  /** Required. The ID of the AlloyDB primary instance. The ID must satisfy the regex expression "[a-z0-9-]+". */
  id?: string;
  /** Optional. Metadata related to instance level network configuration. */
  instanceNetworkConfig?: InstanceNetworkConfig;
  /** Configuration for the machines that host the underlying database engine. */
  machineConfig?: MachineConfig;
  /** Labels for the AlloyDB primary instance created by DMS. An object containing a list of 'key', 'value' pairs. */
  labels?: Record<string, string>;
  /** Output only. The private IP address for the Instance. This is the connection endpoint for an end-user application. */
  privateIp?: string;
}

export const PrimaryInstanceSettings: Schema.Schema<PrimaryInstanceSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseFlags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    outboundPublicIpAddresses: Schema.optional(Schema.Array(Schema.String)),
    id: Schema.optional(Schema.String),
    instanceNetworkConfig: Schema.optional(InstanceNetworkConfig),
    machineConfig: Schema.optional(MachineConfig),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    privateIp: Schema.optional(Schema.String),
  }).annotate({ identifier: "PrimaryInstanceSettings" });

export interface EncryptionConfig {
  /** The fully-qualified resource name of the KMS key. Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME] */
  kmsKeyName?: string;
}

export const EncryptionConfig: Schema.Schema<EncryptionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKeyName: Schema.optional(Schema.String),
  }).annotate({ identifier: "EncryptionConfig" });

export interface AlloyDbSettings {
  /** Labels for the AlloyDB cluster created by DMS. An object containing a list of 'key', 'value' pairs. */
  labels?: Record<string, string>;
  /** Settings for the cluster's primary instance */
  primaryInstanceSettings?: PrimaryInstanceSettings;
  /** Required. Input only. Initial user to setup during cluster creation. Required. */
  initialUser?: UserPassword;
  /** Optional. The encryption config can be specified to encrypt the data disks and other persistent data resources of a cluster with a customer-managed encryption key (CMEK). When this field is not specified, the cluster will then use default encryption scheme to protect the user data. */
  encryptionConfig?: EncryptionConfig;
  /** Required. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: "projects/{project_number}/global/networks/{network_id}". This is required to create a cluster. */
  vpcNetwork?: string;
  /** Optional. The database engine major version. This is an optional field. If a database version is not supplied at cluster creation time, then a default database version will be used. */
  databaseVersion?:
    | "DATABASE_VERSION_UNSPECIFIED"
    | "POSTGRES_14"
    | "POSTGRES_15"
    | "POSTGRES_16"
    | "POSTGRES_17"
    | "POSTGRES_18"
    | (string & {});
}

export const AlloyDbSettings: Schema.Schema<AlloyDbSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    primaryInstanceSettings: Schema.optional(PrimaryInstanceSettings),
    initialUser: Schema.optional(UserPassword),
    encryptionConfig: Schema.optional(EncryptionConfig),
    vpcNetwork: Schema.optional(Schema.String),
    databaseVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "AlloyDbSettings" });

export interface AlloyDbConnectionProfile {
  /** Immutable. Metadata used to create the destination AlloyDB cluster. */
  settings?: AlloyDbSettings;
  /** Required. The AlloyDB cluster ID that this connection profile is associated with. */
  clusterId?: string;
}

export const AlloyDbConnectionProfile: Schema.Schema<AlloyDbConnectionProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    settings: Schema.optional(AlloyDbSettings),
    clusterId: Schema.optional(Schema.String),
  }).annotate({ identifier: "AlloyDbConnectionProfile" });

export interface CloudSqlSettings {
  /** Optional. The Google Cloud Platform zone where the failover Cloud SQL database instance is located. Used when the Cloud SQL database availability type is REGIONAL (i.e. multiple zones / highly available). */
  secondaryZone?: string;
  /** The database engine type and version. Deprecated. Use database_version_name instead. */
  databaseVersion?:
    | "SQL_DATABASE_VERSION_UNSPECIFIED"
    | "MYSQL_5_6"
    | "MYSQL_5_7"
    | "MYSQL_8_0"
    | "MYSQL_8_0_18"
    | "MYSQL_8_0_26"
    | "MYSQL_8_0_27"
    | "MYSQL_8_0_28"
    | "MYSQL_8_0_30"
    | "MYSQL_8_0_31"
    | "MYSQL_8_0_32"
    | "MYSQL_8_0_33"
    | "MYSQL_8_0_34"
    | "MYSQL_8_0_35"
    | "MYSQL_8_0_36"
    | "MYSQL_8_0_37"
    | "MYSQL_8_4"
    | "POSTGRES_9_6"
    | "POSTGRES_11"
    | "POSTGRES_10"
    | "POSTGRES_12"
    | "POSTGRES_13"
    | "POSTGRES_14"
    | "POSTGRES_15"
    | "POSTGRES_16"
    | (string & {});
  /** Optional. Availability type. Potential values: * `ZONAL`: The instance serves data from only one zone. Outages in that zone affect data availability. * `REGIONAL`: The instance can serve data from more than one zone in a region (it is highly available). */
  availabilityType?:
    | "SQL_AVAILABILITY_TYPE_UNSPECIFIED"
    | "ZONAL"
    | "REGIONAL"
    | (string & {});
  /** Optional. Provisioned throughput measured in MiB per second for the data disk. This field is only used for hyperdisk-balanced disk types. */
  dataDiskProvisionedThroughput?: string;
  /** The Google Cloud Platform zone where your Cloud SQL database instance is located. */
  zone?: string;
  /** The Database Migration Service source connection profile ID, in the format: `projects/my_project_name/locations/us-central1/connectionProfiles/connection_profile_ID` */
  sourceId?: string;
  /** The storage capacity available to the database, in GB. The minimum (and default) size is 10GB. */
  dataDiskSizeGb?: string;
  /** The activation policy specifies when the instance is activated; it is applicable only when the instance state is 'RUNNABLE'. Valid values: 'ALWAYS': The instance is on, and remains so even in the absence of connection requests. `NEVER`: The instance is off; it is not activated, even if a connection request arrives. */
  activationPolicy?:
    | "SQL_ACTIVATION_POLICY_UNSPECIFIED"
    | "ALWAYS"
    | "NEVER"
    | (string & {});
  /** Optional. Provisioned number of I/O operations per second for the data disk. This field is only used for hyperdisk-balanced disk types. */
  dataDiskProvisionedIops?: string;
  /** Optional. The database engine type and version name. */
  databaseVersionName?: string;
  /** The type of storage: `PD_SSD` (default) or `PD_HDD` or `HYPERDISK_BALANCED`. */
  dataDiskType?:
    | "SQL_DATA_DISK_TYPE_UNSPECIFIED"
    | "PD_SSD"
    | "PD_HDD"
    | "HYPERDISK_BALANCED"
    | (string & {});
  /** The Cloud SQL default instance level collation. */
  collation?: string;
  /** The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit. */
  storageAutoResizeLimit?: string;
  /** Optional. The edition of the given Cloud SQL instance. */
  edition?:
    | "EDITION_UNSPECIFIED"
    | "ENTERPRISE"
    | "ENTERPRISE_PLUS"
    | (string & {});
  /** The resource labels for a Cloud SQL instance to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "18kg", "count": "3" }`. */
  userLabels?: Record<string, string>;
  /** The settings for IP Management. This allows to enable or disable the instance IP and manage which external networks can connect to the instance. The IPv4 address cannot be disabled. */
  ipConfig?: SqlIpConfig;
  /** [default: ON] If you enable this setting, Cloud SQL checks your available storage every 30 seconds. If the available storage falls below a threshold size, Cloud SQL automatically adds additional storage capacity. If the available storage repeatedly falls below the threshold size, Cloud SQL continues to add storage until it reaches the maximum of 30 TB. */
  autoStorageIncrease?: boolean;
  /** The KMS key name used for the csql instance. */
  cmekKeyName?: string;
  /** Input only. Initial root password. */
  rootPassword?: string;
  /** The tier (or machine type) for this instance, for example: `db-n1-standard-1` (MySQL instances) or `db-custom-1-3840` (PostgreSQL instances). For more information, see [Cloud SQL Instance Settings](https://cloud.google.com/sql/docs/mysql/instance-settings). */
  tier?: string;
  /** Optional. Data cache is an optional feature available for Cloud SQL for MySQL Enterprise Plus edition only. For more information on data cache, see [Data cache overview](https://cloud.google.com/sql/help/mysql-data-cache) in Cloud SQL documentation. */
  dataCacheConfig?: DataCacheConfig;
  /** The database flags passed to the Cloud SQL instance at startup. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. */
  databaseFlags?: Record<string, string>;
  /** Output only. Indicates If this connection profile root password is stored. */
  rootPasswordSet?: boolean;
}

export const CloudSqlSettings: Schema.Schema<CloudSqlSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secondaryZone: Schema.optional(Schema.String),
    databaseVersion: Schema.optional(Schema.String),
    availabilityType: Schema.optional(Schema.String),
    dataDiskProvisionedThroughput: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    sourceId: Schema.optional(Schema.String),
    dataDiskSizeGb: Schema.optional(Schema.String),
    activationPolicy: Schema.optional(Schema.String),
    dataDiskProvisionedIops: Schema.optional(Schema.String),
    databaseVersionName: Schema.optional(Schema.String),
    dataDiskType: Schema.optional(Schema.String),
    collation: Schema.optional(Schema.String),
    storageAutoResizeLimit: Schema.optional(Schema.String),
    edition: Schema.optional(Schema.String),
    userLabels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    ipConfig: Schema.optional(SqlIpConfig),
    autoStorageIncrease: Schema.optional(Schema.Boolean),
    cmekKeyName: Schema.optional(Schema.String),
    rootPassword: Schema.optional(Schema.String),
    tier: Schema.optional(Schema.String),
    dataCacheConfig: Schema.optional(DataCacheConfig),
    databaseFlags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    rootPasswordSet: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "CloudSqlSettings" });

export interface CloudSqlConnectionProfile {
  /** Output only. The Cloud SQL database instance's private IP. */
  privateIp?: string;
  /** Output only. The Cloud SQL database instance's additional (outgoing) public IP. Used when the Cloud SQL database availability type is REGIONAL (i.e. multiple zones / highly available). */
  additionalPublicIp?: string;
  /** Immutable. Metadata used to create the destination Cloud SQL database. */
  settings?: CloudSqlSettings;
  /** Output only. The Cloud SQL database instance's public IP. */
  publicIp?: string;
  /** Output only. The Cloud SQL instance ID that this connection profile is associated with. */
  cloudSqlId?: string;
}

export const CloudSqlConnectionProfile: Schema.Schema<CloudSqlConnectionProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateIp: Schema.optional(Schema.String),
    additionalPublicIp: Schema.optional(Schema.String),
    settings: Schema.optional(CloudSqlSettings),
    publicIp: Schema.optional(Schema.String),
    cloudSqlId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudSqlConnectionProfile" });

export interface SqlServerBackups {
  /** Optional. Cloud Storage path inside the bucket that stores backups. */
  gcsPrefix?: string;
  /** Required. The Cloud Storage bucket that stores backups for all replicated databases. */
  gcsBucket?: string;
}

export const SqlServerBackups: Schema.Schema<SqlServerBackups> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsPrefix: Schema.optional(Schema.String),
    gcsBucket: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlServerBackups" });

export interface SqlServerConnectionProfile {
  /** Required. The name of the specific database within the host. */
  database?: string;
  /** Static IP connectivity data (default, no additional details needed). */
  staticIpConnectivity?: StaticIpConnectivity;
  /** The backup details in Cloud Storage for homogeneous migration to Cloud SQL for SQL Server. */
  backups?: SqlServerBackups;
  /** Required. The network port of the source SQL Server database. */
  port?: number;
  /** Optional. The Database Mirroring (DBM) port of the source SQL Server instance. */
  dbmPort?: number;
  /** SSL configuration for the destination to connect to the source database. */
  ssl?: SslConfig;
  /** If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source. */
  cloudSqlId?: string;
  /** Private Service Connect connectivity. */
  privateServiceConnectConnectivity?: PrivateServiceConnectConnectivity;
  /** Forward SSH tunnel connectivity. */
  forwardSshConnectivity?: ForwardSshTunnelConnectivity;
  /** Output only. Indicates whether a new password is included in the request. */
  passwordSet?: boolean;
  /** Required. Input only. The password for the user that Database Migration Service will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Database Migration Service. */
  password?: string;
  /** Private connectivity. */
  privateConnectivity?: PrivateConnectivity;
  /** Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service. */
  username?: string;
  /** Required. The IP or hostname of the source SQL Server database. */
  host?: string;
  /** Optional. The project id of the Cloud SQL instance. If not provided, the project id of the connection profile will be used. */
  cloudSqlProjectId?: string;
}

export const SqlServerConnectionProfile: Schema.Schema<SqlServerConnectionProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    database: Schema.optional(Schema.String),
    staticIpConnectivity: Schema.optional(StaticIpConnectivity),
    backups: Schema.optional(SqlServerBackups),
    port: Schema.optional(Schema.Number),
    dbmPort: Schema.optional(Schema.Number),
    ssl: Schema.optional(SslConfig),
    cloudSqlId: Schema.optional(Schema.String),
    privateServiceConnectConnectivity: Schema.optional(
      PrivateServiceConnectConnectivity,
    ),
    forwardSshConnectivity: Schema.optional(ForwardSshTunnelConnectivity),
    passwordSet: Schema.optional(Schema.Boolean),
    password: Schema.optional(Schema.String),
    privateConnectivity: Schema.optional(PrivateConnectivity),
    username: Schema.optional(Schema.String),
    host: Schema.optional(Schema.String),
    cloudSqlProjectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlServerConnectionProfile" });

export interface PostgreSqlConnectionProfile {
  /** Required. The IP or hostname of the source PostgreSQL database. */
  host?: string;
  /** Optional. If true, Database Migration Service will use IAM database authentication to connect to the database. */
  enableIamAuthentication?: boolean;
  /** Output only. If the source is a Cloud SQL database, this field indicates the network architecture it's associated with. */
  networkArchitecture?:
    | "NETWORK_ARCHITECTURE_UNSPECIFIED"
    | "NETWORK_ARCHITECTURE_OLD_CSQL_PRODUCER"
    | "NETWORK_ARCHITECTURE_NEW_CSQL_PRODUCER"
    | (string & {});
  /** Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service. */
  username?: string;
  /** Optional. If the destination is an AlloyDB database, use this field to provide the AlloyDB cluster ID. */
  alloydbClusterId?: string;
  /** Output only. Indicates If this connection profile password is stored. */
  passwordSet?: boolean;
  /** Required. Input only. The password for the user that Database Migration Service will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Database Migration Service. */
  password?: string;
  /** Private connectivity. */
  privateConnectivity?: PrivateConnectivity;
  /** Forward SSH tunnel connectivity. */
  forwardSshConnectivity?: ForwardSshTunnelConnectivity;
  /** Private service connect connectivity. */
  privateServiceConnectConnectivity?: PrivateServiceConnectConnectivity;
  /** Required. The network port of the source PostgreSQL database. */
  port?: number;
  /** SSL configuration for the destination to connect to the source database. */
  ssl?: SslConfig;
  /** If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source. */
  cloudSqlId?: string;
  /** Optional. The name of the specific database within the host. */
  database?: string;
  /** Static ip connectivity data (default, no additional details needed). */
  staticIpConnectivity?: StaticIpConnectivity;
}

export const PostgreSqlConnectionProfile: Schema.Schema<PostgreSqlConnectionProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    host: Schema.optional(Schema.String),
    enableIamAuthentication: Schema.optional(Schema.Boolean),
    networkArchitecture: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    alloydbClusterId: Schema.optional(Schema.String),
    passwordSet: Schema.optional(Schema.Boolean),
    password: Schema.optional(Schema.String),
    privateConnectivity: Schema.optional(PrivateConnectivity),
    forwardSshConnectivity: Schema.optional(ForwardSshTunnelConnectivity),
    privateServiceConnectConnectivity: Schema.optional(
      PrivateServiceConnectConnectivity,
    ),
    port: Schema.optional(Schema.Number),
    ssl: Schema.optional(SslConfig),
    cloudSqlId: Schema.optional(Schema.String),
    database: Schema.optional(Schema.String),
    staticIpConnectivity: Schema.optional(StaticIpConnectivity),
  }).annotate({ identifier: "PostgreSqlConnectionProfile" });

export interface ConnectionProfile {
  /** Output only. The timestamp when the resource was created. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". */
  createTime?: string;
  /** The connection profile display name. */
  displayName?: string;
  /** Optional. The connection profile role. */
  role?: "ROLE_UNSPECIFIED" | "SOURCE" | "DESTINATION" | (string & {});
  /** The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`. */
  labels?: Record<string, string>;
  /** The name of this connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{connectionProfile}. */
  name?: string;
  /** Output only. The timestamp when the resource was last updated. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". */
  updateTime?: string;
  /** An Oracle database connection profile. */
  oracle?: OracleConnectionProfile;
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Output only. The error details in case of state FAILED. */
  error?: Status;
  /** An AlloyDB cluster connection profile. */
  alloydb?: AlloyDbConnectionProfile;
  /** The database provider. */
  provider?:
    | "DATABASE_PROVIDER_UNSPECIFIED"
    | "CLOUDSQL"
    | "RDS"
    | "AURORA"
    | "ALLOYDB"
    | "AZURE_DATABASE"
    | (string & {});
  /** A CloudSQL database connection profile. */
  cloudsql?: CloudSqlConnectionProfile;
  /** A MySQL database connection profile. */
  mysql?: MySqlConnectionProfile;
  /** Connection profile for a SQL Server data source. */
  sqlserver?: SqlServerConnectionProfile;
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** A PostgreSQL database connection profile. */
  postgresql?: PostgreSqlConnectionProfile;
  /** The current connection profile state (e.g. DRAFT, READY, or FAILED). */
  state?:
    | "STATE_UNSPECIFIED"
    | "DRAFT"
    | "CREATING"
    | "READY"
    | "UPDATING"
    | "DELETING"
    | "DELETED"
    | "FAILED"
    | (string & {});
}

export const ConnectionProfile: Schema.Schema<ConnectionProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    oracle: Schema.optional(OracleConnectionProfile),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
    alloydb: Schema.optional(AlloyDbConnectionProfile),
    provider: Schema.optional(Schema.String),
    cloudsql: Schema.optional(CloudSqlConnectionProfile),
    mysql: Schema.optional(MySqlConnectionProfile),
    sqlserver: Schema.optional(SqlServerConnectionProfile),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    postgresql: Schema.optional(PostgreSqlConnectionProfile),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConnectionProfile" });

export interface SqlServerSourceConfig {
  /** Optional. Maximum number of connections Database Migration Service will open to the source for full dump phase. */
  maxConcurrentFullDumpConnections?: number;
  /** Optional. Maximum number of connections Database Migration Service will open to the source for CDC phase. */
  maxConcurrentCdcConnections?: number;
  /** Optional. Whether to skip full dump or not. */
  skipFullDump?: boolean;
  /** Optional. The log sequence number (LSN) to start CDC data migration from. */
  cdcStartPosition?: string;
}

export const SqlServerSourceConfig: Schema.Schema<SqlServerSourceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxConcurrentFullDumpConnections: Schema.optional(Schema.Number),
    maxConcurrentCdcConnections: Schema.optional(Schema.Number),
    skipFullDump: Schema.optional(Schema.Boolean),
    cdcStartPosition: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlServerSourceConfig" });

export interface SqlServerToPostgresConfig {
  /** Optional. Configuration for SQL Server source. */
  sqlserverSourceConfig?: SqlServerSourceConfig;
  /** Optional. Configuration for Postgres destination. */
  postgresDestinationConfig?: PostgresDestinationConfig;
}

export const SqlServerToPostgresConfig: Schema.Schema<SqlServerToPostgresConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sqlserverSourceConfig: Schema.optional(SqlServerSourceConfig),
    postgresDestinationConfig: Schema.optional(PostgresDestinationConfig),
  }).annotate({ identifier: "SqlServerToPostgresConfig" });

export interface VpcPeeringConnectivity {
  /** The name of the VPC network to peer with the Cloud SQL private network. */
  vpc?: string;
}

export const VpcPeeringConnectivity: Schema.Schema<VpcPeeringConnectivity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vpc: Schema.optional(Schema.String),
  }).annotate({ identifier: "VpcPeeringConnectivity" });

export interface SqlServerDagConfig {
  /** Required. The name of the source availability group. Only used by DAG migrations. */
  sourceAg?: string;
  /** Required. The name of the linked server that points to the source SQL Server instance. Only used by DAG migrations. */
  linkedServer?: string;
}

export const SqlServerDagConfig: Schema.Schema<SqlServerDagConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceAg: Schema.optional(Schema.String),
    linkedServer: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlServerDagConfig" });

export interface SqlServerHomogeneousMigrationJobConfig {
  /** Optional. Enable differential backups. */
  useDiffBackup?: boolean;
  /** Required. Backup details per database in Cloud Storage. */
  databaseBackups?: ReadonlyArray<SqlServerDatabaseBackup>;
  /** Optional. Configuration for distributed availability group (DAG) for the SQL Server homogeneous migration. */
  dagConfig?: SqlServerDagConfig;
  /** Required. Pattern that describes the default backup naming strategy. The specified pattern should ensure lexicographical order of backups. The pattern must define one of the following capture group sets: Capture group set #1 yy/yyyy - year, 2 or 4 digits mm - month number, 1-12 dd - day of month, 1-31 hh - hour of day, 00-23 mi - minutes, 00-59 ss - seconds, 00-59 Example: For backup file TestDB_20230802_155400.trn, use pattern: (?.*)_backup_(?\d{4})(?\d{2})(?\d{2})_(?\d{2})(?\d{2})(?\d{2}).trn Capture group set #2 timestamp - unix timestamp Example: For backup file TestDB.1691448254.trn, use pattern: (?.*)\.(?\d*).trn or (?.*)\.(?\d*).trn */
  backupFilePattern?: string;
  /** Optional. Promote databases when ready. */
  promoteWhenReady?: boolean;
}

export const SqlServerHomogeneousMigrationJobConfig: Schema.Schema<SqlServerHomogeneousMigrationJobConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    useDiffBackup: Schema.optional(Schema.Boolean),
    databaseBackups: Schema.optional(Schema.Array(SqlServerDatabaseBackup)),
    dagConfig: Schema.optional(SqlServerDagConfig),
    backupFilePattern: Schema.optional(Schema.String),
    promoteWhenReady: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SqlServerHomogeneousMigrationJobConfig" });

export interface DatabaseType {
  /** The database provider. */
  provider?:
    | "DATABASE_PROVIDER_UNSPECIFIED"
    | "CLOUDSQL"
    | "RDS"
    | "AURORA"
    | "ALLOYDB"
    | "AZURE_DATABASE"
    | (string & {});
  /** The database engine. */
  engine?:
    | "DATABASE_ENGINE_UNSPECIFIED"
    | "MYSQL"
    | "POSTGRESQL"
    | "SQLSERVER"
    | "ORACLE"
    | (string & {});
}

export const DatabaseType: Schema.Schema<DatabaseType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.optional(Schema.String),
    engine: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatabaseType" });

export interface PerformanceConfig {
  /** Initial dump parallelism level. */
  dumpParallelLevel?:
    | "DUMP_PARALLEL_LEVEL_UNSPECIFIED"
    | "MIN"
    | "OPTIMAL"
    | "MAX"
    | (string & {});
}

export const PerformanceConfig: Schema.Schema<PerformanceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dumpParallelLevel: Schema.optional(Schema.String),
  }).annotate({ identifier: "PerformanceConfig" });

export interface PostgresSourceConfig {
  /** Optional. Whether to skip full dump or not. */
  skipFullDump?: boolean;
}

export const PostgresSourceConfig: Schema.Schema<PostgresSourceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    skipFullDump: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PostgresSourceConfig" });

export interface SqlServerDestinationConfig {
  /** Optional. Maximum number of connections Database Migration Service will open to the destination for data migration. */
  maxConcurrentConnections?: number;
  /** Optional. Timeout for data migration transactions. */
  transactionTimeout?: string;
}

export const SqlServerDestinationConfig: Schema.Schema<SqlServerDestinationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxConcurrentConnections: Schema.optional(Schema.Number),
    transactionTimeout: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlServerDestinationConfig" });

export interface PostgresToSqlServerConfig {
  /** Optional. Configuration for PostgreSQL source. */
  postgresSourceConfig?: PostgresSourceConfig;
  /** Optional. Configuration for SQL Server destination. */
  sqlserverDestinationConfig?: SqlServerDestinationConfig;
}

export const PostgresToSqlServerConfig: Schema.Schema<PostgresToSqlServerConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    postgresSourceConfig: Schema.optional(PostgresSourceConfig),
    sqlserverDestinationConfig: Schema.optional(SqlServerDestinationConfig),
  }).annotate({ identifier: "PostgresToSqlServerConfig" });

export interface DumpFlag {
  /** The name of the flag */
  name?: string;
  /** The value of the flag. */
  value?: string;
}

export const DumpFlag: Schema.Schema<DumpFlag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "DumpFlag" });

export interface DumpFlags {
  /** The flags for the initial dump. */
  dumpFlags?: ReadonlyArray<DumpFlag>;
}

export const DumpFlags: Schema.Schema<DumpFlags> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dumpFlags: Schema.optional(Schema.Array(DumpFlag)),
  }).annotate({ identifier: "DumpFlags" });

export interface MigrationJobObjectsConfig {
  /** The list of the migration job objects. */
  sourceObjectsConfig?: SourceObjectsConfig;
}

export const MigrationJobObjectsConfig: Schema.Schema<MigrationJobObjectsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceObjectsConfig: Schema.optional(SourceObjectsConfig),
  }).annotate({ identifier: "MigrationJobObjectsConfig" });

export interface ConversionWorkspaceInfo {
  /** The resource name (URI) of the conversion workspace. */
  name?: string;
  /** The commit ID of the conversion workspace. */
  commitId?: string;
}

export const ConversionWorkspaceInfo: Schema.Schema<ConversionWorkspaceInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    commitId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConversionWorkspaceInfo" });

export interface PostgresHomogeneousConfig {
  /** Optional. Maximum number of additional subscriptions to use for the migration job. */
  maxAdditionalSubscriptions?: number;
  /** Required. Whether the migration is native logical. */
  isNativeLogical?: boolean;
}

export const PostgresHomogeneousConfig: Schema.Schema<PostgresHomogeneousConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxAdditionalSubscriptions: Schema.optional(Schema.Number),
    isNativeLogical: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PostgresHomogeneousConfig" });

export interface MigrationJob {
  /** Output only. The error details in case of state FAILED. */
  error?: Status;
  /** Configuration for heterogeneous **SQL Server to Cloud SQL for PostgreSQL** migrations. */
  sqlserverToPostgresConfig?: SqlServerToPostgresConfig;
  /** Configuration for heterogeneous **Oracle to Cloud SQL for PostgreSQL** and **Oracle to AlloyDB for PostgreSQL** migrations. */
  oracleToPostgresConfig?: OracleToPostgresConfig;
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Output only. If the migration job is completed, the time when it was completed. */
  endTime?: string;
  /** The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]). This field and the "dump_flags" field are mutually exclusive. */
  dumpPath?: string;
  /** Output only. The duration of the migration job (in seconds). A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". */
  duration?: string;
  /** Optional. The type of the data dump. Supported for MySQL to CloudSQL for MySQL migrations only. */
  dumpType?: "DUMP_TYPE_UNSPECIFIED" | "LOGICAL" | "PHYSICAL" | (string & {});
  /** This field can be used to select the entities to migrate as part of the migration job. It uses AIP-160 notation to select a subset of the entities configured on the associated conversion-workspace. This field should not be set on migration-jobs that are not associated with a conversion workspace. */
  filter?: string;
  /** The details of the VPC network that the source database is located in. */
  vpcPeeringConnectivity?: VpcPeeringConnectivity;
  /** Required. The migration job type. */
  type?: "TYPE_UNSPECIFIED" | "ONE_TIME" | "CONTINUOUS" | (string & {});
  /** Optional. Configuration for SQL Server homogeneous migration. */
  sqlserverHomogeneousMigrationJobConfig?: SqlServerHomogeneousMigrationJobConfig;
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** Output only. The timestamp when the migration job resource was created. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". */
  createTime?: string;
  /** The database engine type and provider of the destination. */
  destinationDatabase?: DatabaseType;
  /** Optional. Data dump parallelism settings used by the migration. */
  performanceConfig?: PerformanceConfig;
  /** Output only. Migration job mode. Migration jobs can be standard forward jobs or failback migration jobs. */
  purpose?: "PURPOSE_UNSPECIFIED" | "MIGRATE" | "FAILBACK" | (string & {});
  /** Optional. A failback replication pointer to the resource name (URI) of the original migration job. */
  originalMigrationName?: string;
  /** Output only. The current migration job phase. */
  phase?:
    | "PHASE_UNSPECIFIED"
    | "FULL_DUMP"
    | "CDC"
    | "PROMOTE_IN_PROGRESS"
    | "WAITING_FOR_SOURCE_WRITES_TO_STOP"
    | "PREPARING_THE_DUMP"
    | "READY_FOR_PROMOTE"
    | (string & {});
  /** The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. */
  name?: string;
  /** Configuration for heterogeneous failback migrations from **PostgreSQL to SQL Server**. */
  postgresToSqlserverConfig?: PostgresToSqlServerConfig;
  /** The CMEK (customer-managed encryption key) fully qualified key name used for the migration job. This field supports all migration jobs types except for: * Mysql to Mysql (use the cmek field in the cloudsql connection profile instead). * PostrgeSQL to PostgreSQL (use the cmek field in the cloudsql connection profile instead). * PostgreSQL to AlloyDB (use the kms_key_name field in the alloydb connection profile instead). Each Cloud CMEK key has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME] */
  cmekKeyName?: string;
  /** static ip connectivity data (default, no additional details needed). */
  staticIpConnectivity?: StaticIpConnectivity;
  /** Required. The resource name (URI) of the source connection profile. */
  source?: string;
  /** Output only. The timestamp when the migration job resource was last updated. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". */
  updateTime?: string;
  /** The initial dump flags. This field and the "dump_path" field are mutually exclusive. */
  dumpFlags?: DumpFlags;
  /** Optional. The objects that need to be migrated. */
  objectsConfig?: MigrationJobObjectsConfig;
  /** The current migration job state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "MAINTENANCE"
    | "DRAFT"
    | "CREATING"
    | "NOT_STARTED"
    | "RUNNING"
    | "FAILED"
    | "COMPLETED"
    | "DELETING"
    | "STOPPING"
    | "STOPPED"
    | "DELETED"
    | "UPDATING"
    | "STARTING"
    | "RESTARTING"
    | "RESUMING"
    | (string & {});
  /** Required. The resource name (URI) of the destination connection profile. */
  destination?: string;
  /** The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`. */
  labels?: Record<string, string>;
  /** The migration job display name. */
  displayName?: string;
  /** The conversion workspace used by the migration. */
  conversionWorkspace?: ConversionWorkspaceInfo;
  /** Optional. Configuration for PostgreSQL homogeneous migration. */
  postgresHomogeneousConfig?: PostgresHomogeneousConfig;
  /** The details needed to communicate to the source over Reverse SSH tunnel connectivity. */
  reverseSshConnectivity?: ReverseSshConnectivity;
  /** The database engine type and provider of the source. */
  sourceDatabase?: DatabaseType;
}

export const MigrationJob: Schema.Schema<MigrationJob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(Status),
    sqlserverToPostgresConfig: Schema.optional(SqlServerToPostgresConfig),
    oracleToPostgresConfig: Schema.optional(OracleToPostgresConfig),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    endTime: Schema.optional(Schema.String),
    dumpPath: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
    dumpType: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    vpcPeeringConnectivity: Schema.optional(VpcPeeringConnectivity),
    type: Schema.optional(Schema.String),
    sqlserverHomogeneousMigrationJobConfig: Schema.optional(
      SqlServerHomogeneousMigrationJobConfig,
    ),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    destinationDatabase: Schema.optional(DatabaseType),
    performanceConfig: Schema.optional(PerformanceConfig),
    purpose: Schema.optional(Schema.String),
    originalMigrationName: Schema.optional(Schema.String),
    phase: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    postgresToSqlserverConfig: Schema.optional(PostgresToSqlServerConfig),
    cmekKeyName: Schema.optional(Schema.String),
    staticIpConnectivity: Schema.optional(StaticIpConnectivity),
    source: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    dumpFlags: Schema.optional(DumpFlags),
    objectsConfig: Schema.optional(MigrationJobObjectsConfig),
    state: Schema.optional(Schema.String),
    destination: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    displayName: Schema.optional(Schema.String),
    conversionWorkspace: Schema.optional(ConversionWorkspaceInfo),
    postgresHomogeneousConfig: Schema.optional(PostgresHomogeneousConfig),
    reverseSshConnectivity: Schema.optional(ReverseSshConnectivity),
    sourceDatabase: Schema.optional(DatabaseType),
  }).annotate({ identifier: "MigrationJob" });

export interface ListMigrationJobsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of migration jobs objects. */
  migrationJobs?: ReadonlyArray<MigrationJob>;
  /** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListMigrationJobsResponse: Schema.Schema<ListMigrationJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    migrationJobs: Schema.optional(Schema.Array(MigrationJob)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListMigrationJobsResponse" });

export interface PreconditionFailureViolation {
  /** A description of how the precondition failed. Developers can use this description to understand how to fix the failure. For example: "Terms of service not accepted". */
  description?: string;
  /** The type of PreconditionFailure. We recommend using a service-specific enum type to define the supported precondition violation subjects. For example, "TOS" for "Terms of Service violation". */
  type?: string;
  /** The subject, relative to the type, that failed. For example, "google.com/cloud" relative to the "TOS" type would indicate which terms of service is being referenced. */
  subject?: string;
}

export const PreconditionFailureViolation: Schema.Schema<PreconditionFailureViolation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    subject: Schema.optional(Schema.String),
  }).annotate({ identifier: "PreconditionFailureViolation" });

export interface DatabaseEngineInfo {
  /** Required. Engine type. */
  engine?:
    | "DATABASE_ENGINE_UNSPECIFIED"
    | "MYSQL"
    | "POSTGRESQL"
    | "SQLSERVER"
    | "ORACLE"
    | (string & {});
  /** Required. Engine version, for example "12.c.1". */
  version?: string;
}

export const DatabaseEngineInfo: Schema.Schema<DatabaseEngineInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    engine: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatabaseEngineInfo" });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Schema<TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface SshScript {
  /** The ssh configuration script. */
  script?: string;
}

export const SshScript: Schema.Schema<SshScript> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    script: Schema.optional(Schema.String),
  }).annotate({ identifier: "SshScript" });

export interface ColumnEntity {
  /** Column length - e.g. varchar (50). */
  length?: string;
  /** Default value of the column. */
  defaultValue?: string;
  /** If the column is array, of which length. */
  arrayLength?: number;
  /** Collation override - instead of table level collation. */
  collation?: string;
  /** Specifies the list of values allowed in the column. Only used for set data type. */
  setValues?: ReadonlyArray<string>;
  /** Column scale - when relevant. */
  scale?: number;
  /** Custom engine specific features. */
  customFeatures?: Record<string, unknown>;
  /** Column fractional second precision - used for timestamp based datatypes. */
  fractionalSecondsPrecision?: number;
  /** Is the column a UDT. */
  udt?: boolean;
  /** Charset override - instead of table level charset. */
  charset?: string;
  /** Column precision - when relevant. */
  precision?: number;
  /** Is the column a computed column. */
  computed?: boolean;
  /** Column order in the table. */
  ordinalPosition?: number;
  /** Column name. */
  name?: string;
  /** Comment associated with the column. */
  comment?: string;
  /** Column data type. */
  dataType?: string;
  /** Is the column nullable. */
  nullable?: boolean;
  /** Is the column of array type. */
  array?: boolean;
  /** Is the column auto-generated/identity. */
  autoGenerated?: boolean;
}

export const ColumnEntity: Schema.Schema<ColumnEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    length: Schema.optional(Schema.String),
    defaultValue: Schema.optional(Schema.String),
    arrayLength: Schema.optional(Schema.Number),
    collation: Schema.optional(Schema.String),
    setValues: Schema.optional(Schema.Array(Schema.String)),
    scale: Schema.optional(Schema.Number),
    customFeatures: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    fractionalSecondsPrecision: Schema.optional(Schema.Number),
    udt: Schema.optional(Schema.Boolean),
    charset: Schema.optional(Schema.String),
    precision: Schema.optional(Schema.Number),
    computed: Schema.optional(Schema.Boolean),
    ordinalPosition: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    comment: Schema.optional(Schema.String),
    dataType: Schema.optional(Schema.String),
    nullable: Schema.optional(Schema.Boolean),
    array: Schema.optional(Schema.Boolean),
    autoGenerated: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ColumnEntity" });

export interface DebugInfo {
  /** The stack trace entries indicating where the error occurred. */
  stackEntries?: ReadonlyArray<string>;
  /** Additional debugging information provided by the server. */
  detail?: string;
}

export const DebugInfo: Schema.Schema<DebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stackEntries: Schema.optional(Schema.Array(Schema.String)),
    detail: Schema.optional(Schema.String),
  }).annotate({ identifier: "DebugInfo" });

export interface CommitConversionWorkspaceRequest {
  /** Optional. Optional name of the commit. */
  commitName?: string;
}

export const CommitConversionWorkspaceRequest: Schema.Schema<CommitConversionWorkspaceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    commitName: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommitConversionWorkspaceRequest" });

export interface FunctionEntity {
  /** The SQL code which creates the function. */
  sqlCode?: string;
  /** Custom engine specific features. */
  customFeatures?: Record<string, unknown>;
}

export const FunctionEntity: Schema.Schema<FunctionEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sqlCode: Schema.optional(Schema.String),
    customFeatures: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "FunctionEntity" });

export interface StoredProcedureEntity {
  /** Custom engine specific features. */
  customFeatures?: Record<string, unknown>;
  /** The SQL code which creates the stored procedure. */
  sqlCode?: string;
}

export const StoredProcedureEntity: Schema.Schema<StoredProcedureEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customFeatures: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    sqlCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "StoredProcedureEntity" });

export interface TriggerEntity {
  /** The name of the trigger. */
  name?: string;
  /** The DML, DDL, or database events that fire the trigger, for example INSERT, UPDATE. */
  triggeringEvents?: ReadonlyArray<string>;
  /** Indicates when the trigger fires, for example BEFORE STATEMENT, AFTER EACH ROW. */
  triggerType?: string;
  /** Custom engine specific features. */
  customFeatures?: Record<string, unknown>;
  /** The SQL code which creates the trigger. */
  sqlCode?: string;
}

export const TriggerEntity: Schema.Schema<TriggerEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    triggeringEvents: Schema.optional(Schema.Array(Schema.String)),
    triggerType: Schema.optional(Schema.String),
    customFeatures: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    sqlCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "TriggerEntity" });

export interface TableEntity {
  /** Custom engine specific features. */
  customFeatures?: Record<string, unknown>;
  /** Table indices. */
  indices?: ReadonlyArray<IndexEntity>;
  /** Table triggers. */
  triggers?: ReadonlyArray<TriggerEntity>;
  /** Table columns. */
  columns?: ReadonlyArray<ColumnEntity>;
  /** Comment associated with the table. */
  comment?: string;
  /** Table constraints. */
  constraints?: ReadonlyArray<ConstraintEntity>;
}

export const TableEntity: Schema.Schema<TableEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customFeatures: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    indices: Schema.optional(Schema.Array(IndexEntity)),
    triggers: Schema.optional(Schema.Array(TriggerEntity)),
    columns: Schema.optional(Schema.Array(ColumnEntity)),
    comment: Schema.optional(Schema.String),
    constraints: Schema.optional(Schema.Array(ConstraintEntity)),
  }).annotate({ identifier: "TableEntity" });

export interface MaterializedViewEntity {
  /** Custom engine specific features. */
  customFeatures?: Record<string, unknown>;
  /** View indices. */
  indices?: ReadonlyArray<IndexEntity>;
  /** The SQL code which creates the view. */
  sqlCode?: string;
}

export const MaterializedViewEntity: Schema.Schema<MaterializedViewEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customFeatures: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    indices: Schema.optional(Schema.Array(IndexEntity)),
    sqlCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "MaterializedViewEntity" });

export interface PackageEntity {
  /** The SQL code which creates the package. */
  packageSqlCode?: string;
  /** Custom engine specific features. */
  customFeatures?: Record<string, unknown>;
  /** The SQL code which creates the package body. If the package specification has cursors or subprograms, then the package body is mandatory. */
  packageBody?: string;
}

export const PackageEntity: Schema.Schema<PackageEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageSqlCode: Schema.optional(Schema.String),
    customFeatures: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    packageBody: Schema.optional(Schema.String),
  }).annotate({ identifier: "PackageEntity" });

export interface SchemaEntity {
  /** Custom engine specific features. */
  customFeatures?: Record<string, unknown>;
}

export const SchemaEntity: Schema.Schema<SchemaEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customFeatures: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "SchemaEntity" });

export interface EntityIssue {
  /** Severity of the issue */
  severity?:
    | "ISSUE_SEVERITY_UNSPECIFIED"
    | "ISSUE_SEVERITY_INFO"
    | "ISSUE_SEVERITY_WARNING"
    | "ISSUE_SEVERITY_ERROR"
    | (string & {});
  /** Issue detailed message */
  message?: string;
  /** The ddl which caused the issue, if relevant. */
  ddl?: string;
  /** The position of the issue found, if relevant. */
  position?: Position;
  /** The type of the issue. */
  type?:
    | "ISSUE_TYPE_UNSPECIFIED"
    | "ISSUE_TYPE_DDL"
    | "ISSUE_TYPE_APPLY"
    | "ISSUE_TYPE_CONVERT"
    | (string & {});
  /** Error/Warning code */
  code?: string;
  /** The entity type (if the DDL is for a sub entity). */
  entityType?:
    | "DATABASE_ENTITY_TYPE_UNSPECIFIED"
    | "DATABASE_ENTITY_TYPE_SCHEMA"
    | "DATABASE_ENTITY_TYPE_TABLE"
    | "DATABASE_ENTITY_TYPE_COLUMN"
    | "DATABASE_ENTITY_TYPE_CONSTRAINT"
    | "DATABASE_ENTITY_TYPE_INDEX"
    | "DATABASE_ENTITY_TYPE_TRIGGER"
    | "DATABASE_ENTITY_TYPE_VIEW"
    | "DATABASE_ENTITY_TYPE_SEQUENCE"
    | "DATABASE_ENTITY_TYPE_STORED_PROCEDURE"
    | "DATABASE_ENTITY_TYPE_FUNCTION"
    | "DATABASE_ENTITY_TYPE_SYNONYM"
    | "DATABASE_ENTITY_TYPE_DATABASE_PACKAGE"
    | "DATABASE_ENTITY_TYPE_UDT"
    | "DATABASE_ENTITY_TYPE_MATERIALIZED_VIEW"
    | "DATABASE_ENTITY_TYPE_DATABASE"
    | (string & {});
  /** Unique Issue ID. */
  id?: string;
}

export const EntityIssue: Schema.Schema<EntityIssue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    severity: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    ddl: Schema.optional(Schema.String),
    position: Schema.optional(Position),
    type: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    entityType: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "EntityIssue" });

export interface EntityMappingLogEntry {
  /** Rule revision ID. */
  ruleRevisionId?: string;
  /** Comment. */
  mappingComment?: string;
  /** Which rule caused this log entry. */
  ruleId?: string;
}

export const EntityMappingLogEntry: Schema.Schema<EntityMappingLogEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ruleRevisionId: Schema.optional(Schema.String),
    mappingComment: Schema.optional(Schema.String),
    ruleId: Schema.optional(Schema.String),
  }).annotate({ identifier: "EntityMappingLogEntry" });

export interface EntityMapping {
  /** Type of draft entity. */
  draftType?:
    | "DATABASE_ENTITY_TYPE_UNSPECIFIED"
    | "DATABASE_ENTITY_TYPE_SCHEMA"
    | "DATABASE_ENTITY_TYPE_TABLE"
    | "DATABASE_ENTITY_TYPE_COLUMN"
    | "DATABASE_ENTITY_TYPE_CONSTRAINT"
    | "DATABASE_ENTITY_TYPE_INDEX"
    | "DATABASE_ENTITY_TYPE_TRIGGER"
    | "DATABASE_ENTITY_TYPE_VIEW"
    | "DATABASE_ENTITY_TYPE_SEQUENCE"
    | "DATABASE_ENTITY_TYPE_STORED_PROCEDURE"
    | "DATABASE_ENTITY_TYPE_FUNCTION"
    | "DATABASE_ENTITY_TYPE_SYNONYM"
    | "DATABASE_ENTITY_TYPE_DATABASE_PACKAGE"
    | "DATABASE_ENTITY_TYPE_UDT"
    | "DATABASE_ENTITY_TYPE_MATERIALIZED_VIEW"
    | "DATABASE_ENTITY_TYPE_DATABASE"
    | (string & {});
  /** Entity mapping log entries. Multiple rules can be effective and contribute changes to a converted entity, such as a rule can handle the entity name, another rule can handle an entity type. In addition, rules which did not change the entity are also logged along with the reason preventing them to do so. */
  mappingLog?: ReadonlyArray<EntityMappingLogEntry>;
  /** Source entity full name. The source entity can also be a column, index or constraint using the same naming notation schema.table.column. */
  sourceEntity?: string;
  /** Target entity full name. The draft entity can also include a column, index or constraint using the same naming notation schema.table.column. */
  draftEntity?: string;
  /** Type of source entity. */
  sourceType?:
    | "DATABASE_ENTITY_TYPE_UNSPECIFIED"
    | "DATABASE_ENTITY_TYPE_SCHEMA"
    | "DATABASE_ENTITY_TYPE_TABLE"
    | "DATABASE_ENTITY_TYPE_COLUMN"
    | "DATABASE_ENTITY_TYPE_CONSTRAINT"
    | "DATABASE_ENTITY_TYPE_INDEX"
    | "DATABASE_ENTITY_TYPE_TRIGGER"
    | "DATABASE_ENTITY_TYPE_VIEW"
    | "DATABASE_ENTITY_TYPE_SEQUENCE"
    | "DATABASE_ENTITY_TYPE_STORED_PROCEDURE"
    | "DATABASE_ENTITY_TYPE_FUNCTION"
    | "DATABASE_ENTITY_TYPE_SYNONYM"
    | "DATABASE_ENTITY_TYPE_DATABASE_PACKAGE"
    | "DATABASE_ENTITY_TYPE_UDT"
    | "DATABASE_ENTITY_TYPE_MATERIALIZED_VIEW"
    | "DATABASE_ENTITY_TYPE_DATABASE"
    | (string & {});
}

export const EntityMapping: Schema.Schema<EntityMapping> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    draftType: Schema.optional(Schema.String),
    mappingLog: Schema.optional(Schema.Array(EntityMappingLogEntry)),
    sourceEntity: Schema.optional(Schema.String),
    draftEntity: Schema.optional(Schema.String),
    sourceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "EntityMapping" });

export interface DatabaseInstanceEntity {
  /** Custom engine specific features. */
  customFeatures?: Record<string, unknown>;
}

export const DatabaseInstanceEntity: Schema.Schema<DatabaseInstanceEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customFeatures: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "DatabaseInstanceEntity" });

export interface SynonymEntity {
  /** The type of the entity for which the synonym is being created (usually a table or a sequence). */
  sourceType?:
    | "DATABASE_ENTITY_TYPE_UNSPECIFIED"
    | "DATABASE_ENTITY_TYPE_SCHEMA"
    | "DATABASE_ENTITY_TYPE_TABLE"
    | "DATABASE_ENTITY_TYPE_COLUMN"
    | "DATABASE_ENTITY_TYPE_CONSTRAINT"
    | "DATABASE_ENTITY_TYPE_INDEX"
    | "DATABASE_ENTITY_TYPE_TRIGGER"
    | "DATABASE_ENTITY_TYPE_VIEW"
    | "DATABASE_ENTITY_TYPE_SEQUENCE"
    | "DATABASE_ENTITY_TYPE_STORED_PROCEDURE"
    | "DATABASE_ENTITY_TYPE_FUNCTION"
    | "DATABASE_ENTITY_TYPE_SYNONYM"
    | "DATABASE_ENTITY_TYPE_DATABASE_PACKAGE"
    | "DATABASE_ENTITY_TYPE_UDT"
    | "DATABASE_ENTITY_TYPE_MATERIALIZED_VIEW"
    | "DATABASE_ENTITY_TYPE_DATABASE"
    | (string & {});
  /** Custom engine specific features. */
  customFeatures?: Record<string, unknown>;
  /** The name of the entity for which the synonym is being created (the source). */
  sourceEntity?: string;
}

export const SynonymEntity: Schema.Schema<SynonymEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceType: Schema.optional(Schema.String),
    customFeatures: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    sourceEntity: Schema.optional(Schema.String),
  }).annotate({ identifier: "SynonymEntity" });

export interface DatabaseEntity {
  /** Stored procedure. */
  storedProcedure?: StoredProcedureEntity;
  /** Sequence. */
  sequence?: SequenceEntity;
  /** Table. */
  table?: TableEntity;
  /** Materialized view. */
  materializedView?: MaterializedViewEntity;
  /** The type of tree the entity belongs to. */
  tree?:
    | "TREE_TYPE_UNSPECIFIED"
    | "SOURCE"
    | "DRAFT"
    | "DESTINATION"
    | (string & {});
  /** Package. */
  databasePackage?: PackageEntity;
  /** Details about the entity DDL script. Multiple DDL scripts are provided for child entities such as a table entity will have one DDL for the table with additional DDLs for each index, constraint and such. */
  entityDdl?: ReadonlyArray<EntityDdl>;
  /** Schema. */
  schema?: SchemaEntity;
  /** Details about the various issues found for the entity. */
  issues?: ReadonlyArray<EntityIssue>;
  /** Function. */
  databaseFunction?: FunctionEntity;
  /** Details about entity mappings. For source tree entities, this holds the draft entities which were generated by the mapping rules. For draft tree entities, this holds the source entities which were converted to form the draft entity. Destination entities will have no mapping details. */
  mappings?: ReadonlyArray<EntityMapping>;
  /** Database. */
  database?: DatabaseInstanceEntity;
  /** The short name (e.g. table name) of the entity. */
  shortName?: string;
  /** UDT. */
  udt?: UDTEntity;
  /** Synonym. */
  synonym?: SynonymEntity;
  /** The type of the database entity (table, view, index, ...). */
  entityType?:
    | "DATABASE_ENTITY_TYPE_UNSPECIFIED"
    | "DATABASE_ENTITY_TYPE_SCHEMA"
    | "DATABASE_ENTITY_TYPE_TABLE"
    | "DATABASE_ENTITY_TYPE_COLUMN"
    | "DATABASE_ENTITY_TYPE_CONSTRAINT"
    | "DATABASE_ENTITY_TYPE_INDEX"
    | "DATABASE_ENTITY_TYPE_TRIGGER"
    | "DATABASE_ENTITY_TYPE_VIEW"
    | "DATABASE_ENTITY_TYPE_SEQUENCE"
    | "DATABASE_ENTITY_TYPE_STORED_PROCEDURE"
    | "DATABASE_ENTITY_TYPE_FUNCTION"
    | "DATABASE_ENTITY_TYPE_SYNONYM"
    | "DATABASE_ENTITY_TYPE_DATABASE_PACKAGE"
    | "DATABASE_ENTITY_TYPE_UDT"
    | "DATABASE_ENTITY_TYPE_MATERIALIZED_VIEW"
    | "DATABASE_ENTITY_TYPE_DATABASE"
    | (string & {});
  /** The full name of the parent entity (e.g. schema name). */
  parentEntity?: string;
  /** View. */
  view?: ViewEntity;
}

export const DatabaseEntity: Schema.Schema<DatabaseEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storedProcedure: Schema.optional(StoredProcedureEntity),
    sequence: Schema.optional(SequenceEntity),
    table: Schema.optional(TableEntity),
    materializedView: Schema.optional(MaterializedViewEntity),
    tree: Schema.optional(Schema.String),
    databasePackage: Schema.optional(PackageEntity),
    entityDdl: Schema.optional(Schema.Array(EntityDdl)),
    schema: Schema.optional(SchemaEntity),
    issues: Schema.optional(Schema.Array(EntityIssue)),
    databaseFunction: Schema.optional(FunctionEntity),
    mappings: Schema.optional(Schema.Array(EntityMapping)),
    database: Schema.optional(DatabaseInstanceEntity),
    shortName: Schema.optional(Schema.String),
    udt: Schema.optional(UDTEntity),
    synonym: Schema.optional(SynonymEntity),
    entityType: Schema.optional(Schema.String),
    parentEntity: Schema.optional(Schema.String),
    view: Schema.optional(ViewEntity),
  }).annotate({ identifier: "DatabaseEntity" });

export interface VpcPeeringConfig {
  /** Required. Fully qualified name of the VPC that Database Migration Service will peer to. */
  vpcName?: string;
  /** Required. A free subnet for peering. (CIDR of /29) */
  subnet?: string;
}

export const VpcPeeringConfig: Schema.Schema<VpcPeeringConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vpcName: Schema.optional(Schema.String),
    subnet: Schema.optional(Schema.String),
  }).annotate({ identifier: "VpcPeeringConfig" });

export interface PrivateConnection {
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** The name of the resource. */
  name?: string;
  /** Output only. The state of the private connection. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "CREATED"
    | "FAILED"
    | "DELETING"
    | "FAILED_TO_DELETE"
    | "DELETED"
    | (string & {});
  /** Output only. The create time of the resource. */
  createTime?: string;
  /** Output only. The last update time of the resource. */
  updateTime?: string;
  /** The resource labels for private connections to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" }`. */
  labels?: Record<string, string>;
  /** Output only. The error details in case of state FAILED. */
  error?: Status;
  /** VPC peering configuration. */
  vpcPeeringConfig?: VpcPeeringConfig;
  /** PSC Interface configuration. */
  pscInterfaceConfig?: PscInterfaceConfig;
  /** The private connection display name. */
  displayName?: string;
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
}

export const PrivateConnection: Schema.Schema<PrivateConnection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    satisfiesPzi: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    error: Schema.optional(Status),
    vpcPeeringConfig: Schema.optional(VpcPeeringConfig),
    pscInterfaceConfig: Schema.optional(PscInterfaceConfig),
    displayName: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PrivateConnection" });

export interface TcpProxyScript {
  /** The TCP Proxy configuration script. */
  script?: string;
}

export const TcpProxyScript: Schema.Schema<TcpProxyScript> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    script: Schema.optional(Schema.String),
  }).annotate({ identifier: "TcpProxyScript" });

export interface PreconditionFailure {
  /** Describes all precondition violations. */
  violations?: ReadonlyArray<PreconditionFailureViolation>;
}

export const PreconditionFailure: Schema.Schema<PreconditionFailure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    violations: Schema.optional(Schema.Array(PreconditionFailureViolation)),
  }).annotate({ identifier: "PreconditionFailure" });

export interface ImportRulesJobDetails {
  /** Output only. File names used for the import rules job. */
  files?: ReadonlyArray<string>;
  /** Output only. The requested file format. */
  fileFormat?:
    | "IMPORT_RULES_FILE_FORMAT_UNSPECIFIED"
    | "IMPORT_RULES_FILE_FORMAT_HARBOUR_BRIDGE_SESSION_FILE"
    | "IMPORT_RULES_FILE_FORMAT_ORATOPG_CONFIG_FILE"
    | (string & {});
}

export const ImportRulesJobDetails: Schema.Schema<ImportRulesJobDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    files: Schema.optional(Schema.Array(Schema.String)),
    fileFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImportRulesJobDetails" });

export interface ApplyJobDetails {
  /** Output only. AIP-160 based filter used to specify the entities to apply */
  filter?: string;
  /** Output only. The connection profile which was used for the apply job. */
  connectionProfile?: string;
}

export const ApplyJobDetails: Schema.Schema<ApplyJobDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
    connectionProfile: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApplyJobDetails" });

export interface LookupMigrationJobObjectRequest {
  /** Required. The source object identifier which maps to the migration job object. */
  sourceObjectIdentifier?: SourceObjectIdentifier;
}

export const LookupMigrationJobObjectRequest: Schema.Schema<LookupMigrationJobObjectRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceObjectIdentifier: Schema.optional(SourceObjectIdentifier),
  }).annotate({ identifier: "LookupMigrationJobObjectRequest" });

export interface ConvertConversionWorkspaceRequest {
  /** Optional. Specifies whether the conversion workspace is to be committed automatically after the conversion. */
  autoCommit?: boolean;
  /** Optional. Automatically convert the full entity path for each entity specified by the filter. For example, if the filter specifies a table, that table schema (and database if there is one) will also be converted. */
  convertFullPath?: boolean;
  /** Optional. Filter the entities to convert. Leaving this field empty will convert all of the entities. Supports Google AIP-160 style filtering. */
  filter?: string;
}

export const ConvertConversionWorkspaceRequest: Schema.Schema<ConvertConversionWorkspaceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autoCommit: Schema.optional(Schema.Boolean),
    convertFullPath: Schema.optional(Schema.Boolean),
    filter: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConvertConversionWorkspaceRequest" });

export interface Datamigration_BadRequest {
  /** Describes all violations in a client request. */
  fieldViolations?: ReadonlyArray<FieldViolation>;
}

export const Datamigration_BadRequest: Schema.Schema<Datamigration_BadRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldViolations: Schema.optional(Schema.Array(FieldViolation)),
  }).annotate({ identifier: "Datamigration_BadRequest" });

export interface ListConnectionProfilesResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The response list of connection profiles. */
  connectionProfiles?: ReadonlyArray<ConnectionProfile>;
  /** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListConnectionProfilesResponse: Schema.Schema<ListConnectionProfilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    connectionProfiles: Schema.optional(Schema.Array(ConnectionProfile)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListConnectionProfilesResponse" });

export interface DemoteDestinationRequest {}

export const DemoteDestinationRequest: Schema.Schema<DemoteDestinationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DemoteDestinationRequest",
  });

export interface ListPrivateConnectionsResponse {
  /** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** List of private connections. */
  privateConnections?: ReadonlyArray<PrivateConnection>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListPrivateConnectionsResponse: Schema.Schema<ListPrivateConnectionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    privateConnections: Schema.optional(Schema.Array(PrivateConnection)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListPrivateConnectionsResponse" });

export interface VerifyMigrationJobRequest {
  /** Optional. Field mask is used to specify the changed fields to be verified. It will not update the migration job. */
  updateMask?: string;
  /** Optional. The changed migration job parameters to verify. It will not update the migration job. */
  migrationJob?: MigrationJob;
}

export const VerifyMigrationJobRequest: Schema.Schema<VerifyMigrationJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String),
    migrationJob: Schema.optional(MigrationJob),
  }).annotate({ identifier: "VerifyMigrationJobRequest" });

export interface ConversionWorkspace {
  /** Optional. The display name for the workspace. */
  displayName?: string;
  /** Output only. Whether the workspace has uncommitted changes (changes which were made after the workspace was committed). */
  hasUncommittedChanges?: boolean;
  /** Output only. The timestamp when the workspace was committed. */
  latestCommitTime?: string;
  /** Output only. The timestamp when the workspace resource was last updated. */
  updateTime?: string;
  /** Required. The source engine details. */
  source?: DatabaseEngineInfo;
  /** Output only. The timestamp when the workspace resource was created. */
  createTime?: string;
  /** Optional. The provider for the source database. */
  sourceProvider?:
    | "DATABASE_PROVIDER_UNSPECIFIED"
    | "CLOUDSQL"
    | "RDS"
    | "AURORA"
    | "ALLOYDB"
    | "AZURE_DATABASE"
    | (string & {});
  /** Full name of the workspace resource, in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}. */
  name?: string;
  /** Required. The destination engine details. */
  destination?: DatabaseEngineInfo;
  /** Output only. The latest commit ID. */
  latestCommitId?: string;
  /** Optional. A generic list of settings for the workspace. The settings are database pair dependant and can indicate default behavior for the mapping rules engine or turn on or off specific features. Such examples can be: convert_foreign_key_to_interleave=true, skip_triggers=false, ignore_non_table_synonyms=true */
  globalSettings?: Record<string, string>;
  /** Optional. The provider for the destination database. */
  destinationProvider?:
    | "DATABASE_PROVIDER_UNSPECIFIED"
    | "CLOUDSQL"
    | "RDS"
    | "AURORA"
    | "ALLOYDB"
    | "AZURE_DATABASE"
    | (string & {});
}

export const ConversionWorkspace: Schema.Schema<ConversionWorkspace> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    hasUncommittedChanges: Schema.optional(Schema.Boolean),
    latestCommitTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    source: Schema.optional(DatabaseEngineInfo),
    createTime: Schema.optional(Schema.String),
    sourceProvider: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    destination: Schema.optional(DatabaseEngineInfo),
    latestCommitId: Schema.optional(Schema.String),
    globalSettings: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    destinationProvider: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConversionWorkspace" });

export interface ListConversionWorkspacesResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of conversion workspace objects. */
  conversionWorkspaces?: ReadonlyArray<ConversionWorkspace>;
  /** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListConversionWorkspacesResponse: Schema.Schema<ListConversionWorkspacesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    conversionWorkspaces: Schema.optional(Schema.Array(ConversionWorkspace)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListConversionWorkspacesResponse" });

export interface DescribeConversionWorkspaceRevisionsResponse {
  /** The list of conversion workspace revisions. */
  revisions?: ReadonlyArray<ConversionWorkspace>;
}

export const DescribeConversionWorkspaceRevisionsResponse: Schema.Schema<DescribeConversionWorkspaceRevisionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    revisions: Schema.optional(Schema.Array(ConversionWorkspace)),
  }).annotate({ identifier: "DescribeConversionWorkspaceRevisionsResponse" });

export interface BackgroundJobLogEntry {
  /** Output only. Seed job details. */
  seedJobDetails?: SeedJobDetails;
  /** Output only. Import rules job details. */
  importRulesJobDetails?: ImportRulesJobDetails;
  /** The timestamp when the background job was finished. */
  finishTime?: string;
  /** Output only. Job completion comment, such as how many entities were seeded, how many warnings were found during conversion, and similar information. */
  completionComment?: string;
  /** The background job log entry ID. */
  id?: string;
  /** The type of job that was executed. */
  jobType?:
    | "BACKGROUND_JOB_TYPE_UNSPECIFIED"
    | "BACKGROUND_JOB_TYPE_SOURCE_SEED"
    | "BACKGROUND_JOB_TYPE_CONVERT"
    | "BACKGROUND_JOB_TYPE_APPLY_DESTINATION"
    | "BACKGROUND_JOB_TYPE_IMPORT_RULES_FILE"
    | (string & {});
  /** The timestamp when the background job was started. */
  startTime?: string;
  /** Output only. Job completion state, i.e. the final state after the job completed. */
  completionState?:
    | "JOB_COMPLETION_STATE_UNSPECIFIED"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  /** Output only. Whether the client requested the conversion workspace to be committed after a successful completion of the job. */
  requestAutocommit?: boolean;
  /** Output only. Convert job details. */
  convertJobDetails?: ConvertJobDetails;
  /** Output only. Apply job details. */
  applyJobDetails?: ApplyJobDetails;
}

export const BackgroundJobLogEntry: Schema.Schema<BackgroundJobLogEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    seedJobDetails: Schema.optional(SeedJobDetails),
    importRulesJobDetails: Schema.optional(ImportRulesJobDetails),
    finishTime: Schema.optional(Schema.String),
    completionComment: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    jobType: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    completionState: Schema.optional(Schema.String),
    requestAutocommit: Schema.optional(Schema.Boolean),
    convertJobDetails: Schema.optional(ConvertJobDetails),
    applyJobDetails: Schema.optional(ApplyJobDetails),
  }).annotate({ identifier: "BackgroundJobLogEntry" });

export interface PromoteMigrationJobRequest {
  /** Optional. The object filter to apply to the migration job. */
  objectsFilter?: MigrationJobObjectsConfig;
}

export const PromoteMigrationJobRequest: Schema.Schema<PromoteMigrationJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectsFilter: Schema.optional(MigrationJobObjectsConfig),
  }).annotate({ identifier: "PromoteMigrationJobRequest" });

export interface SearchBackgroundJobsResponse {
  /** The list of conversion workspace mapping rules. */
  jobs?: ReadonlyArray<BackgroundJobLogEntry>;
}

export const SearchBackgroundJobsResponse: Schema.Schema<SearchBackgroundJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobs: Schema.optional(Schema.Array(BackgroundJobLogEntry)),
  }).annotate({ identifier: "SearchBackgroundJobsResponse" });

export interface QuotaFailure {
  /** Describes all quota violations. */
  violations?: ReadonlyArray<QuotaFailureViolation>;
}

export const QuotaFailure: Schema.Schema<QuotaFailure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    violations: Schema.optional(Schema.Array(QuotaFailureViolation)),
  }).annotate({ identifier: "QuotaFailure" });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Schema<TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface RestartMigrationJobRequest {
  /** Optional. Restart the migration job without running prior configuration verification. Defaults to `false`. */
  skipValidation?: boolean;
  /** Optional. The object filter to apply to the migration job. */
  objectsFilter?: MigrationJobObjectsConfig;
  /** Optional. If true, only failed objects will be restarted. */
  restartFailedObjects?: boolean;
}

export const RestartMigrationJobRequest: Schema.Schema<RestartMigrationJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    skipValidation: Schema.optional(Schema.Boolean),
    objectsFilter: Schema.optional(MigrationJobObjectsConfig),
    restartFailedObjects: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "RestartMigrationJobRequest" });

export interface DescribeDatabaseEntitiesResponse {
  /** The list of database entities for the conversion workspace. */
  databaseEntities?: ReadonlyArray<DatabaseEntity>;
  /** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const DescribeDatabaseEntitiesResponse: Schema.Schema<DescribeDatabaseEntitiesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseEntities: Schema.optional(Schema.Array(DatabaseEntity)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "DescribeDatabaseEntitiesResponse" });

export interface ResumeMigrationJobRequest {
  /** Optional. Resume the migration job without running prior configuration verification. Defaults to `false`. */
  skipValidation?: boolean;
}

export const ResumeMigrationJobRequest: Schema.Schema<ResumeMigrationJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    skipValidation: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ResumeMigrationJobRequest" });

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
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
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

export interface FetchStaticIpsProjectsLocationsRequest {
  /** Required. The resource name for the location for which static IPs should be returned. Must be in the format `projects/* /locations/*`. */
  name: string;
  /** Optional. Maximum number of IPs to return. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `FetchStaticIps` call. */
  pageToken?: string;
}

export const FetchStaticIpsProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:fetchStaticIps" }),
    svc,
  ) as unknown as Schema.Schema<FetchStaticIpsProjectsLocationsRequest>;

export type FetchStaticIpsProjectsLocationsResponse = FetchStaticIpsResponse;
export const FetchStaticIpsProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchStaticIpsResponse;

export type FetchStaticIpsProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetches a set of static IP addresses that need to be allowlisted by the customer when using the static-IP connectivity method. */
export const fetchStaticIpsProjectsLocations: API.PaginatedOperationMethod<
  FetchStaticIpsProjectsLocationsRequest,
  FetchStaticIpsProjectsLocationsResponse,
  FetchStaticIpsProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: FetchStaticIpsProjectsLocationsRequest,
  output: FetchStaticIpsProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsMigrationJobsRequest {
  /** Required. Name of the migration job resource to get. */
  name: string;
}

export const GetProjectsLocationsMigrationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsMigrationJobsRequest>;

export type GetProjectsLocationsMigrationJobsResponse = MigrationJob;
export const GetProjectsLocationsMigrationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ MigrationJob;

export type GetProjectsLocationsMigrationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single migration job. */
export const getProjectsLocationsMigrationJobs: API.OperationMethod<
  GetProjectsLocationsMigrationJobsRequest,
  GetProjectsLocationsMigrationJobsResponse,
  GetProjectsLocationsMigrationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMigrationJobsRequest,
  output: GetProjectsLocationsMigrationJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GenerateTcpProxyScriptProjectsLocationsMigrationJobsRequest {
  /** Name of the migration job resource to generate the TCP Proxy script. */
  migrationJob: string;
  /** Request body */
  body?: GenerateTcpProxyScriptRequest;
}

export const GenerateTcpProxyScriptProjectsLocationsMigrationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    migrationJob: Schema.String.pipe(T.HttpPath("migrationJob")),
    body: Schema.optional(GenerateTcpProxyScriptRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+migrationJob}:generateTcpProxyScript",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateTcpProxyScriptProjectsLocationsMigrationJobsRequest>;

export type GenerateTcpProxyScriptProjectsLocationsMigrationJobsResponse =
  TcpProxyScript;
export const GenerateTcpProxyScriptProjectsLocationsMigrationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TcpProxyScript;

export type GenerateTcpProxyScriptProjectsLocationsMigrationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generate a TCP Proxy configuration script to configure a cloud-hosted VM running a TCP Proxy. */
export const generateTcpProxyScriptProjectsLocationsMigrationJobs: API.OperationMethod<
  GenerateTcpProxyScriptProjectsLocationsMigrationJobsRequest,
  GenerateTcpProxyScriptProjectsLocationsMigrationJobsResponse,
  GenerateTcpProxyScriptProjectsLocationsMigrationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateTcpProxyScriptProjectsLocationsMigrationJobsRequest,
  output: GenerateTcpProxyScriptProjectsLocationsMigrationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StopProjectsLocationsMigrationJobsRequest {
  /** Name of the migration job resource to stop. */
  name: string;
  /** Request body */
  body?: StopMigrationJobRequest;
}

export const StopProjectsLocationsMigrationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StopMigrationJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:stop", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<StopProjectsLocationsMigrationJobsRequest>;

export type StopProjectsLocationsMigrationJobsResponse = Operation;
export const StopProjectsLocationsMigrationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type StopProjectsLocationsMigrationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Stops a running migration job. */
export const stopProjectsLocationsMigrationJobs: API.OperationMethod<
  StopProjectsLocationsMigrationJobsRequest,
  StopProjectsLocationsMigrationJobsResponse,
  StopProjectsLocationsMigrationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StopProjectsLocationsMigrationJobsRequest,
  output: StopProjectsLocationsMigrationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsMigrationJobsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsMigrationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsMigrationJobsRequest>;

export type GetIamPolicyProjectsLocationsMigrationJobsResponse = Policy;
export const GetIamPolicyProjectsLocationsMigrationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsMigrationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsMigrationJobs: API.OperationMethod<
  GetIamPolicyProjectsLocationsMigrationJobsRequest,
  GetIamPolicyProjectsLocationsMigrationJobsResponse,
  GetIamPolicyProjectsLocationsMigrationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsMigrationJobsRequest,
  output: GetIamPolicyProjectsLocationsMigrationJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface RestartProjectsLocationsMigrationJobsRequest {
  /** Name of the migration job resource to restart. */
  name: string;
  /** Request body */
  body?: RestartMigrationJobRequest;
}

export const RestartProjectsLocationsMigrationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RestartMigrationJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:restart", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RestartProjectsLocationsMigrationJobsRequest>;

export type RestartProjectsLocationsMigrationJobsResponse = Operation;
export const RestartProjectsLocationsMigrationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RestartProjectsLocationsMigrationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch. */
export const restartProjectsLocationsMigrationJobs: API.OperationMethod<
  RestartProjectsLocationsMigrationJobsRequest,
  RestartProjectsLocationsMigrationJobsResponse,
  RestartProjectsLocationsMigrationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RestartProjectsLocationsMigrationJobsRequest,
  output: RestartProjectsLocationsMigrationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsMigrationJobsRequest {
  /** Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
  /** Required. Name of the migration job resource to delete. */
  name: string;
  /** Optional. The destination CloudSQL connection profile is always deleted with the migration job. In case of force delete, the destination CloudSQL replica database is also deleted. */
  force?: boolean;
}

export const DeleteProjectsLocationsMigrationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsMigrationJobsRequest>;

export type DeleteProjectsLocationsMigrationJobsResponse = Operation;
export const DeleteProjectsLocationsMigrationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsMigrationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single migration job. */
export const deleteProjectsLocationsMigrationJobs: API.OperationMethod<
  DeleteProjectsLocationsMigrationJobsRequest,
  DeleteProjectsLocationsMigrationJobsResponse,
  DeleteProjectsLocationsMigrationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsMigrationJobsRequest,
  output: DeleteProjectsLocationsMigrationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsMigrationJobsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsMigrationJobsRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsMigrationJobsRequest>;

export type SetIamPolicyProjectsLocationsMigrationJobsResponse = Policy;
export const SetIamPolicyProjectsLocationsMigrationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsMigrationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsMigrationJobs: API.OperationMethod<
  SetIamPolicyProjectsLocationsMigrationJobsRequest,
  SetIamPolicyProjectsLocationsMigrationJobsResponse,
  SetIamPolicyProjectsLocationsMigrationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsMigrationJobsRequest,
  output: SetIamPolicyProjectsLocationsMigrationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DemoteDestinationProjectsLocationsMigrationJobsRequest {
  /** Required. Name of the migration job resource to demote its destination. */
  name: string;
  /** Request body */
  body?: DemoteDestinationRequest;
}

export const DemoteDestinationProjectsLocationsMigrationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DemoteDestinationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:demoteDestination",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DemoteDestinationProjectsLocationsMigrationJobsRequest>;

export type DemoteDestinationProjectsLocationsMigrationJobsResponse = Operation;
export const DemoteDestinationProjectsLocationsMigrationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DemoteDestinationProjectsLocationsMigrationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Demotes the destination database to become a read replica of the source. This is applicable for the following migrations: 1. MySQL to Cloud SQL for MySQL 2. PostgreSQL to Cloud SQL for PostgreSQL 3. PostgreSQL to AlloyDB for PostgreSQL. */
export const demoteDestinationProjectsLocationsMigrationJobs: API.OperationMethod<
  DemoteDestinationProjectsLocationsMigrationJobsRequest,
  DemoteDestinationProjectsLocationsMigrationJobsResponse,
  DemoteDestinationProjectsLocationsMigrationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DemoteDestinationProjectsLocationsMigrationJobsRequest,
  output: DemoteDestinationProjectsLocationsMigrationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsMigrationJobsRequest {
  /** Required. The parent which owns this collection of migration jobs. */
  parent: string;
  /** Required. The ID of the instance to create. */
  migrationJobId?: string;
  /** Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
  /** Request body */
  body?: MigrationJob;
}

export const CreateProjectsLocationsMigrationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    migrationJobId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("migrationJobId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(MigrationJob).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/migrationJobs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsMigrationJobsRequest>;

export type CreateProjectsLocationsMigrationJobsResponse = Operation;
export const CreateProjectsLocationsMigrationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsMigrationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new migration job in a given project and location. */
export const createProjectsLocationsMigrationJobs: API.OperationMethod<
  CreateProjectsLocationsMigrationJobsRequest,
  CreateProjectsLocationsMigrationJobsResponse,
  CreateProjectsLocationsMigrationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsMigrationJobsRequest,
  output: CreateProjectsLocationsMigrationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PromoteProjectsLocationsMigrationJobsRequest {
  /** Name of the migration job resource to promote. */
  name: string;
  /** Request body */
  body?: PromoteMigrationJobRequest;
}

export const PromoteProjectsLocationsMigrationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(PromoteMigrationJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:promote", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PromoteProjectsLocationsMigrationJobsRequest>;

export type PromoteProjectsLocationsMigrationJobsResponse = Operation;
export const PromoteProjectsLocationsMigrationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PromoteProjectsLocationsMigrationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database. */
export const promoteProjectsLocationsMigrationJobs: API.OperationMethod<
  PromoteProjectsLocationsMigrationJobsRequest,
  PromoteProjectsLocationsMigrationJobsResponse,
  PromoteProjectsLocationsMigrationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PromoteProjectsLocationsMigrationJobsRequest,
  output: PromoteProjectsLocationsMigrationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateSshScriptProjectsLocationsMigrationJobsRequest {
  /** Name of the migration job resource to generate the SSH script. */
  migrationJob: string;
  /** Request body */
  body?: GenerateSshScriptRequest;
}

export const GenerateSshScriptProjectsLocationsMigrationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    migrationJob: Schema.String.pipe(T.HttpPath("migrationJob")),
    body: Schema.optional(GenerateSshScriptRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+migrationJob}:generateSshScript",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateSshScriptProjectsLocationsMigrationJobsRequest>;

export type GenerateSshScriptProjectsLocationsMigrationJobsResponse = SshScript;
export const GenerateSshScriptProjectsLocationsMigrationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SshScript;

export type GenerateSshScriptProjectsLocationsMigrationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generate a SSH configuration script to configure the reverse SSH connectivity. */
export const generateSshScriptProjectsLocationsMigrationJobs: API.OperationMethod<
  GenerateSshScriptProjectsLocationsMigrationJobsRequest,
  GenerateSshScriptProjectsLocationsMigrationJobsResponse,
  GenerateSshScriptProjectsLocationsMigrationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateSshScriptProjectsLocationsMigrationJobsRequest,
  output: GenerateSshScriptProjectsLocationsMigrationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StartProjectsLocationsMigrationJobsRequest {
  /** Name of the migration job resource to start. */
  name: string;
  /** Request body */
  body?: StartMigrationJobRequest;
}

export const StartProjectsLocationsMigrationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StartMigrationJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:start", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<StartProjectsLocationsMigrationJobsRequest>;

export type StartProjectsLocationsMigrationJobsResponse = Operation;
export const StartProjectsLocationsMigrationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type StartProjectsLocationsMigrationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Start an already created migration job. */
export const startProjectsLocationsMigrationJobs: API.OperationMethod<
  StartProjectsLocationsMigrationJobsRequest,
  StartProjectsLocationsMigrationJobsResponse,
  StartProjectsLocationsMigrationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartProjectsLocationsMigrationJobsRequest,
  output: StartProjectsLocationsMigrationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResumeProjectsLocationsMigrationJobsRequest {
  /** Name of the migration job resource to resume. */
  name: string;
  /** Request body */
  body?: ResumeMigrationJobRequest;
}

export const ResumeProjectsLocationsMigrationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ResumeMigrationJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:resume", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ResumeProjectsLocationsMigrationJobsRequest>;

export type ResumeProjectsLocationsMigrationJobsResponse = Operation;
export const ResumeProjectsLocationsMigrationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ResumeProjectsLocationsMigrationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase). */
export const resumeProjectsLocationsMigrationJobs: API.OperationMethod<
  ResumeProjectsLocationsMigrationJobsRequest,
  ResumeProjectsLocationsMigrationJobsResponse,
  ResumeProjectsLocationsMigrationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResumeProjectsLocationsMigrationJobsRequest,
  output: ResumeProjectsLocationsMigrationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsMigrationJobsRequest {
  /** The name (URI) of this migration job resource, in the form of: projects/{project}/locations/{location}/migrationJobs/{migrationJob}. */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten by the update in the conversion workspace resource. */
  updateMask?: string;
  /** Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
  /** Request body */
  body?: MigrationJob;
}

export const PatchProjectsLocationsMigrationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(MigrationJob).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsMigrationJobsRequest>;

export type PatchProjectsLocationsMigrationJobsResponse = Operation;
export const PatchProjectsLocationsMigrationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsMigrationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single migration job. */
export const patchProjectsLocationsMigrationJobs: API.OperationMethod<
  PatchProjectsLocationsMigrationJobsRequest,
  PatchProjectsLocationsMigrationJobsResponse,
  PatchProjectsLocationsMigrationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsMigrationJobsRequest,
  output: PatchProjectsLocationsMigrationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface VerifyProjectsLocationsMigrationJobsRequest {
  /** Name of the migration job resource to verify. */
  name: string;
  /** Request body */
  body?: VerifyMigrationJobRequest;
}

export const VerifyProjectsLocationsMigrationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(VerifyMigrationJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:verify", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<VerifyProjectsLocationsMigrationJobsRequest>;

export type VerifyProjectsLocationsMigrationJobsResponse = Operation;
export const VerifyProjectsLocationsMigrationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type VerifyProjectsLocationsMigrationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met. */
export const verifyProjectsLocationsMigrationJobs: API.OperationMethod<
  VerifyProjectsLocationsMigrationJobsRequest,
  VerifyProjectsLocationsMigrationJobsResponse,
  VerifyProjectsLocationsMigrationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: VerifyProjectsLocationsMigrationJobsRequest,
  output: VerifyProjectsLocationsMigrationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsMigrationJobsRequest {
  /** Required. The parent which owns this collection of migrationJobs. */
  parent: string;
  /** Optional. The maximum number of migration jobs to return. The service may return fewer than this value. If unspecified, at most 50 migration jobs will be returned. The maximum value is 1000; values above 1000 are coerced to 1000. */
  pageSize?: number;
  /** Optional. A filter expression that filters migration jobs listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <. For example, list migration jobs created this year by specifying **createTime %gt; 2020-01-01T00:00:00.000000000Z.** You can also filter nested fields. For example, you could specify **reverseSshConnectivity.vmIp = "1.2.3.4"** to select all migration jobs connecting through the specific SSH tunnel bastion. */
  filter?: string;
  /** Optional. The nextPageToken value received in the previous call to migrationJobs.list, used in the subsequent request to retrieve the next page of results. On first call this should be left blank. When paginating, all other parameters provided to migrationJobs.list must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Sort the results based on the migration job name. Valid values are: "name", "name asc", and "name desc". */
  orderBy?: string;
}

export const ListProjectsLocationsMigrationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/migrationJobs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsMigrationJobsRequest>;

export type ListProjectsLocationsMigrationJobsResponse =
  ListMigrationJobsResponse;
export const ListProjectsLocationsMigrationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMigrationJobsResponse;

export type ListProjectsLocationsMigrationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists migration jobs in a given project and location. */
export const listProjectsLocationsMigrationJobs: API.PaginatedOperationMethod<
  ListProjectsLocationsMigrationJobsRequest,
  ListProjectsLocationsMigrationJobsResponse,
  ListProjectsLocationsMigrationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsMigrationJobsRequest,
  output: ListProjectsLocationsMigrationJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface FetchSourceObjectsProjectsLocationsMigrationJobsRequest {
  /** Required. The resource name for the migration job for which source objects should be returned. */
  name: string;
}

export const FetchSourceObjectsProjectsLocationsMigrationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:fetchSourceObjects" }),
    svc,
  ) as unknown as Schema.Schema<FetchSourceObjectsProjectsLocationsMigrationJobsRequest>;

export type FetchSourceObjectsProjectsLocationsMigrationJobsResponse =
  Operation;
export const FetchSourceObjectsProjectsLocationsMigrationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type FetchSourceObjectsProjectsLocationsMigrationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves objects from the source database that can be selected for data migration. This is applicable for the following migrations: 1. PostgreSQL to Cloud SQL for PostgreSQL 2. PostgreSQL to AlloyDB for PostgreSQL. */
export const fetchSourceObjectsProjectsLocationsMigrationJobs: API.OperationMethod<
  FetchSourceObjectsProjectsLocationsMigrationJobsRequest,
  FetchSourceObjectsProjectsLocationsMigrationJobsResponse,
  FetchSourceObjectsProjectsLocationsMigrationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchSourceObjectsProjectsLocationsMigrationJobsRequest,
  output: FetchSourceObjectsProjectsLocationsMigrationJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsMigrationJobsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsMigrationJobsRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsMigrationJobsRequest>;

export type TestIamPermissionsProjectsLocationsMigrationJobsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsMigrationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsMigrationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsMigrationJobs: API.OperationMethod<
  TestIamPermissionsProjectsLocationsMigrationJobsRequest,
  TestIamPermissionsProjectsLocationsMigrationJobsResponse,
  TestIamPermissionsProjectsLocationsMigrationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsMigrationJobsRequest,
  output: TestIamPermissionsProjectsLocationsMigrationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsMigrationJobsObjectsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsMigrationJobsObjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsMigrationJobsObjectsRequest>;

export type GetIamPolicyProjectsLocationsMigrationJobsObjectsResponse = Policy;
export const GetIamPolicyProjectsLocationsMigrationJobsObjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsMigrationJobsObjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsMigrationJobsObjects: API.OperationMethod<
  GetIamPolicyProjectsLocationsMigrationJobsObjectsRequest,
  GetIamPolicyProjectsLocationsMigrationJobsObjectsResponse,
  GetIamPolicyProjectsLocationsMigrationJobsObjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsMigrationJobsObjectsRequest,
  output: GetIamPolicyProjectsLocationsMigrationJobsObjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsMigrationJobsObjectsRequest {
  /** Required. The parent migration job that owns the collection of objects. */
  parent: string;
  /** Optional. Maximum number of objects to return. Default is 50. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. Page token received from a previous `ListMigrationJObObjectsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMigrationJobObjectsRequest` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsMigrationJobsObjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/objects" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsMigrationJobsObjectsRequest>;

export type ListProjectsLocationsMigrationJobsObjectsResponse =
  ListMigrationJobObjectsResponse;
export const ListProjectsLocationsMigrationJobsObjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMigrationJobObjectsResponse;

export type ListProjectsLocationsMigrationJobsObjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Use this method to list the objects of a specific migration job. */
export const listProjectsLocationsMigrationJobsObjects: API.PaginatedOperationMethod<
  ListProjectsLocationsMigrationJobsObjectsRequest,
  ListProjectsLocationsMigrationJobsObjectsResponse,
  ListProjectsLocationsMigrationJobsObjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsMigrationJobsObjectsRequest,
  output: ListProjectsLocationsMigrationJobsObjectsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SetIamPolicyProjectsLocationsMigrationJobsObjectsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsMigrationJobsObjectsRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsMigrationJobsObjectsRequest>;

export type SetIamPolicyProjectsLocationsMigrationJobsObjectsResponse = Policy;
export const SetIamPolicyProjectsLocationsMigrationJobsObjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsMigrationJobsObjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsMigrationJobsObjects: API.OperationMethod<
  SetIamPolicyProjectsLocationsMigrationJobsObjectsRequest,
  SetIamPolicyProjectsLocationsMigrationJobsObjectsResponse,
  SetIamPolicyProjectsLocationsMigrationJobsObjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsMigrationJobsObjectsRequest,
  output: SetIamPolicyProjectsLocationsMigrationJobsObjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsMigrationJobsObjectsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsMigrationJobsObjectsRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsMigrationJobsObjectsRequest>;

export type TestIamPermissionsProjectsLocationsMigrationJobsObjectsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsMigrationJobsObjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsMigrationJobsObjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsMigrationJobsObjects: API.OperationMethod<
  TestIamPermissionsProjectsLocationsMigrationJobsObjectsRequest,
  TestIamPermissionsProjectsLocationsMigrationJobsObjectsResponse,
  TestIamPermissionsProjectsLocationsMigrationJobsObjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsMigrationJobsObjectsRequest,
  output: TestIamPermissionsProjectsLocationsMigrationJobsObjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsMigrationJobsObjectsRequest {
  /** Required. The name of the migration job object resource to get. */
  name: string;
}

export const GetProjectsLocationsMigrationJobsObjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsMigrationJobsObjectsRequest>;

export type GetProjectsLocationsMigrationJobsObjectsResponse =
  MigrationJobObject;
export const GetProjectsLocationsMigrationJobsObjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ MigrationJobObject;

export type GetProjectsLocationsMigrationJobsObjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Use this method to get details about a migration job object. */
export const getProjectsLocationsMigrationJobsObjects: API.OperationMethod<
  GetProjectsLocationsMigrationJobsObjectsRequest,
  GetProjectsLocationsMigrationJobsObjectsResponse,
  GetProjectsLocationsMigrationJobsObjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMigrationJobsObjectsRequest,
  output: GetProjectsLocationsMigrationJobsObjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface LookupProjectsLocationsMigrationJobsObjectsRequest {
  /** Required. The parent migration job that owns the collection of objects. */
  parent: string;
  /** Request body */
  body?: LookupMigrationJobObjectRequest;
}

export const LookupProjectsLocationsMigrationJobsObjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(LookupMigrationJobObjectRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/objects:lookup",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<LookupProjectsLocationsMigrationJobsObjectsRequest>;

export type LookupProjectsLocationsMigrationJobsObjectsResponse =
  MigrationJobObject;
export const LookupProjectsLocationsMigrationJobsObjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ MigrationJobObject;

export type LookupProjectsLocationsMigrationJobsObjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Use this method to look up a migration job object by its source object identifier. */
export const lookupProjectsLocationsMigrationJobsObjects: API.OperationMethod<
  LookupProjectsLocationsMigrationJobsObjectsRequest,
  LookupProjectsLocationsMigrationJobsObjectsResponse,
  LookupProjectsLocationsMigrationJobsObjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LookupProjectsLocationsMigrationJobsObjectsRequest,
  output: LookupProjectsLocationsMigrationJobsObjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export interface GetProjectsLocationsPrivateConnectionsRequest {
  /** Required. The name of the private connection to get. */
  name: string;
}

export const GetProjectsLocationsPrivateConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsPrivateConnectionsRequest>;

export type GetProjectsLocationsPrivateConnectionsResponse = PrivateConnection;
export const GetProjectsLocationsPrivateConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PrivateConnection;

export type GetProjectsLocationsPrivateConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single private connection. */
export const getProjectsLocationsPrivateConnections: API.OperationMethod<
  GetProjectsLocationsPrivateConnectionsRequest,
  GetProjectsLocationsPrivateConnectionsResponse,
  GetProjectsLocationsPrivateConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsPrivateConnectionsRequest,
  output: GetProjectsLocationsPrivateConnectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsPrivateConnectionsRequest {
  /** Optional. Page token received from a previous `ListPrivateConnections` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateConnections` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Order by fields for the result. */
  orderBy?: string;
  /** Required. The parent that owns the collection of private connections. */
  parent: string;
  /** Optional. Maximum number of private connections to return. If unspecified, at most 50 private connections that are returned. The maximum value is 1000; values above 1000 are coerced to 1000. */
  pageSize?: number;
  /** Optional. A filter expression that filters private connections listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <. For example, list private connections created this year by specifying **createTime %gt; 2021-01-01T00:00:00.000000000Z**. */
  filter?: string;
}

export const ListProjectsLocationsPrivateConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/privateConnections" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsPrivateConnectionsRequest>;

export type ListProjectsLocationsPrivateConnectionsResponse =
  ListPrivateConnectionsResponse;
export const ListProjectsLocationsPrivateConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPrivateConnectionsResponse;

export type ListProjectsLocationsPrivateConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a list of private connections in a given project and location. */
export const listProjectsLocationsPrivateConnections: API.PaginatedOperationMethod<
  ListProjectsLocationsPrivateConnectionsRequest,
  ListProjectsLocationsPrivateConnectionsResponse,
  ListProjectsLocationsPrivateConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsPrivateConnectionsRequest,
  output: ListProjectsLocationsPrivateConnectionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsPrivateConnectionsRequest {
  /** Required. The name of the private connection to delete. */
  name: string;
  /** Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
}

export const DeleteProjectsLocationsPrivateConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsPrivateConnectionsRequest>;

export type DeleteProjectsLocationsPrivateConnectionsResponse = Operation;
export const DeleteProjectsLocationsPrivateConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsPrivateConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Database Migration Service private connection. */
export const deleteProjectsLocationsPrivateConnections: API.OperationMethod<
  DeleteProjectsLocationsPrivateConnectionsRequest,
  DeleteProjectsLocationsPrivateConnectionsResponse,
  DeleteProjectsLocationsPrivateConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsPrivateConnectionsRequest,
  output: DeleteProjectsLocationsPrivateConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsPrivateConnectionsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsPrivateConnectionsRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsPrivateConnectionsRequest>;

export type SetIamPolicyProjectsLocationsPrivateConnectionsResponse = Policy;
export const SetIamPolicyProjectsLocationsPrivateConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsPrivateConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsPrivateConnections: API.OperationMethod<
  SetIamPolicyProjectsLocationsPrivateConnectionsRequest,
  SetIamPolicyProjectsLocationsPrivateConnectionsResponse,
  SetIamPolicyProjectsLocationsPrivateConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsPrivateConnectionsRequest,
  output: SetIamPolicyProjectsLocationsPrivateConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsPrivateConnectionsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsPrivateConnectionsRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsPrivateConnectionsRequest>;

export type TestIamPermissionsProjectsLocationsPrivateConnectionsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsPrivateConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsPrivateConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsPrivateConnections: API.OperationMethod<
  TestIamPermissionsProjectsLocationsPrivateConnectionsRequest,
  TestIamPermissionsProjectsLocationsPrivateConnectionsResponse,
  TestIamPermissionsProjectsLocationsPrivateConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsPrivateConnectionsRequest,
  output: TestIamPermissionsProjectsLocationsPrivateConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsPrivateConnectionsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsPrivateConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsPrivateConnectionsRequest>;

export type GetIamPolicyProjectsLocationsPrivateConnectionsResponse = Policy;
export const GetIamPolicyProjectsLocationsPrivateConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsPrivateConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsPrivateConnections: API.OperationMethod<
  GetIamPolicyProjectsLocationsPrivateConnectionsRequest,
  GetIamPolicyProjectsLocationsPrivateConnectionsResponse,
  GetIamPolicyProjectsLocationsPrivateConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsPrivateConnectionsRequest,
  output: GetIamPolicyProjectsLocationsPrivateConnectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsPrivateConnectionsRequest {
  /** Required. The private connection identifier. */
  privateConnectionId?: string;
  /** Required. The parent that owns the collection of PrivateConnections. */
  parent: string;
  /** Optional. If set to true, will skip validations. */
  skipValidation?: boolean;
  /** Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
  /** Optional. For PSC Interface only - get the tenant project before creating the resource. */
  validateOnly?: boolean;
  /** Request body */
  body?: PrivateConnection;
}

export const CreateProjectsLocationsPrivateConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateConnectionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("privateConnectionId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    skipValidation: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("skipValidation"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(PrivateConnection).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/privateConnections",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsPrivateConnectionsRequest>;

export type CreateProjectsLocationsPrivateConnectionsResponse = Operation;
export const CreateProjectsLocationsPrivateConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsPrivateConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new private connection in a given project and location. */
export const createProjectsLocationsPrivateConnections: API.OperationMethod<
  CreateProjectsLocationsPrivateConnectionsRequest,
  CreateProjectsLocationsPrivateConnectionsResponse,
  CreateProjectsLocationsPrivateConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsPrivateConnectionsRequest,
  output: CreateProjectsLocationsPrivateConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsConnectionProfilesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsConnectionProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsConnectionProfilesRequest>;

export type GetIamPolicyProjectsLocationsConnectionProfilesResponse = Policy;
export const GetIamPolicyProjectsLocationsConnectionProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsConnectionProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsConnectionProfiles: API.OperationMethod<
  GetIamPolicyProjectsLocationsConnectionProfilesRequest,
  GetIamPolicyProjectsLocationsConnectionProfilesResponse,
  GetIamPolicyProjectsLocationsConnectionProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsConnectionProfilesRequest,
  output: GetIamPolicyProjectsLocationsConnectionProfilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsConnectionProfilesRequest {
  /** Optional. Only validate the connection profile, but don't create any resources. The default is false. Only supported for Oracle connection profiles. */
  validateOnly?: boolean;
  /** Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
  /** Required. The connection profile identifier. */
  connectionProfileId?: string;
  /** Optional. Create the connection profile without validating it. The default is false. Only supported for Oracle connection profiles. */
  skipValidation?: boolean;
  /** Required. The parent which owns this collection of connection profiles. */
  parent: string;
  /** Request body */
  body?: ConnectionProfile;
}

export const CreateProjectsLocationsConnectionProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    connectionProfileId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("connectionProfileId"),
    ),
    skipValidation: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("skipValidation"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ConnectionProfile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/connectionProfiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConnectionProfilesRequest>;

export type CreateProjectsLocationsConnectionProfilesResponse = Operation;
export const CreateProjectsLocationsConnectionProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsConnectionProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new connection profile in a given project and location. */
export const createProjectsLocationsConnectionProfiles: API.OperationMethod<
  CreateProjectsLocationsConnectionProfilesRequest,
  CreateProjectsLocationsConnectionProfilesResponse,
  CreateProjectsLocationsConnectionProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConnectionProfilesRequest,
  output: CreateProjectsLocationsConnectionProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsConnectionProfilesRequest {
  /** The name of this connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{connectionProfile}. */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten by the update in the conversion workspace resource. */
  updateMask?: string;
  /** Optional. Update the connection profile without validating it. The default is false. Only supported for Oracle connection profiles. */
  skipValidation?: boolean;
  /** Optional. Only validate the connection profile, but don't update any resources. The default is false. Only supported for Oracle connection profiles. */
  validateOnly?: boolean;
  /** Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
  /** Request body */
  body?: ConnectionProfile;
}

export const PatchProjectsLocationsConnectionProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    skipValidation: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("skipValidation"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(ConnectionProfile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsConnectionProfilesRequest>;

export type PatchProjectsLocationsConnectionProfilesResponse = Operation;
export const PatchProjectsLocationsConnectionProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsConnectionProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the configuration of a single connection profile. */
export const patchProjectsLocationsConnectionProfiles: API.OperationMethod<
  PatchProjectsLocationsConnectionProfilesRequest,
  PatchProjectsLocationsConnectionProfilesResponse,
  PatchProjectsLocationsConnectionProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsConnectionProfilesRequest,
  output: PatchProjectsLocationsConnectionProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsConnectionProfilesRequest {
  /** Required. Name of the connection profile resource to get. */
  name: string;
}

export const GetProjectsLocationsConnectionProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConnectionProfilesRequest>;

export type GetProjectsLocationsConnectionProfilesResponse = ConnectionProfile;
export const GetProjectsLocationsConnectionProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ConnectionProfile;

export type GetProjectsLocationsConnectionProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single connection profile. */
export const getProjectsLocationsConnectionProfiles: API.OperationMethod<
  GetProjectsLocationsConnectionProfilesRequest,
  GetProjectsLocationsConnectionProfilesResponse,
  GetProjectsLocationsConnectionProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConnectionProfilesRequest,
  output: GetProjectsLocationsConnectionProfilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsConnectionProfilesRequest {
  /** Optional. A page token, received from a previous `ListConnectionProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectionProfiles` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. A comma-separated list of fields to order results according to. */
  orderBy?: string;
  /** Required. The parent which owns this collection of connection profiles. */
  parent: string;
  /** The maximum number of connection profiles to return. The service may return fewer than this value. If unspecified, at most 50 connection profiles will be returned. The maximum value is 1000; values above 1000 are coerced to 1000. */
  pageSize?: number;
  /** Optional. A filter expression that filters connection profiles listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <. For example, list connection profiles created this year by specifying **createTime %gt; 2020-01-01T00:00:00.000000000Z**. You can also filter nested fields. For example, you could specify **mySql.username = %lt;my_username%gt;** to list all connection profiles configured to connect with a specific username. */
  filter?: string;
}

export const ListProjectsLocationsConnectionProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/connectionProfiles" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConnectionProfilesRequest>;

export type ListProjectsLocationsConnectionProfilesResponse =
  ListConnectionProfilesResponse;
export const ListProjectsLocationsConnectionProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListConnectionProfilesResponse;

export type ListProjectsLocationsConnectionProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a list of all connection profiles in a given project and location. */
export const listProjectsLocationsConnectionProfiles: API.PaginatedOperationMethod<
  ListProjectsLocationsConnectionProfilesRequest,
  ListProjectsLocationsConnectionProfilesResponse,
  ListProjectsLocationsConnectionProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConnectionProfilesRequest,
  output: ListProjectsLocationsConnectionProfilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsConnectionProfilesRequest {
  /** A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
  /** Required. Name of the connection profile resource to delete. */
  name: string;
  /** In case of force delete, the CloudSQL replica database is also deleted (only for CloudSQL connection profile). */
  force?: boolean;
}

export const DeleteProjectsLocationsConnectionProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsConnectionProfilesRequest>;

export type DeleteProjectsLocationsConnectionProfilesResponse = Operation;
export const DeleteProjectsLocationsConnectionProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsConnectionProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Database Migration Service connection profile. A connection profile can only be deleted if it is not in use by any active migration jobs. */
export const deleteProjectsLocationsConnectionProfiles: API.OperationMethod<
  DeleteProjectsLocationsConnectionProfilesRequest,
  DeleteProjectsLocationsConnectionProfilesResponse,
  DeleteProjectsLocationsConnectionProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsConnectionProfilesRequest,
  output: DeleteProjectsLocationsConnectionProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsConnectionProfilesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsConnectionProfilesRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsConnectionProfilesRequest>;

export type SetIamPolicyProjectsLocationsConnectionProfilesResponse = Policy;
export const SetIamPolicyProjectsLocationsConnectionProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsConnectionProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsConnectionProfiles: API.OperationMethod<
  SetIamPolicyProjectsLocationsConnectionProfilesRequest,
  SetIamPolicyProjectsLocationsConnectionProfilesResponse,
  SetIamPolicyProjectsLocationsConnectionProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsConnectionProfilesRequest,
  output: SetIamPolicyProjectsLocationsConnectionProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsConnectionProfilesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsConnectionProfilesRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsConnectionProfilesRequest>;

export type TestIamPermissionsProjectsLocationsConnectionProfilesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsConnectionProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsConnectionProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsConnectionProfiles: API.OperationMethod<
  TestIamPermissionsProjectsLocationsConnectionProfilesRequest,
  TestIamPermissionsProjectsLocationsConnectionProfilesResponse,
  TestIamPermissionsProjectsLocationsConnectionProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsConnectionProfilesRequest,
  output: TestIamPermissionsProjectsLocationsConnectionProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CommitProjectsLocationsConversionWorkspacesRequest {
  /** Required. Name of the conversion workspace resource to commit. */
  name: string;
  /** Request body */
  body?: CommitConversionWorkspaceRequest;
}

export const CommitProjectsLocationsConversionWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CommitConversionWorkspaceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:commit", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CommitProjectsLocationsConversionWorkspacesRequest>;

export type CommitProjectsLocationsConversionWorkspacesResponse = Operation;
export const CommitProjectsLocationsConversionWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CommitProjectsLocationsConversionWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks all the data in the conversion workspace as committed. */
export const commitProjectsLocationsConversionWorkspaces: API.OperationMethod<
  CommitProjectsLocationsConversionWorkspacesRequest,
  CommitProjectsLocationsConversionWorkspacesResponse,
  CommitProjectsLocationsConversionWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CommitProjectsLocationsConversionWorkspacesRequest,
  output: CommitProjectsLocationsConversionWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsConversionWorkspacesRequest {
  /** Required. Name of the conversion workspace resource to get. */
  name: string;
}

export const GetProjectsLocationsConversionWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConversionWorkspacesRequest>;

export type GetProjectsLocationsConversionWorkspacesResponse =
  ConversionWorkspace;
export const GetProjectsLocationsConversionWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ConversionWorkspace;

export type GetProjectsLocationsConversionWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single conversion workspace. */
export const getProjectsLocationsConversionWorkspaces: API.OperationMethod<
  GetProjectsLocationsConversionWorkspacesRequest,
  GetProjectsLocationsConversionWorkspacesResponse,
  GetProjectsLocationsConversionWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConversionWorkspacesRequest,
  output: GetProjectsLocationsConversionWorkspacesResponse,
  errors: [NotFound, Forbidden],
}));

export interface SeedProjectsLocationsConversionWorkspacesRequest {
  /** Name of the conversion workspace resource to seed with new database structure, in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}. */
  name: string;
  /** Request body */
  body?: SeedConversionWorkspaceRequest;
}

export const SeedProjectsLocationsConversionWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SeedConversionWorkspaceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:seed", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SeedProjectsLocationsConversionWorkspacesRequest>;

export type SeedProjectsLocationsConversionWorkspacesResponse = Operation;
export const SeedProjectsLocationsConversionWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SeedProjectsLocationsConversionWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Imports a snapshot of the source database into the conversion workspace. */
export const seedProjectsLocationsConversionWorkspaces: API.OperationMethod<
  SeedProjectsLocationsConversionWorkspacesRequest,
  SeedProjectsLocationsConversionWorkspacesResponse,
  SeedProjectsLocationsConversionWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SeedProjectsLocationsConversionWorkspacesRequest,
  output: SeedProjectsLocationsConversionWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ApplyProjectsLocationsConversionWorkspacesRequest {
  /** Required. The name of the conversion workspace resource for which to apply the draft tree. Must be in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}. */
  name: string;
  /** Request body */
  body?: ApplyConversionWorkspaceRequest;
}

export const ApplyProjectsLocationsConversionWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ApplyConversionWorkspaceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:apply", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ApplyProjectsLocationsConversionWorkspacesRequest>;

export type ApplyProjectsLocationsConversionWorkspacesResponse = Operation;
export const ApplyProjectsLocationsConversionWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ApplyProjectsLocationsConversionWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Applies draft tree onto a specific destination database. */
export const applyProjectsLocationsConversionWorkspaces: API.OperationMethod<
  ApplyProjectsLocationsConversionWorkspacesRequest,
  ApplyProjectsLocationsConversionWorkspacesResponse,
  ApplyProjectsLocationsConversionWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ApplyProjectsLocationsConversionWorkspacesRequest,
  output: ApplyProjectsLocationsConversionWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SearchBackgroundJobsProjectsLocationsConversionWorkspacesRequest {
  /** Required. Name of the conversion workspace resource whose jobs are listed, in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}. */
  conversionWorkspace: string;
  /** Optional. Whether or not to return just the most recent job per job type, */
  returnMostRecentPerJobType?: boolean;
  /** Optional. The maximum number of jobs to return. The service may return fewer than this value. If unspecified, at most 100 jobs are returned. The maximum value is 100; values above 100 are coerced to 100. */
  maxSize?: number;
  /** Optional. If provided, only returns jobs that completed until (not including) the given timestamp. */
  completedUntilTime?: string;
}

export const SearchBackgroundJobsProjectsLocationsConversionWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversionWorkspace: Schema.String.pipe(T.HttpPath("conversionWorkspace")),
    returnMostRecentPerJobType: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnMostRecentPerJobType"),
    ),
    maxSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxSize")),
    completedUntilTime: Schema.optional(Schema.String).pipe(
      T.HttpQuery("completedUntilTime"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+conversionWorkspace}:searchBackgroundJobs",
    }),
    svc,
  ) as unknown as Schema.Schema<SearchBackgroundJobsProjectsLocationsConversionWorkspacesRequest>;

export type SearchBackgroundJobsProjectsLocationsConversionWorkspacesResponse =
  SearchBackgroundJobsResponse;
export const SearchBackgroundJobsProjectsLocationsConversionWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchBackgroundJobsResponse;

export type SearchBackgroundJobsProjectsLocationsConversionWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Searches/lists the background jobs for a specific conversion workspace. The background jobs are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are a way to expose the data plane jobs log. */
export const searchBackgroundJobsProjectsLocationsConversionWorkspaces: API.OperationMethod<
  SearchBackgroundJobsProjectsLocationsConversionWorkspacesRequest,
  SearchBackgroundJobsProjectsLocationsConversionWorkspacesResponse,
  SearchBackgroundJobsProjectsLocationsConversionWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchBackgroundJobsProjectsLocationsConversionWorkspacesRequest,
  output: SearchBackgroundJobsProjectsLocationsConversionWorkspacesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsConversionWorkspacesRequest {
  /** Required. Name of the conversion workspace resource to delete. */
  name: string;
  /** Optional. Force delete the conversion workspace, even if there's a running migration that is using the workspace. */
  force?: boolean;
  /** Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
}

export const DeleteProjectsLocationsConversionWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsConversionWorkspacesRequest>;

export type DeleteProjectsLocationsConversionWorkspacesResponse = Operation;
export const DeleteProjectsLocationsConversionWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsConversionWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single conversion workspace. */
export const deleteProjectsLocationsConversionWorkspaces: API.OperationMethod<
  DeleteProjectsLocationsConversionWorkspacesRequest,
  DeleteProjectsLocationsConversionWorkspacesResponse,
  DeleteProjectsLocationsConversionWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsConversionWorkspacesRequest,
  output: DeleteProjectsLocationsConversionWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsConversionWorkspacesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsConversionWorkspacesRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsConversionWorkspacesRequest>;

export type SetIamPolicyProjectsLocationsConversionWorkspacesResponse = Policy;
export const SetIamPolicyProjectsLocationsConversionWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsConversionWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsConversionWorkspaces: API.OperationMethod<
  SetIamPolicyProjectsLocationsConversionWorkspacesRequest,
  SetIamPolicyProjectsLocationsConversionWorkspacesResponse,
  SetIamPolicyProjectsLocationsConversionWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsConversionWorkspacesRequest,
  output: SetIamPolicyProjectsLocationsConversionWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RollbackProjectsLocationsConversionWorkspacesRequest {
  /** Required. Name of the conversion workspace resource to roll back to. */
  name: string;
  /** Request body */
  body?: RollbackConversionWorkspaceRequest;
}

export const RollbackProjectsLocationsConversionWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RollbackConversionWorkspaceRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:rollback", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RollbackProjectsLocationsConversionWorkspacesRequest>;

export type RollbackProjectsLocationsConversionWorkspacesResponse = Operation;
export const RollbackProjectsLocationsConversionWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RollbackProjectsLocationsConversionWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Rolls back a conversion workspace to the last committed snapshot. */
export const rollbackProjectsLocationsConversionWorkspaces: API.OperationMethod<
  RollbackProjectsLocationsConversionWorkspacesRequest,
  RollbackProjectsLocationsConversionWorkspacesResponse,
  RollbackProjectsLocationsConversionWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RollbackProjectsLocationsConversionWorkspacesRequest,
  output: RollbackProjectsLocationsConversionWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ConvertProjectsLocationsConversionWorkspacesRequest {
  /** Name of the conversion workspace resource to convert in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}. */
  name: string;
  /** Request body */
  body?: ConvertConversionWorkspaceRequest;
}

export const ConvertProjectsLocationsConversionWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ConvertConversionWorkspaceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:convert", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ConvertProjectsLocationsConversionWorkspacesRequest>;

export type ConvertProjectsLocationsConversionWorkspacesResponse = Operation;
export const ConvertProjectsLocationsConversionWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ConvertProjectsLocationsConversionWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a draft tree schema for the destination database. */
export const convertProjectsLocationsConversionWorkspaces: API.OperationMethod<
  ConvertProjectsLocationsConversionWorkspacesRequest,
  ConvertProjectsLocationsConversionWorkspacesResponse,
  ConvertProjectsLocationsConversionWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ConvertProjectsLocationsConversionWorkspacesRequest,
  output: ConvertProjectsLocationsConversionWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsConversionWorkspacesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsConversionWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsConversionWorkspacesRequest>;

export type GetIamPolicyProjectsLocationsConversionWorkspacesResponse = Policy;
export const GetIamPolicyProjectsLocationsConversionWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsConversionWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsConversionWorkspaces: API.OperationMethod<
  GetIamPolicyProjectsLocationsConversionWorkspacesRequest,
  GetIamPolicyProjectsLocationsConversionWorkspacesResponse,
  GetIamPolicyProjectsLocationsConversionWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsConversionWorkspacesRequest,
  output: GetIamPolicyProjectsLocationsConversionWorkspacesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DescribeConversionWorkspaceRevisionsProjectsLocationsConversionWorkspacesRequest {
  /** Required. Name of the conversion workspace resource whose revisions are listed. Must be in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}. */
  conversionWorkspace: string;
  /** Optional. Optional filter to request a specific commit ID. */
  commitId?: string;
}

export const DescribeConversionWorkspaceRevisionsProjectsLocationsConversionWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversionWorkspace: Schema.String.pipe(T.HttpPath("conversionWorkspace")),
    commitId: Schema.optional(Schema.String).pipe(T.HttpQuery("commitId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+conversionWorkspace}:describeConversionWorkspaceRevisions",
    }),
    svc,
  ) as unknown as Schema.Schema<DescribeConversionWorkspaceRevisionsProjectsLocationsConversionWorkspacesRequest>;

export type DescribeConversionWorkspaceRevisionsProjectsLocationsConversionWorkspacesResponse =
  DescribeConversionWorkspaceRevisionsResponse;
export const DescribeConversionWorkspaceRevisionsProjectsLocationsConversionWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DescribeConversionWorkspaceRevisionsResponse;

export type DescribeConversionWorkspaceRevisionsProjectsLocationsConversionWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a list of committed revisions of a specific conversion workspace. */
export const describeConversionWorkspaceRevisionsProjectsLocationsConversionWorkspaces: API.OperationMethod<
  DescribeConversionWorkspaceRevisionsProjectsLocationsConversionWorkspacesRequest,
  DescribeConversionWorkspaceRevisionsProjectsLocationsConversionWorkspacesResponse,
  DescribeConversionWorkspaceRevisionsProjectsLocationsConversionWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    DescribeConversionWorkspaceRevisionsProjectsLocationsConversionWorkspacesRequest,
  output:
    DescribeConversionWorkspaceRevisionsProjectsLocationsConversionWorkspacesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsConversionWorkspacesRequest {
  /** Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
  /** Required. The parent which owns this collection of conversion workspaces. */
  parent: string;
  /** Required. The ID of the conversion workspace to create. */
  conversionWorkspaceId?: string;
  /** Request body */
  body?: ConversionWorkspace;
}

export const CreateProjectsLocationsConversionWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    conversionWorkspaceId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("conversionWorkspaceId"),
    ),
    body: Schema.optional(ConversionWorkspace).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/conversionWorkspaces",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConversionWorkspacesRequest>;

export type CreateProjectsLocationsConversionWorkspacesResponse = Operation;
export const CreateProjectsLocationsConversionWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsConversionWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new conversion workspace in a given project and location. */
export const createProjectsLocationsConversionWorkspaces: API.OperationMethod<
  CreateProjectsLocationsConversionWorkspacesRequest,
  CreateProjectsLocationsConversionWorkspacesResponse,
  CreateProjectsLocationsConversionWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConversionWorkspacesRequest,
  output: CreateProjectsLocationsConversionWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsConversionWorkspacesRequest {
  /** Required. The parent which owns this collection of conversion workspaces. */
  parent: string;
  /** Optional. The maximum number of conversion workspaces to return. The service may return fewer than this value. If unspecified, at most 50 sets are returned. */
  pageSize?: number;
  /** Optional. The nextPageToken value received in the previous call to conversionWorkspaces.list, used in the subsequent request to retrieve the next page of results. On first call this should be left blank. When paginating, all other parameters provided to conversionWorkspaces.list must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. A filter expression that filters conversion workspaces listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, >, or <. For example, list conversion workspaces created this year by specifying **createTime %gt; 2020-01-01T00:00:00.000000000Z.** You can also filter nested fields. For example, you could specify **source.version = "12.c.1"** to select all conversion workspaces with source database version equal to 12.c.1. */
  filter?: string;
}

export const ListProjectsLocationsConversionWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/conversionWorkspaces" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConversionWorkspacesRequest>;

export type ListProjectsLocationsConversionWorkspacesResponse =
  ListConversionWorkspacesResponse;
export const ListProjectsLocationsConversionWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListConversionWorkspacesResponse;

export type ListProjectsLocationsConversionWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists conversion workspaces in a given project and location. */
export const listProjectsLocationsConversionWorkspaces: API.PaginatedOperationMethod<
  ListProjectsLocationsConversionWorkspacesRequest,
  ListProjectsLocationsConversionWorkspacesResponse,
  ListProjectsLocationsConversionWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConversionWorkspacesRequest,
  output: ListProjectsLocationsConversionWorkspacesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface TestIamPermissionsProjectsLocationsConversionWorkspacesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsConversionWorkspacesRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsConversionWorkspacesRequest>;

export type TestIamPermissionsProjectsLocationsConversionWorkspacesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsConversionWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsConversionWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsConversionWorkspaces: API.OperationMethod<
  TestIamPermissionsProjectsLocationsConversionWorkspacesRequest,
  TestIamPermissionsProjectsLocationsConversionWorkspacesResponse,
  TestIamPermissionsProjectsLocationsConversionWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsConversionWorkspacesRequest,
  output: TestIamPermissionsProjectsLocationsConversionWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DescribeDatabaseEntitiesProjectsLocationsConversionWorkspacesRequest {
  /** Optional. The maximum number of entities to return. The service may return fewer entities than the value specifies. */
  pageSize?: number;
  /** Optional. Filter the returned entities based on AIP-160 standard. */
  filter?: string;
  /** Optional. Whether to retrieve the latest committed version of the entities or the latest version. This field is ignored if a specific commit_id is specified. */
  uncommitted?: boolean;
  /** Optional. Request a specific commit ID. If not specified, the entities from the latest commit are returned. */
  commitId?: string;
  /** Required. The tree to fetch. */
  tree?:
    | "DB_TREE_TYPE_UNSPECIFIED"
    | "SOURCE_TREE"
    | "DRAFT_TREE"
    | "DESTINATION_TREE"
    | (string & {});
  /** Required. Name of the conversion workspace resource whose database entities are described. Must be in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}. */
  conversionWorkspace: string;
  /** Optional. The nextPageToken value received in the previous call to conversionWorkspace.describeDatabaseEntities, used in the subsequent request to retrieve the next page of results. On first call this should be left blank. When paginating, all other parameters provided to conversionWorkspace.describeDatabaseEntities must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Results view based on AIP-157 */
  view?:
    | "DATABASE_ENTITY_VIEW_UNSPECIFIED"
    | "DATABASE_ENTITY_VIEW_BASIC"
    | "DATABASE_ENTITY_VIEW_FULL"
    | "DATABASE_ENTITY_VIEW_ROOT_SUMMARY"
    | "DATABASE_ENTITY_VIEW_FULL_COMPACT"
    | (string & {});
}

export const DescribeDatabaseEntitiesProjectsLocationsConversionWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    uncommitted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("uncommitted"),
    ),
    commitId: Schema.optional(Schema.String).pipe(T.HttpQuery("commitId")),
    tree: Schema.optional(Schema.String).pipe(T.HttpQuery("tree")),
    conversionWorkspace: Schema.String.pipe(T.HttpPath("conversionWorkspace")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+conversionWorkspace}:describeDatabaseEntities",
    }),
    svc,
  ) as unknown as Schema.Schema<DescribeDatabaseEntitiesProjectsLocationsConversionWorkspacesRequest>;

export type DescribeDatabaseEntitiesProjectsLocationsConversionWorkspacesResponse =
  DescribeDatabaseEntitiesResponse;
export const DescribeDatabaseEntitiesProjectsLocationsConversionWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DescribeDatabaseEntitiesResponse;

export type DescribeDatabaseEntitiesProjectsLocationsConversionWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Describes the database entities tree for a specific conversion workspace and a specific tree type. Database entities are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are simple data objects describing the structure of the client database. */
export const describeDatabaseEntitiesProjectsLocationsConversionWorkspaces: API.PaginatedOperationMethod<
  DescribeDatabaseEntitiesProjectsLocationsConversionWorkspacesRequest,
  DescribeDatabaseEntitiesProjectsLocationsConversionWorkspacesResponse,
  DescribeDatabaseEntitiesProjectsLocationsConversionWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: DescribeDatabaseEntitiesProjectsLocationsConversionWorkspacesRequest,
  output: DescribeDatabaseEntitiesProjectsLocationsConversionWorkspacesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsConversionWorkspacesRequest {
  /** Full name of the workspace resource, in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}. */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten by the update in the conversion workspace resource. */
  updateMask?: string;
  /** Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
  /** Request body */
  body?: ConversionWorkspace;
}

export const PatchProjectsLocationsConversionWorkspacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(ConversionWorkspace).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsConversionWorkspacesRequest>;

export type PatchProjectsLocationsConversionWorkspacesResponse = Operation;
export const PatchProjectsLocationsConversionWorkspacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsConversionWorkspacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single conversion workspace. */
export const patchProjectsLocationsConversionWorkspaces: API.OperationMethod<
  PatchProjectsLocationsConversionWorkspacesRequest,
  PatchProjectsLocationsConversionWorkspacesResponse,
  PatchProjectsLocationsConversionWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsConversionWorkspacesRequest,
  output: PatchProjectsLocationsConversionWorkspacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsConversionWorkspacesMappingRulesRequest {
  /** Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
  /** Required. The ID of the rule to create. */
  mappingRuleId?: string;
  /** Required. The parent which owns this collection of mapping rules. */
  parent: string;
  /** Request body */
  body?: MappingRule;
}

export const CreateProjectsLocationsConversionWorkspacesMappingRulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    mappingRuleId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("mappingRuleId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(MappingRule).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/mappingRules",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConversionWorkspacesMappingRulesRequest>;

export type CreateProjectsLocationsConversionWorkspacesMappingRulesResponse =
  MappingRule;
export const CreateProjectsLocationsConversionWorkspacesMappingRulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ MappingRule;

export type CreateProjectsLocationsConversionWorkspacesMappingRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new mapping rule for a given conversion workspace. */
export const createProjectsLocationsConversionWorkspacesMappingRules: API.OperationMethod<
  CreateProjectsLocationsConversionWorkspacesMappingRulesRequest,
  CreateProjectsLocationsConversionWorkspacesMappingRulesResponse,
  CreateProjectsLocationsConversionWorkspacesMappingRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConversionWorkspacesMappingRulesRequest,
  output: CreateProjectsLocationsConversionWorkspacesMappingRulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImportProjectsLocationsConversionWorkspacesMappingRulesRequest {
  /** Required. Name of the conversion workspace resource to import the rules to in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}. */
  parent: string;
  /** Request body */
  body?: ImportMappingRulesRequest;
}

export const ImportProjectsLocationsConversionWorkspacesMappingRulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ImportMappingRulesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/mappingRules:import",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportProjectsLocationsConversionWorkspacesMappingRulesRequest>;

export type ImportProjectsLocationsConversionWorkspacesMappingRulesResponse =
  Operation;
export const ImportProjectsLocationsConversionWorkspacesMappingRulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ImportProjectsLocationsConversionWorkspacesMappingRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Imports the mapping rules for a given conversion workspace. Supports various formats of external rules files. */
export const importProjectsLocationsConversionWorkspacesMappingRules: API.OperationMethod<
  ImportProjectsLocationsConversionWorkspacesMappingRulesRequest,
  ImportProjectsLocationsConversionWorkspacesMappingRulesResponse,
  ImportProjectsLocationsConversionWorkspacesMappingRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportProjectsLocationsConversionWorkspacesMappingRulesRequest,
  output: ImportProjectsLocationsConversionWorkspacesMappingRulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsConversionWorkspacesMappingRulesRequest {
  /** Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. */
  requestId?: string;
  /** Required. Name of the mapping rule resource to delete. */
  name: string;
}

export const DeleteProjectsLocationsConversionWorkspacesMappingRulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsConversionWorkspacesMappingRulesRequest>;

export type DeleteProjectsLocationsConversionWorkspacesMappingRulesResponse =
  Empty;
export const DeleteProjectsLocationsConversionWorkspacesMappingRulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsConversionWorkspacesMappingRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single mapping rule. */
export const deleteProjectsLocationsConversionWorkspacesMappingRules: API.OperationMethod<
  DeleteProjectsLocationsConversionWorkspacesMappingRulesRequest,
  DeleteProjectsLocationsConversionWorkspacesMappingRulesResponse,
  DeleteProjectsLocationsConversionWorkspacesMappingRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsConversionWorkspacesMappingRulesRequest,
  output: DeleteProjectsLocationsConversionWorkspacesMappingRulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsConversionWorkspacesMappingRulesRequest {
  /** Required. Name of the conversion workspace resource whose mapping rules are listed in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}. */
  parent: string;
  /** Optional. The maximum number of rules to return. The service may return fewer than this value. */
  pageSize?: number;
  /** Optional. The nextPageToken value received in the previous call to mappingRules.list, used in the subsequent request to retrieve the next page of results. On first call this should be left blank. When paginating, all other parameters provided to mappingRules.list must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsConversionWorkspacesMappingRulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/mappingRules" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConversionWorkspacesMappingRulesRequest>;

export type ListProjectsLocationsConversionWorkspacesMappingRulesResponse =
  ListMappingRulesResponse;
export const ListProjectsLocationsConversionWorkspacesMappingRulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMappingRulesResponse;

export type ListProjectsLocationsConversionWorkspacesMappingRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the mapping rules for a specific conversion workspace. */
export const listProjectsLocationsConversionWorkspacesMappingRules: API.PaginatedOperationMethod<
  ListProjectsLocationsConversionWorkspacesMappingRulesRequest,
  ListProjectsLocationsConversionWorkspacesMappingRulesResponse,
  ListProjectsLocationsConversionWorkspacesMappingRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConversionWorkspacesMappingRulesRequest,
  output: ListProjectsLocationsConversionWorkspacesMappingRulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsConversionWorkspacesMappingRulesRequest {
  /** Required. Name of the mapping rule resource to get. Example: conversionWorkspaces/123/mappingRules/rule123 In order to retrieve a previous revision of the mapping rule, also provide the revision ID. Example: conversionWorkspace/123/mappingRules/rule123@c7cfa2a8c7cfa2a8c7cfa2a8c7cfa2a8 */
  name: string;
}

export const GetProjectsLocationsConversionWorkspacesMappingRulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConversionWorkspacesMappingRulesRequest>;

export type GetProjectsLocationsConversionWorkspacesMappingRulesResponse =
  MappingRule;
export const GetProjectsLocationsConversionWorkspacesMappingRulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ MappingRule;

export type GetProjectsLocationsConversionWorkspacesMappingRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a mapping rule. */
export const getProjectsLocationsConversionWorkspacesMappingRules: API.OperationMethod<
  GetProjectsLocationsConversionWorkspacesMappingRulesRequest,
  GetProjectsLocationsConversionWorkspacesMappingRulesResponse,
  GetProjectsLocationsConversionWorkspacesMappingRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConversionWorkspacesMappingRulesRequest,
  output: GetProjectsLocationsConversionWorkspacesMappingRulesResponse,
  errors: [NotFound, Forbidden],
}));
