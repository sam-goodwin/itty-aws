// ==========================================================================
// Datastream API (datastream v1alpha1)
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
  name: "datastream",
  version: "v1alpha1",
  rootUrl: "https://datastream.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface ValidationMessage {
  /** Message severity level (warning or error). */
  level?: "LEVEL_UNSPECIFIED" | "WARNING" | "ERROR" | (string & {});
  /** A custom code identifying this specific message. */
  code?: string;
  /** The result of the validation. */
  message?: string;
  /** Additional metadata related to the result. */
  metadata?: Record<string, string>;
}

export const ValidationMessage: Schema.Schema<ValidationMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    level: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "ValidationMessage" });

export interface Validation {
  /** A custom code identifying this validation. */
  code?: string;
  /** Validation execution status. */
  status?:
    | "STATUS_UNSPECIFIED"
    | "NOT_EXECUTED"
    | "FAILED"
    | "PASSED"
    | (string & {});
  /** Messages reflecting the validation results. */
  message?: ReadonlyArray<ValidationMessage>;
  /** A short description of the validation. */
  description?: string;
}

export const Validation: Schema.Schema<Validation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    message: Schema.optional(Schema.Array(ValidationMessage)),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Validation" });

export interface NoConnectivitySettings {}

export const NoConnectivitySettings: Schema.Schema<NoConnectivitySettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "NoConnectivitySettings",
  });

export interface StaticServiceIpConnectivity {}

export const StaticServiceIpConnectivity: Schema.Schema<StaticServiceIpConnectivity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "StaticServiceIpConnectivity",
  });

export interface MysqlSslConfig {
  /** Output only. Indicates whether the client_key field is set. */
  clientKeySet?: boolean;
  /** Input only. PEM-encoded certificate that will be used by the replica to authenticate against the source database server. If this field is used then the 'client_key' and the 'ca_certificate' fields are mandatory. */
  clientCertificate?: string;
  /** Output only. Indicates whether the client_certificate field is set. */
  clientCertificateSet?: boolean;
  /** Input only. PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' and the 'ca_certificate' fields are mandatory. */
  clientKey?: string;
  /** Output only. Indicates whether the ca_certificate field is set. */
  caCertificateSet?: boolean;
  /** Input only. PEM-encoded certificate of the CA that signed the source database server's certificate. */
  caCertificate?: string;
}

export const MysqlSslConfig: Schema.Schema<MysqlSslConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientKeySet: Schema.optional(Schema.Boolean),
    clientCertificate: Schema.optional(Schema.String),
    clientCertificateSet: Schema.optional(Schema.Boolean),
    clientKey: Schema.optional(Schema.String),
    caCertificateSet: Schema.optional(Schema.Boolean),
    caCertificate: Schema.optional(Schema.String),
  }).annotate({ identifier: "MysqlSslConfig" });

export interface MysqlProfile {
  /** Required. Input only. Password for the MySQL connection. */
  password?: string;
  /** Port for the MySQL connection, default value is 3306. */
  port?: number;
  /** Required. Hostname for the MySQL connection. */
  hostname?: string;
  /** Required. Username for the MySQL connection. */
  username?: string;
  /** SSL configuration for the MySQL connection. */
  sslConfig?: MysqlSslConfig;
}

export const MysqlProfile: Schema.Schema<MysqlProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    password: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    hostname: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    sslConfig: Schema.optional(MysqlSslConfig),
  }).annotate({ identifier: "MysqlProfile" });

export interface OracleProfile {
  /** Port for the Oracle connection, default value is 1521. */
  port?: number;
  /** Required. Password for the Oracle connection. */
  password?: string;
  /** Required. Database for the Oracle connection. */
  databaseService?: string;
  /** Required. Username for the Oracle connection. */
  username?: string;
  /** Required. Hostname for the Oracle connection. */
  hostname?: string;
  /** Connection string attributes */
  connectionAttributes?: Record<string, string>;
}

export const OracleProfile: Schema.Schema<OracleProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port: Schema.optional(Schema.Number),
    password: Schema.optional(Schema.String),
    databaseService: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    hostname: Schema.optional(Schema.String),
    connectionAttributes: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "OracleProfile" });

export interface ForwardSshTunnelConnectivity {
  /** Port for the SSH tunnel, default value is 22. */
  port?: number;
  /** Input only. SSH password. */
  password?: string;
  /** Input only. SSH private key. */
  privateKey?: string;
  /** Required. Username for the SSH tunnel. */
  username?: string;
  /** Required. Hostname for the SSH tunnel. */
  hostname?: string;
}

export const ForwardSshTunnelConnectivity: Schema.Schema<ForwardSshTunnelConnectivity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port: Schema.optional(Schema.Number),
    password: Schema.optional(Schema.String),
    privateKey: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    hostname: Schema.optional(Schema.String),
  }).annotate({ identifier: "ForwardSshTunnelConnectivity" });

export interface PrivateConnectivity {
  privateConnectionName?: string;
}

export const PrivateConnectivity: Schema.Schema<PrivateConnectivity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateConnectionName: Schema.optional(Schema.String),
  }).annotate({ identifier: "PrivateConnectivity" });

export interface GcsProfile {
  /** Required. The full project and resource path for Cloud Storage bucket including the name. */
  bucketName?: string;
  /** The root path inside the Cloud Storage bucket. */
  rootPath?: string;
}

export const GcsProfile: Schema.Schema<GcsProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bucketName: Schema.optional(Schema.String),
    rootPath: Schema.optional(Schema.String),
  }).annotate({ identifier: "GcsProfile" });

export interface ConnectionProfile {
  /** Output only. The create time of the resource. */
  createTime?: string;
  /** Output only. The resource's name. */
  name?: string;
  /** Labels. */
  labels?: Record<string, string>;
  /** No connectivity option chosen. */
  noConnectivity?: NoConnectivitySettings;
  /** Static Service IP connectivity. */
  staticServiceIpConnectivity?: StaticServiceIpConnectivity;
  /** Output only. The update time of the resource. */
  updateTime?: string;
  /** MySQL ConnectionProfile configuration. */
  mysqlProfile?: MysqlProfile;
  /** Oracle ConnectionProfile configuration. */
  oracleProfile?: OracleProfile;
  /** Forward SSH tunnel connectivity. */
  forwardSshConnectivity?: ForwardSshTunnelConnectivity;
  /** Required. Display name. */
  displayName?: string;
  /** Private connectivity. */
  privateConnectivity?: PrivateConnectivity;
  /** Cloud Storage ConnectionProfile configuration. */
  gcsProfile?: GcsProfile;
}

export const ConnectionProfile: Schema.Schema<ConnectionProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    noConnectivity: Schema.optional(NoConnectivitySettings),
    staticServiceIpConnectivity: Schema.optional(StaticServiceIpConnectivity),
    updateTime: Schema.optional(Schema.String),
    mysqlProfile: Schema.optional(MysqlProfile),
    oracleProfile: Schema.optional(OracleProfile),
    forwardSshConnectivity: Schema.optional(ForwardSshTunnelConnectivity),
    displayName: Schema.optional(Schema.String),
    privateConnectivity: Schema.optional(PrivateConnectivity),
    gcsProfile: Schema.optional(GcsProfile),
  }).annotate({ identifier: "ConnectionProfile" });

