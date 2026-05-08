// ==========================================================================
// Datastream API (datastream v1)
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
  version: "v1",
  rootUrl: "https://datastream.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface OracleSslConfig {
  /** Optional. The distinguished name (DN) mentioned in the server certificate. This corresponds to SSL_SERVER_CERT_DN sqlnet parameter. Refer https://docs.oracle.com/en/database/oracle/oracle-database/19/netrf/local-naming-parameters-in-tns-ora-file.html#GUID-70AB0695-A9AA-4A94-B141-4C605236EEB7 If this field is not provided, the DN matching is not enforced. */
  serverCertificateDistinguishedName?: string;
  /** Output only. Indicates whether the ca_certificate field has been set for this Connection-Profile. */
  caCertificateSet?: boolean;
  /** Input only. PEM-encoded certificate of the CA that signed the source database server's certificate. */
  caCertificate?: string;
}

export const OracleSslConfig: Schema.Schema<OracleSslConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serverCertificateDistinguishedName: Schema.optional(Schema.String),
    caCertificateSet: Schema.optional(Schema.Boolean),
    caCertificate: Schema.optional(Schema.String),
  }).annotate({ identifier: "OracleSslConfig" });

export interface OracleAsmConfig {
  /** Required. Username for the Oracle ASM connection. */
  username?: string;
  /** Optional. A reference to a Secret Manager resource name storing the Oracle ASM connection password. Mutually exclusive with the `password` field. */
  secretManagerStoredPassword?: string;
  /** Required. Hostname for the Oracle ASM connection. */
  hostname?: string;
  /** Optional. Connection string attributes */
  connectionAttributes?: Record<string, string>;
  /** Required. Port for the Oracle ASM connection. */
  port?: number;
  /** Optional. Password for the Oracle ASM connection. Mutually exclusive with the `secret_manager_stored_password` field. */
  password?: string;
  /** Required. ASM service name for the Oracle ASM connection. */
  asmService?: string;
  /** Optional. SSL configuration for the Oracle connection. */
  oracleSslConfig?: OracleSslConfig;
}

export const OracleAsmConfig: Schema.Schema<OracleAsmConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.optional(Schema.String),
    secretManagerStoredPassword: Schema.optional(Schema.String),
    hostname: Schema.optional(Schema.String),
    connectionAttributes: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    port: Schema.optional(Schema.Number),
    password: Schema.optional(Schema.String),
    asmService: Schema.optional(Schema.String),
    oracleSslConfig: Schema.optional(OracleSslConfig),
  }).annotate({ identifier: "OracleAsmConfig" });

export interface OracleProfile {
  /** Port for the Oracle connection, default value is 1521. */
  port?: number;
  /** Required. Username for the Oracle connection. */
  username?: string;
  /** Optional. A reference to a Secret Manager resource name storing the Oracle connection password. Mutually exclusive with the `password` field. */
  secretManagerStoredPassword?: string;
  /** Optional. Configuration for Oracle ASM connection. */
  oracleAsmConfig?: OracleAsmConfig;
  /** Optional. Password for the Oracle connection. Mutually exclusive with the `secret_manager_stored_password` field. */
  password?: string;
  /** Optional. SSL configuration for the Oracle connection. */
  oracleSslConfig?: OracleSslConfig;
  /** Required. Database for the Oracle connection. */
  databaseService?: string;
  /** Required. Hostname for the Oracle connection. */
  hostname?: string;
  /** Connection string attributes */
  connectionAttributes?: Record<string, string>;
}

export const OracleProfile: Schema.Schema<OracleProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port: Schema.optional(Schema.Number),
    username: Schema.optional(Schema.String),
    secretManagerStoredPassword: Schema.optional(Schema.String),
    oracleAsmConfig: Schema.optional(OracleAsmConfig),
    password: Schema.optional(Schema.String),
    oracleSslConfig: Schema.optional(OracleSslConfig),
    databaseService: Schema.optional(Schema.String),
    hostname: Schema.optional(Schema.String),
    connectionAttributes: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "OracleProfile" });

export interface MongodbField {
  /** The field name. */
  field?: string;
}

export const MongodbField: Schema.Schema<MongodbField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    field: Schema.optional(Schema.String),
  }).annotate({ identifier: "MongodbField" });

export interface MongodbCollection {
  /** Fields in the collection. */
  fields?: ReadonlyArray<MongodbField>;
  /** The collection name. */
  collection?: string;
}

export const MongodbCollection: Schema.Schema<MongodbCollection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fields: Schema.optional(Schema.Array(MongodbField)),
    collection: Schema.optional(Schema.String),
  }).annotate({ identifier: "MongodbCollection" });

export interface MongodbDatabase {
  /** The database name. */
  database?: string;
  /** Collections in the database. */
  collections?: ReadonlyArray<MongodbCollection>;
}

export const MongodbDatabase: Schema.Schema<MongodbDatabase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    database: Schema.optional(Schema.String),
    collections: Schema.optional(Schema.Array(MongodbCollection)),
  }).annotate({ identifier: "MongodbDatabase" });

export interface MongodbCluster {
  /** MongoDB databases in the cluster. */
  databases?: ReadonlyArray<MongodbDatabase>;
}

export const MongodbCluster: Schema.Schema<MongodbCluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databases: Schema.optional(Schema.Array(MongodbDatabase)),
  }).annotate({ identifier: "MongodbCluster" });

export interface MongodbSourceConfig {
  /** The MongoDB collections to include in the stream. */
  includeObjects?: MongodbCluster;
  /** Optional. Maximum number of concurrent backfill tasks. The number should be non-negative and less than or equal to 50. If not set (or set to 0), the system's default value is used */
  maxConcurrentBackfillTasks?: number;
  /** The MongoDB collections to exclude from the stream. */
  excludeObjects?: MongodbCluster;
  /** Optional. MongoDB JSON mode to use for the stream. */
  jsonMode?:
    | "MONGODB_JSON_MODE_UNSPECIFIED"
    | "STRICT"
    | "CANONICAL"
    | (string & {});
}

export const MongodbSourceConfig: Schema.Schema<MongodbSourceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeObjects: Schema.optional(MongodbCluster),
    maxConcurrentBackfillTasks: Schema.optional(Schema.Number),
    excludeObjects: Schema.optional(MongodbCluster),
    jsonMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "MongodbSourceConfig" });

export interface MysqlObjectIdentifier {
  /** Required. The table name. */
  table?: string;
  /** Required. The database name. */
  database?: string;
}

export const MysqlObjectIdentifier: Schema.Schema<MysqlObjectIdentifier> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    table: Schema.optional(Schema.String),
    database: Schema.optional(Schema.String),
  }).annotate({ identifier: "MysqlObjectIdentifier" });

export interface PostgresqlObjectIdentifier {
  /** Required. The schema name. */
  schema?: string;
  /** Required. The table name. */
  table?: string;
}

export const PostgresqlObjectIdentifier: Schema.Schema<PostgresqlObjectIdentifier> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schema: Schema.optional(Schema.String),
    table: Schema.optional(Schema.String),
  }).annotate({ identifier: "PostgresqlObjectIdentifier" });

export interface SpannerObjectIdentifier {
  /** Optional. The schema name. */
  schema?: string;
  /** Required. The table name. */
  table?: string;
}

export const SpannerObjectIdentifier: Schema.Schema<SpannerObjectIdentifier> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schema: Schema.optional(Schema.String),
    table: Schema.optional(Schema.String),
  }).annotate({ identifier: "SpannerObjectIdentifier" });

export interface MongodbObjectIdentifier {
  /** Required. The database name. */
  database?: string;
  /** Required. The collection name. */
  collection?: string;
}

export const MongodbObjectIdentifier: Schema.Schema<MongodbObjectIdentifier> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    database: Schema.optional(Schema.String),
    collection: Schema.optional(Schema.String),
  }).annotate({ identifier: "MongodbObjectIdentifier" });

export interface SalesforceObjectIdentifier {
  /** Required. The object name. */
  objectName?: string;
}

export const SalesforceObjectIdentifier: Schema.Schema<SalesforceObjectIdentifier> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SalesforceObjectIdentifier" });

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

export interface SqlServerObjectIdentifier {
  /** Required. The schema name. */
  schema?: string;
  /** Required. The table name. */
  table?: string;
}

export const SqlServerObjectIdentifier: Schema.Schema<SqlServerObjectIdentifier> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schema: Schema.optional(Schema.String),
    table: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlServerObjectIdentifier" });

export interface SourceObjectIdentifier {
  /** Mysql data source object identifier. */
  mysqlIdentifier?: MysqlObjectIdentifier;
  /** PostgreSQL data source object identifier. */
  postgresqlIdentifier?: PostgresqlObjectIdentifier;
  /** Spanner data source object identifier. */
  spannerIdentifier?: SpannerObjectIdentifier;
  /** MongoDB data source object identifier. */
  mongodbIdentifier?: MongodbObjectIdentifier;
  /** Salesforce data source object identifier. */
  salesforceIdentifier?: SalesforceObjectIdentifier;
  /** Oracle data source object identifier. */
  oracleIdentifier?: OracleObjectIdentifier;
  /** SQLServer data source object identifier. */
  sqlServerIdentifier?: SqlServerObjectIdentifier;
}

export const SourceObjectIdentifier: Schema.Schema<SourceObjectIdentifier> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mysqlIdentifier: Schema.optional(MysqlObjectIdentifier),
    postgresqlIdentifier: Schema.optional(PostgresqlObjectIdentifier),
    spannerIdentifier: Schema.optional(SpannerObjectIdentifier),
    mongodbIdentifier: Schema.optional(MongodbObjectIdentifier),
    salesforceIdentifier: Schema.optional(SalesforceObjectIdentifier),
    oracleIdentifier: Schema.optional(OracleObjectIdentifier),
    sqlServerIdentifier: Schema.optional(SqlServerObjectIdentifier),
  }).annotate({ identifier: "SourceObjectIdentifier" });

export interface LookupStreamObjectRequest {
  /** Required. The source object identifier which maps to the stream object. */
  sourceObjectIdentifier?: SourceObjectIdentifier;
}

export const LookupStreamObjectRequest: Schema.Schema<LookupStreamObjectRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceObjectIdentifier: Schema.optional(SourceObjectIdentifier),
  }).annotate({ identifier: "LookupStreamObjectRequest" });

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
  /** A path that leads to a field in the request body. The value will be a sequence of dot-separated identifiers that identify a protocol buffer field. Consider the following: message CreateContactRequest { message EmailAddress { enum Type { TYPE_UNSPECIFIED = 0; HOME = 1; WORK = 2; } optional string email = 1; repeated EmailType type = 2; } string full_name = 1; repeated EmailAddress email_addresses = 2; } In this example, in proto `field` could take one of the following values: * `full_name` for a violation in the `full_name` value * `email_addresses[0].email` for a violation in the `email` field of the first `email_addresses` message * `email_addresses[2].type[1]` for a violation in the second `type` value in the third `email_addresses` message. In JSON, the same values are represented as: * `fullName` for a violation in the `fullName` value * `emailAddresses[0].email` for a violation in the `email` field of the first `emailAddresses` message * `emailAddresses[2].type[1]` for a violation in the second `type` value in the third `emailAddresses` message. */
  field?: string;
  /** A description of why the request element is bad. */
  description?: string;
  /** Provides a localized error message for field-level errors that is safe to return to the API consumer. */
  localizedMessage?: LocalizedMessage;
  /** The reason of the field-level error. This is a constant value that identifies the proximate cause of the field-level error. It should uniquely identify the type of the FieldViolation within the scope of the google.rpc.ErrorInfo.domain. This should be at most 63 characters and match a regular expression of `A-Z+[A-Z0-9]`, which represents UPPER_SNAKE_CASE. */
  reason?: string;
}

export const FieldViolation: Schema.Schema<FieldViolation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    field: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    localizedMessage: Schema.optional(LocalizedMessage),
    reason: Schema.optional(Schema.String),
  }).annotate({ identifier: "FieldViolation" });

