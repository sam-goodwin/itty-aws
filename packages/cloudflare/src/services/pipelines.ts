/**
 * Cloudflare PIPELINES API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service pipelines
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// =============================================================================
// Errors
// =============================================================================

export class InvalidSinkConfig extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidSinkConfig>()("InvalidSinkConfig", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1012 }],
) {}

export class InvalidSinkId extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidSinkId>()("InvalidSinkId", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 2 }],
) {}

export class InvalidSql extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidSql>()("InvalidSql", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1014 }],
) {}

export class InvalidStreamId extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidStreamId>()("InvalidStreamId", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 2 }],
) {}

export class InvalidStreamName extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidStreamName>()("InvalidStreamName", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 2 }],
) {}

export class PipelineAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<PipelineAlreadyExists>()("PipelineAlreadyExists", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1003 }],
) {}

export class PipelineNotExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<PipelineNotExists>()("PipelineNotExists", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1000 }],
) {}

export class SinkAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SinkAlreadyExists>()("SinkAlreadyExists", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1003 }],
) {}

export class SinkAuthFailed extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SinkAuthFailed>()("SinkAuthFailed", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1012, message: { includes: "could not authenticate" } }],
) {}

export class SinkInUse extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SinkInUse>()("SinkInUse", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 422, message: { includes: "in use" } }],
) {}

export class SinkNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SinkNotFound>()("SinkNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1015 }],
) {}

export class StreamAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<StreamAlreadyExists>()("StreamAlreadyExists", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1003 }],
) {}

export class StreamInUse extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<StreamInUse>()("StreamInUse", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 422, message: { includes: "in use" } }],
) {}

export class StreamNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<StreamNotFound>()("StreamNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1016 }],
) {}

export class TableNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<TableNotFound>()("TableNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1014, message: { includes: "not found" } }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface Batch {
  /** Specifies rough maximum size of files. */
  maxBytes: number;
  /** Specifies duration to wait to aggregate batches files. */
  maxDurationS: number;
  /** Specifies rough maximum number of rows per file. */
  maxRows: number;
}
const Batch = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    maxBytes: Schema.Number,
    maxDurationS: Schema.Number,
    maxRows: Schema.Number,
  }).pipe(
    Schema.encodeKeys({
      maxBytes: "max_bytes",
      maxDurationS: "max_duration_s",
      maxRows: "max_rows",
    }),
  ),
) as unknown as Schema.Codec<Batch>;

interface Compression {
  /** Specifies the desired compression algorithm and format. */
  type: "none" | "gzip" | "deflate" | (string & {});
}
const Compression = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    type: Schema.Union([
      Schema.Literals(["none", "gzip", "deflate"]),
      Schema.String,
    ]),
  }),
) as unknown as Schema.Codec<Compression>;

interface Path {
  /** Specifies the R2 Bucket to store files. */
  bucket: string;
  /** Specifies the name pattern to for individual data files. */
  filename?: string | null;
  /** Specifies the name pattern for directory. */
  filepath?: string | null;
  /** Specifies the base directory within the bucket. */
  prefix?: string | null;
}
const Path = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucket: Schema.String,
    filename: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    filepath: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    prefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Path>;

interface Destination {
  batch: { maxBytes: number; maxDurationS: number; maxRows: number };
  compression: { type: "none" | "gzip" | "deflate" | (string & {}) };
  /** Specifies the format of data to deliver. */
  format: "json";
  path: {
    bucket: string;
    filename?: string | null;
    filepath?: string | null;
    prefix?: string | null;
  };
  /** Specifies the type of destination. */
  type: "r2";
}
const Destination = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    batch: Batch,
    compression: Compression,
    format: Schema.Literal("json"),
    path: Path,
    type: Schema.Literal("r2"),
  }),
) as unknown as Schema.Codec<Destination>;

interface Cors {
  /** Specifies allowed origins to allow Cross Origin HTTP Requests. */
  origins?: string[] | null;
}
const Cors = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    origins: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Cors>;

interface CloudflarePipelinesWorkersPipelinesHTTPSource {
  /** Specifies the format of source data. */
  format: "json";
  type: string;
  /** Specifies whether authentication is required to send to this pipeline via HTTP. */
  authentication?: boolean | null;
  cors?: { origins?: string[] | null } | null;
}
const CloudflarePipelinesWorkersPipelinesHTTPSource =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      format: Schema.Literal("json"),
      type: Schema.String,
      authentication: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      cors: Schema.optional(Schema.Union([Cors, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<CloudflarePipelinesWorkersPipelinesHTTPSource>;

interface CloudflarePipelinesWorkersPipelinesBindingSource {
  /** Specifies the format of source data. */
  format: "json";
  type: string;
}
const CloudflarePipelinesWorkersPipelinesBindingSource =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      format: Schema.Literal("json"),
      type: Schema.String,
    }),
  ) as unknown as Schema.Codec<CloudflarePipelinesWorkersPipelinesBindingSource>;

interface ResultInfo {
  /** Indicates the number of items on current page. */
  count: number;
  /** Indicates the current page number. */
  page: number;
  /** Indicates the number of items per page. */
  perPage: number;
  /** Indicates the total number of items. */
  totalCount: number;
}
const ResultInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    count: Schema.Number,
    page: Schema.Number,
    perPage: Schema.Number,
    totalCount: Schema.Number,
  }).pipe(
    Schema.encodeKeys({
      count: "count",
      page: "page",
      perPage: "per_page",
      totalCount: "total_count",
    }),
  ),
) as unknown as Schema.Codec<ResultInfo>;

interface Result {
  /** Specifies the pipeline identifier. */
  id: string;
  destination?: {
    batch: { maxBytes: number; maxDurationS: number; maxRows: number };
    compression: { type: "none" | "gzip" | "deflate" | (string & {}) };
    format: "json";
    path: {
      bucket: string;
      filename?: string | null;
      filepath?: string | null;
      prefix?: string | null;
    };
    type: "r2";
  } | null;
  /** Indicates the endpoint URL to send traffic. */
  endpoint?: string | null;
  /** Defines the name of the pipeline. */
  name?: string | null;
  source?:
    | (
        | {
            format: "json";
            type: string;
            authentication?: boolean | null;
            cors?: { origins?: string[] | null } | null;
          }
        | { format: "json"; type: string }
      )[]
    | null;
  /** Indicates the version number of last saved configuration. */
  version?: number | null;
}
const Result = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    destination: Schema.optional(Schema.Union([Destination, Schema.Null])),
    endpoint: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    source: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Union([
            CloudflarePipelinesWorkersPipelinesHTTPSource,
            CloudflarePipelinesWorkersPipelinesBindingSource,
          ]),
        ),
        Schema.Null,
      ]),
    ),
    version: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<Result>;

interface Batch2 {
  /** Specifies rough maximum size of files. */
  maxBytes?: number | null;
  /** Specifies duration to wait to aggregate batches files. */
  maxDurationS?: number | null;
  /** Specifies rough maximum number of rows per file. */
  maxRows?: number | null;
}
const Batch2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    maxBytes: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    maxDurationS: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    maxRows: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      maxBytes: "max_bytes",
      maxDurationS: "max_duration_s",
      maxRows: "max_rows",
    }),
  ),
) as unknown as Schema.Codec<Batch2>;

interface Compression2 {
  /** Specifies the desired compression algorithm and format. */
  type?: "none" | "gzip" | "deflate" | (string & {}) | null;
}
const Compression2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    type: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["none", "gzip", "deflate"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<Compression2>;

interface Credentials2 {
  /** Specifies the R2 Bucket Access Key Id. */
  accessKeyId: string;
  /** Specifies the R2 Endpoint. */
  endpoint: string;
  /** Specifies the R2 Bucket Secret Access Key. */
  secretAccessKey: string;
}
const Credentials2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accessKeyId: SensitiveString,
    endpoint: Schema.String,
    secretAccessKey: SensitiveString,
  }).pipe(
    Schema.encodeKeys({
      accessKeyId: "access_key_id",
      endpoint: "endpoint",
      secretAccessKey: "secret_access_key",
    }),
  ),
) as unknown as Schema.Codec<Credentials2>;

interface Destination2 {
  batch: {
    maxBytes?: number | null;
    maxDurationS?: number | null;
    maxRows?: number | null;
  };
  compression: { type?: "none" | "gzip" | "deflate" | (string & {}) | null };
  credentials: {
    accessKeyId: string;
    endpoint: string;
    secretAccessKey: string;
  };
  /** Specifies the format of data to deliver. */
  format: "json";
  path: {
    bucket: string;
    filename?: string | null;
    filepath?: string | null;
    prefix?: string | null;
  };
  /** Specifies the type of destination. */
  type: "r2";
}
const Destination2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    batch: Batch2,
    compression: Compression2,
    credentials: Credentials2,
    format: Schema.Literal("json"),
    path: Path,
    type: Schema.Literal("r2"),
  }),
) as unknown as Schema.Codec<Destination2>;

interface Destination3 {
  batch: {
    maxBytes?: number | null;
    maxDurationS?: number | null;
    maxRows?: number | null;
  };
  compression: { type?: "none" | "gzip" | "deflate" | (string & {}) | null };
  /** Specifies the format of data to deliver. */
  format: "json";
  path: {
    bucket: string;
    filename?: string | null;
    filepath?: string | null;
    prefix?: string | null;
  };
  /** Specifies the type of destination. */
  type: "r2";
  credentials?: {
    accessKeyId: string;
    endpoint: string;
    secretAccessKey: string;
  } | null;
}
const Destination3 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    batch: Batch2,
    compression: Compression2,
    format: Schema.Literal("json"),
    path: Path,
    type: Schema.Literal("r2"),
    credentials: Schema.optional(Schema.Union([Credentials2, Schema.Null])),
  }),
) as unknown as Schema.Codec<Destination3>;

interface FileNaming {
  /** The prefix to use in file name. i.e prefix-<uuid>.parquet */
  prefix?: string | null;
  /** Filename generation strategy. */
  strategy?: "serial" | "uuid" | "uuid_v7" | "ulid" | (string & {}) | null;
  /** This will overwrite the default file suffix. i.e .parquet, use with caution */
  suffix?: string | null;
}
const FileNaming = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    prefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    strategy: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["serial", "uuid", "uuid_v7", "ulid"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    suffix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<FileNaming>;

interface Partitioning {
  /** The pattern of the date string */
  timePattern?: string | null;
}
const Partitioning = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    timePattern: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(Schema.encodeKeys({ timePattern: "time_pattern" })),
) as unknown as Schema.Codec<Partitioning>;