export interface MysqlColumn {
  /** The MySQL data type. Full data types list can be found here: https://dev.mysql.com/doc/refman/8.0/en/data-types.html */
  dataType?: string;
  /** Column length. */
  length?: number;
  /** Whether or not the column represents a primary key. */
  primaryKey?: boolean;
  /** The ordinal position of the column in the table. */
  ordinalPosition?: number;
  /** Column name. */
  columnName?: string;
  /** Column collation. */
  collation?: string;
  /** Whether or not the column can accept a null value. */
  nullable?: boolean;
}

export const MysqlColumn: Schema.Schema<MysqlColumn> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataType: Schema.optional(Schema.String),
    length: Schema.optional(Schema.Number),
    primaryKey: Schema.optional(Schema.Boolean),
    ordinalPosition: Schema.optional(Schema.Number),
    columnName: Schema.optional(Schema.String),
    collation: Schema.optional(Schema.String),
    nullable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "MysqlColumn" });

export interface MysqlTable {
  /** Table name. */
  tableName?: string;
  /** MySQL columns in the database. When unspecified as part of include/exclude lists, includes/excludes everything. */
  mysqlColumns?: ReadonlyArray<MysqlColumn>;
}

export const MysqlTable: Schema.Schema<MysqlTable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tableName: Schema.optional(Schema.String),
    mysqlColumns: Schema.optional(Schema.Array(MysqlColumn)),
  }).annotate({ identifier: "MysqlTable" });

export interface MysqlDatabase {
  /** Database name. */
  databaseName?: string;
  /** Tables in the database. */
  mysqlTables?: ReadonlyArray<MysqlTable>;
}

export const MysqlDatabase: Schema.Schema<MysqlDatabase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseName: Schema.optional(Schema.String),
    mysqlTables: Schema.optional(Schema.Array(MysqlTable)),
  }).annotate({ identifier: "MysqlDatabase" });

export interface MysqlRdbms {
  /** Mysql databases on the server */
  mysqlDatabases?: ReadonlyArray<MysqlDatabase>;
}

export const MysqlRdbms: Schema.Schema<MysqlRdbms> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mysqlDatabases: Schema.optional(Schema.Array(MysqlDatabase)),
  }).annotate({ identifier: "MysqlRdbms" });

export interface OracleColumn {
  /** Column name. */
  columnName?: string;
  /** Column scale. */
  scale?: number;
  /** The Oracle data type. */
  dataType?: string;
  /** Column length. */
  length?: number;
  /** Whether or not the column can accept a null value. */
  nullable?: boolean;
  /** Whether or not the column represents a primary key. */
  primaryKey?: boolean;
  /** Column precision. */
  precision?: number;
  /** The ordinal position of the column in the table. */
  ordinalPosition?: number;
  /** Column encoding. */
  encoding?: string;
}

export const OracleColumn: Schema.Schema<OracleColumn> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    columnName: Schema.optional(Schema.String),
    scale: Schema.optional(Schema.Number),
    dataType: Schema.optional(Schema.String),
    length: Schema.optional(Schema.Number),
    nullable: Schema.optional(Schema.Boolean),
    primaryKey: Schema.optional(Schema.Boolean),
    precision: Schema.optional(Schema.Number),
    ordinalPosition: Schema.optional(Schema.Number),
    encoding: Schema.optional(Schema.String),
  }).annotate({ identifier: "OracleColumn" });

export interface OracleTable {
  /** Table name. */
  tableName?: string;
  /** Oracle columns in the schema. When unspecified as part of inclue/exclude lists, includes/excludes everything. */
  oracleColumns?: ReadonlyArray<OracleColumn>;
}

export const OracleTable: Schema.Schema<OracleTable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tableName: Schema.optional(Schema.String),
    oracleColumns: Schema.optional(Schema.Array(OracleColumn)),
  }).annotate({ identifier: "OracleTable" });

export interface OracleSchema {
  /** Schema name. */
  schemaName?: string;
  /** Tables in the schema. */
  oracleTables?: ReadonlyArray<OracleTable>;
}

export const OracleSchema: Schema.Schema<OracleSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schemaName: Schema.optional(Schema.String),
    oracleTables: Schema.optional(Schema.Array(OracleTable)),
  }).annotate({ identifier: "OracleSchema" });

export interface OracleRdbms {
  /** Oracle schemas/databases in the database server. */
  oracleSchemas?: ReadonlyArray<OracleSchema>;
}

export const OracleRdbms: Schema.Schema<OracleRdbms> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oracleSchemas: Schema.optional(Schema.Array(OracleSchema)),
  }).annotate({ identifier: "OracleRdbms" });

export interface DiscoverConnectionProfileRequest {
  /** An ad-hoc ConnectionProfile configuration. */
  connectionProfile?: ConnectionProfile;
  /** A reference to an existing ConnectionProfile. */
  connectionProfileName?: string;
  /** MySQL RDBMS to enrich with child data objects and metadata. */
  mysqlRdbms?: MysqlRdbms;
  /** The number of hierarchy levels below the current level to be retrieved. */
  recursionDepth?: number;
  /** Whether to retrieve the full hierarchy of data objects (TRUE) or only the current level (FALSE). */
  recursive?: boolean;
  /** Oracle RDBMS to enrich with child data objects and metadata. */
  oracleRdbms?: OracleRdbms;
}

export const DiscoverConnectionProfileRequest: Schema.Schema<DiscoverConnectionProfileRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectionProfile: Schema.optional(ConnectionProfile),
    connectionProfileName: Schema.optional(Schema.String),
    mysqlRdbms: Schema.optional(MysqlRdbms),
    recursionDepth: Schema.optional(Schema.Number),
    recursive: Schema.optional(Schema.Boolean),
    oracleRdbms: Schema.optional(OracleRdbms),
  }).annotate({ identifier: "DiscoverConnectionProfileRequest" });

export interface AvroFileFormat {}

export const AvroFileFormat: Schema.Schema<AvroFileFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AvroFileFormat",
  });

export interface JsonFileFormat {
  /** The schema file format along JSON data files. */
  schemaFileFormat?:
    | "SCHEMA_FILE_FORMAT_UNSPECIFIED"
    | "NO_SCHEMA_FILE"
    | "AVRO_SCHEMA_FILE"
    | (string & {});
  /** Compression of the loaded JSON file. */
  compression?:
    | "JSON_COMPRESSION_UNSPECIFIED"
    | "NO_COMPRESSION"
    | "GZIP"
    | (string & {});
}

export const JsonFileFormat: Schema.Schema<JsonFileFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schemaFileFormat: Schema.optional(Schema.String),
    compression: Schema.optional(Schema.String),
  }).annotate({ identifier: "JsonFileFormat" });