export interface Datastream_BadRequest {
  /** Describes all violations in a client request. */
  fieldViolations?: ReadonlyArray<FieldViolation>;
}

export const Datastream_BadRequest: Schema.Schema<Datastream_BadRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldViolations: Schema.optional(Schema.Array(FieldViolation)),
  }).annotate({ identifier: "Datastream_BadRequest" });

export interface SalesforceField {
  /** The data type. */
  dataType?: string;
  /** Indicates whether the field can accept nil values. */
  nillable?: boolean;
  /** The field name. */
  name?: string;
}

export const SalesforceField: Schema.Schema<SalesforceField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataType: Schema.optional(Schema.String),
    nillable: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "SalesforceField" });

export interface MysqlColumn {
  /** Column length. */
  length?: number;
  /** The MySQL data type. Full data types list can be found here: https://dev.mysql.com/doc/refman/8.0/en/data-types.html */
  dataType?: string;
  /** Column scale. */
  scale?: number;
  /** The ordinal position of the column in the table. */
  ordinalPosition?: number;
  /** Column precision. */
  precision?: number;
  /** Whether or not the column represents a primary key. */
  primaryKey?: boolean;
  /** The column name. */
  column?: string;
  /** Column collation. */
  collation?: string;
  /** Whether or not the column can accept a null value. */
  nullable?: boolean;
}

export const MysqlColumn: Schema.Schema<MysqlColumn> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    length: Schema.optional(Schema.Number),
    dataType: Schema.optional(Schema.String),
    scale: Schema.optional(Schema.Number),
    ordinalPosition: Schema.optional(Schema.Number),
    precision: Schema.optional(Schema.Number),
    primaryKey: Schema.optional(Schema.Boolean),
    column: Schema.optional(Schema.String),
    collation: Schema.optional(Schema.String),
    nullable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "MysqlColumn" });

export interface MysqlTable {
  /** The table name. */
  table?: string;
  /** MySQL columns in the database. When unspecified as part of include/exclude objects, includes/excludes everything. */
  mysqlColumns?: ReadonlyArray<MysqlColumn>;
}

export const MysqlTable: Schema.Schema<MysqlTable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    table: Schema.optional(Schema.String),
    mysqlColumns: Schema.optional(Schema.Array(MysqlColumn)),
  }).annotate({ identifier: "MysqlTable" });

export interface MysqlDatabase {
  /** Tables in the database. */
  mysqlTables?: ReadonlyArray<MysqlTable>;
  /** The database name. */
  database?: string;
}

export const MysqlDatabase: Schema.Schema<MysqlDatabase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mysqlTables: Schema.optional(Schema.Array(MysqlTable)),
    database: Schema.optional(Schema.String),
  }).annotate({ identifier: "MysqlDatabase" });

export interface MysqlRdbms {
  /** Mysql databases on the server */
  mysqlDatabases?: ReadonlyArray<MysqlDatabase>;
}

export const MysqlRdbms: Schema.Schema<MysqlRdbms> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mysqlDatabases: Schema.optional(Schema.Array(MysqlDatabase)),
  }).annotate({ identifier: "MysqlRdbms" });

export interface Gtid {}

export const Gtid: Schema.Schema<Gtid> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Gtid",
  });

export interface BinaryLogPosition {}

export const BinaryLogPosition: Schema.Schema<BinaryLogPosition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "BinaryLogPosition",
  });

export interface MysqlSourceConfig {
  /** The MySQL objects to exclude from the stream. */
  excludeObjects?: MysqlRdbms;
  /** Use GTID based replication. */
  gtid?: Gtid;
  /** The MySQL objects to retrieve from the source. */
  includeObjects?: MysqlRdbms;
  /** Maximum number of concurrent CDC tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used. */
  maxConcurrentCdcTasks?: number;
  /** Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used. */
  maxConcurrentBackfillTasks?: number;
  /** Use Binary log position based replication. */
  binaryLogPosition?: BinaryLogPosition;
}

export const MysqlSourceConfig: Schema.Schema<MysqlSourceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    excludeObjects: Schema.optional(MysqlRdbms),
    gtid: Schema.optional(Gtid),
    includeObjects: Schema.optional(MysqlRdbms),
    maxConcurrentCdcTasks: Schema.optional(Schema.Number),
    maxConcurrentBackfillTasks: Schema.optional(Schema.Number),
    binaryLogPosition: Schema.optional(BinaryLogPosition),
  }).annotate({ identifier: "MysqlSourceConfig" });

export interface SpannerColumn {
  /** Required. The column name. */
  column?: string;
  /** Optional. Spanner data type. */
  dataType?: string;
  /** Optional. The ordinal position of the column in the table. */
  ordinalPosition?: string;
  /** Optional. Whether or not the column is a primary key. */
  isPrimaryKey?: boolean;
}

export const SpannerColumn: Schema.Schema<SpannerColumn> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    column: Schema.optional(Schema.String),
    dataType: Schema.optional(Schema.String),
    ordinalPosition: Schema.optional(Schema.String),
    isPrimaryKey: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SpannerColumn" });

export interface SpannerTable {
  /** Optional. Spanner columns in the table. */
  columns?: ReadonlyArray<SpannerColumn>;
  /** Required. The table name. */
  table?: string;
}

export const SpannerTable: Schema.Schema<SpannerTable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    columns: Schema.optional(Schema.Array(SpannerColumn)),
    table: Schema.optional(Schema.String),
  }).annotate({ identifier: "SpannerTable" });

export interface SpannerSchema {
  /** Required. The schema name. */
  schema?: string;
  /** Optional. Spanner tables in the schema. */
  tables?: ReadonlyArray<SpannerTable>;
}

export const SpannerSchema: Schema.Schema<SpannerSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schema: Schema.optional(Schema.String),
    tables: Schema.optional(Schema.Array(SpannerTable)),
  }).annotate({ identifier: "SpannerSchema" });

export interface SpannerDatabase {
  /** Optional. Spanner schemas in the database. */
  schemas?: ReadonlyArray<SpannerSchema>;
}

export const SpannerDatabase: Schema.Schema<SpannerDatabase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schemas: Schema.optional(Schema.Array(SpannerSchema)),
  }).annotate({ identifier: "SpannerDatabase" });

export interface SpannerSourceConfig {
  /** Optional. Maximum number of concurrent CDC tasks. */
  maxConcurrentCdcTasks?: number;
  /** Optional. Whether to use Data Boost for Spanner backfills. Defaults to false if not set. */
  backfillDataBoostEnabled?: boolean;
  /** Optional. The RPC priority to use for the stream. */
  spannerRpcPriority?:
    | "SPANNER_RPC_PRIORITY_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | (string & {});
  /** Required. Immutable. The change stream name to use for the stream. */
  changeStreamName?: string;
  /** Optional. Maximum number of concurrent backfill tasks. */
  maxConcurrentBackfillTasks?: number;
  /** Optional. The Spanner objects to avoid retrieving. If some objects are both included and excluded, an error will be thrown. */
  excludeObjects?: SpannerDatabase;
  /** Optional. The FGAC role to use for the stream. */
  fgacRole?: string;
  /** Optional. The Spanner objects to retrieve from the data source. If some objects are both included and excluded, an error will be thrown. */
  includeObjects?: SpannerDatabase;
}

export const SpannerSourceConfig: Schema.Schema<SpannerSourceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxConcurrentCdcTasks: Schema.optional(Schema.Number),
    backfillDataBoostEnabled: Schema.optional(Schema.Boolean),
    spannerRpcPriority: Schema.optional(Schema.String),
    changeStreamName: Schema.optional(Schema.String),
    maxConcurrentBackfillTasks: Schema.optional(Schema.Number),
    excludeObjects: Schema.optional(SpannerDatabase),
    fgacRole: Schema.optional(Schema.String),
    includeObjects: Schema.optional(SpannerDatabase),
  }).annotate({ identifier: "SpannerSourceConfig" });

export interface OracleColumn {
  /** Column length. */
  length?: number;
  /** The Oracle data type. */
  dataType?: string;
  /** Column scale. */
  scale?: number;
  /** Column encoding. */
  encoding?: string;
  /** Column precision. */
  precision?: number;
  /** The ordinal position of the column in the table. */
  ordinalPosition?: number;
  /** Whether or not the column represents a primary key. */
  primaryKey?: boolean;
  /** The column name. */
  column?: string;
  /** Whether or not the column can accept a null value. */
  nullable?: boolean;
}

export const OracleColumn: Schema.Schema<OracleColumn> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    length: Schema.optional(Schema.Number),
    dataType: Schema.optional(Schema.String),
    scale: Schema.optional(Schema.Number),
    encoding: Schema.optional(Schema.String),
    precision: Schema.optional(Schema.Number),
    ordinalPosition: Schema.optional(Schema.Number),
    primaryKey: Schema.optional(Schema.Boolean),
    column: Schema.optional(Schema.String),
    nullable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "OracleColumn" });

export interface OracleTable {
  /** Oracle columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything. */
  oracleColumns?: ReadonlyArray<OracleColumn>;
  /** The table name. */
  table?: string;
}

export const OracleTable: Schema.Schema<OracleTable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oracleColumns: Schema.optional(Schema.Array(OracleColumn)),
    table: Schema.optional(Schema.String),
  }).annotate({ identifier: "OracleTable" });

export interface OracleSchema {
  /** The schema name. */
  schema?: string;
  /** Tables in the schema. */
  oracleTables?: ReadonlyArray<OracleTable>;
}

export const OracleSchema: Schema.Schema<OracleSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schema: Schema.optional(Schema.String),
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

export interface StreamLargeObjects {}

export const StreamLargeObjects: Schema.Schema<StreamLargeObjects> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "StreamLargeObjects",
  });

export interface LogMiner {}

export const LogMiner: Schema.Schema<LogMiner> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "LogMiner",
  });

export interface DropLargeObjects {}

export const DropLargeObjects: Schema.Schema<DropLargeObjects> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DropLargeObjects",
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
  /** The Oracle objects to exclude from the stream. */
  excludeObjects?: OracleRdbms;
  /** Stream large object values. */
  streamLargeObjects?: StreamLargeObjects;
  /** Use LogMiner. */
  logMiner?: LogMiner;
  /** The Oracle objects to include in the stream. */
  includeObjects?: OracleRdbms;
  /** Drop large object values. */
  dropLargeObjects?: DropLargeObjects;
  /** Use Binary Log Parser. */
  binaryLogParser?: BinaryLogParser;
  /** Maximum number of concurrent CDC tasks. The number should be non-negative. If not set (or set to 0), the system's default value is used. */
  maxConcurrentCdcTasks?: number;
  /** Maximum number of concurrent backfill tasks. The number should be non-negative. If not set (or set to 0), the system's default value is used. */
  maxConcurrentBackfillTasks?: number;
}

export const OracleSourceConfig: Schema.Schema<OracleSourceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    excludeObjects: Schema.optional(OracleRdbms),
    streamLargeObjects: Schema.optional(StreamLargeObjects),
    logMiner: Schema.optional(LogMiner),
    includeObjects: Schema.optional(OracleRdbms),
    dropLargeObjects: Schema.optional(DropLargeObjects),
    binaryLogParser: Schema.optional(BinaryLogParser),
    maxConcurrentCdcTasks: Schema.optional(Schema.Number),
    maxConcurrentBackfillTasks: Schema.optional(Schema.Number),
  }).annotate({ identifier: "OracleSourceConfig" });

export interface SqlServerColumn {
  /** Whether or not the column can accept a null value. */
  nullable?: boolean;
  /** The column name. */
  column?: string;
  /** Column scale. */
  scale?: number;
  /** Column precision. */
  precision?: number;
  /** The ordinal position of the column in the table. */
  ordinalPosition?: number;
  /** Whether or not the column represents a primary key. */
  primaryKey?: boolean;
  /** Column length. */
  length?: number;
  /** The SQLServer data type. */
  dataType?: string;
}

export const SqlServerColumn: Schema.Schema<SqlServerColumn> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nullable: Schema.optional(Schema.Boolean),
    column: Schema.optional(Schema.String),
    scale: Schema.optional(Schema.Number),
    precision: Schema.optional(Schema.Number),
    ordinalPosition: Schema.optional(Schema.Number),
    primaryKey: Schema.optional(Schema.Boolean),
    length: Schema.optional(Schema.Number),
    dataType: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlServerColumn" });