interface RollingPolicy {
  /** Files will be rolled after reaching this number of bytes */
  fileSizeBytes?: number | null;
  /** Number of seconds of inactivity to wait before rolling over to a new file */
  inactivitySeconds?: number | null;
  /** Number of seconds to wait before rolling over to a new file */
  intervalSeconds?: number | null;
}
const RollingPolicy = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    fileSizeBytes: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    inactivitySeconds: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    intervalSeconds: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      fileSizeBytes: "file_size_bytes",
      inactivitySeconds: "inactivity_seconds",
      intervalSeconds: "interval_seconds",
    }),
  ),
) as unknown as Schema.Codec<RollingPolicy>;

interface CloudflarePipelinesR2TablePublic {
  /** Cloudflare Account ID for the bucket */
  accountId: string;
  /** R2 Bucket to write to */
  bucket: string;
  /** Controls filename prefix/suffix and strategy. */
  fileNaming?: {
    prefix?: string | null;
    strategy?: "serial" | "uuid" | "uuid_v7" | "ulid" | (string & {}) | null;
    suffix?: string | null;
  } | null;
  /** Jurisdiction this bucket is hosted in */
  jurisdiction?: string | null;
  /** Data-layout partitioning for sinks. */
  partitioning?: { timePattern?: string | null } | null;
  /** Subpath within the bucket to write to */
  path?: string | null;
  /** Rolling policy for file sinks (when & why to close a file and open a new one). */
  rollingPolicy?: {
    fileSizeBytes?: number | null;
    inactivitySeconds?: number | null;
    intervalSeconds?: number | null;
  } | null;
}
const CloudflarePipelinesR2TablePublic =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String,
      bucket: Schema.String,
      fileNaming: Schema.optional(Schema.Union([FileNaming, Schema.Null])),
      jurisdiction: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      partitioning: Schema.optional(Schema.Union([Partitioning, Schema.Null])),
      path: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      rollingPolicy: Schema.optional(
        Schema.Union([RollingPolicy, Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        accountId: "account_id",
        bucket: "bucket",
        fileNaming: "file_naming",
        jurisdiction: "jurisdiction",
        partitioning: "partitioning",
        path: "path",
        rollingPolicy: "rolling_policy",
      }),
    ),
  ) as unknown as Schema.Codec<CloudflarePipelinesR2TablePublic>;

interface CloudflarePipelinesR2DataCatalogTablePublic {
  /** Cloudflare Account ID */
  accountId: string;
  /** The R2 Bucket that hosts this catalog */
  bucket: string;
  /** Table name */
  tableName: string;
  /** Table namespace */
  namespace?: string | null;
  /** Rolling policy for file sinks (when & why to close a file and open a new one). */
  rollingPolicy?: {
    fileSizeBytes?: number | null;
    inactivitySeconds?: number | null;
    intervalSeconds?: number | null;
  } | null;
}
const CloudflarePipelinesR2DataCatalogTablePublic =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String,
      bucket: Schema.String,
      tableName: Schema.String,
      namespace: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      rollingPolicy: Schema.optional(
        Schema.Union([RollingPolicy, Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        accountId: "account_id",
        bucket: "bucket",
        tableName: "table_name",
        namespace: "namespace",
        rollingPolicy: "rolling_policy",
      }),
    ),
  ) as unknown as Schema.Codec<CloudflarePipelinesR2DataCatalogTablePublic>;

interface Json {
  type: "json";
  decimalEncoding?: "number" | "string" | "bytes" | (string & {}) | null;
  timestampFormat?: "rfc3339" | "unix_millis" | (string & {}) | null;
  unstructured?: boolean | null;
}
const Json = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    type: Schema.Literal("json"),
    decimalEncoding: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["number", "string", "bytes"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    timestampFormat: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["rfc3339", "unix_millis"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    unstructured: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      type: "type",
      decimalEncoding: "decimal_encoding",
      timestampFormat: "timestamp_format",
      unstructured: "unstructured",
    }),
  ),
) as unknown as Schema.Codec<Json>;

interface Parquet {
  type: "parquet";
  compression?:
    | "uncompressed"
    | "snappy"
    | "gzip"
    | "zstd"
    | "lz4"
    | (string & {})
    | null;
  rowGroupBytes?: number | null;
}
const Parquet = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    type: Schema.Literal("parquet"),
    compression: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["uncompressed", "snappy", "gzip", "zstd", "lz4"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    rowGroupBytes: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      type: "type",
      compression: "compression",
      rowGroupBytes: "row_group_bytes",
    }),
  ),
) as unknown as Schema.Codec<Parquet>;

interface Int32 {
  type: "int32";
  metadataKey?: string | null;
  name?: string | null;
  required?: boolean | null;
  sqlName?: string | null;
}
const Int32 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    type: Schema.Literal("int32"),
    metadataKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    required: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    sqlName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      type: "type",
      metadataKey: "metadata_key",
      name: "name",
      required: "required",
      sqlName: "sql_name",
    }),
  ),
) as unknown as Schema.Codec<Int32>;

interface Int64 {
  type: "int64";
  metadataKey?: string | null;
  name?: string | null;
  required?: boolean | null;
  sqlName?: string | null;
}
const Int64 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    type: Schema.Literal("int64"),
    metadataKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    required: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    sqlName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      type: "type",
      metadataKey: "metadata_key",
      name: "name",
      required: "required",
      sqlName: "sql_name",
    }),
  ),
) as unknown as Schema.Codec<Int64>;

interface Float32 {
  type: "float32";
  metadataKey?: string | null;
  name?: string | null;
  required?: boolean | null;
  sqlName?: string | null;
}
const Float32 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    type: Schema.Literal("float32"),
    metadataKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    required: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    sqlName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      type: "type",
      metadataKey: "metadata_key",
      name: "name",
      required: "required",
      sqlName: "sql_name",
    }),
  ),
) as unknown as Schema.Codec<Float32>;

interface Float64 {
  type: "float64";
  metadataKey?: string | null;
  name?: string | null;
  required?: boolean | null;
  sqlName?: string | null;
}
const Float64 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    type: Schema.Literal("float64"),
    metadataKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    required: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    sqlName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      type: "type",
      metadataKey: "metadata_key",
      name: "name",
      required: "required",
      sqlName: "sql_name",
    }),
  ),
) as unknown as Schema.Codec<Float64>;

interface Bool {
  type: "bool";
  metadataKey?: string | null;
  name?: string | null;
  required?: boolean | null;
  sqlName?: string | null;
}
const Bool = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    type: Schema.Literal("bool"),
    metadataKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    required: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    sqlName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      type: "type",
      metadataKey: "metadata_key",
      name: "name",
      required: "required",
      sqlName: "sql_name",
    }),
  ),
) as unknown as Schema.Codec<Bool>;

interface String2 {
  type: "string";
  metadataKey?: string | null;
  name?: string | null;
  required?: boolean | null;
  sqlName?: string | null;
}
const String2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    type: Schema.Literal("string"),
    metadataKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    required: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    sqlName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      type: "type",
      metadataKey: "metadata_key",
      name: "name",
      required: "required",
      sqlName: "sql_name",
    }),
  ),
) as unknown as Schema.Codec<String2>;

interface Binary {
  type: "binary";
  metadataKey?: string | null;
  name?: string | null;
  required?: boolean | null;
  sqlName?: string | null;
}
const Binary = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    type: Schema.Literal("binary"),
    metadataKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    required: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    sqlName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      type: "type",
      metadataKey: "metadata_key",
      name: "name",
      required: "required",
      sqlName: "sql_name",
    }),
  ),
) as unknown as Schema.Codec<Binary>;

interface Timestamp {
  type: "timestamp";
  metadataKey?: string | null;
  name?: string | null;
  required?: boolean | null;
  sqlName?: string | null;
  unit?:
    | "second"
    | "millisecond"
    | "microsecond"
    | "nanosecond"
    | (string & {})
    | null;
}
const Timestamp = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    type: Schema.Literal("timestamp"),
    metadataKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    required: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    sqlName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    unit: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "second",
            "millisecond",
            "microsecond",
            "nanosecond",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      type: "type",
      metadataKey: "metadata_key",
      name: "name",
      required: "required",
      sqlName: "sql_name",
      unit: "unit",
    }),
  ),
) as unknown as Schema.Codec<Timestamp>;

interface Json2 {
  type: "json";
  metadataKey?: string | null;
  name?: string | null;
  required?: boolean | null;
  sqlName?: string | null;
}
const Json2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    type: Schema.Literal("json"),
    metadataKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    required: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    sqlName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      type: "type",
      metadataKey: "metadata_key",
      name: "name",
      required: "required",
      sqlName: "sql_name",
    }),
  ),
) as unknown as Schema.Codec<Json2>;

interface Schema2 {
  fields?:
    | (
        | {
            type: "int32";
            metadataKey?: string | null;
            name?: string | null;
            required?: boolean | null;
            sqlName?: string | null;
          }
        | {
            type: "int64";
            metadataKey?: string | null;
            name?: string | null;
            required?: boolean | null;
            sqlName?: string | null;
          }
        | {
            type: "float32";
            metadataKey?: string | null;
            name?: string | null;
            required?: boolean | null;
            sqlName?: string | null;
          }
        | {
            type: "float64";
            metadataKey?: string | null;
            name?: string | null;
            required?: boolean | null;
            sqlName?: string | null;
          }
        | {
            type: "bool";
            metadataKey?: string | null;
            name?: string | null;
            required?: boolean | null;
            sqlName?: string | null;
          }
        | {
            type: "string";
            metadataKey?: string | null;
            name?: string | null;
            required?: boolean | null;
            sqlName?: string | null;
          }
        | {
            type: "binary";
            metadataKey?: string | null;
            name?: string | null;
            required?: boolean | null;
            sqlName?: string | null;
          }
        | {
            type: "timestamp";
            metadataKey?: string | null;
            name?: string | null;
            required?: boolean | null;
            sqlName?: string | null;
            unit?:
              | "second"
              | "millisecond"
              | "microsecond"
              | "nanosecond"
              | (string & {})
              | null;
          }
        | {
            type: "json";
            metadataKey?: string | null;
            name?: string | null;
            required?: boolean | null;
            sqlName?: string | null;
          }
        | unknown
      )[]
    | null;
  format?:
    | {
        type: "json";
        metadataKey?: string | null;
        name?: string | null;
        required?: boolean | null;
        sqlName?: string | null;
      }
    | {
        type: "parquet";
        compression?:
          | "uncompressed"
          | "snappy"
          | "gzip"
          | "zstd"
          | "lz4"
          | (string & {})
          | null;
        rowGroupBytes?: number | null;
      }
    | null;
  inferred?: boolean | null;
}
const Schema2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    fields: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Union([
            Int32,
            Int64,
            Float32,
            Float64,
            Bool,
            String2,
            Binary,
            Timestamp,
            Json2,
            Schema.Unknown,
          ]),
        ),
        Schema.Null,
      ]),
    ),
    format: Schema.optional(
      Schema.Union([Schema.Union([Json2, Parquet]), Schema.Null]),
    ),
    inferred: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }),
) as unknown as Schema.Codec<Schema2>;