export interface GcsDestinationConfig {
  /** The maximum file size to be saved in the bucket. */
  fileRotationMb?: number;
  /** File format that data should be written in. Deprecated field (b/169501737) - use file_format instead. */
  gcsFileFormat?: "GCS_FILE_FORMAT_UNSPECIFIED" | "AVRO" | (string & {});
  /** The maximum duration for which new events are added before a file is closed and a new file is created. */
  fileRotationInterval?: string;
  /** AVRO file format configuration. */
  avroFileFormat?: AvroFileFormat;
  /** Path inside the Cloud Storage bucket to write data to. */
  path?: string;
  /** JSON file format configuration. */
  jsonFileFormat?: JsonFileFormat;
}

export const GcsDestinationConfig: Schema.Schema<GcsDestinationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileRotationMb: Schema.optional(Schema.Number),
    gcsFileFormat: Schema.optional(Schema.String),
    fileRotationInterval: Schema.optional(Schema.String),
    avroFileFormat: Schema.optional(AvroFileFormat),
    path: Schema.optional(Schema.String),
    jsonFileFormat: Schema.optional(JsonFileFormat),
  }).annotate({ identifier: "GcsDestinationConfig" });

export interface DestinationConfig {
  /** Required. Destination connection profile identifier. */
  destinationConnectionProfileName?: string;
  /** GCS destination configuration. */
  gcsDestinationConfig?: GcsDestinationConfig;
}

export const DestinationConfig: Schema.Schema<DestinationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinationConnectionProfileName: Schema.optional(Schema.String),
    gcsDestinationConfig: Schema.optional(GcsDestinationConfig),
  }).annotate({ identifier: "DestinationConfig" });

export interface BackfillAllStrategy {
  /** Oracle data source objects to avoid backfilling. */
  oracleExcludedObjects?: OracleRdbms;
  /** MySQL data source objects to avoid backfilling. */
  mysqlExcludedObjects?: MysqlRdbms;
}

export const BackfillAllStrategy: Schema.Schema<BackfillAllStrategy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oracleExcludedObjects: Schema.optional(OracleRdbms),
    mysqlExcludedObjects: Schema.optional(MysqlRdbms),
  }).annotate({ identifier: "BackfillAllStrategy" });

export interface BackfillNoneStrategy {}

export const BackfillNoneStrategy: Schema.Schema<BackfillNoneStrategy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "BackfillNoneStrategy",
  });

export interface DropLargeObjects {}

export const DropLargeObjects: Schema.Schema<DropLargeObjects> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DropLargeObjects",
  });

export interface OracleSourceConfig {
  /** Drop large object values. */
  dropLargeObjects?: DropLargeObjects;
  /** Oracle objects to include in the stream. */
  allowlist?: OracleRdbms;
  /** Oracle objects to exclude from the stream. */
  rejectlist?: OracleRdbms;
}

export const OracleSourceConfig: Schema.Schema<OracleSourceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dropLargeObjects: Schema.optional(DropLargeObjects),
    allowlist: Schema.optional(OracleRdbms),
    rejectlist: Schema.optional(OracleRdbms),
  }).annotate({ identifier: "OracleSourceConfig" });

export interface MysqlSourceConfig {
  /** MySQL objects to retrieve from the source. */
  allowlist?: MysqlRdbms;
  /** MySQL objects to exclude from the stream. */
  rejectlist?: MysqlRdbms;
}

export const MysqlSourceConfig: Schema.Schema<MysqlSourceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowlist: Schema.optional(MysqlRdbms),
    rejectlist: Schema.optional(MysqlRdbms),
  }).annotate({ identifier: "MysqlSourceConfig" });

export interface SourceConfig {
  /** Required. Source connection profile identifier. */
  sourceConnectionProfileName?: string;
  /** Oracle data source configuration */
  oracleSourceConfig?: OracleSourceConfig;
  /** MySQL data source configuration */
  mysqlSourceConfig?: MysqlSourceConfig;
}

export const SourceConfig: Schema.Schema<SourceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceConnectionProfileName: Schema.optional(Schema.String),
    oracleSourceConfig: Schema.optional(OracleSourceConfig),
    mysqlSourceConfig: Schema.optional(MysqlSourceConfig),
  }).annotate({ identifier: "SourceConfig" });

export interface Datastream_Error {
  /** The time when the error occurred. */
  errorTime?: string;
  /** A unique identifier for this specific error, allowing it to be traced throughout the system in logs and API responses. */
  errorUuid?: string;
  /** Additional information about the error. */
  details?: Record<string, string>;
  /** A message containing more information about the error that occurred. */
  message?: string;
  /** A title that explains the reason for the error. */
  reason?: string;
}

export const Datastream_Error: Schema.Schema<Datastream_Error> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorTime: Schema.optional(Schema.String),
    errorUuid: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
  }).annotate({ identifier: "Datastream_Error" });

export interface Stream {
  /** Immutable. A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data will be encrypted using an internal Stream-specific encryption key provisioned through KMS. */
  customerManagedEncryptionKey?: string;
  /** Required. Destination connection profile configuration. */
  destinationConfig?: DestinationConfig;
  /** Automatically backfill objects included in the stream source configuration. Specific objects can be excluded. */
  backfillAll?: BackfillAllStrategy;
  /** Required. Display name. */
  displayName?: string;
  /** Do not automatically backfill any objects. */
  backfillNone?: BackfillNoneStrategy;
  /** Output only. The last update time of the stream. */
  updateTime?: string;
  /** The state of the stream. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATED"
    | "RUNNING"
    | "PAUSED"
    | "MAINTENANCE"
    | "FAILED"
    | "FAILED_PERMANENTLY"
    | "STARTING"
    | "DRAINING"
    | (string & {});
  /** Output only. The stream's name. */
  name?: string;
  /** Required. Source connection profile configuration. */
  sourceConfig?: SourceConfig;
  /** Output only. The creation time of the stream. */
  createTime?: string;
  /** Labels. */
  labels?: Record<string, string>;
  /** Output only. Errors on the Stream. */
  errors?: ReadonlyArray<Datastream_Error>;
}

export const Stream: Schema.Schema<Stream> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerManagedEncryptionKey: Schema.optional(Schema.String),
    destinationConfig: Schema.optional(DestinationConfig),
    backfillAll: Schema.optional(BackfillAllStrategy),
    displayName: Schema.optional(Schema.String),
    backfillNone: Schema.optional(BackfillNoneStrategy),
    updateTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    sourceConfig: Schema.optional(SourceConfig),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    errors: Schema.optional(Schema.Array(Datastream_Error)),
  }).annotate({ identifier: "Stream" });