export interface SqlServerTable {
  /** The table name. */
  table?: string;
  /** SQLServer columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything. */
  columns?: ReadonlyArray<SqlServerColumn>;
}

export const SqlServerTable: Schema.Schema<SqlServerTable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    table: Schema.optional(Schema.String),
    columns: Schema.optional(Schema.Array(SqlServerColumn)),
  }).annotate({ identifier: "SqlServerTable" });

export interface SqlServerSchema {
  /** The schema name. */
  schema?: string;
  /** Tables in the schema. */
  tables?: ReadonlyArray<SqlServerTable>;
}

export const SqlServerSchema: Schema.Schema<SqlServerSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schema: Schema.optional(Schema.String),
    tables: Schema.optional(Schema.Array(SqlServerTable)),
  }).annotate({ identifier: "SqlServerSchema" });

export interface SqlServerRdbms {
  /** SQLServer schemas in the database server. */
  schemas?: ReadonlyArray<SqlServerSchema>;
}

export const SqlServerRdbms: Schema.Schema<SqlServerRdbms> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schemas: Schema.optional(Schema.Array(SqlServerSchema)),
  }).annotate({ identifier: "SqlServerRdbms" });

export interface SqlServerChangeTables {}

export const SqlServerChangeTables: Schema.Schema<SqlServerChangeTables> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SqlServerChangeTables",
  });

export interface SqlServerTransactionLogs {}

export const SqlServerTransactionLogs: Schema.Schema<SqlServerTransactionLogs> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SqlServerTransactionLogs",
  });

export interface SqlServerSourceConfig {
  /** The SQLServer objects to exclude from the stream. */
  excludeObjects?: SqlServerRdbms;
  /** CDC reader reads from change tables. */
  changeTables?: SqlServerChangeTables;
  /** The SQLServer objects to include in the stream. */
  includeObjects?: SqlServerRdbms;
  /** CDC reader reads from transaction logs. */
  transactionLogs?: SqlServerTransactionLogs;
  /** Max concurrent CDC tasks. */
  maxConcurrentCdcTasks?: number;
  /** Max concurrent backfill tasks. */
  maxConcurrentBackfillTasks?: number;
}

export const SqlServerSourceConfig: Schema.Schema<SqlServerSourceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    excludeObjects: Schema.optional(SqlServerRdbms),
    changeTables: Schema.optional(SqlServerChangeTables),
    includeObjects: Schema.optional(SqlServerRdbms),
    transactionLogs: Schema.optional(SqlServerTransactionLogs),
    maxConcurrentCdcTasks: Schema.optional(Schema.Number),
    maxConcurrentBackfillTasks: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SqlServerSourceConfig" });

export interface PostgresqlColumn {
  /** Column scale. */
  scale?: number;
  /** The column name. */
  column?: string;
  /** Whether or not the column can accept a null value. */
  nullable?: boolean;
  /** The PostgreSQL data type. */
  dataType?: string;
  /** Column length. */
  length?: number;
  /** Whether or not the column represents a primary key. */
  primaryKey?: boolean;
  /** Column precision. */
  precision?: number;
  /** The ordinal position of the column in the table. */
  ordinalPosition?: number;
}

export const PostgresqlColumn: Schema.Schema<PostgresqlColumn> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scale: Schema.optional(Schema.Number),
    column: Schema.optional(Schema.String),
    nullable: Schema.optional(Schema.Boolean),
    dataType: Schema.optional(Schema.String),
    length: Schema.optional(Schema.Number),
    primaryKey: Schema.optional(Schema.Boolean),
    precision: Schema.optional(Schema.Number),
    ordinalPosition: Schema.optional(Schema.Number),
  }).annotate({ identifier: "PostgresqlColumn" });

export interface PostgresqlTable {
  /** The table name. */
  table?: string;
  /** PostgreSQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything. */
  postgresqlColumns?: ReadonlyArray<PostgresqlColumn>;
}

export const PostgresqlTable: Schema.Schema<PostgresqlTable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    table: Schema.optional(Schema.String),
    postgresqlColumns: Schema.optional(Schema.Array(PostgresqlColumn)),
  }).annotate({ identifier: "PostgresqlTable" });

export interface PostgresqlSchema {
  /** The schema name. */
  schema?: string;
  /** Tables in the schema. */
  postgresqlTables?: ReadonlyArray<PostgresqlTable>;
}

export const PostgresqlSchema: Schema.Schema<PostgresqlSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schema: Schema.optional(Schema.String),
    postgresqlTables: Schema.optional(Schema.Array(PostgresqlTable)),
  }).annotate({ identifier: "PostgresqlSchema" });

export interface PostgresqlRdbms {
  /** PostgreSQL schemas in the database server. */
  postgresqlSchemas?: ReadonlyArray<PostgresqlSchema>;
}

export const PostgresqlRdbms: Schema.Schema<PostgresqlRdbms> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    postgresqlSchemas: Schema.optional(Schema.Array(PostgresqlSchema)),
  }).annotate({ identifier: "PostgresqlRdbms" });

export interface PostgresqlSourceConfig {
  /** Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used. */
  maxConcurrentBackfillTasks?: number;
  /** The PostgreSQL objects to exclude from the stream. */
  excludeObjects?: PostgresqlRdbms;
  /** Required. The name of the publication that includes the set of all tables that are defined in the stream's include_objects. */
  publication?: string;
  /** The PostgreSQL objects to include in the stream. */
  includeObjects?: PostgresqlRdbms;
  /** Required. Immutable. The name of the logical replication slot that's configured with the pgoutput plugin. */
  replicationSlot?: string;
}

export const PostgresqlSourceConfig: Schema.Schema<PostgresqlSourceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxConcurrentBackfillTasks: Schema.optional(Schema.Number),
    excludeObjects: Schema.optional(PostgresqlRdbms),
    publication: Schema.optional(Schema.String),
    includeObjects: Schema.optional(PostgresqlRdbms),
    replicationSlot: Schema.optional(Schema.String),
  }).annotate({ identifier: "PostgresqlSourceConfig" });

export interface SalesforceObject {
  /** The object name. */
  objectName?: string;
  /** Salesforce fields. When unspecified as part of include objects, includes everything, when unspecified as part of exclude objects, excludes nothing. */
  fields?: ReadonlyArray<SalesforceField>;
}

export const SalesforceObject: Schema.Schema<SalesforceObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectName: Schema.optional(Schema.String),
    fields: Schema.optional(Schema.Array(SalesforceField)),
  }).annotate({ identifier: "SalesforceObject" });

export interface SalesforceOrg {
  /** Salesforce objects in the database server. */
  objects?: ReadonlyArray<SalesforceObject>;
}

export const SalesforceOrg: Schema.Schema<SalesforceOrg> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objects: Schema.optional(Schema.Array(SalesforceObject)),
  }).annotate({ identifier: "SalesforceOrg" });

export interface SalesforceSourceConfig {
  /** The Salesforce objects to exclude from the stream. */
  excludeObjects?: SalesforceOrg;
  /** The Salesforce objects to retrieve from the source. */
  includeObjects?: SalesforceOrg;
  /** Required. Salesforce objects polling interval. The interval at which new changes will be polled for each object. The duration must be from `5 minutes` to `24 hours`, inclusive. */
  pollingInterval?: string;
}

export const SalesforceSourceConfig: Schema.Schema<SalesforceSourceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    excludeObjects: Schema.optional(SalesforceOrg),
    includeObjects: Schema.optional(SalesforceOrg),
    pollingInterval: Schema.optional(Schema.String),
  }).annotate({ identifier: "SalesforceSourceConfig" });

export interface SourceConfig {
  /** MySQL data source configuration. */
  mysqlSourceConfig?: MysqlSourceConfig;
  /** Spanner data source configuration. */
  spannerSourceConfig?: SpannerSourceConfig;
  /** Oracle data source configuration. */
  oracleSourceConfig?: OracleSourceConfig;
  /** SQLServer data source configuration. */
  sqlServerSourceConfig?: SqlServerSourceConfig;
  /** MongoDB data source configuration. */
  mongodbSourceConfig?: MongodbSourceConfig;
  /** Required. Source connection profile resource. Format: `projects/{project}/locations/{location}/connectionProfiles/{name}` */
  sourceConnectionProfile?: string;
  /** PostgreSQL data source configuration. */
  postgresqlSourceConfig?: PostgresqlSourceConfig;
  /** Salesforce data source configuration. */
  salesforceSourceConfig?: SalesforceSourceConfig;
}

export const SourceConfig: Schema.Schema<SourceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mysqlSourceConfig: Schema.optional(MysqlSourceConfig),
    spannerSourceConfig: Schema.optional(SpannerSourceConfig),
    oracleSourceConfig: Schema.optional(OracleSourceConfig),
    sqlServerSourceConfig: Schema.optional(SqlServerSourceConfig),
    mongodbSourceConfig: Schema.optional(MongodbSourceConfig),
    sourceConnectionProfile: Schema.optional(Schema.String),
    postgresqlSourceConfig: Schema.optional(PostgresqlSourceConfig),
    salesforceSourceConfig: Schema.optional(SalesforceSourceConfig),
  }).annotate({ identifier: "SourceConfig" });

export interface Datastream_Error {
  /** The time when the error occurred. */
  errorTime?: string;
  /** A unique identifier for this specific error, allowing it to be traced throughout the system in logs and API responses. */
  errorUuid?: string;
  /** Additional information about the error. */
  details?: Record<string, string>;
  /** A title that explains the reason for the error. */
  reason?: string;
  /** A message containing more information about the error that occurred. */
  message?: string;
}

export const Datastream_Error: Schema.Schema<Datastream_Error> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorTime: Schema.optional(Schema.String),
    errorUuid: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Datastream_Error" });

export interface BackfillNoneStrategy {}

export const BackfillNoneStrategy: Schema.Schema<BackfillNoneStrategy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "BackfillNoneStrategy",
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

export interface AvroFileFormat {}

export const AvroFileFormat: Schema.Schema<AvroFileFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AvroFileFormat",
  });

export interface GcsDestinationConfig {
  /** The maximum file size to be saved in the bucket. */
  fileRotationMb?: number;
  /** JSON file format configuration. */
  jsonFileFormat?: JsonFileFormat;
  /** Path inside the Cloud Storage bucket to write data to. */
  path?: string;
  /** The maximum duration for which new events are added before a file is closed and a new file is created. Values within the range of 15-60 seconds are allowed. */
  fileRotationInterval?: string;
  /** AVRO file format configuration. */
  avroFileFormat?: AvroFileFormat;
}

export const GcsDestinationConfig: Schema.Schema<GcsDestinationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileRotationMb: Schema.optional(Schema.Number),
    jsonFileFormat: Schema.optional(JsonFileFormat),
    path: Schema.optional(Schema.String),
    fileRotationInterval: Schema.optional(Schema.String),
    avroFileFormat: Schema.optional(AvroFileFormat),
  }).annotate({ identifier: "GcsDestinationConfig" });

export interface SingleTargetDataset {
  /** The dataset ID of the target dataset. DatasetIds allowed characters: https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#datasetreference. */
  datasetId?: string;
}

export const SingleTargetDataset: Schema.Schema<SingleTargetDataset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datasetId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SingleTargetDataset" });

export interface AppendOnly {}

export const AppendOnly: Schema.Schema<AppendOnly> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AppendOnly",
  });

export interface BlmtConfig {
  /** Required. The Cloud Storage bucket name. */
  bucket?: string;
  /** Required. The bigquery connection. Format: `{project}.{location}.{name}` */
  connectionName?: string;
  /** The root path inside the Cloud Storage bucket. */
  rootPath?: string;
  /** Required. The file format. */
  fileFormat?: "FILE_FORMAT_UNSPECIFIED" | "PARQUET" | (string & {});
  /** Required. The table format. */
  tableFormat?: "TABLE_FORMAT_UNSPECIFIED" | "ICEBERG" | (string & {});
}