interface ListSinksResponseResult {
  /** Indicates a unique identifier for this sink. */
  id: string;
  createdAt: string;
  modifiedAt: string;
  /** Defines the name of the Sink. */
  name: string;
  /** Specifies the type of sink. */
  type: "r2" | "r2_data_catalog" | (string & {});
  /** Defines the configuration of the R2 Sink. */
  config?:
    | {
        accountId: string;
        bucket: string;
        fileNaming?: {
          prefix?: string | null;
          strategy?:
            | "serial"
            | "uuid"
            | "uuid_v7"
            | "ulid"
            | (string & {})
            | null;
          suffix?: string | null;
        } | null;
        jurisdiction?: string | null;
        partitioning?: { timePattern?: string | null } | null;
        path?: string | null;
        rollingPolicy?: {
          fileSizeBytes?: number | null;
          inactivitySeconds?: number | null;
          intervalSeconds?: number | null;
        } | null;
      }
    | {
        accountId: string;
        bucket: string;
        tableName: string;
        namespace?: string | null;
        rollingPolicy?: {
          fileSizeBytes?: number | null;
          inactivitySeconds?: number | null;
          intervalSeconds?: number | null;
        } | null;
      }
    | null;
  format?:
    | {
        type: "json";
        decimalEncoding?: "number" | "string" | "bytes" | (string & {}) | null;
        timestampFormat?: "rfc3339" | "unix_millis" | (string & {}) | null;
        unstructured?: boolean | null;
      }
    | {
        type: "parquet";
        compression?:
          | "uncompressed"
          | "snappy"
          | "gzip"
          | "zstd"
          | "lz4"
          | (string & {})
          | null;
        rowGroupBytes?: number | null;
      }
    | null;
  schema?: {
    fields?:
      | (
          | {
              type: "int32";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "int64";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "float32";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "float64";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "bool";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "string";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "binary";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "timestamp";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
              unit?:
                | "second"
                | "millisecond"
                | "microsecond"
                | "nanosecond"
                | (string & {})
                | null;
            }
          | {
              type: "json";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | unknown
        )[]
      | null;
    format?:
      | {
          type: "json";
          metadataKey?: string | null;
          name?: string | null;
          required?: boolean | null;
          sqlName?: string | null;
        }
      | {
          type: "parquet";
          compression?:
            | "uncompressed"
            | "snappy"
            | "gzip"
            | "zstd"
            | "lz4"
            | (string & {})
            | null;
          rowGroupBytes?: number | null;
        }
      | null;
    inferred?: boolean | null;
  } | null;
}
const ListSinksResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    createdAt: Schema.String,
    modifiedAt: Schema.String,
    name: Schema.String,
    type: Schema.Union([
      Schema.Literals(["r2", "r2_data_catalog"]),
      Schema.String,
    ]),
    config: Schema.optional(
      Schema.Union([
        Schema.Union([
          CloudflarePipelinesR2DataCatalogTablePublic,
          CloudflarePipelinesR2TablePublic,
        ]),
        Schema.Null,
      ]),
    ),
    format: Schema.optional(
      Schema.Union([Schema.Union([Json, Parquet]), Schema.Null]),
    ),
    schema: Schema.optional(Schema.Union([Schema2, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      createdAt: "created_at",
      modifiedAt: "modified_at",
      name: "name",
      type: "type",
      config: "config",
      format: "format",
      schema: "schema",
    }),
  ),
) as unknown as Schema.Codec<ListSinksResponseResult>;

interface ListSinksResponseResultInfo {
  count?: number | null;
  page?: number | null;
  perPage?: number | null;
  totalCount?: number | null;
}
const ListSinksResponseResultInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      totalCount: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        count: "count",
        page: "page",
        perPage: "per_page",
        totalCount: "total_count",
      }),
    ),
) as unknown as Schema.Codec<ListSinksResponseResultInfo>;

interface Credentials3 {
  /** Cloudflare Account ID for the bucket */
  accessKeyId: string;
  /** Cloudflare Account ID for the bucket */
  secretAccessKey: string;
}
const Credentials3 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accessKeyId: SensitiveString,
    secretAccessKey: SensitiveString,
  }).pipe(
    Schema.encodeKeys({
      accessKeyId: "access_key_id",
      secretAccessKey: "secret_access_key",
    }),
  ),
) as unknown as Schema.Codec<Credentials3>;

interface CloudflarePipelinesR2Table {
  /** Cloudflare Account ID for the bucket */
  accountId: string;
  /** R2 Bucket to write to */
  bucket: string;
  credentials: { accessKeyId: string; secretAccessKey: string };
  /** Controls filename prefix/suffix and strategy. */
  fileNaming?: {
    prefix?: string | null;
    strategy?: "serial" | "uuid" | "uuid_v7" | "ulid" | (string & {}) | null;
    suffix?: string | null;
  } | null;
  /** Jurisdiction this bucket is hosted in */
  jurisdiction?: string | null;
  /** Data-layout partitioning for sinks. */
  partitioning?: { timePattern?: string | null } | null;
  /** Subpath within the bucket to write to */
  path?: string | null;
  /** Rolling policy for file sinks (when & why to close a file and open a new one). */
  rollingPolicy?: {
    fileSizeBytes?: number | null;
    inactivitySeconds?: number | null;
    intervalSeconds?: number | null;
  } | null;
}
const CloudflarePipelinesR2Table = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String,
      bucket: Schema.String,
      credentials: Credentials3,
      fileNaming: Schema.optional(Schema.Union([FileNaming, Schema.Null])),
      jurisdiction: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      partitioning: Schema.optional(Schema.Union([Partitioning, Schema.Null])),
      path: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      rollingPolicy: Schema.optional(
        Schema.Union([RollingPolicy, Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        accountId: "account_id",
        bucket: "bucket",
        credentials: "credentials",
        fileNaming: "file_naming",
        jurisdiction: "jurisdiction",
        partitioning: "partitioning",
        path: "path",
        rollingPolicy: "rolling_policy",
      }),
    ),
) as unknown as Schema.Codec<CloudflarePipelinesR2Table>;

interface CloudflarePipelinesR2DataCatalogTable {
  /** Authentication token */
  token: string;
  /** Cloudflare Account ID */
  accountId: string;
  /** The R2 Bucket that hosts this catalog */
  bucket: string;
  /** Table name */
  tableName: string;
  /** Table namespace */
  namespace?: string | null;
  /** Rolling policy for file sinks (when & why to close a file and open a new one). */
  rollingPolicy?: {
    fileSizeBytes?: number | null;
    inactivitySeconds?: number | null;
    intervalSeconds?: number | null;
  } | null;
}
const CloudflarePipelinesR2DataCatalogTable =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      token: Schema.String,
      accountId: Schema.String,
      bucket: Schema.String,
      tableName: Schema.String,
      namespace: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      rollingPolicy: Schema.optional(
        Schema.Union([RollingPolicy, Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        token: "token",
        accountId: "account_id",
        bucket: "bucket",
        tableName: "table_name",
        namespace: "namespace",
        rollingPolicy: "rolling_policy",
      }),
    ),
  ) as unknown as Schema.Codec<CloudflarePipelinesR2DataCatalogTable>;

interface CloudflarePipelinesR2Table2 {
  /** Cloudflare Account ID for the bucket */
  accountId: string;
  /** R2 Bucket to write to */
  bucket: string;
  credentials?: { accessKeyId: string; secretAccessKey: string } | null;
  /** Controls filename prefix/suffix and strategy. */
  fileNaming?: {
    prefix?: string | null;
    strategy?: "serial" | "uuid" | "uuid_v7" | "ulid" | (string & {}) | null;
    suffix?: string | null;
  } | null;
  /** Jurisdiction this bucket is hosted in */
  jurisdiction?: string | null;
  /** Data-layout partitioning for sinks. */
  partitioning?: { timePattern?: string | null } | null;
  /** Subpath within the bucket to write to */
  path?: string | null;
  /** Rolling policy for file sinks (when & why to close a file and open a new one). */
  rollingPolicy?: {
    fileSizeBytes?: number | null;
    inactivitySeconds?: number | null;
    intervalSeconds?: number | null;
  } | null;
}
const CloudflarePipelinesR2Table2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String,
      bucket: Schema.String,
      credentials: Schema.optional(Schema.Union([Credentials3, Schema.Null])),
      fileNaming: Schema.optional(Schema.Union([FileNaming, Schema.Null])),
      jurisdiction: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      partitioning: Schema.optional(Schema.Union([Partitioning, Schema.Null])),
      path: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      rollingPolicy: Schema.optional(
        Schema.Union([RollingPolicy, Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        accountId: "account_id",
        bucket: "bucket",
        credentials: "credentials",
        fileNaming: "file_naming",
        jurisdiction: "jurisdiction",
        partitioning: "partitioning",
        path: "path",
        rollingPolicy: "rolling_policy",
      }),
    ),
) as unknown as Schema.Codec<CloudflarePipelinesR2Table2>;

interface Edge {
  destId: number;
  edgeType: string;
  keyType: string;
  srcId: number;
  valueType: string;
}
const Edge = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    destId: Schema.Number,
    edgeType: Schema.String,
    keyType: Schema.String,
    srcId: Schema.Number,
    valueType: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      destId: "dest_id",
      edgeType: "edge_type",
      keyType: "key_type",
      srcId: "src_id",
      valueType: "value_type",
    }),
  ),
) as unknown as Schema.Codec<Edge>;

interface Node {
  description: string;
  nodeId: number;
  operator: string;
  parallelism: number;
}
const Node = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    description: Schema.String,
    nodeId: Schema.Number,
    operator: Schema.String,
    parallelism: Schema.Number,
  }).pipe(
    Schema.encodeKeys({
      description: "description",
      nodeId: "node_id",
      operator: "operator",
      parallelism: "parallelism",
    }),
  ),
) as unknown as Schema.Codec<Node>;

interface Graph {
  edges: {
    destId: number;
    edgeType: string;
    keyType: string;
    srcId: number;
    valueType: string;
  }[];
  nodes: {
    description: string;
    nodeId: number;
    operator: string;
    parallelism: number;
  }[];
}
const Graph = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    edges: Schema.Array(Edge),
    nodes: Schema.Array(Node),
  }),
) as unknown as Schema.Codec<Graph>;

interface Http {
  /** Indicates that authentication is required for the HTTP endpoint. */
  authentication: boolean;
  /** Indicates that the HTTP endpoint is enabled. */
  enabled: boolean;
  /** Specifies the CORS options for the HTTP endpoint. */
  cors?: { origins?: string[] | null } | null;
}
const Http = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    authentication: Schema.Boolean,
    enabled: Schema.Boolean,
    cors: Schema.optional(Schema.Union([Cors, Schema.Null])),
  }),
) as unknown as Schema.Codec<Http>;

interface WorkerBinding {
  /** Indicates that the worker binding is enabled. */
  enabled: boolean;
}
const WorkerBinding = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.Boolean,
  }),
) as unknown as Schema.Codec<WorkerBinding>;