export interface ListConnectionProfilesResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** List of connection profiles. */
  connectionProfiles?: ReadonlyArray<ConnectionProfile>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListConnectionProfilesResponse: Schema.Schema<ListConnectionProfilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    connectionProfiles: Schema.optional(Schema.Array(ConnectionProfile)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListConnectionProfilesResponse" });

export interface OracleObjectIdentifier {
  /** Required. The schema name. */
  schema?: string;
  /** Required. The table name. */
  table?: string;
}

export const OracleObjectIdentifier: Schema.Schema<OracleObjectIdentifier> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schema: Schema.optional(Schema.String),
    table: Schema.optional(Schema.String),
  }).annotate({ identifier: "OracleObjectIdentifier" });

export interface ListStreamsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** List of streams */
  streams?: ReadonlyArray<Stream>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListStreamsResponse: Schema.Schema<ListStreamsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    streams: Schema.optional(Schema.Array(Stream)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListStreamsResponse" });

export interface MysqlObjectIdentifier {
  /** Required. The database name. */
  database?: string;
  /** Required. The table name. */
  table?: string;
}

export const MysqlObjectIdentifier: Schema.Schema<MysqlObjectIdentifier> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    database: Schema.optional(Schema.String),
    table: Schema.optional(Schema.String),
  }).annotate({ identifier: "MysqlObjectIdentifier" });

export interface SourceObjectIdentifier {
  /** Oracle data source object identifier. */
  oracleIdentifier?: OracleObjectIdentifier;
  /** Mysql data source object identifier. */
  mysqlIdentifier?: MysqlObjectIdentifier;
}

export const SourceObjectIdentifier: Schema.Schema<SourceObjectIdentifier> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oracleIdentifier: Schema.optional(OracleObjectIdentifier),
    mysqlIdentifier: Schema.optional(MysqlObjectIdentifier),
  }).annotate({ identifier: "SourceObjectIdentifier" });

export interface ValidationResult {
  /** A list of validations (includes both executed as well as not executed validations). */
  validations?: ReadonlyArray<Validation>;
}

export const ValidationResult: Schema.Schema<ValidationResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validations: Schema.optional(Schema.Array(Validation)),
  }).annotate({ identifier: "ValidationResult" });

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

export interface Datastream_BadRequest {
  /** Describes all violations in a client request. */
  fieldViolations?: ReadonlyArray<FieldViolation>;
}

export const Datastream_BadRequest: Schema.Schema<Datastream_BadRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldViolations: Schema.optional(Schema.Array(FieldViolation)),
  }).annotate({ identifier: "Datastream_BadRequest" });

export interface QuotaFailureViolation {
  /** The dimensions of the violated quota. Every non-global quota is enforced on a set of dimensions. While quota metric defines what to count, the dimensions specify for what aspects the counter should be increased. For example, the quota "CPUs per region per VM family" enforces a limit on the metric "compute.googleapis.com/cpus_per_vm_family" on dimensions "region" and "vm_family". And if the violation occurred in region "us-central1" and for VM family "n1", the quota_dimensions would be, { "region": "us-central1", "vm_family": "n1", } When a quota is enforced globally, the quota_dimensions would always be empty. */
  quotaDimensions?: Record<string, string>;
  /** The metric of the violated quota. A quota metric is a named counter to measure usage, such as API requests or CPUs. When an activity occurs in a service, such as Virtual Machine allocation, one or more quota metrics may be affected. For example, "compute.googleapis.com/cpus_per_vm_family", "storage.googleapis.com/internet_egress_bandwidth". */
  quotaMetric?: string;
  /** The enforced quota value at the time of the `QuotaFailure`. For example, if the enforced quota value at the time of the `QuotaFailure` on the number of CPUs is "10", then the value of this field would reflect this quantity. */
  quotaValue?: string;
  /** A description of how the quota check failed. Clients can use this description to find more about the quota configuration in the service's public documentation, or find the relevant quota limit to adjust through developer console. For example: "Service disabled" or "Daily Limit for read operations exceeded". */
  description?: string;
  /** The API Service from which the `QuotaFailure.Violation` originates. In some cases, Quota issues originate from an API Service other than the one that was called. In other words, a dependency of the called API Service could be the cause of the `QuotaFailure`, and this field would have the dependency API service name. For example, if the called API is Kubernetes Engine API (container.googleapis.com), and a quota violation occurs in the Kubernetes Engine API itself, this field would be "container.googleapis.com". On the other hand, if the quota violation occurs when the Kubernetes Engine API creates VMs in the Compute Engine API (compute.googleapis.com), this field would be "compute.googleapis.com". */
  apiService?: string;
  /** The id of the violated quota. Also know as "limit name", this is the unique identifier of a quota in the context of an API service. For example, "CPUS-PER-VM-FAMILY-per-project-region". */
  quotaId?: string;
  /** The new quota value being rolled out at the time of the violation. At the completion of the rollout, this value will be enforced in place of quota_value. If no rollout is in progress at the time of the violation, this field is not set. For example, if at the time of the violation a rollout is in progress changing the number of CPUs quota from 10 to 20, 20 would be the value of this field. */
  futureQuotaValue?: string;
  /** The subject on which the quota check failed. For example, "clientip:" or "project:". */
  subject?: string;
}

export const QuotaFailureViolation: Schema.Schema<QuotaFailureViolation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quotaDimensions: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    quotaMetric: Schema.optional(Schema.String),
    quotaValue: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    apiService: Schema.optional(Schema.String),
    quotaId: Schema.optional(Schema.String),
    futureQuotaValue: Schema.optional(Schema.String),
    subject: Schema.optional(Schema.String),
  }).annotate({ identifier: "QuotaFailureViolation" });

export interface QuotaFailure {
  /** Describes all quota violations. */
  violations?: ReadonlyArray<QuotaFailureViolation>;
}

export const QuotaFailure: Schema.Schema<QuotaFailure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    violations: Schema.optional(Schema.Array(QuotaFailureViolation)),
  }).annotate({ identifier: "QuotaFailure" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
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
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    done: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    error: Schema.optional(Status),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface PreconditionFailureViolation {
  /** The type of PreconditionFailure. We recommend using a service-specific enum type to define the supported precondition violation subjects. For example, "TOS" for "Terms of Service violation". */
  type?: string;
  /** A description of how the precondition failed. Developers can use this description to understand how to fix the failure. For example: "Terms of service not accepted". */
  description?: string;
  /** The subject, relative to the type, that failed. For example, "google.com/cloud" relative to the "TOS" type would indicate which terms of service is being referenced. */
  subject?: string;
}

export const PreconditionFailureViolation: Schema.Schema<PreconditionFailureViolation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    subject: Schema.optional(Schema.String),
  }).annotate({ identifier: "PreconditionFailureViolation" });

export interface PreconditionFailure {
  /** Describes all precondition violations. */
  violations?: ReadonlyArray<PreconditionFailureViolation>;
}

export const PreconditionFailure: Schema.Schema<PreconditionFailure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    violations: Schema.optional(Schema.Array(PreconditionFailureViolation)),
  }).annotate({ identifier: "PreconditionFailure" });