export const BlmtConfig: Schema.Schema<BlmtConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bucket: Schema.optional(Schema.String),
    connectionName: Schema.optional(Schema.String),
    rootPath: Schema.optional(Schema.String),
    fileFormat: Schema.optional(Schema.String),
    tableFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "BlmtConfig" });

export interface Merge {}

export const Merge: Schema.Schema<Merge> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Merge",
  });

export interface DatasetTemplate {
  /** Required. The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations. */
  location?: string;
  /** If supplied, every created dataset will have its name prefixed by the provided value. The prefix and name will be separated by an underscore. i.e. _. */
  datasetIdPrefix?: string;
  /** Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key. i.e. projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{cryptoKey}. See https://cloud.google.com/bigquery/docs/customer-managed-encryption for more information. */
  kmsKeyName?: string;
}

export const DatasetTemplate: Schema.Schema<DatasetTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    datasetIdPrefix: Schema.optional(Schema.String),
    kmsKeyName: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatasetTemplate" });

export interface SourceHierarchyDatasets {
  /** The dataset template to use for dynamic dataset creation. */
  datasetTemplate?: DatasetTemplate;
  /** Optional. The project id of the BigQuery dataset. If not specified, the project will be inferred from the stream resource. */
  projectId?: string;
}

export const SourceHierarchyDatasets: Schema.Schema<SourceHierarchyDatasets> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datasetTemplate: Schema.optional(DatasetTemplate),
    projectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SourceHierarchyDatasets" });

export interface BigQueryDestinationConfig {
  /** Single destination dataset. */
  singleTargetDataset?: SingleTargetDataset;
  /** Append only mode */
  appendOnly?: AppendOnly;
  /** The guaranteed data freshness (in seconds) when querying tables created by the stream. Editing this field will only affect new tables created in the future, but existing tables will not be impacted. Lower values mean that queries will return fresher data, but may result in higher cost. */
  dataFreshness?: string;
  /** Optional. Big Lake Managed Tables (BLMT) configuration. */
  blmtConfig?: BlmtConfig;
  /** The standard mode */
  merge?: Merge;
  /** Source hierarchy datasets. */
  sourceHierarchyDatasets?: SourceHierarchyDatasets;
}

export const BigQueryDestinationConfig: Schema.Schema<BigQueryDestinationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    singleTargetDataset: Schema.optional(SingleTargetDataset),
    appendOnly: Schema.optional(AppendOnly),
    dataFreshness: Schema.optional(Schema.String),
    blmtConfig: Schema.optional(BlmtConfig),
    merge: Schema.optional(Merge),
    sourceHierarchyDatasets: Schema.optional(SourceHierarchyDatasets),
  }).annotate({ identifier: "BigQueryDestinationConfig" });

export interface DestinationConfig {
  /** Required. Destination connection profile resource. Format: `projects/{project}/locations/{location}/connectionProfiles/{name}` */
  destinationConnectionProfile?: string;
  /** A configuration for how data should be loaded to Cloud Storage. */
  gcsDestinationConfig?: GcsDestinationConfig;
  /** BigQuery destination configuration. */
  bigqueryDestinationConfig?: BigQueryDestinationConfig;
}

export const DestinationConfig: Schema.Schema<DestinationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinationConnectionProfile: Schema.optional(Schema.String),
    gcsDestinationConfig: Schema.optional(GcsDestinationConfig),
    bigqueryDestinationConfig: Schema.optional(BigQueryDestinationConfig),
  }).annotate({ identifier: "DestinationConfig" });

export interface TimeUnitPartition {
  /** Required. The partitioning column. */
  column?: string;
  /** Optional. Partition granularity. */
  partitioningTimeGranularity?:
    | "PARTITIONING_TIME_GRANULARITY_UNSPECIFIED"
    | "PARTITIONING_TIME_GRANULARITY_HOUR"
    | "PARTITIONING_TIME_GRANULARITY_DAY"
    | "PARTITIONING_TIME_GRANULARITY_MONTH"
    | "PARTITIONING_TIME_GRANULARITY_YEAR"
    | (string & {});
}

export const TimeUnitPartition: Schema.Schema<TimeUnitPartition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    column: Schema.optional(Schema.String),
    partitioningTimeGranularity: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeUnitPartition" });

export interface IntegerRangePartition {
  /** Required. The ending value for range partitioning (exclusive). */
  end?: string;
  /** Required. The partitioning column. */
  column?: string;
  /** Required. The starting value for range partitioning (inclusive). */
  start?: string;
  /** Required. The interval of each range within the partition. */
  interval?: string;
}

export const IntegerRangePartition: Schema.Schema<IntegerRangePartition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    end: Schema.optional(Schema.String),
    column: Schema.optional(Schema.String),
    start: Schema.optional(Schema.String),
    interval: Schema.optional(Schema.String),
  }).annotate({ identifier: "IntegerRangePartition" });

export interface IngestionTimePartition {
  /** Optional. Partition granularity */
  partitioningTimeGranularity?:
    | "PARTITIONING_TIME_GRANULARITY_UNSPECIFIED"
    | "PARTITIONING_TIME_GRANULARITY_HOUR"
    | "PARTITIONING_TIME_GRANULARITY_DAY"
    | "PARTITIONING_TIME_GRANULARITY_MONTH"
    | "PARTITIONING_TIME_GRANULARITY_YEAR"
    | (string & {});
}

export const IngestionTimePartition: Schema.Schema<IngestionTimePartition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partitioningTimeGranularity: Schema.optional(Schema.String),
  }).annotate({ identifier: "IngestionTimePartition" });

export interface BigQueryPartitioning {
  /** Time unit column partitioning. */
  timeUnitPartition?: TimeUnitPartition;
  /** Optional. If true, queries over the table require a partition filter. */
  requirePartitionFilter?: boolean;
  /** Integer range partitioning. */
  integerRangePartition?: IntegerRangePartition;
  /** Ingestion time partitioning. */
  ingestionTimePartition?: IngestionTimePartition;
}

export const BigQueryPartitioning: Schema.Schema<BigQueryPartitioning> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeUnitPartition: Schema.optional(TimeUnitPartition),
    requirePartitionFilter: Schema.optional(Schema.Boolean),
    integerRangePartition: Schema.optional(IntegerRangePartition),
    ingestionTimePartition: Schema.optional(IngestionTimePartition),
  }).annotate({ identifier: "BigQueryPartitioning" });

export interface BigQueryClustering {
  /** Required. Column names to set as clustering columns. */
  columns?: ReadonlyArray<string>;
}

export const BigQueryClustering: Schema.Schema<BigQueryClustering> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    columns: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BigQueryClustering" });

export interface CustomizationRule {
  /** BigQuery partitioning rule. */
  bigqueryPartitioning?: BigQueryPartitioning;
  /** BigQuery clustering rule. */
  bigqueryClustering?: BigQueryClustering;
}

export const CustomizationRule: Schema.Schema<CustomizationRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bigqueryPartitioning: Schema.optional(BigQueryPartitioning),
    bigqueryClustering: Schema.optional(BigQueryClustering),
  }).annotate({ identifier: "CustomizationRule" });

export interface ObjectFilter {
  /** Specific source object identifier. */
  sourceObjectIdentifier?: SourceObjectIdentifier;
}

export const ObjectFilter: Schema.Schema<ObjectFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceObjectIdentifier: Schema.optional(SourceObjectIdentifier),
  }).annotate({ identifier: "ObjectFilter" });

export interface RuleSet {
  /** Required. List of customization rules to apply. */
  customizationRules?: ReadonlyArray<CustomizationRule>;
  /** Required. Object filter to apply the customization rules to. */
  objectFilter?: ObjectFilter;
}

export const RuleSet: Schema.Schema<RuleSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customizationRules: Schema.optional(Schema.Array(CustomizationRule)),
    objectFilter: Schema.optional(ObjectFilter),
  }).annotate({ identifier: "RuleSet" });

export interface BackfillAllStrategy {
  /** MySQL data source objects to avoid backfilling. */
  mysqlExcludedObjects?: MysqlRdbms;
  /** SQLServer data source objects to avoid backfilling */
  sqlServerExcludedObjects?: SqlServerRdbms;
  /** Salesforce data source objects to avoid backfilling */
  salesforceExcludedObjects?: SalesforceOrg;
  /** Oracle data source objects to avoid backfilling. */
  oracleExcludedObjects?: OracleRdbms;
  /** PostgreSQL data source objects to avoid backfilling. */
  postgresqlExcludedObjects?: PostgresqlRdbms;
  /** MongoDB data source objects to avoid backfilling */
  mongodbExcludedObjects?: MongodbCluster;
  /** Spanner data source objects to avoid backfilling. */
  spannerExcludedObjects?: SpannerDatabase;
}

export const BackfillAllStrategy: Schema.Schema<BackfillAllStrategy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mysqlExcludedObjects: Schema.optional(MysqlRdbms),
    sqlServerExcludedObjects: Schema.optional(SqlServerRdbms),
    salesforceExcludedObjects: Schema.optional(SalesforceOrg),
    oracleExcludedObjects: Schema.optional(OracleRdbms),
    postgresqlExcludedObjects: Schema.optional(PostgresqlRdbms),
    mongodbExcludedObjects: Schema.optional(MongodbCluster),
    spannerExcludedObjects: Schema.optional(SpannerDatabase),
  }).annotate({ identifier: "BackfillAllStrategy" });

export interface Stream {
  /** Output only. The creation time of the stream. */
  createTime?: string;
  /** Output only. Identifier. The stream's name. */
  name?: string;
  /** Required. Source connection profile configuration. */
  sourceConfig?: SourceConfig;
  /** Output only. Errors on the Stream. */
  errors?: ReadonlyArray<Datastream_Error>;
  /** Output only. The last update time of the stream. */
  updateTime?: string;
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** Required. Display name. */
  displayName?: string;
  /** Do not automatically backfill any objects. */
  backfillNone?: BackfillNoneStrategy;
  /** Required. Destination connection profile configuration. */
  destinationConfig?: DestinationConfig;
  /** Labels. */
  labels?: Record<string, string>;
  /** Output only. If the stream was recovered, the time of the last recovery. Note: This field is currently experimental. */
  lastRecoveryTime?: string;
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Optional. Rule sets to apply to the stream. */
  ruleSets?: ReadonlyArray<RuleSet>;
  /** The state of the stream. */
  state?:
    | "STATE_UNSPECIFIED"
    | "NOT_STARTED"
    | "RUNNING"
    | "PAUSED"
    | "MAINTENANCE"
    | "FAILED"
    | "FAILED_PERMANENTLY"
    | "STARTING"
    | "DRAINING"
    | (string & {});
  /** Immutable. A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data will be encrypted using an internal Stream-specific encryption key provisioned through KMS. */
  customerManagedEncryptionKey?: string;
  /** Automatically backfill objects included in the stream source configuration. Specific objects can be excluded. */
  backfillAll?: BackfillAllStrategy;
}

export const Stream: Schema.Schema<Stream> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    sourceConfig: Schema.optional(SourceConfig),
    errors: Schema.optional(Schema.Array(Datastream_Error)),
    updateTime: Schema.optional(Schema.String),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    backfillNone: Schema.optional(BackfillNoneStrategy),
    destinationConfig: Schema.optional(DestinationConfig),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    lastRecoveryTime: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    ruleSets: Schema.optional(Schema.Array(RuleSet)),
    state: Schema.optional(Schema.String),
    customerManagedEncryptionKey: Schema.optional(Schema.String),
    backfillAll: Schema.optional(BackfillAllStrategy),
  }).annotate({ identifier: "Stream" });

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

export interface GcsProfile {
  /** Optional. The root path inside the Cloud Storage bucket. */
  rootPath?: string;
  /** Required. The Cloud Storage bucket name. */
  bucket?: string;
}

export const GcsProfile: Schema.Schema<GcsProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rootPath: Schema.optional(Schema.String),
    bucket: Schema.optional(Schema.String),
  }).annotate({ identifier: "GcsProfile" });