interface ListStreamsResponseResult {
  /** Indicates a unique identifier for this stream. */
  id: string;
  createdAt: string;
  http: {
    authentication: boolean;
    enabled: boolean;
    cors?: { origins?: string[] | null } | null;
  };
  modifiedAt: string;
  /** Indicates the name of the Stream. */
  name: string;
  /** Indicates the current version of this stream. */
  version: number;
  workerBinding: { enabled: boolean };
  /** Indicates the endpoint URL of this stream. */
  endpoint?: string | null;
  format?:
    | {
        type: "json";
        decimalEncoding?: "number" | "string" | "bytes" | (string & {}) | null;
        timestampFormat?: "rfc3339" | "unix_millis" | (string & {}) | null;
        unstructured?: boolean | null;
      }
    | {
        type: "parquet";
        compression?:
          | "uncompressed"
          | "snappy"
          | "gzip"
          | "zstd"
          | "lz4"
          | (string & {})
          | null;
        rowGroupBytes?: number | null;
      }
    | null;
  schema?: {
    fields?:
      | (
          | {
              type: "int32";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "int64";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "float32";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "float64";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "bool";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "string";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "binary";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "timestamp";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
              unit?:
                | "second"
                | "millisecond"
                | "microsecond"
                | "nanosecond"
                | (string & {})
                | null;
            }
          | {
              type: "json";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | unknown
        )[]
      | null;
    format?:
      | {
          type: "json";
          metadataKey?: string | null;
          name?: string | null;
          required?: boolean | null;
          sqlName?: string | null;
        }
      | {
          type: "parquet";
          compression?:
            | "uncompressed"
            | "snappy"
            | "gzip"
            | "zstd"
            | "lz4"
            | (string & {})
            | null;
          rowGroupBytes?: number | null;
        }
      | null;
    inferred?: boolean | null;
  } | null;
}
const ListStreamsResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      http: Http,
      modifiedAt: Schema.String,
      name: Schema.String,
      version: Schema.Number,
      workerBinding: WorkerBinding,
      endpoint: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      format: Schema.optional(
        Schema.Union([Schema.Union([Json, Parquet]), Schema.Null]),
      ),
      schema: Schema.optional(Schema.Union([Schema2, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        createdAt: "created_at",
        http: "http",
        modifiedAt: "modified_at",
        name: "name",
        version: "version",
        workerBinding: "worker_binding",
        endpoint: "endpoint",
        format: "format",
        schema: "schema",
      }),
    ),
) as unknown as Schema.Codec<ListStreamsResponseResult>;

interface Table {
  /** Unique identifier for the connection (stream or sink). */
  id: string;
  /** Latest available version of the connection. */
  latest: number;
  /** Name of the connection. */
  name: string;
  /** Type of the connection. */
  type: "stream" | "sink" | (string & {});
  /** Current version of the connection used by this pipeline. */
  version: number;
}
const Table = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    latest: Schema.Number,
    name: Schema.String,
    type: Schema.Union([Schema.Literals(["stream", "sink"]), Schema.String]),
    version: Schema.Number,
  }),
) as unknown as Schema.Codec<Table>;

interface ListV1PipelineResponseResult {
  /** Indicates a unique identifier for this pipeline. */
  id: string;
  createdAt: string;
  modifiedAt: string;
  /** Indicates the name of the Pipeline. */
  name: string;
  /** Specifies SQL for the Pipeline processing flow. */
  sql: string;
  /** Indicates the current status of the Pipeline. */
  status: string;
}
const ListV1PipelineResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      modifiedAt: Schema.String,
      name: Schema.String,
      sql: Schema.String,
      status: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        createdAt: "created_at",
        modifiedAt: "modified_at",
        name: "name",
        sql: "sql",
        status: "status",
      }),
    ),
) as unknown as Schema.Codec<ListV1PipelineResponseResult>;

// =============================================================================
// Pipeline
// =============================================================================

export interface GetPipelineRequest {
  pipelineName: string;
  /** Specifies the public ID of the account. */
  accountId: string;
}

export const GetPipelineRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      pipelineName: Schema.String.pipe(T.HttpPath("pipelineName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/pipelines/{pipelineName}",
      }),
    ),
) as unknown as Schema.Codec<GetPipelineRequest>;

export interface GetPipelineResponse {
  /** Specifies the pipeline identifier. */
  id: string;
  destination: {
    batch: { maxBytes: number; maxDurationS: number; maxRows: number };
    compression: { type: "none" | "gzip" | "deflate" | (string & {}) };
    format: "json";
    path: {
      bucket: string;
      filename?: string | null;
      filepath?: string | null;
      prefix?: string | null;
    };
    type: "r2";
  };
  /** Indicates the endpoint URL to send traffic. */
  endpoint: string;
  /** Defines the name of the pipeline. */
  name: string;
  source: (
    | {
        format: "json";
        type: string;
        authentication?: boolean | null;
        cors?: { origins?: string[] | null } | null;
      }
    | { format: "json"; type: string }
  )[];
  /** Indicates the version number of last saved configuration. */
  version: number;
}

export const GetPipelineResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      destination: Destination,
      endpoint: Schema.String,
      name: Schema.String,
      source: Schema.Array(
        Schema.Union([
          CloudflarePipelinesWorkersPipelinesHTTPSource,
          CloudflarePipelinesWorkersPipelinesBindingSource,
        ]),
      ),
      version: Schema.Number,
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetPipelineResponse>;

export type GetPipelineError = DefaultErrors | PipelineNotExists;

export const getPipeline: API.OperationMethod<
  GetPipelineRequest,
  GetPipelineResponse,
  GetPipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPipelineRequest,
  output: GetPipelineResponse,
  errors: [PipelineNotExists],
}));

export interface ListPipelinesRequest {
  /** Path param: Specifies the public ID of the account. */
  accountId: string;
  /** Query param: Specifies which page to retrieve. */
  page?: string;
  /** Query param: Specifies the number of pipelines per page. */
  perPage?: string;
  /** Query param: Specifies the prefix of pipeline name to search. */
  search?: string;
}

export const ListPipelinesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.String).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.String).pipe(T.HttpQuery("per_page")),
      search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
    }).pipe(
      T.Http({ method: "GET", path: "/accounts/{account_id}/pipelines" }),
    ),
) as unknown as Schema.Codec<ListPipelinesRequest>;

export interface ListPipelinesResponse {
  resultInfo?: {
    count: number;
    page: number;
    perPage: number;
    totalCount: number;
  } | null;
  results: {
    id: string;
    destination?: {
      batch: { maxBytes: number; maxDurationS: number; maxRows: number };
      compression: { type: "none" | "gzip" | "deflate" | (string & {}) };
      format: "json";
      path: {
        bucket: string;
        filename?: string | null;
        filepath?: string | null;
        prefix?: string | null;
      };
      type: "r2";
    } | null;
    endpoint?: string | null;
    name?: string | null;
    source?:
      | (
          | {
              format: "json";
              type: string;
              authentication?: boolean | null;
              cors?: { origins?: string[] | null } | null;
            }
          | { format: "json"; type: string }
        )[]
      | null;
    version?: number | null;
  }[];
  /** Indicates whether the API call was successful. */
  success: boolean;
}

export const ListPipelinesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      resultInfo: Schema.optional(Schema.Union([ResultInfo, Schema.Null])),
      results: Schema.Array(Result),
      success: Schema.Boolean,
    }).pipe(
      Schema.encodeKeys({
        resultInfo: "result_info",
        results: "result",
        success: "success",
      }),
    ),
) as unknown as Schema.Codec<ListPipelinesResponse>;

export type ListPipelinesError = DefaultErrors;

export const listPipelines: API.OperationMethod<
  ListPipelinesRequest,
  ListPipelinesResponse,
  ListPipelinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListPipelinesRequest,
  output: ListPipelinesResponse,
  errors: [],
}));

export interface CreatePipelineRequest {
  /** Path param: Specifies the public ID of the account. */
  accountId: string;
  /** Body param */
  destination: {
    batch: { maxBytes?: number; maxDurationS?: number; maxRows?: number };
    compression: { type?: "none" | "gzip" | "deflate" | (string & {}) };
    credentials: {
      accessKeyId: string;
      endpoint: string;
      secretAccessKey: string;
    };
    format: "json";
    path: {
      bucket: string;
      filename?: string;
      filepath?: string;
      prefix?: string;
    };
    type: "r2";
  };
  /** Body param: Defines the name of the pipeline. */
  name: string;
  /** Body param */
  source: (
    | {
        format: "json";
        type: string;
        authentication?: boolean;
        cors?: { origins?: string[] };
      }
    | { format: "json"; type: string }
  )[];
}

export const CreatePipelineRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      destination: Destination2,
      name: Schema.String,
      source: Schema.Array(
        Schema.Union([
          CloudflarePipelinesWorkersPipelinesHTTPSource,
          CloudflarePipelinesWorkersPipelinesBindingSource,
        ]),
      ),
    }).pipe(
      T.Http({ method: "POST", path: "/accounts/{account_id}/pipelines" }),
    ),
) as unknown as Schema.Codec<CreatePipelineRequest>;

export interface CreatePipelineResponse {
  /** Specifies the pipeline identifier. */
  id: string;
  destination: {
    batch: { maxBytes: number; maxDurationS: number; maxRows: number };
    compression: { type: "none" | "gzip" | "deflate" | (string & {}) };
    format: "json";
    path: {
      bucket: string;
      filename?: string | null;
      filepath?: string | null;
      prefix?: string | null;
    };
    type: "r2";
  };
  /** Indicates the endpoint URL to send traffic. */
  endpoint: string;
  /** Defines the name of the pipeline. */
  name: string;
  source: (
    | {
        format: "json";
        type: string;
        authentication?: boolean | null;
        cors?: { origins?: string[] | null } | null;
      }
    | { format: "json"; type: string }
  )[];
  /** Indicates the version number of last saved configuration. */
  version: number;
}

export const CreatePipelineResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      destination: Destination,
      endpoint: Schema.String,
      name: Schema.String,
      source: Schema.Array(
        Schema.Union([
          CloudflarePipelinesWorkersPipelinesHTTPSource,
          CloudflarePipelinesWorkersPipelinesBindingSource,
        ]),
      ),
      version: Schema.Number,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreatePipelineResponse>;

export type CreatePipelineError = DefaultErrors;

export const createPipeline: API.OperationMethod<
  CreatePipelineRequest,
  CreatePipelineResponse,
  CreatePipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePipelineRequest,
  output: CreatePipelineResponse,
  errors: [],
}));