export interface OperationMetadata {
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. Results of executed validations if there are any. */
  validationResult?: ValidationResult;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statusMessage: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    validationResult: Schema.optional(ValidationResult),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface Location {
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    locationId: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
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

export interface Route {
  /** Required. Destination address for connection */
  destinationAddress?: string;
  /** Destination port for connection */
  destinationPort?: number;
  /** Output only. The update time of the resource. */
  updateTime?: string;
  /** Output only. The create time of the resource. */
  createTime?: string;
  /** Output only. The resource's name. */
  name?: string;
  /** Required. Display name. */
  displayName?: string;
  /** Labels. */
  labels?: Record<string, string>;
}

export const Route: Schema.Schema<Route> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinationAddress: Schema.optional(Schema.String),
    destinationPort: Schema.optional(Schema.Number),
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Route" });

export interface ListRoutesResponse {
  /** List of Routes. */
  routes?: ReadonlyArray<Route>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListRoutesResponse: Schema.Schema<ListRoutesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    routes: Schema.optional(Schema.Array(Route)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListRoutesResponse" });

export interface FetchStaticIpsResponse {
  /** list of static ips by account */
  staticIps?: ReadonlyArray<string>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const FetchStaticIpsResponse: Schema.Schema<FetchStaticIpsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    staticIps: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "FetchStaticIpsResponse" });

export interface VpcPeeringConfig {
  /** Required. fully qualified name of the VPC Datastream will peer to. */
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
  /** Output only. The resource's name. */
  name?: string;
  /** Required. Display name. */
  displayName?: string;
  /** Output only. In case of error, the details of the error in a user-friendly format. */
  error?: Datastream_Error;
  /** Output only. The create time of the resource. */
  createTime?: string;
  /** Labels. */
  labels?: Record<string, string>;
  /** Output only. The update time of the resource. */
  updateTime?: string;
  /** VPC Peering Config */
  vpcPeeringConfig?: VpcPeeringConfig;
  /** Output only. The state of the Private Connection. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "CREATED"
    | "FAILED"
    | "DELETING"
    | "FAILED_TO_DELETE"
    | (string & {});
}

export const PrivateConnection: Schema.Schema<PrivateConnection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    error: Schema.optional(Datastream_Error),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    updateTime: Schema.optional(Schema.String),
    vpcPeeringConfig: Schema.optional(VpcPeeringConfig),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "PrivateConnection" });

export interface FetchErrorsRequest {}

export const FetchErrorsRequest: Schema.Schema<FetchErrorsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "FetchErrorsRequest",
  });

export interface BackfillJob {
  /** Output only. Errors which caused the backfill job to fail. */
  errors?: ReadonlyArray<Datastream_Error>;
  /** Output only. Backfill job's start time. */
  lastStartTime?: string;
  /** Output only. Backfill job's end time. */
  lastEndTime?: string;
  /** Backfill job's triggering reason. */
  trigger?: "TRIGGER_UNSPECIFIED" | "AUTOMATIC" | "MANUAL" | (string & {});
  /** Backfill job state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "NOT_STARTED"
    | "PENDING"
    | "ACTIVE"
    | "STOPPED"
    | "FAILED"
    | "COMPLETED"
    | "UNSUPPORTED"
    | (string & {});
}

export const BackfillJob: Schema.Schema<BackfillJob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(Datastream_Error)),
    lastStartTime: Schema.optional(Schema.String),
    lastEndTime: Schema.optional(Schema.String),
    trigger: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackfillJob" });

export interface RetryInfo {
  /** Clients should wait at least this long between retrying the same request. */
  retryDelay?: string;
}

export const RetryInfo: Schema.Schema<RetryInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    retryDelay: Schema.optional(Schema.String),
  }).annotate({ identifier: "RetryInfo" });

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

export interface StreamObject {
  /** Output only. Active errors on the object. */
  errors?: ReadonlyArray<Datastream_Error>;
  /** The latest backfill job that was initiated for the stream object. */
  backfillJob?: BackfillJob;
  /** Output only. The object's name. */
  name?: string;
  /** Required. Display name. */
  displayName?: string;
  /** Output only. The creation time of the object. */
  createTime?: string;
  /** Output only. The last update time of the object. */
  updateTime?: string;
  /** The object identifier in the data source. */
  sourceObject?: SourceObjectIdentifier;
}

export const StreamObject: Schema.Schema<StreamObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(Datastream_Error)),
    backfillJob: Schema.optional(BackfillJob),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    sourceObject: Schema.optional(SourceObjectIdentifier),
  }).annotate({ identifier: "StreamObject" });

export interface StopBackfillJobResponse {
  /** The stream object resource the backfill job was stopped for. */
  object?: StreamObject;
}

export const StopBackfillJobResponse: Schema.Schema<StopBackfillJobResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(StreamObject),
  }).annotate({ identifier: "StopBackfillJobResponse" });

export interface ResourceInfo {
  /** A name for the type of resource being accessed, e.g. "sql table", "cloud storage bucket", "file", "Google calendar"; or the type URL of the resource: e.g. "type.googleapis.com/google.pubsub.v1.Topic". */
  resourceType?: string;
  /** The name of the resource being accessed. For example, a shared calendar name: "example.com_4fghdhgsrgh@group.calendar.google.com", if the current error is google.rpc.Code.PERMISSION_DENIED. */
  resourceName?: string;
  /** Describes what error is encountered when accessing this resource. For example, updating a cloud project may require the `writer` permission on the developer console project. */
  description?: string;
  /** The owner of the resource (optional). For example, "user:" or "project:". */
  owner?: string;
}

export const ResourceInfo: Schema.Schema<ResourceInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceType: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    owner: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceInfo" });

export interface ErrorInfo {
  /** Additional structured details about this error. Keys must match a regular expression of `a-z+` but should ideally be lowerCamelCase. Also, they must be limited to 64 characters in length. When identifying the current value of an exceeded limit, the units should be contained in the key, not the value. For example, rather than `{"instanceLimit": "100/request"}`, should be returned as, `{"instanceLimitPerRequest": "100"}`, if the client exceeds the number of instances that can be created in a single (batch) request. */
  metadata?: Record<string, string>;
  /** The reason of the error. This is a constant value that identifies the proximate cause of the error. Error reasons are unique within a particular domain of errors. This should be at most 63 characters and match a regular expression of `A-Z+[A-Z0-9]`, which represents UPPER_SNAKE_CASE. */
  reason?: string;
  /** The logical grouping to which the "reason" belongs. The error domain is typically the registered service name of the tool or product that generates the error. Example: "pubsub.googleapis.com". If the error is generated by some common infrastructure, the error domain must be a globally unique value that identifies the infrastructure. For Google API infrastructure, the error domain is "googleapis.com". */
  domain?: string;
}

export const ErrorInfo: Schema.Schema<ErrorInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
  }).annotate({ identifier: "ErrorInfo" });

export interface ListStreamObjectsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. */
  nextPageToken?: string;
  /** List of stream objects. */
  streamObjects?: ReadonlyArray<StreamObject>;
}