export interface SpannerProfile {
  /** Optional. The Spanner endpoint to connect to. Defaults to the global endpoint (https://spanner.googleapis.com). Must be in the format: https://spanner.{region}.rep.googleapis.com. */
  host?: string;
  /** Required. Immutable. Cloud Spanner database resource. This field is immutable. Must be in the format: projects/{project}/instances/{instance}/databases/{database_id}. */
  database?: string;
}

export const SpannerProfile: Schema.Schema<SpannerProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    host: Schema.optional(Schema.String),
    database: Schema.optional(Schema.String),
  }).annotate({ identifier: "SpannerProfile" });

export interface ServerAndClientVerification {
  /** Optional. Input only. PEM-encoded private key associated with the client certificate. This value will be used during the SSL/TLS handshake, allowing the PostgreSQL server to authenticate the client's identity, i.e. identity of the Datastream. */
  clientKey?: string;
  /** Required. Input only. PEM-encoded server root CA certificate. */
  caCertificate?: string;
  /** Required. Input only. PEM-encoded certificate used by the source database to authenticate the client identity (i.e., the Datastream's identity). This certificate is signed by either a root certificate trusted by the server or one or more intermediate certificates (which is stored with the leaf certificate) to link the this certificate to the trusted root certificate. */
  clientCertificate?: string;
  /** Optional. The hostname mentioned in the Subject or SAN extension of the server certificate. If this field is not provided, the hostname in the server certificate is not validated. */
  serverCertificateHostname?: string;
}

export const ServerAndClientVerification: Schema.Schema<ServerAndClientVerification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientKey: Schema.optional(Schema.String),
    caCertificate: Schema.optional(Schema.String),
    clientCertificate: Schema.optional(Schema.String),
    serverCertificateHostname: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServerAndClientVerification" });

export interface ServerVerification {
  /** Optional. The hostname mentioned in the Subject or SAN extension of the server certificate. If this field is not provided, the hostname in the server certificate is not validated. */
  serverCertificateHostname?: string;
  /** Required. Input only. PEM-encoded server root CA certificate. */
  caCertificate?: string;
}

export const ServerVerification: Schema.Schema<ServerVerification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serverCertificateHostname: Schema.optional(Schema.String),
    caCertificate: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServerVerification" });

export interface PostgresqlSslConfig {
  /** If this field is set, the communication will be encrypted with TLS encryption and both the server identity and the client identity will be authenticated. */
  serverAndClientVerification?: ServerAndClientVerification;
  /** If this field is set, the communication will be encrypted with TLS encryption and the server identity will be authenticated. */
  serverVerification?: ServerVerification;
}

export const PostgresqlSslConfig: Schema.Schema<PostgresqlSslConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serverAndClientVerification: Schema.optional(ServerAndClientVerification),
    serverVerification: Schema.optional(ServerVerification),
  }).annotate({ identifier: "PostgresqlSslConfig" });

export interface PostgresqlProfile {
  /** Required. Username for the PostgreSQL connection. */
  username?: string;
  /** Optional. A reference to a Secret Manager resource name storing the PostgreSQL connection password. Mutually exclusive with the `password` field. */
  secretManagerStoredPassword?: string;
  /** Optional. SSL configuration for the PostgreSQL connection. In case PostgresqlSslConfig is not set, the connection will use the default SSL mode, which is `prefer` (i.e. this mode will only use encryption if enabled from database side, otherwise will use unencrypted communication) */
  sslConfig?: PostgresqlSslConfig;
  /** Required. Hostname for the PostgreSQL connection. */
  hostname?: string;
  /** Required. Database for the PostgreSQL connection. */
  database?: string;
  /** Port for the PostgreSQL connection, default value is 5432. */
  port?: number;
  /** Optional. Password for the PostgreSQL connection. Mutually exclusive with the `secret_manager_stored_password` field. */
  password?: string;
}

export const PostgresqlProfile: Schema.Schema<PostgresqlProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.optional(Schema.String),
    secretManagerStoredPassword: Schema.optional(Schema.String),
    sslConfig: Schema.optional(PostgresqlSslConfig),
    hostname: Schema.optional(Schema.String),
    database: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    password: Schema.optional(Schema.String),
  }).annotate({ identifier: "PostgresqlProfile" });

export interface HostAddress {
  /** Optional. Port for the connection. */
  port?: number;
  /** Required. Hostname for the connection. */
  hostname?: string;
}

export const HostAddress: Schema.Schema<HostAddress> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port: Schema.optional(Schema.Number),
    hostname: Schema.optional(Schema.String),
  }).annotate({ identifier: "HostAddress" });

export interface MongodbSslConfig {
  /** Output only. Indicates whether the ca_certificate field is set. */
  caCertificateSet?: boolean;
  /** Optional. Input only. A reference to a Secret Manager resource name storing the PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' and the 'ca_certificate' fields are mandatory. Mutually exclusive with the `client_key` field. */
  secretManagerStoredClientKey?: string;
  /** Optional. Input only. PEM-encoded certificate of the CA that signed the source database server's certificate. */
  caCertificate?: string;
  /** Output only. Indicates whether the client_key field is set. */
  clientKeySet?: boolean;
  /** Optional. Input only. PEM-encoded certificate that will be used by the replica to authenticate against the source database server. If this field is used then the 'client_key' and the 'ca_certificate' fields are mandatory. */
  clientCertificate?: string;
  /** Output only. Indicates whether the client_certificate field is set. */
  clientCertificateSet?: boolean;
  /** Optional. Input only. PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' and the 'ca_certificate' fields are mandatory. */
  clientKey?: string;
}

export const MongodbSslConfig: Schema.Schema<MongodbSslConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caCertificateSet: Schema.optional(Schema.Boolean),
    secretManagerStoredClientKey: Schema.optional(Schema.String),
    caCertificate: Schema.optional(Schema.String),
    clientKeySet: Schema.optional(Schema.Boolean),
    clientCertificate: Schema.optional(Schema.String),
    clientCertificateSet: Schema.optional(Schema.Boolean),
    clientKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "MongodbSslConfig" });

export interface StandardConnectionFormat {
  /** Optional. Deprecated: Use the `additional_options` map to specify the `directConnection` parameter instead. For example: `additional_options = {"directConnection": "true"}`. Specifies whether the client connects directly to the host[:port] in the connection URI. */
  directConnection?: boolean;
}

export const StandardConnectionFormat: Schema.Schema<StandardConnectionFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    directConnection: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "StandardConnectionFormat" });

export interface SrvConnectionFormat {}

export const SrvConnectionFormat: Schema.Schema<SrvConnectionFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SrvConnectionFormat",
  });

export interface MongodbProfile {
  /** Required. List of host addresses for a MongoDB cluster. For SRV connection format, this list must contain exactly one DNS host without a port. For Standard connection format, this list must contain all the required hosts in the cluster with their respective ports. */
  hostAddresses?: ReadonlyArray<HostAddress>;
  /** Optional. SSL configuration for the MongoDB connection. */
  sslConfig?: MongodbSslConfig;
  /** Optional. Password for the MongoDB connection. Mutually exclusive with the `secret_manager_stored_password` field. */
  password?: string;
  /** Standard connection format. */
  standardConnectionFormat?: StandardConnectionFormat;
  /** Optional. Name of the replica set. Only needed for self hosted replica set type MongoDB cluster. For SRV connection format, this field must be empty. For Standard connection format, this field must be specified. */
  replicaSet?: string;
  /** Required. Username for the MongoDB connection. */
  username?: string;
  /** Optional. A reference to a Secret Manager resource name storing the SQLServer connection password. Mutually exclusive with the `password` field. */
  secretManagerStoredPassword?: string;
  /** Optional. Specifies additional options for the MongoDB connection. The options should be sent as key-value pairs, for example: `additional_options = {"serverSelectionTimeoutMS": "10000", "directConnection": "true"}`. Keys are case-sensitive and should match the official MongoDB connection string options: https://www.mongodb.com/docs/manual/reference/connection-string-options/ The server will not modify the values provided by the user. */
  additionalOptions?: Record<string, string>;
  /** Srv connection format. */
  srvConnectionFormat?: SrvConnectionFormat;
}

export const MongodbProfile: Schema.Schema<MongodbProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostAddresses: Schema.optional(Schema.Array(HostAddress)),
    sslConfig: Schema.optional(MongodbSslConfig),
    password: Schema.optional(Schema.String),
    standardConnectionFormat: Schema.optional(StandardConnectionFormat),
    replicaSet: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    secretManagerStoredPassword: Schema.optional(Schema.String),
    additionalOptions: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    srvConnectionFormat: Schema.optional(SrvConnectionFormat),
  }).annotate({ identifier: "MongodbProfile" });

export interface UserCredentials {
  /** Required. Username for the Salesforce connection. */
  username?: string;
  /** Optional. A reference to a Secret Manager resource name storing the Salesforce connection's password. Mutually exclusive with the `password` field. */
  secretManagerStoredPassword?: string;
  /** Optional. Security token for the Salesforce connection. Mutually exclusive with the `secret_manager_stored_security_token` field. */
  securityToken?: string;
  /** Optional. A reference to a Secret Manager resource name storing the Salesforce connection's security token. Mutually exclusive with the `security_token` field. */
  secretManagerStoredSecurityToken?: string;
  /** Optional. Password for the Salesforce connection. Mutually exclusive with the `secret_manager_stored_password` field. */
  password?: string;
}

export const UserCredentials: Schema.Schema<UserCredentials> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.optional(Schema.String),
    secretManagerStoredPassword: Schema.optional(Schema.String),
    securityToken: Schema.optional(Schema.String),
    secretManagerStoredSecurityToken: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserCredentials" });

export interface Oauth2ClientCredentials {
  /** Optional. Client secret for Salesforce OAuth2 Client Credentials. Mutually exclusive with the `secret_manager_stored_client_secret` field. */
  clientSecret?: string;
  /** Required. Client ID for Salesforce OAuth2 Client Credentials. */
  clientId?: string;
  /** Optional. A reference to a Secret Manager resource name storing the Salesforce OAuth2 client_secret. Mutually exclusive with the `client_secret` field. */
  secretManagerStoredClientSecret?: string;
}

export const Oauth2ClientCredentials: Schema.Schema<Oauth2ClientCredentials> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientSecret: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
    secretManagerStoredClientSecret: Schema.optional(Schema.String),
  }).annotate({ identifier: "Oauth2ClientCredentials" });

export interface SalesforceProfile {
  /** Required. Domain endpoint for the Salesforce connection. */
  domain?: string;
  /** User-password authentication. */
  userCredentials?: UserCredentials;
  /** Connected app authentication. */
  oauth2ClientCredentials?: Oauth2ClientCredentials;
}

export const SalesforceProfile: Schema.Schema<SalesforceProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.optional(Schema.String),
    userCredentials: Schema.optional(UserCredentials),
    oauth2ClientCredentials: Schema.optional(Oauth2ClientCredentials),
  }).annotate({ identifier: "SalesforceProfile" });

export interface BigQueryProfile {}

export const BigQueryProfile: Schema.Schema<BigQueryProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "BigQueryProfile",
  });

export interface StaticServiceIpConnectivity {}

export const StaticServiceIpConnectivity: Schema.Schema<StaticServiceIpConnectivity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "StaticServiceIpConnectivity",
  });

export interface MysqlSslConfig {
  /** Input only. PEM-encoded certificate of the CA that signed the source database server's certificate. */
  caCertificate?: string;
  /** Output only. Indicates whether the ca_certificate field is set. */
  caCertificateSet?: boolean;
  /** Optional. Input only. PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' and the 'ca_certificate' fields are mandatory. */
  clientKey?: string;
  /** Output only. Indicates whether the client_certificate field is set. */
  clientCertificateSet?: boolean;
  /** Output only. Indicates whether the client_key field is set. */
  clientKeySet?: boolean;
  /** Optional. Input only. PEM-encoded certificate that will be used by the replica to authenticate against the source database server. If this field is used then the 'client_key' and the 'ca_certificate' fields are mandatory. */
  clientCertificate?: string;
}