export interface UpdatePipelineRequest {
  pipelineName: string;
  /** Path param: Specifies the public ID of the account. */
  accountId: string;
  /** Body param */
  destination: {
    batch: { maxBytes?: number; maxDurationS?: number; maxRows?: number };
    compression: { type?: "none" | "gzip" | "deflate" | (string & {}) };
    format: "json";
    path: {
      bucket: string;
      filename?: string;
      filepath?: string;
      prefix?: string;
    };
    type: "r2";
    credentials?: {
      accessKeyId: string;
      endpoint: string;
      secretAccessKey: string;
    };
  };
  /** Body param: Defines the name of the pipeline. */
  name: string;
  /** Body param */
  source: (
    | {
        format: "json";
        type: string;
        authentication?: boolean;
        cors?: { origins?: string[] };
      }
    | { format: "json"; type: string }
  )[];
}

export const UpdatePipelineRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      pipelineName: Schema.String.pipe(T.HttpPath("pipelineName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      destination: Destination3,
      name: Schema.String,
      source: Schema.Array(
        Schema.Union([
          CloudflarePipelinesWorkersPipelinesHTTPSource,
          CloudflarePipelinesWorkersPipelinesBindingSource,
        ]),
      ),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/pipelines/{pipelineName}",
      }),
    ),
) as unknown as Schema.Codec<UpdatePipelineRequest>;

export interface UpdatePipelineResponse {
  /** Specifies the pipeline identifier. */
  id: string;
  destination: {
    batch: { maxBytes: number; maxDurationS: number; maxRows: number };
    compression: { type: "none" | "gzip" | "deflate" | (string & {}) };
    format: "json";
    path: {
      bucket: string;
      filename?: string | null;
      filepath?: string | null;
      prefix?: string | null;
    };
    type: "r2";
  };
  /** Indicates the endpoint URL to send traffic. */
  endpoint: string;
  /** Defines the name of the pipeline. */
  name: string;
  source: (
    | {
        format: "json";
        type: string;
        authentication?: boolean | null;
        cors?: { origins?: string[] | null } | null;
      }
    | { format: "json"; type: string }
  )[];
  /** Indicates the version number of last saved configuration. */
  version: number;
}

export const UpdatePipelineResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      destination: Destination,
      endpoint: Schema.String,
      name: Schema.String,
      source: Schema.Array(
        Schema.Union([
          CloudflarePipelinesWorkersPipelinesHTTPSource,
          CloudflarePipelinesWorkersPipelinesBindingSource,
        ]),
      ),
      version: Schema.Number,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdatePipelineResponse>;

export type UpdatePipelineError = DefaultErrors | PipelineNotExists;

export const updatePipeline: API.OperationMethod<
  UpdatePipelineRequest,
  UpdatePipelineResponse,
  UpdatePipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdatePipelineRequest,
  output: UpdatePipelineResponse,
  errors: [PipelineNotExists],
}));

export interface DeletePipelineRequest {
  pipelineName: string;
  /** Specifies the public ID of the account. */
  accountId: string;
}

export const DeletePipelineRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      pipelineName: Schema.String.pipe(T.HttpPath("pipelineName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/pipelines/{pipelineName}",
      }),
    ),
) as unknown as Schema.Codec<DeletePipelineRequest>;

export type DeletePipelineResponse = unknown;

export const DeletePipelineResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
    () => Schema.Unknown,
  ) as unknown as Schema.Codec<DeletePipelineResponse>;

export type DeletePipelineError = DefaultErrors | PipelineNotExists;

export const deletePipeline: API.OperationMethod<
  DeletePipelineRequest,
  DeletePipelineResponse,
  DeletePipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePipelineRequest,
  output: DeletePipelineResponse,
  errors: [PipelineNotExists],
}));

// =============================================================================
// Sink
// =============================================================================

export interface GetSinkRequest {
  sinkId: string;
  /** Specifies the public ID of the account. */
  accountId: string;
}

export const GetSinkRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    sinkId: Schema.String.pipe(T.HttpPath("sinkId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/pipelines/v1/sinks/{sinkId}",
    }),
  ),
) as unknown as Schema.Codec<GetSinkRequest>;

export interface GetSinkResponse {
  /** Indicates a unique identifier for this sink. */
  id: string;
  createdAt: string;
  modifiedAt: string;
  /** Defines the name of the Sink. */
  name: string;
  /** Specifies the type of sink. */
  type: "r2" | "r2_data_catalog" | (string & {});
  /** Defines the configuration of the R2 Sink. */
  config?:
    | {
        accountId: string;
        bucket: string;
        fileNaming?: {
          prefix?: string | null;
          strategy?:
            | "serial"
            | "uuid"
            | "uuid_v7"
            | "ulid"
            | (string & {})
            | null;
          suffix?: string | null;
        } | null;
        jurisdiction?: string | null;
        partitioning?: { timePattern?: string | null } | null;
        path?: string | null;
        rollingPolicy?: {
          fileSizeBytes?: number | null;
          inactivitySeconds?: number | null;
          intervalSeconds?: number | null;
        } | null;
      }
    | {
        accountId: string;
        bucket: string;
        tableName: string;
        namespace?: string | null;
        rollingPolicy?: {
          fileSizeBytes?: number | null;
          inactivitySeconds?: number | null;
          intervalSeconds?: number | null;
        } | null;
      }
    | null;
  format?:
    | {
        type: "json";
        decimalEncoding?: "number" | "string" | "bytes" | (string & {}) | null;
        timestampFormat?: "rfc3339" | "unix_millis" | (string & {}) | null;
        unstructured?: boolean | null;
      }
    | {
        type: "parquet";
        compression?:
          | "uncompressed"
          | "snappy"
          | "gzip"
          | "zstd"
          | "lz4"
          | (string & {})
          | null;
        rowGroupBytes?: number | null;
      }
    | null;
  schema?: {
    fields?:
      | (
          | {
              type: "int32";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "int64";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "float32";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "float64";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "bool";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "string";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "binary";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "timestamp";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
              unit?:
                | "second"
                | "millisecond"
                | "microsecond"
                | "nanosecond"
                | (string & {})
                | null;
            }
          | {
              type: "json";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | unknown
        )[]
      | null;
    format?:
      | {
          type: "json";
          metadataKey?: string | null;
          name?: string | null;
          required?: boolean | null;
          sqlName?: string | null;
        }
      | {
          type: "parquet";
          compression?:
            | "uncompressed"
            | "snappy"
            | "gzip"
            | "zstd"
            | "lz4"
            | (string & {})
            | null;
          rowGroupBytes?: number | null;
        }
      | null;
    inferred?: boolean | null;
  } | null;
}

export const GetSinkResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    createdAt: Schema.String,
    modifiedAt: Schema.String,
    name: Schema.String,
    type: Schema.Union([
      Schema.Literals(["r2", "r2_data_catalog"]),
      Schema.String,
    ]),
    config: Schema.optional(
      Schema.Union([
        Schema.Union([
          CloudflarePipelinesR2DataCatalogTablePublic,
          CloudflarePipelinesR2TablePublic,
        ]),
        Schema.Null,
      ]),
    ),
    format: Schema.optional(
      Schema.Union([Schema.Union([Json, Parquet]), Schema.Null]),
    ),
    schema: Schema.optional(Schema.Union([Schema2, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        createdAt: "created_at",
        modifiedAt: "modified_at",
        name: "name",
        type: "type",
        config: "config",
        format: "format",
        schema: "schema",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetSinkResponse>;

export type GetSinkError = DefaultErrors | SinkNotFound | InvalidSinkId;

export const getSink: API.OperationMethod<
  GetSinkRequest,
  GetSinkResponse,
  GetSinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSinkRequest,
  output: GetSinkResponse,
  errors: [SinkNotFound, InvalidSinkId],
}));

export interface ListSinksRequest {
  /** Path param: Specifies the public ID of the account. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Filters sinks by name (case-insensitive substring). */
  name?: string;
  /** Query param */
  pipelineId?: string;
}

export const ListSinksRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
    pipelineId: Schema.optional(Schema.String).pipe(T.HttpQuery("pipeline_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/pipelines/v1/sinks",
    }),
  ),
) as unknown as Schema.Codec<ListSinksRequest>;