export const ListStreamObjectsResponse: Schema.Schema<ListStreamObjectsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    streamObjects: Schema.optional(Schema.Array(StreamObject)),
  }).annotate({ identifier: "ListStreamObjectsResponse" });

export interface DiscoverConnectionProfileResponse {
  /** Enriched Oracle RDBMS object. */
  oracleRdbms?: OracleRdbms;
  /** Enriched MySQL RDBMS object. */
  mysqlRdbms?: MysqlRdbms;
}

export const DiscoverConnectionProfileResponse: Schema.Schema<DiscoverConnectionProfileResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oracleRdbms: Schema.optional(OracleRdbms),
    mysqlRdbms: Schema.optional(MysqlRdbms),
  }).annotate({ identifier: "DiscoverConnectionProfileResponse" });

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

export interface FetchErrorsResponse {
  /** The list of errors on the Stream. */
  errors?: ReadonlyArray<Datastream_Error>;
}

export const FetchErrorsResponse: Schema.Schema<FetchErrorsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(Datastream_Error)),
  }).annotate({ identifier: "FetchErrorsResponse" });

export interface ListPrivateConnectionsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** List of private connectivity configurations. */
  privateConnections?: ReadonlyArray<PrivateConnection>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListPrivateConnectionsResponse: Schema.Schema<ListPrivateConnectionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    privateConnections: Schema.optional(Schema.Array(PrivateConnection)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListPrivateConnectionsResponse" });

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

export interface StartBackfillJobResponse {
  /** The stream object resource a backfill job was started for. */
  object?: StreamObject;
}

export const StartBackfillJobResponse: Schema.Schema<StartBackfillJobResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(StreamObject),
  }).annotate({ identifier: "StartBackfillJobResponse" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
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

export interface FetchStaticIpsProjectsLocationsRequest {
  /** A page token, received from a previous `ListStaticIps` call. will likely not be specified. */
  pageToken?: string;
  /** Required. The name resource of the Response type. Must be in the format `projects/* /locations/*`. */
  name: string;
  /** Maximum number of Ips to return, will likely not be specified. */
  pageSize?: number;
}

export const FetchStaticIpsProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}:fetchStaticIps" }),
    svc,
  ) as unknown as Schema.Schema<FetchStaticIpsProjectsLocationsRequest>;

export type FetchStaticIpsProjectsLocationsResponse = FetchStaticIpsResponse;
export const FetchStaticIpsProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchStaticIpsResponse;

export type FetchStaticIpsProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** The FetchStaticIps API call exposes the static IP addresses used by Datastream. */
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

export interface ListProjectsLocationsRequest {
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}/locations" }),
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
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
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

export interface DeleteProjectsLocationsStreamsRequest {
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The name of the stream resource to delete. */
  name: string;
}

export const DeleteProjectsLocationsStreamsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsStreamsRequest>;

export type DeleteProjectsLocationsStreamsResponse = Operation;
export const DeleteProjectsLocationsStreamsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsStreamsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Use this method to delete a stream. */
export const deleteProjectsLocationsStreams: API.OperationMethod<
  DeleteProjectsLocationsStreamsRequest,
  DeleteProjectsLocationsStreamsResponse,
  DeleteProjectsLocationsStreamsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsStreamsRequest,
  output: DeleteProjectsLocationsStreamsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsStreamsRequest {
  /** Required. The stream identifier. */
  streamId?: string;
  /** Optional. Create the stream without validating it. */
  force?: boolean;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent that owns the collection of streams. */
  parent: string;
  /** Optional. Only validate the stream, but do not create any resources. The default is false. */
  validateOnly?: boolean;
  /** Request body */
  body?: Stream;
}

export const CreateProjectsLocationsStreamsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    streamId: Schema.optional(Schema.String).pipe(T.HttpQuery("streamId")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Stream).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/streams",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsStreamsRequest>;

export type CreateProjectsLocationsStreamsResponse = Operation;
export const CreateProjectsLocationsStreamsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsStreamsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Use this method to create a stream. */
export const createProjectsLocationsStreams: API.OperationMethod<
  CreateProjectsLocationsStreamsRequest,
  CreateProjectsLocationsStreamsResponse,
  CreateProjectsLocationsStreamsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsStreamsRequest,
  output: CreateProjectsLocationsStreamsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsStreamsRequest {
  /** Required. The name of the stream resource to get. */
  name: string;
}

export const GetProjectsLocationsStreamsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsStreamsRequest>;

export type GetProjectsLocationsStreamsResponse = Stream;
export const GetProjectsLocationsStreamsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Stream;

export type GetProjectsLocationsStreamsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Use this method to get details about a stream. */
export const getProjectsLocationsStreams: API.OperationMethod<
  GetProjectsLocationsStreamsRequest,
  GetProjectsLocationsStreamsResponse,
  GetProjectsLocationsStreamsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsStreamsRequest,
  output: GetProjectsLocationsStreamsResponse,
  errors: [NotFound, Forbidden],
}));

export interface FetchErrorsProjectsLocationsStreamsRequest {
  /** Name of the Stream resource for which to fetch any errors. */
  stream: string;
  /** Request body */
  body?: FetchErrorsRequest;
}

export const FetchErrorsProjectsLocationsStreamsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stream: Schema.String.pipe(T.HttpPath("stream")),
    body: Schema.optional(FetchErrorsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+stream}:fetchErrors",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<FetchErrorsProjectsLocationsStreamsRequest>;

export type FetchErrorsProjectsLocationsStreamsResponse = Operation;
export const FetchErrorsProjectsLocationsStreamsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type FetchErrorsProjectsLocationsStreamsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Use this method to fetch any errors associated with a stream. */
export const fetchErrorsProjectsLocationsStreams: API.OperationMethod<
  FetchErrorsProjectsLocationsStreamsRequest,
  FetchErrorsProjectsLocationsStreamsResponse,
  FetchErrorsProjectsLocationsStreamsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchErrorsProjectsLocationsStreamsRequest,
  output: FetchErrorsProjectsLocationsStreamsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsStreamsRequest {
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. Execute the update without validating it. */
  force?: boolean;
  /** Output only. The stream's name. */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the stream resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Optional. Only validate the stream with the changes, without actually updating it. The default is false. */
  validateOnly?: boolean;
  /** Request body */
  body?: Stream;
}

export const PatchProjectsLocationsStreamsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Stream).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsStreamsRequest>;