export const MysqlSslConfig: Schema.Schema<MysqlSslConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caCertificate: Schema.optional(Schema.String),
    caCertificateSet: Schema.optional(Schema.Boolean),
    clientKey: Schema.optional(Schema.String),
    clientCertificateSet: Schema.optional(Schema.Boolean),
    clientKeySet: Schema.optional(Schema.Boolean),
    clientCertificate: Schema.optional(Schema.String),
  }).annotate({ identifier: "MysqlSslConfig" });

export interface MysqlProfile {
  /** Port for the MySQL connection, default value is 3306. */
  port?: number;
  /** Optional. Input only. Password for the MySQL connection. Mutually exclusive with the `secret_manager_stored_password` field. */
  password?: string;
  /** Required. Username for the MySQL connection. */
  username?: string;
  /** SSL configuration for the MySQL connection. */
  sslConfig?: MysqlSslConfig;
  /** Optional. A reference to a Secret Manager resource name storing the MySQL connection password. Mutually exclusive with the `password` field. */
  secretManagerStoredPassword?: string;
  /** Required. Hostname for the MySQL connection. */
  hostname?: string;
}

export const MysqlProfile: Schema.Schema<MysqlProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port: Schema.optional(Schema.Number),
    password: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    sslConfig: Schema.optional(MysqlSslConfig),
    secretManagerStoredPassword: Schema.optional(Schema.String),
    hostname: Schema.optional(Schema.String),
  }).annotate({ identifier: "MysqlProfile" });

export interface PrivateConnectivity {
  /** Required. A reference to a private connection resource. Format: `projects/{project}/locations/{location}/privateConnections/{name}` */
  privateConnection?: string;
}

export const PrivateConnectivity: Schema.Schema<PrivateConnectivity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateConnection: Schema.optional(Schema.String),
  }).annotate({ identifier: "PrivateConnectivity" });

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

export interface EncryptionNotEnforced {}

export const EncryptionNotEnforced: Schema.Schema<EncryptionNotEnforced> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "EncryptionNotEnforced",
  });

export interface EncryptionAndServerValidation {
  /** Optional. Input only. PEM-encoded certificate of the CA that signed the source database server's certificate. */
  caCertificate?: string;
  /** Optional. The hostname mentioned in the Subject or SAN extension of the server certificate. This field is used for bypassing the hostname validation while verifying server certificate. This is required for scenarios where the host name that datastream connects to is different from the certificate's subject. This specifically happens for private connectivity. It could also happen when the customer provides a public IP in connection profile but the same is not present in the server certificate. */
  serverCertificateHostname?: string;
}

export const EncryptionAndServerValidation: Schema.Schema<EncryptionAndServerValidation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caCertificate: Schema.optional(Schema.String),
    serverCertificateHostname: Schema.optional(Schema.String),
  }).annotate({ identifier: "EncryptionAndServerValidation" });

export interface BasicEncryption {}

export const BasicEncryption: Schema.Schema<BasicEncryption> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "BasicEncryption",
  });

export interface SqlServerSslConfig {
  /** If set, Datastream will not enforce encryption. If the DB server mandates encryption, then connection will be encrypted but server identity will not be authenticated. */
  encryptionNotEnforced?: EncryptionNotEnforced;
  /** If set, Datastream will enforce encryption and authenticate server identity. */
  encryptionAndServerValidation?: EncryptionAndServerValidation;
  /** If set, Datastream will enforce encryption without authenticating server identity. Server certificates will be trusted by default. */
  basicEncryption?: BasicEncryption;
}

export const SqlServerSslConfig: Schema.Schema<SqlServerSslConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encryptionNotEnforced: Schema.optional(EncryptionNotEnforced),
    encryptionAndServerValidation: Schema.optional(
      EncryptionAndServerValidation,
    ),
    basicEncryption: Schema.optional(BasicEncryption),
  }).annotate({ identifier: "SqlServerSslConfig" });

export interface SqlServerProfile {
  /** Port for the SQLServer connection, default value is 1433. */
  port?: number;
  /** Optional. Password for the SQLServer connection. Mutually exclusive with the `secret_manager_stored_password` field. */
  password?: string;
  /** Required. Username for the SQLServer connection. */
  username?: string;
  /** Optional. SSL configuration for the SQLServer connection. */
  sslConfig?: SqlServerSslConfig;
  /** Optional. A reference to a Secret Manager resource name storing the SQLServer connection password. Mutually exclusive with the `password` field. */
  secretManagerStoredPassword?: string;
  /** Required. Hostname for the SQLServer connection. */
  hostname?: string;
  /** Required. Database for the SQLServer connection. */
  database?: string;
}

export const SqlServerProfile: Schema.Schema<SqlServerProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port: Schema.optional(Schema.Number),
    password: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    sslConfig: Schema.optional(SqlServerSslConfig),
    secretManagerStoredPassword: Schema.optional(Schema.String),
    hostname: Schema.optional(Schema.String),
    database: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlServerProfile" });

export interface ConnectionProfile {
  /** Profile for connecting to a Cloud Storage destination. */
  gcsProfile?: GcsProfile;
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** Profile for connecting to an Oracle source. */
  oracleProfile?: OracleProfile;
  /** Required. Display name. */
  displayName?: string;
  /** Profile for connecting to a Spanner source. */
  spannerProfile?: SpannerProfile;
  /** Profile for connecting to a PostgreSQL source. */
  postgresqlProfile?: PostgresqlProfile;
  /** Profile for connecting to a MongoDB source. */
  mongodbProfile?: MongodbProfile;
  /** Profile for connecting to a Salesforce source. */
  salesforceProfile?: SalesforceProfile;
  /** Profile for connecting to a BigQuery destination. */
  bigqueryProfile?: BigQueryProfile;
  /** Static Service IP connectivity. */
  staticServiceIpConnectivity?: StaticServiceIpConnectivity;
  /** Output only. The update time of the resource. */
  updateTime?: string;
  /** Profile for connecting to a MySQL source. */
  mysqlProfile?: MysqlProfile;
  /** Output only. The create time of the resource. */
  createTime?: string;
  /** Output only. Identifier. The resource's name. */
  name?: string;
  /** Private connectivity. */
  privateConnectivity?: PrivateConnectivity;
  /** Forward SSH tunnel connectivity. */
  forwardSshConnectivity?: ForwardSshTunnelConnectivity;
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Profile for connecting to a SQLServer source. */
  sqlServerProfile?: SqlServerProfile;
  /** Labels. */
  labels?: Record<string, string>;
}

export const ConnectionProfile: Schema.Schema<ConnectionProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsProfile: Schema.optional(GcsProfile),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    oracleProfile: Schema.optional(OracleProfile),
    displayName: Schema.optional(Schema.String),
    spannerProfile: Schema.optional(SpannerProfile),
    postgresqlProfile: Schema.optional(PostgresqlProfile),
    mongodbProfile: Schema.optional(MongodbProfile),
    salesforceProfile: Schema.optional(SalesforceProfile),
    bigqueryProfile: Schema.optional(BigQueryProfile),
    staticServiceIpConnectivity: Schema.optional(StaticServiceIpConnectivity),
    updateTime: Schema.optional(Schema.String),
    mysqlProfile: Schema.optional(MysqlProfile),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    privateConnectivity: Schema.optional(PrivateConnectivity),
    forwardSshConnectivity: Schema.optional(ForwardSshTunnelConnectivity),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    sqlServerProfile: Schema.optional(SqlServerProfile),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "ConnectionProfile" });

export interface ListConnectionProfilesResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** List of connection profiles. */
  connectionProfiles?: ReadonlyArray<ConnectionProfile>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListConnectionProfilesResponse: Schema.Schema<ListConnectionProfilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    connectionProfiles: Schema.optional(Schema.Array(ConnectionProfile)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListConnectionProfilesResponse" });

export interface Location {
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  /** A short description of the validation. */
  description?: string;
  /** Output only. Validation execution status. */
  state?:
    | "STATE_UNSPECIFIED"
    | "NOT_EXECUTED"
    | "FAILED"
    | "PASSED"
    | "WARNING"
    | (string & {});
  /** Messages reflecting the validation results. */
  message?: ReadonlyArray<ValidationMessage>;
}

export const Validation: Schema.Schema<Validation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    message: Schema.optional(Schema.Array(ValidationMessage)),
  }).annotate({ identifier: "Validation" });

export interface ValidationResult {
  /** A list of validations (includes both executed as well as not executed validations). */
  validations?: ReadonlyArray<Validation>;
}

export const ValidationResult: Schema.Schema<ValidationResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validations: Schema.optional(Schema.Array(Validation)),
  }).annotate({ identifier: "ValidationResult" });

export interface OperationMetadata {
  /** Output only. The time the operation finished running. */
  endTime?: string;
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
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    validationResult: Schema.optional(ValidationResult),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface PscInterfaceConfig {
  /** Required. Fully qualified name of the Network Attachment that Datastream will connect to. Format: `projects/{project}/regions/{region}/networkAttachments/{name}` */
  networkAttachment?: string;
}

export const PscInterfaceConfig: Schema.Schema<PscInterfaceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkAttachment: Schema.optional(Schema.String),
  }).annotate({ identifier: "PscInterfaceConfig" });

export interface EventFilter {
  /** An SQL-query Where clause selecting which data should be included, not including the "WHERE" keyword. e.g., `t.key1 = 'value1' AND t.key2 = 'value2'` */
  sqlWhereClause?: string;
}

export const EventFilter: Schema.Schema<EventFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sqlWhereClause: Schema.optional(Schema.String),
  }).annotate({ identifier: "EventFilter" });

export interface BackfillJob {
  /** Output only. The filter for performing a partial backfill. */
  eventFilter?: EventFilter;
  /** Output only. Errors which caused the backfill job to fail. */
  errors?: ReadonlyArray<Datastream_Error>;
  /** Output only. Backfill job's start time. */
  lastStartTime?: string;
  /** Output only. Backfill job's end time. */
  lastEndTime?: string;
  /** Backfill job's triggering reason. */
  trigger?: "TRIGGER_UNSPECIFIED" | "AUTOMATIC" | "MANUAL" | (string & {});
  /** Output only. Backfill job state. */
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
    eventFilter: Schema.optional(EventFilter),
    errors: Schema.optional(Schema.Array(Datastream_Error)),
    lastStartTime: Schema.optional(Schema.String),
    lastEndTime: Schema.optional(Schema.String),
    trigger: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackfillJob" });

export interface StreamObject {
  /** The object identifier in the data source. */
  sourceObject?: SourceObjectIdentifier;
  /** Output only. The last update time of the object. */
  updateTime?: string;
  /** Output only. Identifier. The object resource's name. */
  name?: string;
  /** Required. Display name. */
  displayName?: string;
  /** Output only. The creation time of the object. */
  createTime?: string;
  /** Output only. Active errors on the object. */
  errors?: ReadonlyArray<Datastream_Error>;
  /** The latest backfill job that was initiated for the stream object. */
  backfillJob?: BackfillJob;
  /** Output only. The customization rules for the object. These rules are derived from the parent Stream's `rule_sets` and represent the intended configuration for the object. */
  customizationRules?: ReadonlyArray<CustomizationRule>;
}

export const StreamObject: Schema.Schema<StreamObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceObject: Schema.optional(SourceObjectIdentifier),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    errors: Schema.optional(Schema.Array(Datastream_Error)),
    backfillJob: Schema.optional(BackfillJob),
    customizationRules: Schema.optional(Schema.Array(CustomizationRule)),
  }).annotate({ identifier: "StreamObject" });

export interface StopBackfillJobResponse {
  /** The stream object resource the backfill job was stopped for. */
  object?: StreamObject;
}

export const StopBackfillJobResponse: Schema.Schema<StopBackfillJobResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(StreamObject),
  }).annotate({ identifier: "StopBackfillJobResponse" });

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

export interface RetryInfo {
  /** Clients should wait at least this long between retrying the same request. */
  retryDelay?: string;
}

export const RetryInfo: Schema.Schema<RetryInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    retryDelay: Schema.optional(Schema.String),
  }).annotate({ identifier: "RetryInfo" });