export interface ListSinksResponse {
  result: {
    id: string;
    createdAt: string;
    modifiedAt: string;
    name: string;
    type: "r2" | "r2_data_catalog" | (string & {});
    config?:
      | {
          accountId: string;
          bucket: string;
          fileNaming?: {
            prefix?: string | null;
            strategy?:
              | "serial"
              | "uuid"
              | "uuid_v7"
              | "ulid"
              | (string & {})
              | null;
            suffix?: string | null;
          } | null;
          jurisdiction?: string | null;
          partitioning?: { timePattern?: string | null } | null;
          path?: string | null;
          rollingPolicy?: {
            fileSizeBytes?: number | null;
            inactivitySeconds?: number | null;
            intervalSeconds?: number | null;
          } | null;
        }
      | {
          accountId: string;
          bucket: string;
          tableName: string;
          namespace?: string | null;
          rollingPolicy?: {
            fileSizeBytes?: number | null;
            inactivitySeconds?: number | null;
            intervalSeconds?: number | null;
          } | null;
        }
      | null;
    format?:
      | {
          type: "json";
          decimalEncoding?:
            | "number"
            | "string"
            | "bytes"
            | (string & {})
            | null;
          timestampFormat?: "rfc3339" | "unix_millis" | (string & {}) | null;
          unstructured?: boolean | null;
        }
      | {
          type: "parquet";
          compression?:
            | "uncompressed"
            | "snappy"
            | "gzip"
            | "zstd"
            | "lz4"
            | (string & {})
            | null;
          rowGroupBytes?: number | null;
        }
      | null;
    schema?: {
      fields?:
        | (
            | {
                type: "int32";
                metadataKey?: string | null;
                name?: string | null;
                required?: boolean | null;
                sqlName?: string | null;
              }
            | {
                type: "int64";
                metadataKey?: string | null;
                name?: string | null;
                required?: boolean | null;
                sqlName?: string | null;
              }
            | {
                type: "float32";
                metadataKey?: string | null;
                name?: string | null;
                required?: boolean | null;
                sqlName?: string | null;
              }
            | {
                type: "float64";
                metadataKey?: string | null;
                name?: string | null;
                required?: boolean | null;
                sqlName?: string | null;
              }
            | {
                type: "bool";
                metadataKey?: string | null;
                name?: string | null;
                required?: boolean | null;
                sqlName?: string | null;
              }
            | {
                type: "string";
                metadataKey?: string | null;
                name?: string | null;
                required?: boolean | null;
                sqlName?: string | null;
              }
            | {
                type: "binary";
                metadataKey?: string | null;
                name?: string | null;
                required?: boolean | null;
                sqlName?: string | null;
              }
            | {
                type: "timestamp";
                metadataKey?: string | null;
                name?: string | null;
                required?: boolean | null;
                sqlName?: string | null;
                unit?:
                  | "second"
                  | "millisecond"
                  | "microsecond"
                  | "nanosecond"
                  | (string & {})
                  | null;
              }
            | {
                type: "json";
                metadataKey?: string | null;
                name?: string | null;
                required?: boolean | null;
                sqlName?: string | null;
              }
            | unknown
          )[]
        | null;
      format?:
        | {
            type: "json";
            metadataKey?: string | null;
            name?: string | null;
            required?: boolean | null;
            sqlName?: string | null;
          }
        | {
            type: "parquet";
            compression?:
              | "uncompressed"
              | "snappy"
              | "gzip"
              | "zstd"
              | "lz4"
              | (string & {})
              | null;
            rowGroupBytes?: number | null;
          }
        | null;
      inferred?: boolean | null;
    } | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListSinksResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(ListSinksResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListSinksResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListSinksResponse>;

export type ListSinksError = DefaultErrors;

export const listSinks: API.PaginatedOperationMethod<
  ListSinksRequest,
  ListSinksResponse,
  ListSinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSinksRequest,
  output: ListSinksResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateSinkRequest {
  /** Path param: Specifies the public ID of the account. */
  accountId: string;
  /** Body param: Defines the name of the Sink. */
  name: string;
  /** Body param: Specifies the type of sink. */
  type: "r2" | "r2_data_catalog" | (string & {});
  /** Body param: Defines the configuration of the R2 Sink. */
  config?:
    | {
        accountId: string;
        bucket: string;
        credentials: { accessKeyId: string; secretAccessKey: string };
        fileNaming?: {
          prefix?: string;
          strategy?: "serial" | "uuid" | "uuid_v7" | "ulid" | (string & {});
          suffix?: string;
        };
        jurisdiction?: string;
        partitioning?: { timePattern?: string };
        path?: string;
        rollingPolicy?: {
          fileSizeBytes?: number;
          inactivitySeconds?: number;
          intervalSeconds?: number;
        };
      }
    | {
        token: string;
        accountId: string;
        bucket: string;
        tableName: string;
        namespace?: string;
        rollingPolicy?: {
          fileSizeBytes?: number;
          inactivitySeconds?: number;
          intervalSeconds?: number;
        };
      };
  /** Body param */
  format?:
    | {
        type: "json";
        decimalEncoding?: "number" | "string" | "bytes" | (string & {});
        timestampFormat?: "rfc3339" | "unix_millis" | (string & {});
        unstructured?: boolean;
      }
    | {
        type: "parquet";
        compression?:
          | "uncompressed"
          | "snappy"
          | "gzip"
          | "zstd"
          | "lz4"
          | (string & {});
        rowGroupBytes?: number | null;
      };
  /** Body param */
  schema?: {
    fields?: (
      | {
          type: "int32";
          metadataKey?: string | null;
          name?: string;
          required?: boolean;
          sqlName?: string;
        }
      | {
          type: "int64";
          metadataKey?: string | null;
          name?: string;
          required?: boolean;
          sqlName?: string;
        }
      | {
          type: "float32";
          metadataKey?: string | null;
          name?: string;
          required?: boolean;
          sqlName?: string;
        }
      | {
          type: "float64";
          metadataKey?: string | null;
          name?: string;
          required?: boolean;
          sqlName?: string;
        }
      | {
          type: "bool";
          metadataKey?: string | null;
          name?: string;
          required?: boolean;
          sqlName?: string;
        }
      | {
          type: "string";
          metadataKey?: string | null;
          name?: string;
          required?: boolean;
          sqlName?: string;
        }
      | {
          type: "binary";
          metadataKey?: string | null;
          name?: string;
          required?: boolean;
          sqlName?: string;
        }
      | {
          type: "timestamp";
          metadataKey?: string | null;
          name?: string;
          required?: boolean;
          sqlName?: string;
          unit?:
            | "second"
            | "millisecond"
            | "microsecond"
            | "nanosecond"
            | (string & {});
        }
      | {
          type: "json";
          metadataKey?: string | null;
          name?: string;
          required?: boolean;
          sqlName?: string;
        }
      | unknown
    )[];
    format?:
      | {
          type: "json";
          metadataKey?: string | null;
          name?: string;
          required?: boolean;
          sqlName?: string;
        }
      | {
          type: "parquet";
          compression?:
            | "uncompressed"
            | "snappy"
            | "gzip"
            | "zstd"
            | "lz4"
            | (string & {});
          rowGroupBytes?: number | null;
        };
    inferred?: boolean | null;
  };
}

export const CreateSinkRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.String,
      type: Schema.Union([
        Schema.Literals(["r2", "r2_data_catalog"]),
        Schema.String,
      ]),
      config: Schema.optional(
        Schema.Union([
          CloudflarePipelinesR2DataCatalogTable,
          CloudflarePipelinesR2Table,
        ]),
      ),
      format: Schema.optional(Schema.Union([Json, Parquet])),
      schema: Schema.optional(Schema2),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/pipelines/v1/sinks",
      }),
    ),
) as unknown as Schema.Codec<CreateSinkRequest>;

export interface CreateSinkResponse {
  /** Indicates a unique identifier for this sink. */
  id: string;
  createdAt: string;
  modifiedAt: string;
  /** Defines the name of the Sink. */
  name: string;
  /** Specifies the type of sink. */
  type: "r2" | "r2_data_catalog" | (string & {});
  /** R2 Data Catalog Sink */
  config?:
    | {
        accountId: string;
        bucket: string;
        credentials?: { accessKeyId: string; secretAccessKey: string } | null;
        fileNaming?: {
          prefix?: string | null;
          strategy?:
            | "serial"
            | "uuid"
            | "uuid_v7"
            | "ulid"
            | (string & {})
            | null;
          suffix?: string | null;
        } | null;
        jurisdiction?: string | null;
        partitioning?: { timePattern?: string | null } | null;
        path?: string | null;
        rollingPolicy?: {
          fileSizeBytes?: number | null;
          inactivitySeconds?: number | null;
          intervalSeconds?: number | null;
        } | null;
      }
    | {
        token: string;
        accountId: string;
        bucket: string;
        tableName: string;
        namespace?: string | null;
        rollingPolicy?: {
          fileSizeBytes?: number | null;
          inactivitySeconds?: number | null;
          intervalSeconds?: number | null;
        } | null;
      }
    | null;
  format?:
    | {
        type: "json";
        decimalEncoding?: "number" | "string" | "bytes" | (string & {}) | null;
        timestampFormat?: "rfc3339" | "unix_millis" | (string & {}) | null;
        unstructured?: boolean | null;
      }
    | {
        type: "parquet";
        compression?:
          | "uncompressed"
          | "snappy"
          | "gzip"
          | "zstd"
          | "lz4"
          | (string & {})
          | null;
        rowGroupBytes?: number | null;
      }
    | null;
  schema?: {
    fields?:
      | (
          | {
              type: "int32";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "int64";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "float32";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "float64";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "bool";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "string";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "binary";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "timestamp";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
              unit?:
                | "second"
                | "millisecond"
                | "microsecond"
                | "nanosecond"
                | (string & {})
                | null;
            }
          | {
              type: "json";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | unknown
        )[]
      | null;
    format?:
      | {
          type: "json";
          metadataKey?: string | null;
          name?: string | null;
          required?: boolean | null;
          sqlName?: string | null;
        }
      | {
          type: "parquet";
          compression?:
            | "uncompressed"
            | "snappy"
            | "gzip"
            | "zstd"
            | "lz4"
            | (string & {})
            | null;
          rowGroupBytes?: number | null;
        }
      | null;
    inferred?: boolean | null;
  } | null;
}

export const CreateSinkResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      modifiedAt: Schema.String,
      name: Schema.String,
      type: Schema.Union([
        Schema.Literals(["r2", "r2_data_catalog"]),
        Schema.String,
      ]),
      config: Schema.optional(
        Schema.Union([
          Schema.Union([
            CloudflarePipelinesR2DataCatalogTable,
            CloudflarePipelinesR2Table2,
          ]),
          Schema.Null,
        ]),
      ),
      format: Schema.optional(
        Schema.Union([Schema.Union([Json, Parquet]), Schema.Null]),
      ),
      schema: Schema.optional(Schema.Union([Schema2, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          modifiedAt: "modified_at",
          name: "name",
          type: "type",
          config: "config",
          format: "format",
          schema: "schema",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateSinkResponse>;

export type CreateSinkError =
  | DefaultErrors
  | SinkAuthFailed
  | InvalidSinkConfig
  | SinkAlreadyExists;

export const createSink: API.OperationMethod<
  CreateSinkRequest,
  CreateSinkResponse,
  CreateSinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateSinkRequest,
  output: CreateSinkResponse,
  errors: [SinkAuthFailed, InvalidSinkConfig, SinkAlreadyExists],
}));

export interface DeleteSinkRequest {
  sinkId: string;
  /** Path param: Specifies the public ID of the account. */
  accountId: string;
  /** Query param: Delete sink forcefully, including deleting any dependent pipelines. */
  force?: string;
}

export const DeleteSinkRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      sinkId: Schema.String.pipe(T.HttpPath("sinkId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      force: Schema.optional(Schema.String).pipe(T.HttpQuery("force")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/pipelines/v1/sinks/{sinkId}",
      }),
    ),
) as unknown as Schema.Codec<DeleteSinkRequest>;

export type DeleteSinkResponse = unknown;

export const DeleteSinkResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () => Schema.Unknown.pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteSinkResponse>;

export type DeleteSinkError =
  | DefaultErrors
  | SinkNotFound
  | InvalidSinkId
  | SinkInUse;

export const deleteSink: API.OperationMethod<
  DeleteSinkRequest,
  DeleteSinkResponse,
  DeleteSinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteSinkRequest,
  output: DeleteSinkResponse,
  errors: [SinkNotFound, InvalidSinkId, SinkInUse],
}));

// =============================================================================
// SqlPipeline
// =============================================================================

export interface ValidateSqlPipelineRequest {
  /** Path param: Specifies the public ID of the account. */
  accountId: string;
  /** Body param: Specifies SQL to validate. */
  sql: string;
}

export const ValidateSqlPipelineRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      sql: Schema.String,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/pipelines/v1/validate_sql",
      }),
    ),
  ) as unknown as Schema.Codec<ValidateSqlPipelineRequest>;

export interface ValidateSqlPipelineResponse {
  /** Indicates tables involved in the processing. */
  tables: Record<string, unknown>;
  graph?: {
    edges: {
      destId: number;
      edgeType: string;
      keyType: string;
      srcId: number;
      valueType: string;
    }[];
    nodes: {
      description: string;
      nodeId: number;
      operator: string;
      parallelism: number;
    }[];
  } | null;
}

export const ValidateSqlPipelineResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      tables: Schema.Record(Schema.String, Schema.Unknown),
      graph: Schema.optional(Schema.Union([Graph, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<ValidateSqlPipelineResponse>;

export type ValidateSqlPipelineError =
  | DefaultErrors
  | TableNotFound
  | InvalidSql;

export const validateSqlPipeline: API.OperationMethod<
  ValidateSqlPipelineRequest,
  ValidateSqlPipelineResponse,
  ValidateSqlPipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ValidateSqlPipelineRequest,
  output: ValidateSqlPipelineResponse,
  errors: [TableNotFound, InvalidSql],
}));