export type PatchProjectsLocationsStreamsResponse = Operation;
export const PatchProjectsLocationsStreamsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsStreamsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Use this method to update the configuration of a stream. */
export const patchProjectsLocationsStreams: API.OperationMethod<
  PatchProjectsLocationsStreamsRequest,
  PatchProjectsLocationsStreamsResponse,
  PatchProjectsLocationsStreamsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsStreamsRequest,
  output: PatchProjectsLocationsStreamsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsStreamsRequest {
  /** Page token received from a previous `ListStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStreams` must match the call that provided the page token. */
  pageToken?: string;
  /** Filter request. */
  filter?: string;
  /** Required. The parent that owns the collection of streams. */
  parent: string;
  /** Order by fields for the result. */
  orderBy?: string;
  /** Maximum number of streams to return. If unspecified, at most 50 streams will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsStreamsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/streams" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsStreamsRequest>;

export type ListProjectsLocationsStreamsResponse = ListStreamsResponse;
export const ListProjectsLocationsStreamsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListStreamsResponse;

export type ListProjectsLocationsStreamsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Use this method to list streams in a project and location. */
export const listProjectsLocationsStreams: API.PaginatedOperationMethod<
  ListProjectsLocationsStreamsRequest,
  ListProjectsLocationsStreamsResponse,
  ListProjectsLocationsStreamsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsStreamsRequest,
  output: ListProjectsLocationsStreamsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface StopBackfillJobProjectsLocationsStreamsObjectsRequest {
  /** Required. The name of the stream object resource to stop the backfill job for. */
  object: string;
}

export const StopBackfillJobProjectsLocationsStreamsObjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String.pipe(T.HttpPath("object")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+object}:stopBackfillJob",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<StopBackfillJobProjectsLocationsStreamsObjectsRequest>;

export type StopBackfillJobProjectsLocationsStreamsObjectsResponse =
  StopBackfillJobResponse;
export const StopBackfillJobProjectsLocationsStreamsObjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ StopBackfillJobResponse;

export type StopBackfillJobProjectsLocationsStreamsObjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Stops the backfill job for the specified stream object. */
export const stopBackfillJobProjectsLocationsStreamsObjects: API.OperationMethod<
  StopBackfillJobProjectsLocationsStreamsObjectsRequest,
  StopBackfillJobProjectsLocationsStreamsObjectsResponse,
  StopBackfillJobProjectsLocationsStreamsObjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StopBackfillJobProjectsLocationsStreamsObjectsRequest,
  output: StopBackfillJobProjectsLocationsStreamsObjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsStreamsObjectsRequest {
  /** Required. The name of the stream object resource to get. */
  name: string;
}

export const GetProjectsLocationsStreamsObjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsStreamsObjectsRequest>;

export type GetProjectsLocationsStreamsObjectsResponse = StreamObject;
export const GetProjectsLocationsStreamsObjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ StreamObject;

export type GetProjectsLocationsStreamsObjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Use this method to get details about a stream object. */
export const getProjectsLocationsStreamsObjects: API.OperationMethod<
  GetProjectsLocationsStreamsObjectsRequest,
  GetProjectsLocationsStreamsObjectsResponse,
  GetProjectsLocationsStreamsObjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsStreamsObjectsRequest,
  output: GetProjectsLocationsStreamsObjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsStreamsObjectsRequest {
  /** Maximum number of objects to return. Default is 50. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent stream that owns the collection of objects. */
  parent: string;
  /** Page token received from a previous `ListStreamObjectsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStreamObjectsRequest` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsStreamsObjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/objects" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsStreamsObjectsRequest>;

export type ListProjectsLocationsStreamsObjectsResponse =
  ListStreamObjectsResponse;
export const ListProjectsLocationsStreamsObjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListStreamObjectsResponse;

export type ListProjectsLocationsStreamsObjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Use this method to list the objects of a specific stream. */
export const listProjectsLocationsStreamsObjects: API.PaginatedOperationMethod<
  ListProjectsLocationsStreamsObjectsRequest,
  ListProjectsLocationsStreamsObjectsResponse,
  ListProjectsLocationsStreamsObjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsStreamsObjectsRequest,
  output: ListProjectsLocationsStreamsObjectsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface StartBackfillJobProjectsLocationsStreamsObjectsRequest {
  /** Required. The name of the stream object resource to start a backfill job for. */
  object: string;
}

export const StartBackfillJobProjectsLocationsStreamsObjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String.pipe(T.HttpPath("object")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+object}:startBackfillJob",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<StartBackfillJobProjectsLocationsStreamsObjectsRequest>;

export type StartBackfillJobProjectsLocationsStreamsObjectsResponse =
  StartBackfillJobResponse;
export const StartBackfillJobProjectsLocationsStreamsObjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ StartBackfillJobResponse;

export type StartBackfillJobProjectsLocationsStreamsObjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts backfill job for the specified stream object. */
export const startBackfillJobProjectsLocationsStreamsObjects: API.OperationMethod<
  StartBackfillJobProjectsLocationsStreamsObjectsRequest,
  StartBackfillJobProjectsLocationsStreamsObjectsResponse,
  StartBackfillJobProjectsLocationsStreamsObjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartBackfillJobProjectsLocationsStreamsObjectsRequest,
  output: StartBackfillJobProjectsLocationsStreamsObjectsResponse,
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
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
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
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}/operations" }),
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
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
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
    T.Http({ method: "POST", path: "v1alpha1/{+name}:cancel", hasBody: true }),
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

export interface DeleteProjectsLocationsConnectionProfilesRequest {
  /** Required. The name of the connection profile resource to delete. */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsConnectionProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
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

/** Use this method to delete a connection profile.. */
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

export interface DiscoverProjectsLocationsConnectionProfilesRequest {
  /** Required. The parent resource of the ConnectionProfile type. Must be in the format `projects/* /locations/*`. */
  parent: string;
  /** Request body */
  body?: DiscoverConnectionProfileRequest;
}

export const DiscoverProjectsLocationsConnectionProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(DiscoverConnectionProfileRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/connectionProfiles:discover",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DiscoverProjectsLocationsConnectionProfilesRequest>;

export type DiscoverProjectsLocationsConnectionProfilesResponse =
  DiscoverConnectionProfileResponse;
export const DiscoverProjectsLocationsConnectionProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DiscoverConnectionProfileResponse;

export type DiscoverProjectsLocationsConnectionProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects under a parent data object that's optionally supplied in the request. */
export const discoverProjectsLocationsConnectionProfiles: API.OperationMethod<
  DiscoverProjectsLocationsConnectionProfilesRequest,
  DiscoverProjectsLocationsConnectionProfilesResponse,
  DiscoverProjectsLocationsConnectionProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DiscoverProjectsLocationsConnectionProfilesRequest,
  output: DiscoverProjectsLocationsConnectionProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsConnectionProfilesRequest {
  /** Required. The name of the connection profile resource to get. */
  name: string;
}

export const GetProjectsLocationsConnectionProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConnectionProfilesRequest>;

export type GetProjectsLocationsConnectionProfilesResponse = ConnectionProfile;
export const GetProjectsLocationsConnectionProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ConnectionProfile;

export type GetProjectsLocationsConnectionProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Use this method to get details about a connection profile. */
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

export interface CreateProjectsLocationsConnectionProfilesRequest {
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent that owns the collection of ConnectionProfiles. */
  parent: string;
  /** Required. The connection profile identifier. */
  connectionProfileId?: string;
  /** Request body */
  body?: ConnectionProfile;
}

export const CreateProjectsLocationsConnectionProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    connectionProfileId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("connectionProfileId"),
    ),
    body: Schema.optional(ConnectionProfile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/connectionProfiles",
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

/** Use this method to create a connection profile in a project and location. */
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

export interface ListProjectsLocationsConnectionProfilesRequest {
  /** Required. The parent that owns the collection of connection profiles. */
  parent: string;
  /** Order by fields for the result. */
  orderBy?: string;
  /** Maximum number of connection profiles to return. If unspecified, at most 50 connection profiles will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Page token received from a previous `ListConnectionProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectionProfiles` must match the call that provided the page token. */
  pageToken?: string;
  /** Filter request. */
  filter?: string;
}

export const ListProjectsLocationsConnectionProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/connectionProfiles" }),
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

/** Use this method to list connection profiles created in a project and location. */
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

export interface PatchProjectsLocationsConnectionProfilesRequest {
  /** Output only. The resource's name. */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the ConnectionProfile resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Optional. Only validate the connection profile, but do not update any resources. The default is false. */
  validateOnly?: boolean;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: ConnectionProfile;
}

export const PatchProjectsLocationsConnectionProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(ConnectionProfile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
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

/** Use this method to update the parameters of a connection profile. */
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

export interface CreateProjectsLocationsPrivateConnectionsRequest {
  /** Required. The private connectivity identifier. */
  privateConnectionId?: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent that owns the collection of PrivateConnections. */
  parent: string;
  /** Request body */
  body?: PrivateConnection;
}

export const CreateProjectsLocationsPrivateConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateConnectionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("privateConnectionId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(PrivateConnection).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/privateConnections",
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

/** Use this method to create a private connectivity configuration. */
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

export interface GetProjectsLocationsPrivateConnectionsRequest {
  /** Required. The name of the private connectivity configuration to get. */
  name: string;
}

export const GetProjectsLocationsPrivateConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsPrivateConnectionsRequest>;

export type GetProjectsLocationsPrivateConnectionsResponse = PrivateConnection;
export const GetProjectsLocationsPrivateConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PrivateConnection;

export type GetProjectsLocationsPrivateConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Use this method to get details about a private connectivity configuration. */
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
  /** Maximum number of private connectivity configurations to return. If unspecified, at most 50 private connectivity configurations that will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent that owns the collection of private connectivity configurations. */
  parent: string;
  /** Order by fields for the result. */
  orderBy?: string;
  /** Filter request. */
  filter?: string;
  /** Page token received from a previous `ListPrivateConnections` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateConnections` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsPrivateConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/privateConnections" }),
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

/** Use this method to list private connectivity configurations in a project and location. */
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
  /** Required. The name of the private connectivity configuration to delete. */
  name: string;
  /** Optional. If set to true, any child routes that belong to this PrivateConnection will also be deleted. */
  force?: boolean;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsPrivateConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
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

/** Use this method to delete a private connectivity configuration. */
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

export interface CreateProjectsLocationsPrivateConnectionsRoutesRequest {
  /** Required. The parent that owns the collection of Routes. */
  parent: string;
  /** Required. The Route identifier. */
  routeId?: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Route;
}

export const CreateProjectsLocationsPrivateConnectionsRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    routeId: Schema.optional(Schema.String).pipe(T.HttpQuery("routeId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Route).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/routes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsPrivateConnectionsRoutesRequest>;

export type CreateProjectsLocationsPrivateConnectionsRoutesResponse = Operation;
export const CreateProjectsLocationsPrivateConnectionsRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsPrivateConnectionsRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Use this method to create a route for a private connectivity in a project and location. */
export const createProjectsLocationsPrivateConnectionsRoutes: API.OperationMethod<
  CreateProjectsLocationsPrivateConnectionsRoutesRequest,
  CreateProjectsLocationsPrivateConnectionsRoutesResponse,
  CreateProjectsLocationsPrivateConnectionsRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsPrivateConnectionsRoutesRequest,
  output: CreateProjectsLocationsPrivateConnectionsRoutesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsPrivateConnectionsRoutesRequest {
  /** Required. The name of the Route resource to get. */
  name: string;
}

export const GetProjectsLocationsPrivateConnectionsRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsPrivateConnectionsRoutesRequest>;

export type GetProjectsLocationsPrivateConnectionsRoutesResponse = Route;
export const GetProjectsLocationsPrivateConnectionsRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Route;

export type GetProjectsLocationsPrivateConnectionsRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Use this method to get details about a route. */
export const getProjectsLocationsPrivateConnectionsRoutes: API.OperationMethod<
  GetProjectsLocationsPrivateConnectionsRoutesRequest,
  GetProjectsLocationsPrivateConnectionsRoutesResponse,
  GetProjectsLocationsPrivateConnectionsRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsPrivateConnectionsRoutesRequest,
  output: GetProjectsLocationsPrivateConnectionsRoutesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsPrivateConnectionsRoutesRequest {
  /** Required. The parent that owns the collection of Routess. */
  parent: string;
  /** Order by fields for the result. */
  orderBy?: string;
  /** Maximum number of Routes to return. The service may return fewer than this value. If unspecified, at most 50 Routes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Page token received from a previous `ListRoutes` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRoutes` must match the call that provided the page token. */
  pageToken?: string;
  /** Filter request. */
  filter?: string;
}

export const ListProjectsLocationsPrivateConnectionsRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/routes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsPrivateConnectionsRoutesRequest>;

export type ListProjectsLocationsPrivateConnectionsRoutesResponse =
  ListRoutesResponse;
export const ListProjectsLocationsPrivateConnectionsRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListRoutesResponse;

export type ListProjectsLocationsPrivateConnectionsRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Use this method to list routes created for a private connectivity in a project and location. */
export const listProjectsLocationsPrivateConnectionsRoutes: API.PaginatedOperationMethod<
  ListProjectsLocationsPrivateConnectionsRoutesRequest,
  ListProjectsLocationsPrivateConnectionsRoutesResponse,
  ListProjectsLocationsPrivateConnectionsRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsPrivateConnectionsRoutesRequest,
  output: ListProjectsLocationsPrivateConnectionsRoutesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsPrivateConnectionsRoutesRequest {
  /** Required. The name of the Route resource to delete. */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsPrivateConnectionsRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsPrivateConnectionsRoutesRequest>;

export type DeleteProjectsLocationsPrivateConnectionsRoutesResponse = Operation;
export const DeleteProjectsLocationsPrivateConnectionsRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsPrivateConnectionsRoutesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Use this method to delete a route. */
export const deleteProjectsLocationsPrivateConnectionsRoutes: API.OperationMethod<
  DeleteProjectsLocationsPrivateConnectionsRoutesRequest,
  DeleteProjectsLocationsPrivateConnectionsRoutesResponse,
  DeleteProjectsLocationsPrivateConnectionsRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsPrivateConnectionsRoutesRequest,
  output: DeleteProjectsLocationsPrivateConnectionsRoutesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