export interface DebugInfo {
  /** Additional debugging information provided by the server. */
  detail?: string;
  /** The stack trace entries indicating where the error occurred. */
  stackEntries?: ReadonlyArray<string>;
}

export const DebugInfo: Schema.Schema<DebugInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detail: Schema.optional(Schema.String),
    stackEntries: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DebugInfo" });

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

export interface Route {
  /** Required. Destination address for connection */
  destinationAddress?: string;
  /** Destination port for connection */
  destinationPort?: number;
  /** Output only. The update time of the resource. */
  updateTime?: string;
  /** Output only. The create time of the resource. */
  createTime?: string;
  /** Output only. Identifier. The resource's name. */
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

export interface MysqlGtidPosition {
  /** Required. The gtid set to start replication from. */
  gtidSet?: string;
}

export const MysqlGtidPosition: Schema.Schema<MysqlGtidPosition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gtidSet: Schema.optional(Schema.String),
  }).annotate({ identifier: "MysqlGtidPosition" });

export interface MysqlLogPosition {
  /** Required. The binary log file name. */
  logFile?: string;
  /** Optional. The position within the binary log file. Default is head of file. */
  logPosition?: number;
}

export const MysqlLogPosition: Schema.Schema<MysqlLogPosition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logFile: Schema.optional(Schema.String),
    logPosition: Schema.optional(Schema.Number),
  }).annotate({ identifier: "MysqlLogPosition" });

export interface SqlServerLsnPosition {
  /** Required. Log sequence number (LSN) from where Logs will be read */
  lsn?: string;
}

export const SqlServerLsnPosition: Schema.Schema<SqlServerLsnPosition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lsn: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlServerLsnPosition" });

export interface OracleScnPosition {
  /** Required. SCN number from where Logs will be read */
  scn?: string;
}

export const OracleScnPosition: Schema.Schema<OracleScnPosition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scn: Schema.optional(Schema.String),
  }).annotate({ identifier: "OracleScnPosition" });

export interface MongodbChangeStreamPosition {
  /** Required. The timestamp to start change stream from. */
  startTime?: string;
}

export const MongodbChangeStreamPosition: Schema.Schema<MongodbChangeStreamPosition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "MongodbChangeStreamPosition" });

export interface SpecificStartPosition {
  /** MySQL GTID set to start replicating from. */
  mysqlGtidPosition?: MysqlGtidPosition;
  /** MySQL specific log position to start replicating from. */
  mysqlLogPosition?: MysqlLogPosition;
  /** SqlServer LSN to start replicating from. */
  sqlServerLsnPosition?: SqlServerLsnPosition;
  /** Oracle SCN to start replicating from. */
  oracleScnPosition?: OracleScnPosition;
  /** MongoDB change stream position to start replicating from. */
  mongodbChangeStreamPosition?: MongodbChangeStreamPosition;
}

export const SpecificStartPosition: Schema.Schema<SpecificStartPosition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mysqlGtidPosition: Schema.optional(MysqlGtidPosition),
    mysqlLogPosition: Schema.optional(MysqlLogPosition),
    sqlServerLsnPosition: Schema.optional(SqlServerLsnPosition),
    oracleScnPosition: Schema.optional(OracleScnPosition),
    mongodbChangeStreamPosition: Schema.optional(MongodbChangeStreamPosition),
  }).annotate({ identifier: "SpecificStartPosition" });

export interface MostRecentStartPosition {}

export const MostRecentStartPosition: Schema.Schema<MostRecentStartPosition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MostRecentStartPosition",
  });

export interface NextAvailableStartPosition {}

export const NextAvailableStartPosition: Schema.Schema<NextAvailableStartPosition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "NextAvailableStartPosition",
  });

export interface CdcStrategy {
  /** Optional. Start replicating from a specific position in the source. */
  specificStartPosition?: SpecificStartPosition;
  /** Optional. Start replicating from the most recent position in the source. */
  mostRecentStartPosition?: MostRecentStartPosition;
  /** Optional. Resume replication from the next available position in the source. */
  nextAvailableStartPosition?: NextAvailableStartPosition;
}

export const CdcStrategy: Schema.Schema<CdcStrategy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    specificStartPosition: Schema.optional(SpecificStartPosition),
    mostRecentStartPosition: Schema.optional(MostRecentStartPosition),
    nextAvailableStartPosition: Schema.optional(NextAvailableStartPosition),
  }).annotate({ identifier: "CdcStrategy" });

export interface RunStreamRequest {
  /** Optional. The CDC strategy of the stream. If not set, the system's default value will be used. */
  cdcStrategy?: CdcStrategy;
  /** Optional. Update the stream without validating it. */
  force?: boolean;
}

export const RunStreamRequest: Schema.Schema<RunStreamRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cdcStrategy: Schema.optional(CdcStrategy),
    force: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "RunStreamRequest" });

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

export interface StartBackfillJobRequest {
  /** Optional. Optional event filter. If not set, or empty, the backfill will be performed on the entire object. This is currently used for partial backfill and only supported for SQL sources. */
  eventFilter?: EventFilter;
}

export const StartBackfillJobRequest: Schema.Schema<StartBackfillJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventFilter: Schema.optional(EventFilter),
  }).annotate({ identifier: "StartBackfillJobRequest" });

export interface QuotaFailureViolation {
  /** The subject on which the quota check failed. For example, "clientip:" or "project:". */
  subject?: string;
  /** A description of how the quota check failed. Clients can use this description to find more about the quota configuration in the service's public documentation, or find the relevant quota limit to adjust through developer console. For example: "Service disabled" or "Daily Limit for read operations exceeded". */
  description?: string;
  /** The API Service from which the `QuotaFailure.Violation` originates. In some cases, Quota issues originate from an API Service other than the one that was called. In other words, a dependency of the called API Service could be the cause of the `QuotaFailure`, and this field would have the dependency API service name. For example, if the called API is Kubernetes Engine API (container.googleapis.com), and a quota violation occurs in the Kubernetes Engine API itself, this field would be "container.googleapis.com". On the other hand, if the quota violation occurs when the Kubernetes Engine API creates VMs in the Compute Engine API (compute.googleapis.com), this field would be "compute.googleapis.com". */
  apiService?: string;
  /** The id of the violated quota. Also know as "limit name", this is the unique identifier of a quota in the context of an API service. For example, "CPUS-PER-VM-FAMILY-per-project-region". */
  quotaId?: string;
  /** The new quota value being rolled out at the time of the violation. At the completion of the rollout, this value will be enforced in place of quota_value. If no rollout is in progress at the time of the violation, this field is not set. For example, if at the time of the violation a rollout is in progress changing the number of CPUs quota from 10 to 20, 20 would be the value of this field. */
  futureQuotaValue?: string;
  /** The metric of the violated quota. A quota metric is a named counter to measure usage, such as API requests or CPUs. When an activity occurs in a service, such as Virtual Machine allocation, one or more quota metrics may be affected. For example, "compute.googleapis.com/cpus_per_vm_family", "storage.googleapis.com/internet_egress_bandwidth". */
  quotaMetric?: string;
  /** The enforced quota value at the time of the `QuotaFailure`. For example, if the enforced quota value at the time of the `QuotaFailure` on the number of CPUs is "10", then the value of this field would reflect this quantity. */
  quotaValue?: string;
  /** The dimensions of the violated quota. Every non-global quota is enforced on a set of dimensions. While quota metric defines what to count, the dimensions specify for what aspects the counter should be increased. For example, the quota "CPUs per region per VM family" enforces a limit on the metric "compute.googleapis.com/cpus_per_vm_family" on dimensions "region" and "vm_family". And if the violation occurred in region "us-central1" and for VM family "n1", the quota_dimensions would be, { "region": "us-central1", "vm_family": "n1", } When a quota is enforced globally, the quota_dimensions would always be empty. */
  quotaDimensions?: Record<string, string>;
}

export const QuotaFailureViolation: Schema.Schema<QuotaFailureViolation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subject: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    apiService: Schema.optional(Schema.String),
    quotaId: Schema.optional(Schema.String),
    futureQuotaValue: Schema.optional(Schema.String),
    quotaMetric: Schema.optional(Schema.String),
    quotaValue: Schema.optional(Schema.String),
    quotaDimensions: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "QuotaFailureViolation" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
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
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    error: Schema.optional(Status),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface QuotaFailure {
  /** Describes all quota violations. */
  violations?: ReadonlyArray<QuotaFailureViolation>;
}

export const QuotaFailure: Schema.Schema<QuotaFailure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    violations: Schema.optional(Schema.Array(QuotaFailureViolation)),
  }).annotate({ identifier: "QuotaFailure" });

export interface DiscoverConnectionProfileRequest {
  /** Optional. The number of hierarchy levels below the current level to be retrieved. */
  hierarchyDepth?: number;
  /** Optional. Oracle RDBMS to enrich with child data objects and metadata. */
  oracleRdbms?: OracleRdbms;
  /** Optional. PostgreSQL RDBMS to enrich with child data objects and metadata. */
  postgresqlRdbms?: PostgresqlRdbms;
  /** Optional. MongoDB cluster to enrich with child data objects and metadata. */
  mongodbCluster?: MongodbCluster;
  /** Optional. Spanner database to enrich with child data objects and metadata. */
  spannerDatabase?: SpannerDatabase;
  /** Optional. A reference to an existing connection profile. */
  connectionProfileName?: string;
  /** Optional. SQLServer RDBMS to enrich with child data objects and metadata. */
  sqlServerRdbms?: SqlServerRdbms;
  /** Optional. Whether to retrieve the full hierarchy of data objects (TRUE) or only the current level (FALSE). */
  fullHierarchy?: boolean;
  /** Optional. MySQL RDBMS to enrich with child data objects and metadata. */
  mysqlRdbms?: MysqlRdbms;
  /** Optional. An ad-hoc connection profile configuration. */
  connectionProfile?: ConnectionProfile;
  /** Optional. Salesforce organization to enrich with child data objects and metadata. */
  salesforceOrg?: SalesforceOrg;
}

export const DiscoverConnectionProfileRequest: Schema.Schema<DiscoverConnectionProfileRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hierarchyDepth: Schema.optional(Schema.Number),
    oracleRdbms: Schema.optional(OracleRdbms),
    postgresqlRdbms: Schema.optional(PostgresqlRdbms),
    mongodbCluster: Schema.optional(MongodbCluster),
    spannerDatabase: Schema.optional(SpannerDatabase),
    connectionProfileName: Schema.optional(Schema.String),
    sqlServerRdbms: Schema.optional(SqlServerRdbms),
    fullHierarchy: Schema.optional(Schema.Boolean),
    mysqlRdbms: Schema.optional(MysqlRdbms),
    connectionProfile: Schema.optional(ConnectionProfile),
    salesforceOrg: Schema.optional(SalesforceOrg),
  }).annotate({ identifier: "DiscoverConnectionProfileRequest" });

export interface FetchStaticIpsResponse {
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** list of static ips by account */
  staticIps?: ReadonlyArray<string>;
}

export const FetchStaticIpsResponse: Schema.Schema<FetchStaticIpsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    staticIps: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "FetchStaticIpsResponse" });

export interface VpcPeeringConfig {
  /** Required. Fully qualified name of the VPC that Datastream will peer to. Format: `projects/{project}/global/{networks}/{name}` */
  vpc?: string;
  /** Required. A free subnet for peering. (CIDR of /29) */
  subnet?: string;
}

export const VpcPeeringConfig: Schema.Schema<VpcPeeringConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vpc: Schema.optional(Schema.String),
    subnet: Schema.optional(Schema.String),
  }).annotate({ identifier: "VpcPeeringConfig" });