// =============================================================================
// Stream
// =============================================================================

export interface GetStreamRequest {
  streamId: string;
  /** Specifies the public ID of the account. */
  accountId: string;
}

export const GetStreamRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    streamId: Schema.String.pipe(T.HttpPath("streamId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/pipelines/v1/streams/{streamId}",
    }),
  ),
) as unknown as Schema.Codec<GetStreamRequest>;

export interface GetStreamResponse {
  /** Indicates a unique identifier for this stream. */
  id: string;
  createdAt: string;
  http: {
    authentication: boolean;
    enabled: boolean;
    cors?: { origins?: string[] | null } | null;
  };
  modifiedAt: string;
  /** Indicates the name of the Stream. */
  name: string;
  /** Indicates the current version of this stream. */
  version: number;
  workerBinding: { enabled: boolean };
  /** Indicates the endpoint URL of this stream. */
  endpoint?: string | null;
  format?:
    | {
        type: "json";
        decimalEncoding?: "number" | "string" | "bytes" | (string & {}) | null;
        timestampFormat?: "rfc3339" | "unix_millis" | (string & {}) | null;
        unstructured?: boolean | null;
      }
    | {
        type: "parquet";
        compression?:
          | "uncompressed"
          | "snappy"
          | "gzip"
          | "zstd"
          | "lz4"
          | (string & {})
          | null;
        rowGroupBytes?: number | null;
      }
    | null;
  schema?: {
    fields?:
      | (
          | {
              type: "int32";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "int64";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "float32";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "float64";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "bool";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "string";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "binary";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "timestamp";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
              unit?:
                | "second"
                | "millisecond"
                | "microsecond"
                | "nanosecond"
                | (string & {})
                | null;
            }
          | {
              type: "json";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | unknown
        )[]
      | null;
    format?:
      | {
          type: "json";
          metadataKey?: string | null;
          name?: string | null;
          required?: boolean | null;
          sqlName?: string | null;
        }
      | {
          type: "parquet";
          compression?:
            | "uncompressed"
            | "snappy"
            | "gzip"
            | "zstd"
            | "lz4"
            | (string & {})
            | null;
          rowGroupBytes?: number | null;
        }
      | null;
    inferred?: boolean | null;
  } | null;
}

export const GetStreamResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      http: Http,
      modifiedAt: Schema.String,
      name: Schema.String,
      version: Schema.Number,
      workerBinding: WorkerBinding,
      endpoint: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      format: Schema.optional(
        Schema.Union([Schema.Union([Json, Parquet]), Schema.Null]),
      ),
      schema: Schema.optional(Schema.Union([Schema2, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          http: "http",
          modifiedAt: "modified_at",
          name: "name",
          version: "version",
          workerBinding: "worker_binding",
          endpoint: "endpoint",
          format: "format",
          schema: "schema",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetStreamResponse>;

export type GetStreamError = DefaultErrors | StreamNotFound | InvalidStreamId;

export const getStream: API.OperationMethod<
  GetStreamRequest,
  GetStreamResponse,
  GetStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetStreamRequest,
  output: GetStreamResponse,
  errors: [StreamNotFound, InvalidStreamId],
}));

export interface ListStreamsRequest {
  /** Path param: Specifies the public ID of the account. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Filters streams by name (case-insensitive substring). */
  name?: string;
  /** Query param: Specifies the public ID of the pipeline. */
  pipelineId?: string;
}

export const ListStreamsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
      pipelineId: Schema.optional(Schema.String).pipe(
        T.HttpQuery("pipeline_id"),
      ),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/pipelines/v1/streams",
      }),
    ),
) as unknown as Schema.Codec<ListStreamsRequest>;

export interface ListStreamsResponse {
  result: {
    id: string;
    createdAt: string;
    http: {
      authentication: boolean;
      enabled: boolean;
      cors?: { origins?: string[] | null } | null;
    };
    modifiedAt: string;
    name: string;
    version: number;
    workerBinding: { enabled: boolean };
    endpoint?: string | null;
    format?:
      | {
          type: "json";
          decimalEncoding?:
            | "number"
            | "string"
            | "bytes"
            | (string & {})
            | null;
          timestampFormat?: "rfc3339" | "unix_millis" | (string & {}) | null;
          unstructured?: boolean | null;
        }
      | {
          type: "parquet";
          compression?:
            | "uncompressed"
            | "snappy"
            | "gzip"
            | "zstd"
            | "lz4"
            | (string & {})
            | null;
          rowGroupBytes?: number | null;
        }
      | null;
    schema?: {
      fields?:
        | (
            | {
                type: "int32";
                metadataKey?: string | null;
                name?: string | null;
                required?: boolean | null;
                sqlName?: string | null;
              }
            | {
                type: "int64";
                metadataKey?: string | null;
                name?: string | null;
                required?: boolean | null;
                sqlName?: string | null;
              }
            | {
                type: "float32";
                metadataKey?: string | null;
                name?: string | null;
                required?: boolean | null;
                sqlName?: string | null;
              }
            | {
                type: "float64";
                metadataKey?: string | null;
                name?: string | null;
                required?: boolean | null;
                sqlName?: string | null;
              }
            | {
                type: "bool";
                metadataKey?: string | null;
                name?: string | null;
                required?: boolean | null;
                sqlName?: string | null;
              }
            | {
                type: "string";
                metadataKey?: string | null;
                name?: string | null;
                required?: boolean | null;
                sqlName?: string | null;
              }
            | {
                type: "binary";
                metadataKey?: string | null;
                name?: string | null;
                required?: boolean | null;
                sqlName?: string | null;
              }
            | {
                type: "timestamp";
                metadataKey?: string | null;
                name?: string | null;
                required?: boolean | null;
                sqlName?: string | null;
                unit?:
                  | "second"
                  | "millisecond"
                  | "microsecond"
                  | "nanosecond"
                  | (string & {})
                  | null;
              }
            | {
                type: "json";
                metadataKey?: string | null;
                name?: string | null;
                required?: boolean | null;
                sqlName?: string | null;
              }
            | unknown
          )[]
        | null;
      format?:
        | {
            type: "json";
            metadataKey?: string | null;
            name?: string | null;
            required?: boolean | null;
            sqlName?: string | null;
          }
        | {
            type: "parquet";
            compression?:
              | "uncompressed"
              | "snappy"
              | "gzip"
              | "zstd"
              | "lz4"
              | (string & {})
              | null;
            rowGroupBytes?: number | null;
          }
        | null;
      inferred?: boolean | null;
    } | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListStreamsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(ListStreamsResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListSinksResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListStreamsResponse>;

export type ListStreamsError = DefaultErrors;

export const listStreams: API.PaginatedOperationMethod<
  ListStreamsRequest,
  ListStreamsResponse,
  ListStreamsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListStreamsRequest,
  output: ListStreamsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateStreamRequest {
  /** Path param: Specifies the public ID of the account. */
  accountId: string;
  /** Body param: Specifies the name of the Stream. */
  name: string;
  /** Body param */
  format?:
    | {
        type: "json";
        decimalEncoding?: "number" | "string" | "bytes" | (string & {});
        timestampFormat?: "rfc3339" | "unix_millis" | (string & {});
        unstructured?: boolean;
      }
    | {
        type: "parquet";
        compression?:
          | "uncompressed"
          | "snappy"
          | "gzip"
          | "zstd"
          | "lz4"
          | (string & {});
        rowGroupBytes?: number | null;
      };
  /** Body param */
  http?: {
    authentication: boolean;
    enabled: boolean;
    cors?: { origins?: string[] };
  };
  /** Body param */
  schema?: {
    fields?: (
      | {
          type: "int32";
          metadataKey?: string | null;
          name?: string;
          required?: boolean;
          sqlName?: string;
        }
      | {
          type: "int64";
          metadataKey?: string | null;
          name?: string;
          required?: boolean;
          sqlName?: string;
        }
      | {
          type: "float32";
          metadataKey?: string | null;
          name?: string;
          required?: boolean;
          sqlName?: string;
        }
      | {
          type: "float64";
          metadataKey?: string | null;
          name?: string;
          required?: boolean;
          sqlName?: string;
        }
      | {
          type: "bool";
          metadataKey?: string | null;
          name?: string;
          required?: boolean;
          sqlName?: string;
        }
      | {
          type: "string";
          metadataKey?: string | null;
          name?: string;
          required?: boolean;
          sqlName?: string;
        }
      | {
          type: "binary";
          metadataKey?: string | null;
          name?: string;
          required?: boolean;
          sqlName?: string;
        }
      | {
          type: "timestamp";
          metadataKey?: string | null;
          name?: string;
          required?: boolean;
          sqlName?: string;
          unit?:
            | "second"
            | "millisecond"
            | "microsecond"
            | "nanosecond"
            | (string & {});
        }
      | {
          type: "json";
          metadataKey?: string | null;
          name?: string;
          required?: boolean;
          sqlName?: string;
        }
      | unknown
    )[];
    format?:
      | {
          type: "json";
          metadataKey?: string | null;
          name?: string;
          required?: boolean;
          sqlName?: string;
        }
      | {
          type: "parquet";
          compression?:
            | "uncompressed"
            | "snappy"
            | "gzip"
            | "zstd"
            | "lz4"
            | (string & {});
          rowGroupBytes?: number | null;
        };
    inferred?: boolean | null;
  };
  /** Body param */
  workerBinding?: { enabled: boolean };
}

export const CreateStreamRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.String,
      format: Schema.optional(Schema.Union([Json, Parquet])),
      http: Schema.optional(Http),
      schema: Schema.optional(Schema2),
      workerBinding: Schema.optional(WorkerBinding),
    }).pipe(
      Schema.encodeKeys({
        name: "name",
        format: "format",
        http: "http",
        schema: "schema",
        workerBinding: "worker_binding",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/pipelines/v1/streams",
      }),
    ),
) as unknown as Schema.Codec<CreateStreamRequest>;