export interface PrivateConnection {
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Output only. The update time of the resource. */
  updateTime?: string;
  /** Output only. The state of the Private Connection. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "CREATED"
    | "FAILED"
    | "DELETING"
    | "FAILED_TO_DELETE"
    | (string & {});
  /** Output only. Identifier. The resource's name. */
  name?: string;
  /** Output only. The create time of the resource. */
  createTime?: string;
  /** Labels. */
  labels?: Record<string, string>;
  /** VPC Peering Config. */
  vpcPeeringConfig?: VpcPeeringConfig;
  /** PSC Interface Config. */
  pscInterfaceConfig?: PscInterfaceConfig;
  /** Required. Display name. */
  displayName?: string;
  /** Output only. In case of error, the details of the error in a user-friendly format. */
  error?: Datastream_Error;
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
}

export const PrivateConnection: Schema.Schema<PrivateConnection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    satisfiesPzs: Schema.optional(Schema.Boolean),
    updateTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    vpcPeeringConfig: Schema.optional(VpcPeeringConfig),
    pscInterfaceConfig: Schema.optional(PscInterfaceConfig),
    displayName: Schema.optional(Schema.String),
    error: Schema.optional(Datastream_Error),
    satisfiesPzi: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PrivateConnection" });

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

export interface Help {
  /** URL(s) pointing to additional information on handling the current error. */
  links?: ReadonlyArray<Link>;
}

export const Help: Schema.Schema<Help> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    links: Schema.optional(Schema.Array(Link)),
  }).annotate({ identifier: "Help" });

export interface DiscoverConnectionProfileResponse {
  /** Enriched Oracle RDBMS object. */
  oracleRdbms?: OracleRdbms;
  /** Enriched SQLServer RDBMS object. */
  sqlServerRdbms?: SqlServerRdbms;
  /** Enriched MySQL RDBMS object. */
  mysqlRdbms?: MysqlRdbms;
  /** Enriched PostgreSQL RDBMS object. */
  postgresqlRdbms?: PostgresqlRdbms;
  /** Enriched MongoDB cluster. */
  mongodbCluster?: MongodbCluster;
  /** Enriched Spanner database. */
  spannerDatabase?: SpannerDatabase;
  /** Enriched Salesforce organization. */
  salesforceOrg?: SalesforceOrg;
}

export const DiscoverConnectionProfileResponse: Schema.Schema<DiscoverConnectionProfileResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oracleRdbms: Schema.optional(OracleRdbms),
    sqlServerRdbms: Schema.optional(SqlServerRdbms),
    mysqlRdbms: Schema.optional(MysqlRdbms),
    postgresqlRdbms: Schema.optional(PostgresqlRdbms),
    mongodbCluster: Schema.optional(MongodbCluster),
    spannerDatabase: Schema.optional(SpannerDatabase),
    salesforceOrg: Schema.optional(SalesforceOrg),
  }).annotate({ identifier: "DiscoverConnectionProfileResponse" });

export interface StopBackfillJobRequest {}

export const StopBackfillJobRequest: Schema.Schema<StopBackfillJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "StopBackfillJobRequest",
  });

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

export interface ListPrivateConnectionsResponse {
  /** List of private connectivity configurations. */
  privateConnections?: ReadonlyArray<PrivateConnection>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListPrivateConnectionsResponse: Schema.Schema<ListPrivateConnectionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateConnections: Schema.optional(Schema.Array(PrivateConnection)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListPrivateConnectionsResponse" });

export interface StartBackfillJobResponse {
  /** The stream object resource a backfill job was started for. */
  object?: StreamObject;
}

export const StartBackfillJobResponse: Schema.Schema<StartBackfillJobResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(StreamObject),
  }).annotate({ identifier: "StartBackfillJobResponse" });

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

export interface FetchStaticIpsProjectsLocationsRequest {
  /** Optional. A page token, received from a previous `ListStaticIps` call. will likely not be specified. */
  pageToken?: string;
  /** Required. The resource name for the location for which static IPs should be returned. Must be in the format `projects/* /locations/*`. */
  name: string;
  /** Optional. Maximum number of Ips to return, will likely not be specified. */
  pageSize?: number;
}

export const FetchStaticIpsProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
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

export interface CreateProjectsLocationsStreamsRequest {
  /** Required. The stream identifier. */
  streamId?: string;
  /** Optional. Create the stream without validating it. */
  force?: boolean;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. Only validate the stream, but don't create any resources. The default is false. */
  validateOnly?: boolean;
  /** Required. The parent that owns the collection of streams. */
  parent: string;
  /** Request body */
  body?: Stream;
}

export const CreateProjectsLocationsStreamsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    streamId: Schema.optional(Schema.String).pipe(T.HttpQuery("streamId")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Stream).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/streams", hasBody: true }),
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

export interface RunProjectsLocationsStreamsRequest {
  /** Required. Name of the stream resource to start, in the format: projects/{project_id}/locations/{location}/streams/{stream_name} */
  name: string;
  /** Request body */
  body?: RunStreamRequest;
}

export const RunProjectsLocationsStreamsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RunStreamRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:run", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RunProjectsLocationsStreamsRequest>;

export type RunProjectsLocationsStreamsResponse = Operation;
export const RunProjectsLocationsStreamsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RunProjectsLocationsStreamsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Use this method to start, resume or recover a stream with a non default CDC strategy. */
export const runProjectsLocationsStreams: API.OperationMethod<
  RunProjectsLocationsStreamsRequest,
  RunProjectsLocationsStreamsResponse,
  RunProjectsLocationsStreamsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunProjectsLocationsStreamsRequest,
  output: RunProjectsLocationsStreamsResponse,
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
    T.Http({ method: "GET", path: "v1/{+name}" }),
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
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
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

export interface PatchProjectsLocationsStreamsRequest {
  /** Output only. Identifier. The stream's name. */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the stream resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Optional. Only validate the stream with the changes, without actually updating it. The default is false. */
  validateOnly?: boolean;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. Update the stream without validating it. */
  force?: boolean;
  /** Request body */
  body?: Stream;
}

export const PatchProjectsLocationsStreamsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    body: Schema.optional(Stream).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
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
  /** Optional. Page token received from a previous `ListStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStreams` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filter request. */
  filter?: string;
  /** Required. The parent that owns the collection of streams. */
  parent: string;
  /** Optional. Order by fields for the result. */
  orderBy?: string;
  /** Optional. Maximum number of streams to return. If unspecified, at most 50 streams will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
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
    T.Http({ method: "GET", path: "v1/{+parent}/streams" }),
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
  /** Request body */
  body?: StopBackfillJobRequest;
}

export const StopBackfillJobProjectsLocationsStreamsObjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String.pipe(T.HttpPath("object")),
    body: Schema.optional(StopBackfillJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+object}:stopBackfillJob",
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

/** Use this method to stop a backfill job for the specified stream object. */
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

export interface ListProjectsLocationsStreamsObjectsRequest {
  /** Required. The parent stream that owns the collection of objects. */
  parent: string;
  /** Optional. Page token received from a previous `ListStreamObjectsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStreamObjectsRequest` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Maximum number of objects to return. Default is 50. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsStreamsObjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/objects" }),
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
  /** Request body */
  body?: StartBackfillJobRequest;
}

export const StartBackfillJobProjectsLocationsStreamsObjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String.pipe(T.HttpPath("object")),
    body: Schema.optional(StartBackfillJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+object}:startBackfillJob",
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

/** Use this method to start a backfill job for the specified stream object. */
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

export interface LookupProjectsLocationsStreamsObjectsRequest {
  /** Required. The parent stream that owns the collection of objects. */
  parent: string;
  /** Request body */
  body?: LookupStreamObjectRequest;
}

export const LookupProjectsLocationsStreamsObjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(LookupStreamObjectRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/objects:lookup",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<LookupProjectsLocationsStreamsObjectsRequest>;

export type LookupProjectsLocationsStreamsObjectsResponse = StreamObject;
export const LookupProjectsLocationsStreamsObjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ StreamObject;

export type LookupProjectsLocationsStreamsObjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Use this method to look up a stream object by its source object identifier. */
export const lookupProjectsLocationsStreamsObjects: API.OperationMethod<
  LookupProjectsLocationsStreamsObjectsRequest,
  LookupProjectsLocationsStreamsObjectsResponse,
  LookupProjectsLocationsStreamsObjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LookupProjectsLocationsStreamsObjectsRequest,
  output: LookupProjectsLocationsStreamsObjectsResponse,
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
    T.Http({ method: "GET", path: "v1/{+name}" }),
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
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
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

export interface GetProjectsLocationsConnectionProfilesRequest {
  /** Required. The name of the connection profile resource to get. */
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
  /** Optional. Only validate the connection profile, but don't create any resources. The default is false. */
  validateOnly?: boolean;
  /** Required. The parent that owns the collection of ConnectionProfiles. */
  parent: string;
  /** Required. The connection profile identifier. */
  connectionProfileId?: string;
  /** Optional. Create the connection profile without validating it. */
  force?: boolean;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: ConnectionProfile;
}

export const CreateProjectsLocationsConnectionProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    connectionProfileId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("connectionProfileId"),
    ),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
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

/** Use this method to delete a connection profile. */
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
  /** Required. The parent resource of the connection profile type. Must be in the format `projects/* /locations/*`. */
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
      path: "v1/{+parent}/connectionProfiles:discover",
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

/** Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request. */
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

export interface ListProjectsLocationsConnectionProfilesRequest {
  /** Optional. Maximum number of connection profiles to return. If unspecified, at most 50 connection profiles will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent that owns the collection of connection profiles. */
  parent: string;
  /** Optional. Order by fields for the result. */
  orderBy?: string;
  /** Optional. Filter request. */
  filter?: string;
  /** Optional. Page token received from a previous `ListConnectionProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectionProfiles` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsConnectionProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
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
  /** Optional. Update the connection profile without validating it. */
  force?: boolean;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Output only. Identifier. The resource's name. */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the ConnectionProfile resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Optional. Only validate the connection profile, but don't update any resources. The default is false. */
  validateOnly?: boolean;
  /** Request body */
  body?: ConnectionProfile;
}

export const PatchProjectsLocationsConnectionProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
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

export interface DeleteProjectsLocationsPrivateConnectionsRequest {
  /** Required. The name of the private connectivity configuration to delete. */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to true, any child routes that belong to this PrivateConnection will also be deleted. */
  force?: boolean;
}

export const DeleteProjectsLocationsPrivateConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
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

export interface GetProjectsLocationsPrivateConnectionsRequest {
  /** Required. The name of the private connectivity configuration to get. */
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
  /** Optional. Order by fields for the result. */
  orderBy?: string;
  /** Optional. Filter request. */
  filter?: string;
  /** Optional. Page token received from a previous `ListPrivateConnections` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateConnections` must match the call that provided the page token. */
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

export interface CreateProjectsLocationsPrivateConnectionsRequest {
  /** Required. The private connectivity identifier. */
  privateConnectionId?: string;
  /** Required. The parent that owns the collection of PrivateConnections. */
  parent: string;
  /** Optional. When supplied with PSC Interface config, will get/create the tenant project required for the customer to allow list and won't actually create the private connection. */
  validateOnly?: boolean;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to true, will skip validations. */
  force?: boolean;
  /** Request body */
  body?: PrivateConnection;
}

export const CreateProjectsLocationsPrivateConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateConnectionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("privateConnectionId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
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

export interface CreateProjectsLocationsPrivateConnectionsRoutesRequest {
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent that owns the collection of Routes. */
  parent: string;
  /** Required. The Route identifier. */
  routeId?: string;
  /** Request body */
  body?: Route;
}

export const CreateProjectsLocationsPrivateConnectionsRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    routeId: Schema.optional(Schema.String).pipe(T.HttpQuery("routeId")),
    body: Schema.optional(Route).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/routes", hasBody: true }),
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

/** Use this method to create a route for a private connectivity configuration in a project and location. */
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
    T.Http({ method: "GET", path: "v1/{+name}" }),
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
  /** Optional. Order by fields for the result. */
  orderBy?: string;
  /** Optional. Maximum number of Routes to return. The service may return fewer than this value. If unspecified, at most 50 Routes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. Page token received from a previous `ListRoutes` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRoutes` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filter request. */
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
    T.Http({ method: "GET", path: "v1/{+parent}/routes" }),
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

/** Use this method to list routes created for a private connectivity configuration in a project and location. */
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
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
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