export interface CreateStreamResponse {
  /** Indicates a unique identifier for this stream. */
  id: string;
  createdAt: string;
  http: {
    authentication: boolean;
    enabled: boolean;
    cors?: { origins?: string[] | null } | null;
  };
  modifiedAt: string;
  /** Indicates the name of the Stream. */
  name: string;
  /** Indicates the current version of this stream. */
  version: number;
  workerBinding: { enabled: boolean };
  /** Indicates the endpoint URL of this stream. */
  endpoint?: string | null;
  format?:
    | {
        type: "json";
        decimalEncoding?: "number" | "string" | "bytes" | (string & {}) | null;
        timestampFormat?: "rfc3339" | "unix_millis" | (string & {}) | null;
        unstructured?: boolean | null;
      }
    | {
        type: "parquet";
        compression?:
          | "uncompressed"
          | "snappy"
          | "gzip"
          | "zstd"
          | "lz4"
          | (string & {})
          | null;
        rowGroupBytes?: number | null;
      }
    | null;
  schema?: {
    fields?:
      | (
          | {
              type: "int32";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "int64";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "float32";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "float64";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "bool";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "string";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "binary";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | {
              type: "timestamp";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
              unit?:
                | "second"
                | "millisecond"
                | "microsecond"
                | "nanosecond"
                | (string & {})
                | null;
            }
          | {
              type: "json";
              metadataKey?: string | null;
              name?: string | null;
              required?: boolean | null;
              sqlName?: string | null;
            }
          | unknown
        )[]
      | null;
    format?:
      | {
          type: "json";
          metadataKey?: string | null;
          name?: string | null;
          required?: boolean | null;
          sqlName?: string | null;
        }
      | {
          type: "parquet";
          compression?:
            | "uncompressed"
            | "snappy"
            | "gzip"
            | "zstd"
            | "lz4"
            | (string & {})
            | null;
          rowGroupBytes?: number | null;
        }
      | null;
    inferred?: boolean | null;
  } | null;
}

export const CreateStreamResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      http: Http,
      modifiedAt: Schema.String,
      name: Schema.String,
      version: Schema.Number,
      workerBinding: WorkerBinding,
      endpoint: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      format: Schema.optional(
        Schema.Union([Schema.Union([Json, Parquet]), Schema.Null]),
      ),
      schema: Schema.optional(Schema.Union([Schema2, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          http: "http",
          modifiedAt: "modified_at",
          name: "name",
          version: "version",
          workerBinding: "worker_binding",
          endpoint: "endpoint",
          format: "format",
          schema: "schema",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateStreamResponse>;

export type CreateStreamError =
  | DefaultErrors
  | InvalidStreamName
  | StreamAlreadyExists;

export const createStream: API.OperationMethod<
  CreateStreamRequest,
  CreateStreamResponse,
  CreateStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateStreamRequest,
  output: CreateStreamResponse,
  errors: [InvalidStreamName, StreamAlreadyExists],
}));

export interface PatchStreamRequest {
  streamId: string;
  /** Path param: Specifies the public ID of the account. */
  accountId: string;
  /** Body param */
  http?: {
    authentication: boolean;
    enabled: boolean;
    cors?: { origins?: string[] };
  };
  /** Body param */
  workerBinding?: { enabled: boolean };
}

export const PatchStreamRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      streamId: Schema.String.pipe(T.HttpPath("streamId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      http: Schema.optional(Http),
      workerBinding: Schema.optional(WorkerBinding),
    }).pipe(
      Schema.encodeKeys({ http: "http", workerBinding: "worker_binding" }),
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/pipelines/v1/streams/{streamId}",
      }),
    ),
) as unknown as Schema.Codec<PatchStreamRequest>;

export interface PatchStreamResponse {
  /** Indicates a unique identifier for this stream. */
  id: string;
  createdAt: string;
  http: {
    authentication: boolean;
    enabled: boolean;
    cors?: { origins?: string[] | null } | null;
  };
  modifiedAt: string;
  /** Indicates the name of the Stream. */
  name: string;
  /** Indicates the current version of this stream. */
  version: number;
  workerBinding: { enabled: boolean };
  /** Indicates the endpoint URL of this stream. */
  endpoint?: string | null;
  format?:
    | {
        type: "json";
        decimalEncoding?: "number" | "string" | "bytes" | (string & {}) | null;
        timestampFormat?: "rfc3339" | "unix_millis" | (string & {}) | null;
        unstructured?: boolean | null;
      }
    | {
        type: "parquet";
        compression?:
          | "uncompressed"
          | "snappy"
          | "gzip"
          | "zstd"
          | "lz4"
          | (string & {})
          | null;
        rowGroupBytes?: number | null;
      }
    | null;
}

export const PatchStreamResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      http: Http,
      modifiedAt: Schema.String,
      name: Schema.String,
      version: Schema.Number,
      workerBinding: WorkerBinding,
      endpoint: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      format: Schema.optional(
        Schema.Union([Schema.Union([Json, Parquet]), Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          http: "http",
          modifiedAt: "modified_at",
          name: "name",
          version: "version",
          workerBinding: "worker_binding",
          endpoint: "endpoint",
          format: "format",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PatchStreamResponse>;

export type PatchStreamError = DefaultErrors | StreamNotFound;

export const patchStream: API.OperationMethod<
  PatchStreamRequest,
  PatchStreamResponse,
  PatchStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchStreamRequest,
  output: PatchStreamResponse,
  errors: [StreamNotFound],
}));

export interface DeleteStreamRequest {
  streamId: string;
  /** Path param: Specifies the public ID of the account. */
  accountId: string;
  /** Query param: Delete stream forcefully, including deleting any dependent pipelines. */
  force?: string;
}

export const DeleteStreamRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      streamId: Schema.String.pipe(T.HttpPath("streamId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      force: Schema.optional(Schema.String).pipe(T.HttpQuery("force")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/pipelines/v1/streams/{streamId}",
      }),
    ),
) as unknown as Schema.Codec<DeleteStreamRequest>;

export type DeleteStreamResponse = unknown;

export const DeleteStreamResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () => Schema.Unknown.pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteStreamResponse>;

export type DeleteStreamError =
  | DefaultErrors
  | PipelineNotExists
  | StreamNotFound
  | InvalidStreamId
  | StreamInUse;

export const deleteStream: API.OperationMethod<
  DeleteStreamRequest,
  DeleteStreamResponse,
  DeleteStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteStreamRequest,
  output: DeleteStreamResponse,
  errors: [PipelineNotExists, StreamNotFound, InvalidStreamId, StreamInUse],
}));

// =============================================================================
// V1Pipeline
// =============================================================================

export interface GetV1PipelineRequest {
  pipelineId: string;
  /** Specifies the public ID of the account. */
  accountId: string;
}

export const GetV1PipelineRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      pipelineId: Schema.String.pipe(T.HttpPath("pipelineId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/pipelines/v1/pipelines/{pipelineId}",
      }),
    ),
) as unknown as Schema.Codec<GetV1PipelineRequest>;

export interface GetV1PipelineResponse {
  /** Indicates a unique identifier for this pipeline. */
  id: string;
  createdAt: string;
  modifiedAt: string;
  /** Indicates the name of the Pipeline. */
  name: string;
  /** Specifies SQL for the Pipeline processing flow. */
  sql: string;
  /** Indicates the current status of the Pipeline. */
  status: string;
  /** List of streams and sinks used by this pipeline. */
  tables: {
    id: string;
    latest: number;
    name: string;
    type: "stream" | "sink" | (string & {});
    version: number;
  }[];
  /** Indicates the reason for the failure of the Pipeline. */
  failureReason?: string | null;
}

export const GetV1PipelineResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      modifiedAt: Schema.String,
      name: Schema.String,
      sql: Schema.String,
      status: Schema.String,
      tables: Schema.Array(Table),
      failureReason: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          modifiedAt: "modified_at",
          name: "name",
          sql: "sql",
          status: "status",
          tables: "tables",
          failureReason: "failure_reason",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetV1PipelineResponse>;

export type GetV1PipelineError = DefaultErrors | PipelineNotExists;

export const getV1Pipeline: API.OperationMethod<
  GetV1PipelineRequest,
  GetV1PipelineResponse,
  GetV1PipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetV1PipelineRequest,
  output: GetV1PipelineResponse,
  errors: [PipelineNotExists],
}));

export interface ListV1PipelineRequest {
  /** Path param: Specifies the public ID of the account. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Filters pipelines by name (case-insensitive substring). */
  name?: string;
}

export const ListV1PipelineRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/pipelines/v1/pipelines",
      }),
    ),
) as unknown as Schema.Codec<ListV1PipelineRequest>;

export interface ListV1PipelineResponse {
  result: {
    id: string;
    createdAt: string;
    modifiedAt: string;
    name: string;
    sql: string;
    status: string;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListV1PipelineResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListV1PipelineResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListSinksResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListV1PipelineResponse>;

export type ListV1PipelineError = DefaultErrors;

export const listV1Pipeline: API.PaginatedOperationMethod<
  ListV1PipelineRequest,
  ListV1PipelineResponse,
  ListV1PipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListV1PipelineRequest,
  output: ListV1PipelineResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateV1PipelineRequest {
  /** Path param: Specifies the public ID of the account. */
  accountId: string;
  /** Body param: Specifies the name of the Pipeline. */
  name: string;
  /** Body param: Specifies SQL for the Pipeline processing flow. */
  sql: string;
}

export const CreateV1PipelineRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.String,
      sql: Schema.String,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/pipelines/v1/pipelines",
      }),
    ),
  ) as unknown as Schema.Codec<CreateV1PipelineRequest>;

export interface CreateV1PipelineResponse {
  /** Indicates a unique identifier for this pipeline. */
  id: string;
  createdAt: string;
  modifiedAt: string;
  /** Indicates the name of the Pipeline. */
  name: string;
  /** Specifies SQL for the Pipeline processing flow. */
  sql: string;
  /** Indicates the current status of the Pipeline. */
  status: string;
}

export const CreateV1PipelineResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      modifiedAt: Schema.String,
      name: Schema.String,
      sql: Schema.String,
      status: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          modifiedAt: "modified_at",
          name: "name",
          sql: "sql",
          status: "status",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateV1PipelineResponse>;

export type CreateV1PipelineError =
  | DefaultErrors
  | TableNotFound
  | InvalidSql
  | PipelineAlreadyExists;

export const createV1Pipeline: API.OperationMethod<
  CreateV1PipelineRequest,
  CreateV1PipelineResponse,
  CreateV1PipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateV1PipelineRequest,
  output: CreateV1PipelineResponse,
  errors: [TableNotFound, InvalidSql, PipelineAlreadyExists],
}));

export interface DeleteV1PipelineRequest {
  pipelineId: string;
  /** Specifies the public ID of the account. */
  accountId: string;
}

export const DeleteV1PipelineRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      pipelineId: Schema.String.pipe(T.HttpPath("pipelineId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/pipelines/v1/pipelines/{pipelineId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteV1PipelineRequest>;

export type DeleteV1PipelineResponse = unknown;

export const DeleteV1PipelineResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteV1PipelineResponse>;

export type DeleteV1PipelineError = DefaultErrors | PipelineNotExists;

export const deleteV1Pipeline: API.OperationMethod<
  DeleteV1PipelineRequest,
  DeleteV1PipelineResponse,
  DeleteV1PipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteV1PipelineRequest,
  output: DeleteV1PipelineResponse,
  errors: [PipelineNotExists],
}));
